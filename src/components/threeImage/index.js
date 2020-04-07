import React from 'react';
import * as THREE from "three";
import { Power4, TweenLite } from 'gsap';

import Image from './styles';
import { STRENGTH, VERTEX_SHADER, FRAGMENT_SHADER } from './shaders';
import '../../utils/polyfills';

class ThreeImage extends React.Component {
  _canvas = null;
  _image = null;

  setup() {
    this.setViewport();

    // renderer
    this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    this.renderer.setSize(this.viewport.width, this.viewport.height);
    this.renderer.setPixelRatio = window.devicePixelRatio;
    this._canvas.appendChild(this.renderer.domElement);

    // scene
    this.scene = new THREE.Scene();

    // camera
    this.camera = new THREE.PerspectiveCamera(40, this.viewport.aspectRatio, 0.1, 100);
    this.camera.position.set(0, 0, 3);

    //mouse
    this.mouse = new THREE.Vector2();

    // time
    this.timeSpeed = 2;
    this.time = 0;
    this.clock = new THREE.Clock();

    this.renderer.setAnimationLoop(this.renderScene);
    this.setViewSize();
  }

  init() {
    this.position = new THREE.Vector3(0, 0, 0);
    this.scale = new THREE.Vector3(1, 1, 1);
    this.geometry = new THREE.PlaneBufferGeometry(1, 1, 32, 32);
    this.uniforms = {
      uTexture: {
        value: null
      },
      uOffset: {
        value: new THREE.Vector2(0.0, 0.0)
      }
    };
    this.material = new THREE.ShaderMaterial({
      uniforms: this.uniforms,
      vertexShader: VERTEX_SHADER,
      fragmentShader: FRAGMENT_SHADER,
      transparent: true
    });
    this.plane = new THREE.Mesh(this.geometry, this.material);
    this.scene.add(this.plane);
  }

  onWindowResize = () => {
    this.setViewport();
    this.setViewSize();

    this.camera.aspect = this.viewport.aspectRatio;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(this.viewport.width, this.viewport.height);
  }

  onMouseMove = event => {
    // get normalized mouse position on viewport
    this.mouse.x = (event.clientX / this.viewport.width) * 2 - 1;
    this.mouse.y = -(event.clientY / this.viewport.height) * 2 + 1;

    let x = this.mouse.x.map(-1, 1, -this.viewSize.width / 2, this.viewSize.width / 2);
    let y = this.mouse.y.map(-1, 1, -this.viewSize.height / 2, this.viewSize.height / 2);

    this.position = new THREE.Vector3(x, y, 0);

    TweenLite.to(this.plane.position, 1, {
      x: x,
      y: y,
      ease: Power4.easeOut,
      onUpdate: this.onPositionUpdate
    });

    this.onPositionUpdate();
  }

  onPositionUpdate = () => {
    // compute offset
    let offset = this.plane.position
      .clone()
      .sub(this.position)
      .multiplyScalar(STRENGTH)
    this.uniforms.uOffset.value = offset;
  }

  loadTexture() {
    this.item = { img: this._image };

    const THREEtextureLoader = new THREE.TextureLoader();

    return new Promise((resolve, reject) => {
      if (this.item.img) {
        THREEtextureLoader.load(
          // resource URL
          this.item.img.src,
          // onLoad callback
          image => {
            this.item.texture = image;

            resolve();
          },
          // onProgress callback currently not supported
          undefined,
          // onError callback
          error => {
            console.error('An error happened.', error)
            reject(error)
          }
        )
      }
    });
  }

  loadImage() {
    if (!this.item.texture) return;

    let imageRatio =
      this.item.img.naturalWidth / this.item.img.naturalHeight;
    this.scale = new THREE.Vector3(imageRatio, 1, 1);
    this.uniforms.uTexture.value = this.item.texture;
    this.plane.scale.copy(this.scale);
  }

  setViewport = () => {
    let width = document.body.clientWidth;
    let height = document.body.clientHeight;
    let aspectRatio = width / height;

    this.viewport = {
      width,
      height,
      aspectRatio
    };
  }

  setViewSize = () => {
    let distance = this.camera.position.z;
    let vFov = (this.camera.fov * Math.PI) / 180;
    let height = 2 * Math.tan(vFov / 2) * distance;
    let width = height * this.viewport.aspectRatio;

    this.viewSize = { width, height, vFov };
  }

  renderScene = () => {
    this.time += this.clock.getDelta() * this.timeSpeed;
    this.renderer.render(this.scene, this.camera);
  }

  componentDidMount() {
    this.setup();
    this.init();

    this.loadTexture().then(() => {
      this.loadImage();
    });

    document.addEventListener('mousemove', this.onMouseMove, false);
    window.addEventListener('resize', this.onWindowResize, false);
  }

  componentWillUnmount() {
    document.removeEventListener('mousemove', this.onMouseMove, false);
    window.removeEventListener('resize', this.onWindowResize, false);
  }

  render() {
    const { className, src } = this.props;

    return (
      <Image className={`background-img ${className}`} ref={ref => { this._canvas = ref }}>
        <img src={src} ref={ref => { this._image = ref; }} alt="Profile" />
      </Image>
    )
  }
}

export default ThreeImage;

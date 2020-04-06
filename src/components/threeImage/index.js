import React from 'react';
import * as THREE from "three";

import Image from './styles';
import { VERTEX_SHADER, FRAGMENT_SHADER } from './shaders';

class ThreeImage extends React.Component {
  camera = null;
  scene = null;
  renderer = null;
  geometry = null;
  material = null;
  cube = null;
  _canvas = null;
  _image = null;

  setup() {
    this.image = this._image;

    // renderer
    this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    this.renderer.setSize(this._canvas.offsetWidth, this._canvas.offsetHeight);
    this.renderer.setPixelRatio = window.devicePixelRatio;
    this._canvas.appendChild(this.renderer.domElement);

    // scene
    this.scene = new THREE.Scene();

    // camera
    this.camera = new THREE.PerspectiveCamera(40, this._canvas.offsetWidth / this._canvas.offsetHeight, 0.1, 100);
    this.camera.position.set(0, 0, 3);

    //mouse
    // this.mouse = new THREE.Vector2();

    // time
    // this.timeSpeed = 2;
    // this.time = 0;
    // this.clock = new THREE.Clock();

    this.renderer.setAnimationLoop(this.renderScene);
    this.createEventsListeners();
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

  createEventsListeners = () => {
    // this.container.addEventListener('mousemove', this.onMouseMove, false);
    window.addEventListener('resize', this.onWindowResize, false);
  }

  onWindowResize = () => {
    this.camera.aspect = this._canvas.offsetWidth / this._canvas.offsetHeight;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(this._canvas.offsetWidth, this._canvas.offsetHeight);
  }

  componentDidMount() {
    this.setup();
    this.init();

    this.loadTexture().then(() => {
      this.loadImage();
    });

    // window.addEventListener('resize', () => {
    //   this.renderer.setSize(this._canvas.offsetWidth, this._canvas.offsetHeight);
    // });
  }

  loadTexture() {
    this.item = { img: this.image };

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

  renderScene = () => {
    // this.time += this.clock.getDelta() * this.timeSpeed;
    this.renderer.render(this.scene, this.camera);
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

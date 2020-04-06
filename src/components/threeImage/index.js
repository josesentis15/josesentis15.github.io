import React from 'react';
import * as THREE from "three";

import Image from './styles';

class ThreeImage extends React.Component {
  camera = null;
  scene = null;
  renderer = null;
  geometry = null;
  material = null;
  cube = null;

  animate = () => {
    this.renderer.render(this.scene, this.camera);
    requestAnimationFrame(this.animate);
  }

  componentDidMount() {
    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    this.renderer = new THREE.WebGLRenderer();
    this.geometry = new THREE.BoxGeometry(1, 1, 1);
    this.material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    this.cube = new THREE.Mesh(this.geometry, this.material);
    this.scene.add(this.cube);
    this.camera.position.z = 5;

    this.renderer.setSize(this._canvas.offsetWidth, this._canvas.offsetHeight);
    this._canvas.appendChild(this.renderer.domElement);

    this.animate();

      window.addEventListener('resize', () => {
        this.renderer.setSize(this._canvas.offsetWidth, this._canvas.offsetHeight);
      });
  }

  render() {
    const { className } = this.props;

    return (
      <Image className={`background-img ${className}`} ref={ref => { this._canvas = ref }}>
        <img ref={ref => { this._image = ref; }} alt="Profile" />
      </Image>
    )
  }
}

export default ThreeImage;

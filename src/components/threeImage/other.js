onPositionUpdate = () => {
  // compute offset
  let offset = this.plane.position
    .clone()
    .sub(this.position)
    .multiplyScalar(STRENGTH)
  this.uniforms.uOffset.value = offset;
}

render = () => {
  this.time += this.clock.getDelta() * this.timeSpeed;
  this.renderer.render(this.scene, this.camera);
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

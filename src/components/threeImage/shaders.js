const STRENGTH = -0.25;

const VERTEX_SHADER = `
  uniform vec2 uOffset;
  varying vec2 vUv;

  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

const FRAGMENT_SHADER = `
  uniform sampler2D uTexture;
  uniform vec2 uOffset;
  varying vec2 vUv;

  vec3 rgbShift(sampler2D texture, vec2 uv, vec2 offset) {
    float r = texture2D(uTexture,vUv + uOffset).r;
    vec2 gb = texture2D(uTexture,vUv).gb;
    return vec3(r,gb);
  }

  void main() {
    vec3 color = rgbShift(uTexture,vUv,uOffset);
    gl_FragColor = vec4(color, 1);
  }
`;

export { STRENGTH, VERTEX_SHADER, FRAGMENT_SHADER };

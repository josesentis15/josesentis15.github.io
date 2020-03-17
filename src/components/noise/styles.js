import styled, { keyframes } from 'styled-components';

const noiseAnimation = keyframes`
  0% { transform: translateX(0px, 0px); }
  10% { transform: translate(-100px, 100px); }
  20% { transform: translate(150px, -100px); }
  30% { transform: translate(-100px, 100px); }
  40% { transform: translate(100px, -150px); }
  50% { transform: translate(-100px, 200px); }
  60% { transform: translate(-200px, -100px); }
  70% { transform: translateY(50px, 100px); }
  80% { transform: translate(100px, -150px); }
  90% { transform: translate(0px, 200px); }
  100% { transform: translate(-100px, 100px); }
`;

const NoiseWrapper = styled.div`
  height: 100%;
  left: 0;
  overflow: hidden;
  position: absolute;
  top: 0;
  width: 100%;
  z-index: 10;

  &::after {
    background: radial-gradient(ellipse at center,rgba(0, 0, 0, 0) 30%, rgba(0, 0, 0, 0.60) 100%);
    bottom: 0;
    content: '';
    left: 0;
    position: absolute;
    right: 0;
    top: 0;
  }

.noise {
  position: absolute;
  top: -500px;
  right: -500px;
  bottom: -500px;
  left: -500px;
  background: transparent
  url(img/noise.png) 0 0;
  background-size: 320px 320px;
  opacity: 0.35;
  animation: ${noiseAnimation} 1s steps(8, end) infinite both;
}
`;

export default NoiseWrapper;

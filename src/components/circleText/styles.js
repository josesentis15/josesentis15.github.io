import styled, { keyframes } from 'styled-components';

// import { media } from '../../utils/media-queries';

const rotate = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const TextWrapper = styled.div`
    animation: ${rotate} 6s infinite linear;
    color: white;
    position: fixed;
    right: 100px;
    background: red;
    border: 1px solid blue;
    width: 100px;
    height: 100px;

    p {
      width: 50px;
      background: yellow;
      height: 100px;
      transform: translateX(50px);
    }
`;

const Character = styled.span`
  height: 50px;
  position:absolute;
  transform-origin:0 100%;
  transform: rotate(${props => props.rotate}deg);
`;

export default TextWrapper;
export { Character };

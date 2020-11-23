import styled, { keyframes } from 'styled-components';

const rotate = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const TextWrapper = styled.div`
    animation: ${rotate} 10s infinite linear;
    color: white;
    height: 100px;
    position: fixed;
    right: 100px;
    width: 100px;

    p {
      height: 100px;
      transform: translateX(50px);
      width: 50px;
    }

    span {
      background: blue;
      height: 50px;
      position: absolute;
      text-align: center;
      transform-origin: bottom;
      width: 10px;
    }
`;

const Character = styled.span`
  transform: rotate(${props => props.rotate}deg);
`;

export default TextWrapper;
export { Character };

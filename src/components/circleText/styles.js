import styled, { keyframes } from 'styled-components';

import { space } from '../../utils/mixins';

const rotate = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const TextWrapper = styled.div`
    // animation: ${rotate} 10s infinite linear;
    color: white;
    height: 100px;
    position: fixed;
    right: ${space()};
    width: 100px;
    z-index: 10;

    p {
      height: 100px;
      transform: translateX(50px);
      width: 50px;
    }

    span {
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

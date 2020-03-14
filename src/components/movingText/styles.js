import styled, { keyframes } from 'styled-components';

import { colors } from '../../utils/settings';

const moveLeft = keyframes`
  0% {
    transform: translateX(-20vw);
  }
  100% {
    transform: translateX(-2000vw);
  }
`;

const TextWrapper = styled.div`
  font-size: 168px;
  line-height: 1;
  color: transparent;
  -webkit-text-fill-color: transparent;
  -webkit-text-stroke: 1px ${colors.white};
  pointer-events: none;

  span {
    animation: ${moveLeft} 400s infinite linear;
    white-space: nowrap;
    display: block;
    position: relative;
  }
`;

export default TextWrapper;

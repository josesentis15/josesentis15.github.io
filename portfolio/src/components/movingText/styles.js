import styled, { keyframes } from 'styled-components';

import { media } from '../../utils/media-queries';

const moveLeft = keyframes`
  0% {
    transform: translateX(-20vw);
  }
  100% {
    transform: translateX(-2000vw);
  }
`;

const textStroke = `
  color: transparent;
  -webkit-text-fill-color: transparent;
  -webkit-text-stroke: 1px rgba(255, 255, 255, .5);
`;

const TextWrapper = styled.div`
  font-size: 168px;
  line-height: 1.2;
  margin-top: -1.5rem;
  overflow: hidden;
  pointer-events: none;
  ${textStroke}

  span {
    animation: ${moveLeft} 150s infinite linear;
    white-space: nowrap;
    display: block;
    position: relative;
  }

  &::selection { background-color: transparent; }

  ${media.min('tablet')`
    span {
      animation: ${moveLeft} 400s infinite linear;
    }
  `}
`;

export default TextWrapper;
export { textStroke };

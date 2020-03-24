import styled, { keyframes } from 'styled-components';

import { colors } from '../../utils/settings';
import { space } from '../../utils/mixins';

const glitchTop = keyframes`
  2%, 64% {
    transform: translate(2px,0) skew(0);
  }
  4%, 60% {
    transform: translate(-2px,0) skew(0);
  }
  62% {
    transform: translate(20px,0) skew(0);
  }
`;

const glitchBottom = keyframes`
  2%, 64% {
    transform: translate(2px,0) skew(0);
  }
  4%, 60% {
    transform: translate(-2px,0) skew(0);
  }
  62% {
    transform: translate(-15px,0) skew(0);
  }
`;

const glitchBack = keyframes`
  2%,64%{
    transform: translate(-3px,-1px);
  }
  4%,60%{
    transform: translate(-1px,0px);
  }
  62%{
    transform: translate(13px,-1px) skew(-13deg);
  }
`;

const glitchFront = keyframes`
  2%,64%{
    transform: translate(3px,0);
  }
  4%,60%{
    transform: translate(1px,0);
  }
  62%{
    transform: translate(-22px,5px) skew(15deg);
  }
`;

const Glitch = styled.div`
  font-weight: 700;
  margin-bottom: ${space()};
  position: relative;

  .text {
    pointer-events: none;
    position: absolute;
    top: 0;

    &.top {
      animation: ${glitchTop} 1.2s linear infinite;
      clip-path: polygon(0 0, 100% 0, 100% 56%, 0 50%);
    }

    &.bottom {
      animation: ${glitchBottom} 1.2s linear infinite;
      clip-path: polygon(0 50%, 100% 56%, 100% 100%, 0 100%);
    }

    &:before,
    &:after {
      content: attr(data-title);
      position: absolute;
      left: 0;
      z-index: 0;
    }

    &:before {
      color: ${colors.primary};
      animation: ${glitchBack} 1.5s linear infinite;
    }

    &:after {
      color: ${colors.secondary};
      animation: ${glitchFront} 1.5s linear infinite;
    }
  }

  .hidden {
    color: transparent;
    opacity: 0;
    visibility: hidden;
  }

  span {
    position: relative;
    z-index: 1;
  }
`;

export default Glitch;

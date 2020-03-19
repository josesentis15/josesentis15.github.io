import styled from 'styled-components';

import { media } from '../../utils/media-queries';
import { colors } from '../../utils/settings';
import { textStroke } from '../movingText/styles';

const LoaderWrapper = styled.div`
  align-items: center;
  background-color: ${colors.base500};
  bottom: 0;
  display: flex;
  justify-content: center;
  left: 0;
  position: fixed;
  right: 0;
  top: 0;
  z-index: 10;

  .dot {
    background-color: ${colors.white};
    border-radius: 50%;
    display: block;
    height: 400vw;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate3d(-50%, -50%, 0) scale(0);
    transition: transform 1s ease-out;
    width: 400vw;
    will-change: transform;
  }

  &.loaded-enter-done .dot {
    transform: translate3d(-50%, -50%, 0) scale(1) ;
  }

  .title {
    ${textStroke}
  }

  ${media.max('desktop')`
    .dot {
      height: 300vw;
      transition: transform .7s ease-out;
      width: 300vw;
    }

    .title { text-align: center; }
  `}
`;

export default LoaderWrapper;

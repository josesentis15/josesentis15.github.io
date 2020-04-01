import styled from 'styled-components';

import { media } from '../../utils/media-queries';
import { colors } from '../../utils/settings';

const LoaderWrapper = styled.div`
  align-items: center;
  background-color: ${colors.base500};
  bottom: 0;
  display: flex;
  justify-content: center;
  left: 0;
  opacity: 1;
  position: fixed;
  right: 0;
  top: 0;
  transition: opacity .3s ease-out;
  z-index: 10;

  &.loaded-enter-done { opacity: 0; }

  .title {
    color: ${colors.white};
  }

  ${media.max('desktop')`
    .title { text-align: center; }
  `}

  &.loaded-enter-active .text {
    transition: transform 1s cubic-bezier(.215, .61, .355, 1);
    transform: translateY(0);
  }
`;

export default LoaderWrapper;

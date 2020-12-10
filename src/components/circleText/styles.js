import styled from 'styled-components';

import { colors } from '../../utils/settings';
import { space } from '../../utils/mixins';
import { media } from '../../utils/media-queries';

const TextWrapper = styled.div`
  color: white;
  height: 120px;
  position: absolute;
  right: calc(${space(2)} - 20px);
  opacity: 0;
  transition: opacity .2s ease-out, color .1s ease-out;
  top: -20px;
  width: 120px;
  z-index: 10;

  ${media.max('tablet')`
    display: none;
  `}

  &.visible {
    opacity: 1;
    position: fixed;
    right: calc(${space(2)} - 20px);
    top: calc(${space(2)} - 20px);
  }

  &.hover {
    color: ${colors.primary};
  }

  p {
    height: 100px;
    transform: translate3d(-5px,-48px,0);
    left: 50%;
    position: absolute;
    top: 50%;
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

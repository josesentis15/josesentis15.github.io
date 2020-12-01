import styled from 'styled-components';

import { colors } from '../../utils/settings';
import { space } from '../../utils/mixins';
import { media } from '../../utils/media-queries';

const TextWrapper = styled.div`
  // border: 1px solid white;
  color: white;
  height: 120px;
  position: absolute;
  right: calc(${space(2)} - 20px);
  transition: color .1s ease-out;
  top: 0;
  width: 120px;
  z-index: 10;

  ${media.max('tablet')`
    display: none;
  `}

  &.visible {
    position: fixed;
    right: ${space(2)};
    top: ${space(2)};
  }

  &.hover { color: ${colors.primary}; }

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

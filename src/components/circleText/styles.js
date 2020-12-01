import styled from 'styled-components';

import { colors } from '../../utils/settings';
import { space } from '../../utils/mixins';
import { media } from '../../utils/media-queries';

const TextWrapper = styled.div`
    color: white;
    height: 100px;
    position: absolute;
    right: ${space(2)};
    transition: color .1s ease-out;
    top: 0;
    width: 100px;
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
      transform: translateX(44px);
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

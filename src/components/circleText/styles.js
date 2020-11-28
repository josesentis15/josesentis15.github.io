import styled from 'styled-components';

import { space } from '../../utils/mixins';
import { media } from '../../utils/media-queries';

const TextWrapper = styled.div`
    color: white;
    height: 100px;
    opacity: 0;
    position: fixed;
    right: ${space(2)};
    transition: opacity .2s ease-out;
    top: ${space(2)};
    width: 100px;
    z-index: 10;

    ${media.max('tablet')` display: none; `}

    &.visible { opacity: 1; }

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

import styled from 'styled-components';

import { space } from '../../utils/mixins';
import { colors } from '../../utils/settings';

const Circle = styled.span`
  background-color: ${colors.base500};
  border-radius: 50%;
  display: none;
  height: ${space()};
  left: 50vw;
  mix-blend-mode: difference;
  position: fixed;
  pointer-events: none;
  top: 50vh;
  transform: translate(-50%, -50%);
  width: ${space()};
  z-index: 9999;

  .non-touch &.moved { display: block; }
  .dark & { background-color: ${colors.white}; }
`;

export default Circle;
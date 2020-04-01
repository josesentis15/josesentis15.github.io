import styled from 'styled-components';

import { space } from '../../utils/mixins';
import { colors } from '../../utils/settings';

const Circle = styled.span`
  background-color: ${colors.base500};
  border-radius: 50%;
  height: ${space()};
  width: ${space()};

  .dark & { background-color: ${colors.white}; }
`;

export default Circle;

import styled from 'styled-components';

import { media } from '../../utils/media-queries';
import { space } from '../../utils/mixins';

const ExerciceListStyled = styled.div`
  ${media.min('tablet')`
    margin-top: ${space(2)};
  `}

  ${media.min('desktopLarge')`
    margin-top: ${space(4)};
  `}
`;

export default ExerciceListStyled;

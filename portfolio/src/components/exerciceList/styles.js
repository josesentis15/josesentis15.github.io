import styled from 'styled-components';

import { media } from '../../utils/media-queries';
import { space } from '../../utils/mixins';

const ExerciceListStyled = styled.div`
  margin: ${space(2)} 0;

  ${media.min('desktop')`
    margin: ${space(4)} 0;
  `}
`;

export default ExerciceListStyled;

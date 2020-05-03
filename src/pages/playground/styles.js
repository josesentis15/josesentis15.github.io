import styled from 'styled-components';

import { media } from '../../utils/media-queries';
import { space } from '../../utils/mixins';

const ExerciceList = styled.div`
  margin: ${space(2)} 0;

  ${media.min('tablet')`
    margin: ${space(4)} 0;
  `}
`;

export { ExerciceList };

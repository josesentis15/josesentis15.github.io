import styled from 'styled-components';

import { media } from '../../utils/media-queries';
import { space } from '../../utils/mixins';

const ProjectListStyled = styled.div`
  ${media.min('tablet')`
    margin: ${space(2)} 0;
  `}

  ${media.min('desktopLarge')`
    margin: ${space(4)} 0;
  `}
`;

export default ProjectListStyled;

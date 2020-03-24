import styled from 'styled-components';

import { media } from '../../utils/media-queries';
import { space } from '../../utils/mixins';
import { colors } from '../../utils/settings';

const ProjectDetail = styled.article`
  background-image: linear-gradient(90deg, ${colors.base500} 50%, ${colors.base100} 50%);
  margin-top: ${space()};

  > div { padding: 0; }

  .dark & .background-wrapper {
    background-color: ${colors.base100};
    color: ${colors.base500};
    margin: 0 calc(100% / 12);
    padding: ${space(3)} ${space()};

    .reading { padding: 0; }

    a { color: ${colors.base500}; }
  }

  ${media.min('desktop')`
    .background-wrapper {
      padding-top: ${space(5)};
    }

    .title2 {
      margin-left: -${space(1.5)};
    }
  `}

  ${media.min('desktopLarge')`
    .title2 {
      margin-left: -${space(5)};
    }
  `}
`;

export default ProjectDetail;

import styled from 'styled-components';

import { media } from '../../utils/media-queries';
import { space } from '../../utils/mixins';
import { colors } from '../../utils/settings';

const ProjectStyled = styled.div`
  margin-top: ${space(4)};
  color: ${colors.white};
  margin-bottom: ${space(3)};
  padding-left: ${space(1.5)};

  &.no-hover {
    color: ${colors.base300};
  }
  &.hover {
    color: ${colors.white};
  }

  .project {
    &__title {
      margin-left: ${space(-1.5)};
      padding-left: ${space(1.5)};
      position: relative;
    }

    &__title,
    &__text {
      margin-bottom: ${space(2)};
    }
  }

  a {
    text-decoration: underline;
  }

  .label {
    left: 0;
    position: absolute;
    bottom: 2px;
  }

  ${media.min('tablet')`
    margin-bottom: ${space(4)};

    .label {
      bottom: ${space(0.3)};
    }

    .project__text {
      column-count: 2;
      column-gap: ${space(2)};
    }
  `}
`;

export default ProjectStyled;

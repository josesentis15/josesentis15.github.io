import styled from 'styled-components';

import { media } from '../../utils/media-queries';
import { space } from '../../utils/mixins';

const ProjectStyled = styled.div`
  cursor: pointer;
  padding-bottom: ${space()};
  padding-top: ${space()};
  padding-left: ${space(1.5)};

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

    &__content { display: none; }
  }

  .touch &.active .project__content,
  .non-touch &.hover .project__content { display: block; }

  a {
    text-decoration: underline;
  }

  .label {
    left: 0;
    position: absolute;
    bottom: 2px;
  }

  ${media.min('tablet')`
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

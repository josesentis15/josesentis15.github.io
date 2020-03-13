import styled from 'styled-components';

import { colors } from '../../utils/settings';
import { media } from '../../utils/media-queries';
import { space } from '../../utils/mixins';

const ProjectStyled = styled.div`
  cursor: pointer;
  padding-bottom: ${space()};
  padding-top: ${space()};
  padding-left: ${space(1.5)};

  .project__title {
    margin-left: ${space(-1.5)};
    padding-left: ${space(1.5)};
    position: relative;
  }

  .project__content { display: none; }

  .project__image {
    margin: ${space()} 0;

    &::after {
      z-index: 1 !important;
      opacity: 1 !important;
      background: rgba(0, 0, 0, 0.4) !important;
    }
  }

  .touch &.active .project__content,
  .non-touch &.hover .project__content { display: block; }
  .touch &.no-active,
  .non-touch &.no-hover { color: ${colors.base300}; }

  .label {
    left: 0;
    position: absolute;
    bottom: 10px;
  }

  ${media.min('tablet')`
    .label {
      bottom: 14px;
    }

    .project__text,
    .project__title {
      margin-bottom: ${space(2)};
      position: relative;
      z-index: 1;
    }

    .project__text {
      margin-bottom: ${space(2)};
      column-count: 2;
      column-gap: ${space(2)};
    }

    .project__image {
      position: fixed !important;
      right: 0;
      height: 40vh;
      width: 40vh;
      top: calc(50% - 20vh);
      z-index: 0;
    }
  `}

  ${media.min('desktop')`
    .project__image {
      height: 60vh;
      width: 60vh;
      top: calc(50% - 30vh);
    }
  `}

  ${media.min('maxWidth')`
    .project__image {
      height: 66vh;
      width: 66vh;
      top: calc(50% - 33vh);
    }
  `}
`;

export default ProjectStyled;

import styled from 'styled-components';

import { media } from '../../utils/media-queries';
import { space } from '../../utils/mixins';

const ProjectList = styled.div`
  .image-wrapper { display: none; }

  ${media.min('tablet')`
    margin: ${space(2)} 0;

    .image-wrapper {
      display: block;
      height: 40vh;
      overflow: hidden;
      opacity: 0;
      position: fixed !important;
      pointer-events: none;
      right: 0;
      top: calc(50% - 20vh);
      transition: opacity .2s linear;
      width: 40vh;
      z-index: 0;
    }

    .project-image {
      left: 50%;
      position: absolute;
      top: 50%;
      transform: translate(-50%, -50%) scale(1);
      transition: transform 0s;
      height: 100%;
      width: 100%;
    }

    .image-wrapper.is-hover {
      opacity: 1;

      .project-image {
        transition: transform 6s linear;
        transform: translate(-50%, -50%) scale(1.2);
      }
    }

    .image-wrapper.loaded-exit-active {
      opacity: 0;

      .project-image {
        transition: transform 6s linear;
        transform: translate(-50%, -50%) scale(1);
      }
    }
  `}

  ${media.min('desktop')`
    .image-wrapper {
      height: 60vh;
      width: 60vh;
      top: calc(50% - 30vh);
    }
  `}

  ${media.min('desktopLarge')`
    margin: ${space(4)} 0;
  `}

  ${media.min('maxWidth')`
    .image-wrapper {
      height: 66vh;
      width: 66vh;
      top: calc(50% - 33vh);
    }
  `}
`;

export default ProjectList;

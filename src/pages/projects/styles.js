import styled from 'styled-components';

import { media } from '../../utils/media-queries';
import { space } from '../../utils/mixins';

const ProjectList = styled.div`
  margin: ${space(2)} 0;

  .project-image-animation { display: none; }

  ${media.min('tablet')`
    .touch & .project-image-animation { display: none; }

    .project-image-animation {
      display: block;
      height: 45vh;
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

    .project-image-animation.is-hover {
      opacity: 1;

      .project-image {
        transition: transform 6s ease-out;
        transform: translate(-50%, -50%) scale(1.2);
      }
    }

    .project-image-animation.loaded-exit-active {
      opacity: 0;

      .project-image {
        transition: transform 6s ease-out;
        transform: translate(-50%, -50%) scale(1);
      }
    }
  `}

  ${media.min('desktop')`
    .project-image-animation {
      height: 55vh;
      width: 50vh;
      top: calc(50% - 25vh);
    }
  `}

  ${media.min('desktopLarge')`
    margin: ${space(4)} 0;
  `}

  ${media.min('maxWidth')`
    .project-image-animation {
      height: 65vh;
      width: 60vh;
      top: calc(50% - 25vh);
    }
  `}
`;

export default ProjectList;

import styled from 'styled-components';

import { space } from '../../utils/mixins';

const ProjectListStyled = styled.div`
  margin-top: ${space(4)};
`;

const ImageStyled = styled.div`
  background-image: url(${props => props.background});
  background-position: center;
  background-size: cover;
  bottom: 0;
  left: 0;
  margin: 0 auto;
  position: absolute;
  overflow: hidden;
  right: 0;
  top: 0;
  /* transform: scale3d(1.1, 1.1, 1); */
  /* transition: transform .9s cubic-bezier($curve-Bezier); */
  /* will-change: transform; */

  &::before {
    content: '';
    display: block;
    width: 100%;
  }

  /* &::after {
        background-color: $c-neutro900;
        content: '';
        height: 100%;
        left: 0;
        opacity: 1;
        position: absolute;
        top: 0;
        transition: opacity .9s cubic-bezier($curve-Bezier);
        width: 100%;
        will-change: opacity;
        z-index: 1;
    } */

  &.square {
    position: relative;

    &::before {
      padding-top: (4 / 3) * 100%;
    }
  }

  &.landscape {
    position: relative;

    &::before {
      padding-top: (9 / 16) * 100%;
    }
  }

  &.portrait {
    position: relative;

    &::before {
      padding-top: (3 / 2) * 100%;
    }
  }
  /*
    &.lazyloaded {
        transform: scale3d(1, 1, 1);

        &::after { opacity: 0; }
    } */
`;

export default ProjectListStyled;
export { ImageStyled };

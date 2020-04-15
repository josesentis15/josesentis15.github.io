import styled from 'styled-components';

import { media } from '../../utils/media-queries';
import { pixelate, space } from '../../utils/mixins';
import { colors, vars } from '../../utils/settings';

const Wrapper = styled.div`
  margin: 0 auto;
  max-width: ${pixelate(vars.layout.maxContentWidth)};
  padding: 0 ${space()};
  position: relative;
  width: 100%;

  ${media.min('tablet')`
    padding: 0 ${space(2)};
  `};

  &.reading {
    max-width: ${pixelate(vars.layout.maxReadingWidth)};

    ${media.min('reader')`
      padding-left: 0;
      padding-right: 0;
    `};
  }
`;

const LayoutStyled = styled.div`
  &.home {
    main {
      align-items: center;
      display: flex;
      flex-direction: column;
      justify-content: center;
    }

    .navigation { padding-bottom: 0; }
  }

  &.playground main,
  &.dark main {
    background-color: ${colors.base500};
    color: ${colors.white};
    padding-bottom: 0;

    a {
      color: ${colors.primary};
    }
  }

  &.dark main {
    color: ${colors.white};

    a {
      color: ${colors.white};
    }
  }

  &.page-transition {
    height: 100vh;
    left: 0;
    opacity: 1;
    overflow: hidden;
    position: absolute;
    transition: opacity .3s linear;
    top: 0;
    width: 100vw;

    &.home.fade-enter { opacity: 1; }

    &.fade-enter,
    &.fade-enter-active { opacity: 0; }
    &.fade-enter-done { opacity: 1; }

    &.fade-exit,
    &.fade-exit-active { opacity: 0; }

    main {
      position: absolute;
      left: 0;
      right: 0;
      bottom: 0;
      top: 0;
      overflow-y: auto;
    }
  }

  main {
  //   display: flex;
    // padding-bottom: ${space()};
    padding-top: ${space(5)};
  //   width: 100%;

  //   ${media.min('tablet')`
  //     min-height: 100vh;
  //     padding-bottom: ${space(2)};
  //   `}

  //   ${media.min('desktop')`
  //     padding-bottom: ${space(3)};
  //     padding-top: ${space(4.5)};
  //   `}

  //   ${media.min('maxWidth')`
  //     padding-top: ${space(5)};
  //   `}
  // }

  // &.layout-bottom main { justify-content: flex-end; }
  // &.headerless main { padding-top: 0 !important; }

  // &.playground {
  //   a { margin-top: ${space()}; }

  //   .intro {
  //     margin: ${space(3)} 0 ${space(2)};
  //     max-width: 480px;
  //   }

  //   ${media.min('tablet')`
  //     a { margin-top: ${space(2)}; }

  //     .intro {
  //       margin: ${space(3)} 0;
  //     }
  //   `}
  }
`;

export default LayoutStyled;
export { Wrapper };

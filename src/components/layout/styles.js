import styled from 'styled-components';

import { media } from '../../utils/media-queries';
import { pixelate, space } from '../../utils/mixins';
import { colors, vars } from '../../utils/settings';

const Wrapper = styled.div`
  height: 100%;
  margin: 0 auto;
  max-width: ${pixelate(vars.layout.maxContentWidth)};
  overflow-y: hidden;
  padding: 0 ${space()};
  position: relative;
  width: 100%;

  ${media.min('tablet')`
    padding: 0 ${space(2)};
  `};

  &.reading {
    max-width: ${pixelate(vars.layout.maxReadingWidth)};
    overflow: visible;

    ${media.min('reader')`
      padding-left: 0;
      padding-right: 0;
    `};
  }
`;

const LayoutStyled = styled.div`
  &.home {
    display: flex;

    ${media.min('desktop')`
      main { padding-bottom: ${space()}; }
    `}
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
    transition: opacity .3s cubic-bezier(.215, .61, .355, 1);

    // &.home.fade-enter { opacity: 1; }

    &.fade-enter {
      transition: opacity .5s cubic-bezier(.215, .61, .355, 1);
    }

    &.fade-enter,
    &.fade-enter-active {
      opacity: 0;
      position: absolute;
    }

    &.fade-enter-active { position: absolute; }

    &.fade-enter-done {
      position: relative;
      opacity: 1;
    }

    &.fade-exit {
      opacity: 1;
      transition: opacity .3s cubic-bezier(.215, .61, .355, 1);
    }

    &.fade-exit-active { opacity: 0; }
  }

  main {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    padding-bottom: ${space()};
    padding-top: ${space(6)};
    width: 100%;

    ${media.min('tablet')`
      min-height: 100vh;
      padding-bottom: ${space(2)};
    `}

    ${media.min('desktop')`
      padding-bottom: ${space(3)};
      padding-top: ${space(4.5)};
    `}

    ${media.min('maxWidth')`
      padding-top: ${space(5)};
    `}
  }

  &.layout-bottom main { justify-content: flex-end; }
  &.headerless main { padding-top: 0 !important; }

  &.playground {
    a { margin-top: ${space()}; }

    .intro {
      margin: ${space(3)} 0 ${space(2)};
      max-width: 480px;
    }

    ${media.min('tablet')`
      a { margin-top: ${space(2)}; }

      .intro {
        margin: ${space(3)} 0;
      }
    `}
  }
`;

export default LayoutStyled;
export { Wrapper };

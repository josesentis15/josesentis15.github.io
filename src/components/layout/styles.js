import styled from 'styled-components';

import { media } from '../../utils/media-queries';
import { pixelate, space } from '../../utils/mixins';
import { colors, vars } from '../../utils/settings';

const Wrapper = styled.div`
  height: 100%;
  margin: 0 auto;
  max-width: ${pixelate(vars.layout.maxContentWidth)};
  padding: 0 ${space()};
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
    display: flex;

    ${media.min('desktop')`
      main { padding-bottom: ${space()}; }
    `}
  }

  &.dark main {
    background-color: ${colors.base500};
    color: ${colors.white};

    a {
      color: ${colors.white};
    }
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

    ${media.between('tablet', 'desktop')`
      main { padding-top: ${space(7)}; }
    `}

    ${media.min('desktop')`
      padding-bottom: ${space(4)};
    `}
  }

  &.layout-bottom main { justify-content: flex-end; }
`;

export default LayoutStyled;
export { Wrapper };

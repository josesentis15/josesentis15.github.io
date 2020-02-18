import styled from 'styled-components';

import { media } from '../../utils/media-queries';
import { pixelate, space } from '../../utils/mixins';
import { colors, vars } from '../../utils/settings';

const Wrapper = styled.div`
  margin: 0 auto;
  max-width: ${pixelate(vars.layout.maxContentWidth)};
  padding: 0 ${space()};
  width: 100%;

  ${media.min('tablet')`
    padding: 0 ${space(2)};
  `};

  ${media.min('maxWidth')`
    padding-left: 0;
    padding-right: 0;
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
    padding-bottom: ${space(1)};
  }

  &.dark {
    background-color: ${colors.base500};
    color: ${colors.white};

    a {
      color: ${colors.white};
    }
  }

  main {
    padding-bottom: ${space()};
    padding-top: ${space(5)};

    ${media.min('tablet')`
      padding-bottom:  ${space(4)};
      padding-top: ${space(6)};
    `}
  }

  &.layout-bottom main {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    min-height: 100vh;

    ${media.min('tablet')`
      min-height: 100vh;
      padding-bottom: ${space(2)};
      padding-top: ${space(6)};
    `}

    ${media.min('desktop')`
      padding-bottom: ${space(4)};
    `}
  }
`;

export default LayoutStyled;
export { Wrapper };

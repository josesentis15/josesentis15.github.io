import styled from 'styled-components';

import { media } from '../../utils/media-queries';
import { pixelate, space } from '../../utils/mixins';
import { vars } from '../../utils/settings';

const Wrapper = `
  margin: 0 auto;
  max-width: ${pixelate(vars.layout.maxContentWidth)};
  padding: 0 ${space()};

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
  ${Wrapper}

  min-height: 100vh;
  padding-bottom: ${space(3)};
  padding-top: ${space(5)};

  ${media.min('tablet')`
    padding-bottom:  ${space(4)};
    padding-top: ${space(6)};
  `};

  &.home {
    display: flex;
    padding-bottom: ${space(1)};
  }
`;

export default LayoutStyled;
export { Wrapper };

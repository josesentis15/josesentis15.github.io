import styled from 'styled-components';

import { media } from '../../utils/media-queries';
import { pixelate, space } from '../../utils/mixins';
import { vars } from '../../utils/settings';

const LayoutStyled = styled.div`
  margin: 0 auto;
  max-width: ${pixelate(vars.layout.maxContentWidth)};
  padding: ${space(5)} ${space()} ${space(3)};

  ${media.min('tablet')`
    padding: ${space(6)} ${space(2)} ${space(4)};
  `};

  ${media.min('maxWidth')`
    padding-left: 0;
    padding-right: 0;
  `};

  &.reader {
    max-width: ${pixelate(vars.layout.maxReadingWidth)};

    ${media.min('reader')`
      padding-left: 0;
      padding-right: 0;
    `};
  }
`;

export default LayoutStyled;

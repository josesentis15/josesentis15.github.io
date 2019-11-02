import { media } from '../utils/media-queries';
import { typography } from '../utils/settings';

const typographyStyles = `
  .title {
    display: block;
    font-family: ${typography.titleFontFamily.join(', ')};
    font-size: 75px;
    font-weight: 400;
    line-height: 1;

    ${media.min('tablet')`
      font-size: 165px;
    `}
  }
`;

export default typographyStyles;
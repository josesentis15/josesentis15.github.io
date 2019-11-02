import { media, breakpoints } from '../utils/media-queries';
import { font } from '../utils/settings';

const typographyStyles = `
  .title {
    display: block;
    font-family: ${font.altFontFamily.join(', ')};
    font-size: 75px;
    font-weight: 400;
    line-height: 1;

    ${media.min(breakpoints.tablet)`
      font-size: 165px;
    `}

    @media (min-width: 768px) {
      font-size: 165px;
    }
  }
`;

export default typographyStyles;
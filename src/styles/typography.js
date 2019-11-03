import { pixelate, space } from '../utils/mixins';
import { colors, typography } from '../utils/settings';

const typographyStyles = `
  .title,
  .title2 {
    display: block;
    font-weight: 400;
    line-height: 1;
  }

  .title {
    font-size: 75px;

    @media (min-width: 768px) {
      font-size: 165px;
    }
  }

  .title2 {
    font-size: 40px;

    @media (min-width: 768px) {
      font-size: 50px;
    }
  }

  .label {
    font-size: ${pixelate(typography.baseFontSize)};
    margin-right: ${space(.25)};
  }

  .link {
    .non-touch &:hover {
      color: ${colors.hover};
    }
  }
`;

export default typographyStyles;
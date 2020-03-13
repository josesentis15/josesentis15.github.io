import { pixelate, space } from '../utils/mixins';
import { colors, typography } from '../utils/settings';

const typographyStyles = `
  .title,
  .title2 {
    display: block;
    font-weight: 400;
  }

  .title {
    font-size: 78px;
    line-height: 1;

    @media (min-width: 768px) {
      font-size: 125px;
    }

    @media (min-width: 1024px) {
      font-size: 165px;
    }
  }

  .title2 {
    font-size: 40px;
    line-height: 1.4;

    @media (min-width: 768px) {
      font-size: 50px;
    }
  }

  .label {
    font-size: ${pixelate(typography.baseFontSize)};
    margin-right: ${space(0.25)};
  }

  a {
    color: ${colors.base500};
    display: inline-block;

    &::after {
      border-bottom: 1px solid ${colors.base500}:
      content: '';
    }

    .non-touch &:hover {
      &::after { display: none; }
    }
  }

  .link {
    text-decoration: none;
    &::after { display: none; }

    .non-touch &:hover {
      color: ${colors.primary} !important;
    }
  }

  .p-big {
    @media (min-width: 768px) {
      font-size: ${pixelate(typography.bigFontSize)};
      line-height: ${space(1.75)};
    }
  }
`;

export default typographyStyles;

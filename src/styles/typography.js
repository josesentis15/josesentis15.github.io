import { media } from '../utils/media-queries';
import { pixelate, space } from '../utils/mixins';
import { colors, typography } from '../utils/settings';

const typographyStyles = `
  .title,
  .title2 {
    font-weight: 400;
  }

  .title {
    font-size: 22vw;
    line-height: 1.2;

    @media (min-width: 768px) and (max-height: 1023px) {
      font-size: 15vw;
    }

    @media (min-width: 1024px) {
      font-size: 17vw;
    }

    @media (min-width: 1280px){
      font-size: 218px;
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
    text-decoration: none;

    &:after {
      border-bottom: 2px solid currentColor;
      content: '';
      display: block;
      margin-top: -2px;
    }

    ${media.min('tablet')`&:after { margin-top: -8px; }`}
    .non-touch &:hover::after { display: none; }

    .non-touch &:hover {
      background-color: ${colors.base500};
      color: ${colors.primary};
    }

    .non-touch .dark &:hover {
      background-color: ${colors.primary};
      color: ${colors.base500};
    }

    .non-touch .playground &:hover {
      background-color: transparent;
      color: ${colors.primary};
    }
  }

  .link,
  .link--bg {
    text-decoration: none;
    &::after { display: none; }
  }

  .link {
    .non-touch &:hover {
      background-color: transparent;
    }
  }

  &::selection {
    background-color: ${colors.primary} !important;
    color: ${colors.base500} !important;
  }

  .p {
    font-size: ${pixelate(typography.baseFontSize)};
    line-height: ${space()};
  }

  .p-big {
    @media (min-width: 768px) {
      font-size: ${pixelate(typography.bigFontSize)};
      line-height: ${space(1.75)};
    }
  }

  .label {
    font-size: ${pixelate(typography.minFontSize)};
    margin-bottom: 0;
    opacity: .5;
  }
`;

export default typographyStyles;

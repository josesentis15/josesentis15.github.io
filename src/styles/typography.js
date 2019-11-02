import { colors } from '../utils/settings';

const typographyStyles = `
  .title {
    display: block;
    font-size: 75px;
    font-weight: 400;
    line-height: 1;

    @media (min-width: 768px) {
      font-size: 165px;
    }

    .non-touch &:hover {
      color: ${colors.hover};
    }
  }
`;

export default typographyStyles;
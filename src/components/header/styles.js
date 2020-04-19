import styled from 'styled-components';

import { media } from '../../utils/media-queries';
import { space } from '../../utils/mixins';
import { colors, typography } from '../../utils/settings';

const HeaderStyled = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  will-change: transform;
  z-index: 9;

  .dark & { background-color: ${colors.base100}; }

  .header {
    align-items: flex-start;
    color: ${colors.base500};
    display: flex;
    font-family: ${typography.secondaryFontFamily.join(', ')};
    justify-content: space-between;
    padding: ${space()} 0;
    transition: transform 0s;

    .home & { transform: translateY(-100%); }

    &.loaded-enter-done {
      transition: transform .7s cubic-bezier(.215, .61, .355, 1);
      transform: translateY(0);
    }

    > div { max-width: 150px; }

    a {
      background-color: transparent !important;
      color: ${colors.base500} !important;
      text-decoration: none;
      &::after { display: none; }

      span {
        display: block;
      }
    }

    ${media.min('phone')`
      justify-content: flex-start;

      > div:first-child {
        margin-right: ${space(2)};
      }
    `};

    ${media.min('maxWidth')`
      padding: ${space(1.25)} 0;
    `};
  }
`;

export default HeaderStyled;

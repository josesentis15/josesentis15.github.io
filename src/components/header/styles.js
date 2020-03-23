import styled from 'styled-components';

import { media } from '../../utils/media-queries';
import { space } from '../../utils/mixins';
import { colors, typography } from '../../utils/settings';

const HeaderStyled = styled.header`
  background-color: ${colors.white};
  position: fixed;
  top: 0;
  left: 0;
  transform: translateY(-100%);
  transition: transform .5s linear;
  width: 100%;
  will-change: transform;
  z-index: 9;

  &.loaded-enter-done { transform: translateY(0); }

  .header {
    align-items: flex-start;
    color: ${colors.base500};
    display: flex;
    font-family: ${typography.secondaryFontFamily.join(', ')};
    justify-content: space-between;
    padding: ${space()} 0;

    > div {
      max-width: 150px;
    }

    a {
      color: ${colors.base500};
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

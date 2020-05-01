import styled from 'styled-components';

import { colors } from '../../utils/settings';
import { media } from '../../utils/media-queries';
import { space, hover } from '../../utils/mixins';

const CrossNavigationStyled = styled.ul`
  li { margin: ${space()} 0; }

  ${media.max('tablet')`
    li {
      &:fist-child { margin-top: 0; }
      &:last-child { margin-bottom: 0; }
    }
  `}

  ${media.min('tablet')`
    align-items: center;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

    li { margin: ${space(0.75)}; }
  `}

  .link.active {
    color: ${colors.primary} !important;

    ${hover`color: ${colors.base500} !important;`}
  }
`;

export default CrossNavigationStyled;

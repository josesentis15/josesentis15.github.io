import styled from 'styled-components';

import { colors } from '../../utils/settings';
import { media } from '../../utils/media-queries';
import { space } from '../../utils/mixins';

const CrossNavigationStyled = styled.ul`
  align-items: center;
  display: flex;
  justify-content: center;

  li { margin: ${space()} 0; }

  ${media.min('phone')`
    flex-wrap: wrap;
  `}

  ${media.max('phone')`
    li {
      &:fist-child { margin-top: 0; }
      &:last-child { margin-bottom: 0; }
    }
  `}

  ${media.min('table')`
    li { margin: ${space(0.75)}; }
  `}

  .link.active { color: ${colors.primary} !important; }
`;

export default CrossNavigationStyled;

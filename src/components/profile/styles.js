import styled from 'styled-components';

import { media } from '../../utils/media-queries';
import { space, columns } from '../../utils/mixins';

const ProfileWrapper = styled.div`
  .background-img {
    filter: grayscale(100%);
    margin-top: ${space()};
  }

  .social {
    align-items: flex-start;
    display: flex;
    flex-direction: column;
    margin-top: ${space(2)};

    a {
      margin-bottom: ${space()};

      &:last-child { margin-bottom: 0; }
    }
  }

  ${media.between('tablet', 'desktop')`
    .background-img {
      float: right;
      margin-top: -20%;
      width: 50%;
    }
  `};

  ${media.min('desktop')`
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-between;
    margin-top: ${space(2)};

    > * { ${columns(2, 4, 'reverse')} }
    .p-big { margin-top: -${space(4)}; }
    .background-img { max-width: 530px; }
  `};

  ${media.min('desktopLarge')`
    > * { ${columns(2, 6, 'reverse')} }
  `};
`;

export default ProfileWrapper;

import styled from 'styled-components';

import { media } from '../../utils/media-queries';
import { space, columns } from '../../utils/mixins';

const ProfileWrapper = styled.div`
  .background-img {
    filter: grayscale(100%);
    margin-top: ${space()};
  }

  .social {
    display: flex;
    flex-direction: column;
    margin-top: ${space(2)};

    a {
      margin-bottom: ${space()};
    }
  }

  ${media.min('tablet', 'desktop')`
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

    .p-big {
      margin-top: -${space(4)};
    }

    .background-img {
      margin: ${space()} 0 ${space(2)};
    }
  `};

  ${media.min('desktopLarge')`
    > * { ${columns(2, 6, 'reverse')} }
  `};

  ${media.min('maxWidth')`
    .background-img { max-width: 35vw; }
  `};
`;

export default ProfileWrapper;

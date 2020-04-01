import styled from 'styled-components';

import { media } from '../../utils/media-queries';
import { space, columns } from '../../utils/mixins';

const ProfileWrapper = styled.div`
  .background-img { filter: grayscale(100%); }

  .social {
    display: flex;
    flex-direction: column;
    margin-top: ${space(2)};

    a {
      margin-bottom: ${space()};
    }
  }

  ${media.max('tablet')`
    .gatsby-image-wrapper {
      margin: ${space()} 0 ${space(2)};
    }
  `};

  ${media.min('tablet')`
    display: flex;
    margin-top: ${space(2)};

    > * { ${columns(2, 2)} }

    .p-big {
      margin-top: -${space(4)};
    }
  `};

  ${media.min('desktop')`
    > * { ${columns(2, 4)} }
  `};

  ${media.min('desktopLarge')`
    > * { ${columns(2, 6)} }
  `};
`;

export default ProfileWrapper;

import styled from 'styled-components';

import { media } from '../../utils/media-queries';
import { space } from '../../utils/mixins';

const ProfileWrapper = styled.div`
  .background-img { filter: grayscale(100%); }
  .thanks { margin-top: ${space(4)}; }
  .content > * { max-width: 600px; }

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

  ${media.max('desktop')`
    margin-bottom: ${space(2)};

    .background-img { margin-bottom: ${space(2)}; }
  `}

  ${media.min('desktop')`
    display: flex;
    justify-content: flex-end;

    .profile-image {
      align-items: flex-end;
      display: flex;
      height: 100vh;
      left: 0;
      padding: ${space(2)};
      padding-top: 38vh;
      position: fixed;
      top: 0;
      width: 50vw;

      .background-img {
        max-width: 420px;
        width: 100%;
      }
    }

    .content-wrapper {
      align-items: flex-end;
      display: flex;
      height: 100vh;
      left: 50vw;
      position: fixed;
      top: 0;
      width: 50vw;

      .content {
        height: 100%;
        overflow-y: auto;
        padding: ${space(2)};
        padding-top: ${space(8)};
      }
    }
  `};

  ${media.min('desktopLarger')`
    .profile-image .background-img { max-width: 540px; }
  `};
`;

export default ProfileWrapper;

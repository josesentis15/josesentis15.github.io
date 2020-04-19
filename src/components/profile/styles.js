import styled from 'styled-components';

import { media } from '../../utils/media-queries';
import { space, columns } from '../../utils/mixins';

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

  // ${media.between('tablet', 'desktop')`
  //   .background-img {
  //     float: right;
  //     margin-top: -20%;
  //     width: 50%;
  //   }
  // `};

  ${media.min('desktop')`
    display: flex;
    justify-content: space-between;
    position: relative;

    .profile-image, .content { ${columns(2, 2)}; }
    .p-big { margin-top: -${space(5)}; }
  `};

  ${media.min('maxWidth')`
    .profile-image, .content { ${columns(2, 4)}; }
  `};

  ${media.min('desktopLarge')`
    .background-img { width: 38vw; }
  `};

  ${media.min('bigScreens')`
    .background-img { width: 30vw; }
  `};

  @media screen and (min-width: 1024px) {
    .background-img { height: 58vh; }
  }

  @media screen and (min-width: 1024px) and (min-height: 768px) {
    .background-img { height: 62vh; }
  }

  @media screen and (min-width: 1024px) and (min-height: 915px) {
    .background-img { height: 64vh; }
  }

  @media screen and (min-width: 1024px) and (min-height: 992px) {
    .background-img { height: 66vh; }
  }

  @media screen and (min-width: 1280px) {
    .background-img { height: 50vh; }
  }

  @media screen and (min-width: 1280px) and (min-height: 768px) {
    .background-img { height: 54vh; }
  }

  @media screen and (min-width: 1280px) and (min-height: 915px) {
    .background-img { height: 56vh; }
  }

  @media screen and (min-width: 1280px) and (min-height: 992px) {
    .background-img { height: 60vh; }
  }
`;

export default ProfileWrapper;






  // ${media.min('desktopLarge')`
  //   > *:not(.thanks) { ${columns(2, 6, 'reverse')} }
  // `};

  // ${media.min('bigScreens')`
  //   margin-top: ${space(2)};
  // `};

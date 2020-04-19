import styled from 'styled-components';

import { media } from '../../utils/media-queries';
import { space, columns, pixelate } from '../../utils/mixins';
import { vars } from '../../utils/settings';

const ProfileWrapper = styled.div`
  .background-img {
    filter: grayscale(100%);
    // margin-top: ${space()};
  }

  .thanks {
    font-size: 14px;
    text-align: right;

  //   ${media.between('tablet', 'desktop')`
  //     text-align: left;
  //   `};

  //   ${media.max('desktop')`
  //     margin: ${space(2)} 0 ${space()};
  //   `};

  //   ${media.min('desktop')`
  //     bottom: 0;
  //     position: absolute;
  //     right: 0;
  //   `};
  }

  // .content > * { max-width: ${pixelate(vars.layout.maxReadingWidth)}; }

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

  // ${media.between('tablet', 'desktop')`
  //   .background-img {
  //     float: right;
  //     margin-top: -20%;
  //     width: 50%;
  //   }
  // `};

  // ${media.min('desktop')`
  //   display: flex;
  //   flex-direction: row-reverse;
  //   justify-content: space-between;
  //   margin-bottom: ${space(2)};
  //   padding-bottom: ${space(2)};
  //   position: relative;

  //   > *:not(.thanks) { ${columns(2, 4, 'reverse')} }
  //   .p-big { margin-top: -${space(4)}; }
  // `};

  // ${media.min('desktopLarge')`
  //   > *:not(.thanks) { ${columns(2, 6, 'reverse')} }
  // `};

  // ${media.min('bigScreens')`
  //   margin-top: ${space(2)};
  // `};
`;

export default ProfileWrapper;

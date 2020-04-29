import styled from 'styled-components';

import { media } from '../../utils/media-queries';
import { space } from '../../utils/mixins';

const NavigationWrapper = styled.div`
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 100%;

  > div { width: 100%; }

  .title {
    .home & { margin-bottom: ${space(1)}; }

    margin-left: -7px;
  }

  .loaded-enter-done:last-child .title { margin-bottom: 0; }

  ${media.max('desktop')`
    .double-link {
      line-height: 1;

      span:not(.text) {
        display: block;
      }
    }
  `}

  ${media.min('phone')`
    .title { margin-left: -10px; }
  `}

  ${media.min('tablet')`
    .title { margin-left: -15px; }
  `}

  ${media.min('desktop')`
    position: relative;
    z-index: 1;

    .title {
      margin-left: -18px;

      .home & { margin-bottom: ${space()}; }
    }

    &.fixed {
      height: 18vw;

      > div { position: fixed; }
    }
  `}

  ${media.min('maxWidth')`
    &.fixed { height: 185px; }
  `}

  ${media.min('bigScreens')`
    &.fixed { height: 260px; }
  `}

  ${media.between('desktop', 'desktopLarge')`
    .home & {
      justify-content: flex-end;
      padding-bottom: ${space(2)};
    }
  `}
`;

const AppearingText = styled.span`
  display: block;
  position: relative;
  overflow: hidden;

  .text {
    display: inline-block;
    transform: translateY(100%);
    transition: transform 0s;
  }

  .loaded-enter-done & .text {
    transition: transform .8s cubic-bezier(.215, .61, .355, 1);
    transform: translateY(0);
  }
`;

export default NavigationWrapper;
export { AppearingText };

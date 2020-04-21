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
    margin-bottom: ${space(1.75)};
    margin-left: -7px;
  }

  .loaded-enter-done:last-child .title { margin-bottom: 0; }

  ${media.max('phone')`
    padding: 0 0 ${space()} 0;
  `}

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
    .title {
      margin-bottom: ${space()};
      margin-left: -18px;
    }
  `}

  ${media.between('desktop', 'desktopLarge')`
    justify-content: flex-end;
    padding-bottom: ${space(2)};
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

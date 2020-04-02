import styled from 'styled-components';

import { media } from '../../utils/media-queries';
import { space } from '../../utils/mixins';

const NavigationWrapper = styled.div`
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;

  ${media.max('phone')`
    padding: 0 0 ${space()} 0;
  `}

  ${media.max('desktop')`
    .double-link span:not(.text) {
      display: block;
    }
  `}

  > div { width: 100%; }

  .link { margin-bottom: ${space(1.5)}; }
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
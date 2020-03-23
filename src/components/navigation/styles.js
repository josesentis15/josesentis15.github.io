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

  > div { width: 100%; }
`;

const LinkWrapper = styled.div`
  height: calc(78px * 1.2);
  margin: 0 auto ${space(3)};
  margin-left: -6px;
  overflow: hidden;
  position: relative;
  width: 100%;

  &:last-child { margin-bottom: 0; }

  ${media.max('tablet')`
    &.double { height: calc(78px * 1.2 * 2); }
  `}

  ${media.max('desktop')`
    margin-bottom: ${space(2.5)};

    .title span { display: block; }
  `}

  ${media.min('tablet')`
    height: calc(125px * 1.2);
    margin-left: -10px;
  `}

  ${media.between('tablet', 'desktop')`
    &.double { height: calc(125px * 1.2 * 2); }
  `}

  ${media.min('desktop')`
    height: calc(165px * 1.2);
  `}

  .link {
    left: 0;
    position: absolute;
    top: 0;
    transform: translateY(100%);
    transition: transform .4s linear;
    will-change: transform;
  }

  &.loaded-enter-done .link { transform: translateY(0); }
`;

export default NavigationWrapper;
export { LinkWrapper };

import { css } from 'styled-components';

import { pixelate } from './mixins';

const breakpoints = {
  phone: 480,
  reader: 780,
  tablet: 768,
  desktop: 1024,
  desktopLarge: 1280,
  maxWidth: 1440,
  bigScreens: 1920
};

function getSizeFromBreakpoint(breakpointValue, max = false) {
  let mq;
  if (breakpoints[breakpointValue]) {
    mq = max ? breakpoints[breakpointValue] - 1 : breakpoints[breakpointValue];
    // tslint:disable-next-line:radix
  } else if (parseInt(breakpointValue)) {
    mq = max ? breakpointValue - 1 : breakpointValue;
  } else {
    // tslint:disable-next-line:no-console
    console.error('No valid breakpoint or size specified for media.');
  }
  return mq ? pixelate(mq) : '0';
}

export function generateMedia() {
  const max = breakpoint => (...args) => css`
    @media (max-width: ${getSizeFromBreakpoint(breakpoint, true)}) {
      ${css.call(null, ...args)};
    }
  `;

  const min = breakpoint => (...args) => css`
    @media (min-width: ${getSizeFromBreakpoint(breakpoint)}) {
      ${css.call(null, ...args)};
    }
  `;

  const between = (firstBreakpoint, secondBreakpoint) => (...args) => css`
    @media (min-width: ${getSizeFromBreakpoint(
        firstBreakpoint
      )}) and (max-width: ${getSizeFromBreakpoint(secondBreakpoint, true)}) {
      ${css.call(null, ...args)};
    }
  `;

  return {
    between,
    max,
    min,
  };
}

const media = generateMedia();
export { media, breakpoints };

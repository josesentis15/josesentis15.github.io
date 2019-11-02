import { css } from 'styled-components';

import { typography } from './settings';

const space = (n = 1) => `${typography.baseLineHeight * n}rem`;

const pixelate = n => `${n}px`;

const hover = (...args) => css`
  &:hover {
    html.non-touch & {
      ${css.call(null, ...args)};
    }
  }
`;

export { hover, pixelate, space };

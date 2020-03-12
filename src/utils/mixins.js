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

const columns = (number, spaces = 1) => `
  width: calc((100% - ${space(spaces * (number - 1))}) / ${number});

  &:nth-child(n) { margin-right: ${space(spaces)}; }
  &:nth-child(${number}n) { margin-right: 0; }
`;

export { columns, hover, pixelate, space };

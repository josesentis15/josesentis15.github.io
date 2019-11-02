import { typography } from './settings';

const space = (n = 1) => `${typography.baseLineHeight * n}rem`;

const pixelate = n => `${n}px`;

export { pixelate, space };

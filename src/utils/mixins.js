import { font } from './settings';

const space = n => `${Math.pow(font.baseSize, n) || 1}rem`;

const pixelate = n => `${n}px`;

export { pixelate, space };

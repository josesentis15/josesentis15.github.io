import Typography from 'typography';

import { font } from './settings';

const typography = new Typography({
  baseFontSize: font.baseFontSize,
  baseLineHeight: font.baseLineHeight,
  bodyFontFamily: font.bodyFontFamily
});

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles();
}

export default typography;
export const rhythm = typography.rhythm;
export const scale = typography.scale;

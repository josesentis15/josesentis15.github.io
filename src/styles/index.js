import { createGlobalStyle } from 'styled-components'

import { space } from '../utils/mixins';
import { colors, typography } from '../utils/settings';
import typographyStyles from './typography';

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Avenir Next';
    src: url('./fonts/AvenirNextLTPro-Regular.woff2') format('woff2'),
        url('./fonts/AvenirNextLTPro-Regular.woff') format('woff');
    font-weight: 400;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'Avenir Next';
    src: url('./fonts/AvenirNextLTPro-Bold.woff2') format('woff2'),
        url('./fonts/AvenirNextLTPro-Bold.woff') format('woff');
    font-weight: 700;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'Adobe Caslon Pro';
    src: url('./fonts/ACaslonPro-Regular.woff2') format('woff2'),
        url('./fonts/ACaslonPro-Regular.woff') format('woff');
    font-weight: 400;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'Adobe Caslon Pro';
    src: url('./fonts/ACaslonPro-Bold.woff2') format('woff2'),
        url('./fonts/ACaslonPro-Bold.woff') format('woff');
    font-weight: 700;
    font-style: normal;
    font-display: swap;
  }

  html, body, div, span, applet, object, iframe, h1, h2, h3, h4, h5, h6, p,
  blockquote, pre, a, abbr, acronym, address, big, cite, code, del, dfn, em, img,
  ins, kbd, q, s, samp, small, strike, strong, sub, sup, tt, var, b, u, i, center,
  dl, dt, dd, ol, ul, li, fieldset, form, label, legend, table, caption, tbody,
  tfoot, thead, tr, th, td, article, aside, canvas, details, embed, figure,
  figcaption, footer, header, hgroup, menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    border: 0;
    font: inherit;
    font-size: 100%;
    margin: 0;
    padding: 0;
    vertical-align: baseline;
  }

  article,
  aside,
  details,
  figcaption,
  figure,
  footer,
  header,
  hgroup,
  menu,
  nav,
  section {
    display: block;
  }

  blockquote,
  q {
    quotes: none;
  }
  ol,
  ul {
    list-style: none;
  }

  blockquote::before,
  blockquote::after,
  q::before,
  q::after {
    content: none;
  }

  button {
    -moz-appearance: none;
    -webkit-appearance: none;
    appearance: none;
    background: none repeat scroll 0 0 transparent;
    border: 0;
    font-family: 'Space Mono', monospace;
  }

  iframe {
    border: 0;
  }

  img {
    display: block;
    height: auto;
    -ms-interpolation-mode: bicubic;
    max-width: 100%;
    width: auto;
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  *,
  *::before,
  *::after {
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    /* stylelint-disable */
    -webkit-font-smoothing: antialiased !important;
    font-smoothing: antialiased !important;
    -moz-osx-font-smoothing: grayscale !important;
    /* stylelint-enable */
    text-rendering: optimizeLegibility !important;
  }

  html,
  body {
    background-color: ${colors.white};
    height: 100%;
    position: relative;
  }

  body {
    color: ${colors.base};
    font-family: ${typography.bodyFontFamily.join(', ')};
    font-size: ${typography.baseFontSize}px;
    font-weight: 400;
    letter-spacing: 0;
    line-height: ${space()};
    margin: 0;
    overflow-x: hidden;
    padding: 0;
  }

  b,
  strong {
    font-weight: 700;
  }

  p {
    font-size: 1rem;
    margin: 0 0 ${space()};

    &:last-child { margin-bottom: 0; }
  }

  a {
    color: ${colors.base};
    text-decoration: none;
  }

  ${typographyStyles}
`;

export default GlobalStyle;

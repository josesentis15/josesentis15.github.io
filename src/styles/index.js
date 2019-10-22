import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Helvetica Neue';
    src: url('./assets/fonts/HelveticaNeueLTStd-Lt.otf')  format('opentype'),
    url('./assets/fonts/HelveticaNeueLTStd-Lt.woff') format('woff'),
    url('./assets/fonts/HelveticaNeueLTStd-Lt.ttf')  format('truetype'),
    url('./assets/fonts/HelveticaNeueLTStd-Lt.eot') format('embedded-opentype')
    url('./assets/fonts/HelveticaNeueLTStd-Lt.svg#HelveticaNeueLTStd-Lt') format('svg');
    font-weight: 400;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'Helvetica Neue';
    src:  url('./assets/fonts/HelveticaNeueLTStd-Bd.otf')  format('opentype'),
        url('./assets/fonts/HelveticaNeueLTStd-Bd.eot') format('embedded-opentype'),
        url('./assets/fonts/HelveticaNeueLTStd-Bd.woff') format('woff'),
      url('./assets/fonts/HelveticaNeueLTStd-Bd.ttf')  format('truetype'),
      url('./assets/fonts/HelveticaNeueLTStd-Bd.svg#HelveticaNeueLTStd-Bd') format('svg');
    font-weight: 700;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'Space Mono';
    src:  url('./assets/fonts/SpaceMono-Regular.woff') format('woff'),
      url('./assets/fonts/SpaceMono-Regular.ttf')  format('truetype'),
      url('./assets/fonts/SpaceMono-Regular.eot') format('embedded-opentype'),
      url('./assets/fonts/SpaceMono-Regular.svg#SpaceMono-Regular') format('svg');
    font-weight: 400;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'Space Mono';
    src:  url('./assets/fonts/SpaceMono-Bold.woff') format('woff'),
      url('./assets/fonts/SpaceMono-Bold.ttf')  format('truetype'),
      url('./assets/fonts/SpaceMono-Bold.eot') format('embedded-opentype'),
      url('./assets/fonts/SpaceMono-Bold.svg#SpaceMono-Bold') format('svg');
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
    background-color: #0c0421;
    height: 100%;
    position: relative;
    font-family: 'Helvetica Neue', Helvetica, sans-serif;
  }

  body {
    color: #fcf9f9;
    margin: 0;
    overflow-x: hidden;
    padding: 0;
    font-size: 16px;
    line-height: 24px;
  }

  b,
  strong {
    color: #fcf9f9;
    font-weight: 700;
  }

  p {
    font-size: 1rem;
    margin: 0 0 20px;
  }

  a {
    color: #fcf9f9;
    text-decoration: none;
  }

  @media only screen and (min-width: 480px) {
    body {
      font-size: calc(16px + 2 * ((100vw - 480px) / 288));
    }
  }

  @media only screen and (min-width: 768px) {
    body {
      font-size: 18px;
    }
  }

  .anim{
    opacity: 0;
      transform: translate(0, 15px);
      transition: all .4s ease-out;
  }
  .anim.animated{
    opacity: 1;
      transform: translate(0, 0);
  }

  .container {
    position: relative;
    margin-left: auto;
    margin-right: auto;
    max-width: 1440px;
    padding-right: 15px;
    padding-left: 15px;
  }

  @media (min-width: 1024px) {
    .container {
      padding-right: 20px;
      padding-left: 20px;
    }
  }

  @media (min-width: 1440px) {
    .container {
      padding: 0;
    }
  }
`;

export default GlobalStyle;

import React from 'react';

import Header from './header';
import GlobalStyle from '../styles';
import SEO from './seo';

import { rhythm } from '../utils/typography';

class Layout extends React.Component {
  render() {
    const { children, title = false } = this.props;

    return (
      <div
        style={{
          marginLeft: `auto`,
          marginRight: `auto`,
          maxWidth: rhythm(24),
          padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
        }}
      >
        {title ? <SEO title={title} /> : <SEO />}
        <GlobalStyle />
        <Header />
        <main>{children}</main>
      </div>
    );
  }
}

export default Layout;

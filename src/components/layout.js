import React from 'react';

import Header from './header';
import GlobalStyle from '../styles';
import SEO from './seo';

class Layout extends React.Component {
  render() {
    const { children, title = false } = this.props;

    return (
      <div
        style={{
          marginLeft: `auto`,
          marginRight: `auto`
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

import React from 'react';

import GlobalStyle from '../../styles';
import Header from '../header';
import SEO from '../seo';

import LayoutStyled from './styles';

class Layout extends React.Component {
  render() {
    const { children, title = false, description = false, reading = false } = this.props;

    return (
      <LayoutStyled className={reading ? 'reading' : ''}>
        <SEO title={title} description={description} />
        <GlobalStyle />
        <Header />
        <main>{children}</main>
      </LayoutStyled>
    );
  }
}

export default Layout;

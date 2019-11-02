import React from 'react';

import GlobalStyle from '../../styles';
import Header from '../header';
import SEO from '../seo';

import LayoutStyled from './styles';


class Layout extends React.Component {
  componentDidMount() {
    this.touchable();
  }

  touchable() {
    const typedWindow = window || null;
    const touchsupport =
      'ontouchstart' in typedWindow ||
      typedWindow.navigator.maxTouchPoints > 0 ||
      typedWindow.navigator.msMaxTouchPoints > 0;
    const touchClass = touchsupport ? 'touch' : 'non-touch';

    if (document.documentElement) {
      document.documentElement.classList.add(touchClass);
    }
  }

  render() {
    const { className = '', children, title = false, description = false, reading = false } = this.props;

    return (
      <LayoutStyled className={className.concat(reading ? ' reading' : '')}>
        <SEO title={title} description={description} />
        <GlobalStyle />
        <Header />
        <main>{children}</main>
      </LayoutStyled>
    );
  }
}

export default Layout;

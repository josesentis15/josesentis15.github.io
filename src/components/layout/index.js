import React from 'react';

import Cursor from '../cursor';
import SEO from '../seo';

import LayoutStyled, { Wrapper } from './styles';

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
    const {
      className = '',
      children,
      reading = false,
      title = '',
      description = '',
    } = this.props;

    return (
      <LayoutStyled className={className.concat(reading ? ' reading' : '')}>
        <Cursor />
        <SEO title={title} description={description} />
        <main>{children}</main>
      </LayoutStyled>
    );
  }
}

export default Layout;
export { Wrapper };

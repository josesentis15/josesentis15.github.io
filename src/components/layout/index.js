import React from 'react';

import SEO from '../seo';

import LayoutStyled, { Wrapper } from './styles';

class Layout extends React.Component {
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
        <SEO title={title} description={description} />
        <main>{children}</main>
      </LayoutStyled>
    );
  }
}

export default Layout;
export { Wrapper };

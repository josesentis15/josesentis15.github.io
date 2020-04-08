import React from 'react';
import forEach from '@runroom/purejs/lib/forEach';

import { toggleCursor } from '../cursor';
import SEO from '../seo';

import LayoutStyled, { Wrapper } from './styles';

class Layout extends React.Component {
  componentDidMount() {
    this.triggerHover();
  }

  componentWillUnmount() {
    this.removeHover();
  }

  triggerHover = () => {
    const links = document.querySelectorAll('a');
    const buttons = document.querySelectorAll('button');

    forEach([...links, ...buttons], item => {
      item.addEventListener('mouseover', toggleCursor, false);
      item.addEventListener('mouseleave', toggleCursor, false);
    });
  }

  removeHover = () => {
    const links = document.querySelectorAll('a');
    const buttons = document.querySelectorAll('button');

    forEach([...links, ...buttons], item => {
      item.removeEventListener('mouseover', toggleCursor, false);
      item.removeEventListener('mouseleave', toggleCursor, false);
    });
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
        <SEO title={title} description={description} />
        <main>{children}</main>
      </LayoutStyled>
    );
  }
}

export default Layout;
export { Wrapper };

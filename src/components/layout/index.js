import React from 'react';
import { TransitionGroup, CSSTransition } from "react-transition-group";

import GlobalStyle from '../../styles';
import Header from '../header';
import SEO from '../seo';

import LayoutStyled, { Wrapper } from './styles';

class Layout extends React.Component {
  state = {
    loaded: false
  }

  componentDidMount() {
    this.touchable();
    this.setState({ loaded: true });
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
      title = false,
      description = false,
      reading = false,
      header = true
    } = this.props;
    const { loaded } = this.state;

    return (
      <LayoutStyled className={className.concat(reading ? ' reading' : '')}>
        <SEO title={title} description={description} />
        <GlobalStyle />
        <TransitionGroup component={null}>
          {header && loaded && (
            <CSSTransition classNames="loaded" timeout={200}>
              <Header />
            </CSSTransition>
          )}
        </TransitionGroup>
        <main>{children}</main>
      </LayoutStyled>
    );
  }
}

export default Layout;
export { Wrapper };

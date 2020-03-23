import React from 'react';
import { TransitionGroup, CSSTransition } from "react-transition-group";

import Header from '../components/header';
import Layout, { Wrapper } from '../components/layout';
import Loader from '../components/loader';
import Navigation from '../components/navigation';

class Home extends React.Component {
  state = {
    loaded: false,
    showLoader: false
  }

  componentDidMount() {
    this.setState({ showLoader: true });

    setTimeout(() => {
      this.setState({ loaded: true });
    }, 3000);
  }

  render() {
    const { loaded, showLoader } = this.state;
    const pageName = this.props.location.pathname.replace('/', '');

    return loaded ? (
      <Layout location={this.props.location} className={pageName === '/' ? 'home' : ''}>
        <Header />
        <Wrapper>
          <Navigation />
        </Wrapper>
      </Layout>
    ) : (
        <Layout location={this.props.location}>
          <TransitionGroup component={null}>
            {showLoader && (
              <CSSTransition classNames="loaded" timeout={2000}>
                <Loader />
              </CSSTransition>
            )}
          </TransitionGroup>
        </Layout>
      )
  }
}

export default Home;

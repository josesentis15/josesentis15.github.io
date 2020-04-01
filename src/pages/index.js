import React from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { Location } from '@reach/router';

import Header from '../components/header';
import Layout, { Wrapper } from '../components/layout';
import Loader from '../components/loader';
import Navigation from '../components/navigation';
import Profile from '../components/profile';

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

    return (
      <Layout location={this.props.location} className="home">
        {loaded ? (
          <Wrapper>
            <Navigation />
          </Wrapper>
        ) : (
            <TransitionGroup component={null}>
              {showLoader && (
                <CSSTransition classNames="loaded" timeout={2000}>
                  <Loader />
                </CSSTransition>
              )}
            </TransitionGroup>
          )}
      </Layout>
    );
  }
}

export default Home;

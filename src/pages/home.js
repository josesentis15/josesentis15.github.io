import React from 'react';
import { withRouter } from "react-router";

import Header from '../components/header';
import Layout, { Wrapper } from '../components/layout';
import Navigation from '../components/navigation';

class Home extends React.Component {
  render() {
    return (
      <Layout location={this.props.location} className="home">
        <Header />
        <Wrapper>
          <Navigation />
          {/* <NavigationWrapper>
            <TransitionGroup>
              {loaded && !loading && (
                <CSSTransition classNames="loaded" timeout={300}>
                  <h1 className="title">
                    <AppearingText><span className="text dark">New site coming soon...</span></AppearingText>
                  </h1>
                </CSSTransition>
              )}
            </TransitionGroup>
          </NavigationWrapper> */}
        </Wrapper>
      </Layout>
    );
  }
}

export default withRouter(Home);

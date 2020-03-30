import React from 'react';
import { Query } from "react-apollo";
import { TransitionGroup, CSSTransition } from "react-transition-group";

import Header from '../../components/header';
import Layout, { Wrapper } from '../../components/layout';
import { AppearingText, NavigationWrapper } from '../../components/navigation';
import Profile from '../../components/profile';

import GET_ABOUT from './queries';

class About extends React.Component {
  state = {
    loaded: false
  }

  componentDidMount() {
    this.setState({ loaded: true });
  }

  render() {
    const { loaded } = this.state;

    return (
      <Query query={GET_ABOUT}>
        {({ loading, data }) => {
          const {
            about
          } = data.sections;

          return (
            <Layout location={this.props.location}>
              <Header />
              <Wrapper>
                <NavigationWrapper>
                  <TransitionGroup>
                    {loaded && !loading && (
                      <CSSTransition classNames="loaded" timeout={300}>
                        <h1 className="title">
                          <AppearingText><span className="text">{about}</span></AppearingText>
                        </h1>
                      </CSSTransition>
                    )}
                  </TransitionGroup>
                </NavigationWrapper>
                <Profile />
              </Wrapper>
            </Layout>
          );
        }}
      </Query>
    );
  }
}

export default About;

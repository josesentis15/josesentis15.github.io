import React from 'react';
import { Query } from "react-apollo";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { withRouter } from "react-router";

import Header from '../../components/header';
import Layout, { Wrapper } from '../../components/layout';
import { AppearingText, NavigationWrapper } from '../../components/navigation';
import Profile from '../../components/profile';
import withLoader from '../../hoc/withLoader';

import { capitalize } from '../../utils/mixins';
import GET_ABOUT from './queries';

class About extends React.Component {
  render() {
    const { loaded } = this.props;

    return (
      <Query query={GET_ABOUT}>
        {({ loading, data }) => {
          const {
            about
          } = data.sections;

          return (
            <Layout location={this.props.location} title={capitalize(about)} className="about">
              <Header />
              <Wrapper>
                <NavigationWrapper className="fixed">
                  <TransitionGroup>
                    {loaded && !loading && (
                      <CSSTransition classNames="loaded" timeout={300}>
                        <h1 className="title">
                          <AppearingText><span className="text active">{about}</span></AppearingText>
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

export default withLoader(withRouter(About));

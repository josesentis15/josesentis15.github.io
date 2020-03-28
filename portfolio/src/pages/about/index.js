import React from 'react';
import { Query } from "react-apollo";

import Header from '../../components/header';
import Layout, { Wrapper } from '../../components/layout';
import { NavigationWrapper } from '../../components/navigation';
import Profile from '../../components/profile';

import GET_SECTION_NAME from './queries';

class About extends React.Component {
  render() {

    return (
      <Query query={GET_SECTION_NAME}>
        {({ loading, data }) => {
          const {
            about
          } = data.sections;

          if (loading) return;

          return (
            <Layout location={this.props.location}>
              <Header />
              <Wrapper>
                <NavigationWrapper>
                  <h1 className="title">{about}</h1>
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

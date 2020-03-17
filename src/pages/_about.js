import React from 'react';

import Layout, { Wrapper } from '../components/layout';
import Navigation from '../components/navigation';
import Profile from '../components/profile';

class About extends React.Component {
  render() {
    return (
      <Layout location={this.props.location}>
        <Wrapper>
          <Navigation />
          <Profile />
        </Wrapper>
      </Layout>
    );
  }
}

export default About;

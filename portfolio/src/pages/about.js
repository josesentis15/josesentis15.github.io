import React from 'react';

import Header from '../components/header';
import Layout, { Wrapper } from '../components/layout';
import Navigation from '../components/navigation';
import Profile from '../components/profile';

class About extends React.Component {
  render() {
    return (
      <Layout location={this.props.location}>
        <Header />
        <Wrapper>
          <Navigation />
          <Profile />
        </Wrapper>
      </Layout>
    );
  }
}

export default About;

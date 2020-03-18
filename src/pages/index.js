import React from 'react';

import Layout, { Wrapper } from '../components/layout';
import Navigation from '../components/navigation';

class Home extends React.Component {
  render() {
    return (
      <Layout location={this.props.location} className="home">
        <Wrapper>
          <Navigation />
        </Wrapper>
      </Layout>
    );
  }
}

export default Home;

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
        </Wrapper>
      </Layout>
    );
  }
}

export default withRouter(Home);

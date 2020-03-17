import React from 'react';
import { Link } from 'gatsby';

import Layout, { Wrapper } from '../components/layout';
// import Navigation from '../components/navigation';
import NavigationWrapper from '../components/navigation/styles';

class Home extends React.Component {
  render() {
    return (
      <Layout location={this.props.location} className="home">
        <Wrapper>
          {/* <Navigation /> */}
          <NavigationWrapper>
            <Link to={`/`} className="title link">New site coming soon...</Link>
          </NavigationWrapper>
        </Wrapper>
      </Layout>
    );
  }
}

export default Home;

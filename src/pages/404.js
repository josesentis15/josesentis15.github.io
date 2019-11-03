import React from 'react';

import Layout, { Wrapper } from '../components/layout';

class NotFoundPage extends React.Component {
  render() {
    return (
      <Layout location={this.props.location} title="404: Not Found">
        <Wrapper>
          <h1>Not Found</h1>
          <p>You just hit a route that doesn't exist... the sadness.</p>
        </Wrapper>
      </Layout>
    );
  }
}

export default NotFoundPage;

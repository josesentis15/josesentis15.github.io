import React from 'react';

import Layout from '../components/layout';

class NotFoundPage extends React.Component {
  render() {
    return (
      <Layout location={this.props.location} title="404: Not Found">
        <h1>Not Found</h1>
        <p>You just hit a route that doesn't exist... the sadness.</p>
      </Layout>
    );
  }
}

export default NotFoundPage;

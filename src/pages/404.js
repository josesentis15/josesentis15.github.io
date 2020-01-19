import React from 'react';
import { Link } from 'gatsby';

import Glitch from '../components/glitch';
import Layout, { Wrapper } from '../components/layout';

import routes from '../utils/routes';

class NotFoundPage extends React.Component {
  render() {
    const text = 'Error 404';

    return (
      <Layout location={this.props.location} title="404: Not Found">
        <Wrapper>
          <h1 className="title">
            <Glitch text={text} />
          </h1>
          <Link to={routes.home}>Back</Link>
        </Wrapper>
      </Layout>
    );
  }
}

export default NotFoundPage;

import React from 'react';
import { Link } from 'gatsby';

import Glitch from '../components/glitch';
import Layout, { Wrapper } from '../components/layout';

import routes from '../utils/routes';

class NotFoundPage extends React.Component {
  render() {
    const text = 'Error 404';

    return (
      <Layout
        className="layout-bottom"
        location={this.props.location}
        title="404: Not Found"
      >
        <Wrapper>
          <h1 className="title">
            <Glitch className="u-hide--s768" text={text} />
            <Glitch className="u-hide--s768" text={text} />
            <Glitch text={text} />
          </h1>
          <Link to={routes.home}>Get back</Link>
        </Wrapper>
      </Layout>
    );
  }
}

export default NotFoundPage;

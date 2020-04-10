import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from "react-router";

import Glitch from '../../components/glitch';
import Layout, { Wrapper } from '../../components/layout';

import routes from '../../utils/routes';

class NotFound extends React.Component {
  _text = 'Error 404';

  render() {
    return (
      <Layout
        className="layout-bottom not-found page-transition"
        location={this.props.location}
        title="404: Not Found"
      >
        <Wrapper>
          <h1 className="title">
            <Glitch className="u-hide--s768" text={this._text} />
            <Glitch className="u-hide--s768" text={this._text} />
            <Glitch text={this._text} />
          </h1>
          <Link to={routes.home}>Get back</Link>
        </Wrapper>
      </Layout>
    );
  }
}

export default withRouter(NotFound);

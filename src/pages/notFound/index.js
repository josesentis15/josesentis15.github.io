import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from "react-router";

import { toggleCursor } from '../../components/cursor';
import Glitch from '../../components/glitch';
import Layout, { Wrapper } from '../../components/layout';
import Noise from '../../components/noise';

import routes from '../../utils/routes';

class NotFound extends React.Component {
  _text = 'Error 404';

  render() {
    return (
      <Layout
        className="layout-bottom not-found dark"
        location={this.props.location}
        title="404: Not Found"
      >
        <Noise />
        <Wrapper>
          <h1 className="title">
            <Glitch text={this._text} />
          </h1>
          <Link
            to={routes.home}
            onMouseEnter={() => toggleCursor()}
            onMouseLeave={() => toggleCursor()}
          >
            Get back
          </Link>
        </Wrapper>
      </Layout>
    );
  }
}

export default withRouter(NotFound);

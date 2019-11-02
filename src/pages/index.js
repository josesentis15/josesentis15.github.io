import React from 'react';
import { Link, graphql } from 'gatsby';

import ExternalLink from '../components/externalLink';
import Layout from '../components/layout';

import routes from '../utils/routes';

class Home extends React.Component {
  render() {
    const { playground, projects, about } = this.props.data.site.siteMetadata.sections;

    return (
      <Layout location={this.props.location}>
        <ExternalLink to={routes.playground} className="title" icon={true}>{playground}</ExternalLink>
        <Link to={routes.projects} className="title" >{projects}</Link>
        <Link to={routes.about} className="title" >{about}</Link>
      </Layout>
    );
  }
}

export default Home;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        sections {
          playground
          projects
          about
        }
      }
    }
  }
`;

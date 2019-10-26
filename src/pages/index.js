import React from 'react';
import { Link, graphql } from 'gatsby';

import ExternalLink from '../components/externalLink';
import Layout from '../components/layout';
import SEO from '../components/seo';

import routes from '../utils/routes';

class Home extends React.Component {
  render() {
    const { playground, projects, about } = this.props.data.site.siteMetadata.sections;

    return (
      <Layout location={this.props.location}>
        <SEO />
        <ExternalLink to={routes.playground} text={playground} />
        <Link to={routes.projects}>{projects}</Link>
        <Link to={routes.about}>{about}</Link>
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

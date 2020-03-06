import React from 'react';
import { Link, graphql } from 'gatsby';
import 'normalize.css';

import ExternalLink from '../components/externalLink';
import Layout, { Wrapper } from '../components/layout';
import Navigation from '../styles/navigation';

import routes from '../utils/routes';

class Home extends React.Component {
  render() {
    const { playground, projects, about } = this.props.data.site.siteMetadata.sections;

    return (
      <Layout location={this.props.location} className="home">
        <Wrapper>
          <Navigation>
            <Link to={routes.projects} className="title link">{projects}</Link>
            <ExternalLink to={routes.playground} className="title link" icon={true}>{playground}</ExternalLink>
            <Link to={routes.about} className="title link">{about}</Link>
          </Navigation>
        </Wrapper>
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

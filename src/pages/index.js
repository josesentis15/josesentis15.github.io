import React from 'react';
import { Link, graphql } from 'gatsby';
import styled from 'styled-components';

import ExternalLink from '../components/externalLink';
import Layout from '../components/layout';

import { media } from '../utils/media-queries';
import routes from '../utils/routes';

const HomeStyled = styled.div`
  align-items: flex-start;
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: space-between;

  ${media.max('tablet')`
    .title span { display: block; }
  `}
`;

class Home extends React.Component {
  render() {
    const { playground, projects, about } = this.props.data.site.siteMetadata.sections;

    return (
      <Layout location={this.props.location} className="home">
        <HomeStyled>
          <Link to={routes.projects} className="title" >{projects}</Link>
          <ExternalLink to={routes.playground} className="title" icon={true}>{playground}</ExternalLink>
          <Link to={routes.about} className="title" >{about}</Link>
        </HomeStyled>
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

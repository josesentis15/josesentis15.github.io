import React from 'react';
import { Link, graphql } from 'gatsby';
import Img from 'gatsby-image';
import styled from 'styled-components';

import Layout from '../components/layout';
import ExternalLink from '../components/externalLink';
import SEO from '../components/seo';
import { rhythm } from '../utils/typography';

class Projects extends React.Component {
  render() {
    const { data } = this.props;
    const projects = data.allContentfulProject.edges;

    const Post = styled.article`
      display: flex;
    `;

    const PostImage = styled.div`
      flex: 25%;
      margin-right: 1rem;
    `;

    const PostText = styled.div`
      flex: 75%;
    `;

    return (
      <Layout location={this.props.location}>
        <SEO title="Projects" />
        {projects.map(({ node }) => {
          const title = node.title || node.slug;

          return (
            <Post
              key={node.id}
              style={{
                marginBottom: rhythm(1),
              }}
            >
              <PostImage>
                <Img fluid={node.image.fluid} />
              </PostImage>
              <PostText>
                <h3
                  style={{
                    marginTop: 0,
                    marginBottom: rhythm(1 / 4),
                  }}
                >
                  {node.external ? (
                    <ExternalLink to={node.externalLink} text={title} />
                  ) : (
                    <Link style={{ boxShadow: `none` }} to={node.slug}>
                      {title}
                    </Link>
                  )}
                </h3>
                <p>{node.abstract.abstract}</p>
              </PostText>
            </Post>
          );
        })}
      </Layout>
    );
  }
}

export default Projects;

export const pageQuery = graphql`
  query {
    allContentfulProject(sort: { fields: order }) {
      edges {
        node {
          title
          external
          externalLink
          slug
          image {
            fluid {
              ...GatsbyContentfulFluid
            }
          }
          id
          abstract {
            abstract
          }
        }
      }
    }
  }
`;

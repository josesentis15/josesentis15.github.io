import React from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';

import Layout from '../components/layout';
import SEO from '../components/seo';
import { rhythm } from '../utils/typography';

class ProjectTemplate extends React.Component {
  render() {
    const project = this.props.data.contentfulProject;
    const siteTitle = this.props.data.site.siteMetadata.title;

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title={project.title} description={project.abstract.abstract} />
        <article>
          <header>
            <h1
              style={{
                marginTop: rhythm(1),
                marginBottom: 0,
              }}
            >
              {project.title}
            </h1>
          </header>
          <Img fluid={project.image.fluid} />
          <section
            dangerouslySetInnerHTML={{
              __html: project.content.childContentfulRichText.html,
            }}
          />
          <hr
            style={{
              marginBottom: rhythm(1),
            }}
          />
        </article>
      </Layout>
    );
  }
}

export default ProjectTemplate;

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    contentfulProject(slug: { eq: $slug }) {
      title
      abstract {
        abstract
      }
      image {
        fluid {
          ...GatsbyContentfulFluid
        }
      }
      content {
        childContentfulRichText {
          html
        }
      }
    }
  }
`;

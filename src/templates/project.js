import React from 'react';
import { Link, graphql } from 'gatsby';
import Img from 'gatsby-image';

import Layout from '../components/layout';
import SEO from '../components/seo';

import routes from '../utils/routes';
import { rhythm } from '../utils/typography';

class ProjectTemplate extends React.Component {
  render() {
    const project = this.props.data.contentfulProject;

    return (
      <Layout location={this.props.location}>
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
            <Link to={routes.projects}>Back</Link>
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

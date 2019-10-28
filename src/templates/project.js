import React from 'react';
import { Link, graphql } from 'gatsby';
import Img from 'gatsby-image';

import Layout from '../components/layout';
import SEO from '../components/seo';

import routes from '../utils/routes';

class ProjectTemplate extends React.Component {
  render() {
    const project = this.props.data.contentfulProject;

    return (
      <Layout location={this.props.location}>
        <SEO title={project.title} description={project.abstract.abstract} />
        <article>
          <header>
            <h1>
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
        </article>
      </Layout>
    );
  }
}

export default ProjectTemplate;

export const pageQuery = graphql`
  query ProjectBySlug($slug: String!) {
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

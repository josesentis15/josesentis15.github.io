import React from 'react';
import { Link, graphql } from 'gatsby';

import Layout from '../../components/layout';
import ProjectDetail, { Wysiwyg } from './styles';

import routes from '../../utils/routes';

class ProjectTemplate extends React.Component {
  render() {
    const project = this.props.data.contentfulProject;

    return (
      <Layout
        location={this.props.location}
        title={project.title}
        description={project.abstract.abstract}
      >
        <ProjectDetail>
          <header>
            <h1>
              {project.order.toString().length === 1 ? '0' : ''}
              {project.order}. {project.title}
            </h1>
            <Link to={routes.projects} className="backBtn">Back</Link>
          </header>
          <Wysiwyg className="reading">
            <p>{project.abstract.abstract}</p>
            <section
              dangerouslySetInnerHTML={{
                __html: project.content.childContentfulRichText.html,
              }}
            />
          </Wysiwyg>
        </ProjectDetail>
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
      order
    }
  }
`;

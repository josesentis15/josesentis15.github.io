import React from 'react';
import { graphql } from 'gatsby';

import Component from '../../components/component';
import Layout, { Wrapper } from '../../components/layout';
import Navigation from '../../styles/navigation';
import ProjectDetail from './styles';

import DATA from '../../../content/content.json';

class ProjectTemplate extends React.Component {
  render() {
    const project = this.props.data.contentfulProject;
    const title = this.props.data.site.siteMetadata.sections.projects;

    return (
      <Layout
        location={this.props.location}
        title={project.title}
        description={project.abstract.abstract}
        className="dark"
      >
        <Wrapper>
          <Navigation>
            <div className="title">{title}</div>
          </Navigation>
        </Wrapper>
        <ProjectDetail id="project-detail">
          <Wrapper>
            <div className="background-wrapper">
              <Wrapper className="reading">
                  <h1 className="title2">
                    <span className="label">
                      {project.order.toString().length === 1 ? '0' : ''}
                      {project.order}.
                    </span>
                    {project.title}
                  </h1>
                  {DATA[project.slug].map((data, index) => (
                    <Component data={data} key={`component_${index}`} />
                  ))}
              </Wrapper>
            </div>
          </Wrapper>
        </ProjectDetail>
      </Layout>
    );
  }
}

export default ProjectTemplate;

const pageQuery = graphql`
  query ProjectBySlug($slug: String!) {
    site {
      siteMetadata {
        sections {
          projects
        }
      }
    }
    contentfulProject(slug: { eq: $slug }) {
      title
      slug
      abstract {
        abstract
      }
      image {
        fluid {
          ...GatsbyContentfulFluid
        }
      }
      order
    }
  }
`;

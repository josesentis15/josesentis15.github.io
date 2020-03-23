import React from 'react';
import { graphql } from 'gatsby';
import striptags from 'striptags';

import Layout, { Wrapper } from '../components/layout';
import ProjectList from '../components/projectsList';
import Project from '../components/project';
import Navigation from '../components/navigation/styles';

import { capitalize } from '../utils/mixins';

class Projects extends React.Component {
  state = {
    hoverProject: '',
    clickedProject: ''
  }

  onClick = (projectName = '') => {
    this.setState({ clickedProject: projectName })
  }

  onHover = (projectName = '') => {
    this.setState({ hoverProject: projectName })
  }

  render() {
    const { data } = this.props;
    const { hoverProject, clickedProject } = this.state;
    const projects = data.allContentfulProject.edges;
    const title = data.site.siteMetadata.sections.projects;

    return (
      <Layout location={this.props.location} title={striptags(capitalize(title))} className="dark">
        <Wrapper>
          <Navigation>
            <h1 className="title">{title}</h1>
          </Navigation>
        </Wrapper>
        <Wrapper className="reading">
          <ProjectList>
            {projects.map(({ node }) => (
              <Project
                key={node.id}
                project={node}
                hoverProject={hoverProject}
                clickedProject={clickedProject}
                onHover={this.onHover}
                onClick={this.onClick}
              />
            ))}
          </ProjectList>
        </Wrapper>
      </Layout>
    );
  }
}

export default Projects;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        sections {
          projects
        }
      }
    }
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
          order
          abstract {
            abstract
          }
        }
      }
    }
  }
`;

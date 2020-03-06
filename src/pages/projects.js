import React from 'react';
import { graphql } from 'gatsby';

import Layout, { Wrapper } from '../components/layout';
import ProjectList from '../components/projectsList';
import Project from '../components/project';
import Navigation from '../styles/navigation';

class Projects extends React.Component {
  state = {
    hover: false,
  };

  onMouseOver = e => {
    this.setState({ hover: false });
    e.currentTarget.classList.add('hover');
  };

  onMouseOut = e => {
    this.setState({ hover: false });
    e.currentTarget.classList.remove('hover');
  };

  render() {
    const { data } = this.props;
    const { hover } = this.state;
    const projects = data.allContentfulProject.edges;
    const title = data.site.siteMetadata.sections.projects;

    return (
      <Layout location={this.props.location} title="Projects" className="dark">
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
                hover={hover}
                onMouseOver={this.onMouseOver}
                onMouseOut={this.onMouseOut}
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

//       <PostImage>
//         <Img fluid={node.image.fluid} />
//       </PostImage>

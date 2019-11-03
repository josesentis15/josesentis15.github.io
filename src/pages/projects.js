import React from 'react';
import { Link, graphql } from 'gatsby';
// import Img from 'gatsby-image';

import Layout, { Wrapper } from '../components/layout';
import ExternalLink from '../components/externalLink';
import ProjectList from '../components/projectsList';
import Navigation from '../styles/navigation';

class Projects extends React.Component {
  state = {
    hover: false
  }

  onMouseOver = e => {
    this.setState({ hover: false });
    e.currentTarget.classList.add('hover');
  }

  onMouseOut = e => {
    this.setState({ hover: false });
    e.currentTarget.classList.remove('hover');
  }

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
            {projects.map(({ node }) => {
              const title = node.title || node.slug;
              const { order } = node;

              const className = `project ${hover ? 'no-hover' : ''}`;

              return (
                <div
                  key={node.id}
                  className={className}
                  onMouseEnter={this.onMouseOver}
                  onMouseLeave={this.onMouseOut}
                >
                  <h2 className="project__title title2">
                    <span className="label">{order.toString().length === 1 ? '0' : ''}{order}.</span>
                    {title}
                  </h2>
                  <p className="project__text">{node.abstract.abstract}</p>
                  {node.external ? (
                    <ExternalLink to={node.externalLink}>Go to site</ExternalLink>
                  ) : (
                    <Link to={node.slug}>View project</Link>
                  )}
                </div>
              );
            })}
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

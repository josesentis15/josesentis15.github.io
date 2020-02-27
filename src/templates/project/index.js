import React from 'react';
import { Link, graphql } from 'gatsby';

import Component from '../../components/component';
import Layout, { Wrapper } from '../../components/layout';
import Navigation from '../../styles/navigation';
import ProjectDetail from './styles';

import DATA from '../../../content/content.json';
import routes from '../../utils/routes';

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
            <h1 className="title">{title}</h1>
          </Navigation>
        </Wrapper>
        <Wrapper className="reading">
          <ProjectDetail>
            <header>
              <h1 className="title2">
                <span className="label">
                  {project.order.toString().length === 1 ? '0' : ''}
                  {project.order}.
                </span>
                {project.title}
              </h1>
              <Link to={routes.projects} className="backBtn">
                Back
              </Link>
            </header>
            {DATA[project.slug].map((data, index) => (
              <Component data={data} key={`component_${index}`} />
            ))}
          </ProjectDetail>
        </Wrapper>
      </Layout>
    );

    // return (
    //   <Layout
    //     location={this.props.location}
    //     title={project.title}
    //     description={project.abstract.abstract}
    //   >
    //     <Wrapper className="reading">
    //       <ProjectDetail>
    //         <header>
    //           <h1 className="title2">
    //             <span className="label">
    //               {project.order.toString().length === 1 ? '0' : ''}
    //               {project.order}.
    //             </span>
    //             {project.title}
    //           </h1>
    //           <Link to={routes.projects} className="backBtn">
    //             Back
    //           </Link>
    //         </header>
    //         {DATA[project.slug].map((data, index) => (
    //           <Component data={data} key={`component_${index}`} />
    //         ))}
    //       </ProjectDetail>
    //     </Wrapper>
    //   </Layout>
    // );
  }
}

export default ProjectTemplate;

export const pageQuery = graphql`
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

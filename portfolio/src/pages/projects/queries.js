import gql from 'graphql-tag';

const GET_PROJECTS = gql`
  {
    sections @client {
      projects
    }
    pages @client {
      projects {
        projectList {
          title
          external
          externalLink
          slug
          image
          order
          abstract
        }
      }
    }
  }
`;

export default GET_PROJECTS;



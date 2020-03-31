import gql from 'graphql-tag';

const GET_PROJECTS = gql`
  {
    sections @client {
      projects
    }
    pages @client {
      projects {
        title
        external
        externalLink
        slug
        image
        id
        order
        abstract
      }
    }
  }
`;

export default GET_PROJECTS;



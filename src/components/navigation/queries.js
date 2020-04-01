import gql from 'graphql-tag';

const GET_SECTIONS = gql`
  {
    sections @client {
      playground
      projects
      about
    }
  }
`;

export default GET_SECTIONS;

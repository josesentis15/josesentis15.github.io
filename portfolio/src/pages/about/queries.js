import gql from 'graphql-tag';

const GET_SECTION_NAME = gql`
  {
    sections @client {
      about
    }
  }
`;

export default GET_SECTION_NAME;

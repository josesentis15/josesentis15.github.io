import gql from 'graphql-tag';

const GET_ABOUT = gql`
  {
    sections @client {
      about
    }
  }
`;

export default GET_ABOUT;

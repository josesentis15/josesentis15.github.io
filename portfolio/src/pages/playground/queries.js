import gql from 'graphql-tag';

const GET_EXERCICES = gql`
  {
    sections @client {
      about
    }
  }
`;

export default GET_EXERCICES;

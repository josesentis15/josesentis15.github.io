import gql from 'graphql-tag';

const GET_DATA = gql`
  {
    job @client
    name @client
  }
`;

export default GET_DATA;

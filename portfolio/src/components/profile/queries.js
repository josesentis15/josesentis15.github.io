import gql from 'graphql-tag';

const GET_PROFILE = gql`
  {
    social @client {
      github
      linkedin
      instagram
      email
    }
    pages @client {
      about {
        content
        image
      }
    }
  }
`;

export default GET_PROFILE;

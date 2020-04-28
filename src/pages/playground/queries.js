import gql from 'graphql-tag';

const GET_PLAYGROUND = gql`
  {
    sections @client {
      playground
    }
    pages @client {
      playground {
        cta
        abstract
      }
    }
  }
`;

export default GET_PLAYGROUND;

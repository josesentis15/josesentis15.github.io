import gql from 'graphql-tag';

const GET_PLAYGROUND = gql`
  {
    pages @client {
      playground {
        cta
        abstract
        exercices {
          abstract
          title
          link
          image
          date
        }
      }
    }
  }
`;

export default GET_PLAYGROUND;
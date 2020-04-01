import gql from 'graphql-tag';

const GET_SEO = gql`
  {
    job @client
    name @client
    description @client
    ogImage @client
    siteUrl @client
  }
`;

export default GET_SEO;

import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';

const cache = new InMemoryCache();
const link = new HttpLink({
  uri: `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE}`,
  headers: {
    'Authorization': `Bearer ${process.env.CONTENTFUL_ACCESS_TOKEN}`,
  }
});

const client = new ApolloClient({
  cache,
  link
});

export default client;

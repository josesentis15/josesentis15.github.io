import { ApolloClient } from 'apollo-client';
// import { setContext } from 'apollo-link-context';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';

import data from '../data/cache';

const cache = new InMemoryCache();
const link = new HttpLink();
const client = new ApolloClient({
  cache,
  link,
});
cache.writeData({ data });

export default client;

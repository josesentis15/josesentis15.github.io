import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';

import data from '../data/cache';

const cache = new InMemoryCache();
const link = new HttpLink();
const client = new ApolloClient({
  cache,
  link,
  resolvers: {}
});

cache.writeData({ data });
client.onResetStore(() => cache.writeData({ data }));

export default client;

import ApolloClient from 'apollo-boost';

const client = new ApolloClient({
  clientState: { defaults, resolvers, typeDefs },
  request: async operation => {
    const token = await auth.getToken();

    operation.setContext({
      headers: {
        authorization: token ? `Bearer ${token}` : ''
      }
    });
  },
  uri: '/graphql'
});

export default client;

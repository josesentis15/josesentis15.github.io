import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';

const cache = new InMemoryCache();
// const link = new HttpLink({
//   uri: `https://graphql.contentful.com/content/v1/spaces/80ssd6cbsstv`,
// });
const link = new HttpLink();
const client = new ApolloClient({
  cache,
  link,
  // accessToken: process.env.REACT_APP_CONTENTFUL_ACCESS_TOKEN
});

cache.writeData({
  data: {
    job: `Creative Front-End developer`,
    name: `Jose Sentis`,
    description: `Hi – I’m Jose, a Front-End developer based in Barcelona. I do stuff for the Internet.`,
    ogImage: `img/og-image.jpg`,
    siteUrl: `https://josesentis.com/`,
    social: {
      __typename: 'Social',
      github: `https://github.com/josesentis`,
      linkedin: `https://www.linkedin.com/in/jose-sentis-vazquez-b0915679/`,
      instagram: `https://www.instagram.com/josesentis.playground/`,
      email: 'jose.sentis1987@gmail.com',
    },
    sections: {
      __typename: 'Sections',
      playground: '<span>play</span><span>ground</span>',
      projects: 'projects',
      about: 'about',
    },
    playground: {
      __typename: 'Playground',
      cta: 'Back to Jose Sentis Folio',
      abstract: `<p>This is the space where I create, where I try new technologies to develop myself in skills that are often difficult to learn working in corporate projects.<br>It's the space where I show who I am further than my role in a agencies.<br>It's my personal kaizen.</p><p>To see other projects, follow the link:</p>`
    }
  }
});

export default client;

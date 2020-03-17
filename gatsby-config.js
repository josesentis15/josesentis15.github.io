const dotenv = require('dotenv');

if (process.env.NODE_ENV !== 'production') {
  dotenv.config();
}

module.exports = {
  siteMetadata: {
    job: `Creative Front-End developer`,
    name: `Jose Sentis`,
    description: `Hi – I’m Jose, a Front-End developer based in Barcelona. I do stuff for the Internet.`,
    ogImage: `img/og-image.jpg`,
    siteUrl: `https://josesentis.com/`,
    social: {
      github: `https://github.com/josesentis`,
      linkedin: `https://www.linkedin.com/in/jose-sentis-vazquez-b0915679/`,
      instagram: `https://www.instagram.com/josesentis.playground/`,
      email: 'jose.sentis1987@gmail.com',
    },
    sections: {
      playground: '<span>play</span><span>ground</span>',
      projects: 'projects',
      about: 'about',
    },
    playground: {
      cta: 'Back to Jose Sentis Folio',
      abstract: `<p>This is the space where I create, where I try new technologies to develop myself in skills that are often difficult to learn working in corporate projects.<br>It's the space where I show who I am further than my role in a agencies.<br>It's my personal kaizen.</p><p>To see other projects, follow the link:</p>`
    }
  },
  plugins: [
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-remove-trailing-slashes`,
    {
      resolve: 'gatsby-source-contentful',
      options: {
        spaceId: '80ssd6cbsstv',
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },
    '@contentful/gatsby-transformer-contentful-richtext',
  ],
};

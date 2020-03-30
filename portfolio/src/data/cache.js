const data = {
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
  },
  pages: {
    __typename: 'Pages',
    about: {
      __typename: 'About page',
      content: `<p>I’m Jose Sentis, Senior Front–End Developer doing stuff for the Internet at Runroom.</p>
      <p>As a developer I try to trigger emotions through digital interfaces using code.</p>
      <p>I’m open for new creative opportunities. Don’t be shy, <a href="mailto:%link" rel="noopener noreferrer">say hi</a></p>`,
      image: '/images/profile.jpg'
    }
  }
};

export default data;

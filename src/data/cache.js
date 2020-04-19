const data = {
  job: `Creative Front-End developer`,
  name: `Jose Sentis`,
  description: `Hi – I’m Jose, a Front-End developer based in Barcelona. I do stuff for the Internet.`,
  ogImage: `images/og-image.jpg`,
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
  pages: {
    __typename: 'Pages',
    about: {
      __typename: 'About page',
      content: `<p>I’m Jose Sentis, Senior Front–End Developer based in Barcelona.</p>
      <p>I consider coding a form of creation and I like complying to crazy designers. I sing karaoke on Saturday nights.</p>
      <p>I’m open for new creative opportunities. Don’t be shy, <a href="mailto:%link" rel="noopener noreferrer">say hi</a></p>`,
      image: '/images/profile.jpg'
    },
    playground: {
      __typename: 'Playground page',
      cta: 'Back to Jose Sentis Folio',
      abstract: `<p>This is the space where I create, where I try new technologies to develop myself in skills that are often difficult to learn working in corporate projects.<br>It's the space where I show who I am further than my role in a agencies.<br>It's my personal kaizen.</p><p>To see other projects, follow the link:</p>`,
      exercices: [
        {
          __typename: 'Exercice',
          title: 'Mouse offset curvature',
          abstract: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
          link: 'https://josesentis.github.io/playground/06-mouse-offset-curvature/',
          date: '2019-12-23',
          image: '/images/exercices/mouse-offset-curvature.jpg'
        },
        {
          __typename: 'Exercice',
          title: 'RGB distortion',
          abstract: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
          link: 'https://josesentis.github.io/playground/05-rgb-distortion/',
          date: '2019-12-23',
          image: '/images/exercices/rgb-distortion.jpg'
        }
      ]
    },
    projects: {
      __typename: 'Project page',
      projectList: [
        {
          __typename: 'Project',
          title: 'Runroom',
          external: true,
          externalLink: 'https://www.runroom.com/',
          image: '/images/esade-exed.jpg',
          order: '1',
          slug: '',
          abstract: 'Repositioning Runroom as a reference point within the field of technology and giving birth to a new digital agency, one that looks like what it offers. New branding via Folch.'
        },
        {
          __typename: 'Project',
          title: 'Cris García',
          external: true,
          externalLink: 'http://cris-garcia.com/',
          image: '/images/esade-exed.jpg',
          order: '2',
          slug: '',
          abstract: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        },
        {
          __typename: 'Project',
          title: 'Estudio Alberto Dominguez',
          external: true,
          externalLink: 'https://www.estudioalbertodominguez.com/',
          image: '/images/esade-exed.jpg',
          order: '3',
          slug: '',
          abstract: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        },
        {
          __typename: 'Project',
          title: 'VC Community',
          external: false,
          externalLink: '',
          slug: 'vc-community',
          image: '/images/vc-community.jpg',
          order: '4',
          abstract: 'InnoEnergy is a company that connects investors and startups to create effective and prosperous alliances. Its main objective was to create a web app so that communication between these two entities would be more independent and direct.'
        },
        {
          __typename: 'Project',
          title: 'Club Familias',
          external: true,
          externalLink: 'https://www.clubfamilias.com/',
          image: '/images/esade-exed.jpg',
          order: '5',
          slug: '',
          abstract: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        },
        {
          __typename: 'Project',
          title: 'Esade Exed',
          external: false,
          externalLink: '',
          slug: 'esade-exed',
          image: '/images/esade-exed.jpg',
          order: '6',
          abstract: 'Redesign and new development for the Executive Education branch of Esade University. The main goal was increasing the conversion, mesured in the number of brochure downloads and increasing the leads to their exdcutive programmes. The challenge was creating a customer oriented navigation architecture while building a modular website. There were stakeholders with very different backgrounds and needs to cover.'
        },
        {
          __typename: 'Project',
          title: 'Finca Mas Solers',
          external: true,
          externalLink: 'https://www.fincamassolers.com',
          image: '/images/finca-mas-solers.jpg',
          order: '7',
          slug: '',
          abstract: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        }
      ]
    }
  }
};

export default data;

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
    },
    projects: [
      {
        title: 'VC Community',
        external: false,
        slug: 'vc-community',
        image: '/images/vc-community.jpg',
        order: '4',
        abstract: 'InnoEnergy is a company that connects investors and startups to create effective and prosperous alliances. Its main objective was to create a web app so that communication between these two entities would be more independent and direct.',
        content: [
          {
            type: 'image',
            src: '/images/cases/vc-community-1.jpg'
          },
          {
            type: 'text',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
          },
          {
            type: 'video',
            src: '/images/cases/vc-community-2.mp4'
          },
          {
            type: 'image',
            src: '/images/cases/vc-community-3.jpg'
          },
          {
            type: 'image',
            src: '/images/cases/vc-community-4.jpg'
          },
          {
            type: 'text',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
          },
          {
            type: 'image',
            src: '/images/cases/vc-community-5.jpg'
          }
        ]
      },
      {
        title: 'Esade Exed',
        external: false,
        slug: 'esade-exed',
        image: '/images/esade-exed.jpg',
        order: '4',
        abstract: 'Redesign and new development for the Executive Education branch of Esade University. The main goal was increasing the conversion, mesured in the number of brochure downloads and increasing the leads to their exdcutive programmes. The challenge was creating a customer oriented navigation architecture while building a modular website. There were stakeholders with very different backgrounds and needs to cover.',
        content: [
          {
            type: 'image',
            src: '/images/cases/vc-community-1.jpg'
          },
          {
            type: 'text',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
          }
        ]
      },
      {
        title: 'Club Familias',
        external: true,
        externalLink: 'https://www.clubfamilias.com/',
        image: '/images/esade-exed.jpg',
        order: '5',
        abstract: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
      },
      {
        title: 'Cris García',
        external: true,
        externalLink: 'http://cris-garcia.com/',
        image: '/images/esade-exed.jpg',
        order: '2',
        abstract: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
      },
      {
        title: 'Runroom',
        external: true,
        externalLink: 'https://www.runroom.com/',
        image: '/images/esade-exed.jpg',
        order: '1',
        abstract: 'Repositioning Runroom as a reference point within the field of technology and giving birth to a new digital agency, one that looks like what it offers. New branding via Folch.'
      },
      {
        title: 'Estudio Alberto Dominguez',
        external: true,
        externalLink: 'https://www.estudioalbertodominguez.com/',
        image: '/images/esade-exed.jpg',
        order: '3',
        abstract: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
      },
      {
        title: 'Finca Mas Solers',
        external: true,
        externalLink: 'https://www.fincamassolers.com',
        image: '/images/finca-mas-solers.jpg',
        order: '7',
        abstract: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
      }
    ],
    exercices: [
      {
        title: '',
        external: '',
        externalLink: '',
        slug: '',
        image: '',
        id: '',
        order: '',
        abstract: ''
      }
    ]
  }
};

export default data;

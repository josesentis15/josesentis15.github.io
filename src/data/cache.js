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
          image: '/images/covers/runroom.jpg',
          order: '1',
          slug: '',
          abstract: `Designed in-house with the help of Folch, on an art direction role, the website was presented as the launching of the new Runroom brand. This new branding repositions Runroom as a reference point in the creative market giving visibility to the real capacities of the company. <br> The main concept is a blurry mixture of colours which was translated into the main animation of the site's home page. This animation was created in a workshop with Edu Prats where using WebGL and shaders the desired look and feel was achieved and integrated into the branding. <br>2019 - Design: Cris García`
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
          image: '/images/covers/estudio-alberto-dominguez.jpg',
          order: '3',
          slug: '',
          abstract: `This project the transformation from a solo a freelance designer to becoming a design studio.<br>He is an experienced designer who defines himself as branding, social media and illustration specialist.<br>The goal was showcasing as much work as possible in a fully screen grid with high quality images.<br>2018 - Design: Alberto Dominguez.`
        },
        {
          __typename: 'Project',
          title: 'VC Community',
          external: false,
          externalLink: '',
          slug: 'vc-community',
          image: '/images/covers/vc-community.jpg',
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
          abstract: `Creation of the new concept for one of ESADE's branches. This site is designed to host a very complex and flexible navigation architecture as it is ment to act as the base structure for the variety of programmes that the university is offering. The main goal was increasing the conversion, mesured in the number of brochure downloads and increasing the leads to their executive programmes and offering a modular flexibility.`
        },
        {
          __typename: 'Project',
          title: 'Finca Mas Solers',
          external: true,
          externalLink: 'https://www.fincamassolers.com',
          image: '/images/covers/finca-mas-solers.jpg',
          order: '7',
          slug: '',
          abstract: `This project aimed to create a space that represented the spectacularity of this venue. Finca Mas Solers is a space that hosts from high class weddings to congresses and whichs is defined by the elegance of it's decoration and the finness of it's old and curated spaces.`
        }
      ]
    }
  }
};

export default data;

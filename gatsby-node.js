const path = require(`path`);
const { createFilePath } = require(`gatsby-source-filesystem`);

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const projectTemplate = path.resolve(`./src/templates/project.js`);
  const result = await graphql(
    `
      {
        allContentfulProject {
          edges {
            node {
              slug
            }
          }
        }
      }
    `
  );

  if (result.errors) {
    throw result.errors;
  }

  const projects = result.data.allContentfulProject.edges;

  projects.forEach(project => {
    createPage({
      path: project.node.slug,
      component: projectTemplate,
      context: {
        slug: project.node.slug,
      },
    });
  });
};

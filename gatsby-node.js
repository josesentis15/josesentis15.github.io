const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const project = path.resolve(`./src/templates/project.js`)
  const result = await graphql(
    `
      {
        allContentfulProject {
          edges {
            node {
              title
              slug
            }
          }
        }
      }
    `
  )

  if (result.errors) {
    throw result.errors
  }

  const projects = result.data.allContentfulProject.edges

  projects.forEach(project => {
    createPage({
      path: post.node.slug,
      component: project,
      context: {
        slug: post.node.slug
      },
    })
  })
}

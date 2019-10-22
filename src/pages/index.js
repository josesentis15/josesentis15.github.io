import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm } from "../utils/typography"

class Projects extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const projects = data.allContentfulProject.edges

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="Projects" />
        {projects.map(({ node }) => {
          const title = node.title || node.slug

          return (
            <article key={node.id}>
              <header>
                <h3
                  style={{
                    marginBottom: rhythm(1 / 4),
                  }}
                >
                  {node.external ? (
                    <a
                      href={node.externalLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ boxShadow: `none` }}
                    >
                      {title} External!
                    </a>
                  ) : (
                    <Link style={{ boxShadow: `none` }} to={node.slug}>
                      {title}
                    </Link>
                  )}
                </h3>
              </header>
              <section>
                <p>{node.abstract.abstract}</p>
              </section>
            </article>
          )
        })}
      </Layout>
    )
  }
}

export default Projects

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allContentfulProject(sort: { fields: order }) {
      edges {
        node {
          title
          external
          externalLink
          slug
          image {
            fluid {
              src
            }
          }
          id
          abstract {
            abstract
          }
        }
      }
    }
  }
`

import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm, scale } from "../utils/typography"

class ProjectTemplate extends React.Component {
  render() {
    const post = this.props.data.contentfulProject
    const siteTitle = this.props.data.site.siteMetadata.title

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title={post.title} description={post.abstract.abstract} />
        <article>
          <header>
            <h1
              style={{
                marginTop: rhythm(1),
                marginBottom: 0,
              }}
            >
              {post.title}
            </h1>
            <p
              style={{
                ...scale(-1 / 5),
                display: `block`,
                marginBottom: rhythm(1),
              }}
            >
              {post.abstract.abstract}
            </p>
          </header>
          <section dangerouslySetInnerHTML={{ __html: post.content.childContentfulRichText.html }} />
          <hr
            style={{
              marginBottom: rhythm(1),
            }}
          />
        </article>
      </Layout>
    )
  }
}

export default ProjectTemplate

export const pageQuery = graphql`
  query ProjectBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    contentfulProject( slug: { eq: $slug }) {
      title
      slug
      image {
        fluid {
          src
        }
      }
      content {
        childContentfulRichText {
          html
        }
      }
      abstract {
        abstract
      }
    }
  }
`

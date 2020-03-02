import React from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';

import ExternalLink from '../components/externalLink';
import Layout, { Wrapper } from '../components/layout';
import SEO from '../components/seo';

class Home extends React.Component {
  render() {
    const {
      github,
      linkedin,
      instagram,
      email
    } = this.props.data.site.siteMetadata.social;
    const page = this.props.data.allContentfulBasicPage.edges[0].node;

    return (
      <Layout location={this.props.location}>
        <Wrapper>
          <SEO />
          <div>
            <Img fluid={page.image.fluid} />
            <div>
              <div
                dangerouslySetInnerHTML={{
                  __html: page.content.childContentfulRichText.html.replace('%link', email),
                }}
              />
              <div>
                <ExternalLink to={github} text="GitHub" />
                <ExternalLink to={linkedin} text="Linkedin" />
                <ExternalLink to={instagram} text="Instagram" />
              </div>
            </div>
          </div>
        </Wrapper>
      </Layout>
    );
  }
}

export default Home;

const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        social {
          github
          linkedin
          instagram
          email
        }
      }
    }
    allContentfulBasicPage(filter: { title: { eq: "About" } }) {
      edges {
        node {
          content {
            childContentfulRichText {
              html
            }
          }
          image {
            fluid {
              ...GatsbyContentfulFluid
            }
          }
        }
      }
    }
  }
`;

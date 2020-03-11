import React from 'react';
import { graphql, StaticQuery } from 'gatsby';
import Img from 'gatsby-image';

import ExternalLink from '../externalLink';

class Profile extends React.Component {
  render() {
    return (
      <StaticQuery
        query={componentQuery}
        render={({ site: { siteMetadata }, allContentfulBasicPage: { edges } }) => {
          const {
            github,
            linkedin,
            instagram,
            email
          } = siteMetadata.social;
          const { node } = edges[0];

          return (
            <>
              <Img fluid={node.image.fluid} />
              <div>
                <div
                  dangerouslySetInnerHTML={{
                    __html: node.content.childContentfulRichText.html.replace('%link', email),
                  }}
                />
                <div>
                  <ExternalLink to={github} text="GitHub" />
                  <ExternalLink to={linkedin} text="Linkedin" />
                  <ExternalLink to={instagram} text="Instagram" />
                </div>
              </div>
            </>
          );
        }}
      />
    );
  }
}

export default Profile;

export const componentQuery = graphql`
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

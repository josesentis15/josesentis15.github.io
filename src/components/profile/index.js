import React from 'react';
import { graphql, StaticQuery } from 'gatsby';
import Img from 'gatsby-background-image';

import ExternalLink from '../externalLink';

import ProfileWrapper from './styles';

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
            <ProfileWrapper>
              <Img className="background-img" fluid={node.image.fluid} />
              <div className="p-big">
                <div
                  dangerouslySetInnerHTML={{
                    __html: node.content.childContentfulRichText.html.replace('%link', email),
                  }}
                />
                <div className="social">
                  <ExternalLink className="link" to={github}>GitHub</ExternalLink>
                  <ExternalLink className="link" to={linkedin}>Linkedin</ExternalLink>
                  <ExternalLink className="link" to={instagram}>Instagram</ExternalLink>
                </div>
              </div>
            </ProfileWrapper>
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

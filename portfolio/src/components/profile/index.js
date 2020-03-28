import React from 'react';
import { Query } from "react-apollo";

import ProfileWrapper from './styles';
import GET_PROFILE from './queries';

class Profile extends React.Component {
  render() {
    return (
      <Query query={GET_PROFILE}>
        {({ loading, data }) => {
          const {
            github,
            linkedin,
            instagram,
            email
          } = data.social;
          // const { node } = edges[0];

          if (loading) return;

          return (
            <ProfileWrapper>
              {/* <Img className="background-img" fluid={node.image.fluid} /> */}
              <div className="p-big">
                {/* <div
                  dangerouslySetInnerHTML={{
                    __html: node.content.childContentfulRichText.html.replace('%link', email),
                  }}
                /> */}
                <div className="social">
                  <a
                    className="link"
                    href={github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub
                  </a>
                  <a
                    className="link"
                    href={linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Linkedin
                  </a>
                  <a
                    className="link"
                    href={instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Instagram
                  </a>
                </div>
              </div>
            </ProfileWrapper>
          );
        }}
      </Query>
    );
  }
}

export default Profile;

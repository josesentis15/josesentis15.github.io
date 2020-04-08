import React from 'react';
import { Query } from "react-apollo";

// import ThreeImage from '../threeImage';
import BackgroundImage from '../backgroundImage';

import ProfileWrapper from './styles';
import GET_PROFILE from './queries';

class Profile extends React.Component {
  render() {
    return (
      <Query query={GET_PROFILE}>
        {({ loading, error, data }) => {
          const {
            social: {
              github,
              linkedin,
              instagram,
              email
            },
            pages: {
              about: {
                content,
                image
              }
            }
          } = data;

          if (loading) return(<h1>Loading...</h1>);

          return (
            <ProfileWrapper>
              <div className="p-big">
                <div
                  dangerouslySetInnerHTML={{
                    __html: content.replace('%link', email)
                  }}
                />
                <div className="social">
                  <a
                    className="link--bg"
                    href={github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub
                  </a>
                  <a
                    className="link--bg"
                    href={linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Linkedin
                  </a>
                  <a
                    className="link--bg"
                    href={instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Instagram
                  </a>
                </div>
              </div>
              {/* <ThreeImage src={image} /> */}
              <BackgroundImage src={image} />
            </ProfileWrapper>
          );
        }}
      </Query>
    );
  }
}

export default Profile;

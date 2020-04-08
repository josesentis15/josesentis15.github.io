import React from 'react';
import { Query } from "react-apollo";
import forEach from '@runroom/purejs/lib/forEach';

// import ThreeImage from '../threeImage';
import BackgroundImage from '../backgroundImage';
import { toggleCursor } from '../cursor';

import ProfileWrapper from './styles';
import GET_PROFILE from './queries';

class Profile extends React.Component {
  // componentDidMount() {
  //   this.triggerHover();
  // }
  // componentWillUnmount() {
  //   this.removeHover();
  // }

  // triggerHover = () => {
  //   const links = this._text.querySelectorAll('a');

  //   console.log(links);

  //   forEach(links, item => {
  //     item.addEventListener('mouseover', toggleCursor);
  //     item.addEventListener('mouseleave', toggleCursor);
  //   });
  // }

  // removeHover = () => {
  //   const links = this._text.querySelectorAll('a');

  //   forEach(links, item => {
  //     item.removeEventListener('mouseover', toggleCursor, false);
  //     item.removeEventListener('mouseleave', toggleCursor, false);
  //   });
  // }

  render() {
    return (
      <Query query={GET_PROFILE}>
        {({ data }) => {
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

          this.triggerHover();

          return (
            <ProfileWrapper>
              <div className="p-big">
                <div
                  ref={ref => this._text = ref}
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
                    onMouseEnter={() => toggleCursor()}
                    onMouseLeave={() => toggleCursor()}
                  >
                    GitHub
                  </a>
                  <a
                    className="link--bg"
                    href={linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    onMouseEnter={() => toggleCursor()}
                    onMouseLeave={() => toggleCursor()}
                  >
                    Linkedin
                  </a>
                  <a
                    className="link--bg"
                    href={instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    onMouseEnter={() => toggleCursor()}
                    onMouseLeave={() => toggleCursor()}
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

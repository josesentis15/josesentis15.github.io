import React from 'react';
// import { Query } from "react-apollo";
import forEach from '@runroom/purejs/lib/forEach';

// import ThreeImage from '../threeImage';
import withQuery from '../../hoc/withQuery';
import BackgroundImage from '../backgroundImage';
import { toggleCursor } from '../cursor';

import ProfileWrapper from './styles';
import GET_PROFILE from './queries';

class Profile extends React.Component {
  componentDidMount() {
    this.triggerHover();
  }

  componentWillUnmount() {
    this.removeHover();
  }

  triggerHover = () => {
    const links = this._text.querySelectorAll('a');

    forEach(links, item => {
      item.addEventListener('mouseover', () => { toggleCursor(); });
      item.addEventListener('mouseleave', () => { toggleCursor(); });
    });
  }

  removeHover = () => {
    const links = this._text.querySelectorAll('a');

    forEach(links, item => {
      item.removeEventListener('mouseover', () => { toggleCursor(); }, false);
      item.removeEventListener('mouseleave', () => { toggleCursor(); }, false);
    });
  }

  render() {
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
    } = this.props.data;

    return (
      <ProfileWrapper id="profile-wrapper" ref={ref => this._text = ref}>
        {/* <ThreeImage src={image} /> */}
        <div className="profile-image"><BackgroundImage src={image} /></div>
        <div className="content">
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
            <p className="thanks">
              Designed by&nbsp;
              <a
                href="http://cris-garcia.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Cris García
              </a>.
            </p>
          </div>
        </div>
      </ProfileWrapper>
    );
  }
}

export default withQuery(Profile, GET_PROFILE);

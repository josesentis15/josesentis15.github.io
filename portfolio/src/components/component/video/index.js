import React from 'react';

import { Wysiwyg } from '../styles';

class Text extends React.Component {
  render() {
    const {
      data: { src, poster },
    } = this.props;

    return (
      <Wysiwyg>
        <video autoPlay loop playsInline poster={poster} muted>
          <source src={src} type="video/mp4" />
          <span>There's no suppor for video. Please update your browser.</span>
        </video>
      </Wysiwyg>
    );
  }
}

export default Text;

import React from 'react';

import { Wysiwyg } from '../styles';

class Image extends React.Component {
  componentDidMount() {}

  render() {
    const {
      data: { src }
    } = this.props;

    return (
      <Wysiwyg>
        <img src={src} alt="Supporting the current project" />
      </Wysiwyg>
    );
  }
}

export default Image;

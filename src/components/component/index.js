import React from 'react';
import LazyLoad from 'react-lazyload';

import Image from './image';
import Text from './text';
import Video from './video';

class Component extends React.Component {
  render() {
    const {
      data: { type }
    } = this.props;

    const componentType = {
      image: Image,
      text: Text,
      video: Video
    };

    const Component = componentType[type];

    return (
      <LazyLoad>
        <Component {...this.props} />
      </LazyLoad>
    );
  }
}

export default Component;

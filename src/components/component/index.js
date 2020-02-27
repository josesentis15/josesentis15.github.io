import React from 'react';
import LazyLoad from 'react-lazyload';

import Image from './image';
import Text from './text';

class Component extends React.Component {
  render() {
    const {
      data: { type }
    } = this.props;

    const componentType = {
      image: Image,
      text: Text
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

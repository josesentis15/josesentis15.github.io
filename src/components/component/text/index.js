import React from 'react';

import { Wysiwyg } from '../styles';

class Text extends React.Component {
  render() {
    const {
      data: { text },
    } = this.props;

    return (
      <Wysiwyg>
        <p>{text}</p>
      </Wysiwyg>
    );
  }
}

export default Text;

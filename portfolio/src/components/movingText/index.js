import React from 'react';

import TextWrapper from './styles';

class movingText extends React.Component {
  render() {
    const { children } = this.props;

    return (
      <TextWrapper>
        <span>{children}</span>
      </TextWrapper>
    );
  }
}

export default movingText;

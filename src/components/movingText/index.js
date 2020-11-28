import React from 'react';

import TextWrapper from './styles';

class movingText extends React.PureComponent {
  render() {
    const { children, ...props } = this.props;

    return (
      <TextWrapper {...props}>
        <span>{children}</span>
      </TextWrapper>
    );
  }
}

export default movingText;

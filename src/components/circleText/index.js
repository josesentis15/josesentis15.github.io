import React from 'react';

import TextWrapper, { Character } from './styles';

class circleText extends React.PureComponent {
  render() {
    const { text } = this.props;
    const characters = text.split("");
    const degrees = 360 / characters.length;
    let tempDegrees = 0;

    return (
      <TextWrapper>
        <p>
          {characters.map(char => {
            tempDegrees += degrees;

            return <Character rotate={tempDegrees}>{char}</Character>;
          })}
        </p>
      </TextWrapper>
    );
  }
}

export default circleText;

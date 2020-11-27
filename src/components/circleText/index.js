import React from 'react';

import TextWrapper, { Character } from './styles';

const circleText = ({ text, ...props }) => {
  const characters = text.split("");
  const degrees = 360 / characters.length;
  let tempDegrees = 0;

  console.log(props);

  return (
    <TextWrapper {...props}>
      <p>
        {characters.map(char => {
          tempDegrees += degrees;

          return <Character key={`circle-${char}`} rotate={tempDegrees}>{char}</Character>;
        })}
      </p>
    </TextWrapper>
  );
}

export default circleText;

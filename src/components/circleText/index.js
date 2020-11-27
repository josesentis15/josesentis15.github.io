import React from 'react';
import { TweenMax } from 'gsap';
import TextWrapper, { Character } from './styles';

class circleText extends React.Component {
  state = {
    scrollSpeed: 0
  }

  componentDidMount() {
    this.animateScroll();
  };

  animateScroll = () => {
    TweenMax.to(this.circleRef, 10, {
      rotation: '+=360_cw',
      repeat: 1
    });
  };

  render() {
    const { text, ...props } = this.props;
    const characters = text.split("");
    const degrees = 360 / characters.length;
    let tempDegrees = 0;

    return (
      <TextWrapper {...props} ref={ref => this.circleRef = ref}>
        <p>
          {characters.map(char => {
            tempDegrees += degrees;

            return <Character key={`circle-${char}`} rotate={tempDegrees}>{char}</Character>;
          })}
        </p>
      </TextWrapper>
    );
  }
}

export default circleText;

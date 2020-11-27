import React from 'react';
import { TweenMax } from 'gsap';
import TextWrapper, { Character } from './styles';

class circleText extends React.Component {
  state = {
    scrollSpeed: 8
  }

  componentDidMount() {
    this.rotateElement();

    // window.addEventListener('scroll', this.animateScroll());
  };

  // animateScroll = () => {
    // this.circleRef.classList.add('scrolling');
  // };

  rotateElement = () => {
    TweenMax.to(this.circleRef, {
      duration: this.state.speed,
      rotate: 360,
      repeat: -1,
      ease: "none"
    });
  }

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

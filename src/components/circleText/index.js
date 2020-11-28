import React from 'react';
import { TweenMax } from 'gsap';

import withScroll from '../../hoc/withScroll';
import TextWrapper, { Character } from './styles';

class circleText extends React.Component {
  // _mainElement;
  state = {
    scrollSpeed: 8
  }

  componentDidMount() {
    this.rotateElement();

    // this._mainElement = document.getElementsByTagName('main')[0];

    // this._mainElement.addEventListener('scroll', this.animateScroll);
  };

  // animateScroll = () => {
  //   // this.circleRef.classList.add('scrolling');
  //   console.log('scrolling...2');
  //   // console.log(this._mainElement.scrollTop);
  // };

  rotateElement = () => {
    TweenMax.to(this._circleRef, {
      duration: this.state.scrollSpeed,
      rotate: 360,
      repeat: -1,
      ease: "none"
    });
  }

  render() {
    const { text, scrollTop, ...props } = this.props;
    const characters = text.split("");
    const degrees = 360 / characters.length;
    let tempDegrees = 0;

    console.log('----------Scroll TOP: ', scrollTop);

    return (
      <TextWrapper {...props} ref={ref => this._circleRef = ref}>
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

export default withScroll(circleText);

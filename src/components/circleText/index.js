import React from 'react';
import { TweenMax } from 'gsap';

import withScroll from '../../hoc/withScroll';
import TextWrapper, { Character } from './styles';

class circleText extends React.Component {
  _headerElement;
  state = {
    scrollSpeed: 8
  }

  componentDidMount() {
    this.rotateElement();

    this._headerElement = document.getElementById('moving-text');
  };

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
    let textClass = '';

    console.log('----------Scroll TOP: ', scrollTop);
    console.log(this._headerElement);

    if (this._headerElement) {
      console.log('----------Inner height: ', this._headerElement.innerHeight);
    }

    if (this._headerElement && scrollTop > this._headerElement.offsetHeight) {
      textClass = 'visible';
      console.log('----------Inner height: ', this._headerElement.innerHeight);
    }

    return (
      <TextWrapper className={textClass} ref={ref => this._circleRef = ref} {...props}>
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

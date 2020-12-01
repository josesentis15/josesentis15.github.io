import React from 'react';
import { TweenMax } from 'gsap';

import withScroll from '../../hoc/withScroll';
import TextWrapper, { Character } from './styles';

class circleText extends React.Component {
  _headerElement;
  _introElement;
  _minScrollSpeed = 8;
  _maxScrollSpeed = 4;
  _tween;

  componentDidMount() {
    this.rotateElement();

    this._headerElement = document.getElementById('moving-text');
    this._introElement = document.getElementById('intro-text');
  };

  rotateElement = () => {
    const scrollSpeed = this.props.isScrolling ? this._maxScrollSpeed : this._minScrollSpeed;

    console.log('IS ROTATING: ', scrollSpeed);

    this._tween = TweenMax.to(this._circleRef, {
      duration: this._maxScrollSpeed,
      rotate: 360,
      repeat: -1,
      ease: "none"
    });
  }

  shouldShow = () => {
    if (this._headerElement && this._introElement) {
      if (this.props.scrollTop > (this._headerElement.offsetHeight + this._introElement.offsetHeight)) return true;
    }

    return false;
  }

  render() {
    const { text, scrollTop, ...props } = this.props;
    const characters = text.split("");
    const degrees = 360 / characters.length;
    let tempDegrees = 0;
    let textClass = '';

    if (this.shouldShow()) textClass = 'visible';
    this.rotateElement();

     console.log('Render!');

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

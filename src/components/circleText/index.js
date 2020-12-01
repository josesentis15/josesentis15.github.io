import React from 'react';
import { TweenMax } from 'gsap';

import withScroll from '../../hoc/withScroll';
import TextWrapper, { Character } from './styles';

class circleText extends React.Component {
  _headerElement;
  _tween;
  state = {
    hover: false
  }

  componentDidMount() {
    this.rotateElement();

    this._headerElement = document.getElementById('moving-text');
  };

  rotateElement = () => {
    this._tween = TweenMax.to(this._circleRef, {
      duration: 8,
      rotate: 360,
      repeat: -1,
      ease: "none"
    });
  }

  shouldShow = () => {
    if (this._headerElement && this._introElement) {
      if (this.props.scrollTop > this._headerElement.offsetHeight) return true;
    }

    return false;
  }

  render() {
    const { text, onMouseEnter, onMouseLeave, ...props } = this.props;
    const characters = text.split("");
    const degrees = 360 / characters.length;
    let tempDegrees = 0;
    let textClass = '';

    if (this.shouldShow()) textClass = 'visible';
    if (this.state.hover) textClass += 'hover';
    return (
      <TextWrapper
        className={textClass}
        onMouseEnter={() => {
          console.log('Mouse enter');
          this.setState({ hover: true });
          onMouseEnter();
        }}
        onMouseLeave={() => {
          console.log('Mouse leave');
          this.setState({ hover: false });
          onMouseLeave();
        }}
        ref={ref => this._circleRef = ref}
        {...props}
      >
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

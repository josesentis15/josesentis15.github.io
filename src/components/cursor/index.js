import React from 'react';
import { Power2, TweenLite } from 'gsap';

import withLoader from '../../hoc/withLoader';

import Circle from './styles';

class Cursor extends React.PureComponent {
  componentDidMount() {
    document.addEventListener('mousemove', this.handleMouseMove);
  }

  componentWillUnmount() {
    document.removeEventListener('mousemove', this.handleMouseMove);
  }

  handleMouseMove = event => {
    if (!this._cursor.classList.contains('moved')) this._cursor.classList.add('moved');

    TweenLite.to(this._cursor, 0.3, {
      left: `${event.clientX}px`,
      top: `${event.clientY}px`,
      ease: Power2.easeOut
    });
  }

  render() {
    const { loaded } = this.props;

    return loaded && (
      <Circle ref={ref => this._cursor = ref} />
    );
  }
}

export default withLoader(Cursor);

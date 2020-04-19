import React from 'react';
import { Power2, TweenLite } from 'gsap';

import withLoader from '../../hoc/withLoader';

import Circle from './styles';

const toggleCursor = (force = false) => {
  const cursor = document.getElementById('cursor');

  if (force || cursor.classList.contains('hover')) {
    cursor.classList.remove('hover');
  } else {
    cursor.classList.add('hover');
  }
}

class Cursor extends React.PureComponent {
  componentDidMount() {
    document.addEventListener('mousemove', this.handleMouseMove);

    TweenLite.to("body", 5, {backgroundColor:"red", scale:0.5});
  }

  componentWillUnmount() {
    document.removeEventListener('mousemove', this.handleMouseMove);
  }

  handleMouseMove = event => {
    if (!this.cursor.classList.contains('moved')) this.cursor.classList.add('moved');

    console.log(this.cursor, event.clientX, event.clientY);

    TweenLite.to(this.cursor, 0.3, {
      left: `${event.clientX}px`,
      top: `${event.clientY}px`,
      ease: Power2.easeOut
    });
  }

  render() {
    const { loaded } = this.props;

    return loaded && (
      <Circle id="cursor" ref={ref => this.cursor = ref} />
    );
  }
}

export default withLoader(Cursor);
export { toggleCursor };

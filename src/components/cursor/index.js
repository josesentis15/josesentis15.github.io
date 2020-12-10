import React from 'react';
import { TweenMax } from 'gsap';

import withLoader from '../../hoc/withLoader';

import Circle from './styles';

const toggleCursor = (cursorClass = '', force = false) => {
  const cursor = document.getElementById('cursor');
  const toggleClass = cursorClass ? cursorClass : 'hover';

  if (force || cursor.classList.contains(toggleClass)) {
    cursor.classList.remove(toggleClass);
  } else {
    cursor.classList.add(toggleClass);
  }
}

class Cursor extends React.PureComponent {
  componentDidMount() {
    document.addEventListener('mousemove', this.handleMouseMove);
  }

  componentWillUnmount() {
    document.removeEventListener('mousemove', this.handleMouseMove);
  }

  handleMouseMove = event => {
    if (!this.cursor.classList.contains('moved')) this.cursor.classList.add('moved');

    TweenMax.to(this.cursor, 0.4, {
      left: `${event.clientX}px`,
      top: `${event.clientY}px`,
      ease: "Power3.easeOut"
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

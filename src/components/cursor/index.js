import React from 'react';
import { TweenMax } from 'gsap';

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
  }

  componentWillUnmount() {
    document.removeEventListener('mousemove', this.handleMouseMove);
  }

  handleMouseMove = event => {
    if (!this.cursor.classList.contains('moved')) this.cursor.classList.add('moved');

    TweenMax.to(this.cursor, 0.3, {
      left: `${event.clientX}px`,
      top: `${event.clientY}px`,
      ease: "Power2.easeOut"
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

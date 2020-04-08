import React from 'react';
import { Power2, TweenLite } from 'gsap';

import withLoader from '../../hoc/withLoader';

import Circle from './styles';

class Cursor extends React.PureComponent {
  componentDidMount() {
    this.addEventListeners();
  }

  componentWillUnmount() {
    this.removeEventListeners();
  }

  addEventListeners = () => {
    const links = document.querySelectorAll('a');
    const buttons = document.querySelectorAll('button');

    console.log([...links, ...buttons]);

    [...links, ...buttons].map(item => {
      item.addEventListener('mouseover', () => { this._cursor.classList.add(`hover`); }, false);
      item.addEventListener('mouseleave', () => { this._cursor.classList.remove(`hover`); }, false);
    });

    document.addEventListener('mousemove', this.handleMouseMove);
  }

  removeEventListeners = () => {
    const links = document.querySelectorAll('a');
    const buttons = document.querySelectorAll('button');

    [...links, ...buttons].map(item => {
      item.removeEventListener('mouseover', () => { this._cursor.classList.add(`hover`); }, false);
      item.removeEventListener('mouseleave', () => { this._cursor.classList.remove(`hover`); }, false);
    });

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

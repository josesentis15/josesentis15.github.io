import React from 'react';
import moment from 'moment';

import withScroll from '../../hoc/withScroll';
import BackgroundImage from '../backgroundImage';
import { toggleCursor } from '../cursor';

import { ExerciceStyled } from './styles';
import { playground } from '../../../package.json';

class Exercice extends React.PureComponent {
  _main;
  state = {
    visible: true
  }

  componentDidMount() {
    this._main = document.getElementsByTagName('main')[0];
    this._main.addEventListener('scroll', this.animateProjects);
  }

  componentWillUnmount() {
    this._main.addEventListener('scroll', this.animateProjects);
  }

  animateProjects = () => {
    console.log('scrolling...', this.props.scrollTop);
  }

  render() {
    const {
      abstract,
      link,
      title,
      image,
      date
    } = this.props;
    const { visible } = this.state;
    const formattedDate = moment(date).format("MM.YYYY");

    return (
      <ExerciceStyled>
        {visible && <BackgroundImage src={`${playground}${image}`} alt={title} scaleEffect={true} />}
        <div className="content">
          <div className="content-text">
            <h2 className="p">{title}</h2>
            <p className="label">Posted: {formattedDate}</p>
            <p>{abstract}</p>
            <a
              className="external"
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={() => toggleCursor()}
              onMouseLeave={() => toggleCursor()}
            >
              Explore
              </a>
          </div>
        </div>
      </ExerciceStyled>
    );
  };
}


export default withScroll(Exercice);

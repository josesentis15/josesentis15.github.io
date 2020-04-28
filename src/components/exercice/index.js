import React from 'react';
import moment from 'moment';

import BackgroundImage from '../backgroundImage';
import { toggleCursor } from '../cursor';

import { playground } from '../../../package.json';
import ExerciceStyled from './styles';

class Exercice extends React.PureComponent {
  render() {
    const {
      exercice: {
        abstract,
        link,
        title,
        image,
        date
      }
    } = this.props;
    const formattedDate = moment(date).format("MM.YYYY");

    return (
      <ExerciceStyled>
        <BackgroundImage src={`${playground}${image}`} alt={title} scaleEffect={true} />
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
  }
}

export default Exercice;

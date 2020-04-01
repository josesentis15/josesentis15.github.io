import React from 'react';
import moment from 'moment';

import BackgroundImage from '../backgroundImage';

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
        <BackgroundImage src={image} />
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

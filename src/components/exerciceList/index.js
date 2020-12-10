import React from 'react';
import moment from 'moment';

import BackgroundImage from '../backgroundImage';
import { toggleCursor } from '../cursor';

import { playground } from '../../../package.json';
import ExerciceListStyled, { ExerciceStyled } from './styles';

const Exercice = ({ exercice }) => {
  const {
    abstract,
    link,
    title,
    image,
    date
  } = exercice;
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

class ExerciceList extends React.PureComponent {
  render() {
    const { exercices } = this.props;

    return (
      <ExerciceListStyled>
        {exercices.map(exercice => (
          <Exercice
            key={exercice.title.replace(' ', Math.random())}
            exercice={exercice}
          />
        ))}
      </ExerciceListStyled>
    );
  }
}

export default ExerciceList;

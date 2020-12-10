import React from 'react';

import Exercice from './exercice';

import ExerciceListStyled from './styles';

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

import React from 'react';
import Img from 'gatsby-background-image';
import striptags from 'striptags';

import ExternalLink from '../externalLink';

import ExerciceStyled from './styles';

class Exercice extends React.Component {
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

    return (
      <ExerciceStyled>
        <h2 className="exercice__title title2">{title}</h2>
        <div className="exercice__content">
          <Img className="exercice__image background-img" fluid={image.fluid} />
          <p className="exercice__text">{abstract.abstract}</p>
          <p className="p-small">{date}</p>
          <ExternalLink className="external" to={link}>Explore</ExternalLink>
        </div>
      </ExerciceStyled>
    );
  }
}

export default Exercice;

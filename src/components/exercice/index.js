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
        image
      }
    } = this.props;

    return (
      <ExerciceStyled>
        <h2 className="project__title title2">{title}</h2>
        <div className="project__content">
          <Img className="project__image background-img" fluid={image.fluid} />
          <p className="project__text">{abstract.abstract}</p>
          <ExternalLink className="external" to={link}>Go to site</ExternalLink>
        </div>
      </ExerciceStyled>
    );
  }
}

export default Exercice;

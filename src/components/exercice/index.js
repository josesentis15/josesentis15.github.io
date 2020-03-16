import React from 'react';
import Img from 'gatsby-background-image';

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
        <Img className="background-img" fluid={image.fluid} />
        <div className="content">
          <div>
            <h2 className="p">{title}</h2>
            <p>{abstract.abstract}</p>
            <p className="p-small">{date}</p>
            <ExternalLink className="external" to={link}>Explore</ExternalLink>
          </div>
        </div>
      </ExerciceStyled>
    );
  }
}

export default Exercice;

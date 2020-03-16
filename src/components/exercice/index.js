import React from 'react';
import Img from 'gatsby-background-image';
import moment from 'moment';

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
    const formattedDate = moment(date).format("MM.YYYY");

    return (
      <ExerciceStyled>
        <Img className="background-img" fluid={image.fluid} />
        <div className="content">
          <div>
            <h2 className="p">{title}</h2>
            <p className="label">Posted: {formattedDate}</p>
            <p>{abstract.abstract}</p>
            <ExternalLink className="external" to={link}>Explore</ExternalLink>
          </div>
        </div>
      </ExerciceStyled>
    );
  }
}

export default Exercice;

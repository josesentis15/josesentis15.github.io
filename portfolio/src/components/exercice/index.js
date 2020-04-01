import React from 'react';
import moment from 'moment'

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

    console.log(date, image);

    return (
      <ExerciceStyled>
        <div className="background-img" style={{ 'backgroundImage' : `url(${image})`}}></div>
        <div className="content">
          <div className="content-text">
            <h2 className="p">{title}</h2>
            <p className="label">Posted: {formattedDate}</p>
            <p>{abstract}</p>
            {/* <ExternalLink className="external" to={link}>Explore</ExternalLink> */}
          </div>
        </div>
      </ExerciceStyled>
    );
  }
}

export default Exercice;

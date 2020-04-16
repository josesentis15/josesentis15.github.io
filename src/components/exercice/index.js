import React from 'react';
import moment from 'moment';

import BackgroundImage from '../backgroundImage';
import { toggleCursor } from '../cursor';

import ExerciceStyled from './styles';

class Exercice extends React.PureComponent {
  componentDidMount() {
    console.log('Mounted...')

    window.addEventListener('scroll', () => {
      console.log('Scrolling...', this.props.title);
    });
  }

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
        <BackgroundImage src={image} alt={title} />
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

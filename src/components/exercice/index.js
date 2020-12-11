import React from 'react';
import moment from 'moment';

import withScroll from '../../hocs/withScroll';
import BackgroundImage from '../backgroundImage';
import { toggleCursor } from '../cursor';

import ExerciceStyled from './styles';
import { playground } from '../../../package.json';

class Exercice extends React.PureComponent {
  state = {
    visible: true
  }

  // animateProjects = () => {
  //   console.log('scrolling...', this.props.scrollTop);

  //   if (!this.state.visible && this.props.scrollTop > 500) {
  //     this.props.cancelScroll();
  //     this.setState({ visible: true });
  //   }
  // }

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
    const { visible } = this.state;
    const formattedDate = moment(date).format("MM.YYYY");

    return (
      <ExerciceStyled>
        {visible && <BackgroundImage src={`${playground}${image}`} alt={title} scaleEffect={true} />}
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
  };
}

export default Exercice;
// export default withScroll(Exercice);

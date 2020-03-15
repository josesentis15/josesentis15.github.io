import React from 'react';
import { Link } from 'gatsby';
import Img from 'gatsby-background-image';

// import ExternalLink from '../externalLink';

import ExerciceStyled from './styles';

class Exercice extends React.Component {
  render() {
    const {
      exercice: {
        abstract,
        link,
        title,
        image
      },
      onHover,
      onClick,
      hoverProject,
      clickedProject
    } = this.props;
    const title = this.props.project.title || slug;
    const className = `
      project
      ${hoverProject === title ? ' hover' : hoverProject !== '' ? 'no-hover' : ''}
      ${clickedProject === title ? ' active' : clickedProject !== '' ? 'no-active' : ''}
    `;

    return (
      <ExerciceStyled
        className={`${className}`}
        onClick={() => {
          console.log(className);

          if (clickedProject !== title) onClick(title);
          else onClick('');
        }}
        onMouseEnter={() => onHover(title)}
        onMouseLeave={() => onHover()}
      >
        <h2 className="project__title title2">
          <span className="label">
            {order.toString().length === 1 ? '0' : ''}
            {order}.
            </span>
          {title}
        </h2>
        <div className="project__content">
          <Img className="project__image background-img" fluid={image.fluid} />
          <p className="project__text">{abstract.abstract}</p>
          {external ? (
            <ExternalLink className="external" to={externalLink}>Go to site</ExternalLink>
          ) : (
              <Link to={slug} onClick={e => e.stopPropagation()}>View project</Link>
            )}
        </div>
      </ExerciceStyled>
    );
  }
}

export default Exercice;

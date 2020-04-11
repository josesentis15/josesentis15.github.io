import React from 'react';
import AnimateHeight from 'react-animate-height';
import { Link } from 'react-router-dom';

import BackgroundImage from '../backgroundImage';

import ProjectStyled from './styles';

class Project extends React.Component {
  render() {
    const {
      project: {
        abstract,
        external,
        externalLink,
        slug,
        order,
        image
      },
      onHover,
      onClick,
      hoverProject,
      clickedProject
    } = this.props;
    const title = this.props.project.title || slug;
    const { project } = this.props;
    const className = `
      project
      ${hoverProject === project ? ' hover' : hoverProject !== '' ? 'no-hover' : ''}
      ${clickedProject === project ? ' active' : clickedProject !== '' ? 'no-active' : ''}
    `;

    console.log(this._projectContent);

    return (
      <ProjectStyled
        className={`${className}`}
        onClick={() => {
          if (clickedProject !== project) onClick(project);
          else onClick();
        }}
        onMouseEnter={() => onHover(project)}
        onMouseLeave={() => onHover()}
      >
        <h2 className="project__title title2">
          <span className="label">
            {order.toString().length === 1 ? '0' : ''}
            {order}.
            </span>
          {title}
        </h2>
        <AnimateHeight
          duration={300}
          height={hoverProject === project ? 'auto' : 0}
        >
          <div className={`
            project__content
            ${hoverProject === project ? ' hover' : hoverProject !== '' ? 'no-hover' : ''}
            ${clickedProject === project ? ' active' : clickedProject !== '' ? 'no-active' : ''}
          `}>
            <BackgroundImage src={image} className="project__image" />
            <p className="project__text">{abstract}</p>
            {external ? (
              <a
                className="external"
                href={externalLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                Go to site
              </a>
            ) : (
                <Link to={`projects/${slug}`} onClick={e => e.stopPropagation()}>View project</Link>
              )}
          </div>
        </AnimateHeight>
      </ProjectStyled>
    );
  }
}

export default Project;

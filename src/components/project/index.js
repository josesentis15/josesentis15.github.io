import React from 'react';
import AnimateHeight from 'react-animate-height';
import { Link } from 'react-router-dom';

import { toggleCursor } from '../cursor';
import BackgroundImage from '../backgroundImage';

import ProjectStyled from './styles';

class Project extends React.PureComponent {
  state = {
    hover: false
  }

  componentDidMount() {
    this._projectImage = document.getElementById('project-image');
  }

  render() {
    const {
      project: {
        abstract,
        external,
        externalLink,
        slug,
        order,
        image
      }
    } = this.props;
    const title = this.props.project.title || slug;
    const { hover } = this.state;

    return (
      <ProjectStyled
        className={`project ${hover ? 'active' : ''}`}
        onMouseEnter={() => {
          this.setState({ hover: true });
          this._projectImage.style.backgroundImage = `url(${image})`;
          this._projectImage.parentNode.classList.add('is-hover');
          toggleCursor();
        }}
        onMouseLeave={() => {
          this.setState({ hover: false });
          toggleCursor();
          this._projectImage.style.backgroundImage = '';
          this._projectImage.parentNode.classList.remove('is-hover');
        }}
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
          height={hover ? 'auto' : 0}
          animateOpacity
        >
          <div className="project__content">
            <BackgroundImage src={image} className="project__image" />
            <p className="project__text" dangerouslySetInnerHTML={{ __html: abstract }} />
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

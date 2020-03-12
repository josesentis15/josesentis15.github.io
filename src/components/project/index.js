import React from 'react';
import { Link } from 'gatsby';
// import Img from 'gatsby-background-image';

import ExternalLink from '../../components/externalLink';

import ProjectStyled from './styles';

class Project extends React.Component {
  state = {
    active: false,
    hover: false
  };

  render() {
    const { active, hover } = this.state;
    const { project: { abstract, external, externalLink, slug, order } } = this.props;
    const title = this.props.project.title || slug;
    const className = `project ${active ? 'active' : ''} ${hover ? 'hover' : ''}`;

    return (
      <ProjectStyled
        className={`${className}`}
        onClick={() => {
          this.setState({ active: !this.state.active })
        }}
        onMouseEnter={() => {
          this.setState({ hover: true })
        }}
        onMouseLeave={() => {
          this.setState({ hover: false })
        }}
      >
        <h2 className="project__title title2">
          <span className="label">
            {order.toString().length === 1 ? '0' : ''}
            {order}.
            </span>
          {title}
        </h2>
        <div className="project__content">
          <p className="project__text">{abstract.abstract}</p>
          {external ? (
            <ExternalLink className="external" to={externalLink}>Go to site</ExternalLink>
          ) : (
              <Link to={slug} onClick={e => e.stopPropagation()}>View project</Link>
            )}
        </div>
      </ProjectStyled>
    );
  }
}

export default Project;

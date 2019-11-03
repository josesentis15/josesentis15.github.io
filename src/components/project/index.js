import React from 'react';
import { Link } from 'gatsby';
// import Img from 'gatsby-image';

import ExternalLink from '../../components/externalLink';

import ProjectStyled from './styles';

// const showProject = () => {};
// const hideProject = () => {};

const Project = ({ project, hover, onMouseOver, onMouseOut }) => {
  const { abstract, external, externalLink, slug, order } = project;
  const title = project.title || project.slug;
  const className = `project ${hover ? 'no-hover' : ''}`;

  return (
    <ProjectStyled
      className={className}
      onMouseEnter={e => onMouseOver(e)}
      onMouseLeave={e => onMouseOut(e)}
    >
      <h2 className="project__title title2">
        <span className="label">
          {order.toString().length === 1 ? '0' : ''}
          {order}.
        </span>
        {title}
      </h2>
      <p className="project__text">{abstract.abstract}</p>
      {external ? (
        <ExternalLink to={externalLink}>Go to site</ExternalLink>
      ) : (
        <Link to={slug}>View project</Link>
      )}
    </ProjectStyled>
  );
};

export default Project;

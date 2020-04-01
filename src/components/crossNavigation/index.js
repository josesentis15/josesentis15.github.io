import React from 'react';
import { Link } from 'react-router-dom';

import CrossNavigationStyled from './styles';

class CrossNavigation extends React.Component {
  render() {
    const { current, projectList } = this.props;


    return (
      <CrossNavigationStyled>
        {projectList.map(project => {
          const { external, externalLink, slug, order, title } = project;

          const content = (
            <h3>
              <span className="label">
                {order.toString().length === 1 ? '0' : ''}
                {order}.
                  </span>
              {title}
            </h3>
          );

          return (
            <li key={title.replace(' ', Math.random())}>
              {external ?
                (
                  <a
                    className="link"
                    href={externalLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {content}
                  </a>
                )
                :
                (
                  <Link to={`/${slug}`} className={`link ${slug === current ? 'active' : ''}`}>
                    {content}
                  </Link>
                )
              }
            </li>
          );
        })}
      </CrossNavigationStyled>
    );

  }
};

export default CrossNavigation;

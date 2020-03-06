import React from 'react';
import { Link, graphql, StaticQuery } from 'gatsby';

import CrossNavigationStyled from './styles';

class CrossNavigation extends React.Component {
  render() {
    const { current } = this.props;

    return (
      <StaticQuery
        query={componentQuery}
        render={({ allContentfulProject: { edges } }) => {
          return (
            <CrossNavigationStyled>
              {edges.map(({ node }) => {
                const { external, externalLink, slug, order, title, id } = node;

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
                  <li key={id}>
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
        }}
      />
    );
  }
};

export default CrossNavigation;

const componentQuery = graphql`
  query {
    allContentfulProject(sort: { fields: order }) {
      edges {
        node {
          title
          slug
          id
          order
          external
          externalLink
        }
      }
    }
  }
`;

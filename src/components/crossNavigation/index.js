import React from 'react';

class CrossNavigation extends React.Component {
  render() {
    const projects = data.allContentfulProject.edges;


    return (
      <ul>
        {projects.map(({ node }) => {
          const { external, externalLink, slug, order } = project;

          const LinkType = external ? ExternalLink : Link;
          const link = external ? externalLink : slug

          return (
            <li key={node.id}>
              <LinkType to={link}>
                <h3>
                  <span className="label">
                    {order.toString().length === 1 ? '0' : ''}
                    {order}.
                  </span>
                  {title}
                </h3>
              </LinkType>
            </li>
          );
        })}
      </ul>
    );
  }
};

export default CrossNavigation;

const pageQuery = graphql`
  query {
    allContentfulProject(sort: { fields: order }) {
      edges {
        node {
          title
          slug
          id
          order
        }
      }
    }
  }
`;

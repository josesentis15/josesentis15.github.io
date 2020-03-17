import React from 'react';
import { Link, graphql, StaticQuery } from 'gatsby';

import ExternalLink from '../externalLink';
import NavigationWrapper from './styles';

import routes from '../../utils/routes';

class Navigation extends React.Component {
  render() {
    return (
      <StaticQuery
        query={componentQuery}
        render={({ site: { siteMetadata } }) => {
          const {
            playground,
            projects,
            about
          } = siteMetadata.sections;

          return (
            <NavigationWrapper>
              <Link to={routes.projects} className="title link">{projects}</Link>
              <ExternalLink to={routes.playground} className="title link" icon={true}>{playground}</ExternalLink>
              <Link to={routes.about} className="title link" activeClassName="active">{about}</Link>
            </NavigationWrapper>
          );
        }}
      />
    );
  }
}

export default Navigation;

const componentQuery = graphql`
  query {
    site {
      siteMetadata {
        sections {
          playground
          projects
          about
        }
      }
    }
  }
`;

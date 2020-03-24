import React from 'react';
import { Link, graphql, StaticQuery } from 'gatsby';
import { TransitionGroup, CSSTransition } from "react-transition-group";

import ExternalLink from '../externalLink';
import NavigationWrapper, { LinkWrapper } from './styles';

import routes from '../../utils/routes';

class Navigation extends React.Component {
  state = {
    loaded: false
  }

  componentDidMount() {
    this.setState({ loaded: true });
  }

  render() {
    const { loaded } = this.state;

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
              <TransitionGroup>
                {loaded && (
                  <CSSTransition classNames="loaded" timeout={500}>
                    <LinkWrapper>
                      <Link to={routes.projects} className="title link">{projects}</Link>
                    </LinkWrapper>
                  </CSSTransition>
                )}
                {loaded && (
                  <CSSTransition classNames="loaded" timeout={700}>
                    <LinkWrapper className="double">
                      <ExternalLink to={routes.playground} className="title link" icon={true}>{playground}</ExternalLink>
                    </LinkWrapper>
                  </CSSTransition>
                )}
                {loaded && (
                  <CSSTransition classNames="loaded" timeout={900}>
                    <LinkWrapper>
                      <Link to={routes.about} className="title link" activeClassName="active">{about}</Link>
                    </LinkWrapper>
                  </CSSTransition>
                )}
              </TransitionGroup>
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

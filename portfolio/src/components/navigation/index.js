import React from 'react';
import { Query } from "react-apollo";
import { NavLink, Link } from 'react-router-dom';

import { TransitionGroup, CSSTransition } from "react-transition-group";

import ExternalLink from '../externalLink';
import NavigationWrapper, { LinkWrapper } from './styles';

import routes from '../../utils/routes';
import GET_SECTIONS from './queries';

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
      <Query query={GET_SECTIONS}>
        {({ loading, data }) => {
          const {
            playground,
            projects,
            about
          } = data.sections;

          return (
            <NavigationWrapper>
              <TransitionGroup>
                {loaded && !loading && (
                  <CSSTransition classNames="loaded" timeout={500}>
                    <LinkWrapper>
                      <Link to={routes.projects} className="title link">{projects}</Link>
                    </LinkWrapper>
                  </CSSTransition>
                )}
                {loaded && !loading && (
                  <CSSTransition classNames="loaded" timeout={700}>
                    <LinkWrapper className="double">
                      <ExternalLink to={routes.playground} className="title link" icon={true}>{playground}</ExternalLink>
                    </LinkWrapper>
                  </CSSTransition>
                )}
                {loaded && !loading && (
                  <CSSTransition classNames="loaded" timeout={900}>
                    <LinkWrapper>
                      <NavLink to={routes.about} className="title link" activeClassName="active">{about}</NavLink>
                    </LinkWrapper>
                  </CSSTransition>
                )}
              </TransitionGroup>
            </NavigationWrapper>
          );
        }}
      </Query>
    );
  }
}

export default Navigation;

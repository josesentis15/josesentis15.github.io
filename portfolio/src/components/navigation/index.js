import React from 'react';
import { Query } from "react-apollo";
import { NavLink, Link } from 'react-router-dom';

import { TransitionGroup, CSSTransition } from "react-transition-group";

import NavigationWrapper, { AppearingText } from './styles';

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
                    <Link to={routes.projects} className="title link">
                      <AppearingText><span className="text">{projects}</span></AppearingText>
                    </Link>
                  </CSSTransition>
                )}
                {loaded && !loading && (
                  <CSSTransition classNames="loaded" timeout={650}>
                    <a
                      className="title link double-link"
                      href={routes.playground}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <AppearingText>
                        <span className="text" dangerouslySetInnerHTML={{ __html: playground }} />
                      </AppearingText>
                    </a>
                  </CSSTransition>
                )}
                {loaded && !loading && (
                  <CSSTransition classNames="loaded" timeout={800}>
                    <NavLink to={routes.about} className="title link" activeClassName="active">
                      <AppearingText><span className="text">{about}</span></AppearingText>
                    </NavLink>
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

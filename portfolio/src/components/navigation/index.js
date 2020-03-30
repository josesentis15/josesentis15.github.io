import React from 'react';
import { Query } from "react-apollo";
import { Link } from 'react-router-dom';

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
                  <CSSTransition classNames="loaded" timeout={300}>
                    <Link to={routes.projects} className="title link">
                      <AppearingText><span className="text">{projects}</span></AppearingText>
                    </Link>
                  </CSSTransition>
                )}
                {loaded && !loading && (
                  <CSSTransition classNames="loaded" timeout={500}>
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
                  <CSSTransition classNames="loaded" timeout={700}>
                    <Link to={routes.about} className="title link">
                      <AppearingText><span className="text">{about}</span></AppearingText>
                    </Link>
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
export { AppearingText, NavigationWrapper };

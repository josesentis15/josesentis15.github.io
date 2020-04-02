import React from 'react';
import { Query } from "react-apollo";
import { Link } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from "react-transition-group";

import withLoader from '../../hoc/withLoader';

import routes from '../../utils/routes';
import GET_SECTIONS from './queries';
import NavigationWrapper, { AppearingText } from './styles';

class Navigation extends React.Component {
  render() {
    const { loaded } = this.props;

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
                    <Link to={routes.playground} className="title link double-link">
                      <AppearingText>
                        <span className="text" dangerouslySetInnerHTML={{ __html: playground }} />
                      </AppearingText>
                    </Link>
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

export default withLoader(Navigation);
export { AppearingText, NavigationWrapper };

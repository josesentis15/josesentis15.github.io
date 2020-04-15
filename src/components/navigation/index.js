import React from 'react';
import { Query } from "react-apollo";
import { Link } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from "react-transition-group";

import withLoader from '../../hoc/withLoader';
import { toggleCursor } from '../cursor';

import routes from '../../utils/routes';
import GET_SECTIONS from './queries';
import NavigationWrapper, { AppearingText } from './styles';

class Navigation extends React.Component {
  componentWillUnmount() {
    toggleCursor(true);
  }

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
            <NavigationWrapper className="navigation">
              <TransitionGroup>
                {loaded && !loading && (
                  <CSSTransition classNames="loaded" timeout={300}>
                    <div>
                      <Link
                        to={routes.projects}
                        className="title link"
                        onMouseEnter={() => toggleCursor()}
                        onMouseLeave={() => toggleCursor()}
                      >
                        <AppearingText><span className="text">{projects}</span></AppearingText>
                      </Link>
                    </div>
                  </CSSTransition>
                )}
                {loaded && !loading && (
                  <CSSTransition classNames="loaded" timeout={500}>
                    <div>
                      <Link
                        to={routes.playground}
                        className="title link double-link"
                        onMouseEnter={() => toggleCursor()}
                        onMouseLeave={() => toggleCursor()}
                      >
                        <AppearingText>
                          <span className="text" dangerouslySetInnerHTML={{ __html: playground }} />
                        </AppearingText>
                      </Link>
                    </div>
                  </CSSTransition>
                )}
                {loaded && !loading && (
                  <CSSTransition classNames="loaded" timeout={700}>
                    <div>
                      <Link
                        to={routes.about}
                        className="title link"
                        onMouseEnter={() => toggleCursor()}
                        onMouseLeave={() => toggleCursor()}
                      >
                        <AppearingText><span className="text">{about}</span></AppearingText>
                      </Link>
                    </div>
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

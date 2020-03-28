import React from 'react';
import { Router, Switch, Route } from "react-router-dom";
import { ApolloProvider } from '@apollo/react-hooks';
import { TransitionGroup, CSSTransition } from "react-transition-group";

import Home from '../../pages/home';
// import Playground from '../../pages/playground';
import NotFound from '../../pages/notFound';
import Loader from '../loader';

import client from '../../utils/apollo';
import history from '../../utils/history'
import GlobalStyle from '../../styles';

class App extends React.Component {
  state = {
    loaded: false,
    showLoader: false
  }

  componentDidMount() {
    this.touchable();

    this.setState({ showLoader: true });

    setTimeout(() => {
      this.setState({ loaded: true });
    }, 3000);
  }

  touchable() {
    const typedWindow = window || null;
    const touchsupport =
      'ontouchstart' in typedWindow ||
      typedWindow.navigator.maxTouchPoints > 0 ||
      typedWindow.navigator.msMaxTouchPoints > 0;
    const touchClass = touchsupport ? 'touch' : 'non-touch';

    if (document.documentElement) {
      document.documentElement.classList.add(touchClass);
    }
  }

  render() {
    const { loaded, showLoader } = this.state;

    return (
      <>
        <GlobalStyle />
        {loaded ? (
          <ApolloProvider client={client}>
            <Router history={history}>
              <Switch>
                <Route path="/" component={Home} exact />
                {/* <Route path="/playground" component={Playground} /> */}
                <Route component={NotFound} />
              </Switch>
            </Router>
          </ApolloProvider>
        ) : (
            <TransitionGroup component={null}>
              {showLoader && (
                <CSSTransition classNames="loaded" timeout={2000}>
                  <Loader />
                </CSSTransition>
              )}
            </TransitionGroup>
          )
        }
      </>
    );
  }
}

export default App;

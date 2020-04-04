import React from 'react';
import { Router } from "react-router-dom";
import { ApolloProvider } from '@apollo/react-hooks';
import { TransitionGroup, CSSTransition } from "react-transition-group";
import isExplorer from '@runroom/purejs/lib/isExplorer';
import touchable from '@runroom/purejs/lib/touchable';

import AppRouter from '../appRouter';
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
    touchable();
    if (isExplorer()) document.documentElement.classList.add('browser-ie');

    this.setState({ showLoader: true });

    setTimeout(() => {
      this.setState({ loaded: true });
    }, 2400);
  }

  render() {
    const { loaded, showLoader } = this.state;

    return (
      <>
        <GlobalStyle />
        {loaded ? (
          <ApolloProvider client={client}>
            <Router history={history}>
              <AppRouter />
            </Router>
          </ApolloProvider>
        ) : (
            <TransitionGroup>
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

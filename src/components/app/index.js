import React from 'react';
import { Router } from "react-router-dom";
import { ApolloProvider } from '@apollo/react-hooks';
import { TransitionGroup, CSSTransition } from "react-transition-group";
import isExplorer from '@runroom/purejs/lib/isExplorer';
import touchable from '@runroom/purejs/lib/touchable';
import axios from 'axios';

import AppRouter from '../appRouter';
import Cursor from '../cursor';
import Loader from '../loader';

import { playground } from '../../../package.json';
import client from '../../utils/apollo';
import history from '../../utils/history'
import GlobalStyle from '../../styles';

axios.defaults.baseURL = playground;
axios.defaults.headers.post['Content-Type'] = 'application/json';

class App extends React.Component {
  state = {
    loaded: false,
    showLoader: false
  }

  componentDidMount() {
    if (isExplorer()) document.documentElement.classList.add('browser-ie');
    document.documentElement.classList.add(touchable() ? 'touch' : 'non-touch');

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
            <Cursor />
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

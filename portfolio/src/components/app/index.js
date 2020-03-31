import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { ApolloProvider } from '@apollo/react-hooks';
import { TransitionGroup, CSSTransition } from "react-transition-group";

import Home from '../../pages/home';
import About from '../../pages/about';
import Projects from '../../pages/projects';
import Project from '../../pages/project';
// import Playground from '../../pages/playground';
import NotFound from '../../pages/notFound';
import Loader from '../loader';

import content from '../../data/content.json';
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
    }, 2200);
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
            <BrowserRouter history={history}>
              <Switch>
                {/* <Route path="/playground" component={Playground} /> */}
                <Route path='/' component={Home} exact />
                <Route path="/about" component={About} exact />
                <Route path="/projects" component={Projects} exact />
                {Object.keys(content).map(project => <Route path={`/projects/${project}`} component={Project} exact />)}
                <Route component={NotFound} />
              </Switch>
            </BrowserRouter>
          </ApolloProvider>
        ) : (
            <TransitionGroup>
              {showLoader && (
                <CSSTransition classNames="loaded" timeout={1800}>
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

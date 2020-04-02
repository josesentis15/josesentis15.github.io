import React from 'react';
import { Router, Route, Switch } from "react-router-dom";
import { ApolloProvider } from '@apollo/react-hooks';
import { TransitionGroup, CSSTransition } from "react-transition-group";
import isExplorer from '@runroom/purejs/lib/isExplorer';
import touchable from '@runroom/purejs/lib/touchable';

import Home from '../../pages/home';
import About from '../../pages/about';
import Projects from '../../pages/projects';
import Project from '../../pages/project';
import Playground from '../../pages/playground';
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
    touchable();
    if (isExplorer()) document.documentElement.classList.add('browser-ie');

    this.setState({ showLoader: true });

    setTimeout(() => {
      this.setState({ loaded: true });
    }, 2200);
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
                <Route path='/' component={Home} exact />
                <Route path="/about" component={About} exact />
                <Route path="/playground" component={Playground} exact />
                <Route path="/projects" component={Projects} exact />
                {Object.keys(content).map(project => <Route key={project} path={`/projects/${project}`} component={Project} exact />)}
                <Route component={NotFound} />
              </Switch>
            </Router>
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

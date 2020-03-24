import React from 'react';
import { Switch, Route } from "react-router-dom";

import Home from '../../pages/home';
import Playground from '../../pages/playground';
import NotFound from '../../pages/notFound';

import GlobalStyles from '../../styles/globals';

class App extends React.Component {
  componentDidMount() {
    this.touchable();
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
    return (
      <>
        <GlobalStyles />
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/playground" component={Playground} />
          <Route component={NotFound} />
        </Switch>
      </>
    );
  }
}

export default App;

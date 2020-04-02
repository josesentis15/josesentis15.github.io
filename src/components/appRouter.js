import React from 'react';
import { withRouter } from 'react-router';
import { Route, Switch } from "react-router-dom";

import Home from '../pages/home';
import About from '../pages/about';
import Projects from '../pages/projects';
import Project from '../pages/project';
import Playground from '../pages/playground';
import NotFound from '../pages/notFound';

import content from '../data/content.json';

const AppRouter = ({ location }) => (
  <Switch>
    <Route path='/' component={Home} exact />
    <Route path="/about" component={About} exact />
    <Route path="/playground" component={Playground} exact />
    <Route path="/projects" component={Projects} exact />
    {Object.keys(content).map(project => <Route key={project} path={`/projects/${project}`} component={Project} exact />)}
    <Route component={NotFound} />
  </Switch>
);

export default withRouter(AppRouter);



// <TransitionGroup>
// <CSSTransition
//   key={location.key}
//   timeout={{ enter: 300, exit: 300 }}
//   classNames={'fade'}
// >
//     <Switch location={location}>
//       <Route exact path="/" component={Home} />
//       <Route path="/first" component={First} />
//       <Route path="/second" component={Second} />
//       <Route path="/third" component={Third} />
//     </Switch>
// </CSSTransition>
// </TransitionGroup>

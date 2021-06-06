import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './Pages/Home';
import NotFound from './Pages/notFound';
import About from './Pages/About/';
import Contact from './Pages/contact';
import ProjectDetails from './Pages/projectDetails';
import Projects from './Pages/projects';

class Routes extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/contact" component={ Contact } />
          <Route exact path="/projects" component={ Projects } />
          <Route exact path="/projects/:name" component={ ProjectDetails } />
          <Route path="/about" component={ About } />
          <Route exact path="/" component={ Home } />
          <Route component={ NotFound } />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default Routes;

import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Homepage from '../pages/home.page';
import Post from '../pages/post.page';
import Auth from '../pages/auth.page';
import Dashboard from '../pages/dashboard.page';
import Developer from '../pages/developer.page';
class Main extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path='/' exact component={Homepage} />
          <Route path='/sign-in' exact component={Auth} />
          <Route path='/sign-up' exact component={Auth} />
          <Route path='/developer' exact component={Developer} />
          <Route path='/post' exact component={Post} />
          <Route path='/dashboard' exact component={Dashboard} />
        </Switch>
      </Router>
    );
  }
}

export default Main;

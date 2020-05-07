import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Homepage from '../../pages/homepage/home.page';
import Post from '../../pages/post/post.page';
import Auth from '../../pages/auth-page/auth.page';
import Dashboard from '../../pages/dashboard/dashboard.page';
import Developer from '../../pages/developer/developer.page';
class Main extends Component {
  render() {
    return (
      <Switch>
        <Route path='/' exact component={Homepage} />
        <Route
          path='/sign-in'
          exact
          render={(props) => <Auth signin {...props} />}
        />
        <Route
          path='/sign-up'
          exact
          render={(props) => <Auth signup {...props} />}
        />
        <Route path='/developer' exact component={Developer} />
        <Route path='/posts' exact component={Post} />
        <Route path='/dashboard' exact component={Dashboard} />
      </Switch>
    );
  }
}

export default Main;

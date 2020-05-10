import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { RootContainer } from './main.styles';
import Homepage from '../../pages/homepage/home.page';
import Post from '../../pages/post/post.page';
import Auth from '../../pages/auth-page/auth.page';
import Dashboard from '../../pages/dashboard/dashboard.page';
import Developer from '../../pages/developer/developer.page';
class Main extends Component {
  render() {
    return (
      <RootContainer>
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
          <Route path='/posts' exact component={Post} />
          <Route path='/dashboard' exact component={Dashboard} />
          <Route path='/profiles' exact component={Developer} />
        </Switch>
      </RootContainer>
    );
  }
}

export default Main;

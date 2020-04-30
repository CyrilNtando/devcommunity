import React, { Component } from 'react';
import { AuthContainer } from './auth.styles';
import SignUP from '../../components/signup/signup.component';
import SignIn from '../../components/signin/signin.component';

export default class Auth extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
    };
  }
  render() {
    let authScreen;
    if (this.props.signin) authScreen = <SignIn {...this.props} />;
    else authScreen = <SignUP {...this.props} />;
    return <AuthContainer>{authScreen}</AuthContainer>;
  }
}

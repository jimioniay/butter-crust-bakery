import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import Header from '../../components/header';
import SocialButton from './SocialButton';

class SocialLogin extends Component {
  handleSocialLogin = user => {
    console.log(user);
    this.props.history.push('/transfer');
  };

  handleSocialLoginFailure = err => {
    console.error(err);
  };

  render() {
    return (
      <div className="d-flex flex-column">
        <div className="mb-4">
          <Header text="Login with Social" />
        </div>
        <div className="google mb-4">
          <SocialButton
            provider="google"
            appId="AIzaSyBP5ErvXZKQDEuME1xfjvkYR2VOVsBqV3A"
            onLoginSuccess={this.handleSocialLogin}
            onLoginFailure={this.handleSocialLoginFailure}
            classnames="loginBtn loginBtn--google"
            disabled
          >
            Login with Google
          </SocialButton>
        </div>
        <div className="facebook">
          <SocialButton
            provider="facebook"
            appId="2621833401215184"
            onLoginSuccess={this.handleSocialLogin}
            onLoginFailure={this.handleSocialLoginFailure}
            classnames="loginBtn loginBtn--facebook"
          >
            Login with Facebook
          </SocialButton>
        </div>
      </div>
    );
  }
}

export default withRouter(SocialLogin);

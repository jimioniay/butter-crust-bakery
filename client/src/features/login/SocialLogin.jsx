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
    console.error('eror on social login: ', err);
  };

  render() {
    console.log(
      process.env.REACT_APP_FACEBOOK_APP_ID,
      process.env.REACT_APP_GOOGLE_APP_ID,
    );
    return (
      <div className="d-flex flex-column">
        <div className="mb-4">
          <Header text="Login with Social" />
        </div>
        <div className="google mb-4">
          <SocialButton
            provider="google"
            appId={process.env.REACT_APP_GOOGLE_APP_ID}
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
            appId={process.env.REACT_APP_FACEBOOK_APP_ID}
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

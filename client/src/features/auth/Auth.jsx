import React, { Fragment } from 'react';
import { Route, Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';

import SocialLogin from './social/SocialLogin';
import SignUp from './signup';
import SignIn from './signin';
import BaseUI from '../base';

const Auth = ({ location: { pathname }, history: { push } }) => {
  return (
    <BaseUI>
      {pathname === '/auth/social' && <SocialLogin />}
      {pathname === '/auth/signup' && <SignUp push={push} />}
      {pathname === '/auth/signin' && <SignIn push={push} />}
    </BaseUI>
  );
};

export default withRouter(Auth);

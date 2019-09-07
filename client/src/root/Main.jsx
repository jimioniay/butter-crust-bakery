import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import Home from '../features/home';
import Transfer from '../features/transfer';
import Auth from '../features/auth';
import NotFound from '../components/not-found/NotFound';
import AuthServices from '../redux/util/authServices';

const AuthRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      AuthServices.isAuthenticated() ? (
        <Component {...props} />
      ) : (
        <Redirect to={{ pathname: '/auth/signin' }} />
      )
    }
  />
);

const Main = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <AuthRoute exact path="/transfer" component={Transfer} />
    <Route exact path="/auth/signup" component={Auth} />
    <Route exact path="/auth/social" component={Auth} />
    <Route exact path="/auth/signin" component={Auth} />
    <Route component={NotFound} />
  </Switch>
);
export default Main;

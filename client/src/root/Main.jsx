import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from '../features/home';
import Transfer from '../features/transfer';

const Main = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/transfer" component={Transfer} />
    <Route component={() => null} />
  </Switch>
);
export default Main;

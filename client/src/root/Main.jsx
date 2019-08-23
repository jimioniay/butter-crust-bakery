import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from '../features/home';
import Transfer from '../features/transfer';
import NotFound from "../components/not-found/NotFound"

const Main = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/transfer" component={Transfer} />
    <Route component={NotFound} />
  </Switch>
);
export default Main;

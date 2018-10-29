import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';

import Dashboard from '../views/Dashboard';
import { APP_ROUTES } from './appConstants';

const RedirectToDashboard = () => <Redirect to={APP_ROUTES.DASHBOARD} />;

export default (
  <Switch>
    <Route exact path={APP_ROUTES.BASE} component={RedirectToDashboard} />
    <Route exact path={APP_ROUTES.DASHBOARD} component={Dashboard} />
  </Switch>
);

import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { Beers } from './Beers';

import { ROOT, BEERS } from '../pathnames/pathnames';
const routes = [{ path: BEERS, component: Beers, exact: false }];

export const Routes = () => {
  return (
    <Switch>
      <Route path={ROOT} exact></Route>
      {routes.map((props) => (
        <Route key={props.path} {...props} />
      ))}
    </Switch>
  );
};

import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import { Beers } from './Beers';
import { BeerPage } from './BeerPage';

import { ROOT, LOGIN, BEERS, BEER_ITEM } from '../constants/pathnames';
import { Login } from './Login';

const routes = [
  { path: LOGIN, component: Login, exact: false },
  { path: BEERS, component: Beers, exact: true },
  { path: BEER_ITEM, component: BeerPage, exact: true },
];

export const Routes = () => {
  return (
    <Switch>
      <Route path={ROOT} exact>
        <Redirect to={LOGIN} exact></Redirect>
      </Route>
      {routes.map((props) => (
        <Route key={props.path} {...props} />
      ))}
    </Switch>
  );
};

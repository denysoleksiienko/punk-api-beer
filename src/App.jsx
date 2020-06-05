import React from 'react';
import { Provider } from 'react-redux';
import { store } from './redux';
import { Layout } from './components/Layout';

import { CssBaseline } from '@material-ui/core';

import './styles/App.scss';

export const App = () => {
  return (
    <React.StrictMode>
      <Provider store={store}>
        <CssBaseline />
        <Layout />
      </Provider>
    </React.StrictMode>
  );
};

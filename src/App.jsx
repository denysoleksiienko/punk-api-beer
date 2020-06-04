import React from 'react';
import { Provider } from 'react-redux';
import { store } from './redux';
import { Layout } from './components/Layout';

import './styles/App.scss';

export const App = () => {
  return (
    <React.StrictMode>
      <Provider store={store}>
        <Layout />
      </Provider>
    </React.StrictMode>
  );
};

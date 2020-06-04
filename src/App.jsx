import React from 'react';
import { Provider } from 'react-redux';
import { store } from './redux';
import { Beers } from './routes/Beers';

import './App.scss';

export const App = () => {
  return (
    <React.StrictMode>
      <Provider store={store}>
        <Beers />
      </Provider>
    </React.StrictMode>
  );
};

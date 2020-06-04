import { applyMiddleware, combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';

import { reducer as beersReducer } from './beers/reducer';

const reducers = combineReducers({
  beers: beersReducer,
});

export const store = createStore(reducers, composeWithDevTools(applyMiddleware(thunkMiddleware)));

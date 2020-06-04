import { applyMiddleware, combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';

import { reducer as beersReducer } from './beers/reducer';
import { reducer as authReducer } from './login/reducer';

const reducers = combineReducers({
  products: beersReducer,
  auth: authReducer,
});

export const store = createStore(reducers, composeWithDevTools(applyMiddleware(thunkMiddleware)));

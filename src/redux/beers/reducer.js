import { handleActions } from 'redux-actions';
import * as actions from './actions';

const initialState = {
  products: [],
  current: [],
  error: false,
};

export const reducer = handleActions(
  {
    [actions.setBeers]: (state, { payload }) => ({
      ...state,
      products: payload,
    }),

    [actions.setError]: (state, { payload }) => ({
      ...state,
      error: payload,
    }),
  },
  initialState
);

import { handleActions } from 'redux-actions';
import * as actions from './actions';

const initialState = {
  allBeers: [],
  currentBeer: {},
  error: false,
};

export const reducer = handleActions(
  {
    [actions.setBeers]: (state, { payload }) => ({
      ...state,
      allBeers: payload,
    }),

    [actions.setBeer]: (state, { payload }) => ({
      ...state,
      current: payload,
    }),

    [actions.setError]: (state, { payload }) => ({
      ...state,
      error: payload,
    }),
  },
  initialState
);

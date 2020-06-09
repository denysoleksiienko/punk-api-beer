import { handleActions } from 'redux-actions';
import * as actions from './actions';

const initialState = {
  allBeers: [],
  currentBeer: [],
  error: false,
  searchByName: '',
};

export const reducer = handleActions(
  {
    [actions.setBeers]: (state, { payload }) => ({
      ...state,
      allBeers: [...state.allBeers, ...payload],
    }),

    [actions.setCurrentBeer]: (state, { payload }) => ({
      ...state,
      currentBeer: payload,
    }),

    [actions.setSearch]: (state, { payload }) => ({
      ...state,
      searchByName: payload,
    }),

    [actions.setError]: (state, { payload }) => ({
      ...state,
      error: payload,
    }),
  },
  initialState
);

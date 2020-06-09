import { handleActions } from 'redux-actions';
import * as actions from './actions';

const initialState = {
  isLoading: false,
};

export const reducer = handleActions(
  {
    [actions.toggleLoader]: (state, { payload }) => ({
      ...state,
      isLoading: payload,
    }),
  },
  initialState
);

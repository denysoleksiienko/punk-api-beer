import { handleActions } from 'redux-actions';
import * as actions from './actions';

const initialState = {
  isLoggedIn: false,
};

export const reducer = handleActions(
  {
    [actions.login]: (state) => ({
      ...state,
      isLoggedIn: true,
    }),

    [actions.logout]: (state) => ({
      ...state,
      isLoggedIn: false,
    }),
  },
  initialState
);

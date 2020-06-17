import { handleActions } from 'redux-actions';
import * as actions from './actions';

const initialState = {
  favorites: [],
  likes: [],
};

export const reducer = handleActions(
  {
    [actions.toggleFavorites]: (state, { payload }) => {
      let favorites = state.favorites.filter((id) => id !== payload);
      if (favorites.length === state.favorites.length) {
        favorites = [...state.favorites, payload];
      }
      return { ...state, favorites };
    },
    [actions.toggleLike]: (state, { payload }) => {
      let likes = state.likes.filter((id) => id !== payload);
      if (likes.length === state.likes.length) {
        likes = [...state.likes, payload];
      }
      return { ...state, likes };
    },
  },
  initialState
);

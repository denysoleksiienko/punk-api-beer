import { createAction } from 'redux-actions';

export const toggleFavorites = createAction('TOGGLE_FAVOURITES');
export const toggleLike = createAction('TOGGLE_LIKE');
export const toggleDisLike = createAction('TOGGLE_DISLIKE');

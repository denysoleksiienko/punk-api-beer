import { createAction } from 'redux-actions';
import { HTTPservices } from '../../HTTPservices/HTTPservices';

export const setBeers = createAction('SET_BEERS');
export const setCurrentBeer = createAction('SET_BEER');
export const setPage = createAction('SET_PAGE');
export const setSearch = createAction('SET_SEARCH');
export const setUpdateBeerPage = createAction('SET_UPDATE_BEER_PAGE');

export const setError = createAction('SET_ERROR');

export const initialBeerPage = (name, page, per_page) => async (dispatch) => {
  try {
    const beers = await HTTPservices.getBeers(name, page, per_page);
    dispatch(setBeers(beers));
  } catch (error) {
    dispatch(setError(error));
  }
};

export const initialBeerByID = (id) => async (dispatch) => {
  try {
    const beer = await HTTPservices.getBeerByID(id);
    dispatch(setCurrentBeer(beer));
  } catch (error) {
    dispatch(setError(error));
  }
};

export const search = (value) => (dispatch) => {
  dispatch(setSearch(value));
};

// export const initialBeerSearchByName = (name) => async (dispatch) => {
//   try {
//     const beers = await HTTPservices.getBeerByName(name);
//     dispatch(setSearch(beers));
//   } catch (error) {
//     dispatch(setError(error));
//   }
// };

export const updateBeerPage = (name, page, per_page) => async (dispatch) => {
  try {
    const beers = await HTTPservices.getBeers(name, page, per_page);
    dispatch(setUpdateBeerPage(beers));
  } catch (error) {
    dispatch(setError(error));
  }
};

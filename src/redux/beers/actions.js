import { createAction } from 'redux-actions';
import { HTTPservices } from '../../HTTPservices/HTTPservices';

export const setBeers = createAction('SET_BEERS');
export const setCurrentBeer = createAction('SET_BEER');
export const setPage = createAction('SET_PAGE');
export const setSearch = createAction('SET_SEARCH');

export const setError = createAction('SET_ERROR');

export const initialBeerPage = (page, per_page) => async (dispatch) => {
  try {
    const beers = await HTTPservices.getBeers(page, per_page);
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

export const initialBeerSearchByName = (name) => async (dispatch) => {
  try {
    const beers = await HTTPservices.getBeerByName(name);
    dispatch(setSearch(beers));
  } catch (error) {
    dispatch(setError(error));
  }
};

// export const update = (page, per_page) => async (dispatch) => {
//   try {
//     const beers = await HTTPservices.getBeers(page, per_page);
//     dispatch(setBeers(beers));
//   } catch (error) {
//     dispatch(setError(error));
//   }
// };

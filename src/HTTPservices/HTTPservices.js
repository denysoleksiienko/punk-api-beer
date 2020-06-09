import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://api.punkapi.com/v2/',
  headers: { 'Content-Type': 'application/json' },
});

const PAGE = 1;
const PER_PAGE = 12;

export const HTTPservices = {
  getBeers: async (name = '', page = PAGE, per_page = PER_PAGE) => {
    const response = await instance.get(`/beers?page=${page}&per_page=${per_page}&beer_name=^${name}`);
    return response.data;
  },
  getBeerByID: async (id) => {
    const response = await instance.get(`/beers/${id}`);
    return response.data;
  },
  // getBeerByName: async (name = '') => {
  //   const response = await instance.get(`/beers?beer_name=${name}`);
  //   return response.data;
  // },
};

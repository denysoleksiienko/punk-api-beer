import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://api.punkapi.com/v2/',
  headers: { 'Content-Type': 'application/json' },
});

export const HTTPservices = {
  getBeers: async (page = 1, per_page = 10) => {
    const response = await instance.get(`/beers?page=${page}&per_page=${per_page}`);
    return response.data;
  },
  getBeerByID: async (id) => {
    const response = await instance.get(`/beers/${id}`);
    return response.data;
  },
};

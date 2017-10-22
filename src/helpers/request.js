import axios from 'axios';

const normalizeError = (err) => {
  return err;
};

const request = (method, url, data = {}, queryString = {}) => {
  const config = {
    method,
    url,
    data,
    queryString,
  };

  return axios(config)
    .then((response) => {
      return response.data;
    })
    .catch((err) => {
      throw normalizeError(err);
    });
};

export const getRequest = (url, queryString) => {
  return request('get', url, undefined, queryString);
};

export const postRequest = (url, data, queryString) => {
  return request('post', url, data, queryString);
};

export const putRequest = (url, data, queryString) => {
  return request('put', url, data, queryString);
};

export const deleteRequest = (url, queryString) => {
  return request('delete', url, undefined, queryString);
};

import axios from 'axios';

export const METHODS = {
  GET: 'get',
  POST: 'post',
  DELETE: 'delete',
  UPDATE: 'update',
  PUT: 'put'
};

const API = async ({ url, method = METHODS.GET, params, data }) => {
  let result = {};
  await axios({
    url: url,
    method: method,
    params: params,
    data: data
  })
    .then((res) => {
      result = res.data;
    })
    .catch((err) => {
      result.error = err.response.data.msg;
    });

  return result;
};

export default API;

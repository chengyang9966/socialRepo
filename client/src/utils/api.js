import axios from 'axios';
import qs from 'querystring';
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
    data: data,
    paramsSerializer: function (params) {
      return qs.stringify(params);
    }
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

import axios from 'axios';
import config from '../config';

const httpUrl = 'http://localhost:3001/api';
// const httpsUrl = `http://${ config.react.domainName }:${ config.react.portNumber }/api`;

const getRequest = (url, data) => {
  return new Promise((resolve, reject) => {
    axios.get(httpUrl + url, { params: data || {} })
    .then(response => {
      console.log(response.data.data);
      resolve(response.data.data);
    })
    .catch(error => {
      console.log("GET", url, error);
      reject(error.response.data);
    })
  })
};

const delRequest = (url, data) => {
  return new Promise((resolve, reject) => {
    axios.delete(httpUrl + url, data)
    .then(response => {
      console.log(response.data.data);
      resolve(response.data.data);
    })
    .catch(error => {
      console.log("GET", url, error);
      reject(error.response.data);
    })
  })
};

const putRequest = (url, data) => {
  return new Promise((resolve, reject) => {
    axios.put(httpUrl + url, data)
    .then(response => {
      resolve(response);
    })
    .catch(error => {
      reject(error.response);
    })
  })
};

const postRequest = (url, data) => {
  return new Promise((resolve, reject) => {
    axios.post(httpUrl + url, data)
    .then(response => {
      resolve(response.data);
    })
    .catch(error => {
      reject(error.response);
    })
  })
};
export default {
  get: getRequest,
  del: delRequest,
  put: putRequest,
  post: postRequest
}


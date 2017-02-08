import axios from 'axios';
import sign from '../common/sign'

axios.interceptors.request.use(function (config) {
  // Do something before request is sent
  sign(config);
  return config;
}, function (error) {
  // Do something with request error
  return Promise.reject(error);
});

let base = '';

export const requestLogin = params => { return axios.post(`${base}/login`, params).then(res => res.data); };

export const getUserList = params => { return axios.get(`${base}/user/list`, { params: params }); };

export const getUserListPage = params => { return axios.get(`${base}/user/listpage`, { params: params }); };

export const removeUser = params => { return axios.get(`${base}/user/remove`, { params: params }); };

export const editUser = params => { return axios.get(`${base}/user/edit`, { params: params }); };

export const addUser = params => { return axios.get(`${base}/user/add`, { params: params }); };

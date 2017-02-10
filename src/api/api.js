import axios from 'axios';
import sign from '../common/sign'
import NProgress from 'nprogress'

// `withCredentials` indicates whether or not cross-site Access-Control requests
// should be made using credentials
// default false
// 跨域请求设置服务端返回的cookie
axios.defaults.withCredentials = true

//拦截器,请求
axios.interceptors.request.use(function (config) {
  // Do something before request is sent
  NProgress.start()
  sign(config)
  return config
}, function (error) {
  // Do something with request error
  NProgress.done()
  return Promise.reject(error)
})

//拦截器,响应
axios.interceptors.response.use(function (response) {
  // Do something with response data
  NProgress.done()
  return response
}, function (error) {
  NProgress.done()
  // Do something with response error
  return Promise.reject(error)
})


//api方法
let base = ''

// const requestLogin = params => {
//   return axios.post(`${base}/login`, params).then(res => res.data)
// }

const requestLogin = params => {
  return axios.post('http://localhost:8082/login', params)
}

const getUserList = params => {
  return axios.get('http://localhost:8082/users', {params: params})
}

const getUserListPage = params => {
  return axios.get('http://localhost:8082/users', {params: params})
}

const removeUser = params => {
  return axios.delete('http://localhost:8082/users/one', {params: params})
}

const editUser = params => {
  return axios.put('http://localhost:8082/users/one', params)
}

const addUser = params => {
  return axios.post('http://localhost:8082/users/one', params)
}

const getUser = params => {
  return axios.get('http://localhost:8082/users/one', {params: params})
}

const getApiVersion = params => {
  return axios.get('http://localhost:8082/version', params)
}


//对外暴露的api方法
const Api = {
  requestLogin,
  getUserList,
  getUserListPage,
  removeUser,
  editUser,
  addUser,
  getApiVersion,
}


export default Api

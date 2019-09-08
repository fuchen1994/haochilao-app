import axios from 'axios'
import qs from 'qs'
import { setCookie } from '@/utils/cookies'

const service = axios.create({
  // baseURL: "http://192.168.1.254:8989", // api的base_url
  timeout: 15000, // request timeout
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded'
  }
})

service.interceptors.request.use(
  config => {
    const loginToken = localStorage.getItem('currentUser_token')
    if (loginToken) {
      config.headers['MPKToken'] = loginToken
    }
    if (config.method === 'post') {
      config.data = {
        loginToken: loginToken,
        ...config.data
      }
      config.data = qs.stringify(config.data);
    } else if (config.method === 'get') {
      config.params = {
        loginToken: loginToken,
        ...config.params
      }
    }
    // console.log('%c 发起请求 =====>', 'color: #4CAF50; font-weight: bold', config)
    // console.log(config);
    return config;
  },
  error => {
    return Promise.reject(err)
  }
)

service.interceptors.response.use(
  // response => {

  // },
  error => {
    console.log('err' + error, ' code:', error.code) // for debug
    if (error.code === 'ECONNABORTED' && error.message.indexOf('timeout') !== -1) {
      Message({
        message: '网络异常，请稍后重试',
        type: 'error',
        duration: 5 * 1000
      })
    } else {
      Message({
        message: error.message,
        type: 'error',
        duration: 5 * 1000
      })
    }
    return Promise.reject(error)
  }
)

export default service

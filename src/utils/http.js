/*
 * @Author: mochenglong
 * @Date: 2024-06-05 23:47:58
 * @LastEditors: mochenglong
 * @LastEditTime: 2024-06-06 00:49:37
 * @Description: file content
 */
import axios from 'axios'

const httpInstance = axios.create({
  baseURL: 'http://pcapi-xiaotuxian-front-devtest.itheima.net',
  timeout: 5000
})

//拦截器

//axios请求拦截器
httpInstance.interceptors.request.use(config => {
  return config
}, e =>Promise.reject(e))


// 添加响应拦截器
httpInstance.interceptors.response.use(res => res.data, e => {
  return Promise.reject(e)
})


export default httpInstance
import axios from "axios"

// 请求拦截器
axios.interceptors.request.use((config) => {
  return config
})

// 响应拦截器
axios.interceptors.response.use((res) => {
  if(res.status !== 200) {
    return Promise.reject(res.data.msg)
  }
  return res.data.data
}, err => Promise.reject(err))

export default axios;
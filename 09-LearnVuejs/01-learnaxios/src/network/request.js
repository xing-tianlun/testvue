// 对网络请求框架axios进行封装
import axios from 'axios'

// export function request(config, success, failure) {
//   // 创建axios实例
//   const instance = axios.create({
//     baseURL: '',
//     timeout: 5000
//   })

//   // 发送真正的网络请求
//   instance(config)
//   .then(res => {
//     // console.log(res);
//     success(res)
//   })
//   .catch(err => {
//     // console.log(err);
//     failure(err)
//   })
// }

// 第二种封装
// export function request(config) {
//   // 创建axios实例
//   const instance = axios.create({
//     baseURL: '',
//     timeout: 5000
//   })

//   // 发送真正的网络请求
//   instance(config.baseConfig)
//   .then(res => {
//     // console.log(res);
//     onfig.success(res)
//   })
//   .catch(err => {
//     // console.log(err);
//     onfig.failure(err)
//   })
// }

// 最终封装方案
// export function request(config) {
//   return new Promise((resolve, reject) => {
//     // 创建axios实例
//     const instance = axios.create({
//       baseURL: '',
//       timeout: 500
//     })

//     // 发送真正的网络请求
//     instance(config)
//     .then(res => {
//       resolve(res)
//     })
//     .catch(err => {
//       reject(err)
//     })
//   })
// }

// 最最终封装方案
export function request(config) {
  // 创建axios实例
  const instance = axios.create({
    baseURL: '',
    timeout: 5000
  })
  
  // 2. axios拦截器
  instance.interceptors.request.use(config => {
    // console.log(config);
    // 2.1 请求拦截的作用
    //1.比如config中的些信息不符合服务器的要求

    //2.比如每次发送网络请求时，都希望在界面中显示一个请求的图标

    // 3.某些网络请求(比如登录(token)),必须携带一 些特殊的信息

    return config
  }, err => {
    // console.log(err);
  })
  // 2.2 响应拦截
  instance.interceptors.response.use(res => {
    console.log(res);
    return res.data
  }, err => {
    console.log(err);
  })
  // 3.发送真正的网络请求
  return instance(config)
}
// 写在最后面的注释  因为上面instance的返回值就是Promise类型
// 所以不需要自己封装一个new promise
// 之后如果axios框架不在更新或者出现重大bag时
// 只需要把原来的代码注释掉，换成其他网络请求的框架
// 最后return new Promise()，把其他框架的请求代码包装到Promise中
// 之后其他地方在使用的时候依然是按照正常的方式使用
// 不会有任何的影响

import Vue from 'vue'
import App from './App'

import axios from 'axios'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App)
})

// axios({
//   url: 'http://123.207.32.32:8000/home/multidata',
//   method: 'get'
// }).then(res => {
//   console.log(res);
// })

// axios({
//   url: 'http://123.207.32.32:8000/home/data?type=sell&page=3'
// }).then(res => {
//   console.log(res)
// })

// axios({
//   url: 'http://123.207.32.32:8000/home/data',
//   // 专门针对get请求的参数拼接
//   params: {
//     type: 'pop',
//     page: 1
//   }
// }).then(res => {
//   console.log(res)
// })

// axios({
//   url: 'http://152.136.185.210:8000/api/z8/home/data',
//   // 专门针对get请求的参数拼接
//   params: {
//     type: 'pop',
//     page: 1
//   }
// }).then(res => {
//   console.log(res)
// })

// 2.axios发送并发请求
// axios.all([axios({
//   url: 'http://152.136.185.210:8000/api/z8/home/multidata'
// }), axios({
//   url: 'http://152.136.185.210:8000/api/z8/home/data',
//   params: {
//     type: 'sell',
//     page: 5
//   }
// })]).then(results => {
//   console.log(results);
// })

// 3.使用全局的axios和对应的配置在进行网络请求
// axios.defaults.baseURL = 'http://152.136.185.210:8000/api/z8'
// axios.defaults.timeout = 5000
// axios.all([axios({
//   url: '/home/multidata'
// }), axios({
//   url: '/home/data',
//   params: {
//     type: 'sell',
//     page: 5
//   }
// })]).then(axios.spread((res1, res2) => {
//   console.log(res1);
//   console.log(res2);
// }))

// 4.创建对应的axios的实例，可以设置多个实例
// const instance1 = axios.create({
//   baseURL: 'http://152.136.185.210:8000/api/z8',
//   timeout: 5000
// })

// instance1({
//   url: '/home/multidata'
// }).then(res => {
//   console.log(res);
// })

// instance1({
//   url: '/home/data',
//   params: {
//     type: 'pop',
//     page: 1
//   }
// }).then(res => {
//   console.log(res);
// })

// 5.封装request模块
import {request} from './network/request'

// request({
//   url: '/home/multidata'
// }, res => {
//   console.log(res);
// }, err => {
//   console.log(err);
// })

// 第二种封装的使用方法

// request({
//   baseConfig: {

//   },
//   success: function (res) {

//   },
//   failure: function (err) {

//   }
// })

// 最终封装方案的使用方法
// request({
//   url: '/home/multidata'
// }).then(res => {
//   console.log(res);
// }).catch(err => {
//   console.log(err);
// })

// 最最终封装方案的使用方法
request({
  url: '/home/multidata'
}).then(res => {
  console.log(res);
}).catch(err => {
  console.log(err);
})

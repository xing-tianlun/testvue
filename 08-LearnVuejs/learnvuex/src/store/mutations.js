export default {
  // 定义一些方法
  increment(state) {
    state.counter++
  },
  decrement(state) {
    state.counter--
  },
  incrementCount(state,payload) {
    state.counter += payload.count
  },
  updateInfo(state) {
    state.info.name = 'xing'
    // 这是错误代码，不能再mutations中进行异步操作
    // setTimeout(() => {
    //   state.info.name = 'xing'
    // },1000)

    // 这种添加做不到响应式
    // state.info['address'] = '洛杉矶'
    // 这样添加可以做到响应式
    // Vue.set(state.info, 'address', '洛杉矶')
    // 这种删除做不到响应式
    // delete state.info.age
    // 这种删除可以做到响应式
    // Vue.delete(state.info, 'age')
  }
}

import Vue from 'vue'
import Vuex from 'vuex'

// 1.安装插件
Vue.use(Vuex)

// 模块A
const moduleA = {
  state: {
    name: 'zhangsan'
  },
  mutations: {
    updateName(state,payload) {
      state.name = payload
    }
  },
  actions: {
    aUpdateName(context) {
      setTimeout(() => {
        context.commit('updateName', 'wangwu')
      },1000)
    }
  },
  getters: {
    fullname(state) {
      return state.name + '11111'
    },
    fullname2(state,getters) {
      return getters.fullname + '222'
    },
    fullname3(state,getters,rootState) {
      return getters.fullname2 + rootState.counter
    }
  }
}

// 2.创建对象
const store = new Vuex.Store({
  state: {
    counter: 1000,
    info: {
      name: 'kobe',
      age: 40,
      height: 1.98
    }
  },
  mutations: {
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
  },
  actions: {
    aUpdateInfo(context,payload) {
      // setTimeout(() => {
      //   context.commit('updateInfo')
      //   console.log(payload.message);
      //   payload.success()
      // }, 1000);
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          context.commit('updateInfo')
          console.log(payload);
          resolve('resolve参数')
        }, 1000);
      })
    }
  },
  getters: {
    powerCounter(state) {
      return state.counter * state.counter
    }
  },
  modules: {
    a: moduleA
  }
})

// 3. 导出store独享
export default store

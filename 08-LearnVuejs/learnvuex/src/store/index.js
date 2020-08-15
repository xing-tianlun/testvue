import Vue from 'vue'
import Vuex from 'vuex'

import mutations from './mutations'
import actions from './actions'
import getters from './getters'
import moduleA from './modules/moduleA'

// 1.安装插件
Vue.use(Vuex)

const state = {
  counter: 1000,
  info: {
    name: 'kobe',
    age: 40,
    height: 1.98
  }
}
// 2.创建对象
const store = new Vuex.Store({
  state,
  mutations,
  actions,
  getters,
  modules: {
    a: moduleA
  }
})

// 3. 导出store独享
export default store

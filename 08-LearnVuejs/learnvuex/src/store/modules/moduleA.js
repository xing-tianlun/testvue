export default {
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

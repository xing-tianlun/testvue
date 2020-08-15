<template>
  <div id="app">
    <h2>---------App内容：modules中的内容---------</h2>
    <h2>{{$store.state.a.name}}</h2>
    <button @click="updateName">修改名字</button>
    <h2>{{$store.getters.fullname}}</h2>
    <h2>{{$store.getters.fullname2}}</h2>
    <h2>{{$store.getters.fullname3}}</h2>
    <button @click="asycUpdateName">异步修改名字</button>

    <h2>---------App内容：info对象内容是否是响应式的---------</h2>
    <h2>{{$store.state.info}}</h2>
    <button @click="updateInfo">修改信息</button>

    <h2>---------App组件---------</h2>
    <h2>{{message}}</h2>
    <h2>{{$store.state.counter}}</h2>
    <button @click="addition">+</button>
    <button @click="subtraction">-</button>
    <button @click="addCount(5)">+5</button>
    <button @click="addCount(10)">+10</button>

    <h2>---------App内容：getters相关信息---------</h2>
    <h2>{{$store.getters.powerCounter}}</h2>
    

    <h2>---------Hello Vuex内容---------</h2>
    <hello-vuex/>
  </div>
</template>

<script>
  import HelloVuex from './components/HelloVuex'

  export default {
    name: 'App',
    data() {
      return {
        message: '我是APP组件'
        // counter: 0
      }
    },
    components: {
      HelloVuex
    },
    methods: {
      addition() {
        this.$store.commit('increment')
      },
      subtraction() {
        this.$store.commit('decrement')
      },
      addCount(count) {
        // payload: 负载
        // 1. 普通的提交封装
        // this.$store.commit('incrementCount',count)

        // 2.特殊的提交封装
        this.$store.commit({
          type: 'incrementCount',
          count
        })
      },
      updateInfo() {
        // 同步修改数据
        // this.$store.commit('updateInfo')

        // 异步修改数据
        // this.$store.dispatch('aUpdateInfo',{
        //   message: '我是携带的信息',
        //   success: () => {
        //     console.log('里面已经完成了')
        //   }
        // })
        this.$store
        .dispatch('aUpdateInfo', '我是携带的信息')
        .then(res => {
          console.log('里面已经完成了');
          console.log(res);
        })
      },
      updateName() {
        this.$store.commit('updateName','lisi')
      },
      asycUpdateName() {
        this.$store.dispatch('aUpdateName')
      }
    }
  }
</script>

<style>

</style>

<template>
  <div id="app">
    <h2>---------App组件---------</h2>
    <h2>{{message}}</h2>
    <h2>{{$store.state.counter}}</h2>
    <button @click="addition">+</button>
    <button @click="subtraction">-</button>

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
        message: '我是APP组件',
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
      }
    }
  }
</script>

<style>

</style>

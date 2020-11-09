<template>
  <div id="app">
    <img src="./assets/logo.png">
    <HelloWorld/>
    <ul>
      <li v-for="(item, index) in title" :key="index" :class="{active: currentIndex===index}" @click="itemClick(index)">{{item}}</li>
    </ul>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld'

export default {
  name: 'App',
  data () {
    return {
      title: ['精选', '热门', '推荐'],
      currentIndex: 0
    }
  },
  components: {
    HelloWorld
  },
  methods: {
    itemClick (index) {
      this.currentIndex = index
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
  .active {
    color: #f00;
  }
</style>

<template>
  <div>
    <h2>我是首页</h2>
    <p>我是首页内容，哈哈哈</p>
    <router-link to="/home/news">新闻</router-link>
    <router-link to="/home/message">消息</router-link>
    <router-view></router-view>
    <h2>{{message}}</h2>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      message: '你好',
      path: '/home/news'
    }
  },
  cerated() { // 生命周期  实例已经创建完成之后被调用
    console.log('home created');
  },
  destroyed() { // 生命周期  实例销毁之后被调用
    console.log('home destroyed');
  },
  activated() { // 活跃状态执行
    // console.log('activared')
    this.$router.push(this.path);
  },
  // deactivated() { // 非活跃状态执行
  //   // console.log('deactivared')
  // },
  beforeRouteLeave(to, from, next) {
    console.log(this.$route.path);
    this.path = this.$route.path;
    next()
  }
}
</script>

<style scoped>

</style>

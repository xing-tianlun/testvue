<template>
  <div>
    <h2>我是用户界面</h2>
    <p>我是用户界面的相关信息，嘿嘿嘿</p>
    <h2>{{userId}}</h2>
    <h2>{{$route.params.userId}}</h2>
  </div>
</template>

<script>
export default {
  name: "User",
  created() {
    console.log('User created')
  },
  destroyed() {
    console.log('User destroyed')
  },
  computed: {
    userId() {
      return this.$route.params.userId
    }
  }
}
</script>

<style scoped>

</style>

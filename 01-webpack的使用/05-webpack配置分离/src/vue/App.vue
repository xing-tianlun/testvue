<template>

  <div>
    <h2 class="title">{{message}}</h2>
    <button @click='btnClick'>按钮</button>
    <h2>{{name}}</h2>
    <Cpn/>
    <Abb/>
  </div>

</template>

<script>
import Cpn from './Cpn.vue'
import Abb from './Abb.vue'

export default {
  name: 'App',
  components: {
    Cpn,
    Abb
  },
  data () {
    return {
      message: 'hello webpack',
      name: 'xing'
    }
  },
  methods: {
    btnClick() {

    }
  }
}
</script>

<style scoped>
.title {
  color: green;
}
</style>
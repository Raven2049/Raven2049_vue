<template>
<div id="app">
  <head></head>
  <router-view />
</div>
</template>
<script>
import head from '@/components/common/head.vue'

export default {
  components: {}
}
</script>

<style lang="stylus">
#app
  font-family 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  text-align center
  color #2c3e50
</style>

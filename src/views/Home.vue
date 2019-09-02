<template>
  <div class="home">
    <div class="container"></div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
@Component({
  components: {}
})
export default class Home extends Vue {}
</script>
<style lang="stylus" scoped>
.container
  background-color #cc9ab5
</style>

<!--
 * @Description:
 * @Company: BEPAL
 * @Author: Raven
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2020-04-08 17:30:57
 -->
<template>
  <div class="bottom">
    <div></div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
@Component
export default class Bottom extends Vue {

}
</script>

<style lang="stylus" scoped>
.bottom
  position fixed
  bottom 0px
  left 0
  height 100px
  width 100%
  border-top 1px #ededed solid
  margin-top 20px
</style>

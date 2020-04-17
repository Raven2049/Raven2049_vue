<!--
 * @Description:
 * @Company: BEPAL
 * @Author: Raven
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2020-04-17 16:44:46
 -->
<template>
  <div id="app">
    <Nav />
    <div class="container clearfix">
      <router-view />
    </div>
    <Bottom />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Nav from "@/components/nav.vue";
import Bottom from "@/components/bottom.vue";

@Component({ components: { Nav, Bottom } })
export default class Home extends Vue {
  mounted() {}
}
</script>

<style lang="stylus" scoped>
.container
  width 80%
  margin 0 auto
</style>

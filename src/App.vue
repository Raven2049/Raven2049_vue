<!--
 * @Description:
 * @Company: BEPAL
 * @Author: Raven
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2020-04-09 16:50:46
 -->
<template>
  <div id="app">
    <Nav />
    <div class="container clearfix">
      <div class="view">
        <router-view />
      </div>
      <SideMenu class="sideBar" />
    </div>
    <Bottom />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Nav from "@/components/nav.vue";
import Bottom from "@/components/bottom.vue";
import SideMenu from "@/components/sideMenu.vue";

@Component({ components: { Nav, Bottom, SideMenu } })
export default class Home extends Vue {
  mounted() {}
}
</script>

<style lang="stylus" scoped>
.container
  width 80%
  margin 0 auto
  .view
    width 70%
    float left
  .sideBar
    width 30%
    float right
</style>

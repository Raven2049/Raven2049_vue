<!--
 * @Description:
 * @Company: BEPAL
 * @Author: Raven
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2020-04-09 16:33:30
 -->
<template>
  <div id="app">
    <Nav />
    <div class="view-container">
      <router-view />
    </div>
    <SideMenu class="sideBar" />
    <Bottom />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Nav from '@/components/nav.vue';
import Bottom from '@/components/bottom.vue';
import SideMenu from '@/components/sideMenu.vue';

@Component({ components: { Nav, Bottom, SideMenu } })
export default class Home extends Vue {
  mounted() {}
}
</script>

<style lang="stylus">
.view-container
  float left
.sideBar
  float right
</style>

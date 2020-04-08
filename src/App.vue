<!--
 * @Description:
 * @Company: BEPAL
 * @Author: Raven
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2020-04-08 17:29:05
 -->
<template>
  <div id="app">
    <Nav />
    <SideMenu />
    <router-view />
    <Bottom />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Nav from '@/components/nav.vue'
import Bottom from '@/components/bottom.vue'
import SideMenu from '@/components/side-menu.vue'

@Component({ components: { Nav, Bottom, SideMenu } })
export default class Home extends Vue {
  mounted() {}
}
</script>

<style lang="stylus"></style>

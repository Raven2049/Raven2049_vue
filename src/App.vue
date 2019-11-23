<template>
  <div id="app">
    <top />
    <sideMenu />
    <router-view />
    <bottom />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import top from '@/components/top.vue'
import bottom from '@/components/bottom.vue'
import sideMenu from '@/components/side-menu.vue'

@Component({ components: { top, bottom, sideMenu } })
export default class Home extends Vue {
  mounted() {}
}
</script>

<style lang="stylus"></style>

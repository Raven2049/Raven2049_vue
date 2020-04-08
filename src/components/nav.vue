<!--
 * @Description:
 * @Company: BEPAL
 * @Author: Raven
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2020-04-08 17:16:09
 -->

<template>
  <div class="nav">
    <div class="title">Raven'blog</div>
    <div class="tab-container flex-middle flex-center">
      <div class="tab">主页</div>
      <div class="tab">导航</div>
      <div class="tab">归档</div>
      <div class="tab">关于</div>
      <div class="tab">归档</div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Emit, Component } from 'vue-property-decorator';
@Component({})
export default class Nav extends Vue {
  time: number = 0;
  status: any = { display: false };
  @Emit()
  timeout() {}
  change() {}
  waitAll() {
    return Promise.all([
      this.wait5s(this.time),
      this.wait10s(this.time),
      this.wait15s(this.time)
    ]).then(() => {
      console.log('111');
    });
  }
  wait5s(time: Number) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(time);
      }, 5000);
    });
  }
  wait10s(time: Number) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(time);
      }, 10000);
    });
  }
  wait15s(time: Number) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(time);
      }, 15000);
    });
  }
  created() {
    this.timeout();
    this.waitAll();
  }
}
</script>

<style lang="stylus" scoped>
.nav
  color #666
  height 60px
  width 100%
  display flex
  border-bottom 1px #ededed solid
  justify-content space-around
  .title
    line-height 60px
  .tab-container
    .tab
      margin-right 30px
.test
  height 300px
  background black
</style>

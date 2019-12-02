
<template>
  <div class="top" id="top">
    <div class="title">Raven'blog</div>
    <div class="tab"></div>
  </div>
</template>

<script lang='ts'>
import { Vue, Emit, Component } from 'vue-property-decorator'
@Component({})
export default class Top extends Vue {
  time: number = 0
  status: any = { display: false }
  @Emit()
  timeout() {}
  change() {}
  waitAll() {
    return Promise.all([
      this.wait5s(this.time),
      this.wait10s(this.time),
      this.wait15s(this.time)
    ]).then(() => {
      console.log('111')
    })
  }
  wait5s(time: Number) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(time)
      }, 5000)
    })
  }
  wait10s(time: Number) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(time)
      }, 10000)
    })
  }
  wait15s(time: Number) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(time)
      }, 15000)
    })
  }
  created() {
    this.timeout()
    this.waitAll()
  }
}
</script>

<style lang='stylus' scoped>
.top
  height 60px
  width 100%
  background-color #776ea7
  background linear-gradient(to bottom, #999, #9f9f9f)
  display flex
  justify-content space-between
.test
  height 300px
  background black
</style>

<template>
  <div class="top flex-center" id="top">
    <span class="title">Raven'blog</span>
    <span class="tab">
      <span>首页</span>
      <span>我是？</span>
      <span>{{time}}</span>
    </span>
  </div>
</template>

<script lang='ts'>
export default {
  data () {
    return {
      time: 0
    }
  },
  methods: {
    timeout (): void {
      console.log(this.time)
      window.setInterval(() => {
        setTimeout(this.time++, 0)
      }, 1000)
    }
  },
  mounted (): void {
    console.log(this.time)
    this.timeout()
  }
}
</script>

<style lang='stylus' scoped>
.top
  height 60px
  width 100%
  background-color #776ea7
  // background linear-gradient(to bottom, #999, #9f9f9f)
</style>

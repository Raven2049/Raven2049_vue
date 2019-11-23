
<template>
  <div class="top flex-center" id="top">
    <span class="title">Raven'blog</span>
    <span class="tab">
      <span>首页</span>
      <span>我是？</span>
      <span class="fdsf">{{time}}</span>
    </span>
  </div>
</template>

<script lang='ts'>
import { Vue, Emit, Component } from 'vue-property-decorator'
@Component({})
export default class Top extends Vue {
  time: number = 0
  status: any = { display: false }
  @Emit()
  timeout() {
    window.setInterval(() => {
      setTimeout(() => {
        this.time++
      }, 0)
    }, 1000)
  }
  change() {
    this.status.display = this.status.display
  }
  created() {
    this.timeout()
  }
  mounted() {
    console.log(this.status)
    console.log(this.time)
  }
}
</script>

<style lang='css' scoped>
.top {
  height: 60px;
  width: 100%;
  background-color: #776ea7;
  background: linear-gradient(to bottom, #999, #9f9f9f);
}
.test {
  height: 300px;
  background: black;
}
</style>

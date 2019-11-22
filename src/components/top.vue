
<template>
  <div class="top flex-center" id="top">
    <span class="title">Raven'blog</span>
    <span class="tab">
      <span>首页</span>
      <span>我是？</span>
      <span class="fdsf">{{time}}</span>
      <button @click="change">221312</button>
      <div class="test" v-if="status.display"></div>
    </span>
  </div>
</template>

<script lang='ts'>
import { Vue, Emit, Component } from 'vue-property-decorator'
@Component({
  mounted() {
    console.log((this as any).time)
  }
})
export default class Top extends Vue {
  this = this as any
  time: Number = 0
  status: Object = { display: false }
  @Emit()
  timeout() {
    window.setInterval(() => {
      setTimeout(() => {
        ;(this as any).time++
      }, 0)
    }, 1000)
  }
  change() {
    ;(this as any).status.display = !(this as any).status.display
  }
  created() {
    this.timeout()
  }
}
// export default {
//   data() {
//     return {
//       time: 3,
//       status: { display: false }
//     }
//   },
//   mounted() {
//     window.setInterval(() => {
//       setTimeout(() => {
//         this.time++
//       }, 0)
//     }, 1000)
//   },
//   methods: {
//     change() {
//       this.status.display = !this.status.display
//     }
//   }
// }
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

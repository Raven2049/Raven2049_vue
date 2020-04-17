<!--
 * @Description:
 * @Company: BEPAL
 * @Author: Raven
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2020-04-17 17:15:31
 -->
<template>
  <div class="side-bar">
    <div class="name">最近更新</div>
    <div class="container" v-for="(item,index) in latestUpdate" :key="index">
      <div class="title">{{item.title}}</div>
      <div class="detail-info">
        <span class="abstract">{{item.editTime}}</span>
        <span class="type">分类:{{item.type}}</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
interface ItemType {
  title: string;
  type: string;
  editTime: string;
}
@Component({
  components: {}
})
export default class SideBar extends Vue {
  @Prop({
    type: Array,
    required: true,
    default: []
  })
  latestUpdate!: Array<ItemType>;
}
</script>

<style lang="stylus" scoped>
.side-bar
  width 200px
  .name
    font-size 18px
</style>

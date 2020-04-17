<!--
 * @Description:
 * @Company: BEPAL
 * @Author: Raven
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2020-04-17 17:08:38
 -->
<template>
  <div>
    <div class="container" v-for="(item,index) in dataList" :key="index">
      <div class="title">{{item.title}}</div>
      <div class="detail-info">
        <span class="create-time">发布日期：{{item.createTime}}</span>
        <span class="edit-time">最后编辑：{{item.editTime}}</span>
        <span class="type">分类{{item.type}}</span>
      </div>
      <div class="abstract" v-html="item.abstract"></div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
export interface ItemType {
  title: string;
  createTime: string;
  editTime: string;
  type: string;
  abstract: string;
}
@Component({
  components: {}
})
export default class ContentCard extends Vue {
  @Prop({
    type: Array,
    required: true,
    default: []
  })
  dataList!: Array<ItemType>;
}
</script>

<style lang="stylus" scoped>
.container
  border-bottom 1px solid #eeeeee
  padding-bottom 20px
  margin-bottom 20px
  .title
    font-size 18px
    font-weight bold
    color #444
    line-height 1.5
  .detail-info
    margin-bottom 20px
    span
      font-size 12px
      color #777
      margin-right 10px
      line-height 12px
  .abstract
    font-size 15px
    line-height 1.5
</style>

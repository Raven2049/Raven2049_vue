<!--
 * @Description:
 * @Company: BEPAL
 * @Author: Raven
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2020-04-09 17:33:17
 -->
<template>
  <div class="home">
    <div class="container">
      <ContentCard :dataList="dataList" />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import ContentCard, { dataType } from "@/components/contentCard.vue";
// import  from "@/components/contentCard.vue";
@Component({
  components: { ContentCard }
})
export default class Home extends Vue {
  dataList = [
    { title: "标题" },
    { createTime: "时间" },
    { editTime: "最后修改时间" },
    { author: "坐者" },
    { abstract: "摘要" }
  ];
}
</script>
<style lang="stylus" scoped>
.container
  height 80px
</style>

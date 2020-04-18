<!--
 * @Description:
 * @Company: BEPAL
 * @Author: Raven
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2020-04-18 15:33:44
 -->
<template>
  <div class="home">
    <div class="container">
      <ContentCard :dataList="dataList" />
    </div>
    <sideBar :latestUpdate="latestUpdate" class="sideBar" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import ContentCard, { ItemType } from "@/components/contentCard.vue";
import sideBar from "@/components/sideBar.vue";
@Component({
  components: { ContentCard, sideBar }
})
export default class Home extends Vue {
  dataList: Array<ItemType> = [
    {
      title: "很长的一大串总之这是标题",
      createTime: "2020/4/17",
      editTime: "2020/4/18",
      type: "工作",
      abstract: "总之发生了这样那样的<a href='/'>事情</a>"
    },
    {
      title: "很长的一大串总之这是标题",
      createTime: "2020/4/17",
      editTime: "2020/4/18",
      type: "工作",
      abstract: "总之发生了这样那样的<a href='/'>事情</a>"
    },
    {
      title: "很长的一大串总之这是标题",
      createTime: "2020/4/17",
      editTime: "2020/4/18",
      type: "工作",
      abstract: "总之发生了这样那样的<a href='/'>事情</a>"
    }
  ];
  latestUpdate = [
    {
      title: "很长的一大串总之这是标题",
      type: "工作",
      editTime: "2020/4/18"
    },
    {
      title: "很长的一大串总之这是标题",
      type: "工作",
      editTime: "2020/4/18"
    },
    {
      title: "很长的一大串总之这是标题",
      type: "工作",
      editTime: "2020/4/18"
    }
  ];
  mounted() {
    fetch("https://www.baidu.com").then(res => {
      console.log(res);
    });
  }
}
</script>
<style lang="stylus" scoped>
.home
  padding-top 20px
  .container
    width 70%
    float left
  .sideBar
    width 30%
    float right
</style>

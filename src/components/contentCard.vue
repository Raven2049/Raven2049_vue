<!--
 * @Description:
 * @Company: BEPAL
 * @Author: Raven
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2020-04-09 17:31:16
 -->
<template>
  <div class="container">
    <div v-for="(item,index) in dataList" :key="index">
      <div>{{item.title}}</div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
interface itemType {
  title?: string;
}
export interface dataType {
  dataList?: Array<itemType>;
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
  dataList!: dataType;
}
</script>

<style></style>

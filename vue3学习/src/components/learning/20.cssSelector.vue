<template>
  <div>
    <el-input v-model="inputValue" class="ipt"></el-input>
    <slot></slot>
    <div class="btn">动态css</div>
    <div :class="xxx.divs">css module</div>
    <div class="i-ic-baseline-backspace text-3xl bg-green-500" />
    <div m="20">hide on bush</div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from "vue";
let inputValue = ref<any>("");
const color = ref<string>("red");
</script>
<style module="xxx">
.divs {
  color: pink !important;
}
</style>
<style scoped lang="less">
div {
  color: v-bind(color);
}
.ipt {
  :deep(.el-input__inner) {
    background: red;
  }
}
// :slotted(.slot){
//     // 插槽样式
// }

// :global(){
//     //全局选择器
// }
</style>

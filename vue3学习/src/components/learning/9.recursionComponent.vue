<template>
  <div v-for="item in num">
    {{ item }}
    <div>
      <recursionComponent v-if="item > 1" :num="item - 1" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from "vue";
type props = {
  num: number;
};
withDefaults(defineProps<props>(), { num: 5 });
</script>
// 定义递归组件
<script lang="ts">
export default {
  name: "recursionComponent",
};
</script>
<style scoped></style>

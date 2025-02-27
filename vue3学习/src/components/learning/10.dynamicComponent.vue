<template>
  <div>
    <button
      v-for="(item, index) in data"
      :key="index"
      @click="target.comName = item.comName"
    >
      {{ item.name }}
    </button>
  </div>
  <component :is="target.comName"></component>
</template>

<script setup lang="ts">
import { ref, reactive, markRaw } from "vue";
import A from "./9.recursionComponent.vue";
import B from "./8.valueTransfer.vue";
import C from "./7.lifeCycle.vue";
type tabs = {
  name: string;
  comName: any;
};
type com = Pick<tabs, "comName">;
//markRaw会在属性上添加 __v-skip 跳过代理
const data = reactive<tabs[]>([
  { name: "a", comName: markRaw(A) },
  { name: "b", comName: markRaw(B) },
  { name: "c", comName: markRaw(C) },
]);
let target = reactive<com>({ comName: data[0].comName });
</script>
<style scoped></style>

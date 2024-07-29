<template>
  <div>{{ props.data }}</div>
  <el-button type="primary" @click="emitData">emit</el-button>
  <child2 v-bind="attrs"></child2>
  <div style="display: flex">
    <div style="white-space: nowrap">父传子v-model</div>
    <el-input v-model="datas"></el-input>
  </div>
  <el-input v-model="normalData"></el-input>
  <slot></slot>
</template>
<script setup lang="ts">
import child2 from "./child2.vue";
import { useVModel } from "@vueuse/core";

//props
type innerProps = {
  data?: string;
  sonModel?: string;
};
const props = withDefaults(defineProps<innerProps>(), {
  data: "self",
  // sonModel: "selfModelData",
  sonModel: "string",
});

//v-model
// const sonCopyModel = ref<string>(props.sonModel);
// watch(sonCopyModel, (newVal) => {
//   console.log("sonCopyModel", newVal);
//   emit("postData", newVal);
// });

//emit
const emit = defineEmits<{
  (e: "postData", data: string): void;
  (e: "update:sonModel", data: string): void;
  (e: "update:data", data: string): void;
}>();
const emitData = () => emit("postData", "child1");

//attrs
const attrs = useAttrs();

// ref expose
const sonData = ref<string>("xxx");
console.log("son", attrs);
defineExpose({
  sonData,
});

const datas = useVModel(props, "sonModel", emit);
const normalData = useVModel(props, "data", emit);
</script>
<style scoped>
:slotted(.testSlot) {
  color: pink;
}
</style>

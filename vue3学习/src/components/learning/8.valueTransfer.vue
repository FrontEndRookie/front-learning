<template>
  <div>
    {{ name }}
    <br />
    <button @click="transfer">transferFather</button>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from "vue";
type Props = {
  name?: string; //?表示可选
  list?: number[];
};
withDefaults(defineProps<Props>(), {
  name: "faker",
  list: () => [1, 2, 3], //引用类型需要用函数返回
});
const emit = defineEmits<{ (e: "test", msg: string): void }>();
const transfer = () => {
  emit("test", "hide on bush");
};
const sonExpose = ref("0");
//通过defineExpose暴露出去的变量可以在父元素通过ref获取
defineExpose({
  sonExpose,
});
</script>
<style scoped></style>

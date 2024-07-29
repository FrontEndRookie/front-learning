<template>
  <div class="loading" v-if="isShow">正在努力加载</div>
</template>

<script setup lang="ts">
import { ref, reactive } from "vue";
const isShow = ref<boolean>(false);
const show = () => {
  console.log("zl");
  isShow.value = true;
};
const hide = () => (isShow.value = false);
defineExpose({
  isShow,
  show,
  hide,
});
</script>
<style scoped>
.loading {
  width: 100vw;
  height: 100vh;
  background-color: aliceblue;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
}
</style>

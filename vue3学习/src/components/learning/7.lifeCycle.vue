<template>
  <div class="myDiv" ref="myDiv" @click="changeText">{{ divText }}</div>
</template>

<script setup lang="ts">
import {
  ref,
  reactive,
  onBeforeMount,
  onMounted,
  onBeforeUpdate,
  onUpdated,
  onBeforeUnmount,
  onUnmounted,
  onRenderTracked,
  onRenderTriggered,
} from "vue";
console.log("setUp"); //替换之前beforeCreate Created
const myDiv = ref<HTMLDivElement>();
const divText = ref<string>("111");
const changeText = () => {
  divText.value = "222";
};
onBeforeMount(() => {
  console.log("创建之前----");
  console.log(document.querySelectorAll(".myDiv"));
}); //beforeMount
onMounted(() => {
  console.log("已创建----");
  console.log(document.querySelectorAll(".myDiv"));
}); //Mounted
onBeforeUpdate(() => {
  console.log("更新之前----", myDiv.value?.innerText);
}); //beforeUpdate
onUpdated(() => {
  console.log("已更新-----", myDiv.value?.innerText);
}); //Updated
onBeforeUnmount(() => {
  console.log("销毁之前----");
}); //beforeDestroy
onUnmounted(() => {
  console.log("已销毁-----");
}); //destroyed

//两个调试的生命周期
onRenderTracked((e) => {
  console.log("onRenderTracked", e);
});
onRenderTriggered((e) => {
  console.log("onRenderTriggered", e);
});
</script>
<style scoped></style>

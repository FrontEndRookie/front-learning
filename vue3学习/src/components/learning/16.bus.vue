<template>
  <div></div>
</template>

<script setup lang="ts">
import { ref, reactive, getCurrentInstance } from "vue";
const instance = getCurrentInstance();
const emit = () => {
  instance?.proxy?.$Bus.emit("name", "value");
};
const on = () => {
  instance?.proxy?.$Bus.on("name", (val) => {});
  // 可以同时监听多条数据
  instance?.proxy?.$Bus.on("*", (type, val) => {
    // type 为当前触发的emit方法名字 val为方法的值
  });
};
instance?.proxy?.$Bus.off("name", (val) => {}); //删除事件
instance?.proxy?.$Bus.all.clear(); //删除所有事件
</script>
<style scoped></style>

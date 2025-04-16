<template>
  <el-button @click="changeBtn"> change</el-button>
  <Suspense v-if="showAsync">
    <template #default>
      <!-- 异步加载完的组件 -->
      <Child />
    </template>
    <template #fallback> loading </template>
  </Suspense>
</template>

<script setup lang="ts">
import { ref, reactive, defineAsyncComponent } from "vue";
const Child = defineAsyncComponent(() => import("./1.ref.vue")); //异步挂载
//在使用vue-cli构建项目，在默认情况下，执行 npm run build/yarn build会将所有的js打包成一个整体，
//vue为单页面应用，同步加载大量的页面代码会导致页面长时间处于空白情况。
//使用该方法来异步加载所需页面来提升加载速度。
const showAsync = ref<boolean>(false);
const changeBtn = () => {
  showAsync.value = true;
};
</script>
<style scoped></style>

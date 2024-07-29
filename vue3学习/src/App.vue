<script setup lang="ts">
import "animate.css";
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import Learning from "./components/learning/23.pinia.vue";
const getSonTransfer = (val: string) => {
  console.log("得到子组件消息", val);
};
console.log(import.meta.env);
// const instance = getCurrentInstance()
// instance?.proxy?.$myLoading.show();
</script>

<template>
  <!--  
  <Learning msg="Vite + Vue" @test="getSonTransfer" name="faker"/> -->
  <router-view #default="{ Component, route }">
    <!-- 使用过渡动效 template必须要只有一个根元素 -->
    <transition
      :enter-active-class="`animate__animated ${route.meta.transition}`"
    >
      <component :is="Component"></component>
    </transition>
  </router-view>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>

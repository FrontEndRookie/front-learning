<template>
  <transition name="fade">
    <div v-if="show">hide on bush</div>
  </transition>
  <!-- 使用animate.css -->
  <transition
    :duration="{ enter: 1000, leave: 2000 }"
    enter-active-class="animate__animated animate__bounceInUp"
    leave-active-class="animate__animated animate__bounceOutUp"
  >
    <div v-if="show">hide on bush</div>
  </transition>
  <!-- 使用transition 生命周期 -->
  <!-- <transition 
        @before-enter="beforeEnter"
        @enter="enter"
        @after-enter="afterEnter"
        @enter-cancelled="enterCancel"
    >
    <div v-if="show" >
     hide on bush
    </div>
    </transition> -->

  <!-- 首次进页面加载 -->
  <transition
    appear
    appear-active-class="animate__animated animate__fadeInBottomRight"
  >
    <div>hide on bush</div>
  </transition>
  <button @click="show = !show">change</button>
</template>

<script setup lang="ts">
import "animate.css";
import { ref, reactive } from "vue";
const show = ref<boolean>(false);
const beforeEnter = (el: Element) => {
  console.log("进入前");
};
const enter = (el: Element, done: Function) => {
  console.log("过渡曲线");
  setTimeout(() => {
    done();
  }, 6000);
};
const afterEnter = (el: Element) => {
  console.log("进入后");
};
const enterCancel = (el: Element) => {
  console.log("取消进入");
};
</script>
<style scoped>
.fade-enter-from {
  opacity: 0.3;
  font-size: 12px;
  transform: translateY(20px);
}
.fade-enter-active {
  transition: all 1.5s ease;
}
.fade-ender-to {
  font-size: 16px;
}
.fade-leave-from {
  font-size: 16px;
}
.fade-leave-active {
  transition: all 1.5s ease;
}
.fade-leave-to {
  opacity: 0.3;
  font-size: 12px;
  transform: translateY(-20px);
}
</style>

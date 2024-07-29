<template>
  <div class="wraps">
    <div ref="bar" class="bar"></div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
let speed = ref<number>(1);
let bar = ref<HTMLElement>();
let timer = ref<number>(0);
const startLoading = () => {
  let dom = bar.value as HTMLElement;
  console.log(dom);
  speed.value = 1;
  if (dom) {
    timer.value = window.requestAnimationFrame(function fn() {
      console.log(speed.value);
      if (speed.value < 90) {
        speed.value += 1;
        dom.style.width = speed.value + "%";
        timer.value = window.requestAnimationFrame(fn);
      } else {
        speed.value = 1;
        window.cancelAnimationFrame(timer.value);
      }
    });
  }
};

const endLoading = () => {
  let dom = bar.value as HTMLElement;
  if (dom) {
    setTimeout(() => {
      window.requestAnimationFrame(() => {
        speed.value = 100;
        dom.style.width = speed.value + "%";
      });
    }, 500);
  }
};

defineExpose({
  startLoading,
  endLoading,
});
</script>

<style scoped lang="less">
.wraps {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 2px;
  .bar {
    height: inherit;
    width: 0;
    background: blue;
  }
}
</style>

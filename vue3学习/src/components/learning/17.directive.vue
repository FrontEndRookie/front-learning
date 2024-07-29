<template>
  <div v-move:faker.forever="{ background: 'red' }">hide on bush</div>
  <div
    v-drag
    style="
      width: 100px;
      height: 100px;
      backgroundcolor: pink;
      position: absolute;
    "
  >
    faker
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, Directive, DirectiveBinding } from "vue";
type Dir = {
  background: string;
};
const vMove: Directive = {
  created() {},
  beforeMount() {},
  mounted(el: HTMLElement, dir: DirectiveBinding<Dir>) {
    console.log(dir);
    el.style.background = dir.value.background;
  },
  //传的value值发生变化触发
  beforeUpdate() {},
  updated() {},
  // 元素显隐触发
  beforeUnmount() {},
  unmounted() {},
};
//如果只关心mounted和updated，可以简写
// const vMove:Directive = (el:HTMLElement,dir:DirectiveBinding<Dir>)=>{
//     el.style.background = dir.value.background
// }

const vDrag: Directive = (el: HTMLElement, dir: DirectiveBinding) => {
  let moveElement: HTMLElement = el as HTMLElement;
  const mouseDown = () => {
    const move = (e: MouseEvent) => {
      console.log(e);
      el.style.left = e.clientX + "px";
      el.style.top = e.clientY + "px";
    };
    document.addEventListener("mousemove", move);
    document.addEventListener("mouseup", () => {
      document.removeEventListener("mousemove", move);
    });
  };
  moveElement.addEventListener("mousedown", mouseDown);
};
</script>
<style scoped></style>

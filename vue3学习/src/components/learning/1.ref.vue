<template>
  <div>
    {{ Man }}
    <button ref="buttonRef" @click="changeName">changeName</button>
    <br />
    {{ Mans }}
    <button @click="shallowChange">shallowChange</button>
    <br />
    {{ testMyRef }}
    <button @click="changeMyRef">myRefChange</button>
  </div>
</template>

<script setup lang="ts">
import { ref, isRef, shallowRef, triggerRef, customRef } from "vue";
//ref可以直接获取dom元素
const buttonRef = ref<HTMLElement>();
console.log(buttonRef);

type People = {
  name: string;
};
const Man = ref<People>({ name: "faker" });
const Mans = shallowRef<People>({ name: "faker2" });
// shallowRef是浅层次的响应 必须要在value层进行修改
const changeName = () => {
  Man.value.name = "hide on bush";
  //Mans.value.name = 'hide on bush2' //不能和ref同时修改，会影响shallowref造成视图更新
  console.log(isRef(Man));
  console.log(buttonRef);
};
const shallowChange = () => {
  //shallowRef只会对其传入的值进行浅层次的响应式处理
  // Mans.value.name = "hide on bush 2"; //不生效
  // triggerRef(Mans); //更新ref
  //对象需要重新赋值 或者triggerRef更新下ref否则不生效
  // Mans.value = {
  //   name: "hide on bush 2",
  // };
};

//自定义ref
function myRef<T>(value: T) {
  let timer: ReturnType<typeof setTimeout> | null;
  return customRef((track, trigger) => {
    return {
      get() {
        track();
        return value;
      },
      set(newVal) {
        clearTimeout(timer!);
        timer = setTimeout(() => {
          console.log("chufa");
          value = newVal;
          trigger();
          timer = null;
        }, 500);
      },
    };
  });
}
const testMyRef = myRef<string>("faker");
const changeMyRef = () => {
  testMyRef.value = "hide on bush";
  console.log(testMyRef);
};
</script>
<style scoped></style>

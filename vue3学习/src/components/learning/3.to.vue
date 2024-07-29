<template>
  <div>
    {{ name }}
    <button @click="changeToRef">changeToRef</button>
  </div>

  <div>
    {{ personRaw }}
    <button @click="toRawTest">toRawTest</button>
    <button @click="changeRe">change</button>
  </div>
</template>

<script setup lang="ts">
import { toRef, reactive, toRefs, toRaw } from "vue";
//toRef可以单独提出一个响应式对象的一个属性 （对非响应式对象无效）
const person = reactive({ name: "faker", age: 27 });
const names = toRef(person, "name");
const changeToRef = () => {
  names.value = "hide on bush";
};

//toRefs就是遍历后设置响应式对象中的多个属性
const { name, age } = toRefs(person);

//toRaw用于脱离响应式对象变成原始对象
let personRaw: any = reactive({});
const toRawTest = () => {
  personRaw = toRaw(personRaw);
  console.log(personRaw);
};
const changeRe = () => {
  personRaw.name = "修改无效";
};
</script>
<style scoped></style>

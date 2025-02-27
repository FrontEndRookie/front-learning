<template>
  <div>
    <childa
      ref="childaData"
      :data="data"
      :data2="data2"
      :data3="data3"
      @update:data="getSonData"
      @test="getGrandSonData"
      v-model:sonModel="testModel"
    >
      <div class="testSlot">父组件插槽</div>
    </childa>
    <div>父传子data:{{ data }}</div>

    <div>父传子v-model:{{ testModel }}</div>
    <button @click="getData">get ChildA Ref</button>
  </div>
</template>
<script setup lang="ts">
import childa from "./child1.vue";
import type { InjectionKey } from "vue";
const testMethod = (e: MouseEvent) => {};
//provide
provide("pro", { message: "test" });

const data = ref<string>("aaa");
const data2 = ref<string>("aaa");
const data3 = ref<string>("aaa");
// ref获取
const childaData = ref<InstanceType<typeof childa> | null>(null);
const debounce = (fn: Function, wait = 1000) => {
  let timer: ReturnType<typeof setTimeout>;
  return function () {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(this, arguments);
    }, wait);
  };
};
const getData = debounce(() => {
  console.log(childaData.value?.sonData);
});
defineEmits<{ (e: "a", data: string): void }>();
// $listeners
const getGrandSonData = (e: string) => {
  console.log("fromGrandSon $listeners", e);
};

//v-models
const testModel = ref<string>("123");
const getSonData = (val: string) => {
  console.log(val);
  // testModel.value = val;
};
</script>
<style scoped>
.testSlot {
  color: red;
}
</style>

<script></script>

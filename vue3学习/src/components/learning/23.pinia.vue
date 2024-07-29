<template>
  <div>
    <div @click="changePina">pinia:{{ test.name }} toRefs:{{ name }}</div>
    <div @click="getAction">testAction:{{ test.user.name }}</div>
    <div>testGetters:{{ test.setName }}</div>
    <el-button type="primary" @click="resetPinia">重置pinia</el-button>
  </div>
</template>

<script setup lang="ts">
import { useTestStore } from "../../store";
import { ref, reactive } from "vue";
import { storeToRefs } from "pinia";
const test = useTestStore();
const { name } = storeToRefs(test);
const changePina = () => {
  // 修改pinia state方式
  // test.name += '1' //1.pinia可以直接修改
  //2.dispatch
  // test.$patch({name:'faker'}) //批量修改
  // test.$patch((state)=>{
  //     state.name='faker'
  // })
  //3.$state  必须修改整个对象
  // test.$state = {
  //     name:'faker'
  // }
  //4.调用action
  test.changeName();
};
const getAction = () => {
  test.getLogin();
};

const resetPinia = () => {
  test.$reset();
};

test.$subscribe((args, state) => {
  //state变化时触发
  console.log(args, state);
});

test.$onAction((args) => {
  //action调用时触发
  console.log(args);
  args.after(() => {
    console.log("after");
  });
});
</script>
<style scoped></style>

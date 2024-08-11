<template>
  <div>
    counter:{{ counter }}
    <el-input v-model="counter"></el-input>
    <el-button @click="startScope">start</el-button>

    <el-button @click="stopScope">stop</el-button>
    <el-button @click="stopAllScope">stopAll</el-button>
  </div>
</template>
<script setup>
const counter = ref(1);

// 定义侦听管家实例
let scope = "";

const startScope = () => {
  scope = effectScope();
  scope.run(() => {
    // 把计算属性、监听事件放置在这里
    watch(counter, () => console.log(counter.value));
    watchEffect(() => console.log("Count: ", counter.value));
    //停止时触发
    onScopeDispose(() => {
      console.log("scope disopose");
    });
  });
};
// 处理掉当前作用域内的所有 effect
const stopScope = () => {
  scope.stop(); //停止监听
};

// 获取当前侦听实例
const allScope = getCurrentScope();
// 执行 allScope.stop()时会触发 onScopeDispose 事件
// 当前页面或组件注销时会触发 onScopeDispose 事件
onScopeDispose(() => {
  console.log("已停止所有侦听");
  // to do...
});

//触发 onScopeDispose 事件
const stopAllScope = () => {
  allScope.stop();
};
</script>
<style lang="scss" scoped></style>

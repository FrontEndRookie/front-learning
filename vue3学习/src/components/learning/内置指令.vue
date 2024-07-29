<template>
  <div>
    <!-- 控制子项重新渲染 -->
    <div v-memo="[memoValue]">
      <div v-for="(item, index) in testMemoData">{{ item }} -- {{ index }}</div>
    </div>
    <el-button @click="changeMemo">changeMemo</el-button>
    <el-button @click="changeData">changeData</el-button>

    <!-- v-pre -->
    <div v-pre>
      {{ 原样输出 }}
      <div>
        {{ 子元素也原样输出 }}
      </div>
    </div>
  </div>
</template>

<script setup>
const memoValue = ref(1);
const changeMemo = () => {
  memoValue.value++;
};
const changeData = () => {
  testMemoData.value.push(5);
};

const testMemoData = ref([1, 2, 3, 4]);
</script>

<style></style>

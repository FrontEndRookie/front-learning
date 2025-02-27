<template>
  <div>
    {{ test }}
    <son v-model:test="test"></son>
  </div>
</template>
<script setup lang="ts">
import son from "./son.vue";
const test = ref("0");
</script>
<style scoped lang="scss"></style>

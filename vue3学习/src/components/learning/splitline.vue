<template>
  <splitpanes style="height: 400px; width: 100vw">
    <pane min-size="20">1</pane>
    <pane>
      <splitpanes horizontal>
        <pane size="3">2</pane>
        <pane size="3" v-if="type">3</pane>
        <pane :size="type ? 4 : 7">4</pane>
      </splitpanes>
    </pane>
    <pane>5</pane>
  </splitpanes>
  <el-button @click="type = !type"> {{ type }}change </el-button>
</template>
<script setup>
import { Splitpanes, Pane } from "splitpanes";
import "splitpanes/dist/splitpanes.css";
const type = ref(true);
</script>
<style>
.splitpanes__pane {
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: Helvetica, Arial, sans-serif;
  color: pink;
  /* font-size: 5em; */
}
</style>

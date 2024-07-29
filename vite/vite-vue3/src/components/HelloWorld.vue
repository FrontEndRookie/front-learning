<template>
  <div>
    <input type="text" style="border: 1px solid green; width: 200px" />
    <div>testswww</div>
  </div>
</template>

<script setup lang="ts">
import { defineProps, reactive } from 'vue'
import app from '../App.jsx?url'
import app2 from '../App.jsx?raw'
console.log(app)
console.log(app2)
interface A {
  color: string
}
const aa: A = 1
console.log(aa)
defineProps({
  msg: String,
})

const state = reactive({ count: 0 })
</script>

<style scoped>
a {
  color: #42b983;
}
</style>

<template>
    <div>
        <button @click="add">add</button>
    </div>
    <h2>
        {{count}}
    </h2>
</template>
    
<script setup lang='ts'>
import { $ref, $$, $ } from 'vue/macros'
let count = $ref(0)
 
const add = () => {
     count++
}
// watch(count,(val)=>{console.log(val)}) 会不生效
watch($$(count),(val)=>{console.log(val)}) //可以使用$$函数解决

const test = reactive({name:'樱纾'}) //$可以代替 toRefs实现结构
const { name } = $(test)
console.log(test)
</script>
    
<style>
</style>
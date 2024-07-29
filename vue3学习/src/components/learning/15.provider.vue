<template>

 <div></div>

</template>

<script setup lang='ts'>
import { ref, reactive,provide ,inject} from 'vue'
import type {Ref} from 'vue'
    const colorVal = ref<string>('red')
    // 注入
    provide('color',colorVal)
    //读取 值可以被子组件修改
    const colorRead = inject<Ref<string>>('color')
</script>
<style scoped>
 div{
    color:v-bind(colorVal)
 }
</style>
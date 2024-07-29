<template>

 <div>
    <img id="img" src="../../assets/vue.svg" alt="">
 </div>

</template>

<script setup lang='ts'>
import { ref, reactive } from 'vue'
import useBase from '../../hooks'
useBase({el:'#img'}).then(res=>{console.log(res.baseUrl)})
</script>
<style scoped>

</style>
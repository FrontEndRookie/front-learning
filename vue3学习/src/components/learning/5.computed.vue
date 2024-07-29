<template>

 <div>
    <input v-model="text1" type="text">
    <input v-model="text2" type="text">
    <br>
    {{computedText}}
    <br>
    {{computedText2}}
    <el-button @click="setComputed">setComputed</el-button>
 </div>

</template>

<script setup lang='ts'>
import { ref, reactive, computed  } from 'vue'
    const text1 = ref('123')
    const text2 = ref('456')
    const computedText = computed(()=>{
        return text1.value + '----' + text2.value
    })

    const computedText2 = computed({
        get(){
            return text1.value + '----' + text2.value
        },
        set(val){
            console.log(val)
            text1.value = val
            text2.value = val+'789'
        }
    })
    const setComputed = ()=>{
        computedText2.value = '2'
    }
</script>
<style scoped>

</style>
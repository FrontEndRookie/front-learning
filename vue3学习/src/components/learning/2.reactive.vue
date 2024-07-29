<template>

 <div>
   <form >
        <input type="text" v-model="form.age">
        <button @click.prevent="getFormData">提交</button>
   </form>
   <div v-for="(item,index) in list" :key="index">
        <div>{{item}}</div>
   </div>
   <button @click="addList">添加</button>
 </div>
 <div>
    {{testReadOnly}}
    <button @click="changeReadOnly">changeReadOnly</button>
 </div>
 <div>
    {{testShallow}}
    <button @click="changeShallow">changeShallow</button>
 </div>
</template>

<script setup lang='ts'>
import { ref, reactive, readonly, shallowReactive } from 'vue'
    //1.ref 支持所有类型 reactive 适用引用类型 Array Object Map Set等
    //2.ref取值和赋值都需要加.value reactive不需要
    //3.reactive对象不能直接赋值，否则会破坏响应式对象
    let form = reactive({
        name:'faker',
        age:27
    })
    const getFormData = ()=>{
        console.log(form)
        form.age=28
    }

    let list = reactive<String[]>([])
    let addList = ()=>{
        list.push('skt','t1')
    }
    const testReadOnly = readonly(reactive({name:'faker'}))
    const changeReadOnly = ()=>{
        // testReadOnly.name = 'xxx' //编译阶段就会报错
    }

    const testShallow = shallowReactive({person:{name:'xx'}})
    const changeShallow = ()=>{
        testShallow.person.name = 'mmm' //shallowReactive 和shallowRef 一样都是浅层次的 shallowReactive只到第一层（改testShallow.person有效 ）
        //list=['a'] //同理 和reactive一起修改时会被影响
    }
</script>
<style scoped>

</style>
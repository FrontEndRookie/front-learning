<script setup lang="ts">
import { ref } from 'vue'
   const message: Array<number> = [1,2,3]
   const message2: string = 'Hide on Bush'
    const styleControl: boolean = false
   type Style={ color:string,height:string}
   const jsStyle: Style = {
    color:'pink',
    height:'40px'
   }
   type ObjStyle = {
    extra:boolean,
    fExtra:boolean
   }
   const myObjStyle: ObjStyle = {
    extra:true,
    fExtra:true
   }
   const bindData = ref(0)
</script>

<template>
<!-- {{message.join('')}} -->
<!-- v-text标签中间不能加任何东西包括注释 -->
  <div :class="['extra']" :style="jsStyle" v-text="message2"></div>
  <div :class="[styleControl?'extra':'fExtra']" :style="jsStyle">
    {{message2}}
  </div>
  <div :class="myObjStyle">{{message2}}</div>
  <input type="text" v-model="bindData">
  <div>{{bindData}}</div>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
.extra {
  font-size: 30px;
}
.fExtra {
  font-weight: 800;
}
</style>

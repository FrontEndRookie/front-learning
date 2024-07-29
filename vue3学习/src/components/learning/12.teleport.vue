<template>

 <div>
    <Teleport to="body" :disabled="true"> 
        <!-- to为传送内容 disable为是否生效 -->
        <div>传送内容</div>
    </Teleport>
 </div>

</template>

<script setup lang='ts'>
import { ref, reactive } from 'vue'

</script>
<style scoped>

</style>
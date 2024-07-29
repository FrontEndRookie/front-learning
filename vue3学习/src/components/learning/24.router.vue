<template>
  <div>
    <div>
      <!-- 跳转方式1 -->
      <router-link replace :to="{ name: 'pinia' }"> 跳转到pinia</router-link>
      <!-- 设置replace属性不保留历史记录 -->
      <br />
      <!-- 方式2 （会刷新页面） -->
      <a href="/">a标签跳转</a>
    </div>
    <!-- 编程式导航 -->
    <el-button @click="jumpPage('/pinia')">跳转</el-button>

    <!-- <div>
    我是子路由  
</div> -->
    <!-- <router-view></router-view> -->
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from "vue";
import { useRouter, useRoute } from "vue-router";
const router = useRouter();
const route = useRoute();
const jumpPage = (url: string) => {
  //字符串
  // router.push(url)
  //对象
  // router.push({path:url,query:{}})
  //query路由传参
  //获取query参数 route.query.xxx

  //命名式
  router.push({ name: "pinia", params: {} });
  //params路由传参 必须使用name 不能使用path
  //params存在内存中，刷新后会丢失值
  //获取同query route.params.xxx

  // 跳转会留下历史记录，可以使用go和back函数
  // router.go(1)
  // router.back()
};

//添加删除获取路由
// const routerOperate = ()=>{
//     //添加
//     router.addRoute({ path: '/about', name: 'about', component: About })
//     // 这将会删除之前已经添加的路由，因为他们具有相同的名字且名字必须是唯一的
//     router.addRoute({ path: '/other', name: 'about', component: Other })
//     router.addRoute({ path: '/about', name: 'about', component: About })
//     // 删除路由
//     router.removeRoute('about')

//     //获取路由
//     router.getRoutes()
// }
</script>
<style scoped></style>

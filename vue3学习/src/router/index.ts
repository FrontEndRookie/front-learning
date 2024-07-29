// import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
// declare module "vue-router" {
//   // 使用TS扩展
//   // 如果不使用扩展 将会是unknow 类型
//   interface RouteMeta {
//     title?: string;
//     transition?: string;
//   }
// }
// export const AsyncRoutes: Array<RouteRecordRaw> = [
//   {
//     path: "/asyncRoute",
//     name: "pinia",
//     meta: {
//       title: "title",
//       icon: "",
//       transition: "animate__bounceIn",
//     },
//     component: import("../components/learning/23.pinia.vue"),
//   },
// ];
export const routes = [
  {
    path: "/router",
    name: "router",
    //重定向
    // 写法1
    // redirect:'/router/a',
    //写法2
    // redirect:{path:'/router/a'},
    //写法3
    // redirect:to=>{
    //     console.log('父路由信息',to)
    //     return '/router/a'
    // },

    //别名
    alias: ["/routerAnthor"],
    component: import("../components/learning/24.router.vue"),
    // 路由元信息
    // 路由元信息可以在路由中附加自定义的数据
    meta: {
      title: "title",
      icon: "",
      transition: "animate__fadeInRightBig",
    },
    children: [
      {
        path: "pinia",
        name: "pinia",
        component: () => import("../components/learning/23.pinia.vue"),
      },
      {
        path: "a",
        name: "a",
        component: {
          default: () => import("../components/learning/22.响应式语法糖.vue"),
          another: () => import("../components/learning/21.h-function.vue"), //命名视图 通过router-view上的name属性控制显示
        },
      },
    ],
  },
  {
    path: "/",
    name: "test",
    component: import("../components/learning/14.transitionGroup.vue"),
    meta: {
      title: "title",
      icon: "",
      transition: "animate__fadeInLeftBig",
    },
  },
  {
    path: "/anpinia", //动态路由可以用来保留参数，使params传参不会刷新后丢失数据
    name: "pinia",
    meta: {
      title: "title",
      icon: "",
      transition: "animate__bounceIn",
    },
    component: import("../components/learning/23.pinia.vue"),
  },
];

// const router = createRouter({
//   history: createWebHistory(),
//   scrollBehavior: (to, form, savePosition) => {
//     if (savePosition) {
//       return savePosition;
//     } else {
//       return {
//         top: 0,
//       };
//     }
//   },
//   routes,
// });

// let routeFlag = false;
// router.beforeEach(async (to, from, next) => {
//   if (routeFlag) next();
//   routeFlag = true;
//   await new Promise((resolve) => {
//     setTimeout(() => {
//       resolve(1);
//     }, 500);
//   });
//   router.addRoute(AsyncRoutes[0]);
//   if (to.path == "/404" && to.redirectedFrom) {
//     next({ path: to.redirectedFrom.fullPath, replace: true });
//   } else {
//     next({
//       ...to, // 重新进入
//       replace: true, // 不保存本次进入页面的路由历史记录
//     });
//   }
// });
// export default router;

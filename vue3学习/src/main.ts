import { createApp, createVNode, render, getCurrentInstance } from "vue";
// import "./style.css";
import App from "./App.vue";
import loading from "./components/vuePlugin";
import ElementPlus from "element-plus";
import { createPinia } from "pinia";
import "element-plus/dist/index.css";
import "uno.css";
import { routes } from "./router";
import mitt from "mitt";
import { Updater } from "./utils/judge";
import { App as typeApp } from "vue";
import loadingBar from "./components/learning/loadingBar.vue";
import viteSSR, { ClientOnly } from "vite-ssr";
import { createHead } from "@vueuse/head";

const Vnode = createVNode(loadingBar);
// const selfLoadingBar = {
//   install(app: typeApp) {
//     render(Vnode, document.getElementById("loadingBar") as HTMLElement);
//   },
// };
// app.use(selfLoadingBar);
// Vnode.component?.exposed?.startLoading();

// //实例化该类
// const up = new Updater({
//   timer: 2000,
// });
// //未更新通知
// up.on("no-update", () => {
//   console.log("未更新");
// });
// //更新通知
// up.on("update", () => {
//   console.log("更新了");
// });

const Mit = mitt();
export default viteSSR(
  App,
  { routes: routes },
  ({ app, url, router, isClient, initialState, initialRoute }) => {
    const store = createPinia();
    app.use(ElementPlus);
    app.use(store);
    // // app.use(loading);

    app.config.globalProperties.$Bus = Mit;
    app.config.globalProperties.$addNum = {
      addWord<T>(str: T): string {
        return "添加" + str;
      },
    };
    const head = createHead();
    app.use(head);

    const baseUrl = isClient ? "" : url.origin;
    app.component(ClientOnly.name, ClientOnly);
    router.beforeEach(async (to, from, next) => {
      if (!!to.meta.state && (!import.meta.env.DEV || import.meta.env.SSR)) {
        // This route has state already (from server) so it can be reused.

        return next();
      }
      // console.log(to, 123);
      // console.log("main");
      //
      // if(){}else{next('/')} 设置条件判断
      try {
        // console.log(to);
        // Get our page props from our custom API:
        const res = await fetch(
          `${baseUrl}/api/getProps?path=${encodeURIComponent(to.path)}&name=${
            to.name
          }&client=${isClient}`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        to.meta.state = await res.json();
      } catch (error) {
        console.error(error);
        // redirect to error route
      }

      next();
    });

    // router.afterEach((to, from) => {
    //   Vnode.component?.exposed?.endLoading();
    // });

    return { head };
  }
);

// const app = createApp(App);

// createApp(App).component('quanju',quanju).mount('#app') .component注册全局组件
// app.mount("#app");

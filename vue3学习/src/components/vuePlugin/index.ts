import { App, VNode } from "vue";
import loading from "./loading.vue";
import { createVNode, render } from "vue";
export default {
  install(app: App) {
    const Vnode: VNode = createVNode(loading);
    render(Vnode, document.body);
    //  console.log(Vnode)
    app.config.globalProperties.$myLoading = {
      show: Vnode.component?.exposed?.show,
      hide: Vnode.component?.exposed?.hide,
    };
  },
};

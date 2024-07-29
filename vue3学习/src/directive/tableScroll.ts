/**
* v-scrollbar
* 放在el-table 标签上 使其底部滚动条吸底
* 接收参数：Boolean
* v-scrollbar="true"
*/
import type { Directive, DirectiveBinding } from 'vue';

const directive: Directive = {
  mounted(el: HTMLElement, binding: DirectiveBinding) {
    if (binding.value) {
      const bar = el?.querySelector('.el-scrollbar__bar');
      if (bar && el) {
        bar?.classList?.add('v-scroll__el-scrollbar__bar');
        el?.appendChild(bar);
      }
    }
  },
};

export default directive;


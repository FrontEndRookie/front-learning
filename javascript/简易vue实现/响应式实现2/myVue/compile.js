import { Watcher } from "./watcher.js";
export function compile(element, vm) {
  const docFrag = document.createDocumentFragment();
  if (element.childNodes && element.childNodes.length) {
    Array.from(element.childNodes).forEach((node) => {
      if (node) {
        console.log(node.textContent, "node");
        if (node.nodeType === 1) {
          // 处理元素节点
          const attrs = node.attributes;
          Array.from(attrs).forEach((attr) => {
            const attrName = attr.name;
            if (attrName == "v-model") {
              node.value = vm.$data[attr.value];
              !node.oninput &&
                (node.oninput = function () {
                  console.log(node.value);
                  vm.$data[attr.value] = node.value;
                });
            }
          });
          const text = node.textContent;
          if (/\{\{(.*)\}\}/.test(text)) {
            // 匹配到{{}}，进行替换
            const exp = RegExp.$1.trim(); // 获取{{}}中的内容
            node.textContent = text.replace(/\{\{(.*)\}\}/, vm.$data[exp]);
            new Watcher(node, vm.$data, exp);
          }
        } else if (node.nodeType === 3) {
          // 处理文本节点
          const text = node.textContent;
          if (/\{\{(.*)\}\}/.test(text)) {
            // 匹配到{{}}，进行替换
            const exp = RegExp.$1.trim(); // 获取{{}}中的内容
            node.textContent = text.replace(/\{\{(.*)\}\}/, vm.$data[exp]);
            new Watcher(node, vm.$data, exp);
          }
        }
      }
      docFrag.appendChild(node);
    });
  }
  element.appendChild(docFrag);
}

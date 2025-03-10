import Watcher from "./watcher.js";
function handleRecursion(node,vm){
    let childs = node.childNodes
    if(childs.length == 0) return;
        for(let i= 0;i<childs.length;i++){
            compile(childs[i],vm)
        }
}
export function compile(node, vm) {
  let reg = /{{(.*)}}/;
  // 节点类型为dom
  if (node.nodeType === 1) {
    let attr = node.attributes;
    for (let i = 0; i < attr.length; i++) {
        if (attr[i].nodeName == "v-model") {
          new Watcher(vm, node, attr[i].nodeValue);
          node.addEventListener('input', (e)=> {
            vm[name] = e.target.value;
          })
        let name = attr[i].nodeValue; 
        node.value = vm.data[name]; 
        node.removeAttribute("v-model");
      }
    }
    //子元素是dom,递归处理
    handleRecursion(node,vm)
  }
  // 节点类型为text
  if (node.nodeType === 3) {
    if (reg.test(node.nodeValue)) {
      var name = RegExp.$1.trim();
      //定义观察者
      new Watcher(vm, node, name);
    }
  }
}

export function domFragmentDeal(node, vm) {
  //文档片段遍历处理Dom
  var flag = document.createDocumentFragment();
  var child;
  while ((child = node.firstChild)) {
    compile(child, vm);
    flag.appendChild(child); 
  }

  return flag;
}



import Dep from './dep.js'
export default class Watcher{
    constructor(vm, node, name){
        Dep.target = this;
        //此处会触发defineProperty的get
        this.name = name;
        this.node = node;
        this.vm = vm;
        this.update();
        Dep.target = null;
    }
    update() {
        this.get();
        // console.log(this.node)
        if(this.node.nodeValue === null) {
            this.node.value = this.value
            return 
        }
        this.node.nodeValue = this.value;
    }
    get() {
        this.value = this.vm[this.name]; 
    }

}
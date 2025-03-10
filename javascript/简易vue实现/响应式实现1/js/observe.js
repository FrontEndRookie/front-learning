import Dep from './dep.js'
function defineReactive(obj, key, val) {
    let dep = new Dep();
    Object.defineProperty(obj, key, {
        get: function () {
            //只收集一次依赖
            if (Dep.target) {
                dep.addSub(Dep.target);
            }
            return val;
        },
        set: function (newVal) {
            if (newVal === val) {
                return; 
            } else {
                val = newVal;
                dep.notify()
                // console.log(val); 
            }
        }
    });
}

export default function observe (data, vm) {
    Object.keys(data).forEach((key)=> {
        defineReactive(vm, key, data[key]);
    });
}

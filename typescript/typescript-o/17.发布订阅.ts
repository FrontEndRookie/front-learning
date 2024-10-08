interface EventFace {
    on: (name: string, callback: Function) => void,
    emit: (name: string, ...args: Array<any>) => void,
    off: (name: string, fn: Function) => void,
    once: (name: string, fn: Function) => void
}
 
interface List {
    [key: string]: Array<Function>,
}
class Dispatch implements EventFace {
    list: List
    constructor() {
        this.list = {}
    }
    on(name: string, callback: Function) {
        const callbackList: Array<Function> = this.list[name] || [];
        callbackList.push(callback)
        this.list[name] = callbackList
    }
    emit(name: string, ...args: Array<any>) {
        let evnetName = this.list[name]
        if (evnetName) {
            evnetName.forEach(fn => {
                fn.apply(this, args)
            })
        } else {
            console.error('该事件未监听');
        }
    }
    off(name: string, fn: Function) {
        let evnetName = this.list[name]
        if (evnetName && fn) {
            let index = evnetName.findIndex(fns => fns === fn)
            evnetName.splice(index, 1)
        } else {
            console.error('该事件未监听');
        }
    }
    once(name: string, fn: Function) {
        let decor = (...args: Array<any>) => {
            fn.apply(this, args)
            this.off(name, decor)
        }
        this.on(name, decor)
    }
}
const o = new Dispatch()
 
 
o.on('abc', (...arg: Array<any>) => {
    console.log(arg, 1);
})
 
o.once('abc', (...arg: Array<any>) => {
    console.log(arg, 'once');
})
// let fn = (...arg: Array<any>) => {
//     console.log(arg, 2);
// }
// o.on('abc', fn)
// o.on('ddd', (aaaa: string) => {
//     console.log(aaaa);
// })
//o.off('abc', fn)
 
o.emit('abc', 1, true, '小满')
 
o.emit('abc', 2, true, '小满')
 
// o.emit('ddd', 'addddddddd')
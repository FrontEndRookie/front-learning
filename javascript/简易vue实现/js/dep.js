export default class Dep{
    constructor(){
        this.subs = []
    }
    addSub(val) {
        this.subs.push(val)
    }
    notify(){
        // console.log('zl')
        this.subs.forEach(item=>item.update())
    }
}
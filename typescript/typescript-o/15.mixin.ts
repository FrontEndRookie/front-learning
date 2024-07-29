interface Mixin1 {
    name:string
}
interface Mixin2 {
    age:number
}
let m1:Mixin1 = {name:'faker'}
let m2:Mixin2 = {age:26} 
let res = Object.assign(m1,m2) //对象混入

class Mix1<T> {
    name:T
    getName():T{
        return this.name
    }
}

class Mix2<T>{
    age:T
    getAge():T{
        return this.age
    }
}

class MixAll implements Mix1<string>,Mix2<number> { //类混入
    name:string = 'faker';
    age:number = 26
    getName:()=>string
    getAge:()=>number
}

let mixAll = new MixAll()

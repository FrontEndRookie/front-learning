interface A{
    readonly name:string, //readonly 设置属性只读
    age:number,
    functions():number //定义函数
    cancel?:string //可选操作符 ?
    [propName:string]:any //任意属性

}

interface B extends A{
    extra:number
} //B 继承A接口

let obj:A={
    name:'faker',
    age:26,
    functions:()=>{return 123},
    cancel:'lol'
}
let cc:string = '1'
let dd:string = `2${cc}`
console.log(dd)

let num1:number = NaN
let num2:number = Infinity
let num3:number = 0o74; //八进制
let num4:number = 0x74; //十六进制
let num5:number = 0b11; //十六进制

let bool:boolean = true 
let bool1:boolean = Boolean(1)

//空值
let u:void = undefined
let v:void = null

//undefined/null
let un:null = null
let mn:undefined = undefined

//undefined/null和空值区别

let test1:string = '123'
let kong:void = undefined
//test1 = kong 报错
let nulls:null = null
test1 = nulls

// any
let anyThing:any = 1    //同原生js

//unknown 
let unknown:unknown = {a:123,b:()=>{}}
// unknown.a  unknown.b() unknown不允许调用属性或者执行属性值方法
//any类型可以

//unknown 可赋值对象只有自身和any类型
let testnum:number = 123
testnum = anyThing //不会报错
// testnum = unknown 报错


//node直接运行ts
//npm i @types/node -D
//npm i ts-node -g
//ts-node 文件名


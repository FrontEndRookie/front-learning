interface add {
    a:number,
    b:number
}
const fn = function(a:number,b:number=100):number{
    return a+b
}
interface fun{
    (a:string,b:string):string
}
const fn2:fun = function(a:string,b:string):string{
    return a+b
}
fn(123,45)

const funAdd = function(add:add):number{
    return  add.a+add.b
}

//函数重载 - 方法名字相同，参数不同，返回类型可以相同可以不同
function fns(a:number):void
function fns(a:string,b:number):void
function fns(a:number|string,b?:number):any{
    return a+'-'+b
}

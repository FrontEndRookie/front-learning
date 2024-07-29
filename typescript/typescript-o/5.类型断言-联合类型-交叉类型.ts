//联合类型
let phone:number|string = 123 
let fn5 = function(type:number|boolean):boolean {
    return !!type
}

interface Perple {
    name:string,
    age:number
}

interface Man {
    sex:number
}

//交叉类型
const faker = (man:Man&Perple):void=>{
    console.log(man)
}

faker({name:'faker',age:26,sex:1})

let duanyan = function(a:number|string){
    console.log((a as string).length) //方式1
    console.log((<string>a).length) //方式2
}



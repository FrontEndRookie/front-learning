let arr:number[] = [1,2,3]
let arr2:Array<number> = [1,2,3] //泛型声明

//多维数组
let arr3:(number[]|number)[] = [[1,2,3],1,[]]
let arr4:Array<number|Array<number>> = [[1,2,3]]

function fun (...args:any):void {
    let arr:IArguments = arguments //IArguments arguments数组类型
}

//用接口描述数组 常用于定义类数组
interface NumberArray {
    [index:number]:number
}
let myarr:NumberArray = [1,2,3]
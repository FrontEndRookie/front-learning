 namespace A { //命名空间可以导出 export
    export const a= 1
    export namespace AA {  //可以嵌套
        export const aa = 2
    }
}

 namespace A { //重名的命名空间会进行合并 
    const aaa =2
}
console.log(A.a)
console.log(A.AA.aa)
import aaname = A.AA //定义别名
console.log(aaname.aa)
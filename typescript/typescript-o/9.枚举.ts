
//数字定义枚举
enum Color {
    red,
    green=2, //定义green为2时，blue会递增为3
    blue
}
console.log(Color.red) //0
console.log(Color.blue) //3

//字符串枚举 必须全部都定义值
enum ColorString {
    red='red',
    green='green',
    blue='blue',
    pink=2 //支持穿插数字使用
}

//接口枚举
interface Mixins {
    red:Color.red
}

//反向映射
enum test {
    success
}
//字符串不支持反向映射
let tests:number= test.success
let key = test[tests]




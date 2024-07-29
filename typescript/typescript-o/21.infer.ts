// 定义一个类型 如果是数组类型 就返回 数组元素的类型 否则 就传入什么类型 就返回什么类型
type Infer<T> = T extends Array<any> ? T[number] : T
 
 
type A = Infer<(boolean | string)[]>
 
type B = Infer<null>

//使用infer
type Infer<T> = T extends Array<infer U> ? U : T
 
 
type A = Infer<(string | Symbol)[]>

type Ass = ['a','b','c']

type shift<T extends any[]> = T extends [unknown,...infer Rest] ? Rest:[]
type first<T extends any[]> = T extends [infer A,...infer Rest] ? A:[]
type ass = first<Ass>

type Arrf = [1,2,3,4]
type ArrR = [4,3,2,1]
type ReverArr<T extends any[]> = T extends [infer First,...infer Reset] ? [...ReverArr<Reset>,First] :T
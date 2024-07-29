type Personss = {
    name:string,
    age:number,
    text:string
}

type p = Partial<Personss> //将所有的key设置成可选
//源码 type Partial<T>= { [P in keyof T]?: T[P] }
type p2 = Pick<Personss,"age"> //筛选别名类型
//源码type Pick<T,K extends keyof T> = {
//     [P in K]:T[p]
// }
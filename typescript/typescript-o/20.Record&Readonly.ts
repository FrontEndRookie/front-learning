type ReadOnly<T> = {
    readonly [P in keyof T]: T[P]
}

type Personsss = {
    name:string,
    age:number,
    text:string
}

type man = ReadOnly<Personsss> //将所有属性变为只读的

type Record<K extends keyof any, T> = {
    [P in K]: T;
};

type Personssss = {
    name:string,
    age:number,
    text:string
}

type K = "A" | "B" | "C"
type B = Record<K,Personssss> //同时记录属性和属性值

let objec:B = {
    A:{name:'faker',age:26,text:'sanguanw'},
    B:{name:'faker',age:26,text:'sanguanw'},
    C:{name:'faker',age:26,text:'sanguanw'},
}
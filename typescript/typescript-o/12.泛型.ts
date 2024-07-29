function add<T>(a:T,b:T):Array<T>{
    return [a,b]
}
add<number>(1,2)

interface Len {
    length:number
}

function getLength <T extends Len>(val:T){
    return val.length
}

function prop<T,K extends keyof T>(obj:T,key:K){
    return obj[key]
}

let objss = {a:1,b:2}
prop(objss,'a')

class Sub<T> {
    propA: T[]=[];
    add(a:T):T[] {
        return [a]
    }
}

let son = new Sub<number>()
son.propA = [1,2,3]
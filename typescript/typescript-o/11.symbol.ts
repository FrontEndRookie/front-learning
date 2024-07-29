let s:symbol = Symbol(123)
let obj = {
    [s]:1
}
console.log(obj[s])
console.log(Object.getOwnPropertySymbols(obj))
console.log(Reflect.ownKeys(obj))

let arrs :Array<number> = [1,2,3]
let iter:Iterator<number> = arrs[Symbol.iterator]()

console.log(iter.next()) //{ value: 1, done: false }
console.log(iter.next()) //{ value: 2, done: false }
console.log(iter.next()) //{ value: 3, done: false }
console.log(iter.next()) //{ value: undefined, done: true }

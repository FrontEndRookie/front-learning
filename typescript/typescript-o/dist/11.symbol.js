var _a;
var s = Symbol(123);
var obj = (_a = {},
    _a[s] = 1,
    _a);
console.log(obj[s]);
console.log(Object.getOwnPropertySymbols(obj));
console.log(Reflect.ownKeys(obj));
var arrs = [1, 2, 3];
var iter = arrs[Symbol.iterator]();
console.log(iter.next()); //{ value: 1, done: false }
console.log(iter.next()); //{ value: 2, done: false }
console.log(iter.next()); //{ value: 3, done: false }
console.log(iter.next()); //{ value: undefined, done: true }

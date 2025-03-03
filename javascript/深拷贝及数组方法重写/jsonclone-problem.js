// 循环引用报错
let a = {};
let b = { a: a };
a.b = b;
JSON.parse(JSON.stringify(b)); //TypeError:Converting circular structure to JSON

// 函数 undefined Symbol会跳过 NaN,infinity会变成null Date对象会变成字符串 Map/Set/Error/RegExp 会变成空对象 BigInt会报错
let c = {
  a() {},
  b: NaN,
  c: undefined,
  d: Symbol("d"),
};
console.log(JSON.parse(JSON.stringify(c))); //{b: null}

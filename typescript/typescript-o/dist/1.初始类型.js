var cc = '1';
var dd = "2".concat(cc);
console.log(dd);
var num1 = NaN;
var num2 = Infinity;
var num3 = 60; //八进制
var num4 = 0x74; //十六进制
var num5 = 3; //十六进制
var bool = true;
var bool1 = Boolean(1);
//空值
var u = undefined;
var v = null;
//undefined/null
var un = null;
var mn = undefined;
//undefined/null和空值区别
var test1 = '123';
var kong = undefined;
//test1 = kong 报错
var nulls = null;
test1 = nulls;
// any
var anyThing = 1; //同原生js
//unknown 
var unknown = { a: 123, b: function () { } };
// unknown.a  unknown.b() unknown不允许调用属性或者执行属性值方法
//any类型可以
//unknown 可赋值对象只有自身和any类型
var testnum = 123;
testnum = anyThing; //不会报错
// testnum = unknown 报错
//node直接运行ts
//npm i @types/node -D
//npm i ts-node -g
//ts-node 文件名

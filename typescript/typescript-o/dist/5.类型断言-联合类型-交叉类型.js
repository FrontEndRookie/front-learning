//联合类型
var phone = 123;
var fn5 = function (type) {
    return !!type;
};
//交叉类型
var faker = function (man) {
    console.log(man);
};
faker({ name: 'faker', age: 26, sex: 1 });
var duanyan = function (a) {
    console.log(a.length); //方式1
    console.log(a.length); //方式2
};

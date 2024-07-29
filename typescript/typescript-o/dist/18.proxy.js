var proxy = function (object, key) {
    return new Proxy(object, {
        get: function (target, prop, receiver) {
            console.log("get key======>".concat(key));
            return Reflect.get(target, prop, receiver);
        },
        set: function (target, prop, value, receiver) {
            console.log("set key======>".concat(key));
            return Reflect.set(target, prop, value, receiver);
        }
    });
};
var logAccess = function (object, key) {
    return proxy(object, key);
};
var man = logAccess({
    name: "小满",
    age: 20,
    text: "我的很小"
}, 'age');
var man2 = logAccess({
    id: 1,
    name: "小满2"
}, 'name');
man.age = 30;
console.log(man);

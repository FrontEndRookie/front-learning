var m1 = { name: 'faker' };
var m2 = { age: 26 };
var res = Object.assign(m1, m2); //对象混入
var Mix1 = /** @class */ (function () {
    function Mix1() {
    }
    Mix1.prototype.getName = function () {
        return this.name;
    };
    return Mix1;
}());
var Mix2 = /** @class */ (function () {
    function Mix2() {
    }
    Mix2.prototype.getAge = function () {
        return this.age;
    };
    return Mix2;
}());
var MixAll = /** @class */ (function () {
    function MixAll() {
        this.name = 'faker';
        this.age = 26;
    }
    return MixAll;
}());
var mixAll = new MixAll();

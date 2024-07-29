var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Faker = /** @class */ (function () {
    function Faker(name, age, hobby) {
        this.name = name;
        this.age = age;
        this.hobby = hobby;
        //无法直接调用win函数 需要Faker.win
    }
    Faker.win = function () {
        //static中只能调static声明的元素 无法获取name/age。。
        return this.s12;
    };
    return Faker;
}());
var p = new Faker('lxh', 26, 'lol');
p.name;
// p.age 报错只能在类中访问
// p.hobby 报错只能在类和子类中访问
var Hu = /** @class */ (function (_super) {
    __extends(Hu, _super);
    function Hu() {
        var _this = _super.call(this, 'faker', 22, 'false') || this;
        _this.hobby;
        return _this;
    }
    return Hu;
}(Faker));
//通过接口约束类
var Man7 = /** @class */ (function () {
    function Man7() {
    }
    Man7.prototype.run = function (type) {
        return type;
    };
    Man7.prototype.run2 = function () { };
    return Man7;
}());
//抽象类
var Ab = /** @class */ (function () {
    function Ab(name) {
        this.name = name;
    }
    return Ab;
}());
//new Ab() 抽象类无法被实例化
var B = /** @class */ (function (_super) {
    __extends(B, _super);
    function B() {
        return _super.call(this, 'faker') || this;
    }
    B.prototype.getName = function () {
        return this.name;
    };
    return B;
}(Ab));

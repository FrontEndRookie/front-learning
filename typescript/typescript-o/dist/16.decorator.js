var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var watchs = function (target) {
    target.prototype.getName = function (name) {
        return name;
    };
};
var watchss = function (name) {
    return function (target) {
        target.prototype.getName = function (name) {
            return name;
        };
    };
};
var log = function (property) {
    return function (target, propertyKey) {
        target[propertyKey] = property;
    };
};
var ABC = /** @class */ (function () {
    function ABC() {
    }
    __decorate([
        log(123)
    ], ABC.prototype, "name", void 0);
    ABC = __decorate([
        watchs,
        watchss('组合式装饰器')
    ], ABC);
    return ABC;
}());
var abc = new ABC();
console.log(abc.name);
abc.getName(123);

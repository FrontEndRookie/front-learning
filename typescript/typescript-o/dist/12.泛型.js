function add(a, b) {
    return [a, b];
}
add(1, 2);
function getLength(val) {
    return val.length;
}
function prop(obj, key) {
    return obj[key];
}
var objss = { a: 1, b: 2 };
prop(objss, 'a');
var Sub = /** @class */ (function () {
    function Sub() {
        this.propA = [];
    }
    Sub.prototype.add = function (a) {
        return [a];
    };
    return Sub;
}());
var son = new Sub();
son.propA = [1, 2, 3];

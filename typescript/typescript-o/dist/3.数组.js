var arr = [1, 2, 3];
var arr2 = [1, 2, 3]; //泛型声明
//多维数组
var arr3 = [[1, 2, 3], 1, []];
var arr4 = [[1, 2, 3]];
function fun() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    var arr = arguments; //IArguments arguments数组类型
}
var myarr = [1, 2, 3];

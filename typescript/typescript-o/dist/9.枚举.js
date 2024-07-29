//数字定义枚举
var Color;
(function (Color) {
    Color[Color["red"] = 0] = "red";
    Color[Color["green"] = 2] = "green";
    Color[Color["blue"] = 3] = "blue";
})(Color || (Color = {}));
console.log(Color.red); //0
console.log(Color.blue); //3
//字符串枚举 必须全部都定义值
var ColorString;
(function (ColorString) {
    ColorString["red"] = "red";
    ColorString["green"] = "green";
    ColorString["blue"] = "blue";
    ColorString[ColorString["pink"] = 2] = "pink"; //支持穿插数字使用
})(ColorString || (ColorString = {}));
//反向映射
var test;
(function (test) {
    test[test["success"] = 0] = "success";
})(test || (test = {}));
//字符串不支持反向映射
var tests = test.success;
var key = test[tests];

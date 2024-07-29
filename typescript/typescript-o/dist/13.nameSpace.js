var A;
(function (A) {
    A.a = 1;
    var AA;
    (function (AA) {
        AA.aa = 2;
    })(AA = A.AA || (A.AA = {}));
})(A || (A = {}));
(function (A) {
    var aaa = 2;
})(A || (A = {}));
console.log(A.a);
console.log(A.AA.aa);
var aaname = A.AA; //定义别名
console.log(aaname.aa);

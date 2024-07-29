"use strict";

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

var A = function A(b) {
  _classCallCheck(this, A);

  this.a = 1;
  this.b = b;
};

var obj = {
  a: 1,
};

function Print() {}

Print.call(obj);

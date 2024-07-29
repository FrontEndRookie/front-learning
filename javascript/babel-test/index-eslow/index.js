"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
require("core-js/modules/es.array.map.js");
require("core-js/modules/es.object.to-string.js");
require("core-js/modules/es.promise.js");
require("core-js/modules/es.regexp.exec.js");
require("core-js/modules/es.string.replace.js");
require("core-js/modules/esnext.string.replace-all.js");
var _this = void 0,
  _aaa$c;
// import * as ttt from "./test-i.js";

// const global = require("core-js/internals/global");

// console.log(ttt);
var elements = ["Hydrogen", "Helium", "Lithium", "Beryllium"];
elements.map(function (element) {
  return element.length;
});
new Promise(function (res) {
  return res(1);
}).then(function (res) {
  console.log(res);
});
function a() {
  return _a.apply(this, arguments);
}
function _a() {
  _a = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee() {
    return _regenerator.default.wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return Promise.resolve(1);
        case 2:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return _a.apply(this, arguments);
}
a();
var aaa = {
  b: function b() {
    console.log(_this, 123);
    return _this.a;
  }
};
console.log(aaa.b());
console.log(aaa === null || aaa === void 0 || (_aaa$c = aaa.c) === null || _aaa$c === void 0 ? void 0 : _aaa$c.d);
var tettt = "tttsss";
console.log(tettt.replaceAll("t", "a"));
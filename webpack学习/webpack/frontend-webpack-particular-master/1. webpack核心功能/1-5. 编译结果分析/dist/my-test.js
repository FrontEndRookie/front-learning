(function (modules) {
  const installedModule = {};
  function require(moduleId) {
    if (installedModule[moduleId]) {
      return installedModule[moduleId].exports;
    }
    const module = (installedModule[moduleId] = {
      exports: {},
    });
    modules[moduleId].call(module.exports, module, module.exports, require);
  }
  require("./src/index.js");
})({
  "./src/a.js": function (module, exports) {
    console.log("module a");
    module.exports = "a";
  },
  "./src/index.js": function (module, exports, require) {
    // console.log("index module");
    // var a = require("./src/a.js");
    // a.abc();
    // console.log(a);
    eval(
      'console.log("index module")\n    var a = require("./src/a.js");\n    a.abc();\n    console.log(a);\n\n//# sourceURL=webpack:///./src/index.js?'
    );
  },
});

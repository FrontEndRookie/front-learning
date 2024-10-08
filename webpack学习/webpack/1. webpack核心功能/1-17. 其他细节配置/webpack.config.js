var path = require("path");
module.exports = {
  mode: "development",
  devtool: "source-map",
  entry: {
    index: "./src/index.js",
  },
  context: path.resolve(__dirname, "src"), //配置入口和loader的基准路径， entry:{index:'./index.js'}
  // externals: {
  //     jquery: "$",
  //     lodash: "_"
  // },
  stats: {
    colors: true,
    modules: false,
    hash: false,
    builtAt: false,
  },
};

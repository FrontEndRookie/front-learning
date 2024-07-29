module.exports = {
  entry: {
    index: "./src/index.js",
  },
  output: {
    path: __dirname + "/public",
    filename: "./js/[name].js",
  },
  devServer: {
    contentBase: "./public",
    inline: true,
    port: 8080, // 选择一个不需要特殊权限的端口号
  },
};

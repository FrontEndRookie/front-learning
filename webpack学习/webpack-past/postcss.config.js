module.exports = {
    plugins:[
        require('autoprefixer'),  //autoprefixer样式添加前缀，兼容浏览器
        require('postcss-nested') //postcss-nested 使css文件支持嵌套
    ]
}
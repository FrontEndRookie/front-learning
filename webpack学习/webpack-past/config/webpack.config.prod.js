const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin')
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')
module.exports = {
    output:{
        filename:'scripts/[name].[contenthash].js', //生成的js的文件名  缓存本地文件 使用【contenthash】 文件变化后文件名改变，浏览器缓存更新 scripts将js文件打包到scripts文件夹
        publicPath:'http://localhost:8080'
    },
    mode:'production',
   plugins:[
     new BundleAnalyzerPlugin()
   ],
    optimization:{
        usedExports:true, 
        //开发环境 不暴露没有import的export的js内容  如export add和minus 只import add 打包后的js中也只有add函数 如果import了minus但没使用结果不变
        //生产环境直接转化到import的结果 如add函数实现两数相加，调用import add，add(2,3) 打包后直接生成 5
        //导入第三方库无法生效，即使没有被使用也会被打包入js
        minimizer:[
            new CssMinimizerPlugin(),
            new TerserPlugin(),
        ],
        // performance:{
        //     hints:false //关闭打包过大提示
        // }
    }
}

//npx webpack --watch 每次更改代码 自动打包命令 需要手动刷新浏览器
//npx webpack-dev-server 启动开发服务器

//npm i html-webpack-plugin -D 打包html
//npm i mini-css-extract-plugin -D  该插件基于webpack5 用于抽离css
//npm i css-minimizer-webpack-plugin -D css压缩

//npm i csv-loader xml-loader -D 加载csv tsv xml数据
//npm i toml yaml json5 -D 自定义json模块parser
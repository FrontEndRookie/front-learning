const WorkBoxPlugin = require('workbox-webpack-plugin')
module.exports = {
    output:{
        filename:'scripts/[name].js', //生成的js的文件名  缓存本地文件 使用【contenthash】 文件变化后文件名改变，浏览器缓存更新 scripts将js文件打包到scripts文件夹
       },
    mode:'development',
    devtool:'inline-source-map', //报错时精准定位到文件位置
   plugins:[
    new WorkBoxPlugin.GenerateSW({ //离线缓存， 还需要在js文件中设置相应配置
        clientsClaim:true,
        skipWaiting:true
    })
   ],
    devServer:{
        static:'./dist',
        client: {
            overlay: false, //eslint报错 网页不显示
        },
        devMiddleware: {
            writeToDisk: true
        }
    },
}

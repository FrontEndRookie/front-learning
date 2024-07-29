const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin')
const toml = require('toml')
const yaml = require('yaml')
const json5 = require('json5')
module.exports =(env)=>{ 
    console.log(env) //npx webpack --env production --env another=sakura --env指定production 可额外设置属性
    return {
    //1.多入口
    entry:{
        index:'./src/index.js',
        another:'./src/testChunk.js' //使用多入口方法可能会造成重复引用，（两入口都用到同一模块，该模块会被重复加载入打包后的两入口文件里）
    },
    //防止重复方式1
    // entry:{
    //     index:{
    //         import:'./src/index.js',
    //         dependOn:'shared'
    //     },
    //     another:{
    //         import:'./src/testChunk.js',
    //         dependOn:'shared'
    //     },
    //     shared:'lodash'
    // },
    //防止重复方式2 splitChunks
    //防止重复方式3 参见 async-module.js动态导入
    output:{
        filename:'scripts/[name].[contenthash].js', //生成的js的文件名  缓存本地文件 使用【contenthash】 文件变化后文件名改变，浏览器缓存更新 scripts将js文件打包到scripts文件夹
        path:path.resolve(__dirname,'./dist'), //生成js的路径
        clean:true, //每次打包清除前一次文件
        assetModuleFilename: 'images/[contenthash][ext]', //打包后生成资源的路径 ，也可以在rules中的generator中配置 generator相比较output优先级更高
        publicPath:'http://localhost:8080'
    },
    mode:env.production?'production': 'development',
    devtool:'inline-source-map', //报错时精准定位到文件位置 
    //默认值为eval 
    //设置false为关闭
    //source-map 生成一个sourcemap文件
    //hidden-source-map 生成一个sourcemap文件 但不会锁定代码行数   
    //inline-source-map 生成dataurl形式的sourcemap在js文件中，不额外生成sourcemap文件 可以锁定代码行数
    //eval-source-map 将sourcemap放在eval中 可以锁定代码行数
    //cheap-source-map 和sourcemap区别是不记录列数 不能够记录loader插件处理后的js
    //cheap-module-source-map  能够记录loader插件处理后的js
    plugins:[
        new HtmlWebpackPlugin({
            template:'./index.html', //生成前html模版
            filename:'app.html',//生成的html文件名
            inject:'body' //生成的html中js位置
        }),
        new MiniCssExtractPlugin(
            {
                filename:'styles/[contenthash].css'
            }
        )
    ],
    devServer:{
        static:'./dist',
        compress:true, //压缩请求文件
        port:3000,//端口号
        headers:{ //添加请求头
            "x-access-token":true
        },
        proxy:{
            '/api':'http://localhost:9000'
        },
        https:true,
        https:true,//自带https签名证书
        historyApiFallback:true, //404返回首页
        host:'192.168.0.1',//在同一局域网下可以通过改ip访问服务
        hot:true, //模块热替换 修改css或js后当前页面直接生效  修改js需要module.hot.accept()操作，vue或react已做处理
        liveReload:true //模块热加载  修改模块后加载新模块
    },
    module:{
        rules:[
            {
                test:/\.jpg$/,
                type:'asset/resource',
                generator:{
                    filename:'images/[contenthash][ext]' //用于生成本地资源情况
                }
            },
            {
                test:/\.svg$/,
                type:'asset/inline', //用于生成base64格式情况

            },
            {
                test:/\.txt$/,
                type:'asset/source', //用于导出资源的源代码情况
            },
            {
                test:/\.png$/, 
                type:'asset',//通用资源类型 ，判断文件大小是否大于8k决定使用本地资源或者转成base64，可以调整这个参数
                parser: {
                    dataUrlCondition:{
                        maxSize:4*1024*1024
                    }
                }
            },
            {
                test:/\.(css|less)$/,
                use:[MiniCssExtractPlugin.loader,'css-loader','less-loader'],
            },
            {
                test:/\.(ttf|ttf2|eot|ttf|otf)$/, //加载字体文件
                type:'asset/resource',
            },
            {
                test:/\.(csv|tsv)$/,
                use:'csv-loader'
            },
            {
                test:/\.xml$/,
                use:'xml-loader'
            },
            {
                test:/\.toml$/,
                type:'json',
                parser:{
                    parse:toml.parse
                }
            },
            {
                test:/\.yaml$/,
                type:'json',
                parser:{
                    parse:yaml.parse
                }
            },
            {
                test:/\.json5$/,
                type:'json',
                parser:{
                    parse:json5.parse
                }
            },
            {
                test:/\.js$/,
                exclude:/node_modules/,
                use:{
                    loader:'babel-loader',
                    options:{
                        presets:["@babel/preset-env"]
                    }
                }
            },
        ]
    },
    optimization:{
        minimizer:[
            new CssMinimizerPlugin(),
            new TerserPlugin()
        ],
        splitChunks:{
            // chunks:'all'
            cacheGroups:{ //缓存第三方文件
                vendor:{
                    test:/[\\/]node_modules[\\/]/,
                    name:'vendors',
                    chunks:'all'
                }
            }
        }
    }
}
}

//npx webpack --watch 每次更改代码 自动打包命令 需要手动刷新浏览器
//npx webpack-dev-server 启动开发服务器

//npm i html-webpack-plugin -D 打包html
//npm i mini-css-extract-plugin -D  该插件基于webpack5 用于抽离css
//npm i css-minimizer-webpack-plugin -D css压缩

//npm i csv-loader xml-loader -D 加载csv tsv xml数据
//npm i toml yaml json5 -D 自定义json模块parser
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin')
const toml = require('toml')
const yaml = require('yaml')
const json5 = require('json5')
const webpack = require('webpack')
module.exports = {
    //1.多入口
    entry:{
        index:'./src/index.js', //此处可以用数组 []或者对象  
        // index:{
        //      dependOn:'loadsh',
        //      import:[./src/xx.js,./src/ss.js]
        //      fileName:'indexJs/[name].js'   打包生成js的路径
        //      },
        //      lodash:'lodash' //lodash单独打成一个js文件，import中的js如用到lodash不会再重复打包入js中
        another:'./src/testChunk.js' //使用多入口方法可能会造成重复引用，（两入口都用到同一模块，该模块会被重复加载入打包后的两入口文件里）
    },
   resolve:{
    alias:{
        '@':path.resolve(__dirname,'./src')
    },
    extensions:['.ts','.js','.json','.vue'] //同名文件加载优先级
   },
   externalsType:'script',
   externals:{ //外部链接扩展 可以直接import 导入
    jquery:[
        'https://cdn.bootcdn.net/ajax/libs/jquery/3.6.1/jquery.js',
        '$' //window上挂载名字
    ]
   },
    output:{
        path:path.resolve(__dirname,'../dist'), //生成js的路径
        clean:true, //每次打包清除前一次文件
        assetModuleFilename: 'images/[contenthash][ext]', //打包后生成资源的路径 ，也可以在rules中的generator中配置 generator相比较output优先级更高
    },
    plugins:[
        new HtmlWebpackPlugin({
            template:'./index.html', //生成前html模版
            filename:'app.html',//生成的html文件名
            inject:'body', //生成的html中js位置
            title:'test webpack', //需要在目标文件的title中设置替换字符标识 <%= htmlWebpackPlugin.options.title %>
            // chunks:['index'] //指定需要引入的js入口模块
        }),
        //多页面 生成的html文件名字需要不同 通过设置chunks使两个html载入不同入口模块
        new HtmlWebpackPlugin({
            template:'./multiple.html', //生成前html模版
            filename:'app2.html',//生成的html文件名
            inject:'body', //生成的html中js位置
            title:'test webpack', //需要在目标文件的title中设置替换字符标识 <%= htmlWebpackPlugin.options.title %>
            // chunks:['index'] //指定需要引入的js入口模块
        }),
        new MiniCssExtractPlugin(
            {
                filename:'styles/[contenthash].css'
            }
        ),
        new webpack.ProvidePlugin({ //全局预置变量 ，不用在文件中导入lodash 可以直接用_
            _:'lodash'
        })
    ],
    
    module:{
        rules:[
            // {
            //     test:require.resolve('../src/index.js'),
            //     use:'imports-loader?wrapper=window' 
            // },//npm i -D imports-loader 直接在js中访问this.alert报错 将this指向window
            {
                test:require.resolve('../src/globalExport.js'), //npm i -D exports-loader
                use:'exports-loader?type=commonjs&exports=name,multiple|config.test|test' //全局导出name,{test:config.test}
                //使用 const { exports,test } = require('./globalExport')
            },
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
                use:[MiniCssExtractPlugin.loader,{loader:'css-loader',options:{modules:true}},'postcss-loader','less-loader'],
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
                use:[{
                    loader:'babel-loader',
                    options:{
                        presets:[
                            [
                            "@babel/preset-env",
                            {
                                targets:['last 1 version','> 1%'],
                                useBuiltIns:'usage',
                                corejs:3
                            }
                            ]
                        ]   
                    }
                }], //'eslint-loader'
            },
            {
                test:/\.ts$/,
                use:'ts-loader',
                exclude:/node_modules/
            }
        ]
    },
    
}

const { ModuleFederationPlugin } =require('webpack').container
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
    mode:'production',
    entry: './src/index.js',
    plugins:[
        new HtmlWebpackPlugin(),
        new ModuleFederationPlugin({
            name:'body',
            filename:'remoteEntry.js',
            remotes:{
                nav:'nav@http://localhost:3000/remoteEntry.js',
                header:'header@//localhost:3002/remoteEntry.js'
            },
            exposes:{

            },
            shared:{}

        })
    ]
}
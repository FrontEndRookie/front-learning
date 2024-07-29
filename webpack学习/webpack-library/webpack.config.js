const path = require('path')
module.exports = {
    mode:'development',
    entry:'./src/index.js',
    // experiments: { //配合type为module形式使用
    //     outputModule: true
    // },
    output:{
        path:path.resolve(__dirname,'dist'),
        filename:'mylib.js',
        // library:'mylib' script形式
        library:{
            name:'mylib',
            // type:'commonjs' commonjs 形式
            // type:'module'
            type:'umd'
        },
        globalObject:'globalThis'
    }
}
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin")
const CleanWebpackPlugin=require("clean-webpack-plugin")
const webpack = require("webpack");
module.exports={
    entry:{
        index:"./src/index.js",
        another:"./src/another-module.js"
    },
    devtool:'inline-source-map',
    devServer:{
        contentBase:'./dist',
        host:'0.0.0.0',
        hot:true
    },
    output:{
        filename:"[name].bundle.js",
        path:path.resolve(__dirname,"dist"),
        publicPath:'/'
    },
    module:{
        rules:[{
            test:/\.css$/,
            use:['style-loader','css-loader']
        },{
            test:/\.(png|svg|jpg|gif)$/,
            use:['file-loader']
        },{
            test:/\.(woff|woff2|eot|ttf|otf)$/,
            use:['file-loader']
        },{
            test:/\.(csv|tsv)$/,
            use:['csv-loader']
        },{
            test:/\.xml$/,
            use:['xml-loader']
        }]
    },
    plugins:[
        new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({
            title:'output Management'
        }),
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.optimize.CommonsChunkPlugin({
            name:'common'//指定公共bundle 的名称
        })
    ]
}
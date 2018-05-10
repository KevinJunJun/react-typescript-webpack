const merge = require("webpack-merge");
const common = require('./webpack.common.js');
const webpack=require("webpack")
module.exports=merge(common,{
    devtool:"inline-source-map",
    devServer:{
        contentBase:"./dist"
    },
    plugins:[ 
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ],
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
})
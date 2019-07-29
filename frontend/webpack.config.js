const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const AddAssetHtmlWebpackPlugin = require('add-asset-html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
var webpack = require("webpack");
var path = require("path");

module.exports = {
    entry:{
        index:'./app.js'
    },
    output: {
        path: __dirname + "/dist",
        filename: "js/[name]_[hash].js",
        publicPath:'../'
    },
    performance: {
        hints: false
    },//不展示文件体积的警告
    module: {
        rules: [
            {
                test: /(\.jsx|\.js)$/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: [
                            "es2015", "react","stage-0"
                        ]
                    }
                },
                exclude: /node_modules/
            },
            {
                test:/\.css/,
                use:ExtractTextPlugin.extract({
                    use:['style-loader','css-loader']
                })
            },
            {
                test:/\.scss/,
                use:ExtractTextPlugin.extract({
                    fallback:'style-loader',
                    use: ['css-loader','sass-loader']
                },)
            },
            {
                test: /\.(png|jpg|gif)$/,
                use:[
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 8096,
                            name: '[name].[ext]',
                            outputPath:'images/'
                        }
                    }
                ]
            },
            {
                test: /\.html$/,
                use: {
                    loader: 'html-loader'
                }
            },
        ]
    },
    plugins:[
        new CleanWebpackPlugin({
            root: __dirname + './dist',
            cleanOnceBeforeBuildPatterns: [__dirname + '/dist/index.html',__dirname + '/dist/css/*.*',__dirname + '/dist/js/*.*',__dirname + '/dist/images/*.*'],
            verbose: true,
            dry: false
        }),
        
        new webpack.DllReferencePlugin({
            context: __dirname,
            manifest: __dirname + '/dist/vendor-manifest.json',
        }),
        new HtmlWebpackPlugin({
            chunks:['index'],
            filename:'index.html',//制定生成文件的目录
            template:'index.html'//制定模板
        }),
        new AddAssetHtmlWebpackPlugin({
            filepath: __dirname + '/dist/vendor.dll.js',
        }),
        new ExtractTextPlugin({
            filename:"css/[name]_[hash].css",//制定编译后的文件名称
            allChunks:true,//把分割的块分别打包
        }),
        new CopyWebpackPlugin([
            {
                from: __dirname+'/others',
                to: __dirname+'/dist/others',
            }
        ])
    ]
};
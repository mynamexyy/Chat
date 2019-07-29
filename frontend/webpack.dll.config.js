/*
* @desc 静态公共资源打包配置
*/


const path = require('path')
const webpack = require('webpack')

const src = path.resolve(process.cwd(), 'src'); // 源码目录
const evn = process.env.NODE_ENV == "production" ? "production" : "development";

const vendors = [
    'antd',
    'axios',
    'react',
    'react-dom',
    'react-redux',
    'react-router-dom',
    'redux',
    'redux-thunk'
];

module.exports = {
    mode: 'production',
    entry: {
        vendor: vendors
    },
    performance: {
        hints: false
    },//不展示文件体积的警告
    output: {
        path:  __dirname + '/dist/',
        filename: '[name].dll.js',
        library: '[name]_[hash]',
        libraryTarget: 'this'
    },
    
    plugins: [
        new webpack.DllPlugin({
            context: process.cwd(),
            path: __dirname + '/dist/[name]-manifest.json',
            name: '[name]_[hash]'
        })
    ]
}
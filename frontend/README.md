[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](http://standardjs.com/)

基于[Redux](https://github.com/reactjs/redux)
*  [下载源码压缩包](https://github.com/mynamexyy/book/archive/master.zip) 或者用git命令 `git clone https://github.com/mynamexyy/book.git`
## 跑起来
*  下载完后安装依赖:`npm install`
*  需要热重载的模式直接运行：`npm run debug`
*  打包之前先`npm run build:dll`打包公共依赖
*  打包：`npm run dev`
*  打包并压缩：`npm run build`
*  会打包进/dist,如果是热加载浏览器会自动打开'https://localhost:9000/',
## 文件信息
*  webpack.config.js是打包的配置文件
*  webpack.config.dll.js是打包公共依赖的配置文件
*  webpack.config.dev.js是热重载的配置文件
*  .gitignore里面对node_module和dist文件夹进行了git操作的屏蔽

[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](http://standardjs.com/)

在线聊天,主要是[Redux](https://github.com/reactjs/redux) 和 [tornado](https://github.com/tornadoweb/tornado).还有[websocket](https://developer.mozilla.org/zh-CN/docs/Web/API/WebSocket)
## 跑起来
## 前端
*  在fontend目录下参照[book](https://github.com/mynamexyy/book)
*  Content.js里面websocket地址需要修改为自己的ip和ngnix中配置的端口(ngnix配置栗子里面是设置的8889)
## 后端
*  在backend目录下参照运行pip install -r requirements.txt安装依赖（暂时就只有tornado）
*  执行python main.py
## ngnix
*  ngnix.conf就是ngnix配置栗子

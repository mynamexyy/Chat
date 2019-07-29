# -*- encoding: utf-8 -*-  
import tornado.ioloop
import tornado.web
from tornado.websocket import WebSocketHandler
from tornado.options import options
import datetime
from msg import Msg
import time
import json

 
class ChatHandler(WebSocketHandler):
 
    users = set()  # 用来存放在线用户的容器
    msg = []
    def open(self):
        self.users.add(self)  # 建立连接后添加用户到容器中
        for u in self.users:  # 向已在线用户发送消息
            res = {
                'msg':json.dumps(self.msg)
            }
            u.write_message(json.dumps(res))
 
    def on_message(self, message):
        print(self.request.remote_ip)
        # time.sleep(2)
        newmsg = Msg(self.request.remote_ip,datetime.datetime.now().strftime("%Y-%m-%d %H:%M:%S"),message)
        newmsg = {
            'username':self.request.remote_ip,
            'date':datetime.datetime.now().strftime("%Y-%m-%d %H:%M:%S"),
            'msg':message
        }
        self.msg.append(newmsg)
        for u in self.users:  # 向在线用户广播消息
            res = {
                'msg':json.dumps(self.msg)
            }
            u.write_message(json.dumps(res))
 
    def on_close(self):
        self.users.remove(self) # 用户关闭连接后从容器中移除用户
        for u in self.users:
            u.write_message(u"[%s]-[%s]-离开聊天室" % (self.request.remote_ip, datetime.datetime.now().strftime("%Y-%m-%d %H:%M:%S")))
 
    def check_origin(self, origin):
    	return True  # 允许WebSocket的跨域请求
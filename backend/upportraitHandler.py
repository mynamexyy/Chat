# -*- encoding: utf-8 -*-  
import tornado.ioloop
import tornado.web
import time,os
from websocket import ChatHandler
import json
import base64

class UpPortraitHandler(tornado.web.RequestHandler):
 
    def post(self,*args,**kwargs):
        file_metas = self.request.files["avatar"]
        # time.sleep(2)
        ip = self.get_argument('ip')
        portrait = ''
        for meta in file_metas:
            file_name = meta['filename']
            file_type = meta['content_type']
            with open(os.getcwd() + '/files/' + file_name,'wb+') as up:
                base64_data = base64.b64encode(meta['body'])
                s = base64_data.decode()
                portrait = 'data:%s;base64,%s'%(file_type,s)
                up.write(meta['body'])
        for item in ChatHandler.msg: # 设置新头像
            if item['ip'] == ip:
                item['portrait'] = portrait
        for u in ChatHandler.users: # 向在线用户广播消息
            res = {
                'msg':json.dumps(ChatHandler.msg)
            }
            u.write_message(json.dumps(res))

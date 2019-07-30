# -*- encoding: utf-8 -*-  
import tornado.ioloop
import tornado.web
import time,os
from websocket import ChatHandler

class SetPortraitHandler(tornado.web.RequestHandler):
 
    def post(self):
        # time.sleep(2)
        print(self.get_argument('ip'))
        for item in websocket.msg:
            if item['ip'] == self.request.body['ip']:
            	# item['username'] = 
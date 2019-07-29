# -*- encoding: utf-8 -*-  
import tornado.ioloop
import tornado.web
import time,os

class upportraitHandler(tornado.web.RequestHandler):
 
    def post(self, *args, **kwargs):
        file_metas = self.request.files["avatar"]
        print(file_metas)
        # time.sleep(2)
        for meta in file_metas:
            file_name = meta['filename']
            fn = os.path.basename(file_name)
            with open(os.getcwd()+'/files/' + file_name,'wb') as up:
                up.write(meta['body'])
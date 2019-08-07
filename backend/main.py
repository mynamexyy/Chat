# -*- coding:UTF-8 -*-
import tornado.ioloop
import tornado.web
import tornado.websocket
from tornado.options import define, options, parse_command_line
from tornado import gen
from websocket import ChatHandler
from upportraithandler import UpPortraitHandler
import signal
import threading
import time,os
import logging

is_closing = False

def signal_handler(signum, frame):
    global is_closing
    logging.info('exiting...')
    is_closing = True

def try_exit(): 
    global is_closing
    if is_closing:
        # clean up here
        tornado.ioloop.IOLoop.instance().stop()
        logging.info('exit success')

application = tornado.web.Application([
    (r"/websocket", ChatHandler),
    (r"/upportrait", UpPortraitHandler),
])

if __name__ == "__main__":
    tornado.options.parse_command_line()
    signal.signal(signal.SIGINT, signal_handler)
    if not os.path.exists('files'):
        os.mkdir('files')
    application.listen(8080)
    tornado.ioloop.PeriodicCallback(try_exit, 100).start() 
    tornado.ioloop.IOLoop.instance().start()
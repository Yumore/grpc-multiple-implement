import sys
from chat_server import ChatServer
import time

#The line means that we allow you to connect with any host (any IP and Hostname).
#You can explicitly write a localhost or 127.0.0.1, then it will only work on one computer.
server = ChatServer(5000, '10.40.27.236')
server.start()

try:
    while True:
        time.sleep(1)
except KeyboardInterrupt:
    server.stop()


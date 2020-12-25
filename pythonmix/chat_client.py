import sys
import grpc
import threading
import queue as Queue
import time

import proto.chat_pb2 as chat
import proto.chat_pb2_grpc as rpc

class ChatClient():
    def __init__(self, port=5000, host='127.0.0.1'):
        self.stop_working = False
        
        self._port = port
        self._host = host
        self._on_message_receive = None
        # Create a channel to connect to the service
        self._channel = grpc.insecure_channel(f'{self._host}:{self._port}')
        # Create a service client on this channel
        self._stub = rpc.ChatServerStub(self._channel)
        self.on_server_unavailable = None 
        self.on_server_available = None

        self._listen_messages_thread = None
        self._pingpong_thread = None
        

    def start_listen_messages(self, message_received):
        # The function we'll call when the message comes
        self._on_message_receive = message_received
        # Create a separate thread where we read the incoming text of messages from the server
        self._listen_messages_thread = threading.Thread(target=self._listen_for_messages, daemon=True)
        self._listen_messages_thread.start()

    def _listen_for_messages(self):
        if not self._stub:
            return

        try:
            # The cycle will wait until the messages come, process all those who have come and wait for the next
            for note in self._stub.ChatStream(chat.Empty()):
                if self.stop_working:
                    break
                self._on_message_receive(note)
        except:
            if self.on_server_unavailable:
                self.on_server_unavailable()

    def start_pingpong(self):
        self._pingpong_thread = threading.Thread(target=self._pingpong, daemon=True)
        self._pingpong_thread.start()

    def stop(self):
        self.stop_working = True
        self._channel.close()

    def _pingpong(self):
        if not self._stub:
            return
        while not self.stop_working:
            queue = Queue.Queue()
            queue.put(1)
            try:
                resp = self._stub.PingPong(self._generate_pingpong_message(queue))
                for r in resp:
                    num = r.num
                    queue.put(num)
            except grpc.RpcError as e:
                print("stream call err, code: %s, msg: %s" % (e.code(), e.details()))
            except Exception as e:
                print("unknown err:", e)
            finally:
                queue.put("exit")
                time.sleep(1)

    def _generate_pingpong_message(self, queue):
        while True:
            num = queue.get()
            if num == "exit":
                if on_server_unavailable:
                    self.on_server_unavailable()
                return
            # print(num)
            yield chat.PingPong_t(num=num)

    def send_message(self, username, text):
        if not self._stub:
            return
        n = chat.Note()
        n.name = username
        n.message = text
        self._stub.SendNote(n)

    def close(self):
        self._channel.close()


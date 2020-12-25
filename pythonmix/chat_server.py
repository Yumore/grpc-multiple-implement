from concurrent import futures

import grpc
import time

import proto.chat_pb2 as chat
import proto.chat_pb2_grpc as rpc

class ChatServer:
    """
    a server that hostes our service
    """
    def __init__(self, port=5000, host='127.0.0.1', max_workers=10):
        self._port = port
        self._host = host

        # The server is created by thread with maximum max_workers threads,
        # all the thread-driven gRPC
        self._server = grpc.server(futures.ThreadPoolExecutor(max_workers=max_workers))
        self.chat_grpc_server = ChatGrpcServer()
        # We say that our ChattingService implements the chat service described in Proto on this server
        rpc.add_ChatServerServicer_to_server(self.chat_grpc_server, self._server)

    def start(self):
        print('Starting server...')
        if not self._server.add_insecure_port(f'{self._host}:{self._port}'):
            print(f'{self._host}:{self._port} bind failed')
            return
        self._server.start()
        print(f'Listening on {self._host}:{self._port}')

    def stop(self):
        self._server.stop(None)
        print('Server is stopped')
    
    def stop(self):
        try:
            # wait_for_termination does nothing (you can replace it with a very large sleep), just waiting
            # Until the server stops, so that the main process of the program does not end.
            self._server.wait_for_termination()
        except KeyboardInterrupt:
            self._server.stop(None)
            print('Server is stopped')
    
    def notify_message(self, text):
        request = chat.Note()
        request.name = 'server'
        request.message = text
        self.chat_grpc_server._history.append(request)

class ChatGrpcServer(rpc.ChatServerServicer):  # inheriting here from the protobuf rpc file which is generated

    def __init__(self):
        # List with all the chat history
        self._history = []
        self.onSendNote = None

    # The stream which will be used to send new messages to clients
    def ChatStream(self, request_iterator, context):

        last_index = len(self._history) - 1
        # Endlessly send messages while the connection is active
        while context.is_active():
            # Send all messages from the queue of unsent
            while last_index < len(self._history) - 1:
                last_index += 1
                message = self._history[last_index]
                # yield - it's like endless return.
                # The feature will return values over and over again when called yield.
                yield message
            # Add a little sleep to reduce the load on the server by constantly checking new messages
            time.sleep(0.01)


    def SendNote(self, request: chat.Note, context):
        """
        This method is called when a clients sends a Note to the server.

        :param request:
        :param context:
        :return:
        """
        # this is only for the server console
        print("[{}] {}".format(request.name, request.message))
        # Add it to the chat history
        self._history.append(request)
        if self.onSendNote:
            self.onSendNote(request)
        return chat.Empty()  # something needs to be returned required by protobuf language, we just return empty msg

    def PingPong(self, request_iterator, context):
        print("PingPong staring...")
        while context.is_active:
            for req in request_iterator:
                yield chat.PingPong_t(num=req.num+1)
                time.sleep(1)
            


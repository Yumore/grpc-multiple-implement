import sys
from chat_client import ChatClient
import threading

def async_call(fn):
    def wrapper(*args, **kwargs):
        threading.Thread(target=fn, args=args, kwargs=kwargs).start()
    return wrapper

class ConsoleChatClient:

    def __init__(self, port, host):
        self.username: str = ''
        self._client = ChatClient(port, host)
   
    def start(self):
        self._get_username()
        self._client.start_listen_messages(self._message_received)
        self._client.start_pingpong()
        self._client.on_server_unavailable = self._chat_server_unavailable
        self._get_inputs()

    def _get_username(self):
        while not self.username:
            self.username = input('Enter Username: ')

    def _message_received(self, note):
        print(f'[{note.name}]: {note.message}\n')

    def _chat_server_unavailable(self):
        print("chat server is unavailable")

    def _get_inputs(self):
        try:
            text = input('> ')
            while text != 'quit':
                if text:
                    self._client.send_message(self.username, text)
                text = input('> ')
        except KeyboardInterrupt:
            pass
        print('Bye')
        # We tell the customer to disconnect from the server.
        # In general, it is not necessary, because our program is already ending at this point
        self._client.close()

if __name__ == '__main__':
    console_chat = ConsoleChatClient(5000, '10.40.27.236')
    console_chat.start()

from PyQt5 import QtWidgets
import sys
import base_tools_app
import chat_server

class ChatServerApp(base_tools_app.BaseToolsApp):
    def __init__(self):
        super(ChatServerApp, self).__init__()
        self.setWindowTitle(self._translate("GRPC_TEST", "grpc服务端"))
        self.select_server_or_client(0)
        self._server = None

    def click_link(self):
        if not super().click_link():
            return
        # 连接时根据用户选择的功能调用函数
        port = self.lineEdit_port.text()
        host = self.lineEdit_ip_local.text()
        self._server = chat_server.ChatServer(port=port, host=host)
        self._server.chat_grpc_server.onSendNote = self._message_received
        self._server.start()
    
    def click_unlink(self):
        super().click_unlink()
        self._server.stop()

    def _message_received(self, note):
        s = f'[{note.name}]: {note.message}\n'
        self.write_msg(s)

    def send(self):
        message = (str(self.textEdit_send.toPlainText())).encode('utf-8')  # retrieve message from the UI
        if not message.strip():
            return
        self._server.notify_message(message)
        super().send()
        self.textEdit_send.clear()

if __name__ == '__main__':
    app = QtWidgets.QApplication(sys.argv)
    ui = ChatServerApp()
    ui.show()
    sys.exit(app.exec_())

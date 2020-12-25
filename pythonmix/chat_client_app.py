from PyQt5 import QtWidgets
import sys
import base_tools_app
import chat_client


class ChatClientApp(base_tools_app.BaseToolsApp):
    def __init__(self):
        super().__init__()
        self.setWindowTitle(self._translate("GRPC_TEST", "grpc客户端"))
        self.select_server_or_client(1)
        self.username: str = ''
        self._client = None

    def click_link(self):
        if not super().click_link():
            return

        # 连接时根据用户选择的功能调用函数
        port = self.lineEdit_port.text()
        host = self.lineEdit_ip_server.text()

        self._client = chat_client.ChatClient(port=port, host=host)
        self._client.start_listen_messages(self._message_received)
        # self._client.start_pingpong()
        self._client.on_server_unavailable = self._chat_server_unavailable

    def click_unlink(self):
        super().click_unlink()
        self._client.stop()

    def _message_received(self, note):
        s = f'[{note.name}]: {note.message}\n'
        self.write_msg(s)

    def _chat_server_unavailable(self):
        self.reset()
        self._client.stop_working = True 
        print("chat server is unavailable")
        QtWidgets.QMessageBox.warning(self, 
                                      'grpc网络测试助手',
                                      "chat server is unavailable！",
                                      QtWidgets.QMessageBox.Yes)

    def send(self):
        message = (str(self.textEdit_send.toPlainText())).encode('utf-8')  # retrieve message from the UI
        if not message.strip():
            return
        self._client.send_message(self.username or self.lineEdit_id.text(), message)
        super().send()
        self.textEdit_send.clear()

    def another_window(self):
        """
        开启一个新的窗口的方法
        :return:
        """
        # 开启新的窗口
        self.another = ChatClientApp()
        self.another.select_server_or_client(1)
        self.another.show()


if __name__ == '__main__':
    app = QtWidgets.QApplication(sys.argv)
    ui = ChatClientApp()
    ui.show()
    sys.exit(app.exec_())

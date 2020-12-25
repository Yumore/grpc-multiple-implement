from PyQt5 import QtWidgets
import tools_ui
import socket
import sys

class BaseToolsApp(tools_ui.ToolsUi):
    def __init__(self):
        super(BaseToolsApp, self).__init__()
        self.another = None
        self.link = False
        self.username = None
        self.lineEdit_ip_local.setText("")
        self.lineEdit_ip_server.setText("")
        self.lineEdit_port.setText("5000")

        # 打开软件时默认获取本机ip
        self.click_get_ip()

        self.username: str = ''

    def connect(self, ):
        """
        控件信号-槽的设置
        :param : QDialog类创建的对象
        :return: None
        """
        # 如需传递参数可以修改为connect(lambda: self.click(参数))
        super(BaseToolsApp, self).connect()
        self.pushButton_link.clicked.connect(self.click_link)
        self.pushButton_unlink.clicked.connect(self.click_unlink)
        self.pushButton_get_ip.clicked.connect(self.click_get_ip)
        self.pushButton_clear.clicked.connect(self.click_clear)
        self.pushButton_send.clicked.connect(self.send)
        self.pushButton_else.clicked.connect(self.another_window)

    def click_link(self):
        """
        pushbutton_link控件点击触发的槽
        :return: None
        """
        if self.lineEdit_port.isVisible() and not self.lineEdit_port.text().strip():
            QtWidgets.QMessageBox.warning(self, 
                                'grpc网络测试助手',
                                "服务端地址和端口不能为空",
                                QtWidgets.QMessageBox.Yes)
            return False
        if self.lineEdit_ip_server.isVisible() and not self.lineEdit_ip_server.text().strip():
            QtWidgets.QMessageBox.warning(self, 
                                'grpc网络测试助手',
                                "客户端id不能为空",
                                QtWidgets.QMessageBox.Yes)
            return False
        if self.lineEdit_id.isVisible() and not self.lineEdit_id.text().strip():
            QtWidgets.QMessageBox.warning(self, 
                                'grpc网络测试助手',
                                "客户端id不能为空",
                                QtWidgets.QMessageBox.Yes)
            return False
        self.link = True
        self.pushButton_unlink.setEnabled(True)
        self.pushButton_link.setEnabled(False)
        self.pushButton_send.setEnabled(True)
        return True
        
    def _message_received(self, note):
        s = f'[{note.name}]: {note.message}\n'
        self.write_msg(s)


    def click_unlink(self):
        """
        pushbutton_unlink控件点击触发的槽
        :return: None
        """
        # 关闭连接
        self.close_all()
        self.link = False
        self.pushButton_unlink.setEnabled(False)
        self.pushButton_link.setEnabled(True)
        self.pushButton_send.setEnabled(False)


    def click_get_ip(self):
        """
        pushbutton_get_ip控件点击触发的槽
        :return: None
        """
        # 获取本机ip
        self.lineEdit_ip_local.clear()
        s = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)
        try:
            s.connect(('8.8.8.8', 80))
            my_addr = s.getsockname()[0]
            self.lineEdit_ip_local.setText(str(my_addr))
        except Exception as ret:
            # 若无法连接互联网使用，会调用以下方法
            try:
                my_addr = socket.gethostbyname(socket.gethostname())
                self.lineEdit_ip_local.setText(str(my_addr))
            except Exception as ret_e:
                self.signal_write_msg.emit("无法获取ip，请连接网络！\n")
        finally:
            s.close()

    def send(self):
        """
        pushbutton_send控件点击触发的槽
        :return:
        """
        super().send()

    def click_clear(self):
        """
        pushbutton_clear控件点击触发的槽
        :return: None
        """
        # 清空接收区屏幕
        self.textBrowser_recv.clear()

    def close_all(self):
        """
        功能函数，关闭网络连接的方法
        :return:
        """
        self.reset()

    def reset(self):
        """
        功能函数，将按钮重置为初始状态
        :return:None
        """
        self.link = False
        self.pushButton_unlink.setEnabled(False)
        self.pushButton_link.setEnabled(True)
        self.pushButton_send.setEnabled(False)

    def another_window(self):
        """
        开启一个新的窗口的方法
        :return:
        """
        pass


if __name__ == '__main__':
    app = QtWidgets.QApplication(sys.argv)
    ui = BaseToolsApp()
    ui.show()
    sys.exit(app.exec_())

from PyQt5 import QtCore, QtGui, QtWidgets
from PyQt5.QtWidgets import QApplication, QDialog, QHBoxLayout, QVBoxLayout
import sys


class ToolsUi(QDialog):
    # 信号槽机制：设置一个信号，用于触发接收区写入动作
    signal_write_msg = QtCore.pyqtSignal(str)

    def __init__(self):
        """
        初始化窗口
        :param num: 计数窗口
        """
        super(ToolsUi, self).__init__()
        self._translate = QtCore.QCoreApplication.translate

        self.setObjectName("GRPC_TEST")
        self.resize(640, 480)
        self.setAcceptDrops(False)
        self.setSizeGripEnabled(False)

        # 定义控件
        self.pushButton_get_ip = QtWidgets.QPushButton()
        self.pushButton_link = QtWidgets.QPushButton()
        self.pushButton_unlink = QtWidgets.QPushButton()
        self.pushButton_clear = QtWidgets.QPushButton()
        self.pushButton_send = QtWidgets.QPushButton()
        self.pushButton_else = QtWidgets.QPushButton()
        self.label_port = QtWidgets.QLabel()
        self.label_ip = QtWidgets.QLabel()
        self.label_id = QtWidgets.QLabel()
        self.label_rev = QtWidgets.QLabel()
        self.label_send = QtWidgets.QLabel()
        self.label_sendto = QtWidgets.QLabel()
        self.lineEdit_port = QtWidgets.QLineEdit()
        self.lineEdit_ip_server = QtWidgets.QLineEdit()
        self.lineEdit_ip_local = QtWidgets.QLineEdit()
        self.lineEdit_id = QtWidgets.QLineEdit()
        self.textEdit_send = QtWidgets.QTextEdit()
        self.textBrowser_recv = QtWidgets.QTextBrowser()
        self.textBrowser_sent = QtWidgets.QTextBrowser()

        # 定义布局
        self.h_box_1 = QHBoxLayout()
        self.h_box_2 = QHBoxLayout()
        self.h_box_3 = QHBoxLayout()
        self.h_box_4 = QHBoxLayout()
        self.h_box_5 = QHBoxLayout()
        self.h_box_recv = QHBoxLayout()
        self.h_box_exit = QHBoxLayout()
        self.h_box_all = QHBoxLayout()
        self.v_box_set = QVBoxLayout()
        self.v_box_send = QVBoxLayout()
        # self.v_box_web = QVBoxLayout()
        self.v_box_exit = QVBoxLayout()
        self.v_box_right = QVBoxLayout()
        self.v_box_left = QVBoxLayout()

        # 设置字体
        font = QtGui.QFont()
        font.setFamily("Yuppy TC")
        font.setPointSize(20)
        font.setBold(True)
        font.setItalic(False)
        font.setUnderline(True)
        font.setWeight(75)
        font.setStrikeOut(False)
        self.label_rev.setFont(font)
        self.label_send.setFont(font)

        # 设置控件的初始属性
        self.label_sendto.show()
        self.label_id.hide()
        self.lineEdit_ip_server.show()
        self.lineEdit_id.hide()
        self.pushButton_unlink.setEnabled(False)
        self.pushButton_send.setEnabled(False)
        self.lineEdit_ip_local.setReadOnly(True)

        # 调用布局方法和控件显示文字的方法
        self.layout_ui()
        self.ui_translate()
        self.connect()


    def layout_ui(self):
        """
        设置控件的布局
        :return:
        """
        # 左侧布局添加
        self.h_box_1.addWidget(self.label_ip)
        self.h_box_1.addWidget(self.lineEdit_ip_local)
        self.h_box_1.addWidget(self.pushButton_get_ip)
        self.h_box_2.addWidget(self.label_port)
        self.h_box_2.addWidget(self.lineEdit_port)
        self.h_box_2.addWidget(self.pushButton_else)
        self.h_box_3.addWidget(self.label_sendto)
        self.h_box_3.addWidget(self.lineEdit_ip_server)
        self.h_box_4.addWidget(self.pushButton_link)
        self.h_box_4.addWidget(self.pushButton_unlink)
        self.h_box_5.addWidget(self.label_id)
        self.h_box_5.addWidget(self.lineEdit_id)
        self.v_box_set.addLayout(self.h_box_1)
        self.v_box_set.addLayout(self.h_box_2)
        self.v_box_set.addLayout(self.h_box_3)
        self.v_box_set.addLayout(self.h_box_5)
        self.v_box_set.addLayout(self.h_box_4)
        self.v_box_send.addWidget(self.label_send)
        self.v_box_exit.addWidget(self.textBrowser_sent)
        self.v_box_exit.addWidget(self.textEdit_send)
        self.v_box_exit.addWidget(self.pushButton_send)
        self.v_box_exit.setStretchFactor(self.textBrowser_sent, 10)
        self.v_box_exit.setStretchFactor(self.textEdit_send, 1)
        self.v_box_exit.setStretchFactor(self.pushButton_send, 1)
        
        self.h_box_exit.addLayout(self.v_box_exit)

        self.v_box_left.addLayout(self.v_box_set)
        self.v_box_left.addLayout(self.v_box_send)
        self.v_box_left.addLayout(self.h_box_exit)

        # 右侧布局添加
        self.h_box_recv.addWidget(self.label_rev)
        self.h_box_recv.addWidget(self.pushButton_clear)
        self.v_box_right.addLayout(self.h_box_recv)
        self.v_box_right.addWidget(self.textBrowser_recv)

        # 将左右布局添加到窗体布局
        self.h_box_all.addLayout(self.v_box_left)
        self.h_box_all.addLayout(self.v_box_right)

        # 设置窗体布局到窗体
        self.setLayout(self.h_box_all)

    def ui_translate(self):
        """
        控件默认显示文字的设置
        :param : QDialog类创建的对象
        :return: None
        """
        # 设置各个控件显示的文字
        # 也可使用控件的setText()方法设置文字
        self.setWindowTitle(self._translate("GRPC_TEST", "grpc网络测试"))
        self.pushButton_link.setText(self._translate("GRPC_TEST", "连接网络"))
        self.pushButton_unlink.setText(self._translate("GRPC_TEST", "断开网络"))
        self.pushButton_get_ip.setText(self._translate("GRPC_TEST", "重新获取IP"))
        self.pushButton_clear.setText(self._translate("GRPC_TEST", "清除消息"))
        self.pushButton_send.setText(self._translate("GRPC_TEST", "发送"))
        self.pushButton_else.setText(self._translate("GRPC_TEST", "窗口多开another"))
        self.label_ip.setText(self._translate("GRPC_TEST", "本机IP:"))
        self.label_port.setText(self._translate("GRPC_TEST", "端口号:"))
        self.label_sendto.setText(self._translate("GRPC_TEST", "服务端地址:"))
        self.label_id.setText(self._translate("GRPC_TEST", "用户id:"))
        self.label_rev.setText(self._translate("GRPC_TEST", "接收区域"))
        self.label_send.setText(self._translate("GRPC_TEST", "发送区域"))

    def connect(self):
        """
        控件信号-槽的设置
        :param : QDialog类创建的对象
        :return: None
        """
        self.signal_write_msg.connect(self.write_msg)

    def select_server_or_client(self, index=1):
        '''
        选择服务端模式还是客户端模式界面
        0-服务端
        1-客户端
        '''
        if index == 0: # server
            self.label_id.hide()
            self.lineEdit_id.hide()
            self.label_sendto.hide()
            self.lineEdit_ip_server.hide()
            self.pushButton_else.hide()
        elif index == 1: # client
            self.label_id.show()
            self.lineEdit_id.show()
            self.label_sendto.show()
            self.lineEdit_ip_server.show()
            self.pushButton_else.show()

    def send(self):
        """
        pushbutton_send控件点击触发的槽
        :return:
        """
        self.textBrowser_sent.insertPlainText(self.textEdit_send.toPlainText()+'\n')
        # 滚动条移动到结尾
        self.textBrowser_sent.moveCursor(QtGui.QTextCursor.End)

    def write_msg(self, msg):
        # signal_write_msg信号会触发这个函数
        """
        功能函数，向接收区写入数据的方法
        信号-槽触发
        tip：PyQt程序的子线程中，直接向主线程的界面传输字符是不符合安全原则的
        :return: None
        """
        self.textBrowser_recv.insertPlainText(msg)
        # 滚动条移动到结尾
        self.textBrowser_recv.moveCursor(QtGui.QTextCursor.End)

    def closeEvent(self, event):
        """
        重写closeEvent方法，实现dialog窗体关闭时执行一些代码
        :param event: close()触发的事件
        :return: None
        """
        self.close_all()

    def close_all(self):
        pass

if __name__ == '__main__':
    """
    显示界面
    """
    app = QApplication(sys.argv)
    ui = ToolsUi()
    ui.show()
    sys.exit(app.exec_())

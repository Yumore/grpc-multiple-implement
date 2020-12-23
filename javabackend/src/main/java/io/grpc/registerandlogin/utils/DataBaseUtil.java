package io.grpc.registerandlogin.utils;

import java.sql.*;

/**
 * 数据库相关操作工具类
 *
 * @author liuchang
 * mysql> show tables;
 * +----------------+
 * | Tables_in_grpc |
 * +----------------+
 * | user_table     |
 * +----------------+
 */
public class DataBaseUtil {
    public static final String COLUMN_USER_NAME = "username";
    public static final String COLUMN_PASSWORD = "password";
    public static final String COLUMN_DEVICE_ID = "deviceid";
    public static final String COLUMN_AUTH = "auth";
    private static final String DRIVER_NAME = "com.mysql.cj.jdbc.Driver";
    //    private static final String URL = "jdbc:mysql://localhost:3306/gRPC?useUnicode=true&characterEncoding=UTF-8&serverTimezone=UTC?autoReconnect=true&useSSL=false";
    private static final String URL = "jdbc:mysql://localhost:3306/gRPC?autoReconnect=true&useSSL=false";
    private static final String USER_NAME = "root";
    private static final String PASSWORD = "Nathan@126.com";

    /**
     * 建表
     */
    DataBaseUtil() {
        Connection connection = null;
        try {
            Class.forName(DRIVER_NAME);
            connection = DriverManager.getConnection(URL, USER_NAME, PASSWORD);
            String createTableSql = "CREATE TABLE IF NOT EXISTS `user_table`(" +
                    "   `user_id` INT UNSIGNED AUTO_INCREMENT," +
                    "   `username` VARCHAR(40) NOT NULL," +
                    "   `password` VARCHAR(40) NOT NULL," +
                    "   `deviceid` VARCHAR(40) NOT NULL," +
                    "   `auth` VARCHAR(40) NOT NULL," +
                    "   PRIMARY KEY ( `user_id` )" +
                    ")ENGINE=InnoDB DEFAULT CHARSET=utf8;";
            PreparedStatement preparedStatement = connection.prepareStatement(createTableSql);
            preparedStatement.executeUpdate();
            preparedStatement.close();
            connection.close();
        } catch (Exception e) {
            e.printStackTrace();
        } finally {
            if (connection != null) {
                try {
                    connection.close();
                } catch (SQLException e) {
                    e.printStackTrace();
                }
            }
        }
    }

    /**
     * 向数据库的user_table表中添加一条用户数据
     *
     * @param userName 用户名
     * @param password 密码
     * @param deviceId 设备id
     * @param auth     auth
     */
    @SuppressWarnings("SqlDialectInspection")
    public static void addEntry(String userName, String password, String deviceId, String auth) {
        System.out.println("addEntity");
        Connection connection = null;
        try {
            Class.forName(DRIVER_NAME);
            connection = DriverManager.getConnection(URL, USER_NAME, PASSWORD);
            if (connection == null) {
                System.out.println("connection is null");
            } else {
                String sql = "select table_name from information_schema.tables where table_schema='opms'";
                Statement statement = connection.createStatement();
                ResultSet result = statement.executeQuery(sql);
                while (result.next()) {
                    System.out.println(result.getString("TABLE_NAME"));
                }
            }
            password = EncryptionUtil.generateEncryptedPassword(password, EncryptionUtil.generateSalt(password));
            userName = "\"" + userName + "\"";
            password = "\"" + password + "\"";
            deviceId = "\"" + deviceId + "\"";
            auth = "\"" + auth + "\"";

            String insertSql = "INSERT INTO user_table " +
                    " (username, password, deviceid, auth)" +
                    " VALUES " + "(" + userName + ", " + password + ", " + deviceId + ", " + auth + ")";
            PreparedStatement preparedStatement = connection.prepareStatement(insertSql);
            preparedStatement.executeUpdate();
            preparedStatement.close();
            connection.close();
        } catch (Exception e) {
            e.printStackTrace();
        } finally {
            if (connection != null) {
                try {
                    connection.close();
                } catch (SQLException e) {
                    e.printStackTrace();
                }
            }
        }
    }

    /**
     * 根据用户名查询目标数据
     *
     * @param userName 用户名
     * @param target   目标column的数据
     * @return 查询到的值，未查寻到返回空字符串
     */
    public static String query(String userName, String target) {
        System.out.println("queryEntity");
        Connection connection = null;
        String result = "";
        try {
            Class.forName(DRIVER_NAME);
            connection = DriverManager.getConnection(URL, USER_NAME, PASSWORD);
            if (connection == null) {
                System.out.println("connection is null");
            } else {
                String sql = "select table_name from information_schema.tables where table_schema='opms'";
                Statement statement = connection.createStatement();
                ResultSet resultSet = statement.executeQuery(sql);
                while (resultSet.next()) {
                    System.out.println(resultSet.getString("TABLE_NAME"));
                }
            }
            userName = "\"" + userName + "\"";

            String querySql = "SELECT " + target + " from user_table WHERE username=" + userName + ";";
            PreparedStatement preparedStatement = connection.prepareStatement(querySql);
            ResultSet rs = preparedStatement.executeQuery();
            if (rs.next()) {
                result = rs.getString(target);
            }
            rs.close();
            preparedStatement.close();
            connection.close();
            return result;
        } catch (Exception e) {
            e.printStackTrace();
        } finally {
            if (connection != null) {
                try {
                    connection.close();
                } catch (SQLException e) {
                    e.printStackTrace();
                }
            }
        }
        return result;
    }

    /**
     * 更新制定用户名的auth
     *
     * @param userName 用户名
     * @param newAuth  新auth
     * @return 是否更新成功
     */
    public static boolean updateAuth(String userName, String newAuth) {
        Connection connection = null;
        try {
            Class.forName(DRIVER_NAME);
            connection = DriverManager.getConnection(URL, USER_NAME, PASSWORD);

            userName = "\"" + userName + "\"";
            newAuth = "\"" + newAuth + "\"";

            String sql = "UPDATE user_table" +
                    " SET auth= " + newAuth +
                    " WHERE username= " + userName + ";";
            PreparedStatement preparedStatement = connection.prepareStatement(sql);
            preparedStatement.executeUpdate();
            preparedStatement.close();
            connection.close();
            return true;
        } catch (Exception e) {
            e.printStackTrace();
        } finally {
            if (connection != null) {
                try {
                    connection.close();
                } catch (SQLException e) {
                    e.printStackTrace();
                }
            }
        }
        return false;
    }

    /**
     * 更新制定用户名的auth
     *
     * @param userName    用户名
     * @param newDeviceId 新auth
     * @return 是否更新成功
     */
    public static boolean updateDeviceId(String userName, String newDeviceId) {
        Connection connection = null;
        try {
            Class.forName(DRIVER_NAME);
            connection = DriverManager.getConnection(URL, USER_NAME, PASSWORD);

            userName = "\"" + userName + "\"";
            newDeviceId = "\"" + newDeviceId + "\"";

            String sql = "UPDATE user_table" +
                    " SET deviceid= " + newDeviceId +
                    " WHERE username= " + userName + ";";
            PreparedStatement preparedStatement = connection.prepareStatement(sql);
            preparedStatement.executeUpdate();
            preparedStatement.close();
            connection.close();
            return true;
        } catch (Exception e) {
            e.printStackTrace();
        } finally {
            if (connection != null) {
                try {
                    connection.close();
                } catch (SQLException e) {
                    e.printStackTrace();
                }
            }
        }
        return false;
    }
}

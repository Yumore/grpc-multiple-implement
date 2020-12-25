package io.grpc.registerandlogin.utils;

import java.sql.*;

/**
 * 数据库相关操作工具类
 *
 * @author nathaniel
 * mysql> show tables;
 * +----------------+
 * | Tables_in_grpc |
 * +----------------+
 * | user_table  |
 * +----------------+
 */
public class DatabaseUtils {
    public static final String COLUMN_USER_NAME = "username";
    public static final String COLUMN_PASSWORD = "password";
    public static final String COLUMN_DEVICE_ID = "deviceId";
    public static final String COLUMN_TOKEN = "token";
    private static final String DRIVER_NAME = "com.mysql.cj.jdbc.Driver";
    private static final String MYSQL_URL_0 = "jdbc:mysql://localhost:3306/gRPC?useUnicode=true&characterEncoding=UTF-8&serverTimezone=UTC?autoReconnect=true&useSSL=false";
    private static final String MYSQL_URL = "jdbc:mysql://localhost:3306/gRPC?autoReconnect=true&useSSL=false";
    private static final String USERNAME = "root";
    private static final String PASSWORD = "Nathan@126.com";
    private static final String TABLE_NAME = "user_table";
    @SuppressWarnings("SqlNoDataSourceInspection")
    private static final String CREATE_TABLE = "CREATE TABLE IF NOT EXISTS `user_table`(" +
            "`user_id` INT UNSIGNED AUTO_INCREMENT," +
            "`username` VARCHAR(40) NOT NULL," +
            "`password` VARCHAR(40) NOT NULL," +
            "`deviceId` VARCHAR(40) NOT NULL," +
            "`token` VARCHAR(40) NOT NULL," +
            "PRIMARY KEY ( `user_id` )" +
            ")ENGINE=InnoDB DEFAULT CHARSET=utf8;";
    private static DatabaseUtils databaseUtils;
    private Connection connection;
    private boolean initialized;
    private PreparedStatement preparedStatement;

    @SuppressWarnings("SqlNoDataSourceInspection")
    private DatabaseUtils() {
        try {
            Class.forName(DRIVER_NAME).getConstructor();
            connection = DriverManager.getConnection(MYSQL_URL, USERNAME, PASSWORD);
            connection.setAutoCommit(false);
            if (!initialized) {
                createTable();
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    public synchronized static DatabaseUtils getInstance() {
        if (databaseUtils == null) {
            databaseUtils = new DatabaseUtils();
        }
        return databaseUtils;
    }

    /**
     * 向数据库的user_table表中添加一条用户数据
     *
     * @param username 用户名
     * @param password 密码
     * @param deviceId 设备id
     * @param token    token
     */
    @SuppressWarnings({"SqlDialectInspection", "SqlResolve", "SqlInsertValues"})
    public void addEntry(String username, String password, String deviceId, String token) {
        System.out.println("addEntity");
        try {
            password = EncryptionUtils.generateEncryptedPassword(password, EncryptionUtils.generateSalt(password));
            String insertSql = "INSERT INTO  " + TABLE_NAME + "(`username`, `password`, `deviceId`, `token`) VALUES ( ?, ?, ?, ?)";
            preparedStatement = connection.prepareStatement(insertSql);
            preparedStatement.setString(1, username);
            preparedStatement.setString(2, password);
            preparedStatement.setString(3, deviceId);
            preparedStatement.setString(4, token);
            preparedStatement.executeUpdate();
            connection.commit();
        } catch (Exception e) {
            try {
                preparedStatement.close();
                connection.rollback();
                connection.close();
            } catch (SQLException throwable) {
                throwable.printStackTrace();
            }
            e.printStackTrace();
        }
    }

    /**
     * 根据用户名查询目标数据
     *
     * @param username 用户名
     * @param target   目标column的数据
     * @return 查询到的值，未查寻到返回空字符串
     */
    @SuppressWarnings({"SqlResolve", "SqlNoDataSourceInspection"})
    public String queryEntity(String username, String target) {
        String result = "";
        try {
            String querySql = "SELECT " + target + " from " + TABLE_NAME + " WHERE username = ?";
            preparedStatement = connection.prepareStatement(querySql);
            preparedStatement.setString(1, username);
            ResultSet resultSet = preparedStatement.executeQuery();
            if (resultSet.next()) {
                result = resultSet.getString(target);
            }
            resultSet.close();
            return result;
        } catch (Exception e) {
            try {
                preparedStatement.close();
                connection.rollback();
                connection.close();
            } catch (SQLException throwable) {
                throwable.printStackTrace();
            }
            e.printStackTrace();
        }
        return result;
    }

    /**
     * 更新制定用户名的token
     *
     * @param username 用户名
     * @param token    新token
     */
    @SuppressWarnings({"SqlResolve", "SqlNoDataSourceInspection"})
    public void updateToken(String username, String token, String deviceId) {
        try {
            String sql = "UPDATE " + TABLE_NAME + " SET token = ?, deviceid = ? WHERE username = ?";
            PreparedStatement preparedStatement = connection.prepareStatement(sql);
            preparedStatement.setString(1, token);
            preparedStatement.setString(2, deviceId);
            preparedStatement.setString(3, username);
            preparedStatement.executeUpdate();
            connection.commit();
        } catch (Exception e) {
            try {
                preparedStatement.close();
                connection.rollback();
            } catch (SQLException throwable) {
                throwable.printStackTrace();
            }
            e.printStackTrace();
        }
    }

    /**
     * 更新制定用户名的token
     *
     * @param username 用户名
     * @param deviceId 新token
     */
    @SuppressWarnings({"SqlNoDataSourceInspection", "SqlResolve"})
    public void updateDeviceId(String username, String deviceId) {
        try {
            final String sql = "UPDATE " + TABLE_NAME + " SET deviceId = ? WHERE username = ?";
            preparedStatement = connection.prepareStatement(sql);
            preparedStatement.setString(1, deviceId);
            preparedStatement.setString(2, username);
            preparedStatement.executeUpdate();
            connection.commit();
        } catch (Exception e) {
            try {
                preparedStatement.close();
                connection.rollback();
                connection.close();
            } catch (SQLException throwable) {
                throwable.printStackTrace();
            }
            e.printStackTrace();
        }
    }

    public void createTable() {
        try {
            preparedStatement = connection.prepareStatement(CREATE_TABLE);
            preparedStatement.executeUpdate();
            connection.commit();
            initialized = true;
        } catch (SQLException throwable) {
            try {
                preparedStatement.close();
                connection.close();
            } catch (SQLException sqlException) {
                sqlException.printStackTrace();
            }
            throwable.printStackTrace();
        }
    }
}

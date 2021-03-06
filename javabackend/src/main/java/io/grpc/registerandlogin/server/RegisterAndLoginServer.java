/*
 * Copyright 2015 The gRPC Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

package io.grpc.registerandlogin.server;

import io.grpc.Server;
import io.grpc.ServerBuilder;
import io.grpc.registerandlogin.*;
import io.grpc.registerandlogin.utils.Base64Encoder;
import io.grpc.registerandlogin.utils.DatabaseUtils;
import io.grpc.registerandlogin.utils.EncryptionUtils;
import io.grpc.stub.StreamObserver;

import java.io.IOException;
import java.nio.charset.StandardCharsets;
import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;
import java.util.logging.Logger;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

import static io.grpc.registerandlogin.utils.DatabaseUtils.*;

/**
 * @author nathaniel
 */
public class RegisterAndLoginServer {
    private static final Logger logger = Logger.getLogger(RegisterAndLoginServer.class.getName());
    private static final int RESULT_SUCCESS = 0;
    private static final int RESULT_FAILURE = -1;

    private Server server;

    /**
     * Main launches the server from the command line.
     */
    public static void main(String[] args) throws IOException, InterruptedException {
        final RegisterAndLoginServer server = new RegisterAndLoginServer();
        server.start();
        server.blockUntilShutdown();
    }

    /**
     * 生成auth
     *
     * @param userName 用户名
     * @param deviceId 设备id
     * @return auth
     */
    private static String generateAuth(String userName, String deviceId) {
        return encoderByMd5(userName + deviceId);
    }

    private static String encoderByMd5(String str) {
        MessageDigest md5;
        try {
            md5 = MessageDigest.getInstance("MD5");
            return Base64Encoder.encode(md5.digest(str.getBytes(StandardCharsets.UTF_8)));
        } catch (NoSuchAlgorithmException e) {
            e.printStackTrace();
        }
        return null;
    }

    private void start() throws IOException {
        /* The port on which the server should run */
        int port = 50051;
        server = ServerBuilder.forPort(port)
                .addService(new LoginImpl())
                .addService(new CheckAuthImpl())
                .build()
                .start();
        logger.info("Server started, listening on " + port);
        Runtime.getRuntime().addShutdownHook(new Thread() {
            @Override
            public void run() {
                // Use stderr here since the logger may have been reset by its JVM shutdown hook.
                System.err.println("*** shutting down gRPC server since JVM is shutting down");
                RegisterAndLoginServer.this.stop();
                System.err.println("*** server shut down");
            }
        });
    }

    private void stop() {
        if (server != null) {
            server.shutdown();
        }
    }

    /**
     * Await termination on the main thread since the grpc library uses daemon threads.
     */
    private void blockUntilShutdown() throws InterruptedException {
        if (server != null) {
            server.awaitTermination();
        }
    }

    public static class CheckAuthImpl extends AuthorityGrpc.AuthorityImplBase {
        /**
         * 检查auth
         *
         * @param req              请求实体
         * @param responseObserver 响应观察者
         */
        @Override
        public void authority(AuthorityRequest req, StreamObserver<AuthorityReply> responseObserver) {
            System.out.println("checkAuthInvoked");
            String userName = req.getUserName();
            String auth = req.getAuth();
            String queriedAuth = DatabaseUtils.getInstance().queryEntity(userName, COLUMN_TOKEN);
            AuthorityReply reply;
            //用户名对应的auth
            if (!queriedAuth.equals(auth)) {
                reply = AuthorityReply.newBuilder().setIsValid(false).build();
            } else {
                //auth仍有效，无需登录
                reply = AuthorityReply.newBuilder().setIsValid(true).build();
            }
            responseObserver.onNext(reply);
            responseObserver.onCompleted();
        }
    }

    public static class LoginImpl extends io.grpc.registerandlogin.grpc.LoginGrpc.LoginImplBase {
        /**
         * 登录
         *
         * @param req              请求实体
         * @param responseObserver 相应观察者
         */
        @Override
        public void login(LoginRequest req, StreamObserver<LoginReply> responseObserver) {
            System.out.println("req.name is " + req.getUserName());
            String userName = req.getUserName();
            String userPwd = req.getUserPwd();
            String deviceId = req.getDeviceId();
            String queriedUserName = DatabaseUtils.getInstance().queryEntity(userName, COLUMN_USER_NAME);
            String queriedPwd = DatabaseUtils.getInstance().queryEntity(userName, COLUMN_PASSWORD);
            int resultCode = RESULT_FAILURE;
            String resultMsg = "null";
            String newAuth = "null";
            System.out.println(queriedUserName + ":" + queriedPwd);
            String regex = "^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{8,16}$";
            if (queriedUserName == null || queriedUserName.length() == 0) {
                Pattern pattern = Pattern.compile(regex);
                Matcher matcher = pattern.matcher(userPwd);
                if (matcher.matches()) {
                    String auth = generateAuth(userName, deviceId);
                    DatabaseUtils.getInstance().addEntry(userName, userPwd, deviceId, auth);
                    resultCode = RESULT_SUCCESS;
                    resultMsg = "注册成功";
                } else {
                    resultCode = RESULT_FAILURE;
                    resultMsg = "密码不合格规则";
                }
            } else {
                try {
                    if (!EncryptionUtils.authenticate(userPwd, queriedPwd, EncryptionUtils.generateSalt(userPwd))) {
                        resultMsg = "用户名与密码不匹配";
                    } else {
                        newAuth = generateAuth(userName, deviceId);
                        resultCode = RESULT_SUCCESS;
                        resultMsg = "登录成功";
                        DatabaseUtils.getInstance().updateToken(userName, newAuth, deviceId);
                    }
                } catch (Exception e) {
                    e.printStackTrace();
                }
            }
            LoginReply reply = LoginReply.newBuilder().setResultCode(resultCode).setAuth(newAuth).setResultMsg(resultMsg).build();
            responseObserver.onNext(reply);
            responseObserver.onCompleted();
        }
    }

    static class RegisterImpl extends RegisterGrpc.RegisterImplBase {
        /**
         * 注册
         *
         * @param req              请求实体
         * @param responseObserver 响应观察者
         */
        @Override
        public void register(RegisterRequest req, StreamObserver<RegisterReply> responseObserver) {
            String userName = req.getUserName();
            String userPwd = req.getUserPwd();
            String deviceId = req.getDeviceId();
            String queriedUserName = DatabaseUtils.getInstance().queryEntity(userName, COLUMN_USER_NAME);
            RegisterReply reply;
            String regex = "^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{8,16}$";
            if (queriedUserName != null && queriedUserName.length() != 0) {
                //userName已存在
                reply = RegisterReply.newBuilder().setResultCode(RESULT_FAILURE).setResultMsg("用户名已经存在，请换一个用户名").build();
            } else if (!userPwd.matches(regex)) {
                //密码不符合规则
                reply = RegisterReply.newBuilder().setResultCode(RESULT_FAILURE).setResultMsg("密码不符合规则").build();
            } else {
                //注册成功
                String auth = generateAuth(userName, deviceId);
                reply = RegisterReply.newBuilder().setResultCode(RESULT_SUCCESS).setAuth(auth).setResultMsg("注册成功").build();
                //addEntry中对密码做加密处理
                DatabaseUtils.getInstance().addEntry(userName, userPwd, deviceId, auth);
            }
            //回调结果
            responseObserver.onNext(reply);
            responseObserver.onCompleted();
        }
    }
}

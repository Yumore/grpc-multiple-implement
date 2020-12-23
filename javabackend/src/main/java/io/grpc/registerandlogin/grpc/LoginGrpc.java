package io.grpc.registerandlogin.grpc;

import io.grpc.registerandlogin.LoginProto;
import io.grpc.registerandlogin.LoginReply;
import io.grpc.registerandlogin.LoginRequest;

import static io.grpc.MethodDescriptor.generateFullMethodName;
import static io.grpc.stub.ClientCalls.asyncUnaryCall;
import static io.grpc.stub.ClientCalls.blockingUnaryCall;
import static io.grpc.stub.ClientCalls.futureUnaryCall;
import static io.grpc.stub.ServerCalls.asyncUnaryCall;
import static io.grpc.stub.ServerCalls.asyncUnimplementedUnaryCall;

/**
 * <pre>
 * Service定义
 * </pre>
 */
@javax.annotation.Generated(
        value = "by gRPC proto compiler (version 1.34.1)",
        comments = "Source: login.proto")
public final class LoginGrpc {

    public static final String SERVICE_NAME = "RegisterAndLogin.Login";
    private static final int METHODID_LOGIN = 0;
    // Static method descriptors that strictly reflect the proto.
    private static volatile io.grpc.MethodDescriptor<LoginRequest,
            LoginReply> getLoginMethod;
    private static volatile io.grpc.ServiceDescriptor serviceDescriptor;

    private LoginGrpc() {
    }

    @io.grpc.stub.annotations.RpcMethod(
            fullMethodName = SERVICE_NAME + '/' + "Login",
            requestType = LoginRequest.class,
            responseType = LoginReply.class,
            methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
    public static io.grpc.MethodDescriptor<LoginRequest,
            LoginReply> getLoginMethod() {
        io.grpc.MethodDescriptor<LoginRequest, LoginReply> getLoginMethod;
        if ((getLoginMethod = LoginGrpc.getLoginMethod) == null) {
            synchronized (LoginGrpc.class) {
                if ((getLoginMethod = LoginGrpc.getLoginMethod) == null) {
                    LoginGrpc.getLoginMethod = getLoginMethod =
                            io.grpc.MethodDescriptor.<LoginRequest, LoginReply>newBuilder()
                                    .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
                                    .setFullMethodName(generateFullMethodName(SERVICE_NAME, "Login"))
                                    .setSampledToLocalTracing(true)
                                    .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                                            LoginRequest.getDefaultInstance()))
                                    .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                                            LoginReply.getDefaultInstance()))
                                    .setSchemaDescriptor(new LoginMethodDescriptorSupplier("Login"))
                                    .build();
                }
            }
        }
        return getLoginMethod;
    }

    /**
     * Creates a new async stub that supports all call types for the service
     */
    public static LoginStub newStub(io.grpc.Channel channel) {
        io.grpc.stub.AbstractStub.StubFactory<LoginStub> factory =
                new io.grpc.stub.AbstractStub.StubFactory<LoginStub>() {
                    @Override
                    public LoginStub newStub(io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
                        return new LoginStub(channel, callOptions);
                    }
                };
        return LoginStub.newStub(factory, channel);
    }

    /**
     * Creates a new blocking-style stub that supports unary and streaming output calls on the service
     */
    public static LoginBlockingStub newBlockingStub(
            io.grpc.Channel channel) {
        io.grpc.stub.AbstractStub.StubFactory<LoginBlockingStub> factory =
                new io.grpc.stub.AbstractStub.StubFactory<LoginBlockingStub>() {
                    @Override
                    public LoginBlockingStub newStub(io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
                        return new LoginBlockingStub(channel, callOptions);
                    }
                };
        return LoginBlockingStub.newStub(factory, channel);
    }

    /**
     * Creates a new ListenableFuture-style stub that supports unary calls on the service
     */
    public static LoginFutureStub newFutureStub(
            io.grpc.Channel channel) {
        io.grpc.stub.AbstractStub.StubFactory<LoginFutureStub> factory =
                new io.grpc.stub.AbstractStub.StubFactory<LoginFutureStub>() {
                    @Override
                    public LoginFutureStub newStub(io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
                        return new LoginFutureStub(channel, callOptions);
                    }
                };
        return LoginFutureStub.newStub(factory, channel);
    }

    public static io.grpc.ServiceDescriptor getServiceDescriptor() {
        io.grpc.ServiceDescriptor result = serviceDescriptor;
        if (result == null) {
            synchronized (LoginGrpc.class) {
                result = serviceDescriptor;
                if (result == null) {
                    serviceDescriptor = result = io.grpc.ServiceDescriptor.newBuilder(SERVICE_NAME)
                            .setSchemaDescriptor(new LoginFileDescriptorSupplier())
                            .addMethod(getLoginMethod())
                            .build();
                }
            }
        }
        return result;
    }

    /**
     * <pre>
     * Service定义
     * </pre>
     */
    public static abstract class LoginImplBase implements io.grpc.BindableService {

        /**
         *
         */
        public void login(LoginRequest request,
                          io.grpc.stub.StreamObserver<LoginReply> responseObserver) {
            asyncUnimplementedUnaryCall(getLoginMethod(), responseObserver);
        }

        @Override
        public final io.grpc.ServerServiceDefinition bindService() {
            return io.grpc.ServerServiceDefinition.builder(getServiceDescriptor())
                    .addMethod(
                            getLoginMethod(),
                            asyncUnaryCall(
                                    new MethodHandlers<
                                            LoginRequest,
                                            LoginReply>(
                                            this, METHODID_LOGIN)))
                    .build();
        }
    }

    /**
     * <pre>
     * Service定义
     * </pre>
     */
    public static final class LoginStub extends io.grpc.stub.AbstractAsyncStub<LoginStub> {
        private LoginStub(
                io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
            super(channel, callOptions);
        }

        @Override
        protected LoginStub build(
                io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
            return new LoginStub(channel, callOptions);
        }

        /**
         *
         */
        public void login(LoginRequest request,
                          io.grpc.stub.StreamObserver<LoginReply> responseObserver) {
            asyncUnaryCall(
                    getChannel().newCall(getLoginMethod(), getCallOptions()), request, responseObserver);
        }
    }

    /**
     * <pre>
     * Service定义
     * </pre>
     */
    public static final class LoginBlockingStub extends io.grpc.stub.AbstractBlockingStub<LoginBlockingStub> {
        private LoginBlockingStub(
                io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
            super(channel, callOptions);
        }

        @Override
        protected LoginBlockingStub build(
                io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
            return new LoginBlockingStub(channel, callOptions);
        }

        /**
         *
         */
        public LoginReply login(LoginRequest request) {
            return blockingUnaryCall(
                    getChannel(), getLoginMethod(), getCallOptions(), request);
        }
    }

    /**
     * <pre>
     * Service定义
     * </pre>
     */
    public static final class LoginFutureStub extends io.grpc.stub.AbstractFutureStub<LoginFutureStub> {
        private LoginFutureStub(
                io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
            super(channel, callOptions);
        }

        @Override
        protected LoginFutureStub build(
                io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
            return new LoginFutureStub(channel, callOptions);
        }

        /**
         *
         */
        public com.google.common.util.concurrent.ListenableFuture<LoginReply> login(
                LoginRequest request) {
            return futureUnaryCall(
                    getChannel().newCall(getLoginMethod(), getCallOptions()), request);
        }
    }

    private static final class MethodHandlers<Req, Resp> implements
            io.grpc.stub.ServerCalls.UnaryMethod<Req, Resp>,
            io.grpc.stub.ServerCalls.ServerStreamingMethod<Req, Resp>,
            io.grpc.stub.ServerCalls.ClientStreamingMethod<Req, Resp>,
            io.grpc.stub.ServerCalls.BidiStreamingMethod<Req, Resp> {
        private final LoginImplBase serviceImpl;
        private final int methodId;

        MethodHandlers(LoginImplBase serviceImpl, int methodId) {
            this.serviceImpl = serviceImpl;
            this.methodId = methodId;
        }

        @Override
        @SuppressWarnings("unchecked")
        public void invoke(Req request, io.grpc.stub.StreamObserver<Resp> responseObserver) {
            switch (methodId) {
                case METHODID_LOGIN:
                    serviceImpl.login((LoginRequest) request,
                            (io.grpc.stub.StreamObserver<LoginReply>) responseObserver);
                    break;
                default:
                    throw new AssertionError();
            }
        }

        @Override
        @SuppressWarnings("unchecked")
        public io.grpc.stub.StreamObserver<Req> invoke(
                io.grpc.stub.StreamObserver<Resp> responseObserver) {
            switch (methodId) {
                default:
                    throw new AssertionError();
            }
        }
    }

    private static abstract class LoginBaseDescriptorSupplier
            implements io.grpc.protobuf.ProtoFileDescriptorSupplier, io.grpc.protobuf.ProtoServiceDescriptorSupplier {
        LoginBaseDescriptorSupplier() {
        }

        @Override
        public com.google.protobuf.Descriptors.FileDescriptor getFileDescriptor() {
            return LoginProto.getDescriptor();
        }

        @Override
        public com.google.protobuf.Descriptors.ServiceDescriptor getServiceDescriptor() {
            return getFileDescriptor().findServiceByName("Login");
        }
    }

    private static final class LoginFileDescriptorSupplier
            extends LoginBaseDescriptorSupplier {
        LoginFileDescriptorSupplier() {
        }
    }

    private static final class LoginMethodDescriptorSupplier
            extends LoginBaseDescriptorSupplier
            implements io.grpc.protobuf.ProtoMethodDescriptorSupplier {
        private final String methodName;

        LoginMethodDescriptorSupplier(String methodName) {
            this.methodName = methodName;
        }

        @Override
        public com.google.protobuf.Descriptors.MethodDescriptor getMethodDescriptor() {
            return getServiceDescriptor().findMethodByName(methodName);
        }
    }
}

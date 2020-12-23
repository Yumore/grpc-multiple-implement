package io.grpc.registerandlogin.grpc;

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
        value = "by gRPC proto compiler (version 1.13.1)",
        comments = "Source: authority.proto")
public final class CheckAuthGrpc {

    public static final String SERVICE_NAME = "RegisterAndLogin.CheckAuth";
    private static final int METHODID_CHECK_AUTH = 0;
    // Static method descriptors that strictly reflect the proto.
    private static volatile io.grpc.MethodDescriptor<io.grpc.registerandlogin.CheckAuthRequest,
            io.grpc.registerandlogin.CheckAuthReply> getCheckAuthMethod;
    private static volatile io.grpc.ServiceDescriptor serviceDescriptor;

    private CheckAuthGrpc() {
    }

    public static io.grpc.MethodDescriptor<io.grpc.registerandlogin.CheckAuthRequest,
            io.grpc.registerandlogin.CheckAuthReply> getCheckAuthMethod() {
        io.grpc.MethodDescriptor<io.grpc.registerandlogin.CheckAuthRequest, io.grpc.registerandlogin.CheckAuthReply> getCheckAuthMethod;
        if ((getCheckAuthMethod = CheckAuthGrpc.getCheckAuthMethod) == null) {
            synchronized (CheckAuthGrpc.class) {
                if ((getCheckAuthMethod = CheckAuthGrpc.getCheckAuthMethod) == null) {
                    CheckAuthGrpc.getCheckAuthMethod = getCheckAuthMethod =
                            io.grpc.MethodDescriptor.<io.grpc.registerandlogin.CheckAuthRequest, io.grpc.registerandlogin.CheckAuthReply>newBuilder()
                                    .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
                                    .setFullMethodName(generateFullMethodName(
                                            "RegisterAndLogin.CheckAuth", "CheckAuth"))
                                    .setSampledToLocalTracing(true)
                                    .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                                            io.grpc.registerandlogin.CheckAuthRequest.getDefaultInstance()))
                                    .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                                            io.grpc.registerandlogin.CheckAuthReply.getDefaultInstance()))
                                    .setSchemaDescriptor(new CheckAuthMethodDescriptorSupplier("CheckAuth"))
                                    .build();
                }
            }
        }
        return getCheckAuthMethod;
    }

    /**
     * Creates a new async stub that supports all call types for the service
     */
    public static CheckAuthStub newStub(io.grpc.Channel channel) {
        return new CheckAuthStub(channel);
    }

    /**
     * Creates a new blocking-style stub that supports unary and streaming output calls on the service
     */
    public static CheckAuthBlockingStub newBlockingStub(
            io.grpc.Channel channel) {
        return new CheckAuthBlockingStub(channel);
    }

    /**
     * Creates a new ListenableFuture-style stub that supports unary calls on the service
     */
    public static CheckAuthFutureStub newFutureStub(
            io.grpc.Channel channel) {
        return new CheckAuthFutureStub(channel);
    }

    public static io.grpc.ServiceDescriptor getServiceDescriptor() {
        io.grpc.ServiceDescriptor result = serviceDescriptor;
        if (result == null) {
            synchronized (CheckAuthGrpc.class) {
                result = serviceDescriptor;
                if (result == null) {
                    serviceDescriptor = result = io.grpc.ServiceDescriptor.newBuilder(SERVICE_NAME)
                            .setSchemaDescriptor(new CheckAuthFileDescriptorSupplier())
                            .addMethod(getCheckAuthMethod())
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
    public static abstract class CheckAuthImplBase implements io.grpc.BindableService {

        /**
         *
         */
        public void checkAuth(io.grpc.registerandlogin.CheckAuthRequest request,
                              io.grpc.stub.StreamObserver<io.grpc.registerandlogin.CheckAuthReply> responseObserver) {
            asyncUnimplementedUnaryCall(getCheckAuthMethod(), responseObserver);
        }

        @Override
        public final io.grpc.ServerServiceDefinition bindService() {
            return io.grpc.ServerServiceDefinition.builder(getServiceDescriptor())
                    .addMethod(
                            getCheckAuthMethod(),
                            asyncUnaryCall(
                                    new MethodHandlers<
                                            io.grpc.registerandlogin.CheckAuthRequest,
                                            io.grpc.registerandlogin.CheckAuthReply>(
                                            this, METHODID_CHECK_AUTH)))
                    .build();
        }
    }

    /**
     * <pre>
     * Service定义
     * </pre>
     */
    public static final class CheckAuthStub extends io.grpc.stub.AbstractStub<CheckAuthStub> {
        private CheckAuthStub(io.grpc.Channel channel) {
            super(channel);
        }

        private CheckAuthStub(io.grpc.Channel channel,
                              io.grpc.CallOptions callOptions) {
            super(channel, callOptions);
        }

        @Override
        protected CheckAuthStub build(io.grpc.Channel channel,
                                      io.grpc.CallOptions callOptions) {
            return new CheckAuthStub(channel, callOptions);
        }

        /**
         *
         */
        public void checkAuth(io.grpc.registerandlogin.CheckAuthRequest request,
                              io.grpc.stub.StreamObserver<io.grpc.registerandlogin.CheckAuthReply> responseObserver) {
            asyncUnaryCall(
                    getChannel().newCall(getCheckAuthMethod(), getCallOptions()), request, responseObserver);
        }
    }

    /**
     * <pre>
     * Service定义
     * </pre>
     */
    public static final class CheckAuthBlockingStub extends io.grpc.stub.AbstractStub<CheckAuthBlockingStub> {
        private CheckAuthBlockingStub(io.grpc.Channel channel) {
            super(channel);
        }

        private CheckAuthBlockingStub(io.grpc.Channel channel,
                                      io.grpc.CallOptions callOptions) {
            super(channel, callOptions);
        }

        @Override
        protected CheckAuthBlockingStub build(io.grpc.Channel channel,
                                              io.grpc.CallOptions callOptions) {
            return new CheckAuthBlockingStub(channel, callOptions);
        }

        /**
         *
         */
        public io.grpc.registerandlogin.CheckAuthReply checkAuth(io.grpc.registerandlogin.CheckAuthRequest request) {
            return blockingUnaryCall(
                    getChannel(), getCheckAuthMethod(), getCallOptions(), request);
        }
    }

    /**
     * <pre>
     * Service定义
     * </pre>
     */
    public static final class CheckAuthFutureStub extends io.grpc.stub.AbstractStub<CheckAuthFutureStub> {
        private CheckAuthFutureStub(io.grpc.Channel channel) {
            super(channel);
        }

        private CheckAuthFutureStub(io.grpc.Channel channel,
                                    io.grpc.CallOptions callOptions) {
            super(channel, callOptions);
        }

        @Override
        protected CheckAuthFutureStub build(io.grpc.Channel channel,
                                            io.grpc.CallOptions callOptions) {
            return new CheckAuthFutureStub(channel, callOptions);
        }

        /**
         *
         */
        public com.google.common.util.concurrent.ListenableFuture<io.grpc.registerandlogin.CheckAuthReply> checkAuth(
                io.grpc.registerandlogin.CheckAuthRequest request) {
            return futureUnaryCall(
                    getChannel().newCall(getCheckAuthMethod(), getCallOptions()), request);
        }
    }

    private static final class MethodHandlers<Req, Resp> implements
            io.grpc.stub.ServerCalls.UnaryMethod<Req, Resp>,
            io.grpc.stub.ServerCalls.ServerStreamingMethod<Req, Resp>,
            io.grpc.stub.ServerCalls.ClientStreamingMethod<Req, Resp>,
            io.grpc.stub.ServerCalls.BidiStreamingMethod<Req, Resp> {
        private final CheckAuthImplBase serviceImpl;
        private final int methodId;

        MethodHandlers(CheckAuthImplBase serviceImpl, int methodId) {
            this.serviceImpl = serviceImpl;
            this.methodId = methodId;
        }

        @Override
        @SuppressWarnings("unchecked")
        public void invoke(Req request, io.grpc.stub.StreamObserver<Resp> responseObserver) {
            switch (methodId) {
                case METHODID_CHECK_AUTH:
                    serviceImpl.checkAuth((io.grpc.registerandlogin.CheckAuthRequest) request,
                            (io.grpc.stub.StreamObserver<io.grpc.registerandlogin.CheckAuthReply>) responseObserver);
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

    private static abstract class CheckAuthBaseDescriptorSupplier
            implements io.grpc.protobuf.ProtoFileDescriptorSupplier, io.grpc.protobuf.ProtoServiceDescriptorSupplier {
        CheckAuthBaseDescriptorSupplier() {
        }

        @Override
        public com.google.protobuf.Descriptors.FileDescriptor getFileDescriptor() {
            return io.grpc.registerandlogin.AuthorityProto.getDescriptor();
        }

        @Override
        public com.google.protobuf.Descriptors.ServiceDescriptor getServiceDescriptor() {
            return getFileDescriptor().findServiceByName("CheckAuth");
        }
    }

    private static final class CheckAuthFileDescriptorSupplier
            extends CheckAuthBaseDescriptorSupplier {
        CheckAuthFileDescriptorSupplier() {
        }
    }

    private static final class CheckAuthMethodDescriptorSupplier
            extends CheckAuthBaseDescriptorSupplier
            implements io.grpc.protobuf.ProtoMethodDescriptorSupplier {
        private final String methodName;

        CheckAuthMethodDescriptorSupplier(String methodName) {
            this.methodName = methodName;
        }

        @Override
        public com.google.protobuf.Descriptors.MethodDescriptor getMethodDescriptor() {
            return getServiceDescriptor().findMethodByName(methodName);
        }
    }
}

package io.grpc.registerandlogin.grpc;

import io.grpc.registerandlogin.AuthorityProto;
import io.grpc.registerandlogin.AuthorityReply;
import io.grpc.registerandlogin.AuthorityRequest;

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
        comments = "Source: authority.proto")
public final class AuthorityGrpc {

    public static final String SERVICE_NAME = "RegisterAndLogin.Authority";
    private static final int METHODID_AUTHORITY = 0;
    // Static method descriptors that strictly reflect the proto.
    private static volatile io.grpc.MethodDescriptor<AuthorityRequest,
            AuthorityReply> getAuthorityMethod;
    private static volatile io.grpc.ServiceDescriptor serviceDescriptor;

    private AuthorityGrpc() {
    }

    @io.grpc.stub.annotations.RpcMethod(
            fullMethodName = SERVICE_NAME + '/' + "Authority",
            requestType = AuthorityRequest.class,
            responseType = AuthorityReply.class,
            methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
    public static io.grpc.MethodDescriptor<AuthorityRequest,
            AuthorityReply> getAuthorityMethod() {
        io.grpc.MethodDescriptor<AuthorityRequest, AuthorityReply> getAuthorityMethod;
        if ((getAuthorityMethod = AuthorityGrpc.getAuthorityMethod) == null) {
            synchronized (AuthorityGrpc.class) {
                if ((getAuthorityMethod = AuthorityGrpc.getAuthorityMethod) == null) {
                    AuthorityGrpc.getAuthorityMethod = getAuthorityMethod =
                            io.grpc.MethodDescriptor.<AuthorityRequest, AuthorityReply>newBuilder()
                                    .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
                                    .setFullMethodName(generateFullMethodName(SERVICE_NAME, "Authority"))
                                    .setSampledToLocalTracing(true)
                                    .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                                            AuthorityRequest.getDefaultInstance()))
                                    .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                                            AuthorityReply.getDefaultInstance()))
                                    .setSchemaDescriptor(new AuthorityMethodDescriptorSupplier("Authority"))
                                    .build();
                }
            }
        }
        return getAuthorityMethod;
    }

    /**
     * Creates a new async stub that supports all call types for the service
     */
    public static AuthorityStub newStub(io.grpc.Channel channel) {
        io.grpc.stub.AbstractStub.StubFactory<AuthorityStub> factory =
                new io.grpc.stub.AbstractStub.StubFactory<AuthorityStub>() {
                    @Override
                    public AuthorityStub newStub(io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
                        return new AuthorityStub(channel, callOptions);
                    }
                };
        return AuthorityStub.newStub(factory, channel);
    }

    /**
     * Creates a new blocking-style stub that supports unary and streaming output calls on the service
     */
    public static AuthorityBlockingStub newBlockingStub(
            io.grpc.Channel channel) {
        io.grpc.stub.AbstractStub.StubFactory<AuthorityBlockingStub> factory =
                new io.grpc.stub.AbstractStub.StubFactory<AuthorityBlockingStub>() {
                    @Override
                    public AuthorityBlockingStub newStub(io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
                        return new AuthorityBlockingStub(channel, callOptions);
                    }
                };
        return AuthorityBlockingStub.newStub(factory, channel);
    }

    /**
     * Creates a new ListenableFuture-style stub that supports unary calls on the service
     */
    public static AuthorityFutureStub newFutureStub(
            io.grpc.Channel channel) {
        io.grpc.stub.AbstractStub.StubFactory<AuthorityFutureStub> factory =
                new io.grpc.stub.AbstractStub.StubFactory<AuthorityFutureStub>() {
                    @Override
                    public AuthorityFutureStub newStub(io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
                        return new AuthorityFutureStub(channel, callOptions);
                    }
                };
        return AuthorityFutureStub.newStub(factory, channel);
    }

    public static io.grpc.ServiceDescriptor getServiceDescriptor() {
        io.grpc.ServiceDescriptor result = serviceDescriptor;
        if (result == null) {
            synchronized (AuthorityGrpc.class) {
                result = serviceDescriptor;
                if (result == null) {
                    serviceDescriptor = result = io.grpc.ServiceDescriptor.newBuilder(SERVICE_NAME)
                            .setSchemaDescriptor(new AuthorityFileDescriptorSupplier())
                            .addMethod(getAuthorityMethod())
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
    public static abstract class AuthorityImplBase implements io.grpc.BindableService {

        /**
         *
         */
        public void authority(AuthorityRequest request,
                              io.grpc.stub.StreamObserver<AuthorityReply> responseObserver) {
            asyncUnimplementedUnaryCall(getAuthorityMethod(), responseObserver);
        }

        @Override
        public final io.grpc.ServerServiceDefinition bindService() {
            return io.grpc.ServerServiceDefinition.builder(getServiceDescriptor())
                    .addMethod(
                            getAuthorityMethod(),
                            asyncUnaryCall(
                                    new MethodHandlers<
                                            AuthorityRequest,
                                            AuthorityReply>(
                                            this, METHODID_AUTHORITY)))
                    .build();
        }
    }

    /**
     * <pre>
     * Service定义
     * </pre>
     */
    public static final class AuthorityStub extends io.grpc.stub.AbstractAsyncStub<AuthorityStub> {
        private AuthorityStub(
                io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
            super(channel, callOptions);
        }

        @Override
        protected AuthorityStub build(
                io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
            return new AuthorityStub(channel, callOptions);
        }

        /**
         *
         */
        public void authority(AuthorityRequest request,
                              io.grpc.stub.StreamObserver<AuthorityReply> responseObserver) {
            asyncUnaryCall(
                    getChannel().newCall(getAuthorityMethod(), getCallOptions()), request, responseObserver);
        }
    }

    /**
     * <pre>
     * Service定义
     * </pre>
     */
    public static final class AuthorityBlockingStub extends io.grpc.stub.AbstractBlockingStub<AuthorityBlockingStub> {
        private AuthorityBlockingStub(
                io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
            super(channel, callOptions);
        }

        @Override
        protected AuthorityBlockingStub build(
                io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
            return new AuthorityBlockingStub(channel, callOptions);
        }

        /**
         *
         */
        public AuthorityReply authority(AuthorityRequest request) {
            return blockingUnaryCall(
                    getChannel(), getAuthorityMethod(), getCallOptions(), request);
        }
    }

    /**
     * <pre>
     * Service定义
     * </pre>
     */
    public static final class AuthorityFutureStub extends io.grpc.stub.AbstractFutureStub<AuthorityFutureStub> {
        private AuthorityFutureStub(
                io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
            super(channel, callOptions);
        }

        @Override
        protected AuthorityFutureStub build(
                io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
            return new AuthorityFutureStub(channel, callOptions);
        }

        /**
         *
         */
        public com.google.common.util.concurrent.ListenableFuture<AuthorityReply> authority(
                AuthorityRequest request) {
            return futureUnaryCall(
                    getChannel().newCall(getAuthorityMethod(), getCallOptions()), request);
        }
    }

    private static final class MethodHandlers<Req, Resp> implements
            io.grpc.stub.ServerCalls.UnaryMethod<Req, Resp>,
            io.grpc.stub.ServerCalls.ServerStreamingMethod<Req, Resp>,
            io.grpc.stub.ServerCalls.ClientStreamingMethod<Req, Resp>,
            io.grpc.stub.ServerCalls.BidiStreamingMethod<Req, Resp> {
        private final AuthorityImplBase serviceImpl;
        private final int methodId;

        MethodHandlers(AuthorityImplBase serviceImpl, int methodId) {
            this.serviceImpl = serviceImpl;
            this.methodId = methodId;
        }

        @Override
        @SuppressWarnings("unchecked")
        public void invoke(Req request, io.grpc.stub.StreamObserver<Resp> responseObserver) {
            switch (methodId) {
                case METHODID_AUTHORITY:
                    serviceImpl.authority((AuthorityRequest) request,
                            (io.grpc.stub.StreamObserver<AuthorityReply>) responseObserver);
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

    private static abstract class AuthorityBaseDescriptorSupplier
            implements io.grpc.protobuf.ProtoFileDescriptorSupplier, io.grpc.protobuf.ProtoServiceDescriptorSupplier {
        AuthorityBaseDescriptorSupplier() {
        }

        @Override
        public com.google.protobuf.Descriptors.FileDescriptor getFileDescriptor() {
            return AuthorityProto.getDescriptor();
        }

        @Override
        public com.google.protobuf.Descriptors.ServiceDescriptor getServiceDescriptor() {
            return getFileDescriptor().findServiceByName("Authority");
        }
    }

    private static final class AuthorityFileDescriptorSupplier
            extends AuthorityBaseDescriptorSupplier {
        AuthorityFileDescriptorSupplier() {
        }
    }

    private static final class AuthorityMethodDescriptorSupplier
            extends AuthorityBaseDescriptorSupplier
            implements io.grpc.protobuf.ProtoMethodDescriptorSupplier {
        private final String methodName;

        AuthorityMethodDescriptorSupplier(String methodName) {
            this.methodName = methodName;
        }

        @Override
        public com.google.protobuf.Descriptors.MethodDescriptor getMethodDescriptor() {
            return getServiceDescriptor().findMethodByName(methodName);
        }
    }
}

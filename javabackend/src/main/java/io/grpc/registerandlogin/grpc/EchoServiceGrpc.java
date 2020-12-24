package io.grpc.registerandlogin.grpc;

import io.grpc.registerandlogin.*;

import static io.grpc.MethodDescriptor.generateFullMethodName;
import static io.grpc.stub.ClientCalls.asyncServerStreamingCall;
import static io.grpc.stub.ClientCalls.asyncUnaryCall;
import static io.grpc.stub.ClientCalls.*;
import static io.grpc.stub.ServerCalls.asyncServerStreamingCall;
import static io.grpc.stub.ServerCalls.asyncUnaryCall;
import static io.grpc.stub.ServerCalls.*;

/**
 *
 */
@javax.annotation.Generated(
        value = "by gRPC proto compiler (version 1.34.1)",
        comments = "Source: echo.proto")
public final class EchoServiceGrpc {

    public static final String SERVICE_NAME = "Echo.EchoService";
    private static final int METHODID_ECHO = 0;
    private static final int METHODID_SERVER_STREAMING_ECHO = 1;
    // Static method descriptors that strictly reflect the proto.
    private static volatile io.grpc.MethodDescriptor<EchoRequest,
            EchoResponse> getEchoMethod;
    private static volatile io.grpc.MethodDescriptor<ServerStreamingEchoRequest,
            ServerStreamingEchoResponse> getServerStreamingEchoMethod;
    private static volatile io.grpc.ServiceDescriptor serviceDescriptor;

    private EchoServiceGrpc() {
    }

    @io.grpc.stub.annotations.RpcMethod(
            fullMethodName = SERVICE_NAME + '/' + "Echo",
            requestType = EchoRequest.class,
            responseType = EchoResponse.class,
            methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
    public static io.grpc.MethodDescriptor<EchoRequest,
            EchoResponse> getEchoMethod() {
        io.grpc.MethodDescriptor<EchoRequest, EchoResponse> getEchoMethod;
        if ((getEchoMethod = EchoServiceGrpc.getEchoMethod) == null) {
            synchronized (EchoServiceGrpc.class) {
                if ((getEchoMethod = EchoServiceGrpc.getEchoMethod) == null) {
                    EchoServiceGrpc.getEchoMethod = getEchoMethod =
                            io.grpc.MethodDescriptor.<EchoRequest, EchoResponse>newBuilder()
                                    .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
                                    .setFullMethodName(generateFullMethodName(SERVICE_NAME, "Echo"))
                                    .setSampledToLocalTracing(true)
                                    .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                                            EchoRequest.getDefaultInstance()))
                                    .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                                            EchoResponse.getDefaultInstance()))
                                    .setSchemaDescriptor(new EchoServiceMethodDescriptorSupplier("Echo"))
                                    .build();
                }
            }
        }
        return getEchoMethod;
    }

    @io.grpc.stub.annotations.RpcMethod(
            fullMethodName = SERVICE_NAME + '/' + "ServerStreamingEcho",
            requestType = ServerStreamingEchoRequest.class,
            responseType = ServerStreamingEchoResponse.class,
            methodType = io.grpc.MethodDescriptor.MethodType.SERVER_STREAMING)
    public static io.grpc.MethodDescriptor<ServerStreamingEchoRequest,
            ServerStreamingEchoResponse> getServerStreamingEchoMethod() {
        io.grpc.MethodDescriptor<ServerStreamingEchoRequest, ServerStreamingEchoResponse> getServerStreamingEchoMethod;
        if ((getServerStreamingEchoMethod = EchoServiceGrpc.getServerStreamingEchoMethod) == null) {
            synchronized (EchoServiceGrpc.class) {
                if ((getServerStreamingEchoMethod = EchoServiceGrpc.getServerStreamingEchoMethod) == null) {
                    EchoServiceGrpc.getServerStreamingEchoMethod = getServerStreamingEchoMethod =
                            io.grpc.MethodDescriptor.<ServerStreamingEchoRequest, ServerStreamingEchoResponse>newBuilder()
                                    .setType(io.grpc.MethodDescriptor.MethodType.SERVER_STREAMING)
                                    .setFullMethodName(generateFullMethodName(SERVICE_NAME, "ServerStreamingEcho"))
                                    .setSampledToLocalTracing(true)
                                    .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                                            ServerStreamingEchoRequest.getDefaultInstance()))
                                    .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                                            ServerStreamingEchoResponse.getDefaultInstance()))
                                    .setSchemaDescriptor(new EchoServiceMethodDescriptorSupplier("ServerStreamingEcho"))
                                    .build();
                }
            }
        }
        return getServerStreamingEchoMethod;
    }

    /**
     * Creates a new async stub that supports all call types for the service
     */
    public static EchoServiceStub newStub(io.grpc.Channel channel) {
        io.grpc.stub.AbstractStub.StubFactory<EchoServiceStub> factory =
                new io.grpc.stub.AbstractStub.StubFactory<EchoServiceStub>() {
                    @Override
                    public EchoServiceStub newStub(io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
                        return new EchoServiceStub(channel, callOptions);
                    }
                };
        return EchoServiceStub.newStub(factory, channel);
    }

    /**
     * Creates a new blocking-style stub that supports unary and streaming output calls on the service
     */
    public static EchoServiceBlockingStub newBlockingStub(
            io.grpc.Channel channel) {
        io.grpc.stub.AbstractStub.StubFactory<EchoServiceBlockingStub> factory =
                new io.grpc.stub.AbstractStub.StubFactory<EchoServiceBlockingStub>() {
                    @Override
                    public EchoServiceBlockingStub newStub(io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
                        return new EchoServiceBlockingStub(channel, callOptions);
                    }
                };
        return EchoServiceBlockingStub.newStub(factory, channel);
    }

    /**
     * Creates a new ListenableFuture-style stub that supports unary calls on the service
     */
    public static EchoServiceFutureStub newFutureStub(
            io.grpc.Channel channel) {
        io.grpc.stub.AbstractStub.StubFactory<EchoServiceFutureStub> factory =
                new io.grpc.stub.AbstractStub.StubFactory<EchoServiceFutureStub>() {
                    @Override
                    public EchoServiceFutureStub newStub(io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
                        return new EchoServiceFutureStub(channel, callOptions);
                    }
                };
        return EchoServiceFutureStub.newStub(factory, channel);
    }

    public static io.grpc.ServiceDescriptor getServiceDescriptor() {
        io.grpc.ServiceDescriptor result = serviceDescriptor;
        if (result == null) {
            synchronized (EchoServiceGrpc.class) {
                result = serviceDescriptor;
                if (result == null) {
                    serviceDescriptor = result = io.grpc.ServiceDescriptor.newBuilder(SERVICE_NAME)
                            .setSchemaDescriptor(new EchoServiceFileDescriptorSupplier())
                            .addMethod(getEchoMethod())
                            .addMethod(getServerStreamingEchoMethod())
                            .build();
                }
            }
        }
        return result;
    }

    /**
     *
     */
    public static abstract class EchoServiceImplBase implements io.grpc.BindableService {

        /**
         *
         */
        public void echo(EchoRequest request,
                         io.grpc.stub.StreamObserver<EchoResponse> responseObserver) {
            asyncUnimplementedUnaryCall(getEchoMethod(), responseObserver);
        }

        /**
         *
         */
        public void serverStreamingEcho(ServerStreamingEchoRequest request,
                                        io.grpc.stub.StreamObserver<ServerStreamingEchoResponse> responseObserver) {
            asyncUnimplementedUnaryCall(getServerStreamingEchoMethod(), responseObserver);
        }

        @Override
        public final io.grpc.ServerServiceDefinition bindService() {
            return io.grpc.ServerServiceDefinition.builder(getServiceDescriptor())
                    .addMethod(
                            getEchoMethod(),
                            asyncUnaryCall(
                                    new MethodHandlers<
                                            EchoRequest,
                                            EchoResponse>(
                                            this, METHODID_ECHO)))
                    .addMethod(
                            getServerStreamingEchoMethod(),
                            asyncServerStreamingCall(
                                    new MethodHandlers<
                                            ServerStreamingEchoRequest,
                                            ServerStreamingEchoResponse>(
                                            this, METHODID_SERVER_STREAMING_ECHO)))
                    .build();
        }
    }

    /**
     *
     */
    public static final class EchoServiceStub extends io.grpc.stub.AbstractAsyncStub<EchoServiceStub> {
        private EchoServiceStub(
                io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
            super(channel, callOptions);
        }

        @Override
        protected EchoServiceStub build(
                io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
            return new EchoServiceStub(channel, callOptions);
        }

        /**
         *
         */
        public void echo(EchoRequest request,
                         io.grpc.stub.StreamObserver<EchoResponse> responseObserver) {
            asyncUnaryCall(
                    getChannel().newCall(getEchoMethod(), getCallOptions()), request, responseObserver);
        }

        /**
         *
         */
        public void serverStreamingEcho(ServerStreamingEchoRequest request,
                                        io.grpc.stub.StreamObserver<ServerStreamingEchoResponse> responseObserver) {
            asyncServerStreamingCall(
                    getChannel().newCall(getServerStreamingEchoMethod(), getCallOptions()), request, responseObserver);
        }
    }

    /**
     *
     */
    public static final class EchoServiceBlockingStub extends io.grpc.stub.AbstractBlockingStub<EchoServiceBlockingStub> {
        private EchoServiceBlockingStub(
                io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
            super(channel, callOptions);
        }

        @Override
        protected EchoServiceBlockingStub build(
                io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
            return new EchoServiceBlockingStub(channel, callOptions);
        }

        /**
         *
         */
        public EchoResponse echo(EchoRequest request) {
            return blockingUnaryCall(
                    getChannel(), getEchoMethod(), getCallOptions(), request);
        }

        /**
         *
         */
        public java.util.Iterator<ServerStreamingEchoResponse> serverStreamingEcho(
                ServerStreamingEchoRequest request) {
            return blockingServerStreamingCall(
                    getChannel(), getServerStreamingEchoMethod(), getCallOptions(), request);
        }
    }

    /**
     *
     */
    public static final class EchoServiceFutureStub extends io.grpc.stub.AbstractFutureStub<EchoServiceFutureStub> {
        private EchoServiceFutureStub(
                io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
            super(channel, callOptions);
        }

        @Override
        protected EchoServiceFutureStub build(
                io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
            return new EchoServiceFutureStub(channel, callOptions);
        }

        /**
         *
         */
        public com.google.common.util.concurrent.ListenableFuture<EchoResponse> echo(
                EchoRequest request) {
            return futureUnaryCall(
                    getChannel().newCall(getEchoMethod(), getCallOptions()), request);
        }
    }

    private static final class MethodHandlers<Req, Resp> implements
            io.grpc.stub.ServerCalls.UnaryMethod<Req, Resp>,
            io.grpc.stub.ServerCalls.ServerStreamingMethod<Req, Resp>,
            io.grpc.stub.ServerCalls.ClientStreamingMethod<Req, Resp>,
            io.grpc.stub.ServerCalls.BidiStreamingMethod<Req, Resp> {
        private final EchoServiceImplBase serviceImpl;
        private final int methodId;

        MethodHandlers(EchoServiceImplBase serviceImpl, int methodId) {
            this.serviceImpl = serviceImpl;
            this.methodId = methodId;
        }

        @Override
        @SuppressWarnings("unchecked")
        public void invoke(Req request, io.grpc.stub.StreamObserver<Resp> responseObserver) {
            switch (methodId) {
                case METHODID_ECHO:
                    serviceImpl.echo((EchoRequest) request,
                            (io.grpc.stub.StreamObserver<EchoResponse>) responseObserver);
                    break;
                case METHODID_SERVER_STREAMING_ECHO:
                    serviceImpl.serverStreamingEcho((ServerStreamingEchoRequest) request,
                            (io.grpc.stub.StreamObserver<ServerStreamingEchoResponse>) responseObserver);
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

    private static abstract class EchoServiceBaseDescriptorSupplier
            implements io.grpc.protobuf.ProtoFileDescriptorSupplier, io.grpc.protobuf.ProtoServiceDescriptorSupplier {
        EchoServiceBaseDescriptorSupplier() {
        }

        @Override
        public com.google.protobuf.Descriptors.FileDescriptor getFileDescriptor() {
            return EchoProto.getDescriptor();
        }

        @Override
        public com.google.protobuf.Descriptors.ServiceDescriptor getServiceDescriptor() {
            return getFileDescriptor().findServiceByName("EchoService");
        }
    }

    private static final class EchoServiceFileDescriptorSupplier
            extends EchoServiceBaseDescriptorSupplier {
        EchoServiceFileDescriptorSupplier() {
        }
    }

    private static final class EchoServiceMethodDescriptorSupplier
            extends EchoServiceBaseDescriptorSupplier
            implements io.grpc.protobuf.ProtoMethodDescriptorSupplier {
        private final String methodName;

        EchoServiceMethodDescriptorSupplier(String methodName) {
            this.methodName = methodName;
        }

        @Override
        public com.google.protobuf.Descriptors.MethodDescriptor getMethodDescriptor() {
            return getServiceDescriptor().findMethodByName(methodName);
        }
    }
}

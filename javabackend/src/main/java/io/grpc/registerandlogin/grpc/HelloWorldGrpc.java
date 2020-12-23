package io.grpc.registerandlogin.grpc;

import io.grpc.registerandlogin.HelloReply;
import io.grpc.registerandlogin.HelloRequest;
import io.grpc.registerandlogin.HelloWorldProto;

import static io.grpc.MethodDescriptor.generateFullMethodName;
import static io.grpc.stub.ClientCalls.asyncUnaryCall;
import static io.grpc.stub.ClientCalls.blockingUnaryCall;
import static io.grpc.stub.ClientCalls.futureUnaryCall;
import static io.grpc.stub.ServerCalls.asyncUnaryCall;
import static io.grpc.stub.ServerCalls.asyncUnimplementedUnaryCall;

/**
 * <pre>
 * The greeting service definition.
 * </pre>
 */
@javax.annotation.Generated(
        value = "by gRPC proto compiler (version 1.34.1)",
        comments = "Source: helloworld.proto")
public final class HelloWorldGrpc {

    public static final String SERVICE_NAME = "HelloWorld.HelloWorld";
    private static final int METHODID_SAY_HELLO = 0;
    private static final int METHODID_SAY_HELLO_AGAIN = 1;
    // Static method descriptors that strictly reflect the proto.
    private static volatile io.grpc.MethodDescriptor<HelloRequest,
            HelloReply> getSayHelloMethod;
    private static volatile io.grpc.MethodDescriptor<HelloRequest,
            HelloReply> getSayHelloAgainMethod;
    private static volatile io.grpc.ServiceDescriptor serviceDescriptor;

    private HelloWorldGrpc() {
    }

    @io.grpc.stub.annotations.RpcMethod(
            fullMethodName = SERVICE_NAME + '/' + "SayHello",
            requestType = HelloRequest.class,
            responseType = HelloReply.class,
            methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
    public static io.grpc.MethodDescriptor<HelloRequest,
            HelloReply> getSayHelloMethod() {
        io.grpc.MethodDescriptor<HelloRequest, HelloReply> getSayHelloMethod;
        if ((getSayHelloMethod = HelloWorldGrpc.getSayHelloMethod) == null) {
            synchronized (HelloWorldGrpc.class) {
                if ((getSayHelloMethod = HelloWorldGrpc.getSayHelloMethod) == null) {
                    HelloWorldGrpc.getSayHelloMethod = getSayHelloMethod =
                            io.grpc.MethodDescriptor.<HelloRequest, HelloReply>newBuilder()
                                    .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
                                    .setFullMethodName(generateFullMethodName(SERVICE_NAME, "SayHello"))
                                    .setSampledToLocalTracing(true)
                                    .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                                            HelloRequest.getDefaultInstance()))
                                    .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                                            HelloReply.getDefaultInstance()))
                                    .setSchemaDescriptor(new HelloWorldMethodDescriptorSupplier("SayHello"))
                                    .build();
                }
            }
        }
        return getSayHelloMethod;
    }

    @io.grpc.stub.annotations.RpcMethod(
            fullMethodName = SERVICE_NAME + '/' + "SayHelloAgain",
            requestType = HelloRequest.class,
            responseType = HelloReply.class,
            methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
    public static io.grpc.MethodDescriptor<HelloRequest,
            HelloReply> getSayHelloAgainMethod() {
        io.grpc.MethodDescriptor<HelloRequest, HelloReply> getSayHelloAgainMethod;
        if ((getSayHelloAgainMethod = HelloWorldGrpc.getSayHelloAgainMethod) == null) {
            synchronized (HelloWorldGrpc.class) {
                if ((getSayHelloAgainMethod = HelloWorldGrpc.getSayHelloAgainMethod) == null) {
                    HelloWorldGrpc.getSayHelloAgainMethod = getSayHelloAgainMethod =
                            io.grpc.MethodDescriptor.<HelloRequest, HelloReply>newBuilder()
                                    .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
                                    .setFullMethodName(generateFullMethodName(SERVICE_NAME, "SayHelloAgain"))
                                    .setSampledToLocalTracing(true)
                                    .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                                            HelloRequest.getDefaultInstance()))
                                    .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                                            HelloReply.getDefaultInstance()))
                                    .setSchemaDescriptor(new HelloWorldMethodDescriptorSupplier("SayHelloAgain"))
                                    .build();
                }
            }
        }
        return getSayHelloAgainMethod;
    }

    /**
     * Creates a new async stub that supports all call types for the service
     */
    public static HelloWorldStub newStub(io.grpc.Channel channel) {
        io.grpc.stub.AbstractStub.StubFactory<HelloWorldStub> factory =
                new io.grpc.stub.AbstractStub.StubFactory<HelloWorldStub>() {
                    @Override
                    public HelloWorldStub newStub(io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
                        return new HelloWorldStub(channel, callOptions);
                    }
                };
        return HelloWorldStub.newStub(factory, channel);
    }

    /**
     * Creates a new blocking-style stub that supports unary and streaming output calls on the service
     */
    public static HelloWorldBlockingStub newBlockingStub(
            io.grpc.Channel channel) {
        io.grpc.stub.AbstractStub.StubFactory<HelloWorldBlockingStub> factory =
                new io.grpc.stub.AbstractStub.StubFactory<HelloWorldBlockingStub>() {
                    @Override
                    public HelloWorldBlockingStub newStub(io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
                        return new HelloWorldBlockingStub(channel, callOptions);
                    }
                };
        return HelloWorldBlockingStub.newStub(factory, channel);
    }

    /**
     * Creates a new ListenableFuture-style stub that supports unary calls on the service
     */
    public static HelloWorldFutureStub newFutureStub(
            io.grpc.Channel channel) {
        io.grpc.stub.AbstractStub.StubFactory<HelloWorldFutureStub> factory =
                new io.grpc.stub.AbstractStub.StubFactory<HelloWorldFutureStub>() {
                    @Override
                    public HelloWorldFutureStub newStub(io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
                        return new HelloWorldFutureStub(channel, callOptions);
                    }
                };
        return HelloWorldFutureStub.newStub(factory, channel);
    }

    public static io.grpc.ServiceDescriptor getServiceDescriptor() {
        io.grpc.ServiceDescriptor result = serviceDescriptor;
        if (result == null) {
            synchronized (HelloWorldGrpc.class) {
                result = serviceDescriptor;
                if (result == null) {
                    serviceDescriptor = result = io.grpc.ServiceDescriptor.newBuilder(SERVICE_NAME)
                            .setSchemaDescriptor(new HelloWorldFileDescriptorSupplier())
                            .addMethod(getSayHelloMethod())
                            .addMethod(getSayHelloAgainMethod())
                            .build();
                }
            }
        }
        return result;
    }

    /**
     * <pre>
     * The greeting service definition.
     * </pre>
     */
    public static abstract class HelloWorldImplBase implements io.grpc.BindableService {

        /**
         * <pre>
         * Sends a greeting
         * </pre>
         */
        public void sayHello(HelloRequest request,
                             io.grpc.stub.StreamObserver<HelloReply> responseObserver) {
            asyncUnimplementedUnaryCall(getSayHelloMethod(), responseObserver);
        }

        /**
         *
         */
        public void sayHelloAgain(HelloRequest request,
                                  io.grpc.stub.StreamObserver<HelloReply> responseObserver) {
            asyncUnimplementedUnaryCall(getSayHelloAgainMethod(), responseObserver);
        }

        @Override
        public final io.grpc.ServerServiceDefinition bindService() {
            return io.grpc.ServerServiceDefinition.builder(getServiceDescriptor())
                    .addMethod(
                            getSayHelloMethod(),
                            asyncUnaryCall(
                                    new MethodHandlers<
                                            HelloRequest,
                                            HelloReply>(
                                            this, METHODID_SAY_HELLO)))
                    .addMethod(
                            getSayHelloAgainMethod(),
                            asyncUnaryCall(
                                    new MethodHandlers<
                                            HelloRequest,
                                            HelloReply>(
                                            this, METHODID_SAY_HELLO_AGAIN)))
                    .build();
        }
    }

    /**
     * <pre>
     * The greeting service definition.
     * </pre>
     */
    public static final class HelloWorldStub extends io.grpc.stub.AbstractAsyncStub<HelloWorldStub> {
        private HelloWorldStub(
                io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
            super(channel, callOptions);
        }

        @Override
        protected HelloWorldStub build(
                io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
            return new HelloWorldStub(channel, callOptions);
        }

        /**
         * <pre>
         * Sends a greeting
         * </pre>
         */
        public void sayHello(HelloRequest request,
                             io.grpc.stub.StreamObserver<HelloReply> responseObserver) {
            asyncUnaryCall(
                    getChannel().newCall(getSayHelloMethod(), getCallOptions()), request, responseObserver);
        }

        /**
         *
         */
        public void sayHelloAgain(HelloRequest request,
                                  io.grpc.stub.StreamObserver<HelloReply> responseObserver) {
            asyncUnaryCall(
                    getChannel().newCall(getSayHelloAgainMethod(), getCallOptions()), request, responseObserver);
        }
    }

    /**
     * <pre>
     * The greeting service definition.
     * </pre>
     */
    public static final class HelloWorldBlockingStub extends io.grpc.stub.AbstractBlockingStub<HelloWorldBlockingStub> {
        private HelloWorldBlockingStub(
                io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
            super(channel, callOptions);
        }

        @Override
        protected HelloWorldBlockingStub build(
                io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
            return new HelloWorldBlockingStub(channel, callOptions);
        }

        /**
         * <pre>
         * Sends a greeting
         * </pre>
         */
        public HelloReply sayHello(HelloRequest request) {
            return blockingUnaryCall(
                    getChannel(), getSayHelloMethod(), getCallOptions(), request);
        }

        /**
         *
         */
        public HelloReply sayHelloAgain(HelloRequest request) {
            return blockingUnaryCall(
                    getChannel(), getSayHelloAgainMethod(), getCallOptions(), request);
        }
    }

    /**
     * <pre>
     * The greeting service definition.
     * </pre>
     */
    public static final class HelloWorldFutureStub extends io.grpc.stub.AbstractFutureStub<HelloWorldFutureStub> {
        private HelloWorldFutureStub(
                io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
            super(channel, callOptions);
        }

        @Override
        protected HelloWorldFutureStub build(
                io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
            return new HelloWorldFutureStub(channel, callOptions);
        }

        /**
         * <pre>
         * Sends a greeting
         * </pre>
         */
        public com.google.common.util.concurrent.ListenableFuture<HelloReply> sayHello(
                HelloRequest request) {
            return futureUnaryCall(
                    getChannel().newCall(getSayHelloMethod(), getCallOptions()), request);
        }

        /**
         *
         */
        public com.google.common.util.concurrent.ListenableFuture<HelloReply> sayHelloAgain(
                HelloRequest request) {
            return futureUnaryCall(
                    getChannel().newCall(getSayHelloAgainMethod(), getCallOptions()), request);
        }
    }

    private static final class MethodHandlers<Req, Resp> implements
            io.grpc.stub.ServerCalls.UnaryMethod<Req, Resp>,
            io.grpc.stub.ServerCalls.ServerStreamingMethod<Req, Resp>,
            io.grpc.stub.ServerCalls.ClientStreamingMethod<Req, Resp>,
            io.grpc.stub.ServerCalls.BidiStreamingMethod<Req, Resp> {
        private final HelloWorldImplBase serviceImpl;
        private final int methodId;

        MethodHandlers(HelloWorldImplBase serviceImpl, int methodId) {
            this.serviceImpl = serviceImpl;
            this.methodId = methodId;
        }

        @Override
        @SuppressWarnings("unchecked")
        public void invoke(Req request, io.grpc.stub.StreamObserver<Resp> responseObserver) {
            switch (methodId) {
                case METHODID_SAY_HELLO:
                    serviceImpl.sayHello((HelloRequest) request,
                            (io.grpc.stub.StreamObserver<HelloReply>) responseObserver);
                    break;
                case METHODID_SAY_HELLO_AGAIN:
                    serviceImpl.sayHelloAgain((HelloRequest) request,
                            (io.grpc.stub.StreamObserver<HelloReply>) responseObserver);
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

    private static abstract class HelloWorldBaseDescriptorSupplier
            implements io.grpc.protobuf.ProtoFileDescriptorSupplier, io.grpc.protobuf.ProtoServiceDescriptorSupplier {
        HelloWorldBaseDescriptorSupplier() {
        }

        @Override
        public com.google.protobuf.Descriptors.FileDescriptor getFileDescriptor() {
            return HelloWorldProto.getDescriptor();
        }

        @Override
        public com.google.protobuf.Descriptors.ServiceDescriptor getServiceDescriptor() {
            return getFileDescriptor().findServiceByName("HelloWorld");
        }
    }

    private static final class HelloWorldFileDescriptorSupplier
            extends HelloWorldBaseDescriptorSupplier {
        HelloWorldFileDescriptorSupplier() {
        }
    }

    private static final class HelloWorldMethodDescriptorSupplier
            extends HelloWorldBaseDescriptorSupplier
            implements io.grpc.protobuf.ProtoMethodDescriptorSupplier {
        private final String methodName;

        HelloWorldMethodDescriptorSupplier(String methodName) {
            this.methodName = methodName;
        }

        @Override
        public com.google.protobuf.Descriptors.MethodDescriptor getMethodDescriptor() {
            return getServiceDescriptor().findMethodByName(methodName);
        }
    }
}

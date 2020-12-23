package io.grpc.registerandlogin.grpc;

import io.grpc.registerandlogin.*;

import static io.grpc.MethodDescriptor.generateFullMethodName;
import static io.grpc.stub.ClientCalls.asyncBidiStreamingCall;
import static io.grpc.stub.ClientCalls.asyncClientStreamingCall;
import static io.grpc.stub.ClientCalls.asyncServerStreamingCall;
import static io.grpc.stub.ClientCalls.asyncUnaryCall;
import static io.grpc.stub.ClientCalls.*;
import static io.grpc.stub.ServerCalls.asyncBidiStreamingCall;
import static io.grpc.stub.ServerCalls.asyncClientStreamingCall;
import static io.grpc.stub.ServerCalls.asyncServerStreamingCall;
import static io.grpc.stub.ServerCalls.asyncUnaryCall;
import static io.grpc.stub.ServerCalls.*;

/**
 * <pre>
 * Interface exported by the server.
 * </pre>
 */
@javax.annotation.Generated(
        value = "by gRPC proto compiler (version 1.34.1)",
        comments = "Source: router.proto")
public final class RouteGuideGrpc {

    public static final String SERVICE_NAME = "RouteGuide.RouteGuide";
    private static final int METHODID_GET_FEATURE = 0;
    private static final int METHODID_LIST_FEATURES = 1;
    private static final int METHODID_RECORD_ROUTE = 2;
    private static final int METHODID_ROUTE_CHAT = 3;
    // Static method descriptors that strictly reflect the proto.
    private static volatile io.grpc.MethodDescriptor<Point,
            Feature> getGetFeatureMethod;
    private static volatile io.grpc.MethodDescriptor<Rectangle,
            Feature> getListFeaturesMethod;
    private static volatile io.grpc.MethodDescriptor<Point,
            RouteSummary> getRecordRouteMethod;
    private static volatile io.grpc.MethodDescriptor<RouteNote,
            RouteNote> getRouteChatMethod;
    private static volatile io.grpc.ServiceDescriptor serviceDescriptor;

    private RouteGuideGrpc() {
    }

    @io.grpc.stub.annotations.RpcMethod(
            fullMethodName = SERVICE_NAME + '/' + "GetFeature",
            requestType = Point.class,
            responseType = Feature.class,
            methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
    public static io.grpc.MethodDescriptor<Point,
            Feature> getGetFeatureMethod() {
        io.grpc.MethodDescriptor<Point, Feature> getGetFeatureMethod;
        if ((getGetFeatureMethod = RouteGuideGrpc.getGetFeatureMethod) == null) {
            synchronized (RouteGuideGrpc.class) {
                if ((getGetFeatureMethod = RouteGuideGrpc.getGetFeatureMethod) == null) {
                    RouteGuideGrpc.getGetFeatureMethod = getGetFeatureMethod =
                            io.grpc.MethodDescriptor.<Point, Feature>newBuilder()
                                    .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
                                    .setFullMethodName(generateFullMethodName(SERVICE_NAME, "GetFeature"))
                                    .setSampledToLocalTracing(true)
                                    .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                                            Point.getDefaultInstance()))
                                    .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                                            Feature.getDefaultInstance()))
                                    .setSchemaDescriptor(new RouteGuideMethodDescriptorSupplier("GetFeature"))
                                    .build();
                }
            }
        }
        return getGetFeatureMethod;
    }

    @io.grpc.stub.annotations.RpcMethod(
            fullMethodName = SERVICE_NAME + '/' + "ListFeatures",
            requestType = Rectangle.class,
            responseType = Feature.class,
            methodType = io.grpc.MethodDescriptor.MethodType.SERVER_STREAMING)
    public static io.grpc.MethodDescriptor<Rectangle,
            Feature> getListFeaturesMethod() {
        io.grpc.MethodDescriptor<Rectangle, Feature> getListFeaturesMethod;
        if ((getListFeaturesMethod = RouteGuideGrpc.getListFeaturesMethod) == null) {
            synchronized (RouteGuideGrpc.class) {
                if ((getListFeaturesMethod = RouteGuideGrpc.getListFeaturesMethod) == null) {
                    RouteGuideGrpc.getListFeaturesMethod = getListFeaturesMethod =
                            io.grpc.MethodDescriptor.<Rectangle, Feature>newBuilder()
                                    .setType(io.grpc.MethodDescriptor.MethodType.SERVER_STREAMING)
                                    .setFullMethodName(generateFullMethodName(SERVICE_NAME, "ListFeatures"))
                                    .setSampledToLocalTracing(true)
                                    .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                                            Rectangle.getDefaultInstance()))
                                    .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                                            Feature.getDefaultInstance()))
                                    .setSchemaDescriptor(new RouteGuideMethodDescriptorSupplier("ListFeatures"))
                                    .build();
                }
            }
        }
        return getListFeaturesMethod;
    }

    @io.grpc.stub.annotations.RpcMethod(
            fullMethodName = SERVICE_NAME + '/' + "RecordRoute",
            requestType = Point.class,
            responseType = RouteSummary.class,
            methodType = io.grpc.MethodDescriptor.MethodType.CLIENT_STREAMING)
    public static io.grpc.MethodDescriptor<Point,
            RouteSummary> getRecordRouteMethod() {
        io.grpc.MethodDescriptor<Point, RouteSummary> getRecordRouteMethod;
        if ((getRecordRouteMethod = RouteGuideGrpc.getRecordRouteMethod) == null) {
            synchronized (RouteGuideGrpc.class) {
                if ((getRecordRouteMethod = RouteGuideGrpc.getRecordRouteMethod) == null) {
                    RouteGuideGrpc.getRecordRouteMethod = getRecordRouteMethod =
                            io.grpc.MethodDescriptor.<Point, RouteSummary>newBuilder()
                                    .setType(io.grpc.MethodDescriptor.MethodType.CLIENT_STREAMING)
                                    .setFullMethodName(generateFullMethodName(SERVICE_NAME, "RecordRoute"))
                                    .setSampledToLocalTracing(true)
                                    .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                                            Point.getDefaultInstance()))
                                    .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                                            RouteSummary.getDefaultInstance()))
                                    .setSchemaDescriptor(new RouteGuideMethodDescriptorSupplier("RecordRoute"))
                                    .build();
                }
            }
        }
        return getRecordRouteMethod;
    }

    @io.grpc.stub.annotations.RpcMethod(
            fullMethodName = SERVICE_NAME + '/' + "RouteChat",
            requestType = RouteNote.class,
            responseType = RouteNote.class,
            methodType = io.grpc.MethodDescriptor.MethodType.BIDI_STREAMING)
    public static io.grpc.MethodDescriptor<RouteNote,
            RouteNote> getRouteChatMethod() {
        io.grpc.MethodDescriptor<RouteNote, RouteNote> getRouteChatMethod;
        if ((getRouteChatMethod = RouteGuideGrpc.getRouteChatMethod) == null) {
            synchronized (RouteGuideGrpc.class) {
                if ((getRouteChatMethod = RouteGuideGrpc.getRouteChatMethod) == null) {
                    RouteGuideGrpc.getRouteChatMethod = getRouteChatMethod =
                            io.grpc.MethodDescriptor.<RouteNote, RouteNote>newBuilder()
                                    .setType(io.grpc.MethodDescriptor.MethodType.BIDI_STREAMING)
                                    .setFullMethodName(generateFullMethodName(SERVICE_NAME, "RouteChat"))
                                    .setSampledToLocalTracing(true)
                                    .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                                            RouteNote.getDefaultInstance()))
                                    .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                                            RouteNote.getDefaultInstance()))
                                    .setSchemaDescriptor(new RouteGuideMethodDescriptorSupplier("RouteChat"))
                                    .build();
                }
            }
        }
        return getRouteChatMethod;
    }

    /**
     * Creates a new async stub that supports all call types for the service
     */
    public static RouteGuideStub newStub(io.grpc.Channel channel) {
        io.grpc.stub.AbstractStub.StubFactory<RouteGuideStub> factory =
                new io.grpc.stub.AbstractStub.StubFactory<RouteGuideStub>() {
                    @Override
                    public RouteGuideStub newStub(io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
                        return new RouteGuideStub(channel, callOptions);
                    }
                };
        return RouteGuideStub.newStub(factory, channel);
    }

    /**
     * Creates a new blocking-style stub that supports unary and streaming output calls on the service
     */
    public static RouteGuideBlockingStub newBlockingStub(
            io.grpc.Channel channel) {
        io.grpc.stub.AbstractStub.StubFactory<RouteGuideBlockingStub> factory =
                new io.grpc.stub.AbstractStub.StubFactory<RouteGuideBlockingStub>() {
                    @Override
                    public RouteGuideBlockingStub newStub(io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
                        return new RouteGuideBlockingStub(channel, callOptions);
                    }
                };
        return RouteGuideBlockingStub.newStub(factory, channel);
    }

    /**
     * Creates a new ListenableFuture-style stub that supports unary calls on the service
     */
    public static RouteGuideFutureStub newFutureStub(
            io.grpc.Channel channel) {
        io.grpc.stub.AbstractStub.StubFactory<RouteGuideFutureStub> factory =
                new io.grpc.stub.AbstractStub.StubFactory<RouteGuideFutureStub>() {
                    @Override
                    public RouteGuideFutureStub newStub(io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
                        return new RouteGuideFutureStub(channel, callOptions);
                    }
                };
        return RouteGuideFutureStub.newStub(factory, channel);
    }

    public static io.grpc.ServiceDescriptor getServiceDescriptor() {
        io.grpc.ServiceDescriptor result = serviceDescriptor;
        if (result == null) {
            synchronized (RouteGuideGrpc.class) {
                result = serviceDescriptor;
                if (result == null) {
                    serviceDescriptor = result = io.grpc.ServiceDescriptor.newBuilder(SERVICE_NAME)
                            .setSchemaDescriptor(new RouteGuideFileDescriptorSupplier())
                            .addMethod(getGetFeatureMethod())
                            .addMethod(getListFeaturesMethod())
                            .addMethod(getRecordRouteMethod())
                            .addMethod(getRouteChatMethod())
                            .build();
                }
            }
        }
        return result;
    }

    /**
     * <pre>
     * Interface exported by the server.
     * </pre>
     */
    public static abstract class RouteGuideImplBase implements io.grpc.BindableService {

        /**
         * <pre>
         * A simple RPC.
         * Obtains the feature at a given position.
         * A feature with an empty name is returned if there's no feature at the given
         * position.
         * </pre>
         */
        public void getFeature(Point request,
                               io.grpc.stub.StreamObserver<Feature> responseObserver) {
            asyncUnimplementedUnaryCall(getGetFeatureMethod(), responseObserver);
        }

        /**
         * <pre>
         * A server-to-client streaming RPC.
         * Obtains the Features available within the given Rectangle.  Results are
         * streamed rather than returned at once (e.g. in a response message with a
         * repeated field), as the rectangle may cover a large area and contain a
         * huge number of features.
         * </pre>
         */
        public void listFeatures(Rectangle request,
                                 io.grpc.stub.StreamObserver<Feature> responseObserver) {
            asyncUnimplementedUnaryCall(getListFeaturesMethod(), responseObserver);
        }

        /**
         * <pre>
         * A client-to-server streaming RPC.
         * Accepts a stream of Points on a route being traversed, returning a
         * RouteSummary when traversal is completed.
         * </pre>
         */
        public io.grpc.stub.StreamObserver<Point> recordRoute(
                io.grpc.stub.StreamObserver<RouteSummary> responseObserver) {
            return asyncUnimplementedStreamingCall(getRecordRouteMethod(), responseObserver);
        }

        /**
         * <pre>
         * A Bidirectional streaming RPC.
         * Accepts a stream of RouteNotes sent while a route is being traversed,
         * while receiving other RouteNotes (e.g. from other users).
         * </pre>
         */
        public io.grpc.stub.StreamObserver<RouteNote> routeChat(
                io.grpc.stub.StreamObserver<RouteNote> responseObserver) {
            return asyncUnimplementedStreamingCall(getRouteChatMethod(), responseObserver);
        }

        @Override
        public final io.grpc.ServerServiceDefinition bindService() {
            return io.grpc.ServerServiceDefinition.builder(getServiceDescriptor())
                    .addMethod(
                            getGetFeatureMethod(),
                            asyncUnaryCall(
                                    new MethodHandlers<
                                            Point,
                                            Feature>(
                                            this, METHODID_GET_FEATURE)))
                    .addMethod(
                            getListFeaturesMethod(),
                            asyncServerStreamingCall(
                                    new MethodHandlers<
                                            Rectangle,
                                            Feature>(
                                            this, METHODID_LIST_FEATURES)))
                    .addMethod(
                            getRecordRouteMethod(),
                            asyncClientStreamingCall(
                                    new MethodHandlers<
                                            Point,
                                            RouteSummary>(
                                            this, METHODID_RECORD_ROUTE)))
                    .addMethod(
                            getRouteChatMethod(),
                            asyncBidiStreamingCall(
                                    new MethodHandlers<
                                            RouteNote,
                                            RouteNote>(
                                            this, METHODID_ROUTE_CHAT)))
                    .build();
        }
    }

    /**
     * <pre>
     * Interface exported by the server.
     * </pre>
     */
    public static final class RouteGuideStub extends io.grpc.stub.AbstractAsyncStub<RouteGuideStub> {
        private RouteGuideStub(
                io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
            super(channel, callOptions);
        }

        @Override
        protected RouteGuideStub build(
                io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
            return new RouteGuideStub(channel, callOptions);
        }

        /**
         * <pre>
         * A simple RPC.
         * Obtains the feature at a given position.
         * A feature with an empty name is returned if there's no feature at the given
         * position.
         * </pre>
         */
        public void getFeature(Point request,
                               io.grpc.stub.StreamObserver<Feature> responseObserver) {
            asyncUnaryCall(
                    getChannel().newCall(getGetFeatureMethod(), getCallOptions()), request, responseObserver);
        }

        /**
         * <pre>
         * A server-to-client streaming RPC.
         * Obtains the Features available within the given Rectangle.  Results are
         * streamed rather than returned at once (e.g. in a response message with a
         * repeated field), as the rectangle may cover a large area and contain a
         * huge number of features.
         * </pre>
         */
        public void listFeatures(Rectangle request,
                                 io.grpc.stub.StreamObserver<Feature> responseObserver) {
            asyncServerStreamingCall(
                    getChannel().newCall(getListFeaturesMethod(), getCallOptions()), request, responseObserver);
        }

        /**
         * <pre>
         * A client-to-server streaming RPC.
         * Accepts a stream of Points on a route being traversed, returning a
         * RouteSummary when traversal is completed.
         * </pre>
         */
        public io.grpc.stub.StreamObserver<Point> recordRoute(
                io.grpc.stub.StreamObserver<RouteSummary> responseObserver) {
            return asyncClientStreamingCall(
                    getChannel().newCall(getRecordRouteMethod(), getCallOptions()), responseObserver);
        }

        /**
         * <pre>
         * A Bidirectional streaming RPC.
         * Accepts a stream of RouteNotes sent while a route is being traversed,
         * while receiving other RouteNotes (e.g. from other users).
         * </pre>
         */
        public io.grpc.stub.StreamObserver<RouteNote> routeChat(
                io.grpc.stub.StreamObserver<RouteNote> responseObserver) {
            return asyncBidiStreamingCall(
                    getChannel().newCall(getRouteChatMethod(), getCallOptions()), responseObserver);
        }
    }

    /**
     * <pre>
     * Interface exported by the server.
     * </pre>
     */
    public static final class RouteGuideBlockingStub extends io.grpc.stub.AbstractBlockingStub<RouteGuideBlockingStub> {
        private RouteGuideBlockingStub(
                io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
            super(channel, callOptions);
        }

        @Override
        protected RouteGuideBlockingStub build(
                io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
            return new RouteGuideBlockingStub(channel, callOptions);
        }

        /**
         * <pre>
         * A simple RPC.
         * Obtains the feature at a given position.
         * A feature with an empty name is returned if there's no feature at the given
         * position.
         * </pre>
         */
        public Feature getFeature(Point request) {
            return blockingUnaryCall(
                    getChannel(), getGetFeatureMethod(), getCallOptions(), request);
        }

        /**
         * <pre>
         * A server-to-client streaming RPC.
         * Obtains the Features available within the given Rectangle.  Results are
         * streamed rather than returned at once (e.g. in a response message with a
         * repeated field), as the rectangle may cover a large area and contain a
         * huge number of features.
         * </pre>
         */
        public java.util.Iterator<Feature> listFeatures(
                Rectangle request) {
            return blockingServerStreamingCall(
                    getChannel(), getListFeaturesMethod(), getCallOptions(), request);
        }
    }

    /**
     * <pre>
     * Interface exported by the server.
     * </pre>
     */
    public static final class RouteGuideFutureStub extends io.grpc.stub.AbstractFutureStub<RouteGuideFutureStub> {
        private RouteGuideFutureStub(
                io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
            super(channel, callOptions);
        }

        @Override
        protected RouteGuideFutureStub build(
                io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
            return new RouteGuideFutureStub(channel, callOptions);
        }

        /**
         * <pre>
         * A simple RPC.
         * Obtains the feature at a given position.
         * A feature with an empty name is returned if there's no feature at the given
         * position.
         * </pre>
         */
        public com.google.common.util.concurrent.ListenableFuture<Feature> getFeature(
                Point request) {
            return futureUnaryCall(
                    getChannel().newCall(getGetFeatureMethod(), getCallOptions()), request);
        }
    }

    private static final class MethodHandlers<Req, Resp> implements
            io.grpc.stub.ServerCalls.UnaryMethod<Req, Resp>,
            io.grpc.stub.ServerCalls.ServerStreamingMethod<Req, Resp>,
            io.grpc.stub.ServerCalls.ClientStreamingMethod<Req, Resp>,
            io.grpc.stub.ServerCalls.BidiStreamingMethod<Req, Resp> {
        private final RouteGuideImplBase serviceImpl;
        private final int methodId;

        MethodHandlers(RouteGuideImplBase serviceImpl, int methodId) {
            this.serviceImpl = serviceImpl;
            this.methodId = methodId;
        }

        @Override
        @SuppressWarnings("unchecked")
        public void invoke(Req request, io.grpc.stub.StreamObserver<Resp> responseObserver) {
            switch (methodId) {
                case METHODID_GET_FEATURE:
                    serviceImpl.getFeature((Point) request,
                            (io.grpc.stub.StreamObserver<Feature>) responseObserver);
                    break;
                case METHODID_LIST_FEATURES:
                    serviceImpl.listFeatures((Rectangle) request,
                            (io.grpc.stub.StreamObserver<Feature>) responseObserver);
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
                case METHODID_RECORD_ROUTE:
                    return (io.grpc.stub.StreamObserver<Req>) serviceImpl.recordRoute(
                            (io.grpc.stub.StreamObserver<RouteSummary>) responseObserver);
                case METHODID_ROUTE_CHAT:
                    return (io.grpc.stub.StreamObserver<Req>) serviceImpl.routeChat(
                            (io.grpc.stub.StreamObserver<RouteNote>) responseObserver);
                default:
                    throw new AssertionError();
            }
        }
    }

    private static abstract class RouteGuideBaseDescriptorSupplier
            implements io.grpc.protobuf.ProtoFileDescriptorSupplier, io.grpc.protobuf.ProtoServiceDescriptorSupplier {
        RouteGuideBaseDescriptorSupplier() {
        }

        @Override
        public com.google.protobuf.Descriptors.FileDescriptor getFileDescriptor() {
            return RouteGuideProto.getDescriptor();
        }

        @Override
        public com.google.protobuf.Descriptors.ServiceDescriptor getServiceDescriptor() {
            return getFileDescriptor().findServiceByName("RouteGuide");
        }
    }

    private static final class RouteGuideFileDescriptorSupplier
            extends RouteGuideBaseDescriptorSupplier {
        RouteGuideFileDescriptorSupplier() {
        }
    }

    private static final class RouteGuideMethodDescriptorSupplier
            extends RouteGuideBaseDescriptorSupplier
            implements io.grpc.protobuf.ProtoMethodDescriptorSupplier {
        private final String methodName;

        RouteGuideMethodDescriptorSupplier(String methodName) {
            this.methodName = methodName;
        }

        @Override
        public com.google.protobuf.Descriptors.MethodDescriptor getMethodDescriptor() {
            return getServiceDescriptor().findMethodByName(methodName);
        }
    }
}

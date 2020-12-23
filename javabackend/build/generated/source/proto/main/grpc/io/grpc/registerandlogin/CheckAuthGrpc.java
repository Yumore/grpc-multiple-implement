package io.grpc.registerandlogin;

import static io.grpc.MethodDescriptor.generateFullMethodName;
import static io.grpc.stub.ClientCalls.asyncBidiStreamingCall;
import static io.grpc.stub.ClientCalls.asyncClientStreamingCall;
import static io.grpc.stub.ClientCalls.asyncServerStreamingCall;
import static io.grpc.stub.ClientCalls.asyncUnaryCall;
import static io.grpc.stub.ClientCalls.blockingServerStreamingCall;
import static io.grpc.stub.ClientCalls.blockingUnaryCall;
import static io.grpc.stub.ClientCalls.futureUnaryCall;
import static io.grpc.stub.ServerCalls.asyncBidiStreamingCall;
import static io.grpc.stub.ServerCalls.asyncClientStreamingCall;
import static io.grpc.stub.ServerCalls.asyncServerStreamingCall;
import static io.grpc.stub.ServerCalls.asyncUnaryCall;
import static io.grpc.stub.ServerCalls.asyncUnimplementedStreamingCall;
import static io.grpc.stub.ServerCalls.asyncUnimplementedUnaryCall;

/**
 * <pre>
 * Service定义
 * </pre>
 */
@javax.annotation.Generated(
    value = "by gRPC proto compiler (version 1.34.1)",
    comments = "Source: authority.proto")
public final class CheckAuthGrpc {

  private CheckAuthGrpc() {}

  public static final String SERVICE_NAME = "RegisterAndLogin.CheckAuth";

  // Static method descriptors that strictly reflect the proto.
  private static volatile io.grpc.MethodDescriptor<io.grpc.registerandlogin.CheckAuthRequest,
      io.grpc.registerandlogin.CheckAuthReply> getCheckAuthMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "CheckAuth",
      requestType = io.grpc.registerandlogin.CheckAuthRequest.class,
      responseType = io.grpc.registerandlogin.CheckAuthReply.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<io.grpc.registerandlogin.CheckAuthRequest,
      io.grpc.registerandlogin.CheckAuthReply> getCheckAuthMethod() {
    io.grpc.MethodDescriptor<io.grpc.registerandlogin.CheckAuthRequest, io.grpc.registerandlogin.CheckAuthReply> getCheckAuthMethod;
    if ((getCheckAuthMethod = CheckAuthGrpc.getCheckAuthMethod) == null) {
      synchronized (CheckAuthGrpc.class) {
        if ((getCheckAuthMethod = CheckAuthGrpc.getCheckAuthMethod) == null) {
          CheckAuthGrpc.getCheckAuthMethod = getCheckAuthMethod =
              io.grpc.MethodDescriptor.<io.grpc.registerandlogin.CheckAuthRequest, io.grpc.registerandlogin.CheckAuthReply>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(SERVICE_NAME, "CheckAuth"))
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
    io.grpc.stub.AbstractStub.StubFactory<CheckAuthStub> factory =
      new io.grpc.stub.AbstractStub.StubFactory<CheckAuthStub>() {
        @java.lang.Override
        public CheckAuthStub newStub(io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
          return new CheckAuthStub(channel, callOptions);
        }
      };
    return CheckAuthStub.newStub(factory, channel);
  }

  /**
   * Creates a new blocking-style stub that supports unary and streaming output calls on the service
   */
  public static CheckAuthBlockingStub newBlockingStub(
      io.grpc.Channel channel) {
    io.grpc.stub.AbstractStub.StubFactory<CheckAuthBlockingStub> factory =
      new io.grpc.stub.AbstractStub.StubFactory<CheckAuthBlockingStub>() {
        @java.lang.Override
        public CheckAuthBlockingStub newStub(io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
          return new CheckAuthBlockingStub(channel, callOptions);
        }
      };
    return CheckAuthBlockingStub.newStub(factory, channel);
  }

  /**
   * Creates a new ListenableFuture-style stub that supports unary calls on the service
   */
  public static CheckAuthFutureStub newFutureStub(
      io.grpc.Channel channel) {
    io.grpc.stub.AbstractStub.StubFactory<CheckAuthFutureStub> factory =
      new io.grpc.stub.AbstractStub.StubFactory<CheckAuthFutureStub>() {
        @java.lang.Override
        public CheckAuthFutureStub newStub(io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
          return new CheckAuthFutureStub(channel, callOptions);
        }
      };
    return CheckAuthFutureStub.newStub(factory, channel);
  }

  /**
   * <pre>
   * Service定义
   * </pre>
   */
  public static abstract class CheckAuthImplBase implements io.grpc.BindableService {

    /**
     */
    public void checkAuth(io.grpc.registerandlogin.CheckAuthRequest request,
        io.grpc.stub.StreamObserver<io.grpc.registerandlogin.CheckAuthReply> responseObserver) {
      asyncUnimplementedUnaryCall(getCheckAuthMethod(), responseObserver);
    }

    @java.lang.Override public final io.grpc.ServerServiceDefinition bindService() {
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
  public static final class CheckAuthStub extends io.grpc.stub.AbstractAsyncStub<CheckAuthStub> {
    private CheckAuthStub(
        io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
      super(channel, callOptions);
    }

    @java.lang.Override
    protected CheckAuthStub build(
        io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
      return new CheckAuthStub(channel, callOptions);
    }

    /**
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
  public static final class CheckAuthBlockingStub extends io.grpc.stub.AbstractBlockingStub<CheckAuthBlockingStub> {
    private CheckAuthBlockingStub(
        io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
      super(channel, callOptions);
    }

    @java.lang.Override
    protected CheckAuthBlockingStub build(
        io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
      return new CheckAuthBlockingStub(channel, callOptions);
    }

    /**
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
  public static final class CheckAuthFutureStub extends io.grpc.stub.AbstractFutureStub<CheckAuthFutureStub> {
    private CheckAuthFutureStub(
        io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
      super(channel, callOptions);
    }

    @java.lang.Override
    protected CheckAuthFutureStub build(
        io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
      return new CheckAuthFutureStub(channel, callOptions);
    }

    /**
     */
    public com.google.common.util.concurrent.ListenableFuture<io.grpc.registerandlogin.CheckAuthReply> checkAuth(
        io.grpc.registerandlogin.CheckAuthRequest request) {
      return futureUnaryCall(
          getChannel().newCall(getCheckAuthMethod(), getCallOptions()), request);
    }
  }

  private static final int METHODID_CHECK_AUTH = 0;

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

    @java.lang.Override
    @java.lang.SuppressWarnings("unchecked")
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

    @java.lang.Override
    @java.lang.SuppressWarnings("unchecked")
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
    CheckAuthBaseDescriptorSupplier() {}

    @java.lang.Override
    public com.google.protobuf.Descriptors.FileDescriptor getFileDescriptor() {
      return io.grpc.registerandlogin.AuthorityProto.getDescriptor();
    }

    @java.lang.Override
    public com.google.protobuf.Descriptors.ServiceDescriptor getServiceDescriptor() {
      return getFileDescriptor().findServiceByName("CheckAuth");
    }
  }

  private static final class CheckAuthFileDescriptorSupplier
      extends CheckAuthBaseDescriptorSupplier {
    CheckAuthFileDescriptorSupplier() {}
  }

  private static final class CheckAuthMethodDescriptorSupplier
      extends CheckAuthBaseDescriptorSupplier
      implements io.grpc.protobuf.ProtoMethodDescriptorSupplier {
    private final String methodName;

    CheckAuthMethodDescriptorSupplier(String methodName) {
      this.methodName = methodName;
    }

    @java.lang.Override
    public com.google.protobuf.Descriptors.MethodDescriptor getMethodDescriptor() {
      return getServiceDescriptor().findMethodByName(methodName);
    }
  }

  private static volatile io.grpc.ServiceDescriptor serviceDescriptor;

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
}

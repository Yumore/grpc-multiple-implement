// Generated by the protocol buffer compiler.  DO NOT EDIT!
// source: streaming.proto

package io.grpc.registerandlogin;

public final class HelloStreamingProto {
  private HelloStreamingProto() {}
  public static void registerAllExtensions(
      com.google.protobuf.ExtensionRegistryLite registry) {
  }

  public static void registerAllExtensions(
      com.google.protobuf.ExtensionRegistry registry) {
    registerAllExtensions(
        (com.google.protobuf.ExtensionRegistryLite) registry);
  }
  static final com.google.protobuf.Descriptors.Descriptor
    internal_static_ManualFlowControl_SteamRequest_descriptor;
  static final 
    com.google.protobuf.GeneratedMessageV3.FieldAccessorTable
      internal_static_ManualFlowControl_SteamRequest_fieldAccessorTable;
  static final com.google.protobuf.Descriptors.Descriptor
    internal_static_ManualFlowControl_SteamReply_descriptor;
  static final 
    com.google.protobuf.GeneratedMessageV3.FieldAccessorTable
      internal_static_ManualFlowControl_SteamReply_fieldAccessorTable;

  public static com.google.protobuf.Descriptors.FileDescriptor
      getDescriptor() {
    return descriptor;
  }
  private static  com.google.protobuf.Descriptors.FileDescriptor
      descriptor;
  static {
    java.lang.String[] descriptorData = {
      "\n\017streaming.proto\022\021ManualFlowControl\"\034\n\014" +
      "SteamRequest\022\014\n\004name\030\001 \001(\t\"\035\n\nSteamReply" +
      "\022\017\n\007message\030\001 \001(\t2o\n\020StreamingGreeter\022[\n" +
      "\021SayHelloStreaming\022\037.ManualFlowControl.S" +
      "teamRequest\032\037.ManualFlowControl.SteamReq" +
      "uest\"\000(\0010\001B8\n\030io.grpc.registerandloginB\023" +
      "HelloStreamingProtoP\001\242\002\004HLWSb\006proto3"
    };
    com.google.protobuf.Descriptors.FileDescriptor.InternalDescriptorAssigner assigner =
        new com.google.protobuf.Descriptors.FileDescriptor.    InternalDescriptorAssigner() {
          public com.google.protobuf.ExtensionRegistry assignDescriptors(
              com.google.protobuf.Descriptors.FileDescriptor root) {
            descriptor = root;
            return null;
          }
        };
    com.google.protobuf.Descriptors.FileDescriptor
      .internalBuildGeneratedFileFrom(descriptorData,
        new com.google.protobuf.Descriptors.FileDescriptor[] {
        }, assigner);
    internal_static_ManualFlowControl_SteamRequest_descriptor =
      getDescriptor().getMessageTypes().get(0);
    internal_static_ManualFlowControl_SteamRequest_fieldAccessorTable = new
      com.google.protobuf.GeneratedMessageV3.FieldAccessorTable(
        internal_static_ManualFlowControl_SteamRequest_descriptor,
        new java.lang.String[] { "Name", });
    internal_static_ManualFlowControl_SteamReply_descriptor =
      getDescriptor().getMessageTypes().get(1);
    internal_static_ManualFlowControl_SteamReply_fieldAccessorTable = new
      com.google.protobuf.GeneratedMessageV3.FieldAccessorTable(
        internal_static_ManualFlowControl_SteamReply_descriptor,
        new java.lang.String[] { "Message", });
  }

  // @@protoc_insertion_point(outer_class_scope)
}
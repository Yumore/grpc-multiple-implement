// Generated by the protocol buffer compiler.  DO NOT EDIT!
// source: route_guide.proto

package io.grpc.registerandlogin;

public interface RouteNoteOrBuilder extends
    // @@protoc_insertion_point(interface_extends:RouteGuide.RouteNote)
    com.google.protobuf.MessageOrBuilder {

  /**
   * <pre>
   * The location from which the message is sent.
   * </pre>
   *
   * <code>.RouteGuide.Point location = 1;</code>
   */
  boolean hasLocation();
  /**
   * <pre>
   * The location from which the message is sent.
   * </pre>
   *
   * <code>.RouteGuide.Point location = 1;</code>
   */
  io.grpc.registerandlogin.Point getLocation();
  /**
   * <pre>
   * The location from which the message is sent.
   * </pre>
   *
   * <code>.RouteGuide.Point location = 1;</code>
   */
  io.grpc.registerandlogin.PointOrBuilder getLocationOrBuilder();

  /**
   * <pre>
   * The message to be sent.
   * </pre>
   *
   * <code>string message = 2;</code>
   */
  java.lang.String getMessage();
  /**
   * <pre>
   * The message to be sent.
   * </pre>
   *
   * <code>string message = 2;</code>
   */
  com.google.protobuf.ByteString
      getMessageBytes();
}
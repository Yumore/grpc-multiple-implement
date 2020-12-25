///
//  Generated code. Do not modify.
//  source: chat.proto
//
// @dart = 2.3
// ignore_for_file: annotate_overrides,camel_case_types,unnecessary_const,non_constant_identifier_names,library_prefixes,unused_import,unused_shown_name,return_of_invalid_type,unnecessary_this,prefer_final_fields

import 'dart:async' as $async;

import 'dart:core' as $core;

import 'package:grpc/service_api.dart' as $grpc;
import 'wrappers.pb.dart' as $0;
import 'empty.pb.dart' as $1;
import 'chat.pb.dart' as $2;
export 'chat.pb.dart';

class ChatServiceClient extends $grpc.Client {
  static final _$send = $grpc.ClientMethod<$0.StringValue, $1.Empty>(
      '/ChatService/Send',
      ($0.StringValue value) => value.writeToBuffer(),
      ($core.List<$core.int> value) => $1.Empty.fromBuffer(value));
  static final _$subscribe = $grpc.ClientMethod<$1.Empty, $2.Message>(
      '/ChatService/Subscribe',
      ($1.Empty value) => value.writeToBuffer(),
      ($core.List<$core.int> value) => $2.Message.fromBuffer(value));

  ChatServiceClient($grpc.ClientChannel channel,
      {$grpc.CallOptions options,
      $core.Iterable<$grpc.ClientInterceptor> interceptors})
      : super(channel, options: options, interceptors: interceptors);

  $grpc.ResponseFuture<$1.Empty> send($0.StringValue request,
      {$grpc.CallOptions options}) {
    return $createUnaryCall(_$send, request, options: options);
  }

  $grpc.ResponseStream<$2.Message> subscribe($1.Empty request,
      {$grpc.CallOptions options}) {
    return $createStreamingCall(
        _$subscribe, $async.Stream.fromIterable([request]),
        options: options);
  }
}

abstract class ChatServiceBase extends $grpc.Service {
  $core.String get $name => 'ChatService';

  ChatServiceBase() {
    $addMethod($grpc.ServiceMethod<$0.StringValue, $1.Empty>(
        'Send',
        send_Pre,
        false,
        false,
        ($core.List<$core.int> value) => $0.StringValue.fromBuffer(value),
        ($1.Empty value) => value.writeToBuffer()));
    $addMethod($grpc.ServiceMethod<$1.Empty, $2.Message>(
        'Subscribe',
        subscribe_Pre,
        false,
        true,
        ($core.List<$core.int> value) => $1.Empty.fromBuffer(value),
        ($2.Message value) => value.writeToBuffer()));
  }

  $async.Future<$1.Empty> send_Pre(
      $grpc.ServiceCall call, $async.Future<$0.StringValue> request) async {
    return send(call, await request);
  }

  $async.Stream<$2.Message> subscribe_Pre(
      $grpc.ServiceCall call, $async.Future<$1.Empty> request) async* {
    yield* subscribe(call, await request);
  }

  $async.Future<$1.Empty> send($grpc.ServiceCall call, $0.StringValue request);
  $async.Stream<$2.Message> subscribe($grpc.ServiceCall call, $1.Empty request);
}

define(['dart_sdk', 'packages/grpc/src/client/client', 'packages/grpc/src/client/call', 'packages/protobuf/protobuf'], (function load__packages__grpc_web__app(dart_sdk, packages__grpc__src__client__client, packages__grpc__src__client__call, packages__protobuf__protobuf) {
  'use strict';
  const core = dart_sdk.core;
  const async = dart_sdk.async;
  const _interceptors = dart_sdk._interceptors;
  const typed_data = dart_sdk.typed_data;
  const html = dart_sdk.html;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const client = packages__grpc__src__client__client.src__client__client;
  const service = packages__grpc__src__client__client.src__server__service;
  const call = packages__grpc__src__client__client.src__server__call;
  const common = packages__grpc__src__client__call.src__client__common;
  const call$ = packages__grpc__src__client__call.src__client__call;
  const method = packages__grpc__src__client__call.src__client__method;
  const protobuf = packages__protobuf__protobuf.protobuf;
  var echo$46pbgrpc = Object.create(dart.library);
  var echo$46pb = Object.create(dart.library);
  var app = Object.create(dart.library);
  var $toString = dartx.toString;
  var $split = dartx.split;
  var $classes = dartx.classes;
  var $text = dartx.text;
  var $append = dartx.append;
  var EchoRequestL = () => (EchoRequestL = dart.constFn(dart.legacy(echo$46pb.EchoRequest)))();
  var EchoResponseL = () => (EchoResponseL = dart.constFn(dart.legacy(echo$46pb.EchoResponse)))();
  var ServerStreamingEchoRequestL = () => (ServerStreamingEchoRequestL = dart.constFn(dart.legacy(echo$46pb.ServerStreamingEchoRequest)))();
  var ServerStreamingEchoResponseL = () => (ServerStreamingEchoResponseL = dart.constFn(dart.legacy(echo$46pb.ServerStreamingEchoResponse)))();
  var StreamOfServerStreamingEchoRequestL = () => (StreamOfServerStreamingEchoRequestL = dart.constFn(async.Stream$(ServerStreamingEchoRequestL())))();
  var JSArrayOfServerStreamingEchoRequestL = () => (JSArrayOfServerStreamingEchoRequestL = dart.constFn(_interceptors.JSArray$(ServerStreamingEchoRequestL())))();
  var ClientMethodOfEchoRequestL$EchoResponseL = () => (ClientMethodOfEchoRequestL$EchoResponseL = dart.constFn(method.ClientMethod$(EchoRequestL(), EchoResponseL())))();
  var Uint8ListL = () => (Uint8ListL = dart.constFn(dart.legacy(typed_data.Uint8List)))();
  var EchoRequestLToUint8ListL = () => (EchoRequestLToUint8ListL = dart.constFn(dart.fnType(Uint8ListL(), [EchoRequestL()])))();
  var intL = () => (intL = dart.constFn(dart.legacy(core.int)))();
  var ListOfintL = () => (ListOfintL = dart.constFn(core.List$(intL())))();
  var ListLOfintL = () => (ListLOfintL = dart.constFn(dart.legacy(ListOfintL())))();
  var ListLOfintLToEchoResponseL = () => (ListLOfintLToEchoResponseL = dart.constFn(dart.fnType(EchoResponseL(), [ListLOfintL()])))();
  var ClientMethodOfServerStreamingEchoRequestL$ServerStreamingEchoResponseL = () => (ClientMethodOfServerStreamingEchoRequestL$ServerStreamingEchoResponseL = dart.constFn(method.ClientMethod$(ServerStreamingEchoRequestL(), ServerStreamingEchoResponseL())))();
  var ServerStreamingEchoRequestLToUint8ListL = () => (ServerStreamingEchoRequestLToUint8ListL = dart.constFn(dart.fnType(Uint8ListL(), [ServerStreamingEchoRequestL()])))();
  var ListLOfintLToServerStreamingEchoResponseL = () => (ListLOfintLToServerStreamingEchoResponseL = dart.constFn(dart.fnType(ServerStreamingEchoResponseL(), [ListLOfintL()])))();
  var ServiceMethodOfEchoRequestL$EchoResponseL = () => (ServiceMethodOfEchoRequestL$EchoResponseL = dart.constFn(service.ServiceMethod$(EchoRequestL(), EchoResponseL())))();
  var ListLOfintLToEchoRequestL = () => (ListLOfintLToEchoRequestL = dart.constFn(dart.fnType(EchoRequestL(), [ListLOfintL()])))();
  var EchoResponseLToUint8ListL = () => (EchoResponseLToUint8ListL = dart.constFn(dart.fnType(Uint8ListL(), [EchoResponseL()])))();
  var ServiceMethodOfServerStreamingEchoRequestL$ServerStreamingEchoResponseL = () => (ServiceMethodOfServerStreamingEchoRequestL$ServerStreamingEchoResponseL = dart.constFn(service.ServiceMethod$(ServerStreamingEchoRequestL(), ServerStreamingEchoResponseL())))();
  var ListLOfintLToServerStreamingEchoRequestL = () => (ListLOfintLToServerStreamingEchoRequestL = dart.constFn(dart.fnType(ServerStreamingEchoRequestL(), [ListLOfintL()])))();
  var ServerStreamingEchoResponseLToUint8ListL = () => (ServerStreamingEchoResponseLToUint8ListL = dart.constFn(dart.fnType(Uint8ListL(), [ServerStreamingEchoResponseL()])))();
  var _AsyncStarImplOfServerStreamingEchoResponseL = () => (_AsyncStarImplOfServerStreamingEchoResponseL = dart.constFn(async._AsyncStarImpl$(ServerStreamingEchoResponseL())))();
  var GeneratedMessageL = () => (GeneratedMessageL = dart.constFn(dart.legacy(protobuf.GeneratedMessage)))();
  var GeneratedMessageLTovoid = () => (GeneratedMessageLTovoid = dart.constFn(dart.fnType(dart.void, [GeneratedMessageL()])))();
  var PbListOfEchoRequestL = () => (PbListOfEchoRequestL = dart.constFn(protobuf.PbList$(EchoRequestL())))();
  var VoidToEchoRequestL = () => (VoidToEchoRequestL = dart.constFn(dart.fnType(EchoRequestL(), [])))();
  var PbListOfEchoResponseL = () => (PbListOfEchoResponseL = dart.constFn(protobuf.PbList$(EchoResponseL())))();
  var VoidToEchoResponseL = () => (VoidToEchoResponseL = dart.constFn(dart.fnType(EchoResponseL(), [])))();
  var PbListOfServerStreamingEchoRequestL = () => (PbListOfServerStreamingEchoRequestL = dart.constFn(protobuf.PbList$(ServerStreamingEchoRequestL())))();
  var VoidToServerStreamingEchoRequestL = () => (VoidToServerStreamingEchoRequestL = dart.constFn(dart.fnType(ServerStreamingEchoRequestL(), [])))();
  var PbListOfServerStreamingEchoResponseL = () => (PbListOfServerStreamingEchoResponseL = dart.constFn(protobuf.PbList$(ServerStreamingEchoResponseL())))();
  var VoidToServerStreamingEchoResponseL = () => (VoidToServerStreamingEchoResponseL = dart.constFn(dart.fnType(ServerStreamingEchoResponseL(), [])))();
  var ServerStreamingEchoResponseLToNullN = () => (ServerStreamingEchoResponseLToNullN = dart.constFn(dart.fnType(core.Null, [ServerStreamingEchoResponseL()])))();
  var dynamicToNullN = () => (dynamicToNullN = dart.constFn(dart.fnType(core.Null, [dart.dynamic])))();
  var VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  const CT = Object.create(null);
  var L0 = "package:grpc_web/src/generated/echo.pbgrpc.dart";
  var L1 = "package:grpc_web/src/generated/echo.pb.dart";
  var L2 = "package:grpc_web/app.dart";
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.const({
        __proto__: protobuf._EmptyExtensionRegistry.prototype
      });
    },
    get C1() {
      return C1 = dart.fn(echo$46pb.EchoRequest.create, VoidToEchoRequestL());
    },
    get C2() {
      return C2 = dart.const({
        __proto__: protobuf.PackageName.prototype,
        [PackageName_name]: "grpc.gateway.testing"
      });
    },
    get C3() {
      return C3 = dart.fn(echo$46pb.EchoResponse.create, VoidToEchoResponseL());
    },
    get C4() {
      return C4 = dart.fn(echo$46pb.ServerStreamingEchoRequest.create, VoidToServerStreamingEchoRequestL());
    },
    get C5() {
      return C5 = dart.fn(echo$46pb.ServerStreamingEchoResponse.create, VoidToServerStreamingEchoResponseL());
    }
  }, false);
  echo$46pbgrpc.EchoServiceClient = class EchoServiceClient extends client.Client {
    echo(request, opts) {
      let options = opts && 'options' in opts ? opts.options : null;
      return this.$createUnaryCall(EchoRequestL(), EchoResponseL(), echo$46pbgrpc.EchoServiceClient._$echo, request, {options: options});
    }
    serverStreamingEcho(request, opts) {
      let options = opts && 'options' in opts ? opts.options : null;
      return this.$createStreamingCall(ServerStreamingEchoRequestL(), ServerStreamingEchoResponseL(), echo$46pbgrpc.EchoServiceClient._$serverStreamingEcho, StreamOfServerStreamingEchoRequestL().fromIterable(JSArrayOfServerStreamingEchoRequestL().of([request])), {options: options});
    }
  };
  (echo$46pbgrpc.EchoServiceClient.new = function(channel, opts) {
    let options = opts && 'options' in opts ? opts.options : null;
    let interceptors = opts && 'interceptors' in opts ? opts.interceptors : null;
    echo$46pbgrpc.EchoServiceClient.__proto__.new.call(this, channel, {options: options, interceptors: interceptors});
    ;
  }).prototype = echo$46pbgrpc.EchoServiceClient.prototype;
  dart.addTypeTests(echo$46pbgrpc.EchoServiceClient);
  dart.addTypeCaches(echo$46pbgrpc.EchoServiceClient);
  dart.setMethodSignature(echo$46pbgrpc.EchoServiceClient, () => ({
    __proto__: dart.getMethods(echo$46pbgrpc.EchoServiceClient.__proto__),
    echo: dart.fnType(dart.legacy(common.ResponseFuture$(dart.legacy(echo$46pb.EchoResponse))), [dart.legacy(echo$46pb.EchoRequest)], {options: dart.legacy(call$.CallOptions)}, {}),
    serverStreamingEcho: dart.fnType(dart.legacy(common.ResponseStream$(dart.legacy(echo$46pb.ServerStreamingEchoResponse))), [dart.legacy(echo$46pb.ServerStreamingEchoRequest)], {options: dart.legacy(call$.CallOptions)}, {})
  }));
  dart.setLibraryUri(echo$46pbgrpc.EchoServiceClient, L0);
  dart.defineLazy(echo$46pbgrpc.EchoServiceClient, {
    /*echo$46pbgrpc.EchoServiceClient._$echo*/get _$echo() {
      return new (ClientMethodOfEchoRequestL$EchoResponseL()).new("/grpc.gateway.testing.EchoService/Echo", dart.fn(value => value.writeToBuffer(), EchoRequestLToUint8ListL()), dart.fn(value => echo$46pb.EchoResponse.fromBuffer(value), ListLOfintLToEchoResponseL()));
    },
    /*echo$46pbgrpc.EchoServiceClient._$serverStreamingEcho*/get _$serverStreamingEcho() {
      return new (ClientMethodOfServerStreamingEchoRequestL$ServerStreamingEchoResponseL()).new("/grpc.gateway.testing.EchoService/ServerStreamingEcho", dart.fn(value => value.writeToBuffer(), ServerStreamingEchoRequestLToUint8ListL()), dart.fn(value => echo$46pb.ServerStreamingEchoResponse.fromBuffer(value), ListLOfintLToServerStreamingEchoResponseL()));
    }
  }, true);
  echo$46pbgrpc.EchoServiceBase = class EchoServiceBase extends service.Service {
    get $name() {
      return "grpc.gateway.testing.EchoService";
    }
    echo_Pre(call, request) {
      return async.async(EchoResponseL(), (function* echo_Pre() {
        return this.echo(call, yield request);
      }).bind(this));
    }
    serverStreamingEcho_Pre(call, request) {
      return new (_AsyncStarImplOfServerStreamingEchoResponseL()).new((function* serverStreamingEcho_Pre(stream) {
        if (stream.addStream(this.serverStreamingEcho(call, yield request))) return;
        yield;
      }).bind(this)).stream;
    }
  };
  (echo$46pbgrpc.EchoServiceBase.new = function() {
    echo$46pbgrpc.EchoServiceBase.__proto__.new.call(this);
    this.$addMethod(new (ServiceMethodOfEchoRequestL$EchoResponseL()).new("Echo", dart.bind(this, 'echo_Pre'), false, false, dart.fn(value => echo$46pb.EchoRequest.fromBuffer(value), ListLOfintLToEchoRequestL()), dart.fn(value => value.writeToBuffer(), EchoResponseLToUint8ListL())));
    this.$addMethod(new (ServiceMethodOfServerStreamingEchoRequestL$ServerStreamingEchoResponseL()).new("ServerStreamingEcho", dart.bind(this, 'serverStreamingEcho_Pre'), false, true, dart.fn(value => echo$46pb.ServerStreamingEchoRequest.fromBuffer(value), ListLOfintLToServerStreamingEchoRequestL()), dart.fn(value => value.writeToBuffer(), ServerStreamingEchoResponseLToUint8ListL())));
  }).prototype = echo$46pbgrpc.EchoServiceBase.prototype;
  dart.addTypeTests(echo$46pbgrpc.EchoServiceBase);
  dart.addTypeCaches(echo$46pbgrpc.EchoServiceBase);
  dart.setMethodSignature(echo$46pbgrpc.EchoServiceBase, () => ({
    __proto__: dart.getMethods(echo$46pbgrpc.EchoServiceBase.__proto__),
    echo_Pre: dart.fnType(dart.legacy(async.Future$(dart.legacy(echo$46pb.EchoResponse))), [dart.legacy(call.ServiceCall), dart.legacy(async.Future$(dart.legacy(echo$46pb.EchoRequest)))]),
    serverStreamingEcho_Pre: dart.fnType(dart.legacy(async.Stream$(dart.legacy(echo$46pb.ServerStreamingEchoResponse))), [dart.legacy(call.ServiceCall), dart.legacy(async.Future$(dart.legacy(echo$46pb.ServerStreamingEchoRequest)))])
  }));
  dart.setGetterSignature(echo$46pbgrpc.EchoServiceBase, () => ({
    __proto__: dart.getGetters(echo$46pbgrpc.EchoServiceBase.__proto__),
    $name: dart.legacy(core.String)
  }));
  dart.setLibraryUri(echo$46pbgrpc.EchoServiceBase, L0);
  var C0;
  var C1;
  var PackageName_name = dart.privateName(protobuf, "PackageName.name");
  var C2;
  echo$46pb.EchoRequest = class EchoRequest extends protobuf.GeneratedMessage {
    static new() {
      return echo$46pb.EchoRequest.create();
    }
    static fromBuffer(i, r = C0 || CT.C0) {
      let t0;
      t0 = echo$46pb.EchoRequest.create();
      return (() => {
        t0.mergeFromBuffer(i, r);
        return t0;
      })();
    }
    static fromJson(i, r = C0 || CT.C0) {
      let t0;
      t0 = echo$46pb.EchoRequest.create();
      return (() => {
        t0.mergeFromJson(i, r);
        return t0;
      })();
    }
    clone() {
      let t0;
      t0 = echo$46pb.EchoRequest.new();
      return (() => {
        t0.mergeFromMessage(this);
        return t0;
      })();
    }
    copyWith(updates) {
      return EchoRequestL().as(super.copyWith(dart.fn(message => updates(EchoRequestL().as(message)), GeneratedMessageLTovoid())));
    }
    get info_() {
      return echo$46pb.EchoRequest._i;
    }
    static create() {
      return new echo$46pb.EchoRequest.__();
    }
    createEmptyInstance() {
      return echo$46pb.EchoRequest.create();
    }
    static createRepeated() {
      return new (PbListOfEchoRequestL()).new();
    }
    static getDefault() {
      let t0;
      t0 = echo$46pb.EchoRequest._defaultInstance;
      return t0 == null ? echo$46pb.EchoRequest._defaultInstance = protobuf.GeneratedMessage.$_defaultFor(EchoRequestL(), C1 || CT.C1) : t0;
    }
    get message() {
      return this.$_getSZ(0);
    }
    set message(v) {
      this.$_setString(0, v);
    }
    hasMessage() {
      return this.$_has(0);
    }
    clearMessage() {
      return this.clearField(1);
    }
  };
  (echo$46pb.EchoRequest.__ = function() {
    echo$46pb.EchoRequest.__proto__.new.call(this);
    ;
  }).prototype = echo$46pb.EchoRequest.prototype;
  dart.addTypeTests(echo$46pb.EchoRequest);
  dart.addTypeCaches(echo$46pb.EchoRequest);
  dart.setMethodSignature(echo$46pb.EchoRequest, () => ({
    __proto__: dart.getMethods(echo$46pb.EchoRequest.__proto__),
    clone: dart.fnType(dart.legacy(echo$46pb.EchoRequest), []),
    copyWith: dart.fnType(dart.legacy(echo$46pb.EchoRequest), [dart.legacy(dart.fnType(dart.void, [dart.legacy(echo$46pb.EchoRequest)]))]),
    createEmptyInstance: dart.fnType(dart.legacy(echo$46pb.EchoRequest), []),
    hasMessage: dart.fnType(dart.legacy(core.bool), []),
    clearMessage: dart.fnType(dart.void, [])
  }));
  dart.setGetterSignature(echo$46pb.EchoRequest, () => ({
    __proto__: dart.getGetters(echo$46pb.EchoRequest.__proto__),
    info_: dart.legacy(protobuf.BuilderInfo),
    message: dart.legacy(core.String)
  }));
  dart.setSetterSignature(echo$46pb.EchoRequest, () => ({
    __proto__: dart.getSetters(echo$46pb.EchoRequest.__proto__),
    message: dart.legacy(core.String)
  }));
  dart.setLibraryUri(echo$46pb.EchoRequest, L1);
  dart.defineLazy(echo$46pb.EchoRequest, {
    /*echo$46pb.EchoRequest._i*/get _i() {
      let t0;
      return t0 = new protobuf.BuilderInfo.new(false ? "" : "EchoRequest", {package: C2 || CT.C2, createEmptyInstance: C1 || CT.C1}), (() => {
        t0.aOS(1, false ? "" : "message");
        t0.hasRequiredFields = false;
        return t0;
      })();
    },
    /*echo$46pb.EchoRequest._defaultInstance*/get _defaultInstance() {
      return null;
    },
    set _defaultInstance(_) {}
  }, true);
  var C3;
  echo$46pb.EchoResponse = class EchoResponse extends protobuf.GeneratedMessage {
    static new() {
      return echo$46pb.EchoResponse.create();
    }
    static fromBuffer(i, r = C0 || CT.C0) {
      let t0;
      t0 = echo$46pb.EchoResponse.create();
      return (() => {
        t0.mergeFromBuffer(i, r);
        return t0;
      })();
    }
    static fromJson(i, r = C0 || CT.C0) {
      let t0;
      t0 = echo$46pb.EchoResponse.create();
      return (() => {
        t0.mergeFromJson(i, r);
        return t0;
      })();
    }
    clone() {
      let t0;
      t0 = echo$46pb.EchoResponse.new();
      return (() => {
        t0.mergeFromMessage(this);
        return t0;
      })();
    }
    copyWith(updates) {
      return EchoResponseL().as(super.copyWith(dart.fn(message => updates(EchoResponseL().as(message)), GeneratedMessageLTovoid())));
    }
    get info_() {
      return echo$46pb.EchoResponse._i;
    }
    static create() {
      return new echo$46pb.EchoResponse.__();
    }
    createEmptyInstance() {
      return echo$46pb.EchoResponse.create();
    }
    static createRepeated() {
      return new (PbListOfEchoResponseL()).new();
    }
    static getDefault() {
      let t0;
      t0 = echo$46pb.EchoResponse._defaultInstance;
      return t0 == null ? echo$46pb.EchoResponse._defaultInstance = protobuf.GeneratedMessage.$_defaultFor(EchoResponseL(), C3 || CT.C3) : t0;
    }
    get message() {
      return this.$_getSZ(0);
    }
    set message(v) {
      this.$_setString(0, v);
    }
    hasMessage() {
      return this.$_has(0);
    }
    clearMessage() {
      return this.clearField(1);
    }
  };
  (echo$46pb.EchoResponse.__ = function() {
    echo$46pb.EchoResponse.__proto__.new.call(this);
    ;
  }).prototype = echo$46pb.EchoResponse.prototype;
  dart.addTypeTests(echo$46pb.EchoResponse);
  dart.addTypeCaches(echo$46pb.EchoResponse);
  dart.setMethodSignature(echo$46pb.EchoResponse, () => ({
    __proto__: dart.getMethods(echo$46pb.EchoResponse.__proto__),
    clone: dart.fnType(dart.legacy(echo$46pb.EchoResponse), []),
    copyWith: dart.fnType(dart.legacy(echo$46pb.EchoResponse), [dart.legacy(dart.fnType(dart.void, [dart.legacy(echo$46pb.EchoResponse)]))]),
    createEmptyInstance: dart.fnType(dart.legacy(echo$46pb.EchoResponse), []),
    hasMessage: dart.fnType(dart.legacy(core.bool), []),
    clearMessage: dart.fnType(dart.void, [])
  }));
  dart.setGetterSignature(echo$46pb.EchoResponse, () => ({
    __proto__: dart.getGetters(echo$46pb.EchoResponse.__proto__),
    info_: dart.legacy(protobuf.BuilderInfo),
    message: dart.legacy(core.String)
  }));
  dart.setSetterSignature(echo$46pb.EchoResponse, () => ({
    __proto__: dart.getSetters(echo$46pb.EchoResponse.__proto__),
    message: dart.legacy(core.String)
  }));
  dart.setLibraryUri(echo$46pb.EchoResponse, L1);
  dart.defineLazy(echo$46pb.EchoResponse, {
    /*echo$46pb.EchoResponse._i*/get _i() {
      let t0;
      return t0 = new protobuf.BuilderInfo.new(false ? "" : "EchoResponse", {package: C2 || CT.C2, createEmptyInstance: C3 || CT.C3}), (() => {
        t0.aOS(1, false ? "" : "message");
        t0.hasRequiredFields = false;
        return t0;
      })();
    },
    /*echo$46pb.EchoResponse._defaultInstance*/get _defaultInstance() {
      return null;
    },
    set _defaultInstance(_) {}
  }, true);
  var C4;
  echo$46pb.ServerStreamingEchoRequest = class ServerStreamingEchoRequest extends protobuf.GeneratedMessage {
    static new() {
      return echo$46pb.ServerStreamingEchoRequest.create();
    }
    static fromBuffer(i, r = C0 || CT.C0) {
      let t0;
      t0 = echo$46pb.ServerStreamingEchoRequest.create();
      return (() => {
        t0.mergeFromBuffer(i, r);
        return t0;
      })();
    }
    static fromJson(i, r = C0 || CT.C0) {
      let t0;
      t0 = echo$46pb.ServerStreamingEchoRequest.create();
      return (() => {
        t0.mergeFromJson(i, r);
        return t0;
      })();
    }
    clone() {
      let t0;
      t0 = echo$46pb.ServerStreamingEchoRequest.new();
      return (() => {
        t0.mergeFromMessage(this);
        return t0;
      })();
    }
    copyWith(updates) {
      return ServerStreamingEchoRequestL().as(super.copyWith(dart.fn(message => updates(ServerStreamingEchoRequestL().as(message)), GeneratedMessageLTovoid())));
    }
    get info_() {
      return echo$46pb.ServerStreamingEchoRequest._i;
    }
    static create() {
      return new echo$46pb.ServerStreamingEchoRequest.__();
    }
    createEmptyInstance() {
      return echo$46pb.ServerStreamingEchoRequest.create();
    }
    static createRepeated() {
      return new (PbListOfServerStreamingEchoRequestL()).new();
    }
    static getDefault() {
      let t0;
      t0 = echo$46pb.ServerStreamingEchoRequest._defaultInstance;
      return t0 == null ? echo$46pb.ServerStreamingEchoRequest._defaultInstance = protobuf.GeneratedMessage.$_defaultFor(ServerStreamingEchoRequestL(), C4 || CT.C4) : t0;
    }
    get message() {
      return this.$_getSZ(0);
    }
    set message(v) {
      this.$_setString(0, v);
    }
    hasMessage() {
      return this.$_has(0);
    }
    clearMessage() {
      return this.clearField(1);
    }
    get messageCount() {
      return this.$_getIZ(1);
    }
    set messageCount(v) {
      this.$_setSignedInt32(1, v);
    }
    hasMessageCount() {
      return this.$_has(1);
    }
    clearMessageCount() {
      return this.clearField(2);
    }
    get messageInterval() {
      return this.$_getIZ(2);
    }
    set messageInterval(v) {
      this.$_setSignedInt32(2, v);
    }
    hasMessageInterval() {
      return this.$_has(2);
    }
    clearMessageInterval() {
      return this.clearField(3);
    }
  };
  (echo$46pb.ServerStreamingEchoRequest.__ = function() {
    echo$46pb.ServerStreamingEchoRequest.__proto__.new.call(this);
    ;
  }).prototype = echo$46pb.ServerStreamingEchoRequest.prototype;
  dart.addTypeTests(echo$46pb.ServerStreamingEchoRequest);
  dart.addTypeCaches(echo$46pb.ServerStreamingEchoRequest);
  dart.setMethodSignature(echo$46pb.ServerStreamingEchoRequest, () => ({
    __proto__: dart.getMethods(echo$46pb.ServerStreamingEchoRequest.__proto__),
    clone: dart.fnType(dart.legacy(echo$46pb.ServerStreamingEchoRequest), []),
    copyWith: dart.fnType(dart.legacy(echo$46pb.ServerStreamingEchoRequest), [dart.legacy(dart.fnType(dart.void, [dart.legacy(echo$46pb.ServerStreamingEchoRequest)]))]),
    createEmptyInstance: dart.fnType(dart.legacy(echo$46pb.ServerStreamingEchoRequest), []),
    hasMessage: dart.fnType(dart.legacy(core.bool), []),
    clearMessage: dart.fnType(dart.void, []),
    hasMessageCount: dart.fnType(dart.legacy(core.bool), []),
    clearMessageCount: dart.fnType(dart.void, []),
    hasMessageInterval: dart.fnType(dart.legacy(core.bool), []),
    clearMessageInterval: dart.fnType(dart.void, [])
  }));
  dart.setGetterSignature(echo$46pb.ServerStreamingEchoRequest, () => ({
    __proto__: dart.getGetters(echo$46pb.ServerStreamingEchoRequest.__proto__),
    info_: dart.legacy(protobuf.BuilderInfo),
    message: dart.legacy(core.String),
    messageCount: dart.legacy(core.int),
    messageInterval: dart.legacy(core.int)
  }));
  dart.setSetterSignature(echo$46pb.ServerStreamingEchoRequest, () => ({
    __proto__: dart.getSetters(echo$46pb.ServerStreamingEchoRequest.__proto__),
    message: dart.legacy(core.String),
    messageCount: dart.legacy(core.int),
    messageInterval: dart.legacy(core.int)
  }));
  dart.setLibraryUri(echo$46pb.ServerStreamingEchoRequest, L1);
  dart.defineLazy(echo$46pb.ServerStreamingEchoRequest, {
    /*echo$46pb.ServerStreamingEchoRequest._i*/get _i() {
      let t0;
      return t0 = new protobuf.BuilderInfo.new(false ? "" : "ServerStreamingEchoRequest", {package: C2 || CT.C2, createEmptyInstance: C4 || CT.C4}), (() => {
        t0.aOS(1, false ? "" : "message");
        t0.a(intL(), 2, false ? "" : "messageCount", 2048);
        t0.a(intL(), 3, false ? "" : "messageInterval", 2048);
        t0.hasRequiredFields = false;
        return t0;
      })();
    },
    /*echo$46pb.ServerStreamingEchoRequest._defaultInstance*/get _defaultInstance() {
      return null;
    },
    set _defaultInstance(_) {}
  }, true);
  var C5;
  echo$46pb.ServerStreamingEchoResponse = class ServerStreamingEchoResponse extends protobuf.GeneratedMessage {
    static new() {
      return echo$46pb.ServerStreamingEchoResponse.create();
    }
    static fromBuffer(i, r = C0 || CT.C0) {
      let t0;
      t0 = echo$46pb.ServerStreamingEchoResponse.create();
      return (() => {
        t0.mergeFromBuffer(i, r);
        return t0;
      })();
    }
    static fromJson(i, r = C0 || CT.C0) {
      let t0;
      t0 = echo$46pb.ServerStreamingEchoResponse.create();
      return (() => {
        t0.mergeFromJson(i, r);
        return t0;
      })();
    }
    clone() {
      let t0;
      t0 = echo$46pb.ServerStreamingEchoResponse.new();
      return (() => {
        t0.mergeFromMessage(this);
        return t0;
      })();
    }
    copyWith(updates) {
      return ServerStreamingEchoResponseL().as(super.copyWith(dart.fn(message => updates(ServerStreamingEchoResponseL().as(message)), GeneratedMessageLTovoid())));
    }
    get info_() {
      return echo$46pb.ServerStreamingEchoResponse._i;
    }
    static create() {
      return new echo$46pb.ServerStreamingEchoResponse.__();
    }
    createEmptyInstance() {
      return echo$46pb.ServerStreamingEchoResponse.create();
    }
    static createRepeated() {
      return new (PbListOfServerStreamingEchoResponseL()).new();
    }
    static getDefault() {
      let t0;
      t0 = echo$46pb.ServerStreamingEchoResponse._defaultInstance;
      return t0 == null ? echo$46pb.ServerStreamingEchoResponse._defaultInstance = protobuf.GeneratedMessage.$_defaultFor(ServerStreamingEchoResponseL(), C5 || CT.C5) : t0;
    }
    get message() {
      return this.$_getSZ(0);
    }
    set message(v) {
      this.$_setString(0, v);
    }
    hasMessage() {
      return this.$_has(0);
    }
    clearMessage() {
      return this.clearField(1);
    }
  };
  (echo$46pb.ServerStreamingEchoResponse.__ = function() {
    echo$46pb.ServerStreamingEchoResponse.__proto__.new.call(this);
    ;
  }).prototype = echo$46pb.ServerStreamingEchoResponse.prototype;
  dart.addTypeTests(echo$46pb.ServerStreamingEchoResponse);
  dart.addTypeCaches(echo$46pb.ServerStreamingEchoResponse);
  dart.setMethodSignature(echo$46pb.ServerStreamingEchoResponse, () => ({
    __proto__: dart.getMethods(echo$46pb.ServerStreamingEchoResponse.__proto__),
    clone: dart.fnType(dart.legacy(echo$46pb.ServerStreamingEchoResponse), []),
    copyWith: dart.fnType(dart.legacy(echo$46pb.ServerStreamingEchoResponse), [dart.legacy(dart.fnType(dart.void, [dart.legacy(echo$46pb.ServerStreamingEchoResponse)]))]),
    createEmptyInstance: dart.fnType(dart.legacy(echo$46pb.ServerStreamingEchoResponse), []),
    hasMessage: dart.fnType(dart.legacy(core.bool), []),
    clearMessage: dart.fnType(dart.void, [])
  }));
  dart.setGetterSignature(echo$46pb.ServerStreamingEchoResponse, () => ({
    __proto__: dart.getGetters(echo$46pb.ServerStreamingEchoResponse.__proto__),
    info_: dart.legacy(protobuf.BuilderInfo),
    message: dart.legacy(core.String)
  }));
  dart.setSetterSignature(echo$46pb.ServerStreamingEchoResponse, () => ({
    __proto__: dart.getSetters(echo$46pb.ServerStreamingEchoResponse.__proto__),
    message: dart.legacy(core.String)
  }));
  dart.setLibraryUri(echo$46pb.ServerStreamingEchoResponse, L1);
  dart.defineLazy(echo$46pb.ServerStreamingEchoResponse, {
    /*echo$46pb.ServerStreamingEchoResponse._i*/get _i() {
      let t0;
      return t0 = new protobuf.BuilderInfo.new(false ? "" : "ServerStreamingEchoResponse", {package: C2 || CT.C2, createEmptyInstance: C5 || CT.C5}), (() => {
        t0.aOS(1, false ? "" : "message");
        t0.hasRequiredFields = false;
        return t0;
      })();
    },
    /*echo$46pb.ServerStreamingEchoResponse._defaultInstance*/get _defaultInstance() {
      return null;
    },
    set _defaultInstance(_) {}
  }, true);
  var _service$ = dart.privateName(app, "_service");
  var _addLeftMessage = dart.privateName(app, "_addLeftMessage");
  var _addRightMessage = dart.privateName(app, "_addRightMessage");
  var _addMessage = dart.privateName(app, "_addMessage");
  app.EchoApp = class EchoApp extends core.Object {
    echo(message) {
      return async.async(dart.void, (function* echo() {
        let t0;
        this[_addLeftMessage](message);
        try {
          let response = (yield this[_service$].echo((t0 = echo$46pb.EchoRequest.new(), (() => {
            t0.message = message;
            return t0;
          })())));
          this[_addRightMessage](response.message);
        } catch (e) {
          let error = dart.getThrown(e);
          this[_addRightMessage](dart.toString(error));
        }
      }).bind(this));
    }
    repeatEcho(message, count) {
      let t1;
      this[_addLeftMessage](message);
      let request = (t1 = echo$46pb.ServerStreamingEchoRequest.new(), (() => {
        t1.message = message;
        t1.messageCount = count;
        t1.messageInterval = 500;
        return t1;
      })());
      this[_service$].serverStreamingEcho(request).listen(dart.fn(response => {
        this[_addRightMessage](response.message);
      }, ServerStreamingEchoResponseLToNullN()), {onError: dart.fn(error => {
          this[_addRightMessage](dart.toString(error));
        }, dynamicToNullN()), onDone: dart.fn(() => core.print("Closed connection to server."), VoidTovoid())});
    }
    [_addLeftMessage](message) {
      this[_addMessage](message, "label-primary pull-left");
    }
    [_addRightMessage](message) {
      this[_addMessage](message, "label-default pull-right");
    }
    [_addMessage](message, cssClass) {
      let t3, t2, t1;
      let classes = cssClass[$split](" ");
      html.querySelector("#first").after((t1 = html.DivElement.new(), (() => {
        t1[$classes].add("row");
        t1[$append]((t2 = html.Element.tag("h2"), (() => {
          t2[$append]((t3 = html.SpanElement.new(), (() => {
            t3[$classes].add("label");
            t3[$classes].addAll(classes);
            t3[$text] = message;
            return t3;
          })()));
          return t2;
        })()));
        return t1;
      })()));
    }
  };
  (app.EchoApp.new = function(_service) {
    this[_service$] = _service;
    ;
  }).prototype = app.EchoApp.prototype;
  dart.addTypeTests(app.EchoApp);
  dart.addTypeCaches(app.EchoApp);
  dart.setMethodSignature(app.EchoApp, () => ({
    __proto__: dart.getMethods(app.EchoApp.__proto__),
    echo: dart.fnType(dart.legacy(async.Future$(dart.void)), [dart.legacy(core.String)]),
    repeatEcho: dart.fnType(dart.void, [dart.legacy(core.String), dart.legacy(core.int)]),
    [_addLeftMessage]: dart.fnType(dart.void, [dart.legacy(core.String)]),
    [_addRightMessage]: dart.fnType(dart.void, [dart.legacy(core.String)]),
    [_addMessage]: dart.fnType(dart.void, [dart.legacy(core.String), dart.legacy(core.String)])
  }));
  dart.setLibraryUri(app.EchoApp, L2);
  dart.setFieldSignature(app.EchoApp, () => ({
    __proto__: dart.getFields(app.EchoApp.__proto__),
    [_service$]: dart.finalFieldType(dart.legacy(echo$46pbgrpc.EchoServiceClient))
  }));
  dart.trackLibraries("packages/grpc_web/app", {
    "package:grpc_web/src/generated/echo.pbgrpc.dart": echo$46pbgrpc,
    "package:grpc_web/src/generated/echo.pb.dart": echo$46pb,
    "package:grpc_web/app.dart": app
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["src/generated/echo.pbgrpc.dart","src/generated/echo.pb.dart","app.dart"],"names":[],"mappings":"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","file":"app.unsound.ddc.js"}');
  // Exports:
  return {
    src__generated__echo$46pbgrpc: echo$46pbgrpc,
    src__generated__echo$46pb: echo$46pb,
    app: app
  };
}));

//# sourceMappingURL=app.unsound.ddc.js.map

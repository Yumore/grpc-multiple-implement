define(['dart_sdk', 'packages/grpc/src/client/call'], (function load__packages__grpc__src__client__client(dart_sdk, packages__grpc__src__client__call) {
  'use strict';
  const core = dart_sdk.core;
  const async = dart_sdk.async;
  const _js_helper = dart_sdk._js_helper;
  const _internal = dart_sdk._internal;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const status = packages__grpc__src__client__call.src__shared__status;
  const call = packages__grpc__src__client__call.src__client__call;
  const common = packages__grpc__src__client__call.src__client__common;
  const method$ = packages__grpc__src__client__call.src__client__method;
  const channel = packages__grpc__src__client__call.src__client__channel;
  var call$ = Object.create(dart.library);
  var service = Object.create(dart.library);
  var client = Object.create(dart.library);
  var interceptor = Object.create(dart.library);
  var $_set = dartx._set;
  var $_get = dartx._get;
  var $reversed = dartx.reversed;
  var dynamicToNullN = () => (dynamicToNullN = dart.constFn(dart.fnType(core.Null, [dart.dynamic])))();
  var StringL = () => (StringL = dart.constFn(dart.legacy(core.String)))();
  var ServiceMethodL = () => (ServiceMethodL = dart.constFn(dart.legacy(service.ServiceMethod)))();
  var IdentityMapOfStringL$ServiceMethodL = () => (IdentityMapOfStringL$ServiceMethodL = dart.constFn(_js_helper.IdentityMap$(StringL(), ServiceMethodL())))();
  var ClientInterceptorL = () => (ClientInterceptorL = dart.constFn(dart.legacy(interceptor.ClientInterceptor)))();
  var ListOfClientInterceptorL = () => (ListOfClientInterceptorL = dart.constFn(core.List$(ClientInterceptorL())))();
  var ClientMethodL = () => (ClientMethodL = dart.constFn(dart.legacy(method$.ClientMethod)))();
  var CallOptionsL = () => (CallOptionsL = dart.constFn(dart.legacy(call.CallOptions)))();
  const CT = Object.create(null);
  var L0 = "package:grpc/src/server/call.dart";
  var L2 = "package:grpc/src/client/client.dart";
  var L3 = "package:grpc/src/client/interceptor.dart";
  var L1 = "package:grpc/src/server/service.dart";
  call$.ServiceCall = class ServiceCall extends core.Object {};
  (call$.ServiceCall.new = function() {
    ;
  }).prototype = call$.ServiceCall.prototype;
  dart.addTypeTests(call$.ServiceCall);
  dart.addTypeCaches(call$.ServiceCall);
  dart.setLibraryUri(call$.ServiceCall, L0);
  var _toSingleFuture = dart.privateName(service, "_toSingleFuture");
  const _is_ServiceMethod_default = Symbol('_is_ServiceMethod_default');
  var name$ = dart.privateName(service, "ServiceMethod.name");
  var streamingRequest$ = dart.privateName(service, "ServiceMethod.streamingRequest");
  var streamingResponse$ = dart.privateName(service, "ServiceMethod.streamingResponse");
  var requestDeserializer$ = dart.privateName(service, "ServiceMethod.requestDeserializer");
  var responseSerializer$ = dart.privateName(service, "ServiceMethod.responseSerializer");
  var handler$ = dart.privateName(service, "ServiceMethod.handler");
  service.ServiceMethod$ = dart.generic((Q, R) => {
    var QL = () => (QL = dart.constFn(dart.legacy(Q)))();
    var StreamControllerOfQL = () => (StreamControllerOfQL = dart.constFn(async.StreamController$(QL())))();
    var StreamOfQL = () => (StreamOfQL = dart.constFn(async.Stream$(QL())))();
    var StreamLOfQL = () => (StreamLOfQL = dart.constFn(dart.legacy(StreamOfQL())))();
    var QLAndQLToQL = () => (QLAndQLToQL = dart.constFn(dart.fnType(QL(), [QL(), QL()])))();
    var QLToQL = () => (QLToQL = dart.constFn(dart.fnType(QL(), [QL()])))();
    var RL = () => (RL = dart.constFn(dart.legacy(R)))();
    var StreamOfRL = () => (StreamOfRL = dart.constFn(async.Stream$(RL())))();
    var StreamLOfRL = () => (StreamLOfRL = dart.constFn(dart.legacy(StreamOfRL())))();
    var FutureOfRL = () => (FutureOfRL = dart.constFn(async.Future$(RL())))();
    var FutureLOfRL = () => (FutureLOfRL = dart.constFn(dart.legacy(FutureOfRL())))();
    class ServiceMethod extends core.Object {
      get name() {
        return this[name$];
      }
      set name(value) {
        super.name = value;
      }
      get streamingRequest() {
        return this[streamingRequest$];
      }
      set streamingRequest(value) {
        super.streamingRequest = value;
      }
      get streamingResponse() {
        return this[streamingResponse$];
      }
      set streamingResponse(value) {
        super.streamingResponse = value;
      }
      get requestDeserializer() {
        return this[requestDeserializer$];
      }
      set requestDeserializer(value) {
        super.requestDeserializer = value;
      }
      get responseSerializer() {
        return this[responseSerializer$];
      }
      set responseSerializer(value) {
        super.responseSerializer = value;
      }
      get handler() {
        return this[handler$];
      }
      set handler(value) {
        super.handler = value;
      }
      createRequestStream(incoming) {
        return StreamControllerOfQL().new({onListen: dart.bind(incoming, 'resume'), onPause: dart.bind(incoming, 'pause'), onResume: dart.bind(incoming, 'resume')});
      }
      deserialize(data) {
        let t0;
        t0 = data;
        return this.requestDeserializer(t0);
      }
      serialize(response) {
        let t0;
        t0 = RL().as(response);
        return this.responseSerializer(t0);
      }
      handle(call, requests) {
        let t1, t0, t1$, t0$, t1$0, t0$0, t1$1, t0$1;
        StreamLOfQL().as(requests);
        if (dart.test(this.streamingResponse)) {
          if (dart.test(this.streamingRequest)) {
            return StreamLOfRL().as((t0 = call, t1 = requests, dart.dsend(this, 'handler', [t0, t1])));
          } else {
            return StreamLOfRL().as((t0$ = call, t1$ = this[_toSingleFuture](requests), dart.dsend(this, 'handler', [t0$, t1$])));
          }
        } else {
          let response = null;
          if (dart.test(this.streamingRequest)) {
            response = FutureLOfRL().as((t0$0 = call, t1$0 = requests, dart.dsend(this, 'handler', [t0$0, t1$0])));
          } else {
            response = FutureLOfRL().as((t0$1 = call, t1$1 = this[_toSingleFuture](requests), dart.dsend(this, 'handler', [t0$1, t1$1])));
          }
          return response.asStream();
        }
      }
      [_toSingleFuture](stream) {
        function _ensureOnlyOneRequest(previous, element) {
          if (previous != null) {
            dart.throw(new status.GrpcError.unimplemented("More than one request received"));
          }
          return element;
        }
        dart.fn(_ensureOnlyOneRequest, QLAndQLToQL());
        function _ensureOneRequest(value) {
          if (value == null) dart.throw(new status.GrpcError.unimplemented("No requests received"));
          return value;
        }
        dart.fn(_ensureOneRequest, QLToQL());
        let future = stream.fold(QL(), null, _ensureOnlyOneRequest).then(QL(), _ensureOneRequest);
        future.catchError(dart.fn(_ => {
        }, dynamicToNullN()));
        return future;
      }
    }
    (ServiceMethod.new = function(name, handler, streamingRequest, streamingResponse, requestDeserializer, responseSerializer) {
      this[name$] = name;
      this[handler$] = handler;
      this[streamingRequest$] = streamingRequest;
      this[streamingResponse$] = streamingResponse;
      this[requestDeserializer$] = requestDeserializer;
      this[responseSerializer$] = responseSerializer;
      ;
    }).prototype = ServiceMethod.prototype;
    dart.addTypeTests(ServiceMethod);
    ServiceMethod.prototype[_is_ServiceMethod_default] = true;
    dart.addTypeCaches(ServiceMethod);
    dart.setMethodSignature(ServiceMethod, () => ({
      __proto__: dart.getMethods(ServiceMethod.__proto__),
      createRequestStream: dart.fnType(dart.legacy(async.StreamController$(dart.legacy(Q))), [dart.legacy(async.StreamSubscription)]),
      deserialize: dart.fnType(dart.legacy(Q), [dart.legacy(core.List$(dart.legacy(core.int)))]),
      serialize: dart.fnType(dart.legacy(core.List$(dart.legacy(core.int))), [dart.dynamic]),
      handle: dart.fnType(dart.legacy(async.Stream$(dart.legacy(R))), [dart.legacy(call$.ServiceCall), dart.legacy(core.Object)]),
      [_toSingleFuture]: dart.fnType(dart.legacy(async.Future$(dart.legacy(Q))), [dart.legacy(async.Stream$(dart.legacy(Q)))])
    }));
    dart.setLibraryUri(ServiceMethod, L1);
    dart.setFieldSignature(ServiceMethod, () => ({
      __proto__: dart.getFields(ServiceMethod.__proto__),
      name: dart.finalFieldType(dart.legacy(core.String)),
      streamingRequest: dart.finalFieldType(dart.legacy(core.bool)),
      streamingResponse: dart.finalFieldType(dart.legacy(core.bool)),
      requestDeserializer: dart.finalFieldType(dart.legacy(dart.fnType(dart.legacy(Q), [dart.legacy(core.List$(dart.legacy(core.int)))]))),
      responseSerializer: dart.finalFieldType(dart.legacy(dart.fnType(dart.legacy(core.List$(dart.legacy(core.int))), [dart.legacy(R)]))),
      handler: dart.finalFieldType(dart.legacy(core.Function))
    }));
    return ServiceMethod;
  });
  service.ServiceMethod = service.ServiceMethod$();
  dart.addTypeTests(service.ServiceMethod, _is_ServiceMethod_default);
  var _$methods = dart.privateName(service, "_$methods");
  service.Service = class Service extends core.Object {
    $addMethod(method) {
      this[_$methods][$_set](method.name, method);
    }
    $onMetadata(context) {
    }
    $lookupMethod(name) {
      return this[_$methods][$_get](name);
    }
  };
  (service.Service.new = function() {
    this[_$methods] = new (IdentityMapOfStringL$ServiceMethodL()).new();
    ;
  }).prototype = service.Service.prototype;
  dart.addTypeTests(service.Service);
  dart.addTypeCaches(service.Service);
  dart.setMethodSignature(service.Service, () => ({
    __proto__: dart.getMethods(service.Service.__proto__),
    $addMethod: dart.fnType(dart.void, [dart.legacy(service.ServiceMethod)]),
    $onMetadata: dart.fnType(dart.void, [dart.legacy(call$.ServiceCall)]),
    $lookupMethod: dart.fnType(dart.legacy(service.ServiceMethod), [dart.legacy(core.String)])
  }));
  dart.setLibraryUri(service.Service, L1);
  dart.setFieldSignature(service.Service, () => ({
    __proto__: dart.getFields(service.Service.__proto__),
    [_$methods]: dart.finalFieldType(dart.legacy(core.Map$(dart.legacy(core.String), dart.legacy(service.ServiceMethod))))
  }));
  var _channel$ = dart.privateName(client, "_channel");
  var _options = dart.privateName(client, "_options");
  var _interceptors = dart.privateName(client, "_interceptors");
  client.Client = class Client extends core.Object {
    $createCall(Q, R, method, requests, opts) {
      let options = opts && 'options' in opts ? opts.options : null;
      return this[_channel$].createCall(dart.legacy(Q), dart.legacy(R), method, requests, this[_options].mergedWith(options));
    }
    $createUnaryCall(Q, R, method, request, opts) {
      let options = opts && 'options' in opts ? opts.options : null;
      let invoker = dart.fn((method, request, options) => new (common.ResponseFuture$(dart.legacy(R))).new(this[_channel$].createCall(dart.legacy(Q), dart.legacy(R), dart.legacy(method$.ClientMethod$(dart.legacy(Q), dart.legacy(R))).as(method), async.Stream$(dart.legacy(Q)).value(request), options)), dart.fnType(dart.legacy(common.ResponseFuture$(dart.legacy(R))), [ClientMethodL(), dart.legacy(Q), CallOptionsL()]));
      for (let interceptor of this[_interceptors][$reversed]) {
        let delegate = invoker;
        invoker = dart.fn((method, request, options) => interceptor.interceptUnary(dart.legacy(Q), dart.legacy(R), dart.legacy(method$.ClientMethod$(dart.legacy(Q), dart.legacy(R))).as(method), request, options, delegate), dart.fnType(dart.legacy(common.ResponseFuture$(dart.legacy(R))), [ClientMethodL(), dart.legacy(Q), CallOptionsL()]));
      }
      return invoker(method, request, this[_options].mergedWith(options));
    }
    $createStreamingCall(Q, R, method, requests, opts) {
      let options = opts && 'options' in opts ? opts.options : null;
      let invoker = dart.fn((method, request, options) => new (common.ResponseStream$(dart.legacy(R))).new(this[_channel$].createCall(dart.legacy(Q), dart.legacy(R), dart.legacy(method$.ClientMethod$(dart.legacy(Q), dart.legacy(R))).as(method), requests, options)), dart.fnType(dart.legacy(common.ResponseStream$(dart.legacy(R))), [ClientMethodL(), dart.legacy(async.Stream$(dart.legacy(Q))), CallOptionsL()]));
      for (let interceptor of this[_interceptors][$reversed]) {
        let delegate = invoker;
        invoker = dart.fn((method, requests, options) => interceptor.interceptStreaming(dart.legacy(Q), dart.legacy(R), dart.legacy(method$.ClientMethod$(dart.legacy(Q), dart.legacy(R))).as(method), requests, options, delegate), dart.fnType(dart.legacy(common.ResponseStream$(dart.legacy(R))), [ClientMethodL(), dart.legacy(async.Stream$(dart.legacy(Q))), CallOptionsL()]));
      }
      return invoker(method, requests, this[_options].mergedWith(options));
    }
  };
  (client.Client.new = function(_channel, opts) {
    let t0, t0$;
    let options = opts && 'options' in opts ? opts.options : null;
    let interceptors = opts && 'interceptors' in opts ? opts.interceptors : null;
    this[_channel$] = _channel;
    this[_options] = (t0 = options, t0 == null ? call.CallOptions.new() : t0);
    this[_interceptors] = ListOfClientInterceptorL().unmodifiable((t0$ = interceptors, t0$ == null ? new _internal.EmptyIterable.new() : t0$));
    ;
  }).prototype = client.Client.prototype;
  dart.addTypeTests(client.Client);
  dart.addTypeCaches(client.Client);
  dart.setMethodSignature(client.Client, () => ({
    __proto__: dart.getMethods(client.Client.__proto__),
    $createCall: dart.gFnType((Q, R) => [dart.legacy(call.ClientCall$(dart.legacy(Q), dart.legacy(R))), [dart.legacy(method$.ClientMethod$(dart.legacy(Q), dart.legacy(R))), dart.legacy(async.Stream$(dart.legacy(Q)))], {options: dart.legacy(call.CallOptions)}, {}]),
    $createUnaryCall: dart.gFnType((Q, R) => [dart.legacy(common.ResponseFuture$(dart.legacy(R))), [dart.legacy(method$.ClientMethod$(dart.legacy(Q), dart.legacy(R))), dart.legacy(Q)], {options: dart.legacy(call.CallOptions)}, {}]),
    $createStreamingCall: dart.gFnType((Q, R) => [dart.legacy(common.ResponseStream$(dart.legacy(R))), [dart.legacy(method$.ClientMethod$(dart.legacy(Q), dart.legacy(R))), dart.legacy(async.Stream$(dart.legacy(Q)))], {options: dart.legacy(call.CallOptions)}, {}])
  }));
  dart.setLibraryUri(client.Client, L2);
  dart.setFieldSignature(client.Client, () => ({
    __proto__: dart.getFields(client.Client.__proto__),
    [_channel$]: dart.finalFieldType(dart.legacy(channel.ClientChannel)),
    [_options]: dart.finalFieldType(dart.legacy(call.CallOptions)),
    [_interceptors]: dart.finalFieldType(dart.legacy(core.List$(dart.legacy(interceptor.ClientInterceptor))))
  }));
  interceptor.ClientInterceptor = class ClientInterceptor extends core.Object {
    interceptUnary(Q, R, method, request, options, invoker) {
      return invoker(method, request, options);
    }
    interceptStreaming(Q, R, method, requests, options, invoker) {
      return invoker(method, requests, options);
    }
  };
  (interceptor.ClientInterceptor.new = function() {
    ;
  }).prototype = interceptor.ClientInterceptor.prototype;
  dart.addTypeTests(interceptor.ClientInterceptor);
  dart.addTypeCaches(interceptor.ClientInterceptor);
  dart.setMethodSignature(interceptor.ClientInterceptor, () => ({
    __proto__: dart.getMethods(interceptor.ClientInterceptor.__proto__),
    interceptUnary: dart.gFnType((Q, R) => [dart.legacy(common.ResponseFuture$(dart.legacy(R))), [dart.legacy(method$.ClientMethod$(dart.legacy(Q), dart.legacy(R))), dart.legacy(Q), dart.legacy(call.CallOptions), dart.legacy(dart.fnType(dart.legacy(common.ResponseFuture$(dart.legacy(R))), [dart.legacy(method$.ClientMethod), dart.legacy(Q), dart.legacy(call.CallOptions)]))]]),
    interceptStreaming: dart.gFnType((Q, R) => [dart.legacy(common.ResponseStream$(dart.legacy(R))), [dart.legacy(method$.ClientMethod$(dart.legacy(Q), dart.legacy(R))), dart.legacy(async.Stream$(dart.legacy(Q))), dart.legacy(call.CallOptions), dart.legacy(dart.fnType(dart.legacy(common.ResponseStream$(dart.legacy(R))), [dart.legacy(method$.ClientMethod), dart.legacy(async.Stream$(dart.legacy(Q))), dart.legacy(call.CallOptions)]))]])
  }));
  dart.setLibraryUri(interceptor.ClientInterceptor, L3);
  dart.trackLibraries("packages/grpc/src/client/client", {
    "package:grpc/src/server/call.dart": call$,
    "package:grpc/src/server/service.dart": service,
    "package:grpc/src/client/client.dart": client,
    "package:grpc/src/client/interceptor.dart": interceptor
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["../server/call.dart","../server/service.dart","client.dart","interceptor.dart"],"names":[],"mappings":"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","file":"client.unsound.ddc.js"}');
  // Exports:
  return {
    src__server__call: call$,
    src__server__service: service,
    src__client__client: client,
    src__client__interceptor: interceptor
  };
}));

//# sourceMappingURL=client.unsound.ddc.js.map

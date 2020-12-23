define(['dart_sdk', 'packages/grpc/src/client/call'], (function load__packages__grpc__grpc_web(dart_sdk, packages__grpc__src__client__call) {
  'use strict';
  const core = dart_sdk.core;
  const collection = dart_sdk.collection;
  const typed_data = dart_sdk.typed_data;
  const convert = dart_sdk.convert;
  const _native_typed_data = dart_sdk._native_typed_data;
  const math = dart_sdk.math;
  const _js_helper = dart_sdk._js_helper;
  const async = dart_sdk.async;
  const html = dart_sdk.html;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const message = packages__grpc__src__client__call.src__shared__message;
  const status = packages__grpc__src__client__call.src__shared__status;
  const transport = packages__grpc__src__client__call.src__client__transport__transport;
  const call = packages__grpc__src__client__call.src__client__call;
  const connection = packages__grpc__src__client__call.src__client__connection;
  const channel = packages__grpc__src__client__call.src__client__channel;
  var cors = Object.create(dart.library);
  var web_streams = Object.create(dart.library);
  var xhr_transport = Object.create(dart.library);
  var grpc_web = Object.create(dart.library);
  var web_channel = Object.create(dart.library);
  var $isEmpty = dartx.isEmpty;
  var $clear = dartx.clear;
  var $_set = dartx._set;
  var $entries = dartx.entries;
  var $map = dartx.map;
  var $join = dartx.join;
  var $toString = dartx.toString;
  var $_get = dartx._get;
  var $length = dartx.length;
  var $lengthInBytes = dartx.lengthInBytes;
  var $setRange = dartx.setRange;
  var $buffer = dartx.buffer;
  var $asByteData = dartx.asByteData;
  var $getUint32 = dartx.getUint32;
  var $trim = dartx.trim;
  var $split = dartx.split;
  var $asUint8List = dartx.asUint8List;
  var $onReadyStateChange = dartx.onReadyStateChange;
  var $onError = dartx.onError;
  var $onProgress = dartx.onProgress;
  var $response = dartx.response;
  var $codeUnits = dartx.codeUnits;
  var $substring = dartx.substring;
  var $startsWith = dartx.startsWith;
  var $any = dartx.any;
  var $responseHeaders = dartx.responseHeaders;
  var $keys = dartx.keys;
  var $toLowerCase = dartx.toLowerCase;
  var StringL = () => (StringL = dart.constFn(dart.legacy(core.String)))();
  var LinkedHashMapOfStringL$dynamic = () => (LinkedHashMapOfStringL$dynamic = dart.constFn(collection.LinkedHashMap$(StringL(), dart.dynamic)))();
  var MapEntryOfStringL$StringL = () => (MapEntryOfStringL$StringL = dart.constFn(core.MapEntry$(StringL(), StringL())))();
  var MapEntryLOfStringL$StringL = () => (MapEntryLOfStringL$StringL = dart.constFn(dart.legacy(MapEntryOfStringL$StringL())))();
  var MapEntryLOfStringL$StringLToStringL = () => (MapEntryLOfStringL$StringLToStringL = dart.constFn(dart.fnType(StringL(), [MapEntryLOfStringL$StringL()])))();
  var _GrpcWebParseStateL = () => (_GrpcWebParseStateL = dart.constFn(dart.legacy(web_streams._GrpcWebParseState)))();
  var ByteBufferL = () => (ByteBufferL = dart.constFn(dart.legacy(typed_data.ByteBuffer)))();
  var GrpcMessageL = () => (GrpcMessageL = dart.constFn(dart.legacy(message.GrpcMessage)))();
  var SinkOfGrpcMessageL = () => (SinkOfGrpcMessageL = dart.constFn(core.Sink$(GrpcMessageL())))();
  var SinkLOfGrpcMessageL = () => (SinkLOfGrpcMessageL = dart.constFn(dart.legacy(SinkOfGrpcMessageL())))();
  var intL = () => (intL = dart.constFn(dart.legacy(core.int)))();
  var IdentityMapOfStringL$StringL = () => (IdentityMapOfStringL$StringL = dart.constFn(_js_helper.IdentityMap$(StringL(), StringL())))();
  var StreamControllerOfByteBufferL = () => (StreamControllerOfByteBufferL = dart.constFn(async.StreamController$(ByteBufferL())))();
  var StreamControllerOfGrpcMessageL = () => (StreamControllerOfGrpcMessageL = dart.constFn(async.StreamController$(GrpcMessageL())))();
  var ListOfintL = () => (ListOfintL = dart.constFn(core.List$(intL())))();
  var ListLOfintL = () => (ListLOfintL = dart.constFn(dart.legacy(ListOfintL())))();
  var StreamControllerOfListLOfintL = () => (StreamControllerOfListLOfintL = dart.constFn(async.StreamController$(ListLOfintL())))();
  var StackTraceL = () => (StackTraceL = dart.constFn(dart.legacy(core.StackTrace)))();
  var dynamicAndStackTraceLTovoid = () => (dynamicAndStackTraceLTovoid = dart.constFn(dart.fnType(dart.void, [dart.dynamic, StackTraceL()])))();
  var dynamicAndStackTraceLToLvoid = () => (dynamicAndStackTraceLToLvoid = dart.constFn(dart.legacy(dynamicAndStackTraceLTovoid())))();
  var XhrTransportStreamL = () => (XhrTransportStreamL = dart.constFn(dart.legacy(xhr_transport.XhrTransportStream)))();
  var XhrTransportStreamLTodynamic = () => (XhrTransportStreamLTodynamic = dart.constFn(dart.fnType(dart.dynamic, [XhrTransportStreamL()])))();
  var XhrTransportStreamLToLdynamic = () => (XhrTransportStreamLToLdynamic = dart.constFn(dart.legacy(XhrTransportStreamLTodynamic())))();
  var ListLOfintLToListLOfintL = () => (ListLOfintLToListLOfintL = dart.constFn(dart.fnType(ListLOfintL(), [ListLOfintL()])))();
  var ListLOfintLTovoid = () => (ListLOfintLTovoid = dart.constFn(dart.fnType(dart.void, [ListLOfintL()])))();
  var EventL = () => (EventL = dart.constFn(dart.legacy(html.Event)))();
  var EventLToNullN = () => (EventLToNullN = dart.constFn(dart.fnType(core.Null, [EventL()])))();
  var ProgressEventL = () => (ProgressEventL = dart.constFn(dart.legacy(html.ProgressEvent)))();
  var ProgressEventLToNullN = () => (ProgressEventLToNullN = dart.constFn(dart.fnType(core.Null, [ProgressEventL()])))();
  var _HashSetOfXhrTransportStreamL = () => (_HashSetOfXhrTransportStreamL = dart.constFn(collection._HashSet$(XhrTransportStreamL())))();
  var WebCallOptionsL = () => (WebCallOptionsL = dart.constFn(dart.legacy(call.WebCallOptions)))();
  var ListOfXhrTransportStreamL = () => (ListOfXhrTransportStreamL = dart.constFn(core.List$(XhrTransportStreamL())))();
  const CT = Object.create(null);
  var L2 = "package:grpc/src/client/web_channel.dart";
  var L0 = "package:grpc/src/client/transport/web_streams.dart";
  var L1 = "package:grpc/src/client/transport/xhr_transport.dart";
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.const({
        __proto__: web_streams._GrpcWebParseState.prototype,
        [_name$]: "_GrpcWebParseState.Init",
        index: 0
      });
    },
    get C1() {
      return C1 = dart.const({
        __proto__: web_streams._GrpcWebParseState.prototype,
        [_name$]: "_GrpcWebParseState.Length",
        index: 1
      });
    },
    get C2() {
      return C2 = dart.const({
        __proto__: web_streams._GrpcWebParseState.prototype,
        [_name$]: "_GrpcWebParseState.Message",
        index: 2
      });
    },
    get C3() {
      return C3 = dart.constList([C0 || CT.C0, C1 || CT.C1, C2 || CT.C2], _GrpcWebParseStateL());
    },
    get C4() {
      return C4 = dart.fn(message.frame, ListLOfintLToListLOfintL());
    },
    get C5() {
      return C5 = dart.constList(["application/grpc", "application/json+protobuf", "application/x-protobuf"], StringL());
    }
  }, false);
  cors.moveHttpHeadersToQueryParam = function moveHttpHeadersToQueryParam(metadata, requestUri) {
    let t0;
    if (dart.test(metadata[$isEmpty])) {
      return requestUri;
    }
    let paramValue = cors._generateHttpHeadersOverwriteParam(metadata);
    metadata[$clear]();
    return requestUri.replace({queryParameters: (t0 = LinkedHashMapOfStringL$dynamic().of(requestUri.queryParameters), (() => {
        t0[$_set]("$httpHeaders", paramValue);
        return t0;
      })())});
  };
  cors._generateHttpHeadersOverwriteParam = function _generateHttpHeadersOverwriteParam(headers) {
    return headers[$entries][$map](StringL(), dart.fn(e => dart.str(e.key) + ":" + dart.str(e.value) + "\r\n", MapEntryLOfStringL$StringLToStringL()))[$join]();
  };
  dart.defineLazy(cors, {
    /*cors._httpHeadersParamName*/get _httpHeadersParamName() {
      return "$httpHeaders";
    }
  }, true);
  var _name$ = dart.privateName(web_streams, "_name");
  var C0;
  var C1;
  var C2;
  var C3;
  web_streams._GrpcWebParseState = class _GrpcWebParseState extends core.Object {
    toString() {
      return this[_name$];
    }
  };
  (web_streams._GrpcWebParseState.new = function(index, _name) {
    this.index = index;
    this[_name$] = _name;
    ;
  }).prototype = web_streams._GrpcWebParseState.prototype;
  dart.addTypeTests(web_streams._GrpcWebParseState);
  dart.addTypeCaches(web_streams._GrpcWebParseState);
  dart.setMethodSignature(web_streams._GrpcWebParseState, () => ({
    __proto__: dart.getMethods(web_streams._GrpcWebParseState.__proto__),
    toString: dart.fnType(dart.legacy(core.String), []),
    [$toString]: dart.fnType(dart.legacy(core.String), [])
  }));
  dart.setLibraryUri(web_streams._GrpcWebParseState, L0);
  dart.setFieldSignature(web_streams._GrpcWebParseState, () => ({
    __proto__: dart.getFields(web_streams._GrpcWebParseState.__proto__),
    index: dart.finalFieldType(dart.legacy(core.int)),
    [_name$]: dart.finalFieldType(dart.legacy(core.String))
  }));
  dart.defineExtensionMethods(web_streams._GrpcWebParseState, ['toString']);
  web_streams._GrpcWebParseState.Init = C0 || CT.C0;
  web_streams._GrpcWebParseState.Length = C1 || CT.C1;
  web_streams._GrpcWebParseState.Message = C2 || CT.C2;
  web_streams._GrpcWebParseState.values = C3 || CT.C3;
  web_streams.GrpcWebDecoder = class GrpcWebDecoder extends convert.Converter$(dart.legacy(typed_data.ByteBuffer), dart.legacy(message.GrpcMessage)) {
    convert(input) {
      let t0;
      ByteBufferL().as(input);
      let sink = new message.GrpcMessageSink.new();
      t0 = this.startChunkedConversion(sink);
      (() => {
        t0.add(input);
        t0.close();
        return t0;
      })();
      return sink.message;
    }
    startChunkedConversion(sink) {
      SinkLOfGrpcMessageL().as(sink);
      return new web_streams._GrpcWebConversionSink.new(sink);
    }
  };
  (web_streams.GrpcWebDecoder.new = function() {
    web_streams.GrpcWebDecoder.__proto__.new.call(this);
    ;
  }).prototype = web_streams.GrpcWebDecoder.prototype;
  dart.addTypeTests(web_streams.GrpcWebDecoder);
  dart.addTypeCaches(web_streams.GrpcWebDecoder);
  dart.setMethodSignature(web_streams.GrpcWebDecoder, () => ({
    __proto__: dart.getMethods(web_streams.GrpcWebDecoder.__proto__),
    convert: dart.fnType(dart.legacy(message.GrpcMessage), [dart.legacy(core.Object)]),
    startChunkedConversion: dart.fnType(dart.legacy(core.Sink$(dart.legacy(typed_data.ByteBuffer))), [dart.legacy(core.Object)])
  }));
  dart.setLibraryUri(web_streams.GrpcWebDecoder, L0);
  var _dataHeader = dart.privateName(web_streams, "_dataHeader");
  var _state = dart.privateName(web_streams, "_state");
  var _chunkOffset = dart.privateName(web_streams, "_chunkOffset");
  var _frameType = dart.privateName(web_streams, "_frameType");
  var _dataOffset = dart.privateName(web_streams, "_dataOffset");
  var _data = dart.privateName(web_streams, "_data");
  var _out$ = dart.privateName(web_streams, "_out");
  var _parseFrameType = dart.privateName(web_streams, "_parseFrameType");
  var _finishMessage = dart.privateName(web_streams, "_finishMessage");
  var _parseLength = dart.privateName(web_streams, "_parseLength");
  var _parseMessage = dart.privateName(web_streams, "_parseMessage");
  var _parseHttp1Headers = dart.privateName(web_streams, "_parseHttp1Headers");
  web_streams._GrpcWebConversionSink = class _GrpcWebConversionSink extends convert.ChunkedConversionSink$(dart.legacy(typed_data.ByteBuffer)) {
    [_parseFrameType](chunkData) {
      let frameType = chunkData[$_get](this[_chunkOffset]);
      this[_chunkOffset] = dart.notNull(this[_chunkOffset]) + 1;
      if (frameType !== 0 && frameType !== 128) {
        dart.throw(new status.GrpcError.unimplemented("Invalid frame type: " + dart.str(frameType)));
      }
      this[_state] = web_streams._GrpcWebParseState.Length;
      return frameType;
    }
    [_parseLength](chunkData) {
      let chunkLength = chunkData[$length];
      let headerRemaining = dart.notNull(this[_dataHeader][$lengthInBytes]) - dart.notNull(this[_dataOffset]);
      let chunkRemaining = dart.notNull(chunkLength) - dart.notNull(this[_chunkOffset]);
      let toCopy = math.min(intL(), headerRemaining, chunkRemaining);
      this[_dataHeader][$setRange](this[_dataOffset], dart.notNull(this[_dataOffset]) + toCopy, chunkData, this[_chunkOffset]);
      this[_dataOffset] = dart.notNull(this[_dataOffset]) + toCopy;
      this[_chunkOffset] = dart.notNull(this[_chunkOffset]) + toCopy;
      if (this[_dataOffset] == this[_dataHeader][$lengthInBytes]) {
        let dataLength = this[_dataHeader][$buffer][$asByteData]()[$getUint32](0);
        this[_dataOffset] = 0;
        this[_state] = web_streams._GrpcWebParseState.Message;
        this[_data] = _native_typed_data.NativeUint8List.new(dataLength);
        if (dataLength === 0) {
          this[_finishMessage]();
        }
      }
    }
    [_parseMessage](chunkData) {
      let dataRemaining = dart.notNull(this[_data][$lengthInBytes]) - dart.notNull(this[_dataOffset]);
      if (dataRemaining > 0) {
        let chunkRemaining = dart.notNull(chunkData[$length]) - dart.notNull(this[_chunkOffset]);
        let toCopy = math.min(intL(), dataRemaining, chunkRemaining);
        this[_data][$setRange](this[_dataOffset], dart.notNull(this[_dataOffset]) + toCopy, chunkData, this[_chunkOffset]);
        this[_dataOffset] = dart.notNull(this[_dataOffset]) + toCopy;
        this[_chunkOffset] = dart.notNull(this[_chunkOffset]) + toCopy;
      }
      if (this[_dataOffset] == this[_data][$lengthInBytes]) {
        this[_finishMessage]();
      }
    }
    [_finishMessage]() {
      switch (this[_frameType]) {
        case 0:
        {
          this[_out$].add(new message.GrpcData.new(this[_data], {isCompressed: false}));
          break;
        }
        case 128:
        {
          let stringData = core.String.fromCharCodes(this[_data]);
          let headers = this[_parseHttp1Headers](stringData);
          this[_out$].add(new message.GrpcMetadata.new(headers));
          break;
        }
      }
      this[_state] = web_streams._GrpcWebParseState.Init;
      this[_data] = null;
      this[_dataOffset] = 0;
    }
    [_parseHttp1Headers](stringData) {
      let trimmed = stringData[$trim]();
      let chunks = trimmed === "" ? [] : trimmed[$split]("\r\n");
      let headers = new (IdentityMapOfStringL$StringL()).new();
      for (let chunk of chunks) {
        let pos = dart.dsend(chunk, 'indexOf', [":"]);
        headers[$_set](StringL().as(dart.dsend(dart.dsend(chunk, 'substring', [0, pos]), 'trim', [])), StringL().as(dart.dsend(dart.dsend(chunk, 'substring', [dart.dsend(pos, '+', [1])]), 'trim', [])));
      }
      return headers;
    }
    add(chunk) {
      ByteBufferL().as(chunk);
      this[_chunkOffset] = 0;
      let chunkData = chunk[$asUint8List]();
      while (dart.notNull(this[_chunkOffset]) < dart.notNull(chunk[$lengthInBytes])) {
        switch (this[_state]) {
          case C0 || CT.C0:
          {
            this[_frameType] = this[_parseFrameType](chunkData);
            break;
          }
          case C1 || CT.C1:
          {
            this[_parseLength](chunkData);
            break;
          }
          case C2 || CT.C2:
          {
            this[_parseMessage](chunkData);
            break;
          }
        }
      }
      this[_chunkOffset] = 0;
    }
    close() {
      if (this[_data] != null || this[_dataOffset] !== 0) {
        dart.throw(new status.GrpcError.unavailable("Closed in non-idle state"));
      }
      this[_out$].close();
    }
  };
  (web_streams._GrpcWebConversionSink.new = function(_out) {
    this[_dataHeader] = _native_typed_data.NativeUint8List.new(4);
    this[_state] = web_streams._GrpcWebParseState.Init;
    this[_chunkOffset] = null;
    this[_frameType] = null;
    this[_dataOffset] = 0;
    this[_data] = null;
    this[_out$] = _out;
    web_streams._GrpcWebConversionSink.__proto__.new.call(this);
    ;
  }).prototype = web_streams._GrpcWebConversionSink.prototype;
  dart.addTypeTests(web_streams._GrpcWebConversionSink);
  dart.addTypeCaches(web_streams._GrpcWebConversionSink);
  dart.setMethodSignature(web_streams._GrpcWebConversionSink, () => ({
    __proto__: dart.getMethods(web_streams._GrpcWebConversionSink.__proto__),
    [_parseFrameType]: dart.fnType(dart.legacy(core.int), [dart.legacy(core.List$(dart.legacy(core.int)))]),
    [_parseLength]: dart.fnType(dart.void, [dart.legacy(core.List$(dart.legacy(core.int)))]),
    [_parseMessage]: dart.fnType(dart.void, [dart.legacy(core.List$(dart.legacy(core.int)))]),
    [_finishMessage]: dart.fnType(dart.void, []),
    [_parseHttp1Headers]: dart.fnType(dart.legacy(core.Map$(dart.legacy(core.String), dart.legacy(core.String))), [dart.legacy(core.String)]),
    add: dart.fnType(dart.void, [dart.legacy(core.Object)]),
    close: dart.fnType(dart.void, [])
  }));
  dart.setLibraryUri(web_streams._GrpcWebConversionSink, L0);
  dart.setFieldSignature(web_streams._GrpcWebConversionSink, () => ({
    __proto__: dart.getFields(web_streams._GrpcWebConversionSink.__proto__),
    [_out$]: dart.finalFieldType(dart.legacy(core.Sink$(dart.legacy(message.GrpcMessage)))),
    [_dataHeader]: dart.finalFieldType(dart.legacy(typed_data.Uint8List)),
    [_state]: dart.fieldType(dart.legacy(web_streams._GrpcWebParseState)),
    [_chunkOffset]: dart.fieldType(dart.legacy(core.int)),
    [_frameType]: dart.fieldType(dart.legacy(core.int)),
    [_dataOffset]: dart.fieldType(dart.legacy(core.int)),
    [_data]: dart.fieldType(dart.legacy(typed_data.Uint8List))
  }));
  dart.defineLazy(web_streams._GrpcWebConversionSink, {
    /*web_streams._GrpcWebConversionSink.frameTypeData*/get frameTypeData() {
      return 0;
    },
    /*web_streams._GrpcWebConversionSink.frameTypeTrailers*/get frameTypeTrailers() {
      return 128;
    }
  }, true);
  var _requestBytesRead = dart.privateName(xhr_transport, "_requestBytesRead");
  var _incomingProcessor = dart.privateName(xhr_transport, "_incomingProcessor");
  var _incomingMessages = dart.privateName(xhr_transport, "_incomingMessages");
  var _outgoingMessages = dart.privateName(xhr_transport, "_outgoingMessages");
  var _request$ = dart.privateName(xhr_transport, "_request");
  var _onError = dart.privateName(xhr_transport, "_onError");
  var _onDone = dart.privateName(xhr_transport, "_onDone");
  var C4;
  var _onHeadersReceived = dart.privateName(xhr_transport, "_onHeadersReceived");
  var _close = dart.privateName(xhr_transport, "_close");
  var _checkContentType = dart.privateName(xhr_transport, "_checkContentType");
  xhr_transport.XhrTransportStream = class XhrTransportStream extends core.Object {
    get incomingMessages() {
      return this[_incomingMessages].stream;
    }
    get outgoingMessages() {
      return this[_outgoingMessages].sink;
    }
    [_checkContentType](contentType) {
      return xhr_transport._validContentTypePrefix[$any](dart.bind(contentType, $startsWith));
    }
    [_onHeadersReceived]() {
      let t1, t0, t1$, t0$, t1$0, t0$0, t1$1, t0$1;
      let contentType = this[_request$].getResponseHeader("Content-Type");
      if (this[_request$].status !== 200) {
        t0 = new status.GrpcError.unavailable("XhrConnection status " + dart.str(this[_request$].status));
        t1 = core.StackTrace.current;
        this[_onError](t0, t1);
        return;
      }
      if (contentType == null) {
        t0$ = new status.GrpcError.unavailable("XhrConnection missing Content-Type");
        t1$ = core.StackTrace.current;
        this[_onError](t0$, t1$);
        return;
      }
      if (!dart.test(this[_checkContentType](contentType))) {
        t0$0 = new status.GrpcError.unavailable("XhrConnection bad Content-Type " + dart.str(contentType));
        t1$0 = core.StackTrace.current;
        this[_onError](t0$0, t1$0);
        return;
      }
      if (this[_request$][$response] == null) {
        t0$1 = new status.GrpcError.unavailable("XhrConnection request null response");
        t1$1 = core.StackTrace.current;
        this[_onError](t0$1, t1$1);
        return;
      }
      let headers = new message.GrpcMetadata.new(this[_request$][$responseHeaders]);
      this[_incomingMessages].add(headers);
    }
    [_close]() {
      this[_incomingProcessor].close();
      this[_outgoingMessages].close();
      this[_onDone](this);
    }
    terminate() {
      return async.async(dart.void, (function* terminate() {
        this[_close]();
        this[_request$].abort();
      }).bind(this));
    }
  };
  (xhr_transport.XhrTransportStream.new = function(_request, opts) {
    let onError = opts && 'onError' in opts ? opts.onError : null;
    let onDone = opts && 'onDone' in opts ? opts.onDone : null;
    this[_requestBytesRead] = 0;
    this[_incomingProcessor] = StreamControllerOfByteBufferL().new();
    this[_incomingMessages] = StreamControllerOfGrpcMessageL().new();
    this[_outgoingMessages] = StreamControllerOfListLOfintL().new();
    this[_request$] = _request;
    this[_onError] = dynamicAndStackTraceLToLvoid().as(onError);
    this[_onDone] = XhrTransportStreamLToLdynamic().as(onDone);
    this[_outgoingMessages].stream.map(ListLOfintL(), C4 || CT.C4).listen(dart.fn(data => this[_request$].send(data), ListLOfintLTovoid()), {cancelOnError: true});
    this[_request$][$onReadyStateChange].listen(dart.fn(data => {
      let t1, t0;
      if (dart.test(this[_incomingMessages].isClosed)) {
        return;
      }
      switch (this[_request$].readyState) {
        case 2:
        {
          this[_onHeadersReceived]();
          break;
        }
        case 4:
        {
          if (this[_request$].status !== 200) {
            t0 = new status.GrpcError.unavailable("XhrConnection status " + dart.str(this[_request$].status));
            t1 = core.StackTrace.current;
            this[_onError](t0, t1);
          } else {
            this[_close]();
          }
          break;
        }
      }
    }, EventLToNullN()));
    this[_request$][$onError].listen(dart.fn(event => {
      let t1, t0;
      if (dart.test(this[_incomingMessages].isClosed)) {
        return;
      }
      t0 = new status.GrpcError.unavailable("XhrConnection connection-error");
      t1 = core.StackTrace.current;
      this[_onError](t0, t1);
      this.terminate();
    }, ProgressEventLToNullN()));
    this[_request$][$onProgress].listen(dart.fn(_ => {
      if (dart.test(this[_incomingMessages].isClosed)) {
        return;
      }
      let responseString = StringL().as(this[_request$][$response]);
      let bytes = _native_typed_data.NativeUint8List.fromList(responseString[$substring](this[_requestBytesRead])[$codeUnits])[$buffer];
      this[_requestBytesRead] = responseString.length;
      this[_incomingProcessor].add(bytes);
    }, ProgressEventLToNullN()));
    this[_incomingProcessor].stream.transform(GrpcMessageL(), new web_streams.GrpcWebDecoder.new()).transform(GrpcMessageL(), message.grpcDecompressor()).listen(dart.bind(this[_incomingMessages], 'add'), {onError: this[_onError], onDone: dart.bind(this[_incomingMessages], 'close')});
  }).prototype = xhr_transport.XhrTransportStream.prototype;
  dart.addTypeTests(xhr_transport.XhrTransportStream);
  dart.addTypeCaches(xhr_transport.XhrTransportStream);
  xhr_transport.XhrTransportStream[dart.implements] = () => [transport.GrpcTransportStream];
  dart.setMethodSignature(xhr_transport.XhrTransportStream, () => ({
    __proto__: dart.getMethods(xhr_transport.XhrTransportStream.__proto__),
    [_checkContentType]: dart.fnType(dart.legacy(core.bool), [dart.legacy(core.String)]),
    [_onHeadersReceived]: dart.fnType(dart.dynamic, []),
    [_close]: dart.fnType(dart.dynamic, []),
    terminate: dart.fnType(dart.legacy(async.Future$(dart.void)), [])
  }));
  dart.setGetterSignature(xhr_transport.XhrTransportStream, () => ({
    __proto__: dart.getGetters(xhr_transport.XhrTransportStream.__proto__),
    incomingMessages: dart.legacy(async.Stream$(dart.legacy(message.GrpcMessage))),
    outgoingMessages: dart.legacy(async.StreamSink$(dart.legacy(core.List$(dart.legacy(core.int)))))
  }));
  dart.setLibraryUri(xhr_transport.XhrTransportStream, L1);
  dart.setFieldSignature(xhr_transport.XhrTransportStream, () => ({
    __proto__: dart.getFields(xhr_transport.XhrTransportStream.__proto__),
    [_request$]: dart.finalFieldType(dart.legacy(html.HttpRequest)),
    [_onError]: dart.finalFieldType(dart.legacy(dart.fnType(dart.void, [dart.dynamic, dart.legacy(core.StackTrace)]))),
    [_onDone]: dart.finalFieldType(dart.legacy(dart.fnType(dart.dynamic, [dart.legacy(xhr_transport.XhrTransportStream)]))),
    [_requestBytesRead]: dart.fieldType(dart.legacy(core.int)),
    [_incomingProcessor]: dart.finalFieldType(dart.legacy(async.StreamController$(dart.legacy(typed_data.ByteBuffer)))),
    [_incomingMessages]: dart.finalFieldType(dart.legacy(async.StreamController$(dart.legacy(message.GrpcMessage)))),
    [_outgoingMessages]: dart.finalFieldType(dart.legacy(async.StreamController$(dart.legacy(core.List$(dart.legacy(core.int))))))
  }));
  var _requests = dart.privateName(xhr_transport, "_requests");
  var _initializeRequest = dart.privateName(xhr_transport, "_initializeRequest");
  var _removeStream = dart.privateName(xhr_transport, "_removeStream");
  var uri$ = dart.privateName(xhr_transport, "XhrClientConnection.uri");
  xhr_transport.XhrClientConnection = class XhrClientConnection extends connection.ClientConnection {
    get uri() {
      return this[uri$];
    }
    set uri(value) {
      super.uri = value;
    }
    get authority() {
      return this.uri.authority;
    }
    get scheme() {
      return this.uri.scheme;
    }
    [_initializeRequest](request, metadata) {
      for (let header of metadata[$keys]) {
        request.setRequestHeader(header, metadata[$_get](header));
      }
      request.overrideMimeType("text/plain; charset=x-user-defined");
      request.responseType = "text";
    }
    createHttpRequest() {
      return html.HttpRequest.new();
    }
    makeRequest(path, timeout, metadata, onError, opts) {
      let callOptions = opts && 'callOptions' in opts ? opts.callOptions : null;
      if (xhr_transport._getContentTypeHeader(metadata) == null) {
        metadata[$_set]("Content-Type", "application/grpc-web+proto");
        metadata[$_set]("X-User-Agent", "grpc-web-dart/0.1");
        metadata[$_set]("X-Grpc-Web", "1");
      }
      let requestUri = this.uri.resolve(path);
      if (WebCallOptionsL().is(callOptions) && dart.equals(callOptions.bypassCorsPreflight, true)) {
        requestUri = cors.moveHttpHeadersToQueryParam(metadata, requestUri);
      }
      let request = this.createHttpRequest();
      request.open("POST", dart.toString(requestUri));
      if (WebCallOptionsL().is(callOptions) && dart.equals(callOptions.withCredentials, true)) {
        request.withCredentials = true;
      }
      this[_initializeRequest](request, metadata);
      let transportStream = new xhr_transport.XhrTransportStream.new(request, {onError: onError, onDone: dart.bind(this, _removeStream)});
      this[_requests].add(transportStream);
      return transportStream;
    }
    [_removeStream](stream) {
      this[_requests].remove(stream);
    }
    terminate() {
      return async.async(dart.void, (function* terminate() {
        for (let request of ListOfXhrTransportStreamL().of(this[_requests])) {
          request.terminate();
        }
      }).bind(this));
    }
    dispatchCall(call) {
      call.onConnectionReady(this);
    }
    shutdown() {
      return async.async(dart.void, function* shutdown() {
      });
    }
  };
  (xhr_transport.XhrClientConnection.new = function(uri) {
    this[_requests] = new (_HashSetOfXhrTransportStreamL()).new();
    this[uri$] = uri;
    ;
  }).prototype = xhr_transport.XhrClientConnection.prototype;
  dart.addTypeTests(xhr_transport.XhrClientConnection);
  dart.addTypeCaches(xhr_transport.XhrClientConnection);
  dart.setMethodSignature(xhr_transport.XhrClientConnection, () => ({
    __proto__: dart.getMethods(xhr_transport.XhrClientConnection.__proto__),
    [_initializeRequest]: dart.fnType(dart.void, [dart.legacy(html.HttpRequest), dart.legacy(core.Map$(dart.legacy(core.String), dart.legacy(core.String)))]),
    createHttpRequest: dart.fnType(dart.legacy(html.HttpRequest), []),
    makeRequest: dart.fnType(dart.legacy(transport.GrpcTransportStream), [dart.legacy(core.String), dart.legacy(core.Duration), dart.legacy(core.Map$(dart.legacy(core.String), dart.legacy(core.String))), dart.legacy(dart.fnType(dart.void, [dart.dynamic, dart.legacy(core.StackTrace)]))], {callOptions: dart.legacy(call.CallOptions)}, {}),
    [_removeStream]: dart.fnType(dart.void, [dart.legacy(xhr_transport.XhrTransportStream)]),
    terminate: dart.fnType(dart.legacy(async.Future$(dart.void)), []),
    dispatchCall: dart.fnType(dart.void, [dart.legacy(call.ClientCall)]),
    shutdown: dart.fnType(dart.legacy(async.Future$(dart.void)), [])
  }));
  dart.setGetterSignature(xhr_transport.XhrClientConnection, () => ({
    __proto__: dart.getGetters(xhr_transport.XhrClientConnection.__proto__),
    authority: dart.legacy(core.String),
    scheme: dart.legacy(core.String)
  }));
  dart.setLibraryUri(xhr_transport.XhrClientConnection, L1);
  dart.setFieldSignature(xhr_transport.XhrClientConnection, () => ({
    __proto__: dart.getFields(xhr_transport.XhrClientConnection.__proto__),
    uri: dart.finalFieldType(dart.legacy(core.Uri)),
    [_requests]: dart.finalFieldType(dart.legacy(core.Set$(dart.legacy(xhr_transport.XhrTransportStream))))
  }));
  xhr_transport._getContentTypeHeader = function _getContentTypeHeader(metadata) {
    for (let entry of metadata[$entries]) {
      if (entry.key[$toLowerCase]() === "Content-Type"[$toLowerCase]()) {
        return entry;
      }
    }
    return null;
  };
  var C5;
  dart.defineLazy(xhr_transport, {
    /*xhr_transport._contentTypeKey*/get _contentTypeKey() {
      return "Content-Type";
    },
    /*xhr_transport._validContentTypePrefix*/get _validContentTypePrefix() {
      return C5 || CT.C5;
    }
  }, true);
  var uri$0 = dart.privateName(web_channel, "GrpcWebClientChannel.uri");
  web_channel.GrpcWebClientChannel = class GrpcWebClientChannel extends channel.ClientChannelBase {
    get uri() {
      return this[uri$0];
    }
    set uri(value) {
      super.uri = value;
    }
    createConnection() {
      return new xhr_transport.XhrClientConnection.new(this.uri);
    }
  };
  (web_channel.GrpcWebClientChannel.xhr = function(uri) {
    this[uri$0] = uri;
    web_channel.GrpcWebClientChannel.__proto__.new.call(this);
    ;
  }).prototype = web_channel.GrpcWebClientChannel.prototype;
  dart.addTypeTests(web_channel.GrpcWebClientChannel);
  dart.addTypeCaches(web_channel.GrpcWebClientChannel);
  dart.setMethodSignature(web_channel.GrpcWebClientChannel, () => ({
    __proto__: dart.getMethods(web_channel.GrpcWebClientChannel.__proto__),
    createConnection: dart.fnType(dart.legacy(connection.ClientConnection), [])
  }));
  dart.setLibraryUri(web_channel.GrpcWebClientChannel, L2);
  dart.setFieldSignature(web_channel.GrpcWebClientChannel, () => ({
    __proto__: dart.getFields(web_channel.GrpcWebClientChannel.__proto__),
    uri: dart.finalFieldType(dart.legacy(core.Uri))
  }));
  dart.trackLibraries("packages/grpc/grpc_web", {
    "package:grpc/src/client/transport/cors.dart": cors,
    "package:grpc/src/client/transport/web_streams.dart": web_streams,
    "package:grpc/src/client/transport/xhr_transport.dart": xhr_transport,
    "package:grpc/grpc_web.dart": grpc_web,
    "package:grpc/src/client/web_channel.dart": web_channel
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["src/client/transport/cors.dart","src/client/transport/web_streams.dart","src/client/transport/xhr_transport.dart","src/client/web_channel.dart"],"names":[],"mappings":"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","file":"grpc_web.unsound.ddc.js"}');
  // Exports:
  return {
    src__client__transport__cors: cors,
    src__client__transport__web_streams: web_streams,
    src__client__transport__xhr_transport: xhr_transport,
    grpc_web: grpc_web,
    src__client__web_channel: web_channel
  };
}));

//# sourceMappingURL=grpc_web.unsound.ddc.js.map

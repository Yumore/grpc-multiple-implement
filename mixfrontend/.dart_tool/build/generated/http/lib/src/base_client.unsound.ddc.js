define(['dart_sdk', 'packages/http_parser/http_parser', 'packages/pedantic/pedantic'], (function load__packages__http__src__base_client(dart_sdk, packages__http_parser__http_parser, packages__pedantic__pedantic) {
  'use strict';
  const core = dart_sdk.core;
  const convert = dart_sdk.convert;
  const _native_typed_data = dart_sdk._native_typed_data;
  const _js_helper = dart_sdk._js_helper;
  const collection = dart_sdk.collection;
  const async = dart_sdk.async;
  const typed_data = dart_sdk.typed_data;
  const _interceptors = dart_sdk._interceptors;
  const html = dart_sdk.html;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const media_type = packages__http_parser__http_parser.src__media_type;
  const pedantic = packages__pedantic__pedantic.pedantic;
  var request$ = Object.create(dart.library);
  var utils = Object.create(dart.library);
  var byte_stream = Object.create(dart.library);
  var base_request = Object.create(dart.library);
  var streamed_response = Object.create(dart.library);
  var base_response = Object.create(dart.library);
  var client$ = Object.create(dart.library);
  var response$ = Object.create(dart.library);
  var browser_client = Object.create(dart.library);
  var exception = Object.create(dart.library);
  var base_client = Object.create(dart.library);
  var $length = dartx.length;
  var $containsKey = dartx.containsKey;
  var $_get = dartx._get;
  var $_set = dartx._set;
  var $toLowerCase = dartx.toLowerCase;
  var $hashCode = dartx.hashCode;
  var $toString = dartx.toString;
  var $add = dartx.add;
  var $forEach = dartx.forEach;
  var $map = dartx.map;
  var $join = dartx.join;
  var $buffer = dartx.buffer;
  var $onLoad = dartx.onLoad;
  var $response = dartx.response;
  var $result = dartx.result;
  var $responseHeaders = dartx.responseHeaders;
  var $onError = dartx.onError;
  var $addAll = dartx.addAll;
  var $cast = dartx.cast;
  var StringL = () => (StringL = dart.constFn(dart.legacy(core.String)))();
  var IdentityMapOfStringL$StringL = () => (IdentityMapOfStringL$StringL = dart.constFn(_js_helper.IdentityMap$(StringL(), StringL())))();
  var LinkedHashMapOfStringL$StringL = () => (LinkedHashMapOfStringL$StringL = dart.constFn(collection.LinkedHashMap$(StringL(), StringL())))();
  var boolL = () => (boolL = dart.constFn(dart.legacy(core.bool)))();
  var StringLAndStringLToboolL = () => (StringLAndStringLToboolL = dart.constFn(dart.fnType(boolL(), [StringL(), StringL()])))();
  var intL = () => (intL = dart.constFn(dart.legacy(core.int)))();
  var StringLTointL = () => (StringLTointL = dart.constFn(dart.fnType(intL(), [StringL()])))();
  var ListOfintL = () => (ListOfintL = dart.constFn(core.List$(intL())))();
  var ListLOfintL = () => (ListLOfintL = dart.constFn(dart.legacy(ListOfintL())))();
  var StreamedResponseL = () => (StreamedResponseL = dart.constFn(dart.legacy(streamed_response.StreamedResponse)))();
  var ListOfStringL = () => (ListOfStringL = dart.constFn(core.List$(StringL())))();
  var ListLOfStringL = () => (ListLOfStringL = dart.constFn(dart.legacy(ListOfStringL())))();
  var JSArrayOfListLOfStringL = () => (JSArrayOfListLOfStringL = dart.constFn(_interceptors.JSArray$(ListLOfStringL())))();
  var JSArrayOfStringL = () => (JSArrayOfStringL = dart.constFn(_interceptors.JSArray$(StringL())))();
  var StringLAndStringLTovoid = () => (StringLAndStringLTovoid = dart.constFn(dart.fnType(dart.void, [StringL(), StringL()])))();
  var ListLOfStringLToStringL = () => (ListLOfStringLToStringL = dart.constFn(dart.fnType(StringL(), [ListLOfStringL()])))();
  var Uint8ListL = () => (Uint8ListL = dart.constFn(dart.legacy(typed_data.Uint8List)))();
  var TypedDataL = () => (TypedDataL = dart.constFn(dart.legacy(typed_data.TypedData)))();
  var ByteStreamL = () => (ByteStreamL = dart.constFn(dart.legacy(byte_stream.ByteStream)))();
  var StreamOfListLOfintL = () => (StreamOfListLOfintL = dart.constFn(async.Stream$(ListLOfintL())))();
  var JSArrayOfListLOfintL = () => (JSArrayOfListLOfintL = dart.constFn(_interceptors.JSArray$(ListLOfintL())))();
  var CompleterOfUint8ListL = () => (CompleterOfUint8ListL = dart.constFn(async.Completer$(Uint8ListL())))();
  var ListLOfintLTovoid = () => (ListLOfintLTovoid = dart.constFn(dart.fnType(dart.void, [ListLOfintL()])))();
  var ResponseL = () => (ResponseL = dart.constFn(dart.legacy(response$.Response)))();
  var HttpRequestL = () => (HttpRequestL = dart.constFn(dart.legacy(html.HttpRequest)))();
  var LinkedHashSetOfHttpRequestL = () => (LinkedHashSetOfHttpRequestL = dart.constFn(collection.LinkedHashSet$(HttpRequestL())))();
  var CompleterOfStreamedResponseL = () => (CompleterOfStreamedResponseL = dart.constFn(async.Completer$(StreamedResponseL())))();
  var BlobL = () => (BlobL = dart.constFn(dart.legacy(html.Blob)))();
  var ProgressEventL = () => (ProgressEventL = dart.constFn(dart.legacy(html.ProgressEvent)))();
  var ProgressEventLToNullN = () => (ProgressEventLToNullN = dart.constFn(dart.fnType(core.Null, [ProgressEventL()])))();
  var ListL = () => (ListL = dart.constFn(dart.legacy(core.List)))();
  var MapL = () => (MapL = dart.constFn(dart.legacy(core.Map)))();
  var UriL = () => (UriL = dart.constFn(dart.legacy(core.Uri)))();
  const CT = Object.create(null);
  var L4 = "package:http/src/streamed_response.dart";
  var L7 = "package:http/src/base_client.dart";
  var L8 = "package:http/src/browser_client.dart";
  var L9 = "package:http/src/exception.dart";
  var L6 = "package:http/src/response.dart";
  var L3 = "package:http/src/base_response.dart";
  var L1 = "package:http/src/request.dart";
  var L5 = "package:http/src/client.dart";
  var L2 = "package:http/src/byte_stream.dart";
  var L0 = "package:http/src/base_request.dart";
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.const({
        __proto__: convert.Latin1Codec.prototype,
        [Latin1Codec__allowInvalid]: false
      });
    },
    get C1() {
      return C1 = dart.const({
        __proto__: convert.Utf8Codec.prototype,
        [Utf8Codec__allowMalformed]: false
      });
    },
    get C2() {
      return C2 = dart.constMap(StringL(), StringL(), []);
    }
  }, false);
  var _defaultEncoding = dart.privateName(request$, "_defaultEncoding");
  var _bodyBytes = dart.privateName(request$, "_bodyBytes");
  var _contentType = dart.privateName(request$, "_contentType");
  var _checkFinalized = dart.privateName(request$, "_checkFinalized");
  var _contentLength = dart.privateName(base_request, "_contentLength");
  var _persistentConnection = dart.privateName(base_request, "_persistentConnection");
  var _followRedirects = dart.privateName(base_request, "_followRedirects");
  var _maxRedirects = dart.privateName(base_request, "_maxRedirects");
  var _finalized = dart.privateName(base_request, "_finalized");
  var _checkFinalized$ = dart.privateName(base_request, "_checkFinalized");
  var method$ = dart.privateName(base_request, "BaseRequest.method");
  var url$ = dart.privateName(base_request, "BaseRequest.url");
  var headers = dart.privateName(base_request, "BaseRequest.headers");
  base_request.BaseRequest = class BaseRequest extends core.Object {
    get method() {
      return this[method$];
    }
    set method(value) {
      super.method = value;
    }
    get url() {
      return this[url$];
    }
    set url(value) {
      super.url = value;
    }
    get headers() {
      return this[headers];
    }
    set headers(value) {
      super.headers = value;
    }
    get contentLength() {
      return this[_contentLength];
    }
    set contentLength(value) {
      if (value != null && dart.notNull(value) < 0) {
        dart.throw(new core.ArgumentError.new("Invalid content length " + dart.str(value) + "."));
      }
      this[_checkFinalized$]();
      this[_contentLength] = value;
    }
    get persistentConnection() {
      return this[_persistentConnection];
    }
    set persistentConnection(value) {
      this[_checkFinalized$]();
      this[_persistentConnection] = value;
    }
    get followRedirects() {
      return this[_followRedirects];
    }
    set followRedirects(value) {
      this[_checkFinalized$]();
      this[_followRedirects] = value;
    }
    get maxRedirects() {
      return this[_maxRedirects];
    }
    set maxRedirects(value) {
      this[_checkFinalized$]();
      this[_maxRedirects] = value;
    }
    get finalized() {
      return this[_finalized];
    }
    finalize() {
      if (dart.test(this.finalized)) dart.throw(new core.StateError.new("Can't finalize a finalized Request."));
      this[_finalized] = true;
      return null;
    }
    send() {
      return async.async(StreamedResponseL(), (function* send() {
        let client = client$.Client.new();
        try {
          let response = (yield client.send(this));
          let stream = utils.onDone(ListLOfintL(), response.stream, dart.bind(client, 'close'));
          return new streamed_response.StreamedResponse.new(new byte_stream.ByteStream.new(stream), response.statusCode, {contentLength: response.contentLength, request: response.request, headers: response.headers, isRedirect: response.isRedirect, persistentConnection: response.persistentConnection, reasonPhrase: response.reasonPhrase});
        } catch (e) {
          let _ = dart.getThrown(e);
          client.close();
          dart.rethrow(e);
        }
      }).bind(this));
    }
    [_checkFinalized$]() {
      if (!dart.test(this.finalized)) return;
      dart.throw(new core.StateError.new("Can't modify a finalized Request."));
    }
    toString() {
      return dart.str(this.method) + " " + dart.str(this.url);
    }
  };
  (base_request.BaseRequest.new = function(method, url) {
    this[_contentLength] = null;
    this[_persistentConnection] = true;
    this[_followRedirects] = true;
    this[_maxRedirects] = 5;
    this[_finalized] = false;
    this[method$] = method;
    this[url$] = url;
    this[headers] = LinkedHashMapOfStringL$StringL().new({equals: dart.fn((key1, key2) => key1[$toLowerCase]() === key2[$toLowerCase](), StringLAndStringLToboolL()), hashCode: dart.fn(key => key[$toLowerCase]()[$hashCode], StringLTointL())});
    ;
  }).prototype = base_request.BaseRequest.prototype;
  dart.addTypeTests(base_request.BaseRequest);
  dart.addTypeCaches(base_request.BaseRequest);
  dart.setMethodSignature(base_request.BaseRequest, () => ({
    __proto__: dart.getMethods(base_request.BaseRequest.__proto__),
    finalize: dart.fnType(dart.legacy(byte_stream.ByteStream), []),
    send: dart.fnType(dart.legacy(async.Future$(dart.legacy(streamed_response.StreamedResponse))), []),
    [_checkFinalized$]: dart.fnType(dart.void, []),
    toString: dart.fnType(dart.legacy(core.String), []),
    [$toString]: dart.fnType(dart.legacy(core.String), [])
  }));
  dart.setGetterSignature(base_request.BaseRequest, () => ({
    __proto__: dart.getGetters(base_request.BaseRequest.__proto__),
    contentLength: dart.legacy(core.int),
    persistentConnection: dart.legacy(core.bool),
    followRedirects: dart.legacy(core.bool),
    maxRedirects: dart.legacy(core.int),
    finalized: dart.legacy(core.bool)
  }));
  dart.setSetterSignature(base_request.BaseRequest, () => ({
    __proto__: dart.getSetters(base_request.BaseRequest.__proto__),
    contentLength: dart.legacy(core.int),
    persistentConnection: dart.legacy(core.bool),
    followRedirects: dart.legacy(core.bool),
    maxRedirects: dart.legacy(core.int)
  }));
  dart.setLibraryUri(base_request.BaseRequest, L0);
  dart.setFieldSignature(base_request.BaseRequest, () => ({
    __proto__: dart.getFields(base_request.BaseRequest.__proto__),
    method: dart.finalFieldType(dart.legacy(core.String)),
    url: dart.finalFieldType(dart.legacy(core.Uri)),
    [_contentLength]: dart.fieldType(dart.legacy(core.int)),
    [_persistentConnection]: dart.fieldType(dart.legacy(core.bool)),
    [_followRedirects]: dart.fieldType(dart.legacy(core.bool)),
    [_maxRedirects]: dart.fieldType(dart.legacy(core.int)),
    headers: dart.finalFieldType(dart.legacy(core.Map$(dart.legacy(core.String), dart.legacy(core.String)))),
    [_finalized]: dart.fieldType(dart.legacy(core.bool))
  }));
  dart.defineExtensionMethods(base_request.BaseRequest, ['toString']);
  request$.Request = class Request extends base_request.BaseRequest {
    get contentLength() {
      return this.bodyBytes[$length];
    }
    set contentLength(value) {
      dart.throw(new core.UnsupportedError.new("Cannot set the contentLength property of " + "non-streaming Request objects."));
    }
    get encoding() {
      if (this[_contentType] == null || !dart.test(this[_contentType].parameters[$containsKey]("charset"))) {
        return this[_defaultEncoding];
      }
      return utils.requiredEncodingForCharset(this[_contentType].parameters[$_get]("charset"));
    }
    set encoding(value) {
      this[_checkFinalized]();
      this[_defaultEncoding] = value;
      let contentType = this[_contentType];
      if (contentType == null) return;
      this[_contentType] = contentType.change({parameters: new (IdentityMapOfStringL$StringL()).from(["charset", value.name])});
    }
    get bodyBytes() {
      return this[_bodyBytes];
    }
    set bodyBytes(value) {
      this[_checkFinalized]();
      this[_bodyBytes] = utils.toUint8List(value);
    }
    get body() {
      return this.encoding.decode(this.bodyBytes);
    }
    set body(value) {
      this.bodyBytes = this.encoding.encode(value);
      let contentType = this[_contentType];
      if (contentType == null) {
        this[_contentType] = new media_type.MediaType.new("text", "plain", new (IdentityMapOfStringL$StringL()).from(["charset", this.encoding.name]));
      } else if (!dart.test(contentType.parameters[$containsKey]("charset"))) {
        this[_contentType] = contentType.change({parameters: new (IdentityMapOfStringL$StringL()).from(["charset", this.encoding.name])});
      }
    }
    get bodyFields() {
      let contentType = this[_contentType];
      if (contentType == null || contentType.mimeType !== "application/x-www-form-urlencoded") {
        dart.throw(new core.StateError.new("Cannot access the body fields of a Request without " + "content-type \"application/x-www-form-urlencoded\"."));
      }
      return core.Uri.splitQueryString(this.body, {encoding: this.encoding});
    }
    set bodyFields(fields) {
      let contentType = this[_contentType];
      if (contentType == null) {
        this[_contentType] = new media_type.MediaType.new("application", "x-www-form-urlencoded");
      } else if (contentType.mimeType !== "application/x-www-form-urlencoded") {
        dart.throw(new core.StateError.new("Cannot set the body fields of a Request with " + "content-type \"" + dart.str(contentType.mimeType) + "\"."));
      }
      this.body = utils.mapToQuery(fields, {encoding: this.encoding});
    }
    finalize() {
      super.finalize();
      return byte_stream.ByteStream.fromBytes(this.bodyBytes);
    }
    get [_contentType]() {
      let contentType = this.headers[$_get]("content-type");
      if (contentType == null) return null;
      return media_type.MediaType.parse(contentType);
    }
    set [_contentType](value) {
      this.headers[$_set]("content-type", dart.toString(value));
    }
    [_checkFinalized]() {
      if (!dart.test(this.finalized)) return;
      dart.throw(new core.StateError.new("Can't modify a finalized Request."));
    }
  };
  (request$.Request.new = function(method, url) {
    this[_defaultEncoding] = convert.utf8;
    this[_bodyBytes] = _native_typed_data.NativeUint8List.new(0);
    request$.Request.__proto__.new.call(this, method, url);
    ;
  }).prototype = request$.Request.prototype;
  dart.addTypeTests(request$.Request);
  dart.addTypeCaches(request$.Request);
  dart.setMethodSignature(request$.Request, () => ({
    __proto__: dart.getMethods(request$.Request.__proto__),
    [_checkFinalized]: dart.fnType(dart.void, [])
  }));
  dart.setGetterSignature(request$.Request, () => ({
    __proto__: dart.getGetters(request$.Request.__proto__),
    encoding: dart.legacy(convert.Encoding),
    bodyBytes: dart.legacy(typed_data.Uint8List),
    body: dart.legacy(core.String),
    bodyFields: dart.legacy(core.Map$(dart.legacy(core.String), dart.legacy(core.String))),
    [_contentType]: dart.legacy(media_type.MediaType)
  }));
  dart.setSetterSignature(request$.Request, () => ({
    __proto__: dart.getSetters(request$.Request.__proto__),
    encoding: dart.legacy(convert.Encoding),
    bodyBytes: dart.legacy(core.List$(dart.legacy(core.int))),
    body: dart.legacy(core.String),
    bodyFields: dart.legacy(core.Map$(dart.legacy(core.String), dart.legacy(core.String))),
    [_contentType]: dart.legacy(media_type.MediaType)
  }));
  dart.setLibraryUri(request$.Request, L1);
  dart.setFieldSignature(request$.Request, () => ({
    __proto__: dart.getFields(request$.Request.__proto__),
    [_defaultEncoding]: dart.fieldType(dart.legacy(convert.Encoding)),
    [_bodyBytes]: dart.fieldType(dart.legacy(typed_data.Uint8List))
  }));
  var Latin1Codec__allowInvalid = dart.privateName(convert, "Latin1Codec._allowInvalid");
  var C0;
  utils.mapToQuery = function mapToQuery(map, opts) {
    let encoding = opts && 'encoding' in opts ? opts.encoding : null;
    let pairs = JSArrayOfListLOfStringL().of([]);
    map[$forEach](dart.fn((key, value) => pairs[$add](JSArrayOfStringL().of([core.Uri.encodeQueryComponent(key, {encoding: encoding}), core.Uri.encodeQueryComponent(value, {encoding: encoding})])), StringLAndStringLTovoid()));
    return pairs[$map](StringL(), dart.fn(pair => dart.str(pair[$_get](0)) + "=" + dart.str(pair[$_get](1)), ListLOfStringLToStringL()))[$join]("&");
  };
  utils.encodingForCharset = function encodingForCharset(charset, fallback = C0 || CT.C0) {
    let t1;
    if (charset == null) return fallback;
    t1 = convert.Encoding.getByName(charset);
    return t1 == null ? fallback : t1;
  };
  utils.requiredEncodingForCharset = function requiredEncodingForCharset(charset) {
    let t1;
    t1 = convert.Encoding.getByName(charset);
    return t1 == null ? dart.throw(new core.FormatException.new("Unsupported encoding \"" + dart.str(charset) + "\".")) : t1;
  };
  utils.isPlainAscii = function isPlainAscii(string) {
    return utils._asciiOnly.hasMatch(string);
  };
  utils.toUint8List = function toUint8List(input) {
    if (Uint8ListL().is(input)) return input;
    if (TypedDataL().is(input)) {
      return typed_data.Uint8List.view(TypedDataL().as(input)[$buffer]);
    }
    return _native_typed_data.NativeUint8List.fromList(input);
  };
  utils.toByteStream = function toByteStream(stream) {
    if (ByteStreamL().is(stream)) return stream;
    return new byte_stream.ByteStream.new(stream);
  };
  utils.onDone = function onDone(T, stream, onDone) {
    return stream.transform(dart.legacy(T), new (async._StreamHandlerTransformer$(dart.legacy(T), dart.legacy(T))).new({handleDone: dart.fn(sink => {
        sink.close();
        onDone();
      }, dart.fnType(core.Null, [dart.legacy(async.EventSink$(dart.legacy(T)))]))}));
  };
  dart.defineLazy(utils, {
    /*utils._asciiOnly*/get _asciiOnly() {
      return core.RegExp.new("^[\\x00-\\x7F]+$");
    }
  }, true);
  var Utf8Codec__allowMalformed = dart.privateName(convert, "Utf8Codec._allowMalformed");
  var C1;
  byte_stream.ByteStream = class ByteStream extends async.StreamView$(dart.legacy(core.List$(dart.legacy(core.int)))) {
    static fromBytes(bytes) {
      return new byte_stream.ByteStream.new(StreamOfListLOfintL().fromIterable(JSArrayOfListLOfintL().of([bytes])));
    }
    toBytes() {
      let completer = CompleterOfUint8ListL().new();
      let sink = new convert._ByteCallbackSink.new(dart.fn(bytes => completer.complete(_native_typed_data.NativeUint8List.fromList(bytes)), ListLOfintLTovoid()));
      this.listen(dart.bind(sink, 'add'), {onError: dart.bind(completer, 'completeError'), onDone: dart.bind(sink, 'close'), cancelOnError: true});
      return completer.future;
    }
    bytesToString(encoding = C1 || CT.C1) {
      return encoding.decodeStream(this);
    }
    toStringStream(encoding = C1 || CT.C1) {
      return encoding.decoder.bind(this);
    }
  };
  (byte_stream.ByteStream.new = function(stream) {
    byte_stream.ByteStream.__proto__.new.call(this, stream);
    ;
  }).prototype = byte_stream.ByteStream.prototype;
  dart.addTypeTests(byte_stream.ByteStream);
  dart.addTypeCaches(byte_stream.ByteStream);
  dart.setMethodSignature(byte_stream.ByteStream, () => ({
    __proto__: dart.getMethods(byte_stream.ByteStream.__proto__),
    toBytes: dart.fnType(dart.legacy(async.Future$(dart.legacy(typed_data.Uint8List))), []),
    bytesToString: dart.fnType(dart.legacy(async.Future$(dart.legacy(core.String))), [], [dart.legacy(convert.Encoding)]),
    toStringStream: dart.fnType(dart.legacy(async.Stream$(dart.legacy(core.String))), [], [dart.legacy(convert.Encoding)])
  }));
  dart.setLibraryUri(byte_stream.ByteStream, L2);
  var C2;
  var request$0 = dart.privateName(base_response, "BaseResponse.request");
  var statusCode$ = dart.privateName(base_response, "BaseResponse.statusCode");
  var reasonPhrase$ = dart.privateName(base_response, "BaseResponse.reasonPhrase");
  var contentLength$ = dart.privateName(base_response, "BaseResponse.contentLength");
  var headers$ = dart.privateName(base_response, "BaseResponse.headers");
  var isRedirect$ = dart.privateName(base_response, "BaseResponse.isRedirect");
  var persistentConnection$ = dart.privateName(base_response, "BaseResponse.persistentConnection");
  base_response.BaseResponse = class BaseResponse extends core.Object {
    get request() {
      return this[request$0];
    }
    set request(value) {
      super.request = value;
    }
    get statusCode() {
      return this[statusCode$];
    }
    set statusCode(value) {
      super.statusCode = value;
    }
    get reasonPhrase() {
      return this[reasonPhrase$];
    }
    set reasonPhrase(value) {
      super.reasonPhrase = value;
    }
    get contentLength() {
      return this[contentLength$];
    }
    set contentLength(value) {
      super.contentLength = value;
    }
    get headers() {
      return this[headers$];
    }
    set headers(value) {
      super.headers = value;
    }
    get isRedirect() {
      return this[isRedirect$];
    }
    set isRedirect(value) {
      super.isRedirect = value;
    }
    get persistentConnection() {
      return this[persistentConnection$];
    }
    set persistentConnection(value) {
      super.persistentConnection = value;
    }
  };
  (base_response.BaseResponse.new = function(statusCode, opts) {
    let contentLength = opts && 'contentLength' in opts ? opts.contentLength : null;
    let request = opts && 'request' in opts ? opts.request : null;
    let headers = opts && 'headers' in opts ? opts.headers : C2 || CT.C2;
    let isRedirect = opts && 'isRedirect' in opts ? opts.isRedirect : false;
    let persistentConnection = opts && 'persistentConnection' in opts ? opts.persistentConnection : true;
    let reasonPhrase = opts && 'reasonPhrase' in opts ? opts.reasonPhrase : null;
    this[statusCode$] = statusCode;
    this[contentLength$] = contentLength;
    this[request$0] = request;
    this[headers$] = headers;
    this[isRedirect$] = isRedirect;
    this[persistentConnection$] = persistentConnection;
    this[reasonPhrase$] = reasonPhrase;
    if (dart.notNull(this.statusCode) < 100) {
      dart.throw(new core.ArgumentError.new("Invalid status code " + dart.str(this.statusCode) + "."));
    } else if (this.contentLength != null && dart.notNull(this.contentLength) < 0) {
      dart.throw(new core.ArgumentError.new("Invalid content length " + dart.str(this.contentLength) + "."));
    }
  }).prototype = base_response.BaseResponse.prototype;
  dart.addTypeTests(base_response.BaseResponse);
  dart.addTypeCaches(base_response.BaseResponse);
  dart.setLibraryUri(base_response.BaseResponse, L3);
  dart.setFieldSignature(base_response.BaseResponse, () => ({
    __proto__: dart.getFields(base_response.BaseResponse.__proto__),
    request: dart.finalFieldType(dart.legacy(base_request.BaseRequest)),
    statusCode: dart.finalFieldType(dart.legacy(core.int)),
    reasonPhrase: dart.finalFieldType(dart.legacy(core.String)),
    contentLength: dart.finalFieldType(dart.legacy(core.int)),
    headers: dart.finalFieldType(dart.legacy(core.Map$(dart.legacy(core.String), dart.legacy(core.String)))),
    isRedirect: dart.finalFieldType(dart.legacy(core.bool)),
    persistentConnection: dart.finalFieldType(dart.legacy(core.bool))
  }));
  var stream$ = dart.privateName(streamed_response, "StreamedResponse.stream");
  streamed_response.StreamedResponse = class StreamedResponse extends base_response.BaseResponse {
    get stream() {
      return this[stream$];
    }
    set stream(value) {
      super.stream = value;
    }
  };
  (streamed_response.StreamedResponse.new = function(stream, statusCode, opts) {
    let contentLength = opts && 'contentLength' in opts ? opts.contentLength : null;
    let request = opts && 'request' in opts ? opts.request : null;
    let headers = opts && 'headers' in opts ? opts.headers : C2 || CT.C2;
    let isRedirect = opts && 'isRedirect' in opts ? opts.isRedirect : false;
    let persistentConnection = opts && 'persistentConnection' in opts ? opts.persistentConnection : true;
    let reasonPhrase = opts && 'reasonPhrase' in opts ? opts.reasonPhrase : null;
    this[stream$] = utils.toByteStream(stream);
    streamed_response.StreamedResponse.__proto__.new.call(this, statusCode, {contentLength: contentLength, request: request, headers: headers, isRedirect: isRedirect, persistentConnection: persistentConnection, reasonPhrase: reasonPhrase});
    ;
  }).prototype = streamed_response.StreamedResponse.prototype;
  dart.addTypeTests(streamed_response.StreamedResponse);
  dart.addTypeCaches(streamed_response.StreamedResponse);
  dart.setLibraryUri(streamed_response.StreamedResponse, L4);
  dart.setFieldSignature(streamed_response.StreamedResponse, () => ({
    __proto__: dart.getFields(streamed_response.StreamedResponse.__proto__),
    stream: dart.finalFieldType(dart.legacy(byte_stream.ByteStream))
  }));
  client$.Client = class Client extends core.Object {
    static new() {
      return browser_client.createClient();
    }
  };
  (client$.Client[dart.mixinNew] = function() {
  }).prototype = client$.Client.prototype;
  dart.addTypeTests(client$.Client);
  dart.addTypeCaches(client$.Client);
  dart.setLibraryUri(client$.Client, L5);
  var bodyBytes$ = dart.privateName(response$, "Response.bodyBytes");
  response$.Response = class Response extends base_response.BaseResponse {
    get bodyBytes() {
      return this[bodyBytes$];
    }
    set bodyBytes(value) {
      super.bodyBytes = value;
    }
    get body() {
      return response$._encodingForHeaders(this.headers).decode(this.bodyBytes);
    }
    static fromStream(response) {
      return async.async(ResponseL(), function* fromStream() {
        let body = (yield response.stream.toBytes());
        return new response$.Response.bytes(body, response.statusCode, {request: response.request, headers: response.headers, isRedirect: response.isRedirect, persistentConnection: response.persistentConnection, reasonPhrase: response.reasonPhrase});
      });
    }
  };
  (response$.Response.new = function(body, statusCode, opts) {
    let request = opts && 'request' in opts ? opts.request : null;
    let headers = opts && 'headers' in opts ? opts.headers : C2 || CT.C2;
    let isRedirect = opts && 'isRedirect' in opts ? opts.isRedirect : false;
    let persistentConnection = opts && 'persistentConnection' in opts ? opts.persistentConnection : true;
    let reasonPhrase = opts && 'reasonPhrase' in opts ? opts.reasonPhrase : null;
    response$.Response.bytes.call(this, response$._encodingForHeaders(headers).encode(body), statusCode, {request: request, headers: headers, isRedirect: isRedirect, persistentConnection: persistentConnection, reasonPhrase: reasonPhrase});
  }).prototype = response$.Response.prototype;
  (response$.Response.bytes = function(bodyBytes, statusCode, opts) {
    let request = opts && 'request' in opts ? opts.request : null;
    let headers = opts && 'headers' in opts ? opts.headers : C2 || CT.C2;
    let isRedirect = opts && 'isRedirect' in opts ? opts.isRedirect : false;
    let persistentConnection = opts && 'persistentConnection' in opts ? opts.persistentConnection : true;
    let reasonPhrase = opts && 'reasonPhrase' in opts ? opts.reasonPhrase : null;
    this[bodyBytes$] = utils.toUint8List(bodyBytes);
    response$.Response.__proto__.new.call(this, statusCode, {contentLength: bodyBytes[$length], request: request, headers: headers, isRedirect: isRedirect, persistentConnection: persistentConnection, reasonPhrase: reasonPhrase});
    ;
  }).prototype = response$.Response.prototype;
  dart.addTypeTests(response$.Response);
  dart.addTypeCaches(response$.Response);
  dart.setGetterSignature(response$.Response, () => ({
    __proto__: dart.getGetters(response$.Response.__proto__),
    body: dart.legacy(core.String)
  }));
  dart.setLibraryUri(response$.Response, L6);
  dart.setFieldSignature(response$.Response, () => ({
    __proto__: dart.getFields(response$.Response.__proto__),
    bodyBytes: dart.finalFieldType(dart.legacy(typed_data.Uint8List))
  }));
  response$._encodingForHeaders = function _encodingForHeaders(headers) {
    return utils.encodingForCharset(response$._contentTypeForHeaders(headers).parameters[$_get]("charset"));
  };
  response$._contentTypeForHeaders = function _contentTypeForHeaders(headers) {
    let contentType = headers[$_get]("content-type");
    if (contentType != null) return media_type.MediaType.parse(contentType);
    return new media_type.MediaType.new("application", "octet-stream");
  };
  var _xhrs = dart.privateName(browser_client, "_xhrs");
  var _sendUnstreamed = dart.privateName(base_client, "_sendUnstreamed");
  var _checkResponseSuccess = dart.privateName(base_client, "_checkResponseSuccess");
  base_client.BaseClient = class BaseClient extends core.Object {
    head(url, opts) {
      let headers = opts && 'headers' in opts ? opts.headers : null;
      return this[_sendUnstreamed]("HEAD", url, headers);
    }
    get(url, opts) {
      let headers = opts && 'headers' in opts ? opts.headers : null;
      return this[_sendUnstreamed]("GET", url, headers);
    }
    post(url, opts) {
      let headers = opts && 'headers' in opts ? opts.headers : null;
      let body = opts && 'body' in opts ? opts.body : null;
      let encoding = opts && 'encoding' in opts ? opts.encoding : null;
      return this[_sendUnstreamed]("POST", url, headers, body, encoding);
    }
    put(url, opts) {
      let headers = opts && 'headers' in opts ? opts.headers : null;
      let body = opts && 'body' in opts ? opts.body : null;
      let encoding = opts && 'encoding' in opts ? opts.encoding : null;
      return this[_sendUnstreamed]("PUT", url, headers, body, encoding);
    }
    patch(url, opts) {
      let headers = opts && 'headers' in opts ? opts.headers : null;
      let body = opts && 'body' in opts ? opts.body : null;
      let encoding = opts && 'encoding' in opts ? opts.encoding : null;
      return this[_sendUnstreamed]("PATCH", url, headers, body, encoding);
    }
    delete(url, opts) {
      let headers = opts && 'headers' in opts ? opts.headers : null;
      return this[_sendUnstreamed]("DELETE", url, headers);
    }
    read(url, opts) {
      let headers = opts && 'headers' in opts ? opts.headers : null;
      return async.async(StringL(), (function* read() {
        let response = (yield this.get(url, {headers: headers}));
        this[_checkResponseSuccess](url, response);
        return response.body;
      }).bind(this));
    }
    readBytes(url, opts) {
      let headers = opts && 'headers' in opts ? opts.headers : null;
      return async.async(Uint8ListL(), (function* readBytes() {
        let response = (yield this.get(url, {headers: headers}));
        this[_checkResponseSuccess](url, response);
        return response.bodyBytes;
      }).bind(this));
    }
    [_sendUnstreamed](method, url, headers, body = null, encoding = null) {
      return async.async(ResponseL(), (function* _sendUnstreamed() {
        let request = new request$.Request.new(method, base_client._fromUriOrString(url));
        if (headers != null) request.headers[$addAll](headers);
        if (encoding != null) request.encoding = encoding;
        if (body != null) {
          if (StringL().is(body)) {
            request.body = body;
          } else if (ListL().is(body)) {
            request.bodyBytes = body[$cast](intL());
          } else if (MapL().is(body)) {
            request.bodyFields = body[$cast](StringL(), StringL());
          } else {
            dart.throw(new core.ArgumentError.new("Invalid request body \"" + dart.str(body) + "\"."));
          }
        }
        return response$.Response.fromStream(yield this.send(request));
      }).bind(this));
    }
    [_checkResponseSuccess](url, response) {
      if (dart.notNull(response.statusCode) < 400) return;
      let message = "Request to " + dart.str(url) + " failed with status " + dart.str(response.statusCode);
      if (response.reasonPhrase != null) {
        message = message + ": " + dart.str(response.reasonPhrase);
      }
      dart.throw(new exception.ClientException.new(message + ".", base_client._fromUriOrString(url)));
    }
    close() {
    }
  };
  (base_client.BaseClient.new = function() {
    ;
  }).prototype = base_client.BaseClient.prototype;
  dart.addTypeTests(base_client.BaseClient);
  dart.addTypeCaches(base_client.BaseClient);
  base_client.BaseClient[dart.implements] = () => [client$.Client];
  dart.setMethodSignature(base_client.BaseClient, () => ({
    __proto__: dart.getMethods(base_client.BaseClient.__proto__),
    head: dart.fnType(dart.legacy(async.Future$(dart.legacy(response$.Response))), [dart.dynamic], {headers: dart.legacy(core.Map$(dart.legacy(core.String), dart.legacy(core.String)))}, {}),
    get: dart.fnType(dart.legacy(async.Future$(dart.legacy(response$.Response))), [dart.dynamic], {headers: dart.legacy(core.Map$(dart.legacy(core.String), dart.legacy(core.String)))}, {}),
    post: dart.fnType(dart.legacy(async.Future$(dart.legacy(response$.Response))), [dart.dynamic], {body: dart.dynamic, encoding: dart.legacy(convert.Encoding), headers: dart.legacy(core.Map$(dart.legacy(core.String), dart.legacy(core.String)))}, {}),
    put: dart.fnType(dart.legacy(async.Future$(dart.legacy(response$.Response))), [dart.dynamic], {body: dart.dynamic, encoding: dart.legacy(convert.Encoding), headers: dart.legacy(core.Map$(dart.legacy(core.String), dart.legacy(core.String)))}, {}),
    patch: dart.fnType(dart.legacy(async.Future$(dart.legacy(response$.Response))), [dart.dynamic], {body: dart.dynamic, encoding: dart.legacy(convert.Encoding), headers: dart.legacy(core.Map$(dart.legacy(core.String), dart.legacy(core.String)))}, {}),
    delete: dart.fnType(dart.legacy(async.Future$(dart.legacy(response$.Response))), [dart.dynamic], {headers: dart.legacy(core.Map$(dart.legacy(core.String), dart.legacy(core.String)))}, {}),
    read: dart.fnType(dart.legacy(async.Future$(dart.legacy(core.String))), [dart.dynamic], {headers: dart.legacy(core.Map$(dart.legacy(core.String), dart.legacy(core.String)))}, {}),
    readBytes: dart.fnType(dart.legacy(async.Future$(dart.legacy(typed_data.Uint8List))), [dart.dynamic], {headers: dart.legacy(core.Map$(dart.legacy(core.String), dart.legacy(core.String)))}, {}),
    [_sendUnstreamed]: dart.fnType(dart.legacy(async.Future$(dart.legacy(response$.Response))), [dart.legacy(core.String), dart.dynamic, dart.legacy(core.Map$(dart.legacy(core.String), dart.legacy(core.String)))], [dart.dynamic, dart.legacy(convert.Encoding)]),
    [_checkResponseSuccess]: dart.fnType(dart.void, [dart.dynamic, dart.legacy(response$.Response)]),
    close: dart.fnType(dart.void, [])
  }));
  dart.setLibraryUri(base_client.BaseClient, L7);
  var withCredentials = dart.privateName(browser_client, "BrowserClient.withCredentials");
  browser_client.BrowserClient = class BrowserClient extends base_client.BaseClient {
    get withCredentials() {
      return this[withCredentials];
    }
    set withCredentials(value) {
      this[withCredentials] = value;
    }
    send(request) {
      return async.async(StreamedResponseL(), (function* send() {
        let t1;
        let bytes = (yield request.finalize().toBytes());
        let xhr = html.HttpRequest.new();
        this[_xhrs].add(xhr);
        t1 = xhr;
        (() => {
          t1.open(request.method, dart.str(request.url), {async: true});
          t1.responseType = "blob";
          t1.withCredentials = this.withCredentials;
          return t1;
        })();
        request.headers[$forEach](dart.bind(xhr, 'setRequestHeader'));
        let completer = CompleterOfStreamedResponseL().new();
        pedantic.unawaited(xhr[$onLoad].first.then(dart.void, dart.fn(_ => {
          let t1;
          let blob = (t1 = BlobL().as(xhr[$response]), t1 == null ? html.Blob.new([]) : t1);
          let reader = html.FileReader.new();
          reader[$onLoad].first.then(core.Null, dart.fn(_ => {
            let body = Uint8ListL().as(reader[$result]);
            completer.complete(new streamed_response.StreamedResponse.new(byte_stream.ByteStream.fromBytes(body), xhr.status, {contentLength: body[$length], request: request, headers: xhr[$responseHeaders], reasonPhrase: xhr.statusText}));
          }, ProgressEventLToNullN()));
          reader[$onError].first.then(core.Null, dart.fn(error => {
            completer.completeError(new exception.ClientException.new(dart.toString(error), request.url), core.StackTrace.current);
          }, ProgressEventLToNullN()));
          reader.readAsArrayBuffer(blob);
        }, ProgressEventLToNullN())));
        pedantic.unawaited(xhr[$onError].first.then(dart.void, dart.fn(_ => {
          completer.completeError(new exception.ClientException.new("XMLHttpRequest error.", request.url), core.StackTrace.current);
        }, ProgressEventLToNullN())));
        xhr.send(bytes);
        try {
          return yield completer.future;
        } finally {
          this[_xhrs].remove(xhr);
        }
      }).bind(this));
    }
    close() {
      for (let xhr of this[_xhrs]) {
        xhr.abort();
      }
    }
  };
  (browser_client.BrowserClient.new = function() {
    this[_xhrs] = LinkedHashSetOfHttpRequestL().new();
    this[withCredentials] = false;
    ;
  }).prototype = browser_client.BrowserClient.prototype;
  dart.addTypeTests(browser_client.BrowserClient);
  dart.addTypeCaches(browser_client.BrowserClient);
  dart.setMethodSignature(browser_client.BrowserClient, () => ({
    __proto__: dart.getMethods(browser_client.BrowserClient.__proto__),
    send: dart.fnType(dart.legacy(async.Future$(dart.legacy(streamed_response.StreamedResponse))), [dart.legacy(base_request.BaseRequest)])
  }));
  dart.setLibraryUri(browser_client.BrowserClient, L8);
  dart.setFieldSignature(browser_client.BrowserClient, () => ({
    __proto__: dart.getFields(browser_client.BrowserClient.__proto__),
    [_xhrs]: dart.finalFieldType(dart.legacy(core.Set$(dart.legacy(html.HttpRequest)))),
    withCredentials: dart.fieldType(dart.legacy(core.bool))
  }));
  browser_client.createClient = function createClient() {
    return new browser_client.BrowserClient.new();
  };
  var message$ = dart.privateName(exception, "ClientException.message");
  var uri$ = dart.privateName(exception, "ClientException.uri");
  exception.ClientException = class ClientException extends core.Object {
    get message() {
      return this[message$];
    }
    set message(value) {
      super.message = value;
    }
    get uri() {
      return this[uri$];
    }
    set uri(value) {
      super.uri = value;
    }
    toString() {
      return this.message;
    }
  };
  (exception.ClientException.new = function(message, uri = null) {
    this[message$] = message;
    this[uri$] = uri;
    ;
  }).prototype = exception.ClientException.prototype;
  dart.addTypeTests(exception.ClientException);
  dart.addTypeCaches(exception.ClientException);
  exception.ClientException[dart.implements] = () => [core.Exception];
  dart.setMethodSignature(exception.ClientException, () => ({
    __proto__: dart.getMethods(exception.ClientException.__proto__),
    toString: dart.fnType(dart.legacy(core.String), []),
    [$toString]: dart.fnType(dart.legacy(core.String), [])
  }));
  dart.setLibraryUri(exception.ClientException, L9);
  dart.setFieldSignature(exception.ClientException, () => ({
    __proto__: dart.getFields(exception.ClientException.__proto__),
    message: dart.finalFieldType(dart.legacy(core.String)),
    uri: dart.finalFieldType(dart.legacy(core.Uri))
  }));
  dart.defineExtensionMethods(exception.ClientException, ['toString']);
  base_client._fromUriOrString = function _fromUriOrString(uri) {
    return StringL().is(uri) ? core.Uri.parse(uri) : UriL().as(uri);
  };
  dart.trackLibraries("packages/http/src/base_client", {
    "package:http/src/request.dart": request$,
    "package:http/src/utils.dart": utils,
    "package:http/src/byte_stream.dart": byte_stream,
    "package:http/src/base_request.dart": base_request,
    "package:http/src/streamed_response.dart": streamed_response,
    "package:http/src/base_response.dart": base_response,
    "package:http/src/client.dart": client$,
    "package:http/src/response.dart": response$,
    "package:http/src/browser_client.dart": browser_client,
    "package:http/src/exception.dart": exception,
    "package:http/src/base_client.dart": base_client
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["base_request.dart","request.dart","utils.dart","byte_stream.dart","base_response.dart","streamed_response.dart","client.dart","response.dart","base_client.dart","browser_client.dart","exception.dart"],"names":[],"mappings":"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","file":"base_client.unsound.ddc.js"}');
  // Exports:
  return {
    src__request: request$,
    src__utils: utils,
    src__byte_stream: byte_stream,
    src__base_request: base_request,
    src__streamed_response: streamed_response,
    src__base_response: base_response,
    src__client: client$,
    src__response: response$,
    src__browser_client: browser_client,
    src__exception: exception,
    src__base_client: base_client
  };
}));

//# sourceMappingURL=base_client.unsound.ddc.js.map

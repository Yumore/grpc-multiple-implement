define(['dart_sdk', 'packages/http/src/base_client', 'packages/http_parser/http_parser'], (function load__packages__http__http(dart_sdk, packages__http__src__base_client, packages__http_parser__http_parser) {
  'use strict';
  const core = dart_sdk.core;
  const convert = dart_sdk.convert;
  const _js_helper = dart_sdk._js_helper;
  const async = dart_sdk.async;
  const typed_data = dart_sdk.typed_data;
  const _interceptors = dart_sdk._interceptors;
  const math = dart_sdk.math;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const utils = packages__http__src__base_client.src__utils;
  const byte_stream = packages__http__src__base_client.src__byte_stream;
  const response = packages__http__src__base_client.src__response;
  const client$ = packages__http__src__base_client.src__client;
  const base_request = packages__http__src__base_client.src__base_request;
  const media_type = packages__http_parser__http_parser.src__media_type;
  var multipart_file_stub = Object.create(dart.library);
  var multipart_file = Object.create(dart.library);
  var http = Object.create(dart.library);
  var streamed_request = Object.create(dart.library);
  var multipart_request = Object.create(dart.library);
  var boundary_characters = Object.create(dart.library);
  var $length = dartx.length;
  var $_get = dartx._get;
  var $forEach = dartx.forEach;
  var $_set = dartx._set;
  var $entries = dartx.entries;
  var $replaceAll = dartx.replaceAll;
  var StringL = () => (StringL = dart.constFn(dart.legacy(core.String)))();
  var IdentityMapOfStringL$StringL = () => (IdentityMapOfStringL$StringL = dart.constFn(_js_helper.IdentityMap$(StringL(), StringL())))();
  var ResponseL = () => (ResponseL = dart.constFn(dart.legacy(response.Response)))();
  var FutureOfResponseL = () => (FutureOfResponseL = dart.constFn(async.Future$(ResponseL())))();
  var FutureLOfResponseL = () => (FutureLOfResponseL = dart.constFn(dart.legacy(FutureOfResponseL())))();
  var ClientL = () => (ClientL = dart.constFn(dart.legacy(client$.Client)))();
  var ClientLToFutureLOfResponseL = () => (ClientLToFutureLOfResponseL = dart.constFn(dart.fnType(FutureLOfResponseL(), [ClientL()])))();
  var FutureOfStringL = () => (FutureOfStringL = dart.constFn(async.Future$(StringL())))();
  var FutureLOfStringL = () => (FutureLOfStringL = dart.constFn(dart.legacy(FutureOfStringL())))();
  var ClientLToFutureLOfStringL = () => (ClientLToFutureLOfStringL = dart.constFn(dart.fnType(FutureLOfStringL(), [ClientL()])))();
  var Uint8ListL = () => (Uint8ListL = dart.constFn(dart.legacy(typed_data.Uint8List)))();
  var FutureOfUint8ListL = () => (FutureOfUint8ListL = dart.constFn(async.Future$(Uint8ListL())))();
  var FutureLOfUint8ListL = () => (FutureLOfUint8ListL = dart.constFn(dart.legacy(FutureOfUint8ListL())))();
  var ClientLToFutureLOfUint8ListL = () => (ClientLToFutureLOfUint8ListL = dart.constFn(dart.fnType(FutureLOfUint8ListL(), [ClientL()])))();
  var intL = () => (intL = dart.constFn(dart.legacy(core.int)))();
  var ListOfintL = () => (ListOfintL = dart.constFn(core.List$(intL())))();
  var ListLOfintL = () => (ListLOfintL = dart.constFn(dart.legacy(ListOfintL())))();
  var StreamControllerOfListLOfintL = () => (StreamControllerOfListLOfintL = dart.constFn(async.StreamController$(ListLOfintL())))();
  var MultipartFileL = () => (MultipartFileL = dart.constFn(dart.legacy(multipart_file.MultipartFile)))();
  var JSArrayOfMultipartFileL = () => (JSArrayOfMultipartFileL = dart.constFn(_interceptors.JSArray$(MultipartFileL())))();
  var StringLAndStringLToNullN = () => (StringLAndStringLToNullN = dart.constFn(dart.fnType(core.Null, [StringL(), StringL()])))();
  var _AsyncStarImplOfListLOfintL = () => (_AsyncStarImplOfListLOfintL = dart.constFn(async._AsyncStarImpl$(ListLOfintL())))();
  var intLTointL = () => (intLTointL = dart.constFn(dart.fnType(intL(), [intL()])))();
  const CT = Object.create(null);
  var L1 = "package:http/src/streamed_request.dart";
  var L2 = "package:http/src/multipart_request.dart";
  var L0 = "package:http/src/multipart_file.dart";
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.constList([13, 10], intL());
    },
    get C1() {
      return C1 = dart.constList([43, 95, 45, 46, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122], intL());
    }
  }, false);
  multipart_file_stub.multipartFileFromPath = function multipartFileFromPath(field, filePath, opts) {
    let filename = opts && 'filename' in opts ? opts.filename : null;
    let contentType = opts && 'contentType' in opts ? opts.contentType : null;
    return dart.throw(new core.UnsupportedError.new("MultipartFile is only supported where dart:io is available."));
  };
  var _isFinalized = dart.privateName(multipart_file, "_isFinalized");
  var _stream = dart.privateName(multipart_file, "_stream");
  var field$ = dart.privateName(multipart_file, "MultipartFile.field");
  var length$ = dart.privateName(multipart_file, "MultipartFile.length");
  var filename$ = dart.privateName(multipart_file, "MultipartFile.filename");
  var contentType$ = dart.privateName(multipart_file, "MultipartFile.contentType");
  multipart_file.MultipartFile = class MultipartFile extends core.Object {
    get field() {
      return this[field$];
    }
    set field(value) {
      super.field = value;
    }
    get length() {
      return this[length$];
    }
    set length(value) {
      super.length = value;
    }
    get filename() {
      return this[filename$];
    }
    set filename(value) {
      super.filename = value;
    }
    get contentType() {
      return this[contentType$];
    }
    set contentType(value) {
      super.contentType = value;
    }
    get isFinalized() {
      return this[_isFinalized];
    }
    static fromBytes(field, value, opts) {
      let filename = opts && 'filename' in opts ? opts.filename : null;
      let contentType = opts && 'contentType' in opts ? opts.contentType : null;
      let stream = byte_stream.ByteStream.fromBytes(value);
      return new multipart_file.MultipartFile.new(field, stream, value[$length], {filename: filename, contentType: contentType});
    }
    static fromString(field, value, opts) {
      let filename = opts && 'filename' in opts ? opts.filename : null;
      let contentType = opts && 'contentType' in opts ? opts.contentType : null;
      contentType == null ? contentType = new media_type.MediaType.new("text", "plain") : null;
      let encoding = utils.encodingForCharset(contentType.parameters[$_get]("charset"), convert.utf8);
      contentType = contentType.change({parameters: new (IdentityMapOfStringL$StringL()).from(["charset", encoding.name])});
      return multipart_file.MultipartFile.fromBytes(field, encoding.encode(value), {filename: filename, contentType: contentType});
    }
    static fromPath(field, filePath, opts) {
      let filename = opts && 'filename' in opts ? opts.filename : null;
      let contentType = opts && 'contentType' in opts ? opts.contentType : null;
      return multipart_file_stub.multipartFileFromPath(field, filePath, {filename: filename, contentType: contentType});
    }
    finalize() {
      if (dart.test(this.isFinalized)) {
        dart.throw(new core.StateError.new("Can't finalize a finalized MultipartFile."));
      }
      this[_isFinalized] = true;
      return this[_stream];
    }
  };
  (multipart_file.MultipartFile.new = function(field, stream, length, opts) {
    let t0;
    let filename = opts && 'filename' in opts ? opts.filename : null;
    let contentType = opts && 'contentType' in opts ? opts.contentType : null;
    this[_isFinalized] = false;
    this[field$] = field;
    this[length$] = length;
    this[filename$] = filename;
    this[_stream] = utils.toByteStream(stream);
    this[contentType$] = (t0 = contentType, t0 == null ? new media_type.MediaType.new("application", "octet-stream") : t0);
    ;
  }).prototype = multipart_file.MultipartFile.prototype;
  dart.addTypeTests(multipart_file.MultipartFile);
  dart.addTypeCaches(multipart_file.MultipartFile);
  dart.setMethodSignature(multipart_file.MultipartFile, () => ({
    __proto__: dart.getMethods(multipart_file.MultipartFile.__proto__),
    finalize: dart.fnType(dart.legacy(byte_stream.ByteStream), [])
  }));
  dart.setGetterSignature(multipart_file.MultipartFile, () => ({
    __proto__: dart.getGetters(multipart_file.MultipartFile.__proto__),
    isFinalized: dart.legacy(core.bool)
  }));
  dart.setLibraryUri(multipart_file.MultipartFile, L0);
  dart.setFieldSignature(multipart_file.MultipartFile, () => ({
    __proto__: dart.getFields(multipart_file.MultipartFile.__proto__),
    field: dart.finalFieldType(dart.legacy(core.String)),
    length: dart.finalFieldType(dart.legacy(core.int)),
    filename: dart.finalFieldType(dart.legacy(core.String)),
    contentType: dart.finalFieldType(dart.legacy(media_type.MediaType)),
    [_stream]: dart.finalFieldType(dart.legacy(byte_stream.ByteStream)),
    [_isFinalized]: dart.fieldType(dart.legacy(core.bool))
  }));
  http.head = function head(url, opts) {
    let headers = opts && 'headers' in opts ? opts.headers : null;
    return http._withClient(ResponseL(), dart.fn(client => client.head(url, {headers: headers}), ClientLToFutureLOfResponseL()));
  };
  http.get = function get(url, opts) {
    let headers = opts && 'headers' in opts ? opts.headers : null;
    return http._withClient(ResponseL(), dart.fn(client => client.get(url, {headers: headers}), ClientLToFutureLOfResponseL()));
  };
  http.post = function post(url, opts) {
    let headers = opts && 'headers' in opts ? opts.headers : null;
    let body = opts && 'body' in opts ? opts.body : null;
    let encoding = opts && 'encoding' in opts ? opts.encoding : null;
    return http._withClient(ResponseL(), dart.fn(client => client.post(url, {headers: headers, body: body, encoding: encoding}), ClientLToFutureLOfResponseL()));
  };
  http.put = function put(url, opts) {
    let headers = opts && 'headers' in opts ? opts.headers : null;
    let body = opts && 'body' in opts ? opts.body : null;
    let encoding = opts && 'encoding' in opts ? opts.encoding : null;
    return http._withClient(ResponseL(), dart.fn(client => client.put(url, {headers: headers, body: body, encoding: encoding}), ClientLToFutureLOfResponseL()));
  };
  http.patch = function patch(url, opts) {
    let headers = opts && 'headers' in opts ? opts.headers : null;
    let body = opts && 'body' in opts ? opts.body : null;
    let encoding = opts && 'encoding' in opts ? opts.encoding : null;
    return http._withClient(ResponseL(), dart.fn(client => client.patch(url, {headers: headers, body: body, encoding: encoding}), ClientLToFutureLOfResponseL()));
  };
  http.delete = function $delete(url, opts) {
    let headers = opts && 'headers' in opts ? opts.headers : null;
    return http._withClient(ResponseL(), dart.fn(client => client.delete(url, {headers: headers}), ClientLToFutureLOfResponseL()));
  };
  http.read = function read(url, opts) {
    let headers = opts && 'headers' in opts ? opts.headers : null;
    return http._withClient(StringL(), dart.fn(client => client.read(url, {headers: headers}), ClientLToFutureLOfStringL()));
  };
  http.readBytes = function readBytes(url, opts) {
    let headers = opts && 'headers' in opts ? opts.headers : null;
    return http._withClient(Uint8ListL(), dart.fn(client => client.readBytes(url, {headers: headers}), ClientLToFutureLOfUint8ListL()));
  };
  http._withClient = function _withClient(T, fn) {
    return async.async(dart.legacy(T), function* _withClient() {
      let client = client$.Client.new();
      try {
        return yield fn(client);
      } finally {
        client.close();
      }
    });
  };
  var _controller = dart.privateName(streamed_request, "_controller");
  streamed_request.StreamedRequest = class StreamedRequest extends base_request.BaseRequest {
    get sink() {
      return this[_controller].sink;
    }
    finalize() {
      super.finalize();
      return new byte_stream.ByteStream.new(this[_controller].stream);
    }
  };
  (streamed_request.StreamedRequest.new = function(method, url) {
    this[_controller] = StreamControllerOfListLOfintL().new({sync: true});
    streamed_request.StreamedRequest.__proto__.new.call(this, method, url);
    ;
  }).prototype = streamed_request.StreamedRequest.prototype;
  dart.addTypeTests(streamed_request.StreamedRequest);
  dart.addTypeCaches(streamed_request.StreamedRequest);
  dart.setGetterSignature(streamed_request.StreamedRequest, () => ({
    __proto__: dart.getGetters(streamed_request.StreamedRequest.__proto__),
    sink: dart.legacy(async.EventSink$(dart.legacy(core.List$(dart.legacy(core.int)))))
  }));
  dart.setLibraryUri(streamed_request.StreamedRequest, L1);
  dart.setFieldSignature(streamed_request.StreamedRequest, () => ({
    __proto__: dart.getFields(streamed_request.StreamedRequest.__proto__),
    [_controller]: dart.finalFieldType(dart.legacy(async.StreamController$(dart.legacy(core.List$(dart.legacy(core.int))))))
  }));
  var _headerForField = dart.privateName(multipart_request, "_headerForField");
  var _headerForFile = dart.privateName(multipart_request, "_headerForFile");
  var _boundaryString = dart.privateName(multipart_request, "_boundaryString");
  var _finalize = dart.privateName(multipart_request, "_finalize");
  var C0;
  var _browserEncode = dart.privateName(multipart_request, "_browserEncode");
  var fields = dart.privateName(multipart_request, "MultipartRequest.fields");
  var files = dart.privateName(multipart_request, "MultipartRequest.files");
  multipart_request.MultipartRequest = class MultipartRequest extends base_request.BaseRequest {
    get fields() {
      return this[fields];
    }
    set fields(value) {
      super.fields = value;
    }
    get files() {
      return this[files];
    }
    set files(value) {
      super.files = value;
    }
    get contentLength() {
      let length = 0;
      this.fields[$forEach](dart.fn((name, value) => {
        length = length + ("--".length + 70 + "\r\n".length + dart.notNull(convert.utf8.encode(this[_headerForField](name, value))[$length]) + dart.notNull(convert.utf8.encode(value)[$length]) + "\r\n".length);
      }, StringLAndStringLToNullN()));
      for (let file of this.files) {
        length = length + ("--".length + 70 + "\r\n".length + dart.notNull(convert.utf8.encode(this[_headerForFile](file))[$length]) + dart.notNull(file.length) + "\r\n".length);
      }
      return length + "--".length + 70 + "--\r\n".length;
    }
    set contentLength(value) {
      dart.throw(new core.UnsupportedError.new("Cannot set the contentLength property of " + "multipart requests."));
    }
    finalize() {
      let boundary = this[_boundaryString]();
      this.headers[$_set]("content-type", "multipart/form-data; boundary=" + dart.str(boundary));
      super.finalize();
      return new byte_stream.ByteStream.new(this[_finalize](boundary));
    }
    [_finalize](boundary) {
      return new (_AsyncStarImplOfListLOfintL()).new((function* _finalize(stream) {
        let line = C0 || CT.C0;
        let separator = convert.utf8.encode("--" + dart.str(boundary) + "\r\n");
        let close = convert.utf8.encode("--" + dart.str(boundary) + "--\r\n");
        for (let field of this.fields[$entries]) {
          if (stream.add(separator)) return;
          yield;
          if (stream.add(convert.utf8.encode(this[_headerForField](field.key, field.value)))) return;
          yield;
          if (stream.add(convert.utf8.encode(field.value))) return;
          yield;
          if (stream.add(line)) return;
          yield;
        }
        for (let file of this.files) {
          if (stream.add(separator)) return;
          yield;
          if (stream.add(convert.utf8.encode(this[_headerForFile](file)))) return;
          yield;
          if (stream.addStream(file.finalize())) return;
          yield;
          if (stream.add(line)) return;
          yield;
        }
        if (stream.add(close)) return;
        yield;
      }).bind(this)).stream;
    }
    [_headerForField](name, value) {
      let header = "content-disposition: form-data; name=\"" + dart.str(this[_browserEncode](name)) + "\"";
      if (!dart.test(utils.isPlainAscii(value))) {
        header = header + "\r\n" + "content-type: text/plain; charset=utf-8\r\n" + "content-transfer-encoding: binary";
      }
      return header + "\r\n\r\n";
    }
    [_headerForFile](file) {
      let header = "content-type: " + dart.str(file.contentType) + "\r\n" + "content-disposition: form-data; name=\"" + dart.str(this[_browserEncode](file.field)) + "\"";
      if (file.filename != null) {
        header = header + "; filename=\"" + dart.str(this[_browserEncode](file.filename)) + "\"";
      }
      return header + "\r\n\r\n";
    }
    [_browserEncode](value) {
      return value[$replaceAll](multipart_request._newlineRegExp, "%0D%0A")[$replaceAll]("\"", "%22");
    }
    [_boundaryString]() {
      let prefix = "dart-http-boundary-";
      let list = ListOfintL().generate(70 - prefix.length, dart.fn(index => boundary_characters.BOUNDARY_CHARACTERS[$_get](multipart_request.MultipartRequest._random.nextInt(boundary_characters.BOUNDARY_CHARACTERS[$length])), intLTointL()), {growable: false});
      return prefix + dart.str(core.String.fromCharCodes(list));
    }
  };
  (multipart_request.MultipartRequest.new = function(method, url) {
    this[fields] = new (IdentityMapOfStringL$StringL()).new();
    this[files] = JSArrayOfMultipartFileL().of([]);
    multipart_request.MultipartRequest.__proto__.new.call(this, method, url);
    ;
  }).prototype = multipart_request.MultipartRequest.prototype;
  dart.addTypeTests(multipart_request.MultipartRequest);
  dart.addTypeCaches(multipart_request.MultipartRequest);
  dart.setMethodSignature(multipart_request.MultipartRequest, () => ({
    __proto__: dart.getMethods(multipart_request.MultipartRequest.__proto__),
    [_finalize]: dart.fnType(dart.legacy(async.Stream$(dart.legacy(core.List$(dart.legacy(core.int))))), [dart.legacy(core.String)]),
    [_headerForField]: dart.fnType(dart.legacy(core.String), [dart.legacy(core.String), dart.legacy(core.String)]),
    [_headerForFile]: dart.fnType(dart.legacy(core.String), [dart.legacy(multipart_file.MultipartFile)]),
    [_browserEncode]: dart.fnType(dart.legacy(core.String), [dart.legacy(core.String)]),
    [_boundaryString]: dart.fnType(dart.legacy(core.String), [])
  }));
  dart.setLibraryUri(multipart_request.MultipartRequest, L2);
  dart.setFieldSignature(multipart_request.MultipartRequest, () => ({
    __proto__: dart.getFields(multipart_request.MultipartRequest.__proto__),
    fields: dart.finalFieldType(dart.legacy(core.Map$(dart.legacy(core.String), dart.legacy(core.String)))),
    files: dart.finalFieldType(dart.legacy(core.List$(dart.legacy(multipart_file.MultipartFile))))
  }));
  dart.defineLazy(multipart_request.MultipartRequest, {
    /*multipart_request.MultipartRequest._boundaryLength*/get _boundaryLength() {
      return 70;
    },
    /*multipart_request.MultipartRequest._random*/get _random() {
      return math.Random.new();
    }
  }, true);
  dart.defineLazy(multipart_request, {
    /*multipart_request._newlineRegExp*/get _newlineRegExp() {
      return core.RegExp.new("\\r\\n|\\r|\\n");
    }
  }, true);
  var C1;
  dart.defineLazy(boundary_characters, {
    /*boundary_characters.BOUNDARY_CHARACTERS*/get BOUNDARY_CHARACTERS() {
      return C1 || CT.C1;
    }
  }, true);
  dart.trackLibraries("packages/http/http", {
    "package:http/src/multipart_file_stub.dart": multipart_file_stub,
    "package:http/src/multipart_file.dart": multipart_file,
    "package:http/http.dart": http,
    "package:http/src/streamed_request.dart": streamed_request,
    "package:http/src/multipart_request.dart": multipart_request,
    "package:http/src/boundary_characters.dart": boundary_characters
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["src/multipart_file_stub.dart","src/multipart_file.dart","http.dart","src/streamed_request.dart","src/multipart_request.dart","src/boundary_characters.dart"],"names":[],"mappings":"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","file":"http.unsound.ddc.js"}');
  // Exports:
  return {
    src__multipart_file_stub: multipart_file_stub,
    src__multipart_file: multipart_file,
    http: http,
    src__streamed_request: streamed_request,
    src__multipart_request: multipart_request,
    src__boundary_characters: boundary_characters
  };
}));

//# sourceMappingURL=http.unsound.ddc.js.map

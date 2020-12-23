define(['dart_sdk', 'packages/http/src/base_client'], (function load__packages__googleapis_auth__src__crypto__asn1(dart_sdk, packages__http__src__base_client) {
  'use strict';
  const core = dart_sdk.core;
  const async = dart_sdk.async;
  const _interceptors = dart_sdk._interceptors;
  const _native_typed_data = dart_sdk._native_typed_data;
  const typed_data = dart_sdk.typed_data;
  const convert = dart_sdk.convert;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const base_client = packages__http__src__base_client.src__base_client;
  const client = packages__http__src__base_client.src__client;
  const streamed_response = packages__http__src__base_client.src__streamed_response;
  const base_request = packages__http__src__base_client.src__base_request;
  const byte_stream = packages__http__src__base_client.src__byte_stream;
  var http_client_base = Object.create(dart.library);
  var rsa = Object.create(dart.library);
  var utils = Object.create(dart.library);
  var asn1 = Object.create(dart.library);
  var pem = Object.create(dart.library);
  var $length = dartx.length;
  var $_get = dartx._get;
  var $_set = dartx._set;
  var $buffer = dartx.buffer;
  var $sublist = dartx.sublist;
  var $getUint8 = dartx.getUint8;
  var $add = dartx.add;
  var $trim = dartx.trim;
  var $map = dartx.map;
  var $isNotEmpty = dartx.isNotEmpty;
  var $where = dartx.where;
  var $toList = dartx.toList;
  var $first = dartx.first;
  var $startsWith = dartx.startsWith;
  var $last = dartx.last;
  var $join = dartx.join;
  var $take = dartx.take;
  var intL = () => (intL = dart.constFn(dart.legacy(core.int)))();
  var ListOfintL = () => (ListOfintL = dart.constFn(core.List$(intL())))();
  var ListLOfintL = () => (ListLOfintL = dart.constFn(dart.legacy(ListOfintL())))();
  var StreamOfListLOfintL = () => (StreamOfListLOfintL = dart.constFn(async.Stream$(ListLOfintL())))();
  var JSArrayOfListLOfintL = () => (JSArrayOfListLOfintL = dart.constFn(_interceptors.JSArray$(ListLOfintL())))();
  var StringL = () => (StringL = dart.constFn(dart.legacy(core.String)))();
  var StringLToNullN = () => (StringLToNullN = dart.constFn(dart.fnType(core.Null, [StringL()])))();
  var intLToNullN = () => (intLToNullN = dart.constFn(dart.fnType(core.Null, [intL()])))();
  var intLToListLOfintL = () => (intLToListLOfintL = dart.constFn(dart.fnType(ListLOfintL(), [intL()])))();
  var VoidTointL = () => (VoidTointL = dart.constFn(dart.fnType(intL(), [])))();
  var VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  var ASN1ObjectL = () => (ASN1ObjectL = dart.constFn(dart.legacy(asn1.ASN1Object)))();
  var JSArrayOfASN1ObjectL = () => (JSArrayOfASN1ObjectL = dart.constFn(_interceptors.JSArray$(ASN1ObjectL())))();
  var VoidToASN1ObjectL = () => (VoidToASN1ObjectL = dart.constFn(dart.fnType(ASN1ObjectL(), [])))();
  var StringLToStringL = () => (StringLToStringL = dart.constFn(dart.fnType(StringL(), [StringL()])))();
  var boolL = () => (boolL = dart.constFn(dart.legacy(core.bool)))();
  var StringLToboolL = () => (StringLToboolL = dart.constFn(dart.fnType(boolL(), [StringL()])))();
  var ASN1IntegerL = () => (ASN1IntegerL = dart.constFn(dart.legacy(asn1.ASN1Integer)))();
  var ASN1ObjectLToASN1IntegerL = () => (ASN1ObjectLToASN1IntegerL = dart.constFn(dart.fnType(ASN1IntegerL(), [ASN1ObjectL()])))();
  var RSAPrivateKeyL = () => (RSAPrivateKeyL = dart.constFn(dart.legacy(rsa.RSAPrivateKey)))();
  var ASN1SequenceL = () => (ASN1SequenceL = dart.constFn(dart.legacy(asn1.ASN1Sequence)))();
  var ASN1SequenceLToRSAPrivateKeyL = () => (ASN1SequenceLToRSAPrivateKeyL = dart.constFn(dart.fnType(RSAPrivateKeyL(), [ASN1SequenceL()])))();
  var ASN1OctetStringL = () => (ASN1OctetStringL = dart.constFn(dart.legacy(asn1.ASN1OctetString)))();
  var Uint8ListL = () => (Uint8ListL = dart.constFn(dart.legacy(typed_data.Uint8List)))();
  const CT = Object.create(null);
  var L2 = "package:googleapis_auth/src/crypto/asn1.dart";
  var L0 = "package:googleapis_auth/src/http_client_base.dart";
  var L1 = "package:googleapis_auth/src/crypto/rsa.dart";
  var _isClosed = dart.privateName(http_client_base, "_isClosed");
  var baseClient$ = dart.privateName(http_client_base, "DelegatingClient.baseClient");
  var closeUnderlyingClient$ = dart.privateName(http_client_base, "DelegatingClient.closeUnderlyingClient");
  http_client_base.DelegatingClient = class DelegatingClient extends base_client.BaseClient {
    get baseClient() {
      return this[baseClient$];
    }
    set baseClient(value) {
      super.baseClient = value;
    }
    get closeUnderlyingClient() {
      return this[closeUnderlyingClient$];
    }
    set closeUnderlyingClient(value) {
      super.closeUnderlyingClient = value;
    }
    close() {
      if (dart.test(this[_isClosed])) {
        dart.throw(new core.StateError.new("Cannot close a HTTP client more than once."));
      }
      this[_isClosed] = true;
      super.close();
      if (dart.test(this.closeUnderlyingClient)) {
        this.baseClient.close();
      }
    }
  };
  (http_client_base.DelegatingClient.new = function(baseClient, opts) {
    let closeUnderlyingClient = opts && 'closeUnderlyingClient' in opts ? opts.closeUnderlyingClient : true;
    this[_isClosed] = false;
    this[baseClient$] = baseClient;
    this[closeUnderlyingClient$] = closeUnderlyingClient;
    ;
  }).prototype = http_client_base.DelegatingClient.prototype;
  dart.addTypeTests(http_client_base.DelegatingClient);
  dart.addTypeCaches(http_client_base.DelegatingClient);
  dart.setLibraryUri(http_client_base.DelegatingClient, L0);
  dart.setFieldSignature(http_client_base.DelegatingClient, () => ({
    __proto__: dart.getFields(http_client_base.DelegatingClient.__proto__),
    baseClient: dart.finalFieldType(dart.legacy(client.Client)),
    closeUnderlyingClient: dart.finalFieldType(dart.legacy(core.bool)),
    [_isClosed]: dart.fieldType(dart.legacy(core.bool))
  }));
  var _refCount = dart.privateName(http_client_base, "_refCount");
  var _ensureClientIsOpen = dart.privateName(http_client_base, "_ensureClientIsOpen");
  http_client_base.RefCountedClient = class RefCountedClient extends http_client_base.DelegatingClient {
    send(request) {
      this[_ensureClientIsOpen]();
      return this.baseClient.send(request);
    }
    acquire() {
      this[_ensureClientIsOpen]();
      this[_refCount] = dart.notNull(this[_refCount]) + 1;
    }
    release() {
      this[_ensureClientIsOpen]();
      this[_refCount] = dart.notNull(this[_refCount]) - 1;
      if (this[_refCount] === 0) {
        super.close();
      }
    }
    close() {
      this.release();
    }
    [_ensureClientIsOpen]() {
      if (dart.notNull(this[_refCount]) <= 0) {
        dart.throw(new core.StateError.new("This reference counted HTTP client has reached a count of zero and " + "can no longer be used for making HTTP requests."));
      }
    }
  };
  (http_client_base.RefCountedClient.new = function(baseClient, opts) {
    let initialRefCount = opts && 'initialRefCount' in opts ? opts.initialRefCount : 1;
    this[_refCount] = initialRefCount;
    http_client_base.RefCountedClient.__proto__.new.call(this, baseClient, {closeUnderlyingClient: true});
    if (this[_refCount] == null || dart.notNull(this[_refCount]) <= 0) {
      dart.throw(new core.ArgumentError.new("A reference count of " + dart.str(initialRefCount) + " is invalid."));
    }
  }).prototype = http_client_base.RefCountedClient.prototype;
  dart.addTypeTests(http_client_base.RefCountedClient);
  dart.addTypeCaches(http_client_base.RefCountedClient);
  dart.setMethodSignature(http_client_base.RefCountedClient, () => ({
    __proto__: dart.getMethods(http_client_base.RefCountedClient.__proto__),
    send: dart.fnType(dart.legacy(async.Future$(dart.legacy(streamed_response.StreamedResponse))), [dart.legacy(base_request.BaseRequest)]),
    acquire: dart.fnType(dart.void, []),
    release: dart.fnType(dart.void, []),
    [_ensureClientIsOpen]: dart.fnType(dart.void, [])
  }));
  dart.setLibraryUri(http_client_base.RefCountedClient, L0);
  dart.setFieldSignature(http_client_base.RefCountedClient, () => ({
    __proto__: dart.getFields(http_client_base.RefCountedClient.__proto__),
    [_refCount]: dart.fieldType(dart.legacy(core.int))
  }));
  var _stream = dart.privateName(http_client_base, "_stream");
  http_client_base.RequestImpl = class RequestImpl extends base_request.BaseRequest {
    finalize() {
      super.finalize();
      if (this[_stream] == null) {
        return null;
      }
      return new byte_stream.ByteStream.new(this[_stream]);
    }
  };
  (http_client_base.RequestImpl.new = function(method, url, stream = null) {
    this[_stream] = stream == null ? StreamOfListLOfintL().fromIterable(JSArrayOfListLOfintL().of([])) : stream;
    http_client_base.RequestImpl.__proto__.new.call(this, method, url);
    ;
  }).prototype = http_client_base.RequestImpl.prototype;
  dart.addTypeTests(http_client_base.RequestImpl);
  dart.addTypeCaches(http_client_base.RequestImpl);
  dart.setLibraryUri(http_client_base.RequestImpl, L0);
  dart.setFieldSignature(http_client_base.RequestImpl, () => ({
    __proto__: dart.getFields(http_client_base.RequestImpl.__proto__),
    [_stream]: dart.finalFieldType(dart.legacy(async.Stream$(dart.legacy(core.List$(dart.legacy(core.int))))))
  }));
  http_client_base.nonClosingClient = function nonClosingClient(baseClient) {
    return new http_client_base.RefCountedClient.new(baseClient, {initialRefCount: 2});
  };
  var p$ = dart.privateName(rsa, "RSAPrivateKey.p");
  var q$ = dart.privateName(rsa, "RSAPrivateKey.q");
  var n$ = dart.privateName(rsa, "RSAPrivateKey.n");
  var e$ = dart.privateName(rsa, "RSAPrivateKey.e");
  var d$ = dart.privateName(rsa, "RSAPrivateKey.d");
  var dmp1$ = dart.privateName(rsa, "RSAPrivateKey.dmp1");
  var dmq1$ = dart.privateName(rsa, "RSAPrivateKey.dmq1");
  var coeff$ = dart.privateName(rsa, "RSAPrivateKey.coeff");
  rsa.RSAPrivateKey = class RSAPrivateKey extends core.Object {
    get p() {
      return this[p$];
    }
    set p(value) {
      super.p = value;
    }
    get q() {
      return this[q$];
    }
    set q(value) {
      super.q = value;
    }
    get n() {
      return this[n$];
    }
    set n(value) {
      super.n = value;
    }
    get e() {
      return this[e$];
    }
    set e(value) {
      super.e = value;
    }
    get d() {
      return this[d$];
    }
    set d(value) {
      super.d = value;
    }
    get dmp1() {
      return this[dmp1$];
    }
    set dmp1(value) {
      super.dmp1 = value;
    }
    get dmq1() {
      return this[dmq1$];
    }
    set dmq1(value) {
      super.dmq1 = value;
    }
    get coeff() {
      return this[coeff$];
    }
    set coeff(value) {
      super.coeff = value;
    }
    get bitLength() {
      return this.n.bitLength;
    }
  };
  (rsa.RSAPrivateKey.new = function(n, e, d, p, q, dmp1, dmq1, coeff) {
    this[n$] = n;
    this[e$] = e;
    this[d$] = d;
    this[p$] = p;
    this[q$] = q;
    this[dmp1$] = dmp1;
    this[dmq1$] = dmq1;
    this[coeff$] = coeff;
    ;
  }).prototype = rsa.RSAPrivateKey.prototype;
  dart.addTypeTests(rsa.RSAPrivateKey);
  dart.addTypeCaches(rsa.RSAPrivateKey);
  dart.setGetterSignature(rsa.RSAPrivateKey, () => ({
    __proto__: dart.getGetters(rsa.RSAPrivateKey.__proto__),
    bitLength: dart.legacy(core.int)
  }));
  dart.setLibraryUri(rsa.RSAPrivateKey, L1);
  dart.setFieldSignature(rsa.RSAPrivateKey, () => ({
    __proto__: dart.getFields(rsa.RSAPrivateKey.__proto__),
    p: dart.finalFieldType(dart.legacy(core.BigInt)),
    q: dart.finalFieldType(dart.legacy(core.BigInt)),
    n: dart.finalFieldType(dart.legacy(core.BigInt)),
    e: dart.finalFieldType(dart.legacy(core.BigInt)),
    d: dart.finalFieldType(dart.legacy(core.BigInt)),
    dmp1: dart.finalFieldType(dart.legacy(core.BigInt)),
    dmq1: dart.finalFieldType(dart.legacy(core.BigInt)),
    coeff: dart.finalFieldType(dart.legacy(core.BigInt))
  }));
  rsa.RSAAlgorithm = class RSAAlgorithm extends core.Object {
    static encrypt(key, bytes, intendedLength) {
      let message = rsa.RSAAlgorithm.bytes2BigInt(bytes);
      let encryptedMessage = rsa.RSAAlgorithm._encryptInteger(key, message);
      return rsa.RSAAlgorithm.integer2Bytes(encryptedMessage, intendedLength);
    }
    static _encryptInteger(key, x) {
      let xp = rsa.RSAAlgorithm._modPow(x['%'](key.p), key.dmp1, key.p);
      let xq = rsa.RSAAlgorithm._modPow(x['%'](key.q), key.dmq1, key.q);
      while (dart.test(xp['<'](xq))) {
        xp = xp['+'](key.p);
      }
      return xp['-'](xq)['*'](key.coeff)['%'](key.p)['*'](key.q)['+'](xq);
    }
    static _modPow(b, e, m) {
      if (dart.test(e['<'](core.BigInt.one))) {
        return core.BigInt.one;
      }
      if (dart.test(b['<'](core.BigInt.zero)) || dart.test(b['>'](m))) {
        b = b['%'](m);
      }
      let r = core.BigInt.one;
      while (dart.test(e['>'](core.BigInt.zero))) {
        if (dart.test(e['&'](core.BigInt.one)['>'](core.BigInt.zero))) {
          r = r['*'](b)['%'](m);
        }
        e = e['>>'](1);
        b = b['*'](b)['%'](m);
      }
      return r;
    }
    static bytes2BigInt(bytes) {
      let number = core.BigInt.zero;
      for (let i = 0; i < dart.notNull(bytes[$length]); i = i + 1) {
        number = number['<<'](8)['|'](core._BigIntImpl.from(bytes[$_get](i)));
      }
      return number;
    }
    static integer2Bytes(integer, intendedLength) {
      if (dart.test(integer['<'](core.BigInt.one))) {
        dart.throw(new core.ArgumentError.new("Only positive integers are supported."));
      }
      let bytes = _native_typed_data.NativeUint8List.new(intendedLength);
      for (let i = dart.notNull(bytes[$length]) - 1; i >= 0; i = i - 1) {
        bytes[$_set](i, integer['&'](rsa._bigIntFF).toInt());
        integer = integer['>>'](8);
      }
      return bytes;
    }
  };
  (rsa.RSAAlgorithm.new = function() {
    ;
  }).prototype = rsa.RSAAlgorithm.prototype;
  dart.addTypeTests(rsa.RSAAlgorithm);
  dart.addTypeCaches(rsa.RSAAlgorithm);
  dart.setLibraryUri(rsa.RSAAlgorithm, L1);
  dart.defineLazy(rsa, {
    /*rsa._bigIntFF*/get _bigIntFF() {
      return core._BigIntImpl.from(255);
    }
  }, true);
  utils.expiryDate = function expiryDate(seconds) {
    return new core.DateTime.now().toUtc().add(new core.Duration.new({seconds: dart.notNull(seconds) - 20}));
  };
  dart.defineLazy(utils, {
    /*utils.MAX_EXPECTED_TIMEDIFF_IN_SECONDS*/get MAX_EXPECTED_TIMEDIFF_IN_SECONDS() {
      return 20;
    },
    /*utils.CONTENT_TYPE_URLENCODED*/get CONTENT_TYPE_URLENCODED() {
      return "application/x-www-form-urlencoded; charset=utf-8";
    }
  }, true);
  asn1.ASN1Parser = class ASN1Parser extends core.Object {
    static parse(bytes) {
      function invalidFormat(msg) {
        dart.throw(new core.ArgumentError.new("Invalid DER encoding: " + dart.str(msg)));
      }
      dart.fn(invalidFormat, StringLToNullN());
      let data = typed_data.ByteData.view(bytes[$buffer]);
      let offset = 0;
      let end = bytes[$length];
      function checkNBytesAvailable(n) {
        if (offset + dart.notNull(n) > dart.notNull(end)) {
          invalidFormat("Tried to read more bytes than available.");
        }
      }
      dart.fn(checkNBytesAvailable, intLToNullN());
      function readBytes(n) {
        checkNBytesAvailable(n);
        let integerBytes = bytes[$sublist](offset, offset + dart.notNull(n));
        offset = offset + dart.notNull(n);
        return integerBytes;
      }
      dart.fn(readBytes, intLToListLOfintL());
      function readEncodedLength() {
        let t0, t0$;
        checkNBytesAvailable(1);
        let lengthByte = data[$getUint8]((t0 = offset, offset = t0 + 1, t0));
        if (dart.notNull(lengthByte) < 128) {
          return lengthByte;
        }
        let countLengthBytes = dart.notNull(lengthByte) & 127;
        checkNBytesAvailable(countLengthBytes);
        let length = 0;
        while (countLengthBytes > 0) {
          length = (length << 8 | dart.notNull(data[$getUint8]((t0$ = offset, offset = t0$ + 1, t0$)))) >>> 0;
          countLengthBytes = countLengthBytes - 1;
        }
        return length;
      }
      dart.fn(readEncodedLength, VoidTointL());
      function readNullBytes() {
        let t0;
        checkNBytesAvailable(1);
        let nullByte = data[$getUint8]((t0 = offset, offset = t0 + 1, t0));
        if (nullByte !== 0) {
          invalidFormat("Null byte expect, but was: " + dart.str(nullByte) + ".");
        }
      }
      dart.fn(readNullBytes, VoidTovoid());
      function decodeObject() {
        let t0;
        checkNBytesAvailable(1);
        let tag = bytes[$_get]((t0 = offset, offset = t0 + 1, t0));
        switch (tag) {
          case 2:
          {
            let size = readEncodedLength();
            return new asn1.ASN1Integer.new(rsa.RSAAlgorithm.bytes2BigInt(readBytes(size)));
          }
          case 4:
          {
            let size = readEncodedLength();
            return new asn1.ASN1OctetString.new(readBytes(size));
          }
          case 5:
          {
            readNullBytes();
            return new asn1.ASN1Null.new();
          }
          case 6:
          {
            let size = readEncodedLength();
            return new asn1.ASN1ObjectIdentifier.new(readBytes(size));
          }
          case 48:
          {
            let lengthInBytes = readEncodedLength();
            if (offset + dart.notNull(lengthInBytes) > dart.notNull(end)) {
              invalidFormat("Tried to read more bytes than available.");
            }
            let endOfSequence = offset + dart.notNull(lengthInBytes);
            let objects = JSArrayOfASN1ObjectL().of([]);
            while (offset < endOfSequence) {
              objects[$add](decodeObject());
            }
            return new asn1.ASN1Sequence.new(objects);
          }
          default:
          {
            invalidFormat("Unexpected tag " + dart.str(tag) + " at offset " + dart.str(offset - 1) + " (end: " + dart.str(end) + ").");
          }
        }
        return null;
      }
      dart.fn(decodeObject, VoidToASN1ObjectL());
      let obj = decodeObject();
      if (offset !== bytes[$length]) {
        dart.throw(new core.ArgumentError.new("More bytes than expected in ASN1 encoding."));
      }
      return obj;
    }
  };
  (asn1.ASN1Parser.new = function() {
    ;
  }).prototype = asn1.ASN1Parser.prototype;
  dart.addTypeTests(asn1.ASN1Parser);
  dart.addTypeCaches(asn1.ASN1Parser);
  dart.setLibraryUri(asn1.ASN1Parser, L2);
  dart.defineLazy(asn1.ASN1Parser, {
    /*asn1.ASN1Parser.INTEGER_TAG*/get INTEGER_TAG() {
      return 2;
    },
    /*asn1.ASN1Parser.OCTET_STRING_TAG*/get OCTET_STRING_TAG() {
      return 4;
    },
    /*asn1.ASN1Parser.NULL_TAG*/get NULL_TAG() {
      return 5;
    },
    /*asn1.ASN1Parser.OBJECT_ID_TAG*/get OBJECT_ID_TAG() {
      return 6;
    },
    /*asn1.ASN1Parser.SEQUENCE_TAG*/get SEQUENCE_TAG() {
      return 48;
    }
  }, true);
  asn1.ASN1Object = class ASN1Object extends core.Object {};
  (asn1.ASN1Object.new = function() {
    ;
  }).prototype = asn1.ASN1Object.prototype;
  dart.addTypeTests(asn1.ASN1Object);
  dart.addTypeCaches(asn1.ASN1Object);
  dart.setLibraryUri(asn1.ASN1Object, L2);
  var objects$ = dart.privateName(asn1, "ASN1Sequence.objects");
  asn1.ASN1Sequence = class ASN1Sequence extends asn1.ASN1Object {
    get objects() {
      return this[objects$];
    }
    set objects(value) {
      super.objects = value;
    }
  };
  (asn1.ASN1Sequence.new = function(objects) {
    this[objects$] = objects;
    ;
  }).prototype = asn1.ASN1Sequence.prototype;
  dart.addTypeTests(asn1.ASN1Sequence);
  dart.addTypeCaches(asn1.ASN1Sequence);
  dart.setLibraryUri(asn1.ASN1Sequence, L2);
  dart.setFieldSignature(asn1.ASN1Sequence, () => ({
    __proto__: dart.getFields(asn1.ASN1Sequence.__proto__),
    objects: dart.finalFieldType(dart.legacy(core.List$(dart.legacy(asn1.ASN1Object))))
  }));
  var integer$ = dart.privateName(asn1, "ASN1Integer.integer");
  asn1.ASN1Integer = class ASN1Integer extends asn1.ASN1Object {
    get integer() {
      return this[integer$];
    }
    set integer(value) {
      super.integer = value;
    }
  };
  (asn1.ASN1Integer.new = function(integer) {
    this[integer$] = integer;
    ;
  }).prototype = asn1.ASN1Integer.prototype;
  dart.addTypeTests(asn1.ASN1Integer);
  dart.addTypeCaches(asn1.ASN1Integer);
  dart.setLibraryUri(asn1.ASN1Integer, L2);
  dart.setFieldSignature(asn1.ASN1Integer, () => ({
    __proto__: dart.getFields(asn1.ASN1Integer.__proto__),
    integer: dart.finalFieldType(dart.legacy(core.BigInt))
  }));
  var bytes$ = dart.privateName(asn1, "ASN1OctetString.bytes");
  asn1.ASN1OctetString = class ASN1OctetString extends asn1.ASN1Object {
    get bytes() {
      return this[bytes$];
    }
    set bytes(value) {
      super.bytes = value;
    }
  };
  (asn1.ASN1OctetString.new = function(bytes) {
    this[bytes$] = bytes;
    ;
  }).prototype = asn1.ASN1OctetString.prototype;
  dart.addTypeTests(asn1.ASN1OctetString);
  dart.addTypeCaches(asn1.ASN1OctetString);
  dart.setLibraryUri(asn1.ASN1OctetString, L2);
  dart.setFieldSignature(asn1.ASN1OctetString, () => ({
    __proto__: dart.getFields(asn1.ASN1OctetString.__proto__),
    bytes: dart.finalFieldType(dart.legacy(core.List$(dart.legacy(core.int))))
  }));
  var bytes$0 = dart.privateName(asn1, "ASN1ObjectIdentifier.bytes");
  asn1.ASN1ObjectIdentifier = class ASN1ObjectIdentifier extends asn1.ASN1Object {
    get bytes() {
      return this[bytes$0];
    }
    set bytes(value) {
      super.bytes = value;
    }
  };
  (asn1.ASN1ObjectIdentifier.new = function(bytes) {
    this[bytes$0] = bytes;
    ;
  }).prototype = asn1.ASN1ObjectIdentifier.prototype;
  dart.addTypeTests(asn1.ASN1ObjectIdentifier);
  dart.addTypeCaches(asn1.ASN1ObjectIdentifier);
  dart.setLibraryUri(asn1.ASN1ObjectIdentifier, L2);
  dart.setFieldSignature(asn1.ASN1ObjectIdentifier, () => ({
    __proto__: dart.getFields(asn1.ASN1ObjectIdentifier.__proto__),
    bytes: dart.finalFieldType(dart.legacy(core.List$(dart.legacy(core.int))))
  }));
  asn1.ASN1Null = class ASN1Null extends asn1.ASN1Object {};
  (asn1.ASN1Null.new = function() {
    ;
  }).prototype = asn1.ASN1Null.prototype;
  dart.addTypeTests(asn1.ASN1Null);
  dart.addTypeCaches(asn1.ASN1Null);
  dart.setLibraryUri(asn1.ASN1Null, L2);
  pem.keyFromString = function keyFromString(pemFileString) {
    if (pemFileString == null) {
      dart.throw(new core.ArgumentError.new("Argument must not be null."));
    }
    let bytes = pem._getBytesFromPEMString(pemFileString);
    return pem._extractRSAKeyFromDERBytes(bytes);
  };
  pem._getBytesFromPEMString = function _getBytesFromPEMString(pemString) {
    let lines = convert.LineSplitter.split(pemString)[$map](StringL(), dart.fn(line => line[$trim](), StringLToStringL()))[$where](dart.fn(line => line[$isNotEmpty], StringLToboolL()))[$toList]();
    if (dart.notNull(lines[$length]) < 2 || !lines[$first][$startsWith]("-----BEGIN") || !lines[$last][$startsWith]("-----END")) {
      dart.throw(new core.ArgumentError.new("The given string does not have the correct " + "begin/end markers expected in a PEM file."));
    }
    let base64 = lines[$sublist](1, dart.notNull(lines[$length]) - 1)[$join]("");
    return _native_typed_data.NativeUint8List.fromList(convert.base64Decode(base64));
  };
  pem._extractRSAKeyFromDERBytes = function _extractRSAKeyFromDERBytes(bytes) {
    function privateKeyFromSequence(asnSequence) {
      let objects = asnSequence.objects;
      let asnIntegers = objects[$take](9)[$map](ASN1IntegerL(), dart.fn(o => ASN1IntegerL().as(o), ASN1ObjectLToASN1IntegerL()))[$toList]();
      let version = asnIntegers[$first];
      if (!dart.equals(version.integer, core.BigInt.zero)) {
        dart.throw(new core.ArgumentError.new("Expected version 0, got: " + dart.str(version.integer) + "."));
      }
      let key = new rsa.RSAPrivateKey.new(asnIntegers[$_get](1).integer, asnIntegers[$_get](2).integer, asnIntegers[$_get](3).integer, asnIntegers[$_get](4).integer, asnIntegers[$_get](5).integer, asnIntegers[$_get](6).integer, asnIntegers[$_get](7).integer, asnIntegers[$_get](8).integer);
      let bitLength = key.bitLength;
      if (bitLength !== 1024 && bitLength !== 2048 && bitLength !== 4096) {
        dart.throw(new core.ArgumentError.new("The RSA modulus has a bit length of " + dart.str(bitLength) + ". " + "Only 1024, 2048 and 4096 are supported."));
      }
      return key;
    }
    dart.fn(privateKeyFromSequence, ASN1SequenceLToRSAPrivateKeyL());
    try {
      let asn = asn1.ASN1Parser.parse(bytes);
      if (ASN1SequenceL().is(asn)) {
        let objects = asn.objects;
        if (objects[$length] === 3 && ASN1OctetStringL().is(objects[$_get](2))) {
          let string = ASN1OctetStringL().as(objects[$_get](2));
          return privateKeyFromSequence(ASN1SequenceL().as(asn1.ASN1Parser.parse(Uint8ListL().as(string.bytes))));
        }
      }
      return privateKeyFromSequence(ASN1SequenceL().as(asn));
    } catch (e) {
      let error = dart.getThrown(e);
      dart.throw(new core.ArgumentError.new("Error while extracting private key from DER bytes: " + dart.str(error)));
    }
  };
  dart.trackLibraries("packages/googleapis_auth/src/crypto/asn1", {
    "package:googleapis_auth/src/http_client_base.dart": http_client_base,
    "package:googleapis_auth/src/crypto/rsa.dart": rsa,
    "package:googleapis_auth/src/utils.dart": utils,
    "package:googleapis_auth/src/crypto/asn1.dart": asn1,
    "package:googleapis_auth/src/crypto/pem.dart": pem
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["../http_client_base.dart","rsa.dart","../utils.dart","asn1.dart","pem.dart"],"names":[],"mappings":"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","file":"asn1.unsound.ddc.js"}');
  // Exports:
  return {
    src__http_client_base: http_client_base,
    src__crypto__rsa: rsa,
    src__utils: utils,
    src__crypto__asn1: asn1,
    src__crypto__pem: pem
  };
}));

//# sourceMappingURL=asn1.unsound.ddc.js.map

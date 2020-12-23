define(['dart_sdk', 'packages/grpc/src/client/call', 'packages/googleapis_auth/auth', 'packages/http/src/base_client', 'packages/crypto/crypto'], (function load__packages__grpc__src__auth__auth(dart_sdk, packages__grpc__src__client__call, packages__googleapis_auth__auth, packages__http__src__base_client, packages__crypto__crypto) {
  'use strict';
  const core = dart_sdk.core;
  const async = dart_sdk.async;
  const _interceptors = dart_sdk._interceptors;
  const convert = dart_sdk.convert;
  const _js_helper = dart_sdk._js_helper;
  const _native_typed_data = dart_sdk._native_typed_data;
  const typed_data = dart_sdk.typed_data;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const status = packages__grpc__src__client__call.src__shared__status;
  const call = packages__grpc__src__client__call.src__client__call;
  const auth = packages__googleapis_auth__auth.auth;
  const client = packages__http__src__base_client.src__client;
  const sha256 = packages__crypto__crypto.src__sha256;
  var auth$ = Object.create(dart.library);
  var rsa = Object.create(dart.library);
  var $_set = dartx._set;
  var $truncate = dartx.truncate;
  var $join = dartx.join;
  var $replaceAll = dartx.replaceAll;
  var $length = dartx.length;
  var $fillRange = dartx.fillRange;
  var $setRange = dartx.setRange;
  var $setAll = dartx.setAll;
  var $buffer = dartx.buffer;
  var $sublist = dartx.sublist;
  var $getUint8 = dartx.getUint8;
  var $_get = dartx._get;
  var $add = dartx.add;
  var dynamicToNullN = () => (dynamicToNullN = dart.constFn(dart.fnType(core.Null, [dart.dynamic])))();
  var StringL = () => (StringL = dart.constFn(dart.legacy(core.String)))();
  var MapOfStringL$StringL = () => (MapOfStringL$StringL = dart.constFn(core.Map$(StringL(), StringL())))();
  var MapLOfStringL$StringL = () => (MapLOfStringL$StringL = dart.constFn(dart.legacy(MapOfStringL$StringL())))();
  var MapLOfStringL$StringLAndStringLToFutureOrLOfvoid = () => (MapLOfStringL$StringLAndStringLToFutureOrLOfvoid = dart.constFn(dart.fnType(dart.void, [MapLOfStringL$StringL(), StringL()])))();
  var MapLOfStringL$StringLAndStringLToLFutureOrLOfvoid = () => (MapLOfStringL$StringLAndStringLToLFutureOrLOfvoid = dart.constFn(dart.legacy(MapLOfStringL$StringLAndStringLToFutureOrLOfvoid())))();
  var JSArrayOfMapLOfStringL$StringLAndStringLToLFutureOrLOfvoid = () => (JSArrayOfMapLOfStringL$StringLAndStringLToLFutureOrLOfvoid = dart.constFn(_interceptors.JSArray$(MapLOfStringL$StringLAndStringLToLFutureOrLOfvoid())))();
  var AccessCredentialsL = () => (AccessCredentialsL = dart.constFn(dart.legacy(auth.AccessCredentials)))();
  var AccessCredentialsLToNullN = () => (AccessCredentialsLToNullN = dart.constFn(dart.fnType(core.Null, [AccessCredentialsL()])))();
  var IdentityMapOfStringL$StringL = () => (IdentityMapOfStringL$StringL = dart.constFn(_js_helper.IdentityMap$(StringL(), StringL())))();
  var IdentityMapOfStringL$dynamic = () => (IdentityMapOfStringL$dynamic = dart.constFn(_js_helper.IdentityMap$(StringL(), dart.dynamic)))();
  var intL = () => (intL = dart.constFn(dart.legacy(core.int)))();
  var StringLToNullN = () => (StringLToNullN = dart.constFn(dart.fnType(core.Null, [StringL()])))();
  var intLToNullN = () => (intLToNullN = dart.constFn(dart.fnType(core.Null, [intL()])))();
  var ListOfintL = () => (ListOfintL = dart.constFn(core.List$(intL())))();
  var ListLOfintL = () => (ListLOfintL = dart.constFn(dart.legacy(ListOfintL())))();
  var intLToListLOfintL = () => (intLToListLOfintL = dart.constFn(dart.fnType(ListLOfintL(), [intL()])))();
  var VoidTointL = () => (VoidTointL = dart.constFn(dart.fnType(intL(), [])))();
  var VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  var ASN1ObjectL = () => (ASN1ObjectL = dart.constFn(dart.legacy(rsa.ASN1Object)))();
  var JSArrayOfASN1ObjectL = () => (JSArrayOfASN1ObjectL = dart.constFn(_interceptors.JSArray$(ASN1ObjectL())))();
  var VoidToASN1ObjectL = () => (VoidToASN1ObjectL = dart.constFn(dart.fnType(ASN1ObjectL(), [])))();
  const CT = Object.create(null);
  var L0 = "package:grpc/src/auth/auth.dart";
  var L1 = "package:grpc/src/auth/rsa.dart";
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.const({
        __proto__: core.Duration.prototype,
        [Duration__duration]: 30000000
      });
    },
    get C1() {
      return C1 = dart.constList([6, 9, 96, 134, 72, 1, 101, 3, 4, 2, 1], intL());
    }
  }, false);
  var _accessToken = dart.privateName(auth$, "_accessToken");
  var _lastUri = dart.privateName(auth$, "_lastUri");
  var _tokenExpiresSoon = dart.privateName(auth$, "_tokenExpiresSoon");
  auth$.BaseAuthenticator = class BaseAuthenticator extends core.Object {
    authenticate(metadata, uri) {
      return async.async(dart.void, (function* authenticate() {
        if (uri == null) {
          dart.throw(new status.GrpcError.unauthenticated("Credentials require secure transport."));
        }
        if (this[_accessToken] == null || dart.test(this[_accessToken].hasExpired) || uri != this[_lastUri]) {
          yield this.obtainAccessCredentials(uri);
          this[_lastUri] = uri;
        }
        let auth = dart.str(this[_accessToken].type) + " " + dart.str(this[_accessToken].data);
        metadata[$_set]("authorization", auth);
        if (dart.test(this[_tokenExpiresSoon])) {
          this.obtainAccessCredentials(this[_lastUri]).catchError(dart.fn(_ => {
          }, dynamicToNullN()));
        }
      }).bind(this));
    }
    get [_tokenExpiresSoon]() {
      return this[_accessToken].expiry.subtract(auth$._tokenExpirationThreshold).isBefore(new core.DateTime.now().toUtc());
    }
    get toCallOptions() {
      return call.CallOptions.new({providers: JSArrayOfMapLOfStringL$StringLAndStringLToLFutureOrLOfvoid().of([dart.bind(this, 'authenticate')])});
    }
  };
  (auth$.BaseAuthenticator.new = function() {
    this[_accessToken] = null;
    this[_lastUri] = null;
    ;
  }).prototype = auth$.BaseAuthenticator.prototype;
  dart.addTypeTests(auth$.BaseAuthenticator);
  dart.addTypeCaches(auth$.BaseAuthenticator);
  dart.setMethodSignature(auth$.BaseAuthenticator, () => ({
    __proto__: dart.getMethods(auth$.BaseAuthenticator.__proto__),
    authenticate: dart.fnType(dart.legacy(async.Future$(dart.void)), [dart.legacy(core.Map$(dart.legacy(core.String), dart.legacy(core.String))), dart.legacy(core.String)])
  }));
  dart.setGetterSignature(auth$.BaseAuthenticator, () => ({
    __proto__: dart.getGetters(auth$.BaseAuthenticator.__proto__),
    [_tokenExpiresSoon]: dart.legacy(core.bool),
    toCallOptions: dart.legacy(call.CallOptions)
  }));
  dart.setLibraryUri(auth$.BaseAuthenticator, L0);
  dart.setFieldSignature(auth$.BaseAuthenticator, () => ({
    __proto__: dart.getFields(auth$.BaseAuthenticator.__proto__),
    [_accessToken]: dart.fieldType(dart.legacy(auth.AccessToken)),
    [_lastUri]: dart.fieldType(dart.legacy(core.String))
  }));
  var _call = dart.privateName(auth$, "_call");
  auth$.HttpBasedAuthenticator = class HttpBasedAuthenticator extends auth$.BaseAuthenticator {
    obtainAccessCredentials(uri) {
      if (this[_call] == null) {
        let authClient = client.Client.new();
        this[_call] = this.obtainCredentialsWithClient(authClient, uri).then(dart.void, dart.fn(credentials => {
          this[_accessToken] = credentials.accessToken;
          this[_call] = null;
          authClient.close();
        }, AccessCredentialsLToNullN()));
      }
      return this[_call];
    }
  };
  (auth$.HttpBasedAuthenticator.new = function() {
    this[_call] = null;
    auth$.HttpBasedAuthenticator.__proto__.new.call(this);
    ;
  }).prototype = auth$.HttpBasedAuthenticator.prototype;
  dart.addTypeTests(auth$.HttpBasedAuthenticator);
  dart.addTypeCaches(auth$.HttpBasedAuthenticator);
  dart.setMethodSignature(auth$.HttpBasedAuthenticator, () => ({
    __proto__: dart.getMethods(auth$.HttpBasedAuthenticator.__proto__),
    obtainAccessCredentials: dart.fnType(dart.legacy(async.Future$(dart.void)), [dart.legacy(core.String)])
  }));
  dart.setLibraryUri(auth$.HttpBasedAuthenticator, L0);
  dart.setFieldSignature(auth$.HttpBasedAuthenticator, () => ({
    __proto__: dart.getFields(auth$.HttpBasedAuthenticator.__proto__),
    [_call]: dart.fieldType(dart.legacy(async.Future$(dart.void)))
  }));
  var _serviceAccountCredentials = dart.privateName(auth$, "_serviceAccountCredentials");
  var _projectId = dart.privateName(auth$, "_projectId");
  var _keyId = dart.privateName(auth$, "_keyId");
  auth$.JwtServiceAccountAuthenticator = class JwtServiceAccountAuthenticator extends auth$.BaseAuthenticator {
    get projectId() {
      return this[_projectId];
    }
    obtainAccessCredentials(uri) {
      return async.async(dart.void, (function* obtainAccessCredentials() {
        this[_accessToken] = auth$._jwtTokenFor(this[_serviceAccountCredentials], this[_keyId], uri);
      }).bind(this));
    }
  };
  (auth$.JwtServiceAccountAuthenticator.new = function(serviceAccountJson) {
    this[_serviceAccountCredentials] = null;
    this[_projectId] = null;
    this[_keyId] = null;
    auth$.JwtServiceAccountAuthenticator.__proto__.new.call(this);
    let serviceAccount = convert.jsonDecode(serviceAccountJson);
    this[_serviceAccountCredentials] = auth.ServiceAccountCredentials.fromJson(serviceAccount);
    this[_projectId] = StringL().as(dart.dsend(serviceAccount, '_get', ["project_id"]));
    this[_keyId] = StringL().as(dart.dsend(serviceAccount, '_get', ["private_key_id"]));
  }).prototype = auth$.JwtServiceAccountAuthenticator.prototype;
  dart.addTypeTests(auth$.JwtServiceAccountAuthenticator);
  dart.addTypeCaches(auth$.JwtServiceAccountAuthenticator);
  dart.setMethodSignature(auth$.JwtServiceAccountAuthenticator, () => ({
    __proto__: dart.getMethods(auth$.JwtServiceAccountAuthenticator.__proto__),
    obtainAccessCredentials: dart.fnType(dart.legacy(async.Future$(dart.void)), [dart.legacy(core.String)])
  }));
  dart.setGetterSignature(auth$.JwtServiceAccountAuthenticator, () => ({
    __proto__: dart.getGetters(auth$.JwtServiceAccountAuthenticator.__proto__),
    projectId: dart.legacy(core.String)
  }));
  dart.setLibraryUri(auth$.JwtServiceAccountAuthenticator, L0);
  dart.setFieldSignature(auth$.JwtServiceAccountAuthenticator, () => ({
    __proto__: dart.getFields(auth$.JwtServiceAccountAuthenticator.__proto__),
    [_serviceAccountCredentials]: dart.fieldType(dart.legacy(auth.ServiceAccountCredentials)),
    [_projectId]: dart.fieldType(dart.legacy(core.String)),
    [_keyId]: dart.fieldType(dart.legacy(core.String))
  }));
  auth$._jwtTokenFor = function _jwtTokenFor(credentials, keyId, uri, opts) {
    let t0;
    let user = opts && 'user' in opts ? opts.user : null;
    let scopes = opts && 'scopes' in opts ? opts.scopes : null;
    let timestamp = (dart.notNull(new core.DateTime.now().toUtc().millisecondsSinceEpoch) / 1000)[$truncate]() - 20;
    let expiry = timestamp + 3600;
    let header = new (IdentityMapOfStringL$StringL()).from(["alg", "RS256", "typ", "JWT"]);
    if (keyId != null) {
      header[$_set]("kid", keyId);
    }
    let claims = new (IdentityMapOfStringL$dynamic()).from(["iss", credentials.email, "aud", uri, "exp", expiry, "iat", timestamp, "sub", (t0 = user, t0 == null ? credentials.email : t0)]);
    if (scopes != null) {
      claims[$_set]("scope", scopes[$join](" "));
    }
    let headerBase64 = auth$._base64url(convert.ascii.encode(convert.jsonEncode(header)));
    let claimsBase64 = auth$._base64url(convert.utf8.encode(convert.jsonEncode(claims)));
    let data = dart.str(headerBase64) + "." + dart.str(claimsBase64);
    let key = credentials.privateRSAKey;
    let signer = new rsa.RS256Signer.new(new rsa.RSAPrivateKey.new(key.n, key.e, key.d, key.p, key.q, key.dmp1, key.dmq1, key.coeff));
    let signature = signer.sign(convert.ascii.encode(data));
    let jwt = data + "." + dart.str(auth$._base64url(signature));
    return new auth.AccessToken.new("Bearer", jwt, new core.DateTime.fromMillisecondsSinceEpoch(expiry * 1000, {isUtc: true}));
  };
  auth$._base64url = function _base64url(bytes) {
    return convert.base64Url.encode(bytes)[$replaceAll]("=", "");
  };
  var Duration__duration = dart.privateName(core, "Duration._duration");
  var C0;
  dart.defineLazy(auth$, {
    /*auth$._tokenExpirationThreshold*/get _tokenExpirationThreshold() {
      return C0 || CT.C0;
    }
  }, true);
  var _rsaKey$ = dart.privateName(rsa, "_rsaKey");
  var C1;
  rsa.RS256Signer = class RS256Signer extends core.Object {
    sign(bytes) {
      let digest = rsa.RS256Signer._digestInfo(sha256.sha256.convert(bytes).bytes);
      let modulusLen = ((dart.notNull(this[_rsaKey$].bitLength) + 7) / 8)[$truncate]();
      let block = _native_typed_data.NativeUint8List.new(modulusLen);
      let padLength = dart.notNull(block[$length]) - dart.notNull(digest[$length]) - 3;
      block[$_set](0, 0);
      block[$_set](1, 1);
      block[$fillRange](2, 2 + padLength, 255);
      block[$_set](2 + padLength, 0);
      block[$setRange](2 + padLength + 1, block[$length], digest);
      return rsa.RSAAlgorithm.encrypt(this[_rsaKey$], block, modulusLen);
    }
    static _digestInfo(hash) {
      let t0, t0$, t0$0, t0$1, t0$2, t0$3, t0$4, t0$5;
      let offset = 0;
      let digestInfo = _native_typed_data.NativeUint8List.new(2 + 2 + dart.notNull(rsa.RS256Signer._RSA_SHA256_ALGORITHM_IDENTIFIER[$length]) + 2 + 2 + dart.notNull(hash[$length]));
      {
        digestInfo[$_set]((t0 = offset, offset = t0 + 1, t0), 48);
        digestInfo[$_set]((t0$ = offset, offset = t0$ + 1, t0$), dart.notNull(digestInfo[$length]) - 2);
        {
          digestInfo[$_set]((t0$0 = offset, offset = t0$0 + 1, t0$0), 48);
          digestInfo[$_set]((t0$1 = offset, offset = t0$1 + 1, t0$1), dart.notNull(rsa.RS256Signer._RSA_SHA256_ALGORITHM_IDENTIFIER[$length]) + 2);
          digestInfo[$setAll](offset, rsa.RS256Signer._RSA_SHA256_ALGORITHM_IDENTIFIER);
          offset = offset + dart.notNull(rsa.RS256Signer._RSA_SHA256_ALGORITHM_IDENTIFIER[$length]);
          digestInfo[$_set]((t0$2 = offset, offset = t0$2 + 1, t0$2), 5);
          digestInfo[$_set]((t0$3 = offset, offset = t0$3 + 1, t0$3), 0);
        }
        digestInfo[$_set]((t0$4 = offset, offset = t0$4 + 1, t0$4), 4);
        digestInfo[$_set]((t0$5 = offset, offset = t0$5 + 1, t0$5), hash[$length]);
        digestInfo[$setAll](offset, hash);
      }
      return digestInfo;
    }
  };
  (rsa.RS256Signer.new = function(_rsaKey) {
    this[_rsaKey$] = _rsaKey;
    ;
  }).prototype = rsa.RS256Signer.prototype;
  dart.addTypeTests(rsa.RS256Signer);
  dart.addTypeCaches(rsa.RS256Signer);
  dart.setMethodSignature(rsa.RS256Signer, () => ({
    __proto__: dart.getMethods(rsa.RS256Signer.__proto__),
    sign: dart.fnType(dart.legacy(core.List$(dart.legacy(core.int))), [dart.legacy(core.List$(dart.legacy(core.int)))])
  }));
  dart.setLibraryUri(rsa.RS256Signer, L1);
  dart.setFieldSignature(rsa.RS256Signer, () => ({
    __proto__: dart.getFields(rsa.RS256Signer.__proto__),
    [_rsaKey$]: dart.finalFieldType(dart.legacy(rsa.RSAPrivateKey))
  }));
  dart.defineLazy(rsa.RS256Signer, {
    /*rsa.RS256Signer._RSA_SHA256_ALGORITHM_IDENTIFIER*/get _RSA_SHA256_ALGORITHM_IDENTIFIER() {
      return C1 || CT.C1;
    }
  }, true);
  rsa.ASN1Parser = class ASN1Parser extends core.Object {
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
            return new rsa.ASN1Integer.new(rsa.RSAAlgorithm.bytes2BigInt(readBytes(size)));
          }
          case 4:
          {
            let size = readEncodedLength();
            return new rsa.ASN1OctetString.new(readBytes(size));
          }
          case 5:
          {
            readNullBytes();
            return new rsa.ASN1Null.new();
          }
          case 6:
          {
            let size = readEncodedLength();
            return new rsa.ASN1ObjectIdentifier.new(readBytes(size));
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
            return new rsa.ASN1Sequence.new(objects);
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
  (rsa.ASN1Parser.new = function() {
    ;
  }).prototype = rsa.ASN1Parser.prototype;
  dart.addTypeTests(rsa.ASN1Parser);
  dart.addTypeCaches(rsa.ASN1Parser);
  dart.setLibraryUri(rsa.ASN1Parser, L1);
  dart.defineLazy(rsa.ASN1Parser, {
    /*rsa.ASN1Parser.INTEGER_TAG*/get INTEGER_TAG() {
      return 2;
    },
    /*rsa.ASN1Parser.OCTET_STRING_TAG*/get OCTET_STRING_TAG() {
      return 4;
    },
    /*rsa.ASN1Parser.NULL_TAG*/get NULL_TAG() {
      return 5;
    },
    /*rsa.ASN1Parser.OBJECT_ID_TAG*/get OBJECT_ID_TAG() {
      return 6;
    },
    /*rsa.ASN1Parser.SEQUENCE_TAG*/get SEQUENCE_TAG() {
      return 48;
    }
  }, true);
  rsa.ASN1Object = class ASN1Object extends core.Object {};
  (rsa.ASN1Object.new = function() {
    ;
  }).prototype = rsa.ASN1Object.prototype;
  dart.addTypeTests(rsa.ASN1Object);
  dart.addTypeCaches(rsa.ASN1Object);
  dart.setLibraryUri(rsa.ASN1Object, L1);
  var objects$ = dart.privateName(rsa, "ASN1Sequence.objects");
  rsa.ASN1Sequence = class ASN1Sequence extends rsa.ASN1Object {
    get objects() {
      return this[objects$];
    }
    set objects(value) {
      super.objects = value;
    }
  };
  (rsa.ASN1Sequence.new = function(objects) {
    this[objects$] = objects;
    ;
  }).prototype = rsa.ASN1Sequence.prototype;
  dart.addTypeTests(rsa.ASN1Sequence);
  dart.addTypeCaches(rsa.ASN1Sequence);
  dart.setLibraryUri(rsa.ASN1Sequence, L1);
  dart.setFieldSignature(rsa.ASN1Sequence, () => ({
    __proto__: dart.getFields(rsa.ASN1Sequence.__proto__),
    objects: dart.finalFieldType(dart.legacy(core.List$(dart.legacy(rsa.ASN1Object))))
  }));
  var integer$ = dart.privateName(rsa, "ASN1Integer.integer");
  rsa.ASN1Integer = class ASN1Integer extends rsa.ASN1Object {
    get integer() {
      return this[integer$];
    }
    set integer(value) {
      super.integer = value;
    }
  };
  (rsa.ASN1Integer.new = function(integer) {
    this[integer$] = integer;
    ;
  }).prototype = rsa.ASN1Integer.prototype;
  dart.addTypeTests(rsa.ASN1Integer);
  dart.addTypeCaches(rsa.ASN1Integer);
  dart.setLibraryUri(rsa.ASN1Integer, L1);
  dart.setFieldSignature(rsa.ASN1Integer, () => ({
    __proto__: dart.getFields(rsa.ASN1Integer.__proto__),
    integer: dart.finalFieldType(dart.legacy(core.BigInt))
  }));
  var bytes$ = dart.privateName(rsa, "ASN1OctetString.bytes");
  rsa.ASN1OctetString = class ASN1OctetString extends rsa.ASN1Object {
    get bytes() {
      return this[bytes$];
    }
    set bytes(value) {
      super.bytes = value;
    }
  };
  (rsa.ASN1OctetString.new = function(bytes) {
    this[bytes$] = bytes;
    ;
  }).prototype = rsa.ASN1OctetString.prototype;
  dart.addTypeTests(rsa.ASN1OctetString);
  dart.addTypeCaches(rsa.ASN1OctetString);
  dart.setLibraryUri(rsa.ASN1OctetString, L1);
  dart.setFieldSignature(rsa.ASN1OctetString, () => ({
    __proto__: dart.getFields(rsa.ASN1OctetString.__proto__),
    bytes: dart.finalFieldType(dart.legacy(core.List$(dart.legacy(core.int))))
  }));
  var bytes$0 = dart.privateName(rsa, "ASN1ObjectIdentifier.bytes");
  rsa.ASN1ObjectIdentifier = class ASN1ObjectIdentifier extends rsa.ASN1Object {
    get bytes() {
      return this[bytes$0];
    }
    set bytes(value) {
      super.bytes = value;
    }
  };
  (rsa.ASN1ObjectIdentifier.new = function(bytes) {
    this[bytes$0] = bytes;
    ;
  }).prototype = rsa.ASN1ObjectIdentifier.prototype;
  dart.addTypeTests(rsa.ASN1ObjectIdentifier);
  dart.addTypeCaches(rsa.ASN1ObjectIdentifier);
  dart.setLibraryUri(rsa.ASN1ObjectIdentifier, L1);
  dart.setFieldSignature(rsa.ASN1ObjectIdentifier, () => ({
    __proto__: dart.getFields(rsa.ASN1ObjectIdentifier.__proto__),
    bytes: dart.finalFieldType(dart.legacy(core.List$(dart.legacy(core.int))))
  }));
  rsa.ASN1Null = class ASN1Null extends rsa.ASN1Object {};
  (rsa.ASN1Null.new = function() {
    ;
  }).prototype = rsa.ASN1Null.prototype;
  dart.addTypeTests(rsa.ASN1Null);
  dart.addTypeCaches(rsa.ASN1Null);
  dart.setLibraryUri(rsa.ASN1Null, L1);
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
  dart.trackLibraries("packages/grpc/src/auth/auth", {
    "package:grpc/src/auth/auth.dart": auth$,
    "package:grpc/src/auth/rsa.dart": rsa
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["auth.dart","rsa.dart"],"names":[],"mappings":"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","file":"auth.unsound.ddc.js"}');
  // Exports:
  return {
    src__auth__auth: auth$,
    src__auth__rsa: rsa
  };
}));

//# sourceMappingURL=auth.unsound.ddc.js.map

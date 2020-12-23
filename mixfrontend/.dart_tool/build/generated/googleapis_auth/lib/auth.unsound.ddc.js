define(['dart_sdk', 'packages/googleapis_auth/src/crypto/asn1', 'packages/http/src/base_client'], (function load__packages__googleapis_auth__auth(dart_sdk, packages__googleapis_auth__src__crypto__asn1, packages__http__src__base_client) {
  'use strict';
  const core = dart_sdk.core;
  const convert = dart_sdk.convert;
  const _interceptors = dart_sdk._interceptors;
  const async = dart_sdk.async;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const pem = packages__googleapis_auth__src__crypto__asn1.src__crypto__pem;
  const rsa = packages__googleapis_auth__src__crypto__asn1.src__crypto__rsa;
  const http_client_base = packages__googleapis_auth__src__crypto__asn1.src__http_client_base;
  const utils = packages__googleapis_auth__src__crypto__asn1.src__utils;
  const client = packages__http__src__base_client.src__client;
  const streamed_response = packages__http__src__base_client.src__streamed_response;
  const base_request = packages__http__src__base_client.src__base_request;
  var auth = Object.create(dart.library);
  var auth_http_utils = Object.create(dart.library);
  var $toString = dartx.toString;
  var $join = dartx.join;
  var $_set = dartx._set;
  var $_get = dartx._get;
  var $toLowerCase = dartx.toLowerCase;
  var $contains = dartx.contains;
  var $addAll = dartx.addAll;
  var $containsKey = dartx.containsKey;
  var StringL = () => (StringL = dart.constFn(dart.legacy(core.String)))();
  var MapL = () => (MapL = dart.constFn(dart.legacy(core.Map)))();
  var ResponseTypeL = () => (ResponseTypeL = dart.constFn(dart.legacy(auth.ResponseType)))();
  var JSArrayOfStringL = () => (JSArrayOfStringL = dart.constFn(_interceptors.JSArray$(StringL())))();
  var intL = () => (intL = dart.constFn(dart.legacy(core.int)))();
  var ListOfintL = () => (ListOfintL = dart.constFn(core.List$(intL())))();
  var ListLOfintL = () => (ListLOfintL = dart.constFn(dart.legacy(ListOfintL())))();
  var StreamOfListLOfintL = () => (StreamOfListLOfintL = dart.constFn(async.Stream$(ListLOfintL())))();
  var JSArrayOfListLOfintL = () => (JSArrayOfListLOfintL = dart.constFn(_interceptors.JSArray$(ListLOfintL())))();
  var dynamicToNullN = () => (dynamicToNullN = dart.constFn(dart.fnType(core.Null, [dart.dynamic])))();
  var ObjectL = () => (ObjectL = dart.constFn(dart.legacy(core.Object)))();
  var AccessCredentialsL = () => (AccessCredentialsL = dart.constFn(dart.legacy(auth.AccessCredentials)))();
  var StreamedResponseL = () => (StreamedResponseL = dart.constFn(dart.legacy(streamed_response.StreamedResponse)))();
  var FutureOfStreamedResponseL = () => (FutureOfStreamedResponseL = dart.constFn(async.Future$(StreamedResponseL())))();
  var StreamControllerOfAccessCredentialsL = () => (StreamControllerOfAccessCredentialsL = dart.constFn(async.StreamController$(AccessCredentialsL())))();
  const CT = Object.create(null);
  var L0 = "package:googleapis_auth/auth.dart";
  var L1 = "package:googleapis_auth/src/auth_http_utils.dart";
  var L2 = "org-dartlang-app:///packages/googleapis_auth/src/auth_http_utils.dart";
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.const({
        __proto__: auth.ResponseType.prototype,
        [_name$]: "ResponseType.code",
        index: 0
      });
    },
    get C1() {
      return C1 = dart.const({
        __proto__: auth.ResponseType.prototype,
        [_name$]: "ResponseType.idToken",
        index: 1
      });
    },
    get C2() {
      return C2 = dart.const({
        __proto__: auth.ResponseType.prototype,
        [_name$]: "ResponseType.permission",
        index: 2
      });
    },
    get C3() {
      return C3 = dart.const({
        __proto__: auth.ResponseType.prototype,
        [_name$]: "ResponseType.token",
        index: 3
      });
    },
    get C4() {
      return C4 = dart.constList([C0 || CT.C0, C1 || CT.C1, C2 || CT.C2, C3 || CT.C3], ResponseTypeL());
    }
  }, false);
  var type$ = dart.privateName(auth, "AccessToken.type");
  var data$ = dart.privateName(auth, "AccessToken.data");
  var expiry$ = dart.privateName(auth, "AccessToken.expiry");
  auth.AccessToken = class AccessToken extends core.Object {
    get type() {
      return this[type$];
    }
    set type(value) {
      super.type = value;
    }
    get data() {
      return this[data$];
    }
    set data(value) {
      super.data = value;
    }
    get expiry() {
      return this[expiry$];
    }
    set expiry(value) {
      super.expiry = value;
    }
    get hasExpired() {
      return new core.DateTime.now().toUtc().isAfter(this.expiry);
    }
    toString() {
      return "AccessToken(type=" + dart.str(this.type) + ", data=" + dart.str(this.data) + ", expiry=" + dart.str(this.expiry) + ")";
    }
  };
  (auth.AccessToken.new = function(type, data, expiry) {
    this[type$] = type;
    this[data$] = data;
    this[expiry$] = expiry;
    if (this.type == null || this.data == null || this.expiry == null) {
      dart.throw(new core.ArgumentError.new("Arguments type/data/expiry may not be null."));
    }
    if (!dart.test(this.expiry.isUtc)) {
      dart.throw(new core.ArgumentError.new("The expiry date must be a Utc DateTime."));
    }
  }).prototype = auth.AccessToken.prototype;
  dart.addTypeTests(auth.AccessToken);
  dart.addTypeCaches(auth.AccessToken);
  dart.setMethodSignature(auth.AccessToken, () => ({
    __proto__: dart.getMethods(auth.AccessToken.__proto__),
    toString: dart.fnType(dart.legacy(core.String), []),
    [$toString]: dart.fnType(dart.legacy(core.String), [])
  }));
  dart.setGetterSignature(auth.AccessToken, () => ({
    __proto__: dart.getGetters(auth.AccessToken.__proto__),
    hasExpired: dart.legacy(core.bool)
  }));
  dart.setLibraryUri(auth.AccessToken, L0);
  dart.setFieldSignature(auth.AccessToken, () => ({
    __proto__: dart.getFields(auth.AccessToken.__proto__),
    type: dart.finalFieldType(dart.legacy(core.String)),
    data: dart.finalFieldType(dart.legacy(core.String)),
    expiry: dart.finalFieldType(dart.legacy(core.DateTime))
  }));
  dart.defineExtensionMethods(auth.AccessToken, ['toString']);
  var accessToken$ = dart.privateName(auth, "AccessCredentials.accessToken");
  var refreshToken$ = dart.privateName(auth, "AccessCredentials.refreshToken");
  var idToken$ = dart.privateName(auth, "AccessCredentials.idToken");
  var scopes$ = dart.privateName(auth, "AccessCredentials.scopes");
  auth.AccessCredentials = class AccessCredentials extends core.Object {
    get accessToken() {
      return this[accessToken$];
    }
    set accessToken(value) {
      super.accessToken = value;
    }
    get refreshToken() {
      return this[refreshToken$];
    }
    set refreshToken(value) {
      super.refreshToken = value;
    }
    get idToken() {
      return this[idToken$];
    }
    set idToken(value) {
      super.idToken = value;
    }
    get scopes() {
      return this[scopes$];
    }
    set scopes(value) {
      super.scopes = value;
    }
  };
  (auth.AccessCredentials.new = function(accessToken, refreshToken, scopes, opts) {
    let idToken = opts && 'idToken' in opts ? opts.idToken : null;
    this[accessToken$] = accessToken;
    this[refreshToken$] = refreshToken;
    this[scopes$] = scopes;
    this[idToken$] = idToken;
    if (this.accessToken == null || this.scopes == null) {
      dart.throw(new core.ArgumentError.new("Arguments accessToken/scopes must not be null."));
    }
  }).prototype = auth.AccessCredentials.prototype;
  dart.addTypeTests(auth.AccessCredentials);
  dart.addTypeCaches(auth.AccessCredentials);
  dart.setLibraryUri(auth.AccessCredentials, L0);
  dart.setFieldSignature(auth.AccessCredentials, () => ({
    __proto__: dart.getFields(auth.AccessCredentials.__proto__),
    accessToken: dart.finalFieldType(dart.legacy(auth.AccessToken)),
    refreshToken: dart.finalFieldType(dart.legacy(core.String)),
    idToken: dart.finalFieldType(dart.legacy(core.String)),
    scopes: dart.finalFieldType(dart.legacy(core.List$(dart.legacy(core.String))))
  }));
  var identifier$ = dart.privateName(auth, "ClientId.identifier");
  var secret$ = dart.privateName(auth, "ClientId.secret");
  auth.ClientId = class ClientId extends core.Object {
    get identifier() {
      return this[identifier$];
    }
    set identifier(value) {
      super.identifier = value;
    }
    get secret() {
      return this[secret$];
    }
    set secret(value) {
      super.secret = value;
    }
  };
  (auth.ClientId.new = function(identifier, secret) {
    this[identifier$] = identifier;
    this[secret$] = secret;
    if (this.identifier == null) {
      dart.throw(new core.ArgumentError.new("Argument identifier may not be null."));
    }
  }).prototype = auth.ClientId.prototype;
  (auth.ClientId.serviceAccount = function(identifier) {
    this[identifier$] = identifier;
    this[secret$] = null;
    if (this.identifier == null) {
      dart.throw(new core.ArgumentError.new("Argument identifier may not be null."));
    }
  }).prototype = auth.ClientId.prototype;
  dart.addTypeTests(auth.ClientId);
  dart.addTypeCaches(auth.ClientId);
  dart.setLibraryUri(auth.ClientId, L0);
  dart.setFieldSignature(auth.ClientId, () => ({
    __proto__: dart.getFields(auth.ClientId.__proto__),
    identifier: dart.finalFieldType(dart.legacy(core.String)),
    secret: dart.finalFieldType(dart.legacy(core.String))
  }));
  var email$ = dart.privateName(auth, "ServiceAccountCredentials.email");
  var clientId$ = dart.privateName(auth, "ServiceAccountCredentials.clientId");
  var privateKey$ = dart.privateName(auth, "ServiceAccountCredentials.privateKey");
  var impersonatedUser$ = dart.privateName(auth, "ServiceAccountCredentials.impersonatedUser");
  var privateRSAKey = dart.privateName(auth, "ServiceAccountCredentials.privateRSAKey");
  auth.ServiceAccountCredentials = class ServiceAccountCredentials extends core.Object {
    get email() {
      return this[email$];
    }
    set email(value) {
      super.email = value;
    }
    get clientId() {
      return this[clientId$];
    }
    set clientId(value) {
      super.clientId = value;
    }
    get privateKey() {
      return this[privateKey$];
    }
    set privateKey(value) {
      super.privateKey = value;
    }
    get impersonatedUser() {
      return this[impersonatedUser$];
    }
    set impersonatedUser(value) {
      super.impersonatedUser = value;
    }
    get privateRSAKey() {
      return this[privateRSAKey];
    }
    set privateRSAKey(value) {
      super.privateRSAKey = value;
    }
    static fromJson(json, opts) {
      let impersonatedUser = opts && 'impersonatedUser' in opts ? opts.impersonatedUser : null;
      if (StringL().is(json)) {
        json = convert.jsonDecode(core.String.as(json));
      }
      if (!MapL().is(json)) {
        dart.throw(new core.ArgumentError.new("json must be a Map or a String encoding a Map."));
      }
      let identifier = dart.dsend(json, '_get', ["client_id"]);
      let privateKey = dart.dsend(json, '_get', ["private_key"]);
      let email = dart.dsend(json, '_get', ["client_email"]);
      let type = dart.dsend(json, '_get', ["type"]);
      if (!dart.equals(type, "service_account")) {
        dart.throw(new core.ArgumentError.new("The given credentials are not of type " + "service_account (was: " + dart.str(type) + ")."));
      }
      if (identifier == null || privateKey == null || email == null) {
        dart.throw(new core.ArgumentError.new("The given credentials do not contain all the " + "fields: client_id, private_key and client_email."));
      }
      let clientId = new auth.ClientId.new(StringL().as(identifier), null);
      return new auth.ServiceAccountCredentials.new(StringL().as(email), clientId, StringL().as(privateKey), {impersonatedUser: impersonatedUser});
    }
  };
  (auth.ServiceAccountCredentials.new = function(email, clientId, privateKey, opts) {
    let impersonatedUser = opts && 'impersonatedUser' in opts ? opts.impersonatedUser : null;
    this[email$] = email;
    this[clientId$] = clientId;
    this[impersonatedUser$] = impersonatedUser;
    this[privateKey$] = privateKey;
    this[privateRSAKey] = pem.keyFromString(privateKey);
    if (this.email == null || this.clientId == null || privateKey == null) {
      dart.throw(new core.ArgumentError.new("Arguments email/clientId/privateKey must not be null."));
    }
  }).prototype = auth.ServiceAccountCredentials.prototype;
  dart.addTypeTests(auth.ServiceAccountCredentials);
  dart.addTypeCaches(auth.ServiceAccountCredentials);
  dart.setLibraryUri(auth.ServiceAccountCredentials, L0);
  dart.setFieldSignature(auth.ServiceAccountCredentials, () => ({
    __proto__: dart.getFields(auth.ServiceAccountCredentials.__proto__),
    email: dart.finalFieldType(dart.legacy(core.String)),
    clientId: dart.finalFieldType(dart.legacy(auth.ClientId)),
    privateKey: dart.finalFieldType(dart.legacy(core.String)),
    impersonatedUser: dart.finalFieldType(dart.legacy(core.String)),
    privateRSAKey: dart.finalFieldType(dart.legacy(rsa.RSAPrivateKey))
  }));
  auth.AuthClient = class AuthClient extends core.Object {};
  (auth.AuthClient.new = function() {
    ;
  }).prototype = auth.AuthClient.prototype;
  dart.addTypeTests(auth.AuthClient);
  dart.addTypeCaches(auth.AuthClient);
  auth.AuthClient[dart.implements] = () => [client.Client];
  dart.setLibraryUri(auth.AuthClient, L0);
  auth.AutoRefreshingAuthClient = class AutoRefreshingAuthClient extends core.Object {};
  (auth.AutoRefreshingAuthClient.new = function() {
    ;
  }).prototype = auth.AutoRefreshingAuthClient.prototype;
  dart.addTypeTests(auth.AutoRefreshingAuthClient);
  dart.addTypeCaches(auth.AutoRefreshingAuthClient);
  auth.AutoRefreshingAuthClient[dart.implements] = () => [auth.AuthClient];
  dart.setLibraryUri(auth.AutoRefreshingAuthClient, L0);
  var message$ = dart.privateName(auth, "RefreshFailedException.message");
  auth.RefreshFailedException = class RefreshFailedException extends core.Object {
    get message() {
      return this[message$];
    }
    set message(value) {
      super.message = value;
    }
    toString() {
      return this.message;
    }
  };
  (auth.RefreshFailedException.new = function(message) {
    this[message$] = message;
    ;
  }).prototype = auth.RefreshFailedException.prototype;
  dart.addTypeTests(auth.RefreshFailedException);
  dart.addTypeCaches(auth.RefreshFailedException);
  auth.RefreshFailedException[dart.implements] = () => [core.Exception];
  dart.setMethodSignature(auth.RefreshFailedException, () => ({
    __proto__: dart.getMethods(auth.RefreshFailedException.__proto__),
    toString: dart.fnType(dart.legacy(core.String), []),
    [$toString]: dart.fnType(dart.legacy(core.String), [])
  }));
  dart.setLibraryUri(auth.RefreshFailedException, L0);
  dart.setFieldSignature(auth.RefreshFailedException, () => ({
    __proto__: dart.getFields(auth.RefreshFailedException.__proto__),
    message: dart.finalFieldType(dart.legacy(core.String))
  }));
  dart.defineExtensionMethods(auth.RefreshFailedException, ['toString']);
  var message$0 = dart.privateName(auth, "AccessDeniedException.message");
  auth.AccessDeniedException = class AccessDeniedException extends core.Object {
    get message() {
      return this[message$0];
    }
    set message(value) {
      super.message = value;
    }
    toString() {
      return this.message;
    }
  };
  (auth.AccessDeniedException.new = function(message) {
    this[message$0] = message;
    ;
  }).prototype = auth.AccessDeniedException.prototype;
  dart.addTypeTests(auth.AccessDeniedException);
  dart.addTypeCaches(auth.AccessDeniedException);
  auth.AccessDeniedException[dart.implements] = () => [core.Exception];
  dart.setMethodSignature(auth.AccessDeniedException, () => ({
    __proto__: dart.getMethods(auth.AccessDeniedException.__proto__),
    toString: dart.fnType(dart.legacy(core.String), []),
    [$toString]: dart.fnType(dart.legacy(core.String), [])
  }));
  dart.setLibraryUri(auth.AccessDeniedException, L0);
  dart.setFieldSignature(auth.AccessDeniedException, () => ({
    __proto__: dart.getFields(auth.AccessDeniedException.__proto__),
    message: dart.finalFieldType(dart.legacy(core.String))
  }));
  dart.defineExtensionMethods(auth.AccessDeniedException, ['toString']);
  var message$1 = dart.privateName(auth, "UserConsentException.message");
  auth.UserConsentException = class UserConsentException extends core.Object {
    get message() {
      return this[message$1];
    }
    set message(value) {
      super.message = value;
    }
    toString() {
      return this.message;
    }
  };
  (auth.UserConsentException.new = function(message) {
    this[message$1] = message;
    ;
  }).prototype = auth.UserConsentException.prototype;
  dart.addTypeTests(auth.UserConsentException);
  dart.addTypeCaches(auth.UserConsentException);
  auth.UserConsentException[dart.implements] = () => [core.Exception];
  dart.setMethodSignature(auth.UserConsentException, () => ({
    __proto__: dart.getMethods(auth.UserConsentException.__proto__),
    toString: dart.fnType(dart.legacy(core.String), []),
    [$toString]: dart.fnType(dart.legacy(core.String), [])
  }));
  dart.setLibraryUri(auth.UserConsentException, L0);
  dart.setFieldSignature(auth.UserConsentException, () => ({
    __proto__: dart.getFields(auth.UserConsentException.__proto__),
    message: dart.finalFieldType(dart.legacy(core.String))
  }));
  dart.defineExtensionMethods(auth.UserConsentException, ['toString']);
  var _name$ = dart.privateName(auth, "_name");
  var C0;
  var C1;
  var C2;
  var C3;
  var C4;
  auth.ResponseType = class ResponseType extends core.Object {
    toString() {
      return this[_name$];
    }
  };
  (auth.ResponseType.new = function(index, _name) {
    this.index = index;
    this[_name$] = _name;
    ;
  }).prototype = auth.ResponseType.prototype;
  dart.addTypeTests(auth.ResponseType);
  dart.addTypeCaches(auth.ResponseType);
  dart.setMethodSignature(auth.ResponseType, () => ({
    __proto__: dart.getMethods(auth.ResponseType.__proto__),
    toString: dart.fnType(dart.legacy(core.String), []),
    [$toString]: dart.fnType(dart.legacy(core.String), [])
  }));
  dart.setLibraryUri(auth.ResponseType, L0);
  dart.setFieldSignature(auth.ResponseType, () => ({
    __proto__: dart.getFields(auth.ResponseType.__proto__),
    index: dart.finalFieldType(dart.legacy(core.int)),
    [_name$]: dart.finalFieldType(dart.legacy(core.String))
  }));
  dart.defineExtensionMethods(auth.ResponseType, ['toString']);
  auth.ResponseType.code = C0 || CT.C0;
  auth.ResponseType.idToken = C1 || CT.C1;
  auth.ResponseType.permission = C2 || CT.C2;
  auth.ResponseType.token = C3 || CT.C3;
  auth.ResponseType.values = C4 || CT.C4;
  auth.authenticatedClient = function authenticatedClient(baseClient, credentials) {
    if (credentials.accessToken.type !== "Bearer") {
      dart.throw(new core.ArgumentError.new("Only Bearer access tokens are accepted."));
    }
    return new auth_http_utils.AuthenticatedClient.new(baseClient, credentials);
  };
  auth.autoRefreshingClient = function autoRefreshingClient(clientId, credentials, baseClient) {
    if (credentials.accessToken.type !== "Bearer") {
      dart.throw(new core.ArgumentError.new("Only Bearer access tokens are accepted."));
    }
    if (credentials.refreshToken == null) {
      dart.throw(new core.ArgumentError.new("Refresh token in AccessCredentials was `null`."));
    }
    return new auth_http_utils.AutoRefreshingClient.new(baseClient, clientId, credentials);
  };
  auth.refreshCredentials = function refreshCredentials(clientId, credentials, client) {
    return async.async(AccessCredentialsL(), function* refreshCredentials() {
      let formValues = JSArrayOfStringL().of(["client_id=" + dart.str(core.Uri.encodeComponent(clientId.identifier)), "client_secret=" + dart.str(core.Uri.encodeComponent(clientId.secret)), "refresh_token=" + dart.str(core.Uri.encodeComponent(credentials.refreshToken)), "grant_type=refresh_token"]);
      let body = StreamOfListLOfintL().fromIterable(JSArrayOfListLOfintL().of([convert.ascii.encode(formValues[$join]("&"))]));
      let request = new http_client_base.RequestImpl.new("POST", auth._googleTokenUri, body);
      request.headers[$_set]("content-type", "application/x-www-form-urlencoded");
      let response = (yield client.send(request));
      let contentType = response.headers[$_get]("content-type");
      contentType = contentType == null ? null : contentType[$toLowerCase]();
      if (contentType == null || !contentType[$contains]("json") && !contentType[$contains]("javascript")) {
        yield response.stream.drain(dart.dynamic).catchError(dart.fn(_ => {
        }, dynamicToNullN()));
        dart.throw(core.Exception.new("Server responded with invalid content type: " + dart.str(contentType) + ". " + "Expected json response."));
      }
      let object = (yield response.stream.transform(StringL(), convert.ascii.decoder).transform(ObjectL(), convert.json.decoder).first);
      let jsonMap = MapL().as(object);
      let idToken = jsonMap[$_get]("id_token");
      let token = jsonMap[$_get]("access_token");
      let seconds = jsonMap[$_get]("expires_in");
      let tokenType = jsonMap[$_get]("token_type");
      let error = jsonMap[$_get]("error");
      if (response.statusCode !== 200 && error != null) {
        dart.throw(new auth.RefreshFailedException.new("Refreshing attempt failed. " + "Response was " + dart.str(response.statusCode) + ". Error message was " + dart.str(error) + "."));
      }
      if (token == null || !intL().is(seconds) || !dart.equals(tokenType, "Bearer")) {
        dart.throw(core.Exception.new("Refresing attempt failed. " + "Invalid server response."));
      }
      return new auth.AccessCredentials.new(new auth.AccessToken.new(StringL().as(tokenType), StringL().as(token), utils.expiryDate(intL().as(seconds))), credentials.refreshToken, credentials.scopes, {idToken: StringL().as(idToken)});
    });
  };
  dart.defineLazy(auth, {
    /*auth._googleTokenUri*/get _googleTokenUri() {
      return core.Uri.parse("https://accounts.google.com/o/oauth2/token");
    }
  }, true);
  var credentials$ = dart.privateName(auth_http_utils, "AuthenticatedClient.credentials");
  var quotaProject$ = dart.privateName(auth_http_utils, "AuthenticatedClient.quotaProject");
  auth_http_utils.AuthenticatedClient = class AuthenticatedClient extends http_client_base.DelegatingClient {
    get credentials() {
      return this[credentials$];
    }
    set credentials(value) {
      super.credentials = value;
    }
    get quotaProject() {
      return this[quotaProject$];
    }
    set quotaProject(value) {
      super.quotaProject = value;
    }
    send(request) {
      return async.async(StreamedResponseL(), (function* send() {
        let modifiedRequest = new http_client_base.RequestImpl.new(request.method, request.url, request.finalize());
        modifiedRequest.headers[$addAll](request.headers);
        modifiedRequest.headers[$_set]("Authorization", "Bearer " + dart.str(this.credentials.accessToken.data));
        if (this.quotaProject != null) {
          modifiedRequest.headers[$_set]("X-Goog-User-Project", this.quotaProject);
        }
        let response = (yield this.baseClient.send(modifiedRequest));
        let wwwAuthenticate = response.headers[$_get]("www-authenticate");
        if (wwwAuthenticate != null) {
          yield response.stream.drain(dart.dynamic);
          dart.throw(new auth.AccessDeniedException.new("Access was denied " + "(www-authenticate header was: " + dart.str(wwwAuthenticate) + ")."));
        }
        return response;
      }).bind(this));
    }
  };
  (auth_http_utils.AuthenticatedClient.new = function(client, credentials, opts) {
    let quotaProject = opts && 'quotaProject' in opts ? opts.quotaProject : null;
    this[credentials$] = credentials;
    this[quotaProject$] = quotaProject;
    auth_http_utils.AuthenticatedClient.__proto__.new.call(this, client, {closeUnderlyingClient: false});
    ;
  }).prototype = auth_http_utils.AuthenticatedClient.prototype;
  dart.addTypeTests(auth_http_utils.AuthenticatedClient);
  dart.addTypeCaches(auth_http_utils.AuthenticatedClient);
  auth_http_utils.AuthenticatedClient[dart.implements] = () => [auth.AuthClient];
  dart.setMethodSignature(auth_http_utils.AuthenticatedClient, () => ({
    __proto__: dart.getMethods(auth_http_utils.AuthenticatedClient.__proto__),
    send: dart.fnType(dart.legacy(async.Future$(dart.legacy(streamed_response.StreamedResponse))), [dart.legacy(base_request.BaseRequest)])
  }));
  dart.setLibraryUri(auth_http_utils.AuthenticatedClient, L1);
  dart.setFieldSignature(auth_http_utils.AuthenticatedClient, () => ({
    __proto__: dart.getFields(auth_http_utils.AuthenticatedClient.__proto__),
    credentials: dart.finalFieldType(dart.legacy(auth.AccessCredentials)),
    quotaProject: dart.finalFieldType(dart.legacy(core.String))
  }));
  var _encodedApiKey = dart.privateName(auth_http_utils, "_encodedApiKey");
  auth_http_utils.ApiKeyClient = class ApiKeyClient extends http_client_base.DelegatingClient {
    send(request) {
      let url = request.url;
      if (dart.test(url.queryParameters[$containsKey]("key"))) {
        return FutureOfStreamedResponseL().error(core.Exception.new("Tried to make a HTTP request which has already a \"key\" query " + "parameter. Adding the API key would override that existing value."));
      }
      if (url.query === "") {
        url = url.replace({query: "key=" + dart.str(this[_encodedApiKey])});
      } else {
        url = url.replace({query: dart.str(url.query) + "&key=" + dart.str(this[_encodedApiKey])});
      }
      let modifiedRequest = new http_client_base.RequestImpl.new(request.method, url, request.finalize());
      modifiedRequest.headers[$addAll](request.headers);
      return this.baseClient.send(modifiedRequest);
    }
  };
  (auth_http_utils.ApiKeyClient.new = function(client, apiKey) {
    this[_encodedApiKey] = core.Uri.encodeQueryComponent(apiKey);
    auth_http_utils.ApiKeyClient.__proto__.new.call(this, client, {closeUnderlyingClient: true});
    ;
  }).prototype = auth_http_utils.ApiKeyClient.prototype;
  dart.addTypeTests(auth_http_utils.ApiKeyClient);
  dart.addTypeCaches(auth_http_utils.ApiKeyClient);
  dart.setMethodSignature(auth_http_utils.ApiKeyClient, () => ({
    __proto__: dart.getMethods(auth_http_utils.ApiKeyClient.__proto__),
    send: dart.fnType(dart.legacy(async.Future$(dart.legacy(streamed_response.StreamedResponse))), [dart.legacy(base_request.BaseRequest)])
  }));
  dart.setLibraryUri(auth_http_utils.ApiKeyClient, L1);
  dart.setFieldSignature(auth_http_utils.ApiKeyClient, () => ({
    __proto__: dart.getFields(auth_http_utils.ApiKeyClient.__proto__),
    [_encodedApiKey]: dart.finalFieldType(dart.legacy(core.String))
  }));
  var _credentialStreamController = dart.privateName(auth_http_utils, "_credentialStreamController");
  auth_http_utils.AutoRefreshDelegatingClient = class AutoRefreshDelegatingClient extends http_client_base.DelegatingClient {
    get credentialUpdates() {
      return this[_credentialStreamController].stream;
    }
    notifyAboutNewCredentials(credentials) {
      this[_credentialStreamController].add(credentials);
    }
    close() {
      this[_credentialStreamController].close();
      super.close();
    }
  };
  (auth_http_utils.AutoRefreshDelegatingClient.new = function(client, opts) {
    let closeUnderlyingClient = opts && 'closeUnderlyingClient' in opts ? opts.closeUnderlyingClient : true;
    this[_credentialStreamController] = StreamControllerOfAccessCredentialsL().broadcast({sync: true});
    auth_http_utils.AutoRefreshDelegatingClient.__proto__.new.call(this, client, {closeUnderlyingClient: closeUnderlyingClient});
    ;
  }).prototype = auth_http_utils.AutoRefreshDelegatingClient.prototype;
  dart.addTypeTests(auth_http_utils.AutoRefreshDelegatingClient);
  dart.addTypeCaches(auth_http_utils.AutoRefreshDelegatingClient);
  auth_http_utils.AutoRefreshDelegatingClient[dart.implements] = () => [auth.AutoRefreshingAuthClient];
  dart.setMethodSignature(auth_http_utils.AutoRefreshDelegatingClient, () => ({
    __proto__: dart.getMethods(auth_http_utils.AutoRefreshDelegatingClient.__proto__),
    notifyAboutNewCredentials: dart.fnType(dart.void, [dart.legacy(auth.AccessCredentials)])
  }));
  dart.setGetterSignature(auth_http_utils.AutoRefreshDelegatingClient, () => ({
    __proto__: dart.getGetters(auth_http_utils.AutoRefreshDelegatingClient.__proto__),
    credentialUpdates: dart.legacy(async.Stream$(dart.legacy(auth.AccessCredentials)))
  }));
  dart.setLibraryUri(auth_http_utils.AutoRefreshDelegatingClient, L1);
  dart.setFieldSignature(auth_http_utils.AutoRefreshDelegatingClient, () => ({
    __proto__: dart.getFields(auth_http_utils.AutoRefreshDelegatingClient.__proto__),
    [_credentialStreamController]: dart.finalFieldType(dart.legacy(async.StreamController$(dart.legacy(auth.AccessCredentials))))
  }));
  var clientId$0 = dart.privateName(auth_http_utils, "AutoRefreshingClient.clientId");
  var quotaProject$0 = dart.privateName(auth_http_utils, "AutoRefreshingClient.quotaProject");
  var credentials$0 = dart.privateName(auth_http_utils, "AutoRefreshingClient.credentials");
  var authClient = dart.privateName(auth_http_utils, "AutoRefreshingClient.authClient");
  auth_http_utils.AutoRefreshingClient = class AutoRefreshingClient extends auth_http_utils.AutoRefreshDelegatingClient {
    get clientId() {
      return this[clientId$0];
    }
    set clientId(value) {
      super.clientId = value;
    }
    get quotaProject() {
      return this[quotaProject$0];
    }
    set quotaProject(value) {
      super.quotaProject = value;
    }
    get credentials() {
      return this[credentials$0];
    }
    set credentials(value) {
      this[credentials$0] = value;
    }
    get authClient() {
      return this[authClient];
    }
    set authClient(value) {
      this[authClient] = value;
    }
    send(request) {
      return async.async(StreamedResponseL(), (function* send() {
        if (!dart.test(this.credentials.accessToken.hasExpired)) {
          return this.authClient.send(request);
        } else {
          let cred = (yield auth.refreshCredentials(this.clientId, this.credentials, this.baseClient));
          this.notifyAboutNewCredentials(cred);
          this.credentials = cred;
          this.authClient = new auth_http_utils.AuthenticatedClient.new(this.baseClient, cred, {quotaProject: this.quotaProject});
          return this.authClient.send(request);
        }
      }).bind(this));
    }
  };
  (auth_http_utils.AutoRefreshingClient.new = function(client, clientId, credentials, opts) {
    let closeUnderlyingClient = opts && 'closeUnderlyingClient' in opts ? opts.closeUnderlyingClient : false;
    let quotaProject = opts && 'quotaProject' in opts ? opts.quotaProject : null;
    this[authClient] = null;
    this[clientId$0] = clientId;
    this[credentials$0] = credentials;
    this[quotaProject$0] = quotaProject;
    auth_http_utils.AutoRefreshingClient.__proto__.new.call(this, client, {closeUnderlyingClient: closeUnderlyingClient});
    if (!(this.credentials.accessToken.type === "Bearer")) dart.assertFailed(null, L2, 86, 12, "credentials.accessToken.type == 'Bearer'");
    if (!(this.credentials.refreshToken != null)) dart.assertFailed(null, L2, 87, 12, "credentials.refreshToken != null");
    this.authClient = new auth_http_utils.AuthenticatedClient.new(this.baseClient, this.credentials, {quotaProject: this.quotaProject});
  }).prototype = auth_http_utils.AutoRefreshingClient.prototype;
  dart.addTypeTests(auth_http_utils.AutoRefreshingClient);
  dart.addTypeCaches(auth_http_utils.AutoRefreshingClient);
  dart.setMethodSignature(auth_http_utils.AutoRefreshingClient, () => ({
    __proto__: dart.getMethods(auth_http_utils.AutoRefreshingClient.__proto__),
    send: dart.fnType(dart.legacy(async.Future$(dart.legacy(streamed_response.StreamedResponse))), [dart.legacy(base_request.BaseRequest)])
  }));
  dart.setLibraryUri(auth_http_utils.AutoRefreshingClient, L1);
  dart.setFieldSignature(auth_http_utils.AutoRefreshingClient, () => ({
    __proto__: dart.getFields(auth_http_utils.AutoRefreshingClient.__proto__),
    clientId: dart.finalFieldType(dart.legacy(auth.ClientId)),
    quotaProject: dart.finalFieldType(dart.legacy(core.String)),
    credentials: dart.fieldType(dart.legacy(auth.AccessCredentials)),
    authClient: dart.fieldType(dart.legacy(client.Client))
  }));
  dart.trackLibraries("packages/googleapis_auth/auth", {
    "package:googleapis_auth/auth.dart": auth,
    "package:googleapis_auth/src/auth_http_utils.dart": auth_http_utils
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["auth.dart","src/auth_http_utils.dart"],"names":[],"mappings":"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","file":"auth.unsound.ddc.js"}');
  // Exports:
  return {
    auth: auth,
    src__auth_http_utils: auth_http_utils
  };
}));

//# sourceMappingURL=auth.unsound.ddc.js.map

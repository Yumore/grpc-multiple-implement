define(['dart_sdk', 'packages/grpc/grpc_web', 'packages/grpc_web/app'], (function load__web__main(dart_sdk, packages__grpc__grpc_web, packages__grpc_web__app) {
  'use strict';
  const core = dart_sdk.core;
  const html = dart_sdk.html;
  const async = dart_sdk.async;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const web_channel = packages__grpc__grpc_web.src__client__web_channel;
  const echo$46pbgrpc = packages__grpc_web__app.src__generated__echo$46pbgrpc;
  const app$ = packages__grpc_web__app.app;
  var main = Object.create(dart.library);
  var $onClick = dartx.onClick;
  var $value = dartx.value;
  var $trim = dartx.trim;
  var $isEmpty = dartx.isEmpty;
  var $indexOf = dartx.indexOf;
  var $substring = dartx.substring;
  var ButtonElementL = () => (ButtonElementL = dart.constFn(dart.legacy(html.ButtonElement)))();
  var TextInputElementL = () => (TextInputElementL = dart.constFn(dart.legacy(html.TextInputElement)))();
  var boolL = () => (boolL = dart.constFn(dart.legacy(core.bool)))();
  var FutureOfboolL = () => (FutureOfboolL = dart.constFn(async.Future$(boolL())))();
  var FutureLOfboolL = () => (FutureLOfboolL = dart.constFn(dart.legacy(FutureOfboolL())))();
  var MouseEventL = () => (MouseEventL = dart.constFn(dart.legacy(html.MouseEvent)))();
  var MouseEventLToFutureLOfboolL = () => (MouseEventLToFutureLOfboolL = dart.constFn(dart.fnType(FutureLOfboolL(), [MouseEventL()])))();
  var InputElementL = () => (InputElementL = dart.constFn(dart.legacy(html.InputElement)))();
  var FutureOfNullN = () => (FutureOfNullN = dart.constFn(async.Future$(core.Null)))();
  var FutureLOfNullN = () => (FutureLOfNullN = dart.constFn(dart.legacy(FutureOfNullN())))();
  var MouseEventLToFutureLOfNullN = () => (MouseEventLToFutureLOfNullN = dart.constFn(dart.fnType(FutureLOfNullN(), [MouseEventL()])))();
  const CT = Object.create(null);
  main.main = function main$() {
    let channel = new web_channel.GrpcWebClientChannel.xhr(core.Uri.parse("http://localhost:8080"));
    let service = new echo$46pbgrpc.EchoServiceClient.new(channel);
    let app = new app$.EchoApp.new(service);
    let button = ButtonElementL().as(html.querySelector("#send"));
    button[$onClick].listen(dart.fn(e => async.async(boolL(), function*() {
      let msg = TextInputElementL().as(html.querySelector("#msg"));
      let value = msg[$value][$trim]();
      msg[$value] = "";
      if (value[$isEmpty]) return false;
      if (value[$indexOf](" ") > 0) {
        let countStr = value[$substring](0, value[$indexOf](" "));
        let count = core.int.tryParse(countStr);
        if (count != null) {
          app.repeatEcho(value[$substring](value[$indexOf](" ") + 1), count);
        } else {
          app.echo(value);
        }
      } else {
        app.echo(value);
      }
    }), MouseEventLToFutureLOfboolL()));
    let username = InputElementL().as(html.querySelector("#username"));
    let password = InputElementL().as(html.querySelector("#password"));
    let login = ButtonElementL().as(html.querySelector("#login"));
    login[$onClick].listen(dart.fn(event => async.async(core.Null, function*() {
    }), MouseEventLToFutureLOfNullN()));
  };
  dart.trackLibraries("web/main", {
    "org-dartlang-app:///web/main.dart": main
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["main.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AAyBQ,kBAA+B,yCAAQ,eAAM;AAC7C,kBAAU,wCAAkB,OAAO;AACnC,cAAM,qBAAQ,OAAO;AAErB,iBAAgC,oBAAvB,mBAAc;AAoB3B,IAnBF,AAAO,AAAQ,MAAT,kBAAgB,QAAC;AACf,gBAA4B,uBAAtB,mBAAc;AACpB,kBAAQ,AAAI,AAAM,GAAP;AACH,MAAd,AAAI,GAAD,WAAS;AAEZ,UAAI,AAAM,KAAD,YAAU,MAAO;AAE1B,UAAI,AAAM,AAAa,KAAd,WAAS,OAAO;AACjB,uBAAW,AAAM,KAAD,aAAW,GAAG,AAAM,KAAD,WAAS;AAC5C,oBAAY,kBAAS,QAAQ;AAEnC,YAAI,KAAK,IAAI;AACmD,UAA9D,AAAI,GAAD,YAAY,AAAM,KAAD,aAAW,AAAM,AAAa,KAAd,WAAS,OAAO,IAAI,KAAK;;AAE9C,UAAf,AAAI,GAAD,MAAM,KAAK;;;AAGD,QAAf,AAAI,GAAD,MAAM,KAAK;;IAEjB;AACK,mBAAsC,mBAA3B,mBAAc;AACzB,mBAAsC,mBAA3B,mBAAc;AACzB,gBAAgC,oBAAxB,mBAAc;AACU,IAAtC,AAAM,AAAQ,KAAT,kBAAgB,QAAC;IAAe;EACvC","file":"main.unsound.ddc.js"}');
  // Exports:
  return {
    web__main: main
  };
}));

//# sourceMappingURL=main.unsound.ddc.js.map

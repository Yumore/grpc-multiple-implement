define(['dart_sdk'], (function load__packages__collection__src__utils(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  var utils = Object.create(dart.library);
  var $compareTo = dartx.compareTo;
  var ComparableL = () => (ComparableL = dart.constFn(dart.legacy(core.Comparable)))();
  var intL = () => (intL = dart.constFn(dart.legacy(core.int)))();
  const CT = Object.create(null);
  var L0 = "package:collection/src/utils.dart";
  const _is_Pair_default = Symbol('_is_Pair_default');
  var first$ = dart.privateName(utils, "Pair.first");
  var last$ = dart.privateName(utils, "Pair.last");
  utils.Pair$ = dart.generic((E, F) => {
    var EL = () => (EL = dart.constFn(dart.legacy(E)))();
    var FL = () => (FL = dart.constFn(dart.legacy(F)))();
    class Pair extends core.Object {
      get first() {
        return this[first$];
      }
      set first(value) {
        this[first$] = EL().as(value);
      }
      get last() {
        return this[last$];
      }
      set last(value) {
        this[last$] = FL().as(value);
      }
    }
    (Pair.new = function(first, last) {
      this[first$] = first;
      this[last$] = last;
      ;
    }).prototype = Pair.prototype;
    dart.addTypeTests(Pair);
    Pair.prototype[_is_Pair_default] = true;
    dart.addTypeCaches(Pair);
    dart.setLibraryUri(Pair, L0);
    dart.setFieldSignature(Pair, () => ({
      __proto__: dart.getFields(Pair.__proto__),
      first: dart.fieldType(dart.legacy(E)),
      last: dart.fieldType(dart.legacy(F))
    }));
    return Pair;
  });
  utils.Pair = utils.Pair$();
  dart.addTypeTests(utils.Pair, _is_Pair_default);
  utils.defaultCompare = function defaultCompare(T) {
    return dart.fn((value1, value2) => ComparableL().as(value1)[$compareTo](value2), dart.fnType(intL(), [dart.legacy(T), dart.legacy(T)]));
  };
  dart.trackLibraries("packages/collection/src/utils", {
    "package:collection/src/utils.dart": utils
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["utils.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;MAMI;;;;;;MACA;;;;;;;yBAEQ,OAAY;MAAZ;MAAY;;IAAK;;;;;;;;;;;;;;;AAKzB,oBAAC,QAAQ,WAAmB,AAAe,iBAAtB,MAAM,cAA0B,MAAM;EAAC","file":"utils.unsound.ddc.js"}');
  // Exports:
  return {
    src__utils: utils
  };
}));

//# sourceMappingURL=utils.unsound.ddc.js.map

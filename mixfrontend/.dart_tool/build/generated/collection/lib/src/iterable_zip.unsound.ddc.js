define(['dart_sdk'], (function load__packages__collection__src__iterable_zip(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const collection = dart_sdk.collection;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  var iterable_zip = Object.create(dart.library);
  var $iterator = dartx.iterator;
  var $map = dartx.map;
  var $toList = dartx.toList;
  var $isEmpty = dartx.isEmpty;
  var $length = dartx.length;
  var $_get = dartx._get;
  var $_set = dartx._set;
  const CT = Object.create(null);
  var L0 = "package:collection/src/iterable_zip.dart";
  var _iterables = dart.privateName(iterable_zip, "_iterables");
  const _is_IterableZip_default = Symbol('_is_IterableZip_default');
  iterable_zip.IterableZip$ = dart.generic(T => {
    var TL = () => (TL = dart.constFn(dart.legacy(T)))();
    var IteratorOfTL = () => (IteratorOfTL = dart.constFn(core.Iterator$(TL())))();
    var IteratorLOfTL = () => (IteratorLOfTL = dart.constFn(dart.legacy(IteratorOfTL())))();
    var IterableOfTL = () => (IterableOfTL = dart.constFn(core.Iterable$(TL())))();
    var IterableLOfTL = () => (IterableLOfTL = dart.constFn(dart.legacy(IterableOfTL())))();
    var IterableLOfTLToIteratorLOfTL = () => (IterableLOfTLToIteratorLOfTL = dart.constFn(dart.fnType(IteratorLOfTL(), [IterableLOfTL()])))();
    var _IteratorZipOfTL = () => (_IteratorZipOfTL = dart.constFn(iterable_zip._IteratorZip$(TL())))();
    class IterableZip extends collection.IterableBase$(dart.legacy(core.List$(dart.legacy(T)))) {
      get iterator() {
        let iterators = this[_iterables][$map](IteratorLOfTL(), dart.fn(x => x[$iterator], IterableLOfTLToIteratorLOfTL()))[$toList]({growable: false});
        return new (_IteratorZipOfTL()).new(iterators);
      }
    }
    (IterableZip.new = function(iterables) {
      this[_iterables] = iterables;
      IterableZip.__proto__.new.call(this);
      ;
    }).prototype = IterableZip.prototype;
    dart.addTypeTests(IterableZip);
    IterableZip.prototype[_is_IterableZip_default] = true;
    dart.addTypeCaches(IterableZip);
    dart.setGetterSignature(IterableZip, () => ({
      __proto__: dart.getGetters(IterableZip.__proto__),
      iterator: dart.legacy(core.Iterator$(dart.legacy(core.List$(dart.legacy(T))))),
      [$iterator]: dart.legacy(core.Iterator$(dart.legacy(core.List$(dart.legacy(T)))))
    }));
    dart.setLibraryUri(IterableZip, L0);
    dart.setFieldSignature(IterableZip, () => ({
      __proto__: dart.getFields(IterableZip.__proto__),
      [_iterables]: dart.finalFieldType(dart.legacy(core.Iterable$(dart.legacy(core.Iterable$(dart.legacy(T))))))
    }));
    dart.defineExtensionAccessors(IterableZip, ['iterator']);
    return IterableZip;
  });
  iterable_zip.IterableZip = iterable_zip.IterableZip$();
  dart.addTypeTests(iterable_zip.IterableZip, _is_IterableZip_default);
  var _current = dart.privateName(iterable_zip, "_current");
  var _iterators = dart.privateName(iterable_zip, "_iterators");
  const _is__IteratorZip_default = Symbol('_is__IteratorZip_default');
  iterable_zip._IteratorZip$ = dart.generic(T => {
    var TL = () => (TL = dart.constFn(dart.legacy(T)))();
    var ListOfTL = () => (ListOfTL = dart.constFn(core.List$(TL())))();
    class _IteratorZip extends core.Object {
      moveNext() {
        if (dart.test(this[_iterators][$isEmpty])) return false;
        for (let i = 0; i < dart.notNull(this[_iterators][$length]); i = i + 1) {
          if (!dart.test(this[_iterators][$_get](i).moveNext())) {
            this[_current] = null;
            return false;
          }
        }
        this[_current] = ListOfTL().new(this[_iterators][$length]);
        for (let i = 0; i < dart.notNull(this[_iterators][$length]); i = i + 1) {
          this[_current][$_set](i, this[_iterators][$_get](i).current);
        }
        return true;
      }
      get current() {
        return this[_current];
      }
    }
    (_IteratorZip.new = function(iterators) {
      this[_current] = null;
      this[_iterators] = iterators;
      ;
    }).prototype = _IteratorZip.prototype;
    dart.addTypeTests(_IteratorZip);
    _IteratorZip.prototype[_is__IteratorZip_default] = true;
    dart.addTypeCaches(_IteratorZip);
    _IteratorZip[dart.implements] = () => [core.Iterator$(dart.legacy(core.List$(dart.legacy(T))))];
    dart.setMethodSignature(_IteratorZip, () => ({
      __proto__: dart.getMethods(_IteratorZip.__proto__),
      moveNext: dart.fnType(dart.legacy(core.bool), [])
    }));
    dart.setGetterSignature(_IteratorZip, () => ({
      __proto__: dart.getGetters(_IteratorZip.__proto__),
      current: dart.legacy(core.List$(dart.legacy(T)))
    }));
    dart.setLibraryUri(_IteratorZip, L0);
    dart.setFieldSignature(_IteratorZip, () => ({
      __proto__: dart.getFields(_IteratorZip.__proto__),
      [_iterators]: dart.finalFieldType(dart.legacy(core.List$(dart.legacy(core.Iterator$(dart.legacy(T)))))),
      [_current]: dart.fieldType(dart.legacy(core.List$(dart.legacy(T))))
    }));
    return _IteratorZip;
  });
  iterable_zip._IteratorZip = iterable_zip._IteratorZip$();
  dart.addTypeTests(iterable_zip._IteratorZip, _is__IteratorZip_default);
  dart.trackLibraries("packages/collection/src/iterable_zip", {
    "package:collection/src/iterable_zip.dart": iterable_zip
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["iterable_zip.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;AAwBQ,wBAAY,AAAW,AAAuB,wCAAnB,QAAC,KAAM,AAAE,CAAD,kEAA4B;AAEnE,cAAO,8BAAgB,SAAS;MAClC;;gCATkC;MAAwB,mBAAE,SAAS;AAArE;;IAAqE;;;;;;;;;;;;;;;;;;;;;;;;;;;AAoBnE,sBAAI,AAAW,6BAAS,MAAO;AAC/B,iBAAS,IAAI,GAAG,AAAE,CAAD,gBAAG,AAAW,4BAAQ,IAAA,AAAC,CAAA;AACtC,yBAAK,AAAU,AAAI,wBAAH,CAAC;AACA,YAAf,iBAAW;AACX,kBAAO;;;AAGuB,QAAlC,iBAAW,eAAK,AAAW;AAC3B,iBAAS,IAAI,GAAG,AAAE,CAAD,gBAAG,AAAW,4BAAQ,IAAA,AAAC,CAAA;AACH,UAAnC,AAAQ,sBAAC,CAAC,EAAI,AAAU,AAAI,wBAAH,CAAC;;AAE5B,cAAO;MACT;;AAGuB;MAAQ;;iCAnBA;MAFvB;MAE+C,mBAAE,SAAS","file":"iterable_zip.unsound.ddc.js"}');
  // Exports:
  return {
    src__iterable_zip: iterable_zip
  };
}));

//# sourceMappingURL=iterable_zip.unsound.ddc.js.map

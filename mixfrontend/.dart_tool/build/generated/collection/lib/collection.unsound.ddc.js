define(['dart_sdk', 'packages/collection/src/canonicalized_map', 'packages/collection/src/utils'], (function load__packages__collection__collection(dart_sdk, packages__collection__src__canonicalized_map, packages__collection__src__utils) {
  'use strict';
  const core = dart_sdk.core;
  const collection = dart_sdk.collection;
  const _js_helper = dart_sdk._js_helper;
  const _interceptors = dart_sdk._interceptors;
  const math = dart_sdk.math;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const unmodifiable_wrappers = packages__collection__src__canonicalized_map.src__unmodifiable_wrappers;
  const wrappers = packages__collection__src__canonicalized_map.src__wrappers;
  const utils = packages__collection__src__utils.src__utils;
  var combined_iterable = Object.create(dart.library);
  var queue_list = Object.create(dart.library);
  var union_set = Object.create(dart.library);
  var combined_list = Object.create(dart.library);
  var combined_map = Object.create(dart.library);
  var collection$ = Object.create(dart.library);
  var union_set_controller = Object.create(dart.library);
  var functions = Object.create(dart.library);
  var equality_set = Object.create(dart.library);
  var equality_map = Object.create(dart.library);
  var $iterator = dartx.iterator;
  var $map = dartx.map;
  var $contains = dartx.contains;
  var $any = dartx.any;
  var $isEmpty = dartx.isEmpty;
  var $every = dartx.every;
  var $length = dartx.length;
  var $fold = dartx.fold;
  var $setRange = dartx.setRange;
  var $_set = dartx._set;
  var $_get = dartx._get;
  var $fillRange = dartx.fillRange;
  var $rightShift = dartx['>>'];
  var $add = dartx.add;
  var $addAll = dartx.addAll;
  var $cast = dartx.cast;
  var $toString = dartx.toString;
  var $toSet = dartx.toSet;
  var $expand = dartx.expand;
  var $where = dartx.where;
  var $firstWhere = dartx.firstWhere;
  var $remove = dartx.remove;
  var $removeWhere = dartx.removeWhere;
  var $retainWhere = dartx.retainWhere;
  var $containsKey = dartx.containsKey;
  var $keys = dartx.keys;
  var $forEach = dartx.forEach;
  var $toList = dartx.toList;
  var $removeLast = dartx.removeLast;
  var $reversed = dartx.reversed;
  var boolL = () => (boolL = dart.constFn(dart.legacy(core.bool)))();
  var intL = () => (intL = dart.constFn(dart.legacy(core.int)))();
  var ListL = () => (ListL = dart.constFn(dart.legacy(core.List)))();
  var VoidToNullN = () => (VoidToNullN = dart.constFn(dart.fnType(core.Null, [])))();
  const CT = Object.create(null);
  var L1 = "org-dartlang-app:///packages/collection/src/queue_list.dart";
  var L2 = "package:collection/src/queue_list.dart";
  var L5 = "package:collection/src/combined_wrappers/combined_map.dart";
  var L7 = "package:collection/src/equality_set.dart";
  var L8 = "package:collection/src/equality_map.dart";
  var L3 = "package:collection/src/union_set.dart";
  var L4 = "package:collection/src/combined_wrappers/combined_list.dart";
  var L0 = "package:collection/src/combined_wrappers/combined_iterable.dart";
  var L6 = "package:collection/src/union_set_controller.dart";
  var _iterables = dart.privateName(combined_iterable, "_iterables");
  const _is_CombinedIterableView_default = Symbol('_is_CombinedIterableView_default');
  var _iterables$ = dart.privateName(combined_iterable, "CombinedIterableView._iterables");
  combined_iterable.CombinedIterableView$ = dart.generic(T => {
    var TL = () => (TL = dart.constFn(dart.legacy(T)))();
    var _CombinedIteratorOfTL = () => (_CombinedIteratorOfTL = dart.constFn(combined_iterable._CombinedIterator$(TL())))();
    var IteratorOfTL = () => (IteratorOfTL = dart.constFn(core.Iterator$(TL())))();
    var IteratorLOfTL = () => (IteratorLOfTL = dart.constFn(dart.legacy(IteratorOfTL())))();
    var IterableOfTL = () => (IterableOfTL = dart.constFn(core.Iterable$(TL())))();
    var IterableLOfTL = () => (IterableLOfTL = dart.constFn(dart.legacy(IterableOfTL())))();
    var IterableLOfTLToIteratorLOfTL = () => (IterableLOfTLToIteratorLOfTL = dart.constFn(dart.fnType(IteratorLOfTL(), [IterableLOfTL()])))();
    var IterableLOfTLToboolL = () => (IterableLOfTLToboolL = dart.constFn(dart.fnType(boolL(), [IterableLOfTL()])))();
    var intLAndIterableLOfTLTointL = () => (intLAndIterableLOfTLTointL = dart.constFn(dart.fnType(intL(), [intL(), IterableLOfTL()])))();
    class CombinedIterableView extends collection.IterableBase$(dart.legacy(T)) {
      get [_iterables]() {
        return this[_iterables$];
      }
      set [_iterables](value) {
        super[_iterables] = value;
      }
      get iterator() {
        return new (_CombinedIteratorOfTL()).new(this[_iterables][$map](IteratorLOfTL(), dart.fn(i => i[$iterator], IterableLOfTLToIteratorLOfTL()))[$iterator]);
      }
      contains(element) {
        return this[_iterables][$any](dart.fn(i => i[$contains](element), IterableLOfTLToboolL()));
      }
      get isEmpty() {
        return this[_iterables][$every](dart.fn(i => i[$isEmpty], IterableLOfTLToboolL()));
      }
      get length() {
        return this[_iterables][$fold](intL(), 0, dart.fn((length, i) => dart.notNull(length) + dart.notNull(i[$length]), intLAndIterableLOfTLTointL()));
      }
    }
    (CombinedIterableView.new = function(_iterables) {
      this[_iterables$] = _iterables;
      CombinedIterableView.__proto__.new.call(this);
      ;
    }).prototype = CombinedIterableView.prototype;
    dart.addTypeTests(CombinedIterableView);
    CombinedIterableView.prototype[_is_CombinedIterableView_default] = true;
    dart.addTypeCaches(CombinedIterableView);
    dart.setMethodSignature(CombinedIterableView, () => ({
      __proto__: dart.getMethods(CombinedIterableView.__proto__),
      contains: dart.fnType(dart.legacy(core.bool), [dart.legacy(core.Object)]),
      [$contains]: dart.fnType(dart.legacy(core.bool), [dart.legacy(core.Object)])
    }));
    dart.setGetterSignature(CombinedIterableView, () => ({
      __proto__: dart.getGetters(CombinedIterableView.__proto__),
      iterator: dart.legacy(core.Iterator$(dart.legacy(T))),
      [$iterator]: dart.legacy(core.Iterator$(dart.legacy(T))),
      isEmpty: dart.legacy(core.bool),
      [$isEmpty]: dart.legacy(core.bool),
      length: dart.legacy(core.int),
      [$length]: dart.legacy(core.int)
    }));
    dart.setLibraryUri(CombinedIterableView, L0);
    dart.setFieldSignature(CombinedIterableView, () => ({
      __proto__: dart.getFields(CombinedIterableView.__proto__),
      [_iterables]: dart.finalFieldType(dart.legacy(core.Iterable$(dart.legacy(core.Iterable$(dart.legacy(T))))))
    }));
    dart.defineExtensionMethods(CombinedIterableView, ['contains']);
    dart.defineExtensionAccessors(CombinedIterableView, ['iterator', 'isEmpty', 'length']);
    return CombinedIterableView;
  });
  combined_iterable.CombinedIterableView = combined_iterable.CombinedIterableView$();
  dart.addTypeTests(combined_iterable.CombinedIterableView, _is_CombinedIterableView_default);
  var _iterators$ = dart.privateName(combined_iterable, "_iterators");
  const _is__CombinedIterator_default = Symbol('_is__CombinedIterator_default');
  combined_iterable._CombinedIterator$ = dart.generic(T => {
    class _CombinedIterator extends core.Object {
      get current() {
        let t0;
        t0 = this[_iterators$].current;
        return t0 == null ? null : t0.current;
      }
      moveNext() {
        let current = this[_iterators$].current;
        if (current != null && dart.test(current.moveNext())) {
          return true;
        }
        return dart.test(this[_iterators$].moveNext()) && dart.test(this.moveNext());
      }
    }
    (_CombinedIterator.new = function(_iterators) {
      this[_iterators$] = _iterators;
      ;
    }).prototype = _CombinedIterator.prototype;
    dart.addTypeTests(_CombinedIterator);
    _CombinedIterator.prototype[_is__CombinedIterator_default] = true;
    dart.addTypeCaches(_CombinedIterator);
    _CombinedIterator[dart.implements] = () => [core.Iterator$(dart.legacy(T))];
    dart.setMethodSignature(_CombinedIterator, () => ({
      __proto__: dart.getMethods(_CombinedIterator.__proto__),
      moveNext: dart.fnType(dart.legacy(core.bool), [])
    }));
    dart.setGetterSignature(_CombinedIterator, () => ({
      __proto__: dart.getGetters(_CombinedIterator.__proto__),
      current: dart.legacy(T)
    }));
    dart.setLibraryUri(_CombinedIterator, L0);
    dart.setFieldSignature(_CombinedIterator, () => ({
      __proto__: dart.getFields(_CombinedIterator.__proto__),
      [_iterators$]: dart.finalFieldType(dart.legacy(core.Iterator$(dart.legacy(core.Iterator$(dart.legacy(T))))))
    }));
    return _CombinedIterator;
  });
  combined_iterable._CombinedIterator = combined_iterable._CombinedIterator$();
  dart.addTypeTests(combined_iterable._CombinedIterator, _is__CombinedIterator_default);
  var _table = dart.privateName(queue_list, "_table");
  var _head = dart.privateName(queue_list, "_head");
  var _tail = dart.privateName(queue_list, "_tail");
  var _add = dart.privateName(queue_list, "_add");
  var _preGrow = dart.privateName(queue_list, "_preGrow");
  var _grow = dart.privateName(queue_list, "_grow");
  var _writeToList = dart.privateName(queue_list, "_writeToList");
  const _is_QueueList_default = Symbol('_is_QueueList_default');
  var _head$ = dart.privateName(queue_list, "QueueList._head");
  var _tail$ = dart.privateName(queue_list, "QueueList._tail");
  queue_list.QueueList$ = dart.generic(E => {
    var EL = () => (EL = dart.constFn(dart.legacy(E)))();
    var ListOfEL = () => (ListOfEL = dart.constFn(core.List$(EL())))();
    var IterableOfEL = () => (IterableOfEL = dart.constFn(core.Iterable$(EL())))();
    var IterableLOfEL = () => (IterableLOfEL = dart.constFn(dart.legacy(IterableOfEL())))();
    const Object_ListMixin$36 = class Object_ListMixin extends core.Object {};
    (Object_ListMixin$36.new = function() {
    }).prototype = Object_ListMixin$36.prototype;
    dart.applyMixin(Object_ListMixin$36, collection.ListMixin$(dart.legacy(E)));
    class QueueList extends Object_ListMixin$36 {
      get [_head]() {
        return this[_head$];
      }
      set [_head](value) {
        this[_head$] = value;
      }
      get [_tail]() {
        return this[_tail$];
      }
      set [_tail](value) {
        this[_tail$] = value;
      }
      static _castFrom(S, T, source) {
        return new (queue_list._CastQueueList$(dart.legacy(S), dart.legacy(T))).new(source);
      }
      static from(source) {
        let t0;
        if (ListL().is(source)) {
          let length = source[$length];
          let queue = new (queue_list.QueueList$(dart.legacy(E))).new(dart.notNull(length) + 1);
          if (!(dart.notNull(queue[_table][$length]) > dart.notNull(length))) dart.assertFailed(null, L1, 57, 14, "queue._table.length > length");
          let sourceList = source;
          queue[_table][$setRange](0, length, sourceList, 0);
          queue[_tail] = length;
          return queue;
        } else {
          t0 = new (queue_list.QueueList$(dart.legacy(E))).new();
          return (() => {
            t0.addAll(source);
            return t0;
          })();
        }
      }
      add(element) {
        EL().as(element);
        this[_add](element);
      }
      addAll(iterable) {
        IterableLOfEL().as(iterable);
        if (ListL().is(iterable)) {
          let list = iterable;
          let addCount = list[$length];
          let length = this.length;
          if (dart.notNull(length) + dart.notNull(addCount) >= dart.notNull(this[_table][$length])) {
            this[_preGrow](dart.notNull(length) + dart.notNull(addCount));
            this[_table][$setRange](length, dart.notNull(length) + dart.notNull(addCount), list, 0);
            this[_tail] = dart.notNull(this[_tail]) + dart.notNull(addCount);
          } else {
            let endSpace = dart.notNull(this[_table][$length]) - dart.notNull(this[_tail]);
            if (dart.notNull(addCount) < endSpace) {
              this[_table][$setRange](this[_tail], dart.notNull(this[_tail]) + dart.notNull(addCount), list, 0);
              this[_tail] = dart.notNull(this[_tail]) + dart.notNull(addCount);
            } else {
              let preSpace = dart.notNull(addCount) - endSpace;
              this[_table][$setRange](this[_tail], dart.notNull(this[_tail]) + endSpace, list, 0);
              this[_table][$setRange](0, preSpace, list, endSpace);
              this[_tail] = preSpace;
            }
          }
        } else {
          for (let element of iterable) {
            this[_add](element);
          }
        }
      }
      cast(T) {
        return queue_list.QueueList._castFrom(EL(), dart.legacy(T), this);
      }
      retype(T) {
        return this.cast(dart.legacy(T));
      }
      toString() {
        return collection.IterableBase.iterableToFullString(this, "{", "}");
      }
      addLast(element) {
        EL().as(element);
        this[_add](element);
      }
      addFirst(element) {
        EL().as(element);
        this[_head] = (dart.notNull(this[_head]) - 1 & dart.notNull(this[_table][$length]) - 1) >>> 0;
        this[_table][$_set](this[_head], element);
        if (this[_head] == this[_tail]) this[_grow]();
      }
      removeFirst() {
        if (this[_head] == this[_tail]) dart.throw(new core.StateError.new("No element"));
        let result = this[_table][$_get](this[_head]);
        this[_table][$_set](this[_head], null);
        this[_head] = (dart.notNull(this[_head]) + 1 & dart.notNull(this[_table][$length]) - 1) >>> 0;
        return result;
      }
      removeLast() {
        if (this[_head] == this[_tail]) dart.throw(new core.StateError.new("No element"));
        this[_tail] = (dart.notNull(this[_tail]) - 1 & dart.notNull(this[_table][$length]) - 1) >>> 0;
        let result = this[_table][$_get](this[_tail]);
        this[_table][$_set](this[_tail], null);
        return result;
      }
      get length() {
        return (dart.notNull(this[_tail]) - dart.notNull(this[_head]) & dart.notNull(this[_table][$length]) - 1) >>> 0;
      }
      set length(value) {
        if (dart.notNull(value) < 0) dart.throw(new core.RangeError.new("Length " + dart.str(value) + " may not be negative."));
        let delta = dart.notNull(value) - dart.notNull(this.length);
        if (delta >= 0) {
          if (dart.notNull(this[_table][$length]) <= dart.notNull(value)) {
            this[_preGrow](value);
          }
          this[_tail] = (dart.notNull(this[_tail]) + delta & dart.notNull(this[_table][$length]) - 1) >>> 0;
          return;
        }
        let newTail = dart.notNull(this[_tail]) + delta;
        if (newTail >= 0) {
          this[_table][$fillRange](newTail, this[_tail], null);
        } else {
          newTail = newTail + dart.notNull(this[_table][$length]);
          this[_table][$fillRange](0, this[_tail], null);
          this[_table][$fillRange](newTail, this[_table][$length], null);
        }
        this[_tail] = newTail;
      }
      _get(index) {
        if (dart.notNull(index) < 0 || dart.notNull(index) >= dart.notNull(this.length)) {
          dart.throw(new core.RangeError.new("Index " + dart.str(index) + " must be in the range [0.." + dart.str(this.length) + ")."));
        }
        return this[_table][$_get]((dart.notNull(this[_head]) + dart.notNull(index) & dart.notNull(this[_table][$length]) - 1) >>> 0);
      }
      _set(index, value$) {
        let value = value$;
        EL().as(value);
        if (dart.notNull(index) < 0 || dart.notNull(index) >= dart.notNull(this.length)) {
          dart.throw(new core.RangeError.new("Index " + dart.str(index) + " must be in the range [0.." + dart.str(this.length) + ")."));
        }
        this[_table][$_set]((dart.notNull(this[_head]) + dart.notNull(index) & dart.notNull(this[_table][$length]) - 1) >>> 0, value);
        return value$;
      }
      static _isPowerOf2(number) {
        return (dart.notNull(number) & dart.notNull(number) - 1) === 0;
      }
      static _nextPowerOf2(number) {
        if (!(dart.notNull(number) > 0)) dart.assertFailed(null, L1, 205, 12, "number > 0");
        number = (dart.notNull(number) << 1 >>> 0) - 1;
        for (;;) {
          let nextNumber = (dart.notNull(number) & dart.notNull(number) - 1) >>> 0;
          if (nextNumber === 0) return number;
          number = nextNumber;
        }
      }
      [_add](element) {
        this[_table][$_set](this[_tail], element);
        this[_tail] = (dart.notNull(this[_tail]) + 1 & dart.notNull(this[_table][$length]) - 1) >>> 0;
        if (this[_head] == this[_tail]) this[_grow]();
      }
      [_grow]() {
        let newTable = ListOfEL().new(dart.notNull(this[_table][$length]) * 2);
        let split = dart.notNull(this[_table][$length]) - dart.notNull(this[_head]);
        newTable[$setRange](0, split, this[_table], this[_head]);
        newTable[$setRange](split, split + dart.notNull(this[_head]), this[_table], 0);
        this[_head] = 0;
        this[_tail] = this[_table][$length];
        this[_table] = newTable;
      }
      [_writeToList](target) {
        if (!(dart.notNull(target[$length]) >= dart.notNull(this.length))) dart.assertFailed(null, L1, 233, 12, "target.length >= length");
        if (dart.notNull(this[_head]) <= dart.notNull(this[_tail])) {
          let length = dart.notNull(this[_tail]) - dart.notNull(this[_head]);
          target[$setRange](0, length, this[_table], this[_head]);
          return length;
        } else {
          let firstPartSize = dart.notNull(this[_table][$length]) - dart.notNull(this[_head]);
          target[$setRange](0, firstPartSize, this[_table], this[_head]);
          target[$setRange](firstPartSize, firstPartSize + dart.notNull(this[_tail]), this[_table], 0);
          return dart.notNull(this[_tail]) + firstPartSize;
        }
      }
      [_preGrow](newElementCount) {
        if (!(dart.notNull(newElementCount) >= dart.notNull(this.length))) dart.assertFailed(null, L1, 248, 12, "newElementCount >= length");
        newElementCount = dart.notNull(newElementCount) + newElementCount[$rightShift](1);
        let newCapacity = queue_list.QueueList._nextPowerOf2(newElementCount);
        let newTable = ListOfEL().new(newCapacity);
        this[_tail] = this[_writeToList](newTable);
        this[_table] = newTable;
        this[_head] = 0;
      }
    }
    (QueueList.new = function(initialCapacity = null) {
      this[_table] = null;
      this[_head$] = 0;
      this[_tail$] = 0;
      if (initialCapacity == null || dart.notNull(initialCapacity) < 8) {
        initialCapacity = 8;
      } else if (!dart.test(queue_list.QueueList._isPowerOf2(initialCapacity))) {
        initialCapacity = queue_list.QueueList._nextPowerOf2(initialCapacity);
      }
      if (!dart.test(queue_list.QueueList._isPowerOf2(initialCapacity))) dart.assertFailed(null, L1, 45, 12, "_isPowerOf2(initialCapacity)");
      this[_table] = ListOfEL().new(initialCapacity);
    }).prototype = QueueList.prototype;
    (QueueList.__ = function() {
      this[_table] = null;
      this[_tail$] = null;
      this[_head$] = null;
      ;
    }).prototype = QueueList.prototype;
    dart.addTypeTests(QueueList);
    QueueList.prototype[_is_QueueList_default] = true;
    dart.addTypeCaches(QueueList);
    QueueList[dart.implements] = () => [collection.Queue$(dart.legacy(E))];
    dart.setMethodSignature(QueueList, () => ({
      __proto__: dart.getMethods(QueueList.__proto__),
      add: dart.fnType(dart.void, [dart.legacy(core.Object)]),
      [$add]: dart.fnType(dart.void, [dart.legacy(core.Object)]),
      addAll: dart.fnType(dart.void, [dart.legacy(core.Object)]),
      [$addAll]: dart.fnType(dart.void, [dart.legacy(core.Object)]),
      cast: dart.gFnType(T => [dart.legacy(queue_list.QueueList$(dart.legacy(T))), []]),
      [$cast]: dart.gFnType(T => [dart.legacy(queue_list.QueueList$(dart.legacy(T))), []]),
      retype: dart.gFnType(T => [dart.legacy(queue_list.QueueList$(dart.legacy(T))), []]),
      toString: dart.fnType(dart.legacy(core.String), []),
      [$toString]: dart.fnType(dart.legacy(core.String), []),
      addLast: dart.fnType(dart.void, [dart.legacy(core.Object)]),
      addFirst: dart.fnType(dart.void, [dart.legacy(core.Object)]),
      removeFirst: dart.fnType(dart.legacy(E), []),
      _get: dart.fnType(dart.legacy(E), [dart.legacy(core.int)]),
      [$_get]: dart.fnType(dart.legacy(E), [dart.legacy(core.int)]),
      _set: dart.fnType(dart.void, [dart.legacy(core.int), dart.legacy(core.Object)]),
      [$_set]: dart.fnType(dart.void, [dart.legacy(core.int), dart.legacy(core.Object)]),
      [_add]: dart.fnType(dart.void, [dart.legacy(E)]),
      [_grow]: dart.fnType(dart.void, []),
      [_writeToList]: dart.fnType(dart.legacy(core.int), [dart.legacy(core.List$(dart.legacy(E)))]),
      [_preGrow]: dart.fnType(dart.void, [dart.legacy(core.int)])
    }));
    dart.setGetterSignature(QueueList, () => ({
      __proto__: dart.getGetters(QueueList.__proto__),
      length: dart.legacy(core.int),
      [$length]: dart.legacy(core.int)
    }));
    dart.setSetterSignature(QueueList, () => ({
      __proto__: dart.getSetters(QueueList.__proto__),
      length: dart.legacy(core.int),
      [$length]: dart.legacy(core.int)
    }));
    dart.setLibraryUri(QueueList, L2);
    dart.setFieldSignature(QueueList, () => ({
      __proto__: dart.getFields(QueueList.__proto__),
      [_table]: dart.fieldType(dart.legacy(core.List$(dart.legacy(E)))),
      [_head]: dart.fieldType(dart.legacy(core.int)),
      [_tail]: dart.fieldType(dart.legacy(core.int))
    }));
    dart.defineExtensionMethods(QueueList, [
      'add',
      'addAll',
      'cast',
      'toString',
      'removeLast',
      '_get',
      '_set'
    ]);
    dart.defineExtensionAccessors(QueueList, ['length']);
    return QueueList;
  });
  queue_list.QueueList = queue_list.QueueList$();
  dart.defineLazy(queue_list.QueueList, {
    /*queue_list.QueueList._INITIAL_CAPACITY*/get _INITIAL_CAPACITY() {
      return 8;
    }
  }, true);
  dart.addTypeTests(queue_list.QueueList, _is_QueueList_default);
  var _delegate$ = dart.privateName(queue_list, "_delegate");
  const _is__CastQueueList_default = Symbol('_is__CastQueueList_default');
  queue_list._CastQueueList$ = dart.generic((S, T) => {
    var TL = () => (TL = dart.constFn(dart.legacy(T)))();
    class _CastQueueList extends queue_list.QueueList$(dart.legacy(T)) {
      get [_head]() {
        return this[_delegate$][_head];
      }
      set [_head](value) {
        return this[_delegate$][_head] = value;
      }
      get [_tail]() {
        return this[_delegate$][_tail];
      }
      set [_tail](value) {
        return this[_delegate$][_tail] = value;
      }
    }
    (_CastQueueList.new = function(_delegate) {
      this[_delegate$] = _delegate;
      _CastQueueList.__proto__.__.call(this);
      this[_table] = this[_delegate$][_table][$cast](TL());
    }).prototype = _CastQueueList.prototype;
    dart.addTypeTests(_CastQueueList);
    _CastQueueList.prototype[_is__CastQueueList_default] = true;
    dart.addTypeCaches(_CastQueueList);
    dart.setGetterSignature(_CastQueueList, () => ({
      __proto__: dart.getGetters(_CastQueueList.__proto__),
      [_head]: dart.legacy(core.int),
      [_tail]: dart.legacy(core.int)
    }));
    dart.setSetterSignature(_CastQueueList, () => ({
      __proto__: dart.getSetters(_CastQueueList.__proto__),
      [_head]: dart.legacy(core.int),
      [_tail]: dart.legacy(core.int)
    }));
    dart.setLibraryUri(_CastQueueList, L2);
    dart.setFieldSignature(_CastQueueList, () => ({
      __proto__: dart.getFields(_CastQueueList.__proto__),
      [_delegate$]: dart.finalFieldType(dart.legacy(queue_list.QueueList$(dart.legacy(S))))
    }));
    return _CastQueueList;
  });
  queue_list._CastQueueList = queue_list._CastQueueList$();
  dart.addTypeTests(queue_list._CastQueueList, _is__CastQueueList_default);
  var _sets$ = dart.privateName(union_set, "_sets");
  var _disjoint = dart.privateName(union_set, "_disjoint");
  var _iterable = dart.privateName(union_set, "_iterable");
  const _is_UnionSet_default = Symbol('_is_UnionSet_default');
  union_set.UnionSet$ = dart.generic(E => {
    var EL = () => (EL = dart.constFn(dart.legacy(E)))();
    var SetOfEL = () => (SetOfEL = dart.constFn(core.Set$(EL())))();
    var SetLOfEL = () => (SetLOfEL = dart.constFn(dart.legacy(SetOfEL())))();
    var intLAndSetLOfELTointL = () => (intLAndSetLOfELTointL = dart.constFn(dart.fnType(intL(), [intL(), SetLOfEL()])))();
    var SetLOfELToSetLOfEL = () => (SetLOfELToSetLOfEL = dart.constFn(dart.fnType(SetLOfEL(), [SetLOfEL()])))();
    var LinkedHashSetOfEL = () => (LinkedHashSetOfEL = dart.constFn(collection.LinkedHashSet$(EL())))();
    var SetLOfELToboolL = () => (SetLOfELToboolL = dart.constFn(dart.fnType(boolL(), [SetLOfEL()])))();
    var SetLOfELToEL = () => (SetLOfELToEL = dart.constFn(dart.fnType(EL(), [SetLOfEL()])))();
    var ELToboolL = () => (ELToboolL = dart.constFn(dart.fnType(boolL(), [EL()])))();
    const SetBase_UnmodifiableSetMixin$36 = class SetBase_UnmodifiableSetMixin extends collection.SetBase$(dart.legacy(E)) {};
    (SetBase_UnmodifiableSetMixin$36.new = function() {
    }).prototype = SetBase_UnmodifiableSetMixin$36.prototype;
    dart.applyMixin(SetBase_UnmodifiableSetMixin$36, unmodifiable_wrappers.UnmodifiableSetMixin$(dart.legacy(E)));
    class UnionSet extends SetBase_UnmodifiableSetMixin$36 {
      get length() {
        return dart.test(this[_disjoint]) ? this[_sets$][$fold](intL(), 0, dart.fn((length, set) => dart.notNull(length) + dart.notNull(set[$length]), intLAndSetLOfELTointL())) : this[_iterable][$length];
      }
      get iterator() {
        return this[_iterable][$iterator];
      }
      get [_iterable]() {
        let allElements = this[_sets$][$expand](EL(), dart.fn(set => set, SetLOfELToSetLOfEL()));
        return dart.test(this[_disjoint]) ? allElements : allElements[$where](dart.bind(LinkedHashSetOfEL().new(), 'add'));
      }
      contains(element) {
        return this[_sets$][$any](dart.fn(set => set.contains(element), SetLOfELToboolL()));
      }
      lookup(element) {
        if (element == null) return null;
        return this[_sets$][$map](EL(), dart.fn(set => set.lookup(element), SetLOfELToEL()))[$firstWhere](dart.fn(result => result != null, ELToboolL()), {orElse: dart.fn(() => null, VoidToNullN())});
      }
      toSet() {
        let result = LinkedHashSetOfEL().new();
        for (let set of this[_sets$]) {
          result.addAll(set);
        }
        return result;
      }
    }
    (UnionSet.new = function(_sets, opts) {
      let disjoint = opts && 'disjoint' in opts ? opts.disjoint : false;
      this[_sets$] = _sets;
      this[_disjoint] = disjoint;
      ;
    }).prototype = UnionSet.prototype;
    (UnionSet.from = function(sets, opts) {
      let disjoint = opts && 'disjoint' in opts ? opts.disjoint : false;
      UnionSet.new.call(this, sets[$toSet](), {disjoint: disjoint});
    }).prototype = UnionSet.prototype;
    dart.addTypeTests(UnionSet);
    UnionSet.prototype[_is_UnionSet_default] = true;
    dart.addTypeCaches(UnionSet);
    dart.setMethodSignature(UnionSet, () => ({
      __proto__: dart.getMethods(UnionSet.__proto__),
      contains: dart.fnType(dart.legacy(core.bool), [dart.legacy(core.Object)]),
      [$contains]: dart.fnType(dart.legacy(core.bool), [dart.legacy(core.Object)]),
      lookup: dart.fnType(dart.legacy(E), [dart.legacy(core.Object)]),
      toSet: dart.fnType(dart.legacy(core.Set$(dart.legacy(E))), []),
      [$toSet]: dart.fnType(dart.legacy(core.Set$(dart.legacy(E))), [])
    }));
    dart.setGetterSignature(UnionSet, () => ({
      __proto__: dart.getGetters(UnionSet.__proto__),
      length: dart.legacy(core.int),
      [$length]: dart.legacy(core.int),
      iterator: dart.legacy(core.Iterator$(dart.legacy(E))),
      [$iterator]: dart.legacy(core.Iterator$(dart.legacy(E))),
      [_iterable]: dart.legacy(core.Iterable$(dart.legacy(E)))
    }));
    dart.setLibraryUri(UnionSet, L3);
    dart.setFieldSignature(UnionSet, () => ({
      __proto__: dart.getFields(UnionSet.__proto__),
      [_sets$]: dart.finalFieldType(dart.legacy(core.Set$(dart.legacy(core.Set$(dart.legacy(E)))))),
      [_disjoint]: dart.finalFieldType(dart.legacy(core.bool))
    }));
    dart.defineExtensionMethods(UnionSet, ['contains', 'toSet']);
    dart.defineExtensionAccessors(UnionSet, ['length', 'iterator']);
    return UnionSet;
  });
  union_set.UnionSet = union_set.UnionSet$();
  dart.addTypeTests(union_set.UnionSet, _is_UnionSet_default);
  var _lists$ = dart.privateName(combined_list, "_lists");
  const _is_CombinedListView_default = Symbol('_is_CombinedListView_default');
  combined_list.CombinedListView$ = dart.generic(T => {
    var TL = () => (TL = dart.constFn(dart.legacy(T)))();
    var ListOfTL = () => (ListOfTL = dart.constFn(core.List$(TL())))();
    var ListLOfTL = () => (ListLOfTL = dart.constFn(dart.legacy(ListOfTL())))();
    var intLAndListLOfTLTointL = () => (intLAndListLOfTLTointL = dart.constFn(dart.fnType(intL(), [intL(), ListLOfTL()])))();
    class CombinedListView extends collection.ListBase$(dart.legacy(T)) {
      static _throw() {
        dart.throw(new core.UnsupportedError.new("Cannot modify an unmodifiable List"));
      }
      set length(length) {
        combined_list.CombinedListView._throw();
      }
      get length() {
        return this[_lists$][$fold](intL(), 0, dart.fn((length, list) => dart.notNull(length) + dart.notNull(list[$length]), intLAndListLOfTLTointL()));
      }
      _get(index) {
        let initialIndex = index;
        for (let i = 0; i < dart.notNull(this[_lists$][$length]); i = i + 1) {
          let list = this[_lists$][$_get](i);
          if (dart.notNull(index) < dart.notNull(list[$length])) {
            return list[$_get](index);
          }
          index = dart.notNull(index) - dart.notNull(list[$length]);
        }
        dart.throw(new core.IndexError.new(initialIndex, this, "index", null, this.length));
      }
      _set(index, value$) {
        let value = value$;
        TL().as(value);
        combined_list.CombinedListView._throw();
        return value$;
      }
      clear() {
        combined_list.CombinedListView._throw();
      }
      remove(element) {
        combined_list.CombinedListView._throw();
        return null;
      }
      removeWhere(test) {
        combined_list.CombinedListView._throw();
      }
      retainWhere(test) {
        combined_list.CombinedListView._throw();
      }
    }
    (CombinedListView.new = function(_lists) {
      this[_lists$] = _lists;
      ;
    }).prototype = CombinedListView.prototype;
    dart.addTypeTests(CombinedListView);
    CombinedListView.prototype[_is_CombinedListView_default] = true;
    dart.addTypeCaches(CombinedListView);
    CombinedListView[dart.implements] = () => [collection.UnmodifiableListView$(dart.legacy(T))];
    dart.setMethodSignature(CombinedListView, () => ({
      __proto__: dart.getMethods(CombinedListView.__proto__),
      _get: dart.fnType(dart.legacy(T), [dart.legacy(core.int)]),
      [$_get]: dart.fnType(dart.legacy(T), [dart.legacy(core.int)]),
      _set: dart.fnType(dart.void, [dart.legacy(core.int), dart.legacy(core.Object)]),
      [$_set]: dart.fnType(dart.void, [dart.legacy(core.int), dart.legacy(core.Object)]),
      remove: dart.fnType(dart.legacy(core.bool), [dart.legacy(core.Object)]),
      [$remove]: dart.fnType(dart.legacy(core.bool), [dart.legacy(core.Object)]),
      removeWhere: dart.fnType(dart.void, [dart.legacy(dart.fnType(dart.legacy(core.bool), [dart.legacy(T)]))]),
      [$removeWhere]: dart.fnType(dart.void, [dart.legacy(dart.fnType(dart.legacy(core.bool), [dart.legacy(T)]))]),
      retainWhere: dart.fnType(dart.void, [dart.legacy(dart.fnType(dart.legacy(core.bool), [dart.legacy(T)]))]),
      [$retainWhere]: dart.fnType(dart.void, [dart.legacy(dart.fnType(dart.legacy(core.bool), [dart.legacy(T)]))])
    }));
    dart.setGetterSignature(CombinedListView, () => ({
      __proto__: dart.getGetters(CombinedListView.__proto__),
      length: dart.legacy(core.int),
      [$length]: dart.legacy(core.int)
    }));
    dart.setSetterSignature(CombinedListView, () => ({
      __proto__: dart.getSetters(CombinedListView.__proto__),
      length: dart.legacy(core.int),
      [$length]: dart.legacy(core.int)
    }));
    dart.setLibraryUri(CombinedListView, L4);
    dart.setFieldSignature(CombinedListView, () => ({
      __proto__: dart.getFields(CombinedListView.__proto__),
      [_lists$]: dart.finalFieldType(dart.legacy(core.List$(dart.legacy(core.List$(dart.legacy(T))))))
    }));
    dart.defineExtensionMethods(CombinedListView, [
      '_get',
      '_set',
      'clear',
      'remove',
      'removeWhere',
      'retainWhere'
    ]);
    dart.defineExtensionAccessors(CombinedListView, ['length']);
    return CombinedListView;
  });
  combined_list.CombinedListView = combined_list.CombinedListView$();
  dart.addTypeTests(combined_list.CombinedListView, _is_CombinedListView_default);
  var _maps$ = dart.privateName(combined_map, "_maps");
  const _is_CombinedMapView_default = Symbol('_is_CombinedMapView_default');
  combined_map.CombinedMapView$ = dart.generic((K, V) => {
    var KL = () => (KL = dart.constFn(dart.legacy(K)))();
    var _DeduplicatingIterableViewOfKL = () => (_DeduplicatingIterableViewOfKL = dart.constFn(combined_map._DeduplicatingIterableView$(KL())))();
    var CombinedIterableViewOfKL = () => (CombinedIterableViewOfKL = dart.constFn(combined_iterable.CombinedIterableView$(KL())))();
    var IterableOfKL = () => (IterableOfKL = dart.constFn(core.Iterable$(KL())))();
    var IterableLOfKL = () => (IterableLOfKL = dart.constFn(dart.legacy(IterableOfKL())))();
    var MapOfKL$VL = () => (MapOfKL$VL = dart.constFn(core.Map$(KL(), VL())))();
    var MapLOfKL$VL = () => (MapLOfKL$VL = dart.constFn(dart.legacy(MapOfKL$VL())))();
    var MapLOfKL$VLToIterableLOfKL = () => (MapLOfKL$VLToIterableLOfKL = dart.constFn(dart.fnType(IterableLOfKL(), [MapLOfKL$VL()])))();
    var VL = () => (VL = dart.constFn(dart.legacy(V)))();
    class CombinedMapView extends collection.UnmodifiableMapBase$(dart.legacy(K), dart.legacy(V)) {
      _get(key) {
        for (let map of this[_maps$]) {
          let value = map[$_get](key);
          if (value != null || dart.test(map[$containsKey](value))) {
            return value;
          }
        }
        return null;
      }
      get keys() {
        return new (_DeduplicatingIterableViewOfKL()).new(new (CombinedIterableViewOfKL()).new(this[_maps$][$map](IterableLOfKL(), dart.fn(m => m[$keys], MapLOfKL$VLToIterableLOfKL()))));
      }
    }
    (CombinedMapView.new = function(_maps) {
      this[_maps$] = _maps;
      ;
    }).prototype = CombinedMapView.prototype;
    dart.addTypeTests(CombinedMapView);
    CombinedMapView.prototype[_is_CombinedMapView_default] = true;
    dart.addTypeCaches(CombinedMapView);
    dart.setMethodSignature(CombinedMapView, () => ({
      __proto__: dart.getMethods(CombinedMapView.__proto__),
      _get: dart.fnType(dart.legacy(V), [dart.legacy(core.Object)]),
      [$_get]: dart.fnType(dart.legacy(V), [dart.legacy(core.Object)])
    }));
    dart.setGetterSignature(CombinedMapView, () => ({
      __proto__: dart.getGetters(CombinedMapView.__proto__),
      keys: dart.legacy(core.Iterable$(dart.legacy(K))),
      [$keys]: dart.legacy(core.Iterable$(dart.legacy(K)))
    }));
    dart.setLibraryUri(CombinedMapView, L5);
    dart.setFieldSignature(CombinedMapView, () => ({
      __proto__: dart.getFields(CombinedMapView.__proto__),
      [_maps$]: dart.finalFieldType(dart.legacy(core.Iterable$(dart.legacy(core.Map$(dart.legacy(K), dart.legacy(V))))))
    }));
    dart.defineExtensionMethods(CombinedMapView, ['_get']);
    dart.defineExtensionAccessors(CombinedMapView, ['keys']);
    return CombinedMapView;
  });
  combined_map.CombinedMapView = combined_map.CombinedMapView$();
  dart.addTypeTests(combined_map.CombinedMapView, _is_CombinedMapView_default);
  var _iterable$ = dart.privateName(combined_map, "_iterable");
  const _is__DeduplicatingIterableView_default = Symbol('_is__DeduplicatingIterableView_default');
  var _iterable$0 = dart.privateName(combined_map, "_DeduplicatingIterableView._iterable");
  combined_map._DeduplicatingIterableView$ = dart.generic(T => {
    var TL = () => (TL = dart.constFn(dart.legacy(T)))();
    var _DeduplicatingIteratorOfTL = () => (_DeduplicatingIteratorOfTL = dart.constFn(combined_map._DeduplicatingIterator$(TL())))();
    class _DeduplicatingIterableView extends collection.IterableBase$(dart.legacy(T)) {
      get [_iterable$]() {
        return this[_iterable$0];
      }
      set [_iterable$](value) {
        super[_iterable$] = value;
      }
      get iterator() {
        return new (_DeduplicatingIteratorOfTL()).new(this[_iterable$][$iterator]);
      }
      contains(element) {
        return this[_iterable$][$contains](element);
      }
      get isEmpty() {
        return this[_iterable$][$isEmpty];
      }
    }
    (_DeduplicatingIterableView.new = function(_iterable) {
      this[_iterable$0] = _iterable;
      _DeduplicatingIterableView.__proto__.new.call(this);
      ;
    }).prototype = _DeduplicatingIterableView.prototype;
    dart.addTypeTests(_DeduplicatingIterableView);
    _DeduplicatingIterableView.prototype[_is__DeduplicatingIterableView_default] = true;
    dart.addTypeCaches(_DeduplicatingIterableView);
    dart.setMethodSignature(_DeduplicatingIterableView, () => ({
      __proto__: dart.getMethods(_DeduplicatingIterableView.__proto__),
      contains: dart.fnType(dart.legacy(core.bool), [dart.legacy(core.Object)]),
      [$contains]: dart.fnType(dart.legacy(core.bool), [dart.legacy(core.Object)])
    }));
    dart.setGetterSignature(_DeduplicatingIterableView, () => ({
      __proto__: dart.getGetters(_DeduplicatingIterableView.__proto__),
      iterator: dart.legacy(core.Iterator$(dart.legacy(T))),
      [$iterator]: dart.legacy(core.Iterator$(dart.legacy(T))),
      isEmpty: dart.legacy(core.bool),
      [$isEmpty]: dart.legacy(core.bool)
    }));
    dart.setLibraryUri(_DeduplicatingIterableView, L5);
    dart.setFieldSignature(_DeduplicatingIterableView, () => ({
      __proto__: dart.getFields(_DeduplicatingIterableView.__proto__),
      [_iterable$]: dart.finalFieldType(dart.legacy(core.Iterable$(dart.legacy(T))))
    }));
    dart.defineExtensionMethods(_DeduplicatingIterableView, ['contains']);
    dart.defineExtensionAccessors(_DeduplicatingIterableView, ['iterator', 'isEmpty']);
    return _DeduplicatingIterableView;
  });
  combined_map._DeduplicatingIterableView = combined_map._DeduplicatingIterableView$();
  dart.addTypeTests(combined_map._DeduplicatingIterableView, _is__DeduplicatingIterableView_default);
  var _emitted = dart.privateName(combined_map, "_emitted");
  var _iterator$ = dart.privateName(combined_map, "_iterator");
  const _is__DeduplicatingIterator_default = Symbol('_is__DeduplicatingIterator_default');
  combined_map._DeduplicatingIterator$ = dart.generic(T => {
    var TL = () => (TL = dart.constFn(dart.legacy(T)))();
    var _HashSetOfTL = () => (_HashSetOfTL = dart.constFn(collection._HashSet$(TL())))();
    class _DeduplicatingIterator extends core.Object {
      get current() {
        return this[_iterator$].current;
      }
      moveNext() {
        while (dart.test(this[_iterator$].moveNext())) {
          if (dart.test(this[_emitted].add(this.current))) {
            return true;
          }
        }
        return false;
      }
    }
    (_DeduplicatingIterator.new = function(_iterator) {
      this[_emitted] = new (_HashSetOfTL()).new();
      this[_iterator$] = _iterator;
      ;
    }).prototype = _DeduplicatingIterator.prototype;
    dart.addTypeTests(_DeduplicatingIterator);
    _DeduplicatingIterator.prototype[_is__DeduplicatingIterator_default] = true;
    dart.addTypeCaches(_DeduplicatingIterator);
    _DeduplicatingIterator[dart.implements] = () => [core.Iterator$(dart.legacy(T))];
    dart.setMethodSignature(_DeduplicatingIterator, () => ({
      __proto__: dart.getMethods(_DeduplicatingIterator.__proto__),
      moveNext: dart.fnType(dart.legacy(core.bool), [])
    }));
    dart.setGetterSignature(_DeduplicatingIterator, () => ({
      __proto__: dart.getGetters(_DeduplicatingIterator.__proto__),
      current: dart.legacy(T)
    }));
    dart.setLibraryUri(_DeduplicatingIterator, L5);
    dart.setFieldSignature(_DeduplicatingIterator, () => ({
      __proto__: dart.getFields(_DeduplicatingIterator.__proto__),
      [_iterator$]: dart.finalFieldType(dart.legacy(core.Iterator$(dart.legacy(T)))),
      [_emitted]: dart.finalFieldType(dart.legacy(collection.HashSet$(dart.legacy(T))))
    }));
    return _DeduplicatingIterator;
  });
  combined_map._DeduplicatingIterator = combined_map._DeduplicatingIterator$();
  dart.addTypeTests(combined_map._DeduplicatingIterator, _is__DeduplicatingIterator_default);
  var _set = dart.privateName(union_set_controller, "_set");
  var _sets = dart.privateName(union_set_controller, "_sets");
  const _is_UnionSetController_default = Symbol('_is_UnionSetController_default');
  union_set_controller.UnionSetController$ = dart.generic(E => {
    var EL = () => (EL = dart.constFn(dart.legacy(E)))();
    var SetOfEL = () => (SetOfEL = dart.constFn(core.Set$(EL())))();
    var SetLOfEL = () => (SetLOfEL = dart.constFn(dart.legacy(SetOfEL())))();
    var LinkedHashSetOfSetLOfEL = () => (LinkedHashSetOfSetLOfEL = dart.constFn(collection.LinkedHashSet$(SetLOfEL())))();
    var UnionSetOfEL = () => (UnionSetOfEL = dart.constFn(union_set.UnionSet$(EL())))();
    class UnionSetController extends core.Object {
      get set() {
        return this[_set];
      }
      add(component) {
        SetLOfEL().as(component);
        this[_sets].add(component);
      }
      remove(component) {
        SetLOfEL().as(component);
        return this[_sets].remove(component);
      }
    }
    (UnionSetController.new = function(opts) {
      let disjoint = opts && 'disjoint' in opts ? opts.disjoint : false;
      this[_set] = null;
      this[_sets] = LinkedHashSetOfSetLOfEL().new();
      this[_set] = new (UnionSetOfEL()).new(this[_sets], {disjoint: disjoint});
    }).prototype = UnionSetController.prototype;
    dart.addTypeTests(UnionSetController);
    UnionSetController.prototype[_is_UnionSetController_default] = true;
    dart.addTypeCaches(UnionSetController);
    dart.setMethodSignature(UnionSetController, () => ({
      __proto__: dart.getMethods(UnionSetController.__proto__),
      add: dart.fnType(dart.void, [dart.legacy(core.Object)]),
      remove: dart.fnType(dart.legacy(core.bool), [dart.legacy(core.Object)])
    }));
    dart.setGetterSignature(UnionSetController, () => ({
      __proto__: dart.getGetters(UnionSetController.__proto__),
      set: dart.legacy(union_set.UnionSet$(dart.legacy(E)))
    }));
    dart.setLibraryUri(UnionSetController, L6);
    dart.setFieldSignature(UnionSetController, () => ({
      __proto__: dart.getFields(UnionSetController.__proto__),
      [_set]: dart.fieldType(dart.legacy(union_set.UnionSet$(dart.legacy(E)))),
      [_sets]: dart.finalFieldType(dart.legacy(core.Set$(dart.legacy(core.Set$(dart.legacy(E))))))
    }));
    return UnionSetController;
  });
  union_set_controller.UnionSetController = union_set_controller.UnionSetController$();
  dart.addTypeTests(union_set_controller.UnionSetController, _is_UnionSetController_default);
  functions.mapMap = function mapMap(K1, V1, K2, V2, map, opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let value = opts && 'value' in opts ? opts.value : null;
    key == null ? key = dart.fn((mapKey, _) => dart.legacy(K2).as(mapKey), dart.fnType(dart.legacy(K2), [dart.legacy(K1), dart.legacy(V1)])) : null;
    value == null ? value = dart.fn((_, mapValue) => dart.legacy(V2).as(mapValue), dart.fnType(dart.legacy(V2), [dart.legacy(K1), dart.legacy(V1)])) : null;
    let result = new (_js_helper.LinkedMap$(dart.legacy(K2), dart.legacy(V2))).new();
    map[$forEach](dart.fn((mapKey, mapValue) => {
      result[$_set](key(mapKey, mapValue), value(mapKey, mapValue));
    }, dart.fnType(core.Null, [dart.legacy(K1), dart.legacy(V1)])));
    return result;
  };
  functions.mergeMaps = function mergeMaps(K, V, map1, map2, opts) {
    let t0;
    let value = opts && 'value' in opts ? opts.value : null;
    let result = collection.LinkedHashMap$(dart.legacy(K), dart.legacy(V)).from(map1);
    if (value == null) {
      t0 = result;
      return (() => {
        t0[$addAll](map2);
        return t0;
      })();
    }
    map2[$forEach](dart.fn((key, mapValue) => {
      result[$_set](key, dart.test(result[$containsKey](key)) ? value(result[$_get](key), mapValue) : mapValue);
    }, dart.fnType(core.Null, [dart.legacy(K), dart.legacy(V)])));
    return result;
  };
  functions.groupBy = function groupBy(S, T, values, key) {
    let t3, t2, t1, t0;
    let map = new (_js_helper.LinkedMap$(dart.legacy(T), dart.legacy(core.List$(dart.legacy(S))))).new();
    for (let element of values) {
      (t0 = map, t1 = key(element), t2 = t0[$_get](t1), t2 == null ? (t3 = _interceptors.JSArray$(dart.legacy(S)).of([]), t0[$_set](t1, t3), t3) : t2)[$add](element);
    }
    return map;
  };
  functions.minBy = function minBy(S, T, values, orderBy, opts) {
    let compare = opts && 'compare' in opts ? opts.compare : null;
    compare == null ? compare = utils.defaultCompare(dart.legacy(T)) : null;
    let minValue = null;
    let minOrderBy = null;
    for (let element of values) {
      let elementOrderBy = orderBy(element);
      if (minOrderBy == null || dart.notNull(compare(elementOrderBy, minOrderBy)) < 0) {
        minValue = element;
        minOrderBy = elementOrderBy;
      }
    }
    return minValue;
  };
  functions.maxBy = function maxBy(S, T, values, orderBy, opts) {
    let compare = opts && 'compare' in opts ? opts.compare : null;
    compare == null ? compare = utils.defaultCompare(dart.legacy(T)) : null;
    let maxValue = null;
    let maxOrderBy = null;
    for (let element of values) {
      let elementOrderBy = orderBy(element);
      if (maxOrderBy == null || dart.notNull(compare(elementOrderBy, maxOrderBy)) > 0) {
        maxValue = element;
        maxOrderBy = elementOrderBy;
      }
    }
    return maxValue;
  };
  functions.transitiveClosure = function transitiveClosure(T, graph) {
    let result = new (_js_helper.LinkedMap$(dart.legacy(T), dart.legacy(core.Set$(dart.legacy(T))))).new();
    graph[$forEach](dart.fn((vertex, edges) => {
      result[$_set](vertex, collection.LinkedHashSet$(dart.legacy(T)).from(edges));
    }, dart.fnType(core.Null, [dart.legacy(T), dart.legacy(core.Iterable$(dart.legacy(T)))])));
    let keys = graph[$keys][$toList]();
    for (let vertex1 of keys) {
      for (let vertex2 of keys) {
        for (let vertex3 of keys) {
          if (dart.test(result[$_get](vertex2).contains(vertex1)) && dart.test(result[$_get](vertex1).contains(vertex3))) {
            result[$_get](vertex2).add(vertex3);
          }
        }
      }
    }
    return result;
  };
  functions.stronglyConnectedComponents = function stronglyConnectedComponents(T, graph) {
    let index = 0;
    let stack = _interceptors.JSArray$(dart.legacy(T)).of([]);
    let result = _interceptors.JSArray$(dart.legacy(core.Set$(dart.legacy(T)))).of([]);
    let indices = new (_js_helper.LinkedMap$(dart.legacy(T), intL())).new();
    let lowLinks = new (_js_helper.LinkedMap$(dart.legacy(T), intL())).new();
    let onStack = new (collection._HashSet$(dart.legacy(T))).new();
    function strongConnect(vertex) {
      indices[$_set](vertex, index);
      lowLinks[$_set](vertex, index);
      index = index + 1;
      stack[$add](vertex);
      onStack.add(vertex);
      for (let successor of graph[$_get](vertex)) {
        if (!dart.test(indices[$containsKey](successor))) {
          strongConnect(successor);
          lowLinks[$_set](vertex, math.min(intL(), lowLinks[$_get](vertex), lowLinks[$_get](successor)));
        } else if (dart.test(onStack.contains(successor))) {
          lowLinks[$_set](vertex, math.min(intL(), lowLinks[$_get](vertex), lowLinks[$_get](successor)));
        }
      }
      if (lowLinks[$_get](vertex) == indices[$_get](vertex)) {
        let component = collection.LinkedHashSet$(dart.legacy(T)).new();
        let neighbor = null;
        do {
          neighbor = stack[$removeLast]();
          onStack.remove(neighbor);
          component.add(neighbor);
        } while (!dart.equals(neighbor, vertex));
        result[$add](component);
      }
    }
    dart.fn(strongConnect, dart.fnType(dart.void, [dart.legacy(T)]));
    for (let vertex of graph[$keys]) {
      if (!dart.test(indices[$containsKey](vertex))) strongConnect(vertex);
    }
    return result[$reversed][$toList]();
  };
  const _is_EqualitySet_default = Symbol('_is_EqualitySet_default');
  equality_set.EqualitySet$ = dart.generic(E => {
    var EL = () => (EL = dart.constFn(dart.legacy(E)))();
    var LinkedHashSetOfEL = () => (LinkedHashSetOfEL = dart.constFn(collection.LinkedHashSet$(EL())))();
    class EqualitySet extends wrappers.DelegatingSet$(dart.legacy(E)) {}
    (EqualitySet.new = function(equality) {
      EqualitySet.__proto__.new.call(this, LinkedHashSetOfEL().new({equals: dart.bind(equality, 'equals'), hashCode: dart.bind(equality, 'hash'), isValidKey: dart.bind(equality, 'isValidKey')}));
      ;
    }).prototype = EqualitySet.prototype;
    (EqualitySet.from = function(equality, other) {
      EqualitySet.__proto__.new.call(this, LinkedHashSetOfEL().new({equals: dart.bind(equality, 'equals'), hashCode: dart.bind(equality, 'hash'), isValidKey: dart.bind(equality, 'isValidKey')}));
      this.addAll(other);
    }).prototype = EqualitySet.prototype;
    dart.addTypeTests(EqualitySet);
    EqualitySet.prototype[_is_EqualitySet_default] = true;
    dart.addTypeCaches(EqualitySet);
    dart.setLibraryUri(EqualitySet, L7);
    return EqualitySet;
  });
  equality_set.EqualitySet = equality_set.EqualitySet$();
  dart.addTypeTests(equality_set.EqualitySet, _is_EqualitySet_default);
  const _is_EqualityMap_default = Symbol('_is_EqualityMap_default');
  equality_map.EqualityMap$ = dart.generic((K, V) => {
    var KL = () => (KL = dart.constFn(dart.legacy(K)))();
    var LinkedHashMapOfKL$VL = () => (LinkedHashMapOfKL$VL = dart.constFn(collection.LinkedHashMap$(KL(), VL())))();
    var VL = () => (VL = dart.constFn(dart.legacy(V)))();
    class EqualityMap extends wrappers.DelegatingMap$(dart.legacy(K), dart.legacy(V)) {}
    (EqualityMap.new = function(equality) {
      EqualityMap.__proto__.new.call(this, LinkedHashMapOfKL$VL().new({equals: dart.bind(equality, 'equals'), hashCode: dart.bind(equality, 'hash'), isValidKey: dart.bind(equality, 'isValidKey')}));
      ;
    }).prototype = EqualityMap.prototype;
    (EqualityMap.from = function(equality, other) {
      EqualityMap.__proto__.new.call(this, LinkedHashMapOfKL$VL().new({equals: dart.bind(equality, 'equals'), hashCode: dart.bind(equality, 'hash'), isValidKey: dart.bind(equality, 'isValidKey')}));
      this.addAll(other);
    }).prototype = EqualityMap.prototype;
    dart.addTypeTests(EqualityMap);
    EqualityMap.prototype[_is_EqualityMap_default] = true;
    dart.addTypeCaches(EqualityMap);
    dart.setLibraryUri(EqualityMap, L8);
    return EqualityMap;
  });
  equality_map.EqualityMap = equality_map.EqualityMap$();
  dart.addTypeTests(equality_map.EqualityMap, _is_EqualityMap_default);
  dart.trackLibraries("packages/collection/collection", {
    "package:collection/src/combined_wrappers/combined_iterable.dart": combined_iterable,
    "package:collection/src/queue_list.dart": queue_list,
    "package:collection/src/union_set.dart": union_set,
    "package:collection/src/combined_wrappers/combined_list.dart": combined_list,
    "package:collection/src/combined_wrappers/combined_map.dart": combined_map,
    "package:collection/collection.dart": collection$,
    "package:collection/src/union_set_controller.dart": union_set_controller,
    "package:collection/src/functions.dart": functions,
    "package:collection/src/equality_set.dart": equality_set,
    "package:collection/src/equality_map.dart": equality_map
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["src/combined_wrappers/combined_iterable.dart","src/queue_list.dart","src/union_set.dart","src/combined_wrappers/combined_list.dart","src/combined_wrappers/combined_map.dart","src/union_set_controller.dart","src/functions.dart","src/equality_set.dart","src/equality_map.dart"],"names":[],"mappings":"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","file":"collection.unsound.ddc.js"}');
  // Exports:
  return {
    src__combined_wrappers__combined_iterable: combined_iterable,
    src__queue_list: queue_list,
    src__union_set: union_set,
    src__combined_wrappers__combined_list: combined_list,
    src__combined_wrappers__combined_map: combined_map,
    collection: collection$,
    src__union_set_controller: union_set_controller,
    src__functions: functions,
    src__equality_set: equality_set,
    src__equality_map: equality_map
  };
}));

//# sourceMappingURL=collection.unsound.ddc.js.map

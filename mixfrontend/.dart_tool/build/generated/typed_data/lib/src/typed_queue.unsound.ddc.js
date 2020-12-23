define(['dart_sdk', 'packages/collection/collection', 'packages/typed_data/src/typed_buffer'], (function load__packages__typed_data__src__typed_queue(dart_sdk, packages__collection__collection, packages__typed_data__src__typed_buffer) {
  'use strict';
  const core = dart_sdk.core;
  const collection = dart_sdk.collection;
  const _native_typed_data = dart_sdk._native_typed_data;
  const _js_helper = dart_sdk._js_helper;
  const typed_data = dart_sdk.typed_data;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const queue_list = packages__collection__collection.src__queue_list;
  const typed_buffer = packages__typed_data__src__typed_buffer.src__typed_buffer;
  var typed_data$ = Object.create(dart.library);
  var typed_queue = Object.create(dart.library);
  var $length = dartx.length;
  var $_set = dartx._set;
  var $_get = dartx._get;
  var $setRange = dartx.setRange;
  var $fillRange = dartx.fillRange;
  var $rightShift = dartx['>>'];
  var $toList = dartx.toList;
  var $cast = dartx.cast;
  var $add = dartx.add;
  var $removeRange = dartx.removeRange;
  var $sublist = dartx.sublist;
  var $noSuchMethod = dartx.noSuchMethod;
  var intL = () => (intL = dart.constFn(dart.legacy(core.int)))();
  var ListOfintL = () => (ListOfintL = dart.constFn(core.List$(intL())))();
  var ListLOfintL = () => (ListLOfintL = dart.constFn(dart.legacy(ListOfintL())))();
  var doubleL = () => (doubleL = dart.constFn(dart.legacy(core.double)))();
  var ListOfdoubleL = () => (ListOfdoubleL = dart.constFn(core.List$(doubleL())))();
  var ListLOfdoubleL = () => (ListLOfdoubleL = dart.constFn(dart.legacy(ListOfdoubleL())))();
  var Int32x4L = () => (Int32x4L = dart.constFn(dart.legacy(typed_data.Int32x4)))();
  var ListOfInt32x4L = () => (ListOfInt32x4L = dart.constFn(core.List$(Int32x4L())))();
  var ListLOfInt32x4L = () => (ListLOfInt32x4L = dart.constFn(dart.legacy(ListOfInt32x4L())))();
  var Float32x4L = () => (Float32x4L = dart.constFn(dart.legacy(typed_data.Float32x4)))();
  var ListOfFloat32x4L = () => (ListOfFloat32x4L = dart.constFn(core.List$(Float32x4L())))();
  var ListLOfFloat32x4L = () => (ListLOfFloat32x4L = dart.constFn(dart.legacy(ListOfFloat32x4L())))();
  const CT = Object.create(null);
  var L1 = "package:typed_data/src/typed_queue.dart";
  var L0 = "org-dartlang-app:///packages/typed_data/src/typed_queue.dart";
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.const(new _js_helper.PrivateSymbol.new('_head', _head));
    },
    get C1() {
      return C1 = dart.const(new _js_helper.PrivateSymbol.new('_writeToList', _writeToList));
    },
    get C2() {
      return C2 = dart.const(new _js_helper.PrivateSymbol.new('_add', _add));
    },
    get C3() {
      return C3 = dart.const(new _js_helper.PrivateSymbol.new('_grow', _grow));
    },
    get C4() {
      return C4 = dart.const(new _js_helper.PrivateSymbol.new('_table', _table));
    },
    get C5() {
      return C5 = dart.const(new _js_helper.PrivateSymbol.new('_tail', _tail));
    },
    get C6() {
      return C6 = dart.const(new _js_helper.PrivateSymbol.new('_preGrow', _preGrow));
    },
    get C7() {
      return C7 = dart.const(new _js_helper.PrivateSymbol.new('_head=', _head_));
    },
    get C8() {
      return C8 = dart.const(new _js_helper.PrivateSymbol.new('_table=', _table_));
    },
    get C9() {
      return C9 = dart.const(new _js_helper.PrivateSymbol.new('_tail=', _tail_));
    }
  }, false);
  var _table = dart.privateName(typed_queue, "_table");
  var _head = dart.privateName(typed_queue, "_head");
  var _tail = dart.privateName(typed_queue, "_tail");
  var _createBuffer = dart.privateName(typed_queue, "_createBuffer");
  var _createList = dart.privateName(typed_queue, "_createList");
  var _writeToList = dart.privateName(typed_queue, "_writeToList");
  var _growAtCapacity = dart.privateName(typed_queue, "_growAtCapacity");
  var _growTo = dart.privateName(typed_queue, "_growTo");
  var _defaultValue = dart.privateName(typed_queue, "_defaultValue");
  const _is__TypedQueue_default = Symbol('_is__TypedQueue_default');
  var _table$ = dart.privateName(typed_queue, "_TypedQueue._table");
  var _head$ = dart.privateName(typed_queue, "_TypedQueue._head");
  var _tail$ = dart.privateName(typed_queue, "_TypedQueue._tail");
  typed_queue._TypedQueue$ = dart.generic((E, L) => {
    var EL = () => (EL = dart.constFn(dart.legacy(E)))();
    var IterableOfEL = () => (IterableOfEL = dart.constFn(core.Iterable$(EL())))();
    var IterableLOfEL = () => (IterableLOfEL = dart.constFn(dart.legacy(IterableOfEL())))();
    var ListOfEL = () => (ListOfEL = dart.constFn(core.List$(EL())))();
    var ListLOfEL = () => (ListLOfEL = dart.constFn(dart.legacy(ListOfEL())))();
    const Object_ListMixin$36 = class Object_ListMixin extends core.Object {};
    (Object_ListMixin$36.new = function() {
    }).prototype = Object_ListMixin$36.prototype;
    dart.applyMixin(Object_ListMixin$36, collection.ListMixin$(dart.legacy(E)));
    class _TypedQueue extends Object_ListMixin$36 {
      get [_table]() {
        return this[_table$];
      }
      set [_table](value) {
        this[_table$] = value;
      }
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
      get length() {
        return (dart.notNull(this[_tail]) - dart.notNull(this[_head]) & dart.notNull(this[_table][$length]) - 1) >>> 0;
      }
      toList(opts) {
        let growable = opts && 'growable' in opts ? opts.growable : true;
        let list = dart.test(growable) ? this[_createBuffer](this.length) : this[_createList](this.length);
        this[_writeToList](list);
        return list;
      }
      cast(T) {
        if (dart.legacy(queue_list.QueueList$(dart.legacy(T))).is(this)) return dart.legacy(queue_list.QueueList$(dart.legacy(T))).as(this);
        dart.throw(new core.UnsupportedError.new(dart.str(this) + " cannot be cast to the desired type."));
      }
      retype(T) {
        return this.cast(dart.legacy(T));
      }
      addLast(value) {
        EL().as(value);
        this[_table][$_set](this[_tail], value);
        this[_tail] = (dart.notNull(this[_tail]) + 1 & dart.notNull(this[_table][$length]) - 1) >>> 0;
        if (this[_head] == this[_tail]) this[_growAtCapacity]();
      }
      addFirst(value) {
        EL().as(value);
        this[_head] = (dart.notNull(this[_head]) - 1 & dart.notNull(this[_table][$length]) - 1) >>> 0;
        this[_table][$_set](this[_head], value);
        if (this[_head] == this[_tail]) this[_growAtCapacity]();
      }
      removeFirst() {
        if (this[_head] == this[_tail]) dart.throw(new core.StateError.new("No element"));
        let result = this[_table][$_get](this[_head]);
        this[_head] = (dart.notNull(this[_head]) + 1 & dart.notNull(this[_table][$length]) - 1) >>> 0;
        return result;
      }
      removeLast() {
        if (this[_head] == this[_tail]) dart.throw(new core.StateError.new("No element"));
        this[_tail] = (dart.notNull(this[_tail]) - 1 & dart.notNull(this[_table][$length]) - 1) >>> 0;
        return this[_table][$_get](this[_tail]);
      }
      add(value) {
        EL().as(value);
        return this.addLast(value);
      }
      set length(value) {
        core.RangeError.checkNotNegative(value, "length");
        let delta = dart.notNull(value) - dart.notNull(this.length);
        if (delta >= 0) {
          let needsToGrow = dart.notNull(this[_table][$length]) <= dart.notNull(value);
          if (needsToGrow) this[_growTo](value);
          this[_tail] = (dart.notNull(this[_tail]) + delta & dart.notNull(this[_table][$length]) - 1) >>> 0;
          if (!needsToGrow) this.fillRange(dart.notNull(value) - delta, value, this[_defaultValue]);
        } else {
          this.removeRange(value, this.length);
        }
      }
      _get(index) {
        core.RangeError.checkValidIndex(index, this, null, this.length);
        return this[_table][$_get]((dart.notNull(this[_head]) + dart.notNull(index) & dart.notNull(this[_table][$length]) - 1) >>> 0);
      }
      _set(index, value$) {
        let value = value$;
        EL().as(value);
        core.RangeError.checkValidIndex(index, this);
        this[_table][$_set]((dart.notNull(this[_head]) + dart.notNull(index) & dart.notNull(this[_table][$length]) - 1) >>> 0, value);
        return value$;
      }
      removeRange(start, end) {
        let length = this.length;
        core.RangeError.checkValidRange(start, end, length);
        if (start === 0) {
          this[_head] = (dart.notNull(this[_head]) + dart.notNull(end) & dart.notNull(this[_table][$length]) - 1) >>> 0;
          return;
        }
        let elementsAfter = dart.notNull(length) - dart.notNull(end);
        if (elementsAfter === 0) {
          this[_tail] = (dart.notNull(this[_head]) + dart.notNull(start) & dart.notNull(this[_table][$length]) - 1) >>> 0;
          return;
        }
        let removedElements = dart.notNull(end) - dart.notNull(start);
        if (dart.notNull(start) < elementsAfter) {
          this.setRange(removedElements, end, this);
          this[_head] = (dart.notNull(this[_head]) + removedElements & dart.notNull(this[_table][$length]) - 1) >>> 0;
        } else {
          this.setRange(start, dart.notNull(length) - removedElements, this, end);
          this[_tail] = (dart.notNull(this[_tail]) - removedElements & dart.notNull(this[_table][$length]) - 1) >>> 0;
        }
      }
      setRange(start, end, iterable, skipCount = 0) {
        IterableLOfEL().as(iterable);
        core.RangeError.checkValidRange(start, end, this.length);
        if (start == end) return;
        let targetStart = (dart.notNull(this[_head]) + dart.notNull(start) & dart.notNull(this[_table][$length]) - 1) >>> 0;
        let targetEnd = (dart.notNull(this[_head]) + dart.notNull(end) & dart.notNull(this[_table][$length]) - 1) >>> 0;
        let targetIsContiguous = targetStart < targetEnd;
        if (iterable === this) {
          let sourceStart = (dart.notNull(this[_head]) + dart.notNull(skipCount) & dart.notNull(this[_table][$length]) - 1) >>> 0;
          let sourceEnd = (sourceStart + (dart.notNull(end) - dart.notNull(start)) & dart.notNull(this[_table][$length]) - 1) >>> 0;
          if (sourceStart === targetStart) return;
          let sourceIsContiguous = sourceStart < sourceEnd;
          if (targetIsContiguous && sourceIsContiguous) {
            this[_table][$setRange](targetStart, targetEnd, this[_table], sourceStart);
          } else if (!targetIsContiguous && !sourceIsContiguous) {
            if (sourceStart > targetStart) {
              let startGap = sourceStart - targetStart;
              let firstEnd = dart.notNull(this[_table][$length]) - startGap;
              this[_table][$setRange](targetStart, firstEnd, this[_table], sourceStart);
              this[_table][$setRange](firstEnd, this[_table][$length], this[_table]);
              this[_table][$setRange](0, targetEnd, this[_table], startGap);
            } else if (sourceEnd < targetEnd) {
              let firstStart = targetEnd - sourceEnd;
              this[_table][$setRange](firstStart, targetEnd, this[_table]);
              this[_table][$setRange](0, firstStart, this[_table], dart.notNull(this[_table][$length]) - firstStart);
              this[_table][$setRange](targetStart, this[_table][$length], this[_table], sourceStart);
            }
          } else if (sourceStart < targetEnd) {
            if (sourceIsContiguous) {
              this[_table][$setRange](targetStart, this[_table][$length], this[_table], sourceStart);
              this[_table][$setRange](0, targetEnd, this[_table], sourceStart + (dart.notNull(this[_table][$length]) - targetStart));
            } else {
              let firstEnd = dart.notNull(this[_table][$length]) - sourceStart;
              this[_table][$setRange](targetStart, firstEnd, this[_table], sourceStart);
              this[_table][$setRange](firstEnd, targetEnd, this[_table]);
            }
          } else {
            if (sourceIsContiguous) {
              this[_table][$setRange](0, targetEnd, this[_table], sourceStart + (dart.notNull(this[_table][$length]) - targetStart));
              this[_table][$setRange](targetStart, this[_table][$length], this[_table], sourceStart);
            } else {
              let firstStart = targetEnd - sourceEnd;
              this[_table][$setRange](firstStart, targetEnd, this[_table]);
              this[_table][$setRange](targetStart, firstStart, this[_table], sourceStart);
            }
          }
        } else if (targetIsContiguous) {
          this[_table][$setRange](targetStart, targetEnd, iterable, skipCount);
        } else if (ListLOfEL().is(iterable)) {
          this[_table][$setRange](targetStart, this[_table][$length], iterable, skipCount);
          this[_table][$setRange](0, targetEnd, iterable, dart.notNull(skipCount) + (dart.notNull(this[_table][$length]) - targetStart));
        } else {
          super[$setRange](start, end, iterable, skipCount);
        }
      }
      fillRange(start, end, value = null) {
        EL().as(value);
        let startInTable = (dart.notNull(this[_head]) + dart.notNull(start) & dart.notNull(this[_table][$length]) - 1) >>> 0;
        let endInTable = (dart.notNull(this[_head]) + dart.notNull(end) & dart.notNull(this[_table][$length]) - 1) >>> 0;
        if (startInTable <= endInTable) {
          this[_table][$fillRange](startInTable, endInTable, value);
        } else {
          this[_table][$fillRange](startInTable, this[_table][$length], value);
          this[_table][$fillRange](0, endInTable, value);
        }
      }
      sublist(start, end = null) {
        let length = this.length;
        end = core.RangeError.checkValidRange(start, end, length);
        let list = this[_createList](dart.notNull(end) - dart.notNull(start));
        this[_writeToList](list, start, end);
        return list;
      }
      [_writeToList](target, start = null, end = null) {
        start == null ? start = 0 : null;
        end == null ? end = this.length : null;
        if (!(dart.notNull(target[$length]) >= dart.notNull(end) - dart.notNull(start))) dart.assertFailed(null, L0, 265, 12, "target.length >= end - start");
        if (!(dart.notNull(start) <= dart.notNull(end))) dart.assertFailed(null, L0, 266, 12, "start <= end");
        let elementsToWrite = dart.notNull(end) - dart.notNull(start);
        let startInTable = (dart.notNull(this[_head]) + dart.notNull(start) & dart.notNull(this[_table][$length]) - 1) >>> 0;
        let endInTable = (dart.notNull(this[_head]) + dart.notNull(end) & dart.notNull(this[_table][$length]) - 1) >>> 0;
        if (startInTable <= endInTable) {
          target[$setRange](0, elementsToWrite, this[_table], startInTable);
        } else {
          let firstPartSize = dart.notNull(this[_table][$length]) - startInTable;
          target[$setRange](0, firstPartSize, this[_table], startInTable);
          target[$setRange](firstPartSize, firstPartSize + endInTable, this[_table], 0);
        }
        return elementsToWrite;
      }
      [_growAtCapacity]() {
        if (!(this[_head] == this[_tail])) dart.assertFailed(null, L0, 284, 12, "_head == _tail");
        let newTable = this[_createList](dart.notNull(this[_table][$length]) * 2);
        let partitionPoint = dart.notNull(this[_table][$length]) - dart.notNull(this[_head]);
        newTable[$setRange](0, partitionPoint, this[_table], this[_head]);
        if (partitionPoint !== this[_table][$length]) {
          newTable[$setRange](partitionPoint, this[_table][$length], this[_table]);
        }
        this[_head] = 0;
        this[_tail] = this[_table][$length];
        this[_table] = newTable;
      }
      [_growTo](newElementCount) {
        if (!(dart.notNull(newElementCount) >= dart.notNull(this.length))) dart.assertFailed(null, L0, 303, 12, "newElementCount >= length");
        newElementCount = dart.notNull(newElementCount) + newElementCount[$rightShift](1);
        let newTable = this[_createList](typed_queue._nextPowerOf2(newElementCount));
        this[_tail] = this[_writeToList](newTable);
        this[_table] = newTable;
        this[_head] = 0;
      }
    }
    (_TypedQueue.new = function(_table) {
      this[_table$] = _table;
      this[_head$] = 0;
      this[_tail$] = 0;
      ;
    }).prototype = _TypedQueue.prototype;
    dart.addTypeTests(_TypedQueue);
    _TypedQueue.prototype[_is__TypedQueue_default] = true;
    dart.addTypeCaches(_TypedQueue);
    dart.setMethodSignature(_TypedQueue, () => ({
      __proto__: dart.getMethods(_TypedQueue.__proto__),
      toList: dart.fnType(dart.legacy(core.List$(dart.legacy(E))), [], {growable: dart.legacy(core.bool)}, {}),
      [$toList]: dart.fnType(dart.legacy(core.List$(dart.legacy(E))), [], {growable: dart.legacy(core.bool)}, {}),
      cast: dart.gFnType(T => [dart.legacy(queue_list.QueueList$(dart.legacy(T))), []]),
      [$cast]: dart.gFnType(T => [dart.legacy(queue_list.QueueList$(dart.legacy(T))), []]),
      retype: dart.gFnType(T => [dart.legacy(queue_list.QueueList$(dart.legacy(T))), []]),
      addLast: dart.fnType(dart.void, [dart.legacy(core.Object)]),
      addFirst: dart.fnType(dart.void, [dart.legacy(core.Object)]),
      removeFirst: dart.fnType(dart.legacy(E), []),
      add: dart.fnType(dart.void, [dart.legacy(core.Object)]),
      [$add]: dart.fnType(dart.void, [dart.legacy(core.Object)]),
      _get: dart.fnType(dart.legacy(E), [dart.legacy(core.int)]),
      [$_get]: dart.fnType(dart.legacy(E), [dart.legacy(core.int)]),
      _set: dart.fnType(dart.void, [dart.legacy(core.int), dart.legacy(core.Object)]),
      [$_set]: dart.fnType(dart.void, [dart.legacy(core.int), dart.legacy(core.Object)]),
      removeRange: dart.fnType(dart.void, [dart.legacy(core.int), dart.legacy(core.int)]),
      [$removeRange]: dart.fnType(dart.void, [dart.legacy(core.int), dart.legacy(core.int)]),
      setRange: dart.fnType(dart.void, [dart.legacy(core.int), dart.legacy(core.int), dart.legacy(core.Object)], [dart.legacy(core.int)]),
      [$setRange]: dart.fnType(dart.void, [dart.legacy(core.int), dart.legacy(core.int), dart.legacy(core.Object)], [dart.legacy(core.int)]),
      fillRange: dart.fnType(dart.void, [dart.legacy(core.int), dart.legacy(core.int)], [dart.legacy(core.Object)]),
      [$fillRange]: dart.fnType(dart.void, [dart.legacy(core.int), dart.legacy(core.int)], [dart.legacy(core.Object)]),
      sublist: dart.fnType(dart.legacy(L), [dart.legacy(core.int)], [dart.legacy(core.int)]),
      [$sublist]: dart.fnType(dart.legacy(L), [dart.legacy(core.int)], [dart.legacy(core.int)]),
      [_writeToList]: dart.fnType(dart.legacy(core.int), [dart.legacy(core.List$(dart.legacy(E)))], [dart.legacy(core.int), dart.legacy(core.int)]),
      [_growAtCapacity]: dart.fnType(dart.void, []),
      [_growTo]: dart.fnType(dart.void, [dart.legacy(core.int)])
    }));
    dart.setGetterSignature(_TypedQueue, () => ({
      __proto__: dart.getGetters(_TypedQueue.__proto__),
      length: dart.legacy(core.int),
      [$length]: dart.legacy(core.int)
    }));
    dart.setSetterSignature(_TypedQueue, () => ({
      __proto__: dart.getSetters(_TypedQueue.__proto__),
      length: dart.legacy(core.int),
      [$length]: dart.legacy(core.int)
    }));
    dart.setLibraryUri(_TypedQueue, L1);
    dart.setFieldSignature(_TypedQueue, () => ({
      __proto__: dart.getFields(_TypedQueue.__proto__),
      [_table]: dart.fieldType(dart.legacy(L)),
      [_head]: dart.fieldType(dart.legacy(core.int)),
      [_tail]: dart.fieldType(dart.legacy(core.int))
    }));
    dart.defineExtensionMethods(_TypedQueue, [
      'toList',
      'cast',
      'removeLast',
      'add',
      '_get',
      '_set',
      'removeRange',
      'setRange',
      'fillRange',
      'sublist'
    ]);
    dart.defineExtensionAccessors(_TypedQueue, ['length']);
    return _TypedQueue;
  });
  typed_queue._TypedQueue = typed_queue._TypedQueue$();
  dart.addTypeTests(typed_queue._TypedQueue, _is__TypedQueue_default);
  const _is__IntQueue_default = Symbol('_is__IntQueue_default');
  typed_queue._IntQueue$ = dart.generic(L => {
    class _IntQueue extends typed_queue._TypedQueue$(dart.legacy(core.int), dart.legacy(L)) {
      get [_defaultValue]() {
        return 0;
      }
    }
    (_IntQueue.new = function(queue) {
      _IntQueue.__proto__.new.call(this, queue);
      ;
    }).prototype = _IntQueue.prototype;
    dart.addTypeTests(_IntQueue);
    _IntQueue.prototype[_is__IntQueue_default] = true;
    dart.addTypeCaches(_IntQueue);
    dart.setGetterSignature(_IntQueue, () => ({
      __proto__: dart.getGetters(_IntQueue.__proto__),
      [_defaultValue]: dart.legacy(core.int)
    }));
    dart.setLibraryUri(_IntQueue, L1);
    return _IntQueue;
  });
  typed_queue._IntQueue = typed_queue._IntQueue$();
  dart.addTypeTests(typed_queue._IntQueue, _is__IntQueue_default);
  const _is__FloatQueue_default = Symbol('_is__FloatQueue_default');
  typed_queue._FloatQueue$ = dart.generic(L => {
    class _FloatQueue extends typed_queue._TypedQueue$(dart.legacy(core.double), dart.legacy(L)) {
      get [_defaultValue]() {
        return 0.0;
      }
    }
    (_FloatQueue.new = function(queue) {
      _FloatQueue.__proto__.new.call(this, queue);
      ;
    }).prototype = _FloatQueue.prototype;
    dart.addTypeTests(_FloatQueue);
    _FloatQueue.prototype[_is__FloatQueue_default] = true;
    dart.addTypeCaches(_FloatQueue);
    dart.setGetterSignature(_FloatQueue, () => ({
      __proto__: dart.getGetters(_FloatQueue.__proto__),
      [_defaultValue]: dart.legacy(core.double)
    }));
    dart.setLibraryUri(_FloatQueue, L1);
    return _FloatQueue;
  });
  typed_queue._FloatQueue = typed_queue._FloatQueue$();
  dart.addTypeTests(typed_queue._FloatQueue, _is__FloatQueue_default);
  var C0;
  var _head$0 = dart.privateName(queue_list, "_head");
  var C1;
  var _writeToList$ = dart.privateName(queue_list, "_writeToList");
  var _add = dart.privateName(typed_queue, "_add");
  var C2;
  var _add$ = dart.privateName(queue_list, "_add");
  var _grow = dart.privateName(typed_queue, "_grow");
  var C3;
  var _grow$ = dart.privateName(queue_list, "_grow");
  var C4;
  var _table$0 = dart.privateName(queue_list, "_table");
  var C5;
  var _tail$0 = dart.privateName(queue_list, "_tail");
  var _preGrow = dart.privateName(typed_queue, "_preGrow");
  var C6;
  var _preGrow$ = dart.privateName(queue_list, "_preGrow");
  var _head_ = dart.privateName(typed_queue, "_head=");
  var C7;
  var _table_ = dart.privateName(typed_queue, "_table=");
  var C8;
  var _tail_ = dart.privateName(typed_queue, "_tail=");
  var C9;
  typed_queue.Uint8Queue = class Uint8Queue extends typed_queue._IntQueue$(dart.legacy(typed_data.Uint8List)) {
    static fromList(elements) {
      let t0;
      t0 = new typed_queue.Uint8Queue.new(elements[$length]);
      return (() => {
        t0.addAll(elements);
        return t0;
      })();
    }
    [_createList](size) {
      return _native_typed_data.NativeUint8List.new(size);
    }
    [_createBuffer](size) {
      return new typed_buffer.Uint8Buffer.new(size);
    }
    get [_head$0]() {
      return intL().as(this[$noSuchMethod](new core._Invocation.getter(C0 || CT.C0)));
    }
    [_writeToList$](target) {
      return intL().as(this[$noSuchMethod](new core._Invocation.method(C1 || CT.C1, null, [target])));
    }
    [_add$](element) {
      return this[$noSuchMethod](new core._Invocation.method(C2 || CT.C2, null, [element]));
    }
    [_grow$]() {
      return this[$noSuchMethod](new core._Invocation.method(C3 || CT.C3, null, []));
    }
    get [_table$0]() {
      return ListLOfintL().as(this[$noSuchMethod](new core._Invocation.getter(C4 || CT.C4)));
    }
    get [_tail$0]() {
      return intL().as(this[$noSuchMethod](new core._Invocation.getter(C5 || CT.C5)));
    }
    [_preGrow$](newElementCount) {
      return this[$noSuchMethod](new core._Invocation.method(C6 || CT.C6, null, [newElementCount]));
    }
    set [_head$0](value) {
      return this[$noSuchMethod](new core._Invocation.setter(C7 || CT.C7, value));
    }
    set [_table$0](value) {
      return this[$noSuchMethod](new core._Invocation.setter(C8 || CT.C8, value));
    }
    set [_tail$0](value) {
      return this[$noSuchMethod](new core._Invocation.setter(C9 || CT.C9, value));
    }
  };
  (typed_queue.Uint8Queue.new = function(initialCapacity = null) {
    typed_queue.Uint8Queue.__proto__.new.call(this, _native_typed_data.NativeUint8List.new(typed_queue._chooseRealInitialCapacity(initialCapacity)));
    ;
  }).prototype = typed_queue.Uint8Queue.prototype;
  dart.addTypeTests(typed_queue.Uint8Queue);
  dart.addTypeCaches(typed_queue.Uint8Queue);
  typed_queue.Uint8Queue[dart.implements] = () => [queue_list.QueueList$(dart.legacy(core.int))];
  dart.setMethodSignature(typed_queue.Uint8Queue, () => ({
    __proto__: dart.getMethods(typed_queue.Uint8Queue.__proto__),
    [_createList]: dart.fnType(dart.legacy(typed_data.Uint8List), [dart.legacy(core.int)]),
    [_createBuffer]: dart.fnType(dart.legacy(typed_buffer.Uint8Buffer), [dart.legacy(core.int)]),
    [_writeToList$]: dart.fnType(dart.legacy(core.int), [dart.legacy(core.List$(dart.legacy(core.int)))]),
    [_add$]: dart.fnType(dart.void, [dart.legacy(core.int)]),
    [_grow$]: dart.fnType(dart.void, []),
    [_preGrow$]: dart.fnType(dart.void, [dart.legacy(core.int)])
  }));
  dart.setGetterSignature(typed_queue.Uint8Queue, () => ({
    __proto__: dart.getGetters(typed_queue.Uint8Queue.__proto__),
    [_head$0]: dart.legacy(core.int),
    [_table$0]: dart.legacy(core.List$(dart.legacy(core.int))),
    [_tail$0]: dart.legacy(core.int)
  }));
  dart.setSetterSignature(typed_queue.Uint8Queue, () => ({
    __proto__: dart.getSetters(typed_queue.Uint8Queue.__proto__),
    [_head$0]: dart.legacy(core.int),
    [_table$0]: dart.legacy(core.List$(dart.legacy(core.int))),
    [_tail$0]: dart.legacy(core.int)
  }));
  dart.setLibraryUri(typed_queue.Uint8Queue, L1);
  typed_queue.Int8Queue = class Int8Queue extends typed_queue._IntQueue$(dart.legacy(typed_data.Int8List)) {
    static fromList(elements) {
      let t0;
      t0 = new typed_queue.Int8Queue.new(elements[$length]);
      return (() => {
        t0.addAll(elements);
        return t0;
      })();
    }
    [_createList](size) {
      return _native_typed_data.NativeInt8List.new(size);
    }
    [_createBuffer](size) {
      return new typed_buffer.Int8Buffer.new(size);
    }
    get [_head$0]() {
      return intL().as(this[$noSuchMethod](new core._Invocation.getter(C0 || CT.C0)));
    }
    [_writeToList$](target) {
      return intL().as(this[$noSuchMethod](new core._Invocation.method(C1 || CT.C1, null, [target])));
    }
    [_add$](element) {
      return this[$noSuchMethod](new core._Invocation.method(C2 || CT.C2, null, [element]));
    }
    [_grow$]() {
      return this[$noSuchMethod](new core._Invocation.method(C3 || CT.C3, null, []));
    }
    get [_table$0]() {
      return ListLOfintL().as(this[$noSuchMethod](new core._Invocation.getter(C4 || CT.C4)));
    }
    get [_tail$0]() {
      return intL().as(this[$noSuchMethod](new core._Invocation.getter(C5 || CT.C5)));
    }
    [_preGrow$](newElementCount) {
      return this[$noSuchMethod](new core._Invocation.method(C6 || CT.C6, null, [newElementCount]));
    }
    set [_head$0](value) {
      return this[$noSuchMethod](new core._Invocation.setter(C7 || CT.C7, value));
    }
    set [_table$0](value) {
      return this[$noSuchMethod](new core._Invocation.setter(C8 || CT.C8, value));
    }
    set [_tail$0](value) {
      return this[$noSuchMethod](new core._Invocation.setter(C9 || CT.C9, value));
    }
  };
  (typed_queue.Int8Queue.new = function(initialCapacity = null) {
    typed_queue.Int8Queue.__proto__.new.call(this, _native_typed_data.NativeInt8List.new(typed_queue._chooseRealInitialCapacity(initialCapacity)));
    ;
  }).prototype = typed_queue.Int8Queue.prototype;
  dart.addTypeTests(typed_queue.Int8Queue);
  dart.addTypeCaches(typed_queue.Int8Queue);
  typed_queue.Int8Queue[dart.implements] = () => [queue_list.QueueList$(dart.legacy(core.int))];
  dart.setMethodSignature(typed_queue.Int8Queue, () => ({
    __proto__: dart.getMethods(typed_queue.Int8Queue.__proto__),
    [_createList]: dart.fnType(dart.legacy(typed_data.Int8List), [dart.legacy(core.int)]),
    [_createBuffer]: dart.fnType(dart.legacy(typed_buffer.Int8Buffer), [dart.legacy(core.int)]),
    [_writeToList$]: dart.fnType(dart.legacy(core.int), [dart.legacy(core.List$(dart.legacy(core.int)))]),
    [_add$]: dart.fnType(dart.void, [dart.legacy(core.int)]),
    [_grow$]: dart.fnType(dart.void, []),
    [_preGrow$]: dart.fnType(dart.void, [dart.legacy(core.int)])
  }));
  dart.setGetterSignature(typed_queue.Int8Queue, () => ({
    __proto__: dart.getGetters(typed_queue.Int8Queue.__proto__),
    [_head$0]: dart.legacy(core.int),
    [_table$0]: dart.legacy(core.List$(dart.legacy(core.int))),
    [_tail$0]: dart.legacy(core.int)
  }));
  dart.setSetterSignature(typed_queue.Int8Queue, () => ({
    __proto__: dart.getSetters(typed_queue.Int8Queue.__proto__),
    [_head$0]: dart.legacy(core.int),
    [_table$0]: dart.legacy(core.List$(dart.legacy(core.int))),
    [_tail$0]: dart.legacy(core.int)
  }));
  dart.setLibraryUri(typed_queue.Int8Queue, L1);
  typed_queue.Uint8ClampedQueue = class Uint8ClampedQueue extends typed_queue._IntQueue$(dart.legacy(typed_data.Uint8ClampedList)) {
    static fromList(elements) {
      let t0;
      t0 = new typed_queue.Uint8ClampedQueue.new(elements[$length]);
      return (() => {
        t0.addAll(elements);
        return t0;
      })();
    }
    [_createList](size) {
      return _native_typed_data.NativeUint8ClampedList.new(size);
    }
    [_createBuffer](size) {
      return new typed_buffer.Uint8ClampedBuffer.new(size);
    }
    get [_head$0]() {
      return intL().as(this[$noSuchMethod](new core._Invocation.getter(C0 || CT.C0)));
    }
    [_writeToList$](target) {
      return intL().as(this[$noSuchMethod](new core._Invocation.method(C1 || CT.C1, null, [target])));
    }
    [_add$](element) {
      return this[$noSuchMethod](new core._Invocation.method(C2 || CT.C2, null, [element]));
    }
    [_grow$]() {
      return this[$noSuchMethod](new core._Invocation.method(C3 || CT.C3, null, []));
    }
    get [_table$0]() {
      return ListLOfintL().as(this[$noSuchMethod](new core._Invocation.getter(C4 || CT.C4)));
    }
    get [_tail$0]() {
      return intL().as(this[$noSuchMethod](new core._Invocation.getter(C5 || CT.C5)));
    }
    [_preGrow$](newElementCount) {
      return this[$noSuchMethod](new core._Invocation.method(C6 || CT.C6, null, [newElementCount]));
    }
    set [_head$0](value) {
      return this[$noSuchMethod](new core._Invocation.setter(C7 || CT.C7, value));
    }
    set [_table$0](value) {
      return this[$noSuchMethod](new core._Invocation.setter(C8 || CT.C8, value));
    }
    set [_tail$0](value) {
      return this[$noSuchMethod](new core._Invocation.setter(C9 || CT.C9, value));
    }
  };
  (typed_queue.Uint8ClampedQueue.new = function(initialCapacity = null) {
    typed_queue.Uint8ClampedQueue.__proto__.new.call(this, _native_typed_data.NativeUint8ClampedList.new(typed_queue._chooseRealInitialCapacity(initialCapacity)));
    ;
  }).prototype = typed_queue.Uint8ClampedQueue.prototype;
  dart.addTypeTests(typed_queue.Uint8ClampedQueue);
  dart.addTypeCaches(typed_queue.Uint8ClampedQueue);
  typed_queue.Uint8ClampedQueue[dart.implements] = () => [queue_list.QueueList$(dart.legacy(core.int))];
  dart.setMethodSignature(typed_queue.Uint8ClampedQueue, () => ({
    __proto__: dart.getMethods(typed_queue.Uint8ClampedQueue.__proto__),
    [_createList]: dart.fnType(dart.legacy(typed_data.Uint8ClampedList), [dart.legacy(core.int)]),
    [_createBuffer]: dart.fnType(dart.legacy(typed_buffer.Uint8ClampedBuffer), [dart.legacy(core.int)]),
    [_writeToList$]: dart.fnType(dart.legacy(core.int), [dart.legacy(core.List$(dart.legacy(core.int)))]),
    [_add$]: dart.fnType(dart.void, [dart.legacy(core.int)]),
    [_grow$]: dart.fnType(dart.void, []),
    [_preGrow$]: dart.fnType(dart.void, [dart.legacy(core.int)])
  }));
  dart.setGetterSignature(typed_queue.Uint8ClampedQueue, () => ({
    __proto__: dart.getGetters(typed_queue.Uint8ClampedQueue.__proto__),
    [_head$0]: dart.legacy(core.int),
    [_table$0]: dart.legacy(core.List$(dart.legacy(core.int))),
    [_tail$0]: dart.legacy(core.int)
  }));
  dart.setSetterSignature(typed_queue.Uint8ClampedQueue, () => ({
    __proto__: dart.getSetters(typed_queue.Uint8ClampedQueue.__proto__),
    [_head$0]: dart.legacy(core.int),
    [_table$0]: dart.legacy(core.List$(dart.legacy(core.int))),
    [_tail$0]: dart.legacy(core.int)
  }));
  dart.setLibraryUri(typed_queue.Uint8ClampedQueue, L1);
  typed_queue.Uint16Queue = class Uint16Queue extends typed_queue._IntQueue$(dart.legacy(typed_data.Uint16List)) {
    static fromList(elements) {
      let t0;
      t0 = new typed_queue.Uint16Queue.new(elements[$length]);
      return (() => {
        t0.addAll(elements);
        return t0;
      })();
    }
    [_createList](size) {
      return _native_typed_data.NativeUint16List.new(size);
    }
    [_createBuffer](size) {
      return new typed_buffer.Uint16Buffer.new(size);
    }
    get [_head$0]() {
      return intL().as(this[$noSuchMethod](new core._Invocation.getter(C0 || CT.C0)));
    }
    [_writeToList$](target) {
      return intL().as(this[$noSuchMethod](new core._Invocation.method(C1 || CT.C1, null, [target])));
    }
    [_add$](element) {
      return this[$noSuchMethod](new core._Invocation.method(C2 || CT.C2, null, [element]));
    }
    [_grow$]() {
      return this[$noSuchMethod](new core._Invocation.method(C3 || CT.C3, null, []));
    }
    get [_table$0]() {
      return ListLOfintL().as(this[$noSuchMethod](new core._Invocation.getter(C4 || CT.C4)));
    }
    get [_tail$0]() {
      return intL().as(this[$noSuchMethod](new core._Invocation.getter(C5 || CT.C5)));
    }
    [_preGrow$](newElementCount) {
      return this[$noSuchMethod](new core._Invocation.method(C6 || CT.C6, null, [newElementCount]));
    }
    set [_head$0](value) {
      return this[$noSuchMethod](new core._Invocation.setter(C7 || CT.C7, value));
    }
    set [_table$0](value) {
      return this[$noSuchMethod](new core._Invocation.setter(C8 || CT.C8, value));
    }
    set [_tail$0](value) {
      return this[$noSuchMethod](new core._Invocation.setter(C9 || CT.C9, value));
    }
  };
  (typed_queue.Uint16Queue.new = function(initialCapacity = null) {
    typed_queue.Uint16Queue.__proto__.new.call(this, _native_typed_data.NativeUint16List.new(typed_queue._chooseRealInitialCapacity(initialCapacity)));
    ;
  }).prototype = typed_queue.Uint16Queue.prototype;
  dart.addTypeTests(typed_queue.Uint16Queue);
  dart.addTypeCaches(typed_queue.Uint16Queue);
  typed_queue.Uint16Queue[dart.implements] = () => [queue_list.QueueList$(dart.legacy(core.int))];
  dart.setMethodSignature(typed_queue.Uint16Queue, () => ({
    __proto__: dart.getMethods(typed_queue.Uint16Queue.__proto__),
    [_createList]: dart.fnType(dart.legacy(typed_data.Uint16List), [dart.legacy(core.int)]),
    [_createBuffer]: dart.fnType(dart.legacy(typed_buffer.Uint16Buffer), [dart.legacy(core.int)]),
    [_writeToList$]: dart.fnType(dart.legacy(core.int), [dart.legacy(core.List$(dart.legacy(core.int)))]),
    [_add$]: dart.fnType(dart.void, [dart.legacy(core.int)]),
    [_grow$]: dart.fnType(dart.void, []),
    [_preGrow$]: dart.fnType(dart.void, [dart.legacy(core.int)])
  }));
  dart.setGetterSignature(typed_queue.Uint16Queue, () => ({
    __proto__: dart.getGetters(typed_queue.Uint16Queue.__proto__),
    [_head$0]: dart.legacy(core.int),
    [_table$0]: dart.legacy(core.List$(dart.legacy(core.int))),
    [_tail$0]: dart.legacy(core.int)
  }));
  dart.setSetterSignature(typed_queue.Uint16Queue, () => ({
    __proto__: dart.getSetters(typed_queue.Uint16Queue.__proto__),
    [_head$0]: dart.legacy(core.int),
    [_table$0]: dart.legacy(core.List$(dart.legacy(core.int))),
    [_tail$0]: dart.legacy(core.int)
  }));
  dart.setLibraryUri(typed_queue.Uint16Queue, L1);
  typed_queue.Int16Queue = class Int16Queue extends typed_queue._IntQueue$(dart.legacy(typed_data.Int16List)) {
    static fromList(elements) {
      let t0;
      t0 = new typed_queue.Int16Queue.new(elements[$length]);
      return (() => {
        t0.addAll(elements);
        return t0;
      })();
    }
    [_createList](size) {
      return _native_typed_data.NativeInt16List.new(size);
    }
    [_createBuffer](size) {
      return new typed_buffer.Int16Buffer.new(size);
    }
    get [_head$0]() {
      return intL().as(this[$noSuchMethod](new core._Invocation.getter(C0 || CT.C0)));
    }
    [_writeToList$](target) {
      return intL().as(this[$noSuchMethod](new core._Invocation.method(C1 || CT.C1, null, [target])));
    }
    [_add$](element) {
      return this[$noSuchMethod](new core._Invocation.method(C2 || CT.C2, null, [element]));
    }
    [_grow$]() {
      return this[$noSuchMethod](new core._Invocation.method(C3 || CT.C3, null, []));
    }
    get [_table$0]() {
      return ListLOfintL().as(this[$noSuchMethod](new core._Invocation.getter(C4 || CT.C4)));
    }
    get [_tail$0]() {
      return intL().as(this[$noSuchMethod](new core._Invocation.getter(C5 || CT.C5)));
    }
    [_preGrow$](newElementCount) {
      return this[$noSuchMethod](new core._Invocation.method(C6 || CT.C6, null, [newElementCount]));
    }
    set [_head$0](value) {
      return this[$noSuchMethod](new core._Invocation.setter(C7 || CT.C7, value));
    }
    set [_table$0](value) {
      return this[$noSuchMethod](new core._Invocation.setter(C8 || CT.C8, value));
    }
    set [_tail$0](value) {
      return this[$noSuchMethod](new core._Invocation.setter(C9 || CT.C9, value));
    }
  };
  (typed_queue.Int16Queue.new = function(initialCapacity = null) {
    typed_queue.Int16Queue.__proto__.new.call(this, _native_typed_data.NativeInt16List.new(typed_queue._chooseRealInitialCapacity(initialCapacity)));
    ;
  }).prototype = typed_queue.Int16Queue.prototype;
  dart.addTypeTests(typed_queue.Int16Queue);
  dart.addTypeCaches(typed_queue.Int16Queue);
  typed_queue.Int16Queue[dart.implements] = () => [queue_list.QueueList$(dart.legacy(core.int))];
  dart.setMethodSignature(typed_queue.Int16Queue, () => ({
    __proto__: dart.getMethods(typed_queue.Int16Queue.__proto__),
    [_createList]: dart.fnType(dart.legacy(typed_data.Int16List), [dart.legacy(core.int)]),
    [_createBuffer]: dart.fnType(dart.legacy(typed_buffer.Int16Buffer), [dart.legacy(core.int)]),
    [_writeToList$]: dart.fnType(dart.legacy(core.int), [dart.legacy(core.List$(dart.legacy(core.int)))]),
    [_add$]: dart.fnType(dart.void, [dart.legacy(core.int)]),
    [_grow$]: dart.fnType(dart.void, []),
    [_preGrow$]: dart.fnType(dart.void, [dart.legacy(core.int)])
  }));
  dart.setGetterSignature(typed_queue.Int16Queue, () => ({
    __proto__: dart.getGetters(typed_queue.Int16Queue.__proto__),
    [_head$0]: dart.legacy(core.int),
    [_table$0]: dart.legacy(core.List$(dart.legacy(core.int))),
    [_tail$0]: dart.legacy(core.int)
  }));
  dart.setSetterSignature(typed_queue.Int16Queue, () => ({
    __proto__: dart.getSetters(typed_queue.Int16Queue.__proto__),
    [_head$0]: dart.legacy(core.int),
    [_table$0]: dart.legacy(core.List$(dart.legacy(core.int))),
    [_tail$0]: dart.legacy(core.int)
  }));
  dart.setLibraryUri(typed_queue.Int16Queue, L1);
  typed_queue.Uint32Queue = class Uint32Queue extends typed_queue._IntQueue$(dart.legacy(typed_data.Uint32List)) {
    static fromList(elements) {
      let t0;
      t0 = new typed_queue.Uint32Queue.new(elements[$length]);
      return (() => {
        t0.addAll(elements);
        return t0;
      })();
    }
    [_createList](size) {
      return _native_typed_data.NativeUint32List.new(size);
    }
    [_createBuffer](size) {
      return new typed_buffer.Uint32Buffer.new(size);
    }
    get [_head$0]() {
      return intL().as(this[$noSuchMethod](new core._Invocation.getter(C0 || CT.C0)));
    }
    [_writeToList$](target) {
      return intL().as(this[$noSuchMethod](new core._Invocation.method(C1 || CT.C1, null, [target])));
    }
    [_add$](element) {
      return this[$noSuchMethod](new core._Invocation.method(C2 || CT.C2, null, [element]));
    }
    [_grow$]() {
      return this[$noSuchMethod](new core._Invocation.method(C3 || CT.C3, null, []));
    }
    get [_table$0]() {
      return ListLOfintL().as(this[$noSuchMethod](new core._Invocation.getter(C4 || CT.C4)));
    }
    get [_tail$0]() {
      return intL().as(this[$noSuchMethod](new core._Invocation.getter(C5 || CT.C5)));
    }
    [_preGrow$](newElementCount) {
      return this[$noSuchMethod](new core._Invocation.method(C6 || CT.C6, null, [newElementCount]));
    }
    set [_head$0](value) {
      return this[$noSuchMethod](new core._Invocation.setter(C7 || CT.C7, value));
    }
    set [_table$0](value) {
      return this[$noSuchMethod](new core._Invocation.setter(C8 || CT.C8, value));
    }
    set [_tail$0](value) {
      return this[$noSuchMethod](new core._Invocation.setter(C9 || CT.C9, value));
    }
  };
  (typed_queue.Uint32Queue.new = function(initialCapacity = null) {
    typed_queue.Uint32Queue.__proto__.new.call(this, _native_typed_data.NativeUint32List.new(typed_queue._chooseRealInitialCapacity(initialCapacity)));
    ;
  }).prototype = typed_queue.Uint32Queue.prototype;
  dart.addTypeTests(typed_queue.Uint32Queue);
  dart.addTypeCaches(typed_queue.Uint32Queue);
  typed_queue.Uint32Queue[dart.implements] = () => [queue_list.QueueList$(dart.legacy(core.int))];
  dart.setMethodSignature(typed_queue.Uint32Queue, () => ({
    __proto__: dart.getMethods(typed_queue.Uint32Queue.__proto__),
    [_createList]: dart.fnType(dart.legacy(typed_data.Uint32List), [dart.legacy(core.int)]),
    [_createBuffer]: dart.fnType(dart.legacy(typed_buffer.Uint32Buffer), [dart.legacy(core.int)]),
    [_writeToList$]: dart.fnType(dart.legacy(core.int), [dart.legacy(core.List$(dart.legacy(core.int)))]),
    [_add$]: dart.fnType(dart.void, [dart.legacy(core.int)]),
    [_grow$]: dart.fnType(dart.void, []),
    [_preGrow$]: dart.fnType(dart.void, [dart.legacy(core.int)])
  }));
  dart.setGetterSignature(typed_queue.Uint32Queue, () => ({
    __proto__: dart.getGetters(typed_queue.Uint32Queue.__proto__),
    [_head$0]: dart.legacy(core.int),
    [_table$0]: dart.legacy(core.List$(dart.legacy(core.int))),
    [_tail$0]: dart.legacy(core.int)
  }));
  dart.setSetterSignature(typed_queue.Uint32Queue, () => ({
    __proto__: dart.getSetters(typed_queue.Uint32Queue.__proto__),
    [_head$0]: dart.legacy(core.int),
    [_table$0]: dart.legacy(core.List$(dart.legacy(core.int))),
    [_tail$0]: dart.legacy(core.int)
  }));
  dart.setLibraryUri(typed_queue.Uint32Queue, L1);
  typed_queue.Int32Queue = class Int32Queue extends typed_queue._IntQueue$(dart.legacy(typed_data.Int32List)) {
    static fromList(elements) {
      let t0;
      t0 = new typed_queue.Int32Queue.new(elements[$length]);
      return (() => {
        t0.addAll(elements);
        return t0;
      })();
    }
    [_createList](size) {
      return _native_typed_data.NativeInt32List.new(size);
    }
    [_createBuffer](size) {
      return new typed_buffer.Int32Buffer.new(size);
    }
    get [_head$0]() {
      return intL().as(this[$noSuchMethod](new core._Invocation.getter(C0 || CT.C0)));
    }
    [_writeToList$](target) {
      return intL().as(this[$noSuchMethod](new core._Invocation.method(C1 || CT.C1, null, [target])));
    }
    [_add$](element) {
      return this[$noSuchMethod](new core._Invocation.method(C2 || CT.C2, null, [element]));
    }
    [_grow$]() {
      return this[$noSuchMethod](new core._Invocation.method(C3 || CT.C3, null, []));
    }
    get [_table$0]() {
      return ListLOfintL().as(this[$noSuchMethod](new core._Invocation.getter(C4 || CT.C4)));
    }
    get [_tail$0]() {
      return intL().as(this[$noSuchMethod](new core._Invocation.getter(C5 || CT.C5)));
    }
    [_preGrow$](newElementCount) {
      return this[$noSuchMethod](new core._Invocation.method(C6 || CT.C6, null, [newElementCount]));
    }
    set [_head$0](value) {
      return this[$noSuchMethod](new core._Invocation.setter(C7 || CT.C7, value));
    }
    set [_table$0](value) {
      return this[$noSuchMethod](new core._Invocation.setter(C8 || CT.C8, value));
    }
    set [_tail$0](value) {
      return this[$noSuchMethod](new core._Invocation.setter(C9 || CT.C9, value));
    }
  };
  (typed_queue.Int32Queue.new = function(initialCapacity = null) {
    typed_queue.Int32Queue.__proto__.new.call(this, _native_typed_data.NativeInt32List.new(typed_queue._chooseRealInitialCapacity(initialCapacity)));
    ;
  }).prototype = typed_queue.Int32Queue.prototype;
  dart.addTypeTests(typed_queue.Int32Queue);
  dart.addTypeCaches(typed_queue.Int32Queue);
  typed_queue.Int32Queue[dart.implements] = () => [queue_list.QueueList$(dart.legacy(core.int))];
  dart.setMethodSignature(typed_queue.Int32Queue, () => ({
    __proto__: dart.getMethods(typed_queue.Int32Queue.__proto__),
    [_createList]: dart.fnType(dart.legacy(typed_data.Int32List), [dart.legacy(core.int)]),
    [_createBuffer]: dart.fnType(dart.legacy(typed_buffer.Int32Buffer), [dart.legacy(core.int)]),
    [_writeToList$]: dart.fnType(dart.legacy(core.int), [dart.legacy(core.List$(dart.legacy(core.int)))]),
    [_add$]: dart.fnType(dart.void, [dart.legacy(core.int)]),
    [_grow$]: dart.fnType(dart.void, []),
    [_preGrow$]: dart.fnType(dart.void, [dart.legacy(core.int)])
  }));
  dart.setGetterSignature(typed_queue.Int32Queue, () => ({
    __proto__: dart.getGetters(typed_queue.Int32Queue.__proto__),
    [_head$0]: dart.legacy(core.int),
    [_table$0]: dart.legacy(core.List$(dart.legacy(core.int))),
    [_tail$0]: dart.legacy(core.int)
  }));
  dart.setSetterSignature(typed_queue.Int32Queue, () => ({
    __proto__: dart.getSetters(typed_queue.Int32Queue.__proto__),
    [_head$0]: dart.legacy(core.int),
    [_table$0]: dart.legacy(core.List$(dart.legacy(core.int))),
    [_tail$0]: dart.legacy(core.int)
  }));
  dart.setLibraryUri(typed_queue.Int32Queue, L1);
  typed_queue.Uint64Queue = class Uint64Queue extends typed_queue._IntQueue$(dart.legacy(typed_data.Uint64List)) {
    static fromList(elements) {
      let t0;
      t0 = new typed_queue.Uint64Queue.new(elements[$length]);
      return (() => {
        t0.addAll(elements);
        return t0;
      })();
    }
    [_createList](size) {
      return typed_data.Uint64List.new(size);
    }
    [_createBuffer](size) {
      return new typed_buffer.Uint64Buffer.new(size);
    }
    get [_head$0]() {
      return intL().as(this[$noSuchMethod](new core._Invocation.getter(C0 || CT.C0)));
    }
    [_writeToList$](target) {
      return intL().as(this[$noSuchMethod](new core._Invocation.method(C1 || CT.C1, null, [target])));
    }
    [_add$](element) {
      return this[$noSuchMethod](new core._Invocation.method(C2 || CT.C2, null, [element]));
    }
    [_grow$]() {
      return this[$noSuchMethod](new core._Invocation.method(C3 || CT.C3, null, []));
    }
    get [_table$0]() {
      return ListLOfintL().as(this[$noSuchMethod](new core._Invocation.getter(C4 || CT.C4)));
    }
    get [_tail$0]() {
      return intL().as(this[$noSuchMethod](new core._Invocation.getter(C5 || CT.C5)));
    }
    [_preGrow$](newElementCount) {
      return this[$noSuchMethod](new core._Invocation.method(C6 || CT.C6, null, [newElementCount]));
    }
    set [_head$0](value) {
      return this[$noSuchMethod](new core._Invocation.setter(C7 || CT.C7, value));
    }
    set [_table$0](value) {
      return this[$noSuchMethod](new core._Invocation.setter(C8 || CT.C8, value));
    }
    set [_tail$0](value) {
      return this[$noSuchMethod](new core._Invocation.setter(C9 || CT.C9, value));
    }
  };
  (typed_queue.Uint64Queue.new = function(initialCapacity = null) {
    typed_queue.Uint64Queue.__proto__.new.call(this, typed_data.Uint64List.new(typed_queue._chooseRealInitialCapacity(initialCapacity)));
    ;
  }).prototype = typed_queue.Uint64Queue.prototype;
  dart.addTypeTests(typed_queue.Uint64Queue);
  dart.addTypeCaches(typed_queue.Uint64Queue);
  typed_queue.Uint64Queue[dart.implements] = () => [queue_list.QueueList$(dart.legacy(core.int))];
  dart.setMethodSignature(typed_queue.Uint64Queue, () => ({
    __proto__: dart.getMethods(typed_queue.Uint64Queue.__proto__),
    [_createList]: dart.fnType(dart.legacy(typed_data.Uint64List), [dart.legacy(core.int)]),
    [_createBuffer]: dart.fnType(dart.legacy(typed_buffer.Uint64Buffer), [dart.legacy(core.int)]),
    [_writeToList$]: dart.fnType(dart.legacy(core.int), [dart.legacy(core.List$(dart.legacy(core.int)))]),
    [_add$]: dart.fnType(dart.void, [dart.legacy(core.int)]),
    [_grow$]: dart.fnType(dart.void, []),
    [_preGrow$]: dart.fnType(dart.void, [dart.legacy(core.int)])
  }));
  dart.setGetterSignature(typed_queue.Uint64Queue, () => ({
    __proto__: dart.getGetters(typed_queue.Uint64Queue.__proto__),
    [_head$0]: dart.legacy(core.int),
    [_table$0]: dart.legacy(core.List$(dart.legacy(core.int))),
    [_tail$0]: dart.legacy(core.int)
  }));
  dart.setSetterSignature(typed_queue.Uint64Queue, () => ({
    __proto__: dart.getSetters(typed_queue.Uint64Queue.__proto__),
    [_head$0]: dart.legacy(core.int),
    [_table$0]: dart.legacy(core.List$(dart.legacy(core.int))),
    [_tail$0]: dart.legacy(core.int)
  }));
  dart.setLibraryUri(typed_queue.Uint64Queue, L1);
  typed_queue.Int64Queue = class Int64Queue extends typed_queue._IntQueue$(dart.legacy(typed_data.Int64List)) {
    static fromList(elements) {
      let t0;
      t0 = new typed_queue.Int64Queue.new(elements[$length]);
      return (() => {
        t0.addAll(elements);
        return t0;
      })();
    }
    [_createList](size) {
      return typed_data.Int64List.new(size);
    }
    [_createBuffer](size) {
      return new typed_buffer.Int64Buffer.new(size);
    }
    get [_head$0]() {
      return intL().as(this[$noSuchMethod](new core._Invocation.getter(C0 || CT.C0)));
    }
    [_writeToList$](target) {
      return intL().as(this[$noSuchMethod](new core._Invocation.method(C1 || CT.C1, null, [target])));
    }
    [_add$](element) {
      return this[$noSuchMethod](new core._Invocation.method(C2 || CT.C2, null, [element]));
    }
    [_grow$]() {
      return this[$noSuchMethod](new core._Invocation.method(C3 || CT.C3, null, []));
    }
    get [_table$0]() {
      return ListLOfintL().as(this[$noSuchMethod](new core._Invocation.getter(C4 || CT.C4)));
    }
    get [_tail$0]() {
      return intL().as(this[$noSuchMethod](new core._Invocation.getter(C5 || CT.C5)));
    }
    [_preGrow$](newElementCount) {
      return this[$noSuchMethod](new core._Invocation.method(C6 || CT.C6, null, [newElementCount]));
    }
    set [_head$0](value) {
      return this[$noSuchMethod](new core._Invocation.setter(C7 || CT.C7, value));
    }
    set [_table$0](value) {
      return this[$noSuchMethod](new core._Invocation.setter(C8 || CT.C8, value));
    }
    set [_tail$0](value) {
      return this[$noSuchMethod](new core._Invocation.setter(C9 || CT.C9, value));
    }
  };
  (typed_queue.Int64Queue.new = function(initialCapacity = null) {
    typed_queue.Int64Queue.__proto__.new.call(this, typed_data.Int64List.new(typed_queue._chooseRealInitialCapacity(initialCapacity)));
    ;
  }).prototype = typed_queue.Int64Queue.prototype;
  dart.addTypeTests(typed_queue.Int64Queue);
  dart.addTypeCaches(typed_queue.Int64Queue);
  typed_queue.Int64Queue[dart.implements] = () => [queue_list.QueueList$(dart.legacy(core.int))];
  dart.setMethodSignature(typed_queue.Int64Queue, () => ({
    __proto__: dart.getMethods(typed_queue.Int64Queue.__proto__),
    [_createList]: dart.fnType(dart.legacy(typed_data.Int64List), [dart.legacy(core.int)]),
    [_createBuffer]: dart.fnType(dart.legacy(typed_buffer.Int64Buffer), [dart.legacy(core.int)]),
    [_writeToList$]: dart.fnType(dart.legacy(core.int), [dart.legacy(core.List$(dart.legacy(core.int)))]),
    [_add$]: dart.fnType(dart.void, [dart.legacy(core.int)]),
    [_grow$]: dart.fnType(dart.void, []),
    [_preGrow$]: dart.fnType(dart.void, [dart.legacy(core.int)])
  }));
  dart.setGetterSignature(typed_queue.Int64Queue, () => ({
    __proto__: dart.getGetters(typed_queue.Int64Queue.__proto__),
    [_head$0]: dart.legacy(core.int),
    [_table$0]: dart.legacy(core.List$(dart.legacy(core.int))),
    [_tail$0]: dart.legacy(core.int)
  }));
  dart.setSetterSignature(typed_queue.Int64Queue, () => ({
    __proto__: dart.getSetters(typed_queue.Int64Queue.__proto__),
    [_head$0]: dart.legacy(core.int),
    [_table$0]: dart.legacy(core.List$(dart.legacy(core.int))),
    [_tail$0]: dart.legacy(core.int)
  }));
  dart.setLibraryUri(typed_queue.Int64Queue, L1);
  typed_queue.Float32Queue = class Float32Queue extends typed_queue._FloatQueue$(dart.legacy(typed_data.Float32List)) {
    static fromList(elements) {
      let t0;
      t0 = new typed_queue.Float32Queue.new(elements[$length]);
      return (() => {
        t0.addAll(elements);
        return t0;
      })();
    }
    [_createList](size) {
      return _native_typed_data.NativeFloat32List.new(size);
    }
    [_createBuffer](size) {
      return new typed_buffer.Float32Buffer.new(size);
    }
    get [_head$0]() {
      return intL().as(this[$noSuchMethod](new core._Invocation.getter(C0 || CT.C0)));
    }
    [_writeToList$](target) {
      return intL().as(this[$noSuchMethod](new core._Invocation.method(C1 || CT.C1, null, [target])));
    }
    [_add$](element) {
      return this[$noSuchMethod](new core._Invocation.method(C2 || CT.C2, null, [element]));
    }
    [_grow$]() {
      return this[$noSuchMethod](new core._Invocation.method(C3 || CT.C3, null, []));
    }
    get [_table$0]() {
      return ListLOfdoubleL().as(this[$noSuchMethod](new core._Invocation.getter(C4 || CT.C4)));
    }
    get [_tail$0]() {
      return intL().as(this[$noSuchMethod](new core._Invocation.getter(C5 || CT.C5)));
    }
    [_preGrow$](newElementCount) {
      return this[$noSuchMethod](new core._Invocation.method(C6 || CT.C6, null, [newElementCount]));
    }
    set [_head$0](value) {
      return this[$noSuchMethod](new core._Invocation.setter(C7 || CT.C7, value));
    }
    set [_table$0](value) {
      return this[$noSuchMethod](new core._Invocation.setter(C8 || CT.C8, value));
    }
    set [_tail$0](value) {
      return this[$noSuchMethod](new core._Invocation.setter(C9 || CT.C9, value));
    }
  };
  (typed_queue.Float32Queue.new = function(initialCapacity = null) {
    typed_queue.Float32Queue.__proto__.new.call(this, _native_typed_data.NativeFloat32List.new(typed_queue._chooseRealInitialCapacity(initialCapacity)));
    ;
  }).prototype = typed_queue.Float32Queue.prototype;
  dart.addTypeTests(typed_queue.Float32Queue);
  dart.addTypeCaches(typed_queue.Float32Queue);
  typed_queue.Float32Queue[dart.implements] = () => [queue_list.QueueList$(dart.legacy(core.double))];
  dart.setMethodSignature(typed_queue.Float32Queue, () => ({
    __proto__: dart.getMethods(typed_queue.Float32Queue.__proto__),
    [_createList]: dart.fnType(dart.legacy(typed_data.Float32List), [dart.legacy(core.int)]),
    [_createBuffer]: dart.fnType(dart.legacy(typed_buffer.Float32Buffer), [dart.legacy(core.int)]),
    [_writeToList$]: dart.fnType(dart.legacy(core.int), [dart.legacy(core.List$(dart.legacy(core.double)))]),
    [_add$]: dart.fnType(dart.void, [dart.legacy(core.double)]),
    [_grow$]: dart.fnType(dart.void, []),
    [_preGrow$]: dart.fnType(dart.void, [dart.legacy(core.int)])
  }));
  dart.setGetterSignature(typed_queue.Float32Queue, () => ({
    __proto__: dart.getGetters(typed_queue.Float32Queue.__proto__),
    [_head$0]: dart.legacy(core.int),
    [_table$0]: dart.legacy(core.List$(dart.legacy(core.double))),
    [_tail$0]: dart.legacy(core.int)
  }));
  dart.setSetterSignature(typed_queue.Float32Queue, () => ({
    __proto__: dart.getSetters(typed_queue.Float32Queue.__proto__),
    [_head$0]: dart.legacy(core.int),
    [_table$0]: dart.legacy(core.List$(dart.legacy(core.double))),
    [_tail$0]: dart.legacy(core.int)
  }));
  dart.setLibraryUri(typed_queue.Float32Queue, L1);
  typed_queue.Float64Queue = class Float64Queue extends typed_queue._FloatQueue$(dart.legacy(typed_data.Float64List)) {
    static fromList(elements) {
      let t0;
      t0 = new typed_queue.Float64Queue.new(elements[$length]);
      return (() => {
        t0.addAll(elements);
        return t0;
      })();
    }
    [_createList](size) {
      return _native_typed_data.NativeFloat64List.new(size);
    }
    [_createBuffer](size) {
      return new typed_buffer.Float64Buffer.new(size);
    }
    get [_head$0]() {
      return intL().as(this[$noSuchMethod](new core._Invocation.getter(C0 || CT.C0)));
    }
    [_writeToList$](target) {
      return intL().as(this[$noSuchMethod](new core._Invocation.method(C1 || CT.C1, null, [target])));
    }
    [_add$](element) {
      return this[$noSuchMethod](new core._Invocation.method(C2 || CT.C2, null, [element]));
    }
    [_grow$]() {
      return this[$noSuchMethod](new core._Invocation.method(C3 || CT.C3, null, []));
    }
    get [_table$0]() {
      return ListLOfdoubleL().as(this[$noSuchMethod](new core._Invocation.getter(C4 || CT.C4)));
    }
    get [_tail$0]() {
      return intL().as(this[$noSuchMethod](new core._Invocation.getter(C5 || CT.C5)));
    }
    [_preGrow$](newElementCount) {
      return this[$noSuchMethod](new core._Invocation.method(C6 || CT.C6, null, [newElementCount]));
    }
    set [_head$0](value) {
      return this[$noSuchMethod](new core._Invocation.setter(C7 || CT.C7, value));
    }
    set [_table$0](value) {
      return this[$noSuchMethod](new core._Invocation.setter(C8 || CT.C8, value));
    }
    set [_tail$0](value) {
      return this[$noSuchMethod](new core._Invocation.setter(C9 || CT.C9, value));
    }
  };
  (typed_queue.Float64Queue.new = function(initialCapacity = null) {
    typed_queue.Float64Queue.__proto__.new.call(this, _native_typed_data.NativeFloat64List.new(typed_queue._chooseRealInitialCapacity(initialCapacity)));
    ;
  }).prototype = typed_queue.Float64Queue.prototype;
  dart.addTypeTests(typed_queue.Float64Queue);
  dart.addTypeCaches(typed_queue.Float64Queue);
  typed_queue.Float64Queue[dart.implements] = () => [queue_list.QueueList$(dart.legacy(core.double))];
  dart.setMethodSignature(typed_queue.Float64Queue, () => ({
    __proto__: dart.getMethods(typed_queue.Float64Queue.__proto__),
    [_createList]: dart.fnType(dart.legacy(typed_data.Float64List), [dart.legacy(core.int)]),
    [_createBuffer]: dart.fnType(dart.legacy(typed_buffer.Float64Buffer), [dart.legacy(core.int)]),
    [_writeToList$]: dart.fnType(dart.legacy(core.int), [dart.legacy(core.List$(dart.legacy(core.double)))]),
    [_add$]: dart.fnType(dart.void, [dart.legacy(core.double)]),
    [_grow$]: dart.fnType(dart.void, []),
    [_preGrow$]: dart.fnType(dart.void, [dart.legacy(core.int)])
  }));
  dart.setGetterSignature(typed_queue.Float64Queue, () => ({
    __proto__: dart.getGetters(typed_queue.Float64Queue.__proto__),
    [_head$0]: dart.legacy(core.int),
    [_table$0]: dart.legacy(core.List$(dart.legacy(core.double))),
    [_tail$0]: dart.legacy(core.int)
  }));
  dart.setSetterSignature(typed_queue.Float64Queue, () => ({
    __proto__: dart.getSetters(typed_queue.Float64Queue.__proto__),
    [_head$0]: dart.legacy(core.int),
    [_table$0]: dart.legacy(core.List$(dart.legacy(core.double))),
    [_tail$0]: dart.legacy(core.int)
  }));
  dart.setLibraryUri(typed_queue.Float64Queue, L1);
  typed_queue.Int32x4Queue = class Int32x4Queue extends typed_queue._TypedQueue$(dart.legacy(typed_data.Int32x4), dart.legacy(typed_data.Int32x4List)) {
    static fromList(elements) {
      let t0;
      t0 = new typed_queue.Int32x4Queue.new(elements[$length]);
      return (() => {
        t0.addAll(elements);
        return t0;
      })();
    }
    [_createList](size) {
      return new _native_typed_data.NativeInt32x4List.new(size);
    }
    [_createBuffer](size) {
      return new typed_buffer.Int32x4Buffer.new(size);
    }
    get [_defaultValue]() {
      return typed_queue.Int32x4Queue._zero;
    }
    get [_head$0]() {
      return intL().as(this[$noSuchMethod](new core._Invocation.getter(C0 || CT.C0)));
    }
    [_writeToList$](target) {
      return intL().as(this[$noSuchMethod](new core._Invocation.method(C1 || CT.C1, null, [target])));
    }
    [_add$](element) {
      return this[$noSuchMethod](new core._Invocation.method(C2 || CT.C2, null, [element]));
    }
    [_grow$]() {
      return this[$noSuchMethod](new core._Invocation.method(C3 || CT.C3, null, []));
    }
    get [_table$0]() {
      return ListLOfInt32x4L().as(this[$noSuchMethod](new core._Invocation.getter(C4 || CT.C4)));
    }
    get [_tail$0]() {
      return intL().as(this[$noSuchMethod](new core._Invocation.getter(C5 || CT.C5)));
    }
    [_preGrow$](newElementCount) {
      return this[$noSuchMethod](new core._Invocation.method(C6 || CT.C6, null, [newElementCount]));
    }
    set [_head$0](value) {
      return this[$noSuchMethod](new core._Invocation.setter(C7 || CT.C7, value));
    }
    set [_table$0](value) {
      return this[$noSuchMethod](new core._Invocation.setter(C8 || CT.C8, value));
    }
    set [_tail$0](value) {
      return this[$noSuchMethod](new core._Invocation.setter(C9 || CT.C9, value));
    }
  };
  (typed_queue.Int32x4Queue.new = function(initialCapacity = null) {
    typed_queue.Int32x4Queue.__proto__.new.call(this, new _native_typed_data.NativeInt32x4List.new(typed_queue._chooseRealInitialCapacity(initialCapacity)));
    ;
  }).prototype = typed_queue.Int32x4Queue.prototype;
  dart.addTypeTests(typed_queue.Int32x4Queue);
  dart.addTypeCaches(typed_queue.Int32x4Queue);
  typed_queue.Int32x4Queue[dart.implements] = () => [queue_list.QueueList$(dart.legacy(typed_data.Int32x4))];
  dart.setMethodSignature(typed_queue.Int32x4Queue, () => ({
    __proto__: dart.getMethods(typed_queue.Int32x4Queue.__proto__),
    [_createList]: dart.fnType(dart.legacy(typed_data.Int32x4List), [dart.legacy(core.int)]),
    [_createBuffer]: dart.fnType(dart.legacy(typed_buffer.Int32x4Buffer), [dart.legacy(core.int)]),
    [_writeToList$]: dart.fnType(dart.legacy(core.int), [dart.legacy(core.List$(dart.legacy(typed_data.Int32x4)))]),
    [_add$]: dart.fnType(dart.void, [dart.legacy(typed_data.Int32x4)]),
    [_grow$]: dart.fnType(dart.void, []),
    [_preGrow$]: dart.fnType(dart.void, [dart.legacy(core.int)])
  }));
  dart.setGetterSignature(typed_queue.Int32x4Queue, () => ({
    __proto__: dart.getGetters(typed_queue.Int32x4Queue.__proto__),
    [_defaultValue]: dart.legacy(typed_data.Int32x4),
    [_head$0]: dart.legacy(core.int),
    [_table$0]: dart.legacy(core.List$(dart.legacy(typed_data.Int32x4))),
    [_tail$0]: dart.legacy(core.int)
  }));
  dart.setSetterSignature(typed_queue.Int32x4Queue, () => ({
    __proto__: dart.getSetters(typed_queue.Int32x4Queue.__proto__),
    [_head$0]: dart.legacy(core.int),
    [_table$0]: dart.legacy(core.List$(dart.legacy(typed_data.Int32x4))),
    [_tail$0]: dart.legacy(core.int)
  }));
  dart.setLibraryUri(typed_queue.Int32x4Queue, L1);
  dart.defineLazy(typed_queue.Int32x4Queue, {
    /*typed_queue.Int32x4Queue._zero*/get _zero() {
      return new _native_typed_data.NativeInt32x4.new(0, 0, 0, 0);
    }
  }, true);
  typed_queue.Float32x4Queue = class Float32x4Queue extends typed_queue._TypedQueue$(dart.legacy(typed_data.Float32x4), dart.legacy(typed_data.Float32x4List)) {
    static fromList(elements) {
      let t0;
      t0 = new typed_queue.Float32x4Queue.new(elements[$length]);
      return (() => {
        t0.addAll(elements);
        return t0;
      })();
    }
    [_createList](size) {
      return new _native_typed_data.NativeFloat32x4List.new(size);
    }
    [_createBuffer](size) {
      return new typed_buffer.Float32x4Buffer.new(size);
    }
    get [_defaultValue]() {
      return new _native_typed_data.NativeFloat32x4.zero();
    }
    get [_head$0]() {
      return intL().as(this[$noSuchMethod](new core._Invocation.getter(C0 || CT.C0)));
    }
    [_writeToList$](target) {
      return intL().as(this[$noSuchMethod](new core._Invocation.method(C1 || CT.C1, null, [target])));
    }
    [_add$](element) {
      return this[$noSuchMethod](new core._Invocation.method(C2 || CT.C2, null, [element]));
    }
    [_grow$]() {
      return this[$noSuchMethod](new core._Invocation.method(C3 || CT.C3, null, []));
    }
    get [_table$0]() {
      return ListLOfFloat32x4L().as(this[$noSuchMethod](new core._Invocation.getter(C4 || CT.C4)));
    }
    get [_tail$0]() {
      return intL().as(this[$noSuchMethod](new core._Invocation.getter(C5 || CT.C5)));
    }
    [_preGrow$](newElementCount) {
      return this[$noSuchMethod](new core._Invocation.method(C6 || CT.C6, null, [newElementCount]));
    }
    set [_head$0](value) {
      return this[$noSuchMethod](new core._Invocation.setter(C7 || CT.C7, value));
    }
    set [_table$0](value) {
      return this[$noSuchMethod](new core._Invocation.setter(C8 || CT.C8, value));
    }
    set [_tail$0](value) {
      return this[$noSuchMethod](new core._Invocation.setter(C9 || CT.C9, value));
    }
  };
  (typed_queue.Float32x4Queue.new = function(initialCapacity = null) {
    typed_queue.Float32x4Queue.__proto__.new.call(this, new _native_typed_data.NativeFloat32x4List.new(typed_queue._chooseRealInitialCapacity(initialCapacity)));
    ;
  }).prototype = typed_queue.Float32x4Queue.prototype;
  dart.addTypeTests(typed_queue.Float32x4Queue);
  dart.addTypeCaches(typed_queue.Float32x4Queue);
  typed_queue.Float32x4Queue[dart.implements] = () => [queue_list.QueueList$(dart.legacy(typed_data.Float32x4))];
  dart.setMethodSignature(typed_queue.Float32x4Queue, () => ({
    __proto__: dart.getMethods(typed_queue.Float32x4Queue.__proto__),
    [_createList]: dart.fnType(dart.legacy(typed_data.Float32x4List), [dart.legacy(core.int)]),
    [_createBuffer]: dart.fnType(dart.legacy(typed_buffer.Float32x4Buffer), [dart.legacy(core.int)]),
    [_writeToList$]: dart.fnType(dart.legacy(core.int), [dart.legacy(core.List$(dart.legacy(typed_data.Float32x4)))]),
    [_add$]: dart.fnType(dart.void, [dart.legacy(typed_data.Float32x4)]),
    [_grow$]: dart.fnType(dart.void, []),
    [_preGrow$]: dart.fnType(dart.void, [dart.legacy(core.int)])
  }));
  dart.setGetterSignature(typed_queue.Float32x4Queue, () => ({
    __proto__: dart.getGetters(typed_queue.Float32x4Queue.__proto__),
    [_defaultValue]: dart.legacy(typed_data.Float32x4),
    [_head$0]: dart.legacy(core.int),
    [_table$0]: dart.legacy(core.List$(dart.legacy(typed_data.Float32x4))),
    [_tail$0]: dart.legacy(core.int)
  }));
  dart.setSetterSignature(typed_queue.Float32x4Queue, () => ({
    __proto__: dart.getSetters(typed_queue.Float32x4Queue.__proto__),
    [_head$0]: dart.legacy(core.int),
    [_table$0]: dart.legacy(core.List$(dart.legacy(typed_data.Float32x4))),
    [_tail$0]: dart.legacy(core.int)
  }));
  dart.setLibraryUri(typed_queue.Float32x4Queue, L1);
  typed_queue._chooseRealInitialCapacity = function _chooseRealInitialCapacity(initialCapacity) {
    if (initialCapacity == null || dart.notNull(initialCapacity) < 16) {
      return 16;
    } else if (!dart.test(typed_queue._isPowerOf2(initialCapacity))) {
      return typed_queue._nextPowerOf2(initialCapacity);
    } else {
      return initialCapacity;
    }
  };
  typed_queue._isPowerOf2 = function _isPowerOf2(number) {
    return (dart.notNull(number) & dart.notNull(number) - 1) === 0;
  };
  typed_queue._nextPowerOf2 = function _nextPowerOf2(number) {
    if (!(dart.notNull(number) > 0)) dart.assertFailed(null, L0, 647, 10, "number > 0");
    number = (dart.notNull(number) << 1 >>> 0) - 1;
    for (;;) {
      let nextNumber = (dart.notNull(number) & dart.notNull(number) - 1) >>> 0;
      if (nextNumber === 0) return number;
      number = nextNumber;
    }
  };
  dart.defineLazy(typed_queue, {
    /*typed_queue._defaultInitialCapacity*/get _defaultInitialCapacity() {
      return 16;
    }
  }, true);
  dart.trackLibraries("packages/typed_data/src/typed_queue", {
    "package:typed_data/typed_data.dart": typed_data$,
    "package:typed_data/src/typed_queue.dart": typed_queue
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["typed_queue.dart"],"names":[],"mappings":"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","file":"typed_queue.unsound.ddc.js"}');
  // Exports:
  return {
    typed_data: typed_data$,
    src__typed_queue: typed_queue
  };
}));

//# sourceMappingURL=typed_queue.unsound.ddc.js.map

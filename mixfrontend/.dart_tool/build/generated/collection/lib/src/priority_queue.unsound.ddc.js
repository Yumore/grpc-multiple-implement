define(['dart_sdk', 'packages/collection/src/utils'], (function load__packages__collection__src__priority_queue(dart_sdk, packages__collection__src__utils) {
  'use strict';
  const core = dart_sdk.core;
  const _interceptors = dart_sdk._interceptors;
  const collection = dart_sdk.collection;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const utils = packages__collection__src__utils.src__utils;
  var priority_queue = Object.create(dart.library);
  var $_get = dartx._get;
  var $take = dartx.take;
  var $length = dartx.length;
  var $setRange = dartx.setRange;
  var $sort = dartx.sort;
  var $toString = dartx.toString;
  var $isOdd = dartx.isOdd;
  var $rightShift = dartx['>>'];
  var $_set = dartx._set;
  var $truncate = dartx.truncate;
  var intL = () => (intL = dart.constFn(dart.legacy(core.int)))();
  const CT = Object.create(null);
  var L0 = "package:collection/src/priority_queue.dart";
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.constList([], core.Null);
    }
  }, false);
  const _is_PriorityQueue_default = Symbol('_is_PriorityQueue_default');
  priority_queue.PriorityQueue$ = dart.generic(E => {
    class PriorityQueue extends core.Object {}
    (PriorityQueue[dart.mixinNew] = function() {
    }).prototype = PriorityQueue.prototype;
    dart.addTypeTests(PriorityQueue);
    PriorityQueue.prototype[_is_PriorityQueue_default] = true;
    dart.addTypeCaches(PriorityQueue);
    dart.setLibraryUri(PriorityQueue, L0);
    return PriorityQueue;
  });
  priority_queue.PriorityQueue = priority_queue.PriorityQueue$();
  dart.addTypeTests(priority_queue.PriorityQueue, _is_PriorityQueue_default);
  var _queue = dart.privateName(priority_queue, "_queue");
  var _length = dart.privateName(priority_queue, "_length");
  var _add = dart.privateName(priority_queue, "_add");
  var C0;
  var _locate = dart.privateName(priority_queue, "_locate");
  var _removeLast = dart.privateName(priority_queue, "_removeLast");
  var _bubbleUp = dart.privateName(priority_queue, "_bubbleUp");
  var _bubbleDown = dart.privateName(priority_queue, "_bubbleDown");
  var _grow = dart.privateName(priority_queue, "_grow");
  const _is_HeapPriorityQueue_default = Symbol('_is_HeapPriorityQueue_default');
  var comparison$ = dart.privateName(priority_queue, "HeapPriorityQueue.comparison");
  priority_queue.HeapPriorityQueue$ = dart.generic(E => {
    var EL = () => (EL = dart.constFn(dart.legacy(E)))();
    var ListOfEL = () => (ListOfEL = dart.constFn(core.List$(EL())))();
    var IterableOfEL = () => (IterableOfEL = dart.constFn(core.Iterable$(EL())))();
    var IterableLOfEL = () => (IterableLOfEL = dart.constFn(dart.legacy(IterableOfEL())))();
    var JSArrayOfEL = () => (JSArrayOfEL = dart.constFn(_interceptors.JSArray$(EL())))();
    var SplayTreeSetOfEL = () => (SplayTreeSetOfEL = dart.constFn(collection.SplayTreeSet$(EL())))();
    class HeapPriorityQueue extends core.Object {
      get comparison() {
        return this[comparison$];
      }
      set comparison(value) {
        super.comparison = value;
      }
      add(element) {
        EL().as(element);
        this[_add](element);
      }
      addAll(elements) {
        IterableLOfEL().as(elements);
        for (let element of elements) {
          this[_add](element);
        }
      }
      clear() {
        this[_queue] = C0 || CT.C0;
        this[_length] = 0;
      }
      contains(object) {
        EL().as(object);
        return dart.notNull(this[_locate](object)) >= 0;
      }
      get first() {
        if (this[_length] === 0) dart.throw(new core.StateError.new("No such element"));
        return this[_queue][$_get](0);
      }
      get isEmpty() {
        return this[_length] === 0;
      }
      get isNotEmpty() {
        return this[_length] !== 0;
      }
      get length() {
        return this[_length];
      }
      remove(element) {
        let t1, t0;
        EL().as(element);
        let index = this[_locate](element);
        if (dart.notNull(index) < 0) return false;
        let last = this[_removeLast]();
        if (dart.notNull(index) < dart.notNull(this[_length])) {
          let comp = (t0 = last, t1 = element, this.comparison(t0, t1));
          if (dart.notNull(comp) <= 0) {
            this[_bubbleUp](last, index);
          } else {
            this[_bubbleDown](last, index);
          }
        }
        return true;
      }
      removeAll() {
        let result = this[_queue];
        let length = this[_length];
        this[_queue] = C0 || CT.C0;
        this[_length] = 0;
        return result[$take](length);
      }
      removeFirst() {
        if (this[_length] === 0) dart.throw(new core.StateError.new("No such element"));
        let result = this[_queue][$_get](0);
        let last = this[_removeLast]();
        if (dart.notNull(this[_length]) > 0) {
          this[_bubbleDown](last, 0);
        }
        return result;
      }
      toList() {
        let t0;
        let list = (t0 = JSArrayOfEL().of([]), (() => {
          t0[$length] = this[_length];
          t0[$setRange](0, this[_length], this[_queue]);
          t0[$sort](this.comparison);
          return t0;
        })());
        return list;
      }
      toSet() {
        let set = new (SplayTreeSetOfEL()).new(this.comparison);
        for (let i = 0; i < dart.notNull(this[_length]); i = i + 1) {
          set.add(this[_queue][$_get](i));
        }
        return set;
      }
      toString() {
        return dart.toString(this[_queue][$take](this[_length]));
      }
      [_add](element) {
        let t0;
        if (this[_length] == this[_queue][$length]) this[_grow]();
        this[_bubbleUp](element, (t0 = this[_length], this[_length] = dart.notNull(t0) + 1, t0));
      }
      [_locate](object) {
        let t1, t0;
        if (this[_length] === 0) return -1;
        let position = 1;
        do {
          let index = position - 1;
          let element = this[_queue][$_get](index);
          let comp = (t0 = element, t1 = object, this.comparison(t0, t1));
          if (comp === 0) return index;
          if (dart.notNull(comp) < 0) {
            let leftChildPosition = position * 2;
            if (leftChildPosition <= dart.notNull(this[_length])) {
              position = leftChildPosition;
              continue;
            }
          }
          do {
            while (position[$isOdd]) {
              position = position[$rightShift](1);
            }
            position = position + 1;
          } while (position > dart.notNull(this[_length]));
        } while (position !== 1);
        return -1;
      }
      [_removeLast]() {
        let newLength = dart.notNull(this[_length]) - 1;
        let last = this[_queue][$_get](newLength);
        this[_queue][$_set](newLength, null);
        this[_length] = newLength;
        return last;
      }
      [_bubbleUp](element, index) {
        let t1, t0;
        while (dart.notNull(index) > 0) {
          let parentIndex = ((dart.notNull(index) - 1) / 2)[$truncate]();
          let parent = this[_queue][$_get](parentIndex);
          if (dart.notNull((t0 = element, t1 = parent, this.comparison(t0, t1))) > 0) break;
          this[_queue][$_set](index, parent);
          index = parentIndex;
        }
        this[_queue][$_set](index, element);
      }
      [_bubbleDown](element, index) {
        let t1, t0, t1$, t0$, t1$0, t0$0;
        let rightChildIndex = dart.notNull(index) * 2 + 2;
        while (rightChildIndex < dart.notNull(this[_length])) {
          let leftChildIndex = rightChildIndex - 1;
          let leftChild = this[_queue][$_get](leftChildIndex);
          let rightChild = this[_queue][$_get](rightChildIndex);
          let comp = (t0 = leftChild, t1 = rightChild, this.comparison(t0, t1));
          let minChildIndex = null;
          let minChild = null;
          if (dart.notNull(comp) < 0) {
            minChild = leftChild;
            minChildIndex = leftChildIndex;
          } else {
            minChild = rightChild;
            minChildIndex = rightChildIndex;
          }
          comp = (t0$ = element, t1$ = minChild, this.comparison(t0$, t1$));
          if (dart.notNull(comp) <= 0) {
            this[_queue][$_set](index, element);
            return;
          }
          this[_queue][$_set](index, minChild);
          index = intL().as(minChildIndex);
          rightChildIndex = dart.notNull(index) * 2 + 2;
        }
        let leftChildIndex = rightChildIndex - 1;
        if (leftChildIndex < dart.notNull(this[_length])) {
          let child = this[_queue][$_get](leftChildIndex);
          let comp = (t0$0 = element, t1$0 = child, this.comparison(t0$0, t1$0));
          if (dart.notNull(comp) > 0) {
            this[_queue][$_set](index, child);
            index = leftChildIndex;
          }
        }
        this[_queue][$_set](index, element);
      }
      [_grow]() {
        let newCapacity = dart.notNull(this[_queue][$length]) * 2 + 1;
        if (newCapacity < 7) newCapacity = 7;
        let newQueue = ListOfEL().new(newCapacity);
        newQueue[$setRange](0, this[_length], this[_queue]);
        this[_queue] = newQueue;
      }
    }
    (HeapPriorityQueue.new = function(comparison = null) {
      let t0;
      this[_queue] = ListOfEL().new(7);
      this[_length] = 0;
      this[comparison$] = (t0 = comparison, t0 == null ? utils.defaultCompare(EL()) : t0);
      ;
    }).prototype = HeapPriorityQueue.prototype;
    dart.addTypeTests(HeapPriorityQueue);
    HeapPriorityQueue.prototype[_is_HeapPriorityQueue_default] = true;
    dart.addTypeCaches(HeapPriorityQueue);
    HeapPriorityQueue[dart.implements] = () => [priority_queue.PriorityQueue$(dart.legacy(E))];
    dart.setMethodSignature(HeapPriorityQueue, () => ({
      __proto__: dart.getMethods(HeapPriorityQueue.__proto__),
      add: dart.fnType(dart.void, [dart.legacy(core.Object)]),
      addAll: dart.fnType(dart.void, [dart.legacy(core.Object)]),
      clear: dart.fnType(dart.void, []),
      contains: dart.fnType(dart.legacy(core.bool), [dart.legacy(core.Object)]),
      remove: dart.fnType(dart.legacy(core.bool), [dart.legacy(core.Object)]),
      removeAll: dart.fnType(dart.legacy(core.Iterable$(dart.legacy(E))), []),
      removeFirst: dart.fnType(dart.legacy(E), []),
      toList: dart.fnType(dart.legacy(core.List$(dart.legacy(E))), []),
      toSet: dart.fnType(dart.legacy(core.Set$(dart.legacy(E))), []),
      toString: dart.fnType(dart.legacy(core.String), []),
      [$toString]: dart.fnType(dart.legacy(core.String), []),
      [_add]: dart.fnType(dart.void, [dart.legacy(E)]),
      [_locate]: dart.fnType(dart.legacy(core.int), [dart.legacy(E)]),
      [_removeLast]: dart.fnType(dart.legacy(E), []),
      [_bubbleUp]: dart.fnType(dart.void, [dart.legacy(E), dart.legacy(core.int)]),
      [_bubbleDown]: dart.fnType(dart.void, [dart.legacy(E), dart.legacy(core.int)]),
      [_grow]: dart.fnType(dart.void, [])
    }));
    dart.setGetterSignature(HeapPriorityQueue, () => ({
      __proto__: dart.getGetters(HeapPriorityQueue.__proto__),
      first: dart.legacy(E),
      isEmpty: dart.legacy(core.bool),
      isNotEmpty: dart.legacy(core.bool),
      length: dart.legacy(core.int)
    }));
    dart.setLibraryUri(HeapPriorityQueue, L0);
    dart.setFieldSignature(HeapPriorityQueue, () => ({
      __proto__: dart.getFields(HeapPriorityQueue.__proto__),
      comparison: dart.finalFieldType(dart.legacy(dart.fnType(core.int, [dart.legacy(E), dart.legacy(E)]))),
      [_queue]: dart.fieldType(dart.legacy(core.List$(dart.legacy(E)))),
      [_length]: dart.fieldType(dart.legacy(core.int))
    }));
    dart.defineExtensionMethods(HeapPriorityQueue, ['toString']);
    return HeapPriorityQueue;
  });
  priority_queue.HeapPriorityQueue = priority_queue.HeapPriorityQueue$();
  dart.defineLazy(priority_queue.HeapPriorityQueue, {
    /*priority_queue.HeapPriorityQueue._INITIAL_CAPACITY*/get _INITIAL_CAPACITY() {
      return 7;
    }
  }, true);
  dart.addTypeTests(priority_queue.HeapPriorityQueue, _is_HeapPriorityQueue_default);
  dart.trackLibraries("packages/collection/src/priority_queue", {
    "package:collection/src/priority_queue.dart": priority_queue
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["priority_queue.dart"],"names":[],"mappings":"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","file":"priority_queue.unsound.ddc.js"}');
  // Exports:
  return {
    src__priority_queue: priority_queue
  };
}));

//# sourceMappingURL=priority_queue.unsound.ddc.js.map

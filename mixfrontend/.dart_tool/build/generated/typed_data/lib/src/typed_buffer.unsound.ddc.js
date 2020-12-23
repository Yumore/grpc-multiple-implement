define(['dart_sdk'], (function load__packages__typed_data__src__typed_buffer(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const typed_data = dart_sdk.typed_data;
  const collection = dart_sdk.collection;
  const _native_typed_data = dart_sdk._native_typed_data;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  var typed_buffer = Object.create(dart.library);
  var $length = dartx.length;
  var $_get = dartx._get;
  var $_set = dartx._set;
  var $isEmpty = dartx.isEmpty;
  var $setRange = dartx.setRange;
  var $elementSizeInBytes = dartx.elementSizeInBytes;
  var $offsetInBytes = dartx.offsetInBytes;
  var $buffer = dartx.buffer;
  var $add = dartx.add;
  var $addAll = dartx.addAll;
  var $insertAll = dartx.insertAll;
  var $insert = dartx.insert;
  var TypedDataL = () => (TypedDataL = dart.constFn(dart.legacy(typed_data.TypedData)))();
  var ListL = () => (ListL = dart.constFn(dart.legacy(core.List)))();
  const CT = Object.create(null);
  var L0 = "org-dartlang-app:///packages/typed_data/src/typed_buffer.dart";
  var L1 = "package:typed_data/src/typed_buffer.dart";
  var _buffer = dart.privateName(typed_buffer, "_buffer");
  var _length = dart.privateName(typed_buffer, "_length");
  var _typedBuffer = dart.privateName(typed_buffer, "_typedBuffer");
  var _defaultValue = dart.privateName(typed_buffer, "_defaultValue");
  var _createBuffer = dart.privateName(typed_buffer, "_createBuffer");
  var _createBiggerBuffer = dart.privateName(typed_buffer, "_createBiggerBuffer");
  var _grow = dart.privateName(typed_buffer, "_grow");
  var _add = dart.privateName(typed_buffer, "_add");
  var _addAll = dart.privateName(typed_buffer, "_addAll");
  var _insertKnownLength = dart.privateName(typed_buffer, "_insertKnownLength");
  var _ensureCapacity = dart.privateName(typed_buffer, "_ensureCapacity");
  var _setRange = dart.privateName(typed_buffer, "_setRange");
  const _is_TypedDataBuffer_default = Symbol('_is_TypedDataBuffer_default');
  typed_buffer.TypedDataBuffer$ = dart.generic(E => {
    var EL = () => (EL = dart.constFn(dart.legacy(E)))();
    var IterableOfEL = () => (IterableOfEL = dart.constFn(core.Iterable$(EL())))();
    var IterableLOfEL = () => (IterableLOfEL = dart.constFn(dart.legacy(IterableOfEL())))();
    var TypedDataBufferOfEL = () => (TypedDataBufferOfEL = dart.constFn(typed_buffer.TypedDataBuffer$(EL())))();
    var TypedDataBufferLOfEL = () => (TypedDataBufferLOfEL = dart.constFn(dart.legacy(TypedDataBufferOfEL())))();
    class TypedDataBuffer extends collection.ListBase$(dart.legacy(E)) {
      get [_typedBuffer]() {
        return TypedDataL().as(this[_buffer]);
      }
      get length() {
        return this[_length];
      }
      _get(index) {
        if (dart.notNull(index) >= dart.notNull(this.length)) dart.throw(new core.IndexError.new(index, this));
        return this[_buffer][$_get](index);
      }
      _set(index, value$) {
        let value = value$;
        EL().as(value);
        if (dart.notNull(index) >= dart.notNull(this.length)) dart.throw(new core.IndexError.new(index, this));
        this[_buffer][$_set](index, value);
        return value$;
      }
      set length(newLength) {
        if (dart.notNull(newLength) < dart.notNull(this[_length])) {
          let defaultValue = this[_defaultValue];
          for (let i = newLength; dart.notNull(i) < dart.notNull(this[_length]); i = dart.notNull(i) + 1) {
            this[_buffer][$_set](i, defaultValue);
          }
        } else if (dart.notNull(newLength) > dart.notNull(this[_buffer][$length])) {
          let newBuffer = null;
          if (dart.test(this[_buffer][$isEmpty])) {
            newBuffer = this[_createBuffer](newLength);
          } else {
            newBuffer = this[_createBiggerBuffer](newLength);
          }
          newBuffer[$setRange](0, this[_length], this[_buffer]);
          this[_buffer] = newBuffer;
        }
        this[_length] = newLength;
      }
      [_add](value) {
        let t0;
        if (this[_length] == this[_buffer][$length]) this[_grow](this[_length]);
        this[_buffer][$_set]((t0 = this[_length], this[_length] = dart.notNull(t0) + 1, t0), value);
      }
      add(value) {
        EL().as(value);
        this[_add](value);
      }
      addAll(values, start = 0, end = null) {
        IterableLOfEL().as(values);
        core.RangeError.checkNotNegative(start, "start");
        if (end != null && dart.notNull(start) > dart.notNull(end)) {
          dart.throw(new core.RangeError.range(end, start, null, "end"));
        }
        this[_addAll](values, start, end);
      }
      insertAll(index, values, start = 0, end = null) {
        let t0;
        IterableLOfEL().as(values);
        core.RangeError.checkValidIndex(index, this, "index", dart.notNull(this[_length]) + 1);
        core.RangeError.checkNotNegative(start, "start");
        if (end != null) {
          if (dart.notNull(start) > dart.notNull(end)) {
            dart.throw(new core.RangeError.range(end, start, null, "end"));
          }
          if (start == end) return;
        }
        if (index == this[_length]) {
          this[_addAll](values, start, end);
          return;
        }
        if (end == null && ListL().is(values)) {
          end = values[$length];
        }
        if (end != null) {
          this[_insertKnownLength](index, values, start, end);
          return;
        }
        let writeIndex = this[_length];
        let skipCount = start;
        for (let value of values) {
          if (dart.notNull(skipCount) > 0) {
            skipCount = dart.notNull(skipCount) - 1;
            continue;
          }
          if (writeIndex == this[_buffer][$length]) {
            this[_grow](writeIndex);
          }
          this[_buffer][$_set]((t0 = writeIndex, writeIndex = dart.notNull(t0) + 1, t0), value);
        }
        if (dart.notNull(skipCount) > 0) {
          dart.throw(new core.StateError.new("Too few elements"));
        }
        if (end != null && dart.notNull(writeIndex) < dart.notNull(end)) {
          dart.throw(new core.RangeError.range(end, start, writeIndex, "end"));
        }
        typed_buffer.TypedDataBuffer._reverse(this[_buffer], index, this[_length]);
        typed_buffer.TypedDataBuffer._reverse(this[_buffer], this[_length], writeIndex);
        typed_buffer.TypedDataBuffer._reverse(this[_buffer], index, writeIndex);
        this[_length] = writeIndex;
        return;
      }
      static _reverse(buffer, start, end) {
        end = dart.notNull(end) - 1;
        while (dart.notNull(start) < dart.notNull(end)) {
          let first = buffer[$_get](start);
          let last = buffer[$_get](end);
          buffer[$_set](end, first);
          buffer[$_set](start, last);
          start = dart.notNull(start) + 1;
          end = dart.notNull(end) - 1;
        }
      }
      [_addAll](values, start = 0, end = null) {
        if (ListL().is(values)) end == null ? end = values[$length] : null;
        if (end != null) {
          this[_insertKnownLength](this[_length], values, start, end);
          return;
        }
        let i = 0;
        for (let value of values) {
          if (i >= dart.notNull(start)) this.add(value);
          i = i + 1;
        }
        if (i < dart.notNull(start)) dart.throw(new core.StateError.new("Too few elements"));
      }
      [_insertKnownLength](index, values, start, end) {
        if (ListL().is(values)) {
          end == null ? end = values[$length] : null;
          if (dart.notNull(start) > dart.notNull(values[$length]) || dart.notNull(end) > dart.notNull(values[$length])) {
            dart.throw(new core.StateError.new("Too few elements"));
          }
        } else {
          if (!(end != null)) dart.assertFailed(null, L0, 207, 14, "end != null");
        }
        let valuesLength = dart.notNull(end) - dart.notNull(start);
        let newLength = dart.notNull(this[_length]) + valuesLength;
        this[_ensureCapacity](newLength);
        this[_buffer][$setRange](dart.notNull(index) + valuesLength, dart.notNull(this[_length]) + valuesLength, this[_buffer], index);
        this[_buffer][$setRange](index, dart.notNull(index) + valuesLength, values, start);
        this[_length] = newLength;
      }
      insert(index, element) {
        EL().as(element);
        if (dart.notNull(index) < 0 || dart.notNull(index) > dart.notNull(this[_length])) {
          dart.throw(new core.RangeError.range(index, 0, this[_length]));
        }
        if (dart.notNull(this[_length]) < dart.notNull(this[_buffer][$length])) {
          this[_buffer][$setRange](dart.notNull(index) + 1, dart.notNull(this[_length]) + 1, this[_buffer], index);
          this[_buffer][$_set](index, element);
          this[_length] = dart.notNull(this[_length]) + 1;
          return;
        }
        let newBuffer = this[_createBiggerBuffer](null);
        newBuffer[$setRange](0, index, this[_buffer]);
        newBuffer[$setRange](dart.notNull(index) + 1, dart.notNull(this[_length]) + 1, this[_buffer], index);
        newBuffer[$_set](index, element);
        this[_length] = dart.notNull(this[_length]) + 1;
        this[_buffer] = newBuffer;
      }
      [_ensureCapacity](requiredCapacity) {
        if (dart.notNull(requiredCapacity) <= dart.notNull(this[_buffer][$length])) return;
        let newBuffer = this[_createBiggerBuffer](requiredCapacity);
        newBuffer[$setRange](0, this[_length], this[_buffer]);
        this[_buffer] = newBuffer;
      }
      [_createBiggerBuffer](requiredCapacity) {
        let newLength = dart.notNull(this[_buffer][$length]) * 2;
        if (requiredCapacity != null && dart.notNull(newLength) < dart.notNull(requiredCapacity)) {
          newLength = requiredCapacity;
        } else if (dart.notNull(newLength) < 8) {
          newLength = 8;
        }
        return this[_createBuffer](newLength);
      }
      [_grow](length) {
        let t0;
        this[_buffer] = (t0 = this[_createBiggerBuffer](null), (() => {
          t0[$setRange](0, length, this[_buffer]);
          return t0;
        })());
      }
      setRange(start, end, source, skipCount = 0) {
        IterableLOfEL().as(source);
        if (dart.notNull(end) > dart.notNull(this[_length])) dart.throw(new core.RangeError.range(end, 0, this[_length]));
        this[_setRange](start, end, source, skipCount);
      }
      [_setRange](start, end, source, skipCount) {
        if (TypedDataBufferLOfEL().is(source)) {
          this[_buffer][$setRange](start, end, source[_buffer], skipCount);
        } else {
          this[_buffer][$setRange](start, end, source, skipCount);
        }
      }
      get elementSizeInBytes() {
        return this[_typedBuffer][$elementSizeInBytes];
      }
      get lengthInBytes() {
        return dart.notNull(this[_length]) * dart.notNull(this[_typedBuffer][$elementSizeInBytes]);
      }
      get offsetInBytes() {
        return this[_typedBuffer][$offsetInBytes];
      }
      get buffer() {
        return this[_typedBuffer][$buffer];
      }
    }
    (TypedDataBuffer.new = function(buffer) {
      this[_buffer] = buffer;
      this[_length] = buffer[$length];
      ;
    }).prototype = TypedDataBuffer.prototype;
    dart.addTypeTests(TypedDataBuffer);
    TypedDataBuffer.prototype[_is_TypedDataBuffer_default] = true;
    dart.addTypeCaches(TypedDataBuffer);
    dart.setMethodSignature(TypedDataBuffer, () => ({
      __proto__: dart.getMethods(TypedDataBuffer.__proto__),
      _get: dart.fnType(dart.legacy(E), [dart.legacy(core.int)]),
      [$_get]: dart.fnType(dart.legacy(E), [dart.legacy(core.int)]),
      _set: dart.fnType(dart.void, [dart.legacy(core.int), dart.legacy(core.Object)]),
      [$_set]: dart.fnType(dart.void, [dart.legacy(core.int), dart.legacy(core.Object)]),
      [_add]: dart.fnType(dart.void, [dart.legacy(E)]),
      add: dart.fnType(dart.void, [dart.legacy(core.Object)]),
      [$add]: dart.fnType(dart.void, [dart.legacy(core.Object)]),
      addAll: dart.fnType(dart.void, [dart.legacy(core.Object)], [dart.legacy(core.int), dart.legacy(core.int)]),
      [$addAll]: dart.fnType(dart.void, [dart.legacy(core.Object)], [dart.legacy(core.int), dart.legacy(core.int)]),
      insertAll: dart.fnType(dart.void, [dart.legacy(core.int), dart.legacy(core.Object)], [dart.legacy(core.int), dart.legacy(core.int)]),
      [$insertAll]: dart.fnType(dart.void, [dart.legacy(core.int), dart.legacy(core.Object)], [dart.legacy(core.int), dart.legacy(core.int)]),
      [_addAll]: dart.fnType(dart.void, [dart.legacy(core.Iterable$(dart.legacy(E)))], [dart.legacy(core.int), dart.legacy(core.int)]),
      [_insertKnownLength]: dart.fnType(dart.void, [dart.legacy(core.int), dart.legacy(core.Iterable$(dart.legacy(E))), dart.legacy(core.int), dart.legacy(core.int)]),
      insert: dart.fnType(dart.void, [dart.legacy(core.int), dart.legacy(core.Object)]),
      [$insert]: dart.fnType(dart.void, [dart.legacy(core.int), dart.legacy(core.Object)]),
      [_ensureCapacity]: dart.fnType(dart.void, [dart.legacy(core.int)]),
      [_createBiggerBuffer]: dart.fnType(dart.legacy(core.List$(dart.legacy(E))), [dart.legacy(core.int)]),
      [_grow]: dart.fnType(dart.void, [dart.legacy(core.int)]),
      setRange: dart.fnType(dart.void, [dart.legacy(core.int), dart.legacy(core.int), dart.legacy(core.Object)], [dart.legacy(core.int)]),
      [$setRange]: dart.fnType(dart.void, [dart.legacy(core.int), dart.legacy(core.int), dart.legacy(core.Object)], [dart.legacy(core.int)]),
      [_setRange]: dart.fnType(dart.void, [dart.legacy(core.int), dart.legacy(core.int), dart.legacy(core.Iterable$(dart.legacy(E))), dart.legacy(core.int)])
    }));
    dart.setGetterSignature(TypedDataBuffer, () => ({
      __proto__: dart.getGetters(TypedDataBuffer.__proto__),
      [_typedBuffer]: dart.legacy(typed_data.TypedData),
      length: dart.legacy(core.int),
      [$length]: dart.legacy(core.int),
      elementSizeInBytes: dart.legacy(core.int),
      lengthInBytes: dart.legacy(core.int),
      offsetInBytes: dart.legacy(core.int),
      buffer: dart.legacy(typed_data.ByteBuffer)
    }));
    dart.setSetterSignature(TypedDataBuffer, () => ({
      __proto__: dart.getSetters(TypedDataBuffer.__proto__),
      length: dart.legacy(core.int),
      [$length]: dart.legacy(core.int)
    }));
    dart.setLibraryUri(TypedDataBuffer, L1);
    dart.setFieldSignature(TypedDataBuffer, () => ({
      __proto__: dart.getFields(TypedDataBuffer.__proto__),
      [_buffer]: dart.fieldType(dart.legacy(core.List$(dart.legacy(E)))),
      [_length]: dart.fieldType(dart.legacy(core.int))
    }));
    dart.defineExtensionMethods(TypedDataBuffer, [
      '_get',
      '_set',
      'add',
      'addAll',
      'insertAll',
      'insert',
      'setRange'
    ]);
    dart.defineExtensionAccessors(TypedDataBuffer, ['length']);
    return TypedDataBuffer;
  });
  typed_buffer.TypedDataBuffer = typed_buffer.TypedDataBuffer$();
  dart.defineLazy(typed_buffer.TypedDataBuffer, {
    /*typed_buffer.TypedDataBuffer._initialLength*/get _initialLength() {
      return 8;
    }
  }, true);
  dart.addTypeTests(typed_buffer.TypedDataBuffer, _is_TypedDataBuffer_default);
  typed_buffer._IntBuffer = class _IntBuffer extends typed_buffer.TypedDataBuffer$(dart.legacy(core.int)) {
    get [_defaultValue]() {
      return 0;
    }
  };
  (typed_buffer._IntBuffer.new = function(buffer) {
    typed_buffer._IntBuffer.__proto__.new.call(this, buffer);
    ;
  }).prototype = typed_buffer._IntBuffer.prototype;
  dart.addTypeTests(typed_buffer._IntBuffer);
  dart.addTypeCaches(typed_buffer._IntBuffer);
  dart.setGetterSignature(typed_buffer._IntBuffer, () => ({
    __proto__: dart.getGetters(typed_buffer._IntBuffer.__proto__),
    [_defaultValue]: dart.legacy(core.int)
  }));
  dart.setLibraryUri(typed_buffer._IntBuffer, L1);
  typed_buffer._FloatBuffer = class _FloatBuffer extends typed_buffer.TypedDataBuffer$(dart.legacy(core.double)) {
    get [_defaultValue]() {
      return 0.0;
    }
  };
  (typed_buffer._FloatBuffer.new = function(buffer) {
    typed_buffer._FloatBuffer.__proto__.new.call(this, buffer);
    ;
  }).prototype = typed_buffer._FloatBuffer.prototype;
  dart.addTypeTests(typed_buffer._FloatBuffer);
  dart.addTypeCaches(typed_buffer._FloatBuffer);
  dart.setGetterSignature(typed_buffer._FloatBuffer, () => ({
    __proto__: dart.getGetters(typed_buffer._FloatBuffer.__proto__),
    [_defaultValue]: dart.legacy(core.double)
  }));
  dart.setLibraryUri(typed_buffer._FloatBuffer, L1);
  typed_buffer.Uint8Buffer = class Uint8Buffer extends typed_buffer._IntBuffer {
    [_createBuffer](size) {
      return _native_typed_data.NativeUint8List.new(size);
    }
  };
  (typed_buffer.Uint8Buffer.new = function(initialLength = 0) {
    typed_buffer.Uint8Buffer.__proto__.new.call(this, _native_typed_data.NativeUint8List.new(initialLength));
    ;
  }).prototype = typed_buffer.Uint8Buffer.prototype;
  dart.addTypeTests(typed_buffer.Uint8Buffer);
  dart.addTypeCaches(typed_buffer.Uint8Buffer);
  dart.setMethodSignature(typed_buffer.Uint8Buffer, () => ({
    __proto__: dart.getMethods(typed_buffer.Uint8Buffer.__proto__),
    [_createBuffer]: dart.fnType(dart.legacy(typed_data.Uint8List), [dart.legacy(core.int)])
  }));
  dart.setLibraryUri(typed_buffer.Uint8Buffer, L1);
  typed_buffer.Int8Buffer = class Int8Buffer extends typed_buffer._IntBuffer {
    [_createBuffer](size) {
      return _native_typed_data.NativeInt8List.new(size);
    }
  };
  (typed_buffer.Int8Buffer.new = function(initialLength = 0) {
    typed_buffer.Int8Buffer.__proto__.new.call(this, _native_typed_data.NativeInt8List.new(initialLength));
    ;
  }).prototype = typed_buffer.Int8Buffer.prototype;
  dart.addTypeTests(typed_buffer.Int8Buffer);
  dart.addTypeCaches(typed_buffer.Int8Buffer);
  dart.setMethodSignature(typed_buffer.Int8Buffer, () => ({
    __proto__: dart.getMethods(typed_buffer.Int8Buffer.__proto__),
    [_createBuffer]: dart.fnType(dart.legacy(typed_data.Int8List), [dart.legacy(core.int)])
  }));
  dart.setLibraryUri(typed_buffer.Int8Buffer, L1);
  typed_buffer.Uint8ClampedBuffer = class Uint8ClampedBuffer extends typed_buffer._IntBuffer {
    [_createBuffer](size) {
      return _native_typed_data.NativeUint8ClampedList.new(size);
    }
  };
  (typed_buffer.Uint8ClampedBuffer.new = function(initialLength = 0) {
    typed_buffer.Uint8ClampedBuffer.__proto__.new.call(this, _native_typed_data.NativeUint8ClampedList.new(initialLength));
    ;
  }).prototype = typed_buffer.Uint8ClampedBuffer.prototype;
  dart.addTypeTests(typed_buffer.Uint8ClampedBuffer);
  dart.addTypeCaches(typed_buffer.Uint8ClampedBuffer);
  dart.setMethodSignature(typed_buffer.Uint8ClampedBuffer, () => ({
    __proto__: dart.getMethods(typed_buffer.Uint8ClampedBuffer.__proto__),
    [_createBuffer]: dart.fnType(dart.legacy(typed_data.Uint8ClampedList), [dart.legacy(core.int)])
  }));
  dart.setLibraryUri(typed_buffer.Uint8ClampedBuffer, L1);
  typed_buffer.Uint16Buffer = class Uint16Buffer extends typed_buffer._IntBuffer {
    [_createBuffer](size) {
      return _native_typed_data.NativeUint16List.new(size);
    }
  };
  (typed_buffer.Uint16Buffer.new = function(initialLength = 0) {
    typed_buffer.Uint16Buffer.__proto__.new.call(this, _native_typed_data.NativeUint16List.new(initialLength));
    ;
  }).prototype = typed_buffer.Uint16Buffer.prototype;
  dart.addTypeTests(typed_buffer.Uint16Buffer);
  dart.addTypeCaches(typed_buffer.Uint16Buffer);
  dart.setMethodSignature(typed_buffer.Uint16Buffer, () => ({
    __proto__: dart.getMethods(typed_buffer.Uint16Buffer.__proto__),
    [_createBuffer]: dart.fnType(dart.legacy(typed_data.Uint16List), [dart.legacy(core.int)])
  }));
  dart.setLibraryUri(typed_buffer.Uint16Buffer, L1);
  typed_buffer.Int16Buffer = class Int16Buffer extends typed_buffer._IntBuffer {
    [_createBuffer](size) {
      return _native_typed_data.NativeInt16List.new(size);
    }
  };
  (typed_buffer.Int16Buffer.new = function(initialLength = 0) {
    typed_buffer.Int16Buffer.__proto__.new.call(this, _native_typed_data.NativeInt16List.new(initialLength));
    ;
  }).prototype = typed_buffer.Int16Buffer.prototype;
  dart.addTypeTests(typed_buffer.Int16Buffer);
  dart.addTypeCaches(typed_buffer.Int16Buffer);
  dart.setMethodSignature(typed_buffer.Int16Buffer, () => ({
    __proto__: dart.getMethods(typed_buffer.Int16Buffer.__proto__),
    [_createBuffer]: dart.fnType(dart.legacy(typed_data.Int16List), [dart.legacy(core.int)])
  }));
  dart.setLibraryUri(typed_buffer.Int16Buffer, L1);
  typed_buffer.Uint32Buffer = class Uint32Buffer extends typed_buffer._IntBuffer {
    [_createBuffer](size) {
      return _native_typed_data.NativeUint32List.new(size);
    }
  };
  (typed_buffer.Uint32Buffer.new = function(initialLength = 0) {
    typed_buffer.Uint32Buffer.__proto__.new.call(this, _native_typed_data.NativeUint32List.new(initialLength));
    ;
  }).prototype = typed_buffer.Uint32Buffer.prototype;
  dart.addTypeTests(typed_buffer.Uint32Buffer);
  dart.addTypeCaches(typed_buffer.Uint32Buffer);
  dart.setMethodSignature(typed_buffer.Uint32Buffer, () => ({
    __proto__: dart.getMethods(typed_buffer.Uint32Buffer.__proto__),
    [_createBuffer]: dart.fnType(dart.legacy(typed_data.Uint32List), [dart.legacy(core.int)])
  }));
  dart.setLibraryUri(typed_buffer.Uint32Buffer, L1);
  typed_buffer.Int32Buffer = class Int32Buffer extends typed_buffer._IntBuffer {
    [_createBuffer](size) {
      return _native_typed_data.NativeInt32List.new(size);
    }
  };
  (typed_buffer.Int32Buffer.new = function(initialLength = 0) {
    typed_buffer.Int32Buffer.__proto__.new.call(this, _native_typed_data.NativeInt32List.new(initialLength));
    ;
  }).prototype = typed_buffer.Int32Buffer.prototype;
  dart.addTypeTests(typed_buffer.Int32Buffer);
  dart.addTypeCaches(typed_buffer.Int32Buffer);
  dart.setMethodSignature(typed_buffer.Int32Buffer, () => ({
    __proto__: dart.getMethods(typed_buffer.Int32Buffer.__proto__),
    [_createBuffer]: dart.fnType(dart.legacy(typed_data.Int32List), [dart.legacy(core.int)])
  }));
  dart.setLibraryUri(typed_buffer.Int32Buffer, L1);
  typed_buffer.Uint64Buffer = class Uint64Buffer extends typed_buffer._IntBuffer {
    [_createBuffer](size) {
      return typed_data.Uint64List.new(size);
    }
  };
  (typed_buffer.Uint64Buffer.new = function(initialLength = 0) {
    typed_buffer.Uint64Buffer.__proto__.new.call(this, typed_data.Uint64List.new(initialLength));
    ;
  }).prototype = typed_buffer.Uint64Buffer.prototype;
  dart.addTypeTests(typed_buffer.Uint64Buffer);
  dart.addTypeCaches(typed_buffer.Uint64Buffer);
  dart.setMethodSignature(typed_buffer.Uint64Buffer, () => ({
    __proto__: dart.getMethods(typed_buffer.Uint64Buffer.__proto__),
    [_createBuffer]: dart.fnType(dart.legacy(typed_data.Uint64List), [dart.legacy(core.int)])
  }));
  dart.setLibraryUri(typed_buffer.Uint64Buffer, L1);
  typed_buffer.Int64Buffer = class Int64Buffer extends typed_buffer._IntBuffer {
    [_createBuffer](size) {
      return typed_data.Int64List.new(size);
    }
  };
  (typed_buffer.Int64Buffer.new = function(initialLength = 0) {
    typed_buffer.Int64Buffer.__proto__.new.call(this, typed_data.Int64List.new(initialLength));
    ;
  }).prototype = typed_buffer.Int64Buffer.prototype;
  dart.addTypeTests(typed_buffer.Int64Buffer);
  dart.addTypeCaches(typed_buffer.Int64Buffer);
  dart.setMethodSignature(typed_buffer.Int64Buffer, () => ({
    __proto__: dart.getMethods(typed_buffer.Int64Buffer.__proto__),
    [_createBuffer]: dart.fnType(dart.legacy(typed_data.Int64List), [dart.legacy(core.int)])
  }));
  dart.setLibraryUri(typed_buffer.Int64Buffer, L1);
  typed_buffer.Float32Buffer = class Float32Buffer extends typed_buffer._FloatBuffer {
    [_createBuffer](size) {
      return _native_typed_data.NativeFloat32List.new(size);
    }
  };
  (typed_buffer.Float32Buffer.new = function(initialLength = 0) {
    typed_buffer.Float32Buffer.__proto__.new.call(this, _native_typed_data.NativeFloat32List.new(initialLength));
    ;
  }).prototype = typed_buffer.Float32Buffer.prototype;
  dart.addTypeTests(typed_buffer.Float32Buffer);
  dart.addTypeCaches(typed_buffer.Float32Buffer);
  dart.setMethodSignature(typed_buffer.Float32Buffer, () => ({
    __proto__: dart.getMethods(typed_buffer.Float32Buffer.__proto__),
    [_createBuffer]: dart.fnType(dart.legacy(typed_data.Float32List), [dart.legacy(core.int)])
  }));
  dart.setLibraryUri(typed_buffer.Float32Buffer, L1);
  typed_buffer.Float64Buffer = class Float64Buffer extends typed_buffer._FloatBuffer {
    [_createBuffer](size) {
      return _native_typed_data.NativeFloat64List.new(size);
    }
  };
  (typed_buffer.Float64Buffer.new = function(initialLength = 0) {
    typed_buffer.Float64Buffer.__proto__.new.call(this, _native_typed_data.NativeFloat64List.new(initialLength));
    ;
  }).prototype = typed_buffer.Float64Buffer.prototype;
  dart.addTypeTests(typed_buffer.Float64Buffer);
  dart.addTypeCaches(typed_buffer.Float64Buffer);
  dart.setMethodSignature(typed_buffer.Float64Buffer, () => ({
    __proto__: dart.getMethods(typed_buffer.Float64Buffer.__proto__),
    [_createBuffer]: dart.fnType(dart.legacy(typed_data.Float64List), [dart.legacy(core.int)])
  }));
  dart.setLibraryUri(typed_buffer.Float64Buffer, L1);
  typed_buffer.Int32x4Buffer = class Int32x4Buffer extends typed_buffer.TypedDataBuffer$(dart.legacy(typed_data.Int32x4)) {
    get [_defaultValue]() {
      return typed_buffer.Int32x4Buffer._zero;
    }
    [_createBuffer](size) {
      return new _native_typed_data.NativeInt32x4List.new(size);
    }
  };
  (typed_buffer.Int32x4Buffer.new = function(initialLength = 0) {
    typed_buffer.Int32x4Buffer.__proto__.new.call(this, new _native_typed_data.NativeInt32x4List.new(initialLength));
    ;
  }).prototype = typed_buffer.Int32x4Buffer.prototype;
  dart.addTypeTests(typed_buffer.Int32x4Buffer);
  dart.addTypeCaches(typed_buffer.Int32x4Buffer);
  dart.setMethodSignature(typed_buffer.Int32x4Buffer, () => ({
    __proto__: dart.getMethods(typed_buffer.Int32x4Buffer.__proto__),
    [_createBuffer]: dart.fnType(dart.legacy(typed_data.Int32x4List), [dart.legacy(core.int)])
  }));
  dart.setGetterSignature(typed_buffer.Int32x4Buffer, () => ({
    __proto__: dart.getGetters(typed_buffer.Int32x4Buffer.__proto__),
    [_defaultValue]: dart.legacy(typed_data.Int32x4)
  }));
  dart.setLibraryUri(typed_buffer.Int32x4Buffer, L1);
  dart.defineLazy(typed_buffer.Int32x4Buffer, {
    /*typed_buffer.Int32x4Buffer._zero*/get _zero() {
      return new _native_typed_data.NativeInt32x4.new(0, 0, 0, 0);
    }
  }, true);
  typed_buffer.Float32x4Buffer = class Float32x4Buffer extends typed_buffer.TypedDataBuffer$(dart.legacy(typed_data.Float32x4)) {
    get [_defaultValue]() {
      return new _native_typed_data.NativeFloat32x4.zero();
    }
    [_createBuffer](size) {
      return new _native_typed_data.NativeFloat32x4List.new(size);
    }
  };
  (typed_buffer.Float32x4Buffer.new = function(initialLength = 0) {
    typed_buffer.Float32x4Buffer.__proto__.new.call(this, new _native_typed_data.NativeFloat32x4List.new(initialLength));
    ;
  }).prototype = typed_buffer.Float32x4Buffer.prototype;
  dart.addTypeTests(typed_buffer.Float32x4Buffer);
  dart.addTypeCaches(typed_buffer.Float32x4Buffer);
  dart.setMethodSignature(typed_buffer.Float32x4Buffer, () => ({
    __proto__: dart.getMethods(typed_buffer.Float32x4Buffer.__proto__),
    [_createBuffer]: dart.fnType(dart.legacy(typed_data.Float32x4List), [dart.legacy(core.int)])
  }));
  dart.setGetterSignature(typed_buffer.Float32x4Buffer, () => ({
    __proto__: dart.getGetters(typed_buffer.Float32x4Buffer.__proto__),
    [_defaultValue]: dart.legacy(typed_data.Float32x4)
  }));
  dart.setLibraryUri(typed_buffer.Float32x4Buffer, L1);
  dart.trackLibraries("packages/typed_data/src/typed_buffer", {
    "package:typed_data/src/typed_buffer.dart": typed_buffer
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["typed_buffer.dart"],"names":[],"mappings":"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","file":"typed_buffer.unsound.ddc.js"}');
  // Exports:
  return {
    src__typed_buffer: typed_buffer
  };
}));

//# sourceMappingURL=typed_buffer.unsound.ddc.js.map

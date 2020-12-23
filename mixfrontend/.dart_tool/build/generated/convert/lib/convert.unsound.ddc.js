define(['dart_sdk', 'packages/typed_data/src/typed_buffer'], (function load__packages__convert__convert(dart_sdk, packages__typed_data__src__typed_buffer) {
  'use strict';
  const core = dart_sdk.core;
  const _native_typed_data = dart_sdk._native_typed_data;
  const convert = dart_sdk.convert;
  const typed_data = dart_sdk.typed_data;
  const _interceptors = dart_sdk._interceptors;
  const collection = dart_sdk.collection;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const typed_buffer = packages__typed_data__src__typed_buffer.src__typed_buffer;
  var decoder = Object.create(dart.library);
  var utils = Object.create(dart.library);
  var byte_accumulator_sink = Object.create(dart.library);
  var encoder = Object.create(dart.library);
  var convert$ = Object.create(dart.library);
  var string_accumulator_sink = Object.create(dart.library);
  var percent = Object.create(dart.library);
  var decoder$ = Object.create(dart.library);
  var encoder$ = Object.create(dart.library);
  var identity_codec = Object.create(dart.library);
  var hex = Object.create(dart.library);
  var accumulator_sink = Object.create(dart.library);
  var $isEven = dartx.isEven;
  var $truncate = dartx.truncate;
  var $codeUnits = dartx.codeUnits;
  var $_set = dartx._set;
  var $length = dartx.length;
  var $_get = dartx._get;
  var $toRadixString = dartx.toRadixString;
  var $padLeft = dartx.padLeft;
  var $clear = dartx.clear;
  var $abs = dartx.abs;
  var $substring = dartx.substring;
  var $asUint8List = dartx.asUint8List;
  var $add = dartx.add;
  var StringL = () => (StringL = dart.constFn(dart.legacy(core.String)))();
  var intL = () => (intL = dart.constFn(dart.legacy(core.int)))();
  var ListOfintL = () => (ListOfintL = dart.constFn(core.List$(intL())))();
  var ListLOfintL = () => (ListLOfintL = dart.constFn(dart.legacy(ListOfintL())))();
  var SinkOfListLOfintL = () => (SinkOfListLOfintL = dart.constFn(core.Sink$(ListLOfintL())))();
  var SinkLOfListLOfintL = () => (SinkLOfListLOfintL = dart.constFn(dart.legacy(SinkOfListLOfintL())))();
  var SinkOfStringL = () => (SinkOfStringL = dart.constFn(core.Sink$(StringL())))();
  var SinkLOfStringL = () => (SinkLOfStringL = dart.constFn(dart.legacy(SinkOfStringL())))();
  const CT = Object.create(null);
  var L6 = "package:convert/src/percent/encoder.dart";
  var L2 = "package:convert/src/hex/encoder.dart";
  var L1 = "package:convert/src/byte_accumulator_sink.dart";
  var L9 = "package:convert/src/accumulator_sink.dart";
  var L7 = "package:convert/src/identity_codec.dart";
  var L3 = "package:convert/src/string_accumulator_sink.dart";
  var L5 = "package:convert/src/percent/decoder.dart";
  var L8 = "package:convert/src/hex.dart";
  var L0 = "package:convert/src/hex/decoder.dart";
  var L4 = "package:convert/src/percent.dart";
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.const({
        __proto__: decoder.HexDecoder.prototype
      });
    },
    get C1() {
      return C1 = dart.const({
        __proto__: encoder.HexEncoder.prototype
      });
    },
    get C2() {
      return C2 = dart.const({
        __proto__: percent.PercentCodec.prototype
      });
    },
    get C3() {
      return C3 = dart.const({
        __proto__: decoder$.PercentDecoder.prototype
      });
    },
    get C4() {
      return C4 = dart.const({
        __proto__: encoder$.PercentEncoder.prototype
      });
    },
    get C5() {
      return C5 = dart.const({
        __proto__: hex.HexCodec.prototype
      });
    }
  }, false);
  decoder.HexDecoder = class HexDecoder extends convert.Converter$(dart.legacy(core.String), dart.legacy(core.List$(dart.legacy(core.int)))) {
    convert(string) {
      StringL().as(string);
      if (!string.length[$isEven]) {
        dart.throw(new core.FormatException.new("Invalid input length, must be even.", string, string.length));
      }
      let bytes = _native_typed_data.NativeUint8List.new((string.length / 2)[$truncate]());
      decoder._decode(string[$codeUnits], 0, string.length, bytes, 0);
      return bytes;
    }
    startChunkedConversion(sink) {
      SinkLOfListLOfintL().as(sink);
      return new decoder._HexDecoderSink.new(sink);
    }
  };
  (decoder.HexDecoder.__ = function() {
    decoder.HexDecoder.__proto__.new.call(this);
    ;
  }).prototype = decoder.HexDecoder.prototype;
  dart.addTypeTests(decoder.HexDecoder);
  dart.addTypeCaches(decoder.HexDecoder);
  dart.setMethodSignature(decoder.HexDecoder, () => ({
    __proto__: dart.getMethods(decoder.HexDecoder.__proto__),
    convert: dart.fnType(dart.legacy(core.List$(dart.legacy(core.int))), [dart.legacy(core.Object)]),
    startChunkedConversion: dart.fnType(dart.legacy(convert.StringConversionSink), [dart.legacy(core.Object)])
  }));
  dart.setLibraryUri(decoder.HexDecoder, L0);
  var _lastDigit = dart.privateName(decoder, "_lastDigit");
  var _sink$ = dart.privateName(decoder, "_sink");
  var _close = dart.privateName(decoder, "_close");
  decoder._HexDecoderSink = class _HexDecoderSink extends convert.StringConversionSinkBase {
    addSlice(string, start, end, isLast) {
      core.RangeError.checkValidRange(start, end, string.length);
      if (start == end) {
        if (dart.test(isLast)) this[_close](string, end);
        return;
      }
      let codeUnits = string[$codeUnits];
      let bytes = null;
      let bytesStart = null;
      if (this[_lastDigit] == null) {
        bytes = _native_typed_data.NativeUint8List.new(((dart.notNull(end) - dart.notNull(start)) / 2)[$truncate]());
        bytesStart = 0;
      } else {
        let hexPairs = ((dart.notNull(end) - dart.notNull(start) - 1) / 2)[$truncate]();
        bytes = _native_typed_data.NativeUint8List.new(1 + hexPairs);
        bytes[$_set](0, dart.notNull(this[_lastDigit]) + dart.notNull(utils.digitForCodeUnit(codeUnits, start)));
        start = dart.notNull(start) + 1;
        bytesStart = 1;
      }
      this[_lastDigit] = decoder._decode(codeUnits, start, end, bytes, bytesStart);
      this[_sink$].add(bytes);
      if (dart.test(isLast)) this[_close](string, end);
    }
    asUtf8Sink(allowMalformed) {
      return new decoder._HexDecoderByteSink.new(this[_sink$]);
    }
    close() {
      return this[_close]();
    }
    [_close](string = null, index = null) {
      if (this[_lastDigit] != null) {
        dart.throw(new core.FormatException.new("Input ended with incomplete encoded byte.", string, index));
      }
      this[_sink$].close();
    }
  };
  (decoder._HexDecoderSink.new = function(_sink) {
    this[_lastDigit] = null;
    this[_sink$] = _sink;
    ;
  }).prototype = decoder._HexDecoderSink.prototype;
  dart.addTypeTests(decoder._HexDecoderSink);
  dart.addTypeCaches(decoder._HexDecoderSink);
  dart.setMethodSignature(decoder._HexDecoderSink, () => ({
    __proto__: dart.getMethods(decoder._HexDecoderSink.__proto__),
    addSlice: dart.fnType(dart.void, [dart.legacy(core.String), dart.legacy(core.int), dart.legacy(core.int), dart.legacy(core.bool)]),
    asUtf8Sink: dart.fnType(dart.legacy(convert.ByteConversionSink), [dart.legacy(core.bool)]),
    close: dart.fnType(dart.void, []),
    [_close]: dart.fnType(dart.void, [], [dart.legacy(core.String), dart.legacy(core.int)])
  }));
  dart.setLibraryUri(decoder._HexDecoderSink, L0);
  dart.setFieldSignature(decoder._HexDecoderSink, () => ({
    __proto__: dart.getFields(decoder._HexDecoderSink.__proto__),
    [_sink$]: dart.finalFieldType(dart.legacy(core.Sink$(dart.legacy(core.List$(dart.legacy(core.int)))))),
    [_lastDigit]: dart.fieldType(dart.legacy(core.int))
  }));
  decoder._HexDecoderByteSink = class _HexDecoderByteSink extends convert.ByteConversionSinkBase {
    add(chunk) {
      ListLOfintL().as(chunk);
      return this.addSlice(chunk, 0, chunk[$length], false);
    }
    addSlice(chunk, start, end, isLast) {
      core.RangeError.checkValidRange(start, end, chunk[$length]);
      if (start == end) {
        if (dart.test(isLast)) this[_close](chunk, end);
        return;
      }
      let bytes = null;
      let bytesStart = null;
      if (this[_lastDigit] == null) {
        bytes = _native_typed_data.NativeUint8List.new(((dart.notNull(end) - dart.notNull(start)) / 2)[$truncate]());
        bytesStart = 0;
      } else {
        let hexPairs = ((dart.notNull(end) - dart.notNull(start) - 1) / 2)[$truncate]();
        bytes = _native_typed_data.NativeUint8List.new(1 + hexPairs);
        bytes[$_set](0, dart.notNull(this[_lastDigit]) + dart.notNull(utils.digitForCodeUnit(chunk, start)));
        start = dart.notNull(start) + 1;
        bytesStart = 1;
      }
      this[_lastDigit] = decoder._decode(chunk, start, end, bytes, bytesStart);
      this[_sink$].add(bytes);
      if (dart.test(isLast)) this[_close](chunk, end);
    }
    close() {
      return this[_close]();
    }
    [_close](chunk = null, index = null) {
      if (this[_lastDigit] != null) {
        dart.throw(new core.FormatException.new("Input ended with incomplete encoded byte.", chunk, index));
      }
      this[_sink$].close();
    }
  };
  (decoder._HexDecoderByteSink.new = function(_sink) {
    this[_lastDigit] = null;
    this[_sink$] = _sink;
    decoder._HexDecoderByteSink.__proto__.new.call(this);
    ;
  }).prototype = decoder._HexDecoderByteSink.prototype;
  dart.addTypeTests(decoder._HexDecoderByteSink);
  dart.addTypeCaches(decoder._HexDecoderByteSink);
  dart.setMethodSignature(decoder._HexDecoderByteSink, () => ({
    __proto__: dart.getMethods(decoder._HexDecoderByteSink.__proto__),
    add: dart.fnType(dart.void, [dart.legacy(core.Object)]),
    addSlice: dart.fnType(dart.void, [dart.legacy(core.List$(dart.legacy(core.int))), dart.legacy(core.int), dart.legacy(core.int), dart.legacy(core.bool)]),
    close: dart.fnType(dart.void, []),
    [_close]: dart.fnType(dart.void, [], [dart.legacy(core.List$(dart.legacy(core.int))), dart.legacy(core.int)])
  }));
  dart.setLibraryUri(decoder._HexDecoderByteSink, L0);
  dart.setFieldSignature(decoder._HexDecoderByteSink, () => ({
    __proto__: dart.getFields(decoder._HexDecoderByteSink.__proto__),
    [_sink$]: dart.finalFieldType(dart.legacy(core.Sink$(dart.legacy(core.List$(dart.legacy(core.int)))))),
    [_lastDigit]: dart.fieldType(dart.legacy(core.int))
  }));
  decoder._decode = function _decode(codeUnits, sourceStart, sourceEnd, destination, destinationStart) {
    let t0;
    let destinationIndex = destinationStart;
    for (let i = sourceStart; dart.notNull(i) < dart.notNull(sourceEnd) - 1; i = dart.notNull(i) + 2) {
      let firstDigit = utils.digitForCodeUnit(codeUnits, i);
      let secondDigit = utils.digitForCodeUnit(codeUnits, dart.notNull(i) + 1);
      destination[$_set]((t0 = destinationIndex, destinationIndex = dart.notNull(t0) + 1, t0), 16 * dart.notNull(firstDigit) + dart.notNull(secondDigit));
    }
    if ((dart.notNull(sourceEnd) - dart.notNull(sourceStart))[$isEven]) return null;
    return 16 * dart.notNull(utils.digitForCodeUnit(codeUnits, dart.notNull(sourceEnd) - 1));
  };
  var C0;
  dart.defineLazy(decoder, {
    /*decoder.hexDecoder*/get hexDecoder() {
      return C0 || CT.C0;
    }
  }, true);
  utils.digitForCodeUnit = function digitForCodeUnit(codeUnits, index) {
    let codeUnit = codeUnits[$_get](index);
    let digit = (48 ^ dart.notNull(codeUnit)) >>> 0;
    if (digit <= 9) {
      if (digit >= 0) return digit;
    } else {
      let letter = (32 | dart.notNull(codeUnit)) >>> 0;
      if (97 <= letter && letter <= 102) return letter - 97 + 10;
    }
    dart.throw(new core.FormatException.new("Invalid hexadecimal code unit " + "U+" + dart.str(codeUnit[$toRadixString](16)[$padLeft](4, "0")) + ".", codeUnits, index));
  };
  var _buffer = dart.privateName(byte_accumulator_sink, "_buffer");
  var _isClosed = dart.privateName(byte_accumulator_sink, "_isClosed");
  byte_accumulator_sink.ByteAccumulatorSink = class ByteAccumulatorSink extends convert.ByteConversionSinkBase {
    get bytes() {
      return typed_data.Uint8List.view(this[_buffer].buffer, 0, this[_buffer].length);
    }
    get isClosed() {
      return this[_isClosed];
    }
    clear() {
      this[_buffer][$clear]();
    }
    add(bytes) {
      ListLOfintL().as(bytes);
      if (dart.test(this[_isClosed])) {
        dart.throw(new core.StateError.new("Can't add to a closed sink."));
      }
      this[_buffer].addAll(bytes);
    }
    addSlice(chunk, start, end, isLast) {
      if (dart.test(this[_isClosed])) {
        dart.throw(new core.StateError.new("Can't add to a closed sink."));
      }
      this[_buffer].addAll(chunk, start, end);
      if (dart.test(isLast)) this[_isClosed] = true;
    }
    close() {
      this[_isClosed] = true;
    }
  };
  (byte_accumulator_sink.ByteAccumulatorSink.new = function() {
    this[_buffer] = new typed_buffer.Uint8Buffer.new();
    this[_isClosed] = false;
    byte_accumulator_sink.ByteAccumulatorSink.__proto__.new.call(this);
    ;
  }).prototype = byte_accumulator_sink.ByteAccumulatorSink.prototype;
  dart.addTypeTests(byte_accumulator_sink.ByteAccumulatorSink);
  dart.addTypeCaches(byte_accumulator_sink.ByteAccumulatorSink);
  dart.setMethodSignature(byte_accumulator_sink.ByteAccumulatorSink, () => ({
    __proto__: dart.getMethods(byte_accumulator_sink.ByteAccumulatorSink.__proto__),
    clear: dart.fnType(dart.void, []),
    add: dart.fnType(dart.void, [dart.legacy(core.Object)]),
    addSlice: dart.fnType(dart.void, [dart.legacy(core.List$(dart.legacy(core.int))), dart.legacy(core.int), dart.legacy(core.int), dart.legacy(core.bool)]),
    close: dart.fnType(dart.void, [])
  }));
  dart.setGetterSignature(byte_accumulator_sink.ByteAccumulatorSink, () => ({
    __proto__: dart.getGetters(byte_accumulator_sink.ByteAccumulatorSink.__proto__),
    bytes: dart.legacy(typed_data.Uint8List),
    isClosed: dart.legacy(core.bool)
  }));
  dart.setLibraryUri(byte_accumulator_sink.ByteAccumulatorSink, L1);
  dart.setFieldSignature(byte_accumulator_sink.ByteAccumulatorSink, () => ({
    __proto__: dart.getFields(byte_accumulator_sink.ByteAccumulatorSink.__proto__),
    [_buffer]: dart.finalFieldType(dart.legacy(typed_buffer.Uint8Buffer)),
    [_isClosed]: dart.fieldType(dart.legacy(core.bool))
  }));
  encoder.HexEncoder = class HexEncoder extends convert.Converter$(dart.legacy(core.List$(dart.legacy(core.int))), dart.legacy(core.String)) {
    convert(bytes) {
      ListLOfintL().as(bytes);
      return encoder._convert(bytes, 0, bytes[$length]);
    }
    startChunkedConversion(sink) {
      SinkLOfStringL().as(sink);
      return new encoder._HexEncoderSink.new(sink);
    }
  };
  (encoder.HexEncoder.__ = function() {
    encoder.HexEncoder.__proto__.new.call(this);
    ;
  }).prototype = encoder.HexEncoder.prototype;
  dart.addTypeTests(encoder.HexEncoder);
  dart.addTypeCaches(encoder.HexEncoder);
  dart.setMethodSignature(encoder.HexEncoder, () => ({
    __proto__: dart.getMethods(encoder.HexEncoder.__proto__),
    convert: dart.fnType(dart.legacy(core.String), [dart.legacy(core.Object)]),
    startChunkedConversion: dart.fnType(dart.legacy(convert.ByteConversionSink), [dart.legacy(core.Object)])
  }));
  dart.setLibraryUri(encoder.HexEncoder, L2);
  var _sink$0 = dart.privateName(encoder, "_sink");
  encoder._HexEncoderSink = class _HexEncoderSink extends convert.ByteConversionSinkBase {
    add(chunk) {
      ListLOfintL().as(chunk);
      this[_sink$0].add(encoder._convert(chunk, 0, chunk[$length]));
    }
    addSlice(chunk, start, end, isLast) {
      core.RangeError.checkValidRange(start, end, chunk[$length]);
      this[_sink$0].add(encoder._convert(chunk, start, end));
      if (dart.test(isLast)) this[_sink$0].close();
    }
    close() {
      this[_sink$0].close();
    }
  };
  (encoder._HexEncoderSink.new = function(_sink) {
    this[_sink$0] = _sink;
    encoder._HexEncoderSink.__proto__.new.call(this);
    ;
  }).prototype = encoder._HexEncoderSink.prototype;
  dart.addTypeTests(encoder._HexEncoderSink);
  dart.addTypeCaches(encoder._HexEncoderSink);
  dart.setMethodSignature(encoder._HexEncoderSink, () => ({
    __proto__: dart.getMethods(encoder._HexEncoderSink.__proto__),
    add: dart.fnType(dart.void, [dart.legacy(core.Object)]),
    addSlice: dart.fnType(dart.void, [dart.legacy(core.List$(dart.legacy(core.int))), dart.legacy(core.int), dart.legacy(core.int), dart.legacy(core.bool)]),
    close: dart.fnType(dart.void, [])
  }));
  dart.setLibraryUri(encoder._HexEncoderSink, L2);
  dart.setFieldSignature(encoder._HexEncoderSink, () => ({
    __proto__: dart.getFields(encoder._HexEncoderSink.__proto__),
    [_sink$0]: dart.finalFieldType(dart.legacy(core.Sink$(dart.legacy(core.String))))
  }));
  encoder._convert = function _convert(bytes, start, end) {
    let t0, t0$;
    let buffer = _native_typed_data.NativeUint8List.new((dart.notNull(end) - dart.notNull(start)) * 2);
    let bufferIndex = 0;
    let byteOr = 0;
    for (let i = start; dart.notNull(i) < dart.notNull(end); i = dart.notNull(i) + 1) {
      let byte = bytes[$_get](i);
      byteOr = (byteOr | dart.notNull(byte)) >>> 0;
      buffer[$_set]((t0 = bufferIndex, bufferIndex = t0 + 1, t0), encoder._codeUnitForDigit((dart.notNull(byte) & 240) >> 4));
      buffer[$_set]((t0$ = bufferIndex, bufferIndex = t0$ + 1, t0$), encoder._codeUnitForDigit(dart.notNull(byte) & 15));
    }
    if (byteOr >= 0 && byteOr <= 255) return core.String.fromCharCodes(buffer);
    for (let i = start; dart.notNull(i) < dart.notNull(end); i = dart.notNull(i) + 1) {
      let byte = bytes[$_get](i);
      if (dart.notNull(byte) >= 0 && dart.notNull(byte) <= 255) continue;
      dart.throw(new core.FormatException.new("Invalid byte " + (dart.notNull(byte) < 0 ? "-" : "") + "0x" + dart.str(byte[$abs]()[$toRadixString](16)) + ".", bytes, i));
    }
    dart.throw("unreachable");
  };
  encoder._codeUnitForDigit = function _codeUnitForDigit(digit) {
    return dart.notNull(digit) < 10 ? dart.notNull(digit) + 48 : dart.notNull(digit) + 97 - 10;
  };
  var C1;
  dart.defineLazy(encoder, {
    /*encoder.hexEncoder*/get hexEncoder() {
      return C1 || CT.C1;
    }
  }, true);
  var _buffer$ = dart.privateName(string_accumulator_sink, "_buffer");
  var _isClosed$ = dart.privateName(string_accumulator_sink, "_isClosed");
  string_accumulator_sink.StringAccumulatorSink = class StringAccumulatorSink extends convert.StringConversionSinkBase {
    get string() {
      return dart.toString(this[_buffer$]);
    }
    get isClosed() {
      return this[_isClosed$];
    }
    clear() {
      this[_buffer$].clear();
    }
    add(chunk) {
      StringL().as(chunk);
      if (dart.test(this[_isClosed$])) {
        dart.throw(new core.StateError.new("Can't add to a closed sink."));
      }
      this[_buffer$].write(chunk);
    }
    addSlice(chunk, start, end, isLast) {
      if (dart.test(this[_isClosed$])) {
        dart.throw(new core.StateError.new("Can't add to a closed sink."));
      }
      this[_buffer$].write(chunk[$substring](start, end));
      if (dart.test(isLast)) this[_isClosed$] = true;
    }
    close() {
      this[_isClosed$] = true;
    }
  };
  (string_accumulator_sink.StringAccumulatorSink.new = function() {
    this[_buffer$] = new core.StringBuffer.new();
    this[_isClosed$] = false;
    ;
  }).prototype = string_accumulator_sink.StringAccumulatorSink.prototype;
  dart.addTypeTests(string_accumulator_sink.StringAccumulatorSink);
  dart.addTypeCaches(string_accumulator_sink.StringAccumulatorSink);
  dart.setMethodSignature(string_accumulator_sink.StringAccumulatorSink, () => ({
    __proto__: dart.getMethods(string_accumulator_sink.StringAccumulatorSink.__proto__),
    clear: dart.fnType(dart.void, []),
    add: dart.fnType(dart.void, [dart.legacy(core.Object)]),
    addSlice: dart.fnType(dart.void, [dart.legacy(core.String), dart.legacy(core.int), dart.legacy(core.int), dart.legacy(core.bool)]),
    close: dart.fnType(dart.void, [])
  }));
  dart.setGetterSignature(string_accumulator_sink.StringAccumulatorSink, () => ({
    __proto__: dart.getGetters(string_accumulator_sink.StringAccumulatorSink.__proto__),
    string: dart.legacy(core.String),
    isClosed: dart.legacy(core.bool)
  }));
  dart.setLibraryUri(string_accumulator_sink.StringAccumulatorSink, L3);
  dart.setFieldSignature(string_accumulator_sink.StringAccumulatorSink, () => ({
    __proto__: dart.getFields(string_accumulator_sink.StringAccumulatorSink.__proto__),
    [_buffer$]: dart.finalFieldType(dart.legacy(core.StringBuffer)),
    [_isClosed$]: dart.fieldType(dart.legacy(core.bool))
  }));
  percent.PercentCodec = class PercentCodec extends convert.Codec$(dart.legacy(core.List$(dart.legacy(core.int))), dart.legacy(core.String)) {
    get encoder() {
      return encoder$.percentEncoder;
    }
    get decoder() {
      return decoder$.percentDecoder;
    }
  };
  (percent.PercentCodec.__ = function() {
    percent.PercentCodec.__proto__.new.call(this);
    ;
  }).prototype = percent.PercentCodec.prototype;
  dart.addTypeTests(percent.PercentCodec);
  dart.addTypeCaches(percent.PercentCodec);
  dart.setGetterSignature(percent.PercentCodec, () => ({
    __proto__: dart.getGetters(percent.PercentCodec.__proto__),
    encoder: dart.legacy(encoder$.PercentEncoder),
    decoder: dart.legacy(decoder$.PercentDecoder)
  }));
  dart.setLibraryUri(percent.PercentCodec, L4);
  var C2;
  dart.defineLazy(percent, {
    /*percent.percent*/get percent() {
      return C2 || CT.C2;
    }
  }, true);
  decoder$.PercentDecoder = class PercentDecoder extends convert.Converter$(dart.legacy(core.String), dart.legacy(core.List$(dart.legacy(core.int)))) {
    convert(string) {
      StringL().as(string);
      let buffer = new typed_buffer.Uint8Buffer.new();
      let lastDigit = decoder$._decode(string[$codeUnits], 0, string.length, buffer);
      if (lastDigit != null) {
        dart.throw(new core.FormatException.new("Input ended with incomplete encoded byte.", string, string.length));
      }
      return buffer.buffer[$asUint8List](0, buffer.length);
    }
    startChunkedConversion(sink) {
      SinkLOfListLOfintL().as(sink);
      return new decoder$._PercentDecoderSink.new(sink);
    }
  };
  (decoder$.PercentDecoder.__ = function() {
    decoder$.PercentDecoder.__proto__.new.call(this);
    ;
  }).prototype = decoder$.PercentDecoder.prototype;
  dart.addTypeTests(decoder$.PercentDecoder);
  dart.addTypeCaches(decoder$.PercentDecoder);
  dart.setMethodSignature(decoder$.PercentDecoder, () => ({
    __proto__: dart.getMethods(decoder$.PercentDecoder.__proto__),
    convert: dart.fnType(dart.legacy(core.List$(dart.legacy(core.int))), [dart.legacy(core.Object)]),
    startChunkedConversion: dart.fnType(dart.legacy(convert.StringConversionSink), [dart.legacy(core.Object)])
  }));
  dart.setLibraryUri(decoder$.PercentDecoder, L5);
  var _lastDigit$ = dart.privateName(decoder$, "_lastDigit");
  var _sink$1 = dart.privateName(decoder$, "_sink");
  var _close$ = dart.privateName(decoder$, "_close");
  decoder$._PercentDecoderSink = class _PercentDecoderSink extends convert.StringConversionSinkBase {
    addSlice(string, start, end, isLast) {
      core.RangeError.checkValidRange(start, end, string.length);
      if (start == end) {
        if (dart.test(isLast)) this[_close$](string, end);
        return;
      }
      let buffer = new typed_buffer.Uint8Buffer.new();
      let codeUnits = string[$codeUnits];
      if (this[_lastDigit$] === -1) {
        this[_lastDigit$] = 16 * dart.notNull(utils.digitForCodeUnit(codeUnits, start));
        start = dart.notNull(start) + 1;
        if (start == end) {
          if (dart.test(isLast)) this[_close$](string, end);
          return;
        }
      }
      if (this[_lastDigit$] != null) {
        buffer.add(dart.notNull(this[_lastDigit$]) + dart.notNull(utils.digitForCodeUnit(codeUnits, start)));
        start = dart.notNull(start) + 1;
      }
      this[_lastDigit$] = decoder$._decode(codeUnits, start, end, buffer);
      this[_sink$1].add(buffer.buffer[$asUint8List](0, buffer.length));
      if (dart.test(isLast)) this[_close$](string, end);
    }
    asUtf8Sink(allowMalformed) {
      return new decoder$._PercentDecoderByteSink.new(this[_sink$1]);
    }
    close() {
      return this[_close$]();
    }
    [_close$](string = null, index = null) {
      if (this[_lastDigit$] != null) {
        dart.throw(new core.FormatException.new("Input ended with incomplete encoded byte.", string, index));
      }
      this[_sink$1].close();
    }
  };
  (decoder$._PercentDecoderSink.new = function(_sink) {
    this[_lastDigit$] = null;
    this[_sink$1] = _sink;
    ;
  }).prototype = decoder$._PercentDecoderSink.prototype;
  dart.addTypeTests(decoder$._PercentDecoderSink);
  dart.addTypeCaches(decoder$._PercentDecoderSink);
  dart.setMethodSignature(decoder$._PercentDecoderSink, () => ({
    __proto__: dart.getMethods(decoder$._PercentDecoderSink.__proto__),
    addSlice: dart.fnType(dart.void, [dart.legacy(core.String), dart.legacy(core.int), dart.legacy(core.int), dart.legacy(core.bool)]),
    asUtf8Sink: dart.fnType(dart.legacy(convert.ByteConversionSink), [dart.legacy(core.bool)]),
    close: dart.fnType(dart.void, []),
    [_close$]: dart.fnType(dart.void, [], [dart.legacy(core.String), dart.legacy(core.int)])
  }));
  dart.setLibraryUri(decoder$._PercentDecoderSink, L5);
  dart.setFieldSignature(decoder$._PercentDecoderSink, () => ({
    __proto__: dart.getFields(decoder$._PercentDecoderSink.__proto__),
    [_sink$1]: dart.finalFieldType(dart.legacy(core.Sink$(dart.legacy(core.List$(dart.legacy(core.int)))))),
    [_lastDigit$]: dart.fieldType(dart.legacy(core.int))
  }));
  decoder$._PercentDecoderByteSink = class _PercentDecoderByteSink extends convert.ByteConversionSinkBase {
    add(chunk) {
      ListLOfintL().as(chunk);
      return this.addSlice(chunk, 0, chunk[$length], false);
    }
    addSlice(chunk, start, end, isLast) {
      core.RangeError.checkValidRange(start, end, chunk[$length]);
      if (start == end) {
        if (dart.test(isLast)) this[_close$](chunk, end);
        return;
      }
      let buffer = new typed_buffer.Uint8Buffer.new();
      if (this[_lastDigit$] === -1) {
        this[_lastDigit$] = 16 * dart.notNull(utils.digitForCodeUnit(chunk, start));
        start = dart.notNull(start) + 1;
        if (start == end) {
          if (dart.test(isLast)) this[_close$](chunk, end);
          return;
        }
      }
      if (this[_lastDigit$] != null) {
        buffer.add(dart.notNull(this[_lastDigit$]) + dart.notNull(utils.digitForCodeUnit(chunk, start)));
        start = dart.notNull(start) + 1;
      }
      this[_lastDigit$] = decoder$._decode(chunk, start, end, buffer);
      this[_sink$1].add(buffer.buffer[$asUint8List](0, buffer.length));
      if (dart.test(isLast)) this[_close$](chunk, end);
    }
    close() {
      return this[_close$]();
    }
    [_close$](chunk = null, index = null) {
      if (this[_lastDigit$] != null) {
        dart.throw(new core.FormatException.new("Input ended with incomplete encoded byte.", chunk, index));
      }
      this[_sink$1].close();
    }
  };
  (decoder$._PercentDecoderByteSink.new = function(_sink) {
    this[_lastDigit$] = null;
    this[_sink$1] = _sink;
    decoder$._PercentDecoderByteSink.__proto__.new.call(this);
    ;
  }).prototype = decoder$._PercentDecoderByteSink.prototype;
  dart.addTypeTests(decoder$._PercentDecoderByteSink);
  dart.addTypeCaches(decoder$._PercentDecoderByteSink);
  dart.setMethodSignature(decoder$._PercentDecoderByteSink, () => ({
    __proto__: dart.getMethods(decoder$._PercentDecoderByteSink.__proto__),
    add: dart.fnType(dart.void, [dart.legacy(core.Object)]),
    addSlice: dart.fnType(dart.void, [dart.legacy(core.List$(dart.legacy(core.int))), dart.legacy(core.int), dart.legacy(core.int), dart.legacy(core.bool)]),
    close: dart.fnType(dart.void, []),
    [_close$]: dart.fnType(dart.void, [], [dart.legacy(core.List$(dart.legacy(core.int))), dart.legacy(core.int)])
  }));
  dart.setLibraryUri(decoder$._PercentDecoderByteSink, L5);
  dart.setFieldSignature(decoder$._PercentDecoderByteSink, () => ({
    __proto__: dart.getFields(decoder$._PercentDecoderByteSink.__proto__),
    [_sink$1]: dart.finalFieldType(dart.legacy(core.Sink$(dart.legacy(core.List$(dart.legacy(core.int)))))),
    [_lastDigit$]: dart.fieldType(dart.legacy(core.int))
  }));
  decoder$._decode = function _decode$(codeUnits, start, end, buffer) {
    let codeUnitOr = 0;
    let sliceStart = start;
    for (let i = start; dart.notNull(i) < dart.notNull(end); i = dart.notNull(i) + 1) {
      let codeUnit = codeUnits[$_get](i);
      if (codeUnits[$_get](i) !== 37) {
        codeUnitOr = (codeUnitOr | dart.notNull(codeUnit)) >>> 0;
        continue;
      }
      if (dart.notNull(i) > dart.notNull(sliceStart)) {
        decoder$._checkForInvalidCodeUnit(codeUnitOr, codeUnits, sliceStart, i);
        buffer.addAll(codeUnits, sliceStart, i);
      }
      i = dart.notNull(i) + 1;
      if (dart.notNull(i) >= dart.notNull(end)) return -1;
      let firstDigit = utils.digitForCodeUnit(codeUnits, i);
      i = dart.notNull(i) + 1;
      if (dart.notNull(i) >= dart.notNull(end)) return 16 * dart.notNull(firstDigit);
      let secondDigit = utils.digitForCodeUnit(codeUnits, i);
      buffer.add(16 * dart.notNull(firstDigit) + dart.notNull(secondDigit));
      sliceStart = dart.notNull(i) + 1;
    }
    if (dart.notNull(end) > dart.notNull(sliceStart)) {
      decoder$._checkForInvalidCodeUnit(codeUnitOr, codeUnits, sliceStart, end);
      if (start == sliceStart) {
        buffer.addAll(codeUnits);
      } else {
        buffer.addAll(codeUnits, sliceStart, end);
      }
    }
    return null;
  };
  decoder$._checkForInvalidCodeUnit = function _checkForInvalidCodeUnit(codeUnitOr, codeUnits, start, end) {
    if (dart.notNull(codeUnitOr) >= 0 && dart.notNull(codeUnitOr) <= 127) return;
    for (let i = start; dart.notNull(i) < dart.notNull(end); i = dart.notNull(i) + 1) {
      let codeUnit = codeUnits[$_get](i);
      if (dart.notNull(codeUnit) >= 0 && dart.notNull(codeUnit) <= 127) continue;
      dart.throw(new core.FormatException.new("Non-ASCII code unit " + "U+" + dart.str(codeUnit[$toRadixString](16)[$padLeft](4, "0")), codeUnits, i));
    }
  };
  var C3;
  dart.defineLazy(decoder$, {
    /*decoder$.percentDecoder*/get percentDecoder() {
      return C3 || CT.C3;
    },
    /*decoder$._lastPercent*/get _lastPercent() {
      return -1;
    }
  }, true);
  encoder$.PercentEncoder = class PercentEncoder extends convert.Converter$(dart.legacy(core.List$(dart.legacy(core.int))), dart.legacy(core.String)) {
    convert(bytes) {
      ListLOfintL().as(bytes);
      return encoder$._convert(bytes, 0, bytes[$length]);
    }
    startChunkedConversion(sink) {
      SinkLOfStringL().as(sink);
      return new encoder$._PercentEncoderSink.new(sink);
    }
  };
  (encoder$.PercentEncoder.__ = function() {
    encoder$.PercentEncoder.__proto__.new.call(this);
    ;
  }).prototype = encoder$.PercentEncoder.prototype;
  dart.addTypeTests(encoder$.PercentEncoder);
  dart.addTypeCaches(encoder$.PercentEncoder);
  dart.setMethodSignature(encoder$.PercentEncoder, () => ({
    __proto__: dart.getMethods(encoder$.PercentEncoder.__proto__),
    convert: dart.fnType(dart.legacy(core.String), [dart.legacy(core.Object)]),
    startChunkedConversion: dart.fnType(dart.legacy(convert.ByteConversionSink), [dart.legacy(core.Object)])
  }));
  dart.setLibraryUri(encoder$.PercentEncoder, L6);
  var _sink$2 = dart.privateName(encoder$, "_sink");
  encoder$._PercentEncoderSink = class _PercentEncoderSink extends convert.ByteConversionSinkBase {
    add(chunk) {
      ListLOfintL().as(chunk);
      this[_sink$2].add(encoder$._convert(chunk, 0, chunk[$length]));
    }
    addSlice(chunk, start, end, isLast) {
      core.RangeError.checkValidRange(start, end, chunk[$length]);
      this[_sink$2].add(encoder$._convert(chunk, start, end));
      if (dart.test(isLast)) this[_sink$2].close();
    }
    close() {
      this[_sink$2].close();
    }
  };
  (encoder$._PercentEncoderSink.new = function(_sink) {
    this[_sink$2] = _sink;
    encoder$._PercentEncoderSink.__proto__.new.call(this);
    ;
  }).prototype = encoder$._PercentEncoderSink.prototype;
  dart.addTypeTests(encoder$._PercentEncoderSink);
  dart.addTypeCaches(encoder$._PercentEncoderSink);
  dart.setMethodSignature(encoder$._PercentEncoderSink, () => ({
    __proto__: dart.getMethods(encoder$._PercentEncoderSink.__proto__),
    add: dart.fnType(dart.void, [dart.legacy(core.Object)]),
    addSlice: dart.fnType(dart.void, [dart.legacy(core.List$(dart.legacy(core.int))), dart.legacy(core.int), dart.legacy(core.int), dart.legacy(core.bool)]),
    close: dart.fnType(dart.void, [])
  }));
  dart.setLibraryUri(encoder$._PercentEncoderSink, L6);
  dart.setFieldSignature(encoder$._PercentEncoderSink, () => ({
    __proto__: dart.getFields(encoder$._PercentEncoderSink.__proto__),
    [_sink$2]: dart.finalFieldType(dart.legacy(core.Sink$(dart.legacy(core.String))))
  }));
  encoder$._convert = function _convert$(bytes, start, end) {
    let buffer = new core.StringBuffer.new();
    let byteOr = 0;
    for (let i = start; dart.notNull(i) < dart.notNull(end); i = dart.notNull(i) + 1) {
      let byte = bytes[$_get](i);
      byteOr = (byteOr | dart.notNull(byte)) >>> 0;
      let letter = (32 | dart.notNull(byte)) >>> 0;
      if (letter >= 97 && letter <= 122 || dart.notNull(byte) >= 48 && dart.notNull(byte) <= 57 || byte === 45 || byte === 46 || byte === 95 || byte === 126) {
        buffer.writeCharCode(byte);
        continue;
      }
      buffer.writeCharCode(37);
      buffer.writeCharCode(encoder$._codeUnitForDigit((dart.notNull(byte) & 240) >> 4));
      buffer.writeCharCode(encoder$._codeUnitForDigit(dart.notNull(byte) & 15));
    }
    if (byteOr >= 0 && byteOr <= 255) return buffer.toString();
    for (let i = start; dart.notNull(i) < dart.notNull(end); i = dart.notNull(i) + 1) {
      let byte = bytes[$_get](i);
      if (dart.notNull(byte) >= 0 && dart.notNull(byte) <= 255) continue;
      dart.throw(new core.FormatException.new("Invalid byte " + (dart.notNull(byte) < 0 ? "-" : "") + "0x" + dart.str(byte[$abs]()[$toRadixString](16)) + ".", bytes, i));
    }
    dart.throw("unreachable");
  };
  encoder$._codeUnitForDigit = function _codeUnitForDigit$(digit) {
    return dart.notNull(digit) < 10 ? dart.notNull(digit) + 48 : dart.notNull(digit) + 65 - 10;
  };
  var C4;
  dart.defineLazy(encoder$, {
    /*encoder$.percentEncoder*/get percentEncoder() {
      return C4 || CT.C4;
    }
  }, true);
  const _is__IdentityConverter_default = Symbol('_is__IdentityConverter_default');
  identity_codec._IdentityConverter$ = dart.generic(T => {
    var TL = () => (TL = dart.constFn(dart.legacy(T)))();
    class _IdentityConverter extends convert.Converter$(dart.legacy(T), dart.legacy(T)) {
      convert(input) {
        TL().as(input);
        return input;
      }
    }
    (_IdentityConverter.new = function() {
      _IdentityConverter.__proto__.new.call(this);
      ;
    }).prototype = _IdentityConverter.prototype;
    dart.addTypeTests(_IdentityConverter);
    _IdentityConverter.prototype[_is__IdentityConverter_default] = true;
    dart.addTypeCaches(_IdentityConverter);
    dart.setMethodSignature(_IdentityConverter, () => ({
      __proto__: dart.getMethods(_IdentityConverter.__proto__),
      convert: dart.fnType(dart.legacy(T), [dart.legacy(core.Object)])
    }));
    dart.setLibraryUri(_IdentityConverter, L7);
    return _IdentityConverter;
  });
  identity_codec._IdentityConverter = identity_codec._IdentityConverter$();
  dart.addTypeTests(identity_codec._IdentityConverter, _is__IdentityConverter_default);
  const _is_IdentityCodec_default = Symbol('_is_IdentityCodec_default');
  identity_codec.IdentityCodec$ = dart.generic(T => {
    var TL = () => (TL = dart.constFn(dart.legacy(T)))();
    var _IdentityConverterOfTL = () => (_IdentityConverterOfTL = dart.constFn(identity_codec._IdentityConverter$(TL())))();
    class IdentityCodec extends convert.Codec$(dart.legacy(T), dart.legacy(T)) {
      get decoder() {
        return new (_IdentityConverterOfTL()).new();
      }
      get encoder() {
        return new (_IdentityConverterOfTL()).new();
      }
      fuse(R, other) {
        dart.legacy(convert.Codec$(TL(), dart.legacy(R))).as(other);
        return other;
      }
    }
    (IdentityCodec.new = function() {
      IdentityCodec.__proto__.new.call(this);
      ;
    }).prototype = IdentityCodec.prototype;
    dart.addTypeTests(IdentityCodec);
    IdentityCodec.prototype[_is_IdentityCodec_default] = true;
    dart.addTypeCaches(IdentityCodec);
    dart.setMethodSignature(IdentityCodec, () => ({
      __proto__: dart.getMethods(IdentityCodec.__proto__),
      fuse: dart.gFnType(R => [dart.legacy(convert.Codec$(dart.legacy(T), dart.legacy(R))), [dart.legacy(core.Object)]])
    }));
    dart.setGetterSignature(IdentityCodec, () => ({
      __proto__: dart.getGetters(IdentityCodec.__proto__),
      decoder: dart.legacy(convert.Converter$(dart.legacy(T), dart.legacy(T))),
      encoder: dart.legacy(convert.Converter$(dart.legacy(T), dart.legacy(T)))
    }));
    dart.setLibraryUri(IdentityCodec, L7);
    return IdentityCodec;
  });
  identity_codec.IdentityCodec = identity_codec.IdentityCodec$();
  dart.addTypeTests(identity_codec.IdentityCodec, _is_IdentityCodec_default);
  hex.HexCodec = class HexCodec extends convert.Codec$(dart.legacy(core.List$(dart.legacy(core.int))), dart.legacy(core.String)) {
    get encoder() {
      return encoder.hexEncoder;
    }
    get decoder() {
      return decoder.hexDecoder;
    }
  };
  (hex.HexCodec.__ = function() {
    hex.HexCodec.__proto__.new.call(this);
    ;
  }).prototype = hex.HexCodec.prototype;
  dart.addTypeTests(hex.HexCodec);
  dart.addTypeCaches(hex.HexCodec);
  dart.setGetterSignature(hex.HexCodec, () => ({
    __proto__: dart.getGetters(hex.HexCodec.__proto__),
    encoder: dart.legacy(encoder.HexEncoder),
    decoder: dart.legacy(decoder.HexDecoder)
  }));
  dart.setLibraryUri(hex.HexCodec, L8);
  var C5;
  dart.defineLazy(hex, {
    /*hex.hex*/get hex() {
      return C5 || CT.C5;
    }
  }, true);
  var _events = dart.privateName(accumulator_sink, "_events");
  var _isClosed$0 = dart.privateName(accumulator_sink, "_isClosed");
  const _is_AccumulatorSink_default = Symbol('_is_AccumulatorSink_default');
  accumulator_sink.AccumulatorSink$ = dart.generic(T => {
    var TL = () => (TL = dart.constFn(dart.legacy(T)))();
    var JSArrayOfTL = () => (JSArrayOfTL = dart.constFn(_interceptors.JSArray$(TL())))();
    var UnmodifiableListViewOfTL = () => (UnmodifiableListViewOfTL = dart.constFn(collection.UnmodifiableListView$(TL())))();
    class AccumulatorSink extends core.Object {
      get events() {
        return new (UnmodifiableListViewOfTL()).new(this[_events]);
      }
      get isClosed() {
        return this[_isClosed$0];
      }
      clear() {
        this[_events][$clear]();
      }
      add(event) {
        TL().as(event);
        if (dart.test(this[_isClosed$0])) {
          dart.throw(new core.StateError.new("Can't add to a closed sink."));
        }
        this[_events][$add](event);
      }
      close() {
        this[_isClosed$0] = true;
      }
    }
    (AccumulatorSink.new = function() {
      this[_events] = JSArrayOfTL().of([]);
      this[_isClosed$0] = false;
      ;
    }).prototype = AccumulatorSink.prototype;
    dart.addTypeTests(AccumulatorSink);
    AccumulatorSink.prototype[_is_AccumulatorSink_default] = true;
    dart.addTypeCaches(AccumulatorSink);
    AccumulatorSink[dart.implements] = () => [core.Sink$(dart.legacy(T))];
    dart.setMethodSignature(AccumulatorSink, () => ({
      __proto__: dart.getMethods(AccumulatorSink.__proto__),
      clear: dart.fnType(dart.void, []),
      add: dart.fnType(dart.void, [dart.legacy(core.Object)]),
      close: dart.fnType(dart.void, [])
    }));
    dart.setGetterSignature(AccumulatorSink, () => ({
      __proto__: dart.getGetters(AccumulatorSink.__proto__),
      events: dart.legacy(core.List$(dart.legacy(T))),
      isClosed: dart.legacy(core.bool)
    }));
    dart.setLibraryUri(AccumulatorSink, L9);
    dart.setFieldSignature(AccumulatorSink, () => ({
      __proto__: dart.getFields(AccumulatorSink.__proto__),
      [_events]: dart.finalFieldType(dart.legacy(core.List$(dart.legacy(T)))),
      [_isClosed$0]: dart.fieldType(dart.legacy(core.bool))
    }));
    return AccumulatorSink;
  });
  accumulator_sink.AccumulatorSink = accumulator_sink.AccumulatorSink$();
  dart.addTypeTests(accumulator_sink.AccumulatorSink, _is_AccumulatorSink_default);
  dart.trackLibraries("packages/convert/convert", {
    "package:convert/src/hex/decoder.dart": decoder,
    "package:convert/src/utils.dart": utils,
    "package:convert/src/byte_accumulator_sink.dart": byte_accumulator_sink,
    "package:convert/src/hex/encoder.dart": encoder,
    "package:convert/convert.dart": convert$,
    "package:convert/src/string_accumulator_sink.dart": string_accumulator_sink,
    "package:convert/src/percent.dart": percent,
    "package:convert/src/percent/decoder.dart": decoder$,
    "package:convert/src/percent/encoder.dart": encoder$,
    "package:convert/src/identity_codec.dart": identity_codec,
    "package:convert/src/hex.dart": hex,
    "package:convert/src/accumulator_sink.dart": accumulator_sink
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["src/hex/decoder.dart","src/utils.dart","src/byte_accumulator_sink.dart","src/hex/encoder.dart","src/string_accumulator_sink.dart","src/percent.dart","src/percent/decoder.dart","src/percent/encoder.dart","src/identity_codec.dart","src/hex.dart","src/accumulator_sink.dart"],"names":[],"mappings":"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","file":"convert.unsound.ddc.js"}');
  // Exports:
  return {
    src__hex__decoder: decoder,
    src__utils: utils,
    src__byte_accumulator_sink: byte_accumulator_sink,
    src__hex__encoder: encoder,
    convert: convert$,
    src__string_accumulator_sink: string_accumulator_sink,
    src__percent: percent,
    src__percent__decoder: decoder$,
    src__percent__encoder: encoder$,
    src__identity_codec: identity_codec,
    src__hex: hex,
    src__accumulator_sink: accumulator_sink
  };
}));

//# sourceMappingURL=convert.unsound.ddc.js.map

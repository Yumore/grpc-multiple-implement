define(['dart_sdk'], (function load__packages__fixnum__fixnum(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  var fixnum = Object.create(dart.library);
  var $codeUnitAt = dartx.codeUnitAt;
  var $rightShift = dartx['>>'];
  var $modulo = dartx['%'];
  var $truncate = dartx.truncate;
  var $leftShift = dartx['<<'];
  var $compareTo = dartx.compareTo;
  var $bitLength = dartx.bitLength;
  var $toSigned = dartx.toSigned;
  var $toUnsigned = dartx.toUnsigned;
  var $_set = dartx._set;
  var $toDouble = dartx.toDouble;
  var $toString = dartx.toString;
  var $toRadixString = dartx.toRadixString;
  var $_equals = dartx._equals;
  var $hashCode = dartx.hashCode;
  var $_get = dartx._get;
  var $isNegative = dartx.isNegative;
  var $substring = dartx.substring;
  var $floorToDouble = dartx.floorToDouble;
  var $toInt = dartx.toInt;
  var Int32L = () => (Int32L = dart.constFn(dart.legacy(fixnum.Int32)))();
  var intL = () => (intL = dart.constFn(dart.legacy(core.int)))();
  var Int64L = () => (Int64L = dart.constFn(dart.legacy(fixnum.Int64)))();
  var IntXL = () => (IntXL = dart.constFn(dart.legacy(fixnum.IntX)))();
  var ListOfintL = () => (ListOfintL = dart.constFn(core.List$(intL())))();
  const CT = Object.create(null);
  var L1 = "org-dartlang-app:///packages/fixnum/src/int64.dart";
  var L0 = "package:fixnum/fixnum.dart";
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.const({
        __proto__: fixnum.Int32.prototype,
        [Int32__i]: -1
      });
    },
    get C1() {
      return C1 = dart.const({
        __proto__: fixnum.Int32.prototype,
        [Int32__i]: 2147483647
      });
    },
    get C2() {
      return C2 = dart.const({
        __proto__: fixnum.Int32.prototype,
        [Int32__i]: -2147483648
      });
    },
    get C3() {
      return C3 = dart.const({
        __proto__: fixnum.Int32.prototype,
        [Int32__i]: 0
      });
    },
    get C4() {
      return C4 = dart.const({
        __proto__: fixnum.Int32.prototype,
        [Int32__i]: 1
      });
    },
    get C5() {
      return C5 = dart.const({
        __proto__: fixnum.Int32.prototype,
        [Int32__i]: 2
      });
    },
    get C6() {
      return C6 = dart.const({
        __proto__: fixnum.Int64.prototype,
        [Int64__h]: 1048575,
        [Int64__m]: 4194303,
        [Int64__l]: 4194303
      });
    },
    get C7() {
      return C7 = dart.const({
        __proto__: core.IntegerDivisionByZeroException.prototype
      });
    },
    get C8() {
      return C8 = dart.const({
        __proto__: fixnum.Int64.prototype,
        [Int64__h]: 524287,
        [Int64__m]: 4194303,
        [Int64__l]: 4194303
      });
    },
    get C9() {
      return C9 = dart.const({
        __proto__: fixnum.Int64.prototype,
        [Int64__h]: 524288,
        [Int64__m]: 0,
        [Int64__l]: 0
      });
    },
    get C10() {
      return C10 = dart.const({
        __proto__: fixnum.Int64.prototype,
        [Int64__h]: 0,
        [Int64__m]: 0,
        [Int64__l]: 0
      });
    },
    get C11() {
      return C11 = dart.const({
        __proto__: fixnum.Int64.prototype,
        [Int64__h]: 0,
        [Int64__m]: 0,
        [Int64__l]: 1
      });
    },
    get C12() {
      return C12 = dart.const({
        __proto__: fixnum.Int64.prototype,
        [Int64__h]: 0,
        [Int64__m]: 0,
        [Int64__l]: 2
      });
    },
    get C13() {
      return C13 = dart.constList([0, 0, 1048576, 531441, 1048576, 390625, 279936, 823543, 262144, 531441, 1000000, 161051, 248832, 371293, 537824, 759375, 1048576, 83521, 104976, 130321, 160000, 194481, 234256, 279841, 331776, 390625, 456976, 531441, 614656, 707281, 810000, 923521, 1048576, 35937, 39304, 42875, 46656], intL());
    }
  }, false);
  fixnum.IntX = class IntX extends core.Object {};
  (fixnum.IntX.new = function() {
    ;
  }).prototype = fixnum.IntX.prototype;
  dart.addTypeTests(fixnum.IntX);
  dart.addTypeCaches(fixnum.IntX);
  fixnum.IntX[dart.implements] = () => [core.Comparable];
  dart.setLibraryUri(fixnum.IntX, L0);
  var _i = dart.privateName(fixnum, "_i");
  var _toInt = dart.privateName(fixnum, "_toInt");
  var Int32__i = dart.privateName(fixnum, "Int32._i");
  var C0;
  var C1;
  var C2;
  var C3;
  var C4;
  var C5;
  fixnum.Int32 = class Int32 extends core.Object {
    get [_i]() {
      return this[_i$];
    }
    set [_i](value) {
      super[_i] = value;
    }
    static _decodeDigit(c) {
      if (dart.notNull(c) >= 48 && dart.notNull(c) <= 57) {
        return dart.notNull(c) - 48;
      } else if (dart.notNull(c) >= 97 && dart.notNull(c) <= 122) {
        return dart.notNull(c) - 97 + 10;
      } else if (dart.notNull(c) >= 65 && dart.notNull(c) <= 90) {
        return dart.notNull(c) - 65 + 10;
      } else {
        return -1;
      }
    }
    static _validateRadix(radix) {
      if (2 <= dart.notNull(radix) && dart.notNull(radix) <= 36) return radix;
      dart.throw(new core.RangeError.range(radix, 2, 36, "radix"));
    }
    static parseRadix(s, radix) {
      fixnum.Int32._validateRadix(radix);
      let x = fixnum.Int32.ZERO;
      for (let i = 0; i < s.length; i = i + 1) {
        let c = s[$codeUnitAt](i);
        let digit = fixnum.Int32._decodeDigit(c);
        if (dart.notNull(digit) < 0 || dart.notNull(digit) >= dart.notNull(radix)) {
          dart.throw(new core.FormatException.new("Non-radix code unit: " + dart.str(c)));
        }
        x = Int32L().as(x['*'](radix)['+'](digit));
      }
      return x;
    }
    static parseInt(s) {
      return new fixnum.Int32.new(core.int.parse(s));
    }
    static parseHex(s) {
      return fixnum.Int32.parseRadix(s, 16);
    }
    static _bitCount(i) {
      i = dart.notNull(i) - (i[$rightShift](1) & 1431655765);
      i = (dart.notNull(i) & 858993459) + (i[$rightShift](2) & 858993459);
      i = dart.notNull(i) + i[$rightShift](4) & 252645135;
      i = dart.notNull(i) + i[$rightShift](8);
      i = dart.notNull(i) + i[$rightShift](16);
      return dart.notNull(i) & 63;
    }
    static _numberOfLeadingZeros(i) {
      i = (dart.notNull(i) | i[$rightShift](1)) >>> 0;
      i = (dart.notNull(i) | i[$rightShift](2)) >>> 0;
      i = (dart.notNull(i) | i[$rightShift](4)) >>> 0;
      i = (dart.notNull(i) | i[$rightShift](8)) >>> 0;
      i = (dart.notNull(i) | i[$rightShift](16)) >>> 0;
      return fixnum.Int32._bitCount(~dart.notNull(i) >>> 0);
    }
    static _numberOfTrailingZeros(i) {
      return fixnum.Int32._bitCount(((dart.notNull(i) & -dart.notNull(i)) >>> 0) - 1);
    }
    [_toInt](val) {
      if (Int32L().is(val)) {
        return val[_i];
      } else if (intL().is(val)) {
        return val;
      }
      dart.throw(new core.ArgumentError.new(val));
    }
    ['+'](other) {
      if (Int64L().is(other)) {
        return this.toInt64()['+'](other);
      }
      return new fixnum.Int32.new(dart.notNull(this[_i]) + dart.notNull(this[_toInt](other)));
    }
    ['-'](other) {
      if (Int64L().is(other)) {
        return this.toInt64()['-'](other);
      }
      return new fixnum.Int32.new(dart.notNull(this[_i]) - dart.notNull(this[_toInt](other)));
    }
    _negate() {
      return new fixnum.Int32.new(-dart.notNull(this[_i]));
    }
    ['*'](other) {
      if (Int64L().is(other)) {
        return this.toInt64()['*'](other);
      }
      return this.toInt64()['*'](other).toInt32();
    }
    ['%'](other) {
      if (Int64L().is(other)) {
        return this.toInt64()['%'](other).toInt32();
      }
      return new fixnum.Int32.new(this[_i][$modulo](this[_toInt](other)));
    }
    ['~/'](other) {
      if (Int64L().is(other)) {
        return this.toInt64()['~/'](other).toInt32();
      }
      return new fixnum.Int32.new((dart.notNull(this[_i]) / dart.notNull(this[_toInt](other)))[$truncate]());
    }
    remainder(other) {
      if (Int64L().is(other)) {
        let t = this.toInt64();
        return t['-'](t['~/'](other)['*'](other)).toInt32();
      }
      return Int32L().as(this['-'](this['~/'](other)['*'](other)));
    }
    ['&'](other) {
      if (Int64L().is(other)) {
        return this.toInt64()['&'](other).toInt32();
      }
      return new fixnum.Int32.new((dart.notNull(this[_i]) & dart.notNull(this[_toInt](other))) >>> 0);
    }
    ['|'](other) {
      if (Int64L().is(other)) {
        return this.toInt64()['|'](other).toInt32();
      }
      return new fixnum.Int32.new((dart.notNull(this[_i]) | dart.notNull(this[_toInt](other))) >>> 0);
    }
    ['^'](other) {
      if (Int64L().is(other)) {
        return this.toInt64()['^'](other).toInt32();
      }
      return new fixnum.Int32.new((dart.notNull(this[_i]) ^ dart.notNull(this[_toInt](other))) >>> 0);
    }
    ['~']() {
      return new fixnum.Int32.new(~dart.notNull(this[_i]) >>> 0);
    }
    ['<<'](n) {
      if (dart.notNull(n) < 0) {
        dart.throw(new core.ArgumentError.new(n));
      }
      if (dart.notNull(n) >= 32) {
        return fixnum.Int32.ZERO;
      }
      return new fixnum.Int32.new(this[_i][$leftShift](n));
    }
    ['>>'](n) {
      if (dart.notNull(n) < 0) {
        dart.throw(new core.ArgumentError.new(n));
      }
      if (dart.notNull(n) >= 32) {
        return dart.test(this.isNegative) ? C0 || CT.C0 : fixnum.Int32.ZERO;
      }
      let value = null;
      if (dart.notNull(this[_i]) >= 0) {
        value = this[_i][$rightShift](n);
      } else {
        value = (this[_i][$rightShift](n) | (4294967295)[$leftShift](32 - dart.notNull(n))) >>> 0;
      }
      return new fixnum.Int32.new(value);
    }
    shiftRightUnsigned(n) {
      if (dart.notNull(n) < 0) {
        dart.throw(new core.ArgumentError.new(n));
      }
      if (dart.notNull(n) >= 32) {
        return fixnum.Int32.ZERO;
      }
      let value = null;
      if (dart.notNull(this[_i]) >= 0) {
        value = this[_i][$rightShift](n);
      } else {
        value = (this[_i][$rightShift](n) & (1)[$leftShift](32 - dart.notNull(n)) - 1) >>> 0;
      }
      return new fixnum.Int32.new(value);
    }
    _equals(other) {
      if (other == null) return false;
      if (Int32L().is(other)) {
        return this[_i] == other[_i];
      } else if (Int64L().is(other)) {
        return dart.equals(this.toInt64(), other);
      } else if (intL().is(other)) {
        return this[_i] == other;
      }
      return false;
    }
    compareTo(other) {
      if (Int64L().is(other)) {
        return this.toInt64().compareTo(other);
      }
      return this[_i][$compareTo](this[_toInt](other));
    }
    ['<'](other) {
      if (Int64L().is(other)) {
        return this.toInt64()['<'](other);
      }
      return dart.notNull(this[_i]) < dart.notNull(this[_toInt](other));
    }
    ['<='](other) {
      if (Int64L().is(other)) {
        return this.toInt64()['<='](other);
      }
      return dart.notNull(this[_i]) <= dart.notNull(this[_toInt](other));
    }
    ['>'](other) {
      if (Int64L().is(other)) {
        return this.toInt64()['>'](other);
      }
      return dart.notNull(this[_i]) > dart.notNull(this[_toInt](other));
    }
    ['>='](other) {
      if (Int64L().is(other)) {
        return this.toInt64()['>='](other);
      }
      return dart.notNull(this[_i]) >= dart.notNull(this[_toInt](other));
    }
    get isEven() {
      return (dart.notNull(this[_i]) & 1) === 0;
    }
    get isMaxValue() {
      return this[_i] === 2147483647;
    }
    get isMinValue() {
      return this[_i] === -2147483648;
    }
    get isNegative() {
      return dart.notNull(this[_i]) < 0;
    }
    get isOdd() {
      return (dart.notNull(this[_i]) & 1) === 1;
    }
    get isZero() {
      return this[_i] === 0;
    }
    get bitLength() {
      return this[_i][$bitLength];
    }
    get hashCode() {
      return this[_i];
    }
    abs() {
      return dart.notNull(this[_i]) < 0 ? new fixnum.Int32.new(-dart.notNull(this[_i])) : this;
    }
    clamp(lowerLimit, upperLimit) {
      if (dart.test(this['<'](lowerLimit))) {
        if (IntXL().is(lowerLimit)) return lowerLimit.toInt32();
        if (intL().is(lowerLimit)) return new fixnum.Int32.new(lowerLimit);
        dart.throw(new core.ArgumentError.new(lowerLimit));
      } else if (dart.test(this['>'](upperLimit))) {
        if (IntXL().is(upperLimit)) return upperLimit.toInt32();
        if (intL().is(upperLimit)) return new fixnum.Int32.new(upperLimit);
        dart.throw(new core.ArgumentError.new(upperLimit));
      }
      return this;
    }
    numberOfLeadingZeros() {
      return fixnum.Int32._numberOfLeadingZeros(this[_i]);
    }
    numberOfTrailingZeros() {
      return fixnum.Int32._numberOfTrailingZeros(this[_i]);
    }
    toSigned(width) {
      if (dart.notNull(width) < 1 || dart.notNull(width) > 32) dart.throw(new core.RangeError.range(width, 1, 32));
      return new fixnum.Int32.new(this[_i][$toSigned](width));
    }
    toUnsigned(width) {
      if (dart.notNull(width) < 0 || dart.notNull(width) > 32) dart.throw(new core.RangeError.range(width, 0, 32));
      return new fixnum.Int32.new(this[_i][$toUnsigned](width));
    }
    toBytes() {
      let result = ListOfintL().new(4);
      result[$_set](0, dart.notNull(this[_i]) & 255);
      result[$_set](1, dart.notNull(this[_i]) >> 8 & 255);
      result[$_set](2, dart.notNull(this[_i]) >> 16 & 255);
      result[$_set](3, this[_i][$rightShift](24) & 255);
      return result;
    }
    toDouble() {
      return this[_i][$toDouble]();
    }
    toInt() {
      return this[_i];
    }
    toInt32() {
      return this;
    }
    toInt64() {
      return fixnum.Int64.new(this[_i]);
    }
    toString() {
      return dart.toString(this[_i]);
    }
    toHexString() {
      return this[_i][$toRadixString](16);
    }
    toRadixString(radix) {
      return this[_i][$toRadixString](radix);
    }
  };
  (fixnum.Int32._internal = function(i) {
    this[_i$] = i;
    ;
  }).prototype = fixnum.Int32.prototype;
  (fixnum.Int32.new = function(i = 0) {
    this[_i$] = (dart.notNull(i) & 2147483647) - ((dart.notNull(i) & 2147483648) >>> 0);
    ;
  }).prototype = fixnum.Int32.prototype;
  dart.addTypeTests(fixnum.Int32);
  dart.addTypeCaches(fixnum.Int32);
  const _i$ = Int32__i;
  fixnum.Int32[dart.implements] = () => [fixnum.IntX];
  dart.setMethodSignature(fixnum.Int32, () => ({
    __proto__: dart.getMethods(fixnum.Int32.__proto__),
    [_toInt]: dart.fnType(dart.legacy(core.int), [dart.dynamic]),
    '+': dart.fnType(dart.legacy(fixnum.IntX), [dart.dynamic]),
    '-': dart.fnType(dart.legacy(fixnum.IntX), [dart.dynamic]),
    _negate: dart.fnType(dart.legacy(fixnum.Int32), []),
    '*': dart.fnType(dart.legacy(fixnum.IntX), [dart.dynamic]),
    '%': dart.fnType(dart.legacy(fixnum.Int32), [dart.dynamic]),
    '~/': dart.fnType(dart.legacy(fixnum.Int32), [dart.dynamic]),
    remainder: dart.fnType(dart.legacy(fixnum.Int32), [dart.dynamic]),
    '&': dart.fnType(dart.legacy(fixnum.Int32), [dart.dynamic]),
    '|': dart.fnType(dart.legacy(fixnum.Int32), [dart.dynamic]),
    '^': dart.fnType(dart.legacy(fixnum.Int32), [dart.dynamic]),
    '~': dart.fnType(dart.legacy(fixnum.Int32), []),
    '<<': dart.fnType(dart.legacy(fixnum.Int32), [dart.legacy(core.int)]),
    '>>': dart.fnType(dart.legacy(fixnum.Int32), [dart.legacy(core.int)]),
    shiftRightUnsigned: dart.fnType(dart.legacy(fixnum.Int32), [dart.legacy(core.int)]),
    _equals: dart.fnType(dart.legacy(core.bool), [dart.dynamic]),
    [$_equals]: dart.fnType(dart.legacy(core.bool), [dart.dynamic]),
    compareTo: dart.fnType(dart.legacy(core.int), [dart.legacy(core.Object)]),
    [$compareTo]: dart.fnType(dart.legacy(core.int), [dart.legacy(core.Object)]),
    '<': dart.fnType(dart.legacy(core.bool), [dart.dynamic]),
    '<=': dart.fnType(dart.legacy(core.bool), [dart.dynamic]),
    '>': dart.fnType(dart.legacy(core.bool), [dart.dynamic]),
    '>=': dart.fnType(dart.legacy(core.bool), [dart.dynamic]),
    abs: dart.fnType(dart.legacy(fixnum.Int32), []),
    clamp: dart.fnType(dart.legacy(fixnum.Int32), [dart.dynamic, dart.dynamic]),
    numberOfLeadingZeros: dart.fnType(dart.legacy(core.int), []),
    numberOfTrailingZeros: dart.fnType(dart.legacy(core.int), []),
    toSigned: dart.fnType(dart.legacy(fixnum.Int32), [dart.legacy(core.int)]),
    toUnsigned: dart.fnType(dart.legacy(fixnum.Int32), [dart.legacy(core.int)]),
    toBytes: dart.fnType(dart.legacy(core.List$(dart.legacy(core.int))), []),
    toDouble: dart.fnType(dart.legacy(core.double), []),
    toInt: dart.fnType(dart.legacy(core.int), []),
    toInt32: dart.fnType(dart.legacy(fixnum.Int32), []),
    toInt64: dart.fnType(dart.legacy(fixnum.Int64), []),
    toString: dart.fnType(dart.legacy(core.String), []),
    [$toString]: dart.fnType(dart.legacy(core.String), []),
    toHexString: dart.fnType(dart.legacy(core.String), []),
    toRadixString: dart.fnType(dart.legacy(core.String), [dart.legacy(core.int)])
  }));
  dart.setGetterSignature(fixnum.Int32, () => ({
    __proto__: dart.getGetters(fixnum.Int32.__proto__),
    isEven: dart.legacy(core.bool),
    isMaxValue: dart.legacy(core.bool),
    isMinValue: dart.legacy(core.bool),
    isNegative: dart.legacy(core.bool),
    isOdd: dart.legacy(core.bool),
    isZero: dart.legacy(core.bool),
    bitLength: dart.legacy(core.int),
    hashCode: dart.legacy(core.int),
    [$hashCode]: dart.legacy(core.int)
  }));
  dart.setLibraryUri(fixnum.Int32, L0);
  dart.setFieldSignature(fixnum.Int32, () => ({
    __proto__: dart.getFields(fixnum.Int32.__proto__),
    [_i]: dart.finalFieldType(dart.legacy(core.int))
  }));
  dart.defineExtensionMethods(fixnum.Int32, ['_equals', 'compareTo', 'toString']);
  dart.defineExtensionAccessors(fixnum.Int32, ['hashCode']);
  dart.defineLazy(fixnum.Int32, {
    /*fixnum.Int32.MAX_VALUE*/get MAX_VALUE() {
      return C1 || CT.C1;
    },
    /*fixnum.Int32.MIN_VALUE*/get MIN_VALUE() {
      return C2 || CT.C2;
    },
    /*fixnum.Int32.ZERO*/get ZERO() {
      return C3 || CT.C3;
    },
    /*fixnum.Int32.ONE*/get ONE() {
      return C4 || CT.C4;
    },
    /*fixnum.Int32.TWO*/get TWO() {
      return C5 || CT.C5;
    },
    /*fixnum.Int32._CC_0*/get _CC_0() {
      return 48;
    },
    /*fixnum.Int32._CC_9*/get _CC_9() {
      return 57;
    },
    /*fixnum.Int32._CC_a*/get _CC_a() {
      return 97;
    },
    /*fixnum.Int32._CC_z*/get _CC_z() {
      return 122;
    },
    /*fixnum.Int32._CC_A*/get _CC_A() {
      return 65;
    },
    /*fixnum.Int32._CC_Z*/get _CC_Z() {
      return 90;
    }
  }, true);
  var _l = dart.privateName(fixnum, "_l");
  var _m = dart.privateName(fixnum, "_m");
  var _h = dart.privateName(fixnum, "_h");
  var Int64__h = dart.privateName(fixnum, "Int64._h");
  var Int64__m = dart.privateName(fixnum, "Int64._m");
  var Int64__l = dart.privateName(fixnum, "Int64._l");
  var C6;
  var _compareTo = dart.privateName(fixnum, "_compareTo");
  var _toRadixString = dart.privateName(fixnum, "_toRadixString");
  var _hexDigit = dart.privateName(fixnum, "_hexDigit");
  var C7;
  var C8;
  var C9;
  var C10;
  var C11;
  var C12;
  var C13;
  fixnum.Int64 = class Int64 extends core.Object {
    get [_l]() {
      return this[_l$];
    }
    set [_l](value) {
      super[_l] = value;
    }
    get [_m]() {
      return this[_m$];
    }
    set [_m](value) {
      super[_m] = value;
    }
    get [_h]() {
      return this[_h$];
    }
    set [_h](value) {
      super[_h] = value;
    }
    static parseRadix(s, radix) {
      return fixnum.Int64._parseRadix(s, fixnum.Int32._validateRadix(radix));
    }
    static _parseRadix(s, radix) {
      let i = 0;
      let negative = false;
      if (i < s.length && s[$_get](0) === "-") {
        negative = true;
        i = i + 1;
      }
      if (!(i < s.length)) {
        dart.throw(new core.FormatException.new("No digits in '" + dart.str(s) + "'"));
      }
      let d0 = 0;
      let d1 = 0;
      let d2 = 0;
      for (; i < s.length; i = i + 1) {
        let c = s[$codeUnitAt](i);
        let digit = fixnum.Int32._decodeDigit(c);
        if (dart.notNull(digit) < 0 || dart.notNull(digit) >= dart.notNull(radix)) {
          dart.throw(new core.FormatException.new("Non-radix char code: " + dart.str(c)));
        }
        d0 = d0 * dart.notNull(radix) + dart.notNull(digit);
        let carry = d0[$rightShift](22);
        d0 = (4194303 & d0) >>> 0;
        d1 = d1 * dart.notNull(radix) + carry;
        carry = d1[$rightShift](22);
        d1 = (4194303 & d1) >>> 0;
        d2 = d2 * dart.notNull(radix) + carry;
        d2 = (1048575 & d2) >>> 0;
      }
      if (negative) return fixnum.Int64._negate(d0, d1, d2);
      return fixnum.Int64._masked(d0, d1, d2);
    }
    static parseInt(s) {
      return fixnum.Int64._parseRadix(s, 10);
    }
    static parseHex(s) {
      return fixnum.Int64._parseRadix(s, 16);
    }
    static new(value = 0) {
      let v0 = 0;
      let v1 = 0;
      let v2 = 0;
      let negative = false;
      if (dart.notNull(value) < 0) {
        negative = true;
        value = -dart.notNull(value);
      }
      v2 = (dart.notNull(value) / 17592186044416)[$truncate]();
      value = dart.notNull(value) - v2 * 17592186044416;
      v1 = (dart.notNull(value) / 4194304)[$truncate]();
      value = dart.notNull(value) - v1 * 4194304;
      v0 = value;
      return negative ? fixnum.Int64._negate((4194303 & dart.notNull(v0)) >>> 0, (4194303 & v1) >>> 0, (1048575 & v2) >>> 0) : fixnum.Int64._masked(v0, v1, v2);
    }
    static fromBytes(bytes) {
      let top = dart.notNull(bytes[$_get](7)) & 255;
      top = top << 8 >>> 0;
      top = (top | dart.notNull(bytes[$_get](6)) & 255) >>> 0;
      top = top << 8 >>> 0;
      top = (top | dart.notNull(bytes[$_get](5)) & 255) >>> 0;
      top = top << 8 >>> 0;
      top = (top | dart.notNull(bytes[$_get](4)) & 255) >>> 0;
      let bottom = dart.notNull(bytes[$_get](3)) & 255;
      bottom = bottom << 8 >>> 0;
      bottom = (bottom | dart.notNull(bytes[$_get](2)) & 255) >>> 0;
      bottom = bottom << 8 >>> 0;
      bottom = (bottom | dart.notNull(bytes[$_get](1)) & 255) >>> 0;
      bottom = bottom << 8 >>> 0;
      bottom = (bottom | dart.notNull(bytes[$_get](0)) & 255) >>> 0;
      return fixnum.Int64.fromInts(top, bottom);
    }
    static fromBytesBigEndian(bytes) {
      let top = dart.notNull(bytes[$_get](0)) & 255;
      top = top << 8 >>> 0;
      top = (top | dart.notNull(bytes[$_get](1)) & 255) >>> 0;
      top = top << 8 >>> 0;
      top = (top | dart.notNull(bytes[$_get](2)) & 255) >>> 0;
      top = top << 8 >>> 0;
      top = (top | dart.notNull(bytes[$_get](3)) & 255) >>> 0;
      let bottom = dart.notNull(bytes[$_get](4)) & 255;
      bottom = bottom << 8 >>> 0;
      bottom = (bottom | dart.notNull(bytes[$_get](5)) & 255) >>> 0;
      bottom = bottom << 8 >>> 0;
      bottom = (bottom | dart.notNull(bytes[$_get](6)) & 255) >>> 0;
      bottom = bottom << 8 >>> 0;
      bottom = (bottom | dart.notNull(bytes[$_get](7)) & 255) >>> 0;
      return fixnum.Int64.fromInts(top, bottom);
    }
    static fromInts(top, bottom) {
      top = (dart.notNull(top) & 4294967295) >>> 0;
      bottom = (dart.notNull(bottom) & 4294967295) >>> 0;
      let d0 = (4194303 & dart.notNull(bottom)) >>> 0;
      let d1 = (4095 & dart.notNull(top)) << 10 | 1023 & bottom[$rightShift](22);
      let d2 = (1048575 & top[$rightShift](12)) >>> 0;
      return fixnum.Int64._masked(d0, d1, d2);
    }
    static _promote(value) {
      if (Int64L().is(value)) {
        return value;
      } else if (intL().is(value)) {
        return fixnum.Int64.new(value);
      } else if (Int32L().is(value)) {
        return value.toInt64();
      }
      dart.throw(new core.ArgumentError.value(value));
    }
    ['+'](other) {
      let o = fixnum.Int64._promote(other);
      let sum0 = dart.notNull(this[_l]) + dart.notNull(o[_l]);
      let sum1 = dart.notNull(this[_m]) + dart.notNull(o[_m]) + sum0[$rightShift](22);
      let sum2 = dart.notNull(this[_h]) + dart.notNull(o[_h]) + sum1[$rightShift](22);
      return fixnum.Int64._masked(sum0, sum1, sum2);
    }
    ['-'](other) {
      let o = fixnum.Int64._promote(other);
      return fixnum.Int64._sub(this[_l], this[_m], this[_h], o[_l], o[_m], o[_h]);
    }
    _negate() {
      return fixnum.Int64._negate(this[_l], this[_m], this[_h]);
    }
    ['*'](other) {
      let o = fixnum.Int64._promote(other);
      let a0 = dart.notNull(this[_l]) & 8191;
      let a1 = (this[_l][$rightShift](13) | (dart.notNull(this[_m]) & 15) << 9) >>> 0;
      let a2 = dart.notNull(this[_m]) >> 4 & 8191;
      let a3 = (this[_m][$rightShift](17) | (dart.notNull(this[_h]) & 255) << 5) >>> 0;
      let a4 = (dart.notNull(this[_h]) & 1048320) >> 8;
      let b0 = dart.notNull(o[_l]) & 8191;
      let b1 = (o[_l][$rightShift](13) | (dart.notNull(o[_m]) & 15) << 9) >>> 0;
      let b2 = dart.notNull(o[_m]) >> 4 & 8191;
      let b3 = (o[_m][$rightShift](17) | (dart.notNull(o[_h]) & 255) << 5) >>> 0;
      let b4 = (dart.notNull(o[_h]) & 1048320) >> 8;
      let p0 = a0 * b0;
      let p1 = a1 * b0;
      let p2 = a2 * b0;
      let p3 = a3 * b0;
      let p4 = a4 * b0;
      if (b1 !== 0) {
        p1 = p1 + a0 * b1;
        p2 = p2 + a1 * b1;
        p3 = p3 + a2 * b1;
        p4 = p4 + a3 * b1;
      }
      if (b2 !== 0) {
        p2 = p2 + a0 * b2;
        p3 = p3 + a1 * b2;
        p4 = p4 + a2 * b2;
      }
      if (b3 !== 0) {
        p3 = p3 + a0 * b3;
        p4 = p4 + a1 * b3;
      }
      if (b4 !== 0) {
        p4 = p4 + a0 * b4;
      }
      let c00 = p0 & 4194303;
      let c01 = (p1 & 511) << 13;
      let c0 = c00 + c01;
      let c10 = p0[$rightShift](22);
      let c11 = p1[$rightShift](9);
      let c12 = (p2 & 262143) << 4;
      let c13 = (p3 & 31) << 17;
      let c1 = c10 + c11 + c12 + c13;
      let c22 = p2[$rightShift](18);
      let c23 = p3[$rightShift](5);
      let c24 = (p4 & 4095) << 8;
      let c2 = c22 + c23 + c24;
      c1 = c1 + c0[$rightShift](22);
      c2 = c2 + c1[$rightShift](22);
      return fixnum.Int64._masked(c0, c1, c2);
    }
    ['%'](other) {
      return fixnum.Int64._divide(this, other, 3);
    }
    ['~/'](other) {
      return fixnum.Int64._divide(this, other, 1);
    }
    remainder(other) {
      return fixnum.Int64._divide(this, other, 2);
    }
    ['&'](other) {
      let o = fixnum.Int64._promote(other);
      let a0 = (dart.notNull(this[_l]) & dart.notNull(o[_l])) >>> 0;
      let a1 = (dart.notNull(this[_m]) & dart.notNull(o[_m])) >>> 0;
      let a2 = (dart.notNull(this[_h]) & dart.notNull(o[_h])) >>> 0;
      return fixnum.Int64._masked(a0, a1, a2);
    }
    ['|'](other) {
      let o = fixnum.Int64._promote(other);
      let a0 = (dart.notNull(this[_l]) | dart.notNull(o[_l])) >>> 0;
      let a1 = (dart.notNull(this[_m]) | dart.notNull(o[_m])) >>> 0;
      let a2 = (dart.notNull(this[_h]) | dart.notNull(o[_h])) >>> 0;
      return fixnum.Int64._masked(a0, a1, a2);
    }
    ['^'](other) {
      let o = fixnum.Int64._promote(other);
      let a0 = (dart.notNull(this[_l]) ^ dart.notNull(o[_l])) >>> 0;
      let a1 = (dart.notNull(this[_m]) ^ dart.notNull(o[_m])) >>> 0;
      let a2 = (dart.notNull(this[_h]) ^ dart.notNull(o[_h])) >>> 0;
      return fixnum.Int64._masked(a0, a1, a2);
    }
    ['~']() {
      return fixnum.Int64._masked(~dart.notNull(this[_l]) >>> 0, ~dart.notNull(this[_m]) >>> 0, ~dart.notNull(this[_h]) >>> 0);
    }
    ['<<'](n) {
      if (dart.notNull(n) < 0) {
        dart.throw(new core.ArgumentError.value(n));
      }
      if (dart.notNull(n) >= 64) {
        return fixnum.Int64.ZERO;
      }
      let res0 = null;
      let res1 = null;
      let res2 = null;
      if (dart.notNull(n) < 22) {
        res0 = this[_l][$leftShift](n);
        res1 = (this[_m][$leftShift](n) | this[_l][$rightShift](22 - dart.notNull(n))) >>> 0;
        res2 = (this[_h][$leftShift](n) | this[_m][$rightShift](22 - dart.notNull(n))) >>> 0;
      } else if (dart.notNull(n) < 44) {
        res0 = 0;
        res1 = this[_l][$leftShift](dart.notNull(n) - 22);
        res2 = (this[_m][$leftShift](dart.notNull(n) - 22) | this[_l][$rightShift](44 - dart.notNull(n))) >>> 0;
      } else {
        res0 = 0;
        res1 = 0;
        res2 = this[_l][$leftShift](dart.notNull(n) - 44);
      }
      return fixnum.Int64._masked(res0, res1, res2);
    }
    ['>>'](n) {
      if (dart.notNull(n) < 0) {
        dart.throw(new core.ArgumentError.value(n));
      }
      if (dart.notNull(n) >= 64) {
        return dart.test(this.isNegative) ? C6 || CT.C6 : fixnum.Int64.ZERO;
      }
      let res0 = null;
      let res1 = null;
      let res2 = null;
      let a2 = this[_h];
      let negative = (dart.notNull(a2) & 524288) !== 0;
      if (negative && 4194303 > 1048575) {
        a2 = dart.notNull(a2) + (4194303 - 1048575);
      }
      if (dart.notNull(n) < 22) {
        res2 = fixnum.Int64._shiftRight(a2, n);
        if (negative) {
          res2 = (dart.notNull(res2) | (1048575 & ~(1048575)[$rightShift](n) >>> 0) >>> 0) >>> 0;
        }
        res1 = (dart.notNull(fixnum.Int64._shiftRight(this[_m], n)) | a2[$leftShift](22 - dart.notNull(n))) >>> 0;
        res0 = (dart.notNull(fixnum.Int64._shiftRight(this[_l], n)) | this[_m][$leftShift](22 - dart.notNull(n))) >>> 0;
      } else if (dart.notNull(n) < 44) {
        res2 = negative ? 1048575 : 0;
        res1 = fixnum.Int64._shiftRight(a2, dart.notNull(n) - 22);
        if (negative) {
          res1 = (dart.notNull(res1) | (4194303 & ~(4194303)[$rightShift](dart.notNull(n) - 22) >>> 0) >>> 0) >>> 0;
        }
        res0 = (dart.notNull(fixnum.Int64._shiftRight(this[_m], dart.notNull(n) - 22)) | a2[$leftShift](44 - dart.notNull(n))) >>> 0;
      } else {
        res2 = negative ? 1048575 : 0;
        res1 = negative ? 4194303 : 0;
        res0 = fixnum.Int64._shiftRight(a2, dart.notNull(n) - 44);
        if (negative) {
          res0 = (dart.notNull(res0) | (4194303 & ~(4194303)[$rightShift](dart.notNull(n) - 44) >>> 0) >>> 0) >>> 0;
        }
      }
      return fixnum.Int64._masked(res0, res1, res2);
    }
    shiftRightUnsigned(n) {
      if (dart.notNull(n) < 0) {
        dart.throw(new core.ArgumentError.value(n));
      }
      if (dart.notNull(n) >= 64) {
        return fixnum.Int64.ZERO;
      }
      let res0 = null;
      let res1 = null;
      let res2 = null;
      let a2 = (1048575 & dart.notNull(this[_h])) >>> 0;
      if (dart.notNull(n) < 22) {
        res2 = a2[$rightShift](n);
        res1 = (this[_m][$rightShift](n) | a2[$leftShift](22 - dart.notNull(n))) >>> 0;
        res0 = (this[_l][$rightShift](n) | this[_m][$leftShift](22 - dart.notNull(n))) >>> 0;
      } else if (dart.notNull(n) < 44) {
        res2 = 0;
        res1 = a2[$rightShift](dart.notNull(n) - 22);
        res0 = (this[_m][$rightShift](dart.notNull(n) - 22) | this[_h][$leftShift](44 - dart.notNull(n))) >>> 0;
      } else {
        res2 = 0;
        res1 = 0;
        res0 = a2[$rightShift](dart.notNull(n) - 44);
      }
      return fixnum.Int64._masked(res0, res1, res2);
    }
    _equals(other) {
      if (other == null) return false;
      let o = null;
      if (Int64L().is(other)) {
        o = other;
      } else if (intL().is(other)) {
        if (this[_h] === 0 && this[_m] === 0) return this[_l] == other;
        if ((4194303 & dart.notNull(other)) >>> 0 === other) return false;
        o = fixnum.Int64.new(other);
      } else if (Int32L().is(other)) {
        o = other.toInt64();
      }
      if (o != null) {
        return this[_l] == o[_l] && this[_m] == o[_m] && this[_h] == o[_h];
      }
      return false;
    }
    compareTo(other) {
      return this[_compareTo](other);
    }
    [_compareTo](other) {
      let o = fixnum.Int64._promote(other);
      let signa = this[_h][$rightShift](20 - 1);
      let signb = o[_h][$rightShift](20 - 1);
      if (signa !== signb) {
        return signa === 0 ? 1 : -1;
      }
      if (dart.notNull(this[_h]) > dart.notNull(o[_h])) {
        return 1;
      } else if (dart.notNull(this[_h]) < dart.notNull(o[_h])) {
        return -1;
      }
      if (dart.notNull(this[_m]) > dart.notNull(o[_m])) {
        return 1;
      } else if (dart.notNull(this[_m]) < dart.notNull(o[_m])) {
        return -1;
      }
      if (dart.notNull(this[_l]) > dart.notNull(o[_l])) {
        return 1;
      } else if (dart.notNull(this[_l]) < dart.notNull(o[_l])) {
        return -1;
      }
      return 0;
    }
    ['<'](other) {
      return dart.notNull(this[_compareTo](other)) < 0;
    }
    ['<='](other) {
      return dart.notNull(this[_compareTo](other)) <= 0;
    }
    ['>'](other) {
      return dart.notNull(this[_compareTo](other)) > 0;
    }
    ['>='](other) {
      return dart.notNull(this[_compareTo](other)) >= 0;
    }
    get isEven() {
      return (dart.notNull(this[_l]) & 1) === 0;
    }
    get isMaxValue() {
      return this[_h] === (1048575)[$rightShift](1) && this[_m] === 4194303 && this[_l] === 4194303;
    }
    get isMinValue() {
      return this[_h] === 524288 && this[_m] === 0 && this[_l] === 0;
    }
    get isNegative() {
      return (dart.notNull(this[_h]) & 524288) !== 0;
    }
    get isOdd() {
      return (dart.notNull(this[_l]) & 1) === 1;
    }
    get isZero() {
      return this[_h] === 0 && this[_m] === 0 && this[_l] === 0;
    }
    get bitLength() {
      if (dart.test(this.isZero)) return 0;
      let a0 = this[_l];
      let a1 = this[_m];
      let a2 = this[_h];
      if (dart.test(this.isNegative)) {
        a0 = (4194303 & ~dart.notNull(a0) >>> 0) >>> 0;
        a1 = (4194303 & ~dart.notNull(a1) >>> 0) >>> 0;
        a2 = (1048575 & ~dart.notNull(a2) >>> 0) >>> 0;
      }
      if (a2 !== 0) return 44 + a2[$bitLength];
      if (a1 !== 0) return 22 + a1[$bitLength];
      return a0[$bitLength];
    }
    get hashCode() {
      let bottom = ((dart.notNull(this[_m]) & 1023)[$leftShift](22) | dart.notNull(this[_l])) >>> 0;
      let top = (dart.notNull(this[_h]) << 12 | dart.notNull(this[_m]) >> 10 & 4095) >>> 0;
      return (bottom ^ top) >>> 0;
    }
    abs() {
      return dart.test(this.isNegative) ? this._negate() : this;
    }
    clamp(lowerLimit, upperLimit) {
      let lower = fixnum.Int64._promote(lowerLimit);
      let upper = fixnum.Int64._promote(upperLimit);
      if (dart.test(this['<'](lower))) return lower;
      if (dart.test(this['>'](upper))) return upper;
      return this;
    }
    numberOfLeadingZeros() {
      let b2 = fixnum.Int32._numberOfLeadingZeros(this[_h]);
      if (b2 === 32) {
        let b1 = fixnum.Int32._numberOfLeadingZeros(this[_m]);
        if (b1 === 32) {
          return dart.notNull(fixnum.Int32._numberOfLeadingZeros(this[_l])) + 32;
        } else {
          return dart.notNull(b1) + 20 - (32 - 22);
        }
      } else {
        return dart.notNull(b2) - (32 - 20);
      }
    }
    numberOfTrailingZeros() {
      let zeros = fixnum.Int32._numberOfTrailingZeros(this[_l]);
      if (dart.notNull(zeros) < 32) {
        return zeros;
      }
      zeros = fixnum.Int32._numberOfTrailingZeros(this[_m]);
      if (dart.notNull(zeros) < 32) {
        return 22 + dart.notNull(zeros);
      }
      zeros = fixnum.Int32._numberOfTrailingZeros(this[_h]);
      if (dart.notNull(zeros) < 32) {
        return 44 + dart.notNull(zeros);
      }
      return 64;
    }
    toSigned(width) {
      if (dart.notNull(width) < 1 || dart.notNull(width) > 64) dart.throw(new core.RangeError.range(width, 1, 64));
      if (dart.notNull(width) > 44) {
        return fixnum.Int64._masked(this[_l], this[_m], this[_h][$toSigned](dart.notNull(width) - 44));
      } else if (dart.notNull(width) > 22) {
        let m = this[_m][$toSigned](dart.notNull(width) - 22);
        return m[$isNegative] ? fixnum.Int64._masked(this[_l], m, 1048575) : fixnum.Int64._masked(this[_l], m, 0);
      } else {
        let l = this[_l][$toSigned](width);
        return l[$isNegative] ? fixnum.Int64._masked(l, 4194303, 1048575) : fixnum.Int64._masked(l, 0, 0);
      }
    }
    toUnsigned(width) {
      if (dart.notNull(width) < 0 || dart.notNull(width) > 64) dart.throw(new core.RangeError.range(width, 0, 64));
      if (dart.notNull(width) > 44) {
        let h = this[_h][$toUnsigned](dart.notNull(width) - 44);
        return fixnum.Int64._masked(this[_l], this[_m], h);
      } else if (dart.notNull(width) > 22) {
        let m = this[_m][$toUnsigned](dart.notNull(width) - 22);
        return fixnum.Int64._masked(this[_l], m, 0);
      } else {
        let l = this[_l][$toUnsigned](width);
        return fixnum.Int64._masked(l, 0, 0);
      }
    }
    toBytes() {
      let result = ListOfintL().new(8);
      result[$_set](0, dart.notNull(this[_l]) & 255);
      result[$_set](1, dart.notNull(this[_l]) >> 8 & 255);
      result[$_set](2, dart.notNull(this[_m]) << 6 & 252 | dart.notNull(this[_l]) >> 16 & 63);
      result[$_set](3, dart.notNull(this[_m]) >> 2 & 255);
      result[$_set](4, dart.notNull(this[_m]) >> 10 & 255);
      result[$_set](5, dart.notNull(this[_h]) << 4 & 240 | dart.notNull(this[_m]) >> 18 & 15);
      result[$_set](6, dart.notNull(this[_h]) >> 4 & 255);
      result[$_set](7, dart.notNull(this[_h]) >> 12 & 255);
      return result;
    }
    toDouble() {
      return this.toInt()[$toDouble]();
    }
    toInt() {
      let l = this[_l];
      let m = this[_m];
      let h = this[_h];
      if ((dart.notNull(this[_h]) & 524288) !== 0) {
        l = (4194303 & ~dart.notNull(this[_l]) >>> 0) >>> 0;
        m = (4194303 & ~dart.notNull(this[_m]) >>> 0) >>> 0;
        h = (1048575 & ~dart.notNull(this[_h]) >>> 0) >>> 0;
        return -(1 + dart.notNull(l) + 4194304 * dart.notNull(m) + 17592186044416 * dart.notNull(h));
      } else {
        return dart.notNull(l) + 4194304 * dart.notNull(m) + 17592186044416 * dart.notNull(h);
      }
    }
    toInt32() {
      return new fixnum.Int32.new(((dart.notNull(this[_m]) & 1023)[$leftShift](22) | dart.notNull(this[_l])) >>> 0);
    }
    toInt64() {
      return this;
    }
    toString() {
      return this[_toRadixString](10);
    }
    toHexString() {
      if (dart.test(this.isZero)) return "0";
      let x = this;
      let hexStr = "";
      while (!dart.test(x.isZero)) {
        let digit = dart.notNull(x[_l]) & 15;
        hexStr = dart.str(this[_hexDigit](digit)) + hexStr;
        x = x.shiftRightUnsigned(4);
      }
      return hexStr;
    }
    toStringUnsigned() {
      return fixnum.Int64._toRadixStringUnsigned(10, this[_l], this[_m], this[_h], "");
    }
    toRadixStringUnsigned(radix) {
      return fixnum.Int64._toRadixStringUnsigned(fixnum.Int32._validateRadix(radix), this[_l], this[_m], this[_h], "");
    }
    toRadixString(radix) {
      return this[_toRadixString](fixnum.Int32._validateRadix(radix));
    }
    [_toRadixString](radix) {
      let d0 = this[_l];
      let d1 = this[_m];
      let d2 = this[_h];
      let sign = "";
      if ((dart.notNull(d2) & 524288) !== 0) {
        sign = "-";
        d0 = 0 - dart.notNull(d0);
        let borrow = d0[$rightShift](22) & 1;
        d0 = (dart.notNull(d0) & 4194303) >>> 0;
        d1 = 0 - dart.notNull(d1) - borrow;
        borrow = d1[$rightShift](22) & 1;
        d1 = (dart.notNull(d1) & 4194303) >>> 0;
        d2 = 0 - dart.notNull(d2) - borrow;
        d2 = (dart.notNull(d2) & 1048575) >>> 0;
      }
      return fixnum.Int64._toRadixStringUnsigned(radix, d0, d1, d2, sign);
    }
    static _toRadixStringUnsigned(radix, d0, d1, d2, sign) {
      if (d0 === 0 && d1 === 0 && d2 === 0) return "0";
      let d4 = (dart.notNull(d2) << 4 | d1[$rightShift](18)) >>> 0;
      let d3 = dart.notNull(d1) >> 8 & 1023;
      d2 = (dart.notNull(d1) << 2 | d0[$rightShift](20)) & 1023;
      d1 = dart.notNull(d0) >> 10 & 1023;
      d0 = dart.notNull(d0) & 1023;
      let fatRadix = fixnum.Int64._fatRadixTable[$_get](radix);
      let chunk1 = "";
      let chunk2 = "";
      let chunk3 = "";
      while (!(d4 === 0 && d3 === 0)) {
        let q = (d4 / dart.notNull(fatRadix))[$truncate]();
        let r = d4 - q * dart.notNull(fatRadix);
        d4 = q;
        d3 = d3 + (r << 10 >>> 0);
        q = (d3 / dart.notNull(fatRadix))[$truncate]();
        r = d3 - q * dart.notNull(fatRadix);
        d3 = q;
        d2 = dart.notNull(d2) + (r << 10 >>> 0);
        q = (dart.notNull(d2) / dart.notNull(fatRadix))[$truncate]();
        r = dart.notNull(d2) - q * dart.notNull(fatRadix);
        d2 = q;
        d1 = dart.notNull(d1) + (r << 10 >>> 0);
        q = (dart.notNull(d1) / dart.notNull(fatRadix))[$truncate]();
        r = dart.notNull(d1) - q * dart.notNull(fatRadix);
        d1 = q;
        d0 = dart.notNull(d0) + (r << 10 >>> 0);
        q = (dart.notNull(d0) / dart.notNull(fatRadix))[$truncate]();
        r = dart.notNull(d0) - q * dart.notNull(fatRadix);
        d0 = q;
        if (!(chunk3 === "")) dart.assertFailed(null, L1, 742, 14, "chunk3 == \"\"");
        chunk3 = chunk2;
        chunk2 = chunk1;
        chunk1 = (dart.notNull(fatRadix) + r)[$toRadixString](radix)[$substring](1);
      }
      let residue = (dart.notNull(d2) << 20 >>> 0) + (dart.notNull(d1) << 10 >>> 0) + dart.notNull(d0);
      let leadingDigits = residue === 0 ? "" : residue[$toRadixString](radix);
      return dart.str(sign) + leadingDigits + chunk1 + chunk2 + chunk3;
    }
    toDebugString() {
      return "Int64[_l=" + dart.str(this[_l]) + ", _m=" + dart.str(this[_m]) + ", _h=" + dart.str(this[_h]) + "]";
    }
    static _masked(a0, a1, a2) {
      return new fixnum.Int64._bits((4194303 & dart.notNull(a0)) >>> 0, (4194303 & dart.notNull(a1)) >>> 0, (1048575 & dart.notNull(a2)) >>> 0);
    }
    static _sub(a0, a1, a2, b0, b1, b2) {
      let diff0 = dart.notNull(a0) - dart.notNull(b0);
      let diff1 = dart.notNull(a1) - dart.notNull(b1) - (diff0[$rightShift](22) & 1);
      let diff2 = dart.notNull(a2) - dart.notNull(b2) - (diff1[$rightShift](22) & 1);
      return fixnum.Int64._masked(diff0, diff1, diff2);
    }
    static _negate(b0, b1, b2) {
      return fixnum.Int64._sub(0, 0, 0, b0, b1, b2);
    }
    [_hexDigit](digit) {
      return "0123456789ABCDEF"[$_get](digit);
    }
    static _shiftRight(x, n) {
      if (dart.notNull(x) >= 0) {
        return x[$rightShift](n);
      } else {
        let shifted = x[$rightShift](n);
        if (shifted >= 2147483648) {
          shifted = shifted - 4294967296;
        }
        return shifted;
      }
    }
    static _divide(a, other, what) {
      let b = fixnum.Int64._promote(other);
      if (dart.test(b.isZero)) {
        dart.throw(C7 || CT.C7);
      }
      if (dart.test(a.isZero)) return fixnum.Int64.ZERO;
      let aNeg = a.isNegative;
      let bNeg = b.isNegative;
      a = a.abs();
      b = b.abs();
      let a0 = a[_l];
      let a1 = a[_m];
      let a2 = a[_h];
      let b0 = b[_l];
      let b1 = b[_m];
      let b2 = b[_h];
      return fixnum.Int64._divideHelper(a0, a1, a2, aNeg, b0, b1, b2, bNeg, what);
    }
    static _divideHelper(a0, a1, a2, aNeg, b0, b1, b2, bNeg, what) {
      let q0 = 0;
      let q1 = 0;
      let q2 = 0;
      let r0 = 0;
      let r1 = 0;
      let r2 = 0;
      if (b2 === 0 && b1 === 0 && dart.notNull(b0) < (1)[$leftShift](30 - 22)) {
        q2 = (dart.notNull(a2) / dart.notNull(b0))[$truncate]();
        let carry = dart.notNull(a2) - q2 * dart.notNull(b0);
        let d1 = dart.notNull(a1) + carry[$leftShift](22);
        q1 = (d1 / dart.notNull(b0))[$truncate]();
        carry = d1 - q1 * dart.notNull(b0);
        let d0 = dart.notNull(a0) + carry[$leftShift](22);
        q0 = (d0 / dart.notNull(b0))[$truncate]();
        r0 = d0 - q0 * dart.notNull(b0);
      } else {
        let ad = dart.notNull(a0) + 4194304 * dart.notNull(a1) + 17592186044416.0 * dart.notNull(a2);
        let bd = dart.notNull(b0) + 4194304 * dart.notNull(b1) + 17592186044416.0 * dart.notNull(b2);
        let qd = (ad / bd)[$floorToDouble]();
        let q2d = (qd / 17592186044416.0)[$floorToDouble]();
        qd = qd - 17592186044416.0 * q2d;
        let q1d = (qd / 4194304)[$floorToDouble]();
        let q0d = qd - 4194304 * q1d;
        q2 = q2d[$toInt]();
        q1 = q1d[$toInt]();
        q0 = q0d[$toInt]();
        if (!(q0 + 4194304 * q1 + 17592186044416.0 * q2 === (ad / bd)[$floorToDouble]())) dart.assertFailed(null, L1, 936, 14, "q0 + K1 * q1 + K2 * q2 == (ad / bd).floorToDouble()");
        if (!(q2 === 0 || b2 === 0)) dart.assertFailed(null, L1, 937, 14, "q2 == 0 || b2 == 0");
        let p0d = q0d * dart.notNull(b0);
        let p0carry = (p0d / 4194304)[$floorToDouble]();
        p0d = p0d - p0carry * 4194304;
        let p1d = q1d * dart.notNull(b0) + q0d * dart.notNull(b1) + p0carry;
        let p1carry = (p1d / 4194304)[$floorToDouble]();
        p1d = p1d - p1carry * 4194304;
        let p2d = q2d * dart.notNull(b0) + q1d * dart.notNull(b1) + q0d * dart.notNull(b2) + p1carry;
        if (!(p2d <= 1048575)) dart.assertFailed(null, L1, 948, 14, "p2d <= _MASK2");
        let diff0 = dart.notNull(a0) - p0d[$toInt]();
        let diff1 = dart.notNull(a1) - p1d[$toInt]() - (diff0[$rightShift](22) & 1);
        let diff2 = dart.notNull(a2) - p2d[$toInt]() - (diff1[$rightShift](22) & 1);
        r0 = (4194303 & diff0) >>> 0;
        r1 = (4194303 & diff1) >>> 0;
        r2 = (1048575 & diff2) >>> 0;
        while (r2 >= 524288 || r2 > dart.notNull(b2) || r2 === b2 && (r1 > dart.notNull(b1) || r1 === b1 && r0 >= dart.notNull(b0))) {
          let m = (r2 & 524288) === 0 ? 1 : -1;
          let d0 = r0 - m * dart.notNull(b0);
          let d1 = r1 - m * (dart.notNull(b1) + (d0[$rightShift](22) & 1));
          let d2 = r2 - m * (dart.notNull(b2) + (d1[$rightShift](22) & 1));
          r0 = (4194303 & d0) >>> 0;
          r1 = (4194303 & d1) >>> 0;
          r2 = (1048575 & d2) >>> 0;
          d0 = q0 + m;
          d1 = q1 + m * (d0[$rightShift](22) & 1);
          d2 = q2 + m * (d1[$rightShift](22) & 1);
          q0 = (4194303 & d0) >>> 0;
          q1 = (4194303 & d1) >>> 0;
          q2 = (1048575 & d2) >>> 0;
        }
      }
      if (!dart.test(fixnum.Int64.ZERO['<='](new fixnum.Int64._bits(r0, r1, r2)))) dart.assertFailed(null, L1, 984, 12, "Int64.ZERO <= Int64._bits(r0, r1, r2)");
      if (!(r2 < dart.notNull(b2) || dart.test(new fixnum.Int64._bits(r0, r1, r2)['<'](new fixnum.Int64._bits(b0, b1, b2))))) dart.assertFailed(null, L1, 985, 12, "r2 < b2 || // Handles case where B = -(MIN_VALUE)\n        Int64._bits(r0, r1, r2) < Int64._bits(b0, b1, b2)");
      if (!(what === 1 || what === 3 || what === 2)) dart.assertFailed(null, L1, 988, 12, "what == _RETURN_DIV || what == _RETURN_MOD || what == _RETURN_REM");
      if (what === 1) {
        if (!dart.equals(aNeg, bNeg)) return fixnum.Int64._negate(q0, q1, q2);
        return fixnum.Int64._masked(q0, q1, q2);
      }
      if (!dart.test(aNeg)) {
        return fixnum.Int64._masked(r0, r1, r2);
      }
      if (what === 3) {
        if (r0 === 0 && r1 === 0 && r2 === 0) {
          return fixnum.Int64.ZERO;
        } else {
          return fixnum.Int64._sub(b0, b1, b2, r0, r1, r2);
        }
      } else {
        return fixnum.Int64._negate(r0, r1, r2);
      }
    }
  };
  (fixnum.Int64._bits = function(_l, _m, _h) {
    this[_l$] = _l;
    this[_m$] = _m;
    this[_h$] = _h;
    ;
  }).prototype = fixnum.Int64.prototype;
  dart.addTypeTests(fixnum.Int64);
  dart.addTypeCaches(fixnum.Int64);
  const _l$ = Int64__l;
  const _m$ = Int64__m;
  const _h$ = Int64__h;
  fixnum.Int64[dart.implements] = () => [fixnum.IntX];
  dart.setMethodSignature(fixnum.Int64, () => ({
    __proto__: dart.getMethods(fixnum.Int64.__proto__),
    '+': dart.fnType(dart.legacy(fixnum.Int64), [dart.dynamic]),
    '-': dart.fnType(dart.legacy(fixnum.Int64), [dart.dynamic]),
    _negate: dart.fnType(dart.legacy(fixnum.Int64), []),
    '*': dart.fnType(dart.legacy(fixnum.Int64), [dart.dynamic]),
    '%': dart.fnType(dart.legacy(fixnum.Int64), [dart.dynamic]),
    '~/': dart.fnType(dart.legacy(fixnum.Int64), [dart.dynamic]),
    remainder: dart.fnType(dart.legacy(fixnum.Int64), [dart.dynamic]),
    '&': dart.fnType(dart.legacy(fixnum.Int64), [dart.dynamic]),
    '|': dart.fnType(dart.legacy(fixnum.Int64), [dart.dynamic]),
    '^': dart.fnType(dart.legacy(fixnum.Int64), [dart.dynamic]),
    '~': dart.fnType(dart.legacy(fixnum.Int64), []),
    '<<': dart.fnType(dart.legacy(fixnum.Int64), [dart.legacy(core.int)]),
    '>>': dart.fnType(dart.legacy(fixnum.Int64), [dart.legacy(core.int)]),
    shiftRightUnsigned: dart.fnType(dart.legacy(fixnum.Int64), [dart.legacy(core.int)]),
    _equals: dart.fnType(dart.legacy(core.bool), [dart.dynamic]),
    [$_equals]: dart.fnType(dart.legacy(core.bool), [dart.dynamic]),
    compareTo: dart.fnType(dart.legacy(core.int), [dart.legacy(core.Object)]),
    [$compareTo]: dart.fnType(dart.legacy(core.int), [dart.legacy(core.Object)]),
    [_compareTo]: dart.fnType(dart.legacy(core.int), [dart.dynamic]),
    '<': dart.fnType(dart.legacy(core.bool), [dart.dynamic]),
    '<=': dart.fnType(dart.legacy(core.bool), [dart.dynamic]),
    '>': dart.fnType(dart.legacy(core.bool), [dart.dynamic]),
    '>=': dart.fnType(dart.legacy(core.bool), [dart.dynamic]),
    abs: dart.fnType(dart.legacy(fixnum.Int64), []),
    clamp: dart.fnType(dart.legacy(fixnum.Int64), [dart.dynamic, dart.dynamic]),
    numberOfLeadingZeros: dart.fnType(dart.legacy(core.int), []),
    numberOfTrailingZeros: dart.fnType(dart.legacy(core.int), []),
    toSigned: dart.fnType(dart.legacy(fixnum.Int64), [dart.legacy(core.int)]),
    toUnsigned: dart.fnType(dart.legacy(fixnum.Int64), [dart.legacy(core.int)]),
    toBytes: dart.fnType(dart.legacy(core.List$(dart.legacy(core.int))), []),
    toDouble: dart.fnType(dart.legacy(core.double), []),
    toInt: dart.fnType(dart.legacy(core.int), []),
    toInt32: dart.fnType(dart.legacy(fixnum.Int32), []),
    toInt64: dart.fnType(dart.legacy(fixnum.Int64), []),
    toString: dart.fnType(dart.legacy(core.String), []),
    [$toString]: dart.fnType(dart.legacy(core.String), []),
    toHexString: dart.fnType(dart.legacy(core.String), []),
    toStringUnsigned: dart.fnType(dart.legacy(core.String), []),
    toRadixStringUnsigned: dart.fnType(dart.legacy(core.String), [dart.legacy(core.int)]),
    toRadixString: dart.fnType(dart.legacy(core.String), [dart.legacy(core.int)]),
    [_toRadixString]: dart.fnType(dart.legacy(core.String), [dart.legacy(core.int)]),
    toDebugString: dart.fnType(dart.legacy(core.String), []),
    [_hexDigit]: dart.fnType(dart.legacy(core.String), [dart.legacy(core.int)])
  }));
  dart.setGetterSignature(fixnum.Int64, () => ({
    __proto__: dart.getGetters(fixnum.Int64.__proto__),
    isEven: dart.legacy(core.bool),
    isMaxValue: dart.legacy(core.bool),
    isMinValue: dart.legacy(core.bool),
    isNegative: dart.legacy(core.bool),
    isOdd: dart.legacy(core.bool),
    isZero: dart.legacy(core.bool),
    bitLength: dart.legacy(core.int),
    hashCode: dart.legacy(core.int),
    [$hashCode]: dart.legacy(core.int)
  }));
  dart.setLibraryUri(fixnum.Int64, L0);
  dart.setFieldSignature(fixnum.Int64, () => ({
    __proto__: dart.getFields(fixnum.Int64.__proto__),
    [_l]: dart.finalFieldType(dart.legacy(core.int)),
    [_m]: dart.finalFieldType(dart.legacy(core.int)),
    [_h]: dart.finalFieldType(dart.legacy(core.int))
  }));
  dart.defineExtensionMethods(fixnum.Int64, ['_equals', 'compareTo', 'toString']);
  dart.defineExtensionAccessors(fixnum.Int64, ['hashCode']);
  dart.defineLazy(fixnum.Int64, {
    /*fixnum.Int64._BITS*/get _BITS() {
      return 22;
    },
    /*fixnum.Int64._BITS01*/get _BITS01() {
      return 44;
    },
    /*fixnum.Int64._BITS2*/get _BITS2() {
      return 20;
    },
    /*fixnum.Int64._MASK*/get _MASK() {
      return 4194303;
    },
    /*fixnum.Int64._MASK2*/get _MASK2() {
      return 1048575;
    },
    /*fixnum.Int64._SIGN_BIT*/get _SIGN_BIT() {
      return 19;
    },
    /*fixnum.Int64._SIGN_BIT_MASK*/get _SIGN_BIT_MASK() {
      return 524288;
    },
    /*fixnum.Int64.MAX_VALUE*/get MAX_VALUE() {
      return C8 || CT.C8;
    },
    /*fixnum.Int64.MIN_VALUE*/get MIN_VALUE() {
      return C9 || CT.C9;
    },
    /*fixnum.Int64.ZERO*/get ZERO() {
      return C10 || CT.C10;
    },
    /*fixnum.Int64.ONE*/get ONE() {
      return C11 || CT.C11;
    },
    /*fixnum.Int64.TWO*/get TWO() {
      return C12 || CT.C12;
    },
    /*fixnum.Int64._fatRadixTable*/get _fatRadixTable() {
      return C13 || CT.C13;
    },
    /*fixnum.Int64._RETURN_DIV*/get _RETURN_DIV() {
      return 1;
    },
    /*fixnum.Int64._RETURN_REM*/get _RETURN_REM() {
      return 2;
    },
    /*fixnum.Int64._RETURN_MOD*/get _RETURN_MOD() {
      return 3;
    }
  }, true);
  dart.trackLibraries("packages/fixnum/fixnum", {
    "package:fixnum/fixnum.dart": fixnum
  }, {
    "package:fixnum/fixnum.dart": ["src/intx.dart", "src/int32.dart", "src/int64.dart"]
  }, '{"version":3,"sourceRoot":"","sources":["src/intx.dart","src/int32.dart","src/int64.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;EA+LA;;;;;;;;;;;;;;;IC7EY;;;;;;wBAhFkB;AAC1B,UAAM,aAAF,CAAC,WAAe,aAAF,CAAC;AACjB,cAAS,cAAF,CAAC;YACH,KAAM,aAAF,CAAC,WAAe,aAAF,CAAC;AACxB,cAAS,AAAQ,cAAV,CAAC,SAAW;YACd,KAAM,aAAF,CAAC,WAAe,aAAF,CAAC;AACxB,cAAS,AAAQ,cAAV,CAAC,SAAW;;AAEnB,cAAO,EAAC;;IAEZ;0BAE8B;AAC5B,UAAI,AAAE,kBAAG,KAAK,KAAU,aAAN,KAAK,KAAI,IAAI,MAAO,MAAK;AACE,MAA7C,WAAiB,0BAAM,KAAK,EAAE,GAAG,IAAI;IACvC;sBAK+B,GAAO;AACf,MAArB,4BAAe,KAAK;AACd,cAAI;AACV,eAAS,IAAI,GAAG,AAAE,CAAD,GAAG,AAAE,CAAD,SAAS,IAAA,AAAC,CAAA;AACzB,gBAAI,AAAE,CAAD,cAAY,CAAC;AAClB,oBAAQ,0BAAa,CAAC;AAC1B,YAAU,aAAN,KAAK,IAAG,KAAW,aAAN,KAAK,kBAAI,KAAK;AACmB,UAAhD,WAAM,6BAAgB,AAAyB,mCAAF,CAAC;;AAEd,QAAlC,IAA0B,YAApB,AAAE,AAAS,CAAV,MAAG,KAAK,OAAI,KAAK;;AAE1B,YAAO,EAAC;IACV;oBAG6B;AAAM,kCAAU,eAAM,CAAC;IAAE;oBAGzB;AAAM,qCAAW,CAAC,EAAE;IAAG;qBAG3B;AAkBK,MAA5B,IAAE,aAAF,CAAC,KAAM,AAAE,AAAM,CAAP,cAAI,KAAK;AAC6B,MAA9C,IAAqB,CAAd,aAAF,CAAC,IAAG,cAAgB,AAAE,AAAM,CAAP,cAAI,KAAK;AACF,MAAjC,IAAQ,AAAY,aAAd,CAAC,IAAI,AAAE,CAAD,cAAI,KAAM;AACT,MAAb,IAAE,aAAF,CAAC,IAAK,AAAE,CAAD,cAAI;AACG,MAAd,IAAE,aAAF,CAAC,IAAK,AAAE,CAAD,cAAI;AACX,YAAU,cAAF,CAAC,IAAG;IACd;iCAGqC;AACxB,MAAX,IAAE,cAAF,CAAC,IAAI,AAAE,CAAD,cAAI;AACC,MAAX,IAAE,cAAF,CAAC,IAAI,AAAE,CAAD,cAAI;AACC,MAAX,IAAE,cAAF,CAAC,IAAI,AAAE,CAAD,cAAI;AACC,MAAX,IAAE,cAAF,CAAC,IAAI,AAAE,CAAD,cAAI;AACE,MAAZ,IAAE,cAAF,CAAC,IAAI,AAAE,CAAD,cAAI;AACV,YAAO,wBAAU,cAAC,CAAC;IACrB;kCAEsC;AAAM,oCAAmB,CAAN,cAAF,CAAC,IAAG,cAAC,CAAC,YAAI;IAAE;aAaxD;AACT,UAAQ,YAAJ,GAAG;AACL,cAAO,AAAI,IAAD;YACL,KAAQ,UAAJ,GAAG;AACZ,cAAO,IAAG;;AAEY,MAAxB,WAAM,2BAAc,GAAG;IACzB;UAgBgB;AACd,UAAU,YAAN,KAAK;AACP,cAAO,AAAK,AAAU,qBAAE,KAAK;;AAE/B,YAAO,sBAAS,aAAH,yBAAK,aAAO,KAAK;IAChC;UAEgB;AACd,UAAU,YAAN,KAAK;AACP,cAAO,AAAK,AAAU,qBAAE,KAAK;;AAE/B,YAAO,sBAAS,aAAH,yBAAK,aAAO,KAAK;IAChC;;AAEsB,kCAAM,cAAC;IAAG;UAEhB;AACd,UAAU,YAAN,KAAK;AACP,cAAO,AAAK,AAAU,qBAAE,KAAK;;AAG/B,YAAQ,AAAK,AAAU,AAAS,qBAAP,KAAK;IAChC;UAEiB;AACf,UAAU,YAAN,KAAK;AAEP,cAAQ,AAAK,AAAU,AAAS,qBAAP,KAAK;;AAEhC,YAAO,sBAAM,AAAG,kBAAE,aAAO,KAAK;IAChC;WAEkB;AAChB,UAAU,YAAN,KAAK;AACP,cAAQ,AAAK,AAAU,AAAU,sBAAP,KAAK;;AAEjC,YAAO,sBAAS,cAAH,yBAAM,aAAO,KAAK;IACjC;cAEgB;AACd,UAAU,YAAN,KAAK;AACD,gBAAI,AAAK;AACf,cAAQ,AAAE,AAAwB,EAAzB,MAAI,AAAE,AAAU,CAAX,OAAI,KAAK,OAAI,KAAK;;AAElC,YAAwC,aAAhC,AAAK,UAAG,AAAK,AAAU,WAAP,KAAK,OAAI,KAAK;IACxC;UAEiB;AACf,UAAU,YAAN,KAAK;AACP,cAAQ,AAAK,AAAU,AAAS,qBAAP,KAAK;;AAEhC,YAAO,sBAAS,cAAH,yBAAK,aAAO,KAAK;IAChC;UAEiB;AACf,UAAU,YAAN,KAAK;AACP,cAAQ,AAAK,AAAU,AAAS,qBAAP,KAAK;;AAEhC,YAAO,sBAAS,cAAH,yBAAK,aAAO,KAAK;IAChC;UAEiB;AACf,UAAU,YAAN,KAAK;AACP,cAAQ,AAAK,AAAU,AAAS,qBAAP,KAAK;;AAEhC,YAAO,sBAAS,cAAH,yBAAK,aAAO,KAAK;IAChC;;AAEsB,kCAAM,cAAC;IAAG;WAEV;AACpB,UAAM,aAAF,CAAC,IAAG;AACgB,QAAtB,WAAM,2BAAc,CAAC;;AAEvB,UAAM,aAAF,CAAC,KAAI;AACP,cAAO;;AAET,YAAO,sBAAM,AAAG,qBAAG,CAAC;IACtB;WAEsB;AACpB,UAAM,aAAF,CAAC,IAAG;AACgB,QAAtB,WAAM,2BAAc,CAAC;;AAEvB,UAAM,aAAF,CAAC,KAAI;AACP,yBAAO,iCAAyC;;AAE9C;AACJ,UAAO,aAAH,aAAM;AACO,QAAf,QAAQ,AAAG,sBAAG,CAAC;;AAE6B,QAA5C,QAAkB,CAAT,AAAG,sBAAG,CAAC,IAAgB,CAAX,wBAAe,AAAG,kBAAE,CAAC;;AAE5C,YAAO,sBAAM,KAAK;IACpB;uBAE6B;AAC3B,UAAM,aAAF,CAAC,IAAG;AACgB,QAAtB,WAAM,2BAAc,CAAC;;AAEvB,UAAM,aAAF,CAAC,KAAI;AACP,cAAO;;AAEL;AACJ,UAAO,aAAH,aAAM;AACO,QAAf,QAAQ,AAAG,sBAAG,CAAC;;AAE0B,QAAzC,QAAkB,CAAT,AAAG,sBAAG,CAAC,IAAQ,AAAa,CAAf,eAAM,AAAG,kBAAE,CAAC,KAAK;;AAEzC,YAAO,sBAAM,KAAK;IACpB;;UAIiB;AACf,UAAU,YAAN,KAAK;AACP,cAAO,AAAG,aAAG,AAAM,KAAD;YACb,KAAU,YAAN,KAAK;AACd,cAAsB,aAAf,AAAK,gBAAa,KAAK;YACzB,KAAU,UAAN,KAAK;AACd,cAAO,AAAG,aAAG,KAAK;;AAEpB,YAAO;IACT;cAEc;AACZ,UAAU,YAAN,KAAK;AACP,cAAO,AAAK,AAAU,0BAAU,KAAK;;AAEvC,YAAO,AAAG,sBAAU,aAAO,KAAK;IAClC;UAEgB;AACd,UAAU,YAAN,KAAK;AACP,cAAO,AAAK,AAAU,qBAAE,KAAK;;AAE/B,YAAU,cAAH,yBAAK,aAAO,KAAK;IAC1B;WAEiB;AACf,UAAU,YAAN,KAAK;AACP,cAAO,AAAK,AAAU,sBAAG,KAAK;;AAEhC,YAAU,cAAH,0BAAM,aAAO,KAAK;IAC3B;UAEgB;AACd,UAAU,YAAN,KAAK;AACP,cAAO,AAAK,AAAU,qBAAE,KAAK;;AAE/B,YAAU,cAAH,yBAAK,aAAO,KAAK;IAC1B;WAEiB;AACf,UAAU,YAAN,KAAK;AACP,cAAO,AAAK,AAAU,sBAAG,KAAK;;AAEhC,YAAU,cAAH,0BAAM,aAAO,KAAK;IAC3B;;AAEmB,YAAW,EAAP,aAAH,YAAK,OAAQ;IAAC;;AACX,YAAA,AAAG,cAAG;IAAU;;AAChB,YAAA,AAAG,cAAG,CAAC;IAAU;;AACjB,YAAG,cAAH,YAAK;IAAC;;AACX,YAAW,EAAP,aAAH,YAAK,OAAQ;IAAC;;AACd,YAAA,AAAG,cAAG;IAAC;;AACL,YAAA,AAAG;IAAS;;AAEb;IAAE;;AAEP,YAAG,cAAH,YAAK,IAAI,qBAAM,cAAC,aAAM;IAAI;UAE7B,YAAY;AACtB,oBAAI,AAAK,UAAE,UAAU;AACnB,YAAe,WAAX,UAAU,GAAU,MAAO,AAAW,WAAD;AACzC,YAAe,UAAX,UAAU,GAAS,MAAO,sBAAM,UAAU;AACf,QAA/B,WAAM,2BAAc,UAAU;YACzB,eAAI,AAAK,UAAE,UAAU;AAC1B,YAAe,WAAX,UAAU,GAAU,MAAO,AAAW,WAAD;AACzC,YAAe,UAAX,UAAU,GAAS,MAAO,sBAAM,UAAU;AACf,QAA/B,WAAM,2BAAc,UAAU;;AAEhC,YAAO;IACT;;AAE8B,gDAAsB;IAAG;;AACxB,iDAAuB;IAAG;aAEtC;AACjB,UAAU,aAAN,KAAK,IAAG,KAAW,aAAN,KAAK,IAAG,IAAI,AAAoC,WAAnB,0BAAM,KAAK,EAAE,GAAG;AAC9D,YAAO,sBAAM,AAAG,oBAAS,KAAK;IAChC;eAEqB;AACnB,UAAU,aAAN,KAAK,IAAG,KAAW,aAAN,KAAK,IAAG,IAAI,AAAoC,WAAnB,0BAAM,KAAK,EAAE,GAAG;AAC9D,YAAO,sBAAM,AAAG,sBAAW,KAAK;IAClC;;AAGY,mBAAS,iBAAU;AACR,MAArB,AAAM,MAAA,QAAC,GAAQ,aAAH,YAAK;AACW,MAA5B,AAAM,MAAA,QAAC,GAAS,AAAM,aAAT,aAAM,IAAK;AACK,MAA7B,AAAM,MAAA,QAAC,GAAS,AAAO,aAAV,aAAM,KAAM;AACI,MAA7B,AAAM,MAAA,QAAC,GAAM,AAAG,AAAO,sBAAJ,MAAM;AACzB,YAAO,OAAM;IACf;;AAEqB,YAAA,AAAG;IAAU;;AACnB;IAAE;;AACE;IAAI;;AACJ,8BAAM;IAAG;;AAEP,YAAG,eAAH;IAAa;;AACV,YAAA,AAAG,0BAAc;IAAG;kBACnB;AAAU,YAAA,AAAG,0BAAc,KAAK;IAAC;;qCArPhC;IAAQ,YAAE,CAAC;;;+BAI1B;IAAa,YAAmB,CAAd,aAAF,CAAC,IAAG,eAAiB,cAAF,CAAC,IAAG;;EAAW;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;MA7G1C,sBAAS;;;MAIT,sBAAS;;;MAGT,iBAAI;;;MAGJ,gBAAG;;;MAGH,gBAAG;;;MAGL,kBAAK;;;MACL,kBAAK;;;MACL,kBAAK;;;MACL,kBAAK;;;MACL,kBAAK;;;MACL,kBAAK;;;;;;;;;;;;;;;;;;;;;;ICZZ;;;;;;IAAI;;;;;;IAAI;;;;;;sBAkCa,GAAO;AACpC,YAAO,0BAAY,CAAC,EAAQ,4BAAe,KAAK;IAClD;uBAEgC,GAAO;AACjC,cAAI;AACH,qBAAW;AAChB,UAAI,AAAE,CAAD,GAAG,AAAE,CAAD,WAAW,AAAC,AAAI,CAAJ,QAAC,OAAM;AACX,QAAf,WAAW;AACR,QAAH,IAAA,AAAC,CAAA;;AAKH,YAAM,AAAE,CAAD,GAAG,AAAE,CAAD;AACiC,QAA1C,WAAM,6BAAgB,AAAmB,4BAAH,CAAC;;AAGrC,eAAK;AAAG,eAAK;AAAG,eAAK;AACzB,aAAO,AAAE,CAAD,GAAG,AAAE,CAAD,SAAS,IAAA,AAAC,CAAA;AAChB,gBAAI,AAAE,CAAD,cAAY,CAAC;AAClB,oBAAc,0BAAa,CAAC;AAChC,YAAU,aAAN,KAAK,IAAG,KAAW,aAAN,KAAK,kBAAI,KAAK;AACmB,UAAhD,WAAM,6BAAgB,AAAyB,mCAAF,CAAC;;AAKzB,QAAvB,KAAK,AAAG,AAAQ,EAAT,gBAAG,KAAK,iBAAG,KAAK;AACnB,oBAAQ,AAAG,EAAD;AACC,QAAf,KAAW,WAAE,EAAE;AAEQ,QAAvB,KAAK,AAAG,AAAQ,EAAT,gBAAG,KAAK,IAAG,KAAK;AACJ,QAAnB,QAAQ,AAAG,EAAD;AACK,QAAf,KAAW,WAAE,EAAE;AAEQ,QAAvB,KAAK,AAAG,AAAQ,EAAT,gBAAG,KAAK,IAAG,KAAK;AACP,QAAhB,KAAY,WAAE,EAAE;;AAGlB,UAAI,QAAQ,EAAE,MAAO,sBAAQ,EAAE,EAAE,EAAE,EAAE,EAAE;AAEvC,YAAa,sBAAQ,EAAE,EAAE,EAAE,EAAE,EAAE;IACjC;oBAG6B;AAAM,sCAAY,CAAC,EAAE;IAAG;oBAGxB;AAAM,sCAAY,CAAC,EAAE;IAAG;eAOlC;AACb,eAAK;AAAG,eAAK;AAAG,eAAK;AACpB,qBAAW;AAChB,UAAU,aAAN,KAAK,IAAG;AACK,QAAf,WAAW;AACG,QAAd,QAAQ,cAAC,KAAK;;AAIY,MAA5B,KAAW,cAAN,KAAK,IAAI;AACc,MAA5B,QAAM,aAAN,KAAK,IAAI,AAAG,EAAD,GAAG;AACO,MAArB,KAAW,cAAN,KAAK,IAAI;AACO,MAArB,QAAM,aAAN,KAAK,IAAI,AAAG,EAAD,GAAG;AACJ,MAAV,KAAK,KAAK;AAEV,YAAO,SAAQ,GACH,qBAAc,wBAAE,EAAE,UAAQ,WAAE,EAAE,SAAS,WAAE,EAAE,WAC3C,qBAAQ,EAAE,EAAE,EAAE,EAAE,EAAE;IAChC;qBAEkC;AAC5B,gBAAe,aAAT,AAAK,KAAA,QAAC,MAAK;AACZ,MAAT,MAAA,AAAI,GAAD,IAAK;AACc,MAAtB,MAAI,CAAJ,GAAG,GAAa,aAAT,AAAK,KAAA,QAAC,MAAK;AACT,MAAT,MAAA,AAAI,GAAD,IAAK;AACc,MAAtB,MAAI,CAAJ,GAAG,GAAa,aAAT,AAAK,KAAA,QAAC,MAAK;AACT,MAAT,MAAA,AAAI,GAAD,IAAK;AACc,MAAtB,MAAI,CAAJ,GAAG,GAAa,aAAT,AAAK,KAAA,QAAC,MAAK;AAEd,mBAAkB,aAAT,AAAK,KAAA,QAAC,MAAK;AACZ,MAAZ,SAAA,AAAO,MAAD,IAAK;AACc,MAAzB,SAAO,CAAP,MAAM,GAAa,aAAT,AAAK,KAAA,QAAC,MAAK;AACT,MAAZ,SAAA,AAAO,MAAD,IAAK;AACc,MAAzB,SAAO,CAAP,MAAM,GAAa,aAAT,AAAK,KAAA,QAAC,MAAK;AACT,MAAZ,SAAA,AAAO,MAAD,IAAK;AACc,MAAzB,SAAO,CAAP,MAAM,GAAa,aAAT,AAAK,KAAA,QAAC,MAAK;AAErB,YAAa,uBAAS,GAAG,EAAE,MAAM;IACnC;8BAE2C;AACrC,gBAAe,aAAT,AAAK,KAAA,QAAC,MAAK;AACZ,MAAT,MAAA,AAAI,GAAD,IAAK;AACc,MAAtB,MAAI,CAAJ,GAAG,GAAa,aAAT,AAAK,KAAA,QAAC,MAAK;AACT,MAAT,MAAA,AAAI,GAAD,IAAK;AACc,MAAtB,MAAI,CAAJ,GAAG,GAAa,aAAT,AAAK,KAAA,QAAC,MAAK;AACT,MAAT,MAAA,AAAI,GAAD,IAAK;AACc,MAAtB,MAAI,CAAJ,GAAG,GAAa,aAAT,AAAK,KAAA,QAAC,MAAK;AAEd,mBAAkB,aAAT,AAAK,KAAA,QAAC,MAAK;AACZ,MAAZ,SAAA,AAAO,MAAD,IAAK;AACc,MAAzB,SAAO,CAAP,MAAM,GAAa,aAAT,AAAK,KAAA,QAAC,MAAK;AACT,MAAZ,SAAA,AAAO,MAAD,IAAK;AACc,MAAzB,SAAO,CAAP,MAAM,GAAa,aAAT,AAAK,KAAA,QAAC,MAAK;AACT,MAAZ,SAAA,AAAO,MAAD,IAAK;AACc,MAAzB,SAAO,CAAP,MAAM,GAAa,aAAT,AAAK,KAAA,QAAC,MAAK;AAErB,YAAa,uBAAS,GAAG,EAAE,MAAM;IACnC;oBAI2B,KAAS;AACjB,MAAjB,MAAI,cAAJ,GAAG,IAAI;AACa,MAApB,SAAO,cAAP,MAAM,IAAI;AACN,eAAW,wBAAE,MAAM;AACnB,eAAoB,AAAO,CAApB,AAAM,oBAAE,GAAG,MAAK,KAAO,AAAM,OAAG,AAAO,MAAD;AAC7C,eAAY,WAAG,AAAI,GAAD,cAAI;AAC1B,YAAa,sBAAQ,EAAE,EAAE,EAAE,EAAE,EAAE;IACjC;oBAIsB;AACpB,UAAU,YAAN,KAAK;AACP,cAAO,MAAK;YACP,KAAU,UAAN,KAAK;AACd,cAAO,kBAAM,KAAK;YACb,KAAU,YAAN,KAAK;AACd,cAAO,AAAM,MAAD;;AAEkB,MAAhC,WAAoB,6BAAM,KAAK;IACjC;UAEiB;AACT,cAAI,sBAAS,KAAK;AACpB,iBAAU,aAAH,yBAAK,AAAE,CAAD;AACb,iBAAU,AAAO,aAAV,yBAAK,AAAE,CAAD,QAAO,AAAK,IAAD;AACxB,iBAAU,AAAO,aAAV,yBAAK,AAAE,CAAD,QAAO,AAAK,IAAD;AAC5B,YAAa,sBAAQ,IAAI,EAAE,IAAI,EAAE,IAAI;IACvC;UAEiB;AACT,cAAI,sBAAS,KAAK;AACxB,YAAO,mBAAK,UAAI,UAAI,UAAI,AAAE,CAAD,MAAK,AAAE,CAAD,MAAK,AAAE,CAAD;IACvC;;AAEsB,kCAAQ,UAAI,UAAI;IAAG;UAExB;AACT,cAAI,sBAAS,KAAK;AAGpB,eAAQ,aAAH,YAAK;AACV,eAAgB,CAAV,AAAG,sBAAG,MAAkB,CAAP,aAAH,YAAK,OAAQ;AACjC,eAAS,AAAM,aAAT,aAAM,IAAK;AACjB,eAAgB,CAAV,AAAG,sBAAG,MAAmB,CAAR,aAAH,YAAK,QAAS;AAClC,eAAoB,CAAX,aAAH,YAAK,YAAY;AAEvB,eAAU,aAAL,AAAE,CAAD,QAAM;AACZ,eAAkB,CAAZ,AAAE,AAAG,CAAJ,kBAAO,MAAoB,CAAP,aAAL,AAAE,CAAD,QAAM,OAAQ;AACrC,eAAW,AAAM,aAAX,AAAE,CAAD,SAAO,IAAK;AACnB,eAAkB,CAAZ,AAAE,AAAG,CAAJ,kBAAO,MAAqB,CAAR,aAAL,AAAE,CAAD,QAAM,QAAS;AACtC,eAAsB,CAAX,aAAL,AAAE,CAAD,QAAM,YAAY;AAIzB,eAAK,AAAG,EAAD,GAAG,EAAE;AACZ,eAAK,AAAG,EAAD,GAAG,EAAE;AACZ,eAAK,AAAG,EAAD,GAAG,EAAE;AACZ,eAAK,AAAG,EAAD,GAAG,EAAE;AACZ,eAAK,AAAG,EAAD,GAAG,EAAE;AAEhB,UAAI,EAAE,KAAI;AACK,QAAb,KAAA,AAAG,EAAD,GAAI,AAAG,EAAD,GAAG,EAAE;AACA,QAAb,KAAA,AAAG,EAAD,GAAI,AAAG,EAAD,GAAG,EAAE;AACA,QAAb,KAAA,AAAG,EAAD,GAAI,AAAG,EAAD,GAAG,EAAE;AACA,QAAb,KAAA,AAAG,EAAD,GAAI,AAAG,EAAD,GAAG,EAAE;;AAEf,UAAI,EAAE,KAAI;AACK,QAAb,KAAA,AAAG,EAAD,GAAI,AAAG,EAAD,GAAG,EAAE;AACA,QAAb,KAAA,AAAG,EAAD,GAAI,AAAG,EAAD,GAAG,EAAE;AACA,QAAb,KAAA,AAAG,EAAD,GAAI,AAAG,EAAD,GAAG,EAAE;;AAEf,UAAI,EAAE,KAAI;AACK,QAAb,KAAA,AAAG,EAAD,GAAI,AAAG,EAAD,GAAG,EAAE;AACA,QAAb,KAAA,AAAG,EAAD,GAAI,AAAG,EAAD,GAAG,EAAE;;AAEf,UAAI,EAAE,KAAI;AACK,QAAb,KAAA,AAAG,EAAD,GAAI,AAAG,EAAD,GAAG,EAAE;;AAmBX,gBAAM,AAAG,EAAD,GAAG;AACX,gBAAmB,CAAZ,AAAG,EAAD,GAAG,QAAU;AACtB,eAAK,AAAI,GAAD,GAAG,GAAG;AAEd,gBAAM,AAAG,EAAD,cAAI;AACZ,gBAAM,AAAG,EAAD,cAAI;AACZ,gBAAqB,CAAd,AAAG,EAAD,GAAG,WAAY;AACxB,gBAAkB,CAAX,AAAG,EAAD,GAAG,OAAS;AACrB,eAAK,AAAI,AAAM,AAAM,GAAb,GAAG,GAAG,GAAG,GAAG,GAAG,GAAG;AAE1B,gBAAM,AAAG,EAAD,cAAI;AACZ,gBAAM,AAAG,EAAD,cAAI;AACZ,gBAAmB,CAAZ,AAAG,EAAD,GAAG,SAAU;AACtB,eAAK,AAAI,AAAM,GAAP,GAAG,GAAG,GAAG,GAAG;AAGP,MAAjB,KAAA,AAAG,EAAD,GAAI,AAAG,EAAD;AACS,MAAjB,KAAA,AAAG,EAAD,GAAI,AAAG,EAAD;AAER,YAAa,sBAAQ,EAAE,EAAE,EAAE,EAAE,EAAE;IACjC;UAEiB;AAAU,kCAAQ,MAAM,KAAK;IAAc;WAE1C;AAAU,kCAAQ,MAAM,KAAK;IAAc;cAE7C;AAAU,kCAAQ,MAAM,KAAK;IAAc;UAE1C;AACT,cAAI,sBAAS,KAAK;AACpB,eAAQ,cAAH,yBAAK,AAAE,CAAD;AACX,eAAQ,cAAH,yBAAK,AAAE,CAAD;AACX,eAAQ,cAAH,yBAAK,AAAE,CAAD;AACf,YAAa,sBAAQ,EAAE,EAAE,EAAE,EAAE,EAAE;IACjC;UAEiB;AACT,cAAI,sBAAS,KAAK;AACpB,eAAQ,cAAH,yBAAK,AAAE,CAAD;AACX,eAAQ,cAAH,yBAAK,AAAE,CAAD;AACX,eAAQ,cAAH,yBAAK,AAAE,CAAD;AACf,YAAa,sBAAQ,EAAE,EAAE,EAAE,EAAE,EAAE;IACjC;UAEiB;AACT,cAAI,sBAAS,KAAK;AACpB,eAAQ,cAAH,yBAAK,AAAE,CAAD;AACX,eAAQ,cAAH,yBAAK,AAAE,CAAD;AACX,eAAQ,cAAH,yBAAK,AAAE,CAAD;AACf,YAAa,sBAAQ,EAAE,EAAE,EAAE,EAAE,EAAE;IACjC;;AAGE,YAAa,sBAAQ,cAAC,iBAAI,cAAC,iBAAI,cAAC;IAClC;WAEsB;AACpB,UAAM,aAAF,CAAC,IAAG;AACsB,QAA5B,WAAoB,6BAAM,CAAC;;AAE7B,UAAM,aAAF,CAAC,KAAI;AACP,cAAO;;AAGL;AAAM;AAAM;AAChB,UAAM,aAAF,CAAC;AACW,QAAd,OAAO,AAAG,qBAAG,CAAC;AACwB,QAAtC,OAAiB,CAAT,AAAG,qBAAG,CAAC,IAAK,AAAG,sBAAU,kBAAE,CAAC;AACE,QAAtC,OAAiB,CAAT,AAAG,qBAAG,CAAC,IAAK,AAAG,sBAAU,kBAAE,CAAC;YAC/B,KAAM,aAAF,CAAC;AACF,QAAR,OAAO;AACiB,QAAxB,OAAO,AAAG,qBAAM,aAAF,CAAC;AACmC,QAAlD,OAA2B,CAAnB,AAAG,qBAAM,aAAF,CAAC,UAAc,AAAG,sBAAY,kBAAE,CAAC;;AAExC,QAAR,OAAO;AACC,QAAR,OAAO;AACmB,QAA1B,OAAO,AAAG,qBAAM,aAAF,CAAC;;AAGjB,YAAa,sBAAQ,IAAI,EAAE,IAAI,EAAE,IAAI;IACvC;WAEsB;AACpB,UAAM,aAAF,CAAC,IAAG;AACsB,QAA5B,WAAoB,6BAAM,CAAC;;AAE7B,UAAM,aAAF,CAAC,KAAI;AACP,yBAAO,iCAAuD;;AAG5D;AAAM;AAAM;AAGZ,eAAK;AACJ,qBAAiC,CAAlB,aAAH,EAAE,gBAAsB;AACzC,UAAI,QAAQ,IAAU;AAGE,QAAtB,KAAG,aAAH,EAAE,KAAW;;AAGf,UAAM,aAAF,CAAC;AACsB,QAAzB,OAAO,yBAAY,EAAE,EAAE,CAAC;AACxB,YAAI,QAAQ;AACqB,UAA/B,OAAK,cAAL,IAAI,IAAW,WAAE,CAAS,uBAAG,CAAC;;AAEe,QAA/C,OAA0B,cAAnB,yBAAY,UAAI,CAAC,KAAK,AAAG,EAAD,aAAW,kBAAE,CAAC;AACE,QAA/C,OAA0B,cAAnB,yBAAY,UAAI,CAAC,KAAK,AAAG,qBAAU,kBAAE,CAAC;YACxC,KAAM,aAAF,CAAC;AACkB,QAA5B,OAAO,QAAQ,aAAY;AACM,QAAjC,OAAO,yBAAY,EAAE,EAAI,aAAF,CAAC;AACxB,YAAI,QAAQ;AAC6B,UAAvC,OAAK,cAAL,IAAI,IAAU,WAAE,CAAQ,uBAAM,aAAF,CAAC;;AAE0B,QAAzD,OAAkC,cAA3B,yBAAY,UAAM,aAAF,CAAC,WAAa,AAAG,EAAD,aAAa,kBAAE,CAAC;;AAE3B,QAA5B,OAAO,QAAQ,aAAY;AACA,QAA3B,OAAO,QAAQ,aAAW;AACS,QAAnC,OAAO,yBAAY,EAAE,EAAI,aAAF,CAAC;AACxB,YAAI,QAAQ;AAC+B,UAAzC,OAAK,cAAL,IAAI,IAAU,WAAE,CAAQ,uBAAM,aAAF,CAAC;;;AAIjC,YAAa,sBAAQ,IAAI,EAAE,IAAI,EAAE,IAAI;IACvC;uBAE6B;AAC3B,UAAM,aAAF,CAAC,IAAG;AACsB,QAA5B,WAAoB,6BAAM,CAAC;;AAE7B,UAAM,aAAF,CAAC,KAAI;AACP,cAAO;;AAGL;AAAM;AAAM;AACZ,eAAY,wBAAE;AAClB,UAAM,aAAF,CAAC;AACW,QAAd,OAAO,AAAG,EAAD,cAAI,CAAC;AACwB,QAAtC,OAAiB,CAAT,AAAG,sBAAG,CAAC,IAAK,AAAG,EAAD,aAAW,kBAAE,CAAC;AACE,QAAtC,OAAiB,CAAT,AAAG,sBAAG,CAAC,IAAK,AAAG,qBAAU,kBAAE,CAAC;YAC/B,KAAM,aAAF,CAAC;AACF,QAAR,OAAO;AACiB,QAAxB,OAAO,AAAG,EAAD,cAAO,aAAF,CAAC;AACmC,QAAlD,OAA2B,CAAnB,AAAG,sBAAM,aAAF,CAAC,UAAc,AAAG,qBAAY,kBAAE,CAAC;;AAExC,QAAR,OAAO;AACC,QAAR,OAAO;AACmB,QAA1B,OAAO,AAAG,EAAD,cAAO,aAAF,CAAC;;AAGjB,YAAa,sBAAQ,IAAI,EAAE,IAAI,EAAE,IAAI;IACvC;;UAIiB;AACT;AACN,UAAU,YAAN,KAAK;AACE,QAAT,IAAI,KAAK;YACJ,KAAU,UAAN,KAAK;AACd,YAAI,AAAG,aAAG,KAAK,AAAG,aAAG,GAAG,MAAO,AAAG,aAAG,KAAK;AAG1C,YAAW,AAAS,wBAAP,KAAK,aAAK,KAAK,EAAE,MAAO;AACrB,QAAhB,IAAI,iBAAM,KAAK;YACV,KAAU,YAAN,KAAK;AACK,QAAnB,IAAI,AAAM,KAAD;;AAEX,UAAI,CAAC,IAAI;AACP,cAAO,AAAG,AAAsB,aAAnB,AAAE,CAAD,QAAO,AAAG,YAAG,AAAE,CAAD,QAAO,AAAG,YAAG,AAAE,CAAD;;AAE5C,YAAO;IACT;cAEc;AAAU,8BAAW,KAAK;IAAC;iBAE1B;AACP,cAAI,sBAAS,KAAK;AACpB,kBAAQ,AAAG,sBAAW,KAAE;AACxB,kBAAQ,AAAE,AAAG,CAAJ,kBAAe,KAAE;AAC9B,UAAI,KAAK,KAAI,KAAK;AAChB,cAAO,AAAM,MAAD,KAAI,IAAI,IAAI,CAAC;;AAE3B,UAAO,aAAH,yBAAK,AAAE,CAAD;AACR,cAAO;YACF,KAAO,aAAH,yBAAK,AAAE,CAAD;AACf,cAAO,EAAC;;AAEV,UAAO,aAAH,yBAAK,AAAE,CAAD;AACR,cAAO;YACF,KAAO,aAAH,yBAAK,AAAE,CAAD;AACf,cAAO,EAAC;;AAEV,UAAO,aAAH,yBAAK,AAAE,CAAD;AACR,cAAO;YACF,KAAO,aAAH,yBAAK,AAAE,CAAD;AACf,cAAO,EAAC;;AAEV,YAAO;IACT;UAEgB;AAAU,YAAkB,cAAlB,iBAAW,KAAK,KAAI;IAAC;WAC9B;AAAU,YAAkB,cAAlB,iBAAW,KAAK,MAAK;IAAC;UACjC;AAAU,YAAuB,cAAvB,AAAK,iBAAW,KAAK,KAAI;IAAC;WACnC;AAAU,YAAkB,cAAlB,iBAAW,KAAK,MAAK;IAAC;;AAE9B,YAAW,EAAP,aAAH,YAAK,OAAQ;IAAC;;AACX,YAAC,AAAG,AAA+B,cAArB,uBAAG,MAAM,AAAG,wBAAY,AAAG;IAAQ;;AACjD,YAAA,AAAG,AAA6B,wBAAR,AAAG,aAAG,KAAK,AAAG,aAAG;IAAC;;AAC1C,YAAsB,EAAlB,aAAH,wBAAwB;IAAC;;AAC/B,YAAW,EAAP,aAAH,YAAK,OAAQ;IAAC;;AACd,YAAA,AAAG,AAAgB,cAAb,KAAK,AAAG,aAAG,KAAK,AAAG,aAAG;IAAC;;AAG9C,oBAAI,cAAQ,MAAO;AACf,eAAK;AAAI,eAAK;AAAI,eAAK;AAC3B,oBAAI;AACc,QAAhB,KAAW,WAAE,cAAC,EAAE;AACA,QAAhB,KAAW,WAAE,cAAC,EAAE;AACC,QAAjB,KAAY,WAAE,cAAC,EAAE;;AAEnB,UAAI,EAAE,KAAI,GAAG,MAAe,MAAE,AAAG,EAAD;AAChC,UAAI,EAAE,KAAI,GAAG,MAAa,MAAE,AAAG,EAAD;AAC9B,YAAO,AAAG,GAAD;IACX;;AAMM,mBAAiC,CAAV,CAAT,aAAH,YAAK,qCAAmB;AACnC,gBAAiB,CAAP,aAAH,aAAM,KAAW,AAAO,aAAV,aAAM,KAAM;AACrC,YAAc,EAAP,MAAM,GAAG,GAAG;IACrB;;AAGE,uBAAY,mBAAa,AAAC,iBAAO;IACnC;UAEY,YAAY;AAChB,kBAAQ,sBAAS,UAAU;AAC3B,kBAAQ,sBAAS,UAAU;AACjC,oBAAI,AAAK,UAAE,KAAK,IAAE,MAAO,MAAK;AAC9B,oBAAI,AAAK,UAAE,KAAK,IAAE,MAAO,MAAK;AAC9B,YAAO;IACT;;AAKM,eAAW,mCAAsB;AACrC,UAAI,AAAG,EAAD,KAAI;AACJ,iBAAW,mCAAsB;AACrC,YAAI,AAAG,EAAD,KAAI;AACR,gBAAuC,cAA1B,mCAAsB,aAAM;;AAEzC,gBAAU,AAAS,cAAZ,EAAE,UAAa,AAAG;;;AAG3B,cAAU,cAAH,EAAE,KAAI,AAAG;;IAEpB;;AAKM,kBAAc,oCAAuB;AACzC,UAAU,aAAN,KAAK,IAAG;AACV,cAAO,MAAK;;AAG0B,MAAxC,QAAc,oCAAuB;AACrC,UAAU,aAAN,KAAK,IAAG;AACV,cAAa,mBAAE,KAAK;;AAGkB,MAAxC,QAAc,oCAAuB;AACrC,UAAU,aAAN,KAAK,IAAG;AACV,cAAe,mBAAE,KAAK;;AAGxB,YAAO;IACT;aAEmB;AACjB,UAAU,aAAN,KAAK,IAAG,KAAW,aAAN,KAAK,IAAG,IAAI,AAAoC,WAAnB,0BAAM,KAAK,EAAE,GAAG;AAC9D,UAAU,aAAN,KAAK;AACP,cAAa,sBAAQ,UAAI,UAAI,AAAG,oBAAe,aAAN,KAAK;YACzC,KAAU,aAAN,KAAK;AACV,gBAAI,AAAG,oBAAe,aAAN,KAAK;AACzB,cAAO,AAAE,EAAD,gBACI,qBAAQ,UAAI,CAAC,aACb,qBAAQ,UAAI,CAAC,EAAE;;AAEvB,gBAAI,AAAG,oBAAS,KAAK;AACzB,cAAO,AAAE,EAAD,gBACI,qBAAQ,CAAC,sBACT,qBAAQ,CAAC,EAAE,GAAG;;IAE9B;eAEqB;AACnB,UAAU,aAAN,KAAK,IAAG,KAAW,aAAN,KAAK,IAAG,IAAI,AAAoC,WAAnB,0BAAM,KAAK,EAAE,GAAG;AAC9D,UAAU,aAAN,KAAK;AACH,gBAAI,AAAG,sBAAiB,aAAN,KAAK;AAC3B,cAAa,sBAAQ,UAAI,UAAI,CAAC;YACzB,KAAU,aAAN,KAAK;AACV,gBAAI,AAAG,sBAAiB,aAAN,KAAK;AAC3B,cAAa,sBAAQ,UAAI,CAAC,EAAE;;AAExB,gBAAI,AAAG,sBAAW,KAAK;AAC3B,cAAa,sBAAQ,CAAC,EAAE,GAAG;;IAE/B;;AAGY,mBAAS,iBAAU;AACR,MAArB,AAAM,MAAA,QAAC,GAAQ,aAAH,YAAK;AACW,MAA5B,AAAM,MAAA,QAAC,GAAS,AAAM,aAAT,aAAM,IAAK;AAC4B,MAApD,AAAM,MAAA,QAAC,GAAU,AAAM,AAAQ,aAAjB,aAAM,IAAK,MAAa,AAAO,aAAV,aAAM,KAAM;AACnB,MAA5B,AAAM,MAAA,QAAC,GAAS,AAAM,aAAT,aAAM,IAAK;AACK,MAA7B,AAAM,MAAA,QAAC,GAAS,AAAO,aAAV,aAAM,KAAM;AAC0B,MAAnD,AAAM,MAAA,QAAC,GAAU,AAAM,AAAQ,aAAjB,aAAM,IAAK,MAAa,AAAO,aAAV,aAAM,KAAM;AACnB,MAA5B,AAAM,MAAA,QAAC,GAAS,AAAM,aAAT,aAAM,IAAK;AACK,MAA7B,AAAM,MAAA,QAAC,GAAS,AAAO,aAAV,aAAM,KAAM;AACzB,YAAO,OAAM;IACf;;AAEqB,YAAA,AAAQ;IAAU;;AAGjC,cAAI;AACJ,cAAI;AACJ,cAAI;AAGR,WAAQ,aAAH,wBAAwB;AACZ,QAAf,IAAU,WAAE,cAAC;AACE,QAAf,IAAU,WAAE,cAAC;AACG,QAAhB,IAAW,WAAE,cAAC;AACd,cAAO,GAAG,AAAE,AAAK,AAAgB,iBAAnB,CAAC,IAAK,AAAQ,uBAAE,CAAC,IAAK,AAAe,8BAAE,CAAC;;AAEtD,cAAS,AAAgB,cAAlB,CAAC,IAAI,AAAQ,uBAAE,CAAC,IAAK,AAAe,8BAAE,CAAC;;IAElD;;AAIE,YAAO,sBAA8B,CAAV,CAAT,aAAH,YAAK,qCAAmB;IACzC;;AAGmB;IAAI;;AAGF,kCAAe;IAAG;;AAIrC,oBAAI,cAAQ,MAAO;AACb,cAAI;AACH,mBAAS;AAChB,wBAAQ,AAAE,CAAD;AACH,oBAAa,aAAL,AAAE,CAAD,QAAM;AACkB,QAArC,SAAqC,SAAzB,gBAAU,KAAK,KAAG,MAAM;AACT,QAA3B,IAAI,AAAE,CAAD,oBAAoB;;AAE3B,YAAO,OAAM;IACf;;AAKE,YAAO,qCAAuB,IAAI,UAAI,UAAI,UAAI;IAChD;0BAGiC;AAC/B,YAAO,qCAA6B,4BAAe,KAAK,GAAG,UAAI,UAAI,UAAI;IACzE;kBAEyB;AACvB,YAAO,sBAAqB,4BAAe,KAAK;IAClD;qBAE0B;AACpB,eAAK;AACL,eAAK;AACL,eAAK;AAEF,iBAAO;AACd,WAAQ,aAAH,EAAE,gBAAsB;AACjB,QAAV,OAAO;AAGI,QAAX,KAAK,AAAE,iBAAE,EAAE;AACP,qBAAU,AAAG,AAAU,EAAX,oBAAa;AAClB,QAAX,KAAG,cAAH,EAAE;AACkB,QAApB,KAAK,AAAE,AAAK,iBAAH,EAAE,IAAG,MAAM;AACM,QAA1B,SAAU,AAAG,AAAU,EAAX,oBAAa;AACd,QAAX,KAAG,cAAH,EAAE;AACkB,QAApB,KAAK,AAAE,AAAK,iBAAH,EAAE,IAAG,MAAM;AACR,QAAZ,KAAG,cAAH,EAAE;;AAIJ,YAAO,qCAAuB,KAAK,EAAE,EAAE,EAAE,EAAE,EAAE,EAAE,EAAE,IAAI;IACvD;kCAGQ,OAAW,IAAQ,IAAQ,IAAW;AAC5C,UAAI,AAAG,EAAD,KAAI,KAAK,AAAG,EAAD,KAAI,KAAK,AAAG,EAAD,KAAI,GAAG,MAAO;AAkBtC,eAAe,CAAN,aAAH,EAAE,KAAI,IAAM,AAAG,EAAD,cAAI;AACxB,eAAS,AAAM,aAAT,EAAE,KAAI,IAAK;AACgB,MAArC,KAA8B,CAApB,AAAM,aAAT,EAAE,KAAI,IAAM,AAAG,EAAD,cAAI,OAAO;AACT,MAAvB,KAAS,AAAO,aAAV,EAAE,KAAI,KAAM;AACH,MAAf,KAAQ,aAAH,EAAE,IAAG;AAEN,qBAAW,AAAc,mCAAC,KAAK;AAU5B,mBAAS;AAAI,mBAAS;AAAI,mBAAS;AAE1C,eAAS,AAAG,EAAD,KAAI,KAAK,AAAG,EAAD,KAAI;AACpB,gBAAO,CAAH,EAAE,gBAAI,QAAQ;AAClB,gBAAI,AAAG,EAAD,GAAG,AAAE,CAAD,gBAAG,QAAQ;AACnB,QAAN,KAAK,CAAC;AACO,QAAb,KAAA,AAAG,EAAD,IAAI,AAAE,CAAD,IAAI;AAEO,QAAlB,IAAO,CAAH,EAAE,gBAAI,QAAQ;AACG,QAArB,IAAI,AAAG,EAAD,GAAG,AAAE,CAAD,gBAAG,QAAQ;AACf,QAAN,KAAK,CAAC;AACO,QAAb,KAAG,aAAH,EAAE,KAAI,AAAE,CAAD,IAAI;AAEO,QAAlB,IAAO,cAAH,EAAE,iBAAI,QAAQ;AACG,QAArB,IAAO,aAAH,EAAE,IAAG,AAAE,CAAD,gBAAG,QAAQ;AACf,QAAN,KAAK,CAAC;AACO,QAAb,KAAG,aAAH,EAAE,KAAI,AAAE,CAAD,IAAI;AAEO,QAAlB,IAAO,cAAH,EAAE,iBAAI,QAAQ;AACG,QAArB,IAAO,aAAH,EAAE,IAAG,AAAE,CAAD,gBAAG,QAAQ;AACf,QAAN,KAAK,CAAC;AACO,QAAb,KAAG,aAAH,EAAE,KAAI,AAAE,CAAD,IAAI;AAEO,QAAlB,IAAO,cAAH,EAAE,iBAAI,QAAQ;AACG,QAArB,IAAO,aAAH,EAAE,IAAG,AAAE,CAAD,gBAAG,QAAQ;AACf,QAAN,KAAK,CAAC;AAEN,cAAO,AAAO,MAAD,KAAI;AACF,QAAf,SAAS,MAAM;AACA,QAAf,SAAS,MAAM;AAI0C,QAAzD,SAAwB,AAAqB,CAA1B,aAAT,QAAQ,IAAG,CAAC,kBAAgB,KAAK,cAAY;;AAErD,oBAAqB,AAAa,CAApB,aAAH,EAAE,KAAI,aAAU,aAAH,EAAE,KAAI,yBAAM,EAAE;AACnC,0BAAgB,AAAQ,OAAD,KAAI,IAAI,KAAK,AAAQ,OAAD,iBAAe,KAAK;AACtE,YAAiD,UAAxC,IAAI,IAAC,aAAa,GAAC,MAAM,GAAC,MAAM,GAAC,MAAM;IAClD;;AAgEE,YAAO,AAA+B,wBAApB,YAAE,mBAAM,YAAE,mBAAM,YAAE;IACtC;mBAEyB,IAAQ,IAAQ;AACrC,YAAM,wBAAY,wBAAE,EAAE,UAAQ,wBAAE,EAAE,UAAS,wBAAE,EAAE;IAAC;gBAE9B,IAAQ,IAAQ,IAAQ,IAAQ,IAAQ;AACxD,kBAAW,aAAH,EAAE,iBAAG,EAAE;AACf,kBAAW,AAAK,aAAR,EAAE,iBAAG,EAAE,KAAK,AAAM,AAAU,KAAX,oBAAa;AACtC,kBAAW,AAAK,aAAR,EAAE,iBAAG,EAAE,KAAK,AAAM,AAAU,KAAX,oBAAa;AAC1C,YAAO,sBAAQ,KAAK,EAAE,KAAK,EAAE,KAAK;IACpC;mBAEyB,IAAQ,IAAQ;AACvC,YAAO,mBAAK,GAAG,GAAG,GAAG,EAAE,EAAE,EAAE,EAAE,EAAE;IACjC;gBAEqB;AAAU,YAAA,AAAkB,2BAAC,KAAK;IAAC;uBAG7B,GAAO;AAChC,UAAM,aAAF,CAAC,KAAI;AACP,cAAO,AAAE,EAAD,cAAI,CAAC;;AAET,sBAAU,AAAE,CAAD,cAAI,CAAC;AACpB,YAAI,AAAQ,OAAD,IAAI;AACQ,UAArB,UAAA,AAAQ,OAAD,GAAI;;AAEb,cAAO,QAAO;;IAElB;mBAI2B,GAAG,OAAW;AACjC,cAAI,sBAAS,KAAK;AACxB,oBAAI,AAAE,CAAD;AACyC,QAA5C;;AAEF,oBAAI,AAAE,CAAD,UAAS,MAAO;AAEhB,iBAAO,AAAE,CAAD;AACR,iBAAO,AAAE,CAAD;AACF,MAAX,IAAI,AAAE,CAAD;AACM,MAAX,IAAI,AAAE,CAAD;AAED,eAAK,AAAE,CAAD;AACN,eAAK,AAAE,CAAD;AACN,eAAK,AAAE,CAAD;AAEN,eAAK,AAAE,CAAD;AACN,eAAK,AAAE,CAAD;AACN,eAAK,AAAE,CAAD;AACV,YAAO,4BAAc,EAAE,EAAE,EAAE,EAAE,EAAE,EAAE,IAAI,EAAE,EAAE,EAAE,EAAE,EAAE,EAAE,EAAE,IAAI,EAAE,IAAI;IAC/D;yBAQQ,IACA,IACA,IACC,MACD,IACA,IACA,IACC,MACD;AACF,eAAK;AAAG,eAAK;AAAG,eAAK;AACrB,eAAK;AAAG,eAAK;AAAG,eAAK;AAEzB,UAAI,AAAG,EAAD,KAAI,KAAK,AAAG,EAAD,KAAI,KAAQ,aAAH,EAAE,IAAM,CAAF,eAAM,AAAG;AAM1B,QAAb,KAAQ,cAAH,EAAE,iBAAI,EAAE;AACT,oBAAW,aAAH,EAAE,IAAG,AAAG,EAAD,gBAAG,EAAE;AACpB,iBAAQ,aAAH,EAAE,IAAI,AAAM,KAAD;AACP,QAAb,KAAQ,CAAH,EAAE,gBAAI,EAAE;AACO,QAApB,QAAQ,AAAG,EAAD,GAAG,AAAG,EAAD,gBAAG,EAAE;AAChB,iBAAQ,aAAH,EAAE,IAAI,AAAM,KAAD;AACP,QAAb,KAAQ,CAAH,EAAE,gBAAI,EAAE;AACI,QAAjB,KAAK,AAAG,EAAD,GAAG,AAAG,EAAD,gBAAG,EAAE;;AAkBV,iBAAQ,AAAU,aAAb,EAAE,IAAM,uBAAE,EAAE,IAAM,gCAAE,EAAE;AAC3B,iBAAQ,AAAU,aAAb,EAAE,IAAM,uBAAE,EAAE,IAAM,gCAAE,EAAE;AAE3B,iBAAe,CAAT,AAAG,EAAD,GAAG,EAAE;AAGb,kBAAgB,CAAT,AAAG,EAAD;AACE,QAAlB,KAAK,AAAG,EAAD,GAAM,mBAAE,GAAG;AACX,kBAAgB,CAAT,AAAG,EAAD;AACT,kBAAM,AAAG,EAAD,GAAM,UAAE,GAAG;AACV,QAAhB,KAAK,AAAI,GAAD;AACQ,QAAhB,KAAK,AAAI,GAAD;AACQ,QAAhB,KAAK,AAAI,GAAD;AAER,cAAO,AAAG,AAAU,AAAU,EAArB,GAAM,UAAE,EAAE,GAAM,mBAAE,EAAE,KAAc,CAAT,AAAG,EAAD,GAAG,EAAE;AACzC,cAAO,AAAG,AAAK,EAAN,KAAI,KAAK,AAAG,EAAD,KAAI;AAIjB,kBAAM,AAAI,GAAD,gBAAG,EAAE;AACd,sBAAqB,CAAV,AAAI,GAAD;AACG,QAAxB,MAAM,AAAI,GAAD,GAAG,AAAQ,OAAD;AACZ,kBAAM,AAAI,AAAK,AAAW,GAAjB,gBAAG,EAAE,IAAG,AAAI,GAAD,gBAAG,EAAE,IAAG,OAAO;AACnC,sBAAqB,CAAV,AAAI,GAAD;AACG,QAAxB,MAAM,AAAI,GAAD,GAAG,AAAQ,OAAD;AACZ,kBAAM,AAAI,AAAK,AAAW,AAAW,GAA5B,gBAAG,EAAE,IAAG,AAAI,GAAD,gBAAG,EAAE,IAAG,AAAI,GAAD,gBAAG,EAAE,IAAG,OAAO;AACrD,cAAO,AAAI,GAAD;AAGN,oBAAW,aAAH,EAAE,IAAG,AAAI,GAAD;AAChB,oBAAW,AAAc,aAAjB,EAAE,IAAG,AAAI,GAAD,cAAa,AAAM,AAAU,KAAX,oBAAa;AAC/C,oBAAW,AAAc,aAAjB,EAAE,IAAG,AAAI,GAAD,cAAa,AAAM,AAAU,KAAX,oBAAa;AACjC,QAAlB,KAAW,WAAE,KAAK;AACA,QAAlB,KAAW,WAAE,KAAK;AACC,QAAnB,KAAY,WAAE,KAAK;AAInB,eAAO,AAAG,EAAD,cACL,AAAG,EAAD,gBAAG,EAAE,KACN,AAAG,EAAD,KAAI,EAAE,KAAK,AAAG,EAAD,gBAAG,EAAE,KAAK,AAAG,EAAD,KAAI,EAAE,IAAI,AAAG,EAAD,iBAAI,EAAE;AAE5C,kBAA0B,CAArB,AAAG,EAAD,eAAsB,IAAI,IAAI,CAAC;AAEtC,mBAAK,AAAG,EAAD,GAAG,AAAE,CAAD,gBAAG,EAAE;AAChB,mBAAK,AAAG,EAAD,GAAG,AAAE,CAAD,IAAO,aAAH,EAAE,KAAK,AAAG,AAAU,EAAX,oBAAa;AACrC,mBAAK,AAAG,EAAD,GAAG,AAAE,CAAD,IAAO,aAAH,EAAE,KAAK,AAAG,AAAU,EAAX,oBAAa;AAC1B,UAAf,KAAW,WAAE,EAAE;AACA,UAAf,KAAW,WAAE,EAAE;AACC,UAAhB,KAAY,WAAE,EAAE;AAGL,UAAX,KAAK,AAAG,EAAD,GAAG,CAAC;AACsB,UAAjC,KAAK,AAAG,EAAD,GAAG,AAAE,CAAD,IAAK,AAAG,AAAU,EAAX,oBAAa;AACE,UAAjC,KAAK,AAAG,EAAD,GAAG,AAAE,CAAD,IAAK,AAAG,AAAU,EAAX,oBAAa;AAChB,UAAf,KAAW,WAAE,EAAE;AACA,UAAf,KAAW,WAAE,EAAE;AACC,UAAhB,KAAY,WAAE,EAAE;;;AAKpB,qBAAa,AAAK,wBAAS,uBAAM,EAAE,EAAE,EAAE,EAAE,EAAE;AAC3C,YAAO,AAAG,AAAK,EAAN,gBAAG,EAAE,eACJ,AAAkB,uBAAZ,EAAE,EAAE,EAAE,EAAE,EAAE,OAAU,uBAAM,EAAE,EAAE,EAAE,EAAE,EAAE;AAEpD,YAAO,AAAK,AAAsC,IAAvC,UAAmB,AAAK,IAAD,UAAmB,AAAK,IAAD;AACzD,UAAI,AAAK,IAAD;AACN,yBAAI,IAAI,EAAI,IAAI,GAAE,MAAO,sBAAQ,EAAE,EAAE,EAAE,EAAE,EAAE;AAC3C,cAAa,sBAAQ,EAAE,EAAE,EAAE,EAAE,EAAE;;AAGjC,qBAAK,IAAI;AACP,cAAa,sBAAQ,EAAE,EAAE,EAAE,EAAE,EAAE;;AAGjC,UAAI,AAAK,IAAD;AACN,YAAI,AAAG,EAAD,KAAI,KAAK,AAAG,EAAD,KAAI,KAAK,AAAG,EAAD,KAAI;AAC9B,gBAAO;;AAEP,gBAAO,mBAAK,EAAE,EAAE,EAAE,EAAE,EAAE,EAAE,EAAE,EAAE,EAAE,EAAE,EAAE;;;AAGpC,cAAO,sBAAQ,EAAE,EAAE,EAAE,EAAE,EAAE;;IAE7B;;iCA57BuB,IAAS,IAAS;IAAlB;IAAS;IAAS;;EAAG;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;MA3B3B,kBAAK;;;MACL,oBAAO;;;MACP,mBAAM;;;MACN,kBAAK;;;MACL,mBAAM;;;MACN,sBAAS;;;MACT,2BAAc;;;MAIZ,sBAAS;;;MAIT,sBAAS;;;MAGT,iBAAI;;;MAGJ,gBAAG;;;MAGH,gBAAG;;;MAssBT,2BAAc;;;MAoHd,wBAAW;;;MACX,wBAAW;;;MACX,wBAAW","file":"fixnum.unsound.ddc.js"}');
  // Exports:
  return {
    fixnum: fixnum
  };
}));

//# sourceMappingURL=fixnum.unsound.ddc.js.map

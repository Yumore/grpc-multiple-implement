define(['dart_sdk', 'packages/protobuf/protobuf', 'packages/fixnum/fixnum'], (function load__packages__protobuf__src__protobuf__mixins__well_known(dart_sdk, packages__protobuf__protobuf, packages__fixnum__fixnum) {
  'use strict';
  const core = dart_sdk.core;
  const _js_helper = dart_sdk._js_helper;
  const collection = dart_sdk.collection;
  const convert = dart_sdk.convert;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const protobuf = packages__protobuf__protobuf.protobuf;
  const fixnum = packages__fixnum__fixnum.fixnum;
  var well_known = Object.create(dart.library);
  var $_set = dartx._set;
  var $_get = dartx._get;
  var $remove = dartx.remove;
  var $truncate = dartx.truncate;
  var $modulo = dartx['%'];
  var $toInt = dartx.toInt;
  var $padLeft = dartx.padLeft;
  var $toString = dartx.toString;
  var $replaceFirst = dartx.replaceFirst;
  var $padRight = dartx.padRight;
  var $replaceRange = dartx.replaceRange;
  var $abs = dartx.abs;
  var $matchAsPrefix = dartx.matchAsPrefix;
  var $map = dartx.map;
  var $isNotEmpty = dartx.isNotEmpty;
  var $forEach = dartx.forEach;
  var $toDouble = dartx.toDouble;
  var $toList = dartx.toList;
  var $length = dartx.length;
  var $add = dartx.add;
  var $contains = dartx.contains;
  var $join = dartx.join;
  var $split = dartx.split;
  var $addAll = dartx.addAll;
  var $toUpperCase = dartx.toUpperCase;
  var $replaceAllMapped = dartx.replaceAllMapped;
  var $toLowerCase = dartx.toLowerCase;
  var $lastIndexOf = dartx.lastIndexOf;
  var $substring = dartx.substring;
  var AnyMixinL = () => (AnyMixinL = dart.constFn(dart.legacy(well_known.AnyMixin)))();
  var StringL = () => (StringL = dart.constFn(dart.legacy(core.String)))();
  var MapOfStringL$dynamic = () => (MapOfStringL$dynamic = dart.constFn(core.Map$(StringL(), dart.dynamic)))();
  var MapLOfStringL$dynamic = () => (MapLOfStringL$dynamic = dart.constFn(dart.legacy(MapOfStringL$dynamic())))();
  var ObjectL = () => (ObjectL = dart.constFn(dart.legacy(core.Object)))();
  var IdentityMapOfStringL$ObjectL = () => (IdentityMapOfStringL$ObjectL = dart.constFn(_js_helper.IdentityMap$(StringL(), ObjectL())))();
  var LinkedHashMapOfStringL$dynamic = () => (LinkedHashMapOfStringL$dynamic = dart.constFn(collection.LinkedHashMap$(StringL(), dart.dynamic)))();
  var TimestampMixinL = () => (TimestampMixinL = dart.constFn(dart.legacy(well_known.TimestampMixin)))();
  var DurationMixinL = () => (DurationMixinL = dart.constFn(dart.legacy(well_known.DurationMixin)))();
  var StructMixinL = () => (StructMixinL = dart.constFn(dart.legacy(well_known.StructMixin)))();
  var MapEntryOfStringL$ObjectL = () => (MapEntryOfStringL$ObjectL = dart.constFn(core.MapEntry$(StringL(), ObjectL())))();
  var MapEntryLOfStringL$ObjectL = () => (MapEntryLOfStringL$ObjectL = dart.constFn(dart.legacy(MapEntryOfStringL$ObjectL())))();
  var ValueMixinL = () => (ValueMixinL = dart.constFn(dart.legacy(well_known.ValueMixin)))();
  var StringLAndValueMixinLToMapEntryLOfStringL$ObjectL = () => (StringLAndValueMixinLToMapEntryLOfStringL$ObjectL = dart.constFn(dart.fnType(MapEntryLOfStringL$ObjectL(), [StringL(), ValueMixinL()])))();
  var MapL = () => (MapL = dart.constFn(dart.legacy(core.Map)))();
  var MapFieldInfoL = () => (MapFieldInfoL = dart.constFn(dart.legacy(protobuf.MapFieldInfo)))();
  var dynamicAnddynamicToNullN = () => (dynamicAnddynamicToNullN = dart.constFn(dart.fnType(core.Null, [dart.dynamic, dart.dynamic])))();
  var numL = () => (numL = dart.constFn(dart.legacy(core.num)))();
  var boolL = () => (boolL = dart.constFn(dart.legacy(core.bool)))();
  var ListL = () => (ListL = dart.constFn(dart.legacy(core.List)))();
  var ListValueMixinL = () => (ListValueMixinL = dart.constFn(dart.legacy(well_known.ListValueMixin)))();
  var ValueMixinLToObjectL = () => (ValueMixinLToObjectL = dart.constFn(dart.fnType(ObjectL(), [ValueMixinL()])))();
  var FieldMaskMixinL = () => (FieldMaskMixinL = dart.constFn(dart.legacy(well_known.FieldMaskMixin)))();
  var StringLToStringL = () => (StringLToStringL = dart.constFn(dart.fnType(StringL(), [StringL()])))();
  var MatchL = () => (MatchL = dart.constFn(dart.legacy(core.Match)))();
  var MatchLToStringL = () => (MatchLToStringL = dart.constFn(dart.fnType(StringL(), [MatchL()])))();
  var DoubleValueMixinL = () => (DoubleValueMixinL = dart.constFn(dart.legacy(well_known.DoubleValueMixin)))();
  var FloatValueMixinL = () => (FloatValueMixinL = dart.constFn(dart.legacy(well_known.FloatValueMixin)))();
  var Int64ValueMixinL = () => (Int64ValueMixinL = dart.constFn(dart.legacy(well_known.Int64ValueMixin)))();
  var intL = () => (intL = dart.constFn(dart.legacy(core.int)))();
  var FormatExceptionL = () => (FormatExceptionL = dart.constFn(dart.legacy(core.FormatException)))();
  var UInt64ValueMixinL = () => (UInt64ValueMixinL = dart.constFn(dart.legacy(well_known.UInt64ValueMixin)))();
  var Int32ValueMixinL = () => (Int32ValueMixinL = dart.constFn(dart.legacy(well_known.Int32ValueMixin)))();
  var UInt32ValueMixinL = () => (UInt32ValueMixinL = dart.constFn(dart.legacy(well_known.UInt32ValueMixin)))();
  var BoolValueMixinL = () => (BoolValueMixinL = dart.constFn(dart.legacy(well_known.BoolValueMixin)))();
  var StringValueMixinL = () => (StringValueMixinL = dart.constFn(dart.legacy(well_known.StringValueMixin)))();
  var BytesValueMixinL = () => (BytesValueMixinL = dart.constFn(dart.legacy(well_known.BytesValueMixin)))();
  const CT = Object.create(null);
  var L0 = "package:protobuf/src/protobuf/mixins/well_known.dart";
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.const({
        __proto__: protobuf._EmptyExtensionRegistry.prototype
      });
    },
    get C1() {
      return C1 = dart.fn(well_known.FieldMaskMixin._toCamelCase, StringLToStringL());
    },
    get C2() {
      return C2 = dart.fn(well_known.FieldMaskMixin._fromCamelCase, StringLToStringL());
    }
  }, false);
  var C0;
  well_known.AnyMixin = class AnyMixin extends core.Object {
    canUnpackInto(instance) {
      return protobuf.canUnpackIntoHelper(instance, this.typeUrl);
    }
    unpackInto(T, instance, opts) {
      let extensionRegistry = opts && 'extensionRegistry' in opts ? opts.extensionRegistry : C0 || CT.C0;
      protobuf.unpackIntoHelper(dart.legacy(T), this.value, instance, this.typeUrl, {extensionRegistry: extensionRegistry});
      return instance;
    }
    static packIntoAny(target, message, opts) {
      let typeUrlPrefix = opts && 'typeUrlPrefix' in opts ? opts.typeUrlPrefix : "type.googleapis.com";
      target.value = message.writeToBuffer();
      target.typeUrl = dart.str(typeUrlPrefix) + "/" + dart.str(message.info_.qualifiedMessageName);
    }
    static toProto3JsonHelper(message, typeRegistry) {
      let t0;
      let any = AnyMixinL().as(message);
      let info = typeRegistry.lookup(well_known._typeNameFromUrl(any.typeUrl));
      if (info == null) {
        dart.throw(new core.ArgumentError.new("The type of the Any message (" + dart.str(any.typeUrl) + ") is not in the given typeRegistry."));
      }
      let unpacked = (t0 = info.createEmptyInstance(), (() => {
        t0.mergeFromBuffer(any.value);
        return t0;
      })());
      let proto3Json = unpacked.toProto3Json();
      if (info.toProto3Json == null) {
        let map = MapLOfStringL$dynamic().as(proto3Json);
        map[$_set]("@type", any.typeUrl);
        return map;
      } else {
        return new (IdentityMapOfStringL$ObjectL()).from(["@type", any.typeUrl, "value", proto3Json]);
      }
    }
    static fromProto3JsonHelper(message, json, typeRegistry, context) {
      let t0, t0$;
      if (!MapLOfStringL$dynamic().is(json)) {
        dart.throw(context.parseException("Expected Any message encoded as {@type,...},", json));
      }
      let object = MapLOfStringL$dynamic().as(json);
      let typeUrl = object[$_get]("@type");
      if (StringL().is(typeUrl)) {
        let any = AnyMixinL().as(message);
        let info = typeRegistry.lookup(well_known._typeNameFromUrl(typeUrl));
        if (info == null) {
          dart.throw(context.parseException("Decoding Any of type " + dart.str(typeUrl) + " not in TypeRegistry " + dart.str(typeRegistry), json));
        }
        let subJson = info.fromProto3Json == null ? (t0 = LinkedHashMapOfStringL$dynamic().from(object), (() => {
          t0[$remove]("@type");
          return t0;
        })()) : object[$_get]("value");
        let packedMessage = (t0$ = info.createEmptyInstance(), (() => {
          t0$.mergeFromProto3Json(subJson, {typeRegistry: typeRegistry, supportNamesWithUnderscores: context.supportNamesWithUnderscores, ignoreUnknownFields: context.ignoreUnknownFields, permissiveEnums: context.permissiveEnums});
          return t0$;
        })());
        any.value = packedMessage.writeToBuffer();
        any.typeUrl = typeUrl;
      } else {
        dart.throw(context.parseException("Expected a string", json));
      }
    }
  };
  (well_known.AnyMixin.new = function() {
    ;
  }).prototype = well_known.AnyMixin.prototype;
  dart.addTypeTests(well_known.AnyMixin);
  dart.addTypeCaches(well_known.AnyMixin);
  well_known.AnyMixin[dart.implements] = () => [protobuf.GeneratedMessage];
  dart.setMethodSignature(well_known.AnyMixin, () => ({
    __proto__: dart.getMethods(well_known.AnyMixin.__proto__),
    canUnpackInto: dart.fnType(dart.legacy(core.bool), [dart.legacy(protobuf.GeneratedMessage)]),
    unpackInto: dart.gFnType(T => [dart.legacy(T), [dart.legacy(T)], {extensionRegistry: dart.legacy(protobuf.ExtensionRegistry)}, {}], T => [dart.legacy(protobuf.GeneratedMessage)])
  }));
  dart.setLibraryUri(well_known.AnyMixin, L0);
  well_known.TimestampMixin = class TimestampMixin extends core.Object {
    toDateTime() {
      return new core.DateTime.fromMicrosecondsSinceEpoch(dart.notNull(this.seconds.toInt()) * 1000000 + (dart.notNull(this.nanos) / 1000)[$truncate](), {isUtc: true});
    }
    static setFromDateTime(target, dateTime) {
      let micros = dateTime.microsecondsSinceEpoch;
      target.seconds = fixnum.Int64.new((dart.notNull(micros) / 1000000)[$truncate]());
      target.nanos = micros[$modulo](1000000)[$toInt]() * 1000;
    }
    static _twoDigits(n) {
      if (dart.notNull(n) >= 10) return dart.str(n);
      return "0" + dart.str(n);
    }
    static toProto3JsonHelper(message, typeRegistry) {
      let timestamp = TimestampMixinL().as(message);
      let dateTime = timestamp.toDateTime();
      if (dart.notNull(timestamp.nanos) < 0) {
        dart.throw(new core.ArgumentError.new("Timestamp with negative `nanos`: " + dart.str(timestamp.nanos)));
      }
      if (dart.notNull(timestamp.nanos) > 999999999) {
        dart.throw(new core.ArgumentError.new("Timestamp with `nanos` out of range: " + dart.str(timestamp.nanos)));
      }
      if (dart.test(dateTime.isBefore(well_known.TimestampMixin._minTimestamp)) || dart.test(dateTime.isAfter(well_known.TimestampMixin._maxTimestamp))) {
        dart.throw(new core.ArgumentError.new("Timestamp Must be from 0001-01-01T00:00:00Z to " + "9999-12-31T23:59:59Z inclusive. Was: " + dart.str(dateTime.toIso8601String())));
      }
      let y = dart.str(dateTime.year)[$padLeft](4, "0");
      let m = well_known.TimestampMixin._twoDigits(dateTime.month);
      let d = well_known.TimestampMixin._twoDigits(dateTime.day);
      let h = well_known.TimestampMixin._twoDigits(dateTime.hour);
      let min = well_known.TimestampMixin._twoDigits(dateTime.minute);
      let sec = well_known.TimestampMixin._twoDigits(dateTime.second);
      let secFrac = "";
      if (dart.notNull(timestamp.nanos) > 0) {
        secFrac = "." + dart.toString(timestamp.nanos)[$padLeft](9, "0")[$replaceFirst](well_known.TimestampMixin.finalGroupsOfThreeZeroes, "");
      }
      return y + "-" + dart.str(m) + "-" + dart.str(d) + "T" + dart.str(h) + ":" + dart.str(min) + ":" + dart.str(sec) + secFrac + "Z";
    }
    static fromProto3JsonHelper(message, json, typeRegistry, context) {
      let t0;
      if (StringL().is(json)) {
        let jsonWithoutFracSec = json;
        let nanos = 0;
        let fracSecsMatch = core.RegExp.new("\\.(\\d+)").firstMatch(json);
        if (fracSecsMatch != null) {
          let fracSecs = fracSecsMatch._get(1);
          if (fracSecs.length > 9) {
            dart.throw(context.parseException("Timestamp can have at most than 9 decimal digits", json));
          }
          nanos = core.int.parse(fracSecs[$padRight](9, "0"));
          jsonWithoutFracSec = json[$replaceRange](fracSecsMatch.start, fracSecsMatch.end, "");
        }
        let dateTimeWithoutFractionalSeconds = (t0 = core.DateTime.tryParse(jsonWithoutFracSec), t0 == null ? dart.throw(context.parseException("Timestamp not well formatted. ", json)) : t0);
        let timestamp = TimestampMixinL().as(message);
        well_known.TimestampMixin.setFromDateTime(timestamp, dateTimeWithoutFractionalSeconds);
        timestamp.nanos = nanos;
      } else {
        dart.throw(context.parseException("Expected timestamp represented as String", json));
      }
    }
  };
  (well_known.TimestampMixin.new = function() {
    ;
  }).prototype = well_known.TimestampMixin.prototype;
  dart.addTypeTests(well_known.TimestampMixin);
  dart.addTypeCaches(well_known.TimestampMixin);
  dart.setMethodSignature(well_known.TimestampMixin, () => ({
    __proto__: dart.getMethods(well_known.TimestampMixin.__proto__),
    toDateTime: dart.fnType(dart.legacy(core.DateTime), [])
  }));
  dart.setLibraryUri(well_known.TimestampMixin, L0);
  dart.defineLazy(well_known.TimestampMixin, {
    /*well_known.TimestampMixin.finalGroupsOfThreeZeroes*/get finalGroupsOfThreeZeroes() {
      return core.RegExp.new("(?:000)*$");
    },
    /*well_known.TimestampMixin._minTimestamp*/get _minTimestamp() {
      return new core.DateTime.utc(1);
    },
    /*well_known.TimestampMixin._maxTimestamp*/get _maxTimestamp() {
      return new core.DateTime.utc(9999, 13, 31, 23, 59, 59);
    }
  }, true);
  well_known.DurationMixin = class DurationMixin extends core.Object {
    static toProto3JsonHelper(message, typeRegistry) {
      let duration = DurationMixinL().as(message);
      let secFrac = duration.nanos[$abs]()[$toString]()[$padLeft](9, "0")[$replaceFirst](well_known.DurationMixin.finalZeroes, "");
      let secPart = secFrac === "" ? "" : "." + secFrac;
      return dart.str(duration.seconds) + secPart + "s";
    }
    static fromProto3JsonHelper(message, json, typeRegistry, context) {
      let t0;
      let duration = DurationMixinL().as(message);
      if (StringL().is(json)) {
        let match = well_known.DurationMixin.durationPattern[$matchAsPrefix](json);
        if (match == null) {
          dart.throw(context.parseException("Expected a String of the form `<seconds>.<nanos>s`", json));
        } else {
          let secondsString = match._get(1);
          let seconds = secondsString === "" ? fixnum.Int64.ZERO : fixnum.Int64.parseInt(secondsString);
          duration.seconds = seconds;
          let nanos = core.int.parse((t0 = match._get(2), t0 == null ? "" : t0)[$padRight](9, "0"));
          duration.nanos = dart.test(seconds['<'](0)) ? -dart.notNull(nanos) : nanos;
        }
      } else {
        dart.throw(context.parseException("Expected a String of the form `<seconds>.<nanos>s`", json));
      }
    }
  };
  (well_known.DurationMixin.new = function() {
    ;
  }).prototype = well_known.DurationMixin.prototype;
  dart.addTypeTests(well_known.DurationMixin);
  dart.addTypeCaches(well_known.DurationMixin);
  dart.setLibraryUri(well_known.DurationMixin, L0);
  dart.defineLazy(well_known.DurationMixin, {
    /*well_known.DurationMixin.finalZeroes*/get finalZeroes() {
      return core.RegExp.new("0+$");
    },
    /*well_known.DurationMixin.durationPattern*/get durationPattern() {
      return core.RegExp.new("(-?\\d*)(?:\\.(\\d*))?s$");
    }
  }, true);
  well_known.StructMixin = class StructMixin extends core.Object {
    static toProto3JsonHelper(message, typeRegistry) {
      let struct = StructMixinL().as(message);
      return struct.fields[$map](StringL(), ObjectL(), dart.fn((key, value) => new (MapEntryOfStringL$ObjectL()).__(key, well_known.ValueMixin.toProto3JsonHelper(value, typeRegistry)), StringLAndValueMixinLToMapEntryLOfStringL$ObjectL()));
    }
    static fromProto3JsonHelper(message, json, typeRegistry, context) {
      if (MapL().is(json)) {
        if (dart.test(json[$isNotEmpty])) {
          let fields = StructMixinL().as(message).fields;
          let valueCreator = MapFieldInfoL().as(message.info_.fieldInfo[$_get](1)).valueCreator;
          json[$forEach](dart.fn((key, value) => {
            if (!StringL().is(key)) {
              dart.throw(context.parseException("Expected String key", json));
            }
            let v = ValueMixinL().as(valueCreator());
            context.addMapIndex(StringL().as(key));
            well_known.ValueMixin.fromProto3JsonHelper(v, value, typeRegistry, context);
            context.popIndex();
            fields[$_set](StringL().as(key), v);
          }, dynamicAnddynamicToNullN()));
        }
      } else {
        dart.throw(context.parseException("Expected a JSON object literal (map)", json));
      }
    }
  };
  (well_known.StructMixin.new = function() {
    ;
  }).prototype = well_known.StructMixin.prototype;
  dart.addTypeTests(well_known.StructMixin);
  dart.addTypeCaches(well_known.StructMixin);
  well_known.StructMixin[dart.implements] = () => [protobuf.GeneratedMessage];
  dart.setLibraryUri(well_known.StructMixin, L0);
  dart.defineLazy(well_known.StructMixin, {
    /*well_known.StructMixin._fieldsFieldTagNumber*/get _fieldsFieldTagNumber() {
      return 1;
    }
  }, true);
  well_known.ValueMixin = class ValueMixin extends core.Object {
    static toProto3JsonHelper(message, typeRegistry) {
      let value = ValueMixinL().as(message);
      if (dart.test(value.hasNullValue())) {
        return null;
      } else if (dart.test(value.hasNumberValue())) {
        return value.numberValue;
      } else if (dart.test(value.hasStringValue())) {
        return value.stringValue;
      } else if (dart.test(value.hasBoolValue())) {
        return value.boolValue;
      } else if (dart.test(value.hasStructValue())) {
        return well_known.StructMixin.toProto3JsonHelper(value.structValue, typeRegistry);
      } else if (dart.test(value.hasListValue())) {
        return well_known.ListValueMixin.toProto3JsonHelper(value.listValue, typeRegistry);
      } else {
        dart.throw(new core.ArgumentError.new("Serializing google.protobuf.Value with no value"));
      }
    }
    static fromProto3JsonHelper(message, json, typeRegistry, context) {
      let value = ValueMixinL().as(message);
      if (json == null) {
        value.nullValue = value.nullValue;
      } else if (numL().is(json)) {
        value.numberValue = json[$toDouble]();
      } else if (StringL().is(json)) {
        value.stringValue = json;
      } else if (boolL().is(json)) {
        value.boolValue = json;
      } else if (MapL().is(json)) {
        let structValue = protobuf['GeneratedMessageGenericExtensions|deepCopy'](StructMixinL(), value.structValue);
        well_known.StructMixin.fromProto3JsonHelper(structValue, json, typeRegistry, context);
        value.structValue = structValue;
      } else if (ListL().is(json)) {
        let listValue = protobuf['GeneratedMessageGenericExtensions|deepCopy'](ListValueMixinL(), value.listValue);
        well_known.ListValueMixin.fromProto3JsonHelper(listValue, json, typeRegistry, context);
        value.listValue = listValue;
      } else {
        dart.throw(context.parseException("Expected a json-value (Map, List, String, number, bool or null)", json));
      }
    }
  };
  (well_known.ValueMixin.new = function() {
    ;
  }).prototype = well_known.ValueMixin.prototype;
  dart.addTypeTests(well_known.ValueMixin);
  dart.addTypeCaches(well_known.ValueMixin);
  well_known.ValueMixin[dart.implements] = () => [protobuf.GeneratedMessage];
  dart.setLibraryUri(well_known.ValueMixin, L0);
  well_known.ListValueMixin = class ListValueMixin extends core.Object {
    static toProto3JsonHelper(message, typeRegistry) {
      let list = ListValueMixinL().as(message);
      return list.values[$map](ObjectL(), dart.fn(value => well_known.ValueMixin.toProto3JsonHelper(value, typeRegistry), ValueMixinLToObjectL()))[$toList]();
    }
    static fromProto3JsonHelper(message, json, typeRegistry, context) {
      let list = ListValueMixinL().as(message);
      if (ListL().is(json)) {
        let subBuilder = message.info_.subBuilder(1);
        for (let i = 0; i < dart.notNull(json[$length]); i = i + 1) {
          let element = json[$_get](i);
          let v = ValueMixinL().as(subBuilder());
          context.addListIndex(i);
          well_known.ValueMixin.fromProto3JsonHelper(v, element, typeRegistry, context);
          context.popIndex();
          list.values[$add](v);
        }
      } else {
        dart.throw(context.parseException("Expected a json-List", json));
      }
    }
  };
  (well_known.ListValueMixin.new = function() {
    ;
  }).prototype = well_known.ListValueMixin.prototype;
  dart.addTypeTests(well_known.ListValueMixin);
  dart.addTypeCaches(well_known.ListValueMixin);
  well_known.ListValueMixin[dart.implements] = () => [protobuf.GeneratedMessage];
  dart.setLibraryUri(well_known.ListValueMixin, L0);
  dart.defineLazy(well_known.ListValueMixin, {
    /*well_known.ListValueMixin._valueFieldTagNumber*/get _valueFieldTagNumber() {
      return 1;
    }
  }, true);
  var C1;
  var C2;
  well_known.FieldMaskMixin = class FieldMaskMixin extends core.Object {
    static toProto3JsonHelper(message, typeRegistry) {
      let fieldMask = FieldMaskMixinL().as(message);
      for (let path of fieldMask.paths) {
        if (path[$contains](core.RegExp.new("[A-Z]|_[^a-z]"))) {
          dart.throw(new core.ArgumentError.new("Bad fieldmask " + dart.str(path) + ". Does not round-trip to json."));
        }
      }
      return fieldMask.paths[$map](StringL(), C1 || CT.C1)[$join](",");
    }
    static fromProto3JsonHelper(message, json, typeRegistry, context) {
      let t0;
      if (StringL().is(json)) {
        if (json[$contains]("_")) {
          dart.throw(context.parseException("Invalid Character `_` in FieldMask", json));
        }
        if (json === "") {
          return;
        }
        t0 = FieldMaskMixinL().as(message).paths;
        (() => {
          t0[$addAll](json[$split](",")[$map](StringL(), C2 || CT.C2));
          return t0;
        })();
      } else {
        dart.throw(context.parseException("Expected String formatted as FieldMask", json));
      }
    }
    static _toCamelCase(name) {
      return name[$replaceAllMapped](core.RegExp.new("_([a-z])"), dart.fn(m => dart.str(m.group(1)[$toUpperCase]()), MatchLToStringL()));
    }
    static _fromCamelCase(name) {
      return name[$replaceAllMapped](core.RegExp.new("[A-Z]"), dart.fn(m => "_" + dart.str(m.group(0)[$toLowerCase]()), MatchLToStringL()));
    }
  };
  (well_known.FieldMaskMixin.new = function() {
    ;
  }).prototype = well_known.FieldMaskMixin.prototype;
  dart.addTypeTests(well_known.FieldMaskMixin);
  dart.addTypeCaches(well_known.FieldMaskMixin);
  dart.setLibraryUri(well_known.FieldMaskMixin, L0);
  well_known.DoubleValueMixin = class DoubleValueMixin extends core.Object {
    static toProto3JsonHelper(message, typeRegistry) {
      return DoubleValueMixinL().as(message).value;
    }
    static fromProto3JsonHelper(message, json, typeRegistry, context) {
      let t0;
      if (numL().is(json)) {
        DoubleValueMixinL().as(message).value = json[$toDouble]();
      } else if (StringL().is(json)) {
        DoubleValueMixinL().as(message).value = (t0 = core.double.tryParse(json), t0 == null ? dart.throw(context.parseException("Expected string to encode a double", json)) : t0);
      } else {
        dart.throw(context.parseException("Expected a double as a String or number", json));
      }
    }
  };
  (well_known.DoubleValueMixin.new = function() {
    ;
  }).prototype = well_known.DoubleValueMixin.prototype;
  dart.addTypeTests(well_known.DoubleValueMixin);
  dart.addTypeCaches(well_known.DoubleValueMixin);
  dart.setLibraryUri(well_known.DoubleValueMixin, L0);
  well_known.FloatValueMixin = class FloatValueMixin extends core.Object {
    static toProto3JsonHelper(message, typeRegistry) {
      return FloatValueMixinL().as(message).value;
    }
    static fromProto3JsonHelper(message, json, typeRegistry, context) {
      let t0;
      if (numL().is(json)) {
        FloatValueMixinL().as(message).value = json[$toDouble]();
      } else if (StringL().is(json)) {
        FloatValueMixinL().as(message).value = (t0 = core.double.tryParse(json), t0 == null ? dart.throw(context.parseException("Expected a float as a String or number", json)) : t0);
      } else {
        dart.throw(context.parseException("Expected a float as a String or number", json));
      }
    }
  };
  (well_known.FloatValueMixin.new = function() {
    ;
  }).prototype = well_known.FloatValueMixin.prototype;
  dart.addTypeTests(well_known.FloatValueMixin);
  dart.addTypeCaches(well_known.FloatValueMixin);
  dart.setLibraryUri(well_known.FloatValueMixin, L0);
  well_known.Int64ValueMixin = class Int64ValueMixin extends core.Object {
    static toProto3JsonHelper(message, typeRegistry) {
      return dart.toString(Int64ValueMixinL().as(message).value);
    }
    static fromProto3JsonHelper(message, json, typeRegistry, context) {
      if (intL().is(json)) {
        Int64ValueMixinL().as(message).value = fixnum.Int64.new(json);
      } else if (StringL().is(json)) {
        try {
          Int64ValueMixinL().as(message).value = fixnum.Int64.parseInt(json);
        } catch (e) {
          let ex = dart.getThrown(e);
          if (FormatExceptionL().is(ex)) {
            dart.throw(context.parseException("Expected string to encode integer", json));
          } else
            throw e;
        }
      } else {
        dart.throw(context.parseException("Expected an integer encoded as a String or number", json));
      }
    }
  };
  (well_known.Int64ValueMixin.new = function() {
    ;
  }).prototype = well_known.Int64ValueMixin.prototype;
  dart.addTypeTests(well_known.Int64ValueMixin);
  dart.addTypeCaches(well_known.Int64ValueMixin);
  dart.setLibraryUri(well_known.Int64ValueMixin, L0);
  well_known.UInt64ValueMixin = class UInt64ValueMixin extends core.Object {
    static toProto3JsonHelper(message, typeRegistry) {
      return UInt64ValueMixinL().as(message).value.toStringUnsigned();
    }
    static fromProto3JsonHelper(message, json, typeRegistry, context) {
      if (intL().is(json)) {
        UInt64ValueMixinL().as(message).value = fixnum.Int64.new(json);
      } else if (StringL().is(json)) {
        try {
          UInt64ValueMixinL().as(message).value = fixnum.Int64.parseInt(json);
        } catch (e) {
          let ex = dart.getThrown(e);
          if (FormatExceptionL().is(ex)) {
            dart.throw(context.parseException("Expected string to encode unsigned integer", json));
          } else
            throw e;
        }
      } else {
        dart.throw(context.parseException("Expected an unsigned integer as a String or integer", json));
      }
    }
  };
  (well_known.UInt64ValueMixin.new = function() {
    ;
  }).prototype = well_known.UInt64ValueMixin.prototype;
  dart.addTypeTests(well_known.UInt64ValueMixin);
  dart.addTypeCaches(well_known.UInt64ValueMixin);
  dart.setLibraryUri(well_known.UInt64ValueMixin, L0);
  well_known.Int32ValueMixin = class Int32ValueMixin extends core.Object {
    static toProto3JsonHelper(message, typeRegistry) {
      return Int32ValueMixinL().as(message).value;
    }
    static fromProto3JsonHelper(message, json, typeRegistry, context) {
      let t4;
      if (intL().is(json)) {
        Int32ValueMixinL().as(message).value = json;
      } else if (StringL().is(json)) {
        Int32ValueMixinL().as(message).value = (t4 = core.int.tryParse(json), t4 == null ? dart.throw(context.parseException("Expected string to encode integer", json)) : t4);
      } else {
        dart.throw(context.parseException("Expected an integer encoded as a String or number", json));
      }
    }
  };
  (well_known.Int32ValueMixin.new = function() {
    ;
  }).prototype = well_known.Int32ValueMixin.prototype;
  dart.addTypeTests(well_known.Int32ValueMixin);
  dart.addTypeCaches(well_known.Int32ValueMixin);
  dart.setLibraryUri(well_known.Int32ValueMixin, L0);
  well_known.UInt32ValueMixin = class UInt32ValueMixin extends core.Object {
    static toProto3JsonHelper(message, typeRegistry) {
      return UInt32ValueMixinL().as(message).value;
    }
    static fromProto3JsonHelper(message, json, typeRegistry, context) {
      let t4;
      if (intL().is(json)) {
        UInt32ValueMixinL().as(message).value = json;
      } else if (StringL().is(json)) {
        UInt32ValueMixinL().as(message).value = (t4 = core.int.tryParse(json), t4 == null ? dart.throw(context.parseException("Expected String to encode an integer", json)) : t4);
      } else {
        dart.throw(context.parseException("Expected an unsigned integer as a String or integer", json));
      }
    }
  };
  (well_known.UInt32ValueMixin.new = function() {
    ;
  }).prototype = well_known.UInt32ValueMixin.prototype;
  dart.addTypeTests(well_known.UInt32ValueMixin);
  dart.addTypeCaches(well_known.UInt32ValueMixin);
  dart.setLibraryUri(well_known.UInt32ValueMixin, L0);
  well_known.BoolValueMixin = class BoolValueMixin extends core.Object {
    static toProto3JsonHelper(message, typeRegistry) {
      return BoolValueMixinL().as(message).value;
    }
    static fromProto3JsonHelper(message, json, typeRegistry, context) {
      if (boolL().is(json)) {
        BoolValueMixinL().as(message).value = json;
      } else {
        dart.throw(context.parseException("Expected a bool", json));
      }
    }
  };
  (well_known.BoolValueMixin.new = function() {
    ;
  }).prototype = well_known.BoolValueMixin.prototype;
  dart.addTypeTests(well_known.BoolValueMixin);
  dart.addTypeCaches(well_known.BoolValueMixin);
  dart.setLibraryUri(well_known.BoolValueMixin, L0);
  well_known.StringValueMixin = class StringValueMixin extends core.Object {
    static toProto3JsonHelper(message, typeRegistry) {
      return StringValueMixinL().as(message).value;
    }
    static fromProto3JsonHelper(message, json, typeRegistry, context) {
      if (StringL().is(json)) {
        StringValueMixinL().as(message).value = json;
      } else {
        dart.throw(context.parseException("Expected a String", json));
      }
    }
  };
  (well_known.StringValueMixin.new = function() {
    ;
  }).prototype = well_known.StringValueMixin.prototype;
  dart.addTypeTests(well_known.StringValueMixin);
  dart.addTypeCaches(well_known.StringValueMixin);
  dart.setLibraryUri(well_known.StringValueMixin, L0);
  well_known.BytesValueMixin = class BytesValueMixin extends core.Object {
    static toProto3JsonHelper(message, typeRegistry) {
      return convert.base64.encode(BytesValueMixinL().as(message).value);
    }
    static fromProto3JsonHelper(message, json, typeRegistry, context) {
      if (StringL().is(json)) {
        try {
          BytesValueMixinL().as(message).value = convert.base64.decode(json);
        } catch (e) {
          let ex = dart.getThrown(e);
          if (FormatExceptionL().is(ex)) {
            dart.throw(context.parseException("Expected bytes encoded as base64 String", json));
          } else
            throw e;
        }
      } else {
        dart.throw(context.parseException("Expected bytes encoded as base64 String", json));
      }
    }
  };
  (well_known.BytesValueMixin.new = function() {
    ;
  }).prototype = well_known.BytesValueMixin.prototype;
  dart.addTypeTests(well_known.BytesValueMixin);
  dart.addTypeCaches(well_known.BytesValueMixin);
  dart.setLibraryUri(well_known.BytesValueMixin, L0);
  well_known._typeNameFromUrl = function _typeNameFromUrl(typeUrl) {
    let index = typeUrl[$lastIndexOf]("/");
    return index < 0 ? "" : typeUrl[$substring](index + 1);
  };
  dart.trackLibraries("packages/protobuf/src/protobuf/mixins/well_known", {
    "package:protobuf/src/protobuf/mixins/well_known.dart": well_known
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["well_known.dart"],"names":[],"mappings":"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","file":"well_known.unsound.ddc.js"}');
  // Exports:
  return {
    src__protobuf__mixins__well_known: well_known
  };
}));

//# sourceMappingURL=well_known.unsound.ddc.js.map

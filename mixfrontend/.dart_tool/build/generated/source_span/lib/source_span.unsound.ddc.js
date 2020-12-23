define(['dart_sdk', 'packages/path/path', 'packages/collection/collection', 'packages/term_glyph/src/generated/ascii_glyph_set'], (function load__packages__source_span__source_span(dart_sdk, packages__path__path, packages__collection__collection, packages__term_glyph__src__generated__ascii_glyph_set) {
  'use strict';
  const core = dart_sdk.core;
  const _interceptors = dart_sdk._interceptors;
  const math = dart_sdk.math;
  const _native_typed_data = dart_sdk._native_typed_data;
  const typed_data = dart_sdk.typed_data;
  const _js_helper = dart_sdk._js_helper;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const path = packages__path__path.path;
  const functions = packages__collection__collection.src__functions;
  const top_level = packages__term_glyph__src__generated__ascii_glyph_set.src__generated__top_level;
  const term_glyph = packages__term_glyph__src__generated__ascii_glyph_set.term_glyph;
  var span_mixin = Object.create(dart.library);
  var utils = Object.create(dart.library);
  var span = Object.create(dart.library);
  var span_with_context = Object.create(dart.library);
  var location = Object.create(dart.library);
  var highlighter = Object.create(dart.library);
  var colors = Object.create(dart.library);
  var file = Object.create(dart.library);
  var location_mixin = Object.create(dart.library);
  var source_span = Object.create(dart.library);
  var span_exception = Object.create(dart.library);
  var $substring = dartx.substring;
  var $isNotEmpty = dartx.isNotEmpty;
  var $compareTo = dartx.compareTo;
  var $_equals = dartx._equals;
  var $hashCode = dartx.hashCode;
  var $toString = dartx.toString;
  var $indexOf = dartx.indexOf;
  var $_set = dartx._set;
  var $codeUnits = dartx.codeUnits;
  var $isEmpty = dartx.isEmpty;
  var $lastIndexOf = dartx.lastIndexOf;
  var $codeUnitAt = dartx.codeUnitAt;
  var $contains = dartx.contains;
  var $abs = dartx.abs;
  var $add = dartx.add;
  var $entries = dartx.entries;
  var $last = dartx.last;
  var $length = dartx.length;
  var $where = dartx.where;
  var $map = dartx.map;
  var $reduce = dartx.reduce;
  var $_get = dartx._get;
  var $values = dartx.values;
  var $sort = dartx.sort;
  var $allMatches = dartx.allMatches;
  var $split = dartx.split;
  var $removeWhere = dartx.removeWhere;
  var $skip = dartx.skip;
  var $addAll = dartx.addAll;
  var $expand = dartx.expand;
  var $toList = dartx.toList;
  var $first = dartx.first;
  var $reversed = dartx.reversed;
  var $firstWhere = dartx.firstWhere;
  var $times = dartx['*'];
  var $padRight = dartx.padRight;
  var $replaceAll = dartx.replaceAll;
  var $endsWith = dartx.endsWith;
  var $join = dartx.join;
  var $runes = dartx.runes;
  var $truncate = dartx.truncate;
  var $sublist = dartx.sublist;
  var SourceSpanL = () => (SourceSpanL = dart.constFn(dart.legacy(span.SourceSpan)))();
  var SourceLocationL = () => (SourceLocationL = dart.constFn(dart.legacy(location.SourceLocation)))();
  var SourceSpanWithContextL = () => (SourceSpanWithContextL = dart.constFn(dart.legacy(span_with_context.SourceSpanWithContext)))();
  var StringL = () => (StringL = dart.constFn(dart.legacy(core.String)))();
  var MapOfSourceSpanL$StringL = () => (MapOfSourceSpanL$StringL = dart.constFn(core.Map$(SourceSpanL(), StringL())))();
  var MapLOfSourceSpanL$StringL = () => (MapLOfSourceSpanL$StringL = dart.constFn(dart.legacy(MapOfSourceSpanL$StringL())))();
  var boolL = () => (boolL = dart.constFn(dart.legacy(core.bool)))();
  var StringLAndStringLAndMapLOfSourceSpanL$StringL__ToStringL = () => (StringLAndStringLAndMapLOfSourceSpanL$StringL__ToStringL = dart.constFn(dart.fnType(StringL(), [StringL(), StringL(), MapLOfSourceSpanL$StringL()], {color: boolL(), primaryColor: StringL(), secondaryColor: StringL()}, {})))();
  var StringLAndMapLOfSourceSpanL$StringL__ToStringL = () => (StringLAndMapLOfSourceSpanL$StringL__ToStringL = dart.constFn(dart.fnType(StringL(), [StringL(), MapLOfSourceSpanL$StringL()], {color: boolL(), primaryColor: StringL(), secondaryColor: StringL()}, {})))();
  var intL = () => (intL = dart.constFn(dart.legacy(core.int)))();
  var intLTovoid = () => (intLTovoid = dart.constFn(dart.fnType(dart.void, [intL()])))();
  var intLAndintLToSourceSpanL = () => (intLAndintLToSourceSpanL = dart.constFn(dart.fnType(SourceSpanL(), [intL()], [intL()])))();
  var UriL = () => (UriL = dart.constFn(dart.legacy(core.Uri)))();
  var _HighlightL = () => (_HighlightL = dart.constFn(dart.legacy(highlighter._Highlight)))();
  var JSArrayOf_HighlightL = () => (JSArrayOf_HighlightL = dart.constFn(_interceptors.JSArray$(_HighlightL())))();
  var VoidToStringL = () => (VoidToStringL = dart.constFn(dart.fnType(StringL(), [])))();
  var _HighlightLToboolL = () => (_HighlightLToboolL = dart.constFn(dart.fnType(boolL(), [_HighlightL()])))();
  var _LineL = () => (_LineL = dart.constFn(dart.legacy(highlighter._Line)))();
  var _LineLTointL = () => (_LineLTointL = dart.constFn(dart.fnType(intL(), [_LineL()])))();
  var TAndTToT = () => (TAndTToT = dart.constFn(dart.gFnType(T => [T, [T, T]], T => [core.num])))();
  var ObjectL = () => (ObjectL = dart.constFn(dart.legacy(core.Object)))();
  var _LineLToUriL = () => (_LineLToUriL = dart.constFn(dart.fnType(UriL(), [_LineL()])))();
  var dynamicTodynamic = () => (dynamicTodynamic = dart.constFn(dart.fnType(dart.dynamic, [dart.dynamic])))();
  var _HighlightLAnd_HighlightLTointL = () => (_HighlightLAnd_HighlightLTointL = dart.constFn(dart.fnType(intL(), [_HighlightL(), _HighlightL()])))();
  var JSArrayOf_LineL = () => (JSArrayOf_LineL = dart.constFn(_interceptors.JSArray$(_LineL())))();
  var ListOf_LineL = () => (ListOf_LineL = dart.constFn(core.List$(_LineL())))();
  var ListLOf_LineL = () => (ListLOf_LineL = dart.constFn(dart.legacy(ListOf_LineL())))();
  var ListOf_HighlightL = () => (ListOf_HighlightL = dart.constFn(core.List$(_HighlightL())))();
  var ListLOf_HighlightL = () => (ListLOf_HighlightL = dart.constFn(dart.legacy(ListOf_HighlightL())))();
  var ListLOf_HighlightLToListLOf_LineL = () => (ListLOf_HighlightLToListLOf_LineL = dart.constFn(dart.fnType(ListLOf_LineL(), [ListLOf_HighlightL()])))();
  var VoidToNullN = () => (VoidToNullN = dart.constFn(dart.fnType(core.Null, [])))();
  var VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  var VoidToSourceSpanWithContextL = () => (VoidToSourceSpanWithContextL = dart.constFn(dart.fnType(SourceSpanWithContextL(), [])))();
  var JSArrayOfintL = () => (JSArrayOfintL = dart.constFn(_interceptors.JSArray$(intL())))();
  var _FileSpanL = () => (_FileSpanL = dart.constFn(dart.legacy(file._FileSpan)))();
  var FileSpanL = () => (FileSpanL = dart.constFn(dart.legacy(file.FileSpan)))();
  var intLAndintLToFileSpanL = () => (intLAndintLToFileSpanL = dart.constFn(dart.fnType(FileSpanL(), [intL()], [intL()])))();
  const CT = Object.create(null);
  var L2 = "package:source_span/src/span_with_context.dart";
  var L6 = "package:source_span/src/file.dart";
  var L8 = "package:source_span/src/span_exception.dart";
  var L5 = "package:source_span/src/highlighter.dart";
  var L4 = "org-dartlang-app:///packages/source_span/src/highlighter.dart";
  var L0 = "package:source_span/src/span_mixin.dart";
  var L1 = "package:source_span/src/span.dart";
  var L7 = "package:source_span/src/location_mixin.dart";
  var L3 = "package:source_span/src/location.dart";
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.fn(math.max, TAndTToT());
    },
    get C1() {
      return C1 = dart.const(new _js_helper.PrivateSymbol.new('_context', _context));
    }
  }, false);
  span_mixin.SourceSpanMixin = class SourceSpanMixin extends core.Object {
    get sourceUrl() {
      return this.start.sourceUrl;
    }
    get length() {
      return dart.notNull(this.end.offset) - dart.notNull(this.start.offset);
    }
    compareTo(other) {
      SourceSpanL().as(other);
      let result = this.start.compareTo(other.start);
      return result === 0 ? this.end.compareTo(other.end) : result;
    }
    union(other) {
      if (!dart.equals(this.sourceUrl, other.sourceUrl)) {
        dart.throw(new core.ArgumentError.new("Source URLs \"" + dart.str(this.sourceUrl) + "\" and " + " \"" + dart.str(other.sourceUrl) + "\" don't match."));
      }
      let start = utils.min(SourceLocationL(), this.start, other.start);
      let end = utils.max(SourceLocationL(), this.end, other.end);
      let beginSpan = dart.equals(start, this.start) ? this : other;
      let endSpan = dart.equals(end, this.end) ? this : other;
      if (dart.notNull(beginSpan.end.compareTo(endSpan.start)) < 0) {
        dart.throw(new core.ArgumentError.new("Spans " + dart.str(this) + " and " + dart.str(other) + " are disjoint."));
      }
      let text = dart.notNull(beginSpan.text) + endSpan.text[$substring](beginSpan.end.distance(endSpan.start));
      return span.SourceSpan.new(start, end, text);
    }
    message(message, opts) {
      let t0, t0$;
      let color = opts && 'color' in opts ? opts.color : null;
      let buffer = (t0 = new core.StringBuffer.new(), (() => {
        t0.write("line " + dart.str(dart.notNull(this.start.line) + 1) + ", column " + dart.str(dart.notNull(this.start.column) + 1));
        return t0;
      })());
      if (this.sourceUrl != null) buffer.write(" of " + dart.str(path.prettyUri(this.sourceUrl)));
      buffer.write(": " + dart.str(message));
      let highlight = this.highlight({color: color});
      if (highlight[$isNotEmpty]) {
        t0$ = buffer;
        (() => {
          t0$.writeln();
          t0$.write(highlight);
          return t0$;
        })();
      }
      return dart.toString(buffer);
    }
    highlight(opts) {
      let color = opts && 'color' in opts ? opts.color : null;
      if (!SourceSpanWithContextL().is(this) && this.length === 0) return "";
      return new highlighter.Highlighter.new(this, {color: color}).highlight();
    }
    _equals(other) {
      if (other == null) return false;
      return SourceSpanL().is(other) && dart.equals(this.start, other.start) && dart.equals(this.end, other.end);
    }
    get hashCode() {
      return dart.notNull(dart.hashCode(this.start)) + 31 * dart.notNull(dart.hashCode(this.end));
    }
    toString() {
      return "<" + dart.str(this.runtimeType) + ": from " + dart.str(this.start) + " to " + dart.str(this.end) + " \"" + dart.str(this.text) + "\">";
    }
  };
  (span_mixin.SourceSpanMixin.new = function() {
    ;
  }).prototype = span_mixin.SourceSpanMixin.prototype;
  dart.addTypeTests(span_mixin.SourceSpanMixin);
  dart.addTypeCaches(span_mixin.SourceSpanMixin);
  span_mixin.SourceSpanMixin[dart.implements] = () => [span.SourceSpan];
  dart.setMethodSignature(span_mixin.SourceSpanMixin, () => ({
    __proto__: dart.getMethods(span_mixin.SourceSpanMixin.__proto__),
    compareTo: dart.fnType(dart.legacy(core.int), [dart.legacy(core.Object)]),
    [$compareTo]: dart.fnType(dart.legacy(core.int), [dart.legacy(core.Object)]),
    union: dart.fnType(dart.legacy(span.SourceSpan), [dart.legacy(span.SourceSpan)]),
    message: dart.fnType(dart.legacy(core.String), [dart.legacy(core.String)], {color: dart.dynamic}, {}),
    highlight: dart.fnType(dart.legacy(core.String), [], {color: dart.dynamic}, {}),
    _equals: dart.fnType(dart.legacy(core.bool), [dart.dynamic]),
    [$_equals]: dart.fnType(dart.legacy(core.bool), [dart.dynamic]),
    toString: dart.fnType(dart.legacy(core.String), []),
    [$toString]: dart.fnType(dart.legacy(core.String), [])
  }));
  dart.setGetterSignature(span_mixin.SourceSpanMixin, () => ({
    __proto__: dart.getGetters(span_mixin.SourceSpanMixin.__proto__),
    sourceUrl: dart.legacy(core.Uri),
    length: dart.legacy(core.int),
    hashCode: dart.legacy(core.int),
    [$hashCode]: dart.legacy(core.int)
  }));
  dart.setLibraryUri(span_mixin.SourceSpanMixin, L0);
  dart.defineExtensionMethods(span_mixin.SourceSpanMixin, ['compareTo', '_equals', 'toString']);
  dart.defineExtensionAccessors(span_mixin.SourceSpanMixin, ['hashCode']);
  utils.min = function min(T, obj1, obj2) {
    return dart.notNull(obj1[$compareTo](obj2)) > 0 ? obj2 : obj1;
  };
  utils.max = function max(T, obj1, obj2) {
    return dart.notNull(obj1[$compareTo](obj2)) > 0 ? obj1 : obj2;
  };
  utils.isAllTheSame = function isAllTheSame(iter) {
    let lastValue = null;
    for (let value of iter) {
      if (lastValue == null) {
        lastValue = value;
      } else if (!dart.equals(value, lastValue)) {
        return false;
      }
    }
    return true;
  };
  utils.isMultiline = function isMultiline(span) {
    return span.start.line != span.end.line;
  };
  utils.replaceFirstNull = function replaceFirstNull(E, list, element) {
    let index = list[$indexOf](null);
    if (dart.notNull(index) < 0) dart.throw(new core.ArgumentError.new(dart.str(list) + " contains no null elements."));
    list[$_set](index, element);
  };
  utils.replaceWithNull = function replaceWithNull(E, list, element) {
    let index = list[$indexOf](element);
    if (dart.notNull(index) < 0) {
      dart.throw(new core.ArgumentError.new(dart.str(list) + " contains no elements matching " + dart.str(element) + "."));
    }
    list[$_set](index, null);
  };
  utils.countCodeUnits = function countCodeUnits(string, codeUnit) {
    let count = 0;
    for (let codeUnitToCheck of string[$codeUnits]) {
      if (codeUnitToCheck == codeUnit) count = count + 1;
    }
    return count;
  };
  utils.findLineStart = function findLineStart(context, text, column) {
    if (text[$isEmpty]) {
      let beginningOfLine = 0;
      while (true) {
        let index = context[$indexOf]("\n", beginningOfLine);
        if (index === -1) {
          return context.length - beginningOfLine >= dart.notNull(column) ? beginningOfLine : null;
        }
        if (index - beginningOfLine >= dart.notNull(column)) return beginningOfLine;
        beginningOfLine = index + 1;
      }
    }
    let index = context[$indexOf](text);
    while (index !== -1) {
      let lineStart = index === 0 ? 0 : context[$lastIndexOf]("\n", index - 1) + 1;
      let textColumn = index - lineStart;
      if (column === textColumn) return lineStart;
      index = context[$indexOf](text, index + 1);
    }
    return null;
  };
  span.SourceSpan = class SourceSpan extends core.Object {
    static new(start, end, text) {
      return new span.SourceSpanBase.new(start, end, text);
    }
  };
  (span.SourceSpan[dart.mixinNew] = function() {
  }).prototype = span.SourceSpan.prototype;
  dart.addTypeTests(span.SourceSpan);
  dart.addTypeCaches(span.SourceSpan);
  span.SourceSpan[dart.implements] = () => [core.Comparable$(dart.legacy(span.SourceSpan))];
  dart.setLibraryUri(span.SourceSpan, L1);
  var start$ = dart.privateName(span, "SourceSpanBase.start");
  var end$ = dart.privateName(span, "SourceSpanBase.end");
  var text$ = dart.privateName(span, "SourceSpanBase.text");
  span.SourceSpanBase = class SourceSpanBase extends span_mixin.SourceSpanMixin {
    get start() {
      return this[start$];
    }
    set start(value) {
      super.start = value;
    }
    get end() {
      return this[end$];
    }
    set end(value) {
      super.end = value;
    }
    get text() {
      return this[text$];
    }
    set text(value) {
      super.text = value;
    }
  };
  (span.SourceSpanBase.new = function(start, end, text) {
    this[start$] = start;
    this[end$] = end;
    this[text$] = text;
    if (!dart.equals(this.end.sourceUrl, this.start.sourceUrl)) {
      dart.throw(new core.ArgumentError.new("Source URLs \"" + dart.str(this.start.sourceUrl) + "\" and " + " \"" + dart.str(this.end.sourceUrl) + "\" don't match."));
    } else if (dart.notNull(this.end.offset) < dart.notNull(this.start.offset)) {
      dart.throw(new core.ArgumentError.new("End " + dart.str(this.end) + " must come after start " + dart.str(this.start) + "."));
    } else if (this.text.length !== this.start.distance(this.end)) {
      dart.throw(new core.ArgumentError.new("Text \"" + dart.str(this.text) + "\" must be " + dart.str(this.start.distance(this.end)) + " " + "characters long."));
    }
  }).prototype = span.SourceSpanBase.prototype;
  dart.addTypeTests(span.SourceSpanBase);
  dart.addTypeCaches(span.SourceSpanBase);
  dart.setLibraryUri(span.SourceSpanBase, L1);
  dart.setFieldSignature(span.SourceSpanBase, () => ({
    __proto__: dart.getFields(span.SourceSpanBase.__proto__),
    start: dart.finalFieldType(dart.legacy(location.SourceLocation)),
    end: dart.finalFieldType(dart.legacy(location.SourceLocation)),
    text: dart.finalFieldType(dart.legacy(core.String))
  }));
  span['SourceSpanExtension|messageMultiple'] = function SourceSpanExtension$124messageMultiple($this, message, label, secondarySpans, opts) {
    let t1, t1$;
    let color = opts && 'color' in opts ? opts.color : false;
    let primaryColor = opts && 'primaryColor' in opts ? opts.primaryColor : null;
    let secondaryColor = opts && 'secondaryColor' in opts ? opts.secondaryColor : null;
    let buffer = (t1 = new core.StringBuffer.new(), (() => {
      t1.write("line " + dart.str(dart.notNull($this.start.line) + 1) + ", column " + dart.str(dart.notNull($this.start.column) + 1));
      return t1;
    })());
    if ($this.sourceUrl != null) buffer.write(" of " + dart.str(path.prettyUri($this.sourceUrl)));
    t1$ = buffer;
    (() => {
      t1$.writeln(": " + dart.str(message));
      t1$.write(span['SourceSpanExtension|highlightMultiple']($this, label, secondarySpans, {color: color, primaryColor: primaryColor, secondaryColor: secondaryColor}));
      return t1$;
    })();
    return dart.toString(buffer);
  };
  span['SourceSpanExtension|get#messageMultiple'] = function SourceSpanExtension$124get$35messageMultiple($this) {
    return dart.fn((message, label, secondarySpans, opts) => {
      let color = opts && 'color' in opts ? opts.color : false;
      let primaryColor = opts && 'primaryColor' in opts ? opts.primaryColor : null;
      let secondaryColor = opts && 'secondaryColor' in opts ? opts.secondaryColor : null;
      return span['SourceSpanExtension|messageMultiple']($this, message, label, secondarySpans, {color: color, primaryColor: primaryColor, secondaryColor: secondaryColor});
    }, StringLAndStringLAndMapLOfSourceSpanL$StringL__ToStringL());
  };
  span['SourceSpanExtension|highlightMultiple'] = function SourceSpanExtension$124highlightMultiple($this, label, secondarySpans, opts) {
    let color = opts && 'color' in opts ? opts.color : false;
    let primaryColor = opts && 'primaryColor' in opts ? opts.primaryColor : null;
    let secondaryColor = opts && 'secondaryColor' in opts ? opts.secondaryColor : null;
    return new highlighter.Highlighter.multiple($this, label, secondarySpans, {color: color, primaryColor: primaryColor, secondaryColor: secondaryColor}).highlight();
  };
  span['SourceSpanExtension|get#highlightMultiple'] = function SourceSpanExtension$124get$35highlightMultiple($this) {
    return dart.fn((label, secondarySpans, opts) => {
      let color = opts && 'color' in opts ? opts.color : false;
      let primaryColor = opts && 'primaryColor' in opts ? opts.primaryColor : null;
      let secondaryColor = opts && 'secondaryColor' in opts ? opts.secondaryColor : null;
      return span['SourceSpanExtension|highlightMultiple']($this, label, secondarySpans, {color: color, primaryColor: primaryColor, secondaryColor: secondaryColor});
    }, StringLAndMapLOfSourceSpanL$StringL__ToStringL());
  };
  span['SourceSpanExtension|subspan'] = function SourceSpanExtension$124subspan($this, start, end = null) {
    core.RangeError.checkValidRange(start, end, $this.length);
    if (start === 0 && (end == null || end == $this.length)) return $this;
    let text = $this.text;
    let startLocation = $this.start;
    let line = startLocation.line;
    let column = startLocation.column;
    function consumeCodePoint(i) {
      let codeUnit = text[$codeUnitAt](i);
      if (codeUnit === 10 || codeUnit === 13 && (dart.notNull(i) + 1 === text.length || text[$codeUnitAt](dart.notNull(i) + 1) !== 10)) {
        line = dart.notNull(line) + 1;
        column = 0;
      } else {
        column = dart.notNull(column) + 1;
      }
    }
    dart.fn(consumeCodePoint, intLTovoid());
    for (let i = 0; i < dart.notNull(start); i = i + 1) {
      consumeCodePoint(i);
    }
    let newStartLocation = new location.SourceLocation.new(dart.notNull(startLocation.offset) + dart.notNull(start), {sourceUrl: $this.sourceUrl, line: line, column: column});
    let newEndLocation = null;
    if (end == null || end == $this.length) {
      newEndLocation = $this.end;
    } else if (end == start) {
      newEndLocation = newStartLocation;
    } else if (end != null && end != $this.length) {
      for (let i = start; dart.notNull(i) < dart.notNull(end); i = dart.notNull(i) + 1) {
        consumeCodePoint(i);
      }
      newEndLocation = new location.SourceLocation.new(dart.notNull(startLocation.offset) + dart.notNull(end), {sourceUrl: $this.sourceUrl, line: line, column: column});
    }
    return span.SourceSpan.new(newStartLocation, newEndLocation, text[$substring](start, end));
  };
  span['SourceSpanExtension|get#subspan'] = function SourceSpanExtension$124get$35subspan($this) {
    return dart.fn((start, end = null) => span['SourceSpanExtension|subspan']($this, start, end), intLAndintLToSourceSpanL());
  };
  var _context$ = dart.privateName(span_with_context, "_context");
  span_with_context.SourceSpanWithContext = class SourceSpanWithContext extends span.SourceSpanBase {
    get context() {
      return this[_context$];
    }
  };
  (span_with_context.SourceSpanWithContext.new = function(start, end, text, _context) {
    this[_context$] = _context;
    span_with_context.SourceSpanWithContext.__proto__.new.call(this, start, end, text);
    if (!this.context[$contains](text)) {
      dart.throw(new core.ArgumentError.new("The context line \"" + dart.str(this.context) + "\" must contain \"" + dart.str(text) + "\"."));
    }
    if (utils.findLineStart(this.context, text, start.column) == null) {
      dart.throw(new core.ArgumentError.new("The span text \"" + dart.str(text) + "\" must start at " + "column " + dart.str(dart.notNull(start.column) + 1) + " in a line within \"" + dart.str(this.context) + "\"."));
    }
  }).prototype = span_with_context.SourceSpanWithContext.prototype;
  dart.addTypeTests(span_with_context.SourceSpanWithContext);
  dart.addTypeCaches(span_with_context.SourceSpanWithContext);
  dart.setGetterSignature(span_with_context.SourceSpanWithContext, () => ({
    __proto__: dart.getGetters(span_with_context.SourceSpanWithContext.__proto__),
    context: dart.legacy(core.String)
  }));
  dart.setLibraryUri(span_with_context.SourceSpanWithContext, L2);
  dart.setFieldSignature(span_with_context.SourceSpanWithContext, () => ({
    __proto__: dart.getFields(span_with_context.SourceSpanWithContext.__proto__),
    [_context$]: dart.finalFieldType(dart.legacy(core.String))
  }));
  var sourceUrl$ = dart.privateName(location, "SourceLocation.sourceUrl");
  var offset$ = dart.privateName(location, "SourceLocation.offset");
  var line$ = dart.privateName(location, "SourceLocation.line");
  var column$ = dart.privateName(location, "SourceLocation.column");
  location.SourceLocation = class SourceLocation extends core.Object {
    get sourceUrl() {
      return this[sourceUrl$];
    }
    set sourceUrl(value) {
      super.sourceUrl = value;
    }
    get offset() {
      return this[offset$];
    }
    set offset(value) {
      super.offset = value;
    }
    get line() {
      return this[line$];
    }
    set line(value) {
      super.line = value;
    }
    get column() {
      return this[column$];
    }
    set column(value) {
      super.column = value;
    }
    get toolString() {
      let t6;
      let source = (t6 = this.sourceUrl, t6 == null ? "unknown source" : t6);
      return dart.str(source) + ":" + dart.str(dart.notNull(this.line) + 1) + ":" + dart.str(dart.notNull(this.column) + 1);
    }
    distance(other) {
      if (!dart.equals(this.sourceUrl, other.sourceUrl)) {
        dart.throw(new core.ArgumentError.new("Source URLs \"" + dart.str(this.sourceUrl) + "\" and " + "\"" + dart.str(other.sourceUrl) + "\" don't match."));
      }
      return (dart.notNull(this.offset) - dart.notNull(other.offset))[$abs]();
    }
    pointSpan() {
      return span.SourceSpan.new(this, this, "");
    }
    compareTo(other) {
      SourceLocationL().as(other);
      if (!dart.equals(this.sourceUrl, other.sourceUrl)) {
        dart.throw(new core.ArgumentError.new("Source URLs \"" + dart.str(this.sourceUrl) + "\" and " + "\"" + dart.str(other.sourceUrl) + "\" don't match."));
      }
      return dart.notNull(this.offset) - dart.notNull(other.offset);
    }
    _equals(other) {
      if (other == null) return false;
      return SourceLocationL().is(other) && dart.equals(this.sourceUrl, other.sourceUrl) && this.offset == other.offset;
    }
    get hashCode() {
      return dart.notNull(dart.hashCode(this.sourceUrl)) + dart.notNull(this.offset);
    }
    toString() {
      return "<" + dart.str(this.runtimeType) + ": " + dart.str(this.offset) + " " + dart.str(this.toolString) + ">";
    }
  };
  (location.SourceLocation.new = function(offset, opts) {
    let t6, t6$;
    let sourceUrl = opts && 'sourceUrl' in opts ? opts.sourceUrl : null;
    let line = opts && 'line' in opts ? opts.line : null;
    let column = opts && 'column' in opts ? opts.column : null;
    this[offset$] = offset;
    this[sourceUrl$] = StringL().is(sourceUrl) ? core.Uri.parse(sourceUrl) : UriL().as(sourceUrl);
    this[line$] = (t6 = line, t6 == null ? 0 : t6);
    this[column$] = (t6$ = column, t6$ == null ? offset : t6$);
    if (dart.notNull(this.offset) < 0) {
      dart.throw(new core.RangeError.new("Offset may not be negative, was " + dart.str(this.offset) + "."));
    } else if (line != null && dart.notNull(line) < 0) {
      dart.throw(new core.RangeError.new("Line may not be negative, was " + dart.str(line) + "."));
    } else if (column != null && dart.notNull(column) < 0) {
      dart.throw(new core.RangeError.new("Column may not be negative, was " + dart.str(column) + "."));
    }
  }).prototype = location.SourceLocation.prototype;
  dart.addTypeTests(location.SourceLocation);
  dart.addTypeCaches(location.SourceLocation);
  location.SourceLocation[dart.implements] = () => [core.Comparable$(dart.legacy(location.SourceLocation))];
  dart.setMethodSignature(location.SourceLocation, () => ({
    __proto__: dart.getMethods(location.SourceLocation.__proto__),
    distance: dart.fnType(dart.legacy(core.int), [dart.legacy(location.SourceLocation)]),
    pointSpan: dart.fnType(dart.legacy(span.SourceSpan), []),
    compareTo: dart.fnType(dart.legacy(core.int), [dart.legacy(core.Object)]),
    [$compareTo]: dart.fnType(dart.legacy(core.int), [dart.legacy(core.Object)]),
    _equals: dart.fnType(dart.legacy(core.bool), [dart.dynamic]),
    [$_equals]: dart.fnType(dart.legacy(core.bool), [dart.dynamic]),
    toString: dart.fnType(dart.legacy(core.String), []),
    [$toString]: dart.fnType(dart.legacy(core.String), [])
  }));
  dart.setGetterSignature(location.SourceLocation, () => ({
    __proto__: dart.getGetters(location.SourceLocation.__proto__),
    toolString: dart.legacy(core.String),
    hashCode: dart.legacy(core.int),
    [$hashCode]: dart.legacy(core.int)
  }));
  dart.setLibraryUri(location.SourceLocation, L3);
  dart.setFieldSignature(location.SourceLocation, () => ({
    __proto__: dart.getFields(location.SourceLocation.__proto__),
    sourceUrl: dart.finalFieldType(dart.legacy(core.Uri)),
    offset: dart.finalFieldType(dart.legacy(core.int)),
    line: dart.finalFieldType(dart.legacy(core.int)),
    column: dart.finalFieldType(dart.legacy(core.int))
  }));
  dart.defineExtensionMethods(location.SourceLocation, ['compareTo', '_equals', 'toString']);
  dart.defineExtensionAccessors(location.SourceLocation, ['hashCode']);
  location.SourceLocationBase = class SourceLocationBase extends location.SourceLocation {};
  (location.SourceLocationBase.new = function(offset, opts) {
    let sourceUrl = opts && 'sourceUrl' in opts ? opts.sourceUrl : null;
    let line = opts && 'line' in opts ? opts.line : null;
    let column = opts && 'column' in opts ? opts.column : null;
    location.SourceLocationBase.__proto__.new.call(this, offset, {sourceUrl: sourceUrl, line: line, column: column});
    ;
  }).prototype = location.SourceLocationBase.prototype;
  dart.addTypeTests(location.SourceLocationBase);
  dart.addTypeCaches(location.SourceLocationBase);
  dart.setLibraryUri(location.SourceLocationBase, L3);
  var _buffer = dart.privateName(highlighter, "_buffer");
  var _lines$ = dart.privateName(highlighter, "_lines");
  var _primaryColor$ = dart.privateName(highlighter, "_primaryColor");
  var _secondaryColor$ = dart.privateName(highlighter, "_secondaryColor");
  var _paddingBeforeSidebar = dart.privateName(highlighter, "_paddingBeforeSidebar");
  var _maxMultilineSpans = dart.privateName(highlighter, "_maxMultilineSpans");
  var C0;
  var _multipleFiles = dart.privateName(highlighter, "_multipleFiles");
  var _writeFileStart = dart.privateName(highlighter, "_writeFileStart");
  var _writeSidebar = dart.privateName(highlighter, "_writeSidebar");
  var _isOnlyWhitespace = dart.privateName(highlighter, "_isOnlyWhitespace");
  var _writeMultilineHighlights = dart.privateName(highlighter, "_writeMultilineHighlights");
  var _writeHighlightedText = dart.privateName(highlighter, "_writeHighlightedText");
  var _writeText = dart.privateName(highlighter, "_writeText");
  var _writeIndicator = dart.privateName(highlighter, "_writeIndicator");
  var _colorize = dart.privateName(highlighter, "_colorize");
  var _writeUnderline = dart.privateName(highlighter, "_writeUnderline");
  var _writeLabel = dart.privateName(highlighter, "_writeLabel");
  var _writeArrow = dart.privateName(highlighter, "_writeArrow");
  var _countTabs = dart.privateName(highlighter, "_countTabs");
  highlighter.Highlighter = class Highlighter extends core.Object {
    static _contiguous(lines) {
      for (let i = 0; i < dart.notNull(lines[$length]) - 1; i = i + 1) {
        let thisLine = lines[$_get](i);
        let nextLine = lines[$_get](i + 1);
        if (dart.notNull(thisLine.number) + 1 !== nextLine.number && dart.equals(thisLine.url, nextLine.url)) {
          return false;
        }
      }
      return true;
    }
    static _collateLines(highlights) {
      let highlightsByUrl = functions.groupBy(_HighlightL(), dart.dynamic, highlights, dart.fn(highlight => dart.dload(dart.dload(highlight, 'span'), 'sourceUrl'), dynamicTodynamic()));
      for (let list of highlightsByUrl[$values]) {
        list[$sort](dart.fn((highlight1, highlight2) => highlight1.span.compareTo(highlight2.span), _HighlightLAnd_HighlightLTointL()));
      }
      return highlightsByUrl[$values][$expand](_LineL(), dart.fn(highlightsForFile => {
        let lines = JSArrayOf_LineL().of([]);
        for (let highlight of highlightsForFile) {
          let context = highlight.span.context;
          let lineStart = utils.findLineStart(context, highlight.span.text, highlight.span.start.column);
          if (!(lineStart != null)) dart.assertFailed(null, L4, 147, 16, "lineStart != null");
          let linesBeforeSpan = "\n"[$allMatches](context[$substring](0, lineStart))[$length];
          let url = highlight.span.sourceUrl;
          let lineNumber = dart.notNull(highlight.span.start.line) - dart.notNull(linesBeforeSpan);
          for (let line of context[$split]("\n")) {
            if (dart.test(lines[$isEmpty]) || lineNumber > dart.notNull(lines[$last].number)) {
              lines[$add](new highlighter._Line.new(line, lineNumber, url));
            }
            lineNumber = lineNumber + 1;
          }
        }
        let activeHighlights = JSArrayOf_HighlightL().of([]);
        let highlightIndex = 0;
        for (let line of lines) {
          activeHighlights[$removeWhere](dart.fn(highlight => !dart.equals(highlight.span.sourceUrl, line.url) || dart.notNull(highlight.span.end.line) < dart.notNull(line.number), _HighlightLToboolL()));
          let oldHighlightLength = activeHighlights[$length];
          for (let highlight of highlightsForFile[$skip](highlightIndex)) {
            if (dart.notNull(highlight.span.start.line) > dart.notNull(line.number)) break;
            if (!dart.equals(highlight.span.sourceUrl, line.url)) break;
            activeHighlights[$add](highlight);
          }
          highlightIndex = highlightIndex + (dart.notNull(activeHighlights[$length]) - dart.notNull(oldHighlightLength));
          line.highlights[$addAll](activeHighlights);
        }
        return lines;
      }, ListLOf_HighlightLToListLOf_LineL()))[$toList]();
    }
    highlight() {
      this[_writeFileStart](this[_lines$][$first].url);
      let highlightsByColumn = ListOf_HighlightL().new(this[_maxMultilineSpans]);
      for (let i = 0; i < dart.notNull(this[_lines$][$length]); i = i + 1) {
        let line = this[_lines$][$_get](i);
        if (i > 0) {
          let lastLine = this[_lines$][$_get](i - 1);
          if (!dart.equals(lastLine.url, line.url)) {
            this[_writeSidebar]({end: top_level.upEnd});
            this[_buffer].writeln();
            this[_writeFileStart](line.url);
          } else if (dart.notNull(lastLine.number) + 1 !== line.number) {
            this[_writeSidebar]({text: "..."});
            this[_buffer].writeln();
          }
        }
        for (let highlight of line.highlights[$reversed]) {
          if (dart.test(utils.isMultiline(highlight.span)) && highlight.span.start.line == line.number && dart.test(this[_isOnlyWhitespace](line.text[$substring](0, highlight.span.start.column)))) {
            utils.replaceFirstNull(_HighlightL(), highlightsByColumn, highlight);
          }
        }
        this[_writeSidebar]({line: line.number});
        this[_buffer].write(" ");
        this[_writeMultilineHighlights](line, highlightsByColumn);
        if (dart.test(highlightsByColumn[$isNotEmpty])) this[_buffer].write(" ");
        let primary = line.highlights[$firstWhere](dart.fn(highlight => highlight.isPrimary, _HighlightLToboolL()), {orElse: dart.fn(() => null, VoidToNullN())});
        if (primary != null) {
          this[_writeHighlightedText](line.text, primary.span.start.line == line.number ? primary.span.start.column : 0, primary.span.end.line == line.number ? primary.span.end.column : line.text.length, {color: this[_primaryColor$]});
        } else {
          this[_writeText](line.text);
        }
        this[_buffer].writeln();
        if (primary != null) this[_writeIndicator](line, primary, highlightsByColumn);
        for (let highlight of line.highlights) {
          if (dart.test(highlight.isPrimary)) continue;
          this[_writeIndicator](line, highlight, highlightsByColumn);
        }
      }
      this[_writeSidebar]({end: top_level.upEnd});
      return dart.toString(this[_buffer]);
    }
    [_writeFileStart](url) {
      if (!dart.test(this[_multipleFiles]) || url == null) {
        this[_writeSidebar]({end: top_level.downEnd});
      } else {
        this[_writeSidebar]({end: top_level.topLeftCorner});
        this[_colorize](dart.fn(() => this[_buffer].write(dart.str(top_level.horizontalLine[$times](2)) + ">"), VoidTovoid()), {color: "[34m"});
        this[_buffer].write(" " + dart.str(path.prettyUri(url)));
      }
      this[_buffer].writeln();
    }
    [_writeMultilineHighlights](line, highlightsByColumn, opts) {
      let t7, t7$, t7$0, t7$1, t7$2, t7$3;
      let current = opts && 'current' in opts ? opts.current : null;
      let openedOnThisLine = false;
      let openedOnThisLineColor = null;
      let currentColor = current == null ? null : dart.test(current.isPrimary) ? this[_primaryColor$] : this[_secondaryColor$];
      let foundCurrent = false;
      for (let highlight of highlightsByColumn) {
        let startLine = (t7$0 = (t7$ = (t7 = highlight, t7 == null ? null : t7.span), t7$ == null ? null : t7$.start), t7$0 == null ? null : t7$0.line);
        let endLine = (t7$3 = (t7$2 = (t7$1 = highlight, t7$1 == null ? null : t7$1.span), t7$2 == null ? null : t7$2.end), t7$3 == null ? null : t7$3.line);
        if (current != null && dart.equals(highlight, current)) {
          foundCurrent = true;
          if (!(startLine == line.number || endLine == line.number)) dart.assertFailed(null, L4, 296, 16, "startLine == line.number || endLine == line.number");
          this[_colorize](dart.fn(() => {
            this[_buffer].write(startLine == line.number ? top_level.topLeftCorner : top_level.bottomLeftCorner);
          }, VoidToNullN()), {color: currentColor});
        } else if (foundCurrent) {
          this[_colorize](dart.fn(() => {
            this[_buffer].write(highlight == null ? top_level.horizontalLine : top_level.cross);
          }, VoidToNullN()), {color: currentColor});
        } else if (highlight == null) {
          if (openedOnThisLine) {
            this[_colorize](dart.fn(() => this[_buffer].write(top_level.horizontalLine), VoidTovoid()), {color: openedOnThisLineColor});
          } else {
            this[_buffer].write(" ");
          }
        } else {
          this[_colorize](dart.fn(() => {
            let vertical = openedOnThisLine ? top_level.cross : top_level.verticalLine;
            if (current != null) {
              this[_buffer].write(vertical);
            } else if (startLine == line.number) {
              this[_colorize](dart.fn(() => {
                this[_buffer].write(term_glyph.glyphOrAscii(openedOnThisLine ? "┬" : "┌", "/"));
              }, VoidToNullN()), {color: openedOnThisLineColor});
              openedOnThisLine = true;
              openedOnThisLineColor == null ? openedOnThisLineColor = dart.test(highlight.isPrimary) ? this[_primaryColor$] : this[_secondaryColor$] : null;
            } else if (endLine == line.number && highlight.span.end.column === line.text.length) {
              this[_buffer].write(highlight.label == null ? term_glyph.glyphOrAscii("└", "\\") : vertical);
            } else {
              this[_colorize](dart.fn(() => {
                this[_buffer].write(vertical);
              }, VoidToNullN()), {color: openedOnThisLineColor});
            }
          }, VoidToNullN()), {color: dart.test(highlight.isPrimary) ? this[_primaryColor$] : this[_secondaryColor$]});
        }
      }
    }
    [_writeHighlightedText](text, startColumn, endColumn, opts) {
      let color = opts && 'color' in opts ? opts.color : null;
      this[_writeText](text[$substring](0, startColumn));
      this[_colorize](dart.fn(() => this[_writeText](text[$substring](startColumn, endColumn)), VoidTovoid()), {color: color});
      this[_writeText](text[$substring](endColumn, text.length));
    }
    [_writeIndicator](line, highlight, highlightsByColumn) {
      let color = dart.test(highlight.isPrimary) ? this[_primaryColor$] : this[_secondaryColor$];
      if (!dart.test(utils.isMultiline(highlight.span))) {
        this[_writeSidebar]();
        this[_buffer].write(" ");
        this[_writeMultilineHighlights](line, highlightsByColumn, {current: highlight});
        if (dart.test(highlightsByColumn[$isNotEmpty])) this[_buffer].write(" ");
        this[_colorize](dart.fn(() => {
          this[_writeUnderline](line, highlight.span, dart.test(highlight.isPrimary) ? "^" : top_level.horizontalLineBold);
          this[_writeLabel](highlight.label);
        }, VoidToNullN()), {color: color});
        this[_buffer].writeln();
      } else if (highlight.span.start.line == line.number) {
        if (dart.test(highlightsByColumn[$contains](highlight))) return;
        utils.replaceFirstNull(_HighlightL(), highlightsByColumn, highlight);
        this[_writeSidebar]();
        this[_buffer].write(" ");
        this[_writeMultilineHighlights](line, highlightsByColumn, {current: highlight});
        this[_colorize](dart.fn(() => this[_writeArrow](line, highlight.span.start.column), VoidTovoid()), {color: color});
        this[_buffer].writeln();
      } else if (highlight.span.end.line == line.number) {
        let coversWholeLine = highlight.span.end.column === line.text.length;
        if (coversWholeLine && highlight.label == null) {
          utils.replaceWithNull(_HighlightL(), highlightsByColumn, highlight);
          return;
        }
        this[_writeSidebar]();
        this[_buffer].write(" ");
        this[_writeMultilineHighlights](line, highlightsByColumn, {current: highlight});
        this[_colorize](dart.fn(() => {
          if (coversWholeLine) {
            this[_buffer].write(top_level.horizontalLine[$times](3));
          } else {
            this[_writeArrow](line, math.max(intL(), dart.notNull(highlight.span.end.column) - 1, 0), {beginning: false});
          }
          this[_writeLabel](highlight.label);
        }, VoidToNullN()), {color: color});
        this[_buffer].writeln();
        utils.replaceWithNull(_HighlightL(), highlightsByColumn, highlight);
      }
    }
    [_writeUnderline](line, span, character) {
      let t7;
      if (!!dart.test(utils.isMultiline(span))) dart.assertFailed(null, L4, 408, 12, "!isMultiline(span)");
      if (!line.text[$contains](span.text)) dart.assertFailed(null, L4, 409, 12, "line.text.contains(span.text)");
      let startColumn = span.start.column;
      let endColumn = span.end.column;
      let tabsBefore = this[_countTabs](line.text[$substring](0, startColumn));
      let tabsInside = this[_countTabs](line.text[$substring](startColumn, endColumn));
      startColumn = dart.notNull(startColumn) + dart.notNull(tabsBefore) * (4 - 1);
      endColumn = dart.notNull(endColumn) + (dart.notNull(tabsBefore) + dart.notNull(tabsInside)) * (4 - 1);
      t7 = this[_buffer];
      (() => {
        t7.write(" "[$times](startColumn));
        t7.write(character[$times](math.max(intL(), dart.notNull(endColumn) - dart.notNull(startColumn), 1)));
        return t7;
      })();
    }
    [_writeArrow](line, column, opts) {
      let t7;
      let beginning = opts && 'beginning' in opts ? opts.beginning : true;
      let tabs = this[_countTabs](line.text[$substring](0, dart.notNull(column) + (dart.test(beginning) ? 0 : 1)));
      t7 = this[_buffer];
      (() => {
        t7.write(top_level.horizontalLine[$times](1 + dart.notNull(column) + dart.notNull(tabs) * (4 - 1)));
        t7.write("^");
        return t7;
      })();
    }
    [_writeLabel](label) {
      if (label != null) this[_buffer].write(" " + dart.str(label));
    }
    [_writeText](text) {
      for (let char of text[$codeUnits]) {
        if (char === 9) {
          this[_buffer].write(" "[$times](4));
        } else {
          this[_buffer].writeCharCode(char);
        }
      }
    }
    [_writeSidebar](opts) {
      let line = opts && 'line' in opts ? opts.line : null;
      let text = opts && 'text' in opts ? opts.text : null;
      let end = opts && 'end' in opts ? opts.end : null;
      if (!(line == null || text == null)) dart.assertFailed(null, L4, 461, 12, "line == null || text == null");
      if (line != null) text = (dart.notNull(line) + 1)[$toString]();
      this[_colorize](dart.fn(() => {
        let t8, t8$, t7;
        t7 = this[_buffer];
        (() => {
          t7.write((t8 = text, t8 == null ? "" : t8)[$padRight](this[_paddingBeforeSidebar]));
          t7.write((t8$ = end, t8$ == null ? top_level.verticalLine : t8$));
          return t7;
        })();
      }, VoidToNullN()), {color: "[34m"});
    }
    [_countTabs](text) {
      let count = 0;
      for (let char of text[$codeUnits]) {
        if (char === 9) count = count + 1;
      }
      return count;
    }
    [_isOnlyWhitespace](text) {
      for (let char of text[$codeUnits]) {
        if (char !== 32 && char !== 9) return false;
      }
      return true;
    }
    [_colorize](callback, opts) {
      let color = opts && 'color' in opts ? opts.color : null;
      if (this[_primaryColor$] != null && color != null) this[_buffer].write(color);
      callback();
      if (this[_primaryColor$] != null && color != null) this[_buffer].write("[0m");
    }
  };
  (highlighter.Highlighter.new = function(span, opts) {
    let color = opts && 'color' in opts ? opts.color : null;
    highlighter.Highlighter.__.call(this, highlighter.Highlighter._collateLines(JSArrayOf_HighlightL().of([new highlighter._Highlight.new(span, {primary: true})])), dart.fn(() => {
      if (dart.equals(color, true)) return "[31m";
      if (dart.equals(color, false)) return null;
      return StringL().as(color);
    }, VoidToStringL())(), null);
  }).prototype = highlighter.Highlighter.prototype;
  (highlighter.Highlighter.multiple = function(primarySpan, primaryLabel, secondarySpans, opts) {
    let t7, t7$;
    let color = opts && 'color' in opts ? opts.color : false;
    let primaryColor = opts && 'primaryColor' in opts ? opts.primaryColor : null;
    let secondaryColor = opts && 'secondaryColor' in opts ? opts.secondaryColor : null;
    highlighter.Highlighter.__.call(this, highlighter.Highlighter._collateLines((() => {
      let t6 = JSArrayOf_HighlightL().of([]);
      t6[$add](new highlighter._Highlight.new(primarySpan, {label: primaryLabel, primary: true}));
      for (let entry of secondarySpans[$entries])
        t6[$add](new highlighter._Highlight.new(entry.key, {label: entry.value}));
      return t6;
    })()), dart.test(color) ? (t7 = primaryColor, t7 == null ? "[31m" : t7) : null, dart.test(color) ? (t7$ = secondaryColor, t7$ == null ? "[34m" : t7$) : null);
  }).prototype = highlighter.Highlighter.prototype;
  (highlighter.Highlighter.__ = function(_lines, _primaryColor, _secondaryColor) {
    this[_buffer] = new core.StringBuffer.new();
    this[_lines$] = _lines;
    this[_primaryColor$] = _primaryColor;
    this[_secondaryColor$] = _secondaryColor;
    this[_paddingBeforeSidebar] = 1 + math.max(intL(), (dart.notNull(_lines[$last].number) + 1)[$toString]().length, dart.test(highlighter.Highlighter._contiguous(_lines)) ? 0 : 3);
    this[_maxMultilineSpans] = _lines[$map](intL(), dart.fn(line => line.highlights[$where](dart.fn(highlight => utils.isMultiline(highlight.span), _HighlightLToboolL()))[$length], _LineLTointL()))[$reduce](dart.gbind(C0 || CT.C0, intL()));
    this[_multipleFiles] = !dart.test(utils.isAllTheSame(_lines[$map](ObjectL(), dart.fn(line => line.url, _LineLToUriL()))));
    ;
  }).prototype = highlighter.Highlighter.prototype;
  dart.addTypeTests(highlighter.Highlighter);
  dart.addTypeCaches(highlighter.Highlighter);
  dart.setMethodSignature(highlighter.Highlighter, () => ({
    __proto__: dart.getMethods(highlighter.Highlighter.__proto__),
    highlight: dart.fnType(dart.legacy(core.String), []),
    [_writeFileStart]: dart.fnType(dart.void, [dart.legacy(core.Uri)]),
    [_writeMultilineHighlights]: dart.fnType(dart.void, [dart.legacy(highlighter._Line), dart.legacy(core.List$(dart.legacy(highlighter._Highlight)))], {current: dart.legacy(highlighter._Highlight)}, {}),
    [_writeHighlightedText]: dart.fnType(dart.void, [dart.legacy(core.String), dart.legacy(core.int), dart.legacy(core.int)], {color: dart.legacy(core.String)}, {}),
    [_writeIndicator]: dart.fnType(dart.void, [dart.legacy(highlighter._Line), dart.legacy(highlighter._Highlight), dart.legacy(core.List$(dart.legacy(highlighter._Highlight)))]),
    [_writeUnderline]: dart.fnType(dart.void, [dart.legacy(highlighter._Line), dart.legacy(span.SourceSpan), dart.legacy(core.String)]),
    [_writeArrow]: dart.fnType(dart.void, [dart.legacy(highlighter._Line), dart.legacy(core.int)], {beginning: dart.legacy(core.bool)}, {}),
    [_writeLabel]: dart.fnType(dart.void, [dart.legacy(core.String)]),
    [_writeText]: dart.fnType(dart.void, [dart.legacy(core.String)]),
    [_writeSidebar]: dart.fnType(dart.void, [], {end: dart.legacy(core.String), line: dart.legacy(core.int), text: dart.legacy(core.String)}, {}),
    [_countTabs]: dart.fnType(dart.legacy(core.int), [dart.legacy(core.String)]),
    [_isOnlyWhitespace]: dart.fnType(dart.legacy(core.bool), [dart.legacy(core.String)]),
    [_colorize]: dart.fnType(dart.void, [dart.legacy(dart.fnType(dart.void, []))], {color: dart.legacy(core.String)}, {})
  }));
  dart.setLibraryUri(highlighter.Highlighter, L5);
  dart.setFieldSignature(highlighter.Highlighter, () => ({
    __proto__: dart.getFields(highlighter.Highlighter.__proto__),
    [_lines$]: dart.finalFieldType(dart.legacy(core.List$(dart.legacy(highlighter._Line)))),
    [_primaryColor$]: dart.finalFieldType(dart.legacy(core.String)),
    [_secondaryColor$]: dart.finalFieldType(dart.legacy(core.String)),
    [_paddingBeforeSidebar]: dart.finalFieldType(dart.legacy(core.int)),
    [_maxMultilineSpans]: dart.finalFieldType(dart.legacy(core.int)),
    [_multipleFiles]: dart.finalFieldType(dart.legacy(core.bool)),
    [_buffer]: dart.finalFieldType(dart.legacy(core.StringBuffer))
  }));
  dart.defineLazy(highlighter.Highlighter, {
    /*highlighter.Highlighter._spacesPerTab*/get _spacesPerTab() {
      return 4;
    }
  }, true);
  highlighter._Highlight = class _Highlight extends core.Object {
    static _normalizeContext(span) {
      return SourceSpanWithContextL().is(span) && utils.findLineStart(span.context, span.text, span.start.column) != null ? span : new span_with_context.SourceSpanWithContext.new(new location.SourceLocation.new(span.start.offset, {sourceUrl: span.sourceUrl, line: 0, column: 0}), new location.SourceLocation.new(span.end.offset, {sourceUrl: span.sourceUrl, line: utils.countCodeUnits(span.text, 10), column: highlighter._Highlight._lastLineLength(span.text)}), span.text, span.text);
    }
    static _normalizeNewlines(span) {
      let text = span.text;
      if (!text[$contains]("\r\n")) return span;
      let endOffset = span.end.offset;
      for (let i = 0; i < text.length - 1; i = i + 1) {
        if (text[$codeUnitAt](i) === 13 && text[$codeUnitAt](i + 1) === 10) {
          endOffset = dart.notNull(endOffset) - 1;
        }
      }
      return new span_with_context.SourceSpanWithContext.new(span.start, new location.SourceLocation.new(endOffset, {sourceUrl: span.sourceUrl, line: span.end.line, column: span.end.column}), text[$replaceAll]("\r\n", "\n"), span.context[$replaceAll]("\r\n", "\n"));
    }
    static _normalizeTrailingNewline(span) {
      if (!span.context[$endsWith]("\n")) return span;
      if (span.text[$endsWith]("\n\n")) return span;
      let context = span.context[$substring](0, span.context.length - 1);
      let text = span.text;
      let start = span.start;
      let end = span.end;
      if (span.text[$endsWith]("\n") && dart.test(highlighter._Highlight._isTextAtEndOfContext(span))) {
        text = span.text[$substring](0, span.text.length - 1);
        if (text[$isEmpty]) {
          end = start;
        } else {
          end = new location.SourceLocation.new(dart.notNull(span.end.offset) - 1, {sourceUrl: span.sourceUrl, line: dart.notNull(span.end.line) - 1, column: highlighter._Highlight._lastLineLength(context)});
          start = span.start.offset == span.end.offset ? end : span.start;
        }
      }
      return new span_with_context.SourceSpanWithContext.new(start, end, text, context);
    }
    static _normalizeEndOfLine(span) {
      if (span.end.column !== 0) return span;
      if (span.end.line == span.start.line) return span;
      let text = span.text[$substring](0, span.text.length - 1);
      return new span_with_context.SourceSpanWithContext.new(span.start, new location.SourceLocation.new(dart.notNull(span.end.offset) - 1, {sourceUrl: span.sourceUrl, line: dart.notNull(span.end.line) - 1, column: text.length - text[$lastIndexOf]("\n") - 1}), text, span.context[$endsWith]("\n") ? span.context[$substring](0, span.context.length - 1) : span.context);
    }
    static _lastLineLength(text) {
      if (text[$isEmpty]) {
        return 0;
      } else if (text[$codeUnitAt](text.length - 1) === 10) {
        return text.length === 1 ? 0 : text.length - text[$lastIndexOf]("\n", text.length - 2) - 1;
      } else {
        return text.length - text[$lastIndexOf]("\n") - 1;
      }
    }
    static _isTextAtEndOfContext(span) {
      return dart.notNull(utils.findLineStart(span.context, span.text, span.start.column)) + dart.notNull(span.start.column) + dart.notNull(span.length) === span.context.length;
    }
    toString() {
      let buffer = new core.StringBuffer.new();
      if (dart.test(this.isPrimary)) buffer.write("primary ");
      buffer.write(dart.str(this.span.start.line) + ":" + dart.str(this.span.start.column) + "-" + dart.str(this.span.end.line) + ":" + dart.str(this.span.end.column));
      if (this.label != null) buffer.write(" (" + dart.str(this.label) + ")");
      return buffer.toString();
    }
  };
  (highlighter._Highlight.new = function(span, opts) {
    let label = opts && 'label' in opts ? opts.label : null;
    let primary = opts && 'primary' in opts ? opts.primary : false;
    this.label = label;
    this.span = dart.fn(() => {
      let newSpan = highlighter._Highlight._normalizeContext(span);
      newSpan = highlighter._Highlight._normalizeNewlines(newSpan);
      newSpan = highlighter._Highlight._normalizeTrailingNewline(newSpan);
      return highlighter._Highlight._normalizeEndOfLine(newSpan);
    }, VoidToSourceSpanWithContextL())();
    this.isPrimary = primary;
    ;
  }).prototype = highlighter._Highlight.prototype;
  dart.addTypeTests(highlighter._Highlight);
  dart.addTypeCaches(highlighter._Highlight);
  dart.setMethodSignature(highlighter._Highlight, () => ({
    __proto__: dart.getMethods(highlighter._Highlight.__proto__),
    toString: dart.fnType(dart.legacy(core.String), []),
    [$toString]: dart.fnType(dart.legacy(core.String), [])
  }));
  dart.setLibraryUri(highlighter._Highlight, L5);
  dart.setFieldSignature(highlighter._Highlight, () => ({
    __proto__: dart.getFields(highlighter._Highlight.__proto__),
    span: dart.finalFieldType(dart.legacy(span_with_context.SourceSpanWithContext)),
    isPrimary: dart.finalFieldType(dart.legacy(core.bool)),
    label: dart.finalFieldType(dart.legacy(core.String))
  }));
  dart.defineExtensionMethods(highlighter._Highlight, ['toString']);
  highlighter._Line = class _Line extends core.Object {
    toString() {
      return dart.str(this.number) + ": \"" + dart.str(this.text) + "\" (" + dart.str(this.highlights[$join](", ")) + ")";
    }
  };
  (highlighter._Line.new = function(text, number, url) {
    this.highlights = JSArrayOf_HighlightL().of([]);
    this.text = text;
    this.number = number;
    this.url = url;
    ;
  }).prototype = highlighter._Line.prototype;
  dart.addTypeTests(highlighter._Line);
  dart.addTypeCaches(highlighter._Line);
  dart.setMethodSignature(highlighter._Line, () => ({
    __proto__: dart.getMethods(highlighter._Line.__proto__),
    toString: dart.fnType(dart.legacy(core.String), []),
    [$toString]: dart.fnType(dart.legacy(core.String), [])
  }));
  dart.setLibraryUri(highlighter._Line, L5);
  dart.setFieldSignature(highlighter._Line, () => ({
    __proto__: dart.getFields(highlighter._Line.__proto__),
    text: dart.finalFieldType(dart.legacy(core.String)),
    number: dart.finalFieldType(dart.legacy(core.int)),
    url: dart.finalFieldType(dart.legacy(core.Uri)),
    highlights: dart.finalFieldType(dart.legacy(core.List$(dart.legacy(highlighter._Highlight))))
  }));
  dart.defineExtensionMethods(highlighter._Line, ['toString']);
  dart.defineLazy(colors, {
    /*colors.red*/get red() {
      return "[31m";
    },
    /*colors.yellow*/get yellow() {
      return "[33m";
    },
    /*colors.blue*/get blue() {
      return "[34m";
    },
    /*colors.none*/get none() {
      return "[0m";
    }
  }, true);
  var _lineStarts = dart.privateName(file, "_lineStarts");
  var _cachedLine = dart.privateName(file, "_cachedLine");
  var _decodedChars = dart.privateName(file, "_decodedChars");
  var _isNearCachedLine = dart.privateName(file, "_isNearCachedLine");
  var _binarySearch = dart.privateName(file, "_binarySearch");
  var url$ = dart.privateName(file, "SourceFile.url");
  file.SourceFile = class SourceFile extends core.Object {
    get url() {
      return this[url$];
    }
    set url(value) {
      super.url = value;
    }
    get length() {
      return this[_decodedChars][$length];
    }
    get lines() {
      return this[_lineStarts][$length];
    }
    span(start, end = null) {
      end == null ? end = this.length : null;
      return new file._FileSpan.new(this, start, end);
    }
    location(offset) {
      return new file.FileLocation.__(this, offset);
    }
    getLine(offset) {
      if (dart.notNull(offset) < 0) {
        dart.throw(new core.RangeError.new("Offset may not be negative, was " + dart.str(offset) + "."));
      } else if (dart.notNull(offset) > dart.notNull(this.length)) {
        dart.throw(new core.RangeError.new("Offset " + dart.str(offset) + " must not be greater than the number " + "of characters in the file, " + dart.str(this.length) + "."));
      }
      if (dart.notNull(offset) < dart.notNull(this[_lineStarts][$first])) return -1;
      if (dart.notNull(offset) >= dart.notNull(this[_lineStarts][$last])) return dart.notNull(this[_lineStarts][$length]) - 1;
      if (dart.test(this[_isNearCachedLine](offset))) return this[_cachedLine];
      this[_cachedLine] = dart.notNull(this[_binarySearch](offset)) - 1;
      return this[_cachedLine];
    }
    [_isNearCachedLine](offset) {
      if (this[_cachedLine] == null) return false;
      if (dart.notNull(offset) < dart.notNull(this[_lineStarts][$_get](this[_cachedLine]))) return false;
      if (dart.notNull(this[_cachedLine]) >= dart.notNull(this[_lineStarts][$length]) - 1 || dart.notNull(offset) < dart.notNull(this[_lineStarts][$_get](dart.notNull(this[_cachedLine]) + 1))) {
        return true;
      }
      if (dart.notNull(this[_cachedLine]) >= dart.notNull(this[_lineStarts][$length]) - 2 || dart.notNull(offset) < dart.notNull(this[_lineStarts][$_get](dart.notNull(this[_cachedLine]) + 2))) {
        this[_cachedLine] = dart.notNull(this[_cachedLine]) + 1;
        return true;
      }
      return false;
    }
    [_binarySearch](offset) {
      let min = 0;
      let max = dart.notNull(this[_lineStarts][$length]) - 1;
      while (min < max) {
        let half = min + ((max - min) / 2)[$truncate]();
        if (dart.notNull(this[_lineStarts][$_get](half)) > dart.notNull(offset)) {
          max = half;
        } else {
          min = half + 1;
        }
      }
      return max;
    }
    getColumn(offset, opts) {
      let line = opts && 'line' in opts ? opts.line : null;
      if (dart.notNull(offset) < 0) {
        dart.throw(new core.RangeError.new("Offset may not be negative, was " + dart.str(offset) + "."));
      } else if (dart.notNull(offset) > dart.notNull(this.length)) {
        dart.throw(new core.RangeError.new("Offset " + dart.str(offset) + " must be not be greater than the " + "number of characters in the file, " + dart.str(this.length) + "."));
      }
      if (line == null) {
        line = this.getLine(offset);
      } else if (dart.notNull(line) < 0) {
        dart.throw(new core.RangeError.new("Line may not be negative, was " + dart.str(line) + "."));
      } else if (dart.notNull(line) >= dart.notNull(this.lines)) {
        dart.throw(new core.RangeError.new("Line " + dart.str(line) + " must be less than the number of " + "lines in the file, " + dart.str(this.lines) + "."));
      }
      let lineStart = this[_lineStarts][$_get](line);
      if (dart.notNull(lineStart) > dart.notNull(offset)) {
        dart.throw(new core.RangeError.new("Line " + dart.str(line) + " comes after offset " + dart.str(offset) + "."));
      }
      return dart.notNull(offset) - dart.notNull(lineStart);
    }
    getOffset(line, column = null) {
      column == null ? column = 0 : null;
      if (dart.notNull(line) < 0) {
        dart.throw(new core.RangeError.new("Line may not be negative, was " + dart.str(line) + "."));
      } else if (dart.notNull(line) >= dart.notNull(this.lines)) {
        dart.throw(new core.RangeError.new("Line " + dart.str(line) + " must be less than the number of " + "lines in the file, " + dart.str(this.lines) + "."));
      } else if (dart.notNull(column) < 0) {
        dart.throw(new core.RangeError.new("Column may not be negative, was " + dart.str(column) + "."));
      }
      let result = dart.notNull(this[_lineStarts][$_get](line)) + dart.notNull(column);
      if (result > dart.notNull(this.length) || dart.notNull(line) + 1 < dart.notNull(this.lines) && result >= dart.notNull(this[_lineStarts][$_get](dart.notNull(line) + 1))) {
        dart.throw(new core.RangeError.new("Line " + dart.str(line) + " doesn't have " + dart.str(column) + " columns."));
      }
      return result;
    }
    getText(start, end = null) {
      return core.String.fromCharCodes(this[_decodedChars][$sublist](start, end));
    }
  };
  (file.SourceFile.new = function(text, opts) {
    let url = opts && 'url' in opts ? opts.url : null;
    file.SourceFile.decoded.call(this, text[$runes], {url: url});
  }).prototype = file.SourceFile.prototype;
  (file.SourceFile.fromString = function(text, opts) {
    let url = opts && 'url' in opts ? opts.url : null;
    file.SourceFile.decoded.call(this, text[$codeUnits], {url: url});
  }).prototype = file.SourceFile.prototype;
  (file.SourceFile.decoded = function(decodedChars, opts) {
    let url = opts && 'url' in opts ? opts.url : null;
    this[_lineStarts] = JSArrayOfintL().of([0]);
    this[_cachedLine] = null;
    this[url$] = StringL().is(url) ? core.Uri.parse(url) : UriL().as(url);
    this[_decodedChars] = _native_typed_data.NativeUint32List.fromList(decodedChars[$toList]());
    for (let i = 0; i < dart.notNull(this[_decodedChars][$length]); i = i + 1) {
      let c = this[_decodedChars][$_get](i);
      if (c === 13) {
        let j = i + 1;
        if (j >= dart.notNull(this[_decodedChars][$length]) || this[_decodedChars][$_get](j) !== 10) c = 10;
      }
      if (c === 10) this[_lineStarts][$add](i + 1);
    }
  }).prototype = file.SourceFile.prototype;
  dart.addTypeTests(file.SourceFile);
  dart.addTypeCaches(file.SourceFile);
  dart.setMethodSignature(file.SourceFile, () => ({
    __proto__: dart.getMethods(file.SourceFile.__proto__),
    span: dart.fnType(dart.legacy(file.FileSpan), [dart.legacy(core.int)], [dart.legacy(core.int)]),
    location: dart.fnType(dart.legacy(file.FileLocation), [dart.legacy(core.int)]),
    getLine: dart.fnType(dart.legacy(core.int), [dart.legacy(core.int)]),
    [_isNearCachedLine]: dart.fnType(dart.legacy(core.bool), [dart.legacy(core.int)]),
    [_binarySearch]: dart.fnType(dart.legacy(core.int), [dart.legacy(core.int)]),
    getColumn: dart.fnType(dart.legacy(core.int), [dart.legacy(core.int)], {line: dart.legacy(core.int)}, {}),
    getOffset: dart.fnType(dart.legacy(core.int), [dart.legacy(core.int)], [dart.legacy(core.int)]),
    getText: dart.fnType(dart.legacy(core.String), [dart.legacy(core.int)], [dart.legacy(core.int)])
  }));
  dart.setGetterSignature(file.SourceFile, () => ({
    __proto__: dart.getGetters(file.SourceFile.__proto__),
    length: dart.legacy(core.int),
    lines: dart.legacy(core.int)
  }));
  dart.setLibraryUri(file.SourceFile, L6);
  dart.setFieldSignature(file.SourceFile, () => ({
    __proto__: dart.getFields(file.SourceFile.__proto__),
    url: dart.finalFieldType(dart.legacy(core.Uri)),
    [_lineStarts]: dart.finalFieldType(dart.legacy(core.List$(dart.legacy(core.int)))),
    [_decodedChars]: dart.finalFieldType(dart.legacy(typed_data.Uint32List)),
    [_cachedLine]: dart.fieldType(dart.legacy(core.int))
  }));
  location_mixin.SourceLocationMixin = class SourceLocationMixin extends core.Object {
    get toolString() {
      let t7;
      let source = (t7 = this.sourceUrl, t7 == null ? "unknown source" : t7);
      return dart.str(source) + ":" + dart.str(dart.notNull(this.line) + 1) + ":" + dart.str(dart.notNull(this.column) + 1);
    }
    distance(other) {
      if (!dart.equals(this.sourceUrl, other.sourceUrl)) {
        dart.throw(new core.ArgumentError.new("Source URLs \"" + dart.str(this.sourceUrl) + "\" and " + "\"" + dart.str(other.sourceUrl) + "\" don't match."));
      }
      return (dart.notNull(this.offset) - dart.notNull(other.offset))[$abs]();
    }
    pointSpan() {
      return span.SourceSpan.new(this, this, "");
    }
    compareTo(other) {
      SourceLocationL().as(other);
      if (!dart.equals(this.sourceUrl, other.sourceUrl)) {
        dart.throw(new core.ArgumentError.new("Source URLs \"" + dart.str(this.sourceUrl) + "\" and " + "\"" + dart.str(other.sourceUrl) + "\" don't match."));
      }
      return dart.notNull(this.offset) - dart.notNull(other.offset);
    }
    _equals(other) {
      if (other == null) return false;
      return SourceLocationL().is(other) && dart.equals(this.sourceUrl, other.sourceUrl) && this.offset == other.offset;
    }
    get hashCode() {
      return dart.notNull(dart.hashCode(this.sourceUrl)) + dart.notNull(this.offset);
    }
    toString() {
      return "<" + dart.str(this.runtimeType) + ": " + dart.str(this.offset) + " " + dart.str(this.toolString) + ">";
    }
  };
  (location_mixin.SourceLocationMixin.new = function() {
    ;
  }).prototype = location_mixin.SourceLocationMixin.prototype;
  dart.addTypeTests(location_mixin.SourceLocationMixin);
  dart.addTypeCaches(location_mixin.SourceLocationMixin);
  location_mixin.SourceLocationMixin[dart.implements] = () => [location.SourceLocation];
  dart.setMethodSignature(location_mixin.SourceLocationMixin, () => ({
    __proto__: dart.getMethods(location_mixin.SourceLocationMixin.__proto__),
    distance: dart.fnType(dart.legacy(core.int), [dart.legacy(location.SourceLocation)]),
    pointSpan: dart.fnType(dart.legacy(span.SourceSpan), []),
    compareTo: dart.fnType(dart.legacy(core.int), [dart.legacy(core.Object)]),
    [$compareTo]: dart.fnType(dart.legacy(core.int), [dart.legacy(core.Object)]),
    _equals: dart.fnType(dart.legacy(core.bool), [dart.dynamic]),
    [$_equals]: dart.fnType(dart.legacy(core.bool), [dart.dynamic]),
    toString: dart.fnType(dart.legacy(core.String), []),
    [$toString]: dart.fnType(dart.legacy(core.String), [])
  }));
  dart.setGetterSignature(location_mixin.SourceLocationMixin, () => ({
    __proto__: dart.getGetters(location_mixin.SourceLocationMixin.__proto__),
    toolString: dart.legacy(core.String),
    hashCode: dart.legacy(core.int),
    [$hashCode]: dart.legacy(core.int)
  }));
  dart.setLibraryUri(location_mixin.SourceLocationMixin, L7);
  dart.defineExtensionMethods(location_mixin.SourceLocationMixin, ['compareTo', '_equals', 'toString']);
  dart.defineExtensionAccessors(location_mixin.SourceLocationMixin, ['hashCode']);
  var file$ = dart.privateName(file, "FileLocation.file");
  var offset$0 = dart.privateName(file, "FileLocation.offset");
  file.FileLocation = class FileLocation extends location_mixin.SourceLocationMixin {
    get file() {
      return this[file$];
    }
    set file(value) {
      super.file = value;
    }
    get offset() {
      return this[offset$0];
    }
    set offset(value) {
      super.offset = value;
    }
    get sourceUrl() {
      return this.file.url;
    }
    get line() {
      return this.file.getLine(this.offset);
    }
    get column() {
      return this.file.getColumn(this.offset);
    }
    pointSpan() {
      return new file._FileSpan.new(this.file, this.offset, this.offset);
    }
  };
  (file.FileLocation.__ = function(file, offset) {
    this[file$] = file;
    this[offset$0] = offset;
    if (dart.notNull(this.offset) < 0) {
      dart.throw(new core.RangeError.new("Offset may not be negative, was " + dart.str(this.offset) + "."));
    } else if (dart.notNull(this.offset) > dart.notNull(this.file.length)) {
      dart.throw(new core.RangeError.new("Offset " + dart.str(this.offset) + " must not be greater than the number " + "of characters in the file, " + dart.str(this.file.length) + "."));
    }
  }).prototype = file.FileLocation.prototype;
  dart.addTypeTests(file.FileLocation);
  dart.addTypeCaches(file.FileLocation);
  file.FileLocation[dart.implements] = () => [location.SourceLocation];
  dart.setMethodSignature(file.FileLocation, () => ({
    __proto__: dart.getMethods(file.FileLocation.__proto__),
    pointSpan: dart.fnType(dart.legacy(file.FileSpan), [])
  }));
  dart.setGetterSignature(file.FileLocation, () => ({
    __proto__: dart.getGetters(file.FileLocation.__proto__),
    sourceUrl: dart.legacy(core.Uri),
    line: dart.legacy(core.int),
    column: dart.legacy(core.int)
  }));
  dart.setLibraryUri(file.FileLocation, L6);
  dart.setFieldSignature(file.FileLocation, () => ({
    __proto__: dart.getFields(file.FileLocation.__proto__),
    file: dart.finalFieldType(dart.legacy(file.SourceFile)),
    offset: dart.finalFieldType(dart.legacy(core.int))
  }));
  file.FileSpan = class FileSpan extends core.Object {};
  (file.FileSpan.new = function() {
    ;
  }).prototype = file.FileSpan.prototype;
  dart.addTypeTests(file.FileSpan);
  dart.addTypeCaches(file.FileSpan);
  file.FileSpan[dart.implements] = () => [span_with_context.SourceSpanWithContext];
  dart.setLibraryUri(file.FileSpan, L6);
  var _start$ = dart.privateName(file, "_start");
  var _end$ = dart.privateName(file, "_end");
  var _context = dart.privateName(file, "_context");
  var C1;
  file._FileSpan = class _FileSpan extends span_mixin.SourceSpanMixin {
    get sourceUrl() {
      return this.file.url;
    }
    get length() {
      return dart.notNull(this[_end$]) - dart.notNull(this[_start$]);
    }
    get start() {
      return new file.FileLocation.__(this.file, this[_start$]);
    }
    get end() {
      return new file.FileLocation.__(this.file, this[_end$]);
    }
    get text() {
      return this.file.getText(this[_start$], this[_end$]);
    }
    get context() {
      let endLine = this.file.getLine(this[_end$]);
      let endColumn = this.file.getColumn(this[_end$]);
      let endOffset = null;
      if (endColumn === 0 && endLine !== 0) {
        if (this.length === 0) {
          return endLine === dart.notNull(this.file.lines) - 1 ? "" : this.file.getText(this.file.getOffset(endLine), this.file.getOffset(dart.notNull(endLine) + 1));
        }
        endOffset = this[_end$];
      } else if (endLine === dart.notNull(this.file.lines) - 1) {
        endOffset = this.file.length;
      } else {
        endOffset = this.file.getOffset(dart.notNull(endLine) + 1);
      }
      return this.file.getText(this.file.getOffset(this.file.getLine(this[_start$])), endOffset);
    }
    compareTo(other) {
      SourceSpanL().as(other);
      if (!_FileSpanL().is(other)) return super.compareTo(other);
      let otherFile = _FileSpanL().as(other);
      let result = this[_start$][$compareTo](otherFile[_start$]);
      return result === 0 ? this[_end$][$compareTo](otherFile[_end$]) : result;
    }
    union(other) {
      if (!FileSpanL().is(other)) return super.union(other);
      let span = this.expand(_FileSpanL().as(other));
      if (_FileSpanL().is(other)) {
        if (dart.notNull(this[_start$]) > dart.notNull(other[_end$]) || dart.notNull(other[_start$]) > dart.notNull(this[_end$])) {
          dart.throw(new core.ArgumentError.new("Spans " + dart.str(this) + " and " + dart.str(other) + " are disjoint."));
        }
      } else {
        if (dart.notNull(this[_start$]) > dart.notNull(other.end.offset) || dart.notNull(other.start.offset) > dart.notNull(this[_end$])) {
          dart.throw(new core.ArgumentError.new("Spans " + dart.str(this) + " and " + dart.str(other) + " are disjoint."));
        }
      }
      return span;
    }
    _equals(other) {
      if (other == null) return false;
      if (!FileSpanL().is(other)) return super._equals(other);
      if (!_FileSpanL().is(other)) {
        return super._equals(other) && dart.equals(this.sourceUrl, dart.dload(other, 'sourceUrl'));
      }
      return core.identical(this[_start$], dart.dload(other, _start$)) && core.identical(this[_end$], dart.dload(other, _end$)) && dart.equals(this.sourceUrl, dart.dload(other, 'sourceUrl'));
    }
    get hashCode() {
      return super.hashCode;
    }
    expand(other) {
      if (!dart.equals(this.sourceUrl, other.sourceUrl)) {
        dart.throw(new core.ArgumentError.new("Source URLs \"" + dart.str(this.sourceUrl) + "\" and " + " \"" + dart.str(other.sourceUrl) + "\" don't match."));
      }
      if (_FileSpanL().is(other)) {
        let start = math.min(intL(), this[_start$], other[_start$]);
        let end = math.max(intL(), this[_end$], other[_end$]);
        return new file._FileSpan.new(this.file, start, end);
      } else {
        let start = math.min(intL(), this[_start$], other.start.offset);
        let end = math.max(intL(), this[_end$], other.end.offset);
        return new file._FileSpan.new(this.file, start, end);
      }
    }
    subspan(start, end = null) {
      core.RangeError.checkValidRange(start, end, this.length);
      if (start === 0 && (end == null || end == this.length)) return this;
      return this.file.span(dart.notNull(this[_start$]) + dart.notNull(start), end == null ? this[_end$] : dart.notNull(this[_start$]) + dart.notNull(end));
    }
    get [_context$]() {
      return StringL().as(this.noSuchMethod(new core._Invocation.getter(C1 || CT.C1)));
    }
  };
  (file._FileSpan.new = function(file, _start, _end) {
    this.file = file;
    this[_start$] = _start;
    this[_end$] = _end;
    if (dart.notNull(this[_end$]) < dart.notNull(this[_start$])) {
      dart.throw(new core.ArgumentError.new("End " + dart.str(this[_end$]) + " must come after start " + dart.str(this[_start$]) + "."));
    } else if (dart.notNull(this[_end$]) > dart.notNull(this.file.length)) {
      dart.throw(new core.RangeError.new("End " + dart.str(this[_end$]) + " must not be greater than the number " + "of characters in the file, " + dart.str(this.file.length) + "."));
    } else if (dart.notNull(this[_start$]) < 0) {
      dart.throw(new core.RangeError.new("Start may not be negative, was " + dart.str(this[_start$]) + "."));
    }
  }).prototype = file._FileSpan.prototype;
  dart.addTypeTests(file._FileSpan);
  dart.addTypeCaches(file._FileSpan);
  file._FileSpan[dart.implements] = () => [file.FileSpan];
  dart.setMethodSignature(file._FileSpan, () => ({
    __proto__: dart.getMethods(file._FileSpan.__proto__),
    expand: dart.fnType(dart.legacy(file.FileSpan), [dart.legacy(file.FileSpan)]),
    subspan: dart.fnType(dart.legacy(file.FileSpan), [dart.legacy(core.int)], [dart.legacy(core.int)])
  }));
  dart.setGetterSignature(file._FileSpan, () => ({
    __proto__: dart.getGetters(file._FileSpan.__proto__),
    start: dart.legacy(file.FileLocation),
    end: dart.legacy(file.FileLocation),
    text: dart.legacy(core.String),
    context: dart.legacy(core.String),
    [_context$]: dart.legacy(core.String)
  }));
  dart.setLibraryUri(file._FileSpan, L6);
  dart.setFieldSignature(file._FileSpan, () => ({
    __proto__: dart.getFields(file._FileSpan.__proto__),
    file: dart.finalFieldType(dart.legacy(file.SourceFile)),
    [_start$]: dart.finalFieldType(dart.legacy(core.int)),
    [_end$]: dart.finalFieldType(dart.legacy(core.int))
  }));
  dart.defineExtensionMethods(file._FileSpan, ['compareTo', '_equals']);
  dart.defineExtensionAccessors(file._FileSpan, ['hashCode']);
  file['FileSpanExtension|subspan'] = function FileSpanExtension$124subspan($this, start, end = null) {
    core.RangeError.checkValidRange(start, end, $this.length);
    if (start === 0 && (end == null || end == $this.length)) return $this;
    let startOffset = $this.start.offset;
    return $this.file.span(dart.notNull(startOffset) + dart.notNull(start), end == null ? $this.end.offset : dart.notNull(startOffset) + dart.notNull(end));
  };
  file['FileSpanExtension|get#subspan'] = function FileSpanExtension$124get$35subspan($this) {
    return dart.fn((start, end = null) => file['FileSpanExtension|subspan']($this, start, end), intLAndintLToFileSpanL());
  };
  dart.defineLazy(file, {
    /*file._lf*/get _lf() {
      return 10;
    },
    /*file._cr*/get _cr() {
      return 13;
    }
  }, true);
  var _message$ = dart.privateName(span_exception, "_message");
  var _span$ = dart.privateName(span_exception, "_span");
  span_exception.SourceSpanException = class SourceSpanException extends core.Object {
    get message() {
      return this[_message$];
    }
    get span() {
      return this[_span$];
    }
    toString(opts) {
      let color = opts && 'color' in opts ? opts.color : null;
      if (this.span == null) return this.message;
      return "Error on " + dart.str(this.span.message(this.message, {color: color}));
    }
  };
  (span_exception.SourceSpanException.new = function(_message, _span) {
    this[_message$] = _message;
    this[_span$] = _span;
    ;
  }).prototype = span_exception.SourceSpanException.prototype;
  dart.addTypeTests(span_exception.SourceSpanException);
  dart.addTypeCaches(span_exception.SourceSpanException);
  span_exception.SourceSpanException[dart.implements] = () => [core.Exception];
  dart.setMethodSignature(span_exception.SourceSpanException, () => ({
    __proto__: dart.getMethods(span_exception.SourceSpanException.__proto__),
    toString: dart.fnType(dart.legacy(core.String), [], {color: dart.dynamic}, {}),
    [$toString]: dart.fnType(dart.legacy(core.String), [], {color: dart.dynamic}, {})
  }));
  dart.setGetterSignature(span_exception.SourceSpanException, () => ({
    __proto__: dart.getGetters(span_exception.SourceSpanException.__proto__),
    message: dart.legacy(core.String),
    span: dart.legacy(span.SourceSpan)
  }));
  dart.setLibraryUri(span_exception.SourceSpanException, L8);
  dart.setFieldSignature(span_exception.SourceSpanException, () => ({
    __proto__: dart.getFields(span_exception.SourceSpanException.__proto__),
    [_message$]: dart.finalFieldType(dart.legacy(core.String)),
    [_span$]: dart.finalFieldType(dart.legacy(span.SourceSpan))
  }));
  dart.defineExtensionMethods(span_exception.SourceSpanException, ['toString']);
  var source$ = dart.privateName(span_exception, "SourceSpanFormatException.source");
  span_exception.SourceSpanFormatException = class SourceSpanFormatException extends span_exception.SourceSpanException {
    get source() {
      return this[source$];
    }
    set source(value) {
      super.source = value;
    }
    get offset() {
      let t9, t9$;
      t9$ = (t9 = this.span, t9 == null ? null : t9.start);
      return t9$ == null ? null : t9$.offset;
    }
  };
  (span_exception.SourceSpanFormatException.new = function(message, span, source = null) {
    this[source$] = source;
    span_exception.SourceSpanFormatException.__proto__.new.call(this, message, span);
    ;
  }).prototype = span_exception.SourceSpanFormatException.prototype;
  dart.addTypeTests(span_exception.SourceSpanFormatException);
  dart.addTypeCaches(span_exception.SourceSpanFormatException);
  span_exception.SourceSpanFormatException[dart.implements] = () => [core.FormatException];
  dart.setGetterSignature(span_exception.SourceSpanFormatException, () => ({
    __proto__: dart.getGetters(span_exception.SourceSpanFormatException.__proto__),
    offset: dart.legacy(core.int)
  }));
  dart.setLibraryUri(span_exception.SourceSpanFormatException, L8);
  dart.setFieldSignature(span_exception.SourceSpanFormatException, () => ({
    __proto__: dart.getFields(span_exception.SourceSpanFormatException.__proto__),
    source: dart.finalFieldType(dart.dynamic)
  }));
  var primaryLabel$ = dart.privateName(span_exception, "MultiSourceSpanException.primaryLabel");
  var secondarySpans$ = dart.privateName(span_exception, "MultiSourceSpanException.secondarySpans");
  span_exception.MultiSourceSpanException = class MultiSourceSpanException extends span_exception.SourceSpanException {
    get primaryLabel() {
      return this[primaryLabel$];
    }
    set primaryLabel(value) {
      super.primaryLabel = value;
    }
    get secondarySpans() {
      return this[secondarySpans$];
    }
    set secondarySpans(value) {
      super.secondarySpans = value;
    }
    toString(opts) {
      let color = opts && 'color' in opts ? opts.color : null;
      let secondaryColor = opts && 'secondaryColor' in opts ? opts.secondaryColor : null;
      if (this.span == null) return this.message;
      let useColor = false;
      let primaryColor = null;
      if (StringL().is(color)) {
        useColor = true;
        primaryColor = color;
      } else if (dart.equals(color, true)) {
        useColor = true;
      }
      let formatted = span['SourceSpanExtension|messageMultiple'](this.span, this.message, this.primaryLabel, this.secondarySpans, {color: useColor, primaryColor: primaryColor, secondaryColor: secondaryColor});
      return "Error on " + dart.str(formatted);
    }
  };
  (span_exception.MultiSourceSpanException.new = function(message, span, primaryLabel, secondarySpans) {
    this[primaryLabel$] = primaryLabel;
    this[secondarySpans$] = MapOfSourceSpanL$StringL().unmodifiable(secondarySpans);
    span_exception.MultiSourceSpanException.__proto__.new.call(this, message, span);
    ;
  }).prototype = span_exception.MultiSourceSpanException.prototype;
  dart.addTypeTests(span_exception.MultiSourceSpanException);
  dart.addTypeCaches(span_exception.MultiSourceSpanException);
  dart.setMethodSignature(span_exception.MultiSourceSpanException, () => ({
    __proto__: dart.getMethods(span_exception.MultiSourceSpanException.__proto__),
    toString: dart.fnType(dart.legacy(core.String), [], {color: dart.dynamic, secondaryColor: dart.legacy(core.String)}, {}),
    [$toString]: dart.fnType(dart.legacy(core.String), [], {color: dart.dynamic, secondaryColor: dart.legacy(core.String)}, {})
  }));
  dart.setLibraryUri(span_exception.MultiSourceSpanException, L8);
  dart.setFieldSignature(span_exception.MultiSourceSpanException, () => ({
    __proto__: dart.getFields(span_exception.MultiSourceSpanException.__proto__),
    primaryLabel: dart.finalFieldType(dart.legacy(core.String)),
    secondarySpans: dart.finalFieldType(dart.legacy(core.Map$(dart.legacy(span.SourceSpan), dart.legacy(core.String))))
  }));
  dart.defineExtensionMethods(span_exception.MultiSourceSpanException, ['toString']);
  var source$0 = dart.privateName(span_exception, "MultiSourceSpanFormatException.source");
  span_exception.MultiSourceSpanFormatException = class MultiSourceSpanFormatException extends span_exception.MultiSourceSpanException {
    get source() {
      return this[source$0];
    }
    set source(value) {
      super.source = value;
    }
    get offset() {
      let t9, t9$;
      t9$ = (t9 = this.span, t9 == null ? null : t9.start);
      return t9$ == null ? null : t9$.offset;
    }
  };
  (span_exception.MultiSourceSpanFormatException.new = function(message, span, primaryLabel, secondarySpans, source = null) {
    this[source$0] = source;
    span_exception.MultiSourceSpanFormatException.__proto__.new.call(this, message, span, primaryLabel, secondarySpans);
    ;
  }).prototype = span_exception.MultiSourceSpanFormatException.prototype;
  dart.addTypeTests(span_exception.MultiSourceSpanFormatException);
  dart.addTypeCaches(span_exception.MultiSourceSpanFormatException);
  span_exception.MultiSourceSpanFormatException[dart.implements] = () => [core.FormatException];
  dart.setGetterSignature(span_exception.MultiSourceSpanFormatException, () => ({
    __proto__: dart.getGetters(span_exception.MultiSourceSpanFormatException.__proto__),
    offset: dart.legacy(core.int)
  }));
  dart.setLibraryUri(span_exception.MultiSourceSpanFormatException, L8);
  dart.setFieldSignature(span_exception.MultiSourceSpanFormatException, () => ({
    __proto__: dart.getFields(span_exception.MultiSourceSpanFormatException.__proto__),
    source: dart.finalFieldType(dart.dynamic)
  }));
  dart.trackLibraries("packages/source_span/source_span", {
    "package:source_span/src/span_mixin.dart": span_mixin,
    "package:source_span/src/utils.dart": utils,
    "package:source_span/src/span.dart": span,
    "package:source_span/src/span_with_context.dart": span_with_context,
    "package:source_span/src/location.dart": location,
    "package:source_span/src/highlighter.dart": highlighter,
    "package:source_span/src/colors.dart": colors,
    "package:source_span/src/file.dart": file,
    "package:source_span/src/location_mixin.dart": location_mixin,
    "package:source_span/source_span.dart": source_span,
    "package:source_span/src/span_exception.dart": span_exception
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["src/span_mixin.dart","src/utils.dart","src/span.dart","src/span_with_context.dart","src/location.dart","src/highlighter.dart","src/colors.dart","src/file.dart","src/location_mixin.dart","src/span_exception.dart"],"names":[],"mappings":"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","file":"source_span.unsound.ddc.js"}');
  // Exports:
  return {
    src__span_mixin: span_mixin,
    src__utils: utils,
    src__span: span,
    src__span_with_context: span_with_context,
    src__location: location,
    src__highlighter: highlighter,
    src__colors: colors,
    src__file: file,
    src__location_mixin: location_mixin,
    source_span: source_span,
    src__span_exception: span_exception
  };
}));

//# sourceMappingURL=source_span.unsound.ddc.js.map

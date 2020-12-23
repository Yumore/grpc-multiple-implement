define(['dart_sdk', 'packages/source_span/source_span'], (function load__packages__string_scanner__src__eager_span_scanner(dart_sdk, packages__source_span__source_span) {
  'use strict';
  const core = dart_sdk.core;
  const _js_helper = dart_sdk._js_helper;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const file = packages__source_span__source_span.src__file;
  const span_exception = packages__source_span__source_span.src__span_exception;
  var span_scanner = Object.create(dart.library);
  var utils = Object.create(dart.library);
  var string_scanner = Object.create(dart.library);
  var exception = Object.create(dart.library);
  var relative_span_scanner = Object.create(dart.library);
  var line_scanner = Object.create(dart.library);
  var eager_span_scanner = Object.create(dart.library);
  var string_scanner$ = Object.create(dart.library);
  var $substring = dartx.substring;
  var $codeUnitAt = dartx.codeUnitAt;
  var $toString = dartx.toString;
  var $replaceAll = dartx.replaceAll;
  var $matchAsPrefix = dartx.matchAsPrefix;
  var $length = dartx.length;
  var $isEmpty = dartx.isEmpty;
  var $last = dartx.last;
  var $removeLast = dartx.removeLast;
  var $lastIndexOf = dartx.lastIndexOf;
  var $toList = dartx.toList;
  var _SpanScannerStateL = () => (_SpanScannerStateL = dart.constFn(dart.legacy(span_scanner._SpanScannerState)))();
  var intL = () => (intL = dart.constFn(dart.legacy(core.int)))();
  var boolL = () => (boolL = dart.constFn(dart.legacy(core.bool)))();
  var MatchL = () => (MatchL = dart.constFn(dart.legacy(core.Match)))();
  var ListOfMatchL = () => (ListOfMatchL = dart.constFn(core.List$(MatchL())))();
  var ListLOfMatchL = () => (ListLOfMatchL = dart.constFn(dart.legacy(ListOfMatchL())))();
  var StringL = () => (StringL = dart.constFn(dart.legacy(core.String)))();
  var UriL = () => (UriL = dart.constFn(dart.legacy(core.Uri)))();
  var RegExpL = () => (RegExpL = dart.constFn(dart.legacy(core.RegExp)))();
  var LineScannerL = () => (LineScannerL = dart.constFn(dart.legacy(line_scanner.LineScanner)))();
  var _SpanScannerStateL$ = () => (_SpanScannerStateL$ = dart.constFn(dart.legacy(relative_span_scanner._SpanScannerState)))();
  var SourceFileL = () => (SourceFileL = dart.constFn(dart.legacy(file.SourceFile)))();
  var FileSpanL = () => (FileSpanL = dart.constFn(dart.legacy(file.FileSpan)))();
  var _EagerSpanScannerStateL = () => (_EagerSpanScannerStateL = dart.constFn(dart.legacy(eager_span_scanner._EagerSpanScannerState)))();
  const CT = Object.create(null);
  var L1 = "package:string_scanner/src/span_scanner.dart";
  var L0 = "package:string_scanner/src/string_scanner.dart";
  var L3 = "package:string_scanner/src/relative_span_scanner.dart";
  var L2 = "package:string_scanner/src/exception.dart";
  var L4 = "package:string_scanner/src/line_scanner.dart";
  var L5 = "package:string_scanner/src/eager_span_scanner.dart";
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.const(new _js_helper.PrivateSymbol.new('_column', _column));
    },
    get C1() {
      return C1 = dart.const(new _js_helper.PrivateSymbol.new('_adjustLineAndColumn', _adjustLineAndColumn));
    },
    get C2() {
      return C2 = dart.const(new _js_helper.PrivateSymbol.new('_line', _line));
    },
    get C3() {
      return C3 = dart.const(new _js_helper.PrivateSymbol.new('_betweenCRLF', _betweenCRLF));
    },
    get C4() {
      return C4 = dart.const(new _js_helper.PrivateSymbol.new('_newlinesIn', _newlinesIn));
    },
    get C5() {
      return C5 = dart.const(new _js_helper.PrivateSymbol.new('_column=', _column_));
    },
    get C6() {
      return C6 = dart.const(new _js_helper.PrivateSymbol.new('_line=', _line_));
    },
    get C7() {
      return C7 = dart.const(new _js_helper.PrivateSymbol.new('_scanner', _scanner));
    },
    get C8() {
      return C8 = dart.const(new _js_helper.PrivateSymbol.new('_column', _column$0));
    },
    get C9() {
      return C9 = dart.const(new _js_helper.PrivateSymbol.new('_sourceFile', _sourceFile$));
    },
    get C10() {
      return C10 = dart.const(new _js_helper.PrivateSymbol.new('_adjustLineAndColumn', _adjustLineAndColumn$0));
    },
    get C11() {
      return C11 = dart.const(new _js_helper.PrivateSymbol.new('_line', _line$0));
    },
    get C12() {
      return C12 = dart.const(new _js_helper.PrivateSymbol.new('_betweenCRLF', _betweenCRLF$0));
    },
    get C13() {
      return C13 = dart.const(new _js_helper.PrivateSymbol.new('_newlinesIn', _newlinesIn$0));
    },
    get C14() {
      return C14 = dart.const(new _js_helper.PrivateSymbol.new('_lastSpan', _lastSpan$));
    },
    get C15() {
      return C15 = dart.const(new _js_helper.PrivateSymbol.new('_column=', _column_$));
    },
    get C16() {
      return C16 = dart.const(new _js_helper.PrivateSymbol.new('_line=', _line_$));
    },
    get C17() {
      return C17 = dart.const(new _js_helper.PrivateSymbol.new('_lastSpan=', _lastSpan_));
    },
    get C18() {
      return C18 = dart.const(new _js_helper.PrivateSymbol.new('_scanner', _scanner$1));
    },
    get C19() {
      return C19 = dart.const(new _js_helper.PrivateSymbol.new('_scanner', _scanner$3));
    }
  }, false);
  var _lastSpan = dart.privateName(span_scanner, "_lastSpan");
  var _sourceFile = dart.privateName(span_scanner, "_sourceFile");
  var _scanner = dart.privateName(span_scanner, "_scanner");
  var _column = dart.privateName(span_scanner, "_column");
  var C0;
  var _column$ = dart.privateName(line_scanner, "_column");
  var _adjustLineAndColumn = dart.privateName(span_scanner, "_adjustLineAndColumn");
  var C1;
  var _adjustLineAndColumn$ = dart.privateName(line_scanner, "_adjustLineAndColumn");
  var _line = dart.privateName(span_scanner, "_line");
  var C2;
  var _line$ = dart.privateName(line_scanner, "_line");
  var _betweenCRLF = dart.privateName(span_scanner, "_betweenCRLF");
  var C3;
  var _betweenCRLF$ = dart.privateName(line_scanner, "_betweenCRLF");
  var _newlinesIn = dart.privateName(span_scanner, "_newlinesIn");
  var C4;
  var _newlinesIn$ = dart.privateName(line_scanner, "_newlinesIn");
  var _column_ = dart.privateName(span_scanner, "_column=");
  var C5;
  var _line_ = dart.privateName(span_scanner, "_line=");
  var C6;
  var _position = dart.privateName(string_scanner, "_position");
  var _lastMatch = dart.privateName(string_scanner, "_lastMatch");
  var _lastMatchPosition = dart.privateName(string_scanner, "_lastMatchPosition");
  var _fail = dart.privateName(string_scanner, "_fail");
  var sourceUrl$ = dart.privateName(string_scanner, "StringScanner.sourceUrl");
  var string$ = dart.privateName(string_scanner, "StringScanner.string");
  string_scanner.StringScanner = class StringScanner extends core.Object {
    get sourceUrl() {
      return this[sourceUrl$];
    }
    set sourceUrl(value) {
      super.sourceUrl = value;
    }
    get string() {
      return this[string$];
    }
    set string(value) {
      super.string = value;
    }
    get position() {
      return this[_position];
    }
    set position(position) {
      if (dart.notNull(position) < 0 || dart.notNull(position) > this.string.length) {
        dart.throw(new core.ArgumentError.new("Invalid position " + dart.str(position)));
      }
      this[_position] = position;
      this[_lastMatch] = null;
    }
    get lastMatch() {
      if (this[_position] != this[_lastMatchPosition]) this[_lastMatch] = null;
      return this[_lastMatch];
    }
    get rest() {
      return this.string[$substring](this.position);
    }
    get isDone() {
      return this.position === this.string.length;
    }
    readChar() {
      let t0;
      if (dart.test(this.isDone)) this[_fail]("more input");
      return this.string[$codeUnitAt]((t0 = this[_position], this[_position] = dart.notNull(t0) + 1, t0));
    }
    peekChar(offset = null) {
      offset == null ? offset = 0 : null;
      let index = dart.notNull(this.position) + dart.notNull(offset);
      if (index < 0 || index >= this.string.length) return null;
      return this.string[$codeUnitAt](index);
    }
    scanChar(character) {
      if (dart.test(this.isDone)) return false;
      if (this.string[$codeUnitAt](this[_position]) !== character) return false;
      this[_position] = dart.notNull(this[_position]) + 1;
      return true;
    }
    expectChar(character, opts) {
      let name = opts && 'name' in opts ? opts.name : null;
      if (dart.test(this.scanChar(character))) return;
      if (name == null) {
        if (character === 92) {
          name = "\"\\\"";
        } else if (character === 34) {
          name = "\"\\\"\"";
        } else {
          name = "\"" + dart.str(core.String.fromCharCode(character)) + "\"";
        }
      }
      this[_fail](name);
    }
    scan(pattern) {
      let success = this.matches(pattern);
      if (dart.test(success)) {
        this[_position] = this[_lastMatch].end;
        this[_lastMatchPosition] = this[_position];
      }
      return success;
    }
    expect(pattern, opts) {
      let name = opts && 'name' in opts ? opts.name : null;
      if (dart.test(this.scan(pattern))) return;
      if (name == null) {
        if (RegExpL().is(pattern)) {
          let source = pattern.pattern;
          name = "/" + dart.str(source) + "/";
        } else {
          name = dart.toString(pattern)[$replaceAll]("\\", "\\\\")[$replaceAll]("\"", "\\\"");
          name = "\"" + dart.str(name) + "\"";
        }
      }
      this[_fail](name);
    }
    expectDone() {
      if (dart.test(this.isDone)) return;
      this[_fail]("no more input");
    }
    matches(pattern) {
      this[_lastMatch] = pattern[$matchAsPrefix](this.string, this.position);
      this[_lastMatchPosition] = this[_position];
      return this[_lastMatch] != null;
    }
    substring(start, end = null) {
      end == null ? end = this.position : null;
      return this.string[$substring](start, end);
    }
    error(message, opts) {
      let match = opts && 'match' in opts ? opts.match : null;
      let position = opts && 'position' in opts ? opts.position : null;
      let length = opts && 'length' in opts ? opts.length : null;
      utils.validateErrorArgs(this.string, match, position, length);
      if (match == null && position == null && length == null) match = this.lastMatch;
      position == null ? position = match == null ? this.position : match.start : null;
      length == null ? length = match == null ? 0 : dart.notNull(match.end) - dart.notNull(match.start) : null;
      let sourceFile = new file.SourceFile.fromString(this.string, {url: this.sourceUrl});
      let span = sourceFile.span(position, dart.notNull(position) + dart.notNull(length));
      dart.throw(new exception.StringScannerException.new(message, span, this.string));
    }
    [_fail](name) {
      this.error("expected " + dart.str(name) + ".", {position: this.position, length: 0});
    }
  };
  (string_scanner.StringScanner.new = function(string, opts) {
    let sourceUrl = opts && 'sourceUrl' in opts ? opts.sourceUrl : null;
    let position = opts && 'position' in opts ? opts.position : null;
    this[_position] = 0;
    this[_lastMatch] = null;
    this[_lastMatchPosition] = null;
    this[string$] = string;
    this[sourceUrl$] = StringL().is(sourceUrl) ? core.Uri.parse(sourceUrl) : UriL().as(sourceUrl);
    if (position != null) this.position = position;
  }).prototype = string_scanner.StringScanner.prototype;
  dart.addTypeTests(string_scanner.StringScanner);
  dart.addTypeCaches(string_scanner.StringScanner);
  dart.setMethodSignature(string_scanner.StringScanner, () => ({
    __proto__: dart.getMethods(string_scanner.StringScanner.__proto__),
    readChar: dart.fnType(dart.legacy(core.int), []),
    peekChar: dart.fnType(dart.legacy(core.int), [], [dart.legacy(core.int)]),
    scanChar: dart.fnType(dart.legacy(core.bool), [dart.legacy(core.int)]),
    expectChar: dart.fnType(dart.void, [dart.legacy(core.int)], {name: dart.legacy(core.String)}, {}),
    scan: dart.fnType(dart.legacy(core.bool), [dart.legacy(core.Pattern)]),
    expect: dart.fnType(dart.void, [dart.legacy(core.Pattern)], {name: dart.legacy(core.String)}, {}),
    expectDone: dart.fnType(dart.void, []),
    matches: dart.fnType(dart.legacy(core.bool), [dart.legacy(core.Pattern)]),
    substring: dart.fnType(dart.legacy(core.String), [dart.legacy(core.int)], [dart.legacy(core.int)]),
    error: dart.fnType(dart.void, [dart.legacy(core.String)], {length: dart.legacy(core.int), match: dart.legacy(core.Match), position: dart.legacy(core.int)}, {}),
    [_fail]: dart.fnType(dart.void, [dart.legacy(core.String)])
  }));
  dart.setGetterSignature(string_scanner.StringScanner, () => ({
    __proto__: dart.getGetters(string_scanner.StringScanner.__proto__),
    position: dart.legacy(core.int),
    lastMatch: dart.legacy(core.Match),
    rest: dart.legacy(core.String),
    isDone: dart.legacy(core.bool)
  }));
  dart.setSetterSignature(string_scanner.StringScanner, () => ({
    __proto__: dart.getSetters(string_scanner.StringScanner.__proto__),
    position: dart.legacy(core.int)
  }));
  dart.setLibraryUri(string_scanner.StringScanner, L0);
  dart.setFieldSignature(string_scanner.StringScanner, () => ({
    __proto__: dart.getFields(string_scanner.StringScanner.__proto__),
    sourceUrl: dart.finalFieldType(dart.legacy(core.Uri)),
    string: dart.finalFieldType(dart.legacy(core.String)),
    [_position]: dart.fieldType(dart.legacy(core.int)),
    [_lastMatch]: dart.fieldType(dart.legacy(core.Match)),
    [_lastMatchPosition]: dart.fieldType(dart.legacy(core.int))
  }));
  span_scanner.SpanScanner = class SpanScanner extends string_scanner.StringScanner {
    get line() {
      return this[_sourceFile].getLine(this.position);
    }
    get column() {
      return this[_sourceFile].getColumn(this.position);
    }
    get state() {
      return new span_scanner._SpanScannerState.new(this, this.position);
    }
    set state(state) {
      if (!_SpanScannerStateL().is(state) || _SpanScannerStateL().as(state)[_scanner] !== this) {
        dart.throw(new core.ArgumentError.new("The given LineScannerState was not returned by " + "this LineScanner."));
      }
      this.position = state.position;
    }
    get lastSpan() {
      if (this.lastMatch == null) this[_lastSpan] = null;
      return this[_lastSpan];
    }
    get location() {
      return this[_sourceFile].location(this.position);
    }
    get emptySpan() {
      return this.location.pointSpan();
    }
    spanFrom(startState, endState = null) {
      let endPosition = endState == null ? this.position : endState.position;
      return this[_sourceFile].span(startState.position, endPosition);
    }
    matches(pattern) {
      if (!dart.test(super.matches(pattern))) {
        this[_lastSpan] = null;
        return false;
      }
      this[_lastSpan] = this[_sourceFile].span(this.position, this.lastMatch.end);
      return true;
    }
    error(message, opts) {
      let match = opts && 'match' in opts ? opts.match : null;
      let position = opts && 'position' in opts ? opts.position : null;
      let length = opts && 'length' in opts ? opts.length : null;
      utils.validateErrorArgs(this.string, match, position, length);
      if (match == null && position == null && length == null) match = this.lastMatch;
      position == null ? position = match == null ? this.position : match.start : null;
      length == null ? length = match == null ? 0 : dart.notNull(match.end) - dart.notNull(match.start) : null;
      let span = this[_sourceFile].span(position, dart.notNull(position) + dart.notNull(length));
      dart.throw(new exception.StringScannerException.new(message, span, this.string));
    }
    get [_column$]() {
      return intL().as(this.noSuchMethod(new core._Invocation.getter(C0 || CT.C0)));
    }
    [_adjustLineAndColumn$](character) {
      return this.noSuchMethod(new core._Invocation.method(C1 || CT.C1, null, [character]));
    }
    get [_line$]() {
      return intL().as(this.noSuchMethod(new core._Invocation.getter(C2 || CT.C2)));
    }
    get [_betweenCRLF$]() {
      return boolL().as(this.noSuchMethod(new core._Invocation.getter(C3 || CT.C3)));
    }
    [_newlinesIn$](text) {
      return ListLOfMatchL().as(this.noSuchMethod(new core._Invocation.method(C4 || CT.C4, null, [text])));
    }
    set [_column$](value) {
      return this.noSuchMethod(new core._Invocation.setter(C5 || CT.C5, value));
    }
    set [_line$](value) {
      return this.noSuchMethod(new core._Invocation.setter(C6 || CT.C6, value));
    }
  };
  (span_scanner.SpanScanner.new = function(string, opts) {
    let sourceUrl = opts && 'sourceUrl' in opts ? opts.sourceUrl : null;
    let position = opts && 'position' in opts ? opts.position : null;
    this[_lastSpan] = null;
    this[_sourceFile] = new file.SourceFile.fromString(string, {url: sourceUrl});
    span_scanner.SpanScanner.__proto__.new.call(this, string, {sourceUrl: sourceUrl, position: position});
    ;
  }).prototype = span_scanner.SpanScanner.prototype;
  dart.addTypeTests(span_scanner.SpanScanner);
  dart.addTypeCaches(span_scanner.SpanScanner);
  span_scanner.SpanScanner[dart.implements] = () => [line_scanner.LineScanner];
  dart.setMethodSignature(span_scanner.SpanScanner, () => ({
    __proto__: dart.getMethods(span_scanner.SpanScanner.__proto__),
    spanFrom: dart.fnType(dart.legacy(file.FileSpan), [dart.legacy(line_scanner.LineScannerState)], [dart.legacy(line_scanner.LineScannerState)]),
    [_adjustLineAndColumn$]: dart.fnType(dart.void, [dart.legacy(core.int)]),
    [_newlinesIn$]: dart.fnType(dart.legacy(core.List$(dart.legacy(core.Match))), [dart.legacy(core.String)])
  }));
  dart.setGetterSignature(span_scanner.SpanScanner, () => ({
    __proto__: dart.getGetters(span_scanner.SpanScanner.__proto__),
    line: dart.legacy(core.int),
    column: dart.legacy(core.int),
    state: dart.legacy(line_scanner.LineScannerState),
    lastSpan: dart.legacy(file.FileSpan),
    location: dart.legacy(file.FileLocation),
    emptySpan: dart.legacy(file.FileSpan),
    [_column$]: dart.legacy(core.int),
    [_line$]: dart.legacy(core.int),
    [_betweenCRLF$]: dart.legacy(core.bool)
  }));
  dart.setSetterSignature(span_scanner.SpanScanner, () => ({
    __proto__: dart.getSetters(span_scanner.SpanScanner.__proto__),
    state: dart.legacy(line_scanner.LineScannerState),
    [_column$]: dart.legacy(core.int),
    [_line$]: dart.legacy(core.int)
  }));
  dart.setLibraryUri(span_scanner.SpanScanner, L1);
  dart.setFieldSignature(span_scanner.SpanScanner, () => ({
    __proto__: dart.getFields(span_scanner.SpanScanner.__proto__),
    [_sourceFile]: dart.finalFieldType(dart.legacy(file.SourceFile)),
    [_lastSpan]: dart.fieldType(dart.legacy(file.FileSpan))
  }));
  var C7;
  var _scanner$ = dart.privateName(line_scanner, "_scanner");
  var _scanner$0 = dart.privateName(span_scanner, "_SpanScannerState._scanner");
  span_scanner._SpanScannerState = class _SpanScannerState extends core.Object {
    get [_scanner]() {
      return this[_scanner$0];
    }
    set [_scanner](value) {
      super[_scanner] = value;
    }
    get line() {
      return this[_scanner][_sourceFile].getLine(this.position);
    }
    get column() {
      return this[_scanner][_sourceFile].getColumn(this.position);
    }
    get [_scanner$]() {
      return LineScannerL().as(this.noSuchMethod(new core._Invocation.getter(C7 || CT.C7)));
    }
  };
  (span_scanner._SpanScannerState.new = function(_scanner, position) {
    this[_scanner$0] = _scanner;
    this.position = position;
    ;
  }).prototype = span_scanner._SpanScannerState.prototype;
  dart.addTypeTests(span_scanner._SpanScannerState);
  dart.addTypeCaches(span_scanner._SpanScannerState);
  span_scanner._SpanScannerState[dart.implements] = () => [line_scanner.LineScannerState];
  dart.setGetterSignature(span_scanner._SpanScannerState, () => ({
    __proto__: dart.getGetters(span_scanner._SpanScannerState.__proto__),
    line: dart.legacy(core.int),
    column: dart.legacy(core.int),
    [_scanner$]: dart.legacy(line_scanner.LineScanner)
  }));
  dart.setLibraryUri(span_scanner._SpanScannerState, L1);
  dart.setFieldSignature(span_scanner._SpanScannerState, () => ({
    __proto__: dart.getFields(span_scanner._SpanScannerState.__proto__),
    [_scanner]: dart.finalFieldType(dart.legacy(span_scanner.SpanScanner)),
    position: dart.finalFieldType(dart.legacy(core.int))
  }));
  utils.validateErrorArgs = function validateErrorArgs(string, match, position, length) {
    if (match != null && (position != null || length != null)) {
      dart.throw(new core.ArgumentError.new("Can't pass both match and position/length."));
    }
    if (position != null) {
      if (dart.notNull(position) < 0) {
        dart.throw(new core.RangeError.new("position must be greater than or equal to 0."));
      } else if (dart.notNull(position) > string.length) {
        dart.throw(new core.RangeError.new("position must be less than or equal to the " + "string length."));
      }
    }
    if (length != null && dart.notNull(length) < 0) {
      dart.throw(new core.RangeError.new("length must be greater than or equal to 0."));
    }
    if (position != null && length != null && dart.notNull(position) + dart.notNull(length) > string.length) {
      dart.throw(new core.RangeError.new("position plus length must not go beyond the end of " + "the string."));
    }
  };
  exception.StringScannerException = class StringScannerException extends span_exception.SourceSpanFormatException {
    get source() {
      return StringL().as(super.source);
    }
    get sourceUrl() {
      return this.span.sourceUrl;
    }
  };
  (exception.StringScannerException.new = function(message, span, source) {
    exception.StringScannerException.__proto__.new.call(this, message, span, source);
    ;
  }).prototype = exception.StringScannerException.prototype;
  dart.addTypeTests(exception.StringScannerException);
  dart.addTypeCaches(exception.StringScannerException);
  dart.setGetterSignature(exception.StringScannerException, () => ({
    __proto__: dart.getGetters(exception.StringScannerException.__proto__),
    source: dart.legacy(core.String),
    sourceUrl: dart.legacy(core.Uri)
  }));
  dart.setLibraryUri(exception.StringScannerException, L2);
  var _startLocation = dart.privateName(relative_span_scanner, "_startLocation");
  var _sourceFile$ = dart.privateName(relative_span_scanner, "_sourceFile");
  var _lastSpan$ = dart.privateName(relative_span_scanner, "_lastSpan");
  var _scanner$1 = dart.privateName(relative_span_scanner, "_scanner");
  var _column$0 = dart.privateName(relative_span_scanner, "_column");
  var C8;
  var C9;
  var _adjustLineAndColumn$0 = dart.privateName(relative_span_scanner, "_adjustLineAndColumn");
  var C10;
  var _line$0 = dart.privateName(relative_span_scanner, "_line");
  var C11;
  var _betweenCRLF$0 = dart.privateName(relative_span_scanner, "_betweenCRLF");
  var C12;
  var _newlinesIn$0 = dart.privateName(relative_span_scanner, "_newlinesIn");
  var C13;
  var C14;
  var _column_$ = dart.privateName(relative_span_scanner, "_column=");
  var C15;
  var _line_$ = dart.privateName(relative_span_scanner, "_line=");
  var C16;
  var _lastSpan_ = dart.privateName(relative_span_scanner, "_lastSpan=");
  var C17;
  var _sourceFile$0 = dart.privateName(relative_span_scanner, "RelativeSpanScanner._sourceFile");
  var _lastSpan$0 = dart.privateName(relative_span_scanner, "RelativeSpanScanner._lastSpan");
  relative_span_scanner.RelativeSpanScanner = class RelativeSpanScanner extends string_scanner.StringScanner {
    get [_sourceFile$]() {
      return this[_sourceFile$0];
    }
    set [_sourceFile$](value) {
      super[_sourceFile$] = value;
    }
    get [_lastSpan$]() {
      return this[_lastSpan$0];
    }
    set [_lastSpan$](value) {
      this[_lastSpan$0] = value;
    }
    get line() {
      return dart.notNull(this[_sourceFile$].getLine(dart.notNull(this[_startLocation].offset) + dart.notNull(this.position))) - dart.notNull(this[_startLocation].line);
    }
    get column() {
      let line = this[_sourceFile$].getLine(dart.notNull(this[_startLocation].offset) + dart.notNull(this.position));
      let column = this[_sourceFile$].getColumn(dart.notNull(this[_startLocation].offset) + dart.notNull(this.position), {line: line});
      return line == this[_startLocation].line ? dart.notNull(column) - dart.notNull(this[_startLocation].column) : column;
    }
    get state() {
      return new relative_span_scanner._SpanScannerState.new(this, this.position);
    }
    set state(state) {
      if (!_SpanScannerStateL$().is(state) || _SpanScannerStateL$().as(state)[_scanner$1] !== this) {
        dart.throw(new core.ArgumentError.new("The given LineScannerState was not returned by " + "this LineScanner."));
      }
      this.position = state.position;
    }
    get lastSpan() {
      return this[_lastSpan$];
    }
    get location() {
      return this[_sourceFile$].location(dart.notNull(this[_startLocation].offset) + dart.notNull(this.position));
    }
    get emptySpan() {
      return this.location.pointSpan();
    }
    spanFrom(startState, endState = null) {
      let endPosition = endState == null ? this.position : endState.position;
      return this[_sourceFile$].span(dart.notNull(this[_startLocation].offset) + dart.notNull(startState.position), dart.notNull(this[_startLocation].offset) + dart.notNull(endPosition));
    }
    matches(pattern) {
      if (!dart.test(super.matches(pattern))) {
        this[_lastSpan$] = null;
        return false;
      }
      this[_lastSpan$] = this[_sourceFile$].span(dart.notNull(this[_startLocation].offset) + dart.notNull(this.position), dart.notNull(this[_startLocation].offset) + dart.notNull(this.lastMatch.end));
      return true;
    }
    error(message, opts) {
      let match = opts && 'match' in opts ? opts.match : null;
      let position = opts && 'position' in opts ? opts.position : null;
      let length = opts && 'length' in opts ? opts.length : null;
      utils.validateErrorArgs(this.string, match, position, length);
      if (match == null && position == null && length == null) match = this.lastMatch;
      position == null ? position = match == null ? this.position : match.start : null;
      length == null ? length = match == null ? 1 : dart.notNull(match.end) - dart.notNull(match.start) : null;
      let span = this[_sourceFile$].span(dart.notNull(this[_startLocation].offset) + dart.notNull(position), dart.notNull(this[_startLocation].offset) + dart.notNull(position) + dart.notNull(length));
      dart.throw(new exception.StringScannerException.new(message, span, this.string));
    }
    get [_column$]() {
      return intL().as(this.noSuchMethod(new core._Invocation.getter(C8 || CT.C8)));
    }
    get [_sourceFile]() {
      return SourceFileL().as(this.noSuchMethod(new core._Invocation.getter(C9 || CT.C9)));
    }
    [_adjustLineAndColumn$](character) {
      return this.noSuchMethod(new core._Invocation.method(C10 || CT.C10, null, [character]));
    }
    get [_line$]() {
      return intL().as(this.noSuchMethod(new core._Invocation.getter(C11 || CT.C11)));
    }
    get [_betweenCRLF$]() {
      return boolL().as(this.noSuchMethod(new core._Invocation.getter(C12 || CT.C12)));
    }
    [_newlinesIn$](text) {
      return ListLOfMatchL().as(this.noSuchMethod(new core._Invocation.method(C13 || CT.C13, null, [text])));
    }
    get [_lastSpan]() {
      return FileSpanL().as(this.noSuchMethod(new core._Invocation.getter(C14 || CT.C14)));
    }
    set [_column$](value) {
      return this.noSuchMethod(new core._Invocation.setter(C15 || CT.C15, value));
    }
    set [_line$](value) {
      return this.noSuchMethod(new core._Invocation.setter(C16 || CT.C16, value));
    }
    set [_lastSpan](value) {
      return this.noSuchMethod(new core._Invocation.setter(C17 || CT.C17, value));
    }
  };
  (relative_span_scanner.RelativeSpanScanner.new = function(span) {
    this[_lastSpan$0] = null;
    this[_sourceFile$0] = span.file;
    this[_startLocation] = span.start;
    relative_span_scanner.RelativeSpanScanner.__proto__.new.call(this, span.text, {sourceUrl: span.sourceUrl});
    ;
  }).prototype = relative_span_scanner.RelativeSpanScanner.prototype;
  dart.addTypeTests(relative_span_scanner.RelativeSpanScanner);
  dart.addTypeCaches(relative_span_scanner.RelativeSpanScanner);
  relative_span_scanner.RelativeSpanScanner[dart.implements] = () => [span_scanner.SpanScanner];
  dart.setMethodSignature(relative_span_scanner.RelativeSpanScanner, () => ({
    __proto__: dart.getMethods(relative_span_scanner.RelativeSpanScanner.__proto__),
    spanFrom: dart.fnType(dart.legacy(file.FileSpan), [dart.legacy(line_scanner.LineScannerState)], [dart.legacy(line_scanner.LineScannerState)]),
    [_adjustLineAndColumn$]: dart.fnType(dart.void, [dart.legacy(core.int)]),
    [_newlinesIn$]: dart.fnType(dart.legacy(core.List$(dart.legacy(core.Match))), [dart.legacy(core.String)])
  }));
  dart.setGetterSignature(relative_span_scanner.RelativeSpanScanner, () => ({
    __proto__: dart.getGetters(relative_span_scanner.RelativeSpanScanner.__proto__),
    line: dart.legacy(core.int),
    column: dart.legacy(core.int),
    state: dart.legacy(line_scanner.LineScannerState),
    lastSpan: dart.legacy(file.FileSpan),
    location: dart.legacy(file.FileLocation),
    emptySpan: dart.legacy(file.FileSpan),
    [_column$]: dart.legacy(core.int),
    [_sourceFile]: dart.legacy(file.SourceFile),
    [_line$]: dart.legacy(core.int),
    [_betweenCRLF$]: dart.legacy(core.bool),
    [_lastSpan]: dart.legacy(file.FileSpan)
  }));
  dart.setSetterSignature(relative_span_scanner.RelativeSpanScanner, () => ({
    __proto__: dart.getSetters(relative_span_scanner.RelativeSpanScanner.__proto__),
    state: dart.legacy(line_scanner.LineScannerState),
    [_column$]: dart.legacy(core.int),
    [_line$]: dart.legacy(core.int),
    [_lastSpan]: dart.legacy(file.FileSpan)
  }));
  dart.setLibraryUri(relative_span_scanner.RelativeSpanScanner, L3);
  dart.setFieldSignature(relative_span_scanner.RelativeSpanScanner, () => ({
    __proto__: dart.getFields(relative_span_scanner.RelativeSpanScanner.__proto__),
    [_sourceFile$]: dart.finalFieldType(dart.legacy(file.SourceFile)),
    [_startLocation]: dart.finalFieldType(dart.legacy(file.FileLocation)),
    [_lastSpan$]: dart.fieldType(dart.legacy(file.FileSpan))
  }));
  var C18;
  var _scanner$2 = dart.privateName(relative_span_scanner, "_SpanScannerState._scanner");
  relative_span_scanner._SpanScannerState = class _SpanScannerState extends core.Object {
    get [_scanner$1]() {
      return this[_scanner$2];
    }
    set [_scanner$1](value) {
      super[_scanner$1] = value;
    }
    get line() {
      return this[_scanner$1][_sourceFile$].getLine(this.position);
    }
    get column() {
      return this[_scanner$1][_sourceFile$].getColumn(this.position);
    }
    get [_scanner$]() {
      return LineScannerL().as(this.noSuchMethod(new core._Invocation.getter(C18 || CT.C18)));
    }
  };
  (relative_span_scanner._SpanScannerState.new = function(_scanner, position) {
    this[_scanner$2] = _scanner;
    this.position = position;
    ;
  }).prototype = relative_span_scanner._SpanScannerState.prototype;
  dart.addTypeTests(relative_span_scanner._SpanScannerState);
  dart.addTypeCaches(relative_span_scanner._SpanScannerState);
  relative_span_scanner._SpanScannerState[dart.implements] = () => [line_scanner.LineScannerState];
  dart.setGetterSignature(relative_span_scanner._SpanScannerState, () => ({
    __proto__: dart.getGetters(relative_span_scanner._SpanScannerState.__proto__),
    line: dart.legacy(core.int),
    column: dart.legacy(core.int),
    [_scanner$]: dart.legacy(line_scanner.LineScanner)
  }));
  dart.setLibraryUri(relative_span_scanner._SpanScannerState, L3);
  dart.setFieldSignature(relative_span_scanner._SpanScannerState, () => ({
    __proto__: dart.getFields(relative_span_scanner._SpanScannerState.__proto__),
    [_scanner$1]: dart.finalFieldType(dart.legacy(relative_span_scanner.RelativeSpanScanner)),
    position: dart.finalFieldType(dart.legacy(core.int))
  }));
  line_scanner.LineScanner = class LineScanner extends string_scanner.StringScanner {
    get line() {
      return this[_line$];
    }
    get column() {
      return this[_column$];
    }
    get state() {
      return new line_scanner.LineScannerState.__(this, this.position, this.line, this.column);
    }
    get [_betweenCRLF$]() {
      return this.peekChar(-1) === 13 && this.peekChar() === 10;
    }
    set state(state) {
      if (state[_scanner$] !== this) {
        dart.throw(new core.ArgumentError.new("The given LineScannerState was not returned by " + "this LineScanner."));
      }
      super.position = state.position;
      this[_line$] = state.line;
      this[_column$] = state.column;
    }
    set position(newPosition) {
      let oldPosition = this.position;
      super.position = newPosition;
      if (dart.notNull(newPosition) > dart.notNull(oldPosition)) {
        let newlines = this[_newlinesIn$](this.string[$substring](oldPosition, newPosition));
        this[_line$] = dart.notNull(this[_line$]) + dart.notNull(newlines[$length]);
        if (dart.test(newlines[$isEmpty])) {
          this[_column$] = dart.notNull(this[_column$]) + (dart.notNull(newPosition) - dart.notNull(oldPosition));
        } else {
          this[_column$] = dart.notNull(newPosition) - dart.notNull(newlines[$last].end);
        }
      } else {
        let newlines = this[_newlinesIn$](this.string[$substring](newPosition, oldPosition));
        if (dart.test(this[_betweenCRLF$])) newlines[$removeLast]();
        this[_line$] = dart.notNull(this[_line$]) - dart.notNull(newlines[$length]);
        if (dart.test(newlines[$isEmpty])) {
          this[_column$] = dart.notNull(this[_column$]) - (dart.notNull(oldPosition) - dart.notNull(newPosition));
        } else {
          this[_column$] = dart.notNull(newPosition) - this.string[$lastIndexOf](line_scanner._newlineRegExp, newPosition) - 1;
        }
      }
    }
    get position() {
      return super.position;
    }
    scanChar(character) {
      if (!dart.test(super.scanChar(character))) return false;
      this[_adjustLineAndColumn$](character);
      return true;
    }
    readChar() {
      let character = super.readChar();
      this[_adjustLineAndColumn$](character);
      return character;
    }
    [_adjustLineAndColumn$](character) {
      if (character === 10 || character === 13 && this.peekChar() !== 10) {
        this[_line$] = dart.notNull(this[_line$]) + 1;
        this[_column$] = 0;
      } else {
        this[_column$] = dart.notNull(this[_column$]) + 1;
      }
    }
    scan(pattern) {
      if (!dart.test(super.scan(pattern))) return false;
      let newlines = this[_newlinesIn$](this.lastMatch._get(0));
      this[_line$] = dart.notNull(this[_line$]) + dart.notNull(newlines[$length]);
      if (dart.test(newlines[$isEmpty])) {
        this[_column$] = dart.notNull(this[_column$]) + this.lastMatch._get(0).length;
      } else {
        this[_column$] = this.lastMatch._get(0).length - dart.notNull(newlines[$last].end);
      }
      return true;
    }
    [_newlinesIn$](text) {
      let newlines = line_scanner._newlineRegExp.allMatches(text)[$toList]();
      if (dart.test(this[_betweenCRLF$])) newlines[$removeLast]();
      return newlines;
    }
  };
  (line_scanner.LineScanner.new = function(string, opts) {
    let sourceUrl = opts && 'sourceUrl' in opts ? opts.sourceUrl : null;
    let position = opts && 'position' in opts ? opts.position : null;
    this[_line$] = 0;
    this[_column$] = 0;
    line_scanner.LineScanner.__proto__.new.call(this, string, {sourceUrl: sourceUrl, position: position});
    ;
  }).prototype = line_scanner.LineScanner.prototype;
  dart.addTypeTests(line_scanner.LineScanner);
  dart.addTypeCaches(line_scanner.LineScanner);
  dart.setMethodSignature(line_scanner.LineScanner, () => ({
    __proto__: dart.getMethods(line_scanner.LineScanner.__proto__),
    [_adjustLineAndColumn$]: dart.fnType(dart.void, [dart.legacy(core.int)]),
    [_newlinesIn$]: dart.fnType(dart.legacy(core.List$(dart.legacy(core.Match))), [dart.legacy(core.String)])
  }));
  dart.setGetterSignature(line_scanner.LineScanner, () => ({
    __proto__: dart.getGetters(line_scanner.LineScanner.__proto__),
    line: dart.legacy(core.int),
    column: dart.legacy(core.int),
    state: dart.legacy(line_scanner.LineScannerState),
    [_betweenCRLF$]: dart.legacy(core.bool)
  }));
  dart.setSetterSignature(line_scanner.LineScanner, () => ({
    __proto__: dart.getSetters(line_scanner.LineScanner.__proto__),
    state: dart.legacy(line_scanner.LineScannerState)
  }));
  dart.setLibraryUri(line_scanner.LineScanner, L4);
  dart.setFieldSignature(line_scanner.LineScanner, () => ({
    __proto__: dart.getFields(line_scanner.LineScanner.__proto__),
    [_line$]: dart.fieldType(dart.legacy(core.int)),
    [_column$]: dart.fieldType(dart.legacy(core.int))
  }));
  var position$ = dart.privateName(line_scanner, "LineScannerState.position");
  var line$ = dart.privateName(line_scanner, "LineScannerState.line");
  var column$ = dart.privateName(line_scanner, "LineScannerState.column");
  line_scanner.LineScannerState = class LineScannerState extends core.Object {
    get position() {
      return this[position$];
    }
    set position(value) {
      super.position = value;
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
  };
  (line_scanner.LineScannerState.__ = function(_scanner, position, line, column) {
    this[_scanner$] = _scanner;
    this[position$] = position;
    this[line$] = line;
    this[column$] = column;
    ;
  }).prototype = line_scanner.LineScannerState.prototype;
  dart.addTypeTests(line_scanner.LineScannerState);
  dart.addTypeCaches(line_scanner.LineScannerState);
  dart.setLibraryUri(line_scanner.LineScannerState, L4);
  dart.setFieldSignature(line_scanner.LineScannerState, () => ({
    __proto__: dart.getFields(line_scanner.LineScannerState.__proto__),
    [_scanner$]: dart.finalFieldType(dart.legacy(line_scanner.LineScanner)),
    position: dart.finalFieldType(dart.legacy(core.int)),
    line: dart.finalFieldType(dart.legacy(core.int)),
    column: dart.finalFieldType(dart.legacy(core.int))
  }));
  dart.defineLazy(line_scanner, {
    /*line_scanner._newlineRegExp*/get _newlineRegExp() {
      return core.RegExp.new("\\r\\n?|\\n");
    }
  }, true);
  var _line$1 = dart.privateName(eager_span_scanner, "_line");
  var _column$1 = dart.privateName(eager_span_scanner, "_column");
  var _betweenCRLF$1 = dart.privateName(eager_span_scanner, "_betweenCRLF");
  var _scanner$3 = dart.privateName(eager_span_scanner, "_scanner");
  var _newlinesIn$1 = dart.privateName(eager_span_scanner, "_newlinesIn");
  var _adjustLineAndColumn$1 = dart.privateName(eager_span_scanner, "_adjustLineAndColumn");
  eager_span_scanner.EagerSpanScanner = class EagerSpanScanner extends span_scanner.SpanScanner {
    get line() {
      return this[_line$1];
    }
    get column() {
      return this[_column$1];
    }
    get state() {
      return new eager_span_scanner._EagerSpanScannerState.new(this, this.position, this.line, this.column);
    }
    get [_betweenCRLF$1]() {
      return this.peekChar(-1) === 13 && this.peekChar() === 10;
    }
    set state(state) {
      if (!_EagerSpanScannerStateL().is(state) || _EagerSpanScannerStateL().as(state)[_scanner$3] !== this) {
        dart.throw(new core.ArgumentError.new("The given LineScannerState was not returned by " + "this LineScanner."));
      }
      super.position = state.position;
      this[_line$1] = state.line;
      this[_column$1] = state.column;
    }
    set position(newPosition) {
      let oldPosition = this.position;
      super.position = newPosition;
      if (dart.notNull(newPosition) > dart.notNull(oldPosition)) {
        let newlines = this[_newlinesIn$1](this.string[$substring](oldPosition, newPosition));
        this[_line$1] = dart.notNull(this[_line$1]) + dart.notNull(newlines[$length]);
        if (dart.test(newlines[$isEmpty])) {
          this[_column$1] = dart.notNull(this[_column$1]) + (dart.notNull(newPosition) - dart.notNull(oldPosition));
        } else {
          this[_column$1] = dart.notNull(newPosition) - dart.notNull(newlines[$last].end);
        }
      } else {
        let newlines = this[_newlinesIn$1](this.string[$substring](newPosition, oldPosition));
        if (dart.test(this[_betweenCRLF$1])) newlines[$removeLast]();
        this[_line$1] = dart.notNull(this[_line$1]) - dart.notNull(newlines[$length]);
        if (dart.test(newlines[$isEmpty])) {
          this[_column$1] = dart.notNull(this[_column$1]) - (dart.notNull(oldPosition) - dart.notNull(newPosition));
        } else {
          this[_column$1] = dart.notNull(newPosition) - this.string[$lastIndexOf](eager_span_scanner._newlineRegExp, newPosition) - 1;
        }
      }
    }
    get position() {
      return super.position;
    }
    scanChar(character) {
      if (!dart.test(super.scanChar(character))) return false;
      this[_adjustLineAndColumn$1](character);
      return true;
    }
    readChar() {
      let character = super.readChar();
      this[_adjustLineAndColumn$1](character);
      return character;
    }
    [_adjustLineAndColumn$1](character) {
      if (character === 10 || character === 13 && this.peekChar() !== 10) {
        this[_line$1] = dart.notNull(this[_line$1]) + 1;
        this[_column$1] = 0;
      } else {
        this[_column$1] = dart.notNull(this[_column$1]) + 1;
      }
    }
    scan(pattern) {
      if (!dart.test(super.scan(pattern))) return false;
      let newlines = this[_newlinesIn$1](this.lastMatch._get(0));
      this[_line$1] = dart.notNull(this[_line$1]) + dart.notNull(newlines[$length]);
      if (dart.test(newlines[$isEmpty])) {
        this[_column$1] = dart.notNull(this[_column$1]) + this.lastMatch._get(0).length;
      } else {
        this[_column$1] = this.lastMatch._get(0).length - dart.notNull(newlines[$last].end);
      }
      return true;
    }
    [_newlinesIn$1](text) {
      let newlines = eager_span_scanner._newlineRegExp.allMatches(text)[$toList]();
      if (dart.test(this[_betweenCRLF$1])) newlines[$removeLast]();
      return newlines;
    }
  };
  (eager_span_scanner.EagerSpanScanner.new = function(string, opts) {
    let sourceUrl = opts && 'sourceUrl' in opts ? opts.sourceUrl : null;
    let position = opts && 'position' in opts ? opts.position : null;
    this[_line$1] = 0;
    this[_column$1] = 0;
    eager_span_scanner.EagerSpanScanner.__proto__.new.call(this, string, {sourceUrl: sourceUrl, position: position});
    ;
  }).prototype = eager_span_scanner.EagerSpanScanner.prototype;
  dart.addTypeTests(eager_span_scanner.EagerSpanScanner);
  dart.addTypeCaches(eager_span_scanner.EagerSpanScanner);
  dart.setMethodSignature(eager_span_scanner.EagerSpanScanner, () => ({
    __proto__: dart.getMethods(eager_span_scanner.EagerSpanScanner.__proto__),
    [_adjustLineAndColumn$1]: dart.fnType(dart.void, [dart.legacy(core.int)]),
    [_newlinesIn$1]: dart.fnType(dart.legacy(core.List$(dart.legacy(core.Match))), [dart.legacy(core.String)])
  }));
  dart.setGetterSignature(eager_span_scanner.EagerSpanScanner, () => ({
    __proto__: dart.getGetters(eager_span_scanner.EagerSpanScanner.__proto__),
    [_betweenCRLF$1]: dart.legacy(core.bool)
  }));
  dart.setLibraryUri(eager_span_scanner.EagerSpanScanner, L5);
  dart.setFieldSignature(eager_span_scanner.EagerSpanScanner, () => ({
    __proto__: dart.getFields(eager_span_scanner.EagerSpanScanner.__proto__),
    [_line$1]: dart.fieldType(dart.legacy(core.int)),
    [_column$1]: dart.fieldType(dart.legacy(core.int))
  }));
  var C19;
  var _scanner$4 = dart.privateName(eager_span_scanner, "_EagerSpanScannerState._scanner");
  eager_span_scanner._EagerSpanScannerState = class _EagerSpanScannerState extends core.Object {
    get [_scanner$3]() {
      return this[_scanner$4];
    }
    set [_scanner$3](value) {
      super[_scanner$3] = value;
    }
    get [_scanner$]() {
      return LineScannerL().as(this.noSuchMethod(new core._Invocation.getter(C19 || CT.C19)));
    }
  };
  (eager_span_scanner._EagerSpanScannerState.new = function(_scanner, position, line, column) {
    this[_scanner$4] = _scanner;
    this.position = position;
    this.line = line;
    this.column = column;
    ;
  }).prototype = eager_span_scanner._EagerSpanScannerState.prototype;
  dart.addTypeTests(eager_span_scanner._EagerSpanScannerState);
  dart.addTypeCaches(eager_span_scanner._EagerSpanScannerState);
  eager_span_scanner._EagerSpanScannerState[dart.implements] = () => [line_scanner.LineScannerState];
  dart.setGetterSignature(eager_span_scanner._EagerSpanScannerState, () => ({
    __proto__: dart.getGetters(eager_span_scanner._EagerSpanScannerState.__proto__),
    [_scanner$]: dart.legacy(line_scanner.LineScanner)
  }));
  dart.setLibraryUri(eager_span_scanner._EagerSpanScannerState, L5);
  dart.setFieldSignature(eager_span_scanner._EagerSpanScannerState, () => ({
    __proto__: dart.getFields(eager_span_scanner._EagerSpanScannerState.__proto__),
    [_scanner$3]: dart.finalFieldType(dart.legacy(eager_span_scanner.EagerSpanScanner)),
    position: dart.finalFieldType(dart.legacy(core.int)),
    line: dart.finalFieldType(dart.legacy(core.int)),
    column: dart.finalFieldType(dart.legacy(core.int))
  }));
  dart.defineLazy(eager_span_scanner, {
    /*eager_span_scanner._newlineRegExp*/get _newlineRegExp() {
      return core.RegExp.new("\\r\\n?|\\n");
    }
  }, true);
  dart.trackLibraries("packages/string_scanner/src/eager_span_scanner", {
    "package:string_scanner/src/span_scanner.dart": span_scanner,
    "package:string_scanner/src/utils.dart": utils,
    "package:string_scanner/src/string_scanner.dart": string_scanner,
    "package:string_scanner/src/exception.dart": exception,
    "package:string_scanner/src/relative_span_scanner.dart": relative_span_scanner,
    "package:string_scanner/src/line_scanner.dart": line_scanner,
    "package:string_scanner/src/eager_span_scanner.dart": eager_span_scanner,
    "package:string_scanner/string_scanner.dart": string_scanner$
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["string_scanner.dart","span_scanner.dart","utils.dart","exception.dart","relative_span_scanner.dart","line_scanner.dart","eager_span_scanner.dart"],"names":[],"mappings":"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","file":"eager_span_scanner.unsound.ddc.js"}');
  // Exports:
  return {
    src__span_scanner: span_scanner,
    src__utils: utils,
    src__string_scanner: string_scanner,
    src__exception: exception,
    src__relative_span_scanner: relative_span_scanner,
    src__line_scanner: line_scanner,
    src__eager_span_scanner: eager_span_scanner,
    string_scanner: string_scanner$
  };
}));

//# sourceMappingURL=eager_span_scanner.unsound.ddc.js.map

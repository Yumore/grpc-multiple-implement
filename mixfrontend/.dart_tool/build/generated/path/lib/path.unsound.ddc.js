define(['dart_sdk'], (function load__packages__path__path(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const _interceptors = dart_sdk._interceptors;
  const math = dart_sdk.math;
  const collection = dart_sdk.collection;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  var posix = Object.create(dart.library);
  var parsed_path = Object.create(dart.library);
  var style$ = Object.create(dart.library);
  var windows = Object.create(dart.library);
  var utils = Object.create(dart.library);
  var characters = Object.create(dart.library);
  var internal_style = Object.create(dart.library);
  var context = Object.create(dart.library);
  var path_exception = Object.create(dart.library);
  var path$ = Object.create(dart.library);
  var path_set = Object.create(dart.library);
  var path_map = Object.create(dart.library);
  var url = Object.create(dart.library);
  var $contains = dartx.contains;
  var $isNotEmpty = dartx.isNotEmpty;
  var $codeUnitAt = dartx.codeUnitAt;
  var $isEmpty = dartx.isEmpty;
  var $addAll = dartx.addAll;
  var $add = dartx.add;
  var $substring = dartx.substring;
  var $_get = dartx._get;
  var $endsWith = dartx.endsWith;
  var $toString = dartx.toString;
  var $last = dartx.last;
  var $removeLast = dartx.removeLast;
  var $length = dartx.length;
  var $_set = dartx._set;
  var $insertAll = dartx.insertAll;
  var $insert = dartx.insert;
  var $toLowerCase = dartx.toLowerCase;
  var $replaceAll = dartx.replaceAll;
  var $lastWhere = dartx.lastWhere;
  var $indexOf = dartx.indexOf;
  var $startsWith = dartx.startsWith;
  var $replaceFirst = dartx.replaceFirst;
  var $split = dartx.split;
  var $where = dartx.where;
  var $first = dartx.first;
  var $toList = dartx.toList;
  var $codeUnits = dartx.codeUnits;
  var $removeAt = dartx.removeAt;
  var $take = dartx.take;
  var $map = dartx.map;
  var $join = dartx.join;
  var $iterator = dartx.iterator;
  var $cast = dartx.cast;
  var $toSet = dartx.toSet;
  var StringL = () => (StringL = dart.constFn(dart.legacy(core.String)))();
  var JSArrayOfStringL = () => (JSArrayOfStringL = dart.constFn(_interceptors.JSArray$(StringL())))();
  var ListOfStringL = () => (ListOfStringL = dart.constFn(core.List$(StringL())))();
  var intL = () => (intL = dart.constFn(dart.legacy(core.int)))();
  var intLToStringL = () => (intLToStringL = dart.constFn(dart.fnType(StringL(), [intL()])))();
  var boolL = () => (boolL = dart.constFn(dart.legacy(core.bool)))();
  var StringLToboolL = () => (StringLToboolL = dart.constFn(dart.fnType(boolL(), [StringL()])))();
  var VoidToNullN = () => (VoidToNullN = dart.constFn(dart.fnType(core.Null, [])))();
  var InternalStyleL = () => (InternalStyleL = dart.constFn(dart.legacy(internal_style.InternalStyle)))();
  var PathExceptionL = () => (PathExceptionL = dart.constFn(dart.legacy(path_exception.PathException)))();
  var UriL = () => (UriL = dart.constFn(dart.legacy(core.Uri)))();
  var StringLToStringL = () => (StringLToStringL = dart.constFn(dart.fnType(StringL(), [StringL()])))();
  var ExceptionL = () => (ExceptionL = dart.constFn(dart.legacy(core.Exception)))();
  var LinkedHashSetOfStringL = () => (LinkedHashSetOfStringL = dart.constFn(collection.LinkedHashSet$(StringL())))();
  var StringLAndStringLToboolL = () => (StringLAndStringLToboolL = dart.constFn(dart.fnType(boolL(), [StringL(), StringL()])))();
  var StringLTointL = () => (StringLTointL = dart.constFn(dart.fnType(intL(), [StringL()])))();
  var dynamicToboolL = () => (dynamicToboolL = dart.constFn(dart.fnType(boolL(), [dart.dynamic])))();
  var IterableOfStringL = () => (IterableOfStringL = dart.constFn(core.Iterable$(StringL())))();
  var IterableLOfStringL = () => (IterableLOfStringL = dart.constFn(dart.legacy(IterableOfStringL())))();
  var SetOfStringL = () => (SetOfStringL = dart.constFn(core.Set$(StringL())))();
  var SetLOfStringL = () => (SetLOfStringL = dart.constFn(dart.legacy(SetOfStringL())))();
  const CT = Object.create(null);
  var L0 = "package:path/src/style.dart";
  var L7 = "org-dartlang-app:///packages/path/path.dart";
  var L5 = "package:path/src/context.dart";
  var L3 = "package:path/src/parsed_path.dart";
  var L10 = "package:path/src/style/url.dart";
  var L2 = "package:path/src/style/posix.dart";
  var L4 = "package:path/src/style/windows.dart";
  var L1 = "package:path/src/internal_style.dart";
  var L8 = "package:path/src/path_set.dart";
  var L6 = "package:path/src/path_exception.dart";
  var L9 = "package:path/src/path_map.dart";
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.constList(["/"], StringL());
    },
    get C1() {
      return C1 = dart.constList(["/", "\\"], StringL());
    },
    get C2() {
      return C2 = dart.const({
        __proto__: context._PathDirection.prototype,
        [name$0]: "above root"
      });
    },
    get C3() {
      return C3 = dart.const({
        __proto__: context._PathDirection.prototype,
        [name$0]: "at root"
      });
    },
    get C4() {
      return C4 = dart.const({
        __proto__: context._PathDirection.prototype,
        [name$0]: "reaches root"
      });
    },
    get C5() {
      return C5 = dart.const({
        __proto__: context._PathDirection.prototype,
        [name$0]: "below root"
      });
    },
    get C6() {
      return C6 = dart.const({
        __proto__: context._PathRelation.prototype,
        [name$1]: "within"
      });
    },
    get C7() {
      return C7 = dart.const({
        __proto__: context._PathRelation.prototype,
        [name$1]: "equal"
      });
    },
    get C8() {
      return C8 = dart.const({
        __proto__: context._PathRelation.prototype,
        [name$1]: "different"
      });
    },
    get C9() {
      return C9 = dart.const({
        __proto__: context._PathRelation.prototype,
        [name$1]: "inconclusive"
      });
    }
  }, false);
  var C0;
  style$.Style = class Style extends core.Object {
    static _getPlatformStyle() {
      if (core.Uri.base.scheme !== "file") return style$.Style.url;
      if (!core.Uri.base.path[$endsWith]("/")) return style$.Style.url;
      if (core._Uri.new({path: "a/b"}).toFilePath() === "a\\b") return style$.Style.windows;
      return style$.Style.posix;
    }
    get context() {
      return context.Context.new({style: this});
    }
    toString() {
      return this.name;
    }
  };
  (style$.Style.new = function() {
    ;
  }).prototype = style$.Style.prototype;
  dart.addTypeTests(style$.Style);
  dart.addTypeCaches(style$.Style);
  dart.setMethodSignature(style$.Style, () => ({
    __proto__: dart.getMethods(style$.Style.__proto__),
    toString: dart.fnType(dart.legacy(core.String), []),
    [$toString]: dart.fnType(dart.legacy(core.String), [])
  }));
  dart.setGetterSignature(style$.Style, () => ({
    __proto__: dart.getGetters(style$.Style.__proto__),
    context: dart.legacy(context.Context)
  }));
  dart.setLibraryUri(style$.Style, L0);
  dart.defineExtensionMethods(style$.Style, ['toString']);
  dart.defineLazy(style$.Style, {
    /*style$.Style.posix*/get posix() {
      return new posix.PosixStyle.new();
    },
    /*style$.Style.windows*/get windows() {
      return new windows.WindowsStyle.new();
    },
    /*style$.Style.url*/get url() {
      return new url.UrlStyle.new();
    },
    /*style$.Style.platform*/get platform() {
      return style$.Style._getPlatformStyle();
    }
  }, true);
  internal_style.InternalStyle = class InternalStyle extends style$.Style {
    getRoot(path) {
      let length = this.rootLength(path);
      if (dart.notNull(length) > 0) return path[$substring](0, length);
      return dart.test(this.isRootRelative(path)) ? path[$_get](0) : null;
    }
    relativePathToUri(path) {
      let segments = this.context.split(path);
      if (dart.test(this.isSeparator(path[$codeUnitAt](path.length - 1)))) segments[$add]("");
      return core._Uri.new({pathSegments: segments});
    }
    codeUnitsEqual(codeUnit1, codeUnit2) {
      return codeUnit1 == codeUnit2;
    }
    pathsEqual(path1, path2) {
      return path1 == path2;
    }
    canonicalizeCodeUnit(codeUnit) {
      return codeUnit;
    }
    canonicalizePart(part) {
      return part;
    }
  };
  (internal_style.InternalStyle.new = function() {
    ;
  }).prototype = internal_style.InternalStyle.prototype;
  dart.addTypeTests(internal_style.InternalStyle);
  dart.addTypeCaches(internal_style.InternalStyle);
  dart.setMethodSignature(internal_style.InternalStyle, () => ({
    __proto__: dart.getMethods(internal_style.InternalStyle.__proto__),
    getRoot: dart.fnType(dart.legacy(core.String), [dart.legacy(core.String)]),
    relativePathToUri: dart.fnType(dart.legacy(core.Uri), [dart.legacy(core.String)]),
    codeUnitsEqual: dart.fnType(dart.legacy(core.bool), [dart.legacy(core.int), dart.legacy(core.int)]),
    pathsEqual: dart.fnType(dart.legacy(core.bool), [dart.legacy(core.String), dart.legacy(core.String)]),
    canonicalizeCodeUnit: dart.fnType(dart.legacy(core.int), [dart.legacy(core.int)]),
    canonicalizePart: dart.fnType(dart.legacy(core.String), [dart.legacy(core.String)])
  }));
  dart.setLibraryUri(internal_style.InternalStyle, L1);
  var name = dart.privateName(posix, "PosixStyle.name");
  var separator = dart.privateName(posix, "PosixStyle.separator");
  var separators = dart.privateName(posix, "PosixStyle.separators");
  var separatorPattern = dart.privateName(posix, "PosixStyle.separatorPattern");
  var needsSeparatorPattern = dart.privateName(posix, "PosixStyle.needsSeparatorPattern");
  var rootPattern = dart.privateName(posix, "PosixStyle.rootPattern");
  var relativeRootPattern = dart.privateName(posix, "PosixStyle.relativeRootPattern");
  posix.PosixStyle = class PosixStyle extends internal_style.InternalStyle {
    get name() {
      return this[name];
    }
    set name(value) {
      super.name = value;
    }
    get separator() {
      return this[separator];
    }
    set separator(value) {
      super.separator = value;
    }
    get separators() {
      return this[separators];
    }
    set separators(value) {
      super.separators = value;
    }
    get separatorPattern() {
      return this[separatorPattern];
    }
    set separatorPattern(value) {
      super.separatorPattern = value;
    }
    get needsSeparatorPattern() {
      return this[needsSeparatorPattern];
    }
    set needsSeparatorPattern(value) {
      super.needsSeparatorPattern = value;
    }
    get rootPattern() {
      return this[rootPattern];
    }
    set rootPattern(value) {
      super.rootPattern = value;
    }
    get relativeRootPattern() {
      return this[relativeRootPattern];
    }
    set relativeRootPattern(value) {
      super.relativeRootPattern = value;
    }
    containsSeparator(path) {
      return path[$contains]("/");
    }
    isSeparator(codeUnit) {
      return codeUnit === 47;
    }
    needsSeparator(path) {
      return path[$isNotEmpty] && !dart.test(this.isSeparator(path[$codeUnitAt](path.length - 1)));
    }
    rootLength(path, opts) {
      let withDrive = opts && 'withDrive' in opts ? opts.withDrive : false;
      if (path[$isNotEmpty] && dart.test(this.isSeparator(path[$codeUnitAt](0)))) return 1;
      return 0;
    }
    isRootRelative(path) {
      return false;
    }
    getRelativeRoot(path) {
      return null;
    }
    pathFromUri(uri) {
      if (uri.scheme === "" || uri.scheme === "file") {
        return core.Uri.decodeComponent(uri.path);
      }
      dart.throw(new core.ArgumentError.new("Uri " + dart.str(uri) + " must have scheme 'file:'."));
    }
    absolutePathToUri(path) {
      let parsed = parsed_path.ParsedPath.parse(path, this);
      if (dart.test(parsed.parts[$isEmpty])) {
        parsed.parts[$addAll](JSArrayOfStringL().of(["", ""]));
      } else if (dart.test(parsed.hasTrailingSeparator)) {
        parsed.parts[$add]("");
      }
      return core._Uri.new({scheme: "file", pathSegments: parsed.parts});
    }
  };
  (posix.PosixStyle.new = function() {
    this[name] = "posix";
    this[separator] = "/";
    this[separators] = C0 || CT.C0;
    this[separatorPattern] = core.RegExp.new("/");
    this[needsSeparatorPattern] = core.RegExp.new("[^/]$");
    this[rootPattern] = core.RegExp.new("^/");
    this[relativeRootPattern] = null;
    ;
  }).prototype = posix.PosixStyle.prototype;
  dart.addTypeTests(posix.PosixStyle);
  dart.addTypeCaches(posix.PosixStyle);
  dart.setMethodSignature(posix.PosixStyle, () => ({
    __proto__: dart.getMethods(posix.PosixStyle.__proto__),
    containsSeparator: dart.fnType(dart.legacy(core.bool), [dart.legacy(core.String)]),
    isSeparator: dart.fnType(dart.legacy(core.bool), [dart.legacy(core.int)]),
    needsSeparator: dart.fnType(dart.legacy(core.bool), [dart.legacy(core.String)]),
    rootLength: dart.fnType(dart.legacy(core.int), [dart.legacy(core.String)], {withDrive: dart.legacy(core.bool)}, {}),
    isRootRelative: dart.fnType(dart.legacy(core.bool), [dart.legacy(core.String)]),
    getRelativeRoot: dart.fnType(dart.legacy(core.String), [dart.legacy(core.String)]),
    pathFromUri: dart.fnType(dart.legacy(core.String), [dart.legacy(core.Uri)]),
    absolutePathToUri: dart.fnType(dart.legacy(core.Uri), [dart.legacy(core.String)])
  }));
  dart.setLibraryUri(posix.PosixStyle, L2);
  dart.setFieldSignature(posix.PosixStyle, () => ({
    __proto__: dart.getFields(posix.PosixStyle.__proto__),
    name: dart.finalFieldType(dart.legacy(core.String)),
    separator: dart.finalFieldType(dart.legacy(core.String)),
    separators: dart.finalFieldType(dart.legacy(core.List$(dart.legacy(core.String)))),
    separatorPattern: dart.finalFieldType(dart.legacy(core.Pattern)),
    needsSeparatorPattern: dart.finalFieldType(dart.legacy(core.Pattern)),
    rootPattern: dart.finalFieldType(dart.legacy(core.Pattern)),
    relativeRootPattern: dart.finalFieldType(dart.legacy(core.Pattern))
  }));
  var _splitExtension = dart.privateName(parsed_path, "_splitExtension");
  var _kthLastIndexOf = dart.privateName(parsed_path, "_kthLastIndexOf");
  var style$0 = dart.privateName(parsed_path, "ParsedPath.style");
  var root$ = dart.privateName(parsed_path, "ParsedPath.root");
  var isRootRelative$ = dart.privateName(parsed_path, "ParsedPath.isRootRelative");
  var parts$ = dart.privateName(parsed_path, "ParsedPath.parts");
  var separators$ = dart.privateName(parsed_path, "ParsedPath.separators");
  parsed_path.ParsedPath = class ParsedPath extends core.Object {
    get style() {
      return this[style$0];
    }
    set style(value) {
      this[style$0] = value;
    }
    get root() {
      return this[root$];
    }
    set root(value) {
      this[root$] = value;
    }
    get isRootRelative() {
      return this[isRootRelative$];
    }
    set isRootRelative(value) {
      this[isRootRelative$] = value;
    }
    get parts() {
      return this[parts$];
    }
    set parts(value) {
      this[parts$] = value;
    }
    get separators() {
      return this[separators$];
    }
    set separators(value) {
      this[separators$] = value;
    }
    extension(level = null) {
      return this[_splitExtension](level)[$_get](1);
    }
    get isAbsolute() {
      return this.root != null;
    }
    static parse(path, style) {
      let root = style.getRoot(path);
      let isRootRelative = style.isRootRelative(path);
      if (root != null) path = path[$substring](root.length);
      let parts = JSArrayOfStringL().of([]);
      let separators = JSArrayOfStringL().of([]);
      let start = 0;
      if (path[$isNotEmpty] && dart.test(style.isSeparator(path[$codeUnitAt](0)))) {
        separators[$add](path[$_get](0));
        start = 1;
      } else {
        separators[$add]("");
      }
      for (let i = start; i < path.length; i = i + 1) {
        if (dart.test(style.isSeparator(path[$codeUnitAt](i)))) {
          parts[$add](path[$substring](start, i));
          separators[$add](path[$_get](i));
          start = i + 1;
        }
      }
      if (start < path.length) {
        parts[$add](path[$substring](start));
        separators[$add]("");
      }
      return new parsed_path.ParsedPath.__(style, root, isRootRelative, parts, separators);
    }
    get basename() {
      let t0;
      let copy = this.clone();
      copy.removeTrailingSeparators();
      if (dart.test(copy.parts[$isEmpty])) {
        t0 = this.root;
        return t0 == null ? "" : t0;
      }
      return copy.parts[$last];
    }
    get basenameWithoutExtension() {
      return this[_splitExtension]()[$_get](0);
    }
    get hasTrailingSeparator() {
      return dart.test(this.parts[$isNotEmpty]) && (this.parts[$last] === "" || this.separators[$last] !== "");
    }
    removeTrailingSeparators() {
      while (dart.test(this.parts[$isNotEmpty]) && this.parts[$last] === "") {
        this.parts[$removeLast]();
        this.separators[$removeLast]();
      }
      if (dart.test(this.separators[$isNotEmpty])) this.separators[$_set](dart.notNull(this.separators[$length]) - 1, "");
    }
    normalize(opts) {
      let canonicalize = opts && 'canonicalize' in opts ? opts.canonicalize : false;
      let leadingDoubles = 0;
      let newParts = JSArrayOfStringL().of([]);
      for (let part of this.parts) {
        if (part === "." || part === "") {
        } else if (part === "..") {
          if (dart.test(newParts[$isNotEmpty])) {
            newParts[$removeLast]();
          } else {
            leadingDoubles = leadingDoubles + 1;
          }
        } else {
          newParts[$add](dart.test(canonicalize) ? this.style.canonicalizePart(part) : part);
        }
      }
      if (!dart.test(this.isAbsolute)) {
        newParts[$insertAll](0, ListOfStringL().filled(leadingDoubles, ".."));
      }
      if (dart.test(newParts[$isEmpty]) && !dart.test(this.isAbsolute)) {
        newParts[$add](".");
      }
      let newSeparators = ListOfStringL().generate(newParts[$length], dart.fn(_ => this.style.separator, intLToStringL()), {growable: true});
      newSeparators[$insert](0, dart.test(this.isAbsolute) && dart.test(newParts[$isNotEmpty]) && dart.test(this.style.needsSeparator(this.root)) ? this.style.separator : "");
      this.parts = newParts;
      this.separators = newSeparators;
      if (this.root != null && dart.equals(this.style, style$.Style.windows)) {
        if (dart.test(canonicalize)) this.root = this.root[$toLowerCase]();
        this.root = this.root[$replaceAll]("/", "\\");
      }
      this.removeTrailingSeparators();
    }
    toString() {
      let builder = new core.StringBuffer.new();
      if (this.root != null) builder.write(this.root);
      for (let i = 0; i < dart.notNull(this.parts[$length]); i = i + 1) {
        builder.write(this.separators[$_get](i));
        builder.write(this.parts[$_get](i));
      }
      builder.write(this.separators[$last]);
      return builder.toString();
    }
    [_kthLastIndexOf](path, character, k) {
      let count = 0;
      let leftMostIndexedCharacter = 0;
      for (let index = path.length - 1; index >= 0; index = index - 1) {
        if (path[$_get](index) === character) {
          leftMostIndexedCharacter = index;
          count = count + 1;
          if (count === k) {
            return index;
          }
        }
      }
      return leftMostIndexedCharacter;
    }
    [_splitExtension](level = 1) {
      if (level == null) dart.throw(new core.ArgumentError.notNull("level"));
      if (dart.notNull(level) <= 0) {
        dart.throw(new core.RangeError.value(level, "level", "level's value must be greater than 0"));
      }
      let file = this.parts[$lastWhere](dart.fn(p => p !== "", StringLToboolL()), {orElse: dart.fn(() => null, VoidToNullN())});
      if (file == null) return JSArrayOfStringL().of(["", ""]);
      if (file === "..") return JSArrayOfStringL().of(["..", ""]);
      let lastDot = this[_kthLastIndexOf](file, ".", level);
      if (dart.notNull(lastDot) <= 0) return JSArrayOfStringL().of([file, ""]);
      return JSArrayOfStringL().of([file[$substring](0, lastDot), file[$substring](lastDot)]);
    }
    clone() {
      return new parsed_path.ParsedPath.__(this.style, this.root, this.isRootRelative, ListOfStringL().from(this.parts), ListOfStringL().from(this.separators));
    }
  };
  (parsed_path.ParsedPath.__ = function(style, root, isRootRelative, parts, separators) {
    this[style$0] = style;
    this[root$] = root;
    this[isRootRelative$] = isRootRelative;
    this[parts$] = parts;
    this[separators$] = separators;
    ;
  }).prototype = parsed_path.ParsedPath.prototype;
  dart.addTypeTests(parsed_path.ParsedPath);
  dart.addTypeCaches(parsed_path.ParsedPath);
  dart.setMethodSignature(parsed_path.ParsedPath, () => ({
    __proto__: dart.getMethods(parsed_path.ParsedPath.__proto__),
    extension: dart.fnType(dart.legacy(core.String), [], [dart.legacy(core.int)]),
    removeTrailingSeparators: dart.fnType(dart.void, []),
    normalize: dart.fnType(dart.void, [], {canonicalize: dart.legacy(core.bool)}, {}),
    toString: dart.fnType(dart.legacy(core.String), []),
    [$toString]: dart.fnType(dart.legacy(core.String), []),
    [_kthLastIndexOf]: dart.fnType(dart.legacy(core.int), [dart.legacy(core.String), dart.legacy(core.String), dart.legacy(core.int)]),
    [_splitExtension]: dart.fnType(dart.legacy(core.List$(dart.legacy(core.String))), [], [dart.legacy(core.int)]),
    clone: dart.fnType(dart.legacy(parsed_path.ParsedPath), [])
  }));
  dart.setGetterSignature(parsed_path.ParsedPath, () => ({
    __proto__: dart.getGetters(parsed_path.ParsedPath.__proto__),
    isAbsolute: dart.legacy(core.bool),
    basename: dart.legacy(core.String),
    basenameWithoutExtension: dart.legacy(core.String),
    hasTrailingSeparator: dart.legacy(core.bool)
  }));
  dart.setLibraryUri(parsed_path.ParsedPath, L3);
  dart.setFieldSignature(parsed_path.ParsedPath, () => ({
    __proto__: dart.getFields(parsed_path.ParsedPath.__proto__),
    style: dart.fieldType(dart.legacy(internal_style.InternalStyle)),
    root: dart.fieldType(dart.legacy(core.String)),
    isRootRelative: dart.fieldType(dart.legacy(core.bool)),
    parts: dart.fieldType(dart.legacy(core.List$(dart.legacy(core.String)))),
    separators: dart.fieldType(dart.legacy(core.List$(dart.legacy(core.String))))
  }));
  dart.defineExtensionMethods(parsed_path.ParsedPath, ['toString']);
  var C1;
  var name$ = dart.privateName(windows, "WindowsStyle.name");
  var separator$ = dart.privateName(windows, "WindowsStyle.separator");
  var separators$0 = dart.privateName(windows, "WindowsStyle.separators");
  var separatorPattern$ = dart.privateName(windows, "WindowsStyle.separatorPattern");
  var needsSeparatorPattern$ = dart.privateName(windows, "WindowsStyle.needsSeparatorPattern");
  var rootPattern$ = dart.privateName(windows, "WindowsStyle.rootPattern");
  var relativeRootPattern$ = dart.privateName(windows, "WindowsStyle.relativeRootPattern");
  windows.WindowsStyle = class WindowsStyle extends internal_style.InternalStyle {
    get name() {
      return this[name$];
    }
    set name(value) {
      super.name = value;
    }
    get separator() {
      return this[separator$];
    }
    set separator(value) {
      super.separator = value;
    }
    get separators() {
      return this[separators$0];
    }
    set separators(value) {
      super.separators = value;
    }
    get separatorPattern() {
      return this[separatorPattern$];
    }
    set separatorPattern(value) {
      super.separatorPattern = value;
    }
    get needsSeparatorPattern() {
      return this[needsSeparatorPattern$];
    }
    set needsSeparatorPattern(value) {
      super.needsSeparatorPattern = value;
    }
    get rootPattern() {
      return this[rootPattern$];
    }
    set rootPattern(value) {
      super.rootPattern = value;
    }
    get relativeRootPattern() {
      return this[relativeRootPattern$];
    }
    set relativeRootPattern(value) {
      super.relativeRootPattern = value;
    }
    containsSeparator(path) {
      return path[$contains]("/");
    }
    isSeparator(codeUnit) {
      return codeUnit === 47 || codeUnit === 92;
    }
    needsSeparator(path) {
      if (path[$isEmpty]) return false;
      return !dart.test(this.isSeparator(path[$codeUnitAt](path.length - 1)));
    }
    rootLength(path, opts) {
      let withDrive = opts && 'withDrive' in opts ? opts.withDrive : false;
      if (path[$isEmpty]) return 0;
      if (path[$codeUnitAt](0) === 47) return 1;
      if (path[$codeUnitAt](0) === 92) {
        if (path.length < 2 || path[$codeUnitAt](1) !== 92) return 1;
        let index = path[$indexOf]("\\", 2);
        if (index > 0) {
          index = path[$indexOf]("\\", index + 1);
          if (index > 0) return index;
        }
        return path.length;
      }
      if (path.length < 3) return 0;
      if (!dart.test(utils.isAlphabetic(path[$codeUnitAt](0)))) return 0;
      if (path[$codeUnitAt](1) !== 58) return 0;
      if (!dart.test(this.isSeparator(path[$codeUnitAt](2)))) return 0;
      return 3;
    }
    isRootRelative(path) {
      return this.rootLength(path) === 1;
    }
    getRelativeRoot(path) {
      let length = this.rootLength(path);
      if (length === 1) return path[$_get](0);
      return null;
    }
    pathFromUri(uri) {
      if (uri.scheme !== "" && uri.scheme !== "file") {
        dart.throw(new core.ArgumentError.new("Uri " + dart.str(uri) + " must have scheme 'file:'."));
      }
      let path = uri.path;
      if (uri.host === "") {
        if (path.length >= 3 && path[$startsWith]("/") && dart.test(utils.isDriveLetter(path, 1))) {
          path = path[$replaceFirst]("/", "");
        }
      } else {
        path = "\\\\" + dart.str(uri.host) + dart.str(path);
      }
      return core.Uri.decodeComponent(path[$replaceAll]("/", "\\"));
    }
    absolutePathToUri(path) {
      let parsed = parsed_path.ParsedPath.parse(path, this);
      if (parsed.root[$startsWith]("\\\\")) {
        let rootParts = parsed.root[$split]("\\")[$where](dart.fn(part => part !== "", StringLToboolL()));
        parsed.parts[$insert](0, rootParts[$last]);
        if (dart.test(parsed.hasTrailingSeparator)) {
          parsed.parts[$add]("");
        }
        return core._Uri.new({scheme: "file", host: rootParts[$first], pathSegments: parsed.parts});
      } else {
        if (dart.test(parsed.parts[$isEmpty]) || dart.test(parsed.hasTrailingSeparator)) {
          parsed.parts[$add]("");
        }
        parsed.parts[$insert](0, parsed.root[$replaceAll]("/", "")[$replaceAll]("\\", ""));
        return core._Uri.new({scheme: "file", pathSegments: parsed.parts});
      }
    }
    codeUnitsEqual(codeUnit1, codeUnit2) {
      if (codeUnit1 == codeUnit2) return true;
      if (codeUnit1 === 47) return codeUnit2 === 92;
      if (codeUnit1 === 92) return codeUnit2 === 47;
      if ((dart.notNull(codeUnit1) ^ dart.notNull(codeUnit2)) >>> 0 !== 32) return false;
      let upperCase1 = (dart.notNull(codeUnit1) | 32) >>> 0;
      return upperCase1 >= 97 && upperCase1 <= 122;
    }
    pathsEqual(path1, path2) {
      if (path1 == path2) return true;
      if (path1.length !== path2.length) return false;
      for (let i = 0; i < path1.length; i = i + 1) {
        if (!dart.test(this.codeUnitsEqual(path1[$codeUnitAt](i), path2[$codeUnitAt](i)))) {
          return false;
        }
      }
      return true;
    }
    canonicalizeCodeUnit(codeUnit) {
      if (codeUnit === 47) return 92;
      if (dart.notNull(codeUnit) < 65) return codeUnit;
      if (dart.notNull(codeUnit) > 90) return codeUnit;
      return (dart.notNull(codeUnit) | 32) >>> 0;
    }
    canonicalizePart(part) {
      return part[$toLowerCase]();
    }
  };
  (windows.WindowsStyle.new = function() {
    this[name$] = "windows";
    this[separator$] = "\\";
    this[separators$0] = C1 || CT.C1;
    this[separatorPattern$] = core.RegExp.new("[/\\\\]");
    this[needsSeparatorPattern$] = core.RegExp.new("[^/\\\\]$");
    this[rootPattern$] = core.RegExp.new("^(\\\\\\\\[^\\\\]+\\\\[^\\\\/]+|[a-zA-Z]:[/\\\\])");
    this[relativeRootPattern$] = core.RegExp.new("^[/\\\\](?![/\\\\])");
    ;
  }).prototype = windows.WindowsStyle.prototype;
  dart.addTypeTests(windows.WindowsStyle);
  dart.addTypeCaches(windows.WindowsStyle);
  dart.setMethodSignature(windows.WindowsStyle, () => ({
    __proto__: dart.getMethods(windows.WindowsStyle.__proto__),
    containsSeparator: dart.fnType(dart.legacy(core.bool), [dart.legacy(core.String)]),
    isSeparator: dart.fnType(dart.legacy(core.bool), [dart.legacy(core.int)]),
    needsSeparator: dart.fnType(dart.legacy(core.bool), [dart.legacy(core.String)]),
    rootLength: dart.fnType(dart.legacy(core.int), [dart.legacy(core.String)], {withDrive: dart.legacy(core.bool)}, {}),
    isRootRelative: dart.fnType(dart.legacy(core.bool), [dart.legacy(core.String)]),
    getRelativeRoot: dart.fnType(dart.legacy(core.String), [dart.legacy(core.String)]),
    pathFromUri: dart.fnType(dart.legacy(core.String), [dart.legacy(core.Uri)]),
    absolutePathToUri: dart.fnType(dart.legacy(core.Uri), [dart.legacy(core.String)])
  }));
  dart.setLibraryUri(windows.WindowsStyle, L4);
  dart.setFieldSignature(windows.WindowsStyle, () => ({
    __proto__: dart.getFields(windows.WindowsStyle.__proto__),
    name: dart.finalFieldType(dart.legacy(core.String)),
    separator: dart.finalFieldType(dart.legacy(core.String)),
    separators: dart.finalFieldType(dart.legacy(core.List$(dart.legacy(core.String)))),
    separatorPattern: dart.finalFieldType(dart.legacy(core.Pattern)),
    needsSeparatorPattern: dart.finalFieldType(dart.legacy(core.Pattern)),
    rootPattern: dart.finalFieldType(dart.legacy(core.Pattern)),
    relativeRootPattern: dart.finalFieldType(dart.legacy(core.Pattern))
  }));
  dart.defineLazy(windows, {
    /*windows._asciiCaseBit*/get _asciiCaseBit() {
      return 32;
    }
  }, true);
  utils.isAlphabetic = function isAlphabetic(char) {
    return dart.notNull(char) >= 65 && dart.notNull(char) <= 90 || dart.notNull(char) >= 97 && dart.notNull(char) <= 122;
  };
  utils.isNumeric = function isNumeric(char) {
    return dart.notNull(char) >= 48 && dart.notNull(char) <= 57;
  };
  utils.isDriveLetter = function isDriveLetter(path, index) {
    if (path.length < dart.notNull(index) + 2) return false;
    if (!dart.test(utils.isAlphabetic(path[$codeUnitAt](index)))) return false;
    if (path[$codeUnitAt](dart.notNull(index) + 1) !== 58) return false;
    if (path.length === dart.notNull(index) + 2) return true;
    return path[$codeUnitAt](dart.notNull(index) + 2) === 47;
  };
  dart.defineLazy(characters, {
    /*characters.plus*/get plus() {
      return 43;
    },
    /*characters.minus*/get minus() {
      return 45;
    },
    /*characters.period*/get period() {
      return 46;
    },
    /*characters.slash*/get slash() {
      return 47;
    },
    /*characters.zero*/get zero() {
      return 48;
    },
    /*characters.nine*/get nine() {
      return 57;
    },
    /*characters.colon*/get colon() {
      return 58;
    },
    /*characters.upperA*/get upperA() {
      return 65;
    },
    /*characters.upperZ*/get upperZ() {
      return 90;
    },
    /*characters.lowerA*/get lowerA() {
      return 97;
    },
    /*characters.lowerZ*/get lowerZ() {
      return 122;
    },
    /*characters.backslash*/get backslash() {
      return 92;
    }
  }, true);
  var _current$ = dart.privateName(context, "_current");
  var _parse = dart.privateName(context, "_parse");
  var _needsNormalization = dart.privateName(context, "_needsNormalization");
  var _isWithinOrEquals = dart.privateName(context, "_isWithinOrEquals");
  var _isWithinOrEqualsFast = dart.privateName(context, "_isWithinOrEqualsFast");
  var _pathDirection = dart.privateName(context, "_pathDirection");
  var _hashFast = dart.privateName(context, "_hashFast");
  var style$1 = dart.privateName(context, "Context.style");
  context.Context = class Context extends core.Object {
    get style() {
      return this[style$1];
    }
    set style(value) {
      super.style = value;
    }
    static new(opts) {
      let style = opts && 'style' in opts ? opts.style : null;
      let current = opts && 'current' in opts ? opts.current : null;
      if (current == null) {
        if (style == null) {
          current = path$.current;
        } else {
          current = ".";
        }
      }
      if (style == null) {
        style = style$.Style.platform;
      } else if (!InternalStyleL().is(style)) {
        dart.throw(new core.ArgumentError.new("Only styles defined by the path package are " + "allowed."));
      }
      return new context.Context.__(InternalStyleL().as(style), current);
    }
    get current() {
      let t0;
      t0 = this[_current$];
      return t0 == null ? path$.current : t0;
    }
    get separator() {
      return this.style.separator;
    }
    absolute(part1, part2 = null, part3 = null, part4 = null, part5 = null, part6 = null, part7 = null) {
      context._validateArgList("absolute", JSArrayOfStringL().of([part1, part2, part3, part4, part5, part6, part7]));
      if (part2 == null && dart.test(this.isAbsolute(part1)) && !dart.test(this.isRootRelative(part1))) {
        return part1;
      }
      return this.join(this.current, part1, part2, part3, part4, part5, part6, part7);
    }
    basename(path) {
      return this[_parse](path).basename;
    }
    basenameWithoutExtension(path) {
      return this[_parse](path).basenameWithoutExtension;
    }
    dirname(path) {
      let t0, t0$;
      let parsed = this[_parse](path);
      parsed.removeTrailingSeparators();
      if (dart.test(parsed.parts[$isEmpty])) {
        t0 = parsed.root;
        return t0 == null ? "." : t0;
      }
      if (parsed.parts[$length] === 1) {
        t0$ = parsed.root;
        return t0$ == null ? "." : t0$;
      }
      parsed.parts[$removeLast]();
      parsed.separators[$removeLast]();
      parsed.removeTrailingSeparators();
      return dart.toString(parsed);
    }
    extension(path, level = 1) {
      return this[_parse](path).extension(level);
    }
    rootPrefix(path) {
      return path[$substring](0, this.style.rootLength(path));
    }
    isAbsolute(path) {
      return dart.notNull(this.style.rootLength(path)) > 0;
    }
    isRelative(path) {
      return !dart.test(this.isAbsolute(path));
    }
    isRootRelative(path) {
      return this.style.isRootRelative(path);
    }
    join(part1, part2 = null, part3 = null, part4 = null, part5 = null, part6 = null, part7 = null, part8 = null) {
      let parts = JSArrayOfStringL().of([part1, part2, part3, part4, part5, part6, part7, part8]);
      context._validateArgList("join", parts);
      return this.joinAll(parts[$where](dart.fn(part => part != null, StringLToboolL())));
    }
    joinAll(parts) {
      let buffer = new core.StringBuffer.new();
      let needsSeparator = false;
      let isAbsoluteAndNotRootRelative = false;
      let iter = parts[$where](dart.fn(part => part !== "", StringLToboolL()));
      for (let part of iter) {
        if (dart.test(this.isRootRelative(part)) && isAbsoluteAndNotRootRelative) {
          let parsed = this[_parse](part);
          let path = buffer.toString();
          parsed.root = path[$substring](0, this.style.rootLength(path, {withDrive: true}));
          if (dart.test(this.style.needsSeparator(parsed.root))) {
            parsed.separators[$_set](0, this.style.separator);
          }
          buffer.clear();
          buffer.write(dart.toString(parsed));
        } else if (dart.test(this.isAbsolute(part))) {
          isAbsoluteAndNotRootRelative = !dart.test(this.isRootRelative(part));
          buffer.clear();
          buffer.write(part);
        } else {
          if (part[$isNotEmpty] && dart.test(this.style.containsSeparator(part[$_get](0)))) {
          } else if (dart.test(needsSeparator)) {
            buffer.write(this.separator);
          }
          buffer.write(part);
        }
        needsSeparator = this.style.needsSeparator(part);
      }
      return buffer.toString();
    }
    split(path) {
      let parsed = this[_parse](path);
      parsed.parts = parsed.parts[$where](dart.fn(part => part[$isNotEmpty], StringLToboolL()))[$toList]();
      if (parsed.root != null) parsed.parts[$insert](0, parsed.root);
      return parsed.parts;
    }
    canonicalize(path) {
      path = this.absolute(path);
      if (!dart.equals(this.style, style$.Style.windows) && !dart.test(this[_needsNormalization](path))) return path;
      let parsed = this[_parse](path);
      parsed.normalize({canonicalize: true});
      return dart.toString(parsed);
    }
    normalize(path) {
      if (!dart.test(this[_needsNormalization](path))) return path;
      let parsed = this[_parse](path);
      parsed.normalize();
      return dart.toString(parsed);
    }
    [_needsNormalization](path) {
      let start = 0;
      let codeUnits = path[$codeUnits];
      let previousPrevious = null;
      let previous = null;
      let root = this.style.rootLength(path);
      if (root !== 0) {
        start = root;
        previous = 47;
        if (dart.equals(this.style, style$.Style.windows)) {
          for (let i = 0; i < dart.notNull(root); i = i + 1) {
            if (codeUnits[$_get](i) === 47) return true;
          }
        }
      }
      for (let i = start; dart.notNull(i) < dart.notNull(codeUnits[$length]); i = dart.notNull(i) + 1) {
        let codeUnit = codeUnits[$_get](i);
        if (dart.test(this.style.isSeparator(codeUnit))) {
          if (dart.equals(this.style, style$.Style.windows) && codeUnit === 47) return true;
          if (previous != null && dart.test(this.style.isSeparator(previous))) return true;
          if (previous === 46 && (previousPrevious == null || previousPrevious === 46 || dart.test(this.style.isSeparator(previousPrevious)))) {
            return true;
          }
        }
        previousPrevious = previous;
        previous = codeUnit;
      }
      if (previous == null) return true;
      if (dart.test(this.style.isSeparator(previous))) return true;
      if (previous === 46 && (previousPrevious == null || dart.test(this.style.isSeparator(previousPrevious)) || previousPrevious === 46)) {
        return true;
      }
      return false;
    }
    relative(path, opts) {
      let t0, t0$, t0$0;
      let from = opts && 'from' in opts ? opts.from : null;
      if (from == null && dart.test(this.isRelative(path))) return this.normalize(path);
      from = from == null ? this.current : this.absolute(from);
      if (dart.test(this.isRelative(from)) && dart.test(this.isAbsolute(path))) {
        return this.normalize(path);
      }
      if (dart.test(this.isRelative(path)) || dart.test(this.isRootRelative(path))) {
        path = this.absolute(path);
      }
      if (dart.test(this.isRelative(path)) && dart.test(this.isAbsolute(from))) {
        dart.throw(new path_exception.PathException.new("Unable to find a path to \"" + dart.str(path) + "\" from \"" + dart.str(from) + "\"."));
      }
      let fromParsed = (t0 = this[_parse](from), (() => {
        t0.normalize();
        return t0;
      })());
      let pathParsed = (t0$ = this[_parse](path), (() => {
        t0$.normalize();
        return t0$;
      })());
      if (dart.test(fromParsed.parts[$isNotEmpty]) && fromParsed.parts[$_get](0) === ".") {
        return dart.toString(pathParsed);
      }
      if (fromParsed.root != pathParsed.root && (fromParsed.root == null || pathParsed.root == null || !dart.test(this.style.pathsEqual(fromParsed.root, pathParsed.root)))) {
        return dart.toString(pathParsed);
      }
      while (dart.test(fromParsed.parts[$isNotEmpty]) && dart.test(pathParsed.parts[$isNotEmpty]) && dart.test(this.style.pathsEqual(fromParsed.parts[$_get](0), pathParsed.parts[$_get](0)))) {
        fromParsed.parts[$removeAt](0);
        fromParsed.separators[$removeAt](1);
        pathParsed.parts[$removeAt](0);
        pathParsed.separators[$removeAt](1);
      }
      if (dart.test(fromParsed.parts[$isNotEmpty]) && fromParsed.parts[$_get](0) === "..") {
        dart.throw(new path_exception.PathException.new("Unable to find a path to \"" + dart.str(path) + "\" from \"" + dart.str(from) + "\"."));
      }
      pathParsed.parts[$insertAll](0, ListOfStringL().filled(fromParsed.parts[$length], ".."));
      pathParsed.separators[$_set](0, "");
      pathParsed.separators[$insertAll](1, ListOfStringL().filled(fromParsed.parts[$length], this.style.separator));
      if (dart.test(pathParsed.parts[$isEmpty])) return ".";
      if (dart.notNull(pathParsed.parts[$length]) > 1 && pathParsed.parts[$last] === ".") {
        pathParsed.parts[$removeLast]();
        t0$0 = pathParsed.separators;
        (() => {
          t0$0[$removeLast]();
          t0$0[$removeLast]();
          t0$0[$add]("");
          return t0$0;
        })();
      }
      pathParsed.root = "";
      pathParsed.removeTrailingSeparators();
      return dart.toString(pathParsed);
    }
    isWithin(parent, child) {
      return dart.equals(this[_isWithinOrEquals](parent, child), context._PathRelation.within);
    }
    equals(path1, path2) {
      return dart.equals(this[_isWithinOrEquals](path1, path2), context._PathRelation.equal);
    }
    [_isWithinOrEquals](parent, child) {
      let parentIsAbsolute = this.isAbsolute(parent);
      let childIsAbsolute = this.isAbsolute(child);
      if (dart.test(parentIsAbsolute) && !dart.test(childIsAbsolute)) {
        child = this.absolute(child);
        if (dart.test(this.style.isRootRelative(parent))) parent = this.absolute(parent);
      } else if (dart.test(childIsAbsolute) && !dart.test(parentIsAbsolute)) {
        parent = this.absolute(parent);
        if (dart.test(this.style.isRootRelative(child))) child = this.absolute(child);
      } else if (dart.test(childIsAbsolute) && dart.test(parentIsAbsolute)) {
        let childIsRootRelative = this.style.isRootRelative(child);
        let parentIsRootRelative = this.style.isRootRelative(parent);
        if (dart.test(childIsRootRelative) && !dart.test(parentIsRootRelative)) {
          child = this.absolute(child);
        } else if (dart.test(parentIsRootRelative) && !dart.test(childIsRootRelative)) {
          parent = this.absolute(parent);
        }
      }
      let result = this[_isWithinOrEqualsFast](parent, child);
      if (!dart.equals(result, context._PathRelation.inconclusive)) return result;
      let relative = null;
      try {
        relative = this.relative(child, {from: parent});
      } catch (e) {
        let _ = dart.getThrown(e);
        if (PathExceptionL().is(_)) {
          return context._PathRelation.different;
        } else
          throw e;
      }
      if (!dart.test(this.isRelative(relative))) return context._PathRelation.different;
      if (relative === ".") return context._PathRelation.equal;
      if (relative === "..") return context._PathRelation.different;
      return relative.length >= 3 && relative[$startsWith]("..") && dart.test(this.style.isSeparator(relative[$codeUnitAt](2))) ? context._PathRelation.different : context._PathRelation.within;
    }
    [_isWithinOrEqualsFast](parent, child) {
      let t1;
      if (parent === ".") parent = "";
      let parentRootLength = this.style.rootLength(parent);
      let childRootLength = this.style.rootLength(child);
      if (parentRootLength != childRootLength) return context._PathRelation.different;
      for (let i = 0; i < dart.notNull(parentRootLength); i = i + 1) {
        let parentCodeUnit = parent[$codeUnitAt](i);
        let childCodeUnit = child[$codeUnitAt](i);
        if (!dart.test(this.style.codeUnitsEqual(parentCodeUnit, childCodeUnit))) {
          return context._PathRelation.different;
        }
      }
      let lastCodeUnit = 47;
      let lastParentSeparator = null;
      let parentIndex = parentRootLength;
      let childIndex = childRootLength;
      while (dart.notNull(parentIndex) < parent.length && dart.notNull(childIndex) < child.length) {
        let parentCodeUnit = parent[$codeUnitAt](parentIndex);
        let childCodeUnit = child[$codeUnitAt](childIndex);
        if (dart.test(this.style.codeUnitsEqual(parentCodeUnit, childCodeUnit))) {
          if (dart.test(this.style.isSeparator(parentCodeUnit))) {
            lastParentSeparator = parentIndex;
          }
          lastCodeUnit = parentCodeUnit;
          parentIndex = dart.notNull(parentIndex) + 1;
          childIndex = dart.notNull(childIndex) + 1;
          continue;
        }
        if (dart.test(this.style.isSeparator(parentCodeUnit)) && dart.test(this.style.isSeparator(lastCodeUnit))) {
          lastParentSeparator = parentIndex;
          parentIndex = dart.notNull(parentIndex) + 1;
          continue;
        } else if (dart.test(this.style.isSeparator(childCodeUnit)) && dart.test(this.style.isSeparator(lastCodeUnit))) {
          childIndex = dart.notNull(childIndex) + 1;
          continue;
        }
        if (parentCodeUnit === 46 && dart.test(this.style.isSeparator(lastCodeUnit))) {
          parentIndex = dart.notNull(parentIndex) + 1;
          if (parentIndex === parent.length) break;
          parentCodeUnit = parent[$codeUnitAt](parentIndex);
          if (dart.test(this.style.isSeparator(parentCodeUnit))) {
            lastParentSeparator = parentIndex;
            parentIndex = dart.notNull(parentIndex) + 1;
            continue;
          }
          if (parentCodeUnit === 46) {
            parentIndex = dart.notNull(parentIndex) + 1;
            if (parentIndex === parent.length || dart.test(this.style.isSeparator(parent[$codeUnitAt](parentIndex)))) {
              return context._PathRelation.inconclusive;
            }
          }
        }
        if (childCodeUnit === 46 && dart.test(this.style.isSeparator(lastCodeUnit))) {
          childIndex = dart.notNull(childIndex) + 1;
          if (childIndex === child.length) break;
          childCodeUnit = child[$codeUnitAt](childIndex);
          if (dart.test(this.style.isSeparator(childCodeUnit))) {
            childIndex = dart.notNull(childIndex) + 1;
            continue;
          }
          if (childCodeUnit === 46) {
            childIndex = dart.notNull(childIndex) + 1;
            if (childIndex === child.length || dart.test(this.style.isSeparator(child[$codeUnitAt](childIndex)))) {
              return context._PathRelation.inconclusive;
            }
          }
        }
        let childDirection = this[_pathDirection](child, childIndex);
        if (!dart.equals(childDirection, context._PathDirection.belowRoot)) {
          return context._PathRelation.inconclusive;
        }
        let parentDirection = this[_pathDirection](parent, parentIndex);
        if (!dart.equals(parentDirection, context._PathDirection.belowRoot)) {
          return context._PathRelation.inconclusive;
        }
        return context._PathRelation.different;
      }
      if (childIndex === child.length) {
        if (parentIndex === parent.length || dart.test(this.style.isSeparator(parent[$codeUnitAt](parentIndex)))) {
          lastParentSeparator = parentIndex;
        } else {
          lastParentSeparator == null ? lastParentSeparator = math.max(intL(), 0, dart.notNull(parentRootLength) - 1) : null;
        }
        let direction = this[_pathDirection](parent, (t1 = lastParentSeparator, t1 == null ? dart.notNull(parentRootLength) - 1 : t1));
        if (dart.equals(direction, context._PathDirection.atRoot)) return context._PathRelation.equal;
        return dart.equals(direction, context._PathDirection.aboveRoot) ? context._PathRelation.inconclusive : context._PathRelation.different;
      }
      let direction = this[_pathDirection](child, childIndex);
      if (dart.equals(direction, context._PathDirection.atRoot)) return context._PathRelation.equal;
      if (dart.equals(direction, context._PathDirection.aboveRoot)) {
        return context._PathRelation.inconclusive;
      }
      return dart.test(this.style.isSeparator(child[$codeUnitAt](childIndex))) || dart.test(this.style.isSeparator(lastCodeUnit)) ? context._PathRelation.within : context._PathRelation.different;
    }
    [_pathDirection](path, index) {
      let depth = 0;
      let reachedRoot = false;
      let i = index;
      while (dart.notNull(i) < path.length) {
        while (dart.notNull(i) < path.length && dart.test(this.style.isSeparator(path[$codeUnitAt](i)))) {
          i = dart.notNull(i) + 1;
        }
        if (i === path.length) break;
        let start = i;
        while (dart.notNull(i) < path.length && !dart.test(this.style.isSeparator(path[$codeUnitAt](i)))) {
          i = dart.notNull(i) + 1;
        }
        if (dart.notNull(i) - dart.notNull(start) === 1 && path[$codeUnitAt](start) === 46) {
        } else if (dart.notNull(i) - dart.notNull(start) === 2 && path[$codeUnitAt](start) === 46 && path[$codeUnitAt](dart.notNull(start) + 1) === 46) {
          depth = depth - 1;
          if (depth < 0) break;
          if (depth === 0) reachedRoot = true;
        } else {
          depth = depth + 1;
        }
        if (i === path.length) break;
        i = dart.notNull(i) + 1;
      }
      if (depth < 0) return context._PathDirection.aboveRoot;
      if (depth === 0) return context._PathDirection.atRoot;
      if (reachedRoot) return context._PathDirection.reachesRoot;
      return context._PathDirection.belowRoot;
    }
    hash(path) {
      path = this.absolute(path);
      let result = this[_hashFast](path);
      if (result != null) return result;
      let parsed = this[_parse](path);
      parsed.normalize();
      return this[_hashFast](dart.toString(parsed));
    }
    [_hashFast](path) {
      let hash = 4603;
      let beginning = true;
      let wasSeparator = true;
      for (let i = 0; i < path.length; i = i + 1) {
        let codeUnit = this.style.canonicalizeCodeUnit(path[$codeUnitAt](i));
        if (dart.test(this.style.isSeparator(codeUnit))) {
          wasSeparator = true;
          continue;
        }
        if (codeUnit === 46 && wasSeparator) {
          if (i + 1 === path.length) break;
          let next = path[$codeUnitAt](i + 1);
          if (dart.test(this.style.isSeparator(next))) continue;
          if (!beginning && next === 46 && (i + 2 === path.length || dart.test(this.style.isSeparator(path[$codeUnitAt](i + 2))))) {
            return null;
          }
        }
        hash = hash & 67108863;
        hash = hash * 33;
        hash = (hash ^ dart.notNull(codeUnit)) >>> 0;
        wasSeparator = false;
        beginning = false;
      }
      return hash;
    }
    withoutExtension(path) {
      let parsed = this[_parse](path);
      for (let i = dart.notNull(parsed.parts[$length]) - 1; i >= 0; i = i - 1) {
        if (parsed.parts[$_get](i)[$isNotEmpty]) {
          parsed.parts[$_set](i, parsed.basenameWithoutExtension);
          break;
        }
      }
      return dart.toString(parsed);
    }
    setExtension(path, extension) {
      return dart.notNull(this.withoutExtension(path)) + dart.notNull(extension);
    }
    fromUri(uri) {
      return this.style.pathFromUri(context._parseUri(uri));
    }
    toUri(path) {
      if (dart.test(this.isRelative(path))) {
        return this.style.relativePathToUri(path);
      } else {
        return this.style.absolutePathToUri(this.join(this.current, path));
      }
    }
    prettyUri(uri) {
      let typedUri = context._parseUri(uri);
      if (typedUri.scheme === "file" && dart.equals(this.style, style$.Style.url)) {
        return dart.toString(typedUri);
      } else if (typedUri.scheme !== "file" && typedUri.scheme !== "" && !dart.equals(this.style, style$.Style.url)) {
        return dart.toString(typedUri);
      }
      let path = this.normalize(this.fromUri(typedUri));
      let rel = this.relative(path);
      return dart.notNull(this.split(rel)[$length]) > dart.notNull(this.split(path)[$length]) ? path : rel;
    }
    [_parse](path) {
      return parsed_path.ParsedPath.parse(path, this.style);
    }
  };
  (context.Context._internal = function() {
    this[style$1] = InternalStyleL().as(style$.Style.platform);
    this[_current$] = null;
    ;
  }).prototype = context.Context.prototype;
  (context.Context.__ = function(style, _current) {
    this[style$1] = style;
    this[_current$] = _current;
    ;
  }).prototype = context.Context.prototype;
  dart.addTypeTests(context.Context);
  dart.addTypeCaches(context.Context);
  dart.setMethodSignature(context.Context, () => ({
    __proto__: dart.getMethods(context.Context.__proto__),
    absolute: dart.fnType(dart.legacy(core.String), [dart.legacy(core.String)], [dart.legacy(core.String), dart.legacy(core.String), dart.legacy(core.String), dart.legacy(core.String), dart.legacy(core.String), dart.legacy(core.String)]),
    basename: dart.fnType(dart.legacy(core.String), [dart.legacy(core.String)]),
    basenameWithoutExtension: dart.fnType(dart.legacy(core.String), [dart.legacy(core.String)]),
    dirname: dart.fnType(dart.legacy(core.String), [dart.legacy(core.String)]),
    extension: dart.fnType(dart.legacy(core.String), [dart.legacy(core.String)], [dart.legacy(core.int)]),
    rootPrefix: dart.fnType(dart.legacy(core.String), [dart.legacy(core.String)]),
    isAbsolute: dart.fnType(dart.legacy(core.bool), [dart.legacy(core.String)]),
    isRelative: dart.fnType(dart.legacy(core.bool), [dart.legacy(core.String)]),
    isRootRelative: dart.fnType(dart.legacy(core.bool), [dart.legacy(core.String)]),
    join: dart.fnType(dart.legacy(core.String), [dart.legacy(core.String)], [dart.legacy(core.String), dart.legacy(core.String), dart.legacy(core.String), dart.legacy(core.String), dart.legacy(core.String), dart.legacy(core.String), dart.legacy(core.String)]),
    joinAll: dart.fnType(dart.legacy(core.String), [dart.legacy(core.Iterable$(dart.legacy(core.String)))]),
    split: dart.fnType(dart.legacy(core.List$(dart.legacy(core.String))), [dart.legacy(core.String)]),
    canonicalize: dart.fnType(dart.legacy(core.String), [dart.legacy(core.String)]),
    normalize: dart.fnType(dart.legacy(core.String), [dart.legacy(core.String)]),
    [_needsNormalization]: dart.fnType(dart.legacy(core.bool), [dart.legacy(core.String)]),
    relative: dart.fnType(dart.legacy(core.String), [dart.legacy(core.String)], {from: dart.legacy(core.String)}, {}),
    isWithin: dart.fnType(dart.legacy(core.bool), [dart.legacy(core.String), dart.legacy(core.String)]),
    equals: dart.fnType(dart.legacy(core.bool), [dart.legacy(core.String), dart.legacy(core.String)]),
    [_isWithinOrEquals]: dart.fnType(dart.legacy(context._PathRelation), [dart.legacy(core.String), dart.legacy(core.String)]),
    [_isWithinOrEqualsFast]: dart.fnType(dart.legacy(context._PathRelation), [dart.legacy(core.String), dart.legacy(core.String)]),
    [_pathDirection]: dart.fnType(dart.legacy(context._PathDirection), [dart.legacy(core.String), dart.legacy(core.int)]),
    hash: dart.fnType(dart.legacy(core.int), [dart.legacy(core.String)]),
    [_hashFast]: dart.fnType(dart.legacy(core.int), [dart.legacy(core.String)]),
    withoutExtension: dart.fnType(dart.legacy(core.String), [dart.legacy(core.String)]),
    setExtension: dart.fnType(dart.legacy(core.String), [dart.legacy(core.String), dart.legacy(core.String)]),
    fromUri: dart.fnType(dart.legacy(core.String), [dart.dynamic]),
    toUri: dart.fnType(dart.legacy(core.Uri), [dart.legacy(core.String)]),
    prettyUri: dart.fnType(dart.legacy(core.String), [dart.dynamic]),
    [_parse]: dart.fnType(dart.legacy(parsed_path.ParsedPath), [dart.legacy(core.String)])
  }));
  dart.setGetterSignature(context.Context, () => ({
    __proto__: dart.getGetters(context.Context.__proto__),
    current: dart.legacy(core.String),
    separator: dart.legacy(core.String)
  }));
  dart.setLibraryUri(context.Context, L5);
  dart.setFieldSignature(context.Context, () => ({
    __proto__: dart.getFields(context.Context.__proto__),
    style: dart.finalFieldType(dart.legacy(internal_style.InternalStyle)),
    [_current$]: dart.finalFieldType(dart.legacy(core.String))
  }));
  var name$0 = dart.privateName(context, "_PathDirection.name");
  var C2;
  var C3;
  var C4;
  var C5;
  context._PathDirection = class _PathDirection extends core.Object {
    get name() {
      return this[name$0];
    }
    set name(value) {
      super.name = value;
    }
    toString() {
      return this.name;
    }
  };
  (context._PathDirection.new = function(name) {
    this[name$0] = name;
    ;
  }).prototype = context._PathDirection.prototype;
  dart.addTypeTests(context._PathDirection);
  dart.addTypeCaches(context._PathDirection);
  dart.setMethodSignature(context._PathDirection, () => ({
    __proto__: dart.getMethods(context._PathDirection.__proto__),
    toString: dart.fnType(dart.legacy(core.String), []),
    [$toString]: dart.fnType(dart.legacy(core.String), [])
  }));
  dart.setLibraryUri(context._PathDirection, L5);
  dart.setFieldSignature(context._PathDirection, () => ({
    __proto__: dart.getFields(context._PathDirection.__proto__),
    name: dart.finalFieldType(dart.legacy(core.String))
  }));
  dart.defineExtensionMethods(context._PathDirection, ['toString']);
  dart.defineLazy(context._PathDirection, {
    /*context._PathDirection.aboveRoot*/get aboveRoot() {
      return C2 || CT.C2;
    },
    /*context._PathDirection.atRoot*/get atRoot() {
      return C3 || CT.C3;
    },
    /*context._PathDirection.reachesRoot*/get reachesRoot() {
      return C4 || CT.C4;
    },
    /*context._PathDirection.belowRoot*/get belowRoot() {
      return C5 || CT.C5;
    }
  }, true);
  var name$1 = dart.privateName(context, "_PathRelation.name");
  var C6;
  var C7;
  var C8;
  var C9;
  context._PathRelation = class _PathRelation extends core.Object {
    get name() {
      return this[name$1];
    }
    set name(value) {
      super.name = value;
    }
    toString() {
      return this.name;
    }
  };
  (context._PathRelation.new = function(name) {
    this[name$1] = name;
    ;
  }).prototype = context._PathRelation.prototype;
  dart.addTypeTests(context._PathRelation);
  dart.addTypeCaches(context._PathRelation);
  dart.setMethodSignature(context._PathRelation, () => ({
    __proto__: dart.getMethods(context._PathRelation.__proto__),
    toString: dart.fnType(dart.legacy(core.String), []),
    [$toString]: dart.fnType(dart.legacy(core.String), [])
  }));
  dart.setLibraryUri(context._PathRelation, L5);
  dart.setFieldSignature(context._PathRelation, () => ({
    __proto__: dart.getFields(context._PathRelation.__proto__),
    name: dart.finalFieldType(dart.legacy(core.String))
  }));
  dart.defineExtensionMethods(context._PathRelation, ['toString']);
  dart.defineLazy(context._PathRelation, {
    /*context._PathRelation.within*/get within() {
      return C6 || CT.C6;
    },
    /*context._PathRelation.equal*/get equal() {
      return C7 || CT.C7;
    },
    /*context._PathRelation.different*/get different() {
      return C8 || CT.C8;
    },
    /*context._PathRelation.inconclusive*/get inconclusive() {
      return C9 || CT.C9;
    }
  }, true);
  context.createInternal = function createInternal() {
    return new context.Context._internal();
  };
  context._parseUri = function _parseUri(uri) {
    if (StringL().is(uri)) return core.Uri.parse(uri);
    if (UriL().is(uri)) return uri;
    dart.throw(new core.ArgumentError.value(uri, "uri", "Value must be a String or a Uri"));
  };
  context._validateArgList = function _validateArgList(method, args) {
    for (let i = 1; i < dart.notNull(args[$length]); i = i + 1) {
      if (args[$_get](i) == null || args[$_get](i - 1) != null) continue;
      let numArgs = null;
      for (let t1 = numArgs = args[$length]; dart.notNull(numArgs) >= 1; numArgs = dart.notNull(numArgs) - 1) {
        if (args[$_get](dart.notNull(numArgs) - 1) != null) break;
      }
      let message = new core.StringBuffer.new();
      message.write(dart.str(method) + "(");
      message.write(args[$take](numArgs)[$map](StringL(), dart.fn(arg => arg == null ? "null" : "\"" + dart.str(arg) + "\"", StringLToStringL()))[$join](", "));
      message.write("): part " + dart.str(i - 1) + " was null, but part " + dart.str(i) + " was not.");
      dart.throw(new core.ArgumentError.new(message.toString()));
    }
  };
  var message$ = dart.privateName(path_exception, "PathException.message");
  path_exception.PathException = class PathException extends core.Object {
    get message() {
      return this[message$];
    }
    set message(value) {
      this[message$] = value;
    }
    toString() {
      return "PathException: " + dart.str(this.message);
    }
  };
  (path_exception.PathException.new = function(message) {
    this[message$] = message;
    ;
  }).prototype = path_exception.PathException.prototype;
  dart.addTypeTests(path_exception.PathException);
  dart.addTypeCaches(path_exception.PathException);
  path_exception.PathException[dart.implements] = () => [core.Exception];
  dart.setMethodSignature(path_exception.PathException, () => ({
    __proto__: dart.getMethods(path_exception.PathException.__proto__),
    toString: dart.fnType(dart.legacy(core.String), []),
    [$toString]: dart.fnType(dart.legacy(core.String), [])
  }));
  dart.setLibraryUri(path_exception.PathException, L6);
  dart.setFieldSignature(path_exception.PathException, () => ({
    __proto__: dart.getFields(path_exception.PathException.__proto__),
    message: dart.fieldType(dart.legacy(core.String))
  }));
  dart.defineExtensionMethods(path_exception.PathException, ['toString']);
  path$.absolute = function absolute(part1, part2 = null, part3 = null, part4 = null, part5 = null, part6 = null, part7 = null) {
    return path$.context.absolute(part1, part2, part3, part4, part5, part6, part7);
  };
  path$.basename = function basename(path) {
    return path$.context.basename(path);
  };
  path$.basenameWithoutExtension = function basenameWithoutExtension(path) {
    return path$.context.basenameWithoutExtension(path);
  };
  path$.dirname = function dirname(path) {
    return path$.context.dirname(path);
  };
  path$.extension = function extension(path, level = 1) {
    return path$.context.extension(path, level);
  };
  path$.rootPrefix = function rootPrefix(path) {
    return path$.context.rootPrefix(path);
  };
  path$.isAbsolute = function isAbsolute(path) {
    return path$.context.isAbsolute(path);
  };
  path$.isRelative = function isRelative(path) {
    return path$.context.isRelative(path);
  };
  path$.isRootRelative = function isRootRelative(path) {
    return path$.context.isRootRelative(path);
  };
  path$.join = function join(part1, part2 = null, part3 = null, part4 = null, part5 = null, part6 = null, part7 = null, part8 = null) {
    return path$.context.join(part1, part2, part3, part4, part5, part6, part7, part8);
  };
  path$.joinAll = function joinAll(parts) {
    return path$.context.joinAll(parts);
  };
  path$.split = function split(path) {
    return path$.context.split(path);
  };
  path$.canonicalize = function canonicalize(path) {
    return path$.context.canonicalize(path);
  };
  path$.normalize = function normalize(path) {
    return path$.context.normalize(path);
  };
  path$.relative = function relative(path, opts) {
    let from = opts && 'from' in opts ? opts.from : null;
    return path$.context.relative(path, {from: from});
  };
  path$.isWithin = function isWithin(parent, child) {
    return path$.context.isWithin(parent, child);
  };
  path$.equals = function equals(path1, path2) {
    return path$.context.equals(path1, path2);
  };
  path$.hash = function hash(path) {
    return path$.context.hash(path);
  };
  path$.withoutExtension = function withoutExtension(path) {
    return path$.context.withoutExtension(path);
  };
  path$.setExtension = function setExtension(path, extension) {
    return path$.context.setExtension(path, extension);
  };
  path$.fromUri = function fromUri(uri) {
    return path$.context.fromUri(uri);
  };
  path$.toUri = function toUri(path) {
    return path$.context.toUri(path);
  };
  path$.prettyUri = function prettyUri(uri) {
    return path$.context.prettyUri(uri);
  };
  dart.copyProperties(path$, {
    get style() {
      return path$.context.style;
    },
    get current() {
      let uri = null;
      try {
        uri = core.Uri.base;
      } catch (e) {
        let ex = dart.getThrown(e);
        if (ExceptionL().is(ex)) {
          if (path$._current != null) return path$._current;
          dart.rethrow(e);
        } else
          throw e;
      }
      if (dart.equals(uri, path$._currentUriBase)) return path$._current;
      path$._currentUriBase = uri;
      if (dart.equals(style$.Style.platform, style$.Style.url)) {
        path$._current = dart.toString(uri.resolve("."));
      } else {
        let path = uri.toFilePath();
        let lastIndex = path.length - 1;
        if (!(path[$_get](lastIndex) === "/" || path[$_get](lastIndex) === "\\")) dart.assertFailed(null, L7, 91, 12, "path[lastIndex] == '/' || path[lastIndex] == '\\\\'");
        path$._current = lastIndex === 0 ? path : path[$substring](0, lastIndex);
      }
      return path$._current;
    },
    get separator() {
      return path$.context.separator;
    }
  });
  dart.defineLazy(path$, {
    /*path$.posix*/get posix() {
      return context.Context.new({style: style$.Style.posix});
    },
    /*path$.windows*/get windows() {
      return context.Context.new({style: style$.Style.windows});
    },
    /*path$.url*/get url() {
      return context.Context.new({style: style$.Style.url});
    },
    /*path$.context*/get context() {
      return context.createInternal();
    },
    /*path$._currentUriBase*/get _currentUriBase() {
      return null;
    },
    set _currentUriBase(_) {},
    /*path$._current*/get _current() {
      return null;
    },
    set _current(_) {}
  }, true);
  var _inner = dart.privateName(path_set, "_inner");
  path_set.PathSet = class PathSet extends collection.IterableBase$(dart.legacy(core.String)) {
    static _create(context) {
      context == null ? context = path$.context : null;
      return LinkedHashSetOfStringL().new({equals: dart.fn((path1, path2) => {
          if (path1 == null) return path2 == null;
          if (path2 == null) return false;
          return context.equals(path1, path2);
        }, StringLAndStringLToboolL()), hashCode: dart.fn(path => path == null ? 0 : context.hash(path), StringLTointL()), isValidKey: dart.fn(path => StringL().is(path) || path == null, dynamicToboolL())});
    }
    get iterator() {
      return this[_inner].iterator;
    }
    get length() {
      return this[_inner][$length];
    }
    add(value) {
      StringL().as(value);
      return this[_inner].add(value);
    }
    addAll(elements) {
      IterableLOfStringL().as(elements);
      return this[_inner].addAll(elements);
    }
    cast(T) {
      return this[_inner].cast(dart.legacy(T));
    }
    clear() {
      return this[_inner].clear();
    }
    contains(element) {
      return this[_inner].contains(element);
    }
    containsAll(other) {
      return this[_inner].containsAll(other);
    }
    difference(other) {
      return this[_inner].difference(other);
    }
    intersection(other) {
      return this[_inner].intersection(other);
    }
    lookup(element) {
      return this[_inner].lookup(element);
    }
    remove(value) {
      return this[_inner].remove(value);
    }
    removeAll(elements) {
      return this[_inner].removeAll(elements);
    }
    removeWhere(test) {
      return this[_inner].removeWhere(test);
    }
    retainAll(elements) {
      return this[_inner].retainAll(elements);
    }
    retainWhere(test) {
      return this[_inner].retainWhere(test);
    }
    union(other) {
      SetLOfStringL().as(other);
      return this[_inner].union(other);
    }
    toSet() {
      return this[_inner].toSet();
    }
  };
  (path_set.PathSet.new = function(opts) {
    let context = opts && 'context' in opts ? opts.context : null;
    this[_inner] = path_set.PathSet._create(context);
    path_set.PathSet.__proto__.new.call(this);
    ;
  }).prototype = path_set.PathSet.prototype;
  (path_set.PathSet.of = function(other, opts) {
    let t4;
    let context = opts && 'context' in opts ? opts.context : null;
    this[_inner] = (t4 = path_set.PathSet._create(context), (() => {
      t4.addAll(other);
      return t4;
    })());
    path_set.PathSet.__proto__.new.call(this);
    ;
  }).prototype = path_set.PathSet.prototype;
  dart.addTypeTests(path_set.PathSet);
  dart.addTypeCaches(path_set.PathSet);
  path_set.PathSet[dart.implements] = () => [core.Set$(dart.legacy(core.String))];
  dart.setMethodSignature(path_set.PathSet, () => ({
    __proto__: dart.getMethods(path_set.PathSet.__proto__),
    add: dart.fnType(dart.legacy(core.bool), [dart.legacy(core.Object)]),
    addAll: dart.fnType(dart.void, [dart.legacy(core.Object)]),
    cast: dart.gFnType(T => [dart.legacy(core.Set$(dart.legacy(T))), []]),
    [$cast]: dart.gFnType(T => [dart.legacy(core.Set$(dart.legacy(T))), []]),
    clear: dart.fnType(dart.void, []),
    contains: dart.fnType(dart.legacy(core.bool), [dart.legacy(core.Object)]),
    [$contains]: dart.fnType(dart.legacy(core.bool), [dart.legacy(core.Object)]),
    containsAll: dart.fnType(dart.legacy(core.bool), [dart.legacy(core.Iterable$(dart.legacy(core.Object)))]),
    difference: dart.fnType(dart.legacy(core.Set$(dart.legacy(core.String))), [dart.legacy(core.Set$(dart.legacy(core.Object)))]),
    intersection: dart.fnType(dart.legacy(core.Set$(dart.legacy(core.String))), [dart.legacy(core.Set$(dart.legacy(core.Object)))]),
    lookup: dart.fnType(dart.legacy(core.String), [dart.legacy(core.Object)]),
    remove: dart.fnType(dart.legacy(core.bool), [dart.legacy(core.Object)]),
    removeAll: dart.fnType(dart.void, [dart.legacy(core.Iterable$(dart.legacy(core.Object)))]),
    removeWhere: dart.fnType(dart.void, [dart.legacy(dart.fnType(dart.legacy(core.bool), [dart.legacy(core.String)]))]),
    retainAll: dart.fnType(dart.void, [dart.legacy(core.Iterable$(dart.legacy(core.Object)))]),
    retainWhere: dart.fnType(dart.void, [dart.legacy(dart.fnType(dart.legacy(core.bool), [dart.legacy(core.String)]))]),
    union: dart.fnType(dart.legacy(core.Set$(dart.legacy(core.String))), [dart.legacy(core.Object)]),
    toSet: dart.fnType(dart.legacy(core.Set$(dart.legacy(core.String))), []),
    [$toSet]: dart.fnType(dart.legacy(core.Set$(dart.legacy(core.String))), [])
  }));
  dart.setGetterSignature(path_set.PathSet, () => ({
    __proto__: dart.getGetters(path_set.PathSet.__proto__),
    iterator: dart.legacy(core.Iterator$(dart.legacy(core.String))),
    [$iterator]: dart.legacy(core.Iterator$(dart.legacy(core.String))),
    length: dart.legacy(core.int),
    [$length]: dart.legacy(core.int)
  }));
  dart.setLibraryUri(path_set.PathSet, L8);
  dart.setFieldSignature(path_set.PathSet, () => ({
    __proto__: dart.getFields(path_set.PathSet.__proto__),
    [_inner]: dart.finalFieldType(dart.legacy(core.Set$(dart.legacy(core.String))))
  }));
  dart.defineExtensionMethods(path_set.PathSet, ['cast', 'contains', 'toSet']);
  dart.defineExtensionAccessors(path_set.PathSet, ['iterator', 'length']);
  const _is_PathMap_default = Symbol('_is_PathMap_default');
  path_map.PathMap$ = dart.generic(V => {
    var VL = () => (VL = dart.constFn(dart.legacy(V)))();
    class PathMap extends collection.MapView$(dart.legacy(core.String), dart.legacy(V)) {
      static _create(V, context) {
        context == null ? context = path$.context : null;
        return collection.LinkedHashMap$(StringL(), dart.legacy(V)).new({equals: dart.fn((path1, path2) => {
            if (path1 == null) return path2 == null;
            if (path2 == null) return false;
            return context.equals(path1, path2);
          }, StringLAndStringLToboolL()), hashCode: dart.fn(path => path == null ? 0 : context.hash(path), StringLTointL()), isValidKey: dart.fn(path => StringL().is(path) || path == null, dynamicToboolL())});
      }
    }
    (PathMap.new = function(opts) {
      let context = opts && 'context' in opts ? opts.context : null;
      PathMap.__proto__.new.call(this, path_map.PathMap._create(VL(), context));
      ;
    }).prototype = PathMap.prototype;
    (PathMap.of = function(other, opts) {
      let t4;
      let context = opts && 'context' in opts ? opts.context : null;
      PathMap.__proto__.new.call(this, (t4 = path_map.PathMap._create(VL(), context), (() => {
        t4[$addAll](other);
        return t4;
      })()));
      ;
    }).prototype = PathMap.prototype;
    dart.addTypeTests(PathMap);
    PathMap.prototype[_is_PathMap_default] = true;
    dart.addTypeCaches(PathMap);
    dart.setLibraryUri(PathMap, L9);
    return PathMap;
  });
  path_map.PathMap = path_map.PathMap$();
  dart.addTypeTests(path_map.PathMap, _is_PathMap_default);
  var name$2 = dart.privateName(url, "UrlStyle.name");
  var separator$0 = dart.privateName(url, "UrlStyle.separator");
  var separators$1 = dart.privateName(url, "UrlStyle.separators");
  var separatorPattern$0 = dart.privateName(url, "UrlStyle.separatorPattern");
  var needsSeparatorPattern$0 = dart.privateName(url, "UrlStyle.needsSeparatorPattern");
  var rootPattern$0 = dart.privateName(url, "UrlStyle.rootPattern");
  var relativeRootPattern$0 = dart.privateName(url, "UrlStyle.relativeRootPattern");
  url.UrlStyle = class UrlStyle extends internal_style.InternalStyle {
    get name() {
      return this[name$2];
    }
    set name(value) {
      super.name = value;
    }
    get separator() {
      return this[separator$0];
    }
    set separator(value) {
      super.separator = value;
    }
    get separators() {
      return this[separators$1];
    }
    set separators(value) {
      super.separators = value;
    }
    get separatorPattern() {
      return this[separatorPattern$0];
    }
    set separatorPattern(value) {
      super.separatorPattern = value;
    }
    get needsSeparatorPattern() {
      return this[needsSeparatorPattern$0];
    }
    set needsSeparatorPattern(value) {
      super.needsSeparatorPattern = value;
    }
    get rootPattern() {
      return this[rootPattern$0];
    }
    set rootPattern(value) {
      super.rootPattern = value;
    }
    get relativeRootPattern() {
      return this[relativeRootPattern$0];
    }
    set relativeRootPattern(value) {
      super.relativeRootPattern = value;
    }
    containsSeparator(path) {
      return path[$contains]("/");
    }
    isSeparator(codeUnit) {
      return codeUnit === 47;
    }
    needsSeparator(path) {
      if (path[$isEmpty]) return false;
      if (!dart.test(this.isSeparator(path[$codeUnitAt](path.length - 1)))) return true;
      return path[$endsWith]("://") && this.rootLength(path) === path.length;
    }
    rootLength(path, opts) {
      let withDrive = opts && 'withDrive' in opts ? opts.withDrive : false;
      if (path[$isEmpty]) return 0;
      if (dart.test(this.isSeparator(path[$codeUnitAt](0)))) return 1;
      for (let i = 0; i < path.length; i = i + 1) {
        let codeUnit = path[$codeUnitAt](i);
        if (dart.test(this.isSeparator(codeUnit))) return 0;
        if (codeUnit === 58) {
          if (i === 0) return 0;
          if (path[$startsWith]("//", i + 1)) i = i + 3;
          let index = path[$indexOf]("/", i);
          if (index <= 0) return path.length;
          if (!dart.test(withDrive) || path.length < index + 3) return index;
          if (!path[$startsWith]("file://")) return index;
          if (!dart.test(utils.isDriveLetter(path, index + 1))) return index;
          return path.length === index + 3 ? index + 3 : index + 4;
        }
      }
      return 0;
    }
    isRootRelative(path) {
      return path[$isNotEmpty] && dart.test(this.isSeparator(path[$codeUnitAt](0)));
    }
    getRelativeRoot(path) {
      return dart.test(this.isRootRelative(path)) ? "/" : null;
    }
    pathFromUri(uri) {
      return dart.toString(uri);
    }
    relativePathToUri(path) {
      return core.Uri.parse(path);
    }
    absolutePathToUri(path) {
      return core.Uri.parse(path);
    }
  };
  (url.UrlStyle.new = function() {
    this[name$2] = "url";
    this[separator$0] = "/";
    this[separators$1] = C0 || CT.C0;
    this[separatorPattern$0] = core.RegExp.new("/");
    this[needsSeparatorPattern$0] = core.RegExp.new("(^[a-zA-Z][-+.a-zA-Z\\d]*://|[^/])$");
    this[rootPattern$0] = core.RegExp.new("[a-zA-Z][-+.a-zA-Z\\d]*://[^/]*");
    this[relativeRootPattern$0] = core.RegExp.new("^/");
    ;
  }).prototype = url.UrlStyle.prototype;
  dart.addTypeTests(url.UrlStyle);
  dart.addTypeCaches(url.UrlStyle);
  dart.setMethodSignature(url.UrlStyle, () => ({
    __proto__: dart.getMethods(url.UrlStyle.__proto__),
    containsSeparator: dart.fnType(dart.legacy(core.bool), [dart.legacy(core.String)]),
    isSeparator: dart.fnType(dart.legacy(core.bool), [dart.legacy(core.int)]),
    needsSeparator: dart.fnType(dart.legacy(core.bool), [dart.legacy(core.String)]),
    rootLength: dart.fnType(dart.legacy(core.int), [dart.legacy(core.String)], {withDrive: dart.legacy(core.bool)}, {}),
    isRootRelative: dart.fnType(dart.legacy(core.bool), [dart.legacy(core.String)]),
    getRelativeRoot: dart.fnType(dart.legacy(core.String), [dart.legacy(core.String)]),
    pathFromUri: dart.fnType(dart.legacy(core.String), [dart.legacy(core.Uri)]),
    absolutePathToUri: dart.fnType(dart.legacy(core.Uri), [dart.legacy(core.String)])
  }));
  dart.setLibraryUri(url.UrlStyle, L10);
  dart.setFieldSignature(url.UrlStyle, () => ({
    __proto__: dart.getFields(url.UrlStyle.__proto__),
    name: dart.finalFieldType(dart.legacy(core.String)),
    separator: dart.finalFieldType(dart.legacy(core.String)),
    separators: dart.finalFieldType(dart.legacy(core.List$(dart.legacy(core.String)))),
    separatorPattern: dart.finalFieldType(dart.legacy(core.Pattern)),
    needsSeparatorPattern: dart.finalFieldType(dart.legacy(core.Pattern)),
    rootPattern: dart.finalFieldType(dart.legacy(core.Pattern)),
    relativeRootPattern: dart.finalFieldType(dart.legacy(core.Pattern))
  }));
  dart.trackLibraries("packages/path/path", {
    "package:path/src/style/posix.dart": posix,
    "package:path/src/parsed_path.dart": parsed_path,
    "package:path/src/style.dart": style$,
    "package:path/src/style/windows.dart": windows,
    "package:path/src/utils.dart": utils,
    "package:path/src/characters.dart": characters,
    "package:path/src/internal_style.dart": internal_style,
    "package:path/src/context.dart": context,
    "package:path/src/path_exception.dart": path_exception,
    "package:path/path.dart": path$,
    "package:path/src/path_set.dart": path_set,
    "package:path/src/path_map.dart": path_map,
    "package:path/src/style/url.dart": url
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["src/style.dart","src/internal_style.dart","src/style/posix.dart","src/parsed_path.dart","src/style/windows.dart","src/utils.dart","src/characters.dart","src/context.dart","src/path_exception.dart","path.dart","src/path_set.dart","src/path_map.dart","src/style/url.dart"],"names":[],"mappings":"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","file":"path.unsound.ddc.js"}');
  // Exports:
  return {
    src__style__posix: posix,
    src__parsed_path: parsed_path,
    src__style: style$,
    src__style__windows: windows,
    src__utils: utils,
    src__characters: characters,
    src__internal_style: internal_style,
    src__context: context,
    src__path_exception: path_exception,
    path: path$,
    src__path_set: path_set,
    src__path_map: path_map,
    src__style__url: url
  };
}));

//# sourceMappingURL=path.unsound.ddc.js.map

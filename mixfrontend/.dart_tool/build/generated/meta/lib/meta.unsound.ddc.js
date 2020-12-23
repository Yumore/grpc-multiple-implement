define(['dart_sdk'], (function load__packages__meta__meta(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  var meta = Object.create(dart.library);
  const CT = Object.create(null);
  var L0 = "package:meta/meta.dart";
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.const({
        __proto__: meta._AlwaysThrows.prototype
      });
    },
    get C1() {
      return C1 = dart.const({
        __proto__: meta._Checked.prototype
      });
    },
    get C2() {
      return C2 = dart.const({
        __proto__: meta._DoNotStore.prototype
      });
    },
    get C3() {
      return C3 = dart.const({
        __proto__: meta._Experimental.prototype
      });
    },
    get C4() {
      return C4 = dart.const({
        __proto__: meta._Factory.prototype
      });
    },
    get C5() {
      return C5 = dart.const({
        __proto__: meta.Immutable.prototype,
        [reason$]: ""
      });
    },
    get C6() {
      return C6 = dart.const({
        __proto__: meta._Internal.prototype
      });
    },
    get C7() {
      return C7 = dart.const({
        __proto__: meta._IsTest.prototype
      });
    },
    get C8() {
      return C8 = dart.const({
        __proto__: meta._IsTestGroup.prototype
      });
    },
    get C9() {
      return C9 = dart.const({
        __proto__: meta._Literal.prototype
      });
    },
    get C10() {
      return C10 = dart.const({
        __proto__: meta._MustCallSuper.prototype
      });
    },
    get C11() {
      return C11 = dart.const({
        __proto__: meta._NonVirtual.prototype
      });
    },
    get C12() {
      return C12 = dart.const({
        __proto__: meta._OptionalTypeArgs.prototype
      });
    },
    get C13() {
      return C13 = dart.const({
        __proto__: meta._Protected.prototype
      });
    },
    get C14() {
      return C14 = dart.const({
        __proto__: meta.Required.prototype,
        [reason$0]: ""
      });
    },
    get C15() {
      return C15 = dart.const({
        __proto__: meta._Sealed.prototype
      });
    },
    get C16() {
      return C16 = dart.const({
        __proto__: meta._Virtual.prototype
      });
    },
    get C17() {
      return C17 = dart.const({
        __proto__: meta._VisibleForOverriding.prototype
      });
    },
    get C18() {
      return C18 = dart.const({
        __proto__: meta._VisibleForTesting.prototype
      });
    }
  }, false);
  var reason$ = dart.privateName(meta, "Immutable.reason");
  meta.Immutable = class Immutable extends core.Object {
    get reason() {
      return this[reason$];
    }
    set reason(value) {
      super.reason = value;
    }
  };
  (meta.Immutable.new = function(reason = "") {
    this[reason$] = reason;
    ;
  }).prototype = meta.Immutable.prototype;
  dart.addTypeTests(meta.Immutable);
  dart.addTypeCaches(meta.Immutable);
  dart.setLibraryUri(meta.Immutable, L0);
  dart.setFieldSignature(meta.Immutable, () => ({
    __proto__: dart.getFields(meta.Immutable.__proto__),
    reason: dart.finalFieldType(dart.legacy(core.String))
  }));
  var reason$0 = dart.privateName(meta, "Required.reason");
  meta.Required = class Required extends core.Object {
    get reason() {
      return this[reason$0];
    }
    set reason(value) {
      super.reason = value;
    }
  };
  (meta.Required.new = function(reason = "") {
    this[reason$0] = reason;
    ;
  }).prototype = meta.Required.prototype;
  dart.addTypeTests(meta.Required);
  dart.addTypeCaches(meta.Required);
  dart.setLibraryUri(meta.Required, L0);
  dart.setFieldSignature(meta.Required, () => ({
    __proto__: dart.getFields(meta.Required.__proto__),
    reason: dart.finalFieldType(dart.legacy(core.String))
  }));
  meta._AlwaysThrows = class _AlwaysThrows extends core.Object {};
  (meta._AlwaysThrows.new = function() {
    ;
  }).prototype = meta._AlwaysThrows.prototype;
  dart.addTypeTests(meta._AlwaysThrows);
  dart.addTypeCaches(meta._AlwaysThrows);
  dart.setLibraryUri(meta._AlwaysThrows, L0);
  meta._Checked = class _Checked extends core.Object {};
  (meta._Checked.new = function() {
    ;
  }).prototype = meta._Checked.prototype;
  dart.addTypeTests(meta._Checked);
  dart.addTypeCaches(meta._Checked);
  dart.setLibraryUri(meta._Checked, L0);
  meta._DoNotStore = class _DoNotStore extends core.Object {};
  (meta._DoNotStore.new = function() {
    ;
  }).prototype = meta._DoNotStore.prototype;
  dart.addTypeTests(meta._DoNotStore);
  dart.addTypeCaches(meta._DoNotStore);
  dart.setLibraryUri(meta._DoNotStore, L0);
  meta._Experimental = class _Experimental extends core.Object {};
  (meta._Experimental.new = function() {
    ;
  }).prototype = meta._Experimental.prototype;
  dart.addTypeTests(meta._Experimental);
  dart.addTypeCaches(meta._Experimental);
  dart.setLibraryUri(meta._Experimental, L0);
  meta._Factory = class _Factory extends core.Object {};
  (meta._Factory.new = function() {
    ;
  }).prototype = meta._Factory.prototype;
  dart.addTypeTests(meta._Factory);
  dart.addTypeCaches(meta._Factory);
  dart.setLibraryUri(meta._Factory, L0);
  meta._Internal = class _Internal extends core.Object {};
  (meta._Internal.new = function() {
    ;
  }).prototype = meta._Internal.prototype;
  dart.addTypeTests(meta._Internal);
  dart.addTypeCaches(meta._Internal);
  dart.setLibraryUri(meta._Internal, L0);
  meta._IsTest = class _IsTest extends core.Object {};
  (meta._IsTest.new = function() {
    ;
  }).prototype = meta._IsTest.prototype;
  dart.addTypeTests(meta._IsTest);
  dart.addTypeCaches(meta._IsTest);
  dart.setLibraryUri(meta._IsTest, L0);
  meta._IsTestGroup = class _IsTestGroup extends core.Object {};
  (meta._IsTestGroup.new = function() {
    ;
  }).prototype = meta._IsTestGroup.prototype;
  dart.addTypeTests(meta._IsTestGroup);
  dart.addTypeCaches(meta._IsTestGroup);
  dart.setLibraryUri(meta._IsTestGroup, L0);
  meta._Literal = class _Literal extends core.Object {};
  (meta._Literal.new = function() {
    ;
  }).prototype = meta._Literal.prototype;
  dart.addTypeTests(meta._Literal);
  dart.addTypeCaches(meta._Literal);
  dart.setLibraryUri(meta._Literal, L0);
  meta._MustCallSuper = class _MustCallSuper extends core.Object {};
  (meta._MustCallSuper.new = function() {
    ;
  }).prototype = meta._MustCallSuper.prototype;
  dart.addTypeTests(meta._MustCallSuper);
  dart.addTypeCaches(meta._MustCallSuper);
  dart.setLibraryUri(meta._MustCallSuper, L0);
  meta._NonVirtual = class _NonVirtual extends core.Object {};
  (meta._NonVirtual.new = function() {
    ;
  }).prototype = meta._NonVirtual.prototype;
  dart.addTypeTests(meta._NonVirtual);
  dart.addTypeCaches(meta._NonVirtual);
  dart.setLibraryUri(meta._NonVirtual, L0);
  meta._OptionalTypeArgs = class _OptionalTypeArgs extends core.Object {};
  (meta._OptionalTypeArgs.new = function() {
    ;
  }).prototype = meta._OptionalTypeArgs.prototype;
  dart.addTypeTests(meta._OptionalTypeArgs);
  dart.addTypeCaches(meta._OptionalTypeArgs);
  dart.setLibraryUri(meta._OptionalTypeArgs, L0);
  meta._Protected = class _Protected extends core.Object {};
  (meta._Protected.new = function() {
    ;
  }).prototype = meta._Protected.prototype;
  dart.addTypeTests(meta._Protected);
  dart.addTypeCaches(meta._Protected);
  dart.setLibraryUri(meta._Protected, L0);
  meta._Sealed = class _Sealed extends core.Object {};
  (meta._Sealed.new = function() {
    ;
  }).prototype = meta._Sealed.prototype;
  dart.addTypeTests(meta._Sealed);
  dart.addTypeCaches(meta._Sealed);
  dart.setLibraryUri(meta._Sealed, L0);
  meta._Virtual = class _Virtual extends core.Object {};
  (meta._Virtual.new = function() {
    ;
  }).prototype = meta._Virtual.prototype;
  dart.addTypeTests(meta._Virtual);
  dart.addTypeCaches(meta._Virtual);
  dart.setLibraryUri(meta._Virtual, L0);
  meta._VisibleForOverriding = class _VisibleForOverriding extends core.Object {};
  (meta._VisibleForOverriding.new = function() {
    ;
  }).prototype = meta._VisibleForOverriding.prototype;
  dart.addTypeTests(meta._VisibleForOverriding);
  dart.addTypeCaches(meta._VisibleForOverriding);
  dart.setLibraryUri(meta._VisibleForOverriding, L0);
  meta._VisibleForTesting = class _VisibleForTesting extends core.Object {};
  (meta._VisibleForTesting.new = function() {
    ;
  }).prototype = meta._VisibleForTesting.prototype;
  dart.addTypeTests(meta._VisibleForTesting);
  dart.addTypeCaches(meta._VisibleForTesting);
  dart.setLibraryUri(meta._VisibleForTesting, L0);
  var C0;
  var C1;
  var C2;
  var C3;
  var C4;
  var C5;
  var C6;
  var C7;
  var C8;
  var C9;
  var C10;
  var C11;
  var C12;
  var C13;
  var C14;
  var C15;
  var C16;
  var C17;
  var C18;
  dart.defineLazy(meta, {
    /*meta.alwaysThrows*/get alwaysThrows() {
      return C0 || CT.C0;
    },
    /*meta.checked*/get checked() {
      return C1 || CT.C1;
    },
    /*meta.doNotStore*/get doNotStore() {
      return C2 || CT.C2;
    },
    /*meta.experimental*/get experimental() {
      return C3 || CT.C3;
    },
    /*meta.factory*/get factory() {
      return C4 || CT.C4;
    },
    /*meta.immutable*/get immutable() {
      return C5 || CT.C5;
    },
    /*meta.internal*/get internal() {
      return C6 || CT.C6;
    },
    /*meta.isTest*/get isTest() {
      return C7 || CT.C7;
    },
    /*meta.isTestGroup*/get isTestGroup() {
      return C8 || CT.C8;
    },
    /*meta.literal*/get literal() {
      return C9 || CT.C9;
    },
    /*meta.mustCallSuper*/get mustCallSuper() {
      return C10 || CT.C10;
    },
    /*meta.nonVirtual*/get nonVirtual() {
      return C11 || CT.C11;
    },
    /*meta.optionalTypeArgs*/get optionalTypeArgs() {
      return C12 || CT.C12;
    },
    /*meta.protected*/get protected() {
      return C13 || CT.C13;
    },
    /*meta.required*/get required() {
      return C14 || CT.C14;
    },
    /*meta.sealed*/get sealed() {
      return C15 || CT.C15;
    },
    /*meta.virtual*/get virtual() {
      return C16 || CT.C16;
    },
    /*meta.visibleForOverriding*/get visibleForOverriding() {
      return C17 || CT.C17;
    },
    /*meta.visibleForTesting*/get visibleForTesting() {
      return C18 || CT.C18;
    }
  }, true);
  dart.trackLibraries("packages/meta/meta", {
    "package:meta/meta.dart": meta
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["meta.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IAgSe;;;;;;;;IAGS;;EAAa;;;;;;;;;;IAgBtB;;;;;;;;IAGQ;;EAAa;;;;;;;;;;;EAIb;;;;;;;EAIL;;;;;;;EAIG;;;;;;;EAIE;;;;;;;EAIL;;;;;;;EAIC;;;;;;;EAIF;;;;;;;EAIK;;;;;;;EAIJ;;;;;;;EAIM;;;;;;;EAIH;;;;;;;EAIM;;;;;;;EAIP;;;;;;;EAIH;;;;;;;EAKC;;;;;;;EAIa;;;;;;;EAIH;;;;;;;;;;;;;;;;;;;;;;;;MA1UR,iBAAY;;;MAUjB,YAAO;;;MAmBJ,eAAU;;;MAsBR,iBAAY;;;MAYjB,YAAO;;;MAYN,cAAS;;;MAcT,aAAQ;;;MAQV,WAAM;;;MAQD,gBAAW;;;MAaf,YAAO;;;MAeD,kBAAa;;;MAehB,eAAU;;;MAMJ,qBAAgB;;;MAmBvB,cAAS;;;MAeX,aAAQ;;;MAaT,WAAM;;;MAQL,YAAO;;;MAWM,yBAAoB;;;MAYvB,sBAAiB","file":"meta.unsound.ddc.js"}');
  // Exports:
  return {
    meta: meta
  };
}));

//# sourceMappingURL=meta.unsound.ddc.js.map

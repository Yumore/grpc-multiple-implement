define(['dart_sdk', 'packages/protobuf/protobuf', 'packages/protobuf/src/protobuf/mixins/well_known', 'packages/fixnum/fixnum', 'packages/async/async'], (function load__packages__grpc__src__client__call(dart_sdk, packages__protobuf__protobuf, packages__protobuf__src__protobuf__mixins__well_known, packages__fixnum__fixnum, packages__async__async) {
  'use strict';
  const core = dart_sdk.core;
  const _js_helper = dart_sdk._js_helper;
  const collection = dart_sdk.collection;
  const async = dart_sdk.async;
  const _interceptors = dart_sdk._interceptors;
  const developer = dart_sdk.developer;
  const convert = dart_sdk.convert;
  const _native_typed_data = dart_sdk._native_typed_data;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const protobuf = packages__protobuf__protobuf.protobuf;
  const type_registry = packages__protobuf__protobuf.src__protobuf__type_registry;
  const json_parsing_context = packages__protobuf__protobuf.src__protobuf__json_parsing_context;
  const well_known = packages__protobuf__src__protobuf__mixins__well_known.src__protobuf__mixins__well_known;
  const fixnum = packages__fixnum__fixnum.fixnum;
  const future = packages__async__async.src__delegate__future;
  const stream = packages__async__async.src__delegate__stream;
  var status$46pb = Object.create(dart.library);
  var any$46pb = Object.create(dart.library);
  var error_details$46pb = Object.create(dart.library);
  var duration$46pb = Object.create(dart.library);
  var call$ = Object.create(dart.library);
  var transport = Object.create(dart.library);
  var message = Object.create(dart.library);
  var method = Object.create(dart.library);
  var connection = Object.create(dart.library);
  var common = Object.create(dart.library);
  var status$ = Object.create(dart.library);
  var code$46pbenum = Object.create(dart.library);
  var profiler = Object.create(dart.library);
  var channel = Object.create(dart.library);
  var $fold = dartx.fold;
  var $addAll = dartx.addAll;
  var $trim = dartx.trim;
  var $toLowerCase = dartx.toLowerCase;
  var $startsWith = dartx.startsWith;
  var $contains = dartx.contains;
  var $_set = dartx._set;
  var $forEach = dartx.forEach;
  var $lastIndexOf = dartx.lastIndexOf;
  var $substring = dartx.substring;
  var $isEmpty = dartx.isEmpty;
  var $toString = dartx.toString;
  var $_get = dartx._get;
  var $add = dartx.add;
  var $padRight = dartx.padRight;
  var $map = dartx.map;
  var $toList = dartx.toList;
  var $length = dartx.length;
  var $buffer = dartx.buffer;
  var $asByteData = dartx.asByteData;
  var $setUint8 = dartx.setUint8;
  var $setUint32 = dartx.setUint32;
  var $setRange = dartx.setRange;
  var $hashCode = dartx.hashCode;
  var $_equals = dartx._equals;
  var StatusL = () => (StatusL = dart.constFn(dart.legacy(status$46pb.Status)))();
  var GeneratedMessageL = () => (GeneratedMessageL = dart.constFn(dart.legacy(protobuf.GeneratedMessage)))();
  var GeneratedMessageLTovoid = () => (GeneratedMessageLTovoid = dart.constFn(dart.fnType(dart.void, [GeneratedMessageL()])))();
  var PbListOfStatusL = () => (PbListOfStatusL = dart.constFn(protobuf.PbList$(StatusL())))();
  var VoidToStatusL = () => (VoidToStatusL = dart.constFn(dart.fnType(StatusL(), [])))();
  var AnyL = () => (AnyL = dart.constFn(dart.legacy(any$46pb.Any)))();
  var intL = () => (intL = dart.constFn(dart.legacy(core.int)))();
  var VoidToAnyL = () => (VoidToAnyL = dart.constFn(dart.fnType(AnyL(), [])))();
  var PbListOfAnyL = () => (PbListOfAnyL = dart.constFn(protobuf.PbList$(AnyL())))();
  var ListOfintL = () => (ListOfintL = dart.constFn(core.List$(intL())))();
  var ListLOfintL = () => (ListLOfintL = dart.constFn(dart.legacy(ListOfintL())))();
  var ObjectL = () => (ObjectL = dart.constFn(dart.legacy(core.Object)))();
  var TypeRegistryL = () => (TypeRegistryL = dart.constFn(dart.legacy(type_registry.TypeRegistry)))();
  var GeneratedMessageLAndTypeRegistryLToObjectL = () => (GeneratedMessageLAndTypeRegistryLToObjectL = dart.constFn(dart.fnType(ObjectL(), [GeneratedMessageL(), TypeRegistryL()])))();
  var JsonParsingContextL = () => (JsonParsingContextL = dart.constFn(dart.legacy(json_parsing_context.JsonParsingContext)))();
  var GeneratedMessageLAndObjectLAndTypeRegistryL__Tovoid = () => (GeneratedMessageLAndObjectLAndTypeRegistryL__Tovoid = dart.constFn(dart.fnType(dart.void, [GeneratedMessageL(), ObjectL(), TypeRegistryL(), JsonParsingContextL()])))();
  var RetryInfoL = () => (RetryInfoL = dart.constFn(dart.legacy(error_details$46pb.RetryInfo)))();
  var PbListOfRetryInfoL = () => (PbListOfRetryInfoL = dart.constFn(protobuf.PbList$(RetryInfoL())))();
  var VoidToRetryInfoL = () => (VoidToRetryInfoL = dart.constFn(dart.fnType(RetryInfoL(), [])))();
  var DurationL = () => (DurationL = dart.constFn(dart.legacy(duration$46pb.Duration)))();
  var VoidToDurationL = () => (VoidToDurationL = dart.constFn(dart.fnType(DurationL(), [])))();
  var DebugInfoL = () => (DebugInfoL = dart.constFn(dart.legacy(error_details$46pb.DebugInfo)))();
  var PbListOfDebugInfoL = () => (PbListOfDebugInfoL = dart.constFn(protobuf.PbList$(DebugInfoL())))();
  var VoidToDebugInfoL = () => (VoidToDebugInfoL = dart.constFn(dart.fnType(DebugInfoL(), [])))();
  var StringL = () => (StringL = dart.constFn(dart.legacy(core.String)))();
  var QuotaFailure_ViolationL = () => (QuotaFailure_ViolationL = dart.constFn(dart.legacy(error_details$46pb.QuotaFailure_Violation)))();
  var PbListOfQuotaFailure_ViolationL = () => (PbListOfQuotaFailure_ViolationL = dart.constFn(protobuf.PbList$(QuotaFailure_ViolationL())))();
  var VoidToQuotaFailure_ViolationL = () => (VoidToQuotaFailure_ViolationL = dart.constFn(dart.fnType(QuotaFailure_ViolationL(), [])))();
  var QuotaFailureL = () => (QuotaFailureL = dart.constFn(dart.legacy(error_details$46pb.QuotaFailure)))();
  var PbListOfQuotaFailureL = () => (PbListOfQuotaFailureL = dart.constFn(protobuf.PbList$(QuotaFailureL())))();
  var VoidToQuotaFailureL = () => (VoidToQuotaFailureL = dart.constFn(dart.fnType(QuotaFailureL(), [])))();
  var ErrorInfoL = () => (ErrorInfoL = dart.constFn(dart.legacy(error_details$46pb.ErrorInfo)))();
  var PbListOfErrorInfoL = () => (PbListOfErrorInfoL = dart.constFn(protobuf.PbList$(ErrorInfoL())))();
  var VoidToErrorInfoL = () => (VoidToErrorInfoL = dart.constFn(dart.fnType(ErrorInfoL(), [])))();
  var PreconditionFailure_ViolationL = () => (PreconditionFailure_ViolationL = dart.constFn(dart.legacy(error_details$46pb.PreconditionFailure_Violation)))();
  var PbListOfPreconditionFailure_ViolationL = () => (PbListOfPreconditionFailure_ViolationL = dart.constFn(protobuf.PbList$(PreconditionFailure_ViolationL())))();
  var VoidToPreconditionFailure_ViolationL = () => (VoidToPreconditionFailure_ViolationL = dart.constFn(dart.fnType(PreconditionFailure_ViolationL(), [])))();
  var PreconditionFailureL = () => (PreconditionFailureL = dart.constFn(dart.legacy(error_details$46pb.PreconditionFailure)))();
  var PbListOfPreconditionFailureL = () => (PbListOfPreconditionFailureL = dart.constFn(protobuf.PbList$(PreconditionFailureL())))();
  var VoidToPreconditionFailureL = () => (VoidToPreconditionFailureL = dart.constFn(dart.fnType(PreconditionFailureL(), [])))();
  var BadRequest_FieldViolationL = () => (BadRequest_FieldViolationL = dart.constFn(dart.legacy(error_details$46pb.BadRequest_FieldViolation)))();
  var PbListOfBadRequest_FieldViolationL = () => (PbListOfBadRequest_FieldViolationL = dart.constFn(protobuf.PbList$(BadRequest_FieldViolationL())))();
  var VoidToBadRequest_FieldViolationL = () => (VoidToBadRequest_FieldViolationL = dart.constFn(dart.fnType(BadRequest_FieldViolationL(), [])))();
  var BadRequestL = () => (BadRequestL = dart.constFn(dart.legacy(error_details$46pb.BadRequest)))();
  var PbListOfBadRequestL = () => (PbListOfBadRequestL = dart.constFn(protobuf.PbList$(BadRequestL())))();
  var VoidToBadRequestL = () => (VoidToBadRequestL = dart.constFn(dart.fnType(BadRequestL(), [])))();
  var RequestInfoL = () => (RequestInfoL = dart.constFn(dart.legacy(error_details$46pb.RequestInfo)))();
  var PbListOfRequestInfoL = () => (PbListOfRequestInfoL = dart.constFn(protobuf.PbList$(RequestInfoL())))();
  var VoidToRequestInfoL = () => (VoidToRequestInfoL = dart.constFn(dart.fnType(RequestInfoL(), [])))();
  var ResourceInfoL = () => (ResourceInfoL = dart.constFn(dart.legacy(error_details$46pb.ResourceInfo)))();
  var PbListOfResourceInfoL = () => (PbListOfResourceInfoL = dart.constFn(protobuf.PbList$(ResourceInfoL())))();
  var VoidToResourceInfoL = () => (VoidToResourceInfoL = dart.constFn(dart.fnType(ResourceInfoL(), [])))();
  var Help_LinkL = () => (Help_LinkL = dart.constFn(dart.legacy(error_details$46pb.Help_Link)))();
  var PbListOfHelp_LinkL = () => (PbListOfHelp_LinkL = dart.constFn(protobuf.PbList$(Help_LinkL())))();
  var VoidToHelp_LinkL = () => (VoidToHelp_LinkL = dart.constFn(dart.fnType(Help_LinkL(), [])))();
  var HelpL = () => (HelpL = dart.constFn(dart.legacy(error_details$46pb.Help)))();
  var PbListOfHelpL = () => (PbListOfHelpL = dart.constFn(protobuf.PbList$(HelpL())))();
  var VoidToHelpL = () => (VoidToHelpL = dart.constFn(dart.fnType(HelpL(), [])))();
  var LocalizedMessageL = () => (LocalizedMessageL = dart.constFn(dart.legacy(error_details$46pb.LocalizedMessage)))();
  var PbListOfLocalizedMessageL = () => (PbListOfLocalizedMessageL = dart.constFn(protobuf.PbList$(LocalizedMessageL())))();
  var VoidToLocalizedMessageL = () => (VoidToLocalizedMessageL = dart.constFn(dart.fnType(LocalizedMessageL(), [])))();
  var PbListOfDurationL = () => (PbListOfDurationL = dart.constFn(protobuf.PbList$(DurationL())))();
  var MapOfStringL$StringL = () => (MapOfStringL$StringL = dart.constFn(core.Map$(StringL(), StringL())))();
  var MapLOfStringL$StringL = () => (MapLOfStringL$StringL = dart.constFn(dart.legacy(MapOfStringL$StringL())))();
  var MapLOfStringL$StringLAndStringLToFutureOrLOfvoid = () => (MapLOfStringL$StringLAndStringLToFutureOrLOfvoid = dart.constFn(dart.fnType(dart.void, [MapLOfStringL$StringL(), StringL()])))();
  var MapLOfStringL$StringLAndStringLToLFutureOrLOfvoid = () => (MapLOfStringL$StringLAndStringLToLFutureOrLOfvoid = dart.constFn(dart.legacy(MapLOfStringL$StringLAndStringLToFutureOrLOfvoid())))();
  var ListOfMapLOfStringL$StringLAndStringLToLFutureOrLOfvoid = () => (ListOfMapLOfStringL$StringLAndStringLToLFutureOrLOfvoid = dart.constFn(core.List$(MapLOfStringL$StringLAndStringLToLFutureOrLOfvoid())))();
  var CallOptionsL = () => (CallOptionsL = dart.constFn(dart.legacy(call$.CallOptions)))();
  var CallOptionsLAndCallOptionsLToCallOptionsL = () => (CallOptionsLAndCallOptionsLToCallOptionsL = dart.constFn(dart.fnType(CallOptionsL(), [CallOptionsL(), CallOptionsL()])))();
  var WebCallOptionsL = () => (WebCallOptionsL = dart.constFn(dart.legacy(call$.WebCallOptions)))();
  var CompleterOfMapLOfStringL$StringL = () => (CompleterOfMapLOfStringL$StringL = dart.constFn(async.Completer$(MapLOfStringL$StringL())))();
  var IdentityMapOfStringL$StringL = () => (IdentityMapOfStringL$StringL = dart.constFn(_js_helper.IdentityMap$(StringL(), StringL())))();
  var StringLAndStringLToNullN = () => (StringLAndStringLToNullN = dart.constFn(dart.fnType(core.Null, [StringL(), StringL()])))();
  var LinkedHashMapOfStringL$StringL = () => (LinkedHashMapOfStringL$StringL = dart.constFn(collection.LinkedHashMap$(StringL(), StringL())))();
  var dynamicTodynamic = () => (dynamicTodynamic = dart.constFn(dart.fnType(dart.dynamic, [dart.dynamic])))();
  var dynamicTovoid = () => (dynamicTovoid = dart.constFn(dart.fnType(dart.void, [dart.dynamic])))();
  var GrpcDataL = () => (GrpcDataL = dart.constFn(dart.legacy(message.GrpcData)))();
  var GrpcMetadataL = () => (GrpcMetadataL = dart.constFn(dart.legacy(message.GrpcMetadata)))();
  var GrpcErrorL = () => (GrpcErrorL = dart.constFn(dart.legacy(status$.GrpcError)))();
  var FutureL = () => (FutureL = dart.constFn(dart.legacy(async.Future)))();
  var JSArrayOfFutureL = () => (JSArrayOfFutureL = dart.constFn(_interceptors.JSArray$(FutureL())))();
  var AnyLToGeneratedMessageL = () => (AnyLToGeneratedMessageL = dart.constFn(dart.fnType(GeneratedMessageL(), [AnyL()])))();
  var JSArrayOfGeneratedMessageL = () => (JSArrayOfGeneratedMessageL = dart.constFn(_interceptors.JSArray$(GeneratedMessageL())))();
  var GrpcMessageL = () => (GrpcMessageL = dart.constFn(dart.legacy(message.GrpcMessage)))();
  var _StreamHandlerTransformerOfGrpcMessageL$GrpcMessageL = () => (_StreamHandlerTransformerOfGrpcMessageL$GrpcMessageL = dart.constFn(async._StreamHandlerTransformer$(GrpcMessageL(), GrpcMessageL())))();
  var EventSinkOfGrpcMessageL = () => (EventSinkOfGrpcMessageL = dart.constFn(async.EventSink$(GrpcMessageL())))();
  var EventSinkLOfGrpcMessageL = () => (EventSinkLOfGrpcMessageL = dart.constFn(dart.legacy(EventSinkOfGrpcMessageL())))();
  var GrpcMessageLAndEventSinkLOfGrpcMessageLToNullN = () => (GrpcMessageLAndEventSinkLOfGrpcMessageLToNullN = dart.constFn(dart.fnType(core.Null, [GrpcMessageL(), EventSinkLOfGrpcMessageL()])))();
  var ConnectionStateL = () => (ConnectionStateL = dart.constFn(dart.legacy(connection.ConnectionState)))();
  var RLAndRLToRL = () => (RLAndRLToRL = dart.constFn(dart.gFnType(R => {
    var RL = () => (RL = dart.constFn(dart.legacy(R)))();
    return [RL(), [RL(), RL()]];
  })))();
  var RLToRL = () => (RLToRL = dart.constFn(dart.gFnType(R => {
    var RL = () => (RL = dart.constFn(dart.legacy(R)))();
    return [RL(), [RL()]];
  })))();
  var CodeL = () => (CodeL = dart.constFn(dart.legacy(code$46pbenum.Code)))();
  var TimelineTaskL = () => (TimelineTaskL = dart.constFn(dart.legacy(developer.TimelineTask)))();
  var __ToTimelineTaskL = () => (__ToTimelineTaskL = dart.constFn(dart.fnType(TimelineTaskL(), [], {filterKey: StringL(), parent: TimelineTaskL()}, {})))();
  var ClientConnectionL = () => (ClientConnectionL = dart.constFn(dart.legacy(connection.ClientConnection)))();
  var ClientConnectionLToNullN = () => (ClientConnectionLToNullN = dart.constFn(dart.fnType(core.Null, [ClientConnectionL()])))();
  const CT = Object.create(null);
  var L5 = "package:grpc/src/client/transport/transport.dart";
  var L10 = "package:grpc/src/client/common.dart";
  var L0 = "package:grpc/src/generated/google/rpc/status.pb.dart";
  var L2 = "package:grpc/src/generated/google/rpc/error_details.pb.dart";
  var L12 = "package:grpc/src/generated/google/rpc/code.pbenum.dart";
  var L1 = "package:grpc/src/generated/google/protobuf/any.pb.dart";
  var L11 = "package:grpc/src/shared/status.dart";
  var L9 = "package:grpc/src/client/connection.dart";
  var L4 = "package:grpc/src/client/call.dart";
  var L8 = "package:grpc/src/client/method.dart";
  var L6 = "package:grpc/src/shared/message.dart";
  var L13 = "package:grpc/src/client/channel.dart";
  var L7 = "org-dartlang-app:///packages/grpc/src/shared/message.dart";
  var L3 = "package:grpc/src/generated/google/protobuf/duration.pb.dart";
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.const({
        __proto__: protobuf._EmptyExtensionRegistry.prototype
      });
    },
    get C1() {
      return C1 = dart.fn(status$46pb.Status.create, VoidToStatusL());
    },
    get C2() {
      return C2 = dart.const({
        __proto__: protobuf.PackageName.prototype,
        [PackageName_name]: "google.rpc"
      });
    },
    get C3() {
      return C3 = dart.fn(any$46pb.Any.create, VoidToAnyL());
    },
    get C4() {
      return C4 = dart.const({
        __proto__: protobuf.PackageName.prototype,
        [PackageName_name]: "google.protobuf"
      });
    },
    get C5() {
      return C5 = dart.fn(well_known.AnyMixin.toProto3JsonHelper, GeneratedMessageLAndTypeRegistryLToObjectL());
    },
    get C6() {
      return C6 = dart.fn(well_known.AnyMixin.fromProto3JsonHelper, GeneratedMessageLAndObjectLAndTypeRegistryL__Tovoid());
    },
    get C7() {
      return C7 = dart.fn(error_details$46pb.RetryInfo.create, VoidToRetryInfoL());
    },
    get C8() {
      return C8 = dart.fn(duration$46pb.Duration.create, VoidToDurationL());
    },
    get C9() {
      return C9 = dart.fn(error_details$46pb.DebugInfo.create, VoidToDebugInfoL());
    },
    get C10() {
      return C10 = dart.fn(error_details$46pb.QuotaFailure_Violation.create, VoidToQuotaFailure_ViolationL());
    },
    get C11() {
      return C11 = dart.fn(error_details$46pb.QuotaFailure.create, VoidToQuotaFailureL());
    },
    get C12() {
      return C12 = dart.fn(error_details$46pb.ErrorInfo.create, VoidToErrorInfoL());
    },
    get C13() {
      return C13 = dart.fn(error_details$46pb.PreconditionFailure_Violation.create, VoidToPreconditionFailure_ViolationL());
    },
    get C14() {
      return C14 = dart.fn(error_details$46pb.PreconditionFailure.create, VoidToPreconditionFailureL());
    },
    get C15() {
      return C15 = dart.fn(error_details$46pb.BadRequest_FieldViolation.create, VoidToBadRequest_FieldViolationL());
    },
    get C16() {
      return C16 = dart.fn(error_details$46pb.BadRequest.create, VoidToBadRequestL());
    },
    get C17() {
      return C17 = dart.fn(error_details$46pb.RequestInfo.create, VoidToRequestInfoL());
    },
    get C18() {
      return C18 = dart.fn(error_details$46pb.ResourceInfo.create, VoidToResourceInfoL());
    },
    get C19() {
      return C19 = dart.fn(error_details$46pb.Help_Link.create, VoidToHelp_LinkL());
    },
    get C20() {
      return C20 = dart.fn(error_details$46pb.Help.create, VoidToHelpL());
    },
    get C21() {
      return C21 = dart.fn(error_details$46pb.LocalizedMessage.create, VoidToLocalizedMessageL());
    },
    get C22() {
      return C22 = dart.fn(well_known.DurationMixin.toProto3JsonHelper, GeneratedMessageLAndTypeRegistryLToObjectL());
    },
    get C23() {
      return C23 = dart.fn(well_known.DurationMixin.fromProto3JsonHelper, GeneratedMessageLAndObjectLAndTypeRegistryL__Tovoid());
    },
    get C24() {
      return C24 = dart.fn(status$.parseErrorDetailsFromAny, AnyLToGeneratedMessageL());
    },
    get C25() {
      return C25 = dart.constList(["content-type", "te", "grpc-timeout", "grpc-accept-encoding", "user-agent"], StringL());
    },
    get C26() {
      return C26 = dart.const({
        __proto__: connection.ConnectionState.prototype,
        [_name$]: "ConnectionState.connecting",
        index: 0
      });
    },
    get C27() {
      return C27 = dart.const({
        __proto__: connection.ConnectionState.prototype,
        [_name$]: "ConnectionState.ready",
        index: 1
      });
    },
    get C28() {
      return C28 = dart.const({
        __proto__: connection.ConnectionState.prototype,
        [_name$]: "ConnectionState.transientFailure",
        index: 2
      });
    },
    get C29() {
      return C29 = dart.const({
        __proto__: connection.ConnectionState.prototype,
        [_name$]: "ConnectionState.idle",
        index: 3
      });
    },
    get C30() {
      return C30 = dart.const({
        __proto__: connection.ConnectionState.prototype,
        [_name$]: "ConnectionState.shutdown",
        index: 4
      });
    },
    get C31() {
      return C31 = dart.constList([C26 || CT.C26, C27 || CT.C27, C28 || CT.C28, C29 || CT.C29, C30 || CT.C30], ConnectionStateL());
    },
    get C32() {
      return C32 = dart.fn(common.ResponseFuture._ensureOnlyOneResponse, RLAndRLToRL());
    },
    get C33() {
      return C33 = dart.fn(common.ResponseFuture._ensureOneResponse, RLToRL());
    },
    get C34() {
      return C34 = dart.const({
        __proto__: code$46pbenum.Code.prototype,
        [ProtobufEnum_name]: "OK",
        [ProtobufEnum_value]: 0
      });
    },
    get C35() {
      return C35 = dart.const({
        __proto__: code$46pbenum.Code.prototype,
        [ProtobufEnum_name]: "CANCELLED",
        [ProtobufEnum_value]: 1
      });
    },
    get C36() {
      return C36 = dart.const({
        __proto__: code$46pbenum.Code.prototype,
        [ProtobufEnum_name]: "UNKNOWN",
        [ProtobufEnum_value]: 2
      });
    },
    get C37() {
      return C37 = dart.const({
        __proto__: code$46pbenum.Code.prototype,
        [ProtobufEnum_name]: "INVALID_ARGUMENT",
        [ProtobufEnum_value]: 3
      });
    },
    get C38() {
      return C38 = dart.const({
        __proto__: code$46pbenum.Code.prototype,
        [ProtobufEnum_name]: "DEADLINE_EXCEEDED",
        [ProtobufEnum_value]: 4
      });
    },
    get C39() {
      return C39 = dart.const({
        __proto__: code$46pbenum.Code.prototype,
        [ProtobufEnum_name]: "NOT_FOUND",
        [ProtobufEnum_value]: 5
      });
    },
    get C40() {
      return C40 = dart.const({
        __proto__: code$46pbenum.Code.prototype,
        [ProtobufEnum_name]: "ALREADY_EXISTS",
        [ProtobufEnum_value]: 6
      });
    },
    get C41() {
      return C41 = dart.const({
        __proto__: code$46pbenum.Code.prototype,
        [ProtobufEnum_name]: "PERMISSION_DENIED",
        [ProtobufEnum_value]: 7
      });
    },
    get C42() {
      return C42 = dart.const({
        __proto__: code$46pbenum.Code.prototype,
        [ProtobufEnum_name]: "UNAUTHENTICATED",
        [ProtobufEnum_value]: 16
      });
    },
    get C43() {
      return C43 = dart.const({
        __proto__: code$46pbenum.Code.prototype,
        [ProtobufEnum_name]: "RESOURCE_EXHAUSTED",
        [ProtobufEnum_value]: 8
      });
    },
    get C44() {
      return C44 = dart.const({
        __proto__: code$46pbenum.Code.prototype,
        [ProtobufEnum_name]: "FAILED_PRECONDITION",
        [ProtobufEnum_value]: 9
      });
    },
    get C45() {
      return C45 = dart.const({
        __proto__: code$46pbenum.Code.prototype,
        [ProtobufEnum_name]: "ABORTED",
        [ProtobufEnum_value]: 10
      });
    },
    get C46() {
      return C46 = dart.const({
        __proto__: code$46pbenum.Code.prototype,
        [ProtobufEnum_name]: "OUT_OF_RANGE",
        [ProtobufEnum_value]: 11
      });
    },
    get C47() {
      return C47 = dart.const({
        __proto__: code$46pbenum.Code.prototype,
        [ProtobufEnum_name]: "UNIMPLEMENTED",
        [ProtobufEnum_value]: 12
      });
    },
    get C48() {
      return C48 = dart.const({
        __proto__: code$46pbenum.Code.prototype,
        [ProtobufEnum_name]: "INTERNAL",
        [ProtobufEnum_value]: 13
      });
    },
    get C49() {
      return C49 = dart.const({
        __proto__: code$46pbenum.Code.prototype,
        [ProtobufEnum_name]: "UNAVAILABLE",
        [ProtobufEnum_value]: 14
      });
    },
    get C50() {
      return C50 = dart.const({
        __proto__: code$46pbenum.Code.prototype,
        [ProtobufEnum_name]: "DATA_LOSS",
        [ProtobufEnum_value]: 15
      });
    },
    get C51() {
      return C51 = dart.constList([C34 || CT.C34, C35 || CT.C35, C36 || CT.C36, C37 || CT.C37, C38 || CT.C38, C39 || CT.C39, C40 || CT.C40, C41 || CT.C41, C42 || CT.C42, C43 || CT.C43, C44 || CT.C44, C45 || CT.C45, C46 || CT.C46, C47 || CT.C47, C48 || CT.C48, C49 || CT.C49, C50 || CT.C50], CodeL());
    },
    get C52() {
      return C52 = dart.fn(profiler._defaultTimelineTaskFactory, __ToTimelineTaskL());
    }
  }, false);
  var C0;
  var C1;
  var PackageName_name = dart.privateName(protobuf, "PackageName.name");
  var C2;
  var C3;
  status$46pb.Status = class Status extends protobuf.GeneratedMessage {
    static new() {
      return status$46pb.Status.create();
    }
    static fromBuffer(i, r = C0 || CT.C0) {
      let t0;
      t0 = status$46pb.Status.create();
      return (() => {
        t0.mergeFromBuffer(i, r);
        return t0;
      })();
    }
    static fromJson(i, r = C0 || CT.C0) {
      let t0;
      t0 = status$46pb.Status.create();
      return (() => {
        t0.mergeFromJson(i, r);
        return t0;
      })();
    }
    clone() {
      let t0;
      t0 = status$46pb.Status.new();
      return (() => {
        t0.mergeFromMessage(this);
        return t0;
      })();
    }
    copyWith(updates) {
      return StatusL().as(super.copyWith(dart.fn(message => updates(StatusL().as(message)), GeneratedMessageLTovoid())));
    }
    get info_() {
      return status$46pb.Status._i;
    }
    static create() {
      return new status$46pb.Status.__();
    }
    createEmptyInstance() {
      return status$46pb.Status.create();
    }
    static createRepeated() {
      return new (PbListOfStatusL()).new();
    }
    static getDefault() {
      let t0;
      t0 = status$46pb.Status._defaultInstance;
      return t0 == null ? status$46pb.Status._defaultInstance = protobuf.GeneratedMessage.$_defaultFor(StatusL(), C1 || CT.C1) : t0;
    }
    get code() {
      return this.$_getIZ(0);
    }
    set code(v) {
      this.$_setSignedInt32(0, v);
    }
    hasCode() {
      return this.$_has(0);
    }
    clearCode() {
      return this.clearField(1);
    }
    get message() {
      return this.$_getSZ(1);
    }
    set message(v) {
      this.$_setString(1, v);
    }
    hasMessage() {
      return this.$_has(1);
    }
    clearMessage() {
      return this.clearField(2);
    }
    get details() {
      return this.$_getList(AnyL(), 2);
    }
  };
  (status$46pb.Status.__ = function() {
    status$46pb.Status.__proto__.new.call(this);
    ;
  }).prototype = status$46pb.Status.prototype;
  dart.addTypeTests(status$46pb.Status);
  dart.addTypeCaches(status$46pb.Status);
  dart.setMethodSignature(status$46pb.Status, () => ({
    __proto__: dart.getMethods(status$46pb.Status.__proto__),
    clone: dart.fnType(dart.legacy(status$46pb.Status), []),
    copyWith: dart.fnType(dart.legacy(status$46pb.Status), [dart.legacy(dart.fnType(dart.void, [dart.legacy(status$46pb.Status)]))]),
    createEmptyInstance: dart.fnType(dart.legacy(status$46pb.Status), []),
    hasCode: dart.fnType(dart.legacy(core.bool), []),
    clearCode: dart.fnType(dart.void, []),
    hasMessage: dart.fnType(dart.legacy(core.bool), []),
    clearMessage: dart.fnType(dart.void, [])
  }));
  dart.setGetterSignature(status$46pb.Status, () => ({
    __proto__: dart.getGetters(status$46pb.Status.__proto__),
    info_: dart.legacy(protobuf.BuilderInfo),
    code: dart.legacy(core.int),
    message: dart.legacy(core.String),
    details: dart.legacy(core.List$(dart.legacy(any$46pb.Any)))
  }));
  dart.setSetterSignature(status$46pb.Status, () => ({
    __proto__: dart.getSetters(status$46pb.Status.__proto__),
    code: dart.legacy(core.int),
    message: dart.legacy(core.String)
  }));
  dart.setLibraryUri(status$46pb.Status, L0);
  dart.defineLazy(status$46pb.Status, {
    /*status$46pb.Status._i*/get _i() {
      let t0;
      return t0 = new protobuf.BuilderInfo.new(false ? "" : "Status", {package: C2 || CT.C2, createEmptyInstance: C1 || CT.C1}), (() => {
        t0.a(intL(), 1, false ? "" : "code", 2048);
        t0.aOS(2, false ? "" : "message");
        t0.pc(AnyL(), 3, false ? "" : "details", 2097154, {subBuilder: C3 || CT.C3});
        t0.hasRequiredFields = false;
        return t0;
      })();
    },
    /*status$46pb.Status._defaultInstance*/get _defaultInstance() {
      return null;
    },
    set _defaultInstance(_) {}
  }, true);
  var C4;
  var C5;
  var C6;
  const GeneratedMessage_AnyMixin$36 = class GeneratedMessage_AnyMixin extends protobuf.GeneratedMessage {};
  (GeneratedMessage_AnyMixin$36.new = function() {
    GeneratedMessage_AnyMixin$36.__proto__.new.call(this);
  }).prototype = GeneratedMessage_AnyMixin$36.prototype;
  (GeneratedMessage_AnyMixin$36.fromBuffer = function(input, extensionRegistry) {
    GeneratedMessage_AnyMixin$36.__proto__.fromBuffer.call(this, input, extensionRegistry);
  }).prototype = GeneratedMessage_AnyMixin$36.prototype;
  (GeneratedMessage_AnyMixin$36.fromJson = function(input, extensionRegistry) {
    GeneratedMessage_AnyMixin$36.__proto__.fromJson.call(this, input, extensionRegistry);
  }).prototype = GeneratedMessage_AnyMixin$36.prototype;
  dart.applyMixin(GeneratedMessage_AnyMixin$36, well_known.AnyMixin);
  any$46pb.Any = class Any extends GeneratedMessage_AnyMixin$36 {
    static new() {
      return any$46pb.Any.create();
    }
    static fromBuffer(i, r = C0 || CT.C0) {
      let t0;
      t0 = any$46pb.Any.create();
      return (() => {
        t0.mergeFromBuffer(i, r);
        return t0;
      })();
    }
    static fromJson(i, r = C0 || CT.C0) {
      let t0;
      t0 = any$46pb.Any.create();
      return (() => {
        t0.mergeFromJson(i, r);
        return t0;
      })();
    }
    clone() {
      let t0;
      t0 = any$46pb.Any.new();
      return (() => {
        t0.mergeFromMessage(this);
        return t0;
      })();
    }
    copyWith(updates) {
      return AnyL().as(super.copyWith(dart.fn(message => updates(AnyL().as(message)), GeneratedMessageLTovoid())));
    }
    get info_() {
      return any$46pb.Any._i;
    }
    static create() {
      return new any$46pb.Any.__();
    }
    createEmptyInstance() {
      return any$46pb.Any.create();
    }
    static createRepeated() {
      return new (PbListOfAnyL()).new();
    }
    static getDefault() {
      let t0;
      t0 = any$46pb.Any._defaultInstance;
      return t0 == null ? any$46pb.Any._defaultInstance = protobuf.GeneratedMessage.$_defaultFor(AnyL(), C3 || CT.C3) : t0;
    }
    get typeUrl() {
      return this.$_getSZ(0);
    }
    set typeUrl(v) {
      this.$_setString(0, v);
    }
    hasTypeUrl() {
      return this.$_has(0);
    }
    clearTypeUrl() {
      return this.clearField(1);
    }
    get value() {
      return this.$_getN(ListLOfintL(), 1);
    }
    set value(v) {
      this.$_setBytes(1, v);
    }
    hasValue() {
      return this.$_has(1);
    }
    clearValue() {
      return this.clearField(2);
    }
    static pack(message, opts) {
      let typeUrlPrefix = opts && 'typeUrlPrefix' in opts ? opts.typeUrlPrefix : "type.googleapis.com";
      let result = any$46pb.Any.create();
      well_known.AnyMixin.packIntoAny(result, message, {typeUrlPrefix: typeUrlPrefix});
      return result;
    }
  };
  (any$46pb.Any.__ = function() {
    any$46pb.Any.__proto__.new.call(this);
    ;
  }).prototype = any$46pb.Any.prototype;
  dart.addTypeTests(any$46pb.Any);
  dart.addTypeCaches(any$46pb.Any);
  dart.setMethodSignature(any$46pb.Any, () => ({
    __proto__: dart.getMethods(any$46pb.Any.__proto__),
    clone: dart.fnType(dart.legacy(any$46pb.Any), []),
    copyWith: dart.fnType(dart.legacy(any$46pb.Any), [dart.legacy(dart.fnType(dart.void, [dart.legacy(any$46pb.Any)]))]),
    createEmptyInstance: dart.fnType(dart.legacy(any$46pb.Any), []),
    hasTypeUrl: dart.fnType(dart.legacy(core.bool), []),
    clearTypeUrl: dart.fnType(dart.void, []),
    hasValue: dart.fnType(dart.legacy(core.bool), []),
    clearValue: dart.fnType(dart.void, [])
  }));
  dart.setGetterSignature(any$46pb.Any, () => ({
    __proto__: dart.getGetters(any$46pb.Any.__proto__),
    info_: dart.legacy(protobuf.BuilderInfo),
    typeUrl: dart.legacy(core.String),
    value: dart.legacy(core.List$(dart.legacy(core.int)))
  }));
  dart.setSetterSignature(any$46pb.Any, () => ({
    __proto__: dart.getSetters(any$46pb.Any.__proto__),
    typeUrl: dart.legacy(core.String),
    value: dart.legacy(core.List$(dart.legacy(core.int)))
  }));
  dart.setLibraryUri(any$46pb.Any, L1);
  dart.defineLazy(any$46pb.Any, {
    /*any$46pb.Any._i*/get _i() {
      let t0;
      return t0 = new protobuf.BuilderInfo.new(false ? "" : "Any", {package: C4 || CT.C4, createEmptyInstance: C3 || CT.C3, toProto3Json: C5 || CT.C5, fromProto3Json: C6 || CT.C6}), (() => {
        t0.aOS(1, false ? "" : "typeUrl");
        t0.a(ListLOfintL(), 2, false ? "" : "value", 32);
        t0.hasRequiredFields = false;
        return t0;
      })();
    },
    /*any$46pb.Any._defaultInstance*/get _defaultInstance() {
      return null;
    },
    set _defaultInstance(_) {}
  }, true);
  var C7;
  var C8;
  error_details$46pb.RetryInfo = class RetryInfo extends protobuf.GeneratedMessage {
    static new() {
      return error_details$46pb.RetryInfo.create();
    }
    static fromBuffer(i, r = C0 || CT.C0) {
      let t0;
      t0 = error_details$46pb.RetryInfo.create();
      return (() => {
        t0.mergeFromBuffer(i, r);
        return t0;
      })();
    }
    static fromJson(i, r = C0 || CT.C0) {
      let t0;
      t0 = error_details$46pb.RetryInfo.create();
      return (() => {
        t0.mergeFromJson(i, r);
        return t0;
      })();
    }
    clone() {
      let t0;
      t0 = error_details$46pb.RetryInfo.new();
      return (() => {
        t0.mergeFromMessage(this);
        return t0;
      })();
    }
    copyWith(updates) {
      return RetryInfoL().as(super.copyWith(dart.fn(message => updates(RetryInfoL().as(message)), GeneratedMessageLTovoid())));
    }
    get info_() {
      return error_details$46pb.RetryInfo._i;
    }
    static create() {
      return new error_details$46pb.RetryInfo.__();
    }
    createEmptyInstance() {
      return error_details$46pb.RetryInfo.create();
    }
    static createRepeated() {
      return new (PbListOfRetryInfoL()).new();
    }
    static getDefault() {
      let t0;
      t0 = error_details$46pb.RetryInfo._defaultInstance;
      return t0 == null ? error_details$46pb.RetryInfo._defaultInstance = protobuf.GeneratedMessage.$_defaultFor(RetryInfoL(), C7 || CT.C7) : t0;
    }
    get retryDelay() {
      return this.$_getN(DurationL(), 0);
    }
    set retryDelay(v) {
      this.setField(1, v);
    }
    hasRetryDelay() {
      return this.$_has(0);
    }
    clearRetryDelay() {
      return this.clearField(1);
    }
    ensureRetryDelay() {
      return this.$_ensure(DurationL(), 0);
    }
  };
  (error_details$46pb.RetryInfo.__ = function() {
    error_details$46pb.RetryInfo.__proto__.new.call(this);
    ;
  }).prototype = error_details$46pb.RetryInfo.prototype;
  dart.addTypeTests(error_details$46pb.RetryInfo);
  dart.addTypeCaches(error_details$46pb.RetryInfo);
  dart.setMethodSignature(error_details$46pb.RetryInfo, () => ({
    __proto__: dart.getMethods(error_details$46pb.RetryInfo.__proto__),
    clone: dart.fnType(dart.legacy(error_details$46pb.RetryInfo), []),
    copyWith: dart.fnType(dart.legacy(error_details$46pb.RetryInfo), [dart.legacy(dart.fnType(dart.void, [dart.legacy(error_details$46pb.RetryInfo)]))]),
    createEmptyInstance: dart.fnType(dart.legacy(error_details$46pb.RetryInfo), []),
    hasRetryDelay: dart.fnType(dart.legacy(core.bool), []),
    clearRetryDelay: dart.fnType(dart.void, []),
    ensureRetryDelay: dart.fnType(dart.legacy(duration$46pb.Duration), [])
  }));
  dart.setGetterSignature(error_details$46pb.RetryInfo, () => ({
    __proto__: dart.getGetters(error_details$46pb.RetryInfo.__proto__),
    info_: dart.legacy(protobuf.BuilderInfo),
    retryDelay: dart.legacy(duration$46pb.Duration)
  }));
  dart.setSetterSignature(error_details$46pb.RetryInfo, () => ({
    __proto__: dart.getSetters(error_details$46pb.RetryInfo.__proto__),
    retryDelay: dart.legacy(duration$46pb.Duration)
  }));
  dart.setLibraryUri(error_details$46pb.RetryInfo, L2);
  dart.defineLazy(error_details$46pb.RetryInfo, {
    /*error_details$46pb.RetryInfo._i*/get _i() {
      let t0;
      return t0 = new protobuf.BuilderInfo.new(false ? "" : "RetryInfo", {package: C2 || CT.C2, createEmptyInstance: C7 || CT.C7}), (() => {
        t0.aOM(DurationL(), 1, false ? "" : "retryDelay", {subBuilder: C8 || CT.C8});
        t0.hasRequiredFields = false;
        return t0;
      })();
    },
    /*error_details$46pb.RetryInfo._defaultInstance*/get _defaultInstance() {
      return null;
    },
    set _defaultInstance(_) {}
  }, true);
  var C9;
  error_details$46pb.DebugInfo = class DebugInfo extends protobuf.GeneratedMessage {
    static new() {
      return error_details$46pb.DebugInfo.create();
    }
    static fromBuffer(i, r = C0 || CT.C0) {
      let t0;
      t0 = error_details$46pb.DebugInfo.create();
      return (() => {
        t0.mergeFromBuffer(i, r);
        return t0;
      })();
    }
    static fromJson(i, r = C0 || CT.C0) {
      let t0;
      t0 = error_details$46pb.DebugInfo.create();
      return (() => {
        t0.mergeFromJson(i, r);
        return t0;
      })();
    }
    clone() {
      let t0;
      t0 = error_details$46pb.DebugInfo.new();
      return (() => {
        t0.mergeFromMessage(this);
        return t0;
      })();
    }
    copyWith(updates) {
      return DebugInfoL().as(super.copyWith(dart.fn(message => updates(DebugInfoL().as(message)), GeneratedMessageLTovoid())));
    }
    get info_() {
      return error_details$46pb.DebugInfo._i;
    }
    static create() {
      return new error_details$46pb.DebugInfo.__();
    }
    createEmptyInstance() {
      return error_details$46pb.DebugInfo.create();
    }
    static createRepeated() {
      return new (PbListOfDebugInfoL()).new();
    }
    static getDefault() {
      let t0;
      t0 = error_details$46pb.DebugInfo._defaultInstance;
      return t0 == null ? error_details$46pb.DebugInfo._defaultInstance = protobuf.GeneratedMessage.$_defaultFor(DebugInfoL(), C9 || CT.C9) : t0;
    }
    get stackEntries() {
      return this.$_getList(StringL(), 0);
    }
    get detail() {
      return this.$_getSZ(1);
    }
    set detail(v) {
      this.$_setString(1, v);
    }
    hasDetail() {
      return this.$_has(1);
    }
    clearDetail() {
      return this.clearField(2);
    }
  };
  (error_details$46pb.DebugInfo.__ = function() {
    error_details$46pb.DebugInfo.__proto__.new.call(this);
    ;
  }).prototype = error_details$46pb.DebugInfo.prototype;
  dart.addTypeTests(error_details$46pb.DebugInfo);
  dart.addTypeCaches(error_details$46pb.DebugInfo);
  dart.setMethodSignature(error_details$46pb.DebugInfo, () => ({
    __proto__: dart.getMethods(error_details$46pb.DebugInfo.__proto__),
    clone: dart.fnType(dart.legacy(error_details$46pb.DebugInfo), []),
    copyWith: dart.fnType(dart.legacy(error_details$46pb.DebugInfo), [dart.legacy(dart.fnType(dart.void, [dart.legacy(error_details$46pb.DebugInfo)]))]),
    createEmptyInstance: dart.fnType(dart.legacy(error_details$46pb.DebugInfo), []),
    hasDetail: dart.fnType(dart.legacy(core.bool), []),
    clearDetail: dart.fnType(dart.void, [])
  }));
  dart.setGetterSignature(error_details$46pb.DebugInfo, () => ({
    __proto__: dart.getGetters(error_details$46pb.DebugInfo.__proto__),
    info_: dart.legacy(protobuf.BuilderInfo),
    stackEntries: dart.legacy(core.List$(dart.legacy(core.String))),
    detail: dart.legacy(core.String)
  }));
  dart.setSetterSignature(error_details$46pb.DebugInfo, () => ({
    __proto__: dart.getSetters(error_details$46pb.DebugInfo.__proto__),
    detail: dart.legacy(core.String)
  }));
  dart.setLibraryUri(error_details$46pb.DebugInfo, L2);
  dart.defineLazy(error_details$46pb.DebugInfo, {
    /*error_details$46pb.DebugInfo._i*/get _i() {
      let t0;
      return t0 = new protobuf.BuilderInfo.new(false ? "" : "DebugInfo", {package: C2 || CT.C2, createEmptyInstance: C9 || CT.C9}), (() => {
        t0.pPS(1, false ? "" : "stackEntries");
        t0.aOS(2, false ? "" : "detail");
        t0.hasRequiredFields = false;
        return t0;
      })();
    },
    /*error_details$46pb.DebugInfo._defaultInstance*/get _defaultInstance() {
      return null;
    },
    set _defaultInstance(_) {}
  }, true);
  var C10;
  error_details$46pb.QuotaFailure_Violation = class QuotaFailure_Violation extends protobuf.GeneratedMessage {
    static new() {
      return error_details$46pb.QuotaFailure_Violation.create();
    }
    static fromBuffer(i, r = C0 || CT.C0) {
      let t0;
      t0 = error_details$46pb.QuotaFailure_Violation.create();
      return (() => {
        t0.mergeFromBuffer(i, r);
        return t0;
      })();
    }
    static fromJson(i, r = C0 || CT.C0) {
      let t0;
      t0 = error_details$46pb.QuotaFailure_Violation.create();
      return (() => {
        t0.mergeFromJson(i, r);
        return t0;
      })();
    }
    clone() {
      let t0;
      t0 = error_details$46pb.QuotaFailure_Violation.new();
      return (() => {
        t0.mergeFromMessage(this);
        return t0;
      })();
    }
    copyWith(updates) {
      return QuotaFailure_ViolationL().as(super.copyWith(dart.fn(message => updates(QuotaFailure_ViolationL().as(message)), GeneratedMessageLTovoid())));
    }
    get info_() {
      return error_details$46pb.QuotaFailure_Violation._i;
    }
    static create() {
      return new error_details$46pb.QuotaFailure_Violation.__();
    }
    createEmptyInstance() {
      return error_details$46pb.QuotaFailure_Violation.create();
    }
    static createRepeated() {
      return new (PbListOfQuotaFailure_ViolationL()).new();
    }
    static getDefault() {
      let t0;
      t0 = error_details$46pb.QuotaFailure_Violation._defaultInstance;
      return t0 == null ? error_details$46pb.QuotaFailure_Violation._defaultInstance = protobuf.GeneratedMessage.$_defaultFor(QuotaFailure_ViolationL(), C10 || CT.C10) : t0;
    }
    get subject() {
      return this.$_getSZ(0);
    }
    set subject(v) {
      this.$_setString(0, v);
    }
    hasSubject() {
      return this.$_has(0);
    }
    clearSubject() {
      return this.clearField(1);
    }
    get description() {
      return this.$_getSZ(1);
    }
    set description(v) {
      this.$_setString(1, v);
    }
    hasDescription() {
      return this.$_has(1);
    }
    clearDescription() {
      return this.clearField(2);
    }
  };
  (error_details$46pb.QuotaFailure_Violation.__ = function() {
    error_details$46pb.QuotaFailure_Violation.__proto__.new.call(this);
    ;
  }).prototype = error_details$46pb.QuotaFailure_Violation.prototype;
  dart.addTypeTests(error_details$46pb.QuotaFailure_Violation);
  dart.addTypeCaches(error_details$46pb.QuotaFailure_Violation);
  dart.setMethodSignature(error_details$46pb.QuotaFailure_Violation, () => ({
    __proto__: dart.getMethods(error_details$46pb.QuotaFailure_Violation.__proto__),
    clone: dart.fnType(dart.legacy(error_details$46pb.QuotaFailure_Violation), []),
    copyWith: dart.fnType(dart.legacy(error_details$46pb.QuotaFailure_Violation), [dart.legacy(dart.fnType(dart.void, [dart.legacy(error_details$46pb.QuotaFailure_Violation)]))]),
    createEmptyInstance: dart.fnType(dart.legacy(error_details$46pb.QuotaFailure_Violation), []),
    hasSubject: dart.fnType(dart.legacy(core.bool), []),
    clearSubject: dart.fnType(dart.void, []),
    hasDescription: dart.fnType(dart.legacy(core.bool), []),
    clearDescription: dart.fnType(dart.void, [])
  }));
  dart.setGetterSignature(error_details$46pb.QuotaFailure_Violation, () => ({
    __proto__: dart.getGetters(error_details$46pb.QuotaFailure_Violation.__proto__),
    info_: dart.legacy(protobuf.BuilderInfo),
    subject: dart.legacy(core.String),
    description: dart.legacy(core.String)
  }));
  dart.setSetterSignature(error_details$46pb.QuotaFailure_Violation, () => ({
    __proto__: dart.getSetters(error_details$46pb.QuotaFailure_Violation.__proto__),
    subject: dart.legacy(core.String),
    description: dart.legacy(core.String)
  }));
  dart.setLibraryUri(error_details$46pb.QuotaFailure_Violation, L2);
  dart.defineLazy(error_details$46pb.QuotaFailure_Violation, {
    /*error_details$46pb.QuotaFailure_Violation._i*/get _i() {
      let t0;
      return t0 = new protobuf.BuilderInfo.new(false ? "" : "QuotaFailure.Violation", {package: C2 || CT.C2, createEmptyInstance: C10 || CT.C10}), (() => {
        t0.aOS(1, false ? "" : "subject");
        t0.aOS(2, false ? "" : "description");
        t0.hasRequiredFields = false;
        return t0;
      })();
    },
    /*error_details$46pb.QuotaFailure_Violation._defaultInstance*/get _defaultInstance() {
      return null;
    },
    set _defaultInstance(_) {}
  }, true);
  var C11;
  error_details$46pb.QuotaFailure = class QuotaFailure extends protobuf.GeneratedMessage {
    static new() {
      return error_details$46pb.QuotaFailure.create();
    }
    static fromBuffer(i, r = C0 || CT.C0) {
      let t0;
      t0 = error_details$46pb.QuotaFailure.create();
      return (() => {
        t0.mergeFromBuffer(i, r);
        return t0;
      })();
    }
    static fromJson(i, r = C0 || CT.C0) {
      let t0;
      t0 = error_details$46pb.QuotaFailure.create();
      return (() => {
        t0.mergeFromJson(i, r);
        return t0;
      })();
    }
    clone() {
      let t0;
      t0 = error_details$46pb.QuotaFailure.new();
      return (() => {
        t0.mergeFromMessage(this);
        return t0;
      })();
    }
    copyWith(updates) {
      return QuotaFailureL().as(super.copyWith(dart.fn(message => updates(QuotaFailureL().as(message)), GeneratedMessageLTovoid())));
    }
    get info_() {
      return error_details$46pb.QuotaFailure._i;
    }
    static create() {
      return new error_details$46pb.QuotaFailure.__();
    }
    createEmptyInstance() {
      return error_details$46pb.QuotaFailure.create();
    }
    static createRepeated() {
      return new (PbListOfQuotaFailureL()).new();
    }
    static getDefault() {
      let t0;
      t0 = error_details$46pb.QuotaFailure._defaultInstance;
      return t0 == null ? error_details$46pb.QuotaFailure._defaultInstance = protobuf.GeneratedMessage.$_defaultFor(QuotaFailureL(), C11 || CT.C11) : t0;
    }
    get violations() {
      return this.$_getList(QuotaFailure_ViolationL(), 0);
    }
  };
  (error_details$46pb.QuotaFailure.__ = function() {
    error_details$46pb.QuotaFailure.__proto__.new.call(this);
    ;
  }).prototype = error_details$46pb.QuotaFailure.prototype;
  dart.addTypeTests(error_details$46pb.QuotaFailure);
  dart.addTypeCaches(error_details$46pb.QuotaFailure);
  dart.setMethodSignature(error_details$46pb.QuotaFailure, () => ({
    __proto__: dart.getMethods(error_details$46pb.QuotaFailure.__proto__),
    clone: dart.fnType(dart.legacy(error_details$46pb.QuotaFailure), []),
    copyWith: dart.fnType(dart.legacy(error_details$46pb.QuotaFailure), [dart.legacy(dart.fnType(dart.void, [dart.legacy(error_details$46pb.QuotaFailure)]))]),
    createEmptyInstance: dart.fnType(dart.legacy(error_details$46pb.QuotaFailure), [])
  }));
  dart.setGetterSignature(error_details$46pb.QuotaFailure, () => ({
    __proto__: dart.getGetters(error_details$46pb.QuotaFailure.__proto__),
    info_: dart.legacy(protobuf.BuilderInfo),
    violations: dart.legacy(core.List$(dart.legacy(error_details$46pb.QuotaFailure_Violation)))
  }));
  dart.setLibraryUri(error_details$46pb.QuotaFailure, L2);
  dart.defineLazy(error_details$46pb.QuotaFailure, {
    /*error_details$46pb.QuotaFailure._i*/get _i() {
      let t0;
      return t0 = new protobuf.BuilderInfo.new(false ? "" : "QuotaFailure", {package: C2 || CT.C2, createEmptyInstance: C11 || CT.C11}), (() => {
        t0.pc(QuotaFailure_ViolationL(), 1, false ? "" : "violations", 2097154, {subBuilder: C10 || CT.C10});
        t0.hasRequiredFields = false;
        return t0;
      })();
    },
    /*error_details$46pb.QuotaFailure._defaultInstance*/get _defaultInstance() {
      return null;
    },
    set _defaultInstance(_) {}
  }, true);
  var C12;
  error_details$46pb.ErrorInfo = class ErrorInfo extends protobuf.GeneratedMessage {
    static new() {
      return error_details$46pb.ErrorInfo.create();
    }
    static fromBuffer(i, r = C0 || CT.C0) {
      let t0;
      t0 = error_details$46pb.ErrorInfo.create();
      return (() => {
        t0.mergeFromBuffer(i, r);
        return t0;
      })();
    }
    static fromJson(i, r = C0 || CT.C0) {
      let t0;
      t0 = error_details$46pb.ErrorInfo.create();
      return (() => {
        t0.mergeFromJson(i, r);
        return t0;
      })();
    }
    clone() {
      let t0;
      t0 = error_details$46pb.ErrorInfo.new();
      return (() => {
        t0.mergeFromMessage(this);
        return t0;
      })();
    }
    copyWith(updates) {
      return ErrorInfoL().as(super.copyWith(dart.fn(message => updates(ErrorInfoL().as(message)), GeneratedMessageLTovoid())));
    }
    get info_() {
      return error_details$46pb.ErrorInfo._i;
    }
    static create() {
      return new error_details$46pb.ErrorInfo.__();
    }
    createEmptyInstance() {
      return error_details$46pb.ErrorInfo.create();
    }
    static createRepeated() {
      return new (PbListOfErrorInfoL()).new();
    }
    static getDefault() {
      let t0;
      t0 = error_details$46pb.ErrorInfo._defaultInstance;
      return t0 == null ? error_details$46pb.ErrorInfo._defaultInstance = protobuf.GeneratedMessage.$_defaultFor(ErrorInfoL(), C12 || CT.C12) : t0;
    }
    get reason() {
      return this.$_getSZ(0);
    }
    set reason(v) {
      this.$_setString(0, v);
    }
    hasReason() {
      return this.$_has(0);
    }
    clearReason() {
      return this.clearField(1);
    }
    get domain() {
      return this.$_getSZ(1);
    }
    set domain(v) {
      this.$_setString(1, v);
    }
    hasDomain() {
      return this.$_has(1);
    }
    clearDomain() {
      return this.clearField(2);
    }
    get metadata() {
      return this.$_getMap(StringL(), StringL(), 2);
    }
  };
  (error_details$46pb.ErrorInfo.__ = function() {
    error_details$46pb.ErrorInfo.__proto__.new.call(this);
    ;
  }).prototype = error_details$46pb.ErrorInfo.prototype;
  dart.addTypeTests(error_details$46pb.ErrorInfo);
  dart.addTypeCaches(error_details$46pb.ErrorInfo);
  dart.setMethodSignature(error_details$46pb.ErrorInfo, () => ({
    __proto__: dart.getMethods(error_details$46pb.ErrorInfo.__proto__),
    clone: dart.fnType(dart.legacy(error_details$46pb.ErrorInfo), []),
    copyWith: dart.fnType(dart.legacy(error_details$46pb.ErrorInfo), [dart.legacy(dart.fnType(dart.void, [dart.legacy(error_details$46pb.ErrorInfo)]))]),
    createEmptyInstance: dart.fnType(dart.legacy(error_details$46pb.ErrorInfo), []),
    hasReason: dart.fnType(dart.legacy(core.bool), []),
    clearReason: dart.fnType(dart.void, []),
    hasDomain: dart.fnType(dart.legacy(core.bool), []),
    clearDomain: dart.fnType(dart.void, [])
  }));
  dart.setGetterSignature(error_details$46pb.ErrorInfo, () => ({
    __proto__: dart.getGetters(error_details$46pb.ErrorInfo.__proto__),
    info_: dart.legacy(protobuf.BuilderInfo),
    reason: dart.legacy(core.String),
    domain: dart.legacy(core.String),
    metadata: dart.legacy(core.Map$(dart.legacy(core.String), dart.legacy(core.String)))
  }));
  dart.setSetterSignature(error_details$46pb.ErrorInfo, () => ({
    __proto__: dart.getSetters(error_details$46pb.ErrorInfo.__proto__),
    reason: dart.legacy(core.String),
    domain: dart.legacy(core.String)
  }));
  dart.setLibraryUri(error_details$46pb.ErrorInfo, L2);
  dart.defineLazy(error_details$46pb.ErrorInfo, {
    /*error_details$46pb.ErrorInfo._i*/get _i() {
      let t0;
      return t0 = new protobuf.BuilderInfo.new(false ? "" : "ErrorInfo", {package: C2 || CT.C2, createEmptyInstance: C12 || CT.C12}), (() => {
        t0.aOS(1, false ? "" : "reason");
        t0.aOS(2, false ? "" : "domain");
        t0.m(StringL(), StringL(), 3, false ? "" : "metadata", {entryClassName: "ErrorInfo.MetadataEntry", keyFieldType: 64, valueFieldType: 64, packageName: C2 || CT.C2});
        t0.hasRequiredFields = false;
        return t0;
      })();
    },
    /*error_details$46pb.ErrorInfo._defaultInstance*/get _defaultInstance() {
      return null;
    },
    set _defaultInstance(_) {}
  }, true);
  var C13;
  error_details$46pb.PreconditionFailure_Violation = class PreconditionFailure_Violation extends protobuf.GeneratedMessage {
    static new() {
      return error_details$46pb.PreconditionFailure_Violation.create();
    }
    static fromBuffer(i, r = C0 || CT.C0) {
      let t0;
      t0 = error_details$46pb.PreconditionFailure_Violation.create();
      return (() => {
        t0.mergeFromBuffer(i, r);
        return t0;
      })();
    }
    static fromJson(i, r = C0 || CT.C0) {
      let t0;
      t0 = error_details$46pb.PreconditionFailure_Violation.create();
      return (() => {
        t0.mergeFromJson(i, r);
        return t0;
      })();
    }
    clone() {
      let t0;
      t0 = error_details$46pb.PreconditionFailure_Violation.new();
      return (() => {
        t0.mergeFromMessage(this);
        return t0;
      })();
    }
    copyWith(updates) {
      return PreconditionFailure_ViolationL().as(super.copyWith(dart.fn(message => updates(PreconditionFailure_ViolationL().as(message)), GeneratedMessageLTovoid())));
    }
    get info_() {
      return error_details$46pb.PreconditionFailure_Violation._i;
    }
    static create() {
      return new error_details$46pb.PreconditionFailure_Violation.__();
    }
    createEmptyInstance() {
      return error_details$46pb.PreconditionFailure_Violation.create();
    }
    static createRepeated() {
      return new (PbListOfPreconditionFailure_ViolationL()).new();
    }
    static getDefault() {
      let t0;
      t0 = error_details$46pb.PreconditionFailure_Violation._defaultInstance;
      return t0 == null ? error_details$46pb.PreconditionFailure_Violation._defaultInstance = protobuf.GeneratedMessage.$_defaultFor(PreconditionFailure_ViolationL(), C13 || CT.C13) : t0;
    }
    get type() {
      return this.$_getSZ(0);
    }
    set type(v) {
      this.$_setString(0, v);
    }
    hasType() {
      return this.$_has(0);
    }
    clearType() {
      return this.clearField(1);
    }
    get subject() {
      return this.$_getSZ(1);
    }
    set subject(v) {
      this.$_setString(1, v);
    }
    hasSubject() {
      return this.$_has(1);
    }
    clearSubject() {
      return this.clearField(2);
    }
    get description() {
      return this.$_getSZ(2);
    }
    set description(v) {
      this.$_setString(2, v);
    }
    hasDescription() {
      return this.$_has(2);
    }
    clearDescription() {
      return this.clearField(3);
    }
  };
  (error_details$46pb.PreconditionFailure_Violation.__ = function() {
    error_details$46pb.PreconditionFailure_Violation.__proto__.new.call(this);
    ;
  }).prototype = error_details$46pb.PreconditionFailure_Violation.prototype;
  dart.addTypeTests(error_details$46pb.PreconditionFailure_Violation);
  dart.addTypeCaches(error_details$46pb.PreconditionFailure_Violation);
  dart.setMethodSignature(error_details$46pb.PreconditionFailure_Violation, () => ({
    __proto__: dart.getMethods(error_details$46pb.PreconditionFailure_Violation.__proto__),
    clone: dart.fnType(dart.legacy(error_details$46pb.PreconditionFailure_Violation), []),
    copyWith: dart.fnType(dart.legacy(error_details$46pb.PreconditionFailure_Violation), [dart.legacy(dart.fnType(dart.void, [dart.legacy(error_details$46pb.PreconditionFailure_Violation)]))]),
    createEmptyInstance: dart.fnType(dart.legacy(error_details$46pb.PreconditionFailure_Violation), []),
    hasType: dart.fnType(dart.legacy(core.bool), []),
    clearType: dart.fnType(dart.void, []),
    hasSubject: dart.fnType(dart.legacy(core.bool), []),
    clearSubject: dart.fnType(dart.void, []),
    hasDescription: dart.fnType(dart.legacy(core.bool), []),
    clearDescription: dart.fnType(dart.void, [])
  }));
  dart.setGetterSignature(error_details$46pb.PreconditionFailure_Violation, () => ({
    __proto__: dart.getGetters(error_details$46pb.PreconditionFailure_Violation.__proto__),
    info_: dart.legacy(protobuf.BuilderInfo),
    type: dart.legacy(core.String),
    subject: dart.legacy(core.String),
    description: dart.legacy(core.String)
  }));
  dart.setSetterSignature(error_details$46pb.PreconditionFailure_Violation, () => ({
    __proto__: dart.getSetters(error_details$46pb.PreconditionFailure_Violation.__proto__),
    type: dart.legacy(core.String),
    subject: dart.legacy(core.String),
    description: dart.legacy(core.String)
  }));
  dart.setLibraryUri(error_details$46pb.PreconditionFailure_Violation, L2);
  dart.defineLazy(error_details$46pb.PreconditionFailure_Violation, {
    /*error_details$46pb.PreconditionFailure_Violation._i*/get _i() {
      let t0;
      return t0 = new protobuf.BuilderInfo.new(false ? "" : "PreconditionFailure.Violation", {package: C2 || CT.C2, createEmptyInstance: C13 || CT.C13}), (() => {
        t0.aOS(1, false ? "" : "type");
        t0.aOS(2, false ? "" : "subject");
        t0.aOS(3, false ? "" : "description");
        t0.hasRequiredFields = false;
        return t0;
      })();
    },
    /*error_details$46pb.PreconditionFailure_Violation._defaultInstance*/get _defaultInstance() {
      return null;
    },
    set _defaultInstance(_) {}
  }, true);
  var C14;
  error_details$46pb.PreconditionFailure = class PreconditionFailure extends protobuf.GeneratedMessage {
    static new() {
      return error_details$46pb.PreconditionFailure.create();
    }
    static fromBuffer(i, r = C0 || CT.C0) {
      let t0;
      t0 = error_details$46pb.PreconditionFailure.create();
      return (() => {
        t0.mergeFromBuffer(i, r);
        return t0;
      })();
    }
    static fromJson(i, r = C0 || CT.C0) {
      let t0;
      t0 = error_details$46pb.PreconditionFailure.create();
      return (() => {
        t0.mergeFromJson(i, r);
        return t0;
      })();
    }
    clone() {
      let t0;
      t0 = error_details$46pb.PreconditionFailure.new();
      return (() => {
        t0.mergeFromMessage(this);
        return t0;
      })();
    }
    copyWith(updates) {
      return PreconditionFailureL().as(super.copyWith(dart.fn(message => updates(PreconditionFailureL().as(message)), GeneratedMessageLTovoid())));
    }
    get info_() {
      return error_details$46pb.PreconditionFailure._i;
    }
    static create() {
      return new error_details$46pb.PreconditionFailure.__();
    }
    createEmptyInstance() {
      return error_details$46pb.PreconditionFailure.create();
    }
    static createRepeated() {
      return new (PbListOfPreconditionFailureL()).new();
    }
    static getDefault() {
      let t0;
      t0 = error_details$46pb.PreconditionFailure._defaultInstance;
      return t0 == null ? error_details$46pb.PreconditionFailure._defaultInstance = protobuf.GeneratedMessage.$_defaultFor(PreconditionFailureL(), C14 || CT.C14) : t0;
    }
    get violations() {
      return this.$_getList(PreconditionFailure_ViolationL(), 0);
    }
  };
  (error_details$46pb.PreconditionFailure.__ = function() {
    error_details$46pb.PreconditionFailure.__proto__.new.call(this);
    ;
  }).prototype = error_details$46pb.PreconditionFailure.prototype;
  dart.addTypeTests(error_details$46pb.PreconditionFailure);
  dart.addTypeCaches(error_details$46pb.PreconditionFailure);
  dart.setMethodSignature(error_details$46pb.PreconditionFailure, () => ({
    __proto__: dart.getMethods(error_details$46pb.PreconditionFailure.__proto__),
    clone: dart.fnType(dart.legacy(error_details$46pb.PreconditionFailure), []),
    copyWith: dart.fnType(dart.legacy(error_details$46pb.PreconditionFailure), [dart.legacy(dart.fnType(dart.void, [dart.legacy(error_details$46pb.PreconditionFailure)]))]),
    createEmptyInstance: dart.fnType(dart.legacy(error_details$46pb.PreconditionFailure), [])
  }));
  dart.setGetterSignature(error_details$46pb.PreconditionFailure, () => ({
    __proto__: dart.getGetters(error_details$46pb.PreconditionFailure.__proto__),
    info_: dart.legacy(protobuf.BuilderInfo),
    violations: dart.legacy(core.List$(dart.legacy(error_details$46pb.PreconditionFailure_Violation)))
  }));
  dart.setLibraryUri(error_details$46pb.PreconditionFailure, L2);
  dart.defineLazy(error_details$46pb.PreconditionFailure, {
    /*error_details$46pb.PreconditionFailure._i*/get _i() {
      let t0;
      return t0 = new protobuf.BuilderInfo.new(false ? "" : "PreconditionFailure", {package: C2 || CT.C2, createEmptyInstance: C14 || CT.C14}), (() => {
        t0.pc(PreconditionFailure_ViolationL(), 1, false ? "" : "violations", 2097154, {subBuilder: C13 || CT.C13});
        t0.hasRequiredFields = false;
        return t0;
      })();
    },
    /*error_details$46pb.PreconditionFailure._defaultInstance*/get _defaultInstance() {
      return null;
    },
    set _defaultInstance(_) {}
  }, true);
  var C15;
  error_details$46pb.BadRequest_FieldViolation = class BadRequest_FieldViolation extends protobuf.GeneratedMessage {
    static new() {
      return error_details$46pb.BadRequest_FieldViolation.create();
    }
    static fromBuffer(i, r = C0 || CT.C0) {
      let t0;
      t0 = error_details$46pb.BadRequest_FieldViolation.create();
      return (() => {
        t0.mergeFromBuffer(i, r);
        return t0;
      })();
    }
    static fromJson(i, r = C0 || CT.C0) {
      let t0;
      t0 = error_details$46pb.BadRequest_FieldViolation.create();
      return (() => {
        t0.mergeFromJson(i, r);
        return t0;
      })();
    }
    clone() {
      let t0;
      t0 = error_details$46pb.BadRequest_FieldViolation.new();
      return (() => {
        t0.mergeFromMessage(this);
        return t0;
      })();
    }
    copyWith(updates) {
      return BadRequest_FieldViolationL().as(super.copyWith(dart.fn(message => updates(BadRequest_FieldViolationL().as(message)), GeneratedMessageLTovoid())));
    }
    get info_() {
      return error_details$46pb.BadRequest_FieldViolation._i;
    }
    static create() {
      return new error_details$46pb.BadRequest_FieldViolation.__();
    }
    createEmptyInstance() {
      return error_details$46pb.BadRequest_FieldViolation.create();
    }
    static createRepeated() {
      return new (PbListOfBadRequest_FieldViolationL()).new();
    }
    static getDefault() {
      let t0;
      t0 = error_details$46pb.BadRequest_FieldViolation._defaultInstance;
      return t0 == null ? error_details$46pb.BadRequest_FieldViolation._defaultInstance = protobuf.GeneratedMessage.$_defaultFor(BadRequest_FieldViolationL(), C15 || CT.C15) : t0;
    }
    get field_1() {
      return this.$_getSZ(0);
    }
    set field_1(v) {
      this.$_setString(0, v);
    }
    hasField_1() {
      return this.$_has(0);
    }
    clearField_1() {
      return this.clearField(1);
    }
    get description() {
      return this.$_getSZ(1);
    }
    set description(v) {
      this.$_setString(1, v);
    }
    hasDescription() {
      return this.$_has(1);
    }
    clearDescription() {
      return this.clearField(2);
    }
  };
  (error_details$46pb.BadRequest_FieldViolation.__ = function() {
    error_details$46pb.BadRequest_FieldViolation.__proto__.new.call(this);
    ;
  }).prototype = error_details$46pb.BadRequest_FieldViolation.prototype;
  dart.addTypeTests(error_details$46pb.BadRequest_FieldViolation);
  dart.addTypeCaches(error_details$46pb.BadRequest_FieldViolation);
  dart.setMethodSignature(error_details$46pb.BadRequest_FieldViolation, () => ({
    __proto__: dart.getMethods(error_details$46pb.BadRequest_FieldViolation.__proto__),
    clone: dart.fnType(dart.legacy(error_details$46pb.BadRequest_FieldViolation), []),
    copyWith: dart.fnType(dart.legacy(error_details$46pb.BadRequest_FieldViolation), [dart.legacy(dart.fnType(dart.void, [dart.legacy(error_details$46pb.BadRequest_FieldViolation)]))]),
    createEmptyInstance: dart.fnType(dart.legacy(error_details$46pb.BadRequest_FieldViolation), []),
    hasField_1: dart.fnType(dart.legacy(core.bool), []),
    clearField_1: dart.fnType(dart.void, []),
    hasDescription: dart.fnType(dart.legacy(core.bool), []),
    clearDescription: dart.fnType(dart.void, [])
  }));
  dart.setGetterSignature(error_details$46pb.BadRequest_FieldViolation, () => ({
    __proto__: dart.getGetters(error_details$46pb.BadRequest_FieldViolation.__proto__),
    info_: dart.legacy(protobuf.BuilderInfo),
    field_1: dart.legacy(core.String),
    description: dart.legacy(core.String)
  }));
  dart.setSetterSignature(error_details$46pb.BadRequest_FieldViolation, () => ({
    __proto__: dart.getSetters(error_details$46pb.BadRequest_FieldViolation.__proto__),
    field_1: dart.legacy(core.String),
    description: dart.legacy(core.String)
  }));
  dart.setLibraryUri(error_details$46pb.BadRequest_FieldViolation, L2);
  dart.defineLazy(error_details$46pb.BadRequest_FieldViolation, {
    /*error_details$46pb.BadRequest_FieldViolation._i*/get _i() {
      let t0;
      return t0 = new protobuf.BuilderInfo.new(false ? "" : "BadRequest.FieldViolation", {package: C2 || CT.C2, createEmptyInstance: C15 || CT.C15}), (() => {
        t0.aOS(1, false ? "" : "field");
        t0.aOS(2, false ? "" : "description");
        t0.hasRequiredFields = false;
        return t0;
      })();
    },
    /*error_details$46pb.BadRequest_FieldViolation._defaultInstance*/get _defaultInstance() {
      return null;
    },
    set _defaultInstance(_) {}
  }, true);
  var C16;
  error_details$46pb.BadRequest = class BadRequest extends protobuf.GeneratedMessage {
    static new() {
      return error_details$46pb.BadRequest.create();
    }
    static fromBuffer(i, r = C0 || CT.C0) {
      let t0;
      t0 = error_details$46pb.BadRequest.create();
      return (() => {
        t0.mergeFromBuffer(i, r);
        return t0;
      })();
    }
    static fromJson(i, r = C0 || CT.C0) {
      let t0;
      t0 = error_details$46pb.BadRequest.create();
      return (() => {
        t0.mergeFromJson(i, r);
        return t0;
      })();
    }
    clone() {
      let t0;
      t0 = error_details$46pb.BadRequest.new();
      return (() => {
        t0.mergeFromMessage(this);
        return t0;
      })();
    }
    copyWith(updates) {
      return BadRequestL().as(super.copyWith(dart.fn(message => updates(BadRequestL().as(message)), GeneratedMessageLTovoid())));
    }
    get info_() {
      return error_details$46pb.BadRequest._i;
    }
    static create() {
      return new error_details$46pb.BadRequest.__();
    }
    createEmptyInstance() {
      return error_details$46pb.BadRequest.create();
    }
    static createRepeated() {
      return new (PbListOfBadRequestL()).new();
    }
    static getDefault() {
      let t0;
      t0 = error_details$46pb.BadRequest._defaultInstance;
      return t0 == null ? error_details$46pb.BadRequest._defaultInstance = protobuf.GeneratedMessage.$_defaultFor(BadRequestL(), C16 || CT.C16) : t0;
    }
    get fieldViolations() {
      return this.$_getList(BadRequest_FieldViolationL(), 0);
    }
  };
  (error_details$46pb.BadRequest.__ = function() {
    error_details$46pb.BadRequest.__proto__.new.call(this);
    ;
  }).prototype = error_details$46pb.BadRequest.prototype;
  dart.addTypeTests(error_details$46pb.BadRequest);
  dart.addTypeCaches(error_details$46pb.BadRequest);
  dart.setMethodSignature(error_details$46pb.BadRequest, () => ({
    __proto__: dart.getMethods(error_details$46pb.BadRequest.__proto__),
    clone: dart.fnType(dart.legacy(error_details$46pb.BadRequest), []),
    copyWith: dart.fnType(dart.legacy(error_details$46pb.BadRequest), [dart.legacy(dart.fnType(dart.void, [dart.legacy(error_details$46pb.BadRequest)]))]),
    createEmptyInstance: dart.fnType(dart.legacy(error_details$46pb.BadRequest), [])
  }));
  dart.setGetterSignature(error_details$46pb.BadRequest, () => ({
    __proto__: dart.getGetters(error_details$46pb.BadRequest.__proto__),
    info_: dart.legacy(protobuf.BuilderInfo),
    fieldViolations: dart.legacy(core.List$(dart.legacy(error_details$46pb.BadRequest_FieldViolation)))
  }));
  dart.setLibraryUri(error_details$46pb.BadRequest, L2);
  dart.defineLazy(error_details$46pb.BadRequest, {
    /*error_details$46pb.BadRequest._i*/get _i() {
      let t0;
      return t0 = new protobuf.BuilderInfo.new(false ? "" : "BadRequest", {package: C2 || CT.C2, createEmptyInstance: C16 || CT.C16}), (() => {
        t0.pc(BadRequest_FieldViolationL(), 1, false ? "" : "fieldViolations", 2097154, {subBuilder: C15 || CT.C15});
        t0.hasRequiredFields = false;
        return t0;
      })();
    },
    /*error_details$46pb.BadRequest._defaultInstance*/get _defaultInstance() {
      return null;
    },
    set _defaultInstance(_) {}
  }, true);
  var C17;
  error_details$46pb.RequestInfo = class RequestInfo extends protobuf.GeneratedMessage {
    static new() {
      return error_details$46pb.RequestInfo.create();
    }
    static fromBuffer(i, r = C0 || CT.C0) {
      let t0;
      t0 = error_details$46pb.RequestInfo.create();
      return (() => {
        t0.mergeFromBuffer(i, r);
        return t0;
      })();
    }
    static fromJson(i, r = C0 || CT.C0) {
      let t0;
      t0 = error_details$46pb.RequestInfo.create();
      return (() => {
        t0.mergeFromJson(i, r);
        return t0;
      })();
    }
    clone() {
      let t0;
      t0 = error_details$46pb.RequestInfo.new();
      return (() => {
        t0.mergeFromMessage(this);
        return t0;
      })();
    }
    copyWith(updates) {
      return RequestInfoL().as(super.copyWith(dart.fn(message => updates(RequestInfoL().as(message)), GeneratedMessageLTovoid())));
    }
    get info_() {
      return error_details$46pb.RequestInfo._i;
    }
    static create() {
      return new error_details$46pb.RequestInfo.__();
    }
    createEmptyInstance() {
      return error_details$46pb.RequestInfo.create();
    }
    static createRepeated() {
      return new (PbListOfRequestInfoL()).new();
    }
    static getDefault() {
      let t0;
      t0 = error_details$46pb.RequestInfo._defaultInstance;
      return t0 == null ? error_details$46pb.RequestInfo._defaultInstance = protobuf.GeneratedMessage.$_defaultFor(RequestInfoL(), C17 || CT.C17) : t0;
    }
    get requestId() {
      return this.$_getSZ(0);
    }
    set requestId(v) {
      this.$_setString(0, v);
    }
    hasRequestId() {
      return this.$_has(0);
    }
    clearRequestId() {
      return this.clearField(1);
    }
    get servingData() {
      return this.$_getSZ(1);
    }
    set servingData(v) {
      this.$_setString(1, v);
    }
    hasServingData() {
      return this.$_has(1);
    }
    clearServingData() {
      return this.clearField(2);
    }
  };
  (error_details$46pb.RequestInfo.__ = function() {
    error_details$46pb.RequestInfo.__proto__.new.call(this);
    ;
  }).prototype = error_details$46pb.RequestInfo.prototype;
  dart.addTypeTests(error_details$46pb.RequestInfo);
  dart.addTypeCaches(error_details$46pb.RequestInfo);
  dart.setMethodSignature(error_details$46pb.RequestInfo, () => ({
    __proto__: dart.getMethods(error_details$46pb.RequestInfo.__proto__),
    clone: dart.fnType(dart.legacy(error_details$46pb.RequestInfo), []),
    copyWith: dart.fnType(dart.legacy(error_details$46pb.RequestInfo), [dart.legacy(dart.fnType(dart.void, [dart.legacy(error_details$46pb.RequestInfo)]))]),
    createEmptyInstance: dart.fnType(dart.legacy(error_details$46pb.RequestInfo), []),
    hasRequestId: dart.fnType(dart.legacy(core.bool), []),
    clearRequestId: dart.fnType(dart.void, []),
    hasServingData: dart.fnType(dart.legacy(core.bool), []),
    clearServingData: dart.fnType(dart.void, [])
  }));
  dart.setGetterSignature(error_details$46pb.RequestInfo, () => ({
    __proto__: dart.getGetters(error_details$46pb.RequestInfo.__proto__),
    info_: dart.legacy(protobuf.BuilderInfo),
    requestId: dart.legacy(core.String),
    servingData: dart.legacy(core.String)
  }));
  dart.setSetterSignature(error_details$46pb.RequestInfo, () => ({
    __proto__: dart.getSetters(error_details$46pb.RequestInfo.__proto__),
    requestId: dart.legacy(core.String),
    servingData: dart.legacy(core.String)
  }));
  dart.setLibraryUri(error_details$46pb.RequestInfo, L2);
  dart.defineLazy(error_details$46pb.RequestInfo, {
    /*error_details$46pb.RequestInfo._i*/get _i() {
      let t0;
      return t0 = new protobuf.BuilderInfo.new(false ? "" : "RequestInfo", {package: C2 || CT.C2, createEmptyInstance: C17 || CT.C17}), (() => {
        t0.aOS(1, false ? "" : "requestId");
        t0.aOS(2, false ? "" : "servingData");
        t0.hasRequiredFields = false;
        return t0;
      })();
    },
    /*error_details$46pb.RequestInfo._defaultInstance*/get _defaultInstance() {
      return null;
    },
    set _defaultInstance(_) {}
  }, true);
  var C18;
  error_details$46pb.ResourceInfo = class ResourceInfo extends protobuf.GeneratedMessage {
    static new() {
      return error_details$46pb.ResourceInfo.create();
    }
    static fromBuffer(i, r = C0 || CT.C0) {
      let t0;
      t0 = error_details$46pb.ResourceInfo.create();
      return (() => {
        t0.mergeFromBuffer(i, r);
        return t0;
      })();
    }
    static fromJson(i, r = C0 || CT.C0) {
      let t0;
      t0 = error_details$46pb.ResourceInfo.create();
      return (() => {
        t0.mergeFromJson(i, r);
        return t0;
      })();
    }
    clone() {
      let t0;
      t0 = error_details$46pb.ResourceInfo.new();
      return (() => {
        t0.mergeFromMessage(this);
        return t0;
      })();
    }
    copyWith(updates) {
      return ResourceInfoL().as(super.copyWith(dart.fn(message => updates(ResourceInfoL().as(message)), GeneratedMessageLTovoid())));
    }
    get info_() {
      return error_details$46pb.ResourceInfo._i;
    }
    static create() {
      return new error_details$46pb.ResourceInfo.__();
    }
    createEmptyInstance() {
      return error_details$46pb.ResourceInfo.create();
    }
    static createRepeated() {
      return new (PbListOfResourceInfoL()).new();
    }
    static getDefault() {
      let t0;
      t0 = error_details$46pb.ResourceInfo._defaultInstance;
      return t0 == null ? error_details$46pb.ResourceInfo._defaultInstance = protobuf.GeneratedMessage.$_defaultFor(ResourceInfoL(), C18 || CT.C18) : t0;
    }
    get resourceType() {
      return this.$_getSZ(0);
    }
    set resourceType(v) {
      this.$_setString(0, v);
    }
    hasResourceType() {
      return this.$_has(0);
    }
    clearResourceType() {
      return this.clearField(1);
    }
    get resourceName() {
      return this.$_getSZ(1);
    }
    set resourceName(v) {
      this.$_setString(1, v);
    }
    hasResourceName() {
      return this.$_has(1);
    }
    clearResourceName() {
      return this.clearField(2);
    }
    get owner() {
      return this.$_getSZ(2);
    }
    set owner(v) {
      this.$_setString(2, v);
    }
    hasOwner() {
      return this.$_has(2);
    }
    clearOwner() {
      return this.clearField(3);
    }
    get description() {
      return this.$_getSZ(3);
    }
    set description(v) {
      this.$_setString(3, v);
    }
    hasDescription() {
      return this.$_has(3);
    }
    clearDescription() {
      return this.clearField(4);
    }
  };
  (error_details$46pb.ResourceInfo.__ = function() {
    error_details$46pb.ResourceInfo.__proto__.new.call(this);
    ;
  }).prototype = error_details$46pb.ResourceInfo.prototype;
  dart.addTypeTests(error_details$46pb.ResourceInfo);
  dart.addTypeCaches(error_details$46pb.ResourceInfo);
  dart.setMethodSignature(error_details$46pb.ResourceInfo, () => ({
    __proto__: dart.getMethods(error_details$46pb.ResourceInfo.__proto__),
    clone: dart.fnType(dart.legacy(error_details$46pb.ResourceInfo), []),
    copyWith: dart.fnType(dart.legacy(error_details$46pb.ResourceInfo), [dart.legacy(dart.fnType(dart.void, [dart.legacy(error_details$46pb.ResourceInfo)]))]),
    createEmptyInstance: dart.fnType(dart.legacy(error_details$46pb.ResourceInfo), []),
    hasResourceType: dart.fnType(dart.legacy(core.bool), []),
    clearResourceType: dart.fnType(dart.void, []),
    hasResourceName: dart.fnType(dart.legacy(core.bool), []),
    clearResourceName: dart.fnType(dart.void, []),
    hasOwner: dart.fnType(dart.legacy(core.bool), []),
    clearOwner: dart.fnType(dart.void, []),
    hasDescription: dart.fnType(dart.legacy(core.bool), []),
    clearDescription: dart.fnType(dart.void, [])
  }));
  dart.setGetterSignature(error_details$46pb.ResourceInfo, () => ({
    __proto__: dart.getGetters(error_details$46pb.ResourceInfo.__proto__),
    info_: dart.legacy(protobuf.BuilderInfo),
    resourceType: dart.legacy(core.String),
    resourceName: dart.legacy(core.String),
    owner: dart.legacy(core.String),
    description: dart.legacy(core.String)
  }));
  dart.setSetterSignature(error_details$46pb.ResourceInfo, () => ({
    __proto__: dart.getSetters(error_details$46pb.ResourceInfo.__proto__),
    resourceType: dart.legacy(core.String),
    resourceName: dart.legacy(core.String),
    owner: dart.legacy(core.String),
    description: dart.legacy(core.String)
  }));
  dart.setLibraryUri(error_details$46pb.ResourceInfo, L2);
  dart.defineLazy(error_details$46pb.ResourceInfo, {
    /*error_details$46pb.ResourceInfo._i*/get _i() {
      let t0;
      return t0 = new protobuf.BuilderInfo.new(false ? "" : "ResourceInfo", {package: C2 || CT.C2, createEmptyInstance: C18 || CT.C18}), (() => {
        t0.aOS(1, false ? "" : "resourceType");
        t0.aOS(2, false ? "" : "resourceName");
        t0.aOS(3, false ? "" : "owner");
        t0.aOS(4, false ? "" : "description");
        t0.hasRequiredFields = false;
        return t0;
      })();
    },
    /*error_details$46pb.ResourceInfo._defaultInstance*/get _defaultInstance() {
      return null;
    },
    set _defaultInstance(_) {}
  }, true);
  var C19;
  error_details$46pb.Help_Link = class Help_Link extends protobuf.GeneratedMessage {
    static new() {
      return error_details$46pb.Help_Link.create();
    }
    static fromBuffer(i, r = C0 || CT.C0) {
      let t0;
      t0 = error_details$46pb.Help_Link.create();
      return (() => {
        t0.mergeFromBuffer(i, r);
        return t0;
      })();
    }
    static fromJson(i, r = C0 || CT.C0) {
      let t0;
      t0 = error_details$46pb.Help_Link.create();
      return (() => {
        t0.mergeFromJson(i, r);
        return t0;
      })();
    }
    clone() {
      let t0;
      t0 = error_details$46pb.Help_Link.new();
      return (() => {
        t0.mergeFromMessage(this);
        return t0;
      })();
    }
    copyWith(updates) {
      return Help_LinkL().as(super.copyWith(dart.fn(message => updates(Help_LinkL().as(message)), GeneratedMessageLTovoid())));
    }
    get info_() {
      return error_details$46pb.Help_Link._i;
    }
    static create() {
      return new error_details$46pb.Help_Link.__();
    }
    createEmptyInstance() {
      return error_details$46pb.Help_Link.create();
    }
    static createRepeated() {
      return new (PbListOfHelp_LinkL()).new();
    }
    static getDefault() {
      let t0;
      t0 = error_details$46pb.Help_Link._defaultInstance;
      return t0 == null ? error_details$46pb.Help_Link._defaultInstance = protobuf.GeneratedMessage.$_defaultFor(Help_LinkL(), C19 || CT.C19) : t0;
    }
    get description() {
      return this.$_getSZ(0);
    }
    set description(v) {
      this.$_setString(0, v);
    }
    hasDescription() {
      return this.$_has(0);
    }
    clearDescription() {
      return this.clearField(1);
    }
    get url() {
      return this.$_getSZ(1);
    }
    set url(v) {
      this.$_setString(1, v);
    }
    hasUrl() {
      return this.$_has(1);
    }
    clearUrl() {
      return this.clearField(2);
    }
  };
  (error_details$46pb.Help_Link.__ = function() {
    error_details$46pb.Help_Link.__proto__.new.call(this);
    ;
  }).prototype = error_details$46pb.Help_Link.prototype;
  dart.addTypeTests(error_details$46pb.Help_Link);
  dart.addTypeCaches(error_details$46pb.Help_Link);
  dart.setMethodSignature(error_details$46pb.Help_Link, () => ({
    __proto__: dart.getMethods(error_details$46pb.Help_Link.__proto__),
    clone: dart.fnType(dart.legacy(error_details$46pb.Help_Link), []),
    copyWith: dart.fnType(dart.legacy(error_details$46pb.Help_Link), [dart.legacy(dart.fnType(dart.void, [dart.legacy(error_details$46pb.Help_Link)]))]),
    createEmptyInstance: dart.fnType(dart.legacy(error_details$46pb.Help_Link), []),
    hasDescription: dart.fnType(dart.legacy(core.bool), []),
    clearDescription: dart.fnType(dart.void, []),
    hasUrl: dart.fnType(dart.legacy(core.bool), []),
    clearUrl: dart.fnType(dart.void, [])
  }));
  dart.setGetterSignature(error_details$46pb.Help_Link, () => ({
    __proto__: dart.getGetters(error_details$46pb.Help_Link.__proto__),
    info_: dart.legacy(protobuf.BuilderInfo),
    description: dart.legacy(core.String),
    url: dart.legacy(core.String)
  }));
  dart.setSetterSignature(error_details$46pb.Help_Link, () => ({
    __proto__: dart.getSetters(error_details$46pb.Help_Link.__proto__),
    description: dart.legacy(core.String),
    url: dart.legacy(core.String)
  }));
  dart.setLibraryUri(error_details$46pb.Help_Link, L2);
  dart.defineLazy(error_details$46pb.Help_Link, {
    /*error_details$46pb.Help_Link._i*/get _i() {
      let t0;
      return t0 = new protobuf.BuilderInfo.new(false ? "" : "Help.Link", {package: C2 || CT.C2, createEmptyInstance: C19 || CT.C19}), (() => {
        t0.aOS(1, false ? "" : "description");
        t0.aOS(2, false ? "" : "url");
        t0.hasRequiredFields = false;
        return t0;
      })();
    },
    /*error_details$46pb.Help_Link._defaultInstance*/get _defaultInstance() {
      return null;
    },
    set _defaultInstance(_) {}
  }, true);
  var C20;
  error_details$46pb.Help = class Help extends protobuf.GeneratedMessage {
    static new() {
      return error_details$46pb.Help.create();
    }
    static fromBuffer(i, r = C0 || CT.C0) {
      let t0;
      t0 = error_details$46pb.Help.create();
      return (() => {
        t0.mergeFromBuffer(i, r);
        return t0;
      })();
    }
    static fromJson(i, r = C0 || CT.C0) {
      let t0;
      t0 = error_details$46pb.Help.create();
      return (() => {
        t0.mergeFromJson(i, r);
        return t0;
      })();
    }
    clone() {
      let t0;
      t0 = error_details$46pb.Help.new();
      return (() => {
        t0.mergeFromMessage(this);
        return t0;
      })();
    }
    copyWith(updates) {
      return HelpL().as(super.copyWith(dart.fn(message => updates(HelpL().as(message)), GeneratedMessageLTovoid())));
    }
    get info_() {
      return error_details$46pb.Help._i;
    }
    static create() {
      return new error_details$46pb.Help.__();
    }
    createEmptyInstance() {
      return error_details$46pb.Help.create();
    }
    static createRepeated() {
      return new (PbListOfHelpL()).new();
    }
    static getDefault() {
      let t0;
      t0 = error_details$46pb.Help._defaultInstance;
      return t0 == null ? error_details$46pb.Help._defaultInstance = protobuf.GeneratedMessage.$_defaultFor(HelpL(), C20 || CT.C20) : t0;
    }
    get links() {
      return this.$_getList(Help_LinkL(), 0);
    }
  };
  (error_details$46pb.Help.__ = function() {
    error_details$46pb.Help.__proto__.new.call(this);
    ;
  }).prototype = error_details$46pb.Help.prototype;
  dart.addTypeTests(error_details$46pb.Help);
  dart.addTypeCaches(error_details$46pb.Help);
  dart.setMethodSignature(error_details$46pb.Help, () => ({
    __proto__: dart.getMethods(error_details$46pb.Help.__proto__),
    clone: dart.fnType(dart.legacy(error_details$46pb.Help), []),
    copyWith: dart.fnType(dart.legacy(error_details$46pb.Help), [dart.legacy(dart.fnType(dart.void, [dart.legacy(error_details$46pb.Help)]))]),
    createEmptyInstance: dart.fnType(dart.legacy(error_details$46pb.Help), [])
  }));
  dart.setGetterSignature(error_details$46pb.Help, () => ({
    __proto__: dart.getGetters(error_details$46pb.Help.__proto__),
    info_: dart.legacy(protobuf.BuilderInfo),
    links: dart.legacy(core.List$(dart.legacy(error_details$46pb.Help_Link)))
  }));
  dart.setLibraryUri(error_details$46pb.Help, L2);
  dart.defineLazy(error_details$46pb.Help, {
    /*error_details$46pb.Help._i*/get _i() {
      let t0;
      return t0 = new protobuf.BuilderInfo.new(false ? "" : "Help", {package: C2 || CT.C2, createEmptyInstance: C20 || CT.C20}), (() => {
        t0.pc(Help_LinkL(), 1, false ? "" : "links", 2097154, {subBuilder: C19 || CT.C19});
        t0.hasRequiredFields = false;
        return t0;
      })();
    },
    /*error_details$46pb.Help._defaultInstance*/get _defaultInstance() {
      return null;
    },
    set _defaultInstance(_) {}
  }, true);
  var C21;
  error_details$46pb.LocalizedMessage = class LocalizedMessage extends protobuf.GeneratedMessage {
    static new() {
      return error_details$46pb.LocalizedMessage.create();
    }
    static fromBuffer(i, r = C0 || CT.C0) {
      let t0;
      t0 = error_details$46pb.LocalizedMessage.create();
      return (() => {
        t0.mergeFromBuffer(i, r);
        return t0;
      })();
    }
    static fromJson(i, r = C0 || CT.C0) {
      let t0;
      t0 = error_details$46pb.LocalizedMessage.create();
      return (() => {
        t0.mergeFromJson(i, r);
        return t0;
      })();
    }
    clone() {
      let t0;
      t0 = error_details$46pb.LocalizedMessage.new();
      return (() => {
        t0.mergeFromMessage(this);
        return t0;
      })();
    }
    copyWith(updates) {
      return LocalizedMessageL().as(super.copyWith(dart.fn(message => updates(LocalizedMessageL().as(message)), GeneratedMessageLTovoid())));
    }
    get info_() {
      return error_details$46pb.LocalizedMessage._i;
    }
    static create() {
      return new error_details$46pb.LocalizedMessage.__();
    }
    createEmptyInstance() {
      return error_details$46pb.LocalizedMessage.create();
    }
    static createRepeated() {
      return new (PbListOfLocalizedMessageL()).new();
    }
    static getDefault() {
      let t0;
      t0 = error_details$46pb.LocalizedMessage._defaultInstance;
      return t0 == null ? error_details$46pb.LocalizedMessage._defaultInstance = protobuf.GeneratedMessage.$_defaultFor(LocalizedMessageL(), C21 || CT.C21) : t0;
    }
    get locale() {
      return this.$_getSZ(0);
    }
    set locale(v) {
      this.$_setString(0, v);
    }
    hasLocale() {
      return this.$_has(0);
    }
    clearLocale() {
      return this.clearField(1);
    }
    get message() {
      return this.$_getSZ(1);
    }
    set message(v) {
      this.$_setString(1, v);
    }
    hasMessage() {
      return this.$_has(1);
    }
    clearMessage() {
      return this.clearField(2);
    }
  };
  (error_details$46pb.LocalizedMessage.__ = function() {
    error_details$46pb.LocalizedMessage.__proto__.new.call(this);
    ;
  }).prototype = error_details$46pb.LocalizedMessage.prototype;
  dart.addTypeTests(error_details$46pb.LocalizedMessage);
  dart.addTypeCaches(error_details$46pb.LocalizedMessage);
  dart.setMethodSignature(error_details$46pb.LocalizedMessage, () => ({
    __proto__: dart.getMethods(error_details$46pb.LocalizedMessage.__proto__),
    clone: dart.fnType(dart.legacy(error_details$46pb.LocalizedMessage), []),
    copyWith: dart.fnType(dart.legacy(error_details$46pb.LocalizedMessage), [dart.legacy(dart.fnType(dart.void, [dart.legacy(error_details$46pb.LocalizedMessage)]))]),
    createEmptyInstance: dart.fnType(dart.legacy(error_details$46pb.LocalizedMessage), []),
    hasLocale: dart.fnType(dart.legacy(core.bool), []),
    clearLocale: dart.fnType(dart.void, []),
    hasMessage: dart.fnType(dart.legacy(core.bool), []),
    clearMessage: dart.fnType(dart.void, [])
  }));
  dart.setGetterSignature(error_details$46pb.LocalizedMessage, () => ({
    __proto__: dart.getGetters(error_details$46pb.LocalizedMessage.__proto__),
    info_: dart.legacy(protobuf.BuilderInfo),
    locale: dart.legacy(core.String),
    message: dart.legacy(core.String)
  }));
  dart.setSetterSignature(error_details$46pb.LocalizedMessage, () => ({
    __proto__: dart.getSetters(error_details$46pb.LocalizedMessage.__proto__),
    locale: dart.legacy(core.String),
    message: dart.legacy(core.String)
  }));
  dart.setLibraryUri(error_details$46pb.LocalizedMessage, L2);
  dart.defineLazy(error_details$46pb.LocalizedMessage, {
    /*error_details$46pb.LocalizedMessage._i*/get _i() {
      let t0;
      return t0 = new protobuf.BuilderInfo.new(false ? "" : "LocalizedMessage", {package: C2 || CT.C2, createEmptyInstance: C21 || CT.C21}), (() => {
        t0.aOS(1, false ? "" : "locale");
        t0.aOS(2, false ? "" : "message");
        t0.hasRequiredFields = false;
        return t0;
      })();
    },
    /*error_details$46pb.LocalizedMessage._defaultInstance*/get _defaultInstance() {
      return null;
    },
    set _defaultInstance(_) {}
  }, true);
  var C22;
  var C23;
  const GeneratedMessage_DurationMixin$36 = class GeneratedMessage_DurationMixin extends protobuf.GeneratedMessage {};
  (GeneratedMessage_DurationMixin$36.new = function() {
    GeneratedMessage_DurationMixin$36.__proto__.new.call(this);
  }).prototype = GeneratedMessage_DurationMixin$36.prototype;
  (GeneratedMessage_DurationMixin$36.fromBuffer = function(input, extensionRegistry) {
    GeneratedMessage_DurationMixin$36.__proto__.fromBuffer.call(this, input, extensionRegistry);
  }).prototype = GeneratedMessage_DurationMixin$36.prototype;
  (GeneratedMessage_DurationMixin$36.fromJson = function(input, extensionRegistry) {
    GeneratedMessage_DurationMixin$36.__proto__.fromJson.call(this, input, extensionRegistry);
  }).prototype = GeneratedMessage_DurationMixin$36.prototype;
  dart.applyMixin(GeneratedMessage_DurationMixin$36, well_known.DurationMixin);
  duration$46pb.Duration = class Duration extends GeneratedMessage_DurationMixin$36 {
    static new() {
      return duration$46pb.Duration.create();
    }
    static fromBuffer(i, r = C0 || CT.C0) {
      let t0;
      t0 = duration$46pb.Duration.create();
      return (() => {
        t0.mergeFromBuffer(i, r);
        return t0;
      })();
    }
    static fromJson(i, r = C0 || CT.C0) {
      let t0;
      t0 = duration$46pb.Duration.create();
      return (() => {
        t0.mergeFromJson(i, r);
        return t0;
      })();
    }
    clone() {
      let t0;
      t0 = duration$46pb.Duration.new();
      return (() => {
        t0.mergeFromMessage(this);
        return t0;
      })();
    }
    copyWith(updates) {
      return DurationL().as(super.copyWith(dart.fn(message => updates(DurationL().as(message)), GeneratedMessageLTovoid())));
    }
    get info_() {
      return duration$46pb.Duration._i;
    }
    static create() {
      return new duration$46pb.Duration.__();
    }
    createEmptyInstance() {
      return duration$46pb.Duration.create();
    }
    static createRepeated() {
      return new (PbListOfDurationL()).new();
    }
    static getDefault() {
      let t0;
      t0 = duration$46pb.Duration._defaultInstance;
      return t0 == null ? duration$46pb.Duration._defaultInstance = protobuf.GeneratedMessage.$_defaultFor(DurationL(), C8 || CT.C8) : t0;
    }
    get seconds() {
      return this.$_getI64(0);
    }
    set seconds(v) {
      this.$_setInt64(0, v);
    }
    hasSeconds() {
      return this.$_has(0);
    }
    clearSeconds() {
      return this.clearField(1);
    }
    get nanos() {
      return this.$_getIZ(1);
    }
    set nanos(v) {
      this.$_setSignedInt32(1, v);
    }
    hasNanos() {
      return this.$_has(1);
    }
    clearNanos() {
      return this.clearField(2);
    }
  };
  (duration$46pb.Duration.__ = function() {
    duration$46pb.Duration.__proto__.new.call(this);
    ;
  }).prototype = duration$46pb.Duration.prototype;
  dart.addTypeTests(duration$46pb.Duration);
  dart.addTypeCaches(duration$46pb.Duration);
  dart.setMethodSignature(duration$46pb.Duration, () => ({
    __proto__: dart.getMethods(duration$46pb.Duration.__proto__),
    clone: dart.fnType(dart.legacy(duration$46pb.Duration), []),
    copyWith: dart.fnType(dart.legacy(duration$46pb.Duration), [dart.legacy(dart.fnType(dart.void, [dart.legacy(duration$46pb.Duration)]))]),
    createEmptyInstance: dart.fnType(dart.legacy(duration$46pb.Duration), []),
    hasSeconds: dart.fnType(dart.legacy(core.bool), []),
    clearSeconds: dart.fnType(dart.void, []),
    hasNanos: dart.fnType(dart.legacy(core.bool), []),
    clearNanos: dart.fnType(dart.void, [])
  }));
  dart.setGetterSignature(duration$46pb.Duration, () => ({
    __proto__: dart.getGetters(duration$46pb.Duration.__proto__),
    info_: dart.legacy(protobuf.BuilderInfo),
    seconds: dart.legacy(fixnum.Int64),
    nanos: dart.legacy(core.int)
  }));
  dart.setSetterSignature(duration$46pb.Duration, () => ({
    __proto__: dart.getSetters(duration$46pb.Duration.__proto__),
    seconds: dart.legacy(fixnum.Int64),
    nanos: dart.legacy(core.int)
  }));
  dart.setLibraryUri(duration$46pb.Duration, L3);
  dart.defineLazy(duration$46pb.Duration, {
    /*duration$46pb.Duration._i*/get _i() {
      let t0;
      return t0 = new protobuf.BuilderInfo.new(false ? "" : "Duration", {package: C4 || CT.C4, createEmptyInstance: C8 || CT.C8, toProto3Json: C22 || CT.C22, fromProto3Json: C23 || CT.C23}), (() => {
        t0.aInt64(1, false ? "" : "seconds");
        t0.a(intL(), 2, false ? "" : "nanos", 2048);
        t0.hasRequiredFields = false;
        return t0;
      })();
    },
    /*duration$46pb.Duration._defaultInstance*/get _defaultInstance() {
      return null;
    },
    set _defaultInstance(_) {}
  }, true);
  var metadata$ = dart.privateName(call$, "CallOptions.metadata");
  var timeout$ = dart.privateName(call$, "CallOptions.timeout");
  var metadataProviders$ = dart.privateName(call$, "CallOptions.metadataProviders");
  call$.CallOptions = class CallOptions extends core.Object {
    get metadata() {
      return this[metadata$];
    }
    set metadata(value) {
      super.metadata = value;
    }
    get timeout() {
      return this[timeout$];
    }
    set timeout(value) {
      super.timeout = value;
    }
    get metadataProviders() {
      return this[metadataProviders$];
    }
    set metadataProviders(value) {
      super.metadataProviders = value;
    }
    static new(opts) {
      let t0, t0$;
      let metadata = opts && 'metadata' in opts ? opts.metadata : null;
      let timeout = opts && 'timeout' in opts ? opts.timeout : null;
      let providers = opts && 'providers' in opts ? opts.providers : null;
      return new call$.CallOptions.__(MapOfStringL$StringL().unmodifiable((t0 = metadata, t0 == null ? new _js_helper.LinkedMap.new() : t0)), timeout, ListOfMapLOfStringL$StringLAndStringLToLFutureOrLOfvoid().unmodifiable((t0$ = providers, t0$ == null ? [] : t0$)));
    }
    static from(options) {
      return options[$fold](CallOptionsL(), call$.CallOptions.new(), dart.fn((p, o) => p.mergedWith(o), CallOptionsLAndCallOptionsLToCallOptionsL()));
    }
    mergedWith(other) {
      let t0, t0$, t0$0;
      if (other == null) return this;
      let mergedMetadata = (t0 = collection.LinkedHashMap.from(this.metadata), (() => {
        t0[$addAll](other.metadata);
        return t0;
      })());
      let mergedTimeout = (t0$ = other.timeout, t0$ == null ? this.timeout : t0$);
      let mergedProviders = (t0$0 = core.List.from(this.metadataProviders), (() => {
        t0$0[$addAll](other.metadataProviders);
        return t0$0;
      })());
      return new call$.CallOptions.__(MapOfStringL$StringL().unmodifiable(mergedMetadata), mergedTimeout, ListOfMapLOfStringL$StringLAndStringLToLFutureOrLOfvoid().unmodifiable(mergedProviders));
    }
  };
  (call$.CallOptions.__ = function(metadata, timeout, metadataProviders) {
    this[metadata$] = metadata;
    this[timeout$] = timeout;
    this[metadataProviders$] = metadataProviders;
    ;
  }).prototype = call$.CallOptions.prototype;
  dart.addTypeTests(call$.CallOptions);
  dart.addTypeCaches(call$.CallOptions);
  dart.setMethodSignature(call$.CallOptions, () => ({
    __proto__: dart.getMethods(call$.CallOptions.__proto__),
    mergedWith: dart.fnType(dart.legacy(call$.CallOptions), [dart.legacy(call$.CallOptions)])
  }));
  dart.setLibraryUri(call$.CallOptions, L4);
  dart.setFieldSignature(call$.CallOptions, () => ({
    __proto__: dart.getFields(call$.CallOptions.__proto__),
    metadata: dart.finalFieldType(dart.legacy(core.Map$(dart.legacy(core.String), dart.legacy(core.String)))),
    timeout: dart.finalFieldType(dart.legacy(core.Duration)),
    metadataProviders: dart.finalFieldType(dart.legacy(core.List$(dart.legacy(dart.fnType(dart.void, [dart.legacy(core.Map$(dart.legacy(core.String), dart.legacy(core.String))), dart.legacy(core.String)])))))
  }));
  var bypassCorsPreflight$ = dart.privateName(call$, "WebCallOptions.bypassCorsPreflight");
  var withCredentials$ = dart.privateName(call$, "WebCallOptions.withCredentials");
  call$.WebCallOptions = class WebCallOptions extends call$.CallOptions {
    get bypassCorsPreflight() {
      return this[bypassCorsPreflight$];
    }
    set bypassCorsPreflight(value) {
      super.bypassCorsPreflight = value;
    }
    get withCredentials() {
      return this[withCredentials$];
    }
    set withCredentials(value) {
      super.withCredentials = value;
    }
    static new(opts) {
      let t0, t0$, t0$0, t0$1;
      let metadata = opts && 'metadata' in opts ? opts.metadata : null;
      let timeout = opts && 'timeout' in opts ? opts.timeout : null;
      let providers = opts && 'providers' in opts ? opts.providers : null;
      let bypassCorsPreflight = opts && 'bypassCorsPreflight' in opts ? opts.bypassCorsPreflight : null;
      let withCredentials = opts && 'withCredentials' in opts ? opts.withCredentials : null;
      return new call$.WebCallOptions.__(MapOfStringL$StringL().unmodifiable((t0 = metadata, t0 == null ? new _js_helper.LinkedMap.new() : t0)), timeout, ListOfMapLOfStringL$StringLAndStringLToLFutureOrLOfvoid().unmodifiable((t0$ = providers, t0$ == null ? [] : t0$)), {bypassCorsPreflight: (t0$0 = bypassCorsPreflight, t0$0 == null ? false : t0$0), withCredentials: (t0$1 = withCredentials, t0$1 == null ? false : t0$1)});
    }
    mergedWith(other) {
      let t0, t0$, t0$0, t0$1, t0$2;
      if (other == null) return this;
      let mergedMetadata = (t0 = collection.LinkedHashMap.from(this.metadata), (() => {
        t0[$addAll](other.metadata);
        return t0;
      })());
      let mergedTimeout = (t0$ = other.timeout, t0$ == null ? this.timeout : t0$);
      let mergedProviders = (t0$0 = core.List.from(this.metadataProviders), (() => {
        t0$0[$addAll](other.metadataProviders);
        return t0$0;
      })());
      if (!WebCallOptionsL().is(other)) {
        return new call$.WebCallOptions.__(MapOfStringL$StringL().unmodifiable(mergedMetadata), mergedTimeout, ListOfMapLOfStringL$StringLAndStringLToLFutureOrLOfvoid().unmodifiable(mergedProviders), {bypassCorsPreflight: this.bypassCorsPreflight, withCredentials: this.withCredentials});
      }
      let otherOptions = WebCallOptionsL().as(other);
      let mergedBypassCorsPreflight = (t0$1 = otherOptions.bypassCorsPreflight, t0$1 == null ? this.bypassCorsPreflight : t0$1);
      let mergedWithCredentials = (t0$2 = otherOptions.withCredentials, t0$2 == null ? this.withCredentials : t0$2);
      return new call$.WebCallOptions.__(MapOfStringL$StringL().unmodifiable(mergedMetadata), mergedTimeout, ListOfMapLOfStringL$StringLAndStringLToLFutureOrLOfvoid().unmodifiable(mergedProviders), {bypassCorsPreflight: mergedBypassCorsPreflight, withCredentials: mergedWithCredentials});
    }
  };
  (call$.WebCallOptions.__ = function(metadata, timeout, metadataProviders, opts) {
    let bypassCorsPreflight = opts && 'bypassCorsPreflight' in opts ? opts.bypassCorsPreflight : null;
    let withCredentials = opts && 'withCredentials' in opts ? opts.withCredentials : null;
    this[bypassCorsPreflight$] = bypassCorsPreflight;
    this[withCredentials$] = withCredentials;
    call$.WebCallOptions.__proto__.__.call(this, metadata, timeout, metadataProviders);
    ;
  }).prototype = call$.WebCallOptions.prototype;
  dart.addTypeTests(call$.WebCallOptions);
  dart.addTypeCaches(call$.WebCallOptions);
  dart.setLibraryUri(call$.WebCallOptions, L4);
  dart.setFieldSignature(call$.WebCallOptions, () => ({
    __proto__: dart.getFields(call$.WebCallOptions.__proto__),
    bypassCorsPreflight: dart.finalFieldType(dart.legacy(core.bool)),
    withCredentials: dart.finalFieldType(dart.legacy(core.bool))
  }));
  var _headers = dart.privateName(call$, "_headers");
  var _trailers = dart.privateName(call$, "_trailers");
  var _hasReceivedResponses = dart.privateName(call$, "_hasReceivedResponses");
  var _headerMetadata = dart.privateName(call$, "_headerMetadata");
  var _stream = dart.privateName(call$, "_stream");
  var _responses = dart.privateName(call$, "_responses");
  var _requestSubscription = dart.privateName(call$, "_requestSubscription");
  var _responseSubscription = dart.privateName(call$, "_responseSubscription");
  var _timeoutTimer = dart.privateName(call$, "_timeoutTimer");
  var _responseTimeline = dart.privateName(call$, "_responseTimeline");
  var _method$ = dart.privateName(call$, "_method");
  var _requests$ = dart.privateName(call$, "_requests");
  var _requestTimeline$ = dart.privateName(call$, "_requestTimeline");
  var _onResponseListen = dart.privateName(call$, "_onResponseListen");
  var _onTimedOut = dart.privateName(call$, "_onTimedOut");
  var _terminateWithError = dart.privateName(call$, "_terminateWithError");
  var _finishTimelineWithError = dart.privateName(call$, "_finishTimelineWithError");
  var _safeTerminate = dart.privateName(call$, "_safeTerminate");
  var _sendRequest = dart.privateName(call$, "_sendRequest");
  var _onMetadataProviderError = dart.privateName(call$, "_onMetadataProviderError");
  var _onRequestError = dart.privateName(call$, "_onRequestError");
  var _onResponseData = dart.privateName(call$, "_onResponseData");
  var _onResponseError = dart.privateName(call$, "_onResponseError");
  var _onResponseDone = dart.privateName(call$, "_onResponseDone");
  var _responseError = dart.privateName(call$, "_responseError");
  var _checkForErrorStatus = dart.privateName(call$, "_checkForErrorStatus");
  var _terminate = dart.privateName(call$, "_terminate");
  const _is_ClientCall_default = Symbol('_is_ClientCall_default');
  var options$ = dart.privateName(call$, "ClientCall.options");
  var isCancelled = dart.privateName(call$, "ClientCall.isCancelled");
  call$.ClientCall$ = dart.generic((Q, R) => {
    var QL = () => (QL = dart.constFn(dart.legacy(Q)))();
    var QLToListLOfintL = () => (QLToListLOfintL = dart.constFn(dart.fnType(ListLOfintL(), [QL()])))();
    var QLToLListLOfintL = () => (QLToLListLOfintL = dart.constFn(dart.legacy(QLToListLOfintL())))();
    var RL = () => (RL = dart.constFn(dart.legacy(R)))();
    var StreamControllerOfRL = () => (StreamControllerOfRL = dart.constFn(async.StreamController$(RL())))();
    class ClientCall extends core.Object {
      get options() {
        return this[options$];
      }
      set options(value) {
        super.options = value;
      }
      get isCancelled() {
        return this[isCancelled];
      }
      set isCancelled(value) {
        this[isCancelled] = value;
      }
      onConnectionError(error) {
        this[_terminateWithError](new status$.GrpcError.unavailable("Error connecting: " + dart.str(error)));
      }
      [_terminateWithError](error) {
        this[_finishTimelineWithError](error, this[_requestTimeline$]);
        if (!dart.test(this[_responses].isClosed)) {
          this[_responses].addError(error);
        }
        this[_safeTerminate]();
      }
      static _sanitizeMetadata(metadata) {
        let sanitizedMetadata = new (IdentityMapOfStringL$StringL()).new();
        metadata[$forEach](dart.fn((key, value) => {
          let lowerCaseKey = key[$trim]()[$toLowerCase]();
          if (!lowerCaseKey[$startsWith](":") && !dart.test(call$._reservedHeaders[$contains](lowerCaseKey))) {
            sanitizedMetadata[$_set](lowerCaseKey, value[$trim]());
          }
        }, StringLAndStringLToNullN()));
        return sanitizedMetadata;
      }
      static audiencePath(method) {
        let lastSlashPos = method.path[$lastIndexOf]("/");
        return lastSlashPos === -1 ? method.path : method.path[$substring](0, lastSlashPos);
      }
      onConnectionReady(connection) {
        if (dart.test(this.isCancelled)) return;
        if (dart.test(this.options.metadataProviders[$isEmpty])) {
          this[_sendRequest](connection, call$.ClientCall._sanitizeMetadata(this.options.metadata));
        } else {
          let metadata = LinkedHashMapOfStringL$StringL().from(this.options.metadata);
          async.Future.forEach(MapLOfStringL$StringLAndStringLToLFutureOrLOfvoid(), this.options.metadataProviders, dart.fn(provider => dart.dcall(provider, [metadata, dart.str(connection.scheme) + "://" + dart.str(connection.authority) + dart.str(call$.ClientCall.audiencePath(this[_method$]))]), dynamicTodynamic())).then(dart.void, dart.fn(_ => this[_sendRequest](connection, call$.ClientCall._sanitizeMetadata(metadata)), dynamicTovoid())).catchError(dart.bind(this, _onMetadataProviderError));
        }
      }
      [_onMetadataProviderError](error) {
        this[_terminateWithError](new status$.GrpcError.internal("Error making call: " + dart.str(error)));
      }
      [_sendRequest](connection, metadata) {
        let t1;
        try {
          this[_stream] = connection.makeRequest(this[_method$].path, this.options.timeout, metadata, dart.bind(this, _onRequestError));
        } catch (e$) {
          let e = dart.getThrown(e$);
          this[_terminateWithError](new status$.GrpcError.unavailable("Error making call: " + dart.str(e)));
          return;
        }
        t1 = this[_requestTimeline$];
        t1 == null ? null : t1.instant("Request sent", {arguments: new _js_helper.LinkedMap.from(["metadata", metadata])});
        this[_requestSubscription] = this[_requests$].map(ListLOfintL(), dart.fn(data => {
          let t1, t1$, t2, t1$0;
          t1 = this[_requestTimeline$];
          t1 == null ? null : t1.instant("Data sent", {arguments: new _js_helper.LinkedMap.from(["data", dart.toString(data)])});
          t1$ = this[_requestTimeline$];
          t1$ == null ? null : t1$.finish();
          t1$0 = this[_method$];
          t2 = data;
          return QLToLListLOfintL().as(t1$0.requestSerializer)(t2);
        }, QLToListLOfintL())).handleError(dart.bind(this, _onRequestError)).listen(dart.bind(this[_stream].outgoingMessages, 'add'), {onError: dart.bind(this[_stream].outgoingMessages, 'addError'), onDone: dart.bind(this[_stream].outgoingMessages, 'close'), cancelOnError: true});
        this[_onResponseListen]();
      }
      [_finishTimelineWithError](error, timeline) {
        let t1;
        t1 = timeline;
        t1 == null ? null : t1.finish({arguments: new _js_helper.LinkedMap.from(["error", dart.toString(error)])});
      }
      [_onTimedOut]() {
        let error = new status$.GrpcError.deadlineExceeded("Deadline exceeded");
        this[_finishTimelineWithError](error, this[_requestTimeline$]);
        this[_responses].addError(error);
        this[_safeTerminate]();
      }
      [_onResponseListen]() {
        if (this[_stream] != null && dart.test(this[_responses].hasListener) && this[_responseSubscription] == null) {
          this[_responseSubscription] = this[_stream].incomingMessages.listen(dart.bind(this, _onResponseData), {onError: dart.bind(this, _onResponseError), onDone: dart.bind(this, _onResponseDone), cancelOnError: true});
          if (dart.test(this[_responses].isPaused)) {
            this[_responseSubscription].pause();
          }
          this[_responses].onPause = dart.bind(this[_responseSubscription], 'pause');
          this[_responses].onResume = dart.bind(this[_responseSubscription], 'resume');
          this[_responses].onCancel = dart.bind(this, 'cancel');
        }
      }
      [_responseError](error, stackTrace = null) {
        let t1, t1$;
        this[_finishTimelineWithError](error, this[_responseTimeline]);
        this[_responses].addError(error, stackTrace);
        t1 = this[_timeoutTimer];
        t1 == null ? null : t1.cancel();
        t1$ = this[_requestSubscription];
        t1$ == null ? null : t1$.cancel();
        this[_responseSubscription].cancel();
        this[_responses].close();
        this[_stream].terminate();
      }
      [_checkForErrorStatus](metadata) {
        let t1;
        let status = metadata[$_get]("grpc-status");
        let statusCode = core.int.parse((t1 = status, t1 == null ? "0" : t1));
        if (statusCode !== 0) {
          let message = metadata[$_get]("grpc-message") == null ? null : core.Uri.decodeFull(metadata[$_get]("grpc-message"));
          this[_responseError](new status$.GrpcError.custom(statusCode, message, call$.decodeStatusDetails(metadata[$_get]("grpc-status-details-bin"))));
        }
      }
      [_onResponseData](data) {
        let t2, t1, t1$, t2$, t2$0, t2$1;
        if (GrpcDataL().is(data)) {
          if (!dart.test(this[_headers].isCompleted)) {
            this[_responseError](new status$.GrpcError.unimplemented("Received data before headers"));
            return;
          }
          if (dart.test(this[_trailers].isCompleted)) {
            this[_responseError](new status$.GrpcError.unimplemented("Received data after trailers"));
            return;
          }
          try {
            let decodedData = (t1 = this[_method$], t2 = data.data, t1.responseDeserializer(t2));
            t1$ = this[_responseTimeline];
            t1$ == null ? null : t1$.instant("Data received", {arguments: new _js_helper.LinkedMap.from(["data", dart.toString(decodedData)])});
            this[_responses].add(decodedData);
            this[_hasReceivedResponses] = true;
          } catch (e$) {
            let e = dart.getThrown(e$);
            let s = dart.stackTrace(e$);
            this[_responseError](new status$.GrpcError.dataLoss("Error parsing response"), s);
          }
        } else if (GrpcMetadataL().is(data)) {
          if (!dart.test(this[_headers].isCompleted)) {
            this[_headerMetadata] = data.metadata;
            if (this[_requestTimeline$] != null) {
              this[_responseTimeline] = profiler.timelineTaskFactory({parent: this[_requestTimeline$], filterKey: "grpc/client"});
            }
            t2$ = this[_responseTimeline];
            t2$ == null ? null : t2$.start("gRPC Response");
            t2$0 = this[_responseTimeline];
            t2$0 == null ? null : t2$0.instant("Metadata received", {arguments: new _js_helper.LinkedMap.from(["headers", dart.toString(this[_headerMetadata])])});
            this[_headers].complete(this[_headerMetadata]);
            return;
          }
          if (dart.test(this[_trailers].isCompleted)) {
            this[_responseError](new status$.GrpcError.unimplemented("Received multiple trailers"));
            return;
          }
          let metadata = data.metadata;
          t2$1 = this[_responseTimeline];
          t2$1 == null ? null : t2$1.instant("Metadata received", {arguments: new _js_helper.LinkedMap.from(["trailers", dart.toString(metadata)])});
          this[_trailers].complete(metadata);
          this[_checkForErrorStatus](metadata);
        } else {
          this[_responseError](new status$.GrpcError.unimplemented("Unexpected frame received"));
        }
      }
      [_onResponseError](error, stackTrace) {
        if (GrpcErrorL().is(error)) {
          this[_responseError](error, stackTrace);
          return;
        }
        this[_responseError](new status$.GrpcError.unknown(dart.toString(error)), stackTrace);
      }
      [_onResponseDone]() {
        let t2, t2$;
        if (!dart.test(this[_headers].isCompleted)) {
          this[_responseError](new status$.GrpcError.unavailable("Did not receive anything"));
          return;
        }
        if (!dart.test(this[_trailers].isCompleted)) {
          if (dart.test(this[_hasReceivedResponses])) {
            this[_responseError](new status$.GrpcError.unavailable("Missing trailers"));
            return;
          }
          this[_trailers].complete(this[_headerMetadata]);
          this[_checkForErrorStatus](this[_headerMetadata]);
        }
        t2 = this[_responseTimeline];
        t2 == null ? null : t2.finish();
        t2$ = this[_timeoutTimer];
        t2$ == null ? null : t2$.cancel();
        this[_responses].close();
        this[_responseSubscription].cancel();
      }
      [_onRequestError](error, stackTrace) {
        let t2, t2$, t2$0;
        if (!GrpcErrorL().is(error)) {
          error = new status$.GrpcError.unknown(dart.toString(error));
        }
        this[_finishTimelineWithError](GrpcErrorL().as(error), this[_requestTimeline$]);
        this[_responses].addError(error, stackTrace);
        t2 = this[_timeoutTimer];
        t2 == null ? null : t2.cancel();
        this[_responses].close();
        t2$ = this[_requestSubscription];
        t2$ == null ? null : t2$.cancel();
        t2$0 = this[_responseSubscription];
        t2$0 == null ? null : t2$0.cancel();
        this[_stream].terminate();
      }
      get response() {
        return this[_responses].stream;
      }
      get headers() {
        return this[_headers].future;
      }
      get trailers() {
        return this[_trailers].future;
      }
      cancel() {
        if (!dart.test(this[_responses].isClosed)) {
          let error = new status$.GrpcError.cancelled("Cancelled by client.");
          this[_responses].addError(error);
          this[_finishTimelineWithError](error, this[_requestTimeline$]);
        }
        return this[_terminate]();
      }
      [_terminate]() {
        return async.async(dart.void, (function* _terminate() {
          let t2, t2$;
          this.isCancelled = true;
          t2 = this[_timeoutTimer];
          t2 == null ? null : t2.cancel();
          this[_responses].close();
          t2$ = this[_stream];
          t2$ == null ? null : t2$.terminate();
          let futures = JSArrayOfFutureL().of([]);
          if (this[_requestSubscription] != null) {
            futures[$add](this[_requestSubscription].cancel());
          }
          if (this[_responseSubscription] != null) {
            futures[$add](this[_responseSubscription].cancel());
          }
          yield async.Future.wait(dart.dynamic, futures);
        }).bind(this));
      }
      [_safeTerminate]() {
        return async.async(dart.void, (function* _safeTerminate() {
          try {
            yield this[_terminate]();
          } catch (e) {
            let _ = dart.getThrown(e);
          }
        }).bind(this));
      }
    }
    (ClientCall.new = function(_method, _requests, options, _requestTimeline = null) {
      let t1, t1$, t0;
      this[_headers] = CompleterOfMapLOfStringL$StringL().new();
      this[_trailers] = CompleterOfMapLOfStringL$StringL().new();
      this[_hasReceivedResponses] = false;
      this[_headerMetadata] = null;
      this[_stream] = null;
      this[_responses] = null;
      this[_requestSubscription] = null;
      this[_responseSubscription] = null;
      this[isCancelled] = false;
      this[_timeoutTimer] = null;
      this[_responseTimeline] = null;
      this[_method$] = _method;
      this[_requests$] = _requests;
      this[options$] = options;
      this[_requestTimeline$] = _requestTimeline;
      t0 = this[_requestTimeline$];
      t0 == null ? null : t0.start("gRPC Request: " + dart.str(this[_method$].path), {arguments: new _js_helper.LinkedMap.from(["method", this[_method$].path, "timeout", (t1$ = (t1 = this.options, t1 == null ? null : t1.timeout), t1$ == null ? null : dart.toString(t1$))])});
      this[_responses] = StreamControllerOfRL().new({onListen: dart.bind(this, _onResponseListen)});
      if (this.options.timeout != null) {
        this[_timeoutTimer] = async.Timer.new(this.options.timeout, dart.bind(this, _onTimedOut));
      }
    }).prototype = ClientCall.prototype;
    dart.addTypeTests(ClientCall);
    ClientCall.prototype[_is_ClientCall_default] = true;
    dart.addTypeCaches(ClientCall);
    ClientCall[dart.implements] = () => [common.Response];
    dart.setMethodSignature(ClientCall, () => ({
      __proto__: dart.getMethods(ClientCall.__proto__),
      onConnectionError: dart.fnType(dart.void, [dart.dynamic]),
      [_terminateWithError]: dart.fnType(dart.void, [dart.legacy(status$.GrpcError)]),
      onConnectionReady: dart.fnType(dart.void, [dart.legacy(connection.ClientConnection)]),
      [_onMetadataProviderError]: dart.fnType(dart.void, [dart.dynamic]),
      [_sendRequest]: dart.fnType(dart.void, [dart.legacy(connection.ClientConnection), dart.legacy(core.Map$(dart.legacy(core.String), dart.legacy(core.String)))]),
      [_finishTimelineWithError]: dart.fnType(dart.void, [dart.legacy(status$.GrpcError), dart.legacy(developer.TimelineTask)]),
      [_onTimedOut]: dart.fnType(dart.void, []),
      [_onResponseListen]: dart.fnType(dart.void, []),
      [_responseError]: dart.fnType(dart.void, [dart.legacy(status$.GrpcError)], [dart.legacy(core.StackTrace)]),
      [_checkForErrorStatus]: dart.fnType(dart.void, [dart.legacy(core.Map$(dart.legacy(core.String), dart.legacy(core.String)))]),
      [_onResponseData]: dart.fnType(dart.void, [dart.legacy(message.GrpcMessage)]),
      [_onResponseError]: dart.fnType(dart.void, [dart.dynamic, dart.legacy(core.StackTrace)]),
      [_onResponseDone]: dart.fnType(dart.void, []),
      [_onRequestError]: dart.fnType(dart.void, [dart.dynamic, dart.legacy(core.StackTrace)]),
      cancel: dart.fnType(dart.legacy(async.Future$(dart.void)), []),
      [_terminate]: dart.fnType(dart.legacy(async.Future$(dart.void)), []),
      [_safeTerminate]: dart.fnType(dart.legacy(async.Future$(dart.void)), [])
    }));
    dart.setGetterSignature(ClientCall, () => ({
      __proto__: dart.getGetters(ClientCall.__proto__),
      response: dart.legacy(async.Stream$(dart.legacy(R))),
      headers: dart.legacy(async.Future$(dart.legacy(core.Map$(dart.legacy(core.String), dart.legacy(core.String))))),
      trailers: dart.legacy(async.Future$(dart.legacy(core.Map$(dart.legacy(core.String), dart.legacy(core.String)))))
    }));
    dart.setLibraryUri(ClientCall, L4);
    dart.setFieldSignature(ClientCall, () => ({
      __proto__: dart.getFields(ClientCall.__proto__),
      [_method$]: dart.finalFieldType(dart.legacy(method.ClientMethod$(dart.legacy(Q), dart.legacy(R)))),
      [_requests$]: dart.finalFieldType(dart.legacy(async.Stream$(dart.legacy(Q)))),
      options: dart.finalFieldType(dart.legacy(call$.CallOptions)),
      [_headers]: dart.finalFieldType(dart.legacy(async.Completer$(dart.legacy(core.Map$(dart.legacy(core.String), dart.legacy(core.String)))))),
      [_trailers]: dart.finalFieldType(dart.legacy(async.Completer$(dart.legacy(core.Map$(dart.legacy(core.String), dart.legacy(core.String)))))),
      [_hasReceivedResponses]: dart.fieldType(dart.legacy(core.bool)),
      [_headerMetadata]: dart.fieldType(dart.legacy(core.Map$(dart.legacy(core.String), dart.legacy(core.String)))),
      [_stream]: dart.fieldType(dart.legacy(transport.GrpcTransportStream)),
      [_responses]: dart.fieldType(dart.legacy(async.StreamController$(dart.legacy(R)))),
      [_requestSubscription]: dart.fieldType(dart.legacy(async.StreamSubscription$(dart.legacy(core.List$(dart.legacy(core.int)))))),
      [_responseSubscription]: dart.fieldType(dart.legacy(async.StreamSubscription$(dart.legacy(message.GrpcMessage)))),
      isCancelled: dart.fieldType(dart.legacy(core.bool)),
      [_timeoutTimer]: dart.fieldType(dart.legacy(async.Timer)),
      [_requestTimeline$]: dart.finalFieldType(dart.legacy(developer.TimelineTask)),
      [_responseTimeline]: dart.fieldType(dart.legacy(developer.TimelineTask))
    }));
    return ClientCall;
  });
  call$.ClientCall = call$.ClientCall$();
  dart.addTypeTests(call$.ClientCall, _is_ClientCall_default);
  var C24;
  call$.decodeStatusDetails = function decodeStatusDetails(data) {
    try {
      let parsedStatus = status$46pb.Status.fromBuffer(convert.base64Url.decode(data[$padRight]((data.length + 3 & ~3 >>> 0) >>> 0, "=")));
      return parsedStatus.details[$map](GeneratedMessageL(), C24 || CT.C24)[$toList]();
    } catch (e$) {
      let e = dart.getThrown(e$);
      return JSArrayOfGeneratedMessageL().of([]);
    }
  };
  var C25;
  dart.defineLazy(call$, {
    /*call$._reservedHeaders*/get _reservedHeaders() {
      return C25 || CT.C25;
    }
  }, true);
  transport.GrpcTransportStream = class GrpcTransportStream extends core.Object {};
  (transport.GrpcTransportStream.new = function() {
    ;
  }).prototype = transport.GrpcTransportStream.prototype;
  dart.addTypeTests(transport.GrpcTransportStream);
  dart.addTypeCaches(transport.GrpcTransportStream);
  dart.setLibraryUri(transport.GrpcTransportStream, L5);
  message.GrpcMessage = class GrpcMessage extends core.Object {};
  (message.GrpcMessage.new = function() {
    ;
  }).prototype = message.GrpcMessage.prototype;
  dart.addTypeTests(message.GrpcMessage);
  dart.addTypeCaches(message.GrpcMessage);
  dart.setLibraryUri(message.GrpcMessage, L6);
  var metadata$0 = dart.privateName(message, "GrpcMetadata.metadata");
  message.GrpcMetadata = class GrpcMetadata extends message.GrpcMessage {
    get metadata() {
      return this[metadata$0];
    }
    set metadata(value) {
      super.metadata = value;
    }
    toString() {
      return "gRPC Metadata (" + dart.str(this.metadata) + ")";
    }
  };
  (message.GrpcMetadata.new = function(metadata) {
    this[metadata$0] = metadata;
    ;
  }).prototype = message.GrpcMetadata.prototype;
  dart.addTypeTests(message.GrpcMetadata);
  dart.addTypeCaches(message.GrpcMetadata);
  dart.setMethodSignature(message.GrpcMetadata, () => ({
    __proto__: dart.getMethods(message.GrpcMetadata.__proto__),
    toString: dart.fnType(dart.legacy(core.String), []),
    [$toString]: dart.fnType(dart.legacy(core.String), [])
  }));
  dart.setLibraryUri(message.GrpcMetadata, L6);
  dart.setFieldSignature(message.GrpcMetadata, () => ({
    __proto__: dart.getFields(message.GrpcMetadata.__proto__),
    metadata: dart.finalFieldType(dart.legacy(core.Map$(dart.legacy(core.String), dart.legacy(core.String))))
  }));
  dart.defineExtensionMethods(message.GrpcMetadata, ['toString']);
  var data$ = dart.privateName(message, "GrpcData.data");
  var isCompressed$ = dart.privateName(message, "GrpcData.isCompressed");
  message.GrpcData = class GrpcData extends message.GrpcMessage {
    get data() {
      return this[data$];
    }
    set data(value) {
      super.data = value;
    }
    get isCompressed() {
      return this[isCompressed$];
    }
    set isCompressed(value) {
      super.isCompressed = value;
    }
    toString() {
      return "gRPC Data (" + dart.str(this.data[$length]) + " bytes)";
    }
  };
  (message.GrpcData.new = function(data, opts) {
    let isCompressed = opts && 'isCompressed' in opts ? opts.isCompressed : null;
    this[data$] = data;
    this[isCompressed$] = isCompressed;
    if (!(data != null)) dart.assertFailed(null, L7, 32, 53, "data != null");
    ;
  }).prototype = message.GrpcData.prototype;
  dart.addTypeTests(message.GrpcData);
  dart.addTypeCaches(message.GrpcData);
  dart.setMethodSignature(message.GrpcData, () => ({
    __proto__: dart.getMethods(message.GrpcData.__proto__),
    toString: dart.fnType(dart.legacy(core.String), []),
    [$toString]: dart.fnType(dart.legacy(core.String), [])
  }));
  dart.setLibraryUri(message.GrpcData, L6);
  dart.setFieldSignature(message.GrpcData, () => ({
    __proto__: dart.getFields(message.GrpcData.__proto__),
    data: dart.finalFieldType(dart.legacy(core.List$(dart.legacy(core.int)))),
    isCompressed: dart.finalFieldType(dart.legacy(core.bool))
  }));
  dart.defineExtensionMethods(message.GrpcData, ['toString']);
  var message$ = dart.privateName(message, "GrpcMessageSink.message");
  message.GrpcMessageSink = class GrpcMessageSink extends core.Sink$(dart.legacy(message.GrpcMessage)) {
    get message() {
      return this[message$];
    }
    set message(value) {
      this[message$] = value;
    }
    add(data) {
      GrpcMessageL().as(data);
      if (this.message != null) {
        dart.throw(new core.StateError.new("Too many messages received!"));
      }
      this.message = data;
    }
    close() {
      if (this.message == null) {
        dart.throw(new core.StateError.new("No messages received!"));
      }
    }
  };
  (message.GrpcMessageSink.new = function() {
    this[message$] = null;
    ;
  }).prototype = message.GrpcMessageSink.prototype;
  dart.addTypeTests(message.GrpcMessageSink);
  dart.addTypeCaches(message.GrpcMessageSink);
  dart.setMethodSignature(message.GrpcMessageSink, () => ({
    __proto__: dart.getMethods(message.GrpcMessageSink.__proto__),
    add: dart.fnType(dart.void, [dart.legacy(core.Object)]),
    close: dart.fnType(dart.void, [])
  }));
  dart.setLibraryUri(message.GrpcMessageSink, L6);
  dart.setFieldSignature(message.GrpcMessageSink, () => ({
    __proto__: dart.getFields(message.GrpcMessageSink.__proto__),
    message: dart.fieldType(dart.legacy(message.GrpcMessage))
  }));
  message.frame = function frame(payload) {
    let payloadLength = payload[$length];
    let bytes = _native_typed_data.NativeUint8List.new(dart.notNull(payloadLength) + 5);
    let header = bytes[$buffer][$asByteData](0, 5);
    header[$setUint8](0, 0);
    header[$setUint32](1, payloadLength);
    bytes[$setRange](5, bytes[$length], payload);
    return bytes;
  };
  message.grpcDecompressor = function grpcDecompressor() {
    return new (_StreamHandlerTransformerOfGrpcMessageL$GrpcMessageL()).new({handleData: dart.fn((value, sink) => {
        if (GrpcDataL().is(value)) {
          if (dart.test(value.isCompressed)) {
            sink.add(new message.GrpcData.new(value.data, {isCompressed: false}));
            return;
          }
        }
        sink.add(value);
      }, GrpcMessageLAndEventSinkLOfGrpcMessageLToNullN())});
  };
  const _is_ClientMethod_default = Symbol('_is_ClientMethod_default');
  var path$ = dart.privateName(method, "ClientMethod.path");
  var requestSerializer$ = dart.privateName(method, "ClientMethod.requestSerializer");
  var responseDeserializer$ = dart.privateName(method, "ClientMethod.responseDeserializer");
  method.ClientMethod$ = dart.generic((Q, R) => {
    class ClientMethod extends core.Object {
      get path() {
        return this[path$];
      }
      set path(value) {
        super.path = value;
      }
      get requestSerializer() {
        return this[requestSerializer$];
      }
      set requestSerializer(value) {
        super.requestSerializer = value;
      }
      get responseDeserializer() {
        return this[responseDeserializer$];
      }
      set responseDeserializer(value) {
        super.responseDeserializer = value;
      }
    }
    (ClientMethod.new = function(path, requestSerializer, responseDeserializer) {
      this[path$] = path;
      this[requestSerializer$] = requestSerializer;
      this[responseDeserializer$] = responseDeserializer;
      ;
    }).prototype = ClientMethod.prototype;
    dart.addTypeTests(ClientMethod);
    ClientMethod.prototype[_is_ClientMethod_default] = true;
    dart.addTypeCaches(ClientMethod);
    dart.setLibraryUri(ClientMethod, L8);
    dart.setFieldSignature(ClientMethod, () => ({
      __proto__: dart.getFields(ClientMethod.__proto__),
      path: dart.finalFieldType(dart.legacy(core.String)),
      requestSerializer: dart.finalFieldType(dart.legacy(dart.fnType(dart.legacy(core.List$(dart.legacy(core.int))), [dart.legacy(Q)]))),
      responseDeserializer: dart.finalFieldType(dart.legacy(dart.fnType(dart.legacy(R), [dart.legacy(core.List$(dart.legacy(core.int)))])))
    }));
    return ClientMethod;
  });
  method.ClientMethod = method.ClientMethod$();
  dart.addTypeTests(method.ClientMethod, _is_ClientMethod_default);
  var _name$ = dart.privateName(connection, "_name");
  var C26;
  var C27;
  var C28;
  var C29;
  var C30;
  var C31;
  connection.ConnectionState = class ConnectionState extends core.Object {
    toString() {
      return this[_name$];
    }
  };
  (connection.ConnectionState.new = function(index, _name) {
    this.index = index;
    this[_name$] = _name;
    ;
  }).prototype = connection.ConnectionState.prototype;
  dart.addTypeTests(connection.ConnectionState);
  dart.addTypeCaches(connection.ConnectionState);
  dart.setMethodSignature(connection.ConnectionState, () => ({
    __proto__: dart.getMethods(connection.ConnectionState.__proto__),
    toString: dart.fnType(dart.legacy(core.String), []),
    [$toString]: dart.fnType(dart.legacy(core.String), [])
  }));
  dart.setLibraryUri(connection.ConnectionState, L9);
  dart.setFieldSignature(connection.ConnectionState, () => ({
    __proto__: dart.getFields(connection.ConnectionState.__proto__),
    index: dart.finalFieldType(dart.legacy(core.int)),
    [_name$]: dart.finalFieldType(dart.legacy(core.String))
  }));
  dart.defineExtensionMethods(connection.ConnectionState, ['toString']);
  connection.ConnectionState.connecting = C26 || CT.C26;
  connection.ConnectionState.ready = C27 || CT.C27;
  connection.ConnectionState.transientFailure = C28 || CT.C28;
  connection.ConnectionState.idle = C29 || CT.C29;
  connection.ConnectionState.shutdown = C30 || CT.C30;
  connection.ConnectionState.values = C31 || CT.C31;
  connection.ClientConnection = class ClientConnection extends core.Object {};
  (connection.ClientConnection.new = function() {
    ;
  }).prototype = connection.ClientConnection.prototype;
  dart.addTypeTests(connection.ClientConnection);
  dart.addTypeCaches(connection.ClientConnection);
  dart.setLibraryUri(connection.ClientConnection, L9);
  common.Response = class Response extends core.Object {};
  (common.Response.new = function() {
    ;
  }).prototype = common.Response.prototype;
  dart.addTypeTests(common.Response);
  dart.addTypeCaches(common.Response);
  dart.setLibraryUri(common.Response, L10);
  var C32;
  var C33;
  var _call = dart.privateName(common, "_call");
  const _is__ResponseMixin_default = Symbol('_is__ResponseMixin_default');
  common._ResponseMixin$ = dart.generic((Q, R) => {
    class _ResponseMixin extends core.Object {
      get headers() {
        return this[_call].headers;
      }
      get trailers() {
        return this[_call].trailers;
      }
      cancel() {
        return this[_call].cancel();
      }
    }
    (_ResponseMixin.new = function() {
      ;
    }).prototype = _ResponseMixin.prototype;
    dart.addTypeTests(_ResponseMixin);
    _ResponseMixin.prototype[_is__ResponseMixin_default] = true;
    dart.addTypeCaches(_ResponseMixin);
    _ResponseMixin[dart.implements] = () => [common.Response];
    dart.setMethodSignature(_ResponseMixin, () => ({
      __proto__: dart.getMethods(_ResponseMixin.__proto__),
      cancel: dart.fnType(dart.legacy(async.Future$(dart.void)), [])
    }));
    dart.setGetterSignature(_ResponseMixin, () => ({
      __proto__: dart.getGetters(_ResponseMixin.__proto__),
      headers: dart.legacy(async.Future$(dart.legacy(core.Map$(dart.legacy(core.String), dart.legacy(core.String))))),
      trailers: dart.legacy(async.Future$(dart.legacy(core.Map$(dart.legacy(core.String), dart.legacy(core.String)))))
    }));
    dart.setLibraryUri(_ResponseMixin, L10);
    return _ResponseMixin;
  });
  common._ResponseMixin = common._ResponseMixin$();
  dart.addTypeTests(common._ResponseMixin, _is__ResponseMixin_default);
  const _is_ResponseFuture_default = Symbol('_is_ResponseFuture_default');
  var _call$ = dart.privateName(common, "ResponseFuture._call");
  common.ResponseFuture$ = dart.generic(R => {
    var RL = () => (RL = dart.constFn(dart.legacy(R)))();
    const DelegatingFuture__ResponseMixin$36 = class DelegatingFuture__ResponseMixin extends future.DelegatingFuture$(dart.legacy(R)) {};
    (DelegatingFuture__ResponseMixin$36.new = function(_future) {
      DelegatingFuture__ResponseMixin$36.__proto__.new.call(this, _future);
    }).prototype = DelegatingFuture__ResponseMixin$36.prototype;
    dart.applyMixin(DelegatingFuture__ResponseMixin$36, common._ResponseMixin$(dart.dynamic, dart.legacy(R)));
    class ResponseFuture extends DelegatingFuture__ResponseMixin$36 {
      get [_call]() {
        return this[_call$];
      }
      set [_call](value) {
        super[_call] = value;
      }
      static _ensureOnlyOneResponse(R, previous, element) {
        if (previous != null) {
          dart.throw(new status$.GrpcError.unimplemented("More than one response received"));
        }
        return element;
      }
      static _ensureOneResponse(R, value) {
        if (value == null) dart.throw(new status$.GrpcError.unimplemented("No responses received"));
        return value;
      }
    }
    (ResponseFuture.new = function(_call) {
      this[_call$] = _call;
      ResponseFuture.__proto__.new.call(this, _call.response.fold(RL(), null, dart.gbind(C32 || CT.C32, RL())).then(RL(), dart.gbind(C33 || CT.C33, RL())));
      ;
    }).prototype = ResponseFuture.prototype;
    dart.addTypeTests(ResponseFuture);
    ResponseFuture.prototype[_is_ResponseFuture_default] = true;
    dart.addTypeCaches(ResponseFuture);
    dart.setLibraryUri(ResponseFuture, L10);
    dart.setFieldSignature(ResponseFuture, () => ({
      __proto__: dart.getFields(ResponseFuture.__proto__),
      [_call]: dart.finalFieldType(dart.legacy(call$.ClientCall$(dart.dynamic, dart.legacy(R))))
    }));
    return ResponseFuture;
  });
  common.ResponseFuture = common.ResponseFuture$();
  dart.addTypeTests(common.ResponseFuture, _is_ResponseFuture_default);
  const _is_ResponseStream_default = Symbol('_is_ResponseStream_default');
  var _call$0 = dart.privateName(common, "ResponseStream._call");
  common.ResponseStream$ = dart.generic(R => {
    var RL = () => (RL = dart.constFn(dart.legacy(R)))();
    var ResponseFutureOfRL = () => (ResponseFutureOfRL = dart.constFn(common.ResponseFuture$(RL())))();
    const DelegatingStream__ResponseMixin$36 = class DelegatingStream__ResponseMixin extends stream.DelegatingStream$(dart.legacy(R)) {};
    (DelegatingStream__ResponseMixin$36.new = function(stream) {
      DelegatingStream__ResponseMixin$36.__proto__.new.call(this, stream);
    }).prototype = DelegatingStream__ResponseMixin$36.prototype;
    dart.applyMixin(DelegatingStream__ResponseMixin$36, common._ResponseMixin$(dart.dynamic, dart.legacy(R)));
    class ResponseStream extends DelegatingStream__ResponseMixin$36 {
      get [_call]() {
        return this[_call$0];
      }
      set [_call](value) {
        super[_call] = value;
      }
      get single() {
        return new (ResponseFutureOfRL()).new(this[_call]);
      }
    }
    (ResponseStream.new = function(_call) {
      this[_call$0] = _call;
      ResponseStream.__proto__.new.call(this, _call.response);
      ;
    }).prototype = ResponseStream.prototype;
    dart.addTypeTests(ResponseStream);
    ResponseStream.prototype[_is_ResponseStream_default] = true;
    dart.addTypeCaches(ResponseStream);
    dart.setGetterSignature(ResponseStream, () => ({
      __proto__: dart.getGetters(ResponseStream.__proto__),
      single: dart.legacy(common.ResponseFuture$(dart.legacy(R)))
    }));
    dart.setLibraryUri(ResponseStream, L10);
    dart.setFieldSignature(ResponseStream, () => ({
      __proto__: dart.getFields(ResponseStream.__proto__),
      [_call]: dart.finalFieldType(dart.legacy(call$.ClientCall$(dart.dynamic, dart.legacy(R))))
    }));
    return ResponseStream;
  });
  common.ResponseStream = common.ResponseStream$();
  dart.addTypeTests(common.ResponseStream, _is_ResponseStream_default);
  status$.StatusCode = class StatusCode extends core.Object {};
  (status$.StatusCode.new = function() {
    ;
  }).prototype = status$.StatusCode.prototype;
  dart.addTypeTests(status$.StatusCode);
  dart.addTypeCaches(status$.StatusCode);
  dart.setLibraryUri(status$.StatusCode, L11);
  dart.defineLazy(status$.StatusCode, {
    /*status$.StatusCode.ok*/get ok() {
      return 0;
    },
    /*status$.StatusCode.cancelled*/get cancelled() {
      return 1;
    },
    /*status$.StatusCode.unknown*/get unknown() {
      return 2;
    },
    /*status$.StatusCode.invalidArgument*/get invalidArgument() {
      return 3;
    },
    /*status$.StatusCode.deadlineExceeded*/get deadlineExceeded() {
      return 4;
    },
    /*status$.StatusCode.notFound*/get notFound() {
      return 5;
    },
    /*status$.StatusCode.alreadyExists*/get alreadyExists() {
      return 6;
    },
    /*status$.StatusCode.permissionDenied*/get permissionDenied() {
      return 7;
    },
    /*status$.StatusCode.resourceExhausted*/get resourceExhausted() {
      return 8;
    },
    /*status$.StatusCode.failedPrecondition*/get failedPrecondition() {
      return 9;
    },
    /*status$.StatusCode.aborted*/get aborted() {
      return 10;
    },
    /*status$.StatusCode.outOfRange*/get outOfRange() {
      return 11;
    },
    /*status$.StatusCode.unimplemented*/get unimplemented() {
      return 12;
    },
    /*status$.StatusCode.internal*/get internal() {
      return 13;
    },
    /*status$.StatusCode.unavailable*/get unavailable() {
      return 14;
    },
    /*status$.StatusCode.dataLoss*/get dataLoss() {
      return 15;
    },
    /*status$.StatusCode.unauthenticated*/get unauthenticated() {
      return 16;
    }
  }, true);
  var code$ = dart.privateName(status$, "GrpcError.code");
  var codeName = dart.privateName(status$, "GrpcError.codeName");
  var message$0 = dart.privateName(status$, "GrpcError.message");
  var details$ = dart.privateName(status$, "GrpcError.details");
  status$.GrpcError = class GrpcError extends core.Object {
    get code() {
      return this[code$];
    }
    set code(value) {
      super.code = value;
    }
    get codeName() {
      return this[codeName];
    }
    set codeName(value) {
      super.codeName = value;
    }
    get message() {
      return this[message$0];
    }
    set message(value) {
      super.message = value;
    }
    get details() {
      return this[details$];
    }
    set details(value) {
      super.details = value;
    }
    _equals(other) {
      if (other == null) return false;
      if (!GrpcErrorL().is(other)) return false;
      return core.identical(this.code, dart.dload(other, 'code')) && core.identical(this.message, dart.dload(other, 'message'));
    }
    get hashCode() {
      let t4, t4$;
      return (dart.hashCode(this.code) ^ dart.notNull((t4$ = (t4 = this.message, t4 == null ? null : dart.hashCode(t4)), t4$ == null ? 17 : t4$))) >>> 0;
    }
    toString() {
      return "gRPC Error (code: " + dart.str(this.code) + ", codeName: " + dart.str(this.codeName) + ", message: " + dart.str(this.message) + ", details: " + dart.str(this.details) + ")";
    }
  };
  (status$.GrpcError.custom = function(code, message = null, details = null) {
    this[code$] = code;
    this[message$0] = message;
    this[details$] = details;
    this[codeName] = status$._getStatusCodeValue(code);
    ;
  }).prototype = status$.GrpcError.prototype;
  (status$.GrpcError.ok = function(message = null, details = null) {
    this[message$0] = message;
    this[details$] = details;
    this[code$] = 0;
    this[codeName] = status$._getStatusCodeValue(0);
    ;
  }).prototype = status$.GrpcError.prototype;
  (status$.GrpcError.cancelled = function(message = null, details = null) {
    this[message$0] = message;
    this[details$] = details;
    this[code$] = 1;
    this[codeName] = status$._getStatusCodeValue(1);
    ;
  }).prototype = status$.GrpcError.prototype;
  (status$.GrpcError.unknown = function(message = null, details = null) {
    this[message$0] = message;
    this[details$] = details;
    this[code$] = 2;
    this[codeName] = status$._getStatusCodeValue(2);
    ;
  }).prototype = status$.GrpcError.prototype;
  (status$.GrpcError.invalidArgument = function(message = null, details = null) {
    this[message$0] = message;
    this[details$] = details;
    this[code$] = 3;
    this[codeName] = status$._getStatusCodeValue(3);
    ;
  }).prototype = status$.GrpcError.prototype;
  (status$.GrpcError.deadlineExceeded = function(message = null, details = null) {
    this[message$0] = message;
    this[details$] = details;
    this[code$] = 4;
    this[codeName] = status$._getStatusCodeValue(4);
    ;
  }).prototype = status$.GrpcError.prototype;
  (status$.GrpcError.notFound = function(message = null, details = null) {
    this[message$0] = message;
    this[details$] = details;
    this[code$] = 5;
    this[codeName] = status$._getStatusCodeValue(5);
    ;
  }).prototype = status$.GrpcError.prototype;
  (status$.GrpcError.alreadyExists = function(message = null, details = null) {
    this[message$0] = message;
    this[details$] = details;
    this[code$] = 6;
    this[codeName] = status$._getStatusCodeValue(6);
    ;
  }).prototype = status$.GrpcError.prototype;
  (status$.GrpcError.permissionDenied = function(message = null, details = null) {
    this[message$0] = message;
    this[details$] = details;
    this[code$] = 7;
    this[codeName] = status$._getStatusCodeValue(7);
    ;
  }).prototype = status$.GrpcError.prototype;
  (status$.GrpcError.resourceExhausted = function(message = null, details = null) {
    this[message$0] = message;
    this[details$] = details;
    this[code$] = 8;
    this[codeName] = status$._getStatusCodeValue(8);
    ;
  }).prototype = status$.GrpcError.prototype;
  (status$.GrpcError.failedPrecondition = function(message = null, details = null) {
    this[message$0] = message;
    this[details$] = details;
    this[code$] = 9;
    this[codeName] = status$._getStatusCodeValue(9);
    ;
  }).prototype = status$.GrpcError.prototype;
  (status$.GrpcError.aborted = function(message = null, details = null) {
    this[message$0] = message;
    this[details$] = details;
    this[code$] = 10;
    this[codeName] = status$._getStatusCodeValue(10);
    ;
  }).prototype = status$.GrpcError.prototype;
  (status$.GrpcError.outOfRange = function(message = null, details = null) {
    this[message$0] = message;
    this[details$] = details;
    this[code$] = 11;
    this[codeName] = status$._getStatusCodeValue(11);
    ;
  }).prototype = status$.GrpcError.prototype;
  (status$.GrpcError.unimplemented = function(message = null, details = null) {
    this[message$0] = message;
    this[details$] = details;
    this[code$] = 12;
    this[codeName] = status$._getStatusCodeValue(12);
    ;
  }).prototype = status$.GrpcError.prototype;
  (status$.GrpcError.internal = function(message = null, details = null) {
    this[message$0] = message;
    this[details$] = details;
    this[code$] = 13;
    this[codeName] = status$._getStatusCodeValue(13);
    ;
  }).prototype = status$.GrpcError.prototype;
  (status$.GrpcError.unavailable = function(message = null, details = null) {
    this[message$0] = message;
    this[details$] = details;
    this[code$] = 14;
    this[codeName] = status$._getStatusCodeValue(14);
    ;
  }).prototype = status$.GrpcError.prototype;
  (status$.GrpcError.dataLoss = function(message = null, details = null) {
    this[message$0] = message;
    this[details$] = details;
    this[code$] = 15;
    this[codeName] = status$._getStatusCodeValue(15);
    ;
  }).prototype = status$.GrpcError.prototype;
  (status$.GrpcError.unauthenticated = function(message = null, details = null) {
    this[message$0] = message;
    this[details$] = details;
    this[code$] = 16;
    this[codeName] = status$._getStatusCodeValue(16);
    ;
  }).prototype = status$.GrpcError.prototype;
  dart.addTypeTests(status$.GrpcError);
  dart.addTypeCaches(status$.GrpcError);
  status$.GrpcError[dart.implements] = () => [core.Exception];
  dart.setMethodSignature(status$.GrpcError, () => ({
    __proto__: dart.getMethods(status$.GrpcError.__proto__),
    _equals: dart.fnType(dart.legacy(core.bool), [dart.dynamic]),
    [$_equals]: dart.fnType(dart.legacy(core.bool), [dart.dynamic]),
    toString: dart.fnType(dart.legacy(core.String), []),
    [$toString]: dart.fnType(dart.legacy(core.String), [])
  }));
  dart.setGetterSignature(status$.GrpcError, () => ({
    __proto__: dart.getGetters(status$.GrpcError.__proto__),
    hashCode: dart.legacy(core.int),
    [$hashCode]: dart.legacy(core.int)
  }));
  dart.setLibraryUri(status$.GrpcError, L11);
  dart.setFieldSignature(status$.GrpcError, () => ({
    __proto__: dart.getFields(status$.GrpcError.__proto__),
    code: dart.finalFieldType(dart.legacy(core.int)),
    codeName: dart.finalFieldType(dart.legacy(core.String)),
    message: dart.finalFieldType(dart.legacy(core.String)),
    details: dart.finalFieldType(dart.legacy(core.List$(dart.legacy(protobuf.GeneratedMessage))))
  }));
  dart.defineExtensionMethods(status$.GrpcError, ['_equals', 'toString']);
  dart.defineExtensionAccessors(status$.GrpcError, ['hashCode']);
  status$._getStatusCodeValue = function _getStatusCodeValue(code) {
    let t4;
    return (t4 = code$46pbenum.Code.valueOf(code), t4 == null ? code$46pbenum.Code.UNKNOWN : t4).name;
  };
  status$.parseErrorDetailsFromAny = function parseErrorDetailsFromAny(any) {
    switch (any.typeUrl) {
      case "type.googleapis.com/google.rpc.RetryInfo":
      {
        return error_details$46pb.RetryInfo.fromBuffer(any.value);
      }
      case "type.googleapis.com/google.rpc.DebugInfo":
      {
        return error_details$46pb.DebugInfo.fromBuffer(any.value);
      }
      case "type.googleapis.com/google.rpc.QuotaFailure":
      {
        return error_details$46pb.QuotaFailure.fromBuffer(any.value);
      }
      case "type.googleapis.com/google.rpc.ErrorInfo":
      {
        return error_details$46pb.ErrorInfo.fromBuffer(any.value);
      }
      case "type.googleapis.com/google.rpc.PreconditionFailure":
      {
        return error_details$46pb.PreconditionFailure.fromBuffer(any.value);
      }
      case "type.googleapis.com/google.rpc.BadRequest":
      {
        return error_details$46pb.BadRequest.fromBuffer(any.value);
      }
      case "type.googleapis.com/google.rpc.RequestInfo":
      {
        return error_details$46pb.RequestInfo.fromBuffer(any.value);
      }
      case "type.googleapis.com/google.rpc.ResourceInfo":
      {
        return error_details$46pb.ResourceInfo.fromBuffer(any.value);
      }
      case "type.googleapis.com/google.rpc.Help":
      {
        return error_details$46pb.Help.fromBuffer(any.value);
      }
      case "type.googleapis.com/google.rpc.LocalizedMessage":
      {
        return error_details$46pb.LocalizedMessage.fromBuffer(any.value);
      }
      default:
      {
        return any;
      }
    }
  };
  var ProtobufEnum_name = dart.privateName(protobuf, "ProtobufEnum.name");
  var ProtobufEnum_value = dart.privateName(protobuf, "ProtobufEnum.value");
  var C34;
  var C35;
  var C36;
  var C37;
  var C38;
  var C39;
  var C40;
  var C41;
  var C42;
  var C43;
  var C44;
  var C45;
  var C46;
  var C47;
  var C48;
  var C49;
  var C50;
  var C51;
  code$46pbenum.Code = class Code extends protobuf.ProtobufEnum {
    static valueOf(value) {
      return code$46pbenum.Code._byValue[$_get](value);
    }
  };
  (code$46pbenum.Code.__ = function(v, n) {
    code$46pbenum.Code.__proto__.new.call(this, v, n);
    ;
  }).prototype = code$46pbenum.Code.prototype;
  dart.addTypeTests(code$46pbenum.Code);
  dart.addTypeCaches(code$46pbenum.Code);
  dart.setLibraryUri(code$46pbenum.Code, L12);
  dart.defineLazy(code$46pbenum.Code, {
    /*code$46pbenum.Code.OK*/get OK() {
      return C34 || CT.C34;
    },
    /*code$46pbenum.Code.CANCELLED*/get CANCELLED() {
      return C35 || CT.C35;
    },
    /*code$46pbenum.Code.UNKNOWN*/get UNKNOWN() {
      return C36 || CT.C36;
    },
    /*code$46pbenum.Code.INVALID_ARGUMENT*/get INVALID_ARGUMENT() {
      return C37 || CT.C37;
    },
    /*code$46pbenum.Code.DEADLINE_EXCEEDED*/get DEADLINE_EXCEEDED() {
      return C38 || CT.C38;
    },
    /*code$46pbenum.Code.NOT_FOUND*/get NOT_FOUND() {
      return C39 || CT.C39;
    },
    /*code$46pbenum.Code.ALREADY_EXISTS*/get ALREADY_EXISTS() {
      return C40 || CT.C40;
    },
    /*code$46pbenum.Code.PERMISSION_DENIED*/get PERMISSION_DENIED() {
      return C41 || CT.C41;
    },
    /*code$46pbenum.Code.UNAUTHENTICATED*/get UNAUTHENTICATED() {
      return C42 || CT.C42;
    },
    /*code$46pbenum.Code.RESOURCE_EXHAUSTED*/get RESOURCE_EXHAUSTED() {
      return C43 || CT.C43;
    },
    /*code$46pbenum.Code.FAILED_PRECONDITION*/get FAILED_PRECONDITION() {
      return C44 || CT.C44;
    },
    /*code$46pbenum.Code.ABORTED*/get ABORTED() {
      return C45 || CT.C45;
    },
    /*code$46pbenum.Code.OUT_OF_RANGE*/get OUT_OF_RANGE() {
      return C46 || CT.C46;
    },
    /*code$46pbenum.Code.UNIMPLEMENTED*/get UNIMPLEMENTED() {
      return C47 || CT.C47;
    },
    /*code$46pbenum.Code.INTERNAL*/get INTERNAL() {
      return C48 || CT.C48;
    },
    /*code$46pbenum.Code.UNAVAILABLE*/get UNAVAILABLE() {
      return C49 || CT.C49;
    },
    /*code$46pbenum.Code.DATA_LOSS*/get DATA_LOSS() {
      return C50 || CT.C50;
    },
    /*code$46pbenum.Code.values*/get values() {
      return C51 || CT.C51;
    },
    /*code$46pbenum.Code._byValue*/get _byValue() {
      return protobuf.ProtobufEnum.initByValue(CodeL(), code$46pbenum.Code.values);
    }
  }, true);
  profiler._defaultTimelineTaskFactory = function _defaultTimelineTaskFactory(opts) {
    let filterKey = opts && 'filterKey' in opts ? opts.filterKey : null;
    let parent = opts && 'parent' in opts ? opts.parent : null;
    return new developer.TimelineTask.new({filterKey: filterKey, parent: parent});
  };
  var C52;
  dart.defineLazy(profiler, {
    /*profiler.timelineTaskFactory*/get timelineTaskFactory() {
      return C52 || CT.C52;
    },
    set timelineTaskFactory(_) {},
    /*profiler.clientTimelineFilterKey*/get clientTimelineFilterKey() {
      return "grpc/client";
    },
    /*profiler.isTimelineLoggingEnabled*/get isTimelineLoggingEnabled() {
      return false;
    },
    set isTimelineLoggingEnabled(_) {}
  }, true);
  channel.ClientChannel = class ClientChannel extends core.Object {};
  (channel.ClientChannel.new = function() {
    ;
  }).prototype = channel.ClientChannel.prototype;
  dart.addTypeTests(channel.ClientChannel);
  dart.addTypeCaches(channel.ClientChannel);
  dart.setLibraryUri(channel.ClientChannel, L13);
  var _connection = dart.privateName(channel, "_connection");
  var _isShutdown = dart.privateName(channel, "_isShutdown");
  channel.ClientChannelBase = class ClientChannelBase extends core.Object {
    shutdown() {
      return async.async(dart.void, (function* shutdown() {
        if (dart.test(this[_isShutdown])) return;
        this[_isShutdown] = true;
        if (this[_connection] != null) yield this[_connection].shutdown();
      }).bind(this));
    }
    terminate() {
      return async.async(dart.void, (function* terminate() {
        this[_isShutdown] = true;
        if (this[_connection] != null) yield this[_connection].terminate();
      }).bind(this));
    }
    getConnection() {
      return async.async(ClientConnectionL(), (function* getConnection() {
        let t4;
        if (dart.test(this[_isShutdown])) dart.throw(new status$.GrpcError.unavailable("Channel shutting down."));
        t4 = this[_connection];
        return t4 == null ? this[_connection] = this.createConnection() : t4;
      }).bind(this));
    }
    createCall(Q, R, method, requests, options) {
      let call = new (call$.ClientCall$(dart.legacy(Q), dart.legacy(R))).new(method, requests, options, dart.test(profiler.isTimelineLoggingEnabled) ? profiler.timelineTaskFactory({filterKey: "grpc/client"}) : null);
      this.getConnection().then(core.Null, dart.fn(connection => {
        if (dart.test(call.isCancelled)) return;
        connection.dispatchCall(call);
      }, ClientConnectionLToNullN()), {onError: dart.bind(call, 'onConnectionError')});
      return call;
    }
  };
  (channel.ClientChannelBase.new = function() {
    this[_connection] = null;
    this[_isShutdown] = false;
    ;
  }).prototype = channel.ClientChannelBase.prototype;
  dart.addTypeTests(channel.ClientChannelBase);
  dart.addTypeCaches(channel.ClientChannelBase);
  channel.ClientChannelBase[dart.implements] = () => [channel.ClientChannel];
  dart.setMethodSignature(channel.ClientChannelBase, () => ({
    __proto__: dart.getMethods(channel.ClientChannelBase.__proto__),
    shutdown: dart.fnType(dart.legacy(async.Future$(dart.void)), []),
    terminate: dart.fnType(dart.legacy(async.Future$(dart.void)), []),
    getConnection: dart.fnType(dart.legacy(async.Future$(dart.legacy(connection.ClientConnection))), []),
    createCall: dart.gFnType((Q, R) => [dart.legacy(call$.ClientCall$(dart.legacy(Q), dart.legacy(R))), [dart.legacy(method.ClientMethod$(dart.legacy(Q), dart.legacy(R))), dart.legacy(async.Stream$(dart.legacy(Q))), dart.legacy(call$.CallOptions)]])
  }));
  dart.setLibraryUri(channel.ClientChannelBase, L13);
  dart.setFieldSignature(channel.ClientChannelBase, () => ({
    __proto__: dart.getFields(channel.ClientChannelBase.__proto__),
    [_connection]: dart.fieldType(dart.legacy(connection.ClientConnection)),
    [_isShutdown]: dart.fieldType(dart.legacy(core.bool))
  }));
  dart.trackLibraries("packages/grpc/src/client/call", {
    "package:grpc/src/generated/google/rpc/status.pb.dart": status$46pb,
    "package:grpc/src/generated/google/protobuf/any.pb.dart": any$46pb,
    "package:grpc/src/generated/google/rpc/error_details.pb.dart": error_details$46pb,
    "package:grpc/src/generated/google/protobuf/duration.pb.dart": duration$46pb,
    "package:grpc/src/client/call.dart": call$,
    "package:grpc/src/client/transport/transport.dart": transport,
    "package:grpc/src/shared/message.dart": message,
    "package:grpc/src/client/method.dart": method,
    "package:grpc/src/client/connection.dart": connection,
    "package:grpc/src/client/common.dart": common,
    "package:grpc/src/shared/status.dart": status$,
    "package:grpc/src/generated/google/rpc/code.pbenum.dart": code$46pbenum,
    "package:grpc/src/shared/profiler.dart": profiler,
    "package:grpc/src/client/channel.dart": channel
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["../generated/google/rpc/status.pb.dart","../generated/google/protobuf/any.pb.dart","../generated/google/rpc/error_details.pb.dart","../generated/google/protobuf/duration.pb.dart","call.dart","transport/transport.dart","../shared/message.dart","method.dart","connection.dart","common.dart","../shared/status.dart","../generated/google/rpc/code.pbenum.dart","../shared/profiler.dart","channel.dart"],"names":[],"mappings":"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","file":"call.unsound.ddc.js"}');
  // Exports:
  return {
    src__generated__google__rpc__status$46pb: status$46pb,
    src__generated__google__protobuf__any$46pb: any$46pb,
    src__generated__google__rpc__error_details$46pb: error_details$46pb,
    src__generated__google__protobuf__duration$46pb: duration$46pb,
    src__client__call: call$,
    src__client__transport__transport: transport,
    src__shared__message: message,
    src__client__method: method,
    src__client__connection: connection,
    src__client__common: common,
    src__shared__status: status$,
    src__generated__google__rpc__code$46pbenum: code$46pbenum,
    src__shared__profiler: profiler,
    src__client__channel: channel
  };
}));

//# sourceMappingURL=call.unsound.ddc.js.map

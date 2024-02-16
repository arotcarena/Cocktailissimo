"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["admin"],{

/***/ "./assets/Components/Admin/AdminAnswerControl/index.jsx":
/*!**************************************************************!*\
  !*** ./assets/Components/Admin/AdminAnswerControl/index.jsx ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AdminAnswerControl": () => (/* binding */ AdminAnswerControl)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.is-array.js */ "./node_modules/core-js/modules/es.array.is-array.js");
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.array.push.js */ "./node_modules/core-js/modules/es.array.push.js");
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.array.from.js */ "./node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.regexp.test.js */ "./node_modules/core-js/modules/es.regexp.test.js");
/* harmony import */ var core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.error.cause.js */ "./node_modules/core-js/modules/es.error.cause.js");
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.error.to-string.js */ "./node_modules/core-js/modules/es.error.to-string.js");
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.promise.js */ "./node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var core_js_modules_es_symbol_async_iterator_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! core-js/modules/es.symbol.async-iterator.js */ "./node_modules/core-js/modules/es.symbol.async-iterator.js");
/* harmony import */ var core_js_modules_es_symbol_async_iterator_js__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_async_iterator_js__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var core_js_modules_es_symbol_to_string_tag_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! core-js/modules/es.symbol.to-string-tag.js */ "./node_modules/core-js/modules/es.symbol.to-string-tag.js");
/* harmony import */ var core_js_modules_es_symbol_to_string_tag_js__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_to_string_tag_js__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var core_js_modules_es_json_to_string_tag_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! core-js/modules/es.json.to-string-tag.js */ "./node_modules/core-js/modules/es.json.to-string-tag.js");
/* harmony import */ var core_js_modules_es_json_to_string_tag_js__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_json_to_string_tag_js__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var core_js_modules_es_math_to_string_tag_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! core-js/modules/es.math.to-string-tag.js */ "./node_modules/core-js/modules/es.math.to-string-tag.js");
/* harmony import */ var core_js_modules_es_math_to_string_tag_js__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_math_to_string_tag_js__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! core-js/modules/es.object.create.js */ "./node_modules/core-js/modules/es.object.create.js");
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of.js */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_25__);
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of.js */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_26___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_26__);
/* harmony import */ var core_js_modules_es_array_reverse_js__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! core-js/modules/es.array.reverse.js */ "./node_modules/core-js/modules/es.array.reverse.js");
/* harmony import */ var core_js_modules_es_array_reverse_js__WEBPACK_IMPORTED_MODULE_27___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_reverse_js__WEBPACK_IMPORTED_MODULE_27__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_28___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_28__);
/* harmony import */ var _CustomHook_state_useOpenState__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ../../../CustomHook/state/useOpenState */ "./assets/CustomHook/state/useOpenState.jsx");
/* harmony import */ var _functions_api__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ../../../functions/api */ "./assets/functions/api.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }




























function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }



var AdminAnswerControl = function AdminAnswerControl(_ref) {
  var ownerClass = _ref.ownerClass,
    ownerId = _ref.ownerId;
  var _useOpenState = (0,_CustomHook_state_useOpenState__WEBPACK_IMPORTED_MODULE_29__.useOpenState)(false),
    _useOpenState2 = _slicedToArray(_useOpenState, 3),
    formIsOpen = _useOpenState2[0],
    openForm = _useOpenState2[1],
    closeForm = _useOpenState2[2];
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_28__.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    isLoading = _useState2[0],
    setLoading = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_28__.useState)(null),
    _useState4 = _slicedToArray(_useState3, 2),
    errors = _useState4[0],
    setErrors = _useState4[1];
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_28__.useState)(''),
    _useState6 = _slicedToArray(_useState5, 2),
    value = _useState6[0],
    setValue = _useState6[1];
  var handleChange = function handleChange(e) {
    e.preventDefault();
    setValue(e.target.value);
  };
  var handleSubmit = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(e) {
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            e.preventDefault();
            if (!isLoading) {
              _context.next = 3;
              break;
            }
            return _context.abrupt("return");
          case 3:
            setLoading(true);
            setErrors(null);
            _context.prev = 5;
            _context.next = 8;
            return (0,_functions_api__WEBPACK_IMPORTED_MODULE_30__.apiPreparedFetch)('/admin/api/answer/create/' + ownerClass + '/' + ownerId, {
              content: value
            }, 'POST');
          case 8:
            location.reload();
            _context.next = 15;
            break;
          case 11:
            _context.prev = 11;
            _context.t0 = _context["catch"](5);
            if (_context.t0 instanceof _functions_api__WEBPACK_IMPORTED_MODULE_30__.ApiError) {
              setErrors(_context.t0.errors);
            } else {
              setErrors(['Erreur serveur']);
            }
            setLoading(false);
          case 15:
          case "end":
            return _context.stop();
        }
      }, _callee, null, [[5, 11]]);
    }));
    return function handleSubmit(_x2) {
      return _ref2.apply(this, arguments);
    };
  }();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_28___default().createElement((react__WEBPACK_IMPORTED_MODULE_28___default().Fragment), null, formIsOpen && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_28___default().createElement("form", {
    onSubmit: handleSubmit
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_28___default().createElement("div", {
    className: 'admin-form-group' + (errors ? ' is-invalid' : '')
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_28___default().createElement("label", {
    htmlFor: ownerId,
    className: "admin-form-label"
  }, "R\xE9ponse"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_28___default().createElement("textarea", {
    id: ownerId,
    type: "text",
    className: "admin-form-control",
    value: value,
    onChange: handleChange,
    autoFocus: true
  }), (errors === null || errors === void 0 ? void 0 : errors.content) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_28___default().createElement("div", {
    className: "admin-form-error"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_28___default().createElement("ul", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_28___default().createElement("li", null, errors.content)))), isLoading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_28___default().createElement("div", {
    className: "admin-form-info"
  }, "Chargement...") : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_28___default().createElement("div", {
    className: "admin-submit-group double"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_28___default().createElement("button", {
    type: "submit",
    onClick: closeForm,
    className: "admin-button secondary-color admin-small-button",
    disabled: isLoading
  }, "Annuler"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_28___default().createElement("button", {
    type: "submit",
    className: "admin-button admin-small-button"
  }, "Valider"))), !formIsOpen && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_28___default().createElement("button", {
    type: "button",
    onClick: openForm,
    className: "admin-button admin-small-button"
  }, "R\xE9pondre"));
};

/***/ }),

/***/ "./assets/Components/Admin/AdminPictureUpload/index.jsx":
/*!**************************************************************!*\
  !*** ./assets/Components/Admin/AdminPictureUpload/index.jsx ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AdminPictureUpload": () => (/* binding */ AdminPictureUpload)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.is-array.js */ "./node_modules/core-js/modules/es.array.is-array.js");
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.array.push.js */ "./node_modules/core-js/modules/es.array.push.js");
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.array.from.js */ "./node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.regexp.test.js */ "./node_modules/core-js/modules/es.regexp.test.js");
/* harmony import */ var core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.error.cause.js */ "./node_modules/core-js/modules/es.error.cause.js");
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.error.to-string.js */ "./node_modules/core-js/modules/es.error.to-string.js");
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _UI_Form_PictureUploadField__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../UI/Form/PictureUploadField */ "./assets/UI/Form/PictureUploadField.jsx");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }


















var AdminPictureUpload = function AdminPictureUpload(_ref) {
  var name = _ref.name,
    label = _ref.label,
    defaultBase64img = _ref.defaultBase64img,
    resizeWidth = _ref.resizeWidth,
    resizeHeight = _ref.resizeHeight;
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_16__.useState)([]),
    _useState2 = _slicedToArray(_useState, 2),
    errors = _useState2[0],
    setErrors = _useState2[1];
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement(_UI_Form_PictureUploadField__WEBPACK_IMPORTED_MODULE_17__.PictureUploadField, {
    name: name,
    errors: errors,
    setErrors: setErrors,
    resizeWidth: resizeWidth,
    resizeHeight: resizeHeight,
    defaultBase64img: defaultBase64img
  }, label);
};

/***/ }),

/***/ "./assets/Components/Admin/IngredientsQuantitiesInput/IqCard.jsx":
/*!***********************************************************************!*\
  !*** ./assets/Components/Admin/IngredientsQuantitiesInput/IqCard.jsx ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IqCard": () => (/* binding */ IqCard)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.is-array.js */ "./node_modules/core-js/modules/es.array.is-array.js");
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.array.push.js */ "./node_modules/core-js/modules/es.array.push.js");
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.array.from.js */ "./node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.regexp.test.js */ "./node_modules/core-js/modules/es.regexp.test.js");
/* harmony import */ var core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.error.cause.js */ "./node_modules/core-js/modules/es.error.cause.js");
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.error.to-string.js */ "./node_modules/core-js/modules/es.error.to-string.js");
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _CustomHook_state_useOpenState_jsx__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../CustomHook/state/useOpenState.jsx */ "./assets/CustomHook/state/useOpenState.jsx");
/* harmony import */ var _UI_Container_Modal_jsx__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../UI/Container/Modal.jsx */ "./assets/UI/Container/Modal.jsx");
/* harmony import */ var _IqForm_index_jsx__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./IqForm/index.jsx */ "./assets/Components/Admin/IngredientsQuantitiesInput/IqForm/index.jsx");
/* harmony import */ var _UI_Button_EditButton_jsx__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../../UI/Button/EditButton.jsx */ "./assets/UI/Button/EditButton.jsx");
/* harmony import */ var _UI_Button_CloseButton_jsx__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../../UI/Button/CloseButton.jsx */ "./assets/UI/Button/CloseButton.jsx");
















function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }






var IqCard = function IqCard(_ref) {
  var ingredientQuantity = _ref.ingredientQuantity,
    remove = _ref.remove,
    update = _ref.update;
  var handleRemove = function handleRemove() {
    remove(ingredientQuantity);
  };
  var handleUpdate = function handleUpdate(newIngredientQuantity) {
    update(ingredientQuantity.id, newIngredientQuantity);
  };
  var _useOpenState = (0,_CustomHook_state_useOpenState_jsx__WEBPACK_IMPORTED_MODULE_17__.useOpenState)(false),
    _useOpenState2 = _slicedToArray(_useOpenState, 3),
    formIsOpen = _useOpenState2[0],
    openForm = _useOpenState2[1],
    closeForm = _useOpenState2[2];
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement("li", {
    className: "iq-card"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement("img", {
    src: ingredientQuantity.ingredient.picture.path,
    alt: "Photo d'un ingr\xE9dient"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement("span", {
    className: "en-group"
  }, ingredientQuantity.quantity.en, " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement("strong", null, ingredientQuantity.ingredient.name)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement("span", {
    className: "fr-group"
  }, ingredientQuantity.quantity.fr, " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement("strong", null, ingredientQuantity.ingredient.name)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement("span", {
    className: "es-group"
  }, ingredientQuantity.quantity.es, " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement("strong", null, ingredientQuantity.ingredient.name)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement("span", {
    className: "it-group"
  }, ingredientQuantity.quantity.it, " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement("strong", null, ingredientQuantity.ingredient.name)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement(_UI_Button_CloseButton_jsx__WEBPACK_IMPORTED_MODULE_21__.CloseButton, {
    onClick: handleRemove
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement(_UI_Button_EditButton_jsx__WEBPACK_IMPORTED_MODULE_20__.EditButton, {
    onClick: openForm
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement(_UI_Container_Modal_jsx__WEBPACK_IMPORTED_MODULE_18__.Modal, {
    isOpen: formIsOpen,
    close: closeForm,
    additionalClass: "admin-form-modal",
    animated: false
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement(_IqForm_index_jsx__WEBPACK_IMPORTED_MODULE_19__.IqForm, {
    ingredientQuantity: ingredientQuantity,
    onSubmitSuccess: handleUpdate,
    close: closeForm
  })));
};

/***/ }),

/***/ "./assets/Components/Admin/IngredientsQuantitiesInput/IqForm/IngredientSuggestedField.jsx":
/*!************************************************************************************************!*\
  !*** ./assets/Components/Admin/IngredientsQuantitiesInput/IqForm/IngredientSuggestedField.jsx ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IngredientSuggestedField": () => (/* binding */ IngredientSuggestedField)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.join.js */ "./node_modules/core-js/modules/es.array.join.js");
/* harmony import */ var core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.string.split.js */ "./node_modules/core-js/modules/es.string.split.js");
/* harmony import */ var core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.is-array.js */ "./node_modules/core-js/modules/es.array.is-array.js");
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.array.push.js */ "./node_modules/core-js/modules/es.array.push.js");
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.array.from.js */ "./node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.regexp.test.js */ "./node_modules/core-js/modules/es.regexp.test.js");
/* harmony import */ var core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.error.cause.js */ "./node_modules/core-js/modules/es.error.cause.js");
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/es.error.to-string.js */ "./node_modules/core-js/modules/es.error.to-string.js");
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _UI_Button_CloseButton__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../../../UI/Button/CloseButton */ "./assets/UI/Button/CloseButton.jsx");
/* harmony import */ var _UI_SuggestList__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../../../UI/SuggestList */ "./assets/UI/SuggestList.jsx");
/* harmony import */ var _CustomHook_fetch_useFetchQSearch__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../../../CustomHook/fetch/useFetchQSearch */ "./assets/CustomHook/fetch/useFetchQSearch.jsx");
/* harmony import */ var _entrypoints_i18n__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../../../../entrypoints/i18n */ "./assets/entrypoints/i18n.js");
/* harmony import */ var _SelectLinkedItems_AdminItemSuggest__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../../SelectLinkedItems/AdminItemSuggest */ "./assets/Components/Admin/SelectLinkedItems/AdminItemSuggest.jsx");


















function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }






var IngredientSuggestedField = function IngredientSuggestedField(_ref) {
  var onSelect = _ref.onSelect,
    formError = _ref.formError;
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_18__.useState)(''),
    _useState2 = _slicedToArray(_useState, 2),
    q = _useState2[0],
    setQ = _useState2[1];
  var handleChange = function handleChange(e) {
    setQ(e.target.value);
  };
  var _useFetchQSearch = (0,_CustomHook_fetch_useFetchQSearch__WEBPACK_IMPORTED_MODULE_21__.useFetchQSearch)('/' + _entrypoints_i18n__WEBPACK_IMPORTED_MODULE_22__["default"].language + '/api/ingredient/qSearch', q, 5),
    _useFetchQSearch2 = _slicedToArray(_useFetchQSearch, 4),
    ingredients = _useFetchQSearch2[0],
    resetIngredients = _useFetchQSearch2[1],
    isLoading = _useFetchQSearch2[2],
    error = _useFetchQSearch2[3];
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement("div", {
    className: "admin-form-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement("div", {
    className: 'form-group suggest-form-group' + (formError ? ' is-invalid' : '')
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement("label", {
    htmlFor: "q"
  }, "Ingr\xE9dient"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement("input", {
    type: "text",
    id: "q",
    className: "admin-form-control",
    placeholder: "Rechercher",
    name: "q",
    value: q,
    onChange: handleChange,
    autoFocus: true
  }), q !== '' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement(_UI_Button_CloseButton__WEBPACK_IMPORTED_MODULE_19__.CloseButton, {
    additionalClass: "admin-suggestedProducts-input-closer",
    onClick: function onClick() {
      return setQ('');
    }
  }), (ingredients === null || ingredients === void 0 ? void 0 : ingredients.length) > 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement(_UI_SuggestList__WEBPACK_IMPORTED_MODULE_20__.SuggestList, {
    additionalClass: "admin-suggest-list",
    suggests: ingredients,
    onClose: resetIngredients,
    onSelect: onSelect,
    render: function render(ingredient, selected) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement(IngredientSuggestItem, {
        key: ingredient.id,
        ingredient: ingredient,
        q: q,
        selected: selected,
        onSelect: onSelect
      });
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement("div", {
    className: "suggest-form-info"
  }, formError && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement("div", {
    className: "form-error"
  }, formError), isLoading && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement("div", {
    className: "admin-form-info"
  }, "Chargement...")));
};
var IngredientSuggestItem = function IngredientSuggestItem(_ref2) {
  var ingredient = _ref2.ingredient,
    q = _ref2.q,
    onSelect = _ref2.onSelect,
    selected = _ref2.selected;
  var name = ingredient.name.toUpperCase().split(q.toUpperCase()).join('<strong>' + q.toUpperCase() + '</strong>');
  var handleClick = function handleClick(e) {
    e.preventDefault();
    onSelect(ingredient);
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement("a", {
    className: 'admin-suggest-item' + (selected ? ' selected' : ''),
    href: "#",
    onClick: handleClick,
    role: "option",
    "aria-selected": selected
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement("div", {
    className: "admin-suggest-img",
    style: {
      backgroundImage: "url(".concat(ingredient.picture.path, ")")
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement("div", {
    className: "admin-suggest-text"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement("div", {
    dangerouslySetInnerHTML: {
      __html: name
    }
  })));
};

/***/ }),

/***/ "./assets/Components/Admin/IngredientsQuantitiesInput/IqForm/index.jsx":
/*!*****************************************************************************!*\
  !*** ./assets/Components/Admin/IngredientsQuantitiesInput/IqForm/index.jsx ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IqForm": () => (/* binding */ IqForm)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_values_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.values.js */ "./node_modules/core-js/modules/es.object.values.js");
/* harmony import */ var core_js_modules_es_object_values_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_values_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.is-array.js */ "./node_modules/core-js/modules/es.array.is-array.js");
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.array.push.js */ "./node_modules/core-js/modules/es.array.push.js");
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.array.from.js */ "./node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.regexp.test.js */ "./node_modules/core-js/modules/es.regexp.test.js");
/* harmony import */ var core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.error.cause.js */ "./node_modules/core-js/modules/es.error.cause.js");
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.error.to-string.js */ "./node_modules/core-js/modules/es.error.to-string.js");
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! yup */ "./node_modules/yup/index.esm.js");
/* harmony import */ var _CustomHook_form_useFormWithValidation__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../../../CustomHook/form/useFormWithValidation */ "./assets/CustomHook/form/useFormWithValidation.jsx");
/* harmony import */ var _functions_token__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../../../functions/token */ "./assets/functions/token.js");
/* harmony import */ var _styles_UI_Admin_Form_AdminTextField__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../../../styles/UI/Admin/Form/AdminTextField */ "./assets/styles/UI/Admin/Form/AdminTextField.jsx");
/* harmony import */ var _IngredientSuggestedField__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./IngredientSuggestedField */ "./assets/Components/Admin/IngredientsQuantitiesInput/IqForm/IngredientSuggestedField.jsx");
/* harmony import */ var _CustomHook_state_useOpenState__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../../../../CustomHook/state/useOpenState */ "./assets/CustomHook/state/useOpenState.jsx");
/* harmony import */ var _UI_Button_EditButton__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../../../../UI/Button/EditButton */ "./assets/UI/Button/EditButton.jsx");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

























var ingredientQuantitySchema = yup__WEBPACK_IMPORTED_MODULE_18__.object({
  ingredientId: yup__WEBPACK_IMPORTED_MODULE_18__.number().typeError('Vous devez choisir un ingrédient').required('Vous devez choisir un ingrédient'),
  enQuantity: yup__WEBPACK_IMPORTED_MODULE_18__.string().max(200, '200 caractères max.').required('La quantité (EN) est obligatoire'),
  frQuantity: yup__WEBPACK_IMPORTED_MODULE_18__.string().max(200, '200 caractères max.').required('La quantité (FR) est obligatoire'),
  esQuantity: yup__WEBPACK_IMPORTED_MODULE_18__.string().max(200, '200 caractères max.').required('La quantité (ES) est obligatoire'),
  itQuantity: yup__WEBPACK_IMPORTED_MODULE_18__.string().max(200, '200 caractères max.').required('La quantité (IT) est obligatoire')
}).required();
var prepareDefaultIngredientQuantity = function prepareDefaultIngredientQuantity(ingredientQuantity) {
  if (ingredientQuantity) {
    return {
      ingredientId: ingredientQuantity.ingredient.id,
      picturePath: ingredientQuantity.ingredient.picture.path,
      ingredientName: ingredientQuantity.ingredient.name,
      enQuantity: ingredientQuantity.quantity.en,
      frQuantity: ingredientQuantity.quantity.fr,
      esQuantity: ingredientQuantity.quantity.es,
      itQuantity: ingredientQuantity.quantity.it
    };
  }
  return {
    ingredientId: '',
    picturePath: '',
    ingredientName: '',
    enQuantity: '',
    frQuantity: '',
    esQuantity: '',
    itQuantity: ''
  };
};
var IqForm = function IqForm(_ref) {
  var _errors$ingredientId, _errors$enQuantity, _errors$frQuantity, _errors$esQuantity, _errors$itQuantity;
  var close = _ref.close,
    onSubmitSuccess = _ref.onSubmitSuccess,
    ingredientQuantity = _ref.ingredientQuantity;
  var _useFormWithValidatio = (0,_CustomHook_form_useFormWithValidation__WEBPACK_IMPORTED_MODULE_19__.useFormWithValidation)(ingredientQuantitySchema, prepareDefaultIngredientQuantity(ingredientQuantity)),
    handleSubmit = _useFormWithValidatio.handleSubmit,
    control = _useFormWithValidatio.control,
    errors = _useFormWithValidatio.errors,
    setError = _useFormWithValidatio.setError,
    setValue = _useFormWithValidatio.setValue,
    getValues = _useFormWithValidatio.getValues,
    watch = _useFormWithValidatio.watch,
    isSubmitting = _useFormWithValidatio.isSubmitting;
  var onSubmit = function onSubmit(formData) {
    var newIngredientQuantity = {
      id: (0,_functions_token__WEBPACK_IMPORTED_MODULE_20__.createToken)(7),
      ingredient: {
        id: formData.ingredientId,
        name: formData.ingredientName,
        picture: {
          path: formData.picturePath
        }
      },
      quantity: {
        en: formData.enQuantity,
        fr: formData.frQuantity,
        es: formData.esQuantity,
        it: formData.itQuantity
      }
    };
    onSubmitSuccess(newIngredientQuantity);
    close();
  };

  //quand on sélectionne un ingrédient, on hydrate les valeurs du form : ingredientId, picturePath, enIngredientName etc...
  var handleSelectIngredient = function handleSelectIngredient(ingredient) {
    setValue('ingredientId', ingredient.id);
    setValue('picturePath', ingredient.picture.path);
    setValue('ingredientName', ingredient.name);
    closeIngredientForm();
  };
  var _useOpenState = (0,_CustomHook_state_useOpenState__WEBPACK_IMPORTED_MODULE_23__.useOpenState)(ingredientQuantity ? false : true),
    _useOpenState2 = _slicedToArray(_useOpenState, 3),
    ingredientFormIsOpen = _useOpenState2[0],
    openIngredientForm = _useOpenState2[1],
    closeIngredientForm = _useOpenState2[2]; //si create, form ouvert / si update, form fermé
  var handleEditIngredient = function handleEditIngredient() {
    setValue('ingredientId', '');
    setValue('picturePath', '');
    setValue('ingredientName', '');
    openIngredientForm();
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default().createElement("form", {
    onSubmit: handleSubmit(onSubmit),
    className: "admin-form ingredient-quantity-form"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default().createElement("h2", {
    className: "admin-form-modal-title"
  }, "Ingr\xE9dient"), ingredientFormIsOpen ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default().createElement(_IngredientSuggestedField__WEBPACK_IMPORTED_MODULE_22__.IngredientSuggestedField, {
    onSelect: handleSelectIngredient,
    formError: (_errors$ingredientId = errors.ingredientId) === null || _errors$ingredientId === void 0 ? void 0 : _errors$ingredientId.message
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default().createElement("div", {
    className: "iq-card"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default().createElement("img", {
    src: getValues('picturePath'),
    alt: "Photo d'un ingr\xE9dient"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default().createElement("span", {
    className: "admin-form-modal-top-card-text"
  }, watch('frQuantity'), ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default().createElement("strong", null, getValues('ingredientName'))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default().createElement(_UI_Button_EditButton__WEBPACK_IMPORTED_MODULE_24__.EditButton, {
    onClick: handleEditIngredient
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default().createElement(_styles_UI_Admin_Form_AdminTextField__WEBPACK_IMPORTED_MODULE_21__.AdminTextField, {
    control: control,
    name: "enQuantity",
    error: (_errors$enQuantity = errors.enQuantity) === null || _errors$enQuantity === void 0 ? void 0 : _errors$enQuantity.message,
    maxLength: "200"
  }, "Quantit\xE9 (EN) *"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default().createElement(_styles_UI_Admin_Form_AdminTextField__WEBPACK_IMPORTED_MODULE_21__.AdminTextField, {
    control: control,
    name: "frQuantity",
    error: (_errors$frQuantity = errors.frQuantity) === null || _errors$frQuantity === void 0 ? void 0 : _errors$frQuantity.message,
    maxLength: "200",
    placeholder: "Ex: 1 cuill\xE8re de"
  }, "Quantit\xE9 (FR) *"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default().createElement(_styles_UI_Admin_Form_AdminTextField__WEBPACK_IMPORTED_MODULE_21__.AdminTextField, {
    control: control,
    name: "esQuantity",
    error: (_errors$esQuantity = errors.esQuantity) === null || _errors$esQuantity === void 0 ? void 0 : _errors$esQuantity.message,
    maxLength: "200"
  }, "Quantit\xE9 (ES) *"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default().createElement(_styles_UI_Admin_Form_AdminTextField__WEBPACK_IMPORTED_MODULE_21__.AdminTextField, {
    control: control,
    name: "itQuantity",
    error: (_errors$itQuantity = errors.itQuantity) === null || _errors$itQuantity === void 0 ? void 0 : _errors$itQuantity.message,
    maxLength: "200"
  }, "Quantit\xE9 (IT) *"), Object.values(errors).length > 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default().createElement("div", {
    className: "form-error"
  }, "Le formulaire comporte des erreurs"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default().createElement("div", {
    className: "admin-submit-group double"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default().createElement("button", {
    type: "button",
    className: "admin-button secondary-color",
    onClick: close
  }, "Annuler"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default().createElement("button", {
    type: "submit",
    className: "admin-button"
  }, "Valider")));
};

/***/ }),

/***/ "./assets/Components/Admin/IngredientsQuantitiesInput/index.jsx":
/*!**********************************************************************!*\
  !*** ./assets/Components/Admin/IngredientsQuantitiesInput/index.jsx ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IngredientsQuantitiesInput": () => (/* binding */ IngredientsQuantitiesInput)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_json_stringify_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.json.stringify.js */ "./node_modules/core-js/modules/es.json.stringify.js");
/* harmony import */ var core_js_modules_es_json_stringify_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_json_stringify_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.concat.js */ "./node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.filter.js */ "./node_modules/core-js/modules/es.array.filter.js");
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.map.js */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.array.is-array.js */ "./node_modules/core-js/modules/es.array.is-array.js");
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.array.push.js */ "./node_modules/core-js/modules/es.array.push.js");
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.array.from.js */ "./node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/es.regexp.test.js */ "./node_modules/core-js/modules/es.regexp.test.js");
/* harmony import */ var core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! core-js/modules/es.error.cause.js */ "./node_modules/core-js/modules/es.error.cause.js");
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! core-js/modules/es.error.to-string.js */ "./node_modules/core-js/modules/es.error.to-string.js");
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var _CustomHook_state_useOpenState__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../../CustomHook/state/useOpenState */ "./assets/CustomHook/state/useOpenState.jsx");
/* harmony import */ var _styles_Admin_IngredientsQuantitiesInput_index_css__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../../../styles/Admin/IngredientsQuantitiesInput/index.css */ "./assets/styles/Admin/IngredientsQuantitiesInput/index.css");
/* harmony import */ var _UI_Container_Modal__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../../../UI/Container/Modal */ "./assets/UI/Container/Modal.jsx");
/* harmony import */ var _UI_Button_PlusButton__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../../../UI/Button/PlusButton */ "./assets/UI/Button/PlusButton.jsx");
/* harmony import */ var _IqCard_jsx__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./IqCard.jsx */ "./assets/Components/Admin/IngredientsQuantitiesInput/IqCard.jsx");
/* harmony import */ var _IqForm_index_jsx__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./IqForm/index.jsx */ "./assets/Components/Admin/IngredientsQuantitiesInput/IqForm/index.jsx");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }



























var IngredientsQuantitiesInput = function IngredientsQuantitiesInput(_ref) {
  var name = _ref.name,
    value = _ref.value;
  var _useOpenState = (0,_CustomHook_state_useOpenState__WEBPACK_IMPORTED_MODULE_21__.useOpenState)(false),
    _useOpenState2 = _slicedToArray(_useOpenState, 3),
    formIsOpen = _useOpenState2[0],
    openForm = _useOpenState2[1],
    closeForm = _useOpenState2[2];

  //état local
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_20__.useState)([]),
    _useState2 = _slicedToArray(_useState, 2),
    ingredientsQuantities = _useState2[0],
    setIngredientsQuantities = _useState2[1];
  (0,react__WEBPACK_IMPORTED_MODULE_20__.useEffect)(function () {
    if (value) {
      setIngredientsQuantities(JSON.parse(value));
    }
  }, []);

  //état local stringifié pour submit
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_20__.useState)(''),
    _useState4 = _slicedToArray(_useState3, 2),
    ingredientsQuantitiesString = _useState4[0],
    setIngredientsQuantitiesString = _useState4[1];
  (0,react__WEBPACK_IMPORTED_MODULE_20__.useEffect)(function () {
    if (ingredientsQuantities.length < 1) {
      setIngredientsQuantitiesString('');
    } else {
      setIngredientsQuantitiesString(JSON.stringify(ingredientsQuantities));
    }
  }, [ingredientsQuantities]);
  var addIngredientQuantity = function addIngredientQuantity(ingredientQuantity) {
    setIngredientsQuantities(function (ingredientsQuantities) {
      return [].concat(_toConsumableArray(ingredientsQuantities), [ingredientQuantity]);
    });
  };
  var removeIngredientQuantity = function removeIngredientQuantity(ingredientQuantity) {
    setIngredientsQuantities(function (ingredientsQuantities) {
      return ingredientsQuantities.filter(function (i) {
        return i.id !== ingredientQuantity.id;
      });
    });
  };
  var updateIngredientQuantity = function updateIngredientQuantity(id, ingredientQuantity) {
    setIngredientsQuantities(function (ingredientsQuantities) {
      return ingredientsQuantities.map(function (i) {
        return i.id === id ? ingredientQuantity : i;
      });
    });
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_20___default().createElement("div", {
    className: "admin-form-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_20___default().createElement("label", null, "Ingr\xE9dients *"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_20___default().createElement("div", {
    className: "admin-select-list"
  }, ingredientsQuantities.map(function (ingredientQuantity) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_20___default().createElement(_IqCard_jsx__WEBPACK_IMPORTED_MODULE_25__.IqCard, {
      key: ingredientQuantity.id,
      ingredientQuantity: ingredientQuantity,
      remove: removeIngredientQuantity,
      update: updateIngredientQuantity
    });
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_20___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_20___default().createElement(_UI_Button_PlusButton__WEBPACK_IMPORTED_MODULE_24__.PlusButton, {
    className: "admin-add-button",
    onClick: openForm
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_20___default().createElement(_UI_Container_Modal__WEBPACK_IMPORTED_MODULE_23__.Modal, {
    isOpen: formIsOpen,
    close: closeForm,
    animated: false,
    additionalClass: "admin-form-modal"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_20___default().createElement(_IqForm_index_jsx__WEBPACK_IMPORTED_MODULE_26__.IqForm, {
    onSubmitSuccess: addIngredientQuantity,
    close: closeForm
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_20___default().createElement("input", {
    type: "hidden",
    name: name,
    value: ingredientsQuantitiesString
  }));
};

/***/ }),

/***/ "./assets/Components/Admin/PackagingChoicesInput/AdminPackagingCard.jsx":
/*!******************************************************************************!*\
  !*** ./assets/Components/Admin/PackagingChoicesInput/AdminPackagingCard.jsx ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AdminPackagingCard": () => (/* binding */ AdminPackagingCard)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.is-array.js */ "./node_modules/core-js/modules/es.array.is-array.js");
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.array.push.js */ "./node_modules/core-js/modules/es.array.push.js");
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.array.from.js */ "./node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.regexp.test.js */ "./node_modules/core-js/modules/es.regexp.test.js");
/* harmony import */ var core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.error.cause.js */ "./node_modules/core-js/modules/es.error.cause.js");
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.error.to-string.js */ "./node_modules/core-js/modules/es.error.to-string.js");
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _UI_Button_CloseButton__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../UI/Button/CloseButton */ "./assets/UI/Button/CloseButton.jsx");
/* harmony import */ var _styles_UI_Admin_Form_AdminShowCardRow__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../styles/UI/Admin/Form/AdminShowCardRow */ "./assets/styles/UI/Admin/Form/AdminShowCardRow.jsx");
/* harmony import */ var _functions_formaters__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../../functions/formaters */ "./assets/functions/formaters.js");
/* harmony import */ var _UI_Button_EditButton__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../../UI/Button/EditButton */ "./assets/UI/Button/EditButton.jsx");
/* harmony import */ var _UI_Container_Modal__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../../UI/Container/Modal */ "./assets/UI/Container/Modal.jsx");
/* harmony import */ var _CustomHook_state_useOpenState__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../../../CustomHook/state/useOpenState */ "./assets/CustomHook/state/useOpenState.jsx");
/* harmony import */ var _PackagingChoicesForm__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./PackagingChoicesForm */ "./assets/Components/Admin/PackagingChoicesInput/PackagingChoicesForm.jsx");
















function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }








var AdminPackagingCard = function AdminPackagingCard(_ref) {
  var packaging = _ref.packaging,
    remove = _ref.remove,
    update = _ref.update,
    packagingChoices = _ref.packagingChoices,
    productId = _ref.productId,
    selectAsBase = _ref.selectAsBase;
  var handleRemove = function handleRemove() {
    remove(packaging);
  };
  var handleUpdate = function handleUpdate(formData) {
    update(packaging.publicRef, formData);
  };
  var _useOpenState = (0,_CustomHook_state_useOpenState__WEBPACK_IMPORTED_MODULE_22__.useOpenState)(false),
    _useOpenState2 = _slicedToArray(_useOpenState, 3),
    formIsOpen = _useOpenState2[0],
    openForm = _useOpenState2[1],
    closeForm = _useOpenState2[2];
  var handleClick = function handleClick(e) {
    e.preventDefault();
    selectAsBase(packaging);
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement((react__WEBPACK_IMPORTED_MODULE_16___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement("div", {
    className: 'admin-select-card admin-packaging-card' + (packaging.base ? ' active' : ''),
    onClick: handleClick,
    title: packaging.base ? 'Conditionnement de base' : 'Choisir comme conditionnement de base'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement(_UI_Button_CloseButton__WEBPACK_IMPORTED_MODULE_17__.CloseButton, {
    className: "admin-select-card-closer",
    onClick: handleRemove
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement(_UI_Button_EditButton__WEBPACK_IMPORTED_MODULE_20__.EditButton, {
    className: "admin-select-card-edit-button",
    onClick: openForm
  }), packaging.base && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement("div", {
    className: "center-wrapper"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement("div", {
    className: "admin-select-card-badge"
  }, "Conditionnement de base")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement(_styles_UI_Admin_Form_AdminShowCardRow__WEBPACK_IMPORTED_MODULE_18__.AdminShowCardRow, {
    label: "R\xE9f. publique",
    value: packaging.publicRef
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement(_styles_UI_Admin_Form_AdminShowCardRow__WEBPACK_IMPORTED_MODULE_18__.AdminShowCardRow, {
    label: "R\xE9f. priv\xE9e",
    value: packaging.privateRef
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement(_styles_UI_Admin_Form_AdminShowCardRow__WEBPACK_IMPORTED_MODULE_18__.AdminShowCardRow, {
    label: "Code EAN",
    value: packaging.eanCode
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement(_styles_UI_Admin_Form_AdminShowCardRow__WEBPACK_IMPORTED_MODULE_18__.AdminShowCardRow, {
    label: "Label (EN)",
    value: packaging.enLabel,
    lang: "en"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement(_styles_UI_Admin_Form_AdminShowCardRow__WEBPACK_IMPORTED_MODULE_18__.AdminShowCardRow, {
    label: "Label (FR)",
    value: packaging.frLabel,
    lang: "fr"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement(_styles_UI_Admin_Form_AdminShowCardRow__WEBPACK_IMPORTED_MODULE_18__.AdminShowCardRow, {
    label: "Label (ES)",
    value: packaging.esLabel,
    lang: "es"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement(_styles_UI_Admin_Form_AdminShowCardRow__WEBPACK_IMPORTED_MODULE_18__.AdminShowCardRow, {
    label: "Label (IT)",
    value: packaging.itLabel,
    lang: "it"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement(_styles_UI_Admin_Form_AdminShowCardRow__WEBPACK_IMPORTED_MODULE_18__.AdminShowCardRow, {
    label: "Prix public (HT)",
    value: (0,_functions_formaters__WEBPACK_IMPORTED_MODULE_19__.priceFormater)(packaging.consumerPriceHT)
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement(_styles_UI_Admin_Form_AdminShowCardRow__WEBPACK_IMPORTED_MODULE_18__.AdminShowCardRow, {
    label: "Prix pro (HT)",
    value: (0,_functions_formaters__WEBPACK_IMPORTED_MODULE_19__.priceFormater)(packaging.businessPriceHT)
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement(_styles_UI_Admin_Form_AdminShowCardRow__WEBPACK_IMPORTED_MODULE_18__.AdminShowCardRow, {
    label: "Poids (g)",
    value: packaging.weight
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement(_styles_UI_Admin_Form_AdminShowCardRow__WEBPACK_IMPORTED_MODULE_18__.AdminShowCardRow, {
    label: "Droits d'accise",
    value: packaging.exciseTax ? (0,_functions_formaters__WEBPACK_IMPORTED_MODULE_19__.priceFormater)(packaging.exciseTax) : ''
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement(_styles_UI_Admin_Form_AdminShowCardRow__WEBPACK_IMPORTED_MODULE_18__.AdminShowCardRow, {
    label: "Cotisation S\xE9curit\xE9 Sociale (France)",
    value: packaging.frSocialTax ? (0,_functions_formaters__WEBPACK_IMPORTED_MODULE_19__.priceFormater)(packaging.frSocialTax) : ''
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement(_styles_UI_Admin_Form_AdminShowCardRow__WEBPACK_IMPORTED_MODULE_18__.AdminShowCardRow, {
    label: "Stock",
    value: packaging.stock
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement(_UI_Container_Modal__WEBPACK_IMPORTED_MODULE_21__.Modal, {
    isOpen: formIsOpen,
    close: closeForm,
    animated: false,
    additionalClass: "admin-form-modal"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement(_PackagingChoicesForm__WEBPACK_IMPORTED_MODULE_23__.PackagingChoicesForm, {
    onSubmitSuccess: handleUpdate,
    close: closeForm,
    packaging: packaging,
    packagingChoices: packagingChoices,
    productId: productId
  })));
};

/***/ }),

/***/ "./assets/Components/Admin/PackagingChoicesInput/PackagingChoicesForm.jsx":
/*!********************************************************************************!*\
  !*** ./assets/Components/Admin/PackagingChoicesInput/PackagingChoicesForm.jsx ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PackagingChoicesForm": () => (/* binding */ PackagingChoicesForm)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.find.js */ "./node_modules/core-js/modules/es.array.find.js");
/* harmony import */ var core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_object_values_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.object.values.js */ "./node_modules/core-js/modules/es.object.values.js");
/* harmony import */ var core_js_modules_es_object_values_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_values_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.symbol.to-primitive.js */ "./node_modules/core-js/modules/es.symbol.to-primitive.js");
/* harmony import */ var core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.date.to-primitive.js */ "./node_modules/core-js/modules/es.date.to-primitive.js");
/* harmony import */ var core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.error.cause.js */ "./node_modules/core-js/modules/es.error.cause.js");
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.error.to-string.js */ "./node_modules/core-js/modules/es.error.to-string.js");
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.number.constructor.js */ "./node_modules/core-js/modules/es.number.constructor.js");
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.object.keys.js */ "./node_modules/core-js/modules/es.object.keys.js");
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.array.filter.js */ "./node_modules/core-js/modules/es.array.filter.js");
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptor.js */ "./node_modules/core-js/modules/es.object.get-own-property-descriptor.js");
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.array.push.js */ "./node_modules/core-js/modules/es.array.push.js");
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptors.js */ "./node_modules/core-js/modules/es.object.get-own-property-descriptors.js");
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var core_js_modules_es_object_define_properties_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! core-js/modules/es.object.define-properties.js */ "./node_modules/core-js/modules/es.object.define-properties.js");
/* harmony import */ var core_js_modules_es_object_define_properties_js__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_properties_js__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! core-js/modules/es.array.is-array.js */ "./node_modules/core-js/modules/es.array.is-array.js");
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_25__);
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! core-js/modules/es.array.from.js */ "./node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_26___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_26__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_27___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_27__);
/* harmony import */ var core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! core-js/modules/es.regexp.test.js */ "./node_modules/core-js/modules/es.regexp.test.js");
/* harmony import */ var core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_28___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_28__);
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! core-js/modules/es.promise.js */ "./node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_29___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_29__);
/* harmony import */ var core_js_modules_es_symbol_async_iterator_js__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! core-js/modules/es.symbol.async-iterator.js */ "./node_modules/core-js/modules/es.symbol.async-iterator.js");
/* harmony import */ var core_js_modules_es_symbol_async_iterator_js__WEBPACK_IMPORTED_MODULE_30___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_async_iterator_js__WEBPACK_IMPORTED_MODULE_30__);
/* harmony import */ var core_js_modules_es_symbol_to_string_tag_js__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! core-js/modules/es.symbol.to-string-tag.js */ "./node_modules/core-js/modules/es.symbol.to-string-tag.js");
/* harmony import */ var core_js_modules_es_symbol_to_string_tag_js__WEBPACK_IMPORTED_MODULE_31___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_to_string_tag_js__WEBPACK_IMPORTED_MODULE_31__);
/* harmony import */ var core_js_modules_es_json_to_string_tag_js__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! core-js/modules/es.json.to-string-tag.js */ "./node_modules/core-js/modules/es.json.to-string-tag.js");
/* harmony import */ var core_js_modules_es_json_to_string_tag_js__WEBPACK_IMPORTED_MODULE_32___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_json_to_string_tag_js__WEBPACK_IMPORTED_MODULE_32__);
/* harmony import */ var core_js_modules_es_math_to_string_tag_js__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! core-js/modules/es.math.to-string-tag.js */ "./node_modules/core-js/modules/es.math.to-string-tag.js");
/* harmony import */ var core_js_modules_es_math_to_string_tag_js__WEBPACK_IMPORTED_MODULE_33___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_math_to_string_tag_js__WEBPACK_IMPORTED_MODULE_33__);
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! core-js/modules/es.object.create.js */ "./node_modules/core-js/modules/es.object.create.js");
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_34___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_34__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of.js */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_35___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_35__);
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of.js */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_36___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_36__);
/* harmony import */ var core_js_modules_es_array_reverse_js__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! core-js/modules/es.array.reverse.js */ "./node_modules/core-js/modules/es.array.reverse.js");
/* harmony import */ var core_js_modules_es_array_reverse_js__WEBPACK_IMPORTED_MODULE_37___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_reverse_js__WEBPACK_IMPORTED_MODULE_37__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_38___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_38__);
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! yup */ "./node_modules/yup/index.esm.js");
/* harmony import */ var _CustomHook_form_useFormWithValidation__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ../../../CustomHook/form/useFormWithValidation */ "./assets/CustomHook/form/useFormWithValidation.jsx");
/* harmony import */ var _styles_UI_Admin_Form_AdminTextField__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ../../../styles/UI/Admin/Form/AdminTextField */ "./assets/styles/UI/Admin/Form/AdminTextField.jsx");
/* harmony import */ var _functions_api__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ../../../functions/api */ "./assets/functions/api.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }






































function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }





var packagingSchema = yup__WEBPACK_IMPORTED_MODULE_39__.object({
  publicRef: yup__WEBPACK_IMPORTED_MODULE_39__.string().max(200, '200 caractères max.').required('Le réf. publique est obligatoire'),
  privateRef: yup__WEBPACK_IMPORTED_MODULE_39__.string().max(200, '200 caractères max.'),
  enLabel: yup__WEBPACK_IMPORTED_MODULE_39__.string().max(200, '200 caractères max.'),
  frLabel: yup__WEBPACK_IMPORTED_MODULE_39__.string().max(200, '200 caractères max.'),
  esLabel: yup__WEBPACK_IMPORTED_MODULE_39__.string().max(200, '200 caractères max.'),
  itLabel: yup__WEBPACK_IMPORTED_MODULE_39__.string().max(200, '200 caractères max.'),
  consumerPriceHT: yup__WEBPACK_IMPORTED_MODULE_39__.number().typeError('Cette valeur doit être un nombre').positive('Cette valeur doit être supérieure à 0').required('Le prix public (HT) est obligatoire'),
  businessPriceHT: yup__WEBPACK_IMPORTED_MODULE_39__.number().typeError('Cette valeur doit être un nombre').positive('Cette valeur doit être supérieure à 0').required('Le prix pro (HT) est obligatoire'),
  stock: yup__WEBPACK_IMPORTED_MODULE_39__.number().typeError('Cette valeur doit être un nombre').min(0, 'Cette valeur ne peut être négative').required('Le stock est obligatoire'),
  eanCode: yup__WEBPACK_IMPORTED_MODULE_39__.string().max(200, '200 caractères max.').required('Le code EAN est obligatoire'),
  weight: yup__WEBPACK_IMPORTED_MODULE_39__.number().typeError('Cette valeur doit être un nombre').positive('Cette valeur doit être supérieure à zéro').required('Le poids (g) est obligatoire'),
  exciseTax: yup__WEBPACK_IMPORTED_MODULE_39__.number().typeError('Cette valeur doit être un nombre').positive('Cette valeur doit être supérieure à zéro'),
  frSocialTax: yup__WEBPACK_IMPORTED_MODULE_39__.number().typeError('Cette valeur doit être un nombre').positive('Cette valeur doit être supérieure à zéro')
}).required();
var defaultPackaging = {
  publicRef: '',
  privateRef: '',
  enLabel: '',
  frLabel: '',
  esLabel: '',
  itLabel: '',
  consumerPriceHT: '',
  businessPriceHT: '',
  stock: '',
  eanCode: '',
  weight: '',
  exciseTax: '',
  frSocialTax: ''
};
var prepareDefaultPackaging = function prepareDefaultPackaging(packaging) {
  if (!packaging) {
    return defaultPackaging;
  }
  return _objectSpread(_objectSpread({}, packaging), {}, {
    consumerPriceHT: packaging.consumerPriceHT / 100,
    businessPriceHT: packaging.businessPriceHT / 100,
    exciseTax: packaging.exciseTax ? packaging.exciseTax / 100 : '',
    frSocialTax: packaging.frSocialTax ? packaging.frSocialTax / 100 : ''
  });
};
var PackagingChoicesForm = function PackagingChoicesForm(_ref) {
  var _errors$publicRef, _errors$privateRef, _errors$eanCode, _errors$enLabel, _errors$frLabel, _errors$esLabel, _errors$itLabel, _errors$consumerPrice, _errors$businessPrice, _errors$weight, _errors$exciseTax, _errors$frSocialTax, _errors$stock;
  var onSubmitSuccess = _ref.onSubmitSuccess,
    close = _ref.close,
    packagingChoices = _ref.packagingChoices,
    productId = _ref.productId,
    _ref$packaging = _ref.packaging,
    packaging = _ref$packaging === void 0 ? null : _ref$packaging;
  var _useFormWithValidatio = (0,_CustomHook_form_useFormWithValidation__WEBPACK_IMPORTED_MODULE_40__.useFormWithValidation)(packagingSchema, prepareDefaultPackaging(packaging)),
    handleSubmit = _useFormWithValidatio.handleSubmit,
    control = _useFormWithValidatio.control,
    errors = _useFormWithValidatio.errors,
    setError = _useFormWithValidatio.setError,
    isSubmitting = _useFormWithValidatio.isSubmitting;
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_38__.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    isLoading = _useState2[0],
    setLoading = _useState2[1];
  var onSubmit = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(formData) {
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            if (!isLoading) {
              _context.next = 2;
              break;
            }
            return _context.abrupt("return");
          case 2:
            setLoading(true);
            //validation Unique publicRef côté front (en cas de update, on vérifie qu'on a modifié la publicRef)
            if (packagingChoices.find(function (p) {
              if (packaging && packaging.publicRef === formData.publicRef) {
                return false;
              }
              return p.publicRef === formData.publicRef;
            })) {
              _context.next = 17;
              break;
            }
            _context.prev = 4;
            _context.next = 7;
            return (0,_functions_api__WEBPACK_IMPORTED_MODULE_42__.apiFetch)('/admin/api/packaging/validation/uniquePublicRef/' + (productId !== null && productId !== void 0 ? productId : '0') + '/' + formData.publicRef);
          case 7:
            //dans create productId est undefined --> on envoie 0
            //priceTransformer
            formData.consumerPriceHT = Math.round(formData.consumerPriceHT * 100);
            formData.businessPriceHT = Math.round(formData.businessPriceHT * 100);
            formData.exciseTax = Math.round(formData.exciseTax * 100);
            formData.frSocialTax = Math.round(formData.frSocialTax * 100);
            onSubmitSuccess(formData);
            close();
            _context.next = 17;
            break;
          case 15:
            _context.prev = 15;
            _context.t0 = _context["catch"](4);
          case 17:
            setError('publicRef', {
              type: 'custom',
              message: 'La réf. publique "' + formData.publicRef + '" est déjà utilisée'
            });
            setLoading(false);
          case 19:
          case "end":
            return _context.stop();
        }
      }, _callee, null, [[4, 15]]);
    }));
    return function onSubmit(_x2) {
      return _ref2.apply(this, arguments);
    };
  }();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_38___default().createElement("form", {
    className: "admin-form",
    onSubmit: handleSubmit(onSubmit)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_38___default().createElement("h2", {
    className: "admin-form-modal-title"
  }, "Conditionnement"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_38___default().createElement(_styles_UI_Admin_Form_AdminTextField__WEBPACK_IMPORTED_MODULE_41__.AdminTextField, {
    control: control,
    name: "publicRef",
    error: (_errors$publicRef = errors.publicRef) === null || _errors$publicRef === void 0 ? void 0 : _errors$publicRef.message,
    maxLength: "200"
  }, "R\xE9f. publique *"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_38___default().createElement(_styles_UI_Admin_Form_AdminTextField__WEBPACK_IMPORTED_MODULE_41__.AdminTextField, {
    control: control,
    name: "privateRef",
    error: (_errors$privateRef = errors.privateRef) === null || _errors$privateRef === void 0 ? void 0 : _errors$privateRef.message,
    maxLength: "200"
  }, "R\xE9f. priv\xE9e"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_38___default().createElement(_styles_UI_Admin_Form_AdminTextField__WEBPACK_IMPORTED_MODULE_41__.AdminTextField, {
    control: control,
    name: "eanCode",
    error: (_errors$eanCode = errors.eanCode) === null || _errors$eanCode === void 0 ? void 0 : _errors$eanCode.message,
    maxLength: "200"
  }, "Code EAN *"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_38___default().createElement("div", {
    className: "admin-form-modal-apparted"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_38___default().createElement("div", {
    className: "admin-form-modal-apparted-title"
  }, "Label : (ex: 20cl - si c'est \xE0 l'unit\xE9 ne rien mettre)"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_38___default().createElement(_styles_UI_Admin_Form_AdminTextField__WEBPACK_IMPORTED_MODULE_41__.AdminTextField, {
    control: control,
    name: "enLabel",
    error: (_errors$enLabel = errors.enLabel) === null || _errors$enLabel === void 0 ? void 0 : _errors$enLabel.message,
    maxLength: "200"
  }, "EN"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_38___default().createElement(_styles_UI_Admin_Form_AdminTextField__WEBPACK_IMPORTED_MODULE_41__.AdminTextField, {
    control: control,
    name: "frLabel",
    error: (_errors$frLabel = errors.frLabel) === null || _errors$frLabel === void 0 ? void 0 : _errors$frLabel.message,
    maxLength: "200"
  }, "FR"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_38___default().createElement(_styles_UI_Admin_Form_AdminTextField__WEBPACK_IMPORTED_MODULE_41__.AdminTextField, {
    control: control,
    name: "esLabel",
    error: (_errors$esLabel = errors.esLabel) === null || _errors$esLabel === void 0 ? void 0 : _errors$esLabel.message,
    maxLength: "200"
  }, "ES"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_38___default().createElement(_styles_UI_Admin_Form_AdminTextField__WEBPACK_IMPORTED_MODULE_41__.AdminTextField, {
    control: control,
    name: "itLabel",
    error: (_errors$itLabel = errors.itLabel) === null || _errors$itLabel === void 0 ? void 0 : _errors$itLabel.message,
    maxLength: "200"
  }, "IT")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_38___default().createElement(_styles_UI_Admin_Form_AdminTextField__WEBPACK_IMPORTED_MODULE_41__.AdminTextField, {
    type: "number",
    control: control,
    name: "consumerPriceHT",
    error: (_errors$consumerPrice = errors.consumerPriceHT) === null || _errors$consumerPrice === void 0 ? void 0 : _errors$consumerPrice.message,
    maxLength: "200"
  }, "Prix public (HT) *"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_38___default().createElement(_styles_UI_Admin_Form_AdminTextField__WEBPACK_IMPORTED_MODULE_41__.AdminTextField, {
    type: "number",
    control: control,
    name: "businessPriceHT",
    error: (_errors$businessPrice = errors.businessPriceHT) === null || _errors$businessPrice === void 0 ? void 0 : _errors$businessPrice.message,
    maxLength: "200"
  }, "Prix pro (HT) *"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_38___default().createElement(_styles_UI_Admin_Form_AdminTextField__WEBPACK_IMPORTED_MODULE_41__.AdminTextField, {
    type: "number",
    control: control,
    name: "weight",
    error: (_errors$weight = errors.weight) === null || _errors$weight === void 0 ? void 0 : _errors$weight.message,
    maxLength: "200"
  }, "Poids (g) *"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_38___default().createElement(_styles_UI_Admin_Form_AdminTextField__WEBPACK_IMPORTED_MODULE_41__.AdminTextField, {
    type: "number",
    control: control,
    name: "exciseTax",
    error: (_errors$exciseTax = errors.exciseTax) === null || _errors$exciseTax === void 0 ? void 0 : _errors$exciseTax.message,
    maxLength: "200"
  }, "Droits d'accise (\u20AC) *"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_38___default().createElement(_styles_UI_Admin_Form_AdminTextField__WEBPACK_IMPORTED_MODULE_41__.AdminTextField, {
    type: "number",
    control: control,
    name: "frSocialTax",
    error: (_errors$frSocialTax = errors.frSocialTax) === null || _errors$frSocialTax === void 0 ? void 0 : _errors$frSocialTax.message,
    maxLength: "200"
  }, "Cotisation S\xE9curit\xE9 Sociale (France) (\u20AC) *"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_38___default().createElement(_styles_UI_Admin_Form_AdminTextField__WEBPACK_IMPORTED_MODULE_41__.AdminTextField, {
    type: "number",
    control: control,
    name: "stock",
    error: (_errors$stock = errors.stock) === null || _errors$stock === void 0 ? void 0 : _errors$stock.message,
    maxLength: "200"
  }, "Stock *"), Object.values(errors).length > 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_38___default().createElement("div", {
    className: "form-error"
  }, "Le formulaire comporte des erreurs"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_38___default().createElement("div", {
    className: "admin-submit-group double"
  }, isLoading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_38___default().createElement("div", {
    className: "admin-form-info"
  }, "Chargement...") : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_38___default().createElement((react__WEBPACK_IMPORTED_MODULE_38___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_38___default().createElement("button", {
    type: "button",
    className: "admin-button secondary-color",
    onClick: close
  }, "Annuler"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_38___default().createElement("button", {
    type: "submit",
    className: "admin-button"
  }, "Valider"))));
};

/***/ }),

/***/ "./assets/Components/Admin/PackagingChoicesInput/index.jsx":
/*!*****************************************************************!*\
  !*** ./assets/Components/Admin/PackagingChoicesInput/index.jsx ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PackagingChoicesInput": () => (/* binding */ PackagingChoicesInput)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_json_stringify_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.json.stringify.js */ "./node_modules/core-js/modules/es.json.stringify.js");
/* harmony import */ var core_js_modules_es_json_stringify_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_json_stringify_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.filter.js */ "./node_modules/core-js/modules/es.array.filter.js");
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.concat.js */ "./node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.map.js */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.array.is-array.js */ "./node_modules/core-js/modules/es.array.is-array.js");
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.array.push.js */ "./node_modules/core-js/modules/es.array.push.js");
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.array.from.js */ "./node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/es.regexp.test.js */ "./node_modules/core-js/modules/es.regexp.test.js");
/* harmony import */ var core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! core-js/modules/es.error.cause.js */ "./node_modules/core-js/modules/es.error.cause.js");
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! core-js/modules/es.error.to-string.js */ "./node_modules/core-js/modules/es.error.to-string.js");
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var _UI_Button_PlusButton__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../../UI/Button/PlusButton */ "./assets/UI/Button/PlusButton.jsx");
/* harmony import */ var _CustomHook_state_useOpenState__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../../../CustomHook/state/useOpenState */ "./assets/CustomHook/state/useOpenState.jsx");
/* harmony import */ var _UI_Container_Modal__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../../../UI/Container/Modal */ "./assets/UI/Container/Modal.jsx");
/* harmony import */ var _PackagingChoicesForm__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./PackagingChoicesForm */ "./assets/Components/Admin/PackagingChoicesInput/PackagingChoicesForm.jsx");
/* harmony import */ var _AdminPackagingCard__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./AdminPackagingCard */ "./assets/Components/Admin/PackagingChoicesInput/AdminPackagingCard.jsx");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }


























var PackagingChoicesInput = function PackagingChoicesInput(_ref) {
  var name = _ref.name,
    value = _ref.value,
    productId = _ref.productId;
  //à l'ouverture, si une value est passée on la prend en compte
  (0,react__WEBPACK_IMPORTED_MODULE_20__.useEffect)(function () {
    if (value) {
      setPackagingChoicesString(value);
      setPackagingChoices(JSON.parse(value));
    }
  }, [value]);

  //état local convertit en string pour submit
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_20__.useState)(''),
    _useState2 = _slicedToArray(_useState, 2),
    packagingChoicesString = _useState2[0],
    setPackagingChoicesString = _useState2[1];
  //état local
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_20__.useState)([]),
    _useState4 = _slicedToArray(_useState3, 2),
    packagingChoices = _useState4[0],
    setPackagingChoices = _useState4[1];
  //quand état local change, on met à jour la string
  (0,react__WEBPACK_IMPORTED_MODULE_20__.useEffect)(function () {
    if (packagingChoices.length < 1) {
      setPackagingChoicesString(''); // pour que coté serveur on puisse valider Assert\NotBlank
    } else {
      //si un seul packagingChoices, on le met comme packaging de base d'office
      if (packagingChoices.length === 1) {
        packagingChoices[0].base = true;
      }
      setPackagingChoicesString(JSON.stringify(packagingChoices));
    }
  }, [packagingChoices]);
  var removePackaging = function removePackaging(packaging) {
    setPackagingChoices(function (packagingChoices) {
      return packagingChoices.filter(function (p) {
        return p.publicRef !== packaging.publicRef;
      });
    });
    //si le packaging supprimé était le packaging de base, il faut en désigner un (n'importe lequel) d'office
    if (packaging.base) {
      setPackagingChoices(function (packagingChoices) {
        packagingChoices[0].base = true;
        return packagingChoices;
      });
    }
  };
  var addPackaging = function addPackaging(newPackaging) {
    setPackagingChoices(function (packagingChoices) {
      return [].concat(_toConsumableArray(packagingChoices), [newPackaging]);
    });
  };
  var updatePackaging = function updatePackaging(publicRef, packaging) {
    setPackagingChoices(function (packagingChoices) {
      return packagingChoices.map(function (p) {
        return p.publicRef === publicRef ? packaging : p;
      });
    });
  };
  var handleSelectAsBase = function handleSelectAsBase(packaging) {
    setPackagingChoices(function (packagingChoices) {
      return packagingChoices.map(function (pc) {
        if (pc.publicRef === packaging.publicRef) {
          pc.base = true;
        } else {
          pc.base = false;
        }
        return pc;
      });
    });
  };
  var _useOpenState = (0,_CustomHook_state_useOpenState__WEBPACK_IMPORTED_MODULE_22__.useOpenState)(false),
    _useOpenState2 = _slicedToArray(_useOpenState, 3),
    formIsOpen = _useOpenState2[0],
    openForm = _useOpenState2[1],
    closeForm = _useOpenState2[2];
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_20___default().createElement("div", {
    className: "admin-form-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_20___default().createElement("label", null, "Conditionnements *"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_20___default().createElement("div", {
    className: "admin-select-list"
  }, packagingChoices.map(function (packaging) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_20___default().createElement(_AdminPackagingCard__WEBPACK_IMPORTED_MODULE_25__.AdminPackagingCard, {
      key: packaging.publicRef,
      packaging: packaging,
      remove: removePackaging,
      update: updatePackaging,
      packagingChoices: packagingChoices,
      productId: productId,
      selectAsBase: handleSelectAsBase
    });
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_20___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_20___default().createElement(_UI_Button_PlusButton__WEBPACK_IMPORTED_MODULE_21__.PlusButton, {
    className: "admin-add-button",
    onClick: openForm
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_20___default().createElement(_UI_Container_Modal__WEBPACK_IMPORTED_MODULE_23__.Modal, {
    isOpen: formIsOpen,
    close: closeForm,
    animated: false,
    additionalClass: "admin-form-modal"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_20___default().createElement(_PackagingChoicesForm__WEBPACK_IMPORTED_MODULE_24__.PackagingChoicesForm, {
    onSubmitSuccess: addPackaging,
    close: closeForm,
    packagingChoices: packagingChoices,
    productId: productId
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_20___default().createElement("input", {
    type: "hidden",
    name: name,
    value: packagingChoicesString
  }));
};

/***/ }),

/***/ "./assets/Components/Admin/PurchaseStatusUpdater/index.jsx":
/*!*****************************************************************!*\
  !*** ./assets/Components/Admin/PurchaseStatusUpdater/index.jsx ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PurchaseStatusUpdater": () => (/* binding */ PurchaseStatusUpdater)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.error.to-string.js */ "./node_modules/core-js/modules/es.error.to-string.js");
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.date.to-string.js */ "./node_modules/core-js/modules/es.date.to-string.js");
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string.js */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_json_stringify_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.json.stringify.js */ "./node_modules/core-js/modules/es.json.stringify.js");
/* harmony import */ var core_js_modules_es_json_stringify_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_json_stringify_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.map.js */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.array.is-array.js */ "./node_modules/core-js/modules/es.array.is-array.js");
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.array.push.js */ "./node_modules/core-js/modules/es.array.push.js");
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.array.from.js */ "./node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! core-js/modules/es.regexp.test.js */ "./node_modules/core-js/modules/es.regexp.test.js");
/* harmony import */ var core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! core-js/modules/es.error.cause.js */ "./node_modules/core-js/modules/es.error.cause.js");
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! core-js/modules/es.promise.js */ "./node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var core_js_modules_es_symbol_async_iterator_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! core-js/modules/es.symbol.async-iterator.js */ "./node_modules/core-js/modules/es.symbol.async-iterator.js");
/* harmony import */ var core_js_modules_es_symbol_async_iterator_js__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_async_iterator_js__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var core_js_modules_es_symbol_to_string_tag_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! core-js/modules/es.symbol.to-string-tag.js */ "./node_modules/core-js/modules/es.symbol.to-string-tag.js");
/* harmony import */ var core_js_modules_es_symbol_to_string_tag_js__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_to_string_tag_js__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var core_js_modules_es_json_to_string_tag_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! core-js/modules/es.json.to-string-tag.js */ "./node_modules/core-js/modules/es.json.to-string-tag.js");
/* harmony import */ var core_js_modules_es_json_to_string_tag_js__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_json_to_string_tag_js__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var core_js_modules_es_math_to_string_tag_js__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! core-js/modules/es.math.to-string-tag.js */ "./node_modules/core-js/modules/es.math.to-string-tag.js");
/* harmony import */ var core_js_modules_es_math_to_string_tag_js__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_math_to_string_tag_js__WEBPACK_IMPORTED_MODULE_25__);
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! core-js/modules/es.object.create.js */ "./node_modules/core-js/modules/es.object.create.js");
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_26___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_26__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of.js */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_27___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_27__);
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_28___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_28__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_29___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_29__);
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of.js */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_30___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_30__);
/* harmony import */ var core_js_modules_es_array_reverse_js__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! core-js/modules/es.array.reverse.js */ "./node_modules/core-js/modules/es.array.reverse.js");
/* harmony import */ var core_js_modules_es_array_reverse_js__WEBPACK_IMPORTED_MODULE_31___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_reverse_js__WEBPACK_IMPORTED_MODULE_31__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_32___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_32__);
/* harmony import */ var _Config_SiteConfig__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ../../../Config/SiteConfig */ "./assets/Config/SiteConfig.js");
/* harmony import */ var _UI_Button_Button__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ../../../UI/Button/Button */ "./assets/UI/Button/Button.jsx");
/* harmony import */ var _CustomHook_state_useOpenState__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ../../../CustomHook/state/useOpenState */ "./assets/CustomHook/state/useOpenState.jsx");
/* harmony import */ var _UI_Form_Select__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ../../../UI/Form/Select */ "./assets/UI/Form/Select.jsx");
/* harmony import */ var _UI_Form_FormButton__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ../../../UI/Form/FormButton */ "./assets/UI/Form/FormButton.jsx");
/* harmony import */ var _CustomHook_fetch_useFetchOut__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ../../../CustomHook/fetch/useFetchOut */ "./assets/CustomHook/fetch/useFetchOut.jsx");
/* harmony import */ var _functions_api__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ../../../functions/api */ "./assets/functions/api.js");
/* harmony import */ var i18next__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! i18next */ "./node_modules/i18next/dist/esm/i18next.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
































function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }









var PurchaseStatusUpdater = function PurchaseStatusUpdater(_ref) {
  var id = _ref.id,
    initialStatus = _ref.initialStatus;
  var _useFetchOut = (0,_CustomHook_fetch_useFetchOut__WEBPACK_IMPORTED_MODULE_38__.useFetchOut)('/admin/api/purchase/' + id + '/updateStatus', 'POST'),
    sendData = _useFetchOut.sendData,
    loading = _useFetchOut.loading,
    error = _useFetchOut.error,
    info = _useFetchOut.info,
    resetInfo = _useFetchOut.resetInfo,
    resetError = _useFetchOut.resetError;
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_32__.useState)(initialStatus),
    _useState2 = _slicedToArray(_useState, 2),
    status = _useState2[0],
    setStatus = _useState2[1];
  var _useOpenState = (0,_CustomHook_state_useOpenState__WEBPACK_IMPORTED_MODULE_35__.useOpenState)(false),
    _useOpenState2 = _slicedToArray(_useOpenState, 3),
    isUpdating = _useOpenState2[0],
    openUpdate = _useOpenState2[1],
    closeUpdate = _useOpenState2[2];
  var handleOpenUpdate = function handleOpenUpdate() {
    resetError();
    resetInfo();
    openUpdate();
  };
  var handleSubmit = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(e) {
      var form, formData, newStatus, tracking;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            e.preventDefault();
            if (confirm('Etes vous sûr ? Un email va être envoyé au client')) {
              _context.next = 3;
              break;
            }
            return _context.abrupt("return");
          case 3:
            form = e.currentTarget;
            formData = new FormData(form);
            newStatus = formData.get('status').toString();
            if (!(newStatus === _Config_SiteConfig__WEBPACK_IMPORTED_MODULE_33__.SiteConfig.STATUS_SENT)) {
              _context.next = 10;
              break;
            }
            tracking = window.prompt('Entrez le numéro de suivi');
            _context.next = 10;
            return (0,_functions_api__WEBPACK_IMPORTED_MODULE_39__.apiFetch)('/admin/api/purchase/' + id + '/setTracking', {
              method: 'POST',
              body: JSON.stringify(tracking)
            });
          case 10:
            _context.next = 12;
            return sendData(newStatus, function (fetchResult) {
              setStatus(newStatus);
            });
          case 12:
            closeUpdate();
            closeValidateButton();
          case 14:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
    return function handleSubmit(_x2) {
      return _ref2.apply(this, arguments);
    };
  }();
  var handleCancel = function handleCancel() {
    closeUpdate();
    closeValidateButton();
  };
  var _useOpenState3 = (0,_CustomHook_state_useOpenState__WEBPACK_IMPORTED_MODULE_35__.useOpenState)(false),
    _useOpenState4 = _slicedToArray(_useOpenState3, 3),
    validateButtonOpen = _useOpenState4[0],
    openValidateButton = _useOpenState4[1],
    closeValidateButton = _useOpenState4[2];
  var handleChange = function handleChange(e) {
    if (e.currentTarget.value !== status) {
      openValidateButton();
    } else {
      closeValidateButton();
    }
  };
  if (isUpdating) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_32___default().createElement((react__WEBPACK_IMPORTED_MODULE_32___default().Fragment), null, loading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_32___default().createElement("div", {
      className: "admin-form-info"
    }, "Chargement...") : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_32___default().createElement("form", {
      onSubmit: handleSubmit,
      className: "admin-form-field-with-button"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_32___default().createElement("div", {
      className: "admin-form-group"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_32___default().createElement(_UI_Form_Select__WEBPACK_IMPORTED_MODULE_36__.Select, {
      className: "admin-form-control",
      name: "status",
      defaultValue: status,
      onChange: handleChange
    }, [_Config_SiteConfig__WEBPACK_IMPORTED_MODULE_33__.SiteConfig.STATUS_PENDING, _Config_SiteConfig__WEBPACK_IMPORTED_MODULE_33__.SiteConfig.STATUS_PAID, _Config_SiteConfig__WEBPACK_IMPORTED_MODULE_33__.SiteConfig.STATUS_SENT, _Config_SiteConfig__WEBPACK_IMPORTED_MODULE_33__.SiteConfig.STATUS_DELIVERED, _Config_SiteConfig__WEBPACK_IMPORTED_MODULE_33__.SiteConfig.STATUS_CANCELED].map(function (choice_value, index) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_32___default().createElement(_UI_Form_Select__WEBPACK_IMPORTED_MODULE_36__.Option, {
        key: index,
        value: choice_value
      }, (0,i18next__WEBPACK_IMPORTED_MODULE_40__.t)(choice_value, {
        ns: 'configs'
      }));
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_32___default().createElement("div", {
      className: "admin-form-field-with-button-controls"
    }, validateButtonOpen && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_32___default().createElement(_UI_Form_FormButton__WEBPACK_IMPORTED_MODULE_37__.FormButton, {
      additionalClass: 'admin-button admin-small-button' + (loading ? ' disabled' : ''),
      disabled: loading === true
    }, "Valider"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_32___default().createElement(_UI_Button_Button__WEBPACK_IMPORTED_MODULE_34__.Button, {
      additionalClass: "admin-button secondary-color admin-small-button",
      onClick: handleCancel
    }, "Annuler"))));
  }
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_32___default().createElement((react__WEBPACK_IMPORTED_MODULE_32___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_32___default().createElement("div", {
    className: "admin-form-field-with-button"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_32___default().createElement("span", {
    className: "status"
  }, (0,i18next__WEBPACK_IMPORTED_MODULE_40__.t)(status, {
    ns: 'configs'
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_32___default().createElement(_UI_Button_Button__WEBPACK_IMPORTED_MODULE_34__.Button, {
    additionalClass: "admin-button admin-small-button",
    onClick: handleOpenUpdate
  }, "Modifier")), error && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_32___default().createElement("div", {
    className: "admin-form-error"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_32___default().createElement("ul", null, error.map(function (e, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_32___default().createElement("li", {
      key: index
    }, e);
  }))), info && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_32___default().createElement("div", {
    className: "admin-form-info"
  }, info));
};

/***/ }),

/***/ "./assets/Components/Admin/ReviewModerator/index.jsx":
/*!***********************************************************!*\
  !*** ./assets/Components/Admin/ReviewModerator/index.jsx ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ReviewModerator": () => (/* binding */ ReviewModerator)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.is-array.js */ "./node_modules/core-js/modules/es.array.is-array.js");
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.array.push.js */ "./node_modules/core-js/modules/es.array.push.js");
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.array.from.js */ "./node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.regexp.test.js */ "./node_modules/core-js/modules/es.regexp.test.js");
/* harmony import */ var core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.error.cause.js */ "./node_modules/core-js/modules/es.error.cause.js");
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.error.to-string.js */ "./node_modules/core-js/modules/es.error.to-string.js");
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.promise.js */ "./node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var core_js_modules_es_symbol_async_iterator_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! core-js/modules/es.symbol.async-iterator.js */ "./node_modules/core-js/modules/es.symbol.async-iterator.js");
/* harmony import */ var core_js_modules_es_symbol_async_iterator_js__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_async_iterator_js__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var core_js_modules_es_symbol_to_string_tag_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! core-js/modules/es.symbol.to-string-tag.js */ "./node_modules/core-js/modules/es.symbol.to-string-tag.js");
/* harmony import */ var core_js_modules_es_symbol_to_string_tag_js__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_to_string_tag_js__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var core_js_modules_es_json_to_string_tag_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! core-js/modules/es.json.to-string-tag.js */ "./node_modules/core-js/modules/es.json.to-string-tag.js");
/* harmony import */ var core_js_modules_es_json_to_string_tag_js__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_json_to_string_tag_js__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var core_js_modules_es_math_to_string_tag_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! core-js/modules/es.math.to-string-tag.js */ "./node_modules/core-js/modules/es.math.to-string-tag.js");
/* harmony import */ var core_js_modules_es_math_to_string_tag_js__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_math_to_string_tag_js__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! core-js/modules/es.object.create.js */ "./node_modules/core-js/modules/es.object.create.js");
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of.js */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_25__);
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of.js */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_26___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_26__);
/* harmony import */ var core_js_modules_es_array_reverse_js__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! core-js/modules/es.array.reverse.js */ "./node_modules/core-js/modules/es.array.reverse.js");
/* harmony import */ var core_js_modules_es_array_reverse_js__WEBPACK_IMPORTED_MODULE_27___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_reverse_js__WEBPACK_IMPORTED_MODULE_27__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_28___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_28__);
/* harmony import */ var _Config_SiteConfig__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ../../../Config/SiteConfig */ "./assets/Config/SiteConfig.js");
/* harmony import */ var _functions_api__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ../../../functions/api */ "./assets/functions/api.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }




























function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }



var ReviewModerator = function ReviewModerator(_ref) {
  var id = _ref.id,
    initialStatus = _ref.initialStatus;
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_28__.useState)(initialStatus),
    _useState2 = _slicedToArray(_useState, 2),
    status = _useState2[0],
    setStatus = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_28__.useState)(false),
    _useState4 = _slicedToArray(_useState3, 2),
    isLoading = _useState4[0],
    setLoading = _useState4[1];
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_28__.useState)(null),
    _useState6 = _slicedToArray(_useState5, 2),
    info = _useState6[0],
    setInfo = _useState6[1];
  var handleChange = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(e) {
      var value, _info;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            if (!isLoading) {
              _context.next = 2;
              break;
            }
            return _context.abrupt("return");
          case 2:
            value = e.target.value;
            setLoading(true);
            setInfo(null);
            _context.prev = 5;
            _context.next = 8;
            return (0,_functions_api__WEBPACK_IMPORTED_MODULE_30__.apiPreparedFetch)('/admin/api/review/' + id + '/updateModerationStatus', {
              status: value
            }, 'GET');
          case 8:
            _info = _context.sent;
            setInfo(_info);
            setStatus(value);
            _context.next = 16;
            break;
          case 13:
            _context.prev = 13;
            _context.t0 = _context["catch"](5);
            setInfo('une erreur est survenue');
          case 16:
            setLoading(false);
          case 17:
          case "end":
            return _context.stop();
        }
      }, _callee, null, [[5, 13]]);
    }));
    return function handleChange(_x2) {
      return _ref2.apply(this, arguments);
    };
  }();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_28___default().createElement("div", {
    className: "admin-form-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_28___default().createElement("select", {
    className: "admin-form-control",
    onChange: handleChange,
    value: status
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_28___default().createElement("option", {
    value: _Config_SiteConfig__WEBPACK_IMPORTED_MODULE_29__.SiteConfig.MODERATION_STATUS_PENDING
  }, _Config_SiteConfig__WEBPACK_IMPORTED_MODULE_29__.SiteConfig.MODERATION_STATUS_PENDING_LABEL), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_28___default().createElement("option", {
    value: _Config_SiteConfig__WEBPACK_IMPORTED_MODULE_29__.SiteConfig.MODERATION_STATUS_ACCEPTED
  }, _Config_SiteConfig__WEBPACK_IMPORTED_MODULE_29__.SiteConfig.MODERATION_STATUS_ACCEPTED_LABEL), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_28___default().createElement("option", {
    value: _Config_SiteConfig__WEBPACK_IMPORTED_MODULE_29__.SiteConfig.MODERATION_STATUS_REFUSED
  }, _Config_SiteConfig__WEBPACK_IMPORTED_MODULE_29__.SiteConfig.MODERATION_STATUS_REFUSED_LABEL)), isLoading && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_28___default().createElement("div", {
    className: "admin-form-info"
  }, "Chargement..."), info && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_28___default().createElement("div", {
    className: "admin-form-info"
  }, info));
};

/***/ }),

/***/ "./assets/Components/Admin/SelectLinkedItems/AdminItemSuggest.jsx":
/*!************************************************************************!*\
  !*** ./assets/Components/Admin/SelectLinkedItems/AdminItemSuggest.jsx ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AdminItemSuggest": () => (/* binding */ AdminItemSuggest)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.join.js */ "./node_modules/core-js/modules/es.array.join.js");
/* harmony import */ var core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.string.split.js */ "./node_modules/core-js/modules/es.string.split.js");
/* harmony import */ var core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);




var AdminItemSuggest = function AdminItemSuggest(_ref) {
  var item = _ref.item,
    q = _ref.q,
    onSelect = _ref.onSelect,
    selected = _ref.selected;
  var title = item.title.toUpperCase().split(q.toUpperCase()).join('<strong>' + q.toUpperCase() + '</strong>');
  var handleClick = function handleClick(e) {
    e.preventDefault();
    onSelect(item);
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("a", {
    className: 'admin-suggest-item' + (selected ? ' selected' : ''),
    href: "#",
    onClick: handleClick,
    role: "option",
    "aria-selected": selected
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("div", {
    className: "admin-suggest-img",
    style: {
      backgroundImage: "url(".concat(item.picturePath, ")")
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("div", {
    className: "admin-suggest-text"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("div", {
    dangerouslySetInnerHTML: {
      __html: title
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("div", null, item.ref)));
};

/***/ }),

/***/ "./assets/Components/Admin/SelectLinkedItems/SelectedItemsList.jsx":
/*!*************************************************************************!*\
  !*** ./assets/Components/Admin/SelectLinkedItems/SelectedItemsList.jsx ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SelectedItem": () => (/* binding */ SelectedItem),
/* harmony export */   "SelectedItemsList": () => (/* binding */ SelectedItemsList)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.map.js */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _UI_Button_CloseButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../UI/Button/CloseButton */ "./assets/UI/Button/CloseButton.jsx");



var SelectedItemsList = function SelectedItemsList(_ref) {
  var items = _ref.items,
    onRemove = _ref.onRemove,
    loading = _ref.loading;
  if (loading) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
      className: "admin-form-info"
    }, "Chargement...");
  }
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("ul", {
    className: "admin-suggestedProducts-list"
  }, items.map(function (item) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(SelectedItem, {
      key: item.id,
      item: item,
      onRemove: onRemove
    });
  }));
};
var SelectedItem = function SelectedItem(_ref2) {
  var item = _ref2.item,
    onRemove = _ref2.onRemove;
  var handleClick = function handleClick() {
    onRemove(item);
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("li", {
    className: "admin-suggestedProducts-item"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
    className: "admin-suggest-img",
    style: {
      backgroundImage: "url(".concat(item.picturePath, ")")
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
    className: "admin-suggest-text"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", null, item.title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", null, item.ref)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_UI_Button_CloseButton__WEBPACK_IMPORTED_MODULE_2__.CloseButton, {
    onClick: handleClick,
    additionalClass: "admin-suggestedProducts-closer"
  }));
};

/***/ }),

/***/ "./assets/Components/Admin/SelectLinkedItems/index.jsx":
/*!*************************************************************!*\
  !*** ./assets/Components/Admin/SelectLinkedItems/index.jsx ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SelectLinkedItems": () => (/* binding */ SelectLinkedItems)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.filter.js */ "./node_modules/core-js/modules/es.array.filter.js");
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.concat.js */ "./node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.map.js */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.is-array.js */ "./node_modules/core-js/modules/es.array.is-array.js");
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.array.push.js */ "./node_modules/core-js/modules/es.array.push.js");
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.array.from.js */ "./node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.regexp.test.js */ "./node_modules/core-js/modules/es.regexp.test.js");
/* harmony import */ var core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/es.error.cause.js */ "./node_modules/core-js/modules/es.error.cause.js");
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! core-js/modules/es.error.to-string.js */ "./node_modules/core-js/modules/es.error.to-string.js");
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! core-js/modules/es.promise.js */ "./node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var core_js_modules_es_symbol_async_iterator_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! core-js/modules/es.symbol.async-iterator.js */ "./node_modules/core-js/modules/es.symbol.async-iterator.js");
/* harmony import */ var core_js_modules_es_symbol_async_iterator_js__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_async_iterator_js__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var core_js_modules_es_symbol_to_string_tag_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! core-js/modules/es.symbol.to-string-tag.js */ "./node_modules/core-js/modules/es.symbol.to-string-tag.js");
/* harmony import */ var core_js_modules_es_symbol_to_string_tag_js__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_to_string_tag_js__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var core_js_modules_es_json_to_string_tag_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! core-js/modules/es.json.to-string-tag.js */ "./node_modules/core-js/modules/es.json.to-string-tag.js");
/* harmony import */ var core_js_modules_es_json_to_string_tag_js__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_json_to_string_tag_js__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var core_js_modules_es_math_to_string_tag_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! core-js/modules/es.math.to-string-tag.js */ "./node_modules/core-js/modules/es.math.to-string-tag.js");
/* harmony import */ var core_js_modules_es_math_to_string_tag_js__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_math_to_string_tag_js__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! core-js/modules/es.object.create.js */ "./node_modules/core-js/modules/es.object.create.js");
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_25__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of.js */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_26___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_26__);
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_27___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_27__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_28___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_28__);
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of.js */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_29___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_29__);
/* harmony import */ var core_js_modules_es_array_reverse_js__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! core-js/modules/es.array.reverse.js */ "./node_modules/core-js/modules/es.array.reverse.js");
/* harmony import */ var core_js_modules_es_array_reverse_js__WEBPACK_IMPORTED_MODULE_30___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_reverse_js__WEBPACK_IMPORTED_MODULE_30__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_31___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_31__);
/* harmony import */ var _SelectedItemsList__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./SelectedItemsList */ "./assets/Components/Admin/SelectLinkedItems/SelectedItemsList.jsx");
/* harmony import */ var _functions_api__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ../../../functions/api */ "./assets/functions/api.js");
/* harmony import */ var _assets_styles_Admin_SuggestedProductsInput_index_css__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ../../../../assets/styles/Admin/SuggestedProductsInput/index.css */ "./assets/styles/Admin/SuggestedProductsInput/index.css");
/* harmony import */ var _UI_Admin_StandardItem_StandardItemSelector__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ../../../UI/Admin/StandardItem/StandardItemSelector */ "./assets/UI/Admin/StandardItem/StandardItemSelector.jsx");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }




































var SelectLinkedItems = function SelectLinkedItems(_ref) {
  var indexEndpoint = _ref.indexEndpoint,
    searchEndpoint = _ref.searchEndpoint,
    name = _ref.name,
    title = _ref.title,
    formError = _ref.formError;
  //gestion de l'affichage des suggestedProducts
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_31__.useState)([]),
    _useState2 = _slicedToArray(_useState, 2),
    selectedItems = _useState2[0],
    setSelectedItems = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_31__.useState)(false),
    _useState4 = _slicedToArray(_useState3, 2),
    listLoading = _useState4[0],
    setListLoading = _useState4[1];
  (0,react__WEBPACK_IMPORTED_MODULE_31__.useEffect)(function () {
    if (indexEndpoint) {
      _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        var data;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              setListLoading(true);
              _context.prev = 1;
              _context.next = 4;
              return (0,_functions_api__WEBPACK_IMPORTED_MODULE_33__.apiFetch)(indexEndpoint);
            case 4:
              data = _context.sent;
              setSelectedItems(data);
              _context.next = 10;
              break;
            case 8:
              _context.prev = 8;
              _context.t0 = _context["catch"](1);
            case 10:
              setListLoading(false);
            case 11:
            case "end":
              return _context.stop();
          }
        }, _callee, null, [[1, 8]]);
      }))();
    }
  }, []);
  var handleRemove = function handleRemove(item) {
    setSelectedItems(function (selectedItems) {
      return selectedItems.filter(function (i) {
        return i.id !== item.id;
      });
    });
  };

  //search
  var handleSelect = function handleSelect(item) {
    setSelectedItems(function (selectedItems) {
      //on vérifie si le produit a déjà été sélectionné
      var included = false;
      var _iterator = _createForOfIteratorHelper(selectedItems),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var linkedItem = _step.value;
          if (linkedItem.id === item.id) {
            included = true;
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
      if (!included) {
        return [].concat(_toConsumableArray(selectedItems), [item]);
      }
      return selectedItems;
    });
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_31___default().createElement((react__WEBPACK_IMPORTED_MODULE_31___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_31___default().createElement("div", {
    className: 'admin-form-group suggestedProducts-group' + (formError ? ' is-invalid' : '')
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_31___default().createElement("label", null, title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_31___default().createElement(_SelectedItemsList__WEBPACK_IMPORTED_MODULE_32__.SelectedItemsList, {
    items: selectedItems,
    onRemove: handleRemove,
    loading: listLoading
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_31___default().createElement(_UI_Admin_StandardItem_StandardItemSelector__WEBPACK_IMPORTED_MODULE_35__.StandardItemSelector, {
    searchEndpoint: searchEndpoint,
    onSelect: handleSelect
  })), formError && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_31___default().createElement("div", {
    className: "admin-form-error"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_31___default().createElement("ul", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_31___default().createElement("li", null, formError))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_31___default().createElement("select", {
    hidden: true,
    name: name,
    value: selectedItems.map(function (item) {
      return item.id;
    }),
    onChange: function onChange() {},
    multiple: "multiple"
  }, selectedItems.map(function (item) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_31___default().createElement("option", {
      className: "suggestedProducts-hidden-option",
      key: item.id,
      value: item.id,
      "data-ref": item.ref
    }, item.ref);
  }) //DEVENU DATA-REF avant---> data-designation : pour les tests endtoend (car on peut accéder seulement au text visible et comme il est hidden)
  ));
};

/***/ }),

/***/ "./assets/Components/Admin/SelectUniqueItem/index.jsx":
/*!************************************************************!*\
  !*** ./assets/Components/Admin/SelectUniqueItem/index.jsx ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SelectUniqueItem": () => (/* binding */ SelectUniqueItem)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.is-array.js */ "./node_modules/core-js/modules/es.array.is-array.js");
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.array.push.js */ "./node_modules/core-js/modules/es.array.push.js");
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.array.from.js */ "./node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.regexp.test.js */ "./node_modules/core-js/modules/es.regexp.test.js");
/* harmony import */ var core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.error.cause.js */ "./node_modules/core-js/modules/es.error.cause.js");
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.error.to-string.js */ "./node_modules/core-js/modules/es.error.to-string.js");
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _assets_styles_Admin_SuggestedProductsInput_index_css__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../../assets/styles/Admin/SuggestedProductsInput/index.css */ "./assets/styles/Admin/SuggestedProductsInput/index.css");
/* harmony import */ var _UI_Admin_StandardItem_StandardItemSelector__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../UI/Admin/StandardItem/StandardItemSelector */ "./assets/UI/Admin/StandardItem/StandardItemSelector.jsx");
/* harmony import */ var _SelectLinkedItems_SelectedItemsList__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../SelectLinkedItems/SelectedItemsList */ "./assets/Components/Admin/SelectLinkedItems/SelectedItemsList.jsx");
/* harmony import */ var _CustomHook_fetch_useFetch__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../../CustomHook/fetch/useFetch */ "./assets/CustomHook/fetch/useFetch.jsx");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }





















var SelectUniqueItem = function SelectUniqueItem(_ref) {
  var type = _ref.type,
    _ref$itemId = _ref.itemId,
    itemId = _ref$itemId === void 0 ? null : _ref$itemId,
    name = _ref.name,
    title = _ref.title,
    formError = _ref.formError;
  //gestion de l'affichage
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_16__.useState)(null),
    _useState2 = _slicedToArray(_useState, 2),
    selectedItem = _useState2[0],
    setSelectedItem = _useState2[1];
  var _useFetch = (0,_CustomHook_fetch_useFetch__WEBPACK_IMPORTED_MODULE_20__.useFetch)('/admin/api/standardItem/' + type + '/' + itemId + '/show'),
    _useFetch2 = _slicedToArray(_useFetch, 4),
    dbItem = _useFetch2[0],
    isLoading = _useFetch2[1],
    error = _useFetch2[2],
    reset = _useFetch2[3];
  (0,react__WEBPACK_IMPORTED_MODULE_16__.useEffect)(function () {
    if (dbItem) {
      setSelectedItem(dbItem);
    }
  }, [dbItem]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement((react__WEBPACK_IMPORTED_MODULE_16___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement("div", {
    className: 'admin-form-group suggestedProducts-group' + (formError ? ' is-invalid' : '')
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement("label", null, title), isLoading && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement("div", {
    className: "admin-form-info"
  }, "Chargement..."), selectedItem && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement(_SelectLinkedItems_SelectedItemsList__WEBPACK_IMPORTED_MODULE_19__.SelectedItem, {
    item: selectedItem,
    onRemove: function onRemove() {
      return setSelectedItem(null);
    }
  }), !selectedItem && !isLoading && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement(_UI_Admin_StandardItem_StandardItemSelector__WEBPACK_IMPORTED_MODULE_18__.StandardItemSelector, {
    searchEndpoint: '/admin/api/' + type + '/search',
    onSelect: function onSelect(item) {
      return setSelectedItem(item);
    }
  })), formError && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement("div", {
    className: "admin-form-error"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement("ul", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement("li", null, formError))), selectedItem && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement("select", {
    hidden: true,
    name: name,
    value: selectedItem.id,
    onChange: function onChange() {}
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement("option", {
    className: "suggestedProducts-hidden-option",
    value: selectedItem.id,
    "data-ref": selectedItem.ref
  }, selectedItem.ref)));
};

/***/ }),

/***/ "./assets/CustomHook/fetch/useFetchOut.jsx":
/*!*************************************************!*\
  !*** ./assets/CustomHook/fetch/useFetchOut.jsx ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useFetchOut": () => (/* binding */ useFetchOut)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_json_stringify_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.json.stringify.js */ "./node_modules/core-js/modules/es.json.stringify.js");
/* harmony import */ var core_js_modules_es_json_stringify_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_json_stringify_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.is-array.js */ "./node_modules/core-js/modules/es.array.is-array.js");
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.array.push.js */ "./node_modules/core-js/modules/es.array.push.js");
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.array.from.js */ "./node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.regexp.test.js */ "./node_modules/core-js/modules/es.regexp.test.js");
/* harmony import */ var core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.error.cause.js */ "./node_modules/core-js/modules/es.error.cause.js");
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.error.to-string.js */ "./node_modules/core-js/modules/es.error.to-string.js");
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/es.promise.js */ "./node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var core_js_modules_es_symbol_async_iterator_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! core-js/modules/es.symbol.async-iterator.js */ "./node_modules/core-js/modules/es.symbol.async-iterator.js");
/* harmony import */ var core_js_modules_es_symbol_async_iterator_js__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_async_iterator_js__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var core_js_modules_es_symbol_to_string_tag_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! core-js/modules/es.symbol.to-string-tag.js */ "./node_modules/core-js/modules/es.symbol.to-string-tag.js");
/* harmony import */ var core_js_modules_es_symbol_to_string_tag_js__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_to_string_tag_js__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var core_js_modules_es_json_to_string_tag_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! core-js/modules/es.json.to-string-tag.js */ "./node_modules/core-js/modules/es.json.to-string-tag.js");
/* harmony import */ var core_js_modules_es_json_to_string_tag_js__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_json_to_string_tag_js__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var core_js_modules_es_math_to_string_tag_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! core-js/modules/es.math.to-string-tag.js */ "./node_modules/core-js/modules/es.math.to-string-tag.js");
/* harmony import */ var core_js_modules_es_math_to_string_tag_js__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_math_to_string_tag_js__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! core-js/modules/es.object.create.js */ "./node_modules/core-js/modules/es.object.create.js");
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of.js */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_25__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_26___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_26__);
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of.js */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_27___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_27__);
/* harmony import */ var core_js_modules_es_array_reverse_js__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! core-js/modules/es.array.reverse.js */ "./node_modules/core-js/modules/es.array.reverse.js");
/* harmony import */ var core_js_modules_es_array_reverse_js__WEBPACK_IMPORTED_MODULE_28___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_reverse_js__WEBPACK_IMPORTED_MODULE_28__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_29___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_29__);
/* harmony import */ var _functions_api__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ../../functions/api */ "./assets/functions/api.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }





























function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }



/**
 * SEND DATA / UPDATE DATABASE / NOT TO RECEIVE DATA
 * @param {string} entrypoint 
 * @param {string} method 
 * @returns 
 */
var useFetchOut = function useFetchOut(entrypoint) {
  var method = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'GET';
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_29__.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    loading = _useState2[0],
    setLoading = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_29__.useState)(null),
    _useState4 = _slicedToArray(_useState3, 2),
    error = _useState4[0],
    setError = _useState4[1];
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_29__.useState)(null),
    _useState6 = _slicedToArray(_useState5, 2),
    info = _useState6[0],
    setInfo = _useState6[1];

  /**
   * 
   * @param {mixed} data
   * @param {null|CallableFunction} toDoWhenSuccess  fetch return value, is passed to this callable as argument
   */
  var sendData = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      var data,
        toDoWhenSuccess,
        url,
        options,
        result,
        _args = arguments;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            data = _args.length > 0 && _args[0] !== undefined ? _args[0] : null;
            toDoWhenSuccess = _args.length > 1 && _args[1] !== undefined ? _args[1] : null;
            if (!loading) {
              _context.next = 4;
              break;
            }
            return _context.abrupt("return");
          case 4:
            setLoading(true);
            setError(null);
            setInfo(null);
            url = entrypoint;
            options = {};
            if (method === 'GET' && data) {
              url = (0,_functions_api__WEBPACK_IMPORTED_MODULE_30__.addUrlParams)(entrypoint, data);
            } else if (method === 'POST') {
              options = {
                method: 'POST',
                headers: {
                  "Accept": "application/json",
                  "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
              };
            }
            _context.prev = 10;
            _context.next = 13;
            return (0,_functions_api__WEBPACK_IMPORTED_MODULE_30__.apiFetch)(url, options);
          case 13:
            result = _context.sent;
            setInfo(result);
            toDoWhenSuccess(result);
            _context.next = 21;
            break;
          case 18:
            _context.prev = 18;
            _context.t0 = _context["catch"](10);
            if (_context.t0 instanceof _functions_api__WEBPACK_IMPORTED_MODULE_30__.ApiError) {
              setError(_context.t0.errors);
            } else {
              console.error(_context.t0);
            }
          case 21:
            setLoading(false);
          case 22:
          case "end":
            return _context.stop();
        }
      }, _callee, null, [[10, 18]]);
    }));
    return function sendData() {
      return _ref.apply(this, arguments);
    };
  }();
  var resetError = function resetError() {
    setError(null);
  };
  var resetInfo = function resetInfo() {
    setInfo(null);
  };
  return {
    sendData: sendData,
    loading: loading,
    error: error,
    info: info,
    resetError: resetError,
    resetInfo: resetInfo
  };
};

/***/ }),

/***/ "./assets/UI/Admin/StandardItem/StandardItemSelector.jsx":
/*!***************************************************************!*\
  !*** ./assets/UI/Admin/StandardItem/StandardItemSelector.jsx ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StandardItemSelector": () => (/* binding */ StandardItemSelector)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.is-array.js */ "./node_modules/core-js/modules/es.array.is-array.js");
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.array.push.js */ "./node_modules/core-js/modules/es.array.push.js");
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.array.from.js */ "./node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.regexp.test.js */ "./node_modules/core-js/modules/es.regexp.test.js");
/* harmony import */ var core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.error.cause.js */ "./node_modules/core-js/modules/es.error.cause.js");
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.error.to-string.js */ "./node_modules/core-js/modules/es.error.to-string.js");
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _CustomHook_fetch_useFetchQSearch__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../CustomHook/fetch/useFetchQSearch */ "./assets/CustomHook/fetch/useFetchQSearch.jsx");
/* harmony import */ var _Components_Admin_SelectLinkedItems_AdminItemSuggest__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../Components/Admin/SelectLinkedItems/AdminItemSuggest */ "./assets/Components/Admin/SelectLinkedItems/AdminItemSuggest.jsx");
/* harmony import */ var _SuggestList__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../SuggestList */ "./assets/UI/SuggestList.jsx");
/* harmony import */ var _Button_CloseButton__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../Button/CloseButton */ "./assets/UI/Button/CloseButton.jsx");
















function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }





var StandardItemSelector = function StandardItemSelector(_ref) {
  var searchEndpoint = _ref.searchEndpoint,
    onSelect = _ref.onSelect;
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_16__.useState)(''),
    _useState2 = _slicedToArray(_useState, 2),
    q = _useState2[0],
    setQ = _useState2[1];
  var handleChange = function handleChange(e) {
    setQ(e.target.value);
  };
  var _useFetchQSearch = (0,_CustomHook_fetch_useFetchQSearch__WEBPACK_IMPORTED_MODULE_17__.useFetchQSearch)(searchEndpoint, q, 5),
    _useFetchQSearch2 = _slicedToArray(_useFetchQSearch, 4),
    result = _useFetchQSearch2[0],
    resetItems = _useFetchQSearch2[1],
    isLoading = _useFetchQSearch2[2],
    error = _useFetchQSearch2[3];
  var handleSelect = function handleSelect(item) {
    resetItems();
    onSelect(item);
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement((react__WEBPACK_IMPORTED_MODULE_16___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement("div", {
    className: "admin-suggest-wrapper"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement("input", {
    type: "text",
    className: "admin-form-control",
    placeholder: "Rechercher",
    name: "q",
    value: q,
    onChange: handleChange
  }), q !== '' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement(_Button_CloseButton__WEBPACK_IMPORTED_MODULE_20__.CloseButton, {
    additionalClass: "admin-suggestedProducts-input-closer",
    onClick: function onClick() {
      return setQ('');
    }
  }), (result === null || result === void 0 ? void 0 : result.items.length) > 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement(_SuggestList__WEBPACK_IMPORTED_MODULE_19__.SuggestList, {
    additionalClass: "admin-suggest-list",
    suggests: result.items,
    onClose: resetItems,
    onSelect: handleSelect,
    render: function render(item, selected) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement(_Components_Admin_SelectLinkedItems_AdminItemSuggest__WEBPACK_IMPORTED_MODULE_18__.AdminItemSuggest, {
        key: item.id,
        item: item,
        q: q,
        selected: selected,
        onSelect: handleSelect
      });
    }
  })), isLoading && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement("div", {
    className: "admin-form-info"
  }, "Chargement..."));
};

/***/ }),

/***/ "./assets/UI/Button/Button.jsx":
/*!*************************************!*\
  !*** ./assets/UI/Button/Button.jsx ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Button": () => (/* binding */ Button)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.keys.js */ "./node_modules/core-js/modules/es.object.keys.js");
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.index-of.js */ "./node_modules/core-js/modules/es.array.index-of.js");
/* harmony import */ var core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.object.assign.js */ "./node_modules/core-js/modules/es.object.assign.js");
/* harmony import */ var core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.function.bind.js */ "./node_modules/core-js/modules/es.function.bind.js");
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _Icon_Loader__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Icon/Loader */ "./assets/UI/Icon/Loader.jsx");





var _excluded = ["children", "onClick", "additionalClass", "loading", "type"];
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }


var Button = function Button(_ref) {
  var children = _ref.children,
    onClick = _ref.onClick,
    additionalClass = _ref.additionalClass,
    loading = _ref.loading,
    type = _ref.type,
    props = _objectWithoutProperties(_ref, _excluded);
  var handleClick = function handleClick(e) {
    e.preventDefault();
    e.stopPropagation();
    onClick();
  };
  var handleKeyDown = function handleKeyDown(e) {
    if (e.key === 'Enter') {
      e.preventDefault();
      e.stopPropagation();
      onClick();
    }
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement("button", _extends({
    className: 'button' + (additionalClass ? ' ' + additionalClass : ''),
    onClick: handleClick,
    onKeyDown: handleKeyDown,
    type: type !== null && type !== void 0 ? type : 'button'
  }, props), loading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement(_Icon_Loader__WEBPACK_IMPORTED_MODULE_6__.Loader, null) : children);
};

/***/ }),

/***/ "./assets/UI/Button/CloseButton.jsx":
/*!******************************************!*\
  !*** ./assets/UI/Button/CloseButton.jsx ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CloseButton": () => (/* binding */ CloseButton)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.keys.js */ "./node_modules/core-js/modules/es.object.keys.js");
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.index-of.js */ "./node_modules/core-js/modules/es.array.index-of.js");
/* harmony import */ var core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.object.assign.js */ "./node_modules/core-js/modules/es.object.assign.js");
/* harmony import */ var core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.function.bind.js */ "./node_modules/core-js/modules/es.function.bind.js");
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _Icon_CloseIcon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Icon/CloseIcon */ "./assets/UI/Icon/CloseIcon.jsx");
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Button */ "./assets/UI/Button/Button.jsx");
/* harmony import */ var i18next__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! i18next */ "./node_modules/i18next/dist/esm/i18next.js");





var _excluded = ["additionalClass"];
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




var CloseButton = function CloseButton(_ref) {
  var additionalClass = _ref.additionalClass,
    props = _objectWithoutProperties(_ref, _excluded);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement(_Button__WEBPACK_IMPORTED_MODULE_7__.Button, _extends({
    className: 'icon-button close-button' + (additionalClass ? ' ' + additionalClass : ''),
    "aria-label": (0,i18next__WEBPACK_IMPORTED_MODULE_8__.t)('close', {
      ns: 'messages'
    }),
    title: (0,i18next__WEBPACK_IMPORTED_MODULE_8__.t)('close', {
      ns: 'messages'
    })
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement(_Icon_CloseIcon__WEBPACK_IMPORTED_MODULE_6__.CloseIcon, null));
};

/***/ }),

/***/ "./assets/UI/Button/EditButton.jsx":
/*!*****************************************!*\
  !*** ./assets/UI/Button/EditButton.jsx ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EditButton": () => (/* binding */ EditButton)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.keys.js */ "./node_modules/core-js/modules/es.object.keys.js");
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.index-of.js */ "./node_modules/core-js/modules/es.array.index-of.js");
/* harmony import */ var core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.object.assign.js */ "./node_modules/core-js/modules/es.object.assign.js");
/* harmony import */ var core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.function.bind.js */ "./node_modules/core-js/modules/es.function.bind.js");
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _Icon_EditIcon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Icon/EditIcon */ "./assets/UI/Icon/EditIcon.jsx");
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Button */ "./assets/UI/Button/Button.jsx");
/* harmony import */ var i18next__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! i18next */ "./node_modules/i18next/dist/esm/i18next.js");





var _excluded = ["additionalClass"];
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




var EditButton = function EditButton(_ref) {
  var additionalClass = _ref.additionalClass,
    props = _objectWithoutProperties(_ref, _excluded);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement(_Button__WEBPACK_IMPORTED_MODULE_7__.Button, _extends({
    className: 'icon-button edit-button' + (additionalClass ? ' ' + additionalClass : ''),
    "aria-label": (0,i18next__WEBPACK_IMPORTED_MODULE_8__.t)('edit', {
      ns: 'messages'
    }),
    title: (0,i18next__WEBPACK_IMPORTED_MODULE_8__.t)('edit', {
      ns: 'messages'
    })
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement(_Icon_EditIcon__WEBPACK_IMPORTED_MODULE_6__.EditIcon, null));
};

/***/ }),

/***/ "./assets/UI/Button/PlusButton.jsx":
/*!*****************************************!*\
  !*** ./assets/UI/Button/PlusButton.jsx ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PlusButton": () => (/* binding */ PlusButton)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.keys.js */ "./node_modules/core-js/modules/es.object.keys.js");
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.index-of.js */ "./node_modules/core-js/modules/es.array.index-of.js");
/* harmony import */ var core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.object.assign.js */ "./node_modules/core-js/modules/es.object.assign.js");
/* harmony import */ var core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.function.bind.js */ "./node_modules/core-js/modules/es.function.bind.js");
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Button */ "./assets/UI/Button/Button.jsx");
/* harmony import */ var _Icon_Quantity_PlusIcon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Icon/Quantity/PlusIcon */ "./assets/UI/Icon/Quantity/PlusIcon.jsx");
/* harmony import */ var i18next__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! i18next */ "./node_modules/i18next/dist/esm/i18next.js");





var _excluded = ["additionalClass"];
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




var PlusButton = function PlusButton(_ref) {
  var additionalClass = _ref.additionalClass,
    props = _objectWithoutProperties(_ref, _excluded);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement(_Button__WEBPACK_IMPORTED_MODULE_6__.Button, _extends({
    className: 'icon-button plus-button' + (additionalClass ? ' ' + additionalClass : ''),
    "aria-label": (0,i18next__WEBPACK_IMPORTED_MODULE_8__.t)('add', {
      ns: 'messages'
    }),
    title: (0,i18next__WEBPACK_IMPORTED_MODULE_8__.t)('add', {
      ns: 'messages'
    })
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement(_Icon_Quantity_PlusIcon__WEBPACK_IMPORTED_MODULE_7__.PlusIcon, null));
};

/***/ }),

/***/ "./assets/UI/Container/Modal.jsx":
/*!***************************************!*\
  !*** ./assets/UI/Container/Modal.jsx ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Modal": () => (/* binding */ Modal)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Button_CloseButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Button/CloseButton */ "./assets/UI/Button/CloseButton.jsx");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");






var Modal = (0,react__WEBPACK_IMPORTED_MODULE_3__.forwardRef)(function (_ref, modalRef) {
  var children = _ref.children,
    additionalClass = _ref.additionalClass,
    isOpen = _ref.isOpen,
    _ref$close = _ref.close,
    close = _ref$close === void 0 ? null : _ref$close,
    _ref$animated = _ref.animated,
    animated = _ref$animated === void 0 ? true : _ref$animated;
  (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function () {
    if (isOpen) {
      document.querySelectorAll('html, body').forEach(function (elt) {
        return elt.classList.add('no-overflow');
      });
    } else {
      document.querySelectorAll('html, body').forEach(function (elt) {
        return elt.classList.remove('no-overflow');
      });
    }
  }, [isOpen]);
  var containerRef = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)();
  var handleClose = function handleClose() {
    if (!close) {
      return;
    }
    if (!animated) {
      close();
      return;
    }
    containerRef.current.classList.add('close');
    containerRef.current.addEventListener('animationend', function () {
      close();
    });
  };
  var handleStopPropagation = function handleStopPropagation(e) {
    e.stopPropagation();
  };
  return isOpen && (0,react_dom__WEBPACK_IMPORTED_MODULE_5__.createPortal)( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("div", {
    ref: containerRef,
    className: 'modal-container' + (additionalClass ? ' ' + additionalClass + '-container' : ''),
    onClick: handleClose
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("div", {
    ref: modalRef,
    className: 'modal' + (additionalClass ? ' ' + additionalClass : ''),
    onClick: handleStopPropagation
  }, close !== null && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_Button_CloseButton__WEBPACK_IMPORTED_MODULE_4__.CloseButton, {
    additionalClass: "modal-closer",
    onClick: handleClose
  }), children)), document.body);
});

/***/ }),

/***/ "./assets/UI/Form/PictureUploadField.jsx":
/*!***********************************************!*\
  !*** ./assets/UI/Form/PictureUploadField.jsx ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PictureUploadField": () => (/* binding */ PictureUploadField)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.includes.js */ "./node_modules/core-js/modules/es.array.includes.js");
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.concat.js */ "./node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.map.js */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.is-array.js */ "./node_modules/core-js/modules/es.array.is-array.js");
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.array.push.js */ "./node_modules/core-js/modules/es.array.push.js");
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.array.from.js */ "./node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.regexp.test.js */ "./node_modules/core-js/modules/es.regexp.test.js");
/* harmony import */ var core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/es.error.cause.js */ "./node_modules/core-js/modules/es.error.cause.js");
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! core-js/modules/es.error.to-string.js */ "./node_modules/core-js/modules/es.error.to-string.js");
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! core-js/modules/es.object.assign.js */ "./node_modules/core-js/modules/es.object.assign.js");
/* harmony import */ var core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! core-js/modules/es.function.bind.js */ "./node_modules/core-js/modules/es.function.bind.js");
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var _Icon_Quantity_PlusIcon__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../Icon/Quantity/PlusIcon */ "./assets/UI/Icon/Quantity/PlusIcon.jsx");
/* harmony import */ var _Button_TrashButton__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../Button/TrashButton */ "./assets/UI/Button/TrashButton.jsx");
/* harmony import */ var smart_img_resize__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! smart-img-resize */ "./node_modules/smart-img-resize/src/index.js");
/* harmony import */ var _Icon_Loader__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../Icon/Loader */ "./assets/UI/Icon/Loader.jsx");
/* harmony import */ var react_dropzone__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! react-dropzone */ "./node_modules/react-dropzone/dist/es/index.js");
/* harmony import */ var _CustomHook_state_useOpenState__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../../CustomHook/state/useOpenState */ "./assets/CustomHook/state/useOpenState.jsx");
/* harmony import */ var _Icon_EditIcon__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ../Icon/EditIcon */ "./assets/UI/Icon/EditIcon.jsx");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }































/**
 * 
 * @param {array} errors 
 * @returns 
 */
var PictureUploadField = function PictureUploadField(_ref) {
  var children = _ref.children,
    name = _ref.name,
    errors = _ref.errors,
    setErrors = _ref.setErrors,
    _ref$resizeWidth = _ref.resizeWidth,
    resizeWidth = _ref$resizeWidth === void 0 ? 500 : _ref$resizeWidth,
    _ref$resizeHeight = _ref.resizeHeight,
    resizeHeight = _ref$resizeHeight === void 0 ? 500 : _ref$resizeHeight,
    _ref$defaultBase64img = _ref.defaultBase64img,
    defaultBase64img = _ref$defaultBase64img === void 0 ? '' : _ref$defaultBase64img,
    _ref$onChange = _ref.onChange,
    onChange = _ref$onChange === void 0 ? null : _ref$onChange;
  var _useTranslation = (0,react_i18next__WEBPACK_IMPORTED_MODULE_28__.useTranslation)('messages'),
    t = _useTranslation.t;
  (0,react__WEBPACK_IMPORTED_MODULE_21__.useEffect)(function () {
    setSelectedImg(defaultBase64img);
    setHiddenImg(defaultBase64img);
  }, [defaultBase64img]);
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_21__.useState)(null),
    _useState2 = _slicedToArray(_useState, 2),
    selectedImg = _useState2[0],
    setSelectedImg = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_21__.useState)(''),
    _useState4 = _slicedToArray(_useState3, 2),
    hiddenImg = _useState4[0],
    setHiddenImg = _useState4[1];
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_21__.useState)(false),
    _useState6 = _slicedToArray(_useState5, 2),
    isLoading = _useState6[0],
    setLoading = _useState6[1];
  var handleDelete = function handleDelete() {
    setSelectedImg(null);
    setHiddenImg('');
    if (onChange) {
      onChange('');
    }
  };
  var onDrop = (0,react__WEBPACK_IMPORTED_MODULE_21__.useCallback)(function (acceptedFiles) {
    var img = acceptedFiles[0];

    //validation
    setErrors([]);
    if (!img) {
      return;
    }
    if (!['image/jpg', 'image/jpeg', 'image/png'].includes(img.type)) {
      setErrors([t('assert.file.format', {
        ns: 'constraints',
        accepted_formats: 'jpg, jpeg, png'
      })]);
      return;
    }
    //resize
    setLoading(true);
    (0,smart_img_resize__WEBPACK_IMPORTED_MODULE_24__["default"])(img, {
      outputFormat: 'jpeg',
      targetWidth: resizeWidth,
      targetHeight: resizeHeight,
      crop: true
    }, function (error, b64img) {
      if (error) {
        setErrors(function (errors) {
          return [].concat(_toConsumableArray(errors), [t('error.temporary_failure')]);
        });
        return;
      }
      // on affiche l'image redimensionnée
      setSelectedImg(b64img);
      setLoading(false);

      //2 façons d'utiliser l'image
      //Pour submit classique : on met l'image redimensionnée dans un input hidden
      setHiddenImg(b64img);
      //Pour submit javascript
      if (onChange) {
        onChange(b64img);
      }
    });
  }, []);
  var _useDropzone = (0,react_dropzone__WEBPACK_IMPORTED_MODULE_29__.useDropzone)({
      onDrop: onDrop,
      multiple: false
    }),
    getRootProps = _useDropzone.getRootProps,
    getInputProps = _useDropzone.getInputProps;
  var _useOpenState = (0,_CustomHook_state_useOpenState__WEBPACK_IMPORTED_MODULE_26__.useOpenState)(false),
    _useOpenState2 = _slicedToArray(_useOpenState, 3),
    mouseIsOver = _useOpenState2[0],
    setMouseOver = _useOpenState2[1],
    setMouseLeave = _useOpenState2[2];
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_21___default().createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_21___default().createElement("label", {
    className: "form-upload-label"
  }, children), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_21___default().createElement("div", _extends({
    className: "form-upload-wrapper"
  }, getRootProps(), {
    onMouseOver: setMouseOver,
    onMouseLeave: setMouseLeave
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_21___default().createElement("input", _extends({
    disabled: isLoading
  }, getInputProps())), selectedImg && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_21___default().createElement("img", {
    className: 'form-upload-img' + (isLoading || mouseIsOver ? ' light' : ''),
    src: selectedImg,
    alt: t('selected_image')
  }), isLoading && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_21___default().createElement(_Icon_Loader__WEBPACK_IMPORTED_MODULE_25__.Loader, null), !isLoading && !selectedImg && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_21___default().createElement(_Icon_Quantity_PlusIcon__WEBPACK_IMPORTED_MODULE_22__.PlusIcon, null), mouseIsOver && selectedImg && !isLoading && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_21___default().createElement(_Icon_EditIcon__WEBPACK_IMPORTED_MODULE_27__.EditIcon, null)), errors.length > 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_21___default().createElement("div", {
    className: "admin-form-error"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_21___default().createElement("ul", null, errors.map(function (error, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_21___default().createElement("li", {
      key: index
    }, error);
  }))), selectedImg && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_21___default().createElement(_Button_TrashButton__WEBPACK_IMPORTED_MODULE_23__.TrashButton, {
    additionalClass: "form-upload-trash-button",
    onClick: handleDelete
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_21___default().createElement("input", {
    type: "hidden",
    name: name,
    value: hiddenImg !== null && hiddenImg !== void 0 ? hiddenImg : ''
  }));
};

/***/ }),

/***/ "./assets/UI/Icon/CloseIcon.jsx":
/*!**************************************!*\
  !*** ./assets/UI/Icon/CloseIcon.jsx ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CloseIcon": () => (/* binding */ CloseIcon)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.keys.js */ "./node_modules/core-js/modules/es.object.keys.js");
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.index-of.js */ "./node_modules/core-js/modules/es.array.index-of.js");
/* harmony import */ var core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.object.assign.js */ "./node_modules/core-js/modules/es.object.assign.js");
/* harmony import */ var core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.function.bind.js */ "./node_modules/core-js/modules/es.function.bind.js");
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);





var _excluded = ["additionalClass"];
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var CloseIcon = function CloseIcon(_ref) {
  var additionalClass = _ref.additionalClass,
    props = _objectWithoutProperties(_ref, _excluded);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement("svg", _extends({
    className: 'i-close' + (additionalClass ? ' ' + additionalClass : '')
  }, props, {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 64 64"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement("path", {
    fill: "currentColor",
    d: "m4.59 59.41a2 2 0 0 0 2.83 0l24.58-24.58 24.59 24.58a2 2 0 0 0 2.83-2.83l-24.59-24.58 24.58-24.59a2 2 0 0 0 -2.83-2.83l-24.58 24.59-24.59-24.58a2 2 0 0 0 -2.82 2.82l24.58 24.59-24.58 24.59a2 2 0 0 0 0 2.82z"
  }));
};

/***/ }),

/***/ "./assets/UI/Icon/EditIcon.jsx":
/*!*************************************!*\
  !*** ./assets/UI/Icon/EditIcon.jsx ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EditIcon": () => (/* binding */ EditIcon)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.keys.js */ "./node_modules/core-js/modules/es.object.keys.js");
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.index-of.js */ "./node_modules/core-js/modules/es.array.index-of.js");
/* harmony import */ var core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.object.assign.js */ "./node_modules/core-js/modules/es.object.assign.js");
/* harmony import */ var core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.function.bind.js */ "./node_modules/core-js/modules/es.function.bind.js");
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);





var _excluded = ["additionalClass"];
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var EditIcon = function EditIcon(_ref) {
  var additionalClass = _ref.additionalClass,
    props = _objectWithoutProperties(_ref, _excluded);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement("svg", _extends({
    className: 'icon i-edit' + (additionalClass ? ' ' + additionalClass : '')
  }, props, {
    enableBackground: "new 0 0 96 96",
    viewBox: "0 0 96 96",
    xmlns: "http://www.w3.org/2000/svg"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement("path", {
    fill: "currentColor",
    d: "m28 70c.2 0 .4 0 .6-.1l16-4.7c.3-.1.6-.3.8-.5l35.4-35.2c.2-.2.4-.3.5-.5 1.9-1.9 2.9-4.4 3-7.1.1-2.8-1-5.4-2.9-7.4l-.1-.1c-2-1.9-4.6-2.8-7.4-2.7s-5.3 1.3-7.1 3.3l-35.5 35.5c-.2.3-.4.6-.5.9l-4.7 16c-.2.7 0 1.5.5 2 .4.4.9.6 1.4.6zm6.5-16.9 35.2-35.3c1.1-1.2 2.7-1.9 4.4-2s3.3.5 4.5 1.6c1.1 1.3 1.7 2.8 1.7 4.5s-.8 3.3-2 4.5l-.1.1-.1.1-35.1 34.9-12 3.5zm49.5 28.9h-72c-1.1 0-2 .9-2 2s.9 2 2 2h72c1.1 0 2-.9 2-2s-.9-2-2-2z"
  }));
};

/***/ }),

/***/ "./assets/UI/Icon/Quantity/PlusIcon.jsx":
/*!**********************************************!*\
  !*** ./assets/UI/Icon/Quantity/PlusIcon.jsx ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PlusIcon": () => (/* binding */ PlusIcon)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.keys.js */ "./node_modules/core-js/modules/es.object.keys.js");
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.index-of.js */ "./node_modules/core-js/modules/es.array.index-of.js");
/* harmony import */ var core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.object.assign.js */ "./node_modules/core-js/modules/es.object.assign.js");
/* harmony import */ var core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.function.bind.js */ "./node_modules/core-js/modules/es.function.bind.js");
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);





var _excluded = ["additionalClass"];
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var PlusIcon = function PlusIcon(_ref) {
  var additionalClass = _ref.additionalClass,
    props = _objectWithoutProperties(_ref, _excluded);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement("svg", _extends({
    className: 'icon i-plus' + (additionalClass ? ' ' + additionalClass : '')
  }, props, {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement("g", {
    id: "essentials/basics/add",
    fill: "none",
    fillRule: "evenodd"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement("path", {
    fill: "currentColor",
    id: "Fill-70",
    d: "m11.4935898 21c-.276 0-.5-.224-.5-.5v-8.5h-8.49999998c-.276 0-.5-.224-.5-.5s.224-.5.5-.5h8.49999998v-8.5c0-.276.224-.5.5-.5s.5.224.5.5v8.5h8.5c.276 0 .5.224.5.5s-.224.5-.5.5h-8.5v8.5c0 .276-.224.5-.5.5"
  })));
};

/***/ }),

/***/ "./assets/UI/Icon/TrashIcon.jsx":
/*!**************************************!*\
  !*** ./assets/UI/Icon/TrashIcon.jsx ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TrashIcon": () => (/* binding */ TrashIcon)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.keys.js */ "./node_modules/core-js/modules/es.object.keys.js");
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.index-of.js */ "./node_modules/core-js/modules/es.array.index-of.js");
/* harmony import */ var core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.object.assign.js */ "./node_modules/core-js/modules/es.object.assign.js");
/* harmony import */ var core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.function.bind.js */ "./node_modules/core-js/modules/es.function.bind.js");
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);





var _excluded = ["additionalClass"];
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var TrashIcon = function TrashIcon(_ref) {
  var additionalClass = _ref.additionalClass,
    props = _objectWithoutProperties(_ref, _excluded);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement("svg", _extends({
    className: 'icon i-trash' + (additionalClass ? ' ' + additionalClass : '')
  }, props, {
    viewBox: "-40 0 427 427.00131",
    xmlns: "http://www.w3.org/2000/svg"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement("path", {
    fill: "currentColor",
    d: "m232.398438 154.703125c-5.523438 0-10 4.476563-10 10v189c0 5.519531 4.476562 10 10 10 5.523437 0 10-4.480469 10-10v-189c0-5.523437-4.476563-10-10-10zm0 0"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement("path", {
    fill: "currentColor",
    d: "m114.398438 154.703125c-5.523438 0-10 4.476563-10 10v189c0 5.519531 4.476562 10 10 10 5.523437 0 10-4.480469 10-10v-189c0-5.523437-4.476563-10-10-10zm0 0"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement("path", {
    fill: "currentColor",
    d: "m28.398438 127.121094v246.378906c0 14.5625 5.339843 28.238281 14.667968 38.050781 9.285156 9.839844 22.207032 15.425781 35.730469 15.449219h189.203125c13.527344-.023438 26.449219-5.609375 35.730469-15.449219 9.328125-9.8125 14.667969-23.488281 14.667969-38.050781v-246.378906c18.542968-4.921875 30.558593-22.835938 28.078124-41.863282-2.484374-19.023437-18.691406-33.253906-37.878906-33.257812h-51.199218v-12.5c.058593-10.511719-4.097657-20.605469-11.539063-28.03125-7.441406-7.421875-17.550781-11.5546875-28.0625-11.46875h-88.796875c-10.511719-.0859375-20.621094 4.046875-28.0625 11.46875-7.441406 7.425781-11.597656 17.519531-11.539062 28.03125v12.5h-51.199219c-19.1875.003906-35.394531 14.234375-37.878907 33.257812-2.480468 19.027344 9.535157 36.941407 28.078126 41.863282zm239.601562 279.878906h-189.203125c-17.097656 0-30.398437-14.6875-30.398437-33.5v-245.5h250v245.5c0 18.8125-13.300782 33.5-30.398438 33.5zm-158.601562-367.5c-.066407-5.207031 1.980468-10.21875 5.675781-13.894531 3.691406-3.675781 8.714843-5.695313 13.925781-5.605469h88.796875c5.210937-.089844 10.234375 1.929688 13.925781 5.605469 3.695313 3.671875 5.742188 8.6875 5.675782 13.894531v12.5h-128zm-71.199219 32.5h270.398437c9.941406 0 18 8.058594 18 18s-8.058594 18-18 18h-270.398437c-9.941407 0-18-8.058594-18-18s8.058593-18 18-18zm0 0"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement("path", {
    fill: "currentColor",
    d: "m173.398438 154.703125c-5.523438 0-10 4.476563-10 10v189c0 5.519531 4.476562 10 10 10 5.523437 0 10-4.480469 10-10v-189c0-5.523437-4.476563-10-10-10zm0 0"
  }));
};

/***/ }),

/***/ "./assets/UI/SuggestList.jsx":
/*!***********************************!*\
  !*** ./assets/UI/SuggestList.jsx ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SuggestList": () => (/* binding */ SuggestList)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.map.js */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.is-array.js */ "./node_modules/core-js/modules/es.array.is-array.js");
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.array.push.js */ "./node_modules/core-js/modules/es.array.push.js");
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.array.from.js */ "./node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.regexp.test.js */ "./node_modules/core-js/modules/es.regexp.test.js");
/* harmony import */ var core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.error.cause.js */ "./node_modules/core-js/modules/es.error.cause.js");
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.error.to-string.js */ "./node_modules/core-js/modules/es.error.to-string.js");
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var i18next__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! i18next */ "./node_modules/i18next/dist/esm/i18next.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_18__);

















function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }


var SuggestList = function SuggestList(_ref) {
  var additionalClass = _ref.additionalClass,
    suggests = _ref.suggests,
    onSelect = _ref.onSelect,
    onClose = _ref.onClose,
    render = _ref.render;
  //fermeture au click sur le côté
  (0,react__WEBPACK_IMPORTED_MODULE_18__.useEffect)(function () {
    document.body.addEventListener('click', onClose);
    return function () {
      return document.removeEventListener('click', onClose);
    };
  }, []);
  //fermeture à l'appui sur Tab
  (0,react__WEBPACK_IMPORTED_MODULE_18__.useEffect)(function () {
    var closeOnTabDown = function closeOnTabDown(e) {
      if (e.key === 'Tab') {
        onClose();
      }
    };
    document.addEventListener('keydown', closeOnTabDown);
    return function () {
      return document.removeEventListener('click', closeOnTabDown);
    };
  }, []);

  //utilisation au clavier
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_18__.useState)(null),
    _useState2 = _slicedToArray(_useState, 2),
    selected = _useState2[0],
    setSelected = _useState2[1];
  (0,react__WEBPACK_IMPORTED_MODULE_18__.useEffect)(function () {
    var onKeyDown = function onKeyDown(e) {
      switch (e.key) {
        case 'ArrowUp':
          e.preventDefault();
          setSelected(function (selected) {
            if (selected === null || selected <= 0) {
              return suggests.length - 1;
            }
            return selected - 1;
          });
          break;
        case 'ArrowDown':
          e.preventDefault();
          setSelected(function (selected) {
            if (selected === null || selected >= suggests.length - 1) {
              return 0;
            }
            return selected + 1;
          });
          break;
        default:
          break;
      }
    };
    document.addEventListener('keydown', onKeyDown);
    return function () {
      return document.removeEventListener('keydown', onKeyDown);
    };
  }, []);
  (0,react__WEBPACK_IMPORTED_MODULE_18__.useEffect)(function () {
    var onKeyDown = function onKeyDown(e) {
      if (e.key === 'Enter') {
        e.preventDefault();
        e.stopPropagation();
        onSelect(suggests[selected]);
      }
    };
    document.addEventListener('keydown', onKeyDown);
    return function () {
      return document.removeEventListener('keydown', onKeyDown);
    };
  }, [selected]);
  var stopPropagation = function stopPropagation(e) {
    e.stopPropagation();
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement("ul", {
    className: "suggest-list ".concat(additionalClass),
    onClick: stopPropagation,
    role: "listbox",
    "aria-label": (0,i18next__WEBPACK_IMPORTED_MODULE_17__.t)('suggestions', {
      ns: 'messages'
    })
  }, suggests.map(function (suggest, index) {
    return render(suggest, selected === index);
  }));
};

/***/ }),

/***/ "./assets/entrypoints/admin.js":
/*!*************************************!*\
  !*** ./assets/entrypoints/admin.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_parse_int_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.parse-int.js */ "./node_modules/core-js/modules/es.parse-int.js");
/* harmony import */ var core_js_modules_es_parse_int_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_parse_int_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _styles_Admin_index_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/Admin/index.css */ "./assets/styles/Admin/index.css");
/* harmony import */ var _styles_Admin_header_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../styles/Admin/header.css */ "./assets/styles/Admin/header.css");
/* harmony import */ var _styles_Admin_footer_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../styles/Admin/footer.css */ "./assets/styles/Admin/footer.css");
/* harmony import */ var _styles_Admin_home_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../styles/Admin/home.css */ "./assets/styles/Admin/home.css");
/* harmony import */ var _styles_Admin_form_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../styles/Admin/form.css */ "./assets/styles/Admin/form.css");
/* harmony import */ var _styles_Admin_form_filters_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../styles/Admin/form_filters.css */ "./assets/styles/Admin/form_filters.css");
/* harmony import */ var _styles_Admin_UI_suggestList_css__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../styles/Admin/UI/suggestList.css */ "./assets/styles/Admin/UI/suggestList.css");
/* harmony import */ var _styles_Admin_pagination_css__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../styles/Admin/pagination.css */ "./assets/styles/Admin/pagination.css");
/* harmony import */ var _styles_Admin_table_css__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../styles/Admin/table.css */ "./assets/styles/Admin/table.css");
/* harmony import */ var _styles_Admin_customTable_css__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../styles/Admin/customTable.css */ "./assets/styles/Admin/customTable.css");
/* harmony import */ var _styles_Admin_UI_buttons_css__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../styles/Admin/UI/buttons.css */ "./assets/styles/Admin/UI/buttons.css");
/* harmony import */ var _styles_Admin_breadcrumb_css__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../styles/Admin/breadcrumb.css */ "./assets/styles/Admin/breadcrumb.css");
/* harmony import */ var _styles_Admin_Product_show_css__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../styles/Admin/Product/show.css */ "./assets/styles/Admin/Product/show.css");
/* harmony import */ var _styles_Admin_flashes_css__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../styles/Admin/flashes.css */ "./assets/styles/Admin/flashes.css");
/* harmony import */ var _styles_Admin_review_css__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../styles/Admin/review.css */ "./assets/styles/Admin/review.css");
/* harmony import */ var _styles_Admin_alerts_css__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../styles/Admin/alerts.css */ "./assets/styles/Admin/alerts.css");
/* harmony import */ var _bootstrap__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../bootstrap */ "./assets/bootstrap.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! react-dom/client */ "./node_modules/react-dom/client.js");
/* harmony import */ var _Components_Admin_PurchaseStatusUpdater__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../Components/Admin/PurchaseStatusUpdater */ "./assets/Components/Admin/PurchaseStatusUpdater/index.jsx");
/* harmony import */ var _Components_Admin_ReviewModerator__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../Components/Admin/ReviewModerator */ "./assets/Components/Admin/ReviewModerator/index.jsx");
/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./i18n */ "./assets/entrypoints/i18n.js");
/* harmony import */ var _Components_Admin_IngredientsQuantitiesInput__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ../Components/Admin/IngredientsQuantitiesInput */ "./assets/Components/Admin/IngredientsQuantitiesInput/index.jsx");
/* harmony import */ var _Components_Admin_SelectLinkedItems__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ../Components/Admin/SelectLinkedItems */ "./assets/Components/Admin/SelectLinkedItems/index.jsx");
/* harmony import */ var _Components_Admin_AdminPictureUpload__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ../Components/Admin/AdminPictureUpload */ "./assets/Components/Admin/AdminPictureUpload/index.jsx");
/* harmony import */ var _Components_Admin_AdminAnswerControl__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ../Components/Admin/AdminAnswerControl */ "./assets/Components/Admin/AdminAnswerControl/index.jsx");
/* harmony import */ var _Components_Admin_PackagingChoicesInput__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ../Components/Admin/PackagingChoicesInput */ "./assets/Components/Admin/PackagingChoicesInput/index.jsx");
/* harmony import */ var _Components_Admin_SelectUniqueItem__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ../Components/Admin/SelectUniqueItem */ "./assets/Components/Admin/SelectUniqueItem/index.jsx");





// any CSS you import will output into a single css file (app.css in this case)

















// start the Stimulus application












_i18n__WEBPACK_IMPORTED_MODULE_26__["default"].changeLanguage('fr');

//on auth event : suppression des items de session storage
if (document.getElementById('auth-event')) {
  sessionStorage.removeItem('checkout');
  sessionStorage.removeItem('check_st');
  sessionStorage.removeItem('light_user');
}

//select linked items
[document.getElementById('select-products-input'), document.getElementById('select-recipes-input'), document.getElementById('select-articles-input')].forEach(function (input) {
  if (input) {
    var _input$querySelector$, _input$querySelector, _input$dataset, _input$dataset2;
    var error = (_input$querySelector$ = (_input$querySelector = input.querySelector('.admin-form-error ul li:first-child')) === null || _input$querySelector === void 0 ? void 0 : _input$querySelector.innerHTML) !== null && _input$querySelector$ !== void 0 ? _input$querySelector$ : null;
    var root = (0,react_dom_client__WEBPACK_IMPORTED_MODULE_23__.createRoot)(input);
    root.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_22___default().createElement(_Components_Admin_SelectLinkedItems__WEBPACK_IMPORTED_MODULE_28__.SelectLinkedItems, {
      indexEndpoint: (_input$dataset = input.dataset) === null || _input$dataset === void 0 ? void 0 : _input$dataset.indexendpoint,
      searchEndpoint: (_input$dataset2 = input.dataset) === null || _input$dataset2 === void 0 ? void 0 : _input$dataset2.searchendpoint,
      name: input.dataset.name,
      title: input.dataset.title,
      formError: error
    }));
  }
});

//select unique item
document.querySelectorAll('.select-unique-item-input').forEach(function (input) {
  var _input$querySelector$2, _input$querySelector2;
  var error = (_input$querySelector$2 = (_input$querySelector2 = input.querySelector('.admin-form-error ul li:first-child')) === null || _input$querySelector2 === void 0 ? void 0 : _input$querySelector2.innerHTML) !== null && _input$querySelector$2 !== void 0 ? _input$querySelector$2 : null;
  var root = (0,react_dom_client__WEBPACK_IMPORTED_MODULE_23__.createRoot)(input);
  root.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_22___default().createElement(_Components_Admin_SelectUniqueItem__WEBPACK_IMPORTED_MODULE_32__.SelectUniqueItem, {
    type: input.dataset.type,
    itemId: input.dataset.itemid,
    title: input.dataset.title,
    name: input.dataset.name,
    formError: error
  }));
});

//product form : packagingChoices input
if (document.getElementById('packaging-choices-input')) {
  var input = document.getElementById('packaging-choices-input');
  var root = (0,react_dom_client__WEBPACK_IMPORTED_MODULE_23__.createRoot)(input);
  root.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_22___default().createElement(_Components_Admin_PackagingChoicesInput__WEBPACK_IMPORTED_MODULE_31__.PackagingChoicesInput, {
    name: input.dataset.name,
    value: input.dataset.value,
    productId: input.dataset.productid
  }));
}
if (document.getElementById('purchase-status-updater')) {
  var purchaseStatusUpdater = document.getElementById('purchase-status-updater');
  var purchaseStatusUpdaterRoot = (0,react_dom_client__WEBPACK_IMPORTED_MODULE_23__.createRoot)(purchaseStatusUpdater);
  purchaseStatusUpdaterRoot.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_22___default().createElement(_Components_Admin_PurchaseStatusUpdater__WEBPACK_IMPORTED_MODULE_24__.PurchaseStatusUpdater, {
    id: purchaseStatusUpdater.dataset.id,
    initialStatus: purchaseStatusUpdater.dataset.status
  }));
}
if (document.querySelector('.review-moderator')) {
  document.querySelectorAll('.review-moderator').forEach(function (reviewModerator) {
    var reviewModeratorRoot = (0,react_dom_client__WEBPACK_IMPORTED_MODULE_23__.createRoot)(reviewModerator);
    reviewModeratorRoot.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_22___default().createElement(_Components_Admin_ReviewModerator__WEBPACK_IMPORTED_MODULE_25__.ReviewModerator, {
      id: reviewModerator.dataset.id,
      initialStatus: reviewModerator.dataset.status
    }));
  });
}
if (document.getElementById('ingredients-quantities-input')) {
  var _input = document.getElementById('ingredients-quantities-input');
  var _root = (0,react_dom_client__WEBPACK_IMPORTED_MODULE_23__.createRoot)(_input);
  _root.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_22___default().createElement(_Components_Admin_IngredientsQuantitiesInput__WEBPACK_IMPORTED_MODULE_27__.IngredientsQuantitiesInput, {
    name: _input.dataset.name,
    value: _input.dataset.value
  }));
}

//picture upload field
if (document.querySelector('.admin-picture-upload')) {
  document.querySelectorAll('.admin-picture-upload').forEach(function (elt) {
    var _elt$dataset$resizewi, _elt$dataset$resizehe, _elt$dataset$value;
    var resizeWidth = parseInt((_elt$dataset$resizewi = elt.dataset.resizewidth) !== null && _elt$dataset$resizewi !== void 0 ? _elt$dataset$resizewi : '500');
    var resizeHeight = parseInt((_elt$dataset$resizehe = elt.dataset.resizeheight) !== null && _elt$dataset$resizehe !== void 0 ? _elt$dataset$resizehe : '500');
    var root = (0,react_dom_client__WEBPACK_IMPORTED_MODULE_23__.createRoot)(elt);
    root.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_22___default().createElement(_Components_Admin_AdminPictureUpload__WEBPACK_IMPORTED_MODULE_29__.AdminPictureUpload, {
      name: elt.dataset.name,
      label: elt.dataset.label,
      defaultBase64img: (_elt$dataset$value = elt.dataset.value) !== null && _elt$dataset$value !== void 0 ? _elt$dataset$value : null,
      resizeWidth: resizeWidth,
      resizeHeight: resizeHeight
    }));
  });
}

//admin answer
if (document.querySelector('.admin-answer-control')) {
  document.querySelectorAll('.admin-answer-control').forEach(function (elt) {
    var root = (0,react_dom_client__WEBPACK_IMPORTED_MODULE_23__.createRoot)(elt);
    root.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_22___default().createElement(_Components_Admin_AdminAnswerControl__WEBPACK_IMPORTED_MODULE_30__.AdminAnswerControl, {
      ownerClass: elt.dataset.ownerclass,
      ownerId: elt.dataset.ownerid
    }));
  });
}

/***/ }),

/***/ "./assets/functions/formaters.js":
/*!***************************************!*\
  !*** ./assets/functions/formaters.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "distanceFormater": () => (/* binding */ distanceFormater),
/* harmony export */   "priceFormater": () => (/* binding */ priceFormater),
/* harmony export */   "reviewNoteFormater": () => (/* binding */ reviewNoteFormater)
/* harmony export */ });
/* harmony import */ var _entrypoints_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../entrypoints/i18n */ "./assets/entrypoints/i18n.js");

var priceFormater = function priceFormater(price) {
  var formater = new Intl.NumberFormat(getLocaleOption(), {
    style: 'currency',
    currency: 'EUR'
  });
  return formater.format(price / 100);
};
var reviewNoteFormater = function reviewNoteFormater(reviewNote) {
  var formater = new Intl.NumberFormat(getLocaleOption());
  return formater.format(reviewNote / 10);
};

/**
 * @param {number} distance (m)
 */
var distanceFormater = function distanceFormater(distance) {
  if (distance >= 1000) {
    var distanceInKm = Math.round(distance / 100) / 10; // ex: 1574 m ---> 1.6

    var formater = new Intl.NumberFormat(getLocaleOption());
    return formater.format(distanceInKm) + ' km';
  }
  return distance + ' m';
};
var getLocaleOption = function getLocaleOption() {
  if (_entrypoints_i18n__WEBPACK_IMPORTED_MODULE_0__["default"].language === 'en') {
    return 'en-US';
  }
  return 'fr-FR';
};

/***/ }),

/***/ "./assets/functions/token.js":
/*!***********************************!*\
  !*** ./assets/functions/token.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createToken": () => (/* binding */ createToken)
/* harmony export */ });
var createToken = function createToken(count) {
  var token = '';
  for (var i = 0; i < count; i++) {
    token += Math.floor(Math.random() * 10);
  }
  return token;
};

/***/ }),

/***/ "./assets/styles/UI/Admin/Form/AdminShowCardRow.jsx":
/*!**********************************************************!*\
  !*** ./assets/styles/UI/Admin/Form/AdminShowCardRow.jsx ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AdminShowCardRow": () => (/* binding */ AdminShowCardRow)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var AdminShowCardRow = function AdminShowCardRow(_ref) {
  var value = _ref.value,
    label = _ref.label,
    _ref$lang = _ref.lang,
    lang = _ref$lang === void 0 ? null : _ref$lang;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: 'admin-show-card-row-wrapper' + (lang ? ' ' + lang + '-group' : '')
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "admin-show-card-row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "admin-show-card-row-label"
  }, label), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "admin-show-card-row-value"
  }, value)));
};

/***/ }),

/***/ "./assets/styles/UI/Admin/Form/AdminTextField.jsx":
/*!********************************************************!*\
  !*** ./assets/styles/UI/Admin/Form/AdminTextField.jsx ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AdminTextField": () => (/* binding */ AdminTextField)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.assign.js */ "./node_modules/core-js/modules/es.object.assign.js");
/* harmony import */ var core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.error.cause.js */ "./node_modules/core-js/modules/es.error.cause.js");
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.error.to-string.js */ "./node_modules/core-js/modules/es.error.to-string.js");
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.function.bind.js */ "./node_modules/core-js/modules/es.function.bind.js");
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _UI_Form_TextField__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../UI/Form/TextField */ "./assets/UI/Form/TextField.jsx");
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }




function _objectDestructuringEmpty(obj) { if (obj == null) throw new TypeError("Cannot destructure " + obj); }


var AdminTextField = function AdminTextField(_ref) {
  var props = Object.assign({}, (_objectDestructuringEmpty(_ref), _ref));
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement("div", {
    className: "admin-form-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_UI_Form_TextField__WEBPACK_IMPORTED_MODULE_5__.TextField, _extends({
    additionalClass: "admin-form-control"
  }, props)));
};

/***/ }),

/***/ "./assets/styles/Admin/IngredientsQuantitiesInput/index.css":
/*!******************************************************************!*\
  !*** ./assets/styles/Admin/IngredientsQuantitiesInput/index.css ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./assets/styles/Admin/Product/show.css":
/*!**********************************************!*\
  !*** ./assets/styles/Admin/Product/show.css ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./assets/styles/Admin/SuggestedProductsInput/index.css":
/*!**************************************************************!*\
  !*** ./assets/styles/Admin/SuggestedProductsInput/index.css ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./assets/styles/Admin/UI/buttons.css":
/*!********************************************!*\
  !*** ./assets/styles/Admin/UI/buttons.css ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./assets/styles/Admin/UI/suggestList.css":
/*!************************************************!*\
  !*** ./assets/styles/Admin/UI/suggestList.css ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./assets/styles/Admin/alerts.css":
/*!****************************************!*\
  !*** ./assets/styles/Admin/alerts.css ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./assets/styles/Admin/breadcrumb.css":
/*!********************************************!*\
  !*** ./assets/styles/Admin/breadcrumb.css ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./assets/styles/Admin/customTable.css":
/*!*********************************************!*\
  !*** ./assets/styles/Admin/customTable.css ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./assets/styles/Admin/flashes.css":
/*!*****************************************!*\
  !*** ./assets/styles/Admin/flashes.css ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./assets/styles/Admin/footer.css":
/*!****************************************!*\
  !*** ./assets/styles/Admin/footer.css ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./assets/styles/Admin/form.css":
/*!**************************************!*\
  !*** ./assets/styles/Admin/form.css ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./assets/styles/Admin/form_filters.css":
/*!**********************************************!*\
  !*** ./assets/styles/Admin/form_filters.css ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./assets/styles/Admin/header.css":
/*!****************************************!*\
  !*** ./assets/styles/Admin/header.css ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./assets/styles/Admin/home.css":
/*!**************************************!*\
  !*** ./assets/styles/Admin/home.css ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./assets/styles/Admin/index.css":
/*!***************************************!*\
  !*** ./assets/styles/Admin/index.css ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./assets/styles/Admin/pagination.css":
/*!********************************************!*\
  !*** ./assets/styles/Admin/pagination.css ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./assets/styles/Admin/review.css":
/*!****************************************!*\
  !*** ./assets/styles/Admin/review.css ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./assets/styles/Admin/table.css":
/*!***************************************!*\
  !*** ./assets/styles/Admin/table.css ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_core-js_modules_es_array_concat_js-node_modules_core-js_modules_es_array-a9bb89","vendors-node_modules_core-js_modules_es_array_map_js-node_modules_yup_index_esm_js-node_modul-2aaf22","vendors-node_modules_prop-types_index_js","vendors-node_modules_core-js_modules_es_weak-map_js","vendors-node_modules_react-dropzone_dist_es_index_js-node_modules_smart-img-resize_src_index_js","vendors-node_modules_symfony_stimulus-bridge_dist_index_js-node_modules_core-js_modules_es_re-504eb3","vendors-node_modules_core-js_modules_es_array_find_js-node_modules_core-js_modules_es_date_to-088547","assets_entrypoints_i18n_js-assets_functions_api_js","assets_CustomHook_form_useFormWithValidation_jsx-assets_UI_Form_TextField_jsx","assets_CustomHook_fetch_useFetch_jsx","assets_CustomHook_fetch_useFetchQSearch_jsx-assets_UI_Button_TrashButton_jsx","node_modules_symfony_stimulus-bridge_dist_webpack_loader_js_assets_controllers_json-assets_Cu-cb3e4b","assets_UI_Form_FormButton_jsx-assets_UI_Form_Select_jsx"], () => (__webpack_exec__("./assets/entrypoints/admin.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRtaW4uanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OytDQUNBLHFKQUFBQSxtQkFBQSxZQUFBQSxvQkFBQSxXQUFBQyxPQUFBLFNBQUFBLE9BQUEsT0FBQUMsRUFBQSxHQUFBQyxNQUFBLENBQUFDLFNBQUEsRUFBQUMsTUFBQSxHQUFBSCxFQUFBLENBQUFJLGNBQUEsRUFBQUMsY0FBQSxHQUFBSixNQUFBLENBQUFJLGNBQUEsY0FBQUMsR0FBQSxFQUFBQyxHQUFBLEVBQUFDLElBQUEsSUFBQUYsR0FBQSxDQUFBQyxHQUFBLElBQUFDLElBQUEsQ0FBQUMsS0FBQSxLQUFBQyxPQUFBLHdCQUFBQyxNQUFBLEdBQUFBLE1BQUEsT0FBQUMsY0FBQSxHQUFBRixPQUFBLENBQUFHLFFBQUEsa0JBQUFDLG1CQUFBLEdBQUFKLE9BQUEsQ0FBQUssYUFBQSx1QkFBQUMsaUJBQUEsR0FBQU4sT0FBQSxDQUFBTyxXQUFBLDhCQUFBQyxPQUFBWixHQUFBLEVBQUFDLEdBQUEsRUFBQUUsS0FBQSxXQUFBUixNQUFBLENBQUFJLGNBQUEsQ0FBQUMsR0FBQSxFQUFBQyxHQUFBLElBQUFFLEtBQUEsRUFBQUEsS0FBQSxFQUFBVSxVQUFBLE1BQUFDLFlBQUEsTUFBQUMsUUFBQSxTQUFBZixHQUFBLENBQUFDLEdBQUEsV0FBQVcsTUFBQSxtQkFBQUksR0FBQSxJQUFBSixNQUFBLFlBQUFBLE9BQUFaLEdBQUEsRUFBQUMsR0FBQSxFQUFBRSxLQUFBLFdBQUFILEdBQUEsQ0FBQUMsR0FBQSxJQUFBRSxLQUFBLGdCQUFBYyxLQUFBQyxPQUFBLEVBQUFDLE9BQUEsRUFBQUMsSUFBQSxFQUFBQyxXQUFBLFFBQUFDLGNBQUEsR0FBQUgsT0FBQSxJQUFBQSxPQUFBLENBQUF2QixTQUFBLFlBQUEyQixTQUFBLEdBQUFKLE9BQUEsR0FBQUksU0FBQSxFQUFBQyxTQUFBLEdBQUE3QixNQUFBLENBQUE4QixNQUFBLENBQUFILGNBQUEsQ0FBQTFCLFNBQUEsR0FBQThCLE9BQUEsT0FBQUMsT0FBQSxDQUFBTixXQUFBLGdCQUFBdEIsY0FBQSxDQUFBeUIsU0FBQSxlQUFBckIsS0FBQSxFQUFBeUIsZ0JBQUEsQ0FBQVYsT0FBQSxFQUFBRSxJQUFBLEVBQUFNLE9BQUEsTUFBQUYsU0FBQSxhQUFBSyxTQUFBQyxFQUFBLEVBQUE5QixHQUFBLEVBQUErQixHQUFBLG1CQUFBQyxJQUFBLFlBQUFELEdBQUEsRUFBQUQsRUFBQSxDQUFBRyxJQUFBLENBQUFqQyxHQUFBLEVBQUErQixHQUFBLGNBQUFmLEdBQUEsYUFBQWdCLElBQUEsV0FBQUQsR0FBQSxFQUFBZixHQUFBLFFBQUF2QixPQUFBLENBQUF3QixJQUFBLEdBQUFBLElBQUEsTUFBQWlCLGdCQUFBLGdCQUFBWCxVQUFBLGNBQUFZLGtCQUFBLGNBQUFDLDJCQUFBLFNBQUFDLGlCQUFBLE9BQUF6QixNQUFBLENBQUF5QixpQkFBQSxFQUFBL0IsY0FBQSxxQ0FBQWdDLFFBQUEsR0FBQTNDLE1BQUEsQ0FBQTRDLGNBQUEsRUFBQUMsdUJBQUEsR0FBQUYsUUFBQSxJQUFBQSxRQUFBLENBQUFBLFFBQUEsQ0FBQUcsTUFBQSxRQUFBRCx1QkFBQSxJQUFBQSx1QkFBQSxLQUFBOUMsRUFBQSxJQUFBRyxNQUFBLENBQUFvQyxJQUFBLENBQUFPLHVCQUFBLEVBQUFsQyxjQUFBLE1BQUErQixpQkFBQSxHQUFBRyx1QkFBQSxPQUFBRSxFQUFBLEdBQUFOLDBCQUFBLENBQUF4QyxTQUFBLEdBQUEyQixTQUFBLENBQUEzQixTQUFBLEdBQUFELE1BQUEsQ0FBQThCLE1BQUEsQ0FBQVksaUJBQUEsWUFBQU0sc0JBQUEvQyxTQUFBLGdDQUFBZ0QsT0FBQSxXQUFBQyxNQUFBLElBQUFqQyxNQUFBLENBQUFoQixTQUFBLEVBQUFpRCxNQUFBLFlBQUFkLEdBQUEsZ0JBQUFlLE9BQUEsQ0FBQUQsTUFBQSxFQUFBZCxHQUFBLHNCQUFBZ0IsY0FBQXZCLFNBQUEsRUFBQXdCLFdBQUEsYUFBQUMsT0FBQUosTUFBQSxFQUFBZCxHQUFBLEVBQUFtQixPQUFBLEVBQUFDLE1BQUEsUUFBQUMsTUFBQSxHQUFBdkIsUUFBQSxDQUFBTCxTQUFBLENBQUFxQixNQUFBLEdBQUFyQixTQUFBLEVBQUFPLEdBQUEsbUJBQUFxQixNQUFBLENBQUFwQixJQUFBLFFBQUFxQixNQUFBLEdBQUFELE1BQUEsQ0FBQXJCLEdBQUEsRUFBQTVCLEtBQUEsR0FBQWtELE1BQUEsQ0FBQWxELEtBQUEsU0FBQUEsS0FBQSxnQkFBQW1ELE9BQUEsQ0FBQW5ELEtBQUEsS0FBQU4sTUFBQSxDQUFBb0MsSUFBQSxDQUFBOUIsS0FBQSxlQUFBNkMsV0FBQSxDQUFBRSxPQUFBLENBQUEvQyxLQUFBLENBQUFvRCxPQUFBLEVBQUFDLElBQUEsV0FBQXJELEtBQUEsSUFBQThDLE1BQUEsU0FBQTlDLEtBQUEsRUFBQStDLE9BQUEsRUFBQUMsTUFBQSxnQkFBQW5DLEdBQUEsSUFBQWlDLE1BQUEsVUFBQWpDLEdBQUEsRUFBQWtDLE9BQUEsRUFBQUMsTUFBQSxRQUFBSCxXQUFBLENBQUFFLE9BQUEsQ0FBQS9DLEtBQUEsRUFBQXFELElBQUEsV0FBQUMsU0FBQSxJQUFBSixNQUFBLENBQUFsRCxLQUFBLEdBQUFzRCxTQUFBLEVBQUFQLE9BQUEsQ0FBQUcsTUFBQSxnQkFBQUssS0FBQSxXQUFBVCxNQUFBLFVBQUFTLEtBQUEsRUFBQVIsT0FBQSxFQUFBQyxNQUFBLFNBQUFBLE1BQUEsQ0FBQUMsTUFBQSxDQUFBckIsR0FBQSxTQUFBNEIsZUFBQSxFQUFBNUQsY0FBQSxvQkFBQUksS0FBQSxXQUFBQSxNQUFBMEMsTUFBQSxFQUFBZCxHQUFBLGFBQUE2QiwyQkFBQSxlQUFBWixXQUFBLFdBQUFFLE9BQUEsRUFBQUMsTUFBQSxJQUFBRixNQUFBLENBQUFKLE1BQUEsRUFBQWQsR0FBQSxFQUFBbUIsT0FBQSxFQUFBQyxNQUFBLGdCQUFBUSxlQUFBLEdBQUFBLGVBQUEsR0FBQUEsZUFBQSxDQUFBSCxJQUFBLENBQUFJLDBCQUFBLEVBQUFBLDBCQUFBLElBQUFBLDBCQUFBLHFCQUFBaEMsaUJBQUFWLE9BQUEsRUFBQUUsSUFBQSxFQUFBTSxPQUFBLFFBQUFtQyxLQUFBLHNDQUFBaEIsTUFBQSxFQUFBZCxHQUFBLHdCQUFBOEIsS0FBQSxZQUFBQyxLQUFBLHNEQUFBRCxLQUFBLG9CQUFBaEIsTUFBQSxRQUFBZCxHQUFBLFNBQUFnQyxVQUFBLFdBQUFyQyxPQUFBLENBQUFtQixNQUFBLEdBQUFBLE1BQUEsRUFBQW5CLE9BQUEsQ0FBQUssR0FBQSxHQUFBQSxHQUFBLFVBQUFpQyxRQUFBLEdBQUF0QyxPQUFBLENBQUFzQyxRQUFBLE1BQUFBLFFBQUEsUUFBQUMsY0FBQSxHQUFBQyxtQkFBQSxDQUFBRixRQUFBLEVBQUF0QyxPQUFBLE9BQUF1QyxjQUFBLFFBQUFBLGNBQUEsS0FBQS9CLGdCQUFBLG1CQUFBK0IsY0FBQSxxQkFBQXZDLE9BQUEsQ0FBQW1CLE1BQUEsRUFBQW5CLE9BQUEsQ0FBQXlDLElBQUEsR0FBQXpDLE9BQUEsQ0FBQTBDLEtBQUEsR0FBQTFDLE9BQUEsQ0FBQUssR0FBQSxzQkFBQUwsT0FBQSxDQUFBbUIsTUFBQSw2QkFBQWdCLEtBQUEsUUFBQUEsS0FBQSxnQkFBQW5DLE9BQUEsQ0FBQUssR0FBQSxFQUFBTCxPQUFBLENBQUEyQyxpQkFBQSxDQUFBM0MsT0FBQSxDQUFBSyxHQUFBLHVCQUFBTCxPQUFBLENBQUFtQixNQUFBLElBQUFuQixPQUFBLENBQUE0QyxNQUFBLFdBQUE1QyxPQUFBLENBQUFLLEdBQUEsR0FBQThCLEtBQUEsb0JBQUFULE1BQUEsR0FBQXZCLFFBQUEsQ0FBQVgsT0FBQSxFQUFBRSxJQUFBLEVBQUFNLE9BQUEsb0JBQUEwQixNQUFBLENBQUFwQixJQUFBLFFBQUE2QixLQUFBLEdBQUFuQyxPQUFBLENBQUE2QyxJQUFBLG1DQUFBbkIsTUFBQSxDQUFBckIsR0FBQSxLQUFBRyxnQkFBQSxxQkFBQS9CLEtBQUEsRUFBQWlELE1BQUEsQ0FBQXJCLEdBQUEsRUFBQXdDLElBQUEsRUFBQTdDLE9BQUEsQ0FBQTZDLElBQUEsa0JBQUFuQixNQUFBLENBQUFwQixJQUFBLEtBQUE2QixLQUFBLGdCQUFBbkMsT0FBQSxDQUFBbUIsTUFBQSxZQUFBbkIsT0FBQSxDQUFBSyxHQUFBLEdBQUFxQixNQUFBLENBQUFyQixHQUFBLG1CQUFBbUMsb0JBQUFGLFFBQUEsRUFBQXRDLE9BQUEsUUFBQThDLFVBQUEsR0FBQTlDLE9BQUEsQ0FBQW1CLE1BQUEsRUFBQUEsTUFBQSxHQUFBbUIsUUFBQSxDQUFBekQsUUFBQSxDQUFBaUUsVUFBQSxPQUFBQyxTQUFBLEtBQUE1QixNQUFBLFNBQUFuQixPQUFBLENBQUFzQyxRQUFBLHFCQUFBUSxVQUFBLElBQUFSLFFBQUEsQ0FBQXpELFFBQUEsZUFBQW1CLE9BQUEsQ0FBQW1CLE1BQUEsYUFBQW5CLE9BQUEsQ0FBQUssR0FBQSxHQUFBMEMsU0FBQSxFQUFBUCxtQkFBQSxDQUFBRixRQUFBLEVBQUF0QyxPQUFBLGVBQUFBLE9BQUEsQ0FBQW1CLE1BQUEsa0JBQUEyQixVQUFBLEtBQUE5QyxPQUFBLENBQUFtQixNQUFBLFlBQUFuQixPQUFBLENBQUFLLEdBQUEsT0FBQTJDLFNBQUEsdUNBQUFGLFVBQUEsaUJBQUF0QyxnQkFBQSxNQUFBa0IsTUFBQSxHQUFBdkIsUUFBQSxDQUFBZ0IsTUFBQSxFQUFBbUIsUUFBQSxDQUFBekQsUUFBQSxFQUFBbUIsT0FBQSxDQUFBSyxHQUFBLG1CQUFBcUIsTUFBQSxDQUFBcEIsSUFBQSxTQUFBTixPQUFBLENBQUFtQixNQUFBLFlBQUFuQixPQUFBLENBQUFLLEdBQUEsR0FBQXFCLE1BQUEsQ0FBQXJCLEdBQUEsRUFBQUwsT0FBQSxDQUFBc0MsUUFBQSxTQUFBOUIsZ0JBQUEsTUFBQXlDLElBQUEsR0FBQXZCLE1BQUEsQ0FBQXJCLEdBQUEsU0FBQTRDLElBQUEsR0FBQUEsSUFBQSxDQUFBSixJQUFBLElBQUE3QyxPQUFBLENBQUFzQyxRQUFBLENBQUFZLFVBQUEsSUFBQUQsSUFBQSxDQUFBeEUsS0FBQSxFQUFBdUIsT0FBQSxDQUFBbUQsSUFBQSxHQUFBYixRQUFBLENBQUFjLE9BQUEsZUFBQXBELE9BQUEsQ0FBQW1CLE1BQUEsS0FBQW5CLE9BQUEsQ0FBQW1CLE1BQUEsV0FBQW5CLE9BQUEsQ0FBQUssR0FBQSxHQUFBMEMsU0FBQSxHQUFBL0MsT0FBQSxDQUFBc0MsUUFBQSxTQUFBOUIsZ0JBQUEsSUFBQXlDLElBQUEsSUFBQWpELE9BQUEsQ0FBQW1CLE1BQUEsWUFBQW5CLE9BQUEsQ0FBQUssR0FBQSxPQUFBMkMsU0FBQSxzQ0FBQWhELE9BQUEsQ0FBQXNDLFFBQUEsU0FBQTlCLGdCQUFBLGNBQUE2QyxhQUFBQyxJQUFBLFFBQUFDLEtBQUEsS0FBQUMsTUFBQSxFQUFBRixJQUFBLFlBQUFBLElBQUEsS0FBQUMsS0FBQSxDQUFBRSxRQUFBLEdBQUFILElBQUEsV0FBQUEsSUFBQSxLQUFBQyxLQUFBLENBQUFHLFVBQUEsR0FBQUosSUFBQSxLQUFBQyxLQUFBLENBQUFJLFFBQUEsR0FBQUwsSUFBQSxXQUFBTSxVQUFBLENBQUFDLElBQUEsQ0FBQU4sS0FBQSxjQUFBTyxjQUFBUCxLQUFBLFFBQUE3QixNQUFBLEdBQUE2QixLQUFBLENBQUFRLFVBQUEsUUFBQXJDLE1BQUEsQ0FBQXBCLElBQUEsb0JBQUFvQixNQUFBLENBQUFyQixHQUFBLEVBQUFrRCxLQUFBLENBQUFRLFVBQUEsR0FBQXJDLE1BQUEsYUFBQXpCLFFBQUFOLFdBQUEsU0FBQWlFLFVBQUEsTUFBQUosTUFBQSxhQUFBN0QsV0FBQSxDQUFBdUIsT0FBQSxDQUFBbUMsWUFBQSxjQUFBVyxLQUFBLGlCQUFBakQsT0FBQWtELFFBQUEsUUFBQUEsUUFBQSxRQUFBQyxjQUFBLEdBQUFELFFBQUEsQ0FBQXJGLGNBQUEsT0FBQXNGLGNBQUEsU0FBQUEsY0FBQSxDQUFBM0QsSUFBQSxDQUFBMEQsUUFBQSw0QkFBQUEsUUFBQSxDQUFBZCxJQUFBLFNBQUFjLFFBQUEsT0FBQUUsS0FBQSxDQUFBRixRQUFBLENBQUFHLE1BQUEsU0FBQUMsQ0FBQSxPQUFBbEIsSUFBQSxZQUFBQSxLQUFBLGFBQUFrQixDQUFBLEdBQUFKLFFBQUEsQ0FBQUcsTUFBQSxPQUFBakcsTUFBQSxDQUFBb0MsSUFBQSxDQUFBMEQsUUFBQSxFQUFBSSxDQUFBLFVBQUFsQixJQUFBLENBQUExRSxLQUFBLEdBQUF3RixRQUFBLENBQUFJLENBQUEsR0FBQWxCLElBQUEsQ0FBQU4sSUFBQSxPQUFBTSxJQUFBLFNBQUFBLElBQUEsQ0FBQTFFLEtBQUEsR0FBQXNFLFNBQUEsRUFBQUksSUFBQSxDQUFBTixJQUFBLE9BQUFNLElBQUEsWUFBQUEsSUFBQSxDQUFBQSxJQUFBLEdBQUFBLElBQUEsZUFBQUEsSUFBQSxFQUFBZCxVQUFBLGVBQUFBLFdBQUEsYUFBQTVELEtBQUEsRUFBQXNFLFNBQUEsRUFBQUYsSUFBQSxpQkFBQXBDLGlCQUFBLENBQUF2QyxTQUFBLEdBQUF3QywwQkFBQSxFQUFBckMsY0FBQSxDQUFBMkMsRUFBQSxtQkFBQXZDLEtBQUEsRUFBQWlDLDBCQUFBLEVBQUF0QixZQUFBLFNBQUFmLGNBQUEsQ0FBQXFDLDBCQUFBLG1CQUFBakMsS0FBQSxFQUFBZ0MsaUJBQUEsRUFBQXJCLFlBQUEsU0FBQXFCLGlCQUFBLENBQUE2RCxXQUFBLEdBQUFwRixNQUFBLENBQUF3QiwwQkFBQSxFQUFBMUIsaUJBQUEsd0JBQUFqQixPQUFBLENBQUF3RyxtQkFBQSxhQUFBQyxNQUFBLFFBQUFDLElBQUEsd0JBQUFELE1BQUEsSUFBQUEsTUFBQSxDQUFBRSxXQUFBLFdBQUFELElBQUEsS0FBQUEsSUFBQSxLQUFBaEUsaUJBQUEsNkJBQUFnRSxJQUFBLENBQUFILFdBQUEsSUFBQUcsSUFBQSxDQUFBRSxJQUFBLE9BQUE1RyxPQUFBLENBQUE2RyxJQUFBLGFBQUFKLE1BQUEsV0FBQXZHLE1BQUEsQ0FBQTRHLGNBQUEsR0FBQTVHLE1BQUEsQ0FBQTRHLGNBQUEsQ0FBQUwsTUFBQSxFQUFBOUQsMEJBQUEsS0FBQThELE1BQUEsQ0FBQU0sU0FBQSxHQUFBcEUsMEJBQUEsRUFBQXhCLE1BQUEsQ0FBQXNGLE1BQUEsRUFBQXhGLGlCQUFBLHlCQUFBd0YsTUFBQSxDQUFBdEcsU0FBQSxHQUFBRCxNQUFBLENBQUE4QixNQUFBLENBQUFpQixFQUFBLEdBQUF3RCxNQUFBLEtBQUF6RyxPQUFBLENBQUFnSCxLQUFBLGFBQUExRSxHQUFBLGFBQUF3QixPQUFBLEVBQUF4QixHQUFBLE9BQUFZLHFCQUFBLENBQUFJLGFBQUEsQ0FBQW5ELFNBQUEsR0FBQWdCLE1BQUEsQ0FBQW1DLGFBQUEsQ0FBQW5ELFNBQUEsRUFBQVksbUJBQUEsaUNBQUFmLE9BQUEsQ0FBQXNELGFBQUEsR0FBQUEsYUFBQSxFQUFBdEQsT0FBQSxDQUFBaUgsS0FBQSxhQUFBeEYsT0FBQSxFQUFBQyxPQUFBLEVBQUFDLElBQUEsRUFBQUMsV0FBQSxFQUFBMkIsV0FBQSxlQUFBQSxXQUFBLEtBQUFBLFdBQUEsR0FBQTJELE9BQUEsT0FBQUMsSUFBQSxPQUFBN0QsYUFBQSxDQUFBOUIsSUFBQSxDQUFBQyxPQUFBLEVBQUFDLE9BQUEsRUFBQUMsSUFBQSxFQUFBQyxXQUFBLEdBQUEyQixXQUFBLFVBQUF2RCxPQUFBLENBQUF3RyxtQkFBQSxDQUFBOUUsT0FBQSxJQUFBeUYsSUFBQSxHQUFBQSxJQUFBLENBQUEvQixJQUFBLEdBQUFyQixJQUFBLFdBQUFILE1BQUEsV0FBQUEsTUFBQSxDQUFBa0IsSUFBQSxHQUFBbEIsTUFBQSxDQUFBbEQsS0FBQSxHQUFBeUcsSUFBQSxDQUFBL0IsSUFBQSxXQUFBbEMscUJBQUEsQ0FBQUQsRUFBQSxHQUFBOUIsTUFBQSxDQUFBOEIsRUFBQSxFQUFBaEMsaUJBQUEsZ0JBQUFFLE1BQUEsQ0FBQThCLEVBQUEsRUFBQXBDLGNBQUEsaUNBQUFNLE1BQUEsQ0FBQThCLEVBQUEsNkRBQUFqRCxPQUFBLENBQUFvSCxJQUFBLGFBQUFDLEdBQUEsUUFBQUMsTUFBQSxHQUFBcEgsTUFBQSxDQUFBbUgsR0FBQSxHQUFBRCxJQUFBLGdCQUFBNUcsR0FBQSxJQUFBOEcsTUFBQSxFQUFBRixJQUFBLENBQUF0QixJQUFBLENBQUF0RixHQUFBLFVBQUE0RyxJQUFBLENBQUFHLE9BQUEsYUFBQW5DLEtBQUEsV0FBQWdDLElBQUEsQ0FBQWYsTUFBQSxTQUFBN0YsR0FBQSxHQUFBNEcsSUFBQSxDQUFBSSxHQUFBLFFBQUFoSCxHQUFBLElBQUE4RyxNQUFBLFNBQUFsQyxJQUFBLENBQUExRSxLQUFBLEdBQUFGLEdBQUEsRUFBQTRFLElBQUEsQ0FBQU4sSUFBQSxPQUFBTSxJQUFBLFdBQUFBLElBQUEsQ0FBQU4sSUFBQSxPQUFBTSxJQUFBLFFBQUFwRixPQUFBLENBQUFnRCxNQUFBLEdBQUFBLE1BQUEsRUFBQWQsT0FBQSxDQUFBL0IsU0FBQSxLQUFBd0csV0FBQSxFQUFBekUsT0FBQSxFQUFBK0QsS0FBQSxXQUFBQSxNQUFBd0IsYUFBQSxhQUFBQyxJQUFBLFdBQUF0QyxJQUFBLFdBQUFWLElBQUEsUUFBQUMsS0FBQSxHQUFBSyxTQUFBLE9BQUFGLElBQUEsWUFBQVAsUUFBQSxjQUFBbkIsTUFBQSxnQkFBQWQsR0FBQSxHQUFBMEMsU0FBQSxPQUFBYSxVQUFBLENBQUExQyxPQUFBLENBQUE0QyxhQUFBLElBQUEwQixhQUFBLFdBQUFiLElBQUEsa0JBQUFBLElBQUEsQ0FBQWUsTUFBQSxPQUFBdkgsTUFBQSxDQUFBb0MsSUFBQSxPQUFBb0UsSUFBQSxNQUFBUixLQUFBLEVBQUFRLElBQUEsQ0FBQWdCLEtBQUEsY0FBQWhCLElBQUEsSUFBQTVCLFNBQUEsTUFBQTZDLElBQUEsV0FBQUEsS0FBQSxTQUFBL0MsSUFBQSxXQUFBZ0QsVUFBQSxRQUFBakMsVUFBQSxJQUFBRyxVQUFBLGtCQUFBOEIsVUFBQSxDQUFBdkYsSUFBQSxRQUFBdUYsVUFBQSxDQUFBeEYsR0FBQSxjQUFBeUYsSUFBQSxLQUFBbkQsaUJBQUEsV0FBQUEsa0JBQUFvRCxTQUFBLGFBQUFsRCxJQUFBLFFBQUFrRCxTQUFBLE1BQUEvRixPQUFBLGtCQUFBZ0csT0FBQUMsR0FBQSxFQUFBQyxNQUFBLFdBQUF4RSxNQUFBLENBQUFwQixJQUFBLFlBQUFvQixNQUFBLENBQUFyQixHQUFBLEdBQUEwRixTQUFBLEVBQUEvRixPQUFBLENBQUFtRCxJQUFBLEdBQUE4QyxHQUFBLEVBQUFDLE1BQUEsS0FBQWxHLE9BQUEsQ0FBQW1CLE1BQUEsV0FBQW5CLE9BQUEsQ0FBQUssR0FBQSxHQUFBMEMsU0FBQSxLQUFBbUQsTUFBQSxhQUFBN0IsQ0FBQSxRQUFBVCxVQUFBLENBQUFRLE1BQUEsTUFBQUMsQ0FBQSxTQUFBQSxDQUFBLFFBQUFkLEtBQUEsUUFBQUssVUFBQSxDQUFBUyxDQUFBLEdBQUEzQyxNQUFBLEdBQUE2QixLQUFBLENBQUFRLFVBQUEsaUJBQUFSLEtBQUEsQ0FBQUMsTUFBQSxTQUFBd0MsTUFBQSxhQUFBekMsS0FBQSxDQUFBQyxNQUFBLFNBQUFpQyxJQUFBLFFBQUFVLFFBQUEsR0FBQWhJLE1BQUEsQ0FBQW9DLElBQUEsQ0FBQWdELEtBQUEsZUFBQTZDLFVBQUEsR0FBQWpJLE1BQUEsQ0FBQW9DLElBQUEsQ0FBQWdELEtBQUEscUJBQUE0QyxRQUFBLElBQUFDLFVBQUEsYUFBQVgsSUFBQSxHQUFBbEMsS0FBQSxDQUFBRSxRQUFBLFNBQUF1QyxNQUFBLENBQUF6QyxLQUFBLENBQUFFLFFBQUEsZ0JBQUFnQyxJQUFBLEdBQUFsQyxLQUFBLENBQUFHLFVBQUEsU0FBQXNDLE1BQUEsQ0FBQXpDLEtBQUEsQ0FBQUcsVUFBQSxjQUFBeUMsUUFBQSxhQUFBVixJQUFBLEdBQUFsQyxLQUFBLENBQUFFLFFBQUEsU0FBQXVDLE1BQUEsQ0FBQXpDLEtBQUEsQ0FBQUUsUUFBQSxxQkFBQTJDLFVBQUEsWUFBQWhFLEtBQUEscURBQUFxRCxJQUFBLEdBQUFsQyxLQUFBLENBQUFHLFVBQUEsU0FBQXNDLE1BQUEsQ0FBQXpDLEtBQUEsQ0FBQUcsVUFBQSxZQUFBZCxNQUFBLFdBQUFBLE9BQUF0QyxJQUFBLEVBQUFELEdBQUEsYUFBQWdFLENBQUEsUUFBQVQsVUFBQSxDQUFBUSxNQUFBLE1BQUFDLENBQUEsU0FBQUEsQ0FBQSxRQUFBZCxLQUFBLFFBQUFLLFVBQUEsQ0FBQVMsQ0FBQSxPQUFBZCxLQUFBLENBQUFDLE1BQUEsU0FBQWlDLElBQUEsSUFBQXRILE1BQUEsQ0FBQW9DLElBQUEsQ0FBQWdELEtBQUEsd0JBQUFrQyxJQUFBLEdBQUFsQyxLQUFBLENBQUFHLFVBQUEsUUFBQTJDLFlBQUEsR0FBQTlDLEtBQUEsYUFBQThDLFlBQUEsaUJBQUEvRixJQUFBLG1CQUFBQSxJQUFBLEtBQUErRixZQUFBLENBQUE3QyxNQUFBLElBQUFuRCxHQUFBLElBQUFBLEdBQUEsSUFBQWdHLFlBQUEsQ0FBQTNDLFVBQUEsS0FBQTJDLFlBQUEsY0FBQTNFLE1BQUEsR0FBQTJFLFlBQUEsR0FBQUEsWUFBQSxDQUFBdEMsVUFBQSxjQUFBckMsTUFBQSxDQUFBcEIsSUFBQSxHQUFBQSxJQUFBLEVBQUFvQixNQUFBLENBQUFyQixHQUFBLEdBQUFBLEdBQUEsRUFBQWdHLFlBQUEsU0FBQWxGLE1BQUEsZ0JBQUFnQyxJQUFBLEdBQUFrRCxZQUFBLENBQUEzQyxVQUFBLEVBQUFsRCxnQkFBQSxTQUFBOEYsUUFBQSxDQUFBNUUsTUFBQSxNQUFBNEUsUUFBQSxXQUFBQSxTQUFBNUUsTUFBQSxFQUFBaUMsUUFBQSxvQkFBQWpDLE1BQUEsQ0FBQXBCLElBQUEsUUFBQW9CLE1BQUEsQ0FBQXJCLEdBQUEscUJBQUFxQixNQUFBLENBQUFwQixJQUFBLG1CQUFBb0IsTUFBQSxDQUFBcEIsSUFBQSxRQUFBNkMsSUFBQSxHQUFBekIsTUFBQSxDQUFBckIsR0FBQSxnQkFBQXFCLE1BQUEsQ0FBQXBCLElBQUEsU0FBQXdGLElBQUEsUUFBQXpGLEdBQUEsR0FBQXFCLE1BQUEsQ0FBQXJCLEdBQUEsT0FBQWMsTUFBQSxrQkFBQWdDLElBQUEseUJBQUF6QixNQUFBLENBQUFwQixJQUFBLElBQUFxRCxRQUFBLFVBQUFSLElBQUEsR0FBQVEsUUFBQSxHQUFBbkQsZ0JBQUEsS0FBQStGLE1BQUEsV0FBQUEsT0FBQTdDLFVBQUEsYUFBQVcsQ0FBQSxRQUFBVCxVQUFBLENBQUFRLE1BQUEsTUFBQUMsQ0FBQSxTQUFBQSxDQUFBLFFBQUFkLEtBQUEsUUFBQUssVUFBQSxDQUFBUyxDQUFBLE9BQUFkLEtBQUEsQ0FBQUcsVUFBQSxLQUFBQSxVQUFBLGNBQUE0QyxRQUFBLENBQUEvQyxLQUFBLENBQUFRLFVBQUEsRUFBQVIsS0FBQSxDQUFBSSxRQUFBLEdBQUFHLGFBQUEsQ0FBQVAsS0FBQSxHQUFBL0MsZ0JBQUEseUJBQUFnRyxPQUFBaEQsTUFBQSxhQUFBYSxDQUFBLFFBQUFULFVBQUEsQ0FBQVEsTUFBQSxNQUFBQyxDQUFBLFNBQUFBLENBQUEsUUFBQWQsS0FBQSxRQUFBSyxVQUFBLENBQUFTLENBQUEsT0FBQWQsS0FBQSxDQUFBQyxNQUFBLEtBQUFBLE1BQUEsUUFBQTlCLE1BQUEsR0FBQTZCLEtBQUEsQ0FBQVEsVUFBQSxrQkFBQXJDLE1BQUEsQ0FBQXBCLElBQUEsUUFBQW1HLE1BQUEsR0FBQS9FLE1BQUEsQ0FBQXJCLEdBQUEsRUFBQXlELGFBQUEsQ0FBQVAsS0FBQSxZQUFBa0QsTUFBQSxnQkFBQXJFLEtBQUEsOEJBQUFzRSxhQUFBLFdBQUFBLGNBQUF6QyxRQUFBLEVBQUFmLFVBQUEsRUFBQUUsT0FBQSxnQkFBQWQsUUFBQSxLQUFBekQsUUFBQSxFQUFBa0MsTUFBQSxDQUFBa0QsUUFBQSxHQUFBZixVQUFBLEVBQUFBLFVBQUEsRUFBQUUsT0FBQSxFQUFBQSxPQUFBLG9CQUFBakMsTUFBQSxVQUFBZCxHQUFBLEdBQUEwQyxTQUFBLEdBQUF2QyxnQkFBQSxPQUFBekMsT0FBQTtBQUFBLFNBQUE0SSxtQkFBQUMsR0FBQSxFQUFBcEYsT0FBQSxFQUFBQyxNQUFBLEVBQUFvRixLQUFBLEVBQUFDLE1BQUEsRUFBQXZJLEdBQUEsRUFBQThCLEdBQUEsY0FBQTRDLElBQUEsR0FBQTJELEdBQUEsQ0FBQXJJLEdBQUEsRUFBQThCLEdBQUEsT0FBQTVCLEtBQUEsR0FBQXdFLElBQUEsQ0FBQXhFLEtBQUEsV0FBQXVELEtBQUEsSUFBQVAsTUFBQSxDQUFBTyxLQUFBLGlCQUFBaUIsSUFBQSxDQUFBSixJQUFBLElBQUFyQixPQUFBLENBQUEvQyxLQUFBLFlBQUF3RyxPQUFBLENBQUF6RCxPQUFBLENBQUEvQyxLQUFBLEVBQUFxRCxJQUFBLENBQUErRSxLQUFBLEVBQUFDLE1BQUE7QUFBQSxTQUFBQyxrQkFBQTNHLEVBQUEsNkJBQUFWLElBQUEsU0FBQXNILElBQUEsR0FBQUMsU0FBQSxhQUFBaEMsT0FBQSxXQUFBekQsT0FBQSxFQUFBQyxNQUFBLFFBQUFtRixHQUFBLEdBQUF4RyxFQUFBLENBQUE4RyxLQUFBLENBQUF4SCxJQUFBLEVBQUFzSCxJQUFBLFlBQUFILE1BQUFwSSxLQUFBLElBQUFrSSxrQkFBQSxDQUFBQyxHQUFBLEVBQUFwRixPQUFBLEVBQUFDLE1BQUEsRUFBQW9GLEtBQUEsRUFBQUMsTUFBQSxVQUFBckksS0FBQSxjQUFBcUksT0FBQXhILEdBQUEsSUFBQXFILGtCQUFBLENBQUFDLEdBQUEsRUFBQXBGLE9BQUEsRUFBQUMsTUFBQSxFQUFBb0YsS0FBQSxFQUFBQyxNQUFBLFdBQUF4SCxHQUFBLEtBQUF1SCxLQUFBLENBQUE5RCxTQUFBO0FBQUEsU0FBQW9FLGVBQUFDLEdBQUEsRUFBQS9DLENBQUEsV0FBQWdELGVBQUEsQ0FBQUQsR0FBQSxLQUFBRSxxQkFBQSxDQUFBRixHQUFBLEVBQUEvQyxDQUFBLEtBQUFrRCwyQkFBQSxDQUFBSCxHQUFBLEVBQUEvQyxDQUFBLEtBQUFtRCxnQkFBQTtBQUFBLFNBQUFBLGlCQUFBLGNBQUF4RSxTQUFBO0FBQUEsU0FBQXVFLDRCQUFBRSxDQUFBLEVBQUFDLE1BQUEsU0FBQUQsQ0FBQSxxQkFBQUEsQ0FBQSxzQkFBQUUsaUJBQUEsQ0FBQUYsQ0FBQSxFQUFBQyxNQUFBLE9BQUFFLENBQUEsR0FBQTNKLE1BQUEsQ0FBQUMsU0FBQSxDQUFBMkosUUFBQSxDQUFBdEgsSUFBQSxDQUFBa0gsQ0FBQSxFQUFBOUIsS0FBQSxhQUFBaUMsQ0FBQSxpQkFBQUgsQ0FBQSxDQUFBL0MsV0FBQSxFQUFBa0QsQ0FBQSxHQUFBSCxDQUFBLENBQUEvQyxXQUFBLENBQUFDLElBQUEsTUFBQWlELENBQUEsY0FBQUEsQ0FBQSxtQkFBQUUsS0FBQSxDQUFBQyxJQUFBLENBQUFOLENBQUEsT0FBQUcsQ0FBQSwrREFBQUksSUFBQSxDQUFBSixDQUFBLFVBQUFELGlCQUFBLENBQUFGLENBQUEsRUFBQUMsTUFBQTtBQUFBLFNBQUFDLGtCQUFBUCxHQUFBLEVBQUFhLEdBQUEsUUFBQUEsR0FBQSxZQUFBQSxHQUFBLEdBQUFiLEdBQUEsQ0FBQWhELE1BQUEsRUFBQTZELEdBQUEsR0FBQWIsR0FBQSxDQUFBaEQsTUFBQSxXQUFBQyxDQUFBLE1BQUE2RCxJQUFBLE9BQUFKLEtBQUEsQ0FBQUcsR0FBQSxHQUFBNUQsQ0FBQSxHQUFBNEQsR0FBQSxFQUFBNUQsQ0FBQSxJQUFBNkQsSUFBQSxDQUFBN0QsQ0FBQSxJQUFBK0MsR0FBQSxDQUFBL0MsQ0FBQSxVQUFBNkQsSUFBQTtBQUFBLFNBQUFaLHNCQUFBRixHQUFBLEVBQUEvQyxDQUFBLFFBQUE4RCxFQUFBLFdBQUFmLEdBQUEsZ0NBQUF6SSxNQUFBLElBQUF5SSxHQUFBLENBQUF6SSxNQUFBLENBQUFFLFFBQUEsS0FBQXVJLEdBQUEsNEJBQUFlLEVBQUEsUUFBQUMsRUFBQSxFQUFBQyxFQUFBLEVBQUFDLEVBQUEsRUFBQUMsRUFBQSxFQUFBQyxJQUFBLE9BQUFDLEVBQUEsT0FBQUMsRUFBQSxpQkFBQUosRUFBQSxJQUFBSCxFQUFBLEdBQUFBLEVBQUEsQ0FBQTVILElBQUEsQ0FBQTZHLEdBQUEsR0FBQWpFLElBQUEsUUFBQWtCLENBQUEsUUFBQXBHLE1BQUEsQ0FBQWtLLEVBQUEsTUFBQUEsRUFBQSxVQUFBTSxFQUFBLHVCQUFBQSxFQUFBLElBQUFMLEVBQUEsR0FBQUUsRUFBQSxDQUFBL0gsSUFBQSxDQUFBNEgsRUFBQSxHQUFBdEYsSUFBQSxNQUFBMkYsSUFBQSxDQUFBM0UsSUFBQSxDQUFBdUUsRUFBQSxDQUFBM0osS0FBQSxHQUFBK0osSUFBQSxDQUFBcEUsTUFBQSxLQUFBQyxDQUFBLEdBQUFvRSxFQUFBLGlCQUFBbkosR0FBQSxJQUFBb0osRUFBQSxPQUFBTCxFQUFBLEdBQUEvSSxHQUFBLHlCQUFBbUosRUFBQSxZQUFBTixFQUFBLGVBQUFJLEVBQUEsR0FBQUosRUFBQSxjQUFBbEssTUFBQSxDQUFBc0ssRUFBQSxNQUFBQSxFQUFBLDJCQUFBRyxFQUFBLFFBQUFMLEVBQUEsYUFBQUcsSUFBQTtBQUFBLFNBQUFuQixnQkFBQUQsR0FBQSxRQUFBVSxLQUFBLENBQUFhLE9BQUEsQ0FBQXZCLEdBQUEsVUFBQUEsR0FBQTtBQUR3QztBQUM4QjtBQUNGO0FBRTdELElBQU02QixrQkFBa0IsR0FBRyxTQUFyQkEsa0JBQWtCQSxDQUFBQyxJQUFBLEVBQThCO0VBQUEsSUFBekJDLFVBQVUsR0FBQUQsSUFBQSxDQUFWQyxVQUFVO0lBQUVDLE9BQU8sR0FBQUYsSUFBQSxDQUFQRSxPQUFPO0VBRW5ELElBQUFDLGFBQUEsR0FBMENQLDZFQUFZLENBQUMsS0FBSyxDQUFDO0lBQUFRLGNBQUEsR0FBQW5DLGNBQUEsQ0FBQWtDLGFBQUE7SUFBdERFLFVBQVUsR0FBQUQsY0FBQTtJQUFFRSxRQUFRLEdBQUFGLGNBQUE7SUFBRUcsU0FBUyxHQUFBSCxjQUFBO0VBRXRDLElBQUFJLFNBQUEsR0FBZ0NiLGdEQUFRLENBQUMsS0FBSyxDQUFDO0lBQUFjLFVBQUEsR0FBQXhDLGNBQUEsQ0FBQXVDLFNBQUE7SUFBeENFLFNBQVMsR0FBQUQsVUFBQTtJQUFFRSxVQUFVLEdBQUFGLFVBQUE7RUFDNUIsSUFBQUcsVUFBQSxHQUE0QmpCLGdEQUFRLENBQUMsSUFBSSxDQUFDO0lBQUFrQixVQUFBLEdBQUE1QyxjQUFBLENBQUEyQyxVQUFBO0lBQW5DRSxNQUFNLEdBQUFELFVBQUE7SUFBRUUsU0FBUyxHQUFBRixVQUFBO0VBRXhCLElBQUFHLFVBQUEsR0FBMEJyQixnREFBUSxDQUFDLEVBQUUsQ0FBQztJQUFBc0IsVUFBQSxHQUFBaEQsY0FBQSxDQUFBK0MsVUFBQTtJQUEvQnpMLEtBQUssR0FBQTBMLFVBQUE7SUFBRUMsUUFBUSxHQUFBRCxVQUFBO0VBQ3RCLElBQU1FLFlBQVksR0FBRyxTQUFmQSxZQUFZQSxDQUFHQyxDQUFDLEVBQUk7SUFDdEJBLENBQUMsQ0FBQ0MsY0FBYyxFQUFFO0lBQ2xCSCxRQUFRLENBQUNFLENBQUMsQ0FBQ0UsTUFBTSxDQUFDL0wsS0FBSyxDQUFDO0VBQzVCLENBQUM7RUFFRCxJQUFNZ00sWUFBWTtJQUFBLElBQUFDLEtBQUEsR0FBQTNELGlCQUFBLGVBQUFqSixtQkFBQSxHQUFBOEcsSUFBQSxDQUFHLFNBQUErRixRQUFNTCxDQUFDO01BQUEsT0FBQXhNLG1CQUFBLEdBQUF5QixJQUFBLFVBQUFxTCxTQUFBQyxRQUFBO1FBQUEsa0JBQUFBLFFBQUEsQ0FBQXBGLElBQUEsR0FBQW9GLFFBQUEsQ0FBQTFILElBQUE7VUFBQTtZQUN4Qm1ILENBQUMsQ0FBQ0MsY0FBYyxFQUFFO1lBQUMsS0FDaEJYLFNBQVM7Y0FBQWlCLFFBQUEsQ0FBQTFILElBQUE7Y0FBQTtZQUFBO1lBQUEsT0FBQTBILFFBQUEsQ0FBQWpJLE1BQUE7VUFBQTtZQUdaaUgsVUFBVSxDQUFDLElBQUksQ0FBQztZQUNoQkksU0FBUyxDQUFDLElBQUksQ0FBQztZQUFDWSxRQUFBLENBQUFwRixJQUFBO1lBQUFvRixRQUFBLENBQUExSCxJQUFBO1lBQUEsT0FFTjZGLGlFQUFnQixDQUFDLDJCQUEyQixHQUFDRyxVQUFVLEdBQUMsR0FBRyxHQUFDQyxPQUFPLEVBQUU7Y0FBQzBCLE9BQU8sRUFBRXJNO1lBQUssQ0FBQyxFQUFFLE1BQU0sQ0FBQztVQUFBO1lBQ3BHc00sUUFBUSxDQUFDQyxNQUFNLEVBQUU7WUFBQ0gsUUFBQSxDQUFBMUgsSUFBQTtZQUFBO1VBQUE7WUFBQTBILFFBQUEsQ0FBQXBGLElBQUE7WUFBQW9GLFFBQUEsQ0FBQUksRUFBQSxHQUFBSixRQUFBO1lBRWxCLElBQUdBLFFBQUEsQ0FBQUksRUFBQSxZQUFhbEMscURBQVEsRUFBRTtjQUN0QmtCLFNBQVMsQ0FBQ1ksUUFBQSxDQUFBSSxFQUFBLENBQUVqQixNQUFNLENBQUM7WUFDdkIsQ0FBQyxNQUFNO2NBQ0hDLFNBQVMsQ0FBQyxDQUFDLGdCQUFnQixDQUFDLENBQUM7WUFDakM7WUFDQUosVUFBVSxDQUFDLEtBQUssQ0FBQztVQUFDO1VBQUE7WUFBQSxPQUFBZ0IsUUFBQSxDQUFBakYsSUFBQTtRQUFBO01BQUEsR0FBQStFLE9BQUE7SUFBQSxDQUV6QjtJQUFBLGdCQWxCS0YsWUFBWUEsQ0FBQVMsR0FBQTtNQUFBLE9BQUFSLEtBQUEsQ0FBQXhELEtBQUEsT0FBQUQsU0FBQTtJQUFBO0VBQUEsR0FrQmpCO0VBRUQsb0JBQ0kyQiwyREFBQSxDQUFBQSx3REFBQSxRQUVRVyxVQUFVLGlCQUNOWCwyREFBQTtJQUFNeUMsUUFBUSxFQUFFWjtFQUFhLGdCQUN6QjdCLDJEQUFBO0lBQUswQyxTQUFTLEVBQUUsa0JBQWtCLElBQUl0QixNQUFNLEdBQUcsYUFBYSxHQUFFLEVBQUU7RUFBRSxnQkFDOURwQiwyREFBQTtJQUFPMkMsT0FBTyxFQUFFbkMsT0FBUTtJQUFDa0MsU0FBUyxFQUFDO0VBQWtCLEdBQUMsWUFBTyxDQUFRLGVBQ3JFMUMsMkRBQUE7SUFBVTRDLEVBQUUsRUFBRXBDLE9BQVE7SUFBQzlJLElBQUksRUFBQyxNQUFNO0lBQUNnTCxTQUFTLEVBQUMsb0JBQW9CO0lBQUM3TSxLQUFLLEVBQUVBLEtBQU07SUFBQ2dOLFFBQVEsRUFBRXBCLFlBQWE7SUFBQ3FCLFNBQVMsRUFBRTtFQUFLLEVBQUcsRUFFdkgsQ0FBQTFCLE1BQU0sYUFBTkEsTUFBTSx1QkFBTkEsTUFBTSxDQUFFYyxPQUFPLGtCQUNYbEMsMkRBQUE7SUFBSzBDLFNBQVMsRUFBQztFQUFrQixnQkFDN0IxQywyREFBQSwwQkFDSUEsMkRBQUEsYUFBS29CLE1BQU0sQ0FBQ2MsT0FBTyxDQUFNLENBQ3hCLENBRVosQ0FFSCxFQUVGbEIsU0FBUyxnQkFDTGhCLDJEQUFBO0lBQUswQyxTQUFTLEVBQUM7RUFBaUIsR0FBQyxlQUFhLENBQU0sZ0JBRXBEMUMsMkRBQUE7SUFBSzBDLFNBQVMsRUFBQztFQUEyQixnQkFDdEMxQywyREFBQTtJQUFRdEksSUFBSSxFQUFDLFFBQVE7SUFBQ3FMLE9BQU8sRUFBRWxDLFNBQVU7SUFBQzZCLFNBQVMsRUFBQyxpREFBaUQ7SUFBQ00sUUFBUSxFQUFFaEM7RUFBVSxHQUFDLFNBQU8sQ0FBUyxlQUMzSWhCLDJEQUFBO0lBQVF0SSxJQUFJLEVBQUMsUUFBUTtJQUFDZ0wsU0FBUyxFQUFDO0VBQWlDLEdBQUMsU0FBTyxDQUFTLENBRXpGLENBR1osRUFHRCxDQUFDL0IsVUFBVSxpQkFDUFgsMkRBQUE7SUFBUXRJLElBQUksRUFBQyxRQUFRO0lBQUNxTCxPQUFPLEVBQUVuQyxRQUFTO0lBQUM4QixTQUFTLEVBQUM7RUFBaUMsR0FBQyxhQUFRLENBQ2hHLENBRU47QUFFWCxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzNFdUM7QUFDaUM7QUFFbEUsSUFBTVEsa0JBQWtCLEdBQUcsU0FBckJBLGtCQUFrQkEsQ0FBQTVDLElBQUEsRUFBbUU7RUFBQSxJQUE5RHZFLElBQUksR0FBQXVFLElBQUEsQ0FBSnZFLElBQUk7SUFBRW9ILEtBQUssR0FBQTdDLElBQUEsQ0FBTDZDLEtBQUs7SUFBRUMsZ0JBQWdCLEdBQUE5QyxJQUFBLENBQWhCOEMsZ0JBQWdCO0lBQUVDLFdBQVcsR0FBQS9DLElBQUEsQ0FBWCtDLFdBQVc7SUFBRUMsWUFBWSxHQUFBaEQsSUFBQSxDQUFaZ0QsWUFBWTtFQUV4RixJQUFBeEMsU0FBQSxHQUE0QmIsZ0RBQVEsQ0FBQyxFQUFFLENBQUM7SUFBQWMsVUFBQSxHQUFBeEMsY0FBQSxDQUFBdUMsU0FBQTtJQUFqQ00sTUFBTSxHQUFBTCxVQUFBO0lBQUVNLFNBQVMsR0FBQU4sVUFBQTtFQUV4QixvQkFDSWYsMkRBQUEsQ0FBQ2lELDRFQUFrQjtJQUNmbEgsSUFBSSxFQUFFQSxJQUFLO0lBQ1hxRixNQUFNLEVBQUVBLE1BQU87SUFDZkMsU0FBUyxFQUFFQSxTQUFVO0lBQ3JCZ0MsV0FBVyxFQUFFQSxXQUFZO0lBQ3pCQyxZQUFZLEVBQUVBLFlBQWE7SUFDM0JGLGdCQUFnQixFQUFFQTtFQUFpQixHQUVsQ0QsS0FBSyxDQUNXO0FBRTdCLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ25CeUI7QUFDZ0Q7QUFDbEI7QUFDWjtBQUNtQjtBQUNFO0FBRTFELElBQU1RLE1BQU0sR0FBRyxTQUFUQSxNQUFNQSxDQUFBckQsSUFBQSxFQUE2QztFQUFBLElBQXhDc0Qsa0JBQWtCLEdBQUF0RCxJQUFBLENBQWxCc0Qsa0JBQWtCO0lBQUVDLE1BQU0sR0FBQXZELElBQUEsQ0FBTnVELE1BQU07SUFBRUMsTUFBTSxHQUFBeEQsSUFBQSxDQUFOd0QsTUFBTTtFQUV0RCxJQUFNQyxZQUFZLEdBQUcsU0FBZkEsWUFBWUEsQ0FBQSxFQUFTO0lBQ3ZCRixNQUFNLENBQUNELGtCQUFrQixDQUFDO0VBQzlCLENBQUM7RUFFRCxJQUFNSSxZQUFZLEdBQUcsU0FBZkEsWUFBWUEsQ0FBR0MscUJBQXFCLEVBQUk7SUFDMUNILE1BQU0sQ0FBQ0Ysa0JBQWtCLENBQUNoQixFQUFFLEVBQUVxQixxQkFBcUIsQ0FBQztFQUN4RCxDQUFDO0VBRUQsSUFBQXhELGFBQUEsR0FBMENQLGlGQUFZLENBQUMsS0FBSyxDQUFDO0lBQUFRLGNBQUEsR0FBQW5DLGNBQUEsQ0FBQWtDLGFBQUE7SUFBdERFLFVBQVUsR0FBQUQsY0FBQTtJQUFFRSxRQUFRLEdBQUFGLGNBQUE7SUFBRUcsU0FBUyxHQUFBSCxjQUFBO0VBRXRDLG9CQUNJViwyREFBQTtJQUFJMEMsU0FBUyxFQUFDO0VBQVMsZ0JBQ25CMUMsMkRBQUE7SUFBS2tFLEdBQUcsRUFBRU4sa0JBQWtCLENBQUNPLFVBQVUsQ0FBQ0MsT0FBTyxDQUFDQyxJQUFLO0lBQUNDLEdBQUcsRUFBQztFQUF1QixFQUFHLGVBQ3BGdEUsMkRBQUE7SUFBTTBDLFNBQVMsRUFBQztFQUFVLEdBQ3JCa0Isa0JBQWtCLENBQUNXLFFBQVEsQ0FBQ0MsRUFBRSxFQUFDLEdBQUMsZUFBQXhFLDJEQUFBLGlCQUFTNEQsa0JBQWtCLENBQUNPLFVBQVUsQ0FBQ3BJLElBQUksQ0FBVSxDQUNuRixlQUNQaUUsMkRBQUE7SUFBTTBDLFNBQVMsRUFBQztFQUFVLEdBQ3JCa0Isa0JBQWtCLENBQUNXLFFBQVEsQ0FBQ0UsRUFBRSxFQUFDLEdBQUMsZUFBQXpFLDJEQUFBLGlCQUFTNEQsa0JBQWtCLENBQUNPLFVBQVUsQ0FBQ3BJLElBQUksQ0FBVSxDQUNuRixlQUNQaUUsMkRBQUE7SUFBTTBDLFNBQVMsRUFBQztFQUFVLEdBQ3JCa0Isa0JBQWtCLENBQUNXLFFBQVEsQ0FBQ0csRUFBRSxFQUFDLEdBQUMsZUFBQTFFLDJEQUFBLGlCQUFTNEQsa0JBQWtCLENBQUNPLFVBQVUsQ0FBQ3BJLElBQUksQ0FBVSxDQUNuRixlQUNQaUUsMkRBQUE7SUFBTTBDLFNBQVMsRUFBQztFQUFVLEdBQ3JCa0Isa0JBQWtCLENBQUNXLFFBQVEsQ0FBQ0ksRUFBRSxFQUFDLEdBQUMsZUFBQTNFLDJEQUFBLGlCQUFTNEQsa0JBQWtCLENBQUNPLFVBQVUsQ0FBQ3BJLElBQUksQ0FBVSxDQUNuRixlQUNQaUUsMkRBQUEsQ0FBQzBELG9FQUFXO0lBQUNYLE9BQU8sRUFBRWdCO0VBQWEsRUFBRyxlQUN0Qy9ELDJEQUFBLENBQUN5RCxrRUFBVTtJQUFDVixPQUFPLEVBQUVuQztFQUFTLEVBQUcsZUFFakNaLDJEQUFBLENBQUN1RCwyREFBSztJQUFDcUIsTUFBTSxFQUFFakUsVUFBVztJQUFDa0UsS0FBSyxFQUFFaEUsU0FBVTtJQUFDaUUsZUFBZSxFQUFDLGtCQUFrQjtJQUFDQyxRQUFRLEVBQUU7RUFBTSxnQkFDeEYvRSwyREFBQSxDQUFDd0Qsc0RBQU07SUFBQ0ksa0JBQWtCLEVBQUVBLGtCQUFtQjtJQUFDb0IsZUFBZSxFQUFFaEIsWUFBYTtJQUFDYSxLQUFLLEVBQUVoRTtFQUFVLEVBQUcsQ0FDbkcsQ0FDUDtBQUViLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzFDdUM7QUFDd0I7QUFDUDtBQUNzQjtBQUMvQjtBQUM0QjtBQUVyRSxJQUFNd0Usd0JBQXdCLEdBQUcsU0FBM0JBLHdCQUF3QkEsQ0FBQS9FLElBQUEsRUFBOEI7RUFBQSxJQUF6QmdGLFFBQVEsR0FBQWhGLElBQUEsQ0FBUmdGLFFBQVE7SUFBRUMsU0FBUyxHQUFBakYsSUFBQSxDQUFUaUYsU0FBUztFQUV6RCxJQUFBekUsU0FBQSxHQUFrQmIsZ0RBQVEsQ0FBQyxFQUFFLENBQUM7SUFBQWMsVUFBQSxHQUFBeEMsY0FBQSxDQUFBdUMsU0FBQTtJQUF2QjBFLENBQUMsR0FBQXpFLFVBQUE7SUFBRTBFLElBQUksR0FBQTFFLFVBQUE7RUFFZCxJQUFNVSxZQUFZLEdBQUcsU0FBZkEsWUFBWUEsQ0FBR0MsQ0FBQyxFQUFJO0lBQ3RCK0QsSUFBSSxDQUFDL0QsQ0FBQyxDQUFDRSxNQUFNLENBQUMvTCxLQUFLLENBQUM7RUFDeEIsQ0FBQztFQUVELElBQUE2UCxnQkFBQSxHQUEwRFIsbUZBQWUsQ0FBQyxHQUFHLEdBQUNDLG1FQUFhLEdBQUMseUJBQXlCLEVBQUVLLENBQUMsRUFBRSxDQUFDLENBQUM7SUFBQUksaUJBQUEsR0FBQXJILGNBQUEsQ0FBQW1ILGdCQUFBO0lBQXJIRyxXQUFXLEdBQUFELGlCQUFBO0lBQUVFLGdCQUFnQixHQUFBRixpQkFBQTtJQUFFNUUsU0FBUyxHQUFBNEUsaUJBQUE7SUFBRXhNLEtBQUssR0FBQXdNLGlCQUFBO0VBR3RELG9CQUNJNUYsMkRBQUE7SUFBSzBDLFNBQVMsRUFBQztFQUFrQixnQkFDN0IxQywyREFBQTtJQUFLMEMsU0FBUyxFQUFFLCtCQUErQixJQUFJNkMsU0FBUyxHQUFHLGFBQWEsR0FBRSxFQUFFO0VBQUUsZ0JBQzlFdkYsMkRBQUE7SUFBTzJDLE9BQU8sRUFBQztFQUFHLEdBQUMsZUFBVSxDQUFRLGVBQ3JDM0MsMkRBQUE7SUFBT3RJLElBQUksRUFBQyxNQUFNO0lBQUNrTCxFQUFFLEVBQUMsR0FBRztJQUFDRixTQUFTLEVBQUMsb0JBQW9CO0lBQUNxRCxXQUFXLEVBQUMsWUFBWTtJQUFDaEssSUFBSSxFQUFDLEdBQUc7SUFBQ2xHLEtBQUssRUFBRTJQLENBQUU7SUFBQzNDLFFBQVEsRUFBRXBCLFlBQWE7SUFBQ3FCLFNBQVMsRUFBRTtFQUFLLEVBQUcsRUFFNUkwQyxDQUFDLEtBQUssRUFBRSxpQkFBSXhGLDJEQUFBLENBQUMwRCxnRUFBVztJQUFDb0IsZUFBZSxFQUFDLHNDQUFzQztJQUFDL0IsT0FBTyxFQUFFLFNBQUFBLFFBQUE7TUFBQSxPQUFNMEMsSUFBSSxDQUFDLEVBQUUsQ0FBQztJQUFBO0VBQUMsRUFBRyxFQUczRyxDQUFBSSxXQUFXLGFBQVhBLFdBQVcsdUJBQVhBLFdBQVcsQ0FBRXJLLE1BQU0sSUFBRyxDQUFDLGlCQUNuQndFLDJEQUFBLENBQUNpRix5REFBVztJQUNBSCxlQUFlLEVBQUMsb0JBQW9CO0lBQ3BDa0IsUUFBUSxFQUFFSCxXQUFZO0lBQ3RCSSxPQUFPLEVBQUVILGdCQUFpQjtJQUMxQlIsUUFBUSxFQUFFQSxRQUFTO0lBQ25CWSxNQUFNLEVBQUUsU0FBQUEsT0FBQy9CLFVBQVUsRUFBRWdDLFFBQVE7TUFBQSxvQkFDekJuRywyREFBQSxDQUFDb0cscUJBQXFCO1FBQUN6USxHQUFHLEVBQUV3TyxVQUFVLENBQUN2QixFQUFHO1FBQUN1QixVQUFVLEVBQUVBLFVBQVc7UUFBQ3FCLENBQUMsRUFBRUEsQ0FBRTtRQUFDVyxRQUFRLEVBQUVBLFFBQVM7UUFBQ2IsUUFBUSxFQUFFQTtNQUFTLEVBQUc7SUFBQTtFQUNySCxFQUVqQixDQUVILGVBQ050RiwyREFBQTtJQUFLMEMsU0FBUyxFQUFDO0VBQW1CLEdBRTFCNkMsU0FBUyxpQkFBSXZGLDJEQUFBO0lBQUswQyxTQUFTLEVBQUM7RUFBWSxHQUFFNkMsU0FBUyxDQUFPLEVBRzFEdkUsU0FBUyxpQkFBSWhCLDJEQUFBO0lBQUswQyxTQUFTLEVBQUM7RUFBaUIsR0FBQyxlQUFhLENBQU0sQ0FFbkUsQ0FDSjtBQUVkLENBQUM7QUFFRCxJQUFNMEQscUJBQXFCLEdBQUcsU0FBeEJBLHFCQUFxQkEsQ0FBQXRFLEtBQUEsRUFBNEM7RUFBQSxJQUF2Q3FDLFVBQVUsR0FBQXJDLEtBQUEsQ0FBVnFDLFVBQVU7SUFBRXFCLENBQUMsR0FBQTFELEtBQUEsQ0FBRDBELENBQUM7SUFBRUYsUUFBUSxHQUFBeEQsS0FBQSxDQUFSd0QsUUFBUTtJQUFFYSxRQUFRLEdBQUFyRSxLQUFBLENBQVJxRSxRQUFRO0VBRTdELElBQU1wSyxJQUFJLEdBQUdvSSxVQUFVLENBQUNwSSxJQUFJLENBQUNzSyxXQUFXLEVBQUUsQ0FBQ0MsS0FBSyxDQUFDZCxDQUFDLENBQUNhLFdBQVcsRUFBRSxDQUFDLENBQUNFLElBQUksQ0FBQyxVQUFVLEdBQUNmLENBQUMsQ0FBQ2EsV0FBVyxFQUFFLEdBQUMsV0FBVyxDQUFDO0VBRTlHLElBQU1HLFdBQVcsR0FBRyxTQUFkQSxXQUFXQSxDQUFHOUUsQ0FBQyxFQUFJO0lBQ3JCQSxDQUFDLENBQUNDLGNBQWMsRUFBRTtJQUNsQjJELFFBQVEsQ0FBQ25CLFVBQVUsQ0FBQztFQUN4QixDQUFDO0VBRUQsb0JBQ0luRSwyREFBQTtJQUFHMEMsU0FBUyxFQUFFLG9CQUFvQixJQUFJeUQsUUFBUSxHQUFHLFdBQVcsR0FBRSxFQUFFLENBQUU7SUFBQ00sSUFBSSxFQUFDLEdBQUc7SUFBQzFELE9BQU8sRUFBRXlELFdBQVk7SUFBQ0UsSUFBSSxFQUFDLFFBQVE7SUFBQyxpQkFBZVA7RUFBUyxnQkFDcEluRywyREFBQTtJQUFLMEMsU0FBUyxFQUFDLG1CQUFtQjtJQUFDaUUsS0FBSyxFQUFFO01BQUNDLGVBQWUsU0FBQUMsTUFBQSxDQUFTMUMsVUFBVSxDQUFDQyxPQUFPLENBQUNDLElBQUk7SUFBRztFQUFFLEVBQ3pGLGVBQ05yRSwyREFBQTtJQUFLMEMsU0FBUyxFQUFDO0VBQW9CLGdCQUMvQjFDLDJEQUFBO0lBQUs4Ryx1QkFBdUIsRUFBRTtNQUFDQyxNQUFNLEVBQUVoTDtJQUFJO0VBQUUsRUFBTyxDQUNsRCxDQUNOO0FBRVosQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0RXlCO0FBQ0E7QUFDZ0U7QUFDaEM7QUFDdUI7QUFDWDtBQUNHO0FBQ1g7QUFHOUQsSUFBTXFMLHdCQUF3QixHQUFHSix3Q0FDeEIsQ0FBQztFQUNOSyxZQUFZLEVBQUVMLHdDQUFVLEVBQUUsQ0FBQ08sU0FBUyxDQUFDLGtDQUFrQyxDQUFDLENBQUNDLFFBQVEsQ0FBQyxrQ0FBa0MsQ0FBQztFQUNySEMsVUFBVSxFQUFFVCx3Q0FBVSxFQUFFLENBQUNXLEdBQUcsQ0FBQyxHQUFHLEVBQUUscUJBQXFCLENBQUMsQ0FBQ0gsUUFBUSxDQUFDLGtDQUFrQyxDQUFDO0VBQ3JHSSxVQUFVLEVBQUVaLHdDQUFVLEVBQUUsQ0FBQ1csR0FBRyxDQUFDLEdBQUcsRUFBRSxxQkFBcUIsQ0FBQyxDQUFDSCxRQUFRLENBQUMsa0NBQWtDLENBQUM7RUFDckdLLFVBQVUsRUFBRWIsd0NBQVUsRUFBRSxDQUFDVyxHQUFHLENBQUMsR0FBRyxFQUFFLHFCQUFxQixDQUFDLENBQUNILFFBQVEsQ0FBQyxrQ0FBa0MsQ0FBQztFQUNyR00sVUFBVSxFQUFFZCx3Q0FBVSxFQUFFLENBQUNXLEdBQUcsQ0FBQyxHQUFHLEVBQUUscUJBQXFCLENBQUMsQ0FBQ0gsUUFBUSxDQUFDLGtDQUFrQztBQUN0RyxDQUFDLENBQUMsQ0FDREEsUUFBUSxFQUFFO0FBSWIsSUFBTU8sZ0NBQWdDLEdBQUcsU0FBbkNBLGdDQUFnQ0EsQ0FBR25FLGtCQUFrQixFQUFJO0VBQzNELElBQUdBLGtCQUFrQixFQUFFO0lBQ25CLE9BQU87TUFDSHlELFlBQVksRUFBRXpELGtCQUFrQixDQUFDTyxVQUFVLENBQUN2QixFQUFFO01BQzlDb0YsV0FBVyxFQUFFcEUsa0JBQWtCLENBQUNPLFVBQVUsQ0FBQ0MsT0FBTyxDQUFDQyxJQUFJO01BQ3ZENEQsY0FBYyxFQUFFckUsa0JBQWtCLENBQUNPLFVBQVUsQ0FBQ3BJLElBQUk7TUFDbEQwTCxVQUFVLEVBQUU3RCxrQkFBa0IsQ0FBQ1csUUFBUSxDQUFDQyxFQUFFO01BQzFDb0QsVUFBVSxFQUFFaEUsa0JBQWtCLENBQUNXLFFBQVEsQ0FBQ0UsRUFBRTtNQUMxQ29ELFVBQVUsRUFBRWpFLGtCQUFrQixDQUFDVyxRQUFRLENBQUNHLEVBQUU7TUFDMUNvRCxVQUFVLEVBQUVsRSxrQkFBa0IsQ0FBQ1csUUFBUSxDQUFDSTtJQUM1QyxDQUFDO0VBQ0w7RUFDQSxPQUFPO0lBQ0gwQyxZQUFZLEVBQUUsRUFBRTtJQUNoQlcsV0FBVyxFQUFFLEVBQUU7SUFDZkMsY0FBYyxFQUFFLEVBQUU7SUFDbEJSLFVBQVUsRUFBRSxFQUFFO0lBQ2RHLFVBQVUsRUFBRSxFQUFFO0lBQ2RDLFVBQVUsRUFBRSxFQUFFO0lBQ2RDLFVBQVUsRUFBRTtFQUNoQixDQUFDO0FBQ0wsQ0FBQztBQUdNLElBQU10RSxNQUFNLEdBQUcsU0FBVEEsTUFBTUEsQ0FBQWxELElBQUEsRUFBcUQ7RUFBQSxJQUFBNEgsb0JBQUEsRUFBQUMsa0JBQUEsRUFBQUMsa0JBQUEsRUFBQUMsa0JBQUEsRUFBQUMsa0JBQUE7RUFBQSxJQUFoRHpELEtBQUssR0FBQXZFLElBQUEsQ0FBTHVFLEtBQUs7SUFBRUcsZUFBZSxHQUFBMUUsSUFBQSxDQUFmMEUsZUFBZTtJQUFFcEIsa0JBQWtCLEdBQUF0RCxJQUFBLENBQWxCc0Qsa0JBQWtCO0VBRTlELElBQUEyRSxxQkFBQSxHQUE0RnRCLDhGQUFxQixDQUM3R0csd0JBQXdCLEVBQ3hCVyxnQ0FBZ0MsQ0FBQ25FLGtCQUFrQixDQUFDLENBQ3ZEO0lBSE0vQixZQUFZLEdBQUEwRyxxQkFBQSxDQUFaMUcsWUFBWTtJQUFFMkcsT0FBTyxHQUFBRCxxQkFBQSxDQUFQQyxPQUFPO0lBQUVwSCxNQUFNLEdBQUFtSCxxQkFBQSxDQUFObkgsTUFBTTtJQUFFcUgsUUFBUSxHQUFBRixxQkFBQSxDQUFSRSxRQUFRO0lBQUVqSCxRQUFRLEdBQUErRyxxQkFBQSxDQUFSL0csUUFBUTtJQUFFa0gsU0FBUyxHQUFBSCxxQkFBQSxDQUFURyxTQUFTO0lBQUVDLEtBQUssR0FBQUoscUJBQUEsQ0FBTEksS0FBSztJQUFFQyxZQUFZLEdBQUFMLHFCQUFBLENBQVpLLFlBQVk7RUFNeEYsSUFBTW5HLFFBQVEsR0FBRyxTQUFYQSxRQUFRQSxDQUFHb0csUUFBUSxFQUFJO0lBQ3pCLElBQU01RSxxQkFBcUIsR0FBRztNQUMxQnJCLEVBQUUsRUFBRXNFLDhEQUFXLENBQUMsQ0FBQyxDQUFDO01BQ2xCL0MsVUFBVSxFQUFFO1FBQ1J2QixFQUFFLEVBQUVpRyxRQUFRLENBQUN4QixZQUFZO1FBQ3pCdEwsSUFBSSxFQUFFOE0sUUFBUSxDQUFDWixjQUFjO1FBQzdCN0QsT0FBTyxFQUFFO1VBQ0xDLElBQUksRUFBRXdFLFFBQVEsQ0FBQ2I7UUFDbkI7TUFDSixDQUFDO01BQ0R6RCxRQUFRLEVBQUU7UUFDTkMsRUFBRSxFQUFFcUUsUUFBUSxDQUFDcEIsVUFBVTtRQUN2QmhELEVBQUUsRUFBRW9FLFFBQVEsQ0FBQ2pCLFVBQVU7UUFDdkJsRCxFQUFFLEVBQUVtRSxRQUFRLENBQUNoQixVQUFVO1FBQ3ZCbEQsRUFBRSxFQUFFa0UsUUFBUSxDQUFDZjtNQUNqQjtJQUNKLENBQUM7SUFDRDlDLGVBQWUsQ0FBQ2YscUJBQXFCLENBQUM7SUFDdENZLEtBQUssRUFBRTtFQUNYLENBQUM7O0VBR0Q7RUFDQSxJQUFNaUUsc0JBQXNCLEdBQUcsU0FBekJBLHNCQUFzQkEsQ0FBRzNFLFVBQVUsRUFBSTtJQUN6QzNDLFFBQVEsQ0FBQyxjQUFjLEVBQUUyQyxVQUFVLENBQUN2QixFQUFFLENBQUM7SUFDdkNwQixRQUFRLENBQUMsYUFBYSxFQUFFMkMsVUFBVSxDQUFDQyxPQUFPLENBQUNDLElBQUksQ0FBQztJQUNoRDdDLFFBQVEsQ0FBQyxnQkFBZ0IsRUFBRTJDLFVBQVUsQ0FBQ3BJLElBQUksQ0FBQztJQUMzQ2dOLG1CQUFtQixFQUFFO0VBQ3pCLENBQUM7RUFHRCxJQUFBdEksYUFBQSxHQUF3RVAsNkVBQVksQ0FBQzBELGtCQUFrQixHQUFHLEtBQUssR0FBRSxJQUFJLENBQUM7SUFBQWxELGNBQUEsR0FBQW5DLGNBQUEsQ0FBQWtDLGFBQUE7SUFBL0d1SSxvQkFBb0IsR0FBQXRJLGNBQUE7SUFBRXVJLGtCQUFrQixHQUFBdkksY0FBQTtJQUFFcUksbUJBQW1CLEdBQUFySSxjQUFBLElBQW1ELENBQUM7RUFDeEgsSUFBTXdJLG9CQUFvQixHQUFHLFNBQXZCQSxvQkFBb0JBLENBQUEsRUFBUztJQUMvQjFILFFBQVEsQ0FBQyxjQUFjLEVBQUUsRUFBRSxDQUFDO0lBQzVCQSxRQUFRLENBQUMsYUFBYSxFQUFFLEVBQUUsQ0FBQztJQUMzQkEsUUFBUSxDQUFDLGdCQUFnQixFQUFFLEVBQUUsQ0FBQztJQUM5QnlILGtCQUFrQixFQUFFO0VBQ3hCLENBQUM7RUFHRCxvQkFDSWpKLDJEQUFBO0lBQU15QyxRQUFRLEVBQUVaLFlBQVksQ0FBQ1ksUUFBUSxDQUFFO0lBQUNDLFNBQVMsRUFBQztFQUFxQyxnQkFDbkYxQywyREFBQTtJQUFJMEMsU0FBUyxFQUFDO0VBQXdCLEdBQUMsZUFBVSxDQUFLLEVBR2xEc0csb0JBQW9CLGdCQUNoQmhKLDJEQUFBLENBQUNxRixnRkFBd0I7SUFBQ0MsUUFBUSxFQUFFd0Qsc0JBQXVCO0lBQUN2RCxTQUFTLEdBQUEyQyxvQkFBQSxHQUFFOUcsTUFBTSxDQUFDaUcsWUFBWSxjQUFBYSxvQkFBQSx1QkFBbkJBLG9CQUFBLENBQXFCaUI7RUFBUSxFQUFHLGdCQUV2R25KLDJEQUFBO0lBQUswQyxTQUFTLEVBQUM7RUFBUyxnQkFDcEIxQywyREFBQTtJQUFLa0UsR0FBRyxFQUFFd0UsU0FBUyxDQUFDLGFBQWEsQ0FBRTtJQUFDcEUsR0FBRyxFQUFDO0VBQXVCLEVBQUcsZUFDbEV0RSwyREFBQTtJQUFNMEMsU0FBUyxFQUFDO0VBQWdDLEdBQzNDaUcsS0FBSyxDQUFDLFlBQVksQ0FBQyxFQUNuQixHQUFHLGVBQ0ozSSwyREFBQSxpQkFBUzBJLFNBQVMsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFVLENBQzNDLGVBQ1AxSSwyREFBQSxDQUFDeUQsOERBQVU7SUFBQ1YsT0FBTyxFQUFFbUc7RUFBcUIsRUFBRyxDQUVwRCxlQUdMbEosMkRBQUEsQ0FBQ21ILGlGQUFjO0lBQUNxQixPQUFPLEVBQUVBLE9BQVE7SUFBQ3pNLElBQUksRUFBQyxZQUFZO0lBQUMzQyxLQUFLLEdBQUErTyxrQkFBQSxHQUFFL0csTUFBTSxDQUFDcUcsVUFBVSxjQUFBVSxrQkFBQSx1QkFBakJBLGtCQUFBLENBQW1CZ0IsT0FBUTtJQUFDQyxTQUFTLEVBQUM7RUFBSyxHQUFDLG9CQUFlLENBQWlCLGVBQ3ZJcEosMkRBQUEsQ0FBQ21ILGlGQUFjO0lBQUNxQixPQUFPLEVBQUVBLE9BQVE7SUFBQ3pNLElBQUksRUFBQyxZQUFZO0lBQUMzQyxLQUFLLEdBQUFnUCxrQkFBQSxHQUFFaEgsTUFBTSxDQUFDd0csVUFBVSxjQUFBUSxrQkFBQSx1QkFBakJBLGtCQUFBLENBQW1CZSxPQUFRO0lBQUNDLFNBQVMsRUFBQyxLQUFLO0lBQUNyRCxXQUFXLEVBQUM7RUFBbUIsR0FBQyxvQkFBZSxDQUFpQixlQUN2Sy9GLDJEQUFBLENBQUNtSCxpRkFBYztJQUFDcUIsT0FBTyxFQUFFQSxPQUFRO0lBQUN6TSxJQUFJLEVBQUMsWUFBWTtJQUFDM0MsS0FBSyxHQUFBaVAsa0JBQUEsR0FBRWpILE1BQU0sQ0FBQ3lHLFVBQVUsY0FBQVEsa0JBQUEsdUJBQWpCQSxrQkFBQSxDQUFtQmMsT0FBUTtJQUFDQyxTQUFTLEVBQUM7RUFBSyxHQUFDLG9CQUFlLENBQWlCLGVBQ3ZJcEosMkRBQUEsQ0FBQ21ILGlGQUFjO0lBQUNxQixPQUFPLEVBQUVBLE9BQVE7SUFBQ3pNLElBQUksRUFBQyxZQUFZO0lBQUMzQyxLQUFLLEdBQUFrUCxrQkFBQSxHQUFFbEgsTUFBTSxDQUFDMEcsVUFBVSxjQUFBUSxrQkFBQSx1QkFBakJBLGtCQUFBLENBQW1CYSxPQUFRO0lBQUNDLFNBQVMsRUFBQztFQUFLLEdBQUMsb0JBQWUsQ0FBaUIsRUFHbkkvVCxNQUFNLENBQUM4QyxNQUFNLENBQUNpSixNQUFNLENBQUMsQ0FBQzVGLE1BQU0sR0FBRyxDQUFDLGlCQUFJd0UsMkRBQUE7SUFBSzBDLFNBQVMsRUFBQztFQUFZLEdBQUMsb0NBQWtDLENBQU0sZUFHNUcxQywyREFBQTtJQUFLMEMsU0FBUyxFQUFDO0VBQTJCLGdCQUN0QzFDLDJEQUFBO0lBQVF0SSxJQUFJLEVBQUMsUUFBUTtJQUFDZ0wsU0FBUyxFQUFDLDhCQUE4QjtJQUFDSyxPQUFPLEVBQUU4QjtFQUFNLEdBQUMsU0FBTyxDQUFTLGVBQy9GN0UsMkRBQUE7SUFBUXRJLElBQUksRUFBQyxRQUFRO0lBQUNnTCxTQUFTLEVBQUM7RUFBYyxHQUFDLFNBQU8sQ0FBUyxDQUM3RCxDQUNIO0FBR2YsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsSWtEO0FBQ21CO0FBQ0Y7QUFDaEI7QUFDTztBQUNyQjtBQUNNO0FBRXJDLElBQU02RywwQkFBMEIsR0FBRyxTQUE3QkEsMEJBQTBCQSxDQUFBakosSUFBQSxFQUFzQjtFQUFBLElBQWpCdkUsSUFBSSxHQUFBdUUsSUFBQSxDQUFKdkUsSUFBSTtJQUFFbEcsS0FBSyxHQUFBeUssSUFBQSxDQUFMekssS0FBSztFQUVuRCxJQUFBNEssYUFBQSxHQUEwQ1AsNkVBQVksQ0FBQyxLQUFLLENBQUM7SUFBQVEsY0FBQSxHQUFBbkMsY0FBQSxDQUFBa0MsYUFBQTtJQUF0REUsVUFBVSxHQUFBRCxjQUFBO0lBQUVFLFFBQVEsR0FBQUYsY0FBQTtJQUFFRyxTQUFTLEdBQUFILGNBQUE7O0VBRXRDO0VBQ0EsSUFBQUksU0FBQSxHQUEwRGIsZ0RBQVEsQ0FBQyxFQUFFLENBQUM7SUFBQWMsVUFBQSxHQUFBeEMsY0FBQSxDQUFBdUMsU0FBQTtJQUEvRDBJLHFCQUFxQixHQUFBekksVUFBQTtJQUFFMEksd0JBQXdCLEdBQUExSSxVQUFBO0VBQ3REc0ksaURBQVMsQ0FBQyxZQUFNO0lBQ1osSUFBR3hULEtBQUssRUFBRTtNQUNONFQsd0JBQXdCLENBQ3BCQyxJQUFJLENBQUNDLEtBQUssQ0FBQzlULEtBQUssQ0FBQyxDQUNwQjtJQUNMO0VBQ0osQ0FBQyxFQUFFLEVBQUUsQ0FBQzs7RUFFTjtFQUNBLElBQUFxTCxVQUFBLEdBQXNFakIsZ0RBQVEsQ0FBQyxFQUFFLENBQUM7SUFBQWtCLFVBQUEsR0FBQTVDLGNBQUEsQ0FBQTJDLFVBQUE7SUFBM0UwSSwyQkFBMkIsR0FBQXpJLFVBQUE7SUFBRTBJLDhCQUE4QixHQUFBMUksVUFBQTtFQUNsRWtJLGlEQUFTLENBQUMsWUFBTTtJQUNaLElBQUdHLHFCQUFxQixDQUFDaE8sTUFBTSxHQUFHLENBQUMsRUFBRTtNQUNqQ3FPLDhCQUE4QixDQUFDLEVBQUUsQ0FBQztJQUN0QyxDQUFDLE1BQU07TUFDSEEsOEJBQThCLENBQzFCSCxJQUFJLENBQUNJLFNBQVMsQ0FBQ04scUJBQXFCLENBQUMsQ0FDeEM7SUFDTDtFQUNKLENBQUMsRUFBRSxDQUFDQSxxQkFBcUIsQ0FBQyxDQUFDO0VBRzNCLElBQU1PLHFCQUFxQixHQUFHLFNBQXhCQSxxQkFBcUJBLENBQUduRyxrQkFBa0IsRUFBSTtJQUNoRDZGLHdCQUF3QixDQUFDLFVBQUFELHFCQUFxQjtNQUFBLFVBQUEzQyxNQUFBLENBQUFtRCxrQkFBQSxDQUN2Q1IscUJBQXFCLElBQ3hCNUYsa0JBQWtCO0lBQUEsQ0FDcEIsQ0FBQztFQUNQLENBQUM7RUFFRCxJQUFNcUcsd0JBQXdCLEdBQUcsU0FBM0JBLHdCQUF3QkEsQ0FBR3JHLGtCQUFrQixFQUFJO0lBQ25ENkYsd0JBQXdCLENBQUMsVUFBQUQscUJBQXFCO01BQUEsT0FDMUNBLHFCQUFxQixDQUFDVSxNQUFNLENBQUMsVUFBQXpPLENBQUM7UUFBQSxPQUFJQSxDQUFDLENBQUNtSCxFQUFFLEtBQUtnQixrQkFBa0IsQ0FBQ2hCLEVBQUU7TUFBQSxFQUFDO0lBQUEsQ0FDcEUsQ0FBQztFQUNOLENBQUM7RUFFRCxJQUFNdUgsd0JBQXdCLEdBQUcsU0FBM0JBLHdCQUF3QkEsQ0FBSXZILEVBQUUsRUFBRWdCLGtCQUFrQixFQUFLO0lBQ3pENkYsd0JBQXdCLENBQUMsVUFBQUQscUJBQXFCO01BQUEsT0FDMUNBLHFCQUFxQixDQUFDWSxHQUFHLENBQUMsVUFBQTNPLENBQUM7UUFBQSxPQUFJQSxDQUFDLENBQUNtSCxFQUFFLEtBQUtBLEVBQUUsR0FBR2dCLGtCQUFrQixHQUFFbkksQ0FBQztNQUFBLEVBQUM7SUFBQSxDQUN0RSxDQUFDO0VBQ04sQ0FBQztFQUlELG9CQUNJdUUsMkRBQUE7SUFBSzBDLFNBQVMsRUFBQztFQUFrQixnQkFDN0IxQywyREFBQSxnQkFBTyxrQkFBYSxDQUFRLGVBQzVCQSwyREFBQTtJQUFLMEMsU0FBUyxFQUFDO0VBQW1CLEdBRTFCOEcscUJBQXFCLENBQUNZLEdBQUcsQ0FBQyxVQUFBeEcsa0JBQWtCO0lBQUEsb0JBQ3hDNUQsMkRBQUEsQ0FBQzJELGdEQUFNO01BQ0hoTyxHQUFHLEVBQUVpTyxrQkFBa0IsQ0FBQ2hCLEVBQUc7TUFDM0JnQixrQkFBa0IsRUFBRUEsa0JBQW1CO01BQ3ZDQyxNQUFNLEVBQUVvRyx3QkFBeUI7TUFDakNuRyxNQUFNLEVBQUVxRztJQUF5QixFQUNuQztFQUFBLENBQ0wsQ0FBQyxDQUVKLGVBQ05uSywyREFBQSwyQkFDSUEsMkRBQUEsQ0FBQ3NKLDhEQUFVO0lBQUM1RyxTQUFTLEVBQUMsa0JBQWtCO0lBQUNLLE9BQU8sRUFBRW5DO0VBQVMsRUFBRyxDQUM1RCxlQUNOWiwyREFBQSxDQUFDdUQsdURBQUs7SUFBQ3FCLE1BQU0sRUFBRWpFLFVBQVc7SUFBQ2tFLEtBQUssRUFBRWhFLFNBQVU7SUFBQ2tFLFFBQVEsRUFBRSxLQUFNO0lBQUNELGVBQWUsRUFBQztFQUFrQixnQkFDNUY5RSwyREFBQSxDQUFDd0Qsc0RBQU07SUFDSHdCLGVBQWUsRUFBRStFLHFCQUFzQjtJQUN2Q2xGLEtBQUssRUFBRWhFO0VBQVUsRUFDbkIsQ0FDRSxlQUNSYiwyREFBQTtJQUFPdEksSUFBSSxFQUFDLFFBQVE7SUFBQ3FFLElBQUksRUFBRUEsSUFBSztJQUFDbEcsS0FBSyxFQUFFK1Q7RUFBNEIsRUFBRyxDQUNyRTtBQUVkLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbkZ5QjtBQUNtQztBQUNxQjtBQUNyQjtBQUNGO0FBQ1A7QUFDa0I7QUFDUjtBQUV2RCxJQUFNWSxrQkFBa0IsR0FBRyxTQUFyQkEsa0JBQWtCQSxDQUFBbEssSUFBQSxFQUErRTtFQUFBLElBQTFFbUssU0FBUyxHQUFBbkssSUFBQSxDQUFUbUssU0FBUztJQUFFNUcsTUFBTSxHQUFBdkQsSUFBQSxDQUFOdUQsTUFBTTtJQUFFQyxNQUFNLEdBQUF4RCxJQUFBLENBQU53RCxNQUFNO0lBQUU0RyxnQkFBZ0IsR0FBQXBLLElBQUEsQ0FBaEJvSyxnQkFBZ0I7SUFBRUMsU0FBUyxHQUFBckssSUFBQSxDQUFUcUssU0FBUztJQUFFQyxZQUFZLEdBQUF0SyxJQUFBLENBQVpzSyxZQUFZO0VBRXBHLElBQU03RyxZQUFZLEdBQUcsU0FBZkEsWUFBWUEsQ0FBQSxFQUFTO0lBQ3ZCRixNQUFNLENBQUM0RyxTQUFTLENBQUM7RUFDckIsQ0FBQztFQUVELElBQU16RyxZQUFZLEdBQUcsU0FBZkEsWUFBWUEsQ0FBSTZFLFFBQVEsRUFBSztJQUMvQi9FLE1BQU0sQ0FBQzJHLFNBQVMsQ0FBQ0ksU0FBUyxFQUFFaEMsUUFBUSxDQUFDO0VBQ3pDLENBQUM7RUFFRCxJQUFBcEksYUFBQSxHQUEwQ1AsNkVBQVksQ0FBQyxLQUFLLENBQUM7SUFBQVEsY0FBQSxHQUFBbkMsY0FBQSxDQUFBa0MsYUFBQTtJQUF0REUsVUFBVSxHQUFBRCxjQUFBO0lBQUVFLFFBQVEsR0FBQUYsY0FBQTtJQUFFRyxTQUFTLEdBQUFILGNBQUE7RUFFdEMsSUFBTThGLFdBQVcsR0FBRyxTQUFkQSxXQUFXQSxDQUFHOUUsQ0FBQyxFQUFJO0lBQ3JCQSxDQUFDLENBQUNDLGNBQWMsRUFBRTtJQUNsQmlKLFlBQVksQ0FBQ0gsU0FBUyxDQUFDO0VBQzNCLENBQUM7RUFFRCxvQkFDSXpLLDJEQUFBLENBQUFBLHdEQUFBLHFCQUNJQSwyREFBQTtJQUFLMEMsU0FBUyxFQUFFLHdDQUF3QyxJQUFJK0gsU0FBUyxDQUFDSyxJQUFJLEdBQUcsU0FBUyxHQUFFLEVBQUUsQ0FBRTtJQUFDL0gsT0FBTyxFQUFFeUQsV0FBWTtJQUFDdUUsS0FBSyxFQUFFTixTQUFTLENBQUNLLElBQUksR0FBRyx5QkFBeUIsR0FBRTtFQUF3QyxnQkFDMU05SywyREFBQSxDQUFDMEQsZ0VBQVc7SUFBQ2hCLFNBQVMsRUFBQywwQkFBMEI7SUFBQ0ssT0FBTyxFQUFFZ0I7RUFBYSxFQUFHLGVBQzNFL0QsMkRBQUEsQ0FBQ3lELDhEQUFVO0lBQUNmLFNBQVMsRUFBQywrQkFBK0I7SUFBQ0ssT0FBTyxFQUFFbkM7RUFBUyxFQUFHLEVBR3ZFNkosU0FBUyxDQUFDSyxJQUFJLGlCQUNWOUssMkRBQUE7SUFBSzBDLFNBQVMsRUFBQztFQUFnQixnQkFDM0IxQywyREFBQTtJQUFLMEMsU0FBUyxFQUFDO0VBQXlCLEdBQUMseUJBQXVCLENBQU0sQ0FFN0UsZUFHTDFDLDJEQUFBLENBQUNxSyxxRkFBZ0I7SUFBQ2xILEtBQUssRUFBQyxrQkFBZTtJQUFDdE4sS0FBSyxFQUFFNFUsU0FBUyxDQUFDSTtFQUFVLEVBQUcsZUFDdEU3SywyREFBQSxDQUFDcUsscUZBQWdCO0lBQUNsSCxLQUFLLEVBQUMsbUJBQWE7SUFBQ3ROLEtBQUssRUFBRTRVLFNBQVMsQ0FBQ087RUFBVyxFQUFHLGVBQ3JFaEwsMkRBQUEsQ0FBQ3FLLHFGQUFnQjtJQUFDbEgsS0FBSyxFQUFDLFVBQVU7SUFBQ3ROLEtBQUssRUFBRTRVLFNBQVMsQ0FBQ1E7RUFBUSxFQUFHLGVBRS9EakwsMkRBQUEsQ0FBQ3FLLHFGQUFnQjtJQUFDbEgsS0FBSyxFQUFDLFlBQVk7SUFBQ3ROLEtBQUssRUFBRTRVLFNBQVMsQ0FBQ1MsT0FBUTtJQUFDQyxJQUFJLEVBQUM7RUFBSSxFQUFHLGVBQzNFbkwsMkRBQUEsQ0FBQ3FLLHFGQUFnQjtJQUFDbEgsS0FBSyxFQUFDLFlBQVk7SUFBQ3ROLEtBQUssRUFBRTRVLFNBQVMsQ0FBQ1csT0FBUTtJQUFDRCxJQUFJLEVBQUM7RUFBSSxFQUFHLGVBQzNFbkwsMkRBQUEsQ0FBQ3FLLHFGQUFnQjtJQUFDbEgsS0FBSyxFQUFDLFlBQVk7SUFBQ3ROLEtBQUssRUFBRTRVLFNBQVMsQ0FBQ1ksT0FBUTtJQUFDRixJQUFJLEVBQUM7RUFBSSxFQUFHLGVBQzNFbkwsMkRBQUEsQ0FBQ3FLLHFGQUFnQjtJQUFDbEgsS0FBSyxFQUFDLFlBQVk7SUFBQ3ROLEtBQUssRUFBRTRVLFNBQVMsQ0FBQ2EsT0FBUTtJQUFDSCxJQUFJLEVBQUM7RUFBSSxFQUFHLGVBRTNFbkwsMkRBQUEsQ0FBQ3FLLHFGQUFnQjtJQUFDbEgsS0FBSyxFQUFDLGtCQUFrQjtJQUFDdE4sS0FBSyxFQUFFeVUsb0VBQWEsQ0FBQ0csU0FBUyxDQUFDYyxlQUFlO0VBQUUsRUFBRyxlQUM5RnZMLDJEQUFBLENBQUNxSyxxRkFBZ0I7SUFBQ2xILEtBQUssRUFBQyxlQUFlO0lBQUN0TixLQUFLLEVBQUV5VSxvRUFBYSxDQUFDRyxTQUFTLENBQUNlLGVBQWU7RUFBRSxFQUFHLGVBQzNGeEwsMkRBQUEsQ0FBQ3FLLHFGQUFnQjtJQUFDbEgsS0FBSyxFQUFDLFdBQVc7SUFBQ3ROLEtBQUssRUFBRTRVLFNBQVMsQ0FBQ2dCO0VBQU8sRUFBRyxlQUMvRHpMLDJEQUFBLENBQUNxSyxxRkFBZ0I7SUFBQ2xILEtBQUssRUFBQyxpQkFBaUI7SUFBQ3ROLEtBQUssRUFDM0M0VSxTQUFTLENBQUNpQixTQUFTLEdBQUdwQixvRUFBYSxDQUFDRyxTQUFTLENBQUNpQixTQUFTLENBQUMsR0FBRTtFQUM3RCxFQUFHLGVBQ0oxTCwyREFBQSxDQUFDcUsscUZBQWdCO0lBQUNsSCxLQUFLLEVBQUMsNENBQXNDO0lBQUN0TixLQUFLLEVBQ2hFNFUsU0FBUyxDQUFDa0IsV0FBVyxHQUFHckIsb0VBQWEsQ0FBQ0csU0FBUyxDQUFDa0IsV0FBVyxDQUFDLEdBQUU7RUFDakUsRUFBRyxlQUNKM0wsMkRBQUEsQ0FBQ3FLLHFGQUFnQjtJQUFDbEgsS0FBSyxFQUFDLE9BQU87SUFBQ3ROLEtBQUssRUFBRTRVLFNBQVMsQ0FBQ21CO0VBQU0sRUFBRyxDQUN4RCxlQUNONUwsMkRBQUEsQ0FBQ3VELHVEQUFLO0lBQUNxQixNQUFNLEVBQUVqRSxVQUFXO0lBQUNrRSxLQUFLLEVBQUVoRSxTQUFVO0lBQUNrRSxRQUFRLEVBQUUsS0FBTTtJQUFDRCxlQUFlLEVBQUM7RUFBa0IsZ0JBQzVGOUUsMkRBQUEsQ0FBQ3VLLHdFQUFvQjtJQUFDdkYsZUFBZSxFQUFFaEIsWUFBYTtJQUFDYSxLQUFLLEVBQUVoRSxTQUFVO0lBQUM0SixTQUFTLEVBQUVBLFNBQVU7SUFBQ0MsZ0JBQWdCLEVBQUVBLGdCQUFpQjtJQUFDQyxTQUFTLEVBQUVBO0VBQVUsRUFBRyxDQUNySixDQUNUO0FBRVgsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsrQ0NoRUQscUpBQUF6VixtQkFBQSxZQUFBQSxvQkFBQSxXQUFBQyxPQUFBLFNBQUFBLE9BQUEsT0FBQUMsRUFBQSxHQUFBQyxNQUFBLENBQUFDLFNBQUEsRUFBQUMsTUFBQSxHQUFBSCxFQUFBLENBQUFJLGNBQUEsRUFBQUMsY0FBQSxHQUFBSixNQUFBLENBQUFJLGNBQUEsY0FBQUMsR0FBQSxFQUFBQyxHQUFBLEVBQUFDLElBQUEsSUFBQUYsR0FBQSxDQUFBQyxHQUFBLElBQUFDLElBQUEsQ0FBQUMsS0FBQSxLQUFBQyxPQUFBLHdCQUFBQyxNQUFBLEdBQUFBLE1BQUEsT0FBQUMsY0FBQSxHQUFBRixPQUFBLENBQUFHLFFBQUEsa0JBQUFDLG1CQUFBLEdBQUFKLE9BQUEsQ0FBQUssYUFBQSx1QkFBQUMsaUJBQUEsR0FBQU4sT0FBQSxDQUFBTyxXQUFBLDhCQUFBQyxPQUFBWixHQUFBLEVBQUFDLEdBQUEsRUFBQUUsS0FBQSxXQUFBUixNQUFBLENBQUFJLGNBQUEsQ0FBQUMsR0FBQSxFQUFBQyxHQUFBLElBQUFFLEtBQUEsRUFBQUEsS0FBQSxFQUFBVSxVQUFBLE1BQUFDLFlBQUEsTUFBQUMsUUFBQSxTQUFBZixHQUFBLENBQUFDLEdBQUEsV0FBQVcsTUFBQSxtQkFBQUksR0FBQSxJQUFBSixNQUFBLFlBQUFBLE9BQUFaLEdBQUEsRUFBQUMsR0FBQSxFQUFBRSxLQUFBLFdBQUFILEdBQUEsQ0FBQUMsR0FBQSxJQUFBRSxLQUFBLGdCQUFBYyxLQUFBQyxPQUFBLEVBQUFDLE9BQUEsRUFBQUMsSUFBQSxFQUFBQyxXQUFBLFFBQUFDLGNBQUEsR0FBQUgsT0FBQSxJQUFBQSxPQUFBLENBQUF2QixTQUFBLFlBQUEyQixTQUFBLEdBQUFKLE9BQUEsR0FBQUksU0FBQSxFQUFBQyxTQUFBLEdBQUE3QixNQUFBLENBQUE4QixNQUFBLENBQUFILGNBQUEsQ0FBQTFCLFNBQUEsR0FBQThCLE9BQUEsT0FBQUMsT0FBQSxDQUFBTixXQUFBLGdCQUFBdEIsY0FBQSxDQUFBeUIsU0FBQSxlQUFBckIsS0FBQSxFQUFBeUIsZ0JBQUEsQ0FBQVYsT0FBQSxFQUFBRSxJQUFBLEVBQUFNLE9BQUEsTUFBQUYsU0FBQSxhQUFBSyxTQUFBQyxFQUFBLEVBQUE5QixHQUFBLEVBQUErQixHQUFBLG1CQUFBQyxJQUFBLFlBQUFELEdBQUEsRUFBQUQsRUFBQSxDQUFBRyxJQUFBLENBQUFqQyxHQUFBLEVBQUErQixHQUFBLGNBQUFmLEdBQUEsYUFBQWdCLElBQUEsV0FBQUQsR0FBQSxFQUFBZixHQUFBLFFBQUF2QixPQUFBLENBQUF3QixJQUFBLEdBQUFBLElBQUEsTUFBQWlCLGdCQUFBLGdCQUFBWCxVQUFBLGNBQUFZLGtCQUFBLGNBQUFDLDJCQUFBLFNBQUFDLGlCQUFBLE9BQUF6QixNQUFBLENBQUF5QixpQkFBQSxFQUFBL0IsY0FBQSxxQ0FBQWdDLFFBQUEsR0FBQTNDLE1BQUEsQ0FBQTRDLGNBQUEsRUFBQUMsdUJBQUEsR0FBQUYsUUFBQSxJQUFBQSxRQUFBLENBQUFBLFFBQUEsQ0FBQUcsTUFBQSxRQUFBRCx1QkFBQSxJQUFBQSx1QkFBQSxLQUFBOUMsRUFBQSxJQUFBRyxNQUFBLENBQUFvQyxJQUFBLENBQUFPLHVCQUFBLEVBQUFsQyxjQUFBLE1BQUErQixpQkFBQSxHQUFBRyx1QkFBQSxPQUFBRSxFQUFBLEdBQUFOLDBCQUFBLENBQUF4QyxTQUFBLEdBQUEyQixTQUFBLENBQUEzQixTQUFBLEdBQUFELE1BQUEsQ0FBQThCLE1BQUEsQ0FBQVksaUJBQUEsWUFBQU0sc0JBQUEvQyxTQUFBLGdDQUFBZ0QsT0FBQSxXQUFBQyxNQUFBLElBQUFqQyxNQUFBLENBQUFoQixTQUFBLEVBQUFpRCxNQUFBLFlBQUFkLEdBQUEsZ0JBQUFlLE9BQUEsQ0FBQUQsTUFBQSxFQUFBZCxHQUFBLHNCQUFBZ0IsY0FBQXZCLFNBQUEsRUFBQXdCLFdBQUEsYUFBQUMsT0FBQUosTUFBQSxFQUFBZCxHQUFBLEVBQUFtQixPQUFBLEVBQUFDLE1BQUEsUUFBQUMsTUFBQSxHQUFBdkIsUUFBQSxDQUFBTCxTQUFBLENBQUFxQixNQUFBLEdBQUFyQixTQUFBLEVBQUFPLEdBQUEsbUJBQUFxQixNQUFBLENBQUFwQixJQUFBLFFBQUFxQixNQUFBLEdBQUFELE1BQUEsQ0FBQXJCLEdBQUEsRUFBQTVCLEtBQUEsR0FBQWtELE1BQUEsQ0FBQWxELEtBQUEsU0FBQUEsS0FBQSxnQkFBQW1ELE9BQUEsQ0FBQW5ELEtBQUEsS0FBQU4sTUFBQSxDQUFBb0MsSUFBQSxDQUFBOUIsS0FBQSxlQUFBNkMsV0FBQSxDQUFBRSxPQUFBLENBQUEvQyxLQUFBLENBQUFvRCxPQUFBLEVBQUFDLElBQUEsV0FBQXJELEtBQUEsSUFBQThDLE1BQUEsU0FBQTlDLEtBQUEsRUFBQStDLE9BQUEsRUFBQUMsTUFBQSxnQkFBQW5DLEdBQUEsSUFBQWlDLE1BQUEsVUFBQWpDLEdBQUEsRUFBQWtDLE9BQUEsRUFBQUMsTUFBQSxRQUFBSCxXQUFBLENBQUFFLE9BQUEsQ0FBQS9DLEtBQUEsRUFBQXFELElBQUEsV0FBQUMsU0FBQSxJQUFBSixNQUFBLENBQUFsRCxLQUFBLEdBQUFzRCxTQUFBLEVBQUFQLE9BQUEsQ0FBQUcsTUFBQSxnQkFBQUssS0FBQSxXQUFBVCxNQUFBLFVBQUFTLEtBQUEsRUFBQVIsT0FBQSxFQUFBQyxNQUFBLFNBQUFBLE1BQUEsQ0FBQUMsTUFBQSxDQUFBckIsR0FBQSxTQUFBNEIsZUFBQSxFQUFBNUQsY0FBQSxvQkFBQUksS0FBQSxXQUFBQSxNQUFBMEMsTUFBQSxFQUFBZCxHQUFBLGFBQUE2QiwyQkFBQSxlQUFBWixXQUFBLFdBQUFFLE9BQUEsRUFBQUMsTUFBQSxJQUFBRixNQUFBLENBQUFKLE1BQUEsRUFBQWQsR0FBQSxFQUFBbUIsT0FBQSxFQUFBQyxNQUFBLGdCQUFBUSxlQUFBLEdBQUFBLGVBQUEsR0FBQUEsZUFBQSxDQUFBSCxJQUFBLENBQUFJLDBCQUFBLEVBQUFBLDBCQUFBLElBQUFBLDBCQUFBLHFCQUFBaEMsaUJBQUFWLE9BQUEsRUFBQUUsSUFBQSxFQUFBTSxPQUFBLFFBQUFtQyxLQUFBLHNDQUFBaEIsTUFBQSxFQUFBZCxHQUFBLHdCQUFBOEIsS0FBQSxZQUFBQyxLQUFBLHNEQUFBRCxLQUFBLG9CQUFBaEIsTUFBQSxRQUFBZCxHQUFBLFNBQUFnQyxVQUFBLFdBQUFyQyxPQUFBLENBQUFtQixNQUFBLEdBQUFBLE1BQUEsRUFBQW5CLE9BQUEsQ0FBQUssR0FBQSxHQUFBQSxHQUFBLFVBQUFpQyxRQUFBLEdBQUF0QyxPQUFBLENBQUFzQyxRQUFBLE1BQUFBLFFBQUEsUUFBQUMsY0FBQSxHQUFBQyxtQkFBQSxDQUFBRixRQUFBLEVBQUF0QyxPQUFBLE9BQUF1QyxjQUFBLFFBQUFBLGNBQUEsS0FBQS9CLGdCQUFBLG1CQUFBK0IsY0FBQSxxQkFBQXZDLE9BQUEsQ0FBQW1CLE1BQUEsRUFBQW5CLE9BQUEsQ0FBQXlDLElBQUEsR0FBQXpDLE9BQUEsQ0FBQTBDLEtBQUEsR0FBQTFDLE9BQUEsQ0FBQUssR0FBQSxzQkFBQUwsT0FBQSxDQUFBbUIsTUFBQSw2QkFBQWdCLEtBQUEsUUFBQUEsS0FBQSxnQkFBQW5DLE9BQUEsQ0FBQUssR0FBQSxFQUFBTCxPQUFBLENBQUEyQyxpQkFBQSxDQUFBM0MsT0FBQSxDQUFBSyxHQUFBLHVCQUFBTCxPQUFBLENBQUFtQixNQUFBLElBQUFuQixPQUFBLENBQUE0QyxNQUFBLFdBQUE1QyxPQUFBLENBQUFLLEdBQUEsR0FBQThCLEtBQUEsb0JBQUFULE1BQUEsR0FBQXZCLFFBQUEsQ0FBQVgsT0FBQSxFQUFBRSxJQUFBLEVBQUFNLE9BQUEsb0JBQUEwQixNQUFBLENBQUFwQixJQUFBLFFBQUE2QixLQUFBLEdBQUFuQyxPQUFBLENBQUE2QyxJQUFBLG1DQUFBbkIsTUFBQSxDQUFBckIsR0FBQSxLQUFBRyxnQkFBQSxxQkFBQS9CLEtBQUEsRUFBQWlELE1BQUEsQ0FBQXJCLEdBQUEsRUFBQXdDLElBQUEsRUFBQTdDLE9BQUEsQ0FBQTZDLElBQUEsa0JBQUFuQixNQUFBLENBQUFwQixJQUFBLEtBQUE2QixLQUFBLGdCQUFBbkMsT0FBQSxDQUFBbUIsTUFBQSxZQUFBbkIsT0FBQSxDQUFBSyxHQUFBLEdBQUFxQixNQUFBLENBQUFyQixHQUFBLG1CQUFBbUMsb0JBQUFGLFFBQUEsRUFBQXRDLE9BQUEsUUFBQThDLFVBQUEsR0FBQTlDLE9BQUEsQ0FBQW1CLE1BQUEsRUFBQUEsTUFBQSxHQUFBbUIsUUFBQSxDQUFBekQsUUFBQSxDQUFBaUUsVUFBQSxPQUFBQyxTQUFBLEtBQUE1QixNQUFBLFNBQUFuQixPQUFBLENBQUFzQyxRQUFBLHFCQUFBUSxVQUFBLElBQUFSLFFBQUEsQ0FBQXpELFFBQUEsZUFBQW1CLE9BQUEsQ0FBQW1CLE1BQUEsYUFBQW5CLE9BQUEsQ0FBQUssR0FBQSxHQUFBMEMsU0FBQSxFQUFBUCxtQkFBQSxDQUFBRixRQUFBLEVBQUF0QyxPQUFBLGVBQUFBLE9BQUEsQ0FBQW1CLE1BQUEsa0JBQUEyQixVQUFBLEtBQUE5QyxPQUFBLENBQUFtQixNQUFBLFlBQUFuQixPQUFBLENBQUFLLEdBQUEsT0FBQTJDLFNBQUEsdUNBQUFGLFVBQUEsaUJBQUF0QyxnQkFBQSxNQUFBa0IsTUFBQSxHQUFBdkIsUUFBQSxDQUFBZ0IsTUFBQSxFQUFBbUIsUUFBQSxDQUFBekQsUUFBQSxFQUFBbUIsT0FBQSxDQUFBSyxHQUFBLG1CQUFBcUIsTUFBQSxDQUFBcEIsSUFBQSxTQUFBTixPQUFBLENBQUFtQixNQUFBLFlBQUFuQixPQUFBLENBQUFLLEdBQUEsR0FBQXFCLE1BQUEsQ0FBQXJCLEdBQUEsRUFBQUwsT0FBQSxDQUFBc0MsUUFBQSxTQUFBOUIsZ0JBQUEsTUFBQXlDLElBQUEsR0FBQXZCLE1BQUEsQ0FBQXJCLEdBQUEsU0FBQTRDLElBQUEsR0FBQUEsSUFBQSxDQUFBSixJQUFBLElBQUE3QyxPQUFBLENBQUFzQyxRQUFBLENBQUFZLFVBQUEsSUFBQUQsSUFBQSxDQUFBeEUsS0FBQSxFQUFBdUIsT0FBQSxDQUFBbUQsSUFBQSxHQUFBYixRQUFBLENBQUFjLE9BQUEsZUFBQXBELE9BQUEsQ0FBQW1CLE1BQUEsS0FBQW5CLE9BQUEsQ0FBQW1CLE1BQUEsV0FBQW5CLE9BQUEsQ0FBQUssR0FBQSxHQUFBMEMsU0FBQSxHQUFBL0MsT0FBQSxDQUFBc0MsUUFBQSxTQUFBOUIsZ0JBQUEsSUFBQXlDLElBQUEsSUFBQWpELE9BQUEsQ0FBQW1CLE1BQUEsWUFBQW5CLE9BQUEsQ0FBQUssR0FBQSxPQUFBMkMsU0FBQSxzQ0FBQWhELE9BQUEsQ0FBQXNDLFFBQUEsU0FBQTlCLGdCQUFBLGNBQUE2QyxhQUFBQyxJQUFBLFFBQUFDLEtBQUEsS0FBQUMsTUFBQSxFQUFBRixJQUFBLFlBQUFBLElBQUEsS0FBQUMsS0FBQSxDQUFBRSxRQUFBLEdBQUFILElBQUEsV0FBQUEsSUFBQSxLQUFBQyxLQUFBLENBQUFHLFVBQUEsR0FBQUosSUFBQSxLQUFBQyxLQUFBLENBQUFJLFFBQUEsR0FBQUwsSUFBQSxXQUFBTSxVQUFBLENBQUFDLElBQUEsQ0FBQU4sS0FBQSxjQUFBTyxjQUFBUCxLQUFBLFFBQUE3QixNQUFBLEdBQUE2QixLQUFBLENBQUFRLFVBQUEsUUFBQXJDLE1BQUEsQ0FBQXBCLElBQUEsb0JBQUFvQixNQUFBLENBQUFyQixHQUFBLEVBQUFrRCxLQUFBLENBQUFRLFVBQUEsR0FBQXJDLE1BQUEsYUFBQXpCLFFBQUFOLFdBQUEsU0FBQWlFLFVBQUEsTUFBQUosTUFBQSxhQUFBN0QsV0FBQSxDQUFBdUIsT0FBQSxDQUFBbUMsWUFBQSxjQUFBVyxLQUFBLGlCQUFBakQsT0FBQWtELFFBQUEsUUFBQUEsUUFBQSxRQUFBQyxjQUFBLEdBQUFELFFBQUEsQ0FBQXJGLGNBQUEsT0FBQXNGLGNBQUEsU0FBQUEsY0FBQSxDQUFBM0QsSUFBQSxDQUFBMEQsUUFBQSw0QkFBQUEsUUFBQSxDQUFBZCxJQUFBLFNBQUFjLFFBQUEsT0FBQUUsS0FBQSxDQUFBRixRQUFBLENBQUFHLE1BQUEsU0FBQUMsQ0FBQSxPQUFBbEIsSUFBQSxZQUFBQSxLQUFBLGFBQUFrQixDQUFBLEdBQUFKLFFBQUEsQ0FBQUcsTUFBQSxPQUFBakcsTUFBQSxDQUFBb0MsSUFBQSxDQUFBMEQsUUFBQSxFQUFBSSxDQUFBLFVBQUFsQixJQUFBLENBQUExRSxLQUFBLEdBQUF3RixRQUFBLENBQUFJLENBQUEsR0FBQWxCLElBQUEsQ0FBQU4sSUFBQSxPQUFBTSxJQUFBLFNBQUFBLElBQUEsQ0FBQTFFLEtBQUEsR0FBQXNFLFNBQUEsRUFBQUksSUFBQSxDQUFBTixJQUFBLE9BQUFNLElBQUEsWUFBQUEsSUFBQSxDQUFBQSxJQUFBLEdBQUFBLElBQUEsZUFBQUEsSUFBQSxFQUFBZCxVQUFBLGVBQUFBLFdBQUEsYUFBQTVELEtBQUEsRUFBQXNFLFNBQUEsRUFBQUYsSUFBQSxpQkFBQXBDLGlCQUFBLENBQUF2QyxTQUFBLEdBQUF3QywwQkFBQSxFQUFBckMsY0FBQSxDQUFBMkMsRUFBQSxtQkFBQXZDLEtBQUEsRUFBQWlDLDBCQUFBLEVBQUF0QixZQUFBLFNBQUFmLGNBQUEsQ0FBQXFDLDBCQUFBLG1CQUFBakMsS0FBQSxFQUFBZ0MsaUJBQUEsRUFBQXJCLFlBQUEsU0FBQXFCLGlCQUFBLENBQUE2RCxXQUFBLEdBQUFwRixNQUFBLENBQUF3QiwwQkFBQSxFQUFBMUIsaUJBQUEsd0JBQUFqQixPQUFBLENBQUF3RyxtQkFBQSxhQUFBQyxNQUFBLFFBQUFDLElBQUEsd0JBQUFELE1BQUEsSUFBQUEsTUFBQSxDQUFBRSxXQUFBLFdBQUFELElBQUEsS0FBQUEsSUFBQSxLQUFBaEUsaUJBQUEsNkJBQUFnRSxJQUFBLENBQUFILFdBQUEsSUFBQUcsSUFBQSxDQUFBRSxJQUFBLE9BQUE1RyxPQUFBLENBQUE2RyxJQUFBLGFBQUFKLE1BQUEsV0FBQXZHLE1BQUEsQ0FBQTRHLGNBQUEsR0FBQTVHLE1BQUEsQ0FBQTRHLGNBQUEsQ0FBQUwsTUFBQSxFQUFBOUQsMEJBQUEsS0FBQThELE1BQUEsQ0FBQU0sU0FBQSxHQUFBcEUsMEJBQUEsRUFBQXhCLE1BQUEsQ0FBQXNGLE1BQUEsRUFBQXhGLGlCQUFBLHlCQUFBd0YsTUFBQSxDQUFBdEcsU0FBQSxHQUFBRCxNQUFBLENBQUE4QixNQUFBLENBQUFpQixFQUFBLEdBQUF3RCxNQUFBLEtBQUF6RyxPQUFBLENBQUFnSCxLQUFBLGFBQUExRSxHQUFBLGFBQUF3QixPQUFBLEVBQUF4QixHQUFBLE9BQUFZLHFCQUFBLENBQUFJLGFBQUEsQ0FBQW5ELFNBQUEsR0FBQWdCLE1BQUEsQ0FBQW1DLGFBQUEsQ0FBQW5ELFNBQUEsRUFBQVksbUJBQUEsaUNBQUFmLE9BQUEsQ0FBQXNELGFBQUEsR0FBQUEsYUFBQSxFQUFBdEQsT0FBQSxDQUFBaUgsS0FBQSxhQUFBeEYsT0FBQSxFQUFBQyxPQUFBLEVBQUFDLElBQUEsRUFBQUMsV0FBQSxFQUFBMkIsV0FBQSxlQUFBQSxXQUFBLEtBQUFBLFdBQUEsR0FBQTJELE9BQUEsT0FBQUMsSUFBQSxPQUFBN0QsYUFBQSxDQUFBOUIsSUFBQSxDQUFBQyxPQUFBLEVBQUFDLE9BQUEsRUFBQUMsSUFBQSxFQUFBQyxXQUFBLEdBQUEyQixXQUFBLFVBQUF2RCxPQUFBLENBQUF3RyxtQkFBQSxDQUFBOUUsT0FBQSxJQUFBeUYsSUFBQSxHQUFBQSxJQUFBLENBQUEvQixJQUFBLEdBQUFyQixJQUFBLFdBQUFILE1BQUEsV0FBQUEsTUFBQSxDQUFBa0IsSUFBQSxHQUFBbEIsTUFBQSxDQUFBbEQsS0FBQSxHQUFBeUcsSUFBQSxDQUFBL0IsSUFBQSxXQUFBbEMscUJBQUEsQ0FBQUQsRUFBQSxHQUFBOUIsTUFBQSxDQUFBOEIsRUFBQSxFQUFBaEMsaUJBQUEsZ0JBQUFFLE1BQUEsQ0FBQThCLEVBQUEsRUFBQXBDLGNBQUEsaUNBQUFNLE1BQUEsQ0FBQThCLEVBQUEsNkRBQUFqRCxPQUFBLENBQUFvSCxJQUFBLGFBQUFDLEdBQUEsUUFBQUMsTUFBQSxHQUFBcEgsTUFBQSxDQUFBbUgsR0FBQSxHQUFBRCxJQUFBLGdCQUFBNUcsR0FBQSxJQUFBOEcsTUFBQSxFQUFBRixJQUFBLENBQUF0QixJQUFBLENBQUF0RixHQUFBLFVBQUE0RyxJQUFBLENBQUFHLE9BQUEsYUFBQW5DLEtBQUEsV0FBQWdDLElBQUEsQ0FBQWYsTUFBQSxTQUFBN0YsR0FBQSxHQUFBNEcsSUFBQSxDQUFBSSxHQUFBLFFBQUFoSCxHQUFBLElBQUE4RyxNQUFBLFNBQUFsQyxJQUFBLENBQUExRSxLQUFBLEdBQUFGLEdBQUEsRUFBQTRFLElBQUEsQ0FBQU4sSUFBQSxPQUFBTSxJQUFBLFdBQUFBLElBQUEsQ0FBQU4sSUFBQSxPQUFBTSxJQUFBLFFBQUFwRixPQUFBLENBQUFnRCxNQUFBLEdBQUFBLE1BQUEsRUFBQWQsT0FBQSxDQUFBL0IsU0FBQSxLQUFBd0csV0FBQSxFQUFBekUsT0FBQSxFQUFBK0QsS0FBQSxXQUFBQSxNQUFBd0IsYUFBQSxhQUFBQyxJQUFBLFdBQUF0QyxJQUFBLFdBQUFWLElBQUEsUUFBQUMsS0FBQSxHQUFBSyxTQUFBLE9BQUFGLElBQUEsWUFBQVAsUUFBQSxjQUFBbkIsTUFBQSxnQkFBQWQsR0FBQSxHQUFBMEMsU0FBQSxPQUFBYSxVQUFBLENBQUExQyxPQUFBLENBQUE0QyxhQUFBLElBQUEwQixhQUFBLFdBQUFiLElBQUEsa0JBQUFBLElBQUEsQ0FBQWUsTUFBQSxPQUFBdkgsTUFBQSxDQUFBb0MsSUFBQSxPQUFBb0UsSUFBQSxNQUFBUixLQUFBLEVBQUFRLElBQUEsQ0FBQWdCLEtBQUEsY0FBQWhCLElBQUEsSUFBQTVCLFNBQUEsTUFBQTZDLElBQUEsV0FBQUEsS0FBQSxTQUFBL0MsSUFBQSxXQUFBZ0QsVUFBQSxRQUFBakMsVUFBQSxJQUFBRyxVQUFBLGtCQUFBOEIsVUFBQSxDQUFBdkYsSUFBQSxRQUFBdUYsVUFBQSxDQUFBeEYsR0FBQSxjQUFBeUYsSUFBQSxLQUFBbkQsaUJBQUEsV0FBQUEsa0JBQUFvRCxTQUFBLGFBQUFsRCxJQUFBLFFBQUFrRCxTQUFBLE1BQUEvRixPQUFBLGtCQUFBZ0csT0FBQUMsR0FBQSxFQUFBQyxNQUFBLFdBQUF4RSxNQUFBLENBQUFwQixJQUFBLFlBQUFvQixNQUFBLENBQUFyQixHQUFBLEdBQUEwRixTQUFBLEVBQUEvRixPQUFBLENBQUFtRCxJQUFBLEdBQUE4QyxHQUFBLEVBQUFDLE1BQUEsS0FBQWxHLE9BQUEsQ0FBQW1CLE1BQUEsV0FBQW5CLE9BQUEsQ0FBQUssR0FBQSxHQUFBMEMsU0FBQSxLQUFBbUQsTUFBQSxhQUFBN0IsQ0FBQSxRQUFBVCxVQUFBLENBQUFRLE1BQUEsTUFBQUMsQ0FBQSxTQUFBQSxDQUFBLFFBQUFkLEtBQUEsUUFBQUssVUFBQSxDQUFBUyxDQUFBLEdBQUEzQyxNQUFBLEdBQUE2QixLQUFBLENBQUFRLFVBQUEsaUJBQUFSLEtBQUEsQ0FBQUMsTUFBQSxTQUFBd0MsTUFBQSxhQUFBekMsS0FBQSxDQUFBQyxNQUFBLFNBQUFpQyxJQUFBLFFBQUFVLFFBQUEsR0FBQWhJLE1BQUEsQ0FBQW9DLElBQUEsQ0FBQWdELEtBQUEsZUFBQTZDLFVBQUEsR0FBQWpJLE1BQUEsQ0FBQW9DLElBQUEsQ0FBQWdELEtBQUEscUJBQUE0QyxRQUFBLElBQUFDLFVBQUEsYUFBQVgsSUFBQSxHQUFBbEMsS0FBQSxDQUFBRSxRQUFBLFNBQUF1QyxNQUFBLENBQUF6QyxLQUFBLENBQUFFLFFBQUEsZ0JBQUFnQyxJQUFBLEdBQUFsQyxLQUFBLENBQUFHLFVBQUEsU0FBQXNDLE1BQUEsQ0FBQXpDLEtBQUEsQ0FBQUcsVUFBQSxjQUFBeUMsUUFBQSxhQUFBVixJQUFBLEdBQUFsQyxLQUFBLENBQUFFLFFBQUEsU0FBQXVDLE1BQUEsQ0FBQXpDLEtBQUEsQ0FBQUUsUUFBQSxxQkFBQTJDLFVBQUEsWUFBQWhFLEtBQUEscURBQUFxRCxJQUFBLEdBQUFsQyxLQUFBLENBQUFHLFVBQUEsU0FBQXNDLE1BQUEsQ0FBQXpDLEtBQUEsQ0FBQUcsVUFBQSxZQUFBZCxNQUFBLFdBQUFBLE9BQUF0QyxJQUFBLEVBQUFELEdBQUEsYUFBQWdFLENBQUEsUUFBQVQsVUFBQSxDQUFBUSxNQUFBLE1BQUFDLENBQUEsU0FBQUEsQ0FBQSxRQUFBZCxLQUFBLFFBQUFLLFVBQUEsQ0FBQVMsQ0FBQSxPQUFBZCxLQUFBLENBQUFDLE1BQUEsU0FBQWlDLElBQUEsSUFBQXRILE1BQUEsQ0FBQW9DLElBQUEsQ0FBQWdELEtBQUEsd0JBQUFrQyxJQUFBLEdBQUFsQyxLQUFBLENBQUFHLFVBQUEsUUFBQTJDLFlBQUEsR0FBQTlDLEtBQUEsYUFBQThDLFlBQUEsaUJBQUEvRixJQUFBLG1CQUFBQSxJQUFBLEtBQUErRixZQUFBLENBQUE3QyxNQUFBLElBQUFuRCxHQUFBLElBQUFBLEdBQUEsSUFBQWdHLFlBQUEsQ0FBQTNDLFVBQUEsS0FBQTJDLFlBQUEsY0FBQTNFLE1BQUEsR0FBQTJFLFlBQUEsR0FBQUEsWUFBQSxDQUFBdEMsVUFBQSxjQUFBckMsTUFBQSxDQUFBcEIsSUFBQSxHQUFBQSxJQUFBLEVBQUFvQixNQUFBLENBQUFyQixHQUFBLEdBQUFBLEdBQUEsRUFBQWdHLFlBQUEsU0FBQWxGLE1BQUEsZ0JBQUFnQyxJQUFBLEdBQUFrRCxZQUFBLENBQUEzQyxVQUFBLEVBQUFsRCxnQkFBQSxTQUFBOEYsUUFBQSxDQUFBNUUsTUFBQSxNQUFBNEUsUUFBQSxXQUFBQSxTQUFBNUUsTUFBQSxFQUFBaUMsUUFBQSxvQkFBQWpDLE1BQUEsQ0FBQXBCLElBQUEsUUFBQW9CLE1BQUEsQ0FBQXJCLEdBQUEscUJBQUFxQixNQUFBLENBQUFwQixJQUFBLG1CQUFBb0IsTUFBQSxDQUFBcEIsSUFBQSxRQUFBNkMsSUFBQSxHQUFBekIsTUFBQSxDQUFBckIsR0FBQSxnQkFBQXFCLE1BQUEsQ0FBQXBCLElBQUEsU0FBQXdGLElBQUEsUUFBQXpGLEdBQUEsR0FBQXFCLE1BQUEsQ0FBQXJCLEdBQUEsT0FBQWMsTUFBQSxrQkFBQWdDLElBQUEseUJBQUF6QixNQUFBLENBQUFwQixJQUFBLElBQUFxRCxRQUFBLFVBQUFSLElBQUEsR0FBQVEsUUFBQSxHQUFBbkQsZ0JBQUEsS0FBQStGLE1BQUEsV0FBQUEsT0FBQTdDLFVBQUEsYUFBQVcsQ0FBQSxRQUFBVCxVQUFBLENBQUFRLE1BQUEsTUFBQUMsQ0FBQSxTQUFBQSxDQUFBLFFBQUFkLEtBQUEsUUFBQUssVUFBQSxDQUFBUyxDQUFBLE9BQUFkLEtBQUEsQ0FBQUcsVUFBQSxLQUFBQSxVQUFBLGNBQUE0QyxRQUFBLENBQUEvQyxLQUFBLENBQUFRLFVBQUEsRUFBQVIsS0FBQSxDQUFBSSxRQUFBLEdBQUFHLGFBQUEsQ0FBQVAsS0FBQSxHQUFBL0MsZ0JBQUEseUJBQUFnRyxPQUFBaEQsTUFBQSxhQUFBYSxDQUFBLFFBQUFULFVBQUEsQ0FBQVEsTUFBQSxNQUFBQyxDQUFBLFNBQUFBLENBQUEsUUFBQWQsS0FBQSxRQUFBSyxVQUFBLENBQUFTLENBQUEsT0FBQWQsS0FBQSxDQUFBQyxNQUFBLEtBQUFBLE1BQUEsUUFBQTlCLE1BQUEsR0FBQTZCLEtBQUEsQ0FBQVEsVUFBQSxrQkFBQXJDLE1BQUEsQ0FBQXBCLElBQUEsUUFBQW1HLE1BQUEsR0FBQS9FLE1BQUEsQ0FBQXJCLEdBQUEsRUFBQXlELGFBQUEsQ0FBQVAsS0FBQSxZQUFBa0QsTUFBQSxnQkFBQXJFLEtBQUEsOEJBQUFzRSxhQUFBLFdBQUFBLGNBQUF6QyxRQUFBLEVBQUFmLFVBQUEsRUFBQUUsT0FBQSxnQkFBQWQsUUFBQSxLQUFBekQsUUFBQSxFQUFBa0MsTUFBQSxDQUFBa0QsUUFBQSxHQUFBZixVQUFBLEVBQUFBLFVBQUEsRUFBQUUsT0FBQSxFQUFBQSxPQUFBLG9CQUFBakMsTUFBQSxVQUFBZCxHQUFBLEdBQUEwQyxTQUFBLEdBQUF2QyxnQkFBQSxPQUFBekMsT0FBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUFBNEksbUJBQUFDLEdBQUEsRUFBQXBGLE9BQUEsRUFBQUMsTUFBQSxFQUFBb0YsS0FBQSxFQUFBQyxNQUFBLEVBQUF2SSxHQUFBLEVBQUE4QixHQUFBLGNBQUE0QyxJQUFBLEdBQUEyRCxHQUFBLENBQUFySSxHQUFBLEVBQUE4QixHQUFBLE9BQUE1QixLQUFBLEdBQUF3RSxJQUFBLENBQUF4RSxLQUFBLFdBQUF1RCxLQUFBLElBQUFQLE1BQUEsQ0FBQU8sS0FBQSxpQkFBQWlCLElBQUEsQ0FBQUosSUFBQSxJQUFBckIsT0FBQSxDQUFBL0MsS0FBQSxZQUFBd0csT0FBQSxDQUFBekQsT0FBQSxDQUFBL0MsS0FBQSxFQUFBcUQsSUFBQSxDQUFBK0UsS0FBQSxFQUFBQyxNQUFBO0FBQUEsU0FBQUMsa0JBQUEzRyxFQUFBLDZCQUFBVixJQUFBLFNBQUFzSCxJQUFBLEdBQUFDLFNBQUEsYUFBQWhDLE9BQUEsV0FBQXpELE9BQUEsRUFBQUMsTUFBQSxRQUFBbUYsR0FBQSxHQUFBeEcsRUFBQSxDQUFBOEcsS0FBQSxDQUFBeEgsSUFBQSxFQUFBc0gsSUFBQSxZQUFBSCxNQUFBcEksS0FBQSxJQUFBa0ksa0JBQUEsQ0FBQUMsR0FBQSxFQUFBcEYsT0FBQSxFQUFBQyxNQUFBLEVBQUFvRixLQUFBLEVBQUFDLE1BQUEsVUFBQXJJLEtBQUEsY0FBQXFJLE9BQUF4SCxHQUFBLElBQUFxSCxrQkFBQSxDQUFBQyxHQUFBLEVBQUFwRixPQUFBLEVBQUFDLE1BQUEsRUFBQW9GLEtBQUEsRUFBQUMsTUFBQSxXQUFBeEgsR0FBQSxLQUFBdUgsS0FBQSxDQUFBOUQsU0FBQTtBQUFBLFNBQUFvRSxlQUFBQyxHQUFBLEVBQUEvQyxDQUFBLFdBQUFnRCxlQUFBLENBQUFELEdBQUEsS0FBQUUscUJBQUEsQ0FBQUYsR0FBQSxFQUFBL0MsQ0FBQSxLQUFBa0QsMkJBQUEsQ0FBQUgsR0FBQSxFQUFBL0MsQ0FBQSxLQUFBbUQsZ0JBQUE7QUFBQSxTQUFBQSxpQkFBQSxjQUFBeEUsU0FBQTtBQUFBLFNBQUF1RSw0QkFBQUUsQ0FBQSxFQUFBQyxNQUFBLFNBQUFELENBQUEscUJBQUFBLENBQUEsc0JBQUFFLGlCQUFBLENBQUFGLENBQUEsRUFBQUMsTUFBQSxPQUFBRSxDQUFBLEdBQUEzSixNQUFBLENBQUFDLFNBQUEsQ0FBQTJKLFFBQUEsQ0FBQXRILElBQUEsQ0FBQWtILENBQUEsRUFBQTlCLEtBQUEsYUFBQWlDLENBQUEsaUJBQUFILENBQUEsQ0FBQS9DLFdBQUEsRUFBQWtELENBQUEsR0FBQUgsQ0FBQSxDQUFBL0MsV0FBQSxDQUFBQyxJQUFBLE1BQUFpRCxDQUFBLGNBQUFBLENBQUEsbUJBQUFFLEtBQUEsQ0FBQUMsSUFBQSxDQUFBTixDQUFBLE9BQUFHLENBQUEsK0RBQUFJLElBQUEsQ0FBQUosQ0FBQSxVQUFBRCxpQkFBQSxDQUFBRixDQUFBLEVBQUFDLE1BQUE7QUFBQSxTQUFBQyxrQkFBQVAsR0FBQSxFQUFBYSxHQUFBLFFBQUFBLEdBQUEsWUFBQUEsR0FBQSxHQUFBYixHQUFBLENBQUFoRCxNQUFBLEVBQUE2RCxHQUFBLEdBQUFiLEdBQUEsQ0FBQWhELE1BQUEsV0FBQUMsQ0FBQSxNQUFBNkQsSUFBQSxPQUFBSixLQUFBLENBQUFHLEdBQUEsR0FBQTVELENBQUEsR0FBQTRELEdBQUEsRUFBQTVELENBQUEsSUFBQTZELElBQUEsQ0FBQTdELENBQUEsSUFBQStDLEdBQUEsQ0FBQS9DLENBQUEsVUFBQTZELElBQUE7QUFBQSxTQUFBWixzQkFBQUYsR0FBQSxFQUFBL0MsQ0FBQSxRQUFBOEQsRUFBQSxXQUFBZixHQUFBLGdDQUFBekksTUFBQSxJQUFBeUksR0FBQSxDQUFBekksTUFBQSxDQUFBRSxRQUFBLEtBQUF1SSxHQUFBLDRCQUFBZSxFQUFBLFFBQUFDLEVBQUEsRUFBQUMsRUFBQSxFQUFBQyxFQUFBLEVBQUFDLEVBQUEsRUFBQUMsSUFBQSxPQUFBQyxFQUFBLE9BQUFDLEVBQUEsaUJBQUFKLEVBQUEsSUFBQUgsRUFBQSxHQUFBQSxFQUFBLENBQUE1SCxJQUFBLENBQUE2RyxHQUFBLEdBQUFqRSxJQUFBLFFBQUFrQixDQUFBLFFBQUFwRyxNQUFBLENBQUFrSyxFQUFBLE1BQUFBLEVBQUEsVUFBQU0sRUFBQSx1QkFBQUEsRUFBQSxJQUFBTCxFQUFBLEdBQUFFLEVBQUEsQ0FBQS9ILElBQUEsQ0FBQTRILEVBQUEsR0FBQXRGLElBQUEsTUFBQTJGLElBQUEsQ0FBQTNFLElBQUEsQ0FBQXVFLEVBQUEsQ0FBQTNKLEtBQUEsR0FBQStKLElBQUEsQ0FBQXBFLE1BQUEsS0FBQUMsQ0FBQSxHQUFBb0UsRUFBQSxpQkFBQW5KLEdBQUEsSUFBQW9KLEVBQUEsT0FBQUwsRUFBQSxHQUFBL0ksR0FBQSx5QkFBQW1KLEVBQUEsWUFBQU4sRUFBQSxlQUFBSSxFQUFBLEdBQUFKLEVBQUEsY0FBQWxLLE1BQUEsQ0FBQXNLLEVBQUEsTUFBQUEsRUFBQSwyQkFBQUcsRUFBQSxRQUFBTCxFQUFBLGFBQUFHLElBQUE7QUFBQSxTQUFBbkIsZ0JBQUFELEdBQUEsUUFBQVUsS0FBQSxDQUFBYSxPQUFBLENBQUF2QixHQUFBLFVBQUFBLEdBQUE7QUFBQSxTQUFBcU4sUUFBQXBQLE1BQUEsRUFBQXFQLGNBQUEsUUFBQXZQLElBQUEsR0FBQWxILE1BQUEsQ0FBQWtILElBQUEsQ0FBQUUsTUFBQSxPQUFBcEgsTUFBQSxDQUFBMFcscUJBQUEsUUFBQUMsT0FBQSxHQUFBM1csTUFBQSxDQUFBMFcscUJBQUEsQ0FBQXRQLE1BQUEsR0FBQXFQLGNBQUEsS0FBQUUsT0FBQSxHQUFBQSxPQUFBLENBQUE5QixNQUFBLFdBQUErQixHQUFBLFdBQUE1VyxNQUFBLENBQUE2Vyx3QkFBQSxDQUFBelAsTUFBQSxFQUFBd1AsR0FBQSxFQUFBMVYsVUFBQSxPQUFBZ0csSUFBQSxDQUFBdEIsSUFBQSxDQUFBcUQsS0FBQSxDQUFBL0IsSUFBQSxFQUFBeVAsT0FBQSxZQUFBelAsSUFBQTtBQUFBLFNBQUE0UCxjQUFBdkssTUFBQSxhQUFBbkcsQ0FBQSxNQUFBQSxDQUFBLEdBQUE0QyxTQUFBLENBQUE3QyxNQUFBLEVBQUFDLENBQUEsVUFBQTJRLE1BQUEsV0FBQS9OLFNBQUEsQ0FBQTVDLENBQUEsSUFBQTRDLFNBQUEsQ0FBQTVDLENBQUEsUUFBQUEsQ0FBQSxPQUFBb1EsT0FBQSxDQUFBeFcsTUFBQSxDQUFBK1csTUFBQSxPQUFBOVQsT0FBQSxXQUFBM0MsR0FBQSxJQUFBMFcsZUFBQSxDQUFBekssTUFBQSxFQUFBak0sR0FBQSxFQUFBeVcsTUFBQSxDQUFBelcsR0FBQSxTQUFBTixNQUFBLENBQUFpWCx5QkFBQSxHQUFBalgsTUFBQSxDQUFBa1gsZ0JBQUEsQ0FBQTNLLE1BQUEsRUFBQXZNLE1BQUEsQ0FBQWlYLHlCQUFBLENBQUFGLE1BQUEsS0FBQVAsT0FBQSxDQUFBeFcsTUFBQSxDQUFBK1csTUFBQSxHQUFBOVQsT0FBQSxXQUFBM0MsR0FBQSxJQUFBTixNQUFBLENBQUFJLGNBQUEsQ0FBQW1NLE1BQUEsRUFBQWpNLEdBQUEsRUFBQU4sTUFBQSxDQUFBNlcsd0JBQUEsQ0FBQUUsTUFBQSxFQUFBelcsR0FBQSxpQkFBQWlNLE1BQUE7QUFBQSxTQUFBeUssZ0JBQUEzVyxHQUFBLEVBQUFDLEdBQUEsRUFBQUUsS0FBQSxJQUFBRixHQUFBLEdBQUE2VyxjQUFBLENBQUE3VyxHQUFBLE9BQUFBLEdBQUEsSUFBQUQsR0FBQSxJQUFBTCxNQUFBLENBQUFJLGNBQUEsQ0FBQUMsR0FBQSxFQUFBQyxHQUFBLElBQUFFLEtBQUEsRUFBQUEsS0FBQSxFQUFBVSxVQUFBLFFBQUFDLFlBQUEsUUFBQUMsUUFBQSxvQkFBQWYsR0FBQSxDQUFBQyxHQUFBLElBQUFFLEtBQUEsV0FBQUgsR0FBQTtBQUFBLFNBQUE4VyxlQUFBL1UsR0FBQSxRQUFBOUIsR0FBQSxHQUFBOFcsWUFBQSxDQUFBaFYsR0FBQSxvQkFBQXVCLE9BQUEsQ0FBQXJELEdBQUEsaUJBQUFBLEdBQUEsR0FBQStXLE1BQUEsQ0FBQS9XLEdBQUE7QUFBQSxTQUFBOFcsYUFBQUUsS0FBQSxFQUFBQyxJQUFBLFFBQUE1VCxPQUFBLENBQUEyVCxLQUFBLGtCQUFBQSxLQUFBLGtCQUFBQSxLQUFBLE1BQUFFLElBQUEsR0FBQUYsS0FBQSxDQUFBNVcsTUFBQSxDQUFBK1csV0FBQSxPQUFBRCxJQUFBLEtBQUExUyxTQUFBLFFBQUE0UyxHQUFBLEdBQUFGLElBQUEsQ0FBQWxWLElBQUEsQ0FBQWdWLEtBQUEsRUFBQUMsSUFBQSxvQkFBQTVULE9BQUEsQ0FBQStULEdBQUEsdUJBQUFBLEdBQUEsWUFBQTNTLFNBQUEsNERBQUF3UyxJQUFBLGdCQUFBRixNQUFBLEdBQUFNLE1BQUEsRUFBQUwsS0FBQTtBQUR3QztBQUNkO0FBQzZEO0FBQ1Q7QUFDNUI7QUFHbEQsSUFBTU8sZUFBZSxHQUFHbEcsd0NBQ2YsQ0FBQztFQUNONkQsU0FBUyxFQUFFN0Qsd0NBQVUsRUFBRSxDQUFDVyxHQUFHLENBQUMsR0FBRyxFQUFFLHFCQUFxQixDQUFDLENBQUNILFFBQVEsQ0FBQyxrQ0FBa0MsQ0FBQztFQUNwR3dELFVBQVUsRUFBRWhFLHdDQUFVLEVBQUUsQ0FBQ1csR0FBRyxDQUFDLEdBQUcsRUFBRSxxQkFBcUIsQ0FBQztFQUN4RHVELE9BQU8sRUFBRWxFLHdDQUFVLEVBQUUsQ0FBQ1csR0FBRyxDQUFDLEdBQUcsRUFBRSxxQkFBcUIsQ0FBQztFQUNyRHlELE9BQU8sRUFBRXBFLHdDQUFVLEVBQUUsQ0FBQ1csR0FBRyxDQUFDLEdBQUcsRUFBRSxxQkFBcUIsQ0FBQztFQUNyRDBELE9BQU8sRUFBRXJFLHdDQUFVLEVBQUUsQ0FBQ1csR0FBRyxDQUFDLEdBQUcsRUFBRSxxQkFBcUIsQ0FBQztFQUNyRDJELE9BQU8sRUFBRXRFLHdDQUFVLEVBQUUsQ0FBQ1csR0FBRyxDQUFDLEdBQUcsRUFBRSxxQkFBcUIsQ0FBQztFQUNyRDRELGVBQWUsRUFBRXZFLHdDQUFVLEVBQUUsQ0FBQ08sU0FBUyxDQUFDLGtDQUFrQyxDQUFDLENBQUM0RixRQUFRLENBQUMsdUNBQXVDLENBQUMsQ0FBQzNGLFFBQVEsQ0FBQyxxQ0FBcUMsQ0FBQztFQUM3S2dFLGVBQWUsRUFBRXhFLHdDQUFVLEVBQUUsQ0FBQ08sU0FBUyxDQUFDLGtDQUFrQyxDQUFDLENBQUM0RixRQUFRLENBQUMsdUNBQXVDLENBQUMsQ0FBQzNGLFFBQVEsQ0FBQyxrQ0FBa0MsQ0FBQztFQUMxS29FLEtBQUssRUFBRTVFLHdDQUFVLEVBQUUsQ0FBQ08sU0FBUyxDQUFDLGtDQUFrQyxDQUFDLENBQUM2RixHQUFHLENBQUMsQ0FBQyxFQUFFLG9DQUFvQyxDQUFDLENBQUM1RixRQUFRLENBQUMsMEJBQTBCLENBQUM7RUFDbkp5RCxPQUFPLEVBQUVqRSx3Q0FBVSxFQUFFLENBQUNXLEdBQUcsQ0FBQyxHQUFHLEVBQUUscUJBQXFCLENBQUMsQ0FBQ0gsUUFBUSxDQUFDLDZCQUE2QixDQUFDO0VBQzdGaUUsTUFBTSxFQUFFekUsd0NBQVUsRUFBRSxDQUFDTyxTQUFTLENBQUMsa0NBQWtDLENBQUMsQ0FBQzRGLFFBQVEsQ0FBQywwQ0FBMEMsQ0FBQyxDQUFDM0YsUUFBUSxDQUFDLDhCQUE4QixDQUFDO0VBQ2hLa0UsU0FBUyxFQUFFMUUsd0NBQVUsRUFBRSxDQUFDTyxTQUFTLENBQUMsa0NBQWtDLENBQUMsQ0FBQzRGLFFBQVEsQ0FBQywwQ0FBMEMsQ0FBQztFQUMxSHhCLFdBQVcsRUFBRTNFLHdDQUFVLEVBQUUsQ0FBQ08sU0FBUyxDQUFDLGtDQUFrQyxDQUFDLENBQUM0RixRQUFRLENBQUMsMENBQTBDO0FBQzdILENBQUMsQ0FBQyxDQUNEM0YsUUFBUSxFQUFFO0FBR2IsSUFBTTZGLGdCQUFnQixHQUFHO0VBQ3JCeEMsU0FBUyxFQUFFLEVBQUU7RUFDYkcsVUFBVSxFQUFFLEVBQUU7RUFDZEUsT0FBTyxFQUFFLEVBQUU7RUFDWEUsT0FBTyxFQUFFLEVBQUU7RUFDWEMsT0FBTyxFQUFFLEVBQUU7RUFDWEMsT0FBTyxFQUFFLEVBQUU7RUFDWEMsZUFBZSxFQUFFLEVBQUU7RUFDbkJDLGVBQWUsRUFBRSxFQUFFO0VBQ25CSSxLQUFLLEVBQUUsRUFBRTtFQUNUWCxPQUFPLEVBQUUsRUFBRTtFQUNYUSxNQUFNLEVBQUUsRUFBRTtFQUNWQyxTQUFTLEVBQUUsRUFBRTtFQUNiQyxXQUFXLEVBQUU7QUFDakIsQ0FBQztBQUVELElBQU0yQix1QkFBdUIsR0FBRyxTQUExQkEsdUJBQXVCQSxDQUFHN0MsU0FBUyxFQUFJO0VBQ3pDLElBQUcsQ0FBQ0EsU0FBUyxFQUFFO0lBQ1gsT0FBTzRDLGdCQUFnQjtFQUMzQjtFQUNBLE9BQUFsQixhQUFBLENBQUFBLGFBQUEsS0FDTzFCLFNBQVM7SUFDWmMsZUFBZSxFQUFFZCxTQUFTLENBQUNjLGVBQWUsR0FBRyxHQUFHO0lBQ2hEQyxlQUFlLEVBQUVmLFNBQVMsQ0FBQ2UsZUFBZSxHQUFHLEdBQUc7SUFDaERFLFNBQVMsRUFBRWpCLFNBQVMsQ0FBQ2lCLFNBQVMsR0FBR2pCLFNBQVMsQ0FBQ2lCLFNBQVMsR0FBRyxHQUFHLEdBQUUsRUFBRTtJQUM5REMsV0FBVyxFQUFFbEIsU0FBUyxDQUFDa0IsV0FBVyxHQUFHbEIsU0FBUyxDQUFDa0IsV0FBVyxHQUFHLEdBQUcsR0FBRTtFQUFFO0FBRTVFLENBQUM7QUFFTSxJQUFNcEIsb0JBQW9CLEdBQUcsU0FBdkJBLG9CQUFvQkEsQ0FBQWpLLElBQUEsRUFBZ0Y7RUFBQSxJQUFBaU4saUJBQUEsRUFBQUMsa0JBQUEsRUFBQUMsZUFBQSxFQUFBQyxlQUFBLEVBQUFDLGVBQUEsRUFBQUMsZUFBQSxFQUFBQyxlQUFBLEVBQUFDLHFCQUFBLEVBQUFDLHFCQUFBLEVBQUFDLGNBQUEsRUFBQUMsaUJBQUEsRUFBQUMsbUJBQUEsRUFBQUMsYUFBQTtFQUFBLElBQTNFbkosZUFBZSxHQUFBMUUsSUFBQSxDQUFmMEUsZUFBZTtJQUFFSCxLQUFLLEdBQUF2RSxJQUFBLENBQUx1RSxLQUFLO0lBQUU2RixnQkFBZ0IsR0FBQXBLLElBQUEsQ0FBaEJvSyxnQkFBZ0I7SUFBRUMsU0FBUyxHQUFBckssSUFBQSxDQUFUcUssU0FBUztJQUFBeUQsY0FBQSxHQUFBOU4sSUFBQSxDQUFFbUssU0FBUztJQUFUQSxTQUFTLEdBQUEyRCxjQUFBLGNBQUcsSUFBSSxHQUFBQSxjQUFBO0VBQ3ZHLElBQUE3RixxQkFBQSxHQUFnRXRCLDhGQUFxQixDQUFDaUcsZUFBZSxFQUFFSSx1QkFBdUIsQ0FBQzdDLFNBQVMsQ0FBQyxDQUFDO0lBQW5JNUksWUFBWSxHQUFBMEcscUJBQUEsQ0FBWjFHLFlBQVk7SUFBRTJHLE9BQU8sR0FBQUQscUJBQUEsQ0FBUEMsT0FBTztJQUFFcEgsTUFBTSxHQUFBbUgscUJBQUEsQ0FBTm5ILE1BQU07SUFBRXFILFFBQVEsR0FBQUYscUJBQUEsQ0FBUkUsUUFBUTtJQUFFRyxZQUFZLEdBQUFMLHFCQUFBLENBQVpLLFlBQVk7RUFFNUQsSUFBQTlILFNBQUEsR0FBZ0NiLGdEQUFRLENBQUMsS0FBSyxDQUFDO0lBQUFjLFVBQUEsR0FBQXhDLGNBQUEsQ0FBQXVDLFNBQUE7SUFBeENFLFNBQVMsR0FBQUQsVUFBQTtJQUFFRSxVQUFVLEdBQUFGLFVBQUE7RUFFNUIsSUFBTTBCLFFBQVE7SUFBQSxJQUFBWCxLQUFBLEdBQUEzRCxpQkFBQSxlQUFBakosbUJBQUEsR0FBQThHLElBQUEsQ0FBRyxTQUFBK0YsUUFBTThHLFFBQVE7TUFBQSxPQUFBM1QsbUJBQUEsR0FBQXlCLElBQUEsVUFBQXFMLFNBQUFDLFFBQUE7UUFBQSxrQkFBQUEsUUFBQSxDQUFBcEYsSUFBQSxHQUFBb0YsUUFBQSxDQUFBMUgsSUFBQTtVQUFBO1lBQUEsS0FDeEJ5RyxTQUFTO2NBQUFpQixRQUFBLENBQUExSCxJQUFBO2NBQUE7WUFBQTtZQUFBLE9BQUEwSCxRQUFBLENBQUFqSSxNQUFBO1VBQUE7WUFHWmlILFVBQVUsQ0FBQyxJQUFJLENBQUM7WUFDaEI7WUFBQSxJQUNJeUosZ0JBQWdCLENBQUMyRCxJQUFJLENBQUMsVUFBQUMsQ0FBQyxFQUFJO2NBQzNCLElBQUc3RCxTQUFTLElBQUlBLFNBQVMsQ0FBQ0ksU0FBUyxLQUFLaEMsUUFBUSxDQUFDZ0MsU0FBUyxFQUFFO2dCQUN4RCxPQUFPLEtBQUs7Y0FDaEI7Y0FDQSxPQUFPeUQsQ0FBQyxDQUFDekQsU0FBUyxLQUFLaEMsUUFBUSxDQUFDZ0MsU0FBUztZQUM3QyxDQUFDLENBQUM7Y0FBQTVJLFFBQUEsQ0FBQTFILElBQUE7Y0FBQTtZQUFBO1lBQUEwSCxRQUFBLENBQUFwRixJQUFBO1lBQUFvRixRQUFBLENBQUExSCxJQUFBO1lBQUEsT0FHWTBTLHlEQUFRLENBQUMsa0RBQWtELElBQUd0QyxTQUFTLGFBQVRBLFNBQVMsY0FBVEEsU0FBUyxHQUFJLEdBQUcsQ0FBQyxHQUFFLEdBQUcsR0FBRTlCLFFBQVEsQ0FBQ2dDLFNBQVMsQ0FBQztVQUFBO1lBQUU7WUFDakg7WUFDQWhDLFFBQVEsQ0FBQzBDLGVBQWUsR0FBR2dELElBQUksQ0FBQ0MsS0FBSyxDQUFDM0YsUUFBUSxDQUFDMEMsZUFBZSxHQUFHLEdBQUcsQ0FBQztZQUNyRTFDLFFBQVEsQ0FBQzJDLGVBQWUsR0FBRytDLElBQUksQ0FBQ0MsS0FBSyxDQUFDM0YsUUFBUSxDQUFDMkMsZUFBZSxHQUFHLEdBQUcsQ0FBQztZQUNyRTNDLFFBQVEsQ0FBQzZDLFNBQVMsR0FBRzZDLElBQUksQ0FBQ0MsS0FBSyxDQUFDM0YsUUFBUSxDQUFDNkMsU0FBUyxHQUFHLEdBQUcsQ0FBQztZQUN6RDdDLFFBQVEsQ0FBQzhDLFdBQVcsR0FBRzRDLElBQUksQ0FBQ0MsS0FBSyxDQUFDM0YsUUFBUSxDQUFDOEMsV0FBVyxHQUFHLEdBQUcsQ0FBQztZQUM3RDNHLGVBQWUsQ0FBQzZELFFBQVEsQ0FBQztZQUN6QmhFLEtBQUssRUFBRTtZQUFDNUMsUUFBQSxDQUFBMUgsSUFBQTtZQUFBO1VBQUE7WUFBQTBILFFBQUEsQ0FBQXBGLElBQUE7WUFBQW9GLFFBQUEsQ0FBQUksRUFBQSxHQUFBSixRQUFBO1VBQUE7WUFLaEJ3RyxRQUFRLENBQUMsV0FBVyxFQUFFO2NBQUMvUSxJQUFJLEVBQUUsUUFBUTtjQUFFeVIsT0FBTyxFQUFFLG9CQUFvQixHQUFHTixRQUFRLENBQUNnQyxTQUFTLEdBQUc7WUFBcUIsQ0FBQyxDQUFDO1lBQ25INUosVUFBVSxDQUFDLEtBQUssQ0FBQztVQUFDO1VBQUE7WUFBQSxPQUFBZ0IsUUFBQSxDQUFBakYsSUFBQTtRQUFBO01BQUEsR0FBQStFLE9BQUE7SUFBQSxDQUNyQjtJQUFBLGdCQTVCS1UsUUFBUUEsQ0FBQUgsR0FBQTtNQUFBLE9BQUFSLEtBQUEsQ0FBQXhELEtBQUEsT0FBQUQsU0FBQTtJQUFBO0VBQUEsR0E0QmI7RUFFRCxvQkFDSTJCLDJEQUFBO0lBQU0wQyxTQUFTLEVBQUMsWUFBWTtJQUFDRCxRQUFRLEVBQUVaLFlBQVksQ0FBQ1ksUUFBUTtFQUFFLGdCQUMxRHpDLDJEQUFBO0lBQUkwQyxTQUFTLEVBQUM7RUFBd0IsR0FBQyxpQkFBZSxDQUFLLGVBQzNEMUMsMkRBQUEsQ0FBQ21ILGlGQUFjO0lBQUNxQixPQUFPLEVBQUVBLE9BQVE7SUFBQ3pNLElBQUksRUFBQyxXQUFXO0lBQUMzQyxLQUFLLEdBQUFtVSxpQkFBQSxHQUFFbk0sTUFBTSxDQUFDeUosU0FBUyxjQUFBMEMsaUJBQUEsdUJBQWhCQSxpQkFBQSxDQUFrQnBFLE9BQVE7SUFBQ0MsU0FBUyxFQUFDO0VBQUssR0FBQyxvQkFBZSxDQUFpQixlQUNySXBKLDJEQUFBLENBQUNtSCxpRkFBYztJQUFDcUIsT0FBTyxFQUFFQSxPQUFRO0lBQUN6TSxJQUFJLEVBQUMsWUFBWTtJQUFDM0MsS0FBSyxHQUFBb1Usa0JBQUEsR0FBRXBNLE1BQU0sQ0FBQzRKLFVBQVUsY0FBQXdDLGtCQUFBLHVCQUFqQkEsa0JBQUEsQ0FBbUJyRSxPQUFRO0lBQUNDLFNBQVMsRUFBQztFQUFLLEdBQUMsbUJBQVcsQ0FBaUIsZUFFbklwSiwyREFBQSxDQUFDbUgsaUZBQWM7SUFBQ3FCLE9BQU8sRUFBRUEsT0FBUTtJQUFDek0sSUFBSSxFQUFDLFNBQVM7SUFBQzNDLEtBQUssR0FBQXFVLGVBQUEsR0FBRXJNLE1BQU0sQ0FBQzZKLE9BQU8sY0FBQXdDLGVBQUEsdUJBQWRBLGVBQUEsQ0FBZ0J0RSxPQUFRO0lBQUNDLFNBQVMsRUFBQztFQUFLLEdBQUMsWUFBVSxDQUFpQixlQUU1SHBKLDJEQUFBO0lBQUswQyxTQUFTLEVBQUM7RUFBMkIsZ0JBQ3RDMUMsMkRBQUE7SUFBSzBDLFNBQVMsRUFBQztFQUFpQyxHQUFDLDhEQUFzRCxDQUFNLGVBQzdHMUMsMkRBQUEsQ0FBQ21ILGlGQUFjO0lBQUNxQixPQUFPLEVBQUVBLE9BQVE7SUFBQ3pNLElBQUksRUFBQyxTQUFTO0lBQUMzQyxLQUFLLEdBQUFzVSxlQUFBLEdBQUV0TSxNQUFNLENBQUM4SixPQUFPLGNBQUF3QyxlQUFBLHVCQUFkQSxlQUFBLENBQWdCdkUsT0FBUTtJQUFDQyxTQUFTLEVBQUM7RUFBSyxHQUFDLElBQUUsQ0FBaUIsZUFDcEhwSiwyREFBQSxDQUFDbUgsaUZBQWM7SUFBQ3FCLE9BQU8sRUFBRUEsT0FBUTtJQUFDek0sSUFBSSxFQUFDLFNBQVM7SUFBQzNDLEtBQUssR0FBQXVVLGVBQUEsR0FBRXZNLE1BQU0sQ0FBQ2dLLE9BQU8sY0FBQXVDLGVBQUEsdUJBQWRBLGVBQUEsQ0FBZ0J4RSxPQUFRO0lBQUNDLFNBQVMsRUFBQztFQUFLLEdBQUMsSUFBRSxDQUFpQixlQUNwSHBKLDJEQUFBLENBQUNtSCxpRkFBYztJQUFDcUIsT0FBTyxFQUFFQSxPQUFRO0lBQUN6TSxJQUFJLEVBQUMsU0FBUztJQUFDM0MsS0FBSyxHQUFBd1UsZUFBQSxHQUFFeE0sTUFBTSxDQUFDaUssT0FBTyxjQUFBdUMsZUFBQSx1QkFBZEEsZUFBQSxDQUFnQnpFLE9BQVE7SUFBQ0MsU0FBUyxFQUFDO0VBQUssR0FBQyxJQUFFLENBQWlCLGVBQ3BIcEosMkRBQUEsQ0FBQ21ILGlGQUFjO0lBQUNxQixPQUFPLEVBQUVBLE9BQVE7SUFBQ3pNLElBQUksRUFBQyxTQUFTO0lBQUMzQyxLQUFLLEdBQUF5VSxlQUFBLEdBQUV6TSxNQUFNLENBQUNrSyxPQUFPLGNBQUF1QyxlQUFBLHVCQUFkQSxlQUFBLENBQWdCMUUsT0FBUTtJQUFDQyxTQUFTLEVBQUM7RUFBSyxHQUFDLElBQUUsQ0FBaUIsQ0FDbEgsZUFFTnBKLDJEQUFBLENBQUNtSCxpRkFBYztJQUFDelAsSUFBSSxFQUFDLFFBQVE7SUFBQzhRLE9BQU8sRUFBRUEsT0FBUTtJQUFDek0sSUFBSSxFQUFDLGlCQUFpQjtJQUFDM0MsS0FBSyxHQUFBMFUscUJBQUEsR0FBRTFNLE1BQU0sQ0FBQ21LLGVBQWUsY0FBQXVDLHFCQUFBLHVCQUF0QkEscUJBQUEsQ0FBd0IzRSxPQUFRO0lBQUNDLFNBQVMsRUFBQztFQUFLLEdBQUMsb0JBQWtCLENBQWlCLGVBQ2xLcEosMkRBQUEsQ0FBQ21ILGlGQUFjO0lBQUN6UCxJQUFJLEVBQUMsUUFBUTtJQUFDOFEsT0FBTyxFQUFFQSxPQUFRO0lBQUN6TSxJQUFJLEVBQUMsaUJBQWlCO0lBQUMzQyxLQUFLLEdBQUEyVSxxQkFBQSxHQUFFM00sTUFBTSxDQUFDb0ssZUFBZSxjQUFBdUMscUJBQUEsdUJBQXRCQSxxQkFBQSxDQUF3QjVFLE9BQVE7SUFBQ0MsU0FBUyxFQUFDO0VBQUssR0FBQyxpQkFBZSxDQUFpQixlQUUvSnBKLDJEQUFBLENBQUNtSCxpRkFBYztJQUFDelAsSUFBSSxFQUFDLFFBQVE7SUFBQzhRLE9BQU8sRUFBRUEsT0FBUTtJQUFDek0sSUFBSSxFQUFDLFFBQVE7SUFBQzNDLEtBQUssR0FBQTRVLGNBQUEsR0FBRTVNLE1BQU0sQ0FBQ3FLLE1BQU0sY0FBQXVDLGNBQUEsdUJBQWJBLGNBQUEsQ0FBZTdFLE9BQVE7SUFBQ0MsU0FBUyxFQUFDO0VBQUssR0FBQyxhQUFXLENBQWlCLGVBRXpJcEosMkRBQUEsQ0FBQ21ILGlGQUFjO0lBQUN6UCxJQUFJLEVBQUMsUUFBUTtJQUFDOFEsT0FBTyxFQUFFQSxPQUFRO0lBQUN6TSxJQUFJLEVBQUMsV0FBVztJQUFDM0MsS0FBSyxHQUFBNlUsaUJBQUEsR0FBRTdNLE1BQU0sQ0FBQ3NLLFNBQVMsY0FBQXVDLGlCQUFBLHVCQUFoQkEsaUJBQUEsQ0FBa0I5RSxPQUFRO0lBQUNDLFNBQVMsRUFBQztFQUFLLEdBQUMsNEJBQXFCLENBQWlCLGVBRXpKcEosMkRBQUEsQ0FBQ21ILGlGQUFjO0lBQUN6UCxJQUFJLEVBQUMsUUFBUTtJQUFDOFEsT0FBTyxFQUFFQSxPQUFRO0lBQUN6TSxJQUFJLEVBQUMsYUFBYTtJQUFDM0MsS0FBSyxHQUFBOFUsbUJBQUEsR0FBRTlNLE1BQU0sQ0FBQ3VLLFdBQVcsY0FBQXVDLG1CQUFBLHVCQUFsQkEsbUJBQUEsQ0FBb0IvRSxPQUFRO0lBQUNDLFNBQVMsRUFBQztFQUFLLEdBQUMsdURBQTBDLENBQWlCLGVBRWxMcEosMkRBQUEsQ0FBQ21ILGlGQUFjO0lBQUN6UCxJQUFJLEVBQUMsUUFBUTtJQUFDOFEsT0FBTyxFQUFFQSxPQUFRO0lBQUN6TSxJQUFJLEVBQUMsT0FBTztJQUFDM0MsS0FBSyxHQUFBK1UsYUFBQSxHQUFFL00sTUFBTSxDQUFDd0ssS0FBSyxjQUFBdUMsYUFBQSx1QkFBWkEsYUFBQSxDQUFjaEYsT0FBUTtJQUFDQyxTQUFTLEVBQUM7RUFBSyxHQUFDLFNBQU8sQ0FBaUIsRUFHL0gvVCxNQUFNLENBQUM4QyxNQUFNLENBQUNpSixNQUFNLENBQUMsQ0FBQzVGLE1BQU0sR0FBRyxDQUFDLGlCQUFJd0UsMkRBQUE7SUFBSzBDLFNBQVMsRUFBQztFQUFZLEdBQUMsb0NBQWtDLENBQU0sZUFHNUcxQywyREFBQTtJQUFLMEMsU0FBUyxFQUFDO0VBQTJCLEdBRWxDMUIsU0FBUyxnQkFDTGhCLDJEQUFBO0lBQUswQyxTQUFTLEVBQUM7RUFBaUIsR0FBQyxlQUFhLENBQU0sZ0JBRXBEMUMsMkRBQUEsQ0FBQUEsd0RBQUEscUJBQ0lBLDJEQUFBO0lBQVF0SSxJQUFJLEVBQUMsUUFBUTtJQUFDZ0wsU0FBUyxFQUFDLDhCQUE4QjtJQUFDSyxPQUFPLEVBQUU4QjtFQUFNLEdBQUMsU0FBTyxDQUFTLGVBQy9GN0UsMkRBQUE7SUFBUXRJLElBQUksRUFBQyxRQUFRO0lBQUNnTCxTQUFTLEVBQUM7RUFBYyxHQUFDLFNBQU8sQ0FBUyxDQUV0RSxDQUVILENBQ0g7QUFFZixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdklrRDtBQUNRO0FBQ1c7QUFDbEI7QUFDVTtBQUNKO0FBRW5ELElBQU0rTCxxQkFBcUIsR0FBRyxTQUF4QkEscUJBQXFCQSxDQUFBbk8sSUFBQSxFQUFpQztFQUFBLElBQTVCdkUsSUFBSSxHQUFBdUUsSUFBQSxDQUFKdkUsSUFBSTtJQUFFbEcsS0FBSyxHQUFBeUssSUFBQSxDQUFMekssS0FBSztJQUFFOFUsU0FBUyxHQUFBckssSUFBQSxDQUFUcUssU0FBUztFQUV6RDtFQUNBdEIsaURBQVMsQ0FBQyxZQUFNO0lBQ1osSUFBR3hULEtBQUssRUFBRTtNQUNONlkseUJBQXlCLENBQUM3WSxLQUFLLENBQUM7TUFDaEM4WSxtQkFBbUIsQ0FBQ2pGLElBQUksQ0FBQ0MsS0FBSyxDQUFDOVQsS0FBSyxDQUFDLENBQUM7SUFDMUM7RUFDSixDQUFDLEVBQUUsQ0FBQ0EsS0FBSyxDQUFDLENBQUM7O0VBRVg7RUFDQSxJQUFBaUwsU0FBQSxHQUE0RGIsZ0RBQVEsQ0FBQyxFQUFFLENBQUM7SUFBQWMsVUFBQSxHQUFBeEMsY0FBQSxDQUFBdUMsU0FBQTtJQUFqRThOLHNCQUFzQixHQUFBN04sVUFBQTtJQUFFMk4seUJBQXlCLEdBQUEzTixVQUFBO0VBQ3hEO0VBQ0EsSUFBQUcsVUFBQSxHQUFnRGpCLGdEQUFRLENBQUMsRUFBRSxDQUFDO0lBQUFrQixVQUFBLEdBQUE1QyxjQUFBLENBQUEyQyxVQUFBO0lBQXJEd0osZ0JBQWdCLEdBQUF2SixVQUFBO0lBQUV3TixtQkFBbUIsR0FBQXhOLFVBQUE7RUFDNUM7RUFDQWtJLGlEQUFTLENBQUMsWUFBTTtJQUNaLElBQUdxQixnQkFBZ0IsQ0FBQ2xQLE1BQU0sR0FBRyxDQUFDLEVBQUU7TUFDNUJrVCx5QkFBeUIsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ25DLENBQUMsTUFBTTtNQUNIO01BQ0EsSUFBR2hFLGdCQUFnQixDQUFDbFAsTUFBTSxLQUFLLENBQUMsRUFBRTtRQUM5QmtQLGdCQUFnQixDQUFDLENBQUMsQ0FBQyxDQUFDSSxJQUFJLEdBQUcsSUFBSTtNQUNuQztNQUNBNEQseUJBQXlCLENBQUNoRixJQUFJLENBQUNJLFNBQVMsQ0FBQ1ksZ0JBQWdCLENBQUMsQ0FBQztJQUMvRDtFQUNKLENBQUMsRUFBRSxDQUFDQSxnQkFBZ0IsQ0FBQyxDQUFDO0VBS3RCLElBQU1tRSxlQUFlLEdBQUcsU0FBbEJBLGVBQWVBLENBQUdwRSxTQUFTLEVBQUk7SUFDakNrRSxtQkFBbUIsQ0FBQyxVQUFBakUsZ0JBQWdCO01BQUEsT0FBSUEsZ0JBQWdCLENBQUNSLE1BQU0sQ0FBQyxVQUFBb0UsQ0FBQztRQUFBLE9BQUlBLENBQUMsQ0FBQ3pELFNBQVMsS0FBS0osU0FBUyxDQUFDSSxTQUFTO01BQUEsRUFBQztJQUFBLEVBQUM7SUFDMUc7SUFDQSxJQUFHSixTQUFTLENBQUNLLElBQUksRUFBRTtNQUNmNkQsbUJBQW1CLENBQUMsVUFBQWpFLGdCQUFnQixFQUFJO1FBQ3BDQSxnQkFBZ0IsQ0FBQyxDQUFDLENBQUMsQ0FBQ0ksSUFBSSxHQUFHLElBQUk7UUFDL0IsT0FBT0osZ0JBQWdCO01BQzNCLENBQUMsQ0FBQztJQUNOO0VBQ0osQ0FBQztFQUVELElBQU1vRSxZQUFZLEdBQUcsU0FBZkEsWUFBWUEsQ0FBR0MsWUFBWSxFQUFJO0lBQ2pDSixtQkFBbUIsQ0FBQyxVQUFBakUsZ0JBQWdCO01BQUEsVUFBQTdELE1BQUEsQ0FBQW1ELGtCQUFBLENBQzdCVSxnQkFBZ0IsSUFDbkJxRSxZQUFZO0lBQUEsQ0FDZCxDQUFDO0VBQ1AsQ0FBQztFQUVELElBQU1DLGVBQWUsR0FBRyxTQUFsQkEsZUFBZUEsQ0FBSW5FLFNBQVMsRUFBRUosU0FBUyxFQUFLO0lBQzlDa0UsbUJBQW1CLENBQUMsVUFBQWpFLGdCQUFnQjtNQUFBLE9BQ2hDQSxnQkFBZ0IsQ0FBQ04sR0FBRyxDQUFDLFVBQUFrRSxDQUFDO1FBQUEsT0FBSUEsQ0FBQyxDQUFDekQsU0FBUyxLQUFLQSxTQUFTLEdBQUdKLFNBQVMsR0FBRTZELENBQUM7TUFBQSxFQUFDO0lBQUEsQ0FDdEUsQ0FBQztFQUNOLENBQUM7RUFFRCxJQUFNVyxrQkFBa0IsR0FBRyxTQUFyQkEsa0JBQWtCQSxDQUFJeEUsU0FBUyxFQUFLO0lBQ3RDa0UsbUJBQW1CLENBQUMsVUFBQWpFLGdCQUFnQjtNQUFBLE9BQUlBLGdCQUFnQixDQUFDTixHQUFHLENBQUMsVUFBQThFLEVBQUUsRUFBSTtRQUMvRCxJQUFHQSxFQUFFLENBQUNyRSxTQUFTLEtBQUtKLFNBQVMsQ0FBQ0ksU0FBUyxFQUFFO1VBQ3JDcUUsRUFBRSxDQUFDcEUsSUFBSSxHQUFHLElBQUk7UUFDbEIsQ0FBQyxNQUFNO1VBQ0hvRSxFQUFFLENBQUNwRSxJQUFJLEdBQUcsS0FBSztRQUNuQjtRQUNBLE9BQU9vRSxFQUFFO01BQ2IsQ0FBQyxDQUFDO0lBQUEsRUFBQztFQUNQLENBQUM7RUFHRCxJQUFBek8sYUFBQSxHQUEwQ1AsNkVBQVksQ0FBQyxLQUFLLENBQUM7SUFBQVEsY0FBQSxHQUFBbkMsY0FBQSxDQUFBa0MsYUFBQTtJQUF0REUsVUFBVSxHQUFBRCxjQUFBO0lBQUVFLFFBQVEsR0FBQUYsY0FBQTtJQUFFRyxTQUFTLEdBQUFILGNBQUE7RUFFdEMsb0JBQ0lWLDJEQUFBO0lBQUswQyxTQUFTLEVBQUM7RUFBa0IsZ0JBQzdCMUMsMkRBQUEsZ0JBQU8sb0JBQWtCLENBQVEsZUFDakNBLDJEQUFBO0lBQUswQyxTQUFTLEVBQUM7RUFBbUIsR0FFMUJnSSxnQkFBZ0IsQ0FBQ04sR0FBRyxDQUFDLFVBQUFLLFNBQVM7SUFBQSxvQkFDMUJ6SywyREFBQSxDQUFDd0ssb0VBQWtCO01BQ2Y3VSxHQUFHLEVBQUU4VSxTQUFTLENBQUNJLFNBQVU7TUFDekJKLFNBQVMsRUFBRUEsU0FBVTtNQUNyQjVHLE1BQU0sRUFBRWdMLGVBQWdCO01BQ3hCL0ssTUFBTSxFQUFFa0wsZUFBZ0I7TUFDeEJ0RSxnQkFBZ0IsRUFBRUEsZ0JBQWlCO01BQ25DQyxTQUFTLEVBQUVBLFNBQVU7TUFDckJDLFlBQVksRUFBRXFFO0lBQW1CLEVBQ25DO0VBQUEsQ0FDTCxDQUFDLENBRUosZUFDTmpQLDJEQUFBLDJCQUNJQSwyREFBQSxDQUFDc0osOERBQVU7SUFBQzVHLFNBQVMsRUFBQyxrQkFBa0I7SUFBQ0ssT0FBTyxFQUFFbkM7RUFBUyxFQUFHLENBQzVELGVBQ05aLDJEQUFBLENBQUN1RCx1REFBSztJQUFDcUIsTUFBTSxFQUFFakUsVUFBVztJQUFDa0UsS0FBSyxFQUFFaEUsU0FBVTtJQUFDa0UsUUFBUSxFQUFFLEtBQU07SUFBQ0QsZUFBZSxFQUFDO0VBQWtCLGdCQUM1RjlFLDJEQUFBLENBQUN1Syx3RUFBb0I7SUFDakJ2RixlQUFlLEVBQUU4SixZQUFhO0lBQzlCakssS0FBSyxFQUFFaEUsU0FBVTtJQUNqQjZKLGdCQUFnQixFQUFFQSxnQkFBaUI7SUFDbkNDLFNBQVMsRUFBRUE7RUFBVSxFQUN2QixDQUNFLGVBQ1IzSywyREFBQTtJQUFPdEksSUFBSSxFQUFDLFFBQVE7SUFBQ3FFLElBQUksRUFBRUEsSUFBSztJQUFDbEcsS0FBSyxFQUFFK1k7RUFBdUIsRUFBRyxDQUNoRTtBQUVkLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OytDQzFHRCxxSkFBQTFaLG1CQUFBLFlBQUFBLG9CQUFBLFdBQUFDLE9BQUEsU0FBQUEsT0FBQSxPQUFBQyxFQUFBLEdBQUFDLE1BQUEsQ0FBQUMsU0FBQSxFQUFBQyxNQUFBLEdBQUFILEVBQUEsQ0FBQUksY0FBQSxFQUFBQyxjQUFBLEdBQUFKLE1BQUEsQ0FBQUksY0FBQSxjQUFBQyxHQUFBLEVBQUFDLEdBQUEsRUFBQUMsSUFBQSxJQUFBRixHQUFBLENBQUFDLEdBQUEsSUFBQUMsSUFBQSxDQUFBQyxLQUFBLEtBQUFDLE9BQUEsd0JBQUFDLE1BQUEsR0FBQUEsTUFBQSxPQUFBQyxjQUFBLEdBQUFGLE9BQUEsQ0FBQUcsUUFBQSxrQkFBQUMsbUJBQUEsR0FBQUosT0FBQSxDQUFBSyxhQUFBLHVCQUFBQyxpQkFBQSxHQUFBTixPQUFBLENBQUFPLFdBQUEsOEJBQUFDLE9BQUFaLEdBQUEsRUFBQUMsR0FBQSxFQUFBRSxLQUFBLFdBQUFSLE1BQUEsQ0FBQUksY0FBQSxDQUFBQyxHQUFBLEVBQUFDLEdBQUEsSUFBQUUsS0FBQSxFQUFBQSxLQUFBLEVBQUFVLFVBQUEsTUFBQUMsWUFBQSxNQUFBQyxRQUFBLFNBQUFmLEdBQUEsQ0FBQUMsR0FBQSxXQUFBVyxNQUFBLG1CQUFBSSxHQUFBLElBQUFKLE1BQUEsWUFBQUEsT0FBQVosR0FBQSxFQUFBQyxHQUFBLEVBQUFFLEtBQUEsV0FBQUgsR0FBQSxDQUFBQyxHQUFBLElBQUFFLEtBQUEsZ0JBQUFjLEtBQUFDLE9BQUEsRUFBQUMsT0FBQSxFQUFBQyxJQUFBLEVBQUFDLFdBQUEsUUFBQUMsY0FBQSxHQUFBSCxPQUFBLElBQUFBLE9BQUEsQ0FBQXZCLFNBQUEsWUFBQTJCLFNBQUEsR0FBQUosT0FBQSxHQUFBSSxTQUFBLEVBQUFDLFNBQUEsR0FBQTdCLE1BQUEsQ0FBQThCLE1BQUEsQ0FBQUgsY0FBQSxDQUFBMUIsU0FBQSxHQUFBOEIsT0FBQSxPQUFBQyxPQUFBLENBQUFOLFdBQUEsZ0JBQUF0QixjQUFBLENBQUF5QixTQUFBLGVBQUFyQixLQUFBLEVBQUF5QixnQkFBQSxDQUFBVixPQUFBLEVBQUFFLElBQUEsRUFBQU0sT0FBQSxNQUFBRixTQUFBLGFBQUFLLFNBQUFDLEVBQUEsRUFBQTlCLEdBQUEsRUFBQStCLEdBQUEsbUJBQUFDLElBQUEsWUFBQUQsR0FBQSxFQUFBRCxFQUFBLENBQUFHLElBQUEsQ0FBQWpDLEdBQUEsRUFBQStCLEdBQUEsY0FBQWYsR0FBQSxhQUFBZ0IsSUFBQSxXQUFBRCxHQUFBLEVBQUFmLEdBQUEsUUFBQXZCLE9BQUEsQ0FBQXdCLElBQUEsR0FBQUEsSUFBQSxNQUFBaUIsZ0JBQUEsZ0JBQUFYLFVBQUEsY0FBQVksa0JBQUEsY0FBQUMsMkJBQUEsU0FBQUMsaUJBQUEsT0FBQXpCLE1BQUEsQ0FBQXlCLGlCQUFBLEVBQUEvQixjQUFBLHFDQUFBZ0MsUUFBQSxHQUFBM0MsTUFBQSxDQUFBNEMsY0FBQSxFQUFBQyx1QkFBQSxHQUFBRixRQUFBLElBQUFBLFFBQUEsQ0FBQUEsUUFBQSxDQUFBRyxNQUFBLFFBQUFELHVCQUFBLElBQUFBLHVCQUFBLEtBQUE5QyxFQUFBLElBQUFHLE1BQUEsQ0FBQW9DLElBQUEsQ0FBQU8sdUJBQUEsRUFBQWxDLGNBQUEsTUFBQStCLGlCQUFBLEdBQUFHLHVCQUFBLE9BQUFFLEVBQUEsR0FBQU4sMEJBQUEsQ0FBQXhDLFNBQUEsR0FBQTJCLFNBQUEsQ0FBQTNCLFNBQUEsR0FBQUQsTUFBQSxDQUFBOEIsTUFBQSxDQUFBWSxpQkFBQSxZQUFBTSxzQkFBQS9DLFNBQUEsZ0NBQUFnRCxPQUFBLFdBQUFDLE1BQUEsSUFBQWpDLE1BQUEsQ0FBQWhCLFNBQUEsRUFBQWlELE1BQUEsWUFBQWQsR0FBQSxnQkFBQWUsT0FBQSxDQUFBRCxNQUFBLEVBQUFkLEdBQUEsc0JBQUFnQixjQUFBdkIsU0FBQSxFQUFBd0IsV0FBQSxhQUFBQyxPQUFBSixNQUFBLEVBQUFkLEdBQUEsRUFBQW1CLE9BQUEsRUFBQUMsTUFBQSxRQUFBQyxNQUFBLEdBQUF2QixRQUFBLENBQUFMLFNBQUEsQ0FBQXFCLE1BQUEsR0FBQXJCLFNBQUEsRUFBQU8sR0FBQSxtQkFBQXFCLE1BQUEsQ0FBQXBCLElBQUEsUUFBQXFCLE1BQUEsR0FBQUQsTUFBQSxDQUFBckIsR0FBQSxFQUFBNUIsS0FBQSxHQUFBa0QsTUFBQSxDQUFBbEQsS0FBQSxTQUFBQSxLQUFBLGdCQUFBbUQsT0FBQSxDQUFBbkQsS0FBQSxLQUFBTixNQUFBLENBQUFvQyxJQUFBLENBQUE5QixLQUFBLGVBQUE2QyxXQUFBLENBQUFFLE9BQUEsQ0FBQS9DLEtBQUEsQ0FBQW9ELE9BQUEsRUFBQUMsSUFBQSxXQUFBckQsS0FBQSxJQUFBOEMsTUFBQSxTQUFBOUMsS0FBQSxFQUFBK0MsT0FBQSxFQUFBQyxNQUFBLGdCQUFBbkMsR0FBQSxJQUFBaUMsTUFBQSxVQUFBakMsR0FBQSxFQUFBa0MsT0FBQSxFQUFBQyxNQUFBLFFBQUFILFdBQUEsQ0FBQUUsT0FBQSxDQUFBL0MsS0FBQSxFQUFBcUQsSUFBQSxXQUFBQyxTQUFBLElBQUFKLE1BQUEsQ0FBQWxELEtBQUEsR0FBQXNELFNBQUEsRUFBQVAsT0FBQSxDQUFBRyxNQUFBLGdCQUFBSyxLQUFBLFdBQUFULE1BQUEsVUFBQVMsS0FBQSxFQUFBUixPQUFBLEVBQUFDLE1BQUEsU0FBQUEsTUFBQSxDQUFBQyxNQUFBLENBQUFyQixHQUFBLFNBQUE0QixlQUFBLEVBQUE1RCxjQUFBLG9CQUFBSSxLQUFBLFdBQUFBLE1BQUEwQyxNQUFBLEVBQUFkLEdBQUEsYUFBQTZCLDJCQUFBLGVBQUFaLFdBQUEsV0FBQUUsT0FBQSxFQUFBQyxNQUFBLElBQUFGLE1BQUEsQ0FBQUosTUFBQSxFQUFBZCxHQUFBLEVBQUFtQixPQUFBLEVBQUFDLE1BQUEsZ0JBQUFRLGVBQUEsR0FBQUEsZUFBQSxHQUFBQSxlQUFBLENBQUFILElBQUEsQ0FBQUksMEJBQUEsRUFBQUEsMEJBQUEsSUFBQUEsMEJBQUEscUJBQUFoQyxpQkFBQVYsT0FBQSxFQUFBRSxJQUFBLEVBQUFNLE9BQUEsUUFBQW1DLEtBQUEsc0NBQUFoQixNQUFBLEVBQUFkLEdBQUEsd0JBQUE4QixLQUFBLFlBQUFDLEtBQUEsc0RBQUFELEtBQUEsb0JBQUFoQixNQUFBLFFBQUFkLEdBQUEsU0FBQWdDLFVBQUEsV0FBQXJDLE9BQUEsQ0FBQW1CLE1BQUEsR0FBQUEsTUFBQSxFQUFBbkIsT0FBQSxDQUFBSyxHQUFBLEdBQUFBLEdBQUEsVUFBQWlDLFFBQUEsR0FBQXRDLE9BQUEsQ0FBQXNDLFFBQUEsTUFBQUEsUUFBQSxRQUFBQyxjQUFBLEdBQUFDLG1CQUFBLENBQUFGLFFBQUEsRUFBQXRDLE9BQUEsT0FBQXVDLGNBQUEsUUFBQUEsY0FBQSxLQUFBL0IsZ0JBQUEsbUJBQUErQixjQUFBLHFCQUFBdkMsT0FBQSxDQUFBbUIsTUFBQSxFQUFBbkIsT0FBQSxDQUFBeUMsSUFBQSxHQUFBekMsT0FBQSxDQUFBMEMsS0FBQSxHQUFBMUMsT0FBQSxDQUFBSyxHQUFBLHNCQUFBTCxPQUFBLENBQUFtQixNQUFBLDZCQUFBZ0IsS0FBQSxRQUFBQSxLQUFBLGdCQUFBbkMsT0FBQSxDQUFBSyxHQUFBLEVBQUFMLE9BQUEsQ0FBQTJDLGlCQUFBLENBQUEzQyxPQUFBLENBQUFLLEdBQUEsdUJBQUFMLE9BQUEsQ0FBQW1CLE1BQUEsSUFBQW5CLE9BQUEsQ0FBQTRDLE1BQUEsV0FBQTVDLE9BQUEsQ0FBQUssR0FBQSxHQUFBOEIsS0FBQSxvQkFBQVQsTUFBQSxHQUFBdkIsUUFBQSxDQUFBWCxPQUFBLEVBQUFFLElBQUEsRUFBQU0sT0FBQSxvQkFBQTBCLE1BQUEsQ0FBQXBCLElBQUEsUUFBQTZCLEtBQUEsR0FBQW5DLE9BQUEsQ0FBQTZDLElBQUEsbUNBQUFuQixNQUFBLENBQUFyQixHQUFBLEtBQUFHLGdCQUFBLHFCQUFBL0IsS0FBQSxFQUFBaUQsTUFBQSxDQUFBckIsR0FBQSxFQUFBd0MsSUFBQSxFQUFBN0MsT0FBQSxDQUFBNkMsSUFBQSxrQkFBQW5CLE1BQUEsQ0FBQXBCLElBQUEsS0FBQTZCLEtBQUEsZ0JBQUFuQyxPQUFBLENBQUFtQixNQUFBLFlBQUFuQixPQUFBLENBQUFLLEdBQUEsR0FBQXFCLE1BQUEsQ0FBQXJCLEdBQUEsbUJBQUFtQyxvQkFBQUYsUUFBQSxFQUFBdEMsT0FBQSxRQUFBOEMsVUFBQSxHQUFBOUMsT0FBQSxDQUFBbUIsTUFBQSxFQUFBQSxNQUFBLEdBQUFtQixRQUFBLENBQUF6RCxRQUFBLENBQUFpRSxVQUFBLE9BQUFDLFNBQUEsS0FBQTVCLE1BQUEsU0FBQW5CLE9BQUEsQ0FBQXNDLFFBQUEscUJBQUFRLFVBQUEsSUFBQVIsUUFBQSxDQUFBekQsUUFBQSxlQUFBbUIsT0FBQSxDQUFBbUIsTUFBQSxhQUFBbkIsT0FBQSxDQUFBSyxHQUFBLEdBQUEwQyxTQUFBLEVBQUFQLG1CQUFBLENBQUFGLFFBQUEsRUFBQXRDLE9BQUEsZUFBQUEsT0FBQSxDQUFBbUIsTUFBQSxrQkFBQTJCLFVBQUEsS0FBQTlDLE9BQUEsQ0FBQW1CLE1BQUEsWUFBQW5CLE9BQUEsQ0FBQUssR0FBQSxPQUFBMkMsU0FBQSx1Q0FBQUYsVUFBQSxpQkFBQXRDLGdCQUFBLE1BQUFrQixNQUFBLEdBQUF2QixRQUFBLENBQUFnQixNQUFBLEVBQUFtQixRQUFBLENBQUF6RCxRQUFBLEVBQUFtQixPQUFBLENBQUFLLEdBQUEsbUJBQUFxQixNQUFBLENBQUFwQixJQUFBLFNBQUFOLE9BQUEsQ0FBQW1CLE1BQUEsWUFBQW5CLE9BQUEsQ0FBQUssR0FBQSxHQUFBcUIsTUFBQSxDQUFBckIsR0FBQSxFQUFBTCxPQUFBLENBQUFzQyxRQUFBLFNBQUE5QixnQkFBQSxNQUFBeUMsSUFBQSxHQUFBdkIsTUFBQSxDQUFBckIsR0FBQSxTQUFBNEMsSUFBQSxHQUFBQSxJQUFBLENBQUFKLElBQUEsSUFBQTdDLE9BQUEsQ0FBQXNDLFFBQUEsQ0FBQVksVUFBQSxJQUFBRCxJQUFBLENBQUF4RSxLQUFBLEVBQUF1QixPQUFBLENBQUFtRCxJQUFBLEdBQUFiLFFBQUEsQ0FBQWMsT0FBQSxlQUFBcEQsT0FBQSxDQUFBbUIsTUFBQSxLQUFBbkIsT0FBQSxDQUFBbUIsTUFBQSxXQUFBbkIsT0FBQSxDQUFBSyxHQUFBLEdBQUEwQyxTQUFBLEdBQUEvQyxPQUFBLENBQUFzQyxRQUFBLFNBQUE5QixnQkFBQSxJQUFBeUMsSUFBQSxJQUFBakQsT0FBQSxDQUFBbUIsTUFBQSxZQUFBbkIsT0FBQSxDQUFBSyxHQUFBLE9BQUEyQyxTQUFBLHNDQUFBaEQsT0FBQSxDQUFBc0MsUUFBQSxTQUFBOUIsZ0JBQUEsY0FBQTZDLGFBQUFDLElBQUEsUUFBQUMsS0FBQSxLQUFBQyxNQUFBLEVBQUFGLElBQUEsWUFBQUEsSUFBQSxLQUFBQyxLQUFBLENBQUFFLFFBQUEsR0FBQUgsSUFBQSxXQUFBQSxJQUFBLEtBQUFDLEtBQUEsQ0FBQUcsVUFBQSxHQUFBSixJQUFBLEtBQUFDLEtBQUEsQ0FBQUksUUFBQSxHQUFBTCxJQUFBLFdBQUFNLFVBQUEsQ0FBQUMsSUFBQSxDQUFBTixLQUFBLGNBQUFPLGNBQUFQLEtBQUEsUUFBQTdCLE1BQUEsR0FBQTZCLEtBQUEsQ0FBQVEsVUFBQSxRQUFBckMsTUFBQSxDQUFBcEIsSUFBQSxvQkFBQW9CLE1BQUEsQ0FBQXJCLEdBQUEsRUFBQWtELEtBQUEsQ0FBQVEsVUFBQSxHQUFBckMsTUFBQSxhQUFBekIsUUFBQU4sV0FBQSxTQUFBaUUsVUFBQSxNQUFBSixNQUFBLGFBQUE3RCxXQUFBLENBQUF1QixPQUFBLENBQUFtQyxZQUFBLGNBQUFXLEtBQUEsaUJBQUFqRCxPQUFBa0QsUUFBQSxRQUFBQSxRQUFBLFFBQUFDLGNBQUEsR0FBQUQsUUFBQSxDQUFBckYsY0FBQSxPQUFBc0YsY0FBQSxTQUFBQSxjQUFBLENBQUEzRCxJQUFBLENBQUEwRCxRQUFBLDRCQUFBQSxRQUFBLENBQUFkLElBQUEsU0FBQWMsUUFBQSxPQUFBRSxLQUFBLENBQUFGLFFBQUEsQ0FBQUcsTUFBQSxTQUFBQyxDQUFBLE9BQUFsQixJQUFBLFlBQUFBLEtBQUEsYUFBQWtCLENBQUEsR0FBQUosUUFBQSxDQUFBRyxNQUFBLE9BQUFqRyxNQUFBLENBQUFvQyxJQUFBLENBQUEwRCxRQUFBLEVBQUFJLENBQUEsVUFBQWxCLElBQUEsQ0FBQTFFLEtBQUEsR0FBQXdGLFFBQUEsQ0FBQUksQ0FBQSxHQUFBbEIsSUFBQSxDQUFBTixJQUFBLE9BQUFNLElBQUEsU0FBQUEsSUFBQSxDQUFBMUUsS0FBQSxHQUFBc0UsU0FBQSxFQUFBSSxJQUFBLENBQUFOLElBQUEsT0FBQU0sSUFBQSxZQUFBQSxJQUFBLENBQUFBLElBQUEsR0FBQUEsSUFBQSxlQUFBQSxJQUFBLEVBQUFkLFVBQUEsZUFBQUEsV0FBQSxhQUFBNUQsS0FBQSxFQUFBc0UsU0FBQSxFQUFBRixJQUFBLGlCQUFBcEMsaUJBQUEsQ0FBQXZDLFNBQUEsR0FBQXdDLDBCQUFBLEVBQUFyQyxjQUFBLENBQUEyQyxFQUFBLG1CQUFBdkMsS0FBQSxFQUFBaUMsMEJBQUEsRUFBQXRCLFlBQUEsU0FBQWYsY0FBQSxDQUFBcUMsMEJBQUEsbUJBQUFqQyxLQUFBLEVBQUFnQyxpQkFBQSxFQUFBckIsWUFBQSxTQUFBcUIsaUJBQUEsQ0FBQTZELFdBQUEsR0FBQXBGLE1BQUEsQ0FBQXdCLDBCQUFBLEVBQUExQixpQkFBQSx3QkFBQWpCLE9BQUEsQ0FBQXdHLG1CQUFBLGFBQUFDLE1BQUEsUUFBQUMsSUFBQSx3QkFBQUQsTUFBQSxJQUFBQSxNQUFBLENBQUFFLFdBQUEsV0FBQUQsSUFBQSxLQUFBQSxJQUFBLEtBQUFoRSxpQkFBQSw2QkFBQWdFLElBQUEsQ0FBQUgsV0FBQSxJQUFBRyxJQUFBLENBQUFFLElBQUEsT0FBQTVHLE9BQUEsQ0FBQTZHLElBQUEsYUFBQUosTUFBQSxXQUFBdkcsTUFBQSxDQUFBNEcsY0FBQSxHQUFBNUcsTUFBQSxDQUFBNEcsY0FBQSxDQUFBTCxNQUFBLEVBQUE5RCwwQkFBQSxLQUFBOEQsTUFBQSxDQUFBTSxTQUFBLEdBQUFwRSwwQkFBQSxFQUFBeEIsTUFBQSxDQUFBc0YsTUFBQSxFQUFBeEYsaUJBQUEseUJBQUF3RixNQUFBLENBQUF0RyxTQUFBLEdBQUFELE1BQUEsQ0FBQThCLE1BQUEsQ0FBQWlCLEVBQUEsR0FBQXdELE1BQUEsS0FBQXpHLE9BQUEsQ0FBQWdILEtBQUEsYUFBQTFFLEdBQUEsYUFBQXdCLE9BQUEsRUFBQXhCLEdBQUEsT0FBQVkscUJBQUEsQ0FBQUksYUFBQSxDQUFBbkQsU0FBQSxHQUFBZ0IsTUFBQSxDQUFBbUMsYUFBQSxDQUFBbkQsU0FBQSxFQUFBWSxtQkFBQSxpQ0FBQWYsT0FBQSxDQUFBc0QsYUFBQSxHQUFBQSxhQUFBLEVBQUF0RCxPQUFBLENBQUFpSCxLQUFBLGFBQUF4RixPQUFBLEVBQUFDLE9BQUEsRUFBQUMsSUFBQSxFQUFBQyxXQUFBLEVBQUEyQixXQUFBLGVBQUFBLFdBQUEsS0FBQUEsV0FBQSxHQUFBMkQsT0FBQSxPQUFBQyxJQUFBLE9BQUE3RCxhQUFBLENBQUE5QixJQUFBLENBQUFDLE9BQUEsRUFBQUMsT0FBQSxFQUFBQyxJQUFBLEVBQUFDLFdBQUEsR0FBQTJCLFdBQUEsVUFBQXZELE9BQUEsQ0FBQXdHLG1CQUFBLENBQUE5RSxPQUFBLElBQUF5RixJQUFBLEdBQUFBLElBQUEsQ0FBQS9CLElBQUEsR0FBQXJCLElBQUEsV0FBQUgsTUFBQSxXQUFBQSxNQUFBLENBQUFrQixJQUFBLEdBQUFsQixNQUFBLENBQUFsRCxLQUFBLEdBQUF5RyxJQUFBLENBQUEvQixJQUFBLFdBQUFsQyxxQkFBQSxDQUFBRCxFQUFBLEdBQUE5QixNQUFBLENBQUE4QixFQUFBLEVBQUFoQyxpQkFBQSxnQkFBQUUsTUFBQSxDQUFBOEIsRUFBQSxFQUFBcEMsY0FBQSxpQ0FBQU0sTUFBQSxDQUFBOEIsRUFBQSw2REFBQWpELE9BQUEsQ0FBQW9ILElBQUEsYUFBQUMsR0FBQSxRQUFBQyxNQUFBLEdBQUFwSCxNQUFBLENBQUFtSCxHQUFBLEdBQUFELElBQUEsZ0JBQUE1RyxHQUFBLElBQUE4RyxNQUFBLEVBQUFGLElBQUEsQ0FBQXRCLElBQUEsQ0FBQXRGLEdBQUEsVUFBQTRHLElBQUEsQ0FBQUcsT0FBQSxhQUFBbkMsS0FBQSxXQUFBZ0MsSUFBQSxDQUFBZixNQUFBLFNBQUE3RixHQUFBLEdBQUE0RyxJQUFBLENBQUFJLEdBQUEsUUFBQWhILEdBQUEsSUFBQThHLE1BQUEsU0FBQWxDLElBQUEsQ0FBQTFFLEtBQUEsR0FBQUYsR0FBQSxFQUFBNEUsSUFBQSxDQUFBTixJQUFBLE9BQUFNLElBQUEsV0FBQUEsSUFBQSxDQUFBTixJQUFBLE9BQUFNLElBQUEsUUFBQXBGLE9BQUEsQ0FBQWdELE1BQUEsR0FBQUEsTUFBQSxFQUFBZCxPQUFBLENBQUEvQixTQUFBLEtBQUF3RyxXQUFBLEVBQUF6RSxPQUFBLEVBQUErRCxLQUFBLFdBQUFBLE1BQUF3QixhQUFBLGFBQUFDLElBQUEsV0FBQXRDLElBQUEsV0FBQVYsSUFBQSxRQUFBQyxLQUFBLEdBQUFLLFNBQUEsT0FBQUYsSUFBQSxZQUFBUCxRQUFBLGNBQUFuQixNQUFBLGdCQUFBZCxHQUFBLEdBQUEwQyxTQUFBLE9BQUFhLFVBQUEsQ0FBQTFDLE9BQUEsQ0FBQTRDLGFBQUEsSUFBQTBCLGFBQUEsV0FBQWIsSUFBQSxrQkFBQUEsSUFBQSxDQUFBZSxNQUFBLE9BQUF2SCxNQUFBLENBQUFvQyxJQUFBLE9BQUFvRSxJQUFBLE1BQUFSLEtBQUEsRUFBQVEsSUFBQSxDQUFBZ0IsS0FBQSxjQUFBaEIsSUFBQSxJQUFBNUIsU0FBQSxNQUFBNkMsSUFBQSxXQUFBQSxLQUFBLFNBQUEvQyxJQUFBLFdBQUFnRCxVQUFBLFFBQUFqQyxVQUFBLElBQUFHLFVBQUEsa0JBQUE4QixVQUFBLENBQUF2RixJQUFBLFFBQUF1RixVQUFBLENBQUF4RixHQUFBLGNBQUF5RixJQUFBLEtBQUFuRCxpQkFBQSxXQUFBQSxrQkFBQW9ELFNBQUEsYUFBQWxELElBQUEsUUFBQWtELFNBQUEsTUFBQS9GLE9BQUEsa0JBQUFnRyxPQUFBQyxHQUFBLEVBQUFDLE1BQUEsV0FBQXhFLE1BQUEsQ0FBQXBCLElBQUEsWUFBQW9CLE1BQUEsQ0FBQXJCLEdBQUEsR0FBQTBGLFNBQUEsRUFBQS9GLE9BQUEsQ0FBQW1ELElBQUEsR0FBQThDLEdBQUEsRUFBQUMsTUFBQSxLQUFBbEcsT0FBQSxDQUFBbUIsTUFBQSxXQUFBbkIsT0FBQSxDQUFBSyxHQUFBLEdBQUEwQyxTQUFBLEtBQUFtRCxNQUFBLGFBQUE3QixDQUFBLFFBQUFULFVBQUEsQ0FBQVEsTUFBQSxNQUFBQyxDQUFBLFNBQUFBLENBQUEsUUFBQWQsS0FBQSxRQUFBSyxVQUFBLENBQUFTLENBQUEsR0FBQTNDLE1BQUEsR0FBQTZCLEtBQUEsQ0FBQVEsVUFBQSxpQkFBQVIsS0FBQSxDQUFBQyxNQUFBLFNBQUF3QyxNQUFBLGFBQUF6QyxLQUFBLENBQUFDLE1BQUEsU0FBQWlDLElBQUEsUUFBQVUsUUFBQSxHQUFBaEksTUFBQSxDQUFBb0MsSUFBQSxDQUFBZ0QsS0FBQSxlQUFBNkMsVUFBQSxHQUFBakksTUFBQSxDQUFBb0MsSUFBQSxDQUFBZ0QsS0FBQSxxQkFBQTRDLFFBQUEsSUFBQUMsVUFBQSxhQUFBWCxJQUFBLEdBQUFsQyxLQUFBLENBQUFFLFFBQUEsU0FBQXVDLE1BQUEsQ0FBQXpDLEtBQUEsQ0FBQUUsUUFBQSxnQkFBQWdDLElBQUEsR0FBQWxDLEtBQUEsQ0FBQUcsVUFBQSxTQUFBc0MsTUFBQSxDQUFBekMsS0FBQSxDQUFBRyxVQUFBLGNBQUF5QyxRQUFBLGFBQUFWLElBQUEsR0FBQWxDLEtBQUEsQ0FBQUUsUUFBQSxTQUFBdUMsTUFBQSxDQUFBekMsS0FBQSxDQUFBRSxRQUFBLHFCQUFBMkMsVUFBQSxZQUFBaEUsS0FBQSxxREFBQXFELElBQUEsR0FBQWxDLEtBQUEsQ0FBQUcsVUFBQSxTQUFBc0MsTUFBQSxDQUFBekMsS0FBQSxDQUFBRyxVQUFBLFlBQUFkLE1BQUEsV0FBQUEsT0FBQXRDLElBQUEsRUFBQUQsR0FBQSxhQUFBZ0UsQ0FBQSxRQUFBVCxVQUFBLENBQUFRLE1BQUEsTUFBQUMsQ0FBQSxTQUFBQSxDQUFBLFFBQUFkLEtBQUEsUUFBQUssVUFBQSxDQUFBUyxDQUFBLE9BQUFkLEtBQUEsQ0FBQUMsTUFBQSxTQUFBaUMsSUFBQSxJQUFBdEgsTUFBQSxDQUFBb0MsSUFBQSxDQUFBZ0QsS0FBQSx3QkFBQWtDLElBQUEsR0FBQWxDLEtBQUEsQ0FBQUcsVUFBQSxRQUFBMkMsWUFBQSxHQUFBOUMsS0FBQSxhQUFBOEMsWUFBQSxpQkFBQS9GLElBQUEsbUJBQUFBLElBQUEsS0FBQStGLFlBQUEsQ0FBQTdDLE1BQUEsSUFBQW5ELEdBQUEsSUFBQUEsR0FBQSxJQUFBZ0csWUFBQSxDQUFBM0MsVUFBQSxLQUFBMkMsWUFBQSxjQUFBM0UsTUFBQSxHQUFBMkUsWUFBQSxHQUFBQSxZQUFBLENBQUF0QyxVQUFBLGNBQUFyQyxNQUFBLENBQUFwQixJQUFBLEdBQUFBLElBQUEsRUFBQW9CLE1BQUEsQ0FBQXJCLEdBQUEsR0FBQUEsR0FBQSxFQUFBZ0csWUFBQSxTQUFBbEYsTUFBQSxnQkFBQWdDLElBQUEsR0FBQWtELFlBQUEsQ0FBQTNDLFVBQUEsRUFBQWxELGdCQUFBLFNBQUE4RixRQUFBLENBQUE1RSxNQUFBLE1BQUE0RSxRQUFBLFdBQUFBLFNBQUE1RSxNQUFBLEVBQUFpQyxRQUFBLG9CQUFBakMsTUFBQSxDQUFBcEIsSUFBQSxRQUFBb0IsTUFBQSxDQUFBckIsR0FBQSxxQkFBQXFCLE1BQUEsQ0FBQXBCLElBQUEsbUJBQUFvQixNQUFBLENBQUFwQixJQUFBLFFBQUE2QyxJQUFBLEdBQUF6QixNQUFBLENBQUFyQixHQUFBLGdCQUFBcUIsTUFBQSxDQUFBcEIsSUFBQSxTQUFBd0YsSUFBQSxRQUFBekYsR0FBQSxHQUFBcUIsTUFBQSxDQUFBckIsR0FBQSxPQUFBYyxNQUFBLGtCQUFBZ0MsSUFBQSx5QkFBQXpCLE1BQUEsQ0FBQXBCLElBQUEsSUFBQXFELFFBQUEsVUFBQVIsSUFBQSxHQUFBUSxRQUFBLEdBQUFuRCxnQkFBQSxLQUFBK0YsTUFBQSxXQUFBQSxPQUFBN0MsVUFBQSxhQUFBVyxDQUFBLFFBQUFULFVBQUEsQ0FBQVEsTUFBQSxNQUFBQyxDQUFBLFNBQUFBLENBQUEsUUFBQWQsS0FBQSxRQUFBSyxVQUFBLENBQUFTLENBQUEsT0FBQWQsS0FBQSxDQUFBRyxVQUFBLEtBQUFBLFVBQUEsY0FBQTRDLFFBQUEsQ0FBQS9DLEtBQUEsQ0FBQVEsVUFBQSxFQUFBUixLQUFBLENBQUFJLFFBQUEsR0FBQUcsYUFBQSxDQUFBUCxLQUFBLEdBQUEvQyxnQkFBQSx5QkFBQWdHLE9BQUFoRCxNQUFBLGFBQUFhLENBQUEsUUFBQVQsVUFBQSxDQUFBUSxNQUFBLE1BQUFDLENBQUEsU0FBQUEsQ0FBQSxRQUFBZCxLQUFBLFFBQUFLLFVBQUEsQ0FBQVMsQ0FBQSxPQUFBZCxLQUFBLENBQUFDLE1BQUEsS0FBQUEsTUFBQSxRQUFBOUIsTUFBQSxHQUFBNkIsS0FBQSxDQUFBUSxVQUFBLGtCQUFBckMsTUFBQSxDQUFBcEIsSUFBQSxRQUFBbUcsTUFBQSxHQUFBL0UsTUFBQSxDQUFBckIsR0FBQSxFQUFBeUQsYUFBQSxDQUFBUCxLQUFBLFlBQUFrRCxNQUFBLGdCQUFBckUsS0FBQSw4QkFBQXNFLGFBQUEsV0FBQUEsY0FBQXpDLFFBQUEsRUFBQWYsVUFBQSxFQUFBRSxPQUFBLGdCQUFBZCxRQUFBLEtBQUF6RCxRQUFBLEVBQUFrQyxNQUFBLENBQUFrRCxRQUFBLEdBQUFmLFVBQUEsRUFBQUEsVUFBQSxFQUFBRSxPQUFBLEVBQUFBLE9BQUEsb0JBQUFqQyxNQUFBLFVBQUFkLEdBQUEsR0FBQTBDLFNBQUEsR0FBQXZDLGdCQUFBLE9BQUF6QyxPQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQUE0SSxtQkFBQUMsR0FBQSxFQUFBcEYsT0FBQSxFQUFBQyxNQUFBLEVBQUFvRixLQUFBLEVBQUFDLE1BQUEsRUFBQXZJLEdBQUEsRUFBQThCLEdBQUEsY0FBQTRDLElBQUEsR0FBQTJELEdBQUEsQ0FBQXJJLEdBQUEsRUFBQThCLEdBQUEsT0FBQTVCLEtBQUEsR0FBQXdFLElBQUEsQ0FBQXhFLEtBQUEsV0FBQXVELEtBQUEsSUFBQVAsTUFBQSxDQUFBTyxLQUFBLGlCQUFBaUIsSUFBQSxDQUFBSixJQUFBLElBQUFyQixPQUFBLENBQUEvQyxLQUFBLFlBQUF3RyxPQUFBLENBQUF6RCxPQUFBLENBQUEvQyxLQUFBLEVBQUFxRCxJQUFBLENBQUErRSxLQUFBLEVBQUFDLE1BQUE7QUFBQSxTQUFBQyxrQkFBQTNHLEVBQUEsNkJBQUFWLElBQUEsU0FBQXNILElBQUEsR0FBQUMsU0FBQSxhQUFBaEMsT0FBQSxXQUFBekQsT0FBQSxFQUFBQyxNQUFBLFFBQUFtRixHQUFBLEdBQUF4RyxFQUFBLENBQUE4RyxLQUFBLENBQUF4SCxJQUFBLEVBQUFzSCxJQUFBLFlBQUFILE1BQUFwSSxLQUFBLElBQUFrSSxrQkFBQSxDQUFBQyxHQUFBLEVBQUFwRixPQUFBLEVBQUFDLE1BQUEsRUFBQW9GLEtBQUEsRUFBQUMsTUFBQSxVQUFBckksS0FBQSxjQUFBcUksT0FBQXhILEdBQUEsSUFBQXFILGtCQUFBLENBQUFDLEdBQUEsRUFBQXBGLE9BQUEsRUFBQUMsTUFBQSxFQUFBb0YsS0FBQSxFQUFBQyxNQUFBLFdBQUF4SCxHQUFBLEtBQUF1SCxLQUFBLENBQUE5RCxTQUFBO0FBQUEsU0FBQW9FLGVBQUFDLEdBQUEsRUFBQS9DLENBQUEsV0FBQWdELGVBQUEsQ0FBQUQsR0FBQSxLQUFBRSxxQkFBQSxDQUFBRixHQUFBLEVBQUEvQyxDQUFBLEtBQUFrRCwyQkFBQSxDQUFBSCxHQUFBLEVBQUEvQyxDQUFBLEtBQUFtRCxnQkFBQTtBQUFBLFNBQUFBLGlCQUFBLGNBQUF4RSxTQUFBO0FBQUEsU0FBQXVFLDRCQUFBRSxDQUFBLEVBQUFDLE1BQUEsU0FBQUQsQ0FBQSxxQkFBQUEsQ0FBQSxzQkFBQUUsaUJBQUEsQ0FBQUYsQ0FBQSxFQUFBQyxNQUFBLE9BQUFFLENBQUEsR0FBQTNKLE1BQUEsQ0FBQUMsU0FBQSxDQUFBMkosUUFBQSxDQUFBdEgsSUFBQSxDQUFBa0gsQ0FBQSxFQUFBOUIsS0FBQSxhQUFBaUMsQ0FBQSxpQkFBQUgsQ0FBQSxDQUFBL0MsV0FBQSxFQUFBa0QsQ0FBQSxHQUFBSCxDQUFBLENBQUEvQyxXQUFBLENBQUFDLElBQUEsTUFBQWlELENBQUEsY0FBQUEsQ0FBQSxtQkFBQUUsS0FBQSxDQUFBQyxJQUFBLENBQUFOLENBQUEsT0FBQUcsQ0FBQSwrREFBQUksSUFBQSxDQUFBSixDQUFBLFVBQUFELGlCQUFBLENBQUFGLENBQUEsRUFBQUMsTUFBQTtBQUFBLFNBQUFDLGtCQUFBUCxHQUFBLEVBQUFhLEdBQUEsUUFBQUEsR0FBQSxZQUFBQSxHQUFBLEdBQUFiLEdBQUEsQ0FBQWhELE1BQUEsRUFBQTZELEdBQUEsR0FBQWIsR0FBQSxDQUFBaEQsTUFBQSxXQUFBQyxDQUFBLE1BQUE2RCxJQUFBLE9BQUFKLEtBQUEsQ0FBQUcsR0FBQSxHQUFBNUQsQ0FBQSxHQUFBNEQsR0FBQSxFQUFBNUQsQ0FBQSxJQUFBNkQsSUFBQSxDQUFBN0QsQ0FBQSxJQUFBK0MsR0FBQSxDQUFBL0MsQ0FBQSxVQUFBNkQsSUFBQTtBQUFBLFNBQUFaLHNCQUFBRixHQUFBLEVBQUEvQyxDQUFBLFFBQUE4RCxFQUFBLFdBQUFmLEdBQUEsZ0NBQUF6SSxNQUFBLElBQUF5SSxHQUFBLENBQUF6SSxNQUFBLENBQUFFLFFBQUEsS0FBQXVJLEdBQUEsNEJBQUFlLEVBQUEsUUFBQUMsRUFBQSxFQUFBQyxFQUFBLEVBQUFDLEVBQUEsRUFBQUMsRUFBQSxFQUFBQyxJQUFBLE9BQUFDLEVBQUEsT0FBQUMsRUFBQSxpQkFBQUosRUFBQSxJQUFBSCxFQUFBLEdBQUFBLEVBQUEsQ0FBQTVILElBQUEsQ0FBQTZHLEdBQUEsR0FBQWpFLElBQUEsUUFBQWtCLENBQUEsUUFBQXBHLE1BQUEsQ0FBQWtLLEVBQUEsTUFBQUEsRUFBQSxVQUFBTSxFQUFBLHVCQUFBQSxFQUFBLElBQUFMLEVBQUEsR0FBQUUsRUFBQSxDQUFBL0gsSUFBQSxDQUFBNEgsRUFBQSxHQUFBdEYsSUFBQSxNQUFBMkYsSUFBQSxDQUFBM0UsSUFBQSxDQUFBdUUsRUFBQSxDQUFBM0osS0FBQSxHQUFBK0osSUFBQSxDQUFBcEUsTUFBQSxLQUFBQyxDQUFBLEdBQUFvRSxFQUFBLGlCQUFBbkosR0FBQSxJQUFBb0osRUFBQSxPQUFBTCxFQUFBLEdBQUEvSSxHQUFBLHlCQUFBbUosRUFBQSxZQUFBTixFQUFBLGVBQUFJLEVBQUEsR0FBQUosRUFBQSxjQUFBbEssTUFBQSxDQUFBc0ssRUFBQSxNQUFBQSxFQUFBLDJCQUFBRyxFQUFBLFFBQUFMLEVBQUEsYUFBQUcsSUFBQTtBQUFBLFNBQUFuQixnQkFBQUQsR0FBQSxRQUFBVSxLQUFBLENBQUFhLE9BQUEsQ0FBQXZCLEdBQUEsVUFBQUEsR0FBQTtBQUR3QztBQUNnQjtBQUNMO0FBQ21CO0FBQ2I7QUFDQTtBQUNXO0FBQ2xCO0FBQ3RCO0FBRXJCLElBQU1rUixxQkFBcUIsR0FBRyxTQUF4QkEscUJBQXFCQSxDQUFBcFAsSUFBQSxFQUE0QjtFQUFBLElBQXZCc0MsRUFBRSxHQUFBdEMsSUFBQSxDQUFGc0MsRUFBRTtJQUFFK00sYUFBYSxHQUFBclAsSUFBQSxDQUFicVAsYUFBYTtFQUVwRCxJQUFBQyxZQUFBLEdBQWdFSiwyRUFBVyxDQUFDLHNCQUFzQixHQUFDNU0sRUFBRSxHQUFDLGVBQWUsRUFBRSxNQUFNLENBQUM7SUFBdkhpTixRQUFRLEdBQUFELFlBQUEsQ0FBUkMsUUFBUTtJQUFFQyxPQUFPLEdBQUFGLFlBQUEsQ0FBUEUsT0FBTztJQUFFMVcsS0FBSyxHQUFBd1csWUFBQSxDQUFMeFcsS0FBSztJQUFFaUIsSUFBSSxHQUFBdVYsWUFBQSxDQUFKdlYsSUFBSTtJQUFFMFYsU0FBUyxHQUFBSCxZQUFBLENBQVRHLFNBQVM7SUFBRUMsVUFBVSxHQUFBSixZQUFBLENBQVZJLFVBQVU7RUFFNUQsSUFBQWxQLFNBQUEsR0FBNEJiLGdEQUFRLENBQUMwUCxhQUFhLENBQUM7SUFBQTVPLFVBQUEsR0FBQXhDLGNBQUEsQ0FBQXVDLFNBQUE7SUFBNUNtUCxNQUFNLEdBQUFsUCxVQUFBO0lBQUVtUCxTQUFTLEdBQUFuUCxVQUFBO0VBRXhCLElBQUFOLGFBQUEsR0FBOENQLDZFQUFZLENBQUMsS0FBSyxDQUFDO0lBQUFRLGNBQUEsR0FBQW5DLGNBQUEsQ0FBQWtDLGFBQUE7SUFBMUQwUCxVQUFVLEdBQUF6UCxjQUFBO0lBQUUwUCxVQUFVLEdBQUExUCxjQUFBO0lBQUUyUCxXQUFXLEdBQUEzUCxjQUFBO0VBRTFDLElBQU00UCxnQkFBZ0IsR0FBRyxTQUFuQkEsZ0JBQWdCQSxDQUFBLEVBQVM7SUFDM0JOLFVBQVUsRUFBRTtJQUNaRCxTQUFTLEVBQUU7SUFDWEssVUFBVSxFQUFFO0VBQ2hCLENBQUM7RUFFRCxJQUFNdk8sWUFBWTtJQUFBLElBQUFDLEtBQUEsR0FBQTNELGlCQUFBLGVBQUFqSixtQkFBQSxHQUFBOEcsSUFBQSxDQUFHLFNBQUErRixRQUFPTCxDQUFDO01BQUEsSUFBQTZPLElBQUEsRUFBQTFILFFBQUEsRUFBQTJILFNBQUEsRUFBQUMsUUFBQTtNQUFBLE9BQUF2YixtQkFBQSxHQUFBeUIsSUFBQSxVQUFBcUwsU0FBQUMsUUFBQTtRQUFBLGtCQUFBQSxRQUFBLENBQUFwRixJQUFBLEdBQUFvRixRQUFBLENBQUExSCxJQUFBO1VBQUE7WUFDekJtSCxDQUFDLENBQUNDLGNBQWMsRUFBRTtZQUFDLElBQ2YrTyxPQUFPLENBQUMsbURBQW1ELENBQUM7Y0FBQXpPLFFBQUEsQ0FBQTFILElBQUE7Y0FBQTtZQUFBO1lBQUEsT0FBQTBILFFBQUEsQ0FBQWpJLE1BQUE7VUFBQTtZQUcxRHVXLElBQUksR0FBRzdPLENBQUMsQ0FBQ2lQLGFBQWE7WUFDdEI5SCxRQUFRLEdBQUcsSUFBSStILFFBQVEsQ0FBQ0wsSUFBSSxDQUFDO1lBQzdCQyxTQUFTLEdBQUczSCxRQUFRLENBQUNnSSxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUM1UixRQUFRLEVBQUU7WUFBQSxNQUVoRHVSLFNBQVMsS0FBS3JCLHVFQUFzQjtjQUFBbE4sUUFBQSxDQUFBMUgsSUFBQTtjQUFBO1lBQUE7WUFDN0JrVyxRQUFRLEdBQUdNLE1BQU0sQ0FBQ0MsTUFBTSxDQUFDLDJCQUEyQixDQUFDO1lBQUEvTyxRQUFBLENBQUExSCxJQUFBO1lBQUEsT0FDckQwUyx5REFBUSxDQUFDLHNCQUFzQixHQUFDckssRUFBRSxHQUFDLGNBQWMsRUFBRTtjQUNyRHJLLE1BQU0sRUFBRSxNQUFNO2NBQ2QwWSxJQUFJLEVBQUV2SCxJQUFJLENBQUNJLFNBQVMsQ0FBQzJHLFFBQVE7WUFDakMsQ0FBQyxDQUFDO1VBQUE7WUFBQXhPLFFBQUEsQ0FBQTFILElBQUE7WUFBQSxPQUdBc1YsUUFBUSxDQUFDVyxTQUFTLEVBQUUsVUFBQ1UsV0FBVyxFQUFLO2NBQ3ZDaEIsU0FBUyxDQUFDTSxTQUFTLENBQUM7WUFDeEIsQ0FBQyxDQUFDO1VBQUE7WUFDRkgsV0FBVyxFQUFFO1lBQ2JjLG1CQUFtQixFQUFFO1VBQUM7VUFBQTtZQUFBLE9BQUFsUCxRQUFBLENBQUFqRixJQUFBO1FBQUE7TUFBQSxHQUFBK0UsT0FBQTtJQUFBLENBQ3pCO0lBQUEsZ0JBdEJLRixZQUFZQSxDQUFBUyxHQUFBO01BQUEsT0FBQVIsS0FBQSxDQUFBeEQsS0FBQSxPQUFBRCxTQUFBO0lBQUE7RUFBQSxHQXNCakI7RUFFRCxJQUFNK1MsWUFBWSxHQUFHLFNBQWZBLFlBQVlBLENBQUEsRUFBUztJQUN2QmYsV0FBVyxFQUFFO0lBQ2JjLG1CQUFtQixFQUFFO0VBQ3pCLENBQUM7RUFFRCxJQUFBRSxjQUFBLEdBQXNFblIsNkVBQVksQ0FBQyxLQUFLLENBQUM7SUFBQW9SLGNBQUEsR0FBQS9TLGNBQUEsQ0FBQThTLGNBQUE7SUFBbEZFLGtCQUFrQixHQUFBRCxjQUFBO0lBQUVFLGtCQUFrQixHQUFBRixjQUFBO0lBQUVILG1CQUFtQixHQUFBRyxjQUFBO0VBQ2xFLElBQU03UCxZQUFZLEdBQUcsU0FBZkEsWUFBWUEsQ0FBR0MsQ0FBQyxFQUFJO0lBQ3RCLElBQUdBLENBQUMsQ0FBQ2lQLGFBQWEsQ0FBQzlhLEtBQUssS0FBS29hLE1BQU0sRUFBRTtNQUNqQ3VCLGtCQUFrQixFQUFFO0lBQ3hCLENBQUMsTUFBTTtNQUNITCxtQkFBbUIsRUFBRTtJQUN6QjtFQUNKLENBQUM7RUFFRCxJQUFHaEIsVUFBVSxFQUFFO0lBQ1gsb0JBQ0luUSwyREFBQSxDQUFBQSx3REFBQSxRQUVROFAsT0FBTyxnQkFFUDlQLDJEQUFBO01BQUswQyxTQUFTLEVBQUM7SUFBaUIsR0FBQyxlQUFhLENBQU0sZ0JBR2hEMUMsMkRBQUE7TUFBTXlDLFFBQVEsRUFBRVosWUFBYTtNQUFDYSxTQUFTLEVBQUM7SUFBOEIsZ0JBQ2xFMUMsMkRBQUE7TUFBSzBDLFNBQVMsRUFBQztJQUFrQixnQkFDN0IxQywyREFBQSxDQUFDc1Asb0RBQU07TUFBQzVNLFNBQVMsRUFBQyxvQkFBb0I7TUFBQzNHLElBQUksRUFBQyxRQUFRO01BQUMwVixZQUFZLEVBQUV4QixNQUFPO01BQUNwTixRQUFRLEVBQUVwQjtJQUFhLEdBRTFGLENBQUMwTiwwRUFBeUIsRUFBRUEsdUVBQXNCLEVBQUVBLHVFQUFzQixFQUFFQSw0RUFBMkIsRUFBRUEsMkVBQTBCLENBQUMsQ0FBQy9FLEdBQUcsQ0FDcEksVUFBQzBILFlBQVksRUFBRUMsS0FBSztNQUFBLG9CQUFLL1IsMkRBQUEsQ0FBQ3FQLG9EQUFNO1FBQUMxWixHQUFHLEVBQUVvYyxLQUFNO1FBQUNsYyxLQUFLLEVBQUVpYztNQUFhLEdBQUVyQywyQ0FBQyxDQUFDcUMsWUFBWSxFQUFFO1FBQUNFLEVBQUUsRUFBRTtNQUFTLENBQUMsQ0FBQyxDQUFVO0lBQUEsRUFDaEgsQ0FFQSxDQUNQLGVBQ05oUywyREFBQTtNQUFLMEMsU0FBUyxFQUFDO0lBQXVDLEdBRTlDNk8sa0JBQWtCLGlCQUNkdlIsMkRBQUEsQ0FBQ3VQLDREQUFVO01BQUN6SyxlQUFlLEVBQUUsaUNBQWlDLElBQUlnTCxPQUFPLEdBQUcsV0FBVyxHQUFFLEVBQUUsQ0FBRTtNQUFDOU0sUUFBUSxFQUFFOE0sT0FBTyxLQUFLO0lBQUssR0FBQyxTQUUxSCxDQUNILGVBR0w5UCwyREFBQSxDQUFDb1Asc0RBQU07TUFBQ3RLLGVBQWUsRUFBQyxpREFBaUQ7TUFBQy9CLE9BQU8sRUFBRXFPO0lBQWEsR0FBQyxTQUFPLENBQVMsQ0FDL0csQ0FFYixDQUVOO0VBSVg7RUFFQSxvQkFDSXBSLDJEQUFBLENBQUFBLHdEQUFBLHFCQUNJQSwyREFBQTtJQUFLMEMsU0FBUyxFQUFDO0VBQThCLGdCQUN6QzFDLDJEQUFBO0lBQU0wQyxTQUFTLEVBQUM7RUFBUSxHQUNuQitNLDJDQUFDLENBQUNRLE1BQU0sRUFBRTtJQUFDK0IsRUFBRSxFQUFFO0VBQVMsQ0FBQyxDQUFDLENBQ3hCLGVBQ1BoUywyREFBQSxDQUFDb1Asc0RBQU07SUFBQ3RLLGVBQWUsRUFBQyxpQ0FBaUM7SUFBQy9CLE9BQU8sRUFBRXVOO0VBQWlCLEdBQUMsVUFBUSxDQUFTLENBQ3BHLEVBRUZsWCxLQUFLLGlCQUNENEcsMkRBQUE7SUFBSzBDLFNBQVMsRUFBQztFQUFrQixnQkFDN0IxQywyREFBQSxhQUVRNUcsS0FBSyxDQUFDZ1IsR0FBRyxDQUFDLFVBQUMxSSxDQUFDLEVBQUVxUSxLQUFLO0lBQUEsb0JBQUsvUiwyREFBQTtNQUFJckssR0FBRyxFQUFFb2M7SUFBTSxHQUFFclEsQ0FBQyxDQUFNO0VBQUEsRUFBQyxDQUVwRCxDQUVaLEVBR0RySCxJQUFJLGlCQUNBMkYsMkRBQUE7SUFBSzBDLFNBQVMsRUFBQztFQUFpQixHQUFFckksSUFBSSxDQUN6QyxDQUVOO0FBRVgsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsrQ0M5SEQscUpBQUFuRixtQkFBQSxZQUFBQSxvQkFBQSxXQUFBQyxPQUFBLFNBQUFBLE9BQUEsT0FBQUMsRUFBQSxHQUFBQyxNQUFBLENBQUFDLFNBQUEsRUFBQUMsTUFBQSxHQUFBSCxFQUFBLENBQUFJLGNBQUEsRUFBQUMsY0FBQSxHQUFBSixNQUFBLENBQUFJLGNBQUEsY0FBQUMsR0FBQSxFQUFBQyxHQUFBLEVBQUFDLElBQUEsSUFBQUYsR0FBQSxDQUFBQyxHQUFBLElBQUFDLElBQUEsQ0FBQUMsS0FBQSxLQUFBQyxPQUFBLHdCQUFBQyxNQUFBLEdBQUFBLE1BQUEsT0FBQUMsY0FBQSxHQUFBRixPQUFBLENBQUFHLFFBQUEsa0JBQUFDLG1CQUFBLEdBQUFKLE9BQUEsQ0FBQUssYUFBQSx1QkFBQUMsaUJBQUEsR0FBQU4sT0FBQSxDQUFBTyxXQUFBLDhCQUFBQyxPQUFBWixHQUFBLEVBQUFDLEdBQUEsRUFBQUUsS0FBQSxXQUFBUixNQUFBLENBQUFJLGNBQUEsQ0FBQUMsR0FBQSxFQUFBQyxHQUFBLElBQUFFLEtBQUEsRUFBQUEsS0FBQSxFQUFBVSxVQUFBLE1BQUFDLFlBQUEsTUFBQUMsUUFBQSxTQUFBZixHQUFBLENBQUFDLEdBQUEsV0FBQVcsTUFBQSxtQkFBQUksR0FBQSxJQUFBSixNQUFBLFlBQUFBLE9BQUFaLEdBQUEsRUFBQUMsR0FBQSxFQUFBRSxLQUFBLFdBQUFILEdBQUEsQ0FBQUMsR0FBQSxJQUFBRSxLQUFBLGdCQUFBYyxLQUFBQyxPQUFBLEVBQUFDLE9BQUEsRUFBQUMsSUFBQSxFQUFBQyxXQUFBLFFBQUFDLGNBQUEsR0FBQUgsT0FBQSxJQUFBQSxPQUFBLENBQUF2QixTQUFBLFlBQUEyQixTQUFBLEdBQUFKLE9BQUEsR0FBQUksU0FBQSxFQUFBQyxTQUFBLEdBQUE3QixNQUFBLENBQUE4QixNQUFBLENBQUFILGNBQUEsQ0FBQTFCLFNBQUEsR0FBQThCLE9BQUEsT0FBQUMsT0FBQSxDQUFBTixXQUFBLGdCQUFBdEIsY0FBQSxDQUFBeUIsU0FBQSxlQUFBckIsS0FBQSxFQUFBeUIsZ0JBQUEsQ0FBQVYsT0FBQSxFQUFBRSxJQUFBLEVBQUFNLE9BQUEsTUFBQUYsU0FBQSxhQUFBSyxTQUFBQyxFQUFBLEVBQUE5QixHQUFBLEVBQUErQixHQUFBLG1CQUFBQyxJQUFBLFlBQUFELEdBQUEsRUFBQUQsRUFBQSxDQUFBRyxJQUFBLENBQUFqQyxHQUFBLEVBQUErQixHQUFBLGNBQUFmLEdBQUEsYUFBQWdCLElBQUEsV0FBQUQsR0FBQSxFQUFBZixHQUFBLFFBQUF2QixPQUFBLENBQUF3QixJQUFBLEdBQUFBLElBQUEsTUFBQWlCLGdCQUFBLGdCQUFBWCxVQUFBLGNBQUFZLGtCQUFBLGNBQUFDLDJCQUFBLFNBQUFDLGlCQUFBLE9BQUF6QixNQUFBLENBQUF5QixpQkFBQSxFQUFBL0IsY0FBQSxxQ0FBQWdDLFFBQUEsR0FBQTNDLE1BQUEsQ0FBQTRDLGNBQUEsRUFBQUMsdUJBQUEsR0FBQUYsUUFBQSxJQUFBQSxRQUFBLENBQUFBLFFBQUEsQ0FBQUcsTUFBQSxRQUFBRCx1QkFBQSxJQUFBQSx1QkFBQSxLQUFBOUMsRUFBQSxJQUFBRyxNQUFBLENBQUFvQyxJQUFBLENBQUFPLHVCQUFBLEVBQUFsQyxjQUFBLE1BQUErQixpQkFBQSxHQUFBRyx1QkFBQSxPQUFBRSxFQUFBLEdBQUFOLDBCQUFBLENBQUF4QyxTQUFBLEdBQUEyQixTQUFBLENBQUEzQixTQUFBLEdBQUFELE1BQUEsQ0FBQThCLE1BQUEsQ0FBQVksaUJBQUEsWUFBQU0sc0JBQUEvQyxTQUFBLGdDQUFBZ0QsT0FBQSxXQUFBQyxNQUFBLElBQUFqQyxNQUFBLENBQUFoQixTQUFBLEVBQUFpRCxNQUFBLFlBQUFkLEdBQUEsZ0JBQUFlLE9BQUEsQ0FBQUQsTUFBQSxFQUFBZCxHQUFBLHNCQUFBZ0IsY0FBQXZCLFNBQUEsRUFBQXdCLFdBQUEsYUFBQUMsT0FBQUosTUFBQSxFQUFBZCxHQUFBLEVBQUFtQixPQUFBLEVBQUFDLE1BQUEsUUFBQUMsTUFBQSxHQUFBdkIsUUFBQSxDQUFBTCxTQUFBLENBQUFxQixNQUFBLEdBQUFyQixTQUFBLEVBQUFPLEdBQUEsbUJBQUFxQixNQUFBLENBQUFwQixJQUFBLFFBQUFxQixNQUFBLEdBQUFELE1BQUEsQ0FBQXJCLEdBQUEsRUFBQTVCLEtBQUEsR0FBQWtELE1BQUEsQ0FBQWxELEtBQUEsU0FBQUEsS0FBQSxnQkFBQW1ELE9BQUEsQ0FBQW5ELEtBQUEsS0FBQU4sTUFBQSxDQUFBb0MsSUFBQSxDQUFBOUIsS0FBQSxlQUFBNkMsV0FBQSxDQUFBRSxPQUFBLENBQUEvQyxLQUFBLENBQUFvRCxPQUFBLEVBQUFDLElBQUEsV0FBQXJELEtBQUEsSUFBQThDLE1BQUEsU0FBQTlDLEtBQUEsRUFBQStDLE9BQUEsRUFBQUMsTUFBQSxnQkFBQW5DLEdBQUEsSUFBQWlDLE1BQUEsVUFBQWpDLEdBQUEsRUFBQWtDLE9BQUEsRUFBQUMsTUFBQSxRQUFBSCxXQUFBLENBQUFFLE9BQUEsQ0FBQS9DLEtBQUEsRUFBQXFELElBQUEsV0FBQUMsU0FBQSxJQUFBSixNQUFBLENBQUFsRCxLQUFBLEdBQUFzRCxTQUFBLEVBQUFQLE9BQUEsQ0FBQUcsTUFBQSxnQkFBQUssS0FBQSxXQUFBVCxNQUFBLFVBQUFTLEtBQUEsRUFBQVIsT0FBQSxFQUFBQyxNQUFBLFNBQUFBLE1BQUEsQ0FBQUMsTUFBQSxDQUFBckIsR0FBQSxTQUFBNEIsZUFBQSxFQUFBNUQsY0FBQSxvQkFBQUksS0FBQSxXQUFBQSxNQUFBMEMsTUFBQSxFQUFBZCxHQUFBLGFBQUE2QiwyQkFBQSxlQUFBWixXQUFBLFdBQUFFLE9BQUEsRUFBQUMsTUFBQSxJQUFBRixNQUFBLENBQUFKLE1BQUEsRUFBQWQsR0FBQSxFQUFBbUIsT0FBQSxFQUFBQyxNQUFBLGdCQUFBUSxlQUFBLEdBQUFBLGVBQUEsR0FBQUEsZUFBQSxDQUFBSCxJQUFBLENBQUFJLDBCQUFBLEVBQUFBLDBCQUFBLElBQUFBLDBCQUFBLHFCQUFBaEMsaUJBQUFWLE9BQUEsRUFBQUUsSUFBQSxFQUFBTSxPQUFBLFFBQUFtQyxLQUFBLHNDQUFBaEIsTUFBQSxFQUFBZCxHQUFBLHdCQUFBOEIsS0FBQSxZQUFBQyxLQUFBLHNEQUFBRCxLQUFBLG9CQUFBaEIsTUFBQSxRQUFBZCxHQUFBLFNBQUFnQyxVQUFBLFdBQUFyQyxPQUFBLENBQUFtQixNQUFBLEdBQUFBLE1BQUEsRUFBQW5CLE9BQUEsQ0FBQUssR0FBQSxHQUFBQSxHQUFBLFVBQUFpQyxRQUFBLEdBQUF0QyxPQUFBLENBQUFzQyxRQUFBLE1BQUFBLFFBQUEsUUFBQUMsY0FBQSxHQUFBQyxtQkFBQSxDQUFBRixRQUFBLEVBQUF0QyxPQUFBLE9BQUF1QyxjQUFBLFFBQUFBLGNBQUEsS0FBQS9CLGdCQUFBLG1CQUFBK0IsY0FBQSxxQkFBQXZDLE9BQUEsQ0FBQW1CLE1BQUEsRUFBQW5CLE9BQUEsQ0FBQXlDLElBQUEsR0FBQXpDLE9BQUEsQ0FBQTBDLEtBQUEsR0FBQTFDLE9BQUEsQ0FBQUssR0FBQSxzQkFBQUwsT0FBQSxDQUFBbUIsTUFBQSw2QkFBQWdCLEtBQUEsUUFBQUEsS0FBQSxnQkFBQW5DLE9BQUEsQ0FBQUssR0FBQSxFQUFBTCxPQUFBLENBQUEyQyxpQkFBQSxDQUFBM0MsT0FBQSxDQUFBSyxHQUFBLHVCQUFBTCxPQUFBLENBQUFtQixNQUFBLElBQUFuQixPQUFBLENBQUE0QyxNQUFBLFdBQUE1QyxPQUFBLENBQUFLLEdBQUEsR0FBQThCLEtBQUEsb0JBQUFULE1BQUEsR0FBQXZCLFFBQUEsQ0FBQVgsT0FBQSxFQUFBRSxJQUFBLEVBQUFNLE9BQUEsb0JBQUEwQixNQUFBLENBQUFwQixJQUFBLFFBQUE2QixLQUFBLEdBQUFuQyxPQUFBLENBQUE2QyxJQUFBLG1DQUFBbkIsTUFBQSxDQUFBckIsR0FBQSxLQUFBRyxnQkFBQSxxQkFBQS9CLEtBQUEsRUFBQWlELE1BQUEsQ0FBQXJCLEdBQUEsRUFBQXdDLElBQUEsRUFBQTdDLE9BQUEsQ0FBQTZDLElBQUEsa0JBQUFuQixNQUFBLENBQUFwQixJQUFBLEtBQUE2QixLQUFBLGdCQUFBbkMsT0FBQSxDQUFBbUIsTUFBQSxZQUFBbkIsT0FBQSxDQUFBSyxHQUFBLEdBQUFxQixNQUFBLENBQUFyQixHQUFBLG1CQUFBbUMsb0JBQUFGLFFBQUEsRUFBQXRDLE9BQUEsUUFBQThDLFVBQUEsR0FBQTlDLE9BQUEsQ0FBQW1CLE1BQUEsRUFBQUEsTUFBQSxHQUFBbUIsUUFBQSxDQUFBekQsUUFBQSxDQUFBaUUsVUFBQSxPQUFBQyxTQUFBLEtBQUE1QixNQUFBLFNBQUFuQixPQUFBLENBQUFzQyxRQUFBLHFCQUFBUSxVQUFBLElBQUFSLFFBQUEsQ0FBQXpELFFBQUEsZUFBQW1CLE9BQUEsQ0FBQW1CLE1BQUEsYUFBQW5CLE9BQUEsQ0FBQUssR0FBQSxHQUFBMEMsU0FBQSxFQUFBUCxtQkFBQSxDQUFBRixRQUFBLEVBQUF0QyxPQUFBLGVBQUFBLE9BQUEsQ0FBQW1CLE1BQUEsa0JBQUEyQixVQUFBLEtBQUE5QyxPQUFBLENBQUFtQixNQUFBLFlBQUFuQixPQUFBLENBQUFLLEdBQUEsT0FBQTJDLFNBQUEsdUNBQUFGLFVBQUEsaUJBQUF0QyxnQkFBQSxNQUFBa0IsTUFBQSxHQUFBdkIsUUFBQSxDQUFBZ0IsTUFBQSxFQUFBbUIsUUFBQSxDQUFBekQsUUFBQSxFQUFBbUIsT0FBQSxDQUFBSyxHQUFBLG1CQUFBcUIsTUFBQSxDQUFBcEIsSUFBQSxTQUFBTixPQUFBLENBQUFtQixNQUFBLFlBQUFuQixPQUFBLENBQUFLLEdBQUEsR0FBQXFCLE1BQUEsQ0FBQXJCLEdBQUEsRUFBQUwsT0FBQSxDQUFBc0MsUUFBQSxTQUFBOUIsZ0JBQUEsTUFBQXlDLElBQUEsR0FBQXZCLE1BQUEsQ0FBQXJCLEdBQUEsU0FBQTRDLElBQUEsR0FBQUEsSUFBQSxDQUFBSixJQUFBLElBQUE3QyxPQUFBLENBQUFzQyxRQUFBLENBQUFZLFVBQUEsSUFBQUQsSUFBQSxDQUFBeEUsS0FBQSxFQUFBdUIsT0FBQSxDQUFBbUQsSUFBQSxHQUFBYixRQUFBLENBQUFjLE9BQUEsZUFBQXBELE9BQUEsQ0FBQW1CLE1BQUEsS0FBQW5CLE9BQUEsQ0FBQW1CLE1BQUEsV0FBQW5CLE9BQUEsQ0FBQUssR0FBQSxHQUFBMEMsU0FBQSxHQUFBL0MsT0FBQSxDQUFBc0MsUUFBQSxTQUFBOUIsZ0JBQUEsSUFBQXlDLElBQUEsSUFBQWpELE9BQUEsQ0FBQW1CLE1BQUEsWUFBQW5CLE9BQUEsQ0FBQUssR0FBQSxPQUFBMkMsU0FBQSxzQ0FBQWhELE9BQUEsQ0FBQXNDLFFBQUEsU0FBQTlCLGdCQUFBLGNBQUE2QyxhQUFBQyxJQUFBLFFBQUFDLEtBQUEsS0FBQUMsTUFBQSxFQUFBRixJQUFBLFlBQUFBLElBQUEsS0FBQUMsS0FBQSxDQUFBRSxRQUFBLEdBQUFILElBQUEsV0FBQUEsSUFBQSxLQUFBQyxLQUFBLENBQUFHLFVBQUEsR0FBQUosSUFBQSxLQUFBQyxLQUFBLENBQUFJLFFBQUEsR0FBQUwsSUFBQSxXQUFBTSxVQUFBLENBQUFDLElBQUEsQ0FBQU4sS0FBQSxjQUFBTyxjQUFBUCxLQUFBLFFBQUE3QixNQUFBLEdBQUE2QixLQUFBLENBQUFRLFVBQUEsUUFBQXJDLE1BQUEsQ0FBQXBCLElBQUEsb0JBQUFvQixNQUFBLENBQUFyQixHQUFBLEVBQUFrRCxLQUFBLENBQUFRLFVBQUEsR0FBQXJDLE1BQUEsYUFBQXpCLFFBQUFOLFdBQUEsU0FBQWlFLFVBQUEsTUFBQUosTUFBQSxhQUFBN0QsV0FBQSxDQUFBdUIsT0FBQSxDQUFBbUMsWUFBQSxjQUFBVyxLQUFBLGlCQUFBakQsT0FBQWtELFFBQUEsUUFBQUEsUUFBQSxRQUFBQyxjQUFBLEdBQUFELFFBQUEsQ0FBQXJGLGNBQUEsT0FBQXNGLGNBQUEsU0FBQUEsY0FBQSxDQUFBM0QsSUFBQSxDQUFBMEQsUUFBQSw0QkFBQUEsUUFBQSxDQUFBZCxJQUFBLFNBQUFjLFFBQUEsT0FBQUUsS0FBQSxDQUFBRixRQUFBLENBQUFHLE1BQUEsU0FBQUMsQ0FBQSxPQUFBbEIsSUFBQSxZQUFBQSxLQUFBLGFBQUFrQixDQUFBLEdBQUFKLFFBQUEsQ0FBQUcsTUFBQSxPQUFBakcsTUFBQSxDQUFBb0MsSUFBQSxDQUFBMEQsUUFBQSxFQUFBSSxDQUFBLFVBQUFsQixJQUFBLENBQUExRSxLQUFBLEdBQUF3RixRQUFBLENBQUFJLENBQUEsR0FBQWxCLElBQUEsQ0FBQU4sSUFBQSxPQUFBTSxJQUFBLFNBQUFBLElBQUEsQ0FBQTFFLEtBQUEsR0FBQXNFLFNBQUEsRUFBQUksSUFBQSxDQUFBTixJQUFBLE9BQUFNLElBQUEsWUFBQUEsSUFBQSxDQUFBQSxJQUFBLEdBQUFBLElBQUEsZUFBQUEsSUFBQSxFQUFBZCxVQUFBLGVBQUFBLFdBQUEsYUFBQTVELEtBQUEsRUFBQXNFLFNBQUEsRUFBQUYsSUFBQSxpQkFBQXBDLGlCQUFBLENBQUF2QyxTQUFBLEdBQUF3QywwQkFBQSxFQUFBckMsY0FBQSxDQUFBMkMsRUFBQSxtQkFBQXZDLEtBQUEsRUFBQWlDLDBCQUFBLEVBQUF0QixZQUFBLFNBQUFmLGNBQUEsQ0FBQXFDLDBCQUFBLG1CQUFBakMsS0FBQSxFQUFBZ0MsaUJBQUEsRUFBQXJCLFlBQUEsU0FBQXFCLGlCQUFBLENBQUE2RCxXQUFBLEdBQUFwRixNQUFBLENBQUF3QiwwQkFBQSxFQUFBMUIsaUJBQUEsd0JBQUFqQixPQUFBLENBQUF3RyxtQkFBQSxhQUFBQyxNQUFBLFFBQUFDLElBQUEsd0JBQUFELE1BQUEsSUFBQUEsTUFBQSxDQUFBRSxXQUFBLFdBQUFELElBQUEsS0FBQUEsSUFBQSxLQUFBaEUsaUJBQUEsNkJBQUFnRSxJQUFBLENBQUFILFdBQUEsSUFBQUcsSUFBQSxDQUFBRSxJQUFBLE9BQUE1RyxPQUFBLENBQUE2RyxJQUFBLGFBQUFKLE1BQUEsV0FBQXZHLE1BQUEsQ0FBQTRHLGNBQUEsR0FBQTVHLE1BQUEsQ0FBQTRHLGNBQUEsQ0FBQUwsTUFBQSxFQUFBOUQsMEJBQUEsS0FBQThELE1BQUEsQ0FBQU0sU0FBQSxHQUFBcEUsMEJBQUEsRUFBQXhCLE1BQUEsQ0FBQXNGLE1BQUEsRUFBQXhGLGlCQUFBLHlCQUFBd0YsTUFBQSxDQUFBdEcsU0FBQSxHQUFBRCxNQUFBLENBQUE4QixNQUFBLENBQUFpQixFQUFBLEdBQUF3RCxNQUFBLEtBQUF6RyxPQUFBLENBQUFnSCxLQUFBLGFBQUExRSxHQUFBLGFBQUF3QixPQUFBLEVBQUF4QixHQUFBLE9BQUFZLHFCQUFBLENBQUFJLGFBQUEsQ0FBQW5ELFNBQUEsR0FBQWdCLE1BQUEsQ0FBQW1DLGFBQUEsQ0FBQW5ELFNBQUEsRUFBQVksbUJBQUEsaUNBQUFmLE9BQUEsQ0FBQXNELGFBQUEsR0FBQUEsYUFBQSxFQUFBdEQsT0FBQSxDQUFBaUgsS0FBQSxhQUFBeEYsT0FBQSxFQUFBQyxPQUFBLEVBQUFDLElBQUEsRUFBQUMsV0FBQSxFQUFBMkIsV0FBQSxlQUFBQSxXQUFBLEtBQUFBLFdBQUEsR0FBQTJELE9BQUEsT0FBQUMsSUFBQSxPQUFBN0QsYUFBQSxDQUFBOUIsSUFBQSxDQUFBQyxPQUFBLEVBQUFDLE9BQUEsRUFBQUMsSUFBQSxFQUFBQyxXQUFBLEdBQUEyQixXQUFBLFVBQUF2RCxPQUFBLENBQUF3RyxtQkFBQSxDQUFBOUUsT0FBQSxJQUFBeUYsSUFBQSxHQUFBQSxJQUFBLENBQUEvQixJQUFBLEdBQUFyQixJQUFBLFdBQUFILE1BQUEsV0FBQUEsTUFBQSxDQUFBa0IsSUFBQSxHQUFBbEIsTUFBQSxDQUFBbEQsS0FBQSxHQUFBeUcsSUFBQSxDQUFBL0IsSUFBQSxXQUFBbEMscUJBQUEsQ0FBQUQsRUFBQSxHQUFBOUIsTUFBQSxDQUFBOEIsRUFBQSxFQUFBaEMsaUJBQUEsZ0JBQUFFLE1BQUEsQ0FBQThCLEVBQUEsRUFBQXBDLGNBQUEsaUNBQUFNLE1BQUEsQ0FBQThCLEVBQUEsNkRBQUFqRCxPQUFBLENBQUFvSCxJQUFBLGFBQUFDLEdBQUEsUUFBQUMsTUFBQSxHQUFBcEgsTUFBQSxDQUFBbUgsR0FBQSxHQUFBRCxJQUFBLGdCQUFBNUcsR0FBQSxJQUFBOEcsTUFBQSxFQUFBRixJQUFBLENBQUF0QixJQUFBLENBQUF0RixHQUFBLFVBQUE0RyxJQUFBLENBQUFHLE9BQUEsYUFBQW5DLEtBQUEsV0FBQWdDLElBQUEsQ0FBQWYsTUFBQSxTQUFBN0YsR0FBQSxHQUFBNEcsSUFBQSxDQUFBSSxHQUFBLFFBQUFoSCxHQUFBLElBQUE4RyxNQUFBLFNBQUFsQyxJQUFBLENBQUExRSxLQUFBLEdBQUFGLEdBQUEsRUFBQTRFLElBQUEsQ0FBQU4sSUFBQSxPQUFBTSxJQUFBLFdBQUFBLElBQUEsQ0FBQU4sSUFBQSxPQUFBTSxJQUFBLFFBQUFwRixPQUFBLENBQUFnRCxNQUFBLEdBQUFBLE1BQUEsRUFBQWQsT0FBQSxDQUFBL0IsU0FBQSxLQUFBd0csV0FBQSxFQUFBekUsT0FBQSxFQUFBK0QsS0FBQSxXQUFBQSxNQUFBd0IsYUFBQSxhQUFBQyxJQUFBLFdBQUF0QyxJQUFBLFdBQUFWLElBQUEsUUFBQUMsS0FBQSxHQUFBSyxTQUFBLE9BQUFGLElBQUEsWUFBQVAsUUFBQSxjQUFBbkIsTUFBQSxnQkFBQWQsR0FBQSxHQUFBMEMsU0FBQSxPQUFBYSxVQUFBLENBQUExQyxPQUFBLENBQUE0QyxhQUFBLElBQUEwQixhQUFBLFdBQUFiLElBQUEsa0JBQUFBLElBQUEsQ0FBQWUsTUFBQSxPQUFBdkgsTUFBQSxDQUFBb0MsSUFBQSxPQUFBb0UsSUFBQSxNQUFBUixLQUFBLEVBQUFRLElBQUEsQ0FBQWdCLEtBQUEsY0FBQWhCLElBQUEsSUFBQTVCLFNBQUEsTUFBQTZDLElBQUEsV0FBQUEsS0FBQSxTQUFBL0MsSUFBQSxXQUFBZ0QsVUFBQSxRQUFBakMsVUFBQSxJQUFBRyxVQUFBLGtCQUFBOEIsVUFBQSxDQUFBdkYsSUFBQSxRQUFBdUYsVUFBQSxDQUFBeEYsR0FBQSxjQUFBeUYsSUFBQSxLQUFBbkQsaUJBQUEsV0FBQUEsa0JBQUFvRCxTQUFBLGFBQUFsRCxJQUFBLFFBQUFrRCxTQUFBLE1BQUEvRixPQUFBLGtCQUFBZ0csT0FBQUMsR0FBQSxFQUFBQyxNQUFBLFdBQUF4RSxNQUFBLENBQUFwQixJQUFBLFlBQUFvQixNQUFBLENBQUFyQixHQUFBLEdBQUEwRixTQUFBLEVBQUEvRixPQUFBLENBQUFtRCxJQUFBLEdBQUE4QyxHQUFBLEVBQUFDLE1BQUEsS0FBQWxHLE9BQUEsQ0FBQW1CLE1BQUEsV0FBQW5CLE9BQUEsQ0FBQUssR0FBQSxHQUFBMEMsU0FBQSxLQUFBbUQsTUFBQSxhQUFBN0IsQ0FBQSxRQUFBVCxVQUFBLENBQUFRLE1BQUEsTUFBQUMsQ0FBQSxTQUFBQSxDQUFBLFFBQUFkLEtBQUEsUUFBQUssVUFBQSxDQUFBUyxDQUFBLEdBQUEzQyxNQUFBLEdBQUE2QixLQUFBLENBQUFRLFVBQUEsaUJBQUFSLEtBQUEsQ0FBQUMsTUFBQSxTQUFBd0MsTUFBQSxhQUFBekMsS0FBQSxDQUFBQyxNQUFBLFNBQUFpQyxJQUFBLFFBQUFVLFFBQUEsR0FBQWhJLE1BQUEsQ0FBQW9DLElBQUEsQ0FBQWdELEtBQUEsZUFBQTZDLFVBQUEsR0FBQWpJLE1BQUEsQ0FBQW9DLElBQUEsQ0FBQWdELEtBQUEscUJBQUE0QyxRQUFBLElBQUFDLFVBQUEsYUFBQVgsSUFBQSxHQUFBbEMsS0FBQSxDQUFBRSxRQUFBLFNBQUF1QyxNQUFBLENBQUF6QyxLQUFBLENBQUFFLFFBQUEsZ0JBQUFnQyxJQUFBLEdBQUFsQyxLQUFBLENBQUFHLFVBQUEsU0FBQXNDLE1BQUEsQ0FBQXpDLEtBQUEsQ0FBQUcsVUFBQSxjQUFBeUMsUUFBQSxhQUFBVixJQUFBLEdBQUFsQyxLQUFBLENBQUFFLFFBQUEsU0FBQXVDLE1BQUEsQ0FBQXpDLEtBQUEsQ0FBQUUsUUFBQSxxQkFBQTJDLFVBQUEsWUFBQWhFLEtBQUEscURBQUFxRCxJQUFBLEdBQUFsQyxLQUFBLENBQUFHLFVBQUEsU0FBQXNDLE1BQUEsQ0FBQXpDLEtBQUEsQ0FBQUcsVUFBQSxZQUFBZCxNQUFBLFdBQUFBLE9BQUF0QyxJQUFBLEVBQUFELEdBQUEsYUFBQWdFLENBQUEsUUFBQVQsVUFBQSxDQUFBUSxNQUFBLE1BQUFDLENBQUEsU0FBQUEsQ0FBQSxRQUFBZCxLQUFBLFFBQUFLLFVBQUEsQ0FBQVMsQ0FBQSxPQUFBZCxLQUFBLENBQUFDLE1BQUEsU0FBQWlDLElBQUEsSUFBQXRILE1BQUEsQ0FBQW9DLElBQUEsQ0FBQWdELEtBQUEsd0JBQUFrQyxJQUFBLEdBQUFsQyxLQUFBLENBQUFHLFVBQUEsUUFBQTJDLFlBQUEsR0FBQTlDLEtBQUEsYUFBQThDLFlBQUEsaUJBQUEvRixJQUFBLG1CQUFBQSxJQUFBLEtBQUErRixZQUFBLENBQUE3QyxNQUFBLElBQUFuRCxHQUFBLElBQUFBLEdBQUEsSUFBQWdHLFlBQUEsQ0FBQTNDLFVBQUEsS0FBQTJDLFlBQUEsY0FBQTNFLE1BQUEsR0FBQTJFLFlBQUEsR0FBQUEsWUFBQSxDQUFBdEMsVUFBQSxjQUFBckMsTUFBQSxDQUFBcEIsSUFBQSxHQUFBQSxJQUFBLEVBQUFvQixNQUFBLENBQUFyQixHQUFBLEdBQUFBLEdBQUEsRUFBQWdHLFlBQUEsU0FBQWxGLE1BQUEsZ0JBQUFnQyxJQUFBLEdBQUFrRCxZQUFBLENBQUEzQyxVQUFBLEVBQUFsRCxnQkFBQSxTQUFBOEYsUUFBQSxDQUFBNUUsTUFBQSxNQUFBNEUsUUFBQSxXQUFBQSxTQUFBNUUsTUFBQSxFQUFBaUMsUUFBQSxvQkFBQWpDLE1BQUEsQ0FBQXBCLElBQUEsUUFBQW9CLE1BQUEsQ0FBQXJCLEdBQUEscUJBQUFxQixNQUFBLENBQUFwQixJQUFBLG1CQUFBb0IsTUFBQSxDQUFBcEIsSUFBQSxRQUFBNkMsSUFBQSxHQUFBekIsTUFBQSxDQUFBckIsR0FBQSxnQkFBQXFCLE1BQUEsQ0FBQXBCLElBQUEsU0FBQXdGLElBQUEsUUFBQXpGLEdBQUEsR0FBQXFCLE1BQUEsQ0FBQXJCLEdBQUEsT0FBQWMsTUFBQSxrQkFBQWdDLElBQUEseUJBQUF6QixNQUFBLENBQUFwQixJQUFBLElBQUFxRCxRQUFBLFVBQUFSLElBQUEsR0FBQVEsUUFBQSxHQUFBbkQsZ0JBQUEsS0FBQStGLE1BQUEsV0FBQUEsT0FBQTdDLFVBQUEsYUFBQVcsQ0FBQSxRQUFBVCxVQUFBLENBQUFRLE1BQUEsTUFBQUMsQ0FBQSxTQUFBQSxDQUFBLFFBQUFkLEtBQUEsUUFBQUssVUFBQSxDQUFBUyxDQUFBLE9BQUFkLEtBQUEsQ0FBQUcsVUFBQSxLQUFBQSxVQUFBLGNBQUE0QyxRQUFBLENBQUEvQyxLQUFBLENBQUFRLFVBQUEsRUFBQVIsS0FBQSxDQUFBSSxRQUFBLEdBQUFHLGFBQUEsQ0FBQVAsS0FBQSxHQUFBL0MsZ0JBQUEseUJBQUFnRyxPQUFBaEQsTUFBQSxhQUFBYSxDQUFBLFFBQUFULFVBQUEsQ0FBQVEsTUFBQSxNQUFBQyxDQUFBLFNBQUFBLENBQUEsUUFBQWQsS0FBQSxRQUFBSyxVQUFBLENBQUFTLENBQUEsT0FBQWQsS0FBQSxDQUFBQyxNQUFBLEtBQUFBLE1BQUEsUUFBQTlCLE1BQUEsR0FBQTZCLEtBQUEsQ0FBQVEsVUFBQSxrQkFBQXJDLE1BQUEsQ0FBQXBCLElBQUEsUUFBQW1HLE1BQUEsR0FBQS9FLE1BQUEsQ0FBQXJCLEdBQUEsRUFBQXlELGFBQUEsQ0FBQVAsS0FBQSxZQUFBa0QsTUFBQSxnQkFBQXJFLEtBQUEsOEJBQUFzRSxhQUFBLFdBQUFBLGNBQUF6QyxRQUFBLEVBQUFmLFVBQUEsRUFBQUUsT0FBQSxnQkFBQWQsUUFBQSxLQUFBekQsUUFBQSxFQUFBa0MsTUFBQSxDQUFBa0QsUUFBQSxHQUFBZixVQUFBLEVBQUFBLFVBQUEsRUFBQUUsT0FBQSxFQUFBQSxPQUFBLG9CQUFBakMsTUFBQSxVQUFBZCxHQUFBLEdBQUEwQyxTQUFBLEdBQUF2QyxnQkFBQSxPQUFBekMsT0FBQTtBQUFBLFNBQUE0SSxtQkFBQUMsR0FBQSxFQUFBcEYsT0FBQSxFQUFBQyxNQUFBLEVBQUFvRixLQUFBLEVBQUFDLE1BQUEsRUFBQXZJLEdBQUEsRUFBQThCLEdBQUEsY0FBQTRDLElBQUEsR0FBQTJELEdBQUEsQ0FBQXJJLEdBQUEsRUFBQThCLEdBQUEsT0FBQTVCLEtBQUEsR0FBQXdFLElBQUEsQ0FBQXhFLEtBQUEsV0FBQXVELEtBQUEsSUFBQVAsTUFBQSxDQUFBTyxLQUFBLGlCQUFBaUIsSUFBQSxDQUFBSixJQUFBLElBQUFyQixPQUFBLENBQUEvQyxLQUFBLFlBQUF3RyxPQUFBLENBQUF6RCxPQUFBLENBQUEvQyxLQUFBLEVBQUFxRCxJQUFBLENBQUErRSxLQUFBLEVBQUFDLE1BQUE7QUFBQSxTQUFBQyxrQkFBQTNHLEVBQUEsNkJBQUFWLElBQUEsU0FBQXNILElBQUEsR0FBQUMsU0FBQSxhQUFBaEMsT0FBQSxXQUFBekQsT0FBQSxFQUFBQyxNQUFBLFFBQUFtRixHQUFBLEdBQUF4RyxFQUFBLENBQUE4RyxLQUFBLENBQUF4SCxJQUFBLEVBQUFzSCxJQUFBLFlBQUFILE1BQUFwSSxLQUFBLElBQUFrSSxrQkFBQSxDQUFBQyxHQUFBLEVBQUFwRixPQUFBLEVBQUFDLE1BQUEsRUFBQW9GLEtBQUEsRUFBQUMsTUFBQSxVQUFBckksS0FBQSxjQUFBcUksT0FBQXhILEdBQUEsSUFBQXFILGtCQUFBLENBQUFDLEdBQUEsRUFBQXBGLE9BQUEsRUFBQUMsTUFBQSxFQUFBb0YsS0FBQSxFQUFBQyxNQUFBLFdBQUF4SCxHQUFBLEtBQUF1SCxLQUFBLENBQUE5RCxTQUFBO0FBQUEsU0FBQW9FLGVBQUFDLEdBQUEsRUFBQS9DLENBQUEsV0FBQWdELGVBQUEsQ0FBQUQsR0FBQSxLQUFBRSxxQkFBQSxDQUFBRixHQUFBLEVBQUEvQyxDQUFBLEtBQUFrRCwyQkFBQSxDQUFBSCxHQUFBLEVBQUEvQyxDQUFBLEtBQUFtRCxnQkFBQTtBQUFBLFNBQUFBLGlCQUFBLGNBQUF4RSxTQUFBO0FBQUEsU0FBQXVFLDRCQUFBRSxDQUFBLEVBQUFDLE1BQUEsU0FBQUQsQ0FBQSxxQkFBQUEsQ0FBQSxzQkFBQUUsaUJBQUEsQ0FBQUYsQ0FBQSxFQUFBQyxNQUFBLE9BQUFFLENBQUEsR0FBQTNKLE1BQUEsQ0FBQUMsU0FBQSxDQUFBMkosUUFBQSxDQUFBdEgsSUFBQSxDQUFBa0gsQ0FBQSxFQUFBOUIsS0FBQSxhQUFBaUMsQ0FBQSxpQkFBQUgsQ0FBQSxDQUFBL0MsV0FBQSxFQUFBa0QsQ0FBQSxHQUFBSCxDQUFBLENBQUEvQyxXQUFBLENBQUFDLElBQUEsTUFBQWlELENBQUEsY0FBQUEsQ0FBQSxtQkFBQUUsS0FBQSxDQUFBQyxJQUFBLENBQUFOLENBQUEsT0FBQUcsQ0FBQSwrREFBQUksSUFBQSxDQUFBSixDQUFBLFVBQUFELGlCQUFBLENBQUFGLENBQUEsRUFBQUMsTUFBQTtBQUFBLFNBQUFDLGtCQUFBUCxHQUFBLEVBQUFhLEdBQUEsUUFBQUEsR0FBQSxZQUFBQSxHQUFBLEdBQUFiLEdBQUEsQ0FBQWhELE1BQUEsRUFBQTZELEdBQUEsR0FBQWIsR0FBQSxDQUFBaEQsTUFBQSxXQUFBQyxDQUFBLE1BQUE2RCxJQUFBLE9BQUFKLEtBQUEsQ0FBQUcsR0FBQSxHQUFBNUQsQ0FBQSxHQUFBNEQsR0FBQSxFQUFBNUQsQ0FBQSxJQUFBNkQsSUFBQSxDQUFBN0QsQ0FBQSxJQUFBK0MsR0FBQSxDQUFBL0MsQ0FBQSxVQUFBNkQsSUFBQTtBQUFBLFNBQUFaLHNCQUFBRixHQUFBLEVBQUEvQyxDQUFBLFFBQUE4RCxFQUFBLFdBQUFmLEdBQUEsZ0NBQUF6SSxNQUFBLElBQUF5SSxHQUFBLENBQUF6SSxNQUFBLENBQUFFLFFBQUEsS0FBQXVJLEdBQUEsNEJBQUFlLEVBQUEsUUFBQUMsRUFBQSxFQUFBQyxFQUFBLEVBQUFDLEVBQUEsRUFBQUMsRUFBQSxFQUFBQyxJQUFBLE9BQUFDLEVBQUEsT0FBQUMsRUFBQSxpQkFBQUosRUFBQSxJQUFBSCxFQUFBLEdBQUFBLEVBQUEsQ0FBQTVILElBQUEsQ0FBQTZHLEdBQUEsR0FBQWpFLElBQUEsUUFBQWtCLENBQUEsUUFBQXBHLE1BQUEsQ0FBQWtLLEVBQUEsTUFBQUEsRUFBQSxVQUFBTSxFQUFBLHVCQUFBQSxFQUFBLElBQUFMLEVBQUEsR0FBQUUsRUFBQSxDQUFBL0gsSUFBQSxDQUFBNEgsRUFBQSxHQUFBdEYsSUFBQSxNQUFBMkYsSUFBQSxDQUFBM0UsSUFBQSxDQUFBdUUsRUFBQSxDQUFBM0osS0FBQSxHQUFBK0osSUFBQSxDQUFBcEUsTUFBQSxLQUFBQyxDQUFBLEdBQUFvRSxFQUFBLGlCQUFBbkosR0FBQSxJQUFBb0osRUFBQSxPQUFBTCxFQUFBLEdBQUEvSSxHQUFBLHlCQUFBbUosRUFBQSxZQUFBTixFQUFBLGVBQUFJLEVBQUEsR0FBQUosRUFBQSxjQUFBbEssTUFBQSxDQUFBc0ssRUFBQSxNQUFBQSxFQUFBLDJCQUFBRyxFQUFBLFFBQUFMLEVBQUEsYUFBQUcsSUFBQTtBQUFBLFNBQUFuQixnQkFBQUQsR0FBQSxRQUFBVSxLQUFBLENBQUFhLE9BQUEsQ0FBQXZCLEdBQUEsVUFBQUEsR0FBQTtBQUR3QztBQUNnQjtBQUNFO0FBRW5ELElBQU15VCxlQUFlLEdBQUcsU0FBbEJBLGVBQWVBLENBQUEzUixJQUFBLEVBQTRCO0VBQUEsSUFBdkJzQyxFQUFFLEdBQUF0QyxJQUFBLENBQUZzQyxFQUFFO0lBQUUrTSxhQUFhLEdBQUFyUCxJQUFBLENBQWJxUCxhQUFhO0VBRTlDLElBQUE3TyxTQUFBLEdBQTRCYixnREFBUSxDQUFDMFAsYUFBYSxDQUFDO0lBQUE1TyxVQUFBLEdBQUF4QyxjQUFBLENBQUF1QyxTQUFBO0lBQTVDbVAsTUFBTSxHQUFBbFAsVUFBQTtJQUFFbVAsU0FBUyxHQUFBblAsVUFBQTtFQUV4QixJQUFBRyxVQUFBLEdBQWdDakIsZ0RBQVEsQ0FBQyxLQUFLLENBQUM7SUFBQWtCLFVBQUEsR0FBQTVDLGNBQUEsQ0FBQTJDLFVBQUE7SUFBeENGLFNBQVMsR0FBQUcsVUFBQTtJQUFFRixVQUFVLEdBQUFFLFVBQUE7RUFDNUIsSUFBQUcsVUFBQSxHQUF3QnJCLGdEQUFRLENBQUMsSUFBSSxDQUFDO0lBQUFzQixVQUFBLEdBQUFoRCxjQUFBLENBQUErQyxVQUFBO0lBQS9CakgsSUFBSSxHQUFBa0gsVUFBQTtJQUFFMlEsT0FBTyxHQUFBM1EsVUFBQTtFQUVwQixJQUFNRSxZQUFZO0lBQUEsSUFBQUssS0FBQSxHQUFBM0QsaUJBQUEsZUFBQWpKLG1CQUFBLEdBQUE4RyxJQUFBLENBQUcsU0FBQStGLFFBQU1MLENBQUM7TUFBQSxJQUFBN0wsS0FBQSxFQUFBc2MsS0FBQTtNQUFBLE9BQUFqZCxtQkFBQSxHQUFBeUIsSUFBQSxVQUFBcUwsU0FBQUMsUUFBQTtRQUFBLGtCQUFBQSxRQUFBLENBQUFwRixJQUFBLEdBQUFvRixRQUFBLENBQUExSCxJQUFBO1VBQUE7WUFBQSxLQUNyQnlHLFNBQVM7Y0FBQWlCLFFBQUEsQ0FBQTFILElBQUE7Y0FBQTtZQUFBO1lBQUEsT0FBQTBILFFBQUEsQ0FBQWpJLE1BQUE7VUFBQTtZQUdObkUsS0FBSyxHQUFHNkwsQ0FBQyxDQUFDRSxNQUFNLENBQUMvTCxLQUFLO1lBQzVCb0wsVUFBVSxDQUFDLElBQUksQ0FBQztZQUNoQmlSLE9BQU8sQ0FBQyxJQUFJLENBQUM7WUFBQ2pRLFFBQUEsQ0FBQXBGLElBQUE7WUFBQW9GLFFBQUEsQ0FBQTFILElBQUE7WUFBQSxPQUVTNkYsaUVBQWdCLENBQUMsb0JBQW9CLEdBQUN3QyxFQUFFLEdBQUMseUJBQXlCLEVBQUU7Y0FBQ3FOLE1BQU0sRUFBRXBhO1lBQUssQ0FBQyxFQUFFLEtBQUssQ0FBQztVQUFBO1lBQXhHd0UsS0FBSSxHQUFBNEgsUUFBQSxDQUFBcEksSUFBQTtZQUNWcVksT0FBTyxDQUFDN1gsS0FBSSxDQUFDO1lBQ2I2VixTQUFTLENBQUNyYSxLQUFLLENBQUM7WUFBQ29NLFFBQUEsQ0FBQTFILElBQUE7WUFBQTtVQUFBO1lBQUEwSCxRQUFBLENBQUFwRixJQUFBO1lBQUFvRixRQUFBLENBQUFJLEVBQUEsR0FBQUosUUFBQTtZQUVqQmlRLE9BQU8sQ0FBQyx5QkFBeUIsQ0FBQztVQUFDO1lBRXZDalIsVUFBVSxDQUFDLEtBQUssQ0FBQztVQUFDO1VBQUE7WUFBQSxPQUFBZ0IsUUFBQSxDQUFBakYsSUFBQTtRQUFBO01BQUEsR0FBQStFLE9BQUE7SUFBQSxDQUNyQjtJQUFBLGdCQWZLTixZQUFZQSxDQUFBYSxHQUFBO01BQUEsT0FBQVIsS0FBQSxDQUFBeEQsS0FBQSxPQUFBRCxTQUFBO0lBQUE7RUFBQSxHQWVqQjtFQUVELG9CQUNJMkIsMkRBQUE7SUFBSzBDLFNBQVMsRUFBQztFQUFrQixnQkFDN0IxQywyREFBQTtJQUFRMEMsU0FBUyxFQUFDLG9CQUFvQjtJQUFDRyxRQUFRLEVBQUVwQixZQUFhO0lBQUM1TCxLQUFLLEVBQUVvYTtFQUFPLGdCQUN6RWpRLDJEQUFBO0lBQVFuSyxLQUFLLEVBQUVzWixxRkFBb0NpRDtFQUFDLEdBQUVqRCwyRkFBMEMsQ0FBVSxlQUMxR25QLDJEQUFBO0lBQVFuSyxLQUFLLEVBQUVzWixzRkFBcUNtRDtFQUFDLEdBQUVuRCw0RkFBMkMsQ0FBVSxlQUM1R25QLDJEQUFBO0lBQVFuSyxLQUFLLEVBQUVzWixxRkFBb0NxRDtFQUFDLEdBQUVyRCwyRkFBMEMsQ0FBVSxDQUNyRyxFQUVMbk8sU0FBUyxpQkFBSWhCLDJEQUFBO0lBQUswQyxTQUFTLEVBQUM7RUFBaUIsR0FBQyxlQUFhLENBQU0sRUFHakVySSxJQUFJLGlCQUFJMkYsMkRBQUE7SUFBSzBDLFNBQVMsRUFBQztFQUFpQixHQUFFckksSUFBSSxDQUFPLENBRXZEO0FBR2QsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzVDeUI7QUFFbkIsSUFBTStLLGdCQUFnQixHQUFHLFNBQW5CQSxnQkFBZ0JBLENBQUE5RSxJQUFBLEVBQXNDO0VBQUEsSUFBakNvUyxJQUFJLEdBQUFwUyxJQUFBLENBQUpvUyxJQUFJO0lBQUVsTixDQUFDLEdBQUFsRixJQUFBLENBQURrRixDQUFDO0lBQUVGLFFBQVEsR0FBQWhGLElBQUEsQ0FBUmdGLFFBQVE7SUFBRWEsUUFBUSxHQUFBN0YsSUFBQSxDQUFSNkYsUUFBUTtFQUV6RCxJQUFNNEUsS0FBSyxHQUFHMkgsSUFBSSxDQUFDM0gsS0FBSyxDQUFDMUUsV0FBVyxFQUFFLENBQUNDLEtBQUssQ0FBQ2QsQ0FBQyxDQUFDYSxXQUFXLEVBQUUsQ0FBQyxDQUFDRSxJQUFJLENBQUMsVUFBVSxHQUFDZixDQUFDLENBQUNhLFdBQVcsRUFBRSxHQUFDLFdBQVcsQ0FBQztFQUUxRyxJQUFNRyxXQUFXLEdBQUcsU0FBZEEsV0FBV0EsQ0FBRzlFLENBQUMsRUFBSTtJQUNyQkEsQ0FBQyxDQUFDQyxjQUFjLEVBQUU7SUFDbEIyRCxRQUFRLENBQUNvTixJQUFJLENBQUM7RUFDbEIsQ0FBQztFQUVELG9CQUNJMVMsMERBQUE7SUFBRzBDLFNBQVMsRUFBRSxvQkFBb0IsSUFBSXlELFFBQVEsR0FBRyxXQUFXLEdBQUUsRUFBRSxDQUFFO0lBQUNNLElBQUksRUFBQyxHQUFHO0lBQUMxRCxPQUFPLEVBQUV5RCxXQUFZO0lBQUNFLElBQUksRUFBQyxRQUFRO0lBQUMsaUJBQWVQO0VBQVMsZ0JBQ3BJbkcsMERBQUE7SUFBSzBDLFNBQVMsRUFBQyxtQkFBbUI7SUFBQ2lFLEtBQUssRUFBRTtNQUFDQyxlQUFlLFNBQUFDLE1BQUEsQ0FBUzZMLElBQUksQ0FBQzFLLFdBQVc7SUFBRztFQUFFLEVBQ2xGLGVBQ05oSSwwREFBQTtJQUFLMEMsU0FBUyxFQUFDO0VBQW9CLGdCQUMvQjFDLDBEQUFBO0lBQUs4Ryx1QkFBdUIsRUFBRTtNQUFDQyxNQUFNLEVBQUVnRTtJQUFLO0VBQUUsRUFBTyxlQUNyRC9LLDBEQUFBLGNBQU0wUyxJQUFJLENBQUNDLEdBQUcsQ0FBTyxDQUNuQixDQUNOO0FBRVosQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDckJ5QjtBQUNtQztBQUV0RCxJQUFNQyxpQkFBaUIsR0FBRyxTQUFwQkEsaUJBQWlCQSxDQUFBdFMsSUFBQSxFQUFtQztFQUFBLElBQTlCdVMsS0FBSyxHQUFBdlMsSUFBQSxDQUFMdVMsS0FBSztJQUFFQyxRQUFRLEdBQUF4UyxJQUFBLENBQVJ3UyxRQUFRO0lBQUVoRCxPQUFPLEdBQUF4UCxJQUFBLENBQVB3UCxPQUFPO0VBQ3ZELElBQUdBLE9BQU8sRUFBRTtJQUNSLG9CQUFPOVAsMERBQUE7TUFBSzBDLFNBQVMsRUFBQztJQUFpQixHQUFDLGVBQWEsQ0FBTTtFQUMvRDtFQUNBLG9CQUNJMUMsMERBQUE7SUFBSTBDLFNBQVMsRUFBQztFQUE4QixHQUVwQ21RLEtBQUssQ0FBQ3pJLEdBQUcsQ0FBQyxVQUFBc0ksSUFBSTtJQUFBLG9CQUFJMVMsMERBQUEsQ0FBQytTLFlBQVk7TUFBQ3BkLEdBQUcsRUFBRStjLElBQUksQ0FBQzlQLEVBQUc7TUFBQzhQLElBQUksRUFBRUEsSUFBSztNQUFDSSxRQUFRLEVBQUVBO0lBQVMsRUFBRztFQUFBLEVBQUMsQ0FFcEY7QUFFYixDQUFDO0FBRU0sSUFBTUMsWUFBWSxHQUFHLFNBQWZBLFlBQVlBLENBQUFqUixLQUFBLEVBQXlCO0VBQUEsSUFBcEI0USxJQUFJLEdBQUE1USxLQUFBLENBQUo0USxJQUFJO0lBQUVJLFFBQVEsR0FBQWhSLEtBQUEsQ0FBUmdSLFFBQVE7RUFFeEMsSUFBTXRNLFdBQVcsR0FBRyxTQUFkQSxXQUFXQSxDQUFBLEVBQVM7SUFDdEJzTSxRQUFRLENBQUNKLElBQUksQ0FBQztFQUNsQixDQUFDO0VBRUQsb0JBQ0kxUywwREFBQTtJQUFJMEMsU0FBUyxFQUFDO0VBQThCLGdCQUN4QzFDLDBEQUFBO0lBQUswQyxTQUFTLEVBQUMsbUJBQW1CO0lBQUNpRSxLQUFLLEVBQUU7TUFBQ0MsZUFBZSxTQUFBQyxNQUFBLENBQVM2TCxJQUFJLENBQUMxSyxXQUFXO0lBQUc7RUFBRSxFQUFPLGVBQy9GaEksMERBQUE7SUFBSzBDLFNBQVMsRUFBQztFQUFvQixnQkFDL0IxQywwREFBQSxjQUFNMFMsSUFBSSxDQUFDM0gsS0FBSyxDQUFPLGVBQ3ZCL0ssMERBQUEsY0FBTTBTLElBQUksQ0FBQ0MsR0FBRyxDQUFPLENBQ25CLGVBQ04zUywwREFBQSxDQUFDMEQsK0RBQVc7SUFBQ1gsT0FBTyxFQUFFeUQsV0FBWTtJQUFDMUIsZUFBZSxFQUFDO0VBQWdDLEVBQUcsQ0FDckY7QUFFYixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OytDQy9CRCxxSkFBQTVQLG1CQUFBLFlBQUFBLG9CQUFBLFdBQUFDLE9BQUEsU0FBQUEsT0FBQSxPQUFBQyxFQUFBLEdBQUFDLE1BQUEsQ0FBQUMsU0FBQSxFQUFBQyxNQUFBLEdBQUFILEVBQUEsQ0FBQUksY0FBQSxFQUFBQyxjQUFBLEdBQUFKLE1BQUEsQ0FBQUksY0FBQSxjQUFBQyxHQUFBLEVBQUFDLEdBQUEsRUFBQUMsSUFBQSxJQUFBRixHQUFBLENBQUFDLEdBQUEsSUFBQUMsSUFBQSxDQUFBQyxLQUFBLEtBQUFDLE9BQUEsd0JBQUFDLE1BQUEsR0FBQUEsTUFBQSxPQUFBQyxjQUFBLEdBQUFGLE9BQUEsQ0FBQUcsUUFBQSxrQkFBQUMsbUJBQUEsR0FBQUosT0FBQSxDQUFBSyxhQUFBLHVCQUFBQyxpQkFBQSxHQUFBTixPQUFBLENBQUFPLFdBQUEsOEJBQUFDLE9BQUFaLEdBQUEsRUFBQUMsR0FBQSxFQUFBRSxLQUFBLFdBQUFSLE1BQUEsQ0FBQUksY0FBQSxDQUFBQyxHQUFBLEVBQUFDLEdBQUEsSUFBQUUsS0FBQSxFQUFBQSxLQUFBLEVBQUFVLFVBQUEsTUFBQUMsWUFBQSxNQUFBQyxRQUFBLFNBQUFmLEdBQUEsQ0FBQUMsR0FBQSxXQUFBVyxNQUFBLG1CQUFBSSxHQUFBLElBQUFKLE1BQUEsWUFBQUEsT0FBQVosR0FBQSxFQUFBQyxHQUFBLEVBQUFFLEtBQUEsV0FBQUgsR0FBQSxDQUFBQyxHQUFBLElBQUFFLEtBQUEsZ0JBQUFjLEtBQUFDLE9BQUEsRUFBQUMsT0FBQSxFQUFBQyxJQUFBLEVBQUFDLFdBQUEsUUFBQUMsY0FBQSxHQUFBSCxPQUFBLElBQUFBLE9BQUEsQ0FBQXZCLFNBQUEsWUFBQTJCLFNBQUEsR0FBQUosT0FBQSxHQUFBSSxTQUFBLEVBQUFDLFNBQUEsR0FBQTdCLE1BQUEsQ0FBQThCLE1BQUEsQ0FBQUgsY0FBQSxDQUFBMUIsU0FBQSxHQUFBOEIsT0FBQSxPQUFBQyxPQUFBLENBQUFOLFdBQUEsZ0JBQUF0QixjQUFBLENBQUF5QixTQUFBLGVBQUFyQixLQUFBLEVBQUF5QixnQkFBQSxDQUFBVixPQUFBLEVBQUFFLElBQUEsRUFBQU0sT0FBQSxNQUFBRixTQUFBLGFBQUFLLFNBQUFDLEVBQUEsRUFBQTlCLEdBQUEsRUFBQStCLEdBQUEsbUJBQUFDLElBQUEsWUFBQUQsR0FBQSxFQUFBRCxFQUFBLENBQUFHLElBQUEsQ0FBQWpDLEdBQUEsRUFBQStCLEdBQUEsY0FBQWYsR0FBQSxhQUFBZ0IsSUFBQSxXQUFBRCxHQUFBLEVBQUFmLEdBQUEsUUFBQXZCLE9BQUEsQ0FBQXdCLElBQUEsR0FBQUEsSUFBQSxNQUFBaUIsZ0JBQUEsZ0JBQUFYLFVBQUEsY0FBQVksa0JBQUEsY0FBQUMsMkJBQUEsU0FBQUMsaUJBQUEsT0FBQXpCLE1BQUEsQ0FBQXlCLGlCQUFBLEVBQUEvQixjQUFBLHFDQUFBZ0MsUUFBQSxHQUFBM0MsTUFBQSxDQUFBNEMsY0FBQSxFQUFBQyx1QkFBQSxHQUFBRixRQUFBLElBQUFBLFFBQUEsQ0FBQUEsUUFBQSxDQUFBRyxNQUFBLFFBQUFELHVCQUFBLElBQUFBLHVCQUFBLEtBQUE5QyxFQUFBLElBQUFHLE1BQUEsQ0FBQW9DLElBQUEsQ0FBQU8sdUJBQUEsRUFBQWxDLGNBQUEsTUFBQStCLGlCQUFBLEdBQUFHLHVCQUFBLE9BQUFFLEVBQUEsR0FBQU4sMEJBQUEsQ0FBQXhDLFNBQUEsR0FBQTJCLFNBQUEsQ0FBQTNCLFNBQUEsR0FBQUQsTUFBQSxDQUFBOEIsTUFBQSxDQUFBWSxpQkFBQSxZQUFBTSxzQkFBQS9DLFNBQUEsZ0NBQUFnRCxPQUFBLFdBQUFDLE1BQUEsSUFBQWpDLE1BQUEsQ0FBQWhCLFNBQUEsRUFBQWlELE1BQUEsWUFBQWQsR0FBQSxnQkFBQWUsT0FBQSxDQUFBRCxNQUFBLEVBQUFkLEdBQUEsc0JBQUFnQixjQUFBdkIsU0FBQSxFQUFBd0IsV0FBQSxhQUFBQyxPQUFBSixNQUFBLEVBQUFkLEdBQUEsRUFBQW1CLE9BQUEsRUFBQUMsTUFBQSxRQUFBQyxNQUFBLEdBQUF2QixRQUFBLENBQUFMLFNBQUEsQ0FBQXFCLE1BQUEsR0FBQXJCLFNBQUEsRUFBQU8sR0FBQSxtQkFBQXFCLE1BQUEsQ0FBQXBCLElBQUEsUUFBQXFCLE1BQUEsR0FBQUQsTUFBQSxDQUFBckIsR0FBQSxFQUFBNUIsS0FBQSxHQUFBa0QsTUFBQSxDQUFBbEQsS0FBQSxTQUFBQSxLQUFBLGdCQUFBbUQsT0FBQSxDQUFBbkQsS0FBQSxLQUFBTixNQUFBLENBQUFvQyxJQUFBLENBQUE5QixLQUFBLGVBQUE2QyxXQUFBLENBQUFFLE9BQUEsQ0FBQS9DLEtBQUEsQ0FBQW9ELE9BQUEsRUFBQUMsSUFBQSxXQUFBckQsS0FBQSxJQUFBOEMsTUFBQSxTQUFBOUMsS0FBQSxFQUFBK0MsT0FBQSxFQUFBQyxNQUFBLGdCQUFBbkMsR0FBQSxJQUFBaUMsTUFBQSxVQUFBakMsR0FBQSxFQUFBa0MsT0FBQSxFQUFBQyxNQUFBLFFBQUFILFdBQUEsQ0FBQUUsT0FBQSxDQUFBL0MsS0FBQSxFQUFBcUQsSUFBQSxXQUFBQyxTQUFBLElBQUFKLE1BQUEsQ0FBQWxELEtBQUEsR0FBQXNELFNBQUEsRUFBQVAsT0FBQSxDQUFBRyxNQUFBLGdCQUFBSyxLQUFBLFdBQUFULE1BQUEsVUFBQVMsS0FBQSxFQUFBUixPQUFBLEVBQUFDLE1BQUEsU0FBQUEsTUFBQSxDQUFBQyxNQUFBLENBQUFyQixHQUFBLFNBQUE0QixlQUFBLEVBQUE1RCxjQUFBLG9CQUFBSSxLQUFBLFdBQUFBLE1BQUEwQyxNQUFBLEVBQUFkLEdBQUEsYUFBQTZCLDJCQUFBLGVBQUFaLFdBQUEsV0FBQUUsT0FBQSxFQUFBQyxNQUFBLElBQUFGLE1BQUEsQ0FBQUosTUFBQSxFQUFBZCxHQUFBLEVBQUFtQixPQUFBLEVBQUFDLE1BQUEsZ0JBQUFRLGVBQUEsR0FBQUEsZUFBQSxHQUFBQSxlQUFBLENBQUFILElBQUEsQ0FBQUksMEJBQUEsRUFBQUEsMEJBQUEsSUFBQUEsMEJBQUEscUJBQUFoQyxpQkFBQVYsT0FBQSxFQUFBRSxJQUFBLEVBQUFNLE9BQUEsUUFBQW1DLEtBQUEsc0NBQUFoQixNQUFBLEVBQUFkLEdBQUEsd0JBQUE4QixLQUFBLFlBQUFDLEtBQUEsc0RBQUFELEtBQUEsb0JBQUFoQixNQUFBLFFBQUFkLEdBQUEsU0FBQWdDLFVBQUEsV0FBQXJDLE9BQUEsQ0FBQW1CLE1BQUEsR0FBQUEsTUFBQSxFQUFBbkIsT0FBQSxDQUFBSyxHQUFBLEdBQUFBLEdBQUEsVUFBQWlDLFFBQUEsR0FBQXRDLE9BQUEsQ0FBQXNDLFFBQUEsTUFBQUEsUUFBQSxRQUFBQyxjQUFBLEdBQUFDLG1CQUFBLENBQUFGLFFBQUEsRUFBQXRDLE9BQUEsT0FBQXVDLGNBQUEsUUFBQUEsY0FBQSxLQUFBL0IsZ0JBQUEsbUJBQUErQixjQUFBLHFCQUFBdkMsT0FBQSxDQUFBbUIsTUFBQSxFQUFBbkIsT0FBQSxDQUFBeUMsSUFBQSxHQUFBekMsT0FBQSxDQUFBMEMsS0FBQSxHQUFBMUMsT0FBQSxDQUFBSyxHQUFBLHNCQUFBTCxPQUFBLENBQUFtQixNQUFBLDZCQUFBZ0IsS0FBQSxRQUFBQSxLQUFBLGdCQUFBbkMsT0FBQSxDQUFBSyxHQUFBLEVBQUFMLE9BQUEsQ0FBQTJDLGlCQUFBLENBQUEzQyxPQUFBLENBQUFLLEdBQUEsdUJBQUFMLE9BQUEsQ0FBQW1CLE1BQUEsSUFBQW5CLE9BQUEsQ0FBQTRDLE1BQUEsV0FBQTVDLE9BQUEsQ0FBQUssR0FBQSxHQUFBOEIsS0FBQSxvQkFBQVQsTUFBQSxHQUFBdkIsUUFBQSxDQUFBWCxPQUFBLEVBQUFFLElBQUEsRUFBQU0sT0FBQSxvQkFBQTBCLE1BQUEsQ0FBQXBCLElBQUEsUUFBQTZCLEtBQUEsR0FBQW5DLE9BQUEsQ0FBQTZDLElBQUEsbUNBQUFuQixNQUFBLENBQUFyQixHQUFBLEtBQUFHLGdCQUFBLHFCQUFBL0IsS0FBQSxFQUFBaUQsTUFBQSxDQUFBckIsR0FBQSxFQUFBd0MsSUFBQSxFQUFBN0MsT0FBQSxDQUFBNkMsSUFBQSxrQkFBQW5CLE1BQUEsQ0FBQXBCLElBQUEsS0FBQTZCLEtBQUEsZ0JBQUFuQyxPQUFBLENBQUFtQixNQUFBLFlBQUFuQixPQUFBLENBQUFLLEdBQUEsR0FBQXFCLE1BQUEsQ0FBQXJCLEdBQUEsbUJBQUFtQyxvQkFBQUYsUUFBQSxFQUFBdEMsT0FBQSxRQUFBOEMsVUFBQSxHQUFBOUMsT0FBQSxDQUFBbUIsTUFBQSxFQUFBQSxNQUFBLEdBQUFtQixRQUFBLENBQUF6RCxRQUFBLENBQUFpRSxVQUFBLE9BQUFDLFNBQUEsS0FBQTVCLE1BQUEsU0FBQW5CLE9BQUEsQ0FBQXNDLFFBQUEscUJBQUFRLFVBQUEsSUFBQVIsUUFBQSxDQUFBekQsUUFBQSxlQUFBbUIsT0FBQSxDQUFBbUIsTUFBQSxhQUFBbkIsT0FBQSxDQUFBSyxHQUFBLEdBQUEwQyxTQUFBLEVBQUFQLG1CQUFBLENBQUFGLFFBQUEsRUFBQXRDLE9BQUEsZUFBQUEsT0FBQSxDQUFBbUIsTUFBQSxrQkFBQTJCLFVBQUEsS0FBQTlDLE9BQUEsQ0FBQW1CLE1BQUEsWUFBQW5CLE9BQUEsQ0FBQUssR0FBQSxPQUFBMkMsU0FBQSx1Q0FBQUYsVUFBQSxpQkFBQXRDLGdCQUFBLE1BQUFrQixNQUFBLEdBQUF2QixRQUFBLENBQUFnQixNQUFBLEVBQUFtQixRQUFBLENBQUF6RCxRQUFBLEVBQUFtQixPQUFBLENBQUFLLEdBQUEsbUJBQUFxQixNQUFBLENBQUFwQixJQUFBLFNBQUFOLE9BQUEsQ0FBQW1CLE1BQUEsWUFBQW5CLE9BQUEsQ0FBQUssR0FBQSxHQUFBcUIsTUFBQSxDQUFBckIsR0FBQSxFQUFBTCxPQUFBLENBQUFzQyxRQUFBLFNBQUE5QixnQkFBQSxNQUFBeUMsSUFBQSxHQUFBdkIsTUFBQSxDQUFBckIsR0FBQSxTQUFBNEMsSUFBQSxHQUFBQSxJQUFBLENBQUFKLElBQUEsSUFBQTdDLE9BQUEsQ0FBQXNDLFFBQUEsQ0FBQVksVUFBQSxJQUFBRCxJQUFBLENBQUF4RSxLQUFBLEVBQUF1QixPQUFBLENBQUFtRCxJQUFBLEdBQUFiLFFBQUEsQ0FBQWMsT0FBQSxlQUFBcEQsT0FBQSxDQUFBbUIsTUFBQSxLQUFBbkIsT0FBQSxDQUFBbUIsTUFBQSxXQUFBbkIsT0FBQSxDQUFBSyxHQUFBLEdBQUEwQyxTQUFBLEdBQUEvQyxPQUFBLENBQUFzQyxRQUFBLFNBQUE5QixnQkFBQSxJQUFBeUMsSUFBQSxJQUFBakQsT0FBQSxDQUFBbUIsTUFBQSxZQUFBbkIsT0FBQSxDQUFBSyxHQUFBLE9BQUEyQyxTQUFBLHNDQUFBaEQsT0FBQSxDQUFBc0MsUUFBQSxTQUFBOUIsZ0JBQUEsY0FBQTZDLGFBQUFDLElBQUEsUUFBQUMsS0FBQSxLQUFBQyxNQUFBLEVBQUFGLElBQUEsWUFBQUEsSUFBQSxLQUFBQyxLQUFBLENBQUFFLFFBQUEsR0FBQUgsSUFBQSxXQUFBQSxJQUFBLEtBQUFDLEtBQUEsQ0FBQUcsVUFBQSxHQUFBSixJQUFBLEtBQUFDLEtBQUEsQ0FBQUksUUFBQSxHQUFBTCxJQUFBLFdBQUFNLFVBQUEsQ0FBQUMsSUFBQSxDQUFBTixLQUFBLGNBQUFPLGNBQUFQLEtBQUEsUUFBQTdCLE1BQUEsR0FBQTZCLEtBQUEsQ0FBQVEsVUFBQSxRQUFBckMsTUFBQSxDQUFBcEIsSUFBQSxvQkFBQW9CLE1BQUEsQ0FBQXJCLEdBQUEsRUFBQWtELEtBQUEsQ0FBQVEsVUFBQSxHQUFBckMsTUFBQSxhQUFBekIsUUFBQU4sV0FBQSxTQUFBaUUsVUFBQSxNQUFBSixNQUFBLGFBQUE3RCxXQUFBLENBQUF1QixPQUFBLENBQUFtQyxZQUFBLGNBQUFXLEtBQUEsaUJBQUFqRCxPQUFBa0QsUUFBQSxRQUFBQSxRQUFBLFFBQUFDLGNBQUEsR0FBQUQsUUFBQSxDQUFBckYsY0FBQSxPQUFBc0YsY0FBQSxTQUFBQSxjQUFBLENBQUEzRCxJQUFBLENBQUEwRCxRQUFBLDRCQUFBQSxRQUFBLENBQUFkLElBQUEsU0FBQWMsUUFBQSxPQUFBRSxLQUFBLENBQUFGLFFBQUEsQ0FBQUcsTUFBQSxTQUFBQyxDQUFBLE9BQUFsQixJQUFBLFlBQUFBLEtBQUEsYUFBQWtCLENBQUEsR0FBQUosUUFBQSxDQUFBRyxNQUFBLE9BQUFqRyxNQUFBLENBQUFvQyxJQUFBLENBQUEwRCxRQUFBLEVBQUFJLENBQUEsVUFBQWxCLElBQUEsQ0FBQTFFLEtBQUEsR0FBQXdGLFFBQUEsQ0FBQUksQ0FBQSxHQUFBbEIsSUFBQSxDQUFBTixJQUFBLE9BQUFNLElBQUEsU0FBQUEsSUFBQSxDQUFBMUUsS0FBQSxHQUFBc0UsU0FBQSxFQUFBSSxJQUFBLENBQUFOLElBQUEsT0FBQU0sSUFBQSxZQUFBQSxJQUFBLENBQUFBLElBQUEsR0FBQUEsSUFBQSxlQUFBQSxJQUFBLEVBQUFkLFVBQUEsZUFBQUEsV0FBQSxhQUFBNUQsS0FBQSxFQUFBc0UsU0FBQSxFQUFBRixJQUFBLGlCQUFBcEMsaUJBQUEsQ0FBQXZDLFNBQUEsR0FBQXdDLDBCQUFBLEVBQUFyQyxjQUFBLENBQUEyQyxFQUFBLG1CQUFBdkMsS0FBQSxFQUFBaUMsMEJBQUEsRUFBQXRCLFlBQUEsU0FBQWYsY0FBQSxDQUFBcUMsMEJBQUEsbUJBQUFqQyxLQUFBLEVBQUFnQyxpQkFBQSxFQUFBckIsWUFBQSxTQUFBcUIsaUJBQUEsQ0FBQTZELFdBQUEsR0FBQXBGLE1BQUEsQ0FBQXdCLDBCQUFBLEVBQUExQixpQkFBQSx3QkFBQWpCLE9BQUEsQ0FBQXdHLG1CQUFBLGFBQUFDLE1BQUEsUUFBQUMsSUFBQSx3QkFBQUQsTUFBQSxJQUFBQSxNQUFBLENBQUFFLFdBQUEsV0FBQUQsSUFBQSxLQUFBQSxJQUFBLEtBQUFoRSxpQkFBQSw2QkFBQWdFLElBQUEsQ0FBQUgsV0FBQSxJQUFBRyxJQUFBLENBQUFFLElBQUEsT0FBQTVHLE9BQUEsQ0FBQTZHLElBQUEsYUFBQUosTUFBQSxXQUFBdkcsTUFBQSxDQUFBNEcsY0FBQSxHQUFBNUcsTUFBQSxDQUFBNEcsY0FBQSxDQUFBTCxNQUFBLEVBQUE5RCwwQkFBQSxLQUFBOEQsTUFBQSxDQUFBTSxTQUFBLEdBQUFwRSwwQkFBQSxFQUFBeEIsTUFBQSxDQUFBc0YsTUFBQSxFQUFBeEYsaUJBQUEseUJBQUF3RixNQUFBLENBQUF0RyxTQUFBLEdBQUFELE1BQUEsQ0FBQThCLE1BQUEsQ0FBQWlCLEVBQUEsR0FBQXdELE1BQUEsS0FBQXpHLE9BQUEsQ0FBQWdILEtBQUEsYUFBQTFFLEdBQUEsYUFBQXdCLE9BQUEsRUFBQXhCLEdBQUEsT0FBQVkscUJBQUEsQ0FBQUksYUFBQSxDQUFBbkQsU0FBQSxHQUFBZ0IsTUFBQSxDQUFBbUMsYUFBQSxDQUFBbkQsU0FBQSxFQUFBWSxtQkFBQSxpQ0FBQWYsT0FBQSxDQUFBc0QsYUFBQSxHQUFBQSxhQUFBLEVBQUF0RCxPQUFBLENBQUFpSCxLQUFBLGFBQUF4RixPQUFBLEVBQUFDLE9BQUEsRUFBQUMsSUFBQSxFQUFBQyxXQUFBLEVBQUEyQixXQUFBLGVBQUFBLFdBQUEsS0FBQUEsV0FBQSxHQUFBMkQsT0FBQSxPQUFBQyxJQUFBLE9BQUE3RCxhQUFBLENBQUE5QixJQUFBLENBQUFDLE9BQUEsRUFBQUMsT0FBQSxFQUFBQyxJQUFBLEVBQUFDLFdBQUEsR0FBQTJCLFdBQUEsVUFBQXZELE9BQUEsQ0FBQXdHLG1CQUFBLENBQUE5RSxPQUFBLElBQUF5RixJQUFBLEdBQUFBLElBQUEsQ0FBQS9CLElBQUEsR0FBQXJCLElBQUEsV0FBQUgsTUFBQSxXQUFBQSxNQUFBLENBQUFrQixJQUFBLEdBQUFsQixNQUFBLENBQUFsRCxLQUFBLEdBQUF5RyxJQUFBLENBQUEvQixJQUFBLFdBQUFsQyxxQkFBQSxDQUFBRCxFQUFBLEdBQUE5QixNQUFBLENBQUE4QixFQUFBLEVBQUFoQyxpQkFBQSxnQkFBQUUsTUFBQSxDQUFBOEIsRUFBQSxFQUFBcEMsY0FBQSxpQ0FBQU0sTUFBQSxDQUFBOEIsRUFBQSw2REFBQWpELE9BQUEsQ0FBQW9ILElBQUEsYUFBQUMsR0FBQSxRQUFBQyxNQUFBLEdBQUFwSCxNQUFBLENBQUFtSCxHQUFBLEdBQUFELElBQUEsZ0JBQUE1RyxHQUFBLElBQUE4RyxNQUFBLEVBQUFGLElBQUEsQ0FBQXRCLElBQUEsQ0FBQXRGLEdBQUEsVUFBQTRHLElBQUEsQ0FBQUcsT0FBQSxhQUFBbkMsS0FBQSxXQUFBZ0MsSUFBQSxDQUFBZixNQUFBLFNBQUE3RixHQUFBLEdBQUE0RyxJQUFBLENBQUFJLEdBQUEsUUFBQWhILEdBQUEsSUFBQThHLE1BQUEsU0FBQWxDLElBQUEsQ0FBQTFFLEtBQUEsR0FBQUYsR0FBQSxFQUFBNEUsSUFBQSxDQUFBTixJQUFBLE9BQUFNLElBQUEsV0FBQUEsSUFBQSxDQUFBTixJQUFBLE9BQUFNLElBQUEsUUFBQXBGLE9BQUEsQ0FBQWdELE1BQUEsR0FBQUEsTUFBQSxFQUFBZCxPQUFBLENBQUEvQixTQUFBLEtBQUF3RyxXQUFBLEVBQUF6RSxPQUFBLEVBQUErRCxLQUFBLFdBQUFBLE1BQUF3QixhQUFBLGFBQUFDLElBQUEsV0FBQXRDLElBQUEsV0FBQVYsSUFBQSxRQUFBQyxLQUFBLEdBQUFLLFNBQUEsT0FBQUYsSUFBQSxZQUFBUCxRQUFBLGNBQUFuQixNQUFBLGdCQUFBZCxHQUFBLEdBQUEwQyxTQUFBLE9BQUFhLFVBQUEsQ0FBQTFDLE9BQUEsQ0FBQTRDLGFBQUEsSUFBQTBCLGFBQUEsV0FBQWIsSUFBQSxrQkFBQUEsSUFBQSxDQUFBZSxNQUFBLE9BQUF2SCxNQUFBLENBQUFvQyxJQUFBLE9BQUFvRSxJQUFBLE1BQUFSLEtBQUEsRUFBQVEsSUFBQSxDQUFBZ0IsS0FBQSxjQUFBaEIsSUFBQSxJQUFBNUIsU0FBQSxNQUFBNkMsSUFBQSxXQUFBQSxLQUFBLFNBQUEvQyxJQUFBLFdBQUFnRCxVQUFBLFFBQUFqQyxVQUFBLElBQUFHLFVBQUEsa0JBQUE4QixVQUFBLENBQUF2RixJQUFBLFFBQUF1RixVQUFBLENBQUF4RixHQUFBLGNBQUF5RixJQUFBLEtBQUFuRCxpQkFBQSxXQUFBQSxrQkFBQW9ELFNBQUEsYUFBQWxELElBQUEsUUFBQWtELFNBQUEsTUFBQS9GLE9BQUEsa0JBQUFnRyxPQUFBQyxHQUFBLEVBQUFDLE1BQUEsV0FBQXhFLE1BQUEsQ0FBQXBCLElBQUEsWUFBQW9CLE1BQUEsQ0FBQXJCLEdBQUEsR0FBQTBGLFNBQUEsRUFBQS9GLE9BQUEsQ0FBQW1ELElBQUEsR0FBQThDLEdBQUEsRUFBQUMsTUFBQSxLQUFBbEcsT0FBQSxDQUFBbUIsTUFBQSxXQUFBbkIsT0FBQSxDQUFBSyxHQUFBLEdBQUEwQyxTQUFBLEtBQUFtRCxNQUFBLGFBQUE3QixDQUFBLFFBQUFULFVBQUEsQ0FBQVEsTUFBQSxNQUFBQyxDQUFBLFNBQUFBLENBQUEsUUFBQWQsS0FBQSxRQUFBSyxVQUFBLENBQUFTLENBQUEsR0FBQTNDLE1BQUEsR0FBQTZCLEtBQUEsQ0FBQVEsVUFBQSxpQkFBQVIsS0FBQSxDQUFBQyxNQUFBLFNBQUF3QyxNQUFBLGFBQUF6QyxLQUFBLENBQUFDLE1BQUEsU0FBQWlDLElBQUEsUUFBQVUsUUFBQSxHQUFBaEksTUFBQSxDQUFBb0MsSUFBQSxDQUFBZ0QsS0FBQSxlQUFBNkMsVUFBQSxHQUFBakksTUFBQSxDQUFBb0MsSUFBQSxDQUFBZ0QsS0FBQSxxQkFBQTRDLFFBQUEsSUFBQUMsVUFBQSxhQUFBWCxJQUFBLEdBQUFsQyxLQUFBLENBQUFFLFFBQUEsU0FBQXVDLE1BQUEsQ0FBQXpDLEtBQUEsQ0FBQUUsUUFBQSxnQkFBQWdDLElBQUEsR0FBQWxDLEtBQUEsQ0FBQUcsVUFBQSxTQUFBc0MsTUFBQSxDQUFBekMsS0FBQSxDQUFBRyxVQUFBLGNBQUF5QyxRQUFBLGFBQUFWLElBQUEsR0FBQWxDLEtBQUEsQ0FBQUUsUUFBQSxTQUFBdUMsTUFBQSxDQUFBekMsS0FBQSxDQUFBRSxRQUFBLHFCQUFBMkMsVUFBQSxZQUFBaEUsS0FBQSxxREFBQXFELElBQUEsR0FBQWxDLEtBQUEsQ0FBQUcsVUFBQSxTQUFBc0MsTUFBQSxDQUFBekMsS0FBQSxDQUFBRyxVQUFBLFlBQUFkLE1BQUEsV0FBQUEsT0FBQXRDLElBQUEsRUFBQUQsR0FBQSxhQUFBZ0UsQ0FBQSxRQUFBVCxVQUFBLENBQUFRLE1BQUEsTUFBQUMsQ0FBQSxTQUFBQSxDQUFBLFFBQUFkLEtBQUEsUUFBQUssVUFBQSxDQUFBUyxDQUFBLE9BQUFkLEtBQUEsQ0FBQUMsTUFBQSxTQUFBaUMsSUFBQSxJQUFBdEgsTUFBQSxDQUFBb0MsSUFBQSxDQUFBZ0QsS0FBQSx3QkFBQWtDLElBQUEsR0FBQWxDLEtBQUEsQ0FBQUcsVUFBQSxRQUFBMkMsWUFBQSxHQUFBOUMsS0FBQSxhQUFBOEMsWUFBQSxpQkFBQS9GLElBQUEsbUJBQUFBLElBQUEsS0FBQStGLFlBQUEsQ0FBQTdDLE1BQUEsSUFBQW5ELEdBQUEsSUFBQUEsR0FBQSxJQUFBZ0csWUFBQSxDQUFBM0MsVUFBQSxLQUFBMkMsWUFBQSxjQUFBM0UsTUFBQSxHQUFBMkUsWUFBQSxHQUFBQSxZQUFBLENBQUF0QyxVQUFBLGNBQUFyQyxNQUFBLENBQUFwQixJQUFBLEdBQUFBLElBQUEsRUFBQW9CLE1BQUEsQ0FBQXJCLEdBQUEsR0FBQUEsR0FBQSxFQUFBZ0csWUFBQSxTQUFBbEYsTUFBQSxnQkFBQWdDLElBQUEsR0FBQWtELFlBQUEsQ0FBQTNDLFVBQUEsRUFBQWxELGdCQUFBLFNBQUE4RixRQUFBLENBQUE1RSxNQUFBLE1BQUE0RSxRQUFBLFdBQUFBLFNBQUE1RSxNQUFBLEVBQUFpQyxRQUFBLG9CQUFBakMsTUFBQSxDQUFBcEIsSUFBQSxRQUFBb0IsTUFBQSxDQUFBckIsR0FBQSxxQkFBQXFCLE1BQUEsQ0FBQXBCLElBQUEsbUJBQUFvQixNQUFBLENBQUFwQixJQUFBLFFBQUE2QyxJQUFBLEdBQUF6QixNQUFBLENBQUFyQixHQUFBLGdCQUFBcUIsTUFBQSxDQUFBcEIsSUFBQSxTQUFBd0YsSUFBQSxRQUFBekYsR0FBQSxHQUFBcUIsTUFBQSxDQUFBckIsR0FBQSxPQUFBYyxNQUFBLGtCQUFBZ0MsSUFBQSx5QkFBQXpCLE1BQUEsQ0FBQXBCLElBQUEsSUFBQXFELFFBQUEsVUFBQVIsSUFBQSxHQUFBUSxRQUFBLEdBQUFuRCxnQkFBQSxLQUFBK0YsTUFBQSxXQUFBQSxPQUFBN0MsVUFBQSxhQUFBVyxDQUFBLFFBQUFULFVBQUEsQ0FBQVEsTUFBQSxNQUFBQyxDQUFBLFNBQUFBLENBQUEsUUFBQWQsS0FBQSxRQUFBSyxVQUFBLENBQUFTLENBQUEsT0FBQWQsS0FBQSxDQUFBRyxVQUFBLEtBQUFBLFVBQUEsY0FBQTRDLFFBQUEsQ0FBQS9DLEtBQUEsQ0FBQVEsVUFBQSxFQUFBUixLQUFBLENBQUFJLFFBQUEsR0FBQUcsYUFBQSxDQUFBUCxLQUFBLEdBQUEvQyxnQkFBQSx5QkFBQWdHLE9BQUFoRCxNQUFBLGFBQUFhLENBQUEsUUFBQVQsVUFBQSxDQUFBUSxNQUFBLE1BQUFDLENBQUEsU0FBQUEsQ0FBQSxRQUFBZCxLQUFBLFFBQUFLLFVBQUEsQ0FBQVMsQ0FBQSxPQUFBZCxLQUFBLENBQUFDLE1BQUEsS0FBQUEsTUFBQSxRQUFBOUIsTUFBQSxHQUFBNkIsS0FBQSxDQUFBUSxVQUFBLGtCQUFBckMsTUFBQSxDQUFBcEIsSUFBQSxRQUFBbUcsTUFBQSxHQUFBL0UsTUFBQSxDQUFBckIsR0FBQSxFQUFBeUQsYUFBQSxDQUFBUCxLQUFBLFlBQUFrRCxNQUFBLGdCQUFBckUsS0FBQSw4QkFBQXNFLGFBQUEsV0FBQUEsY0FBQXpDLFFBQUEsRUFBQWYsVUFBQSxFQUFBRSxPQUFBLGdCQUFBZCxRQUFBLEtBQUF6RCxRQUFBLEVBQUFrQyxNQUFBLENBQUFrRCxRQUFBLEdBQUFmLFVBQUEsRUFBQUEsVUFBQSxFQUFBRSxPQUFBLEVBQUFBLE9BQUEsb0JBQUFqQyxNQUFBLFVBQUFkLEdBQUEsR0FBQTBDLFNBQUEsR0FBQXZDLGdCQUFBLE9BQUF6QyxPQUFBO0FBQUEsU0FBQTRJLG1CQUFBQyxHQUFBLEVBQUFwRixPQUFBLEVBQUFDLE1BQUEsRUFBQW9GLEtBQUEsRUFBQUMsTUFBQSxFQUFBdkksR0FBQSxFQUFBOEIsR0FBQSxjQUFBNEMsSUFBQSxHQUFBMkQsR0FBQSxDQUFBckksR0FBQSxFQUFBOEIsR0FBQSxPQUFBNUIsS0FBQSxHQUFBd0UsSUFBQSxDQUFBeEUsS0FBQSxXQUFBdUQsS0FBQSxJQUFBUCxNQUFBLENBQUFPLEtBQUEsaUJBQUFpQixJQUFBLENBQUFKLElBQUEsSUFBQXJCLE9BQUEsQ0FBQS9DLEtBQUEsWUFBQXdHLE9BQUEsQ0FBQXpELE9BQUEsQ0FBQS9DLEtBQUEsRUFBQXFELElBQUEsQ0FBQStFLEtBQUEsRUFBQUMsTUFBQTtBQUFBLFNBQUFDLGtCQUFBM0csRUFBQSw2QkFBQVYsSUFBQSxTQUFBc0gsSUFBQSxHQUFBQyxTQUFBLGFBQUFoQyxPQUFBLFdBQUF6RCxPQUFBLEVBQUFDLE1BQUEsUUFBQW1GLEdBQUEsR0FBQXhHLEVBQUEsQ0FBQThHLEtBQUEsQ0FBQXhILElBQUEsRUFBQXNILElBQUEsWUFBQUgsTUFBQXBJLEtBQUEsSUFBQWtJLGtCQUFBLENBQUFDLEdBQUEsRUFBQXBGLE9BQUEsRUFBQUMsTUFBQSxFQUFBb0YsS0FBQSxFQUFBQyxNQUFBLFVBQUFySSxLQUFBLGNBQUFxSSxPQUFBeEgsR0FBQSxJQUFBcUgsa0JBQUEsQ0FBQUMsR0FBQSxFQUFBcEYsT0FBQSxFQUFBQyxNQUFBLEVBQUFvRixLQUFBLEVBQUFDLE1BQUEsV0FBQXhILEdBQUEsS0FBQXVILEtBQUEsQ0FBQTlELFNBQUE7QUFBQSxTQUFBb0UsZUFBQUMsR0FBQSxFQUFBL0MsQ0FBQSxXQUFBZ0QsZUFBQSxDQUFBRCxHQUFBLEtBQUFFLHFCQUFBLENBQUFGLEdBQUEsRUFBQS9DLENBQUEsS0FBQWtELDJCQUFBLENBQUFILEdBQUEsRUFBQS9DLENBQUEsS0FBQW1ELGdCQUFBO0FBQUEsU0FBQUEsaUJBQUEsY0FBQXhFLFNBQUE7QUFBQSxTQUFBdUUsNEJBQUFFLENBQUEsRUFBQUMsTUFBQSxTQUFBRCxDQUFBLHFCQUFBQSxDQUFBLHNCQUFBRSxpQkFBQSxDQUFBRixDQUFBLEVBQUFDLE1BQUEsT0FBQUUsQ0FBQSxHQUFBM0osTUFBQSxDQUFBQyxTQUFBLENBQUEySixRQUFBLENBQUF0SCxJQUFBLENBQUFrSCxDQUFBLEVBQUE5QixLQUFBLGFBQUFpQyxDQUFBLGlCQUFBSCxDQUFBLENBQUEvQyxXQUFBLEVBQUFrRCxDQUFBLEdBQUFILENBQUEsQ0FBQS9DLFdBQUEsQ0FBQUMsSUFBQSxNQUFBaUQsQ0FBQSxjQUFBQSxDQUFBLG1CQUFBRSxLQUFBLENBQUFDLElBQUEsQ0FBQU4sQ0FBQSxPQUFBRyxDQUFBLCtEQUFBSSxJQUFBLENBQUFKLENBQUEsVUFBQUQsaUJBQUEsQ0FBQUYsQ0FBQSxFQUFBQyxNQUFBO0FBQUEsU0FBQUMsa0JBQUFQLEdBQUEsRUFBQWEsR0FBQSxRQUFBQSxHQUFBLFlBQUFBLEdBQUEsR0FBQWIsR0FBQSxDQUFBaEQsTUFBQSxFQUFBNkQsR0FBQSxHQUFBYixHQUFBLENBQUFoRCxNQUFBLFdBQUFDLENBQUEsTUFBQTZELElBQUEsT0FBQUosS0FBQSxDQUFBRyxHQUFBLEdBQUE1RCxDQUFBLEdBQUE0RCxHQUFBLEVBQUE1RCxDQUFBLElBQUE2RCxJQUFBLENBQUE3RCxDQUFBLElBQUErQyxHQUFBLENBQUEvQyxDQUFBLFVBQUE2RCxJQUFBO0FBQUEsU0FBQVosc0JBQUFGLEdBQUEsRUFBQS9DLENBQUEsUUFBQThELEVBQUEsV0FBQWYsR0FBQSxnQ0FBQXpJLE1BQUEsSUFBQXlJLEdBQUEsQ0FBQXpJLE1BQUEsQ0FBQUUsUUFBQSxLQUFBdUksR0FBQSw0QkFBQWUsRUFBQSxRQUFBQyxFQUFBLEVBQUFDLEVBQUEsRUFBQUMsRUFBQSxFQUFBQyxFQUFBLEVBQUFDLElBQUEsT0FBQUMsRUFBQSxPQUFBQyxFQUFBLGlCQUFBSixFQUFBLElBQUFILEVBQUEsR0FBQUEsRUFBQSxDQUFBNUgsSUFBQSxDQUFBNkcsR0FBQSxHQUFBakUsSUFBQSxRQUFBa0IsQ0FBQSxRQUFBcEcsTUFBQSxDQUFBa0ssRUFBQSxNQUFBQSxFQUFBLFVBQUFNLEVBQUEsdUJBQUFBLEVBQUEsSUFBQUwsRUFBQSxHQUFBRSxFQUFBLENBQUEvSCxJQUFBLENBQUE0SCxFQUFBLEdBQUF0RixJQUFBLE1BQUEyRixJQUFBLENBQUEzRSxJQUFBLENBQUF1RSxFQUFBLENBQUEzSixLQUFBLEdBQUErSixJQUFBLENBQUFwRSxNQUFBLEtBQUFDLENBQUEsR0FBQW9FLEVBQUEsaUJBQUFuSixHQUFBLElBQUFvSixFQUFBLE9BQUFMLEVBQUEsR0FBQS9JLEdBQUEseUJBQUFtSixFQUFBLFlBQUFOLEVBQUEsZUFBQUksRUFBQSxHQUFBSixFQUFBLGNBQUFsSyxNQUFBLENBQUFzSyxFQUFBLE1BQUFBLEVBQUEsMkJBQUFHLEVBQUEsUUFBQUwsRUFBQSxhQUFBRyxJQUFBO0FBQUEsU0FBQW5CLGdCQUFBRCxHQUFBLFFBQUFVLEtBQUEsQ0FBQWEsT0FBQSxDQUFBdkIsR0FBQSxVQUFBQSxHQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEbUQ7QUFDSztBQUNOO0FBQ2E7QUFDNEI7QUFFcEYsSUFBTXlVLGlCQUFpQixHQUFHLFNBQXBCQSxpQkFBaUJBLENBQUEzUyxJQUFBLEVBQWdFO0VBQUEsSUFBM0Q0UyxhQUFhLEdBQUE1UyxJQUFBLENBQWI0UyxhQUFhO0lBQUVDLGNBQWMsR0FBQTdTLElBQUEsQ0FBZDZTLGNBQWM7SUFBRXBYLElBQUksR0FBQXVFLElBQUEsQ0FBSnZFLElBQUk7SUFBRWdQLEtBQUssR0FBQXpLLElBQUEsQ0FBTHlLLEtBQUs7SUFBRXhGLFNBQVMsR0FBQWpGLElBQUEsQ0FBVGlGLFNBQVM7RUFFcEY7RUFDQSxJQUFBekUsU0FBQSxHQUEwQ2IsZ0RBQVEsQ0FBQyxFQUFFLENBQUM7SUFBQWMsVUFBQSxHQUFBeEMsY0FBQSxDQUFBdUMsU0FBQTtJQUEvQ3NTLGFBQWEsR0FBQXJTLFVBQUE7SUFBRXNTLGdCQUFnQixHQUFBdFMsVUFBQTtFQUN0QyxJQUFBRyxVQUFBLEdBQXNDakIsZ0RBQVEsQ0FBQyxLQUFLLENBQUM7SUFBQWtCLFVBQUEsR0FBQTVDLGNBQUEsQ0FBQTJDLFVBQUE7SUFBOUNvUyxXQUFXLEdBQUFuUyxVQUFBO0lBQUVvUyxjQUFjLEdBQUFwUyxVQUFBO0VBQ2xDa0ksaURBQVMsQ0FBQyxZQUFNO0lBQ1osSUFBRzZKLGFBQWEsRUFBRTtNQUNkL1UsaUJBQUEsZUFBQWpKLG1CQUFBLEdBQUE4RyxJQUFBLENBQUMsU0FBQStGLFFBQUE7UUFBQSxJQUFBeVIsSUFBQTtRQUFBLE9BQUF0ZSxtQkFBQSxHQUFBeUIsSUFBQSxVQUFBcUwsU0FBQUMsUUFBQTtVQUFBLGtCQUFBQSxRQUFBLENBQUFwRixJQUFBLEdBQUFvRixRQUFBLENBQUExSCxJQUFBO1lBQUE7Y0FDR2daLGNBQWMsQ0FBQyxJQUFJLENBQUM7Y0FBQ3RSLFFBQUEsQ0FBQXBGLElBQUE7Y0FBQW9GLFFBQUEsQ0FBQTFILElBQUE7Y0FBQSxPQUVFMFMseURBQVEsQ0FBQ2lHLGFBQWEsQ0FBQztZQUFBO2NBQXBDTSxJQUFJLEdBQUF2UixRQUFBLENBQUFwSSxJQUFBO2NBQ1Z3WixnQkFBZ0IsQ0FBQ0csSUFBSSxDQUFDO2NBQUN2UixRQUFBLENBQUExSCxJQUFBO2NBQUE7WUFBQTtjQUFBMEgsUUFBQSxDQUFBcEYsSUFBQTtjQUFBb0YsUUFBQSxDQUFBSSxFQUFBLEdBQUFKLFFBQUE7WUFBQTtjQUkzQnNSLGNBQWMsQ0FBQyxLQUFLLENBQUM7WUFBQztZQUFBO2NBQUEsT0FBQXRSLFFBQUEsQ0FBQWpGLElBQUE7VUFBQTtRQUFBLEdBQUErRSxPQUFBO01BQUEsQ0FDekIsSUFBRztJQUNSO0VBQ0osQ0FBQyxFQUFFLEVBQUUsQ0FBQztFQUNOLElBQU1nQyxZQUFZLEdBQUcsU0FBZkEsWUFBWUEsQ0FBSTJPLElBQUksRUFBSztJQUMzQlcsZ0JBQWdCLENBQUMsVUFBQUQsYUFBYTtNQUFBLE9BQUlBLGFBQWEsQ0FBQ2xKLE1BQU0sQ0FBQyxVQUFBek8sQ0FBQztRQUFBLE9BQUlBLENBQUMsQ0FBQ21ILEVBQUUsS0FBSzhQLElBQUksQ0FBQzlQLEVBQUU7TUFBQSxFQUFDO0lBQUEsRUFBQztFQUNsRixDQUFDOztFQUVEO0VBQ0EsSUFBTTZRLFlBQVksR0FBRyxTQUFmQSxZQUFZQSxDQUFJZixJQUFJLEVBQUs7SUFDM0JXLGdCQUFnQixDQUFDLFVBQUFELGFBQWEsRUFBSTtNQUM5QjtNQUNBLElBQUlNLFFBQVEsR0FBRyxLQUFLO01BQUMsSUFBQUMsU0FBQSxHQUFBQywwQkFBQSxDQUNHUixhQUFhO1FBQUFTLEtBQUE7TUFBQTtRQUFyQyxLQUFBRixTQUFBLENBQUFHLENBQUEsTUFBQUQsS0FBQSxHQUFBRixTQUFBLENBQUEzVSxDQUFBLElBQUEvRSxJQUFBLEdBQXVDO1VBQUEsSUFBN0I4WixVQUFVLEdBQUFGLEtBQUEsQ0FBQWhlLEtBQUE7VUFDaEIsSUFBR2tlLFVBQVUsQ0FBQ25SLEVBQUUsS0FBSzhQLElBQUksQ0FBQzlQLEVBQUUsRUFBRTtZQUMxQjhRLFFBQVEsR0FBRyxJQUFJO1VBQ25CO1FBQ0o7TUFBQyxTQUFBaGQsR0FBQTtRQUFBaWQsU0FBQSxDQUFBalMsQ0FBQSxDQUFBaEwsR0FBQTtNQUFBO1FBQUFpZCxTQUFBLENBQUFLLENBQUE7TUFBQTtNQUNELElBQUcsQ0FBQ04sUUFBUSxFQUFFO1FBQ1YsVUFBQTdNLE1BQUEsQ0FBQW1ELGtCQUFBLENBQ09vSixhQUFhLElBQ2hCVixJQUFJO01BRVo7TUFDQSxPQUFPVSxhQUFhO0lBQ3hCLENBQUMsQ0FBQztFQUNOLENBQUM7RUFFRCxvQkFDSXBULDJEQUFBLENBQUFBLHdEQUFBLHFCQUNJQSwyREFBQTtJQUFLMEMsU0FBUyxFQUFFLDBDQUEwQyxJQUFJNkMsU0FBUyxHQUFHLGFBQWEsR0FBRSxFQUFFO0VBQUUsZ0JBQ3pGdkYsMkRBQUEsZ0JBQVErSyxLQUFLLENBQVMsZUFDdEIvSywyREFBQSxDQUFDNFMsa0VBQWlCO0lBQUNDLEtBQUssRUFBRU8sYUFBYztJQUFDTixRQUFRLEVBQUUvTyxZQUFhO0lBQUMrTCxPQUFPLEVBQUV3RDtFQUFZLEVBQUcsZUFDekZ0VCwyREFBQSxDQUFDZ1QsOEZBQW9CO0lBQUNHLGNBQWMsRUFBRUEsY0FBZTtJQUFDN04sUUFBUSxFQUFFbU87RUFBYSxFQUFHLENBQzlFLEVBRUZsTyxTQUFTLGlCQUNMdkYsMkRBQUE7SUFBSzBDLFNBQVMsRUFBQztFQUFrQixnQkFDN0IxQywyREFBQSwwQkFDSUEsMkRBQUEsYUFBS3VGLFNBQVMsQ0FBTSxDQUNuQixDQUVaLGVBSUx2RiwyREFBQTtJQUFRaVUsTUFBTSxFQUFFLElBQUs7SUFBQ2xZLElBQUksRUFBRUEsSUFBSztJQUFDbEcsS0FBSyxFQUFFdWQsYUFBYSxDQUFDaEosR0FBRyxDQUFDLFVBQUFzSSxJQUFJO01BQUEsT0FBSUEsSUFBSSxDQUFDOVAsRUFBRTtJQUFBLEVBQUU7SUFBQ0MsUUFBUSxFQUFFLFNBQUFBLFNBQUEsRUFBTSxDQUFDLENBQUU7SUFBQ3FSLFFBQVEsRUFBQztFQUFVLEdBRWhIZCxhQUFhLENBQUNoSixHQUFHLENBQUMsVUFBQXNJLElBQUk7SUFBQSxvQkFBSTFTLDJEQUFBO01BQVEwQyxTQUFTLEVBQUMsaUNBQWlDO01BQUMvTSxHQUFHLEVBQUUrYyxJQUFJLENBQUM5UCxFQUFHO01BQUMvTSxLQUFLLEVBQUU2YyxJQUFJLENBQUM5UCxFQUFHO01BQUMsWUFBVThQLElBQUksQ0FBQ0M7SUFBSSxHQUFFRCxJQUFJLENBQUNDLEdBQUcsQ0FBVTtFQUFBLEVBQUMsQ0FBRTtFQUFBLENBRWpKLENBQ1Y7QUFJWCxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzVFa0Q7QUFDWTtBQUM0QjtBQUNyQjtBQUNSO0FBRXZELElBQU15QixnQkFBZ0IsR0FBRyxTQUFuQkEsZ0JBQWdCQSxDQUFBOVQsSUFBQSxFQUFzRDtFQUFBLElBQWpENUksSUFBSSxHQUFBNEksSUFBQSxDQUFKNUksSUFBSTtJQUFBMmMsV0FBQSxHQUFBL1QsSUFBQSxDQUFFZ1UsTUFBTTtJQUFOQSxNQUFNLEdBQUFELFdBQUEsY0FBRyxJQUFJLEdBQUFBLFdBQUE7SUFBRXRZLElBQUksR0FBQXVFLElBQUEsQ0FBSnZFLElBQUk7SUFBRWdQLEtBQUssR0FBQXpLLElBQUEsQ0FBTHlLLEtBQUs7SUFBRXhGLFNBQVMsR0FBQWpGLElBQUEsQ0FBVGlGLFNBQVM7RUFFekU7RUFDQSxJQUFBekUsU0FBQSxHQUF3Q2IsZ0RBQVEsQ0FBQyxJQUFJLENBQUM7SUFBQWMsVUFBQSxHQUFBeEMsY0FBQSxDQUFBdUMsU0FBQTtJQUEvQ3lULFlBQVksR0FBQXhULFVBQUE7SUFBRXlULGVBQWUsR0FBQXpULFVBQUE7RUFDcEMsSUFBQTBULFNBQUEsR0FBMENOLHFFQUFRLENBQUMsMEJBQTBCLEdBQUN6YyxJQUFJLEdBQUMsR0FBRyxHQUFDNGMsTUFBTSxHQUFDLE9BQU8sQ0FBQztJQUFBSSxVQUFBLEdBQUFuVyxjQUFBLENBQUFrVyxTQUFBO0lBQS9GRSxNQUFNLEdBQUFELFVBQUE7SUFBRTFULFNBQVMsR0FBQTBULFVBQUE7SUFBRXRiLEtBQUssR0FBQXNiLFVBQUE7SUFBRXRaLEtBQUssR0FBQXNaLFVBQUE7RUFDdENyTCxpREFBUyxDQUFDLFlBQU07SUFDWixJQUFHc0wsTUFBTSxFQUFFO01BQ1BILGVBQWUsQ0FBQ0csTUFBTSxDQUFDO0lBQzNCO0VBQ0osQ0FBQyxFQUFFLENBQUNBLE1BQU0sQ0FBQyxDQUFDO0VBR1osb0JBQ0kzVSwyREFBQSxDQUFBQSx3REFBQSxxQkFDSUEsMkRBQUE7SUFBSzBDLFNBQVMsRUFBRSwwQ0FBMEMsSUFBSTZDLFNBQVMsR0FBRyxhQUFhLEdBQUUsRUFBRTtFQUFFLGdCQUN6RnZGLDJEQUFBLGdCQUFRK0ssS0FBSyxDQUFTLEVBRWxCL0osU0FBUyxpQkFBSWhCLDJEQUFBO0lBQUswQyxTQUFTLEVBQUM7RUFBaUIsR0FBQyxlQUFhLENBQU0sRUFHakU2UixZQUFZLGlCQUFJdlUsMkRBQUEsQ0FBQytTLCtFQUFZO0lBQUNMLElBQUksRUFBRTZCLFlBQWE7SUFBQ3pCLFFBQVEsRUFBRSxTQUFBQSxTQUFBO01BQUEsT0FBTTBCLGVBQWUsQ0FBQyxJQUFJLENBQUM7SUFBQTtFQUFDLEVBQUcsRUFHM0YsQ0FBQ0QsWUFBWSxJQUFJLENBQUN2VCxTQUFTLGlCQUFJaEIsMkRBQUEsQ0FBQ2dULDhGQUFvQjtJQUFDRyxjQUFjLEVBQUUsYUFBYSxHQUFDemIsSUFBSSxHQUFDLFNBQVU7SUFBQzROLFFBQVEsRUFBRSxTQUFBQSxTQUFDb04sSUFBSTtNQUFBLE9BQUs4QixlQUFlLENBQUM5QixJQUFJLENBQUM7SUFBQTtFQUFDLEVBQUcsQ0FFbEosRUFFRm5OLFNBQVMsaUJBQ0x2RiwyREFBQTtJQUFLMEMsU0FBUyxFQUFDO0VBQWtCLGdCQUM3QjFDLDJEQUFBLDBCQUNJQSwyREFBQSxhQUFLdUYsU0FBUyxDQUFNLENBQ25CLENBRVosRUFJRGdQLFlBQVksaUJBQ1J2VSwyREFBQTtJQUFRaVUsTUFBTSxFQUFFLElBQUs7SUFBQ2xZLElBQUksRUFBRUEsSUFBSztJQUFDbEcsS0FBSyxFQUFFMGUsWUFBWSxDQUFDM1IsRUFBRztJQUFDQyxRQUFRLEVBQUUsU0FBQUEsU0FBQSxFQUFNLENBQUM7RUFBRSxnQkFDekU3QywyREFBQTtJQUFRMEMsU0FBUyxFQUFDLGlDQUFpQztJQUFDN00sS0FBSyxFQUFFMGUsWUFBWSxDQUFDM1IsRUFBRztJQUFDLFlBQVUyUixZQUFZLENBQUM1QjtFQUFJLEdBQUU0QixZQUFZLENBQUM1QixHQUFHLENBQVUsQ0FFMUksQ0FFTjtBQUlYLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7K0NDcERELHFKQUFBemQsbUJBQUEsWUFBQUEsb0JBQUEsV0FBQUMsT0FBQSxTQUFBQSxPQUFBLE9BQUFDLEVBQUEsR0FBQUMsTUFBQSxDQUFBQyxTQUFBLEVBQUFDLE1BQUEsR0FBQUgsRUFBQSxDQUFBSSxjQUFBLEVBQUFDLGNBQUEsR0FBQUosTUFBQSxDQUFBSSxjQUFBLGNBQUFDLEdBQUEsRUFBQUMsR0FBQSxFQUFBQyxJQUFBLElBQUFGLEdBQUEsQ0FBQUMsR0FBQSxJQUFBQyxJQUFBLENBQUFDLEtBQUEsS0FBQUMsT0FBQSx3QkFBQUMsTUFBQSxHQUFBQSxNQUFBLE9BQUFDLGNBQUEsR0FBQUYsT0FBQSxDQUFBRyxRQUFBLGtCQUFBQyxtQkFBQSxHQUFBSixPQUFBLENBQUFLLGFBQUEsdUJBQUFDLGlCQUFBLEdBQUFOLE9BQUEsQ0FBQU8sV0FBQSw4QkFBQUMsT0FBQVosR0FBQSxFQUFBQyxHQUFBLEVBQUFFLEtBQUEsV0FBQVIsTUFBQSxDQUFBSSxjQUFBLENBQUFDLEdBQUEsRUFBQUMsR0FBQSxJQUFBRSxLQUFBLEVBQUFBLEtBQUEsRUFBQVUsVUFBQSxNQUFBQyxZQUFBLE1BQUFDLFFBQUEsU0FBQWYsR0FBQSxDQUFBQyxHQUFBLFdBQUFXLE1BQUEsbUJBQUFJLEdBQUEsSUFBQUosTUFBQSxZQUFBQSxPQUFBWixHQUFBLEVBQUFDLEdBQUEsRUFBQUUsS0FBQSxXQUFBSCxHQUFBLENBQUFDLEdBQUEsSUFBQUUsS0FBQSxnQkFBQWMsS0FBQUMsT0FBQSxFQUFBQyxPQUFBLEVBQUFDLElBQUEsRUFBQUMsV0FBQSxRQUFBQyxjQUFBLEdBQUFILE9BQUEsSUFBQUEsT0FBQSxDQUFBdkIsU0FBQSxZQUFBMkIsU0FBQSxHQUFBSixPQUFBLEdBQUFJLFNBQUEsRUFBQUMsU0FBQSxHQUFBN0IsTUFBQSxDQUFBOEIsTUFBQSxDQUFBSCxjQUFBLENBQUExQixTQUFBLEdBQUE4QixPQUFBLE9BQUFDLE9BQUEsQ0FBQU4sV0FBQSxnQkFBQXRCLGNBQUEsQ0FBQXlCLFNBQUEsZUFBQXJCLEtBQUEsRUFBQXlCLGdCQUFBLENBQUFWLE9BQUEsRUFBQUUsSUFBQSxFQUFBTSxPQUFBLE1BQUFGLFNBQUEsYUFBQUssU0FBQUMsRUFBQSxFQUFBOUIsR0FBQSxFQUFBK0IsR0FBQSxtQkFBQUMsSUFBQSxZQUFBRCxHQUFBLEVBQUFELEVBQUEsQ0FBQUcsSUFBQSxDQUFBakMsR0FBQSxFQUFBK0IsR0FBQSxjQUFBZixHQUFBLGFBQUFnQixJQUFBLFdBQUFELEdBQUEsRUFBQWYsR0FBQSxRQUFBdkIsT0FBQSxDQUFBd0IsSUFBQSxHQUFBQSxJQUFBLE1BQUFpQixnQkFBQSxnQkFBQVgsVUFBQSxjQUFBWSxrQkFBQSxjQUFBQywyQkFBQSxTQUFBQyxpQkFBQSxPQUFBekIsTUFBQSxDQUFBeUIsaUJBQUEsRUFBQS9CLGNBQUEscUNBQUFnQyxRQUFBLEdBQUEzQyxNQUFBLENBQUE0QyxjQUFBLEVBQUFDLHVCQUFBLEdBQUFGLFFBQUEsSUFBQUEsUUFBQSxDQUFBQSxRQUFBLENBQUFHLE1BQUEsUUFBQUQsdUJBQUEsSUFBQUEsdUJBQUEsS0FBQTlDLEVBQUEsSUFBQUcsTUFBQSxDQUFBb0MsSUFBQSxDQUFBTyx1QkFBQSxFQUFBbEMsY0FBQSxNQUFBK0IsaUJBQUEsR0FBQUcsdUJBQUEsT0FBQUUsRUFBQSxHQUFBTiwwQkFBQSxDQUFBeEMsU0FBQSxHQUFBMkIsU0FBQSxDQUFBM0IsU0FBQSxHQUFBRCxNQUFBLENBQUE4QixNQUFBLENBQUFZLGlCQUFBLFlBQUFNLHNCQUFBL0MsU0FBQSxnQ0FBQWdELE9BQUEsV0FBQUMsTUFBQSxJQUFBakMsTUFBQSxDQUFBaEIsU0FBQSxFQUFBaUQsTUFBQSxZQUFBZCxHQUFBLGdCQUFBZSxPQUFBLENBQUFELE1BQUEsRUFBQWQsR0FBQSxzQkFBQWdCLGNBQUF2QixTQUFBLEVBQUF3QixXQUFBLGFBQUFDLE9BQUFKLE1BQUEsRUFBQWQsR0FBQSxFQUFBbUIsT0FBQSxFQUFBQyxNQUFBLFFBQUFDLE1BQUEsR0FBQXZCLFFBQUEsQ0FBQUwsU0FBQSxDQUFBcUIsTUFBQSxHQUFBckIsU0FBQSxFQUFBTyxHQUFBLG1CQUFBcUIsTUFBQSxDQUFBcEIsSUFBQSxRQUFBcUIsTUFBQSxHQUFBRCxNQUFBLENBQUFyQixHQUFBLEVBQUE1QixLQUFBLEdBQUFrRCxNQUFBLENBQUFsRCxLQUFBLFNBQUFBLEtBQUEsZ0JBQUFtRCxPQUFBLENBQUFuRCxLQUFBLEtBQUFOLE1BQUEsQ0FBQW9DLElBQUEsQ0FBQTlCLEtBQUEsZUFBQTZDLFdBQUEsQ0FBQUUsT0FBQSxDQUFBL0MsS0FBQSxDQUFBb0QsT0FBQSxFQUFBQyxJQUFBLFdBQUFyRCxLQUFBLElBQUE4QyxNQUFBLFNBQUE5QyxLQUFBLEVBQUErQyxPQUFBLEVBQUFDLE1BQUEsZ0JBQUFuQyxHQUFBLElBQUFpQyxNQUFBLFVBQUFqQyxHQUFBLEVBQUFrQyxPQUFBLEVBQUFDLE1BQUEsUUFBQUgsV0FBQSxDQUFBRSxPQUFBLENBQUEvQyxLQUFBLEVBQUFxRCxJQUFBLFdBQUFDLFNBQUEsSUFBQUosTUFBQSxDQUFBbEQsS0FBQSxHQUFBc0QsU0FBQSxFQUFBUCxPQUFBLENBQUFHLE1BQUEsZ0JBQUFLLEtBQUEsV0FBQVQsTUFBQSxVQUFBUyxLQUFBLEVBQUFSLE9BQUEsRUFBQUMsTUFBQSxTQUFBQSxNQUFBLENBQUFDLE1BQUEsQ0FBQXJCLEdBQUEsU0FBQTRCLGVBQUEsRUFBQTVELGNBQUEsb0JBQUFJLEtBQUEsV0FBQUEsTUFBQTBDLE1BQUEsRUFBQWQsR0FBQSxhQUFBNkIsMkJBQUEsZUFBQVosV0FBQSxXQUFBRSxPQUFBLEVBQUFDLE1BQUEsSUFBQUYsTUFBQSxDQUFBSixNQUFBLEVBQUFkLEdBQUEsRUFBQW1CLE9BQUEsRUFBQUMsTUFBQSxnQkFBQVEsZUFBQSxHQUFBQSxlQUFBLEdBQUFBLGVBQUEsQ0FBQUgsSUFBQSxDQUFBSSwwQkFBQSxFQUFBQSwwQkFBQSxJQUFBQSwwQkFBQSxxQkFBQWhDLGlCQUFBVixPQUFBLEVBQUFFLElBQUEsRUFBQU0sT0FBQSxRQUFBbUMsS0FBQSxzQ0FBQWhCLE1BQUEsRUFBQWQsR0FBQSx3QkFBQThCLEtBQUEsWUFBQUMsS0FBQSxzREFBQUQsS0FBQSxvQkFBQWhCLE1BQUEsUUFBQWQsR0FBQSxTQUFBZ0MsVUFBQSxXQUFBckMsT0FBQSxDQUFBbUIsTUFBQSxHQUFBQSxNQUFBLEVBQUFuQixPQUFBLENBQUFLLEdBQUEsR0FBQUEsR0FBQSxVQUFBaUMsUUFBQSxHQUFBdEMsT0FBQSxDQUFBc0MsUUFBQSxNQUFBQSxRQUFBLFFBQUFDLGNBQUEsR0FBQUMsbUJBQUEsQ0FBQUYsUUFBQSxFQUFBdEMsT0FBQSxPQUFBdUMsY0FBQSxRQUFBQSxjQUFBLEtBQUEvQixnQkFBQSxtQkFBQStCLGNBQUEscUJBQUF2QyxPQUFBLENBQUFtQixNQUFBLEVBQUFuQixPQUFBLENBQUF5QyxJQUFBLEdBQUF6QyxPQUFBLENBQUEwQyxLQUFBLEdBQUExQyxPQUFBLENBQUFLLEdBQUEsc0JBQUFMLE9BQUEsQ0FBQW1CLE1BQUEsNkJBQUFnQixLQUFBLFFBQUFBLEtBQUEsZ0JBQUFuQyxPQUFBLENBQUFLLEdBQUEsRUFBQUwsT0FBQSxDQUFBMkMsaUJBQUEsQ0FBQTNDLE9BQUEsQ0FBQUssR0FBQSx1QkFBQUwsT0FBQSxDQUFBbUIsTUFBQSxJQUFBbkIsT0FBQSxDQUFBNEMsTUFBQSxXQUFBNUMsT0FBQSxDQUFBSyxHQUFBLEdBQUE4QixLQUFBLG9CQUFBVCxNQUFBLEdBQUF2QixRQUFBLENBQUFYLE9BQUEsRUFBQUUsSUFBQSxFQUFBTSxPQUFBLG9CQUFBMEIsTUFBQSxDQUFBcEIsSUFBQSxRQUFBNkIsS0FBQSxHQUFBbkMsT0FBQSxDQUFBNkMsSUFBQSxtQ0FBQW5CLE1BQUEsQ0FBQXJCLEdBQUEsS0FBQUcsZ0JBQUEscUJBQUEvQixLQUFBLEVBQUFpRCxNQUFBLENBQUFyQixHQUFBLEVBQUF3QyxJQUFBLEVBQUE3QyxPQUFBLENBQUE2QyxJQUFBLGtCQUFBbkIsTUFBQSxDQUFBcEIsSUFBQSxLQUFBNkIsS0FBQSxnQkFBQW5DLE9BQUEsQ0FBQW1CLE1BQUEsWUFBQW5CLE9BQUEsQ0FBQUssR0FBQSxHQUFBcUIsTUFBQSxDQUFBckIsR0FBQSxtQkFBQW1DLG9CQUFBRixRQUFBLEVBQUF0QyxPQUFBLFFBQUE4QyxVQUFBLEdBQUE5QyxPQUFBLENBQUFtQixNQUFBLEVBQUFBLE1BQUEsR0FBQW1CLFFBQUEsQ0FBQXpELFFBQUEsQ0FBQWlFLFVBQUEsT0FBQUMsU0FBQSxLQUFBNUIsTUFBQSxTQUFBbkIsT0FBQSxDQUFBc0MsUUFBQSxxQkFBQVEsVUFBQSxJQUFBUixRQUFBLENBQUF6RCxRQUFBLGVBQUFtQixPQUFBLENBQUFtQixNQUFBLGFBQUFuQixPQUFBLENBQUFLLEdBQUEsR0FBQTBDLFNBQUEsRUFBQVAsbUJBQUEsQ0FBQUYsUUFBQSxFQUFBdEMsT0FBQSxlQUFBQSxPQUFBLENBQUFtQixNQUFBLGtCQUFBMkIsVUFBQSxLQUFBOUMsT0FBQSxDQUFBbUIsTUFBQSxZQUFBbkIsT0FBQSxDQUFBSyxHQUFBLE9BQUEyQyxTQUFBLHVDQUFBRixVQUFBLGlCQUFBdEMsZ0JBQUEsTUFBQWtCLE1BQUEsR0FBQXZCLFFBQUEsQ0FBQWdCLE1BQUEsRUFBQW1CLFFBQUEsQ0FBQXpELFFBQUEsRUFBQW1CLE9BQUEsQ0FBQUssR0FBQSxtQkFBQXFCLE1BQUEsQ0FBQXBCLElBQUEsU0FBQU4sT0FBQSxDQUFBbUIsTUFBQSxZQUFBbkIsT0FBQSxDQUFBSyxHQUFBLEdBQUFxQixNQUFBLENBQUFyQixHQUFBLEVBQUFMLE9BQUEsQ0FBQXNDLFFBQUEsU0FBQTlCLGdCQUFBLE1BQUF5QyxJQUFBLEdBQUF2QixNQUFBLENBQUFyQixHQUFBLFNBQUE0QyxJQUFBLEdBQUFBLElBQUEsQ0FBQUosSUFBQSxJQUFBN0MsT0FBQSxDQUFBc0MsUUFBQSxDQUFBWSxVQUFBLElBQUFELElBQUEsQ0FBQXhFLEtBQUEsRUFBQXVCLE9BQUEsQ0FBQW1ELElBQUEsR0FBQWIsUUFBQSxDQUFBYyxPQUFBLGVBQUFwRCxPQUFBLENBQUFtQixNQUFBLEtBQUFuQixPQUFBLENBQUFtQixNQUFBLFdBQUFuQixPQUFBLENBQUFLLEdBQUEsR0FBQTBDLFNBQUEsR0FBQS9DLE9BQUEsQ0FBQXNDLFFBQUEsU0FBQTlCLGdCQUFBLElBQUF5QyxJQUFBLElBQUFqRCxPQUFBLENBQUFtQixNQUFBLFlBQUFuQixPQUFBLENBQUFLLEdBQUEsT0FBQTJDLFNBQUEsc0NBQUFoRCxPQUFBLENBQUFzQyxRQUFBLFNBQUE5QixnQkFBQSxjQUFBNkMsYUFBQUMsSUFBQSxRQUFBQyxLQUFBLEtBQUFDLE1BQUEsRUFBQUYsSUFBQSxZQUFBQSxJQUFBLEtBQUFDLEtBQUEsQ0FBQUUsUUFBQSxHQUFBSCxJQUFBLFdBQUFBLElBQUEsS0FBQUMsS0FBQSxDQUFBRyxVQUFBLEdBQUFKLElBQUEsS0FBQUMsS0FBQSxDQUFBSSxRQUFBLEdBQUFMLElBQUEsV0FBQU0sVUFBQSxDQUFBQyxJQUFBLENBQUFOLEtBQUEsY0FBQU8sY0FBQVAsS0FBQSxRQUFBN0IsTUFBQSxHQUFBNkIsS0FBQSxDQUFBUSxVQUFBLFFBQUFyQyxNQUFBLENBQUFwQixJQUFBLG9CQUFBb0IsTUFBQSxDQUFBckIsR0FBQSxFQUFBa0QsS0FBQSxDQUFBUSxVQUFBLEdBQUFyQyxNQUFBLGFBQUF6QixRQUFBTixXQUFBLFNBQUFpRSxVQUFBLE1BQUFKLE1BQUEsYUFBQTdELFdBQUEsQ0FBQXVCLE9BQUEsQ0FBQW1DLFlBQUEsY0FBQVcsS0FBQSxpQkFBQWpELE9BQUFrRCxRQUFBLFFBQUFBLFFBQUEsUUFBQUMsY0FBQSxHQUFBRCxRQUFBLENBQUFyRixjQUFBLE9BQUFzRixjQUFBLFNBQUFBLGNBQUEsQ0FBQTNELElBQUEsQ0FBQTBELFFBQUEsNEJBQUFBLFFBQUEsQ0FBQWQsSUFBQSxTQUFBYyxRQUFBLE9BQUFFLEtBQUEsQ0FBQUYsUUFBQSxDQUFBRyxNQUFBLFNBQUFDLENBQUEsT0FBQWxCLElBQUEsWUFBQUEsS0FBQSxhQUFBa0IsQ0FBQSxHQUFBSixRQUFBLENBQUFHLE1BQUEsT0FBQWpHLE1BQUEsQ0FBQW9DLElBQUEsQ0FBQTBELFFBQUEsRUFBQUksQ0FBQSxVQUFBbEIsSUFBQSxDQUFBMUUsS0FBQSxHQUFBd0YsUUFBQSxDQUFBSSxDQUFBLEdBQUFsQixJQUFBLENBQUFOLElBQUEsT0FBQU0sSUFBQSxTQUFBQSxJQUFBLENBQUExRSxLQUFBLEdBQUFzRSxTQUFBLEVBQUFJLElBQUEsQ0FBQU4sSUFBQSxPQUFBTSxJQUFBLFlBQUFBLElBQUEsQ0FBQUEsSUFBQSxHQUFBQSxJQUFBLGVBQUFBLElBQUEsRUFBQWQsVUFBQSxlQUFBQSxXQUFBLGFBQUE1RCxLQUFBLEVBQUFzRSxTQUFBLEVBQUFGLElBQUEsaUJBQUFwQyxpQkFBQSxDQUFBdkMsU0FBQSxHQUFBd0MsMEJBQUEsRUFBQXJDLGNBQUEsQ0FBQTJDLEVBQUEsbUJBQUF2QyxLQUFBLEVBQUFpQywwQkFBQSxFQUFBdEIsWUFBQSxTQUFBZixjQUFBLENBQUFxQywwQkFBQSxtQkFBQWpDLEtBQUEsRUFBQWdDLGlCQUFBLEVBQUFyQixZQUFBLFNBQUFxQixpQkFBQSxDQUFBNkQsV0FBQSxHQUFBcEYsTUFBQSxDQUFBd0IsMEJBQUEsRUFBQTFCLGlCQUFBLHdCQUFBakIsT0FBQSxDQUFBd0csbUJBQUEsYUFBQUMsTUFBQSxRQUFBQyxJQUFBLHdCQUFBRCxNQUFBLElBQUFBLE1BQUEsQ0FBQUUsV0FBQSxXQUFBRCxJQUFBLEtBQUFBLElBQUEsS0FBQWhFLGlCQUFBLDZCQUFBZ0UsSUFBQSxDQUFBSCxXQUFBLElBQUFHLElBQUEsQ0FBQUUsSUFBQSxPQUFBNUcsT0FBQSxDQUFBNkcsSUFBQSxhQUFBSixNQUFBLFdBQUF2RyxNQUFBLENBQUE0RyxjQUFBLEdBQUE1RyxNQUFBLENBQUE0RyxjQUFBLENBQUFMLE1BQUEsRUFBQTlELDBCQUFBLEtBQUE4RCxNQUFBLENBQUFNLFNBQUEsR0FBQXBFLDBCQUFBLEVBQUF4QixNQUFBLENBQUFzRixNQUFBLEVBQUF4RixpQkFBQSx5QkFBQXdGLE1BQUEsQ0FBQXRHLFNBQUEsR0FBQUQsTUFBQSxDQUFBOEIsTUFBQSxDQUFBaUIsRUFBQSxHQUFBd0QsTUFBQSxLQUFBekcsT0FBQSxDQUFBZ0gsS0FBQSxhQUFBMUUsR0FBQSxhQUFBd0IsT0FBQSxFQUFBeEIsR0FBQSxPQUFBWSxxQkFBQSxDQUFBSSxhQUFBLENBQUFuRCxTQUFBLEdBQUFnQixNQUFBLENBQUFtQyxhQUFBLENBQUFuRCxTQUFBLEVBQUFZLG1CQUFBLGlDQUFBZixPQUFBLENBQUFzRCxhQUFBLEdBQUFBLGFBQUEsRUFBQXRELE9BQUEsQ0FBQWlILEtBQUEsYUFBQXhGLE9BQUEsRUFBQUMsT0FBQSxFQUFBQyxJQUFBLEVBQUFDLFdBQUEsRUFBQTJCLFdBQUEsZUFBQUEsV0FBQSxLQUFBQSxXQUFBLEdBQUEyRCxPQUFBLE9BQUFDLElBQUEsT0FBQTdELGFBQUEsQ0FBQTlCLElBQUEsQ0FBQUMsT0FBQSxFQUFBQyxPQUFBLEVBQUFDLElBQUEsRUFBQUMsV0FBQSxHQUFBMkIsV0FBQSxVQUFBdkQsT0FBQSxDQUFBd0csbUJBQUEsQ0FBQTlFLE9BQUEsSUFBQXlGLElBQUEsR0FBQUEsSUFBQSxDQUFBL0IsSUFBQSxHQUFBckIsSUFBQSxXQUFBSCxNQUFBLFdBQUFBLE1BQUEsQ0FBQWtCLElBQUEsR0FBQWxCLE1BQUEsQ0FBQWxELEtBQUEsR0FBQXlHLElBQUEsQ0FBQS9CLElBQUEsV0FBQWxDLHFCQUFBLENBQUFELEVBQUEsR0FBQTlCLE1BQUEsQ0FBQThCLEVBQUEsRUFBQWhDLGlCQUFBLGdCQUFBRSxNQUFBLENBQUE4QixFQUFBLEVBQUFwQyxjQUFBLGlDQUFBTSxNQUFBLENBQUE4QixFQUFBLDZEQUFBakQsT0FBQSxDQUFBb0gsSUFBQSxhQUFBQyxHQUFBLFFBQUFDLE1BQUEsR0FBQXBILE1BQUEsQ0FBQW1ILEdBQUEsR0FBQUQsSUFBQSxnQkFBQTVHLEdBQUEsSUFBQThHLE1BQUEsRUFBQUYsSUFBQSxDQUFBdEIsSUFBQSxDQUFBdEYsR0FBQSxVQUFBNEcsSUFBQSxDQUFBRyxPQUFBLGFBQUFuQyxLQUFBLFdBQUFnQyxJQUFBLENBQUFmLE1BQUEsU0FBQTdGLEdBQUEsR0FBQTRHLElBQUEsQ0FBQUksR0FBQSxRQUFBaEgsR0FBQSxJQUFBOEcsTUFBQSxTQUFBbEMsSUFBQSxDQUFBMUUsS0FBQSxHQUFBRixHQUFBLEVBQUE0RSxJQUFBLENBQUFOLElBQUEsT0FBQU0sSUFBQSxXQUFBQSxJQUFBLENBQUFOLElBQUEsT0FBQU0sSUFBQSxRQUFBcEYsT0FBQSxDQUFBZ0QsTUFBQSxHQUFBQSxNQUFBLEVBQUFkLE9BQUEsQ0FBQS9CLFNBQUEsS0FBQXdHLFdBQUEsRUFBQXpFLE9BQUEsRUFBQStELEtBQUEsV0FBQUEsTUFBQXdCLGFBQUEsYUFBQUMsSUFBQSxXQUFBdEMsSUFBQSxXQUFBVixJQUFBLFFBQUFDLEtBQUEsR0FBQUssU0FBQSxPQUFBRixJQUFBLFlBQUFQLFFBQUEsY0FBQW5CLE1BQUEsZ0JBQUFkLEdBQUEsR0FBQTBDLFNBQUEsT0FBQWEsVUFBQSxDQUFBMUMsT0FBQSxDQUFBNEMsYUFBQSxJQUFBMEIsYUFBQSxXQUFBYixJQUFBLGtCQUFBQSxJQUFBLENBQUFlLE1BQUEsT0FBQXZILE1BQUEsQ0FBQW9DLElBQUEsT0FBQW9FLElBQUEsTUFBQVIsS0FBQSxFQUFBUSxJQUFBLENBQUFnQixLQUFBLGNBQUFoQixJQUFBLElBQUE1QixTQUFBLE1BQUE2QyxJQUFBLFdBQUFBLEtBQUEsU0FBQS9DLElBQUEsV0FBQWdELFVBQUEsUUFBQWpDLFVBQUEsSUFBQUcsVUFBQSxrQkFBQThCLFVBQUEsQ0FBQXZGLElBQUEsUUFBQXVGLFVBQUEsQ0FBQXhGLEdBQUEsY0FBQXlGLElBQUEsS0FBQW5ELGlCQUFBLFdBQUFBLGtCQUFBb0QsU0FBQSxhQUFBbEQsSUFBQSxRQUFBa0QsU0FBQSxNQUFBL0YsT0FBQSxrQkFBQWdHLE9BQUFDLEdBQUEsRUFBQUMsTUFBQSxXQUFBeEUsTUFBQSxDQUFBcEIsSUFBQSxZQUFBb0IsTUFBQSxDQUFBckIsR0FBQSxHQUFBMEYsU0FBQSxFQUFBL0YsT0FBQSxDQUFBbUQsSUFBQSxHQUFBOEMsR0FBQSxFQUFBQyxNQUFBLEtBQUFsRyxPQUFBLENBQUFtQixNQUFBLFdBQUFuQixPQUFBLENBQUFLLEdBQUEsR0FBQTBDLFNBQUEsS0FBQW1ELE1BQUEsYUFBQTdCLENBQUEsUUFBQVQsVUFBQSxDQUFBUSxNQUFBLE1BQUFDLENBQUEsU0FBQUEsQ0FBQSxRQUFBZCxLQUFBLFFBQUFLLFVBQUEsQ0FBQVMsQ0FBQSxHQUFBM0MsTUFBQSxHQUFBNkIsS0FBQSxDQUFBUSxVQUFBLGlCQUFBUixLQUFBLENBQUFDLE1BQUEsU0FBQXdDLE1BQUEsYUFBQXpDLEtBQUEsQ0FBQUMsTUFBQSxTQUFBaUMsSUFBQSxRQUFBVSxRQUFBLEdBQUFoSSxNQUFBLENBQUFvQyxJQUFBLENBQUFnRCxLQUFBLGVBQUE2QyxVQUFBLEdBQUFqSSxNQUFBLENBQUFvQyxJQUFBLENBQUFnRCxLQUFBLHFCQUFBNEMsUUFBQSxJQUFBQyxVQUFBLGFBQUFYLElBQUEsR0FBQWxDLEtBQUEsQ0FBQUUsUUFBQSxTQUFBdUMsTUFBQSxDQUFBekMsS0FBQSxDQUFBRSxRQUFBLGdCQUFBZ0MsSUFBQSxHQUFBbEMsS0FBQSxDQUFBRyxVQUFBLFNBQUFzQyxNQUFBLENBQUF6QyxLQUFBLENBQUFHLFVBQUEsY0FBQXlDLFFBQUEsYUFBQVYsSUFBQSxHQUFBbEMsS0FBQSxDQUFBRSxRQUFBLFNBQUF1QyxNQUFBLENBQUF6QyxLQUFBLENBQUFFLFFBQUEscUJBQUEyQyxVQUFBLFlBQUFoRSxLQUFBLHFEQUFBcUQsSUFBQSxHQUFBbEMsS0FBQSxDQUFBRyxVQUFBLFNBQUFzQyxNQUFBLENBQUF6QyxLQUFBLENBQUFHLFVBQUEsWUFBQWQsTUFBQSxXQUFBQSxPQUFBdEMsSUFBQSxFQUFBRCxHQUFBLGFBQUFnRSxDQUFBLFFBQUFULFVBQUEsQ0FBQVEsTUFBQSxNQUFBQyxDQUFBLFNBQUFBLENBQUEsUUFBQWQsS0FBQSxRQUFBSyxVQUFBLENBQUFTLENBQUEsT0FBQWQsS0FBQSxDQUFBQyxNQUFBLFNBQUFpQyxJQUFBLElBQUF0SCxNQUFBLENBQUFvQyxJQUFBLENBQUFnRCxLQUFBLHdCQUFBa0MsSUFBQSxHQUFBbEMsS0FBQSxDQUFBRyxVQUFBLFFBQUEyQyxZQUFBLEdBQUE5QyxLQUFBLGFBQUE4QyxZQUFBLGlCQUFBL0YsSUFBQSxtQkFBQUEsSUFBQSxLQUFBK0YsWUFBQSxDQUFBN0MsTUFBQSxJQUFBbkQsR0FBQSxJQUFBQSxHQUFBLElBQUFnRyxZQUFBLENBQUEzQyxVQUFBLEtBQUEyQyxZQUFBLGNBQUEzRSxNQUFBLEdBQUEyRSxZQUFBLEdBQUFBLFlBQUEsQ0FBQXRDLFVBQUEsY0FBQXJDLE1BQUEsQ0FBQXBCLElBQUEsR0FBQUEsSUFBQSxFQUFBb0IsTUFBQSxDQUFBckIsR0FBQSxHQUFBQSxHQUFBLEVBQUFnRyxZQUFBLFNBQUFsRixNQUFBLGdCQUFBZ0MsSUFBQSxHQUFBa0QsWUFBQSxDQUFBM0MsVUFBQSxFQUFBbEQsZ0JBQUEsU0FBQThGLFFBQUEsQ0FBQTVFLE1BQUEsTUFBQTRFLFFBQUEsV0FBQUEsU0FBQTVFLE1BQUEsRUFBQWlDLFFBQUEsb0JBQUFqQyxNQUFBLENBQUFwQixJQUFBLFFBQUFvQixNQUFBLENBQUFyQixHQUFBLHFCQUFBcUIsTUFBQSxDQUFBcEIsSUFBQSxtQkFBQW9CLE1BQUEsQ0FBQXBCLElBQUEsUUFBQTZDLElBQUEsR0FBQXpCLE1BQUEsQ0FBQXJCLEdBQUEsZ0JBQUFxQixNQUFBLENBQUFwQixJQUFBLFNBQUF3RixJQUFBLFFBQUF6RixHQUFBLEdBQUFxQixNQUFBLENBQUFyQixHQUFBLE9BQUFjLE1BQUEsa0JBQUFnQyxJQUFBLHlCQUFBekIsTUFBQSxDQUFBcEIsSUFBQSxJQUFBcUQsUUFBQSxVQUFBUixJQUFBLEdBQUFRLFFBQUEsR0FBQW5ELGdCQUFBLEtBQUErRixNQUFBLFdBQUFBLE9BQUE3QyxVQUFBLGFBQUFXLENBQUEsUUFBQVQsVUFBQSxDQUFBUSxNQUFBLE1BQUFDLENBQUEsU0FBQUEsQ0FBQSxRQUFBZCxLQUFBLFFBQUFLLFVBQUEsQ0FBQVMsQ0FBQSxPQUFBZCxLQUFBLENBQUFHLFVBQUEsS0FBQUEsVUFBQSxjQUFBNEMsUUFBQSxDQUFBL0MsS0FBQSxDQUFBUSxVQUFBLEVBQUFSLEtBQUEsQ0FBQUksUUFBQSxHQUFBRyxhQUFBLENBQUFQLEtBQUEsR0FBQS9DLGdCQUFBLHlCQUFBZ0csT0FBQWhELE1BQUEsYUFBQWEsQ0FBQSxRQUFBVCxVQUFBLENBQUFRLE1BQUEsTUFBQUMsQ0FBQSxTQUFBQSxDQUFBLFFBQUFkLEtBQUEsUUFBQUssVUFBQSxDQUFBUyxDQUFBLE9BQUFkLEtBQUEsQ0FBQUMsTUFBQSxLQUFBQSxNQUFBLFFBQUE5QixNQUFBLEdBQUE2QixLQUFBLENBQUFRLFVBQUEsa0JBQUFyQyxNQUFBLENBQUFwQixJQUFBLFFBQUFtRyxNQUFBLEdBQUEvRSxNQUFBLENBQUFyQixHQUFBLEVBQUF5RCxhQUFBLENBQUFQLEtBQUEsWUFBQWtELE1BQUEsZ0JBQUFyRSxLQUFBLDhCQUFBc0UsYUFBQSxXQUFBQSxjQUFBekMsUUFBQSxFQUFBZixVQUFBLEVBQUFFLE9BQUEsZ0JBQUFkLFFBQUEsS0FBQXpELFFBQUEsRUFBQWtDLE1BQUEsQ0FBQWtELFFBQUEsR0FBQWYsVUFBQSxFQUFBQSxVQUFBLEVBQUFFLE9BQUEsRUFBQUEsT0FBQSxvQkFBQWpDLE1BQUEsVUFBQWQsR0FBQSxHQUFBMEMsU0FBQSxHQUFBdkMsZ0JBQUEsT0FBQXpDLE9BQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FBQTRJLG1CQUFBQyxHQUFBLEVBQUFwRixPQUFBLEVBQUFDLE1BQUEsRUFBQW9GLEtBQUEsRUFBQUMsTUFBQSxFQUFBdkksR0FBQSxFQUFBOEIsR0FBQSxjQUFBNEMsSUFBQSxHQUFBMkQsR0FBQSxDQUFBckksR0FBQSxFQUFBOEIsR0FBQSxPQUFBNUIsS0FBQSxHQUFBd0UsSUFBQSxDQUFBeEUsS0FBQSxXQUFBdUQsS0FBQSxJQUFBUCxNQUFBLENBQUFPLEtBQUEsaUJBQUFpQixJQUFBLENBQUFKLElBQUEsSUFBQXJCLE9BQUEsQ0FBQS9DLEtBQUEsWUFBQXdHLE9BQUEsQ0FBQXpELE9BQUEsQ0FBQS9DLEtBQUEsRUFBQXFELElBQUEsQ0FBQStFLEtBQUEsRUFBQUMsTUFBQTtBQUFBLFNBQUFDLGtCQUFBM0csRUFBQSw2QkFBQVYsSUFBQSxTQUFBc0gsSUFBQSxHQUFBQyxTQUFBLGFBQUFoQyxPQUFBLFdBQUF6RCxPQUFBLEVBQUFDLE1BQUEsUUFBQW1GLEdBQUEsR0FBQXhHLEVBQUEsQ0FBQThHLEtBQUEsQ0FBQXhILElBQUEsRUFBQXNILElBQUEsWUFBQUgsTUFBQXBJLEtBQUEsSUFBQWtJLGtCQUFBLENBQUFDLEdBQUEsRUFBQXBGLE9BQUEsRUFBQUMsTUFBQSxFQUFBb0YsS0FBQSxFQUFBQyxNQUFBLFVBQUFySSxLQUFBLGNBQUFxSSxPQUFBeEgsR0FBQSxJQUFBcUgsa0JBQUEsQ0FBQUMsR0FBQSxFQUFBcEYsT0FBQSxFQUFBQyxNQUFBLEVBQUFvRixLQUFBLEVBQUFDLE1BQUEsV0FBQXhILEdBQUEsS0FBQXVILEtBQUEsQ0FBQTlELFNBQUE7QUFBQSxTQUFBb0UsZUFBQUMsR0FBQSxFQUFBL0MsQ0FBQSxXQUFBZ0QsZUFBQSxDQUFBRCxHQUFBLEtBQUFFLHFCQUFBLENBQUFGLEdBQUEsRUFBQS9DLENBQUEsS0FBQWtELDJCQUFBLENBQUFILEdBQUEsRUFBQS9DLENBQUEsS0FBQW1ELGdCQUFBO0FBQUEsU0FBQUEsaUJBQUEsY0FBQXhFLFNBQUE7QUFBQSxTQUFBdUUsNEJBQUFFLENBQUEsRUFBQUMsTUFBQSxTQUFBRCxDQUFBLHFCQUFBQSxDQUFBLHNCQUFBRSxpQkFBQSxDQUFBRixDQUFBLEVBQUFDLE1BQUEsT0FBQUUsQ0FBQSxHQUFBM0osTUFBQSxDQUFBQyxTQUFBLENBQUEySixRQUFBLENBQUF0SCxJQUFBLENBQUFrSCxDQUFBLEVBQUE5QixLQUFBLGFBQUFpQyxDQUFBLGlCQUFBSCxDQUFBLENBQUEvQyxXQUFBLEVBQUFrRCxDQUFBLEdBQUFILENBQUEsQ0FBQS9DLFdBQUEsQ0FBQUMsSUFBQSxNQUFBaUQsQ0FBQSxjQUFBQSxDQUFBLG1CQUFBRSxLQUFBLENBQUFDLElBQUEsQ0FBQU4sQ0FBQSxPQUFBRyxDQUFBLCtEQUFBSSxJQUFBLENBQUFKLENBQUEsVUFBQUQsaUJBQUEsQ0FBQUYsQ0FBQSxFQUFBQyxNQUFBO0FBQUEsU0FBQUMsa0JBQUFQLEdBQUEsRUFBQWEsR0FBQSxRQUFBQSxHQUFBLFlBQUFBLEdBQUEsR0FBQWIsR0FBQSxDQUFBaEQsTUFBQSxFQUFBNkQsR0FBQSxHQUFBYixHQUFBLENBQUFoRCxNQUFBLFdBQUFDLENBQUEsTUFBQTZELElBQUEsT0FBQUosS0FBQSxDQUFBRyxHQUFBLEdBQUE1RCxDQUFBLEdBQUE0RCxHQUFBLEVBQUE1RCxDQUFBLElBQUE2RCxJQUFBLENBQUE3RCxDQUFBLElBQUErQyxHQUFBLENBQUEvQyxDQUFBLFVBQUE2RCxJQUFBO0FBQUEsU0FBQVosc0JBQUFGLEdBQUEsRUFBQS9DLENBQUEsUUFBQThELEVBQUEsV0FBQWYsR0FBQSxnQ0FBQXpJLE1BQUEsSUFBQXlJLEdBQUEsQ0FBQXpJLE1BQUEsQ0FBQUUsUUFBQSxLQUFBdUksR0FBQSw0QkFBQWUsRUFBQSxRQUFBQyxFQUFBLEVBQUFDLEVBQUEsRUFBQUMsRUFBQSxFQUFBQyxFQUFBLEVBQUFDLElBQUEsT0FBQUMsRUFBQSxPQUFBQyxFQUFBLGlCQUFBSixFQUFBLElBQUFILEVBQUEsR0FBQUEsRUFBQSxDQUFBNUgsSUFBQSxDQUFBNkcsR0FBQSxHQUFBakUsSUFBQSxRQUFBa0IsQ0FBQSxRQUFBcEcsTUFBQSxDQUFBa0ssRUFBQSxNQUFBQSxFQUFBLFVBQUFNLEVBQUEsdUJBQUFBLEVBQUEsSUFBQUwsRUFBQSxHQUFBRSxFQUFBLENBQUEvSCxJQUFBLENBQUE0SCxFQUFBLEdBQUF0RixJQUFBLE1BQUEyRixJQUFBLENBQUEzRSxJQUFBLENBQUF1RSxFQUFBLENBQUEzSixLQUFBLEdBQUErSixJQUFBLENBQUFwRSxNQUFBLEtBQUFDLENBQUEsR0FBQW9FLEVBQUEsaUJBQUFuSixHQUFBLElBQUFvSixFQUFBLE9BQUFMLEVBQUEsR0FBQS9JLEdBQUEseUJBQUFtSixFQUFBLFlBQUFOLEVBQUEsZUFBQUksRUFBQSxHQUFBSixFQUFBLGNBQUFsSyxNQUFBLENBQUFzSyxFQUFBLE1BQUFBLEVBQUEsMkJBQUFHLEVBQUEsUUFBQUwsRUFBQSxhQUFBRyxJQUFBO0FBQUEsU0FBQW5CLGdCQUFBRCxHQUFBLFFBQUFVLEtBQUEsQ0FBQWEsT0FBQSxDQUFBdkIsR0FBQSxVQUFBQSxHQUFBO0FBRGlDO0FBQ3NDOztBQUV2RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTyxJQUFNZ1IsV0FBVyxHQUFHLFNBQWRBLFdBQVdBLENBQUlxRixVQUFVLEVBQXFCO0VBQUEsSUFBbkJ0YyxNQUFNLEdBQUE4RixTQUFBLENBQUE3QyxNQUFBLFFBQUE2QyxTQUFBLFFBQUFsRSxTQUFBLEdBQUFrRSxTQUFBLE1BQUcsS0FBSztFQUVsRCxJQUFBeUMsU0FBQSxHQUE4QmIsZ0RBQVEsQ0FBQyxLQUFLLENBQUM7SUFBQWMsVUFBQSxHQUFBeEMsY0FBQSxDQUFBdUMsU0FBQTtJQUF0Q2dQLE9BQU8sR0FBQS9PLFVBQUE7SUFBRUUsVUFBVSxHQUFBRixVQUFBO0VBQzFCLElBQUFHLFVBQUEsR0FBMEJqQixnREFBUSxDQUFDLElBQUksQ0FBQztJQUFBa0IsVUFBQSxHQUFBNUMsY0FBQSxDQUFBMkMsVUFBQTtJQUFqQzlILEtBQUssR0FBQStILFVBQUE7SUFBRXNILFFBQVEsR0FBQXRILFVBQUE7RUFDdEIsSUFBQUcsVUFBQSxHQUF3QnJCLGdEQUFRLENBQUMsSUFBSSxDQUFDO0lBQUFzQixVQUFBLEdBQUFoRCxjQUFBLENBQUErQyxVQUFBO0lBQS9CakgsSUFBSSxHQUFBa0gsVUFBQTtJQUFFMlEsT0FBTyxHQUFBM1EsVUFBQTs7RUFFcEI7QUFDSjtBQUNBO0FBQ0E7QUFDQTtFQUNJLElBQU1zTyxRQUFRO0lBQUEsSUFBQXZQLElBQUEsR0FBQW5DLGlCQUFBLGVBQUFqSixtQkFBQSxHQUFBOEcsSUFBQSxDQUFHLFNBQUErRixRQUFBO01BQUEsSUFBQXlSLElBQUE7UUFBQXNCLGVBQUE7UUFBQUMsR0FBQTtRQUFBQyxPQUFBO1FBQUFqYyxNQUFBO1FBQUFrYyxLQUFBLEdBQUE1VyxTQUFBO01BQUEsT0FBQW5KLG1CQUFBLEdBQUF5QixJQUFBLFVBQUFxTCxTQUFBQyxRQUFBO1FBQUEsa0JBQUFBLFFBQUEsQ0FBQXBGLElBQUEsR0FBQW9GLFFBQUEsQ0FBQTFILElBQUE7VUFBQTtZQUFPaVosSUFBSSxHQUFBeUIsS0FBQSxDQUFBelosTUFBQSxRQUFBeVosS0FBQSxRQUFBOWEsU0FBQSxHQUFBOGEsS0FBQSxNQUFHLElBQUk7WUFBRUgsZUFBZSxHQUFBRyxLQUFBLENBQUF6WixNQUFBLFFBQUF5WixLQUFBLFFBQUE5YSxTQUFBLEdBQUE4YSxLQUFBLE1BQUcsSUFBSTtZQUFBLEtBQ3BEbkYsT0FBTztjQUFBN04sUUFBQSxDQUFBMUgsSUFBQTtjQUFBO1lBQUE7WUFBQSxPQUFBMEgsUUFBQSxDQUFBakksTUFBQTtVQUFBO1lBR1ZpSCxVQUFVLENBQUMsSUFBSSxDQUFDO1lBQ2hCd0gsUUFBUSxDQUFDLElBQUksQ0FBQztZQUNkeUosT0FBTyxDQUFDLElBQUksQ0FBQztZQUVUNkMsR0FBRyxHQUFHRixVQUFVO1lBQ2hCRyxPQUFPLEdBQUcsQ0FBQyxDQUFDO1lBRWhCLElBQUd6YyxNQUFNLEtBQUssS0FBSyxJQUFJaWIsSUFBSSxFQUFHO2NBQzFCdUIsR0FBRyxHQUFHSCw2REFBWSxDQUFDQyxVQUFVLEVBQUVyQixJQUFJLENBQUM7WUFDeEMsQ0FBQyxNQUNJLElBQUdqYixNQUFNLEtBQUssTUFBTSxFQUFFO2NBQ3ZCeWMsT0FBTyxHQUFHO2dCQUNOemMsTUFBTSxFQUFFLE1BQU07Z0JBQ2QyYyxPQUFPLEVBQUU7a0JBQ0wsUUFBUSxFQUFFLGtCQUFrQjtrQkFDNUIsY0FBYyxFQUFFO2dCQUNwQixDQUFDO2dCQUNEakUsSUFBSSxFQUFFdkgsSUFBSSxDQUFDSSxTQUFTLENBQUMwSixJQUFJO2NBQzdCLENBQUM7WUFDTDtZQUFDdlIsUUFBQSxDQUFBcEYsSUFBQTtZQUFBb0YsUUFBQSxDQUFBMUgsSUFBQTtZQUFBLE9BR3dCMFMseURBQVEsQ0FBQzhILEdBQUcsRUFBRUMsT0FBTyxDQUFDO1VBQUE7WUFBckNqYyxNQUFNLEdBQUFrSixRQUFBLENBQUFwSSxJQUFBO1lBQ1pxWSxPQUFPLENBQUNuWixNQUFNLENBQUM7WUFDZitiLGVBQWUsQ0FBQy9iLE1BQU0sQ0FBQztZQUFDa0osUUFBQSxDQUFBMUgsSUFBQTtZQUFBO1VBQUE7WUFBQTBILFFBQUEsQ0FBQXBGLElBQUE7WUFBQW9GLFFBQUEsQ0FBQUksRUFBQSxHQUFBSixRQUFBO1lBRXhCLElBQUdBLFFBQUEsQ0FBQUksRUFBQSxZQUFhbEMscURBQVEsRUFBRTtjQUN0QnNJLFFBQVEsQ0FBQ3hHLFFBQUEsQ0FBQUksRUFBQSxDQUFFakIsTUFBTSxDQUFDO1lBQ3RCLENBQUMsTUFBTTtjQUNIK1QsT0FBTyxDQUFDL2IsS0FBSyxDQUFBNkksUUFBQSxDQUFBSSxFQUFBLENBQUc7WUFDcEI7VUFBQztZQUVMcEIsVUFBVSxDQUFDLEtBQUssQ0FBQztVQUFDO1VBQUE7WUFBQSxPQUFBZ0IsUUFBQSxDQUFBakYsSUFBQTtRQUFBO01BQUEsR0FBQStFLE9BQUE7SUFBQSxDQUNyQjtJQUFBLGdCQXJDSzhOLFFBQVFBLENBQUE7TUFBQSxPQUFBdlAsSUFBQSxDQUFBaEMsS0FBQSxPQUFBRCxTQUFBO0lBQUE7RUFBQSxHQXFDYjtFQUdELElBQU0yUixVQUFVLEdBQUcsU0FBYkEsVUFBVUEsQ0FBQSxFQUFTO0lBQ3JCdkgsUUFBUSxDQUFDLElBQUksQ0FBQztFQUNsQixDQUFDO0VBQ0QsSUFBTXNILFNBQVMsR0FBRyxTQUFaQSxTQUFTQSxDQUFBLEVBQVM7SUFDcEJtQyxPQUFPLENBQUMsSUFBSSxDQUFDO0VBQ2pCLENBQUM7RUFHRCxPQUFPO0lBQUNyQyxRQUFRLEVBQVJBLFFBQVE7SUFBRUMsT0FBTyxFQUFQQSxPQUFPO0lBQUUxVyxLQUFLLEVBQUxBLEtBQUs7SUFBRWlCLElBQUksRUFBSkEsSUFBSTtJQUFFMlYsVUFBVSxFQUFWQSxVQUFVO0lBQUVELFNBQVMsRUFBVEE7RUFBUyxDQUFDO0FBQ2xFLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDckV1QztBQUNvQztBQUNvQjtBQUNoRDtBQUNPO0FBRWhELElBQU1pRCxvQkFBb0IsR0FBRyxTQUF2QkEsb0JBQW9CQSxDQUFBMVMsSUFBQSxFQUFtQztFQUFBLElBQTlCNlMsY0FBYyxHQUFBN1MsSUFBQSxDQUFkNlMsY0FBYztJQUFFN04sUUFBUSxHQUFBaEYsSUFBQSxDQUFSZ0YsUUFBUTtFQUUxRCxJQUFBeEUsU0FBQSxHQUFrQmIsZ0RBQVEsQ0FBQyxFQUFFLENBQUM7SUFBQWMsVUFBQSxHQUFBeEMsY0FBQSxDQUFBdUMsU0FBQTtJQUF2QjBFLENBQUMsR0FBQXpFLFVBQUE7SUFBRTBFLElBQUksR0FBQTFFLFVBQUE7RUFDZCxJQUFNVSxZQUFZLEdBQUcsU0FBZkEsWUFBWUEsQ0FBR0MsQ0FBQyxFQUFJO0lBQ3RCK0QsSUFBSSxDQUFDL0QsQ0FBQyxDQUFDRSxNQUFNLENBQUMvTCxLQUFLLENBQUM7RUFDeEIsQ0FBQztFQUNELElBQUE2UCxnQkFBQSxHQUErQ1IsbUZBQWUsQ0FBQ2lPLGNBQWMsRUFBRTNOLENBQUMsRUFBRSxDQUFDLENBQUM7SUFBQUksaUJBQUEsR0FBQXJILGNBQUEsQ0FBQW1ILGdCQUFBO0lBQTdFM00sTUFBTSxHQUFBNk0saUJBQUE7SUFBRXdQLFVBQVUsR0FBQXhQLGlCQUFBO0lBQUU1RSxTQUFTLEdBQUE0RSxpQkFBQTtJQUFFeE0sS0FBSyxHQUFBd00saUJBQUE7RUFFM0MsSUFBTTZOLFlBQVksR0FBRyxTQUFmQSxZQUFZQSxDQUFHZixJQUFJLEVBQUk7SUFDekIwQyxVQUFVLEVBQUU7SUFDWjlQLFFBQVEsQ0FBQ29OLElBQUksQ0FBQztFQUNsQixDQUFDO0VBRUQsb0JBQ0kxUywyREFBQSxDQUFBQSx3REFBQSxxQkFDSUEsMkRBQUE7SUFBSzBDLFNBQVMsRUFBQztFQUF1QixnQkFDbEMxQywyREFBQTtJQUFPdEksSUFBSSxFQUFDLE1BQU07SUFBQ2dMLFNBQVMsRUFBQyxvQkFBb0I7SUFBQ3FELFdBQVcsRUFBQyxZQUFZO0lBQUNoSyxJQUFJLEVBQUMsR0FBRztJQUFDbEcsS0FBSyxFQUFFMlAsQ0FBRTtJQUFDM0MsUUFBUSxFQUFFcEI7RUFBYSxFQUFHLEVBRXBIK0QsQ0FBQyxLQUFLLEVBQUUsaUJBQUl4RiwyREFBQSxDQUFDMEQsNkRBQVc7SUFBQ29CLGVBQWUsRUFBQyxzQ0FBc0M7SUFBQy9CLE9BQU8sRUFBRSxTQUFBQSxRQUFBO01BQUEsT0FBTTBDLElBQUksQ0FBQyxFQUFFLENBQUM7SUFBQTtFQUFDLEVBQUcsRUFHM0csQ0FBQTFNLE1BQU0sYUFBTkEsTUFBTSx1QkFBTkEsTUFBTSxDQUFFOFosS0FBSyxDQUFDclgsTUFBTSxJQUFHLENBQUMsaUJBQ3BCd0UsMkRBQUEsQ0FBQ2lGLHNEQUFXO0lBQ1JILGVBQWUsRUFBQyxvQkFBb0I7SUFDcENrQixRQUFRLEVBQUVqTixNQUFNLENBQUM4WixLQUFNO0lBQ3ZCNU0sT0FBTyxFQUFFbVAsVUFBVztJQUNwQjlQLFFBQVEsRUFBRW1PLFlBQWE7SUFDdkJ2TixNQUFNLEVBQUUsU0FBQUEsT0FBQ3dNLElBQUksRUFBRXZNLFFBQVE7TUFBQSxvQkFBS25HLDJEQUFBLENBQUNvRixtR0FBZ0I7UUFBQ3pQLEdBQUcsRUFBRStjLElBQUksQ0FBQzlQLEVBQUc7UUFBQzhQLElBQUksRUFBRUEsSUFBSztRQUFDbE4sQ0FBQyxFQUFFQSxDQUFFO1FBQUNXLFFBQVEsRUFBRUEsUUFBUztRQUFDYixRQUFRLEVBQUVtTztNQUFhLEVBQUc7SUFBQTtFQUFDLEVBRXBJLENBRUgsRUFFRnpTLFNBQVMsaUJBQUloQiwyREFBQTtJQUFLMEMsU0FBUyxFQUFDO0VBQWlCLEdBQUMsZUFBYSxDQUFNLENBRXRFO0FBRVgsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDM0N5QjtBQUNjO0FBRWpDLElBQU0wTSxNQUFNLEdBQUcsU0FBVEEsTUFBTUEsQ0FBQTlPLElBQUEsRUFBc0U7RUFBQSxJQUFqRWdWLFFBQVEsR0FBQWhWLElBQUEsQ0FBUmdWLFFBQVE7SUFBRXZTLE9BQU8sR0FBQXpDLElBQUEsQ0FBUHlDLE9BQU87SUFBRStCLGVBQWUsR0FBQXhFLElBQUEsQ0FBZndFLGVBQWU7SUFBRWdMLE9BQU8sR0FBQXhQLElBQUEsQ0FBUHdQLE9BQU87SUFBRXBZLElBQUksR0FBQTRJLElBQUEsQ0FBSjVJLElBQUk7SUFBSzZkLEtBQUssR0FBQUMsd0JBQUEsQ0FBQWxWLElBQUEsRUFBQW1WLFNBQUE7RUFDL0UsSUFBTWpQLFdBQVcsR0FBRyxTQUFkQSxXQUFXQSxDQUFHOUUsQ0FBQyxFQUFJO0lBQ3JCQSxDQUFDLENBQUNDLGNBQWMsRUFBRTtJQUNsQkQsQ0FBQyxDQUFDZ1UsZUFBZSxFQUFFO0lBQ25CM1MsT0FBTyxFQUFFO0VBQ2IsQ0FBQztFQUNELElBQU00UyxhQUFhLEdBQUcsU0FBaEJBLGFBQWFBLENBQUdqVSxDQUFDLEVBQUk7SUFDdkIsSUFBR0EsQ0FBQyxDQUFDL0wsR0FBRyxLQUFLLE9BQU8sRUFBRTtNQUNsQitMLENBQUMsQ0FBQ0MsY0FBYyxFQUFFO01BQ2xCRCxDQUFDLENBQUNnVSxlQUFlLEVBQUU7TUFDbkIzUyxPQUFPLEVBQUU7SUFDYjtFQUNKLENBQUM7RUFDRCxvQkFDSS9DLDBEQUFBLFdBQUE0VixRQUFBO0lBQVFsVCxTQUFTLEVBQUUsUUFBUSxJQUFJb0MsZUFBZSxHQUFHLEdBQUcsR0FBR0EsZUFBZSxHQUFFLEVBQUUsQ0FBRTtJQUFDL0IsT0FBTyxFQUFFeUQsV0FBWTtJQUFDcVAsU0FBUyxFQUFFRixhQUFjO0lBQUNqZSxJQUFJLEVBQUVBLElBQUksYUFBSkEsSUFBSSxjQUFKQSxJQUFJLEdBQUk7RUFBUyxHQUFLNmQsS0FBSyxHQUUxSnpGLE9BQU8sZ0JBQUc5UCwwREFBQSxDQUFDcVYsZ0RBQU0sT0FBRyxHQUFFQyxRQUFRLENBRXpCO0FBRWpCLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdkJ5QjtBQUNvQjtBQUNaO0FBQ047QUFFckIsSUFBTTVSLFdBQVcsR0FBRyxTQUFkQSxXQUFXQSxDQUFBcEQsSUFBQSxFQUFvQztFQUFBLElBQS9Cd0UsZUFBZSxHQUFBeEUsSUFBQSxDQUFmd0UsZUFBZTtJQUFLeVEsS0FBSyxHQUFBQyx3QkFBQSxDQUFBbFYsSUFBQSxFQUFBbVYsU0FBQTtFQUVsRCxvQkFDSXpWLDBEQUFBLENBQUNvUCwyQ0FBTSxFQUFBd0csUUFBQTtJQUNIbFQsU0FBUyxFQUFFLDBCQUEwQixJQUFJb0MsZUFBZSxHQUFHLEdBQUcsR0FBR0EsZUFBZSxHQUFFLEVBQUUsQ0FBRTtJQUN0RixjQUFZMkssMENBQUMsQ0FBQyxPQUFPLEVBQUU7TUFBQ3VDLEVBQUUsRUFBRTtJQUFVLENBQUMsQ0FBRTtJQUN6Q2pILEtBQUssRUFBRTBFLDBDQUFDLENBQUMsT0FBTyxFQUFFO01BQUN1QyxFQUFFLEVBQUU7SUFBVSxDQUFDO0VBQUUsR0FDaEN1RCxLQUFLLGdCQUVUdlYsMERBQUEsQ0FBQzhWLHNEQUFTLE9BQUcsQ0FDUjtBQUVqQixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2pCeUI7QUFDa0I7QUFDVjtBQUNOO0FBRXJCLElBQU1yUyxVQUFVLEdBQUcsU0FBYkEsVUFBVUEsQ0FBQW5ELElBQUEsRUFBb0M7RUFBQSxJQUEvQndFLGVBQWUsR0FBQXhFLElBQUEsQ0FBZndFLGVBQWU7SUFBS3lRLEtBQUssR0FBQUMsd0JBQUEsQ0FBQWxWLElBQUEsRUFBQW1WLFNBQUE7RUFFakQsb0JBQ0l6ViwwREFBQSxDQUFDb1AsMkNBQU0sRUFBQXdHLFFBQUE7SUFDSGxULFNBQVMsRUFBRSx5QkFBeUIsSUFBSW9DLGVBQWUsR0FBRyxHQUFHLEdBQUdBLGVBQWUsR0FBRSxFQUFFLENBQUU7SUFDckYsY0FBWTJLLDBDQUFDLENBQUMsTUFBTSxFQUFFO01BQUN1QyxFQUFFLEVBQUU7SUFBVSxDQUFDLENBQUU7SUFDeENqSCxLQUFLLEVBQUUwRSwwQ0FBQyxDQUFDLE1BQU0sRUFBRTtNQUFDdUMsRUFBRSxFQUFFO0lBQVUsQ0FBQztFQUFFLEdBQy9CdUQsS0FBSyxnQkFFVHZWLDBEQUFBLENBQUMrVixvREFBUSxPQUFHLENBQ1A7QUFFakIsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqQnlCO0FBQ1E7QUFDbUI7QUFDekI7QUFFckIsSUFBTXpNLFVBQVUsR0FBRyxTQUFiQSxVQUFVQSxDQUFBaEosSUFBQSxFQUFvQztFQUFBLElBQS9Cd0UsZUFBZSxHQUFBeEUsSUFBQSxDQUFmd0UsZUFBZTtJQUFLeVEsS0FBSyxHQUFBQyx3QkFBQSxDQUFBbFYsSUFBQSxFQUFBbVYsU0FBQTtFQUVqRCxvQkFDSXpWLDBEQUFBLENBQUNvUCwyQ0FBTSxFQUFBd0csUUFBQTtJQUNIbFQsU0FBUyxFQUFFLHlCQUF5QixJQUFJb0MsZUFBZSxHQUFHLEdBQUcsR0FBR0EsZUFBZSxHQUFFLEVBQUUsQ0FBRTtJQUNyRixjQUFZMkssMENBQUMsQ0FBQyxLQUFLLEVBQUU7TUFBQ3VDLEVBQUUsRUFBRTtJQUFVLENBQUMsQ0FBRTtJQUN2Q2pILEtBQUssRUFBRTBFLDBDQUFDLENBQUMsS0FBSyxFQUFFO01BQUN1QyxFQUFFLEVBQUU7SUFBVSxDQUFDO0VBQUUsR0FDOUJ1RCxLQUFLLGdCQUVUdlYsMERBQUEsQ0FBQ2dXLDZEQUFRLE9BQUcsQ0FDUDtBQUVqQixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqQjREO0FBQ1Q7QUFDWDtBQUVsQyxJQUFNelMsS0FBSyxHQUFHMFMsaURBQVUsQ0FBQyxVQUFBM1YsSUFBQSxFQUFxRThWLFFBQVEsRUFBSztFQUFBLElBQWhGZCxRQUFRLEdBQUFoVixJQUFBLENBQVJnVixRQUFRO0lBQUV4USxlQUFlLEdBQUF4RSxJQUFBLENBQWZ3RSxlQUFlO0lBQUVGLE1BQU0sR0FBQXRFLElBQUEsQ0FBTnNFLE1BQU07SUFBQXlSLFVBQUEsR0FBQS9WLElBQUEsQ0FBRXVFLEtBQUs7SUFBTEEsS0FBSyxHQUFBd1IsVUFBQSxjQUFHLElBQUksR0FBQUEsVUFBQTtJQUFBQyxhQUFBLEdBQUFoVyxJQUFBLENBQUV5RSxRQUFRO0lBQVJBLFFBQVEsR0FBQXVSLGFBQUEsY0FBRyxJQUFJLEdBQUFBLGFBQUE7RUFFOUZqTixnREFBUyxDQUFDLFlBQU07SUFDWixJQUFHekUsTUFBTSxFQUFFO01BQ1AyUixRQUFRLENBQUNDLGdCQUFnQixDQUFDLFlBQVksQ0FBQyxDQUFDbGUsT0FBTyxDQUFDLFVBQUFtZSxHQUFHO1FBQUEsT0FBSUEsR0FBRyxDQUFDQyxTQUFTLENBQUNDLEdBQUcsQ0FBQyxhQUFhLENBQUM7TUFBQSxFQUFDO0lBQzVGLENBQUMsTUFBTTtNQUNISixRQUFRLENBQUNDLGdCQUFnQixDQUFDLFlBQVksQ0FBQyxDQUFDbGUsT0FBTyxDQUFDLFVBQUFtZSxHQUFHO1FBQUEsT0FBSUEsR0FBRyxDQUFDQyxTQUFTLENBQUM3UyxNQUFNLENBQUMsYUFBYSxDQUFDO01BQUEsRUFBQztJQUMvRjtFQUNKLENBQUMsRUFBRSxDQUFDZSxNQUFNLENBQUMsQ0FBQztFQUVaLElBQU1nUyxZQUFZLEdBQUdWLDZDQUFNLEVBQUU7RUFFN0IsSUFBTVcsV0FBVyxHQUFHLFNBQWRBLFdBQVdBLENBQUEsRUFBUztJQUN0QixJQUFHLENBQUNoUyxLQUFLLEVBQUU7TUFDUDtJQUNKO0lBQ0EsSUFBRyxDQUFDRSxRQUFRLEVBQUU7TUFDVkYsS0FBSyxFQUFFO01BQ1A7SUFDSjtJQUNBK1IsWUFBWSxDQUFDRSxPQUFPLENBQUNKLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLE9BQU8sQ0FBQztJQUMzQ0MsWUFBWSxDQUFDRSxPQUFPLENBQUNDLGdCQUFnQixDQUFDLGNBQWMsRUFBRSxZQUFNO01BQ3hEbFMsS0FBSyxFQUFFO0lBQ1gsQ0FBQyxDQUFDO0VBQ04sQ0FBQztFQUVELElBQU1tUyxxQkFBcUIsR0FBRyxTQUF4QkEscUJBQXFCQSxDQUFHdFYsQ0FBQyxFQUFJO0lBQy9CQSxDQUFDLENBQUNnVSxlQUFlLEVBQUU7RUFDdkIsQ0FBQztFQUVELE9BQ1E5USxNQUFNLElBQUl1Uix1REFBWSxlQUNsQm5XLDBEQUFBO0lBQUsyUyxHQUFHLEVBQUVpRSxZQUFhO0lBQUNsVSxTQUFTLEVBQUUsaUJBQWlCLElBQUlvQyxlQUFlLEdBQUcsR0FBRyxHQUFDQSxlQUFlLEdBQUMsWUFBWSxHQUFFLEVBQUUsQ0FBRTtJQUFDL0IsT0FBTyxFQUFFOFQ7RUFBWSxnQkFDbEk3VywwREFBQTtJQUFLMlMsR0FBRyxFQUFFeUQsUUFBUztJQUFDMVQsU0FBUyxFQUFFLE9BQU8sSUFBSW9DLGVBQWUsR0FBRyxHQUFHLEdBQUNBLGVBQWUsR0FBRSxFQUFFLENBQUU7SUFBQy9CLE9BQU8sRUFBRWlVO0VBQXNCLEdBRTdHblMsS0FBSyxLQUFLLElBQUksaUJBQUk3RSwwREFBQSxDQUFDMEQsNERBQVc7SUFBQ29CLGVBQWUsRUFBQyxjQUFjO0lBQUMvQixPQUFPLEVBQUU4VDtFQUFZLEVBQUcsRUFFekZ2QixRQUFRLENBQ1AsQ0FDSixFQUNOaUIsUUFBUSxDQUFDdEYsSUFBSSxDQUNoQjtBQUViLENBQUMsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMvQzJEO0FBQ1I7QUFDRDtBQUNUO0FBQ0g7QUFDSztBQUNzQjtBQUN2QjtBQUNHOztBQUcvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ08sSUFBTWhPLGtCQUFrQixHQUFHLFNBQXJCQSxrQkFBa0JBLENBQUEzQyxJQUFBLEVBQTJIO0VBQUEsSUFBdEhnVixRQUFRLEdBQUFoVixJQUFBLENBQVJnVixRQUFRO0lBQUV2WixJQUFJLEdBQUF1RSxJQUFBLENBQUp2RSxJQUFJO0lBQUVxRixNQUFNLEdBQUFkLElBQUEsQ0FBTmMsTUFBTTtJQUFFQyxTQUFTLEdBQUFmLElBQUEsQ0FBVGUsU0FBUztJQUFBaVcsZ0JBQUEsR0FBQWhYLElBQUEsQ0FBRStDLFdBQVc7SUFBWEEsV0FBVyxHQUFBaVUsZ0JBQUEsY0FBRyxHQUFHLEdBQUFBLGdCQUFBO0lBQUFDLGlCQUFBLEdBQUFqWCxJQUFBLENBQUVnRCxZQUFZO0lBQVpBLFlBQVksR0FBQWlVLGlCQUFBLGNBQUcsR0FBRyxHQUFBQSxpQkFBQTtJQUFBQyxxQkFBQSxHQUFBbFgsSUFBQSxDQUFFOEMsZ0JBQWdCO0lBQWhCQSxnQkFBZ0IsR0FBQW9VLHFCQUFBLGNBQUcsRUFBRSxHQUFBQSxxQkFBQTtJQUFBQyxhQUFBLEdBQUFuWCxJQUFBLENBQUV1QyxRQUFRO0lBQVJBLFFBQVEsR0FBQTRVLGFBQUEsY0FBRyxJQUFJLEdBQUFBLGFBQUE7RUFDbEosSUFBQUMsZUFBQSxHQUFZTCw4REFBYyxDQUFDLFVBQVUsQ0FBQztJQUEvQjVILENBQUMsR0FBQWlJLGVBQUEsQ0FBRGpJLENBQUM7RUFFUnBHLGlEQUFTLENBQUMsWUFBTTtJQUNac08sY0FBYyxDQUFDdlUsZ0JBQWdCLENBQUM7SUFDaEN3VSxZQUFZLENBQUN4VSxnQkFBZ0IsQ0FBQztFQUNsQyxDQUFDLEVBQUUsQ0FBQ0EsZ0JBQWdCLENBQUMsQ0FBQztFQUV0QixJQUFBdEMsU0FBQSxHQUFzQ2IsZ0RBQVEsQ0FBQyxJQUFJLENBQUM7SUFBQWMsVUFBQSxHQUFBeEMsY0FBQSxDQUFBdUMsU0FBQTtJQUE3QytXLFdBQVcsR0FBQTlXLFVBQUE7SUFBRTRXLGNBQWMsR0FBQTVXLFVBQUE7RUFDbEMsSUFBQUcsVUFBQSxHQUFrQ2pCLGdEQUFRLENBQUMsRUFBRSxDQUFDO0lBQUFrQixVQUFBLEdBQUE1QyxjQUFBLENBQUEyQyxVQUFBO0lBQXZDNFcsU0FBUyxHQUFBM1csVUFBQTtJQUFFeVcsWUFBWSxHQUFBelcsVUFBQTtFQUM5QixJQUFBRyxVQUFBLEdBQWdDckIsZ0RBQVEsQ0FBQyxLQUFLLENBQUM7SUFBQXNCLFVBQUEsR0FBQWhELGNBQUEsQ0FBQStDLFVBQUE7SUFBeENOLFNBQVMsR0FBQU8sVUFBQTtJQUFFTixVQUFVLEdBQUFNLFVBQUE7RUFFNUIsSUFBTXdXLFlBQVksR0FBRyxTQUFmQSxZQUFZQSxDQUFBLEVBQVM7SUFDekJKLGNBQWMsQ0FBQyxJQUFJLENBQUM7SUFDcEJDLFlBQVksQ0FBQyxFQUFFLENBQUM7SUFDaEIsSUFBRy9VLFFBQVEsRUFBRTtNQUNYQSxRQUFRLENBQUMsRUFBRSxDQUFDO0lBQ2Q7RUFDRixDQUFDO0VBRUQsSUFBTW1WLE1BQU0sR0FBR2YsbURBQVcsQ0FBQyxVQUFBZ0IsYUFBYSxFQUFJO0lBQzFDLElBQU1DLEdBQUcsR0FBR0QsYUFBYSxDQUFDLENBQUMsQ0FBQzs7SUFFNUI7SUFDQTVXLFNBQVMsQ0FBQyxFQUFFLENBQUM7SUFDYixJQUFHLENBQUM2VyxHQUFHLEVBQUU7TUFDUDtJQUNGO0lBQ0EsSUFBRyxDQUFDLENBQUMsV0FBVyxFQUFFLFlBQVksRUFBRSxXQUFXLENBQUMsQ0FBQ0MsUUFBUSxDQUFDRCxHQUFHLENBQUN4Z0IsSUFBSSxDQUFDLEVBQUU7TUFDL0QySixTQUFTLENBQUMsQ0FBQ29PLENBQUMsQ0FBQyxvQkFBb0IsRUFBRTtRQUFDdUMsRUFBRSxFQUFFLGFBQWE7UUFBRW9HLGdCQUFnQixFQUFFO01BQWdCLENBQUMsQ0FBQyxDQUFDLENBQUM7TUFDN0Y7SUFDRjtJQUNBO0lBQ0FuWCxVQUFVLENBQUMsSUFBSSxDQUFDO0lBQ2hCa1csNkRBQVcsQ0FBQ2UsR0FBRyxFQUFFO01BQ2JHLFlBQVksRUFBRSxNQUFNO01BQ3BCQyxXQUFXLEVBQUVqVixXQUFXO01BQ3hCa1YsWUFBWSxFQUFFalYsWUFBWTtNQUMxQmtWLElBQUksRUFBRTtJQUNWLENBQUMsRUFBRSxVQUFDcGYsS0FBSyxFQUFFcWYsTUFBTSxFQUFLO01BQ2xCLElBQUlyZixLQUFLLEVBQUU7UUFDUGlJLFNBQVMsQ0FBQyxVQUFBRCxNQUFNO1VBQUEsVUFBQXlGLE1BQUEsQ0FBQW1ELGtCQUFBLENBQVE1SSxNQUFNLElBQUVxTyxDQUFDLENBQUMseUJBQXlCLENBQUM7UUFBQSxDQUFDLENBQUM7UUFDOUQ7TUFDSjtNQUNBO01BQ0FrSSxjQUFjLENBQUNjLE1BQU0sQ0FBQztNQUN0QnhYLFVBQVUsQ0FBQyxLQUFLLENBQUM7O01BRWpCO01BQ0E7TUFDQTJXLFlBQVksQ0FBQ2EsTUFBTSxDQUFDO01BQ3BCO01BQ0EsSUFBRzVWLFFBQVEsRUFBRTtRQUNYQSxRQUFRLENBQUM0VixNQUFNLENBQUM7TUFDbEI7SUFDSixDQUFDLENBQUM7RUFDSixDQUFDLEVBQUUsRUFBRSxDQUFDO0VBQ04sSUFBQUMsWUFBQSxHQUFzQ3RCLDREQUFXLENBQUM7TUFBQ1ksTUFBTSxFQUFOQSxNQUFNO01BQUU5RCxRQUFRLEVBQUU7SUFBSyxDQUFDLENBQUM7SUFBckV5RSxZQUFZLEdBQUFELFlBQUEsQ0FBWkMsWUFBWTtJQUFFQyxhQUFhLEdBQUFGLFlBQUEsQ0FBYkUsYUFBYTtFQUdsQyxJQUFBblksYUFBQSxHQUFtRFAsNkVBQVksQ0FBQyxLQUFLLENBQUM7SUFBQVEsY0FBQSxHQUFBbkMsY0FBQSxDQUFBa0MsYUFBQTtJQUEvRG9ZLFdBQVcsR0FBQW5ZLGNBQUE7SUFBRW9ZLFlBQVksR0FBQXBZLGNBQUE7SUFBRXFZLGFBQWEsR0FBQXJZLGNBQUE7RUFFL0Msb0JBQ0VWLDJEQUFBO0lBQUswQyxTQUFTLEVBQUM7RUFBWSxnQkFDekIxQywyREFBQTtJQUFPMEMsU0FBUyxFQUFDO0VBQW1CLEdBQUU0UyxRQUFRLENBQVMsZUFDdkR0ViwyREFBQSxRQUFBNFYsUUFBQTtJQUFLbFQsU0FBUyxFQUFDO0VBQXFCLEdBQUtpVyxZQUFZLEVBQUU7SUFBRUssV0FBVyxFQUFFRixZQUFhO0lBQUNHLFlBQVksRUFBRUY7RUFBYyxpQkFDOUcvWSwyREFBQSxVQUFBNFYsUUFBQTtJQUFPNVMsUUFBUSxFQUFFaEM7RUFBVSxHQUFLNFgsYUFBYSxFQUFFLEVBQUksRUFFakRmLFdBQVcsaUJBQUk3WCwyREFBQTtJQUFLMEMsU0FBUyxFQUFFLGlCQUFpQixJQUFJMUIsU0FBUyxJQUFJNlgsV0FBVyxHQUFHLFFBQVEsR0FBRSxFQUFFLENBQUU7SUFBQzNVLEdBQUcsRUFBRTJULFdBQVk7SUFBQ3ZULEdBQUcsRUFBRW1MLENBQUMsQ0FBQyxnQkFBZ0I7RUFBRSxFQUFHLEVBRzVJek8sU0FBUyxpQkFBSWhCLDJEQUFBLENBQUNxVixpREFBTSxPQUFHLEVBR3ZCLENBQUNyVSxTQUFTLElBQUksQ0FBQzZXLFdBQVcsaUJBQUk3WCwyREFBQSxDQUFDZ1csOERBQVEsT0FBRyxFQUcxQzZDLFdBQVcsSUFBSWhCLFdBQVcsSUFBSSxDQUFDN1csU0FBUyxpQkFBSWhCLDJEQUFBLENBQUMrVixxREFBUSxPQUFHLENBRXRELEVBRUozVSxNQUFNLENBQUM1RixNQUFNLEdBQUcsQ0FBQyxpQkFDZndFLDJEQUFBO0lBQUswQyxTQUFTLEVBQUM7RUFBa0IsZ0JBQzdCMUMsMkRBQUEsYUFFTW9CLE1BQU0sQ0FBQ2dKLEdBQUcsQ0FBQyxVQUFDaFIsS0FBSyxFQUFFMlksS0FBSztJQUFBLG9CQUN0Qi9SLDJEQUFBO01BQUlySyxHQUFHLEVBQUVvYztJQUFNLEdBQUUzWSxLQUFLLENBQU07RUFBQSxDQUM3QixDQUFDLENBRUgsQ0FFVixFQUdEeWUsV0FBVyxpQkFBSTdYLDJEQUFBLENBQUNrWCw2REFBVztJQUFDcFMsZUFBZSxFQUFDLDBCQUEwQjtJQUFDL0IsT0FBTyxFQUFFZ1Y7RUFBYSxFQUFHLGVBR2xHL1gsMkRBQUE7SUFBT3RJLElBQUksRUFBQyxRQUFRO0lBQUNxRSxJQUFJLEVBQUVBLElBQUs7SUFBQ2xHLEtBQUssRUFBRWlpQixTQUFTLGFBQVRBLFNBQVMsY0FBVEEsU0FBUyxHQUFJO0VBQUcsRUFBRyxDQUN2RDtBQUVWLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcEh5QjtBQUVuQixJQUFNaEMsU0FBUyxHQUFHLFNBQVpBLFNBQVNBLENBQUF4VixJQUFBLEVBQW9DO0VBQUEsSUFBL0J3RSxlQUFlLEdBQUF4RSxJQUFBLENBQWZ3RSxlQUFlO0lBQUt5USxLQUFLLEdBQUFDLHdCQUFBLENBQUFsVixJQUFBLEVBQUFtVixTQUFBO0VBQ2hELG9CQUNJelYsMERBQUEsUUFBQTRWLFFBQUE7SUFBS2xULFNBQVMsRUFBRSxTQUFTLElBQUlvQyxlQUFlLEdBQUcsR0FBRyxHQUFHQSxlQUFlLEdBQUUsRUFBRTtFQUFFLEdBQUt5USxLQUFLO0lBQUUyRCxLQUFLLEVBQUMsNEJBQTRCO0lBQUNDLE9BQU8sRUFBQztFQUFXLGlCQUN4SW5aLDBEQUFBO0lBQU1vWixJQUFJLEVBQUMsY0FBYztJQUFDQyxDQUFDLEVBQUM7RUFBZ04sRUFBUSxDQUNsUDtBQUVkLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDUnlCO0FBRW5CLElBQU10RCxRQUFRLEdBQUcsU0FBWEEsUUFBUUEsQ0FBQXpWLElBQUEsRUFBb0M7RUFBQSxJQUEvQndFLGVBQWUsR0FBQXhFLElBQUEsQ0FBZndFLGVBQWU7SUFBS3lRLEtBQUssR0FBQUMsd0JBQUEsQ0FBQWxWLElBQUEsRUFBQW1WLFNBQUE7RUFDL0Msb0JBQ0l6ViwwREFBQSxRQUFBNFYsUUFBQTtJQUFLbFQsU0FBUyxFQUFFLGFBQWEsSUFBSW9DLGVBQWUsR0FBRyxHQUFHLEdBQUNBLGVBQWUsR0FBRSxFQUFFO0VBQUUsR0FBS3lRLEtBQUs7SUFBRStELGdCQUFnQixFQUFDLGVBQWU7SUFBQ0gsT0FBTyxFQUFDLFdBQVc7SUFBQ0QsS0FBSyxFQUFDO0VBQTRCLGlCQUMzS2xaLDBEQUFBO0lBQU1vWixJQUFJLEVBQUMsY0FBYztJQUFDQyxDQUFDLEVBQUM7RUFBbWEsRUFBUSxDQUNyYztBQUVkLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDUnlCO0FBRW5CLElBQU1yRCxRQUFRLEdBQUcsU0FBWEEsUUFBUUEsQ0FBQTFWLElBQUEsRUFBb0M7RUFBQSxJQUEvQndFLGVBQWUsR0FBQXhFLElBQUEsQ0FBZndFLGVBQWU7SUFBS3lRLEtBQUssR0FBQUMsd0JBQUEsQ0FBQWxWLElBQUEsRUFBQW1WLFNBQUE7RUFDL0Msb0JBQ0l6ViwwREFBQSxRQUFBNFYsUUFBQTtJQUFLbFQsU0FBUyxFQUFFLGFBQWEsSUFBSW9DLGVBQWUsR0FBRyxHQUFHLEdBQUdBLGVBQWUsR0FBRSxFQUFFO0VBQUUsR0FBS3lRLEtBQUs7SUFBRTJELEtBQUssRUFBQyw0QkFBNEI7SUFBQ0MsT0FBTyxFQUFDO0VBQVcsaUJBQzVJblosMERBQUE7SUFBRzRDLEVBQUUsRUFBQyx1QkFBdUI7SUFBQ3dXLElBQUksRUFBQyxNQUFNO0lBQUNHLFFBQVEsRUFBQztFQUFTLGdCQUM1RHZaLDBEQUFBO0lBQU1vWixJQUFJLEVBQUMsY0FBYztJQUFDeFcsRUFBRSxFQUFDLFNBQVM7SUFBQ3lXLENBQUMsRUFBQztFQUEyTSxFQUFRLENBQ3hQLENBQ0Y7QUFFZCxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1Z5QjtBQUVuQixJQUFNRyxTQUFTLEdBQUcsU0FBWkEsU0FBU0EsQ0FBQWxaLElBQUEsRUFBb0M7RUFBQSxJQUEvQndFLGVBQWUsR0FBQXhFLElBQUEsQ0FBZndFLGVBQWU7SUFBS3lRLEtBQUssR0FBQUMsd0JBQUEsQ0FBQWxWLElBQUEsRUFBQW1WLFNBQUE7RUFDaEQsb0JBQ0l6ViwwREFBQSxRQUFBNFYsUUFBQTtJQUFLbFQsU0FBUyxFQUFFLGNBQWMsSUFBSW9DLGVBQWUsR0FBRyxHQUFHLEdBQUdBLGVBQWUsR0FBRSxFQUFFO0VBQUUsR0FBS3lRLEtBQUs7SUFBRTRELE9BQU8sRUFBQyxxQkFBcUI7SUFBQ0QsS0FBSyxFQUFDO0VBQTRCLGlCQUN2SmxaLDBEQUFBO0lBQU1vWixJQUFJLEVBQUMsY0FBYztJQUFDQyxDQUFDLEVBQUM7RUFBMkosRUFDaEwsZUFDUHJaLDBEQUFBO0lBQU1vWixJQUFJLEVBQUMsY0FBYztJQUFDQyxDQUFDLEVBQUM7RUFBMkosRUFDaEwsZUFDUHJaLDBEQUFBO0lBQU1vWixJQUFJLEVBQUMsY0FBYztJQUFDQyxDQUFDLEVBQUM7RUFBa3lDLEVBQ3Z6QyxlQUNQclosMERBQUE7SUFBTW9aLElBQUksRUFBQyxjQUFjO0lBQUNDLENBQUMsRUFBQztFQUEySixFQUNoTCxDQUNMO0FBRWQsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNmMkI7QUFDdUI7QUFFNUMsSUFBTXBVLFdBQVcsR0FBRyxTQUFkQSxXQUFXQSxDQUFBM0UsSUFBQSxFQUErRDtFQUFBLElBQTFEd0UsZUFBZSxHQUFBeEUsSUFBQSxDQUFmd0UsZUFBZTtJQUFFa0IsUUFBUSxHQUFBMUYsSUFBQSxDQUFSMEYsUUFBUTtJQUFFVixRQUFRLEdBQUFoRixJQUFBLENBQVJnRixRQUFRO0lBQUVXLE9BQU8sR0FBQTNGLElBQUEsQ0FBUDJGLE9BQU87SUFBRUMsTUFBTSxHQUFBNUYsSUFBQSxDQUFONEYsTUFBTTtFQUM3RTtFQUNBbUQsaURBQVMsQ0FBQyxZQUFNO0lBQ1JrTixRQUFRLENBQUN0RixJQUFJLENBQUM4RixnQkFBZ0IsQ0FBQyxPQUFPLEVBQUU5USxPQUFPLENBQUM7SUFDaEQsT0FBTztNQUFBLE9BQU1zUSxRQUFRLENBQUNrRCxtQkFBbUIsQ0FBQyxPQUFPLEVBQUV4VCxPQUFPLENBQUM7SUFBQTtFQUNuRSxDQUFDLEVBQUUsRUFBRSxDQUFDO0VBQ047RUFDQW9ELGlEQUFTLENBQUMsWUFBTTtJQUNaLElBQU1xUSxjQUFjLEdBQUcsU0FBakJBLGNBQWNBLENBQUdoWSxDQUFDLEVBQUk7TUFDeEIsSUFBR0EsQ0FBQyxDQUFDL0wsR0FBRyxLQUFLLEtBQUssRUFBRTtRQUNoQnNRLE9BQU8sRUFBRTtNQUNiO0lBQ0osQ0FBQztJQUNEc1EsUUFBUSxDQUFDUSxnQkFBZ0IsQ0FBQyxTQUFTLEVBQUUyQyxjQUFjLENBQUM7SUFDcEQsT0FBTztNQUFBLE9BQU1uRCxRQUFRLENBQUNrRCxtQkFBbUIsQ0FBQyxPQUFPLEVBQUVDLGNBQWMsQ0FBQztJQUFBO0VBQ3RFLENBQUMsRUFBRSxFQUFFLENBQUM7O0VBR047RUFDQSxJQUFBNVksU0FBQSxHQUFnQ2IsZ0RBQVEsQ0FBQyxJQUFJLENBQUM7SUFBQWMsVUFBQSxHQUFBeEMsY0FBQSxDQUFBdUMsU0FBQTtJQUF2Q3FGLFFBQVEsR0FBQXBGLFVBQUE7SUFBRTRZLFdBQVcsR0FBQTVZLFVBQUE7RUFFNUJzSSxpREFBUyxDQUFDLFlBQU07SUFDWixJQUFNd00sU0FBUyxHQUFHLFNBQVpBLFNBQVNBLENBQUduVSxDQUFDLEVBQUk7TUFDbkIsUUFBT0EsQ0FBQyxDQUFDL0wsR0FBRztRQUNSLEtBQUssU0FBUztVQUNWK0wsQ0FBQyxDQUFDQyxjQUFjLEVBQUU7VUFDbEJnWSxXQUFXLENBQUMsVUFBQXhULFFBQVEsRUFBSTtZQUNwQixJQUFHQSxRQUFRLEtBQUssSUFBSSxJQUFJQSxRQUFRLElBQUksQ0FBQyxFQUFFO2NBQ25DLE9BQVFILFFBQVEsQ0FBQ3hLLE1BQU0sR0FBRyxDQUFDO1lBQy9CO1lBQ0EsT0FBUTJLLFFBQVEsR0FBRyxDQUFDO1VBQ3hCLENBQUMsQ0FBQztVQUNGO1FBQ0osS0FBSyxXQUFXO1VBQ1p6RSxDQUFDLENBQUNDLGNBQWMsRUFBRTtVQUNsQmdZLFdBQVcsQ0FBQyxVQUFBeFQsUUFBUSxFQUFJO1lBQ3BCLElBQUdBLFFBQVEsS0FBSyxJQUFJLElBQUlBLFFBQVEsSUFBS0gsUUFBUSxDQUFDeEssTUFBTSxHQUFHLENBQUUsRUFBRTtjQUN2RCxPQUFPLENBQUM7WUFDWjtZQUNBLE9BQVEySyxRQUFRLEdBQUcsQ0FBQztVQUN4QixDQUFDLENBQUM7VUFDRjtRQUNKO1VBQ0k7TUFBTTtJQUVsQixDQUFDO0lBQ0RvUSxRQUFRLENBQUNRLGdCQUFnQixDQUFDLFNBQVMsRUFBRWxCLFNBQVMsQ0FBQztJQUMvQyxPQUFPO01BQUEsT0FBTVUsUUFBUSxDQUFDa0QsbUJBQW1CLENBQUMsU0FBUyxFQUFFNUQsU0FBUyxDQUFDO0lBQUE7RUFDbkUsQ0FBQyxFQUFFLEVBQUUsQ0FBQztFQUVOeE0saURBQVMsQ0FBQyxZQUFNO0lBQ1osSUFBTXdNLFNBQVMsR0FBRyxTQUFaQSxTQUFTQSxDQUFHblUsQ0FBQyxFQUFJO01BQ3BCLElBQUdBLENBQUMsQ0FBQy9MLEdBQUcsS0FBSyxPQUFPLEVBQUU7UUFDakIrTCxDQUFDLENBQUNDLGNBQWMsRUFBRTtRQUNsQkQsQ0FBQyxDQUFDZ1UsZUFBZSxFQUFFO1FBQ25CcFEsUUFBUSxDQUFDVSxRQUFRLENBQUNHLFFBQVEsQ0FBQyxDQUFDO01BQ2pDO0lBQ0gsQ0FBQztJQUNEb1EsUUFBUSxDQUFDUSxnQkFBZ0IsQ0FBQyxTQUFTLEVBQUVsQixTQUFTLENBQUM7SUFDL0MsT0FBTztNQUFBLE9BQU1VLFFBQVEsQ0FBQ2tELG1CQUFtQixDQUFDLFNBQVMsRUFBRTVELFNBQVMsQ0FBQztJQUFBO0VBQ25FLENBQUMsRUFBRSxDQUFDMVAsUUFBUSxDQUFDLENBQUM7RUFFZCxJQUFNdVAsZUFBZSxHQUFHLFNBQWxCQSxlQUFlQSxDQUFHaFUsQ0FBQyxFQUFJO0lBQ3pCQSxDQUFDLENBQUNnVSxlQUFlLEVBQUU7RUFDdkIsQ0FBQztFQUVELG9CQUVJMVYsMkRBQUE7SUFBSTBDLFNBQVMsa0JBQUFtRSxNQUFBLENBQWtCL0IsZUFBZSxDQUFHO0lBQUMvQixPQUFPLEVBQUUyUyxlQUFnQjtJQUFDaFAsSUFBSSxFQUFDLFNBQVM7SUFBQyxjQUFZK0ksMkNBQUMsQ0FBQyxhQUFhLEVBQUU7TUFBQ3VDLEVBQUUsRUFBRTtJQUFVLENBQUM7RUFBRSxHQUVsSWhNLFFBQVEsQ0FBQ29FLEdBQUcsQ0FBQyxVQUFDd1AsT0FBTyxFQUFFN0gsS0FBSztJQUFBLE9BQUs3TCxNQUFNLENBQUMwVCxPQUFPLEVBQUV6VCxRQUFRLEtBQUs0TCxLQUFLLENBQUM7RUFBQSxFQUFDLENBRXhFO0FBRWIsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzdFRDtBQUNtQztBQUNDO0FBQ0E7QUFDRjtBQUNBO0FBQ1E7QUFDRTtBQUNKO0FBQ0w7QUFDTTtBQUNEO0FBQ0E7QUFDRTtBQUNMO0FBQ0Q7QUFDQTs7QUFFcEM7QUFDc0I7QUFDSTtBQUNvQjtBQUNvQztBQUNaO0FBQzVDO0FBQ2tFO0FBQ2xCO0FBQ0U7QUFDQTtBQUNNO0FBQ1Y7QUFHeEU1TSw2REFBbUIsQ0FBQyxJQUFJLENBQUM7O0FBRXpCO0FBQ0EsSUFBR29SLFFBQVEsQ0FBQ3dELGNBQWMsQ0FBQyxZQUFZLENBQUMsRUFBRTtFQUN0Q0MsY0FBYyxDQUFDQyxVQUFVLENBQUMsVUFBVSxDQUFDO0VBQ3JDRCxjQUFjLENBQUNDLFVBQVUsQ0FBQyxVQUFVLENBQUM7RUFDckNELGNBQWMsQ0FBQ0MsVUFBVSxDQUFDLFlBQVksQ0FBQztBQUMzQzs7QUFHQTtBQUNBLENBQ0kxRCxRQUFRLENBQUN3RCxjQUFjLENBQUMsdUJBQXVCLENBQUMsRUFDaER4RCxRQUFRLENBQUN3RCxjQUFjLENBQUMsc0JBQXNCLENBQUMsRUFDL0N4RCxRQUFRLENBQUN3RCxjQUFjLENBQUMsdUJBQXVCLENBQUMsQ0FDbkQsQ0FBQ3poQixPQUFPLENBQUMsVUFBQXFVLEtBQUssRUFBSTtFQUNmLElBQUdBLEtBQUssRUFBRTtJQUFBLElBQUF1TixxQkFBQSxFQUFBQyxvQkFBQSxFQUFBQyxjQUFBLEVBQUFDLGVBQUE7SUFDTixJQUFNamhCLEtBQUssSUFBQThnQixxQkFBQSxJQUFBQyxvQkFBQSxHQUFHeE4sS0FBSyxDQUFDMk4sYUFBYSxDQUFDLHFDQUFxQyxDQUFDLGNBQUFILG9CQUFBLHVCQUExREEsb0JBQUEsQ0FBNERJLFNBQVMsY0FBQUwscUJBQUEsY0FBQUEscUJBQUEsR0FBSSxJQUFJO0lBQzNGLElBQU1NLElBQUksR0FBR1gsNkRBQVUsQ0FBQ2xOLEtBQUssQ0FBQztJQUM5QjZOLElBQUksQ0FBQ3RVLE1BQU0sZUFDUGxHLDJEQUFBLENBQUNpVCxtRkFBaUI7TUFDZEMsYUFBYSxHQUFBa0gsY0FBQSxHQUFFek4sS0FBSyxDQUFDOE4sT0FBTyxjQUFBTCxjQUFBLHVCQUFiQSxjQUFBLENBQWVNLGFBQWM7TUFDNUN2SCxjQUFjLEdBQUFrSCxlQUFBLEdBQUUxTixLQUFLLENBQUM4TixPQUFPLGNBQUFKLGVBQUEsdUJBQWJBLGVBQUEsQ0FBZU0sY0FBZTtNQUM5QzVlLElBQUksRUFBRTRRLEtBQUssQ0FBQzhOLE9BQU8sQ0FBQzFlLElBQUs7TUFDekJnUCxLQUFLLEVBQUU0QixLQUFLLENBQUM4TixPQUFPLENBQUMxUCxLQUFNO01BQzNCeEYsU0FBUyxFQUFFbk07SUFBTSxFQUNuQixDQUNMO0VBQ0w7QUFDSixDQUFDLENBQUM7O0FBSUY7QUFDQW1kLFFBQVEsQ0FBQ0MsZ0JBQWdCLENBQUMsMkJBQTJCLENBQUMsQ0FBQ2xlLE9BQU8sQ0FBQyxVQUFBcVUsS0FBSyxFQUFJO0VBQUEsSUFBQWlPLHNCQUFBLEVBQUFDLHFCQUFBO0VBQ3BFLElBQU16aEIsS0FBSyxJQUFBd2hCLHNCQUFBLElBQUFDLHFCQUFBLEdBQUdsTyxLQUFLLENBQUMyTixhQUFhLENBQUMscUNBQXFDLENBQUMsY0FBQU8scUJBQUEsdUJBQTFEQSxxQkFBQSxDQUE0RE4sU0FBUyxjQUFBSyxzQkFBQSxjQUFBQSxzQkFBQSxHQUFJLElBQUk7RUFDM0YsSUFBTUosSUFBSSxHQUFHWCw2REFBVSxDQUFDbE4sS0FBSyxDQUFDO0VBQzlCNk4sSUFBSSxDQUFDdFUsTUFBTSxlQUNQbEcsMkRBQUEsQ0FBQ29VLGlGQUFnQjtJQUNiMWMsSUFBSSxFQUFFaVYsS0FBSyxDQUFDOE4sT0FBTyxDQUFDL2lCLElBQUs7SUFDekI0YyxNQUFNLEVBQUUzSCxLQUFLLENBQUM4TixPQUFPLENBQUNLLE1BQU87SUFDN0IvUCxLQUFLLEVBQUU0QixLQUFLLENBQUM4TixPQUFPLENBQUMxUCxLQUFNO0lBQzNCaFAsSUFBSSxFQUFFNFEsS0FBSyxDQUFDOE4sT0FBTyxDQUFDMWUsSUFBSztJQUN6QndKLFNBQVMsRUFBRW5NO0VBQU0sRUFDbkIsQ0FDTDtBQUNMLENBQUMsQ0FBQzs7QUFHRjtBQUNBLElBQUdtZCxRQUFRLENBQUN3RCxjQUFjLENBQUMseUJBQXlCLENBQUMsRUFBRTtFQUNuRCxJQUFNcE4sS0FBSyxHQUFHNEosUUFBUSxDQUFDd0QsY0FBYyxDQUFDLHlCQUF5QixDQUFDO0VBQ2hFLElBQU1TLElBQUksR0FBR1gsNkRBQVUsQ0FBQ2xOLEtBQUssQ0FBQztFQUM5QjZOLElBQUksQ0FBQ3RVLE1BQU0sZUFDUGxHLDJEQUFBLENBQUN5TywyRkFBcUI7SUFBQzFTLElBQUksRUFBRTRRLEtBQUssQ0FBQzhOLE9BQU8sQ0FBQzFlLElBQUs7SUFBQ2xHLEtBQUssRUFBRThXLEtBQUssQ0FBQzhOLE9BQU8sQ0FBQzVrQixLQUFNO0lBQUM4VSxTQUFTLEVBQUVnQyxLQUFLLENBQUM4TixPQUFPLENBQUNNO0VBQVUsRUFBRyxDQUN0SDtBQUNMO0FBR0EsSUFBR3hFLFFBQVEsQ0FBQ3dELGNBQWMsQ0FBQyx5QkFBeUIsQ0FBQyxFQUFFO0VBQ25ELElBQU1pQixxQkFBcUIsR0FBR3pFLFFBQVEsQ0FBQ3dELGNBQWMsQ0FBQyx5QkFBeUIsQ0FBQztFQUNoRixJQUFNa0IseUJBQXlCLEdBQUdwQiw2REFBVSxDQUFDbUIscUJBQXFCLENBQUM7RUFFbkVDLHlCQUF5QixDQUFDL1UsTUFBTSxlQUM1QmxHLDJEQUFBLENBQUMwUCwyRkFBcUI7SUFBQzlNLEVBQUUsRUFBRW9ZLHFCQUFxQixDQUFDUCxPQUFPLENBQUM3WCxFQUFHO0lBQUMrTSxhQUFhLEVBQUVxTCxxQkFBcUIsQ0FBQ1AsT0FBTyxDQUFDeEs7RUFBTyxFQUFHLENBQ3ZIO0FBQ0w7QUFFQSxJQUFHc0csUUFBUSxDQUFDK0QsYUFBYSxDQUFDLG1CQUFtQixDQUFDLEVBQUU7RUFDNUMvRCxRQUFRLENBQUNDLGdCQUFnQixDQUFDLG1CQUFtQixDQUFDLENBQUNsZSxPQUFPLENBQUMsVUFBQTRpQixlQUFlLEVBQUk7SUFDdEUsSUFBTUMsbUJBQW1CLEdBQUd0Qiw2REFBVSxDQUFDcUIsZUFBZSxDQUFDO0lBQ3ZEQyxtQkFBbUIsQ0FBQ2pWLE1BQU0sZUFDdEJsRywyREFBQSxDQUFDaVMsK0VBQWU7TUFBQ3JQLEVBQUUsRUFBRXNZLGVBQWUsQ0FBQ1QsT0FBTyxDQUFDN1gsRUFBRztNQUFDK00sYUFBYSxFQUFFdUwsZUFBZSxDQUFDVCxPQUFPLENBQUN4SztJQUFPLEVBQUcsQ0FDckc7RUFDTCxDQUFDLENBQUM7QUFDTjtBQUdBLElBQUdzRyxRQUFRLENBQUN3RCxjQUFjLENBQUMsOEJBQThCLENBQUMsRUFBRTtFQUN4RCxJQUFNcE4sTUFBSyxHQUFHNEosUUFBUSxDQUFDd0QsY0FBYyxDQUFDLDhCQUE4QixDQUFDO0VBQ3JFLElBQU1TLEtBQUksR0FBR1gsNkRBQVUsQ0FBQ2xOLE1BQUssQ0FBQztFQUM5QjZOLEtBQUksQ0FBQ3RVLE1BQU0sZUFDUGxHLDJEQUFBLENBQUN1SixxR0FBMEI7SUFBQ3hOLElBQUksRUFBRTRRLE1BQUssQ0FBQzhOLE9BQU8sQ0FBQzFlLElBQUs7SUFBQ2xHLEtBQUssRUFBRThXLE1BQUssQ0FBQzhOLE9BQU8sQ0FBQzVrQjtFQUFNLEVBQUcsQ0FDdkY7QUFDTDs7QUFFQTtBQUNBLElBQUcwZ0IsUUFBUSxDQUFDK0QsYUFBYSxDQUFDLHVCQUF1QixDQUFDLEVBQUU7RUFDaEQvRCxRQUFRLENBQUNDLGdCQUFnQixDQUFDLHVCQUF1QixDQUFDLENBQUNsZSxPQUFPLENBQUMsVUFBQW1lLEdBQUcsRUFBSTtJQUFBLElBQUEyRSxxQkFBQSxFQUFBQyxxQkFBQSxFQUFBQyxrQkFBQTtJQUM5RCxJQUFNalksV0FBVyxHQUFHa1ksUUFBUSxFQUFBSCxxQkFBQSxHQUFDM0UsR0FBRyxDQUFDZ0UsT0FBTyxDQUFDZSxXQUFXLGNBQUFKLHFCQUFBLGNBQUFBLHFCQUFBLEdBQUksS0FBSyxDQUFDO0lBQzlELElBQU05WCxZQUFZLEdBQUdpWSxRQUFRLEVBQUFGLHFCQUFBLEdBQUM1RSxHQUFHLENBQUNnRSxPQUFPLENBQUNnQixZQUFZLGNBQUFKLHFCQUFBLGNBQUFBLHFCQUFBLEdBQUksS0FBSyxDQUFDO0lBQ2hFLElBQU1iLElBQUksR0FBR1gsNkRBQVUsQ0FBQ3BELEdBQUcsQ0FBQztJQUM1QitELElBQUksQ0FBQ3RVLE1BQU0sZUFDUGxHLDJEQUFBLENBQUNrRCxxRkFBa0I7TUFDZm5ILElBQUksRUFBRTBhLEdBQUcsQ0FBQ2dFLE9BQU8sQ0FBQzFlLElBQUs7TUFDdkJvSCxLQUFLLEVBQUVzVCxHQUFHLENBQUNnRSxPQUFPLENBQUN0WCxLQUFNO01BQ3pCQyxnQkFBZ0IsR0FBQWtZLGtCQUFBLEdBQUU3RSxHQUFHLENBQUNnRSxPQUFPLENBQUM1a0IsS0FBSyxjQUFBeWxCLGtCQUFBLGNBQUFBLGtCQUFBLEdBQUksSUFBSztNQUM1Q2pZLFdBQVcsRUFBRUEsV0FBWTtNQUN6QkMsWUFBWSxFQUFFQTtJQUFhLEVBQzdCLENBQ0w7RUFDTCxDQUFDLENBQUM7QUFDTjs7QUFHQTtBQUNBLElBQUdpVCxRQUFRLENBQUMrRCxhQUFhLENBQUMsdUJBQXVCLENBQUMsRUFBRTtFQUNoRC9ELFFBQVEsQ0FBQ0MsZ0JBQWdCLENBQUMsdUJBQXVCLENBQUMsQ0FBQ2xlLE9BQU8sQ0FBQyxVQUFBbWUsR0FBRyxFQUFJO0lBQzlELElBQU0rRCxJQUFJLEdBQUdYLDZEQUFVLENBQUNwRCxHQUFHLENBQUM7SUFDNUIrRCxJQUFJLENBQUN0VSxNQUFNLGVBQ1BsRywyREFBQSxDQUFDSyxxRkFBa0I7TUFBQ0UsVUFBVSxFQUFFa1csR0FBRyxDQUFDZ0UsT0FBTyxDQUFDaUIsVUFBVztNQUFDbGIsT0FBTyxFQUFFaVcsR0FBRyxDQUFDZ0UsT0FBTyxDQUFDa0I7SUFBUSxFQUFHLENBQzNGO0VBQ0wsQ0FBQyxDQUFDO0FBQ047Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbEp1QztBQUVoQyxJQUFNclIsYUFBYSxHQUFHLFNBQWhCQSxhQUFhQSxDQUFJc1IsS0FBSyxFQUFLO0VBQ3BDLElBQU1DLFFBQVEsR0FBRyxJQUFJQyxJQUFJLENBQUNDLFlBQVksQ0FBQ0MsZUFBZSxFQUFFLEVBQUU7SUFBQ3JWLEtBQUssRUFBRSxVQUFVO0lBQUVzVixRQUFRLEVBQUU7RUFBSyxDQUFDLENBQUM7RUFDL0YsT0FBT0osUUFBUSxDQUFDSyxNQUFNLENBQUNOLEtBQUssR0FBRyxHQUFHLENBQUM7QUFDdkMsQ0FBQztBQUVNLElBQU1PLGtCQUFrQixHQUFHLFNBQXJCQSxrQkFBa0JBLENBQUlDLFVBQVUsRUFBSztFQUM5QyxJQUFNUCxRQUFRLEdBQUcsSUFBSUMsSUFBSSxDQUFDQyxZQUFZLENBQUNDLGVBQWUsRUFBRSxDQUFDO0VBQ3pELE9BQU9ILFFBQVEsQ0FBQ0ssTUFBTSxDQUFDRSxVQUFVLEdBQUcsRUFBRSxDQUFDO0FBQzNDLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ08sSUFBTUMsZ0JBQWdCLEdBQUcsU0FBbkJBLGdCQUFnQkEsQ0FBSUMsUUFBUSxFQUFLO0VBQzFDLElBQUdBLFFBQVEsSUFBSSxJQUFJLEVBQUU7SUFDakIsSUFBTUMsWUFBWSxHQUFHaE8sSUFBSSxDQUFDQyxLQUFLLENBQUU4TixRQUFRLEdBQUcsR0FBRyxDQUFFLEdBQUcsRUFBRSxDQUFDLENBQUM7O0lBRXhELElBQU1ULFFBQVEsR0FBRyxJQUFJQyxJQUFJLENBQUNDLFlBQVksQ0FBQ0MsZUFBZSxFQUFFLENBQUM7SUFDekQsT0FBT0gsUUFBUSxDQUFDSyxNQUFNLENBQUNLLFlBQVksQ0FBQyxHQUFHLEtBQUs7RUFDaEQ7RUFDQSxPQUFPRCxRQUFRLEdBQUcsSUFBSTtBQUMxQixDQUFDO0FBR0QsSUFBTU4sZUFBZSxHQUFHLFNBQWxCQSxlQUFlQSxDQUFBLEVBQVM7RUFDMUIsSUFBRzdXLGtFQUFhLEtBQUssSUFBSSxFQUFFO0lBQ3ZCLE9BQU8sT0FBTztFQUNsQjtFQUNBLE9BQU8sT0FBTztBQUNsQixDQUFDOzs7Ozs7Ozs7Ozs7OztBQy9CTSxJQUFNK0IsV0FBVyxHQUFHLFNBQWRBLFdBQVdBLENBQUdzVixLQUFLLEVBQUk7RUFDaEMsSUFBSUMsS0FBSyxHQUFHLEVBQUU7RUFDZCxLQUFJLElBQUloaEIsQ0FBQyxHQUFDLENBQUMsRUFBR0EsQ0FBQyxHQUFHK2dCLEtBQUssRUFBRy9nQixDQUFDLEVBQUUsRUFBRTtJQUMzQmdoQixLQUFLLElBQUlsTyxJQUFJLENBQUNtTyxLQUFLLENBQUNuTyxJQUFJLENBQUNvTyxNQUFNLEVBQUUsR0FBRyxFQUFFLENBQUM7RUFDM0M7RUFDQSxPQUFPRixLQUFLO0FBQ2hCLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7QUNOeUI7QUFFbkIsSUFBTXBTLGdCQUFnQixHQUFHLFNBQW5CQSxnQkFBZ0JBLENBQUEvSixJQUFBLEVBQW9DO0VBQUEsSUFBL0J6SyxLQUFLLEdBQUF5SyxJQUFBLENBQUx6SyxLQUFLO0lBQUVzTixLQUFLLEdBQUE3QyxJQUFBLENBQUw2QyxLQUFLO0lBQUF5WixTQUFBLEdBQUF0YyxJQUFBLENBQUU2SyxJQUFJO0lBQUpBLElBQUksR0FBQXlSLFNBQUEsY0FBRyxJQUFJLEdBQUFBLFNBQUE7RUFDdkQsb0JBQ0k1YywwREFBQTtJQUFLMEMsU0FBUyxFQUFFLDZCQUE2QixJQUFJeUksSUFBSSxHQUFJLEdBQUcsR0FBQ0EsSUFBSSxHQUFDLFFBQVEsR0FBRyxFQUFFO0VBQUUsZ0JBQzdFbkwsMERBQUE7SUFBSzBDLFNBQVMsRUFBQztFQUFxQixnQkFDaEMxQywwREFBQTtJQUFLMEMsU0FBUyxFQUFDO0VBQTJCLEdBQUVTLEtBQUssQ0FBTyxlQUN4RG5ELDBEQUFBO0lBQUswQyxTQUFTLEVBQUM7RUFBMkIsR0FBRTdNLEtBQUssQ0FBTyxDQUN0RCxDQUNKO0FBRWQsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1h5QjtBQUNnQztBQUVuRCxJQUFNc1IsY0FBYyxHQUFHLFNBQWpCQSxjQUFjQSxDQUFBN0csSUFBQSxFQUFtQjtFQUFBLElBQVhpVixLQUFLLEdBQUFsZ0IsTUFBQSxDQUFBeW5CLE1BQUEsTUFBQUMseUJBQUEsQ0FBQXpjLElBQUEsR0FBQUEsSUFBQTtFQUNwQyxvQkFDSU4sMERBQUE7SUFBSzBDLFNBQVMsRUFBQztFQUFrQixnQkFDN0IxQywwREFBQSxDQUFDNmMseURBQVMsRUFBQWpILFFBQUE7SUFBQzlRLGVBQWUsRUFBQztFQUFvQixHQUFLeVEsS0FBSyxFQUFJLENBQzNEO0FBRWQsQ0FBQzs7Ozs7Ozs7Ozs7QUNURDs7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7OztBQ0FBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vYXNzZXRzL0NvbXBvbmVudHMvQWRtaW4vQWRtaW5BbnN3ZXJDb250cm9sL2luZGV4LmpzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvQ29tcG9uZW50cy9BZG1pbi9BZG1pblBpY3R1cmVVcGxvYWQvaW5kZXguanN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9Db21wb25lbnRzL0FkbWluL0luZ3JlZGllbnRzUXVhbnRpdGllc0lucHV0L0lxQ2FyZC5qc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL0NvbXBvbmVudHMvQWRtaW4vSW5ncmVkaWVudHNRdWFudGl0aWVzSW5wdXQvSXFGb3JtL0luZ3JlZGllbnRTdWdnZXN0ZWRGaWVsZC5qc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL0NvbXBvbmVudHMvQWRtaW4vSW5ncmVkaWVudHNRdWFudGl0aWVzSW5wdXQvSXFGb3JtL2luZGV4LmpzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvQ29tcG9uZW50cy9BZG1pbi9JbmdyZWRpZW50c1F1YW50aXRpZXNJbnB1dC9pbmRleC5qc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL0NvbXBvbmVudHMvQWRtaW4vUGFja2FnaW5nQ2hvaWNlc0lucHV0L0FkbWluUGFja2FnaW5nQ2FyZC5qc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL0NvbXBvbmVudHMvQWRtaW4vUGFja2FnaW5nQ2hvaWNlc0lucHV0L1BhY2thZ2luZ0Nob2ljZXNGb3JtLmpzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvQ29tcG9uZW50cy9BZG1pbi9QYWNrYWdpbmdDaG9pY2VzSW5wdXQvaW5kZXguanN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9Db21wb25lbnRzL0FkbWluL1B1cmNoYXNlU3RhdHVzVXBkYXRlci9pbmRleC5qc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL0NvbXBvbmVudHMvQWRtaW4vUmV2aWV3TW9kZXJhdG9yL2luZGV4LmpzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvQ29tcG9uZW50cy9BZG1pbi9TZWxlY3RMaW5rZWRJdGVtcy9BZG1pbkl0ZW1TdWdnZXN0LmpzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvQ29tcG9uZW50cy9BZG1pbi9TZWxlY3RMaW5rZWRJdGVtcy9TZWxlY3RlZEl0ZW1zTGlzdC5qc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL0NvbXBvbmVudHMvQWRtaW4vU2VsZWN0TGlua2VkSXRlbXMvaW5kZXguanN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9Db21wb25lbnRzL0FkbWluL1NlbGVjdFVuaXF1ZUl0ZW0vaW5kZXguanN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9DdXN0b21Ib29rL2ZldGNoL3VzZUZldGNoT3V0LmpzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvVUkvQWRtaW4vU3RhbmRhcmRJdGVtL1N0YW5kYXJkSXRlbVNlbGVjdG9yLmpzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvVUkvQnV0dG9uL0J1dHRvbi5qc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL1VJL0J1dHRvbi9DbG9zZUJ1dHRvbi5qc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL1VJL0J1dHRvbi9FZGl0QnV0dG9uLmpzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvVUkvQnV0dG9uL1BsdXNCdXR0b24uanN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9VSS9Db250YWluZXIvTW9kYWwuanN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9VSS9Gb3JtL1BpY3R1cmVVcGxvYWRGaWVsZC5qc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL1VJL0ljb24vQ2xvc2VJY29uLmpzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvVUkvSWNvbi9FZGl0SWNvbi5qc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL1VJL0ljb24vUXVhbnRpdHkvUGx1c0ljb24uanN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9VSS9JY29uL1RyYXNoSWNvbi5qc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL1VJL1N1Z2dlc3RMaXN0LmpzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvZW50cnlwb2ludHMvYWRtaW4uanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2Z1bmN0aW9ucy9mb3JtYXRlcnMuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2Z1bmN0aW9ucy90b2tlbi5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc3R5bGVzL1VJL0FkbWluL0Zvcm0vQWRtaW5TaG93Q2FyZFJvdy5qc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3N0eWxlcy9VSS9BZG1pbi9Gb3JtL0FkbWluVGV4dEZpZWxkLmpzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc3R5bGVzL0FkbWluL0luZ3JlZGllbnRzUXVhbnRpdGllc0lucHV0L2luZGV4LmNzcz9kNWVjIiwid2VicGFjazovLy8uL2Fzc2V0cy9zdHlsZXMvQWRtaW4vUHJvZHVjdC9zaG93LmNzcz8yMWVkIiwid2VicGFjazovLy8uL2Fzc2V0cy9zdHlsZXMvQWRtaW4vU3VnZ2VzdGVkUHJvZHVjdHNJbnB1dC9pbmRleC5jc3M/YmU2NiIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc3R5bGVzL0FkbWluL1VJL2J1dHRvbnMuY3NzPzRiODkiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3N0eWxlcy9BZG1pbi9VSS9zdWdnZXN0TGlzdC5jc3M/MmI5ZiIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc3R5bGVzL0FkbWluL2FsZXJ0cy5jc3M/ZTEwYyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc3R5bGVzL0FkbWluL2JyZWFkY3J1bWIuY3NzPzQ1YTAiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3N0eWxlcy9BZG1pbi9jdXN0b21UYWJsZS5jc3M/OGU1MCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc3R5bGVzL0FkbWluL2ZsYXNoZXMuY3NzP2QyYjIiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3N0eWxlcy9BZG1pbi9mb290ZXIuY3NzPzQ4NmUiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3N0eWxlcy9BZG1pbi9mb3JtLmNzcz8wMzk5Iiwid2VicGFjazovLy8uL2Fzc2V0cy9zdHlsZXMvQWRtaW4vZm9ybV9maWx0ZXJzLmNzcz9lZDBjIiwid2VicGFjazovLy8uL2Fzc2V0cy9zdHlsZXMvQWRtaW4vaGVhZGVyLmNzcz9iOGYwIiwid2VicGFjazovLy8uL2Fzc2V0cy9zdHlsZXMvQWRtaW4vaG9tZS5jc3M/NDNjMyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc3R5bGVzL0FkbWluL2luZGV4LmNzcz8yZDMxIiwid2VicGFjazovLy8uL2Fzc2V0cy9zdHlsZXMvQWRtaW4vcGFnaW5hdGlvbi5jc3M/NTFlOSIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc3R5bGVzL0FkbWluL3Jldmlldy5jc3M/OTcxZiIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc3R5bGVzL0FkbWluL3RhYmxlLmNzcz82NGU2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgdXNlT3BlblN0YXRlIH0gZnJvbSAnLi4vLi4vLi4vQ3VzdG9tSG9vay9zdGF0ZS91c2VPcGVuU3RhdGUnO1xyXG5pbXBvcnQgeyBBcGlFcnJvciwgYXBpUHJlcGFyZWRGZXRjaCB9IGZyb20gJy4uLy4uLy4uL2Z1bmN0aW9ucy9hcGknO1xyXG5cclxuZXhwb3J0IGNvbnN0IEFkbWluQW5zd2VyQ29udHJvbCA9ICh7b3duZXJDbGFzcywgb3duZXJJZH0pID0+IHtcclxuXHJcbiAgICBjb25zdCBbZm9ybUlzT3Blbiwgb3BlbkZvcm0sIGNsb3NlRm9ybV0gPSB1c2VPcGVuU3RhdGUoZmFsc2UpO1xyXG5cclxuICAgIGNvbnN0IFtpc0xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpXHJcbiAgICBjb25zdCBbZXJyb3JzLCBzZXRFcnJvcnNdID0gdXNlU3RhdGUobnVsbCk7XHJcblxyXG4gICAgY29uc3QgW3ZhbHVlLCBzZXRWYWx1ZV0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgICBjb25zdCBoYW5kbGVDaGFuZ2UgPSBlID0+IHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgc2V0VmFsdWUoZS50YXJnZXQudmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IGFzeW5jIGUgPT4ge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBpZihpc0xvYWRpbmcpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBzZXRMb2FkaW5nKHRydWUpO1xyXG4gICAgICAgIHNldEVycm9ycyhudWxsKTtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBhd2FpdCBhcGlQcmVwYXJlZEZldGNoKCcvYWRtaW4vYXBpL2Fuc3dlci9jcmVhdGUvJytvd25lckNsYXNzKycvJytvd25lcklkLCB7Y29udGVudDogdmFsdWV9LCAnUE9TVCcpO1xyXG4gICAgICAgICAgICBsb2NhdGlvbi5yZWxvYWQoKTtcclxuICAgICAgICB9IGNhdGNoKGUpIHtcclxuICAgICAgICAgICAgaWYoZSBpbnN0YW5jZW9mIEFwaUVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICBzZXRFcnJvcnMoZS5lcnJvcnMpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgc2V0RXJyb3JzKFsnRXJyZXVyIHNlcnZldXInXSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgZm9ybUlzT3BlbiAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXsnYWRtaW4tZm9ybS1ncm91cCcgKyAoZXJyb3JzID8gJyBpcy1pbnZhbGlkJzogJycpfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPXtvd25lcklkfSBjbGFzc05hbWU9XCJhZG1pbi1mb3JtLWxhYmVsXCI+UsOpcG9uc2U8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRleHRhcmVhIGlkPXtvd25lcklkfSB0eXBlPVwidGV4dFwiIGNsYXNzTmFtZT1cImFkbWluLWZvcm0tY29udHJvbFwiIHZhbHVlPXt2YWx1ZX0gb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX0gYXV0b0ZvY3VzPXt0cnVlfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVycm9ycz8uY29udGVudCAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWRtaW4tZm9ybS1lcnJvclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT57ZXJyb3JzLmNvbnRlbnR9PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzTG9hZGluZyA/IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFkbWluLWZvcm0taW5mb1wiPkNoYXJnZW1lbnQuLi48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICk6IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFkbWluLXN1Ym1pdC1ncm91cCBkb3VibGVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgb25DbGljaz17Y2xvc2VGb3JtfSBjbGFzc05hbWU9XCJhZG1pbi1idXR0b24gc2Vjb25kYXJ5LWNvbG9yIGFkbWluLXNtYWxsLWJ1dHRvblwiIGRpc2FibGVkPXtpc0xvYWRpbmd9PkFubnVsZXI8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3NOYW1lPVwiYWRtaW4tYnV0dG9uIGFkbWluLXNtYWxsLWJ1dHRvblwiPlZhbGlkZXI8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAhZm9ybUlzT3BlbiAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgb25DbGljaz17b3BlbkZvcm19IGNsYXNzTmFtZT1cImFkbWluLWJ1dHRvbiBhZG1pbi1zbWFsbC1idXR0b25cIj5Sw6lwb25kcmU8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIDwvPlxyXG4gICAgKVxyXG59IiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBQaWN0dXJlVXBsb2FkRmllbGQgfSBmcm9tICcuLi8uLi8uLi9VSS9Gb3JtL1BpY3R1cmVVcGxvYWRGaWVsZCc7XHJcblxyXG5leHBvcnQgY29uc3QgQWRtaW5QaWN0dXJlVXBsb2FkID0gKHtuYW1lLCBsYWJlbCwgZGVmYXVsdEJhc2U2NGltZywgcmVzaXplV2lkdGgsIHJlc2l6ZUhlaWdodH0pID0+IHtcclxuXHJcbiAgICBjb25zdCBbZXJyb3JzLCBzZXRFcnJvcnNdID0gdXNlU3RhdGUoW10pO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPFBpY3R1cmVVcGxvYWRGaWVsZCBcclxuICAgICAgICAgICAgbmFtZT17bmFtZX0gXHJcbiAgICAgICAgICAgIGVycm9ycz17ZXJyb3JzfSBcclxuICAgICAgICAgICAgc2V0RXJyb3JzPXtzZXRFcnJvcnN9IFxyXG4gICAgICAgICAgICByZXNpemVXaWR0aD17cmVzaXplV2lkdGh9IFxyXG4gICAgICAgICAgICByZXNpemVIZWlnaHQ9e3Jlc2l6ZUhlaWdodH1cclxuICAgICAgICAgICAgZGVmYXVsdEJhc2U2NGltZz17ZGVmYXVsdEJhc2U2NGltZ31cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICB7bGFiZWx9XHJcbiAgICAgICAgPC9QaWN0dXJlVXBsb2FkRmllbGQ+XHJcbiAgICApXHJcbn0gIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgdXNlT3BlblN0YXRlIH0gZnJvbSAnLi4vLi4vLi4vQ3VzdG9tSG9vay9zdGF0ZS91c2VPcGVuU3RhdGUuanN4JztcclxuaW1wb3J0IHsgTW9kYWwgfSBmcm9tICcuLi8uLi8uLi9VSS9Db250YWluZXIvTW9kYWwuanN4JztcclxuaW1wb3J0IHsgSXFGb3JtIH0gZnJvbSAnLi9JcUZvcm0vaW5kZXguanN4JztcclxuaW1wb3J0IHsgRWRpdEJ1dHRvbiB9IGZyb20gJy4uLy4uLy4uL1VJL0J1dHRvbi9FZGl0QnV0dG9uLmpzeCc7XHJcbmltcG9ydCB7IENsb3NlQnV0dG9uIH0gZnJvbSAnLi4vLi4vLi4vVUkvQnV0dG9uL0Nsb3NlQnV0dG9uLmpzeCc7XHJcblxyXG5leHBvcnQgY29uc3QgSXFDYXJkID0gKHtpbmdyZWRpZW50UXVhbnRpdHksIHJlbW92ZSwgdXBkYXRlfSkgPT4ge1xyXG4gICAgXHJcbiAgICBjb25zdCBoYW5kbGVSZW1vdmUgPSAoKSA9PiB7XHJcbiAgICAgICAgcmVtb3ZlKGluZ3JlZGllbnRRdWFudGl0eSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgaGFuZGxlVXBkYXRlID0gbmV3SW5ncmVkaWVudFF1YW50aXR5ID0+IHtcclxuICAgICAgICB1cGRhdGUoaW5ncmVkaWVudFF1YW50aXR5LmlkLCBuZXdJbmdyZWRpZW50UXVhbnRpdHkpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IFtmb3JtSXNPcGVuLCBvcGVuRm9ybSwgY2xvc2VGb3JtXSA9IHVzZU9wZW5TdGF0ZShmYWxzZSk7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8bGkgY2xhc3NOYW1lPVwiaXEtY2FyZFwiPlxyXG4gICAgICAgICAgICA8aW1nIHNyYz17aW5ncmVkaWVudFF1YW50aXR5LmluZ3JlZGllbnQucGljdHVyZS5wYXRofSBhbHQ9XCJQaG90byBkJ3VuIGluZ3LDqWRpZW50XCIgLz5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZW4tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgIHtpbmdyZWRpZW50UXVhbnRpdHkucXVhbnRpdHkuZW59IDxzdHJvbmc+e2luZ3JlZGllbnRRdWFudGl0eS5pbmdyZWRpZW50Lm5hbWV9PC9zdHJvbmc+XHJcbiAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZnItZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgIHtpbmdyZWRpZW50UXVhbnRpdHkucXVhbnRpdHkuZnJ9IDxzdHJvbmc+e2luZ3JlZGllbnRRdWFudGl0eS5pbmdyZWRpZW50Lm5hbWV9PC9zdHJvbmc+XHJcbiAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZXMtZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgIHtpbmdyZWRpZW50UXVhbnRpdHkucXVhbnRpdHkuZXN9IDxzdHJvbmc+e2luZ3JlZGllbnRRdWFudGl0eS5pbmdyZWRpZW50Lm5hbWV9PC9zdHJvbmc+XHJcbiAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaXQtZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgIHtpbmdyZWRpZW50UXVhbnRpdHkucXVhbnRpdHkuaXR9IDxzdHJvbmc+e2luZ3JlZGllbnRRdWFudGl0eS5pbmdyZWRpZW50Lm5hbWV9PC9zdHJvbmc+XHJcbiAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgPENsb3NlQnV0dG9uIG9uQ2xpY2s9e2hhbmRsZVJlbW92ZX0gLz5cclxuICAgICAgICAgICAgPEVkaXRCdXR0b24gb25DbGljaz17b3BlbkZvcm19IC8+XHJcblxyXG4gICAgICAgICAgICA8TW9kYWwgaXNPcGVuPXtmb3JtSXNPcGVufSBjbG9zZT17Y2xvc2VGb3JtfSBhZGRpdGlvbmFsQ2xhc3M9XCJhZG1pbi1mb3JtLW1vZGFsXCIgYW5pbWF0ZWQ9e2ZhbHNlfT5cclxuICAgICAgICAgICAgICAgICAgICA8SXFGb3JtIGluZ3JlZGllbnRRdWFudGl0eT17aW5ncmVkaWVudFF1YW50aXR5fSBvblN1Ym1pdFN1Y2Nlc3M9e2hhbmRsZVVwZGF0ZX0gY2xvc2U9e2Nsb3NlRm9ybX0gLz5cclxuICAgICAgICAgICAgPC9Nb2RhbD5cclxuICAgICAgICA8L2xpPlxyXG4gICAgKVxyXG59IiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBDbG9zZUJ1dHRvbiB9IGZyb20gJy4uLy4uLy4uLy4uL1VJL0J1dHRvbi9DbG9zZUJ1dHRvbic7XHJcbmltcG9ydCB7IFN1Z2dlc3RMaXN0IH0gZnJvbSAnLi4vLi4vLi4vLi4vVUkvU3VnZ2VzdExpc3QnO1xyXG5pbXBvcnQgeyB1c2VGZXRjaFFTZWFyY2ggfSBmcm9tICcuLi8uLi8uLi8uLi9DdXN0b21Ib29rL2ZldGNoL3VzZUZldGNoUVNlYXJjaCc7XHJcbmltcG9ydCBpMThuIGZyb20gJy4uLy4uLy4uLy4uL2VudHJ5cG9pbnRzL2kxOG4nO1xyXG5pbXBvcnQgeyBBZG1pbkl0ZW1TdWdnZXN0IH0gZnJvbSAnLi4vLi4vU2VsZWN0TGlua2VkSXRlbXMvQWRtaW5JdGVtU3VnZ2VzdCc7XHJcblxyXG5leHBvcnQgY29uc3QgSW5ncmVkaWVudFN1Z2dlc3RlZEZpZWxkID0gKHtvblNlbGVjdCwgZm9ybUVycm9yfSkgPT4ge1xyXG5cclxuICAgIGNvbnN0IFtxLCBzZXRRXSA9IHVzZVN0YXRlKCcnKTtcclxuXHJcbiAgICBjb25zdCBoYW5kbGVDaGFuZ2UgPSBlID0+IHtcclxuICAgICAgICBzZXRRKGUudGFyZ2V0LnZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBbaW5ncmVkaWVudHMsIHJlc2V0SW5ncmVkaWVudHMsIGlzTG9hZGluZywgZXJyb3JdID0gdXNlRmV0Y2hRU2VhcmNoKCcvJytpMThuLmxhbmd1YWdlKycvYXBpL2luZ3JlZGllbnQvcVNlYXJjaCcsIHEsIDUpO1xyXG5cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWRtaW4tZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17J2Zvcm0tZ3JvdXAgc3VnZ2VzdC1mb3JtLWdyb3VwJyArIChmb3JtRXJyb3IgPyAnIGlzLWludmFsaWQnOiAnJyl9PlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJxXCI+SW5ncsOpZGllbnQ8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJxXCIgY2xhc3NOYW1lPVwiYWRtaW4tZm9ybS1jb250cm9sXCIgcGxhY2Vob2xkZXI9XCJSZWNoZXJjaGVyXCIgbmFtZT1cInFcIiB2YWx1ZT17cX0gb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX0gYXV0b0ZvY3VzPXt0cnVlfSAvPlxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHEgIT09ICcnICYmIDxDbG9zZUJ1dHRvbiBhZGRpdGlvbmFsQ2xhc3M9XCJhZG1pbi1zdWdnZXN0ZWRQcm9kdWN0cy1pbnB1dC1jbG9zZXJcIiBvbkNsaWNrPXsoKSA9PiBzZXRRKCcnKX0gLz5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBpbmdyZWRpZW50cz8ubGVuZ3RoID4gMCAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxTdWdnZXN0TGlzdCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWRkaXRpb25hbENsYXNzPVwiYWRtaW4tc3VnZ2VzdC1saXN0XCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN1Z2dlc3RzPXtpbmdyZWRpZW50c30gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xvc2U9e3Jlc2V0SW5ncmVkaWVudHN9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvblNlbGVjdD17b25TZWxlY3R9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlbmRlcj17KGluZ3JlZGllbnQsIHNlbGVjdGVkKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW5ncmVkaWVudFN1Z2dlc3RJdGVtIGtleT17aW5ncmVkaWVudC5pZH0gaW5ncmVkaWVudD17aW5ncmVkaWVudH0gcT17cX0gc2VsZWN0ZWQ9e3NlbGVjdGVkfSBvblNlbGVjdD17b25TZWxlY3R9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPiAgIFxyXG4gICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3VnZ2VzdC1mb3JtLWluZm9cIj5cclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBmb3JtRXJyb3IgJiYgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWVycm9yXCI+e2Zvcm1FcnJvcn08L2Rpdj5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBpc0xvYWRpbmcgJiYgPGRpdiBjbGFzc05hbWU9XCJhZG1pbi1mb3JtLWluZm9cIj5DaGFyZ2VtZW50Li4uPC9kaXY+XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG5jb25zdCBJbmdyZWRpZW50U3VnZ2VzdEl0ZW0gPSAoe2luZ3JlZGllbnQsIHEsIG9uU2VsZWN0LCBzZWxlY3RlZH0pID0+IHtcclxuXHJcbiAgICBjb25zdCBuYW1lID0gaW5ncmVkaWVudC5uYW1lLnRvVXBwZXJDYXNlKCkuc3BsaXQocS50b1VwcGVyQ2FzZSgpKS5qb2luKCc8c3Ryb25nPicrcS50b1VwcGVyQ2FzZSgpKyc8L3N0cm9uZz4nKTtcclxuXHJcbiAgICBjb25zdCBoYW5kbGVDbGljayA9IGUgPT4ge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBvblNlbGVjdChpbmdyZWRpZW50KTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxhIGNsYXNzTmFtZT17J2FkbWluLXN1Z2dlc3QtaXRlbScgKyAoc2VsZWN0ZWQgPyAnIHNlbGVjdGVkJzogJycpfSBocmVmPVwiI1wiIG9uQ2xpY2s9e2hhbmRsZUNsaWNrfSByb2xlPVwib3B0aW9uXCIgYXJpYS1zZWxlY3RlZD17c2VsZWN0ZWR9PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFkbWluLXN1Z2dlc3QtaW1nXCIgc3R5bGU9e3tiYWNrZ3JvdW5kSW1hZ2U6IGB1cmwoJHtpbmdyZWRpZW50LnBpY3R1cmUucGF0aH0pYH19PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhZG1pbi1zdWdnZXN0LXRleHRcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3tfX2h0bWw6IG5hbWV9fT48L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9hPlxyXG4gICAgKVxyXG59IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0ICogYXMgeXVwIGZyb20gXCJ5dXBcIlxyXG5pbXBvcnQgeyB1c2VGb3JtV2l0aFZhbGlkYXRpb24gfSBmcm9tICcuLi8uLi8uLi8uLi9DdXN0b21Ib29rL2Zvcm0vdXNlRm9ybVdpdGhWYWxpZGF0aW9uJztcclxuaW1wb3J0IHsgY3JlYXRlVG9rZW4gfSBmcm9tICcuLi8uLi8uLi8uLi9mdW5jdGlvbnMvdG9rZW4nO1xyXG5pbXBvcnQgeyBBZG1pblRleHRGaWVsZCB9IGZyb20gJy4uLy4uLy4uLy4uL3N0eWxlcy9VSS9BZG1pbi9Gb3JtL0FkbWluVGV4dEZpZWxkJztcclxuaW1wb3J0IHsgSW5ncmVkaWVudFN1Z2dlc3RlZEZpZWxkIH0gZnJvbSAnLi9JbmdyZWRpZW50U3VnZ2VzdGVkRmllbGQnO1xyXG5pbXBvcnQgeyB1c2VPcGVuU3RhdGUgfSBmcm9tICcuLi8uLi8uLi8uLi9DdXN0b21Ib29rL3N0YXRlL3VzZU9wZW5TdGF0ZSc7XHJcbmltcG9ydCB7IEVkaXRCdXR0b24gfSBmcm9tICcuLi8uLi8uLi8uLi9VSS9CdXR0b24vRWRpdEJ1dHRvbic7XHJcblxyXG5cclxuY29uc3QgaW5ncmVkaWVudFF1YW50aXR5U2NoZW1hID0geXVwXHJcbiAgLm9iamVjdCh7XHJcbiAgICBpbmdyZWRpZW50SWQ6IHl1cC5udW1iZXIoKS50eXBlRXJyb3IoJ1ZvdXMgZGV2ZXogY2hvaXNpciB1biBpbmdyw6lkaWVudCcpLnJlcXVpcmVkKCdWb3VzIGRldmV6IGNob2lzaXIgdW4gaW5ncsOpZGllbnQnKSxcclxuICAgIGVuUXVhbnRpdHk6IHl1cC5zdHJpbmcoKS5tYXgoMjAwLCAnMjAwIGNhcmFjdMOocmVzIG1heC4nKS5yZXF1aXJlZCgnTGEgcXVhbnRpdMOpIChFTikgZXN0IG9ibGlnYXRvaXJlJyksXHJcbiAgICBmclF1YW50aXR5OiB5dXAuc3RyaW5nKCkubWF4KDIwMCwgJzIwMCBjYXJhY3TDqHJlcyBtYXguJykucmVxdWlyZWQoJ0xhIHF1YW50aXTDqSAoRlIpIGVzdCBvYmxpZ2F0b2lyZScpLFxyXG4gICAgZXNRdWFudGl0eTogeXVwLnN0cmluZygpLm1heCgyMDAsICcyMDAgY2FyYWN0w6hyZXMgbWF4LicpLnJlcXVpcmVkKCdMYSBxdWFudGl0w6kgKEVTKSBlc3Qgb2JsaWdhdG9pcmUnKSxcclxuICAgIGl0UXVhbnRpdHk6IHl1cC5zdHJpbmcoKS5tYXgoMjAwLCAnMjAwIGNhcmFjdMOocmVzIG1heC4nKS5yZXF1aXJlZCgnTGEgcXVhbnRpdMOpIChJVCkgZXN0IG9ibGlnYXRvaXJlJyksXHJcbiAgfSlcclxuICAucmVxdWlyZWQoKTtcclxuXHJcblxyXG5cclxuY29uc3QgcHJlcGFyZURlZmF1bHRJbmdyZWRpZW50UXVhbnRpdHkgPSBpbmdyZWRpZW50UXVhbnRpdHkgPT4ge1xyXG4gICAgaWYoaW5ncmVkaWVudFF1YW50aXR5KSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgaW5ncmVkaWVudElkOiBpbmdyZWRpZW50UXVhbnRpdHkuaW5ncmVkaWVudC5pZCxcclxuICAgICAgICAgICAgcGljdHVyZVBhdGg6IGluZ3JlZGllbnRRdWFudGl0eS5pbmdyZWRpZW50LnBpY3R1cmUucGF0aCxcclxuICAgICAgICAgICAgaW5ncmVkaWVudE5hbWU6IGluZ3JlZGllbnRRdWFudGl0eS5pbmdyZWRpZW50Lm5hbWUsXHJcbiAgICAgICAgICAgIGVuUXVhbnRpdHk6IGluZ3JlZGllbnRRdWFudGl0eS5xdWFudGl0eS5lbixcclxuICAgICAgICAgICAgZnJRdWFudGl0eTogaW5ncmVkaWVudFF1YW50aXR5LnF1YW50aXR5LmZyLFxyXG4gICAgICAgICAgICBlc1F1YW50aXR5OiBpbmdyZWRpZW50UXVhbnRpdHkucXVhbnRpdHkuZXMsXHJcbiAgICAgICAgICAgIGl0UXVhbnRpdHk6IGluZ3JlZGllbnRRdWFudGl0eS5xdWFudGl0eS5pdFxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGluZ3JlZGllbnRJZDogJycsXHJcbiAgICAgICAgcGljdHVyZVBhdGg6ICcnLFxyXG4gICAgICAgIGluZ3JlZGllbnROYW1lOiAnJyxcclxuICAgICAgICBlblF1YW50aXR5OiAnJyxcclxuICAgICAgICBmclF1YW50aXR5OiAnJyxcclxuICAgICAgICBlc1F1YW50aXR5OiAnJyxcclxuICAgICAgICBpdFF1YW50aXR5OiAnJ1xyXG4gICAgfTtcclxufVxyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBJcUZvcm0gPSAoe2Nsb3NlLCBvblN1Ym1pdFN1Y2Nlc3MsIGluZ3JlZGllbnRRdWFudGl0eX0pID0+IHtcclxuXHJcbiAgICBjb25zdCB7aGFuZGxlU3VibWl0LCBjb250cm9sLCBlcnJvcnMsIHNldEVycm9yLCBzZXRWYWx1ZSwgZ2V0VmFsdWVzLCB3YXRjaCwgaXNTdWJtaXR0aW5nfSA9IHVzZUZvcm1XaXRoVmFsaWRhdGlvbihcclxuICAgICAgICBpbmdyZWRpZW50UXVhbnRpdHlTY2hlbWEsIFxyXG4gICAgICAgIHByZXBhcmVEZWZhdWx0SW5ncmVkaWVudFF1YW50aXR5KGluZ3JlZGllbnRRdWFudGl0eSlcclxuICAgICk7XHJcbiAgICBcclxuXHJcbiAgICBjb25zdCBvblN1Ym1pdCA9IGZvcm1EYXRhID0+IHtcclxuICAgICAgICBjb25zdCBuZXdJbmdyZWRpZW50UXVhbnRpdHkgPSB7XHJcbiAgICAgICAgICAgIGlkOiBjcmVhdGVUb2tlbig3KSxcclxuICAgICAgICAgICAgaW5ncmVkaWVudDoge1xyXG4gICAgICAgICAgICAgICAgaWQ6IGZvcm1EYXRhLmluZ3JlZGllbnRJZCxcclxuICAgICAgICAgICAgICAgIG5hbWU6IGZvcm1EYXRhLmluZ3JlZGllbnROYW1lLFxyXG4gICAgICAgICAgICAgICAgcGljdHVyZToge1xyXG4gICAgICAgICAgICAgICAgICAgIHBhdGg6IGZvcm1EYXRhLnBpY3R1cmVQYXRoXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHF1YW50aXR5OiB7XHJcbiAgICAgICAgICAgICAgICBlbjogZm9ybURhdGEuZW5RdWFudGl0eSxcclxuICAgICAgICAgICAgICAgIGZyOiBmb3JtRGF0YS5mclF1YW50aXR5LFxyXG4gICAgICAgICAgICAgICAgZXM6IGZvcm1EYXRhLmVzUXVhbnRpdHksXHJcbiAgICAgICAgICAgICAgICBpdDogZm9ybURhdGEuaXRRdWFudGl0eSxcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgb25TdWJtaXRTdWNjZXNzKG5ld0luZ3JlZGllbnRRdWFudGl0eSk7XHJcbiAgICAgICAgY2xvc2UoKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLy9xdWFuZCBvbiBzw6lsZWN0aW9ubmUgdW4gaW5ncsOpZGllbnQsIG9uIGh5ZHJhdGUgbGVzIHZhbGV1cnMgZHUgZm9ybSA6IGluZ3JlZGllbnRJZCwgcGljdHVyZVBhdGgsIGVuSW5ncmVkaWVudE5hbWUgZXRjLi4uXHJcbiAgICBjb25zdCBoYW5kbGVTZWxlY3RJbmdyZWRpZW50ID0gaW5ncmVkaWVudCA9PiB7XHJcbiAgICAgICAgc2V0VmFsdWUoJ2luZ3JlZGllbnRJZCcsIGluZ3JlZGllbnQuaWQpO1xyXG4gICAgICAgIHNldFZhbHVlKCdwaWN0dXJlUGF0aCcsIGluZ3JlZGllbnQucGljdHVyZS5wYXRoKTtcclxuICAgICAgICBzZXRWYWx1ZSgnaW5ncmVkaWVudE5hbWUnLCBpbmdyZWRpZW50Lm5hbWUpO1xyXG4gICAgICAgIGNsb3NlSW5ncmVkaWVudEZvcm0oKTtcclxuICAgIH07XHJcblxyXG5cclxuICAgIGNvbnN0IFtpbmdyZWRpZW50Rm9ybUlzT3Blbiwgb3BlbkluZ3JlZGllbnRGb3JtLCBjbG9zZUluZ3JlZGllbnRGb3JtXSA9IHVzZU9wZW5TdGF0ZShpbmdyZWRpZW50UXVhbnRpdHkgPyBmYWxzZTogdHJ1ZSk7IC8vc2kgY3JlYXRlLCBmb3JtIG91dmVydCAvIHNpIHVwZGF0ZSwgZm9ybSBmZXJtw6lcclxuICAgIGNvbnN0IGhhbmRsZUVkaXRJbmdyZWRpZW50ID0gKCkgPT4ge1xyXG4gICAgICAgIHNldFZhbHVlKCdpbmdyZWRpZW50SWQnLCAnJyk7XHJcbiAgICAgICAgc2V0VmFsdWUoJ3BpY3R1cmVQYXRoJywgJycpO1xyXG4gICAgICAgIHNldFZhbHVlKCdpbmdyZWRpZW50TmFtZScsICcnKTtcclxuICAgICAgICBvcGVuSW5ncmVkaWVudEZvcm0oKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0KG9uU3VibWl0KX0gY2xhc3NOYW1lPVwiYWRtaW4tZm9ybSBpbmdyZWRpZW50LXF1YW50aXR5LWZvcm1cIj5cclxuICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cImFkbWluLWZvcm0tbW9kYWwtdGl0bGVcIj5Jbmdyw6lkaWVudDwvaDI+XHJcblxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBpbmdyZWRpZW50Rm9ybUlzT3BlbiA/IChcclxuICAgICAgICAgICAgICAgICAgICA8SW5ncmVkaWVudFN1Z2dlc3RlZEZpZWxkIG9uU2VsZWN0PXtoYW5kbGVTZWxlY3RJbmdyZWRpZW50fSBmb3JtRXJyb3I9e2Vycm9ycy5pbmdyZWRpZW50SWQ/Lm1lc3NhZ2V9IC8+XHJcbiAgICAgICAgICAgICAgICApOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpcS1jYXJkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtnZXRWYWx1ZXMoJ3BpY3R1cmVQYXRoJyl9IGFsdD1cIlBob3RvIGQndW4gaW5ncsOpZGllbnRcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJhZG1pbi1mb3JtLW1vZGFsLXRvcC1jYXJkLXRleHRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt3YXRjaCgnZnJRdWFudGl0eScpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeycgJ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdHJvbmc+e2dldFZhbHVlcygnaW5ncmVkaWVudE5hbWUnKX08L3N0cm9uZz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8RWRpdEJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVFZGl0SW5ncmVkaWVudH0gLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgPEFkbWluVGV4dEZpZWxkIGNvbnRyb2w9e2NvbnRyb2x9IG5hbWU9XCJlblF1YW50aXR5XCIgZXJyb3I9e2Vycm9ycy5lblF1YW50aXR5Py5tZXNzYWdlfSBtYXhMZW5ndGg9XCIyMDBcIj5RdWFudGl0w6kgKEVOKSAqPC9BZG1pblRleHRGaWVsZD5cclxuICAgICAgICAgICAgPEFkbWluVGV4dEZpZWxkIGNvbnRyb2w9e2NvbnRyb2x9IG5hbWU9XCJmclF1YW50aXR5XCIgZXJyb3I9e2Vycm9ycy5mclF1YW50aXR5Py5tZXNzYWdlfSBtYXhMZW5ndGg9XCIyMDBcIiBwbGFjZWhvbGRlcj1cIkV4OiAxIGN1aWxsw6hyZSBkZVwiPlF1YW50aXTDqSAoRlIpICo8L0FkbWluVGV4dEZpZWxkPlxyXG4gICAgICAgICAgICA8QWRtaW5UZXh0RmllbGQgY29udHJvbD17Y29udHJvbH0gbmFtZT1cImVzUXVhbnRpdHlcIiBlcnJvcj17ZXJyb3JzLmVzUXVhbnRpdHk/Lm1lc3NhZ2V9IG1heExlbmd0aD1cIjIwMFwiPlF1YW50aXTDqSAoRVMpICo8L0FkbWluVGV4dEZpZWxkPlxyXG4gICAgICAgICAgICA8QWRtaW5UZXh0RmllbGQgY29udHJvbD17Y29udHJvbH0gbmFtZT1cIml0UXVhbnRpdHlcIiBlcnJvcj17ZXJyb3JzLml0UXVhbnRpdHk/Lm1lc3NhZ2V9IG1heExlbmd0aD1cIjIwMFwiPlF1YW50aXTDqSAoSVQpICo8L0FkbWluVGV4dEZpZWxkPlxyXG5cclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgT2JqZWN0LnZhbHVlcyhlcnJvcnMpLmxlbmd0aCA+IDAgJiYgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWVycm9yXCI+TGUgZm9ybXVsYWlyZSBjb21wb3J0ZSBkZXMgZXJyZXVyczwvZGl2PlxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFkbWluLXN1Ym1pdC1ncm91cCBkb3VibGVcIj5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT1cImFkbWluLWJ1dHRvbiBzZWNvbmRhcnktY29sb3JcIiBvbkNsaWNrPXtjbG9zZX0+QW5udWxlcjwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3NOYW1lPVwiYWRtaW4tYnV0dG9uXCI+VmFsaWRlcjwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Zvcm0+XHJcbiAgICApXHJcbiAgIFxyXG59XHJcblxyXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgdXNlT3BlblN0YXRlIH0gZnJvbSAnLi4vLi4vLi4vQ3VzdG9tSG9vay9zdGF0ZS91c2VPcGVuU3RhdGUnO1xyXG5pbXBvcnQgJy4uLy4uLy4uL3N0eWxlcy9BZG1pbi9JbmdyZWRpZW50c1F1YW50aXRpZXNJbnB1dC9pbmRleC5jc3MnO1xyXG5pbXBvcnQgeyBNb2RhbCB9IGZyb20gJy4uLy4uLy4uL1VJL0NvbnRhaW5lci9Nb2RhbCc7XHJcbmltcG9ydCB7IFBsdXNCdXR0b24gfSBmcm9tICcuLi8uLi8uLi9VSS9CdXR0b24vUGx1c0J1dHRvbic7XHJcbmltcG9ydCB7IElxQ2FyZCB9IGZyb20gJy4vSXFDYXJkLmpzeCc7XHJcbmltcG9ydCB7IElxRm9ybSB9IGZyb20gJy4vSXFGb3JtL2luZGV4LmpzeCc7XHJcblxyXG5leHBvcnQgY29uc3QgSW5ncmVkaWVudHNRdWFudGl0aWVzSW5wdXQgPSAoe25hbWUsIHZhbHVlfSkgPT4ge1xyXG5cclxuICAgIGNvbnN0IFtmb3JtSXNPcGVuLCBvcGVuRm9ybSwgY2xvc2VGb3JtXSA9IHVzZU9wZW5TdGF0ZShmYWxzZSk7XHJcblxyXG4gICAgLy/DqXRhdCBsb2NhbFxyXG4gICAgY29uc3QgW2luZ3JlZGllbnRzUXVhbnRpdGllcywgc2V0SW5ncmVkaWVudHNRdWFudGl0aWVzXSA9IHVzZVN0YXRlKFtdKTtcclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgaWYodmFsdWUpIHtcclxuICAgICAgICAgICAgc2V0SW5ncmVkaWVudHNRdWFudGl0aWVzKFxyXG4gICAgICAgICAgICAgICAgSlNPTi5wYXJzZSh2YWx1ZSlcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9XHJcbiAgICB9LCBbXSk7XHJcblxyXG4gICAgLy/DqXRhdCBsb2NhbCBzdHJpbmdpZmnDqSBwb3VyIHN1Ym1pdFxyXG4gICAgY29uc3QgW2luZ3JlZGllbnRzUXVhbnRpdGllc1N0cmluZywgc2V0SW5ncmVkaWVudHNRdWFudGl0aWVzU3RyaW5nXSA9IHVzZVN0YXRlKCcnKTtcclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgaWYoaW5ncmVkaWVudHNRdWFudGl0aWVzLmxlbmd0aCA8IDEpIHtcclxuICAgICAgICAgICAgc2V0SW5ncmVkaWVudHNRdWFudGl0aWVzU3RyaW5nKCcnKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBzZXRJbmdyZWRpZW50c1F1YW50aXRpZXNTdHJpbmcoXHJcbiAgICAgICAgICAgICAgICBKU09OLnN0cmluZ2lmeShpbmdyZWRpZW50c1F1YW50aXRpZXMpXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfVxyXG4gICAgfSwgW2luZ3JlZGllbnRzUXVhbnRpdGllc10pO1xyXG4gICAgXHJcblxyXG4gICAgY29uc3QgYWRkSW5ncmVkaWVudFF1YW50aXR5ID0gaW5ncmVkaWVudFF1YW50aXR5ID0+IHtcclxuICAgICAgICBzZXRJbmdyZWRpZW50c1F1YW50aXRpZXMoaW5ncmVkaWVudHNRdWFudGl0aWVzID0+IChbXHJcbiAgICAgICAgICAgIC4uLmluZ3JlZGllbnRzUXVhbnRpdGllcyxcclxuICAgICAgICAgICAgaW5ncmVkaWVudFF1YW50aXR5XHJcbiAgICAgICAgXSkpO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCByZW1vdmVJbmdyZWRpZW50UXVhbnRpdHkgPSBpbmdyZWRpZW50UXVhbnRpdHkgPT4ge1xyXG4gICAgICAgIHNldEluZ3JlZGllbnRzUXVhbnRpdGllcyhpbmdyZWRpZW50c1F1YW50aXRpZXMgPT4gKFxyXG4gICAgICAgICAgICBpbmdyZWRpZW50c1F1YW50aXRpZXMuZmlsdGVyKGkgPT4gaS5pZCAhPT0gaW5ncmVkaWVudFF1YW50aXR5LmlkKVxyXG4gICAgICAgICkpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHVwZGF0ZUluZ3JlZGllbnRRdWFudGl0eSA9IChpZCwgaW5ncmVkaWVudFF1YW50aXR5KSA9PiB7XHJcbiAgICAgICAgc2V0SW5ncmVkaWVudHNRdWFudGl0aWVzKGluZ3JlZGllbnRzUXVhbnRpdGllcyA9PiAoXHJcbiAgICAgICAgICAgIGluZ3JlZGllbnRzUXVhbnRpdGllcy5tYXAoaSA9PiBpLmlkID09PSBpZCA/IGluZ3JlZGllbnRRdWFudGl0eTogaSlcclxuICAgICAgICApKVxyXG4gICAgfTtcclxuXHJcblxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhZG1pbi1mb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgIDxsYWJlbD5Jbmdyw6lkaWVudHMgKjwvbGFiZWw+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWRtaW4tc2VsZWN0LWxpc3RcIj5cclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBpbmdyZWRpZW50c1F1YW50aXRpZXMubWFwKGluZ3JlZGllbnRRdWFudGl0eSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxJcUNhcmQgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2luZ3JlZGllbnRRdWFudGl0eS5pZH0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbmdyZWRpZW50UXVhbnRpdHk9e2luZ3JlZGllbnRRdWFudGl0eX0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZW1vdmU9e3JlbW92ZUluZ3JlZGllbnRRdWFudGl0eX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVwZGF0ZT17dXBkYXRlSW5ncmVkaWVudFF1YW50aXR5fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICkpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPFBsdXNCdXR0b24gY2xhc3NOYW1lPVwiYWRtaW4tYWRkLWJ1dHRvblwiIG9uQ2xpY2s9e29wZW5Gb3JtfSAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPE1vZGFsIGlzT3Blbj17Zm9ybUlzT3Blbn0gY2xvc2U9e2Nsb3NlRm9ybX0gYW5pbWF0ZWQ9e2ZhbHNlfSBhZGRpdGlvbmFsQ2xhc3M9XCJhZG1pbi1mb3JtLW1vZGFsXCI+XHJcbiAgICAgICAgICAgICAgICA8SXFGb3JtIFxyXG4gICAgICAgICAgICAgICAgICAgIG9uU3VibWl0U3VjY2Vzcz17YWRkSW5ncmVkaWVudFF1YW50aXR5fSBcclxuICAgICAgICAgICAgICAgICAgICBjbG9zZT17Y2xvc2VGb3JtfSBcclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvTW9kYWw+XHJcbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiaGlkZGVuXCIgbmFtZT17bmFtZX0gdmFsdWU9e2luZ3JlZGllbnRzUXVhbnRpdGllc1N0cmluZ30gLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5cclxuXHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IENsb3NlQnV0dG9uIH0gZnJvbSAnLi4vLi4vLi4vVUkvQnV0dG9uL0Nsb3NlQnV0dG9uJztcclxuaW1wb3J0IHsgQWRtaW5TaG93Q2FyZFJvdyB9IGZyb20gJy4uLy4uLy4uL3N0eWxlcy9VSS9BZG1pbi9Gb3JtL0FkbWluU2hvd0NhcmRSb3cnO1xyXG5pbXBvcnQgeyBwcmljZUZvcm1hdGVyIH0gZnJvbSAnLi4vLi4vLi4vZnVuY3Rpb25zL2Zvcm1hdGVycyc7XHJcbmltcG9ydCB7IEVkaXRCdXR0b24gfSBmcm9tICcuLi8uLi8uLi9VSS9CdXR0b24vRWRpdEJ1dHRvbic7XHJcbmltcG9ydCB7IE1vZGFsIH0gZnJvbSAnLi4vLi4vLi4vVUkvQ29udGFpbmVyL01vZGFsJztcclxuaW1wb3J0IHsgdXNlT3BlblN0YXRlIH0gZnJvbSAnLi4vLi4vLi4vQ3VzdG9tSG9vay9zdGF0ZS91c2VPcGVuU3RhdGUnO1xyXG5pbXBvcnQgeyBQYWNrYWdpbmdDaG9pY2VzRm9ybSB9IGZyb20gJy4vUGFja2FnaW5nQ2hvaWNlc0Zvcm0nO1xyXG5cclxuZXhwb3J0IGNvbnN0IEFkbWluUGFja2FnaW5nQ2FyZCA9ICh7cGFja2FnaW5nLCByZW1vdmUsIHVwZGF0ZSwgcGFja2FnaW5nQ2hvaWNlcywgcHJvZHVjdElkLCBzZWxlY3RBc0Jhc2V9KSA9PiB7XHJcblxyXG4gICAgY29uc3QgaGFuZGxlUmVtb3ZlID0gKCkgPT4ge1xyXG4gICAgICAgIHJlbW92ZShwYWNrYWdpbmcpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGhhbmRsZVVwZGF0ZSA9IChmb3JtRGF0YSkgPT4ge1xyXG4gICAgICAgIHVwZGF0ZShwYWNrYWdpbmcucHVibGljUmVmLCBmb3JtRGF0YSk7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IFtmb3JtSXNPcGVuLCBvcGVuRm9ybSwgY2xvc2VGb3JtXSA9IHVzZU9wZW5TdGF0ZShmYWxzZSk7XHJcblxyXG4gICAgY29uc3QgaGFuZGxlQ2xpY2sgPSBlID0+IHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgc2VsZWN0QXNCYXNlKHBhY2thZ2luZyk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17J2FkbWluLXNlbGVjdC1jYXJkIGFkbWluLXBhY2thZ2luZy1jYXJkJyArIChwYWNrYWdpbmcuYmFzZSA/ICcgYWN0aXZlJzogJycpfSBvbkNsaWNrPXtoYW5kbGVDbGlja30gdGl0bGU9e3BhY2thZ2luZy5iYXNlID8gJ0NvbmRpdGlvbm5lbWVudCBkZSBiYXNlJzogJ0Nob2lzaXIgY29tbWUgY29uZGl0aW9ubmVtZW50IGRlIGJhc2UnfT5cclxuICAgICAgICAgICAgICAgIDxDbG9zZUJ1dHRvbiBjbGFzc05hbWU9XCJhZG1pbi1zZWxlY3QtY2FyZC1jbG9zZXJcIiBvbkNsaWNrPXtoYW5kbGVSZW1vdmV9IC8+XHJcbiAgICAgICAgICAgICAgICA8RWRpdEJ1dHRvbiBjbGFzc05hbWU9XCJhZG1pbi1zZWxlY3QtY2FyZC1lZGl0LWJ1dHRvblwiIG9uQ2xpY2s9e29wZW5Gb3JtfSAvPlxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFja2FnaW5nLmJhc2UgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNlbnRlci13cmFwcGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFkbWluLXNlbGVjdC1jYXJkLWJhZGdlXCI+Q29uZGl0aW9ubmVtZW50IGRlIGJhc2U8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIDxBZG1pblNob3dDYXJkUm93IGxhYmVsPVwiUsOpZi4gcHVibGlxdWVcIiB2YWx1ZT17cGFja2FnaW5nLnB1YmxpY1JlZn0gLz5cclxuICAgICAgICAgICAgICAgIDxBZG1pblNob3dDYXJkUm93IGxhYmVsPVwiUsOpZi4gcHJpdsOpZVwiIHZhbHVlPXtwYWNrYWdpbmcucHJpdmF0ZVJlZn0gLz5cclxuICAgICAgICAgICAgICAgIDxBZG1pblNob3dDYXJkUm93IGxhYmVsPVwiQ29kZSBFQU5cIiB2YWx1ZT17cGFja2FnaW5nLmVhbkNvZGV9IC8+XHJcblxyXG4gICAgICAgICAgICAgICAgPEFkbWluU2hvd0NhcmRSb3cgbGFiZWw9XCJMYWJlbCAoRU4pXCIgdmFsdWU9e3BhY2thZ2luZy5lbkxhYmVsfSBsYW5nPVwiZW5cIiAvPlxyXG4gICAgICAgICAgICAgICAgPEFkbWluU2hvd0NhcmRSb3cgbGFiZWw9XCJMYWJlbCAoRlIpXCIgdmFsdWU9e3BhY2thZ2luZy5mckxhYmVsfSBsYW5nPVwiZnJcIiAvPlxyXG4gICAgICAgICAgICAgICAgPEFkbWluU2hvd0NhcmRSb3cgbGFiZWw9XCJMYWJlbCAoRVMpXCIgdmFsdWU9e3BhY2thZ2luZy5lc0xhYmVsfSBsYW5nPVwiZXNcIiAvPlxyXG4gICAgICAgICAgICAgICAgPEFkbWluU2hvd0NhcmRSb3cgbGFiZWw9XCJMYWJlbCAoSVQpXCIgdmFsdWU9e3BhY2thZ2luZy5pdExhYmVsfSBsYW5nPVwiaXRcIiAvPlxyXG5cclxuICAgICAgICAgICAgICAgIDxBZG1pblNob3dDYXJkUm93IGxhYmVsPVwiUHJpeCBwdWJsaWMgKEhUKVwiIHZhbHVlPXtwcmljZUZvcm1hdGVyKHBhY2thZ2luZy5jb25zdW1lclByaWNlSFQpfSAvPlxyXG4gICAgICAgICAgICAgICAgPEFkbWluU2hvd0NhcmRSb3cgbGFiZWw9XCJQcml4IHBybyAoSFQpXCIgdmFsdWU9e3ByaWNlRm9ybWF0ZXIocGFja2FnaW5nLmJ1c2luZXNzUHJpY2VIVCl9IC8+XHJcbiAgICAgICAgICAgICAgICA8QWRtaW5TaG93Q2FyZFJvdyBsYWJlbD1cIlBvaWRzIChnKVwiIHZhbHVlPXtwYWNrYWdpbmcud2VpZ2h0fSAvPlxyXG4gICAgICAgICAgICAgICAgPEFkbWluU2hvd0NhcmRSb3cgbGFiZWw9XCJEcm9pdHMgZCdhY2Npc2VcIiB2YWx1ZT17XHJcbiAgICAgICAgICAgICAgICAgICAgcGFja2FnaW5nLmV4Y2lzZVRheCA/IHByaWNlRm9ybWF0ZXIocGFja2FnaW5nLmV4Y2lzZVRheCk6ICcnXHJcbiAgICAgICAgICAgICAgICB9IC8+XHJcbiAgICAgICAgICAgICAgICA8QWRtaW5TaG93Q2FyZFJvdyBsYWJlbD1cIkNvdGlzYXRpb24gU8OpY3VyaXTDqSBTb2NpYWxlIChGcmFuY2UpXCIgdmFsdWU9e1xyXG4gICAgICAgICAgICAgICAgICAgIHBhY2thZ2luZy5mclNvY2lhbFRheCA/IHByaWNlRm9ybWF0ZXIocGFja2FnaW5nLmZyU29jaWFsVGF4KTogJydcclxuICAgICAgICAgICAgICAgIH0gLz5cclxuICAgICAgICAgICAgICAgIDxBZG1pblNob3dDYXJkUm93IGxhYmVsPVwiU3RvY2tcIiB2YWx1ZT17cGFja2FnaW5nLnN0b2NrfSAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPE1vZGFsIGlzT3Blbj17Zm9ybUlzT3Blbn0gY2xvc2U9e2Nsb3NlRm9ybX0gYW5pbWF0ZWQ9e2ZhbHNlfSBhZGRpdGlvbmFsQ2xhc3M9XCJhZG1pbi1mb3JtLW1vZGFsXCI+XHJcbiAgICAgICAgICAgICAgICA8UGFja2FnaW5nQ2hvaWNlc0Zvcm0gb25TdWJtaXRTdWNjZXNzPXtoYW5kbGVVcGRhdGV9IGNsb3NlPXtjbG9zZUZvcm19IHBhY2thZ2luZz17cGFja2FnaW5nfSBwYWNrYWdpbmdDaG9pY2VzPXtwYWNrYWdpbmdDaG9pY2VzfSBwcm9kdWN0SWQ9e3Byb2R1Y3RJZH0gLz5cclxuICAgICAgICAgICAgPC9Nb2RhbD5cclxuICAgICAgICA8Lz5cclxuICAgIClcclxufSIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0ICogYXMgeXVwIGZyb20gXCJ5dXBcIlxyXG5pbXBvcnQgeyB1c2VGb3JtV2l0aFZhbGlkYXRpb24gfSBmcm9tICcuLi8uLi8uLi9DdXN0b21Ib29rL2Zvcm0vdXNlRm9ybVdpdGhWYWxpZGF0aW9uJztcclxuaW1wb3J0IHsgQWRtaW5UZXh0RmllbGQgfSBmcm9tICcuLi8uLi8uLi9zdHlsZXMvVUkvQWRtaW4vRm9ybS9BZG1pblRleHRGaWVsZCc7XHJcbmltcG9ydCB7IGFwaUZldGNoIH0gZnJvbSAnLi4vLi4vLi4vZnVuY3Rpb25zL2FwaSc7XHJcblxyXG5cclxuY29uc3QgcGFja2FnaW5nU2NoZW1hID0geXVwXHJcbiAgLm9iamVjdCh7XHJcbiAgICBwdWJsaWNSZWY6IHl1cC5zdHJpbmcoKS5tYXgoMjAwLCAnMjAwIGNhcmFjdMOocmVzIG1heC4nKS5yZXF1aXJlZCgnTGUgcsOpZi4gcHVibGlxdWUgZXN0IG9ibGlnYXRvaXJlJyksXHJcbiAgICBwcml2YXRlUmVmOiB5dXAuc3RyaW5nKCkubWF4KDIwMCwgJzIwMCBjYXJhY3TDqHJlcyBtYXguJyksXHJcbiAgICBlbkxhYmVsOiB5dXAuc3RyaW5nKCkubWF4KDIwMCwgJzIwMCBjYXJhY3TDqHJlcyBtYXguJyksXHJcbiAgICBmckxhYmVsOiB5dXAuc3RyaW5nKCkubWF4KDIwMCwgJzIwMCBjYXJhY3TDqHJlcyBtYXguJyksXHJcbiAgICBlc0xhYmVsOiB5dXAuc3RyaW5nKCkubWF4KDIwMCwgJzIwMCBjYXJhY3TDqHJlcyBtYXguJyksXHJcbiAgICBpdExhYmVsOiB5dXAuc3RyaW5nKCkubWF4KDIwMCwgJzIwMCBjYXJhY3TDqHJlcyBtYXguJyksXHJcbiAgICBjb25zdW1lclByaWNlSFQ6IHl1cC5udW1iZXIoKS50eXBlRXJyb3IoJ0NldHRlIHZhbGV1ciBkb2l0IMOqdHJlIHVuIG5vbWJyZScpLnBvc2l0aXZlKCdDZXR0ZSB2YWxldXIgZG9pdCDDqnRyZSBzdXDDqXJpZXVyZSDDoCAwJykucmVxdWlyZWQoJ0xlIHByaXggcHVibGljIChIVCkgZXN0IG9ibGlnYXRvaXJlJyksXHJcbiAgICBidXNpbmVzc1ByaWNlSFQ6IHl1cC5udW1iZXIoKS50eXBlRXJyb3IoJ0NldHRlIHZhbGV1ciBkb2l0IMOqdHJlIHVuIG5vbWJyZScpLnBvc2l0aXZlKCdDZXR0ZSB2YWxldXIgZG9pdCDDqnRyZSBzdXDDqXJpZXVyZSDDoCAwJykucmVxdWlyZWQoJ0xlIHByaXggcHJvIChIVCkgZXN0IG9ibGlnYXRvaXJlJyksXHJcbiAgICBzdG9jazogeXVwLm51bWJlcigpLnR5cGVFcnJvcignQ2V0dGUgdmFsZXVyIGRvaXQgw6p0cmUgdW4gbm9tYnJlJykubWluKDAsICdDZXR0ZSB2YWxldXIgbmUgcGV1dCDDqnRyZSBuw6lnYXRpdmUnKS5yZXF1aXJlZCgnTGUgc3RvY2sgZXN0IG9ibGlnYXRvaXJlJyksXHJcbiAgICBlYW5Db2RlOiB5dXAuc3RyaW5nKCkubWF4KDIwMCwgJzIwMCBjYXJhY3TDqHJlcyBtYXguJykucmVxdWlyZWQoJ0xlIGNvZGUgRUFOIGVzdCBvYmxpZ2F0b2lyZScpLFxyXG4gICAgd2VpZ2h0OiB5dXAubnVtYmVyKCkudHlwZUVycm9yKCdDZXR0ZSB2YWxldXIgZG9pdCDDqnRyZSB1biBub21icmUnKS5wb3NpdGl2ZSgnQ2V0dGUgdmFsZXVyIGRvaXQgw6p0cmUgc3Vww6lyaWV1cmUgw6AgesOpcm8nKS5yZXF1aXJlZCgnTGUgcG9pZHMgKGcpIGVzdCBvYmxpZ2F0b2lyZScpLFxyXG4gICAgZXhjaXNlVGF4OiB5dXAubnVtYmVyKCkudHlwZUVycm9yKCdDZXR0ZSB2YWxldXIgZG9pdCDDqnRyZSB1biBub21icmUnKS5wb3NpdGl2ZSgnQ2V0dGUgdmFsZXVyIGRvaXQgw6p0cmUgc3Vww6lyaWV1cmUgw6AgesOpcm8nKSxcclxuICAgIGZyU29jaWFsVGF4OiB5dXAubnVtYmVyKCkudHlwZUVycm9yKCdDZXR0ZSB2YWxldXIgZG9pdCDDqnRyZSB1biBub21icmUnKS5wb3NpdGl2ZSgnQ2V0dGUgdmFsZXVyIGRvaXQgw6p0cmUgc3Vww6lyaWV1cmUgw6AgesOpcm8nKVxyXG4gIH0pXHJcbiAgLnJlcXVpcmVkKCk7XHJcblxyXG5cclxuY29uc3QgZGVmYXVsdFBhY2thZ2luZyA9IHtcclxuICAgIHB1YmxpY1JlZjogJycsXHJcbiAgICBwcml2YXRlUmVmOiAnJyxcclxuICAgIGVuTGFiZWw6ICcnLFxyXG4gICAgZnJMYWJlbDogJycsXHJcbiAgICBlc0xhYmVsOiAnJyxcclxuICAgIGl0TGFiZWw6ICcnLFxyXG4gICAgY29uc3VtZXJQcmljZUhUOiAnJyxcclxuICAgIGJ1c2luZXNzUHJpY2VIVDogJycsXHJcbiAgICBzdG9jazogJycsXHJcbiAgICBlYW5Db2RlOiAnJyxcclxuICAgIHdlaWdodDogJycsXHJcbiAgICBleGNpc2VUYXg6ICcnLFxyXG4gICAgZnJTb2NpYWxUYXg6ICcnXHJcbn07XHJcblxyXG5jb25zdCBwcmVwYXJlRGVmYXVsdFBhY2thZ2luZyA9IHBhY2thZ2luZyA9PiB7XHJcbiAgICBpZighcGFja2FnaW5nKSB7XHJcbiAgICAgICAgcmV0dXJuIGRlZmF1bHRQYWNrYWdpbmc7XHJcbiAgICB9XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnBhY2thZ2luZyxcclxuICAgICAgICBjb25zdW1lclByaWNlSFQ6IHBhY2thZ2luZy5jb25zdW1lclByaWNlSFQgLyAxMDAsXHJcbiAgICAgICAgYnVzaW5lc3NQcmljZUhUOiBwYWNrYWdpbmcuYnVzaW5lc3NQcmljZUhUIC8gMTAwLFxyXG4gICAgICAgIGV4Y2lzZVRheDogcGFja2FnaW5nLmV4Y2lzZVRheCA/IHBhY2thZ2luZy5leGNpc2VUYXggLyAxMDA6ICcnLFxyXG4gICAgICAgIGZyU29jaWFsVGF4OiBwYWNrYWdpbmcuZnJTb2NpYWxUYXggPyBwYWNrYWdpbmcuZnJTb2NpYWxUYXggLyAxMDA6ICcnXHJcbiAgICB9O1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgUGFja2FnaW5nQ2hvaWNlc0Zvcm0gPSAoe29uU3VibWl0U3VjY2VzcywgY2xvc2UsIHBhY2thZ2luZ0Nob2ljZXMsIHByb2R1Y3RJZCwgcGFja2FnaW5nID0gbnVsbH0pID0+IHtcclxuICAgIGNvbnN0IHtoYW5kbGVTdWJtaXQsIGNvbnRyb2wsIGVycm9ycywgc2V0RXJyb3IsIGlzU3VibWl0dGluZ30gPSB1c2VGb3JtV2l0aFZhbGlkYXRpb24ocGFja2FnaW5nU2NoZW1hLCBwcmVwYXJlRGVmYXVsdFBhY2thZ2luZyhwYWNrYWdpbmcpKTtcclxuXHJcbiAgICBjb25zdCBbaXNMb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgICBjb25zdCBvblN1Ym1pdCA9IGFzeW5jIGZvcm1EYXRhID0+IHtcclxuICAgICAgICBpZihpc0xvYWRpbmcpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBzZXRMb2FkaW5nKHRydWUpO1xyXG4gICAgICAgIC8vdmFsaWRhdGlvbiBVbmlxdWUgcHVibGljUmVmIGPDtHTDqSBmcm9udCAoZW4gY2FzIGRlIHVwZGF0ZSwgb24gdsOpcmlmaWUgcXUnb24gYSBtb2RpZmnDqSBsYSBwdWJsaWNSZWYpXHJcbiAgICAgICAgaWYoIXBhY2thZ2luZ0Nob2ljZXMuZmluZChwID0+IHtcclxuICAgICAgICAgICAgaWYocGFja2FnaW5nICYmIHBhY2thZ2luZy5wdWJsaWNSZWYgPT09IGZvcm1EYXRhLnB1YmxpY1JlZikge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBwLnB1YmxpY1JlZiA9PT0gZm9ybURhdGEucHVibGljUmVmO1xyXG4gICAgICAgIH0pKSB7XHJcbiAgICAgICAgICAgIC8vdmFsaWRhdGlvbiBVbmlxdWUgcHVibGljUmVmIGPDtHTDqSBzZXJ2ZXVyXHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICBhd2FpdCBhcGlGZXRjaCgnL2FkbWluL2FwaS9wYWNrYWdpbmcvdmFsaWRhdGlvbi91bmlxdWVQdWJsaWNSZWYvJysgKHByb2R1Y3RJZCA/PyAnMCcpICsnLycrIGZvcm1EYXRhLnB1YmxpY1JlZik7IC8vZGFucyBjcmVhdGUgcHJvZHVjdElkIGVzdCB1bmRlZmluZWQgLS0+IG9uIGVudm9pZSAwXHJcbiAgICAgICAgICAgICAgICAvL3ByaWNlVHJhbnNmb3JtZXJcclxuICAgICAgICAgICAgICAgIGZvcm1EYXRhLmNvbnN1bWVyUHJpY2VIVCA9IE1hdGgucm91bmQoZm9ybURhdGEuY29uc3VtZXJQcmljZUhUICogMTAwKTtcclxuICAgICAgICAgICAgICAgIGZvcm1EYXRhLmJ1c2luZXNzUHJpY2VIVCA9IE1hdGgucm91bmQoZm9ybURhdGEuYnVzaW5lc3NQcmljZUhUICogMTAwKTtcclxuICAgICAgICAgICAgICAgIGZvcm1EYXRhLmV4Y2lzZVRheCA9IE1hdGgucm91bmQoZm9ybURhdGEuZXhjaXNlVGF4ICogMTAwKTtcclxuICAgICAgICAgICAgICAgIGZvcm1EYXRhLmZyU29jaWFsVGF4ID0gTWF0aC5yb3VuZChmb3JtRGF0YS5mclNvY2lhbFRheCAqIDEwMCk7XHJcbiAgICAgICAgICAgICAgICBvblN1Ym1pdFN1Y2Nlc3MoZm9ybURhdGEpO1xyXG4gICAgICAgICAgICAgICAgY2xvc2UoKTtcclxuICAgICAgICAgICAgfSBjYXRjaChlKSB7XHJcbiAgICAgICAgICAgICAgICAvL1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNldEVycm9yKCdwdWJsaWNSZWYnLCB7dHlwZTogJ2N1c3RvbScsIG1lc3NhZ2U6ICdMYSByw6lmLiBwdWJsaXF1ZSBcIicgKyBmb3JtRGF0YS5wdWJsaWNSZWYgKyAnXCIgZXN0IGTDqWrDoCB1dGlsaXPDqWUnfSk7XHJcbiAgICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8Zm9ybSBjbGFzc05hbWU9XCJhZG1pbi1mb3JtXCIgb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdChvblN1Ym1pdCl9PlxyXG4gICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwiYWRtaW4tZm9ybS1tb2RhbC10aXRsZVwiPkNvbmRpdGlvbm5lbWVudDwvaDI+XHJcbiAgICAgICAgICAgIDxBZG1pblRleHRGaWVsZCBjb250cm9sPXtjb250cm9sfSBuYW1lPVwicHVibGljUmVmXCIgZXJyb3I9e2Vycm9ycy5wdWJsaWNSZWY/Lm1lc3NhZ2V9IG1heExlbmd0aD1cIjIwMFwiPlLDqWYuIHB1YmxpcXVlICo8L0FkbWluVGV4dEZpZWxkPlxyXG4gICAgICAgICAgICA8QWRtaW5UZXh0RmllbGQgY29udHJvbD17Y29udHJvbH0gbmFtZT1cInByaXZhdGVSZWZcIiBlcnJvcj17ZXJyb3JzLnByaXZhdGVSZWY/Lm1lc3NhZ2V9IG1heExlbmd0aD1cIjIwMFwiPlLDqWYuIHByaXbDqWU8L0FkbWluVGV4dEZpZWxkPlxyXG5cclxuICAgICAgICAgICAgPEFkbWluVGV4dEZpZWxkIGNvbnRyb2w9e2NvbnRyb2x9IG5hbWU9XCJlYW5Db2RlXCIgZXJyb3I9e2Vycm9ycy5lYW5Db2RlPy5tZXNzYWdlfSBtYXhMZW5ndGg9XCIyMDBcIj5Db2RlIEVBTiAqPC9BZG1pblRleHRGaWVsZD5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWRtaW4tZm9ybS1tb2RhbC1hcHBhcnRlZFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhZG1pbi1mb3JtLW1vZGFsLWFwcGFydGVkLXRpdGxlXCI+TGFiZWwgOiAoZXg6IDIwY2wgLSBzaSBjJ2VzdCDDoCBsJ3VuaXTDqSBuZSByaWVuIG1ldHRyZSk8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxBZG1pblRleHRGaWVsZCBjb250cm9sPXtjb250cm9sfSBuYW1lPVwiZW5MYWJlbFwiIGVycm9yPXtlcnJvcnMuZW5MYWJlbD8ubWVzc2FnZX0gbWF4TGVuZ3RoPVwiMjAwXCI+RU48L0FkbWluVGV4dEZpZWxkPlxyXG4gICAgICAgICAgICAgICAgPEFkbWluVGV4dEZpZWxkIGNvbnRyb2w9e2NvbnRyb2x9IG5hbWU9XCJmckxhYmVsXCIgZXJyb3I9e2Vycm9ycy5mckxhYmVsPy5tZXNzYWdlfSBtYXhMZW5ndGg9XCIyMDBcIj5GUjwvQWRtaW5UZXh0RmllbGQ+XHJcbiAgICAgICAgICAgICAgICA8QWRtaW5UZXh0RmllbGQgY29udHJvbD17Y29udHJvbH0gbmFtZT1cImVzTGFiZWxcIiBlcnJvcj17ZXJyb3JzLmVzTGFiZWw/Lm1lc3NhZ2V9IG1heExlbmd0aD1cIjIwMFwiPkVTPC9BZG1pblRleHRGaWVsZD5cclxuICAgICAgICAgICAgICAgIDxBZG1pblRleHRGaWVsZCBjb250cm9sPXtjb250cm9sfSBuYW1lPVwiaXRMYWJlbFwiIGVycm9yPXtlcnJvcnMuaXRMYWJlbD8ubWVzc2FnZX0gbWF4TGVuZ3RoPVwiMjAwXCI+SVQ8L0FkbWluVGV4dEZpZWxkPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDxBZG1pblRleHRGaWVsZCB0eXBlPVwibnVtYmVyXCIgY29udHJvbD17Y29udHJvbH0gbmFtZT1cImNvbnN1bWVyUHJpY2VIVFwiIGVycm9yPXtlcnJvcnMuY29uc3VtZXJQcmljZUhUPy5tZXNzYWdlfSBtYXhMZW5ndGg9XCIyMDBcIj5Qcml4IHB1YmxpYyAoSFQpICo8L0FkbWluVGV4dEZpZWxkPlxyXG4gICAgICAgICAgICA8QWRtaW5UZXh0RmllbGQgdHlwZT1cIm51bWJlclwiIGNvbnRyb2w9e2NvbnRyb2x9IG5hbWU9XCJidXNpbmVzc1ByaWNlSFRcIiBlcnJvcj17ZXJyb3JzLmJ1c2luZXNzUHJpY2VIVD8ubWVzc2FnZX0gbWF4TGVuZ3RoPVwiMjAwXCI+UHJpeCBwcm8gKEhUKSAqPC9BZG1pblRleHRGaWVsZD5cclxuXHJcbiAgICAgICAgICAgIDxBZG1pblRleHRGaWVsZCB0eXBlPVwibnVtYmVyXCIgY29udHJvbD17Y29udHJvbH0gbmFtZT1cIndlaWdodFwiIGVycm9yPXtlcnJvcnMud2VpZ2h0Py5tZXNzYWdlfSBtYXhMZW5ndGg9XCIyMDBcIj5Qb2lkcyAoZykgKjwvQWRtaW5UZXh0RmllbGQ+XHJcblxyXG4gICAgICAgICAgICA8QWRtaW5UZXh0RmllbGQgdHlwZT1cIm51bWJlclwiIGNvbnRyb2w9e2NvbnRyb2x9IG5hbWU9XCJleGNpc2VUYXhcIiBlcnJvcj17ZXJyb3JzLmV4Y2lzZVRheD8ubWVzc2FnZX0gbWF4TGVuZ3RoPVwiMjAwXCI+RHJvaXRzIGQnYWNjaXNlICjigqwpICo8L0FkbWluVGV4dEZpZWxkPlxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgPEFkbWluVGV4dEZpZWxkIHR5cGU9XCJudW1iZXJcIiBjb250cm9sPXtjb250cm9sfSBuYW1lPVwiZnJTb2NpYWxUYXhcIiBlcnJvcj17ZXJyb3JzLmZyU29jaWFsVGF4Py5tZXNzYWdlfSBtYXhMZW5ndGg9XCIyMDBcIj5Db3Rpc2F0aW9uIFPDqWN1cml0w6kgU29jaWFsZSAoRnJhbmNlKSAo4oKsKSAqPC9BZG1pblRleHRGaWVsZD5cclxuXHJcbiAgICAgICAgICAgIDxBZG1pblRleHRGaWVsZCB0eXBlPVwibnVtYmVyXCIgY29udHJvbD17Y29udHJvbH0gbmFtZT1cInN0b2NrXCIgZXJyb3I9e2Vycm9ycy5zdG9jaz8ubWVzc2FnZX0gbWF4TGVuZ3RoPVwiMjAwXCI+U3RvY2sgKjwvQWRtaW5UZXh0RmllbGQ+XHJcblxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBPYmplY3QudmFsdWVzKGVycm9ycykubGVuZ3RoID4gMCAmJiA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZXJyb3JcIj5MZSBmb3JtdWxhaXJlIGNvbXBvcnRlIGRlcyBlcnJldXJzPC9kaXY+XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWRtaW4tc3VibWl0LWdyb3VwIGRvdWJsZVwiPlxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGlzTG9hZGluZyA/IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhZG1pbi1mb3JtLWluZm9cIj5DaGFyZ2VtZW50Li4uPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgKTogKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPVwiYWRtaW4tYnV0dG9uIHNlY29uZGFyeS1jb2xvclwiIG9uQ2xpY2s9e2Nsb3NlfT5Bbm51bGVyPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBjbGFzc05hbWU9XCJhZG1pbi1idXR0b25cIj5WYWxpZGVyPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9mb3JtPlxyXG4gICAgKVxyXG59IiwiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IFBsdXNCdXR0b24gfSBmcm9tICcuLi8uLi8uLi9VSS9CdXR0b24vUGx1c0J1dHRvbic7XHJcbmltcG9ydCB7IHVzZU9wZW5TdGF0ZSB9IGZyb20gJy4uLy4uLy4uL0N1c3RvbUhvb2svc3RhdGUvdXNlT3BlblN0YXRlJztcclxuaW1wb3J0IHsgTW9kYWwgfSBmcm9tICcuLi8uLi8uLi9VSS9Db250YWluZXIvTW9kYWwnO1xyXG5pbXBvcnQgeyBQYWNrYWdpbmdDaG9pY2VzRm9ybSB9IGZyb20gJy4vUGFja2FnaW5nQ2hvaWNlc0Zvcm0nO1xyXG5pbXBvcnQgeyBBZG1pblBhY2thZ2luZ0NhcmQgfSBmcm9tICcuL0FkbWluUGFja2FnaW5nQ2FyZCc7XHJcblxyXG5leHBvcnQgY29uc3QgUGFja2FnaW5nQ2hvaWNlc0lucHV0ID0gKHtuYW1lLCB2YWx1ZSwgcHJvZHVjdElkfSkgPT4ge1xyXG5cclxuICAgIC8vw6AgbCdvdXZlcnR1cmUsIHNpIHVuZSB2YWx1ZSBlc3QgcGFzc8OpZSBvbiBsYSBwcmVuZCBlbiBjb21wdGVcclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgaWYodmFsdWUpIHtcclxuICAgICAgICAgICAgc2V0UGFja2FnaW5nQ2hvaWNlc1N0cmluZyh2YWx1ZSk7XHJcbiAgICAgICAgICAgIHNldFBhY2thZ2luZ0Nob2ljZXMoSlNPTi5wYXJzZSh2YWx1ZSkpO1xyXG4gICAgICAgIH1cclxuICAgIH0sIFt2YWx1ZV0pO1xyXG5cclxuICAgIC8vw6l0YXQgbG9jYWwgY29udmVydGl0IGVuIHN0cmluZyBwb3VyIHN1Ym1pdFxyXG4gICAgY29uc3QgW3BhY2thZ2luZ0Nob2ljZXNTdHJpbmcsIHNldFBhY2thZ2luZ0Nob2ljZXNTdHJpbmddID0gdXNlU3RhdGUoJycpO1xyXG4gICAgLy/DqXRhdCBsb2NhbFxyXG4gICAgY29uc3QgW3BhY2thZ2luZ0Nob2ljZXMsIHNldFBhY2thZ2luZ0Nob2ljZXNdID0gdXNlU3RhdGUoW10pO1xyXG4gICAgLy9xdWFuZCDDqXRhdCBsb2NhbCBjaGFuZ2UsIG9uIG1ldCDDoCBqb3VyIGxhIHN0cmluZ1xyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBpZihwYWNrYWdpbmdDaG9pY2VzLmxlbmd0aCA8IDEpIHtcclxuICAgICAgICAgICAgc2V0UGFja2FnaW5nQ2hvaWNlc1N0cmluZygnJyk7IC8vIHBvdXIgcXVlIGNvdMOpIHNlcnZldXIgb24gcHVpc3NlIHZhbGlkZXIgQXNzZXJ0XFxOb3RCbGFua1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIC8vc2kgdW4gc2V1bCBwYWNrYWdpbmdDaG9pY2VzLCBvbiBsZSBtZXQgY29tbWUgcGFja2FnaW5nIGRlIGJhc2UgZCdvZmZpY2VcclxuICAgICAgICAgICAgaWYocGFja2FnaW5nQ2hvaWNlcy5sZW5ndGggPT09IDEpIHtcclxuICAgICAgICAgICAgICAgIHBhY2thZ2luZ0Nob2ljZXNbMF0uYmFzZSA9IHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc2V0UGFja2FnaW5nQ2hvaWNlc1N0cmluZyhKU09OLnN0cmluZ2lmeShwYWNrYWdpbmdDaG9pY2VzKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSwgW3BhY2thZ2luZ0Nob2ljZXNdKTtcclxuXHJcbiAgICBcclxuXHJcbiAgICBcclxuICAgIGNvbnN0IHJlbW92ZVBhY2thZ2luZyA9IHBhY2thZ2luZyA9PiB7XHJcbiAgICAgICAgc2V0UGFja2FnaW5nQ2hvaWNlcyhwYWNrYWdpbmdDaG9pY2VzID0+IHBhY2thZ2luZ0Nob2ljZXMuZmlsdGVyKHAgPT4gcC5wdWJsaWNSZWYgIT09IHBhY2thZ2luZy5wdWJsaWNSZWYpKTtcclxuICAgICAgICAvL3NpIGxlIHBhY2thZ2luZyBzdXBwcmltw6kgw6l0YWl0IGxlIHBhY2thZ2luZyBkZSBiYXNlLCBpbCBmYXV0IGVuIGTDqXNpZ25lciB1biAobidpbXBvcnRlIGxlcXVlbCkgZCdvZmZpY2VcclxuICAgICAgICBpZihwYWNrYWdpbmcuYmFzZSkge1xyXG4gICAgICAgICAgICBzZXRQYWNrYWdpbmdDaG9pY2VzKHBhY2thZ2luZ0Nob2ljZXMgPT4ge1xyXG4gICAgICAgICAgICAgICAgcGFja2FnaW5nQ2hvaWNlc1swXS5iYXNlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBwYWNrYWdpbmdDaG9pY2VzO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBhZGRQYWNrYWdpbmcgPSBuZXdQYWNrYWdpbmcgPT4ge1xyXG4gICAgICAgIHNldFBhY2thZ2luZ0Nob2ljZXMocGFja2FnaW5nQ2hvaWNlcyA9PiAoW1xyXG4gICAgICAgICAgICAuLi5wYWNrYWdpbmdDaG9pY2VzLFxyXG4gICAgICAgICAgICBuZXdQYWNrYWdpbmdcclxuICAgICAgICBdKSk7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IHVwZGF0ZVBhY2thZ2luZyA9IChwdWJsaWNSZWYsIHBhY2thZ2luZykgPT4ge1xyXG4gICAgICAgIHNldFBhY2thZ2luZ0Nob2ljZXMocGFja2FnaW5nQ2hvaWNlcyA9PiAoXHJcbiAgICAgICAgICAgIHBhY2thZ2luZ0Nob2ljZXMubWFwKHAgPT4gcC5wdWJsaWNSZWYgPT09IHB1YmxpY1JlZiA/IHBhY2thZ2luZzogcClcclxuICAgICAgICApKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBoYW5kbGVTZWxlY3RBc0Jhc2UgPSAocGFja2FnaW5nKSA9PiB7XHJcbiAgICAgICAgc2V0UGFja2FnaW5nQ2hvaWNlcyhwYWNrYWdpbmdDaG9pY2VzID0+IHBhY2thZ2luZ0Nob2ljZXMubWFwKHBjID0+IHtcclxuICAgICAgICAgICAgaWYocGMucHVibGljUmVmID09PSBwYWNrYWdpbmcucHVibGljUmVmKSB7XHJcbiAgICAgICAgICAgICAgICBwYy5iYXNlID0gdHJ1ZTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHBjLmJhc2UgPSBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gcGM7XHJcbiAgICAgICAgfSkpO1xyXG4gICAgfTtcclxuXHJcblxyXG4gICAgY29uc3QgW2Zvcm1Jc09wZW4sIG9wZW5Gb3JtLCBjbG9zZUZvcm1dID0gdXNlT3BlblN0YXRlKGZhbHNlKTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWRtaW4tZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICA8bGFiZWw+Q29uZGl0aW9ubmVtZW50cyAqPC9sYWJlbD5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhZG1pbi1zZWxlY3QtbGlzdFwiPlxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHBhY2thZ2luZ0Nob2ljZXMubWFwKHBhY2thZ2luZyA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxBZG1pblBhY2thZ2luZ0NhcmQgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e3BhY2thZ2luZy5wdWJsaWNSZWZ9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFja2FnaW5nPXtwYWNrYWdpbmd9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVtb3ZlPXtyZW1vdmVQYWNrYWdpbmd9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdXBkYXRlPXt1cGRhdGVQYWNrYWdpbmd9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFja2FnaW5nQ2hvaWNlcz17cGFja2FnaW5nQ2hvaWNlc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2R1Y3RJZD17cHJvZHVjdElkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0QXNCYXNlPXtoYW5kbGVTZWxlY3RBc0Jhc2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgKSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8UGx1c0J1dHRvbiBjbGFzc05hbWU9XCJhZG1pbi1hZGQtYnV0dG9uXCIgb25DbGljaz17b3BlbkZvcm19IC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8TW9kYWwgaXNPcGVuPXtmb3JtSXNPcGVufSBjbG9zZT17Y2xvc2VGb3JtfSBhbmltYXRlZD17ZmFsc2V9IGFkZGl0aW9uYWxDbGFzcz1cImFkbWluLWZvcm0tbW9kYWxcIj5cclxuICAgICAgICAgICAgICAgIDxQYWNrYWdpbmdDaG9pY2VzRm9ybSBcclxuICAgICAgICAgICAgICAgICAgICBvblN1Ym1pdFN1Y2Nlc3M9e2FkZFBhY2thZ2luZ30gXHJcbiAgICAgICAgICAgICAgICAgICAgY2xvc2U9e2Nsb3NlRm9ybX0gXHJcbiAgICAgICAgICAgICAgICAgICAgcGFja2FnaW5nQ2hvaWNlcz17cGFja2FnaW5nQ2hvaWNlc30gXHJcbiAgICAgICAgICAgICAgICAgICAgcHJvZHVjdElkPXtwcm9kdWN0SWR9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L01vZGFsPlxyXG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cImhpZGRlblwiIG5hbWU9e25hbWV9IHZhbHVlPXtwYWNrYWdpbmdDaG9pY2VzU3RyaW5nfSAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59IiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBTaXRlQ29uZmlnIH0gZnJvbSAnLi4vLi4vLi4vQ29uZmlnL1NpdGVDb25maWcnO1xyXG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tICcuLi8uLi8uLi9VSS9CdXR0b24vQnV0dG9uJztcclxuaW1wb3J0IHsgdXNlT3BlblN0YXRlIH0gZnJvbSAnLi4vLi4vLi4vQ3VzdG9tSG9vay9zdGF0ZS91c2VPcGVuU3RhdGUnO1xyXG5pbXBvcnQgeyBPcHRpb24sIFNlbGVjdCB9IGZyb20gJy4uLy4uLy4uL1VJL0Zvcm0vU2VsZWN0JztcclxuaW1wb3J0IHsgRm9ybUJ1dHRvbiB9IGZyb20gJy4uLy4uLy4uL1VJL0Zvcm0vRm9ybUJ1dHRvbic7XHJcbmltcG9ydCB7IHVzZUZldGNoT3V0IH0gZnJvbSAnLi4vLi4vLi4vQ3VzdG9tSG9vay9mZXRjaC91c2VGZXRjaE91dCc7XHJcbmltcG9ydCB7IGFwaUZldGNoIH0gZnJvbSAnLi4vLi4vLi4vZnVuY3Rpb25zL2FwaSc7XHJcbmltcG9ydCB7IHQgfSBmcm9tICdpMThuZXh0JztcclxuXHJcbmV4cG9ydCBjb25zdCBQdXJjaGFzZVN0YXR1c1VwZGF0ZXIgPSAoe2lkLCBpbml0aWFsU3RhdHVzfSkgPT4ge1xyXG5cclxuICAgIGNvbnN0IHtzZW5kRGF0YSwgbG9hZGluZywgZXJyb3IsIGluZm8sIHJlc2V0SW5mbywgcmVzZXRFcnJvcn0gPSB1c2VGZXRjaE91dCgnL2FkbWluL2FwaS9wdXJjaGFzZS8nK2lkKycvdXBkYXRlU3RhdHVzJywgJ1BPU1QnKTtcclxuXHJcbiAgICBjb25zdCBbc3RhdHVzLCBzZXRTdGF0dXNdID0gdXNlU3RhdGUoaW5pdGlhbFN0YXR1cyk7XHJcblxyXG4gICAgY29uc3QgW2lzVXBkYXRpbmcsIG9wZW5VcGRhdGUsIGNsb3NlVXBkYXRlXSA9IHVzZU9wZW5TdGF0ZShmYWxzZSk7XHJcblxyXG4gICAgY29uc3QgaGFuZGxlT3BlblVwZGF0ZSA9ICgpID0+IHtcclxuICAgICAgICByZXNldEVycm9yKCk7XHJcbiAgICAgICAgcmVzZXRJbmZvKClcclxuICAgICAgICBvcGVuVXBkYXRlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgaGFuZGxlU3VibWl0ID0gYXN5bmMgKGUpID0+IHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgaWYoIWNvbmZpcm0oJ0V0ZXMgdm91cyBzw7tyID8gVW4gZW1haWwgdmEgw6p0cmUgZW52b3nDqSBhdSBjbGllbnQnKSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IGZvcm0gPSBlLmN1cnJlbnRUYXJnZXQ7XHJcbiAgICAgICAgY29uc3QgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoZm9ybSk7XHJcbiAgICAgICAgY29uc3QgbmV3U3RhdHVzID0gZm9ybURhdGEuZ2V0KCdzdGF0dXMnKS50b1N0cmluZygpO1xyXG5cclxuICAgICAgICBpZihuZXdTdGF0dXMgPT09IFNpdGVDb25maWcuU1RBVFVTX1NFTlQpIHtcclxuICAgICAgICAgICAgY29uc3QgdHJhY2tpbmcgPSB3aW5kb3cucHJvbXB0KCdFbnRyZXogbGUgbnVtw6lybyBkZSBzdWl2aScpO1xyXG4gICAgICAgICAgICBhd2FpdCBhcGlGZXRjaCgnL2FkbWluL2FwaS9wdXJjaGFzZS8nK2lkKycvc2V0VHJhY2tpbmcnLCB7XHJcbiAgICAgICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHRyYWNraW5nKVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGF3YWl0IHNlbmREYXRhKG5ld1N0YXR1cywgKGZldGNoUmVzdWx0KSA9PiB7XHJcbiAgICAgICAgICAgIHNldFN0YXR1cyhuZXdTdGF0dXMpO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgY2xvc2VVcGRhdGUoKTtcclxuICAgICAgICBjbG9zZVZhbGlkYXRlQnV0dG9uKCk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgaGFuZGxlQ2FuY2VsID0gKCkgPT4ge1xyXG4gICAgICAgIGNsb3NlVXBkYXRlKCk7XHJcbiAgICAgICAgY2xvc2VWYWxpZGF0ZUJ1dHRvbigpO1xyXG4gICAgfVxyXG4gXHJcbiAgICBjb25zdCBbdmFsaWRhdGVCdXR0b25PcGVuLCBvcGVuVmFsaWRhdGVCdXR0b24sIGNsb3NlVmFsaWRhdGVCdXR0b25dID0gdXNlT3BlblN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IGhhbmRsZUNoYW5nZSA9IGUgPT4ge1xyXG4gICAgICAgIGlmKGUuY3VycmVudFRhcmdldC52YWx1ZSAhPT0gc3RhdHVzKSB7XHJcbiAgICAgICAgICAgIG9wZW5WYWxpZGF0ZUJ1dHRvbigpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNsb3NlVmFsaWRhdGVCdXR0b24oKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaWYoaXNVcGRhdGluZykge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgbG9hZGluZ1xyXG4gICAgICAgICAgICAgICAgICAgID9cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFkbWluLWZvcm0taW5mb1wiPkNoYXJnZW1lbnQuLi48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA6XHJcbiAgICAgICAgICAgICAgICAgICAgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0fSBjbGFzc05hbWU9XCJhZG1pbi1mb3JtLWZpZWxkLXdpdGgtYnV0dG9uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFkbWluLWZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U2VsZWN0IGNsYXNzTmFtZT1cImFkbWluLWZvcm0tY29udHJvbFwiIG5hbWU9XCJzdGF0dXNcIiBkZWZhdWx0VmFsdWU9e3N0YXR1c30gb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtTaXRlQ29uZmlnLlNUQVRVU19QRU5ESU5HLCBTaXRlQ29uZmlnLlNUQVRVU19QQUlELCBTaXRlQ29uZmlnLlNUQVRVU19TRU5ULCBTaXRlQ29uZmlnLlNUQVRVU19ERUxJVkVSRUQsIFNpdGVDb25maWcuU1RBVFVTX0NBTkNFTEVEXS5tYXAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKGNob2ljZV92YWx1ZSwgaW5kZXgpID0+IDxPcHRpb24ga2V5PXtpbmRleH0gdmFsdWU9e2Nob2ljZV92YWx1ZX0+e3QoY2hvaWNlX3ZhbHVlLCB7bnM6ICdjb25maWdzJ30pfTwvT3B0aW9uPiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvU2VsZWN0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFkbWluLWZvcm0tZmllbGQtd2l0aC1idXR0b24tY29udHJvbHNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbGlkYXRlQnV0dG9uT3BlbiAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybUJ1dHRvbiBhZGRpdGlvbmFsQ2xhc3M9eydhZG1pbi1idXR0b24gYWRtaW4tc21hbGwtYnV0dG9uJyArIChsb2FkaW5nID8gJyBkaXNhYmxlZCc6ICcnKX0gZGlzYWJsZWQ9e2xvYWRpbmcgPT09IHRydWV9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFZhbGlkZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybUJ1dHRvbj4gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gYWRkaXRpb25hbENsYXNzPVwiYWRtaW4tYnV0dG9uIHNlY29uZGFyeS1jb2xvciBhZG1pbi1zbWFsbC1idXR0b25cIiBvbkNsaWNrPXtoYW5kbGVDYW5jZWx9PkFubnVsZXI8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIClcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWRtaW4tZm9ybS1maWVsZC13aXRoLWJ1dHRvblwiPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic3RhdHVzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAge3Qoc3RhdHVzLCB7bnM6ICdjb25maWdzJ30pfVxyXG4gICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPEJ1dHRvbiBhZGRpdGlvbmFsQ2xhc3M9XCJhZG1pbi1idXR0b24gYWRtaW4tc21hbGwtYnV0dG9uXCIgb25DbGljaz17aGFuZGxlT3BlblVwZGF0ZX0+TW9kaWZpZXI8L0J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGVycm9yICYmIChcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFkbWluLWZvcm0tZXJyb3JcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yLm1hcCgoZSwgaW5kZXgpID0+IDxsaSBrZXk9e2luZGV4fT57ZX08L2xpPilcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBpbmZvICYmIChcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFkbWluLWZvcm0taW5mb1wiPntpbmZvfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgPC8+XHJcbiAgICApXHJcbn0iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IFNpdGVDb25maWcgfSBmcm9tICcuLi8uLi8uLi9Db25maWcvU2l0ZUNvbmZpZyc7XHJcbmltcG9ydCB7IGFwaVByZXBhcmVkRmV0Y2ggfSBmcm9tICcuLi8uLi8uLi9mdW5jdGlvbnMvYXBpJztcclxuXHJcbmV4cG9ydCBjb25zdCBSZXZpZXdNb2RlcmF0b3IgPSAoe2lkLCBpbml0aWFsU3RhdHVzfSkgPT4ge1xyXG5cclxuICAgIGNvbnN0IFtzdGF0dXMsIHNldFN0YXR1c10gPSB1c2VTdGF0ZShpbml0aWFsU3RhdHVzKTtcclxuXHJcbiAgICBjb25zdCBbaXNMb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IFtpbmZvLCBzZXRJbmZvXSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gICAgXHJcbiAgICBjb25zdCBoYW5kbGVDaGFuZ2UgPSBhc3luYyBlID0+IHtcclxuICAgICAgICBpZihpc0xvYWRpbmcpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCB2YWx1ZSA9IGUudGFyZ2V0LnZhbHVlO1xyXG4gICAgICAgIHNldExvYWRpbmcodHJ1ZSk7XHJcbiAgICAgICAgc2V0SW5mbyhudWxsKTtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBjb25zdCBpbmZvID0gYXdhaXQgYXBpUHJlcGFyZWRGZXRjaCgnL2FkbWluL2FwaS9yZXZpZXcvJytpZCsnL3VwZGF0ZU1vZGVyYXRpb25TdGF0dXMnLCB7c3RhdHVzOiB2YWx1ZX0sICdHRVQnKTtcclxuICAgICAgICAgICAgc2V0SW5mbyhpbmZvKTtcclxuICAgICAgICAgICAgc2V0U3RhdHVzKHZhbHVlKTtcclxuICAgICAgICB9IGNhdGNoKGUpIHtcclxuICAgICAgICAgICAgc2V0SW5mbygndW5lIGVycmV1ciBlc3Qgc3VydmVudWUnKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFkbWluLWZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgPHNlbGVjdCBjbGFzc05hbWU9XCJhZG1pbi1mb3JtLWNvbnRyb2xcIiBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfSB2YWx1ZT17c3RhdHVzfT5cclxuICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9e1NpdGVDb25maWcuTU9ERVJBVElPTl9TVEFUVVNfUEVORElOR30+e1NpdGVDb25maWcuTU9ERVJBVElPTl9TVEFUVVNfUEVORElOR19MQUJFTH08L29wdGlvbj5cclxuICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9e1NpdGVDb25maWcuTU9ERVJBVElPTl9TVEFUVVNfQUNDRVBURUR9PntTaXRlQ29uZmlnLk1PREVSQVRJT05fU1RBVFVTX0FDQ0VQVEVEX0xBQkVMfTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT17U2l0ZUNvbmZpZy5NT0RFUkFUSU9OX1NUQVRVU19SRUZVU0VEfT57U2l0ZUNvbmZpZy5NT0RFUkFUSU9OX1NUQVRVU19SRUZVU0VEX0xBQkVMfTwvb3B0aW9uPlxyXG4gICAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaXNMb2FkaW5nICYmIDxkaXYgY2xhc3NOYW1lPVwiYWRtaW4tZm9ybS1pbmZvXCI+Q2hhcmdlbWVudC4uLjwvZGl2PlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGluZm8gJiYgPGRpdiBjbGFzc05hbWU9XCJhZG1pbi1mb3JtLWluZm9cIj57aW5mb308L2Rpdj5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIFxyXG4gICAgKVxyXG59IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuXHJcbmV4cG9ydCBjb25zdCBBZG1pbkl0ZW1TdWdnZXN0ID0gKHtpdGVtLCBxLCBvblNlbGVjdCwgc2VsZWN0ZWR9KSA9PiB7XHJcblxyXG4gICAgY29uc3QgdGl0bGUgPSBpdGVtLnRpdGxlLnRvVXBwZXJDYXNlKCkuc3BsaXQocS50b1VwcGVyQ2FzZSgpKS5qb2luKCc8c3Ryb25nPicrcS50b1VwcGVyQ2FzZSgpKyc8L3N0cm9uZz4nKTtcclxuXHJcbiAgICBjb25zdCBoYW5kbGVDbGljayA9IGUgPT4ge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBvblNlbGVjdChpdGVtKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxhIGNsYXNzTmFtZT17J2FkbWluLXN1Z2dlc3QtaXRlbScgKyAoc2VsZWN0ZWQgPyAnIHNlbGVjdGVkJzogJycpfSBocmVmPVwiI1wiIG9uQ2xpY2s9e2hhbmRsZUNsaWNrfSByb2xlPVwib3B0aW9uXCIgYXJpYS1zZWxlY3RlZD17c2VsZWN0ZWR9PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFkbWluLXN1Z2dlc3QtaW1nXCIgc3R5bGU9e3tiYWNrZ3JvdW5kSW1hZ2U6IGB1cmwoJHtpdGVtLnBpY3R1cmVQYXRofSlgfX0+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFkbWluLXN1Z2dlc3QtdGV4dFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBkYW5nZXJvdXNseVNldElubmVySFRNTD17e19faHRtbDogdGl0bGV9fT48L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXY+e2l0ZW0ucmVmfTwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2E+XHJcbiAgICApXHJcbn1cclxuXHJcblxyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBDbG9zZUJ1dHRvbiB9IGZyb20gJy4uLy4uLy4uL1VJL0J1dHRvbi9DbG9zZUJ1dHRvbic7XHJcblxyXG5leHBvcnQgY29uc3QgU2VsZWN0ZWRJdGVtc0xpc3QgPSAoe2l0ZW1zLCBvblJlbW92ZSwgbG9hZGluZ30pID0+IHtcclxuICAgIGlmKGxvYWRpbmcpIHtcclxuICAgICAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9XCJhZG1pbi1mb3JtLWluZm9cIj5DaGFyZ2VtZW50Li4uPC9kaXY+XHJcbiAgICB9XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDx1bCBjbGFzc05hbWU9XCJhZG1pbi1zdWdnZXN0ZWRQcm9kdWN0cy1saXN0XCI+XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGl0ZW1zLm1hcChpdGVtID0+IDxTZWxlY3RlZEl0ZW0ga2V5PXtpdGVtLmlkfSBpdGVtPXtpdGVtfSBvblJlbW92ZT17b25SZW1vdmV9IC8+KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgPC91bD5cclxuICAgIClcclxufSBcclxuXHJcbmV4cG9ydCBjb25zdCBTZWxlY3RlZEl0ZW0gPSAoe2l0ZW0sIG9uUmVtb3ZlfSkgPT4ge1xyXG4gICAgXHJcbiAgICBjb25zdCBoYW5kbGVDbGljayA9ICgpID0+IHtcclxuICAgICAgICBvblJlbW92ZShpdGVtKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxsaSBjbGFzc05hbWU9XCJhZG1pbi1zdWdnZXN0ZWRQcm9kdWN0cy1pdGVtXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWRtaW4tc3VnZ2VzdC1pbWdcIiBzdHlsZT17e2JhY2tncm91bmRJbWFnZTogYHVybCgke2l0ZW0ucGljdHVyZVBhdGh9KWB9fT48L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhZG1pbi1zdWdnZXN0LXRleHRcIj5cclxuICAgICAgICAgICAgICAgIDxkaXY+e2l0ZW0udGl0bGV9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2PntpdGVtLnJlZn08L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxDbG9zZUJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVDbGlja30gYWRkaXRpb25hbENsYXNzPVwiYWRtaW4tc3VnZ2VzdGVkUHJvZHVjdHMtY2xvc2VyXCIgLz5cclxuICAgICAgICA8L2xpPlxyXG4gICAgKVxyXG59IiwiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IFNlbGVjdGVkSXRlbXNMaXN0IH0gZnJvbSAnLi9TZWxlY3RlZEl0ZW1zTGlzdCc7XHJcbmltcG9ydCB7IGFwaUZldGNoIH0gZnJvbSAnLi4vLi4vLi4vZnVuY3Rpb25zL2FwaSc7XHJcbmltcG9ydCAnL2Fzc2V0cy9zdHlsZXMvQWRtaW4vU3VnZ2VzdGVkUHJvZHVjdHNJbnB1dC9pbmRleC5jc3MnO1xyXG5pbXBvcnQgeyBTdGFuZGFyZEl0ZW1TZWxlY3RvciB9IGZyb20gJy4uLy4uLy4uL1VJL0FkbWluL1N0YW5kYXJkSXRlbS9TdGFuZGFyZEl0ZW1TZWxlY3Rvcic7XHJcblxyXG5leHBvcnQgY29uc3QgU2VsZWN0TGlua2VkSXRlbXMgPSAoe2luZGV4RW5kcG9pbnQsIHNlYXJjaEVuZHBvaW50LCBuYW1lLCB0aXRsZSwgZm9ybUVycm9yfSkgPT4ge1xyXG5cclxuICAgIC8vZ2VzdGlvbiBkZSBsJ2FmZmljaGFnZSBkZXMgc3VnZ2VzdGVkUHJvZHVjdHNcclxuICAgIGNvbnN0IFtzZWxlY3RlZEl0ZW1zLCBzZXRTZWxlY3RlZEl0ZW1zXSA9IHVzZVN0YXRlKFtdKTtcclxuICAgIGNvbnN0IFtsaXN0TG9hZGluZywgc2V0TGlzdExvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBpZihpbmRleEVuZHBvaW50KSB7XHJcbiAgICAgICAgICAgIChhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBzZXRMaXN0TG9hZGluZyh0cnVlKTtcclxuICAgICAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IGFwaUZldGNoKGluZGV4RW5kcG9pbnQpO1xyXG4gICAgICAgICAgICAgICAgICAgIHNldFNlbGVjdGVkSXRlbXMoZGF0YSk7XHJcbiAgICAgICAgICAgICAgICB9IGNhdGNoKGUpIHtcclxuICAgICAgICAgICAgICAgICAgICAvL1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgc2V0TGlzdExvYWRpbmcoZmFsc2UpO1xyXG4gICAgICAgICAgICB9KSgpO1xyXG4gICAgICAgIH1cclxuICAgIH0sIFtdKTtcclxuICAgIGNvbnN0IGhhbmRsZVJlbW92ZSA9IChpdGVtKSA9PiB7XHJcbiAgICAgICAgc2V0U2VsZWN0ZWRJdGVtcyhzZWxlY3RlZEl0ZW1zID0+IHNlbGVjdGVkSXRlbXMuZmlsdGVyKGkgPT4gaS5pZCAhPT0gaXRlbS5pZCkpO1xyXG4gICAgfTtcclxuXHJcbiAgICAvL3NlYXJjaFxyXG4gICAgY29uc3QgaGFuZGxlU2VsZWN0ID0gKGl0ZW0pID0+IHtcclxuICAgICAgICBzZXRTZWxlY3RlZEl0ZW1zKHNlbGVjdGVkSXRlbXMgPT4ge1xyXG4gICAgICAgICAgICAvL29uIHbDqXJpZmllIHNpIGxlIHByb2R1aXQgYSBkw6lqw6Agw6l0w6kgc8OpbGVjdGlvbm7DqVxyXG4gICAgICAgICAgICBsZXQgaW5jbHVkZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgZm9yKGNvbnN0IGxpbmtlZEl0ZW0gb2Ygc2VsZWN0ZWRJdGVtcykge1xyXG4gICAgICAgICAgICAgICAgaWYobGlua2VkSXRlbS5pZCA9PT0gaXRlbS5pZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGluY2x1ZGVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZighaW5jbHVkZWQpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBbXHJcbiAgICAgICAgICAgICAgICAgICAgLi4uc2VsZWN0ZWRJdGVtcyxcclxuICAgICAgICAgICAgICAgICAgICBpdGVtXHJcbiAgICAgICAgICAgICAgICBdO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBzZWxlY3RlZEl0ZW1zO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9eydhZG1pbi1mb3JtLWdyb3VwIHN1Z2dlc3RlZFByb2R1Y3RzLWdyb3VwJyArIChmb3JtRXJyb3IgPyAnIGlzLWludmFsaWQnOiAnJyl9PlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsPnt0aXRsZX08L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPFNlbGVjdGVkSXRlbXNMaXN0IGl0ZW1zPXtzZWxlY3RlZEl0ZW1zfSBvblJlbW92ZT17aGFuZGxlUmVtb3ZlfSBsb2FkaW5nPXtsaXN0TG9hZGluZ30gLz5cclxuICAgICAgICAgICAgICAgIDxTdGFuZGFyZEl0ZW1TZWxlY3RvciBzZWFyY2hFbmRwb2ludD17c2VhcmNoRW5kcG9pbnR9IG9uU2VsZWN0PXtoYW5kbGVTZWxlY3R9IC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBmb3JtRXJyb3IgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWRtaW4tZm9ybS1lcnJvclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+e2Zvcm1FcnJvcn08L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAgICAgPHNlbGVjdCBoaWRkZW49e3RydWV9IG5hbWU9e25hbWV9IHZhbHVlPXtzZWxlY3RlZEl0ZW1zLm1hcChpdGVtID0+IGl0ZW0uaWQpfSBvbkNoYW5nZT17KCkgPT4ge319IG11bHRpcGxlPVwibXVsdGlwbGVcIj5cclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgc2VsZWN0ZWRJdGVtcy5tYXAoaXRlbSA9PiA8b3B0aW9uIGNsYXNzTmFtZT1cInN1Z2dlc3RlZFByb2R1Y3RzLWhpZGRlbi1vcHRpb25cIiBrZXk9e2l0ZW0uaWR9IHZhbHVlPXtpdGVtLmlkfSBkYXRhLXJlZj17aXRlbS5yZWZ9PntpdGVtLnJlZn08L29wdGlvbj4pICAvL0RFVkVOVSBEQVRBLVJFRiBhdmFudC0tLT4gZGF0YS1kZXNpZ25hdGlvbiA6IHBvdXIgbGVzIHRlc3RzIGVuZHRvZW5kIChjYXIgb24gcGV1dCBhY2PDqWRlciBzZXVsZW1lbnQgYXUgdGV4dCB2aXNpYmxlIGV0IGNvbW1lIGlsIGVzdCBoaWRkZW4pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgPC8+XHJcblxyXG4gICAgICAgIFxyXG4gICAgKVxyXG59XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgJy9hc3NldHMvc3R5bGVzL0FkbWluL1N1Z2dlc3RlZFByb2R1Y3RzSW5wdXQvaW5kZXguY3NzJztcclxuaW1wb3J0IHsgU3RhbmRhcmRJdGVtU2VsZWN0b3IgfSBmcm9tICcuLi8uLi8uLi9VSS9BZG1pbi9TdGFuZGFyZEl0ZW0vU3RhbmRhcmRJdGVtU2VsZWN0b3InO1xyXG5pbXBvcnQgeyBTZWxlY3RlZEl0ZW0gfSBmcm9tICcuLi9TZWxlY3RMaW5rZWRJdGVtcy9TZWxlY3RlZEl0ZW1zTGlzdCc7XHJcbmltcG9ydCB7IHVzZUZldGNoIH0gZnJvbSAnLi4vLi4vLi4vQ3VzdG9tSG9vay9mZXRjaC91c2VGZXRjaCc7XHJcblxyXG5leHBvcnQgY29uc3QgU2VsZWN0VW5pcXVlSXRlbSA9ICh7dHlwZSwgaXRlbUlkID0gbnVsbCwgbmFtZSwgdGl0bGUsIGZvcm1FcnJvcn0pID0+IHtcclxuXHJcbiAgICAvL2dlc3Rpb24gZGUgbCdhZmZpY2hhZ2VcclxuICAgIGNvbnN0IFtzZWxlY3RlZEl0ZW0sIHNldFNlbGVjdGVkSXRlbV0gPSB1c2VTdGF0ZShudWxsKTtcclxuICAgIGNvbnN0IFtkYkl0ZW0sIGlzTG9hZGluZywgZXJyb3IsIHJlc2V0XSA9IHVzZUZldGNoKCcvYWRtaW4vYXBpL3N0YW5kYXJkSXRlbS8nK3R5cGUrJy8nK2l0ZW1JZCsnL3Nob3cnKTtcclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgaWYoZGJJdGVtKSB7XHJcbiAgICAgICAgICAgIHNldFNlbGVjdGVkSXRlbShkYkl0ZW0pO1xyXG4gICAgICAgIH1cclxuICAgIH0sIFtkYkl0ZW1dKVxyXG5cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXsnYWRtaW4tZm9ybS1ncm91cCBzdWdnZXN0ZWRQcm9kdWN0cy1ncm91cCcgKyAoZm9ybUVycm9yID8gJyBpcy1pbnZhbGlkJzogJycpfT5cclxuICAgICAgICAgICAgICAgIDxsYWJlbD57dGl0bGV9PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBpc0xvYWRpbmcgJiYgPGRpdiBjbGFzc05hbWU9XCJhZG1pbi1mb3JtLWluZm9cIj5DaGFyZ2VtZW50Li4uPC9kaXY+XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWRJdGVtICYmIDxTZWxlY3RlZEl0ZW0gaXRlbT17c2VsZWN0ZWRJdGVtfSBvblJlbW92ZT17KCkgPT4gc2V0U2VsZWN0ZWRJdGVtKG51bGwpfSAvPlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICFzZWxlY3RlZEl0ZW0gJiYgIWlzTG9hZGluZyAmJiA8U3RhbmRhcmRJdGVtU2VsZWN0b3Igc2VhcmNoRW5kcG9pbnQ9eycvYWRtaW4vYXBpLycrdHlwZSsnL3NlYXJjaCd9IG9uU2VsZWN0PXsoaXRlbSkgPT4gc2V0U2VsZWN0ZWRJdGVtKGl0ZW0pfSAvPlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgZm9ybUVycm9yICYmIChcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFkbWluLWZvcm0tZXJyb3JcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPntmb3JtRXJyb3J9PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgc2VsZWN0ZWRJdGVtICYmIChcclxuICAgICAgICAgICAgICAgICAgICA8c2VsZWN0IGhpZGRlbj17dHJ1ZX0gbmFtZT17bmFtZX0gdmFsdWU9e3NlbGVjdGVkSXRlbS5pZH0gb25DaGFuZ2U9eygpID0+IHt9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiBjbGFzc05hbWU9XCJzdWdnZXN0ZWRQcm9kdWN0cy1oaWRkZW4tb3B0aW9uXCIgdmFsdWU9e3NlbGVjdGVkSXRlbS5pZH0gZGF0YS1yZWY9e3NlbGVjdGVkSXRlbS5yZWZ9PntzZWxlY3RlZEl0ZW0ucmVmfTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgPC8+XHJcblxyXG4gICAgICAgIFxyXG4gICAgKVxyXG59XHJcblxyXG4iLCJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgQXBpRXJyb3IsIGFkZFVybFBhcmFtcywgYXBpRmV0Y2ggfSBmcm9tICcuLi8uLi9mdW5jdGlvbnMvYXBpJztcclxuXHJcbi8qKlxyXG4gKiBTRU5EIERBVEEgLyBVUERBVEUgREFUQUJBU0UgLyBOT1QgVE8gUkVDRUlWRSBEQVRBXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBlbnRyeXBvaW50IFxyXG4gKiBAcGFyYW0ge3N0cmluZ30gbWV0aG9kIFxyXG4gKiBAcmV0dXJucyBcclxuICovXHJcbmV4cG9ydCBjb25zdCB1c2VGZXRjaE91dCA9IChlbnRyeXBvaW50LCBtZXRob2QgPSAnR0VUJykgPT4ge1xyXG5cclxuICAgIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IFtlcnJvciwgc2V0RXJyb3JdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgICBjb25zdCBbaW5mbywgc2V0SW5mb10gPSB1c2VTdGF0ZShudWxsKTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIFxyXG4gICAgICogQHBhcmFtIHttaXhlZH0gZGF0YVxyXG4gICAgICogQHBhcmFtIHtudWxsfENhbGxhYmxlRnVuY3Rpb259IHRvRG9XaGVuU3VjY2VzcyAgZmV0Y2ggcmV0dXJuIHZhbHVlLCBpcyBwYXNzZWQgdG8gdGhpcyBjYWxsYWJsZSBhcyBhcmd1bWVudFxyXG4gICAgICovXHJcbiAgICBjb25zdCBzZW5kRGF0YSA9IGFzeW5jIChkYXRhID0gbnVsbCwgdG9Eb1doZW5TdWNjZXNzID0gbnVsbCkgPT4ge1xyXG4gICAgICAgIGlmKGxvYWRpbmcpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBzZXRMb2FkaW5nKHRydWUpO1xyXG4gICAgICAgIHNldEVycm9yKG51bGwpO1xyXG4gICAgICAgIHNldEluZm8obnVsbCk7XHJcblxyXG4gICAgICAgIGxldCB1cmwgPSBlbnRyeXBvaW50O1xyXG4gICAgICAgIGxldCBvcHRpb25zID0ge307XHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYobWV0aG9kID09PSAnR0VUJyAmJiBkYXRhKSAge1xyXG4gICAgICAgICAgICB1cmwgPSBhZGRVcmxQYXJhbXMoZW50cnlwb2ludCwgZGF0YSk7IFxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmKG1ldGhvZCA9PT0gJ1BPU1QnKSB7XHJcbiAgICAgICAgICAgIG9wdGlvbnMgPSB7XHJcbiAgICAgICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgICAgICBcIkFjY2VwdFwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAgICAgICAgICAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIlxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGRhdGEpXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBhcGlGZXRjaCh1cmwsIG9wdGlvbnMpO1xyXG4gICAgICAgICAgICBzZXRJbmZvKHJlc3VsdCk7XHJcbiAgICAgICAgICAgIHRvRG9XaGVuU3VjY2VzcyhyZXN1bHQpO1xyXG4gICAgICAgIH0gY2F0Y2goZSkge1xyXG4gICAgICAgICAgICBpZihlIGluc3RhbmNlb2YgQXBpRXJyb3IpIHtcclxuICAgICAgICAgICAgICAgIHNldEVycm9yKGUuZXJyb3JzKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XHJcbiAgICB9O1xyXG5cclxuXHJcbiAgICBjb25zdCByZXNldEVycm9yID0gKCkgPT4ge1xyXG4gICAgICAgIHNldEVycm9yKG51bGwpO1xyXG4gICAgfVxyXG4gICAgY29uc3QgcmVzZXRJbmZvID0gKCkgPT4ge1xyXG4gICAgICAgIHNldEluZm8obnVsbCk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHJldHVybiB7c2VuZERhdGEsIGxvYWRpbmcsIGVycm9yLCBpbmZvLCByZXNldEVycm9yLCByZXNldEluZm99O1xyXG59XHJcblxyXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHVzZUZldGNoUVNlYXJjaCB9IGZyb20gJy4uLy4uLy4uL0N1c3RvbUhvb2svZmV0Y2gvdXNlRmV0Y2hRU2VhcmNoJztcclxuaW1wb3J0IHsgQWRtaW5JdGVtU3VnZ2VzdCB9IGZyb20gJy4uLy4uLy4uL0NvbXBvbmVudHMvQWRtaW4vU2VsZWN0TGlua2VkSXRlbXMvQWRtaW5JdGVtU3VnZ2VzdCc7XHJcbmltcG9ydCB7IFN1Z2dlc3RMaXN0IH0gZnJvbSAnLi4vLi4vU3VnZ2VzdExpc3QnO1xyXG5pbXBvcnQgeyBDbG9zZUJ1dHRvbiB9IGZyb20gJy4uLy4uL0J1dHRvbi9DbG9zZUJ1dHRvbic7XHJcblxyXG5leHBvcnQgY29uc3QgU3RhbmRhcmRJdGVtU2VsZWN0b3IgPSAoe3NlYXJjaEVuZHBvaW50LCBvblNlbGVjdH0pID0+IHtcclxuXHJcbiAgICBjb25zdCBbcSwgc2V0UV0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgICBjb25zdCBoYW5kbGVDaGFuZ2UgPSBlID0+IHtcclxuICAgICAgICBzZXRRKGUudGFyZ2V0LnZhbHVlKTtcclxuICAgIH1cclxuICAgIGNvbnN0IFtyZXN1bHQsIHJlc2V0SXRlbXMsIGlzTG9hZGluZywgZXJyb3JdID0gdXNlRmV0Y2hRU2VhcmNoKHNlYXJjaEVuZHBvaW50LCBxLCA1KTtcclxuXHJcbiAgICBjb25zdCBoYW5kbGVTZWxlY3QgPSBpdGVtID0+IHtcclxuICAgICAgICByZXNldEl0ZW1zKCk7XHJcbiAgICAgICAgb25TZWxlY3QoaXRlbSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFkbWluLXN1Z2dlc3Qtd3JhcHBlclwiPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3NOYW1lPVwiYWRtaW4tZm9ybS1jb250cm9sXCIgcGxhY2Vob2xkZXI9XCJSZWNoZXJjaGVyXCIgbmFtZT1cInFcIiB2YWx1ZT17cX0gb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX0gLz5cclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBxICE9PSAnJyAmJiA8Q2xvc2VCdXR0b24gYWRkaXRpb25hbENsYXNzPVwiYWRtaW4tc3VnZ2VzdGVkUHJvZHVjdHMtaW5wdXQtY2xvc2VyXCIgb25DbGljaz17KCkgPT4gc2V0USgnJyl9IC8+XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0Py5pdGVtcy5sZW5ndGggPiAwICYmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPFN1Z2dlc3RMaXN0IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWRkaXRpb25hbENsYXNzPVwiYWRtaW4tc3VnZ2VzdC1saXN0XCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdWdnZXN0cz17cmVzdWx0Lml0ZW1zfSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xvc2U9e3Jlc2V0SXRlbXN9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25TZWxlY3Q9e2hhbmRsZVNlbGVjdH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlbmRlcj17KGl0ZW0sIHNlbGVjdGVkKSA9PiA8QWRtaW5JdGVtU3VnZ2VzdCBrZXk9e2l0ZW0uaWR9IGl0ZW09e2l0ZW19IHE9e3F9IHNlbGVjdGVkPXtzZWxlY3RlZH0gb25TZWxlY3Q9e2hhbmRsZVNlbGVjdH0gLz59IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPiAgIFxyXG4gICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGlzTG9hZGluZyAmJiA8ZGl2IGNsYXNzTmFtZT1cImFkbWluLWZvcm0taW5mb1wiPkNoYXJnZW1lbnQuLi48L2Rpdj5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIDwvPlxyXG4gICAgKVxyXG59IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgTG9hZGVyIH0gZnJvbSAnLi4vSWNvbi9Mb2FkZXInO1xyXG5cclxuZXhwb3J0IGNvbnN0IEJ1dHRvbiA9ICh7Y2hpbGRyZW4sIG9uQ2xpY2ssIGFkZGl0aW9uYWxDbGFzcywgbG9hZGluZywgdHlwZSwgLi4ucHJvcHN9KSA9PiB7XHJcbiAgICBjb25zdCBoYW5kbGVDbGljayA9IGUgPT4ge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgIG9uQ2xpY2soKTtcclxuICAgIH1cclxuICAgIGNvbnN0IGhhbmRsZUtleURvd24gPSBlID0+IHtcclxuICAgICAgICBpZihlLmtleSA9PT0gJ0VudGVyJykge1xyXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgICAgIG9uQ2xpY2soKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXsnYnV0dG9uJyArIChhZGRpdGlvbmFsQ2xhc3MgPyAnICcgKyBhZGRpdGlvbmFsQ2xhc3M6ICcnKX0gb25DbGljaz17aGFuZGxlQ2xpY2t9IG9uS2V5RG93bj17aGFuZGxlS2V5RG93bn0gdHlwZT17dHlwZSA/PyAnYnV0dG9uJ30gey4uLnByb3BzfT5cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGxvYWRpbmcgPyA8TG9hZGVyIC8+OiBjaGlsZHJlblxyXG4gICAgICAgIH1cclxuICAgICAgICA8L2J1dHRvbj5cclxuICAgIClcclxufVxyXG5cclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgQ2xvc2VJY29uIH0gZnJvbSAnLi4vSWNvbi9DbG9zZUljb24nO1xyXG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tICcuL0J1dHRvbic7XHJcbmltcG9ydCB7IHQgfSBmcm9tICdpMThuZXh0JztcclxuXHJcbmV4cG9ydCBjb25zdCBDbG9zZUJ1dHRvbiA9ICh7YWRkaXRpb25hbENsYXNzLCAuLi5wcm9wc30pID0+IHtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxCdXR0b24gXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17J2ljb24tYnV0dG9uIGNsb3NlLWJ1dHRvbicgKyAoYWRkaXRpb25hbENsYXNzID8gJyAnICsgYWRkaXRpb25hbENsYXNzOiAnJyl9IFxyXG4gICAgICAgICAgICBhcmlhLWxhYmVsPXt0KCdjbG9zZScsIHtuczogJ21lc3NhZ2VzJ30pfSBcclxuICAgICAgICAgICAgdGl0bGU9e3QoJ2Nsb3NlJywge25zOiAnbWVzc2FnZXMnfSl9XHJcbiAgICAgICAgICAgIHsuLi5wcm9wc31cclxuICAgICAgICAgICAgPiBcclxuICAgICAgICAgICAgPENsb3NlSWNvbiAvPlxyXG4gICAgICAgIDwvQnV0dG9uPlxyXG4gICAgKVxyXG59IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgRWRpdEljb24gfSBmcm9tICcuLi9JY29uL0VkaXRJY29uJztcclxuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSAnLi9CdXR0b24nO1xyXG5pbXBvcnQgeyB0IH0gZnJvbSAnaTE4bmV4dCc7XHJcblxyXG5leHBvcnQgY29uc3QgRWRpdEJ1dHRvbiA9ICh7YWRkaXRpb25hbENsYXNzLCAuLi5wcm9wc30pID0+IHtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxCdXR0b24gXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17J2ljb24tYnV0dG9uIGVkaXQtYnV0dG9uJyArIChhZGRpdGlvbmFsQ2xhc3MgPyAnICcgKyBhZGRpdGlvbmFsQ2xhc3M6ICcnKX0gXHJcbiAgICAgICAgICAgIGFyaWEtbGFiZWw9e3QoJ2VkaXQnLCB7bnM6ICdtZXNzYWdlcyd9KX1cclxuICAgICAgICAgICAgdGl0bGU9e3QoJ2VkaXQnLCB7bnM6ICdtZXNzYWdlcyd9KX1cclxuICAgICAgICAgICAgey4uLnByb3BzfVxyXG4gICAgICAgID4gXHJcbiAgICAgICAgICAgIDxFZGl0SWNvbiAvPlxyXG4gICAgICAgIDwvQnV0dG9uPlxyXG4gICAgKVxyXG59XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gJy4vQnV0dG9uJztcclxuaW1wb3J0IHsgUGx1c0ljb24gfSBmcm9tICcuLi9JY29uL1F1YW50aXR5L1BsdXNJY29uJztcclxuaW1wb3J0IHsgdCB9IGZyb20gJ2kxOG5leHQnO1xyXG5cclxuZXhwb3J0IGNvbnN0IFBsdXNCdXR0b24gPSAoe2FkZGl0aW9uYWxDbGFzcywgLi4ucHJvcHN9KSA9PiB7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8QnV0dG9uIFxyXG4gICAgICAgICAgICBjbGFzc05hbWU9eydpY29uLWJ1dHRvbiBwbHVzLWJ1dHRvbicgKyAoYWRkaXRpb25hbENsYXNzID8gJyAnICsgYWRkaXRpb25hbENsYXNzOiAnJyl9IFxyXG4gICAgICAgICAgICBhcmlhLWxhYmVsPXt0KCdhZGQnLCB7bnM6ICdtZXNzYWdlcyd9KX1cclxuICAgICAgICAgICAgdGl0bGU9e3QoJ2FkZCcsIHtuczogJ21lc3NhZ2VzJ30pfVxyXG4gICAgICAgICAgICB7Li4ucHJvcHN9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgICA8UGx1c0ljb24gLz5cclxuICAgICAgICA8L0J1dHRvbj5cclxuICAgIClcclxufVxyXG4iLCJpbXBvcnQgUmVhY3QsIHsgZm9yd2FyZFJlZiwgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IENsb3NlQnV0dG9uIH0gZnJvbSAnLi4vQnV0dG9uL0Nsb3NlQnV0dG9uJztcclxuaW1wb3J0IHsgY3JlYXRlUG9ydGFsIH0gZnJvbSAncmVhY3QtZG9tJztcclxuXHJcbmV4cG9ydCBjb25zdCBNb2RhbCA9IGZvcndhcmRSZWYoKHtjaGlsZHJlbiwgYWRkaXRpb25hbENsYXNzLCBpc09wZW4sIGNsb3NlID0gbnVsbCwgYW5pbWF0ZWQgPSB0cnVlfSwgbW9kYWxSZWYpID0+IHtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGlmKGlzT3Blbikge1xyXG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdodG1sLCBib2R5JykuZm9yRWFjaChlbHQgPT4gZWx0LmNsYXNzTGlzdC5hZGQoJ25vLW92ZXJmbG93JykpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2h0bWwsIGJvZHknKS5mb3JFYWNoKGVsdCA9PiBlbHQuY2xhc3NMaXN0LnJlbW92ZSgnbm8tb3ZlcmZsb3cnKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSwgW2lzT3Blbl0pO1xyXG5cclxuICAgIGNvbnN0IGNvbnRhaW5lclJlZiA9IHVzZVJlZigpO1xyXG5cclxuICAgIGNvbnN0IGhhbmRsZUNsb3NlID0gKCkgPT4ge1xyXG4gICAgICAgIGlmKCFjbG9zZSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKCFhbmltYXRlZCkge1xyXG4gICAgICAgICAgICBjbG9zZSgpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnRhaW5lclJlZi5jdXJyZW50LmNsYXNzTGlzdC5hZGQoJ2Nsb3NlJyk7XHJcbiAgICAgICAgY29udGFpbmVyUmVmLmN1cnJlbnQuYWRkRXZlbnRMaXN0ZW5lcignYW5pbWF0aW9uZW5kJywgKCkgPT4ge1xyXG4gICAgICAgICAgICBjbG9zZSgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBoYW5kbGVTdG9wUHJvcGFnYXRpb24gPSBlID0+IHtcclxuICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgfTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICBpc09wZW4gJiYgY3JlYXRlUG9ydGFsKFxyXG4gICAgICAgICAgICAgICAgPGRpdiByZWY9e2NvbnRhaW5lclJlZn0gY2xhc3NOYW1lPXsnbW9kYWwtY29udGFpbmVyJyArIChhZGRpdGlvbmFsQ2xhc3MgPyAnICcrYWRkaXRpb25hbENsYXNzKyctY29udGFpbmVyJzogJycpfSBvbkNsaWNrPXtoYW5kbGVDbG9zZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiByZWY9e21vZGFsUmVmfSBjbGFzc05hbWU9eydtb2RhbCcgKyAoYWRkaXRpb25hbENsYXNzID8gJyAnK2FkZGl0aW9uYWxDbGFzczogJycpfSBvbkNsaWNrPXtoYW5kbGVTdG9wUHJvcGFnYXRpb259PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbG9zZSAhPT0gbnVsbCAmJiA8Q2xvc2VCdXR0b24gYWRkaXRpb25hbENsYXNzPVwibW9kYWwtY2xvc2VyXCIgb25DbGljaz17aGFuZGxlQ2xvc2V9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAge2NoaWxkcmVufVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+LFxyXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuYm9keVxyXG4gICAgICAgICAgICApXHJcbiAgICApXHJcbn0pO1xyXG5cclxuXHJcblxyXG4iLCJpbXBvcnQgUmVhY3QsIHt1c2VDYWxsYmFjaywgdXNlRWZmZWN0LCB1c2VTdGF0ZX0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IFBsdXNJY29uIH0gZnJvbSAnLi4vSWNvbi9RdWFudGl0eS9QbHVzSWNvbic7XHJcbmltcG9ydCB7IFRyYXNoQnV0dG9uIH0gZnJvbSAnLi4vQnV0dG9uL1RyYXNoQnV0dG9uJztcclxuaW1wb3J0IHJlc2l6ZUltYWdlIGZyb20gJ3NtYXJ0LWltZy1yZXNpemUnO1xyXG5pbXBvcnQgeyBMb2FkZXIgfSBmcm9tICcuLi9JY29uL0xvYWRlcic7XHJcbmltcG9ydCB7IHVzZURyb3B6b25lIH0gZnJvbSAncmVhY3QtZHJvcHpvbmUnO1xyXG5pbXBvcnQgeyB1c2VPcGVuU3RhdGUgfSBmcm9tICcuLi8uLi9DdXN0b21Ib29rL3N0YXRlL3VzZU9wZW5TdGF0ZSc7XHJcbmltcG9ydCB7IEVkaXRJY29uIH0gZnJvbSAnLi4vSWNvbi9FZGl0SWNvbic7XHJcbmltcG9ydCB7IHVzZVRyYW5zbGF0aW9uIH0gZnJvbSAncmVhY3QtaTE4bmV4dCc7XHJcblxyXG5cclxuLyoqXHJcbiAqIFxyXG4gKiBAcGFyYW0ge2FycmF5fSBlcnJvcnMgXHJcbiAqIEByZXR1cm5zIFxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IFBpY3R1cmVVcGxvYWRGaWVsZCA9ICh7Y2hpbGRyZW4sIG5hbWUsIGVycm9ycywgc2V0RXJyb3JzLCByZXNpemVXaWR0aCA9IDUwMCwgcmVzaXplSGVpZ2h0ID0gNTAwLCBkZWZhdWx0QmFzZTY0aW1nID0gJycsIG9uQ2hhbmdlID0gbnVsbH0pID0+IHtcclxuICBjb25zdCB7dH0gPSB1c2VUcmFuc2xhdGlvbignbWVzc2FnZXMnKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgc2V0U2VsZWN0ZWRJbWcoZGVmYXVsdEJhc2U2NGltZyk7XHJcbiAgICAgIHNldEhpZGRlbkltZyhkZWZhdWx0QmFzZTY0aW1nKTtcclxuICB9LCBbZGVmYXVsdEJhc2U2NGltZ10pO1xyXG5cclxuICBjb25zdCBbc2VsZWN0ZWRJbWcsIHNldFNlbGVjdGVkSW1nXSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gIGNvbnN0IFtoaWRkZW5JbWcsIHNldEhpZGRlbkltZ10gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgY29uc3QgW2lzTG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZURlbGV0ZSA9ICgpID0+IHtcclxuICAgIHNldFNlbGVjdGVkSW1nKG51bGwpO1xyXG4gICAgc2V0SGlkZGVuSW1nKCcnKTtcclxuICAgIGlmKG9uQ2hhbmdlKSB7XHJcbiAgICAgIG9uQ2hhbmdlKCcnKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCBvbkRyb3AgPSB1c2VDYWxsYmFjayhhY2NlcHRlZEZpbGVzID0+IHtcclxuICAgIGNvbnN0IGltZyA9IGFjY2VwdGVkRmlsZXNbMF07XHJcbiAgICBcclxuICAgIC8vdmFsaWRhdGlvblxyXG4gICAgc2V0RXJyb3JzKFtdKTtcclxuICAgIGlmKCFpbWcpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgaWYoIVsnaW1hZ2UvanBnJywgJ2ltYWdlL2pwZWcnLCAnaW1hZ2UvcG5nJ10uaW5jbHVkZXMoaW1nLnR5cGUpKSB7XHJcbiAgICAgIHNldEVycm9ycyhbdCgnYXNzZXJ0LmZpbGUuZm9ybWF0Jywge25zOiAnY29uc3RyYWludHMnLCBhY2NlcHRlZF9mb3JtYXRzOiAnanBnLCBqcGVnLCBwbmcnfSldKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgLy9yZXNpemVcclxuICAgIHNldExvYWRpbmcodHJ1ZSk7XHJcbiAgICByZXNpemVJbWFnZShpbWcsIHtcclxuICAgICAgICBvdXRwdXRGb3JtYXQ6ICdqcGVnJyxcclxuICAgICAgICB0YXJnZXRXaWR0aDogcmVzaXplV2lkdGgsXHJcbiAgICAgICAgdGFyZ2V0SGVpZ2h0OiByZXNpemVIZWlnaHQsXHJcbiAgICAgICAgY3JvcDogdHJ1ZVxyXG4gICAgfSwgKGVycm9yLCBiNjRpbWcpID0+IHtcclxuICAgICAgICBpZiAoZXJyb3IpIHtcclxuICAgICAgICAgICAgc2V0RXJyb3JzKGVycm9ycyA9PiBbLi4uZXJyb3JzLCB0KCdlcnJvci50ZW1wb3JhcnlfZmFpbHVyZScpXSk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gb24gYWZmaWNoZSBsJ2ltYWdlIHJlZGltZW5zaW9ubsOpZVxyXG4gICAgICAgIHNldFNlbGVjdGVkSW1nKGI2NGltZyk7XHJcbiAgICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8yIGZhw6dvbnMgZCd1dGlsaXNlciBsJ2ltYWdlXHJcbiAgICAgICAgLy9Qb3VyIHN1Ym1pdCBjbGFzc2lxdWUgOiBvbiBtZXQgbCdpbWFnZSByZWRpbWVuc2lvbm7DqWUgZGFucyB1biBpbnB1dCBoaWRkZW5cclxuICAgICAgICBzZXRIaWRkZW5JbWcoYjY0aW1nKTtcclxuICAgICAgICAvL1BvdXIgc3VibWl0IGphdmFzY3JpcHRcclxuICAgICAgICBpZihvbkNoYW5nZSkge1xyXG4gICAgICAgICAgb25DaGFuZ2UoYjY0aW1nKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuICB9LCBbXSlcclxuICBjb25zdCB7Z2V0Um9vdFByb3BzLCBnZXRJbnB1dFByb3BzfSA9IHVzZURyb3B6b25lKHtvbkRyb3AsIG11bHRpcGxlOiBmYWxzZX0pO1xyXG5cclxuXHJcbiAgY29uc3QgW21vdXNlSXNPdmVyLCBzZXRNb3VzZU92ZXIsIHNldE1vdXNlTGVhdmVdID0gdXNlT3BlblN0YXRlKGZhbHNlKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiZm9ybS11cGxvYWQtbGFiZWxcIj57Y2hpbGRyZW59PC9sYWJlbD5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLXVwbG9hZC13cmFwcGVyXCIgey4uLmdldFJvb3RQcm9wcygpfSBvbk1vdXNlT3Zlcj17c2V0TW91c2VPdmVyfSBvbk1vdXNlTGVhdmU9e3NldE1vdXNlTGVhdmV9PlxyXG4gICAgICAgIDxpbnB1dCBkaXNhYmxlZD17aXNMb2FkaW5nfSB7Li4uZ2V0SW5wdXRQcm9wcygpfSAvPlxyXG4gICAgICAgIHtcclxuICAgICAgICAgIHNlbGVjdGVkSW1nICYmIDxpbWcgY2xhc3NOYW1lPXsnZm9ybS11cGxvYWQtaW1nJyArIChpc0xvYWRpbmcgfHwgbW91c2VJc092ZXIgPyAnIGxpZ2h0JzogJycpfSBzcmM9e3NlbGVjdGVkSW1nfSBhbHQ9e3QoJ3NlbGVjdGVkX2ltYWdlJyl9IC8+XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHtcclxuICAgICAgICAgIGlzTG9hZGluZyAmJiA8TG9hZGVyIC8+XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICFpc0xvYWRpbmcgJiYgIXNlbGVjdGVkSW1nICYmIDxQbHVzSWNvbiAvPlxyXG4gICAgICAgIH1cclxuICAgICAgICB7XHJcbiAgICAgICAgICBtb3VzZUlzT3ZlciAmJiBzZWxlY3RlZEltZyAmJiAhaXNMb2FkaW5nICYmIDxFZGl0SWNvbiAvPlxyXG4gICAgICAgIH1cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIHtcclxuICAgICAgICBlcnJvcnMubGVuZ3RoID4gMCAmJiAoXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFkbWluLWZvcm0tZXJyb3JcIj5cclxuICAgICAgICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBlcnJvcnMubWFwKChlcnJvciwgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgIDxsaSBrZXk9e2luZGV4fT57ZXJyb3J9PC9saT5cclxuICAgICAgICAgICAgICAgICAgICApKVxyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIClcclxuICAgICAgfVxyXG4gICAgICB7XHJcbiAgICAgICAgc2VsZWN0ZWRJbWcgJiYgPFRyYXNoQnV0dG9uIGFkZGl0aW9uYWxDbGFzcz1cImZvcm0tdXBsb2FkLXRyYXNoLWJ1dHRvblwiIG9uQ2xpY2s9e2hhbmRsZURlbGV0ZX0gLz5cclxuICAgICAgfVxyXG5cclxuICAgICAgPGlucHV0IHR5cGU9XCJoaWRkZW5cIiBuYW1lPXtuYW1lfSB2YWx1ZT17aGlkZGVuSW1nID8/ICcnfSAvPlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuXHJcbmV4cG9ydCBjb25zdCBDbG9zZUljb24gPSAoe2FkZGl0aW9uYWxDbGFzcywgLi4ucHJvcHN9KSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxzdmcgY2xhc3NOYW1lPXsnaS1jbG9zZScgKyAoYWRkaXRpb25hbENsYXNzID8gJyAnICsgYWRkaXRpb25hbENsYXNzOiAnJyl9IHsuLi5wcm9wc30geG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgNjQgNjRcIj5cclxuICAgICAgICAgICAgPHBhdGggZmlsbD1cImN1cnJlbnRDb2xvclwiIGQ9XCJtNC41OSA1OS40MWEyIDIgMCAwIDAgMi44MyAwbDI0LjU4LTI0LjU4IDI0LjU5IDI0LjU4YTIgMiAwIDAgMCAyLjgzLTIuODNsLTI0LjU5LTI0LjU4IDI0LjU4LTI0LjU5YTIgMiAwIDAgMCAtMi44My0yLjgzbC0yNC41OCAyNC41OS0yNC41OS0yNC41OGEyIDIgMCAwIDAgLTIuODIgMi44MmwyNC41OCAyNC41OS0yNC41OCAyNC41OWEyIDIgMCAwIDAgMCAyLjgyelwiPjwvcGF0aD5cclxuICAgICAgICA8L3N2Zz5cclxuICAgIClcclxufVxyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5cclxuZXhwb3J0IGNvbnN0IEVkaXRJY29uID0gKHthZGRpdGlvbmFsQ2xhc3MsIC4uLnByb3BzfSkgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8c3ZnIGNsYXNzTmFtZT17J2ljb24gaS1lZGl0JyArIChhZGRpdGlvbmFsQ2xhc3MgPyAnICcrYWRkaXRpb25hbENsYXNzOiAnJyl9IHsuLi5wcm9wc30gZW5hYmxlQmFja2dyb3VuZD1cIm5ldyAwIDAgOTYgOTZcIiB2aWV3Qm94PVwiMCAwIDk2IDk2XCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPlxyXG4gICAgICAgICAgICA8cGF0aCBmaWxsPVwiY3VycmVudENvbG9yXCIgZD1cIm0yOCA3MGMuMiAwIC40IDAgLjYtLjFsMTYtNC43Yy4zLS4xLjYtLjMuOC0uNWwzNS40LTM1LjJjLjItLjIuNC0uMy41LS41IDEuOS0xLjkgMi45LTQuNCAzLTcuMS4xLTIuOC0xLTUuNC0yLjktNy40bC0uMS0uMWMtMi0xLjktNC42LTIuOC03LjQtMi43cy01LjMgMS4zLTcuMSAzLjNsLTM1LjUgMzUuNWMtLjIuMy0uNC42LS41LjlsLTQuNyAxNmMtLjIuNyAwIDEuNS41IDIgLjQuNC45LjYgMS40LjZ6bTYuNS0xNi45IDM1LjItMzUuM2MxLjEtMS4yIDIuNy0xLjkgNC40LTJzMy4zLjUgNC41IDEuNmMxLjEgMS4zIDEuNyAyLjggMS43IDQuNXMtLjggMy4zLTIgNC41bC0uMS4xLS4xLjEtMzUuMSAzNC45LTEyIDMuNXptNDkuNSAyOC45aC03MmMtMS4xIDAtMiAuOS0yIDJzLjkgMiAyIDJoNzJjMS4xIDAgMi0uOSAyLTJzLS45LTItMi0yelwiPjwvcGF0aD5cclxuICAgICAgICA8L3N2Zz5cclxuICAgIClcclxufVxyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5cclxuZXhwb3J0IGNvbnN0IFBsdXNJY29uID0gKHthZGRpdGlvbmFsQ2xhc3MsIC4uLnByb3BzfSkgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8c3ZnIGNsYXNzTmFtZT17J2ljb24gaS1wbHVzJyArIChhZGRpdGlvbmFsQ2xhc3MgPyAnICcgKyBhZGRpdGlvbmFsQ2xhc3M6ICcnKX0gey4uLnByb3BzfSB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCAyNCAyNFwiPlxyXG4gICAgICAgICAgICA8ZyBpZD1cImVzc2VudGlhbHMvYmFzaWNzL2FkZFwiIGZpbGw9XCJub25lXCIgZmlsbFJ1bGU9XCJldmVub2RkXCI+XHJcbiAgICAgICAgICAgIDxwYXRoIGZpbGw9XCJjdXJyZW50Q29sb3JcIiBpZD1cIkZpbGwtNzBcIiBkPVwibTExLjQ5MzU4OTggMjFjLS4yNzYgMC0uNS0uMjI0LS41LS41di04LjVoLTguNDk5OTk5OThjLS4yNzYgMC0uNS0uMjI0LS41LS41cy4yMjQtLjUuNS0uNWg4LjQ5OTk5OTk4di04LjVjMC0uMjc2LjIyNC0uNS41LS41cy41LjIyNC41LjV2OC41aDguNWMuMjc2IDAgLjUuMjI0LjUuNXMtLjIyNC41LS41LjVoLTguNXY4LjVjMCAuMjc2LS4yMjQuNS0uNS41XCI+PC9wYXRoPlxyXG4gICAgICAgICAgICA8L2c+XHJcbiAgICAgICAgPC9zdmc+XHJcbiAgICApXHJcbn0iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5cclxuZXhwb3J0IGNvbnN0IFRyYXNoSWNvbiA9ICh7YWRkaXRpb25hbENsYXNzLCAuLi5wcm9wc30pID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPHN2ZyBjbGFzc05hbWU9eydpY29uIGktdHJhc2gnICsgKGFkZGl0aW9uYWxDbGFzcyA/ICcgJyArIGFkZGl0aW9uYWxDbGFzczogJycpfSB7Li4ucHJvcHN9IHZpZXdCb3g9XCItNDAgMCA0MjcgNDI3LjAwMTMxXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPlxyXG4gICAgICAgICAgICA8cGF0aCBmaWxsPVwiY3VycmVudENvbG9yXCIgZD1cIm0yMzIuMzk4NDM4IDE1NC43MDMxMjVjLTUuNTIzNDM4IDAtMTAgNC40NzY1NjMtMTAgMTB2MTg5YzAgNS41MTk1MzEgNC40NzY1NjIgMTAgMTAgMTAgNS41MjM0MzcgMCAxMC00LjQ4MDQ2OSAxMC0xMHYtMTg5YzAtNS41MjM0MzctNC40NzY1NjMtMTAtMTAtMTB6bTAgMFwiPlxyXG4gICAgICAgICAgICA8L3BhdGg+XHJcbiAgICAgICAgICAgIDxwYXRoIGZpbGw9XCJjdXJyZW50Q29sb3JcIiBkPVwibTExNC4zOTg0MzggMTU0LjcwMzEyNWMtNS41MjM0MzggMC0xMCA0LjQ3NjU2My0xMCAxMHYxODljMCA1LjUxOTUzMSA0LjQ3NjU2MiAxMCAxMCAxMCA1LjUyMzQzNyAwIDEwLTQuNDgwNDY5IDEwLTEwdi0xODljMC01LjUyMzQzNy00LjQ3NjU2My0xMC0xMC0xMHptMCAwXCI+XHJcbiAgICAgICAgICAgIDwvcGF0aD5cclxuICAgICAgICAgICAgPHBhdGggZmlsbD1cImN1cnJlbnRDb2xvclwiIGQ9XCJtMjguMzk4NDM4IDEyNy4xMjEwOTR2MjQ2LjM3ODkwNmMwIDE0LjU2MjUgNS4zMzk4NDMgMjguMjM4MjgxIDE0LjY2Nzk2OCAzOC4wNTA3ODEgOS4yODUxNTYgOS44Mzk4NDQgMjIuMjA3MDMyIDE1LjQyNTc4MSAzNS43MzA0NjkgMTUuNDQ5MjE5aDE4OS4yMDMxMjVjMTMuNTI3MzQ0LS4wMjM0MzggMjYuNDQ5MjE5LTUuNjA5Mzc1IDM1LjczMDQ2OS0xNS40NDkyMTkgOS4zMjgxMjUtOS44MTI1IDE0LjY2Nzk2OS0yMy40ODgyODEgMTQuNjY3OTY5LTM4LjA1MDc4MXYtMjQ2LjM3ODkwNmMxOC41NDI5NjgtNC45MjE4NzUgMzAuNTU4NTkzLTIyLjgzNTkzOCAyOC4wNzgxMjQtNDEuODYzMjgyLTIuNDg0Mzc0LTE5LjAyMzQzNy0xOC42OTE0MDYtMzMuMjUzOTA2LTM3Ljg3ODkwNi0zMy4yNTc4MTJoLTUxLjE5OTIxOHYtMTIuNWMuMDU4NTkzLTEwLjUxMTcxOS00LjA5NzY1Ny0yMC42MDU0NjktMTEuNTM5MDYzLTI4LjAzMTI1LTcuNDQxNDA2LTcuNDIxODc1LTE3LjU1MDc4MS0xMS41NTQ2ODc1LTI4LjA2MjUtMTEuNDY4NzVoLTg4Ljc5Njg3NWMtMTAuNTExNzE5LS4wODU5Mzc1LTIwLjYyMTA5NCA0LjA0Njg3NS0yOC4wNjI1IDExLjQ2ODc1LTcuNDQxNDA2IDcuNDI1NzgxLTExLjU5NzY1NiAxNy41MTk1MzEtMTEuNTM5MDYyIDI4LjAzMTI1djEyLjVoLTUxLjE5OTIxOWMtMTkuMTg3NS4wMDM5MDYtMzUuMzk0NTMxIDE0LjIzNDM3NS0zNy44Nzg5MDcgMzMuMjU3ODEyLTIuNDgwNDY4IDE5LjAyNzM0NCA5LjUzNTE1NyAzNi45NDE0MDcgMjguMDc4MTI2IDQxLjg2MzI4MnptMjM5LjYwMTU2MiAyNzkuODc4OTA2aC0xODkuMjAzMTI1Yy0xNy4wOTc2NTYgMC0zMC4zOTg0MzctMTQuNjg3NS0zMC4zOTg0MzctMzMuNXYtMjQ1LjVoMjUwdjI0NS41YzAgMTguODEyNS0xMy4zMDA3ODIgMzMuNS0zMC4zOTg0MzggMzMuNXptLTE1OC42MDE1NjItMzY3LjVjLS4wNjY0MDctNS4yMDcwMzEgMS45ODA0NjgtMTAuMjE4NzUgNS42NzU3ODEtMTMuODk0NTMxIDMuNjkxNDA2LTMuNjc1NzgxIDguNzE0ODQzLTUuNjk1MzEzIDEzLjkyNTc4MS01LjYwNTQ2OWg4OC43OTY4NzVjNS4yMTA5MzctLjA4OTg0NCAxMC4yMzQzNzUgMS45Mjk2ODggMTMuOTI1NzgxIDUuNjA1NDY5IDMuNjk1MzEzIDMuNjcxODc1IDUuNzQyMTg4IDguNjg3NSA1LjY3NTc4MiAxMy44OTQ1MzF2MTIuNWgtMTI4em0tNzEuMTk5MjE5IDMyLjVoMjcwLjM5ODQzN2M5Ljk0MTQwNiAwIDE4IDguMDU4NTk0IDE4IDE4cy04LjA1ODU5NCAxOC0xOCAxOGgtMjcwLjM5ODQzN2MtOS45NDE0MDcgMC0xOC04LjA1ODU5NC0xOC0xOHM4LjA1ODU5My0xOCAxOC0xOHptMCAwXCI+XHJcbiAgICAgICAgICAgIDwvcGF0aD5cclxuICAgICAgICAgICAgPHBhdGggZmlsbD1cImN1cnJlbnRDb2xvclwiIGQ9XCJtMTczLjM5ODQzOCAxNTQuNzAzMTI1Yy01LjUyMzQzOCAwLTEwIDQuNDc2NTYzLTEwIDEwdjE4OWMwIDUuNTE5NTMxIDQuNDc2NTYyIDEwIDEwIDEwIDUuNTIzNDM3IDAgMTAtNC40ODA0NjkgMTAtMTB2LTE4OWMwLTUuNTIzNDM3LTQuNDc2NTYzLTEwLTEwLTEwem0wIDBcIj5cclxuICAgICAgICAgICAgPC9wYXRoPlxyXG4gICAgICAgIDwvc3ZnPlxyXG4gICAgKVxyXG59IiwiaW1wb3J0IHsgdCB9IGZyb20gJ2kxOG5leHQnO1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuXHJcbmV4cG9ydCBjb25zdCBTdWdnZXN0TGlzdCA9ICh7YWRkaXRpb25hbENsYXNzLCBzdWdnZXN0cywgb25TZWxlY3QsIG9uQ2xvc2UsIHJlbmRlcn0pID0+IHtcclxuICAgIC8vZmVybWV0dXJlIGF1IGNsaWNrIHN1ciBsZSBjw7R0w6lcclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBvbkNsb3NlKTtcclxuICAgICAgICAgICAgcmV0dXJuICgpID0+IGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgb25DbG9zZSk7XHJcbiAgICB9LCBbXSk7XHJcbiAgICAvL2Zlcm1ldHVyZSDDoCBsJ2FwcHVpIHN1ciBUYWJcclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgY2xvc2VPblRhYkRvd24gPSBlID0+IHtcclxuICAgICAgICAgICAgaWYoZS5rZXkgPT09ICdUYWInKSB7XHJcbiAgICAgICAgICAgICAgICBvbkNsb3NlKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBjbG9zZU9uVGFiRG93bik7XHJcbiAgICAgICAgcmV0dXJuICgpID0+IGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2xvc2VPblRhYkRvd24pO1xyXG4gICAgfSwgW10pO1xyXG5cclxuICAgIFxyXG4gICAgLy91dGlsaXNhdGlvbiBhdSBjbGF2aWVyXHJcbiAgICBjb25zdCBbc2VsZWN0ZWQsIHNldFNlbGVjdGVkXSA9IHVzZVN0YXRlKG51bGwpO1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgY29uc3Qgb25LZXlEb3duID0gZSA9PiB7XHJcbiAgICAgICAgICAgIHN3aXRjaChlLmtleSkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSAnQXJyb3dVcCc6XHJcbiAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHNldFNlbGVjdGVkKHNlbGVjdGVkID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYoc2VsZWN0ZWQgPT09IG51bGwgfHwgc2VsZWN0ZWQgPD0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChzdWdnZXN0cy5sZW5ndGggLSAxKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKHNlbGVjdGVkIC0gMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlICdBcnJvd0Rvd24nOlxyXG4gICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAgICAgICBzZXRTZWxlY3RlZChzZWxlY3RlZCA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKHNlbGVjdGVkID09PSBudWxsIHx8IHNlbGVjdGVkID49IChzdWdnZXN0cy5sZW5ndGggLSAxKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChzZWxlY3RlZCArIDEpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgZGVmYXVsdDogXHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIG9uS2V5RG93bik7XHJcbiAgICAgICAgcmV0dXJuICgpID0+IGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBvbktleURvd24pO1xyXG4gICAgfSwgW10pO1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgY29uc3Qgb25LZXlEb3duID0gZSA9PiB7XHJcbiAgICAgICAgICAgaWYoZS5rZXkgPT09ICdFbnRlcicpIHtcclxuICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgICAgICAgICBvblNlbGVjdChzdWdnZXN0c1tzZWxlY3RlZF0pO1xyXG4gICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIG9uS2V5RG93bik7XHJcbiAgICAgICAgcmV0dXJuICgpID0+IGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBvbktleURvd24pO1xyXG4gICAgfSwgW3NlbGVjdGVkXSk7XHJcblxyXG4gICAgY29uc3Qgc3RvcFByb3BhZ2F0aW9uID0gZSA9PiB7XHJcbiAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICBcclxuICAgICAgICA8dWwgY2xhc3NOYW1lPXtgc3VnZ2VzdC1saXN0ICR7YWRkaXRpb25hbENsYXNzfWB9IG9uQ2xpY2s9e3N0b3BQcm9wYWdhdGlvbn0gcm9sZT1cImxpc3Rib3hcIiBhcmlhLWxhYmVsPXt0KCdzdWdnZXN0aW9ucycsIHtuczogJ21lc3NhZ2VzJ30pfT5cclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgc3VnZ2VzdHMubWFwKChzdWdnZXN0LCBpbmRleCkgPT4gcmVuZGVyKHN1Z2dlc3QsIHNlbGVjdGVkID09PSBpbmRleCkpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICA8L3VsPlxyXG4gICAgKVxyXG59XHJcblxyXG5cclxuXHJcbiAgICBcclxuIiwiLy8gYW55IENTUyB5b3UgaW1wb3J0IHdpbGwgb3V0cHV0IGludG8gYSBzaW5nbGUgY3NzIGZpbGUgKGFwcC5jc3MgaW4gdGhpcyBjYXNlKVxyXG5pbXBvcnQgJy4uL3N0eWxlcy9BZG1pbi9pbmRleC5jc3MnO1xyXG5pbXBvcnQgJy4uL3N0eWxlcy9BZG1pbi9oZWFkZXIuY3NzJztcclxuaW1wb3J0ICcuLi9zdHlsZXMvQWRtaW4vZm9vdGVyLmNzcyc7XHJcbmltcG9ydCAnLi4vc3R5bGVzL0FkbWluL2hvbWUuY3NzJztcclxuaW1wb3J0ICcuLi9zdHlsZXMvQWRtaW4vZm9ybS5jc3MnO1xyXG5pbXBvcnQgJy4uL3N0eWxlcy9BZG1pbi9mb3JtX2ZpbHRlcnMuY3NzJztcclxuaW1wb3J0ICcuLi9zdHlsZXMvQWRtaW4vVUkvc3VnZ2VzdExpc3QuY3NzJztcclxuaW1wb3J0ICcuLi9zdHlsZXMvQWRtaW4vcGFnaW5hdGlvbi5jc3MnO1xyXG5pbXBvcnQgJy4uL3N0eWxlcy9BZG1pbi90YWJsZS5jc3MnO1xyXG5pbXBvcnQgJy4uL3N0eWxlcy9BZG1pbi9jdXN0b21UYWJsZS5jc3MnO1xyXG5pbXBvcnQgJy4uL3N0eWxlcy9BZG1pbi9VSS9idXR0b25zLmNzcyc7XHJcbmltcG9ydCAnLi4vc3R5bGVzL0FkbWluL2JyZWFkY3J1bWIuY3NzJztcclxuaW1wb3J0ICcuLi9zdHlsZXMvQWRtaW4vUHJvZHVjdC9zaG93LmNzcyc7XHJcbmltcG9ydCAnLi4vc3R5bGVzL0FkbWluL2ZsYXNoZXMuY3NzJztcclxuaW1wb3J0ICcuLi9zdHlsZXMvQWRtaW4vcmV2aWV3LmNzcyc7XHJcbmltcG9ydCAnLi4vc3R5bGVzL0FkbWluL2FsZXJ0cy5jc3MnO1xyXG5cclxuLy8gc3RhcnQgdGhlIFN0aW11bHVzIGFwcGxpY2F0aW9uXHJcbmltcG9ydCAnLi4vYm9vdHN0cmFwJztcclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgY3JlYXRlUm9vdCB9IGZyb20gJ3JlYWN0LWRvbS9jbGllbnQnO1xyXG5pbXBvcnQgeyBQdXJjaGFzZVN0YXR1c1VwZGF0ZXIgfSBmcm9tICcuLi9Db21wb25lbnRzL0FkbWluL1B1cmNoYXNlU3RhdHVzVXBkYXRlcic7XHJcbmltcG9ydCB7IFJldmlld01vZGVyYXRvciB9IGZyb20gJy4uL0NvbXBvbmVudHMvQWRtaW4vUmV2aWV3TW9kZXJhdG9yJztcclxuaW1wb3J0IGkxOG4gZnJvbSAnLi9pMThuJztcclxuaW1wb3J0IHsgSW5ncmVkaWVudHNRdWFudGl0aWVzSW5wdXQgfSBmcm9tICcuLi9Db21wb25lbnRzL0FkbWluL0luZ3JlZGllbnRzUXVhbnRpdGllc0lucHV0JztcclxuaW1wb3J0IHsgU2VsZWN0TGlua2VkSXRlbXMgfSBmcm9tICcuLi9Db21wb25lbnRzL0FkbWluL1NlbGVjdExpbmtlZEl0ZW1zJztcclxuaW1wb3J0IHsgQWRtaW5QaWN0dXJlVXBsb2FkIH0gZnJvbSAnLi4vQ29tcG9uZW50cy9BZG1pbi9BZG1pblBpY3R1cmVVcGxvYWQnO1xyXG5pbXBvcnQgeyBBZG1pbkFuc3dlckNvbnRyb2wgfSBmcm9tICcuLi9Db21wb25lbnRzL0FkbWluL0FkbWluQW5zd2VyQ29udHJvbCc7XHJcbmltcG9ydCB7IFBhY2thZ2luZ0Nob2ljZXNJbnB1dCB9IGZyb20gJy4uL0NvbXBvbmVudHMvQWRtaW4vUGFja2FnaW5nQ2hvaWNlc0lucHV0JztcclxuaW1wb3J0IHsgU2VsZWN0VW5pcXVlSXRlbSB9IGZyb20gJy4uL0NvbXBvbmVudHMvQWRtaW4vU2VsZWN0VW5pcXVlSXRlbSc7XHJcblxyXG5cclxuaTE4bi5jaGFuZ2VMYW5ndWFnZSgnZnInKTtcclxuXHJcbi8vb24gYXV0aCBldmVudCA6IHN1cHByZXNzaW9uIGRlcyBpdGVtcyBkZSBzZXNzaW9uIHN0b3JhZ2VcclxuaWYoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2F1dGgtZXZlbnQnKSkge1xyXG4gICAgc2Vzc2lvblN0b3JhZ2UucmVtb3ZlSXRlbSgnY2hlY2tvdXQnKTtcclxuICAgIHNlc3Npb25TdG9yYWdlLnJlbW92ZUl0ZW0oJ2NoZWNrX3N0Jyk7XHJcbiAgICBzZXNzaW9uU3RvcmFnZS5yZW1vdmVJdGVtKCdsaWdodF91c2VyJyk7XHJcbn1cclxuXHJcblxyXG4vL3NlbGVjdCBsaW5rZWQgaXRlbXNcclxuW1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NlbGVjdC1wcm9kdWN0cy1pbnB1dCcpLFxyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NlbGVjdC1yZWNpcGVzLWlucHV0JyksXHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2VsZWN0LWFydGljbGVzLWlucHV0JylcclxuXS5mb3JFYWNoKGlucHV0ID0+IHtcclxuICAgIGlmKGlucHV0KSB7XHJcbiAgICAgICAgY29uc3QgZXJyb3IgPSBpbnB1dC5xdWVyeVNlbGVjdG9yKCcuYWRtaW4tZm9ybS1lcnJvciB1bCBsaTpmaXJzdC1jaGlsZCcpPy5pbm5lckhUTUwgPz8gbnVsbDtcclxuICAgICAgICBjb25zdCByb290ID0gY3JlYXRlUm9vdChpbnB1dCk7XHJcbiAgICAgICAgcm9vdC5yZW5kZXIoXHJcbiAgICAgICAgICAgIDxTZWxlY3RMaW5rZWRJdGVtc1xyXG4gICAgICAgICAgICAgICAgaW5kZXhFbmRwb2ludD17aW5wdXQuZGF0YXNldD8uaW5kZXhlbmRwb2ludH1cclxuICAgICAgICAgICAgICAgIHNlYXJjaEVuZHBvaW50PXtpbnB1dC5kYXRhc2V0Py5zZWFyY2hlbmRwb2ludH0gXHJcbiAgICAgICAgICAgICAgICBuYW1lPXtpbnB1dC5kYXRhc2V0Lm5hbWV9IFxyXG4gICAgICAgICAgICAgICAgdGl0bGU9e2lucHV0LmRhdGFzZXQudGl0bGV9XHJcbiAgICAgICAgICAgICAgICBmb3JtRXJyb3I9e2Vycm9yfSBcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICApXHJcbiAgICB9XHJcbn0pO1xyXG5cclxuXHJcblxyXG4vL3NlbGVjdCB1bmlxdWUgaXRlbVxyXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuc2VsZWN0LXVuaXF1ZS1pdGVtLWlucHV0JykuZm9yRWFjaChpbnB1dCA9PiB7XHJcbiAgICBjb25zdCBlcnJvciA9IGlucHV0LnF1ZXJ5U2VsZWN0b3IoJy5hZG1pbi1mb3JtLWVycm9yIHVsIGxpOmZpcnN0LWNoaWxkJyk/LmlubmVySFRNTCA/PyBudWxsO1xyXG4gICAgY29uc3Qgcm9vdCA9IGNyZWF0ZVJvb3QoaW5wdXQpO1xyXG4gICAgcm9vdC5yZW5kZXIoXHJcbiAgICAgICAgPFNlbGVjdFVuaXF1ZUl0ZW0gXHJcbiAgICAgICAgICAgIHR5cGU9e2lucHV0LmRhdGFzZXQudHlwZX1cclxuICAgICAgICAgICAgaXRlbUlkPXtpbnB1dC5kYXRhc2V0Lml0ZW1pZH1cclxuICAgICAgICAgICAgdGl0bGU9e2lucHV0LmRhdGFzZXQudGl0bGV9XHJcbiAgICAgICAgICAgIG5hbWU9e2lucHV0LmRhdGFzZXQubmFtZX1cclxuICAgICAgICAgICAgZm9ybUVycm9yPXtlcnJvcn1cclxuICAgICAgICAvPlxyXG4gICAgKVxyXG59KVxyXG5cclxuXHJcbi8vcHJvZHVjdCBmb3JtIDogcGFja2FnaW5nQ2hvaWNlcyBpbnB1dFxyXG5pZihkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGFja2FnaW5nLWNob2ljZXMtaW5wdXQnKSkge1xyXG4gICAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGFja2FnaW5nLWNob2ljZXMtaW5wdXQnKTtcclxuICAgIGNvbnN0IHJvb3QgPSBjcmVhdGVSb290KGlucHV0KTtcclxuICAgIHJvb3QucmVuZGVyKFxyXG4gICAgICAgIDxQYWNrYWdpbmdDaG9pY2VzSW5wdXQgbmFtZT17aW5wdXQuZGF0YXNldC5uYW1lfSB2YWx1ZT17aW5wdXQuZGF0YXNldC52YWx1ZX0gcHJvZHVjdElkPXtpbnB1dC5kYXRhc2V0LnByb2R1Y3RpZH0gLz5cclxuICAgIClcclxufVxyXG5cclxuXHJcbmlmKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwdXJjaGFzZS1zdGF0dXMtdXBkYXRlcicpKSB7XHJcbiAgICBjb25zdCBwdXJjaGFzZVN0YXR1c1VwZGF0ZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHVyY2hhc2Utc3RhdHVzLXVwZGF0ZXInKTtcclxuICAgIGNvbnN0IHB1cmNoYXNlU3RhdHVzVXBkYXRlclJvb3QgPSBjcmVhdGVSb290KHB1cmNoYXNlU3RhdHVzVXBkYXRlcik7XHJcblxyXG4gICAgcHVyY2hhc2VTdGF0dXNVcGRhdGVyUm9vdC5yZW5kZXIoXHJcbiAgICAgICAgPFB1cmNoYXNlU3RhdHVzVXBkYXRlciBpZD17cHVyY2hhc2VTdGF0dXNVcGRhdGVyLmRhdGFzZXQuaWR9IGluaXRpYWxTdGF0dXM9e3B1cmNoYXNlU3RhdHVzVXBkYXRlci5kYXRhc2V0LnN0YXR1c30gLz5cclxuICAgICk7XHJcbn1cclxuXHJcbmlmKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yZXZpZXctbW9kZXJhdG9yJykpIHtcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5yZXZpZXctbW9kZXJhdG9yJykuZm9yRWFjaChyZXZpZXdNb2RlcmF0b3IgPT4ge1xyXG4gICAgICAgIGNvbnN0IHJldmlld01vZGVyYXRvclJvb3QgPSBjcmVhdGVSb290KHJldmlld01vZGVyYXRvcik7XHJcbiAgICAgICAgcmV2aWV3TW9kZXJhdG9yUm9vdC5yZW5kZXIoXHJcbiAgICAgICAgICAgIDxSZXZpZXdNb2RlcmF0b3IgaWQ9e3Jldmlld01vZGVyYXRvci5kYXRhc2V0LmlkfSBpbml0aWFsU3RhdHVzPXtyZXZpZXdNb2RlcmF0b3IuZGF0YXNldC5zdGF0dXN9IC8+XHJcbiAgICAgICAgKTtcclxuICAgIH0pXHJcbn1cclxuXHJcblxyXG5pZihkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaW5ncmVkaWVudHMtcXVhbnRpdGllcy1pbnB1dCcpKSB7XHJcbiAgICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpbmdyZWRpZW50cy1xdWFudGl0aWVzLWlucHV0Jyk7XHJcbiAgICBjb25zdCByb290ID0gY3JlYXRlUm9vdChpbnB1dCk7XHJcbiAgICByb290LnJlbmRlcihcclxuICAgICAgICA8SW5ncmVkaWVudHNRdWFudGl0aWVzSW5wdXQgbmFtZT17aW5wdXQuZGF0YXNldC5uYW1lfSB2YWx1ZT17aW5wdXQuZGF0YXNldC52YWx1ZX0gLz5cclxuICAgIClcclxufVxyXG5cclxuLy9waWN0dXJlIHVwbG9hZCBmaWVsZFxyXG5pZihkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRtaW4tcGljdHVyZS11cGxvYWQnKSkge1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmFkbWluLXBpY3R1cmUtdXBsb2FkJykuZm9yRWFjaChlbHQgPT4ge1xyXG4gICAgICAgIGNvbnN0IHJlc2l6ZVdpZHRoID0gcGFyc2VJbnQoZWx0LmRhdGFzZXQucmVzaXpld2lkdGggPz8gJzUwMCcpO1xyXG4gICAgICAgIGNvbnN0IHJlc2l6ZUhlaWdodCA9IHBhcnNlSW50KGVsdC5kYXRhc2V0LnJlc2l6ZWhlaWdodCA/PyAnNTAwJyk7XHJcbiAgICAgICAgY29uc3Qgcm9vdCA9IGNyZWF0ZVJvb3QoZWx0KTtcclxuICAgICAgICByb290LnJlbmRlcihcclxuICAgICAgICAgICAgPEFkbWluUGljdHVyZVVwbG9hZCBcclxuICAgICAgICAgICAgICAgIG5hbWU9e2VsdC5kYXRhc2V0Lm5hbWV9IFxyXG4gICAgICAgICAgICAgICAgbGFiZWw9e2VsdC5kYXRhc2V0LmxhYmVsfSBcclxuICAgICAgICAgICAgICAgIGRlZmF1bHRCYXNlNjRpbWc9e2VsdC5kYXRhc2V0LnZhbHVlID8/IG51bGx9IFxyXG4gICAgICAgICAgICAgICAgcmVzaXplV2lkdGg9e3Jlc2l6ZVdpZHRofSBcclxuICAgICAgICAgICAgICAgIHJlc2l6ZUhlaWdodD17cmVzaXplSGVpZ2h0fSBcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICApXHJcbiAgICB9KVxyXG59XHJcblxyXG5cclxuLy9hZG1pbiBhbnN3ZXJcclxuaWYoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkbWluLWFuc3dlci1jb250cm9sJykpIHtcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5hZG1pbi1hbnN3ZXItY29udHJvbCcpLmZvckVhY2goZWx0ID0+IHtcclxuICAgICAgICBjb25zdCByb290ID0gY3JlYXRlUm9vdChlbHQpO1xyXG4gICAgICAgIHJvb3QucmVuZGVyKFxyXG4gICAgICAgICAgICA8QWRtaW5BbnN3ZXJDb250cm9sIG93bmVyQ2xhc3M9e2VsdC5kYXRhc2V0Lm93bmVyY2xhc3N9IG93bmVySWQ9e2VsdC5kYXRhc2V0Lm93bmVyaWR9IC8+XHJcbiAgICAgICAgKVxyXG4gICAgfSlcclxufVxyXG4iLCJpbXBvcnQgaTE4biBmcm9tIFwiLi4vZW50cnlwb2ludHMvaTE4blwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IHByaWNlRm9ybWF0ZXIgPSAocHJpY2UpID0+IHtcclxuICAgIGNvbnN0IGZvcm1hdGVyID0gbmV3IEludGwuTnVtYmVyRm9ybWF0KGdldExvY2FsZU9wdGlvbigpLCB7c3R5bGU6ICdjdXJyZW5jeScsIGN1cnJlbmN5OiAnRVVSJ30pO1xyXG4gICAgcmV0dXJuIGZvcm1hdGVyLmZvcm1hdChwcmljZSAvIDEwMCk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgcmV2aWV3Tm90ZUZvcm1hdGVyID0gKHJldmlld05vdGUpID0+IHtcclxuICAgIGNvbnN0IGZvcm1hdGVyID0gbmV3IEludGwuTnVtYmVyRm9ybWF0KGdldExvY2FsZU9wdGlvbigpKTtcclxuICAgIHJldHVybiBmb3JtYXRlci5mb3JtYXQocmV2aWV3Tm90ZSAvIDEwKTtcclxufTtcclxuXHJcbi8qKlxyXG4gKiBAcGFyYW0ge251bWJlcn0gZGlzdGFuY2UgKG0pXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgZGlzdGFuY2VGb3JtYXRlciA9IChkaXN0YW5jZSkgPT4ge1xyXG4gICAgaWYoZGlzdGFuY2UgPj0gMTAwMCkge1xyXG4gICAgICAgIGNvbnN0IGRpc3RhbmNlSW5LbSA9IE1hdGgucm91bmQoKGRpc3RhbmNlIC8gMTAwKSkgLyAxMDsgLy8gZXg6IDE1NzQgbSAtLS0+IDEuNlxyXG5cclxuICAgICAgICBjb25zdCBmb3JtYXRlciA9IG5ldyBJbnRsLk51bWJlckZvcm1hdChnZXRMb2NhbGVPcHRpb24oKSk7XHJcbiAgICAgICAgcmV0dXJuIGZvcm1hdGVyLmZvcm1hdChkaXN0YW5jZUluS20pICsgJyBrbSc7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZGlzdGFuY2UgKyAnIG0nO1xyXG59XHJcblxyXG5cclxuY29uc3QgZ2V0TG9jYWxlT3B0aW9uID0gKCkgPT4ge1xyXG4gICAgaWYoaTE4bi5sYW5ndWFnZSA9PT0gJ2VuJykge1xyXG4gICAgICAgIHJldHVybiAnZW4tVVMnO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuICdmci1GUic7XHJcbn0iLCJleHBvcnQgY29uc3QgY3JlYXRlVG9rZW4gPSBjb3VudCA9PiB7XHJcbiAgICBsZXQgdG9rZW4gPSAnJztcclxuICAgIGZvcihsZXQgaT0wIDsgaSA8IGNvdW50IDsgaSsrKSB7XHJcbiAgICAgICAgdG9rZW4gKz0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRva2VuO1xyXG59IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuXHJcbmV4cG9ydCBjb25zdCBBZG1pblNob3dDYXJkUm93ID0gKHt2YWx1ZSwgbGFiZWwsIGxhbmcgPSBudWxsfSkgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17J2FkbWluLXNob3ctY2FyZC1yb3ctd3JhcHBlcicgKyAobGFuZyA/ICgnICcrbGFuZysnLWdyb3VwJyk6ICcnKX0+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWRtaW4tc2hvdy1jYXJkLXJvd1wiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhZG1pbi1zaG93LWNhcmQtcm93LWxhYmVsXCI+e2xhYmVsfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhZG1pbi1zaG93LWNhcmQtcm93LXZhbHVlXCI+e3ZhbHVlfTwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufSIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IFRleHRGaWVsZCB9IGZyb20gJy4uLy4uLy4uLy4uL1VJL0Zvcm0vVGV4dEZpZWxkJztcclxuXHJcbmV4cG9ydCBjb25zdCBBZG1pblRleHRGaWVsZCA9ICh7Li4ucHJvcHN9KSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWRtaW4tZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICA8VGV4dEZpZWxkIGFkZGl0aW9uYWxDbGFzcz1cImFkbWluLWZvcm0tY29udHJvbFwiIHsuLi5wcm9wc30gLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufSIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyJdLCJuYW1lcyI6WyJfcmVnZW5lcmF0b3JSdW50aW1lIiwiZXhwb3J0cyIsIk9wIiwiT2JqZWN0IiwicHJvdG90eXBlIiwiaGFzT3duIiwiaGFzT3duUHJvcGVydHkiLCJkZWZpbmVQcm9wZXJ0eSIsIm9iaiIsImtleSIsImRlc2MiLCJ2YWx1ZSIsIiRTeW1ib2wiLCJTeW1ib2wiLCJpdGVyYXRvclN5bWJvbCIsIml0ZXJhdG9yIiwiYXN5bmNJdGVyYXRvclN5bWJvbCIsImFzeW5jSXRlcmF0b3IiLCJ0b1N0cmluZ1RhZ1N5bWJvbCIsInRvU3RyaW5nVGFnIiwiZGVmaW5lIiwiZW51bWVyYWJsZSIsImNvbmZpZ3VyYWJsZSIsIndyaXRhYmxlIiwiZXJyIiwid3JhcCIsImlubmVyRm4iLCJvdXRlckZuIiwic2VsZiIsInRyeUxvY3NMaXN0IiwicHJvdG9HZW5lcmF0b3IiLCJHZW5lcmF0b3IiLCJnZW5lcmF0b3IiLCJjcmVhdGUiLCJjb250ZXh0IiwiQ29udGV4dCIsIm1ha2VJbnZva2VNZXRob2QiLCJ0cnlDYXRjaCIsImZuIiwiYXJnIiwidHlwZSIsImNhbGwiLCJDb250aW51ZVNlbnRpbmVsIiwiR2VuZXJhdG9yRnVuY3Rpb24iLCJHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSIsIkl0ZXJhdG9yUHJvdG90eXBlIiwiZ2V0UHJvdG8iLCJnZXRQcm90b3R5cGVPZiIsIk5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlIiwidmFsdWVzIiwiR3AiLCJkZWZpbmVJdGVyYXRvck1ldGhvZHMiLCJmb3JFYWNoIiwibWV0aG9kIiwiX2ludm9rZSIsIkFzeW5jSXRlcmF0b3IiLCJQcm9taXNlSW1wbCIsImludm9rZSIsInJlc29sdmUiLCJyZWplY3QiLCJyZWNvcmQiLCJyZXN1bHQiLCJfdHlwZW9mIiwiX19hd2FpdCIsInRoZW4iLCJ1bndyYXBwZWQiLCJlcnJvciIsInByZXZpb3VzUHJvbWlzZSIsImNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnIiwic3RhdGUiLCJFcnJvciIsImRvbmVSZXN1bHQiLCJkZWxlZ2F0ZSIsImRlbGVnYXRlUmVzdWx0IiwibWF5YmVJbnZva2VEZWxlZ2F0ZSIsInNlbnQiLCJfc2VudCIsImRpc3BhdGNoRXhjZXB0aW9uIiwiYWJydXB0IiwiZG9uZSIsIm1ldGhvZE5hbWUiLCJ1bmRlZmluZWQiLCJUeXBlRXJyb3IiLCJpbmZvIiwicmVzdWx0TmFtZSIsIm5leHQiLCJuZXh0TG9jIiwicHVzaFRyeUVudHJ5IiwibG9jcyIsImVudHJ5IiwidHJ5TG9jIiwiY2F0Y2hMb2MiLCJmaW5hbGx5TG9jIiwiYWZ0ZXJMb2MiLCJ0cnlFbnRyaWVzIiwicHVzaCIsInJlc2V0VHJ5RW50cnkiLCJjb21wbGV0aW9uIiwicmVzZXQiLCJpdGVyYWJsZSIsIml0ZXJhdG9yTWV0aG9kIiwiaXNOYU4iLCJsZW5ndGgiLCJpIiwiZGlzcGxheU5hbWUiLCJpc0dlbmVyYXRvckZ1bmN0aW9uIiwiZ2VuRnVuIiwiY3RvciIsImNvbnN0cnVjdG9yIiwibmFtZSIsIm1hcmsiLCJzZXRQcm90b3R5cGVPZiIsIl9fcHJvdG9fXyIsImF3cmFwIiwiYXN5bmMiLCJQcm9taXNlIiwiaXRlciIsImtleXMiLCJ2YWwiLCJvYmplY3QiLCJyZXZlcnNlIiwicG9wIiwic2tpcFRlbXBSZXNldCIsInByZXYiLCJjaGFyQXQiLCJzbGljZSIsInN0b3AiLCJyb290UmVjb3JkIiwicnZhbCIsImV4Y2VwdGlvbiIsImhhbmRsZSIsImxvYyIsImNhdWdodCIsImhhc0NhdGNoIiwiaGFzRmluYWxseSIsImZpbmFsbHlFbnRyeSIsImNvbXBsZXRlIiwiZmluaXNoIiwiX2NhdGNoIiwidGhyb3duIiwiZGVsZWdhdGVZaWVsZCIsImFzeW5jR2VuZXJhdG9yU3RlcCIsImdlbiIsIl9uZXh0IiwiX3Rocm93IiwiX2FzeW5jVG9HZW5lcmF0b3IiLCJhcmdzIiwiYXJndW1lbnRzIiwiYXBwbHkiLCJfc2xpY2VkVG9BcnJheSIsImFyciIsIl9hcnJheVdpdGhIb2xlcyIsIl9pdGVyYWJsZVRvQXJyYXlMaW1pdCIsIl91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheSIsIl9ub25JdGVyYWJsZVJlc3QiLCJvIiwibWluTGVuIiwiX2FycmF5TGlrZVRvQXJyYXkiLCJuIiwidG9TdHJpbmciLCJBcnJheSIsImZyb20iLCJ0ZXN0IiwibGVuIiwiYXJyMiIsIl9pIiwiX3MiLCJfZSIsIl94IiwiX3IiLCJfYXJyIiwiX24iLCJfZCIsImlzQXJyYXkiLCJSZWFjdCIsInVzZVN0YXRlIiwidXNlT3BlblN0YXRlIiwiQXBpRXJyb3IiLCJhcGlQcmVwYXJlZEZldGNoIiwiQWRtaW5BbnN3ZXJDb250cm9sIiwiX3JlZiIsIm93bmVyQ2xhc3MiLCJvd25lcklkIiwiX3VzZU9wZW5TdGF0ZSIsIl91c2VPcGVuU3RhdGUyIiwiZm9ybUlzT3BlbiIsIm9wZW5Gb3JtIiwiY2xvc2VGb3JtIiwiX3VzZVN0YXRlIiwiX3VzZVN0YXRlMiIsImlzTG9hZGluZyIsInNldExvYWRpbmciLCJfdXNlU3RhdGUzIiwiX3VzZVN0YXRlNCIsImVycm9ycyIsInNldEVycm9ycyIsIl91c2VTdGF0ZTUiLCJfdXNlU3RhdGU2Iiwic2V0VmFsdWUiLCJoYW5kbGVDaGFuZ2UiLCJlIiwicHJldmVudERlZmF1bHQiLCJ0YXJnZXQiLCJoYW5kbGVTdWJtaXQiLCJfcmVmMiIsIl9jYWxsZWUiLCJfY2FsbGVlJCIsIl9jb250ZXh0IiwiY29udGVudCIsImxvY2F0aW9uIiwicmVsb2FkIiwidDAiLCJfeDIiLCJjcmVhdGVFbGVtZW50IiwiRnJhZ21lbnQiLCJvblN1Ym1pdCIsImNsYXNzTmFtZSIsImh0bWxGb3IiLCJpZCIsIm9uQ2hhbmdlIiwiYXV0b0ZvY3VzIiwib25DbGljayIsImRpc2FibGVkIiwiUGljdHVyZVVwbG9hZEZpZWxkIiwiQWRtaW5QaWN0dXJlVXBsb2FkIiwibGFiZWwiLCJkZWZhdWx0QmFzZTY0aW1nIiwicmVzaXplV2lkdGgiLCJyZXNpemVIZWlnaHQiLCJNb2RhbCIsIklxRm9ybSIsIkVkaXRCdXR0b24iLCJDbG9zZUJ1dHRvbiIsIklxQ2FyZCIsImluZ3JlZGllbnRRdWFudGl0eSIsInJlbW92ZSIsInVwZGF0ZSIsImhhbmRsZVJlbW92ZSIsImhhbmRsZVVwZGF0ZSIsIm5ld0luZ3JlZGllbnRRdWFudGl0eSIsInNyYyIsImluZ3JlZGllbnQiLCJwaWN0dXJlIiwicGF0aCIsImFsdCIsInF1YW50aXR5IiwiZW4iLCJmciIsImVzIiwiaXQiLCJpc09wZW4iLCJjbG9zZSIsImFkZGl0aW9uYWxDbGFzcyIsImFuaW1hdGVkIiwib25TdWJtaXRTdWNjZXNzIiwiU3VnZ2VzdExpc3QiLCJ1c2VGZXRjaFFTZWFyY2giLCJpMThuIiwiQWRtaW5JdGVtU3VnZ2VzdCIsIkluZ3JlZGllbnRTdWdnZXN0ZWRGaWVsZCIsIm9uU2VsZWN0IiwiZm9ybUVycm9yIiwicSIsInNldFEiLCJfdXNlRmV0Y2hRU2VhcmNoIiwibGFuZ3VhZ2UiLCJfdXNlRmV0Y2hRU2VhcmNoMiIsImluZ3JlZGllbnRzIiwicmVzZXRJbmdyZWRpZW50cyIsInBsYWNlaG9sZGVyIiwic3VnZ2VzdHMiLCJvbkNsb3NlIiwicmVuZGVyIiwic2VsZWN0ZWQiLCJJbmdyZWRpZW50U3VnZ2VzdEl0ZW0iLCJ0b1VwcGVyQ2FzZSIsInNwbGl0Iiwiam9pbiIsImhhbmRsZUNsaWNrIiwiaHJlZiIsInJvbGUiLCJzdHlsZSIsImJhY2tncm91bmRJbWFnZSIsImNvbmNhdCIsImRhbmdlcm91c2x5U2V0SW5uZXJIVE1MIiwiX19odG1sIiwieXVwIiwidXNlRm9ybVdpdGhWYWxpZGF0aW9uIiwiY3JlYXRlVG9rZW4iLCJBZG1pblRleHRGaWVsZCIsImluZ3JlZGllbnRRdWFudGl0eVNjaGVtYSIsImluZ3JlZGllbnRJZCIsIm51bWJlciIsInR5cGVFcnJvciIsInJlcXVpcmVkIiwiZW5RdWFudGl0eSIsInN0cmluZyIsIm1heCIsImZyUXVhbnRpdHkiLCJlc1F1YW50aXR5IiwiaXRRdWFudGl0eSIsInByZXBhcmVEZWZhdWx0SW5ncmVkaWVudFF1YW50aXR5IiwicGljdHVyZVBhdGgiLCJpbmdyZWRpZW50TmFtZSIsIl9lcnJvcnMkaW5ncmVkaWVudElkIiwiX2Vycm9ycyRlblF1YW50aXR5IiwiX2Vycm9ycyRmclF1YW50aXR5IiwiX2Vycm9ycyRlc1F1YW50aXR5IiwiX2Vycm9ycyRpdFF1YW50aXR5IiwiX3VzZUZvcm1XaXRoVmFsaWRhdGlvIiwiY29udHJvbCIsInNldEVycm9yIiwiZ2V0VmFsdWVzIiwid2F0Y2giLCJpc1N1Ym1pdHRpbmciLCJmb3JtRGF0YSIsImhhbmRsZVNlbGVjdEluZ3JlZGllbnQiLCJjbG9zZUluZ3JlZGllbnRGb3JtIiwiaW5ncmVkaWVudEZvcm1Jc09wZW4iLCJvcGVuSW5ncmVkaWVudEZvcm0iLCJoYW5kbGVFZGl0SW5ncmVkaWVudCIsIm1lc3NhZ2UiLCJtYXhMZW5ndGgiLCJ1c2VFZmZlY3QiLCJQbHVzQnV0dG9uIiwiSW5ncmVkaWVudHNRdWFudGl0aWVzSW5wdXQiLCJpbmdyZWRpZW50c1F1YW50aXRpZXMiLCJzZXRJbmdyZWRpZW50c1F1YW50aXRpZXMiLCJKU09OIiwicGFyc2UiLCJpbmdyZWRpZW50c1F1YW50aXRpZXNTdHJpbmciLCJzZXRJbmdyZWRpZW50c1F1YW50aXRpZXNTdHJpbmciLCJzdHJpbmdpZnkiLCJhZGRJbmdyZWRpZW50UXVhbnRpdHkiLCJfdG9Db25zdW1hYmxlQXJyYXkiLCJyZW1vdmVJbmdyZWRpZW50UXVhbnRpdHkiLCJmaWx0ZXIiLCJ1cGRhdGVJbmdyZWRpZW50UXVhbnRpdHkiLCJtYXAiLCJBZG1pblNob3dDYXJkUm93IiwicHJpY2VGb3JtYXRlciIsIlBhY2thZ2luZ0Nob2ljZXNGb3JtIiwiQWRtaW5QYWNrYWdpbmdDYXJkIiwicGFja2FnaW5nIiwicGFja2FnaW5nQ2hvaWNlcyIsInByb2R1Y3RJZCIsInNlbGVjdEFzQmFzZSIsInB1YmxpY1JlZiIsImJhc2UiLCJ0aXRsZSIsInByaXZhdGVSZWYiLCJlYW5Db2RlIiwiZW5MYWJlbCIsImxhbmciLCJmckxhYmVsIiwiZXNMYWJlbCIsIml0TGFiZWwiLCJjb25zdW1lclByaWNlSFQiLCJidXNpbmVzc1ByaWNlSFQiLCJ3ZWlnaHQiLCJleGNpc2VUYXgiLCJmclNvY2lhbFRheCIsInN0b2NrIiwib3duS2V5cyIsImVudW1lcmFibGVPbmx5IiwiZ2V0T3duUHJvcGVydHlTeW1ib2xzIiwic3ltYm9scyIsInN5bSIsImdldE93blByb3BlcnR5RGVzY3JpcHRvciIsIl9vYmplY3RTcHJlYWQiLCJzb3VyY2UiLCJfZGVmaW5lUHJvcGVydHkiLCJnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzIiwiZGVmaW5lUHJvcGVydGllcyIsIl90b1Byb3BlcnR5S2V5IiwiX3RvUHJpbWl0aXZlIiwiU3RyaW5nIiwiaW5wdXQiLCJoaW50IiwicHJpbSIsInRvUHJpbWl0aXZlIiwicmVzIiwiTnVtYmVyIiwiYXBpRmV0Y2giLCJwYWNrYWdpbmdTY2hlbWEiLCJwb3NpdGl2ZSIsIm1pbiIsImRlZmF1bHRQYWNrYWdpbmciLCJwcmVwYXJlRGVmYXVsdFBhY2thZ2luZyIsIl9lcnJvcnMkcHVibGljUmVmIiwiX2Vycm9ycyRwcml2YXRlUmVmIiwiX2Vycm9ycyRlYW5Db2RlIiwiX2Vycm9ycyRlbkxhYmVsIiwiX2Vycm9ycyRmckxhYmVsIiwiX2Vycm9ycyRlc0xhYmVsIiwiX2Vycm9ycyRpdExhYmVsIiwiX2Vycm9ycyRjb25zdW1lclByaWNlIiwiX2Vycm9ycyRidXNpbmVzc1ByaWNlIiwiX2Vycm9ycyR3ZWlnaHQiLCJfZXJyb3JzJGV4Y2lzZVRheCIsIl9lcnJvcnMkZnJTb2NpYWxUYXgiLCJfZXJyb3JzJHN0b2NrIiwiX3JlZiRwYWNrYWdpbmciLCJmaW5kIiwicCIsIk1hdGgiLCJyb3VuZCIsIlBhY2thZ2luZ0Nob2ljZXNJbnB1dCIsInNldFBhY2thZ2luZ0Nob2ljZXNTdHJpbmciLCJzZXRQYWNrYWdpbmdDaG9pY2VzIiwicGFja2FnaW5nQ2hvaWNlc1N0cmluZyIsInJlbW92ZVBhY2thZ2luZyIsImFkZFBhY2thZ2luZyIsIm5ld1BhY2thZ2luZyIsInVwZGF0ZVBhY2thZ2luZyIsImhhbmRsZVNlbGVjdEFzQmFzZSIsInBjIiwiU2l0ZUNvbmZpZyIsIkJ1dHRvbiIsIk9wdGlvbiIsIlNlbGVjdCIsIkZvcm1CdXR0b24iLCJ1c2VGZXRjaE91dCIsInQiLCJQdXJjaGFzZVN0YXR1c1VwZGF0ZXIiLCJpbml0aWFsU3RhdHVzIiwiX3VzZUZldGNoT3V0Iiwic2VuZERhdGEiLCJsb2FkaW5nIiwicmVzZXRJbmZvIiwicmVzZXRFcnJvciIsInN0YXR1cyIsInNldFN0YXR1cyIsImlzVXBkYXRpbmciLCJvcGVuVXBkYXRlIiwiY2xvc2VVcGRhdGUiLCJoYW5kbGVPcGVuVXBkYXRlIiwiZm9ybSIsIm5ld1N0YXR1cyIsInRyYWNraW5nIiwiY29uZmlybSIsImN1cnJlbnRUYXJnZXQiLCJGb3JtRGF0YSIsImdldCIsIlNUQVRVU19TRU5UIiwid2luZG93IiwicHJvbXB0IiwiYm9keSIsImZldGNoUmVzdWx0IiwiY2xvc2VWYWxpZGF0ZUJ1dHRvbiIsImhhbmRsZUNhbmNlbCIsIl91c2VPcGVuU3RhdGUzIiwiX3VzZU9wZW5TdGF0ZTQiLCJ2YWxpZGF0ZUJ1dHRvbk9wZW4iLCJvcGVuVmFsaWRhdGVCdXR0b24iLCJkZWZhdWx0VmFsdWUiLCJTVEFUVVNfUEVORElORyIsIlNUQVRVU19QQUlEIiwiU1RBVFVTX0RFTElWRVJFRCIsIlNUQVRVU19DQU5DRUxFRCIsImNob2ljZV92YWx1ZSIsImluZGV4IiwibnMiLCJSZXZpZXdNb2RlcmF0b3IiLCJzZXRJbmZvIiwiX2luZm8iLCJNT0RFUkFUSU9OX1NUQVRVU19QRU5ESU5HIiwiTU9ERVJBVElPTl9TVEFUVVNfUEVORElOR19MQUJFTCIsIk1PREVSQVRJT05fU1RBVFVTX0FDQ0VQVEVEIiwiTU9ERVJBVElPTl9TVEFUVVNfQUNDRVBURURfTEFCRUwiLCJNT0RFUkFUSU9OX1NUQVRVU19SRUZVU0VEIiwiTU9ERVJBVElPTl9TVEFUVVNfUkVGVVNFRF9MQUJFTCIsIml0ZW0iLCJyZWYiLCJTZWxlY3RlZEl0ZW1zTGlzdCIsIml0ZW1zIiwib25SZW1vdmUiLCJTZWxlY3RlZEl0ZW0iLCJTdGFuZGFyZEl0ZW1TZWxlY3RvciIsIlNlbGVjdExpbmtlZEl0ZW1zIiwiaW5kZXhFbmRwb2ludCIsInNlYXJjaEVuZHBvaW50Iiwic2VsZWN0ZWRJdGVtcyIsInNldFNlbGVjdGVkSXRlbXMiLCJsaXN0TG9hZGluZyIsInNldExpc3RMb2FkaW5nIiwiZGF0YSIsImhhbmRsZVNlbGVjdCIsImluY2x1ZGVkIiwiX2l0ZXJhdG9yIiwiX2NyZWF0ZUZvck9mSXRlcmF0b3JIZWxwZXIiLCJfc3RlcCIsInMiLCJsaW5rZWRJdGVtIiwiZiIsImhpZGRlbiIsIm11bHRpcGxlIiwidXNlRmV0Y2giLCJTZWxlY3RVbmlxdWVJdGVtIiwiX3JlZiRpdGVtSWQiLCJpdGVtSWQiLCJzZWxlY3RlZEl0ZW0iLCJzZXRTZWxlY3RlZEl0ZW0iLCJfdXNlRmV0Y2giLCJfdXNlRmV0Y2gyIiwiZGJJdGVtIiwiYWRkVXJsUGFyYW1zIiwiZW50cnlwb2ludCIsInRvRG9XaGVuU3VjY2VzcyIsInVybCIsIm9wdGlvbnMiLCJfYXJncyIsImhlYWRlcnMiLCJjb25zb2xlIiwicmVzZXRJdGVtcyIsIkxvYWRlciIsImNoaWxkcmVuIiwicHJvcHMiLCJfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMiLCJfZXhjbHVkZWQiLCJzdG9wUHJvcGFnYXRpb24iLCJoYW5kbGVLZXlEb3duIiwiX2V4dGVuZHMiLCJvbktleURvd24iLCJDbG9zZUljb24iLCJFZGl0SWNvbiIsIlBsdXNJY29uIiwiZm9yd2FyZFJlZiIsInVzZVJlZiIsImNyZWF0ZVBvcnRhbCIsIm1vZGFsUmVmIiwiX3JlZiRjbG9zZSIsIl9yZWYkYW5pbWF0ZWQiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJlbHQiLCJjbGFzc0xpc3QiLCJhZGQiLCJjb250YWluZXJSZWYiLCJoYW5kbGVDbG9zZSIsImN1cnJlbnQiLCJhZGRFdmVudExpc3RlbmVyIiwiaGFuZGxlU3RvcFByb3BhZ2F0aW9uIiwidXNlQ2FsbGJhY2siLCJUcmFzaEJ1dHRvbiIsInJlc2l6ZUltYWdlIiwidXNlRHJvcHpvbmUiLCJ1c2VUcmFuc2xhdGlvbiIsIl9yZWYkcmVzaXplV2lkdGgiLCJfcmVmJHJlc2l6ZUhlaWdodCIsIl9yZWYkZGVmYXVsdEJhc2U2NGltZyIsIl9yZWYkb25DaGFuZ2UiLCJfdXNlVHJhbnNsYXRpb24iLCJzZXRTZWxlY3RlZEltZyIsInNldEhpZGRlbkltZyIsInNlbGVjdGVkSW1nIiwiaGlkZGVuSW1nIiwiaGFuZGxlRGVsZXRlIiwib25Ecm9wIiwiYWNjZXB0ZWRGaWxlcyIsImltZyIsImluY2x1ZGVzIiwiYWNjZXB0ZWRfZm9ybWF0cyIsIm91dHB1dEZvcm1hdCIsInRhcmdldFdpZHRoIiwidGFyZ2V0SGVpZ2h0IiwiY3JvcCIsImI2NGltZyIsIl91c2VEcm9wem9uZSIsImdldFJvb3RQcm9wcyIsImdldElucHV0UHJvcHMiLCJtb3VzZUlzT3ZlciIsInNldE1vdXNlT3ZlciIsInNldE1vdXNlTGVhdmUiLCJvbk1vdXNlT3ZlciIsIm9uTW91c2VMZWF2ZSIsInhtbG5zIiwidmlld0JveCIsImZpbGwiLCJkIiwiZW5hYmxlQmFja2dyb3VuZCIsImZpbGxSdWxlIiwiVHJhc2hJY29uIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImNsb3NlT25UYWJEb3duIiwic2V0U2VsZWN0ZWQiLCJzdWdnZXN0IiwiY3JlYXRlUm9vdCIsImNoYW5nZUxhbmd1YWdlIiwiZ2V0RWxlbWVudEJ5SWQiLCJzZXNzaW9uU3RvcmFnZSIsInJlbW92ZUl0ZW0iLCJfaW5wdXQkcXVlcnlTZWxlY3RvciQiLCJfaW5wdXQkcXVlcnlTZWxlY3RvciIsIl9pbnB1dCRkYXRhc2V0IiwiX2lucHV0JGRhdGFzZXQyIiwicXVlcnlTZWxlY3RvciIsImlubmVySFRNTCIsInJvb3QiLCJkYXRhc2V0IiwiaW5kZXhlbmRwb2ludCIsInNlYXJjaGVuZHBvaW50IiwiX2lucHV0JHF1ZXJ5U2VsZWN0b3IkMiIsIl9pbnB1dCRxdWVyeVNlbGVjdG9yMiIsIml0ZW1pZCIsInByb2R1Y3RpZCIsInB1cmNoYXNlU3RhdHVzVXBkYXRlciIsInB1cmNoYXNlU3RhdHVzVXBkYXRlclJvb3QiLCJyZXZpZXdNb2RlcmF0b3IiLCJyZXZpZXdNb2RlcmF0b3JSb290IiwiX2VsdCRkYXRhc2V0JHJlc2l6ZXdpIiwiX2VsdCRkYXRhc2V0JHJlc2l6ZWhlIiwiX2VsdCRkYXRhc2V0JHZhbHVlIiwicGFyc2VJbnQiLCJyZXNpemV3aWR0aCIsInJlc2l6ZWhlaWdodCIsIm93bmVyY2xhc3MiLCJvd25lcmlkIiwicHJpY2UiLCJmb3JtYXRlciIsIkludGwiLCJOdW1iZXJGb3JtYXQiLCJnZXRMb2NhbGVPcHRpb24iLCJjdXJyZW5jeSIsImZvcm1hdCIsInJldmlld05vdGVGb3JtYXRlciIsInJldmlld05vdGUiLCJkaXN0YW5jZUZvcm1hdGVyIiwiZGlzdGFuY2UiLCJkaXN0YW5jZUluS20iLCJjb3VudCIsInRva2VuIiwiZmxvb3IiLCJyYW5kb20iLCJfcmVmJGxhbmciLCJUZXh0RmllbGQiLCJhc3NpZ24iLCJfb2JqZWN0RGVzdHJ1Y3R1cmluZ0VtcHR5Il0sInNvdXJjZVJvb3QiOiIifQ==
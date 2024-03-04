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

/***/ "./assets/Components/Admin/ProductFormReactBlock/PackagingChoicesInput/AdminPackagingCard.jsx":
/*!****************************************************************************************************!*\
  !*** ./assets/Components/Admin/ProductFormReactBlock/PackagingChoicesInput/AdminPackagingCard.jsx ***!
  \****************************************************************************************************/
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
/* harmony import */ var _UI_Button_CloseButton__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../../UI/Button/CloseButton */ "./assets/UI/Button/CloseButton.jsx");
/* harmony import */ var _styles_UI_Admin_Form_AdminShowCardRow__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../../styles/UI/Admin/Form/AdminShowCardRow */ "./assets/styles/UI/Admin/Form/AdminShowCardRow.jsx");
/* harmony import */ var _functions_formaters__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../../../functions/formaters */ "./assets/functions/formaters.js");
/* harmony import */ var _UI_Button_EditButton__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../../../UI/Button/EditButton */ "./assets/UI/Button/EditButton.jsx");
/* harmony import */ var _UI_Container_Modal__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../../../UI/Container/Modal */ "./assets/UI/Container/Modal.jsx");
/* harmony import */ var _CustomHook_state_useOpenState__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../../../../CustomHook/state/useOpenState */ "./assets/CustomHook/state/useOpenState.jsx");
/* harmony import */ var _PackagingChoicesForm__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./PackagingChoicesForm */ "./assets/Components/Admin/ProductFormReactBlock/PackagingChoicesInput/PackagingChoicesForm.jsx");
















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

/***/ "./assets/Components/Admin/ProductFormReactBlock/PackagingChoicesInput/PackagingChoicesForm.jsx":
/*!******************************************************************************************************!*\
  !*** ./assets/Components/Admin/ProductFormReactBlock/PackagingChoicesInput/PackagingChoicesForm.jsx ***!
  \******************************************************************************************************/
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
/* harmony import */ var _CustomHook_form_useFormWithValidation__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ../../../../CustomHook/form/useFormWithValidation */ "./assets/CustomHook/form/useFormWithValidation.jsx");
/* harmony import */ var _styles_UI_Admin_Form_AdminTextField__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ../../../../styles/UI/Admin/Form/AdminTextField */ "./assets/styles/UI/Admin/Form/AdminTextField.jsx");
/* harmony import */ var _functions_api__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ../../../../functions/api */ "./assets/functions/api.js");
/* harmony import */ var _PriceCalculator__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./PriceCalculator */ "./assets/Components/Admin/ProductFormReactBlock/PackagingChoicesInput/PriceCalculator.jsx");
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
  weight: yup__WEBPACK_IMPORTED_MODULE_39__.number().typeError('Cette valeur doit être un nombre').positive('Cette valeur doit être supérieure à zéro').required('Le poids (g) est obligatoire')
}).required();
var defaultPackaging = {
  publicRef: '',
  privateRef: '',
  enLabel: '',
  frLabel: '',
  esLabel: '',
  itLabel: '',
  supplyPriceHT: '',
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
    supplyPriceHT: packaging.supplyPriceHT / 100,
    consumerPriceHT: packaging.consumerPriceHT / 100,
    businessPriceHT: packaging.businessPriceHT / 100,
    exciseTax: packaging.exciseTax ? packaging.exciseTax / 100 : '',
    frSocialTax: packaging.frSocialTax ? packaging.frSocialTax / 100 : ''
  });
};
var PackagingChoicesForm = function PackagingChoicesForm(_ref) {
  var _errors$publicRef, _errors$privateRef, _errors$eanCode, _errors$enLabel, _errors$frLabel, _errors$esLabel, _errors$itLabel, _errors$supplyPriceHT, _errors$consumerPrice, _errors$businessPrice, _errors$exciseTax, _errors$frSocialTax, _errors$weight, _errors$stock;
  var onSubmitSuccess = _ref.onSubmitSuccess,
    close = _ref.close,
    packagingChoices = _ref.packagingChoices,
    productId = _ref.productId,
    vatLevel = _ref.vatLevel,
    _ref$packaging = _ref.packaging,
    packaging = _ref$packaging === void 0 ? null : _ref$packaging;
  var _useFormWithValidatio = (0,_CustomHook_form_useFormWithValidation__WEBPACK_IMPORTED_MODULE_40__.useFormWithValidation)(packagingSchema, prepareDefaultPackaging(packaging)),
    handleSubmit = _useFormWithValidatio.handleSubmit,
    control = _useFormWithValidatio.control,
    errors = _useFormWithValidatio.errors,
    setError = _useFormWithValidatio.setError,
    setValue = _useFormWithValidatio.setValue,
    watch = _useFormWithValidatio.watch,
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
              _context.next = 18;
              break;
            }
            _context.prev = 4;
            _context.next = 7;
            return (0,_functions_api__WEBPACK_IMPORTED_MODULE_42__.apiFetch)('/admin/api/packaging/validation/uniquePublicRef/' + (productId !== null && productId !== void 0 ? productId : '0') + '/' + formData.publicRef);
          case 7:
            //dans create productId est undefined --> on envoie 0
            //priceTransformer
            formData.supplyPriceHT = Math.round(formData.supplyPriceHT * 100);
            formData.consumerPriceHT = Math.round(formData.consumerPriceHT * 100);
            formData.businessPriceHT = Math.round(formData.businessPriceHT * 100);
            formData.exciseTax = Math.round(formData.exciseTax * 100);
            formData.frSocialTax = Math.round(formData.frSocialTax * 100);
            onSubmitSuccess(formData);
            close();
            _context.next = 18;
            break;
          case 16:
            _context.prev = 16;
            _context.t0 = _context["catch"](4);
          case 18:
            setError('publicRef', {
              type: 'custom',
              message: 'La réf. publique "' + formData.publicRef + '" est déjà utilisée'
            });
            setLoading(false);
          case 20:
          case "end":
            return _context.stop();
        }
      }, _callee, null, [[4, 16]]);
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
    name: "supplyPriceHT",
    error: (_errors$supplyPriceHT = errors.supplyPriceHT) === null || _errors$supplyPriceHT === void 0 ? void 0 : _errors$supplyPriceHT.message,
    maxLength: "200"
  }, "Prix d'achat (HT)"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_38___default().createElement(_PriceCalculator__WEBPACK_IMPORTED_MODULE_43__.PriceCalculator, {
    setValue: setValue,
    vatLevel: vatLevel,
    supplyPriceHT: watch('supplyPriceHT'),
    consumerPriceHT: watch('consumerPriceHT'),
    businessPriceHT: watch('businessPriceHT'),
    consumerPriceError: (_errors$consumerPrice = errors.consumerPriceHT) === null || _errors$consumerPrice === void 0 ? void 0 : _errors$consumerPrice.message,
    businessPriceError: (_errors$businessPrice = errors.businessPriceHT) === null || _errors$businessPrice === void 0 ? void 0 : _errors$businessPrice.message
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_38___default().createElement(_styles_UI_Admin_Form_AdminTextField__WEBPACK_IMPORTED_MODULE_41__.AdminTextField, {
    type: "number",
    control: control,
    name: "exciseTax",
    error: (_errors$exciseTax = errors.exciseTax) === null || _errors$exciseTax === void 0 ? void 0 : _errors$exciseTax.message,
    maxLength: "200"
  }, "Droits d'accise (EUR)"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_38___default().createElement(_styles_UI_Admin_Form_AdminTextField__WEBPACK_IMPORTED_MODULE_41__.AdminTextField, {
    type: "number",
    control: control,
    name: "frSocialTax",
    error: (_errors$frSocialTax = errors.frSocialTax) === null || _errors$frSocialTax === void 0 ? void 0 : _errors$frSocialTax.message,
    maxLength: "200"
  }, "Cotisation S\xE9curit\xE9 Sociale (France) (EUR)"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_38___default().createElement(_styles_UI_Admin_Form_AdminTextField__WEBPACK_IMPORTED_MODULE_41__.AdminTextField, {
    type: "number",
    control: control,
    name: "weight",
    error: (_errors$weight = errors.weight) === null || _errors$weight === void 0 ? void 0 : _errors$weight.message,
    maxLength: "200"
  }, "Poids (g) *"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_38___default().createElement(_styles_UI_Admin_Form_AdminTextField__WEBPACK_IMPORTED_MODULE_41__.AdminTextField, {
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

/***/ "./assets/Components/Admin/ProductFormReactBlock/PackagingChoicesInput/PriceCalculator.jsx":
/*!*************************************************************************************************!*\
  !*** ./assets/Components/Admin/ProductFormReactBlock/PackagingChoicesInput/PriceCalculator.jsx ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PriceCalculator": () => (/* binding */ PriceCalculator)
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
/* harmony import */ var core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! core-js/modules/es.symbol.to-primitive.js */ "./node_modules/core-js/modules/es.symbol.to-primitive.js");
/* harmony import */ var core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_28___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_28__);
/* harmony import */ var core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! core-js/modules/es.date.to-primitive.js */ "./node_modules/core-js/modules/es.date.to-primitive.js");
/* harmony import */ var core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_29___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_29__);
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! core-js/modules/es.number.constructor.js */ "./node_modules/core-js/modules/es.number.constructor.js");
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_30___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_30__);
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! core-js/modules/es.object.keys.js */ "./node_modules/core-js/modules/es.object.keys.js");
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_31___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_31__);
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! core-js/modules/es.array.filter.js */ "./node_modules/core-js/modules/es.array.filter.js");
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_32___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_32__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptor.js */ "./node_modules/core-js/modules/es.object.get-own-property-descriptor.js");
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_33___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_33__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptors.js */ "./node_modules/core-js/modules/es.object.get-own-property-descriptors.js");
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_34___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_34__);
/* harmony import */ var core_js_modules_es_object_define_properties_js__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! core-js/modules/es.object.define-properties.js */ "./node_modules/core-js/modules/es.object.define-properties.js");
/* harmony import */ var core_js_modules_es_object_define_properties_js__WEBPACK_IMPORTED_MODULE_35___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_properties_js__WEBPACK_IMPORTED_MODULE_35__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_36___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_36__);
/* harmony import */ var _functions_api__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ../../../../functions/api */ "./assets/functions/api.js");
/* harmony import */ var _functions_price_vatCalculator__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ../../../../functions/price/vatCalculator */ "./assets/functions/price/vatCalculator.js");
/* harmony import */ var _functions_formaters__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ../../../../functions/formaters */ "./assets/functions/formaters.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }




































function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }




var PriceCalculator = function PriceCalculator(_ref) {
  var setValue = _ref.setValue,
    supplyPriceHT = _ref.supplyPriceHT,
    vatLevel = _ref.vatLevel,
    businessPriceHT = _ref.businessPriceHT,
    consumerPriceHT = _ref.consumerPriceHT,
    businessPriceError = _ref.businessPriceError,
    consumerPriceError = _ref.consumerPriceError;
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_36__.useState)(null),
    _useState2 = _slicedToArray(_useState, 2),
    frVatRate = _useState2[0],
    setFrVatRate = _useState2[1];
  (0,react__WEBPACK_IMPORTED_MODULE_36__.useEffect)(function () {
    _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      var vatRate;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return (0,_functions_api__WEBPACK_IMPORTED_MODULE_37__.apiFetch)('/admin/api/vatRates/getFr/' + vatLevel);
          case 2:
            vatRate = _context.sent;
            setFrVatRate(vatRate);
          case 4:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }))();
  }, []);
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_36__.useState)(''),
    _useState4 = _slicedToArray(_useState3, 2),
    consumerPriceTTCFR = _useState4[0],
    setConsumerPriceTTCFR = _useState4[1];
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_36__.useState)(''),
    _useState6 = _slicedToArray(_useState5, 2),
    businessPriceTTCFR = _useState6[0],
    setBusinessPriceTTCFR = _useState6[1];
  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_36__.useState)(null),
    _useState8 = _slicedToArray(_useState7, 2),
    margin = _useState8[0],
    setMargin = _useState8[1];
  var handleChange = function handleChange(e) {
    if (e.target.name === 'consumerPriceTTCFR') {
      setConsumerPriceTTCFR(e.target.value);
    } else if (e.target.name === 'businessPriceTTCFR') {
      setBusinessPriceTTCFR(e.target.value);
    }
  };
  (0,react__WEBPACK_IMPORTED_MODULE_36__.useEffect)(function () {
    //calculer prix HT
    if (frVatRate) {
      var priceHT = (0,_functions_price_vatCalculator__WEBPACK_IMPORTED_MODULE_38__.calcPriceHT)(consumerPriceTTCFR, frVatRate);
      setValue('consumerPriceHT', priceHT);
      //si on a un supplyPrice, on calcule marge
      if (supplyPriceHT) {
        var marginAmount = priceHT - supplyPriceHT;
        var marginRate = marginAmount / supplyPriceHT * 100;
        setMargin(function (margin) {
          return _objectSpread(_objectSpread({}, margin), {}, {
            consumer: {
              amount: marginAmount,
              rate: Math.round(marginRate * 100) / 100 //pour arrondir avec 2 décimales
            }
          });
        });
      }
    }
  }, [consumerPriceTTCFR]);
  (0,react__WEBPACK_IMPORTED_MODULE_36__.useEffect)(function () {
    //calculer prix HT
    if (frVatRate) {
      var priceHT = (0,_functions_price_vatCalculator__WEBPACK_IMPORTED_MODULE_38__.calcPriceHT)(businessPriceTTCFR, frVatRate);
      setValue('businessPriceHT', priceHT);
      //si on a un supplyPrice, on calcule marge
      //si on a un supplyPrice, on calcule marge
      if (supplyPriceHT) {
        var marginAmount = priceHT - supplyPriceHT;
        var marginRate = marginAmount / supplyPriceHT * 100;
        setMargin(function (margin) {
          return _objectSpread(_objectSpread({}, margin), {}, {
            business: {
              amount: marginAmount,
              rate: Math.round(marginRate * 100) / 100 //pour arrondir avec 2 décimales
            }
          });
        });
      }
    }
  }, [businessPriceTTCFR]);
  return frVatRate ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_36___default().createElement((react__WEBPACK_IMPORTED_MODULE_36___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_36___default().createElement("div", {
    className: "admin-form-row admin-modal-form-row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_36___default().createElement("div", {
    className: "admin-form-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_36___default().createElement("label", {
    htmlFor: "consumerPriceTTCFR",
    className: "admin-form-label"
  }, "Prix public (TTC France) *"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_36___default().createElement("input", {
    id: "consumerPriceTTCFR",
    name: "consumerPriceTTCFR",
    type: "number",
    className: "admin-form-control",
    value: consumerPriceTTCFR,
    onChange: handleChange
  }), consumerPriceError && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_36___default().createElement("div", {
    className: "form-error"
  }, consumerPriceError), consumerPriceHT && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_36___default().createElement("div", {
    className: "admin-form-info strong"
  }, (0,_functions_formaters__WEBPACK_IMPORTED_MODULE_39__.priceFormater)(consumerPriceHT * 100), " HT"), (margin === null || margin === void 0 ? void 0 : margin.consumer) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_36___default().createElement("div", {
    className: "admin-form-info strong"
  }, "Marge : ", margin.consumer.rate, " % (", (0,_functions_formaters__WEBPACK_IMPORTED_MODULE_39__.priceFormater)(margin.consumer.amount * 100), ")")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_36___default().createElement("div", {
    className: "admin-form-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_36___default().createElement("label", {
    htmlFor: "businessPriceTTCFR",
    className: "admin-form-label"
  }, "Prix pro (TTC France) *"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_36___default().createElement("input", {
    id: "businessPriceTTCFR",
    name: "businessPriceTTCFR",
    type: "number",
    className: "admin-form-control",
    value: businessPriceTTCFR,
    onChange: handleChange
  }), businessPriceError && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_36___default().createElement("div", {
    className: "form-error"
  }, businessPriceError), businessPriceHT && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_36___default().createElement("div", {
    className: "admin-form-info strong"
  }, (0,_functions_formaters__WEBPACK_IMPORTED_MODULE_39__.priceFormater)(businessPriceHT * 100), " HT"), (margin === null || margin === void 0 ? void 0 : margin.business) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_36___default().createElement("div", {
    className: "admin-form-info strong"
  }, "Marge : ", margin.business.rate, " % (", (0,_functions_formaters__WEBPACK_IMPORTED_MODULE_39__.priceFormater)(margin.business.amount * 100), ")")))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_36___default().createElement("div", {
    className: "admin-form-info"
  }, "Chargement du calculateur de prix...");
};

/***/ }),

/***/ "./assets/Components/Admin/ProductFormReactBlock/PackagingChoicesInput/index.jsx":
/*!***************************************************************************************!*\
  !*** ./assets/Components/Admin/ProductFormReactBlock/PackagingChoicesInput/index.jsx ***!
  \***************************************************************************************/
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
/* harmony import */ var _AdminPackagingCard__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./AdminPackagingCard */ "./assets/Components/Admin/ProductFormReactBlock/PackagingChoicesInput/AdminPackagingCard.jsx");
/* harmony import */ var _PackagingChoicesForm__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./PackagingChoicesForm */ "./assets/Components/Admin/ProductFormReactBlock/PackagingChoicesInput/PackagingChoicesForm.jsx");
/* harmony import */ var _UI_Button_PlusButton__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../../../../UI/Button/PlusButton */ "./assets/UI/Button/PlusButton.jsx");
/* harmony import */ var _UI_Container_Modal__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../../../../UI/Container/Modal */ "./assets/UI/Container/Modal.jsx");
/* harmony import */ var _CustomHook_state_useOpenState__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../../../../CustomHook/state/useOpenState */ "./assets/CustomHook/state/useOpenState.jsx");
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
    productId = _ref.productId,
    vatLevel = _ref.vatLevel;
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
  var _useOpenState = (0,_CustomHook_state_useOpenState__WEBPACK_IMPORTED_MODULE_25__.useOpenState)(false),
    _useOpenState2 = _slicedToArray(_useOpenState, 3),
    formIsOpen = _useOpenState2[0],
    openForm = _useOpenState2[1],
    closeForm = _useOpenState2[2];
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_20___default().createElement("div", {
    className: "admin-form-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_20___default().createElement("label", null, "Conditionnements *"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_20___default().createElement("div", {
    className: "admin-select-list"
  }, packagingChoices.map(function (packaging) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_20___default().createElement(_AdminPackagingCard__WEBPACK_IMPORTED_MODULE_21__.AdminPackagingCard, {
      key: packaging.publicRef,
      packaging: packaging,
      remove: removePackaging,
      update: updatePackaging,
      packagingChoices: packagingChoices,
      productId: productId,
      selectAsBase: handleSelectAsBase
    });
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_20___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_20___default().createElement(_UI_Button_PlusButton__WEBPACK_IMPORTED_MODULE_23__.PlusButton, {
    className: "admin-add-button",
    onClick: openForm
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_20___default().createElement(_UI_Container_Modal__WEBPACK_IMPORTED_MODULE_24__.Modal, {
    isOpen: formIsOpen,
    close: closeForm,
    animated: false,
    additionalClass: "large admin-form-modal"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_20___default().createElement(_PackagingChoicesForm__WEBPACK_IMPORTED_MODULE_22__.PackagingChoicesForm, {
    onSubmitSuccess: addPackaging,
    close: closeForm,
    packagingChoices: packagingChoices,
    productId: productId,
    vatLevel: vatLevel
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_20___default().createElement("input", {
    type: "hidden",
    name: name,
    value: packagingChoicesString
  }));
};

/***/ }),

/***/ "./assets/Components/Admin/ProductFormReactBlock/index.jsx":
/*!*****************************************************************!*\
  !*** ./assets/Components/Admin/ProductFormReactBlock/index.jsx ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductFormReactBlock": () => (/* binding */ ProductFormReactBlock)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.map.js */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_entries_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.entries.js */ "./node_modules/core-js/modules/es.object.entries.js");
/* harmony import */ var core_js_modules_es_object_entries_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_entries_js__WEBPACK_IMPORTED_MODULE_1__);
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
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.array.from.js */ "./node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.regexp.test.js */ "./node_modules/core-js/modules/es.regexp.test.js");
/* harmony import */ var core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.error.cause.js */ "./node_modules/core-js/modules/es.error.cause.js");
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/es.error.to-string.js */ "./node_modules/core-js/modules/es.error.to-string.js");
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _PackagingChoicesInput__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./PackagingChoicesInput */ "./assets/Components/Admin/ProductFormReactBlock/PackagingChoicesInput/index.jsx");
/* harmony import */ var _UI_Form_Select__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../../UI/Form/Select */ "./assets/UI/Form/Select.jsx");
/* harmony import */ var _Config_VatLevels__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../../Config/VatLevels */ "./assets/Config/VatLevels.js");


















function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }




var ProductFormReactBlock = function ProductFormReactBlock(_ref) {
  var productId = _ref.productId,
    packagingChoices = _ref.packagingChoices,
    vatLevel = _ref.vatLevel,
    packagingChoicesName = _ref.packagingChoicesName,
    vatLevelName = _ref.vatLevelName;
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_18__.useState)(vatLevel !== null && vatLevel !== void 0 ? vatLevel : null),
    _useState2 = _slicedToArray(_useState, 2),
    currentVatLevel = _useState2[0],
    setCurrentVatLevel = _useState2[1];
  var handleChange = function handleChange(e) {
    setCurrentVatLevel(e.target.value);
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement((react__WEBPACK_IMPORTED_MODULE_18___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement("div", {
    className: "admin-form-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement("div", {
    className: "admin-form-label"
  }, "Niveau de TVA *"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement(_UI_Form_Select__WEBPACK_IMPORTED_MODULE_20__.Select, {
    className: "admin-form-control",
    name: vatLevelName,
    value: currentVatLevel,
    onChange: handleChange
  }, Object.entries(_Config_VatLevels__WEBPACK_IMPORTED_MODULE_21__.VatLevels.ADMIN_CHOICES).map(function (_ref2) {
    var _ref3 = _slicedToArray(_ref2, 2),
      label = _ref3[0],
      value = _ref3[1];
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement(_UI_Form_Select__WEBPACK_IMPORTED_MODULE_20__.Option, {
      key: value,
      value: value
    }, label);
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement("div", {
    className: "admin-form-group",
    style: {
      marginTop: '20px'
    }
  }, currentVatLevel && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement(_PackagingChoicesInput__WEBPACK_IMPORTED_MODULE_19__.PackagingChoicesInput, {
    name: packagingChoicesName,
    value: packagingChoices,
    productId: productId,
    vatLevel: currentVatLevel
  })));
};

/***/ }),

/***/ "./assets/Components/Admin/PurchaseShippingStatusUpdater/index.jsx":
/*!*************************************************************************!*\
  !*** ./assets/Components/Admin/PurchaseShippingStatusUpdater/index.jsx ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PurchaseShippingStatusUpdater": () => (/* binding */ PurchaseShippingStatusUpdater)
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
/* harmony import */ var _UI_Form_Select__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ../../../UI/Form/Select */ "./assets/UI/Form/Select.jsx");
/* harmony import */ var _Config_SiteConfig__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ../../../Config/SiteConfig */ "./assets/Config/SiteConfig.js");
/* harmony import */ var _functions_api__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ../../../functions/api */ "./assets/functions/api.js");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");
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





var PurchaseShippingStatusUpdater = function PurchaseShippingStatusUpdater(_ref) {
  var shippingInfoId = _ref.shippingInfoId,
    initialStatus = _ref.initialStatus;
  var _useTranslation = (0,react_i18next__WEBPACK_IMPORTED_MODULE_32__.useTranslation)('configs'),
    t = _useTranslation.t;
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
    error = _useState6[0],
    setError = _useState6[1];
  var handleChange = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(e) {
      var _status;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            if (!(isLoading || !confirm('Passer le statut à "' + (t(e.target.value) + '" ? Attention, la mise à jour du statut est irreversible, et des notifications seront envoyées au client et au vendeur.')))) {
              _context.next = 2;
              break;
            }
            return _context.abrupt("return");
          case 2:
            setLoading(true);
            setError(null);
            _context.prev = 4;
            _context.next = 7;
            return (0,_functions_api__WEBPACK_IMPORTED_MODULE_31__.apiPreparedFetch)('/admin/api/purchase/updateShippingStatus/' + shippingInfoId, e.target.value, 'POST');
          case 7:
            _status = _context.sent;
            setStatus(_status);
            _context.next = 14;
            break;
          case 11:
            _context.prev = 11;
            _context.t0 = _context["catch"](4);
            setError('Erreur serveur');
          case 14:
            setLoading(false);
          case 15:
          case "end":
            return _context.stop();
        }
      }, _callee, null, [[4, 11]]);
    }));
    return function handleChange(_x2) {
      return _ref2.apply(this, arguments);
    };
  }();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_28___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_28___default().createElement(_UI_Form_Select__WEBPACK_IMPORTED_MODULE_29__.Select, {
    className: "admin-form-control",
    name: "shippingStatus",
    onChange: handleChange,
    value: status
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_28___default().createElement(_UI_Form_Select__WEBPACK_IMPORTED_MODULE_29__.Option, {
    value: _Config_SiteConfig__WEBPACK_IMPORTED_MODULE_30__.SiteConfig.SHIPPING_STATUS_PENDING
  }, t(_Config_SiteConfig__WEBPACK_IMPORTED_MODULE_30__.SiteConfig.SHIPPING_STATUS_PENDING)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_28___default().createElement(_UI_Form_Select__WEBPACK_IMPORTED_MODULE_29__.Option, {
    value: _Config_SiteConfig__WEBPACK_IMPORTED_MODULE_30__.SiteConfig.SHIPPING_STATUS_SENT
  }, t(_Config_SiteConfig__WEBPACK_IMPORTED_MODULE_30__.SiteConfig.SHIPPING_STATUS_SENT)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_28___default().createElement(_UI_Form_Select__WEBPACK_IMPORTED_MODULE_29__.Option, {
    value: _Config_SiteConfig__WEBPACK_IMPORTED_MODULE_30__.SiteConfig.SHIPPING_STATUS_DELIVERED
  }, t(_Config_SiteConfig__WEBPACK_IMPORTED_MODULE_30__.SiteConfig.SHIPPING_STATUS_DELIVERED)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_28___default().createElement(_UI_Form_Select__WEBPACK_IMPORTED_MODULE_29__.Option, {
    value: _Config_SiteConfig__WEBPACK_IMPORTED_MODULE_30__.SiteConfig.SHIPPING_STATUS_CANCELED
  }, t(_Config_SiteConfig__WEBPACK_IMPORTED_MODULE_30__.SiteConfig.SHIPPING_STATUS_CANCELED)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_28___default().createElement(_UI_Form_Select__WEBPACK_IMPORTED_MODULE_29__.Option, {
    value: _Config_SiteConfig__WEBPACK_IMPORTED_MODULE_30__.SiteConfig.SHIPPING_STATUS_RETURN_SENT
  }, t(_Config_SiteConfig__WEBPACK_IMPORTED_MODULE_30__.SiteConfig.SHIPPING_STATUS_RETURN_SENT)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_28___default().createElement(_UI_Form_Select__WEBPACK_IMPORTED_MODULE_29__.Option, {
    value: _Config_SiteConfig__WEBPACK_IMPORTED_MODULE_30__.SiteConfig.SHIPPING_STATUS_RETURN_DELIVERED
  }, t(_Config_SiteConfig__WEBPACK_IMPORTED_MODULE_30__.SiteConfig.SHIPPING_STATUS_RETURN_DELIVERED))), error && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_28___default().createElement("div", {
    className: "admin-form-error"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_28___default().createElement("ul", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_28___default().createElement("li", null, serverError))), isLoading && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_28___default().createElement("div", {
    className: "admin-form-info"
  }, "Chargement..."));
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

/***/ "./assets/Config/VatLevels.js":
/*!************************************!*\
  !*** ./assets/Config/VatLevels.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VatLevels": () => (/* binding */ VatLevels)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol.to-primitive.js */ "./node_modules/core-js/modules/es.symbol.to-primitive.js");
/* harmony import */ var core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.date.to-primitive.js */ "./node_modules/core-js/modules/es.date.to-primitive.js");
/* harmony import */ var core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.error.cause.js */ "./node_modules/core-js/modules/es.error.cause.js");
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.error.to-string.js */ "./node_modules/core-js/modules/es.error.to-string.js");
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.number.constructor.js */ "./node_modules/core-js/modules/es.number.constructor.js");
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_12__);
var _defineProperty2;













function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var VatLevels = /*#__PURE__*/_createClass(function VatLevels() {
  _classCallCheck(this, VatLevels);
});
_defineProperty(VatLevels, "STANDARD", 'vat_level_standard');
_defineProperty(VatLevels, "PARKING", 'vat_level_parking');
_defineProperty(VatLevels, "REDUCE_1", 'vat_level_reduce_1');
_defineProperty(VatLevels, "REDUCE_2", 'vat_level_reduce_2');
_defineProperty(VatLevels, "SUPER_REDUCE", 'vat_level_super_reduce');
_defineProperty(VatLevels, "ZERO", 'vat_level_zero');
_defineProperty(VatLevels, "CHOICES", [VatLevels.STANDARD, VatLevels.PARKING, VatLevels.REDUCE_1, VatLevels.REDUCE_2, VatLevels.SUPER_REDUCE, VatLevels.ZERO]);
_defineProperty(VatLevels, "ADMIN_CHOICES", (_defineProperty2 = {}, _defineProperty(_defineProperty2, 'Taux standard', VatLevels.STANDARD), _defineProperty(_defineProperty2, 'Taux parking', VatLevels.PARKING), _defineProperty(_defineProperty2, 'Taux réduit 1', VatLevels.REDUCE_1), _defineProperty(_defineProperty2, 'Taux réduit 2', VatLevels.REDUCE_2), _defineProperty(_defineProperty2, 'Taux super-réduit', VatLevels.SUPER_REDUCE), _defineProperty(_defineProperty2, 'Taux zéro', VatLevels.ZERO), _defineProperty2));

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

/***/ "./assets/UI/Form/Select.jsx":
/*!***********************************!*\
  !*** ./assets/UI/Form/Select.jsx ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Option": () => (/* binding */ Option),
/* harmony export */   "Select": () => (/* binding */ Select),
/* harmony export */   "SelectControlled": () => (/* binding */ SelectControlled)
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
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-hook-form */ "./node_modules/react-hook-form/dist/index.esm.mjs");
/* harmony import */ var _Icon_ExpandMoreIcon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Icon/ExpandMoreIcon */ "./assets/UI/Icon/ExpandMoreIcon.jsx");





var _excluded = ["children", "name", "value", "onChange", "errors"],
  _excluded2 = ["children", "control", "name", "error", "additionalClass", "onChange", "label"];
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



var Select = function Select(_ref) {
  var children = _ref.children,
    name = _ref.name,
    value = _ref.value,
    onChange = _ref.onChange,
    errors = _ref.errors,
    props = _objectWithoutProperties(_ref, _excluded);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement("div", {
    className: 'form-group select-group' + (errors ? ' is-invalid' : '')
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement("select", _extends({
    className: "form-select",
    name: name,
    value: value,
    onChange: onChange
  }, props), children));
};
var Option = function Option(_ref2) {
  var children = _ref2.children,
    value = _ref2.value;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement("option", {
    className: "form-option",
    value: value
  }, children);
};
var SelectControlled = function SelectControlled(_ref3) {
  var children = _ref3.children,
    control = _ref3.control,
    name = _ref3.name,
    error = _ref3.error,
    additionalClass = _ref3.additionalClass,
    _ref3$onChange = _ref3.onChange,
    onChange = _ref3$onChange === void 0 ? null : _ref3$onChange,
    _ref3$label = _ref3.label,
    label = _ref3$label === void 0 ? null : _ref3$label,
    props = _objectWithoutProperties(_ref3, _excluded2);
  var _useController = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_8__.useController)({
      name: name,
      control: control
    }),
    field = _useController.field;
  var handleChange = function handleChange(e) {
    if (onChange) {
      onChange(e.target.value);
    }
    field.onChange(e);
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement("div", {
    className: "form-group select-group"
  }, label && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement("label", {
    className: "form-label",
    htmlFor: name
  }, label), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement("div", {
    className: "form-select-wrapper"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement("select", _extends({
    id: name,
    className: 'form-select' + (additionalClass ? ' ' + additionalClass : ''),
    ref: field.ref,
    onChange: handleChange,
    value: field.value,
    name: field.name,
    onBlur: field.onBlur,
    onFocus: field.onFocus
  }, props), children), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement(_Icon_ExpandMoreIcon__WEBPACK_IMPORTED_MODULE_7__.ExpandMoreIcon, {
    className: "form-select-arrow"
  })), error && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement("div", {
    className: "form-error"
  }, error));
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

/***/ "./assets/UI/Icon/ExpandMoreIcon.jsx":
/*!*******************************************!*\
  !*** ./assets/UI/Icon/ExpandMoreIcon.jsx ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ExpandMoreIcon": () => (/* binding */ ExpandMoreIcon)
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

var ExpandMoreIcon = function ExpandMoreIcon(_ref) {
  var additionalClass = _ref.additionalClass,
    props = _objectWithoutProperties(_ref, _excluded);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement("svg", _extends({
    className: 'i-expand-more' + (additionalClass ? ' ' + additionalClass : '')
  }, props, {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 490.688 490.688"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement("path", {
    fill: "currentColor",
    d: "M472.328,120.529L245.213,347.665L18.098,120.529c-4.237-4.093-10.99-3.975-15.083,0.262\r c-3.992,4.134-3.992,10.687,0,14.82l234.667,234.667c4.165,4.164,10.917,4.164,15.083,0l234.667-234.667\r c4.237-4.093,4.354-10.845,0.262-15.083c-4.093-4.237-10.845-4.354-15.083-0.262c-0.089,0.086-0.176,0.173-0.262,0.262\r L472.328,120.529z"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement("path", {
    fill: "currentColor",
    d: "M245.213,373.415c-2.831,0.005-5.548-1.115-7.552-3.115L2.994,135.633c-4.093-4.237-3.975-10.99,0.262-15.083\r c4.134-3.992,10.687-3.992,14.82,0l227.136,227.115l227.115-227.136c4.093-4.237,10.845-4.354,15.083-0.262\r c4.237,4.093,4.354,10.845,0.262,15.083c-0.086,0.089-0.173,0.176-0.262,0.262L252.744,370.279\r C250.748,372.281,248.039,373.408,245.213,373.415z"
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
/* harmony import */ var _Components_Admin_PurchaseShippingStatusUpdater__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../Components/Admin/PurchaseShippingStatusUpdater */ "./assets/Components/Admin/PurchaseShippingStatusUpdater/index.jsx");
/* harmony import */ var _Components_Admin_ReviewModerator__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../Components/Admin/ReviewModerator */ "./assets/Components/Admin/ReviewModerator/index.jsx");
/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./i18n */ "./assets/entrypoints/i18n.js");
/* harmony import */ var _Components_Admin_IngredientsQuantitiesInput__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ../Components/Admin/IngredientsQuantitiesInput */ "./assets/Components/Admin/IngredientsQuantitiesInput/index.jsx");
/* harmony import */ var _Components_Admin_SelectLinkedItems__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ../Components/Admin/SelectLinkedItems */ "./assets/Components/Admin/SelectLinkedItems/index.jsx");
/* harmony import */ var _Components_Admin_AdminPictureUpload__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ../Components/Admin/AdminPictureUpload */ "./assets/Components/Admin/AdminPictureUpload/index.jsx");
/* harmony import */ var _Components_Admin_AdminAnswerControl__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ../Components/Admin/AdminAnswerControl */ "./assets/Components/Admin/AdminAnswerControl/index.jsx");
/* harmony import */ var _Components_Admin_ProductFormReactBlock_PackagingChoicesInput__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ../Components/Admin/ProductFormReactBlock/PackagingChoicesInput */ "./assets/Components/Admin/ProductFormReactBlock/PackagingChoicesInput/index.jsx");
/* harmony import */ var _Components_Admin_SelectUniqueItem__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ../Components/Admin/SelectUniqueItem */ "./assets/Components/Admin/SelectUniqueItem/index.jsx");
/* harmony import */ var _Components_Admin_ProductFormReactBlock__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ../Components/Admin/ProductFormReactBlock */ "./assets/Components/Admin/ProductFormReactBlock/index.jsx");





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

//product form react block : vatLevel + packagingChoices
if (document.getElementById('product-form-react-block')) {
  var block = document.getElementById('product-form-react-block');
  var root = (0,react_dom_client__WEBPACK_IMPORTED_MODULE_23__.createRoot)(block);
  root.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_22___default().createElement(_Components_Admin_ProductFormReactBlock__WEBPACK_IMPORTED_MODULE_33__.ProductFormReactBlock, {
    productId: block.dataset.productid,
    packagingChoices: block.dataset.packagingchoices,
    vatLevel: block.dataset.vatlevel,
    packagingChoicesName: block.dataset.packagingchoicesname,
    vatLevelName: block.dataset.vatlevelname
  }));
}
document.querySelectorAll('.purchase-shipping-status-updater').forEach(function (purchaseStatusUpdater) {
  var purchaseStatusUpdaterRoot = (0,react_dom_client__WEBPACK_IMPORTED_MODULE_23__.createRoot)(purchaseStatusUpdater);
  purchaseStatusUpdaterRoot.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_22___default().createElement(_Components_Admin_PurchaseShippingStatusUpdater__WEBPACK_IMPORTED_MODULE_24__.PurchaseShippingStatusUpdater, {
    shippingInfoId: purchaseStatusUpdater.dataset.shippinginfoid,
    initialStatus: purchaseStatusUpdater.dataset.currentstatus
  }));
});
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
  var input = document.getElementById('ingredients-quantities-input');
  var _root = (0,react_dom_client__WEBPACK_IMPORTED_MODULE_23__.createRoot)(input);
  _root.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_22___default().createElement(_Components_Admin_IngredientsQuantitiesInput__WEBPACK_IMPORTED_MODULE_27__.IngredientsQuantitiesInput, {
    name: input.dataset.name,
    value: input.dataset.value
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

/***/ "./assets/functions/price/vatCalculator.js":
/*!*************************************************!*\
  !*** ./assets/functions/price/vatCalculator.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "calcPriceHT": () => (/* binding */ calcPriceHT)
/* harmony export */ });
/**
 * 
 * @param {number} priceTTC
 * @param {number} vatRate (en %) 
 * @returns 
 */
var calcPriceHT = function calcPriceHT(priceTTC, vatRate) {
  //prix non arrondi
  var price = priceTTC / (1 + vatRate / 100);
  //on retourne le prix arrondi
  return Math.round(price * 100) / 100;
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
/******/ __webpack_require__.O(0, ["vendors-node_modules_core-js_modules_es_array_concat_js-node_modules_core-js_modules_es_array-a9bb89","vendors-node_modules_core-js_modules_es_array_map_js-node_modules_yup_index_esm_js-node_modul-2aaf22","vendors-node_modules_prop-types_index_js","vendors-node_modules_core-js_modules_es_weak-map_js","vendors-node_modules_react-dropzone_dist_es_index_js-node_modules_smart-img-resize_src_index_js","vendors-node_modules_symfony_stimulus-bridge_dist_index_js-node_modules_core-js_modules_es_re-504eb3","vendors-node_modules_core-js_modules_es_array_find_js-node_modules_core-js_modules_es_object_-6585b1","assets_UI_Icon_Loader_jsx-assets_entrypoints_i18n_js-assets_functions_api_js","assets_CustomHook_form_useFormWithValidation_jsx-assets_UI_Form_TextField_jsx","assets_CustomHook_fetch_useFetch_jsx","assets_CustomHook_fetch_useFetchQSearch_jsx-assets_UI_Button_TrashButton_jsx","node_modules_symfony_stimulus-bridge_dist_webpack_loader_js_assets_controllers_json-assets_Cu-e7b764"], () => (__webpack_exec__("./assets/entrypoints/admin.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUM7Ozs7Ozs7Ozs7O0FDVEQ7Ozs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7Ozs7QUNBQSIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2Fzc2V0cy9Db21wb25lbnRzL0FkbWluL0FkbWluQW5zd2VyQ29udHJvbC9pbmRleC5qc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL0NvbXBvbmVudHMvQWRtaW4vQWRtaW5QaWN0dXJlVXBsb2FkL2luZGV4LmpzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvQ29tcG9uZW50cy9BZG1pbi9JbmdyZWRpZW50c1F1YW50aXRpZXNJbnB1dC9JcUNhcmQuanN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9Db21wb25lbnRzL0FkbWluL0luZ3JlZGllbnRzUXVhbnRpdGllc0lucHV0L0lxRm9ybS9JbmdyZWRpZW50U3VnZ2VzdGVkRmllbGQuanN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9Db21wb25lbnRzL0FkbWluL0luZ3JlZGllbnRzUXVhbnRpdGllc0lucHV0L0lxRm9ybS9pbmRleC5qc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL0NvbXBvbmVudHMvQWRtaW4vSW5ncmVkaWVudHNRdWFudGl0aWVzSW5wdXQvaW5kZXguanN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9Db21wb25lbnRzL0FkbWluL1Byb2R1Y3RGb3JtUmVhY3RCbG9jay9QYWNrYWdpbmdDaG9pY2VzSW5wdXQvQWRtaW5QYWNrYWdpbmdDYXJkLmpzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvQ29tcG9uZW50cy9BZG1pbi9Qcm9kdWN0Rm9ybVJlYWN0QmxvY2svUGFja2FnaW5nQ2hvaWNlc0lucHV0L1BhY2thZ2luZ0Nob2ljZXNGb3JtLmpzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvQ29tcG9uZW50cy9BZG1pbi9Qcm9kdWN0Rm9ybVJlYWN0QmxvY2svUGFja2FnaW5nQ2hvaWNlc0lucHV0L1ByaWNlQ2FsY3VsYXRvci5qc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL0NvbXBvbmVudHMvQWRtaW4vUHJvZHVjdEZvcm1SZWFjdEJsb2NrL1BhY2thZ2luZ0Nob2ljZXNJbnB1dC9pbmRleC5qc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL0NvbXBvbmVudHMvQWRtaW4vUHJvZHVjdEZvcm1SZWFjdEJsb2NrL2luZGV4LmpzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvQ29tcG9uZW50cy9BZG1pbi9QdXJjaGFzZVNoaXBwaW5nU3RhdHVzVXBkYXRlci9pbmRleC5qc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL0NvbXBvbmVudHMvQWRtaW4vUmV2aWV3TW9kZXJhdG9yL2luZGV4LmpzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvQ29tcG9uZW50cy9BZG1pbi9TZWxlY3RMaW5rZWRJdGVtcy9BZG1pbkl0ZW1TdWdnZXN0LmpzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvQ29tcG9uZW50cy9BZG1pbi9TZWxlY3RMaW5rZWRJdGVtcy9TZWxlY3RlZEl0ZW1zTGlzdC5qc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL0NvbXBvbmVudHMvQWRtaW4vU2VsZWN0TGlua2VkSXRlbXMvaW5kZXguanN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9Db21wb25lbnRzL0FkbWluL1NlbGVjdFVuaXF1ZUl0ZW0vaW5kZXguanN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9Db25maWcvVmF0TGV2ZWxzLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9VSS9BZG1pbi9TdGFuZGFyZEl0ZW0vU3RhbmRhcmRJdGVtU2VsZWN0b3IuanN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9VSS9CdXR0b24vRWRpdEJ1dHRvbi5qc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL1VJL0J1dHRvbi9QbHVzQnV0dG9uLmpzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvVUkvRm9ybS9QaWN0dXJlVXBsb2FkRmllbGQuanN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9VSS9Gb3JtL1NlbGVjdC5qc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL1VJL0ljb24vRWRpdEljb24uanN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9VSS9JY29uL0V4cGFuZE1vcmVJY29uLmpzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvVUkvSWNvbi9RdWFudGl0eS9QbHVzSWNvbi5qc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL1VJL0ljb24vVHJhc2hJY29uLmpzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvVUkvU3VnZ2VzdExpc3QuanN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9lbnRyeXBvaW50cy9hZG1pbi5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvZnVuY3Rpb25zL2Zvcm1hdGVycy5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvZnVuY3Rpb25zL3ByaWNlL3ZhdENhbGN1bGF0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2Z1bmN0aW9ucy90b2tlbi5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc3R5bGVzL1VJL0FkbWluL0Zvcm0vQWRtaW5TaG93Q2FyZFJvdy5qc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3N0eWxlcy9VSS9BZG1pbi9Gb3JtL0FkbWluVGV4dEZpZWxkLmpzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc3R5bGVzL0FkbWluL0luZ3JlZGllbnRzUXVhbnRpdGllc0lucHV0L2luZGV4LmNzcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc3R5bGVzL0FkbWluL1Byb2R1Y3Qvc2hvdy5jc3MiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3N0eWxlcy9BZG1pbi9TdWdnZXN0ZWRQcm9kdWN0c0lucHV0L2luZGV4LmNzcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc3R5bGVzL0FkbWluL1VJL2J1dHRvbnMuY3NzIiwid2VicGFjazovLy8uL2Fzc2V0cy9zdHlsZXMvQWRtaW4vVUkvc3VnZ2VzdExpc3QuY3NzIiwid2VicGFjazovLy8uL2Fzc2V0cy9zdHlsZXMvQWRtaW4vYWxlcnRzLmNzcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc3R5bGVzL0FkbWluL2JyZWFkY3J1bWIuY3NzIiwid2VicGFjazovLy8uL2Fzc2V0cy9zdHlsZXMvQWRtaW4vY3VzdG9tVGFibGUuY3NzIiwid2VicGFjazovLy8uL2Fzc2V0cy9zdHlsZXMvQWRtaW4vZmxhc2hlcy5jc3MiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3N0eWxlcy9BZG1pbi9mb290ZXIuY3NzIiwid2VicGFjazovLy8uL2Fzc2V0cy9zdHlsZXMvQWRtaW4vZm9ybS5jc3MiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3N0eWxlcy9BZG1pbi9mb3JtX2ZpbHRlcnMuY3NzIiwid2VicGFjazovLy8uL2Fzc2V0cy9zdHlsZXMvQWRtaW4vaGVhZGVyLmNzcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc3R5bGVzL0FkbWluL2hvbWUuY3NzIiwid2VicGFjazovLy8uL2Fzc2V0cy9zdHlsZXMvQWRtaW4vaW5kZXguY3NzIiwid2VicGFjazovLy8uL2Fzc2V0cy9zdHlsZXMvQWRtaW4vcGFnaW5hdGlvbi5jc3MiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3N0eWxlcy9BZG1pbi9yZXZpZXcuY3NzIiwid2VicGFjazovLy8uL2Fzc2V0cy9zdHlsZXMvQWRtaW4vdGFibGUuY3NzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgdXNlT3BlblN0YXRlIH0gZnJvbSAnLi4vLi4vLi4vQ3VzdG9tSG9vay9zdGF0ZS91c2VPcGVuU3RhdGUnO1xyXG5pbXBvcnQgeyBBcGlFcnJvciwgYXBpUHJlcGFyZWRGZXRjaCB9IGZyb20gJy4uLy4uLy4uL2Z1bmN0aW9ucy9hcGknO1xyXG5cclxuZXhwb3J0IGNvbnN0IEFkbWluQW5zd2VyQ29udHJvbCA9ICh7b3duZXJDbGFzcywgb3duZXJJZH0pID0+IHtcclxuXHJcbiAgICBjb25zdCBbZm9ybUlzT3Blbiwgb3BlbkZvcm0sIGNsb3NlRm9ybV0gPSB1c2VPcGVuU3RhdGUoZmFsc2UpO1xyXG5cclxuICAgIGNvbnN0IFtpc0xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpXHJcbiAgICBjb25zdCBbZXJyb3JzLCBzZXRFcnJvcnNdID0gdXNlU3RhdGUobnVsbCk7XHJcblxyXG4gICAgY29uc3QgW3ZhbHVlLCBzZXRWYWx1ZV0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgICBjb25zdCBoYW5kbGVDaGFuZ2UgPSBlID0+IHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgc2V0VmFsdWUoZS50YXJnZXQudmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IGFzeW5jIGUgPT4ge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBpZihpc0xvYWRpbmcpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBzZXRMb2FkaW5nKHRydWUpO1xyXG4gICAgICAgIHNldEVycm9ycyhudWxsKTtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBhd2FpdCBhcGlQcmVwYXJlZEZldGNoKCcvYWRtaW4vYXBpL2Fuc3dlci9jcmVhdGUvJytvd25lckNsYXNzKycvJytvd25lcklkLCB7Y29udGVudDogdmFsdWV9LCAnUE9TVCcpO1xyXG4gICAgICAgICAgICBsb2NhdGlvbi5yZWxvYWQoKTtcclxuICAgICAgICB9IGNhdGNoKGUpIHtcclxuICAgICAgICAgICAgaWYoZSBpbnN0YW5jZW9mIEFwaUVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICBzZXRFcnJvcnMoZS5lcnJvcnMpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgc2V0RXJyb3JzKFsnRXJyZXVyIHNlcnZldXInXSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgZm9ybUlzT3BlbiAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXsnYWRtaW4tZm9ybS1ncm91cCcgKyAoZXJyb3JzID8gJyBpcy1pbnZhbGlkJzogJycpfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPXtvd25lcklkfSBjbGFzc05hbWU9XCJhZG1pbi1mb3JtLWxhYmVsXCI+UsOpcG9uc2U8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRleHRhcmVhIGlkPXtvd25lcklkfSB0eXBlPVwidGV4dFwiIGNsYXNzTmFtZT1cImFkbWluLWZvcm0tY29udHJvbFwiIHZhbHVlPXt2YWx1ZX0gb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX0gYXV0b0ZvY3VzPXt0cnVlfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVycm9ycz8uY29udGVudCAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWRtaW4tZm9ybS1lcnJvclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT57ZXJyb3JzLmNvbnRlbnR9PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzTG9hZGluZyA/IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFkbWluLWZvcm0taW5mb1wiPkNoYXJnZW1lbnQuLi48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICk6IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFkbWluLXN1Ym1pdC1ncm91cCBkb3VibGVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgb25DbGljaz17Y2xvc2VGb3JtfSBjbGFzc05hbWU9XCJhZG1pbi1idXR0b24gc2Vjb25kYXJ5LWNvbG9yIGFkbWluLXNtYWxsLWJ1dHRvblwiIGRpc2FibGVkPXtpc0xvYWRpbmd9PkFubnVsZXI8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3NOYW1lPVwiYWRtaW4tYnV0dG9uIGFkbWluLXNtYWxsLWJ1dHRvblwiPlZhbGlkZXI8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAhZm9ybUlzT3BlbiAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgb25DbGljaz17b3BlbkZvcm19IGNsYXNzTmFtZT1cImFkbWluLWJ1dHRvbiBhZG1pbi1zbWFsbC1idXR0b25cIj5Sw6lwb25kcmU8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIDwvPlxyXG4gICAgKVxyXG59IiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBQaWN0dXJlVXBsb2FkRmllbGQgfSBmcm9tICcuLi8uLi8uLi9VSS9Gb3JtL1BpY3R1cmVVcGxvYWRGaWVsZCc7XHJcblxyXG5leHBvcnQgY29uc3QgQWRtaW5QaWN0dXJlVXBsb2FkID0gKHtuYW1lLCBsYWJlbCwgZGVmYXVsdEJhc2U2NGltZywgcmVzaXplV2lkdGgsIHJlc2l6ZUhlaWdodH0pID0+IHtcclxuXHJcbiAgICBjb25zdCBbZXJyb3JzLCBzZXRFcnJvcnNdID0gdXNlU3RhdGUoW10pO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPFBpY3R1cmVVcGxvYWRGaWVsZCBcclxuICAgICAgICAgICAgbmFtZT17bmFtZX0gXHJcbiAgICAgICAgICAgIGVycm9ycz17ZXJyb3JzfSBcclxuICAgICAgICAgICAgc2V0RXJyb3JzPXtzZXRFcnJvcnN9IFxyXG4gICAgICAgICAgICByZXNpemVXaWR0aD17cmVzaXplV2lkdGh9IFxyXG4gICAgICAgICAgICByZXNpemVIZWlnaHQ9e3Jlc2l6ZUhlaWdodH1cclxuICAgICAgICAgICAgZGVmYXVsdEJhc2U2NGltZz17ZGVmYXVsdEJhc2U2NGltZ31cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICB7bGFiZWx9XHJcbiAgICAgICAgPC9QaWN0dXJlVXBsb2FkRmllbGQ+XHJcbiAgICApXHJcbn0gIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgdXNlT3BlblN0YXRlIH0gZnJvbSAnLi4vLi4vLi4vQ3VzdG9tSG9vay9zdGF0ZS91c2VPcGVuU3RhdGUuanN4JztcclxuaW1wb3J0IHsgTW9kYWwgfSBmcm9tICcuLi8uLi8uLi9VSS9Db250YWluZXIvTW9kYWwuanN4JztcclxuaW1wb3J0IHsgSXFGb3JtIH0gZnJvbSAnLi9JcUZvcm0vaW5kZXguanN4JztcclxuaW1wb3J0IHsgRWRpdEJ1dHRvbiB9IGZyb20gJy4uLy4uLy4uL1VJL0J1dHRvbi9FZGl0QnV0dG9uLmpzeCc7XHJcbmltcG9ydCB7IENsb3NlQnV0dG9uIH0gZnJvbSAnLi4vLi4vLi4vVUkvQnV0dG9uL0Nsb3NlQnV0dG9uLmpzeCc7XHJcblxyXG5leHBvcnQgY29uc3QgSXFDYXJkID0gKHtpbmdyZWRpZW50UXVhbnRpdHksIHJlbW92ZSwgdXBkYXRlfSkgPT4ge1xyXG4gICAgXHJcbiAgICBjb25zdCBoYW5kbGVSZW1vdmUgPSAoKSA9PiB7XHJcbiAgICAgICAgcmVtb3ZlKGluZ3JlZGllbnRRdWFudGl0eSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgaGFuZGxlVXBkYXRlID0gbmV3SW5ncmVkaWVudFF1YW50aXR5ID0+IHtcclxuICAgICAgICB1cGRhdGUoaW5ncmVkaWVudFF1YW50aXR5LmlkLCBuZXdJbmdyZWRpZW50UXVhbnRpdHkpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IFtmb3JtSXNPcGVuLCBvcGVuRm9ybSwgY2xvc2VGb3JtXSA9IHVzZU9wZW5TdGF0ZShmYWxzZSk7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8bGkgY2xhc3NOYW1lPVwiaXEtY2FyZFwiPlxyXG4gICAgICAgICAgICA8aW1nIHNyYz17aW5ncmVkaWVudFF1YW50aXR5LmluZ3JlZGllbnQucGljdHVyZS5wYXRofSBhbHQ9XCJQaG90byBkJ3VuIGluZ3LDqWRpZW50XCIgLz5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZW4tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgIHtpbmdyZWRpZW50UXVhbnRpdHkucXVhbnRpdHkuZW59IDxzdHJvbmc+e2luZ3JlZGllbnRRdWFudGl0eS5pbmdyZWRpZW50Lm5hbWV9PC9zdHJvbmc+XHJcbiAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZnItZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgIHtpbmdyZWRpZW50UXVhbnRpdHkucXVhbnRpdHkuZnJ9IDxzdHJvbmc+e2luZ3JlZGllbnRRdWFudGl0eS5pbmdyZWRpZW50Lm5hbWV9PC9zdHJvbmc+XHJcbiAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZXMtZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgIHtpbmdyZWRpZW50UXVhbnRpdHkucXVhbnRpdHkuZXN9IDxzdHJvbmc+e2luZ3JlZGllbnRRdWFudGl0eS5pbmdyZWRpZW50Lm5hbWV9PC9zdHJvbmc+XHJcbiAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaXQtZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgIHtpbmdyZWRpZW50UXVhbnRpdHkucXVhbnRpdHkuaXR9IDxzdHJvbmc+e2luZ3JlZGllbnRRdWFudGl0eS5pbmdyZWRpZW50Lm5hbWV9PC9zdHJvbmc+XHJcbiAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgPENsb3NlQnV0dG9uIG9uQ2xpY2s9e2hhbmRsZVJlbW92ZX0gLz5cclxuICAgICAgICAgICAgPEVkaXRCdXR0b24gb25DbGljaz17b3BlbkZvcm19IC8+XHJcblxyXG4gICAgICAgICAgICA8TW9kYWwgaXNPcGVuPXtmb3JtSXNPcGVufSBjbG9zZT17Y2xvc2VGb3JtfSBhZGRpdGlvbmFsQ2xhc3M9XCJhZG1pbi1mb3JtLW1vZGFsXCIgYW5pbWF0ZWQ9e2ZhbHNlfT5cclxuICAgICAgICAgICAgICAgICAgICA8SXFGb3JtIGluZ3JlZGllbnRRdWFudGl0eT17aW5ncmVkaWVudFF1YW50aXR5fSBvblN1Ym1pdFN1Y2Nlc3M9e2hhbmRsZVVwZGF0ZX0gY2xvc2U9e2Nsb3NlRm9ybX0gLz5cclxuICAgICAgICAgICAgPC9Nb2RhbD5cclxuICAgICAgICA8L2xpPlxyXG4gICAgKVxyXG59IiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBDbG9zZUJ1dHRvbiB9IGZyb20gJy4uLy4uLy4uLy4uL1VJL0J1dHRvbi9DbG9zZUJ1dHRvbic7XHJcbmltcG9ydCB7IFN1Z2dlc3RMaXN0IH0gZnJvbSAnLi4vLi4vLi4vLi4vVUkvU3VnZ2VzdExpc3QnO1xyXG5pbXBvcnQgeyB1c2VGZXRjaFFTZWFyY2ggfSBmcm9tICcuLi8uLi8uLi8uLi9DdXN0b21Ib29rL2ZldGNoL3VzZUZldGNoUVNlYXJjaCc7XHJcbmltcG9ydCBpMThuIGZyb20gJy4uLy4uLy4uLy4uL2VudHJ5cG9pbnRzL2kxOG4nO1xyXG5pbXBvcnQgeyBBZG1pbkl0ZW1TdWdnZXN0IH0gZnJvbSAnLi4vLi4vU2VsZWN0TGlua2VkSXRlbXMvQWRtaW5JdGVtU3VnZ2VzdCc7XHJcblxyXG5leHBvcnQgY29uc3QgSW5ncmVkaWVudFN1Z2dlc3RlZEZpZWxkID0gKHtvblNlbGVjdCwgZm9ybUVycm9yfSkgPT4ge1xyXG5cclxuICAgIGNvbnN0IFtxLCBzZXRRXSA9IHVzZVN0YXRlKCcnKTtcclxuXHJcbiAgICBjb25zdCBoYW5kbGVDaGFuZ2UgPSBlID0+IHtcclxuICAgICAgICBzZXRRKGUudGFyZ2V0LnZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBbaW5ncmVkaWVudHMsIHJlc2V0SW5ncmVkaWVudHMsIGlzTG9hZGluZywgZXJyb3JdID0gdXNlRmV0Y2hRU2VhcmNoKCcvJytpMThuLmxhbmd1YWdlKycvYXBpL2luZ3JlZGllbnQvcVNlYXJjaCcsIHEsIDUpO1xyXG5cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWRtaW4tZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17J2Zvcm0tZ3JvdXAgc3VnZ2VzdC1mb3JtLWdyb3VwJyArIChmb3JtRXJyb3IgPyAnIGlzLWludmFsaWQnOiAnJyl9PlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJxXCI+SW5ncsOpZGllbnQ8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJxXCIgY2xhc3NOYW1lPVwiYWRtaW4tZm9ybS1jb250cm9sXCIgcGxhY2Vob2xkZXI9XCJSZWNoZXJjaGVyXCIgbmFtZT1cInFcIiB2YWx1ZT17cX0gb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX0gYXV0b0ZvY3VzPXt0cnVlfSAvPlxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHEgIT09ICcnICYmIDxDbG9zZUJ1dHRvbiBhZGRpdGlvbmFsQ2xhc3M9XCJhZG1pbi1zdWdnZXN0ZWRQcm9kdWN0cy1pbnB1dC1jbG9zZXJcIiBvbkNsaWNrPXsoKSA9PiBzZXRRKCcnKX0gLz5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBpbmdyZWRpZW50cz8ubGVuZ3RoID4gMCAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxTdWdnZXN0TGlzdCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWRkaXRpb25hbENsYXNzPVwiYWRtaW4tc3VnZ2VzdC1saXN0XCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN1Z2dlc3RzPXtpbmdyZWRpZW50c30gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xvc2U9e3Jlc2V0SW5ncmVkaWVudHN9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvblNlbGVjdD17b25TZWxlY3R9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlbmRlcj17KGluZ3JlZGllbnQsIHNlbGVjdGVkKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW5ncmVkaWVudFN1Z2dlc3RJdGVtIGtleT17aW5ncmVkaWVudC5pZH0gaW5ncmVkaWVudD17aW5ncmVkaWVudH0gcT17cX0gc2VsZWN0ZWQ9e3NlbGVjdGVkfSBvblNlbGVjdD17b25TZWxlY3R9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPiAgIFxyXG4gICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3VnZ2VzdC1mb3JtLWluZm9cIj5cclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBmb3JtRXJyb3IgJiYgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWVycm9yXCI+e2Zvcm1FcnJvcn08L2Rpdj5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBpc0xvYWRpbmcgJiYgPGRpdiBjbGFzc05hbWU9XCJhZG1pbi1mb3JtLWluZm9cIj5DaGFyZ2VtZW50Li4uPC9kaXY+XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG5jb25zdCBJbmdyZWRpZW50U3VnZ2VzdEl0ZW0gPSAoe2luZ3JlZGllbnQsIHEsIG9uU2VsZWN0LCBzZWxlY3RlZH0pID0+IHtcclxuXHJcbiAgICBjb25zdCBuYW1lID0gaW5ncmVkaWVudC5uYW1lLnRvVXBwZXJDYXNlKCkuc3BsaXQocS50b1VwcGVyQ2FzZSgpKS5qb2luKCc8c3Ryb25nPicrcS50b1VwcGVyQ2FzZSgpKyc8L3N0cm9uZz4nKTtcclxuXHJcbiAgICBjb25zdCBoYW5kbGVDbGljayA9IGUgPT4ge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBvblNlbGVjdChpbmdyZWRpZW50KTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxhIGNsYXNzTmFtZT17J2FkbWluLXN1Z2dlc3QtaXRlbScgKyAoc2VsZWN0ZWQgPyAnIHNlbGVjdGVkJzogJycpfSBocmVmPVwiI1wiIG9uQ2xpY2s9e2hhbmRsZUNsaWNrfSByb2xlPVwib3B0aW9uXCIgYXJpYS1zZWxlY3RlZD17c2VsZWN0ZWR9PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFkbWluLXN1Z2dlc3QtaW1nXCIgc3R5bGU9e3tiYWNrZ3JvdW5kSW1hZ2U6IGB1cmwoJHtpbmdyZWRpZW50LnBpY3R1cmUucGF0aH0pYH19PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhZG1pbi1zdWdnZXN0LXRleHRcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3tfX2h0bWw6IG5hbWV9fT48L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9hPlxyXG4gICAgKVxyXG59IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0ICogYXMgeXVwIGZyb20gXCJ5dXBcIlxyXG5pbXBvcnQgeyB1c2VGb3JtV2l0aFZhbGlkYXRpb24gfSBmcm9tICcuLi8uLi8uLi8uLi9DdXN0b21Ib29rL2Zvcm0vdXNlRm9ybVdpdGhWYWxpZGF0aW9uJztcclxuaW1wb3J0IHsgY3JlYXRlVG9rZW4gfSBmcm9tICcuLi8uLi8uLi8uLi9mdW5jdGlvbnMvdG9rZW4nO1xyXG5pbXBvcnQgeyBBZG1pblRleHRGaWVsZCB9IGZyb20gJy4uLy4uLy4uLy4uL3N0eWxlcy9VSS9BZG1pbi9Gb3JtL0FkbWluVGV4dEZpZWxkJztcclxuaW1wb3J0IHsgSW5ncmVkaWVudFN1Z2dlc3RlZEZpZWxkIH0gZnJvbSAnLi9JbmdyZWRpZW50U3VnZ2VzdGVkRmllbGQnO1xyXG5pbXBvcnQgeyB1c2VPcGVuU3RhdGUgfSBmcm9tICcuLi8uLi8uLi8uLi9DdXN0b21Ib29rL3N0YXRlL3VzZU9wZW5TdGF0ZSc7XHJcbmltcG9ydCB7IEVkaXRCdXR0b24gfSBmcm9tICcuLi8uLi8uLi8uLi9VSS9CdXR0b24vRWRpdEJ1dHRvbic7XHJcblxyXG5cclxuY29uc3QgaW5ncmVkaWVudFF1YW50aXR5U2NoZW1hID0geXVwXHJcbiAgLm9iamVjdCh7XHJcbiAgICBpbmdyZWRpZW50SWQ6IHl1cC5udW1iZXIoKS50eXBlRXJyb3IoJ1ZvdXMgZGV2ZXogY2hvaXNpciB1biBpbmdyw6lkaWVudCcpLnJlcXVpcmVkKCdWb3VzIGRldmV6IGNob2lzaXIgdW4gaW5ncsOpZGllbnQnKSxcclxuICAgIGVuUXVhbnRpdHk6IHl1cC5zdHJpbmcoKS5tYXgoMjAwLCAnMjAwIGNhcmFjdMOocmVzIG1heC4nKS5yZXF1aXJlZCgnTGEgcXVhbnRpdMOpIChFTikgZXN0IG9ibGlnYXRvaXJlJyksXHJcbiAgICBmclF1YW50aXR5OiB5dXAuc3RyaW5nKCkubWF4KDIwMCwgJzIwMCBjYXJhY3TDqHJlcyBtYXguJykucmVxdWlyZWQoJ0xhIHF1YW50aXTDqSAoRlIpIGVzdCBvYmxpZ2F0b2lyZScpLFxyXG4gICAgZXNRdWFudGl0eTogeXVwLnN0cmluZygpLm1heCgyMDAsICcyMDAgY2FyYWN0w6hyZXMgbWF4LicpLnJlcXVpcmVkKCdMYSBxdWFudGl0w6kgKEVTKSBlc3Qgb2JsaWdhdG9pcmUnKSxcclxuICAgIGl0UXVhbnRpdHk6IHl1cC5zdHJpbmcoKS5tYXgoMjAwLCAnMjAwIGNhcmFjdMOocmVzIG1heC4nKS5yZXF1aXJlZCgnTGEgcXVhbnRpdMOpIChJVCkgZXN0IG9ibGlnYXRvaXJlJyksXHJcbiAgfSlcclxuICAucmVxdWlyZWQoKTtcclxuXHJcblxyXG5cclxuY29uc3QgcHJlcGFyZURlZmF1bHRJbmdyZWRpZW50UXVhbnRpdHkgPSBpbmdyZWRpZW50UXVhbnRpdHkgPT4ge1xyXG4gICAgaWYoaW5ncmVkaWVudFF1YW50aXR5KSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgaW5ncmVkaWVudElkOiBpbmdyZWRpZW50UXVhbnRpdHkuaW5ncmVkaWVudC5pZCxcclxuICAgICAgICAgICAgcGljdHVyZVBhdGg6IGluZ3JlZGllbnRRdWFudGl0eS5pbmdyZWRpZW50LnBpY3R1cmUucGF0aCxcclxuICAgICAgICAgICAgaW5ncmVkaWVudE5hbWU6IGluZ3JlZGllbnRRdWFudGl0eS5pbmdyZWRpZW50Lm5hbWUsXHJcbiAgICAgICAgICAgIGVuUXVhbnRpdHk6IGluZ3JlZGllbnRRdWFudGl0eS5xdWFudGl0eS5lbixcclxuICAgICAgICAgICAgZnJRdWFudGl0eTogaW5ncmVkaWVudFF1YW50aXR5LnF1YW50aXR5LmZyLFxyXG4gICAgICAgICAgICBlc1F1YW50aXR5OiBpbmdyZWRpZW50UXVhbnRpdHkucXVhbnRpdHkuZXMsXHJcbiAgICAgICAgICAgIGl0UXVhbnRpdHk6IGluZ3JlZGllbnRRdWFudGl0eS5xdWFudGl0eS5pdFxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGluZ3JlZGllbnRJZDogJycsXHJcbiAgICAgICAgcGljdHVyZVBhdGg6ICcnLFxyXG4gICAgICAgIGluZ3JlZGllbnROYW1lOiAnJyxcclxuICAgICAgICBlblF1YW50aXR5OiAnJyxcclxuICAgICAgICBmclF1YW50aXR5OiAnJyxcclxuICAgICAgICBlc1F1YW50aXR5OiAnJyxcclxuICAgICAgICBpdFF1YW50aXR5OiAnJ1xyXG4gICAgfTtcclxufVxyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBJcUZvcm0gPSAoe2Nsb3NlLCBvblN1Ym1pdFN1Y2Nlc3MsIGluZ3JlZGllbnRRdWFudGl0eX0pID0+IHtcclxuXHJcbiAgICBjb25zdCB7aGFuZGxlU3VibWl0LCBjb250cm9sLCBlcnJvcnMsIHNldEVycm9yLCBzZXRWYWx1ZSwgZ2V0VmFsdWVzLCB3YXRjaCwgaXNTdWJtaXR0aW5nfSA9IHVzZUZvcm1XaXRoVmFsaWRhdGlvbihcclxuICAgICAgICBpbmdyZWRpZW50UXVhbnRpdHlTY2hlbWEsIFxyXG4gICAgICAgIHByZXBhcmVEZWZhdWx0SW5ncmVkaWVudFF1YW50aXR5KGluZ3JlZGllbnRRdWFudGl0eSlcclxuICAgICk7XHJcbiAgICBcclxuXHJcbiAgICBjb25zdCBvblN1Ym1pdCA9IGZvcm1EYXRhID0+IHtcclxuICAgICAgICBjb25zdCBuZXdJbmdyZWRpZW50UXVhbnRpdHkgPSB7XHJcbiAgICAgICAgICAgIGlkOiBjcmVhdGVUb2tlbig3KSxcclxuICAgICAgICAgICAgaW5ncmVkaWVudDoge1xyXG4gICAgICAgICAgICAgICAgaWQ6IGZvcm1EYXRhLmluZ3JlZGllbnRJZCxcclxuICAgICAgICAgICAgICAgIG5hbWU6IGZvcm1EYXRhLmluZ3JlZGllbnROYW1lLFxyXG4gICAgICAgICAgICAgICAgcGljdHVyZToge1xyXG4gICAgICAgICAgICAgICAgICAgIHBhdGg6IGZvcm1EYXRhLnBpY3R1cmVQYXRoXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHF1YW50aXR5OiB7XHJcbiAgICAgICAgICAgICAgICBlbjogZm9ybURhdGEuZW5RdWFudGl0eSxcclxuICAgICAgICAgICAgICAgIGZyOiBmb3JtRGF0YS5mclF1YW50aXR5LFxyXG4gICAgICAgICAgICAgICAgZXM6IGZvcm1EYXRhLmVzUXVhbnRpdHksXHJcbiAgICAgICAgICAgICAgICBpdDogZm9ybURhdGEuaXRRdWFudGl0eSxcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgb25TdWJtaXRTdWNjZXNzKG5ld0luZ3JlZGllbnRRdWFudGl0eSk7XHJcbiAgICAgICAgY2xvc2UoKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLy9xdWFuZCBvbiBzw6lsZWN0aW9ubmUgdW4gaW5ncsOpZGllbnQsIG9uIGh5ZHJhdGUgbGVzIHZhbGV1cnMgZHUgZm9ybSA6IGluZ3JlZGllbnRJZCwgcGljdHVyZVBhdGgsIGVuSW5ncmVkaWVudE5hbWUgZXRjLi4uXHJcbiAgICBjb25zdCBoYW5kbGVTZWxlY3RJbmdyZWRpZW50ID0gaW5ncmVkaWVudCA9PiB7XHJcbiAgICAgICAgc2V0VmFsdWUoJ2luZ3JlZGllbnRJZCcsIGluZ3JlZGllbnQuaWQpO1xyXG4gICAgICAgIHNldFZhbHVlKCdwaWN0dXJlUGF0aCcsIGluZ3JlZGllbnQucGljdHVyZS5wYXRoKTtcclxuICAgICAgICBzZXRWYWx1ZSgnaW5ncmVkaWVudE5hbWUnLCBpbmdyZWRpZW50Lm5hbWUpO1xyXG4gICAgICAgIGNsb3NlSW5ncmVkaWVudEZvcm0oKTtcclxuICAgIH07XHJcblxyXG5cclxuICAgIGNvbnN0IFtpbmdyZWRpZW50Rm9ybUlzT3Blbiwgb3BlbkluZ3JlZGllbnRGb3JtLCBjbG9zZUluZ3JlZGllbnRGb3JtXSA9IHVzZU9wZW5TdGF0ZShpbmdyZWRpZW50UXVhbnRpdHkgPyBmYWxzZTogdHJ1ZSk7IC8vc2kgY3JlYXRlLCBmb3JtIG91dmVydCAvIHNpIHVwZGF0ZSwgZm9ybSBmZXJtw6lcclxuICAgIGNvbnN0IGhhbmRsZUVkaXRJbmdyZWRpZW50ID0gKCkgPT4ge1xyXG4gICAgICAgIHNldFZhbHVlKCdpbmdyZWRpZW50SWQnLCAnJyk7XHJcbiAgICAgICAgc2V0VmFsdWUoJ3BpY3R1cmVQYXRoJywgJycpO1xyXG4gICAgICAgIHNldFZhbHVlKCdpbmdyZWRpZW50TmFtZScsICcnKTtcclxuICAgICAgICBvcGVuSW5ncmVkaWVudEZvcm0oKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0KG9uU3VibWl0KX0gY2xhc3NOYW1lPVwiYWRtaW4tZm9ybSBpbmdyZWRpZW50LXF1YW50aXR5LWZvcm1cIj5cclxuICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cImFkbWluLWZvcm0tbW9kYWwtdGl0bGVcIj5Jbmdyw6lkaWVudDwvaDI+XHJcblxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBpbmdyZWRpZW50Rm9ybUlzT3BlbiA/IChcclxuICAgICAgICAgICAgICAgICAgICA8SW5ncmVkaWVudFN1Z2dlc3RlZEZpZWxkIG9uU2VsZWN0PXtoYW5kbGVTZWxlY3RJbmdyZWRpZW50fSBmb3JtRXJyb3I9e2Vycm9ycy5pbmdyZWRpZW50SWQ/Lm1lc3NhZ2V9IC8+XHJcbiAgICAgICAgICAgICAgICApOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpcS1jYXJkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtnZXRWYWx1ZXMoJ3BpY3R1cmVQYXRoJyl9IGFsdD1cIlBob3RvIGQndW4gaW5ncsOpZGllbnRcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJhZG1pbi1mb3JtLW1vZGFsLXRvcC1jYXJkLXRleHRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt3YXRjaCgnZnJRdWFudGl0eScpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeycgJ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdHJvbmc+e2dldFZhbHVlcygnaW5ncmVkaWVudE5hbWUnKX08L3N0cm9uZz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8RWRpdEJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVFZGl0SW5ncmVkaWVudH0gLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgPEFkbWluVGV4dEZpZWxkIGNvbnRyb2w9e2NvbnRyb2x9IG5hbWU9XCJlblF1YW50aXR5XCIgZXJyb3I9e2Vycm9ycy5lblF1YW50aXR5Py5tZXNzYWdlfSBtYXhMZW5ndGg9XCIyMDBcIj5RdWFudGl0w6kgKEVOKSAqPC9BZG1pblRleHRGaWVsZD5cclxuICAgICAgICAgICAgPEFkbWluVGV4dEZpZWxkIGNvbnRyb2w9e2NvbnRyb2x9IG5hbWU9XCJmclF1YW50aXR5XCIgZXJyb3I9e2Vycm9ycy5mclF1YW50aXR5Py5tZXNzYWdlfSBtYXhMZW5ndGg9XCIyMDBcIiBwbGFjZWhvbGRlcj1cIkV4OiAxIGN1aWxsw6hyZSBkZVwiPlF1YW50aXTDqSAoRlIpICo8L0FkbWluVGV4dEZpZWxkPlxyXG4gICAgICAgICAgICA8QWRtaW5UZXh0RmllbGQgY29udHJvbD17Y29udHJvbH0gbmFtZT1cImVzUXVhbnRpdHlcIiBlcnJvcj17ZXJyb3JzLmVzUXVhbnRpdHk/Lm1lc3NhZ2V9IG1heExlbmd0aD1cIjIwMFwiPlF1YW50aXTDqSAoRVMpICo8L0FkbWluVGV4dEZpZWxkPlxyXG4gICAgICAgICAgICA8QWRtaW5UZXh0RmllbGQgY29udHJvbD17Y29udHJvbH0gbmFtZT1cIml0UXVhbnRpdHlcIiBlcnJvcj17ZXJyb3JzLml0UXVhbnRpdHk/Lm1lc3NhZ2V9IG1heExlbmd0aD1cIjIwMFwiPlF1YW50aXTDqSAoSVQpICo8L0FkbWluVGV4dEZpZWxkPlxyXG5cclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgT2JqZWN0LnZhbHVlcyhlcnJvcnMpLmxlbmd0aCA+IDAgJiYgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWVycm9yXCI+TGUgZm9ybXVsYWlyZSBjb21wb3J0ZSBkZXMgZXJyZXVyczwvZGl2PlxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFkbWluLXN1Ym1pdC1ncm91cCBkb3VibGVcIj5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT1cImFkbWluLWJ1dHRvbiBzZWNvbmRhcnktY29sb3JcIiBvbkNsaWNrPXtjbG9zZX0+QW5udWxlcjwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3NOYW1lPVwiYWRtaW4tYnV0dG9uXCI+VmFsaWRlcjwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Zvcm0+XHJcbiAgICApXHJcbiAgIFxyXG59XHJcblxyXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgdXNlT3BlblN0YXRlIH0gZnJvbSAnLi4vLi4vLi4vQ3VzdG9tSG9vay9zdGF0ZS91c2VPcGVuU3RhdGUnO1xyXG5pbXBvcnQgJy4uLy4uLy4uL3N0eWxlcy9BZG1pbi9JbmdyZWRpZW50c1F1YW50aXRpZXNJbnB1dC9pbmRleC5jc3MnO1xyXG5pbXBvcnQgeyBNb2RhbCB9IGZyb20gJy4uLy4uLy4uL1VJL0NvbnRhaW5lci9Nb2RhbCc7XHJcbmltcG9ydCB7IFBsdXNCdXR0b24gfSBmcm9tICcuLi8uLi8uLi9VSS9CdXR0b24vUGx1c0J1dHRvbic7XHJcbmltcG9ydCB7IElxQ2FyZCB9IGZyb20gJy4vSXFDYXJkLmpzeCc7XHJcbmltcG9ydCB7IElxRm9ybSB9IGZyb20gJy4vSXFGb3JtL2luZGV4LmpzeCc7XHJcblxyXG5leHBvcnQgY29uc3QgSW5ncmVkaWVudHNRdWFudGl0aWVzSW5wdXQgPSAoe25hbWUsIHZhbHVlfSkgPT4ge1xyXG5cclxuICAgIGNvbnN0IFtmb3JtSXNPcGVuLCBvcGVuRm9ybSwgY2xvc2VGb3JtXSA9IHVzZU9wZW5TdGF0ZShmYWxzZSk7XHJcblxyXG4gICAgLy/DqXRhdCBsb2NhbFxyXG4gICAgY29uc3QgW2luZ3JlZGllbnRzUXVhbnRpdGllcywgc2V0SW5ncmVkaWVudHNRdWFudGl0aWVzXSA9IHVzZVN0YXRlKFtdKTtcclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgaWYodmFsdWUpIHtcclxuICAgICAgICAgICAgc2V0SW5ncmVkaWVudHNRdWFudGl0aWVzKFxyXG4gICAgICAgICAgICAgICAgSlNPTi5wYXJzZSh2YWx1ZSlcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9XHJcbiAgICB9LCBbXSk7XHJcblxyXG4gICAgLy/DqXRhdCBsb2NhbCBzdHJpbmdpZmnDqSBwb3VyIHN1Ym1pdFxyXG4gICAgY29uc3QgW2luZ3JlZGllbnRzUXVhbnRpdGllc1N0cmluZywgc2V0SW5ncmVkaWVudHNRdWFudGl0aWVzU3RyaW5nXSA9IHVzZVN0YXRlKCcnKTtcclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgaWYoaW5ncmVkaWVudHNRdWFudGl0aWVzLmxlbmd0aCA8IDEpIHtcclxuICAgICAgICAgICAgc2V0SW5ncmVkaWVudHNRdWFudGl0aWVzU3RyaW5nKCcnKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBzZXRJbmdyZWRpZW50c1F1YW50aXRpZXNTdHJpbmcoXHJcbiAgICAgICAgICAgICAgICBKU09OLnN0cmluZ2lmeShpbmdyZWRpZW50c1F1YW50aXRpZXMpXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfVxyXG4gICAgfSwgW2luZ3JlZGllbnRzUXVhbnRpdGllc10pO1xyXG4gICAgXHJcblxyXG4gICAgY29uc3QgYWRkSW5ncmVkaWVudFF1YW50aXR5ID0gaW5ncmVkaWVudFF1YW50aXR5ID0+IHtcclxuICAgICAgICBzZXRJbmdyZWRpZW50c1F1YW50aXRpZXMoaW5ncmVkaWVudHNRdWFudGl0aWVzID0+IChbXHJcbiAgICAgICAgICAgIC4uLmluZ3JlZGllbnRzUXVhbnRpdGllcyxcclxuICAgICAgICAgICAgaW5ncmVkaWVudFF1YW50aXR5XHJcbiAgICAgICAgXSkpO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCByZW1vdmVJbmdyZWRpZW50UXVhbnRpdHkgPSBpbmdyZWRpZW50UXVhbnRpdHkgPT4ge1xyXG4gICAgICAgIHNldEluZ3JlZGllbnRzUXVhbnRpdGllcyhpbmdyZWRpZW50c1F1YW50aXRpZXMgPT4gKFxyXG4gICAgICAgICAgICBpbmdyZWRpZW50c1F1YW50aXRpZXMuZmlsdGVyKGkgPT4gaS5pZCAhPT0gaW5ncmVkaWVudFF1YW50aXR5LmlkKVxyXG4gICAgICAgICkpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHVwZGF0ZUluZ3JlZGllbnRRdWFudGl0eSA9IChpZCwgaW5ncmVkaWVudFF1YW50aXR5KSA9PiB7XHJcbiAgICAgICAgc2V0SW5ncmVkaWVudHNRdWFudGl0aWVzKGluZ3JlZGllbnRzUXVhbnRpdGllcyA9PiAoXHJcbiAgICAgICAgICAgIGluZ3JlZGllbnRzUXVhbnRpdGllcy5tYXAoaSA9PiBpLmlkID09PSBpZCA/IGluZ3JlZGllbnRRdWFudGl0eTogaSlcclxuICAgICAgICApKVxyXG4gICAgfTtcclxuXHJcblxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhZG1pbi1mb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgIDxsYWJlbD5Jbmdyw6lkaWVudHMgKjwvbGFiZWw+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWRtaW4tc2VsZWN0LWxpc3RcIj5cclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBpbmdyZWRpZW50c1F1YW50aXRpZXMubWFwKGluZ3JlZGllbnRRdWFudGl0eSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxJcUNhcmQgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2luZ3JlZGllbnRRdWFudGl0eS5pZH0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbmdyZWRpZW50UXVhbnRpdHk9e2luZ3JlZGllbnRRdWFudGl0eX0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZW1vdmU9e3JlbW92ZUluZ3JlZGllbnRRdWFudGl0eX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVwZGF0ZT17dXBkYXRlSW5ncmVkaWVudFF1YW50aXR5fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICkpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPFBsdXNCdXR0b24gY2xhc3NOYW1lPVwiYWRtaW4tYWRkLWJ1dHRvblwiIG9uQ2xpY2s9e29wZW5Gb3JtfSAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPE1vZGFsIGlzT3Blbj17Zm9ybUlzT3Blbn0gY2xvc2U9e2Nsb3NlRm9ybX0gYW5pbWF0ZWQ9e2ZhbHNlfSBhZGRpdGlvbmFsQ2xhc3M9XCJhZG1pbi1mb3JtLW1vZGFsXCI+XHJcbiAgICAgICAgICAgICAgICA8SXFGb3JtIFxyXG4gICAgICAgICAgICAgICAgICAgIG9uU3VibWl0U3VjY2Vzcz17YWRkSW5ncmVkaWVudFF1YW50aXR5fSBcclxuICAgICAgICAgICAgICAgICAgICBjbG9zZT17Y2xvc2VGb3JtfSBcclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvTW9kYWw+XHJcbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiaGlkZGVuXCIgbmFtZT17bmFtZX0gdmFsdWU9e2luZ3JlZGllbnRzUXVhbnRpdGllc1N0cmluZ30gLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5cclxuXHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IENsb3NlQnV0dG9uIH0gZnJvbSAnLi4vLi4vLi4vLi4vVUkvQnV0dG9uL0Nsb3NlQnV0dG9uJztcclxuaW1wb3J0IHsgQWRtaW5TaG93Q2FyZFJvdyB9IGZyb20gJy4uLy4uLy4uLy4uL3N0eWxlcy9VSS9BZG1pbi9Gb3JtL0FkbWluU2hvd0NhcmRSb3cnO1xyXG5pbXBvcnQgeyBwcmljZUZvcm1hdGVyIH0gZnJvbSAnLi4vLi4vLi4vLi4vZnVuY3Rpb25zL2Zvcm1hdGVycyc7XHJcbmltcG9ydCB7IEVkaXRCdXR0b24gfSBmcm9tICcuLi8uLi8uLi8uLi9VSS9CdXR0b24vRWRpdEJ1dHRvbic7XHJcbmltcG9ydCB7IE1vZGFsIH0gZnJvbSAnLi4vLi4vLi4vLi4vVUkvQ29udGFpbmVyL01vZGFsJztcclxuaW1wb3J0IHsgdXNlT3BlblN0YXRlIH0gZnJvbSAnLi4vLi4vLi4vLi4vQ3VzdG9tSG9vay9zdGF0ZS91c2VPcGVuU3RhdGUnO1xyXG5pbXBvcnQgeyBQYWNrYWdpbmdDaG9pY2VzRm9ybSB9IGZyb20gJy4vUGFja2FnaW5nQ2hvaWNlc0Zvcm0nO1xyXG5cclxuZXhwb3J0IGNvbnN0IEFkbWluUGFja2FnaW5nQ2FyZCA9ICh7cGFja2FnaW5nLCByZW1vdmUsIHVwZGF0ZSwgcGFja2FnaW5nQ2hvaWNlcywgcHJvZHVjdElkLCBzZWxlY3RBc0Jhc2V9KSA9PiB7XHJcblxyXG4gICAgY29uc3QgaGFuZGxlUmVtb3ZlID0gKCkgPT4ge1xyXG4gICAgICAgIHJlbW92ZShwYWNrYWdpbmcpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGhhbmRsZVVwZGF0ZSA9IChmb3JtRGF0YSkgPT4ge1xyXG4gICAgICAgIHVwZGF0ZShwYWNrYWdpbmcucHVibGljUmVmLCBmb3JtRGF0YSk7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IFtmb3JtSXNPcGVuLCBvcGVuRm9ybSwgY2xvc2VGb3JtXSA9IHVzZU9wZW5TdGF0ZShmYWxzZSk7XHJcblxyXG4gICAgY29uc3QgaGFuZGxlQ2xpY2sgPSBlID0+IHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgc2VsZWN0QXNCYXNlKHBhY2thZ2luZyk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17J2FkbWluLXNlbGVjdC1jYXJkIGFkbWluLXBhY2thZ2luZy1jYXJkJyArIChwYWNrYWdpbmcuYmFzZSA/ICcgYWN0aXZlJzogJycpfSBvbkNsaWNrPXtoYW5kbGVDbGlja30gdGl0bGU9e3BhY2thZ2luZy5iYXNlID8gJ0NvbmRpdGlvbm5lbWVudCBkZSBiYXNlJzogJ0Nob2lzaXIgY29tbWUgY29uZGl0aW9ubmVtZW50IGRlIGJhc2UnfT5cclxuICAgICAgICAgICAgICAgIDxDbG9zZUJ1dHRvbiBjbGFzc05hbWU9XCJhZG1pbi1zZWxlY3QtY2FyZC1jbG9zZXJcIiBvbkNsaWNrPXtoYW5kbGVSZW1vdmV9IC8+XHJcbiAgICAgICAgICAgICAgICA8RWRpdEJ1dHRvbiBjbGFzc05hbWU9XCJhZG1pbi1zZWxlY3QtY2FyZC1lZGl0LWJ1dHRvblwiIG9uQ2xpY2s9e29wZW5Gb3JtfSAvPlxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFja2FnaW5nLmJhc2UgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNlbnRlci13cmFwcGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFkbWluLXNlbGVjdC1jYXJkLWJhZGdlXCI+Q29uZGl0aW9ubmVtZW50IGRlIGJhc2U8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIDxBZG1pblNob3dDYXJkUm93IGxhYmVsPVwiUsOpZi4gcHVibGlxdWVcIiB2YWx1ZT17cGFja2FnaW5nLnB1YmxpY1JlZn0gLz5cclxuICAgICAgICAgICAgICAgIDxBZG1pblNob3dDYXJkUm93IGxhYmVsPVwiUsOpZi4gcHJpdsOpZVwiIHZhbHVlPXtwYWNrYWdpbmcucHJpdmF0ZVJlZn0gLz5cclxuICAgICAgICAgICAgICAgIDxBZG1pblNob3dDYXJkUm93IGxhYmVsPVwiQ29kZSBFQU5cIiB2YWx1ZT17cGFja2FnaW5nLmVhbkNvZGV9IC8+XHJcblxyXG4gICAgICAgICAgICAgICAgPEFkbWluU2hvd0NhcmRSb3cgbGFiZWw9XCJMYWJlbCAoRU4pXCIgdmFsdWU9e3BhY2thZ2luZy5lbkxhYmVsfSBsYW5nPVwiZW5cIiAvPlxyXG4gICAgICAgICAgICAgICAgPEFkbWluU2hvd0NhcmRSb3cgbGFiZWw9XCJMYWJlbCAoRlIpXCIgdmFsdWU9e3BhY2thZ2luZy5mckxhYmVsfSBsYW5nPVwiZnJcIiAvPlxyXG4gICAgICAgICAgICAgICAgPEFkbWluU2hvd0NhcmRSb3cgbGFiZWw9XCJMYWJlbCAoRVMpXCIgdmFsdWU9e3BhY2thZ2luZy5lc0xhYmVsfSBsYW5nPVwiZXNcIiAvPlxyXG4gICAgICAgICAgICAgICAgPEFkbWluU2hvd0NhcmRSb3cgbGFiZWw9XCJMYWJlbCAoSVQpXCIgdmFsdWU9e3BhY2thZ2luZy5pdExhYmVsfSBsYW5nPVwiaXRcIiAvPlxyXG5cclxuICAgICAgICAgICAgICAgIDxBZG1pblNob3dDYXJkUm93IGxhYmVsPVwiUHJpeCBwdWJsaWMgKEhUKVwiIHZhbHVlPXtwcmljZUZvcm1hdGVyKHBhY2thZ2luZy5jb25zdW1lclByaWNlSFQpfSAvPlxyXG4gICAgICAgICAgICAgICAgPEFkbWluU2hvd0NhcmRSb3cgbGFiZWw9XCJQcml4IHBybyAoSFQpXCIgdmFsdWU9e3ByaWNlRm9ybWF0ZXIocGFja2FnaW5nLmJ1c2luZXNzUHJpY2VIVCl9IC8+XHJcbiAgICAgICAgICAgICAgICA8QWRtaW5TaG93Q2FyZFJvdyBsYWJlbD1cIlBvaWRzIChnKVwiIHZhbHVlPXtwYWNrYWdpbmcud2VpZ2h0fSAvPlxyXG4gICAgICAgICAgICAgICAgPEFkbWluU2hvd0NhcmRSb3cgbGFiZWw9XCJEcm9pdHMgZCdhY2Npc2VcIiB2YWx1ZT17XHJcbiAgICAgICAgICAgICAgICAgICAgcGFja2FnaW5nLmV4Y2lzZVRheCA/IHByaWNlRm9ybWF0ZXIocGFja2FnaW5nLmV4Y2lzZVRheCk6ICcnXHJcbiAgICAgICAgICAgICAgICB9IC8+XHJcbiAgICAgICAgICAgICAgICA8QWRtaW5TaG93Q2FyZFJvdyBsYWJlbD1cIkNvdGlzYXRpb24gU8OpY3VyaXTDqSBTb2NpYWxlIChGcmFuY2UpXCIgdmFsdWU9e1xyXG4gICAgICAgICAgICAgICAgICAgIHBhY2thZ2luZy5mclNvY2lhbFRheCA/IHByaWNlRm9ybWF0ZXIocGFja2FnaW5nLmZyU29jaWFsVGF4KTogJydcclxuICAgICAgICAgICAgICAgIH0gLz5cclxuICAgICAgICAgICAgICAgIDxBZG1pblNob3dDYXJkUm93IGxhYmVsPVwiU3RvY2tcIiB2YWx1ZT17cGFja2FnaW5nLnN0b2NrfSAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPE1vZGFsIGlzT3Blbj17Zm9ybUlzT3Blbn0gY2xvc2U9e2Nsb3NlRm9ybX0gYW5pbWF0ZWQ9e2ZhbHNlfSBhZGRpdGlvbmFsQ2xhc3M9XCJhZG1pbi1mb3JtLW1vZGFsXCI+XHJcbiAgICAgICAgICAgICAgICA8UGFja2FnaW5nQ2hvaWNlc0Zvcm0gb25TdWJtaXRTdWNjZXNzPXtoYW5kbGVVcGRhdGV9IGNsb3NlPXtjbG9zZUZvcm19IHBhY2thZ2luZz17cGFja2FnaW5nfSBwYWNrYWdpbmdDaG9pY2VzPXtwYWNrYWdpbmdDaG9pY2VzfSBwcm9kdWN0SWQ9e3Byb2R1Y3RJZH0gLz5cclxuICAgICAgICAgICAgPC9Nb2RhbD5cclxuICAgICAgICA8Lz5cclxuICAgIClcclxufSIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0ICogYXMgeXVwIGZyb20gXCJ5dXBcIlxyXG5pbXBvcnQgeyB1c2VGb3JtV2l0aFZhbGlkYXRpb24gfSBmcm9tICcuLi8uLi8uLi8uLi9DdXN0b21Ib29rL2Zvcm0vdXNlRm9ybVdpdGhWYWxpZGF0aW9uJztcclxuaW1wb3J0IHsgQWRtaW5UZXh0RmllbGQgfSBmcm9tICcuLi8uLi8uLi8uLi9zdHlsZXMvVUkvQWRtaW4vRm9ybS9BZG1pblRleHRGaWVsZCc7XHJcbmltcG9ydCB7IGFwaUZldGNoIH0gZnJvbSAnLi4vLi4vLi4vLi4vZnVuY3Rpb25zL2FwaSc7XHJcbmltcG9ydCB7IFByaWNlQ2FsY3VsYXRvciB9IGZyb20gJy4vUHJpY2VDYWxjdWxhdG9yJztcclxuXHJcblxyXG5jb25zdCBwYWNrYWdpbmdTY2hlbWEgPSB5dXBcclxuICAub2JqZWN0KHtcclxuICAgIHB1YmxpY1JlZjogeXVwLnN0cmluZygpLm1heCgyMDAsICcyMDAgY2FyYWN0w6hyZXMgbWF4LicpLnJlcXVpcmVkKCdMZSByw6lmLiBwdWJsaXF1ZSBlc3Qgb2JsaWdhdG9pcmUnKSxcclxuICAgIHByaXZhdGVSZWY6IHl1cC5zdHJpbmcoKS5tYXgoMjAwLCAnMjAwIGNhcmFjdMOocmVzIG1heC4nKSxcclxuICAgIGVuTGFiZWw6IHl1cC5zdHJpbmcoKS5tYXgoMjAwLCAnMjAwIGNhcmFjdMOocmVzIG1heC4nKSxcclxuICAgIGZyTGFiZWw6IHl1cC5zdHJpbmcoKS5tYXgoMjAwLCAnMjAwIGNhcmFjdMOocmVzIG1heC4nKSxcclxuICAgIGVzTGFiZWw6IHl1cC5zdHJpbmcoKS5tYXgoMjAwLCAnMjAwIGNhcmFjdMOocmVzIG1heC4nKSxcclxuICAgIGl0TGFiZWw6IHl1cC5zdHJpbmcoKS5tYXgoMjAwLCAnMjAwIGNhcmFjdMOocmVzIG1heC4nKSxcclxuICAgIGNvbnN1bWVyUHJpY2VIVDogeXVwLm51bWJlcigpLnR5cGVFcnJvcignQ2V0dGUgdmFsZXVyIGRvaXQgw6p0cmUgdW4gbm9tYnJlJykucG9zaXRpdmUoJ0NldHRlIHZhbGV1ciBkb2l0IMOqdHJlIHN1cMOpcmlldXJlIMOgIDAnKS5yZXF1aXJlZCgnTGUgcHJpeCBwdWJsaWMgKEhUKSBlc3Qgb2JsaWdhdG9pcmUnKSxcclxuICAgIGJ1c2luZXNzUHJpY2VIVDogeXVwLm51bWJlcigpLnR5cGVFcnJvcignQ2V0dGUgdmFsZXVyIGRvaXQgw6p0cmUgdW4gbm9tYnJlJykucG9zaXRpdmUoJ0NldHRlIHZhbGV1ciBkb2l0IMOqdHJlIHN1cMOpcmlldXJlIMOgIDAnKS5yZXF1aXJlZCgnTGUgcHJpeCBwcm8gKEhUKSBlc3Qgb2JsaWdhdG9pcmUnKSxcclxuICAgIHN0b2NrOiB5dXAubnVtYmVyKCkudHlwZUVycm9yKCdDZXR0ZSB2YWxldXIgZG9pdCDDqnRyZSB1biBub21icmUnKS5taW4oMCwgJ0NldHRlIHZhbGV1ciBuZSBwZXV0IMOqdHJlIG7DqWdhdGl2ZScpLnJlcXVpcmVkKCdMZSBzdG9jayBlc3Qgb2JsaWdhdG9pcmUnKSxcclxuICAgIGVhbkNvZGU6IHl1cC5zdHJpbmcoKS5tYXgoMjAwLCAnMjAwIGNhcmFjdMOocmVzIG1heC4nKS5yZXF1aXJlZCgnTGUgY29kZSBFQU4gZXN0IG9ibGlnYXRvaXJlJyksXHJcbiAgICB3ZWlnaHQ6IHl1cC5udW1iZXIoKS50eXBlRXJyb3IoJ0NldHRlIHZhbGV1ciBkb2l0IMOqdHJlIHVuIG5vbWJyZScpLnBvc2l0aXZlKCdDZXR0ZSB2YWxldXIgZG9pdCDDqnRyZSBzdXDDqXJpZXVyZSDDoCB6w6lybycpLnJlcXVpcmVkKCdMZSBwb2lkcyAoZykgZXN0IG9ibGlnYXRvaXJlJyksXHJcbiAgfSlcclxuICAucmVxdWlyZWQoKTtcclxuXHJcblxyXG5jb25zdCBkZWZhdWx0UGFja2FnaW5nID0ge1xyXG4gICAgcHVibGljUmVmOiAnJyxcclxuICAgIHByaXZhdGVSZWY6ICcnLFxyXG4gICAgZW5MYWJlbDogJycsXHJcbiAgICBmckxhYmVsOiAnJyxcclxuICAgIGVzTGFiZWw6ICcnLFxyXG4gICAgaXRMYWJlbDogJycsXHJcbiAgICBzdXBwbHlQcmljZUhUOiAnJyxcclxuICAgIGNvbnN1bWVyUHJpY2VIVDogJycsXHJcbiAgICBidXNpbmVzc1ByaWNlSFQ6ICcnLFxyXG4gICAgc3RvY2s6ICcnLFxyXG4gICAgZWFuQ29kZTogJycsXHJcbiAgICB3ZWlnaHQ6ICcnLFxyXG4gICAgZXhjaXNlVGF4OiAnJyxcclxuICAgIGZyU29jaWFsVGF4OiAnJ1xyXG59O1xyXG5cclxuY29uc3QgcHJlcGFyZURlZmF1bHRQYWNrYWdpbmcgPSBwYWNrYWdpbmcgPT4ge1xyXG4gICAgaWYoIXBhY2thZ2luZykge1xyXG4gICAgICAgIHJldHVybiBkZWZhdWx0UGFja2FnaW5nO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5wYWNrYWdpbmcsXHJcbiAgICAgICAgc3VwcGx5UHJpY2VIVDogcGFja2FnaW5nLnN1cHBseVByaWNlSFQgLyAxMDAsXHJcbiAgICAgICAgY29uc3VtZXJQcmljZUhUOiBwYWNrYWdpbmcuY29uc3VtZXJQcmljZUhUIC8gMTAwLFxyXG4gICAgICAgIGJ1c2luZXNzUHJpY2VIVDogcGFja2FnaW5nLmJ1c2luZXNzUHJpY2VIVCAvIDEwMCxcclxuICAgICAgICBleGNpc2VUYXg6IHBhY2thZ2luZy5leGNpc2VUYXggPyBwYWNrYWdpbmcuZXhjaXNlVGF4IC8gMTAwOiAnJyxcclxuICAgICAgICBmclNvY2lhbFRheDogcGFja2FnaW5nLmZyU29jaWFsVGF4ID8gcGFja2FnaW5nLmZyU29jaWFsVGF4IC8gMTAwOiAnJ1xyXG4gICAgfTtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IFBhY2thZ2luZ0Nob2ljZXNGb3JtID0gKHtvblN1Ym1pdFN1Y2Nlc3MsIGNsb3NlLCBwYWNrYWdpbmdDaG9pY2VzLCBwcm9kdWN0SWQsIHZhdExldmVsLCBwYWNrYWdpbmcgPSBudWxsfSkgPT4ge1xyXG4gICAgY29uc3Qge2hhbmRsZVN1Ym1pdCwgY29udHJvbCwgZXJyb3JzLCBzZXRFcnJvciwgc2V0VmFsdWUsIHdhdGNoLCBpc1N1Ym1pdHRpbmd9ID0gdXNlRm9ybVdpdGhWYWxpZGF0aW9uKHBhY2thZ2luZ1NjaGVtYSwgcHJlcGFyZURlZmF1bHRQYWNrYWdpbmcocGFja2FnaW5nKSk7XHJcblxyXG4gICAgY29uc3QgW2lzTG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gICAgY29uc3Qgb25TdWJtaXQgPSBhc3luYyBmb3JtRGF0YSA9PiB7XHJcbiAgICAgICAgaWYoaXNMb2FkaW5nKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgc2V0TG9hZGluZyh0cnVlKTtcclxuICAgICAgICAvL3ZhbGlkYXRpb24gVW5pcXVlIHB1YmxpY1JlZiBjw7R0w6kgZnJvbnQgKGVuIGNhcyBkZSB1cGRhdGUsIG9uIHbDqXJpZmllIHF1J29uIGEgbW9kaWZpw6kgbGEgcHVibGljUmVmKVxyXG4gICAgICAgIGlmKCFwYWNrYWdpbmdDaG9pY2VzLmZpbmQocCA9PiB7XHJcbiAgICAgICAgICAgIGlmKHBhY2thZ2luZyAmJiBwYWNrYWdpbmcucHVibGljUmVmID09PSBmb3JtRGF0YS5wdWJsaWNSZWYpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gcC5wdWJsaWNSZWYgPT09IGZvcm1EYXRhLnB1YmxpY1JlZjtcclxuICAgICAgICB9KSkge1xyXG4gICAgICAgICAgICAvL3ZhbGlkYXRpb24gVW5pcXVlIHB1YmxpY1JlZiBjw7R0w6kgc2VydmV1clxyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgYXdhaXQgYXBpRmV0Y2goJy9hZG1pbi9hcGkvcGFja2FnaW5nL3ZhbGlkYXRpb24vdW5pcXVlUHVibGljUmVmLycrIChwcm9kdWN0SWQgPz8gJzAnKSArJy8nKyBmb3JtRGF0YS5wdWJsaWNSZWYpOyAvL2RhbnMgY3JlYXRlIHByb2R1Y3RJZCBlc3QgdW5kZWZpbmVkIC0tPiBvbiBlbnZvaWUgMFxyXG4gICAgICAgICAgICAgICAgLy9wcmljZVRyYW5zZm9ybWVyXHJcbiAgICAgICAgICAgICAgICBmb3JtRGF0YS5zdXBwbHlQcmljZUhUID0gTWF0aC5yb3VuZChmb3JtRGF0YS5zdXBwbHlQcmljZUhUICogMTAwKTtcclxuICAgICAgICAgICAgICAgIGZvcm1EYXRhLmNvbnN1bWVyUHJpY2VIVCA9IE1hdGgucm91bmQoZm9ybURhdGEuY29uc3VtZXJQcmljZUhUICogMTAwKTtcclxuICAgICAgICAgICAgICAgIGZvcm1EYXRhLmJ1c2luZXNzUHJpY2VIVCA9IE1hdGgucm91bmQoZm9ybURhdGEuYnVzaW5lc3NQcmljZUhUICogMTAwKTtcclxuICAgICAgICAgICAgICAgIGZvcm1EYXRhLmV4Y2lzZVRheCA9IE1hdGgucm91bmQoZm9ybURhdGEuZXhjaXNlVGF4ICogMTAwKTtcclxuICAgICAgICAgICAgICAgIGZvcm1EYXRhLmZyU29jaWFsVGF4ID0gTWF0aC5yb3VuZChmb3JtRGF0YS5mclNvY2lhbFRheCAqIDEwMCk7XHJcbiAgICAgICAgICAgICAgICBvblN1Ym1pdFN1Y2Nlc3MoZm9ybURhdGEpO1xyXG4gICAgICAgICAgICAgICAgY2xvc2UoKTtcclxuICAgICAgICAgICAgfSBjYXRjaChlKSB7XHJcbiAgICAgICAgICAgICAgICAvL1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNldEVycm9yKCdwdWJsaWNSZWYnLCB7dHlwZTogJ2N1c3RvbScsIG1lc3NhZ2U6ICdMYSByw6lmLiBwdWJsaXF1ZSBcIicgKyBmb3JtRGF0YS5wdWJsaWNSZWYgKyAnXCIgZXN0IGTDqWrDoCB1dGlsaXPDqWUnfSk7XHJcbiAgICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8Zm9ybSBjbGFzc05hbWU9XCJhZG1pbi1mb3JtXCIgb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdChvblN1Ym1pdCl9PlxyXG4gICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwiYWRtaW4tZm9ybS1tb2RhbC10aXRsZVwiPkNvbmRpdGlvbm5lbWVudDwvaDI+XHJcbiAgICAgICAgICAgIDxBZG1pblRleHRGaWVsZCBjb250cm9sPXtjb250cm9sfSBuYW1lPVwicHVibGljUmVmXCIgZXJyb3I9e2Vycm9ycy5wdWJsaWNSZWY/Lm1lc3NhZ2V9IG1heExlbmd0aD1cIjIwMFwiPlLDqWYuIHB1YmxpcXVlICo8L0FkbWluVGV4dEZpZWxkPlxyXG4gICAgICAgICAgICA8QWRtaW5UZXh0RmllbGQgY29udHJvbD17Y29udHJvbH0gbmFtZT1cInByaXZhdGVSZWZcIiBlcnJvcj17ZXJyb3JzLnByaXZhdGVSZWY/Lm1lc3NhZ2V9IG1heExlbmd0aD1cIjIwMFwiPlLDqWYuIHByaXbDqWU8L0FkbWluVGV4dEZpZWxkPlxyXG5cclxuICAgICAgICAgICAgPEFkbWluVGV4dEZpZWxkIGNvbnRyb2w9e2NvbnRyb2x9IG5hbWU9XCJlYW5Db2RlXCIgZXJyb3I9e2Vycm9ycy5lYW5Db2RlPy5tZXNzYWdlfSBtYXhMZW5ndGg9XCIyMDBcIj5Db2RlIEVBTiAqPC9BZG1pblRleHRGaWVsZD5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWRtaW4tZm9ybS1tb2RhbC1hcHBhcnRlZFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhZG1pbi1mb3JtLW1vZGFsLWFwcGFydGVkLXRpdGxlXCI+TGFiZWwgOiAoZXg6IDIwY2wgLSBzaSBjJ2VzdCDDoCBsJ3VuaXTDqSBuZSByaWVuIG1ldHRyZSk8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxBZG1pblRleHRGaWVsZCBjb250cm9sPXtjb250cm9sfSBuYW1lPVwiZW5MYWJlbFwiIGVycm9yPXtlcnJvcnMuZW5MYWJlbD8ubWVzc2FnZX0gbWF4TGVuZ3RoPVwiMjAwXCI+RU48L0FkbWluVGV4dEZpZWxkPlxyXG4gICAgICAgICAgICAgICAgPEFkbWluVGV4dEZpZWxkIGNvbnRyb2w9e2NvbnRyb2x9IG5hbWU9XCJmckxhYmVsXCIgZXJyb3I9e2Vycm9ycy5mckxhYmVsPy5tZXNzYWdlfSBtYXhMZW5ndGg9XCIyMDBcIj5GUjwvQWRtaW5UZXh0RmllbGQ+XHJcbiAgICAgICAgICAgICAgICA8QWRtaW5UZXh0RmllbGQgY29udHJvbD17Y29udHJvbH0gbmFtZT1cImVzTGFiZWxcIiBlcnJvcj17ZXJyb3JzLmVzTGFiZWw/Lm1lc3NhZ2V9IG1heExlbmd0aD1cIjIwMFwiPkVTPC9BZG1pblRleHRGaWVsZD5cclxuICAgICAgICAgICAgICAgIDxBZG1pblRleHRGaWVsZCBjb250cm9sPXtjb250cm9sfSBuYW1lPVwiaXRMYWJlbFwiIGVycm9yPXtlcnJvcnMuaXRMYWJlbD8ubWVzc2FnZX0gbWF4TGVuZ3RoPVwiMjAwXCI+SVQ8L0FkbWluVGV4dEZpZWxkPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDxBZG1pblRleHRGaWVsZCB0eXBlPVwibnVtYmVyXCIgY29udHJvbD17Y29udHJvbH0gbmFtZT1cInN1cHBseVByaWNlSFRcIiBlcnJvcj17ZXJyb3JzLnN1cHBseVByaWNlSFQ/Lm1lc3NhZ2V9IG1heExlbmd0aD1cIjIwMFwiPlByaXggZCdhY2hhdCAoSFQpPC9BZG1pblRleHRGaWVsZD5cclxuXHJcbiAgICAgICAgICAgIDxQcmljZUNhbGN1bGF0b3IgXHJcbiAgICAgICAgICAgICAgICBzZXRWYWx1ZT17c2V0VmFsdWV9IFxyXG4gICAgICAgICAgICAgICAgdmF0TGV2ZWw9e3ZhdExldmVsfSBcclxuICAgICAgICAgICAgICAgIHN1cHBseVByaWNlSFQ9e3dhdGNoKCdzdXBwbHlQcmljZUhUJyl9XHJcbiAgICAgICAgICAgICAgICBjb25zdW1lclByaWNlSFQ9e3dhdGNoKCdjb25zdW1lclByaWNlSFQnKX1cclxuICAgICAgICAgICAgICAgIGJ1c2luZXNzUHJpY2VIVD17d2F0Y2goJ2J1c2luZXNzUHJpY2VIVCcpfVxyXG4gICAgICAgICAgICAgICAgY29uc3VtZXJQcmljZUVycm9yPXtlcnJvcnMuY29uc3VtZXJQcmljZUhUPy5tZXNzYWdlfVxyXG4gICAgICAgICAgICAgICAgYnVzaW5lc3NQcmljZUVycm9yPXtlcnJvcnMuYnVzaW5lc3NQcmljZUhUPy5tZXNzYWdlfVxyXG4gICAgICAgICAgICAvPiBcclxuXHJcbiAgICAgICAgICAgIDxBZG1pblRleHRGaWVsZCB0eXBlPVwibnVtYmVyXCIgY29udHJvbD17Y29udHJvbH0gbmFtZT1cImV4Y2lzZVRheFwiIGVycm9yPXtlcnJvcnMuZXhjaXNlVGF4Py5tZXNzYWdlfSBtYXhMZW5ndGg9XCIyMDBcIj5Ecm9pdHMgZCdhY2Npc2UgKEVVUik8L0FkbWluVGV4dEZpZWxkPlxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgPEFkbWluVGV4dEZpZWxkIHR5cGU9XCJudW1iZXJcIiBjb250cm9sPXtjb250cm9sfSBuYW1lPVwiZnJTb2NpYWxUYXhcIiBlcnJvcj17ZXJyb3JzLmZyU29jaWFsVGF4Py5tZXNzYWdlfSBtYXhMZW5ndGg9XCIyMDBcIj5Db3Rpc2F0aW9uIFPDqWN1cml0w6kgU29jaWFsZSAoRnJhbmNlKSAoRVVSKTwvQWRtaW5UZXh0RmllbGQ+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8QWRtaW5UZXh0RmllbGQgdHlwZT1cIm51bWJlclwiIGNvbnRyb2w9e2NvbnRyb2x9IG5hbWU9XCJ3ZWlnaHRcIiBlcnJvcj17ZXJyb3JzLndlaWdodD8ubWVzc2FnZX0gbWF4TGVuZ3RoPVwiMjAwXCI+UG9pZHMgKGcpICo8L0FkbWluVGV4dEZpZWxkPlxyXG5cclxuXHJcbiAgICAgICAgICAgIDxBZG1pblRleHRGaWVsZCB0eXBlPVwibnVtYmVyXCIgY29udHJvbD17Y29udHJvbH0gbmFtZT1cInN0b2NrXCIgZXJyb3I9e2Vycm9ycy5zdG9jaz8ubWVzc2FnZX0gbWF4TGVuZ3RoPVwiMjAwXCI+U3RvY2sgKjwvQWRtaW5UZXh0RmllbGQ+XHJcblxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBPYmplY3QudmFsdWVzKGVycm9ycykubGVuZ3RoID4gMCAmJiA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZXJyb3JcIj5MZSBmb3JtdWxhaXJlIGNvbXBvcnRlIGRlcyBlcnJldXJzPC9kaXY+XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWRtaW4tc3VibWl0LWdyb3VwIGRvdWJsZVwiPlxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGlzTG9hZGluZyA/IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhZG1pbi1mb3JtLWluZm9cIj5DaGFyZ2VtZW50Li4uPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgKTogKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPVwiYWRtaW4tYnV0dG9uIHNlY29uZGFyeS1jb2xvclwiIG9uQ2xpY2s9e2Nsb3NlfT5Bbm51bGVyPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBjbGFzc05hbWU9XCJhZG1pbi1idXR0b25cIj5WYWxpZGVyPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9mb3JtPlxyXG4gICAgKVxyXG59IiwiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IGFwaUZldGNoIH0gZnJvbSAnLi4vLi4vLi4vLi4vZnVuY3Rpb25zL2FwaSc7XHJcbmltcG9ydCB7IGNhbGNQcmljZUhUIH0gZnJvbSAnLi4vLi4vLi4vLi4vZnVuY3Rpb25zL3ByaWNlL3ZhdENhbGN1bGF0b3InO1xyXG5pbXBvcnQgeyBwcmljZUZvcm1hdGVyIH0gZnJvbSAnLi4vLi4vLi4vLi4vZnVuY3Rpb25zL2Zvcm1hdGVycyc7XHJcblxyXG5leHBvcnQgY29uc3QgUHJpY2VDYWxjdWxhdG9yID0gKHtzZXRWYWx1ZSwgc3VwcGx5UHJpY2VIVCwgdmF0TGV2ZWwsIGJ1c2luZXNzUHJpY2VIVCwgY29uc3VtZXJQcmljZUhULCBidXNpbmVzc1ByaWNlRXJyb3IsIGNvbnN1bWVyUHJpY2VFcnJvcn0pID0+IHtcclxuXHJcbiAgICBjb25zdCBbZnJWYXRSYXRlLCBzZXRGclZhdFJhdGVdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIChhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHZhdFJhdGUgPSBhd2FpdCBhcGlGZXRjaCgnL2FkbWluL2FwaS92YXRSYXRlcy9nZXRGci8nICsgdmF0TGV2ZWwpO1xyXG4gICAgICAgICAgICBzZXRGclZhdFJhdGUodmF0UmF0ZSk7XHJcbiAgICAgICAgfSkoKTtcclxuICAgIH0sIFtdKTtcclxuXHJcblxyXG4gICAgY29uc3QgW2NvbnN1bWVyUHJpY2VUVENGUiwgc2V0Q29uc3VtZXJQcmljZVRUQ0ZSXSA9IHVzZVN0YXRlKCcnKTtcclxuICAgIGNvbnN0IFtidXNpbmVzc1ByaWNlVFRDRlIsIHNldEJ1c2luZXNzUHJpY2VUVENGUl0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgICBjb25zdCBbbWFyZ2luLCBzZXRNYXJnaW5dID0gdXNlU3RhdGUobnVsbCk7XHJcblxyXG4gICAgY29uc3QgaGFuZGxlQ2hhbmdlID0gZSA9PiB7XHJcbiAgICAgICAgaWYoZS50YXJnZXQubmFtZSA9PT0gJ2NvbnN1bWVyUHJpY2VUVENGUicpIHtcclxuICAgICAgICAgICAgc2V0Q29uc3VtZXJQcmljZVRUQ0ZSKGUudGFyZ2V0LnZhbHVlKTtcclxuICAgICAgICB9IGVsc2UgaWYoZS50YXJnZXQubmFtZSA9PT0gJ2J1c2luZXNzUHJpY2VUVENGUicpIHtcclxuICAgICAgICAgICAgc2V0QnVzaW5lc3NQcmljZVRUQ0ZSKGUudGFyZ2V0LnZhbHVlKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgLy9jYWxjdWxlciBwcml4IEhUXHJcbiAgICAgICAgaWYoZnJWYXRSYXRlKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHByaWNlSFQgPSBjYWxjUHJpY2VIVChjb25zdW1lclByaWNlVFRDRlIsIGZyVmF0UmF0ZSk7XHJcbiAgICAgICAgICAgIHNldFZhbHVlKCdjb25zdW1lclByaWNlSFQnLCBwcmljZUhUKTtcclxuICAgICAgICAgICAgLy9zaSBvbiBhIHVuIHN1cHBseVByaWNlLCBvbiBjYWxjdWxlIG1hcmdlXHJcbiAgICAgICAgICAgIGlmKHN1cHBseVByaWNlSFQpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IG1hcmdpbkFtb3VudCA9IHByaWNlSFQgLSBzdXBwbHlQcmljZUhUO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgbWFyZ2luUmF0ZSA9IChtYXJnaW5BbW91bnQgLyBzdXBwbHlQcmljZUhUKSAqIDEwMDtcclxuICAgICAgICAgICAgICAgIHNldE1hcmdpbihtYXJnaW4gPT4gKHtcclxuICAgICAgICAgICAgICAgICAgICAuLi5tYXJnaW4sXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3VtZXI6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYW1vdW50OiBtYXJnaW5BbW91bnQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJhdGU6IE1hdGgucm91bmQobWFyZ2luUmF0ZSAqIDEwMCkgLyAxMDAgLy9wb3VyIGFycm9uZGlyIGF2ZWMgMiBkw6ljaW1hbGVzXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSwgW2NvbnN1bWVyUHJpY2VUVENGUl0pO1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgLy9jYWxjdWxlciBwcml4IEhUXHJcbiAgICAgICAgaWYoZnJWYXRSYXRlKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHByaWNlSFQgPSBjYWxjUHJpY2VIVChidXNpbmVzc1ByaWNlVFRDRlIsIGZyVmF0UmF0ZSk7XHJcbiAgICAgICAgICAgIHNldFZhbHVlKCdidXNpbmVzc1ByaWNlSFQnLCBwcmljZUhUKTtcclxuICAgICAgICAgICAgLy9zaSBvbiBhIHVuIHN1cHBseVByaWNlLCBvbiBjYWxjdWxlIG1hcmdlXHJcbiAgICAgICAgICAgIC8vc2kgb24gYSB1biBzdXBwbHlQcmljZSwgb24gY2FsY3VsZSBtYXJnZVxyXG4gICAgICAgICAgICBpZihzdXBwbHlQcmljZUhUKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBtYXJnaW5BbW91bnQgPSBwcmljZUhUIC0gc3VwcGx5UHJpY2VIVDtcclxuICAgICAgICAgICAgICAgIGNvbnN0IG1hcmdpblJhdGUgPSAobWFyZ2luQW1vdW50IC8gc3VwcGx5UHJpY2VIVCkgKiAxMDA7XHJcbiAgICAgICAgICAgICAgICBzZXRNYXJnaW4obWFyZ2luID0+ICh7XHJcbiAgICAgICAgICAgICAgICAgICAgLi4ubWFyZ2luLFxyXG4gICAgICAgICAgICAgICAgICAgIGJ1c2luZXNzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFtb3VudDogbWFyZ2luQW1vdW50LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICByYXRlOiBNYXRoLnJvdW5kKG1hcmdpblJhdGUgKiAxMDApIC8gMTAwIC8vcG91ciBhcnJvbmRpciBhdmVjIDIgZMOpY2ltYWxlc1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0sIFtidXNpbmVzc1ByaWNlVFRDRlJdKTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIGZyVmF0UmF0ZSA/IChcclxuICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWRtaW4tZm9ybS1yb3cgYWRtaW4tbW9kYWwtZm9ybS1yb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFkbWluLWZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJjb25zdW1lclByaWNlVFRDRlJcIiBjbGFzc05hbWU9XCJhZG1pbi1mb3JtLWxhYmVsXCI+UHJpeCBwdWJsaWMgKFRUQyBGcmFuY2UpICo8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgaWQ9XCJjb25zdW1lclByaWNlVFRDRlJcIiBuYW1lPVwiY29uc3VtZXJQcmljZVRUQ0ZSXCIgdHlwZT1cIm51bWJlclwiIGNsYXNzTmFtZT1cImFkbWluLWZvcm0tY29udHJvbFwiIHZhbHVlPXtjb25zdW1lclByaWNlVFRDRlJ9IG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN1bWVyUHJpY2VFcnJvciAmJiA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZXJyb3JcIj57Y29uc3VtZXJQcmljZUVycm9yfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN1bWVyUHJpY2VIVCAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhZG1pbi1mb3JtLWluZm8gc3Ryb25nXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtwcmljZUZvcm1hdGVyKGNvbnN1bWVyUHJpY2VIVCAqIDEwMCl9IEhUXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luPy5jb25zdW1lciAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhZG1pbi1mb3JtLWluZm8gc3Ryb25nXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE1hcmdlIDoge21hcmdpbi5jb25zdW1lci5yYXRlfSAlICh7cHJpY2VGb3JtYXRlcihtYXJnaW4uY29uc3VtZXIuYW1vdW50ICogMTAwKX0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFkbWluLWZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJidXNpbmVzc1ByaWNlVFRDRlJcIiBjbGFzc05hbWU9XCJhZG1pbi1mb3JtLWxhYmVsXCI+UHJpeCBwcm8gKFRUQyBGcmFuY2UpICo8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgaWQ9XCJidXNpbmVzc1ByaWNlVFRDRlJcIiBuYW1lPVwiYnVzaW5lc3NQcmljZVRUQ0ZSXCIgdHlwZT1cIm51bWJlclwiIGNsYXNzTmFtZT1cImFkbWluLWZvcm0tY29udHJvbFwiIHZhbHVlPXtidXNpbmVzc1ByaWNlVFRDRlJ9IG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJ1c2luZXNzUHJpY2VFcnJvciAmJiA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZXJyb3JcIj57YnVzaW5lc3NQcmljZUVycm9yfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJ1c2luZXNzUHJpY2VIVCAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhZG1pbi1mb3JtLWluZm8gc3Ryb25nXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtwcmljZUZvcm1hdGVyKGJ1c2luZXNzUHJpY2VIVCAqIDEwMCl9IEhUXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luPy5idXNpbmVzcyAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhZG1pbi1mb3JtLWluZm8gc3Ryb25nXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE1hcmdlIDoge21hcmdpbi5idXNpbmVzcy5yYXRlfSAlICh7cHJpY2VGb3JtYXRlcihtYXJnaW4uYnVzaW5lc3MuYW1vdW50ICogMTAwKX0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8Lz5cclxuICAgICAgICApOiAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWRtaW4tZm9ybS1pbmZvXCI+Q2hhcmdlbWVudCBkdSBjYWxjdWxhdGV1ciBkZSBwcml4Li4uPC9kaXY+XHJcbiAgICAgICAgKVxyXG4gICAgKVxyXG59IiwiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IEFkbWluUGFja2FnaW5nQ2FyZCB9IGZyb20gJy4vQWRtaW5QYWNrYWdpbmdDYXJkJztcclxuaW1wb3J0IHsgUGFja2FnaW5nQ2hvaWNlc0Zvcm0gfSBmcm9tICcuL1BhY2thZ2luZ0Nob2ljZXNGb3JtJztcclxuaW1wb3J0IHsgUGx1c0J1dHRvbiB9IGZyb20gJy4uLy4uLy4uLy4uL1VJL0J1dHRvbi9QbHVzQnV0dG9uJztcclxuaW1wb3J0IHsgTW9kYWwgfSBmcm9tICcuLi8uLi8uLi8uLi9VSS9Db250YWluZXIvTW9kYWwnO1xyXG5pbXBvcnQgeyB1c2VPcGVuU3RhdGUgfSBmcm9tICcuLi8uLi8uLi8uLi9DdXN0b21Ib29rL3N0YXRlL3VzZU9wZW5TdGF0ZSc7XHJcblxyXG5leHBvcnQgY29uc3QgUGFja2FnaW5nQ2hvaWNlc0lucHV0ID0gKHtuYW1lLCB2YWx1ZSwgcHJvZHVjdElkLCB2YXRMZXZlbH0pID0+IHtcclxuXHJcbiAgICAvL8OgIGwnb3V2ZXJ0dXJlLCBzaSB1bmUgdmFsdWUgZXN0IHBhc3PDqWUgb24gbGEgcHJlbmQgZW4gY29tcHRlXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGlmKHZhbHVlKSB7XHJcbiAgICAgICAgICAgIHNldFBhY2thZ2luZ0Nob2ljZXNTdHJpbmcodmFsdWUpO1xyXG4gICAgICAgICAgICBzZXRQYWNrYWdpbmdDaG9pY2VzKEpTT04ucGFyc2UodmFsdWUpKTtcclxuICAgICAgICB9XHJcbiAgICB9LCBbdmFsdWVdKTtcclxuXHJcbiAgICAvL8OpdGF0IGxvY2FsIGNvbnZlcnRpdCBlbiBzdHJpbmcgcG91ciBzdWJtaXRcclxuICAgIGNvbnN0IFtwYWNrYWdpbmdDaG9pY2VzU3RyaW5nLCBzZXRQYWNrYWdpbmdDaG9pY2VzU3RyaW5nXSA9IHVzZVN0YXRlKCcnKTtcclxuICAgIC8vw6l0YXQgbG9jYWxcclxuICAgIGNvbnN0IFtwYWNrYWdpbmdDaG9pY2VzLCBzZXRQYWNrYWdpbmdDaG9pY2VzXSA9IHVzZVN0YXRlKFtdKTtcclxuICAgIC8vcXVhbmQgw6l0YXQgbG9jYWwgY2hhbmdlLCBvbiBtZXQgw6Agam91ciBsYSBzdHJpbmdcclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgaWYocGFja2FnaW5nQ2hvaWNlcy5sZW5ndGggPCAxKSB7XHJcbiAgICAgICAgICAgIHNldFBhY2thZ2luZ0Nob2ljZXNTdHJpbmcoJycpOyAvLyBwb3VyIHF1ZSBjb3TDqSBzZXJ2ZXVyIG9uIHB1aXNzZSB2YWxpZGVyIEFzc2VydFxcTm90QmxhbmtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAvL3NpIHVuIHNldWwgcGFja2FnaW5nQ2hvaWNlcywgb24gbGUgbWV0IGNvbW1lIHBhY2thZ2luZyBkZSBiYXNlIGQnb2ZmaWNlXHJcbiAgICAgICAgICAgIGlmKHBhY2thZ2luZ0Nob2ljZXMubGVuZ3RoID09PSAxKSB7XHJcbiAgICAgICAgICAgICAgICBwYWNrYWdpbmdDaG9pY2VzWzBdLmJhc2UgPSB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNldFBhY2thZ2luZ0Nob2ljZXNTdHJpbmcoSlNPTi5zdHJpbmdpZnkocGFja2FnaW5nQ2hvaWNlcykpO1xyXG4gICAgICAgIH1cclxuICAgIH0sIFtwYWNrYWdpbmdDaG9pY2VzXSk7XHJcblxyXG4gICAgXHJcblxyXG4gICAgXHJcbiAgICBjb25zdCByZW1vdmVQYWNrYWdpbmcgPSBwYWNrYWdpbmcgPT4ge1xyXG4gICAgICAgIHNldFBhY2thZ2luZ0Nob2ljZXMocGFja2FnaW5nQ2hvaWNlcyA9PiBwYWNrYWdpbmdDaG9pY2VzLmZpbHRlcihwID0+IHAucHVibGljUmVmICE9PSBwYWNrYWdpbmcucHVibGljUmVmKSk7XHJcbiAgICAgICAgLy9zaSBsZSBwYWNrYWdpbmcgc3VwcHJpbcOpIMOpdGFpdCBsZSBwYWNrYWdpbmcgZGUgYmFzZSwgaWwgZmF1dCBlbiBkw6lzaWduZXIgdW4gKG4naW1wb3J0ZSBsZXF1ZWwpIGQnb2ZmaWNlXHJcbiAgICAgICAgaWYocGFja2FnaW5nLmJhc2UpIHtcclxuICAgICAgICAgICAgc2V0UGFja2FnaW5nQ2hvaWNlcyhwYWNrYWdpbmdDaG9pY2VzID0+IHtcclxuICAgICAgICAgICAgICAgIHBhY2thZ2luZ0Nob2ljZXNbMF0uYmFzZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcGFja2FnaW5nQ2hvaWNlcztcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgYWRkUGFja2FnaW5nID0gbmV3UGFja2FnaW5nID0+IHtcclxuICAgICAgICBzZXRQYWNrYWdpbmdDaG9pY2VzKHBhY2thZ2luZ0Nob2ljZXMgPT4gKFtcclxuICAgICAgICAgICAgLi4ucGFja2FnaW5nQ2hvaWNlcyxcclxuICAgICAgICAgICAgbmV3UGFja2FnaW5nXHJcbiAgICAgICAgXSkpO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCB1cGRhdGVQYWNrYWdpbmcgPSAocHVibGljUmVmLCBwYWNrYWdpbmcpID0+IHtcclxuICAgICAgICBzZXRQYWNrYWdpbmdDaG9pY2VzKHBhY2thZ2luZ0Nob2ljZXMgPT4gKFxyXG4gICAgICAgICAgICBwYWNrYWdpbmdDaG9pY2VzLm1hcChwID0+IHAucHVibGljUmVmID09PSBwdWJsaWNSZWYgPyBwYWNrYWdpbmc6IHApXHJcbiAgICAgICAgKSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgaGFuZGxlU2VsZWN0QXNCYXNlID0gKHBhY2thZ2luZykgPT4ge1xyXG4gICAgICAgIHNldFBhY2thZ2luZ0Nob2ljZXMocGFja2FnaW5nQ2hvaWNlcyA9PiBwYWNrYWdpbmdDaG9pY2VzLm1hcChwYyA9PiB7XHJcbiAgICAgICAgICAgIGlmKHBjLnB1YmxpY1JlZiA9PT0gcGFja2FnaW5nLnB1YmxpY1JlZikge1xyXG4gICAgICAgICAgICAgICAgcGMuYmFzZSA9IHRydWU7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBwYy5iYXNlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIHBjO1xyXG4gICAgICAgIH0pKTtcclxuICAgIH07XHJcblxyXG5cclxuICAgIGNvbnN0IFtmb3JtSXNPcGVuLCBvcGVuRm9ybSwgY2xvc2VGb3JtXSA9IHVzZU9wZW5TdGF0ZShmYWxzZSk7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFkbWluLWZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgPGxhYmVsPkNvbmRpdGlvbm5lbWVudHMgKjwvbGFiZWw+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWRtaW4tc2VsZWN0LWxpc3RcIj5cclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBwYWNrYWdpbmdDaG9pY2VzLm1hcChwYWNrYWdpbmcgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8QWRtaW5QYWNrYWdpbmdDYXJkIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtwYWNrYWdpbmcucHVibGljUmVmfSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhY2thZ2luZz17cGFja2FnaW5nfSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlbW92ZT17cmVtb3ZlUGFja2FnaW5nfSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVwZGF0ZT17dXBkYXRlUGFja2FnaW5nfSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhY2thZ2luZ0Nob2ljZXM9e3BhY2thZ2luZ0Nob2ljZXN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9kdWN0SWQ9e3Byb2R1Y3RJZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdEFzQmFzZT17aGFuZGxlU2VsZWN0QXNCYXNlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICkpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPFBsdXNCdXR0b24gY2xhc3NOYW1lPVwiYWRtaW4tYWRkLWJ1dHRvblwiIG9uQ2xpY2s9e29wZW5Gb3JtfSAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPE1vZGFsIGlzT3Blbj17Zm9ybUlzT3Blbn0gY2xvc2U9e2Nsb3NlRm9ybX0gYW5pbWF0ZWQ9e2ZhbHNlfSBhZGRpdGlvbmFsQ2xhc3M9XCJsYXJnZSBhZG1pbi1mb3JtLW1vZGFsXCI+XHJcbiAgICAgICAgICAgICAgICA8UGFja2FnaW5nQ2hvaWNlc0Zvcm0gXHJcbiAgICAgICAgICAgICAgICAgICAgb25TdWJtaXRTdWNjZXNzPXthZGRQYWNrYWdpbmd9IFxyXG4gICAgICAgICAgICAgICAgICAgIGNsb3NlPXtjbG9zZUZvcm19IFxyXG4gICAgICAgICAgICAgICAgICAgIHBhY2thZ2luZ0Nob2ljZXM9e3BhY2thZ2luZ0Nob2ljZXN9IFxyXG4gICAgICAgICAgICAgICAgICAgIHByb2R1Y3RJZD17cHJvZHVjdElkfVxyXG4gICAgICAgICAgICAgICAgICAgIHZhdExldmVsPXt2YXRMZXZlbH1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvTW9kYWw+XHJcbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiaGlkZGVuXCIgbmFtZT17bmFtZX0gdmFsdWU9e3BhY2thZ2luZ0Nob2ljZXNTdHJpbmd9IC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn0iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IFBhY2thZ2luZ0Nob2ljZXNJbnB1dCB9IGZyb20gJy4vUGFja2FnaW5nQ2hvaWNlc0lucHV0JztcclxuaW1wb3J0IHsgT3B0aW9uLCBTZWxlY3QgfSBmcm9tICcuLi8uLi8uLi9VSS9Gb3JtL1NlbGVjdCc7XHJcbmltcG9ydCB7IFZhdExldmVscyB9IGZyb20gJy4uLy4uLy4uL0NvbmZpZy9WYXRMZXZlbHMnO1xyXG5cclxuZXhwb3J0IGNvbnN0IFByb2R1Y3RGb3JtUmVhY3RCbG9jayA9ICh7cHJvZHVjdElkLCBwYWNrYWdpbmdDaG9pY2VzLCB2YXRMZXZlbCwgcGFja2FnaW5nQ2hvaWNlc05hbWUsIHZhdExldmVsTmFtZX0pID0+IHtcclxuXHJcbiAgICBjb25zdCBbY3VycmVudFZhdExldmVsLCBzZXRDdXJyZW50VmF0TGV2ZWxdID0gdXNlU3RhdGUodmF0TGV2ZWwgPz8gbnVsbCk7XHJcblxyXG4gICAgY29uc3QgaGFuZGxlQ2hhbmdlID0gZSA9PiB7XHJcbiAgICAgICAgc2V0Q3VycmVudFZhdExldmVsKGUudGFyZ2V0LnZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWRtaW4tZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhZG1pbi1mb3JtLWxhYmVsXCI+Tml2ZWF1IGRlIFRWQSAqPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8U2VsZWN0IGNsYXNzTmFtZT1cImFkbWluLWZvcm0tY29udHJvbFwiIG5hbWU9e3ZhdExldmVsTmFtZX0gdmFsdWU9e2N1cnJlbnRWYXRMZXZlbH0gb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX0+XHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBPYmplY3QuZW50cmllcyhWYXRMZXZlbHMuQURNSU5fQ0hPSUNFUykubWFwKChbbGFiZWwsIHZhbHVlXSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPE9wdGlvbiBrZXk9e3ZhbHVlfSB2YWx1ZT17dmFsdWV9PntsYWJlbH08L09wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKSlcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICA8L1NlbGVjdD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWRtaW4tZm9ybS1ncm91cFwiIHN0eWxlPXt7bWFyZ2luVG9wOiAnMjBweCd9fT5cclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBjdXJyZW50VmF0TGV2ZWwgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8UGFja2FnaW5nQ2hvaWNlc0lucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPXtwYWNrYWdpbmdDaG9pY2VzTmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtwYWNrYWdpbmdDaG9pY2VzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvZHVjdElkPXtwcm9kdWN0SWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXRMZXZlbD17Y3VycmVudFZhdExldmVsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC8+XHJcbiAgICApXHJcbn0iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IFNlbGVjdCwgT3B0aW9uIH0gZnJvbSAnLi4vLi4vLi4vVUkvRm9ybS9TZWxlY3QnO1xyXG5pbXBvcnQgeyBTaXRlQ29uZmlnIH0gZnJvbSAnLi4vLi4vLi4vQ29uZmlnL1NpdGVDb25maWcnO1xyXG5pbXBvcnQgeyBhcGlQcmVwYXJlZEZldGNoIH0gZnJvbSAnLi4vLi4vLi4vZnVuY3Rpb25zL2FwaSc7XHJcbmltcG9ydCB7IHVzZVRyYW5zbGF0aW9uIH0gZnJvbSAncmVhY3QtaTE4bmV4dCc7XHJcblxyXG5leHBvcnQgY29uc3QgUHVyY2hhc2VTaGlwcGluZ1N0YXR1c1VwZGF0ZXIgPSAoe3NoaXBwaW5nSW5mb0lkLCBpbml0aWFsU3RhdHVzfSkgPT4ge1xyXG4gICAgY29uc3Qge3R9ID0gdXNlVHJhbnNsYXRpb24oJ2NvbmZpZ3MnKTtcclxuXHJcbiAgICBjb25zdCBbc3RhdHVzLCBzZXRTdGF0dXNdID0gdXNlU3RhdGUoaW5pdGlhbFN0YXR1cyk7XHJcbiAgICBjb25zdCBbaXNMb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IFtlcnJvciwgc2V0RXJyb3JdID0gdXNlU3RhdGUobnVsbCk7XHJcblxyXG4gICAgY29uc3QgaGFuZGxlQ2hhbmdlID0gYXN5bmMgKGUpID0+IHtcclxuICAgICAgICBpZihcclxuICAgICAgICAgICAgaXNMb2FkaW5nXHJcbiAgICAgICAgICAgIHx8XHJcbiAgICAgICAgICAgICFjb25maXJtKCdQYXNzZXIgbGUgc3RhdHV0IMOgIFwiJysodChlLnRhcmdldC52YWx1ZSkrJ1wiID8gQXR0ZW50aW9uLCBsYSBtaXNlIMOgIGpvdXIgZHUgc3RhdHV0IGVzdCBpcnJldmVyc2libGUsIGV0IGRlcyBub3RpZmljYXRpb25zIHNlcm9udCBlbnZvecOpZXMgYXUgY2xpZW50IGV0IGF1IHZlbmRldXIuJykpICAgIFxyXG4gICAgICAgICkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgXHJcbiAgICAgICAgc2V0TG9hZGluZyh0cnVlKTtcclxuICAgICAgICBzZXRFcnJvcihudWxsKTtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBjb25zdCBzdGF0dXMgPSBhd2FpdCBhcGlQcmVwYXJlZEZldGNoKCcvYWRtaW4vYXBpL3B1cmNoYXNlL3VwZGF0ZVNoaXBwaW5nU3RhdHVzLycrc2hpcHBpbmdJbmZvSWQsIGUudGFyZ2V0LnZhbHVlLCAnUE9TVCcpO1xyXG4gICAgICAgICAgICBzZXRTdGF0dXMoc3RhdHVzKTtcclxuICAgICAgICB9IGNhdGNoKGUpIHtcclxuICAgICAgICAgICAgc2V0RXJyb3IoJ0VycmV1ciBzZXJ2ZXVyJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xyXG4gICAgfTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxTZWxlY3QgY2xhc3NOYW1lPVwiYWRtaW4tZm9ybS1jb250cm9sXCIgbmFtZT1cInNoaXBwaW5nU3RhdHVzXCIgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX0gdmFsdWU9e3N0YXR1c30+XHJcbiAgICAgICAgICAgICAgICA8T3B0aW9uIHZhbHVlPXtTaXRlQ29uZmlnLlNISVBQSU5HX1NUQVRVU19QRU5ESU5HfT5cclxuICAgICAgICAgICAgICAgICAgICB7dChTaXRlQ29uZmlnLlNISVBQSU5HX1NUQVRVU19QRU5ESU5HKX1cclxuICAgICAgICAgICAgICAgIDwvT3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgPE9wdGlvbiB2YWx1ZT17U2l0ZUNvbmZpZy5TSElQUElOR19TVEFUVVNfU0VOVH0+XHJcbiAgICAgICAgICAgICAgICAgICAge3QoU2l0ZUNvbmZpZy5TSElQUElOR19TVEFUVVNfU0VOVCl9XHJcbiAgICAgICAgICAgICAgICA8L09wdGlvbj5cclxuICAgICAgICAgICAgICAgIDxPcHRpb24gdmFsdWU9e1NpdGVDb25maWcuU0hJUFBJTkdfU1RBVFVTX0RFTElWRVJFRH0+XHJcbiAgICAgICAgICAgICAgICAgICAge3QoU2l0ZUNvbmZpZy5TSElQUElOR19TVEFUVVNfREVMSVZFUkVEKX1cclxuICAgICAgICAgICAgICAgIDwvT3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgPE9wdGlvbiB2YWx1ZT17U2l0ZUNvbmZpZy5TSElQUElOR19TVEFUVVNfQ0FOQ0VMRUR9PlxyXG4gICAgICAgICAgICAgICAgICAgIHt0KFNpdGVDb25maWcuU0hJUFBJTkdfU1RBVFVTX0NBTkNFTEVEKX1cclxuICAgICAgICAgICAgICAgIDwvT3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgPE9wdGlvbiB2YWx1ZT17U2l0ZUNvbmZpZy5TSElQUElOR19TVEFUVVNfUkVUVVJOX1NFTlR9PlxyXG4gICAgICAgICAgICAgICAgICAgIHt0KFNpdGVDb25maWcuU0hJUFBJTkdfU1RBVFVTX1JFVFVSTl9TRU5UKX1cclxuICAgICAgICAgICAgICAgIDwvT3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgPE9wdGlvbiB2YWx1ZT17U2l0ZUNvbmZpZy5TSElQUElOR19TVEFUVVNfUkVUVVJOX0RFTElWRVJFRH0+XHJcbiAgICAgICAgICAgICAgICAgICAge3QoU2l0ZUNvbmZpZy5TSElQUElOR19TVEFUVVNfUkVUVVJOX0RFTElWRVJFRCl9XHJcbiAgICAgICAgICAgICAgICA8L09wdGlvbj5cclxuICAgICAgICAgICAgPC9TZWxlY3Q+XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGVycm9yICYmIChcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFkbWluLWZvcm0tZXJyb3JcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHVsPjxsaT57c2VydmVyRXJyb3J9PC9saT48L3VsPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGlzTG9hZGluZyAmJiA8ZGl2IGNsYXNzTmFtZT1cImFkbWluLWZvcm0taW5mb1wiPkNoYXJnZW1lbnQuLi48L2Rpdj5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG5cclxufSIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgU2l0ZUNvbmZpZyB9IGZyb20gJy4uLy4uLy4uL0NvbmZpZy9TaXRlQ29uZmlnJztcclxuaW1wb3J0IHsgYXBpUHJlcGFyZWRGZXRjaCB9IGZyb20gJy4uLy4uLy4uL2Z1bmN0aW9ucy9hcGknO1xyXG5cclxuZXhwb3J0IGNvbnN0IFJldmlld01vZGVyYXRvciA9ICh7aWQsIGluaXRpYWxTdGF0dXN9KSA9PiB7XHJcblxyXG4gICAgY29uc3QgW3N0YXR1cywgc2V0U3RhdHVzXSA9IHVzZVN0YXRlKGluaXRpYWxTdGF0dXMpO1xyXG5cclxuICAgIGNvbnN0IFtpc0xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgW2luZm8sIHNldEluZm9dID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgICBcclxuICAgIGNvbnN0IGhhbmRsZUNoYW5nZSA9IGFzeW5jIGUgPT4ge1xyXG4gICAgICAgIGlmKGlzTG9hZGluZykge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IHZhbHVlID0gZS50YXJnZXQudmFsdWU7XHJcbiAgICAgICAgc2V0TG9hZGluZyh0cnVlKTtcclxuICAgICAgICBzZXRJbmZvKG51bGwpO1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGluZm8gPSBhd2FpdCBhcGlQcmVwYXJlZEZldGNoKCcvYWRtaW4vYXBpL3Jldmlldy8nK2lkKycvdXBkYXRlTW9kZXJhdGlvblN0YXR1cycsIHtzdGF0dXM6IHZhbHVlfSwgJ0dFVCcpO1xyXG4gICAgICAgICAgICBzZXRJbmZvKGluZm8pO1xyXG4gICAgICAgICAgICBzZXRTdGF0dXModmFsdWUpO1xyXG4gICAgICAgIH0gY2F0Y2goZSkge1xyXG4gICAgICAgICAgICBzZXRJbmZvKCd1bmUgZXJyZXVyIGVzdCBzdXJ2ZW51ZScpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWRtaW4tZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICA8c2VsZWN0IGNsYXNzTmFtZT1cImFkbWluLWZvcm0tY29udHJvbFwiIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9IHZhbHVlPXtzdGF0dXN9PlxyXG4gICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT17U2l0ZUNvbmZpZy5NT0RFUkFUSU9OX1NUQVRVU19QRU5ESU5HfT57U2l0ZUNvbmZpZy5NT0RFUkFUSU9OX1NUQVRVU19QRU5ESU5HX0xBQkVMfTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT17U2l0ZUNvbmZpZy5NT0RFUkFUSU9OX1NUQVRVU19BQ0NFUFRFRH0+e1NpdGVDb25maWcuTU9ERVJBVElPTl9TVEFUVVNfQUNDRVBURURfTEFCRUx9PC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPXtTaXRlQ29uZmlnLk1PREVSQVRJT05fU1RBVFVTX1JFRlVTRUR9PntTaXRlQ29uZmlnLk1PREVSQVRJT05fU1RBVFVTX1JFRlVTRURfTEFCRUx9PC9vcHRpb24+XHJcbiAgICAgICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBpc0xvYWRpbmcgJiYgPGRpdiBjbGFzc05hbWU9XCJhZG1pbi1mb3JtLWluZm9cIj5DaGFyZ2VtZW50Li4uPC9kaXY+XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaW5mbyAmJiA8ZGl2IGNsYXNzTmFtZT1cImFkbWluLWZvcm0taW5mb1wiPntpbmZvfTwvZGl2PlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgXHJcbiAgICApXHJcbn0iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5cclxuZXhwb3J0IGNvbnN0IEFkbWluSXRlbVN1Z2dlc3QgPSAoe2l0ZW0sIHEsIG9uU2VsZWN0LCBzZWxlY3RlZH0pID0+IHtcclxuXHJcbiAgICBjb25zdCB0aXRsZSA9IGl0ZW0udGl0bGUudG9VcHBlckNhc2UoKS5zcGxpdChxLnRvVXBwZXJDYXNlKCkpLmpvaW4oJzxzdHJvbmc+JytxLnRvVXBwZXJDYXNlKCkrJzwvc3Ryb25nPicpO1xyXG5cclxuICAgIGNvbnN0IGhhbmRsZUNsaWNrID0gZSA9PiB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIG9uU2VsZWN0KGl0ZW0pO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGEgY2xhc3NOYW1lPXsnYWRtaW4tc3VnZ2VzdC1pdGVtJyArIChzZWxlY3RlZCA/ICcgc2VsZWN0ZWQnOiAnJyl9IGhyZWY9XCIjXCIgb25DbGljaz17aGFuZGxlQ2xpY2t9IHJvbGU9XCJvcHRpb25cIiBhcmlhLXNlbGVjdGVkPXtzZWxlY3RlZH0+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWRtaW4tc3VnZ2VzdC1pbWdcIiBzdHlsZT17e2JhY2tncm91bmRJbWFnZTogYHVybCgke2l0ZW0ucGljdHVyZVBhdGh9KWB9fT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWRtaW4tc3VnZ2VzdC10ZXh0XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7X19odG1sOiB0aXRsZX19PjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdj57aXRlbS5yZWZ9PC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvYT5cclxuICAgIClcclxufVxyXG5cclxuXHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IENsb3NlQnV0dG9uIH0gZnJvbSAnLi4vLi4vLi4vVUkvQnV0dG9uL0Nsb3NlQnV0dG9uJztcclxuXHJcbmV4cG9ydCBjb25zdCBTZWxlY3RlZEl0ZW1zTGlzdCA9ICh7aXRlbXMsIG9uUmVtb3ZlLCBsb2FkaW5nfSkgPT4ge1xyXG4gICAgaWYobG9hZGluZykge1xyXG4gICAgICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT1cImFkbWluLWZvcm0taW5mb1wiPkNoYXJnZW1lbnQuLi48L2Rpdj5cclxuICAgIH1cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPHVsIGNsYXNzTmFtZT1cImFkbWluLXN1Z2dlc3RlZFByb2R1Y3RzLWxpc3RcIj5cclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaXRlbXMubWFwKGl0ZW0gPT4gPFNlbGVjdGVkSXRlbSBrZXk9e2l0ZW0uaWR9IGl0ZW09e2l0ZW19IG9uUmVtb3ZlPXtvblJlbW92ZX0gLz4pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICA8L3VsPlxyXG4gICAgKVxyXG59IFxyXG5cclxuZXhwb3J0IGNvbnN0IFNlbGVjdGVkSXRlbSA9ICh7aXRlbSwgb25SZW1vdmV9KSA9PiB7XHJcbiAgICBcclxuICAgIGNvbnN0IGhhbmRsZUNsaWNrID0gKCkgPT4ge1xyXG4gICAgICAgIG9uUmVtb3ZlKGl0ZW0pO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGxpIGNsYXNzTmFtZT1cImFkbWluLXN1Z2dlc3RlZFByb2R1Y3RzLWl0ZW1cIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhZG1pbi1zdWdnZXN0LWltZ1wiIHN0eWxlPXt7YmFja2dyb3VuZEltYWdlOiBgdXJsKCR7aXRlbS5waWN0dXJlUGF0aH0pYH19PjwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFkbWluLXN1Z2dlc3QtdGV4dFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdj57aXRlbS50aXRsZX08L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXY+e2l0ZW0ucmVmfTwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPENsb3NlQnV0dG9uIG9uQ2xpY2s9e2hhbmRsZUNsaWNrfSBhZGRpdGlvbmFsQ2xhc3M9XCJhZG1pbi1zdWdnZXN0ZWRQcm9kdWN0cy1jbG9zZXJcIiAvPlxyXG4gICAgICAgIDwvbGk+XHJcbiAgICApXHJcbn0iLCJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgU2VsZWN0ZWRJdGVtc0xpc3QgfSBmcm9tICcuL1NlbGVjdGVkSXRlbXNMaXN0JztcclxuaW1wb3J0IHsgYXBpRmV0Y2ggfSBmcm9tICcuLi8uLi8uLi9mdW5jdGlvbnMvYXBpJztcclxuaW1wb3J0ICcvYXNzZXRzL3N0eWxlcy9BZG1pbi9TdWdnZXN0ZWRQcm9kdWN0c0lucHV0L2luZGV4LmNzcyc7XHJcbmltcG9ydCB7IFN0YW5kYXJkSXRlbVNlbGVjdG9yIH0gZnJvbSAnLi4vLi4vLi4vVUkvQWRtaW4vU3RhbmRhcmRJdGVtL1N0YW5kYXJkSXRlbVNlbGVjdG9yJztcclxuXHJcbmV4cG9ydCBjb25zdCBTZWxlY3RMaW5rZWRJdGVtcyA9ICh7aW5kZXhFbmRwb2ludCwgc2VhcmNoRW5kcG9pbnQsIG5hbWUsIHRpdGxlLCBmb3JtRXJyb3J9KSA9PiB7XHJcblxyXG4gICAgLy9nZXN0aW9uIGRlIGwnYWZmaWNoYWdlIGRlcyBzdWdnZXN0ZWRQcm9kdWN0c1xyXG4gICAgY29uc3QgW3NlbGVjdGVkSXRlbXMsIHNldFNlbGVjdGVkSXRlbXNdID0gdXNlU3RhdGUoW10pO1xyXG4gICAgY29uc3QgW2xpc3RMb2FkaW5nLCBzZXRMaXN0TG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGlmKGluZGV4RW5kcG9pbnQpIHtcclxuICAgICAgICAgICAgKGFzeW5jICgpID0+IHtcclxuICAgICAgICAgICAgICAgIHNldExpc3RMb2FkaW5nKHRydWUpO1xyXG4gICAgICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgYXBpRmV0Y2goaW5kZXhFbmRwb2ludCk7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0U2VsZWN0ZWRJdGVtcyhkYXRhKTtcclxuICAgICAgICAgICAgICAgIH0gY2F0Y2goZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBzZXRMaXN0TG9hZGluZyhmYWxzZSk7XHJcbiAgICAgICAgICAgIH0pKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSwgW10pO1xyXG4gICAgY29uc3QgaGFuZGxlUmVtb3ZlID0gKGl0ZW0pID0+IHtcclxuICAgICAgICBzZXRTZWxlY3RlZEl0ZW1zKHNlbGVjdGVkSXRlbXMgPT4gc2VsZWN0ZWRJdGVtcy5maWx0ZXIoaSA9PiBpLmlkICE9PSBpdGVtLmlkKSk7XHJcbiAgICB9O1xyXG5cclxuICAgIC8vc2VhcmNoXHJcbiAgICBjb25zdCBoYW5kbGVTZWxlY3QgPSAoaXRlbSkgPT4ge1xyXG4gICAgICAgIHNldFNlbGVjdGVkSXRlbXMoc2VsZWN0ZWRJdGVtcyA9PiB7XHJcbiAgICAgICAgICAgIC8vb24gdsOpcmlmaWUgc2kgbGUgcHJvZHVpdCBhIGTDqWrDoCDDqXTDqSBzw6lsZWN0aW9ubsOpXHJcbiAgICAgICAgICAgIGxldCBpbmNsdWRlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICBmb3IoY29uc3QgbGlua2VkSXRlbSBvZiBzZWxlY3RlZEl0ZW1zKSB7XHJcbiAgICAgICAgICAgICAgICBpZihsaW5rZWRJdGVtLmlkID09PSBpdGVtLmlkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaW5jbHVkZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmKCFpbmNsdWRlZCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFtcclxuICAgICAgICAgICAgICAgICAgICAuLi5zZWxlY3RlZEl0ZW1zLFxyXG4gICAgICAgICAgICAgICAgICAgIGl0ZW1cclxuICAgICAgICAgICAgICAgIF07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIHNlbGVjdGVkSXRlbXM7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17J2FkbWluLWZvcm0tZ3JvdXAgc3VnZ2VzdGVkUHJvZHVjdHMtZ3JvdXAnICsgKGZvcm1FcnJvciA/ICcgaXMtaW52YWxpZCc6ICcnKX0+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWw+e3RpdGxlfTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8U2VsZWN0ZWRJdGVtc0xpc3QgaXRlbXM9e3NlbGVjdGVkSXRlbXN9IG9uUmVtb3ZlPXtoYW5kbGVSZW1vdmV9IGxvYWRpbmc9e2xpc3RMb2FkaW5nfSAvPlxyXG4gICAgICAgICAgICAgICAgPFN0YW5kYXJkSXRlbVNlbGVjdG9yIHNlYXJjaEVuZHBvaW50PXtzZWFyY2hFbmRwb2ludH0gb25TZWxlY3Q9e2hhbmRsZVNlbGVjdH0gLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGZvcm1FcnJvciAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhZG1pbi1mb3JtLWVycm9yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx1bD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT57Zm9ybUVycm9yfTwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgICAgICA8c2VsZWN0IGhpZGRlbj17dHJ1ZX0gbmFtZT17bmFtZX0gdmFsdWU9e3NlbGVjdGVkSXRlbXMubWFwKGl0ZW0gPT4gaXRlbS5pZCl9IG9uQ2hhbmdlPXsoKSA9PiB7fX0gbXVsdGlwbGU9XCJtdWx0aXBsZVwiPlxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBzZWxlY3RlZEl0ZW1zLm1hcChpdGVtID0+IDxvcHRpb24gY2xhc3NOYW1lPVwic3VnZ2VzdGVkUHJvZHVjdHMtaGlkZGVuLW9wdGlvblwiIGtleT17aXRlbS5pZH0gdmFsdWU9e2l0ZW0uaWR9IGRhdGEtcmVmPXtpdGVtLnJlZn0+e2l0ZW0ucmVmfTwvb3B0aW9uPikgIC8vREVWRU5VIERBVEEtUkVGIGF2YW50LS0tPiBkYXRhLWRlc2lnbmF0aW9uIDogcG91ciBsZXMgdGVzdHMgZW5kdG9lbmQgKGNhciBvbiBwZXV0IGFjY8OpZGVyIHNldWxlbWVudCBhdSB0ZXh0IHZpc2libGUgZXQgY29tbWUgaWwgZXN0IGhpZGRlbilcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICA8Lz5cclxuXHJcbiAgICAgICAgXHJcbiAgICApXHJcbn1cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCAnL2Fzc2V0cy9zdHlsZXMvQWRtaW4vU3VnZ2VzdGVkUHJvZHVjdHNJbnB1dC9pbmRleC5jc3MnO1xyXG5pbXBvcnQgeyBTdGFuZGFyZEl0ZW1TZWxlY3RvciB9IGZyb20gJy4uLy4uLy4uL1VJL0FkbWluL1N0YW5kYXJkSXRlbS9TdGFuZGFyZEl0ZW1TZWxlY3Rvcic7XHJcbmltcG9ydCB7IFNlbGVjdGVkSXRlbSB9IGZyb20gJy4uL1NlbGVjdExpbmtlZEl0ZW1zL1NlbGVjdGVkSXRlbXNMaXN0JztcclxuaW1wb3J0IHsgdXNlRmV0Y2ggfSBmcm9tICcuLi8uLi8uLi9DdXN0b21Ib29rL2ZldGNoL3VzZUZldGNoJztcclxuXHJcbmV4cG9ydCBjb25zdCBTZWxlY3RVbmlxdWVJdGVtID0gKHt0eXBlLCBpdGVtSWQgPSBudWxsLCBuYW1lLCB0aXRsZSwgZm9ybUVycm9yfSkgPT4ge1xyXG5cclxuICAgIC8vZ2VzdGlvbiBkZSBsJ2FmZmljaGFnZVxyXG4gICAgY29uc3QgW3NlbGVjdGVkSXRlbSwgc2V0U2VsZWN0ZWRJdGVtXSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gICAgY29uc3QgW2RiSXRlbSwgaXNMb2FkaW5nLCBlcnJvciwgcmVzZXRdID0gdXNlRmV0Y2goJy9hZG1pbi9hcGkvc3RhbmRhcmRJdGVtLycrdHlwZSsnLycraXRlbUlkKycvc2hvdycpO1xyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBpZihkYkl0ZW0pIHtcclxuICAgICAgICAgICAgc2V0U2VsZWN0ZWRJdGVtKGRiSXRlbSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSwgW2RiSXRlbV0pXHJcblxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9eydhZG1pbi1mb3JtLWdyb3VwIHN1Z2dlc3RlZFByb2R1Y3RzLWdyb3VwJyArIChmb3JtRXJyb3IgPyAnIGlzLWludmFsaWQnOiAnJyl9PlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsPnt0aXRsZX08L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGlzTG9hZGluZyAmJiA8ZGl2IGNsYXNzTmFtZT1cImFkbWluLWZvcm0taW5mb1wiPkNoYXJnZW1lbnQuLi48L2Rpdj5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZEl0ZW0gJiYgPFNlbGVjdGVkSXRlbSBpdGVtPXtzZWxlY3RlZEl0ZW19IG9uUmVtb3ZlPXsoKSA9PiBzZXRTZWxlY3RlZEl0ZW0obnVsbCl9IC8+XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgIXNlbGVjdGVkSXRlbSAmJiAhaXNMb2FkaW5nICYmIDxTdGFuZGFyZEl0ZW1TZWxlY3RvciBzZWFyY2hFbmRwb2ludD17Jy9hZG1pbi9hcGkvJyt0eXBlKycvc2VhcmNoJ30gb25TZWxlY3Q9eyhpdGVtKSA9PiBzZXRTZWxlY3RlZEl0ZW0oaXRlbSl9IC8+XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBmb3JtRXJyb3IgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWRtaW4tZm9ybS1lcnJvclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+e2Zvcm1FcnJvcn08L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBzZWxlY3RlZEl0ZW0gJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgIDxzZWxlY3QgaGlkZGVuPXt0cnVlfSBuYW1lPXtuYW1lfSB2YWx1ZT17c2VsZWN0ZWRJdGVtLmlkfSBvbkNoYW5nZT17KCkgPT4ge319PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIGNsYXNzTmFtZT1cInN1Z2dlc3RlZFByb2R1Y3RzLWhpZGRlbi1vcHRpb25cIiB2YWx1ZT17c2VsZWN0ZWRJdGVtLmlkfSBkYXRhLXJlZj17c2VsZWN0ZWRJdGVtLnJlZn0+e3NlbGVjdGVkSXRlbS5yZWZ9PC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICA8Lz5cclxuXHJcbiAgICAgICAgXHJcbiAgICApXHJcbn1cclxuXHJcbiIsImV4cG9ydCBjbGFzcyBWYXRMZXZlbHMge1xyXG4gICAgc3RhdGljIFNUQU5EQVJEID0gJ3ZhdF9sZXZlbF9zdGFuZGFyZCc7XHJcblxyXG4gICAgc3RhdGljIFBBUktJTkcgPSAndmF0X2xldmVsX3BhcmtpbmcnO1xyXG5cclxuICAgIHN0YXRpYyBSRURVQ0VfMSA9ICd2YXRfbGV2ZWxfcmVkdWNlXzEnO1xyXG5cclxuICAgIHN0YXRpYyBSRURVQ0VfMiA9ICd2YXRfbGV2ZWxfcmVkdWNlXzInO1xyXG5cclxuICAgIHN0YXRpYyBTVVBFUl9SRURVQ0UgPSAndmF0X2xldmVsX3N1cGVyX3JlZHVjZSc7XHJcblxyXG4gICAgc3RhdGljIFpFUk8gPSAndmF0X2xldmVsX3plcm8nO1xyXG5cclxuXHJcbiAgICBzdGF0aWMgQ0hPSUNFUyA9IFtcclxuICAgICAgICBWYXRMZXZlbHMuU1RBTkRBUkQsIFZhdExldmVscy5QQVJLSU5HLCBWYXRMZXZlbHMuUkVEVUNFXzEsIFZhdExldmVscy5SRURVQ0VfMiwgVmF0TGV2ZWxzLlNVUEVSX1JFRFVDRSwgVmF0TGV2ZWxzLlpFUk9cclxuICAgIF07XHJcblxyXG4gICAgc3RhdGljIEFETUlOX0NIT0lDRVMgPSB7XHJcbiAgICAgICAgWydUYXV4IHN0YW5kYXJkJ106IFZhdExldmVscy5TVEFOREFSRCxcclxuICAgICAgICBbJ1RhdXggcGFya2luZyddOiBWYXRMZXZlbHMuUEFSS0lORyxcclxuICAgICAgICBbJ1RhdXggcsOpZHVpdCAxJ106IFZhdExldmVscy5SRURVQ0VfMSxcclxuICAgICAgICBbJ1RhdXggcsOpZHVpdCAyJ106IFZhdExldmVscy5SRURVQ0VfMixcclxuICAgICAgICBbJ1RhdXggc3VwZXItcsOpZHVpdCddOiBWYXRMZXZlbHMuU1VQRVJfUkVEVUNFLFxyXG4gICAgICAgIFsnVGF1eCB6w6lybyddOiBWYXRMZXZlbHMuWkVST1xyXG4gICAgfTtcclxufSIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgdXNlRmV0Y2hRU2VhcmNoIH0gZnJvbSAnLi4vLi4vLi4vQ3VzdG9tSG9vay9mZXRjaC91c2VGZXRjaFFTZWFyY2gnO1xyXG5pbXBvcnQgeyBBZG1pbkl0ZW1TdWdnZXN0IH0gZnJvbSAnLi4vLi4vLi4vQ29tcG9uZW50cy9BZG1pbi9TZWxlY3RMaW5rZWRJdGVtcy9BZG1pbkl0ZW1TdWdnZXN0JztcclxuaW1wb3J0IHsgU3VnZ2VzdExpc3QgfSBmcm9tICcuLi8uLi9TdWdnZXN0TGlzdCc7XHJcbmltcG9ydCB7IENsb3NlQnV0dG9uIH0gZnJvbSAnLi4vLi4vQnV0dG9uL0Nsb3NlQnV0dG9uJztcclxuXHJcbmV4cG9ydCBjb25zdCBTdGFuZGFyZEl0ZW1TZWxlY3RvciA9ICh7c2VhcmNoRW5kcG9pbnQsIG9uU2VsZWN0fSkgPT4ge1xyXG5cclxuICAgIGNvbnN0IFtxLCBzZXRRXSA9IHVzZVN0YXRlKCcnKTtcclxuICAgIGNvbnN0IGhhbmRsZUNoYW5nZSA9IGUgPT4ge1xyXG4gICAgICAgIHNldFEoZS50YXJnZXQudmFsdWUpO1xyXG4gICAgfVxyXG4gICAgY29uc3QgW3Jlc3VsdCwgcmVzZXRJdGVtcywgaXNMb2FkaW5nLCBlcnJvcl0gPSB1c2VGZXRjaFFTZWFyY2goc2VhcmNoRW5kcG9pbnQsIHEsIDUpO1xyXG5cclxuICAgIGNvbnN0IGhhbmRsZVNlbGVjdCA9IGl0ZW0gPT4ge1xyXG4gICAgICAgIHJlc2V0SXRlbXMoKTtcclxuICAgICAgICBvblNlbGVjdChpdGVtKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWRtaW4tc3VnZ2VzdC13cmFwcGVyXCI+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzc05hbWU9XCJhZG1pbi1mb3JtLWNvbnRyb2xcIiBwbGFjZWhvbGRlcj1cIlJlY2hlcmNoZXJcIiBuYW1lPVwicVwiIHZhbHVlPXtxfSBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfSAvPlxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHEgIT09ICcnICYmIDxDbG9zZUJ1dHRvbiBhZGRpdGlvbmFsQ2xhc3M9XCJhZG1pbi1zdWdnZXN0ZWRQcm9kdWN0cy1pbnB1dC1jbG9zZXJcIiBvbkNsaWNrPXsoKSA9PiBzZXRRKCcnKX0gLz5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICByZXN1bHQ/Lml0ZW1zLmxlbmd0aCA+IDAgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8U3VnZ2VzdExpc3QgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhZGRpdGlvbmFsQ2xhc3M9XCJhZG1pbi1zdWdnZXN0LWxpc3RcIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN1Z2dlc3RzPXtyZXN1bHQuaXRlbXN9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbG9zZT17cmVzZXRJdGVtc30gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvblNlbGVjdD17aGFuZGxlU2VsZWN0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVuZGVyPXsoaXRlbSwgc2VsZWN0ZWQpID0+IDxBZG1pbkl0ZW1TdWdnZXN0IGtleT17aXRlbS5pZH0gaXRlbT17aXRlbX0gcT17cX0gc2VsZWN0ZWQ9e3NlbGVjdGVkfSBvblNlbGVjdD17aGFuZGxlU2VsZWN0fSAvPn0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+ICAgXHJcbiAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaXNMb2FkaW5nICYmIDxkaXYgY2xhc3NOYW1lPVwiYWRtaW4tZm9ybS1pbmZvXCI+Q2hhcmdlbWVudC4uLjwvZGl2PlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgPC8+XHJcbiAgICApXHJcbn0iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBFZGl0SWNvbiB9IGZyb20gJy4uL0ljb24vRWRpdEljb24nO1xyXG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tICcuL0J1dHRvbic7XHJcbmltcG9ydCB7IHQgfSBmcm9tICdpMThuZXh0JztcclxuXHJcbmV4cG9ydCBjb25zdCBFZGl0QnV0dG9uID0gKHthZGRpdGlvbmFsQ2xhc3MsIC4uLnByb3BzfSkgPT4ge1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPEJ1dHRvbiBcclxuICAgICAgICAgICAgY2xhc3NOYW1lPXsnaWNvbi1idXR0b24gZWRpdC1idXR0b24nICsgKGFkZGl0aW9uYWxDbGFzcyA/ICcgJyArIGFkZGl0aW9uYWxDbGFzczogJycpfSBcclxuICAgICAgICAgICAgYXJpYS1sYWJlbD17dCgnZWRpdCcsIHtuczogJ21lc3NhZ2VzJ30pfVxyXG4gICAgICAgICAgICB0aXRsZT17dCgnZWRpdCcsIHtuczogJ21lc3NhZ2VzJ30pfVxyXG4gICAgICAgICAgICB7Li4ucHJvcHN9XHJcbiAgICAgICAgPiBcclxuICAgICAgICAgICAgPEVkaXRJY29uIC8+XHJcbiAgICAgICAgPC9CdXR0b24+XHJcbiAgICApXHJcbn1cclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSAnLi9CdXR0b24nO1xyXG5pbXBvcnQgeyBQbHVzSWNvbiB9IGZyb20gJy4uL0ljb24vUXVhbnRpdHkvUGx1c0ljb24nO1xyXG5pbXBvcnQgeyB0IH0gZnJvbSAnaTE4bmV4dCc7XHJcblxyXG5leHBvcnQgY29uc3QgUGx1c0J1dHRvbiA9ICh7YWRkaXRpb25hbENsYXNzLCAuLi5wcm9wc30pID0+IHtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxCdXR0b24gXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17J2ljb24tYnV0dG9uIHBsdXMtYnV0dG9uJyArIChhZGRpdGlvbmFsQ2xhc3MgPyAnICcgKyBhZGRpdGlvbmFsQ2xhc3M6ICcnKX0gXHJcbiAgICAgICAgICAgIGFyaWEtbGFiZWw9e3QoJ2FkZCcsIHtuczogJ21lc3NhZ2VzJ30pfVxyXG4gICAgICAgICAgICB0aXRsZT17dCgnYWRkJywge25zOiAnbWVzc2FnZXMnfSl9XHJcbiAgICAgICAgICAgIHsuLi5wcm9wc31cclxuICAgICAgICA+XHJcbiAgICAgICAgICAgIDxQbHVzSWNvbiAvPlxyXG4gICAgICAgIDwvQnV0dG9uPlxyXG4gICAgKVxyXG59XHJcbiIsImltcG9ydCBSZWFjdCwge3VzZUNhbGxiYWNrLCB1c2VFZmZlY3QsIHVzZVN0YXRlfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgUGx1c0ljb24gfSBmcm9tICcuLi9JY29uL1F1YW50aXR5L1BsdXNJY29uJztcclxuaW1wb3J0IHsgVHJhc2hCdXR0b24gfSBmcm9tICcuLi9CdXR0b24vVHJhc2hCdXR0b24nO1xyXG5pbXBvcnQgcmVzaXplSW1hZ2UgZnJvbSAnc21hcnQtaW1nLXJlc2l6ZSc7XHJcbmltcG9ydCB7IExvYWRlciB9IGZyb20gJy4uL0ljb24vTG9hZGVyJztcclxuaW1wb3J0IHsgdXNlRHJvcHpvbmUgfSBmcm9tICdyZWFjdC1kcm9wem9uZSc7XHJcbmltcG9ydCB7IHVzZU9wZW5TdGF0ZSB9IGZyb20gJy4uLy4uL0N1c3RvbUhvb2svc3RhdGUvdXNlT3BlblN0YXRlJztcclxuaW1wb3J0IHsgRWRpdEljb24gfSBmcm9tICcuLi9JY29uL0VkaXRJY29uJztcclxuaW1wb3J0IHsgdXNlVHJhbnNsYXRpb24gfSBmcm9tICdyZWFjdC1pMThuZXh0JztcclxuXHJcblxyXG4vKipcclxuICogXHJcbiAqIEBwYXJhbSB7YXJyYXl9IGVycm9ycyBcclxuICogQHJldHVybnMgXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgUGljdHVyZVVwbG9hZEZpZWxkID0gKHtjaGlsZHJlbiwgbmFtZSwgZXJyb3JzLCBzZXRFcnJvcnMsIHJlc2l6ZVdpZHRoID0gNTAwLCByZXNpemVIZWlnaHQgPSA1MDAsIGRlZmF1bHRCYXNlNjRpbWcgPSAnJywgb25DaGFuZ2UgPSBudWxsfSkgPT4ge1xyXG4gIGNvbnN0IHt0fSA9IHVzZVRyYW5zbGF0aW9uKCdtZXNzYWdlcycpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICBzZXRTZWxlY3RlZEltZyhkZWZhdWx0QmFzZTY0aW1nKTtcclxuICAgICAgc2V0SGlkZGVuSW1nKGRlZmF1bHRCYXNlNjRpbWcpO1xyXG4gIH0sIFtkZWZhdWx0QmFzZTY0aW1nXSk7XHJcblxyXG4gIGNvbnN0IFtzZWxlY3RlZEltZywgc2V0U2VsZWN0ZWRJbWddID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgY29uc3QgW2hpZGRlbkltZywgc2V0SGlkZGVuSW1nXSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCBbaXNMb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlRGVsZXRlID0gKCkgPT4ge1xyXG4gICAgc2V0U2VsZWN0ZWRJbWcobnVsbCk7XHJcbiAgICBzZXRIaWRkZW5JbWcoJycpO1xyXG4gICAgaWYob25DaGFuZ2UpIHtcclxuICAgICAgb25DaGFuZ2UoJycpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IG9uRHJvcCA9IHVzZUNhbGxiYWNrKGFjY2VwdGVkRmlsZXMgPT4ge1xyXG4gICAgY29uc3QgaW1nID0gYWNjZXB0ZWRGaWxlc1swXTtcclxuICAgIFxyXG4gICAgLy92YWxpZGF0aW9uXHJcbiAgICBzZXRFcnJvcnMoW10pO1xyXG4gICAgaWYoIWltZykge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBpZighWydpbWFnZS9qcGcnLCAnaW1hZ2UvanBlZycsICdpbWFnZS9wbmcnXS5pbmNsdWRlcyhpbWcudHlwZSkpIHtcclxuICAgICAgc2V0RXJyb3JzKFt0KCdhc3NlcnQuZmlsZS5mb3JtYXQnLCB7bnM6ICdjb25zdHJhaW50cycsIGFjY2VwdGVkX2Zvcm1hdHM6ICdqcGcsIGpwZWcsIHBuZyd9KV0pO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICAvL3Jlc2l6ZVxyXG4gICAgc2V0TG9hZGluZyh0cnVlKTtcclxuICAgIHJlc2l6ZUltYWdlKGltZywge1xyXG4gICAgICAgIG91dHB1dEZvcm1hdDogJ2pwZWcnLFxyXG4gICAgICAgIHRhcmdldFdpZHRoOiByZXNpemVXaWR0aCxcclxuICAgICAgICB0YXJnZXRIZWlnaHQ6IHJlc2l6ZUhlaWdodCxcclxuICAgICAgICBjcm9wOiB0cnVlXHJcbiAgICB9LCAoZXJyb3IsIGI2NGltZykgPT4ge1xyXG4gICAgICAgIGlmIChlcnJvcikge1xyXG4gICAgICAgICAgICBzZXRFcnJvcnMoZXJyb3JzID0+IFsuLi5lcnJvcnMsIHQoJ2Vycm9yLnRlbXBvcmFyeV9mYWlsdXJlJyldKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBvbiBhZmZpY2hlIGwnaW1hZ2UgcmVkaW1lbnNpb25uw6llXHJcbiAgICAgICAgc2V0U2VsZWN0ZWRJbWcoYjY0aW1nKTtcclxuICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcclxuICAgICAgICBcclxuICAgICAgICAvLzIgZmHDp29ucyBkJ3V0aWxpc2VyIGwnaW1hZ2VcclxuICAgICAgICAvL1BvdXIgc3VibWl0IGNsYXNzaXF1ZSA6IG9uIG1ldCBsJ2ltYWdlIHJlZGltZW5zaW9ubsOpZSBkYW5zIHVuIGlucHV0IGhpZGRlblxyXG4gICAgICAgIHNldEhpZGRlbkltZyhiNjRpbWcpO1xyXG4gICAgICAgIC8vUG91ciBzdWJtaXQgamF2YXNjcmlwdFxyXG4gICAgICAgIGlmKG9uQ2hhbmdlKSB7XHJcbiAgICAgICAgICBvbkNoYW5nZShiNjRpbWcpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG4gIH0sIFtdKVxyXG4gIGNvbnN0IHtnZXRSb290UHJvcHMsIGdldElucHV0UHJvcHN9ID0gdXNlRHJvcHpvbmUoe29uRHJvcCwgbXVsdGlwbGU6IGZhbHNlfSk7XHJcblxyXG5cclxuICBjb25zdCBbbW91c2VJc092ZXIsIHNldE1vdXNlT3Zlciwgc2V0TW91c2VMZWF2ZV0gPSB1c2VPcGVuU3RhdGUoZmFsc2UpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJmb3JtLXVwbG9hZC1sYWJlbFwiPntjaGlsZHJlbn08L2xhYmVsPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tdXBsb2FkLXdyYXBwZXJcIiB7Li4uZ2V0Um9vdFByb3BzKCl9IG9uTW91c2VPdmVyPXtzZXRNb3VzZU92ZXJ9IG9uTW91c2VMZWF2ZT17c2V0TW91c2VMZWF2ZX0+XHJcbiAgICAgICAgPGlucHV0IGRpc2FibGVkPXtpc0xvYWRpbmd9IHsuLi5nZXRJbnB1dFByb3BzKCl9IC8+XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgc2VsZWN0ZWRJbWcgJiYgPGltZyBjbGFzc05hbWU9eydmb3JtLXVwbG9hZC1pbWcnICsgKGlzTG9hZGluZyB8fCBtb3VzZUlzT3ZlciA/ICcgbGlnaHQnOiAnJyl9IHNyYz17c2VsZWN0ZWRJbWd9IGFsdD17dCgnc2VsZWN0ZWRfaW1hZ2UnKX0gLz5cclxuICAgICAgICB9XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgaXNMb2FkaW5nICYmIDxMb2FkZXIgLz5cclxuICAgICAgICB9XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgIWlzTG9hZGluZyAmJiAhc2VsZWN0ZWRJbWcgJiYgPFBsdXNJY29uIC8+XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHtcclxuICAgICAgICAgIG1vdXNlSXNPdmVyICYmIHNlbGVjdGVkSW1nICYmICFpc0xvYWRpbmcgJiYgPEVkaXRJY29uIC8+XHJcbiAgICAgICAgfVxyXG4gICAgICA8L2Rpdj5cclxuICAgICAge1xyXG4gICAgICAgIGVycm9ycy5sZW5ndGggPiAwICYmIChcclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWRtaW4tZm9ybS1lcnJvclwiPlxyXG4gICAgICAgICAgICAgIDx1bD5cclxuICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGVycm9ycy5tYXAoKGVycm9yLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgPGxpIGtleT17aW5kZXh9PntlcnJvcn08L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICkpXHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKVxyXG4gICAgICB9XHJcbiAgICAgIHtcclxuICAgICAgICBzZWxlY3RlZEltZyAmJiA8VHJhc2hCdXR0b24gYWRkaXRpb25hbENsYXNzPVwiZm9ybS11cGxvYWQtdHJhc2gtYnV0dG9uXCIgb25DbGljaz17aGFuZGxlRGVsZXRlfSAvPlxyXG4gICAgICB9XHJcblxyXG4gICAgICA8aW5wdXQgdHlwZT1cImhpZGRlblwiIG5hbWU9e25hbWV9IHZhbHVlPXtoaWRkZW5JbWcgPz8gJyd9IC8+XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn0iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyB1c2VDb250cm9sbGVyIH0gZnJvbSAncmVhY3QtaG9vay1mb3JtJztcclxuaW1wb3J0IHsgRXhwYW5kTW9yZUljb24gfSBmcm9tICcuLi9JY29uL0V4cGFuZE1vcmVJY29uJztcclxuXHJcbmV4cG9ydCBjb25zdCBTZWxlY3QgPSAoe2NoaWxkcmVuLCBuYW1lLCB2YWx1ZSwgb25DaGFuZ2UsIGVycm9ycywgLi4ucHJvcHN9KSAgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17J2Zvcm0tZ3JvdXAgc2VsZWN0LWdyb3VwJyArIChlcnJvcnMgPyAnIGlzLWludmFsaWQnOiAnJyl9PlxyXG4gICAgICAgICAgICA8c2VsZWN0IGNsYXNzTmFtZT1cImZvcm0tc2VsZWN0XCIgbmFtZT17bmFtZX0gdmFsdWU9e3ZhbHVlfSBvbkNoYW5nZT17b25DaGFuZ2V9IHsuLi5wcm9wc30+XHJcbiAgICAgICAgICAgICAgICB7Y2hpbGRyZW59XHJcbiAgICAgICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgT3B0aW9uID0gKHtjaGlsZHJlbiwgdmFsdWV9KSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxvcHRpb24gY2xhc3NOYW1lPVwiZm9ybS1vcHRpb25cIiB2YWx1ZT17dmFsdWV9PlxyXG4gICAgICAgICAgICB7Y2hpbGRyZW59XHJcbiAgICAgICAgPC9vcHRpb24+XHJcbiAgICApXHJcbn1cclxuXHJcblxyXG5leHBvcnQgY29uc3QgU2VsZWN0Q29udHJvbGxlZCA9ICh7Y2hpbGRyZW4sIGNvbnRyb2wsIG5hbWUsIGVycm9yLCBhZGRpdGlvbmFsQ2xhc3MsIG9uQ2hhbmdlID0gbnVsbCwgbGFiZWwgPSBudWxsLCAuLi5wcm9wc30pICA9PiB7XHJcblxyXG4gICAgY29uc3Qge2ZpZWxkfSA9IHVzZUNvbnRyb2xsZXIoe25hbWUsIGNvbnRyb2x9KTtcclxuXHJcbiAgICBjb25zdCBoYW5kbGVDaGFuZ2UgPSBlID0+IHtcclxuICAgICAgICBpZihvbkNoYW5nZSkge1xyXG4gICAgICAgICAgICBvbkNoYW5nZShlLnRhcmdldC52YWx1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZpZWxkLm9uQ2hhbmdlKGUpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwIHNlbGVjdC1ncm91cFwiPlxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBsYWJlbCAmJiA8bGFiZWwgY2xhc3NOYW1lPVwiZm9ybS1sYWJlbFwiIGh0bWxGb3I9e25hbWV9PntsYWJlbH08L2xhYmVsPlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1zZWxlY3Qtd3JhcHBlclwiPlxyXG4gICAgICAgICAgICAgICAgPHNlbGVjdCBcclxuICAgICAgICAgICAgICAgICAgICBpZD17bmFtZX1cclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9eydmb3JtLXNlbGVjdCcgKyAoYWRkaXRpb25hbENsYXNzID8gJyAnK2FkZGl0aW9uYWxDbGFzczogJycpfSBcclxuICAgICAgICAgICAgICAgICAgICByZWY9e2ZpZWxkLnJlZn0gXHJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX0gXHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2ZpZWxkLnZhbHVlfSBcclxuICAgICAgICAgICAgICAgICAgICBuYW1lPXtmaWVsZC5uYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQmx1cj17ZmllbGQub25CbHVyfVxyXG4gICAgICAgICAgICAgICAgICAgIG9uRm9jdXM9e2ZpZWxkLm9uRm9jdXN9XHJcbiAgICAgICAgICAgICAgICAgICAgey4uLnByb3BzfVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIHtjaGlsZHJlbn1cclxuICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgICAgICAgICAgPEV4cGFuZE1vcmVJY29uIGNsYXNzTmFtZT1cImZvcm0tc2VsZWN0LWFycm93XCIgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGVycm9yICYmIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1lcnJvclwiPntlcnJvcn08L2Rpdj5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5cclxuZXhwb3J0IGNvbnN0IEVkaXRJY29uID0gKHthZGRpdGlvbmFsQ2xhc3MsIC4uLnByb3BzfSkgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8c3ZnIGNsYXNzTmFtZT17J2ljb24gaS1lZGl0JyArIChhZGRpdGlvbmFsQ2xhc3MgPyAnICcrYWRkaXRpb25hbENsYXNzOiAnJyl9IHsuLi5wcm9wc30gZW5hYmxlQmFja2dyb3VuZD1cIm5ldyAwIDAgOTYgOTZcIiB2aWV3Qm94PVwiMCAwIDk2IDk2XCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPlxyXG4gICAgICAgICAgICA8cGF0aCBmaWxsPVwiY3VycmVudENvbG9yXCIgZD1cIm0yOCA3MGMuMiAwIC40IDAgLjYtLjFsMTYtNC43Yy4zLS4xLjYtLjMuOC0uNWwzNS40LTM1LjJjLjItLjIuNC0uMy41LS41IDEuOS0xLjkgMi45LTQuNCAzLTcuMS4xLTIuOC0xLTUuNC0yLjktNy40bC0uMS0uMWMtMi0xLjktNC42LTIuOC03LjQtMi43cy01LjMgMS4zLTcuMSAzLjNsLTM1LjUgMzUuNWMtLjIuMy0uNC42LS41LjlsLTQuNyAxNmMtLjIuNyAwIDEuNS41IDIgLjQuNC45LjYgMS40LjZ6bTYuNS0xNi45IDM1LjItMzUuM2MxLjEtMS4yIDIuNy0xLjkgNC40LTJzMy4zLjUgNC41IDEuNmMxLjEgMS4zIDEuNyAyLjggMS43IDQuNXMtLjggMy4zLTIgNC41bC0uMS4xLS4xLjEtMzUuMSAzNC45LTEyIDMuNXptNDkuNSAyOC45aC03MmMtMS4xIDAtMiAuOS0yIDJzLjkgMiAyIDJoNzJjMS4xIDAgMi0uOSAyLTJzLS45LTItMi0yelwiPjwvcGF0aD5cclxuICAgICAgICA8L3N2Zz5cclxuICAgIClcclxufVxyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5cclxuZXhwb3J0IGNvbnN0IEV4cGFuZE1vcmVJY29uID0gKHthZGRpdGlvbmFsQ2xhc3MsIC4uLnByb3BzfSkgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8c3ZnIGNsYXNzTmFtZT17J2ktZXhwYW5kLW1vcmUnICsgKGFkZGl0aW9uYWxDbGFzcyA/ICcgJyArIGFkZGl0aW9uYWxDbGFzczogJycpfSB7Li4ucHJvcHN9IHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDQ5MC42ODggNDkwLjY4OFwiPlxyXG4gICAgICAgICAgICA8cGF0aCBmaWxsPVwiY3VycmVudENvbG9yXCIgZD1cIk00NzIuMzI4LDEyMC41MjlMMjQ1LjIxMywzNDcuNjY1TDE4LjA5OCwxMjAuNTI5Yy00LjIzNy00LjA5My0xMC45OS0zLjk3NS0xNS4wODMsMC4yNjJcclxuICAgICAgICAgICAgICAgIGMtMy45OTIsNC4xMzQtMy45OTIsMTAuNjg3LDAsMTQuODJsMjM0LjY2NywyMzQuNjY3YzQuMTY1LDQuMTY0LDEwLjkxNyw0LjE2NCwxNS4wODMsMGwyMzQuNjY3LTIzNC42NjdcclxuICAgICAgICAgICAgICAgIGM0LjIzNy00LjA5Myw0LjM1NC0xMC44NDUsMC4yNjItMTUuMDgzYy00LjA5My00LjIzNy0xMC44NDUtNC4zNTQtMTUuMDgzLTAuMjYyYy0wLjA4OSwwLjA4Ni0wLjE3NiwwLjE3My0wLjI2MiwwLjI2MlxyXG4gICAgICAgICAgICAgICAgTDQ3Mi4zMjgsMTIwLjUyOXpcIj5cclxuICAgICAgICAgICAgPC9wYXRoPlxyXG4gICAgICAgICAgICA8cGF0aCBmaWxsPVwiY3VycmVudENvbG9yXCIgZD1cIk0yNDUuMjEzLDM3My40MTVjLTIuODMxLDAuMDA1LTUuNTQ4LTEuMTE1LTcuNTUyLTMuMTE1TDIuOTk0LDEzNS42MzNjLTQuMDkzLTQuMjM3LTMuOTc1LTEwLjk5LDAuMjYyLTE1LjA4M1xyXG4gICAgICAgICAgICAgICAgYzQuMTM0LTMuOTkyLDEwLjY4Ny0zLjk5MiwxNC44MiwwbDIyNy4xMzYsMjI3LjExNWwyMjcuMTE1LTIyNy4xMzZjNC4wOTMtNC4yMzcsMTAuODQ1LTQuMzU0LDE1LjA4My0wLjI2MlxyXG4gICAgICAgICAgICAgICAgYzQuMjM3LDQuMDkzLDQuMzU0LDEwLjg0NSwwLjI2MiwxNS4wODNjLTAuMDg2LDAuMDg5LTAuMTczLDAuMTc2LTAuMjYyLDAuMjYyTDI1Mi43NDQsMzcwLjI3OVxyXG4gICAgICAgICAgICAgICAgQzI1MC43NDgsMzcyLjI4MSwyNDguMDM5LDM3My40MDgsMjQ1LjIxMywzNzMuNDE1elwiPlxyXG4gICAgICAgICAgICA8L3BhdGg+XHJcbiAgICAgICAgPC9zdmc+XHJcbiAgICApXHJcbn1cclxuXHJcblxyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5cclxuZXhwb3J0IGNvbnN0IFBsdXNJY29uID0gKHthZGRpdGlvbmFsQ2xhc3MsIC4uLnByb3BzfSkgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8c3ZnIGNsYXNzTmFtZT17J2ljb24gaS1wbHVzJyArIChhZGRpdGlvbmFsQ2xhc3MgPyAnICcgKyBhZGRpdGlvbmFsQ2xhc3M6ICcnKX0gey4uLnByb3BzfSB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCAyNCAyNFwiPlxyXG4gICAgICAgICAgICA8ZyBpZD1cImVzc2VudGlhbHMvYmFzaWNzL2FkZFwiIGZpbGw9XCJub25lXCIgZmlsbFJ1bGU9XCJldmVub2RkXCI+XHJcbiAgICAgICAgICAgIDxwYXRoIGZpbGw9XCJjdXJyZW50Q29sb3JcIiBpZD1cIkZpbGwtNzBcIiBkPVwibTExLjQ5MzU4OTggMjFjLS4yNzYgMC0uNS0uMjI0LS41LS41di04LjVoLTguNDk5OTk5OThjLS4yNzYgMC0uNS0uMjI0LS41LS41cy4yMjQtLjUuNS0uNWg4LjQ5OTk5OTk4di04LjVjMC0uMjc2LjIyNC0uNS41LS41cy41LjIyNC41LjV2OC41aDguNWMuMjc2IDAgLjUuMjI0LjUuNXMtLjIyNC41LS41LjVoLTguNXY4LjVjMCAuMjc2LS4yMjQuNS0uNS41XCI+PC9wYXRoPlxyXG4gICAgICAgICAgICA8L2c+XHJcbiAgICAgICAgPC9zdmc+XHJcbiAgICApXHJcbn0iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5cclxuZXhwb3J0IGNvbnN0IFRyYXNoSWNvbiA9ICh7YWRkaXRpb25hbENsYXNzLCAuLi5wcm9wc30pID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPHN2ZyBjbGFzc05hbWU9eydpY29uIGktdHJhc2gnICsgKGFkZGl0aW9uYWxDbGFzcyA/ICcgJyArIGFkZGl0aW9uYWxDbGFzczogJycpfSB7Li4ucHJvcHN9IHZpZXdCb3g9XCItNDAgMCA0MjcgNDI3LjAwMTMxXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPlxyXG4gICAgICAgICAgICA8cGF0aCBmaWxsPVwiY3VycmVudENvbG9yXCIgZD1cIm0yMzIuMzk4NDM4IDE1NC43MDMxMjVjLTUuNTIzNDM4IDAtMTAgNC40NzY1NjMtMTAgMTB2MTg5YzAgNS41MTk1MzEgNC40NzY1NjIgMTAgMTAgMTAgNS41MjM0MzcgMCAxMC00LjQ4MDQ2OSAxMC0xMHYtMTg5YzAtNS41MjM0MzctNC40NzY1NjMtMTAtMTAtMTB6bTAgMFwiPlxyXG4gICAgICAgICAgICA8L3BhdGg+XHJcbiAgICAgICAgICAgIDxwYXRoIGZpbGw9XCJjdXJyZW50Q29sb3JcIiBkPVwibTExNC4zOTg0MzggMTU0LjcwMzEyNWMtNS41MjM0MzggMC0xMCA0LjQ3NjU2My0xMCAxMHYxODljMCA1LjUxOTUzMSA0LjQ3NjU2MiAxMCAxMCAxMCA1LjUyMzQzNyAwIDEwLTQuNDgwNDY5IDEwLTEwdi0xODljMC01LjUyMzQzNy00LjQ3NjU2My0xMC0xMC0xMHptMCAwXCI+XHJcbiAgICAgICAgICAgIDwvcGF0aD5cclxuICAgICAgICAgICAgPHBhdGggZmlsbD1cImN1cnJlbnRDb2xvclwiIGQ9XCJtMjguMzk4NDM4IDEyNy4xMjEwOTR2MjQ2LjM3ODkwNmMwIDE0LjU2MjUgNS4zMzk4NDMgMjguMjM4MjgxIDE0LjY2Nzk2OCAzOC4wNTA3ODEgOS4yODUxNTYgOS44Mzk4NDQgMjIuMjA3MDMyIDE1LjQyNTc4MSAzNS43MzA0NjkgMTUuNDQ5MjE5aDE4OS4yMDMxMjVjMTMuNTI3MzQ0LS4wMjM0MzggMjYuNDQ5MjE5LTUuNjA5Mzc1IDM1LjczMDQ2OS0xNS40NDkyMTkgOS4zMjgxMjUtOS44MTI1IDE0LjY2Nzk2OS0yMy40ODgyODEgMTQuNjY3OTY5LTM4LjA1MDc4MXYtMjQ2LjM3ODkwNmMxOC41NDI5NjgtNC45MjE4NzUgMzAuNTU4NTkzLTIyLjgzNTkzOCAyOC4wNzgxMjQtNDEuODYzMjgyLTIuNDg0Mzc0LTE5LjAyMzQzNy0xOC42OTE0MDYtMzMuMjUzOTA2LTM3Ljg3ODkwNi0zMy4yNTc4MTJoLTUxLjE5OTIxOHYtMTIuNWMuMDU4NTkzLTEwLjUxMTcxOS00LjA5NzY1Ny0yMC42MDU0NjktMTEuNTM5MDYzLTI4LjAzMTI1LTcuNDQxNDA2LTcuNDIxODc1LTE3LjU1MDc4MS0xMS41NTQ2ODc1LTI4LjA2MjUtMTEuNDY4NzVoLTg4Ljc5Njg3NWMtMTAuNTExNzE5LS4wODU5Mzc1LTIwLjYyMTA5NCA0LjA0Njg3NS0yOC4wNjI1IDExLjQ2ODc1LTcuNDQxNDA2IDcuNDI1NzgxLTExLjU5NzY1NiAxNy41MTk1MzEtMTEuNTM5MDYyIDI4LjAzMTI1djEyLjVoLTUxLjE5OTIxOWMtMTkuMTg3NS4wMDM5MDYtMzUuMzk0NTMxIDE0LjIzNDM3NS0zNy44Nzg5MDcgMzMuMjU3ODEyLTIuNDgwNDY4IDE5LjAyNzM0NCA5LjUzNTE1NyAzNi45NDE0MDcgMjguMDc4MTI2IDQxLjg2MzI4MnptMjM5LjYwMTU2MiAyNzkuODc4OTA2aC0xODkuMjAzMTI1Yy0xNy4wOTc2NTYgMC0zMC4zOTg0MzctMTQuNjg3NS0zMC4zOTg0MzctMzMuNXYtMjQ1LjVoMjUwdjI0NS41YzAgMTguODEyNS0xMy4zMDA3ODIgMzMuNS0zMC4zOTg0MzggMzMuNXptLTE1OC42MDE1NjItMzY3LjVjLS4wNjY0MDctNS4yMDcwMzEgMS45ODA0NjgtMTAuMjE4NzUgNS42NzU3ODEtMTMuODk0NTMxIDMuNjkxNDA2LTMuNjc1NzgxIDguNzE0ODQzLTUuNjk1MzEzIDEzLjkyNTc4MS01LjYwNTQ2OWg4OC43OTY4NzVjNS4yMTA5MzctLjA4OTg0NCAxMC4yMzQzNzUgMS45Mjk2ODggMTMuOTI1NzgxIDUuNjA1NDY5IDMuNjk1MzEzIDMuNjcxODc1IDUuNzQyMTg4IDguNjg3NSA1LjY3NTc4MiAxMy44OTQ1MzF2MTIuNWgtMTI4em0tNzEuMTk5MjE5IDMyLjVoMjcwLjM5ODQzN2M5Ljk0MTQwNiAwIDE4IDguMDU4NTk0IDE4IDE4cy04LjA1ODU5NCAxOC0xOCAxOGgtMjcwLjM5ODQzN2MtOS45NDE0MDcgMC0xOC04LjA1ODU5NC0xOC0xOHM4LjA1ODU5My0xOCAxOC0xOHptMCAwXCI+XHJcbiAgICAgICAgICAgIDwvcGF0aD5cclxuICAgICAgICAgICAgPHBhdGggZmlsbD1cImN1cnJlbnRDb2xvclwiIGQ9XCJtMTczLjM5ODQzOCAxNTQuNzAzMTI1Yy01LjUyMzQzOCAwLTEwIDQuNDc2NTYzLTEwIDEwdjE4OWMwIDUuNTE5NTMxIDQuNDc2NTYyIDEwIDEwIDEwIDUuNTIzNDM3IDAgMTAtNC40ODA0NjkgMTAtMTB2LTE4OWMwLTUuNTIzNDM3LTQuNDc2NTYzLTEwLTEwLTEwem0wIDBcIj5cclxuICAgICAgICAgICAgPC9wYXRoPlxyXG4gICAgICAgIDwvc3ZnPlxyXG4gICAgKVxyXG59IiwiaW1wb3J0IHsgdCB9IGZyb20gJ2kxOG5leHQnO1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuXHJcbmV4cG9ydCBjb25zdCBTdWdnZXN0TGlzdCA9ICh7YWRkaXRpb25hbENsYXNzLCBzdWdnZXN0cywgb25TZWxlY3QsIG9uQ2xvc2UsIHJlbmRlcn0pID0+IHtcclxuICAgIC8vZmVybWV0dXJlIGF1IGNsaWNrIHN1ciBsZSBjw7R0w6lcclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBvbkNsb3NlKTtcclxuICAgICAgICAgICAgcmV0dXJuICgpID0+IGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgb25DbG9zZSk7XHJcbiAgICB9LCBbXSk7XHJcbiAgICAvL2Zlcm1ldHVyZSDDoCBsJ2FwcHVpIHN1ciBUYWJcclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgY2xvc2VPblRhYkRvd24gPSBlID0+IHtcclxuICAgICAgICAgICAgaWYoZS5rZXkgPT09ICdUYWInKSB7XHJcbiAgICAgICAgICAgICAgICBvbkNsb3NlKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBjbG9zZU9uVGFiRG93bik7XHJcbiAgICAgICAgcmV0dXJuICgpID0+IGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2xvc2VPblRhYkRvd24pO1xyXG4gICAgfSwgW10pO1xyXG5cclxuICAgIFxyXG4gICAgLy91dGlsaXNhdGlvbiBhdSBjbGF2aWVyXHJcbiAgICBjb25zdCBbc2VsZWN0ZWQsIHNldFNlbGVjdGVkXSA9IHVzZVN0YXRlKG51bGwpO1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgY29uc3Qgb25LZXlEb3duID0gZSA9PiB7XHJcbiAgICAgICAgICAgIHN3aXRjaChlLmtleSkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSAnQXJyb3dVcCc6XHJcbiAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHNldFNlbGVjdGVkKHNlbGVjdGVkID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYoc2VsZWN0ZWQgPT09IG51bGwgfHwgc2VsZWN0ZWQgPD0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChzdWdnZXN0cy5sZW5ndGggLSAxKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKHNlbGVjdGVkIC0gMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlICdBcnJvd0Rvd24nOlxyXG4gICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAgICAgICBzZXRTZWxlY3RlZChzZWxlY3RlZCA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKHNlbGVjdGVkID09PSBudWxsIHx8IHNlbGVjdGVkID49IChzdWdnZXN0cy5sZW5ndGggLSAxKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChzZWxlY3RlZCArIDEpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgZGVmYXVsdDogXHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIG9uS2V5RG93bik7XHJcbiAgICAgICAgcmV0dXJuICgpID0+IGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBvbktleURvd24pO1xyXG4gICAgfSwgW10pO1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgY29uc3Qgb25LZXlEb3duID0gZSA9PiB7XHJcbiAgICAgICAgICAgaWYoZS5rZXkgPT09ICdFbnRlcicpIHtcclxuICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgICAgICAgICBvblNlbGVjdChzdWdnZXN0c1tzZWxlY3RlZF0pO1xyXG4gICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIG9uS2V5RG93bik7XHJcbiAgICAgICAgcmV0dXJuICgpID0+IGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBvbktleURvd24pO1xyXG4gICAgfSwgW3NlbGVjdGVkXSk7XHJcblxyXG4gICAgY29uc3Qgc3RvcFByb3BhZ2F0aW9uID0gZSA9PiB7XHJcbiAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICBcclxuICAgICAgICA8dWwgY2xhc3NOYW1lPXtgc3VnZ2VzdC1saXN0ICR7YWRkaXRpb25hbENsYXNzfWB9IG9uQ2xpY2s9e3N0b3BQcm9wYWdhdGlvbn0gcm9sZT1cImxpc3Rib3hcIiBhcmlhLWxhYmVsPXt0KCdzdWdnZXN0aW9ucycsIHtuczogJ21lc3NhZ2VzJ30pfT5cclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgc3VnZ2VzdHMubWFwKChzdWdnZXN0LCBpbmRleCkgPT4gcmVuZGVyKHN1Z2dlc3QsIHNlbGVjdGVkID09PSBpbmRleCkpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICA8L3VsPlxyXG4gICAgKVxyXG59XHJcblxyXG5cclxuXHJcbiAgICBcclxuIiwiLy8gYW55IENTUyB5b3UgaW1wb3J0IHdpbGwgb3V0cHV0IGludG8gYSBzaW5nbGUgY3NzIGZpbGUgKGFwcC5jc3MgaW4gdGhpcyBjYXNlKVxyXG5pbXBvcnQgJy4uL3N0eWxlcy9BZG1pbi9pbmRleC5jc3MnO1xyXG5pbXBvcnQgJy4uL3N0eWxlcy9BZG1pbi9oZWFkZXIuY3NzJztcclxuaW1wb3J0ICcuLi9zdHlsZXMvQWRtaW4vZm9vdGVyLmNzcyc7XHJcbmltcG9ydCAnLi4vc3R5bGVzL0FkbWluL2hvbWUuY3NzJztcclxuaW1wb3J0ICcuLi9zdHlsZXMvQWRtaW4vZm9ybS5jc3MnO1xyXG5pbXBvcnQgJy4uL3N0eWxlcy9BZG1pbi9mb3JtX2ZpbHRlcnMuY3NzJztcclxuaW1wb3J0ICcuLi9zdHlsZXMvQWRtaW4vVUkvc3VnZ2VzdExpc3QuY3NzJztcclxuaW1wb3J0ICcuLi9zdHlsZXMvQWRtaW4vcGFnaW5hdGlvbi5jc3MnO1xyXG5pbXBvcnQgJy4uL3N0eWxlcy9BZG1pbi90YWJsZS5jc3MnO1xyXG5pbXBvcnQgJy4uL3N0eWxlcy9BZG1pbi9jdXN0b21UYWJsZS5jc3MnO1xyXG5pbXBvcnQgJy4uL3N0eWxlcy9BZG1pbi9VSS9idXR0b25zLmNzcyc7XHJcbmltcG9ydCAnLi4vc3R5bGVzL0FkbWluL2JyZWFkY3J1bWIuY3NzJztcclxuaW1wb3J0ICcuLi9zdHlsZXMvQWRtaW4vUHJvZHVjdC9zaG93LmNzcyc7XHJcbmltcG9ydCAnLi4vc3R5bGVzL0FkbWluL2ZsYXNoZXMuY3NzJztcclxuaW1wb3J0ICcuLi9zdHlsZXMvQWRtaW4vcmV2aWV3LmNzcyc7XHJcbmltcG9ydCAnLi4vc3R5bGVzL0FkbWluL2FsZXJ0cy5jc3MnO1xyXG5cclxuLy8gc3RhcnQgdGhlIFN0aW11bHVzIGFwcGxpY2F0aW9uXHJcbmltcG9ydCAnLi4vYm9vdHN0cmFwJztcclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgY3JlYXRlUm9vdCB9IGZyb20gJ3JlYWN0LWRvbS9jbGllbnQnO1xyXG5pbXBvcnQgeyBQdXJjaGFzZVNoaXBwaW5nU3RhdHVzVXBkYXRlciB9IGZyb20gJy4uL0NvbXBvbmVudHMvQWRtaW4vUHVyY2hhc2VTaGlwcGluZ1N0YXR1c1VwZGF0ZXInO1xyXG5pbXBvcnQgeyBSZXZpZXdNb2RlcmF0b3IgfSBmcm9tICcuLi9Db21wb25lbnRzL0FkbWluL1Jldmlld01vZGVyYXRvcic7XHJcbmltcG9ydCBpMThuIGZyb20gJy4vaTE4bic7XHJcbmltcG9ydCB7IEluZ3JlZGllbnRzUXVhbnRpdGllc0lucHV0IH0gZnJvbSAnLi4vQ29tcG9uZW50cy9BZG1pbi9JbmdyZWRpZW50c1F1YW50aXRpZXNJbnB1dCc7XHJcbmltcG9ydCB7IFNlbGVjdExpbmtlZEl0ZW1zIH0gZnJvbSAnLi4vQ29tcG9uZW50cy9BZG1pbi9TZWxlY3RMaW5rZWRJdGVtcyc7XHJcbmltcG9ydCB7IEFkbWluUGljdHVyZVVwbG9hZCB9IGZyb20gJy4uL0NvbXBvbmVudHMvQWRtaW4vQWRtaW5QaWN0dXJlVXBsb2FkJztcclxuaW1wb3J0IHsgQWRtaW5BbnN3ZXJDb250cm9sIH0gZnJvbSAnLi4vQ29tcG9uZW50cy9BZG1pbi9BZG1pbkFuc3dlckNvbnRyb2wnO1xyXG5pbXBvcnQgeyBQYWNrYWdpbmdDaG9pY2VzSW5wdXQgfSBmcm9tICcuLi9Db21wb25lbnRzL0FkbWluL1Byb2R1Y3RGb3JtUmVhY3RCbG9jay9QYWNrYWdpbmdDaG9pY2VzSW5wdXQnO1xyXG5pbXBvcnQgeyBTZWxlY3RVbmlxdWVJdGVtIH0gZnJvbSAnLi4vQ29tcG9uZW50cy9BZG1pbi9TZWxlY3RVbmlxdWVJdGVtJztcclxuaW1wb3J0IHsgUHJvZHVjdEZvcm1SZWFjdEJsb2NrIH0gZnJvbSAnLi4vQ29tcG9uZW50cy9BZG1pbi9Qcm9kdWN0Rm9ybVJlYWN0QmxvY2snO1xyXG5cclxuXHJcbmkxOG4uY2hhbmdlTGFuZ3VhZ2UoJ2ZyJyk7XHJcblxyXG4vL29uIGF1dGggZXZlbnQgOiBzdXBwcmVzc2lvbiBkZXMgaXRlbXMgZGUgc2Vzc2lvbiBzdG9yYWdlXHJcbmlmKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhdXRoLWV2ZW50JykpIHtcclxuICAgIHNlc3Npb25TdG9yYWdlLnJlbW92ZUl0ZW0oJ2NoZWNrb3V0Jyk7XHJcbiAgICBzZXNzaW9uU3RvcmFnZS5yZW1vdmVJdGVtKCdjaGVja19zdCcpO1xyXG4gICAgc2Vzc2lvblN0b3JhZ2UucmVtb3ZlSXRlbSgnbGlnaHRfdXNlcicpO1xyXG59XHJcblxyXG5cclxuLy9zZWxlY3QgbGlua2VkIGl0ZW1zXHJcbltcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzZWxlY3QtcHJvZHVjdHMtaW5wdXQnKSxcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzZWxlY3QtcmVjaXBlcy1pbnB1dCcpLFxyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NlbGVjdC1hcnRpY2xlcy1pbnB1dCcpXHJcbl0uZm9yRWFjaChpbnB1dCA9PiB7XHJcbiAgICBpZihpbnB1dCkge1xyXG4gICAgICAgIGNvbnN0IGVycm9yID0gaW5wdXQucXVlcnlTZWxlY3RvcignLmFkbWluLWZvcm0tZXJyb3IgdWwgbGk6Zmlyc3QtY2hpbGQnKT8uaW5uZXJIVE1MID8/IG51bGw7XHJcbiAgICAgICAgY29uc3Qgcm9vdCA9IGNyZWF0ZVJvb3QoaW5wdXQpO1xyXG4gICAgICAgIHJvb3QucmVuZGVyKFxyXG4gICAgICAgICAgICA8U2VsZWN0TGlua2VkSXRlbXNcclxuICAgICAgICAgICAgICAgIGluZGV4RW5kcG9pbnQ9e2lucHV0LmRhdGFzZXQ/LmluZGV4ZW5kcG9pbnR9XHJcbiAgICAgICAgICAgICAgICBzZWFyY2hFbmRwb2ludD17aW5wdXQuZGF0YXNldD8uc2VhcmNoZW5kcG9pbnR9IFxyXG4gICAgICAgICAgICAgICAgbmFtZT17aW5wdXQuZGF0YXNldC5uYW1lfSBcclxuICAgICAgICAgICAgICAgIHRpdGxlPXtpbnB1dC5kYXRhc2V0LnRpdGxlfVxyXG4gICAgICAgICAgICAgICAgZm9ybUVycm9yPXtlcnJvcn0gXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG59KTtcclxuXHJcblxyXG5cclxuLy9zZWxlY3QgdW5pcXVlIGl0ZW1cclxuZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnNlbGVjdC11bmlxdWUtaXRlbS1pbnB1dCcpLmZvckVhY2goaW5wdXQgPT4ge1xyXG4gICAgY29uc3QgZXJyb3IgPSBpbnB1dC5xdWVyeVNlbGVjdG9yKCcuYWRtaW4tZm9ybS1lcnJvciB1bCBsaTpmaXJzdC1jaGlsZCcpPy5pbm5lckhUTUwgPz8gbnVsbDtcclxuICAgIGNvbnN0IHJvb3QgPSBjcmVhdGVSb290KGlucHV0KTtcclxuICAgIHJvb3QucmVuZGVyKFxyXG4gICAgICAgIDxTZWxlY3RVbmlxdWVJdGVtIFxyXG4gICAgICAgICAgICB0eXBlPXtpbnB1dC5kYXRhc2V0LnR5cGV9XHJcbiAgICAgICAgICAgIGl0ZW1JZD17aW5wdXQuZGF0YXNldC5pdGVtaWR9XHJcbiAgICAgICAgICAgIHRpdGxlPXtpbnB1dC5kYXRhc2V0LnRpdGxlfVxyXG4gICAgICAgICAgICBuYW1lPXtpbnB1dC5kYXRhc2V0Lm5hbWV9XHJcbiAgICAgICAgICAgIGZvcm1FcnJvcj17ZXJyb3J9XHJcbiAgICAgICAgLz5cclxuICAgIClcclxufSlcclxuXHJcblxyXG4vL3Byb2R1Y3QgZm9ybSByZWFjdCBibG9jayA6IHZhdExldmVsICsgcGFja2FnaW5nQ2hvaWNlc1xyXG5pZihkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvZHVjdC1mb3JtLXJlYWN0LWJsb2NrJykpIHtcclxuICAgIGNvbnN0IGJsb2NrID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2R1Y3QtZm9ybS1yZWFjdC1ibG9jaycpO1xyXG4gICAgY29uc3Qgcm9vdCA9IGNyZWF0ZVJvb3QoYmxvY2spO1xyXG4gICAgcm9vdC5yZW5kZXIoXHJcbiAgICAgICAgPFByb2R1Y3RGb3JtUmVhY3RCbG9ja1xyXG4gICAgICAgICAgICBwcm9kdWN0SWQ9e2Jsb2NrLmRhdGFzZXQucHJvZHVjdGlkfVxyXG4gICAgICAgICAgICBwYWNrYWdpbmdDaG9pY2VzPXtibG9jay5kYXRhc2V0LnBhY2thZ2luZ2Nob2ljZXN9XHJcbiAgICAgICAgICAgIHZhdExldmVsPXtibG9jay5kYXRhc2V0LnZhdGxldmVsfVxyXG4gICAgICAgICAgICBwYWNrYWdpbmdDaG9pY2VzTmFtZT17YmxvY2suZGF0YXNldC5wYWNrYWdpbmdjaG9pY2VzbmFtZX1cclxuICAgICAgICAgICAgdmF0TGV2ZWxOYW1lPXtibG9jay5kYXRhc2V0LnZhdGxldmVsbmFtZX1cclxuICAgICAgICAvPlxyXG4gICAgKVxyXG59XHJcblxyXG5cclxuZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnB1cmNoYXNlLXNoaXBwaW5nLXN0YXR1cy11cGRhdGVyJykuZm9yRWFjaChwdXJjaGFzZVN0YXR1c1VwZGF0ZXIgPT4ge1xyXG4gICAgY29uc3QgcHVyY2hhc2VTdGF0dXNVcGRhdGVyUm9vdCA9IGNyZWF0ZVJvb3QocHVyY2hhc2VTdGF0dXNVcGRhdGVyKTtcclxuXHJcbiAgICBwdXJjaGFzZVN0YXR1c1VwZGF0ZXJSb290LnJlbmRlcihcclxuICAgICAgICA8UHVyY2hhc2VTaGlwcGluZ1N0YXR1c1VwZGF0ZXJcclxuICAgICAgICAgICAgc2hpcHBpbmdJbmZvSWQ9e3B1cmNoYXNlU3RhdHVzVXBkYXRlci5kYXRhc2V0LnNoaXBwaW5naW5mb2lkfSBcclxuICAgICAgICAgICAgaW5pdGlhbFN0YXR1cz17cHVyY2hhc2VTdGF0dXNVcGRhdGVyLmRhdGFzZXQuY3VycmVudHN0YXR1c30gXHJcbiAgICAgICAgLz5cclxuICAgICk7XHJcbn0pO1xyXG5cclxuXHJcbmlmKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yZXZpZXctbW9kZXJhdG9yJykpIHtcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5yZXZpZXctbW9kZXJhdG9yJykuZm9yRWFjaChyZXZpZXdNb2RlcmF0b3IgPT4ge1xyXG4gICAgICAgIGNvbnN0IHJldmlld01vZGVyYXRvclJvb3QgPSBjcmVhdGVSb290KHJldmlld01vZGVyYXRvcik7XHJcbiAgICAgICAgcmV2aWV3TW9kZXJhdG9yUm9vdC5yZW5kZXIoXHJcbiAgICAgICAgICAgIDxSZXZpZXdNb2RlcmF0b3IgaWQ9e3Jldmlld01vZGVyYXRvci5kYXRhc2V0LmlkfSBpbml0aWFsU3RhdHVzPXtyZXZpZXdNb2RlcmF0b3IuZGF0YXNldC5zdGF0dXN9IC8+XHJcbiAgICAgICAgKTtcclxuICAgIH0pXHJcbn1cclxuXHJcblxyXG5pZihkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaW5ncmVkaWVudHMtcXVhbnRpdGllcy1pbnB1dCcpKSB7XHJcbiAgICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpbmdyZWRpZW50cy1xdWFudGl0aWVzLWlucHV0Jyk7XHJcbiAgICBjb25zdCByb290ID0gY3JlYXRlUm9vdChpbnB1dCk7XHJcbiAgICByb290LnJlbmRlcihcclxuICAgICAgICA8SW5ncmVkaWVudHNRdWFudGl0aWVzSW5wdXQgbmFtZT17aW5wdXQuZGF0YXNldC5uYW1lfSB2YWx1ZT17aW5wdXQuZGF0YXNldC52YWx1ZX0gLz5cclxuICAgIClcclxufVxyXG5cclxuLy9waWN0dXJlIHVwbG9hZCBmaWVsZFxyXG5pZihkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRtaW4tcGljdHVyZS11cGxvYWQnKSkge1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmFkbWluLXBpY3R1cmUtdXBsb2FkJykuZm9yRWFjaChlbHQgPT4ge1xyXG4gICAgICAgIGNvbnN0IHJlc2l6ZVdpZHRoID0gcGFyc2VJbnQoZWx0LmRhdGFzZXQucmVzaXpld2lkdGggPz8gJzUwMCcpO1xyXG4gICAgICAgIGNvbnN0IHJlc2l6ZUhlaWdodCA9IHBhcnNlSW50KGVsdC5kYXRhc2V0LnJlc2l6ZWhlaWdodCA/PyAnNTAwJyk7XHJcbiAgICAgICAgY29uc3Qgcm9vdCA9IGNyZWF0ZVJvb3QoZWx0KTtcclxuICAgICAgICByb290LnJlbmRlcihcclxuICAgICAgICAgICAgPEFkbWluUGljdHVyZVVwbG9hZCBcclxuICAgICAgICAgICAgICAgIG5hbWU9e2VsdC5kYXRhc2V0Lm5hbWV9IFxyXG4gICAgICAgICAgICAgICAgbGFiZWw9e2VsdC5kYXRhc2V0LmxhYmVsfSBcclxuICAgICAgICAgICAgICAgIGRlZmF1bHRCYXNlNjRpbWc9e2VsdC5kYXRhc2V0LnZhbHVlID8/IG51bGx9IFxyXG4gICAgICAgICAgICAgICAgcmVzaXplV2lkdGg9e3Jlc2l6ZVdpZHRofSBcclxuICAgICAgICAgICAgICAgIHJlc2l6ZUhlaWdodD17cmVzaXplSGVpZ2h0fSBcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICApXHJcbiAgICB9KVxyXG59XHJcblxyXG5cclxuLy9hZG1pbiBhbnN3ZXJcclxuaWYoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkbWluLWFuc3dlci1jb250cm9sJykpIHtcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5hZG1pbi1hbnN3ZXItY29udHJvbCcpLmZvckVhY2goZWx0ID0+IHtcclxuICAgICAgICBjb25zdCByb290ID0gY3JlYXRlUm9vdChlbHQpO1xyXG4gICAgICAgIHJvb3QucmVuZGVyKFxyXG4gICAgICAgICAgICA8QWRtaW5BbnN3ZXJDb250cm9sIG93bmVyQ2xhc3M9e2VsdC5kYXRhc2V0Lm93bmVyY2xhc3N9IG93bmVySWQ9e2VsdC5kYXRhc2V0Lm93bmVyaWR9IC8+XHJcbiAgICAgICAgKVxyXG4gICAgfSlcclxufVxyXG4iLCJpbXBvcnQgaTE4biBmcm9tIFwiLi4vZW50cnlwb2ludHMvaTE4blwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IHByaWNlRm9ybWF0ZXIgPSAocHJpY2UpID0+IHtcclxuICAgIGNvbnN0IGZvcm1hdGVyID0gbmV3IEludGwuTnVtYmVyRm9ybWF0KGdldExvY2FsZU9wdGlvbigpLCB7c3R5bGU6ICdjdXJyZW5jeScsIGN1cnJlbmN5OiAnRVVSJ30pO1xyXG4gICAgcmV0dXJuIGZvcm1hdGVyLmZvcm1hdChwcmljZSAvIDEwMCk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgcmV2aWV3Tm90ZUZvcm1hdGVyID0gKHJldmlld05vdGUpID0+IHtcclxuICAgIGNvbnN0IGZvcm1hdGVyID0gbmV3IEludGwuTnVtYmVyRm9ybWF0KGdldExvY2FsZU9wdGlvbigpKTtcclxuICAgIHJldHVybiBmb3JtYXRlci5mb3JtYXQocmV2aWV3Tm90ZSAvIDEwKTtcclxufTtcclxuXHJcbi8qKlxyXG4gKiBAcGFyYW0ge251bWJlcn0gZGlzdGFuY2UgKG0pXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgZGlzdGFuY2VGb3JtYXRlciA9IChkaXN0YW5jZSkgPT4ge1xyXG4gICAgaWYoZGlzdGFuY2UgPj0gMTAwMCkge1xyXG4gICAgICAgIGNvbnN0IGRpc3RhbmNlSW5LbSA9IE1hdGgucm91bmQoKGRpc3RhbmNlIC8gMTAwKSkgLyAxMDsgLy8gZXg6IDE1NzQgbSAtLS0+IDEuNlxyXG5cclxuICAgICAgICBjb25zdCBmb3JtYXRlciA9IG5ldyBJbnRsLk51bWJlckZvcm1hdChnZXRMb2NhbGVPcHRpb24oKSk7XHJcbiAgICAgICAgcmV0dXJuIGZvcm1hdGVyLmZvcm1hdChkaXN0YW5jZUluS20pICsgJyBrbSc7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZGlzdGFuY2UgKyAnIG0nO1xyXG59XHJcblxyXG5cclxuY29uc3QgZ2V0TG9jYWxlT3B0aW9uID0gKCkgPT4ge1xyXG4gICAgaWYoaTE4bi5sYW5ndWFnZSA9PT0gJ2VuJykge1xyXG4gICAgICAgIHJldHVybiAnZW4tVVMnO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuICdmci1GUic7XHJcbn0iLCIvKipcclxuICogXHJcbiAqIEBwYXJhbSB7bnVtYmVyfSBwcmljZVRUQ1xyXG4gKiBAcGFyYW0ge251bWJlcn0gdmF0UmF0ZSAoZW4gJSkgXHJcbiAqIEByZXR1cm5zIFxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IGNhbGNQcmljZUhUID0gKHByaWNlVFRDLCB2YXRSYXRlKSA9PiB7XHJcbiAgICAvL3ByaXggbm9uIGFycm9uZGlcclxuICAgIGNvbnN0IHByaWNlID0gcHJpY2VUVEMgLyAoMSArICh2YXRSYXRlIC8gMTAwKSk7XHJcbiAgICAvL29uIHJldG91cm5lIGxlIHByaXggYXJyb25kaVxyXG4gICAgcmV0dXJuIE1hdGgucm91bmQocHJpY2UgKiAxMDApIC8gMTAwO1xyXG59IiwiZXhwb3J0IGNvbnN0IGNyZWF0ZVRva2VuID0gY291bnQgPT4ge1xyXG4gICAgbGV0IHRva2VuID0gJyc7XHJcbiAgICBmb3IobGV0IGk9MCA7IGkgPCBjb3VudCA7IGkrKykge1xyXG4gICAgICAgIHRva2VuICs9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKTtcclxuICAgIH1cclxuICAgIHJldHVybiB0b2tlbjtcclxufSIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcblxyXG5leHBvcnQgY29uc3QgQWRtaW5TaG93Q2FyZFJvdyA9ICh7dmFsdWUsIGxhYmVsLCBsYW5nID0gbnVsbH0pID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9eydhZG1pbi1zaG93LWNhcmQtcm93LXdyYXBwZXInICsgKGxhbmcgPyAoJyAnK2xhbmcrJy1ncm91cCcpOiAnJyl9PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFkbWluLXNob3ctY2FyZC1yb3dcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWRtaW4tc2hvdy1jYXJkLXJvdy1sYWJlbFwiPntsYWJlbH08L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWRtaW4tc2hvdy1jYXJkLXJvdy12YWx1ZVwiPnt2YWx1ZX08L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn0iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBUZXh0RmllbGQgfSBmcm9tICcuLi8uLi8uLi8uLi9VSS9Gb3JtL1RleHRGaWVsZCc7XHJcblxyXG5leHBvcnQgY29uc3QgQWRtaW5UZXh0RmllbGQgPSAoey4uLnByb3BzfSkgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFkbWluLWZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgPFRleHRGaWVsZCBhZGRpdGlvbmFsQ2xhc3M9XCJhZG1pbi1mb3JtLWNvbnRyb2xcIiB7Li4ucHJvcHN9IC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn0iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiXSwibmFtZXMiOlsiX3JlZ2VuZXJhdG9yUnVudGltZSIsImV4cG9ydHMiLCJPcCIsIk9iamVjdCIsInByb3RvdHlwZSIsImhhc093biIsImhhc093blByb3BlcnR5IiwiZGVmaW5lUHJvcGVydHkiLCJvYmoiLCJrZXkiLCJkZXNjIiwidmFsdWUiLCIkU3ltYm9sIiwiU3ltYm9sIiwiaXRlcmF0b3JTeW1ib2wiLCJpdGVyYXRvciIsImFzeW5jSXRlcmF0b3JTeW1ib2wiLCJhc3luY0l0ZXJhdG9yIiwidG9TdHJpbmdUYWdTeW1ib2wiLCJ0b1N0cmluZ1RhZyIsImRlZmluZSIsImVudW1lcmFibGUiLCJjb25maWd1cmFibGUiLCJ3cml0YWJsZSIsImVyciIsIndyYXAiLCJpbm5lckZuIiwib3V0ZXJGbiIsInNlbGYiLCJ0cnlMb2NzTGlzdCIsInByb3RvR2VuZXJhdG9yIiwiR2VuZXJhdG9yIiwiZ2VuZXJhdG9yIiwiY3JlYXRlIiwiY29udGV4dCIsIkNvbnRleHQiLCJtYWtlSW52b2tlTWV0aG9kIiwidHJ5Q2F0Y2giLCJmbiIsImFyZyIsInR5cGUiLCJjYWxsIiwiQ29udGludWVTZW50aW5lbCIsIkdlbmVyYXRvckZ1bmN0aW9uIiwiR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUiLCJJdGVyYXRvclByb3RvdHlwZSIsImdldFByb3RvIiwiZ2V0UHJvdG90eXBlT2YiLCJOYXRpdmVJdGVyYXRvclByb3RvdHlwZSIsInZhbHVlcyIsIkdwIiwiZGVmaW5lSXRlcmF0b3JNZXRob2RzIiwiZm9yRWFjaCIsIm1ldGhvZCIsIl9pbnZva2UiLCJBc3luY0l0ZXJhdG9yIiwiUHJvbWlzZUltcGwiLCJpbnZva2UiLCJyZXNvbHZlIiwicmVqZWN0IiwicmVjb3JkIiwicmVzdWx0IiwiX3R5cGVvZiIsIl9fYXdhaXQiLCJ0aGVuIiwidW53cmFwcGVkIiwiZXJyb3IiLCJwcmV2aW91c1Byb21pc2UiLCJjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZyIsInN0YXRlIiwiRXJyb3IiLCJkb25lUmVzdWx0IiwiZGVsZWdhdGUiLCJkZWxlZ2F0ZVJlc3VsdCIsIm1heWJlSW52b2tlRGVsZWdhdGUiLCJzZW50IiwiX3NlbnQiLCJkaXNwYXRjaEV4Y2VwdGlvbiIsImFicnVwdCIsImRvbmUiLCJtZXRob2ROYW1lIiwidW5kZWZpbmVkIiwiVHlwZUVycm9yIiwiaW5mbyIsInJlc3VsdE5hbWUiLCJuZXh0IiwibmV4dExvYyIsInB1c2hUcnlFbnRyeSIsImxvY3MiLCJlbnRyeSIsInRyeUxvYyIsImNhdGNoTG9jIiwiZmluYWxseUxvYyIsImFmdGVyTG9jIiwidHJ5RW50cmllcyIsInB1c2giLCJyZXNldFRyeUVudHJ5IiwiY29tcGxldGlvbiIsInJlc2V0IiwiaXRlcmFibGUiLCJpdGVyYXRvck1ldGhvZCIsImlzTmFOIiwibGVuZ3RoIiwiaSIsImRpc3BsYXlOYW1lIiwiaXNHZW5lcmF0b3JGdW5jdGlvbiIsImdlbkZ1biIsImN0b3IiLCJjb25zdHJ1Y3RvciIsIm5hbWUiLCJtYXJrIiwic2V0UHJvdG90eXBlT2YiLCJfX3Byb3RvX18iLCJhd3JhcCIsImFzeW5jIiwiUHJvbWlzZSIsIml0ZXIiLCJrZXlzIiwidmFsIiwib2JqZWN0IiwicmV2ZXJzZSIsInBvcCIsInNraXBUZW1wUmVzZXQiLCJwcmV2IiwiY2hhckF0Iiwic2xpY2UiLCJzdG9wIiwicm9vdFJlY29yZCIsInJ2YWwiLCJleGNlcHRpb24iLCJoYW5kbGUiLCJsb2MiLCJjYXVnaHQiLCJoYXNDYXRjaCIsImhhc0ZpbmFsbHkiLCJmaW5hbGx5RW50cnkiLCJjb21wbGV0ZSIsImZpbmlzaCIsIl9jYXRjaCIsInRocm93biIsImRlbGVnYXRlWWllbGQiLCJhc3luY0dlbmVyYXRvclN0ZXAiLCJnZW4iLCJfbmV4dCIsIl90aHJvdyIsIl9hc3luY1RvR2VuZXJhdG9yIiwiYXJncyIsImFyZ3VtZW50cyIsImFwcGx5IiwiX3NsaWNlZFRvQXJyYXkiLCJhcnIiLCJfYXJyYXlXaXRoSG9sZXMiLCJfaXRlcmFibGVUb0FycmF5TGltaXQiLCJfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkiLCJfbm9uSXRlcmFibGVSZXN0IiwibyIsIm1pbkxlbiIsIl9hcnJheUxpa2VUb0FycmF5IiwibiIsInRvU3RyaW5nIiwiQXJyYXkiLCJmcm9tIiwidGVzdCIsImxlbiIsImFycjIiLCJfaSIsIl9zIiwiX2UiLCJfeCIsIl9yIiwiX2FyciIsIl9uIiwiX2QiLCJpc0FycmF5IiwiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZU9wZW5TdGF0ZSIsIkFwaUVycm9yIiwiYXBpUHJlcGFyZWRGZXRjaCIsIkFkbWluQW5zd2VyQ29udHJvbCIsIl9yZWYiLCJvd25lckNsYXNzIiwib3duZXJJZCIsIl91c2VPcGVuU3RhdGUiLCJfdXNlT3BlblN0YXRlMiIsImZvcm1Jc09wZW4iLCJvcGVuRm9ybSIsImNsb3NlRm9ybSIsIl91c2VTdGF0ZSIsIl91c2VTdGF0ZTIiLCJpc0xvYWRpbmciLCJzZXRMb2FkaW5nIiwiX3VzZVN0YXRlMyIsIl91c2VTdGF0ZTQiLCJlcnJvcnMiLCJzZXRFcnJvcnMiLCJfdXNlU3RhdGU1IiwiX3VzZVN0YXRlNiIsInNldFZhbHVlIiwiaGFuZGxlQ2hhbmdlIiwiZSIsInByZXZlbnREZWZhdWx0IiwidGFyZ2V0IiwiaGFuZGxlU3VibWl0IiwiX3JlZjIiLCJfY2FsbGVlIiwiX2NhbGxlZSQiLCJfY29udGV4dCIsImNvbnRlbnQiLCJsb2NhdGlvbiIsInJlbG9hZCIsInQwIiwiX3gyIiwiY3JlYXRlRWxlbWVudCIsIkZyYWdtZW50Iiwib25TdWJtaXQiLCJjbGFzc05hbWUiLCJodG1sRm9yIiwiaWQiLCJvbkNoYW5nZSIsImF1dG9Gb2N1cyIsIm9uQ2xpY2siLCJkaXNhYmxlZCIsIlBpY3R1cmVVcGxvYWRGaWVsZCIsIkFkbWluUGljdHVyZVVwbG9hZCIsImxhYmVsIiwiZGVmYXVsdEJhc2U2NGltZyIsInJlc2l6ZVdpZHRoIiwicmVzaXplSGVpZ2h0IiwiTW9kYWwiLCJJcUZvcm0iLCJFZGl0QnV0dG9uIiwiQ2xvc2VCdXR0b24iLCJJcUNhcmQiLCJpbmdyZWRpZW50UXVhbnRpdHkiLCJyZW1vdmUiLCJ1cGRhdGUiLCJoYW5kbGVSZW1vdmUiLCJoYW5kbGVVcGRhdGUiLCJuZXdJbmdyZWRpZW50UXVhbnRpdHkiLCJzcmMiLCJpbmdyZWRpZW50IiwicGljdHVyZSIsInBhdGgiLCJhbHQiLCJxdWFudGl0eSIsImVuIiwiZnIiLCJlcyIsIml0IiwiaXNPcGVuIiwiY2xvc2UiLCJhZGRpdGlvbmFsQ2xhc3MiLCJhbmltYXRlZCIsIm9uU3VibWl0U3VjY2VzcyIsIlN1Z2dlc3RMaXN0IiwidXNlRmV0Y2hRU2VhcmNoIiwiaTE4biIsIkFkbWluSXRlbVN1Z2dlc3QiLCJJbmdyZWRpZW50U3VnZ2VzdGVkRmllbGQiLCJvblNlbGVjdCIsImZvcm1FcnJvciIsInEiLCJzZXRRIiwiX3VzZUZldGNoUVNlYXJjaCIsImxhbmd1YWdlIiwiX3VzZUZldGNoUVNlYXJjaDIiLCJpbmdyZWRpZW50cyIsInJlc2V0SW5ncmVkaWVudHMiLCJwbGFjZWhvbGRlciIsInN1Z2dlc3RzIiwib25DbG9zZSIsInJlbmRlciIsInNlbGVjdGVkIiwiSW5ncmVkaWVudFN1Z2dlc3RJdGVtIiwidG9VcHBlckNhc2UiLCJzcGxpdCIsImpvaW4iLCJoYW5kbGVDbGljayIsImhyZWYiLCJyb2xlIiwic3R5bGUiLCJiYWNrZ3JvdW5kSW1hZ2UiLCJjb25jYXQiLCJkYW5nZXJvdXNseVNldElubmVySFRNTCIsIl9faHRtbCIsInl1cCIsInVzZUZvcm1XaXRoVmFsaWRhdGlvbiIsImNyZWF0ZVRva2VuIiwiQWRtaW5UZXh0RmllbGQiLCJpbmdyZWRpZW50UXVhbnRpdHlTY2hlbWEiLCJpbmdyZWRpZW50SWQiLCJudW1iZXIiLCJ0eXBlRXJyb3IiLCJyZXF1aXJlZCIsImVuUXVhbnRpdHkiLCJzdHJpbmciLCJtYXgiLCJmclF1YW50aXR5IiwiZXNRdWFudGl0eSIsIml0UXVhbnRpdHkiLCJwcmVwYXJlRGVmYXVsdEluZ3JlZGllbnRRdWFudGl0eSIsInBpY3R1cmVQYXRoIiwiaW5ncmVkaWVudE5hbWUiLCJfZXJyb3JzJGluZ3JlZGllbnRJZCIsIl9lcnJvcnMkZW5RdWFudGl0eSIsIl9lcnJvcnMkZnJRdWFudGl0eSIsIl9lcnJvcnMkZXNRdWFudGl0eSIsIl9lcnJvcnMkaXRRdWFudGl0eSIsIl91c2VGb3JtV2l0aFZhbGlkYXRpbyIsImNvbnRyb2wiLCJzZXRFcnJvciIsImdldFZhbHVlcyIsIndhdGNoIiwiaXNTdWJtaXR0aW5nIiwiZm9ybURhdGEiLCJoYW5kbGVTZWxlY3RJbmdyZWRpZW50IiwiY2xvc2VJbmdyZWRpZW50Rm9ybSIsImluZ3JlZGllbnRGb3JtSXNPcGVuIiwib3BlbkluZ3JlZGllbnRGb3JtIiwiaGFuZGxlRWRpdEluZ3JlZGllbnQiLCJtZXNzYWdlIiwibWF4TGVuZ3RoIiwidXNlRWZmZWN0IiwiUGx1c0J1dHRvbiIsIkluZ3JlZGllbnRzUXVhbnRpdGllc0lucHV0IiwiaW5ncmVkaWVudHNRdWFudGl0aWVzIiwic2V0SW5ncmVkaWVudHNRdWFudGl0aWVzIiwiSlNPTiIsInBhcnNlIiwiaW5ncmVkaWVudHNRdWFudGl0aWVzU3RyaW5nIiwic2V0SW5ncmVkaWVudHNRdWFudGl0aWVzU3RyaW5nIiwic3RyaW5naWZ5IiwiYWRkSW5ncmVkaWVudFF1YW50aXR5IiwiX3RvQ29uc3VtYWJsZUFycmF5IiwicmVtb3ZlSW5ncmVkaWVudFF1YW50aXR5IiwiZmlsdGVyIiwidXBkYXRlSW5ncmVkaWVudFF1YW50aXR5IiwibWFwIiwiQWRtaW5TaG93Q2FyZFJvdyIsInByaWNlRm9ybWF0ZXIiLCJQYWNrYWdpbmdDaG9pY2VzRm9ybSIsIkFkbWluUGFja2FnaW5nQ2FyZCIsInBhY2thZ2luZyIsInBhY2thZ2luZ0Nob2ljZXMiLCJwcm9kdWN0SWQiLCJzZWxlY3RBc0Jhc2UiLCJwdWJsaWNSZWYiLCJiYXNlIiwidGl0bGUiLCJwcml2YXRlUmVmIiwiZWFuQ29kZSIsImVuTGFiZWwiLCJsYW5nIiwiZnJMYWJlbCIsImVzTGFiZWwiLCJpdExhYmVsIiwiY29uc3VtZXJQcmljZUhUIiwiYnVzaW5lc3NQcmljZUhUIiwid2VpZ2h0IiwiZXhjaXNlVGF4IiwiZnJTb2NpYWxUYXgiLCJzdG9jayIsIm93bktleXMiLCJlbnVtZXJhYmxlT25seSIsImdldE93blByb3BlcnR5U3ltYm9scyIsInN5bWJvbHMiLCJzeW0iLCJnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IiLCJfb2JqZWN0U3ByZWFkIiwic291cmNlIiwiX2RlZmluZVByb3BlcnR5IiwiZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycyIsImRlZmluZVByb3BlcnRpZXMiLCJfdG9Qcm9wZXJ0eUtleSIsIl90b1ByaW1pdGl2ZSIsIlN0cmluZyIsImlucHV0IiwiaGludCIsInByaW0iLCJ0b1ByaW1pdGl2ZSIsInJlcyIsIk51bWJlciIsImFwaUZldGNoIiwiUHJpY2VDYWxjdWxhdG9yIiwicGFja2FnaW5nU2NoZW1hIiwicG9zaXRpdmUiLCJtaW4iLCJkZWZhdWx0UGFja2FnaW5nIiwic3VwcGx5UHJpY2VIVCIsInByZXBhcmVEZWZhdWx0UGFja2FnaW5nIiwiX2Vycm9ycyRwdWJsaWNSZWYiLCJfZXJyb3JzJHByaXZhdGVSZWYiLCJfZXJyb3JzJGVhbkNvZGUiLCJfZXJyb3JzJGVuTGFiZWwiLCJfZXJyb3JzJGZyTGFiZWwiLCJfZXJyb3JzJGVzTGFiZWwiLCJfZXJyb3JzJGl0TGFiZWwiLCJfZXJyb3JzJHN1cHBseVByaWNlSFQiLCJfZXJyb3JzJGNvbnN1bWVyUHJpY2UiLCJfZXJyb3JzJGJ1c2luZXNzUHJpY2UiLCJfZXJyb3JzJGV4Y2lzZVRheCIsIl9lcnJvcnMkZnJTb2NpYWxUYXgiLCJfZXJyb3JzJHdlaWdodCIsIl9lcnJvcnMkc3RvY2siLCJ2YXRMZXZlbCIsIl9yZWYkcGFja2FnaW5nIiwiZmluZCIsInAiLCJNYXRoIiwicm91bmQiLCJjb25zdW1lclByaWNlRXJyb3IiLCJidXNpbmVzc1ByaWNlRXJyb3IiLCJjYWxjUHJpY2VIVCIsImZyVmF0UmF0ZSIsInNldEZyVmF0UmF0ZSIsInZhdFJhdGUiLCJjb25zdW1lclByaWNlVFRDRlIiLCJzZXRDb25zdW1lclByaWNlVFRDRlIiLCJidXNpbmVzc1ByaWNlVFRDRlIiLCJzZXRCdXNpbmVzc1ByaWNlVFRDRlIiLCJfdXNlU3RhdGU3IiwiX3VzZVN0YXRlOCIsIm1hcmdpbiIsInNldE1hcmdpbiIsInByaWNlSFQiLCJtYXJnaW5BbW91bnQiLCJtYXJnaW5SYXRlIiwiY29uc3VtZXIiLCJhbW91bnQiLCJyYXRlIiwiYnVzaW5lc3MiLCJQYWNrYWdpbmdDaG9pY2VzSW5wdXQiLCJzZXRQYWNrYWdpbmdDaG9pY2VzU3RyaW5nIiwic2V0UGFja2FnaW5nQ2hvaWNlcyIsInBhY2thZ2luZ0Nob2ljZXNTdHJpbmciLCJyZW1vdmVQYWNrYWdpbmciLCJhZGRQYWNrYWdpbmciLCJuZXdQYWNrYWdpbmciLCJ1cGRhdGVQYWNrYWdpbmciLCJoYW5kbGVTZWxlY3RBc0Jhc2UiLCJwYyIsIk9wdGlvbiIsIlNlbGVjdCIsIlZhdExldmVscyIsIlByb2R1Y3RGb3JtUmVhY3RCbG9jayIsInBhY2thZ2luZ0Nob2ljZXNOYW1lIiwidmF0TGV2ZWxOYW1lIiwiY3VycmVudFZhdExldmVsIiwic2V0Q3VycmVudFZhdExldmVsIiwiZW50cmllcyIsIkFETUlOX0NIT0lDRVMiLCJfcmVmMyIsIm1hcmdpblRvcCIsIlNpdGVDb25maWciLCJ1c2VUcmFuc2xhdGlvbiIsIlB1cmNoYXNlU2hpcHBpbmdTdGF0dXNVcGRhdGVyIiwic2hpcHBpbmdJbmZvSWQiLCJpbml0aWFsU3RhdHVzIiwiX3VzZVRyYW5zbGF0aW9uIiwidCIsInN0YXR1cyIsInNldFN0YXR1cyIsIl9zdGF0dXMiLCJjb25maXJtIiwiU0hJUFBJTkdfU1RBVFVTX1BFTkRJTkciLCJTSElQUElOR19TVEFUVVNfU0VOVCIsIlNISVBQSU5HX1NUQVRVU19ERUxJVkVSRUQiLCJTSElQUElOR19TVEFUVVNfQ0FOQ0VMRUQiLCJTSElQUElOR19TVEFUVVNfUkVUVVJOX1NFTlQiLCJTSElQUElOR19TVEFUVVNfUkVUVVJOX0RFTElWRVJFRCIsInNlcnZlckVycm9yIiwiUmV2aWV3TW9kZXJhdG9yIiwic2V0SW5mbyIsIl9pbmZvIiwiTU9ERVJBVElPTl9TVEFUVVNfUEVORElORyIsIk1PREVSQVRJT05fU1RBVFVTX1BFTkRJTkdfTEFCRUwiLCJNT0RFUkFUSU9OX1NUQVRVU19BQ0NFUFRFRCIsIk1PREVSQVRJT05fU1RBVFVTX0FDQ0VQVEVEX0xBQkVMIiwiTU9ERVJBVElPTl9TVEFUVVNfUkVGVVNFRCIsIk1PREVSQVRJT05fU1RBVFVTX1JFRlVTRURfTEFCRUwiLCJpdGVtIiwicmVmIiwiU2VsZWN0ZWRJdGVtc0xpc3QiLCJpdGVtcyIsIm9uUmVtb3ZlIiwibG9hZGluZyIsIlNlbGVjdGVkSXRlbSIsIlN0YW5kYXJkSXRlbVNlbGVjdG9yIiwiU2VsZWN0TGlua2VkSXRlbXMiLCJpbmRleEVuZHBvaW50Iiwic2VhcmNoRW5kcG9pbnQiLCJzZWxlY3RlZEl0ZW1zIiwic2V0U2VsZWN0ZWRJdGVtcyIsImxpc3RMb2FkaW5nIiwic2V0TGlzdExvYWRpbmciLCJkYXRhIiwiaGFuZGxlU2VsZWN0IiwiaW5jbHVkZWQiLCJfaXRlcmF0b3IiLCJfY3JlYXRlRm9yT2ZJdGVyYXRvckhlbHBlciIsIl9zdGVwIiwicyIsImxpbmtlZEl0ZW0iLCJmIiwiaGlkZGVuIiwibXVsdGlwbGUiLCJ1c2VGZXRjaCIsIlNlbGVjdFVuaXF1ZUl0ZW0iLCJfcmVmJGl0ZW1JZCIsIml0ZW1JZCIsInNlbGVjdGVkSXRlbSIsInNldFNlbGVjdGVkSXRlbSIsIl91c2VGZXRjaCIsIl91c2VGZXRjaDIiLCJkYkl0ZW0iLCJfY3JlYXRlQ2xhc3MiLCJfY2xhc3NDYWxsQ2hlY2siLCJTVEFOREFSRCIsIlBBUktJTkciLCJSRURVQ0VfMSIsIlJFRFVDRV8yIiwiU1VQRVJfUkVEVUNFIiwiWkVSTyIsIl9kZWZpbmVQcm9wZXJ0eTIiLCJyZXNldEl0ZW1zIiwiRWRpdEljb24iLCJCdXR0b24iLCJwcm9wcyIsIl9vYmplY3RXaXRob3V0UHJvcGVydGllcyIsIl9leGNsdWRlZCIsIl9leHRlbmRzIiwibnMiLCJQbHVzSWNvbiIsInVzZUNhbGxiYWNrIiwiVHJhc2hCdXR0b24iLCJyZXNpemVJbWFnZSIsIkxvYWRlciIsInVzZURyb3B6b25lIiwiY2hpbGRyZW4iLCJfcmVmJHJlc2l6ZVdpZHRoIiwiX3JlZiRyZXNpemVIZWlnaHQiLCJfcmVmJGRlZmF1bHRCYXNlNjRpbWciLCJfcmVmJG9uQ2hhbmdlIiwic2V0U2VsZWN0ZWRJbWciLCJzZXRIaWRkZW5JbWciLCJzZWxlY3RlZEltZyIsImhpZGRlbkltZyIsImhhbmRsZURlbGV0ZSIsIm9uRHJvcCIsImFjY2VwdGVkRmlsZXMiLCJpbWciLCJpbmNsdWRlcyIsImFjY2VwdGVkX2Zvcm1hdHMiLCJvdXRwdXRGb3JtYXQiLCJ0YXJnZXRXaWR0aCIsInRhcmdldEhlaWdodCIsImNyb3AiLCJiNjRpbWciLCJfdXNlRHJvcHpvbmUiLCJnZXRSb290UHJvcHMiLCJnZXRJbnB1dFByb3BzIiwibW91c2VJc092ZXIiLCJzZXRNb3VzZU92ZXIiLCJzZXRNb3VzZUxlYXZlIiwib25Nb3VzZU92ZXIiLCJvbk1vdXNlTGVhdmUiLCJpbmRleCIsInVzZUNvbnRyb2xsZXIiLCJFeHBhbmRNb3JlSWNvbiIsIlNlbGVjdENvbnRyb2xsZWQiLCJfcmVmMyRvbkNoYW5nZSIsIl9yZWYzJGxhYmVsIiwiX2V4Y2x1ZGVkMiIsIl91c2VDb250cm9sbGVyIiwiZmllbGQiLCJvbkJsdXIiLCJvbkZvY3VzIiwiZW5hYmxlQmFja2dyb3VuZCIsInZpZXdCb3giLCJ4bWxucyIsImZpbGwiLCJkIiwiZmlsbFJ1bGUiLCJUcmFzaEljb24iLCJkb2N1bWVudCIsImJvZHkiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImNsb3NlT25UYWJEb3duIiwic2V0U2VsZWN0ZWQiLCJvbktleURvd24iLCJzdG9wUHJvcGFnYXRpb24iLCJzdWdnZXN0IiwiY3JlYXRlUm9vdCIsImNoYW5nZUxhbmd1YWdlIiwiZ2V0RWxlbWVudEJ5SWQiLCJzZXNzaW9uU3RvcmFnZSIsInJlbW92ZUl0ZW0iLCJfaW5wdXQkcXVlcnlTZWxlY3RvciQiLCJfaW5wdXQkcXVlcnlTZWxlY3RvciIsIl9pbnB1dCRkYXRhc2V0IiwiX2lucHV0JGRhdGFzZXQyIiwicXVlcnlTZWxlY3RvciIsImlubmVySFRNTCIsInJvb3QiLCJkYXRhc2V0IiwiaW5kZXhlbmRwb2ludCIsInNlYXJjaGVuZHBvaW50IiwicXVlcnlTZWxlY3RvckFsbCIsIl9pbnB1dCRxdWVyeVNlbGVjdG9yJDIiLCJfaW5wdXQkcXVlcnlTZWxlY3RvcjIiLCJpdGVtaWQiLCJibG9jayIsInByb2R1Y3RpZCIsInBhY2thZ2luZ2Nob2ljZXMiLCJ2YXRsZXZlbCIsInBhY2thZ2luZ2Nob2ljZXNuYW1lIiwidmF0bGV2ZWxuYW1lIiwicHVyY2hhc2VTdGF0dXNVcGRhdGVyIiwicHVyY2hhc2VTdGF0dXNVcGRhdGVyUm9vdCIsInNoaXBwaW5naW5mb2lkIiwiY3VycmVudHN0YXR1cyIsInJldmlld01vZGVyYXRvciIsInJldmlld01vZGVyYXRvclJvb3QiLCJlbHQiLCJfZWx0JGRhdGFzZXQkcmVzaXpld2kiLCJfZWx0JGRhdGFzZXQkcmVzaXplaGUiLCJfZWx0JGRhdGFzZXQkdmFsdWUiLCJwYXJzZUludCIsInJlc2l6ZXdpZHRoIiwicmVzaXplaGVpZ2h0Iiwib3duZXJjbGFzcyIsIm93bmVyaWQiLCJwcmljZSIsImZvcm1hdGVyIiwiSW50bCIsIk51bWJlckZvcm1hdCIsImdldExvY2FsZU9wdGlvbiIsImN1cnJlbmN5IiwiZm9ybWF0IiwicmV2aWV3Tm90ZUZvcm1hdGVyIiwicmV2aWV3Tm90ZSIsImRpc3RhbmNlRm9ybWF0ZXIiLCJkaXN0YW5jZSIsImRpc3RhbmNlSW5LbSIsInByaWNlVFRDIiwiY291bnQiLCJ0b2tlbiIsImZsb29yIiwicmFuZG9tIiwiX3JlZiRsYW5nIiwiVGV4dEZpZWxkIiwiYXNzaWduIiwiX29iamVjdERlc3RydWN0dXJpbmdFbXB0eSJdLCJzb3VyY2VSb290IjoiIn0=
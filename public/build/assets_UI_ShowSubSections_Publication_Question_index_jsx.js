"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["assets_UI_ShowSubSections_Publication_Question_index_jsx"],{

/***/ "./assets/UI/ShowSubSections/Publication/FormTopCard/FormTopRecipeCard.jsx":
/*!*********************************************************************************!*\
  !*** ./assets/UI/ShowSubSections/Publication/FormTopCard/FormTopRecipeCard.jsx ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FormTopRecipeCard": () => (/* binding */ FormTopRecipeCard)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var FormTopRecipeCard = function FormTopRecipeCard(_ref) {
  var recipe = _ref.recipe;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "review-form-product-card"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    className: "review-form-product-img",
    src: recipe.picture.path,
    alt: recipe.picture.alt
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "review-form-product-text"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "review-form-product-designation"
  }, recipe.title)));
};

/***/ }),

/***/ "./assets/UI/ShowSubSections/Publication/Question/QuestionCreate/QuestionForm/index.jsx":
/*!**********************************************************************************************!*\
  !*** ./assets/UI/ShowSubSections/Publication/Question/QuestionCreate/QuestionForm/index.jsx ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "QuestionForm": () => (/* binding */ QuestionForm)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_object_entries_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.object.entries.js */ "./node_modules/core-js/modules/es.object.entries.js");
/* harmony import */ var core_js_modules_es_object_entries_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_entries_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.is-array.js */ "./node_modules/core-js/modules/es.array.is-array.js");
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.array.push.js */ "./node_modules/core-js/modules/es.array.push.js");
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_13__);
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
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of.js */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_27___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_27__);
/* harmony import */ var core_js_modules_es_array_reverse_js__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! core-js/modules/es.array.reverse.js */ "./node_modules/core-js/modules/es.array.reverse.js");
/* harmony import */ var core_js_modules_es_array_reverse_js__WEBPACK_IMPORTED_MODULE_28___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_reverse_js__WEBPACK_IMPORTED_MODULE_28__);
/* harmony import */ var core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! core-js/modules/es.object.assign.js */ "./node_modules/core-js/modules/es.object.assign.js");
/* harmony import */ var core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_29___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_29__);
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! core-js/modules/es.function.bind.js */ "./node_modules/core-js/modules/es.function.bind.js");
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_30___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_30__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_31___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_31__);
/* harmony import */ var _CustomHook_form_useFormWithValidation__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ../../../../../../CustomHook/form/useFormWithValidation */ "./assets/CustomHook/form/useFormWithValidation.jsx");
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! yup */ "./node_modules/yup/index.esm.js");
/* harmony import */ var _Form_FormButton__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ../../../../../Form/FormButton */ "./assets/UI/Form/FormButton.jsx");
/* harmony import */ var _Icon_CheckIcon__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ../../../../../Icon/CheckIcon */ "./assets/UI/Icon/CheckIcon.jsx");
/* harmony import */ var _Form_TextField__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ../../../../../Form/TextField */ "./assets/UI/Form/TextField.jsx");
/* harmony import */ var _functions_api__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ../../../../../../functions/api */ "./assets/functions/api.js");
/* harmony import */ var _Context_ShowSubSectionsContext__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ../../../../../../Context/ShowSubSectionsContext */ "./assets/Context/ShowSubSectionsContext.jsx");
/* harmony import */ var i18next__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! i18next */ "./node_modules/i18next/dist/esm/i18next.js");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }































function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }










var schema = yup__WEBPACK_IMPORTED_MODULE_33__.object({
  title: yup__WEBPACK_IMPORTED_MODULE_33__.string().max(100, (0,i18next__WEBPACK_IMPORTED_MODULE_39__.t)('assert.length.max', {
    ns: 'constraints',
    max: 100
  })).required(),
  content: yup__WEBPACK_IMPORTED_MODULE_33__.string().max(500, (0,i18next__WEBPACK_IMPORTED_MODULE_39__.t)('assert.length.max', {
    ns: 'constraints',
    max: 500
  })).required(),
  agreeTerms: yup__WEBPACK_IMPORTED_MODULE_33__.bool().isTrue((0,i18next__WEBPACK_IMPORTED_MODULE_39__.t)('assert.checkbox.true', {
    ns: 'constraints'
  })).required()
}).required();
var QuestionForm = function QuestionForm(_ref) {
  var _errors$title, _errors$question;
  var createQuestion = _ref.createQuestion,
    close = _ref.close;
  var _useTranslation = (0,react_i18next__WEBPACK_IMPORTED_MODULE_40__.useTranslation)('messages'),
    t = _useTranslation.t;
  var _useFormWithValidatio = (0,_CustomHook_form_useFormWithValidation__WEBPACK_IMPORTED_MODULE_32__.useFormWithValidation)(schema, {
      title: '',
      content: '',
      agreeTerms: false
    }),
    register = _useFormWithValidatio.register,
    handleSubmit = _useFormWithValidatio.handleSubmit,
    errors = _useFormWithValidatio.errors,
    isSubmitting = _useFormWithValidatio.isSubmitting,
    control = _useFormWithValidatio.control,
    setError = _useFormWithValidatio.setError;
  var setSubmitInfo = (0,react__WEBPACK_IMPORTED_MODULE_31__.useContext)(_Context_ShowSubSectionsContext__WEBPACK_IMPORTED_MODULE_38__.SetSubmitInfoContext);
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_31__.useState)(false),
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
            _context.prev = 3;
            _context.next = 6;
            return createQuestion(formData);
          case 6:
            setSubmitInfo({
              type: 'success',
              message: t('success.submit.question')
            });
            close();
            _context.next = 13;
            break;
          case 10:
            _context.prev = 10;
            _context.t0 = _context["catch"](3);
            if (_context.t0 instanceof _functions_api__WEBPACK_IMPORTED_MODULE_37__.ApiError) {
              Object.entries(_context.t0.errors).forEach(function (_ref3) {
                var _ref4 = _slicedToArray(_ref3, 2),
                  field = _ref4[0],
                  message = _ref4[1];
                setError(field, {
                  type: 'custom',
                  message: message
                });
              });
            } else {
              setSubmitInfo({
                type: 'danger',
                message: t('error.temporary_failure')
              });
            }
          case 13:
            setLoading(false);
          case 14:
          case "end":
            return _context.stop();
        }
      }, _callee, null, [[3, 10]]);
    }));
    return function onSubmit(_x2) {
      return _ref2.apply(this, arguments);
    };
  }();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_31___default().createElement("form", {
    onSubmit: handleSubmit(onSubmit),
    className: "review-form box-form"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_31___default().createElement(_Form_TextField__WEBPACK_IMPORTED_MODULE_36__.TextField, {
    control: control,
    name: "title",
    error: (_errors$title = errors.title) === null || _errors$title === void 0 ? void 0 : _errors$title.message,
    maxLength: 100
  }, t('question_title'), " *"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_31___default().createElement(_Form_TextField__WEBPACK_IMPORTED_MODULE_36__.TextField, {
    type: "textarea",
    control: control,
    name: "content",
    error: (_errors$question = errors.question) === null || _errors$question === void 0 ? void 0 : _errors$question.message,
    maxLength: 500
  }, t('question'), " *"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_31___default().createElement("div", {
    className: 'checkbox-group' + (errors.agreeTerms ? ' is-invalid' : '')
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_31___default().createElement("input", _extends({}, register('agreeTerms'), {
    className: "form-checkbox",
    id: "agreeTerms",
    type: "checkbox"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_31___default().createElement("label", {
    htmlFor: "agreeTerms",
    className: "form-label"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_31___default().createElement("div", {
    className: "custom-checkbox",
    role: "checkbox",
    "aria-labelledby": "checkbox-label"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_31___default().createElement(_Icon_CheckIcon__WEBPACK_IMPORTED_MODULE_35__.CheckIcon, null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_31___default().createElement("span", {
    id: "checkbox-label"
  }, t('agree_terms_of_use'), " *")), errors.agreeTerms && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_31___default().createElement("div", {
    className: "form-error"
  }, errors.agreeTerms.message)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_31___default().createElement("div", {
    className: "submit-group double"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_31___default().createElement(_Form_FormButton__WEBPACK_IMPORTED_MODULE_34__.FormButton, {
    additionalClass: "bordeaux",
    loading: isLoading || isSubmitting
  }, t('submit.publish')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_31___default().createElement(_Form_FormButton__WEBPACK_IMPORTED_MODULE_34__.FormButton, {
    additionalClass: "cancel",
    disabled: isLoading || isSubmitting,
    onClick: close
  }, t('cancel'))));
};

/***/ }),

/***/ "./assets/UI/ShowSubSections/Publication/Question/QuestionCreate/index.jsx":
/*!*********************************************************************************!*\
  !*** ./assets/UI/ShowSubSections/Publication/Question/QuestionCreate/index.jsx ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "QuestionCreate": () => (/* binding */ QuestionCreate)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _functions_security__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../functions/security */ "./assets/functions/security.js");
/* harmony import */ var _QuestionForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./QuestionForm */ "./assets/UI/ShowSubSections/Publication/Question/QuestionCreate/QuestionForm/index.jsx");
/* harmony import */ var _CustomHook_useGetUser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../CustomHook/useGetUser */ "./assets/CustomHook/useGetUser.jsx");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");





var QuestionCreate = function QuestionCreate(_ref) {
  var ownerTopCard = _ref.ownerTopCard,
    close = _ref.close,
    createQuestion = _ref.createQuestion;
  var _useTranslation = (0,react_i18next__WEBPACK_IMPORTED_MODULE_4__.useTranslation)('messages'),
    t = _useTranslation.t;

  //on vérifie qu'un user est connecté
  var _useGetUser = (0,_CustomHook_useGetUser__WEBPACK_IMPORTED_MODULE_3__.useGetUser)(),
    user = _useGetUser.user,
    updateUser = _useGetUser.updateUser;
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (user === false) {
      (0,_functions_security__WEBPACK_IMPORTED_MODULE_1__.redirectToLogin)(location.href + '#question',
      //targetPath
      t('warning.need_login_to_post_question'),
      //message
      close() //onError on ferme
      );
    }
  }, [user]);
  return user && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "review-form-wrapper"
  }, ownerTopCard, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", {
    className: "review-form-title"
  }, t('my_question')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_QuestionForm__WEBPACK_IMPORTED_MODULE_2__.QuestionForm, {
    createQuestion: createQuestion,
    close: close
  }));
};

/***/ }),

/***/ "./assets/UI/ShowSubSections/Publication/Question/ShowUserQuestion/ShowUserQuestionCard.jsx":
/*!**************************************************************************************************!*\
  !*** ./assets/UI/ShowSubSections/Publication/Question/ShowUserQuestion/ShowUserQuestionCard.jsx ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ShowUserQuestionCard": () => (/* binding */ ShowUserQuestionCard)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.map.js */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Answer_AnswerCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Answer/AnswerCard */ "./assets/UI/ShowSubSections/Publication/Answer/AnswerCard.jsx");
/* harmony import */ var _Answer_ImportantAnswer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Answer/ImportantAnswer */ "./assets/UI/ShowSubSections/Publication/Answer/ImportantAnswer.jsx");
/* harmony import */ var _FormTopCard_FormTopRecipeCard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../FormTopCard/FormTopRecipeCard */ "./assets/UI/ShowSubSections/Publication/FormTopCard/FormTopRecipeCard.jsx");
/* harmony import */ var _FormTopCard_FormTopProductCard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../FormTopCard/FormTopProductCard */ "./assets/UI/ShowSubSections/Publication/FormTopCard/FormTopProductCard.jsx");






var ShowUserQuestionCard = function ShowUserQuestionCard(_ref) {
  var question = _ref.question;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
    className: "modal-summary-card"
  }, question.recipe && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_FormTopCard_FormTopRecipeCard__WEBPACK_IMPORTED_MODULE_4__.FormTopRecipeCard, {
    recipe: question.recipe
  }), question.product && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_FormTopCard_FormTopProductCard__WEBPACK_IMPORTED_MODULE_5__.FormTopProductCard, {
    product: question.product
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
    className: "review-card-header"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
    className: "review-card-infos"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("span", null, question.fullName), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("span", null, question.createdAt))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
    className: "review-card-body"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
    className: "review-card-body-title"
  }, question.title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
    className: "review-card-body-content"
  }, question.content)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
    className: "qa-card-bottom"
  }, question.firstAnswers.map(function (answer) {
    return answer.type === 'customer' ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_Answer_AnswerCard__WEBPACK_IMPORTED_MODULE_2__.AnswerCard, {
      key: answer.id,
      answer: answer,
      isSummary: true
    }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_Answer_ImportantAnswer__WEBPACK_IMPORTED_MODULE_3__.ImportantAnswer, {
      key: answer.id,
      answer: answer,
      removeIsOpen: false
    });
  }), question.restAnswers.map(function (answer) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_Answer_AnswerCard__WEBPACK_IMPORTED_MODULE_2__.AnswerCard, {
      key: answer.id,
      answer: answer,
      isSummary: true
    });
  })));
};

/***/ }),

/***/ "./assets/UI/ShowSubSections/Publication/Question/ShowUserQuestion/index.jsx":
/*!***********************************************************************************!*\
  !*** ./assets/UI/ShowSubSections/Publication/Question/ShowUserQuestion/index.jsx ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ShowUserQuestion": () => (/* binding */ ShowUserQuestion)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.includes.js */ "./node_modules/core-js/modules/es.array.includes.js");
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.string.includes.js */ "./node_modules/core-js/modules/es.string.includes.js");
/* harmony import */ var core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_1__);
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
/* harmony import */ var _CustomHook_fetch_useControlledFetch__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../../../../CustomHook/fetch/useControlledFetch */ "./assets/CustomHook/fetch/useControlledFetch.jsx");
/* harmony import */ var _Container_Modal__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../../../Container/Modal */ "./assets/UI/Container/Modal.jsx");
/* harmony import */ var _CustomHook_state_useOpenState__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../../../../CustomHook/state/useOpenState */ "./assets/CustomHook/state/useOpenState.jsx");
/* harmony import */ var _QuestionCard_QuestionSummary__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../QuestionCard/QuestionSummary */ "./assets/UI/ShowSubSections/Publication/Question/QuestionCard/QuestionSummary.jsx");
/* harmony import */ var _Icon_Loader__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../../../../Icon/Loader */ "./assets/UI/Icon/Loader.jsx");
/* harmony import */ var _ShowUserQuestionCard__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./ShowUserQuestionCard */ "./assets/UI/ShowSubSections/Publication/Question/ShowUserQuestion/ShowUserQuestionCard.jsx");
/* harmony import */ var _Form_FormButton__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../../../../Form/FormButton */ "./assets/UI/Form/FormButton.jsx");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");


















function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }









var ShowUserQuestion = function ShowUserQuestion() {
  var _useTranslation = (0,react_i18next__WEBPACK_IMPORTED_MODULE_26__.useTranslation)('messages'),
    t = _useTranslation.t,
    i18n = _useTranslation.i18n;
  var _useOpenState = (0,_CustomHook_state_useOpenState__WEBPACK_IMPORTED_MODULE_21__.useOpenState)(false),
    _useOpenState2 = _slicedToArray(_useOpenState, 3),
    isOpen = _useOpenState2[0],
    open = _useOpenState2[1],
    close = _useOpenState2[2];
  var _useControlledFetch = (0,_CustomHook_fetch_useControlledFetch__WEBPACK_IMPORTED_MODULE_19__.useControlledFetch)('/' + i18n.language + '/api/question/show'),
    _useControlledFetch2 = _slicedToArray(_useControlledFetch, 4),
    doFetch = _useControlledFetch2[0],
    question = _useControlledFetch2[1],
    isLoading = _useControlledFetch2[2],
    error = _useControlledFetch2[3];
  (0,react__WEBPACK_IMPORTED_MODULE_18__.useEffect)(function () {
    if (location.href.includes('#qu-show-')) {
      var id = location.href.split('#qu-show-')[1];
      if (id) {
        open();
        doFetch({
          id: id
        });
      }
    }
  }, []);
  (0,react__WEBPACK_IMPORTED_MODULE_18__.useEffect)(function () {
    if (error) {
      close();
    }
  }, [error]);
  console.log(isOpen);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement(_Container_Modal__WEBPACK_IMPORTED_MODULE_20__.Modal, {
    additionalClass: "review-form-modal center-form-modal",
    isOpen: isOpen
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement("div", {
    className: "review-modal-summary"
  }, !question ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement(_Icon_Loader__WEBPACK_IMPORTED_MODULE_23__.Loader, {
    additionalClass: "main-loader"
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement(_ShowUserQuestionCard__WEBPACK_IMPORTED_MODULE_24__.ShowUserQuestionCard, {
    question: question
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement(_Form_FormButton__WEBPACK_IMPORTED_MODULE_25__.FormButton, {
    onClick: close,
    additionalClass: "bordeaux"
  }, t('close'))));
};

/***/ }),

/***/ "./assets/UI/ShowSubSections/Publication/Question/index.jsx":
/*!******************************************************************!*\
  !*** ./assets/UI/ShowSubSections/Publication/Question/index.jsx ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Question": () => (/* binding */ Question)
/* harmony export */ });
/* harmony import */ var core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/web.timers.js */ "./node_modules/core-js/modules/web.timers.js");
/* harmony import */ var core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.includes.js */ "./node_modules/core-js/modules/es.array.includes.js");
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.string.includes.js */ "./node_modules/core-js/modules/es.string.includes.js");
/* harmony import */ var core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_2__);
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
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_14__);
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
/* harmony import */ var core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! core-js/modules/es.symbol.to-primitive.js */ "./node_modules/core-js/modules/es.symbol.to-primitive.js");
/* harmony import */ var core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! core-js/modules/es.date.to-primitive.js */ "./node_modules/core-js/modules/es.date.to-primitive.js");
/* harmony import */ var core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! core-js/modules/es.number.constructor.js */ "./node_modules/core-js/modules/es.number.constructor.js");
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! core-js/modules/es.object.keys.js */ "./node_modules/core-js/modules/es.object.keys.js");
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! core-js/modules/es.array.filter.js */ "./node_modules/core-js/modules/es.array.filter.js");
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_25__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptor.js */ "./node_modules/core-js/modules/es.object.get-own-property-descriptor.js");
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_26___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_26__);
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_27___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_27__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_28___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_28__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptors.js */ "./node_modules/core-js/modules/es.object.get-own-property-descriptors.js");
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_29___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_29__);
/* harmony import */ var core_js_modules_es_object_define_properties_js__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! core-js/modules/es.object.define-properties.js */ "./node_modules/core-js/modules/es.object.define-properties.js");
/* harmony import */ var core_js_modules_es_object_define_properties_js__WEBPACK_IMPORTED_MODULE_30___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_properties_js__WEBPACK_IMPORTED_MODULE_30__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_31___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_31__);
/* harmony import */ var _CustomHook_state_useOpenState__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ../../../../CustomHook/state/useOpenState */ "./assets/CustomHook/state/useOpenState.jsx");
/* harmony import */ var _Search_SearchResults__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ../../../Search/SearchResults */ "./assets/UI/Search/SearchResults.jsx");
/* harmony import */ var _Search_QFilter__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ../../../Search/QFilter */ "./assets/UI/Search/QFilter.jsx");
/* harmony import */ var _Form_FormButton__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ../../../Form/FormButton */ "./assets/UI/Form/FormButton.jsx");
/* harmony import */ var _Container_Modal__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ../../../Container/Modal */ "./assets/UI/Container/Modal.jsx");
/* harmony import */ var _Search_LangFilter__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ../../../Search/LangFilter */ "./assets/UI/Search/LangFilter.jsx");
/* harmony import */ var _QuestionCard__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./QuestionCard */ "./assets/UI/ShowSubSections/Publication/Question/QuestionCard/index.jsx");
/* harmony import */ var _QuestionCreate__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./QuestionCreate */ "./assets/UI/ShowSubSections/Publication/Question/QuestionCreate/index.jsx");
/* harmony import */ var _CustomHook_publication_usePublicationCRUD__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ../../../../CustomHook/publication/usePublicationCRUD */ "./assets/CustomHook/publication/usePublicationCRUD.jsx");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");
/* harmony import */ var _ShowUserQuestion__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./ShowUserQuestion */ "./assets/UI/ShowSubSections/Publication/Question/ShowUserQuestion/index.jsx");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }































function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }












var Question = function Question(_ref) {
  var ownerTopCard = _ref.ownerTopCard,
    fetchAllEntrypoint = _ref.fetchAllEntrypoint,
    createEntrypoint = _ref.createEntrypoint;
  var _useTranslation = (0,react_i18next__WEBPACK_IMPORTED_MODULE_41__.useTranslation)('messages'),
    t = _useTranslation.t,
    i18n = _useTranslation.i18n;
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_31__.useState)({
      page: 1,
      limit: 10,
      q: '',
      lang: ''
    }),
    _useState2 = _slicedToArray(_useState, 2),
    filters = _useState2[0],
    setFilters = _useState2[1];
  var setFilterValue = function setFilterValue(key, value) {
    setFilters(function (filters) {
      var _objectSpread2;
      return _objectSpread(_objectSpread({}, filters), {}, (_objectSpread2 = {}, _defineProperty(_objectSpread2, key, value), _defineProperty(_objectSpread2, "page", 1), _objectSpread2));
    });
  };

  //on renderChange
  var controlsRef = (0,react__WEBPACK_IMPORTED_MODULE_31__.useRef)(null);
  var scrollToControls = function scrollToControls() {
    setTimeout(function () {
      var y = controlsRef.current.getBoundingClientRect().y;
      window.scrollBy(0, y - window.innerHeight / 4);
    }, 0);
  };
  var _usePublicationCRUD = (0,_CustomHook_publication_usePublicationCRUD__WEBPACK_IMPORTED_MODULE_40__.usePublicationCRUD)(fetchAllEntrypoint, '/' + i18n.language + '/api/question/show', '/' + i18n.language + '/api/question/delete', createEntrypoint, '/' + i18n.language + '/api/answer/create/question', filters, setFilters, scrollToControls),
    result = _usePublicationCRUD.result,
    fetchOneFull = _usePublicationCRUD.fetchOneFull,
    createItem = _usePublicationCRUD.createItem,
    createAnswer = _usePublicationCRUD.createAnswer,
    deleteItem = _usePublicationCRUD.deleteItem,
    deleteAnswer = _usePublicationCRUD.deleteAnswer,
    isLoading = _usePublicationCRUD.isLoading,
    handlePageChange = _usePublicationCRUD.handlePageChange,
    hasControls = _usePublicationCRUD.hasControls;

  //QuestionAnswer FORM  
  var _useOpenState = (0,_CustomHook_state_useOpenState__WEBPACK_IMPORTED_MODULE_32__.useOpenState)(false),
    _useOpenState2 = _slicedToArray(_useOpenState, 3),
    formIsOpen = _useOpenState2[0],
    openForm = _useOpenState2[1],
    closeForm = _useOpenState2[2];
  (0,react__WEBPACK_IMPORTED_MODULE_31__.useEffect)(function () {
    if (location.href.includes('#question')) {
      openForm();
    }
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_31___default().createElement((react__WEBPACK_IMPORTED_MODULE_31___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_31___default().createElement(_ShowUserQuestion__WEBPACK_IMPORTED_MODULE_42__.ShowUserQuestion, null), hasControls && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_31___default().createElement("div", {
    ref: controlsRef,
    className: "questionAnswer-controls"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_31___default().createElement(_Search_QFilter__WEBPACK_IMPORTED_MODULE_34__.QFilter, {
    q: filters.q,
    setQ: function setQ(q) {
      return setFilterValue('q', q);
    }
  }, t('search_into_questions')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_31___default().createElement("div", {
    className: "review-sub-controls"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_31___default().createElement(_Search_LangFilter__WEBPACK_IMPORTED_MODULE_37__.LangFilter, {
    id: "qa-lang",
    lang: filters.lang,
    onChange: setFilterValue
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_31___default().createElement(_Search_SearchResults__WEBPACK_IMPORTED_MODULE_33__.SearchResults, {
    isLoading: isLoading,
    result: result,
    pageChange: handlePageChange
  }, result && result.items.map(function (question) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_31___default().createElement(_QuestionCard__WEBPACK_IMPORTED_MODULE_38__.QuestionCard, {
      key: question.id,
      question: question,
      fetchOneFull: fetchOneFull,
      deleteQuestion: deleteItem,
      createAnswer: createAnswer,
      deleteAnswer: deleteAnswer,
      ownerTopCard: ownerTopCard
    });
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_31___default().createElement(_Container_Modal__WEBPACK_IMPORTED_MODULE_36__.Modal, {
    additionalClass: "review-form-modal center-form-modal",
    isOpen: formIsOpen,
    close: closeForm
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_31___default().createElement(_QuestionCreate__WEBPACK_IMPORTED_MODULE_39__.QuestionCreate, {
    createQuestion: createItem,
    close: closeForm,
    ownerTopCard: ownerTopCard
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_31___default().createElement(_Form_FormButton__WEBPACK_IMPORTED_MODULE_35__.FormButton, {
    additionalClass: "bordeaux-black outline create-form-button",
    onClick: openForm
  }, t('submit.post_question')));
};

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXNzZXRzX1VJX1Nob3dTdWJTZWN0aW9uc19QdWJsaWNhdGlvbl9RdWVzdGlvbl9pbmRleF9qc3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQTBCO0FBRW5CLElBQU1DLGlCQUFpQixHQUFHLFNBQXBCQSxpQkFBaUJBLENBQUFDLElBQUEsRUFBaUI7RUFBQSxJQUFaQyxNQUFNLEdBQUFELElBQUEsQ0FBTkMsTUFBTTtFQUNyQyxvQkFDSUgsMERBQUE7SUFBS0ssU0FBUyxFQUFDO0VBQTBCLGdCQUNyQ0wsMERBQUE7SUFBS0ssU0FBUyxFQUFDLHlCQUF5QjtJQUFDQyxHQUFHLEVBQUVILE1BQU0sQ0FBQ0ksT0FBTyxDQUFDQyxJQUFLO0lBQUNDLEdBQUcsRUFBRU4sTUFBTSxDQUFDSSxPQUFPLENBQUNFO0VBQUksRUFBRyxlQUM5RlQsMERBQUE7SUFBS0ssU0FBUyxFQUFDO0VBQTBCLGdCQUNyQ0wsMERBQUE7SUFBS0ssU0FBUyxFQUFDO0VBQWlDLEdBQUVGLE1BQU0sQ0FBQ08sS0FBSyxDQUFPLENBQ25FLENBQ0o7QUFFZCxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsrQ0NWRCxxSkFBQUMsbUJBQUEsWUFBQUEsb0JBQUEsV0FBQUMsT0FBQSxTQUFBQSxPQUFBLE9BQUFDLEVBQUEsR0FBQUMsTUFBQSxDQUFBQyxTQUFBLEVBQUFDLE1BQUEsR0FBQUgsRUFBQSxDQUFBSSxjQUFBLEVBQUFDLGNBQUEsR0FBQUosTUFBQSxDQUFBSSxjQUFBLGNBQUFDLEdBQUEsRUFBQUMsR0FBQSxFQUFBQyxJQUFBLElBQUFGLEdBQUEsQ0FBQUMsR0FBQSxJQUFBQyxJQUFBLENBQUFDLEtBQUEsS0FBQUMsT0FBQSx3QkFBQUMsTUFBQSxHQUFBQSxNQUFBLE9BQUFDLGNBQUEsR0FBQUYsT0FBQSxDQUFBRyxRQUFBLGtCQUFBQyxtQkFBQSxHQUFBSixPQUFBLENBQUFLLGFBQUEsdUJBQUFDLGlCQUFBLEdBQUFOLE9BQUEsQ0FBQU8sV0FBQSw4QkFBQUMsT0FBQVosR0FBQSxFQUFBQyxHQUFBLEVBQUFFLEtBQUEsV0FBQVIsTUFBQSxDQUFBSSxjQUFBLENBQUFDLEdBQUEsRUFBQUMsR0FBQSxJQUFBRSxLQUFBLEVBQUFBLEtBQUEsRUFBQVUsVUFBQSxNQUFBQyxZQUFBLE1BQUFDLFFBQUEsU0FBQWYsR0FBQSxDQUFBQyxHQUFBLFdBQUFXLE1BQUEsbUJBQUFJLEdBQUEsSUFBQUosTUFBQSxZQUFBQSxPQUFBWixHQUFBLEVBQUFDLEdBQUEsRUFBQUUsS0FBQSxXQUFBSCxHQUFBLENBQUFDLEdBQUEsSUFBQUUsS0FBQSxnQkFBQWMsS0FBQUMsT0FBQSxFQUFBQyxPQUFBLEVBQUFDLElBQUEsRUFBQUMsV0FBQSxRQUFBQyxjQUFBLEdBQUFILE9BQUEsSUFBQUEsT0FBQSxDQUFBdkIsU0FBQSxZQUFBMkIsU0FBQSxHQUFBSixPQUFBLEdBQUFJLFNBQUEsRUFBQUMsU0FBQSxHQUFBN0IsTUFBQSxDQUFBOEIsTUFBQSxDQUFBSCxjQUFBLENBQUExQixTQUFBLEdBQUE4QixPQUFBLE9BQUFDLE9BQUEsQ0FBQU4sV0FBQSxnQkFBQXRCLGNBQUEsQ0FBQXlCLFNBQUEsZUFBQXJCLEtBQUEsRUFBQXlCLGdCQUFBLENBQUFWLE9BQUEsRUFBQUUsSUFBQSxFQUFBTSxPQUFBLE1BQUFGLFNBQUEsYUFBQUssU0FBQUMsRUFBQSxFQUFBOUIsR0FBQSxFQUFBK0IsR0FBQSxtQkFBQUMsSUFBQSxZQUFBRCxHQUFBLEVBQUFELEVBQUEsQ0FBQUcsSUFBQSxDQUFBakMsR0FBQSxFQUFBK0IsR0FBQSxjQUFBZixHQUFBLGFBQUFnQixJQUFBLFdBQUFELEdBQUEsRUFBQWYsR0FBQSxRQUFBdkIsT0FBQSxDQUFBd0IsSUFBQSxHQUFBQSxJQUFBLE1BQUFpQixnQkFBQSxnQkFBQVgsVUFBQSxjQUFBWSxrQkFBQSxjQUFBQywyQkFBQSxTQUFBQyxpQkFBQSxPQUFBekIsTUFBQSxDQUFBeUIsaUJBQUEsRUFBQS9CLGNBQUEscUNBQUFnQyxRQUFBLEdBQUEzQyxNQUFBLENBQUE0QyxjQUFBLEVBQUFDLHVCQUFBLEdBQUFGLFFBQUEsSUFBQUEsUUFBQSxDQUFBQSxRQUFBLENBQUFHLE1BQUEsUUFBQUQsdUJBQUEsSUFBQUEsdUJBQUEsS0FBQTlDLEVBQUEsSUFBQUcsTUFBQSxDQUFBb0MsSUFBQSxDQUFBTyx1QkFBQSxFQUFBbEMsY0FBQSxNQUFBK0IsaUJBQUEsR0FBQUcsdUJBQUEsT0FBQUUsRUFBQSxHQUFBTiwwQkFBQSxDQUFBeEMsU0FBQSxHQUFBMkIsU0FBQSxDQUFBM0IsU0FBQSxHQUFBRCxNQUFBLENBQUE4QixNQUFBLENBQUFZLGlCQUFBLFlBQUFNLHNCQUFBL0MsU0FBQSxnQ0FBQWdELE9BQUEsV0FBQUMsTUFBQSxJQUFBakMsTUFBQSxDQUFBaEIsU0FBQSxFQUFBaUQsTUFBQSxZQUFBZCxHQUFBLGdCQUFBZSxPQUFBLENBQUFELE1BQUEsRUFBQWQsR0FBQSxzQkFBQWdCLGNBQUF2QixTQUFBLEVBQUF3QixXQUFBLGFBQUFDLE9BQUFKLE1BQUEsRUFBQWQsR0FBQSxFQUFBbUIsT0FBQSxFQUFBQyxNQUFBLFFBQUFDLE1BQUEsR0FBQXZCLFFBQUEsQ0FBQUwsU0FBQSxDQUFBcUIsTUFBQSxHQUFBckIsU0FBQSxFQUFBTyxHQUFBLG1CQUFBcUIsTUFBQSxDQUFBcEIsSUFBQSxRQUFBcUIsTUFBQSxHQUFBRCxNQUFBLENBQUFyQixHQUFBLEVBQUE1QixLQUFBLEdBQUFrRCxNQUFBLENBQUFsRCxLQUFBLFNBQUFBLEtBQUEsZ0JBQUFtRCxPQUFBLENBQUFuRCxLQUFBLEtBQUFOLE1BQUEsQ0FBQW9DLElBQUEsQ0FBQTlCLEtBQUEsZUFBQTZDLFdBQUEsQ0FBQUUsT0FBQSxDQUFBL0MsS0FBQSxDQUFBb0QsT0FBQSxFQUFBQyxJQUFBLFdBQUFyRCxLQUFBLElBQUE4QyxNQUFBLFNBQUE5QyxLQUFBLEVBQUErQyxPQUFBLEVBQUFDLE1BQUEsZ0JBQUFuQyxHQUFBLElBQUFpQyxNQUFBLFVBQUFqQyxHQUFBLEVBQUFrQyxPQUFBLEVBQUFDLE1BQUEsUUFBQUgsV0FBQSxDQUFBRSxPQUFBLENBQUEvQyxLQUFBLEVBQUFxRCxJQUFBLFdBQUFDLFNBQUEsSUFBQUosTUFBQSxDQUFBbEQsS0FBQSxHQUFBc0QsU0FBQSxFQUFBUCxPQUFBLENBQUFHLE1BQUEsZ0JBQUFLLEtBQUEsV0FBQVQsTUFBQSxVQUFBUyxLQUFBLEVBQUFSLE9BQUEsRUFBQUMsTUFBQSxTQUFBQSxNQUFBLENBQUFDLE1BQUEsQ0FBQXJCLEdBQUEsU0FBQTRCLGVBQUEsRUFBQTVELGNBQUEsb0JBQUFJLEtBQUEsV0FBQUEsTUFBQTBDLE1BQUEsRUFBQWQsR0FBQSxhQUFBNkIsMkJBQUEsZUFBQVosV0FBQSxXQUFBRSxPQUFBLEVBQUFDLE1BQUEsSUFBQUYsTUFBQSxDQUFBSixNQUFBLEVBQUFkLEdBQUEsRUFBQW1CLE9BQUEsRUFBQUMsTUFBQSxnQkFBQVEsZUFBQSxHQUFBQSxlQUFBLEdBQUFBLGVBQUEsQ0FBQUgsSUFBQSxDQUFBSSwwQkFBQSxFQUFBQSwwQkFBQSxJQUFBQSwwQkFBQSxxQkFBQWhDLGlCQUFBVixPQUFBLEVBQUFFLElBQUEsRUFBQU0sT0FBQSxRQUFBbUMsS0FBQSxzQ0FBQWhCLE1BQUEsRUFBQWQsR0FBQSx3QkFBQThCLEtBQUEsWUFBQUMsS0FBQSxzREFBQUQsS0FBQSxvQkFBQWhCLE1BQUEsUUFBQWQsR0FBQSxTQUFBZ0MsVUFBQSxXQUFBckMsT0FBQSxDQUFBbUIsTUFBQSxHQUFBQSxNQUFBLEVBQUFuQixPQUFBLENBQUFLLEdBQUEsR0FBQUEsR0FBQSxVQUFBaUMsUUFBQSxHQUFBdEMsT0FBQSxDQUFBc0MsUUFBQSxNQUFBQSxRQUFBLFFBQUFDLGNBQUEsR0FBQUMsbUJBQUEsQ0FBQUYsUUFBQSxFQUFBdEMsT0FBQSxPQUFBdUMsY0FBQSxRQUFBQSxjQUFBLEtBQUEvQixnQkFBQSxtQkFBQStCLGNBQUEscUJBQUF2QyxPQUFBLENBQUFtQixNQUFBLEVBQUFuQixPQUFBLENBQUF5QyxJQUFBLEdBQUF6QyxPQUFBLENBQUEwQyxLQUFBLEdBQUExQyxPQUFBLENBQUFLLEdBQUEsc0JBQUFMLE9BQUEsQ0FBQW1CLE1BQUEsNkJBQUFnQixLQUFBLFFBQUFBLEtBQUEsZ0JBQUFuQyxPQUFBLENBQUFLLEdBQUEsRUFBQUwsT0FBQSxDQUFBMkMsaUJBQUEsQ0FBQTNDLE9BQUEsQ0FBQUssR0FBQSx1QkFBQUwsT0FBQSxDQUFBbUIsTUFBQSxJQUFBbkIsT0FBQSxDQUFBNEMsTUFBQSxXQUFBNUMsT0FBQSxDQUFBSyxHQUFBLEdBQUE4QixLQUFBLG9CQUFBVCxNQUFBLEdBQUF2QixRQUFBLENBQUFYLE9BQUEsRUFBQUUsSUFBQSxFQUFBTSxPQUFBLG9CQUFBMEIsTUFBQSxDQUFBcEIsSUFBQSxRQUFBNkIsS0FBQSxHQUFBbkMsT0FBQSxDQUFBNkMsSUFBQSxtQ0FBQW5CLE1BQUEsQ0FBQXJCLEdBQUEsS0FBQUcsZ0JBQUEscUJBQUEvQixLQUFBLEVBQUFpRCxNQUFBLENBQUFyQixHQUFBLEVBQUF3QyxJQUFBLEVBQUE3QyxPQUFBLENBQUE2QyxJQUFBLGtCQUFBbkIsTUFBQSxDQUFBcEIsSUFBQSxLQUFBNkIsS0FBQSxnQkFBQW5DLE9BQUEsQ0FBQW1CLE1BQUEsWUFBQW5CLE9BQUEsQ0FBQUssR0FBQSxHQUFBcUIsTUFBQSxDQUFBckIsR0FBQSxtQkFBQW1DLG9CQUFBRixRQUFBLEVBQUF0QyxPQUFBLFFBQUE4QyxVQUFBLEdBQUE5QyxPQUFBLENBQUFtQixNQUFBLEVBQUFBLE1BQUEsR0FBQW1CLFFBQUEsQ0FBQXpELFFBQUEsQ0FBQWlFLFVBQUEsT0FBQUMsU0FBQSxLQUFBNUIsTUFBQSxTQUFBbkIsT0FBQSxDQUFBc0MsUUFBQSxxQkFBQVEsVUFBQSxJQUFBUixRQUFBLENBQUF6RCxRQUFBLGVBQUFtQixPQUFBLENBQUFtQixNQUFBLGFBQUFuQixPQUFBLENBQUFLLEdBQUEsR0FBQTBDLFNBQUEsRUFBQVAsbUJBQUEsQ0FBQUYsUUFBQSxFQUFBdEMsT0FBQSxlQUFBQSxPQUFBLENBQUFtQixNQUFBLGtCQUFBMkIsVUFBQSxLQUFBOUMsT0FBQSxDQUFBbUIsTUFBQSxZQUFBbkIsT0FBQSxDQUFBSyxHQUFBLE9BQUEyQyxTQUFBLHVDQUFBRixVQUFBLGlCQUFBdEMsZ0JBQUEsTUFBQWtCLE1BQUEsR0FBQXZCLFFBQUEsQ0FBQWdCLE1BQUEsRUFBQW1CLFFBQUEsQ0FBQXpELFFBQUEsRUFBQW1CLE9BQUEsQ0FBQUssR0FBQSxtQkFBQXFCLE1BQUEsQ0FBQXBCLElBQUEsU0FBQU4sT0FBQSxDQUFBbUIsTUFBQSxZQUFBbkIsT0FBQSxDQUFBSyxHQUFBLEdBQUFxQixNQUFBLENBQUFyQixHQUFBLEVBQUFMLE9BQUEsQ0FBQXNDLFFBQUEsU0FBQTlCLGdCQUFBLE1BQUF5QyxJQUFBLEdBQUF2QixNQUFBLENBQUFyQixHQUFBLFNBQUE0QyxJQUFBLEdBQUFBLElBQUEsQ0FBQUosSUFBQSxJQUFBN0MsT0FBQSxDQUFBc0MsUUFBQSxDQUFBWSxVQUFBLElBQUFELElBQUEsQ0FBQXhFLEtBQUEsRUFBQXVCLE9BQUEsQ0FBQW1ELElBQUEsR0FBQWIsUUFBQSxDQUFBYyxPQUFBLGVBQUFwRCxPQUFBLENBQUFtQixNQUFBLEtBQUFuQixPQUFBLENBQUFtQixNQUFBLFdBQUFuQixPQUFBLENBQUFLLEdBQUEsR0FBQTBDLFNBQUEsR0FBQS9DLE9BQUEsQ0FBQXNDLFFBQUEsU0FBQTlCLGdCQUFBLElBQUF5QyxJQUFBLElBQUFqRCxPQUFBLENBQUFtQixNQUFBLFlBQUFuQixPQUFBLENBQUFLLEdBQUEsT0FBQTJDLFNBQUEsc0NBQUFoRCxPQUFBLENBQUFzQyxRQUFBLFNBQUE5QixnQkFBQSxjQUFBNkMsYUFBQUMsSUFBQSxRQUFBQyxLQUFBLEtBQUFDLE1BQUEsRUFBQUYsSUFBQSxZQUFBQSxJQUFBLEtBQUFDLEtBQUEsQ0FBQUUsUUFBQSxHQUFBSCxJQUFBLFdBQUFBLElBQUEsS0FBQUMsS0FBQSxDQUFBRyxVQUFBLEdBQUFKLElBQUEsS0FBQUMsS0FBQSxDQUFBSSxRQUFBLEdBQUFMLElBQUEsV0FBQU0sVUFBQSxDQUFBQyxJQUFBLENBQUFOLEtBQUEsY0FBQU8sY0FBQVAsS0FBQSxRQUFBN0IsTUFBQSxHQUFBNkIsS0FBQSxDQUFBUSxVQUFBLFFBQUFyQyxNQUFBLENBQUFwQixJQUFBLG9CQUFBb0IsTUFBQSxDQUFBckIsR0FBQSxFQUFBa0QsS0FBQSxDQUFBUSxVQUFBLEdBQUFyQyxNQUFBLGFBQUF6QixRQUFBTixXQUFBLFNBQUFpRSxVQUFBLE1BQUFKLE1BQUEsYUFBQTdELFdBQUEsQ0FBQXVCLE9BQUEsQ0FBQW1DLFlBQUEsY0FBQVcsS0FBQSxpQkFBQWpELE9BQUFrRCxRQUFBLFFBQUFBLFFBQUEsUUFBQUMsY0FBQSxHQUFBRCxRQUFBLENBQUFyRixjQUFBLE9BQUFzRixjQUFBLFNBQUFBLGNBQUEsQ0FBQTNELElBQUEsQ0FBQTBELFFBQUEsNEJBQUFBLFFBQUEsQ0FBQWQsSUFBQSxTQUFBYyxRQUFBLE9BQUFFLEtBQUEsQ0FBQUYsUUFBQSxDQUFBRyxNQUFBLFNBQUFDLENBQUEsT0FBQWxCLElBQUEsWUFBQUEsS0FBQSxhQUFBa0IsQ0FBQSxHQUFBSixRQUFBLENBQUFHLE1BQUEsT0FBQWpHLE1BQUEsQ0FBQW9DLElBQUEsQ0FBQTBELFFBQUEsRUFBQUksQ0FBQSxVQUFBbEIsSUFBQSxDQUFBMUUsS0FBQSxHQUFBd0YsUUFBQSxDQUFBSSxDQUFBLEdBQUFsQixJQUFBLENBQUFOLElBQUEsT0FBQU0sSUFBQSxTQUFBQSxJQUFBLENBQUExRSxLQUFBLEdBQUFzRSxTQUFBLEVBQUFJLElBQUEsQ0FBQU4sSUFBQSxPQUFBTSxJQUFBLFlBQUFBLElBQUEsQ0FBQUEsSUFBQSxHQUFBQSxJQUFBLGVBQUFBLElBQUEsRUFBQWQsVUFBQSxlQUFBQSxXQUFBLGFBQUE1RCxLQUFBLEVBQUFzRSxTQUFBLEVBQUFGLElBQUEsaUJBQUFwQyxpQkFBQSxDQUFBdkMsU0FBQSxHQUFBd0MsMEJBQUEsRUFBQXJDLGNBQUEsQ0FBQTJDLEVBQUEsbUJBQUF2QyxLQUFBLEVBQUFpQywwQkFBQSxFQUFBdEIsWUFBQSxTQUFBZixjQUFBLENBQUFxQywwQkFBQSxtQkFBQWpDLEtBQUEsRUFBQWdDLGlCQUFBLEVBQUFyQixZQUFBLFNBQUFxQixpQkFBQSxDQUFBNkQsV0FBQSxHQUFBcEYsTUFBQSxDQUFBd0IsMEJBQUEsRUFBQTFCLGlCQUFBLHdCQUFBakIsT0FBQSxDQUFBd0csbUJBQUEsYUFBQUMsTUFBQSxRQUFBQyxJQUFBLHdCQUFBRCxNQUFBLElBQUFBLE1BQUEsQ0FBQUUsV0FBQSxXQUFBRCxJQUFBLEtBQUFBLElBQUEsS0FBQWhFLGlCQUFBLDZCQUFBZ0UsSUFBQSxDQUFBSCxXQUFBLElBQUFHLElBQUEsQ0FBQUUsSUFBQSxPQUFBNUcsT0FBQSxDQUFBNkcsSUFBQSxhQUFBSixNQUFBLFdBQUF2RyxNQUFBLENBQUE0RyxjQUFBLEdBQUE1RyxNQUFBLENBQUE0RyxjQUFBLENBQUFMLE1BQUEsRUFBQTlELDBCQUFBLEtBQUE4RCxNQUFBLENBQUFNLFNBQUEsR0FBQXBFLDBCQUFBLEVBQUF4QixNQUFBLENBQUFzRixNQUFBLEVBQUF4RixpQkFBQSx5QkFBQXdGLE1BQUEsQ0FBQXRHLFNBQUEsR0FBQUQsTUFBQSxDQUFBOEIsTUFBQSxDQUFBaUIsRUFBQSxHQUFBd0QsTUFBQSxLQUFBekcsT0FBQSxDQUFBZ0gsS0FBQSxhQUFBMUUsR0FBQSxhQUFBd0IsT0FBQSxFQUFBeEIsR0FBQSxPQUFBWSxxQkFBQSxDQUFBSSxhQUFBLENBQUFuRCxTQUFBLEdBQUFnQixNQUFBLENBQUFtQyxhQUFBLENBQUFuRCxTQUFBLEVBQUFZLG1CQUFBLGlDQUFBZixPQUFBLENBQUFzRCxhQUFBLEdBQUFBLGFBQUEsRUFBQXRELE9BQUEsQ0FBQWlILEtBQUEsYUFBQXhGLE9BQUEsRUFBQUMsT0FBQSxFQUFBQyxJQUFBLEVBQUFDLFdBQUEsRUFBQTJCLFdBQUEsZUFBQUEsV0FBQSxLQUFBQSxXQUFBLEdBQUEyRCxPQUFBLE9BQUFDLElBQUEsT0FBQTdELGFBQUEsQ0FBQTlCLElBQUEsQ0FBQUMsT0FBQSxFQUFBQyxPQUFBLEVBQUFDLElBQUEsRUFBQUMsV0FBQSxHQUFBMkIsV0FBQSxVQUFBdkQsT0FBQSxDQUFBd0csbUJBQUEsQ0FBQTlFLE9BQUEsSUFBQXlGLElBQUEsR0FBQUEsSUFBQSxDQUFBL0IsSUFBQSxHQUFBckIsSUFBQSxXQUFBSCxNQUFBLFdBQUFBLE1BQUEsQ0FBQWtCLElBQUEsR0FBQWxCLE1BQUEsQ0FBQWxELEtBQUEsR0FBQXlHLElBQUEsQ0FBQS9CLElBQUEsV0FBQWxDLHFCQUFBLENBQUFELEVBQUEsR0FBQTlCLE1BQUEsQ0FBQThCLEVBQUEsRUFBQWhDLGlCQUFBLGdCQUFBRSxNQUFBLENBQUE4QixFQUFBLEVBQUFwQyxjQUFBLGlDQUFBTSxNQUFBLENBQUE4QixFQUFBLDZEQUFBakQsT0FBQSxDQUFBb0gsSUFBQSxhQUFBQyxHQUFBLFFBQUFDLE1BQUEsR0FBQXBILE1BQUEsQ0FBQW1ILEdBQUEsR0FBQUQsSUFBQSxnQkFBQTVHLEdBQUEsSUFBQThHLE1BQUEsRUFBQUYsSUFBQSxDQUFBdEIsSUFBQSxDQUFBdEYsR0FBQSxVQUFBNEcsSUFBQSxDQUFBRyxPQUFBLGFBQUFuQyxLQUFBLFdBQUFnQyxJQUFBLENBQUFmLE1BQUEsU0FBQTdGLEdBQUEsR0FBQTRHLElBQUEsQ0FBQUksR0FBQSxRQUFBaEgsR0FBQSxJQUFBOEcsTUFBQSxTQUFBbEMsSUFBQSxDQUFBMUUsS0FBQSxHQUFBRixHQUFBLEVBQUE0RSxJQUFBLENBQUFOLElBQUEsT0FBQU0sSUFBQSxXQUFBQSxJQUFBLENBQUFOLElBQUEsT0FBQU0sSUFBQSxRQUFBcEYsT0FBQSxDQUFBZ0QsTUFBQSxHQUFBQSxNQUFBLEVBQUFkLE9BQUEsQ0FBQS9CLFNBQUEsS0FBQXdHLFdBQUEsRUFBQXpFLE9BQUEsRUFBQStELEtBQUEsV0FBQUEsTUFBQXdCLGFBQUEsYUFBQUMsSUFBQSxXQUFBdEMsSUFBQSxXQUFBVixJQUFBLFFBQUFDLEtBQUEsR0FBQUssU0FBQSxPQUFBRixJQUFBLFlBQUFQLFFBQUEsY0FBQW5CLE1BQUEsZ0JBQUFkLEdBQUEsR0FBQTBDLFNBQUEsT0FBQWEsVUFBQSxDQUFBMUMsT0FBQSxDQUFBNEMsYUFBQSxJQUFBMEIsYUFBQSxXQUFBYixJQUFBLGtCQUFBQSxJQUFBLENBQUFlLE1BQUEsT0FBQXZILE1BQUEsQ0FBQW9DLElBQUEsT0FBQW9FLElBQUEsTUFBQVIsS0FBQSxFQUFBUSxJQUFBLENBQUFnQixLQUFBLGNBQUFoQixJQUFBLElBQUE1QixTQUFBLE1BQUE2QyxJQUFBLFdBQUFBLEtBQUEsU0FBQS9DLElBQUEsV0FBQWdELFVBQUEsUUFBQWpDLFVBQUEsSUFBQUcsVUFBQSxrQkFBQThCLFVBQUEsQ0FBQXZGLElBQUEsUUFBQXVGLFVBQUEsQ0FBQXhGLEdBQUEsY0FBQXlGLElBQUEsS0FBQW5ELGlCQUFBLFdBQUFBLGtCQUFBb0QsU0FBQSxhQUFBbEQsSUFBQSxRQUFBa0QsU0FBQSxNQUFBL0YsT0FBQSxrQkFBQWdHLE9BQUFDLEdBQUEsRUFBQUMsTUFBQSxXQUFBeEUsTUFBQSxDQUFBcEIsSUFBQSxZQUFBb0IsTUFBQSxDQUFBckIsR0FBQSxHQUFBMEYsU0FBQSxFQUFBL0YsT0FBQSxDQUFBbUQsSUFBQSxHQUFBOEMsR0FBQSxFQUFBQyxNQUFBLEtBQUFsRyxPQUFBLENBQUFtQixNQUFBLFdBQUFuQixPQUFBLENBQUFLLEdBQUEsR0FBQTBDLFNBQUEsS0FBQW1ELE1BQUEsYUFBQTdCLENBQUEsUUFBQVQsVUFBQSxDQUFBUSxNQUFBLE1BQUFDLENBQUEsU0FBQUEsQ0FBQSxRQUFBZCxLQUFBLFFBQUFLLFVBQUEsQ0FBQVMsQ0FBQSxHQUFBM0MsTUFBQSxHQUFBNkIsS0FBQSxDQUFBUSxVQUFBLGlCQUFBUixLQUFBLENBQUFDLE1BQUEsU0FBQXdDLE1BQUEsYUFBQXpDLEtBQUEsQ0FBQUMsTUFBQSxTQUFBaUMsSUFBQSxRQUFBVSxRQUFBLEdBQUFoSSxNQUFBLENBQUFvQyxJQUFBLENBQUFnRCxLQUFBLGVBQUE2QyxVQUFBLEdBQUFqSSxNQUFBLENBQUFvQyxJQUFBLENBQUFnRCxLQUFBLHFCQUFBNEMsUUFBQSxJQUFBQyxVQUFBLGFBQUFYLElBQUEsR0FBQWxDLEtBQUEsQ0FBQUUsUUFBQSxTQUFBdUMsTUFBQSxDQUFBekMsS0FBQSxDQUFBRSxRQUFBLGdCQUFBZ0MsSUFBQSxHQUFBbEMsS0FBQSxDQUFBRyxVQUFBLFNBQUFzQyxNQUFBLENBQUF6QyxLQUFBLENBQUFHLFVBQUEsY0FBQXlDLFFBQUEsYUFBQVYsSUFBQSxHQUFBbEMsS0FBQSxDQUFBRSxRQUFBLFNBQUF1QyxNQUFBLENBQUF6QyxLQUFBLENBQUFFLFFBQUEscUJBQUEyQyxVQUFBLFlBQUFoRSxLQUFBLHFEQUFBcUQsSUFBQSxHQUFBbEMsS0FBQSxDQUFBRyxVQUFBLFNBQUFzQyxNQUFBLENBQUF6QyxLQUFBLENBQUFHLFVBQUEsWUFBQWQsTUFBQSxXQUFBQSxPQUFBdEMsSUFBQSxFQUFBRCxHQUFBLGFBQUFnRSxDQUFBLFFBQUFULFVBQUEsQ0FBQVEsTUFBQSxNQUFBQyxDQUFBLFNBQUFBLENBQUEsUUFBQWQsS0FBQSxRQUFBSyxVQUFBLENBQUFTLENBQUEsT0FBQWQsS0FBQSxDQUFBQyxNQUFBLFNBQUFpQyxJQUFBLElBQUF0SCxNQUFBLENBQUFvQyxJQUFBLENBQUFnRCxLQUFBLHdCQUFBa0MsSUFBQSxHQUFBbEMsS0FBQSxDQUFBRyxVQUFBLFFBQUEyQyxZQUFBLEdBQUE5QyxLQUFBLGFBQUE4QyxZQUFBLGlCQUFBL0YsSUFBQSxtQkFBQUEsSUFBQSxLQUFBK0YsWUFBQSxDQUFBN0MsTUFBQSxJQUFBbkQsR0FBQSxJQUFBQSxHQUFBLElBQUFnRyxZQUFBLENBQUEzQyxVQUFBLEtBQUEyQyxZQUFBLGNBQUEzRSxNQUFBLEdBQUEyRSxZQUFBLEdBQUFBLFlBQUEsQ0FBQXRDLFVBQUEsY0FBQXJDLE1BQUEsQ0FBQXBCLElBQUEsR0FBQUEsSUFBQSxFQUFBb0IsTUFBQSxDQUFBckIsR0FBQSxHQUFBQSxHQUFBLEVBQUFnRyxZQUFBLFNBQUFsRixNQUFBLGdCQUFBZ0MsSUFBQSxHQUFBa0QsWUFBQSxDQUFBM0MsVUFBQSxFQUFBbEQsZ0JBQUEsU0FBQThGLFFBQUEsQ0FBQTVFLE1BQUEsTUFBQTRFLFFBQUEsV0FBQUEsU0FBQTVFLE1BQUEsRUFBQWlDLFFBQUEsb0JBQUFqQyxNQUFBLENBQUFwQixJQUFBLFFBQUFvQixNQUFBLENBQUFyQixHQUFBLHFCQUFBcUIsTUFBQSxDQUFBcEIsSUFBQSxtQkFBQW9CLE1BQUEsQ0FBQXBCLElBQUEsUUFBQTZDLElBQUEsR0FBQXpCLE1BQUEsQ0FBQXJCLEdBQUEsZ0JBQUFxQixNQUFBLENBQUFwQixJQUFBLFNBQUF3RixJQUFBLFFBQUF6RixHQUFBLEdBQUFxQixNQUFBLENBQUFyQixHQUFBLE9BQUFjLE1BQUEsa0JBQUFnQyxJQUFBLHlCQUFBekIsTUFBQSxDQUFBcEIsSUFBQSxJQUFBcUQsUUFBQSxVQUFBUixJQUFBLEdBQUFRLFFBQUEsR0FBQW5ELGdCQUFBLEtBQUErRixNQUFBLFdBQUFBLE9BQUE3QyxVQUFBLGFBQUFXLENBQUEsUUFBQVQsVUFBQSxDQUFBUSxNQUFBLE1BQUFDLENBQUEsU0FBQUEsQ0FBQSxRQUFBZCxLQUFBLFFBQUFLLFVBQUEsQ0FBQVMsQ0FBQSxPQUFBZCxLQUFBLENBQUFHLFVBQUEsS0FBQUEsVUFBQSxjQUFBNEMsUUFBQSxDQUFBL0MsS0FBQSxDQUFBUSxVQUFBLEVBQUFSLEtBQUEsQ0FBQUksUUFBQSxHQUFBRyxhQUFBLENBQUFQLEtBQUEsR0FBQS9DLGdCQUFBLHlCQUFBZ0csT0FBQWhELE1BQUEsYUFBQWEsQ0FBQSxRQUFBVCxVQUFBLENBQUFRLE1BQUEsTUFBQUMsQ0FBQSxTQUFBQSxDQUFBLFFBQUFkLEtBQUEsUUFBQUssVUFBQSxDQUFBUyxDQUFBLE9BQUFkLEtBQUEsQ0FBQUMsTUFBQSxLQUFBQSxNQUFBLFFBQUE5QixNQUFBLEdBQUE2QixLQUFBLENBQUFRLFVBQUEsa0JBQUFyQyxNQUFBLENBQUFwQixJQUFBLFFBQUFtRyxNQUFBLEdBQUEvRSxNQUFBLENBQUFyQixHQUFBLEVBQUF5RCxhQUFBLENBQUFQLEtBQUEsWUFBQWtELE1BQUEsZ0JBQUFyRSxLQUFBLDhCQUFBc0UsYUFBQSxXQUFBQSxjQUFBekMsUUFBQSxFQUFBZixVQUFBLEVBQUFFLE9BQUEsZ0JBQUFkLFFBQUEsS0FBQXpELFFBQUEsRUFBQWtDLE1BQUEsQ0FBQWtELFFBQUEsR0FBQWYsVUFBQSxFQUFBQSxVQUFBLEVBQUFFLE9BQUEsRUFBQUEsT0FBQSxvQkFBQWpDLE1BQUEsVUFBQWQsR0FBQSxHQUFBMEMsU0FBQSxHQUFBdkMsZ0JBQUEsT0FBQXpDLE9BQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQUE0SSxtQkFBQUMsR0FBQSxFQUFBcEYsT0FBQSxFQUFBQyxNQUFBLEVBQUFvRixLQUFBLEVBQUFDLE1BQUEsRUFBQXZJLEdBQUEsRUFBQThCLEdBQUEsY0FBQTRDLElBQUEsR0FBQTJELEdBQUEsQ0FBQXJJLEdBQUEsRUFBQThCLEdBQUEsT0FBQTVCLEtBQUEsR0FBQXdFLElBQUEsQ0FBQXhFLEtBQUEsV0FBQXVELEtBQUEsSUFBQVAsTUFBQSxDQUFBTyxLQUFBLGlCQUFBaUIsSUFBQSxDQUFBSixJQUFBLElBQUFyQixPQUFBLENBQUEvQyxLQUFBLFlBQUF3RyxPQUFBLENBQUF6RCxPQUFBLENBQUEvQyxLQUFBLEVBQUFxRCxJQUFBLENBQUErRSxLQUFBLEVBQUFDLE1BQUE7QUFBQSxTQUFBQyxrQkFBQTNHLEVBQUEsNkJBQUFWLElBQUEsU0FBQXNILElBQUEsR0FBQUMsU0FBQSxhQUFBaEMsT0FBQSxXQUFBekQsT0FBQSxFQUFBQyxNQUFBLFFBQUFtRixHQUFBLEdBQUF4RyxFQUFBLENBQUE4RyxLQUFBLENBQUF4SCxJQUFBLEVBQUFzSCxJQUFBLFlBQUFILE1BQUFwSSxLQUFBLElBQUFrSSxrQkFBQSxDQUFBQyxHQUFBLEVBQUFwRixPQUFBLEVBQUFDLE1BQUEsRUFBQW9GLEtBQUEsRUFBQUMsTUFBQSxVQUFBckksS0FBQSxjQUFBcUksT0FBQXhILEdBQUEsSUFBQXFILGtCQUFBLENBQUFDLEdBQUEsRUFBQXBGLE9BQUEsRUFBQUMsTUFBQSxFQUFBb0YsS0FBQSxFQUFBQyxNQUFBLFdBQUF4SCxHQUFBLEtBQUF1SCxLQUFBLENBQUE5RCxTQUFBO0FBQUEsU0FBQW9FLGVBQUFDLEdBQUEsRUFBQS9DLENBQUEsV0FBQWdELGVBQUEsQ0FBQUQsR0FBQSxLQUFBRSxxQkFBQSxDQUFBRixHQUFBLEVBQUEvQyxDQUFBLEtBQUFrRCwyQkFBQSxDQUFBSCxHQUFBLEVBQUEvQyxDQUFBLEtBQUFtRCxnQkFBQTtBQUFBLFNBQUFBLGlCQUFBLGNBQUF4RSxTQUFBO0FBQUEsU0FBQXVFLDRCQUFBRSxDQUFBLEVBQUFDLE1BQUEsU0FBQUQsQ0FBQSxxQkFBQUEsQ0FBQSxzQkFBQUUsaUJBQUEsQ0FBQUYsQ0FBQSxFQUFBQyxNQUFBLE9BQUFFLENBQUEsR0FBQTNKLE1BQUEsQ0FBQUMsU0FBQSxDQUFBMkosUUFBQSxDQUFBdEgsSUFBQSxDQUFBa0gsQ0FBQSxFQUFBOUIsS0FBQSxhQUFBaUMsQ0FBQSxpQkFBQUgsQ0FBQSxDQUFBL0MsV0FBQSxFQUFBa0QsQ0FBQSxHQUFBSCxDQUFBLENBQUEvQyxXQUFBLENBQUFDLElBQUEsTUFBQWlELENBQUEsY0FBQUEsQ0FBQSxtQkFBQUUsS0FBQSxDQUFBQyxJQUFBLENBQUFOLENBQUEsT0FBQUcsQ0FBQSwrREFBQUksSUFBQSxDQUFBSixDQUFBLFVBQUFELGlCQUFBLENBQUFGLENBQUEsRUFBQUMsTUFBQTtBQUFBLFNBQUFDLGtCQUFBUCxHQUFBLEVBQUFhLEdBQUEsUUFBQUEsR0FBQSxZQUFBQSxHQUFBLEdBQUFiLEdBQUEsQ0FBQWhELE1BQUEsRUFBQTZELEdBQUEsR0FBQWIsR0FBQSxDQUFBaEQsTUFBQSxXQUFBQyxDQUFBLE1BQUE2RCxJQUFBLE9BQUFKLEtBQUEsQ0FBQUcsR0FBQSxHQUFBNUQsQ0FBQSxHQUFBNEQsR0FBQSxFQUFBNUQsQ0FBQSxJQUFBNkQsSUFBQSxDQUFBN0QsQ0FBQSxJQUFBK0MsR0FBQSxDQUFBL0MsQ0FBQSxVQUFBNkQsSUFBQTtBQUFBLFNBQUFaLHNCQUFBRixHQUFBLEVBQUEvQyxDQUFBLFFBQUE4RCxFQUFBLFdBQUFmLEdBQUEsZ0NBQUF6SSxNQUFBLElBQUF5SSxHQUFBLENBQUF6SSxNQUFBLENBQUFFLFFBQUEsS0FBQXVJLEdBQUEsNEJBQUFlLEVBQUEsUUFBQUMsRUFBQSxFQUFBQyxFQUFBLEVBQUFDLEVBQUEsRUFBQUMsRUFBQSxFQUFBQyxJQUFBLE9BQUFDLEVBQUEsT0FBQUMsRUFBQSxpQkFBQUosRUFBQSxJQUFBSCxFQUFBLEdBQUFBLEVBQUEsQ0FBQTVILElBQUEsQ0FBQTZHLEdBQUEsR0FBQWpFLElBQUEsUUFBQWtCLENBQUEsUUFBQXBHLE1BQUEsQ0FBQWtLLEVBQUEsTUFBQUEsRUFBQSxVQUFBTSxFQUFBLHVCQUFBQSxFQUFBLElBQUFMLEVBQUEsR0FBQUUsRUFBQSxDQUFBL0gsSUFBQSxDQUFBNEgsRUFBQSxHQUFBdEYsSUFBQSxNQUFBMkYsSUFBQSxDQUFBM0UsSUFBQSxDQUFBdUUsRUFBQSxDQUFBM0osS0FBQSxHQUFBK0osSUFBQSxDQUFBcEUsTUFBQSxLQUFBQyxDQUFBLEdBQUFvRSxFQUFBLGlCQUFBbkosR0FBQSxJQUFBb0osRUFBQSxPQUFBTCxFQUFBLEdBQUEvSSxHQUFBLHlCQUFBbUosRUFBQSxZQUFBTixFQUFBLGVBQUFJLEVBQUEsR0FBQUosRUFBQSxjQUFBbEssTUFBQSxDQUFBc0ssRUFBQSxNQUFBQSxFQUFBLDJCQUFBRyxFQUFBLFFBQUFMLEVBQUEsYUFBQUcsSUFBQTtBQUFBLFNBQUFuQixnQkFBQUQsR0FBQSxRQUFBVSxLQUFBLENBQUFhLE9BQUEsQ0FBQXZCLEdBQUEsVUFBQUEsR0FBQTtBQURvRDtBQUM0QztBQUN0RTtBQUNrQztBQUNGO0FBQ0E7QUFDQztBQUM2QjtBQUM1RDtBQUNtQjtBQUcvQyxJQUFNbUMsTUFBTSxHQUFHUix3Q0FDTixDQUFDO0VBQ05sTCxLQUFLLEVBQUVrTCx3Q0FBVSxFQUFFLENBQUNVLEdBQUcsQ0FBQyxHQUFHLEVBQUVKLDJDQUFDLENBQUMsbUJBQW1CLEVBQUU7SUFBQ0ssRUFBRSxFQUFFLGFBQWE7SUFBRUQsR0FBRyxFQUFFO0VBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQ0UsUUFBUSxFQUFFO0VBQzlGQyxPQUFPLEVBQUViLHdDQUFVLEVBQUUsQ0FBQ1UsR0FBRyxDQUFDLEdBQUcsRUFBRUosMkNBQUMsQ0FBQyxtQkFBbUIsRUFBRTtJQUFDSyxFQUFFLEVBQUUsYUFBYTtJQUFFRCxHQUFHLEVBQUU7RUFBRyxDQUFDLENBQUMsQ0FBQyxDQUFDRSxRQUFRLEVBQUU7RUFDaEdFLFVBQVUsRUFBRWQsc0NBQVEsRUFBRSxDQUFDZ0IsTUFBTSxDQUFDViwyQ0FBQyxDQUFDLHNCQUFzQixFQUFFO0lBQUNLLEVBQUUsRUFBRTtFQUFhLENBQUMsQ0FBQyxDQUFDLENBQUNDLFFBQVE7QUFDeEYsQ0FBQyxDQUFDLENBQ0RBLFFBQVEsRUFBRTtBQUdOLElBQU1LLFlBQVksR0FBRyxTQUFmQSxZQUFZQSxDQUFBM00sSUFBQSxFQUFnQztFQUFBLElBQUE0TSxhQUFBLEVBQUFDLGdCQUFBO0VBQUEsSUFBM0JDLGNBQWMsR0FBQTlNLElBQUEsQ0FBZDhNLGNBQWM7SUFBRUMsS0FBSyxHQUFBL00sSUFBQSxDQUFMK00sS0FBSztFQUMvQyxJQUFBQyxlQUFBLEdBQVlmLDhEQUFjLENBQUMsVUFBVSxDQUFDO0lBQS9CRCxDQUFDLEdBQUFnQixlQUFBLENBQURoQixDQUFDO0VBRVIsSUFBQWlCLHFCQUFBLEdBQTRFeEIsOEZBQXFCLENBQUNTLE1BQU0sRUFBRTtNQUN0RzFMLEtBQUssRUFBRSxFQUFFO01BQ1QrTCxPQUFPLEVBQUUsRUFBRTtNQUNYQyxVQUFVLEVBQUU7SUFDaEIsQ0FBQyxDQUFDO0lBSk1VLFFBQVEsR0FBQUQscUJBQUEsQ0FBUkMsUUFBUTtJQUFFQyxZQUFZLEdBQUFGLHFCQUFBLENBQVpFLFlBQVk7SUFBRUMsTUFBTSxHQUFBSCxxQkFBQSxDQUFORyxNQUFNO0lBQUVDLFlBQVksR0FBQUoscUJBQUEsQ0FBWkksWUFBWTtJQUFFQyxPQUFPLEdBQUFMLHFCQUFBLENBQVBLLE9BQU87SUFBRUMsUUFBUSxHQUFBTixxQkFBQSxDQUFSTSxRQUFRO0VBTXZFLElBQU1DLGFBQWEsR0FBR2pDLGtEQUFVLENBQUNRLGtGQUFvQixDQUFDO0VBQ3RELElBQUEwQixTQUFBLEdBQWdDakMsZ0RBQVEsQ0FBQyxLQUFLLENBQUM7SUFBQWtDLFVBQUEsR0FBQTVELGNBQUEsQ0FBQTJELFNBQUE7SUFBeENFLFNBQVMsR0FBQUQsVUFBQTtJQUFFRSxVQUFVLEdBQUFGLFVBQUE7RUFFNUIsSUFBTUcsUUFBUTtJQUFBLElBQUFDLEtBQUEsR0FBQXBFLGlCQUFBLGVBQUFqSixtQkFBQSxHQUFBOEcsSUFBQSxDQUFHLFNBQUF3RyxRQUFNQyxRQUFRO01BQUEsT0FBQXZOLG1CQUFBLEdBQUF5QixJQUFBLFVBQUErTCxTQUFBQyxRQUFBO1FBQUEsa0JBQUFBLFFBQUEsQ0FBQTlGLElBQUEsR0FBQThGLFFBQUEsQ0FBQXBJLElBQUE7VUFBQTtZQUFBLEtBQ3hCNkgsU0FBUztjQUFBTyxRQUFBLENBQUFwSSxJQUFBO2NBQUE7WUFBQTtZQUFBLE9BQUFvSSxRQUFBLENBQUEzSSxNQUFBO1VBQUE7WUFHWnFJLFVBQVUsQ0FBQyxJQUFJLENBQUM7WUFBQ00sUUFBQSxDQUFBOUYsSUFBQTtZQUFBOEYsUUFBQSxDQUFBcEksSUFBQTtZQUFBLE9BRVBnSCxjQUFjLENBQUNrQixRQUFRLENBQUM7VUFBQTtZQUM5QlIsYUFBYSxDQUFDO2NBQ1Z2SyxJQUFJLEVBQUUsU0FBUztjQUNma0wsT0FBTyxFQUFFbkMsQ0FBQyxDQUFDLHlCQUF5QjtZQUN4QyxDQUFDLENBQUM7WUFDRmUsS0FBSyxFQUFFO1lBQUNtQixRQUFBLENBQUFwSSxJQUFBO1lBQUE7VUFBQTtZQUFBb0ksUUFBQSxDQUFBOUYsSUFBQTtZQUFBOEYsUUFBQSxDQUFBRSxFQUFBLEdBQUFGLFFBQUE7WUFFUixJQUFHQSxRQUFBLENBQUFFLEVBQUEsWUFBYXRDLHFEQUFRLEVBQUU7Y0FDdEJsTCxNQUFNLENBQUN5TixPQUFPLENBQUNILFFBQUEsQ0FBQUUsRUFBQSxDQUFFaEIsTUFBTSxDQUFDLENBQUN2SixPQUFPLENBQUMsVUFBQXlLLEtBQUEsRUFBc0I7Z0JBQUEsSUFBQUMsS0FBQSxHQUFBekUsY0FBQSxDQUFBd0UsS0FBQTtrQkFBcEJFLEtBQUssR0FBQUQsS0FBQTtrQkFBRUosT0FBTyxHQUFBSSxLQUFBO2dCQUM3Q2hCLFFBQVEsQ0FBQ2lCLEtBQUssRUFBRTtrQkFBQ3ZMLElBQUksRUFBRSxRQUFRO2tCQUFFa0wsT0FBTyxFQUFFQTtnQkFBTyxDQUFDLENBQUM7Y0FDdkQsQ0FBQyxDQUFDO1lBQ04sQ0FBQyxNQUFNO2NBQ0hYLGFBQWEsQ0FBQztnQkFDVnZLLElBQUksRUFBRSxRQUFRO2dCQUNka0wsT0FBTyxFQUFFbkMsQ0FBQyxDQUFDLHlCQUF5QjtjQUN4QyxDQUFDLENBQUM7WUFDTjtVQUFDO1lBRUw0QixVQUFVLENBQUMsS0FBSyxDQUFDO1VBQUM7VUFBQTtZQUFBLE9BQUFNLFFBQUEsQ0FBQTNGLElBQUE7UUFBQTtNQUFBLEdBQUF3RixPQUFBO0lBQUEsQ0FDckI7SUFBQSxnQkF6QktGLFFBQVFBLENBQUFZLEdBQUE7TUFBQSxPQUFBWCxLQUFBLENBQUFqRSxLQUFBLE9BQUFELFNBQUE7SUFBQTtFQUFBLEdBeUJiO0VBRUQsb0JBQ0k5SiwyREFBQTtJQUFNK04sUUFBUSxFQUFFVixZQUFZLENBQUNVLFFBQVEsQ0FBRTtJQUFDMU4sU0FBUyxFQUFDO0VBQXNCLGdCQUVwRUwsMkRBQUEsQ0FBQytMLHVEQUFTO0lBQUN5QixPQUFPLEVBQUVBLE9BQVE7SUFBQ2hHLElBQUksRUFBQyxPQUFPO0lBQUMzQyxLQUFLLEdBQUFpSSxhQUFBLEdBQUVRLE1BQU0sQ0FBQzVNLEtBQUssY0FBQW9NLGFBQUEsdUJBQVpBLGFBQUEsQ0FBY3VCLE9BQVE7SUFBQ08sU0FBUyxFQUFFO0VBQUksR0FBRTFDLENBQUMsQ0FBQyxnQkFBZ0IsQ0FBQyxFQUFDLElBQUUsQ0FBWSxlQUUzSGxNLDJEQUFBLENBQUMrTCx1REFBUztJQUFDNUksSUFBSSxFQUFDLFVBQVU7SUFBQ3FLLE9BQU8sRUFBRUEsT0FBUTtJQUFDaEcsSUFBSSxFQUFDLFNBQVM7SUFBQzNDLEtBQUssR0FBQWtJLGdCQUFBLEdBQUVPLE1BQU0sQ0FBQ3VCLFFBQVEsY0FBQTlCLGdCQUFBLHVCQUFmQSxnQkFBQSxDQUFpQnNCLE9BQVE7SUFBQ08sU0FBUyxFQUFFO0VBQUksR0FDdkcxQyxDQUFDLENBQUMsVUFBVSxDQUFDLEVBQUMsSUFDbkIsQ0FBWSxlQUVabE0sMkRBQUE7SUFBS0ssU0FBUyxFQUFFLGdCQUFnQixJQUFJaU4sTUFBTSxDQUFDWixVQUFVLEdBQUcsYUFBYSxHQUFFLEVBQUU7RUFBRSxnQkFDdkUxTSwyREFBQSxVQUFBOE8sUUFBQSxLQUFXMUIsUUFBUSxDQUFDLFlBQVksQ0FBQztJQUFFL00sU0FBUyxFQUFDLGVBQWU7SUFBQzBPLEVBQUUsRUFBQyxZQUFZO0lBQUM1TCxJQUFJLEVBQUM7RUFBVSxHQUFHLGVBQy9GbkQsMkRBQUE7SUFBT2dQLE9BQU8sRUFBQyxZQUFZO0lBQUMzTyxTQUFTLEVBQUM7RUFBWSxnQkFDOUNMLDJEQUFBO0lBQUtLLFNBQVMsRUFBQyxpQkFBaUI7SUFBQzRPLElBQUksRUFBQyxVQUFVO0lBQUMsbUJBQWdCO0VBQWdCLGdCQUM3RWpQLDJEQUFBLENBQUM4TCx1REFBUyxPQUFHLENBQ1gsZUFDTjlMLDJEQUFBO0lBQU0rTyxFQUFFLEVBQUM7RUFBZ0IsR0FBRTdDLENBQUMsQ0FBQyxvQkFBb0IsQ0FBQyxFQUFDLElBQUUsQ0FBTyxDQUN4RCxFQUVKb0IsTUFBTSxDQUFDWixVQUFVLGlCQUFJMU0sMkRBQUE7SUFBS0ssU0FBUyxFQUFDO0VBQVksR0FBRWlOLE1BQU0sQ0FBQ1osVUFBVSxDQUFDMkIsT0FBTyxDQUFPLENBRXBGLGVBQ05yTywyREFBQTtJQUFLSyxTQUFTLEVBQUM7RUFBcUIsZ0JBQ2hDTCwyREFBQSxDQUFDNkwseURBQVU7SUFBQ3FELGVBQWUsRUFBQyxVQUFVO0lBQUNDLE9BQU8sRUFBRXRCLFNBQVMsSUFBSU47RUFBYSxHQUFFckIsQ0FBQyxDQUFDLGdCQUFnQixDQUFDLENBQWMsZUFDN0dsTSwyREFBQSxDQUFDNkwseURBQVU7SUFBQ3FELGVBQWUsRUFBQyxRQUFRO0lBQUNFLFFBQVEsRUFBRXZCLFNBQVMsSUFBSU4sWUFBYTtJQUFDOEIsT0FBTyxFQUFFcEM7RUFBTSxHQUFFZixDQUFDLENBQUMsUUFBUSxDQUFDLENBQWMsQ0FDbEgsQ0FDSDtBQUVmLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdkZ3QztBQUMyQjtBQUN0QjtBQUNvQjtBQUNuQjtBQUd4QyxJQUFNdUQsY0FBYyxHQUFHLFNBQWpCQSxjQUFjQSxDQUFBdlAsSUFBQSxFQUE4QztFQUFBLElBQXpDd1AsWUFBWSxHQUFBeFAsSUFBQSxDQUFad1AsWUFBWTtJQUFFekMsS0FBSyxHQUFBL00sSUFBQSxDQUFMK00sS0FBSztJQUFFRCxjQUFjLEdBQUE5TSxJQUFBLENBQWQ4TSxjQUFjO0VBQy9ELElBQUFFLGVBQUEsR0FBWWYsNkRBQWMsQ0FBQyxVQUFVLENBQUM7SUFBL0JELENBQUMsR0FBQWdCLGVBQUEsQ0FBRGhCLENBQUM7O0VBRVI7RUFDQSxJQUFBeUQsV0FBQSxHQUEyQkgsa0VBQVUsRUFBRTtJQUFoQ0ksSUFBSSxHQUFBRCxXQUFBLENBQUpDLElBQUk7SUFBRUMsVUFBVSxHQUFBRixXQUFBLENBQVZFLFVBQVU7RUFFdkJQLGdEQUFTLENBQUMsWUFBTTtJQUNaLElBQUdNLElBQUksS0FBSyxLQUFLLEVBQUU7TUFDZkwsb0VBQWUsQ0FDWE8sUUFBUSxDQUFDQyxJQUFJLEdBQUcsV0FBVztNQUFFO01BQzdCN0QsQ0FBQyxDQUFDLHFDQUFxQyxDQUFDO01BQUU7TUFDMUNlLEtBQUssRUFBRSxDQUFFO01BQUEsQ0FDWjtJQUNMO0VBQ0osQ0FBQyxFQUFFLENBQUMyQyxJQUFJLENBQUMsQ0FBQztFQUdWLE9BQ0lBLElBQUksaUJBQ0E1UCwwREFBQTtJQUFLSyxTQUFTLEVBQUM7RUFBcUIsR0FDL0JxUCxZQUFZLGVBQ2IxUCwwREFBQTtJQUFJSyxTQUFTLEVBQUM7RUFBbUIsR0FBRTZMLENBQUMsQ0FBQyxhQUFhLENBQUMsQ0FBTSxlQUN6RGxNLDBEQUFBLENBQUM2TSx1REFBWTtJQUFDRyxjQUFjLEVBQUVBLGNBQWU7SUFBQ0MsS0FBSyxFQUFFQTtFQUFNLEVBQUcsQ0FFckU7QUFFVCxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2pDeUI7QUFDMkI7QUFDVTtBQUNTO0FBQ0U7QUFFbkUsSUFBTWtELG9CQUFvQixHQUFHLFNBQXZCQSxvQkFBb0JBLENBQUFqUSxJQUFBLEVBQW1CO0VBQUEsSUFBZDJPLFFBQVEsR0FBQTNPLElBQUEsQ0FBUjJPLFFBQVE7RUFDMUMsb0JBQ0k3TywwREFBQTtJQUFLSyxTQUFTLEVBQUM7RUFBb0IsR0FFM0J3TyxRQUFRLENBQUMxTyxNQUFNLGlCQUFJSCwwREFBQSxDQUFDQyw2RUFBaUI7SUFBQ0UsTUFBTSxFQUFFME8sUUFBUSxDQUFDMU87RUFBTyxFQUFHLEVBR2pFME8sUUFBUSxDQUFDdUIsT0FBTyxpQkFBSXBRLDBEQUFBLENBQUNrUSwrRUFBa0I7SUFBQ0UsT0FBTyxFQUFFdkIsUUFBUSxDQUFDdUI7RUFBUSxFQUFHLGVBRXpFcFEsMERBQUE7SUFBS0ssU0FBUyxFQUFDO0VBQW9CLGdCQUMvQkwsMERBQUE7SUFBS0ssU0FBUyxFQUFDO0VBQW1CLGdCQUM5QkwsMERBQUEsZUFBTzZPLFFBQVEsQ0FBQ3dCLFFBQVEsQ0FBUSxlQUNoQ3JRLDBEQUFBLGVBQU82TyxRQUFRLENBQUN5QixTQUFTLENBQVEsQ0FDL0IsQ0FDSixlQUNOdFEsMERBQUE7SUFBS0ssU0FBUyxFQUFDO0VBQWtCLGdCQUM3QkwsMERBQUE7SUFBS0ssU0FBUyxFQUFDO0VBQXdCLEdBQUV3TyxRQUFRLENBQUNuTyxLQUFLLENBQU8sZUFDOURWLDBEQUFBO0lBQUtLLFNBQVMsRUFBQztFQUEwQixHQUNwQ3dPLFFBQVEsQ0FBQ3BDLE9BQU8sQ0FDZixDQUNKLGVBQ056TSwwREFBQTtJQUFLSyxTQUFTLEVBQUM7RUFBZ0IsR0FFdkJ3TyxRQUFRLENBQUMwQixZQUFZLENBQUNDLEdBQUcsQ0FBQyxVQUFBQyxNQUFNO0lBQUEsT0FDNUJBLE1BQU0sQ0FBQ3ROLElBQUksS0FBSyxVQUFVLGdCQUV0Qm5ELDBEQUFBLENBQUNnUSwwREFBVTtNQUFDNU8sR0FBRyxFQUFFcVAsTUFBTSxDQUFDMUIsRUFBRztNQUFDMEIsTUFBTSxFQUFFQSxNQUFPO01BQUNDLFNBQVMsRUFBRTtJQUFLLEVBQUcsZ0JBRS9EMVEsMERBQUEsQ0FBQ2lRLG9FQUFlO01BQUM3TyxHQUFHLEVBQUVxUCxNQUFNLENBQUMxQixFQUFHO01BQUMwQixNQUFNLEVBQUVBLE1BQU87TUFBQ0UsWUFBWSxFQUFFO0lBQU0sRUFBRztFQUFBLENBQy9FLENBQUMsRUFHRjlCLFFBQVEsQ0FBQytCLFdBQVcsQ0FBQ0osR0FBRyxDQUFDLFVBQUFDLE1BQU07SUFBQSxvQkFBSXpRLDBEQUFBLENBQUNnUSwwREFBVTtNQUFDNU8sR0FBRyxFQUFFcVAsTUFBTSxDQUFDMUIsRUFBRztNQUFDMEIsTUFBTSxFQUFFQSxNQUFPO01BQUNDLFNBQVMsRUFBRTtJQUFLLEVBQUc7RUFBQSxFQUFDLENBRXJHLENBQ0o7QUFFZCxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMzQ3dEO0FBQytCO0FBQ3BDO0FBQ3dCO0FBQ1Y7QUFDakI7QUFDYTtBQUNMO0FBQ1Y7QUFFeEMsSUFBTVMsZ0JBQWdCLEdBQUcsU0FBbkJBLGdCQUFnQkEsQ0FBQSxFQUFTO0VBQ2xDLElBQUFqRSxlQUFBLEdBQWtCZiw4REFBYyxDQUFDLFVBQVUsQ0FBQztJQUFyQ0QsQ0FBQyxHQUFBZ0IsZUFBQSxDQUFEaEIsQ0FBQztJQUFFa0YsSUFBSSxHQUFBbEUsZUFBQSxDQUFKa0UsSUFBSTtFQUVkLElBQUFDLGFBQUEsR0FBOEJMLDZFQUFZLENBQUMsS0FBSyxDQUFDO0lBQUFNLGNBQUEsR0FBQXRILGNBQUEsQ0FBQXFILGFBQUE7SUFBMUNFLE1BQU0sR0FBQUQsY0FBQTtJQUFFRSxJQUFJLEdBQUFGLGNBQUE7SUFBRXJFLEtBQUssR0FBQXFFLGNBQUE7RUFDMUIsSUFBQUcsbUJBQUEsR0FBOENYLHlGQUFrQixDQUFDLEdBQUcsR0FBQ00sSUFBSSxDQUFDTSxRQUFRLEdBQUMsb0JBQW9CLENBQUM7SUFBQUMsb0JBQUEsR0FBQTNILGNBQUEsQ0FBQXlILG1CQUFBO0lBQWpHRyxPQUFPLEdBQUFELG9CQUFBO0lBQUU5QyxRQUFRLEdBQUE4QyxvQkFBQTtJQUFFOUQsU0FBUyxHQUFBOEQsb0JBQUE7SUFBRTlNLEtBQUssR0FBQThNLG9CQUFBO0VBRTFDckMsaURBQVMsQ0FBQyxZQUFNO0lBQ1osSUFBR1EsUUFBUSxDQUFDQyxJQUFJLENBQUM4QixRQUFRLENBQUMsV0FBVyxDQUFDLEVBQUM7TUFDbkMsSUFBTTlDLEVBQUUsR0FBR2UsUUFBUSxDQUFDQyxJQUFJLENBQUMrQixLQUFLLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDO01BQzlDLElBQUcvQyxFQUFFLEVBQUU7UUFDSHlDLElBQUksRUFBRTtRQUNOSSxPQUFPLENBQUM7VUFBQzdDLEVBQUUsRUFBRUE7UUFBRSxDQUFDLENBQUM7TUFDckI7SUFDSjtFQUNKLENBQUMsRUFBRSxFQUFFLENBQUM7RUFFTk8saURBQVMsQ0FBQyxZQUFNO0lBQ1osSUFBR3pLLEtBQUssRUFBRTtNQUNOb0ksS0FBSyxFQUFFO0lBQ1g7RUFDSixDQUFDLEVBQUUsQ0FBQ3BJLEtBQUssQ0FBQyxDQUFDO0VBRVhrTixPQUFPLENBQUNDLEdBQUcsQ0FBQ1QsTUFBTSxDQUFDO0VBRW5CLG9CQUNJdlIsMkRBQUEsQ0FBQytRLG9EQUFLO0lBQUM3QixlQUFlLEVBQUMscUNBQXFDO0lBQUNxQyxNQUFNLEVBQUVBO0VBQU8sZ0JBQ3hFdlIsMkRBQUE7SUFBS0ssU0FBUyxFQUFDO0VBQXNCLEdBRTdCLENBQUN3TyxRQUFRLGdCQUFHN08sMkRBQUEsQ0FBQ2tSLGlEQUFNO0lBQUNoQyxlQUFlLEVBQUM7RUFBYSxFQUFHLGdCQUFFbFAsMkRBQUEsQ0FBQ21RLHdFQUFvQjtJQUFDdEIsUUFBUSxFQUFFQTtFQUFTLEVBQUcsZUFFdEc3TywyREFBQSxDQUFDNkwseURBQVU7SUFBQ3dELE9BQU8sRUFBRXBDLEtBQU07SUFBQ2lDLGVBQWUsRUFBQztFQUFVLEdBQUVoRCxDQUFDLENBQUMsT0FBTyxDQUFDLENBQWMsQ0FDOUUsQ0FDRjtBQUVoQixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM1QzBEO0FBQ2M7QUFDWDtBQUNaO0FBQ0k7QUFDTDtBQUNPO0FBQ1Y7QUFDSTtBQUN5QztBQUM1QztBQUNPO0FBRy9DLElBQU1xRyxRQUFRLEdBQUcsU0FBWEEsUUFBUUEsQ0FBQXJTLElBQUEsRUFBNkQ7RUFBQSxJQUF4RHdQLFlBQVksR0FBQXhQLElBQUEsQ0FBWndQLFlBQVk7SUFBRThDLGtCQUFrQixHQUFBdFMsSUFBQSxDQUFsQnNTLGtCQUFrQjtJQUFFQyxnQkFBZ0IsR0FBQXZTLElBQUEsQ0FBaEJ1UyxnQkFBZ0I7RUFDeEUsSUFBQXZGLGVBQUEsR0FBa0JmLDhEQUFjLENBQUMsVUFBVSxDQUFDO0lBQXJDRCxDQUFDLEdBQUFnQixlQUFBLENBQURoQixDQUFDO0lBQUVrRixJQUFJLEdBQUFsRSxlQUFBLENBQUprRSxJQUFJO0VBRWQsSUFBQXpELFNBQUEsR0FBOEJqQyxnREFBUSxDQUFDO01BQ25DZ0gsSUFBSSxFQUFFLENBQUM7TUFDUEMsS0FBSyxFQUFFLEVBQUU7TUFDVEMsQ0FBQyxFQUFFLEVBQUU7TUFDTEMsSUFBSSxFQUFFO0lBQ1YsQ0FBQyxDQUFDO0lBQUFqRixVQUFBLEdBQUE1RCxjQUFBLENBQUEyRCxTQUFBO0lBTEttRixPQUFPLEdBQUFsRixVQUFBO0lBQUVtRixVQUFVLEdBQUFuRixVQUFBO0VBTzFCLElBQU1vRixjQUFjLEdBQUcsU0FBakJBLGNBQWNBLENBQUk1UixHQUFHLEVBQUVFLEtBQUssRUFBSztJQUNuQ3lSLFVBQVUsQ0FBQyxVQUFBRCxPQUFPO01BQUEsSUFBQUcsY0FBQTtNQUFBLE9BQUFDLGFBQUEsQ0FBQUEsYUFBQSxLQUNYSixPQUFPLFFBQUFHLGNBQUEsT0FBQUUsZUFBQSxDQUFBRixjQUFBLEVBQ1Q3UixHQUFHLEVBQUdFLEtBQUssR0FBQTZSLGVBQUEsQ0FBQUYsY0FBQSxVQUNOLENBQUMsR0FBQUEsY0FBQTtJQUFBLENBQ1QsQ0FBQztFQUNQLENBQUM7O0VBRUE7RUFDQSxJQUFNRyxXQUFXLEdBQUduQiw4Q0FBTSxDQUFDLElBQUksQ0FBQztFQUNoQyxJQUFNb0IsZ0JBQWdCLEdBQUcsU0FBbkJBLGdCQUFnQkEsQ0FBQSxFQUFTO0lBQzVCQyxVQUFVLENBQUMsWUFBTTtNQUNiLElBQU1DLENBQUMsR0FBR0gsV0FBVyxDQUFDSSxPQUFPLENBQUNDLHFCQUFxQixFQUFFLENBQUNGLENBQUM7TUFDdkRHLE1BQU0sQ0FBQ0MsUUFBUSxDQUFDLENBQUMsRUFBRUosQ0FBQyxHQUFJRyxNQUFNLENBQUNFLFdBQVcsR0FBRyxDQUFFLENBQUM7SUFDcEQsQ0FBQyxFQUFFLENBQUMsQ0FBQztFQUNSLENBQUM7RUFHRixJQUFBQyxtQkFBQSxHQVVJdkIsK0ZBQWtCLENBQ2xCRSxrQkFBa0IsRUFDbEIsR0FBRyxHQUFFcEIsSUFBSSxDQUFDTSxRQUFRLEdBQUUsb0JBQW9CLEVBQ3hDLEdBQUcsR0FBQ04sSUFBSSxDQUFDTSxRQUFRLEdBQUMsc0JBQXNCLEVBQ3hDZSxnQkFBZ0IsRUFDaEIsR0FBRyxHQUFDckIsSUFBSSxDQUFDTSxRQUFRLEdBQUMsNkJBQTZCLEVBQy9Db0IsT0FBTyxFQUNQQyxVQUFVLEVBQ1ZNLGdCQUFnQixDQUNuQjtJQWxCRzdPLE1BQU0sR0FBQXFQLG1CQUFBLENBQU5yUCxNQUFNO0lBQ05zUCxZQUFZLEdBQUFELG1CQUFBLENBQVpDLFlBQVk7SUFDWkMsVUFBVSxHQUFBRixtQkFBQSxDQUFWRSxVQUFVO0lBQ1ZDLFlBQVksR0FBQUgsbUJBQUEsQ0FBWkcsWUFBWTtJQUNaQyxVQUFVLEdBQUFKLG1CQUFBLENBQVZJLFVBQVU7SUFDVkMsWUFBWSxHQUFBTCxtQkFBQSxDQUFaSyxZQUFZO0lBQ1pyRyxTQUFTLEdBQUFnRyxtQkFBQSxDQUFUaEcsU0FBUztJQUNUc0csZ0JBQWdCLEdBQUFOLG1CQUFBLENBQWhCTSxnQkFBZ0I7SUFDaEJDLFdBQVcsR0FBQVAsbUJBQUEsQ0FBWE8sV0FBVzs7RUFZZjtFQUNBLElBQUEvQyxhQUFBLEdBQTBDTCw2RUFBWSxDQUFDLEtBQUssQ0FBQztJQUFBTSxjQUFBLEdBQUF0SCxjQUFBLENBQUFxSCxhQUFBO0lBQXREZ0QsVUFBVSxHQUFBL0MsY0FBQTtJQUFFZ0QsUUFBUSxHQUFBaEQsY0FBQTtJQUFFaUQsU0FBUyxHQUFBakQsY0FBQTtFQUV0Q2hDLGlEQUFTLENBQUMsWUFBTTtJQUNaLElBQUdRLFFBQVEsQ0FBQ0MsSUFBSSxDQUFDOEIsUUFBUSxDQUFDLFdBQVcsQ0FBQyxFQUFFO01BQ3BDeUMsUUFBUSxFQUFFO0lBQ2Q7RUFDSixDQUFDLEVBQUUsRUFBRSxDQUFDO0VBR04sb0JBQ0l0VSwyREFBQSxDQUFBQSx3REFBQSxxQkFDSUEsMkRBQUEsQ0FBQ21SLGdFQUFnQixPQUFHLEVBRWhCaUQsV0FBVyxpQkFDUHBVLDJEQUFBO0lBQUt5VSxHQUFHLEVBQUVyQixXQUFZO0lBQUMvUyxTQUFTLEVBQUM7RUFBeUIsZ0JBQ3RETCwyREFBQSxDQUFDbVMscURBQU87SUFBQ1MsQ0FBQyxFQUFFRSxPQUFPLENBQUNGLENBQUU7SUFBQzhCLElBQUksRUFBRSxTQUFBQSxLQUFBOUIsQ0FBQztNQUFBLE9BQUlJLGNBQWMsQ0FBQyxHQUFHLEVBQUVKLENBQUMsQ0FBQztJQUFBO0VBQUMsR0FDcEQxRyxDQUFDLENBQUMsdUJBQXVCLENBQUMsQ0FDckIsZUFDVmxNLDJEQUFBO0lBQUtLLFNBQVMsRUFBQztFQUFxQixnQkFDaENMLDJEQUFBLENBQUNvUywyREFBVTtJQUFDckQsRUFBRSxFQUFDLFNBQVM7SUFBQzhELElBQUksRUFBRUMsT0FBTyxDQUFDRCxJQUFLO0lBQUM4QixRQUFRLEVBQUUzQjtFQUFlLEVBQUcsQ0FDdkUsQ0FFYixlQUVMaFQsMkRBQUEsQ0FBQ2tTLGlFQUFhO0lBQ1ZyRSxTQUFTLEVBQUVBLFNBQVU7SUFDckJySixNQUFNLEVBQUVBLE1BQU87SUFDZm9RLFVBQVUsRUFBRVQ7RUFBaUIsR0FHekIzUCxNQUFNLElBQUlBLE1BQU0sQ0FBQ3FRLEtBQUssQ0FBQ3JFLEdBQUcsQ0FBQyxVQUFBM0IsUUFBUTtJQUFBLG9CQUMvQjdPLDJEQUFBLENBQUNxUyx3REFBWTtNQUNUalIsR0FBRyxFQUFFeU4sUUFBUSxDQUFDRSxFQUFHO01BQ2pCRixRQUFRLEVBQUVBLFFBQVM7TUFDbkJpRixZQUFZLEVBQUVBLFlBQWE7TUFDM0JnQixjQUFjLEVBQUViLFVBQVc7TUFDM0JELFlBQVksRUFBRUEsWUFBYTtNQUMzQkUsWUFBWSxFQUFFQSxZQUFhO01BQzNCeEUsWUFBWSxFQUFFQTtJQUFhLEVBQzdCO0VBQUEsQ0FDTCxDQUFDLENBRU0sZUFFaEIxUCwyREFBQSxDQUFDK1Esb0RBQUs7SUFBQzdCLGVBQWUsRUFBQyxxQ0FBcUM7SUFBQ3FDLE1BQU0sRUFBRThDLFVBQVc7SUFBQ3BILEtBQUssRUFBRXNIO0VBQVUsZ0JBQzlGdlUsMkRBQUEsQ0FBQ3lQLDREQUFjO0lBQ1h6QyxjQUFjLEVBQUUrRyxVQUFXO0lBQzNCOUcsS0FBSyxFQUFFc0gsU0FBVTtJQUNqQjdFLFlBQVksRUFBRUE7RUFBYSxFQUM3QixDQUNFLGVBQ1IxUCwyREFBQSxDQUFDNkwseURBQVU7SUFBQ3FELGVBQWUsRUFBQywyQ0FBMkM7SUFBQ0csT0FBTyxFQUFFaUY7RUFBUyxHQUNyRnBJLENBQUMsQ0FBQyxzQkFBc0IsQ0FBQyxDQUNqQixDQUNkO0FBRVgsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2Fzc2V0cy9VSS9TaG93U3ViU2VjdGlvbnMvUHVibGljYXRpb24vRm9ybVRvcENhcmQvRm9ybVRvcFJlY2lwZUNhcmQuanN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9VSS9TaG93U3ViU2VjdGlvbnMvUHVibGljYXRpb24vUXVlc3Rpb24vUXVlc3Rpb25DcmVhdGUvUXVlc3Rpb25Gb3JtL2luZGV4LmpzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvVUkvU2hvd1N1YlNlY3Rpb25zL1B1YmxpY2F0aW9uL1F1ZXN0aW9uL1F1ZXN0aW9uQ3JlYXRlL2luZGV4LmpzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvVUkvU2hvd1N1YlNlY3Rpb25zL1B1YmxpY2F0aW9uL1F1ZXN0aW9uL1Nob3dVc2VyUXVlc3Rpb24vU2hvd1VzZXJRdWVzdGlvbkNhcmQuanN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9VSS9TaG93U3ViU2VjdGlvbnMvUHVibGljYXRpb24vUXVlc3Rpb24vU2hvd1VzZXJRdWVzdGlvbi9pbmRleC5qc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL1VJL1Nob3dTdWJTZWN0aW9ucy9QdWJsaWNhdGlvbi9RdWVzdGlvbi9pbmRleC5qc3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuXHJcbmV4cG9ydCBjb25zdCBGb3JtVG9wUmVjaXBlQ2FyZCA9ICh7cmVjaXBlfSkgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJldmlldy1mb3JtLXByb2R1Y3QtY2FyZFwiPlxyXG4gICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cInJldmlldy1mb3JtLXByb2R1Y3QtaW1nXCIgc3JjPXtyZWNpcGUucGljdHVyZS5wYXRofSBhbHQ9e3JlY2lwZS5waWN0dXJlLmFsdH0gLz5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZXZpZXctZm9ybS1wcm9kdWN0LXRleHRcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmV2aWV3LWZvcm0tcHJvZHVjdC1kZXNpZ25hdGlvblwiPntyZWNpcGUudGl0bGV9PC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59IiwiaW1wb3J0IFJlYWN0LCB7IHVzZUNvbnRleHQsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyB1c2VGb3JtV2l0aFZhbGlkYXRpb24gfSBmcm9tICcuLi8uLi8uLi8uLi8uLi8uLi9DdXN0b21Ib29rL2Zvcm0vdXNlRm9ybVdpdGhWYWxpZGF0aW9uJztcclxuaW1wb3J0ICogYXMgeXVwIGZyb20gXCJ5dXBcIlxyXG5pbXBvcnQgeyBGb3JtQnV0dG9uIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vRm9ybS9Gb3JtQnV0dG9uJztcclxuaW1wb3J0IHsgQ2hlY2tJY29uIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vSWNvbi9DaGVja0ljb24nO1xyXG5pbXBvcnQgeyBUZXh0RmllbGQgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9Gb3JtL1RleHRGaWVsZCc7XHJcbmltcG9ydCB7IEFwaUVycm9yIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vLi4vZnVuY3Rpb25zL2FwaSc7XHJcbmltcG9ydCB7IFNldFN1Ym1pdEluZm9Db250ZXh0IH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vLi4vQ29udGV4dC9TaG93U3ViU2VjdGlvbnNDb250ZXh0JztcclxuaW1wb3J0IHsgdCB9IGZyb20gJ2kxOG5leHQnO1xyXG5pbXBvcnQgeyB1c2VUcmFuc2xhdGlvbiB9IGZyb20gJ3JlYWN0LWkxOG5leHQnO1xyXG5cclxuXHJcbmNvbnN0IHNjaGVtYSA9IHl1cFxyXG4gIC5vYmplY3Qoe1xyXG4gICAgdGl0bGU6IHl1cC5zdHJpbmcoKS5tYXgoMTAwLCB0KCdhc3NlcnQubGVuZ3RoLm1heCcsIHtuczogJ2NvbnN0cmFpbnRzJywgbWF4OiAxMDB9KSkucmVxdWlyZWQoKSxcclxuICAgIGNvbnRlbnQ6IHl1cC5zdHJpbmcoKS5tYXgoNTAwLCB0KCdhc3NlcnQubGVuZ3RoLm1heCcsIHtuczogJ2NvbnN0cmFpbnRzJywgbWF4OiA1MDB9KSkucmVxdWlyZWQoKSxcclxuICAgIGFncmVlVGVybXM6IHl1cC5ib29sKCkuaXNUcnVlKHQoJ2Fzc2VydC5jaGVja2JveC50cnVlJywge25zOiAnY29uc3RyYWludHMnfSkpLnJlcXVpcmVkKClcclxuICB9KVxyXG4gIC5yZXF1aXJlZCgpXHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IFF1ZXN0aW9uRm9ybSA9ICh7Y3JlYXRlUXVlc3Rpb24sIGNsb3NlfSkgPT4ge1xyXG4gICAgY29uc3Qge3R9ID0gdXNlVHJhbnNsYXRpb24oJ21lc3NhZ2VzJyk7XHJcblxyXG4gICAgY29uc3QgeyByZWdpc3RlciwgaGFuZGxlU3VibWl0LCBlcnJvcnMsIGlzU3VibWl0dGluZywgY29udHJvbCwgc2V0RXJyb3IgfSA9IHVzZUZvcm1XaXRoVmFsaWRhdGlvbihzY2hlbWEsIHtcclxuICAgICAgICB0aXRsZTogJycsXHJcbiAgICAgICAgY29udGVudDogJycsXHJcbiAgICAgICAgYWdyZWVUZXJtczogZmFsc2VcclxuICAgIH0pO1xyXG4gICAgXHJcbiAgICBjb25zdCBzZXRTdWJtaXRJbmZvID0gdXNlQ29udGV4dChTZXRTdWJtaXRJbmZvQ29udGV4dCk7XHJcbiAgICBjb25zdCBbaXNMb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgICBjb25zdCBvblN1Ym1pdCA9IGFzeW5jIGZvcm1EYXRhID0+IHtcclxuICAgICAgICBpZihpc0xvYWRpbmcpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBzZXRMb2FkaW5nKHRydWUpO1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGF3YWl0IGNyZWF0ZVF1ZXN0aW9uKGZvcm1EYXRhKTtcclxuICAgICAgICAgICAgc2V0U3VibWl0SW5mbyh7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiAnc3VjY2VzcycsXHJcbiAgICAgICAgICAgICAgICBtZXNzYWdlOiB0KCdzdWNjZXNzLnN1Ym1pdC5xdWVzdGlvbicpXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBjbG9zZSgpO1xyXG4gICAgICAgIH0gY2F0Y2goZSkge1xyXG4gICAgICAgICAgICBpZihlIGluc3RhbmNlb2YgQXBpRXJyb3IpIHtcclxuICAgICAgICAgICAgICAgIE9iamVjdC5lbnRyaWVzKGUuZXJyb3JzKS5mb3JFYWNoKChbZmllbGQsIG1lc3NhZ2VdKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0RXJyb3IoZmllbGQsIHt0eXBlOiAnY3VzdG9tJywgbWVzc2FnZTogbWVzc2FnZX0pO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBzZXRTdWJtaXRJbmZvKHtcclxuICAgICAgICAgICAgICAgICAgICB0eXBlOiAnZGFuZ2VyJyxcclxuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiB0KCdlcnJvci50ZW1wb3JhcnlfZmFpbHVyZScpXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXQob25TdWJtaXQpfSBjbGFzc05hbWU9XCJyZXZpZXctZm9ybSBib3gtZm9ybVwiPlxyXG5cclxuICAgICAgICAgICAgPFRleHRGaWVsZCBjb250cm9sPXtjb250cm9sfSBuYW1lPVwidGl0bGVcIiBlcnJvcj17ZXJyb3JzLnRpdGxlPy5tZXNzYWdlfSBtYXhMZW5ndGg9ezEwMH0+e3QoJ3F1ZXN0aW9uX3RpdGxlJyl9ICo8L1RleHRGaWVsZD5cclxuXHJcbiAgICAgICAgICAgIDxUZXh0RmllbGQgdHlwZT1cInRleHRhcmVhXCIgY29udHJvbD17Y29udHJvbH0gbmFtZT1cImNvbnRlbnRcIiBlcnJvcj17ZXJyb3JzLnF1ZXN0aW9uPy5tZXNzYWdlfSBtYXhMZW5ndGg9ezUwMH0+XHJcbiAgICAgICAgICAgICAgICB7dCgncXVlc3Rpb24nKX0gKlxyXG4gICAgICAgICAgICA8L1RleHRGaWVsZD5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXsnY2hlY2tib3gtZ3JvdXAnICsgKGVycm9ycy5hZ3JlZVRlcm1zID8gJyBpcy1pbnZhbGlkJzogJycpfT5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCB7Li4ucmVnaXN0ZXIoJ2FncmVlVGVybXMnKX0gY2xhc3NOYW1lPVwiZm9ybS1jaGVja2JveFwiIGlkPVwiYWdyZWVUZXJtc1wiIHR5cGU9XCJjaGVja2JveFwiIC8+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImFncmVlVGVybXNcIiBjbGFzc05hbWU9XCJmb3JtLWxhYmVsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjdXN0b20tY2hlY2tib3hcIiByb2xlPVwiY2hlY2tib3hcIiBhcmlhLWxhYmVsbGVkYnk9XCJjaGVja2JveC1sYWJlbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Q2hlY2tJY29uIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gaWQ9XCJjaGVja2JveC1sYWJlbFwiPnt0KCdhZ3JlZV90ZXJtc19vZl91c2UnKX0gKjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgZXJyb3JzLmFncmVlVGVybXMgJiYgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWVycm9yXCI+e2Vycm9ycy5hZ3JlZVRlcm1zLm1lc3NhZ2V9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN1Ym1pdC1ncm91cCBkb3VibGVcIj5cclxuICAgICAgICAgICAgICAgIDxGb3JtQnV0dG9uIGFkZGl0aW9uYWxDbGFzcz1cImJvcmRlYXV4XCIgbG9hZGluZz17aXNMb2FkaW5nIHx8IGlzU3VibWl0dGluZ30+e3QoJ3N1Ym1pdC5wdWJsaXNoJyl9PC9Gb3JtQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPEZvcm1CdXR0b24gYWRkaXRpb25hbENsYXNzPVwiY2FuY2VsXCIgZGlzYWJsZWQ9e2lzTG9hZGluZyB8fCBpc1N1Ym1pdHRpbmd9IG9uQ2xpY2s9e2Nsb3NlfT57dCgnY2FuY2VsJyl9PC9Gb3JtQnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Zvcm0+XHJcbiAgICApXHJcbn0iLCJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyByZWRpcmVjdFRvTG9naW4gfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9mdW5jdGlvbnMvc2VjdXJpdHknO1xyXG5pbXBvcnQgeyBRdWVzdGlvbkZvcm0gfSBmcm9tICcuL1F1ZXN0aW9uRm9ybSc7XHJcbmltcG9ydCB7IHVzZUdldFVzZXIgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9DdXN0b21Ib29rL3VzZUdldFVzZXInO1xyXG5pbXBvcnQgeyB1c2VUcmFuc2xhdGlvbiB9IGZyb20gJ3JlYWN0LWkxOG5leHQnO1xyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBRdWVzdGlvbkNyZWF0ZSA9ICh7b3duZXJUb3BDYXJkLCBjbG9zZSwgY3JlYXRlUXVlc3Rpb259KSA9PiB7XHJcbiAgICBjb25zdCB7dH0gPSB1c2VUcmFuc2xhdGlvbignbWVzc2FnZXMnKTtcclxuXHJcbiAgICAvL29uIHbDqXJpZmllIHF1J3VuIHVzZXIgZXN0IGNvbm5lY3TDqVxyXG4gICAgY29uc3Qge3VzZXIsIHVwZGF0ZVVzZXJ9ID0gdXNlR2V0VXNlcigpO1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgaWYodXNlciA9PT0gZmFsc2UpIHtcclxuICAgICAgICAgICAgcmVkaXJlY3RUb0xvZ2luKFxyXG4gICAgICAgICAgICAgICAgbG9jYXRpb24uaHJlZiArICcjcXVlc3Rpb24nLCAvL3RhcmdldFBhdGhcclxuICAgICAgICAgICAgICAgIHQoJ3dhcm5pbmcubmVlZF9sb2dpbl90b19wb3N0X3F1ZXN0aW9uJyksIC8vbWVzc2FnZVxyXG4gICAgICAgICAgICAgICAgY2xvc2UoKSAgLy9vbkVycm9yIG9uIGZlcm1lXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfVxyXG4gICAgfSwgW3VzZXJdKTtcclxuXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICB1c2VyICYmIChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZXZpZXctZm9ybS13cmFwcGVyXCI+XHJcbiAgICAgICAgICAgICAgICB7b3duZXJUb3BDYXJkfVxyXG4gICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInJldmlldy1mb3JtLXRpdGxlXCI+e3QoJ215X3F1ZXN0aW9uJyl9PC9oMz5cclxuICAgICAgICAgICAgICAgIDxRdWVzdGlvbkZvcm0gY3JlYXRlUXVlc3Rpb249e2NyZWF0ZVF1ZXN0aW9ufSBjbG9zZT17Y2xvc2V9IC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIClcclxuICAgIClcclxufSIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IEFuc3dlckNhcmQgfSBmcm9tICcuLi8uLi9BbnN3ZXIvQW5zd2VyQ2FyZCc7XHJcbmltcG9ydCB7IEltcG9ydGFudEFuc3dlciB9IGZyb20gJy4uLy4uL0Fuc3dlci9JbXBvcnRhbnRBbnN3ZXInO1xyXG5pbXBvcnQgeyBGb3JtVG9wUmVjaXBlQ2FyZCB9IGZyb20gJy4uLy4uL0Zvcm1Ub3BDYXJkL0Zvcm1Ub3BSZWNpcGVDYXJkJztcclxuaW1wb3J0IHsgRm9ybVRvcFByb2R1Y3RDYXJkIH0gZnJvbSAnLi4vLi4vRm9ybVRvcENhcmQvRm9ybVRvcFByb2R1Y3RDYXJkJztcclxuXHJcbmV4cG9ydCBjb25zdCBTaG93VXNlclF1ZXN0aW9uQ2FyZCA9ICh7cXVlc3Rpb259KSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtc3VtbWFyeS1jYXJkXCI+XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHF1ZXN0aW9uLnJlY2lwZSAmJiA8Rm9ybVRvcFJlY2lwZUNhcmQgcmVjaXBlPXtxdWVzdGlvbi5yZWNpcGV9IC8+XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcXVlc3Rpb24ucHJvZHVjdCAmJiA8Rm9ybVRvcFByb2R1Y3RDYXJkIHByb2R1Y3Q9e3F1ZXN0aW9uLnByb2R1Y3R9IC8+XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZXZpZXctY2FyZC1oZWFkZXJcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmV2aWV3LWNhcmQtaW5mb3NcIj5cclxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj57cXVlc3Rpb24uZnVsbE5hbWV9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPntxdWVzdGlvbi5jcmVhdGVkQXR9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJldmlldy1jYXJkLWJvZHlcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmV2aWV3LWNhcmQtYm9keS10aXRsZVwiPntxdWVzdGlvbi50aXRsZX08L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmV2aWV3LWNhcmQtYm9keS1jb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgICAgICAge3F1ZXN0aW9uLmNvbnRlbnR9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicWEtY2FyZC1ib3R0b21cIj5cclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBxdWVzdGlvbi5maXJzdEFuc3dlcnMubWFwKGFuc3dlciA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFuc3dlci50eXBlID09PSAnY3VzdG9tZXInXHJcbiAgICAgICAgICAgICAgICAgICAgICAgID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBbnN3ZXJDYXJkIGtleT17YW5zd2VyLmlkfSBhbnN3ZXI9e2Fuc3dlcn0gaXNTdW1tYXJ5PXt0cnVlfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW1wb3J0YW50QW5zd2VyIGtleT17YW5zd2VyLmlkfSBhbnN3ZXI9e2Fuc3dlcn0gcmVtb3ZlSXNPcGVuPXtmYWxzZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICApKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHF1ZXN0aW9uLnJlc3RBbnN3ZXJzLm1hcChhbnN3ZXIgPT4gPEFuc3dlckNhcmQga2V5PXthbnN3ZXIuaWR9IGFuc3dlcj17YW5zd2VyfSBpc1N1bW1hcnk9e3RydWV9IC8+KVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufSIsImltcG9ydCBSZWFjdCwgeyBtZW1vLCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyB1c2VDb250cm9sbGVkRmV0Y2ggfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9DdXN0b21Ib29rL2ZldGNoL3VzZUNvbnRyb2xsZWRGZXRjaCc7XHJcbmltcG9ydCB7IE1vZGFsIH0gZnJvbSAnLi4vLi4vLi4vLi4vQ29udGFpbmVyL01vZGFsJztcclxuaW1wb3J0IHsgdXNlT3BlblN0YXRlIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vQ3VzdG9tSG9vay9zdGF0ZS91c2VPcGVuU3RhdGUnO1xyXG5pbXBvcnQgeyBRdWVzdGlvblN1bW1hcnkgfSBmcm9tICcuLi9RdWVzdGlvbkNhcmQvUXVlc3Rpb25TdW1tYXJ5JztcclxuaW1wb3J0IHsgTG9hZGVyIH0gZnJvbSAnLi4vLi4vLi4vLi4vSWNvbi9Mb2FkZXInO1xyXG5pbXBvcnQgeyBTaG93VXNlclF1ZXN0aW9uQ2FyZCB9IGZyb20gJy4vU2hvd1VzZXJRdWVzdGlvbkNhcmQnO1xyXG5pbXBvcnQgeyBGb3JtQnV0dG9uIH0gZnJvbSAnLi4vLi4vLi4vLi4vRm9ybS9Gb3JtQnV0dG9uJztcclxuaW1wb3J0IHsgdXNlVHJhbnNsYXRpb24gfSBmcm9tICdyZWFjdC1pMThuZXh0JztcclxuXHJcbmV4cG9ydCBjb25zdCBTaG93VXNlclF1ZXN0aW9uID0gKCkgPT4ge1xyXG4gICAgY29uc3Qge3QsIGkxOG59ID0gdXNlVHJhbnNsYXRpb24oJ21lc3NhZ2VzJyk7XHJcblxyXG4gICAgY29uc3QgW2lzT3Blbiwgb3BlbiwgY2xvc2VdID0gdXNlT3BlblN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IFtkb0ZldGNoLCBxdWVzdGlvbiwgaXNMb2FkaW5nLCBlcnJvcl0gPSB1c2VDb250cm9sbGVkRmV0Y2goJy8nK2kxOG4ubGFuZ3VhZ2UrJy9hcGkvcXVlc3Rpb24vc2hvdycpO1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgaWYobG9jYXRpb24uaHJlZi5pbmNsdWRlcygnI3F1LXNob3ctJykpe1xyXG4gICAgICAgICAgICBjb25zdCBpZCA9IGxvY2F0aW9uLmhyZWYuc3BsaXQoJyNxdS1zaG93LScpWzFdO1xyXG4gICAgICAgICAgICBpZihpZCkge1xyXG4gICAgICAgICAgICAgICAgb3BlbigpO1xyXG4gICAgICAgICAgICAgICAgZG9GZXRjaCh7aWQ6IGlkfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9LCBbXSk7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBpZihlcnJvcikge1xyXG4gICAgICAgICAgICBjbG9zZSgpO1xyXG4gICAgICAgIH1cclxuICAgIH0sIFtlcnJvcl0pO1xyXG5cclxuICAgIGNvbnNvbGUubG9nKGlzT3Blbik7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8TW9kYWwgYWRkaXRpb25hbENsYXNzPVwicmV2aWV3LWZvcm0tbW9kYWwgY2VudGVyLWZvcm0tbW9kYWxcIiBpc09wZW49e2lzT3Blbn0+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmV2aWV3LW1vZGFsLXN1bW1hcnlcIj5cclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAhcXVlc3Rpb24gPyA8TG9hZGVyIGFkZGl0aW9uYWxDbGFzcz1cIm1haW4tbG9hZGVyXCIgLz46IDxTaG93VXNlclF1ZXN0aW9uQ2FyZCBxdWVzdGlvbj17cXVlc3Rpb259IC8+XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICA8Rm9ybUJ1dHRvbiBvbkNsaWNrPXtjbG9zZX0gYWRkaXRpb25hbENsYXNzPVwiYm9yZGVhdXhcIj57dCgnY2xvc2UnKX08L0Zvcm1CdXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvTW9kYWw+XHJcbiAgICApXHJcbn07IiwiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgdXNlT3BlblN0YXRlIH0gZnJvbSAnLi4vLi4vLi4vLi4vQ3VzdG9tSG9vay9zdGF0ZS91c2VPcGVuU3RhdGUnO1xyXG5pbXBvcnQgeyBTZWFyY2hSZXN1bHRzIH0gZnJvbSAnLi4vLi4vLi4vU2VhcmNoL1NlYXJjaFJlc3VsdHMnO1xyXG5pbXBvcnQgeyBRRmlsdGVyIH0gZnJvbSAnLi4vLi4vLi4vU2VhcmNoL1FGaWx0ZXInO1xyXG5pbXBvcnQgeyBGb3JtQnV0dG9uIH0gZnJvbSAnLi4vLi4vLi4vRm9ybS9Gb3JtQnV0dG9uJztcclxuaW1wb3J0IHsgTW9kYWwgfSBmcm9tICcuLi8uLi8uLi9Db250YWluZXIvTW9kYWwnO1xyXG5pbXBvcnQgeyBMYW5nRmlsdGVyIH0gZnJvbSAnLi4vLi4vLi4vU2VhcmNoL0xhbmdGaWx0ZXInO1xyXG5pbXBvcnQgeyBRdWVzdGlvbkNhcmQgfSBmcm9tICcuL1F1ZXN0aW9uQ2FyZCc7XHJcbmltcG9ydCB7IFF1ZXN0aW9uQ3JlYXRlIH0gZnJvbSAnLi9RdWVzdGlvbkNyZWF0ZSc7XHJcbmltcG9ydCB7IHVzZVB1YmxpY2F0aW9uQ1JVRCB9IGZyb20gJy4uLy4uLy4uLy4uL0N1c3RvbUhvb2svcHVibGljYXRpb24vdXNlUHVibGljYXRpb25DUlVEJztcclxuaW1wb3J0IHsgdXNlVHJhbnNsYXRpb24gfSBmcm9tICdyZWFjdC1pMThuZXh0JztcclxuaW1wb3J0IHsgU2hvd1VzZXJRdWVzdGlvbiB9IGZyb20gJy4vU2hvd1VzZXJRdWVzdGlvbic7XHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IFF1ZXN0aW9uID0gKHtvd25lclRvcENhcmQsIGZldGNoQWxsRW50cnlwb2ludCwgY3JlYXRlRW50cnlwb2ludH0pID0+IHtcclxuICAgIGNvbnN0IHt0LCBpMThufSA9IHVzZVRyYW5zbGF0aW9uKCdtZXNzYWdlcycpO1xyXG4gICAgXHJcbiAgICBjb25zdCBbZmlsdGVycywgc2V0RmlsdGVyc10gPSB1c2VTdGF0ZSh7XHJcbiAgICAgICAgcGFnZTogMSxcclxuICAgICAgICBsaW1pdDogMTAsXHJcbiAgICAgICAgcTogJycsXHJcbiAgICAgICAgbGFuZzogJydcclxuICAgIH0pO1xyXG5cclxuICAgIGNvbnN0IHNldEZpbHRlclZhbHVlID0gKGtleSwgdmFsdWUpID0+IHtcclxuICAgICAgICBzZXRGaWx0ZXJzKGZpbHRlcnMgPT4gKHtcclxuICAgICAgICAgICAgLi4uZmlsdGVycyxcclxuICAgICAgICAgICAgW2tleV06IHZhbHVlLFxyXG4gICAgICAgICAgICBwYWdlOiAxIC8vIHF1YW5kIG9uIGNoYW5nZSB1biBmaWx0cmUgb24gZG9pdCByZW1ldHRyZSBsYSBwYWdlIHN5c3TDqW1hdGlxdWVtZW50IMOgIDFcclxuICAgICAgICB9KSk7XHJcbiAgICB9O1xyXG5cclxuICAgICAvL29uIHJlbmRlckNoYW5nZVxyXG4gICAgIGNvbnN0IGNvbnRyb2xzUmVmID0gdXNlUmVmKG51bGwpO1xyXG4gICAgIGNvbnN0IHNjcm9sbFRvQ29udHJvbHMgPSAoKSA9PiB7XHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHkgPSBjb250cm9sc1JlZi5jdXJyZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnk7XHJcbiAgICAgICAgICAgIHdpbmRvdy5zY3JvbGxCeSgwLCB5IC0gKHdpbmRvdy5pbm5lckhlaWdodCAvIDQpKTtcclxuICAgICAgICB9LCAwKTtcclxuICAgICB9O1xyXG5cclxuICAgIFxyXG4gICAgY29uc3Qge1xyXG4gICAgICAgIHJlc3VsdCwgXHJcbiAgICAgICAgZmV0Y2hPbmVGdWxsLFxyXG4gICAgICAgIGNyZWF0ZUl0ZW0sXHJcbiAgICAgICAgY3JlYXRlQW5zd2VyLFxyXG4gICAgICAgIGRlbGV0ZUl0ZW0sXHJcbiAgICAgICAgZGVsZXRlQW5zd2VyLFxyXG4gICAgICAgIGlzTG9hZGluZywgXHJcbiAgICAgICAgaGFuZGxlUGFnZUNoYW5nZSxcclxuICAgICAgICBoYXNDb250cm9sc1xyXG4gICAgfSA9IHVzZVB1YmxpY2F0aW9uQ1JVRChcclxuICAgICAgICBmZXRjaEFsbEVudHJ5cG9pbnQsXHJcbiAgICAgICAgJy8nKyBpMThuLmxhbmd1YWdlICsnL2FwaS9xdWVzdGlvbi9zaG93JyxcclxuICAgICAgICAnLycraTE4bi5sYW5ndWFnZSsnL2FwaS9xdWVzdGlvbi9kZWxldGUnLFxyXG4gICAgICAgIGNyZWF0ZUVudHJ5cG9pbnQsXHJcbiAgICAgICAgJy8nK2kxOG4ubGFuZ3VhZ2UrJy9hcGkvYW5zd2VyL2NyZWF0ZS9xdWVzdGlvbicsXHJcbiAgICAgICAgZmlsdGVycyxcclxuICAgICAgICBzZXRGaWx0ZXJzLFxyXG4gICAgICAgIHNjcm9sbFRvQ29udHJvbHNcclxuICAgICk7XHJcblxyXG4gICAgLy9RdWVzdGlvbkFuc3dlciBGT1JNICBcclxuICAgIGNvbnN0IFtmb3JtSXNPcGVuLCBvcGVuRm9ybSwgY2xvc2VGb3JtXSA9IHVzZU9wZW5TdGF0ZShmYWxzZSk7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBpZihsb2NhdGlvbi5ocmVmLmluY2x1ZGVzKCcjcXVlc3Rpb24nKSkge1xyXG4gICAgICAgICAgICBvcGVuRm9ybSgpO1xyXG4gICAgICAgIH1cclxuICAgIH0sIFtdKTtcclxuICAgXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8U2hvd1VzZXJRdWVzdGlvbiAvPlxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBoYXNDb250cm9scyAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiByZWY9e2NvbnRyb2xzUmVmfSBjbGFzc05hbWU9XCJxdWVzdGlvbkFuc3dlci1jb250cm9sc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8UUZpbHRlciBxPXtmaWx0ZXJzLnF9IHNldFE9e3EgPT4gc2V0RmlsdGVyVmFsdWUoJ3EnLCBxKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dCgnc2VhcmNoX2ludG9fcXVlc3Rpb25zJyl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvUUZpbHRlcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZXZpZXctc3ViLWNvbnRyb2xzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGFuZ0ZpbHRlciBpZD1cInFhLWxhbmdcIiBsYW5nPXtmaWx0ZXJzLmxhbmd9IG9uQ2hhbmdlPXtzZXRGaWx0ZXJWYWx1ZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgPFNlYXJjaFJlc3VsdHMgXHJcbiAgICAgICAgICAgICAgICBpc0xvYWRpbmc9e2lzTG9hZGluZ31cclxuICAgICAgICAgICAgICAgIHJlc3VsdD17cmVzdWx0fVxyXG4gICAgICAgICAgICAgICAgcGFnZUNoYW5nZT17aGFuZGxlUGFnZUNoYW5nZX1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICByZXN1bHQgJiYgcmVzdWx0Lml0ZW1zLm1hcChxdWVzdGlvbiA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxRdWVzdGlvbkNhcmQgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e3F1ZXN0aW9uLmlkfSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHF1ZXN0aW9uPXtxdWVzdGlvbn0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmZXRjaE9uZUZ1bGw9e2ZldGNoT25lRnVsbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlbGV0ZVF1ZXN0aW9uPXtkZWxldGVJdGVtfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3JlYXRlQW5zd2VyPXtjcmVhdGVBbnN3ZXJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWxldGVBbnN3ZXI9e2RlbGV0ZUFuc3dlcn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG93bmVyVG9wQ2FyZD17b3duZXJUb3BDYXJkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICkpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIDwvU2VhcmNoUmVzdWx0cz5cclxuXHJcbiAgICAgICAgICAgIDxNb2RhbCBhZGRpdGlvbmFsQ2xhc3M9XCJyZXZpZXctZm9ybS1tb2RhbCBjZW50ZXItZm9ybS1tb2RhbFwiIGlzT3Blbj17Zm9ybUlzT3Blbn0gY2xvc2U9e2Nsb3NlRm9ybX0+XHJcbiAgICAgICAgICAgICAgICA8UXVlc3Rpb25DcmVhdGUgXHJcbiAgICAgICAgICAgICAgICAgICAgY3JlYXRlUXVlc3Rpb249e2NyZWF0ZUl0ZW19XHJcbiAgICAgICAgICAgICAgICAgICAgY2xvc2U9e2Nsb3NlRm9ybX0gXHJcbiAgICAgICAgICAgICAgICAgICAgb3duZXJUb3BDYXJkPXtvd25lclRvcENhcmR9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L01vZGFsPlxyXG4gICAgICAgICAgICA8Rm9ybUJ1dHRvbiBhZGRpdGlvbmFsQ2xhc3M9XCJib3JkZWF1eC1ibGFjayBvdXRsaW5lIGNyZWF0ZS1mb3JtLWJ1dHRvblwiIG9uQ2xpY2s9e29wZW5Gb3JtfT5cclxuICAgICAgICAgICAgICAgIHt0KCdzdWJtaXQucG9zdF9xdWVzdGlvbicpfVxyXG4gICAgICAgICAgICA8L0Zvcm1CdXR0b24+XHJcbiAgICAgICAgPC8+XHJcbiAgICApXHJcbn0iXSwibmFtZXMiOlsiUmVhY3QiLCJGb3JtVG9wUmVjaXBlQ2FyZCIsIl9yZWYiLCJyZWNpcGUiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NOYW1lIiwic3JjIiwicGljdHVyZSIsInBhdGgiLCJhbHQiLCJ0aXRsZSIsIl9yZWdlbmVyYXRvclJ1bnRpbWUiLCJleHBvcnRzIiwiT3AiLCJPYmplY3QiLCJwcm90b3R5cGUiLCJoYXNPd24iLCJoYXNPd25Qcm9wZXJ0eSIsImRlZmluZVByb3BlcnR5Iiwib2JqIiwia2V5IiwiZGVzYyIsInZhbHVlIiwiJFN5bWJvbCIsIlN5bWJvbCIsIml0ZXJhdG9yU3ltYm9sIiwiaXRlcmF0b3IiLCJhc3luY0l0ZXJhdG9yU3ltYm9sIiwiYXN5bmNJdGVyYXRvciIsInRvU3RyaW5nVGFnU3ltYm9sIiwidG9TdHJpbmdUYWciLCJkZWZpbmUiLCJlbnVtZXJhYmxlIiwiY29uZmlndXJhYmxlIiwid3JpdGFibGUiLCJlcnIiLCJ3cmFwIiwiaW5uZXJGbiIsIm91dGVyRm4iLCJzZWxmIiwidHJ5TG9jc0xpc3QiLCJwcm90b0dlbmVyYXRvciIsIkdlbmVyYXRvciIsImdlbmVyYXRvciIsImNyZWF0ZSIsImNvbnRleHQiLCJDb250ZXh0IiwibWFrZUludm9rZU1ldGhvZCIsInRyeUNhdGNoIiwiZm4iLCJhcmciLCJ0eXBlIiwiY2FsbCIsIkNvbnRpbnVlU2VudGluZWwiLCJHZW5lcmF0b3JGdW5jdGlvbiIsIkdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlIiwiSXRlcmF0b3JQcm90b3R5cGUiLCJnZXRQcm90byIsImdldFByb3RvdHlwZU9mIiwiTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUiLCJ2YWx1ZXMiLCJHcCIsImRlZmluZUl0ZXJhdG9yTWV0aG9kcyIsImZvckVhY2giLCJtZXRob2QiLCJfaW52b2tlIiwiQXN5bmNJdGVyYXRvciIsIlByb21pc2VJbXBsIiwiaW52b2tlIiwicmVzb2x2ZSIsInJlamVjdCIsInJlY29yZCIsInJlc3VsdCIsIl90eXBlb2YiLCJfX2F3YWl0IiwidGhlbiIsInVud3JhcHBlZCIsImVycm9yIiwicHJldmlvdXNQcm9taXNlIiwiY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmciLCJzdGF0ZSIsIkVycm9yIiwiZG9uZVJlc3VsdCIsImRlbGVnYXRlIiwiZGVsZWdhdGVSZXN1bHQiLCJtYXliZUludm9rZURlbGVnYXRlIiwic2VudCIsIl9zZW50IiwiZGlzcGF0Y2hFeGNlcHRpb24iLCJhYnJ1cHQiLCJkb25lIiwibWV0aG9kTmFtZSIsInVuZGVmaW5lZCIsIlR5cGVFcnJvciIsImluZm8iLCJyZXN1bHROYW1lIiwibmV4dCIsIm5leHRMb2MiLCJwdXNoVHJ5RW50cnkiLCJsb2NzIiwiZW50cnkiLCJ0cnlMb2MiLCJjYXRjaExvYyIsImZpbmFsbHlMb2MiLCJhZnRlckxvYyIsInRyeUVudHJpZXMiLCJwdXNoIiwicmVzZXRUcnlFbnRyeSIsImNvbXBsZXRpb24iLCJyZXNldCIsIml0ZXJhYmxlIiwiaXRlcmF0b3JNZXRob2QiLCJpc05hTiIsImxlbmd0aCIsImkiLCJkaXNwbGF5TmFtZSIsImlzR2VuZXJhdG9yRnVuY3Rpb24iLCJnZW5GdW4iLCJjdG9yIiwiY29uc3RydWN0b3IiLCJuYW1lIiwibWFyayIsInNldFByb3RvdHlwZU9mIiwiX19wcm90b19fIiwiYXdyYXAiLCJhc3luYyIsIlByb21pc2UiLCJpdGVyIiwia2V5cyIsInZhbCIsIm9iamVjdCIsInJldmVyc2UiLCJwb3AiLCJza2lwVGVtcFJlc2V0IiwicHJldiIsImNoYXJBdCIsInNsaWNlIiwic3RvcCIsInJvb3RSZWNvcmQiLCJydmFsIiwiZXhjZXB0aW9uIiwiaGFuZGxlIiwibG9jIiwiY2F1Z2h0IiwiaGFzQ2F0Y2giLCJoYXNGaW5hbGx5IiwiZmluYWxseUVudHJ5IiwiY29tcGxldGUiLCJmaW5pc2giLCJfY2F0Y2giLCJ0aHJvd24iLCJkZWxlZ2F0ZVlpZWxkIiwiYXN5bmNHZW5lcmF0b3JTdGVwIiwiZ2VuIiwiX25leHQiLCJfdGhyb3ciLCJfYXN5bmNUb0dlbmVyYXRvciIsImFyZ3MiLCJhcmd1bWVudHMiLCJhcHBseSIsIl9zbGljZWRUb0FycmF5IiwiYXJyIiwiX2FycmF5V2l0aEhvbGVzIiwiX2l0ZXJhYmxlVG9BcnJheUxpbWl0IiwiX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5IiwiX25vbkl0ZXJhYmxlUmVzdCIsIm8iLCJtaW5MZW4iLCJfYXJyYXlMaWtlVG9BcnJheSIsIm4iLCJ0b1N0cmluZyIsIkFycmF5IiwiZnJvbSIsInRlc3QiLCJsZW4iLCJhcnIyIiwiX2kiLCJfcyIsIl9lIiwiX3giLCJfciIsIl9hcnIiLCJfbiIsIl9kIiwiaXNBcnJheSIsInVzZUNvbnRleHQiLCJ1c2VTdGF0ZSIsInVzZUZvcm1XaXRoVmFsaWRhdGlvbiIsInl1cCIsIkZvcm1CdXR0b24iLCJDaGVja0ljb24iLCJUZXh0RmllbGQiLCJBcGlFcnJvciIsIlNldFN1Ym1pdEluZm9Db250ZXh0IiwidCIsInVzZVRyYW5zbGF0aW9uIiwic2NoZW1hIiwic3RyaW5nIiwibWF4IiwibnMiLCJyZXF1aXJlZCIsImNvbnRlbnQiLCJhZ3JlZVRlcm1zIiwiYm9vbCIsImlzVHJ1ZSIsIlF1ZXN0aW9uRm9ybSIsIl9lcnJvcnMkdGl0bGUiLCJfZXJyb3JzJHF1ZXN0aW9uIiwiY3JlYXRlUXVlc3Rpb24iLCJjbG9zZSIsIl91c2VUcmFuc2xhdGlvbiIsIl91c2VGb3JtV2l0aFZhbGlkYXRpbyIsInJlZ2lzdGVyIiwiaGFuZGxlU3VibWl0IiwiZXJyb3JzIiwiaXNTdWJtaXR0aW5nIiwiY29udHJvbCIsInNldEVycm9yIiwic2V0U3VibWl0SW5mbyIsIl91c2VTdGF0ZSIsIl91c2VTdGF0ZTIiLCJpc0xvYWRpbmciLCJzZXRMb2FkaW5nIiwib25TdWJtaXQiLCJfcmVmMiIsIl9jYWxsZWUiLCJmb3JtRGF0YSIsIl9jYWxsZWUkIiwiX2NvbnRleHQiLCJtZXNzYWdlIiwidDAiLCJlbnRyaWVzIiwiX3JlZjMiLCJfcmVmNCIsImZpZWxkIiwiX3gyIiwibWF4TGVuZ3RoIiwicXVlc3Rpb24iLCJfZXh0ZW5kcyIsImlkIiwiaHRtbEZvciIsInJvbGUiLCJhZGRpdGlvbmFsQ2xhc3MiLCJsb2FkaW5nIiwiZGlzYWJsZWQiLCJvbkNsaWNrIiwidXNlRWZmZWN0IiwicmVkaXJlY3RUb0xvZ2luIiwidXNlR2V0VXNlciIsIlF1ZXN0aW9uQ3JlYXRlIiwib3duZXJUb3BDYXJkIiwiX3VzZUdldFVzZXIiLCJ1c2VyIiwidXBkYXRlVXNlciIsImxvY2F0aW9uIiwiaHJlZiIsIkFuc3dlckNhcmQiLCJJbXBvcnRhbnRBbnN3ZXIiLCJGb3JtVG9wUHJvZHVjdENhcmQiLCJTaG93VXNlclF1ZXN0aW9uQ2FyZCIsInByb2R1Y3QiLCJmdWxsTmFtZSIsImNyZWF0ZWRBdCIsImZpcnN0QW5zd2VycyIsIm1hcCIsImFuc3dlciIsImlzU3VtbWFyeSIsInJlbW92ZUlzT3BlbiIsInJlc3RBbnN3ZXJzIiwibWVtbyIsInVzZUNvbnRyb2xsZWRGZXRjaCIsIk1vZGFsIiwidXNlT3BlblN0YXRlIiwiUXVlc3Rpb25TdW1tYXJ5IiwiTG9hZGVyIiwiU2hvd1VzZXJRdWVzdGlvbiIsImkxOG4iLCJfdXNlT3BlblN0YXRlIiwiX3VzZU9wZW5TdGF0ZTIiLCJpc09wZW4iLCJvcGVuIiwiX3VzZUNvbnRyb2xsZWRGZXRjaCIsImxhbmd1YWdlIiwiX3VzZUNvbnRyb2xsZWRGZXRjaDIiLCJkb0ZldGNoIiwiaW5jbHVkZXMiLCJzcGxpdCIsImNvbnNvbGUiLCJsb2ciLCJ1c2VSZWYiLCJTZWFyY2hSZXN1bHRzIiwiUUZpbHRlciIsIkxhbmdGaWx0ZXIiLCJRdWVzdGlvbkNhcmQiLCJ1c2VQdWJsaWNhdGlvbkNSVUQiLCJRdWVzdGlvbiIsImZldGNoQWxsRW50cnlwb2ludCIsImNyZWF0ZUVudHJ5cG9pbnQiLCJwYWdlIiwibGltaXQiLCJxIiwibGFuZyIsImZpbHRlcnMiLCJzZXRGaWx0ZXJzIiwic2V0RmlsdGVyVmFsdWUiLCJfb2JqZWN0U3ByZWFkMiIsIl9vYmplY3RTcHJlYWQiLCJfZGVmaW5lUHJvcGVydHkiLCJjb250cm9sc1JlZiIsInNjcm9sbFRvQ29udHJvbHMiLCJzZXRUaW1lb3V0IiwieSIsImN1cnJlbnQiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJ3aW5kb3ciLCJzY3JvbGxCeSIsImlubmVySGVpZ2h0IiwiX3VzZVB1YmxpY2F0aW9uQ1JVRCIsImZldGNoT25lRnVsbCIsImNyZWF0ZUl0ZW0iLCJjcmVhdGVBbnN3ZXIiLCJkZWxldGVJdGVtIiwiZGVsZXRlQW5zd2VyIiwiaGFuZGxlUGFnZUNoYW5nZSIsImhhc0NvbnRyb2xzIiwiZm9ybUlzT3BlbiIsIm9wZW5Gb3JtIiwiY2xvc2VGb3JtIiwiRnJhZ21lbnQiLCJyZWYiLCJzZXRRIiwib25DaGFuZ2UiLCJwYWdlQ2hhbmdlIiwiaXRlbXMiLCJkZWxldGVRdWVzdGlvbiJdLCJzb3VyY2VSb290IjoiIn0=
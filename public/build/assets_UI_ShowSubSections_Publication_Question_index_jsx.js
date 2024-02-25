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
  }, recipe.picture && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXNzZXRzX1VJX1Nob3dTdWJTZWN0aW9uc19QdWJsaWNhdGlvbl9RdWVzdGlvbl9pbmRleF9qc3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQTBCO0FBRW5CLElBQU1DLGlCQUFpQixHQUFHLFNBQXBCQSxpQkFBaUJBLENBQUFDLElBQUEsRUFBaUI7RUFBQSxJQUFaQyxNQUFNLEdBQUFELElBQUEsQ0FBTkMsTUFBTTtFQUNyQyxvQkFDSUgsMERBQUE7SUFBS0ssU0FBUyxFQUFDO0VBQTBCLEdBRWpDRixNQUFNLENBQUNHLE9BQU8saUJBQ1ZOLDBEQUFBO0lBQUtLLFNBQVMsRUFBQyx5QkFBeUI7SUFBQ0UsR0FBRyxFQUFFSixNQUFNLENBQUNHLE9BQU8sQ0FBQ0UsSUFBSztJQUFDQyxHQUFHLEVBQUVOLE1BQU0sQ0FBQ0csT0FBTyxDQUFDRztFQUFJLEVBQzlGLGVBRUxULDBEQUFBO0lBQUtLLFNBQVMsRUFBQztFQUEwQixnQkFDckNMLDBEQUFBO0lBQUtLLFNBQVMsRUFBQztFQUFpQyxHQUFFRixNQUFNLENBQUNPLEtBQUssQ0FBTyxDQUNuRSxDQUNKO0FBRWQsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7K0NDZEQscUpBQUFDLG1CQUFBLFlBQUFBLG9CQUFBLFdBQUFDLE9BQUEsU0FBQUEsT0FBQSxPQUFBQyxFQUFBLEdBQUFDLE1BQUEsQ0FBQUMsU0FBQSxFQUFBQyxNQUFBLEdBQUFILEVBQUEsQ0FBQUksY0FBQSxFQUFBQyxjQUFBLEdBQUFKLE1BQUEsQ0FBQUksY0FBQSxjQUFBQyxHQUFBLEVBQUFDLEdBQUEsRUFBQUMsSUFBQSxJQUFBRixHQUFBLENBQUFDLEdBQUEsSUFBQUMsSUFBQSxDQUFBQyxLQUFBLEtBQUFDLE9BQUEsd0JBQUFDLE1BQUEsR0FBQUEsTUFBQSxPQUFBQyxjQUFBLEdBQUFGLE9BQUEsQ0FBQUcs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IndlYnBhY2s6Ly8vLi9hc3NldHMvVUkvU2hvd1N1YlNlY3Rpb25zL1B1YmxpY2F0aW9uL0Zvcm1Ub3BDYXJkL0Zvcm1Ub3BSZWNpcGVDYXJkLmpzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvVUkvU2hvd1N1YlNlY3Rpb25zL1B1YmxpY2F0aW9uL1F1ZXN0aW9uL1F1ZXN0aW9uQ3JlYXRlL1F1ZXN0aW9uRm9ybS9pbmRleC5qc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL1VJL1Nob3dTdWJTZWN0aW9ucy9QdWJsaWNhdGlvbi9RdWVzdGlvbi9RdWVzdGlvbkNyZWF0ZS9pbmRleC5qc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL1VJL1Nob3dTdWJTZWN0aW9ucy9QdWJsaWNhdGlvbi9RdWVzdGlvbi9TaG93VXNlclF1ZXN0aW9uL1Nob3dVc2VyUXVlc3Rpb25DYXJkLmpzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvVUkvU2hvd1N1YlNlY3Rpb25zL1B1YmxpY2F0aW9uL1F1ZXN0aW9uL1Nob3dVc2VyUXVlc3Rpb24vaW5kZXguanN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9VSS9TaG93U3ViU2VjdGlvbnMvUHVibGljYXRpb24vUXVlc3Rpb24vaW5kZXguanN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcblxyXG5leHBvcnQgY29uc3QgRm9ybVRvcFJlY2lwZUNhcmQgPSAoe3JlY2lwZX0pID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZXZpZXctZm9ybS1wcm9kdWN0LWNhcmRcIj5cclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcmVjaXBlLnBpY3R1cmUgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwicmV2aWV3LWZvcm0tcHJvZHVjdC1pbWdcIiBzcmM9e3JlY2lwZS5waWN0dXJlLnBhdGh9IGFsdD17cmVjaXBlLnBpY3R1cmUuYWx0fSAvPlxyXG4gICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmV2aWV3LWZvcm0tcHJvZHVjdC10ZXh0XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJldmlldy1mb3JtLXByb2R1Y3QtZGVzaWduYXRpb25cIj57cmVjaXBlLnRpdGxlfTwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufSIsImltcG9ydCBSZWFjdCwgeyB1c2VDb250ZXh0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgdXNlRm9ybVdpdGhWYWxpZGF0aW9uIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vLi4vQ3VzdG9tSG9vay9mb3JtL3VzZUZvcm1XaXRoVmFsaWRhdGlvbic7XHJcbmltcG9ydCAqIGFzIHl1cCBmcm9tIFwieXVwXCJcclxuaW1wb3J0IHsgRm9ybUJ1dHRvbiB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL0Zvcm0vRm9ybUJ1dHRvbic7XHJcbmltcG9ydCB7IENoZWNrSWNvbiB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL0ljb24vQ2hlY2tJY29uJztcclxuaW1wb3J0IHsgVGV4dEZpZWxkIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vRm9ybS9UZXh0RmllbGQnO1xyXG5pbXBvcnQgeyBBcGlFcnJvciB9IGZyb20gJy4uLy4uLy4uLy4uLy4uLy4uL2Z1bmN0aW9ucy9hcGknO1xyXG5pbXBvcnQgeyBTZXRTdWJtaXRJbmZvQ29udGV4dCB9IGZyb20gJy4uLy4uLy4uLy4uLy4uLy4uL0NvbnRleHQvU2hvd1N1YlNlY3Rpb25zQ29udGV4dCc7XHJcbmltcG9ydCB7IHQgfSBmcm9tICdpMThuZXh0JztcclxuaW1wb3J0IHsgdXNlVHJhbnNsYXRpb24gfSBmcm9tICdyZWFjdC1pMThuZXh0JztcclxuXHJcblxyXG5jb25zdCBzY2hlbWEgPSB5dXBcclxuICAub2JqZWN0KHtcclxuICAgIHRpdGxlOiB5dXAuc3RyaW5nKCkubWF4KDEwMCwgdCgnYXNzZXJ0Lmxlbmd0aC5tYXgnLCB7bnM6ICdjb25zdHJhaW50cycsIG1heDogMTAwfSkpLnJlcXVpcmVkKCksXHJcbiAgICBjb250ZW50OiB5dXAuc3RyaW5nKCkubWF4KDUwMCwgdCgnYXNzZXJ0Lmxlbmd0aC5tYXgnLCB7bnM6ICdjb25zdHJhaW50cycsIG1heDogNTAwfSkpLnJlcXVpcmVkKCksXHJcbiAgICBhZ3JlZVRlcm1zOiB5dXAuYm9vbCgpLmlzVHJ1ZSh0KCdhc3NlcnQuY2hlY2tib3gudHJ1ZScsIHtuczogJ2NvbnN0cmFpbnRzJ30pKS5yZXF1aXJlZCgpXHJcbiAgfSlcclxuICAucmVxdWlyZWQoKVxyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBRdWVzdGlvbkZvcm0gPSAoe2NyZWF0ZVF1ZXN0aW9uLCBjbG9zZX0pID0+IHtcclxuICAgIGNvbnN0IHt0fSA9IHVzZVRyYW5zbGF0aW9uKCdtZXNzYWdlcycpO1xyXG5cclxuICAgIGNvbnN0IHsgcmVnaXN0ZXIsIGhhbmRsZVN1Ym1pdCwgZXJyb3JzLCBpc1N1Ym1pdHRpbmcsIGNvbnRyb2wsIHNldEVycm9yIH0gPSB1c2VGb3JtV2l0aFZhbGlkYXRpb24oc2NoZW1hLCB7XHJcbiAgICAgICAgdGl0bGU6ICcnLFxyXG4gICAgICAgIGNvbnRlbnQ6ICcnLFxyXG4gICAgICAgIGFncmVlVGVybXM6IGZhbHNlXHJcbiAgICB9KTtcclxuICAgIFxyXG4gICAgY29uc3Qgc2V0U3VibWl0SW5mbyA9IHVzZUNvbnRleHQoU2V0U3VibWl0SW5mb0NvbnRleHQpO1xyXG4gICAgY29uc3QgW2lzTG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gICAgY29uc3Qgb25TdWJtaXQgPSBhc3luYyBmb3JtRGF0YSA9PiB7XHJcbiAgICAgICAgaWYoaXNMb2FkaW5nKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgc2V0TG9hZGluZyh0cnVlKTtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBhd2FpdCBjcmVhdGVRdWVzdGlvbihmb3JtRGF0YSk7XHJcbiAgICAgICAgICAgIHNldFN1Ym1pdEluZm8oe1xyXG4gICAgICAgICAgICAgICAgdHlwZTogJ3N1Y2Nlc3MnLFxyXG4gICAgICAgICAgICAgICAgbWVzc2FnZTogdCgnc3VjY2Vzcy5zdWJtaXQucXVlc3Rpb24nKVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgY2xvc2UoKTtcclxuICAgICAgICB9IGNhdGNoKGUpIHtcclxuICAgICAgICAgICAgaWYoZSBpbnN0YW5jZW9mIEFwaUVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICBPYmplY3QuZW50cmllcyhlLmVycm9ycykuZm9yRWFjaCgoW2ZpZWxkLCBtZXNzYWdlXSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHNldEVycm9yKGZpZWxkLCB7dHlwZTogJ2N1c3RvbScsIG1lc3NhZ2U6IG1lc3NhZ2V9KTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgc2V0U3VibWl0SW5mbyh7XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogJ2RhbmdlcicsXHJcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogdCgnZXJyb3IudGVtcG9yYXJ5X2ZhaWx1cmUnKVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0KG9uU3VibWl0KX0gY2xhc3NOYW1lPVwicmV2aWV3LWZvcm0gYm94LWZvcm1cIj5cclxuXHJcbiAgICAgICAgICAgIDxUZXh0RmllbGQgY29udHJvbD17Y29udHJvbH0gbmFtZT1cInRpdGxlXCIgZXJyb3I9e2Vycm9ycy50aXRsZT8ubWVzc2FnZX0gbWF4TGVuZ3RoPXsxMDB9Pnt0KCdxdWVzdGlvbl90aXRsZScpfSAqPC9UZXh0RmllbGQ+XHJcblxyXG4gICAgICAgICAgICA8VGV4dEZpZWxkIHR5cGU9XCJ0ZXh0YXJlYVwiIGNvbnRyb2w9e2NvbnRyb2x9IG5hbWU9XCJjb250ZW50XCIgZXJyb3I9e2Vycm9ycy5xdWVzdGlvbj8ubWVzc2FnZX0gbWF4TGVuZ3RoPXs1MDB9PlxyXG4gICAgICAgICAgICAgICAge3QoJ3F1ZXN0aW9uJyl9ICpcclxuICAgICAgICAgICAgPC9UZXh0RmllbGQ+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17J2NoZWNrYm94LWdyb3VwJyArIChlcnJvcnMuYWdyZWVUZXJtcyA/ICcgaXMtaW52YWxpZCc6ICcnKX0+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgey4uLnJlZ2lzdGVyKCdhZ3JlZVRlcm1zJyl9IGNsYXNzTmFtZT1cImZvcm0tY2hlY2tib3hcIiBpZD1cImFncmVlVGVybXNcIiB0eXBlPVwiY2hlY2tib3hcIiAvPlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJhZ3JlZVRlcm1zXCIgY2xhc3NOYW1lPVwiZm9ybS1sYWJlbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY3VzdG9tLWNoZWNrYm94XCIgcm9sZT1cImNoZWNrYm94XCIgYXJpYS1sYWJlbGxlZGJ5PVwiY2hlY2tib3gtbGFiZWxcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPENoZWNrSWNvbiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGlkPVwiY2hlY2tib3gtbGFiZWxcIj57dCgnYWdyZWVfdGVybXNfb2ZfdXNlJyl9ICo8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGVycm9ycy5hZ3JlZVRlcm1zICYmIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1lcnJvclwiPntlcnJvcnMuYWdyZWVUZXJtcy5tZXNzYWdlfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdWJtaXQtZ3JvdXAgZG91YmxlXCI+XHJcbiAgICAgICAgICAgICAgICA8Rm9ybUJ1dHRvbiBhZGRpdGlvbmFsQ2xhc3M9XCJib3JkZWF1eFwiIGxvYWRpbmc9e2lzTG9hZGluZyB8fCBpc1N1Ym1pdHRpbmd9Pnt0KCdzdWJtaXQucHVibGlzaCcpfTwvRm9ybUJ1dHRvbj5cclxuICAgICAgICAgICAgICAgIDxGb3JtQnV0dG9uIGFkZGl0aW9uYWxDbGFzcz1cImNhbmNlbFwiIGRpc2FibGVkPXtpc0xvYWRpbmcgfHwgaXNTdWJtaXR0aW5nfSBvbkNsaWNrPXtjbG9zZX0+e3QoJ2NhbmNlbCcpfTwvRm9ybUJ1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9mb3JtPlxyXG4gICAgKVxyXG59IiwiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgcmVkaXJlY3RUb0xvZ2luIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vZnVuY3Rpb25zL3NlY3VyaXR5JztcclxuaW1wb3J0IHsgUXVlc3Rpb25Gb3JtIH0gZnJvbSAnLi9RdWVzdGlvbkZvcm0nO1xyXG5pbXBvcnQgeyB1c2VHZXRVc2VyIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vQ3VzdG9tSG9vay91c2VHZXRVc2VyJztcclxuaW1wb3J0IHsgdXNlVHJhbnNsYXRpb24gfSBmcm9tICdyZWFjdC1pMThuZXh0JztcclxuXHJcblxyXG5leHBvcnQgY29uc3QgUXVlc3Rpb25DcmVhdGUgPSAoe293bmVyVG9wQ2FyZCwgY2xvc2UsIGNyZWF0ZVF1ZXN0aW9ufSkgPT4ge1xyXG4gICAgY29uc3Qge3R9ID0gdXNlVHJhbnNsYXRpb24oJ21lc3NhZ2VzJyk7XHJcblxyXG4gICAgLy9vbiB2w6lyaWZpZSBxdSd1biB1c2VyIGVzdCBjb25uZWN0w6lcclxuICAgIGNvbnN0IHt1c2VyLCB1cGRhdGVVc2VyfSA9IHVzZUdldFVzZXIoKTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGlmKHVzZXIgPT09IGZhbHNlKSB7XHJcbiAgICAgICAgICAgIHJlZGlyZWN0VG9Mb2dpbihcclxuICAgICAgICAgICAgICAgIGxvY2F0aW9uLmhyZWYgKyAnI3F1ZXN0aW9uJywgLy90YXJnZXRQYXRoXHJcbiAgICAgICAgICAgICAgICB0KCd3YXJuaW5nLm5lZWRfbG9naW5fdG9fcG9zdF9xdWVzdGlvbicpLCAvL21lc3NhZ2VcclxuICAgICAgICAgICAgICAgIGNsb3NlKCkgIC8vb25FcnJvciBvbiBmZXJtZVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuICAgIH0sIFt1c2VyXSk7XHJcblxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgdXNlciAmJiAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmV2aWV3LWZvcm0td3JhcHBlclwiPlxyXG4gICAgICAgICAgICAgICAge293bmVyVG9wQ2FyZH1cclxuICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJyZXZpZXctZm9ybS10aXRsZVwiPnt0KCdteV9xdWVzdGlvbicpfTwvaDM+XHJcbiAgICAgICAgICAgICAgICA8UXVlc3Rpb25Gb3JtIGNyZWF0ZVF1ZXN0aW9uPXtjcmVhdGVRdWVzdGlvbn0gY2xvc2U9e2Nsb3NlfSAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApXHJcbiAgICApXHJcbn0iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBBbnN3ZXJDYXJkIH0gZnJvbSAnLi4vLi4vQW5zd2VyL0Fuc3dlckNhcmQnO1xyXG5pbXBvcnQgeyBJbXBvcnRhbnRBbnN3ZXIgfSBmcm9tICcuLi8uLi9BbnN3ZXIvSW1wb3J0YW50QW5zd2VyJztcclxuaW1wb3J0IHsgRm9ybVRvcFJlY2lwZUNhcmQgfSBmcm9tICcuLi8uLi9Gb3JtVG9wQ2FyZC9Gb3JtVG9wUmVjaXBlQ2FyZCc7XHJcbmltcG9ydCB7IEZvcm1Ub3BQcm9kdWN0Q2FyZCB9IGZyb20gJy4uLy4uL0Zvcm1Ub3BDYXJkL0Zvcm1Ub3BQcm9kdWN0Q2FyZCc7XHJcblxyXG5leHBvcnQgY29uc3QgU2hvd1VzZXJRdWVzdGlvbkNhcmQgPSAoe3F1ZXN0aW9ufSkgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLXN1bW1hcnktY2FyZFwiPlxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBxdWVzdGlvbi5yZWNpcGUgJiYgPEZvcm1Ub3BSZWNpcGVDYXJkIHJlY2lwZT17cXVlc3Rpb24ucmVjaXBlfSAvPlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHF1ZXN0aW9uLnByb2R1Y3QgJiYgPEZvcm1Ub3BQcm9kdWN0Q2FyZCBwcm9kdWN0PXtxdWVzdGlvbi5wcm9kdWN0fSAvPlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmV2aWV3LWNhcmQtaGVhZGVyXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJldmlldy1jYXJkLWluZm9zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+e3F1ZXN0aW9uLmZ1bGxOYW1lfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj57cXVlc3Rpb24uY3JlYXRlZEF0fTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZXZpZXctY2FyZC1ib2R5XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJldmlldy1jYXJkLWJvZHktdGl0bGVcIj57cXVlc3Rpb24udGl0bGV9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJldmlldy1jYXJkLWJvZHktY29udGVudFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIHtxdWVzdGlvbi5jb250ZW50fVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInFhLWNhcmQtYm90dG9tXCI+XHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgcXVlc3Rpb24uZmlyc3RBbnN3ZXJzLm1hcChhbnN3ZXIgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbnN3ZXIudHlwZSA9PT0gJ2N1c3RvbWVyJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QW5zd2VyQ2FyZCBrZXk9e2Fuc3dlci5pZH0gYW5zd2VyPXthbnN3ZXJ9IGlzU3VtbWFyeT17dHJ1ZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEltcG9ydGFudEFuc3dlciBrZXk9e2Fuc3dlci5pZH0gYW5zd2VyPXthbnN3ZXJ9IHJlbW92ZUlzT3Blbj17ZmFsc2V9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgKSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBxdWVzdGlvbi5yZXN0QW5zd2Vycy5tYXAoYW5zd2VyID0+IDxBbnN3ZXJDYXJkIGtleT17YW5zd2VyLmlkfSBhbnN3ZXI9e2Fuc3dlcn0gaXNTdW1tYXJ5PXt0cnVlfSAvPilcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn0iLCJpbXBvcnQgUmVhY3QsIHsgbWVtbywgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgdXNlQ29udHJvbGxlZEZldGNoIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vQ3VzdG9tSG9vay9mZXRjaC91c2VDb250cm9sbGVkRmV0Y2gnO1xyXG5pbXBvcnQgeyBNb2RhbCB9IGZyb20gJy4uLy4uLy4uLy4uL0NvbnRhaW5lci9Nb2RhbCc7XHJcbmltcG9ydCB7IHVzZU9wZW5TdGF0ZSB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL0N1c3RvbUhvb2svc3RhdGUvdXNlT3BlblN0YXRlJztcclxuaW1wb3J0IHsgUXVlc3Rpb25TdW1tYXJ5IH0gZnJvbSAnLi4vUXVlc3Rpb25DYXJkL1F1ZXN0aW9uU3VtbWFyeSc7XHJcbmltcG9ydCB7IExvYWRlciB9IGZyb20gJy4uLy4uLy4uLy4uL0ljb24vTG9hZGVyJztcclxuaW1wb3J0IHsgU2hvd1VzZXJRdWVzdGlvbkNhcmQgfSBmcm9tICcuL1Nob3dVc2VyUXVlc3Rpb25DYXJkJztcclxuaW1wb3J0IHsgRm9ybUJ1dHRvbiB9IGZyb20gJy4uLy4uLy4uLy4uL0Zvcm0vRm9ybUJ1dHRvbic7XHJcbmltcG9ydCB7IHVzZVRyYW5zbGF0aW9uIH0gZnJvbSAncmVhY3QtaTE4bmV4dCc7XHJcblxyXG5leHBvcnQgY29uc3QgU2hvd1VzZXJRdWVzdGlvbiA9ICgpID0+IHtcclxuICAgIGNvbnN0IHt0LCBpMThufSA9IHVzZVRyYW5zbGF0aW9uKCdtZXNzYWdlcycpO1xyXG5cclxuICAgIGNvbnN0IFtpc09wZW4sIG9wZW4sIGNsb3NlXSA9IHVzZU9wZW5TdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBbZG9GZXRjaCwgcXVlc3Rpb24sIGlzTG9hZGluZywgZXJyb3JdID0gdXNlQ29udHJvbGxlZEZldGNoKCcvJytpMThuLmxhbmd1YWdlKycvYXBpL3F1ZXN0aW9uL3Nob3cnKTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGlmKGxvY2F0aW9uLmhyZWYuaW5jbHVkZXMoJyNxdS1zaG93LScpKXtcclxuICAgICAgICAgICAgY29uc3QgaWQgPSBsb2NhdGlvbi5ocmVmLnNwbGl0KCcjcXUtc2hvdy0nKVsxXTtcclxuICAgICAgICAgICAgaWYoaWQpIHtcclxuICAgICAgICAgICAgICAgIG9wZW4oKTtcclxuICAgICAgICAgICAgICAgIGRvRmV0Y2goe2lkOiBpZH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSwgW10pO1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgaWYoZXJyb3IpIHtcclxuICAgICAgICAgICAgY2xvc2UoKTtcclxuICAgICAgICB9XHJcbiAgICB9LCBbZXJyb3JdKTtcclxuXHJcbiAgICBjb25zb2xlLmxvZyhpc09wZW4pO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPE1vZGFsIGFkZGl0aW9uYWxDbGFzcz1cInJldmlldy1mb3JtLW1vZGFsIGNlbnRlci1mb3JtLW1vZGFsXCIgaXNPcGVuPXtpc09wZW59PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJldmlldy1tb2RhbC1zdW1tYXJ5XCI+XHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgIXF1ZXN0aW9uID8gPExvYWRlciBhZGRpdGlvbmFsQ2xhc3M9XCJtYWluLWxvYWRlclwiIC8+OiA8U2hvd1VzZXJRdWVzdGlvbkNhcmQgcXVlc3Rpb249e3F1ZXN0aW9ufSAvPlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgPEZvcm1CdXR0b24gb25DbGljaz17Y2xvc2V9IGFkZGl0aW9uYWxDbGFzcz1cImJvcmRlYXV4XCI+e3QoJ2Nsb3NlJyl9PC9Gb3JtQnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L01vZGFsPlxyXG4gICAgKVxyXG59OyIsImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHVzZU9wZW5TdGF0ZSB9IGZyb20gJy4uLy4uLy4uLy4uL0N1c3RvbUhvb2svc3RhdGUvdXNlT3BlblN0YXRlJztcclxuaW1wb3J0IHsgU2VhcmNoUmVzdWx0cyB9IGZyb20gJy4uLy4uLy4uL1NlYXJjaC9TZWFyY2hSZXN1bHRzJztcclxuaW1wb3J0IHsgUUZpbHRlciB9IGZyb20gJy4uLy4uLy4uL1NlYXJjaC9RRmlsdGVyJztcclxuaW1wb3J0IHsgRm9ybUJ1dHRvbiB9IGZyb20gJy4uLy4uLy4uL0Zvcm0vRm9ybUJ1dHRvbic7XHJcbmltcG9ydCB7IE1vZGFsIH0gZnJvbSAnLi4vLi4vLi4vQ29udGFpbmVyL01vZGFsJztcclxuaW1wb3J0IHsgTGFuZ0ZpbHRlciB9IGZyb20gJy4uLy4uLy4uL1NlYXJjaC9MYW5nRmlsdGVyJztcclxuaW1wb3J0IHsgUXVlc3Rpb25DYXJkIH0gZnJvbSAnLi9RdWVzdGlvbkNhcmQnO1xyXG5pbXBvcnQgeyBRdWVzdGlvbkNyZWF0ZSB9IGZyb20gJy4vUXVlc3Rpb25DcmVhdGUnO1xyXG5pbXBvcnQgeyB1c2VQdWJsaWNhdGlvbkNSVUQgfSBmcm9tICcuLi8uLi8uLi8uLi9DdXN0b21Ib29rL3B1YmxpY2F0aW9uL3VzZVB1YmxpY2F0aW9uQ1JVRCc7XHJcbmltcG9ydCB7IHVzZVRyYW5zbGF0aW9uIH0gZnJvbSAncmVhY3QtaTE4bmV4dCc7XHJcbmltcG9ydCB7IFNob3dVc2VyUXVlc3Rpb24gfSBmcm9tICcuL1Nob3dVc2VyUXVlc3Rpb24nO1xyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBRdWVzdGlvbiA9ICh7b3duZXJUb3BDYXJkLCBmZXRjaEFsbEVudHJ5cG9pbnQsIGNyZWF0ZUVudHJ5cG9pbnR9KSA9PiB7XHJcbiAgICBjb25zdCB7dCwgaTE4bn0gPSB1c2VUcmFuc2xhdGlvbignbWVzc2FnZXMnKTtcclxuICAgIFxyXG4gICAgY29uc3QgW2ZpbHRlcnMsIHNldEZpbHRlcnNdID0gdXNlU3RhdGUoe1xyXG4gICAgICAgIHBhZ2U6IDEsXHJcbiAgICAgICAgbGltaXQ6IDEwLFxyXG4gICAgICAgIHE6ICcnLFxyXG4gICAgICAgIGxhbmc6ICcnXHJcbiAgICB9KTtcclxuXHJcbiAgICBjb25zdCBzZXRGaWx0ZXJWYWx1ZSA9IChrZXksIHZhbHVlKSA9PiB7XHJcbiAgICAgICAgc2V0RmlsdGVycyhmaWx0ZXJzID0+ICh7XHJcbiAgICAgICAgICAgIC4uLmZpbHRlcnMsXHJcbiAgICAgICAgICAgIFtrZXldOiB2YWx1ZSxcclxuICAgICAgICAgICAgcGFnZTogMSAvLyBxdWFuZCBvbiBjaGFuZ2UgdW4gZmlsdHJlIG9uIGRvaXQgcmVtZXR0cmUgbGEgcGFnZSBzeXN0w6ltYXRpcXVlbWVudCDDoCAxXHJcbiAgICAgICAgfSkpO1xyXG4gICAgfTtcclxuXHJcbiAgICAgLy9vbiByZW5kZXJDaGFuZ2VcclxuICAgICBjb25zdCBjb250cm9sc1JlZiA9IHVzZVJlZihudWxsKTtcclxuICAgICBjb25zdCBzY3JvbGxUb0NvbnRyb2xzID0gKCkgPT4ge1xyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCB5ID0gY29udHJvbHNSZWYuY3VycmVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS55O1xyXG4gICAgICAgICAgICB3aW5kb3cuc2Nyb2xsQnkoMCwgeSAtICh3aW5kb3cuaW5uZXJIZWlnaHQgLyA0KSk7XHJcbiAgICAgICAgfSwgMCk7XHJcbiAgICAgfTtcclxuXHJcbiAgICBcclxuICAgIGNvbnN0IHtcclxuICAgICAgICByZXN1bHQsIFxyXG4gICAgICAgIGZldGNoT25lRnVsbCxcclxuICAgICAgICBjcmVhdGVJdGVtLFxyXG4gICAgICAgIGNyZWF0ZUFuc3dlcixcclxuICAgICAgICBkZWxldGVJdGVtLFxyXG4gICAgICAgIGRlbGV0ZUFuc3dlcixcclxuICAgICAgICBpc0xvYWRpbmcsIFxyXG4gICAgICAgIGhhbmRsZVBhZ2VDaGFuZ2UsXHJcbiAgICAgICAgaGFzQ29udHJvbHNcclxuICAgIH0gPSB1c2VQdWJsaWNhdGlvbkNSVUQoXHJcbiAgICAgICAgZmV0Y2hBbGxFbnRyeXBvaW50LFxyXG4gICAgICAgICcvJysgaTE4bi5sYW5ndWFnZSArJy9hcGkvcXVlc3Rpb24vc2hvdycsXHJcbiAgICAgICAgJy8nK2kxOG4ubGFuZ3VhZ2UrJy9hcGkvcXVlc3Rpb24vZGVsZXRlJyxcclxuICAgICAgICBjcmVhdGVFbnRyeXBvaW50LFxyXG4gICAgICAgICcvJytpMThuLmxhbmd1YWdlKycvYXBpL2Fuc3dlci9jcmVhdGUvcXVlc3Rpb24nLFxyXG4gICAgICAgIGZpbHRlcnMsXHJcbiAgICAgICAgc2V0RmlsdGVycyxcclxuICAgICAgICBzY3JvbGxUb0NvbnRyb2xzXHJcbiAgICApO1xyXG5cclxuICAgIC8vUXVlc3Rpb25BbnN3ZXIgRk9STSAgXHJcbiAgICBjb25zdCBbZm9ybUlzT3Blbiwgb3BlbkZvcm0sIGNsb3NlRm9ybV0gPSB1c2VPcGVuU3RhdGUoZmFsc2UpO1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgaWYobG9jYXRpb24uaHJlZi5pbmNsdWRlcygnI3F1ZXN0aW9uJykpIHtcclxuICAgICAgICAgICAgb3BlbkZvcm0oKTtcclxuICAgICAgICB9XHJcbiAgICB9LCBbXSk7XHJcbiAgIFxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPFNob3dVc2VyUXVlc3Rpb24gLz5cclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaGFzQ29udHJvbHMgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgcmVmPXtjb250cm9sc1JlZn0gY2xhc3NOYW1lPVwicXVlc3Rpb25BbnN3ZXItY29udHJvbHNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFFGaWx0ZXIgcT17ZmlsdGVycy5xfSBzZXRRPXtxID0+IHNldEZpbHRlclZhbHVlKCdxJywgcSl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3QoJ3NlYXJjaF9pbnRvX3F1ZXN0aW9ucycpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L1FGaWx0ZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmV2aWV3LXN1Yi1jb250cm9sc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPExhbmdGaWx0ZXIgaWQ9XCJxYS1sYW5nXCIgbGFuZz17ZmlsdGVycy5sYW5nfSBvbkNoYW5nZT17c2V0RmlsdGVyVmFsdWV9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIDxTZWFyY2hSZXN1bHRzIFxyXG4gICAgICAgICAgICAgICAgaXNMb2FkaW5nPXtpc0xvYWRpbmd9XHJcbiAgICAgICAgICAgICAgICByZXN1bHQ9e3Jlc3VsdH1cclxuICAgICAgICAgICAgICAgIHBhZ2VDaGFuZ2U9e2hhbmRsZVBhZ2VDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0ICYmIHJlc3VsdC5pdGVtcy5tYXAocXVlc3Rpb24gPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8UXVlc3Rpb25DYXJkIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtxdWVzdGlvbi5pZH0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBxdWVzdGlvbj17cXVlc3Rpb259IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmV0Y2hPbmVGdWxsPXtmZXRjaE9uZUZ1bGx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWxldGVRdWVzdGlvbj17ZGVsZXRlSXRlbX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNyZWF0ZUFuc3dlcj17Y3JlYXRlQW5zd2VyfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVsZXRlQW5zd2VyPXtkZWxldGVBbnN3ZXJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvd25lclRvcENhcmQ9e293bmVyVG9wQ2FyZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICApKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA8L1NlYXJjaFJlc3VsdHM+XHJcblxyXG4gICAgICAgICAgICA8TW9kYWwgYWRkaXRpb25hbENsYXNzPVwicmV2aWV3LWZvcm0tbW9kYWwgY2VudGVyLWZvcm0tbW9kYWxcIiBpc09wZW49e2Zvcm1Jc09wZW59IGNsb3NlPXtjbG9zZUZvcm19PlxyXG4gICAgICAgICAgICAgICAgPFF1ZXN0aW9uQ3JlYXRlIFxyXG4gICAgICAgICAgICAgICAgICAgIGNyZWF0ZVF1ZXN0aW9uPXtjcmVhdGVJdGVtfVxyXG4gICAgICAgICAgICAgICAgICAgIGNsb3NlPXtjbG9zZUZvcm19IFxyXG4gICAgICAgICAgICAgICAgICAgIG93bmVyVG9wQ2FyZD17b3duZXJUb3BDYXJkfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9Nb2RhbD5cclxuICAgICAgICAgICAgPEZvcm1CdXR0b24gYWRkaXRpb25hbENsYXNzPVwiYm9yZGVhdXgtYmxhY2sgb3V0bGluZSBjcmVhdGUtZm9ybS1idXR0b25cIiBvbkNsaWNrPXtvcGVuRm9ybX0+XHJcbiAgICAgICAgICAgICAgICB7dCgnc3VibWl0LnBvc3RfcXVlc3Rpb24nKX1cclxuICAgICAgICAgICAgPC9Gb3JtQnV0dG9uPlxyXG4gICAgICAgIDwvPlxyXG4gICAgKVxyXG59Il0sIm5hbWVzIjpbIlJlYWN0IiwiRm9ybVRvcFJlY2lwZUNhcmQiLCJfcmVmIiwicmVjaXBlIiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTmFtZSIsInBpY3R1cmUiLCJzcmMiLCJwYXRoIiwiYWx0IiwidGl0bGUiLCJfcmVnZW5lcmF0b3JSdW50aW1lIiwiZXhwb3J0cyIsIk9wIiwiT2JqZWN0IiwicHJvdG90eXBlIiwiaGFzT3duIiwiaGFzT3duUHJvcGVydHkiLCJkZWZpbmVQcm9wZXJ0eSIsIm9iaiIsImtleSIsImRlc2MiLCJ2YWx1ZSIsIiRTeW1ib2wiLCJTeW1ib2wiLCJpdGVyYXRvclN5bWJvbCIsIml0ZXJhdG9yIiwiYXN5bmNJdGVyYXRvclN5bWJvbCIsImFzeW5jSXRlcmF0b3IiLCJ0b1N0cmluZ1RhZ1N5bWJvbCIsInRvU3RyaW5nVGFnIiwiZGVmaW5lIiwiZW51bWVyYWJsZSIsImNvbmZpZ3VyYWJsZSIsIndyaXRhYmxlIiwiZXJyIiwid3JhcCIsImlubmVyRm4iLCJvdXRlckZuIiwic2VsZiIsInRyeUxvY3NMaXN0IiwicHJvdG9HZW5lcmF0b3IiLCJHZW5lcmF0b3IiLCJnZW5lcmF0b3IiLCJjcmVhdGUiLCJjb250ZXh0IiwiQ29udGV4dCIsIm1ha2VJbnZva2VNZXRob2QiLCJ0cnlDYXRjaCIsImZuIiwiYXJnIiwidHlwZSIsImNhbGwiLCJDb250aW51ZVNlbnRpbmVsIiwiR2VuZXJhdG9yRnVuY3Rpb24iLCJHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSIsIkl0ZXJhdG9yUHJvdG90eXBlIiwiZ2V0UHJvdG8iLCJnZXRQcm90b3R5cGVPZiIsIk5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlIiwidmFsdWVzIiwiR3AiLCJkZWZpbmVJdGVyYXRvck1ldGhvZHMiLCJmb3JFYWNoIiwibWV0aG9kIiwiX2ludm9rZSIsIkFzeW5jSXRlcmF0b3IiLCJQcm9taXNlSW1wbCIsImludm9rZSIsInJlc29sdmUiLCJyZWplY3QiLCJyZWNvcmQiLCJyZXN1bHQiLCJfdHlwZW9mIiwiX19hd2FpdCIsInRoZW4iLCJ1bndyYXBwZWQiLCJlcnJvciIsInByZXZpb3VzUHJvbWlzZSIsImNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnIiwic3RhdGUiLCJFcnJvciIsImRvbmVSZXN1bHQiLCJkZWxlZ2F0ZSIsImRlbGVnYXRlUmVzdWx0IiwibWF5YmVJbnZva2VEZWxlZ2F0ZSIsInNlbnQiLCJfc2VudCIsImRpc3BhdGNoRXhjZXB0aW9uIiwiYWJydXB0IiwiZG9uZSIsIm1ldGhvZE5hbWUiLCJ1bmRlZmluZWQiLCJUeXBlRXJyb3IiLCJpbmZvIiwicmVzdWx0TmFtZSIsIm5leHQiLCJuZXh0TG9jIiwicHVzaFRyeUVudHJ5IiwibG9jcyIsImVudHJ5IiwidHJ5TG9jIiwiY2F0Y2hMb2MiLCJmaW5hbGx5TG9jIiwiYWZ0ZXJMb2MiLCJ0cnlFbnRyaWVzIiwicHVzaCIsInJlc2V0VHJ5RW50cnkiLCJjb21wbGV0aW9uIiwicmVzZXQiLCJpdGVyYWJsZSIsIml0ZXJhdG9yTWV0aG9kIiwiaXNOYU4iLCJsZW5ndGgiLCJpIiwiZGlzcGxheU5hbWUiLCJpc0dlbmVyYXRvckZ1bmN0aW9uIiwiZ2VuRnVuIiwiY3RvciIsImNvbnN0cnVjdG9yIiwibmFtZSIsIm1hcmsiLCJzZXRQcm90b3R5cGVPZiIsIl9fcHJvdG9fXyIsImF3cmFwIiwiYXN5bmMiLCJQcm9taXNlIiwiaXRlciIsImtleXMiLCJ2YWwiLCJvYmplY3QiLCJyZXZlcnNlIiwicG9wIiwic2tpcFRlbXBSZXNldCIsInByZXYiLCJjaGFyQXQiLCJzbGljZSIsInN0b3AiLCJyb290UmVjb3JkIiwicnZhbCIsImV4Y2VwdGlvbiIsImhhbmRsZSIsImxvYyIsImNhdWdodCIsImhhc0NhdGNoIiwiaGFzRmluYWxseSIsImZpbmFsbHlFbnRyeSIsImNvbXBsZXRlIiwiZmluaXNoIiwiX2NhdGNoIiwidGhyb3duIiwiZGVsZWdhdGVZaWVsZCIsImFzeW5jR2VuZXJhdG9yU3RlcCIsImdlbiIsIl9uZXh0IiwiX3Rocm93IiwiX2FzeW5jVG9HZW5lcmF0b3IiLCJhcmdzIiwiYXJndW1lbnRzIiwiYXBwbHkiLCJfc2xpY2VkVG9BcnJheSIsImFyciIsIl9hcnJheVdpdGhIb2xlcyIsIl9pdGVyYWJsZVRvQXJyYXlMaW1pdCIsIl91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheSIsIl9ub25JdGVyYWJsZVJlc3QiLCJvIiwibWluTGVuIiwiX2FycmF5TGlrZVRvQXJyYXkiLCJuIiwidG9TdHJpbmciLCJBcnJheSIsImZyb20iLCJ0ZXN0IiwibGVuIiwiYXJyMiIsIl9pIiwiX3MiLCJfZSIsIl94IiwiX3IiLCJfYXJyIiwiX24iLCJfZCIsImlzQXJyYXkiLCJ1c2VDb250ZXh0IiwidXNlU3RhdGUiLCJ1c2VGb3JtV2l0aFZhbGlkYXRpb24iLCJ5dXAiLCJGb3JtQnV0dG9uIiwiQ2hlY2tJY29uIiwiVGV4dEZpZWxkIiwiQXBpRXJyb3IiLCJTZXRTdWJtaXRJbmZvQ29udGV4dCIsInQiLCJ1c2VUcmFuc2xhdGlvbiIsInNjaGVtYSIsInN0cmluZyIsIm1heCIsIm5zIiwicmVxdWlyZWQiLCJjb250ZW50IiwiYWdyZWVUZXJtcyIsImJvb2wiLCJpc1RydWUiLCJRdWVzdGlvbkZvcm0iLCJfZXJyb3JzJHRpdGxlIiwiX2Vycm9ycyRxdWVzdGlvbiIsImNyZWF0ZVF1ZXN0aW9uIiwiY2xvc2UiLCJfdXNlVHJhbnNsYXRpb24iLCJfdXNlRm9ybVdpdGhWYWxpZGF0aW8iLCJyZWdpc3RlciIsImhhbmRsZVN1Ym1pdCIsImVycm9ycyIsImlzU3VibWl0dGluZyIsImNvbnRyb2wiLCJzZXRFcnJvciIsInNldFN1Ym1pdEluZm8iLCJfdXNlU3RhdGUiLCJfdXNlU3RhdGUyIiwiaXNMb2FkaW5nIiwic2V0TG9hZGluZyIsIm9uU3VibWl0IiwiX3JlZjIiLCJfY2FsbGVlIiwiZm9ybURhdGEiLCJfY2FsbGVlJCIsIl9jb250ZXh0IiwibWVzc2FnZSIsInQwIiwiZW50cmllcyIsIl9yZWYzIiwiX3JlZjQiLCJmaWVsZCIsIl94MiIsIm1heExlbmd0aCIsInF1ZXN0aW9uIiwiX2V4dGVuZHMiLCJpZCIsImh0bWxGb3IiLCJyb2xlIiwiYWRkaXRpb25hbENsYXNzIiwibG9hZGluZyIsImRpc2FibGVkIiwib25DbGljayIsInVzZUVmZmVjdCIsInJlZGlyZWN0VG9Mb2dpbiIsInVzZUdldFVzZXIiLCJRdWVzdGlvbkNyZWF0ZSIsIm93bmVyVG9wQ2FyZCIsIl91c2VHZXRVc2VyIiwidXNlciIsInVwZGF0ZVVzZXIiLCJsb2NhdGlvbiIsImhyZWYiLCJBbnN3ZXJDYXJkIiwiSW1wb3J0YW50QW5zd2VyIiwiRm9ybVRvcFByb2R1Y3RDYXJkIiwiU2hvd1VzZXJRdWVzdGlvbkNhcmQiLCJwcm9kdWN0IiwiZnVsbE5hbWUiLCJjcmVhdGVkQXQiLCJmaXJzdEFuc3dlcnMiLCJtYXAiLCJhbnN3ZXIiLCJpc1N1bW1hcnkiLCJyZW1vdmVJc09wZW4iLCJyZXN0QW5zd2VycyIsIm1lbW8iLCJ1c2VDb250cm9sbGVkRmV0Y2giLCJNb2RhbCIsInVzZU9wZW5TdGF0ZSIsIlF1ZXN0aW9uU3VtbWFyeSIsIkxvYWRlciIsIlNob3dVc2VyUXVlc3Rpb24iLCJpMThuIiwiX3VzZU9wZW5TdGF0ZSIsIl91c2VPcGVuU3RhdGUyIiwiaXNPcGVuIiwib3BlbiIsIl91c2VDb250cm9sbGVkRmV0Y2giLCJsYW5ndWFnZSIsIl91c2VDb250cm9sbGVkRmV0Y2gyIiwiZG9GZXRjaCIsImluY2x1ZGVzIiwic3BsaXQiLCJjb25zb2xlIiwibG9nIiwidXNlUmVmIiwiU2VhcmNoUmVzdWx0cyIsIlFGaWx0ZXIiLCJMYW5nRmlsdGVyIiwiUXVlc3Rpb25DYXJkIiwidXNlUHVibGljYXRpb25DUlVEIiwiUXVlc3Rpb24iLCJmZXRjaEFsbEVudHJ5cG9pbnQiLCJjcmVhdGVFbnRyeXBvaW50IiwicGFnZSIsImxpbWl0IiwicSIsImxhbmciLCJmaWx0ZXJzIiwic2V0RmlsdGVycyIsInNldEZpbHRlclZhbHVlIiwiX29iamVjdFNwcmVhZDIiLCJfb2JqZWN0U3ByZWFkIiwiX2RlZmluZVByb3BlcnR5IiwiY29udHJvbHNSZWYiLCJzY3JvbGxUb0NvbnRyb2xzIiwic2V0VGltZW91dCIsInkiLCJjdXJyZW50IiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0Iiwid2luZG93Iiwic2Nyb2xsQnkiLCJpbm5lckhlaWdodCIsIl91c2VQdWJsaWNhdGlvbkNSVUQiLCJmZXRjaE9uZUZ1bGwiLCJjcmVhdGVJdGVtIiwiY3JlYXRlQW5zd2VyIiwiZGVsZXRlSXRlbSIsImRlbGV0ZUFuc3dlciIsImhhbmRsZVBhZ2VDaGFuZ2UiLCJoYXNDb250cm9scyIsImZvcm1Jc09wZW4iLCJvcGVuRm9ybSIsImNsb3NlRm9ybSIsIkZyYWdtZW50IiwicmVmIiwic2V0USIsIm9uQ2hhbmdlIiwicGFnZUNoYW5nZSIsIml0ZW1zIiwiZGVsZXRlUXVlc3Rpb24iXSwic291cmNlUm9vdCI6IiJ9
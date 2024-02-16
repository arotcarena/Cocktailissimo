"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["assets_CustomHook_form_useFormWithValidation_jsx-assets_UI_Form_TextField_jsx"],{

/***/ "./assets/CustomHook/form/useFormWithValidation.jsx":
/*!**********************************************************!*\
  !*** ./assets/CustomHook/form/useFormWithValidation.jsx ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useFormWithValidation": () => (/* binding */ useFormWithValidation)
/* harmony export */ });
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-hook-form */ "./node_modules/react-hook-form/dist/index.esm.mjs");
/* harmony import */ var _hookform_resolvers_yup__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @hookform/resolvers/yup */ "./node_modules/@hookform/resolvers/yup/dist/yup.mjs");


var useFormWithValidation = function useFormWithValidation(validationSchema) {
  var defaultValues = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var _useForm = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_1__.useForm)({
      defaultValues: defaultValues,
      mode: 'onTouched',
      resolver: (0,_hookform_resolvers_yup__WEBPACK_IMPORTED_MODULE_0__.yupResolver)(validationSchema)
    }),
    register = _useForm.register,
    handleSubmit = _useForm.handleSubmit,
    setValue = _useForm.setValue,
    getValues = _useForm.getValues,
    watch = _useForm.watch,
    setError = _useForm.setError,
    clearErrors = _useForm.clearErrors,
    reset = _useForm.reset,
    control = _useForm.control,
    _useForm$formState = _useForm.formState,
    errors = _useForm$formState.errors,
    isSubmitting = _useForm$formState.isSubmitting;
  return {
    register: register,
    handleSubmit: handleSubmit,
    errors: errors,
    setError: setError,
    clearErrors: clearErrors,
    isSubmitting: isSubmitting,
    setValue: setValue,
    getValues: getValues,
    watch: watch,
    control: control,
    reset: reset
  };
};

/***/ }),

/***/ "./assets/CustomHook/form/useLabelDown.jsx":
/*!*************************************************!*\
  !*** ./assets/CustomHook/form/useLabelDown.jsx ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useLabelDown": () => (/* binding */ useLabelDown)
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
















function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var useLabelDown = function useLabelDown(value) {
  var onBlur = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_16__.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    isLabelDown = _useState2[0],
    setLabelDown = _useState2[1];
  (0,react__WEBPACK_IMPORTED_MODULE_16__.useEffect)(function () {
    if (value === '' || value === undefined || value === null) {
      setLabelDown(true);
    }
  }, []);
  var handleFocus = function handleFocus(e) {
    if (isLabelDown) {
      setLabelDown(false);
    }
  };
  var handleBlur = function handleBlur(e) {
    if (onBlur) {
      //on avertit hook form
      onBlur();
    }
    if (e.target.value === '') {
      setLabelDown(true);
    }
  };
  return [isLabelDown, handleFocus, handleBlur];
};

/***/ }),

/***/ "./assets/UI/Form/TextField.jsx":
/*!**************************************!*\
  !*** ./assets/UI/Form/TextField.jsx ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TextField": () => (/* binding */ TextField),
/* harmony export */   "TextareaField": () => (/* binding */ TextareaField)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.keys.js */ "./node_modules/core-js/modules/es.object.keys.js");
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.index-of.js */ "./node_modules/core-js/modules/es.array.index-of.js");
/* harmony import */ var core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.is-array.js */ "./node_modules/core-js/modules/es.array.is-array.js");
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_3__);
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
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/es.function.bind.js */ "./node_modules/core-js/modules/es.function.bind.js");
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! core-js/modules/es.object.assign.js */ "./node_modules/core-js/modules/es.object.assign.js");
/* harmony import */ var core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! react-hook-form */ "./node_modules/react-hook-form/dist/index.esm.mjs");
/* harmony import */ var _CustomHook_form_useLabelDown__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../CustomHook/form/useLabelDown */ "./assets/CustomHook/form/useLabelDown.jsx");


















var _excluded = ["children", "control", "name", "error", "additionalClass", "type"];
function _objectDestructuringEmpty(obj) { if (obj == null) throw new TypeError("Cannot destructure " + obj); }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }


function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



var TextField = function TextField(_ref) {
  var children = _ref.children,
    control = _ref.control,
    name = _ref.name,
    error = _ref.error,
    _ref$additionalClass = _ref.additionalClass,
    additionalClass = _ref$additionalClass === void 0 ? '' : _ref$additionalClass,
    _ref$type = _ref.type,
    type = _ref$type === void 0 ? 'text' : _ref$type,
    props = _objectWithoutProperties(_ref, _excluded);
  var _useController = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_22__.useController)({
      name: name,
      control: control
    }),
    field = _useController.field;
  var _useLabelDown = (0,_CustomHook_form_useLabelDown__WEBPACK_IMPORTED_MODULE_21__.useLabelDown)(field.value, field.onBlur),
    _useLabelDown2 = _slicedToArray(_useLabelDown, 3),
    isLabelDown = _useLabelDown2[0],
    handleFocus = _useLabelDown2[1],
    handleBlur = _useLabelDown2[2];
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_20___default().createElement("div", {
    className: 'form-group' + (error ? ' is-invalid' : '') + (additionalClass ? ' ' + additionalClass + '-group' : '') + (type === 'textarea' ? ' textarea' : '')
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_20___default().createElement("div", {
    className: 'input-wrapper ' + field.name + (isLabelDown ? ' down' : '') + (type === 'textarea' ? ' textarea' : '')
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_20___default().createElement("label", {
    className: "form-label",
    htmlFor: field.name
  }, children), type === 'textarea' ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_20___default().createElement("textarea", _extends({
    ref: field.ref,
    onChange: field.onChange,
    value: field.value,
    name: field.name,
    onBlur: handleBlur,
    onFocus: handleFocus,
    className: 'form-control' + (additionalClass ? ' ' + additionalClass : ''),
    id: field.name
  }, props)) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_20___default().createElement("input", _extends({
    ref: field.ref,
    onChange: field.onChange,
    value: field.value,
    name: field.name,
    onBlur: handleBlur,
    onFocus: handleFocus,
    type: type,
    className: 'form-control' + (additionalClass ? ' ' + additionalClass : ''),
    id: field.name
  }, props))), error && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_20___default().createElement("div", {
    className: "form-error"
  }, error));
};
var TextareaField = function TextareaField(_ref2) {
  var props = Object.assign({}, (_objectDestructuringEmpty(_ref2), _ref2));
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_20___default().createElement("div", {
    className: "box-form"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_20___default().createElement(TextField, _extends({
    type: "textarea"
  }, props)));
};

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXNzZXRzX0N1c3RvbUhvb2tfZm9ybV91c2VGb3JtV2l0aFZhbGlkYXRpb25fanN4LWFzc2V0c19VSV9Gb3JtX1RleHRGaWVsZF9qc3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQTBDO0FBQ1k7QUFHL0MsSUFBTUUscUJBQXFCLEdBQUcsU0FBeEJBLHFCQUFxQkEsQ0FBSUMsZ0JBQWdCLEVBQXlCO0VBQUEsSUFBdkJDLGFBQWEsR0FBQUMsU0FBQSxDQUFBQyxNQUFBLFFBQUFELFNBQUEsUUFBQUUsU0FBQSxHQUFBRixTQUFBLE1BQUcsQ0FBQyxDQUFDO0VBQ3RFLElBQUFHLFFBQUEsR0FBMElSLHdEQUFPLENBQUM7TUFDOUlJLGFBQWEsRUFBRUEsYUFBYTtNQUM1QkssSUFBSSxFQUFFLFdBQVc7TUFDakJDLFFBQVEsRUFBRVQsb0VBQVcsQ0FBQ0UsZ0JBQWdCO0lBQ3hDLENBQUMsQ0FBQztJQUpJUSxRQUFRLEdBQUFILFFBQUEsQ0FBUkcsUUFBUTtJQUFFQyxZQUFZLEdBQUFKLFFBQUEsQ0FBWkksWUFBWTtJQUFFQyxRQUFRLEdBQUFMLFFBQUEsQ0FBUkssUUFBUTtJQUFFQyxTQUFTLEdBQUFOLFFBQUEsQ0FBVE0sU0FBUztJQUFFQyxLQUFLLEdBQUFQLFFBQUEsQ0FBTE8sS0FBSztJQUFFQyxRQUFRLEdBQUFSLFFBQUEsQ0FBUlEsUUFBUTtJQUFFQyxXQUFXLEdBQUFULFFBQUEsQ0FBWFMsV0FBVztJQUFFQyxLQUFLLEdBQUFWLFFBQUEsQ0FBTFUsS0FBSztJQUFFQyxPQUFPLEdBQUFYLFFBQUEsQ0FBUFcsT0FBTztJQUFBQyxrQkFBQSxHQUFBWixRQUFBLENBQUVhLFNBQVM7SUFBR0MsTUFBTSxHQUFBRixrQkFBQSxDQUFORSxNQUFNO0lBQUVDLFlBQVksR0FBQUgsa0JBQUEsQ0FBWkcsWUFBWTtFQU1uSSxPQUFPO0lBQUVaLFFBQVEsRUFBUkEsUUFBUTtJQUFFQyxZQUFZLEVBQVpBLFlBQVk7SUFBRVUsTUFBTSxFQUFOQSxNQUFNO0lBQUVOLFFBQVEsRUFBUkEsUUFBUTtJQUFFQyxXQUFXLEVBQVhBLFdBQVc7SUFBRU0sWUFBWSxFQUFaQSxZQUFZO0lBQUVWLFFBQVEsRUFBUkEsUUFBUTtJQUFFQyxTQUFTLEVBQVRBLFNBQVM7SUFBRUMsS0FBSyxFQUFMQSxLQUFLO0lBQUVJLE9BQU8sRUFBUEEsT0FBTztJQUFFRCxLQUFLLEVBQUxBO0VBQU0sQ0FBQztBQUM5SCxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDWjJDO0FBSXJDLElBQU1RLFlBQVksR0FBRyxTQUFmQSxZQUFZQSxDQUFJQyxLQUFLLEVBQW9CO0VBQUEsSUFBbEJDLE1BQU0sR0FBQXZCLFNBQUEsQ0FBQUMsTUFBQSxRQUFBRCxTQUFBLFFBQUFFLFNBQUEsR0FBQUYsU0FBQSxNQUFHLElBQUk7RUFDN0MsSUFBQXdCLFNBQUEsR0FBb0NKLGdEQUFRLENBQUMsS0FBSyxDQUFDO0lBQUFLLFVBQUEsR0FBQUMsY0FBQSxDQUFBRixTQUFBO0lBQTVDRyxXQUFXLEdBQUFGLFVBQUE7SUFBRUcsWUFBWSxHQUFBSCxVQUFBO0VBRWhDTixpREFBUyxDQUFDLFlBQU07SUFDWixJQUFHRyxLQUFLLEtBQUssRUFBRSxJQUFJQSxLQUFLLEtBQUtwQixTQUFTLElBQUlvQixLQUFLLEtBQUssSUFBSSxFQUFFO01BQ3RETSxZQUFZLENBQUMsSUFBSSxDQUFDO0lBQ3RCO0VBQ0osQ0FBQyxFQUFFLEVBQUUsQ0FBQztFQUVOLElBQU1DLFdBQVcsR0FBRyxTQUFkQSxXQUFXQSxDQUFHQyxDQUFDLEVBQUk7SUFDckIsSUFBR0gsV0FBVyxFQUFFO01BQ1pDLFlBQVksQ0FBQyxLQUFLLENBQUM7SUFDdkI7RUFDSixDQUFDO0VBQ0QsSUFBTUcsVUFBVSxHQUFHLFNBQWJBLFVBQVVBLENBQUdELENBQUMsRUFBSTtJQUNwQixJQUFHUCxNQUFNLEVBQUU7TUFDUDtNQUNBQSxNQUFNLEVBQUU7SUFDWjtJQUVBLElBQUdPLENBQUMsQ0FBQ0UsTUFBTSxDQUFDVixLQUFLLEtBQUssRUFBRSxFQUFFO01BQ3RCTSxZQUFZLENBQUMsSUFBSSxDQUFDO0lBQ3RCO0VBQ0osQ0FBQztFQUVELE9BQU8sQ0FBQ0QsV0FBVyxFQUFFRSxXQUFXLEVBQUVFLFVBQVUsQ0FBQztBQUNqRCxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM5QnlCO0FBQ3NCO0FBQ2tCO0FBTTNELElBQU1JLFNBQVMsR0FBRyxTQUFaQSxTQUFTQSxDQUFBQyxJQUFBLEVBQXdGO0VBQUEsSUFBbkZDLFFBQVEsR0FBQUQsSUFBQSxDQUFSQyxRQUFRO0lBQUV2QixPQUFPLEdBQUFzQixJQUFBLENBQVB0QixPQUFPO0lBQUV3QixJQUFJLEdBQUFGLElBQUEsQ0FBSkUsSUFBSTtJQUFFQyxLQUFLLEdBQUFILElBQUEsQ0FBTEcsS0FBSztJQUFBQyxvQkFBQSxHQUFBSixJQUFBLENBQUVLLGVBQWU7SUFBZkEsZUFBZSxHQUFBRCxvQkFBQSxjQUFHLEVBQUUsR0FBQUEsb0JBQUE7SUFBQUUsU0FBQSxHQUFBTixJQUFBLENBQUVPLElBQUk7SUFBSkEsSUFBSSxHQUFBRCxTQUFBLGNBQUcsTUFBTSxHQUFBQSxTQUFBO0lBQUtFLEtBQUssR0FBQUMsd0JBQUEsQ0FBQVQsSUFBQSxFQUFBVSxTQUFBO0VBQ3BHLElBQUFDLGNBQUEsR0FBZ0JiLCtEQUFhLENBQUM7TUFBQ0ksSUFBSSxFQUFKQSxJQUFJO01BQUV4QixPQUFPLEVBQVBBO0lBQU8sQ0FBQyxDQUFDO0lBQXZDa0MsS0FBSyxHQUFBRCxjQUFBLENBQUxDLEtBQUs7RUFFWixJQUFBQyxhQUFBLEdBQStDNUIsNEVBQVksQ0FBQzJCLEtBQUssQ0FBQzFCLEtBQUssRUFBRTBCLEtBQUssQ0FBQ3pCLE1BQU0sQ0FBQztJQUFBMkIsY0FBQSxHQUFBeEIsY0FBQSxDQUFBdUIsYUFBQTtJQUEvRXRCLFdBQVcsR0FBQXVCLGNBQUE7SUFBRXJCLFdBQVcsR0FBQXFCLGNBQUE7SUFBRW5CLFVBQVUsR0FBQW1CLGNBQUE7RUFFM0Msb0JBQ0lqQiwyREFBQTtJQUFLbUIsU0FBUyxFQUFFLFlBQVksSUFBSWIsS0FBSyxHQUFHLGFBQWEsR0FBRSxFQUFFLENBQUMsSUFBSUUsZUFBZSxHQUFHLEdBQUcsR0FBQ0EsZUFBZSxHQUFDLFFBQVEsR0FBRSxFQUFFLENBQUMsSUFBSUUsSUFBSSxLQUFLLFVBQVUsR0FBRyxXQUFXLEdBQUUsRUFBRTtFQUFFLGdCQUN4SlYsMkRBQUE7SUFBS21CLFNBQVMsRUFBRSxnQkFBZ0IsR0FBRUosS0FBSyxDQUFDVixJQUFJLElBQUtYLFdBQVcsR0FBRyxPQUFPLEdBQUUsRUFBRSxDQUFDLElBQUlnQixJQUFJLEtBQUssVUFBVSxHQUFHLFdBQVcsR0FBRSxFQUFFO0VBQUUsZ0JBQ2xIViwyREFBQTtJQUFPbUIsU0FBUyxFQUFDLFlBQVk7SUFBQ0MsT0FBTyxFQUFFTCxLQUFLLENBQUNWO0VBQUssR0FBRUQsUUFBUSxDQUFTLEVBRWpFTSxJQUFJLEtBQUssVUFBVSxnQkFHZlYsMkRBQUEsYUFBQXFCLFFBQUE7SUFDSUMsR0FBRyxFQUFFUCxLQUFLLENBQUNPLEdBQUk7SUFDZkMsUUFBUSxFQUFFUixLQUFLLENBQUNRLFFBQVM7SUFDekJsQyxLQUFLLEVBQUUwQixLQUFLLENBQUMxQixLQUFNO0lBQ25CZ0IsSUFBSSxFQUFFVSxLQUFLLENBQUNWLElBQUs7SUFDakJmLE1BQU0sRUFBRVEsVUFBVztJQUNuQjBCLE9BQU8sRUFBRTVCLFdBQVk7SUFDckJ1QixTQUFTLEVBQUUsY0FBYyxJQUFJWCxlQUFlLEdBQUcsR0FBRyxHQUFHQSxlQUFlLEdBQUUsRUFBRSxDQUFFO0lBQzFFaUIsRUFBRSxFQUFFVixLQUFLLENBQUNWO0VBQUssR0FDWE0sS0FBSyxFQUNYLGdCQUlGWCwyREFBQSxVQUFBcUIsUUFBQTtJQUNJQyxHQUFHLEVBQUVQLEtBQUssQ0FBQ08sR0FBSTtJQUNmQyxRQUFRLEVBQUVSLEtBQUssQ0FBQ1EsUUFBUztJQUN6QmxDLEtBQUssRUFBRTBCLEtBQUssQ0FBQzFCLEtBQU07SUFDbkJnQixJQUFJLEVBQUVVLEtBQUssQ0FBQ1YsSUFBSztJQUNqQmYsTUFBTSxFQUFFUSxVQUFXO0lBQ25CMEIsT0FBTyxFQUFFNUIsV0FBWTtJQUNyQmMsSUFBSSxFQUFFQSxJQUFLO0lBQ1hTLFNBQVMsRUFBRSxjQUFjLElBQUlYLGVBQWUsR0FBRyxHQUFHLEdBQUdBLGVBQWUsR0FBRSxFQUFFLENBQUU7SUFDMUVpQixFQUFFLEVBQUVWLEtBQUssQ0FBQ1Y7RUFBSyxHQUNYTSxLQUFLLEVBRWhCLENBRUgsRUFDTEwsS0FBSyxpQkFBSU4sMkRBQUE7SUFBS21CLFNBQVMsRUFBQztFQUFZLEdBQUViLEtBQUssQ0FBTyxDQUNqRDtBQUVkLENBQUM7QUFFTSxJQUFNb0IsYUFBYSxHQUFHLFNBQWhCQSxhQUFhQSxDQUFBQyxLQUFBLEVBQW1CO0VBQUEsSUFBWGhCLEtBQUssR0FBQWlCLE1BQUEsQ0FBQUMsTUFBQSxNQUFBQyx5QkFBQSxDQUFBSCxLQUFBLEdBQUFBLEtBQUE7RUFDbkMsb0JBQ0kzQiwyREFBQTtJQUFLbUIsU0FBUyxFQUFDO0VBQVUsZ0JBQ3JCbkIsMkRBQUEsQ0FBQ0UsU0FBUyxFQUFBbUIsUUFBQTtJQUFDWCxJQUFJLEVBQUM7RUFBVSxHQUFLQyxLQUFLLEVBQUksQ0FDdEM7QUFFZCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vYXNzZXRzL0N1c3RvbUhvb2svZm9ybS91c2VGb3JtV2l0aFZhbGlkYXRpb24uanN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9DdXN0b21Ib29rL2Zvcm0vdXNlTGFiZWxEb3duLmpzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvVUkvRm9ybS9UZXh0RmllbGQuanN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUZvcm0gfSBmcm9tIFwicmVhY3QtaG9vay1mb3JtXCI7XHJcbmltcG9ydCB7IHl1cFJlc29sdmVyIH0gZnJvbSAnQGhvb2tmb3JtL3Jlc29sdmVycy95dXAnO1xyXG5cclxuXHJcbmV4cG9ydCBjb25zdCB1c2VGb3JtV2l0aFZhbGlkYXRpb24gPSAodmFsaWRhdGlvblNjaGVtYSwgZGVmYXVsdFZhbHVlcyA9IHt9KSA9PiB7XHJcbiAgICBjb25zdCB7IHJlZ2lzdGVyLCBoYW5kbGVTdWJtaXQsIHNldFZhbHVlLCBnZXRWYWx1ZXMsIHdhdGNoLCBzZXRFcnJvciwgY2xlYXJFcnJvcnMsIHJlc2V0LCBjb250cm9sLCBmb3JtU3RhdGU6eyBlcnJvcnMsIGlzU3VibWl0dGluZyB9IH0gPSB1c2VGb3JtKHtcclxuICAgICAgICBkZWZhdWx0VmFsdWVzOiBkZWZhdWx0VmFsdWVzLFxyXG4gICAgICAgIG1vZGU6ICdvblRvdWNoZWQnLFxyXG4gICAgICAgIHJlc29sdmVyOiB5dXBSZXNvbHZlcih2YWxpZGF0aW9uU2NoZW1hKVxyXG4gICAgICB9KTtcclxuXHJcbiAgICByZXR1cm4geyByZWdpc3RlciwgaGFuZGxlU3VibWl0LCBlcnJvcnMsIHNldEVycm9yLCBjbGVhckVycm9ycywgaXNTdWJtaXR0aW5nLCBzZXRWYWx1ZSwgZ2V0VmFsdWVzLCB3YXRjaCwgY29udHJvbCwgcmVzZXQgfVxyXG59IiwiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuXHJcblxyXG5leHBvcnQgY29uc3QgdXNlTGFiZWxEb3duID0gKHZhbHVlLCBvbkJsdXIgPSBudWxsKSA9PiB7XHJcbiAgICBjb25zdCBbaXNMYWJlbERvd24sIHNldExhYmVsRG93bl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBpZih2YWx1ZSA9PT0gJycgfHwgdmFsdWUgPT09IHVuZGVmaW5lZCB8fCB2YWx1ZSA9PT0gbnVsbCkge1xyXG4gICAgICAgICAgICBzZXRMYWJlbERvd24odHJ1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSwgW10pO1xyXG5cclxuICAgIGNvbnN0IGhhbmRsZUZvY3VzID0gZSA9PiB7XHJcbiAgICAgICAgaWYoaXNMYWJlbERvd24pIHtcclxuICAgICAgICAgICAgc2V0TGFiZWxEb3duKGZhbHNlKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgY29uc3QgaGFuZGxlQmx1ciA9IGUgPT4ge1xyXG4gICAgICAgIGlmKG9uQmx1cikge1xyXG4gICAgICAgICAgICAvL29uIGF2ZXJ0aXQgaG9vayBmb3JtXHJcbiAgICAgICAgICAgIG9uQmx1cigpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBpZihlLnRhcmdldC52YWx1ZSA9PT0gJycpIHtcclxuICAgICAgICAgICAgc2V0TGFiZWxEb3duKHRydWUpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgcmV0dXJuIFtpc0xhYmVsRG93biwgaGFuZGxlRm9jdXMsIGhhbmRsZUJsdXJdO1xyXG59IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgdXNlQ29udHJvbGxlciB9IGZyb20gJ3JlYWN0LWhvb2stZm9ybSc7XHJcbmltcG9ydCB7IHVzZUxhYmVsRG93biB9IGZyb20gJy4uLy4uL0N1c3RvbUhvb2svZm9ybS91c2VMYWJlbERvd24nO1xyXG5cclxuXHJcblxyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBUZXh0RmllbGQgPSAoe2NoaWxkcmVuLCBjb250cm9sLCBuYW1lLCBlcnJvciwgYWRkaXRpb25hbENsYXNzID0gJycsIHR5cGUgPSAndGV4dCcsIC4uLnByb3BzfSkgPT4ge1xyXG4gICAgY29uc3Qge2ZpZWxkfSA9IHVzZUNvbnRyb2xsZXIoe25hbWUsIGNvbnRyb2x9KTtcclxuXHJcbiAgICBjb25zdCBbaXNMYWJlbERvd24sIGhhbmRsZUZvY3VzLCBoYW5kbGVCbHVyXSA9IHVzZUxhYmVsRG93bihmaWVsZC52YWx1ZSwgZmllbGQub25CbHVyKTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXsnZm9ybS1ncm91cCcgKyAoZXJyb3IgPyAnIGlzLWludmFsaWQnOiAnJykgKyAoYWRkaXRpb25hbENsYXNzID8gJyAnK2FkZGl0aW9uYWxDbGFzcysnLWdyb3VwJzogJycpICsgKHR5cGUgPT09ICd0ZXh0YXJlYScgPyAnIHRleHRhcmVhJzogJycpfT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9eydpbnB1dC13cmFwcGVyICcrIGZpZWxkLm5hbWUgICsgKGlzTGFiZWxEb3duID8gJyBkb3duJzogJycpICsgKHR5cGUgPT09ICd0ZXh0YXJlYScgPyAnIHRleHRhcmVhJzogJycpfT5cclxuICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJmb3JtLWxhYmVsXCIgaHRtbEZvcj17ZmllbGQubmFtZX0+e2NoaWxkcmVufTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZSA9PT0gJ3RleHRhcmVhJ1xyXG4gICAgICAgICAgICAgICAgICAgID9cclxuICAgICAgICAgICAgICAgICAgICAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZXh0YXJlYSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlZj17ZmllbGQucmVmfSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtmaWVsZC5vbkNoYW5nZX0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17ZmllbGQudmFsdWV9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT17ZmllbGQubmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQmx1cj17aGFuZGxlQmx1cn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uRm9jdXM9e2hhbmRsZUZvY3VzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXsnZm9ybS1jb250cm9sJyArIChhZGRpdGlvbmFsQ2xhc3MgPyAnICcgKyBhZGRpdGlvbmFsQ2xhc3M6ICcnKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPXtmaWVsZC5uYW1lfSAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Li4ucHJvcHN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgICAgICAgICAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlZj17ZmllbGQucmVmfSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtmaWVsZC5vbkNoYW5nZX0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17ZmllbGQudmFsdWV9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT17ZmllbGQubmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQmx1cj17aGFuZGxlQmx1cn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uRm9jdXM9e2hhbmRsZUZvY3VzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT17dHlwZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17J2Zvcm0tY29udHJvbCcgKyAoYWRkaXRpb25hbENsYXNzID8gJyAnICsgYWRkaXRpb25hbENsYXNzOiAnJyl9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9e2ZpZWxkLm5hbWV9ICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsuLi5wcm9wc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICB7ZXJyb3IgJiYgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWVycm9yXCI+e2Vycm9yfTwvZGl2Pn1cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IFRleHRhcmVhRmllbGQgPSAoey4uLnByb3BzfSkgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJveC1mb3JtXCI+XHJcbiAgICAgICAgICAgIDxUZXh0RmllbGQgdHlwZT1cInRleHRhcmVhXCIgey4uLnByb3BzfSAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG4gXHJcbiJdLCJuYW1lcyI6WyJ1c2VGb3JtIiwieXVwUmVzb2x2ZXIiLCJ1c2VGb3JtV2l0aFZhbGlkYXRpb24iLCJ2YWxpZGF0aW9uU2NoZW1hIiwiZGVmYXVsdFZhbHVlcyIsImFyZ3VtZW50cyIsImxlbmd0aCIsInVuZGVmaW5lZCIsIl91c2VGb3JtIiwibW9kZSIsInJlc29sdmVyIiwicmVnaXN0ZXIiLCJoYW5kbGVTdWJtaXQiLCJzZXRWYWx1ZSIsImdldFZhbHVlcyIsIndhdGNoIiwic2V0RXJyb3IiLCJjbGVhckVycm9ycyIsInJlc2V0IiwiY29udHJvbCIsIl91c2VGb3JtJGZvcm1TdGF0ZSIsImZvcm1TdGF0ZSIsImVycm9ycyIsImlzU3VibWl0dGluZyIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwidXNlTGFiZWxEb3duIiwidmFsdWUiLCJvbkJsdXIiLCJfdXNlU3RhdGUiLCJfdXNlU3RhdGUyIiwiX3NsaWNlZFRvQXJyYXkiLCJpc0xhYmVsRG93biIsInNldExhYmVsRG93biIsImhhbmRsZUZvY3VzIiwiZSIsImhhbmRsZUJsdXIiLCJ0YXJnZXQiLCJSZWFjdCIsInVzZUNvbnRyb2xsZXIiLCJUZXh0RmllbGQiLCJfcmVmIiwiY2hpbGRyZW4iLCJuYW1lIiwiZXJyb3IiLCJfcmVmJGFkZGl0aW9uYWxDbGFzcyIsImFkZGl0aW9uYWxDbGFzcyIsIl9yZWYkdHlwZSIsInR5cGUiLCJwcm9wcyIsIl9vYmplY3RXaXRob3V0UHJvcGVydGllcyIsIl9leGNsdWRlZCIsIl91c2VDb250cm9sbGVyIiwiZmllbGQiLCJfdXNlTGFiZWxEb3duIiwiX3VzZUxhYmVsRG93bjIiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NOYW1lIiwiaHRtbEZvciIsIl9leHRlbmRzIiwicmVmIiwib25DaGFuZ2UiLCJvbkZvY3VzIiwiaWQiLCJUZXh0YXJlYUZpZWxkIiwiX3JlZjIiLCJPYmplY3QiLCJhc3NpZ24iLCJfb2JqZWN0RGVzdHJ1Y3R1cmluZ0VtcHR5Il0sInNvdXJjZVJvb3QiOiIifQ==
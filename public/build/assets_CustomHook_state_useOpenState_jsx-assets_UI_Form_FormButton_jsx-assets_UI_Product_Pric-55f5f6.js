"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["assets_CustomHook_state_useOpenState_jsx-assets_UI_Form_FormButton_jsx-assets_UI_Product_Pric-55f5f6"],{

/***/ "./assets/CustomHook/state/useOpenState.jsx":
/*!**************************************************!*\
  !*** ./assets/CustomHook/state/useOpenState.jsx ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useOpenState": () => (/* binding */ useOpenState)
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

var useOpenState = function useOpenState() {
  var startingState = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_16__.useState)(startingState),
    _useState2 = _slicedToArray(_useState, 2),
    isOpen = _useState2[0],
    setOpen = _useState2[1];
  var open = function open() {
    setOpen(true);
  };
  var close = function close() {
    setOpen(false);
  };
  (0,react__WEBPACK_IMPORTED_MODULE_16__.useEffect)(function () {
    return function () {
      return setOpen(startingState);
    };
  }, []);
  return [isOpen, open, close];
};

/***/ }),

/***/ "./assets/UI/Form/FormButton.jsx":
/*!***************************************!*\
  !*** ./assets/UI/Form/FormButton.jsx ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FormButton": () => (/* binding */ FormButton)
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





var _excluded = ["children", "additionalClass", "disabled", "loading"];
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }


var FormButton = function FormButton(_ref) {
  var children = _ref.children,
    additionalClass = _ref.additionalClass,
    _ref$disabled = _ref.disabled,
    disabled = _ref$disabled === void 0 ? false : _ref$disabled,
    loading = _ref.loading,
    props = _objectWithoutProperties(_ref, _excluded);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement("button", _extends({
    type: "submit",
    className: 'form-button' + (additionalClass ? ' ' + additionalClass : '') + (loading || disabled ? ' disabled' : ''),
    disabled: disabled || loading
  }, props), loading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement(_Icon_Loader__WEBPACK_IMPORTED_MODULE_6__.Loader, null) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement("span", null, children));
};

/***/ }),

/***/ "./assets/UI/Icon/Loader.jsx":
/*!***********************************!*\
  !*** ./assets/UI/Icon/Loader.jsx ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Loader": () => (/* binding */ Loader)
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
/* harmony import */ var i18next__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! i18next */ "./node_modules/i18next/dist/esm/i18next.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);





var _excluded = ["additionalClass"];
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }


var Loader = function Loader(_ref) {
  var additionalClass = _ref.additionalClass,
    props = _objectWithoutProperties(_ref, _excluded);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement("svg", _extends({
    fill: "currentColor",
    className: 'loader' + (additionalClass ? ' ' + additionalClass : '')
  }, props, {
    version: "1.1",
    xmlns: "http://www.w3.org/2000/svg",
    x: "0px",
    y: "0px",
    viewBox: "0 0 26.349 26.35",
    style: {
      enableBackground: 'new 0 0 26.349 26.35'
    },
    "aria-label": (0,i18next__WEBPACK_IMPORTED_MODULE_5__.t)('loading', {
      ns: 'messages'
    })
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement("g", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement("g", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement("circle", {
    cx: "13.792",
    cy: "3.082",
    r: "3.082"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement("circle", {
    cx: "13.792",
    cy: "24.501",
    r: "1.849"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement("circle", {
    cx: "6.219",
    cy: "6.218",
    r: "2.774"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement("circle", {
    cx: "21.365",
    cy: "21.363",
    r: "1.541"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement("circle", {
    cx: "3.082",
    cy: "13.792",
    r: "2.465"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement("circle", {
    cx: "24.501",
    cy: "13.791",
    r: "1.232"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement("path", {
    d: "M4.694,19.84c-0.843,0.843-0.843,2.207,0,3.05c0.842,0.843,2.208,0.843,3.05,0c0.843-0.843,0.843-2.207,0-3.05\r C6.902,18.996,5.537,18.988,4.694,19.84z"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement("circle", {
    cx: "21.364",
    cy: "6.218",
    r: "0.924"
  }))));
};

/***/ }),

/***/ "./assets/UI/Product/PriceShow.jsx":
/*!*****************************************!*\
  !*** ./assets/UI/Product/PriceShow.jsx ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PriceShow": () => (/* binding */ PriceShow)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _functions_formaters__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../functions/formaters */ "./assets/functions/formaters.js");
/* harmony import */ var _functions_price_priceOperator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../functions/price/priceOperator */ "./assets/functions/price/priceOperator.js");
/* harmony import */ var _styles_UI_Price_priceShow_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../styles/UI/Price/priceShow.css */ "./assets/styles/UI/Price/priceShow.css");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");





var PriceShow = function PriceShow(_ref) {
  var price = _ref.price;
  var _useTranslation = (0,react_i18next__WEBPACK_IMPORTED_MODULE_4__.useTranslation)('messages'),
    t = _useTranslation.t;
  switch (price.showType) {
    case _functions_price_priceOperator__WEBPACK_IMPORTED_MODULE_2__.SHOW_PRICE_HT:
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
        className: price.payType !== _functions_price_priceOperator__WEBPACK_IMPORTED_MODULE_2__.PAY_PRICE_HT ? 'light' : ''
      }, (0,_functions_formaters__WEBPACK_IMPORTED_MODULE_1__.priceFormater)(price.priceHT));
    case _functions_price_priceOperator__WEBPACK_IMPORTED_MODULE_2__.SHOW_PRICE_TTC:
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
        className: price.payType !== _functions_price_priceOperator__WEBPACK_IMPORTED_MODULE_2__.PAY_PRICE_TTC ? 'light' : ''
      }, (0,_functions_formaters__WEBPACK_IMPORTED_MODULE_1__.priceFormater)(price.priceTTC));
    default:
      if (price.payType === _functions_price_priceOperator__WEBPACK_IMPORTED_MODULE_2__.PAY_PRICE_TTC) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
          className: "price-show dual"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, (0,_functions_formaters__WEBPACK_IMPORTED_MODULE_1__.priceFormater)(price.priceTTC)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
          className: "price-show-suffix"
        }, t('ttc'))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
          className: "light"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, (0,_functions_formaters__WEBPACK_IMPORTED_MODULE_1__.priceFormater)(price.priceHT)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
          className: "price-show-suffix"
        }, t('ht'))));
      }
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "price-show dual"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, (0,_functions_formaters__WEBPACK_IMPORTED_MODULE_1__.priceFormater)(price.priceHT)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
        className: "price-show-suffix"
      }, t('ht'))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "light"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, (0,_functions_formaters__WEBPACK_IMPORTED_MODULE_1__.priceFormater)(price.priceTTC)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
        className: "price-show-suffix"
      }, t('ttc'))));
  }
};

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

/***/ "./assets/functions/language/configureLanguage.js":
/*!********************************************************!*\
  !*** ./assets/functions/language/configureLanguage.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "configureLanguage": () => (/* binding */ configureLanguage)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.includes.js */ "./node_modules/core-js/modules/es.array.includes.js");
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.string.includes.js */ "./node_modules/core-js/modules/es.string.includes.js");
/* harmony import */ var core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Config_SiteConfig__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Config/SiteConfig */ "./assets/Config/SiteConfig.js");
/* harmony import */ var _entrypoints_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../entrypoints/i18n */ "./assets/entrypoints/i18n.js");




var configureLanguage = function configureLanguage() {
  var lang = window.location.pathname.split('/')[1];
  if (_Config_SiteConfig__WEBPACK_IMPORTED_MODULE_2__.SiteConfig.SUPPORTED_LOCALES.includes(lang)) {
    _entrypoints_i18n__WEBPACK_IMPORTED_MODULE_3__["default"].changeLanguage(lang);
  }
};

/***/ }),

/***/ "./assets/functions/price/priceOperator.js":
/*!*************************************************!*\
  !*** ./assets/functions/price/priceOperator.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PAY_PRICE_HT": () => (/* binding */ PAY_PRICE_HT),
/* harmony export */   "PAY_PRICE_TTC": () => (/* binding */ PAY_PRICE_TTC),
/* harmony export */   "SHOW_PRICES_HT_TTC": () => (/* binding */ SHOW_PRICES_HT_TTC),
/* harmony export */   "SHOW_PRICE_HT": () => (/* binding */ SHOW_PRICE_HT),
/* harmony export */   "SHOW_PRICE_TTC": () => (/* binding */ SHOW_PRICE_TTC),
/* harmony export */   "priceAdd": () => (/* binding */ priceAdd),
/* harmony export */   "priceLess": () => (/* binding */ priceLess),
/* harmony export */   "priceMultiply": () => (/* binding */ priceMultiply),
/* harmony export */   "setPriceToPay": () => (/* binding */ setPriceToPay)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.from.js */ "./node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.regexp.test.js */ "./node_modules/core-js/modules/es.regexp.test.js");
/* harmony import */ var core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.array.is-array.js */ "./node_modules/core-js/modules/es.array.is-array.js");
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.error.cause.js */ "./node_modules/core-js/modules/es.error.cause.js");
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.error.to-string.js */ "./node_modules/core-js/modules/es.error.to-string.js");
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_14__);















function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
var PAY_PRICE_HT = 'pay_price_ht';
var PAY_PRICE_TTC = 'pay_price_ttc';
var SHOW_PRICE_HT = 'show_price_ht';
var SHOW_PRICE_TTC = 'show_price_ttc';
var SHOW_PRICES_HT_TTC = 'show_prices_ht_ttc';

/**
 * 
 * @param {array} prices customPrice[] 
 * @returns {Object|null} customPrice
 */
var priceAdd = function priceAdd(prices) {
  if (prices.length < 1) {
    return null;
  }
  var totalPrice = {
    payType: prices[0].payType,
    showType: prices[0].showType,
    priceHT: null,
    priceTTC: null,
    vatRate: null,
    priceToPay: null
  };
  var _iterator = _createForOfIteratorHelper(prices),
    _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var price = _step.value;
      if (price.priceHT) {
        if (!totalPrice.priceHT) {
          totalPrice.priceHT = price.priceHT;
        } else {
          totalPrice.priceHT += price.priceHT;
        }
      }
      if (price.priceTTC) {
        if (!totalPrice.priceTTC) {
          totalPrice.priceTTC = price.priceTTC;
        } else {
          totalPrice.priceTTC += price.priceTTC;
        }
      }
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
  return setPriceToPay(totalPrice);
};

/**
 * 
 * @param {Object} price CustomPrice
 * @param {number} multiplier 
 * @returns {Object} CustomPrice 
 */
var priceMultiply = function priceMultiply(price, multiplier) {
  var totalPrice = {
    payType: price.payType,
    showType: price.showType,
    vatRate: price.vatRate,
    priceHT: null,
    priceTTC: null
  };
  if (price.priceHT !== null) {
    totalPrice.priceHT = price.priceHT * multiplier;
  }
  if (price.priceTTC !== null) {
    totalPrice.priceTTC = price.priceTTC * multiplier;
  }
  return setPriceToPay(totalPrice);
};

/**
 * 
 * @param {Object} price CustomPrice 
 * @param {Object} lessPrice CustomPrice
 * @returns {Object} CustomPrice 
 */
var priceLess = function priceLess(price, lessPrice) {
  var totalPrice = {
    payType: price.payType,
    showType: price.showType,
    vatRate: null,
    priceHT: null,
    priceTTC: null
  };
  if (price.priceHT !== null && lessPrice.priceHT !== null) {
    totalPrice.priceHT = price.priceHT - lessPrice.priceHT;
  }
  if (price.priceTTC !== null && lessPrice.priceTTC !== null) {
    totalPrice.priceTTC = price.priceTTC - lessPrice.priceTTC;
  }

  //si l'une des valeurs est à 0 on remet null à la place
  if (totalPrice.priceHT === 0) {
    totalPrice.priceHT = null;
  }
  if (totalPrice.priceTTC === 0) {
    totalPrice.priceTTC = null;
  }
  return setPriceToPay(totalPrice);
};

/**
 * @param {Object} price CustomPrice
 */
var setPriceToPay = function setPriceToPay(price) {
  price.priceToPay = price.payType === PAY_PRICE_TTC ? price.priceTTC : price.priceHT;
  return price;
};

/***/ }),

/***/ "./assets/styles/UI/Price/priceShow.css":
/*!**********************************************!*\
  !*** ./assets/styles/UI/Price/priceShow.css ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXNzZXRzX0N1c3RvbUhvb2tfc3RhdGVfdXNlT3BlblN0YXRlX2pzeC1hc3NldHNfVUlfRm9ybV9Gb3JtQnV0dG9uX2pzeC1hc3NldHNfVUlfUHJvZHVjdF9QcmljLTU1ZjVmNi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBNEM7QUFFckMsSUFBTUUsWUFBWSxHQUFHLFNBQWZBLFlBQVlBLENBQUEsRUFBOEI7RUFBQSxJQUExQkMsYUFBYSxHQUFBQyxTQUFBLENBQUFDLE1BQUEsUUFBQUQsU0FBQSxRQUFBRSxTQUFBLEdBQUFGLFNBQUEsTUFBRyxLQUFLO0VBQzlDLElBQUFHLFNBQUEsR0FBMEJOLGdEQUFRLENBQUNFLGFBQWEsQ0FBQztJQUFBSyxVQUFBLEdBQUFDLGNBQUEsQ0FBQUYsU0FBQTtJQUExQ0csTUFBTSxHQUFBRixVQUFBO0lBQUVHLE9BQU8sR0FBQUgsVUFBQTtFQUN0QixJQUFNSSxJQUFJLEdBQUcsU0FBUEEsSUFBSUEsQ0FBQSxFQUFTO0lBQ2ZELE9BQU8sQ0FBQyxJQUFJLENBQUM7RUFDakIsQ0FBQztFQUNELElBQU1FLEtBQUssR0FBRyxTQUFSQSxLQUFLQSxDQUFBLEVBQVM7SUFDaEJGLE9BQU8sQ0FBQyxLQUFLLENBQUM7RUFDbEIsQ0FBQztFQUNEWCxpREFBUyxDQUFDLFlBQU07SUFDWixPQUFPO01BQUEsT0FBTVcsT0FBTyxDQUFDUixhQUFhLENBQUM7SUFBQTtFQUN2QyxDQUFDLEVBQUUsRUFBRSxDQUFDO0VBQ04sT0FBTyxDQUFDTyxNQUFNLEVBQUVFLElBQUksRUFBRUMsS0FBSyxDQUFDO0FBQ2hDLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2R5QjtBQUNjO0FBRWpDLElBQU1HLFVBQVUsR0FBRyxTQUFiQSxVQUFVQSxDQUFBQyxJQUFBLEVBQXlFO0VBQUEsSUFBcEVDLFFBQVEsR0FBQUQs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U0FBUyxDQUFDL0MsT0FBTyxLQUFLLElBQUksRUFBRTtJQUNyRDhCLFVBQVUsQ0FBQzlCLE9BQU8sR0FBR0osS0FBSyxDQUFDSSxPQUFPLEdBQUcrQyxTQUFTLENBQUMvQyxPQUFPO0VBQzFEO0VBQ0EsSUFBR0osS0FBSyxDQUFDSyxRQUFRLEtBQUssSUFBSSxJQUFJOEMsU0FBUyxDQUFDOUMsUUFBUSxLQUFLLElBQUksRUFBRTtJQUN2RDZCLFVBQVUsQ0FBQzdCLFFBQVEsR0FBR0wsS0FBSyxDQUFDSyxRQUFRLEdBQUc4QyxTQUFTLENBQUM5QyxRQUFRO0VBQzdEOztFQUVBO0VBQ0EsSUFBRzZCLFVBQVUsQ0FBQzlCLE9BQU8sS0FBSyxDQUFDLEVBQUU7SUFDekI4QixVQUFVLENBQUM5QixPQUFPLEdBQUcsSUFBSTtFQUM3QjtFQUNBLElBQUc4QixVQUFVLENBQUM3QixRQUFRLEtBQUssQ0FBQyxFQUFFO0lBQzFCNkIsVUFBVSxDQUFDN0IsUUFBUSxHQUFHLElBQUk7RUFDOUI7RUFFQSxPQUFPMEMsYUFBYSxDQUFDYixVQUFVLENBQUM7QUFDcEMsQ0FBQzs7QUFJRDtBQUNBO0FBQ0E7QUFDTyxJQUFNYSxhQUFhLEdBQUcsU0FBaEJBLGFBQWFBLENBQUkvQyxLQUFLLEVBQUs7RUFFcENBLEtBQUssQ0FBQ29DLFVBQVUsR0FBR3BDLEtBQUssQ0FBQ0csT0FBTyxLQUFLUixhQUFhLEdBQUdLLEtBQUssQ0FBQ0ssUUFBUSxHQUFFTCxLQUFLLENBQUNJLE9BQU87RUFFbEYsT0FBT0osS0FBSztBQUNoQixDQUFDOzs7Ozs7Ozs7OztBQ3ZIRCIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2Fzc2V0cy9DdXN0b21Ib29rL3N0YXRlL3VzZU9wZW5TdGF0ZS5qc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL1VJL0Zvcm0vRm9ybUJ1dHRvbi5qc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL1VJL0ljb24vTG9hZGVyLmpzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvVUkvUHJvZHVjdC9QcmljZVNob3cuanN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9mdW5jdGlvbnMvZm9ybWF0ZXJzLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9mdW5jdGlvbnMvbGFuZ3VhZ2UvY29uZmlndXJlTGFuZ3VhZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2Z1bmN0aW9ucy9wcmljZS9wcmljZU9wZXJhdG9yLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9zdHlsZXMvVUkvUHJpY2UvcHJpY2VTaG93LmNzcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5leHBvcnQgY29uc3QgdXNlT3BlblN0YXRlID0gKHN0YXJ0aW5nU3RhdGUgPSBmYWxzZSkgPT4ge1xyXG4gICAgY29uc3QgW2lzT3Blbiwgc2V0T3Blbl0gPSB1c2VTdGF0ZShzdGFydGluZ1N0YXRlKTtcclxuICAgIGNvbnN0IG9wZW4gPSAoKSA9PiB7XHJcbiAgICAgICAgc2V0T3Blbih0cnVlKTtcclxuICAgIH07XHJcbiAgICBjb25zdCBjbG9zZSA9ICgpID0+IHtcclxuICAgICAgICBzZXRPcGVuKGZhbHNlKTtcclxuICAgIH07XHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIHJldHVybiAoKSA9PiBzZXRPcGVuKHN0YXJ0aW5nU3RhdGUpO1xyXG4gICAgfSwgW10pO1xyXG4gICAgcmV0dXJuIFtpc09wZW4sIG9wZW4sIGNsb3NlXTtcclxufVxyXG5cclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgTG9hZGVyIH0gZnJvbSAnLi4vSWNvbi9Mb2FkZXInO1xyXG5cclxuZXhwb3J0IGNvbnN0IEZvcm1CdXR0b24gPSAoe2NoaWxkcmVuLCBhZGRpdGlvbmFsQ2xhc3MsIGRpc2FibGVkID0gZmFsc2UsIGxvYWRpbmcsIC4uLnByb3BzfSkgPT4ge1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3NOYW1lPXsnZm9ybS1idXR0b24nICsgKGFkZGl0aW9uYWxDbGFzcyA/ICcgJythZGRpdGlvbmFsQ2xhc3M6ICcnKSArIChsb2FkaW5nIHx8IGRpc2FibGVkID8gJyBkaXNhYmxlZCc6ICcnKSB9IGRpc2FibGVkPXtkaXNhYmxlZCB8fCBsb2FkaW5nfSB7Li4ucHJvcHN9PlxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbG9hZGluZyBcclxuICAgICAgICAgICAgPyBcclxuICAgICAgICAgICAgPExvYWRlciAvPlxyXG4gICAgICAgICAgICA6XHJcbiAgICAgICAgICAgIDxzcGFuPntjaGlsZHJlbn08L3NwYW4+XHJcbiAgICAgICAgfVxyXG4gICAgICAgIDwvYnV0dG9uPlxyXG4gICAgKVxyXG59XHJcbiIsImltcG9ydCB7IHQgfSBmcm9tICdpMThuZXh0JztcclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuXHJcbmV4cG9ydCBjb25zdCBMb2FkZXIgPSAoe2FkZGl0aW9uYWxDbGFzcywgLi4ucHJvcHN9KSA9PiB7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8c3ZnIFxyXG4gICAgICAgICAgICBmaWxsPVwiY3VycmVudENvbG9yXCIgXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17J2xvYWRlcicgKyAoYWRkaXRpb25hbENsYXNzID8gJyAnICsgYWRkaXRpb25hbENsYXNzOiAnJyl9IHsuLi5wcm9wc30gXHJcbiAgICAgICAgICAgIHZlcnNpb249XCIxLjFcIiBcclxuICAgICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIFxyXG4gICAgICAgICAgICB4PVwiMHB4XCIgXHJcbiAgICAgICAgICAgIHk9XCIwcHhcIiBcclxuICAgICAgICAgICAgdmlld0JveD1cIjAgMCAyNi4zNDkgMjYuMzVcIlxyXG4gICAgICAgICAgICBzdHlsZT17e2VuYWJsZUJhY2tncm91bmQ6ICduZXcgMCAwIDI2LjM0OSAyNi4zNSd9fSBcclxuICAgICAgICAgICAgYXJpYS1sYWJlbD17dCgnbG9hZGluZycsIHtuczogJ21lc3NhZ2VzJ30pfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxnPlxyXG4gICAgICAgICAgICAgICAgPGc+XHJcbiAgICAgICAgICAgICAgICAgICAgPGNpcmNsZSBjeD1cIjEzLjc5MlwiIGN5PVwiMy4wODJcIiByPVwiMy4wODJcIj48L2NpcmNsZT5cclxuICAgICAgICAgICAgICAgICAgICA8Y2lyY2xlIGN4PVwiMTMuNzkyXCIgY3k9XCIyNC41MDFcIiByPVwiMS44NDlcIj48L2NpcmNsZT5cclxuICAgICAgICAgICAgICAgICAgICA8Y2lyY2xlIGN4PVwiNi4yMTlcIiBjeT1cIjYuMjE4XCIgcj1cIjIuNzc0XCI+PC9jaXJjbGU+XHJcbiAgICAgICAgICAgICAgICAgICAgPGNpcmNsZSBjeD1cIjIxLjM2NVwiIGN5PVwiMjEuMzYzXCIgcj1cIjEuNTQxXCI+PC9jaXJjbGU+XHJcbiAgICAgICAgICAgICAgICAgICAgPGNpcmNsZSBjeD1cIjMuMDgyXCIgY3k9XCIxMy43OTJcIiByPVwiMi40NjVcIj48L2NpcmNsZT5cclxuICAgICAgICAgICAgICAgICAgICA8Y2lyY2xlIGN4PVwiMjQuNTAxXCIgY3k9XCIxMy43OTFcIiByPVwiMS4yMzJcIj48L2NpcmNsZT5cclxuICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTTQuNjk0LDE5Ljg0Yy0wLjg0MywwLjg0My0wLjg0MywyLjIwNywwLDMuMDVjMC44NDIsMC44NDMsMi4yMDgsMC44NDMsMy4wNSwwYzAuODQzLTAuODQzLDAuODQzLTIuMjA3LDAtMy4wNVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBDNi45MDIsMTguOTk2LDUuNTM3LDE4Ljk4OCw0LjY5NCwxOS44NHpcIj48L3BhdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgPGNpcmNsZSBjeD1cIjIxLjM2NFwiIGN5PVwiNi4yMThcIiByPVwiMC45MjRcIj48L2NpcmNsZT5cclxuICAgICAgICAgICAgICAgIDwvZz5cclxuICAgICAgICAgICAgPC9nPlxyXG4gICAgICAgIDwvc3ZnPlxyXG4gICAgKVxyXG59O1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBwcmljZUZvcm1hdGVyIH0gZnJvbSAnLi4vLi4vZnVuY3Rpb25zL2Zvcm1hdGVycyc7XHJcbmltcG9ydCB7IFBBWV9QUklDRV9IVCwgUEFZX1BSSUNFX1RUQywgU0hPV19QUklDRV9IVCwgU0hPV19QUklDRV9UVEMgfSBmcm9tICcuLi8uLi9mdW5jdGlvbnMvcHJpY2UvcHJpY2VPcGVyYXRvcic7XHJcbmltcG9ydCAnLi4vLi4vc3R5bGVzL1VJL1ByaWNlL3ByaWNlU2hvdy5jc3MnO1xyXG5pbXBvcnQgeyB1c2VUcmFuc2xhdGlvbiB9IGZyb20gJ3JlYWN0LWkxOG5leHQnO1xyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBQcmljZVNob3cgPSAoe3ByaWNlfSkgPT4ge1xyXG4gICAgY29uc3Qge3R9ID0gdXNlVHJhbnNsYXRpb24oJ21lc3NhZ2VzJyk7XHJcblxyXG4gICAgc3dpdGNoKHByaWNlLnNob3dUeXBlKSB7XHJcbiAgICAgICAgY2FzZSBTSE9XX1BSSUNFX0hUOlxyXG4gICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtwcmljZS5wYXlUeXBlICE9PSBQQVlfUFJJQ0VfSFQgPyAnbGlnaHQnOiAnJ30+e3ByaWNlRm9ybWF0ZXIocHJpY2UucHJpY2VIVCl9PC9zcGFuPlxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIGNhc2UgU0hPV19QUklDRV9UVEM6XHJcbiAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3ByaWNlLnBheVR5cGUgIT09IFBBWV9QUklDRV9UVEMgPyAnbGlnaHQnOiAnJ30+e3ByaWNlRm9ybWF0ZXIocHJpY2UucHJpY2VUVEMpfTwvc3Bhbj5cclxuICAgICAgICAgICAgKVxyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgIGlmKHByaWNlLnBheVR5cGUgPT09IFBBWV9QUklDRV9UVEMpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcmljZS1zaG93IGR1YWxcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPntwcmljZUZvcm1hdGVyKHByaWNlLnByaWNlVFRDKX08L3NwYW4+PHNwYW4gY2xhc3NOYW1lPVwicHJpY2Utc2hvdy1zdWZmaXhcIj57dCgndHRjJyl9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsaWdodFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+e3ByaWNlRm9ybWF0ZXIocHJpY2UucHJpY2VIVCl9PC9zcGFuPjxzcGFuIGNsYXNzTmFtZT1cInByaWNlLXNob3ctc3VmZml4XCI+e3QoJ2h0Jyl9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcmljZS1zaG93IGR1YWxcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj57cHJpY2VGb3JtYXRlcihwcmljZS5wcmljZUhUKX08L3NwYW4+PHNwYW4gY2xhc3NOYW1lPVwicHJpY2Utc2hvdy1zdWZmaXhcIj57dCgnaHQnKX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsaWdodFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj57cHJpY2VGb3JtYXRlcihwcmljZS5wcmljZVRUQyl9PC9zcGFuPjxzcGFuIGNsYXNzTmFtZT1cInByaWNlLXNob3ctc3VmZml4XCI+e3QoJ3R0YycpfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICApXHJcbiAgICB9XHJcblxyXG59IiwiaW1wb3J0IGkxOG4gZnJvbSBcIi4uL2VudHJ5cG9pbnRzL2kxOG5cIjtcclxuXHJcbmV4cG9ydCBjb25zdCBwcmljZUZvcm1hdGVyID0gKHByaWNlKSA9PiB7XHJcbiAgICBjb25zdCBmb3JtYXRlciA9IG5ldyBJbnRsLk51bWJlckZvcm1hdChnZXRMb2NhbGVPcHRpb24oKSwge3N0eWxlOiAnY3VycmVuY3knLCBjdXJyZW5jeTogJ0VVUid9KTtcclxuICAgIHJldHVybiBmb3JtYXRlci5mb3JtYXQocHJpY2UgLyAxMDApO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IHJldmlld05vdGVGb3JtYXRlciA9IChyZXZpZXdOb3RlKSA9PiB7XHJcbiAgICBjb25zdCBmb3JtYXRlciA9IG5ldyBJbnRsLk51bWJlckZvcm1hdChnZXRMb2NhbGVPcHRpb24oKSk7XHJcbiAgICByZXR1cm4gZm9ybWF0ZXIuZm9ybWF0KHJldmlld05vdGUgLyAxMCk7XHJcbn07XHJcblxyXG4vKipcclxuICogQHBhcmFtIHtudW1iZXJ9IGRpc3RhbmNlIChtKVxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IGRpc3RhbmNlRm9ybWF0ZXIgPSAoZGlzdGFuY2UpID0+IHtcclxuICAgIGlmKGRpc3RhbmNlID49IDEwMDApIHtcclxuICAgICAgICBjb25zdCBkaXN0YW5jZUluS20gPSBNYXRoLnJvdW5kKChkaXN0YW5jZSAvIDEwMCkpIC8gMTA7IC8vIGV4OiAxNTc0IG0gLS0tPiAxLjZcclxuXHJcbiAgICAgICAgY29uc3QgZm9ybWF0ZXIgPSBuZXcgSW50bC5OdW1iZXJGb3JtYXQoZ2V0TG9jYWxlT3B0aW9uKCkpO1xyXG4gICAgICAgIHJldHVybiBmb3JtYXRlci5mb3JtYXQoZGlzdGFuY2VJbkttKSArICcga20nO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGRpc3RhbmNlICsgJyBtJztcclxufVxyXG5cclxuXHJcbmNvbnN0IGdldExvY2FsZU9wdGlvbiA9ICgpID0+IHtcclxuICAgIGlmKGkxOG4ubGFuZ3VhZ2UgPT09ICdlbicpIHtcclxuICAgICAgICByZXR1cm4gJ2VuLVVTJztcclxuICAgIH1cclxuICAgIHJldHVybiAnZnItRlInO1xyXG59IiwiaW1wb3J0IHsgU2l0ZUNvbmZpZyB9IGZyb20gXCIuLi8uLi9Db25maWcvU2l0ZUNvbmZpZ1wiO1xyXG5pbXBvcnQgaTE4biBmcm9tIFwiLi4vLi4vZW50cnlwb2ludHMvaTE4blwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IGNvbmZpZ3VyZUxhbmd1YWdlID0gKCkgPT4ge1xyXG4gICAgY29uc3QgbGFuZyA9IHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZS5zcGxpdCgnLycpWzFdO1xyXG4gICAgaWYoU2l0ZUNvbmZpZy5TVVBQT1JURURfTE9DQUxFUy5pbmNsdWRlcyhsYW5nKSkge1xyXG4gICAgICAgIGkxOG4uY2hhbmdlTGFuZ3VhZ2UobGFuZyk7XHJcbiAgICB9XHJcbn0iLCJleHBvcnQgY29uc3QgUEFZX1BSSUNFX0hUID0gJ3BheV9wcmljZV9odCc7XHJcblxyXG5leHBvcnQgY29uc3QgUEFZX1BSSUNFX1RUQyA9ICdwYXlfcHJpY2VfdHRjJztcclxuXHJcbmV4cG9ydCBjb25zdCBTSE9XX1BSSUNFX0hUID0gJ3Nob3dfcHJpY2VfaHQnO1xyXG5cclxuZXhwb3J0IGNvbnN0IFNIT1dfUFJJQ0VfVFRDID0gJ3Nob3dfcHJpY2VfdHRjJztcclxuXHJcbmV4cG9ydCBjb25zdCBTSE9XX1BSSUNFU19IVF9UVEMgPSAnc2hvd19wcmljZXNfaHRfdHRjJztcclxuXHJcblxyXG4vKipcclxuICogXHJcbiAqIEBwYXJhbSB7YXJyYXl9IHByaWNlcyBjdXN0b21QcmljZVtdIFxyXG4gKiBAcmV0dXJucyB7T2JqZWN0fG51bGx9IGN1c3RvbVByaWNlXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgcHJpY2VBZGQgPSAocHJpY2VzKSA9PiB7XHJcblxyXG4gICAgaWYocHJpY2VzLmxlbmd0aCA8IDEpIHtcclxuICAgICAgICByZXR1cm4gbnVsbFxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHRvdGFsUHJpY2UgPSB7XHJcbiAgICAgICAgcGF5VHlwZTogcHJpY2VzWzBdLnBheVR5cGUsXHJcbiAgICAgICAgc2hvd1R5cGU6IHByaWNlc1swXS5zaG93VHlwZSxcclxuICAgICAgICBwcmljZUhUOiBudWxsLFxyXG4gICAgICAgIHByaWNlVFRDOiBudWxsLFxyXG4gICAgICAgIHZhdFJhdGU6IG51bGwsXHJcbiAgICAgICAgcHJpY2VUb1BheTogbnVsbFxyXG4gICAgfVxyXG5cclxuICAgIGZvcihjb25zdCBwcmljZSBvZiBwcmljZXMpIHtcclxuICAgICAgICBpZihwcmljZS5wcmljZUhUKSB7XHJcbiAgICAgICAgICAgIGlmKCF0b3RhbFByaWNlLnByaWNlSFQpIHtcclxuICAgICAgICAgICAgICAgIHRvdGFsUHJpY2UucHJpY2VIVCA9IHByaWNlLnByaWNlSFRcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRvdGFsUHJpY2UucHJpY2VIVCArPSBwcmljZS5wcmljZUhUO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKHByaWNlLnByaWNlVFRDKSB7XHJcbiAgICAgICAgICAgIGlmKCF0b3RhbFByaWNlLnByaWNlVFRDKSB7XHJcbiAgICAgICAgICAgICAgICB0b3RhbFByaWNlLnByaWNlVFRDID0gcHJpY2UucHJpY2VUVENcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRvdGFsUHJpY2UucHJpY2VUVEMgKz0gcHJpY2UucHJpY2VUVEM7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHNldFByaWNlVG9QYXkodG90YWxQcmljZSk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBcclxuICogQHBhcmFtIHtPYmplY3R9IHByaWNlIEN1c3RvbVByaWNlXHJcbiAqIEBwYXJhbSB7bnVtYmVyfSBtdWx0aXBsaWVyIFxyXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBDdXN0b21QcmljZSBcclxuICovXHJcbmV4cG9ydCBjb25zdCBwcmljZU11bHRpcGx5ID0gKHByaWNlLCBtdWx0aXBsaWVyKSA9PiB7XHJcbiAgICBjb25zdCB0b3RhbFByaWNlID0ge1xyXG4gICAgICAgIHBheVR5cGU6IHByaWNlLnBheVR5cGUsXHJcbiAgICAgICAgc2hvd1R5cGU6IHByaWNlLnNob3dUeXBlLFxyXG4gICAgICAgIHZhdFJhdGU6IHByaWNlLnZhdFJhdGUsXHJcbiAgICAgICAgcHJpY2VIVDogbnVsbCxcclxuICAgICAgICBwcmljZVRUQzogbnVsbFxyXG4gICAgfTtcclxuICAgIGlmKHByaWNlLnByaWNlSFQgIT09IG51bGwpIHtcclxuICAgICAgICB0b3RhbFByaWNlLnByaWNlSFQgPSBwcmljZS5wcmljZUhUICogbXVsdGlwbGllcjtcclxuICAgIH1cclxuICAgIGlmKHByaWNlLnByaWNlVFRDICE9PSBudWxsKSB7XHJcbiAgICAgICAgdG90YWxQcmljZS5wcmljZVRUQyA9IHByaWNlLnByaWNlVFRDICogbXVsdGlwbGllcjtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gc2V0UHJpY2VUb1BheSh0b3RhbFByaWNlKTtcclxufVxyXG5cclxuXHJcbi8qKlxyXG4gKiBcclxuICogQHBhcmFtIHtPYmplY3R9IHByaWNlIEN1c3RvbVByaWNlIFxyXG4gKiBAcGFyYW0ge09iamVjdH0gbGVzc1ByaWNlIEN1c3RvbVByaWNlXHJcbiAqIEByZXR1cm5zIHtPYmplY3R9IEN1c3RvbVByaWNlIFxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IHByaWNlTGVzcyA9IChwcmljZSwgbGVzc1ByaWNlKSA9PiB7XHJcbiAgICBjb25zdCB0b3RhbFByaWNlID0ge1xyXG4gICAgICAgIHBheVR5cGU6IHByaWNlLnBheVR5cGUsXHJcbiAgICAgICAgc2hvd1R5cGU6IHByaWNlLnNob3dUeXBlLFxyXG4gICAgICAgIHZhdFJhdGU6IG51bGwsXHJcbiAgICAgICAgcHJpY2VIVDogbnVsbCxcclxuICAgICAgICBwcmljZVRUQzogbnVsbFxyXG4gICAgfTtcclxuICAgIGlmKHByaWNlLnByaWNlSFQgIT09IG51bGwgJiYgbGVzc1ByaWNlLnByaWNlSFQgIT09IG51bGwpIHtcclxuICAgICAgICB0b3RhbFByaWNlLnByaWNlSFQgPSBwcmljZS5wcmljZUhUIC0gbGVzc1ByaWNlLnByaWNlSFQ7XHJcbiAgICB9XHJcbiAgICBpZihwcmljZS5wcmljZVRUQyAhPT0gbnVsbCAmJiBsZXNzUHJpY2UucHJpY2VUVEMgIT09IG51bGwpIHtcclxuICAgICAgICB0b3RhbFByaWNlLnByaWNlVFRDID0gcHJpY2UucHJpY2VUVEMgLSBsZXNzUHJpY2UucHJpY2VUVEM7XHJcbiAgICB9XHJcblxyXG4gICAgLy9zaSBsJ3VuZSBkZXMgdmFsZXVycyBlc3Qgw6AgMCBvbiByZW1ldCBudWxsIMOgIGxhIHBsYWNlXHJcbiAgICBpZih0b3RhbFByaWNlLnByaWNlSFQgPT09IDApIHtcclxuICAgICAgICB0b3RhbFByaWNlLnByaWNlSFQgPSBudWxsO1xyXG4gICAgfVxyXG4gICAgaWYodG90YWxQcmljZS5wcmljZVRUQyA9PT0gMCkge1xyXG4gICAgICAgIHRvdGFsUHJpY2UucHJpY2VUVEMgPSBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBzZXRQcmljZVRvUGF5KHRvdGFsUHJpY2UpO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBAcGFyYW0ge09iamVjdH0gcHJpY2UgQ3VzdG9tUHJpY2VcclxuICovXHJcbmV4cG9ydCBjb25zdCBzZXRQcmljZVRvUGF5ID0gKHByaWNlKSA9PiB7XHJcbiAgICBcclxuICAgIHByaWNlLnByaWNlVG9QYXkgPSBwcmljZS5wYXlUeXBlID09PSBQQVlfUFJJQ0VfVFRDID8gcHJpY2UucHJpY2VUVEM6IHByaWNlLnByaWNlSFQ7XHJcblxyXG4gICAgcmV0dXJuIHByaWNlO1xyXG59IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307Il0sIm5hbWVzIjpbInVzZUVmZmVjdCIsInVzZVN0YXRlIiwidXNlT3BlblN0YXRlIiwic3RhcnRpbmdTdGF0ZSIsImFyZ3VtZW50cyIsImxlbmd0aCIsInVuZGVmaW5lZCIsIl91c2VTdGF0ZSIsIl91c2VTdGF0ZTIiLCJfc2xpY2VkVG9BcnJheSIsImlzT3BlbiIsInNldE9wZW4iLCJvcGVuIiwiY2xvc2UiLCJSZWFjdCIsIkxvYWRlciIsIkZvcm1CdXR0b24iLCJfcmVmIiwiY2hpbGRyZW4iLCJhZGRpdGlvbmFsQ2xhc3MiLCJfcmVmJGRpc2FibGVkIiwiZGlzYWJsZWQiLCJsb2FkaW5nIiwicHJvcHMiLCJfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMiLCJfZXhjbHVkZWQiLCJjcmVhdGVFbGVtZW50IiwiX2V4dGVuZHMiLCJ0eXBlIiwiY2xhc3NOYW1lIiwidCIsImZpbGwiLCJ2ZXJzaW9uIiwieG1sbnMiLCJ4IiwieSIsInZpZXdCb3giLCJzdHlsZSIsImVuYWJsZUJhY2tncm91bmQiLCJucyIsImN4IiwiY3kiLCJyIiwiZCIsInByaWNlRm9ybWF0ZXIiLCJQQVlfUFJJQ0VfSFQiLCJQQVlfUFJJQ0VfVFRDIiwiU0hPV19QUklDRV9IVCIsIlNIT1dfUFJJQ0VfVFRDIiwidXNlVHJhbnNsYXRpb24iLCJQcmljZVNob3ciLCJwcmljZSIsIl91c2VUcmFuc2xhdGlvbiIsInNob3dUeXBlIiwicGF5VHlwZSIsInByaWNlSFQiLCJwcmljZVRUQyIsImkxOG4iLCJmb3JtYXRlciIsIkludGwiLCJOdW1iZXJGb3JtYXQiLCJnZXRMb2NhbGVPcHRpb24iLCJjdXJyZW5jeSIsImZvcm1hdCIsInJldmlld05vdGVGb3JtYXRlciIsInJldmlld05vdGUiLCJkaXN0YW5jZUZvcm1hdGVyIiwiZGlzdGFuY2UiLCJkaXN0YW5jZUluS20iLCJNYXRoIiwicm91bmQiLCJsYW5ndWFnZSIsIlNpdGVDb25maWciLCJjb25maWd1cmVMYW5ndWFnZSIsImxhbmciLCJ3aW5kb3ciLCJsb2NhdGlvbiIsInBhdGhuYW1lIiwic3BsaXQiLCJTVVBQT1JURURfTE9DQUxFUyIsImluY2x1ZGVzIiwiY2hhbmdlTGFuZ3VhZ2UiLCJTSE9XX1BSSUNFU19IVF9UVEMiLCJwcmljZUFkZCIsInByaWNlcyIsInRvdGFsUHJpY2UiLCJ2YXRSYXRlIiwicHJpY2VUb1BheSIsIl9pdGVyYXRvciIsIl9jcmVhdGVGb3JPZkl0ZXJhdG9ySGVscGVyIiwiX3N0ZXAiLCJzIiwibiIsImRvbmUiLCJ2YWx1ZSIsImVyciIsImUiLCJmIiwic2V0UHJpY2VUb1BheSIsInByaWNlTXVsdGlwbHkiLCJtdWx0aXBsaWVyIiwicHJpY2VMZXNzIiwibGVzc1ByaWNlIl0sInNvdXJjZVJvb3QiOiIifQ==
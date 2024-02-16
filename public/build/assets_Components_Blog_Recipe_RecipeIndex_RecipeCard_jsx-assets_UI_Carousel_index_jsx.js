"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["assets_Components_Blog_Recipe_RecipeIndex_RecipeCard_jsx-assets_UI_Carousel_index_jsx"],{

/***/ "./assets/Components/Blog/Recipe/RecipeIndex/RecipeCard.jsx":
/*!******************************************************************!*\
  !*** ./assets/Components/Blog/Recipe/RecipeIndex/RecipeCard.jsx ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RecipeCard": () => (/* binding */ RecipeCard)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.map.js */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


var RecipeCard = function RecipeCard(_ref) {
  var recipe = _ref.recipe;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("li", {
    className: "product-card type-recipe"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("a", {
    className: "product-card-img-link",
    href: recipe.target
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
    className: "product-card-img-wrapper"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("img", {
    className: "product-card-img",
    src: recipe.picture.path,
    alt: recipe.picture.alt
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
    className: "product-card-body"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("h2", {
    className: "product-card-title"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("a", {
    href: recipe.target
  }, recipe.title)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("ul", {
    className: "product-card-list"
  }, recipe.ingredients.map(function (ingredient, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("li", {
      className: "product-card-list-item",
      key: index
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("span", null, ingredient));
  }))));
};

/***/ }),

/***/ "./assets/CustomHook/listener/useWindowResizeListener.jsx":
/*!****************************************************************!*\
  !*** ./assets/CustomHook/listener/useWindowResizeListener.jsx ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useWindowResizeListener": () => (/* binding */ useWindowResizeListener)
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

var useWindowResizeListener = function useWindowResizeListener() {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_16__.useState)(window.innerWidth),
    _useState2 = _slicedToArray(_useState, 2),
    width = _useState2[0],
    setWidth = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_16__.useState)(window.innerHeight),
    _useState4 = _slicedToArray(_useState3, 2),
    height = _useState4[0],
    setHeight = _useState4[1];
  (0,react__WEBPACK_IMPORTED_MODULE_16__.useEffect)(function () {
    var onResize = function onResize() {
      setWidth(window.innerWidth);
      setHeight(window.innerHeight);
    };
    window.addEventListener('resize', onResize);
    return function () {
      return window.removeEventListener('resize', onResize);
    };
  });
  return [width, height];
};

/***/ }),

/***/ "./assets/Service/CarouselResponsiveRules.js":
/*!***************************************************!*\
  !*** ./assets/Service/CarouselResponsiveRules.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CarouselResponsiveRules": () => (/* binding */ CarouselResponsiveRules)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_object_entries_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.entries.js */ "./node_modules/core-js/modules/es.object.entries.js");
/* harmony import */ var core_js_modules_es_object_entries_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_entries_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.push.js */ "./node_modules/core-js/modules/es.array.push.js");
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.object.keys.js */ "./node_modules/core-js/modules/es.object.keys.js");
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.error.cause.js */ "./node_modules/core-js/modules/es.error.cause.js");
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.error.to-string.js */ "./node_modules/core-js/modules/es.error.to-string.js");
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_weak_map_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.weak-map.js */ "./node_modules/core-js/modules/es.weak-map.js");
/* harmony import */ var core_js_modules_es_weak_map_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_weak_map_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.symbol.to-primitive.js */ "./node_modules/core-js/modules/es.symbol.to-primitive.js");
/* harmony import */ var core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.date.to-primitive.js */ "./node_modules/core-js/modules/es.date.to-primitive.js");
/* harmony import */ var core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.number.constructor.js */ "./node_modules/core-js/modules/es.number.constructor.js");
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.array.is-array.js */ "./node_modules/core-js/modules/es.array.is-array.js");
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! core-js/modules/es.array.from.js */ "./node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! core-js/modules/es.regexp.test.js */ "./node_modules/core-js/modules/es.regexp.test.js");
/* harmony import */ var core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_22__);
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }























function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }
function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }
function _classPrivateFieldGet(receiver, privateMap) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "get"); return _classApplyDescriptorGet(receiver, descriptor); }
function _classApplyDescriptorGet(receiver, descriptor) { if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }
function _classPrivateFieldSet(receiver, privateMap, value) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "set"); _classApplyDescriptorSet(receiver, descriptor, value); return value; }
function _classExtractFieldDescriptor(receiver, privateMap, action) { if (!privateMap.has(receiver)) { throw new TypeError("attempted to " + action + " private field on non-instance"); } return privateMap.get(receiver); }
function _classApplyDescriptorSet(receiver, descriptor, value) { if (descriptor.set) { descriptor.set.call(receiver, value); } else { if (!descriptor.writable) { throw new TypeError("attempted to set read only private field"); } descriptor.value = value; } }
var _rules = /*#__PURE__*/new WeakMap();
var _heightSteps = /*#__PURE__*/new WeakMap();
var _widthStepsByHeight = /*#__PURE__*/new WeakMap();
var CarouselResponsiveRules = /*#__PURE__*/function () {
  /**
   * 
   * @param {Object} rules {
   *      minHeight: {
   *          minWidth: {
   *              slidesToShow: number,
   *              slidesToScroll: number
   *          },
   *      },
   * }
   */
  function CarouselResponsiveRules(rules) {
    _classCallCheck(this, CarouselResponsiveRules);
    /** @type {Object} */
    _classPrivateFieldInitSpec(this, _rules, {
      writable: true,
      value: void 0
    });
    /** @type {array} */
    _classPrivateFieldInitSpec(this, _heightSteps, {
      writable: true,
      value: []
    });
    /** @type {Object} */
    _classPrivateFieldInitSpec(this, _widthStepsByHeight, {
      writable: true,
      value: {}
    });
    _classPrivateFieldSet(this, _rules, rules);
    for (var _i = 0, _Object$entries = Object.entries(rules); _i < _Object$entries.length; _i++) {
      var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2),
        height = _Object$entries$_i[0],
        rulesByHeight = _Object$entries$_i[1];
      _classPrivateFieldGet(this, _heightSteps).push(height);
      _classPrivateFieldGet(this, _widthStepsByHeight)[height] = Object.keys(rulesByHeight);
    }
  }

  /**
   * 
   * @param {number} width 
   * @param {number} height
   * @returns {Object} rules -> {slidesToShow: number, slidesToScroll: number}
   */
  _createClass(CarouselResponsiveRules, [{
    key: "getRules",
    value: function getRules(width, height) {
      var heightStep = 0;
      var widthStep = 0;
      var _iterator = _createForOfIteratorHelper(_classPrivateFieldGet(this, _heightSteps)),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var hs = _step.value;
          if (height > hs) {
            heightStep = hs;
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
      ;
      var _iterator2 = _createForOfIteratorHelper(_classPrivateFieldGet(this, _widthStepsByHeight)[heightStep]),
        _step2;
      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var ws = _step2.value;
          if (width > ws) {
            widthStep = ws;
          }
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }
      return _classPrivateFieldGet(this, _rules)[heightStep][widthStep];
    }
  }]);
  return CarouselResponsiveRules;
}();

/***/ }),

/***/ "./assets/UI/Carousel/CarouselArrowNext.jsx":
/*!**************************************************!*\
  !*** ./assets/UI/Carousel/CarouselArrowNext.jsx ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CarouselArrowNext": () => (/* binding */ CarouselArrowNext)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Icon_ChevronRightIcon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Icon/ChevronRightIcon */ "./assets/UI/Icon/ChevronRightIcon.jsx");
/* harmony import */ var i18next__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! i18next */ "./node_modules/i18next/dist/esm/i18next.js");



var CarouselArrowNext = function CarouselArrowNext(_ref) {
  var isActive = _ref.isActive,
    onClick = _ref.onClick;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    className: 'carousel-arrow next' + (isActive ? ' active' : ''),
    onClick: onClick,
    "aria-label": (0,i18next__WEBPACK_IMPORTED_MODULE_2__.t)('next', {
      ns: 'messages'
    })
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Icon_ChevronRightIcon__WEBPACK_IMPORTED_MODULE_1__.ChevronRightIcon, null));
};

/***/ }),

/***/ "./assets/UI/Carousel/CarouselArrowPrev.jsx":
/*!**************************************************!*\
  !*** ./assets/UI/Carousel/CarouselArrowPrev.jsx ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CarouselArrowPrev": () => (/* binding */ CarouselArrowPrev)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Icon_ChevronLeftIcon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Icon/ChevronLeftIcon */ "./assets/UI/Icon/ChevronLeftIcon.jsx");
/* harmony import */ var i18next__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! i18next */ "./node_modules/i18next/dist/esm/i18next.js");



var CarouselArrowPrev = function CarouselArrowPrev(_ref) {
  var isActive = _ref.isActive,
    onClick = _ref.onClick;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    className: 'carousel-arrow prev' + (isActive ? ' active' : ''),
    onClick: onClick,
    "aria-label": (0,i18next__WEBPACK_IMPORTED_MODULE_2__.t)('previous', {
      ns: 'messages'
    })
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Icon_ChevronLeftIcon__WEBPACK_IMPORTED_MODULE_1__.ChevronLeftIcon, null));
};

/***/ }),

/***/ "./assets/UI/Carousel/InfiniteDots.jsx":
/*!*********************************************!*\
  !*** ./assets/UI/Carousel/InfiniteDots.jsx ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InfiniteDots": () => (/* binding */ InfiniteDots)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");


var InfiniteDots = function InfiniteDots(_ref) {
  var totalItems = _ref.totalItems,
    slidesToShow = _ref.slidesToShow,
    hasArrowPrev = _ref.hasArrowPrev,
    hasArrowNext = _ref.hasArrowNext,
    carouselGoTo = _ref.carouselGoTo,
    carouselPrev = _ref.carouselPrev,
    carouselNext = _ref.carouselNext;
  var _useTranslation = (0,react_i18next__WEBPACK_IMPORTED_MODULE_1__.useTranslation)('messages'),
    t = _useTranslation.t;

  /* custom dots */
  var goToLast = function goToLast() {
    carouselGoTo(totalItems - slidesToShow);
  };
  var goToFirst = function goToFirst() {
    carouselGoTo(0);
  };
  var goToMiddle = function goToMiddle() {
    if (!hasArrowPrev) {
      carouselNext();
    }
    if (!hasArrowNext && hasArrowPrev) {
      carouselPrev();
    }
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "carousel-dots"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    className: 'carousel-dot' + (!hasArrowPrev && hasArrowNext ? ' active' : ''),
    onClick: goToFirst,
    "aria-label": t('go_to_start')
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    className: 'carousel-dot' + (hasArrowPrev && hasArrowNext ? ' active' : ''),
    onClick: goToMiddle,
    "aria-label": t('go_to_middle')
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    className: 'carousel-dot' + (!hasArrowNext ? ' active' : ''),
    onClick: goToLast,
    "aria-label": t('go_to_end')
  }));
};

/***/ }),

/***/ "./assets/UI/Carousel/index.jsx":
/*!**************************************!*\
  !*** ./assets/UI/Carousel/index.jsx ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Carousel": () => (/* binding */ Carousel)
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
/* harmony import */ var core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.symbol.to-primitive.js */ "./node_modules/core-js/modules/es.symbol.to-primitive.js");
/* harmony import */ var core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/es.date.to-primitive.js */ "./node_modules/core-js/modules/es.date.to-primitive.js");
/* harmony import */ var core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! core-js/modules/es.number.constructor.js */ "./node_modules/core-js/modules/es.number.constructor.js");
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! core-js/modules/es.object.keys.js */ "./node_modules/core-js/modules/es.object.keys.js");
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! core-js/modules/es.array.filter.js */ "./node_modules/core-js/modules/es.array.filter.js");
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptor.js */ "./node_modules/core-js/modules/es.object.get-own-property-descriptor.js");
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptors.js */ "./node_modules/core-js/modules/es.object.get-own-property-descriptors.js");
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_25__);
/* harmony import */ var core_js_modules_es_object_define_properties_js__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! core-js/modules/es.object.define-properties.js */ "./node_modules/core-js/modules/es.object.define-properties.js");
/* harmony import */ var core_js_modules_es_object_define_properties_js__WEBPACK_IMPORTED_MODULE_26___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_properties_js__WEBPACK_IMPORTED_MODULE_26__);
/* harmony import */ var core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! core-js/modules/es.object.assign.js */ "./node_modules/core-js/modules/es.object.assign.js");
/* harmony import */ var core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_27___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_27__);
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! core-js/modules/es.function.bind.js */ "./node_modules/core-js/modules/es.function.bind.js");
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_28___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_28__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_29___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_29__);
/* harmony import */ var _CustomHook_listener_useWindowResizeListener__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ../../CustomHook/listener/useWindowResizeListener */ "./assets/CustomHook/listener/useWindowResizeListener.jsx");
/* harmony import */ var _InfiniteDots__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./InfiniteDots */ "./assets/UI/Carousel/InfiniteDots.jsx");
/* harmony import */ var _CarouselArrowPrev__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./CarouselArrowPrev */ "./assets/UI/Carousel/CarouselArrowPrev.jsx");
/* harmony import */ var _CarouselArrowNext__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./CarouselArrowNext */ "./assets/UI/Carousel/CarouselArrowNext.jsx");
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! react-slick */ "./node_modules/react-slick/lib/index.js");
/* harmony import */ var _Icon_Loader__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ../Icon/Loader */ "./assets/UI/Icon/Loader.jsx");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_38___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_38__);
/* harmony import */ var _Service_CarouselResponsiveRules__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ../../Service/CarouselResponsiveRules */ "./assets/Service/CarouselResponsiveRules.js");
/* harmony import */ var _CustomHook_listener_useTouchingListener__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ../../CustomHook/listener/useTouchingListener */ "./assets/CustomHook/listener/useTouchingListener.jsx");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }





























function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
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










var Carousel = function Carousel(_ref) {
  var children = _ref.children,
    className = _ref.className,
    items = _ref.items,
    responsive = _ref.responsive,
    _ref$loadInfiniteData = _ref.loadInfiniteData,
    loadInfiniteData = _ref$loadInfiniteData === void 0 ? false : _ref$loadInfiniteData,
    _ref$speed = _ref.speed,
    speed = _ref$speed === void 0 ? 500 : _ref$speed,
    _ref$arrows = _ref.arrows,
    arrows = _ref$arrows === void 0 ? true : _ref$arrows,
    _ref$onAfterChangeLoa = _ref.onAfterChangeLoadItems,
    onAfterChangeLoadItems = _ref$onAfterChangeLoa === void 0 ? null : _ref$onAfterChangeLoa,
    _ref$isLoading = _ref.isLoading,
    isLoading = _ref$isLoading === void 0 ? false : _ref$isLoading,
    _ref$hasArrowNext = _ref.hasArrowNext,
    hasArrowNext = _ref$hasArrowNext === void 0 ? true : _ref$hasArrowNext,
    _ref$hasArrowPrev = _ref.hasArrowPrev,
    hasArrowPrev = _ref$hasArrowPrev === void 0 ? true : _ref$hasArrowPrev;
  var sliderRef = (0,react__WEBPACK_IMPORTED_MODULE_29__.useRef)(null);

  //on vérifie si utilisation du tactile, auquel cas il faut afficher le bouton "Add to cart" en permanence.
  var isTouching = (0,_CustomHook_listener_useTouchingListener__WEBPACK_IMPORTED_MODULE_37__.useTouchingListener)();

  /* settings */
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_29__.useState)({
      arrows: false,
      customArrows: false,
      dots: !loadInfiniteData,
      infinite: !loadInfiniteData,
      speed: speed,
      slidesToShow: 1,
      slidesToScroll: 1
    }),
    _useState2 = _slicedToArray(_useState, 2),
    settings = _useState2[0],
    setSettings = _useState2[1];

  /* responsive */
  var _useWindowResizeListe = (0,_CustomHook_listener_useWindowResizeListener__WEBPACK_IMPORTED_MODULE_30__.useWindowResizeListener)(),
    _useWindowResizeListe2 = _slicedToArray(_useWindowResizeListe, 2),
    windowWidth = _useWindowResizeListe2[0],
    windowHeight = _useWindowResizeListe2[1];
  (0,react__WEBPACK_IMPORTED_MODULE_29__.useEffect)(function () {
    if (!items || items.length === 0) {
      return;
    }
    var rules = responsive.getRules(windowWidth, windowHeight);
    var slidesToShow = items.length > rules.slidesToShow ? rules.slidesToShow : items.length;
    var slidesToScroll = slidesToShow >= rules.slidesToScroll ? rules.slidesToScroll : slidesToShow;
    //si on a passé param arrows = false, ou si il n'y a pas assez d'items, ou si tactile, alors on ne veut pas afficher les flèches
    var hasArrows = arrows && items.length > slidesToShow && !isTouching;
    setSettings(function (settings) {
      return _objectSpread(_objectSpread({}, settings), {}, {
        slidesToShow: slidesToShow,
        slidesToScroll: slidesToScroll,
        customArrows: hasArrows
      });
    });
  }, [windowWidth, windowHeight, items, isTouching]);

  /* move callbacks */
  var carouselNext = function carouselNext() {
    sliderRef.current.slickNext();
  };
  var carouselPrev = function carouselPrev() {
    sliderRef.current.slickPrev();
  };
  var carouselGoTo = function carouselGoTo(index) {
    sliderRef.current.slickGoTo(index);
  };

  /* animation onChange */
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_29__.useState)(false),
    _useState4 = _slicedToArray(_useState3, 2),
    isChanging = _useState4[0],
    setChanging = _useState4[1];
  var handleBeforeChange = function handleBeforeChange() {
    setChanging(true);
  };
  var handleAfterChange = function handleAfterChange(index) {
    if (onAfterChangeLoadItems) {
      onAfterChangeLoadItems(index, settings.slidesToScroll);
    }
    setChanging(false);
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement("div", {
    className: className + '-wrapper' + ' custom-carousel-wrapper' + (isChanging ? ' is-changing' : '')
  }, settings.customArrows && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement(_CarouselArrowPrev__WEBPACK_IMPORTED_MODULE_32__.CarouselArrowPrev, {
    isActive: hasArrowPrev,
    onClick: carouselPrev
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement(react_slick__WEBPACK_IMPORTED_MODULE_34__["default"], _extends({
    ref: sliderRef
  }, settings, {
    className: className + ' custom-carousel',
    beforeChange: handleBeforeChange,
    afterChange: handleAfterChange
  }), children), settings.customArrows && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement(_CarouselArrowNext__WEBPACK_IMPORTED_MODULE_33__.CarouselArrowNext, {
    isActive: hasArrowNext,
    onClick: carouselNext
  }), loadInfiniteData && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement(_InfiniteDots__WEBPACK_IMPORTED_MODULE_31__.InfiniteDots, {
    hasArrowPrev: hasArrowPrev,
    hasArrowNext: hasArrowNext,
    carouselGoTo: carouselGoTo,
    carouselPrev: carouselPrev,
    carouselNext: carouselNext,
    totalItems: items.length,
    slidesToShow: settings.slidesToShow
  }), isLoading && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement(_Icon_Loader__WEBPACK_IMPORTED_MODULE_35__.Loader, {
    additionalClass: "carousel-loader"
  }));
};
Carousel.propTypes = {
  responsive: prop_types__WEBPACK_IMPORTED_MODULE_38___default().instanceOf(_Service_CarouselResponsiveRules__WEBPACK_IMPORTED_MODULE_36__.CarouselResponsiveRules)
};

/***/ }),

/***/ "./assets/UI/Icon/ChevronLeftIcon.jsx":
/*!********************************************!*\
  !*** ./assets/UI/Icon/ChevronLeftIcon.jsx ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChevronLeftIcon": () => (/* binding */ ChevronLeftIcon)
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

var ChevronLeftIcon = function ChevronLeftIcon(_ref) {
  var additionalClass = _ref.additionalClass,
    props = _objectWithoutProperties(_ref, _excluded);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement("svg", _extends({
    className: 'icon i-chevron-left' + (additionalClass ? ' ' + additionalClass : '')
  }, props, {
    xmlns: "http://www.w3.org/2000/svg",
    version: "1.1",
    x: "0",
    y: "0",
    viewBox: "0 0 511.949 511.949"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement("g", {
    transform: "matrix(-1,1.2246467991473532e-16,-1.2246467991473532e-16,-1,511.9491119384767,511.95023632049555)"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement("path", {
    fill: "currentColor",
    d: "M386.235 248.308 140.902 2.975c-4.267-4.053-10.987-3.947-15.04.213a10.763 10.763 0 0 0 0 14.827l237.76 237.76-237.76 237.867c-4.267 4.053-4.373 10.88-.213 15.04 4.053 4.267 10.88 4.373 15.04.213l.213-.213 245.333-245.333a10.624 10.624 0 0 0 0-15.041z"
  })));
};

/***/ }),

/***/ "./assets/UI/Icon/ChevronRightIcon.jsx":
/*!*********************************************!*\
  !*** ./assets/UI/Icon/ChevronRightIcon.jsx ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChevronRightIcon": () => (/* binding */ ChevronRightIcon)
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

var ChevronRightIcon = function ChevronRightIcon(_ref) {
  var additionalClass = _ref.additionalClass,
    props = _objectWithoutProperties(_ref, _excluded);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement("svg", _extends({
    className: 'icon i-chevron-right' + (additionalClass ? ' ' + additionalClass : '')
  }, props, {
    version: "1.1",
    xmlns: "http://www.w3.org/2000/svg",
    x: "0px",
    y: "0px",
    viewBox: "0 0 511.949 511.949"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement("path", {
    fill: "currentColor",
    d: "M386.235,248.308L140.902,2.975c-4.267-4.053-10.987-3.947-15.04,0.213c-3.947,4.16-3.947,10.667,0,14.827l237.76,237.76\r l-237.76,237.867c-4.267,4.053-4.373,10.88-0.213,15.04c4.053,4.267,10.88,4.373,15.04,0.213c0.107-0.107,0.213-0.213,0.213-0.213\r l245.333-245.333C390.395,259.188,390.395,252.468,386.235,248.308z"
  }));
};

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXNzZXRzX0NvbXBvbmVudHNfQmxvZ19SZWNpcGVfUmVjaXBlSW5kZXhfUmVjaXBlQ2FyZF9qc3gtYXNzZXRzX1VJX0Nhcm91c2VsX2luZGV4X2pzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBMEI7QUFFbkIsSUFBTUMsVUFBVSxHQUFHLFNBQWJBLFVBQVVBLENBQUFDLElBQUEsRUFBaUI7RUFBQSxJQUFaQyxNQUFNLEdBQUFELElBQUEsQ0FBTkMsTUFBTTtFQUc5QixvQkFDSUgsMERBQUE7SUFBSUssU0FBUyxFQUFDO0VBQTBCLGdCQUNwQ0wsMERBQUE7SUFBR0ssU0FBUyxFQUFDLHVCQUF1QjtJQUFDQyxJQUFJLEVBQUVILE1BQU0sQ0FBQ0k7RUFBTyxnQkFDckRQLDBEQUFBO0lBQUtLLFNBQVMsRUFBQztFQUEwQixnQkFDckNMLDBEQUFBO0lBQUtLLFNBQVMsRUFBQyxrQkFBa0I7SUFBQ0csR0FBRyxFQUFFTCxNQUFNLENBQUNNLE9BQU8sQ0FBQ0MsSUFBSztJQUFDQyxHQUFHLEVBQUVSLE1BQU0sQ0FBQ00sT0FBTyxDQUFDRTtFQUFJLEVBQUcsQ0FDckYsQ0FDTixlQUNKWCwwREFBQTtJQUFLSyxTQUFTLEVBQUM7RUFBbUIsZ0JBQzlCTCwwREFBQTtJQUFJSyxTQUFTLEVBQUM7RUFBb0IsZ0JBQUNMLDBEQUFBO0lBQUdNLElBQUksRUFBRUgsTUFBTSxDQUFDSTtFQUFPLEdBQUVKLE1BQU0sQ0FBQ1MsS0FBSyxDQUFLLENBQUssZUFFbEZaLDBEQUFBO0lBQUlLLFNBQVMsRUFBQztFQUFtQixHQUV6QkYsTUFBTSxDQUFDVSxXQUFXLENBQUNDLEdBQUcsQ0FBQyxVQUFDQyxVQUFVLEVBQUVDLEtBQUs7SUFBQSxvQkFDckNoQiwwREFBQTtNQUFJSyxTQUFTLEVBQUMsd0JBQXdCO01BQUNZLEdBQUcsRUFBRUQ7SUFBTSxnQkFDOUNoQiwwREFBQSxlQUFPZSxVQUFVLENBQVEsQ0FDeEI7RUFBQSxDQUNSLENBQUMsQ0FFTCxDQUNILENBQ0w7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QUFBO0VBQ3ZELG9CQUNJbEosMERBQUEsUUFBQXlJLFFBQUE7SUFBS3BJLFNBQVMsRUFBRSxzQkFBc0IsSUFBSXdJLGVBQWUsR0FBRyxHQUFHLEdBQUdBLGVBQWUsR0FBRSxFQUFFO0VBQUUsR0FBS0csS0FBSztJQUFFSSxPQUFPLEVBQUMsS0FBSztJQUFDRCxLQUFLLEVBQUMsNEJBQTRCO0lBQUNFLENBQUMsRUFBQyxLQUFLO0lBQUNDLENBQUMsRUFBQyxLQUFLO0lBQUNDLE9BQU8sRUFBQztFQUFxQixpQkFDN0x2SiwwREFBQTtJQUFNeUosSUFBSSxFQUFDLGNBQWM7SUFBQ0MsQ0FBQyxFQUFDO0VBRTBDLEVBQUUsQ0FDdEU7QUFFZCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vYXNzZXRzL0NvbXBvbmVudHMvQmxvZy9SZWNpcGUvUmVjaXBlSW5kZXgvUmVjaXBlQ2FyZC5qc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL0N1c3RvbUhvb2svbGlzdGVuZXIvdXNlV2luZG93UmVzaXplTGlzdGVuZXIuanN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9TZXJ2aWNlL0Nhcm91c2VsUmVzcG9uc2l2ZVJ1bGVzLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9VSS9DYXJvdXNlbC9DYXJvdXNlbEFycm93TmV4dC5qc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL1VJL0Nhcm91c2VsL0Nhcm91c2VsQXJyb3dQcmV2LmpzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvVUkvQ2Fyb3VzZWwvSW5maW5pdGVEb3RzLmpzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvVUkvQ2Fyb3VzZWwvaW5kZXguanN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9VSS9JY29uL0NoZXZyb25MZWZ0SWNvbi5qc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL1VJL0ljb24vQ2hldnJvblJpZ2h0SWNvbi5qc3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuXHJcbmV4cG9ydCBjb25zdCBSZWNpcGVDYXJkID0gKHtyZWNpcGV9KSA9PiB7XHJcblxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGxpIGNsYXNzTmFtZT1cInByb2R1Y3QtY2FyZCB0eXBlLXJlY2lwZVwiPlxyXG4gICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJwcm9kdWN0LWNhcmQtaW1nLWxpbmtcIiBocmVmPXtyZWNpcGUudGFyZ2V0fT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZHVjdC1jYXJkLWltZy13cmFwcGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJwcm9kdWN0LWNhcmQtaW1nXCIgc3JjPXtyZWNpcGUucGljdHVyZS5wYXRofSBhbHQ9e3JlY2lwZS5waWN0dXJlLmFsdH0gLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZHVjdC1jYXJkLWJvZHlcIj5cclxuICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJwcm9kdWN0LWNhcmQtdGl0bGVcIj48YSBocmVmPXtyZWNpcGUudGFyZ2V0fT57cmVjaXBlLnRpdGxlfTwvYT48L2gyPlxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwicHJvZHVjdC1jYXJkLWxpc3RcIj5cclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlY2lwZS5pbmdyZWRpZW50cy5tYXAoKGluZ3JlZGllbnQsIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwicHJvZHVjdC1jYXJkLWxpc3QtaXRlbVwiIGtleT17aW5kZXh9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPntpbmdyZWRpZW50fTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICkpXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9saT5cclxuICAgIClcclxufSIsImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmV4cG9ydCBjb25zdCB1c2VXaW5kb3dSZXNpemVMaXN0ZW5lciA9ICgpID0+IHtcclxuXHJcbiAgICBjb25zdCBbd2lkdGgsIHNldFdpZHRoXSA9IHVzZVN0YXRlKHdpbmRvdy5pbm5lcldpZHRoKTtcclxuICAgIGNvbnN0IFtoZWlnaHQsIHNldEhlaWdodF0gPSB1c2VTdGF0ZSh3aW5kb3cuaW5uZXJIZWlnaHQpO1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgY29uc3Qgb25SZXNpemUgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIHNldFdpZHRoKHdpbmRvdy5pbm5lcldpZHRoKTtcclxuICAgICAgICAgICAgc2V0SGVpZ2h0KHdpbmRvdy5pbm5lckhlaWdodCk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgb25SZXNpemUpO1xyXG4gICAgICAgIHJldHVybiAoKSA9PiB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigncmVzaXplJywgb25SZXNpemUpO1xyXG4gICAgfSlcclxuXHJcbiAgICByZXR1cm4gW3dpZHRoLCBoZWlnaHRdO1xyXG59IiwiZXhwb3J0IGNsYXNzIENhcm91c2VsUmVzcG9uc2l2ZVJ1bGVzIHtcclxuXHJcbiAgICAvKiogQHR5cGUge09iamVjdH0gKi9cclxuICAgICNydWxlcztcclxuXHJcbiAgICAvKiogQHR5cGUge2FycmF5fSAqL1xyXG4gICAgI2hlaWdodFN0ZXBzID0gW107XHJcblxyXG4gICAgLyoqIEB0eXBlIHtPYmplY3R9ICovXHJcbiAgICAjd2lkdGhTdGVwc0J5SGVpZ2h0ID0ge307XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBcclxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBydWxlcyB7XHJcbiAgICAgKiAgICAgIG1pbkhlaWdodDoge1xyXG4gICAgICogICAgICAgICAgbWluV2lkdGg6IHtcclxuICAgICAqICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IG51bWJlcixcclxuICAgICAqICAgICAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogbnVtYmVyXHJcbiAgICAgKiAgICAgICAgICB9LFxyXG4gICAgICogICAgICB9LFxyXG4gICAgICogfVxyXG4gICAgICovXHJcbiAgICBjb25zdHJ1Y3RvcihydWxlcykge1xyXG4gICAgICAgIHRoaXMuI3J1bGVzID0gcnVsZXM7XHJcblxyXG4gICAgICAgIGZvcihjb25zdCBbaGVpZ2h0LCBydWxlc0J5SGVpZ2h0XSBvZiBPYmplY3QuZW50cmllcyhydWxlcykpIHtcclxuICAgICAgICAgICAgdGhpcy4jaGVpZ2h0U3RlcHMucHVzaChoZWlnaHQpO1xyXG4gICAgICAgICAgICB0aGlzLiN3aWR0aFN0ZXBzQnlIZWlnaHRbaGVpZ2h0XSA9IE9iamVjdC5rZXlzKHJ1bGVzQnlIZWlnaHQpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFxyXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHdpZHRoIFxyXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IGhlaWdodFxyXG4gICAgICogQHJldHVybnMge09iamVjdH0gcnVsZXMgLT4ge3NsaWRlc1RvU2hvdzogbnVtYmVyLCBzbGlkZXNUb1Njcm9sbDogbnVtYmVyfVxyXG4gICAgICovXHJcbiAgICBnZXRSdWxlcyh3aWR0aCwgaGVpZ2h0KSB7XHJcbiAgICAgICAgbGV0IGhlaWdodFN0ZXAgPSAwO1xyXG4gICAgICAgIGxldCB3aWR0aFN0ZXAgPSAwO1xyXG5cclxuICAgICAgICBmb3IoY29uc3QgaHMgb2YgdGhpcy4jaGVpZ2h0U3RlcHMpIHtcclxuICAgICAgICAgICAgaWYoaGVpZ2h0ID4gaHMpIHtcclxuICAgICAgICAgICAgICAgIGhlaWdodFN0ZXAgPSBocztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgZm9yKGNvbnN0IHdzIG9mIHRoaXMuI3dpZHRoU3RlcHNCeUhlaWdodFtoZWlnaHRTdGVwXSkge1xyXG4gICAgICAgICAgICBpZih3aWR0aCA+IHdzKSB7XHJcbiAgICAgICAgICAgICAgICB3aWR0aFN0ZXAgPSB3cztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGhpcy4jcnVsZXNbaGVpZ2h0U3RlcF1bd2lkdGhTdGVwXTtcclxuICAgIH1cclxuICAgIFxyXG59IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgQ2hldnJvblJpZ2h0SWNvbiB9IGZyb20gJy4uL0ljb24vQ2hldnJvblJpZ2h0SWNvbic7XHJcbmltcG9ydCB7IHQgfSBmcm9tICdpMThuZXh0JztcclxuXHJcbmV4cG9ydCBjb25zdCBDYXJvdXNlbEFycm93TmV4dCA9ICh7aXNBY3RpdmUsIG9uQ2xpY2t9KSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXsnY2Fyb3VzZWwtYXJyb3cgbmV4dCcgKyAoaXNBY3RpdmUgPyAnIGFjdGl2ZSc6ICcnKX0gb25DbGljaz17b25DbGlja30gYXJpYS1sYWJlbD17dCgnbmV4dCcsIHtuczogJ21lc3NhZ2VzJ30pfT5cclxuICAgICAgICAgICAgPENoZXZyb25SaWdodEljb24gLz5cclxuICAgICAgICA8L2J1dHRvbj5cclxuICAgIClcclxufSIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IENoZXZyb25MZWZ0SWNvbiB9IGZyb20gJy4uL0ljb24vQ2hldnJvbkxlZnRJY29uJztcclxuaW1wb3J0IHsgdCB9IGZyb20gJ2kxOG5leHQnO1xyXG5cclxuZXhwb3J0IGNvbnN0IENhcm91c2VsQXJyb3dQcmV2ID0gKHtpc0FjdGl2ZSwgb25DbGlja30pID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9eydjYXJvdXNlbC1hcnJvdyBwcmV2JyArIChpc0FjdGl2ZSA/ICcgYWN0aXZlJzogJycpfSBvbkNsaWNrPXtvbkNsaWNrfSBhcmlhLWxhYmVsPXt0KCdwcmV2aW91cycsIHtuczogJ21lc3NhZ2VzJ30pfT5cclxuICAgICAgICAgICAgPENoZXZyb25MZWZ0SWNvbiAvPlxyXG4gICAgICAgIDwvYnV0dG9uPlxyXG4gICAgKVxyXG59IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgdXNlVHJhbnNsYXRpb24gfSBmcm9tICdyZWFjdC1pMThuZXh0JztcclxuXHJcbmV4cG9ydCBjb25zdCBJbmZpbml0ZURvdHMgPSAoe3RvdGFsSXRlbXMsIHNsaWRlc1RvU2hvdywgaGFzQXJyb3dQcmV2LCBoYXNBcnJvd05leHQsIGNhcm91c2VsR29UbywgY2Fyb3VzZWxQcmV2LCBjYXJvdXNlbE5leHR9KSA9PiB7XHJcbiAgICBjb25zdCB7dH0gPSB1c2VUcmFuc2xhdGlvbignbWVzc2FnZXMnKTtcclxuICAgIFxyXG4gICAgLyogY3VzdG9tIGRvdHMgKi9cclxuICAgIGNvbnN0IGdvVG9MYXN0ID0gKCkgPT4ge1xyXG4gICAgICAgIGNhcm91c2VsR29Ubyh0b3RhbEl0ZW1zIC0gc2xpZGVzVG9TaG93KTtcclxuICAgIH1cclxuICAgIGNvbnN0IGdvVG9GaXJzdCA9ICgpID0+IHtcclxuICAgICAgICBjYXJvdXNlbEdvVG8oMCk7XHJcbiAgICB9XHJcbiAgICBjb25zdCBnb1RvTWlkZGxlID0gKCkgPT4ge1xyXG4gICAgICAgIGlmKCFoYXNBcnJvd1ByZXYpIHtcclxuICAgICAgICAgICAgY2Fyb3VzZWxOZXh0KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKCFoYXNBcnJvd05leHQgJiYgaGFzQXJyb3dQcmV2KSB7XHJcbiAgICAgICAgICAgIGNhcm91c2VsUHJldigpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2Fyb3VzZWwtZG90c1wiPlxyXG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17J2Nhcm91c2VsLWRvdCcgKyAoIWhhc0Fycm93UHJldiAmJiBoYXNBcnJvd05leHQgPyAnIGFjdGl2ZSc6ICcnKX0gb25DbGljaz17Z29Ub0ZpcnN0fSBhcmlhLWxhYmVsPXt0KCdnb190b19zdGFydCcpfT48L2J1dHRvbj5cclxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9eydjYXJvdXNlbC1kb3QnICsgKGhhc0Fycm93UHJldiAmJiBoYXNBcnJvd05leHQgPyAnIGFjdGl2ZSc6ICcnKX0gb25DbGljaz17Z29Ub01pZGRsZX0gYXJpYS1sYWJlbD17dCgnZ29fdG9fbWlkZGxlJyl9PjwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17J2Nhcm91c2VsLWRvdCcgKyAoIWhhc0Fycm93TmV4dCA/ICcgYWN0aXZlJzogJycpfSBvbkNsaWNrPXtnb1RvTGFzdH0gYXJpYS1sYWJlbD17dCgnZ29fdG9fZW5kJyl9PjwvYnV0dG9uPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59IiwiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgdXNlV2luZG93UmVzaXplTGlzdGVuZXIgfSBmcm9tICcuLi8uLi9DdXN0b21Ib29rL2xpc3RlbmVyL3VzZVdpbmRvd1Jlc2l6ZUxpc3RlbmVyJztcclxuaW1wb3J0IHsgSW5maW5pdGVEb3RzIH0gZnJvbSAnLi9JbmZpbml0ZURvdHMnO1xyXG5pbXBvcnQgeyBDYXJvdXNlbEFycm93UHJldiB9IGZyb20gJy4vQ2Fyb3VzZWxBcnJvd1ByZXYnO1xyXG5pbXBvcnQgeyBDYXJvdXNlbEFycm93TmV4dCB9IGZyb20gJy4vQ2Fyb3VzZWxBcnJvd05leHQnO1xyXG5pbXBvcnQgU2xpZGVyIGZyb20gJ3JlYWN0LXNsaWNrJztcclxuaW1wb3J0IHsgTG9hZGVyIH0gZnJvbSAnLi4vSWNvbi9Mb2FkZXInO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgeyBDYXJvdXNlbFJlc3BvbnNpdmVSdWxlcyB9IGZyb20gJy4uLy4uL1NlcnZpY2UvQ2Fyb3VzZWxSZXNwb25zaXZlUnVsZXMnO1xyXG5pbXBvcnQgeyB1c2VUb3VjaGluZ0xpc3RlbmVyIH0gZnJvbSAnLi4vLi4vQ3VzdG9tSG9vay9saXN0ZW5lci91c2VUb3VjaGluZ0xpc3RlbmVyJztcclxuXHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IENhcm91c2VsID0gKHtcclxuICAgIGNoaWxkcmVuLCBcclxuICAgIGNsYXNzTmFtZSwgXHJcbiAgICBpdGVtcywgXHJcbiAgICByZXNwb25zaXZlLCBcclxuICAgIGxvYWRJbmZpbml0ZURhdGEgPSBmYWxzZSwgXHJcbiAgICBzcGVlZCA9IDUwMCwgXHJcbiAgICBhcnJvd3MgPSB0cnVlLCBcclxuICAgIG9uQWZ0ZXJDaGFuZ2VMb2FkSXRlbXMgPSBudWxsLCBcclxuICAgIGlzTG9hZGluZyA9IGZhbHNlLFxyXG4gICAgaGFzQXJyb3dOZXh0ID0gdHJ1ZSwgXHJcbiAgICBoYXNBcnJvd1ByZXYgPSB0cnVlLFxyXG59KSA9PiB7XHJcblxyXG4gICAgY29uc3Qgc2xpZGVyUmVmID0gdXNlUmVmKG51bGwpO1xyXG5cclxuICAgIFxyXG4gICAgLy9vbiB2w6lyaWZpZSBzaSB1dGlsaXNhdGlvbiBkdSB0YWN0aWxlLCBhdXF1ZWwgY2FzIGlsIGZhdXQgYWZmaWNoZXIgbGUgYm91dG9uIFwiQWRkIHRvIGNhcnRcIiBlbiBwZXJtYW5lbmNlLlxyXG4gICAgY29uc3QgaXNUb3VjaGluZyA9IHVzZVRvdWNoaW5nTGlzdGVuZXIoKTtcclxuXHJcbiAgICAvKiBzZXR0aW5ncyAqL1xyXG4gICAgY29uc3QgW3NldHRpbmdzLCBzZXRTZXR0aW5nc10gPSB1c2VTdGF0ZSh7XHJcbiAgICAgICAgYXJyb3dzOiBmYWxzZSxcclxuICAgICAgICBjdXN0b21BcnJvd3M6IGZhbHNlLFxyXG4gICAgICAgIGRvdHM6ICFsb2FkSW5maW5pdGVEYXRhLFxyXG4gICAgICAgIGluZmluaXRlOiAhbG9hZEluZmluaXRlRGF0YSxcclxuICAgICAgICBzcGVlZDogc3BlZWQsXHJcbiAgICAgICAgc2xpZGVzVG9TaG93OiAxLFxyXG4gICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAxLFxyXG4gICAgfSk7XHJcblxyXG4gICAgLyogcmVzcG9uc2l2ZSAqL1xyXG4gICAgY29uc3QgW3dpbmRvd1dpZHRoLCB3aW5kb3dIZWlnaHRdID0gdXNlV2luZG93UmVzaXplTGlzdGVuZXIoKTtcclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgaWYoIWl0ZW1zIHx8IGl0ZW1zLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IHJ1bGVzID0gcmVzcG9uc2l2ZS5nZXRSdWxlcyh3aW5kb3dXaWR0aCwgd2luZG93SGVpZ2h0KTtcclxuICAgICAgICBjb25zdCBzbGlkZXNUb1Nob3cgPSBpdGVtcy5sZW5ndGggPiBydWxlcy5zbGlkZXNUb1Nob3cgPyBydWxlcy5zbGlkZXNUb1Nob3c6IGl0ZW1zLmxlbmd0aDtcclxuICAgICAgICBjb25zdCBzbGlkZXNUb1Njcm9sbCA9IHNsaWRlc1RvU2hvdyA+PSBydWxlcy5zbGlkZXNUb1Njcm9sbCA/IHJ1bGVzLnNsaWRlc1RvU2Nyb2xsOiBzbGlkZXNUb1Nob3c7XHJcbiAgICAgICAgLy9zaSBvbiBhIHBhc3PDqSBwYXJhbSBhcnJvd3MgPSBmYWxzZSwgb3Ugc2kgaWwgbid5IGEgcGFzIGFzc2V6IGQnaXRlbXMsIG91IHNpIHRhY3RpbGUsIGFsb3JzIG9uIG5lIHZldXQgcGFzIGFmZmljaGVyIGxlcyBmbMOoY2hlc1xyXG4gICAgICAgIGNvbnN0IGhhc0Fycm93cyA9IGFycm93cyAmJiBpdGVtcy5sZW5ndGggPiBzbGlkZXNUb1Nob3cgJiYgIWlzVG91Y2hpbmc7IFxyXG4gICAgICAgIHNldFNldHRpbmdzKHNldHRpbmdzID0+ICh7XHJcbiAgICAgICAgICAgIC4uLnNldHRpbmdzLFxyXG4gICAgICAgICAgICBzbGlkZXNUb1Nob3c6IHNsaWRlc1RvU2hvdyxcclxuICAgICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IHNsaWRlc1RvU2Nyb2xsLFxyXG4gICAgICAgICAgICBjdXN0b21BcnJvd3M6IGhhc0Fycm93c1xyXG4gICAgICAgIH0pKTtcclxuICAgIH0sIFt3aW5kb3dXaWR0aCwgd2luZG93SGVpZ2h0LCBpdGVtcywgaXNUb3VjaGluZ10pO1xyXG5cclxuXHJcbiAgICAvKiBtb3ZlIGNhbGxiYWNrcyAqL1xyXG4gICAgY29uc3QgY2Fyb3VzZWxOZXh0ID0gKCkgPT4ge1xyXG4gICAgICAgIHNsaWRlclJlZi5jdXJyZW50LnNsaWNrTmV4dCgpO1xyXG4gICAgfTtcclxuICAgIGNvbnN0IGNhcm91c2VsUHJldiA9ICgpID0+IHtcclxuICAgICAgICBzbGlkZXJSZWYuY3VycmVudC5zbGlja1ByZXYoKTtcclxuICAgIH07XHJcbiAgICBjb25zdCBjYXJvdXNlbEdvVG8gPSBpbmRleCA9PiB7XHJcbiAgICAgICAgc2xpZGVyUmVmLmN1cnJlbnQuc2xpY2tHb1RvKGluZGV4KTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLyogYW5pbWF0aW9uIG9uQ2hhbmdlICovXHJcbiAgICBjb25zdCBbaXNDaGFuZ2luZywgc2V0Q2hhbmdpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgaGFuZGxlQmVmb3JlQ2hhbmdlID0gKCkgPT4ge1xyXG4gICAgICAgIHNldENoYW5naW5nKHRydWUpO1xyXG4gICAgfTtcclxuICAgIGNvbnN0IGhhbmRsZUFmdGVyQ2hhbmdlID0gKGluZGV4KSA9PiB7XHJcbiAgICAgICAgaWYob25BZnRlckNoYW5nZUxvYWRJdGVtcykge1xyXG4gICAgICAgICAgICBvbkFmdGVyQ2hhbmdlTG9hZEl0ZW1zKGluZGV4LCBzZXR0aW5ncy5zbGlkZXNUb1Njcm9sbCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNldENoYW5naW5nKGZhbHNlKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NOYW1lICsgJy13cmFwcGVyJyArICcgY3VzdG9tLWNhcm91c2VsLXdyYXBwZXInICsgKGlzQ2hhbmdpbmcgPyAnIGlzLWNoYW5naW5nJzogJycpfT5cclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgc2V0dGluZ3MuY3VzdG9tQXJyb3dzICYmIDxDYXJvdXNlbEFycm93UHJldiBpc0FjdGl2ZT17aGFzQXJyb3dQcmV2fSBvbkNsaWNrPXtjYXJvdXNlbFByZXZ9IC8+XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgPFNsaWRlciByZWY9e3NsaWRlclJlZn0gey4uLnNldHRpbmdzfSBjbGFzc05hbWU9e2NsYXNzTmFtZSArICcgY3VzdG9tLWNhcm91c2VsJ30gYmVmb3JlQ2hhbmdlPXtoYW5kbGVCZWZvcmVDaGFuZ2V9IGFmdGVyQ2hhbmdlPXtoYW5kbGVBZnRlckNoYW5nZX0+XHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2hpbGRyZW5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgPC9TbGlkZXI+XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHNldHRpbmdzLmN1c3RvbUFycm93cyAmJiA8Q2Fyb3VzZWxBcnJvd05leHQgaXNBY3RpdmU9e2hhc0Fycm93TmV4dH0gb25DbGljaz17Y2Fyb3VzZWxOZXh0fSAvPlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGxvYWRJbmZpbml0ZURhdGEgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgIDxJbmZpbml0ZURvdHMgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhhc0Fycm93UHJldj17aGFzQXJyb3dQcmV2fSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGFzQXJyb3dOZXh0PXtoYXNBcnJvd05leHR9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXJvdXNlbEdvVG89e2Nhcm91c2VsR29Ub30gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhcm91c2VsUHJldj17Y2Fyb3VzZWxQcmV2fSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2Fyb3VzZWxOZXh0PXtjYXJvdXNlbE5leHR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvdGFsSXRlbXM9e2l0ZW1zLmxlbmd0aH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93PXtzZXR0aW5ncy5zbGlkZXNUb1Nob3d9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBpc0xvYWRpbmcgJiYgPExvYWRlciBhZGRpdGlvbmFsQ2xhc3M9XCJjYXJvdXNlbC1sb2FkZXJcIiAvPlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuXHJcblxyXG5cclxuQ2Fyb3VzZWwucHJvcFR5cGVzID0ge1xyXG4gICAgcmVzcG9uc2l2ZTogUHJvcFR5cGVzLmluc3RhbmNlT2YoQ2Fyb3VzZWxSZXNwb25zaXZlUnVsZXMpXHJcbn07XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcblxyXG5leHBvcnQgY29uc3QgQ2hldnJvbkxlZnRJY29uID0gKHthZGRpdGlvbmFsQ2xhc3MsIC4uLnByb3BzfSkgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8c3ZnIGNsYXNzTmFtZT17J2ljb24gaS1jaGV2cm9uLWxlZnQnICsgKGFkZGl0aW9uYWxDbGFzcyA/ICcgJyArIGFkZGl0aW9uYWxDbGFzczogJycpfSB7Li4ucHJvcHN9ICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmVyc2lvbj1cIjEuMVwiIHg9XCIwXCIgeT1cIjBcIiB2aWV3Qm94PVwiMCAwIDUxMS45NDkgNTExLjk0OVwiPlxyXG4gICAgICAgICAgICA8ZyB0cmFuc2Zvcm09XCJtYXRyaXgoLTEsMS4yMjQ2NDY3OTkxNDczNTMyZS0xNiwtMS4yMjQ2NDY3OTkxNDczNTMyZS0xNiwtMSw1MTEuOTQ5MTExOTM4NDc2Nyw1MTEuOTUwMjM2MzIwNDk1NTUpXCI+XHJcbiAgICAgICAgICAgICAgICA8cGF0aCBmaWxsPVwiY3VycmVudENvbG9yXCIgZD1cIk0zODYuMjM1IDI0OC4zMDggMTQwLjkwMiAyLjk3NWMtNC4yNjctNC4wNTMtMTAuOTg3LTMuOTQ3LTE1LjA0LjIxM2ExMC43NjMgMTAuNzYzIDAgMCAwIDAgMTQuODI3bDIzNy43NiAyMzcuNzYtMjM3Ljc2IDIzNy44NjdjLTQuMjY3IDQuMDUzLTQuMzczIDEwLjg4LS4yMTMgMTUuMDQgNC4wNTMgNC4yNjcgMTAuODggNC4zNzMgMTUuMDQuMjEzbC4yMTMtLjIxMyAyNDUuMzMzLTI0NS4zMzNhMTAuNjI0IDEwLjYyNCAwIDAgMCAwLTE1LjA0MXpcIj5cclxuICAgICAgICAgICAgICAgIDwvcGF0aD5cclxuICAgICAgICAgICAgPC9nPlxyXG4gICAgICAgIDwvc3ZnPlxyXG4gICAgKVxyXG59IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuXHJcbmV4cG9ydCBjb25zdCBDaGV2cm9uUmlnaHRJY29uID0gKHthZGRpdGlvbmFsQ2xhc3MsIC4uLnByb3BzfSkgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8c3ZnIGNsYXNzTmFtZT17J2ljb24gaS1jaGV2cm9uLXJpZ2h0JyArIChhZGRpdGlvbmFsQ2xhc3MgPyAnICcgKyBhZGRpdGlvbmFsQ2xhc3M6ICcnKX0gey4uLnByb3BzfSB2ZXJzaW9uPVwiMS4xXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHg9XCIwcHhcIiB5PVwiMHB4XCIgdmlld0JveD1cIjAgMCA1MTEuOTQ5IDUxMS45NDlcIj5cclxuICAgICAgICAgICAgPHBhdGggZmlsbD1cImN1cnJlbnRDb2xvclwiIGQ9XCJNMzg2LjIzNSwyNDguMzA4TDE0MC45MDIsMi45NzVjLTQuMjY3LTQuMDUzLTEwLjk4Ny0zLjk0Ny0xNS4wNCwwLjIxM2MtMy45NDcsNC4xNi0zLjk0NywxMC42NjcsMCwxNC44MjdsMjM3Ljc2LDIzNy43NlxyXG4gICAgICAgICAgICAgICAgbC0yMzcuNzYsMjM3Ljg2N2MtNC4yNjcsNC4wNTMtNC4zNzMsMTAuODgtMC4yMTMsMTUuMDRjNC4wNTMsNC4yNjcsMTAuODgsNC4zNzMsMTUuMDQsMC4yMTNjMC4xMDctMC4xMDcsMC4yMTMtMC4yMTMsMC4yMTMtMC4yMTNcclxuICAgICAgICAgICAgICAgIGwyNDUuMzMzLTI0NS4zMzNDMzkwLjM5NSwyNTkuMTg4LDM5MC4zOTUsMjUyLjQ2OCwzODYuMjM1LDI0OC4zMDh6XCIvPlxyXG4gICAgICAgIDwvc3ZnPlxyXG4gICAgKVxyXG59Il0sIm5hbWVzIjpbIlJlYWN0IiwiUmVjaXBlQ2FyZCIsIl9yZWYiLCJyZWNpcGUiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NOYW1lIiwiaHJlZiIsInRhcmdldCIsInNyYyIsInBpY3R1cmUiLCJwYXRoIiwiYWx0IiwidGl0bGUiLCJpbmdyZWRpZW50cyIsIm1hcCIsImluZ3JlZGllbnQiLCJpbmRleCIsImtleSIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwidXNlV2luZG93UmVzaXplTGlzdGVuZXIiLCJfdXNlU3RhdGUiLCJ3aW5kb3ciLCJpbm5lcldpZHRoIiwiX3VzZVN0YXRlMiIsIl9zbGljZWRUb0FycmF5Iiwid2lkdGgiLCJzZXRXaWR0aCIsIl91c2VTdGF0ZTMiLCJpbm5lckhlaWdodCIsIl91c2VTdGF0ZTQiLCJoZWlnaHQiLCJzZXRIZWlnaHQiLCJvblJlc2l6ZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiQ2Fyb3VzZWxSZXNwb25zaXZlUnVsZXMiLCJydWxlcyIsIl9jbGFzc0NhbGxDaGVjayIsIl9jbGFzc1ByaXZhdGVGaWVsZEluaXRTcGVjIiwiX3J1bGVzIiwid3JpdGFibGUiLCJ2YWx1ZSIsIl9oZWlnaHRTdGVwcyIsIl93aWR0aFN0ZXBzQnlIZWlnaHQiLCJfY2xhc3NQcml2YXRlRmllbGRTZXQiLCJfaSIsIl9PYmplY3QkZW50cmllcyIsIk9iamVjdCIsImVudHJpZXMiLCJsZW5ndGgiLCJfT2JqZWN0JGVudHJpZXMkX2kiLCJydWxlc0J5SGVpZ2h0IiwiX2NsYXNzUHJpdmF0ZUZpZWxkR2V0IiwicHVzaCIsImtleXMiLCJfY3JlYXRlQ2xhc3MiLCJnZXRSdWxlcyIsImhlaWdodFN0ZXAiLCJ3aWR0aFN0ZXAiLCJfaXRlcmF0b3IiLCJfY3JlYXRlRm9yT2ZJdGVyYXRvckhlbHBlciIsIl9zdGVwIiwicyIsIm4iLCJkb25lIiwiaHMiLCJlcnIiLCJlIiwiZiIsIl9pdGVyYXRvcjIiLCJfc3RlcDIiLCJ3cyIsIkNoZXZyb25SaWdodEljb24iLCJ0IiwiQ2Fyb3VzZWxBcnJvd05leHQiLCJpc0FjdGl2ZSIsIm9uQ2xpY2siLCJucyIsIkNoZXZyb25MZWZ0SWNvbiIsIkNhcm91c2VsQXJyb3dQcmV2IiwidXNlVHJhbnNsYXRpb24iLCJJbmZpbml0ZURvdHMiLCJ0b3RhbEl0ZW1zIiwic2xpZGVzVG9TaG93IiwiaGFzQXJyb3dQcmV2IiwiaGFzQXJyb3dOZXh0IiwiY2Fyb3VzZWxHb1RvIiwiY2Fyb3VzZWxQcmV2IiwiY2Fyb3VzZWxOZXh0IiwiX3VzZVRyYW5zbGF0aW9uIiwiZ29Ub0xhc3QiLCJnb1RvRmlyc3QiLCJnb1RvTWlkZGxlIiwidXNlUmVmIiwiU2xpZGVyIiwiTG9hZGVyIiwiUHJvcFR5cGVzIiwidXNlVG91Y2hpbmdMaXN0ZW5lciIsIkNhcm91c2VsIiwiY2hpbGRyZW4iLCJpdGVtcyIsInJlc3BvbnNpdmUiLCJfcmVmJGxvYWRJbmZpbml0ZURhdGEiLCJsb2FkSW5maW5pdGVEYXRhIiwiX3JlZiRzcGVlZCIsInNwZWVkIiwiX3JlZiRhcnJvd3MiLCJhcnJvd3MiLCJfcmVmJG9uQWZ0ZXJDaGFuZ2VMb2EiLCJvbkFmdGVyQ2hhbmdlTG9hZEl0ZW1zIiwiX3JlZiRpc0xvYWRpbmciLCJpc0xvYWRpbmciLCJfcmVmJGhhc0Fycm93TmV4dCIsIl9yZWYkaGFzQXJyb3dQcmV2Iiwic2xpZGVyUmVmIiwiaXNUb3VjaGluZyIsImN1c3RvbUFycm93cyIsImRvdHMiLCJpbmZpbml0ZSIsInNsaWRlc1RvU2Nyb2xsIiwic2V0dGluZ3MiLCJzZXRTZXR0aW5ncyIsIl91c2VXaW5kb3dSZXNpemVMaXN0ZSIsIl91c2VXaW5kb3dSZXNpemVMaXN0ZTIiLCJ3aW5kb3dXaWR0aCIsIndpbmRvd0hlaWdodCIsImhhc0Fycm93cyIsIl9vYmplY3RTcHJlYWQiLCJjdXJyZW50Iiwic2xpY2tOZXh0Iiwic2xpY2tQcmV2Iiwic2xpY2tHb1RvIiwiaXNDaGFuZ2luZyIsInNldENoYW5naW5nIiwiaGFuZGxlQmVmb3JlQ2hhbmdlIiwiaGFuZGxlQWZ0ZXJDaGFuZ2UiLCJfZXh0ZW5kcyIsInJlZiIsImJlZm9yZUNoYW5nZSIsImFmdGVyQ2hhbmdlIiwiYWRkaXRpb25hbENsYXNzIiwicHJvcFR5cGVzIiwiaW5zdGFuY2VPZiIsInByb3BzIiwiX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzIiwiX2V4Y2x1ZGVkIiwieG1sbnMiLCJ2ZXJzaW9uIiwieCIsInkiLCJ2aWV3Qm94IiwidHJhbnNmb3JtIiwiZmlsbCIsImQiXSwic291cmNlUm9vdCI6IiJ9
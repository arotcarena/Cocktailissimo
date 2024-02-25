(self["webpackChunk"] = self["webpackChunk"] || []).push([["home"],{

/***/ "./assets/Components/Homepage/Gazette/CarouselGazetteItem.jsx":
/*!********************************************************************!*\
  !*** ./assets/Components/Homepage/Gazette/CarouselGazetteItem.jsx ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CarouselGazetteItem": () => (/* binding */ CarouselGazetteItem)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _entrypoints_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../entrypoints/i18n */ "./assets/entrypoints/i18n.js");


var CarouselGazetteItem = function CarouselGazetteItem(_ref) {
  var subCategory = _ref.subCategory,
    currentTarget = _ref.currentTarget;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "home-gazette-carousel-item"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    className: "home-gazette-carousel-link",
    href: currentTarget
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "home-gazette-carousel-img-wrapper"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    className: "home-gazette-carousel-img",
    src: '/img/categories/' + subCategory.picture.path,
    alt: subCategory.picture.alt[_entrypoints_i18n__WEBPACK_IMPORTED_MODULE_1__["default"].language]
  }))));
};

/***/ }),

/***/ "./assets/Components/Homepage/Gazette/GazetteItem.jsx":
/*!************************************************************!*\
  !*** ./assets/Components/Homepage/Gazette/GazetteItem.jsx ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GazetteItem": () => (/* binding */ GazetteItem)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _entrypoints_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../entrypoints/i18n */ "./assets/entrypoints/i18n.js");



var GazetteItem = function GazetteItem(_ref) {
  var subCategory = _ref.subCategory;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("li", {
    className: "home-gazette-item"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("a", {
    className: "home-gazette-item-link",
    href: subCategory.target[_entrypoints_i18n__WEBPACK_IMPORTED_MODULE_2__["default"].language]
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
    className: "home-gazette-img-wrapper"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("img", {
    className: "home-gazette-img",
    src: '/img/categories/' + subCategory.picture.path,
    alt: subCategory.picture.alt[_entrypoints_i18n__WEBPACK_IMPORTED_MODULE_2__["default"].language]
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
    className: "home-gazette-item-title-wrapper title-underlined-wrapper"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("h3", {
    className: "home-gazette-item-title title-underlined"
  }, subCategory.name[_entrypoints_i18n__WEBPACK_IMPORTED_MODULE_2__["default"].language]))));
};

/***/ }),

/***/ "./assets/Components/Homepage/Gazette/index.jsx":
/*!******************************************************!*\
  !*** ./assets/Components/Homepage/Gazette/index.jsx ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Gazette": () => (/* binding */ Gazette)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.filter.js */ "./node_modules/core-js/modules/es.array.filter.js");
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.map.js */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.symbol.to-primitive.js */ "./node_modules/core-js/modules/es.symbol.to-primitive.js");
/* harmony import */ var core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.date.to-primitive.js */ "./node_modules/core-js/modules/es.date.to-primitive.js");
/* harmony import */ var core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.error.cause.js */ "./node_modules/core-js/modules/es.error.cause.js");
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.error.to-string.js */ "./node_modules/core-js/modules/es.error.to-string.js");
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.number.constructor.js */ "./node_modules/core-js/modules/es.number.constructor.js");
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.object.keys.js */ "./node_modules/core-js/modules/es.object.keys.js");
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_12__);
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
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! core-js/modules/es.array.from.js */ "./node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_25__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_26___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_26__);
/* harmony import */ var core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! core-js/modules/es.regexp.test.js */ "./node_modules/core-js/modules/es.regexp.test.js");
/* harmony import */ var core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_27___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_27__);
/* harmony import */ var core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! core-js/modules/es.object.assign.js */ "./node_modules/core-js/modules/es.object.assign.js");
/* harmony import */ var core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_28___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_28__);
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! core-js/modules/es.function.bind.js */ "./node_modules/core-js/modules/es.function.bind.js");
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_29___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_29__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_30___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_30__);
/* harmony import */ var _Config_gazette_json__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ../../../Config/gazette.json */ "./assets/Config/gazette.json");
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! react-slick */ "./node_modules/react-slick/lib/index.js");
/* harmony import */ var _CarouselGazetteItem__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./CarouselGazetteItem */ "./assets/Components/Homepage/Gazette/CarouselGazetteItem.jsx");
/* harmony import */ var _GazetteItem__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./GazetteItem */ "./assets/Components/Homepage/Gazette/GazetteItem.jsx");
/* harmony import */ var _styles_Homepage_homeGazette_css__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ../../../styles/Homepage/homeGazette.css */ "./assets/styles/Homepage/homeGazette.css");
/* harmony import */ var _styles_UI_SlickCarousel_slickTheme_css__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ../../../styles/UI/SlickCarousel/slickTheme.css */ "./assets/styles/UI/SlickCarousel/slickTheme.css");
/* harmony import */ var _styles_UI_SlickCarousel_slick_css__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ../../../styles/UI/SlickCarousel/slick.css */ "./assets/styles/UI/SlickCarousel/slick.css");
/* harmony import */ var _entrypoints_i18n__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ../../../entrypoints/i18n */ "./assets/entrypoints/i18n.js");
/* harmony import */ var _UI_Icon_ChevronLeftIcon__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ../../../UI/Icon/ChevronLeftIcon */ "./assets/UI/Icon/ChevronLeftIcon.jsx");
/* harmony import */ var _UI_Icon_ChevronRightIcon__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ../../../UI/Icon/ChevronRightIcon */ "./assets/UI/Icon/ChevronRightIcon.jsx");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
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











var Gazette = function Gazette() {
  //WITHOUT_INTERVIEWS // a supprimer quand il y aura des interviews
  var gazette = _objectSpread(_objectSpread({}, _Config_gazette_json__WEBPACK_IMPORTED_MODULE_31__), {}, {
    subCategories: _Config_gazette_json__WEBPACK_IMPORTED_MODULE_31__.subCategories.filter(function (subCategory) {
      return subCategory.name.en !== 'Interviews';
    })
  });
  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 0,
    responsive: [{
      breakpoint: 960,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    }, {
      breakpoint: 500,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }]
  };
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_30__.useState)(''),
    _useState2 = _slicedToArray(_useState, 2),
    slidingClass = _useState2[0],
    setSlidingClass = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_30__.useState)(gazette.subCategories[0]),
    _useState4 = _slicedToArray(_useState3, 2),
    currentSubCategory = _useState4[0],
    setCurrentSubCategory = _useState4[1];
  var handleSwipe = function handleSwipe(direction) {
    setSlidingClass('sliding ' + direction);
  };
  var handleAfter = function handleAfter(currentIndex) {
    setCurrentSubCategory(gazette.subCategories[currentIndex]);
    setSlidingClass('');
  };
  var handleClickPrev = function handleClickPrev() {
    setSlidingClass('sliding right');
    sliderRef.current.slickPrev();
  };
  var handleClickNext = function handleClickNext() {
    setSlidingClass('sliding left');
    sliderRef.current.slickNext();
  };
  var sliderRef = (0,react__WEBPACK_IMPORTED_MODULE_30__.useRef)(null);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_30___default().createElement((react__WEBPACK_IMPORTED_MODULE_30___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_30___default().createElement("div", {
    className: "home-gazette-carousel-wrapper"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_30___default().createElement("button", {
    className: "carousel-arrow prev",
    onClick: handleClickPrev
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_30___default().createElement(_UI_Icon_ChevronLeftIcon__WEBPACK_IMPORTED_MODULE_39__.ChevronLeftIcon, null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_30___default().createElement(react_slick__WEBPACK_IMPORTED_MODULE_32__["default"], _extends({
    ref: sliderRef,
    className: "home-gazette-carousel"
  }, settings, {
    onSwipe: handleSwipe,
    onEdge: handleSwipe,
    afterChange: handleAfter
  }), gazette.subCategories.map(function (subCategory) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_30___default().createElement(_CarouselGazetteItem__WEBPACK_IMPORTED_MODULE_33__.CarouselGazetteItem, {
      key: subCategory.id,
      subCategory: subCategory,
      currentTarget: currentSubCategory.target[_entrypoints_i18n__WEBPACK_IMPORTED_MODULE_38__["default"].language]
    });
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_30___default().createElement("button", {
    className: "carousel-arrow next",
    onClick: handleClickNext
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_30___default().createElement(_UI_Icon_ChevronRightIcon__WEBPACK_IMPORTED_MODULE_40__.ChevronRightIcon, null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_30___default().createElement("h3", {
    className: "home-gazette-carousel-title ".concat(slidingClass)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_30___default().createElement("a", {
    href: currentSubCategory.target[_entrypoints_i18n__WEBPACK_IMPORTED_MODULE_38__["default"].language]
  }, currentSubCategory.name[_entrypoints_i18n__WEBPACK_IMPORTED_MODULE_38__["default"].language]))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_30___default().createElement("ul", {
    className: "home-gazette-list"
  }, gazette.subCategories.map(function (subCategory) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_30___default().createElement(_GazetteItem__WEBPACK_IMPORTED_MODULE_34__.GazetteItem, {
      key: subCategory.id,
      subCategory: subCategory
    });
  })));
};

/***/ }),

/***/ "./assets/Components/Homepage/HomepageCarousel/index.jsx":
/*!***************************************************************!*\
  !*** ./assets/Components/Homepage/HomepageCarousel/index.jsx ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomepageCarousel": () => (/* binding */ HomepageCarousel)
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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _entrypoints_i18n__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../entrypoints/i18n */ "./assets/entrypoints/i18n.js");
/* harmony import */ var _CustomHook_carousel_useInfiniteCarousel__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../../CustomHook/carousel/useInfiniteCarousel */ "./assets/CustomHook/carousel/useInfiniteCarousel.jsx");
/* harmony import */ var _UI_Carousel__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../../UI/Carousel */ "./assets/UI/Carousel/index.jsx");
/* harmony import */ var _styles_Homepage_homepageCarousel_css__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../../styles/Homepage/homepageCarousel.css */ "./assets/styles/Homepage/homepageCarousel.css");
/* harmony import */ var _Service_CarouselResponsiveRules__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../../../Service/CarouselResponsiveRules */ "./assets/Service/CarouselResponsiveRules.js");
/* harmony import */ var _UI_Icon_Loader__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../../../UI/Icon/Loader */ "./assets/UI/Icon/Loader.jsx");
/* harmony import */ var _Blog_Recipe_RecipeIndex_RecipeCard__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../../Blog/Recipe/RecipeIndex/RecipeCard */ "./assets/Components/Blog/Recipe/RecipeIndex/RecipeCard.jsx");
/* harmony import */ var _Shop_ProductIndex_ProductCard__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../../Shop/ProductIndex/ProductCard */ "./assets/Components/Shop/ProductIndex/ProductCard.jsx");

















function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }









var HomepageCarousel = function HomepageCarousel() {
  var _useInfiniteCarousel = (0,_CustomHook_carousel_useInfiniteCarousel__WEBPACK_IMPORTED_MODULE_19__.useInfiniteCarousel)('/' + _entrypoints_i18n__WEBPACK_IMPORTED_MODULE_18__["default"].language + '/api/recipe/getLastsWithProducts', 10),
    _useInfiniteCarousel2 = _slicedToArray(_useInfiniteCarousel, 5),
    onAfterChange = _useInfiniteCarousel2[0],
    items = _useInfiniteCarousel2[1],
    isLoading = _useInfiniteCarousel2[2],
    hasArrowPrev = _useInfiniteCarousel2[3],
    hasArrowNext = _useInfiniteCarousel2[4];
  var responsive = new _Service_CarouselResponsiveRules__WEBPACK_IMPORTED_MODULE_22__.CarouselResponsiveRules({
    0: {
      0: {
        slidesToShow: 2,
        slidesToScroll: 2
      },
      530: {
        slidesToShow: 3,
        slidesToScroll: 3
      },
      850: {
        slidesToShow: 4,
        slidesToScroll: 4
      },
      1450: {
        slidesToShow: 5,
        slidesToScroll: 5
      }
    },
    800: {
      0: {
        slidesToShow: 2,
        slidesToScroll: 2
      },
      530: {
        slidesToShow: 3,
        slidesToScroll: 3
      },
      1250: {
        slidesToShow: 4,
        slidesToScroll: 4
      },
      1500: {
        slidesToShow: 5,
        slidesToScroll: 5
      }
    }
  });
  if (items.length <= 0) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default().createElement("div", {
      className: "center-wrapper"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default().createElement(_UI_Icon_Loader__WEBPACK_IMPORTED_MODULE_23__.Loader, {
      additionalClass: "main-loader"
    }));
  }
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default().createElement(_UI_Carousel__WEBPACK_IMPORTED_MODULE_20__.Carousel, {
    className: "home-recipe-carousel",
    items: items,
    responsive: responsive,
    loadInfiniteData: true,
    hasArrowPrev: hasArrowPrev,
    hasArrowNext: hasArrowNext,
    onAfterChangeLoadItems: onAfterChange,
    isLoading: isLoading
  }, items.map(function (item) {
    if (item.type === 'product') {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default().createElement(_Shop_ProductIndex_ProductCard__WEBPACK_IMPORTED_MODULE_25__.ProductCard, {
        key: item.id,
        product: item
      });
    }
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default().createElement(_Blog_Recipe_RecipeIndex_RecipeCard__WEBPACK_IMPORTED_MODULE_24__.RecipeCard, {
      key: item.id,
      recipe: item
    });
  }));
};

/***/ }),

/***/ "./assets/Components/Homepage/PostLinkedProducts/index.jsx":
/*!*****************************************************************!*\
  !*** ./assets/Components/Homepage/PostLinkedProducts/index.jsx ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PostLinkedProducts": () => (/* binding */ PostLinkedProducts)
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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _Shop_ProductIndex_ProductCard__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../Shop/ProductIndex/ProductCard */ "./assets/Components/Shop/ProductIndex/ProductCard.jsx");
/* harmony import */ var _CustomHook_fetch_useFetch__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../../CustomHook/fetch/useFetch */ "./assets/CustomHook/fetch/useFetch.jsx");
/* harmony import */ var _UI_Icon_Loader__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../../UI/Icon/Loader */ "./assets/UI/Icon/Loader.jsx");
/* harmony import */ var _styles_Shop_linkedProductsCarousel_css__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../../styles/Shop/linkedProductsCarousel.css */ "./assets/styles/Shop/linkedProductsCarousel.css");
/* harmony import */ var _CustomHook_listener_useWindowResizeListener__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../../../CustomHook/listener/useWindowResizeListener */ "./assets/CustomHook/listener/useWindowResizeListener.jsx");
/* harmony import */ var _UI_Carousel__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../../../UI/Carousel */ "./assets/UI/Carousel/index.jsx");
/* harmony import */ var _Service_CarouselResponsiveRules__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../../../Service/CarouselResponsiveRules */ "./assets/Service/CarouselResponsiveRules.js");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");

















function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }









var PostLinkedProducts = function PostLinkedProducts(_ref) {
  var postId = _ref.postId;
  var _useTranslation = (0,react_i18next__WEBPACK_IMPORTED_MODULE_25__.useTranslation)('messages'),
    t = _useTranslation.t,
    i18n = _useTranslation.i18n;
  var _useFetch = (0,_CustomHook_fetch_useFetch__WEBPACK_IMPORTED_MODULE_19__.useFetch)('/' + i18n.language + '/api/post/' + postId + '/linkedProducts'),
    _useFetch2 = _slicedToArray(_useFetch, 3),
    products = _useFetch2[0],
    isLoading = _useFetch2[1],
    errors = _useFetch2[2];
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_17__.useState)(true),
    _useState2 = _slicedToArray(_useState, 2),
    isCarousel = _useState2[0],
    setCarousel = _useState2[1];
  var _useWindowResizeListe = (0,_CustomHook_listener_useWindowResizeListener__WEBPACK_IMPORTED_MODULE_22__.useWindowResizeListener)(),
    _useWindowResizeListe2 = _slicedToArray(_useWindowResizeListe, 2),
    windowWidth = _useWindowResizeListe2[0],
    windowHeight = _useWindowResizeListe2[1];
  (0,react__WEBPACK_IMPORTED_MODULE_17__.useEffect)(function () {
    if (windowWidth > 750) {
      setCarousel(false);
    } else {
      setCarousel(true);
    }
  }, [windowWidth]);
  var responsive = new _Service_CarouselResponsiveRules__WEBPACK_IMPORTED_MODULE_24__.CarouselResponsiveRules({
    0: {
      0: {
        slidesToShow: 2,
        slidesToScroll: 1
      },
      500: {
        slidesToShow: 3,
        slidesToScroll: 1
      },
      750: {
        slidesToShow: 4,
        slidesToScroll: 2
      }
    }
  });
  if (errors) {
    return '';
  }
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default().createElement((react__WEBPACK_IMPORTED_MODULE_17___default().Fragment), null, products && products.length > 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default().createElement("h3", {
    className: "social-sales-title"
  }, t('linked_products')), isLoading && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default().createElement(_UI_Icon_Loader__WEBPACK_IMPORTED_MODULE_20__.Loader, null), isCarousel ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default().createElement(_UI_Carousel__WEBPACK_IMPORTED_MODULE_23__.Carousel, {
    className: "linked-products-carousel",
    items: products,
    responsive: responsive
  }, products && products.map(function (product) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default().createElement(_Shop_ProductIndex_ProductCard__WEBPACK_IMPORTED_MODULE_18__.ProductCard, {
      key: product.id,
      product: product
    });
  })) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default().createElement("ul", {
    className: "social-sales-list"
  }, products && products.map(function (product) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default().createElement(_Shop_ProductIndex_ProductCard__WEBPACK_IMPORTED_MODULE_18__.ProductCard, {
      key: product.id,
      product: product
    });
  })));
};

/***/ }),

/***/ "./assets/CustomHook/carousel/useInfiniteCarousel.jsx":
/*!************************************************************!*\
  !*** ./assets/CustomHook/carousel/useInfiniteCarousel.jsx ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useInfiniteCarousel": () => (/* binding */ useInfiniteCarousel)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.concat.js */ "./node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_0__);
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





























function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }


var useInfiniteCarousel = function useInfiniteCarousel(endpoint) {
  var limit = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 5;
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_29__.useState)([]),
    _useState2 = _slicedToArray(_useState, 2),
    data = _useState2[0],
    setData = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_29__.useState)(false),
    _useState4 = _slicedToArray(_useState3, 2),
    isLoading = _useState4[0],
    setLoading = _useState4[1];
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_29__.useState)(false),
    _useState6 = _slicedToArray(_useState5, 2),
    allIsLoaded = _useState6[0],
    setAllIsLoaded = _useState6[1];
  var loadData = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(offset) {
      var fetchResult;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            setLoading(true);
            _context.prev = 1;
            _context.next = 4;
            return (0,_functions_api__WEBPACK_IMPORTED_MODULE_30__.apiFetch)(endpoint + '?limit=' + limit + '&offset=' + offset);
          case 4:
            fetchResult = _context.sent;
            setData(function (data) {
              return [].concat(_toConsumableArray(data), _toConsumableArray(fetchResult));
            });
            if (fetchResult.length > 0) {
              setHasArrowNext(true);
            }
            if (fetchResult.length < limit) {
              setAllIsLoaded(true);
            }
            _context.next = 13;
            break;
          case 10:
            _context.prev = 10;
            _context.t0 = _context["catch"](1);
            console.error(_context.t0);
          case 13:
            setLoading(false);
          case 14:
          case "end":
            return _context.stop();
        }
      }, _callee, null, [[1, 10]]);
    }));
    return function loadData(_x2) {
      return _ref.apply(this, arguments);
    };
  }();
  (0,react__WEBPACK_IMPORTED_MODULE_29__.useEffect)(function () {
    loadData(0);
  }, []);
  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_29__.useState)(false),
    _useState8 = _slicedToArray(_useState7, 2),
    hasArrowPrev = _useState8[0],
    setHasArrowPrev = _useState8[1];
  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_29__.useState)(false),
    _useState10 = _slicedToArray(_useState9, 2),
    hasArrowNext = _useState10[0],
    setHasArrowNext = _useState10[1];
  var onAfterChange = function onAfterChange(index, slidesToScroll) {
    var totalSlides = index + slidesToScroll;
    if (totalSlides >= data.length) {
      if (!allIsLoaded) {
        loadData(data.length - 1);
      }
      if (hasArrowNext) {
        setHasArrowNext(false);
      }
    } else if (!hasArrowNext) {
      setHasArrowNext(true);
    }
    if (index > 0 && !hasArrowPrev) {
      setHasArrowPrev(true);
    } else if (index <= 0 && hasArrowPrev) {
      setHasArrowPrev(false);
    }
  };
  return [onAfterChange, data, isLoading, hasArrowPrev, hasArrowNext];
};

/***/ }),

/***/ "./assets/entrypoints/home.js":
/*!************************************!*\
  !*** ./assets/entrypoints/home.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-dom/client */ "./node_modules/react-dom/client.js");
/* harmony import */ var _Components_Homepage_Gazette__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Components/Homepage/Gazette */ "./assets/Components/Homepage/Gazette/index.jsx");
/* harmony import */ var _Components_Homepage_PostLinkedProducts__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Components/Homepage/PostLinkedProducts */ "./assets/Components/Homepage/PostLinkedProducts/index.jsx");
/* harmony import */ var _styles_Homepage_Social_index_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../styles/Homepage/Social/index.css */ "./assets/styles/Homepage/Social/index.css");
/* harmony import */ var _functions_language_configureLanguage__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../functions/language/configureLanguage */ "./assets/functions/language/configureLanguage.js");
/* harmony import */ var _Components_Homepage_HomepageCarousel__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../Components/Homepage/HomepageCarousel */ "./assets/Components/Homepage/HomepageCarousel/index.jsx");










(0,_functions_language_configureLanguage__WEBPACK_IMPORTED_MODULE_8__.configureLanguage)();
var gazetteRoot = (0,react_dom_client__WEBPACK_IMPORTED_MODULE_4__.createRoot)(document.getElementById('home-gazette'));
gazetteRoot.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_Components_Homepage_Gazette__WEBPACK_IMPORTED_MODULE_5__.Gazette, null));
var recipeRoot = (0,react_dom_client__WEBPACK_IMPORTED_MODULE_4__.createRoot)(document.getElementById('homepage-carousel'));
recipeRoot.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_Components_Homepage_HomepageCarousel__WEBPACK_IMPORTED_MODULE_9__.HomepageCarousel, null));
var postLinkedProductsElts = document.querySelectorAll('.post-linked-products');
postLinkedProductsElts.forEach(function (elt) {
  var root = (0,react_dom_client__WEBPACK_IMPORTED_MODULE_4__.createRoot)(elt);
  root.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_Components_Homepage_PostLinkedProducts__WEBPACK_IMPORTED_MODULE_6__.PostLinkedProducts, {
    postId: JSON.parse(elt.dataset.postid)
  }));
});

/***/ }),

/***/ "./node_modules/core-js/internals/number-parse-int.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/internals/number-parse-int.js ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");
var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ "./node_modules/core-js/internals/function-uncurry-this.js");
var toString = __webpack_require__(/*! ../internals/to-string */ "./node_modules/core-js/internals/to-string.js");
var trim = (__webpack_require__(/*! ../internals/string-trim */ "./node_modules/core-js/internals/string-trim.js").trim);
var whitespaces = __webpack_require__(/*! ../internals/whitespaces */ "./node_modules/core-js/internals/whitespaces.js");

var $parseInt = global.parseInt;
var Symbol = global.Symbol;
var ITERATOR = Symbol && Symbol.iterator;
var hex = /^[+-]?0x/i;
var exec = uncurryThis(hex.exec);
var FORCED = $parseInt(whitespaces + '08') !== 8 || $parseInt(whitespaces + '0x16') !== 22
  // MS Edge 18- broken with boxed symbols
  || (ITERATOR && !fails(function () { $parseInt(Object(ITERATOR)); }));

// `parseInt` method
// https://tc39.es/ecma262/#sec-parseint-string-radix
module.exports = FORCED ? function parseInt(string, radix) {
  var S = trim(toString(string));
  return $parseInt(S, (radix >>> 0) || (exec(hex, S) ? 16 : 10));
} : $parseInt;


/***/ }),

/***/ "./node_modules/core-js/internals/regexp-get-flags.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/internals/regexp-get-flags.js ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var call = __webpack_require__(/*! ../internals/function-call */ "./node_modules/core-js/internals/function-call.js");
var hasOwn = __webpack_require__(/*! ../internals/has-own-property */ "./node_modules/core-js/internals/has-own-property.js");
var isPrototypeOf = __webpack_require__(/*! ../internals/object-is-prototype-of */ "./node_modules/core-js/internals/object-is-prototype-of.js");
var regExpFlags = __webpack_require__(/*! ../internals/regexp-flags */ "./node_modules/core-js/internals/regexp-flags.js");

var RegExpPrototype = RegExp.prototype;

module.exports = function (R) {
  var flags = R.flags;
  return flags === undefined && !('flags' in RegExpPrototype) && !hasOwn(R, 'flags') && isPrototypeOf(RegExpPrototype, R)
    ? call(regExpFlags, R) : flags;
};


/***/ }),

/***/ "./node_modules/core-js/modules/es.array.map.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/es.array.map.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var $map = (__webpack_require__(/*! ../internals/array-iteration */ "./node_modules/core-js/internals/array-iteration.js").map);
var arrayMethodHasSpeciesSupport = __webpack_require__(/*! ../internals/array-method-has-species-support */ "./node_modules/core-js/internals/array-method-has-species-support.js");

var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('map');

// `Array.prototype.map` method
// https://tc39.es/ecma262/#sec-array.prototype.map
// with adding support of @@species
$({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT }, {
  map: function map(callbackfn /* , thisArg */) {
    return $map(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.date.to-string.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es.date.to-string.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// TODO: Remove from `core-js@4`
var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ "./node_modules/core-js/internals/function-uncurry-this.js");
var defineBuiltIn = __webpack_require__(/*! ../internals/define-built-in */ "./node_modules/core-js/internals/define-built-in.js");

var DatePrototype = Date.prototype;
var INVALID_DATE = 'Invalid Date';
var TO_STRING = 'toString';
var nativeDateToString = uncurryThis(DatePrototype[TO_STRING]);
var thisTimeValue = uncurryThis(DatePrototype.getTime);

// `Date.prototype.toString` method
// https://tc39.es/ecma262/#sec-date.prototype.tostring
if (String(new Date(NaN)) != INVALID_DATE) {
  defineBuiltIn(DatePrototype, TO_STRING, function toString() {
    var value = thisTimeValue(this);
    // eslint-disable-next-line no-self-compare -- NaN check
    return value === value ? nativeDateToString(this) : INVALID_DATE;
  });
}


/***/ }),

/***/ "./node_modules/core-js/modules/es.parse-int.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/es.parse-int.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var $parseInt = __webpack_require__(/*! ../internals/number-parse-int */ "./node_modules/core-js/internals/number-parse-int.js");

// `parseInt` method
// https://tc39.es/ecma262/#sec-parseint-string-radix
$({ global: true, forced: parseInt != $parseInt }, {
  parseInt: $parseInt
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.regexp.to-string.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/modules/es.regexp.to-string.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var PROPER_FUNCTION_NAME = (__webpack_require__(/*! ../internals/function-name */ "./node_modules/core-js/internals/function-name.js").PROPER);
var defineBuiltIn = __webpack_require__(/*! ../internals/define-built-in */ "./node_modules/core-js/internals/define-built-in.js");
var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");
var $toString = __webpack_require__(/*! ../internals/to-string */ "./node_modules/core-js/internals/to-string.js");
var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");
var getRegExpFlags = __webpack_require__(/*! ../internals/regexp-get-flags */ "./node_modules/core-js/internals/regexp-get-flags.js");

var TO_STRING = 'toString';
var RegExpPrototype = RegExp.prototype;
var nativeToString = RegExpPrototype[TO_STRING];

var NOT_GENERIC = fails(function () { return nativeToString.call({ source: 'a', flags: 'b' }) != '/a/b'; });
// FF44- RegExp#toString has a wrong name
var INCORRECT_NAME = PROPER_FUNCTION_NAME && nativeToString.name != TO_STRING;

// `RegExp.prototype.toString` method
// https://tc39.es/ecma262/#sec-regexp.prototype.tostring
if (NOT_GENERIC || INCORRECT_NAME) {
  defineBuiltIn(RegExp.prototype, TO_STRING, function toString() {
    var R = anObject(this);
    var pattern = $toString(R.source);
    var flags = $toString(getRegExpFlags(R));
    return '/' + pattern + '/' + flags;
  }, { unsafe: true });
}


/***/ }),

/***/ "./assets/styles/Homepage/Social/index.css":
/*!*************************************************!*\
  !*** ./assets/styles/Homepage/Social/index.css ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./assets/styles/Homepage/homeGazette.css":
/*!************************************************!*\
  !*** ./assets/styles/Homepage/homeGazette.css ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./assets/styles/Homepage/homepageCarousel.css":
/*!*****************************************************!*\
  !*** ./assets/styles/Homepage/homepageCarousel.css ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./assets/styles/Shop/linkedProductsCarousel.css":
/*!*******************************************************!*\
  !*** ./assets/styles/Shop/linkedProductsCarousel.css ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./assets/styles/UI/SlickCarousel/slick.css":
/*!**************************************************!*\
  !*** ./assets/styles/UI/SlickCarousel/slick.css ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./assets/styles/UI/SlickCarousel/slickTheme.css":
/*!*******************************************************!*\
  !*** ./assets/styles/UI/SlickCarousel/slickTheme.css ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./assets/Config/gazette.json":
/*!************************************!*\
  !*** ./assets/Config/gazette.json ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"id":27,"name":{"en":"Newspaper","fr":"Gazette","es":"Gazeta","it":"Gazzetta"},"target":{"en":"/en/newspaper.html","fr":"/fr/gazette.html","es":"/es/gazeta.html","it":"/it/gazzetta.html"},"subCategories":[{"id":186,"name":{"en":"Interviews","fr":"Interviews","es":"Entrevistas","it":"Interviste"},"picture":{"alt":{"en":"Bartender preparing a cocktail","fr":"Barman préparant un cocktail","es":"Bartender preparando un cóctel","it":"Barman che prepara un cocktail"},"path":"interviews_small.jpg"},"target":{"en":"/en/newspaper/interviews.html","fr":"/fr/gazette/interviews.html","es":"/es/gazeta/entrevistas.html","it":"/it/gazzetta/interviste.html"}},{"id":187,"name":{"en":"Gastronomic mixology","fr":"Mixologie gastronomique","es":"Mixologia gastronomica","it":"Mixologia gastronomica"},"picture":{"alt":{"en":"A cocktail surrounded by refined dishes","fr":"Un cocktail entouré de plats raffinés","es":"Un cóctel rodeado de platos refinados","it":"Un cocktail circondato da piatti raffinati"},"path":"mixology_small.jpg"},"target":{"en":"/en/newspaper/gastronomic-mixology.html","fr":"/fr/gazette/mixologie-gastronomique.html","es":"/es/gazeta/mixologia-gastronomica.html","it":"/it/gazzetta/mixologia-gastronomica.html"}},{"id":188,"name":{"en":"history and origins","fr":"Histoire et origines","es":"Historia y origenes","it":"Storie e origini"},"picture":{"alt":{"en":"Gentlemen tasting wine in a 19th-century bar","fr":"Messieurs goûtant du vin dans un bar au 19è siècle","es":"Caballeros degustando vino en un bar del siglo XIX","it":"Signori che assaggiano vino in un bar del XIX secolo"},"path":"history_small.jpg"},"target":{"en":"/en/newspaper/history-and-origins.html","fr":"/fr/gazette/histoire-et-origines.html","es":"/es/gazeta/historias-y-origenes.html","it":"/it/gazzetta/storie-e-origini.html"}},{"id":189,"name":{"en":"Trends","fr":"Tendances","es":"Tendencias","it":"Tendenze"},"picture":{"alt":{"en":"Cocktail on a table with bar utensils","fr":"Cocktail posé sur une table avec des ustensiles de bar","es":"Cóctel en una mesa con utensilios de bar","it":"Cocktail su un tavolo con utensili da bar"},"path":"topic_small.jpg"},"target":{"en":"/en/newspaper/trends.html","fr":"/fr/gazette/tendances.html","es":"/es/gazeta/tendencias.html","it":"/it/gazzetta/tendenze.html"}}]}');

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_core-js_modules_es_array_concat_js-node_modules_core-js_modules_es_array-a9bb89","vendors-node_modules_prop-types_index_js","vendors-node_modules_core-js_modules_es_weak-map_js","vendors-node_modules_react-slick_lib_index_js","assets_UI_Icon_Loader_jsx-assets_entrypoints_i18n_js-assets_functions_api_js","assets_CustomHook_state_useOpenState_jsx-assets_UI_Form_FormButton_jsx-assets_UI_Product_Pric-f56e77","assets_Components_Shop_ProductIndex_ProductCard_jsx","assets_CustomHook_fetch_useFetch_jsx","assets_Components_Blog_Recipe_RecipeIndex_RecipeCard_jsx-assets_UI_Carousel_index_jsx"], () => (__webpack_exec__("./assets/entrypoints/home.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LENBQUMsMkhBQStDOztBQUUxRjs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLDREQUE0RDtBQUNoRTtBQUNBO0FBQ0E7QUFDQSxDQUFDOzs7Ozs7Ozs7OztBQ2REO0FBQ0Esa0JBQWtCLG1CQUFPLENBQUMscUdBQW9DO0FBQzlELG9CQUFvQixtQkFBTyxDQUFDLHlGQUE4Qjs7QUFFMUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7Ozs7Ozs7Ozs7QUNsQkEsUUFBUSxtQkFBTyxDQUFDLHVFQUFxQjtBQUNyQyxnQkFBZ0IsbUJBQU8sQ0FBQywyRkFBK0I7O0FBRXZEO0FBQ0E7QUFDQSxJQUFJLDZDQUE2QztBQUNqRDtBQUNBLENBQUM7Ozs7Ozs7Ozs7OztBQ1BZO0FBQ2IsMkJBQTJCLG1IQUE0QztBQUN2RSxvQkFBb0IsbUJBQU8sQ0FBQyx5RkFBOEI7QUFDMUQsZUFBZSxtQkFBTyxDQUFDLDZFQUF3QjtBQUMvQyxnQkFBZ0IsbUJBQU8sQ0FBQyw2RUFBd0I7QUFDaEQsWUFBWSxtQkFBTyxDQUFDLHFFQUFvQjtBQUN4QyxxQkFBcUIsbUJBQU8sQ0FBQywyRkFBK0I7O0FBRTVEO0FBQ0E7QUFDQTs7QUFFQSxzQ0FBc0MsNkJBQTZCLHlCQUF5QixjQUFjO0FBQzFHO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUcsSUFBSSxjQUFjO0FBQ3JCOzs7Ozs7Ozs7Ozs7O0FDekJBOzs7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7Ozs7QUNBQSIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2Fzc2V0cy9Db21wb25lbnRzL0hvbWVwYWdlL0dhemV0dGUvQ2Fyb3VzZWxHYXpldHRlSXRlbS5qc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL0NvbXBvbmVudHMvSG9tZXBhZ2UvR2F6ZXR0ZS9HYXpldHRlSXRlbS5qc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL0NvbXBvbmVudHMvSG9tZXBhZ2UvR2F6ZXR0ZS9pbmRleC5qc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL0NvbXBvbmVudHMvSG9tZXBhZ2UvSG9tZXBhZ2VDYXJvdXNlbC9pbmRleC5qc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL0NvbXBvbmVudHMvSG9tZXBhZ2UvUG9zdExpbmtlZFByb2R1Y3RzL2luZGV4LmpzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvQ3VzdG9tSG9vay9jYXJvdXNlbC91c2VJbmZpbml0ZUNhcm91c2VsLmpzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvZW50cnlwb2ludHMvaG9tZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvbnVtYmVyLXBhcnNlLWludC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvcmVnZXhwLWdldC1mbGFncy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzLmFycmF5Lm1hcC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzLmRhdGUudG8tc3RyaW5nLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXMucGFyc2UtaW50LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXMucmVnZXhwLnRvLXN0cmluZy5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc3R5bGVzL0hvbWVwYWdlL1NvY2lhbC9pbmRleC5jc3M/YjA1YiIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc3R5bGVzL0hvbWVwYWdlL2hvbWVHYXpldHRlLmNzcz9hMzE2Iiwid2VicGFjazovLy8uL2Fzc2V0cy9zdHlsZXMvSG9tZXBhZ2UvaG9tZXBhZ2VDYXJvdXNlbC5jc3M/MmUxMiIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc3R5bGVzL1Nob3AvbGlua2VkUHJvZHVjdHNDYXJvdXNlbC5jc3M/M2E3NiIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc3R5bGVzL1VJL1NsaWNrQ2Fyb3VzZWwvc2xpY2suY3NzPzk3NzIiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3N0eWxlcy9VSS9TbGlja0Nhcm91c2VsL3NsaWNrVGhlbWUuY3NzP2I1ZTUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IGkxOG4gZnJvbSAnLi4vLi4vLi4vZW50cnlwb2ludHMvaTE4bic7XHJcblxyXG5leHBvcnQgY29uc3QgQ2Fyb3VzZWxHYXpldHRlSXRlbSA9ICh7c3ViQ2F0ZWdvcnksIGN1cnJlbnRUYXJnZXR9KSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaG9tZS1nYXpldHRlLWNhcm91c2VsLWl0ZW1cIj5cclxuICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiaG9tZS1nYXpldHRlLWNhcm91c2VsLWxpbmtcIiBocmVmPXtjdXJyZW50VGFyZ2V0fT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaG9tZS1nYXpldHRlLWNhcm91c2VsLWltZy13cmFwcGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJob21lLWdhemV0dGUtY2Fyb3VzZWwtaW1nXCIgc3JjPXsnL2ltZy9jYXRlZ29yaWVzLycrc3ViQ2F0ZWdvcnkucGljdHVyZS5wYXRofSBhbHQ9e3N1YkNhdGVnb3J5LnBpY3R1cmUuYWx0W2kxOG4ubGFuZ3VhZ2VdfSAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvYT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufSIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBpMThuIGZyb20gJy4uLy4uLy4uL2VudHJ5cG9pbnRzL2kxOG4nO1xyXG5cclxuZXhwb3J0IGNvbnN0IEdhemV0dGVJdGVtID0gKHtzdWJDYXRlZ29yeX0pID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGxpIGNsYXNzTmFtZT1cImhvbWUtZ2F6ZXR0ZS1pdGVtXCI+XHJcbiAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImhvbWUtZ2F6ZXR0ZS1pdGVtLWxpbmtcIiBocmVmPXtzdWJDYXRlZ29yeS50YXJnZXRbaTE4bi5sYW5ndWFnZV19PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJob21lLWdhemV0dGUtaW1nLXdyYXBwZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cImhvbWUtZ2F6ZXR0ZS1pbWdcIiBzcmM9eycvaW1nL2NhdGVnb3JpZXMvJytzdWJDYXRlZ29yeS5waWN0dXJlLnBhdGh9IGFsdD17c3ViQ2F0ZWdvcnkucGljdHVyZS5hbHRbaTE4bi5sYW5ndWFnZV19IC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaG9tZS1nYXpldHRlLWl0ZW0tdGl0bGUtd3JhcHBlciB0aXRsZS11bmRlcmxpbmVkLXdyYXBwZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwiaG9tZS1nYXpldHRlLWl0ZW0tdGl0bGUgdGl0bGUtdW5kZXJsaW5lZFwiPntzdWJDYXRlZ29yeS5uYW1lW2kxOG4ubGFuZ3VhZ2VdfTwvaDM+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgIDwvbGk+XHJcbiAgICApXHJcbn0iLCJpbXBvcnQgUmVhY3QsIHsgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IGNhdGVnb3J5R2F6ZXR0ZSBmcm9tICcuLi8uLi8uLi9Db25maWcvZ2F6ZXR0ZS5qc29uJztcclxuaW1wb3J0IFNsaWRlciBmcm9tICdyZWFjdC1zbGljayc7XHJcbmltcG9ydCB7IENhcm91c2VsR2F6ZXR0ZUl0ZW0gfSBmcm9tICcuL0Nhcm91c2VsR2F6ZXR0ZUl0ZW0nO1xyXG5pbXBvcnQgeyBHYXpldHRlSXRlbSB9IGZyb20gJy4vR2F6ZXR0ZUl0ZW0nO1xyXG5cclxuaW1wb3J0ICcuLi8uLi8uLi9zdHlsZXMvSG9tZXBhZ2UvaG9tZUdhemV0dGUuY3NzJztcclxuaW1wb3J0ICcuLi8uLi8uLi9zdHlsZXMvVUkvU2xpY2tDYXJvdXNlbC9zbGlja1RoZW1lLmNzcyc7XHJcbmltcG9ydCAnLi4vLi4vLi4vc3R5bGVzL1VJL1NsaWNrQ2Fyb3VzZWwvc2xpY2suY3NzJztcclxuaW1wb3J0IGkxOG4gZnJvbSAnLi4vLi4vLi4vZW50cnlwb2ludHMvaTE4bic7XHJcbmltcG9ydCB7IENoZXZyb25MZWZ0SWNvbiB9IGZyb20gJy4uLy4uLy4uL1VJL0ljb24vQ2hldnJvbkxlZnRJY29uJztcclxuaW1wb3J0IHsgQ2hldnJvblJpZ2h0SWNvbiB9IGZyb20gJy4uLy4uLy4uL1VJL0ljb24vQ2hldnJvblJpZ2h0SWNvbic7XHJcblxyXG5leHBvcnQgY29uc3QgR2F6ZXR0ZSA9ICgpID0+IHtcclxuXHJcbiAgICAvL1dJVEhPVVRfSU5URVJWSUVXUyAvLyBhIHN1cHByaW1lciBxdWFuZCBpbCB5IGF1cmEgZGVzIGludGVydmlld3NcclxuICAgIGNvbnN0IGdhemV0dGUgPSB7XHJcbiAgICAgICAgLi4uY2F0ZWdvcnlHYXpldHRlLFxyXG4gICAgICAgIHN1YkNhdGVnb3JpZXM6IGNhdGVnb3J5R2F6ZXR0ZS5zdWJDYXRlZ29yaWVzLmZpbHRlcihzdWJDYXRlZ29yeSA9PiBzdWJDYXRlZ29yeS5uYW1lLmVuICE9PSAnSW50ZXJ2aWV3cycpXHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IHNldHRpbmdzID0ge1xyXG4gICAgICAgIGRvdHM6IHRydWUsXHJcbiAgICAgICAgYXJyb3dzOiBmYWxzZSxcclxuICAgICAgICBpbmZpbml0ZTogdHJ1ZSxcclxuICAgICAgICBzcGVlZDogNTAwLFxyXG4gICAgICAgIHNsaWRlc1RvU2hvdzogNCxcclxuICAgICAgICBzbGlkZXNUb1Njcm9sbDogMCxcclxuICAgICAgICByZXNwb25zaXZlOiBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDk2MCxcclxuICAgICAgICAgICAgICAgIHNldHRpbmdzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAyLFxyXG4gICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAxXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDUwMCxcclxuICAgICAgICAgICAgICAgIHNldHRpbmdzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAxLFxyXG4gICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAxXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIF1cclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgW3NsaWRpbmdDbGFzcywgc2V0U2xpZGluZ0NsYXNzXSA9IHVzZVN0YXRlKCcnKTtcclxuICAgIGNvbnN0IFtjdXJyZW50U3ViQ2F0ZWdvcnksIHNldEN1cnJlbnRTdWJDYXRlZ29yeV0gPSB1c2VTdGF0ZShnYXpldHRlLnN1YkNhdGVnb3JpZXNbMF0pO1xyXG5cclxuICAgIGNvbnN0IGhhbmRsZVN3aXBlID0gKGRpcmVjdGlvbikgPT4ge1xyXG4gICAgICAgIHNldFNsaWRpbmdDbGFzcygnc2xpZGluZyAnK2RpcmVjdGlvbik7XHJcbiAgICB9XHJcbiAgICBjb25zdCBoYW5kbGVBZnRlciA9IChjdXJyZW50SW5kZXgpID0+IHtcclxuICAgICAgICBzZXRDdXJyZW50U3ViQ2F0ZWdvcnkoZ2F6ZXR0ZS5zdWJDYXRlZ29yaWVzW2N1cnJlbnRJbmRleF0pO1xyXG4gICAgICAgIHNldFNsaWRpbmdDbGFzcygnJyk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgaGFuZGxlQ2xpY2tQcmV2ID0gKCkgPT4ge1xyXG4gICAgICAgIHNldFNsaWRpbmdDbGFzcygnc2xpZGluZyByaWdodCcpO1xyXG4gICAgICAgIHNsaWRlclJlZi5jdXJyZW50LnNsaWNrUHJldigpO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBoYW5kbGVDbGlja05leHQgPSAoKSA9PiB7XHJcbiAgICAgICAgc2V0U2xpZGluZ0NsYXNzKCdzbGlkaW5nIGxlZnQnKTtcclxuICAgICAgICBzbGlkZXJSZWYuY3VycmVudC5zbGlja05leHQoKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBzbGlkZXJSZWYgPSB1c2VSZWYobnVsbCk7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhvbWUtZ2F6ZXR0ZS1jYXJvdXNlbC13cmFwcGVyXCI+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImNhcm91c2VsLWFycm93IHByZXZcIiBvbkNsaWNrPXtoYW5kbGVDbGlja1ByZXZ9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxDaGV2cm9uTGVmdEljb24gLz5cclxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPFNsaWRlciByZWY9e3NsaWRlclJlZn0gY2xhc3NOYW1lPVwiaG9tZS1nYXpldHRlLWNhcm91c2VsXCIgey4uLnNldHRpbmdzfSBvblN3aXBlPXtoYW5kbGVTd2lwZX0gb25FZGdlPXtoYW5kbGVTd2lwZX0gYWZ0ZXJDaGFuZ2U9e2hhbmRsZUFmdGVyfT5cclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGdhemV0dGUuc3ViQ2F0ZWdvcmllcy5tYXAoc3ViQ2F0ZWdvcnkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPENhcm91c2VsR2F6ZXR0ZUl0ZW0ga2V5PXtzdWJDYXRlZ29yeS5pZH0gc3ViQ2F0ZWdvcnk9e3N1YkNhdGVnb3J5fSBjdXJyZW50VGFyZ2V0PXtjdXJyZW50U3ViQ2F0ZWdvcnkudGFyZ2V0W2kxOG4ubGFuZ3VhZ2VdfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApKVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIDwvU2xpZGVyPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJjYXJvdXNlbC1hcnJvdyBuZXh0XCIgb25DbGljaz17aGFuZGxlQ2xpY2tOZXh0fT5cclxuICAgICAgICAgICAgICAgICAgICA8Q2hldnJvblJpZ2h0SWNvbiAvPlxyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPXtgaG9tZS1nYXpldHRlLWNhcm91c2VsLXRpdGxlICR7c2xpZGluZ0NsYXNzfWB9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9e2N1cnJlbnRTdWJDYXRlZ29yeS50YXJnZXRbaTE4bi5sYW5ndWFnZV19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7Y3VycmVudFN1YkNhdGVnb3J5Lm5hbWVbaTE4bi5sYW5ndWFnZV19XHJcbiAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgPC9oMz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJob21lLWdhemV0dGUtbGlzdFwiPlxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGdhemV0dGUuc3ViQ2F0ZWdvcmllcy5tYXAoc3ViQ2F0ZWdvcnkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8R2F6ZXR0ZUl0ZW0ga2V5PXtzdWJDYXRlZ29yeS5pZH0gc3ViQ2F0ZWdvcnk9e3N1YkNhdGVnb3J5fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICkpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgPC8+XHJcblxyXG4gICAgKVxyXG59IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IGkxOG4gZnJvbSAnLi4vLi4vLi4vZW50cnlwb2ludHMvaTE4bic7XHJcbmltcG9ydCB7IHVzZUluZmluaXRlQ2Fyb3VzZWwgfSBmcm9tICcuLi8uLi8uLi9DdXN0b21Ib29rL2Nhcm91c2VsL3VzZUluZmluaXRlQ2Fyb3VzZWwnO1xyXG5pbXBvcnQgeyBDYXJvdXNlbCB9IGZyb20gJy4uLy4uLy4uL1VJL0Nhcm91c2VsJztcclxuXHJcbmltcG9ydCAnLi4vLi4vLi4vc3R5bGVzL0hvbWVwYWdlL2hvbWVwYWdlQ2Fyb3VzZWwuY3NzJztcclxuaW1wb3J0IHsgQ2Fyb3VzZWxSZXNwb25zaXZlUnVsZXMgfSBmcm9tICcuLi8uLi8uLi9TZXJ2aWNlL0Nhcm91c2VsUmVzcG9uc2l2ZVJ1bGVzJztcclxuaW1wb3J0IHsgTG9hZGVyIH0gZnJvbSAnLi4vLi4vLi4vVUkvSWNvbi9Mb2FkZXInO1xyXG5pbXBvcnQgeyBSZWNpcGVDYXJkIH0gZnJvbSAnLi4vLi4vQmxvZy9SZWNpcGUvUmVjaXBlSW5kZXgvUmVjaXBlQ2FyZCc7XHJcbmltcG9ydCB7IFByb2R1Y3RDYXJkIH0gZnJvbSAnLi4vLi4vU2hvcC9Qcm9kdWN0SW5kZXgvUHJvZHVjdENhcmQnO1xyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBIb21lcGFnZUNhcm91c2VsID0gKCkgPT4ge1xyXG5cclxuICAgIGNvbnN0IFtvbkFmdGVyQ2hhbmdlLCBpdGVtcywgaXNMb2FkaW5nLCBoYXNBcnJvd1ByZXYsIGhhc0Fycm93TmV4dF0gPSB1c2VJbmZpbml0ZUNhcm91c2VsKFxyXG4gICAgICAgICcvJysgaTE4bi5sYW5ndWFnZSArJy9hcGkvcmVjaXBlL2dldExhc3RzV2l0aFByb2R1Y3RzJywgXHJcbiAgICAgICAgMTBcclxuICAgICk7XHJcblxyXG4gICAgY29uc3QgcmVzcG9uc2l2ZSA9IG5ldyBDYXJvdXNlbFJlc3BvbnNpdmVSdWxlcyh7XHJcbiAgICAgICAgMDoge1xyXG4gICAgICAgICAgICAwOiB7XHJcbiAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDIsXHJcbiAgICAgICAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogMlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICA1MzA6IHtcclxuICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMyxcclxuICAgICAgICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAzXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIDg1MDoge1xyXG4gICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiA0LFxyXG4gICAgICAgICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDRcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgMTQ1MDoge1xyXG4gICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiA1LFxyXG4gICAgICAgICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDVcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgODAwOiB7XHJcbiAgICAgICAgICAgIDA6IHtcclxuICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMixcclxuICAgICAgICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAyXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIDUzMDoge1xyXG4gICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAzLFxyXG4gICAgICAgICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDNcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgMTI1MDoge1xyXG4gICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiA0LFxyXG4gICAgICAgICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDRcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgMTUwMDoge1xyXG4gICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiA1LFxyXG4gICAgICAgICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDVcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuXHJcbiAgICBpZihpdGVtcy5sZW5ndGggPD0gMCkge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2VudGVyLXdyYXBwZXJcIj48TG9hZGVyIGFkZGl0aW9uYWxDbGFzcz1cIm1haW4tbG9hZGVyXCIgLz48L2Rpdj5cclxuICAgICAgICApXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8Q2Fyb3VzZWwgXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImhvbWUtcmVjaXBlLWNhcm91c2VsXCIgXHJcbiAgICAgICAgICAgIGl0ZW1zPXtpdGVtc31cclxuICAgICAgICAgICAgcmVzcG9uc2l2ZT17cmVzcG9uc2l2ZX1cclxuICAgICAgICAgICAgbG9hZEluZmluaXRlRGF0YT17dHJ1ZX1cclxuICAgICAgICAgICAgaGFzQXJyb3dQcmV2PXtoYXNBcnJvd1ByZXZ9XHJcbiAgICAgICAgICAgIGhhc0Fycm93TmV4dD17aGFzQXJyb3dOZXh0fVxyXG4gICAgICAgICAgICBvbkFmdGVyQ2hhbmdlTG9hZEl0ZW1zPXtvbkFmdGVyQ2hhbmdlfSBcclxuICAgICAgICAgICAgaXNMb2FkaW5nPXtpc0xvYWRpbmd9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaXRlbXMubWFwKGl0ZW0gPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKGl0ZW0udHlwZSA9PT0gJ3Byb2R1Y3QnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiA8UHJvZHVjdENhcmQga2V5PXtpdGVtLmlkfSBwcm9kdWN0PXtpdGVtfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gPFJlY2lwZUNhcmQga2V5PXtpdGVtLmlkfSByZWNpcGU9e2l0ZW19IC8+XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgPC9DYXJvdXNlbD5cclxuICAgIClcclxufSIsImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBQcm9kdWN0Q2FyZCB9IGZyb20gJy4uLy4uL1Nob3AvUHJvZHVjdEluZGV4L1Byb2R1Y3RDYXJkJztcclxuaW1wb3J0IHsgdXNlRmV0Y2ggfSBmcm9tICcuLi8uLi8uLi9DdXN0b21Ib29rL2ZldGNoL3VzZUZldGNoJztcclxuaW1wb3J0IHsgTG9hZGVyIH0gZnJvbSAnLi4vLi4vLi4vVUkvSWNvbi9Mb2FkZXInO1xyXG5pbXBvcnQgJy4uLy4uLy4uL3N0eWxlcy9TaG9wL2xpbmtlZFByb2R1Y3RzQ2Fyb3VzZWwuY3NzJztcclxuaW1wb3J0IHsgdXNlV2luZG93UmVzaXplTGlzdGVuZXIgfSBmcm9tICcuLi8uLi8uLi9DdXN0b21Ib29rL2xpc3RlbmVyL3VzZVdpbmRvd1Jlc2l6ZUxpc3RlbmVyJztcclxuaW1wb3J0IHsgQ2Fyb3VzZWwgfSBmcm9tICcuLi8uLi8uLi9VSS9DYXJvdXNlbCc7XHJcbmltcG9ydCB7IENhcm91c2VsUmVzcG9uc2l2ZVJ1bGVzIH0gZnJvbSAnLi4vLi4vLi4vU2VydmljZS9DYXJvdXNlbFJlc3BvbnNpdmVSdWxlcyc7XHJcbmltcG9ydCB7IHVzZVRyYW5zbGF0aW9uIH0gZnJvbSAncmVhY3QtaTE4bmV4dCc7XHJcblxyXG5cclxuXHJcblxyXG5leHBvcnQgY29uc3QgUG9zdExpbmtlZFByb2R1Y3RzID0gKHtwb3N0SWR9KSA9PiB7XHJcbiAgICBjb25zdCB7dCwgaTE4bn0gPSB1c2VUcmFuc2xhdGlvbignbWVzc2FnZXMnKTtcclxuXHJcbiAgICBjb25zdCBbcHJvZHVjdHMsIGlzTG9hZGluZywgZXJyb3JzXSA9IHVzZUZldGNoKCcvJytpMThuLmxhbmd1YWdlKycvYXBpL3Bvc3QvJytwb3N0SWQrJy9saW5rZWRQcm9kdWN0cycpO1xyXG5cclxuICAgIGNvbnN0IFtpc0Nhcm91c2VsLCBzZXRDYXJvdXNlbF0gPSB1c2VTdGF0ZSh0cnVlKTtcclxuICAgIGNvbnN0IFt3aW5kb3dXaWR0aCwgd2luZG93SGVpZ2h0XSA9IHVzZVdpbmRvd1Jlc2l6ZUxpc3RlbmVyKCk7XHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGlmKHdpbmRvd1dpZHRoID4gNzUwKSB7XHJcbiAgICAgICAgICAgIHNldENhcm91c2VsKGZhbHNlKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBzZXRDYXJvdXNlbCh0cnVlKTtcclxuICAgICAgICB9XHJcbiAgICB9LCBbd2luZG93V2lkdGhdKTtcclxuXHJcbiAgICBjb25zdCByZXNwb25zaXZlID0gbmV3IENhcm91c2VsUmVzcG9uc2l2ZVJ1bGVzKHtcclxuICAgICAgICAwOiB7XHJcbiAgICAgICAgICAgIDA6IHtcclxuICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMixcclxuICAgICAgICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAxXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIDUwMDoge1xyXG4gICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAzLFxyXG4gICAgICAgICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDFcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgNzUwOiB7XHJcbiAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDQsXHJcbiAgICAgICAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogMlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbiAgXHJcblxyXG4gICAgaWYoZXJyb3JzKSB7XHJcbiAgICAgICAgcmV0dXJuICcnO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcHJvZHVjdHMgJiYgcHJvZHVjdHMubGVuZ3RoID4gMCAmJiA8aDMgY2xhc3NOYW1lPVwic29jaWFsLXNhbGVzLXRpdGxlXCI+e3QoJ2xpbmtlZF9wcm9kdWN0cycpfTwvaDM+XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaXNMb2FkaW5nICYmIDxMb2FkZXIgLz5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBpc0Nhcm91c2VsXHJcbiAgICAgICAgICAgICAgICA/XHJcbiAgICAgICAgICAgICAgICAoXHJcbiAgICAgICAgICAgICAgICAgICAgPENhcm91c2VsIGNsYXNzTmFtZT1cImxpbmtlZC1wcm9kdWN0cy1jYXJvdXNlbFwiIGl0ZW1zPXtwcm9kdWN0c30gcmVzcG9uc2l2ZT17cmVzcG9uc2l2ZX0+XHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9kdWN0cyAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9kdWN0cy5tYXAocHJvZHVjdCA9PiA8UHJvZHVjdENhcmQga2V5PXtwcm9kdWN0LmlkfSBwcm9kdWN0PXtwcm9kdWN0fSAvPilcclxuICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICA8L0Nhcm91c2VsPlxyXG4gICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgOlxyXG4gICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cInNvY2lhbC1zYWxlcy1saXN0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9kdWN0cyAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9kdWN0cy5tYXAocHJvZHVjdCA9PiA8UHJvZHVjdENhcmQga2V5PXtwcm9kdWN0LmlkfSBwcm9kdWN0PXtwcm9kdWN0fSAvPilcclxuICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICA8Lz5cclxuICAgIClcclxufSIsImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgYXBpRmV0Y2ggfSBmcm9tIFwiLi4vLi4vZnVuY3Rpb25zL2FwaVwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IHVzZUluZmluaXRlQ2Fyb3VzZWwgPSAoZW5kcG9pbnQsIGxpbWl0ID0gNSkgPT4ge1xyXG4gICAgY29uc3QgW2RhdGEsIHNldERhdGFdID0gdXNlU3RhdGUoW10pO1xyXG4gICAgY29uc3QgW2lzTG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBbYWxsSXNMb2FkZWQsIHNldEFsbElzTG9hZGVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIFxyXG4gICAgY29uc3QgbG9hZERhdGEgPSBhc3luYyAob2Zmc2V0KSA9PiB7XHJcbiAgICAgICAgc2V0TG9hZGluZyh0cnVlKTtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBjb25zdCBmZXRjaFJlc3VsdCA9IGF3YWl0IGFwaUZldGNoKGVuZHBvaW50ICsgJz9saW1pdD0nICsgbGltaXQgKyAnJm9mZnNldD0nICsgb2Zmc2V0KTtcclxuICAgICAgICAgICAgc2V0RGF0YShkYXRhID0+IFsuLi5kYXRhLCAuLi5mZXRjaFJlc3VsdF0pO1xyXG4gICAgICAgICAgICBpZihmZXRjaFJlc3VsdC5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICBzZXRIYXNBcnJvd05leHQodHJ1ZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYoZmV0Y2hSZXN1bHQubGVuZ3RoIDwgbGltaXQpIHtcclxuICAgICAgICAgICAgICAgIHNldEFsbElzTG9hZGVkKHRydWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBjYXRjaChlKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xyXG4gICAgfTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGxvYWREYXRhKDApO1xyXG4gICAgfSwgW10pO1xyXG4gICAgXHJcbiAgICBjb25zdCBbaGFzQXJyb3dQcmV2LCBzZXRIYXNBcnJvd1ByZXZdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgW2hhc0Fycm93TmV4dCwgc2V0SGFzQXJyb3dOZXh0XSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcblxyXG4gICAgY29uc3Qgb25BZnRlckNoYW5nZSA9IChpbmRleCwgc2xpZGVzVG9TY3JvbGwpID0+IHtcclxuICAgICAgICBjb25zdCB0b3RhbFNsaWRlcyA9IGluZGV4ICsgc2xpZGVzVG9TY3JvbGw7XHJcbiAgICAgICAgaWYodG90YWxTbGlkZXMgPj0gZGF0YS5sZW5ndGgpIHtcclxuICAgICAgICAgICAgaWYoIWFsbElzTG9hZGVkKSB7XHJcbiAgICAgICAgICAgICAgICBsb2FkRGF0YShkYXRhLmxlbmd0aCAtIDEpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmKGhhc0Fycm93TmV4dCkge1xyXG4gICAgICAgICAgICAgICAgc2V0SGFzQXJyb3dOZXh0KGZhbHNlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSBpZighaGFzQXJyb3dOZXh0KSB7XHJcbiAgICAgICAgICAgIHNldEhhc0Fycm93TmV4dCh0cnVlKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmKGluZGV4ID4gMCAmJiAhaGFzQXJyb3dQcmV2KSB7XHJcbiAgICAgICAgICAgIHNldEhhc0Fycm93UHJldih0cnVlKTtcclxuICAgICAgICB9IGVsc2UgaWYoaW5kZXggPD0gMCAmJiBoYXNBcnJvd1ByZXYpIHtcclxuICAgICAgICAgICAgc2V0SGFzQXJyb3dQcmV2KGZhbHNlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIFtvbkFmdGVyQ2hhbmdlLCBkYXRhLCBpc0xvYWRpbmcsIGhhc0Fycm93UHJldiwgaGFzQXJyb3dOZXh0XTtcclxufSIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IGNyZWF0ZVJvb3QgfSBmcm9tICdyZWFjdC1kb20vY2xpZW50JztcclxuaW1wb3J0IHsgR2F6ZXR0ZSB9IGZyb20gJy4uL0NvbXBvbmVudHMvSG9tZXBhZ2UvR2F6ZXR0ZSc7XHJcbmltcG9ydCB7IFBvc3RMaW5rZWRQcm9kdWN0cyB9IGZyb20gJy4uL0NvbXBvbmVudHMvSG9tZXBhZ2UvUG9zdExpbmtlZFByb2R1Y3RzJztcclxuaW1wb3J0ICcuLi9zdHlsZXMvSG9tZXBhZ2UvU29jaWFsL2luZGV4LmNzcyc7XHJcbmltcG9ydCB7IGNvbmZpZ3VyZUxhbmd1YWdlIH0gZnJvbSAnLi4vZnVuY3Rpb25zL2xhbmd1YWdlL2NvbmZpZ3VyZUxhbmd1YWdlJztcclxuaW1wb3J0IHsgSG9tZXBhZ2VDYXJvdXNlbCB9IGZyb20gJy4uL0NvbXBvbmVudHMvSG9tZXBhZ2UvSG9tZXBhZ2VDYXJvdXNlbCc7XHJcblxyXG5jb25maWd1cmVMYW5ndWFnZSgpO1xyXG5cclxuY29uc3QgZ2F6ZXR0ZVJvb3QgPSBjcmVhdGVSb290KGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdob21lLWdhemV0dGUnKSk7XHJcbmdhemV0dGVSb290LnJlbmRlcihcclxuICAgIDxHYXpldHRlIC8+XHJcbik7XHJcblxyXG5jb25zdCByZWNpcGVSb290ID0gY3JlYXRlUm9vdChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaG9tZXBhZ2UtY2Fyb3VzZWwnKSk7XHJcbnJlY2lwZVJvb3QucmVuZGVyKFxyXG4gICAgPEhvbWVwYWdlQ2Fyb3VzZWwgLz5cclxuKTtcclxuXHJcblxyXG5jb25zdCBwb3N0TGlua2VkUHJvZHVjdHNFbHRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnBvc3QtbGlua2VkLXByb2R1Y3RzJyk7XHJcbnBvc3RMaW5rZWRQcm9kdWN0c0VsdHMuZm9yRWFjaChlbHQgPT4ge1xyXG4gICAgY29uc3Qgcm9vdCA9IGNyZWF0ZVJvb3QoZWx0KTtcclxuICAgIHJvb3QucmVuZGVyKFxyXG4gICAgICAgIDxQb3N0TGlua2VkUHJvZHVjdHMgcG9zdElkPXtKU09OLnBhcnNlKGVsdC5kYXRhc2V0LnBvc3RpZCl9IC8+XHJcbiAgICApXHJcbn0pIiwidmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nbG9iYWwnKTtcbnZhciBmYWlscyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mYWlscycpO1xudmFyIHVuY3VycnlUaGlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLXVuY3VycnktdGhpcycpO1xudmFyIHRvU3RyaW5nID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLXN0cmluZycpO1xudmFyIHRyaW0gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvc3RyaW5nLXRyaW0nKS50cmltO1xudmFyIHdoaXRlc3BhY2VzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3doaXRlc3BhY2VzJyk7XG5cbnZhciAkcGFyc2VJbnQgPSBnbG9iYWwucGFyc2VJbnQ7XG52YXIgU3ltYm9sID0gZ2xvYmFsLlN5bWJvbDtcbnZhciBJVEVSQVRPUiA9IFN5bWJvbCAmJiBTeW1ib2wuaXRlcmF0b3I7XG52YXIgaGV4ID0gL15bKy1dPzB4L2k7XG52YXIgZXhlYyA9IHVuY3VycnlUaGlzKGhleC5leGVjKTtcbnZhciBGT1JDRUQgPSAkcGFyc2VJbnQod2hpdGVzcGFjZXMgKyAnMDgnKSAhPT0gOCB8fCAkcGFyc2VJbnQod2hpdGVzcGFjZXMgKyAnMHgxNicpICE9PSAyMlxuICAvLyBNUyBFZGdlIDE4LSBicm9rZW4gd2l0aCBib3hlZCBzeW1ib2xzXG4gIHx8IChJVEVSQVRPUiAmJiAhZmFpbHMoZnVuY3Rpb24gKCkgeyAkcGFyc2VJbnQoT2JqZWN0KElURVJBVE9SKSk7IH0pKTtcblxuLy8gYHBhcnNlSW50YCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtcGFyc2VpbnQtc3RyaW5nLXJhZGl4XG5tb2R1bGUuZXhwb3J0cyA9IEZPUkNFRCA/IGZ1bmN0aW9uIHBhcnNlSW50KHN0cmluZywgcmFkaXgpIHtcbiAgdmFyIFMgPSB0cmltKHRvU3RyaW5nKHN0cmluZykpO1xuICByZXR1cm4gJHBhcnNlSW50KFMsIChyYWRpeCA+Pj4gMCkgfHwgKGV4ZWMoaGV4LCBTKSA/IDE2IDogMTApKTtcbn0gOiAkcGFyc2VJbnQ7XG4iLCJ2YXIgY2FsbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi1jYWxsJyk7XG52YXIgaGFzT3duID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2hhcy1vd24tcHJvcGVydHknKTtcbnZhciBpc1Byb3RvdHlwZU9mID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1pcy1wcm90b3R5cGUtb2YnKTtcbnZhciByZWdFeHBGbGFncyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9yZWdleHAtZmxhZ3MnKTtcblxudmFyIFJlZ0V4cFByb3RvdHlwZSA9IFJlZ0V4cC5wcm90b3R5cGU7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKFIpIHtcbiAgdmFyIGZsYWdzID0gUi5mbGFncztcbiAgcmV0dXJuIGZsYWdzID09PSB1bmRlZmluZWQgJiYgISgnZmxhZ3MnIGluIFJlZ0V4cFByb3RvdHlwZSkgJiYgIWhhc093bihSLCAnZmxhZ3MnKSAmJiBpc1Byb3RvdHlwZU9mKFJlZ0V4cFByb3RvdHlwZSwgUilcbiAgICA/IGNhbGwocmVnRXhwRmxhZ3MsIFIpIDogZmxhZ3M7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyICQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZXhwb3J0Jyk7XG52YXIgJG1hcCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hcnJheS1pdGVyYXRpb24nKS5tYXA7XG52YXIgYXJyYXlNZXRob2RIYXNTcGVjaWVzU3VwcG9ydCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hcnJheS1tZXRob2QtaGFzLXNwZWNpZXMtc3VwcG9ydCcpO1xuXG52YXIgSEFTX1NQRUNJRVNfU1VQUE9SVCA9IGFycmF5TWV0aG9kSGFzU3BlY2llc1N1cHBvcnQoJ21hcCcpO1xuXG4vLyBgQXJyYXkucHJvdG90eXBlLm1hcGAgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWFycmF5LnByb3RvdHlwZS5tYXBcbi8vIHdpdGggYWRkaW5nIHN1cHBvcnQgb2YgQEBzcGVjaWVzXG4kKHsgdGFyZ2V0OiAnQXJyYXknLCBwcm90bzogdHJ1ZSwgZm9yY2VkOiAhSEFTX1NQRUNJRVNfU1VQUE9SVCB9LCB7XG4gIG1hcDogZnVuY3Rpb24gbWFwKGNhbGxiYWNrZm4gLyogLCB0aGlzQXJnICovKSB7XG4gICAgcmV0dXJuICRtYXAodGhpcywgY2FsbGJhY2tmbiwgYXJndW1lbnRzLmxlbmd0aCA+IDEgPyBhcmd1bWVudHNbMV0gOiB1bmRlZmluZWQpO1xuICB9XG59KTtcbiIsIi8vIFRPRE86IFJlbW92ZSBmcm9tIGBjb3JlLWpzQDRgXG52YXIgdW5jdXJyeVRoaXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tdW5jdXJyeS10aGlzJyk7XG52YXIgZGVmaW5lQnVpbHRJbiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kZWZpbmUtYnVpbHQtaW4nKTtcblxudmFyIERhdGVQcm90b3R5cGUgPSBEYXRlLnByb3RvdHlwZTtcbnZhciBJTlZBTElEX0RBVEUgPSAnSW52YWxpZCBEYXRlJztcbnZhciBUT19TVFJJTkcgPSAndG9TdHJpbmcnO1xudmFyIG5hdGl2ZURhdGVUb1N0cmluZyA9IHVuY3VycnlUaGlzKERhdGVQcm90b3R5cGVbVE9fU1RSSU5HXSk7XG52YXIgdGhpc1RpbWVWYWx1ZSA9IHVuY3VycnlUaGlzKERhdGVQcm90b3R5cGUuZ2V0VGltZSk7XG5cbi8vIGBEYXRlLnByb3RvdHlwZS50b1N0cmluZ2AgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWRhdGUucHJvdG90eXBlLnRvc3RyaW5nXG5pZiAoU3RyaW5nKG5ldyBEYXRlKE5hTikpICE9IElOVkFMSURfREFURSkge1xuICBkZWZpbmVCdWlsdEluKERhdGVQcm90b3R5cGUsIFRPX1NUUklORywgZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgdmFyIHZhbHVlID0gdGhpc1RpbWVWYWx1ZSh0aGlzKTtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tc2VsZi1jb21wYXJlIC0tIE5hTiBjaGVja1xuICAgIHJldHVybiB2YWx1ZSA9PT0gdmFsdWUgPyBuYXRpdmVEYXRlVG9TdHJpbmcodGhpcykgOiBJTlZBTElEX0RBVEU7XG4gIH0pO1xufVxuIiwidmFyICQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZXhwb3J0Jyk7XG52YXIgJHBhcnNlSW50ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL251bWJlci1wYXJzZS1pbnQnKTtcblxuLy8gYHBhcnNlSW50YCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtcGFyc2VpbnQtc3RyaW5nLXJhZGl4XG4kKHsgZ2xvYmFsOiB0cnVlLCBmb3JjZWQ6IHBhcnNlSW50ICE9ICRwYXJzZUludCB9LCB7XG4gIHBhcnNlSW50OiAkcGFyc2VJbnRcbn0pO1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIFBST1BFUl9GVU5DVElPTl9OQU1FID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLW5hbWUnKS5QUk9QRVI7XG52YXIgZGVmaW5lQnVpbHRJbiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kZWZpbmUtYnVpbHQtaW4nKTtcbnZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hbi1vYmplY3QnKTtcbnZhciAkdG9TdHJpbmcgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8tc3RyaW5nJyk7XG52YXIgZmFpbHMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZmFpbHMnKTtcbnZhciBnZXRSZWdFeHBGbGFncyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9yZWdleHAtZ2V0LWZsYWdzJyk7XG5cbnZhciBUT19TVFJJTkcgPSAndG9TdHJpbmcnO1xudmFyIFJlZ0V4cFByb3RvdHlwZSA9IFJlZ0V4cC5wcm90b3R5cGU7XG52YXIgbmF0aXZlVG9TdHJpbmcgPSBSZWdFeHBQcm90b3R5cGVbVE9fU1RSSU5HXTtcblxudmFyIE5PVF9HRU5FUklDID0gZmFpbHMoZnVuY3Rpb24gKCkgeyByZXR1cm4gbmF0aXZlVG9TdHJpbmcuY2FsbCh7IHNvdXJjZTogJ2EnLCBmbGFnczogJ2InIH0pICE9ICcvYS9iJzsgfSk7XG4vLyBGRjQ0LSBSZWdFeHAjdG9TdHJpbmcgaGFzIGEgd3JvbmcgbmFtZVxudmFyIElOQ09SUkVDVF9OQU1FID0gUFJPUEVSX0ZVTkNUSU9OX05BTUUgJiYgbmF0aXZlVG9TdHJpbmcubmFtZSAhPSBUT19TVFJJTkc7XG5cbi8vIGBSZWdFeHAucHJvdG90eXBlLnRvU3RyaW5nYCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtcmVnZXhwLnByb3RvdHlwZS50b3N0cmluZ1xuaWYgKE5PVF9HRU5FUklDIHx8IElOQ09SUkVDVF9OQU1FKSB7XG4gIGRlZmluZUJ1aWx0SW4oUmVnRXhwLnByb3RvdHlwZSwgVE9fU1RSSU5HLCBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICB2YXIgUiA9IGFuT2JqZWN0KHRoaXMpO1xuICAgIHZhciBwYXR0ZXJuID0gJHRvU3RyaW5nKFIuc291cmNlKTtcbiAgICB2YXIgZmxhZ3MgPSAkdG9TdHJpbmcoZ2V0UmVnRXhwRmxhZ3MoUikpO1xuICAgIHJldHVybiAnLycgKyBwYXR0ZXJuICsgJy8nICsgZmxhZ3M7XG4gIH0sIHsgdW5zYWZlOiB0cnVlIH0pO1xufVxuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307Il0sIm5hbWVzIjpbIlJlYWN0IiwiaTE4biIsIkNhcm91c2VsR2F6ZXR0ZUl0ZW0iLCJfcmVmIiwic3ViQ2F0ZWdvcnkiLCJjdXJyZW50VGFyZ2V0IiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTmFtZSIsImhyZWYiLCJzcmMiLCJwaWN0dXJlIiwicGF0aCIsImFsdCIsImxhbmd1YWdlIiwiR2F6ZXR0ZUl0ZW0iLCJ0YXJnZXQiLCJuYW1lIiwidXNlUmVmIiwidXNlU3RhdGUiLCJjYXRlZ29yeUdhemV0dGUiLCJTbGlkZXIiLCJDaGV2cm9uTGVmdEljb24iLCJDaGV2cm9uUmlnaHRJY29uIiwiR2F6ZXR0ZSIsImdhemV0dGUiLCJfb2JqZWN0U3ByZWFkIiwic3ViQ2F0ZWdvcmllcyIsImZpbHRlciIsImVuIiwic2V0dGluZ3MiLCJkb3RzIiwiYXJyb3dzIiwiaW5maW5pdGUiLCJzcGVlZCIsInNsaWRlc1RvU2hvdyIsInNsaWRlc1RvU2Nyb2xsIiwicmVzcG9uc2l2ZSIsImJyZWFrcG9pbnQiLCJfdXNlU3RhdGUiLCJfdXNlU3RhdGUyIiwiX3NsaWNlZFRvQXJyYXkiLCJzbGlkaW5nQ2xhc3MiLCJzZXRTbGlkaW5nQ2xhc3MiLCJfdXNlU3RhdGUzIiwiX3VzZVN0YXRlNCIsImN1cnJlbnRTdWJDYXRlZ29yeSIsInNldEN1cnJlbnRTdWJDYXRlZ29yeSIsImhhbmRsZVN3aXBlIiwiZGlyZWN0aW9uIiwiaGFuZGxlQWZ0ZXIiLCJjdXJyZW50SW5kZXgiLCJoYW5kbGVDbGlja1ByZXYiLCJzbGlkZXJSZWYiLCJjdXJyZW50Iiwic2xpY2tQcmV2IiwiaGFuZGxlQ2xpY2tOZXh0Iiwic2xpY2tOZXh0IiwiRnJhZ21lbnQiLCJvbkNsaWNrIiwiX2V4dGVuZHMiLCJyZWYiLCJvblN3aXBlIiwib25FZGdlIiwiYWZ0ZXJDaGFuZ2UiLCJtYXAiLCJrZXkiLCJpZCIsImNvbmNhdCIsInVzZUluZmluaXRlQ2Fyb3VzZWwiLCJDYXJvdXNlbCIsIkNhcm91c2VsUmVzcG9uc2l2ZVJ1bGVzIiwiTG9hZGVyIiwiUmVjaXBlQ2FyZCIsIlByb2R1Y3RDYXJkIiwiSG9tZXBhZ2VDYXJvdXNlbCIsIl91c2VJbmZpbml0ZUNhcm91c2VsIiwiX3VzZUluZmluaXRlQ2Fyb3VzZWwyIiwib25BZnRlckNoYW5nZSIsIml0ZW1zIiwiaXNMb2FkaW5nIiwiaGFzQXJyb3dQcmV2IiwiaGFzQXJyb3dOZXh0IiwibGVuZ3RoIiwiYWRkaXRpb25hbENsYXNzIiwibG9hZEluZmluaXRlRGF0YSIsIm9uQWZ0ZXJDaGFuZ2VMb2FkSXRlbXMiLCJpdGVtIiwidHlwZSIsInByb2R1Y3QiLCJyZWNpcGUiLCJ1c2VFZmZlY3QiLCJ1c2VGZXRjaCIsInVzZVdpbmRvd1Jlc2l6ZUxpc3RlbmVyIiwidXNlVHJhbnNsYXRpb24iLCJQb3N0TGlua2VkUHJvZHVjdHMiLCJwb3N0SWQiLCJfdXNlVHJhbnNsYXRpb24iLCJ0IiwiX3VzZUZldGNoIiwiX3VzZUZldGNoMiIsInByb2R1Y3RzIiwiZXJyb3JzIiwiaXNDYXJvdXNlbCIsInNldENhcm91c2VsIiwiX3VzZVdpbmRvd1Jlc2l6ZUxpc3RlIiwiX3VzZVdpbmRvd1Jlc2l6ZUxpc3RlMiIsIndpbmRvd1dpZHRoIiwid2luZG93SGVpZ2h0IiwiX3JlZ2VuZXJhdG9yUnVudGltZSIsImV4cG9ydHMiLCJPcCIsIk9iamVjdCIsInByb3RvdHlwZSIsImhhc093biIsImhhc093blByb3BlcnR5IiwiZGVmaW5lUHJvcGVydHkiLCJvYmoiLCJkZXNjIiwidmFsdWUiLCIkU3ltYm9sIiwiU3ltYm9sIiwiaXRlcmF0b3JTeW1ib2wiLCJpdGVyYXRvciIsImFzeW5jSXRlcmF0b3JTeW1ib2wiLCJhc3luY0l0ZXJhdG9yIiwidG9TdHJpbmdUYWdTeW1ib2wiLCJ0b1N0cmluZ1RhZyIsImRlZmluZSIsImVudW1lcmFibGUiLCJjb25maWd1cmFibGUiLCJ3cml0YWJsZSIsImVyciIsIndyYXAiLCJpbm5lckZuIiwib3V0ZXJGbiIsInNlbGYiLCJ0cnlMb2NzTGlzdCIsInByb3RvR2VuZXJhdG9yIiwiR2VuZXJhdG9yIiwiZ2VuZXJhdG9yIiwiY3JlYXRlIiwiY29udGV4dCIsIkNvbnRleHQiLCJtYWtlSW52b2tlTWV0aG9kIiwidHJ5Q2F0Y2giLCJmbiIsImFyZyIsImNhbGwiLCJDb250aW51ZVNlbnRpbmVsIiwiR2VuZXJhdG9yRnVuY3Rpb24iLCJHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSIsIkl0ZXJhdG9yUHJvdG90eXBlIiwiZ2V0UHJvdG8iLCJnZXRQcm90b3R5cGVPZiIsIk5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlIiwidmFsdWVzIiwiR3AiLCJkZWZpbmVJdGVyYXRvck1ldGhvZHMiLCJmb3JFYWNoIiwibWV0aG9kIiwiX2ludm9rZSIsIkFzeW5jSXRlcmF0b3IiLCJQcm9taXNlSW1wbCIsImludm9rZSIsInJlc29sdmUiLCJyZWplY3QiLCJyZWNvcmQiLCJyZXN1bHQiLCJfdHlwZW9mIiwiX19hd2FpdCIsInRoZW4iLCJ1bndyYXBwZWQiLCJlcnJvciIsInByZXZpb3VzUHJvbWlzZSIsImNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnIiwic3RhdGUiLCJFcnJvciIsImRvbmVSZXN1bHQiLCJkZWxlZ2F0ZSIsImRlbGVnYXRlUmVzdWx0IiwibWF5YmVJbnZva2VEZWxlZ2F0ZSIsInNlbnQiLCJfc2VudCIsImRpc3BhdGNoRXhjZXB0aW9uIiwiYWJydXB0IiwiZG9uZSIsIm1ldGhvZE5hbWUiLCJ1bmRlZmluZWQiLCJUeXBlRXJyb3IiLCJpbmZvIiwicmVzdWx0TmFtZSIsIm5leHQiLCJuZXh0TG9jIiwicHVzaFRyeUVudHJ5IiwibG9jcyIsImVudHJ5IiwidHJ5TG9jIiwiY2F0Y2hMb2MiLCJmaW5hbGx5TG9jIiwiYWZ0ZXJMb2MiLCJ0cnlFbnRyaWVzIiwicHVzaCIsInJlc2V0VHJ5RW50cnkiLCJjb21wbGV0aW9uIiwicmVzZXQiLCJpdGVyYWJsZSIsIml0ZXJhdG9yTWV0aG9kIiwiaXNOYU4iLCJpIiwiZGlzcGxheU5hbWUiLCJpc0dlbmVyYXRvckZ1bmN0aW9uIiwiZ2VuRnVuIiwiY3RvciIsImNvbnN0cnVjdG9yIiwibWFyayIsInNldFByb3RvdHlwZU9mIiwiX19wcm90b19fIiwiYXdyYXAiLCJhc3luYyIsIlByb21pc2UiLCJpdGVyIiwia2V5cyIsInZhbCIsIm9iamVjdCIsInJldmVyc2UiLCJwb3AiLCJza2lwVGVtcFJlc2V0IiwicHJldiIsImNoYXJBdCIsInNsaWNlIiwic3RvcCIsInJvb3RSZWNvcmQiLCJydmFsIiwiZXhjZXB0aW9uIiwiaGFuZGxlIiwibG9jIiwiY2F1Z2h0IiwiaGFzQ2F0Y2giLCJoYXNGaW5hbGx5IiwiZmluYWxseUVudHJ5IiwiY29tcGxldGUiLCJmaW5pc2giLCJfY2F0Y2giLCJ0aHJvd24iLCJkZWxlZ2F0ZVlpZWxkIiwiX3RvQ29uc3VtYWJsZUFycmF5IiwiYXJyIiwiX2FycmF5V2l0aG91dEhvbGVzIiwiX2l0ZXJhYmxlVG9BcnJheSIsIl91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheSIsIl9ub25JdGVyYWJsZVNwcmVhZCIsIkFycmF5IiwiZnJvbSIsImlzQXJyYXkiLCJfYXJyYXlMaWtlVG9BcnJheSIsImFzeW5jR2VuZXJhdG9yU3RlcCIsImdlbiIsIl9uZXh0IiwiX3Rocm93IiwiX2FzeW5jVG9HZW5lcmF0b3IiLCJhcmdzIiwiYXJndW1lbnRzIiwiYXBwbHkiLCJfYXJyYXlXaXRoSG9sZXMiLCJfaXRlcmFibGVUb0FycmF5TGltaXQiLCJfbm9uSXRlcmFibGVSZXN0IiwibyIsIm1pbkxlbiIsIm4iLCJ0b1N0cmluZyIsInRlc3QiLCJsZW4iLCJhcnIyIiwiX2kiLCJfcyIsIl9lIiwiX3giLCJfciIsIl9hcnIiLCJfbiIsIl9kIiwiYXBpRmV0Y2giLCJlbmRwb2ludCIsImxpbWl0IiwiZGF0YSIsInNldERhdGEiLCJzZXRMb2FkaW5nIiwiX3VzZVN0YXRlNSIsIl91c2VTdGF0ZTYiLCJhbGxJc0xvYWRlZCIsInNldEFsbElzTG9hZGVkIiwibG9hZERhdGEiLCJfY2FsbGVlIiwib2Zmc2V0IiwiZmV0Y2hSZXN1bHQiLCJfY2FsbGVlJCIsIl9jb250ZXh0Iiwic2V0SGFzQXJyb3dOZXh0IiwidDAiLCJjb25zb2xlIiwiX3gyIiwiX3VzZVN0YXRlNyIsIl91c2VTdGF0ZTgiLCJzZXRIYXNBcnJvd1ByZXYiLCJfdXNlU3RhdGU5IiwiX3VzZVN0YXRlMTAiLCJpbmRleCIsInRvdGFsU2xpZGVzIiwiY3JlYXRlUm9vdCIsImNvbmZpZ3VyZUxhbmd1YWdlIiwiZ2F6ZXR0ZVJvb3QiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwicmVuZGVyIiwicmVjaXBlUm9vdCIsInBvc3RMaW5rZWRQcm9kdWN0c0VsdHMiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZWx0Iiwicm9vdCIsIkpTT04iLCJwYXJzZSIsImRhdGFzZXQiLCJwb3N0aWQiXSwic291cmNlUm9vdCI6IiJ9
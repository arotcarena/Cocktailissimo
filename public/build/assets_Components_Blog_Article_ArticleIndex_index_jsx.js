"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["assets_Components_Blog_Article_ArticleIndex_index_jsx"],{

/***/ "./assets/Components/Blog/Article/ArticleIndex/ArticleCard.jsx":
/*!*********************************************************************!*\
  !*** ./assets/Components/Blog/Article/ArticleIndex/ArticleCard.jsx ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ArticleCard": () => (/* binding */ ArticleCard)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var ArticleCard = function ArticleCard(_ref) {
  var article = _ref.article;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
    className: "product-card type-article"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    className: "product-card-img-link",
    href: article.target
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "product-card-img-wrapper"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    className: "product-card-img",
    src: article.picture.path,
    alt: article.picture.alt
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "product-card-body"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", {
    className: "product-card-title article-card-title"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: article.target
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, article.title), article.subtitle && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "product-card-subtitle"
  }, " - ", article.subtitle)))));
};

/***/ }),

/***/ "./assets/Components/Blog/Article/ArticleIndex/ArticleFilters/index.jsx":
/*!******************************************************************************!*\
  !*** ./assets/Components/Blog/Article/ArticleIndex/ArticleFilters/index.jsx ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ArticleFilters": () => (/* binding */ ArticleFilters)
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
/* harmony import */ var _Config_gazette_json__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../../../Config/gazette.json */ "./assets/Config/gazette.json");
/* harmony import */ var _UI_Search_SubCategoryFilter__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../../../UI/Search/SubCategoryFilter */ "./assets/UI/Search/SubCategoryFilter.jsx");
















function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }



var ArticleFilters = function ArticleFilters(_ref) {
  var subCategoryId = _ref.subCategoryId,
    filters = _ref.filters,
    setFilterValue = _ref.setFilterValue;
  //pour savoir si on affiche le filtre subCategory
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_16__.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    choiceSubCategory = _useState2[0],
    setChoiceSubCategory = _useState2[1];
  (0,react__WEBPACK_IMPORTED_MODULE_16__.useEffect)(function () {
    //si on est dans article_index
    if (!subCategoryId) {
      setChoiceSubCategory(true);
    }
    //si on est dans article_subCategoryShow on laisse à false
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement("form", {
    className: "search-filters"
  }, choiceSubCategory && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement(_UI_Search_SubCategoryFilter__WEBPACK_IMPORTED_MODULE_18__.SubCategoryFilter, {
    parentCategory: _Config_gazette_json__WEBPACK_IMPORTED_MODULE_17__,
    subCategoryIds: filters.subCategoryIds,
    onChange: setFilterValue
  }));
};

/***/ }),

/***/ "./assets/Components/Blog/Article/ArticleIndex/index.jsx":
/*!***************************************************************!*\
  !*** ./assets/Components/Blog/Article/ArticleIndex/index.jsx ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ArticleIndex": () => (/* binding */ ArticleIndex)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.map.js */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.to-primitive.js */ "./node_modules/core-js/modules/es.symbol.to-primitive.js");
/* harmony import */ var core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.date.to-primitive.js */ "./node_modules/core-js/modules/es.date.to-primitive.js");
/* harmony import */ var core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.error.cause.js */ "./node_modules/core-js/modules/es.error.cause.js");
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.error.to-string.js */ "./node_modules/core-js/modules/es.error.to-string.js");
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.number.constructor.js */ "./node_modules/core-js/modules/es.number.constructor.js");
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _CustomHook_search_useSearchIndex__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../../CustomHook/search/useSearchIndex */ "./assets/CustomHook/search/useSearchIndex.jsx");
/* harmony import */ var _UI_Search_SearchFiltersControls__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../../UI/Search/SearchFiltersControls */ "./assets/UI/Search/SearchFiltersControls.jsx");
/* harmony import */ var _ArticleFilters__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./ArticleFilters */ "./assets/Components/Blog/Article/ArticleIndex/ArticleFilters/index.jsx");
/* harmony import */ var _ArticleCard__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./ArticleCard */ "./assets/Components/Blog/Article/ArticleIndex/ArticleCard.jsx");
/* harmony import */ var _UI_Search_SearchResults__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../../../UI/Search/SearchResults */ "./assets/UI/Search/SearchResults.jsx");
/* harmony import */ var _functions_scroll__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../../../functions/scroll */ "./assets/functions/scroll.js");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }














function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }








var ArticleIndex = function ArticleIndex(_ref) {
  var _sortChoices;
  var _ref$isOpen = _ref.isOpen,
    isOpen = _ref$isOpen === void 0 ? true : _ref$isOpen,
    _ref$subCategoryId = _ref.subCategoryId,
    subCategoryId = _ref$subCategoryId === void 0 ? null : _ref$subCategoryId,
    _ref$q = _ref.q,
    q = _ref$q === void 0 ? '' : _ref$q,
    setCount = _ref.setCount;
  var _useTranslation = (0,react_i18next__WEBPACK_IMPORTED_MODULE_21__.useTranslation)('configs'),
    t = _useTranslation.t,
    i18n = _useTranslation.i18n;
  var subCategoryIds = subCategoryId === null ? [] : [subCategoryId];
  var initialFilters = {
    subCategoryIds: subCategoryIds,
    page: 1,
    limit: 20,
    sortBy: '',
    q: q
  };
  var _useSearchIndex = (0,_CustomHook_search_useSearchIndex__WEBPACK_IMPORTED_MODULE_15__.useSearchIndex)('/' + i18n.language + '/api/article/index', initialFilters, q, _functions_scroll__WEBPACK_IMPORTED_MODULE_20__.scrollTop),
    filters = _useSearchIndex.filters,
    setFilterValue = _useSearchIndex.setFilterValue,
    countFilters = _useSearchIndex.countFilters,
    result = _useSearchIndex.result,
    isLoading = _useSearchIndex.isLoading,
    handleReset = _useSearchIndex.handleReset,
    handlePageChange = _useSearchIndex.handlePageChange,
    setSortBy = _useSearchIndex.setSortBy;
  var sortChoices = (_sortChoices = {}, _defineProperty(_sortChoices, 'A - Z', 'alphabet_ASC'), _defineProperty(_sortChoices, 'Z - A', 'alphabet_DESC'), _defineProperty(_sortChoices, t('sort.createdAt_DESC'), 'createdAt_DESC'), _defineProperty(_sortChoices, t('sort.createdAt_ASC'), 'createdAt_ASC'), _sortChoices);

  //pour envoyer au parent pour afficher sur le bouton Product 
  (0,react__WEBPACK_IMPORTED_MODULE_14__.useEffect)(function () {
    if (result && setCount) {
      setCount(result.count);
    }
  }, [result, setCount]);
  if (!isOpen) {
    return '';
  }
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default().createElement("div", {
    className: "product-index"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default().createElement("div", {
    className: "product-index-header"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default().createElement(_UI_Search_SearchFiltersControls__WEBPACK_IMPORTED_MODULE_16__.SearchFiltersControls, {
    countFilters: countFilters,
    countResults: result === null || result === void 0 ? void 0 : result.count,
    onReset: handleReset,
    sortBy: filters.sortBy,
    setSortBy: setSortBy,
    sortChoices: sortChoices,
    hideFilters: subCategoryId !== null
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default().createElement(_ArticleFilters__WEBPACK_IMPORTED_MODULE_17__.ArticleFilters, {
    subCategoryId: subCategoryId,
    filters: filters,
    setFilterValue: setFilterValue
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default().createElement(_UI_Search_SearchResults__WEBPACK_IMPORTED_MODULE_19__.SearchResults, {
    isLoading: isLoading,
    result: result,
    pageChange: handlePageChange
  }, result && result.items.map(function (article) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default().createElement(_ArticleCard__WEBPACK_IMPORTED_MODULE_18__.ArticleCard, {
      key: article.id,
      article: article
    });
  })));
};

/***/ }),

/***/ "./assets/Config/gazette.json":
/*!************************************!*\
  !*** ./assets/Config/gazette.json ***!
  \************************************/
/***/ ((module) => {

module.exports = JSON.parse('{"id":27,"name":{"en":"Newspaper","fr":"Gazette","es":"Gazeta","it":"Gazzetta"},"target":{"en":"/en/newspaper.html","fr":"/fr/gazette.html","es":"/es/gazeta.html","it":"/it/gazzetta.html"},"subCategories":[{"id":186,"name":{"en":"Interviews","fr":"Interviews","es":"Entrevistas","it":"Interviste"},"picture":{"alt":{"en":"Bartender preparing a cocktail","fr":"Barman préparant un cocktail","es":"Bartender preparando un cóctel","it":"Barman che prepara un cocktail"},"path":"interviews_small.jpg"},"target":{"en":"/en/newspaper/interviews.html","fr":"/fr/gazette/interviews.html","es":"/es/gazeta/entrevistas.html","it":"/it/gazzetta/interviste.html"}},{"id":187,"name":{"en":"Gastronomic mixology","fr":"Mixologie gastronomique","es":"Mixologia gastronomica","it":"Mixologia gastronomica"},"picture":{"alt":{"en":"A cocktail surrounded by refined dishes","fr":"Un cocktail entouré de plats raffinés","es":"Un cóctel rodeado de platos refinados","it":"Un cocktail circondato da piatti raffinati"},"path":"mixology_small.jpg"},"target":{"en":"/en/newspaper/gastronomic-mixology.html","fr":"/fr/gazette/mixologie-gastronomique.html","es":"/es/gazeta/mixologia-gastronomica.html","it":"/it/gazzetta/mixologia-gastronomica.html"}},{"id":188,"name":{"en":"history and origins","fr":"Histoire et origines","es":"Historia y origenes","it":"Storie e origini"},"picture":{"alt":{"en":"Gentlemen tasting wine in a 19th-century bar","fr":"Messieurs goûtant du vin dans un bar au 19è siècle","es":"Caballeros degustando vino en un bar del siglo XIX","it":"Signori che assaggiano vino in un bar del XIX secolo"},"path":"history_small.jpg"},"target":{"en":"/en/newspaper/history-and-origins.html","fr":"/fr/gazette/histoire-et-origines.html","es":"/es/gazeta/historias-y-origenes.html","it":"/it/gazzetta/storie-e-origini.html"}},{"id":189,"name":{"en":"Trends","fr":"Tendances","es":"Tendencias","it":"Tendenze"},"picture":{"alt":{"en":"Cocktail on a table with bar utensils","fr":"Cocktail posé sur une table avec des ustensiles de bar","es":"Cóctel en una mesa con utensilios de bar","it":"Cocktail su un tavolo con utensili da bar"},"path":"topic_small.jpg"},"target":{"en":"/en/newspaper/trends.html","fr":"/fr/gazette/tendances.html","es":"/es/gazeta/tendencias.html","it":"/it/gazzetta/tendenze.html"}}]}');

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXNzZXRzX0NvbXBvbmVudHNfQmxvZ19BcnRpY2xlX0FydGljbGVJbmRleF9pbmRleF9qc3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQTBCO0FBRW5CLElBQU1DLFdBQVcsR0FBRyxTQUFkQSxXQUFXQSxDQUFBQyxJQUFBLEVBQWtCO0VBQUEsSUFBYkMsT0FBTyxHQUFBRCxJQUFBLENBQVBDLE9BQU87RUFHaEMsb0JBQ0lILDBEQUFBO0lBQUlLLFNBQVMsRUFBQztFQUEyQixnQkFDckNMLDBEQUFBO0lBQUdLLFNBQVMsRUFBQyx1QkFBdUI7SUFBQ0MsSUFBSSxFQUFFSCxPQUFPLENBQUNJO0VBQU8sZ0JBQ3REUCwwREFBQTtJQUFLSyxTQUFTLEVBQUM7RUFBMEIsZ0JBQ3JDTCwwREFBQTtJQUFLSyxTQUFTLEVBQUMsa0JBQWtCO0lBQUNHLEdBQUcsRUFBRUwsT0FBTyxDQUFDTSxPQUFPLENBQUNDLElBQUs7SUFBQ0MsR0FBRyxFQUFFUixPQUFPLENBQUNNLE9BQU8sQ0FBQ0U7RUFBSSxFQUFHLENBQ3ZGLENBQ04sZUFDSlgsMERBQUE7SUFBS0ssU0FBUyxFQUFDO0VBQW1CLGdCQUM5QkwsMERBQUE7SUFBSUssU0FBUyxFQUFDO0VBQXVDLGdCQUNqREwsMERBQUE7SUFBR00sSUFBSSxFQUFFSCxPQUFPLENBQUNJO0VBQU8sZ0JBQ3BCUCwwREFBQSxlQUFPRyxPQUFPLENBQUNTLEtBQUssQ0FBUSxFQUV4QlQsT0FBTyxDQUFDVSxRQUFRLGlCQUFJYiwwREFBQTtJQUFNSyxTQUFTLEVBQUM7RUFBdUIsR0FBQyxLQUFHLEVBQUNGLE9BQU8sQ0FBQ1UsUUFBUSxDQUFRLENBRTVGLENBQ0gsQ0FDSCxDQUNMO0FBRWIsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeEJrRDtBQUNjO0FBQ2M7QUFFeEUsSUFBTUssY0FBYyxHQUFHLFNBQWpCQSxjQUFjQSxDQUFBaEIsSUFBQSxFQUFpRDtFQUFBLElBQTVDaUIsYUFBYSxHQUFBakIsSUFBQSxDQUFiaUIsYUFBYTtJQUFFQyxPQUFPLEdBQUFsQixJQUFBLENBQVBrQixPQUFPO0lBQUVDLGNBQWMsR0FBQW5CLElBQUEsQ0FBZG1CLGNBQWM7RUFFbEU7RUFDQSxJQUFBQyxTQUFBLEdBQWtEUCxnREFBUSxDQUFDLEtBQUssQ0FBQztJQUFBUSxVQUFBLEdBQUFDLGNBQUEsQ0FBQUYsU0FBQTtJQUExREcsaUJBQWlCLEdBQUFGLFVBQUE7SUFBRUcsb0JBQW9CLEdBQUFILFVBQUE7RUFDOUNULGlEQUFTLENBQUMsWUFBTTtJQUNaO0lBQ0EsSUFBRyxDQUFDSyxhQUFhLEVBQUU7TUFDZk8sb0JBQW9CLENBQUMsSUFBSSxDQUFDO0lBQzlCO0lBQ0E7RUFDSixDQUFDLEVBQUUsRUFBRSxDQUFDO0VBRU4sb0JBQ0kxQiwyREFBQTtJQUFNSyxTQUFTLEVBQUM7RUFBZ0IsR0FFeEJvQixpQkFBaUIsaUJBQ2J6QiwyREFBQSxDQUFDaUIsNEVBQWlCO0lBQUNVLGNBQWMsRUFBRVgsa0RBQWdCO0lBQUNZLGNBQWMsRUFBRVIsT0FBTyxDQUFDUSxjQUFlO0lBQUNDLFFBQVEsRUFBRVI7RUFBZSxFQUN4SCxDQUVGO0FBRWYsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDekJ3QztBQUNxQztBQUNNO0FBQ2xDO0FBQ047QUFDd0I7QUFDWDtBQUNWO0FBRXhDLElBQU1jLFlBQVksR0FBRyxTQUFmQSxZQUFZQSxDQUFBakMsSUFBQSxFQUFnRTtFQUFBLElBQUFrQyxZQUFBO0VBQUEsSUFBQUMsV0FBQSxHQUFBbkMsSUFBQSxDQUEzRG9DLE1BQU07SUFBTkEsTUFBTSxHQUFBRCxXQUFBLGNBQUcsSUFBSSxHQUFBQSxXQUFBO0lBQUFFLGtCQUFBLEdBQUFyQyxJQUFBLENBQUVpQixhQUFhO0lBQWJBLGFBQWEsR0FBQW9CLGtCQUFBLGNBQUcsSUFBSSxHQUFBQSxrQkFBQTtJQUFBQyxNQUFBLEdBQUF0QyxJQUFBLENBQUV1QyxDQUFDO0lBQURBLENBQUMsR0FBQUQsTUFBQSxjQUFHLEVBQUUsR0FBQUEsTUFBQTtJQUFFRSxRQUFRLEdBQUF4QyxJQUFBLENBQVJ3QyxRQUFRO0VBQy9FLElBQUFDLGVBQUEsR0FBa0JULDhEQUFjLENBQUMsU0FBUyxDQUFDO0lBQXBDVSxDQUFDLEdBQUFELGVBQUEsQ0FBREMsQ0FBQztJQUFFQyxJQUFJLEdBQUFGLGVBQUEsQ0FBSkUsSUFBSTtFQUVkLElBQU1qQixjQUFjLEdBQUdULGFBQWEsS0FBSyxJQUFJLEdBQUcsRUFBRSxHQUFFLENBQUNBLGFBQWEsQ0FBQztFQUVuRSxJQUFNMkIsY0FBYyxHQUFHO0lBQ25CbEIsY0FBYyxFQUFFQSxjQUFjO0lBQzlCbUIsSUFBSSxFQUFFLENBQUM7SUFDUEMsS0FBSyxFQUFFLEVBQUU7SUFDVEMsTUFBTSxFQUFFLEVBQUU7SUFDVlIsQ0FBQyxFQUFFQTtFQUNQLENBQUM7RUFFRCxJQUFBUyxlQUFBLEdBU0lwQixrRkFBYyxDQUFDLEdBQUcsR0FBRWUsSUFBSSxDQUFDTSxRQUFRLEdBQUUsb0JBQW9CLEVBQUVMLGNBQWMsRUFBRUwsQ0FBQyxFQUFFUix5REFBUyxDQUFDO0lBUnRGYixPQUFPLEdBQUE4QixlQUFBLENBQVA5QixPQUFPO0lBQ1BDLGNBQWMsR0FBQTZCLGVBQUEsQ0FBZDdCLGNBQWM7SUFDZCtCLFlBQVksR0FBQUYsZUFBQSxDQUFaRSxZQUFZO0lBQ1pDLE1BQU0sR0FBQUgsZUFBQSxDQUFORyxNQUFNO0lBQ05DLFNBQVMsR0FBQUosZUFBQSxDQUFUSSxTQUFTO0lBQ1RDLFdBQVcsR0FBQUwsZUFBQSxDQUFYSyxXQUFXO0lBQ1hDLGdCQUFnQixHQUFBTixlQUFBLENBQWhCTSxnQkFBZ0I7SUFDaEJDLFNBQVMsR0FBQVAsZUFBQSxDQUFUTyxTQUFTO0VBSWIsSUFBTUMsV0FBVyxJQUFBdEIsWUFBQSxPQUFBdUIsZUFBQSxDQUFBdkIsWUFBQSxFQUNaLE9BQU8sRUFBRyxjQUFjLEdBQUF1QixlQUFBLENBQUF2QixZQUFBLEVBQ3hCLE9BQU8sRUFBRyxlQUFlLEdBQUF1QixlQUFBLENBQUF2QixZQUFBLEVBQ3pCUSxDQUFDLENBQUMscUJBQXFCLENBQUMsRUFBRyxnQkFBZ0IsR0FBQWUsZUFBQSxDQUFBdkIsWUFBQSxFQUMzQ1EsQ0FBQyxDQUFDLG9CQUFvQixDQUFDLEVBQUcsZUFBZSxHQUFBUixZQUFBLENBQzdDOztFQUVEO0VBQ0F0QixpREFBUyxDQUFDLFlBQU07SUFDWixJQUFHdUMsTUFBTSxJQUFJWCxRQUFRLEVBQUU7TUFDbkJBLFFBQVEsQ0FBQ1csTUFBTSxDQUFDTyxLQUFLLENBQUM7SUFDMUI7RUFDSixDQUFDLEVBQUUsQ0FBQ1AsTUFBTSxFQUFFWCxRQUFRLENBQUMsQ0FBQztFQUV0QixJQUFHLENBQUNKLE1BQU0sRUFBRTtJQUNSLE9BQU8sRUFBRTtFQUNiO0VBRUEsb0JBQ0l0QywyREFBQTtJQUFLSyxTQUFTLEVBQUM7RUFBZSxnQkFDMUJMLDJEQUFBO0lBQUtLLFNBQVMsRUFBQztFQUFzQixnQkFDakNMLDJEQUFBLENBQUMrQixvRkFBcUI7SUFDbEJxQixZQUFZLEVBQUVBLFlBQWE7SUFDM0JTLFlBQVksRUFBRVIsTUFBTSxhQUFOQSxNQUFNLHVCQUFOQSxNQUFNLENBQUVPLEtBQU07SUFDNUJFLE9BQU8sRUFBRVAsV0FBWTtJQUNyQk4sTUFBTSxFQUFFN0IsT0FBTyxDQUFDNkIsTUFBTztJQUN2QlEsU0FBUyxFQUFFQSxTQUFVO0lBQ3JCQyxXQUFXLEVBQUVBLFdBQVk7SUFDekJLLFdBQVcsRUFBRTVDLGFBQWEsS0FBSztFQUFLLGdCQUVwQ25CLDJEQUFBLENBQUNrQiw0REFBYztJQUFDQyxhQUFhLEVBQUVBLGFBQWM7SUFBQ0MsT0FBTyxFQUFFQSxPQUFRO0lBQUNDLGNBQWMsRUFBRUE7RUFBZSxFQUFHLENBQzlFLENBQ3RCLGVBQ05yQiwyREFBQSxDQUFDZ0Msb0VBQWE7SUFDVnNCLFNBQVMsRUFBRUEsU0FBVTtJQUNyQkQsTUFBTSxFQUFFQSxNQUFPO0lBQ2ZXLFVBQVUsRUFBRVI7RUFBaUIsR0FHekJILE1BQU0sSUFBSUEsTUFBTSxDQUFDWSxLQUFLLENBQUNDLEdBQUcsQ0FBQyxVQUFBL0QsT0FBTztJQUFBLG9CQUFJSCwyREFBQSxDQUFDQyxzREFBVztNQUFDa0UsR0FBRyxFQUFFaEUsT0FBTyxDQUFDaUUsRUFBRztNQUFDakUsT0FBTyxFQUFFQTtJQUFRLEVBQUc7RUFBQSxFQUFDLENBRWpGLENBQ2Q7QUFFZCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vYXNzZXRzL0NvbXBvbmVudHMvQmxvZy9BcnRpY2xlL0FydGljbGVJbmRleC9BcnRpY2xlQ2FyZC5qc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL0NvbXBvbmVudHMvQmxvZy9BcnRpY2xlL0FydGljbGVJbmRleC9BcnRpY2xlRmlsdGVycy9pbmRleC5qc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL0NvbXBvbmVudHMvQmxvZy9BcnRpY2xlL0FydGljbGVJbmRleC9pbmRleC5qc3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuXHJcbmV4cG9ydCBjb25zdCBBcnRpY2xlQ2FyZCA9ICh7YXJ0aWNsZX0pID0+IHtcclxuICAgIFxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGxpIGNsYXNzTmFtZT1cInByb2R1Y3QtY2FyZCB0eXBlLWFydGljbGVcIj5cclxuICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwicHJvZHVjdC1jYXJkLWltZy1saW5rXCIgaHJlZj17YXJ0aWNsZS50YXJnZXR9PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9kdWN0LWNhcmQtaW1nLXdyYXBwZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cInByb2R1Y3QtY2FyZC1pbWdcIiBzcmM9e2FydGljbGUucGljdHVyZS5wYXRofSBhbHQ9e2FydGljbGUucGljdHVyZS5hbHR9IC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2R1Y3QtY2FyZC1ib2R5XCI+XHJcbiAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwicHJvZHVjdC1jYXJkLXRpdGxlIGFydGljbGUtY2FyZC10aXRsZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9e2FydGljbGUudGFyZ2V0fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+e2FydGljbGUudGl0bGV9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcnRpY2xlLnN1YnRpdGxlICYmIDxzcGFuIGNsYXNzTmFtZT1cInByb2R1Y3QtY2FyZC1zdWJ0aXRsZVwiPiAtIHthcnRpY2xlLnN1YnRpdGxlfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgIDwvaDI+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvbGk+XHJcbiAgICApXHJcbn0iLCJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IGFydGljbGVDYXRlZ29yeSBmcm9tICcuLi8uLi8uLi8uLi8uLi9Db25maWcvZ2F6ZXR0ZS5qc29uJztcclxuaW1wb3J0IHsgU3ViQ2F0ZWdvcnlGaWx0ZXIgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9VSS9TZWFyY2gvU3ViQ2F0ZWdvcnlGaWx0ZXInO1xyXG5cclxuZXhwb3J0IGNvbnN0IEFydGljbGVGaWx0ZXJzID0gKHtzdWJDYXRlZ29yeUlkLCBmaWx0ZXJzLCBzZXRGaWx0ZXJWYWx1ZX0pID0+IHtcclxuICAgIFxyXG4gICAgLy9wb3VyIHNhdm9pciBzaSBvbiBhZmZpY2hlIGxlIGZpbHRyZSBzdWJDYXRlZ29yeVxyXG4gICAgY29uc3QgW2Nob2ljZVN1YkNhdGVnb3J5LCBzZXRDaG9pY2VTdWJDYXRlZ29yeV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIC8vc2kgb24gZXN0IGRhbnMgYXJ0aWNsZV9pbmRleFxyXG4gICAgICAgIGlmKCFzdWJDYXRlZ29yeUlkKSB7XHJcbiAgICAgICAgICAgIHNldENob2ljZVN1YkNhdGVnb3J5KHRydWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvL3NpIG9uIGVzdCBkYW5zIGFydGljbGVfc3ViQ2F0ZWdvcnlTaG93IG9uIGxhaXNzZSDDoCBmYWxzZVxyXG4gICAgfSwgW10pO1xyXG4gICAgXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxmb3JtIGNsYXNzTmFtZT1cInNlYXJjaC1maWx0ZXJzXCI+XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGNob2ljZVN1YkNhdGVnb3J5ICYmIChcclxuICAgICAgICAgICAgICAgICAgICA8U3ViQ2F0ZWdvcnlGaWx0ZXIgcGFyZW50Q2F0ZWdvcnk9e2FydGljbGVDYXRlZ29yeX0gc3ViQ2F0ZWdvcnlJZHM9e2ZpbHRlcnMuc3ViQ2F0ZWdvcnlJZHN9IG9uQ2hhbmdlPXtzZXRGaWx0ZXJWYWx1ZX0gLz5cclxuICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIDwvZm9ybT5cclxuICAgIClcclxufSIsImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHVzZVNlYXJjaEluZGV4IH0gZnJvbSAnLi4vLi4vLi4vLi4vQ3VzdG9tSG9vay9zZWFyY2gvdXNlU2VhcmNoSW5kZXgnO1xyXG5pbXBvcnQgeyBTZWFyY2hGaWx0ZXJzQ29udHJvbHMgfSBmcm9tICcuLi8uLi8uLi8uLi9VSS9TZWFyY2gvU2VhcmNoRmlsdGVyc0NvbnRyb2xzJztcclxuaW1wb3J0IHsgQXJ0aWNsZUZpbHRlcnMgfSBmcm9tICcuL0FydGljbGVGaWx0ZXJzJztcclxuaW1wb3J0IHsgQXJ0aWNsZUNhcmQgfSBmcm9tICcuL0FydGljbGVDYXJkJztcclxuaW1wb3J0IHsgU2VhcmNoUmVzdWx0cyB9IGZyb20gJy4uLy4uLy4uLy4uL1VJL1NlYXJjaC9TZWFyY2hSZXN1bHRzJztcclxuaW1wb3J0IHsgc2Nyb2xsVG9wIH0gZnJvbSAnLi4vLi4vLi4vLi4vZnVuY3Rpb25zL3Njcm9sbCc7XHJcbmltcG9ydCB7IHVzZVRyYW5zbGF0aW9uIH0gZnJvbSAncmVhY3QtaTE4bmV4dCc7XHJcblxyXG5leHBvcnQgY29uc3QgQXJ0aWNsZUluZGV4ID0gKHtpc09wZW4gPSB0cnVlLCBzdWJDYXRlZ29yeUlkID0gbnVsbCwgcSA9ICcnLCBzZXRDb3VudH0pID0+IHtcclxuICAgIGNvbnN0IHt0LCBpMThufSA9IHVzZVRyYW5zbGF0aW9uKCdjb25maWdzJyk7XHJcblxyXG4gICAgY29uc3Qgc3ViQ2F0ZWdvcnlJZHMgPSBzdWJDYXRlZ29yeUlkID09PSBudWxsID8gW106IFtzdWJDYXRlZ29yeUlkXTtcclxuXHJcbiAgICBjb25zdCBpbml0aWFsRmlsdGVycyA9IHtcclxuICAgICAgICBzdWJDYXRlZ29yeUlkczogc3ViQ2F0ZWdvcnlJZHMsXHJcbiAgICAgICAgcGFnZTogMSxcclxuICAgICAgICBsaW1pdDogMjAsXHJcbiAgICAgICAgc29ydEJ5OiAnJyxcclxuICAgICAgICBxOiBxXHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IHtcclxuICAgICAgICBmaWx0ZXJzLCBcclxuICAgICAgICBzZXRGaWx0ZXJWYWx1ZSwgXHJcbiAgICAgICAgY291bnRGaWx0ZXJzLCBcclxuICAgICAgICByZXN1bHQsIFxyXG4gICAgICAgIGlzTG9hZGluZyxcclxuICAgICAgICBoYW5kbGVSZXNldCwgXHJcbiAgICAgICAgaGFuZGxlUGFnZUNoYW5nZSxcclxuICAgICAgICBzZXRTb3J0QnlcclxuICAgIH0gPSB1c2VTZWFyY2hJbmRleCgnLycrIGkxOG4ubGFuZ3VhZ2UgKycvYXBpL2FydGljbGUvaW5kZXgnLCBpbml0aWFsRmlsdGVycywgcSwgc2Nyb2xsVG9wKTtcclxuXHJcblxyXG4gICAgY29uc3Qgc29ydENob2ljZXMgPSB7XHJcbiAgICAgICAgWydBIC0gWiddOiAnYWxwaGFiZXRfQVNDJyxcclxuICAgICAgICBbJ1ogLSBBJ106ICdhbHBoYWJldF9ERVNDJyxcclxuICAgICAgICBbdCgnc29ydC5jcmVhdGVkQXRfREVTQycpXTogJ2NyZWF0ZWRBdF9ERVNDJyxcclxuICAgICAgICBbdCgnc29ydC5jcmVhdGVkQXRfQVNDJyldOiAnY3JlYXRlZEF0X0FTQydcclxuICAgIH07XHJcblxyXG4gICAgLy9wb3VyIGVudm95ZXIgYXUgcGFyZW50IHBvdXIgYWZmaWNoZXIgc3VyIGxlIGJvdXRvbiBQcm9kdWN0IFxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBpZihyZXN1bHQgJiYgc2V0Q291bnQpIHtcclxuICAgICAgICAgICAgc2V0Q291bnQocmVzdWx0LmNvdW50KTtcclxuICAgICAgICB9XHJcbiAgICB9LCBbcmVzdWx0LCBzZXRDb3VudF0pO1xyXG5cclxuICAgIGlmKCFpc09wZW4pIHtcclxuICAgICAgICByZXR1cm4gJyc7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2R1Y3QtaW5kZXhcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9kdWN0LWluZGV4LWhlYWRlclwiPlxyXG4gICAgICAgICAgICAgICAgPFNlYXJjaEZpbHRlcnNDb250cm9scyBcclxuICAgICAgICAgICAgICAgICAgICBjb3VudEZpbHRlcnM9e2NvdW50RmlsdGVyc31cclxuICAgICAgICAgICAgICAgICAgICBjb3VudFJlc3VsdHM9e3Jlc3VsdD8uY291bnR9XHJcbiAgICAgICAgICAgICAgICAgICAgb25SZXNldD17aGFuZGxlUmVzZXR9XHJcbiAgICAgICAgICAgICAgICAgICAgc29ydEJ5PXtmaWx0ZXJzLnNvcnRCeX0gXHJcbiAgICAgICAgICAgICAgICAgICAgc2V0U29ydEJ5PXtzZXRTb3J0Qnl9IFxyXG4gICAgICAgICAgICAgICAgICAgIHNvcnRDaG9pY2VzPXtzb3J0Q2hvaWNlc31cclxuICAgICAgICAgICAgICAgICAgICBoaWRlRmlsdGVycz17c3ViQ2F0ZWdvcnlJZCAhPT0gbnVsbH1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPEFydGljbGVGaWx0ZXJzIHN1YkNhdGVnb3J5SWQ9e3N1YkNhdGVnb3J5SWR9IGZpbHRlcnM9e2ZpbHRlcnN9IHNldEZpbHRlclZhbHVlPXtzZXRGaWx0ZXJWYWx1ZX0gLz5cclxuICAgICAgICAgICAgICAgIDwvU2VhcmNoRmlsdGVyc0NvbnRyb2xzPiBcclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxTZWFyY2hSZXN1bHRzIFxyXG4gICAgICAgICAgICAgICAgaXNMb2FkaW5nPXtpc0xvYWRpbmd9XHJcbiAgICAgICAgICAgICAgICByZXN1bHQ9e3Jlc3VsdH1cclxuICAgICAgICAgICAgICAgIHBhZ2VDaGFuZ2U9e2hhbmRsZVBhZ2VDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0ICYmIHJlc3VsdC5pdGVtcy5tYXAoYXJ0aWNsZSA9PiA8QXJ0aWNsZUNhcmQga2V5PXthcnRpY2xlLmlkfSBhcnRpY2xlPXthcnRpY2xlfSAvPilcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgPC9TZWFyY2hSZXN1bHRzPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwiQXJ0aWNsZUNhcmQiLCJfcmVmIiwiYXJ0aWNsZSIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc05hbWUiLCJocmVmIiwidGFyZ2V0Iiwic3JjIiwicGljdHVyZSIsInBhdGgiLCJhbHQiLCJ0aXRsZSIsInN1YnRpdGxlIiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJhcnRpY2xlQ2F0ZWdvcnkiLCJTdWJDYXRlZ29yeUZpbHRlciIsIkFydGljbGVGaWx0ZXJzIiwic3ViQ2F0ZWdvcnlJZCIsImZpbHRlcnMiLCJzZXRGaWx0ZXJWYWx1ZSIsIl91c2VTdGF0ZSIsIl91c2VTdGF0ZTIiLCJfc2xpY2VkVG9BcnJheSIsImNob2ljZVN1YkNhdGVnb3J5Iiwic2V0Q2hvaWNlU3ViQ2F0ZWdvcnkiLCJwYXJlbnRDYXRlZ29yeSIsInN1YkNhdGVnb3J5SWRzIiwib25DaGFuZ2UiLCJ1c2VTZWFyY2hJbmRleCIsIlNlYXJjaEZpbHRlcnNDb250cm9scyIsIlNlYXJjaFJlc3VsdHMiLCJzY3JvbGxUb3AiLCJ1c2VUcmFuc2xhdGlvbiIsIkFydGljbGVJbmRleCIsIl9zb3J0Q2hvaWNlcyIsIl9yZWYkaXNPcGVuIiwiaXNPcGVuIiwiX3JlZiRzdWJDYXRlZ29yeUlkIiwiX3JlZiRxIiwicSIsInNldENvdW50IiwiX3VzZVRyYW5zbGF0aW9uIiwidCIsImkxOG4iLCJpbml0aWFsRmlsdGVycyIsInBhZ2UiLCJsaW1pdCIsInNvcnRCeSIsIl91c2VTZWFyY2hJbmRleCIsImxhbmd1YWdlIiwiY291bnRGaWx0ZXJzIiwicmVzdWx0IiwiaXNMb2FkaW5nIiwiaGFuZGxlUmVzZXQiLCJoYW5kbGVQYWdlQ2hhbmdlIiwic2V0U29ydEJ5Iiwic29ydENob2ljZXMiLCJfZGVmaW5lUHJvcGVydHkiLCJjb3VudCIsImNvdW50UmVzdWx0cyIsIm9uUmVzZXQiLCJoaWRlRmlsdGVycyIsInBhZ2VDaGFuZ2UiLCJpdGVtcyIsIm1hcCIsImtleSIsImlkIl0sInNvdXJjZVJvb3QiOiIifQ==
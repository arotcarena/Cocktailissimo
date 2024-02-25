"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["searchIndex"],{

/***/ "./assets/Components/Search/SearchIndex/index.jsx":
/*!********************************************************!*\
  !*** ./assets/Components/Search/SearchIndex/index.jsx ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SearchIndex": () => (/* binding */ SearchIndex)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.includes.js */ "./node_modules/core-js/modules/es.array.includes.js");
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_0__);
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
/* harmony import */ var _Shop_ProductIndex__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../Shop/ProductIndex */ "./assets/Components/Shop/ProductIndex/index.jsx");
/* harmony import */ var _Blog_Recipe_RecipeIndex__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../Blog/Recipe/RecipeIndex */ "./assets/Components/Blog/Recipe/RecipeIndex/index.jsx");
/* harmony import */ var _Blog_Article_ArticleIndex__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../Blog/Article/ArticleIndex */ "./assets/Components/Blog/Article/ArticleIndex/index.jsx");
/* harmony import */ var _UI_Icon_Loader__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../../UI/Icon/Loader */ "./assets/UI/Icon/Loader.jsx");
/* harmony import */ var _UI_Search_QFilter__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../../../UI/Search/QFilter */ "./assets/UI/Search/QFilter.jsx");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");
/* harmony import */ var _functions_url__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../../../functions/url */ "./assets/functions/url.js");
/* harmony import */ var _CustomHook_useGetUser__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../../../CustomHook/useGetUser */ "./assets/CustomHook/useGetUser.jsx");

















function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }









var TYPE_PRODUCT = 'type_product';
var TYPE_RECIPE = 'type_recipe';
var TYPE_ARTICLE = 'type_article';
var SearchIndex = function SearchIndex() {
  var _useTranslation = (0,react_i18next__WEBPACK_IMPORTED_MODULE_23__.useTranslation)('messages'),
    t = _useTranslation.t;

  //WITHOUT_SHOP //supprimer ça ////////////////////
  var _useGetUser = (0,_CustomHook_useGetUser__WEBPACK_IMPORTED_MODULE_25__.useGetUser)(),
    user = _useGetUser.user,
    updateUser = _useGetUser.updateUser;
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_17__.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    shopIsOpen = _useState2[0],
    setShopIsOpen = _useState2[1];
  (0,react__WEBPACK_IMPORTED_MODULE_17__.useEffect)(function () {
    if (user && ['consumer@email.com', 'pro@email.com', 'vendor@email.com'].includes(user.email)) {
      setShopIsOpen(true);
      setType(TYPE_PRODUCT);
    }
  }, [user]);
  /////////////////////////////////////////////////////

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_17__.useState)(TYPE_RECIPE),
    _useState4 = _slicedToArray(_useState3, 2),
    type = _useState4[0],
    setType = _useState4[1]; // WITHOUT_SHOP //remettre type product par défaut
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_17__.useState)(null),
    _useState6 = _slicedToArray(_useState5, 2),
    q = _useState6[0],
    setQ = _useState6[1];

  //on récupère le param q de l'url s'il est présent
  (0,react__WEBPACK_IMPORTED_MODULE_17__.useEffect)(function () {
    var urlQ = (0,_functions_url__WEBPACK_IMPORTED_MODULE_24__.getUrlParam)('q');
    setQ(urlQ !== null && urlQ !== void 0 ? urlQ : '');
  }, []);
  //à chaque changement de q, on le met dans l'url
  (0,react__WEBPACK_IMPORTED_MODULE_17__.useEffect)(function () {
    (0,_functions_url__WEBPACK_IMPORTED_MODULE_24__.setUrlParam)('q', q);
  }, [q]);

  //pour afficher les count pour chaque type
  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_17__.useState)(null),
    _useState8 = _slicedToArray(_useState7, 2),
    countProducts = _useState8[0],
    setCountProducts = _useState8[1];
  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_17__.useState)(null),
    _useState10 = _slicedToArray(_useState9, 2),
    countRecipes = _useState10[0],
    setCountRecipes = _useState10[1];
  var _useState11 = (0,react__WEBPACK_IMPORTED_MODULE_17__.useState)(null),
    _useState12 = _slicedToArray(_useState11, 2),
    countArticles = _useState12[0],
    setCountArticles = _useState12[1];

  //en attendant d'avoir récupéré le param q dans l'url
  if (q === null) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default().createElement(_UI_Icon_Loader__WEBPACK_IMPORTED_MODULE_21__.Loader, null);
  }
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default().createElement((react__WEBPACK_IMPORTED_MODULE_17___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default().createElement("div", {
    className: "search-index-header"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default().createElement(_UI_Search_QFilter__WEBPACK_IMPORTED_MODULE_22__.QFilter, {
    q: q,
    setQ: setQ,
    additionalClass: "search-index-input"
  }, t('search_placeholder')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default().createElement("div", {
    className: "search-index-controls"
  },
  //WITHOUT_SHOP //supprimer la condition
  shopIsOpen && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default().createElement("button", {
    type: "button",
    onClick: function onClick(e) {
      return setType(TYPE_PRODUCT);
    },
    className: 'search-index-controls-button' + (type === TYPE_PRODUCT ? ' active' : '')
  }, t('products'), " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default().createElement("span", null, countProducts ? '(' + countProducts + ')' : '')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default().createElement("button", {
    type: "button",
    onClick: function onClick(e) {
      return setType(TYPE_RECIPE);
    },
    className: 'search-index-controls-button' + (type === TYPE_RECIPE ? ' active' : '')
  }, t('recipes'), " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default().createElement("span", null, countRecipes ? '(' + countRecipes + ')' : '')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default().createElement("button", {
    type: "button",
    onClick: function onClick(e) {
      return setType(TYPE_ARTICLE);
    },
    className: 'search-index-controls-button' + (type === TYPE_ARTICLE ? ' active' : '')
  }, t('articles'), " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default().createElement("span", null, countArticles ? '(' + countArticles + ')' : '')))),
  //WITHOUT_SHOP // supprimer la condition
  shopIsOpen && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default().createElement(_Shop_ProductIndex__WEBPACK_IMPORTED_MODULE_18__.ProductIndex, {
    isOpen: type === TYPE_PRODUCT,
    q: q,
    setCount: setCountProducts
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default().createElement(_Blog_Recipe_RecipeIndex__WEBPACK_IMPORTED_MODULE_19__.RecipeIndex, {
    isOpen: type === TYPE_RECIPE,
    q: q,
    setCount: setCountRecipes
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default().createElement(_Blog_Article_ArticleIndex__WEBPACK_IMPORTED_MODULE_20__.ArticleIndex, {
    isOpen: type === TYPE_ARTICLE,
    q: q,
    setCount: setCountArticles
  }));
};

/***/ }),

/***/ "./assets/Components/Shop/ProductIndex/ProductFilters/index.jsx":
/*!**********************************************************************!*\
  !*** ./assets/Components/Shop/ProductIndex/ProductFilters/index.jsx ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductFilters": () => (/* binding */ ProductFilters)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.find.js */ "./node_modules/core-js/modules/es.array.find.js");
/* harmony import */ var core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_parse_int_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.parse-int.js */ "./node_modules/core-js/modules/es.parse-int.js");
/* harmony import */ var core_js_modules_es_parse_int_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_parse_int_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.is-array.js */ "./node_modules/core-js/modules/es.array.is-array.js");
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_5__);
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
/* harmony import */ var _CategoryFilter__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./CategoryFilter */ "./assets/Components/Shop/ProductIndex/ProductFilters/CategoryFilter.jsx");
/* harmony import */ var _PriceFilter__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./PriceFilter */ "./assets/Components/Shop/ProductIndex/ProductFilters/PriceFilter.jsx");
/* harmony import */ var _Config_categories_json__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../../../Config/categories.json */ "./assets/Config/categories.json");
/* harmony import */ var _UI_Search_SubCategoryFilter__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../../../../UI/Search/SubCategoryFilter */ "./assets/UI/Search/SubCategoryFilter.jsx");


















function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }





var ProductFilters = function ProductFilters(_ref) {
  var categoryId = _ref.categoryId,
    subCategoryId = _ref.subCategoryId,
    filters = _ref.filters,
    setFilterValue = _ref.setFilterValue;
  //pour savoir si on affiche les filtres category et subCategory
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_18__.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    choiceCategory = _useState2[0],
    setChoiceCategory = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_18__.useState)(false),
    _useState4 = _slicedToArray(_useState3, 2),
    choiceSubCategory = _useState4[0],
    setChoiceSubCategory = _useState4[1];
  (0,react__WEBPACK_IMPORTED_MODULE_18__.useEffect)(function () {
    //si on est dans search_index
    if (!categoryId) {
      setChoiceCategory(true);
    }
    //si on est dans category_show
    if (categoryId && !subCategoryId) {
      setChoiceSubCategory(true);
    }
    //si on est dans subCategory_show on laisse les deux à false
  }, []);
  var category = _Config_categories_json__WEBPACK_IMPORTED_MODULE_21__.find(function (category) {
    return category.id === parseInt(categoryId);
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement("form", {
    className: "search-filters"
  }, choiceCategory && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement(_CategoryFilter__WEBPACK_IMPORTED_MODULE_19__.CategoryFilter, {
    categoryIds: filters.categoryIds,
    onChange: setFilterValue
  }), choiceSubCategory && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement(_UI_Search_SubCategoryFilter__WEBPACK_IMPORTED_MODULE_22__.SubCategoryFilter, {
    parentCategory: category,
    subCategoryIds: filters.subCategoryIds,
    onChange: setFilterValue
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement(_PriceFilter__WEBPACK_IMPORTED_MODULE_20__.PriceFilter, {
    minPrice: filters.minPrice,
    maxPrice: filters.maxPrice,
    onChange: setFilterValue
  }));
};

/***/ }),

/***/ "./assets/Components/Shop/ProductIndex/index.jsx":
/*!*******************************************************!*\
  !*** ./assets/Components/Shop/ProductIndex/index.jsx ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductIndex": () => (/* binding */ ProductIndex)
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
/* harmony import */ var _ProductCard__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./ProductCard */ "./assets/Components/Shop/ProductIndex/ProductCard.jsx");
/* harmony import */ var _UI_Search_SearchFiltersControls__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../UI/Search/SearchFiltersControls */ "./assets/UI/Search/SearchFiltersControls.jsx");
/* harmony import */ var _entrypoints_i18n__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../entrypoints/i18n */ "./assets/entrypoints/i18n.js");
/* harmony import */ var _ProductFilters__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./ProductFilters */ "./assets/Components/Shop/ProductIndex/ProductFilters/index.jsx");
/* harmony import */ var _UI_Search_SearchResults__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../../UI/Search/SearchResults */ "./assets/UI/Search/SearchResults.jsx");
/* harmony import */ var _CustomHook_search_useSearchIndex__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../../CustomHook/search/useSearchIndex */ "./assets/CustomHook/search/useSearchIndex.jsx");
/* harmony import */ var _functions_scroll__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../../functions/scroll */ "./assets/functions/scroll.js");
/* harmony import */ var i18next__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! i18next */ "./node_modules/i18next/dist/esm/i18next.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }














function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }









var ProductIndex = function ProductIndex(_ref) {
  var _sortChoices;
  var _ref$isOpen = _ref.isOpen,
    isOpen = _ref$isOpen === void 0 ? true : _ref$isOpen,
    _ref$categoryId = _ref.categoryId,
    categoryId = _ref$categoryId === void 0 ? null : _ref$categoryId,
    _ref$subCategoryId = _ref.subCategoryId,
    subCategoryId = _ref$subCategoryId === void 0 ? null : _ref$subCategoryId,
    _ref$q = _ref.q,
    q = _ref$q === void 0 ? '' : _ref$q,
    setCount = _ref.setCount;
  var categoryIds = categoryId === null ? [] : [categoryId];
  var subCategoryIds = subCategoryId === null ? [] : [subCategoryId];
  var initialFilters = {
    categoryIds: categoryIds,
    subCategoryIds: subCategoryIds,
    minPrice: null,
    maxPrice: null,
    minStock: 1,
    page: 1,
    limit: 20,
    sortBy: '',
    q: q
  };
  var _useSearchIndex = (0,_CustomHook_search_useSearchIndex__WEBPACK_IMPORTED_MODULE_20__.useSearchIndex)('/' + _entrypoints_i18n__WEBPACK_IMPORTED_MODULE_17__["default"].language + '/api/product/index', initialFilters, q, _functions_scroll__WEBPACK_IMPORTED_MODULE_21__.scrollTop),
    filters = _useSearchIndex.filters,
    setFilterValue = _useSearchIndex.setFilterValue,
    countFilters = _useSearchIndex.countFilters,
    result = _useSearchIndex.result,
    isLoading = _useSearchIndex.isLoading,
    handleReset = _useSearchIndex.handleReset,
    handlePageChange = _useSearchIndex.handlePageChange,
    setSortBy = _useSearchIndex.setSortBy;
  var sortChoices = (_sortChoices = {}, _defineProperty(_sortChoices, 'A - Z', 'alphabet_ASC'), _defineProperty(_sortChoices, 'Z - A', 'alphabet_DESC'), _defineProperty(_sortChoices, (0,i18next__WEBPACK_IMPORTED_MODULE_22__.t)('sort.price_ASC', {
    ns: 'configs'
  }), 'price_ASC'), _defineProperty(_sortChoices, (0,i18next__WEBPACK_IMPORTED_MODULE_22__.t)('sort.price_DESC', {
    ns: 'configs'
  }), 'price_DESC'), _defineProperty(_sortChoices, (0,i18next__WEBPACK_IMPORTED_MODULE_22__.t)('sort.note_DESC', {
    ns: 'configs'
  }), 'note_DESC'), _sortChoices);

  //pour envoyer au parent pour afficher sur le bouton Product 
  (0,react__WEBPACK_IMPORTED_MODULE_14__.useEffect)(function () {
    if (result && setCount) {
      setCount(result.count);
    }
  }, [result]);
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
    sortChoices: sortChoices
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default().createElement(_ProductFilters__WEBPACK_IMPORTED_MODULE_18__.ProductFilters, {
    categoryId: categoryId,
    subCategoryId: subCategoryId,
    filters: filters,
    setFilterValue: setFilterValue
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default().createElement(_UI_Search_SearchResults__WEBPACK_IMPORTED_MODULE_19__.SearchResults, {
    isLoading: isLoading,
    result: result,
    pageChange: handlePageChange
  }, result && result.items.map(function (product) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default().createElement(_ProductCard__WEBPACK_IMPORTED_MODULE_15__.ProductCard, {
      key: product.id,
      product: product
    });
  })));
};

/***/ }),

/***/ "./assets/UI/Icon/SearchIcon.jsx":
/*!***************************************!*\
  !*** ./assets/UI/Icon/SearchIcon.jsx ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SearchIcon": () => (/* binding */ SearchIcon)
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

var SearchIcon = function SearchIcon(_ref) {
  var additionalClass = _ref.additionalClass,
    props = _objectWithoutProperties(_ref, _excluded);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement("svg", _extends({
    className: 'icon i-search' + (additionalClass ? ' ' + additionalClass : '')
  }, props, {
    enableBackground: "new 0 0 48 48",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 48 48"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement("g", {
    id: "_x32_-Magnifying_Glass"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement("path", {
    fill: "currentColor",
    d: "m40.8994141 39.4853516-7.8127441-7.8127441c2.3978882-2.734375 3.7209473-6.1942749 3.7209473-9.8649902 0-4.0068359-1.5605469-7.7734375-4.3935547-10.6064453s-6.5996094-4.3935547-10.6064453-4.3935547-7.7734375 1.5605469-10.6064453 4.3935547-4.3935547 6.5996094-4.3935547 10.6064453 1.5605469 7.7734375 4.3935547 10.6064453 6.5996094 4.3935547 10.6064453 4.3935547c3.6707153 0 7.1306152-1.3230591 9.8649902-3.7209473l7.8127441 7.8127441c.1953125.1953125.4511719.2929688.7070313.2929688s.5117188-.0976563.7070313-.2929688c.3906249-.390625.3906249-1.0234375-.0000001-1.4140625zm-28.2841797-8.4853516c-2.4550781-2.4555664-3.8076172-5.7202148-3.8076172-9.1923828s1.3525391-6.7368164 3.8076172-9.1923828c2.4555664-2.4550781 5.7202148-3.8076172 9.1923828-3.8076172s6.7368164 1.3525391 9.1923828 3.8076172c2.4550781 2.4555664 3.8076172 5.7202148 3.8076172 9.1923828s-1.3525391 6.7368164-3.8076172 9.1923828c-2.4555664 2.4550781-5.7202148 3.8076172-9.1923828 3.8076172s-6.7368164-1.3525391-9.1923828-3.8076172z"
  })));
};

/***/ }),

/***/ "./assets/UI/Search/QFilter.jsx":
/*!**************************************!*\
  !*** ./assets/UI/Search/QFilter.jsx ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "QFilter": () => (/* binding */ QFilter)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Icon_SearchIcon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Icon/SearchIcon */ "./assets/UI/Icon/SearchIcon.jsx");
/* harmony import */ var _Button_CloseButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Button/CloseButton */ "./assets/UI/Button/CloseButton.jsx");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");




var QFilter = function QFilter(_ref) {
  var children = _ref.children,
    q = _ref.q,
    setQ = _ref.setQ,
    additionalClass = _ref.additionalClass;
  var _useTranslation = (0,react_i18next__WEBPACK_IMPORTED_MODULE_3__.useTranslation)('messages'),
    t = _useTranslation.t;
  var handleQChange = function handleQChange(e) {
    setQ(e.target.value);
  };
  var handleEmpty = function handleEmpty() {
    setQ('');
    inputRef.current.focus();
  };
  var inputRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: 'q-filter-group' + (additionalClass ? ' ' + additionalClass + '-group' : '')
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    ref: inputRef,
    type: "text",
    className: 'q-filter-input' + (additionalClass ? ' ' + additionalClass : ''),
    value: q,
    onChange: handleQChange,
    placeholder: children
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Icon_SearchIcon__WEBPACK_IMPORTED_MODULE_1__.SearchIcon, null), q !== '' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Button_CloseButton__WEBPACK_IMPORTED_MODULE_2__.CloseButton, {
    type: "button",
    onClick: handleEmpty,
    "aria-label": t('empty_input'),
    title: t('empty_input')
  }));
};

/***/ }),

/***/ "./assets/entrypoints/searchIndex.js":
/*!*******************************************!*\
  !*** ./assets/entrypoints/searchIndex.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom/client */ "./node_modules/react-dom/client.js");
/* harmony import */ var _Components_Search_SearchIndex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Components/Search/SearchIndex */ "./assets/Components/Search/SearchIndex/index.jsx");
/* harmony import */ var _styles_Search_index_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/Search/index.css */ "./assets/styles/Search/index.css");
/* harmony import */ var _functions_language_configureLanguage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../functions/language/configureLanguage */ "./assets/functions/language/configureLanguage.js");





(0,_functions_language_configureLanguage__WEBPACK_IMPORTED_MODULE_4__.configureLanguage)();
var searchIndex = document.getElementById('search-index');
var searchIndexRoot = (0,react_dom_client__WEBPACK_IMPORTED_MODULE_1__.createRoot)(searchIndex);
searchIndexRoot.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Components_Search_SearchIndex__WEBPACK_IMPORTED_MODULE_2__.SearchIndex, null));

/***/ }),

/***/ "./assets/functions/url.js":
/*!*********************************!*\
  !*** ./assets/functions/url.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getUrlParam": () => (/* binding */ getUrlParam),
/* harmony export */   "setUrlParam": () => (/* binding */ setUrlParam)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_web_url_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/web.url.js */ "./node_modules/core-js/modules/web.url.js");
/* harmony import */ var core_js_modules_web_url_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_url_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_web_url_search_params_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/web.url-search-params.js */ "./node_modules/core-js/modules/web.url-search-params.js");
/* harmony import */ var core_js_modules_web_url_search_params_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_url_search_params_js__WEBPACK_IMPORTED_MODULE_5__);






var setUrlParam = function setUrlParam(key, value) {
  var url = new URL(window.location.href);
  url.searchParams.set(key, value);
  history.replaceState(null, null, url.href);
};
var getUrlParam = function getUrlParam(key) {
  var url = new URL(window.location.href);
  return url.searchParams.get(key);
};

/***/ }),

/***/ "./assets/styles/Search/index.css":
/*!****************************************!*\
  !*** ./assets/styles/Search/index.css ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_core-js_modules_es_array_concat_js-node_modules_core-js_modules_es_array-a9bb89","vendors-node_modules_core-js_modules_es_date_to-string_js-node_modules_core-js_modules_es_par-13cb00","vendors-node_modules_core-js_modules_es_array_find_js-node_modules_core-js_modules_es_array_m-2a2169","assets_UI_Icon_Loader_jsx-assets_entrypoints_i18n_js-assets_functions_api_js","assets_CustomHook_state_useOpenState_jsx-assets_UI_Form_FormButton_jsx-assets_UI_Product_Pric-f56e77","assets_UI_Button_Button_jsx-assets_UI_Icon_ExpandMoreIcon_jsx-assets_UI_Pagination_Pagination-2350db","assets_Components_Shop_ProductIndex_ProductCard_jsx","assets_CustomHook_search_usePaginationCache_jsx-assets_UI_Container_Modal_jsx-assets_UI_Icon_-c770e5","assets_CustomHook_useGetUser_jsx-assets_UI_Icon_TrashIcon_jsx","assets_CustomHook_search_useSearchIndex_jsx-assets_UI_Search_SearchFiltersControls_jsx-assets-5e7cf8","assets_Config_categories_json","assets_CustomHook_fetch_useFetchQSearch_jsx-assets_UI_Button_TrashButton_jsx","assets_Components_Shop_ProductIndex_ProductFilters_CategoryFilter_jsx-assets_Components_Shop_-1c6d38","assets_Components_Blog_Recipe_RecipeIndex_index_jsx","assets_Components_Blog_Article_ArticleIndex_index_jsx"], () => (__webpack_exec__("./assets/entrypoints/searchIndex.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFFM0QsSUFBTUMsZUFBZSxHQUFHTCw0REFBVSxDQUFDRSxXQUFXLENBQUM7QUFDL0NHLGVBQWUsQ0FBQ0MsTUFBTSxlQUNsQmpKLDBEQUFBLENBQUNlLHVFQUFXLE9BQUcsQ0FDbEI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2ZNLElBQU1MLFdBQVcsR0FBRyxTQUFkQSxXQUFXQSxDQUFJeUcsR0FBRyxFQUFFZ0IsS0FBSyxFQUFLO0VBQ3ZDLElBQU1lLEdBQUcsR0FBRyxJQUFJQyxHQUFHLENBQUNDLE1BQU0sQ0FBQ0MsUUFBUSxDQUFDQyxJQUFJLENBQUM7RUFDekNKLEdBQUcsQ0FBQ0ssWUFBWSxDQUFDQyxHQUFHLENBQUNyQyxHQUFHLEVBQUVnQixLQUFLLENBQUM7RUFDaENzQixPQUFPLENBQUNDLFlBQVksQ0FBQyxJQUFJLEVBQUUsSUFBSSxFQUFFUixHQUFHLENBQUNJLElBQUksQ0FBQztBQUM5QyxDQUFDO0FBRU0sSUFBTTdJLFdBQVcsR0FBRyxTQUFkQSxXQUFXQSxDQUFJMEcsR0FBRyxFQUFLO0VBQ2hDLElBQU0rQixHQUFHLEdBQUcsSUFBSUMsR0FBRyxDQUFDQyxNQUFNLENBQUNDLFFBQVEsQ0FBQ0MsSUFBSSxDQUFDO0VBQ3pDLE9BQU9KLEdBQUcsQ0FBQ0ssWUFBWSxDQUFDSSxHQUFHLENBQUN4QyxHQUFHLENBQUM7QUFDcEMsQ0FBQzs7Ozs7Ozs7Ozs7QUNURCIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2Fzc2V0cy9Db21wb25lbnRzL1NlYXJjaC9TZWFyY2hJbmRleC9pbmRleC5qc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL0NvbXBvbmVudHMvU2hvcC9Qcm9kdWN0SW5kZXgvUHJvZHVjdEZpbHRlcnMvaW5kZXguanN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9Db21wb25lbnRzL1Nob3AvUHJvZHVjdEluZGV4L2luZGV4LmpzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvVUkvSWNvbi9TZWFyY2hJY29uLmpzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvVUkvU2VhcmNoL1FGaWx0ZXIuanN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9lbnRyeXBvaW50cy9zZWFyY2hJbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvZnVuY3Rpb25zL3VybC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc3R5bGVzL1NlYXJjaC9pbmRleC5jc3M/ZGY3MSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuXHJcbmltcG9ydCB7IFByb2R1Y3RJbmRleCB9IGZyb20gJy4uLy4uL1Nob3AvUHJvZHVjdEluZGV4JztcclxuaW1wb3J0IHsgUmVjaXBlSW5kZXggfSBmcm9tICcuLi8uLi9CbG9nL1JlY2lwZS9SZWNpcGVJbmRleCc7XHJcbmltcG9ydCB7IEFydGljbGVJbmRleCB9IGZyb20gJy4uLy4uL0Jsb2cvQXJ0aWNsZS9BcnRpY2xlSW5kZXgnO1xyXG5pbXBvcnQgeyBMb2FkZXIgfSBmcm9tICcuLi8uLi8uLi9VSS9JY29uL0xvYWRlcic7XHJcbmltcG9ydCB7IFFGaWx0ZXIgfSBmcm9tICcuLi8uLi8uLi9VSS9TZWFyY2gvUUZpbHRlcic7XHJcbmltcG9ydCB7IHVzZVRyYW5zbGF0aW9uIH0gZnJvbSAncmVhY3QtaTE4bmV4dCc7XHJcbmltcG9ydCB7IGdldFVybFBhcmFtLCBzZXRVcmxQYXJhbSB9IGZyb20gJy4uLy4uLy4uL2Z1bmN0aW9ucy91cmwnO1xyXG5pbXBvcnQgeyB1c2VHZXRVc2VyIH0gZnJvbSAnLi4vLi4vLi4vQ3VzdG9tSG9vay91c2VHZXRVc2VyJztcclxuXHJcblxyXG5cclxuY29uc3QgVFlQRV9QUk9EVUNUID0gJ3R5cGVfcHJvZHVjdCc7XHJcbmNvbnN0IFRZUEVfUkVDSVBFID0gJ3R5cGVfcmVjaXBlJztcclxuY29uc3QgVFlQRV9BUlRJQ0xFID0gJ3R5cGVfYXJ0aWNsZSc7XHJcblxyXG5leHBvcnQgY29uc3QgU2VhcmNoSW5kZXggPSAoKSA9PiB7XHJcbiAgICBjb25zdCB7dH0gPSB1c2VUcmFuc2xhdGlvbignbWVzc2FnZXMnKTtcclxuXHJcbiAgICBcclxuICAgIC8vV0lUSE9VVF9TSE9QIC8vc3VwcHJpbWVyIMOnYSAvLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4gICAgY29uc3Qge3VzZXIsIHVwZGF0ZVVzZXJ9ID0gdXNlR2V0VXNlcigpO1xyXG4gICAgY29uc3QgW3Nob3BJc09wZW4sIHNldFNob3BJc09wZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBpZih1c2VyICYmIFsnY29uc3VtZXJAZW1haWwuY29tJywgJ3Byb0BlbWFpbC5jb20nLCAndmVuZG9yQGVtYWlsLmNvbSddLmluY2x1ZGVzKHVzZXIuZW1haWwpKSB7XHJcbiAgICAgICAgICAgIHNldFNob3BJc09wZW4odHJ1ZSk7XHJcbiAgICAgICAgICAgIHNldFR5cGUoVFlQRV9QUk9EVUNUKTtcclxuICAgICAgICB9XHJcbiAgICB9LCBbdXNlcl0pO1xyXG4gICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbiAgICBjb25zdCBbdHlwZSwgc2V0VHlwZV0gPSB1c2VTdGF0ZShUWVBFX1JFQ0lQRSk7IC8vIFdJVEhPVVRfU0hPUCAvL3JlbWV0dHJlIHR5cGUgcHJvZHVjdCBwYXIgZMOpZmF1dFxyXG4gICAgY29uc3QgW3EsIHNldFFdID0gdXNlU3RhdGUobnVsbCk7XHJcblxyXG4gICAgLy9vbiByw6ljdXDDqHJlIGxlIHBhcmFtIHEgZGUgbCd1cmwgcydpbCBlc3QgcHLDqXNlbnRcclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgdXJsUSA9IGdldFVybFBhcmFtKCdxJyk7XHJcbiAgICAgICAgc2V0USh1cmxRID8/ICcnKTtcclxuICAgIH0sIFtdKTtcclxuICAgIC8vw6AgY2hhcXVlIGNoYW5nZW1lbnQgZGUgcSwgb24gbGUgbWV0IGRhbnMgbCd1cmxcclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgc2V0VXJsUGFyYW0oJ3EnLCBxKTtcclxuICAgIH0sIFtxXSk7XHJcblxyXG5cclxuICAgIC8vcG91ciBhZmZpY2hlciBsZXMgY291bnQgcG91ciBjaGFxdWUgdHlwZVxyXG4gICAgY29uc3QgW2NvdW50UHJvZHVjdHMsIHNldENvdW50UHJvZHVjdHNdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgICBjb25zdCBbY291bnRSZWNpcGVzLCBzZXRDb3VudFJlY2lwZXNdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgICBjb25zdCBbY291bnRBcnRpY2xlcywgc2V0Q291bnRBcnRpY2xlc10gPSB1c2VTdGF0ZShudWxsKTtcclxuXHJcbiAgICAvL2VuIGF0dGVuZGFudCBkJ2F2b2lyIHLDqWN1cMOpcsOpIGxlIHBhcmFtIHEgZGFucyBsJ3VybFxyXG4gICAgaWYocSA9PT0gbnVsbCkge1xyXG4gICAgICAgIHJldHVybiA8TG9hZGVyIC8+O1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+IFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlYXJjaC1pbmRleC1oZWFkZXJcIj5cclxuICAgICAgICAgICAgICAgIDxRRmlsdGVyIHE9e3F9IHNldFE9e3NldFF9IGFkZGl0aW9uYWxDbGFzcz1cInNlYXJjaC1pbmRleC1pbnB1dFwiPnt0KCdzZWFyY2hfcGxhY2Vob2xkZXInKX08L1FGaWx0ZXI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlYXJjaC1pbmRleC1jb250cm9sc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy9XSVRIT1VUX1NIT1AgLy9zdXBwcmltZXIgbGEgY29uZGl0aW9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgc2hvcElzT3BlbiAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtlID0+IHNldFR5cGUoVFlQRV9QUk9EVUNUKX0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXsnc2VhcmNoLWluZGV4LWNvbnRyb2xzLWJ1dHRvbicgKyAodHlwZSA9PT0gVFlQRV9QUk9EVUNUID8gJyBhY3RpdmUnOiAnJyl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3QoJ3Byb2R1Y3RzJyl9IDxzcGFuPntjb3VudFByb2R1Y3RzID8gKCcoJytjb3VudFByb2R1Y3RzKycpJyk6ICcnfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17ZSA9PiBzZXRUeXBlKFRZUEVfUkVDSVBFKX0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17J3NlYXJjaC1pbmRleC1jb250cm9scy1idXR0b24nICsgKHR5cGUgPT09VFlQRV9SRUNJUEUgPyAnIGFjdGl2ZSc6ICcnKX1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHt0KCdyZWNpcGVzJyl9IDxzcGFuPntjb3VudFJlY2lwZXMgPyAoJygnK2NvdW50UmVjaXBlcysnKScpOiAnJ308L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtlID0+IHNldFR5cGUoVFlQRV9BUlRJQ0xFKX0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17J3NlYXJjaC1pbmRleC1jb250cm9scy1idXR0b24nICsgKHR5cGUgPT09IFRZUEVfQVJUSUNMRSA/ICcgYWN0aXZlJzogJycpfVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3QoJ2FydGljbGVzJyl9IDxzcGFuPntjb3VudEFydGljbGVzID8gKCcoJytjb3VudEFydGljbGVzKycpJyk6ICcnfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIC8vV0lUSE9VVF9TSE9QIC8vIHN1cHByaW1lciBsYSBjb25kaXRpb25cclxuICAgICAgICAgICAgICAgIHNob3BJc09wZW4gJiYgPFByb2R1Y3RJbmRleCBpc09wZW49e3R5cGUgPT09IFRZUEVfUFJPRFVDVH0gcT17cX0gc2V0Q291bnQ9e3NldENvdW50UHJvZHVjdHN9IC8+XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIDxSZWNpcGVJbmRleCBpc09wZW49e3R5cGUgPT09IFRZUEVfUkVDSVBFfSBxPXtxfSBzZXRDb3VudD17c2V0Q291bnRSZWNpcGVzfSAvPlxyXG5cclxuICAgICAgICAgICAgPEFydGljbGVJbmRleCBpc09wZW49e3R5cGUgPT09IFRZUEVfQVJUSUNMRX0gcT17cX0gc2V0Q291bnQ9e3NldENvdW50QXJ0aWNsZXN9IC8+XHJcbiAgICAgICAgPC8+XHJcbiAgICApXHJcbn1cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IENhdGVnb3J5RmlsdGVyIH0gZnJvbSAnLi9DYXRlZ29yeUZpbHRlcic7XHJcbmltcG9ydCB7IFByaWNlRmlsdGVyIH0gZnJvbSAnLi9QcmljZUZpbHRlcic7XHJcbmltcG9ydCBjYXRlZ29yaWVzIGZyb20gJy4uLy4uLy4uLy4uL0NvbmZpZy9jYXRlZ29yaWVzLmpzb24nO1xyXG5pbXBvcnQgeyBTdWJDYXRlZ29yeUZpbHRlciB9IGZyb20gJy4uLy4uLy4uLy4uL1VJL1NlYXJjaC9TdWJDYXRlZ29yeUZpbHRlcic7XHJcblxyXG5leHBvcnQgY29uc3QgUHJvZHVjdEZpbHRlcnMgPSAoe2NhdGVnb3J5SWQsIHN1YkNhdGVnb3J5SWQsIGZpbHRlcnMsIHNldEZpbHRlclZhbHVlfSkgPT4ge1xyXG4gICAgXHJcbiAgICAvL3BvdXIgc2F2b2lyIHNpIG9uIGFmZmljaGUgbGVzIGZpbHRyZXMgY2F0ZWdvcnkgZXQgc3ViQ2F0ZWdvcnlcclxuICAgIGNvbnN0IFtjaG9pY2VDYXRlZ29yeSwgc2V0Q2hvaWNlQ2F0ZWdvcnldID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgW2Nob2ljZVN1YkNhdGVnb3J5LCBzZXRDaG9pY2VTdWJDYXRlZ29yeV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIC8vc2kgb24gZXN0IGRhbnMgc2VhcmNoX2luZGV4XHJcbiAgICAgICAgaWYoIWNhdGVnb3J5SWQpIHtcclxuICAgICAgICAgICAgc2V0Q2hvaWNlQ2F0ZWdvcnkodHJ1ZSk7XHJcbiAgICAgICAgfSBcclxuICAgICAgICAvL3NpIG9uIGVzdCBkYW5zIGNhdGVnb3J5X3Nob3dcclxuICAgICAgICBpZihjYXRlZ29yeUlkICYmICFzdWJDYXRlZ29yeUlkKSB7XHJcbiAgICAgICAgICAgIHNldENob2ljZVN1YkNhdGVnb3J5KHRydWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvL3NpIG9uIGVzdCBkYW5zIHN1YkNhdGVnb3J5X3Nob3cgb24gbGFpc3NlIGxlcyBkZXV4IMOgIGZhbHNlXHJcbiAgICB9LCBbXSk7XHJcbiAgICBcclxuICAgIFxyXG4gICAgY29uc3QgY2F0ZWdvcnkgPSBjYXRlZ29yaWVzLmZpbmQoY2F0ZWdvcnkgPT4gY2F0ZWdvcnkuaWQgPT09IHBhcnNlSW50KGNhdGVnb3J5SWQpKTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxmb3JtIGNsYXNzTmFtZT1cInNlYXJjaC1maWx0ZXJzXCI+XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGNob2ljZUNhdGVnb3J5ICYmIChcclxuICAgICAgICAgICAgICAgICAgICA8Q2F0ZWdvcnlGaWx0ZXIgY2F0ZWdvcnlJZHM9e2ZpbHRlcnMuY2F0ZWdvcnlJZHN9IG9uQ2hhbmdlPXtzZXRGaWx0ZXJWYWx1ZX0gLz5cclxuICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBjaG9pY2VTdWJDYXRlZ29yeSAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPFN1YkNhdGVnb3J5RmlsdGVyIHBhcmVudENhdGVnb3J5PXtjYXRlZ29yeX0gc3ViQ2F0ZWdvcnlJZHM9e2ZpbHRlcnMuc3ViQ2F0ZWdvcnlJZHN9IG9uQ2hhbmdlPXtzZXRGaWx0ZXJWYWx1ZX0gLz5cclxuICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA8UHJpY2VGaWx0ZXIgbWluUHJpY2U9e2ZpbHRlcnMubWluUHJpY2V9IG1heFByaWNlPXtmaWx0ZXJzLm1heFByaWNlfSBvbkNoYW5nZT17c2V0RmlsdGVyVmFsdWV9IC8+XHJcbiAgICAgICAgPC9mb3JtPlxyXG4gICAgKVxyXG59IiwiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgUHJvZHVjdENhcmQgfSBmcm9tICcuL1Byb2R1Y3RDYXJkJztcclxuaW1wb3J0IHsgU2VhcmNoRmlsdGVyc0NvbnRyb2xzIH0gZnJvbSAnLi4vLi4vLi4vVUkvU2VhcmNoL1NlYXJjaEZpbHRlcnNDb250cm9scyc7XHJcbmltcG9ydCBpMThuIGZyb20gJy4uLy4uLy4uL2VudHJ5cG9pbnRzL2kxOG4nO1xyXG5pbXBvcnQgeyBQcm9kdWN0RmlsdGVycyB9IGZyb20gJy4vUHJvZHVjdEZpbHRlcnMnO1xyXG5pbXBvcnQgeyBTZWFyY2hSZXN1bHRzIH0gZnJvbSAnLi4vLi4vLi4vVUkvU2VhcmNoL1NlYXJjaFJlc3VsdHMnO1xyXG5pbXBvcnQgeyB1c2VTZWFyY2hJbmRleCB9IGZyb20gJy4uLy4uLy4uL0N1c3RvbUhvb2svc2VhcmNoL3VzZVNlYXJjaEluZGV4JztcclxuaW1wb3J0IHsgc2Nyb2xsVG9wIH0gZnJvbSAnLi4vLi4vLi4vZnVuY3Rpb25zL3Njcm9sbCc7XHJcbmltcG9ydCB7IHQgfSBmcm9tICdpMThuZXh0JztcclxuXHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IFByb2R1Y3RJbmRleCA9ICh7aXNPcGVuID0gdHJ1ZSwgY2F0ZWdvcnlJZCA9IG51bGwsIHN1YkNhdGVnb3J5SWQgPSBudWxsLCBxID0gJycsIHNldENvdW50fSkgPT4ge1xyXG5cclxuICAgIGNvbnN0IGNhdGVnb3J5SWRzID0gY2F0ZWdvcnlJZCA9PT0gbnVsbCA/IFtdOiBbY2F0ZWdvcnlJZF07XHJcbiAgICBjb25zdCBzdWJDYXRlZ29yeUlkcyA9IHN1YkNhdGVnb3J5SWQgPT09IG51bGwgPyBbXTogW3N1YkNhdGVnb3J5SWRdO1xyXG5cclxuICAgIGNvbnN0IGluaXRpYWxGaWx0ZXJzID0ge1xyXG4gICAgICAgIGNhdGVnb3J5SWRzOiBjYXRlZ29yeUlkcyxcclxuICAgICAgICBzdWJDYXRlZ29yeUlkczogc3ViQ2F0ZWdvcnlJZHMsXHJcbiAgICAgICAgbWluUHJpY2U6IG51bGwsXHJcbiAgICAgICAgbWF4UHJpY2U6IG51bGwsXHJcbiAgICAgICAgbWluU3RvY2s6IDEsXHJcbiAgICAgICAgcGFnZTogMSxcclxuICAgICAgICBsaW1pdDogMjAsXHJcbiAgICAgICAgc29ydEJ5OiAnJyxcclxuICAgICAgICBxOiBxXHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IHtcclxuICAgICAgICBmaWx0ZXJzLCBcclxuICAgICAgICBzZXRGaWx0ZXJWYWx1ZSwgXHJcbiAgICAgICAgY291bnRGaWx0ZXJzLCBcclxuICAgICAgICByZXN1bHQsIFxyXG4gICAgICAgIGlzTG9hZGluZyxcclxuICAgICAgICBoYW5kbGVSZXNldCwgXHJcbiAgICAgICAgaGFuZGxlUGFnZUNoYW5nZSxcclxuICAgICAgICBzZXRTb3J0QnlcclxuICAgIH0gPSB1c2VTZWFyY2hJbmRleCgnLycrIGkxOG4ubGFuZ3VhZ2UgKycvYXBpL3Byb2R1Y3QvaW5kZXgnLCBpbml0aWFsRmlsdGVycywgcSwgc2Nyb2xsVG9wKTtcclxuXHJcbiAgICBjb25zdCBzb3J0Q2hvaWNlcyA9IHtcclxuICAgICAgICBbJ0EgLSBaJ106ICdhbHBoYWJldF9BU0MnLFxyXG4gICAgICAgIFsnWiAtIEEnXTogJ2FscGhhYmV0X0RFU0MnLFxyXG4gICAgICAgIFt0KCdzb3J0LnByaWNlX0FTQycsIHtuczogJ2NvbmZpZ3MnfSldOiAncHJpY2VfQVNDJyxcclxuICAgICAgICBbdCgnc29ydC5wcmljZV9ERVNDJywge25zOiAnY29uZmlncyd9KV06ICdwcmljZV9ERVNDJyxcclxuICAgICAgICBbdCgnc29ydC5ub3RlX0RFU0MnLCB7bnM6ICdjb25maWdzJ30pXTogJ25vdGVfREVTQydcclxuICAgIH07XHJcblxyXG4gICAgLy9wb3VyIGVudm95ZXIgYXUgcGFyZW50IHBvdXIgYWZmaWNoZXIgc3VyIGxlIGJvdXRvbiBQcm9kdWN0IFxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBpZihyZXN1bHQgJiYgc2V0Q291bnQpIHtcclxuICAgICAgICAgICAgc2V0Q291bnQocmVzdWx0LmNvdW50KTtcclxuICAgICAgICB9XHJcbiAgICB9LCBbcmVzdWx0XSk7XHJcblxyXG4gICAgaWYoIWlzT3Blbikge1xyXG4gICAgICAgIHJldHVybiAnJztcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZHVjdC1pbmRleFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2R1Y3QtaW5kZXgtaGVhZGVyXCI+XHJcbiAgICAgICAgICAgICAgICA8U2VhcmNoRmlsdGVyc0NvbnRyb2xzIFxyXG4gICAgICAgICAgICAgICAgICAgIGNvdW50RmlsdGVycz17Y291bnRGaWx0ZXJzfVxyXG4gICAgICAgICAgICAgICAgICAgIGNvdW50UmVzdWx0cz17cmVzdWx0Py5jb3VudH1cclxuICAgICAgICAgICAgICAgICAgICBvblJlc2V0PXtoYW5kbGVSZXNldH1cclxuICAgICAgICAgICAgICAgICAgICBzb3J0Qnk9e2ZpbHRlcnMuc29ydEJ5fSBcclxuICAgICAgICAgICAgICAgICAgICBzZXRTb3J0Qnk9e3NldFNvcnRCeX0gXHJcbiAgICAgICAgICAgICAgICAgICAgc29ydENob2ljZXM9e3NvcnRDaG9pY2VzfVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFByb2R1Y3RGaWx0ZXJzIGNhdGVnb3J5SWQ9e2NhdGVnb3J5SWR9IHN1YkNhdGVnb3J5SWQ9e3N1YkNhdGVnb3J5SWR9IGZpbHRlcnM9e2ZpbHRlcnN9IHNldEZpbHRlclZhbHVlPXtzZXRGaWx0ZXJWYWx1ZX0gLz5cclxuICAgICAgICAgICAgICAgIDwvU2VhcmNoRmlsdGVyc0NvbnRyb2xzPiBcclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxTZWFyY2hSZXN1bHRzIFxyXG4gICAgICAgICAgICAgICAgaXNMb2FkaW5nPXtpc0xvYWRpbmd9XHJcbiAgICAgICAgICAgICAgICByZXN1bHQ9e3Jlc3VsdH1cclxuICAgICAgICAgICAgICAgIHBhZ2VDaGFuZ2U9e2hhbmRsZVBhZ2VDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0ICYmIHJlc3VsdC5pdGVtcy5tYXAocHJvZHVjdCA9PiA8UHJvZHVjdENhcmQga2V5PXtwcm9kdWN0LmlkfSBwcm9kdWN0PXtwcm9kdWN0fSAvPilcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgPC9TZWFyY2hSZXN1bHRzPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuXHJcbmV4cG9ydCBjb25zdCBTZWFyY2hJY29uID0gKHthZGRpdGlvbmFsQ2xhc3MsIC4uLnByb3BzfSkgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8c3ZnIGNsYXNzTmFtZT17J2ljb24gaS1zZWFyY2gnICsgKGFkZGl0aW9uYWxDbGFzcyA/ICcgJyArIGFkZGl0aW9uYWxDbGFzczogJycpfSB7Li4ucHJvcHN9IGVuYWJsZUJhY2tncm91bmQ9XCJuZXcgMCAwIDQ4IDQ4XCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgNDggNDhcIj5cclxuICAgICAgICAgICAgPGcgaWQ9XCJfeDMyXy1NYWduaWZ5aW5nX0dsYXNzXCI+XHJcbiAgICAgICAgICAgICAgICA8cGF0aCBmaWxsPVwiY3VycmVudENvbG9yXCIgZD1cIm00MC44OTk0MTQxIDM5LjQ4NTM1MTYtNy44MTI3NDQxLTcuODEyNzQ0MWMyLjM5Nzg4ODItMi43MzQzNzUgMy43MjA5NDczLTYuMTk0Mjc0OSAzLjcyMDk0NzMtOS44NjQ5OTAyIDAtNC4wMDY4MzU5LTEuNTYwNTQ2OS03Ljc3MzQzNzUtNC4zOTM1NTQ3LTEwLjYwNjQ0NTNzLTYuNTk5NjA5NC00LjM5MzU1NDctMTAuNjA2NDQ1My00LjM5MzU1NDctNy43NzM0Mzc1IDEuNTYwNTQ2OS0xMC42MDY0NDUzIDQuMzkzNTU0Ny00LjM5MzU1NDcgNi41OTk2MDk0LTQuMzkzNTU0NyAxMC42MDY0NDUzIDEuNTYwNTQ2OSA3Ljc3MzQzNzUgNC4zOTM1NTQ3IDEwLjYwNjQ0NTMgNi41OTk2MDk0IDQuMzkzNTU0NyAxMC42MDY0NDUzIDQuMzkzNTU0N2MzLjY3MDcxNTMgMCA3LjEzMDYxNTItMS4zMjMwNTkxIDkuODY0OTkwMi0zLjcyMDk0NzNsNy44MTI3NDQxIDcuODEyNzQ0MWMuMTk1MzEyNS4xOTUzMTI1LjQ1MTE3MTkuMjkyOTY4OC43MDcwMzEzLjI5Mjk2ODhzLjUxMTcxODgtLjA5NzY1NjMuNzA3MDMxMy0uMjkyOTY4OGMuMzkwNjI0OS0uMzkwNjI1LjM5MDYyNDktMS4wMjM0Mzc1LS4wMDAwMDAxLTEuNDE0MDYyNXptLTI4LjI4NDE3OTctOC40ODUzNTE2Yy0yLjQ1NTA3ODEtMi40NTU1NjY0LTMuODA3NjE3Mi01LjcyMDIxNDgtMy44MDc2MTcyLTkuMTkyMzgyOHMxLjM1MjUzOTEtNi43MzY4MTY0IDMuODA3NjE3Mi05LjE5MjM4MjhjMi40NTU1NjY0LTIuNDU1MDc4MSA1LjcyMDIxNDgtMy44MDc2MTcyIDkuMTkyMzgyOC0zLjgwNzYxNzJzNi43MzY4MTY0IDEuMzUyNTM5MSA5LjE5MjM4MjggMy44MDc2MTcyYzIuNDU1MDc4MSAyLjQ1NTU2NjQgMy44MDc2MTcyIDUuNzIwMjE0OCAzLjgwNzYxNzIgOS4xOTIzODI4cy0xLjM1MjUzOTEgNi43MzY4MTY0LTMuODA3NjE3MiA5LjE5MjM4MjhjLTIuNDU1NTY2NCAyLjQ1NTA3ODEtNS43MjAyMTQ4IDMuODA3NjE3Mi05LjE5MjM4MjggMy44MDc2MTcycy02LjczNjgxNjQtMS4zNTI1MzkxLTkuMTkyMzgyOC0zLjgwNzYxNzJ6XCI+PC9wYXRoPlxyXG4gICAgICAgICAgICA8L2c+XHJcbiAgICAgICAgPC9zdmc+XHJcbiAgICApXHJcbn1cclxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVJlZiB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgU2VhcmNoSWNvbiB9IGZyb20gJy4uL0ljb24vU2VhcmNoSWNvbic7XHJcbmltcG9ydCB7IENsb3NlQnV0dG9uIH0gZnJvbSAnLi4vQnV0dG9uL0Nsb3NlQnV0dG9uJztcclxuaW1wb3J0IHsgdXNlVHJhbnNsYXRpb24gfSBmcm9tICdyZWFjdC1pMThuZXh0JztcclxuXHJcbmV4cG9ydCBjb25zdCBRRmlsdGVyID0gKHtjaGlsZHJlbiwgcSwgc2V0USwgYWRkaXRpb25hbENsYXNzfSkgPT4ge1xyXG4gICAgY29uc3Qge3R9ID0gdXNlVHJhbnNsYXRpb24oJ21lc3NhZ2VzJyk7XHJcblxyXG4gICAgY29uc3QgaGFuZGxlUUNoYW5nZSA9IGUgPT4ge1xyXG4gICAgICAgIHNldFEoZS50YXJnZXQudmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGhhbmRsZUVtcHR5ID0gKCkgPT4ge1xyXG4gICAgICAgIHNldFEoJycpO1xyXG4gICAgICAgIGlucHV0UmVmLmN1cnJlbnQuZm9jdXMoKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBpbnB1dFJlZiA9IHVzZVJlZihudWxsKTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXsncS1maWx0ZXItZ3JvdXAnICsgKGFkZGl0aW9uYWxDbGFzcyA/ICcgJythZGRpdGlvbmFsQ2xhc3MrJy1ncm91cCc6ICcnKX0+XHJcbiAgICAgICAgICAgIDxpbnB1dCByZWY9e2lucHV0UmVmfSB0eXBlPVwidGV4dFwiIGNsYXNzTmFtZT17J3EtZmlsdGVyLWlucHV0JyArIChhZGRpdGlvbmFsQ2xhc3MgPyAnICcrYWRkaXRpb25hbENsYXNzOiAnJyl9IHZhbHVlPXtxfSBvbkNoYW5nZT17aGFuZGxlUUNoYW5nZX0gcGxhY2Vob2xkZXI9e2NoaWxkcmVufSAvPlxyXG4gICAgICAgICAgICA8U2VhcmNoSWNvbiAvPlxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBxICE9PSAnJyAmJiA8Q2xvc2VCdXR0b24gdHlwZT1cImJ1dHRvblwiIG9uQ2xpY2s9e2hhbmRsZUVtcHR5fSBhcmlhLWxhYmVsPXt0KCdlbXB0eV9pbnB1dCcpfSB0aXRsZT17dCgnZW1wdHlfaW5wdXQnKX0gLz5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59IiwiXHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IGNyZWF0ZVJvb3QgfSBmcm9tICdyZWFjdC1kb20vY2xpZW50JztcclxuaW1wb3J0IHsgU2VhcmNoSW5kZXggfSBmcm9tICcuLi9Db21wb25lbnRzL1NlYXJjaC9TZWFyY2hJbmRleCc7XHJcbmltcG9ydCAnLi4vc3R5bGVzL1NlYXJjaC9pbmRleC5jc3MnO1xyXG5pbXBvcnQgeyBjb25maWd1cmVMYW5ndWFnZSB9IGZyb20gJy4uL2Z1bmN0aW9ucy9sYW5ndWFnZS9jb25maWd1cmVMYW5ndWFnZSc7XHJcblxyXG5jb25maWd1cmVMYW5ndWFnZSgpO1xyXG5cclxuXHJcbmNvbnN0IHNlYXJjaEluZGV4ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NlYXJjaC1pbmRleCcpO1xyXG5cclxuY29uc3Qgc2VhcmNoSW5kZXhSb290ID0gY3JlYXRlUm9vdChzZWFyY2hJbmRleCk7XHJcbnNlYXJjaEluZGV4Um9vdC5yZW5kZXIoXHJcbiAgICA8U2VhcmNoSW5kZXggLz5cclxuKTsiLCJleHBvcnQgY29uc3Qgc2V0VXJsUGFyYW0gPSAoa2V5LCB2YWx1ZSkgPT4ge1xyXG4gICAgY29uc3QgdXJsID0gbmV3IFVSTCh3aW5kb3cubG9jYXRpb24uaHJlZik7XHJcbiAgICB1cmwuc2VhcmNoUGFyYW1zLnNldChrZXksIHZhbHVlKTtcclxuICAgIGhpc3RvcnkucmVwbGFjZVN0YXRlKG51bGwsIG51bGwsIHVybC5ocmVmKTtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGdldFVybFBhcmFtID0gKGtleSkgPT4ge1xyXG4gICAgY29uc3QgdXJsID0gbmV3IFVSTCh3aW5kb3cubG9jYXRpb24uaHJlZik7XHJcbiAgICByZXR1cm4gdXJsLnNlYXJjaFBhcmFtcy5nZXQoa2V5KTtcclxufSIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiUHJvZHVjdEluZGV4IiwiUmVjaXBlSW5kZXgiLCJBcnRpY2xlSW5kZXgiLCJMb2FkZXIiLCJRRmlsdGVyIiwidXNlVHJhbnNsYXRpb24iLCJnZXRVcmxQYXJhbSIsInNldFVybFBhcmFtIiwidXNlR2V0VXNlciIsIlRZUEVfUFJPRFVDVCIsIlRZUEVfUkVDSVBFIiwiVFlQRV9BUlRJQ0xFIiwiU2VhcmNoSW5kZXgiLCJfdXNlVHJhbnNsYXRpb24iLCJ0IiwiX3VzZUdldFVzZXIiLCJ1c2VyIiwidXBkYXRlVXNlciIsIl91c2VTdGF0ZSIsIl91c2VTdGF0ZTIiLCJfc2xpY2VkVG9BcnJheSIsInNob3BJc09wZW4iLCJzZXRTaG9wSXNPcGVuIiwiaW5jbHVkZXMiLCJlbWFpbCIsInNldFR5cGUiLCJfdXNlU3RhdGUzIiwiX3VzZVN0YXRlNCIsInR5cGUiLCJfdXNlU3RhdGU1IiwiX3VzZVN0YXRlNiIsInEiLCJzZXRRIiwidXJsUSIsIl91c2VTdGF0ZTciLCJfdXNlU3RhdGU4IiwiY291bnRQcm9kdWN0cyIsInNldENvdW50UHJvZHVjdHMiLCJfdXNlU3RhdGU5IiwiX3VzZVN0YXRlMTAiLCJjb3VudFJlY2lwZXMiLCJzZXRDb3VudFJlY2lwZXMiLCJfdXNlU3RhdGUxMSIsIl91c2VTdGF0ZTEyIiwiY291bnRBcnRpY2xlcyIsInNldENvdW50QXJ0aWNsZXMiLCJjcmVhdGVFbGVtZW50IiwiRnJhZ21lbnQiLCJjbGFzc05hbWUiLCJhZGRpdGlvbmFsQ2xhc3MiLCJvbkNsaWNrIiwiZSIsImlzT3BlbiIsInNldENvdW50IiwiQ2F0ZWdvcnlGaWx0ZXIiLCJQcmljZUZpbHRlciIsImNhdGVnb3JpZXMiLCJTdWJDYXRlZ29yeUZpbHRlciIsIlByb2R1Y3RGaWx0ZXJzIiwiX3JlZiIsImNhdGVnb3J5SWQiLCJzdWJDYXRlZ29yeUlkIiwiZmlsdGVycyIsInNldEZpbHRlclZhbHVlIiwiY2hvaWNlQ2F0ZWdvcnkiLCJzZXRDaG9pY2VDYXRlZ29yeSIsImNob2ljZVN1YkNhdGVnb3J5Iiwic2V0Q2hvaWNlU3ViQ2F0ZWdvcnkiLCJjYXRlZ29yeSIsImZpbmQiLCJpZCIsInBhcnNlSW50IiwiY2F0ZWdvcnlJZHMiLCJvbkNoYW5nZSIsInBhcmVudENhdGVnb3J5Iiwic3ViQ2F0ZWdvcnlJZHMiLCJtaW5QcmljZSIsIm1heFByaWNlIiwiUHJvZHVjdENhcmQiLCJTZWFyY2hGaWx0ZXJzQ29udHJvbHMiLCJpMThuIiwiU2VhcmNoUmVzdWx0cyIsInVzZVNlYXJjaEluZGV4Iiwic2Nyb2xsVG9wIiwiX3NvcnRDaG9pY2VzIiwiX3JlZiRpc09wZW4iLCJfcmVmJGNhdGVnb3J5SWQiLCJfcmVmJHN1YkNhdGVnb3J5SWQiLCJfcmVmJHEiLCJpbml0aWFsRmlsdGVycyIsIm1pblN0b2NrIiwicGFnZSIsImxpbWl0Iiwic29ydEJ5IiwiX3VzZVNlYXJjaEluZGV4IiwibGFuZ3VhZ2UiLCJjb3VudEZpbHRlcnMiLCJyZXN1bHQiLCJpc0xvYWRpbmciLCJoYW5kbGVSZXNldCIsImhhbmRsZVBhZ2VDaGFuZ2UiLCJzZXRTb3J0QnkiLCJzb3J0Q2hvaWNlcyIsIl9kZWZpbmVQcm9wZXJ0eSIsIm5zIiwiY291bnQiLCJjb3VudFJlc3VsdHMiLCJvblJlc2V0IiwicGFnZUNoYW5nZSIsIml0ZW1zIiwibWFwIiwicHJvZHVjdCIsImtleSIsIlNlYXJjaEljb24iLCJwcm9wcyIsIl9vYmplY3RXaXRob3V0UHJvcGVydGllcyIsIl9leGNsdWRlZCIsIl9leHRlbmRzIiwiZW5hYmxlQmFja2dyb3VuZCIsInhtbG5zIiwidmlld0JveCIsImZpbGwiLCJkIiwidXNlUmVmIiwiQ2xvc2VCdXR0b24iLCJjaGlsZHJlbiIsImhhbmRsZVFDaGFuZ2UiLCJ0YXJnZXQiLCJ2YWx1ZSIsImhhbmRsZUVtcHR5IiwiaW5wdXRSZWYiLCJjdXJyZW50IiwiZm9jdXMiLCJyZWYiLCJwbGFjZWhvbGRlciIsInRpdGxlIiwiY3JlYXRlUm9vdCIsImNvbmZpZ3VyZUxhbmd1YWdlIiwic2VhcmNoSW5kZXgiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwic2VhcmNoSW5kZXhSb290IiwicmVuZGVyIiwidXJsIiwiVVJMIiwid2luZG93IiwibG9jYXRpb24iLCJocmVmIiwic2VhcmNoUGFyYW1zIiwic2V0IiwiaGlzdG9yeSIsInJlcGxhY2VTdGF0ZSIsImdldCJdLCJzb3VyY2VSb290IjoiIn0=
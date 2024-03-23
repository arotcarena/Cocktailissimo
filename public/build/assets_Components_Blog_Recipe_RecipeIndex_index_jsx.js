"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["assets_Components_Blog_Recipe_RecipeIndex_index_jsx"],{

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

/***/ "./assets/Components/Blog/Recipe/RecipeIndex/RecipeFilters/IngredientFilter.jsx":
/*!**************************************************************************************!*\
  !*** ./assets/Components/Blog/Recipe/RecipeIndex/RecipeFilters/IngredientFilter.jsx ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IngredientFilter": () => (/* binding */ IngredientFilter)
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
/* harmony import */ var _UI_Icon_ExpandMoreIcon__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../../../UI/Icon/ExpandMoreIcon */ "./assets/UI/Icon/ExpandMoreIcon.jsx");
/* harmony import */ var _CustomHook_state_useToggleState__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../../../CustomHook/state/useToggleState */ "./assets/CustomHook/state/useToggleState.jsx");
/* harmony import */ var _UI_Form_EntityTypeSuggested__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../../../../UI/Form/EntityTypeSuggested */ "./assets/UI/Form/EntityTypeSuggested.jsx");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");
















function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }





var IngredientFilter = function IngredientFilter(_ref) {
  var ingredientFilters = _ref.ingredientFilters,
    setIngredientFilters = _ref.setIngredientFilters;
  var _useTranslation = (0,react_i18next__WEBPACK_IMPORTED_MODULE_20__.useTranslation)('messages'),
    t = _useTranslation.t,
    i18n = _useTranslation.i18n;
  var _useToggleBoolState = (0,_CustomHook_state_useToggleState__WEBPACK_IMPORTED_MODULE_18__.useToggleBoolState)(),
    _useToggleBoolState2 = _slicedToArray(_useToggleBoolState, 2),
    isExpanded = _useToggleBoolState2[0],
    toggleExpand = _useToggleBoolState2[1];
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement("div", {
    className: 'search-filter ingredient-filter' + (isExpanded ? ' expanded' : '')
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement("button", {
    type: "button",
    className: 'search-filter-label' + (isExpanded ? ' expanded' : ''),
    onClick: toggleExpand
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement("span", null, t('ingredients'), " ", ingredientFilters.length > 0 && '(1)'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement(_UI_Icon_ExpandMoreIcon__WEBPACK_IMPORTED_MODULE_17__.ExpandMoreIcon, null)), isExpanded && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement(_UI_Form_EntityTypeSuggested__WEBPACK_IMPORTED_MODULE_19__.EntityTypeSuggested, {
    placeholder: t('filter_by_ingredient'),
    endpoint: '/' + i18n.language + '/api/ingredient/qSearch',
    values: ingredientFilters,
    setValues: setIngredientFilters,
    render: function render(ingredient) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement(IngredientItem, {
        key: ingredient.id,
        ingredient: ingredient
      });
    }
  }));
};
var IngredientItem = function IngredientItem(_ref2) {
  var ingredient = _ref2.ingredient;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement("div", {
    className: "ingredient-filter-item"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement("img", {
    className: "ingredient-filter-img",
    src: ingredient.picture.path,
    alt: ingredient.picture.alt
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement("span", {
    className: "ingredient-filter-title"
  }, ingredient.name));
};

/***/ }),

/***/ "./assets/Components/Blog/Recipe/RecipeIndex/RecipeFilters/index.jsx":
/*!***************************************************************************!*\
  !*** ./assets/Components/Blog/Recipe/RecipeIndex/RecipeFilters/index.jsx ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RecipeFilters": () => (/* binding */ RecipeFilters)
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
/* harmony import */ var _IngredientFilter__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./IngredientFilter */ "./assets/Components/Blog/Recipe/RecipeIndex/RecipeFilters/IngredientFilter.jsx");
/* harmony import */ var _Config_recipes_json__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../../../Config/recipes.json */ "./assets/Config/recipes.json");
/* harmony import */ var _UI_Search_SubCategoryFilter__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../../../../UI/Search/SubCategoryFilter */ "./assets/UI/Search/SubCategoryFilter.jsx");
















function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }




var RecipeFilters = function RecipeFilters(_ref) {
  var subCategoryId = _ref.subCategoryId,
    filters = _ref.filters,
    setFilterValue = _ref.setFilterValue,
    ingredientFilters = _ref.ingredientFilters,
    setIngredientFilters = _ref.setIngredientFilters;
  //pour savoir si on affiche le filtre subCategory
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_16__.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    choiceSubCategory = _useState2[0],
    setChoiceSubCategory = _useState2[1];
  (0,react__WEBPACK_IMPORTED_MODULE_16__.useEffect)(function () {
    //si on est dans recipe_index
    if (!subCategoryId) {
      setChoiceSubCategory(true);
    }
    //si on est dans recipe_subCategoryShow on laisse à false
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement("form", {
    className: "search-filters"
  }, choiceSubCategory && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement(_UI_Search_SubCategoryFilter__WEBPACK_IMPORTED_MODULE_19__.SubCategoryFilter, {
    parentCategory: _Config_recipes_json__WEBPACK_IMPORTED_MODULE_18__,
    subCategoryIds: filters.subCategoryIds,
    onChange: setFilterValue
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement(_IngredientFilter__WEBPACK_IMPORTED_MODULE_17__.IngredientFilter, {
    onChange: setFilterValue,
    ingredientFilters: ingredientFilters,
    setIngredientFilters: setIngredientFilters
  }));
};

/***/ }),

/***/ "./assets/Components/Blog/Recipe/RecipeIndex/index.jsx":
/*!*************************************************************!*\
  !*** ./assets/Components/Blog/Recipe/RecipeIndex/index.jsx ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RecipeIndex": () => (/* binding */ RecipeIndex)
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
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.array.is-array.js */ "./node_modules/core-js/modules/es.array.is-array.js");
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.array.push.js */ "./node_modules/core-js/modules/es.array.push.js");
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! core-js/modules/es.array.from.js */ "./node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! core-js/modules/es.regexp.test.js */ "./node_modules/core-js/modules/es.regexp.test.js");
/* harmony import */ var core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var _RecipeCard__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./RecipeCard */ "./assets/Components/Blog/Recipe/RecipeIndex/RecipeCard.jsx");
/* harmony import */ var _CustomHook_search_useSearchIndex__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../../../../CustomHook/search/useSearchIndex */ "./assets/CustomHook/search/useSearchIndex.jsx");
/* harmony import */ var _UI_Search_SearchFiltersControls__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../../../../UI/Search/SearchFiltersControls */ "./assets/UI/Search/SearchFiltersControls.jsx");
/* harmony import */ var _RecipeFilters__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./RecipeFilters */ "./assets/Components/Blog/Recipe/RecipeIndex/RecipeFilters/index.jsx");
/* harmony import */ var _UI_Search_SearchResults__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../../../../UI/Search/SearchResults */ "./assets/UI/Search/SearchResults.jsx");
/* harmony import */ var _functions_scroll__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ../../../../functions/scroll */ "./assets/functions/scroll.js");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }





















function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }








var RecipeIndex = function RecipeIndex(_ref) {
  var _sortChoices;
  var _ref$isOpen = _ref.isOpen,
    isOpen = _ref$isOpen === void 0 ? true : _ref$isOpen,
    _ref$subCategoryId = _ref.subCategoryId,
    subCategoryId = _ref$subCategoryId === void 0 ? null : _ref$subCategoryId,
    _ref$q = _ref.q,
    q = _ref$q === void 0 ? '' : _ref$q,
    setCount = _ref.setCount;
  var _useTranslation = (0,react_i18next__WEBPACK_IMPORTED_MODULE_28__.useTranslation)('configs'),
    t = _useTranslation.t,
    i18n = _useTranslation.i18n;
  var subCategoryIds = subCategoryId === null ? [] : [subCategoryId];
  var initialFilters = {
    subCategoryIds: subCategoryIds,
    ingredientIds: [],
    page: 1,
    limit: 20,
    sortBy: '',
    q: q
  };
  var _useSearchIndex = (0,_CustomHook_search_useSearchIndex__WEBPACK_IMPORTED_MODULE_23__.useSearchIndex)('/' + i18n.language + '/api/recipe/index', initialFilters, q, _functions_scroll__WEBPACK_IMPORTED_MODULE_27__.scrollTop),
    filters = _useSearchIndex.filters,
    setFilterValue = _useSearchIndex.setFilterValue,
    countFilters = _useSearchIndex.countFilters,
    result = _useSearchIndex.result,
    isLoading = _useSearchIndex.isLoading,
    handleReset = _useSearchIndex.handleReset,
    handlePageChange = _useSearchIndex.handlePageChange,
    setSortBy = _useSearchIndex.setSortBy;
  var sortChoices = (_sortChoices = {}, _defineProperty(_sortChoices, 'A - Z', 'alphabet_ASC'), _defineProperty(_sortChoices, 'Z - A', 'alphabet_DESC'), _defineProperty(_sortChoices, t('sort.createdAt_DESC_f'), 'createdAt_DESC'), _defineProperty(_sortChoices, t('sort.createdAt_ASC_f'), 'createdAt_ASC'), _sortChoices);

  // pour éviter de devoir charger les ingrédients filtres à chaque fois qu'on ouvre les filtres 
  // on crée un state qui contient les ingrédients complets et à chaque changement on met à jour filters.ingredientIds
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_21__.useState)([]),
    _useState2 = _slicedToArray(_useState, 2),
    ingredientFilters = _useState2[0],
    setIngredientFilters = _useState2[1];
  (0,react__WEBPACK_IMPORTED_MODULE_21__.useEffect)(function () {
    setFilterValue('ingredientIds', ingredientFilters.map(function (i) {
      return i.id;
    }));
  }, [ingredientFilters]);
  // On surcharger la méthode handleReset avec le reset de ingredientFilters
  var resetAll = function resetAll() {
    setIngredientFilters([]);
    handleReset();
  };

  //pour envoyer au parent pour afficher sur le bouton Product 
  (0,react__WEBPACK_IMPORTED_MODULE_21__.useEffect)(function () {
    if (result && setCount) {
      setCount(result.count);
    }
  }, [result, setCount]);
  if (!isOpen) {
    return '';
  }
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_21___default().createElement("div", {
    className: "product-index"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_21___default().createElement("div", {
    className: "product-index-header"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_21___default().createElement(_UI_Search_SearchFiltersControls__WEBPACK_IMPORTED_MODULE_24__.SearchFiltersControls, {
    countFilters: countFilters,
    countResults: result === null || result === void 0 ? void 0 : result.count,
    onReset: resetAll,
    sortBy: filters.sortBy,
    setSortBy: setSortBy,
    sortChoices: sortChoices
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_21___default().createElement(_RecipeFilters__WEBPACK_IMPORTED_MODULE_25__.RecipeFilters, {
    subCategoryId: subCategoryId,
    filters: filters,
    setFilterValue: setFilterValue,
    ingredientFilters: ingredientFilters,
    setIngredientFilters: setIngredientFilters
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_21___default().createElement(_UI_Search_SearchResults__WEBPACK_IMPORTED_MODULE_26__.SearchResults, {
    isLoading: isLoading,
    result: result,
    pageChange: handlePageChange
  }, result && result.items.map(function (recipe) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_21___default().createElement(_RecipeCard__WEBPACK_IMPORTED_MODULE_22__.RecipeCard, {
      key: recipe.id,
      recipe: recipe
    });
  })));
};

/***/ }),

/***/ "./assets/UI/Form/EntityTypeSuggested.jsx":
/*!************************************************!*\
  !*** ./assets/UI/Form/EntityTypeSuggested.jsx ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EntityTypeSuggested": () => (/* binding */ EntityTypeSuggested)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.find.js */ "./node_modules/core-js/modules/es.array.find.js");
/* harmony import */ var core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/web.timers.js */ "./node_modules/core-js/modules/web.timers.js");
/* harmony import */ var core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.concat.js */ "./node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.array.filter.js */ "./node_modules/core-js/modules/es.array.filter.js");
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.array.map.js */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.array.is-array.js */ "./node_modules/core-js/modules/es.array.is-array.js");
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_12__);
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
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! core-js/modules/es.error.to-string.js */ "./node_modules/core-js/modules/es.error.to-string.js");
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var _CustomHook_fetch_useFetchQSearch__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../../CustomHook/fetch/useFetchQSearch */ "./assets/CustomHook/fetch/useFetchQSearch.jsx");
/* harmony import */ var _Icon_Loader__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../Icon/Loader */ "./assets/UI/Icon/Loader.jsx");
/* harmony import */ var _SuggestList__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../SuggestList */ "./assets/UI/SuggestList.jsx");
/* harmony import */ var _Button_CloseButton__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../Button/CloseButton */ "./assets/UI/Button/CloseButton.jsx");
/* harmony import */ var _Button_TrashButton__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../Button/TrashButton */ "./assets/UI/Button/TrashButton.jsx");
/* harmony import */ var i18next__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! i18next */ "./node_modules/i18next/dist/esm/i18next.js");
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




























var EntityTypeSuggested = function EntityTypeSuggested(_ref) {
  var endpoint = _ref.endpoint,
    _ref$values = _ref.values,
    values = _ref$values === void 0 ? [] : _ref$values,
    setValues = _ref.setValues,
    _render = _ref.render,
    placeholder = _ref.placeholder;
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_21__.useState)(''),
    _useState2 = _slicedToArray(_useState, 2),
    q = _useState2[0],
    setQ = _useState2[1];
  var handleQChange = function handleQChange(e) {
    setQ(e.target.value);
  };
  var handleEmpty = function handleEmpty() {
    setQ('');
    resetSuggestedItems();
    inputRef.current.focus();
  };
  var _useFetchQSearch = (0,_CustomHook_fetch_useFetchQSearch__WEBPACK_IMPORTED_MODULE_22__.useFetchQSearch)(endpoint, q, 10),
    _useFetchQSearch2 = _slicedToArray(_useFetchQSearch, 4),
    suggestedItems = _useFetchQSearch2[0],
    resetSuggestedItems = _useFetchQSearch2[1],
    suggestIsLoading = _useFetchQSearch2[2],
    _ = _useFetchQSearch2[3];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_21__.useState)(null),
    _useState4 = _slicedToArray(_useState3, 2),
    error = _useState4[0],
    setError = _useState4[1];
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_21__.useState)(null),
    _useState6 = _slicedToArray(_useState5, 2),
    timer = _useState6[0],
    setTimer = _useState6[1];
  var handleSelect = function handleSelect(item) {
    if (values.find(function (value) {
      return value.id === item.id;
    })) {
      setError((0,i18next__WEBPACK_IMPORTED_MODULE_27__.t)('error.already_selected', {
        ns: 'messages'
      }));
      if (timer) {
        clearTimeout(timer);
      }
      setTimer(setTimeout(function () {
        setError(null);
      }, 2000));
      handleEmpty();
      return;
    }
    setValues(function (items) {
      return [].concat(_toConsumableArray(items), [item]);
    });
    handleEmpty();
  };
  var removeItem = function removeItem(item) {
    setValues(function (items) {
      return items.filter(function (i) {
        return i.id !== item.id;
      });
    });
  };
  var inputRef = (0,react__WEBPACK_IMPORTED_MODULE_21__.useRef)(null);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_21___default().createElement("div", {
    className: "entity-type-suggested"
  }, values && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_21___default().createElement("ul", null, values.map(function (item) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_21___default().createElement(Item, {
      key: item.id,
      item: item,
      removeItem: removeItem,
      render: _render
    });
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_21___default().createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_21___default().createElement("input", {
    ref: inputRef,
    className: "entity-suggested-input",
    type: "text",
    name: "q",
    value: q,
    onChange: handleQChange,
    placeholder: placeholder !== null && placeholder !== void 0 ? placeholder : '',
    autoFocus: true
  }), suggestIsLoading && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_21___default().createElement(_Icon_Loader__WEBPACK_IMPORTED_MODULE_23__.Loader, null), !suggestIsLoading && q.length > 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_21___default().createElement(_Button_CloseButton__WEBPACK_IMPORTED_MODULE_25__.CloseButton, {
    onClick: handleEmpty
  }), error && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_21___default().createElement("div", {
    className: "form-error"
  }, error), suggestedItems && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_21___default().createElement(_SuggestList__WEBPACK_IMPORTED_MODULE_24__.SuggestList, {
    suggests: suggestedItems,
    onSelect: handleSelect,
    onClose: resetSuggestedItems,
    render: function render(item, isSelected) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_21___default().createElement(SuggestItem, {
        key: item.id,
        item: item,
        isSelected: isSelected,
        onSelect: handleSelect,
        render: _render
      });
    }
  })));
};
var SuggestItem = function SuggestItem(_ref2) {
  var item = _ref2.item,
    isSelected = _ref2.isSelected,
    onSelect = _ref2.onSelect,
    render = _ref2.render;
  var handleClick = function handleClick(e) {
    e.preventDefault();
    onSelect(item);
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_21___default().createElement("li", {
    onClick: handleClick,
    className: 'suggest-item' + (isSelected ? ' selected' : '')
  }, render(item));
};
var Item = function Item(_ref3) {
  var item = _ref3.item,
    removeItem = _ref3.removeItem,
    render = _ref3.render;
  var handleClick = function handleClick() {
    removeItem(item);
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_21___default().createElement("li", {
    className: "show-item"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_21___default().createElement(_Button_TrashButton__WEBPACK_IMPORTED_MODULE_26__.TrashButton, {
    onClick: handleClick
  }), render(item));
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

/***/ "./assets/Config/recipes.json":
/*!************************************!*\
  !*** ./assets/Config/recipes.json ***!
  \************************************/
/***/ ((module) => {

module.exports = JSON.parse('{"id":26,"name":{"en":"Recipes","fr":"Recettes","es":"Recetas","it":"Ricette"},"target":{"en":"/en/recipes.html","fr":"/fr/recettes.html","es":"/es/recetas.html","it":"/it/ricette.html"},"subCategories":[{"id":177,"name":{"en":"Gourmet infusion","fr":"Infusions gourmandes","es":"Infusiones gourmet","it":"Infusi golosi"},"picture":{"alt":{"en":"Infused drinks with fruit pieces","fr":"Boissons infusées avec des morceaux de fruits","es":"Bebidas infusionadas con trozos de frutas","it":"Bevande infuse con pezzi di frutta"},"path":"infusions_gourmandes_small.jpg"},"target":{"en":"/en/recipes/gourmet-infusion.html","fr":"/fr/recettes/infusions-gourmandes.html","es":"/es/recetas/infusiones-gourmet.html","it":"/it/ricette/infusi-golosi.html"}},{"id":178,"name":{"en":"Mocktails","fr":"Mocktails","es":"Cocteles sin alcohol","it":"Cocktails analcolicos"},"picture":{"alt":{"en":"Grapefruit mocktail","fr":"Un cocktail au pamplemousse","es":"Mocktail de pomelo","it":"Mocktail al pompelmo"},"path":"mocktails_small.jpg"},"target":{"en":"/en/recipes/mocktails.html","fr":"/fr/recettes/mocktails.html","es":"/es/recetas/cocteles-sin-alcohol.html","it":"/it/ricette/cocktails-analcolicos.html"}},{"id":179,"name":{"en":"Various recipes","fr":"Autres cocktails","es":"Otras recetas","it":"Ricette diversi"},"picture":{"alt":{"en":"Various cocktails with fruit slices","fr":"Cocktails variés avec des tranches de fruits","es":"Varios cócteles con rodajas de frutas","it":"Vari cocktail con fette di frutta"},"path":"other_cocktails_small.jpg"},"target":{"en":"/en/recipes/various-recipes.html","fr":"/fr/recettes/autres-cocktails.html","es":"/es/recetas/otras-recetas.html","it":"/it/ricette/ricette-diversi.html"}},{"id":180,"name":{"en":"Starting with whisky","fr":"À partir du whisky","es":"Empezando con el whisky","it":"A partire dal whisky"},"picture":{"alt":{"en":"Glass of whisky with an orange zest","fr":"Un verre de whisky avec un zeste d\'orange","es":"Vaso de whisky con ralladura de naranja","it":"Bicchiere di whisky con scorza d\'arancia"},"path":"from_whisky_small.jpg"},"target":{"en":"/en/recipes/starting-with-whisky.html","fr":"/fr/recettes/a-partir-du-whisky.html","es":"/es/recetas/empezando-con-el-whisky.html","it":"/it/ricette/a-partire-dal-whisky.html"}},{"id":181,"name":{"en":"The world of gin","fr":"Le monde du gin","es":"El mundo de la ginebra","it":"Il mondo del gin"},"picture":{"alt":{"en":"Gin cocktail with herbs and lime","fr":"Un cocktail au gin avec des herbes aromatiques et du citron vert","es":"Cóctel de ginebra con hierbas y lima","it":"Cocktail al gin con erbe aromatiche e lime"},"path":"gins_world_small.jpg"},"target":{"en":"/en/recipes/the-world-of-gin.html","fr":"/fr/recettes/le-monde-du-gin.html","es":"/es/recetas/el-mundo-de-la-ginebra.html","it":"/it/ricette/il-mondo-del-gin.html"}},{"id":182,"name":{"en":"Around vodka","fr":"Autour de la vodka","es":"Sobre el vodka","it":"Intorno alla vodka"},"picture":{"alt":{"en":"Chilled vodka bottle","fr":"Bouteille de vodka glacée","es":"Botella de vodka fría","it":"Bottiglia di vodka ghiacciata"},"path":"around_vodka_small.jpg"},"target":{"en":"/en/recipes/around-vodka.html","fr":"/fr/recettes/autour-de-la-vodka.html","es":"/es/recetas/sobre-el-vodka.html","it":"/it/ricette/intorno-alla-vodka.html"}},{"id":183,"name":{"en":"On the rum route","fr":"Sur la route du rhum","es":"En la ruta del ron","it":"Sulla rotta del rum"},"picture":{"alt":{"en":"A glass and a bottle of rum in front of a barrel","fr":"Un verre et une bouteille de rhum devant un tonneau","es":"Un vaso y una botella de ron frente a un barril","it":"Un bicchiere e una bottiglia di rum davanti a una botte"},"path":"rhum_road_small.jpg"},"target":{"en":"/en/recipes/on-the-rum-route.html","fr":"/fr/recettes/sur-la-route-du-rhum.html","es":"/es/recetas/en-le-ruta-del-ron.html","it":"/it/ricette/sulla-rotta-del-rum.html"}},{"id":184,"name":{"en":"Trends","fr":"Les tendances","es":"Tendencias","it":"Le tendenze"},"picture":{"alt":{"en":"Different colorful cocktails with fruit pieces","fr":"Différents cocktails colorés avec des morceaux de fruits","es":"Diferentes cócteles coloridos con trozos de frutas","it":"Diversi cocktail colorati con pezzi di frutta"},"path":"trends_small.jpg"},"target":{"en":"/en/recipes/trends.html","fr":"/fr/recettes/les-tendances.html","es":"/es/recetas/tendencias.html","it":"/it/ricette/le-tendenze.html"}},{"id":185,"name":{"en":"The classics","fr":"Les classiques","es":"Los classicos","it":"I classici"},"picture":{"alt":{"en":"Grapefruit cocktails on a terrace","fr":"Cocktails au pamplemousse sur une terrasse","es":"Cócteles de pomelo en una terraza","it":"Cocktail al pompelmo su una terrazza"},"path":"classics_small.jpg"},"target":{"en":"/en/recipes/the-classics.html","fr":"/fr/recettes/les-classiques.html","es":"/es/recetas/los-clasicos.html","it":"/it/ricette/i-classici.html"}}]}');

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXNzZXRzX0NvbXBvbmVudHNfQmxvZ19SZWNpcGVfUmVjaXBlSW5kZXhfaW5kZXhfanN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUEwQjtBQUVuQixJQUFNQyxVQUFVLEdBQUcsU0FBYkEsVUFBVUEsQ0FBQUMsSUFBQSxFQUFpQjtFQUFBLElBQVpDLE1BQU0sR0FBQUQsSUFBQSxDQUFOQyxNQUFNO0VBRzlCLG9CQUNJSCwwREFBQTtJQUFJSyxTQUFTLEVBQUM7RUFBMEIsZ0JBQ3BDTCwwREFBQTtJQUFHSyxTQUFTLEVBQUMsdUJBQXVCO0lBQUNDLElBQUksRUFBRUgsTUFBTSxDQUFDSTtFQUFPLGdCQUNyRFAsMERBQUE7SUFBS0ssU0FBUyxFQUFDO0VBQTBCLGdCQUNyQ0wsMERBQUE7SUFBS0ssU0FBUyxFQUFDLGtCQUFrQjtJQUFDRyxHQUFHLEVBQUVMLE1BQU0sQ0FBQ00sT0FBTyxDQUFDQyxJQUFLO0lBQUNDLEdBQUcsRUFBRVIsTUFBTSxDQUFDTSxPQUFPLENBQUNFO0VBQUksRUFBRyxDQUNyRixDQUNOLGVBQ0pYLDBEQUFBO0lBQUtLLFNBQVMsRUFBQztFQUFtQixnQkFDOUJMLDBEQUFBO0lBQUlLLFNBQVMsRUFBQztFQUFvQixnQkFBQ0wsMERBQUE7SUFBR00sSUFBSSxFQUFFSCxNQUFNLENBQUNJO0VBQU8sR0FBRUosTUFBTSxDQUFDUyxLQUFLLENBQUssQ0FBSyxlQUVsRlosMERBQUE7SUFBSUssU0FBUyxFQUFDO0VBQW1CLEdBRXpCRixNQUFNLENBQUNVLFdBQVcsQ0FBQ0MsR0FBRyxDQUFDLFVBQUNDLFVBQVUsRUFBRUMsS0FBSztJQUFBLG9CQUNyQ2hCLDBEQUFBO01BQUlLLFNBQVMsRUFBQyx3QkFBd0I7TUFBQ1ksR0FBRyxFQUFFRDtJQUFNLGdCQUM5Q2hCLDBEQUFBLGVBQU9lLFVBQVUsQ0FBUSxDQUN4QjtFQUFBLENBQ1IsQ0FBQyxDQUVMLENBQ0gsQ0FDTDtBQUViLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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RWIsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2Fzc2V0cy9Db21wb25lbnRzL0Jsb2cvUmVjaXBlL1JlY2lwZUluZGV4L1JlY2lwZUNhcmQuanN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9Db21wb25lbnRzL0Jsb2cvUmVjaXBlL1JlY2lwZUluZGV4L1JlY2lwZUZpbHRlcnMvSW5ncmVkaWVudEZpbHRlci5qc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL0NvbXBvbmVudHMvQmxvZy9SZWNpcGUvUmVjaXBlSW5kZXgvUmVjaXBlRmlsdGVycy9pbmRleC5qc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL0NvbXBvbmVudHMvQmxvZy9SZWNpcGUvUmVjaXBlSW5kZXgvaW5kZXguanN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9VSS9Gb3JtL0VudGl0eVR5cGVTdWdnZXN0ZWQuanN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9VSS9TdWdnZXN0TGlzdC5qc3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuXHJcbmV4cG9ydCBjb25zdCBSZWNpcGVDYXJkID0gKHtyZWNpcGV9KSA9PiB7XHJcblxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGxpIGNsYXNzTmFtZT1cInByb2R1Y3QtY2FyZCB0eXBlLXJlY2lwZVwiPlxyXG4gICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJwcm9kdWN0LWNhcmQtaW1nLWxpbmtcIiBocmVmPXtyZWNpcGUudGFyZ2V0fT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZHVjdC1jYXJkLWltZy13cmFwcGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJwcm9kdWN0LWNhcmQtaW1nXCIgc3JjPXtyZWNpcGUucGljdHVyZS5wYXRofSBhbHQ9e3JlY2lwZS5waWN0dXJlLmFsdH0gLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZHVjdC1jYXJkLWJvZHlcIj5cclxuICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJwcm9kdWN0LWNhcmQtdGl0bGVcIj48YSBocmVmPXtyZWNpcGUudGFyZ2V0fT57cmVjaXBlLnRpdGxlfTwvYT48L2gyPlxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwicHJvZHVjdC1jYXJkLWxpc3RcIj5cclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlY2lwZS5pbmdyZWRpZW50cy5tYXAoKGluZ3JlZGllbnQsIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwicHJvZHVjdC1jYXJkLWxpc3QtaXRlbVwiIGtleT17aW5kZXh9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPntpbmdyZWRpZW50fTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICkpXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9saT5cclxuICAgIClcclxufSIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IEV4cGFuZE1vcmVJY29uIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vVUkvSWNvbi9FeHBhbmRNb3JlSWNvbic7XHJcbmltcG9ydCB7IHVzZVRvZ2dsZUJvb2xTdGF0ZSB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL0N1c3RvbUhvb2svc3RhdGUvdXNlVG9nZ2xlU3RhdGUnO1xyXG5pbXBvcnQgeyBFbnRpdHlUeXBlU3VnZ2VzdGVkIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vVUkvRm9ybS9FbnRpdHlUeXBlU3VnZ2VzdGVkJztcclxuaW1wb3J0IHsgdXNlVHJhbnNsYXRpb24gfSBmcm9tICdyZWFjdC1pMThuZXh0JztcclxuXHJcbmV4cG9ydCBjb25zdCBJbmdyZWRpZW50RmlsdGVyID0gKHtpbmdyZWRpZW50RmlsdGVycywgc2V0SW5ncmVkaWVudEZpbHRlcnN9KSA9PiB7XHJcbiAgICBjb25zdCB7dCwgaTE4bn0gPSB1c2VUcmFuc2xhdGlvbignbWVzc2FnZXMnKTtcclxuICAgXHJcbiAgICBjb25zdCBbaXNFeHBhbmRlZCwgdG9nZ2xlRXhwYW5kXSA9IHVzZVRvZ2dsZUJvb2xTdGF0ZSgpO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9eydzZWFyY2gtZmlsdGVyIGluZ3JlZGllbnQtZmlsdGVyJyArIChpc0V4cGFuZGVkID8gJyBleHBhbmRlZCc6ICcnKX0+XHJcbiAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT17J3NlYXJjaC1maWx0ZXItbGFiZWwnICsgKGlzRXhwYW5kZWQgPyAnIGV4cGFuZGVkJzogJycpfSBvbkNsaWNrPXt0b2dnbGVFeHBhbmR9PlxyXG4gICAgICAgICAgICAgICAgPHNwYW4+e3QoJ2luZ3JlZGllbnRzJyl9IHtpbmdyZWRpZW50RmlsdGVycy5sZW5ndGggPiAwICYmICcoMSknfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDxFeHBhbmRNb3JlSWNvbiAvPlxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaXNFeHBhbmRlZCAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPEVudGl0eVR5cGVTdWdnZXN0ZWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9e3QoJ2ZpbHRlcl9ieV9pbmdyZWRpZW50Jyl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVuZHBvaW50PXsnLycraTE4bi5sYW5ndWFnZSsnL2FwaS9pbmdyZWRpZW50L3FTZWFyY2gnfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZXM9e2luZ3JlZGllbnRGaWx0ZXJzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRWYWx1ZXM9e3NldEluZ3JlZGllbnRGaWx0ZXJzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZW5kZXI9e2luZ3JlZGllbnQgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEluZ3JlZGllbnRJdGVtIGtleT17aW5ncmVkaWVudC5pZH0gaW5ncmVkaWVudD17aW5ncmVkaWVudH0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuXHJcblxyXG5jb25zdCBJbmdyZWRpZW50SXRlbSA9ICh7aW5ncmVkaWVudH0pID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbmdyZWRpZW50LWZpbHRlci1pdGVtXCI+XHJcbiAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwiaW5ncmVkaWVudC1maWx0ZXItaW1nXCIgc3JjPXtpbmdyZWRpZW50LnBpY3R1cmUucGF0aH0gYWx0PXtpbmdyZWRpZW50LnBpY3R1cmUuYWx0fSAvPlxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJpbmdyZWRpZW50LWZpbHRlci10aXRsZVwiPntpbmdyZWRpZW50Lm5hbWV9PC9zcGFuPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59IiwiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IEluZ3JlZGllbnRGaWx0ZXIgfSBmcm9tICcuL0luZ3JlZGllbnRGaWx0ZXInO1xyXG5pbXBvcnQgcmVjaXBlQ2F0ZWdvcnkgZnJvbSAnLi4vLi4vLi4vLi4vLi4vQ29uZmlnL3JlY2lwZXMuanNvbic7XHJcbmltcG9ydCB7IFN1YkNhdGVnb3J5RmlsdGVyIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vVUkvU2VhcmNoL1N1YkNhdGVnb3J5RmlsdGVyJztcclxuXHJcbmV4cG9ydCBjb25zdCBSZWNpcGVGaWx0ZXJzID0gKHtzdWJDYXRlZ29yeUlkLCBmaWx0ZXJzLCBzZXRGaWx0ZXJWYWx1ZSwgaW5ncmVkaWVudEZpbHRlcnMsIHNldEluZ3JlZGllbnRGaWx0ZXJzfSkgPT4ge1xyXG4gICAgXHJcbiAgICAvL3BvdXIgc2F2b2lyIHNpIG9uIGFmZmljaGUgbGUgZmlsdHJlIHN1YkNhdGVnb3J5XHJcbiAgICBjb25zdCBbY2hvaWNlU3ViQ2F0ZWdvcnksIHNldENob2ljZVN1YkNhdGVnb3J5XSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgLy9zaSBvbiBlc3QgZGFucyByZWNpcGVfaW5kZXhcclxuICAgICAgICBpZighc3ViQ2F0ZWdvcnlJZCkge1xyXG4gICAgICAgICAgICBzZXRDaG9pY2VTdWJDYXRlZ29yeSh0cnVlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy9zaSBvbiBlc3QgZGFucyByZWNpcGVfc3ViQ2F0ZWdvcnlTaG93IG9uIGxhaXNzZSDDoCBmYWxzZVxyXG4gICAgfSwgW10pO1xyXG4gICAgXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxmb3JtIGNsYXNzTmFtZT1cInNlYXJjaC1maWx0ZXJzXCI+XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGNob2ljZVN1YkNhdGVnb3J5ICYmIChcclxuICAgICAgICAgICAgICAgICAgICA8U3ViQ2F0ZWdvcnlGaWx0ZXIgcGFyZW50Q2F0ZWdvcnk9e3JlY2lwZUNhdGVnb3J5fSBzdWJDYXRlZ29yeUlkcz17ZmlsdGVycy5zdWJDYXRlZ29yeUlkc30gb25DaGFuZ2U9e3NldEZpbHRlclZhbHVlfSAvPlxyXG4gICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIDxJbmdyZWRpZW50RmlsdGVyIFxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e3NldEZpbHRlclZhbHVlfSBcclxuICAgICAgICAgICAgICAgIGluZ3JlZGllbnRGaWx0ZXJzPXtpbmdyZWRpZW50RmlsdGVyc30gXHJcbiAgICAgICAgICAgICAgICBzZXRJbmdyZWRpZW50RmlsdGVycz17c2V0SW5ncmVkaWVudEZpbHRlcnN9IFxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgIDwvZm9ybT5cclxuICAgIClcclxufSIsImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBSZWNpcGVDYXJkIH0gZnJvbSAnLi9SZWNpcGVDYXJkJztcclxuaW1wb3J0IHsgdXNlU2VhcmNoSW5kZXggfSBmcm9tICcuLi8uLi8uLi8uLi9DdXN0b21Ib29rL3NlYXJjaC91c2VTZWFyY2hJbmRleCc7XHJcbmltcG9ydCB7IFNlYXJjaEZpbHRlcnNDb250cm9scyB9IGZyb20gJy4uLy4uLy4uLy4uL1VJL1NlYXJjaC9TZWFyY2hGaWx0ZXJzQ29udHJvbHMnO1xyXG5pbXBvcnQgeyBSZWNpcGVGaWx0ZXJzIH0gZnJvbSAnLi9SZWNpcGVGaWx0ZXJzJztcclxuaW1wb3J0IHsgU2VhcmNoUmVzdWx0cyB9IGZyb20gJy4uLy4uLy4uLy4uL1VJL1NlYXJjaC9TZWFyY2hSZXN1bHRzJztcclxuaW1wb3J0IHsgc2Nyb2xsVG9wIH0gZnJvbSAnLi4vLi4vLi4vLi4vZnVuY3Rpb25zL3Njcm9sbCc7XHJcbmltcG9ydCB7IHVzZVRyYW5zbGF0aW9uIH0gZnJvbSAncmVhY3QtaTE4bmV4dCc7XHJcblxyXG5leHBvcnQgY29uc3QgUmVjaXBlSW5kZXggPSAoe2lzT3BlbiA9IHRydWUsIHN1YkNhdGVnb3J5SWQgPSBudWxsLCBxID0gJycsIHNldENvdW50fSkgPT4ge1xyXG4gICAgY29uc3Qge3QsIGkxOG59ID0gdXNlVHJhbnNsYXRpb24oJ2NvbmZpZ3MnKTtcclxuXHJcbiAgICBjb25zdCBzdWJDYXRlZ29yeUlkcyA9IHN1YkNhdGVnb3J5SWQgPT09IG51bGwgPyBbXTogW3N1YkNhdGVnb3J5SWRdO1xyXG5cclxuICAgIGNvbnN0IGluaXRpYWxGaWx0ZXJzID0ge1xyXG4gICAgICAgIHN1YkNhdGVnb3J5SWRzOiBzdWJDYXRlZ29yeUlkcyxcclxuICAgICAgICBpbmdyZWRpZW50SWRzOiBbXSxcclxuICAgICAgICBwYWdlOiAxLFxyXG4gICAgICAgIGxpbWl0OiAyMCxcclxuICAgICAgICBzb3J0Qnk6ICcnLFxyXG4gICAgICAgIHE6IHFcclxuICAgIH07XHJcblxyXG4gICAgY29uc3Qge1xyXG4gICAgICAgIGZpbHRlcnMsIFxyXG4gICAgICAgIHNldEZpbHRlclZhbHVlLCBcclxuICAgICAgICBjb3VudEZpbHRlcnMsIFxyXG4gICAgICAgIHJlc3VsdCwgXHJcbiAgICAgICAgaXNMb2FkaW5nLFxyXG4gICAgICAgIGhhbmRsZVJlc2V0LCBcclxuICAgICAgICBoYW5kbGVQYWdlQ2hhbmdlLFxyXG4gICAgICAgIHNldFNvcnRCeVxyXG4gICAgfSA9IHVzZVNlYXJjaEluZGV4KCcvJysgaTE4bi5sYW5ndWFnZSArJy9hcGkvcmVjaXBlL2luZGV4JywgaW5pdGlhbEZpbHRlcnMsIHEsIHNjcm9sbFRvcCk7XHJcblxyXG5cclxuICAgIGNvbnN0IHNvcnRDaG9pY2VzID0ge1xyXG4gICAgICAgIFsnQSAtIFonXTogJ2FscGhhYmV0X0FTQycsXHJcbiAgICAgICAgWydaIC0gQSddOiAnYWxwaGFiZXRfREVTQycsXHJcbiAgICAgICAgW3QoJ3NvcnQuY3JlYXRlZEF0X0RFU0NfZicpXTogJ2NyZWF0ZWRBdF9ERVNDJyxcclxuICAgICAgICBbdCgnc29ydC5jcmVhdGVkQXRfQVNDX2YnKV06ICdjcmVhdGVkQXRfQVNDJ1xyXG4gICAgfTtcclxuXHJcblxyXG4gICAgLy8gcG91ciDDqXZpdGVyIGRlIGRldm9pciBjaGFyZ2VyIGxlcyBpbmdyw6lkaWVudHMgZmlsdHJlcyDDoCBjaGFxdWUgZm9pcyBxdSdvbiBvdXZyZSBsZXMgZmlsdHJlcyBcclxuICAgIC8vIG9uIGNyw6llIHVuIHN0YXRlIHF1aSBjb250aWVudCBsZXMgaW5ncsOpZGllbnRzIGNvbXBsZXRzIGV0IMOgIGNoYXF1ZSBjaGFuZ2VtZW50IG9uIG1ldCDDoCBqb3VyIGZpbHRlcnMuaW5ncmVkaWVudElkc1xyXG4gICAgY29uc3QgW2luZ3JlZGllbnRGaWx0ZXJzLCBzZXRJbmdyZWRpZW50RmlsdGVyc10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgICAgICBzZXRGaWx0ZXJWYWx1ZSgnaW5ncmVkaWVudElkcycsIGluZ3JlZGllbnRGaWx0ZXJzLm1hcChpID0+IGkuaWQpKVxyXG4gICAgfSwgW2luZ3JlZGllbnRGaWx0ZXJzXSk7XHJcbiAgICAvLyBPbiBzdXJjaGFyZ2VyIGxhIG3DqXRob2RlIGhhbmRsZVJlc2V0IGF2ZWMgbGUgcmVzZXQgZGUgaW5ncmVkaWVudEZpbHRlcnNcclxuICAgIGNvbnN0IHJlc2V0QWxsID0gKCkgPT4ge1xyXG4gICAgICAgIHNldEluZ3JlZGllbnRGaWx0ZXJzKFtdKTtcclxuICAgICAgICBoYW5kbGVSZXNldCgpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vcG91ciBlbnZveWVyIGF1IHBhcmVudCBwb3VyIGFmZmljaGVyIHN1ciBsZSBib3V0b24gUHJvZHVjdCBcclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgaWYocmVzdWx0ICYmIHNldENvdW50KSB7XHJcbiAgICAgICAgICAgIHNldENvdW50KHJlc3VsdC5jb3VudCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSwgW3Jlc3VsdCwgc2V0Q291bnRdKTtcclxuXHJcbiAgICBpZighaXNPcGVuKSB7XHJcbiAgICAgICAgcmV0dXJuICcnO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9kdWN0LWluZGV4XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZHVjdC1pbmRleC1oZWFkZXJcIj5cclxuICAgICAgICAgICAgICAgIDxTZWFyY2hGaWx0ZXJzQ29udHJvbHMgXHJcbiAgICAgICAgICAgICAgICAgICAgY291bnRGaWx0ZXJzPXtjb3VudEZpbHRlcnN9XHJcbiAgICAgICAgICAgICAgICAgICAgY291bnRSZXN1bHRzPXtyZXN1bHQ/LmNvdW50fVxyXG4gICAgICAgICAgICAgICAgICAgIG9uUmVzZXQ9e3Jlc2V0QWxsfVxyXG4gICAgICAgICAgICAgICAgICAgIHNvcnRCeT17ZmlsdGVycy5zb3J0Qnl9IFxyXG4gICAgICAgICAgICAgICAgICAgIHNldFNvcnRCeT17c2V0U29ydEJ5fSBcclxuICAgICAgICAgICAgICAgICAgICBzb3J0Q2hvaWNlcz17c29ydENob2ljZXN9XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxSZWNpcGVGaWx0ZXJzIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdWJDYXRlZ29yeUlkPXtzdWJDYXRlZ29yeUlkfSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmlsdGVycz17ZmlsdGVyc30gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldEZpbHRlclZhbHVlPXtzZXRGaWx0ZXJWYWx1ZX0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGluZ3JlZGllbnRGaWx0ZXJzPXtpbmdyZWRpZW50RmlsdGVyc30gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldEluZ3JlZGllbnRGaWx0ZXJzPXtzZXRJbmdyZWRpZW50RmlsdGVyc30gXHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvU2VhcmNoRmlsdGVyc0NvbnRyb2xzPiBcclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxTZWFyY2hSZXN1bHRzIFxyXG4gICAgICAgICAgICAgICAgaXNMb2FkaW5nPXtpc0xvYWRpbmd9XHJcbiAgICAgICAgICAgICAgICByZXN1bHQ9e3Jlc3VsdH1cclxuICAgICAgICAgICAgICAgIHBhZ2VDaGFuZ2U9e2hhbmRsZVBhZ2VDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0ICYmIHJlc3VsdC5pdGVtcy5tYXAocmVjaXBlID0+IDxSZWNpcGVDYXJkIGtleT17cmVjaXBlLmlkfSByZWNpcGU9e3JlY2lwZX0gLz4pXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIDwvU2VhcmNoUmVzdWx0cz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgdXNlRmV0Y2hRU2VhcmNoIH0gZnJvbSAnLi4vLi4vQ3VzdG9tSG9vay9mZXRjaC91c2VGZXRjaFFTZWFyY2gnO1xyXG5pbXBvcnQgeyBMb2FkZXIgfSBmcm9tICcuLi9JY29uL0xvYWRlcic7XHJcbmltcG9ydCB7IFN1Z2dlc3RMaXN0IH0gZnJvbSAnLi4vU3VnZ2VzdExpc3QnO1xyXG5pbXBvcnQgeyBDbG9zZUJ1dHRvbiB9IGZyb20gJy4uL0J1dHRvbi9DbG9zZUJ1dHRvbic7XHJcbmltcG9ydCB7IFRyYXNoQnV0dG9uIH0gZnJvbSAnLi4vQnV0dG9uL1RyYXNoQnV0dG9uJztcclxuaW1wb3J0IHsgdCB9IGZyb20gJ2kxOG5leHQnO1xyXG5cclxuXHJcblxyXG5leHBvcnQgY29uc3QgRW50aXR5VHlwZVN1Z2dlc3RlZCA9ICh7ZW5kcG9pbnQsIHZhbHVlcyA9IFtdLCBzZXRWYWx1ZXMsIHJlbmRlciwgcGxhY2Vob2xkZXJ9KSA9PiB7XHJcblxyXG4gICAgY29uc3QgW3EsIHNldFFdID0gdXNlU3RhdGUoJycpO1xyXG4gICAgY29uc3QgaGFuZGxlUUNoYW5nZSA9IGUgPT4ge1xyXG4gICAgICAgIHNldFEoZS50YXJnZXQudmFsdWUpO1xyXG4gICAgfTtcclxuICAgIGNvbnN0IGhhbmRsZUVtcHR5ID0gKCkgPT4ge1xyXG4gICAgICAgIHNldFEoJycpO1xyXG4gICAgICAgIHJlc2V0U3VnZ2VzdGVkSXRlbXMoKTtcclxuICAgICAgICBpbnB1dFJlZi5jdXJyZW50LmZvY3VzKCk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgW3N1Z2dlc3RlZEl0ZW1zLCByZXNldFN1Z2dlc3RlZEl0ZW1zLCBzdWdnZXN0SXNMb2FkaW5nLCBfXSA9IHVzZUZldGNoUVNlYXJjaChlbmRwb2ludCwgcSwgMTApO1xyXG4gICAgY29uc3QgW2Vycm9yLCBzZXRFcnJvcl0gPSB1c2VTdGF0ZShudWxsKTtcclxuICAgIGNvbnN0IFt0aW1lciwgc2V0VGltZXJdID0gdXNlU3RhdGUobnVsbCk7XHJcblxyXG4gICAgY29uc3QgaGFuZGxlU2VsZWN0ID0gaXRlbSA9PiB7XHJcblxyXG4gICAgICAgIGlmKHZhbHVlcy5maW5kKHZhbHVlID0+IHZhbHVlLmlkID09PSBpdGVtLmlkKSkge1xyXG4gICAgICAgICAgICBzZXRFcnJvcih0KCdlcnJvci5hbHJlYWR5X3NlbGVjdGVkJywge25zOiAnbWVzc2FnZXMnfSkpO1xyXG4gICAgICAgICAgICBpZih0aW1lcikge1xyXG4gICAgICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHRpbWVyKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzZXRUaW1lcihcclxuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHNldEVycm9yKG51bGwpO1xyXG4gICAgICAgICAgICAgICAgfSwgMjAwMClcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgaGFuZGxlRW1wdHkoKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgc2V0VmFsdWVzKGl0ZW1zID0+IChbXHJcbiAgICAgICAgICAgIC4uLml0ZW1zLFxyXG4gICAgICAgICAgICBpdGVtXHJcbiAgICAgICAgXSkpO1xyXG4gICAgICAgIGhhbmRsZUVtcHR5KCk7XHJcbiAgICB9XHJcbiAgICBjb25zdCByZW1vdmVJdGVtID0gaXRlbSA9PiB7XHJcbiAgICAgICAgc2V0VmFsdWVzKGl0ZW1zID0+IChcclxuICAgICAgICAgICAgaXRlbXMuZmlsdGVyKGkgPT4gaS5pZCAhPT0gaXRlbS5pZClcclxuICAgICAgICApKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBpbnB1dFJlZiA9IHVzZVJlZihudWxsKTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZW50aXR5LXR5cGUtc3VnZ2VzdGVkXCI+XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHZhbHVlcyAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZXMubWFwKGl0ZW0gPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJdGVtIGtleT17aXRlbS5pZH0gaXRlbT17aXRlbX0gcmVtb3ZlSXRlbT17cmVtb3ZlSXRlbX0gcmVuZGVyPXtyZW5kZXJ9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCBcclxuICAgICAgICAgICAgICAgICAgICByZWY9e2lucHV0UmVmfVxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImVudGl0eS1zdWdnZXN0ZWQtaW5wdXRcIiBcclxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiIFxyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU9XCJxXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3F9IFxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVRQ2hhbmdlfSBcclxuICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj17cGxhY2Vob2xkZXIgPz8gJyd9IFxyXG4gICAgICAgICAgICAgICAgICAgIGF1dG9Gb2N1cz17dHJ1ZX0gXHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHN1Z2dlc3RJc0xvYWRpbmcgJiYgPExvYWRlciAvPlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICFzdWdnZXN0SXNMb2FkaW5nICYmIHEubGVuZ3RoID4gMCAmJiA8Q2xvc2VCdXR0b24gb25DbGljaz17aGFuZGxlRW1wdHl9IC8+XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgZXJyb3IgJiYgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWVycm9yXCI+e2Vycm9yfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHN1Z2dlc3RlZEl0ZW1zICYmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPFN1Z2dlc3RMaXN0IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3VnZ2VzdHM9e3N1Z2dlc3RlZEl0ZW1zfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25TZWxlY3Q9e2hhbmRsZVNlbGVjdH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xvc2U9e3Jlc2V0U3VnZ2VzdGVkSXRlbXN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZW5kZXI9eyhpdGVtLCBpc1NlbGVjdGVkKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFN1Z2dlc3RJdGVtIGtleT17aXRlbS5pZH0gaXRlbT17aXRlbX0gaXNTZWxlY3RlZD17aXNTZWxlY3RlZH0gb25TZWxlY3Q9e2hhbmRsZVNlbGVjdH0gcmVuZGVyPXtyZW5kZXJ9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcblxyXG59XHJcblxyXG5jb25zdCBTdWdnZXN0SXRlbSA9ICh7aXRlbSwgaXNTZWxlY3RlZCwgb25TZWxlY3QsIHJlbmRlcn0pID0+IHtcclxuXHJcbiAgICBjb25zdCBoYW5kbGVDbGljayA9IGUgPT4ge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBvblNlbGVjdChpdGVtKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxsaSBvbkNsaWNrPXtoYW5kbGVDbGlja30gY2xhc3NOYW1lPXsnc3VnZ2VzdC1pdGVtJyArIChpc1NlbGVjdGVkID8gJyBzZWxlY3RlZCc6ICcnKX0+XHJcbiAgICAgICAgICAgIHtyZW5kZXIoaXRlbSl9XHJcbiAgICAgICAgPC9saT5cclxuICAgIClcclxufVxyXG5cclxuXHJcbmNvbnN0IEl0ZW0gPSAoe2l0ZW0sIHJlbW92ZUl0ZW0sIHJlbmRlcn0pID0+IHtcclxuXHJcbiAgICBjb25zdCBoYW5kbGVDbGljayA9ICgpID0+IHtcclxuICAgICAgICByZW1vdmVJdGVtKGl0ZW0pXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8bGkgY2xhc3NOYW1lPVwic2hvdy1pdGVtXCI+XHJcbiAgICAgICAgICAgIDxUcmFzaEJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVDbGlja30gLz5cclxuICAgICAgICAgICAge3JlbmRlcihpdGVtKX1cclxuICAgICAgICA8L2xpPlxyXG4gICAgKVxyXG59XHJcbiIsImltcG9ydCB7IHQgfSBmcm9tICdpMThuZXh0JztcclxuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcblxyXG5leHBvcnQgY29uc3QgU3VnZ2VzdExpc3QgPSAoe2FkZGl0aW9uYWxDbGFzcywgc3VnZ2VzdHMsIG9uU2VsZWN0LCBvbkNsb3NlLCByZW5kZXJ9KSA9PiB7XHJcbiAgICAvL2Zlcm1ldHVyZSBhdSBjbGljayBzdXIgbGUgY8O0dMOpXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgICAgICBkb2N1bWVudC5ib2R5LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgb25DbG9zZSk7XHJcbiAgICAgICAgICAgIHJldHVybiAoKSA9PiBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIG9uQ2xvc2UpO1xyXG4gICAgfSwgW10pO1xyXG4gICAgLy9mZXJtZXR1cmUgw6AgbCdhcHB1aSBzdXIgVGFiXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGNsb3NlT25UYWJEb3duID0gZSA9PiB7XHJcbiAgICAgICAgICAgIGlmKGUua2V5ID09PSAnVGFiJykge1xyXG4gICAgICAgICAgICAgICAgb25DbG9zZSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgY2xvc2VPblRhYkRvd24pO1xyXG4gICAgICAgIHJldHVybiAoKSA9PiBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIGNsb3NlT25UYWJEb3duKTtcclxuICAgIH0sIFtdKTtcclxuXHJcbiAgICBcclxuICAgIC8vdXRpbGlzYXRpb24gYXUgY2xhdmllclxyXG4gICAgY29uc3QgW3NlbGVjdGVkLCBzZXRTZWxlY3RlZF0gPSB1c2VTdGF0ZShudWxsKTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IG9uS2V5RG93biA9IGUgPT4ge1xyXG4gICAgICAgICAgICBzd2l0Y2goZS5rZXkpIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgJ0Fycm93VXAnOlxyXG4gICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAgICAgICBzZXRTZWxlY3RlZChzZWxlY3RlZCA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKHNlbGVjdGVkID09PSBudWxsIHx8IHNlbGVjdGVkIDw9IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoc3VnZ2VzdHMubGVuZ3RoIC0gMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChzZWxlY3RlZCAtIDEpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAnQXJyb3dEb3duJzpcclxuICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0U2VsZWN0ZWQoc2VsZWN0ZWQgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZihzZWxlY3RlZCA9PT0gbnVsbCB8fCBzZWxlY3RlZCA+PSAoc3VnZ2VzdHMubGVuZ3RoIC0gMSkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoc2VsZWN0ZWQgKyAxKTtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6IFxyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBvbktleURvd24pO1xyXG4gICAgICAgIHJldHVybiAoKSA9PiBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdrZXlkb3duJywgb25LZXlEb3duKTtcclxuICAgIH0sIFtdKTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IG9uS2V5RG93biA9IGUgPT4ge1xyXG4gICAgICAgICAgIGlmKGUua2V5ID09PSAnRW50ZXInKSB7XHJcbiAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgICAgICAgICAgb25TZWxlY3Qoc3VnZ2VzdHNbc2VsZWN0ZWRdKTtcclxuICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBvbktleURvd24pO1xyXG4gICAgICAgIHJldHVybiAoKSA9PiBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdrZXlkb3duJywgb25LZXlEb3duKTtcclxuICAgIH0sIFtzZWxlY3RlZF0pO1xyXG5cclxuICAgIGNvbnN0IHN0b3BQcm9wYWdhdGlvbiA9IGUgPT4ge1xyXG4gICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgXHJcbiAgICAgICAgPHVsIGNsYXNzTmFtZT17YHN1Z2dlc3QtbGlzdCAke2FkZGl0aW9uYWxDbGFzc31gfSBvbkNsaWNrPXtzdG9wUHJvcGFnYXRpb259IHJvbGU9XCJsaXN0Ym94XCIgYXJpYS1sYWJlbD17dCgnc3VnZ2VzdGlvbnMnLCB7bnM6ICdtZXNzYWdlcyd9KX0+XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHN1Z2dlc3RzLm1hcCgoc3VnZ2VzdCwgaW5kZXgpID0+IHJlbmRlcihzdWdnZXN0LCBzZWxlY3RlZCA9PT0gaW5kZXgpKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgPC91bD5cclxuICAgIClcclxufVxyXG5cclxuXHJcblxyXG4gICAgXHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIlJlY2lwZUNhcmQiLCJfcmVmIiwicmVjaXBlIiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTmFtZSIsImhyZWYiLCJ0YXJnZXQiLCJzcmMiLCJwaWN0dXJlIiwicGF0aCIsImFsdCIsInRpdGxlIiwiaW5ncmVkaWVudHMiLCJtYXAiLCJpbmdyZWRpZW50IiwiaW5kZXgiLCJrZXkiLCJFeHBhbmRNb3JlSWNvbiIsInVzZVRvZ2dsZUJvb2xTdGF0ZSIsIkVudGl0eVR5cGVTdWdnZXN0ZWQiLCJ1c2VUcmFuc2xhdGlvbiIsIkluZ3JlZGllbnRGaWx0ZXIiLCJpbmdyZWRpZW50RmlsdGVycyIsInNldEluZ3JlZGllbnRGaWx0ZXJzIiwiX3VzZVRyYW5zbGF0aW9uIiwidCIsImkxOG4iLCJfdXNlVG9nZ2xlQm9vbFN0YXRlIiwiX3VzZVRvZ2dsZUJvb2xTdGF0ZTIiLCJfc2xpY2VkVG9BcnJheSIsImlzRXhwYW5kZWQiLCJ0b2dnbGVFeHBhbmQiLCJ0eXBlIiwib25DbGljayIsImxlbmd0aCIsInBsYWNlaG9sZGVyIiwiZW5kcG9pbnQiLCJsYW5ndWFnZSIsInZhbHVlcyIsInNldFZhbHVlcyIsInJlbmRlciIsIkluZ3JlZGllbnRJdGVtIiwiaWQiLCJfcmVmMiIsIm5hbWUiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsInJlY2lwZUNhdGVnb3J5IiwiU3ViQ2F0ZWdvcnlGaWx0ZXIiLCJSZWNpcGVGaWx0ZXJzIiwic3ViQ2F0ZWdvcnlJZCIsImZpbHRlcnMiLCJzZXRGaWx0ZXJWYWx1ZSIsIl91c2VTdGF0ZSIsIl91c2VTdGF0ZTIiLCJjaG9pY2VTdWJDYXRlZ29yeSIsInNldENob2ljZVN1YkNhdGVnb3J5IiwicGFyZW50Q2F0ZWdvcnkiLCJzdWJDYXRlZ29yeUlkcyIsIm9uQ2hhbmdlIiwidXNlU2VhcmNoSW5kZXgiLCJTZWFyY2hGaWx0ZXJzQ29udHJvbHMiLCJTZWFyY2hSZXN1bHRzIiwic2Nyb2xsVG9wIiwiUmVjaXBlSW5kZXgiLCJfc29ydENob2ljZXMiLCJfcmVmJGlzT3BlbiIsImlzT3BlbiIsIl9yZWYkc3ViQ2F0ZWdvcnlJZCIsIl9yZWYkcSIsInEiLCJzZXRDb3VudCIsImluaXRpYWxGaWx0ZXJzIiwiaW5ncmVkaWVudElkcyIsInBhZ2UiLCJsaW1pdCIsInNvcnRCeSIsIl91c2VTZWFyY2hJbmRleCIsImNvdW50RmlsdGVycyIsInJlc3VsdCIsImlzTG9hZGluZyIsImhhbmRsZVJlc2V0IiwiaGFuZGxlUGFnZUNoYW5nZSIsInNldFNvcnRCeSIsInNvcnRDaG9pY2VzIiwiX2RlZmluZVByb3BlcnR5IiwiaSIsInJlc2V0QWxsIiwiY291bnQiLCJjb3VudFJlc3VsdHMiLCJvblJlc2V0IiwicGFnZUNoYW5nZSIsIml0ZW1zIiwidXNlUmVmIiwidXNlRmV0Y2hRU2VhcmNoIiwiTG9hZGVyIiwiU3VnZ2VzdExpc3QiLCJDbG9zZUJ1dHRvbiIsIlRyYXNoQnV0dG9uIiwiX3JlZiR2YWx1ZXMiLCJzZXRRIiwiaGFuZGxlUUNoYW5nZSIsImUiLCJ2YWx1ZSIsImhhbmRsZUVtcHR5IiwicmVzZXRTdWdnZXN0ZWRJdGVtcyIsImlucHV0UmVmIiwiY3VycmVudCIsImZvY3VzIiwiX3VzZUZldGNoUVNlYXJjaCIsIl91c2VGZXRjaFFTZWFyY2gyIiwic3VnZ2VzdGVkSXRlbXMiLCJzdWdnZXN0SXNMb2FkaW5nIiwiXyIsIl91c2VTdGF0ZTMiLCJfdXNlU3RhdGU0IiwiZXJyb3IiLCJzZXRFcnJvciIsIl91c2VTdGF0ZTUiLCJfdXNlU3RhdGU2IiwidGltZXIiLCJzZXRUaW1lciIsImhhbmRsZVNlbGVjdCIsIml0ZW0iLCJmaW5kIiwibnMiLCJjbGVhclRpbWVvdXQiLCJzZXRUaW1lb3V0IiwiY29uY2F0IiwiX3RvQ29uc3VtYWJsZUFycmF5IiwicmVtb3ZlSXRlbSIsImZpbHRlciIsIkl0ZW0iLCJyZWYiLCJhdXRvRm9jdXMiLCJzdWdnZXN0cyIsIm9uU2VsZWN0Iiwib25DbG9zZSIsImlzU2VsZWN0ZWQiLCJTdWdnZXN0SXRlbSIsImhhbmRsZUNsaWNrIiwicHJldmVudERlZmF1bHQiLCJfcmVmMyIsImFkZGl0aW9uYWxDbGFzcyIsImRvY3VtZW50IiwiYm9keSIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiY2xvc2VPblRhYkRvd24iLCJzZWxlY3RlZCIsInNldFNlbGVjdGVkIiwib25LZXlEb3duIiwic3RvcFByb3BhZ2F0aW9uIiwicm9sZSIsInN1Z2dlc3QiXSwic291cmNlUm9vdCI6IiJ9
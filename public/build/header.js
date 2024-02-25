"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["header"],{

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

/***/ "./assets/Components/Header/HeaderBottom/CategoryMenu/CategoryLink.jsx":
/*!*****************************************************************************!*\
  !*** ./assets/Components/Header/HeaderBottom/CategoryMenu/CategoryLink.jsx ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CategoryLink": () => (/* binding */ CategoryLink)
/* harmony export */ });
/* harmony import */ var core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/web.timers.js */ "./node_modules/core-js/modules/web.timers.js");
/* harmony import */ var core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_1__);
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
/* harmony import */ var _SubCategoryMenu_SubCategoryMenu__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./SubCategoryMenu/SubCategoryMenu */ "./assets/Components/Header/HeaderBottom/CategoryMenu/SubCategoryMenu/SubCategoryMenu.jsx");
/* harmony import */ var _entrypoints_i18n__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../../../entrypoints/i18n */ "./assets/entrypoints/i18n.js");
/* harmony import */ var _UI_Button_CloseButton__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../../../UI/Button/CloseButton */ "./assets/UI/Button/CloseButton.jsx");
/* harmony import */ var _CustomHook_state_useOpenState__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../../../CustomHook/state/useOpenState */ "./assets/CustomHook/state/useOpenState.jsx");
/* harmony import */ var _UI_Flash_Flash__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../../../../UI/Flash/Flash */ "./assets/UI/Flash/Flash.jsx");
/* harmony import */ var i18next__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! i18next */ "./node_modules/i18next/dist/esm/i18next.js");

















function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }







var CategoryLink = (0,react__WEBPACK_IMPORTED_MODULE_17__.memo)(function (_ref) {
  var category = _ref.category,
    setSelected = _ref.setSelected,
    selected = _ref.selected;
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_17__.useState)(null),
    _useState2 = _slicedToArray(_useState, 2),
    openingTimer = _useState2[0],
    setOpeningTimer = _useState2[1];
  var openExpand = function openExpand() {
    if (openingTimer) {
      clearTimeout(openingTimer);
    }
    setOpeningTimer(null);
    document.body.classList.add('expand-menu-open');
    setSelected(category);
  };
  var closeExpand = function closeExpand() {
    if (openingTimer) {
      clearTimeout(openingTimer);
    }
    setOpeningTimer(null);
    buttonRef.current.classList.add('closing');
    if (expandRef.current) {
      expandRef.current.addEventListener('animationend', function (e) {
        document.body.classList.remove('expand-menu-open');
        buttonRef.current.classList.remove('closing');
        setSelected(null);
      });
    }
  };
  var handleMouseOver = function handleMouseOver(e) {
    if (e.target.classList.contains('header-bottom-link')) {
      setOpeningTimer(setTimeout(function () {
        openExpand();
      }, 400));
    } else {
      openExpand();
    }
  };
  var handleMouseLeave = function handleMouseLeave() {
    setOpeningTimer(setTimeout(function () {
      closeExpand();
    }, 300));
  };
  var handleKeyDown = function handleKeyDown(e) {
    if (e.key === 'Enter') {
      if (!selected) {
        e.preventDefault();
        e.stopPropagation();
        openExpand();
      }
    }
  };
  var handleClick = function handleClick() {
    if (selected) {
      closeExpand();
    } else {
      openExpand();
    }
  };
  var buttonRef = (0,react__WEBPACK_IMPORTED_MODULE_17__.useRef)(null);
  var expandRef = (0,react__WEBPACK_IMPORTED_MODULE_17__.useRef)(null);

  //WITHOUT_SHOP // à suppr 
  var _useOpenState = (0,_CustomHook_state_useOpenState__WEBPACK_IMPORTED_MODULE_21__.useOpenState)(false),
    _useOpenState2 = _slicedToArray(_useOpenState, 3),
    withoutShopFlashIsOpen = _useOpenState2[0],
    openWithoutShopFlash = _useOpenState2[1],
    closeWithoutShopFlash = _useOpenState2[2];
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default().createElement((react__WEBPACK_IMPORTED_MODULE_17___default().Fragment), null,
  /*#__PURE__*/
  //WITHOUT_SHOP // à suppr /////////////////////////////////////////////////
  react__WEBPACK_IMPORTED_MODULE_17___default().createElement(_UI_Flash_Flash__WEBPACK_IMPORTED_MODULE_22__.Flash, {
    button: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default().createElement("a", {
      href: (0,i18next__WEBPACK_IMPORTED_MODULE_23__.t)('url.recipe.index', {
        ns: 'urls'
      })
    }, (0,i18next__WEBPACK_IMPORTED_MODULE_23__.t)('our_recipes', {
      ns: 'messages'
    })),
    isOpen: withoutShopFlashIsOpen,
    close: closeWithoutShopFlash
  }, (0,i18next__WEBPACK_IMPORTED_MODULE_23__.t)('info.shop_will_be_open_soon', {
    ns: 'messages'
  }))
  //////////////////////////////////////////////////////////////////////////////
  , /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default().createElement("div", {
    role: "button",
    tabIndex: "0",
    className: 'header-bottom-link' + ' lang-' + _entrypoints_i18n__WEBPACK_IMPORTED_MODULE_19__["default"].language + (selected ? ' selected' : ''),
    onMouseOver: handleMouseOver,
    onClick: handleClick,
    onKeyDown: handleKeyDown,
    onMouseLeave: handleMouseLeave,
    ref: buttonRef
  }, category.name[_entrypoints_i18n__WEBPACK_IMPORTED_MODULE_19__["default"].language], selected && category.subCategories.length > 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default().createElement("div", {
    className: "header-bottom-expand",
    ref: expandRef
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default().createElement(_UI_Button_CloseButton__WEBPACK_IMPORTED_MODULE_20__.CloseButton, {
    additionalClass: "header-bottom-expand-closer",
    onClick: closeExpand
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default().createElement(_SubCategoryMenu_SubCategoryMenu__WEBPACK_IMPORTED_MODULE_18__.SubCategoryMenu, {
    category: category,
    subCategories: category.subCategories
    //WITHOUT_SHOP // à suppr
    ,
    openWithoutShopFlash: openWithoutShopFlash
  }))));
});

/***/ }),

/***/ "./assets/Components/Header/HeaderBottom/CategoryMenu/SubCategoryMenu/SubCategoryLink.jsx":
/*!************************************************************************************************!*\
  !*** ./assets/Components/Header/HeaderBottom/CategoryMenu/SubCategoryMenu/SubCategoryLink.jsx ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SubCategoryLink": () => (/* binding */ SubCategoryLink)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _entrypoints_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../entrypoints/i18n */ "./assets/entrypoints/i18n.js");



var SubCategoryLink = function SubCategoryLink(_ref) {
  var subCategory = _ref.subCategory,
    onClick = _ref.onClick;
  //WITHOUT_SHOP // suppr onClick

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("li", {
    className: "subcategory-item"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("a", {
    className: "subcategory-link",
    href: subCategory.target[_entrypoints_i18n__WEBPACK_IMPORTED_MODULE_2__["default"].language],
    onClick: onClick
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
    className: "subcategory-item-img-wrapper"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("img", {
    className: "subcategory-item-img",
    src: '/img/categories/' + subCategory.picture.path,
    alt: subCategory.picture.alt[_entrypoints_i18n__WEBPACK_IMPORTED_MODULE_2__["default"].language]
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("span", {
    className: "subcategory-item-text"
  }, subCategory.name[_entrypoints_i18n__WEBPACK_IMPORTED_MODULE_2__["default"].language])));
};

/***/ }),

/***/ "./assets/Components/Header/HeaderBottom/CategoryMenu/SubCategoryMenu/SubCategoryMenu.jsx":
/*!************************************************************************************************!*\
  !*** ./assets/Components/Header/HeaderBottom/CategoryMenu/SubCategoryMenu/SubCategoryMenu.jsx ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SubCategoryMenu": () => (/* binding */ SubCategoryMenu)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.includes.js */ "./node_modules/core-js/modules/es.array.includes.js");
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.map.js */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _SubCategoryLink__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./SubCategoryLink */ "./assets/Components/Header/HeaderBottom/CategoryMenu/SubCategoryMenu/SubCategoryLink.jsx");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");
/* harmony import */ var _CustomHook_useGetUser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../CustomHook/useGetUser */ "./assets/CustomHook/useGetUser.jsx");







var SubCategoryMenu = function SubCategoryMenu(_ref) {
  var category = _ref.category,
    subCategories = _ref.subCategories,
    openWithoutShopFlash = _ref.openWithoutShopFlash;
  var _useTranslation = (0,react_i18next__WEBPACK_IMPORTED_MODULE_5__.useTranslation)('messages'),
    t = _useTranslation.t,
    i18n = _useTranslation.i18n;

  //WITHOUT_SHOP // a supprimer // supprimer openWithoutShopFlash en haut dans props aussi
  var _useGetUser = (0,_CustomHook_useGetUser__WEBPACK_IMPORTED_MODULE_6__.useGetUser)(),
    user = _useGetUser.user,
    updateUser = _useGetUser.updateUser;
  var handleClick = function handleClick(e) {
    console.log(category);
    if (category.name.en === 'Recipes') {
      return;
    }
    if (!user || !['consumer@email.com', 'pro@email.com', 'vendor@email.com'].includes(user.email)) {
      e.preventDefault();
      openWithoutShopFlash();
    }
  };
  ////////////////////////////////////////////////////////////////

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("nav", {
    className: "header-bottom-subnav"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("ul", null, subCategories.map(function (subCategory) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_SubCategoryLink__WEBPACK_IMPORTED_MODULE_4__.SubCategoryLink, {
      key: subCategory.id,
      subCategory: subCategory
      //WITHOUT_SHOP // à suppr
      ,
      onClick: handleClick
    });
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("div", {
    className: "search-link"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("a", {
    className: "form-button bordeaux outline",
    href: category.target[i18n.language]
    //WITHOUT_SHOP // à suppr
    ,
    onClick: handleClick
  }, t('see_entire_category', {
    category: category.name[i18n.language]
  }))));
};

/***/ }),

/***/ "./assets/Components/Header/HeaderBottom/CategoryMenu/index.jsx":
/*!**********************************************************************!*\
  !*** ./assets/Components/Header/HeaderBottom/CategoryMenu/index.jsx ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CategoryMenu": () => (/* binding */ CategoryMenu)
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
/* harmony import */ var _CategoryLink__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./CategoryLink */ "./assets/Components/Header/HeaderBottom/CategoryMenu/CategoryLink.jsx");
/* harmony import */ var _styles_Header_HeaderBottom_categoryMenu_css__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../../../styles/Header/HeaderBottom/categoryMenu.css */ "./assets/styles/Header/HeaderBottom/categoryMenu.css");

















function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }



var CategoryMenu = function CategoryMenu(_ref) {
  var categories = _ref.categories;
  //sélection des catégories
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_17__.useState)(null),
    _useState2 = _slicedToArray(_useState, 2),
    selectedCategory = _useState2[0],
    setSelectedCategory = _useState2[1];
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default().createElement("nav", {
    className: "header-bottom-nav"
  }, categories.map(function (category) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default().createElement(_CategoryLink__WEBPACK_IMPORTED_MODULE_18__.CategoryLink, {
      key: category.id,
      category: category,
      selected: selectedCategory === category,
      setSelected: setSelectedCategory
    });
  }));
};

/***/ }),

/***/ "./assets/Components/Header/HeaderBottom/index.jsx":
/*!*********************************************************!*\
  !*** ./assets/Components/Header/HeaderBottom/index.jsx ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HeaderBottom": () => (/* binding */ HeaderBottom)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _CategoryMenu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CategoryMenu */ "./assets/Components/Header/HeaderBottom/CategoryMenu/index.jsx");
/* harmony import */ var _styles_Header_HeaderBottom_index_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../styles/Header/HeaderBottom/index.css */ "./assets/styles/Header/HeaderBottom/index.css");



var HeaderBottom = (0,react__WEBPACK_IMPORTED_MODULE_0__.memo)(function (_ref) {
  var categories = _ref.categories,
    activeCategory = _ref.activeCategory,
    activeSubCategory = _ref.activeSubCategory;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "header-bottom"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_CategoryMenu__WEBPACK_IMPORTED_MODULE_1__.CategoryMenu, {
    categories: categories
  }));
});

/***/ }),

/***/ "./assets/Components/Header/HeaderPub/index.jsx":
/*!******************************************************!*\
  !*** ./assets/Components/Header/HeaderPub/index.jsx ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HeaderPub": () => (/* binding */ HeaderPub)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");


var HeaderPub = function HeaderPub() {
  var _useTranslation = (0,react_i18next__WEBPACK_IMPORTED_MODULE_1__.useTranslation)('messages'),
    t = _useTranslation.t;

  // const pubRef = useRef(null);
  // const pubWrapperRef = useRef(null);
  // const [posX, setPosX] = useState(0);
  // useEffect(() => {
  //     if(pubWrapperRef.current) {
  //         const width = pubRef.current.offsetWidth;
  //         if((width + 40) > window.innerWidth) {
  //             //si le texte dépasse de l'écran on le fait avancer et on l'aligne à gauche
  //             pubWrapperRef.current.style.justifyContent = 'flex-start';
  //             //pour faire arriver le texte de la droite au début
  //             setPosX(window.innerWidth + 20);
  //             const interval = setInterval(() => {
  //                 setPosX(prevPos => {
  //                     if(prevPos < (0 - width)) {
  //                         return window.innerWidth;
  //                     }
  //                     return prevPos - 1;
  //                 });
  //             }, 8);
  //             return () => clearInterval(interval);
  //         }
  //     }
  // }, [pubWrapperRef.current]);

  // useEffect(() => {
  //     pubRef.current.style.left = posX + 'px';
  // }, [posX]);

  return (
    /*#__PURE__*/
    // <div ref={pubWrapperRef} className="header-pub">
    //     <p ref={pubRef}>{t('header_pub')}</p>
    // </div>
    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "header-pub"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
      className: "header-pub-small"
    }, t('header_pub_small')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
      className: "header-pub-large"
    }, t('header_pub')))
  );
};

/***/ }),

/***/ "./assets/Components/Header/HeaderTop/AccountControl/AccountCard/AccountCardHeader.jsx":
/*!*********************************************************************************************!*\
  !*** ./assets/Components/Header/HeaderTop/AccountControl/AccountCard/AccountCardHeader.jsx ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AccountCardHeader": () => (/* binding */ AccountCardHeader)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.includes.js */ "./node_modules/core-js/modules/es.array.includes.js");
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.string.includes.js */ "./node_modules/core-js/modules/es.string.includes.js");
/* harmony import */ var core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _UI_Badge_RoleBadge__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../UI/Badge/RoleBadge */ "./assets/UI/Badge/RoleBadge.jsx");
/* harmony import */ var _UI_Badge_AccountBadge__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../UI/Badge/AccountBadge */ "./assets/UI/Badge/AccountBadge.jsx");
/* harmony import */ var i18next__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! i18next */ "./node_modules/i18next/dist/esm/i18next.js");






var AccountCardHeader = function AccountCardHeader(_ref) {
  var user = _ref.user;
  var accountPath = user.roles.includes('ROLE_VENDOR') && user.company ? (0,i18next__WEBPACK_IMPORTED_MODULE_5__.t)('url.vendorAccount.index', {
    ns: 'urls'
  }) : (0,i18next__WEBPACK_IMPORTED_MODULE_5__.t)('url.customerAccount.index', {
    ns: 'urls'
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", {
    className: "account-card-header"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", {
    className: "account-card-text"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("a", {
    className: "box-link",
    href: accountPath
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(AccountCardTitle, {
    user: user
  }))));
};
var AccountCardTitle = function AccountCardTitle(_ref2) {
  var user = _ref2.user;
  if (user.roles.includes('ROLE_PRO')) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(ProAccountCardTitle, {
      user: user
    });
  } else if (user.roles.includes('ROLE_ADMIN')) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(AdminAccountCardTitle, {
      user: user
    });
  }
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(UserAccountCardTitle, {
    user: user
  });
};
var ProAccountCardTitle = function ProAccountCardTitle(_ref3) {
  var _user$company;
  var user = _ref3.user;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement((react__WEBPACK_IMPORTED_MODULE_2___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", {
    className: "account-card-header-title"
  }, (_user$company = user.company) !== null && _user$company !== void 0 && _user$company.logo ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("img", {
    className: "account-card-logo",
    src: user.company.logo.path,
    alt: user.company.logo.alt
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_UI_Badge_AccountBadge__WEBPACK_IMPORTED_MODULE_4__.AccountBadge, {
    user: user
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", {
    className: "account-card-header-title-text"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", {
    className: "account-card-header-strong"
  }, user.company.usualName), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_UI_Badge_RoleBadge__WEBPACK_IMPORTED_MODULE_3__.RoleBadge, {
    roles: user.roles
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", {
    className: "account-card-header-subtitle-text"
  }, user.email));
};
var AdminAccountCardTitle = function AdminAccountCardTitle(_ref4) {
  var user = _ref4.user;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement((react__WEBPACK_IMPORTED_MODULE_2___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", {
    className: "account-card-header-title"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_UI_Badge_AccountBadge__WEBPACK_IMPORTED_MODULE_4__.AccountBadge, {
    user: user
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", {
    className: "account-card-header-title-text"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", {
    className: "capitalize"
  }, (0,i18next__WEBPACK_IMPORTED_MODULE_5__.t)(user.civility, {
    ns: 'configs'
  }), " ", user.firstName, " ", user.lastName), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_UI_Badge_RoleBadge__WEBPACK_IMPORTED_MODULE_3__.RoleBadge, {
    roles: user.roles
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", {
    className: "account-card-header-subtitle-text"
  }, user.email));
};
var UserAccountCardTitle = function UserAccountCardTitle(_ref5) {
  var user = _ref5.user;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", {
    className: "account-card-header-title"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_UI_Badge_AccountBadge__WEBPACK_IMPORTED_MODULE_4__.AccountBadge, {
    user: user
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", {
    className: "account-card-header-title-text"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", {
    className: "capitalize"
  }, (0,i18next__WEBPACK_IMPORTED_MODULE_5__.t)(user.civility, {
    ns: 'configs'
  }), " ", user.firstName, " ", user.lastName), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", null, user.email)));
};

/***/ }),

/***/ "./assets/Components/Header/HeaderTop/AccountControl/AccountCard/AccountCardMenu/CustomerMenu.jsx":
/*!********************************************************************************************************!*\
  !*** ./assets/Components/Header/HeaderTop/AccountControl/AccountCard/AccountCardMenu/CustomerMenu.jsx ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CustomerMenu": () => (/* binding */ CustomerMenu)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _UI_Icon_Arrows_RightArrowBarIcon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../UI/Icon/Arrows/RightArrowBarIcon */ "./assets/UI/Icon/Arrows/RightArrowBarIcon.jsx");
/* harmony import */ var i18next__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! i18next */ "./node_modules/i18next/dist/esm/i18next.js");



var CustomerMenu = function CustomerMenu() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "account-card-controls"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    className: "account-card-link i-text",
    href: (0,i18next__WEBPACK_IMPORTED_MODULE_2__.t)('url.customerAccount.details', {
      ns: 'urls'
    })
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_UI_Icon_Arrows_RightArrowBarIcon__WEBPACK_IMPORTED_MODULE_1__.RightArrowBarIcon, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, (0,i18next__WEBPACK_IMPORTED_MODULE_2__.t)('customerAccount.details.label', {
    ns: 'routes'
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    className: "account-card-link i-text",
    href: (0,i18next__WEBPACK_IMPORTED_MODULE_2__.t)('url.customerAccount.purchase', {
      ns: 'urls'
    })
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_UI_Icon_Arrows_RightArrowBarIcon__WEBPACK_IMPORTED_MODULE_1__.RightArrowBarIcon, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, (0,i18next__WEBPACK_IMPORTED_MODULE_2__.t)('customerAccount.purchase.label', {
    ns: 'routes'
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    className: "account-card-link i-text",
    href: (0,i18next__WEBPACK_IMPORTED_MODULE_2__.t)('url.customerAccount.address', {
      ns: 'urls'
    })
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_UI_Icon_Arrows_RightArrowBarIcon__WEBPACK_IMPORTED_MODULE_1__.RightArrowBarIcon, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, (0,i18next__WEBPACK_IMPORTED_MODULE_2__.t)('customerAccount.address.label', {
    ns: 'routes'
  }))));
};

/***/ }),

/***/ "./assets/Components/Header/HeaderTop/AccountControl/AccountCard/AccountCardMenu/VendorMenu.jsx":
/*!******************************************************************************************************!*\
  !*** ./assets/Components/Header/HeaderTop/AccountControl/AccountCard/AccountCardMenu/VendorMenu.jsx ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VendorMenu": () => (/* binding */ VendorMenu)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _UI_Icon_Arrows_RightArrowBarIcon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../UI/Icon/Arrows/RightArrowBarIcon */ "./assets/UI/Icon/Arrows/RightArrowBarIcon.jsx");
/* harmony import */ var _UI_Badge_WarningBadge__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../UI/Badge/WarningBadge */ "./assets/UI/Badge/WarningBadge.jsx");
/* harmony import */ var i18next__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! i18next */ "./node_modules/i18next/dist/esm/i18next.js");




var VendorMenu = function VendorMenu(_ref) {
  var vendor = _ref.vendor;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "account-card-controls vendor-controls"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    className: "account-card-link i-text",
    href: !vendor.stripeConfirmed ? (0,i18next__WEBPACK_IMPORTED_MODULE_3__.t)('url.vendorAccount.details.payment', {
      ns: 'urls'
    }) : (0,i18next__WEBPACK_IMPORTED_MODULE_3__.t)('url.vendorAccount.details.index', {
      ns: 'urls'
    })
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_UI_Icon_Arrows_RightArrowBarIcon__WEBPACK_IMPORTED_MODULE_1__.RightArrowBarIcon, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, (0,i18next__WEBPACK_IMPORTED_MODULE_3__.t)('vendorAccount.details.index.label', {
    ns: 'routes'
  })), !vendor.stripeConfirmed && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_UI_Badge_WarningBadge__WEBPACK_IMPORTED_MODULE_2__.WarningBadge, {
    number: 1
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    className: "account-card-link i-text badge-owner",
    href: (0,i18next__WEBPACK_IMPORTED_MODULE_3__.t)('url.vendorAccount.buyerSpace.index', {
      ns: 'urls'
    })
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_UI_Icon_Arrows_RightArrowBarIcon__WEBPACK_IMPORTED_MODULE_1__.RightArrowBarIcon, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, (0,i18next__WEBPACK_IMPORTED_MODULE_3__.t)('vendorAccount.buyerSpace.index.label', {
    ns: 'routes'
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    className: "account-card-link i-text",
    href: (0,i18next__WEBPACK_IMPORTED_MODULE_3__.t)('url.vendorAccount.vendorSpace.index', {
      ns: 'urls'
    })
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_UI_Icon_Arrows_RightArrowBarIcon__WEBPACK_IMPORTED_MODULE_1__.RightArrowBarIcon, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, (0,i18next__WEBPACK_IMPORTED_MODULE_3__.t)('vendorAccount.vendorSpace.index.label', {
    ns: 'routes'
  }))));
};

/***/ }),

/***/ "./assets/Components/Header/HeaderTop/AccountControl/AccountCard/AnonymousAccountCardBody.jsx":
/*!****************************************************************************************************!*\
  !*** ./assets/Components/Header/HeaderTop/AccountControl/AccountCard/AnonymousAccountCardBody.jsx ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AnonymousAccountCardBody": () => (/* binding */ AnonymousAccountCardBody)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _UI_Button_LinkButton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../UI/Button/LinkButton */ "./assets/UI/Button/LinkButton.jsx");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");



var AnonymousAccountCardBody = function AnonymousAccountCardBody() {
  var _useTranslation = (0,react_i18next__WEBPACK_IMPORTED_MODULE_2__.useTranslation)('messages'),
    t = _useTranslation.t;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "account-card-body empty"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "account-card-text"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, t('info.not_logged'))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_UI_Button_LinkButton__WEBPACK_IMPORTED_MODULE_1__.LinkButton, {
    additionalClass: "bordeaux",
    href: t('url.security.login', {
      ns: 'urls'
    })
  }, t('login')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_UI_Button_LinkButton__WEBPACK_IMPORTED_MODULE_1__.LinkButton, {
    additionalClass: "cancel",
    href: t('url.security.register', {
      ns: 'urls'
    })
  }, t('registration')));
};

/***/ }),

/***/ "./assets/Components/Header/HeaderTop/AccountControl/AccountCard/index.jsx":
/*!*********************************************************************************!*\
  !*** ./assets/Components/Header/HeaderTop/AccountControl/AccountCard/index.jsx ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AccountCard": () => (/* binding */ AccountCard)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.includes.js */ "./node_modules/core-js/modules/es.array.includes.js");
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.string.includes.js */ "./node_modules/core-js/modules/es.string.includes.js");
/* harmony import */ var core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _UI_Icon_Loader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../UI/Icon/Loader */ "./assets/UI/Icon/Loader.jsx");
/* harmony import */ var _UI_Button_LogoutButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../UI/Button/LogoutButton */ "./assets/UI/Button/LogoutButton.jsx");
/* harmony import */ var _AnonymousAccountCardBody__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./AnonymousAccountCardBody */ "./assets/Components/Header/HeaderTop/AccountControl/AccountCard/AnonymousAccountCardBody.jsx");
/* harmony import */ var _AccountCardHeader__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./AccountCardHeader */ "./assets/Components/Header/HeaderTop/AccountControl/AccountCard/AccountCardHeader.jsx");
/* harmony import */ var _AccountCardMenu_CustomerMenu__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./AccountCardMenu/CustomerMenu */ "./assets/Components/Header/HeaderTop/AccountControl/AccountCard/AccountCardMenu/CustomerMenu.jsx");
/* harmony import */ var _AccountCardMenu_VendorMenu__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./AccountCardMenu/VendorMenu */ "./assets/Components/Header/HeaderTop/AccountControl/AccountCard/AccountCardMenu/VendorMenu.jsx");









var AccountCard = function AccountCard(_ref) {
  var close = _ref.close,
    user = _ref.user,
    updateUser = _ref.updateUser;
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {
    document.body.addEventListener('click', close);
    return function () {
      return document.body.removeEventListener('click', close);
    };
  }, []);
  var handleClick = function handleClick(e) {
    e.stopPropagation();
  };
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {
    updateUser();
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", {
    className: "account-card-wrapper"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", {
    className: 'account-card' + (user ? ' account-card-logged' : ''),
    onClick: handleClick
  }, user === null && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_UI_Icon_Loader__WEBPACK_IMPORTED_MODULE_3__.Loader, {
    additionalClass: "main-loader",
    lang: "en"
  }), user === false && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_AnonymousAccountCardBody__WEBPACK_IMPORTED_MODULE_5__.AnonymousAccountCardBody, null), user && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement((react__WEBPACK_IMPORTED_MODULE_2___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_AccountCardHeader__WEBPACK_IMPORTED_MODULE_6__.AccountCardHeader, {
    user: user
  }), user.roles.includes('ROLE_VENDOR') && user.company ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_AccountCardMenu_VendorMenu__WEBPACK_IMPORTED_MODULE_8__.VendorMenu, {
    vendor: user
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_AccountCardMenu_CustomerMenu__WEBPACK_IMPORTED_MODULE_7__.CustomerMenu, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", {
    className: "account-card-footer"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_UI_Button_LogoutButton__WEBPACK_IMPORTED_MODULE_4__.LogoutButton, null)))));
};

/***/ }),

/***/ "./assets/Components/Header/HeaderTop/AccountControl/index.jsx":
/*!*********************************************************************!*\
  !*** ./assets/Components/Header/HeaderTop/AccountControl/index.jsx ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AccountControl": () => (/* binding */ AccountControl),
/* harmony export */   "useTimer": () => (/* binding */ useTimer)
/* harmony export */ });
/* harmony import */ var core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/web.timers.js */ "./node_modules/core-js/modules/web.timers.js");
/* harmony import */ var core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.includes.js */ "./node_modules/core-js/modules/es.array.includes.js");
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.string.includes.js */ "./node_modules/core-js/modules/es.string.includes.js");
/* harmony import */ var core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.is-array.js */ "./node_modules/core-js/modules/es.array.is-array.js");
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_6__);
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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var _CustomHook_state_useOpenState__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../../../CustomHook/state/useOpenState */ "./assets/CustomHook/state/useOpenState.jsx");
/* harmony import */ var _UI_Button_AccountButton__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../../../UI/Button/AccountButton */ "./assets/UI/Button/AccountButton.jsx");
/* harmony import */ var _styles_header_HeaderTop_accountCard_css__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../../../../styles/header/HeaderTop/accountCard.css */ "./assets/styles/header/HeaderTop/accountCard.css");
/* harmony import */ var _CustomHook_listener_useTouchingListener__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../../../../CustomHook/listener/useTouchingListener */ "./assets/CustomHook/listener/useTouchingListener.jsx");
/* harmony import */ var _UI_Badge_WarningBadge__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../../../../UI/Badge/WarningBadge */ "./assets/UI/Badge/WarningBadge.jsx");
/* harmony import */ var _AccountCard__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./AccountCard */ "./assets/Components/Header/HeaderTop/AccountControl/AccountCard/index.jsx");



















function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }








/**
 * 
 * @param {number} timeout (ms)
 */
var useTimer = function useTimer() {
  var timeout = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 300;
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_19__.useState)(null),
    _useState2 = _slicedToArray(_useState, 2),
    timer = _useState2[0],
    setTimer = _useState2[1];
  var clearTimer = function clearTimer() {
    if (timer) {
      clearTimeout(timer);
      setTimer(null);
    }
  };
  var startTimer = function startTimer(toDo) {
    setTimer(setTimeout(function () {
      toDo();
    }, timeout));
  };
  return [startTimer, clearTimer];
};
var AccountControl = function AccountControl(_ref) {
  var user = _ref.user,
    updateUser = _ref.updateUser;
  var _useOpenState = (0,_CustomHook_state_useOpenState__WEBPACK_IMPORTED_MODULE_20__.useOpenState)(false),
    _useOpenState2 = _slicedToArray(_useOpenState, 3),
    isOpen = _useOpenState2[0],
    open = _useOpenState2[1],
    close = _useOpenState2[2];
  var _useTimer = useTimer(300),
    _useTimer2 = _slicedToArray(_useTimer, 2),
    startTimer = _useTimer2[0],
    clearTimer = _useTimer2[1];
  var isTouching = (0,_CustomHook_listener_useTouchingListener__WEBPACK_IMPORTED_MODULE_23__.useTouchingListener)();
  var handleClick = function handleClick(e) {
    e.stopPropagation();
    if (isOpen) {
      e.preventDefault();
      close();
    } else {
      e.preventDefault();
      open();
    }
  };
  var handleMouseLeave = function handleMouseLeave() {
    if (isTouching) {
      return; // si on est sur écran tactile on veut pas que ça interfère avec le onClick
    }

    clearTimer();
    startTimer(close);
  };
  var handleMouseOver = function handleMouseOver() {
    if (isTouching) {
      return; // si on est sur écran tactile on veut pas que ça interfère avec le onClick
    }

    clearTimer();
    startTimer(open);
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_19___default().createElement(_UI_Button_AccountButton__WEBPACK_IMPORTED_MODULE_21__.AccountButton, {
    additionalClass: "account-opener badge-owner",
    onMouseOver: handleMouseOver,
    onMouseLeave: handleMouseLeave,
    onClick: handleClick,
    user: user
  }, isOpen && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_19___default().createElement(_AccountCard__WEBPACK_IMPORTED_MODULE_25__.AccountCard, {
    close: close,
    user: user,
    updateUser: updateUser
  }), user && user.roles.includes('ROLE_VENDOR') && !user.stripeConfirmed && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_19___default().createElement(_UI_Badge_WarningBadge__WEBPACK_IMPORTED_MODULE_24__.WarningBadge, null));
};

/***/ }),

/***/ "./assets/Components/Header/HeaderTop/CartControl/Cart/CartLine.jsx":
/*!**************************************************************************!*\
  !*** ./assets/Components/Header/HeaderTop/CartControl/Cart/CartLine.jsx ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CartLine": () => (/* binding */ CartLine)
/* harmony export */ });
/* harmony import */ var core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/web.timers.js */ "./node_modules/core-js/modules/web.timers.js");
/* harmony import */ var core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_0__);
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
/* harmony import */ var _UI_Icon_Quantity_MinusIcon__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../../../UI/Icon/Quantity/MinusIcon */ "./assets/UI/Icon/Quantity/MinusIcon.jsx");
/* harmony import */ var _UI_Icon_Quantity_PlusIcon__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../../../../UI/Icon/Quantity/PlusIcon */ "./assets/UI/Icon/Quantity/PlusIcon.jsx");
/* harmony import */ var _UI_Utils_RemoveConfirm__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../../../../UI/Utils/RemoveConfirm */ "./assets/UI/Utils/RemoveConfirm.jsx");
/* harmony import */ var _UI_Product_PriceShow__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../../../../UI/Product/PriceShow */ "./assets/UI/Product/PriceShow.jsx");
/* harmony import */ var _UI_Button_TrashButton__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../../../../../UI/Button/TrashButton */ "./assets/UI/Button/TrashButton.jsx");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");

















function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }







var CartLine = (0,react__WEBPACK_IMPORTED_MODULE_17__.memo)(function (_ref) {
  var cartLine = _ref.cartLine,
    error = _ref.error,
    remove = _ref.remove,
    setQuantity = _ref.setQuantity;
  var _useTranslation = (0,react_i18next__WEBPACK_IMPORTED_MODULE_23__.useTranslation)('messages'),
    t = _useTranslation.t;
  var handleAdd = function handleAdd(e) {
    e.preventDefault();
    setQuantity(cartLine.packaging.id, cartLine.quantity + 1);
    //obligatoire pour affichage temporaire de l'erreur
    renderError();
  };
  var handleLess = function handleLess(e) {
    e.preventDefault();
    setQuantity(cartLine.packaging.id, cartLine.quantity - 1);
    //obligatoire pour affichage temporaire de l'erreur
    renderError();
  };

  //obligatoire pour l'affichage temporaire de l'erreur
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_17__.useState)(null),
    _useState2 = _slicedToArray(_useState, 2),
    errorMessage = _useState2[0],
    setErrorMessage = _useState2[1];
  (0,react__WEBPACK_IMPORTED_MODULE_17__.useEffect)(function () {
    renderError();
  }, [error]);
  var renderError = function renderError() {
    setErrorMessage(error);
    setTimeout(function () {
      setErrorMessage(null);
    }, 2000);
  };

  //pour mettre un espace sous la ligne au moment du cart removing
  var cartLineRef = (0,react__WEBPACK_IMPORTED_MODULE_17__.useRef)(null);
  //confirmation on cart item remove
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_17__.useState)(false),
    _useState4 = _slicedToArray(_useState3, 2),
    removing = _useState4[0],
    setRemoving = _useState4[1];
  var handleRemoveClick = function handleRemoveClick() {
    setRemoving(true);
    cartLineRef.current.classList.add('removing');
  };
  var handleConfirmRemove = function handleConfirmRemove() {
    remove(cartLine.packaging.id);
  };
  var handleCancelRemove = function handleCancelRemove() {
    setRemoving(false);
    cartLineRef.current.classList.remove('removing');
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default().createElement("li", {
    className: 'cart-line-wrapper' + (removing ? ' remove-confirm' : ''),
    ref: cartLineRef
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default().createElement("div", {
    className: "cart-line"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default().createElement("a", {
    className: "cart-line-img-link",
    href: cartLine.packaging.target
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default().createElement("img", {
    className: "cart-line-img",
    src: cartLine.packaging.product.firstPicture.path,
    alt: cartLine.packaging.product.firstPicture.alt
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default().createElement("div", {
    className: "cart-line-body"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default().createElement("h3", {
    className: "cart-line-title"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default().createElement("a", {
    href: cartLine.packaging.target
  }, cartLine.packaging.product.designation)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default().createElement("div", {
    className: "cart-line-sub-text"
  }, cartLine.packaging.label), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default().createElement("div", {
    className: "cart-line-text cart-line-price"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default().createElement(_UI_Product_PriceShow__WEBPACK_IMPORTED_MODULE_21__.PriceShow, {
    price: cartLine.unitPrice
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default().createElement("div", {
    className: "cart-line-text row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default().createElement("div", {
    className: "cart-line-row-item cart-line-quantity-row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default().createElement("button", {
    disabled: removing,
    className: "cart-line-minus",
    onClick: handleLess,
    "aria-label": t('quantity_minus'),
    title: t('quantity_minus')
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default().createElement(_UI_Icon_Quantity_MinusIcon__WEBPACK_IMPORTED_MODULE_18__.MinusIcon, null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default().createElement("span", {
    className: "cart-line-quantity"
  }, cartLine.quantity), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default().createElement("button", {
    disabled: removing,
    className: "cart-line-plus",
    onClick: handleAdd,
    "aria-label": t('quantity_plus'),
    title: t('quantity_plus')
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default().createElement(_UI_Icon_Quantity_PlusIcon__WEBPACK_IMPORTED_MODULE_19__.PlusIcon, null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default().createElement("div", {
    className: "cart-line-row-item"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default().createElement(_UI_Product_PriceShow__WEBPACK_IMPORTED_MODULE_21__.PriceShow, {
    price: cartLine.totalPrice
  }))), errorMessage && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default().createElement("div", {
    className: "form-error"
  }, errorMessage)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default().createElement(_UI_Button_TrashButton__WEBPACK_IMPORTED_MODULE_22__.TrashButton, {
    additionalClass: "icon-button cart-line-remover",
    onClick: handleRemoveClick
  })), removing && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default().createElement(_UI_Utils_RemoveConfirm__WEBPACK_IMPORTED_MODULE_20__.RemoveConfirm, {
    onConfirm: handleConfirmRemove,
    close: handleCancelRemove
  }));
});

/***/ }),

/***/ "./assets/Components/Header/HeaderTop/CartControl/Cart/CartVendorGroup.jsx":
/*!*********************************************************************************!*\
  !*** ./assets/Components/Header/HeaderTop/CartControl/Cart/CartVendorGroup.jsx ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CartVendorGroup": () => (/* binding */ CartVendorGroup)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.map.js */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _CartLine__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CartLine */ "./assets/Components/Header/HeaderTop/CartControl/Cart/CartLine.jsx");
/* harmony import */ var _UI_Stars_IndexReviewStars__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../UI/Stars/IndexReviewStars */ "./assets/UI/Stars/IndexReviewStars.jsx");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");





var CartVendorGroup = function CartVendorGroup(_ref) {
  var _ref$cartVendorGroup = _ref.cartVendorGroup,
    vendor = _ref$cartVendorGroup.vendor,
    cartLines = _ref$cartVendorGroup.cartLines,
    remove = _ref.remove,
    setQuantity = _ref.setQuantity;
  var _useTranslation = (0,react_i18next__WEBPACK_IMPORTED_MODULE_4__.useTranslation)('messages'),
    t = _useTranslation.t;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
    className: "cart-vendor-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
    className: "cart-vendor-group-title"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
    className: "left"
  }, t('sent_by')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
    className: "center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("a", {
    className: "cart-vendor-group-title-link ws-nowrap",
    href: vendor.target
  }, vendor.company.usualName), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_UI_Stars_IndexReviewStars__WEBPACK_IMPORTED_MODULE_3__.IndexReviewStars, {
    note: vendor.reviewNote,
    count: vendor.countReviews
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
    className: "right cart-vendor-group-separator"
  })), cartLines.map(function (cartLine) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_CartLine__WEBPACK_IMPORTED_MODULE_2__.CartLine, {
      key: cartLine.packaging.id,
      cartLine: cartLine,
      error: cartLine.error,
      remove: remove,
      setQuantity: setQuantity
    });
  }));
};

/***/ }),

/***/ "./assets/Components/Header/HeaderTop/CartControl/Cart/index.jsx":
/*!***********************************************************************!*\
  !*** ./assets/Components/Header/HeaderTop/CartControl/Cart/index.jsx ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Cart": () => (/* binding */ Cart)
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
/* harmony import */ var _UI_Icon_Loader__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../../../UI/Icon/Loader */ "./assets/UI/Icon/Loader.jsx");
/* harmony import */ var _CustomHook_form_useButtonLoading__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../../../../CustomHook/form/useButtonLoading */ "./assets/CustomHook/form/useButtonLoading.jsx");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");
/* harmony import */ var _UI_Product_PriceShow__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../../../../UI/Product/PriceShow */ "./assets/UI/Product/PriceShow.jsx");
/* harmony import */ var _CartVendorGroup__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./CartVendorGroup */ "./assets/Components/Header/HeaderTop/CartControl/Cart/CartVendorGroup.jsx");

















function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }






var Cart = function Cart(_ref) {
  var _cart$count;
  var cart = _ref.cart,
    fetchCart = _ref.fetchCart,
    remove = _ref.remove,
    setQuantity = _ref.setQuantity;
  var _useTranslation = (0,react_i18next__WEBPACK_IMPORTED_MODULE_20__.useTranslation)('messages'),
    t = _useTranslation.t;
  var _useButtonLoading = (0,_CustomHook_form_useButtonLoading__WEBPACK_IMPORTED_MODULE_19__.useButtonLoading)(),
    _useButtonLoading2 = _slicedToArray(_useButtonLoading, 2),
    buttonLoading = _useButtonLoading2[0],
    handleButtonClick = _useButtonLoading2[1];

  //on fetch à la première ouverture du cart, et sinon uniquement si un add a été fait sur product index ou product show
  (0,react__WEBPACK_IMPORTED_MODULE_17__.useEffect)(function () {
    if (sessionStorage.getItem('cart-update') === 'true') {
      sessionStorage.setItem('cart-update', 'false');
      fetchCart();
    }
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default().createElement("div", {
    className: "cart-modal"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default().createElement("div", {
    className: "cart-header side-menu-header"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default().createElement("h2", {
    className: "cart-title"
  }, t('cart'), " (", (_cart$count = cart.count) !== null && _cart$count !== void 0 ? _cart$count : '0', ")")), cart.generalLoading && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default().createElement("div", {
    className: "cart-sub-header"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default().createElement(_UI_Icon_Loader__WEBPACK_IMPORTED_MODULE_18__.Loader, null)), !cart.generalLoading && cart.cartVendorGroups.length === 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default().createElement("div", {
    className: "cart-sub-header"
  }, t('info.empty_cart')), cart.cartVendorGroups.length > 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default().createElement((react__WEBPACK_IMPORTED_MODULE_17___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default().createElement("div", {
    className: "cart-body"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default().createElement("ul", {
    className: 'cart-list' + (cart.generalLoading ? ' loading' : '')
  }, cart.cartVendorGroups.map(function (cartVendorGroup, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default().createElement(_CartVendorGroup__WEBPACK_IMPORTED_MODULE_22__.CartVendorGroup, {
      key: index,
      cartVendorGroup: cartVendorGroup,
      remove: remove,
      setQuantity: setQuantity
    });
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default().createElement("div", {
    className: "cart-footer"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default().createElement("div", {
    className: "cart-total"
  }, t('total'), " : ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default().createElement(_UI_Product_PriceShow__WEBPACK_IMPORTED_MODULE_21__.PriceShow, {
    price: cart.totalPrice
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default().createElement("a", {
    href: t('url.checkout.index', {
      ns: 'urls'
    }),
    className: 'cart-footer-link side-menu-footer-button' + (buttonLoading ? ' disabled' : ''),
    onClick: handleButtonClick
  }, buttonLoading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default().createElement(_UI_Icon_Loader__WEBPACK_IMPORTED_MODULE_18__.Loader, {
    additionalClass: "form-button-loader",
    lang: "en"
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default().createElement("span", null, t('process_purchase'))))));
};

/***/ }),

/***/ "./assets/Components/Header/HeaderTop/CartControl/index.jsx":
/*!******************************************************************!*\
  !*** ./assets/Components/Header/HeaderTop/CartControl/index.jsx ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CartControl": () => (/* binding */ CartControl)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_string_search_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.string.search.js */ "./node_modules/core-js/modules/es.string.search.js");
/* harmony import */ var core_js_modules_es_string_search_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_search_js__WEBPACK_IMPORTED_MODULE_1__);
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
/* harmony import */ var core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.regexp.test.js */ "./node_modules/core-js/modules/es.regexp.test.js");
/* harmony import */ var core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.error.cause.js */ "./node_modules/core-js/modules/es.error.cause.js");
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.error.to-string.js */ "./node_modules/core-js/modules/es.error.to-string.js");
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _CustomHook_state_useOpenState__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../../CustomHook/state/useOpenState */ "./assets/CustomHook/state/useOpenState.jsx");
/* harmony import */ var _UI_Button_CartButton__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../../../UI/Button/CartButton */ "./assets/UI/Button/CartButton.jsx");
/* harmony import */ var _UI_Container_Modal__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../../../UI/Container/Modal */ "./assets/UI/Container/Modal.jsx");
/* harmony import */ var _Cart__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./Cart */ "./assets/Components/Header/HeaderTop/CartControl/Cart/index.jsx");
/* harmony import */ var _functions_cartChip__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../../../../functions/cartChip */ "./assets/functions/cartChip.js");
/* harmony import */ var _CustomHook_cart_useCartFetch__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../../../../CustomHook/cart/useCartFetch */ "./assets/CustomHook/cart/useCartFetch.jsx");

















function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }







var CartControl = function CartControl() {
  var _useOpenState = (0,_CustomHook_state_useOpenState__WEBPACK_IMPORTED_MODULE_18__.useOpenState)(false),
    _useOpenState2 = _slicedToArray(_useOpenState, 3),
    cartIsOpen = _useOpenState2[0],
    openCart = _useOpenState2[1],
    closeCart = _useOpenState2[2];
  var _useCartFetch = (0,_CustomHook_cart_useCartFetch__WEBPACK_IMPORTED_MODULE_23__.useCartFetch)(),
    cart = _useCartFetch.cart,
    fetchCart = _useCartFetch.fetchCart,
    remove = _useCartFetch.remove,
    setQuantity = _useCartFetch.setQuantity;
  (0,react__WEBPACK_IMPORTED_MODULE_17__.useEffect)(function () {
    var _cart$totalPrice;
    (0,_functions_cartChip__WEBPACK_IMPORTED_MODULE_22__.cartChipUpdate)(cart.count, (_cart$totalPrice = cart.totalPrice) === null || _cart$totalPrice === void 0 ? void 0 : _cart$totalPrice.priceToPay);
  }, [cart]);

  //pour déclencher le fetch à la première ouverture 
  (0,react__WEBPACK_IMPORTED_MODULE_17__.useEffect)(function () {
    sessionStorage.setItem('cart-update', 'true');
    if (window.location.search.substring(1) === 'cart') {
      openCart();
    }
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default().createElement((react__WEBPACK_IMPORTED_MODULE_17___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default().createElement(_UI_Button_CartButton__WEBPACK_IMPORTED_MODULE_19__.CartButton, {
    onClick: openCart,
    additionalClass: 'cart-opener' + ((cart === null || cart === void 0 ? void 0 : cart.count) > 0 ? ' active' : '')
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default().createElement("div", {
    className: "cart-chip",
    hidden: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default().createElement("div", {
    className: "cart-count-chip"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default().createElement("div", {
    className: "cart-price-chip"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default().createElement(_UI_Container_Modal__WEBPACK_IMPORTED_MODULE_20__.Modal, {
    isOpen: cartIsOpen,
    close: closeCart,
    additionalClass: "right side-menu"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default().createElement(_Cart__WEBPACK_IMPORTED_MODULE_21__.Cart, {
    cart: cart,
    fetchCart: fetchCart,
    remove: remove,
    setQuantity: setQuantity
  })));
};

/***/ }),

/***/ "./assets/Components/Header/HeaderTop/ContactControl/ContactForm.jsx":
/*!***************************************************************************!*\
  !*** ./assets/Components/Header/HeaderTop/ContactControl/ContactForm.jsx ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ContactForm": () => (/* binding */ ContactForm)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.regexp.test.js */ "./node_modules/core-js/modules/es.regexp.test.js");
/* harmony import */ var core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.includes.js */ "./node_modules/core-js/modules/es.array.includes.js");
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.string.includes.js */ "./node_modules/core-js/modules/es.string.includes.js");
/* harmony import */ var core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.array.is-array.js */ "./node_modules/core-js/modules/es.array.is-array.js");
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.array.push.js */ "./node_modules/core-js/modules/es.array.push.js");
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/es.array.from.js */ "./node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! core-js/modules/es.error.cause.js */ "./node_modules/core-js/modules/es.error.cause.js");
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! core-js/modules/es.error.to-string.js */ "./node_modules/core-js/modules/es.error.to-string.js");
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! core-js/modules/es.promise.js */ "./node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var core_js_modules_es_symbol_async_iterator_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! core-js/modules/es.symbol.async-iterator.js */ "./node_modules/core-js/modules/es.symbol.async-iterator.js");
/* harmony import */ var core_js_modules_es_symbol_async_iterator_js__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_async_iterator_js__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var core_js_modules_es_symbol_to_string_tag_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! core-js/modules/es.symbol.to-string-tag.js */ "./node_modules/core-js/modules/es.symbol.to-string-tag.js");
/* harmony import */ var core_js_modules_es_symbol_to_string_tag_js__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_to_string_tag_js__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var core_js_modules_es_json_to_string_tag_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! core-js/modules/es.json.to-string-tag.js */ "./node_modules/core-js/modules/es.json.to-string-tag.js");
/* harmony import */ var core_js_modules_es_json_to_string_tag_js__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_json_to_string_tag_js__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var core_js_modules_es_math_to_string_tag_js__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! core-js/modules/es.math.to-string-tag.js */ "./node_modules/core-js/modules/es.math.to-string-tag.js");
/* harmony import */ var core_js_modules_es_math_to_string_tag_js__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_math_to_string_tag_js__WEBPACK_IMPORTED_MODULE_25__);
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! core-js/modules/es.object.create.js */ "./node_modules/core-js/modules/es.object.create.js");
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_26___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_26__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of.js */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_27___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_27__);
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of.js */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_28___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_28__);
/* harmony import */ var core_js_modules_es_array_reverse_js__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! core-js/modules/es.array.reverse.js */ "./node_modules/core-js/modules/es.array.reverse.js");
/* harmony import */ var core_js_modules_es_array_reverse_js__WEBPACK_IMPORTED_MODULE_29___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_reverse_js__WEBPACK_IMPORTED_MODULE_29__);
/* harmony import */ var core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! core-js/modules/es.symbol.to-primitive.js */ "./node_modules/core-js/modules/es.symbol.to-primitive.js");
/* harmony import */ var core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_30___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_30__);
/* harmony import */ var core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! core-js/modules/es.date.to-primitive.js */ "./node_modules/core-js/modules/es.date.to-primitive.js");
/* harmony import */ var core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_31___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_31__);
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! core-js/modules/es.number.constructor.js */ "./node_modules/core-js/modules/es.number.constructor.js");
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_32___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_32__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_33___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_33__);
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! yup */ "./node_modules/yup/index.esm.js");
/* harmony import */ var _CustomHook_form_useFormWithValidation__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ../../../../CustomHook/form/useFormWithValidation */ "./assets/CustomHook/form/useFormWithValidation.jsx");
/* harmony import */ var _UI_Form_ControlledRadioFields__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ../../../../UI/Form/ControlledRadioFields */ "./assets/UI/Form/ControlledRadioFields.jsx");
/* harmony import */ var _UI_Form_TextField__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ../../../../UI/Form/TextField */ "./assets/UI/Form/TextField.jsx");
/* harmony import */ var _UI_Form_FormButton__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ../../../../UI/Form/FormButton */ "./assets/UI/Form/FormButton.jsx");
/* harmony import */ var _UI_Flash_Flash__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ../../../../UI/Flash/Flash */ "./assets/UI/Flash/Flash.jsx");
/* harmony import */ var _CustomHook_state_useOpenState__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ../../../../CustomHook/state/useOpenState */ "./assets/CustomHook/state/useOpenState.jsx");
/* harmony import */ var _functions_api__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ../../../../functions/api */ "./assets/functions/api.js");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");
/* harmony import */ var _Config_SiteConfig__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ../../../../Config/SiteConfig */ "./assets/Config/SiteConfig.js");
/* harmony import */ var _CustomHook_useGetUser__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ../../../../CustomHook/useGetUser */ "./assets/CustomHook/useGetUser.jsx");
/* harmony import */ var i18next__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! i18next */ "./node_modules/i18next/dist/esm/i18next.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
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














































var schema = yup__WEBPACK_IMPORTED_MODULE_34__.object({
  civility: yup__WEBPACK_IMPORTED_MODULE_34__.string().test('custom-validation', (0,i18next__WEBPACK_IMPORTED_MODULE_45__.t)('assert.choice', {
    ns: 'constraints'
  }), function (value) {
    return [_Config_SiteConfig__WEBPACK_IMPORTED_MODULE_43__.SiteConfig.CIVILITY_F, _Config_SiteConfig__WEBPACK_IMPORTED_MODULE_43__.SiteConfig.CIVILITY_M].includes(value);
  }).required((0,i18next__WEBPACK_IMPORTED_MODULE_45__.t)('assert.notBlank.civility', {
    ns: 'constraints'
  })),
  firstName: yup__WEBPACK_IMPORTED_MODULE_34__.string().max(200, (0,i18next__WEBPACK_IMPORTED_MODULE_45__.t)('assert.length.max', {
    ns: 'constraints',
    max: 200
  })).required((0,i18next__WEBPACK_IMPORTED_MODULE_45__.t)('assert.notBlank.firstName', {
    ns: 'constraints'
  })),
  lastName: yup__WEBPACK_IMPORTED_MODULE_34__.string().max(200, (0,i18next__WEBPACK_IMPORTED_MODULE_45__.t)('assert.length.max', {
    ns: 'constraints',
    max: 200
  })).required((0,i18next__WEBPACK_IMPORTED_MODULE_45__.t)('assert.notBlank.lastName', {
    ns: 'constraints'
  })),
  email: yup__WEBPACK_IMPORTED_MODULE_34__.string().email((0,i18next__WEBPACK_IMPORTED_MODULE_45__.t)('assert.email', {
    ns: 'constraints'
  })).max(200, (0,i18next__WEBPACK_IMPORTED_MODULE_45__.t)('assert.length.max', {
    ns: 'constraints',
    max: 200
  })).required((0,i18next__WEBPACK_IMPORTED_MODULE_45__.t)('assert.notBlank.email', {
    ns: 'constraints'
  })),
  message: yup__WEBPACK_IMPORTED_MODULE_34__.string().max(2000, (0,i18next__WEBPACK_IMPORTED_MODULE_45__.t)('assert.length.max', {
    ns: 'constraints',
    max: 2000
  })).required((0,i18next__WEBPACK_IMPORTED_MODULE_45__.t)('assert.notBlank.message', {
    ns: 'constraints'
  }))
}).required();
var ContactForm = function ContactForm(_ref) {
  var _ref3, _errors$civility, _errors$firstName, _errors$lastName, _errors$email, _errors$message;
  var close = _ref.close,
    onSubmitSuccess = _ref.onSubmitSuccess;
  var _useTranslation = (0,react_i18next__WEBPACK_IMPORTED_MODULE_42__.useTranslation)('messages'),
    i18n = _useTranslation.i18n,
    t = _useTranslation.t;
  var _useFormWithValidatio = (0,_CustomHook_form_useFormWithValidation__WEBPACK_IMPORTED_MODULE_35__.useFormWithValidation)(schema, {
      civility: '',
      firstName: '',
      lastName: '',
      email: '',
      message: ''
    }),
    handleSubmit = _useFormWithValidatio.handleSubmit,
    control = _useFormWithValidatio.control,
    errors = _useFormWithValidatio.errors,
    setError = _useFormWithValidatio.setError,
    setValue = _useFormWithValidatio.setValue,
    isSubmitting = _useFormWithValidatio.isSubmitting;
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_33__.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    isLoading = _useState2[0],
    setLoading = _useState2[1];
  var _useOpenState = (0,_CustomHook_state_useOpenState__WEBPACK_IMPORTED_MODULE_40__.useOpenState)(),
    _useOpenState2 = _slicedToArray(_useOpenState, 3),
    errorFlashIsOpen = _useOpenState2[0],
    openErrorFlash = _useOpenState2[1],
    closeErrorFlash = _useOpenState2[2];
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
            closeErrorFlash();
            _context.prev = 4;
            _context.next = 7;
            return (0,_functions_api__WEBPACK_IMPORTED_MODULE_41__.apiPreparedFetch)('/' + i18n.language + '/api/contact/basicContact', formData, 'GET');
          case 7:
            onSubmitSuccess();
            close();
            _context.next = 14;
            break;
          case 11:
            _context.prev = 11;
            _context.t0 = _context["catch"](4);
            openErrorFlash();
          case 14:
            setLoading(false);
          case 15:
          case "end":
            return _context.stop();
        }
      }, _callee, null, [[4, 11]]);
    }));
    return function onSubmit(_x2) {
      return _ref2.apply(this, arguments);
    };
  }();
  var _useGetUser = (0,_CustomHook_useGetUser__WEBPACK_IMPORTED_MODULE_44__.useGetUser)(),
    user = _useGetUser.user;
  (0,react__WEBPACK_IMPORTED_MODULE_33__.useEffect)(function () {
    if (user) {
      setValue('civility', user.civility);
      setValue('firstName', user.firstName);
      setValue('lastName', user.lastName);
      setValue('email', user.email);
      formRef.current.querySelectorAll('.input-wrapper').forEach(function (inputWrapper) {
        //on enlève le labelDown sur tous les champs qu'on remplit
        if (!inputWrapper.classList.contains('message')) {
          inputWrapper.classList.remove('down');
        }
      });
    }
  }, [user]);
  var formRef = (0,react__WEBPACK_IMPORTED_MODULE_33__.useRef)(null);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_33___default().createElement("form", {
    className: "box-form",
    ref: formRef,
    onSubmit: handleSubmit(onSubmit)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_33___default().createElement("h2", null, t('contact_form')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_33___default().createElement(_UI_Flash_Flash__WEBPACK_IMPORTED_MODULE_39__.Flash, {
    isOpen: errorFlashIsOpen,
    close: closeErrorFlash,
    type: "danger"
  }, t('error.temporary_impossible_action')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_33___default().createElement(_UI_Form_ControlledRadioFields__WEBPACK_IMPORTED_MODULE_36__.ControlledRadioFields, {
    control: control,
    name: "civility",
    choices: (_ref3 = {}, _defineProperty(_ref3, t(_Config_SiteConfig__WEBPACK_IMPORTED_MODULE_43__.SiteConfig.CIVILITY_M, {
      ns: 'configs'
    }), _Config_SiteConfig__WEBPACK_IMPORTED_MODULE_43__.SiteConfig.CIVILITY_M), _defineProperty(_ref3, t(_Config_SiteConfig__WEBPACK_IMPORTED_MODULE_43__.SiteConfig.CIVILITY_F, {
      ns: 'configs'
    }), _Config_SiteConfig__WEBPACK_IMPORTED_MODULE_43__.SiteConfig.CIVILITY_F), _ref3),
    error: (_errors$civility = errors.civility) === null || _errors$civility === void 0 ? void 0 : _errors$civility.message,
    isRequiredField: true
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_33___default().createElement(_UI_Form_TextField__WEBPACK_IMPORTED_MODULE_37__.TextField, {
    control: control,
    name: "firstName",
    error: (_errors$firstName = errors.firstName) === null || _errors$firstName === void 0 ? void 0 : _errors$firstName.message,
    additionalClass: "capitalize"
  }, t('firstName'), " *"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_33___default().createElement(_UI_Form_TextField__WEBPACK_IMPORTED_MODULE_37__.TextField, {
    control: control,
    name: "lastName",
    error: (_errors$lastName = errors.lastName) === null || _errors$lastName === void 0 ? void 0 : _errors$lastName.message,
    additionalClass: "capitalize"
  }, t('lastName'), " *"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_33___default().createElement(_UI_Form_TextField__WEBPACK_IMPORTED_MODULE_37__.TextField, {
    control: control,
    name: "email",
    error: (_errors$email = errors.email) === null || _errors$email === void 0 ? void 0 : _errors$email.message
  }, t('email_address'), " *"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_33___default().createElement(_UI_Form_TextField__WEBPACK_IMPORTED_MODULE_37__.TextField, {
    type: "textarea",
    control: control,
    name: "message",
    error: (_errors$message = errors.message) === null || _errors$message === void 0 ? void 0 : _errors$message.message
  }, t('message'), " *"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_33___default().createElement("div", {
    className: "submit-group double"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_33___default().createElement(_UI_Form_FormButton__WEBPACK_IMPORTED_MODULE_38__.FormButton, {
    additionalClass: "bordeaux",
    loading: isLoading || isSubmitting
  }, t('submit.send')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_33___default().createElement(_UI_Form_FormButton__WEBPACK_IMPORTED_MODULE_38__.FormButton, {
    additionalClass: "cancel",
    disabled: isLoading || isSubmitting,
    onClick: close
  }, t('cancel'))));
};

/***/ }),

/***/ "./assets/Components/Header/HeaderTop/ContactControl/index.jsx":
/*!*********************************************************************!*\
  !*** ./assets/Components/Header/HeaderTop/ContactControl/index.jsx ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ContactControl": () => (/* binding */ ContactControl)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_string_search_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.string.search.js */ "./node_modules/core-js/modules/es.string.search.js");
/* harmony import */ var core_js_modules_es_string_search_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_search_js__WEBPACK_IMPORTED_MODULE_1__);
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
/* harmony import */ var core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.regexp.test.js */ "./node_modules/core-js/modules/es.regexp.test.js");
/* harmony import */ var core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.error.cause.js */ "./node_modules/core-js/modules/es.error.cause.js");
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.error.to-string.js */ "./node_modules/core-js/modules/es.error.to-string.js");
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _CustomHook_state_useOpenState__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../../CustomHook/state/useOpenState */ "./assets/CustomHook/state/useOpenState.jsx");
/* harmony import */ var _UI_Container_Modal__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../../../UI/Container/Modal */ "./assets/UI/Container/Modal.jsx");
/* harmony import */ var _UI_Flash_Flash__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../../../UI/Flash/Flash */ "./assets/UI/Flash/Flash.jsx");
/* harmony import */ var _ContactForm__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./ContactForm */ "./assets/Components/Header/HeaderTop/ContactControl/ContactForm.jsx");
/* harmony import */ var _UI_Icon_ChatIcon__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../../../../UI/Icon/ChatIcon */ "./assets/UI/Icon/ChatIcon.jsx");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");
/* harmony import */ var _UI_Button_ChatButton__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../../../../UI/Button/ChatButton */ "./assets/UI/Button/ChatButton.jsx");

















function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }








var ContactControl = function ContactControl(_ref) {
  var children = _ref.children,
    buttonClass = _ref.buttonClass;
  var _useTranslation = (0,react_i18next__WEBPACK_IMPORTED_MODULE_23__.useTranslation)('messages'),
    t = _useTranslation.t;
  var _useOpenState = (0,_CustomHook_state_useOpenState__WEBPACK_IMPORTED_MODULE_18__.useOpenState)(false),
    _useOpenState2 = _slicedToArray(_useOpenState, 3),
    formIsOpen = _useOpenState2[0],
    openForm = _useOpenState2[1],
    closeForm = _useOpenState2[2];
  var _useOpenState3 = (0,_CustomHook_state_useOpenState__WEBPACK_IMPORTED_MODULE_18__.useOpenState)(false),
    _useOpenState4 = _slicedToArray(_useOpenState3, 3),
    successFlashIsOpen = _useOpenState4[0],
    openSuccessFlash = _useOpenState4[1],
    closeSuccessFlash = _useOpenState4[2];
  var handleSubmitSuccess = function handleSubmitSuccess() {
    openSuccessFlash();
  };
  (0,react__WEBPACK_IMPORTED_MODULE_17__.useEffect)(function () {
    if (window.location.search.substring(1) === 'contact') {
      openForm();
    }
    ;
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default().createElement((react__WEBPACK_IMPORTED_MODULE_17___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default().createElement(_UI_Button_ChatButton__WEBPACK_IMPORTED_MODULE_24__.ChatButton, {
    className: buttonClass,
    type: "button",
    onClick: openForm
  }, children), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default().createElement(_UI_Container_Modal__WEBPACK_IMPORTED_MODULE_19__.Modal, {
    additionalClass: "review-form-modal center-form-modal",
    isOpen: formIsOpen,
    close: closeForm
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default().createElement(_ContactForm__WEBPACK_IMPORTED_MODULE_21__.ContactForm, {
    close: closeForm,
    onSubmitSuccess: handleSubmitSuccess
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default().createElement(_UI_Flash_Flash__WEBPACK_IMPORTED_MODULE_20__.Flash, {
    isOpen: successFlashIsOpen,
    type: "success",
    close: closeSuccessFlash
  }, t('success.contact_message_sent')));
};

/***/ }),

/***/ "./assets/Components/Header/HeaderTop/InlineSearchToolControl/InlineSearchTool/index.jsx":
/*!***********************************************************************************************!*\
  !*** ./assets/Components/Header/HeaderTop/InlineSearchToolControl/InlineSearchTool/index.jsx ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InlineSearchTool": () => (/* binding */ InlineSearchTool)
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
/* harmony import */ var _CustomHook_fetch_useFetchQSearch__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../../../CustomHook/fetch/useFetchQSearch */ "./assets/CustomHook/fetch/useFetchQSearch.jsx");
/* harmony import */ var _styles_header_HeaderTop_inlineSearchTool_css__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../../../../styles/header/HeaderTop/inlineSearchTool.css */ "./assets/styles/header/HeaderTop/inlineSearchTool.css");
/* harmony import */ var _UI_Icon_SearchIcon__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../../../../UI/Icon/SearchIcon */ "./assets/UI/Icon/SearchIcon.jsx");
/* harmony import */ var _UI_Button_CloseButton__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../../../../UI/Button/CloseButton */ "./assets/UI/Button/CloseButton.jsx");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");
/* harmony import */ var _UI_Icon_Loader__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../../../../../UI/Icon/Loader */ "./assets/UI/Icon/Loader.jsx");
/* harmony import */ var _Blog_Recipe_RecipeIndex_RecipeCard__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../../../../Blog/Recipe/RecipeIndex/RecipeCard */ "./assets/Components/Blog/Recipe/RecipeIndex/RecipeCard.jsx");
/* harmony import */ var _Shop_ProductIndex_ProductCard__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../../../../Shop/ProductIndex/ProductCard */ "./assets/Components/Shop/ProductIndex/ProductCard.jsx");
/* harmony import */ var _Blog_Article_ArticleIndex_ArticleCard__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../../../../Blog/Article/ArticleIndex/ArticleCard */ "./assets/Components/Blog/Article/ArticleIndex/ArticleCard.jsx");

















function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }










var InlineSearchTool = function InlineSearchTool(_ref) {
  var close = _ref.close;
  var _useTranslation = (0,react_i18next__WEBPACK_IMPORTED_MODULE_22__.useTranslation)('messages'),
    t = _useTranslation.t,
    i18n = _useTranslation.i18n;
  var inputRef = (0,react__WEBPACK_IMPORTED_MODULE_17__.useRef)(null);

  //handle q change
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_17__.useState)(''),
    _useState2 = _slicedToArray(_useState, 2),
    q = _useState2[0],
    setQ = _useState2[1];
  var handleChange = function handleChange(e) {
    setQ(e.currentTarget.value);
  };

  //fetch products & count
  var _useFetchQSearch = (0,_CustomHook_fetch_useFetchQSearch__WEBPACK_IMPORTED_MODULE_18__.useFetchQSearch)('/' + i18n.language + '/api/search', q, 6),
    _useFetchQSearch2 = _slicedToArray(_useFetchQSearch, 4),
    result = _useFetchQSearch2[0],
    resetProducts = _useFetchQSearch2[1],
    loading = _useFetchQSearch2[2],
    error = _useFetchQSearch2[3];
  var closeExpand = function closeExpand(e) {
    resetProducts();
    setQ('');
    inputRef.current.focus();
  };
  var handleClose = function handleClose() {
    wrapperRef.current.classList.add('closing');
    var onAnimationEnd = function onAnimationEnd() {
      wrapperRef.current.removeEventListener('animationend', onAnimationEnd);
      wrapperRef.current.classList.remove('closing');
      close();
    };
    wrapperRef.current.addEventListener('animationend', onAnimationEnd);
  };
  var wrapperRef = (0,react__WEBPACK_IMPORTED_MODULE_17__.useRef)(null);
  var handleEmpty = function handleEmpty() {
    setQ('');
    resetProducts();
    inputRef.current.focus();
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default().createElement("div", {
    className: "inline-search-tool-wrapper",
    ref: wrapperRef,
    onClick: closeExpand
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default().createElement("div", {
    className: "inline-search-tool",
    onClick: function onClick(e) {
      return e.stopPropagation();
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default().createElement("div", {
    className: "search-tool-header"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default().createElement("form", {
    className: "q-group",
    action: t('url.search.index', {
      ns: 'urls'
    }),
    method: "GET"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default().createElement("input", {
    ref: inputRef,
    name: "q",
    className: "q-input",
    type: "text",
    placeholder: t('search_placeholder'),
    value: q,
    onChange: handleChange,
    autoFocus: true
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default().createElement(_UI_Icon_SearchIcon__WEBPACK_IMPORTED_MODULE_20__.SearchIcon, {
    additionalClass: "q-icon"
  }), q !== '' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default().createElement(_UI_Button_CloseButton__WEBPACK_IMPORTED_MODULE_21__.CloseButton, {
    type: "button",
    additionalClass: "empty-control",
    onClick: handleEmpty,
    "aria-label": t('empty_input'),
    title: t('empty_input')
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default().createElement(_UI_Button_CloseButton__WEBPACK_IMPORTED_MODULE_21__.CloseButton, {
    onClick: handleClose
  })), ((result === null || result === void 0 ? void 0 : result.items.length) > 0 || loading) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default().createElement("div", {
    className: "inline-search-tool-expand"
  }, loading && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default().createElement(_UI_Icon_Loader__WEBPACK_IMPORTED_MODULE_23__.Loader, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default().createElement("ul", {
    className: "product-suggest-list"
  }, (result === null || result === void 0 ? void 0 : result.items.length) > 0 && result.items.map(function (item) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default().createElement((react__WEBPACK_IMPORTED_MODULE_17___default().Fragment), null, item.type === 'product' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default().createElement(_Shop_ProductIndex_ProductCard__WEBPACK_IMPORTED_MODULE_25__.ProductCard, {
      key: 'p' + item.id,
      product: item
    }), item.type === 'recipe' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default().createElement(_Blog_Recipe_RecipeIndex_RecipeCard__WEBPACK_IMPORTED_MODULE_24__.RecipeCard, {
      key: 'r' + item.id,
      recipe: item
    }), item.type === 'article' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default().createElement(_Blog_Article_ArticleIndex_ArticleCard__WEBPACK_IMPORTED_MODULE_26__.ArticleCard, {
      key: 'a' + item.id,
      article: item
    }));
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default().createElement("div", {
    className: "search-link"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default().createElement("a", {
    className: "form-button bordeaux outline",
    href: t('url.search.index', {
      ns: 'urls'
    }) + '?q=' + q
  }, t('see_all_results'), result !== null && result !== void 0 && result.count ? ' (' + result.count + ')' : '')))));
};

/***/ }),

/***/ "./assets/Components/Header/HeaderTop/InlineSearchToolControl/index.jsx":
/*!******************************************************************************!*\
  !*** ./assets/Components/Header/HeaderTop/InlineSearchToolControl/index.jsx ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InlineSearchToolControl": () => (/* binding */ InlineSearchToolControl)
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
/* harmony import */ var _UI_Button_SearchButton__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../../UI/Button/SearchButton */ "./assets/UI/Button/SearchButton.jsx");
/* harmony import */ var _CustomHook_state_useOpenState__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../../CustomHook/state/useOpenState */ "./assets/CustomHook/state/useOpenState.jsx");
/* harmony import */ var _InlineSearchTool__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./InlineSearchTool */ "./assets/Components/Header/HeaderTop/InlineSearchToolControl/InlineSearchTool/index.jsx");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
















function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }





var InlineSearchToolControl = function InlineSearchToolControl() {
  var _useOpenState = (0,_CustomHook_state_useOpenState__WEBPACK_IMPORTED_MODULE_18__.useOpenState)(),
    _useOpenState2 = _slicedToArray(_useOpenState, 3),
    searchToolIsOpen = _useOpenState2[0],
    openSearchTool = _useOpenState2[1],
    closeSearchTool = _useOpenState2[2];
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement((react__WEBPACK_IMPORTED_MODULE_16___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement(_UI_Button_SearchButton__WEBPACK_IMPORTED_MODULE_17__.SearchButton, {
    additionalClass: 'header-search-link right-search-link' + (searchToolIsOpen ? ' hidden' : ''),
    onClick: openSearchTool
  }), searchToolIsOpen && (0,react_dom__WEBPACK_IMPORTED_MODULE_20__.createPortal)( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement(_InlineSearchTool__WEBPACK_IMPORTED_MODULE_19__.InlineSearchTool, {
    close: closeSearchTool
  }), document.body));
};

/***/ }),

/***/ "./assets/Components/Header/HeaderTop/MobileMenuControl/MobileMenu/AccountLinks.jsx":
/*!******************************************************************************************!*\
  !*** ./assets/Components/Header/HeaderTop/MobileMenuControl/MobileMenu/AccountLinks.jsx ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AccountLinks": () => (/* binding */ AccountLinks)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.includes.js */ "./node_modules/core-js/modules/es.array.includes.js");
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.string.includes.js */ "./node_modules/core-js/modules/es.string.includes.js");
/* harmony import */ var core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _UI_Icon_AccountIcon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../UI/Icon/AccountIcon */ "./assets/UI/Icon/AccountIcon.jsx");
/* harmony import */ var _UI_Button_BecomeVendorLink__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../UI/Button/BecomeVendorLink */ "./assets/UI/Button/BecomeVendorLink.jsx");
/* harmony import */ var _UI_Icon_DashboardIcon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../UI/Icon/DashboardIcon */ "./assets/UI/Icon/DashboardIcon.jsx");
/* harmony import */ var _UI_Badge_AccountBadge__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../UI/Badge/AccountBadge */ "./assets/UI/Badge/AccountBadge.jsx");
/* harmony import */ var i18next__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! i18next */ "./node_modules/i18next/dist/esm/i18next.js");








var AccountLinks = function AccountLinks(_ref) {
  var user = _ref.user;
  if (!user) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement((react__WEBPACK_IMPORTED_MODULE_2___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(AnonymousAccountLink, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("li", {
      className: "mobile-menu-footer-item"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_UI_Button_BecomeVendorLink__WEBPACK_IMPORTED_MODULE_4__.BecomeVendorLink, null)));
  }
  if (!user.roles.includes('ROLE_VENDOR')) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement((react__WEBPACK_IMPORTED_MODULE_2___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(CustomerAccountLink, {
      user: user
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("li", {
      className: "mobile-menu-footer-item"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_UI_Button_BecomeVendorLink__WEBPACK_IMPORTED_MODULE_4__.BecomeVendorLink, null)));
  }
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement((react__WEBPACK_IMPORTED_MODULE_2___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(VendorAccountLink, {
    vendor: user
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("li", {
    className: "mobile-menu-footer-item"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("a", {
    className: "mobile-menu-footer-link",
    href: (0,i18next__WEBPACK_IMPORTED_MODULE_7__.t)('url.vendorAccount.vendorSpace.index.path', {
      ns: 'urls'
    })
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_UI_Icon_DashboardIcon__WEBPACK_IMPORTED_MODULE_5__.DashboardIcon, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", null, (0,i18next__WEBPACK_IMPORTED_MODULE_7__.t)('url.vendorAccount.vendorSpace.index.label', {
    ns: 'urls'
  })))));
};
var AnonymousAccountLink = function AnonymousAccountLink() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("li", {
    className: "mobile-menu-footer-item"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("a", {
    className: "mobile-menu-footer-link account",
    href: (0,i18next__WEBPACK_IMPORTED_MODULE_7__.t)('url.customerAccount.index', {
      ns: 'urls'
    })
  }, " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_UI_Icon_AccountIcon__WEBPACK_IMPORTED_MODULE_3__.AccountIcon, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", null, (0,i18next__WEBPACK_IMPORTED_MODULE_7__.t)('login', {
    ns: 'messages'
  }))));
};
var CustomerAccountLink = function CustomerAccountLink(_ref2) {
  var user = _ref2.user;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("li", {
    className: "mobile-menu-footer-item"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("a", {
    className: "mobile-menu-footer-link account logged",
    href: (0,i18next__WEBPACK_IMPORTED_MODULE_7__.t)('url.customerAccount.index', {
      ns: 'urls'
    })
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_UI_Badge_AccountBadge__WEBPACK_IMPORTED_MODULE_6__.AccountBadge, {
    user: user
  }), user.roles.includes('ROLE_PRO') && user.company ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", null, user.company.usualName) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", null, user.email)));
};
var VendorAccountLink = function VendorAccountLink(_ref3) {
  var vendor = _ref3.vendor;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("li", {
    className: "mobile-menu-footer-item"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("a", {
    className: "mobile-menu-footer-link account logged",
    href: (0,i18next__WEBPACK_IMPORTED_MODULE_7__.t)('url.vendorAccount.index', {
      ns: 'urls'
    })
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_UI_Badge_AccountBadge__WEBPACK_IMPORTED_MODULE_6__.AccountBadge, {
    user: vendor
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", null, vendor.company.usualName)));
};

/***/ }),

/***/ "./assets/Components/Header/HeaderTop/MobileMenuControl/MobileMenu/CategoryLink.jsx":
/*!******************************************************************************************!*\
  !*** ./assets/Components/Header/HeaderTop/MobileMenuControl/MobileMenu/CategoryLink.jsx ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CategoryLink": () => (/* binding */ CategoryLink)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _entrypoints_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../entrypoints/i18n */ "./assets/entrypoints/i18n.js");
/* harmony import */ var _UI_Icon_ChevronRightIcon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../UI/Icon/ChevronRightIcon */ "./assets/UI/Icon/ChevronRightIcon.jsx");




var CategoryLink = function CategoryLink(_ref) {
  var category = _ref.category,
    setSelected = _ref.setSelected;
  var handleClick = function handleClick(e) {
    e.preventDefault();
    setSelected(category);
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("button", {
    onClick: handleClick,
    className: "mobile-menu-link"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("span", null, category.name[_entrypoints_i18n__WEBPACK_IMPORTED_MODULE_2__["default"].language]), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_UI_Icon_ChevronRightIcon__WEBPACK_IMPORTED_MODULE_3__.ChevronRightIcon, null));
};

/***/ }),

/***/ "./assets/Components/Header/HeaderTop/MobileMenuControl/MobileMenu/MobileMenuFooter.jsx":
/*!**********************************************************************************************!*\
  !*** ./assets/Components/Header/HeaderTop/MobileMenuControl/MobileMenu/MobileMenuFooter.jsx ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MobileMenuFooter": () => (/* binding */ MobileMenuFooter)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.map.js */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");
/* harmony import */ var _styles_header_HeaderTop_MobileMenu_mobileMenufooter_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../styles/header/HeaderTop/MobileMenu/mobileMenufooter.css */ "./assets/styles/header/HeaderTop/MobileMenu/mobileMenufooter.css");
/* harmony import */ var _ContactControl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../ContactControl */ "./assets/Components/Header/HeaderTop/ContactControl/index.jsx");
/* harmony import */ var _AccountLinks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./AccountLinks */ "./assets/Components/Header/HeaderTop/MobileMenuControl/MobileMenu/AccountLinks.jsx");
/* harmony import */ var _UI_Button_Social_FacebookLink__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../UI/Button/Social/FacebookLink */ "./assets/UI/Button/Social/FacebookLink.jsx");
/* harmony import */ var _UI_Button_Social_InstagramLink__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../UI/Button/Social/InstagramLink */ "./assets/UI/Button/Social/InstagramLink.jsx");
/* harmony import */ var _entrypoints_i18n__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../entrypoints/i18n */ "./assets/entrypoints/i18n.js");
/* harmony import */ var i18next__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! i18next */ "./node_modules/i18next/dist/esm/i18next.js");
/* harmony import */ var _Config_SiteConfig__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../Config/SiteConfig */ "./assets/Config/SiteConfig.js");











var MobileMenuFooter = function MobileMenuFooter(_ref) {
  var user = _ref.user;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("nav", {
    className: "mobile-menu-footer"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("ul", {
    className: "mobile-menu-footer-list"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("li", {
    className: "mobile-menu-footer-item"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_ContactControl__WEBPACK_IMPORTED_MODULE_4__.ContactControl, {
    buttonClass: "mobile-menu-footer-link"
  }, (0,i18next__WEBPACK_IMPORTED_MODULE_9__.t)('contact_us', {
    ns: 'messages'
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_AccountLinks__WEBPACK_IMPORTED_MODULE_5__.AccountLinks, {
    user: user
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("li", {
    className: "mobile-menu-footer-item row lang"
  }, _Config_SiteConfig__WEBPACK_IMPORTED_MODULE_10__.SiteConfig.SUPPORTED_LOCALES.map(function (lang) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(LocaleLink, {
      key: lang,
      lang: lang
    });
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("li", {
    className: "mobile-menu-footer-item row social"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_UI_Button_Social_FacebookLink__WEBPACK_IMPORTED_MODULE_6__.FacebookLink, {
    className: "mobile-menu-footer-link social"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_UI_Button_Social_InstagramLink__WEBPACK_IMPORTED_MODULE_7__.InstagramLink, {
    className: "mobile-menu-footer-link social insta"
  }))));
};
var LocaleLink = function LocaleLink(_ref2) {
  var lang = _ref2.lang;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("a", {
    className: 'mobile-menu-footer-link lang' + (_entrypoints_i18n__WEBPACK_IMPORTED_MODULE_8__["default"].language === lang ? ' selected' : ''),
    href: '/' + lang,
    "aria-label": (0,i18next__WEBPACK_IMPORTED_MODULE_9__.t)('change_locale.' + lang, {
      ns: 'messages'
    }),
    title: (0,i18next__WEBPACK_IMPORTED_MODULE_9__.t)('change_locale.' + lang, {
      ns: 'messages'
    })
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("img", {
    className: 'flag-icon ' + lang,
    src: '/img/icons/lang/' + lang + '.png',
    alt: (0,i18next__WEBPACK_IMPORTED_MODULE_9__.t)('flag.' + lang, {
      ns: 'messages'
    })
  }));
};

/***/ }),

/***/ "./assets/Components/Header/HeaderTop/MobileMenuControl/MobileMenu/MobileSubMenu/SubCategoryLink.jsx":
/*!***********************************************************************************************************!*\
  !*** ./assets/Components/Header/HeaderTop/MobileMenuControl/MobileMenu/MobileSubMenu/SubCategoryLink.jsx ***!
  \***********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SubCategoryLink": () => (/* binding */ SubCategoryLink)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _entrypoints_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../entrypoints/i18n */ "./assets/entrypoints/i18n.js");



var SubCategoryLink = function SubCategoryLink(_ref) {
  var subCategory = _ref.subCategory,
    onClick = _ref.onClick;
  //WITHOUT_SHOP // suppr onClick

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("li", {
    className: "mobile-menu-subitem"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("a", {
    className: "mobile-menu-sublink",
    href: subCategory.target[_entrypoints_i18n__WEBPACK_IMPORTED_MODULE_2__["default"].language],
    onClick: onClick
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
    className: "mobile-menu-subitem-img-wrapper"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("img", {
    className: "mobile-menu-subitem-img",
    src: '/img/categories/' + subCategory.picture.path,
    alt: subCategory.picture.alt[_entrypoints_i18n__WEBPACK_IMPORTED_MODULE_2__["default"].language]
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("span", null, subCategory.name[_entrypoints_i18n__WEBPACK_IMPORTED_MODULE_2__["default"].language])));
};

/***/ }),

/***/ "./assets/Components/Header/HeaderTop/MobileMenuControl/MobileMenu/MobileSubMenu/index.jsx":
/*!*************************************************************************************************!*\
  !*** ./assets/Components/Header/HeaderTop/MobileMenuControl/MobileMenu/MobileSubMenu/index.jsx ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MobileSubMenu": () => (/* binding */ MobileSubMenu)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.includes.js */ "./node_modules/core-js/modules/es.array.includes.js");
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.map.js */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.is-array.js */ "./node_modules/core-js/modules/es.array.is-array.js");
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_6__);
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
/* harmony import */ var _SubCategoryLink__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./SubCategoryLink */ "./assets/Components/Header/HeaderTop/MobileMenuControl/MobileMenu/MobileSubMenu/SubCategoryLink.jsx");
/* harmony import */ var _UI_Icon_ChevronLeftIcon__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../../../../../UI/Icon/ChevronLeftIcon */ "./assets/UI/Icon/ChevronLeftIcon.jsx");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");
/* harmony import */ var _UI_Flash_Flash__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../../../../../../UI/Flash/Flash */ "./assets/UI/Flash/Flash.jsx");
/* harmony import */ var _CustomHook_state_useOpenState__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../../../../../../CustomHook/state/useOpenState */ "./assets/CustomHook/state/useOpenState.jsx");
/* harmony import */ var _CustomHook_useGetUser__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../../../../../../CustomHook/useGetUser */ "./assets/CustomHook/useGetUser.jsx");


















function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }







var MobileSubMenu = function MobileSubMenu(_ref) {
  var category = _ref.category,
    setSelected = _ref.setSelected;
  var _useTranslation = (0,react_i18next__WEBPACK_IMPORTED_MODULE_21__.useTranslation)('messages'),
    t = _useTranslation.t,
    i18n = _useTranslation.i18n;
  var handleReturn = function handleReturn(e) {
    e.preventDefault();
    setSelected(null);
  };

  //WITHOUT_SHOP // à suppr 
  var _useOpenState = (0,_CustomHook_state_useOpenState__WEBPACK_IMPORTED_MODULE_23__.useOpenState)(false),
    _useOpenState2 = _slicedToArray(_useOpenState, 3),
    withoutShopFlashIsOpen = _useOpenState2[0],
    openWithoutShopFlash = _useOpenState2[1],
    closeWithoutShopFlash = _useOpenState2[2];
  var _useGetUser = (0,_CustomHook_useGetUser__WEBPACK_IMPORTED_MODULE_24__.useGetUser)(),
    user = _useGetUser.user,
    updateUser = _useGetUser.updateUser;
  var handleClick = function handleClick(e) {
    if (category.name.en === 'Recipes') {
      return;
    }
    if (!user || !['consumer@email.com', 'pro@email.com', 'vendor@email.com'].includes(user.email)) {
      e.preventDefault();
      openWithoutShopFlash();
    }
  };
  ////////////////////////////////////////////////////////////////

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement("nav", {
    className: "mobile-menu-nav right"
  }, category && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement("button", {
    className: "mobile-menu-nav-header mobile-menu-link",
    onClick: handleReturn
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement(_UI_Icon_ChevronLeftIcon__WEBPACK_IMPORTED_MODULE_20__.ChevronLeftIcon, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement("span", {
    className: "mobile-menu-nav-title"
  }, category.name[i18n.language])), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement("ul", {
    className: "mobile-menu-sublist"
  },
  /*#__PURE__*/
  //WITHOUT_SHOP // à suppr
  react__WEBPACK_IMPORTED_MODULE_18___default().createElement(_UI_Flash_Flash__WEBPACK_IMPORTED_MODULE_22__.Flash, {
    button: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement("a", {
      href: t('url.recipe.index', {
        ns: 'urls'
      })
    }, t('our_recipes')),
    isOpen: withoutShopFlashIsOpen,
    close: closeWithoutShopFlash
  }, t('info.shop_will_be_open_soon'))
  ///////////////////////////////
  , category && category.subCategories.map(function (subCategory) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement(_SubCategoryLink__WEBPACK_IMPORTED_MODULE_19__.SubCategoryLink, {
      key: subCategory.id,
      subCategory: subCategory
      //WITHOUT_SHOP // ligne ci-dessous à suppr
      ,
      onClick: handleClick
    });
  })), category && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default().createElement("a", {
    className: "form-button bordeaux outline",
    href: category.target[i18n.language]
    //WITHOUT_SHOP // ligne ci-dessous à suppr
    ,
    onClick: handleClick
  }, t('see_entire_category', {
    category: category.name[i18n.language]
  })));
};

/***/ }),

/***/ "./assets/Components/Header/HeaderTop/MobileMenuControl/MobileMenu/index.jsx":
/*!***********************************************************************************!*\
  !*** ./assets/Components/Header/HeaderTop/MobileMenuControl/MobileMenu/index.jsx ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MobileMenu": () => (/* binding */ MobileMenu)
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
/* harmony import */ var _UI_Logo_HeaderLogo__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../../../UI/Logo/HeaderLogo */ "./assets/UI/Logo/HeaderLogo.jsx");
/* harmony import */ var _MobileSubMenu__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./MobileSubMenu */ "./assets/Components/Header/HeaderTop/MobileMenuControl/MobileMenu/MobileSubMenu/index.jsx");
/* harmony import */ var _MobileMenuFooter__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./MobileMenuFooter */ "./assets/Components/Header/HeaderTop/MobileMenuControl/MobileMenu/MobileMenuFooter.jsx");
/* harmony import */ var _CategoryLink__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./CategoryLink */ "./assets/Components/Header/HeaderTop/MobileMenuControl/MobileMenu/CategoryLink.jsx");
/* harmony import */ var _styles_header_HeaderTop_sideMenu_css__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../../../../../styles/header/HeaderTop/sideMenu.css */ "./assets/styles/header/HeaderTop/sideMenu.css");
/* harmony import */ var _styles_header_HeaderTop_MobileMenu_index_css__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../../../../../styles/header/HeaderTop/MobileMenu/index.css */ "./assets/styles/header/HeaderTop/MobileMenu/index.css");

















function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }







var MobileMenu = (0,react__WEBPACK_IMPORTED_MODULE_17__.forwardRef)(function (_ref, modalRef) {
  var categories = _ref.categories,
    user = _ref.user;
  //sélection des catégories
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_17__.useState)(null),
    _useState2 = _slicedToArray(_useState, 2),
    selectedCategory = _useState2[0],
    setSelectedCategory = _useState2[1];
  (0,react__WEBPACK_IMPORTED_MODULE_17__.useEffect)(function () {
    //au cas ou on était en scroll en bas des categories, il faut remonter pour arriver en haut de la liste des subcategories
    modalRef.current.scroll(0, 0);
  }, [selectedCategory]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default().createElement((react__WEBPACK_IMPORTED_MODULE_17___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default().createElement("div", {
    className: "mobile-menu-header"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default().createElement(_UI_Logo_HeaderLogo__WEBPACK_IMPORTED_MODULE_18__.HeaderLogo, null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default().createElement("div", {
    className: "mobile-menu-main"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default().createElement("div", {
    className: 'side-menu-body' + (selectedCategory ? ' is-expanded' : '')
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default().createElement("nav", {
    className: "mobile-menu-nav left"
  }, categories.map(function (category) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default().createElement(_CategoryLink__WEBPACK_IMPORTED_MODULE_21__.CategoryLink, {
      key: category.id,
      setSelected: setSelectedCategory,
      category: category
    });
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default().createElement(_MobileSubMenu__WEBPACK_IMPORTED_MODULE_19__.MobileSubMenu, {
    category: selectedCategory,
    setSelected: setSelectedCategory
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default().createElement(_MobileMenuFooter__WEBPACK_IMPORTED_MODULE_20__.MobileMenuFooter, {
    user: user
  })));
});

/***/ }),

/***/ "./assets/Components/Header/HeaderTop/MobileMenuControl/index.jsx":
/*!************************************************************************!*\
  !*** ./assets/Components/Header/HeaderTop/MobileMenuControl/index.jsx ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MobileMenuControl": () => (/* binding */ MobileMenuControl)
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
/* harmony import */ var _UI_Button_MenuButton__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../../UI/Button/MenuButton */ "./assets/UI/Button/MenuButton.jsx");
/* harmony import */ var _CustomHook_state_useOpenState__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../../CustomHook/state/useOpenState */ "./assets/CustomHook/state/useOpenState.jsx");
/* harmony import */ var _UI_Container_Modal__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../../../UI/Container/Modal */ "./assets/UI/Container/Modal.jsx");
/* harmony import */ var _MobileMenu__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./MobileMenu */ "./assets/Components/Header/HeaderTop/MobileMenuControl/MobileMenu/index.jsx");
















function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }





var MobileMenuControl = function MobileMenuControl(_ref) {
  var categories = _ref.categories,
    user = _ref.user;
  var _useOpenState = (0,_CustomHook_state_useOpenState__WEBPACK_IMPORTED_MODULE_18__.useOpenState)(),
    _useOpenState2 = _slicedToArray(_useOpenState, 3),
    sideMenuIsOpen = _useOpenState2[0],
    openSideMenu = _useOpenState2[1],
    closeSideMenu = _useOpenState2[2];
  var modalRef = (0,react__WEBPACK_IMPORTED_MODULE_16__.useRef)(null);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement((react__WEBPACK_IMPORTED_MODULE_16___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement(_UI_Button_MenuButton__WEBPACK_IMPORTED_MODULE_17__.MenuButton, {
    additionalClass: "mobile-menu-opener",
    onClick: openSideMenu
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement(_UI_Container_Modal__WEBPACK_IMPORTED_MODULE_19__.Modal, {
    ref: modalRef,
    isOpen: sideMenuIsOpen,
    close: closeSideMenu,
    additionalClass: "left mobile-menu side-menu"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement(_MobileMenu__WEBPACK_IMPORTED_MODULE_20__.MobileMenu, {
    ref: modalRef,
    categories: categories,
    close: closeSideMenu,
    user: user
  })));
};

/***/ }),

/***/ "./assets/Components/Header/HeaderTop/SideSearchToolControl/SideSearchTool/ItemSuggest/ArticleSuggest.jsx":
/*!****************************************************************************************************************!*\
  !*** ./assets/Components/Header/HeaderTop/SideSearchToolControl/SideSearchTool/ItemSuggest/ArticleSuggest.jsx ***!
  \****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ArticleSuggest": () => (/* binding */ ArticleSuggest)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var ArticleSuggest = function ArticleSuggest(_ref) {
  var article = _ref.article;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    className: "product-suggest-item",
    href: article.target
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    className: "item-img",
    src: article.picture.path,
    alt: article.picture.alt
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "item-text"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", {
    className: "item-title"
  }, article.title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "item-subtitle"
  }, article.subtitle)));
};

/***/ }),

/***/ "./assets/Components/Header/HeaderTop/SideSearchToolControl/SideSearchTool/ItemSuggest/ProductSuggest.jsx":
/*!****************************************************************************************************************!*\
  !*** ./assets/Components/Header/HeaderTop/SideSearchToolControl/SideSearchTool/ItemSuggest/ProductSuggest.jsx ***!
  \****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductSuggest": () => (/* binding */ ProductSuggest)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _UI_Product_ProductIndexReview__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../UI/Product/ProductIndexReview */ "./assets/UI/Product/ProductIndexReview.jsx");
/* harmony import */ var _UI_Product_PriceShow__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../UI/Product/PriceShow */ "./assets/UI/Product/PriceShow.jsx");



var ProductSuggest = function ProductSuggest(_ref) {
  var product = _ref.product;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    className: "product-suggest-item",
    href: product.basePackaging.target
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    className: "item-img",
    src: product.firstPicture.path,
    alt: product.firstPicture.alt
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "item-text"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", {
    className: "item-title"
  }, product.designation, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "product-card-title-suffix"
  }, product.basePackaging.label ? ' ' + product.basePackaging.label : '')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_UI_Product_ProductIndexReview__WEBPACK_IMPORTED_MODULE_1__.ProductIndexReview, {
    product: product
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "item-price"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_UI_Product_PriceShow__WEBPACK_IMPORTED_MODULE_2__.PriceShow, {
    price: product.basePackaging.price
  }))));
};

/***/ }),

/***/ "./assets/Components/Header/HeaderTop/SideSearchToolControl/SideSearchTool/ItemSuggest/RecipeSuggest.jsx":
/*!***************************************************************************************************************!*\
  !*** ./assets/Components/Header/HeaderTop/SideSearchToolControl/SideSearchTool/ItemSuggest/RecipeSuggest.jsx ***!
  \***************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RecipeSuggest": () => (/* binding */ RecipeSuggest)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.map.js */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


var RecipeSuggest = function RecipeSuggest(_ref) {
  var recipe = _ref.recipe;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("a", {
    className: "product-suggest-item",
    href: recipe.target
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("img", {
    className: "item-img",
    src: recipe.picture.path,
    alt: recipe.picture.alt
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
    className: "item-text"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("h2", {
    className: "item-title"
  }, recipe.title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("ul", {
    className: "product-card-list"
  }, recipe.ingredients.map(function (ingredient, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("li", {
      className: "product-card-list-item",
      key: index
    }, ingredient);
  }))));
};

/***/ }),

/***/ "./assets/Components/Header/HeaderTop/SideSearchToolControl/SideSearchTool/index.jsx":
/*!*******************************************************************************************!*\
  !*** ./assets/Components/Header/HeaderTop/SideSearchToolControl/SideSearchTool/index.jsx ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SideSearchTool": () => (/* binding */ SideSearchTool)
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
/* harmony import */ var _CustomHook_fetch_useFetchQSearch__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../../../CustomHook/fetch/useFetchQSearch */ "./assets/CustomHook/fetch/useFetchQSearch.jsx");
/* harmony import */ var _ItemSuggest_ProductSuggest__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./ItemSuggest/ProductSuggest */ "./assets/Components/Header/HeaderTop/SideSearchToolControl/SideSearchTool/ItemSuggest/ProductSuggest.jsx");
/* harmony import */ var _styles_header_HeaderTop_sideSearchTool_css__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../../../../styles/header/HeaderTop/sideSearchTool.css */ "./assets/styles/header/HeaderTop/sideSearchTool.css");
/* harmony import */ var _UI_Icon_SearchIcon__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../../../../UI/Icon/SearchIcon */ "./assets/UI/Icon/SearchIcon.jsx");
/* harmony import */ var _UI_Icon_Loader__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../../../../../UI/Icon/Loader */ "./assets/UI/Icon/Loader.jsx");
/* harmony import */ var _CustomHook_form_useButtonLoading__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../../../../../CustomHook/form/useButtonLoading */ "./assets/CustomHook/form/useButtonLoading.jsx");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");
/* harmony import */ var _ItemSuggest_RecipeSuggest__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./ItemSuggest/RecipeSuggest */ "./assets/Components/Header/HeaderTop/SideSearchToolControl/SideSearchTool/ItemSuggest/RecipeSuggest.jsx");
/* harmony import */ var _UI_Button_CloseButton__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../../../../../UI/Button/CloseButton */ "./assets/UI/Button/CloseButton.jsx");
/* harmony import */ var _ItemSuggest_ArticleSuggest__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./ItemSuggest/ArticleSuggest */ "./assets/Components/Header/HeaderTop/SideSearchToolControl/SideSearchTool/ItemSuggest/ArticleSuggest.jsx");

















function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }











var SideSearchTool = function SideSearchTool() {
  var _useTranslation = (0,react_i18next__WEBPACK_IMPORTED_MODULE_24__.useTranslation)('messages'),
    t = _useTranslation.t,
    i18n = _useTranslation.i18n;

  //loading du bouton "voir tous les résultats"
  var _useButtonLoading = (0,_CustomHook_form_useButtonLoading__WEBPACK_IMPORTED_MODULE_23__.useButtonLoading)(),
    _useButtonLoading2 = _slicedToArray(_useButtonLoading, 2),
    buttonLoading = _useButtonLoading2[0],
    handleButtonClick = _useButtonLoading2[1];

  //handle q change
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_17__.useState)(''),
    _useState2 = _slicedToArray(_useState, 2),
    q = _useState2[0],
    setQ = _useState2[1];
  var handleChange = function handleChange(e) {
    setQ(e.currentTarget.value);
  };

  //fetch products & count
  var _useFetchQSearch = (0,_CustomHook_fetch_useFetchQSearch__WEBPACK_IMPORTED_MODULE_18__.useFetchQSearch)('/' + i18n.language + '/api/search', q, 10),
    _useFetchQSearch2 = _slicedToArray(_useFetchQSearch, 4),
    result = _useFetchQSearch2[0],
    resetProducts = _useFetchQSearch2[1],
    loading = _useFetchQSearch2[2],
    error = _useFetchQSearch2[3];
  var handleEmpty = function handleEmpty() {
    setQ('');
    resetProducts();
    inputRef.current.focus();
  };
  var inputRef = (0,react__WEBPACK_IMPORTED_MODULE_17__.useRef)(null);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default().createElement("div", {
    className: "side-search-tool"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default().createElement("form", {
    className: "q-group",
    action: t('url.search.index', {
      ns: 'urls'
    }),
    method: "GET"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default().createElement("input", {
    ref: inputRef,
    name: "q",
    className: "q-input",
    type: "text",
    placeholder: t('search_placeholder'),
    value: q,
    onChange: handleChange,
    autoFocus: true
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default().createElement(_UI_Icon_SearchIcon__WEBPACK_IMPORTED_MODULE_21__.SearchIcon, {
    additionalClass: "q-icon"
  }), q !== '' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default().createElement(_UI_Button_CloseButton__WEBPACK_IMPORTED_MODULE_26__.CloseButton, {
    type: "button",
    onClick: handleEmpty,
    "aria-label": t('empty_input'),
    title: t('empty_input')
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default().createElement("div", {
    className: 'product-suggest-list' + (loading ? ' loading' : '')
  }, loading && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default().createElement(_UI_Icon_Loader__WEBPACK_IMPORTED_MODULE_22__.Loader, null), result && result.items.map(function (item) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default().createElement((react__WEBPACK_IMPORTED_MODULE_17___default().Fragment), null, item.type === 'product' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default().createElement(_ItemSuggest_ProductSuggest__WEBPACK_IMPORTED_MODULE_19__.ProductSuggest, {
      key: 'p' + item.id,
      product: item
    }), item.type === 'recipe' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default().createElement(_ItemSuggest_RecipeSuggest__WEBPACK_IMPORTED_MODULE_25__.RecipeSuggest, {
      key: 'r' + item.id,
      recipe: item
    }), item.type === 'article' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default().createElement(_ItemSuggest_ArticleSuggest__WEBPACK_IMPORTED_MODULE_27__.ArticleSuggest, {
      key: 'a' + item.id,
      article: item
    }));
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default().createElement("div", {
    className: "search-link"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default().createElement("a", {
    className: 'side-menu-footer-button' + (buttonLoading ? ' disabled' : ''),
    onClick: handleButtonClick,
    href: t('url.search.index', {
      ns: 'urls'
    }) + '?q=' + q,
    disabled: buttonLoading
  }, buttonLoading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default().createElement(_UI_Icon_Loader__WEBPACK_IMPORTED_MODULE_22__.Loader, {
    additionalClass: "form-button-loader"
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default().createElement("span", null, t('see_all_results'), result !== null && result !== void 0 && result.count ? ' (' + result.count + ')' : ''))));
};

/***/ }),

/***/ "./assets/Components/Header/HeaderTop/SideSearchToolControl/index.jsx":
/*!****************************************************************************!*\
  !*** ./assets/Components/Header/HeaderTop/SideSearchToolControl/index.jsx ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SideSearchToolControl": () => (/* binding */ SideSearchToolControl)
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
/* harmony import */ var _CustomHook_state_useOpenState__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../../CustomHook/state/useOpenState */ "./assets/CustomHook/state/useOpenState.jsx");
/* harmony import */ var _UI_Container_Modal__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../../UI/Container/Modal */ "./assets/UI/Container/Modal.jsx");
/* harmony import */ var _UI_Button_SearchButton__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../../../UI/Button/SearchButton */ "./assets/UI/Button/SearchButton.jsx");
/* harmony import */ var _SideSearchTool__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./SideSearchTool */ "./assets/Components/Header/HeaderTop/SideSearchToolControl/SideSearchTool/index.jsx");
















function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }





var SideSearchToolControl = function SideSearchToolControl() {
  var _useOpenState = (0,_CustomHook_state_useOpenState__WEBPACK_IMPORTED_MODULE_17__.useOpenState)(),
    _useOpenState2 = _slicedToArray(_useOpenState, 3),
    searchToolIsOpen = _useOpenState2[0],
    openSearchTool = _useOpenState2[1],
    closeSearchTool = _useOpenState2[2];
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement((react__WEBPACK_IMPORTED_MODULE_16___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement(_UI_Button_SearchButton__WEBPACK_IMPORTED_MODULE_19__.SearchButton, {
    additionalClass: "header-search-link left-search-link",
    onClick: openSearchTool
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement(_UI_Container_Modal__WEBPACK_IMPORTED_MODULE_18__.Modal, {
    isOpen: searchToolIsOpen,
    close: closeSearchTool,
    additionalClass: "left side-menu"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement(_SideSearchTool__WEBPACK_IMPORTED_MODULE_20__.SideSearchTool, null)));
};

/***/ }),

/***/ "./assets/Components/Header/HeaderTop/index.jsx":
/*!******************************************************!*\
  !*** ./assets/Components/Header/HeaderTop/index.jsx ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HeaderTop": () => (/* binding */ HeaderTop)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.includes.js */ "./node_modules/core-js/modules/es.array.includes.js");
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.string.includes.js */ "./node_modules/core-js/modules/es.string.includes.js");
/* harmony import */ var core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _UI_Logo_HeaderLogo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../UI/Logo/HeaderLogo */ "./assets/UI/Logo/HeaderLogo.jsx");
/* harmony import */ var _CartControl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./CartControl */ "./assets/Components/Header/HeaderTop/CartControl/index.jsx");
/* harmony import */ var _MobileMenuControl__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./MobileMenuControl */ "./assets/Components/Header/HeaderTop/MobileMenuControl/index.jsx");
/* harmony import */ var _styles_header_HeaderTop_index_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../styles/header/HeaderTop/index.css */ "./assets/styles/header/HeaderTop/index.css");
/* harmony import */ var _SideSearchToolControl__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./SideSearchToolControl */ "./assets/Components/Header/HeaderTop/SideSearchToolControl/index.jsx");
/* harmony import */ var _InlineSearchToolControl__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./InlineSearchToolControl */ "./assets/Components/Header/HeaderTop/InlineSearchToolControl/index.jsx");
/* harmony import */ var _AccountControl__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./AccountControl */ "./assets/Components/Header/HeaderTop/AccountControl/index.jsx");
/* harmony import */ var _CustomHook_useGetUser__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../CustomHook/useGetUser */ "./assets/CustomHook/useGetUser.jsx");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");
/* harmony import */ var _UI_Icon_DashboardIcon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../UI/Icon/DashboardIcon */ "./assets/UI/Icon/DashboardIcon.jsx");
/* harmony import */ var _ContactControl__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./ContactControl */ "./assets/Components/Header/HeaderTop/ContactControl/index.jsx");
/* harmony import */ var _UI_Button_Social_FacebookLink__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../UI/Button/Social/FacebookLink */ "./assets/UI/Button/Social/FacebookLink.jsx");
/* harmony import */ var _UI_Button_Social_InstagramLink__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../UI/Button/Social/InstagramLink */ "./assets/UI/Button/Social/InstagramLink.jsx");
















var HeaderTop = (0,react__WEBPACK_IMPORTED_MODULE_2__.memo)(function (_ref) {
  var categories = _ref.categories;
  var _useTranslation = (0,react_i18next__WEBPACK_IMPORTED_MODULE_11__.useTranslation)('messages'),
    t = _useTranslation.t;
  var _useGetUser = (0,_CustomHook_useGetUser__WEBPACK_IMPORTED_MODULE_10__.useGetUser)(),
    user = _useGetUser.user,
    updateUser = _useGetUser.updateUser;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", {
    className: "header-top"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", {
    className: "header-top-left"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_MobileMenuControl__WEBPACK_IMPORTED_MODULE_5__.MobileMenuControl, {
    categories: categories,
    user: user
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_SideSearchToolControl__WEBPACK_IMPORTED_MODULE_7__.SideSearchToolControl, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", {
    className: "header-top-left-links"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_UI_Button_Social_InstagramLink__WEBPACK_IMPORTED_MODULE_15__.InstagramLink, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_UI_Button_Social_FacebookLink__WEBPACK_IMPORTED_MODULE_14__.FacebookLink, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_ContactControl__WEBPACK_IMPORTED_MODULE_13__.ContactControl, {
    buttonClass: "icon-button"
  }), user && user.roles.includes('ROLE_VENDOR') && user.company ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("a", {
    className: "header-top-vendor-contact-button form-button bordeaux-black outline i-text",
    href: t('url.vendorAccount.vendorSpace.index', {
      ns: 'urls'
    })
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_UI_Icon_DashboardIcon__WEBPACK_IMPORTED_MODULE_12__.DashboardIcon, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", null, t('vendor_space'))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("a", {
    className: "header-top-vendor-contact-button form-button bordeaux-black outline",
    href: t('url.contact.become_vendor', {
      ns: 'urls'
    })
  }, t('become_vendor')))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_UI_Logo_HeaderLogo__WEBPACK_IMPORTED_MODULE_3__.HeaderLogo, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", {
    className: "header-top-right"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_InlineSearchToolControl__WEBPACK_IMPORTED_MODULE_8__.InlineSearchToolControl, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_AccountControl__WEBPACK_IMPORTED_MODULE_9__.AccountControl, {
    user: user,
    updateUser: updateUser
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_CartControl__WEBPACK_IMPORTED_MODULE_4__.CartControl, null)));
});

/***/ }),

/***/ "./assets/Components/Header/index.jsx":
/*!********************************************!*\
  !*** ./assets/Components/Header/index.jsx ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Header": () => (/* binding */ Header)
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
/* harmony import */ var _HeaderTop__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./HeaderTop */ "./assets/Components/Header/HeaderTop/index.jsx");
/* harmony import */ var _HeaderBottom__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./HeaderBottom */ "./assets/Components/Header/HeaderBottom/index.jsx");
/* harmony import */ var _styles_header_index_css__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../styles/header/index.css */ "./assets/styles/header/index.css");
/* harmony import */ var _Config_categories_json__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../Config/categories.json */ "./assets/Config/categories.json");
/* harmony import */ var _HeaderPub__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./HeaderPub */ "./assets/Components/Header/HeaderPub/index.jsx");
/* harmony import */ var _CustomHook_listener_useScrollYDirectionListener__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../../CustomHook/listener/useScrollYDirectionListener */ "./assets/CustomHook/listener/useScrollYDirectionListener.jsx");
















function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }







var Header = function Header() {
  var _useScrollYDirectionL = (0,_CustomHook_listener_useScrollYDirectionListener__WEBPACK_IMPORTED_MODULE_22__.useScrollYDirectionListener)(50, 70),
    isScrollingUp = _useScrollYDirectionL.isScrollingUp,
    isScrollingDown = _useScrollYDirectionL.isScrollingDown;
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_16__.useState)('header-static'),
    _useState2 = _slicedToArray(_useState, 2),
    headerClass = _useState2[0],
    setHeaderClass = _useState2[1];
  (0,react__WEBPACK_IMPORTED_MODULE_16__.useEffect)(function () {
    if (isScrollingUp) {
      setHeaderClass('header-fixed scroll-up');
    } else if (isScrollingDown) {
      setHeaderClass('header-fixed scroll-down');
    } else {
      setHeaderClass('header-static');
    }
  }, [isScrollingUp, isScrollingDown]);
  (0,react__WEBPACK_IMPORTED_MODULE_16__.useEffect)(function () {
    document.body.classList.remove('scroll-up', 'scroll-down', 'scrolling');
    if (isScrollingUp) {
      document.body.classList.add('scrolling', 'scroll-up');
    } else if (isScrollingDown) {
      document.body.classList.add('scrolling', 'scroll-down');
    }
  }, [isScrollingUp, isScrollingDown]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement((react__WEBPACK_IMPORTED_MODULE_16___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement("div", {
    className: headerClass
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement(_HeaderPub__WEBPACK_IMPORTED_MODULE_21__.HeaderPub, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement(_HeaderTop__WEBPACK_IMPORTED_MODULE_17__.HeaderTop, {
    categories: _Config_categories_json__WEBPACK_IMPORTED_MODULE_20__
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement(_HeaderBottom__WEBPACK_IMPORTED_MODULE_18__.HeaderBottom, {
    categories: _Config_categories_json__WEBPACK_IMPORTED_MODULE_20__
  })));
};

/***/ }),

/***/ "./assets/CustomHook/cart/useCartFetch.jsx":
/*!*************************************************!*\
  !*** ./assets/CustomHook/cart/useCartFetch.jsx ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useCartFetch": () => (/* binding */ useCartFetch)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.map.js */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.find.js */ "./node_modules/core-js/modules/es.array.find.js");
/* harmony import */ var core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.filter.js */ "./node_modules/core-js/modules/es.array.filter.js");
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_object_from_entries_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.object.from-entries.js */ "./node_modules/core-js/modules/es.object.from-entries.js");
/* harmony import */ var core_js_modules_es_object_from_entries_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_from_entries_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_object_values_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.object.values.js */ "./node_modules/core-js/modules/es.object.values.js");
/* harmony import */ var core_js_modules_es_object_values_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_values_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_array_reduce_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.array.reduce.js */ "./node_modules/core-js/modules/es.array.reduce.js");
/* harmony import */ var core_js_modules_es_array_reduce_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_reduce_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/web.timers.js */ "./node_modules/core-js/modules/web.timers.js");
/* harmony import */ var core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.symbol.to-primitive.js */ "./node_modules/core-js/modules/es.symbol.to-primitive.js");
/* harmony import */ var core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.date.to-primitive.js */ "./node_modules/core-js/modules/es.date.to-primitive.js");
/* harmony import */ var core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.error.cause.js */ "./node_modules/core-js/modules/es.error.cause.js");
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.error.to-string.js */ "./node_modules/core-js/modules/es.error.to-string.js");
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.number.constructor.js */ "./node_modules/core-js/modules/es.number.constructor.js");
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/es.object.keys.js */ "./node_modules/core-js/modules/es.object.keys.js");
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptor.js */ "./node_modules/core-js/modules/es.object.get-own-property-descriptor.js");
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! core-js/modules/es.array.push.js */ "./node_modules/core-js/modules/es.array.push.js");
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptors.js */ "./node_modules/core-js/modules/es.object.get-own-property-descriptors.js");
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var core_js_modules_es_object_define_properties_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! core-js/modules/es.object.define-properties.js */ "./node_modules/core-js/modules/es.object.define-properties.js");
/* harmony import */ var core_js_modules_es_object_define_properties_js__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_properties_js__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! core-js/modules/es.array.is-array.js */ "./node_modules/core-js/modules/es.array.is-array.js");
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_25__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_26___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_26__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_27___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_27__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_28___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_28__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_29___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_29__);
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! core-js/modules/es.array.from.js */ "./node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_30___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_30__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_31___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_31__);
/* harmony import */ var core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! core-js/modules/es.regexp.test.js */ "./node_modules/core-js/modules/es.regexp.test.js");
/* harmony import */ var core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_32___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_32__);
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! core-js/modules/es.promise.js */ "./node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_33___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_33__);
/* harmony import */ var core_js_modules_es_symbol_async_iterator_js__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! core-js/modules/es.symbol.async-iterator.js */ "./node_modules/core-js/modules/es.symbol.async-iterator.js");
/* harmony import */ var core_js_modules_es_symbol_async_iterator_js__WEBPACK_IMPORTED_MODULE_34___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_async_iterator_js__WEBPACK_IMPORTED_MODULE_34__);
/* harmony import */ var core_js_modules_es_symbol_to_string_tag_js__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! core-js/modules/es.symbol.to-string-tag.js */ "./node_modules/core-js/modules/es.symbol.to-string-tag.js");
/* harmony import */ var core_js_modules_es_symbol_to_string_tag_js__WEBPACK_IMPORTED_MODULE_35___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_to_string_tag_js__WEBPACK_IMPORTED_MODULE_35__);
/* harmony import */ var core_js_modules_es_json_to_string_tag_js__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! core-js/modules/es.json.to-string-tag.js */ "./node_modules/core-js/modules/es.json.to-string-tag.js");
/* harmony import */ var core_js_modules_es_json_to_string_tag_js__WEBPACK_IMPORTED_MODULE_36___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_json_to_string_tag_js__WEBPACK_IMPORTED_MODULE_36__);
/* harmony import */ var core_js_modules_es_math_to_string_tag_js__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! core-js/modules/es.math.to-string-tag.js */ "./node_modules/core-js/modules/es.math.to-string-tag.js");
/* harmony import */ var core_js_modules_es_math_to_string_tag_js__WEBPACK_IMPORTED_MODULE_37___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_math_to_string_tag_js__WEBPACK_IMPORTED_MODULE_37__);
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! core-js/modules/es.object.create.js */ "./node_modules/core-js/modules/es.object.create.js");
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_38___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_38__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of.js */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_39___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_39__);
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of.js */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_40___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_40__);
/* harmony import */ var core_js_modules_es_array_reverse_js__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! core-js/modules/es.array.reverse.js */ "./node_modules/core-js/modules/es.array.reverse.js");
/* harmony import */ var core_js_modules_es_array_reverse_js__WEBPACK_IMPORTED_MODULE_41___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_reverse_js__WEBPACK_IMPORTED_MODULE_41__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_42___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_42__);
/* harmony import */ var _functions_api__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ../../functions/api */ "./assets/functions/api.js");
/* harmony import */ var _functions_price_priceOperator__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ../../functions/price/priceOperator */ "./assets/functions/price/priceOperator.js");
/* harmony import */ var _functions_helpers_vendorGroupsLinesExtractor__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ../../functions/helpers/vendorGroupsLinesExtractor */ "./assets/functions/helpers/vendorGroupsLinesExtractor.js");
/* harmony import */ var i18next__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! i18next */ "./node_modules/i18next/dist/esm/i18next.js");
/* harmony import */ var _entrypoints_i18n__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ../../entrypoints/i18n */ "./assets/entrypoints/i18n.js");
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






var reducer = function reducer(cart, action) {
  switch (action.type) {
    case 'START_GENERAL_LOADING':
      return _objectSpread(_objectSpread({}, cart), {}, {
        generalLoading: true
      });
    case 'STOP_GENERAL_LOADING':
      return _objectSpread(_objectSpread({}, cart), {}, {
        generalLoading: false
      });
    case 'FETCH':
      return _objectSpread(_objectSpread({}, cart), {}, {
        // action.payload === fullCart
        cartVendorGroups: action.payload.cartVendorGroups.map(function (cartVendorGroup) {
          return _objectSpread(_objectSpread({}, cartVendorGroup), {}, {
            cartLines: cartVendorGroup.cartLines.map(function (cartLine) {
              return {
                id: cartLine.packaging.id,
                packaging: cartLine.packaging,
                quantity: cartLine.quantity,
                unitPrice: cartLine.unitPrice,
                totalPrice: cartLine.totalPrice,
                error: null
              };
            })
          });
        }),
        count: action.payload.count,
        totalPrice: action.payload.totalPrice,
        generalError: null
      });
    case 'SET_QUANTITY':
      return _objectSpread(_objectSpread({}, cart), {}, {
        cartVendorGroups: cart.cartVendorGroups.map(function (cartVendorGroup) {
          return _objectSpread(_objectSpread({}, cartVendorGroup), {}, {
            cartLines: cartVendorGroup.cartLines.map(function (cartLine) {
              if (cartLine.packaging.id === action.target) {
                //on vérifie le stock
                if (action.payload > cartLine.packaging.stock) {
                  cartLine.quantity = cartLine.packaging.stock;
                  cartLine.error = (0,i18next__WEBPACK_IMPORTED_MODULE_46__.t)('insufficient_stock', {
                    ns: 'messages'
                  });
                } else if (action.payload < 1) {
                  cartLine.quantity = 1;
                  cartLine.error = null;
                } else {
                  cartLine.quantity = action.payload;
                  cartLine.error = null;
                }
                cartLine.totalPrice = (0,_functions_price_priceOperator__WEBPACK_IMPORTED_MODULE_44__.priceMultiply)(cartLine.unitPrice, cartLine.quantity);
              }
              return cartLine;
            })
          });
        })
      });
    case 'REMOVE':
      var lineToRemove = (0,_functions_helpers_vendorGroupsLinesExtractor__WEBPACK_IMPORTED_MODULE_45__.extractCartLines)(cart).find(function (cartLine) {
        return cartLine.packaging.id === action.target;
      });
      var lineTotalPrice = lineToRemove.totalPrice;
      var lineQuantity = lineToRemove.quantity;
      var lineToRemoveId = lineToRemove.id;

      //on prépare le nouvel array cartVendorGroups en supprimant la lineToRemove
      var cartVendorGroups = cart.cartVendorGroups.map(function (cartVendorGroup) {
        return _objectSpread(_objectSpread({}, cartVendorGroup), {}, {
          cartLines: cartVendorGroup.cartLines.filter(function (cartLine) {
            return cartLine.id !== lineToRemoveId;
          })
        });
      });
      return _objectSpread(_objectSpread({}, cart), {}, {
        cartVendorGroups: cartVendorGroups.filter(function (cartVendorGroup) {
          return cartVendorGroup.cartLines.length > 0;
        }),
        //on supprime le vendorGroup s'il n'a plus aucune cartLine
        totalPrice: (0,_functions_price_priceOperator__WEBPACK_IMPORTED_MODULE_44__.priceLess)(cart.totalPrice, lineTotalPrice),
        count: cart.count - lineQuantity
      });
    case 'ERROR':
      return _objectSpread(_objectSpread({}, cart), {}, {
        generalLoading: false,
        generalError: action.payload
      });
    case 'UPDATE_TOTAL_PRICE_AND_COUNT':
      //on crée un tableau contenant tous les cartLine.totalPrice indexés par cartLineId
      var cartLines = (0,_functions_helpers_vendorGroupsLinesExtractor__WEBPACK_IMPORTED_MODULE_45__.extractCartLines)(cart);
      var lineTotalPricesById = Object.fromEntries(cartLines.map(function (cartLine) {
        return [cartLine.id, (0,_functions_price_priceOperator__WEBPACK_IMPORTED_MODULE_44__.priceMultiply)(cartLine.unitPrice, cartLine.quantity)];
      }));
      //on additionne pour obtenir le cart.totalPrice
      var cartTotalPrice = (0,_functions_price_priceOperator__WEBPACK_IMPORTED_MODULE_44__.priceAdd)(Object.values(lineTotalPricesById));
      var count = cartLines.reduce(function (acc, cartLine) {
        return acc + cartLine.quantity;
      }, 0);
      return _objectSpread(_objectSpread({}, cart), {}, {
        cartVendorGroups: cart.cartVendorGroups.map(function (cartVendorGroup) {
          return _objectSpread(_objectSpread({}, cartVendorGroup), {}, {
            cartLines: cartVendorGroup.cartLines.map(function (cartLine) {
              return _objectSpread(_objectSpread({}, cartLine), {}, {
                totalPrice: lineTotalPricesById[cartLine.id] // on met à jour tous les cartLine.totalPrice grâce à notre tableau lineTotalPricesById
              });
            })
          });
        }),

        totalPrice: cartTotalPrice,
        count: count
      });
  }
};

/**
 * @returns 
 */
var useCartFetch = function useCartFetch() {
  var _useReducer = (0,react__WEBPACK_IMPORTED_MODULE_42__.useReducer)(reducer, {
      cartVendorGroups: [],
      count: null,
      totalPrice: null,
      generalLoading: false,
      // loading du fetch
      generalError: null
    }),
    _useReducer2 = _slicedToArray(_useReducer, 2),
    cart = _useReducer2[0],
    dispatch = _useReducer2[1];
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_42__.useState)(null),
    _useState2 = _slicedToArray(_useState, 2),
    quantityTimer = _useState2[0],
    setQuantityTimer = _useState2[1];
  var fetchCart = (0,react__WEBPACK_IMPORTED_MODULE_42__.useCallback)( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
    var fullCart;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          dispatch({
            type: 'START_GENERAL_LOADING'
          });
          _context.prev = 1;
          _context.next = 4;
          return (0,_functions_api__WEBPACK_IMPORTED_MODULE_43__.apiFetch)('/' + _entrypoints_i18n__WEBPACK_IMPORTED_MODULE_47__["default"].language + '/api/cart/getFullCart');
        case 4:
          fullCart = _context.sent;
          dispatch({
            type: 'FETCH',
            payload: fullCart
          });
          _context.next = 11;
          break;
        case 8:
          _context.prev = 8;
          _context.t0 = _context["catch"](1);
          dispatch({
            type: 'ERROR',
            payload: _context.t0
          });
        case 11:
          dispatch({
            type: 'STOP_GENERAL_LOADING'
          });
        case 12:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[1, 8]]);
  })), [dispatch]);
  var remove = (0,react__WEBPACK_IMPORTED_MODULE_42__.useCallback)( /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(packagingId) {
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            dispatch({
              type: 'REMOVE',
              target: packagingId
            });
            _context2.prev = 1;
            _context2.next = 4;
            return (0,_functions_api__WEBPACK_IMPORTED_MODULE_43__.apiFetch)('/' + _entrypoints_i18n__WEBPACK_IMPORTED_MODULE_47__["default"].language + '/api/cart/remove/id-' + packagingId);
          case 4:
            _context2.next = 9;
            break;
          case 6:
            _context2.prev = 6;
            _context2.t0 = _context2["catch"](1);
            //on réactualise pour être raccord avec la database
            fetchCart();
          case 9:
          case "end":
            return _context2.stop();
        }
      }, _callee2, null, [[1, 6]]);
    }));
    return function (_x2) {
      return _ref2.apply(this, arguments);
    };
  }(), [fetchCart, dispatch]);
  var setQuantity = (0,react__WEBPACK_IMPORTED_MODULE_42__.useCallback)(function (packagingId, quantity) {
    dispatch({
      type: 'SET_QUANTITY',
      target: packagingId,
      payload: quantity
    });
    //on doit attendre la mise à jour de l'état ci-dessus pour savoir si l'ajout a pu se faire, et ensuite mettre à jour le prix total et le count
    dispatch({
      type: 'UPDATE_TOTAL_PRICE_AND_COUNT'
    }); //modifie cart et déclenche le cartChipUpdate()

    //coté server : on met un timer pour éviter trop d'appels successif (on appelle le serveur qu'une fois toutes les 300 ms au maximum)
    if (quantityTimer) {
      clearTimeout(quantityTimer);
    }
    setQuantityTimer(setTimeout( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
      return _regeneratorRuntime().wrap(function _callee3$(_context3) {
        while (1) switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            _context3.next = 3;
            return (0,_functions_api__WEBPACK_IMPORTED_MODULE_43__.apiFetch)('/' + _entrypoints_i18n__WEBPACK_IMPORTED_MODULE_47__["default"].language + '/api/cart/setQuantity/id-' + packagingId + '_quantity-' + quantity);
          case 3:
            _context3.next = 8;
            break;
          case 5:
            _context3.prev = 5;
            _context3.t0 = _context3["catch"](0);
            if (!_context3.t0 instanceof _functions_api__WEBPACK_IMPORTED_MODULE_43__.ApiError) {
              //en cas d'erreur autre que stock (gérée en local) on réactualise pour être raccord avec la database
              fetchCart();
            }
          case 8:
          case "end":
            return _context3.stop();
        }
      }, _callee3, null, [[0, 5]]);
    })), 300));
  }, [fetchCart, dispatch, quantityTimer]);
  return {
    cart: cart,
    fetchCart: fetchCart,
    remove: remove,
    setQuantity: setQuantity
  };
};

/***/ }),

/***/ "./assets/CustomHook/form/useButtonLoading.jsx":
/*!*****************************************************!*\
  !*** ./assets/CustomHook/form/useButtonLoading.jsx ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useButtonLoading": () => (/* binding */ useButtonLoading)
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

var useButtonLoading = function useButtonLoading() {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_16__.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    loading = _useState2[0],
    setLoading = _useState2[1];
  var handleButtonClick = function handleButtonClick(e) {
    if (loading) {
      e.preventDefault();
      return;
    }
    setLoading(true);
  };
  return [loading, handleButtonClick];
};

/***/ }),

/***/ "./assets/CustomHook/listener/useScrollYDirectionListener.jsx":
/*!********************************************************************!*\
  !*** ./assets/CustomHook/listener/useScrollYDirectionListener.jsx ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useScrollYDirectionListener": () => (/* binding */ useScrollYDirectionListener)
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
/* harmony import */ var _useScrollYListener__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./useScrollYListener */ "./assets/CustomHook/listener/useScrollYListener.jsx");
















function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }


var useScrollYDirectionListener = function useScrollYDirectionListener() {
  var start = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 70;
  var sensibility = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 50;
  var currentScroll = (0,_useScrollYListener__WEBPACK_IMPORTED_MODULE_17__.useScrollYListener)();
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_16__.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    isScrollingDown = _useState2[0],
    setScrollingDown = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_16__.useState)(false),
    _useState4 = _slicedToArray(_useState3, 2),
    isScrollingUp = _useState4[0],
    setScrollingUp = _useState4[1];
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_16__.useState)(0),
    _useState6 = _slicedToArray(_useState5, 2),
    lastScroll = _useState6[0],
    setLastScroll = _useState6[1];
  (0,react__WEBPACK_IMPORTED_MODULE_16__.useEffect)(function () {
    //on vérifie si on est au dela du scroll start
    if (currentScroll < start) {
      setScrollingUp(false);
      setScrollingDown(false);
      return;
    }
    //on vérifie si on est en scroll down ou up
    if (currentScroll > lastScroll + sensibility) {
      setScrollingUp(false);
      setScrollingDown(true);
      setLastScroll(currentScroll);
    } else if (currentScroll < lastScroll - sensibility) {
      setScrollingDown(false);
      setScrollingUp(true);
      setLastScroll(currentScroll);
    }
  }, [currentScroll]);
  return {
    isScrollingDown: isScrollingDown,
    isScrollingUp: isScrollingUp
  };
};

/***/ }),

/***/ "./assets/CustomHook/listener/useScrollYListener.jsx":
/*!***********************************************************!*\
  !*** ./assets/CustomHook/listener/useScrollYListener.jsx ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useScrollYListener": () => (/* binding */ useScrollYListener)
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

var useScrollYListener = function useScrollYListener() {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_16__.useState)(window.scrollY),
    _useState2 = _slicedToArray(_useState, 2),
    currentScroll = _useState2[0],
    setCurrentScroll = _useState2[1];
  (0,react__WEBPACK_IMPORTED_MODULE_16__.useEffect)(function () {
    var onScroll = function onScroll() {
      setCurrentScroll(window.scrollY);
    };
    window.addEventListener('scroll', onScroll);
    return function () {
      return window.removeEventListener('scroll', onScroll);
    };
  }, []);
  return currentScroll;
};

/***/ }),

/***/ "./assets/UI/Badge/AccountBadge.jsx":
/*!******************************************!*\
  !*** ./assets/UI/Badge/AccountBadge.jsx ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AccountBadge": () => (/* binding */ AccountBadge)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.includes.js */ "./node_modules/core-js/modules/es.array.includes.js");
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.string.includes.js */ "./node_modules/core-js/modules/es.string.includes.js");
/* harmony import */ var core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_string_substr_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.string.substr.js */ "./node_modules/core-js/modules/es.string.substr.js");
/* harmony import */ var core_js_modules_es_string_substr_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_substr_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);




var AccountBadge = function AccountBadge(_ref) {
  var user = _ref.user;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("span", {
    className: "account-icon-logged"
  }, user.roles.includes('ROLE_PRO') && user.company ? user.company.usualName.substr(0, 1).toUpperCase() : user.firstName.substr(0, 1).toUpperCase());
};

/***/ }),

/***/ "./assets/UI/Badge/RoleBadge.jsx":
/*!***************************************!*\
  !*** ./assets/UI/Badge/RoleBadge.jsx ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FlyRoleBadge": () => (/* binding */ FlyRoleBadge),
/* harmony export */   "RoleBadge": () => (/* binding */ RoleBadge)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.includes.js */ "./node_modules/core-js/modules/es.array.includes.js");
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.string.includes.js */ "./node_modules/core-js/modules/es.string.includes.js");
/* harmony import */ var core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var i18next__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! i18next */ "./node_modules/i18next/dist/esm/i18next.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);




var resolveLabel = function resolveLabel(roles) {
  var label = null;
  if (roles.includes('ROLE_ADMIN')) {
    label = 'admin';
  } else if (roles.includes('ROLE_VENDOR')) {
    label = (0,i18next__WEBPACK_IMPORTED_MODULE_2__.t)('vendor', {
      ns: 'messages'
    });
  } else if (roles.includes('ROLE_PRO')) {
    label = (0,i18next__WEBPACK_IMPORTED_MODULE_2__.t)('pro', {
      ns: 'messages'
    });
  }
  return label;
};
var RoleBadge = function RoleBadge(_ref) {
  var roles = _ref.roles,
    additionalClass = _ref.additionalClass,
    _ref$align = _ref.align,
    align = _ref$align === void 0 ? 'left' : _ref$align;
  var label = resolveLabel(roles);
  if (label) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("div", {
      className: align + '-wrapper' + (additionalClass ? ' ' + additionalClass : '')
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("div", {
      className: "text-badge bg-bordeaux-flash"
    }, label));
  }
};
var FlyRoleBadge = function FlyRoleBadge(_ref2) {
  var roles = _ref2.roles,
    additionalClass = _ref2.additionalClass;
  var label = resolveLabel(roles);
  if (label) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("div", {
      className: 'text-badge bg-bordeaux-flash' + (additionalClass ? ' ' + additionalClass : '')
    }, label);
  }
};

/***/ }),

/***/ "./assets/UI/Badge/WarningBadge.jsx":
/*!******************************************!*\
  !*** ./assets/UI/Badge/WarningBadge.jsx ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WarningBadge": () => (/* binding */ WarningBadge)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var WarningBadge = function WarningBadge(_ref) {
  var _ref$number = _ref.number,
    number = _ref$number === void 0 ? 1 : _ref$number;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "badge badge-right warning-badge"
  }, number);
};

/***/ }),

/***/ "./assets/UI/Button/AccountButton.jsx":
/*!********************************************!*\
  !*** ./assets/UI/Button/AccountButton.jsx ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AccountButton": () => (/* binding */ AccountButton)
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
/* harmony import */ var _Icon_AccountIcon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Icon/AccountIcon */ "./assets/UI/Icon/AccountIcon.jsx");
/* harmony import */ var _Badge_AccountBadge__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Badge/AccountBadge */ "./assets/UI/Badge/AccountBadge.jsx");
/* harmony import */ var i18next__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! i18next */ "./node_modules/i18next/dist/esm/i18next.js");





var _excluded = ["children", "onClick", "additionalClass", "user"];
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




var AccountButton = function AccountButton(_ref) {
  var children = _ref.children,
    onClick = _ref.onClick,
    additionalClass = _ref.additionalClass,
    user = _ref.user,
    props = _objectWithoutProperties(_ref, _excluded);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement("button", _extends({
    type: "button",
    className: 'button button-link icon-button' + (additionalClass ? ' ' + additionalClass : ''),
    "aria-label": (0,i18next__WEBPACK_IMPORTED_MODULE_8__.t)('my_account', {
      ns: 'messages'
    }),
    onClick: onClick
  }, props), !user && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement(_Icon_AccountIcon__WEBPACK_IMPORTED_MODULE_6__.AccountIcon, null), user && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement(_Badge_AccountBadge__WEBPACK_IMPORTED_MODULE_7__.AccountBadge, {
    user: user
  }), children);
};

/***/ }),

/***/ "./assets/UI/Button/BecomeVendorLink.jsx":
/*!***********************************************!*\
  !*** ./assets/UI/Button/BecomeVendorLink.jsx ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BecomeVendorLink": () => (/* binding */ BecomeVendorLink)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var i18next__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! i18next */ "./node_modules/i18next/dist/esm/i18next.js");


var BecomeVendorLink = function BecomeVendorLink() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    className: "header-top-vendor-contact-button form-button bordeaux",
    href: (0,i18next__WEBPACK_IMPORTED_MODULE_1__.t)('url.contact.become_vendor', {
      ns: 'urls'
    })
  }, (0,i18next__WEBPACK_IMPORTED_MODULE_1__.t)('become_vendor', {
    ns: 'messages'
  }));
};

/***/ }),

/***/ "./assets/UI/Button/CartButton.jsx":
/*!*****************************************!*\
  !*** ./assets/UI/Button/CartButton.jsx ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CartButton": () => (/* binding */ CartButton)
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
/* harmony import */ var _Icon_CartIcon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Icon/CartIcon */ "./assets/UI/Icon/CartIcon.jsx");
/* harmony import */ var i18next__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! i18next */ "./node_modules/i18next/dist/esm/i18next.js");





var _excluded = ["children", "onClick", "additionalClass"];
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




var CartButton = function CartButton(_ref) {
  var children = _ref.children,
    onClick = _ref.onClick,
    additionalClass = _ref.additionalClass,
    props = _objectWithoutProperties(_ref, _excluded);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement(_Button__WEBPACK_IMPORTED_MODULE_6__.Button, _extends({
    className: 'icon-button' + (additionalClass ? ' ' + additionalClass : ''),
    "aria-label": (0,i18next__WEBPACK_IMPORTED_MODULE_8__.t)('cart', {
      ns: 'messages'
    }),
    title: (0,i18next__WEBPACK_IMPORTED_MODULE_8__.t)('open_cart', {
      ns: 'messages'
    }),
    onClick: onClick
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement(_Icon_CartIcon__WEBPACK_IMPORTED_MODULE_7__.CartIcon, null), children);
};

/***/ }),

/***/ "./assets/UI/Button/ChatButton.jsx":
/*!*****************************************!*\
  !*** ./assets/UI/Button/ChatButton.jsx ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChatButton": () => (/* binding */ ChatButton)
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
/* harmony import */ var _Icon_ChatIcon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Icon/ChatIcon */ "./assets/UI/Icon/ChatIcon.jsx");
/* harmony import */ var i18next__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! i18next */ "./node_modules/i18next/dist/esm/i18next.js");





var _excluded = ["children", "onClick", "additionalClass"];
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




var ChatButton = function ChatButton(_ref) {
  var children = _ref.children,
    onClick = _ref.onClick,
    additionalClass = _ref.additionalClass,
    props = _objectWithoutProperties(_ref, _excluded);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement(_Button__WEBPACK_IMPORTED_MODULE_6__.Button, _extends({
    className: 'icon-button' + (additionalClass ? ' ' + additionalClass : ''),
    "aria-label": (0,i18next__WEBPACK_IMPORTED_MODULE_8__.t)('contact_us', {
      ns: 'messages'
    }),
    title: (0,i18next__WEBPACK_IMPORTED_MODULE_8__.t)('contact_us', {
      ns: 'messages'
    }),
    onClick: onClick
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement(_Icon_ChatIcon__WEBPACK_IMPORTED_MODULE_7__.ChatIcon, null), children);
};

/***/ }),

/***/ "./assets/UI/Button/LogoutButton.jsx":
/*!*******************************************!*\
  !*** ./assets/UI/Button/LogoutButton.jsx ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LogoutButton": () => (/* binding */ LogoutButton)
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
/* harmony import */ var _Icon_LogoutIcon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Icon/LogoutIcon */ "./assets/UI/Icon/LogoutIcon.jsx");
/* harmony import */ var _entrypoints_i18n__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../entrypoints/i18n */ "./assets/entrypoints/i18n.js");
/* harmony import */ var i18next__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! i18next */ "./node_modules/i18next/dist/esm/i18next.js");





var _excluded = ["className"];
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




var LogoutButton = function LogoutButton(_ref) {
  var className = _ref.className,
    props = _objectWithoutProperties(_ref, _excluded);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement("a", _extends({
    className: className !== null && className !== void 0 ? className : 'link-mute simple-link i-text',
    href: '/' + _entrypoints_i18n__WEBPACK_IMPORTED_MODULE_7__["default"].language + '/logout'
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement(_Icon_LogoutIcon__WEBPACK_IMPORTED_MODULE_6__.LogoutIcon, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement("span", null, (0,i18next__WEBPACK_IMPORTED_MODULE_8__.t)('logout', {
    ns: 'messages'
  })));
};

/***/ }),

/***/ "./assets/UI/Button/MenuButton.jsx":
/*!*****************************************!*\
  !*** ./assets/UI/Button/MenuButton.jsx ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MenuButton": () => (/* binding */ MenuButton)
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
/* harmony import */ var _Icon_MenuIcon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Icon/MenuIcon */ "./assets/UI/Icon/MenuIcon.jsx");
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Button */ "./assets/UI/Button/Button.jsx");
/* harmony import */ var i18next__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! i18next */ "./node_modules/i18next/dist/esm/i18next.js");





var _excluded = ["additionalClass"];
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




var MenuButton = function MenuButton(_ref) {
  var additionalClass = _ref.additionalClass,
    props = _objectWithoutProperties(_ref, _excluded);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement(_Button__WEBPACK_IMPORTED_MODULE_7__.Button, _extends({
    className: 'icon-button' + (additionalClass ? ' ' + additionalClass : ''),
    "aria-label": (0,i18next__WEBPACK_IMPORTED_MODULE_8__.t)('menu', {
      ns: 'messages'
    }),
    title: (0,i18next__WEBPACK_IMPORTED_MODULE_8__.t)('menu', {
      ns: 'messages'
    })
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement(_Icon_MenuIcon__WEBPACK_IMPORTED_MODULE_6__.MenuIcon, null));
};

/***/ }),

/***/ "./assets/UI/Button/SearchButton.jsx":
/*!*******************************************!*\
  !*** ./assets/UI/Button/SearchButton.jsx ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SearchButton": () => (/* binding */ SearchButton)
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
/* harmony import */ var _Icon_SearchIcon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Icon/SearchIcon */ "./assets/UI/Icon/SearchIcon.jsx");
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Button */ "./assets/UI/Button/Button.jsx");
/* harmony import */ var i18next__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! i18next */ "./node_modules/i18next/dist/esm/i18next.js");





var _excluded = ["additionalClass"];
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




var SearchButton = function SearchButton(_ref) {
  var additionalClass = _ref.additionalClass,
    props = _objectWithoutProperties(_ref, _excluded);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement(_Button__WEBPACK_IMPORTED_MODULE_7__.Button, _extends({
    className: 'icon-button' + (additionalClass ? ' ' + additionalClass : ''),
    "aria-label": (0,i18next__WEBPACK_IMPORTED_MODULE_8__.t)('search', {
      ns: 'messages'
    }),
    title: (0,i18next__WEBPACK_IMPORTED_MODULE_8__.t)('search', {
      ns: 'messages'
    })
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement(_Icon_SearchIcon__WEBPACK_IMPORTED_MODULE_6__.SearchIcon, null));
};

/***/ }),

/***/ "./assets/UI/Button/Social/FacebookLink.jsx":
/*!**************************************************!*\
  !*** ./assets/UI/Button/Social/FacebookLink.jsx ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FacebookLink": () => (/* binding */ FacebookLink)
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





var _excluded = ["className"];
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }


var FacebookLink = function FacebookLink(_ref) {
  var className = _ref.className,
    props = _objectWithoutProperties(_ref, _excluded);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement("a", {
    href: "https://m.facebook.com/people/Cocktailissimo/100094160658832/",
    className: className,
    title: (0,i18next__WEBPACK_IMPORTED_MODULE_5__.t)('follow_us_on_facebook', {
      ns: 'messages'
    }),
    "aria-label": (0,i18next__WEBPACK_IMPORTED_MODULE_5__.t)('follow_us_on_facebook', {
      ns: 'messages'
    })
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement("svg", _extends({
    className: "icon i-social i-facebook"
  }, props, {
    version: "1.1",
    xmlns: "http://www.w3.org/2000/svg",
    x: "0px",
    y: "0px",
    viewBox: "0 0 155.139 155.139"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement("g", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement("path", {
    fill: "currentColor",
    id: "f_1_",
    d: "M89.584,155.139V84.378h23.742l3.562-27.585H89.584V39.184\r c0-7.984,2.208-13.425,13.67-13.425l14.595-0.006V1.08C115.325,0.752,106.661,0,96.577,0C75.52,0,61.104,12.853,61.104,36.452\r v20.341H37.29v27.585h23.814v70.761H89.584z"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement("g", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement("g", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement("g", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement("g", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement("g", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement("g", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement("g", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement("g", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement("g", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement("g", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement("g", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement("g", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement("g", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement("g", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement("g", null)));
};

/***/ }),

/***/ "./assets/UI/Button/Social/InstagramLink.jsx":
/*!***************************************************!*\
  !*** ./assets/UI/Button/Social/InstagramLink.jsx ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InstagramLink": () => (/* binding */ InstagramLink)
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





var _excluded = ["className"];
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }


var InstagramLink = function InstagramLink(_ref) {
  var className = _ref.className,
    props = _objectWithoutProperties(_ref, _excluded);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement("a", {
    href: "https://www.instagram.com/cocktaillissimo/",
    className: className,
    "aria-label": (0,i18next__WEBPACK_IMPORTED_MODULE_5__.t)('follow_us_on_instagram', {
      ns: 'messages'
    }),
    title: (0,i18next__WEBPACK_IMPORTED_MODULE_5__.t)('follow_us_on_instagram', {
      ns: 'messages'
    })
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement("svg", _extends({
    className: "icon i-social i-instagram"
  }, props, {
    version: "1.1",
    id: "instagram",
    xmlns: "http://www.w3.org/2000/svg",
    x: "0px",
    y: "0px",
    viewBox: "0 0 512 512"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement("g", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement("g", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement("path", {
    fill: "currentColor",
    d: "M371.643,0H140.357C62.964,0,0,62.964,0,140.358v231.285C0,449.037,62.964,512,140.357,512h231.286\r C449.037,512,512,449.037,512,371.643V140.358C512,62.964,449.037,0,371.643,0z M481.764,371.643\r c0,60.721-49.399,110.121-110.121,110.121H140.357c-60.721,0-110.121-49.399-110.121-110.121V140.358\r c0-60.722,49.4-110.122,110.121-110.122h231.286c60.722,0,110.121,49.4,110.121,110.122V371.643z"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement("g", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement("g", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement("path", {
    fill: "currentColor",
    d: "M256,115.57c-77.434,0-140.431,62.997-140.431,140.431S178.565,396.432,256,396.432\r c77.434,0,140.432-62.998,140.432-140.432S333.434,115.57,256,115.57z M256,366.197c-60.762,0-110.196-49.435-110.196-110.197\r c0-60.762,49.434-110.196,110.196-110.196c60.763,0,110.197,49.435,110.197,110.197C366.197,316.763,316.763,366.197,256,366.197z\r "
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement("g", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement("g", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement("path", {
    fill: "currentColor",
    d: "M404.831,64.503c-23.526,0-42.666,19.141-42.666,42.667c0,23.526,19.14,42.666,42.666,42.666\r c23.526,0,42.666-19.141,42.666-42.667S428.357,64.503,404.831,64.503z M404.831,119.599c-6.853,0-12.43-5.576-12.43-12.43\r s5.577-12.43,12.43-12.43c6.854,0,12.43,5.577,12.43,12.43S411.685,119.599,404.831,119.599z"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement("g", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement("g", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement("g", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement("g", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement("g", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement("g", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement("g", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement("g", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement("g", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement("g", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement("g", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement("g", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement("g", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement("g", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement("g", null)));
};

/***/ }),

/***/ "./assets/UI/Container/Modal.jsx":
/*!***************************************!*\
  !*** ./assets/UI/Container/Modal.jsx ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Modal": () => (/* binding */ Modal)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Button_CloseButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Button/CloseButton */ "./assets/UI/Button/CloseButton.jsx");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");






var Modal = (0,react__WEBPACK_IMPORTED_MODULE_3__.forwardRef)(function (_ref, modalRef) {
  var children = _ref.children,
    additionalClass = _ref.additionalClass,
    isOpen = _ref.isOpen,
    _ref$close = _ref.close,
    close = _ref$close === void 0 ? null : _ref$close,
    _ref$animated = _ref.animated,
    animated = _ref$animated === void 0 ? true : _ref$animated;
  (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function () {
    if (isOpen) {
      document.querySelectorAll('html, body').forEach(function (elt) {
        return elt.classList.add('no-overflow');
      });
    } else {
      document.querySelectorAll('html, body').forEach(function (elt) {
        return elt.classList.remove('no-overflow');
      });
    }
  }, [isOpen]);
  var containerRef = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)();
  var handleClose = function handleClose() {
    if (!close) {
      return;
    }
    if (!animated) {
      close();
      return;
    }
    containerRef.current.classList.add('close');
    containerRef.current.addEventListener('animationend', function () {
      close();
    });
  };
  var handleStopPropagation = function handleStopPropagation(e) {
    e.stopPropagation();
  };
  return isOpen && (0,react_dom__WEBPACK_IMPORTED_MODULE_5__.createPortal)( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("div", {
    ref: containerRef,
    className: 'modal-container' + (additionalClass ? ' ' + additionalClass + '-container' : ''),
    onClick: handleClose
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("div", {
    ref: modalRef,
    className: 'modal' + (additionalClass ? ' ' + additionalClass : ''),
    onClick: handleStopPropagation
  }, close !== null && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_Button_CloseButton__WEBPACK_IMPORTED_MODULE_4__.CloseButton, {
    additionalClass: "modal-closer",
    onClick: handleClose
  }), children)), document.body);
});

/***/ }),

/***/ "./assets/UI/Form/ControlledRadioFields.jsx":
/*!**************************************************!*\
  !*** ./assets/UI/Form/ControlledRadioFields.jsx ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ControlledRadioField": () => (/* binding */ ControlledRadioField),
/* harmony export */   "ControlledRadioFields": () => (/* binding */ ControlledRadioFields)
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
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! core-js/modules/es.array.map.js */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var core_js_modules_es_object_entries_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! core-js/modules/es.object.entries.js */ "./node_modules/core-js/modules/es.object.entries.js");
/* harmony import */ var core_js_modules_es_object_entries_js__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_entries_js__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! core-js/modules/es.object.assign.js */ "./node_modules/core-js/modules/es.object.assign.js");
/* harmony import */ var core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! react-hook-form */ "./node_modules/react-hook-form/dist/index.esm.mjs");


















var _excluded = ["control", "name", "children", "choices", "error", "isRequiredField"];
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


var ControlledRadioFields = function ControlledRadioFields(_ref) {
  var control = _ref.control,
    name = _ref.name,
    children = _ref.children,
    choices = _ref.choices,
    error = _ref.error,
    isRequiredField = _ref.isRequiredField,
    props = _objectWithoutProperties(_ref, _excluded);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_22___default().createElement("div", {
    className: 'form-group' + (error ? ' is-invalid' : '')
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_22___default().createElement("label", {
    className: "form-label"
  }, children), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_22___default().createElement("div", {
    className: "radio-group-wrapper"
  }, Object.entries(choices).map(function (_ref2) {
    var _ref3 = _slicedToArray(_ref2, 2),
      label = _ref3[0],
      value = _ref3[1];
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_22___default().createElement(ControlledRadioField, _extends({
      key: value,
      value: value,
      error: error,
      control: control,
      name: name
    }, props), label);
  }), isRequiredField && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_22___default().createElement("div", {
    className: "radio-group radio-group-asterix"
  }, "*")), error && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_22___default().createElement("div", {
    className: "form-error"
  }, error));
};
var ControlledRadioField = function ControlledRadioField(_ref4) {
  var children = _ref4.children,
    control = _ref4.control,
    name = _ref4.name,
    value = _ref4.value,
    _ref4$defaultValue = _ref4.defaultValue,
    defaultValue = _ref4$defaultValue === void 0 ? null : _ref4$defaultValue,
    error = _ref4.error,
    _ref4$additionalClass = _ref4.additionalClass,
    additionalClass = _ref4$additionalClass === void 0 ? '' : _ref4$additionalClass;
  var _useController = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_23__.useController)({
      control: control,
      name: name
    }),
    props = Object.assign({}, (_objectDestructuringEmpty(_useController.field), _useController.field));
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_22___default().createElement("div", {
    className: 'radio-group' + (error ? ' is-invalid' : '')
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_22___default().createElement("input", _extends({}, props, {
    value: value,
    type: "radio",
    className: 'form-radio' + (additionalClass ? ' ' + additionalClass : ''),
    id: value,
    checked: props.value == value /* égalité non stricte car on peut avoir une value integer et une props.value string */
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_22___default().createElement("label", {
    className: "form-label",
    htmlFor: value
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_22___default().createElement("div", {
    className: "custom-radio",
    role: "radio",
    "aria-labelledby": "radio-label"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_22___default().createElement("div", {
    className: "custom-radio-core"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_22___default().createElement("span", {
    className: "radio-label"
  }, children)));
};

/***/ }),

/***/ "./assets/UI/Icon/AccountIcon.jsx":
/*!****************************************!*\
  !*** ./assets/UI/Icon/AccountIcon.jsx ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AccountIcon": () => (/* binding */ AccountIcon)
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

var AccountIcon = function AccountIcon(_ref) {
  var additionalClass = _ref.additionalClass,
    props = _objectWithoutProperties(_ref, _excluded);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement("svg", _extends({
    className: 'icon i-account' + (additionalClass ? ' ' + additionalClass : '')
  }, props, {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 100 100"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement("path", {
    fill: "currentColor",
    d: "m50 48.67c12.23 0 22.18-9.95 22.18-22.18s-9.95-22.18-22.18-22.18-22.18 9.95-22.18 22.18 9.95 22.18 22.18 22.18zm0-41.36c10.58 0 19.18 8.6 19.18 19.18s-8.6 19.18-19.18 19.18-19.18-8.6-19.18-19.18 8.6-19.18 19.18-19.18z"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement("path", {
    fill: "currentColor",
    d: "m18.91 94.89h62.19c1.91 0 3.72-.83 4.97-2.29 1.22-1.43 1.76-3.31 1.47-5.15-2.92-18.57-18.7-32.05-37.53-32.05s-34.61 13.48-37.53 32.05c-.29 1.84.24 3.72 1.47 5.15 1.24 1.46 3.05 2.29 4.97 2.29zm-3.47-6.97c2.69-17.1 17.22-29.52 34.57-29.52s31.88 12.41 34.57 29.52c.16.99-.12 1.96-.78 2.73-.67.79-1.65 1.24-2.69 1.24h-62.2c-1.03 0-2.01-.45-2.69-1.24-.66-.77-.94-1.74-.78-2.73z"
  }));
};

/***/ }),

/***/ "./assets/UI/Icon/Arrows/RightArrowBarIcon.jsx":
/*!*****************************************************!*\
  !*** ./assets/UI/Icon/Arrows/RightArrowBarIcon.jsx ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RightArrowBarIcon": () => (/* binding */ RightArrowBarIcon)
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

var RightArrowBarIcon = function RightArrowBarIcon(_ref) {
  var additionalClass = _ref.additionalClass,
    props = _objectWithoutProperties(_ref, _excluded);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement("svg", _extends({
    className: 'icon i-right-arrow-bar' + (additionalClass ? ' ' + additionalClass : '')
  }, props, {
    viewBox: "0 0 32 32",
    xmlns: "http://www.w3.org/2000/svg"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement("g", {
    clipRule: "evenodd",
    fillRule: "evenodd"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement("path", {
    fill: "currentColor",
    d: "m4 16c0-.5523.44772-1 1-1h22c.5523 0 1 .4477 1 1s-.4477 1-1 1h-22c-.55228 0-1-.4477-1-1z"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement("path", {
    fill: "currentColor",
    d: "m17.2929 6.29289c.3905-.39052 1.0237-.39052 1.4142 0l9 9.00001c.3905.3905.3905 1.0237 0 1.4142l-9 9c-.3905.3905-1.0237.3905-1.4142 0s-.3905-1.0237 0-1.4142l8.2929-8.2929-8.2929-8.29289c-.3905-.39053-.3905-1.02369 0-1.41422z"
  })));
};

/***/ }),

/***/ "./assets/UI/Icon/CartIcon.jsx":
/*!*************************************!*\
  !*** ./assets/UI/Icon/CartIcon.jsx ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CartIcon": () => (/* binding */ CartIcon)
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

var CartIcon = function CartIcon(_ref) {
  var additionalClass = _ref.additionalClass,
    props = _objectWithoutProperties(_ref, _excluded);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement("svg", _extends({
    className: 'icon i-cart' + (additionalClass ? ' ' + additionalClass : '')
  }, props, {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 64 64"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement("path", {
    fill: "currentColor",
    d: "m46.77 22.29a1 1 0 0 0 -1-.87h-5.51v-2a8.26 8.26 0 0 0 -16.52 0v2h-5.52a1 1 0 0 0 -1 .87l-3.71 28.14a1 1 0 0 0 .26.81c.42.45.88.91 1.38 1.36a1 1 0 0 0 .67.26h32.36a1 1 0 0 0 .67-.26c.49-.45 1-.91 1.38-1.36a1 1 0 0 0 .26-.81zm-21-2.89a6.26 6.26 0 0 1 12.52 0v2h-12.55zm22 31.46h-31.56l-.66-.64 3.54-26.8h25.81l3.54 26.8z"
  }));
};

/***/ }),

/***/ "./assets/UI/Icon/ChatIcon.jsx":
/*!*************************************!*\
  !*** ./assets/UI/Icon/ChatIcon.jsx ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChatIcon": () => (/* binding */ ChatIcon)
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

var ChatIcon = function ChatIcon(_ref) {
  var additionalClass = _ref.additionalClass,
    props = _objectWithoutProperties(_ref, _excluded);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement("svg", _extends({
    className: 'icon i-chat' + (additionalClass ? ' ' + additionalClass : '')
  }, props, {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 -960 960 960"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement("path", {
    fill: "currentColor",
    d: "M313.692-530.692q12.385 0 21.577-9.193 9.193-9.192 9.193-21.577 0-12.384-9.193-21.577-9.192-9.192-21.577-9.192-13.154 0-21.961 9.192-8.808 9.193-8.808 21.577 0 12.385 8.808 21.577 8.807 9.193 21.961 9.193Zm167.77 0q12.384 0 21.577-9.193 9.192-9.192 9.192-21.577 0-12.384-9.192-21.577-9.193-9.192-21.577-9.192-12.385 0-21.577 9.192-9.193 9.193-9.193 21.577 0 12.385 9.193 21.577 9.192 9.193 21.577 9.193Zm164.615 0q12.385 0 21.577-9.193 9.192-9.192 9.192-21.577 0-12.384-9.192-21.577-9.192-9.192-21.577-9.192-12.385 0-21.577 9.192-9.192 9.193-9.192 21.577 0 12.385 9.192 21.577 9.192 9.193 21.577 9.193ZM120-156.923v-627.693q0-23.057 16.163-39.221Q152.327-840 175.384-840h609.232q23.057 0 39.221 16.163Q840-807.673 840-784.616v449.232q0 23.057-16.163 39.221Q807.673-280 784.616-280H243.077L120-156.923Zm109.385-153.846h555.231q9.23 0 16.923-7.692 7.692-7.693 7.692-16.923v-449.232q0-9.23-7.692-16.923-7.693-7.692-16.923-7.692H175.384q-9.23 0-16.923 7.692-7.692 7.693-7.692 16.923v555.385l78.616-81.538Zm-78.616 0v-498.462V-310.769Z"
  }));
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

/***/ }),

/***/ "./assets/UI/Icon/DashboardIcon.jsx":
/*!******************************************!*\
  !*** ./assets/UI/Icon/DashboardIcon.jsx ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DashboardIcon": () => (/* binding */ DashboardIcon)
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

var DashboardIcon = function DashboardIcon(_ref) {
  var additionalClass = _ref.additionalClass,
    props = _objectWithoutProperties(_ref, _excluded);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement("svg", _extends({
    className: 'icon i-dashboard' + (additionalClass ? ' ' + additionalClass : '')
  }, props, {
    viewBox: "0 -91 512 512",
    xmlns: "http://www.w3.org/2000/svg"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement("path", {
    fill: "currentColor",
    d: "m512 288h-106.667969v-21.332031h85.335938v-10.667969c0-129.332031-105.335938-234.667969-234.667969-234.667969s-234.667969 105.335938-234.667969 234.667969v10.667969h85.335938v21.332031h-106.667969v-32c0-141.199219 114.800781-256 256-256s256 114.800781 256 256zm0 0"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement("path", {
    fill: "currentColor",
    d: "m245.332031 10.667969h21.335938v64h-21.335938zm0 0"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement("path", {
    fill: "currentColor",
    d: "m79.726562 85.949219 51.664063 51.664062-15.082031 15.085938-51.667969-51.664063zm0 0"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement("path", {
    fill: "currentColor",
    d: "m432.292969 85.964844 15.085937 15.085937-51.667968 51.664063-15.082032-15.085938zm0 0"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement("path", {
    fill: "currentColor",
    d: "m259.066406 330.667969c-31.066406 0-56.398437-25.335938-56.398437-56.402344 0-21.597656 12.664062-41.597656 32.132812-50.933594l144-68.664062-68.667969 144c-9.332031 19.332031-29.332031 32-51.066406 32zm74.535156-130.933594-89.601562 42.800781c-12.132812 5.730469-20 18.265625-20 31.730469 0 19.335937 15.734375 35.066406 35.066406 35.066406 13.46875 0 25.867188-7.867187 31.734375-20zm0 0"
  }));
};

/***/ }),

/***/ "./assets/UI/Icon/LogoutIcon.jsx":
/*!***************************************!*\
  !*** ./assets/UI/Icon/LogoutIcon.jsx ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LogoutIcon": () => (/* binding */ LogoutIcon)
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

var LogoutIcon = function LogoutIcon(_ref) {
  var additionalClass = _ref.additionalClass,
    props = _objectWithoutProperties(_ref, _excluded);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement("svg", _extends({
    className: 'icon i-logout' + (additionalClass ? ' ' + additionalClass : '')
  }, props, {
    viewBox: "0 0 512 512",
    xmlns: "http://www.w3.org/2000/svg"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement("path", {
    fill: "currentColor",
    d: "m212 496c0 8.837-7.163 16-16 16h-114.545c-31.38 0-56.91-25.529-56.91-56.909v-398.181c0-31.38 25.53-56.91 56.91-56.91h114.545c8.837 0 16 7.163 16 16s-7.163 16-16 16h-114.545c-13.735 0-24.91 11.175-24.91 24.91v398.181c0 13.735 11.175 24.909 24.91 24.909h114.545c8.837 0 16 7.163 16 16zm270.258-251.802-104.832-95.956c-6.517-5.965-16.639-5.521-22.604.999-5.967 6.518-5.52 16.639.999 22.604l74.458 68.155h-277.914c-8.837 0-16 7.163-16 16s7.163 16 16 16h277.914l-74.459 68.155c-6.519 5.966-6.966 16.087-.999 22.604 3.155 3.448 7.474 5.197 11.806 5.197 3.858 0 7.729-1.388 10.799-4.198l104.832-95.957c3.312-3.03 5.197-7.313 5.197-11.802s-1.886-8.77-5.197-11.801z"
  }));
};

/***/ }),

/***/ "./assets/UI/Icon/MenuIcon.jsx":
/*!*************************************!*\
  !*** ./assets/UI/Icon/MenuIcon.jsx ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MenuIcon": () => (/* binding */ MenuIcon)
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

var MenuIcon = function MenuIcon(_ref) {
  var additionalClass = _ref.additionalClass,
    props = _objectWithoutProperties(_ref, _excluded);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement("svg", _extends({
    className: 'icon i-menu' + (additionalClass ? ' ' + additionalClass : '')
  }, props, {
    enableBackground: "new 0 0 32 32",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 32 32"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement("g", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement("path", {
    fill: "currentColor",
    d: "m25.3 9h-18.6c-.4 0-.7-.3-.7-.8s.3-.8.8-.8h18.5c.4 0 .8.3.8.8s-.4.8-.8.8z"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement("g", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement("path", {
    fill: "currentColor",
    d: "m25.3 16h-18.6c-.4 0-.7-.3-.7-.8s.3-.8.8-.8h18.5c.4 0 .8.3.8.8s-.4.8-.8.8z"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement("g", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement("path", {
    fill: "currentColor",
    d: "m25.3 23h-18.6c-.4 0-.7-.3-.7-.8s.3-.8.8-.8h18.5c.4 0 .8.3.8.8s-.4.8-.8.8z"
  })));
};

/***/ }),

/***/ "./assets/UI/Icon/Quantity/MinusIcon.jsx":
/*!***********************************************!*\
  !*** ./assets/UI/Icon/Quantity/MinusIcon.jsx ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MinusIcon": () => (/* binding */ MinusIcon)
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

var MinusIcon = function MinusIcon(_ref) {
  var additionalClass = _ref.additionalClass,
    props = _objectWithoutProperties(_ref, _excluded);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement("svg", _extends({
    className: 'icon i-minus' + (additionalClass ? ' ' + additionalClass : '')
  }, props, {
    xmlns: "http://www.w3.org/2000/svg",
    x: "0px",
    y: "0px",
    viewBox: "0 0 469.333 469.333",
    enableBackground: "new 0 0 469.333 469.333"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement("g", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement("g", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement("path", {
    fill: "currentColor",
    d: "M458.667,224h-448C4.779,224,0,228.779,0,234.667s4.779,10.667,10.667,10.667h448c5.888,0,10.667-4.779,10.667-10.667\r S464.555,224,458.667,224z"
  }))));
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

/***/ "./assets/UI/Logo/HeaderLogo.jsx":
/*!***************************************!*\
  !*** ./assets/UI/Logo/HeaderLogo.jsx ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HeaderLogo": () => (/* binding */ HeaderLogo)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");


var HeaderLogo = function HeaderLogo() {
  var _useTranslation = (0,react_i18next__WEBPACK_IMPORTED_MODULE_1__.useTranslation)('messages'),
    t = _useTranslation.t,
    i18n = _useTranslation.i18n;
  var href = '/' + i18n.language;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    className: "header-logo-link",
    href: href,
    "aria-label": t('home'),
    title: t('home')
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    className: "header-logo",
    src: "/img/logo/logo.png",
    alt: t('cocktailissimo_logo')
  }));
};

/***/ }),

/***/ "./assets/UI/Utils/RemoveConfirm.jsx":
/*!*******************************************!*\
  !*** ./assets/UI/Utils/RemoveConfirm.jsx ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RemoveConfirm": () => (/* binding */ RemoveConfirm)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_UI_Utils_removeConfirm_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../styles/UI/Utils/removeConfirm.css */ "./assets/styles/UI/Utils/removeConfirm.css");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");



var RemoveConfirm = function RemoveConfirm(_ref) {
  var onConfirm = _ref.onConfirm,
    close = _ref.close;
  var _useTranslation = (0,react_i18next__WEBPACK_IMPORTED_MODULE_2__.useTranslation)('messages'),
    t = _useTranslation.t;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "remove-confirm-controls"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, t('ask.delete')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    className: "remove-confirm-control yes",
    onClick: onConfirm
  }, t('yes')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    className: "remove-confirm-control no",
    onClick: close
  }, t('no'))));
};

/***/ }),

/***/ "./assets/entrypoints/header.js":
/*!**************************************!*\
  !*** ./assets/entrypoints/header.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom/client */ "./node_modules/react-dom/client.js");
/* harmony import */ var _Components_Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Components/Header */ "./assets/Components/Header/index.jsx");
/* harmony import */ var _functions_language_configureLanguage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../functions/language/configureLanguage */ "./assets/functions/language/configureLanguage.js");




(0,_functions_language_configureLanguage__WEBPACK_IMPORTED_MODULE_3__.configureLanguage)();
var header = document.getElementById('header');
var headerRoot = (0,react_dom_client__WEBPACK_IMPORTED_MODULE_1__.createRoot)(header);
headerRoot.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Components_Header__WEBPACK_IMPORTED_MODULE_2__.Header, null));

/***/ }),

/***/ "./assets/functions/helpers/vendorGroupsLinesExtractor.js":
/*!****************************************************************!*\
  !*** ./assets/functions/helpers/vendorGroupsLinesExtractor.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "extractCartLines": () => (/* binding */ extractCartLines)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.concat.js */ "./node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.from.js */ "./node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.regexp.test.js */ "./node_modules/core-js/modules/es.regexp.test.js");
/* harmony import */ var core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.array.is-array.js */ "./node_modules/core-js/modules/es.array.is-array.js");
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.error.cause.js */ "./node_modules/core-js/modules/es.error.cause.js");
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.error.to-string.js */ "./node_modules/core-js/modules/es.error.to-string.js");
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_15__);
















function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
/**
 * 
 * @param {Object} cart 
 * @return {array} cartLines
 */
var extractCartLines = function extractCartLines(cart) {
  var cartLines = [];
  var _iterator = _createForOfIteratorHelper(cart.cartVendorGroups),
    _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var cartVendorGroup = _step.value;
      cartLines = cartLines.concat(cartVendorGroup.cartLines);
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
  return cartLines;
};

/***/ }),

/***/ "./assets/styles/Header/HeaderBottom/categoryMenu.css":
/*!************************************************************!*\
  !*** ./assets/styles/Header/HeaderBottom/categoryMenu.css ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./assets/styles/Header/HeaderBottom/index.css":
/*!*****************************************************!*\
  !*** ./assets/styles/Header/HeaderBottom/index.css ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./assets/styles/UI/Utils/removeConfirm.css":
/*!**************************************************!*\
  !*** ./assets/styles/UI/Utils/removeConfirm.css ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./assets/styles/header/HeaderTop/MobileMenu/index.css":
/*!*************************************************************!*\
  !*** ./assets/styles/header/HeaderTop/MobileMenu/index.css ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./assets/styles/header/HeaderTop/MobileMenu/mobileMenufooter.css":
/*!************************************************************************!*\
  !*** ./assets/styles/header/HeaderTop/MobileMenu/mobileMenufooter.css ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./assets/styles/header/HeaderTop/accountCard.css":
/*!********************************************************!*\
  !*** ./assets/styles/header/HeaderTop/accountCard.css ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./assets/styles/header/HeaderTop/index.css":
/*!**************************************************!*\
  !*** ./assets/styles/header/HeaderTop/index.css ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./assets/styles/header/HeaderTop/inlineSearchTool.css":
/*!*************************************************************!*\
  !*** ./assets/styles/header/HeaderTop/inlineSearchTool.css ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./assets/styles/header/HeaderTop/sideMenu.css":
/*!*****************************************************!*\
  !*** ./assets/styles/header/HeaderTop/sideMenu.css ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./assets/styles/header/HeaderTop/sideSearchTool.css":
/*!***********************************************************!*\
  !*** ./assets/styles/header/HeaderTop/sideSearchTool.css ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./assets/styles/header/index.css":
/*!****************************************!*\
  !*** ./assets/styles/header/index.css ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_core-js_modules_es_array_concat_js-node_modules_core-js_modules_es_array-a9bb89","vendors-node_modules_core-js_modules_es_array_map_js-node_modules_yup_index_esm_js-node_modul-2aaf22","vendors-node_modules_core-js_modules_es_date_to-string_js-node_modules_core-js_modules_es_par-13cb00","vendors-node_modules_core-js_modules_es_array_find_js-node_modules_core-js_modules_es_array_r-b9e903","assets_UI_Icon_Loader_jsx-assets_entrypoints_i18n_js-assets_functions_api_js","assets_CustomHook_state_useOpenState_jsx-assets_UI_Form_FormButton_jsx-assets_UI_Product_Pric-f56e77","assets_CustomHook_form_useFormWithValidation_jsx-assets_UI_Form_TextField_jsx","assets_Components_Shop_ProductIndex_ProductCard_jsx","assets_CustomHook_useGetUser_jsx-assets_UI_Icon_TrashIcon_jsx","assets_Config_categories_json","assets_CustomHook_fetch_useFetchQSearch_jsx-assets_UI_Button_TrashButton_jsx","assets_UI_Button_LinkButton_jsx-assets_UI_Flash_Flash_jsx"], () => (__webpack_exec__("./assets/entrypoints/header.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0FBQ3VjLE1BQU0sQ0FBQ3hjLGVBQWUsQ0FBQ0MsU0FBUyxDQUFDO0lBQzNEO0VBQUMsU0FBQTBELEdBQUE7SUFBQXlZLFNBQUEsQ0FBQWpsQixDQUFBLENBQUF3TSxHQUFBO0VBQUE7SUFBQXlZLFNBQUEsQ0FBQUssQ0FBQTtFQUFBO0VBQ0QsT0FBT3hjLFNBQVM7QUFDcEIsQ0FBQzs7Ozs7Ozs7Ozs7QUNYRDs7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7O0FDQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvQ29tcG9uZW50cy9CbG9nL0FydGljbGUvQXJ0aWNsZUluZGV4L0FydGljbGVDYXJkLmpzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvQ29tcG9uZW50cy9CbG9nL1JlY2lwZS9SZWNpcGVJbmRleC9SZWNpcGVDYXJkLmpzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvQ29tcG9uZW50cy9IZWFkZXIvSGVhZGVyQm90dG9tL0NhdGVnb3J5TWVudS9DYXRlZ29yeUxpbmsuanN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9Db21wb25lbnRzL0hlYWRlci9IZWFkZXJCb3R0b20vQ2F0ZWdvcnlNZW51L1N1YkNhdGVnb3J5TWVudS9TdWJDYXRlZ29yeUxpbmsuanN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9Db21wb25lbnRzL0hlYWRlci9IZWFkZXJCb3R0b20vQ2F0ZWdvcnlNZW51L1N1YkNhdGVnb3J5TWVudS9TdWJDYXRlZ29yeU1lbnUuanN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9Db21wb25lbnRzL0hlYWRlci9IZWFkZXJCb3R0b20vQ2F0ZWdvcnlNZW51L2luZGV4LmpzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvQ29tcG9uZW50cy9IZWFkZXIvSGVhZGVyQm90dG9tL2luZGV4LmpzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvQ29tcG9uZW50cy9IZWFkZXIvSGVhZGVyUHViL2luZGV4LmpzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvQ29tcG9uZW50cy9IZWFkZXIvSGVhZGVyVG9wL0FjY291bnRDb250cm9sL0FjY291bnRDYXJkL0FjY291bnRDYXJkSGVhZGVyLmpzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvQ29tcG9uZW50cy9IZWFkZXIvSGVhZGVyVG9wL0FjY291bnRDb250cm9sL0FjY291bnRDYXJkL0FjY291bnRDYXJkTWVudS9DdXN0b21lck1lbnUuanN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9Db21wb25lbnRzL0hlYWRlci9IZWFkZXJUb3AvQWNjb3VudENvbnRyb2wvQWNjb3VudENhcmQvQWNjb3VudENhcmRNZW51L1ZlbmRvck1lbnUuanN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9Db21wb25lbnRzL0hlYWRlci9IZWFkZXJUb3AvQWNjb3VudENvbnRyb2wvQWNjb3VudENhcmQvQW5vbnltb3VzQWNjb3VudENhcmRCb2R5LmpzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvQ29tcG9uZW50cy9IZWFkZXIvSGVhZGVyVG9wL0FjY291bnRDb250cm9sL0FjY291bnRDYXJkL2luZGV4LmpzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvQ29tcG9uZW50cy9IZWFkZXIvSGVhZGVyVG9wL0FjY291bnRDb250cm9sL2luZGV4LmpzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvQ29tcG9uZW50cy9IZWFkZXIvSGVhZGVyVG9wL0NhcnRDb250cm9sL0NhcnQvQ2FydExpbmUuanN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9Db21wb25lbnRzL0hlYWRlci9IZWFkZXJUb3AvQ2FydENvbnRyb2wvQ2FydC9DYXJ0VmVuZG9yR3JvdXAuanN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9Db21wb25lbnRzL0hlYWRlci9IZWFkZXJUb3AvQ2FydENvbnRyb2wvQ2FydC9pbmRleC5qc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL0NvbXBvbmVudHMvSGVhZGVyL0hlYWRlclRvcC9DYXJ0Q29udHJvbC9pbmRleC5qc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL0NvbXBvbmVudHMvSGVhZGVyL0hlYWRlclRvcC9Db250YWN0Q29udHJvbC9Db250YWN0Rm9ybS5qc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL0NvbXBvbmVudHMvSGVhZGVyL0hlYWRlclRvcC9Db250YWN0Q29udHJvbC9pbmRleC5qc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL0NvbXBvbmVudHMvSGVhZGVyL0hlYWRlclRvcC9JbmxpbmVTZWFyY2hUb29sQ29udHJvbC9JbmxpbmVTZWFyY2hUb29sL2luZGV4LmpzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvQ29tcG9uZW50cy9IZWFkZXIvSGVhZGVyVG9wL0lubGluZVNlYXJjaFRvb2xDb250cm9sL2luZGV4LmpzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvQ29tcG9uZW50cy9IZWFkZXIvSGVhZGVyVG9wL01vYmlsZU1lbnVDb250cm9sL01vYmlsZU1lbnUvQWNjb3VudExpbmtzLmpzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvQ29tcG9uZW50cy9IZWFkZXIvSGVhZGVyVG9wL01vYmlsZU1lbnVDb250cm9sL01vYmlsZU1lbnUvQ2F0ZWdvcnlMaW5rLmpzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvQ29tcG9uZW50cy9IZWFkZXIvSGVhZGVyVG9wL01vYmlsZU1lbnVDb250cm9sL01vYmlsZU1lbnUvTW9iaWxlTWVudUZvb3Rlci5qc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL0NvbXBvbmVudHMvSGVhZGVyL0hlYWRlclRvcC9Nb2JpbGVNZW51Q29udHJvbC9Nb2JpbGVNZW51L01vYmlsZVN1Yk1lbnUvU3ViQ2F0ZWdvcnlMaW5rLmpzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvQ29tcG9uZW50cy9IZWFkZXIvSGVhZGVyVG9wL01vYmlsZU1lbnVDb250cm9sL01vYmlsZU1lbnUvTW9iaWxlU3ViTWVudS9pbmRleC5qc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL0NvbXBvbmVudHMvSGVhZGVyL0hlYWRlclRvcC9Nb2JpbGVNZW51Q29udHJvbC9Nb2JpbGVNZW51L2luZGV4LmpzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvQ29tcG9uZW50cy9IZWFkZXIvSGVhZGVyVG9wL01vYmlsZU1lbnVDb250cm9sL2luZGV4LmpzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvQ29tcG9uZW50cy9IZWFkZXIvSGVhZGVyVG9wL1NpZGVTZWFyY2hUb29sQ29udHJvbC9TaWRlU2VhcmNoVG9vbC9JdGVtU3VnZ2VzdC9BcnRpY2xlU3VnZ2VzdC5qc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL0NvbXBvbmVudHMvSGVhZGVyL0hlYWRlclRvcC9TaWRlU2VhcmNoVG9vbENvbnRyb2wvU2lkZVNlYXJjaFRvb2wvSXRlbVN1Z2dlc3QvUHJvZHVjdFN1Z2dlc3QuanN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9Db21wb25lbnRzL0hlYWRlci9IZWFkZXJUb3AvU2lkZVNlYXJjaFRvb2xDb250cm9sL1NpZGVTZWFyY2hUb29sL0l0ZW1TdWdnZXN0L1JlY2lwZVN1Z2dlc3QuanN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9Db21wb25lbnRzL0hlYWRlci9IZWFkZXJUb3AvU2lkZVNlYXJjaFRvb2xDb250cm9sL1NpZGVTZWFyY2hUb29sL2luZGV4LmpzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvQ29tcG9uZW50cy9IZWFkZXIvSGVhZGVyVG9wL1NpZGVTZWFyY2hUb29sQ29udHJvbC9pbmRleC5qc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL0NvbXBvbmVudHMvSGVhZGVyL0hlYWRlclRvcC9pbmRleC5qc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL0NvbXBvbmVudHMvSGVhZGVyL2luZGV4LmpzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvQ3VzdG9tSG9vay9jYXJ0L3VzZUNhcnRGZXRjaC5qc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL0N1c3RvbUhvb2svZm9ybS91c2VCdXR0b25Mb2FkaW5nLmpzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvQ3VzdG9tSG9vay9saXN0ZW5lci91c2VTY3JvbGxZRGlyZWN0aW9uTGlzdGVuZXIuanN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9DdXN0b21Ib29rL2xpc3RlbmVyL3VzZVNjcm9sbFlMaXN0ZW5lci5qc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL1VJL0JhZGdlL0FjY291bnRCYWRnZS5qc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL1VJL0JhZGdlL1JvbGVCYWRnZS5qc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL1VJL0JhZGdlL1dhcm5pbmdCYWRnZS5qc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL1VJL0J1dHRvbi9BY2NvdW50QnV0dG9uLmpzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvVUkvQnV0dG9uL0JlY29tZVZlbmRvckxpbmsuanN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9VSS9CdXR0b24vQ2FydEJ1dHRvbi5qc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL1VJL0J1dHRvbi9DaGF0QnV0dG9uLmpzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvVUkvQnV0dG9uL0xvZ291dEJ1dHRvbi5qc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL1VJL0J1dHRvbi9NZW51QnV0dG9uLmpzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvVUkvQnV0dG9uL1NlYXJjaEJ1dHRvbi5qc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL1VJL0J1dHRvbi9Tb2NpYWwvRmFjZWJvb2tMaW5rLmpzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvVUkvQnV0dG9uL1NvY2lhbC9JbnN0YWdyYW1MaW5rLmpzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvVUkvQ29udGFpbmVyL01vZGFsLmpzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvVUkvRm9ybS9Db250cm9sbGVkUmFkaW9GaWVsZHMuanN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9VSS9JY29uL0FjY291bnRJY29uLmpzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvVUkvSWNvbi9BcnJvd3MvUmlnaHRBcnJvd0Jhckljb24uanN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9VSS9JY29uL0NhcnRJY29uLmpzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvVUkvSWNvbi9DaGF0SWNvbi5qc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL1VJL0ljb24vQ2hldnJvbkxlZnRJY29uLmpzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvVUkvSWNvbi9DaGV2cm9uUmlnaHRJY29uLmpzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvVUkvSWNvbi9EYXNoYm9hcmRJY29uLmpzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvVUkvSWNvbi9Mb2dvdXRJY29uLmpzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvVUkvSWNvbi9NZW51SWNvbi5qc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL1VJL0ljb24vUXVhbnRpdHkvTWludXNJY29uLmpzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvVUkvSWNvbi9RdWFudGl0eS9QbHVzSWNvbi5qc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL1VJL0ljb24vU2VhcmNoSWNvbi5qc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL1VJL0xvZ28vSGVhZGVyTG9nby5qc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL1VJL1V0aWxzL1JlbW92ZUNvbmZpcm0uanN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9lbnRyeXBvaW50cy9oZWFkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2Z1bmN0aW9ucy9oZWxwZXJzL3ZlbmRvckdyb3Vwc0xpbmVzRXh0cmFjdG9yLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9zdHlsZXMvSGVhZGVyL0hlYWRlckJvdHRvbS9jYXRlZ29yeU1lbnUuY3NzIiwid2VicGFjazovLy8uL2Fzc2V0cy9zdHlsZXMvSGVhZGVyL0hlYWRlckJvdHRvbS9pbmRleC5jc3MiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3N0eWxlcy9VSS9VdGlscy9yZW1vdmVDb25maXJtLmNzcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc3R5bGVzL2hlYWRlci9IZWFkZXJUb3AvTW9iaWxlTWVudS9pbmRleC5jc3MiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3N0eWxlcy9oZWFkZXIvSGVhZGVyVG9wL01vYmlsZU1lbnUvbW9iaWxlTWVudWZvb3Rlci5jc3MiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3N0eWxlcy9oZWFkZXIvSGVhZGVyVG9wL2FjY291bnRDYXJkLmNzcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc3R5bGVzL2hlYWRlci9IZWFkZXJUb3AvaW5kZXguY3NzIiwid2VicGFjazovLy8uL2Fzc2V0cy9zdHlsZXMvaGVhZGVyL0hlYWRlclRvcC9pbmxpbmVTZWFyY2hUb29sLmNzcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc3R5bGVzL2hlYWRlci9IZWFkZXJUb3Avc2lkZU1lbnUuY3NzIiwid2VicGFjazovLy8uL2Fzc2V0cy9zdHlsZXMvaGVhZGVyL0hlYWRlclRvcC9zaWRlU2VhcmNoVG9vbC5jc3MiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3N0eWxlcy9oZWFkZXIvaW5kZXguY3NzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcblxyXG5leHBvcnQgY29uc3QgQXJ0aWNsZUNhcmQgPSAoe2FydGljbGV9KSA9PiB7XHJcbiAgICBcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxsaSBjbGFzc05hbWU9XCJwcm9kdWN0LWNhcmQgdHlwZS1hcnRpY2xlXCI+XHJcbiAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cInByb2R1Y3QtY2FyZC1pbWctbGlua1wiIGhyZWY9e2FydGljbGUudGFyZ2V0fT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZHVjdC1jYXJkLWltZy13cmFwcGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJwcm9kdWN0LWNhcmQtaW1nXCIgc3JjPXthcnRpY2xlLnBpY3R1cmUucGF0aH0gYWx0PXthcnRpY2xlLnBpY3R1cmUuYWx0fSAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9kdWN0LWNhcmQtYm9keVwiPlxyXG4gICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInByb2R1Y3QtY2FyZC10aXRsZSBhcnRpY2xlLWNhcmQtdGl0bGVcIj5cclxuICAgICAgICAgICAgICAgICAgICA8YSBocmVmPXthcnRpY2xlLnRhcmdldH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPnthcnRpY2xlLnRpdGxlfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJ0aWNsZS5zdWJ0aXRsZSAmJiA8c3BhbiBjbGFzc05hbWU9XCJwcm9kdWN0LWNhcmQtc3VidGl0bGVcIj4gLSB7YXJ0aWNsZS5zdWJ0aXRsZX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICA8L2gyPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2xpPlxyXG4gICAgKVxyXG59IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuXHJcbmV4cG9ydCBjb25zdCBSZWNpcGVDYXJkID0gKHtyZWNpcGV9KSA9PiB7XHJcblxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGxpIGNsYXNzTmFtZT1cInByb2R1Y3QtY2FyZCB0eXBlLXJlY2lwZVwiPlxyXG4gICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJwcm9kdWN0LWNhcmQtaW1nLWxpbmtcIiBocmVmPXtyZWNpcGUudGFyZ2V0fT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZHVjdC1jYXJkLWltZy13cmFwcGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJwcm9kdWN0LWNhcmQtaW1nXCIgc3JjPXtyZWNpcGUucGljdHVyZS5wYXRofSBhbHQ9e3JlY2lwZS5waWN0dXJlLmFsdH0gLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZHVjdC1jYXJkLWJvZHlcIj5cclxuICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJwcm9kdWN0LWNhcmQtdGl0bGVcIj48YSBocmVmPXtyZWNpcGUudGFyZ2V0fT57cmVjaXBlLnRpdGxlfTwvYT48L2gyPlxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwicHJvZHVjdC1jYXJkLWxpc3RcIj5cclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlY2lwZS5pbmdyZWRpZW50cy5tYXAoKGluZ3JlZGllbnQsIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwicHJvZHVjdC1jYXJkLWxpc3QtaXRlbVwiIGtleT17aW5kZXh9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPntpbmdyZWRpZW50fTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICkpXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9saT5cclxuICAgIClcclxufSIsImltcG9ydCBSZWFjdCwgeyBtZW1vLCB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBTdWJDYXRlZ29yeU1lbnUgfSBmcm9tICcuL1N1YkNhdGVnb3J5TWVudS9TdWJDYXRlZ29yeU1lbnUnO1xyXG5pbXBvcnQgaTE4biBmcm9tICcuLi8uLi8uLi8uLi9lbnRyeXBvaW50cy9pMThuJztcclxuaW1wb3J0IHsgQ2xvc2VCdXR0b24gfSBmcm9tICcuLi8uLi8uLi8uLi9VSS9CdXR0b24vQ2xvc2VCdXR0b24nO1xyXG5pbXBvcnQgeyB1c2VPcGVuU3RhdGUgfSBmcm9tICcuLi8uLi8uLi8uLi9DdXN0b21Ib29rL3N0YXRlL3VzZU9wZW5TdGF0ZSc7XHJcbmltcG9ydCB7IEZsYXNoIH0gZnJvbSAnLi4vLi4vLi4vLi4vVUkvRmxhc2gvRmxhc2gnO1xyXG5pbXBvcnQgeyB0IH0gZnJvbSAnaTE4bmV4dCc7XHJcblxyXG5leHBvcnQgY29uc3QgQ2F0ZWdvcnlMaW5rID0gbWVtbygoe2NhdGVnb3J5LCBzZXRTZWxlY3RlZCwgc2VsZWN0ZWR9KSA9PiB7XHJcblxyXG4gICAgY29uc3QgW29wZW5pbmdUaW1lciwgc2V0T3BlbmluZ1RpbWVyXSA9IHVzZVN0YXRlKG51bGwpO1xyXG5cclxuICAgIGNvbnN0IG9wZW5FeHBhbmQgPSAoKSA9PiB7XHJcbiAgICAgICAgaWYob3BlbmluZ1RpbWVyKSB7XHJcbiAgICAgICAgICAgIGNsZWFyVGltZW91dChvcGVuaW5nVGltZXIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBzZXRPcGVuaW5nVGltZXIobnVsbCk7XHJcbiAgICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKCdleHBhbmQtbWVudS1vcGVuJyk7XHJcbiAgICAgICAgc2V0U2VsZWN0ZWQoY2F0ZWdvcnkpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGNsb3NlRXhwYW5kID0gKCkgPT4ge1xyXG4gICAgICAgIGlmKG9wZW5pbmdUaW1lcikge1xyXG4gICAgICAgICAgICBjbGVhclRpbWVvdXQob3BlbmluZ1RpbWVyKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgc2V0T3BlbmluZ1RpbWVyKG51bGwpO1xyXG4gICAgICAgIGJ1dHRvblJlZi5jdXJyZW50LmNsYXNzTGlzdC5hZGQoJ2Nsb3NpbmcnKTtcclxuICAgICAgICBpZihleHBhbmRSZWYuY3VycmVudCkge1xyXG4gICAgICAgICAgICBleHBhbmRSZWYuY3VycmVudC5hZGRFdmVudExpc3RlbmVyKCdhbmltYXRpb25lbmQnLCBlID0+IHtcclxuICAgICAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZSgnZXhwYW5kLW1lbnUtb3BlbicpO1xyXG4gICAgICAgICAgICAgICAgYnV0dG9uUmVmLmN1cnJlbnQuY2xhc3NMaXN0LnJlbW92ZSgnY2xvc2luZycpO1xyXG4gICAgICAgICAgICAgICAgc2V0U2VsZWN0ZWQobnVsbCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBoYW5kbGVNb3VzZU92ZXIgPSBlID0+IHtcclxuICAgICAgICBpZihlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2hlYWRlci1ib3R0b20tbGluaycpKSB7XHJcbiAgICAgICAgICAgIHNldE9wZW5pbmdUaW1lcihcclxuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIG9wZW5FeHBhbmQoKTtcclxuICAgICAgICAgICAgICAgIH0sIDQwMClcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBvcGVuRXhwYW5kKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIGNvbnN0IGhhbmRsZU1vdXNlTGVhdmUgPSAoKSA9PiB7XHJcbiAgICAgICAgc2V0T3BlbmluZ1RpbWVyKFxyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgIGNsb3NlRXhwYW5kKCk7XHJcbiAgICAgICAgICAgIH0sIDMwMClcclxuICAgICAgICApO1xyXG4gICAgfTtcclxuICAgIGNvbnN0IGhhbmRsZUtleURvd24gPSBlID0+IHtcclxuICAgICAgICBpZihlLmtleSA9PT0gJ0VudGVyJykge1xyXG4gICAgICAgICAgICBpZighc2VsZWN0ZWQpIHtcclxuICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgICAgICAgICBvcGVuRXhwYW5kKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgY29uc3QgaGFuZGxlQ2xpY2sgPSAoKSA9PiB7XHJcbiAgICAgICAgaWYoc2VsZWN0ZWQpIHtcclxuICAgICAgICAgICAgY2xvc2VFeHBhbmQoKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBvcGVuRXhwYW5kKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGJ1dHRvblJlZiA9IHVzZVJlZihudWxsKTtcclxuICAgIGNvbnN0IGV4cGFuZFJlZiA9IHVzZVJlZihudWxsKTtcclxuICAgIFxyXG5cclxuICAgIC8vV0lUSE9VVF9TSE9QIC8vIMOgIHN1cHByIFxyXG4gICAgY29uc3QgW3dpdGhvdXRTaG9wRmxhc2hJc09wZW4sIG9wZW5XaXRob3V0U2hvcEZsYXNoLCBjbG9zZVdpdGhvdXRTaG9wRmxhc2hdID0gdXNlT3BlblN0YXRlKGZhbHNlKTtcclxuICAgIFxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgLy9XSVRIT1VUX1NIT1AgLy8gw6Agc3VwcHIgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4gICAgICAgICAgICAgICAgPEZsYXNoXHJcbiAgICAgICAgICAgICAgICAgICAgYnV0dG9uPXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj17dCgndXJsLnJlY2lwZS5pbmRleCcsIHtuczogJ3VybHMnfSl9Pnt0KCdvdXJfcmVjaXBlcycsIHtuczogJ21lc3NhZ2VzJ30pfTwvYT5cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaXNPcGVuPXt3aXRob3V0U2hvcEZsYXNoSXNPcGVufVxyXG4gICAgICAgICAgICAgICAgICAgIGNsb3NlPXtjbG9zZVdpdGhvdXRTaG9wRmxhc2h9XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIHt0KCdpbmZvLnNob3Bfd2lsbF9iZV9vcGVuX3Nvb24nLCB7bnM6ICdtZXNzYWdlcyd9KX1cclxuICAgICAgICAgICAgICAgIDwvRmxhc2g+XHJcbiAgICAgICAgICAgICAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA8ZGl2IHJvbGU9XCJidXR0b25cIiB0YWJJbmRleD1cIjBcIiBjbGFzc05hbWU9eydoZWFkZXItYm90dG9tLWxpbmsnICsgJyBsYW5nLScgKyBpMThuLmxhbmd1YWdlICsgKHNlbGVjdGVkID8gJyBzZWxlY3RlZCc6ICcnKX0gXHJcbiAgICAgICAgICAgICAgICBvbk1vdXNlT3Zlcj17aGFuZGxlTW91c2VPdmVyfSBvbkNsaWNrPXtoYW5kbGVDbGlja30gb25LZXlEb3duPXtoYW5kbGVLZXlEb3dufSBvbk1vdXNlTGVhdmU9e2hhbmRsZU1vdXNlTGVhdmV9XHJcbiAgICAgICAgICAgICAgICByZWY9e2J1dHRvblJlZn0gXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgeyBjYXRlZ29yeS5uYW1lW2kxOG4ubGFuZ3VhZ2VdIH1cclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgKHNlbGVjdGVkICYmIGNhdGVnb3J5LnN1YkNhdGVnb3JpZXMubGVuZ3RoID4gMCkgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyLWJvdHRvbS1leHBhbmRcIiByZWY9e2V4cGFuZFJlZn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxDbG9zZUJ1dHRvbiBhZGRpdGlvbmFsQ2xhc3M9XCJoZWFkZXItYm90dG9tLWV4cGFuZC1jbG9zZXJcIiBvbkNsaWNrPXtjbG9zZUV4cGFuZH0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFN1YkNhdGVnb3J5TWVudSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhdGVnb3J5PXtjYXRlZ29yeX0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdWJDYXRlZ29yaWVzPXtjYXRlZ29yeS5zdWJDYXRlZ29yaWVzfSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vV0lUSE9VVF9TSE9QIC8vIMOgIHN1cHByXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcGVuV2l0aG91dFNob3BGbGFzaD17b3BlbldpdGhvdXRTaG9wRmxhc2h9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvPlxyXG4gICAgKVxyXG59KTsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgaTE4biBmcm9tICcuLi8uLi8uLi8uLi8uLi9lbnRyeXBvaW50cy9pMThuJztcclxuXHJcbmV4cG9ydCBjb25zdCBTdWJDYXRlZ29yeUxpbmsgPSAoe3N1YkNhdGVnb3J5LCBvbkNsaWNrfSkgPT4ge1xyXG5cclxuICAgIC8vV0lUSE9VVF9TSE9QIC8vIHN1cHByIG9uQ2xpY2tcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxsaSBjbGFzc05hbWU9XCJzdWJjYXRlZ29yeS1pdGVtXCI+XHJcbiAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cInN1YmNhdGVnb3J5LWxpbmtcIiBocmVmPXtzdWJDYXRlZ29yeS50YXJnZXRbaTE4bi5sYW5ndWFnZV19IG9uQ2xpY2s9e29uQ2xpY2t9PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdWJjYXRlZ29yeS1pdGVtLWltZy13cmFwcGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJzdWJjYXRlZ29yeS1pdGVtLWltZ1wiIHNyYz17Jy9pbWcvY2F0ZWdvcmllcy8nK3N1YkNhdGVnb3J5LnBpY3R1cmUucGF0aH0gYWx0PXtzdWJDYXRlZ29yeS5waWN0dXJlLmFsdFtpMThuLmxhbmd1YWdlXX0gLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic3ViY2F0ZWdvcnktaXRlbS10ZXh0XCI+e3N1YkNhdGVnb3J5Lm5hbWVbaTE4bi5sYW5ndWFnZV19PC9zcGFuPlxyXG4gICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgPC9saT5cclxuICAgIClcclxufSIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IFN1YkNhdGVnb3J5TGluayB9IGZyb20gJy4vU3ViQ2F0ZWdvcnlMaW5rJztcclxuaW1wb3J0IHsgdXNlVHJhbnNsYXRpb24gfSBmcm9tICdyZWFjdC1pMThuZXh0JztcclxuaW1wb3J0IHsgdXNlR2V0VXNlciB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL0N1c3RvbUhvb2svdXNlR2V0VXNlcic7XHJcblxyXG5leHBvcnQgY29uc3QgU3ViQ2F0ZWdvcnlNZW51ID0gKHtjYXRlZ29yeSwgc3ViQ2F0ZWdvcmllcywgb3BlbldpdGhvdXRTaG9wRmxhc2h9KSA9PiB7XHJcbiAgICBjb25zdCB7dCwgaTE4bn0gPSB1c2VUcmFuc2xhdGlvbignbWVzc2FnZXMnKTsgXHJcblxyXG4gICAgLy9XSVRIT1VUX1NIT1AgLy8gYSBzdXBwcmltZXIgLy8gc3VwcHJpbWVyIG9wZW5XaXRob3V0U2hvcEZsYXNoIGVuIGhhdXQgZGFucyBwcm9wcyBhdXNzaVxyXG4gICAgY29uc3Qge3VzZXIsIHVwZGF0ZVVzZXJ9ID0gdXNlR2V0VXNlcigpO1xyXG4gICAgY29uc3QgaGFuZGxlQ2xpY2sgPSBlID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhjYXRlZ29yeSk7XHJcbiAgICAgICAgaWYoY2F0ZWdvcnkubmFtZS5lbiA9PT0gJ1JlY2lwZXMnKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYoIXVzZXIgfHwgIVsnY29uc3VtZXJAZW1haWwuY29tJywgJ3Byb0BlbWFpbC5jb20nLCAndmVuZG9yQGVtYWlsLmNvbSddLmluY2x1ZGVzKHVzZXIuZW1haWwpKSB7XHJcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgb3BlbldpdGhvdXRTaG9wRmxhc2goKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8bmF2IGNsYXNzTmFtZT1cImhlYWRlci1ib3R0b20tc3VibmF2XCI+XHJcbiAgICAgICAgICAgIDx1bD5cclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgc3ViQ2F0ZWdvcmllcy5tYXAoXHJcbiAgICAgICAgICAgICAgICAgICAgc3ViQ2F0ZWdvcnkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8U3ViQ2F0ZWdvcnlMaW5rIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtzdWJDYXRlZ29yeS5pZH0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdWJDYXRlZ29yeT17c3ViQ2F0ZWdvcnl9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9XSVRIT1VUX1NIT1AgLy8gw6Agc3VwcHJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZUNsaWNrfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlYXJjaC1saW5rXCI+XHJcbiAgICAgICAgICAgICAgICA8YSBcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWJ1dHRvbiBib3JkZWF1eCBvdXRsaW5lXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgaHJlZj17Y2F0ZWdvcnkudGFyZ2V0W2kxOG4ubGFuZ3VhZ2VdfVxyXG4gICAgICAgICAgICAgICAgICAgIC8vV0lUSE9VVF9TSE9QIC8vIMOgIHN1cHByXHJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17aGFuZGxlQ2xpY2t9XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIHt0KCdzZWVfZW50aXJlX2NhdGVnb3J5Jywge2NhdGVnb3J5OiBjYXRlZ29yeS5uYW1lW2kxOG4ubGFuZ3VhZ2VdfSl9XHJcbiAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvbmF2PlxyXG4gICAgKVxyXG59IiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBDYXRlZ29yeUxpbmsgfSBmcm9tICcuL0NhdGVnb3J5TGluayc7XHJcbmltcG9ydCAnLi4vLi4vLi4vLi4vc3R5bGVzL0hlYWRlci9IZWFkZXJCb3R0b20vY2F0ZWdvcnlNZW51LmNzcyc7XHJcblxyXG5leHBvcnQgY29uc3QgQ2F0ZWdvcnlNZW51ID0gKHtjYXRlZ29yaWVzfSkgPT4ge1xyXG4gICAgLy9zw6lsZWN0aW9uIGRlcyBjYXTDqWdvcmllc1xyXG4gICAgY29uc3QgW3NlbGVjdGVkQ2F0ZWdvcnksIHNldFNlbGVjdGVkQ2F0ZWdvcnldID0gdXNlU3RhdGUobnVsbCk7XHJcblxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPG5hdiBjbGFzc05hbWU9XCJoZWFkZXItYm90dG9tLW5hdlwiPlxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBjYXRlZ29yaWVzLm1hcChcclxuICAgICAgICAgICAgICAgICAgICBjYXRlZ29yeSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxDYXRlZ29yeUxpbmsgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2NhdGVnb3J5LmlkfSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhdGVnb3J5PXtjYXRlZ29yeX0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZD17c2VsZWN0ZWRDYXRlZ29yeSA9PT0gY2F0ZWdvcnl9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0U2VsZWN0ZWQ9e3NldFNlbGVjdGVkQ2F0ZWdvcnl9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgPC9uYXY+XHJcbiAgICApXHJcbn1cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuIiwiaW1wb3J0IFJlYWN0LCB7IG1lbW8gfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IENhdGVnb3J5TWVudSB9IGZyb20gJy4vQ2F0ZWdvcnlNZW51JztcclxuaW1wb3J0ICcuLi8uLi8uLi9zdHlsZXMvSGVhZGVyL0hlYWRlckJvdHRvbS9pbmRleC5jc3MnO1xyXG5cclxuZXhwb3J0IGNvbnN0IEhlYWRlckJvdHRvbSA9IG1lbW8oKHtjYXRlZ29yaWVzLCBhY3RpdmVDYXRlZ29yeSwgYWN0aXZlU3ViQ2F0ZWdvcnl9KSA9PiB7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlci1ib3R0b21cIj5cclxuICAgICAgICAgICAgPENhdGVnb3J5TWVudSBjYXRlZ29yaWVzPXtjYXRlZ29yaWVzfSAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59KTtcclxuXHJcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHVzZVRyYW5zbGF0aW9uIH0gZnJvbSAncmVhY3QtaTE4bmV4dCc7XHJcblxyXG5leHBvcnQgY29uc3QgSGVhZGVyUHViID0gKCkgPT4ge1xyXG4gICAgY29uc3Qge3R9ID0gdXNlVHJhbnNsYXRpb24oJ21lc3NhZ2VzJyk7XHJcbiAgICBcclxuICAgIC8vIGNvbnN0IHB1YlJlZiA9IHVzZVJlZihudWxsKTtcclxuICAgIC8vIGNvbnN0IHB1YldyYXBwZXJSZWYgPSB1c2VSZWYobnVsbCk7XHJcbiAgICAvLyBjb25zdCBbcG9zWCwgc2V0UG9zWF0gPSB1c2VTdGF0ZSgwKTtcclxuICAgIC8vIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAvLyAgICAgaWYocHViV3JhcHBlclJlZi5jdXJyZW50KSB7XHJcbiAgICAvLyAgICAgICAgIGNvbnN0IHdpZHRoID0gcHViUmVmLmN1cnJlbnQub2Zmc2V0V2lkdGg7XHJcbiAgICAvLyAgICAgICAgIGlmKCh3aWR0aCArIDQwKSA+IHdpbmRvdy5pbm5lcldpZHRoKSB7XHJcbiAgICAvLyAgICAgICAgICAgICAvL3NpIGxlIHRleHRlIGTDqXBhc3NlIGRlIGwnw6ljcmFuIG9uIGxlIGZhaXQgYXZhbmNlciBldCBvbiBsJ2FsaWduZSDDoCBnYXVjaGVcclxuICAgIC8vICAgICAgICAgICAgIHB1YldyYXBwZXJSZWYuY3VycmVudC5zdHlsZS5qdXN0aWZ5Q29udGVudCA9ICdmbGV4LXN0YXJ0JztcclxuICAgIC8vICAgICAgICAgICAgIC8vcG91ciBmYWlyZSBhcnJpdmVyIGxlIHRleHRlIGRlIGxhIGRyb2l0ZSBhdSBkw6lidXRcclxuICAgIC8vICAgICAgICAgICAgIHNldFBvc1god2luZG93LmlubmVyV2lkdGggKyAyMCk7XHJcbiAgICAvLyAgICAgICAgICAgICBjb25zdCBpbnRlcnZhbCA9IHNldEludGVydmFsKCgpID0+IHtcclxuICAgIC8vICAgICAgICAgICAgICAgICBzZXRQb3NYKHByZXZQb3MgPT4ge1xyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICBpZihwcmV2UG9zIDwgKDAgLSB3aWR0aCkpIHtcclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB3aW5kb3cuaW5uZXJXaWR0aDtcclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICByZXR1cm4gcHJldlBvcyAtIDE7XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAvLyAgICAgICAgICAgICB9LCA4KTtcclxuICAgIC8vICAgICAgICAgICAgIHJldHVybiAoKSA9PiBjbGVhckludGVydmFsKGludGVydmFsKTtcclxuICAgIC8vICAgICAgICAgfVxyXG4gICAgLy8gICAgIH1cclxuICAgIC8vIH0sIFtwdWJXcmFwcGVyUmVmLmN1cnJlbnRdKTtcclxuXHJcbiAgICAvLyB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgLy8gICAgIHB1YlJlZi5jdXJyZW50LnN0eWxlLmxlZnQgPSBwb3NYICsgJ3B4JztcclxuICAgIC8vIH0sIFtwb3NYXSk7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICAvLyA8ZGl2IHJlZj17cHViV3JhcHBlclJlZn0gY2xhc3NOYW1lPVwiaGVhZGVyLXB1YlwiPlxyXG4gICAgICAgIC8vICAgICA8cCByZWY9e3B1YlJlZn0+e3QoJ2hlYWRlcl9wdWInKX08L3A+XHJcbiAgICAgICAgLy8gPC9kaXY+XHJcblxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyLXB1YlwiPlxyXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJoZWFkZXItcHViLXNtYWxsXCI+e3QoJ2hlYWRlcl9wdWJfc21hbGwnKX08L3A+XHJcbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImhlYWRlci1wdWItbGFyZ2VcIj57dCgnaGVhZGVyX3B1YicpfTwvcD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufSIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IFJvbGVCYWRnZSB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL1VJL0JhZGdlL1JvbGVCYWRnZSc7XHJcbmltcG9ydCB7IEFjY291bnRCYWRnZSB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL1VJL0JhZGdlL0FjY291bnRCYWRnZSc7XHJcbmltcG9ydCB7IHQgfSBmcm9tICdpMThuZXh0JztcclxuXHJcbmV4cG9ydCBjb25zdCBBY2NvdW50Q2FyZEhlYWRlciA9ICh7dXNlcn0pID0+IHtcclxuXHJcbiAgICBjb25zdCBhY2NvdW50UGF0aCA9ICh1c2VyLnJvbGVzLmluY2x1ZGVzKCdST0xFX1ZFTkRPUicpICYmIHVzZXIuY29tcGFueSkgPyB0KCd1cmwudmVuZG9yQWNjb3VudC5pbmRleCcsIHtuczogJ3VybHMnfSk6IHQoJ3VybC5jdXN0b21lckFjY291bnQuaW5kZXgnLCB7bnM6ICd1cmxzJ30pO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhY2NvdW50LWNhcmQtaGVhZGVyXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWNjb3VudC1jYXJkLXRleHRcIj5cclxuICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImJveC1saW5rXCIgaHJlZj17YWNjb3VudFBhdGh9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxBY2NvdW50Q2FyZFRpdGxlIHVzZXI9e3VzZXJ9IC8+XHJcbiAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG5cclxuY29uc3QgQWNjb3VudENhcmRUaXRsZSA9ICh7dXNlcn0pID0+IHtcclxuXHJcbiAgICBpZih1c2VyLnJvbGVzLmluY2x1ZGVzKCdST0xFX1BSTycpKSB7XHJcbiAgICAgICAgcmV0dXJuIDxQcm9BY2NvdW50Q2FyZFRpdGxlIHVzZXI9e3VzZXJ9IC8+XHJcbiAgICB9IGVsc2UgaWYodXNlci5yb2xlcy5pbmNsdWRlcygnUk9MRV9BRE1JTicpKSB7XHJcbiAgICAgICAgcmV0dXJuIDxBZG1pbkFjY291bnRDYXJkVGl0bGUgdXNlcj17dXNlcn0gLz5cclxuICAgIH1cclxuICAgIHJldHVybiA8VXNlckFjY291bnRDYXJkVGl0bGUgdXNlcj17dXNlcn0gLz5cclxufVxyXG4gICAgXHJcblxyXG5jb25zdCBQcm9BY2NvdW50Q2FyZFRpdGxlID0gKHt1c2VyfSkgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFjY291bnQtY2FyZC1oZWFkZXItdGl0bGVcIj5cclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB1c2VyLmNvbXBhbnk/LmxvZ28gPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwiYWNjb3VudC1jYXJkLWxvZ29cIiBzcmM9e3VzZXIuY29tcGFueS5sb2dvLnBhdGh9IGFsdD17dXNlci5jb21wYW55LmxvZ28uYWx0fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICk6IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPEFjY291bnRCYWRnZSB1c2VyPXt1c2VyfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWNjb3VudC1jYXJkLWhlYWRlci10aXRsZS10ZXh0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhY2NvdW50LWNhcmQtaGVhZGVyLXN0cm9uZ1wiPnt1c2VyLmNvbXBhbnkudXN1YWxOYW1lfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxSb2xlQmFkZ2Ugcm9sZXM9e3VzZXIucm9sZXN9IC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhY2NvdW50LWNhcmQtaGVhZGVyLXN1YnRpdGxlLXRleHRcIj57dXNlci5lbWFpbH08L2Rpdj5cclxuICAgICAgICA8Lz5cclxuICAgICAgICBcclxuICAgIClcclxufVxyXG5cclxuY29uc3QgQWRtaW5BY2NvdW50Q2FyZFRpdGxlID0gKHt1c2VyfSkgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFjY291bnQtY2FyZC1oZWFkZXItdGl0bGVcIj5cclxuICAgICAgICAgICAgICAgIDxBY2NvdW50QmFkZ2UgdXNlcj17dXNlcn0gLz5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWNjb3VudC1jYXJkLWhlYWRlci10aXRsZS10ZXh0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXBpdGFsaXplXCI+e3QodXNlci5jaXZpbGl0eSwge25zOiAnY29uZmlncyd9KX0ge3VzZXIuZmlyc3ROYW1lfSB7dXNlci5sYXN0TmFtZX08L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8Um9sZUJhZGdlIHJvbGVzPXt1c2VyLnJvbGVzfSAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFjY291bnQtY2FyZC1oZWFkZXItc3VidGl0bGUtdGV4dFwiPnt1c2VyLmVtYWlsfTwvZGl2PlxyXG4gICAgICAgIDwvPlxyXG4gICAgKVxyXG59XHJcblxyXG5jb25zdCBVc2VyQWNjb3VudENhcmRUaXRsZSA9ICh7dXNlcn0pID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhY2NvdW50LWNhcmQtaGVhZGVyLXRpdGxlXCI+XHJcbiAgICAgICAgICAgIDxBY2NvdW50QmFkZ2UgdXNlcj17dXNlcn0gLz5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhY2NvdW50LWNhcmQtaGVhZGVyLXRpdGxlLXRleHRcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FwaXRhbGl6ZVwiPnt0KHVzZXIuY2l2aWxpdHksIHtuczogJ2NvbmZpZ3MnfSl9IHt1c2VyLmZpcnN0TmFtZX0ge3VzZXIubGFzdE5hbWV9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2Pnt1c2VyLmVtYWlsfTwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBSaWdodEFycm93QmFySWNvbiB9IGZyb20gJy4uLy4uLy4uLy4uLy4uLy4uL1VJL0ljb24vQXJyb3dzL1JpZ2h0QXJyb3dCYXJJY29uJztcclxuaW1wb3J0IHsgdCB9IGZyb20gJ2kxOG5leHQnO1xyXG5cclxuZXhwb3J0IGNvbnN0IEN1c3RvbWVyTWVudSA9ICgpID0+IHtcclxuICAgIFxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFjY291bnQtY2FyZC1jb250cm9sc1wiPlxyXG4gICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJhY2NvdW50LWNhcmQtbGluayBpLXRleHRcIiBocmVmPXt0KCd1cmwuY3VzdG9tZXJBY2NvdW50LmRldGFpbHMnLCB7bnM6ICd1cmxzJ30pfT5cclxuICAgICAgICAgICAgICAgIDxSaWdodEFycm93QmFySWNvbiAvPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4+e3QoJ2N1c3RvbWVyQWNjb3VudC5kZXRhaWxzLmxhYmVsJywge25zOiAncm91dGVzJ30pfTwvc3Bhbj4gICAgXHJcbiAgICAgICAgICAgIDwvYT4gXHJcbiAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImFjY291bnQtY2FyZC1saW5rIGktdGV4dFwiIGhyZWY9e3QoJ3VybC5jdXN0b21lckFjY291bnQucHVyY2hhc2UnLCB7bnM6ICd1cmxzJ30pfT5cclxuICAgICAgICAgICAgICAgIDxSaWdodEFycm93QmFySWNvbiAvPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4+e3QoJ2N1c3RvbWVyQWNjb3VudC5wdXJjaGFzZS5sYWJlbCcsIHtuczogJ3JvdXRlcyd9KX08L3NwYW4+ICAgIFxyXG4gICAgICAgICAgICA8L2E+IFxyXG4gICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJhY2NvdW50LWNhcmQtbGluayBpLXRleHRcIiBocmVmPXt0KCd1cmwuY3VzdG9tZXJBY2NvdW50LmFkZHJlc3MnLCB7bnM6ICd1cmxzJ30pfT5cclxuICAgICAgICAgICAgICAgIDxSaWdodEFycm93QmFySWNvbiAvPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4+e3QoJ2N1c3RvbWVyQWNjb3VudC5hZGRyZXNzLmxhYmVsJywge25zOiAncm91dGVzJ30pfTwvc3Bhbj4gICAgXHJcbiAgICAgICAgICAgIDwvYT4gXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn0iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBSaWdodEFycm93QmFySWNvbiB9IGZyb20gJy4uLy4uLy4uLy4uLy4uLy4uL1VJL0ljb24vQXJyb3dzL1JpZ2h0QXJyb3dCYXJJY29uJztcclxuaW1wb3J0IHsgV2FybmluZ0JhZGdlIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vLi4vVUkvQmFkZ2UvV2FybmluZ0JhZGdlJztcclxuaW1wb3J0IHsgdCB9IGZyb20gJ2kxOG5leHQnO1xyXG5cclxuZXhwb3J0IGNvbnN0IFZlbmRvck1lbnUgPSAoe3ZlbmRvcn0pID0+IHtcclxuICAgIFxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFjY291bnQtY2FyZC1jb250cm9scyB2ZW5kb3ItY29udHJvbHNcIj5cclxuICAgICAgICAgICAgeyAvKnNpIGxlIHZlbmRldXIgbidhIHBhcyBlZmZlY3R1w6kgbGEgdsOpcmlmaWNhdGlvbiBzdHJpcGUsIGFsb3JzIG9uIG1ldCB1biB3YXJuaW5nQmFkZ2UgMSBldCBsZSBsaWVuIGRldGFpbHMgcG9pbnRlIHZlcnMgbGEgdsOpcmlmaWNhdGlvbiBzdHJpcGUqLyB9XHJcbiAgICAgICAgICAgIDxhIFxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYWNjb3VudC1jYXJkLWxpbmsgaS10ZXh0XCIgXHJcbiAgICAgICAgICAgICAgICBocmVmPXshdmVuZG9yLnN0cmlwZUNvbmZpcm1lZCA/IHQoJ3VybC52ZW5kb3JBY2NvdW50LmRldGFpbHMucGF5bWVudCcsIHtuczogJ3VybHMnfSk6IHQoJ3VybC52ZW5kb3JBY2NvdW50LmRldGFpbHMuaW5kZXgnLCB7bnM6ICd1cmxzJ30pfVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPFJpZ2h0QXJyb3dCYXJJY29uIC8+XHJcbiAgICAgICAgICAgICAgICA8c3Bhbj57dCgndmVuZG9yQWNjb3VudC5kZXRhaWxzLmluZGV4LmxhYmVsJywge25zOiAncm91dGVzJ30pfTwvc3Bhbj4gICBcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAhdmVuZG9yLnN0cmlwZUNvbmZpcm1lZCAmJiA8V2FybmluZ0JhZGdlIG51bWJlcj17MX0gLz5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgPC9hPiBcclxuICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiYWNjb3VudC1jYXJkLWxpbmsgaS10ZXh0IGJhZGdlLW93bmVyXCIgaHJlZj17dCgndXJsLnZlbmRvckFjY291bnQuYnV5ZXJTcGFjZS5pbmRleCcsIHtuczogJ3VybHMnfSl9PlxyXG4gICAgICAgICAgICAgICAgPFJpZ2h0QXJyb3dCYXJJY29uIC8+XHJcbiAgICAgICAgICAgICAgICA8c3Bhbj57dCgndmVuZG9yQWNjb3VudC5idXllclNwYWNlLmluZGV4LmxhYmVsJywge25zOiAncm91dGVzJ30pfTwvc3Bhbj4gIFxyXG4gICAgICAgICAgICA8L2E+IFxyXG4gICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJhY2NvdW50LWNhcmQtbGluayBpLXRleHRcIiBocmVmPXt0KCd1cmwudmVuZG9yQWNjb3VudC52ZW5kb3JTcGFjZS5pbmRleCcsIHtuczogJ3VybHMnfSl9PlxyXG4gICAgICAgICAgICAgICAgPFJpZ2h0QXJyb3dCYXJJY29uIC8+XHJcbiAgICAgICAgICAgICAgICA8c3Bhbj57dCgndmVuZG9yQWNjb3VudC52ZW5kb3JTcGFjZS5pbmRleC5sYWJlbCcsIHtuczogJ3JvdXRlcyd9KX08L3NwYW4+ICAgIFxyXG4gICAgICAgICAgICA8L2E+IFxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgTGlua0J1dHRvbiB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL1VJL0J1dHRvbi9MaW5rQnV0dG9uJztcclxuaW1wb3J0IHsgdXNlVHJhbnNsYXRpb24gfSBmcm9tICdyZWFjdC1pMThuZXh0JztcclxuXHJcbmV4cG9ydCBjb25zdCBBbm9ueW1vdXNBY2NvdW50Q2FyZEJvZHkgPSAoKSA9PiB7XHJcbiAgICBjb25zdCB7dH0gPSB1c2VUcmFuc2xhdGlvbignbWVzc2FnZXMnKTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWNjb3VudC1jYXJkLWJvZHkgZW1wdHlcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhY2NvdW50LWNhcmQtdGV4dFwiPlxyXG4gICAgICAgICAgICAgICAgPHA+e3QoJ2luZm8ubm90X2xvZ2dlZCcpfTwvcD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxMaW5rQnV0dG9uIGFkZGl0aW9uYWxDbGFzcz1cImJvcmRlYXV4XCIgaHJlZj17dCgndXJsLnNlY3VyaXR5LmxvZ2luJywge25zOiAndXJscyd9KX0+e3QoJ2xvZ2luJyl9PC9MaW5rQnV0dG9uPiBcclxuICAgICAgICAgICAgPExpbmtCdXR0b24gYWRkaXRpb25hbENsYXNzPVwiY2FuY2VsXCIgaHJlZj17dCgndXJsLnNlY3VyaXR5LnJlZ2lzdGVyJywge25zOiAndXJscyd9KX0+e3QoJ3JlZ2lzdHJhdGlvbicpfTwvTGlua0J1dHRvbj4gXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn0iLCJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBMb2FkZXIgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9VSS9JY29uL0xvYWRlcic7XHJcbmltcG9ydCB7IExvZ291dEJ1dHRvbiB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL1VJL0J1dHRvbi9Mb2dvdXRCdXR0b24nO1xyXG5pbXBvcnQgeyBBbm9ueW1vdXNBY2NvdW50Q2FyZEJvZHkgfSBmcm9tICcuL0Fub255bW91c0FjY291bnRDYXJkQm9keSc7XHJcbmltcG9ydCB7IEFjY291bnRDYXJkSGVhZGVyIH0gZnJvbSAnLi9BY2NvdW50Q2FyZEhlYWRlcic7XHJcbmltcG9ydCB7IEN1c3RvbWVyTWVudSB9IGZyb20gJy4vQWNjb3VudENhcmRNZW51L0N1c3RvbWVyTWVudSc7XHJcbmltcG9ydCB7IFZlbmRvck1lbnUgfSBmcm9tICcuL0FjY291bnRDYXJkTWVudS9WZW5kb3JNZW51JztcclxuXHJcbmV4cG9ydCBjb25zdCBBY2NvdW50Q2FyZCA9ICh7Y2xvc2UsIHVzZXIsIHVwZGF0ZVVzZXJ9KSA9PiB7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBkb2N1bWVudC5ib2R5LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2xvc2UpO1xyXG4gICAgICAgIHJldHVybiAoKSA9PiBkb2N1bWVudC5ib2R5LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2xvc2UpO1xyXG4gICAgfSwgW10pO1xyXG5cclxuICAgIGNvbnN0IGhhbmRsZUNsaWNrID0gZSA9PiB7XHJcbiAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgIH1cclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIHVwZGF0ZVVzZXIoKTtcclxuICAgIH0sIFtdKTtcclxuXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFjY291bnQtY2FyZC13cmFwcGVyXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXsnYWNjb3VudC1jYXJkJyArICh1c2VyID8gJyBhY2NvdW50LWNhcmQtbG9nZ2VkJzogJycpfSBvbkNsaWNrPXtoYW5kbGVDbGlja30+XHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdXNlciA9PT0gbnVsbCAmJiA8TG9hZGVyIGFkZGl0aW9uYWxDbGFzcz1cIm1haW4tbG9hZGVyXCIgbGFuZz1cImVuXCIgLz5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB1c2VyID09PSBmYWxzZSAmJiA8QW5vbnltb3VzQWNjb3VudENhcmRCb2R5IC8+XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdXNlciAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QWNjb3VudENhcmRIZWFkZXIgdXNlcj17dXNlcn0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAodXNlci5yb2xlcy5pbmNsdWRlcygnUk9MRV9WRU5ET1InKSAmJiB1c2VyLmNvbXBhbnkpID8gPFZlbmRvck1lbnUgdmVuZG9yPXt1c2VyfSAvPjogPEN1c3RvbWVyTWVudSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhY2NvdW50LWNhcmQtZm9vdGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExvZ291dEJ1dHRvbiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn0iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHVzZU9wZW5TdGF0ZSB9IGZyb20gJy4uLy4uLy4uLy4uL0N1c3RvbUhvb2svc3RhdGUvdXNlT3BlblN0YXRlJztcclxuaW1wb3J0IHsgQWNjb3VudEJ1dHRvbiB9IGZyb20gJy4uLy4uLy4uLy4uL1VJL0J1dHRvbi9BY2NvdW50QnV0dG9uJztcclxuaW1wb3J0ICcuLi8uLi8uLi8uLi9zdHlsZXMvaGVhZGVyL0hlYWRlclRvcC9hY2NvdW50Q2FyZC5jc3MnO1xyXG5pbXBvcnQgeyB1c2VUb3VjaGluZ0xpc3RlbmVyIH0gZnJvbSAnLi4vLi4vLi4vLi4vQ3VzdG9tSG9vay9saXN0ZW5lci91c2VUb3VjaGluZ0xpc3RlbmVyJztcclxuaW1wb3J0IHsgV2FybmluZ0JhZGdlIH0gZnJvbSAnLi4vLi4vLi4vLi4vVUkvQmFkZ2UvV2FybmluZ0JhZGdlJztcclxuaW1wb3J0IHsgQWNjb3VudENhcmQgfSBmcm9tICcuL0FjY291bnRDYXJkJztcclxuXHJcblxyXG4vKipcclxuICogXHJcbiAqIEBwYXJhbSB7bnVtYmVyfSB0aW1lb3V0IChtcylcclxuICovXHJcbmV4cG9ydCBjb25zdCB1c2VUaW1lciA9ICh0aW1lb3V0ID0gMzAwKSA9PiB7XHJcbiAgICBjb25zdCBbdGltZXIsIHNldFRpbWVyXSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gICAgY29uc3QgY2xlYXJUaW1lciA9ICgpID0+IHtcclxuICAgICAgICBpZih0aW1lcikge1xyXG4gICAgICAgICAgICBjbGVhclRpbWVvdXQodGltZXIpO1xyXG4gICAgICAgICAgICBzZXRUaW1lcihudWxsKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBjb25zdCBzdGFydFRpbWVyID0gKHRvRG8pID0+IHtcclxuICAgICAgICBzZXRUaW1lcihcclxuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0b0RvKCk7XHJcbiAgICAgICAgICAgIH0sIHRpbWVvdXQpXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuICAgIHJldHVybiBbc3RhcnRUaW1lciwgY2xlYXJUaW1lcl07XHJcbn1cclxuXHJcblxyXG5leHBvcnQgY29uc3QgQWNjb3VudENvbnRyb2wgPSAoe3VzZXIsIHVwZGF0ZVVzZXJ9KSA9PiB7XHJcblxyXG4gICAgY29uc3QgW2lzT3Blbiwgb3BlbiwgY2xvc2VdID0gdXNlT3BlblN0YXRlKGZhbHNlKTtcclxuXHJcbiAgICBjb25zdCBbc3RhcnRUaW1lciwgY2xlYXJUaW1lcl0gPSB1c2VUaW1lcigzMDApO1xyXG4gICAgY29uc3QgaXNUb3VjaGluZyA9IHVzZVRvdWNoaW5nTGlzdGVuZXIoKTtcclxuXHJcbiAgICBjb25zdCBoYW5kbGVDbGljayA9IGUgPT4ge1xyXG4gICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgaWYoaXNPcGVuKSB7XHJcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgY2xvc2UoKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIG9wZW4oKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgaGFuZGxlTW91c2VMZWF2ZSA9ICgpID0+IHtcclxuICAgICAgICBpZihpc1RvdWNoaW5nKSB7XHJcbiAgICAgICAgICAgIHJldHVybjsgLy8gc2kgb24gZXN0IHN1ciDDqWNyYW4gdGFjdGlsZSBvbiB2ZXV0IHBhcyBxdWUgw6dhIGludGVyZsOocmUgYXZlYyBsZSBvbkNsaWNrXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNsZWFyVGltZXIoKTtcclxuICAgICAgICBzdGFydFRpbWVyKGNsb3NlKTtcclxuICAgIH1cclxuICAgIGNvbnN0IGhhbmRsZU1vdXNlT3ZlciA9ICgpID0+IHtcclxuICAgICAgICBpZihpc1RvdWNoaW5nKSB7XHJcbiAgICAgICAgICAgIHJldHVybjsgLy8gc2kgb24gZXN0IHN1ciDDqWNyYW4gdGFjdGlsZSBvbiB2ZXV0IHBhcyBxdWUgw6dhIGludGVyZsOocmUgYXZlYyBsZSBvbkNsaWNrXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNsZWFyVGltZXIoKTtcclxuICAgICAgICBzdGFydFRpbWVyKG9wZW4pO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPEFjY291bnRCdXR0b24gYWRkaXRpb25hbENsYXNzPVwiYWNjb3VudC1vcGVuZXIgYmFkZ2Utb3duZXJcIiBvbk1vdXNlT3Zlcj17aGFuZGxlTW91c2VPdmVyfSBvbk1vdXNlTGVhdmU9e2hhbmRsZU1vdXNlTGVhdmV9IG9uQ2xpY2s9e2hhbmRsZUNsaWNrfSB1c2VyPXt1c2VyfT5cclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaXNPcGVuICYmIChcclxuICAgICAgICAgICAgICAgICAgICA8QWNjb3VudENhcmQgY2xvc2U9e2Nsb3NlfSB1c2VyPXt1c2VyfSB1cGRhdGVVc2VyPXt1cGRhdGVVc2VyfSAvPlxyXG4gICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHVzZXIgJiYgdXNlci5yb2xlcy5pbmNsdWRlcygnUk9MRV9WRU5ET1InKSAmJiAhdXNlci5zdHJpcGVDb25maXJtZWQgJiYgPFdhcm5pbmdCYWRnZSAvPlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgPC9BY2NvdW50QnV0dG9uPlxyXG4gICAgKVxyXG59IiwiaW1wb3J0IFJlYWN0LCB7IG1lbW8sIHVzZUVmZmVjdCwgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgTWludXNJY29uIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vVUkvSWNvbi9RdWFudGl0eS9NaW51c0ljb24nO1xyXG5pbXBvcnQgeyBQbHVzSWNvbiB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL1VJL0ljb24vUXVhbnRpdHkvUGx1c0ljb24nO1xyXG5pbXBvcnQgeyBSZW1vdmVDb25maXJtIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vVUkvVXRpbHMvUmVtb3ZlQ29uZmlybSc7XHJcbmltcG9ydCB7IFByaWNlU2hvdyB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL1VJL1Byb2R1Y3QvUHJpY2VTaG93JztcclxuaW1wb3J0IHsgVHJhc2hCdXR0b24gfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9VSS9CdXR0b24vVHJhc2hCdXR0b24nO1xyXG5pbXBvcnQgeyB1c2VUcmFuc2xhdGlvbiB9IGZyb20gJ3JlYWN0LWkxOG5leHQnO1xyXG5cclxuZXhwb3J0IGNvbnN0IENhcnRMaW5lID0gbWVtbygoe2NhcnRMaW5lLCBlcnJvciwgcmVtb3ZlLCBzZXRRdWFudGl0eX0pID0+IHtcclxuICAgIGNvbnN0IHt0fSA9IHVzZVRyYW5zbGF0aW9uKCdtZXNzYWdlcycpO1xyXG5cclxuICAgIGNvbnN0IGhhbmRsZUFkZCA9IGUgPT4ge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBzZXRRdWFudGl0eShjYXJ0TGluZS5wYWNrYWdpbmcuaWQsIGNhcnRMaW5lLnF1YW50aXR5ICsgMSk7XHJcbiAgICAgICAgLy9vYmxpZ2F0b2lyZSBwb3VyIGFmZmljaGFnZSB0ZW1wb3JhaXJlIGRlIGwnZXJyZXVyXHJcbiAgICAgICAgcmVuZGVyRXJyb3IoKTtcclxuICAgIH1cclxuICAgIGNvbnN0IGhhbmRsZUxlc3MgPSBlID0+IHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgc2V0UXVhbnRpdHkoY2FydExpbmUucGFja2FnaW5nLmlkLCBjYXJ0TGluZS5xdWFudGl0eSAtIDEpO1xyXG4gICAgICAgIC8vb2JsaWdhdG9pcmUgcG91ciBhZmZpY2hhZ2UgdGVtcG9yYWlyZSBkZSBsJ2VycmV1clxyXG4gICAgICAgIHJlbmRlckVycm9yKCk7XHJcbiAgICB9XHJcblxyXG4gICAgLy9vYmxpZ2F0b2lyZSBwb3VyIGwnYWZmaWNoYWdlIHRlbXBvcmFpcmUgZGUgbCdlcnJldXJcclxuICAgIGNvbnN0IFtlcnJvck1lc3NhZ2UsIHNldEVycm9yTWVzc2FnZV0gPSB1c2VTdGF0ZShudWxsKTtcclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgcmVuZGVyRXJyb3IoKTtcclxuICAgIH0sIFtlcnJvcl0pO1xyXG5cclxuICAgIGNvbnN0IHJlbmRlckVycm9yID0gKCkgPT4ge1xyXG4gICAgICAgIHNldEVycm9yTWVzc2FnZShlcnJvcik7XHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgIHNldEVycm9yTWVzc2FnZShudWxsKTtcclxuICAgICAgICB9LCAyMDAwKTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLy9wb3VyIG1ldHRyZSB1biBlc3BhY2Ugc291cyBsYSBsaWduZSBhdSBtb21lbnQgZHUgY2FydCByZW1vdmluZ1xyXG4gICAgY29uc3QgY2FydExpbmVSZWYgPSB1c2VSZWYobnVsbCk7XHJcbiAgICAvL2NvbmZpcm1hdGlvbiBvbiBjYXJ0IGl0ZW0gcmVtb3ZlXHJcbiAgICBjb25zdCBbcmVtb3ZpbmcsIHNldFJlbW92aW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IGhhbmRsZVJlbW92ZUNsaWNrID0gKCkgPT4ge1xyXG4gICAgICAgIHNldFJlbW92aW5nKHRydWUpO1xyXG4gICAgICAgIGNhcnRMaW5lUmVmLmN1cnJlbnQuY2xhc3NMaXN0LmFkZCgncmVtb3ZpbmcnKTtcclxuICAgIH1cclxuICAgIGNvbnN0IGhhbmRsZUNvbmZpcm1SZW1vdmUgPSAoKSA9PiB7XHJcbiAgICAgICAgcmVtb3ZlKGNhcnRMaW5lLnBhY2thZ2luZy5pZCk7XHJcbiAgICB9XHJcbiAgICBjb25zdCBoYW5kbGVDYW5jZWxSZW1vdmUgPSAoKSA9PiB7XHJcbiAgICAgICAgc2V0UmVtb3ZpbmcoZmFsc2UpO1xyXG4gICAgICAgIGNhcnRMaW5lUmVmLmN1cnJlbnQuY2xhc3NMaXN0LnJlbW92ZSgncmVtb3ZpbmcnKTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT17J2NhcnQtbGluZS13cmFwcGVyJyArIChyZW1vdmluZyA/ICcgcmVtb3ZlLWNvbmZpcm0nOiAnJyl9IHJlZj17Y2FydExpbmVSZWZ9PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJ0LWxpbmVcIj5cclxuICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJjYXJ0LWxpbmUtaW1nLWxpbmtcIiBocmVmPXtjYXJ0TGluZS5wYWNrYWdpbmcudGFyZ2V0fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJjYXJ0LWxpbmUtaW1nXCIgc3JjPXtjYXJ0TGluZS5wYWNrYWdpbmcucHJvZHVjdC5maXJzdFBpY3R1cmUucGF0aH0gYWx0PXtjYXJ0TGluZS5wYWNrYWdpbmcucHJvZHVjdC5maXJzdFBpY3R1cmUuYWx0fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcnQtbGluZS1ib2R5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJjYXJ0LWxpbmUtdGl0bGVcIj48YSBocmVmPXtjYXJ0TGluZS5wYWNrYWdpbmcudGFyZ2V0fT57Y2FydExpbmUucGFja2FnaW5nLnByb2R1Y3QuZGVzaWduYXRpb259PC9hPjwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FydC1saW5lLXN1Yi10ZXh0XCI+e2NhcnRMaW5lLnBhY2thZ2luZy5sYWJlbH08L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJ0LWxpbmUtdGV4dCBjYXJ0LWxpbmUtcHJpY2VcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxQcmljZVNob3cgcHJpY2U9e2NhcnRMaW5lLnVuaXRQcmljZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FydC1saW5lLXRleHQgcm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcnQtbGluZS1yb3ctaXRlbSBjYXJ0LWxpbmUtcXVhbnRpdHktcm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBkaXNhYmxlZD17cmVtb3Zpbmd9IGNsYXNzTmFtZT1cImNhcnQtbGluZS1taW51c1wiIG9uQ2xpY2s9e2hhbmRsZUxlc3N9IGFyaWEtbGFiZWw9e3QoJ3F1YW50aXR5X21pbnVzJyl9IHRpdGxlPXt0KCdxdWFudGl0eV9taW51cycpfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE1pbnVzSWNvbiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImNhcnQtbGluZS1xdWFudGl0eVwiPntjYXJ0TGluZS5xdWFudGl0eX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBkaXNhYmxlZD17cmVtb3Zpbmd9IGNsYXNzTmFtZT1cImNhcnQtbGluZS1wbHVzXCIgb25DbGljaz17aGFuZGxlQWRkfSBhcmlhLWxhYmVsPXt0KCdxdWFudGl0eV9wbHVzJyl9IHRpdGxlPXt0KCdxdWFudGl0eV9wbHVzJyl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UGx1c0ljb24gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJ0LWxpbmUtcm93LWl0ZW1cIj48UHJpY2VTaG93IHByaWNlPXtjYXJ0TGluZS50b3RhbFByaWNlfSAvPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3JNZXNzYWdlICYmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZXJyb3JcIj57ZXJyb3JNZXNzYWdlfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPFRyYXNoQnV0dG9uIGFkZGl0aW9uYWxDbGFzcz1cImljb24tYnV0dG9uIGNhcnQtbGluZS1yZW1vdmVyXCIgb25DbGljaz17aGFuZGxlUmVtb3ZlQ2xpY2t9IC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICByZW1vdmluZyAmJiA8UmVtb3ZlQ29uZmlybSBvbkNvbmZpcm09e2hhbmRsZUNvbmZpcm1SZW1vdmV9IGNsb3NlPXtoYW5kbGVDYW5jZWxSZW1vdmV9IC8+IFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDwvbGk+XHJcbiAgICApXHJcbn0pOyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IENhcnRMaW5lIH0gZnJvbSAnLi9DYXJ0TGluZSc7XHJcbmltcG9ydCB7IEluZGV4UmV2aWV3U3RhcnMgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9VSS9TdGFycy9JbmRleFJldmlld1N0YXJzJztcclxuaW1wb3J0IHsgdXNlVHJhbnNsYXRpb24gfSBmcm9tICdyZWFjdC1pMThuZXh0JztcclxuXHJcbmV4cG9ydCBjb25zdCBDYXJ0VmVuZG9yR3JvdXAgPSAoe2NhcnRWZW5kb3JHcm91cDoge3ZlbmRvciwgY2FydExpbmVzfSwgcmVtb3ZlLCBzZXRRdWFudGl0eX0pID0+IHtcclxuICAgIGNvbnN0IHt0fSA9IHVzZVRyYW5zbGF0aW9uKCdtZXNzYWdlcycpO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJ0LXZlbmRvci1ncm91cFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcnQtdmVuZG9yLWdyb3VwLXRpdGxlXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxlZnRcIj5cclxuICAgICAgICAgICAgICAgICAgICB7dCgnc2VudF9ieScpfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImNhcnQtdmVuZG9yLWdyb3VwLXRpdGxlLWxpbmsgd3Mtbm93cmFwXCIgaHJlZj17dmVuZG9yLnRhcmdldH0+e3ZlbmRvci5jb21wYW55LnVzdWFsTmFtZX08L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgPEluZGV4UmV2aWV3U3RhcnMgbm90ZT17dmVuZG9yLnJldmlld05vdGV9IGNvdW50PXt2ZW5kb3IuY291bnRSZXZpZXdzfSAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJpZ2h0IGNhcnQtdmVuZG9yLWdyb3VwLXNlcGFyYXRvclwiPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBjYXJ0TGluZXMubWFwKGNhcnRMaW5lID0+IChcclxuICAgICAgICAgICAgICAgICAgICA8Q2FydExpbmVcclxuICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtjYXJ0TGluZS5wYWNrYWdpbmcuaWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhcnRMaW5lPXtjYXJ0TGluZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3I9e2NhcnRMaW5lLmVycm9yfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZW1vdmU9e3JlbW92ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0UXVhbnRpdHk9e3NldFF1YW50aXR5fVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICApKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn0iLCJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBMb2FkZXIgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9VSS9JY29uL0xvYWRlcic7XHJcbmltcG9ydCB7IHVzZUJ1dHRvbkxvYWRpbmcgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9DdXN0b21Ib29rL2Zvcm0vdXNlQnV0dG9uTG9hZGluZyc7XHJcbmltcG9ydCB7IHVzZVRyYW5zbGF0aW9uIH0gZnJvbSAncmVhY3QtaTE4bmV4dCc7XHJcbmltcG9ydCB7IFByaWNlU2hvdyB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL1VJL1Byb2R1Y3QvUHJpY2VTaG93JztcclxuaW1wb3J0IHsgQ2FydFZlbmRvckdyb3VwIH0gZnJvbSAnLi9DYXJ0VmVuZG9yR3JvdXAnO1xyXG5cclxuZXhwb3J0IGNvbnN0IENhcnQgPSAoe2NhcnQsIGZldGNoQ2FydCwgcmVtb3ZlLCBzZXRRdWFudGl0eX0pID0+IHtcclxuICAgIGNvbnN0IHt0fSA9IHVzZVRyYW5zbGF0aW9uKCdtZXNzYWdlcycpO1xyXG5cclxuICAgIGNvbnN0IFtidXR0b25Mb2FkaW5nLCBoYW5kbGVCdXR0b25DbGlja10gPSB1c2VCdXR0b25Mb2FkaW5nKCk7XHJcblxyXG4gICAgLy9vbiBmZXRjaCDDoCBsYSBwcmVtacOocmUgb3V2ZXJ0dXJlIGR1IGNhcnQsIGV0IHNpbm9uIHVuaXF1ZW1lbnQgc2kgdW4gYWRkIGEgw6l0w6kgZmFpdCBzdXIgcHJvZHVjdCBpbmRleCBvdSBwcm9kdWN0IHNob3dcclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgaWYoc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbSgnY2FydC11cGRhdGUnKSA9PT0gJ3RydWUnKSB7XHJcbiAgICAgICAgICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oJ2NhcnQtdXBkYXRlJywgJ2ZhbHNlJyk7XHJcbiAgICAgICAgICAgIGZldGNoQ2FydCgpO1xyXG4gICAgICAgIH1cclxuICAgIH0sIFtdKTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FydC1tb2RhbFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcnQtaGVhZGVyIHNpZGUtbWVudS1oZWFkZXJcIj5cclxuICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJjYXJ0LXRpdGxlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAge3QoJ2NhcnQnKX0gKHtjYXJ0LmNvdW50ID8/ICcwJ30pXHJcbiAgICAgICAgICAgICAgICA8L2gyPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgY2FydC5nZW5lcmFsTG9hZGluZyAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJ0LXN1Yi1oZWFkZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPExvYWRlciAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgKVxyXG5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgIWNhcnQuZ2VuZXJhbExvYWRpbmcgJiYgY2FydC5jYXJ0VmVuZG9yR3JvdXBzLmxlbmd0aCA9PT0gMCAmJiA8ZGl2IGNsYXNzTmFtZT1cImNhcnQtc3ViLWhlYWRlclwiPnt0KCdpbmZvLmVtcHR5X2NhcnQnKX08L2Rpdj5cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgY2FydC5jYXJ0VmVuZG9yR3JvdXBzLmxlbmd0aCA+IDAgJiZcclxuICAgICAgICAgICAgICAgIChcclxuICAgICAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcnQtYm9keVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT17J2NhcnQtbGlzdCcgKyAoY2FydC5nZW5lcmFsTG9hZGluZyA/ICcgbG9hZGluZyc6ICcnKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXJ0LmNhcnRWZW5kb3JHcm91cHMubWFwKChjYXJ0VmVuZG9yR3JvdXAsIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2FydFZlbmRvckdyb3VwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtpbmRleH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXJ0VmVuZG9yR3JvdXA9e2NhcnRWZW5kb3JHcm91cH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZW1vdmU9e3JlbW92ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRRdWFudGl0eT17c2V0UXVhbnRpdHl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcnQtZm9vdGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcnQtdG90YWxcIj57dCgndG90YWwnKX0gOiA8UHJpY2VTaG93IHByaWNlPXtjYXJ0LnRvdGFsUHJpY2V9IC8+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPXt0KCd1cmwuY2hlY2tvdXQuaW5kZXgnLCB7bnM6ICd1cmxzJ30pfSBjbGFzc05hbWU9eydjYXJ0LWZvb3Rlci1saW5rIHNpZGUtbWVudS1mb290ZXItYnV0dG9uJyArIChidXR0b25Mb2FkaW5nID8gJyBkaXNhYmxlZCc6ICcnKX0gb25DbGljaz17aGFuZGxlQnV0dG9uQ2xpY2t9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnV0dG9uTG9hZGluZyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TG9hZGVyIGFkZGl0aW9uYWxDbGFzcz1cImZvcm0tYnV0dG9uLWxvYWRlclwiIGxhbmc9XCJlblwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+e3QoJ3Byb2Nlc3NfcHVyY2hhc2UnKX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufSIsImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHVzZU9wZW5TdGF0ZSB9IGZyb20gJy4uLy4uLy4uLy4uL0N1c3RvbUhvb2svc3RhdGUvdXNlT3BlblN0YXRlJztcclxuaW1wb3J0IHsgQ2FydEJ1dHRvbiB9IGZyb20gJy4uLy4uLy4uLy4uL1VJL0J1dHRvbi9DYXJ0QnV0dG9uJztcclxuaW1wb3J0IHsgTW9kYWwgfSBmcm9tICcuLi8uLi8uLi8uLi9VSS9Db250YWluZXIvTW9kYWwnO1xyXG5pbXBvcnQgeyBDYXJ0IH0gZnJvbSAnLi9DYXJ0JztcclxuaW1wb3J0IHsgY2FydENoaXBVcGRhdGUgfSBmcm9tICcuLi8uLi8uLi8uLi9mdW5jdGlvbnMvY2FydENoaXAnO1xyXG5pbXBvcnQgeyB1c2VDYXJ0RmV0Y2ggfSBmcm9tICcuLi8uLi8uLi8uLi9DdXN0b21Ib29rL2NhcnQvdXNlQ2FydEZldGNoJztcclxuXHJcbmV4cG9ydCBjb25zdCBDYXJ0Q29udHJvbCA9ICgpID0+IHtcclxuXHJcbiAgICBjb25zdCBbY2FydElzT3Blbiwgb3BlbkNhcnQsIGNsb3NlQ2FydF0gPSB1c2VPcGVuU3RhdGUoZmFsc2UpO1xyXG4gICAgXHJcbiAgICBjb25zdCB7Y2FydCwgZmV0Y2hDYXJ0LCByZW1vdmUsIHNldFF1YW50aXR5fSA9IHVzZUNhcnRGZXRjaCgpO1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgY2FydENoaXBVcGRhdGUoY2FydC5jb3VudCwgY2FydC50b3RhbFByaWNlPy5wcmljZVRvUGF5KTtcclxuICAgIH0sIFtjYXJ0XSk7XHJcblxyXG4gICBcclxuICAgIC8vcG91ciBkw6ljbGVuY2hlciBsZSBmZXRjaCDDoCBsYSBwcmVtacOocmUgb3V2ZXJ0dXJlIFxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKCdjYXJ0LXVwZGF0ZScsICd0cnVlJyk7XHJcbiAgICAgICAgaWYod2luZG93LmxvY2F0aW9uLnNlYXJjaC5zdWJzdHJpbmcoMSkgPT09ICdjYXJ0Jykge1xyXG4gICAgICAgICAgICBvcGVuQ2FydCgpO1xyXG4gICAgICAgIH1cclxuICAgIH0sIFtdKTtcclxuXHJcbiAgXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxDYXJ0QnV0dG9uIG9uQ2xpY2s9e29wZW5DYXJ0fSBhZGRpdGlvbmFsQ2xhc3M9eydjYXJ0LW9wZW5lcicgKyAoY2FydD8uY291bnQgPiAwID8gJyBhY3RpdmUnOiAnJyl9PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJ0LWNoaXBcIiBoaWRkZW49e3RydWV9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FydC1jb3VudC1jaGlwXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJ0LXByaWNlLWNoaXBcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L0NhcnRCdXR0b24+XHJcbiAgICAgICAgICAgIDxNb2RhbCBpc09wZW49e2NhcnRJc09wZW59IGNsb3NlPXtjbG9zZUNhcnR9IGFkZGl0aW9uYWxDbGFzcz1cInJpZ2h0IHNpZGUtbWVudVwiPlxyXG4gICAgICAgICAgICAgICAgPENhcnQgY2FydD17Y2FydH0gZmV0Y2hDYXJ0PXtmZXRjaENhcnR9IHJlbW92ZT17cmVtb3ZlfSBzZXRRdWFudGl0eT17c2V0UXVhbnRpdHl9IC8+XHJcbiAgICAgICAgICAgIDwvTW9kYWw+XHJcbiAgICAgICAgPC8+XHJcbiAgICApXHJcbn0iLCJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgKiBhcyB5dXAgZnJvbSBcInl1cFwiXHJcbmltcG9ydCB7IHVzZUZvcm1XaXRoVmFsaWRhdGlvbiB9IGZyb20gJy4uLy4uLy4uLy4uL0N1c3RvbUhvb2svZm9ybS91c2VGb3JtV2l0aFZhbGlkYXRpb24nO1xyXG5pbXBvcnQgeyBDb250cm9sbGVkUmFkaW9GaWVsZHMgfSBmcm9tICcuLi8uLi8uLi8uLi9VSS9Gb3JtL0NvbnRyb2xsZWRSYWRpb0ZpZWxkcyc7XHJcbmltcG9ydCB7IFRleHRGaWVsZCB9IGZyb20gJy4uLy4uLy4uLy4uL1VJL0Zvcm0vVGV4dEZpZWxkJztcclxuaW1wb3J0IHsgRm9ybUJ1dHRvbiB9IGZyb20gJy4uLy4uLy4uLy4uL1VJL0Zvcm0vRm9ybUJ1dHRvbic7XHJcbmltcG9ydCB7IEZsYXNoIH0gZnJvbSAnLi4vLi4vLi4vLi4vVUkvRmxhc2gvRmxhc2gnO1xyXG5pbXBvcnQgeyB1c2VPcGVuU3RhdGUgfSBmcm9tICcuLi8uLi8uLi8uLi9DdXN0b21Ib29rL3N0YXRlL3VzZU9wZW5TdGF0ZSc7XHJcbmltcG9ydCB7IGFwaVByZXBhcmVkRmV0Y2ggfSBmcm9tICcuLi8uLi8uLi8uLi9mdW5jdGlvbnMvYXBpJztcclxuaW1wb3J0IHsgdXNlVHJhbnNsYXRpb24gfSBmcm9tICdyZWFjdC1pMThuZXh0JztcclxuaW1wb3J0IHsgU2l0ZUNvbmZpZyB9IGZyb20gJy4uLy4uLy4uLy4uL0NvbmZpZy9TaXRlQ29uZmlnJztcclxuaW1wb3J0IHsgdXNlR2V0VXNlciB9IGZyb20gJy4uLy4uLy4uLy4uL0N1c3RvbUhvb2svdXNlR2V0VXNlcic7XHJcbmltcG9ydCB7IHQgfSBmcm9tICdpMThuZXh0JztcclxuXHJcblxyXG5jb25zdCBzY2hlbWEgPSB5dXBcclxuICAub2JqZWN0KHtcclxuICAgIGNpdmlsaXR5OiB5dXAuc3RyaW5nKCkudGVzdCgnY3VzdG9tLXZhbGlkYXRpb24nLCB0KCdhc3NlcnQuY2hvaWNlJywge25zOiAnY29uc3RyYWludHMnfSksICh2YWx1ZSkgPT4ge1xyXG4gICAgICAgIHJldHVybiBbU2l0ZUNvbmZpZy5DSVZJTElUWV9GLCBTaXRlQ29uZmlnLkNJVklMSVRZX01dLmluY2x1ZGVzKHZhbHVlKTtcclxuICAgIH0pLnJlcXVpcmVkKHQoJ2Fzc2VydC5ub3RCbGFuay5jaXZpbGl0eScsIHtuczogJ2NvbnN0cmFpbnRzJ30pKSxcclxuICAgIGZpcnN0TmFtZTogeXVwLnN0cmluZygpLm1heCgyMDAsIHQoJ2Fzc2VydC5sZW5ndGgubWF4Jywge25zOiAnY29uc3RyYWludHMnLCBtYXg6IDIwMH0pKS5yZXF1aXJlZCh0KCdhc3NlcnQubm90QmxhbmsuZmlyc3ROYW1lJywge25zOiAnY29uc3RyYWludHMnfSkpLFxyXG4gICAgbGFzdE5hbWU6IHl1cC5zdHJpbmcoKS5tYXgoMjAwLCB0KCdhc3NlcnQubGVuZ3RoLm1heCcsIHtuczogJ2NvbnN0cmFpbnRzJywgbWF4OiAyMDB9KSkucmVxdWlyZWQodCgnYXNzZXJ0Lm5vdEJsYW5rLmxhc3ROYW1lJywge25zOiAnY29uc3RyYWludHMnfSkpLFxyXG4gICAgZW1haWw6IHl1cC5zdHJpbmcoKS5lbWFpbCh0KCdhc3NlcnQuZW1haWwnLCB7bnM6ICdjb25zdHJhaW50cyd9KSkubWF4KDIwMCwgdCgnYXNzZXJ0Lmxlbmd0aC5tYXgnLCB7bnM6ICdjb25zdHJhaW50cycsIG1heDogMjAwfSkpLnJlcXVpcmVkKHQoJ2Fzc2VydC5ub3RCbGFuay5lbWFpbCcsIHtuczogJ2NvbnN0cmFpbnRzJ30pKSxcclxuICAgIG1lc3NhZ2U6IHl1cC5zdHJpbmcoKS5tYXgoMjAwMCwgdCgnYXNzZXJ0Lmxlbmd0aC5tYXgnLCB7bnM6ICdjb25zdHJhaW50cycsIG1heDogMjAwMH0pKS5yZXF1aXJlZCh0KCdhc3NlcnQubm90QmxhbmsubWVzc2FnZScsIHtuczogJ2NvbnN0cmFpbnRzJ30pKVxyXG4gIH0pXHJcbiAgLnJlcXVpcmVkKCk7XHJcblxyXG5leHBvcnQgY29uc3QgQ29udGFjdEZvcm0gPSAoe2Nsb3NlLCBvblN1Ym1pdFN1Y2Nlc3N9KSA9PiB7XHJcbiAgICBjb25zdCB7aTE4biwgdH0gPSB1c2VUcmFuc2xhdGlvbignbWVzc2FnZXMnKTtcclxuXHJcbiAgICBjb25zdCB7aGFuZGxlU3VibWl0LCBjb250cm9sLCBlcnJvcnMsIHNldEVycm9yLCBzZXRWYWx1ZSwgaXNTdWJtaXR0aW5nfSA9IHVzZUZvcm1XaXRoVmFsaWRhdGlvbihzY2hlbWEsIHtcclxuICAgICAgICBjaXZpbGl0eTogJycsXHJcbiAgICAgICAgZmlyc3ROYW1lOiAnJyxcclxuICAgICAgICBsYXN0TmFtZTogJycsXHJcbiAgICAgICAgZW1haWw6ICcnLFxyXG4gICAgICAgIG1lc3NhZ2U6ICcnXHJcbiAgICB9KTtcclxuXHJcbiAgICBjb25zdCBbaXNMb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IFtlcnJvckZsYXNoSXNPcGVuLCBvcGVuRXJyb3JGbGFzaCwgY2xvc2VFcnJvckZsYXNoXSA9IHVzZU9wZW5TdGF0ZSgpO1xyXG4gICAgY29uc3Qgb25TdWJtaXQgPSBhc3luYyBmb3JtRGF0YSA9PiB7XHJcbiAgICAgICAgaWYoaXNMb2FkaW5nKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgc2V0TG9hZGluZyh0cnVlKTtcclxuICAgICAgICBjbG9zZUVycm9yRmxhc2goKTtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBhd2FpdCBhcGlQcmVwYXJlZEZldGNoKCcvJytpMThuLmxhbmd1YWdlKycvYXBpL2NvbnRhY3QvYmFzaWNDb250YWN0JywgZm9ybURhdGEsICdHRVQnKTtcclxuICAgICAgICAgICAgb25TdWJtaXRTdWNjZXNzKCk7XHJcbiAgICAgICAgICAgIGNsb3NlKCk7XHJcbiAgICAgICAgfSBjYXRjaChlKSB7XHJcbiAgICAgICAgICAgIG9wZW5FcnJvckZsYXNoKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xyXG4gICAgfTtcclxuICAgIFxyXG4gICAgY29uc3Qge3VzZXJ9ID0gdXNlR2V0VXNlcigpO1xyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBpZih1c2VyKSB7XHJcbiAgICAgICAgICAgIHNldFZhbHVlKCdjaXZpbGl0eScsIHVzZXIuY2l2aWxpdHkpO1xyXG4gICAgICAgICAgICBzZXRWYWx1ZSgnZmlyc3ROYW1lJywgdXNlci5maXJzdE5hbWUpO1xyXG4gICAgICAgICAgICBzZXRWYWx1ZSgnbGFzdE5hbWUnLCB1c2VyLmxhc3ROYW1lKTtcclxuICAgICAgICAgICAgc2V0VmFsdWUoJ2VtYWlsJywgdXNlci5lbWFpbCk7XHJcbiAgICAgICAgICAgIGZvcm1SZWYuY3VycmVudC5xdWVyeVNlbGVjdG9yQWxsKCcuaW5wdXQtd3JhcHBlcicpLmZvckVhY2goaW5wdXRXcmFwcGVyID0+IHtcclxuICAgICAgICAgICAgICAgIC8vb24gZW5sw6h2ZSBsZSBsYWJlbERvd24gc3VyIHRvdXMgbGVzIGNoYW1wcyBxdSdvbiByZW1wbGl0XHJcbiAgICAgICAgICAgICAgICBpZighaW5wdXRXcmFwcGVyLmNsYXNzTGlzdC5jb250YWlucygnbWVzc2FnZScpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaW5wdXRXcmFwcGVyLmNsYXNzTGlzdC5yZW1vdmUoJ2Rvd24nKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSwgW3VzZXJdKTtcclxuXHJcbiAgICBjb25zdCBmb3JtUmVmID0gdXNlUmVmKG51bGwpO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGZvcm0gY2xhc3NOYW1lPVwiYm94LWZvcm1cIiByZWY9e2Zvcm1SZWZ9IG9uU3VibWl0PXtoYW5kbGVTdWJtaXQob25TdWJtaXQpfT5cclxuICAgICAgICAgICAgPGgyPnt0KCdjb250YWN0X2Zvcm0nKX08L2gyPlxyXG4gICAgICAgICAgICA8Rmxhc2ggaXNPcGVuPXtlcnJvckZsYXNoSXNPcGVufSBjbG9zZT17Y2xvc2VFcnJvckZsYXNofSB0eXBlPVwiZGFuZ2VyXCI+XHJcbiAgICAgICAgICAgICAgICB7dCgnZXJyb3IudGVtcG9yYXJ5X2ltcG9zc2libGVfYWN0aW9uJyl9XHJcbiAgICAgICAgICAgIDwvRmxhc2g+XHJcbiAgICAgICAgICAgIDxDb250cm9sbGVkUmFkaW9GaWVsZHNcclxuICAgICAgICAgICAgICAgIGNvbnRyb2w9e2NvbnRyb2x9XHJcbiAgICAgICAgICAgICAgICBuYW1lPVwiY2l2aWxpdHlcIlxyXG4gICAgICAgICAgICAgICAgY2hvaWNlcz17e1xyXG4gICAgICAgICAgICAgICAgICAgIFt0KFNpdGVDb25maWcuQ0lWSUxJVFlfTSwge25zOiAnY29uZmlncyd9KV06IFNpdGVDb25maWcuQ0lWSUxJVFlfTSxcclxuICAgICAgICAgICAgICAgICAgICBbdChTaXRlQ29uZmlnLkNJVklMSVRZX0YsIHtuczogJ2NvbmZpZ3MnfSldOiBTaXRlQ29uZmlnLkNJVklMSVRZX0YsXHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgZXJyb3I9e2Vycm9ycy5jaXZpbGl0eT8ubWVzc2FnZX1cclxuICAgICAgICAgICAgICAgIGlzUmVxdWlyZWRGaWVsZD17dHJ1ZX1cclxuICAgICAgICAgICAgLz5cclxuXHJcbiAgICAgICAgICAgIDxUZXh0RmllbGQgY29udHJvbD17Y29udHJvbH0gbmFtZT1cImZpcnN0TmFtZVwiIGVycm9yPXtlcnJvcnMuZmlyc3ROYW1lPy5tZXNzYWdlfSBhZGRpdGlvbmFsQ2xhc3M9XCJjYXBpdGFsaXplXCI+e3QoJ2ZpcnN0TmFtZScpfSAqPC9UZXh0RmllbGQ+XHJcblxyXG4gICAgICAgICAgICA8VGV4dEZpZWxkIGNvbnRyb2w9e2NvbnRyb2x9IG5hbWU9XCJsYXN0TmFtZVwiIGVycm9yPXtlcnJvcnMubGFzdE5hbWU/Lm1lc3NhZ2V9IGFkZGl0aW9uYWxDbGFzcz1cImNhcGl0YWxpemVcIj57dCgnbGFzdE5hbWUnKX0gKjwvVGV4dEZpZWxkPlxyXG5cclxuICAgICAgICAgICAgPFRleHRGaWVsZCBjb250cm9sPXtjb250cm9sfSBuYW1lPVwiZW1haWxcIiBlcnJvcj17ZXJyb3JzLmVtYWlsPy5tZXNzYWdlfT57dCgnZW1haWxfYWRkcmVzcycpfSAqPC9UZXh0RmllbGQ+XHJcblxyXG4gICAgICAgICAgICA8VGV4dEZpZWxkIHR5cGU9XCJ0ZXh0YXJlYVwiIGNvbnRyb2w9e2NvbnRyb2x9IG5hbWU9XCJtZXNzYWdlXCIgZXJyb3I9e2Vycm9ycy5tZXNzYWdlPy5tZXNzYWdlfT57dCgnbWVzc2FnZScpfSAqPC9UZXh0RmllbGQ+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN1Ym1pdC1ncm91cCBkb3VibGVcIj5cclxuICAgICAgICAgICAgICAgIDxGb3JtQnV0dG9uIGFkZGl0aW9uYWxDbGFzcz1cImJvcmRlYXV4XCIgbG9hZGluZz17aXNMb2FkaW5nIHx8IGlzU3VibWl0dGluZ30+e3QoJ3N1Ym1pdC5zZW5kJyl9PC9Gb3JtQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPEZvcm1CdXR0b24gYWRkaXRpb25hbENsYXNzPVwiY2FuY2VsXCIgZGlzYWJsZWQ9e2lzTG9hZGluZyB8fCBpc1N1Ym1pdHRpbmd9IG9uQ2xpY2s9e2Nsb3NlfT57dCgnY2FuY2VsJyl9PC9Gb3JtQnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Zvcm0+XHJcbiAgICApXHJcbn0gIiwiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgdXNlT3BlblN0YXRlIH0gZnJvbSAnLi4vLi4vLi4vLi4vQ3VzdG9tSG9vay9zdGF0ZS91c2VPcGVuU3RhdGUnO1xyXG5pbXBvcnQgeyBNb2RhbCB9IGZyb20gJy4uLy4uLy4uLy4uL1VJL0NvbnRhaW5lci9Nb2RhbCc7XHJcbmltcG9ydCB7IEZsYXNoIH0gZnJvbSAnLi4vLi4vLi4vLi4vVUkvRmxhc2gvRmxhc2gnO1xyXG5pbXBvcnQgeyBDb250YWN0Rm9ybSB9IGZyb20gJy4vQ29udGFjdEZvcm0nO1xyXG5pbXBvcnQgeyBDaGF0SWNvbiB9IGZyb20gJy4uLy4uLy4uLy4uL1VJL0ljb24vQ2hhdEljb24nO1xyXG5pbXBvcnQgeyB1c2VUcmFuc2xhdGlvbiB9IGZyb20gJ3JlYWN0LWkxOG5leHQnO1xyXG5pbXBvcnQgeyBDaGF0QnV0dG9uIH0gZnJvbSAnLi4vLi4vLi4vLi4vVUkvQnV0dG9uL0NoYXRCdXR0b24nO1xyXG5cclxuZXhwb3J0IGNvbnN0IENvbnRhY3RDb250cm9sID0gKHtjaGlsZHJlbiwgYnV0dG9uQ2xhc3N9KSA9PiB7XHJcbiAgICBjb25zdCB7dH0gPSB1c2VUcmFuc2xhdGlvbignbWVzc2FnZXMnKTtcclxuXHJcbiAgICBjb25zdCBbZm9ybUlzT3Blbiwgb3BlbkZvcm0sIGNsb3NlRm9ybV0gPSB1c2VPcGVuU3RhdGUoZmFsc2UpO1xyXG5cclxuICAgIGNvbnN0IFtzdWNjZXNzRmxhc2hJc09wZW4sIG9wZW5TdWNjZXNzRmxhc2gsIGNsb3NlU3VjY2Vzc0ZsYXNoXSA9IHVzZU9wZW5TdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBoYW5kbGVTdWJtaXRTdWNjZXNzID0gKCkgPT4ge1xyXG4gICAgICAgIG9wZW5TdWNjZXNzRmxhc2goKTtcclxuICAgIH1cclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGlmKHdpbmRvdy5sb2NhdGlvbi5zZWFyY2guc3Vic3RyaW5nKDEpID09PSAnY29udGFjdCcpIHtcclxuICAgICAgICAgICAgb3BlbkZvcm0oKTtcclxuICAgICAgICB9O1xyXG4gICAgfSwgW10pO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPENoYXRCdXR0b24gY2xhc3NOYW1lPXtidXR0b25DbGFzc30gdHlwZT1cImJ1dHRvblwiIG9uQ2xpY2s9e29wZW5Gb3JtfT5cclxuICAgICAgICAgICAgICAgIHtjaGlsZHJlbn1cclxuICAgICAgICAgICAgPC9DaGF0QnV0dG9uPlxyXG4gICAgICAgICAgICA8TW9kYWwgYWRkaXRpb25hbENsYXNzPVwicmV2aWV3LWZvcm0tbW9kYWwgY2VudGVyLWZvcm0tbW9kYWxcIiBpc09wZW49e2Zvcm1Jc09wZW59IGNsb3NlPXtjbG9zZUZvcm19PlxyXG4gICAgICAgICAgICAgICAgPENvbnRhY3RGb3JtIGNsb3NlPXtjbG9zZUZvcm19IG9uU3VibWl0U3VjY2Vzcz17aGFuZGxlU3VibWl0U3VjY2Vzc30gLz5cclxuICAgICAgICAgICAgPC9Nb2RhbD5cclxuICAgICAgICAgICAgPEZsYXNoIGlzT3Blbj17c3VjY2Vzc0ZsYXNoSXNPcGVufSB0eXBlPVwic3VjY2Vzc1wiIGNsb3NlPXtjbG9zZVN1Y2Nlc3NGbGFzaH0+XHJcbiAgICAgICAgICAgICAgICB7dCgnc3VjY2Vzcy5jb250YWN0X21lc3NhZ2Vfc2VudCcpfVxyXG4gICAgICAgICAgICA8L0ZsYXNoPlxyXG4gICAgICAgIDwvPlxyXG4gICAgKVxyXG59IiwiaW1wb3J0IFJlYWN0LCB7IHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHVzZUZldGNoUVNlYXJjaCB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL0N1c3RvbUhvb2svZmV0Y2gvdXNlRmV0Y2hRU2VhcmNoJztcclxuaW1wb3J0ICcuLi8uLi8uLi8uLi8uLi9zdHlsZXMvaGVhZGVyL0hlYWRlclRvcC9pbmxpbmVTZWFyY2hUb29sLmNzcyc7XHJcbmltcG9ydCB7IFNlYXJjaEljb24gfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9VSS9JY29uL1NlYXJjaEljb24nO1xyXG5pbXBvcnQgeyBDbG9zZUJ1dHRvbiB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL1VJL0J1dHRvbi9DbG9zZUJ1dHRvbic7XHJcbmltcG9ydCB7IHVzZVRyYW5zbGF0aW9uIH0gZnJvbSAncmVhY3QtaTE4bmV4dCc7XHJcbmltcG9ydCB7IExvYWRlciB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL1VJL0ljb24vTG9hZGVyJztcclxuaW1wb3J0IHsgUmVjaXBlQ2FyZCB9IGZyb20gJy4uLy4uLy4uLy4uL0Jsb2cvUmVjaXBlL1JlY2lwZUluZGV4L1JlY2lwZUNhcmQnO1xyXG5pbXBvcnQgeyBQcm9kdWN0Q2FyZCB9IGZyb20gJy4uLy4uLy4uLy4uL1Nob3AvUHJvZHVjdEluZGV4L1Byb2R1Y3RDYXJkJztcclxuaW1wb3J0IHsgQXJ0aWNsZUNhcmQgfSBmcm9tICcuLi8uLi8uLi8uLi9CbG9nL0FydGljbGUvQXJ0aWNsZUluZGV4L0FydGljbGVDYXJkJztcclxuXHJcbmV4cG9ydCBjb25zdCBJbmxpbmVTZWFyY2hUb29sID0gKHtjbG9zZX0pID0+IHtcclxuICAgIGNvbnN0IHt0LCBpMThufSA9IHVzZVRyYW5zbGF0aW9uKCdtZXNzYWdlcycpO1xyXG5cclxuICAgIGNvbnN0IGlucHV0UmVmID0gdXNlUmVmKG51bGwpO1xyXG5cclxuICAgIC8vaGFuZGxlIHEgY2hhbmdlXHJcbiAgICBjb25zdCBbcSwgc2V0UV0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgICBjb25zdCBoYW5kbGVDaGFuZ2UgPSBlID0+IHtcclxuICAgICAgICBzZXRRKGUuY3VycmVudFRhcmdldC52YWx1ZSk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC8vZmV0Y2ggcHJvZHVjdHMgJiBjb3VudFxyXG4gICAgY29uc3QgW3Jlc3VsdCwgcmVzZXRQcm9kdWN0cywgbG9hZGluZywgZXJyb3JdID0gdXNlRmV0Y2hRU2VhcmNoKCcvJysgaTE4bi5sYW5ndWFnZSArJy9hcGkvc2VhcmNoJywgcSwgNik7XHJcblxyXG4gICAgY29uc3QgY2xvc2VFeHBhbmQgPSBlID0+IHtcclxuICAgICAgICByZXNldFByb2R1Y3RzKCk7XHJcbiAgICAgICAgc2V0USgnJyk7XHJcbiAgICAgICAgaW5wdXRSZWYuY3VycmVudC5mb2N1cygpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBjb25zdCBoYW5kbGVDbG9zZSA9ICgpID0+IHtcclxuICAgICAgICB3cmFwcGVyUmVmLmN1cnJlbnQuY2xhc3NMaXN0LmFkZCgnY2xvc2luZycpO1xyXG4gICAgICAgIGNvbnN0IG9uQW5pbWF0aW9uRW5kID0gKCkgPT4ge1xyXG4gICAgICAgICAgICB3cmFwcGVyUmVmLmN1cnJlbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignYW5pbWF0aW9uZW5kJywgb25BbmltYXRpb25FbmQpO1xyXG4gICAgICAgICAgICB3cmFwcGVyUmVmLmN1cnJlbnQuY2xhc3NMaXN0LnJlbW92ZSgnY2xvc2luZycpO1xyXG4gICAgICAgICAgICBjbG9zZSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB3cmFwcGVyUmVmLmN1cnJlbnQuYWRkRXZlbnRMaXN0ZW5lcignYW5pbWF0aW9uZW5kJywgb25BbmltYXRpb25FbmQpO1xyXG4gICAgfTtcclxuICAgIGNvbnN0IHdyYXBwZXJSZWYgPSB1c2VSZWYobnVsbCk7XHJcblxyXG4gICAgY29uc3QgaGFuZGxlRW1wdHkgPSAoKSA9PiB7XHJcbiAgICAgICAgc2V0USgnJyk7XHJcbiAgICAgICAgcmVzZXRQcm9kdWN0cygpO1xyXG4gICAgICAgIGlucHV0UmVmLmN1cnJlbnQuZm9jdXMoKVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbmxpbmUtc2VhcmNoLXRvb2wtd3JhcHBlclwiIHJlZj17d3JhcHBlclJlZn0gb25DbGljaz17Y2xvc2VFeHBhbmR9PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlubGluZS1zZWFyY2gtdG9vbFwiIG9uQ2xpY2s9e2UgPT4gZS5zdG9wUHJvcGFnYXRpb24oKX0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlYXJjaC10b29sLWhlYWRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxmb3JtIGNsYXNzTmFtZT1cInEtZ3JvdXBcIiBhY3Rpb249e3QoJ3VybC5zZWFyY2guaW5kZXgnLCB7bnM6ICd1cmxzJ30pfSBtZXRob2Q9XCJHRVRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHJlZj17aW5wdXRSZWZ9IG5hbWU9XCJxXCIgY2xhc3NOYW1lPVwicS1pbnB1dFwiIHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9e3QoJ3NlYXJjaF9wbGFjZWhvbGRlcicpfSB2YWx1ZT17cX0gb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX0gYXV0b0ZvY3VzPXt0cnVlfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8U2VhcmNoSWNvbiBhZGRpdGlvbmFsQ2xhc3M9XCJxLWljb25cIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBxICE9PSAnJyAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENsb3NlQnV0dG9uIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFkZGl0aW9uYWxDbGFzcz1cImVtcHR5LWNvbnRyb2xcIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17aGFuZGxlRW1wdHl9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmlhLWxhYmVsPXt0KCdlbXB0eV9pbnB1dCcpfSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9e3QoJ2VtcHR5X2lucHV0Jyl9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICAgICAgICAgICAgPENsb3NlQnV0dG9uIG9uQ2xpY2s9e2hhbmRsZUNsb3NlfSAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgKHJlc3VsdD8uaXRlbXMubGVuZ3RoID4gMCB8fCBsb2FkaW5nKSAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5saW5lLXNlYXJjaC10b29sLWV4cGFuZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvYWRpbmcgJiYgPExvYWRlciAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cInByb2R1Y3Qtc3VnZ2VzdC1saXN0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQ/Lml0ZW1zLmxlbmd0aCA+IDAgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0Lml0ZW1zLm1hcChpdGVtID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtLnR5cGUgPT09ICdwcm9kdWN0JyAmJiA8UHJvZHVjdENhcmQga2V5PXsncCcraXRlbS5pZH0gcHJvZHVjdD17aXRlbX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtLnR5cGUgPT09ICdyZWNpcGUnICYmIDxSZWNpcGVDYXJkIGtleT17J3InK2l0ZW0uaWR9IHJlY2lwZT17aXRlbX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtLnR5cGUgPT09ICdhcnRpY2xlJyAmJiA8QXJ0aWNsZUNhcmQga2V5PXsnYScraXRlbS5pZH0gYXJ0aWNsZT17aXRlbX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlYXJjaC1saW5rXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiZm9ybS1idXR0b24gYm9yZGVhdXggb3V0bGluZVwiIGhyZWY9e3QoJ3VybC5zZWFyY2guaW5kZXgnLCB7bnM6ICd1cmxzJ30pICsgJz9xPScrcX0+e3QoJ3NlZV9hbGxfcmVzdWx0cycpfXtyZXN1bHQ/LmNvdW50ID8gJyAoJytyZXN1bHQuY291bnQrJyknOiAnJ308L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufSIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IFNlYXJjaEJ1dHRvbiB9IGZyb20gJy4uLy4uLy4uLy4uL1VJL0J1dHRvbi9TZWFyY2hCdXR0b24nO1xyXG5pbXBvcnQgeyB1c2VPcGVuU3RhdGUgfSBmcm9tICcuLi8uLi8uLi8uLi9DdXN0b21Ib29rL3N0YXRlL3VzZU9wZW5TdGF0ZSc7XHJcbmltcG9ydCB7IElubGluZVNlYXJjaFRvb2wgfSBmcm9tICcuL0lubGluZVNlYXJjaFRvb2wnO1xyXG5pbXBvcnQgeyBjcmVhdGVQb3J0YWwgfSBmcm9tICdyZWFjdC1kb20nO1xyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBJbmxpbmVTZWFyY2hUb29sQ29udHJvbCA9ICgpID0+IHtcclxuICAgIFxyXG4gICAgY29uc3QgW3NlYXJjaFRvb2xJc09wZW4sIG9wZW5TZWFyY2hUb29sLCBjbG9zZVNlYXJjaFRvb2xdID0gdXNlT3BlblN0YXRlKCk7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgIDxTZWFyY2hCdXR0b24gYWRkaXRpb25hbENsYXNzPXsnaGVhZGVyLXNlYXJjaC1saW5rIHJpZ2h0LXNlYXJjaC1saW5rJyArIChzZWFyY2hUb29sSXNPcGVuID8gJyBoaWRkZW4nOiAnJyl9IG9uQ2xpY2s9e29wZW5TZWFyY2hUb29sfSAvPlxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHNlYXJjaFRvb2xJc09wZW4gJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjcmVhdGVQb3J0YWwoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW5saW5lU2VhcmNoVG9vbCBjbG9zZT17Y2xvc2VTZWFyY2hUb29sfSAvPixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmJvZHlcclxuICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgPC8+XHJcbiAgICApXHJcbn1cclxuXHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IEFjY291bnRJY29uIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vVUkvSWNvbi9BY2NvdW50SWNvbic7XHJcbmltcG9ydCB7IEJlY29tZVZlbmRvckxpbmsgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9VSS9CdXR0b24vQmVjb21lVmVuZG9yTGluayc7XHJcbmltcG9ydCB7IERhc2hib2FyZEljb24gfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9VSS9JY29uL0Rhc2hib2FyZEljb24nO1xyXG5pbXBvcnQgeyBBY2NvdW50QmFkZ2UgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9VSS9CYWRnZS9BY2NvdW50QmFkZ2UnO1xyXG5pbXBvcnQgeyB0IH0gZnJvbSAnaTE4bmV4dCc7XHJcblxyXG5leHBvcnQgY29uc3QgQWNjb3VudExpbmtzID0gKHt1c2VyfSkgPT4ge1xyXG5cclxuICAgIGlmKCF1c2VyKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgIDxBbm9ueW1vdXNBY2NvdW50TGluayAvPlxyXG4gICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm1vYmlsZS1tZW51LWZvb3Rlci1pdGVtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPEJlY29tZVZlbmRvckxpbmsgLz5cclxuICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgIDwvPlxyXG4gICAgICAgIClcclxuICAgIH1cclxuXHJcbiAgICBpZighdXNlci5yb2xlcy5pbmNsdWRlcygnUk9MRV9WRU5ET1InKSkge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICA8Q3VzdG9tZXJBY2NvdW50TGluayB1c2VyPXt1c2VyfSAvPlxyXG4gICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm1vYmlsZS1tZW51LWZvb3Rlci1pdGVtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPEJlY29tZVZlbmRvckxpbmsgLz5cclxuICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgIDwvPlxyXG4gICAgICAgIClcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxWZW5kb3JBY2NvdW50TGluayB2ZW5kb3I9e3VzZXJ9IC8+XHJcbiAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJtb2JpbGUtbWVudS1mb290ZXItaXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibW9iaWxlLW1lbnUtZm9vdGVyLWxpbmtcIiBocmVmPXt0KCd1cmwudmVuZG9yQWNjb3VudC52ZW5kb3JTcGFjZS5pbmRleC5wYXRoJywge25zOiAndXJscyd9KX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPERhc2hib2FyZEljb24gLz5cclxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj57dCgndXJsLnZlbmRvckFjY291bnQudmVuZG9yU3BhY2UuaW5kZXgubGFiZWwnLCB7bnM6ICd1cmxzJ30pfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgPC9saT5cclxuICAgICAgICA8Lz5cclxuICAgIClcclxufVxyXG5cclxuXHJcbmNvbnN0IEFub255bW91c0FjY291bnRMaW5rID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8bGkgY2xhc3NOYW1lPVwibW9iaWxlLW1lbnUtZm9vdGVyLWl0ZW1cIj5cclxuICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibW9iaWxlLW1lbnUtZm9vdGVyLWxpbmsgYWNjb3VudFwiIGhyZWY9e3QoJ3VybC5jdXN0b21lckFjY291bnQuaW5kZXgnLCB7bnM6ICd1cmxzJ30pfT4gey8qY3VzdG9tZXJBY2NvdW50IHJlZGlyaWdlIHZlcnMgdmVuZG9yQWNjb3VudCBzaSB1biB2ZW5kb3IgZXN0IGNvbm5lY3TDqSovfVxyXG4gICAgICAgICAgICAgICAgPEFjY291bnRJY29uIC8+XHJcbiAgICAgICAgICAgICAgICA8c3Bhbj57dCgnbG9naW4nLCB7bnM6ICdtZXNzYWdlcyd9KX08L3NwYW4+XHJcbiAgICAgICAgICAgIDwvYT5cclxuICAgICAgICA8L2xpPlxyXG4gICAgKVxyXG59XHJcblxyXG5jb25zdCBDdXN0b21lckFjY291bnRMaW5rID0gKHt1c2VyfSkgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8bGkgY2xhc3NOYW1lPVwibW9iaWxlLW1lbnUtZm9vdGVyLWl0ZW1cIj5cclxuICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibW9iaWxlLW1lbnUtZm9vdGVyLWxpbmsgYWNjb3VudCBsb2dnZWRcIiBocmVmPXt0KCd1cmwuY3VzdG9tZXJBY2NvdW50LmluZGV4Jywge25zOiAndXJscyd9KX0+XHJcbiAgICAgICAgICAgICAgICA8QWNjb3VudEJhZGdlIHVzZXI9e3VzZXJ9IC8+XHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgKHVzZXIucm9sZXMuaW5jbHVkZXMoJ1JPTEVfUFJPJykgJiYgdXNlci5jb21wYW55KSA/IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+e3VzZXIuY29tcGFueS51c3VhbE5hbWV9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICk6IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+e3VzZXIuZW1haWx9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgIDwvbGk+XHJcbiAgICApXHJcbn1cclxuXHJcbmNvbnN0IFZlbmRvckFjY291bnRMaW5rID0gKHt2ZW5kb3J9KSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxsaSBjbGFzc05hbWU9XCJtb2JpbGUtbWVudS1mb290ZXItaXRlbVwiPlxyXG4gICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJtb2JpbGUtbWVudS1mb290ZXItbGluayBhY2NvdW50IGxvZ2dlZFwiIGhyZWY9e3QoJ3VybC52ZW5kb3JBY2NvdW50LmluZGV4Jywge25zOiAndXJscyd9KX0+XHJcbiAgICAgICAgICAgICAgICA8QWNjb3VudEJhZGdlIHVzZXI9e3ZlbmRvcn0gLz5cclxuICAgICAgICAgICAgICAgIDxzcGFuPnt2ZW5kb3IuY29tcGFueS51c3VhbE5hbWV9PC9zcGFuPlxyXG4gICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgPC9saT5cclxuICAgIClcclxufSIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBpMThuIGZyb20gJy4uLy4uLy4uLy4uLy4uL2VudHJ5cG9pbnRzL2kxOG4nO1xyXG5pbXBvcnQgeyBDaGV2cm9uUmlnaHRJY29uIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vVUkvSWNvbi9DaGV2cm9uUmlnaHRJY29uJztcclxuXHJcblxyXG5leHBvcnQgY29uc3QgQ2F0ZWdvcnlMaW5rID0gKHtjYXRlZ29yeSwgc2V0U2VsZWN0ZWR9KSA9PiB7XHJcbiAgICBjb25zdCBoYW5kbGVDbGljayA9IGUgPT4ge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBzZXRTZWxlY3RlZChjYXRlZ29yeSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxidXR0b24gb25DbGljaz17aGFuZGxlQ2xpY2t9IGNsYXNzTmFtZT1cIm1vYmlsZS1tZW51LWxpbmtcIj5cclxuICAgICAgICAgICAgPHNwYW4+e2NhdGVnb3J5Lm5hbWVbaTE4bi5sYW5ndWFnZV19PC9zcGFuPlxyXG4gICAgICAgICAgICA8Q2hldnJvblJpZ2h0SWNvbiAvPlxyXG4gICAgICAgIDwvYnV0dG9uPlxyXG4gICAgKVxyXG59XHJcblxyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyB1c2VUcmFuc2xhdGlvbiB9IGZyb20gJ3JlYWN0LWkxOG5leHQnO1xyXG5pbXBvcnQgJy4uLy4uLy4uLy4uLy4uL3N0eWxlcy9oZWFkZXIvSGVhZGVyVG9wL01vYmlsZU1lbnUvbW9iaWxlTWVudWZvb3Rlci5jc3MnO1xyXG5pbXBvcnQgeyBDb250YWN0Q29udHJvbCB9IGZyb20gJy4uLy4uL0NvbnRhY3RDb250cm9sJztcclxuaW1wb3J0IHsgQWNjb3VudExpbmtzIH0gZnJvbSAnLi9BY2NvdW50TGlua3MnO1xyXG5pbXBvcnQgeyBGYWNlYm9va0xpbmsgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9VSS9CdXR0b24vU29jaWFsL0ZhY2Vib29rTGluayc7XHJcbmltcG9ydCB7IEluc3RhZ3JhbUxpbmsgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9VSS9CdXR0b24vU29jaWFsL0luc3RhZ3JhbUxpbmsnO1xyXG5pbXBvcnQgaTE4biBmcm9tICcuLi8uLi8uLi8uLi8uLi9lbnRyeXBvaW50cy9pMThuJztcclxuaW1wb3J0IHsgdCB9IGZyb20gJ2kxOG5leHQnO1xyXG5pbXBvcnQgeyBTaXRlQ29uZmlnIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vQ29uZmlnL1NpdGVDb25maWcnO1xyXG5cclxuZXhwb3J0IGNvbnN0IE1vYmlsZU1lbnVGb290ZXIgPSAoe3VzZXJ9KSA9PiB7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8bmF2IGNsYXNzTmFtZT1cIm1vYmlsZS1tZW51LWZvb3RlclwiPlxyXG4gICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwibW9iaWxlLW1lbnUtZm9vdGVyLWxpc3RcIj5cclxuICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJtb2JpbGUtbWVudS1mb290ZXItaXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxDb250YWN0Q29udHJvbCBidXR0b25DbGFzcz1cIm1vYmlsZS1tZW51LWZvb3Rlci1saW5rXCI+e3QoJ2NvbnRhY3RfdXMnLCB7bnM6ICdtZXNzYWdlcyd9KX08L0NvbnRhY3RDb250cm9sPlxyXG4gICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgIDxBY2NvdW50TGlua3MgdXNlcj17dXNlcn0gLz5cclxuICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJtb2JpbGUtbWVudS1mb290ZXItaXRlbSByb3cgbGFuZ1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgU2l0ZUNvbmZpZy5TVVBQT1JURURfTE9DQUxFUy5tYXAobGFuZyA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TG9jYWxlTGluayBrZXk9e2xhbmd9IGxhbmc9e2xhbmd9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICkpXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJtb2JpbGUtbWVudS1mb290ZXItaXRlbSByb3cgc29jaWFsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPEZhY2Vib29rTGluayBjbGFzc05hbWU9XCJtb2JpbGUtbWVudS1mb290ZXItbGluayBzb2NpYWxcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxJbnN0YWdyYW1MaW5rIGNsYXNzTmFtZT1cIm1vYmlsZS1tZW51LWZvb3Rlci1saW5rIHNvY2lhbCBpbnN0YVwiIC8+XHJcbiAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgIDwvbmF2PlxyXG4gICAgKVxyXG59XHJcblxyXG5jb25zdCBMb2NhbGVMaW5rID0gKHtsYW5nfSkgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8YSBcclxuICAgICAgICAgICAgY2xhc3NOYW1lPXsnbW9iaWxlLW1lbnUtZm9vdGVyLWxpbmsgbGFuZycgKyAoaTE4bi5sYW5ndWFnZSA9PT0gbGFuZyA/ICcgc2VsZWN0ZWQnOiAnJyl9IFxyXG4gICAgICAgICAgICBocmVmPXsnLycgKyBsYW5nfVxyXG4gICAgICAgICAgICBhcmlhLWxhYmVsPXt0KCdjaGFuZ2VfbG9jYWxlLicrbGFuZywge25zOiAnbWVzc2FnZXMnfSl9XHJcbiAgICAgICAgICAgIHRpdGxlPXt0KCdjaGFuZ2VfbG9jYWxlLicrbGFuZywge25zOiAnbWVzc2FnZXMnfSl9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9eydmbGFnLWljb24gJyArIGxhbmd9IHNyYz17Jy9pbWcvaWNvbnMvbGFuZy8nK2xhbmcrJy5wbmcnfSBhbHQ9e3QoJ2ZsYWcuJytsYW5nLCB7bnM6ICdtZXNzYWdlcyd9KX0gLz5cclxuICAgICAgICA8L2E+XHJcbiAgICApXHJcbn0iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgaTE4biBmcm9tICcuLi8uLi8uLi8uLi8uLi8uLi9lbnRyeXBvaW50cy9pMThuJztcclxuXHJcblxyXG5leHBvcnQgY29uc3QgU3ViQ2F0ZWdvcnlMaW5rID0gKHtzdWJDYXRlZ29yeSwgb25DbGlja30pID0+IHtcclxuXHJcbiAgICAvL1dJVEhPVVRfU0hPUCAvLyBzdXBwciBvbkNsaWNrXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8bGkgY2xhc3NOYW1lPVwibW9iaWxlLW1lbnUtc3ViaXRlbVwiPlxyXG4gICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJtb2JpbGUtbWVudS1zdWJsaW5rXCIgaHJlZj17c3ViQ2F0ZWdvcnkudGFyZ2V0W2kxOG4ubGFuZ3VhZ2VdfSBvbkNsaWNrPXtvbkNsaWNrfT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9iaWxlLW1lbnUtc3ViaXRlbS1pbWctd3JhcHBlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwibW9iaWxlLW1lbnUtc3ViaXRlbS1pbWdcIiBzcmM9eycvaW1nL2NhdGVnb3JpZXMvJyArIHN1YkNhdGVnb3J5LnBpY3R1cmUucGF0aH0gYWx0PXtzdWJDYXRlZ29yeS5waWN0dXJlLmFsdFtpMThuLmxhbmd1YWdlXX0gLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPHNwYW4+e3N1YkNhdGVnb3J5Lm5hbWVbaTE4bi5sYW5ndWFnZV19PC9zcGFuPlxyXG4gICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgPC9saT5cclxuICAgIClcclxufSIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IFN1YkNhdGVnb3J5TGluayB9IGZyb20gJy4vU3ViQ2F0ZWdvcnlMaW5rJztcclxuaW1wb3J0IHsgQ2hldnJvbkxlZnRJY29uIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vLi4vVUkvSWNvbi9DaGV2cm9uTGVmdEljb24nO1xyXG5pbXBvcnQgeyB1c2VUcmFuc2xhdGlvbiB9IGZyb20gJ3JlYWN0LWkxOG5leHQnO1xyXG5pbXBvcnQgeyBGbGFzaCB9IGZyb20gJy4uLy4uLy4uLy4uLy4uLy4uL1VJL0ZsYXNoL0ZsYXNoJztcclxuaW1wb3J0IHsgdXNlT3BlblN0YXRlIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vLi4vQ3VzdG9tSG9vay9zdGF0ZS91c2VPcGVuU3RhdGUnO1xyXG5pbXBvcnQgeyB1c2VHZXRVc2VyIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vLi4vQ3VzdG9tSG9vay91c2VHZXRVc2VyJztcclxuXHJcbmV4cG9ydCBjb25zdCBNb2JpbGVTdWJNZW51ID0gKHtjYXRlZ29yeSwgc2V0U2VsZWN0ZWR9KSA9PiB7XHJcbiAgICBjb25zdCB7dCwgaTE4bn0gPSB1c2VUcmFuc2xhdGlvbignbWVzc2FnZXMnKTtcclxuXHJcbiAgICBjb25zdCBoYW5kbGVSZXR1cm4gPSBlID0+IHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgc2V0U2VsZWN0ZWQobnVsbCk7XHJcbiAgICB9XHJcblxyXG4gICAgLy9XSVRIT1VUX1NIT1AgLy8gw6Agc3VwcHIgXHJcbiAgICBjb25zdCBbd2l0aG91dFNob3BGbGFzaElzT3Blbiwgb3BlbldpdGhvdXRTaG9wRmxhc2gsIGNsb3NlV2l0aG91dFNob3BGbGFzaF0gPSB1c2VPcGVuU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3Qge3VzZXIsIHVwZGF0ZVVzZXJ9ID0gdXNlR2V0VXNlcigpO1xyXG4gICAgY29uc3QgaGFuZGxlQ2xpY2sgPSBlID0+IHtcclxuICAgICAgICBpZihjYXRlZ29yeS5uYW1lLmVuID09PSAnUmVjaXBlcycpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZighdXNlciB8fCAhWydjb25zdW1lckBlbWFpbC5jb20nLCAncHJvQGVtYWlsLmNvbScsICd2ZW5kb3JAZW1haWwuY29tJ10uaW5jbHVkZXModXNlci5lbWFpbCkpIHtcclxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICBvcGVuV2l0aG91dFNob3BGbGFzaCgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxuYXYgY2xhc3NOYW1lPVwibW9iaWxlLW1lbnUtbmF2IHJpZ2h0XCI+XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGNhdGVnb3J5ICYmIChcclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cIm1vYmlsZS1tZW51LW5hdi1oZWFkZXIgbW9iaWxlLW1lbnUtbGlua1wiIG9uQ2xpY2s9e2hhbmRsZVJldHVybn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxDaGV2cm9uTGVmdEljb24gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibW9iaWxlLW1lbnUtbmF2LXRpdGxlXCI+eyBjYXRlZ29yeS5uYW1lW2kxOG4ubGFuZ3VhZ2VdIH08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cIm1vYmlsZS1tZW51LXN1Ymxpc3RcIj5cclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgLy9XSVRIT1VUX1NIT1AgLy8gw6Agc3VwcHJcclxuICAgICAgICAgICAgICAgIDxGbGFzaFxyXG4gICAgICAgICAgICAgICAgICAgIGJ1dHRvbj17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9e3QoJ3VybC5yZWNpcGUuaW5kZXgnLCB7bnM6ICd1cmxzJ30pfT57dCgnb3VyX3JlY2lwZXMnKX08L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlzT3Blbj17d2l0aG91dFNob3BGbGFzaElzT3Blbn1cclxuICAgICAgICAgICAgICAgICAgICBjbG9zZT17Y2xvc2VXaXRob3V0U2hvcEZsYXNofVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICB7dCgnaW5mby5zaG9wX3dpbGxfYmVfb3Blbl9zb29uJyl9XHJcbiAgICAgICAgICAgICAgICA8L0ZsYXNoPlxyXG4gICAgICAgICAgICAgICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGNhdGVnb3J5ICYmIChcclxuICAgICAgICAgICAgICAgICAgICBjYXRlZ29yeS5zdWJDYXRlZ29yaWVzLm1hcChcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3ViQ2F0ZWdvcnkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFN1YkNhdGVnb3J5TGluayBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e3N1YkNhdGVnb3J5LmlkfSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdWJDYXRlZ29yeT17c3ViQ2F0ZWdvcnl9ICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL1dJVEhPVVRfU0hPUCAvLyBsaWduZSBjaS1kZXNzb3VzIMOgIHN1cHByXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17aGFuZGxlQ2xpY2t9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGNhdGVnb3J5ICYmIChcclxuICAgICAgICAgICAgICAgICAgICA8YSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1idXR0b24gYm9yZGVhdXggb3V0bGluZVwiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBocmVmPXtjYXRlZ29yeS50YXJnZXRbaTE4bi5sYW5ndWFnZV19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vV0lUSE9VVF9TSE9QIC8vIGxpZ25lIGNpLWRlc3NvdXMgw6Agc3VwcHJcclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17aGFuZGxlQ2xpY2t9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3QoJ3NlZV9lbnRpcmVfY2F0ZWdvcnknLCB7Y2F0ZWdvcnk6IGNhdGVnb3J5Lm5hbWVbaTE4bi5sYW5ndWFnZV19KX1cclxuICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICA8L25hdj5cclxuICAgIClcclxufVxyXG5cclxuXHJcbiIsImltcG9ydCBSZWFjdCwgeyBmb3J3YXJkUmVmLCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBIZWFkZXJMb2dvIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vVUkvTG9nby9IZWFkZXJMb2dvJztcclxuaW1wb3J0IHsgTW9iaWxlU3ViTWVudSB9IGZyb20gJy4vTW9iaWxlU3ViTWVudSc7XHJcbmltcG9ydCB7IE1vYmlsZU1lbnVGb290ZXIgfSBmcm9tICcuL01vYmlsZU1lbnVGb290ZXInO1xyXG5pbXBvcnQgeyBDYXRlZ29yeUxpbmsgfSBmcm9tICcuL0NhdGVnb3J5TGluayc7XHJcbmltcG9ydCAnLi4vLi4vLi4vLi4vLi4vc3R5bGVzL2hlYWRlci9IZWFkZXJUb3Avc2lkZU1lbnUuY3NzJztcclxuaW1wb3J0ICcuLi8uLi8uLi8uLi8uLi9zdHlsZXMvaGVhZGVyL0hlYWRlclRvcC9Nb2JpbGVNZW51L2luZGV4LmNzcyc7XHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IE1vYmlsZU1lbnUgPSBmb3J3YXJkUmVmKCh7Y2F0ZWdvcmllcywgdXNlcn0sIG1vZGFsUmVmKSA9PiB7XHJcblxyXG4gICAgLy9zw6lsZWN0aW9uIGRlcyBjYXTDqWdvcmllc1xyXG4gICAgY29uc3QgW3NlbGVjdGVkQ2F0ZWdvcnksIHNldFNlbGVjdGVkQ2F0ZWdvcnldID0gdXNlU3RhdGUobnVsbCk7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICAvL2F1IGNhcyBvdSBvbiDDqXRhaXQgZW4gc2Nyb2xsIGVuIGJhcyBkZXMgY2F0ZWdvcmllcywgaWwgZmF1dCByZW1vbnRlciBwb3VyIGFycml2ZXIgZW4gaGF1dCBkZSBsYSBsaXN0ZSBkZXMgc3ViY2F0ZWdvcmllc1xyXG4gICAgICAgIG1vZGFsUmVmLmN1cnJlbnQuc2Nyb2xsKDAsIDApO1xyXG4gICAgfSwgW3NlbGVjdGVkQ2F0ZWdvcnldKTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9iaWxlLW1lbnUtaGVhZGVyXCI+XHJcbiAgICAgICAgICAgICAgICA8SGVhZGVyTG9nbyAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2JpbGUtbWVudS1tYWluXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17J3NpZGUtbWVudS1ib2R5JyArIChzZWxlY3RlZENhdGVnb3J5ID8gJyBpcy1leHBhbmRlZCc6ICcnKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPG5hdiBjbGFzc05hbWU9XCJtb2JpbGUtbWVudS1uYXYgbGVmdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXRlZ29yaWVzLm1hcChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXRlZ29yeSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDYXRlZ29yeUxpbmsga2V5PXtjYXRlZ29yeS5pZH0gc2V0U2VsZWN0ZWQ9e3NldFNlbGVjdGVkQ2F0ZWdvcnl9IGNhdGVnb3J5PXtjYXRlZ29yeX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICA8L25hdj5cclxuICAgICAgICAgICAgICAgICAgICA8TW9iaWxlU3ViTWVudSBjYXRlZ29yeT17c2VsZWN0ZWRDYXRlZ29yeX0gc2V0U2VsZWN0ZWQ9e3NldFNlbGVjdGVkQ2F0ZWdvcnl9IC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxNb2JpbGVNZW51Rm9vdGVyIHVzZXI9e3VzZXJ9IC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvPlxyXG4gICAgKVxyXG59KTtcclxuXHJcblxyXG5cclxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVJlZiB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgTWVudUJ1dHRvbiB9IGZyb20gJy4uLy4uLy4uLy4uL1VJL0J1dHRvbi9NZW51QnV0dG9uJztcclxuaW1wb3J0IHsgdXNlT3BlblN0YXRlIH0gZnJvbSAnLi4vLi4vLi4vLi4vQ3VzdG9tSG9vay9zdGF0ZS91c2VPcGVuU3RhdGUnO1xyXG5pbXBvcnQgeyBNb2RhbCB9IGZyb20gJy4uLy4uLy4uLy4uL1VJL0NvbnRhaW5lci9Nb2RhbCc7XHJcbmltcG9ydCB7IE1vYmlsZU1lbnUgfSBmcm9tICcuL01vYmlsZU1lbnUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IE1vYmlsZU1lbnVDb250cm9sID0gKHtjYXRlZ29yaWVzLCB1c2VyfSkgPT4ge1xyXG5cclxuICAgIGNvbnN0IFtzaWRlTWVudUlzT3Blbiwgb3BlblNpZGVNZW51LCBjbG9zZVNpZGVNZW51XSA9IHVzZU9wZW5TdGF0ZSgpO1xyXG5cclxuICAgIGNvbnN0IG1vZGFsUmVmID0gdXNlUmVmKG51bGwpO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPE1lbnVCdXR0b24gYWRkaXRpb25hbENsYXNzPVwibW9iaWxlLW1lbnUtb3BlbmVyXCIgb25DbGljaz17b3BlblNpZGVNZW51fSAvPlxyXG4gICAgICAgICAgICA8TW9kYWwgcmVmPXttb2RhbFJlZn0gaXNPcGVuPXtzaWRlTWVudUlzT3Blbn0gY2xvc2U9e2Nsb3NlU2lkZU1lbnV9IGFkZGl0aW9uYWxDbGFzcz1cImxlZnQgbW9iaWxlLW1lbnUgc2lkZS1tZW51XCI+XHJcbiAgICAgICAgICAgICAgICA8TW9iaWxlTWVudSByZWY9e21vZGFsUmVmfSBjYXRlZ29yaWVzPXtjYXRlZ29yaWVzfSBjbG9zZT17Y2xvc2VTaWRlTWVudX0gdXNlcj17dXNlcn0gLz5cclxuICAgICAgICAgICAgPC9Nb2RhbD5cclxuICAgICAgICA8Lz5cclxuICAgIClcclxufSIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcblxyXG5leHBvcnQgY29uc3QgQXJ0aWNsZVN1Z2dlc3QgPSAoe2FydGljbGV9KSA9PiB7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8YSBjbGFzc05hbWU9XCJwcm9kdWN0LXN1Z2dlc3QtaXRlbVwiIGhyZWY9e2FydGljbGUudGFyZ2V0fT5cclxuICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJpdGVtLWltZ1wiIHNyYz17YXJ0aWNsZS5waWN0dXJlLnBhdGh9IGFsdD17YXJ0aWNsZS5waWN0dXJlLmFsdH0vPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIml0ZW0tdGV4dFwiPlxyXG4gICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cIml0ZW0tdGl0bGVcIj57YXJ0aWNsZS50aXRsZX08L2gyPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpdGVtLXN1YnRpdGxlXCI+e2FydGljbGUuc3VidGl0bGV9PC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvYT5cclxuICAgIClcclxufSIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IFByb2R1Y3RJbmRleFJldmlldyB9IGZyb20gJy4uLy4uLy4uLy4uLy4uLy4uL1VJL1Byb2R1Y3QvUHJvZHVjdEluZGV4UmV2aWV3JztcclxuaW1wb3J0IHsgUHJpY2VTaG93IH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vLi4vVUkvUHJvZHVjdC9QcmljZVNob3cnO1xyXG5cclxuZXhwb3J0IGNvbnN0IFByb2R1Y3RTdWdnZXN0ID0gKHtwcm9kdWN0fSkgPT4ge1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGEgY2xhc3NOYW1lPVwicHJvZHVjdC1zdWdnZXN0LWl0ZW1cIiBocmVmPXtwcm9kdWN0LmJhc2VQYWNrYWdpbmcudGFyZ2V0fT5cclxuICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJpdGVtLWltZ1wiIHNyYz17cHJvZHVjdC5maXJzdFBpY3R1cmUucGF0aH0gYWx0PXtwcm9kdWN0LmZpcnN0UGljdHVyZS5hbHR9Lz5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpdGVtLXRleHRcIj5cclxuICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJpdGVtLXRpdGxlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAge3Byb2R1Y3QuZGVzaWduYXRpb259XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicHJvZHVjdC1jYXJkLXRpdGxlLXN1ZmZpeFwiPntwcm9kdWN0LmJhc2VQYWNrYWdpbmcubGFiZWwgPyAoJyAnICsgcHJvZHVjdC5iYXNlUGFja2FnaW5nLmxhYmVsKTogJyd9PC9zcGFuPiAgICBcclxuICAgICAgICAgICAgICAgIDwvaDI+XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDxQcm9kdWN0SW5kZXhSZXZpZXcgcHJvZHVjdD17cHJvZHVjdH0gLz5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaXRlbS1wcmljZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxQcmljZVNob3cgcHJpY2U9e3Byb2R1Y3QuYmFzZVBhY2thZ2luZy5wcmljZX0gLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2E+XHJcbiAgICApXHJcbn0iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5cclxuZXhwb3J0IGNvbnN0IFJlY2lwZVN1Z2dlc3QgPSAoe3JlY2lwZX0pID0+IHtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxhIGNsYXNzTmFtZT1cInByb2R1Y3Qtc3VnZ2VzdC1pdGVtXCIgaHJlZj17cmVjaXBlLnRhcmdldH0+XHJcbiAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwiaXRlbS1pbWdcIiBzcmM9e3JlY2lwZS5waWN0dXJlLnBhdGh9IGFsdD17cmVjaXBlLnBpY3R1cmUuYWx0fS8+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaXRlbS10ZXh0XCI+XHJcbiAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwiaXRlbS10aXRsZVwiPntyZWNpcGUudGl0bGV9PC9oMj5cclxuICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJwcm9kdWN0LWNhcmQtbGlzdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVjaXBlLmluZ3JlZGllbnRzLm1hcCgoaW5ncmVkaWVudCwgaW5kZXgpID0+IDxsaSBjbGFzc05hbWU9XCJwcm9kdWN0LWNhcmQtbGlzdC1pdGVtXCIga2V5PXtpbmRleH0+e2luZ3JlZGllbnR9PC9saT4pXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9hPlxyXG4gICAgKVxyXG59IiwiaW1wb3J0IFJlYWN0LCB7IHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHVzZUZldGNoUVNlYXJjaCB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL0N1c3RvbUhvb2svZmV0Y2gvdXNlRmV0Y2hRU2VhcmNoJztcclxuaW1wb3J0IHsgUHJvZHVjdFN1Z2dlc3QgfSBmcm9tICcuL0l0ZW1TdWdnZXN0L1Byb2R1Y3RTdWdnZXN0JztcclxuaW1wb3J0ICcuLi8uLi8uLi8uLi8uLi9zdHlsZXMvaGVhZGVyL0hlYWRlclRvcC9zaWRlU2VhcmNoVG9vbC5jc3MnO1xyXG5pbXBvcnQgeyBTZWFyY2hJY29uIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vVUkvSWNvbi9TZWFyY2hJY29uJztcclxuaW1wb3J0IHsgTG9hZGVyIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vVUkvSWNvbi9Mb2FkZXInO1xyXG5pbXBvcnQgeyB1c2VCdXR0b25Mb2FkaW5nIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vQ3VzdG9tSG9vay9mb3JtL3VzZUJ1dHRvbkxvYWRpbmcnO1xyXG5pbXBvcnQgeyB1c2VUcmFuc2xhdGlvbiB9IGZyb20gJ3JlYWN0LWkxOG5leHQnO1xyXG5pbXBvcnQgeyBSZWNpcGVTdWdnZXN0IH0gZnJvbSAnLi9JdGVtU3VnZ2VzdC9SZWNpcGVTdWdnZXN0JztcclxuaW1wb3J0IHsgQ2xvc2VCdXR0b24gfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9VSS9CdXR0b24vQ2xvc2VCdXR0b24nO1xyXG5pbXBvcnQgeyBBcnRpY2xlU3VnZ2VzdCB9IGZyb20gJy4vSXRlbVN1Z2dlc3QvQXJ0aWNsZVN1Z2dlc3QnO1xyXG5cclxuZXhwb3J0IGNvbnN0IFNpZGVTZWFyY2hUb29sID0gKCkgPT4ge1xyXG4gICAgY29uc3Qge3QsIGkxOG59ID0gdXNlVHJhbnNsYXRpb24oJ21lc3NhZ2VzJyk7XHJcbiAgICBcclxuICAgIC8vbG9hZGluZyBkdSBib3V0b24gXCJ2b2lyIHRvdXMgbGVzIHLDqXN1bHRhdHNcIlxyXG4gICAgY29uc3QgW2J1dHRvbkxvYWRpbmcsIGhhbmRsZUJ1dHRvbkNsaWNrXSA9IHVzZUJ1dHRvbkxvYWRpbmcoKTtcclxuXHJcbiAgICAvL2hhbmRsZSBxIGNoYW5nZVxyXG4gICAgY29uc3QgW3EsIHNldFFdID0gdXNlU3RhdGUoJycpO1xyXG4gICAgY29uc3QgaGFuZGxlQ2hhbmdlID0gZSA9PiB7XHJcbiAgICAgICAgc2V0UShlLmN1cnJlbnRUYXJnZXQudmFsdWUpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAvL2ZldGNoIHByb2R1Y3RzICYgY291bnRcclxuICAgIGNvbnN0IFtyZXN1bHQsIHJlc2V0UHJvZHVjdHMsIGxvYWRpbmcsIGVycm9yXSA9IHVzZUZldGNoUVNlYXJjaCgnLycrIGkxOG4ubGFuZ3VhZ2UgKycvYXBpL3NlYXJjaCcsIHEsIDEwKTtcclxuXHJcbiAgICBjb25zdCBoYW5kbGVFbXB0eSA9ICgpID0+IHtcclxuICAgICAgICBzZXRRKCcnKTtcclxuICAgICAgICByZXNldFByb2R1Y3RzKCk7XHJcbiAgICAgICAgaW5wdXRSZWYuY3VycmVudC5mb2N1cygpO1xyXG4gICAgfVxyXG4gICAgY29uc3QgaW5wdXRSZWYgPSB1c2VSZWYobnVsbCk7XHJcbiBcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaWRlLXNlYXJjaC10b29sXCI+XHJcbiAgICAgICAgICAgIDxmb3JtIGNsYXNzTmFtZT1cInEtZ3JvdXBcIiBhY3Rpb249e3QoJ3VybC5zZWFyY2guaW5kZXgnLCB7bnM6ICd1cmxzJ30pfSBtZXRob2Q9XCJHRVRcIj5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCByZWY9e2lucHV0UmVmfSBuYW1lPVwicVwiIGNsYXNzTmFtZT1cInEtaW5wdXRcIiB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPXt0KCdzZWFyY2hfcGxhY2Vob2xkZXInKX0gdmFsdWU9e3F9IG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9IGF1dG9Gb2N1cz17dHJ1ZX0gLz5cclxuICAgICAgICAgICAgICAgIDxTZWFyY2hJY29uIGFkZGl0aW9uYWxDbGFzcz1cInEtaWNvblwiIC8+XHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgcSAhPT0gJycgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Q2xvc2VCdXR0b24gdHlwZT1cImJ1dHRvblwiIG9uQ2xpY2s9e2hhbmRsZUVtcHR5fSBhcmlhLWxhYmVsPXt0KCdlbXB0eV9pbnB1dCcpfSB0aXRsZT17dCgnZW1wdHlfaW5wdXQnKX0gLz5cclxuICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9eydwcm9kdWN0LXN1Z2dlc3QtbGlzdCcgKyAobG9hZGluZyA/ICcgbG9hZGluZyc6ICcnKX0+XHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgbG9hZGluZyAmJiA8TG9hZGVyIC8+XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0ICYmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0Lml0ZW1zLm1hcChpdGVtID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtLnR5cGUgPT09ICdwcm9kdWN0JyAmJiA8UHJvZHVjdFN1Z2dlc3Qga2V5PXsncCcraXRlbS5pZH0gcHJvZHVjdD17aXRlbX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtLnR5cGUgPT09ICdyZWNpcGUnICYmIDxSZWNpcGVTdWdnZXN0IGtleT17J3InK2l0ZW0uaWR9IHJlY2lwZT17aXRlbX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtLnR5cGUgPT09ICdhcnRpY2xlJyAmJiA8QXJ0aWNsZVN1Z2dlc3Qga2V5PXsnYScraXRlbS5pZH0gYXJ0aWNsZT17aXRlbX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKSlcclxuICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlYXJjaC1saW5rXCI+XHJcbiAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9eydzaWRlLW1lbnUtZm9vdGVyLWJ1dHRvbicgKyAoYnV0dG9uTG9hZGluZyA/ICcgZGlzYWJsZWQnOiAnJyl9IG9uQ2xpY2s9e2hhbmRsZUJ1dHRvbkNsaWNrfSBocmVmPXt0KCd1cmwuc2VhcmNoLmluZGV4Jywge25zOiAndXJscyd9KSArICc/cT0nK3F9IGRpc2FibGVkPXtidXR0b25Mb2FkaW5nfT5cclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJ1dHRvbkxvYWRpbmdcclxuICAgICAgICAgICAgICAgICAgICAgICAgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TG9hZGVyIGFkZGl0aW9uYWxDbGFzcz1cImZvcm0tYnV0dG9uLWxvYWRlclwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+e3QoJ3NlZV9hbGxfcmVzdWx0cycpfXtyZXN1bHQ/LmNvdW50ID8gJyAoJytyZXN1bHQuY291bnQrJyknOiAnJ308L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxuXHJcbn0iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyB1c2VPcGVuU3RhdGUgfSBmcm9tICcuLi8uLi8uLi8uLi9DdXN0b21Ib29rL3N0YXRlL3VzZU9wZW5TdGF0ZSc7XHJcbmltcG9ydCB7IE1vZGFsIH0gZnJvbSAnLi4vLi4vLi4vLi4vVUkvQ29udGFpbmVyL01vZGFsJztcclxuaW1wb3J0IHsgU2VhcmNoQnV0dG9uIH0gZnJvbSAnLi4vLi4vLi4vLi4vVUkvQnV0dG9uL1NlYXJjaEJ1dHRvbic7XHJcbmltcG9ydCB7IFNpZGVTZWFyY2hUb29sIH0gZnJvbSAnLi9TaWRlU2VhcmNoVG9vbCc7XHJcblxyXG5leHBvcnQgY29uc3QgU2lkZVNlYXJjaFRvb2xDb250cm9sID0gKCkgPT4ge1xyXG5cclxuICAgIGNvbnN0IFtzZWFyY2hUb29sSXNPcGVuLCBvcGVuU2VhcmNoVG9vbCwgY2xvc2VTZWFyY2hUb29sXSA9IHVzZU9wZW5TdGF0ZSgpO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPFNlYXJjaEJ1dHRvbiBhZGRpdGlvbmFsQ2xhc3M9XCJoZWFkZXItc2VhcmNoLWxpbmsgbGVmdC1zZWFyY2gtbGlua1wiIG9uQ2xpY2s9e29wZW5TZWFyY2hUb29sfSAvPlxyXG4gICAgICAgICAgICA8TW9kYWwgaXNPcGVuPXtzZWFyY2hUb29sSXNPcGVufSBjbG9zZT17Y2xvc2VTZWFyY2hUb29sfSBhZGRpdGlvbmFsQ2xhc3M9XCJsZWZ0IHNpZGUtbWVudVwiPlxyXG4gICAgICAgICAgICAgICAgPFNpZGVTZWFyY2hUb29sIC8+XHJcbiAgICAgICAgICAgIDwvTW9kYWw+XHJcbiAgICAgICAgPC8+XHJcbiAgICApXHJcbn1cclxuXHJcbiIsImltcG9ydCBSZWFjdCwgeyBtZW1vIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBIZWFkZXJMb2dvIH0gZnJvbSAnLi4vLi4vLi4vVUkvTG9nby9IZWFkZXJMb2dvJztcclxuaW1wb3J0IHsgQ2FydENvbnRyb2wgfSBmcm9tICcuL0NhcnRDb250cm9sJztcclxuaW1wb3J0IHsgTW9iaWxlTWVudUNvbnRyb2wgfSBmcm9tICcuL01vYmlsZU1lbnVDb250cm9sJztcclxuaW1wb3J0ICcuLi8uLi8uLi9zdHlsZXMvaGVhZGVyL0hlYWRlclRvcC9pbmRleC5jc3MnO1xyXG5pbXBvcnQgeyBTaWRlU2VhcmNoVG9vbENvbnRyb2wgfSBmcm9tICcuL1NpZGVTZWFyY2hUb29sQ29udHJvbCc7XHJcbmltcG9ydCB7IElubGluZVNlYXJjaFRvb2xDb250cm9sIH0gZnJvbSAnLi9JbmxpbmVTZWFyY2hUb29sQ29udHJvbCc7XHJcbmltcG9ydCB7IEFjY291bnRDb250cm9sIH0gZnJvbSAnLi9BY2NvdW50Q29udHJvbCc7XHJcbmltcG9ydCB7IHVzZUdldFVzZXIgfSBmcm9tICcuLi8uLi8uLi9DdXN0b21Ib29rL3VzZUdldFVzZXInO1xyXG5pbXBvcnQgeyB1c2VUcmFuc2xhdGlvbiB9IGZyb20gJ3JlYWN0LWkxOG5leHQnO1xyXG5pbXBvcnQgeyBEYXNoYm9hcmRJY29uIH0gZnJvbSAnLi4vLi4vLi4vVUkvSWNvbi9EYXNoYm9hcmRJY29uJztcclxuaW1wb3J0IHsgQ29udGFjdENvbnRyb2wgfSBmcm9tICcuL0NvbnRhY3RDb250cm9sJztcclxuaW1wb3J0IHsgRmFjZWJvb2tMaW5rIH0gZnJvbSAnLi4vLi4vLi4vVUkvQnV0dG9uL1NvY2lhbC9GYWNlYm9va0xpbmsnO1xyXG5pbXBvcnQgeyBJbnN0YWdyYW1MaW5rIH0gZnJvbSAnLi4vLi4vLi4vVUkvQnV0dG9uL1NvY2lhbC9JbnN0YWdyYW1MaW5rJztcclxuXHJcbmV4cG9ydCBjb25zdCBIZWFkZXJUb3AgPSBtZW1vKCh7Y2F0ZWdvcmllc30pID0+IHtcclxuXHJcbiAgICBjb25zdCB7dH0gPSB1c2VUcmFuc2xhdGlvbignbWVzc2FnZXMnKTtcclxuXHJcbiAgICBjb25zdCB7dXNlciwgdXBkYXRlVXNlcn0gPSB1c2VHZXRVc2VyKCk7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlci10b3BcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXItdG9wLWxlZnRcIj5cclxuICAgICAgICAgICAgICAgIDxNb2JpbGVNZW51Q29udHJvbCBjYXRlZ29yaWVzPXtjYXRlZ29yaWVzfSB1c2VyPXt1c2VyfSAvPlxyXG4gICAgICAgICAgICAgICAgPFNpZGVTZWFyY2hUb29sQ29udHJvbCAvPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXItdG9wLWxlZnQtbGlua3NcIj5cclxuICAgICAgICAgICAgICAgICAgICA8SW5zdGFncmFtTGluayAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxGYWNlYm9va0xpbmsgLz5cclxuICAgICAgICAgICAgICAgICAgICA8Q29udGFjdENvbnRyb2wgYnV0dG9uQ2xhc3M9XCJpY29uLWJ1dHRvblwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAodXNlciAmJiB1c2VyLnJvbGVzLmluY2x1ZGVzKCdST0xFX1ZFTkRPUicpICYmIHVzZXIuY29tcGFueSkgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJoZWFkZXItdG9wLXZlbmRvci1jb250YWN0LWJ1dHRvbiBmb3JtLWJ1dHRvbiBib3JkZWF1eC1ibGFjayBvdXRsaW5lIGktdGV4dFwiIGhyZWY9e3QoJ3VybC52ZW5kb3JBY2NvdW50LnZlbmRvclNwYWNlLmluZGV4Jywge25zOiAndXJscyd9KX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPERhc2hib2FyZEljb24gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj57dCgndmVuZG9yX3NwYWNlJyl9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJoZWFkZXItdG9wLXZlbmRvci1jb250YWN0LWJ1dHRvbiBmb3JtLWJ1dHRvbiBib3JkZWF1eC1ibGFjayBvdXRsaW5lXCIgaHJlZj17dCgndXJsLmNvbnRhY3QuYmVjb21lX3ZlbmRvcicsIHtuczogJ3VybHMnfSl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0KCdiZWNvbWVfdmVuZG9yJyl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8SGVhZGVyTG9nbyAvPlxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXItdG9wLXJpZ2h0XCI+XHJcbiAgICAgICAgICAgICAgICA8SW5saW5lU2VhcmNoVG9vbENvbnRyb2wgLz5cclxuICAgICAgICAgICAgICAgIDxBY2NvdW50Q29udHJvbCB1c2VyPXt1c2VyfSB1cGRhdGVVc2VyPXt1cGRhdGVVc2VyfSAvPlxyXG4gICAgICAgICAgICAgICAgPENhcnRDb250cm9sIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59KTsiLCJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgSGVhZGVyVG9wIH0gZnJvbSAnLi9IZWFkZXJUb3AnO1xyXG5pbXBvcnQgeyBIZWFkZXJCb3R0b20gfSBmcm9tICcuL0hlYWRlckJvdHRvbSc7XHJcbmltcG9ydCAnLi4vLi4vc3R5bGVzL2hlYWRlci9pbmRleC5jc3MnO1xyXG5pbXBvcnQgY2F0ZWdvcmllcyBmcm9tICcuLi8uLi9Db25maWcvY2F0ZWdvcmllcy5qc29uJztcclxuaW1wb3J0IHsgSGVhZGVyUHViIH0gZnJvbSAnLi9IZWFkZXJQdWInO1xyXG5pbXBvcnQgeyB1c2VTY3JvbGxZRGlyZWN0aW9uTGlzdGVuZXIgfSBmcm9tICcuLi8uLi9DdXN0b21Ib29rL2xpc3RlbmVyL3VzZVNjcm9sbFlEaXJlY3Rpb25MaXN0ZW5lcic7XHJcblxyXG5leHBvcnQgY29uc3QgSGVhZGVyID0gKCkgPT4ge1xyXG5cclxuICAgIGNvbnN0IHtpc1Njcm9sbGluZ1VwLCBpc1Njcm9sbGluZ0Rvd259ID0gdXNlU2Nyb2xsWURpcmVjdGlvbkxpc3RlbmVyKDUwLCA3MCk7XHJcblxyXG4gICAgY29uc3QgW2hlYWRlckNsYXNzLCBzZXRIZWFkZXJDbGFzc10gPSB1c2VTdGF0ZSgnaGVhZGVyLXN0YXRpYycpO1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgaWYoaXNTY3JvbGxpbmdVcCkge1xyXG4gICAgICAgICAgICBzZXRIZWFkZXJDbGFzcygnaGVhZGVyLWZpeGVkIHNjcm9sbC11cCcpO1xyXG4gICAgICAgIH0gZWxzZSBpZihpc1Njcm9sbGluZ0Rvd24pIHtcclxuICAgICAgICAgICAgc2V0SGVhZGVyQ2xhc3MoJ2hlYWRlci1maXhlZCBzY3JvbGwtZG93bicpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHNldEhlYWRlckNsYXNzKCdoZWFkZXItc3RhdGljJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfSwgW2lzU2Nyb2xsaW5nVXAsIGlzU2Nyb2xsaW5nRG93bl0pO1xyXG4gICAgXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZSgnc2Nyb2xsLXVwJywgJ3Njcm9sbC1kb3duJywgJ3Njcm9sbGluZycpO1xyXG4gICAgICAgIGlmKGlzU2Nyb2xsaW5nVXApIHtcclxuICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKCdzY3JvbGxpbmcnLCAnc2Nyb2xsLXVwJyk7XHJcbiAgICAgICAgfSBlbHNlIGlmKGlzU2Nyb2xsaW5nRG93bikge1xyXG4gICAgICAgICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoJ3Njcm9sbGluZycsICdzY3JvbGwtZG93bicpO1xyXG4gICAgICAgIH1cclxuICAgIH0sIFtpc1Njcm9sbGluZ1VwLCBpc1Njcm9sbGluZ0Rvd25dKTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtoZWFkZXJDbGFzc30+XHJcbiAgICAgICAgICAgICAgICA8SGVhZGVyUHViIC8+XHJcbiAgICAgICAgICAgICAgICA8SGVhZGVyVG9wIGNhdGVnb3JpZXM9e2NhdGVnb3JpZXN9IC8+XHJcbiAgICAgICAgICAgICAgICA8SGVhZGVyQm90dG9tIGNhdGVnb3JpZXM9e2NhdGVnb3JpZXN9IC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvPlxyXG4gICAgKVxyXG59O1xyXG4iLCJpbXBvcnQgeyB1c2VDYWxsYmFjaywgdXNlUmVkdWNlciwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIlxyXG5pbXBvcnQgeyBBcGlFcnJvciwgYXBpRmV0Y2ggfSBmcm9tIFwiLi4vLi4vZnVuY3Rpb25zL2FwaVwiO1xyXG5pbXBvcnQgeyBwcmljZUFkZCwgcHJpY2VMZXNzLCBwcmljZU11bHRpcGx5IH0gZnJvbSBcIi4uLy4uL2Z1bmN0aW9ucy9wcmljZS9wcmljZU9wZXJhdG9yXCI7XHJcbmltcG9ydCB7IGV4dHJhY3RDYXJ0TGluZXMgfSBmcm9tIFwiLi4vLi4vZnVuY3Rpb25zL2hlbHBlcnMvdmVuZG9yR3JvdXBzTGluZXNFeHRyYWN0b3JcIjtcclxuaW1wb3J0IHsgdCB9IGZyb20gXCJpMThuZXh0XCI7XHJcbmltcG9ydCBpMThuIGZyb20gXCIuLi8uLi9lbnRyeXBvaW50cy9pMThuXCI7XHJcblxyXG5cclxuY29uc3QgcmVkdWNlciA9IChjYXJ0LCBhY3Rpb24pID0+IHtcclxuICAgIHN3aXRjaChhY3Rpb24udHlwZSkge1xyXG5cclxuICAgICAgICBjYXNlICdTVEFSVF9HRU5FUkFMX0xPQURJTkcnOlxyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgLi4uY2FydCxcclxuICAgICAgICAgICAgICAgIGdlbmVyYWxMb2FkaW5nOiB0cnVlXHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgIGNhc2UgJ1NUT1BfR0VORVJBTF9MT0FESU5HJzpcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIC4uLmNhcnQsXHJcbiAgICAgICAgICAgICAgICBnZW5lcmFsTG9hZGluZzogZmFsc2VcclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgY2FzZSAnRkVUQ0gnOlxyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgLi4uY2FydCxcclxuICAgICAgICAgICAgICAgIC8vIGFjdGlvbi5wYXlsb2FkID09PSBmdWxsQ2FydFxyXG4gICAgICAgICAgICAgICAgY2FydFZlbmRvckdyb3VwczogYWN0aW9uLnBheWxvYWQuY2FydFZlbmRvckdyb3Vwcy5tYXAoY2FydFZlbmRvckdyb3VwID0+ICh7XHJcbiAgICAgICAgICAgICAgICAgICAgLi4uY2FydFZlbmRvckdyb3VwLFxyXG4gICAgICAgICAgICAgICAgICAgIGNhcnRMaW5lczogY2FydFZlbmRvckdyb3VwLmNhcnRMaW5lcy5tYXAoY2FydExpbmUgPT4gKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IGNhcnRMaW5lLnBhY2thZ2luZy5pZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFja2FnaW5nOiBjYXJ0TGluZS5wYWNrYWdpbmcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHF1YW50aXR5OiBjYXJ0TGluZS5xdWFudGl0eSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdW5pdFByaWNlOiBjYXJ0TGluZS51bml0UHJpY2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvdGFsUHJpY2U6IGNhcnRMaW5lLnRvdGFsUHJpY2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yOiBudWxsXHJcbiAgICAgICAgICAgICAgICAgICAgfSkpXHJcbiAgICAgICAgICAgICAgICB9KSksXHJcbiAgICAgICAgICAgICAgICBjb3VudDogYWN0aW9uLnBheWxvYWQuY291bnQsXHJcbiAgICAgICAgICAgICAgICB0b3RhbFByaWNlOiBhY3Rpb24ucGF5bG9hZC50b3RhbFByaWNlLFxyXG4gICAgICAgICAgICAgICAgZ2VuZXJhbEVycm9yOiBudWxsXHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgIGNhc2UgJ1NFVF9RVUFOVElUWSc6IFxyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgLi4uY2FydCxcclxuICAgICAgICAgICAgICAgIGNhcnRWZW5kb3JHcm91cHM6IGNhcnQuY2FydFZlbmRvckdyb3Vwcy5tYXAoY2FydFZlbmRvckdyb3VwID0+ICh7XHJcbiAgICAgICAgICAgICAgICAgICAgLi4uY2FydFZlbmRvckdyb3VwLFxyXG4gICAgICAgICAgICAgICAgICAgIGNhcnRMaW5lczogY2FydFZlbmRvckdyb3VwLmNhcnRMaW5lcy5tYXAoY2FydExpbmUgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZihjYXJ0TGluZS5wYWNrYWdpbmcuaWQgPT09IGFjdGlvbi50YXJnZXQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vb24gdsOpcmlmaWUgbGUgc3RvY2tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKGFjdGlvbi5wYXlsb2FkID4gY2FydExpbmUucGFja2FnaW5nLnN0b2NrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FydExpbmUucXVhbnRpdHkgPSBjYXJ0TGluZS5wYWNrYWdpbmcuc3RvY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FydExpbmUuZXJyb3IgPSB0KCdpbnN1ZmZpY2llbnRfc3RvY2snLCB7bnM6ICdtZXNzYWdlcyd9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZihhY3Rpb24ucGF5bG9hZCA8IDEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXJ0TGluZS5xdWFudGl0eSA9IDE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FydExpbmUuZXJyb3IgPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXJ0TGluZS5xdWFudGl0eSA9IGFjdGlvbi5wYXlsb2FkO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhcnRMaW5lLmVycm9yID0gbnVsbDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhcnRMaW5lLnRvdGFsUHJpY2UgPSBwcmljZU11bHRpcGx5KGNhcnRMaW5lLnVuaXRQcmljZSwgY2FydExpbmUucXVhbnRpdHkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBjYXJ0TGluZTtcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgfSkpXHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgIGNhc2UgJ1JFTU9WRSc6XHJcbiAgICAgICAgICAgIGNvbnN0IGxpbmVUb1JlbW92ZSA9IChleHRyYWN0Q2FydExpbmVzKGNhcnQpKS5maW5kKGNhcnRMaW5lID0+IGNhcnRMaW5lLnBhY2thZ2luZy5pZCA9PT0gYWN0aW9uLnRhcmdldCk7XHJcbiAgICAgICAgICAgIGNvbnN0IGxpbmVUb3RhbFByaWNlID0gbGluZVRvUmVtb3ZlLnRvdGFsUHJpY2U7XHJcbiAgICAgICAgICAgIGNvbnN0IGxpbmVRdWFudGl0eSA9IGxpbmVUb1JlbW92ZS5xdWFudGl0eTtcclxuICAgICAgICAgICAgY29uc3QgbGluZVRvUmVtb3ZlSWQgPSBsaW5lVG9SZW1vdmUuaWQ7XHJcblxyXG4gICAgICAgICAgICAvL29uIHByw6lwYXJlIGxlIG5vdXZlbCBhcnJheSBjYXJ0VmVuZG9yR3JvdXBzIGVuIHN1cHByaW1hbnQgbGEgbGluZVRvUmVtb3ZlXHJcbiAgICAgICAgICAgIGNvbnN0IGNhcnRWZW5kb3JHcm91cHMgPSBjYXJ0LmNhcnRWZW5kb3JHcm91cHMubWFwKGNhcnRWZW5kb3JHcm91cCA9PiAoe1xyXG4gICAgICAgICAgICAgICAgLi4uY2FydFZlbmRvckdyb3VwLFxyXG4gICAgICAgICAgICAgICAgY2FydExpbmVzOiBjYXJ0VmVuZG9yR3JvdXAuY2FydExpbmVzLmZpbHRlcihjYXJ0TGluZSA9PiBjYXJ0TGluZS5pZCAhPT0gbGluZVRvUmVtb3ZlSWQpXHJcbiAgICAgICAgICAgIH0pKTtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAuLi5jYXJ0LFxyXG4gICAgICAgICAgICAgICAgY2FydFZlbmRvckdyb3VwczogY2FydFZlbmRvckdyb3Vwcy5maWx0ZXIoY2FydFZlbmRvckdyb3VwID0+IGNhcnRWZW5kb3JHcm91cC5jYXJ0TGluZXMubGVuZ3RoID4gMCksIC8vb24gc3VwcHJpbWUgbGUgdmVuZG9yR3JvdXAgcydpbCBuJ2EgcGx1cyBhdWN1bmUgY2FydExpbmVcclxuICAgICAgICAgICAgICAgIHRvdGFsUHJpY2U6IHByaWNlTGVzcyhjYXJ0LnRvdGFsUHJpY2UsIGxpbmVUb3RhbFByaWNlKSxcclxuICAgICAgICAgICAgICAgIGNvdW50OiBjYXJ0LmNvdW50IC0gbGluZVF1YW50aXR5XHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgIGNhc2UgJ0VSUk9SJzpcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIC4uLmNhcnQsXHJcbiAgICAgICAgICAgICAgICBnZW5lcmFsTG9hZGluZzogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBnZW5lcmFsRXJyb3I6IGFjdGlvbi5wYXlsb2FkIFxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIGNhc2UgJ1VQREFURV9UT1RBTF9QUklDRV9BTkRfQ09VTlQnOlxyXG4gICAgICAgICAgICAvL29uIGNyw6llIHVuIHRhYmxlYXUgY29udGVuYW50IHRvdXMgbGVzIGNhcnRMaW5lLnRvdGFsUHJpY2UgaW5kZXjDqXMgcGFyIGNhcnRMaW5lSWRcclxuICAgICAgICAgICAgY29uc3QgY2FydExpbmVzID0gZXh0cmFjdENhcnRMaW5lcyhjYXJ0KTtcclxuICAgICAgICAgICAgY29uc3QgbGluZVRvdGFsUHJpY2VzQnlJZCA9IE9iamVjdC5mcm9tRW50cmllcyhjYXJ0TGluZXMubWFwKGNhcnRMaW5lID0+IChbXHJcbiAgICAgICAgICAgICAgICBjYXJ0TGluZS5pZCxcclxuICAgICAgICAgICAgICAgIHByaWNlTXVsdGlwbHkoY2FydExpbmUudW5pdFByaWNlLCBjYXJ0TGluZS5xdWFudGl0eSlcclxuICAgICAgICAgICAgXSkpKTtcclxuICAgICAgICAgICAgLy9vbiBhZGRpdGlvbm5lIHBvdXIgb2J0ZW5pciBsZSBjYXJ0LnRvdGFsUHJpY2VcclxuICAgICAgICAgICAgY29uc3QgY2FydFRvdGFsUHJpY2UgPSBwcmljZUFkZChPYmplY3QudmFsdWVzKGxpbmVUb3RhbFByaWNlc0J5SWQpKTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGNvdW50ID0gY2FydExpbmVzLnJlZHVjZSgoYWNjLCBjYXJ0TGluZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGFjYyArIGNhcnRMaW5lLnF1YW50aXR5O1xyXG4gICAgICAgICAgICB9LCAwKTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAuLi5jYXJ0LFxyXG4gICAgICAgICAgICAgICAgY2FydFZlbmRvckdyb3VwczogY2FydC5jYXJ0VmVuZG9yR3JvdXBzLm1hcChjYXJ0VmVuZG9yR3JvdXAgPT4gKHtcclxuICAgICAgICAgICAgICAgICAgICAuLi5jYXJ0VmVuZG9yR3JvdXAsXHJcbiAgICAgICAgICAgICAgICAgICAgY2FydExpbmVzOiBjYXJ0VmVuZG9yR3JvdXAuY2FydExpbmVzLm1hcChjYXJ0TGluZSA9PiAoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAuLi5jYXJ0TGluZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdG90YWxQcmljZTogbGluZVRvdGFsUHJpY2VzQnlJZFtjYXJ0TGluZS5pZF0gLy8gb24gbWV0IMOgIGpvdXIgdG91cyBsZXMgY2FydExpbmUudG90YWxQcmljZSBncsOiY2Ugw6Agbm90cmUgdGFibGVhdSBsaW5lVG90YWxQcmljZXNCeUlkXHJcbiAgICAgICAgICAgICAgICAgICAgfSkpXHJcbiAgICAgICAgICAgICAgICB9KSksXHJcbiAgICAgICAgICAgICAgICB0b3RhbFByaWNlOiBjYXJ0VG90YWxQcmljZSxcclxuICAgICAgICAgICAgICAgIGNvdW50OiBjb3VudFxyXG4gICAgICAgICAgICB9O1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuLyoqXHJcbiAqIEByZXR1cm5zIFxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IHVzZUNhcnRGZXRjaCA9ICgpID0+IHtcclxuXHJcbiAgICBjb25zdCBbY2FydCwgZGlzcGF0Y2hdID0gdXNlUmVkdWNlcihyZWR1Y2VyLCB7XHJcbiAgICAgICAgY2FydFZlbmRvckdyb3VwczogW10sXHJcbiAgICAgICAgY291bnQ6IG51bGwsXHJcbiAgICAgICAgdG90YWxQcmljZTogbnVsbCxcclxuICAgICAgICBnZW5lcmFsTG9hZGluZzogZmFsc2UsIC8vIGxvYWRpbmcgZHUgZmV0Y2hcclxuICAgICAgICBnZW5lcmFsRXJyb3I6IG51bGxcclxuICAgIH0pO1xyXG5cclxuICAgIGNvbnN0IFtxdWFudGl0eVRpbWVyLCBzZXRRdWFudGl0eVRpbWVyXSA9IHVzZVN0YXRlKG51bGwpO1xyXG5cclxuICAgIGNvbnN0IGZldGNoQ2FydCA9IHVzZUNhbGxiYWNrKGFzeW5jICgpID0+IHtcclxuICAgICAgICBkaXNwYXRjaCh7dHlwZTogJ1NUQVJUX0dFTkVSQUxfTE9BRElORyd9KTtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBjb25zdCBmdWxsQ2FydCA9IGF3YWl0IGFwaUZldGNoKCcvJytpMThuLmxhbmd1YWdlKycvYXBpL2NhcnQvZ2V0RnVsbENhcnQnKTtcclxuICAgICAgICAgICAgZGlzcGF0Y2goe3R5cGU6ICdGRVRDSCcsIHBheWxvYWQ6IGZ1bGxDYXJ0fSk7XHJcbiAgICAgICAgfSBjYXRjaChlKSB7XHJcbiAgICAgICAgICAgIGRpc3BhdGNoKHt0eXBlOiAnRVJST1InLCBwYXlsb2FkOiBlfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGRpc3BhdGNoKHt0eXBlOiAnU1RPUF9HRU5FUkFMX0xPQURJTkcnfSk7XHJcbiAgICB9LCBbZGlzcGF0Y2hdKTtcclxuXHJcbiAgICBjb25zdCByZW1vdmUgPSB1c2VDYWxsYmFjayhhc3luYyAocGFja2FnaW5nSWQpID0+IHtcclxuICAgICAgICBkaXNwYXRjaCh7dHlwZTogJ1JFTU9WRScsIHRhcmdldDogcGFja2FnaW5nSWR9KTtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBhd2FpdCBhcGlGZXRjaCgnLycraTE4bi5sYW5ndWFnZSsnL2FwaS9jYXJ0L3JlbW92ZS9pZC0nK3BhY2thZ2luZ0lkKTtcclxuICAgICAgICB9IGNhdGNoKGUpIHtcclxuICAgICAgICAgICAgLy9vbiByw6lhY3R1YWxpc2UgcG91ciDDqnRyZSByYWNjb3JkIGF2ZWMgbGEgZGF0YWJhc2VcclxuICAgICAgICAgICAgZmV0Y2hDYXJ0KCk7XHJcbiAgICAgICAgfSAgIFxyXG4gICAgfSwgW2ZldGNoQ2FydCwgZGlzcGF0Y2hdKTtcclxuXHJcbiAgICBjb25zdCBzZXRRdWFudGl0eSA9IHVzZUNhbGxiYWNrKChwYWNrYWdpbmdJZCwgcXVhbnRpdHkpID0+IHtcclxuICAgICAgICBkaXNwYXRjaCh7dHlwZTogJ1NFVF9RVUFOVElUWScsIHRhcmdldDogcGFja2FnaW5nSWQsIHBheWxvYWQ6IHF1YW50aXR5fSk7XHJcbiAgICAgICAgLy9vbiBkb2l0IGF0dGVuZHJlIGxhIG1pc2Ugw6Agam91ciBkZSBsJ8OpdGF0IGNpLWRlc3N1cyBwb3VyIHNhdm9pciBzaSBsJ2Fqb3V0IGEgcHUgc2UgZmFpcmUsIGV0IGVuc3VpdGUgbWV0dHJlIMOgIGpvdXIgbGUgcHJpeCB0b3RhbCBldCBsZSBjb3VudFxyXG4gICAgICAgIGRpc3BhdGNoKHt0eXBlOiAnVVBEQVRFX1RPVEFMX1BSSUNFX0FORF9DT1VOVCd9KTsgLy9tb2RpZmllIGNhcnQgZXQgZMOpY2xlbmNoZSBsZSBjYXJ0Q2hpcFVwZGF0ZSgpXHJcblxyXG4gICAgICAgIC8vY290w6kgc2VydmVyIDogb24gbWV0IHVuIHRpbWVyIHBvdXIgw6l2aXRlciB0cm9wIGQnYXBwZWxzIHN1Y2Nlc3NpZiAob24gYXBwZWxsZSBsZSBzZXJ2ZXVyIHF1J3VuZSBmb2lzIHRvdXRlcyBsZXMgMzAwIG1zIGF1IG1heGltdW0pXHJcbiAgICAgICAgaWYocXVhbnRpdHlUaW1lcikge1xyXG4gICAgICAgICAgICBjbGVhclRpbWVvdXQocXVhbnRpdHlUaW1lcik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNldFF1YW50aXR5VGltZXIoXHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgICAgICBhd2FpdCBhcGlGZXRjaCgnLycraTE4bi5sYW5ndWFnZSsnL2FwaS9jYXJ0L3NldFF1YW50aXR5L2lkLScrcGFja2FnaW5nSWQrJ19xdWFudGl0eS0nK3F1YW50aXR5KTtcclxuICAgICAgICAgICAgICAgIH0gY2F0Y2goZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKCFlIGluc3RhbmNlb2YgQXBpRXJyb3IpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy9lbiBjYXMgZCdlcnJldXIgYXV0cmUgcXVlIHN0b2NrIChnw6lyw6llIGVuIGxvY2FsKSBvbiByw6lhY3R1YWxpc2UgcG91ciDDqnRyZSByYWNjb3JkIGF2ZWMgbGEgZGF0YWJhc2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmV0Y2hDYXJ0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LCAzMDApXHJcbiAgICAgICAgKTtcclxuICAgIH0sIFtmZXRjaENhcnQsIGRpc3BhdGNoLCBxdWFudGl0eVRpbWVyXSk7XHJcblxyXG5cclxuICAgIHJldHVybiB7Y2FydCwgZmV0Y2hDYXJ0LCByZW1vdmUsIHNldFF1YW50aXR5fTtcclxufVxyXG5cclxuXHJcblxyXG5cclxuXHJcbiIsImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCJcclxuXHJcbmV4cG9ydCBjb25zdCB1c2VCdXR0b25Mb2FkaW5nID0gKCkgPT4ge1xyXG4gICAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgaGFuZGxlQnV0dG9uQ2xpY2sgPSBlID0+IHtcclxuICAgICAgICBpZihsb2FkaW5nKSB7XHJcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBzZXRMb2FkaW5nKHRydWUpO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBbbG9hZGluZywgaGFuZGxlQnV0dG9uQ2xpY2tdO1xyXG59IiwiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiXHJcbmltcG9ydCB7IHVzZVNjcm9sbFlMaXN0ZW5lciB9IGZyb20gXCIuL3VzZVNjcm9sbFlMaXN0ZW5lclwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IHVzZVNjcm9sbFlEaXJlY3Rpb25MaXN0ZW5lciA9IChzdGFydCA9IDcwLCBzZW5zaWJpbGl0eSA9IDUwKSA9PiB7XHJcbiAgICBjb25zdCBjdXJyZW50U2Nyb2xsID0gdXNlU2Nyb2xsWUxpc3RlbmVyKCk7XHJcblxyXG4gICAgY29uc3QgW2lzU2Nyb2xsaW5nRG93biwgc2V0U2Nyb2xsaW5nRG93bl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBbaXNTY3JvbGxpbmdVcCwgc2V0U2Nyb2xsaW5nVXBdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgW2xhc3RTY3JvbGwsIHNldExhc3RTY3JvbGxdID0gdXNlU3RhdGUoMCk7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICAgLy9vbiB2w6lyaWZpZSBzaSBvbiBlc3QgYXUgZGVsYSBkdSBzY3JvbGwgc3RhcnRcclxuICAgICAgICAgaWYoY3VycmVudFNjcm9sbCA8IHN0YXJ0KSB7XHJcbiAgICAgICAgICAgIHNldFNjcm9sbGluZ1VwKGZhbHNlKTtcclxuICAgICAgICAgICAgc2V0U2Nyb2xsaW5nRG93bihmYWxzZSk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy9vbiB2w6lyaWZpZSBzaSBvbiBlc3QgZW4gc2Nyb2xsIGRvd24gb3UgdXBcclxuICAgICAgICBpZihjdXJyZW50U2Nyb2xsID4gKGxhc3RTY3JvbGwgKyBzZW5zaWJpbGl0eSkpIHtcclxuICAgICAgICAgICAgc2V0U2Nyb2xsaW5nVXAoZmFsc2UpO1xyXG4gICAgICAgICAgICBzZXRTY3JvbGxpbmdEb3duKHRydWUpO1xyXG4gICAgICAgICAgICBzZXRMYXN0U2Nyb2xsKGN1cnJlbnRTY3JvbGwpO1xyXG4gICAgICAgIH0gZWxzZSBpZihjdXJyZW50U2Nyb2xsIDwgKGxhc3RTY3JvbGwgLSBzZW5zaWJpbGl0eSkpIHtcclxuICAgICAgICAgICAgc2V0U2Nyb2xsaW5nRG93bihmYWxzZSk7XHJcbiAgICAgICAgICAgIHNldFNjcm9sbGluZ1VwKHRydWUpO1xyXG4gICAgICAgICAgICBzZXRMYXN0U2Nyb2xsKGN1cnJlbnRTY3JvbGwpO1xyXG4gICAgICAgIH0gXHJcblxyXG4gICAgfSwgW2N1cnJlbnRTY3JvbGxdKTtcclxuXHJcbiAgICByZXR1cm4ge2lzU2Nyb2xsaW5nRG93biwgaXNTY3JvbGxpbmdVcH07XHJcbn0iLCJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuXHJcbmV4cG9ydCBjb25zdCB1c2VTY3JvbGxZTGlzdGVuZXIgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBbY3VycmVudFNjcm9sbCwgc2V0Q3VycmVudFNjcm9sbF0gPSB1c2VTdGF0ZSh3aW5kb3cuc2Nyb2xsWSk7XHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IG9uU2Nyb2xsID0gKCkgPT4ge1xyXG4gICAgICAgICAgICBzZXRDdXJyZW50U2Nyb2xsKHdpbmRvdy5zY3JvbGxZKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBvblNjcm9sbCk7XHJcblxyXG4gICAgICAgIHJldHVybiAoKSA9PiB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgb25TY3JvbGwpO1xyXG4gICAgfSwgW10pO1xyXG5cclxuICAgIHJldHVybiBjdXJyZW50U2Nyb2xsO1xyXG59IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuXHJcbmV4cG9ydCBjb25zdCBBY2NvdW50QmFkZ2UgPSAoe3VzZXJ9KSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImFjY291bnQtaWNvbi1sb2dnZWRcIj5cclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdXNlci5yb2xlcy5pbmNsdWRlcygnUk9MRV9QUk8nKSAmJiB1c2VyLmNvbXBhbnkgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgdXNlci5jb21wYW55LnVzdWFsTmFtZS5zdWJzdHIoMCwgMSkudG9VcHBlckNhc2UoKVxyXG4gICAgICAgICAgICAgICAgKTogKFxyXG4gICAgICAgICAgICAgICAgICAgIHVzZXIuZmlyc3ROYW1lLnN1YnN0cigwLCAxKS50b1VwcGVyQ2FzZSgpXHJcbiAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICA8L3NwYW4+XHJcbiAgICApXHJcbn0iLCJpbXBvcnQgeyB0IH0gZnJvbSAnaTE4bmV4dCc7XHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcblxyXG5jb25zdCByZXNvbHZlTGFiZWwgPSByb2xlcyA9PiB7XHJcbiAgICBsZXQgbGFiZWwgPSBudWxsO1xyXG4gICAgaWYocm9sZXMuaW5jbHVkZXMoJ1JPTEVfQURNSU4nKSkge1xyXG4gICAgICAgIGxhYmVsID0gJ2FkbWluJztcclxuICAgIH0gZWxzZSBpZihyb2xlcy5pbmNsdWRlcygnUk9MRV9WRU5ET1InKSkge1xyXG4gICAgICAgIGxhYmVsID0gdCgndmVuZG9yJywge25zOiAnbWVzc2FnZXMnfSk7XHJcbiAgICB9IGVsc2UgaWYocm9sZXMuaW5jbHVkZXMoJ1JPTEVfUFJPJykpIHtcclxuICAgICAgICBsYWJlbCA9IHQoJ3BybycsIHtuczogJ21lc3NhZ2VzJ30pO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGxhYmVsO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgUm9sZUJhZGdlID0gKHtyb2xlcywgYWRkaXRpb25hbENsYXNzLCBhbGlnbiA9ICdsZWZ0J30pID0+IHtcclxuXHJcbiAgICBjb25zdCBsYWJlbCA9IHJlc29sdmVMYWJlbChyb2xlcyk7XHJcblxyXG4gICAgaWYobGFiZWwpIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YWxpZ24gKyAnLXdyYXBwZXInICsgKGFkZGl0aW9uYWxDbGFzcyA/ICcgJythZGRpdGlvbmFsQ2xhc3M6ICcnKX0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtYmFkZ2UgYmctYm9yZGVhdXgtZmxhc2hcIj57bGFiZWx9PC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIClcclxuICAgIH1cclxufVxyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBGbHlSb2xlQmFkZ2UgPSAoe3JvbGVzLCBhZGRpdGlvbmFsQ2xhc3N9KSA9PiB7XHJcblxyXG4gICAgY29uc3QgbGFiZWwgPSByZXNvbHZlTGFiZWwocm9sZXMpO1xyXG5cclxuICAgIGlmKGxhYmVsKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9eyd0ZXh0LWJhZGdlIGJnLWJvcmRlYXV4LWZsYXNoJyArIChhZGRpdGlvbmFsQ2xhc3MgPyAnICcrYWRkaXRpb25hbENsYXNzOiAnJyl9PntsYWJlbH08L2Rpdj5cclxuICAgICAgICApXHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5cclxuZXhwb3J0IGNvbnN0IFdhcm5pbmdCYWRnZSA9ICh7bnVtYmVyID0gMX0pID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiYWRnZSBiYWRnZS1yaWdodCB3YXJuaW5nLWJhZGdlXCI+XHJcbiAgICAgICAgICAgIHtudW1iZXJ9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn0iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBBY2NvdW50SWNvbiB9IGZyb20gJy4uL0ljb24vQWNjb3VudEljb24nO1xyXG5pbXBvcnQgeyBBY2NvdW50QmFkZ2UgfSBmcm9tICcuLi9CYWRnZS9BY2NvdW50QmFkZ2UnO1xyXG5pbXBvcnQgeyB0IH0gZnJvbSAnaTE4bmV4dCc7XHJcblxyXG5leHBvcnQgY29uc3QgQWNjb3VudEJ1dHRvbiA9ICh7Y2hpbGRyZW4sIG9uQ2xpY2ssIGFkZGl0aW9uYWxDbGFzcywgdXNlciwgLi4ucHJvcHN9KSA9PiB7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8YnV0dG9uIFxyXG4gICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCIgXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17J2J1dHRvbiBidXR0b24tbGluayBpY29uLWJ1dHRvbicgKyAoYWRkaXRpb25hbENsYXNzID8gJyAnICsgYWRkaXRpb25hbENsYXNzOiAnJyl9IFxyXG4gICAgICAgICAgICBhcmlhLWxhYmVsPXt0KCdteV9hY2NvdW50Jywge25zOiAnbWVzc2FnZXMnfSl9IFxyXG4gICAgICAgICAgICBvbkNsaWNrPXtvbkNsaWNrfSB7Li4ucHJvcHN9XHJcbiAgICAgICAgICAgID4gXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICF1c2VyICYmIDxBY2NvdW50SWNvbiAvPlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHVzZXIgJiYgPEFjY291bnRCYWRnZSB1c2VyPXt1c2VyfSAvPlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHtjaGlsZHJlbn1cclxuICAgICAgICA8L2J1dHRvbj5cclxuICAgIClcclxufVxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHQgfSBmcm9tICdpMThuZXh0JztcclxuXHJcbmV4cG9ydCBjb25zdCBCZWNvbWVWZW5kb3JMaW5rID0gKCkgPT4ge1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGEgY2xhc3NOYW1lPVwiaGVhZGVyLXRvcC12ZW5kb3ItY29udGFjdC1idXR0b24gZm9ybS1idXR0b24gYm9yZGVhdXhcIiBocmVmPXt0KCd1cmwuY29udGFjdC5iZWNvbWVfdmVuZG9yJywge25zOiAndXJscyd9KX0+XHJcbiAgICAgICAgICAgIHt0KCdiZWNvbWVfdmVuZG9yJywge25zOiAnbWVzc2FnZXMnfSl9XHJcbiAgICAgICAgPC9hPlxyXG4gICAgKVxyXG59IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSAnLi9CdXR0b24nO1xyXG5pbXBvcnQgeyBDYXJ0SWNvbiB9IGZyb20gJy4uL0ljb24vQ2FydEljb24nO1xyXG5pbXBvcnQgeyB0IH0gZnJvbSAnaTE4bmV4dCc7XHJcblxyXG5leHBvcnQgY29uc3QgQ2FydEJ1dHRvbiA9ICh7Y2hpbGRyZW4sIG9uQ2xpY2ssIGFkZGl0aW9uYWxDbGFzcywgLi4ucHJvcHN9KSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxCdXR0b24gXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17J2ljb24tYnV0dG9uJyArIChhZGRpdGlvbmFsQ2xhc3MgPyAnICcgKyBhZGRpdGlvbmFsQ2xhc3M6ICcnKX0gXHJcbiAgICAgICAgICAgIGFyaWEtbGFiZWw9e3QoJ2NhcnQnLCB7bnM6ICdtZXNzYWdlcyd9KX0gXHJcbiAgICAgICAgICAgIHRpdGxlPXt0KCdvcGVuX2NhcnQnLCB7bnM6ICdtZXNzYWdlcyd9KX1cclxuICAgICAgICAgICAgb25DbGljaz17b25DbGlja30gXHJcbiAgICAgICAgICAgIHsuLi5wcm9wc31cclxuICAgICAgICA+IFxyXG4gICAgICAgICAgICA8Q2FydEljb24gLz5cclxuICAgICAgICAgICAge2NoaWxkcmVufVxyXG4gICAgICAgIDwvQnV0dG9uPlxyXG4gICAgKVxyXG59IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSAnLi9CdXR0b24nO1xyXG5pbXBvcnQgeyBDaGF0SWNvbiB9IGZyb20gJy4uL0ljb24vQ2hhdEljb24nO1xyXG5pbXBvcnQgeyB0IH0gZnJvbSAnaTE4bmV4dCc7XHJcblxyXG5leHBvcnQgY29uc3QgQ2hhdEJ1dHRvbiA9ICh7Y2hpbGRyZW4sIG9uQ2xpY2ssIGFkZGl0aW9uYWxDbGFzcywgLi4ucHJvcHN9KSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxCdXR0b24gXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17J2ljb24tYnV0dG9uJyArIChhZGRpdGlvbmFsQ2xhc3MgPyAnICcgKyBhZGRpdGlvbmFsQ2xhc3M6ICcnKX0gXHJcbiAgICAgICAgICAgIGFyaWEtbGFiZWw9e3QoJ2NvbnRhY3RfdXMnLCB7bnM6ICdtZXNzYWdlcyd9KX0gXHJcbiAgICAgICAgICAgIHRpdGxlPXt0KCdjb250YWN0X3VzJywge25zOiAnbWVzc2FnZXMnfSl9XHJcbiAgICAgICAgICAgIG9uQ2xpY2s9e29uQ2xpY2t9IFxyXG4gICAgICAgICAgICB7Li4ucHJvcHN9XHJcbiAgICAgICAgPiBcclxuICAgICAgICAgICAgPENoYXRJY29uIC8+XHJcbiAgICAgICAgICAgIHtjaGlsZHJlbn1cclxuICAgICAgICA8L0J1dHRvbj5cclxuICAgIClcclxufSIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IExvZ291dEljb24gfSBmcm9tICcuLi9JY29uL0xvZ291dEljb24nO1xyXG5pbXBvcnQgaTE4biBmcm9tICcuLi8uLi9lbnRyeXBvaW50cy9pMThuJztcclxuaW1wb3J0IHsgdCB9IGZyb20gJ2kxOG5leHQnO1xyXG5cclxuZXhwb3J0IGNvbnN0IExvZ291dEJ1dHRvbiA9ICh7Y2xhc3NOYW1lLCAuLi5wcm9wc30pID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGEgY2xhc3NOYW1lPXtjbGFzc05hbWUgPz8gJ2xpbmstbXV0ZSBzaW1wbGUtbGluayBpLXRleHQnfSBocmVmPXsnLycrIGkxOG4ubGFuZ3VhZ2UgKycvbG9nb3V0J30gey4uLnByb3BzfT5cclxuICAgICAgICAgICAgPExvZ291dEljb24gLz5cclxuICAgICAgICAgICAgPHNwYW4+e3QoJ2xvZ291dCcsIHtuczogJ21lc3NhZ2VzJ30pfTwvc3Bhbj5cclxuICAgICAgICA8L2E+XHJcbiAgICApXHJcbn0iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBNZW51SWNvbiB9IGZyb20gJy4uL0ljb24vTWVudUljb24nO1xyXG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tICcuL0J1dHRvbic7XHJcbmltcG9ydCB7IHQgfSBmcm9tICdpMThuZXh0JztcclxuXHJcbmV4cG9ydCBjb25zdCBNZW51QnV0dG9uID0gKHthZGRpdGlvbmFsQ2xhc3MsIC4uLnByb3BzfSkgPT4ge1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPEJ1dHRvbiBcclxuICAgICAgICAgICAgY2xhc3NOYW1lPXsnaWNvbi1idXR0b24nICsgKGFkZGl0aW9uYWxDbGFzcyA/ICcgJyArIGFkZGl0aW9uYWxDbGFzczogJycpfSBcclxuICAgICAgICAgICAgYXJpYS1sYWJlbD17dCgnbWVudScsIHtuczogJ21lc3NhZ2VzJ30pfVxyXG4gICAgICAgICAgICB0aXRsZT17dCgnbWVudScsIHtuczogJ21lc3NhZ2VzJ30pfVxyXG4gICAgICAgICAgICB7Li4ucHJvcHN9XHJcbiAgICAgICAgPiBcclxuICAgICAgICAgICAgPE1lbnVJY29uIC8+XHJcbiAgICAgICAgPC9CdXR0b24+XHJcbiAgICApXHJcbn0iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBTZWFyY2hJY29uIH0gZnJvbSAnLi4vSWNvbi9TZWFyY2hJY29uJztcclxuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSAnLi9CdXR0b24nO1xyXG5pbXBvcnQgeyB0IH0gZnJvbSAnaTE4bmV4dCc7XHJcblxyXG5leHBvcnQgY29uc3QgU2VhcmNoQnV0dG9uID0gKHthZGRpdGlvbmFsQ2xhc3MsIC4uLnByb3BzfSkgPT4ge1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPEJ1dHRvbiBcclxuICAgICAgICAgICAgY2xhc3NOYW1lPXsnaWNvbi1idXR0b24nICsgKGFkZGl0aW9uYWxDbGFzcyA/ICcgJyArIGFkZGl0aW9uYWxDbGFzczogJycpfSBcclxuICAgICAgICAgICAgYXJpYS1sYWJlbD17dCgnc2VhcmNoJywge25zOiAnbWVzc2FnZXMnfSl9XHJcbiAgICAgICAgICAgIHRpdGxlPXt0KCdzZWFyY2gnLCB7bnM6ICdtZXNzYWdlcyd9KX1cclxuICAgICAgICAgICAgey4uLnByb3BzfVxyXG4gICAgICAgICAgICA+IFxyXG4gICAgICAgICAgICA8U2VhcmNoSWNvbiAvPlxyXG4gICAgICAgIDwvQnV0dG9uPlxyXG4gICAgKVxyXG59IiwiaW1wb3J0IHsgdCB9IGZyb20gJ2kxOG5leHQnO1xyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5cclxuZXhwb3J0IGNvbnN0IEZhY2Vib29rTGluayA9ICh7Y2xhc3NOYW1lLCAuLi5wcm9wc30pID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGEgXHJcbiAgICAgICAgICAgIGhyZWY9XCJodHRwczovL20uZmFjZWJvb2suY29tL3Blb3BsZS9Db2NrdGFpbGlzc2ltby8xMDAwOTQxNjA2NTg4MzIvXCIgXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lfSBcclxuICAgICAgICAgICAgdGl0bGU9e3QoJ2ZvbGxvd191c19vbl9mYWNlYm9vaycsIHtuczogJ21lc3NhZ2VzJ30pfVxyXG4gICAgICAgICAgICBhcmlhLWxhYmVsPXt0KCdmb2xsb3dfdXNfb25fZmFjZWJvb2snLCB7bnM6ICdtZXNzYWdlcyd9KX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICAgIDxzdmcgY2xhc3NOYW1lPVwiaWNvbiBpLXNvY2lhbCBpLWZhY2Vib29rXCIgey4uLnByb3BzfSB2ZXJzaW9uPVwiMS4xXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHg9XCIwcHhcIiB5PVwiMHB4XCIgdmlld0JveD1cIjAgMCAxNTUuMTM5IDE1NS4xMzlcIj5cclxuICAgICAgICAgICAgICAgIDxnPlxyXG4gICAgICAgICAgICAgICAgPHBhdGggZmlsbD1cImN1cnJlbnRDb2xvclwiIGlkPVwiZl8xX1wiIGQ9XCJNODkuNTg0LDE1NS4xMzlWODQuMzc4aDIzLjc0MmwzLjU2Mi0yNy41ODVIODkuNTg0VjM5LjE4NFxyXG4gICAgICAgICAgICAgICAgICAgIGMwLTcuOTg0LDIuMjA4LTEzLjQyNSwxMy42Ny0xMy40MjVsMTQuNTk1LTAuMDA2VjEuMDhDMTE1LjMyNSwwLjc1MiwxMDYuNjYxLDAsOTYuNTc3LDBDNzUuNTIsMCw2MS4xMDQsMTIuODUzLDYxLjEwNCwzNi40NTJcclxuICAgICAgICAgICAgICAgICAgICB2MjAuMzQxSDM3LjI5djI3LjU4NWgyMy44MTR2NzAuNzYxSDg5LjU4NHpcIj48L3BhdGg+XHJcbiAgICAgICAgICAgICAgICA8L2c+XHJcbiAgICAgICAgICAgICAgICA8Zz48L2c+XHJcbiAgICAgICAgICAgICAgICA8Zz48L2c+XHJcbiAgICAgICAgICAgICAgICA8Zz48L2c+XHJcbiAgICAgICAgICAgICAgICA8Zz48L2c+XHJcbiAgICAgICAgICAgICAgICA8Zz48L2c+XHJcbiAgICAgICAgICAgICAgICA8Zz48L2c+XHJcbiAgICAgICAgICAgICAgICA8Zz48L2c+XHJcbiAgICAgICAgICAgICAgICA8Zz48L2c+XHJcbiAgICAgICAgICAgICAgICA8Zz48L2c+XHJcbiAgICAgICAgICAgICAgICA8Zz48L2c+XHJcbiAgICAgICAgICAgICAgICA8Zz48L2c+XHJcbiAgICAgICAgICAgICAgICA8Zz48L2c+XHJcbiAgICAgICAgICAgICAgICA8Zz48L2c+XHJcbiAgICAgICAgICAgICAgICA8Zz48L2c+XHJcbiAgICAgICAgICAgICAgICA8Zz48L2c+XHJcbiAgICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgIDwvYT5cclxuICAgIClcclxufSIsImltcG9ydCB7IHQgfSBmcm9tICdpMThuZXh0JztcclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuXHJcbmV4cG9ydCBjb25zdCBJbnN0YWdyYW1MaW5rID0gKHtjbGFzc05hbWUsIC4uLnByb3BzfSkgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8YSBcclxuICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vd3d3Lmluc3RhZ3JhbS5jb20vY29ja3RhaWxsaXNzaW1vL1wiIFxyXG4gICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZX0gXHJcbiAgICAgICAgICAgIGFyaWEtbGFiZWw9e3QoJ2ZvbGxvd191c19vbl9pbnN0YWdyYW0nLCB7bnM6ICdtZXNzYWdlcyd9KX1cclxuICAgICAgICAgICAgdGl0bGU9e3QoJ2ZvbGxvd191c19vbl9pbnN0YWdyYW0nLCB7bnM6ICdtZXNzYWdlcyd9KX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICA8c3ZnIGNsYXNzTmFtZT1cImljb24gaS1zb2NpYWwgaS1pbnN0YWdyYW1cIiB7Li4ucHJvcHN9IHZlcnNpb249XCIxLjFcIiBpZD1cImluc3RhZ3JhbVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB4PVwiMHB4XCIgeT1cIjBweFwiIHZpZXdCb3g9XCIwIDAgNTEyIDUxMlwiPlxyXG4gICAgICAgICAgICAgICAgPGc+XHJcbiAgICAgICAgICAgICAgICA8Zz5cclxuICAgICAgICAgICAgICAgICAgICA8cGF0aCBmaWxsPVwiY3VycmVudENvbG9yXCIgZD1cIk0zNzEuNjQzLDBIMTQwLjM1N0M2Mi45NjQsMCwwLDYyLjk2NCwwLDE0MC4zNTh2MjMxLjI4NUMwLDQ0OS4wMzcsNjIuOTY0LDUxMiwxNDAuMzU3LDUxMmgyMzEuMjg2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEM0NDkuMDM3LDUxMiw1MTIsNDQ5LjAzNyw1MTIsMzcxLjY0M1YxNDAuMzU4QzUxMiw2Mi45NjQsNDQ5LjAzNywwLDM3MS42NDMsMHogTTQ4MS43NjQsMzcxLjY0M1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjMCw2MC43MjEtNDkuMzk5LDExMC4xMjEtMTEwLjEyMSwxMTAuMTIxSDE0MC4zNTdjLTYwLjcyMSwwLTExMC4xMjEtNDkuMzk5LTExMC4xMjEtMTEwLjEyMVYxNDAuMzU4XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGMwLTYwLjcyMiw0OS40LTExMC4xMjIsMTEwLjEyMS0xMTAuMTIyaDIzMS4yODZjNjAuNzIyLDAsMTEwLjEyMSw0OS40LDExMC4xMjEsMTEwLjEyMlYzNzEuNjQzelwiPjwvcGF0aD5cclxuICAgICAgICAgICAgICAgIDwvZz5cclxuICAgICAgICAgICAgICAgIDwvZz5cclxuICAgICAgICAgICAgICAgIDxnPlxyXG4gICAgICAgICAgICAgICAgPGc+XHJcbiAgICAgICAgICAgICAgICAgICAgPHBhdGggZmlsbD1cImN1cnJlbnRDb2xvclwiIGQ9XCJNMjU2LDExNS41N2MtNzcuNDM0LDAtMTQwLjQzMSw2Mi45OTctMTQwLjQzMSwxNDAuNDMxUzE3OC41NjUsMzk2LjQzMiwyNTYsMzk2LjQzMlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjNzcuNDM0LDAsMTQwLjQzMi02Mi45OTgsMTQwLjQzMi0xNDAuNDMyUzMzMy40MzQsMTE1LjU3LDI1NiwxMTUuNTd6IE0yNTYsMzY2LjE5N2MtNjAuNzYyLDAtMTEwLjE5Ni00OS40MzUtMTEwLjE5Ni0xMTAuMTk3XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGMwLTYwLjc2Miw0OS40MzQtMTEwLjE5NiwxMTAuMTk2LTExMC4xOTZjNjAuNzYzLDAsMTEwLjE5Nyw0OS40MzUsMTEwLjE5NywxMTAuMTk3QzM2Ni4xOTcsMzE2Ljc2MywzMTYuNzYzLDM2Ni4xOTcsMjU2LDM2Ni4xOTd6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiPjwvcGF0aD5cclxuICAgICAgICAgICAgICAgIDwvZz5cclxuICAgICAgICAgICAgICAgIDwvZz5cclxuICAgICAgICAgICAgICAgIDxnPlxyXG4gICAgICAgICAgICAgICAgPGc+XHJcbiAgICAgICAgICAgICAgICAgICAgPHBhdGggZmlsbD1cImN1cnJlbnRDb2xvclwiIGQ9XCJNNDA0LjgzMSw2NC41MDNjLTIzLjUyNiwwLTQyLjY2NiwxOS4xNDEtNDIuNjY2LDQyLjY2N2MwLDIzLjUyNiwxOS4xNCw0Mi42NjYsNDIuNjY2LDQyLjY2NlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjMjMuNTI2LDAsNDIuNjY2LTE5LjE0MSw0Mi42NjYtNDIuNjY3UzQyOC4zNTcsNjQuNTAzLDQwNC44MzEsNjQuNTAzeiBNNDA0LjgzMSwxMTkuNTk5Yy02Ljg1MywwLTEyLjQzLTUuNTc2LTEyLjQzLTEyLjQzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHM1LjU3Ny0xMi40MywxMi40My0xMi40M2M2Ljg1NCwwLDEyLjQzLDUuNTc3LDEyLjQzLDEyLjQzUzQxMS42ODUsMTE5LjU5OSw0MDQuODMxLDExOS41OTl6XCI+PC9wYXRoPlxyXG4gICAgICAgICAgICAgICAgPC9nPlxyXG4gICAgICAgICAgICAgICAgPC9nPlxyXG4gICAgICAgICAgICAgICAgPGc+PC9nPlxyXG4gICAgICAgICAgICAgICAgPGc+PC9nPlxyXG4gICAgICAgICAgICAgICAgPGc+PC9nPlxyXG4gICAgICAgICAgICAgICAgPGc+PC9nPlxyXG4gICAgICAgICAgICAgICAgPGc+PC9nPlxyXG4gICAgICAgICAgICAgICAgPGc+PC9nPlxyXG4gICAgICAgICAgICAgICAgPGc+PC9nPlxyXG4gICAgICAgICAgICAgICAgPGc+PC9nPlxyXG4gICAgICAgICAgICAgICAgPGc+PC9nPlxyXG4gICAgICAgICAgICAgICAgPGc+PC9nPlxyXG4gICAgICAgICAgICAgICAgPGc+PC9nPlxyXG4gICAgICAgICAgICAgICAgPGc+PC9nPlxyXG4gICAgICAgICAgICAgICAgPGc+PC9nPlxyXG4gICAgICAgICAgICAgICAgPGc+PC9nPlxyXG4gICAgICAgICAgICAgICAgPGc+PC9nPlxyXG4gICAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICA8L2E+XHJcbiAgICApXHJcbn0iLCJpbXBvcnQgUmVhY3QsIHsgZm9yd2FyZFJlZiwgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IENsb3NlQnV0dG9uIH0gZnJvbSAnLi4vQnV0dG9uL0Nsb3NlQnV0dG9uJztcclxuaW1wb3J0IHsgY3JlYXRlUG9ydGFsIH0gZnJvbSAncmVhY3QtZG9tJztcclxuXHJcbmV4cG9ydCBjb25zdCBNb2RhbCA9IGZvcndhcmRSZWYoKHtjaGlsZHJlbiwgYWRkaXRpb25hbENsYXNzLCBpc09wZW4sIGNsb3NlID0gbnVsbCwgYW5pbWF0ZWQgPSB0cnVlfSwgbW9kYWxSZWYpID0+IHtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGlmKGlzT3Blbikge1xyXG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdodG1sLCBib2R5JykuZm9yRWFjaChlbHQgPT4gZWx0LmNsYXNzTGlzdC5hZGQoJ25vLW92ZXJmbG93JykpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2h0bWwsIGJvZHknKS5mb3JFYWNoKGVsdCA9PiBlbHQuY2xhc3NMaXN0LnJlbW92ZSgnbm8tb3ZlcmZsb3cnKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSwgW2lzT3Blbl0pO1xyXG5cclxuICAgIGNvbnN0IGNvbnRhaW5lclJlZiA9IHVzZVJlZigpO1xyXG5cclxuICAgIGNvbnN0IGhhbmRsZUNsb3NlID0gKCkgPT4ge1xyXG4gICAgICAgIGlmKCFjbG9zZSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKCFhbmltYXRlZCkge1xyXG4gICAgICAgICAgICBjbG9zZSgpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnRhaW5lclJlZi5jdXJyZW50LmNsYXNzTGlzdC5hZGQoJ2Nsb3NlJyk7XHJcbiAgICAgICAgY29udGFpbmVyUmVmLmN1cnJlbnQuYWRkRXZlbnRMaXN0ZW5lcignYW5pbWF0aW9uZW5kJywgKCkgPT4ge1xyXG4gICAgICAgICAgICBjbG9zZSgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBoYW5kbGVTdG9wUHJvcGFnYXRpb24gPSBlID0+IHtcclxuICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgfTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICBpc09wZW4gJiYgY3JlYXRlUG9ydGFsKFxyXG4gICAgICAgICAgICAgICAgPGRpdiByZWY9e2NvbnRhaW5lclJlZn0gY2xhc3NOYW1lPXsnbW9kYWwtY29udGFpbmVyJyArIChhZGRpdGlvbmFsQ2xhc3MgPyAnICcrYWRkaXRpb25hbENsYXNzKyctY29udGFpbmVyJzogJycpfSBvbkNsaWNrPXtoYW5kbGVDbG9zZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiByZWY9e21vZGFsUmVmfSBjbGFzc05hbWU9eydtb2RhbCcgKyAoYWRkaXRpb25hbENsYXNzID8gJyAnK2FkZGl0aW9uYWxDbGFzczogJycpfSBvbkNsaWNrPXtoYW5kbGVTdG9wUHJvcGFnYXRpb259PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbG9zZSAhPT0gbnVsbCAmJiA8Q2xvc2VCdXR0b24gYWRkaXRpb25hbENsYXNzPVwibW9kYWwtY2xvc2VyXCIgb25DbGljaz17aGFuZGxlQ2xvc2V9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAge2NoaWxkcmVufVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+LFxyXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuYm9keVxyXG4gICAgICAgICAgICApXHJcbiAgICApXHJcbn0pO1xyXG5cclxuXHJcblxyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyB1c2VDb250cm9sbGVyIH0gZnJvbSAncmVhY3QtaG9vay1mb3JtJztcclxuXHJcblxyXG5leHBvcnQgY29uc3QgQ29udHJvbGxlZFJhZGlvRmllbGRzID0gKHtjb250cm9sLCBuYW1lLCBjaGlsZHJlbiwgY2hvaWNlcywgZXJyb3IsIGlzUmVxdWlyZWRGaWVsZCwgLi4ucHJvcHN9KSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXsnZm9ybS1ncm91cCcgKyAoZXJyb3IgPyAnIGlzLWludmFsaWQnOiAnJyl9PlxyXG4gICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiZm9ybS1sYWJlbFwiPntjaGlsZHJlbn08L2xhYmVsPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJhZGlvLWdyb3VwLXdyYXBwZXJcIj5cclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBPYmplY3QuZW50cmllcyhjaG9pY2VzKS5tYXAoKFtsYWJlbCwgdmFsdWVdKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxDb250cm9sbGVkUmFkaW9GaWVsZCBrZXk9e3ZhbHVlfSB2YWx1ZT17dmFsdWV9IGVycm9yPXtlcnJvcn0gY29udHJvbD17Y29udHJvbH0gbmFtZT17bmFtZX0gey4uLnByb3BzfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtsYWJlbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Db250cm9sbGVkUmFkaW9GaWVsZD5cclxuICAgICAgICAgICAgICAgICAgICApKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGlzUmVxdWlyZWRGaWVsZCAmJiA8ZGl2IGNsYXNzTmFtZT1cInJhZGlvLWdyb3VwIHJhZGlvLWdyb3VwLWFzdGVyaXhcIj4qPC9kaXY+XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICB7ZXJyb3IgJiYgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWVycm9yXCI+e2Vycm9yfTwvZGl2Pn1cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IENvbnRyb2xsZWRSYWRpb0ZpZWxkID0gKHtjaGlsZHJlbiwgY29udHJvbCwgbmFtZSwgdmFsdWUsIGRlZmF1bHRWYWx1ZSA9IG51bGwsIGVycm9yLCBhZGRpdGlvbmFsQ2xhc3MgPSAnJ30pID0+IHtcclxuICAgIGNvbnN0IHtmaWVsZDogey4uLnByb3BzfX0gPSB1c2VDb250cm9sbGVyKHtjb250cm9sLCBuYW1lfSk7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17J3JhZGlvLWdyb3VwJyArIChlcnJvciA/ICcgaXMtaW52YWxpZCc6ICcnKX0+XHJcbiAgICAgICAgICAgIDxpbnB1dCBcclxuICAgICAgICAgICAgICAgIHsuLi5wcm9wc31cclxuICAgICAgICAgICAgICAgIHZhbHVlPXt2YWx1ZX0gXHJcbiAgICAgICAgICAgICAgICB0eXBlPVwicmFkaW9cIiBcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17J2Zvcm0tcmFkaW8nICsgKGFkZGl0aW9uYWxDbGFzcyA/ICcgJythZGRpdGlvbmFsQ2xhc3M6ICcnKX0gXHJcbiAgICAgICAgICAgICAgICBpZD17dmFsdWV9IFxyXG4gICAgICAgICAgICAgICAgY2hlY2tlZD17cHJvcHMudmFsdWUgPT0gdmFsdWV9IC8qIMOpZ2FsaXTDqSBub24gc3RyaWN0ZSBjYXIgb24gcGV1dCBhdm9pciB1bmUgdmFsdWUgaW50ZWdlciBldCB1bmUgcHJvcHMudmFsdWUgc3RyaW5nICovXHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiZm9ybS1sYWJlbFwiIGh0bWxGb3I9e3ZhbHVlfT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY3VzdG9tLXJhZGlvXCIgcm9sZT1cInJhZGlvXCIgYXJpYS1sYWJlbGxlZGJ5PVwicmFkaW8tbGFiZWxcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImN1c3RvbS1yYWRpby1jb3JlXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInJhZGlvLWxhYmVsXCI+e2NoaWxkcmVufTwvc3Bhbj5cclxuICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5cclxuZXhwb3J0IGNvbnN0IEFjY291bnRJY29uID0gKHthZGRpdGlvbmFsQ2xhc3MsIC4uLnByb3BzfSkgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8c3ZnIGNsYXNzTmFtZT17J2ljb24gaS1hY2NvdW50JyArIChhZGRpdGlvbmFsQ2xhc3MgPyAnICcgKyBhZGRpdGlvbmFsQ2xhc3M6ICcnKX0gey4uLnByb3BzfSB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCAxMDAgMTAwXCI+XHJcbiAgICAgICAgICAgIDxwYXRoIGZpbGw9XCJjdXJyZW50Q29sb3JcIiBkPVwibTUwIDQ4LjY3YzEyLjIzIDAgMjIuMTgtOS45NSAyMi4xOC0yMi4xOHMtOS45NS0yMi4xOC0yMi4xOC0yMi4xOC0yMi4xOCA5Ljk1LTIyLjE4IDIyLjE4IDkuOTUgMjIuMTggMjIuMTggMjIuMTh6bTAtNDEuMzZjMTAuNTggMCAxOS4xOCA4LjYgMTkuMTggMTkuMThzLTguNiAxOS4xOC0xOS4xOCAxOS4xOC0xOS4xOC04LjYtMTkuMTgtMTkuMTggOC42LTE5LjE4IDE5LjE4LTE5LjE4elwiPjwvcGF0aD5cclxuICAgICAgICAgICAgPHBhdGggZmlsbD1cImN1cnJlbnRDb2xvclwiIGQ9XCJtMTguOTEgOTQuODloNjIuMTljMS45MSAwIDMuNzItLjgzIDQuOTctMi4yOSAxLjIyLTEuNDMgMS43Ni0zLjMxIDEuNDctNS4xNS0yLjkyLTE4LjU3LTE4LjctMzIuMDUtMzcuNTMtMzIuMDVzLTM0LjYxIDEzLjQ4LTM3LjUzIDMyLjA1Yy0uMjkgMS44NC4yNCAzLjcyIDEuNDcgNS4xNSAxLjI0IDEuNDYgMy4wNSAyLjI5IDQuOTcgMi4yOXptLTMuNDctNi45N2MyLjY5LTE3LjEgMTcuMjItMjkuNTIgMzQuNTctMjkuNTJzMzEuODggMTIuNDEgMzQuNTcgMjkuNTJjLjE2Ljk5LS4xMiAxLjk2LS43OCAyLjczLS42Ny43OS0xLjY1IDEuMjQtMi42OSAxLjI0aC02Mi4yYy0xLjAzIDAtMi4wMS0uNDUtMi42OS0xLjI0LS42Ni0uNzctLjk0LTEuNzQtLjc4LTIuNzN6XCI+PC9wYXRoPlxyXG4gICAgICAgIDwvc3ZnPlxyXG4gICAgKVxyXG59XHJcblxyXG5cclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuXHJcbmV4cG9ydCBjb25zdCBSaWdodEFycm93QmFySWNvbiA9ICh7YWRkaXRpb25hbENsYXNzLCAuLi5wcm9wc30pID0+IHtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxzdmcgY2xhc3NOYW1lPXsnaWNvbiBpLXJpZ2h0LWFycm93LWJhcicgKyAoYWRkaXRpb25hbENsYXNzID8gJyAnK2FkZGl0aW9uYWxDbGFzczogJycpfSB7Li4ucHJvcHN9IHZpZXdCb3g9XCIwIDAgMzIgMzJcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+XHJcbiAgICAgICAgICAgIDxnIGNsaXBSdWxlPVwiZXZlbm9kZFwiIGZpbGxSdWxlPVwiZXZlbm9kZFwiPlxyXG4gICAgICAgICAgICAgICAgPHBhdGggZmlsbD1cImN1cnJlbnRDb2xvclwiIGQ9XCJtNCAxNmMwLS41NTIzLjQ0NzcyLTEgMS0xaDIyYy41NTIzIDAgMSAuNDQ3NyAxIDFzLS40NDc3IDEtMSAxaC0yMmMtLjU1MjI4IDAtMS0uNDQ3Ny0xLTF6XCI+PC9wYXRoPlxyXG4gICAgICAgICAgICAgICAgPHBhdGggZmlsbD1cImN1cnJlbnRDb2xvclwiIGQ9XCJtMTcuMjkyOSA2LjI5Mjg5Yy4zOTA1LS4zOTA1MiAxLjAyMzctLjM5MDUyIDEuNDE0MiAwbDkgOS4wMDAwMWMuMzkwNS4zOTA1LjM5MDUgMS4wMjM3IDAgMS40MTQybC05IDljLS4zOTA1LjM5MDUtMS4wMjM3LjM5MDUtMS40MTQyIDBzLS4zOTA1LTEuMDIzNyAwLTEuNDE0Mmw4LjI5MjktOC4yOTI5LTguMjkyOS04LjI5Mjg5Yy0uMzkwNS0uMzkwNTMtLjM5MDUtMS4wMjM2OSAwLTEuNDE0MjJ6XCI+PC9wYXRoPlxyXG4gICAgICAgICAgICA8L2c+XHJcbiAgICAgICAgPC9zdmc+XHJcbiAgICApXHJcbn1cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5cclxuZXhwb3J0IGNvbnN0IENhcnRJY29uID0gKHthZGRpdGlvbmFsQ2xhc3MsIC4uLnByb3BzfSkgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8c3ZnIGNsYXNzTmFtZT17J2ljb24gaS1jYXJ0JyArIChhZGRpdGlvbmFsQ2xhc3MgPyAnICcgKyBhZGRpdGlvbmFsQ2xhc3M6ICcnKX0gey4uLnByb3BzfSB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCA2NCA2NFwiPlxyXG4gICAgICAgICAgICA8cGF0aCBmaWxsPVwiY3VycmVudENvbG9yXCIgZD1cIm00Ni43NyAyMi4yOWExIDEgMCAwIDAgLTEtLjg3aC01LjUxdi0yYTguMjYgOC4yNiAwIDAgMCAtMTYuNTIgMHYyaC01LjUyYTEgMSAwIDAgMCAtMSAuODdsLTMuNzEgMjguMTRhMSAxIDAgMCAwIC4yNi44MWMuNDIuNDUuODguOTEgMS4zOCAxLjM2YTEgMSAwIDAgMCAuNjcuMjZoMzIuMzZhMSAxIDAgMCAwIC42Ny0uMjZjLjQ5LS40NSAxLS45MSAxLjM4LTEuMzZhMSAxIDAgMCAwIC4yNi0uODF6bS0yMS0yLjg5YTYuMjYgNi4yNiAwIDAgMSAxMi41MiAwdjJoLTEyLjU1em0yMiAzMS40NmgtMzEuNTZsLS42Ni0uNjQgMy41NC0yNi44aDI1LjgxbDMuNTQgMjYuOHpcIj48L3BhdGg+XHJcbiAgICAgICAgPC9zdmc+XHJcbiAgICApXHJcbn1cclxuXHJcblxyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5cclxuZXhwb3J0IGNvbnN0IENoYXRJY29uID0gKHthZGRpdGlvbmFsQ2xhc3MsIC4uLnByb3BzfSkgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8c3ZnIGNsYXNzTmFtZT17J2ljb24gaS1jaGF0JyArIChhZGRpdGlvbmFsQ2xhc3MgPyAnICcgKyBhZGRpdGlvbmFsQ2xhc3M6ICcnKX0gey4uLnByb3BzfSB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgLTk2MCA5NjAgOTYwXCI+XHJcbiAgICAgICAgICAgIDxwYXRoIGZpbGw9XCJjdXJyZW50Q29sb3JcIiBkPVwiTTMxMy42OTItNTMwLjY5MnExMi4zODUgMCAyMS41NzctOS4xOTMgOS4xOTMtOS4xOTIgOS4xOTMtMjEuNTc3IDAtMTIuMzg0LTkuMTkzLTIxLjU3Ny05LjE5Mi05LjE5Mi0yMS41NzctOS4xOTItMTMuMTU0IDAtMjEuOTYxIDkuMTkyLTguODA4IDkuMTkzLTguODA4IDIxLjU3NyAwIDEyLjM4NSA4LjgwOCAyMS41NzcgOC44MDcgOS4xOTMgMjEuOTYxIDkuMTkzWm0xNjcuNzcgMHExMi4zODQgMCAyMS41NzctOS4xOTMgOS4xOTItOS4xOTIgOS4xOTItMjEuNTc3IDAtMTIuMzg0LTkuMTkyLTIxLjU3Ny05LjE5My05LjE5Mi0yMS41NzctOS4xOTItMTIuMzg1IDAtMjEuNTc3IDkuMTkyLTkuMTkzIDkuMTkzLTkuMTkzIDIxLjU3NyAwIDEyLjM4NSA5LjE5MyAyMS41NzcgOS4xOTIgOS4xOTMgMjEuNTc3IDkuMTkzWm0xNjQuNjE1IDBxMTIuMzg1IDAgMjEuNTc3LTkuMTkzIDkuMTkyLTkuMTkyIDkuMTkyLTIxLjU3NyAwLTEyLjM4NC05LjE5Mi0yMS41NzctOS4xOTItOS4xOTItMjEuNTc3LTkuMTkyLTEyLjM4NSAwLTIxLjU3NyA5LjE5Mi05LjE5MiA5LjE5My05LjE5MiAyMS41NzcgMCAxMi4zODUgOS4xOTIgMjEuNTc3IDkuMTkyIDkuMTkzIDIxLjU3NyA5LjE5M1pNMTIwLTE1Ni45MjN2LTYyNy42OTNxMC0yMy4wNTcgMTYuMTYzLTM5LjIyMVExNTIuMzI3LTg0MCAxNzUuMzg0LTg0MGg2MDkuMjMycTIzLjA1NyAwIDM5LjIyMSAxNi4xNjNRODQwLTgwNy42NzMgODQwLTc4NC42MTZ2NDQ5LjIzMnEwIDIzLjA1Ny0xNi4xNjMgMzkuMjIxUTgwNy42NzMtMjgwIDc4NC42MTYtMjgwSDI0My4wNzdMMTIwLTE1Ni45MjNabTEwOS4zODUtMTUzLjg0Nmg1NTUuMjMxcTkuMjMgMCAxNi45MjMtNy42OTIgNy42OTItNy42OTMgNy42OTItMTYuOTIzdi00NDkuMjMycTAtOS4yMy03LjY5Mi0xNi45MjMtNy42OTMtNy42OTItMTYuOTIzLTcuNjkySDE3NS4zODRxLTkuMjMgMC0xNi45MjMgNy42OTItNy42OTIgNy42OTMtNy42OTIgMTYuOTIzdjU1NS4zODVsNzguNjE2LTgxLjUzOFptLTc4LjYxNiAwdi00OTguNDYyVi0zMTAuNzY5WlwiLz5cclxuICAgICAgICA8L3N2Zz5cclxuICAgIClcclxufVxyXG5cclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuXHJcbmV4cG9ydCBjb25zdCBDaGV2cm9uTGVmdEljb24gPSAoe2FkZGl0aW9uYWxDbGFzcywgLi4ucHJvcHN9KSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxzdmcgY2xhc3NOYW1lPXsnaWNvbiBpLWNoZXZyb24tbGVmdCcgKyAoYWRkaXRpb25hbENsYXNzID8gJyAnICsgYWRkaXRpb25hbENsYXNzOiAnJyl9IHsuLi5wcm9wc30gIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2ZXJzaW9uPVwiMS4xXCIgeD1cIjBcIiB5PVwiMFwiIHZpZXdCb3g9XCIwIDAgNTExLjk0OSA1MTEuOTQ5XCI+XHJcbiAgICAgICAgICAgIDxnIHRyYW5zZm9ybT1cIm1hdHJpeCgtMSwxLjIyNDY0Njc5OTE0NzM1MzJlLTE2LC0xLjIyNDY0Njc5OTE0NzM1MzJlLTE2LC0xLDUxMS45NDkxMTE5Mzg0NzY3LDUxMS45NTAyMzYzMjA0OTU1NSlcIj5cclxuICAgICAgICAgICAgICAgIDxwYXRoIGZpbGw9XCJjdXJyZW50Q29sb3JcIiBkPVwiTTM4Ni4yMzUgMjQ4LjMwOCAxNDAuOTAyIDIuOTc1Yy00LjI2Ny00LjA1My0xMC45ODctMy45NDctMTUuMDQuMjEzYTEwLjc2MyAxMC43NjMgMCAwIDAgMCAxNC44MjdsMjM3Ljc2IDIzNy43Ni0yMzcuNzYgMjM3Ljg2N2MtNC4yNjcgNC4wNTMtNC4zNzMgMTAuODgtLjIxMyAxNS4wNCA0LjA1MyA0LjI2NyAxMC44OCA0LjM3MyAxNS4wNC4yMTNsLjIxMy0uMjEzIDI0NS4zMzMtMjQ1LjMzM2ExMC42MjQgMTAuNjI0IDAgMCAwIDAtMTUuMDQxelwiPlxyXG4gICAgICAgICAgICAgICAgPC9wYXRoPlxyXG4gICAgICAgICAgICA8L2c+XHJcbiAgICAgICAgPC9zdmc+XHJcbiAgICApXHJcbn0iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5cclxuZXhwb3J0IGNvbnN0IENoZXZyb25SaWdodEljb24gPSAoe2FkZGl0aW9uYWxDbGFzcywgLi4ucHJvcHN9KSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxzdmcgY2xhc3NOYW1lPXsnaWNvbiBpLWNoZXZyb24tcmlnaHQnICsgKGFkZGl0aW9uYWxDbGFzcyA/ICcgJyArIGFkZGl0aW9uYWxDbGFzczogJycpfSB7Li4ucHJvcHN9IHZlcnNpb249XCIxLjFcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgeD1cIjBweFwiIHk9XCIwcHhcIiB2aWV3Qm94PVwiMCAwIDUxMS45NDkgNTExLjk0OVwiPlxyXG4gICAgICAgICAgICA8cGF0aCBmaWxsPVwiY3VycmVudENvbG9yXCIgZD1cIk0zODYuMjM1LDI0OC4zMDhMMTQwLjkwMiwyLjk3NWMtNC4yNjctNC4wNTMtMTAuOTg3LTMuOTQ3LTE1LjA0LDAuMjEzYy0zLjk0Nyw0LjE2LTMuOTQ3LDEwLjY2NywwLDE0LjgyN2wyMzcuNzYsMjM3Ljc2XHJcbiAgICAgICAgICAgICAgICBsLTIzNy43NiwyMzcuODY3Yy00LjI2Nyw0LjA1My00LjM3MywxMC44OC0wLjIxMywxNS4wNGM0LjA1Myw0LjI2NywxMC44OCw0LjM3MywxNS4wNCwwLjIxM2MwLjEwNy0wLjEwNywwLjIxMy0wLjIxMywwLjIxMy0wLjIxM1xyXG4gICAgICAgICAgICAgICAgbDI0NS4zMzMtMjQ1LjMzM0MzOTAuMzk1LDI1OS4xODgsMzkwLjM5NSwyNTIuNDY4LDM4Ni4yMzUsMjQ4LjMwOHpcIi8+XHJcbiAgICAgICAgPC9zdmc+XHJcbiAgICApXHJcbn0iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5cclxuZXhwb3J0IGNvbnN0IERhc2hib2FyZEljb24gPSAoe2FkZGl0aW9uYWxDbGFzcywgLi4ucHJvcHN9KSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxzdmcgY2xhc3NOYW1lPXsnaWNvbiBpLWRhc2hib2FyZCcgKyAoYWRkaXRpb25hbENsYXNzID8gJyAnKyBhZGRpdGlvbmFsQ2xhc3M6ICcnKX0gey4uLnByb3BzfSB2aWV3Qm94PVwiMCAtOTEgNTEyIDUxMlwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj5cclxuICAgICAgICAgICAgPHBhdGggZmlsbD1cImN1cnJlbnRDb2xvclwiIGQ9XCJtNTEyIDI4OGgtMTA2LjY2Nzk2OXYtMjEuMzMyMDMxaDg1LjMzNTkzOHYtMTAuNjY3OTY5YzAtMTI5LjMzMjAzMS0xMDUuMzM1OTM4LTIzNC42Njc5NjktMjM0LjY2Nzk2OS0yMzQuNjY3OTY5cy0yMzQuNjY3OTY5IDEwNS4zMzU5MzgtMjM0LjY2Nzk2OSAyMzQuNjY3OTY5djEwLjY2Nzk2OWg4NS4zMzU5Mzh2MjEuMzMyMDMxaC0xMDYuNjY3OTY5di0zMmMwLTE0MS4xOTkyMTkgMTE0LjgwMDc4MS0yNTYgMjU2LTI1NnMyNTYgMTE0LjgwMDc4MSAyNTYgMjU2em0wIDBcIj48L3BhdGg+XHJcbiAgICAgICAgICAgIDxwYXRoIGZpbGw9XCJjdXJyZW50Q29sb3JcIiBkPVwibTI0NS4zMzIwMzEgMTAuNjY3OTY5aDIxLjMzNTkzOHY2NGgtMjEuMzM1OTM4em0wIDBcIj48L3BhdGg+XHJcbiAgICAgICAgICAgIDxwYXRoIGZpbGw9XCJjdXJyZW50Q29sb3JcIiBkPVwibTc5LjcyNjU2MiA4NS45NDkyMTkgNTEuNjY0MDYzIDUxLjY2NDA2Mi0xNS4wODIwMzEgMTUuMDg1OTM4LTUxLjY2Nzk2OS01MS42NjQwNjN6bTAgMFwiPjwvcGF0aD5cclxuICAgICAgICAgICAgPHBhdGggZmlsbD1cImN1cnJlbnRDb2xvclwiIGQ9XCJtNDMyLjI5Mjk2OSA4NS45NjQ4NDQgMTUuMDg1OTM3IDE1LjA4NTkzNy01MS42Njc5NjggNTEuNjY0MDYzLTE1LjA4MjAzMi0xNS4wODU5Mzh6bTAgMFwiPjwvcGF0aD5cclxuICAgICAgICAgICAgPHBhdGggZmlsbD1cImN1cnJlbnRDb2xvclwiIGQ9XCJtMjU5LjA2NjQwNiAzMzAuNjY3OTY5Yy0zMS4wNjY0MDYgMC01Ni4zOTg0MzctMjUuMzM1OTM4LTU2LjM5ODQzNy01Ni40MDIzNDQgMC0yMS41OTc2NTYgMTIuNjY0MDYyLTQxLjU5NzY1NiAzMi4xMzI4MTItNTAuOTMzNTk0bDE0NC02OC42NjQwNjItNjguNjY3OTY5IDE0NGMtOS4zMzIwMzEgMTkuMzMyMDMxLTI5LjMzMjAzMSAzMi01MS4wNjY0MDYgMzJ6bTc0LjUzNTE1Ni0xMzAuOTMzNTk0LTg5LjYwMTU2MiA0Mi44MDA3ODFjLTEyLjEzMjgxMiA1LjczMDQ2OS0yMCAxOC4yNjU2MjUtMjAgMzEuNzMwNDY5IDAgMTkuMzM1OTM3IDE1LjczNDM3NSAzNS4wNjY0MDYgMzUuMDY2NDA2IDM1LjA2NjQwNiAxMy40Njg3NSAwIDI1Ljg2NzE4OC03Ljg2NzE4NyAzMS43MzQzNzUtMjB6bTAgMFwiPjwvcGF0aD5cclxuICAgICAgICA8L3N2Zz5cclxuICAgIClcclxufSIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcblxyXG5leHBvcnQgY29uc3QgTG9nb3V0SWNvbiA9ICh7YWRkaXRpb25hbENsYXNzLCAuLi5wcm9wc30pID0+IHtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxzdmcgY2xhc3NOYW1lPXsnaWNvbiBpLWxvZ291dCcgKyAoYWRkaXRpb25hbENsYXNzID8gJyAnICsgYWRkaXRpb25hbENsYXNzOiAnJyl9IHsuLi5wcm9wc30gdmlld0JveD1cIjAgMCA1MTIgNTEyXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPlxyXG4gICAgICAgICAgICA8cGF0aCBmaWxsPVwiY3VycmVudENvbG9yXCIgZD1cIm0yMTIgNDk2YzAgOC44MzctNy4xNjMgMTYtMTYgMTZoLTExNC41NDVjLTMxLjM4IDAtNTYuOTEtMjUuNTI5LTU2LjkxLTU2LjkwOXYtMzk4LjE4MWMwLTMxLjM4IDI1LjUzLTU2LjkxIDU2LjkxLTU2LjkxaDExNC41NDVjOC44MzcgMCAxNiA3LjE2MyAxNiAxNnMtNy4xNjMgMTYtMTYgMTZoLTExNC41NDVjLTEzLjczNSAwLTI0LjkxIDExLjE3NS0yNC45MSAyNC45MXYzOTguMTgxYzAgMTMuNzM1IDExLjE3NSAyNC45MDkgMjQuOTEgMjQuOTA5aDExNC41NDVjOC44MzcgMCAxNiA3LjE2MyAxNiAxNnptMjcwLjI1OC0yNTEuODAyLTEwNC44MzItOTUuOTU2Yy02LjUxNy01Ljk2NS0xNi42MzktNS41MjEtMjIuNjA0Ljk5OS01Ljk2NyA2LjUxOC01LjUyIDE2LjYzOS45OTkgMjIuNjA0bDc0LjQ1OCA2OC4xNTVoLTI3Ny45MTRjLTguODM3IDAtMTYgNy4xNjMtMTYgMTZzNy4xNjMgMTYgMTYgMTZoMjc3LjkxNGwtNzQuNDU5IDY4LjE1NWMtNi41MTkgNS45NjYtNi45NjYgMTYuMDg3LS45OTkgMjIuNjA0IDMuMTU1IDMuNDQ4IDcuNDc0IDUuMTk3IDExLjgwNiA1LjE5NyAzLjg1OCAwIDcuNzI5LTEuMzg4IDEwLjc5OS00LjE5OGwxMDQuODMyLTk1Ljk1N2MzLjMxMi0zLjAzIDUuMTk3LTcuMzEzIDUuMTk3LTExLjgwMnMtMS44ODYtOC43Ny01LjE5Ny0xMS44MDF6XCI+PC9wYXRoPlxyXG4gICAgICAgIDwvc3ZnPlxyXG4gICAgKVxyXG59O1xyXG5cclxuXHJcblxyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5cclxuZXhwb3J0IGNvbnN0IE1lbnVJY29uID0gKHthZGRpdGlvbmFsQ2xhc3MsIC4uLnByb3BzfSkgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8c3ZnICBjbGFzc05hbWU9eydpY29uIGktbWVudScgKyAoYWRkaXRpb25hbENsYXNzID8gJyAnICsgYWRkaXRpb25hbENsYXNzOiAnJyl9IHsuLi5wcm9wc30gZW5hYmxlQmFja2dyb3VuZD1cIm5ldyAwIDAgMzIgMzJcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCAzMiAzMlwiPlxyXG4gICAgICAgICAgPGc+XHJcbiAgICAgICAgICAgIDxwYXRoIGZpbGw9XCJjdXJyZW50Q29sb3JcIiBkPVwibTI1LjMgOWgtMTguNmMtLjQgMC0uNy0uMy0uNy0uOHMuMy0uOC44LS44aDE4LjVjLjQgMCAuOC4zLjguOHMtLjQuOC0uOC44elwiPjwvcGF0aD5cclxuICAgICAgICAgIDwvZz5cclxuICAgICAgICAgIDxnPlxyXG4gICAgICAgICAgICA8cGF0aCBmaWxsPVwiY3VycmVudENvbG9yXCIgZD1cIm0yNS4zIDE2aC0xOC42Yy0uNCAwLS43LS4zLS43LS44cy4zLS44LjgtLjhoMTguNWMuNCAwIC44LjMuOC44cy0uNC44LS44Ljh6XCI+PC9wYXRoPlxyXG4gICAgICAgICAgPC9nPlxyXG4gICAgICAgICAgPGc+XHJcbiAgICAgICAgICAgIDxwYXRoIGZpbGw9XCJjdXJyZW50Q29sb3JcIiBkPVwibTI1LjMgMjNoLTE4LjZjLS40IDAtLjctLjMtLjctLjhzLjMtLjguOC0uOGgxOC41Yy40IDAgLjguMy44LjhzLS40LjgtLjguOHpcIj48L3BhdGg+XHJcbiAgICAgICAgICA8L2c+XHJcbiAgICAgICAgPC9zdmc+XHJcbiAgICApXHJcbn0iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5cclxuZXhwb3J0IGNvbnN0IE1pbnVzSWNvbiA9ICh7YWRkaXRpb25hbENsYXNzLCAuLi5wcm9wc30pID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICBcclxuICAgICAgPHN2ZyBjbGFzc05hbWU9eydpY29uIGktbWludXMnICsgKGFkZGl0aW9uYWxDbGFzcyA/ICcgJyArIGFkZGl0aW9uYWxDbGFzczogJycpfSB7Li4ucHJvcHN9IHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB4PVwiMHB4XCIgeT1cIjBweFwiIHZpZXdCb3g9XCIwIDAgNDY5LjMzMyA0NjkuMzMzXCIgZW5hYmxlQmFja2dyb3VuZD1cIm5ldyAwIDAgNDY5LjMzMyA0NjkuMzMzXCI+XHJcbiAgICAgICAgPGc+XHJcbiAgICAgICAgICA8Zz5cclxuICAgICAgICAgICAgPHBhdGggZmlsbD1cImN1cnJlbnRDb2xvclwiIGQ9XCJNNDU4LjY2NywyMjRoLTQ0OEM0Ljc3OSwyMjQsMCwyMjguNzc5LDAsMjM0LjY2N3M0Ljc3OSwxMC42NjcsMTAuNjY3LDEwLjY2N2g0NDhjNS44ODgsMCwxMC42NjctNC43NzksMTAuNjY3LTEwLjY2N1xyXG4gICAgICAgICAgICAgIFM0NjQuNTU1LDIyNCw0NTguNjY3LDIyNHpcIj48L3BhdGg+XHJcbiAgICAgICAgICA8L2c+XHJcbiAgICAgICAgPC9nPlxyXG4gICAgICA8L3N2Zz5cclxuICAgIClcclxufSIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcblxyXG5leHBvcnQgY29uc3QgUGx1c0ljb24gPSAoe2FkZGl0aW9uYWxDbGFzcywgLi4ucHJvcHN9KSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxzdmcgY2xhc3NOYW1lPXsnaWNvbiBpLXBsdXMnICsgKGFkZGl0aW9uYWxDbGFzcyA/ICcgJyArIGFkZGl0aW9uYWxDbGFzczogJycpfSB7Li4ucHJvcHN9IHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCI+XHJcbiAgICAgICAgICAgIDxnIGlkPVwiZXNzZW50aWFscy9iYXNpY3MvYWRkXCIgZmlsbD1cIm5vbmVcIiBmaWxsUnVsZT1cImV2ZW5vZGRcIj5cclxuICAgICAgICAgICAgPHBhdGggZmlsbD1cImN1cnJlbnRDb2xvclwiIGlkPVwiRmlsbC03MFwiIGQ9XCJtMTEuNDkzNTg5OCAyMWMtLjI3NiAwLS41LS4yMjQtLjUtLjV2LTguNWgtOC40OTk5OTk5OGMtLjI3NiAwLS41LS4yMjQtLjUtLjVzLjIyNC0uNS41LS41aDguNDk5OTk5OTh2LTguNWMwLS4yNzYuMjI0LS41LjUtLjVzLjUuMjI0LjUuNXY4LjVoOC41Yy4yNzYgMCAuNS4yMjQuNS41cy0uMjI0LjUtLjUuNWgtOC41djguNWMwIC4yNzYtLjIyNC41LS41LjVcIj48L3BhdGg+XHJcbiAgICAgICAgICAgIDwvZz5cclxuICAgICAgICA8L3N2Zz5cclxuICAgIClcclxufSIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcblxyXG5leHBvcnQgY29uc3QgU2VhcmNoSWNvbiA9ICh7YWRkaXRpb25hbENsYXNzLCAuLi5wcm9wc30pID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPHN2ZyBjbGFzc05hbWU9eydpY29uIGktc2VhcmNoJyArIChhZGRpdGlvbmFsQ2xhc3MgPyAnICcgKyBhZGRpdGlvbmFsQ2xhc3M6ICcnKX0gey4uLnByb3BzfSBlbmFibGVCYWNrZ3JvdW5kPVwibmV3IDAgMCA0OCA0OFwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDQ4IDQ4XCI+XHJcbiAgICAgICAgICAgIDxnIGlkPVwiX3gzMl8tTWFnbmlmeWluZ19HbGFzc1wiPlxyXG4gICAgICAgICAgICAgICAgPHBhdGggZmlsbD1cImN1cnJlbnRDb2xvclwiIGQ9XCJtNDAuODk5NDE0MSAzOS40ODUzNTE2LTcuODEyNzQ0MS03LjgxMjc0NDFjMi4zOTc4ODgyLTIuNzM0Mzc1IDMuNzIwOTQ3My02LjE5NDI3NDkgMy43MjA5NDczLTkuODY0OTkwMiAwLTQuMDA2ODM1OS0xLjU2MDU0NjktNy43NzM0Mzc1LTQuMzkzNTU0Ny0xMC42MDY0NDUzcy02LjU5OTYwOTQtNC4zOTM1NTQ3LTEwLjYwNjQ0NTMtNC4zOTM1NTQ3LTcuNzczNDM3NSAxLjU2MDU0NjktMTAuNjA2NDQ1MyA0LjM5MzU1NDctNC4zOTM1NTQ3IDYuNTk5NjA5NC00LjM5MzU1NDcgMTAuNjA2NDQ1MyAxLjU2MDU0NjkgNy43NzM0Mzc1IDQuMzkzNTU0NyAxMC42MDY0NDUzIDYuNTk5NjA5NCA0LjM5MzU1NDcgMTAuNjA2NDQ1MyA0LjM5MzU1NDdjMy42NzA3MTUzIDAgNy4xMzA2MTUyLTEuMzIzMDU5MSA5Ljg2NDk5MDItMy43MjA5NDczbDcuODEyNzQ0MSA3LjgxMjc0NDFjLjE5NTMxMjUuMTk1MzEyNS40NTExNzE5LjI5Mjk2ODguNzA3MDMxMy4yOTI5Njg4cy41MTE3MTg4LS4wOTc2NTYzLjcwNzAzMTMtLjI5Mjk2ODhjLjM5MDYyNDktLjM5MDYyNS4zOTA2MjQ5LTEuMDIzNDM3NS0uMDAwMDAwMS0xLjQxNDA2MjV6bS0yOC4yODQxNzk3LTguNDg1MzUxNmMtMi40NTUwNzgxLTIuNDU1NTY2NC0zLjgwNzYxNzItNS43MjAyMTQ4LTMuODA3NjE3Mi05LjE5MjM4MjhzMS4zNTI1MzkxLTYuNzM2ODE2NCAzLjgwNzYxNzItOS4xOTIzODI4YzIuNDU1NTY2NC0yLjQ1NTA3ODEgNS43MjAyMTQ4LTMuODA3NjE3MiA5LjE5MjM4MjgtMy44MDc2MTcyczYuNzM2ODE2NCAxLjM1MjUzOTEgOS4xOTIzODI4IDMuODA3NjE3MmMyLjQ1NTA3ODEgMi40NTU1NjY0IDMuODA3NjE3MiA1LjcyMDIxNDggMy44MDc2MTcyIDkuMTkyMzgyOHMtMS4zNTI1MzkxIDYuNzM2ODE2NC0zLjgwNzYxNzIgOS4xOTIzODI4Yy0yLjQ1NTU2NjQgMi40NTUwNzgxLTUuNzIwMjE0OCAzLjgwNzYxNzItOS4xOTIzODI4IDMuODA3NjE3MnMtNi43MzY4MTY0LTEuMzUyNTM5MS05LjE5MjM4MjgtMy44MDc2MTcyelwiPjwvcGF0aD5cclxuICAgICAgICAgICAgPC9nPlxyXG4gICAgICAgIDwvc3ZnPlxyXG4gICAgKVxyXG59XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHVzZVRyYW5zbGF0aW9uIH0gZnJvbSAncmVhY3QtaTE4bmV4dCc7XHJcblxyXG5leHBvcnQgY29uc3QgSGVhZGVyTG9nbyA9ICgpID0+IHtcclxuICAgIGNvbnN0IHt0LCBpMThufSA9IHVzZVRyYW5zbGF0aW9uKCdtZXNzYWdlcycpO1xyXG4gICAgXHJcbiAgICBjb25zdCBocmVmID0gJy8nICsgaTE4bi5sYW5ndWFnZTtcclxuICAgIFxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8YSBjbGFzc05hbWU9XCJoZWFkZXItbG9nby1saW5rXCIgaHJlZj17aHJlZn0gYXJpYS1sYWJlbD17dCgnaG9tZScpfSB0aXRsZT17dCgnaG9tZScpfT5cclxuICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJoZWFkZXItbG9nb1wiIHNyYz1cIi9pbWcvbG9nby9sb2dvLnBuZ1wiIGFsdD17dCgnY29ja3RhaWxpc3NpbW9fbG9nbycpfSAvPlxyXG4gICAgICAgIDwvYT5cclxuICAgIClcclxufSAiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgJy4uLy4uL3N0eWxlcy9VSS9VdGlscy9yZW1vdmVDb25maXJtLmNzcyc7XHJcbmltcG9ydCB7IHVzZVRyYW5zbGF0aW9uIH0gZnJvbSAncmVhY3QtaTE4bmV4dCc7XHJcblxyXG5leHBvcnQgY29uc3QgUmVtb3ZlQ29uZmlybSA9ICh7b25Db25maXJtLCBjbG9zZX0pID0+IHtcclxuICAgIGNvbnN0IHt0fSA9IHVzZVRyYW5zbGF0aW9uKCdtZXNzYWdlcycpO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZW1vdmUtY29uZmlybS1jb250cm9sc1wiPlxyXG4gICAgICAgICAgICA8c3Bhbj57dCgnYXNrLmRlbGV0ZScpfTwvc3Bhbj5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwicmVtb3ZlLWNvbmZpcm0tY29udHJvbCB5ZXNcIiBvbkNsaWNrPXtvbkNvbmZpcm19Pnt0KCd5ZXMnKX08L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwicmVtb3ZlLWNvbmZpcm0tY29udHJvbCBub1wiIG9uQ2xpY2s9e2Nsb3NlfT57dCgnbm8nKX08L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn0iLCJcclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgY3JlYXRlUm9vdCB9IGZyb20gJ3JlYWN0LWRvbS9jbGllbnQnO1xyXG5pbXBvcnQgeyBIZWFkZXIgfSBmcm9tICcuLi9Db21wb25lbnRzL0hlYWRlcic7XHJcbmltcG9ydCB7IGNvbmZpZ3VyZUxhbmd1YWdlIH0gZnJvbSAnLi4vZnVuY3Rpb25zL2xhbmd1YWdlL2NvbmZpZ3VyZUxhbmd1YWdlJztcclxuXHJcbmNvbmZpZ3VyZUxhbmd1YWdlKCk7XHJcblxyXG5cclxuY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2hlYWRlcicpO1xyXG5jb25zdCBoZWFkZXJSb290ID0gY3JlYXRlUm9vdChoZWFkZXIpO1xyXG5cclxuaGVhZGVyUm9vdC5yZW5kZXIoXHJcbiAgICA8SGVhZGVyIC8+XHJcbik7XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbiIsIi8qKlxyXG4gKiBcclxuICogQHBhcmFtIHtPYmplY3R9IGNhcnQgXHJcbiAqIEByZXR1cm4ge2FycmF5fSBjYXJ0TGluZXNcclxuICovXHJcbmV4cG9ydCBjb25zdCBleHRyYWN0Q2FydExpbmVzID0gKGNhcnQpID0+IHtcclxuICAgIGxldCBjYXJ0TGluZXMgPSBbXTtcclxuICAgIGZvcihjb25zdCBjYXJ0VmVuZG9yR3JvdXAgb2YgY2FydC5jYXJ0VmVuZG9yR3JvdXBzKSB7XHJcbiAgICAgICAgY2FydExpbmVzID0gY2FydExpbmVzLmNvbmNhdChjYXJ0VmVuZG9yR3JvdXAuY2FydExpbmVzKTtcclxuICAgIH1cclxuICAgIHJldHVybiBjYXJ0TGluZXM7XHJcbn0iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiXSwibmFtZXMiOlsiUmVhY3QiLCJBcnRpY2xlQ2FyZCIsIl9yZWYiLCJhcnRpY2xlIiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTmFtZSIsImhyZWYiLCJ0YXJnZXQiLCJzcmMiLCJwaWN0dXJlIiwicGF0aCIsImFsdCIsInRpdGxlIiwic3VidGl0bGUiLCJSZWNpcGVDYXJkIiwicmVjaXBlIiwiaW5ncmVkaWVudHMiLCJtYXAiLCJpbmdyZWRpZW50IiwiaW5kZXgiLCJrZXkiLCJtZW1vIiwidXNlUmVmIiwidXNlU3RhdGUiLCJTdWJDYXRlZ29yeU1lbnUiLCJpMThuIiwiQ2xvc2VCdXR0b24iLCJ1c2VPcGVuU3RhdGUiLCJGbGFzaCIsInQiLCJDYXRlZ29yeUxpbmsiLCJjYXRlZ29yeSIsInNldFNlbGVjdGVkIiwic2VsZWN0ZWQiLCJfdXNlU3RhdGUiLCJfdXNlU3RhdGUyIiwiX3NsaWNlZFRvQXJyYXkiLCJvcGVuaW5nVGltZXIiLCJzZXRPcGVuaW5nVGltZXIiLCJvcGVuRXhwYW5kIiwiY2xlYXJUaW1lb3V0IiwiZG9jdW1lbnQiLCJib2R5IiwiY2xhc3NMaXN0IiwiYWRkIiwiY2xvc2VFeHBhbmQiLCJidXR0b25SZWYiLCJjdXJyZW50IiwiZXhwYW5kUmVmIiwiYWRkRXZlbnRMaXN0ZW5lciIsImUiLCJyZW1vdmUiLCJoYW5kbGVNb3VzZU92ZXIiLCJjb250YWlucyIsInNldFRpbWVvdXQiLCJoYW5kbGVNb3VzZUxlYXZlIiwiaGFuZGxlS2V5RG93biIsInByZXZlbnREZWZhdWx0Iiwic3RvcFByb3BhZ2F0aW9uIiwiaGFuZGxlQ2xpY2siLCJfdXNlT3BlblN0YXRlIiwiX3VzZU9wZW5TdGF0ZTIiLCJ3aXRob3V0U2hvcEZsYXNoSXNPcGVuIiwib3BlbldpdGhvdXRTaG9wRmxhc2giLCJjbG9zZVdpdGhvdXRTaG9wRmxhc2giLCJGcmFnbWVudCIsImJ1dHRvbiIsIm5zIiwiaXNPcGVuIiwiY2xvc2UiLCJyb2xlIiwidGFiSW5kZXgiLCJsYW5ndWFnZSIsIm9uTW91c2VPdmVyIiwib25DbGljayIsIm9uS2V5RG93biIsIm9uTW91c2VMZWF2ZSIsInJlZiIsIm5hbWUiLCJzdWJDYXRlZ29yaWVzIiwibGVuZ3RoIiwiYWRkaXRpb25hbENsYXNzIiwiU3ViQ2F0ZWdvcnlMaW5rIiwic3ViQ2F0ZWdvcnkiLCJ1c2VUcmFuc2xhdGlvbiIsInVzZUdldFVzZXIiLCJfdXNlVHJhbnNsYXRpb24iLCJfdXNlR2V0VXNlciIsInVzZXIiLCJ1cGRhdGVVc2VyIiwiY29uc29sZSIsImxvZyIsImVuIiwiaW5jbHVkZXMiLCJlbWFpbCIsImlkIiwiQ2F0ZWdvcnlNZW51IiwiY2F0ZWdvcmllcyIsInNlbGVjdGVkQ2F0ZWdvcnkiLCJzZXRTZWxlY3RlZENhdGVnb3J5IiwiSGVhZGVyQm90dG9tIiwiYWN0aXZlQ2F0ZWdvcnkiLCJhY3RpdmVTdWJDYXRlZ29yeSIsInVzZUVmZmVjdCIsIkhlYWRlclB1YiIsIlJvbGVCYWRnZSIsIkFjY291bnRCYWRnZSIsIkFjY291bnRDYXJkSGVhZGVyIiwiYWNjb3VudFBhdGgiLCJyb2xlcyIsImNvbXBhbnkiLCJBY2NvdW50Q2FyZFRpdGxlIiwiX3JlZjIiLCJQcm9BY2NvdW50Q2FyZFRpdGxlIiwiQWRtaW5BY2NvdW50Q2FyZFRpdGxlIiwiVXNlckFjY291bnRDYXJkVGl0bGUiLCJfcmVmMyIsIl91c2VyJGNvbXBhbnkiLCJsb2dvIiwidXN1YWxOYW1lIiwiX3JlZjQiLCJjaXZpbGl0eSIsImZpcnN0TmFtZSIsImxhc3ROYW1lIiwiX3JlZjUiLCJSaWdodEFycm93QmFySWNvbiIsIkN1c3RvbWVyTWVudSIsIldhcm5pbmdCYWRnZSIsIlZlbmRvck1lbnUiLCJ2ZW5kb3IiLCJzdHJpcGVDb25maXJtZWQiLCJudW1iZXIiLCJMaW5rQnV0dG9uIiwiQW5vbnltb3VzQWNjb3VudENhcmRCb2R5IiwiTG9hZGVyIiwiTG9nb3V0QnV0dG9uIiwiQWNjb3VudENhcmQiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwibGFuZyIsIkFjY291bnRCdXR0b24iLCJ1c2VUb3VjaGluZ0xpc3RlbmVyIiwidXNlVGltZXIiLCJ0aW1lb3V0IiwiYXJndW1lbnRzIiwidW5kZWZpbmVkIiwidGltZXIiLCJzZXRUaW1lciIsImNsZWFyVGltZXIiLCJzdGFydFRpbWVyIiwidG9EbyIsIkFjY291bnRDb250cm9sIiwib3BlbiIsIl91c2VUaW1lciIsIl91c2VUaW1lcjIiLCJpc1RvdWNoaW5nIiwiTWludXNJY29uIiwiUGx1c0ljb24iLCJSZW1vdmVDb25maXJtIiwiUHJpY2VTaG93IiwiVHJhc2hCdXR0b24iLCJDYXJ0TGluZSIsImNhcnRMaW5lIiwiZXJyb3IiLCJzZXRRdWFudGl0eSIsImhhbmRsZUFkZCIsInBhY2thZ2luZyIsInF1YW50aXR5IiwicmVuZGVyRXJyb3IiLCJoYW5kbGVMZXNzIiwiZXJyb3JNZXNzYWdlIiwic2V0RXJyb3JNZXNzYWdlIiwiY2FydExpbmVSZWYiLCJfdXNlU3RhdGUzIiwiX3VzZVN0YXRlNCIsInJlbW92aW5nIiwic2V0UmVtb3ZpbmciLCJoYW5kbGVSZW1vdmVDbGljayIsImhhbmRsZUNvbmZpcm1SZW1vdmUiLCJoYW5kbGVDYW5jZWxSZW1vdmUiLCJwcm9kdWN0IiwiZmlyc3RQaWN0dXJlIiwiZGVzaWduYXRpb24iLCJsYWJlbCIsInByaWNlIiwidW5pdFByaWNlIiwiZGlzYWJsZWQiLCJ0b3RhbFByaWNlIiwib25Db25maXJtIiwiSW5kZXhSZXZpZXdTdGFycyIsIkNhcnRWZW5kb3JHcm91cCIsIl9yZWYkY2FydFZlbmRvckdyb3VwIiwiY2FydFZlbmRvckdyb3VwIiwiY2FydExpbmVzIiwibm90ZSIsInJldmlld05vdGUiLCJjb3VudCIsImNvdW50UmV2aWV3cyIsInVzZUJ1dHRvbkxvYWRpbmciLCJDYXJ0IiwiX2NhcnQkY291bnQiLCJjYXJ0IiwiZmV0Y2hDYXJ0IiwiX3VzZUJ1dHRvbkxvYWRpbmciLCJfdXNlQnV0dG9uTG9hZGluZzIiLCJidXR0b25Mb2FkaW5nIiwiaGFuZGxlQnV0dG9uQ2xpY2siLCJzZXNzaW9uU3RvcmFnZSIsImdldEl0ZW0iLCJzZXRJdGVtIiwiZ2VuZXJhbExvYWRpbmciLCJjYXJ0VmVuZG9yR3JvdXBzIiwiQ2FydEJ1dHRvbiIsIk1vZGFsIiwiY2FydENoaXBVcGRhdGUiLCJ1c2VDYXJ0RmV0Y2giLCJDYXJ0Q29udHJvbCIsImNhcnRJc09wZW4iLCJvcGVuQ2FydCIsImNsb3NlQ2FydCIsIl91c2VDYXJ0RmV0Y2giLCJfY2FydCR0b3RhbFByaWNlIiwicHJpY2VUb1BheSIsIndpbmRvdyIsImxvY2F0aW9uIiwic2VhcmNoIiwic3Vic3RyaW5nIiwiaGlkZGVuIiwiX3JlZ2VuZXJhdG9yUnVudGltZSIsImV4cG9ydHMiLCJPcCIsIk9iamVjdCIsInByb3RvdHlwZSIsImhhc093biIsImhhc093blByb3BlcnR5IiwiZGVmaW5lUHJvcGVydHkiLCJvYmoiLCJkZXNjIiwidmFsdWUiLCIkU3ltYm9sIiwiU3ltYm9sIiwiaXRlcmF0b3JTeW1ib2wiLCJpdGVyYXRvciIsImFzeW5jSXRlcmF0b3JTeW1ib2wiLCJhc3luY0l0ZXJhdG9yIiwidG9TdHJpbmdUYWdTeW1ib2wiLCJ0b1N0cmluZ1RhZyIsImRlZmluZSIsImVudW1lcmFibGUiLCJjb25maWd1cmFibGUiLCJ3cml0YWJsZSIsImVyciIsIndyYXAiLCJpbm5lckZuIiwib3V0ZXJGbiIsInNlbGYiLCJ0cnlMb2NzTGlzdCIsInByb3RvR2VuZXJhdG9yIiwiR2VuZXJhdG9yIiwiZ2VuZXJhdG9yIiwiY3JlYXRlIiwiY29udGV4dCIsIkNvbnRleHQiLCJtYWtlSW52b2tlTWV0aG9kIiwidHJ5Q2F0Y2giLCJmbiIsImFyZyIsInR5cGUiLCJjYWxsIiwiQ29udGludWVTZW50aW5lbCIsIkdlbmVyYXRvckZ1bmN0aW9uIiwiR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUiLCJJdGVyYXRvclByb3RvdHlwZSIsImdldFByb3RvIiwiZ2V0UHJvdG90eXBlT2YiLCJOYXRpdmVJdGVyYXRvclByb3RvdHlwZSIsInZhbHVlcyIsIkdwIiwiZGVmaW5lSXRlcmF0b3JNZXRob2RzIiwiZm9yRWFjaCIsIm1ldGhvZCIsIl9pbnZva2UiLCJBc3luY0l0ZXJhdG9yIiwiUHJvbWlzZUltcGwiLCJpbnZva2UiLCJyZXNvbHZlIiwicmVqZWN0IiwicmVjb3JkIiwicmVzdWx0IiwiX3R5cGVvZiIsIl9fYXdhaXQiLCJ0aGVuIiwidW53cmFwcGVkIiwicHJldmlvdXNQcm9taXNlIiwiY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmciLCJzdGF0ZSIsIkVycm9yIiwiZG9uZVJlc3VsdCIsImRlbGVnYXRlIiwiZGVsZWdhdGVSZXN1bHQiLCJtYXliZUludm9rZURlbGVnYXRlIiwic2VudCIsIl9zZW50IiwiZGlzcGF0Y2hFeGNlcHRpb24iLCJhYnJ1cHQiLCJkb25lIiwibWV0aG9kTmFtZSIsIlR5cGVFcnJvciIsImluZm8iLCJyZXN1bHROYW1lIiwibmV4dCIsIm5leHRMb2MiLCJwdXNoVHJ5RW50cnkiLCJsb2NzIiwiZW50cnkiLCJ0cnlMb2MiLCJjYXRjaExvYyIsImZpbmFsbHlMb2MiLCJhZnRlckxvYyIsInRyeUVudHJpZXMiLCJwdXNoIiwicmVzZXRUcnlFbnRyeSIsImNvbXBsZXRpb24iLCJyZXNldCIsIml0ZXJhYmxlIiwiaXRlcmF0b3JNZXRob2QiLCJpc05hTiIsImkiLCJkaXNwbGF5TmFtZSIsImlzR2VuZXJhdG9yRnVuY3Rpb24iLCJnZW5GdW4iLCJjdG9yIiwiY29uc3RydWN0b3IiLCJtYXJrIiwic2V0UHJvdG90eXBlT2YiLCJfX3Byb3RvX18iLCJhd3JhcCIsImFzeW5jIiwiUHJvbWlzZSIsIml0ZXIiLCJrZXlzIiwidmFsIiwib2JqZWN0IiwicmV2ZXJzZSIsInBvcCIsInNraXBUZW1wUmVzZXQiLCJwcmV2IiwiY2hhckF0Iiwic2xpY2UiLCJzdG9wIiwicm9vdFJlY29yZCIsInJ2YWwiLCJleGNlcHRpb24iLCJoYW5kbGUiLCJsb2MiLCJjYXVnaHQiLCJoYXNDYXRjaCIsImhhc0ZpbmFsbHkiLCJmaW5hbGx5RW50cnkiLCJjb21wbGV0ZSIsImZpbmlzaCIsIl9jYXRjaCIsInRocm93biIsImRlbGVnYXRlWWllbGQiLCJhc3luY0dlbmVyYXRvclN0ZXAiLCJnZW4iLCJfbmV4dCIsIl90aHJvdyIsIl9hc3luY1RvR2VuZXJhdG9yIiwiYXJncyIsImFwcGx5IiwiYXJyIiwiX2FycmF5V2l0aEhvbGVzIiwiX2l0ZXJhYmxlVG9BcnJheUxpbWl0IiwiX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5IiwiX25vbkl0ZXJhYmxlUmVzdCIsIm8iLCJtaW5MZW4iLCJfYXJyYXlMaWtlVG9BcnJheSIsIm4iLCJ0b1N0cmluZyIsIkFycmF5IiwiZnJvbSIsInRlc3QiLCJsZW4iLCJhcnIyIiwiX2kiLCJfcyIsIl9lIiwiX3giLCJfciIsIl9hcnIiLCJfbiIsIl9kIiwiaXNBcnJheSIsInl1cCIsInVzZUZvcm1XaXRoVmFsaWRhdGlvbiIsIkNvbnRyb2xsZWRSYWRpb0ZpZWxkcyIsIlRleHRGaWVsZCIsIkZvcm1CdXR0b24iLCJhcGlQcmVwYXJlZEZldGNoIiwiU2l0ZUNvbmZpZyIsInNjaGVtYSIsInN0cmluZyIsIkNJVklMSVRZX0YiLCJDSVZJTElUWV9NIiwicmVxdWlyZWQiLCJtYXgiLCJtZXNzYWdlIiwiQ29udGFjdEZvcm0iLCJfZXJyb3JzJGNpdmlsaXR5IiwiX2Vycm9ycyRmaXJzdE5hbWUiLCJfZXJyb3JzJGxhc3ROYW1lIiwiX2Vycm9ycyRlbWFpbCIsIl9lcnJvcnMkbWVzc2FnZSIsIm9uU3VibWl0U3VjY2VzcyIsIl91c2VGb3JtV2l0aFZhbGlkYXRpbyIsImhhbmRsZVN1Ym1pdCIsImNvbnRyb2wiLCJlcnJvcnMiLCJzZXRFcnJvciIsInNldFZhbHVlIiwiaXNTdWJtaXR0aW5nIiwiaXNMb2FkaW5nIiwic2V0TG9hZGluZyIsImVycm9yRmxhc2hJc09wZW4iLCJvcGVuRXJyb3JGbGFzaCIsImNsb3NlRXJyb3JGbGFzaCIsIm9uU3VibWl0IiwiX2NhbGxlZSIsImZvcm1EYXRhIiwiX2NhbGxlZSQiLCJfY29udGV4dCIsInQwIiwiX3gyIiwiZm9ybVJlZiIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJpbnB1dFdyYXBwZXIiLCJjaG9pY2VzIiwiX2RlZmluZVByb3BlcnR5IiwiaXNSZXF1aXJlZEZpZWxkIiwibG9hZGluZyIsIkNoYXRJY29uIiwiQ2hhdEJ1dHRvbiIsIkNvbnRhY3RDb250cm9sIiwiY2hpbGRyZW4iLCJidXR0b25DbGFzcyIsImZvcm1Jc09wZW4iLCJvcGVuRm9ybSIsImNsb3NlRm9ybSIsIl91c2VPcGVuU3RhdGUzIiwiX3VzZU9wZW5TdGF0ZTQiLCJzdWNjZXNzRmxhc2hJc09wZW4iLCJvcGVuU3VjY2Vzc0ZsYXNoIiwiY2xvc2VTdWNjZXNzRmxhc2giLCJoYW5kbGVTdWJtaXRTdWNjZXNzIiwidXNlRmV0Y2hRU2VhcmNoIiwiU2VhcmNoSWNvbiIsIlByb2R1Y3RDYXJkIiwiSW5saW5lU2VhcmNoVG9vbCIsImlucHV0UmVmIiwicSIsInNldFEiLCJoYW5kbGVDaGFuZ2UiLCJjdXJyZW50VGFyZ2V0IiwiX3VzZUZldGNoUVNlYXJjaCIsIl91c2VGZXRjaFFTZWFyY2gyIiwicmVzZXRQcm9kdWN0cyIsImZvY3VzIiwiaGFuZGxlQ2xvc2UiLCJ3cmFwcGVyUmVmIiwib25BbmltYXRpb25FbmQiLCJoYW5kbGVFbXB0eSIsImFjdGlvbiIsInBsYWNlaG9sZGVyIiwib25DaGFuZ2UiLCJhdXRvRm9jdXMiLCJpdGVtcyIsIml0ZW0iLCJTZWFyY2hCdXR0b24iLCJjcmVhdGVQb3J0YWwiLCJJbmxpbmVTZWFyY2hUb29sQ29udHJvbCIsInNlYXJjaFRvb2xJc09wZW4iLCJvcGVuU2VhcmNoVG9vbCIsImNsb3NlU2VhcmNoVG9vbCIsIkFjY291bnRJY29uIiwiQmVjb21lVmVuZG9yTGluayIsIkRhc2hib2FyZEljb24iLCJBY2NvdW50TGlua3MiLCJBbm9ueW1vdXNBY2NvdW50TGluayIsIkN1c3RvbWVyQWNjb3VudExpbmsiLCJWZW5kb3JBY2NvdW50TGluayIsIkNoZXZyb25SaWdodEljb24iLCJGYWNlYm9va0xpbmsiLCJJbnN0YWdyYW1MaW5rIiwiTW9iaWxlTWVudUZvb3RlciIsIlNVUFBPUlRFRF9MT0NBTEVTIiwiTG9jYWxlTGluayIsIkNoZXZyb25MZWZ0SWNvbiIsIk1vYmlsZVN1Yk1lbnUiLCJoYW5kbGVSZXR1cm4iLCJmb3J3YXJkUmVmIiwiSGVhZGVyTG9nbyIsIk1vYmlsZU1lbnUiLCJtb2RhbFJlZiIsInNjcm9sbCIsIk1lbnVCdXR0b24iLCJNb2JpbGVNZW51Q29udHJvbCIsInNpZGVNZW51SXNPcGVuIiwib3BlblNpZGVNZW51IiwiY2xvc2VTaWRlTWVudSIsIkFydGljbGVTdWdnZXN0IiwiUHJvZHVjdEluZGV4UmV2aWV3IiwiUHJvZHVjdFN1Z2dlc3QiLCJiYXNlUGFja2FnaW5nIiwiUmVjaXBlU3VnZ2VzdCIsIlNpZGVTZWFyY2hUb29sIiwiU2lkZVNlYXJjaFRvb2xDb250cm9sIiwiSGVhZGVyVG9wIiwidXNlU2Nyb2xsWURpcmVjdGlvbkxpc3RlbmVyIiwiSGVhZGVyIiwiX3VzZVNjcm9sbFlEaXJlY3Rpb25MIiwiaXNTY3JvbGxpbmdVcCIsImlzU2Nyb2xsaW5nRG93biIsImhlYWRlckNsYXNzIiwic2V0SGVhZGVyQ2xhc3MiLCJvd25LZXlzIiwiZW51bWVyYWJsZU9ubHkiLCJnZXRPd25Qcm9wZXJ0eVN5bWJvbHMiLCJzeW1ib2xzIiwiZmlsdGVyIiwic3ltIiwiZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yIiwiX29iamVjdFNwcmVhZCIsInNvdXJjZSIsImdldE93blByb3BlcnR5RGVzY3JpcHRvcnMiLCJkZWZpbmVQcm9wZXJ0aWVzIiwiX3RvUHJvcGVydHlLZXkiLCJfdG9QcmltaXRpdmUiLCJTdHJpbmciLCJpbnB1dCIsImhpbnQiLCJwcmltIiwidG9QcmltaXRpdmUiLCJyZXMiLCJOdW1iZXIiLCJ1c2VDYWxsYmFjayIsInVzZVJlZHVjZXIiLCJBcGlFcnJvciIsImFwaUZldGNoIiwicHJpY2VBZGQiLCJwcmljZUxlc3MiLCJwcmljZU11bHRpcGx5IiwiZXh0cmFjdENhcnRMaW5lcyIsInJlZHVjZXIiLCJwYXlsb2FkIiwiZ2VuZXJhbEVycm9yIiwic3RvY2siLCJsaW5lVG9SZW1vdmUiLCJmaW5kIiwibGluZVRvdGFsUHJpY2UiLCJsaW5lUXVhbnRpdHkiLCJsaW5lVG9SZW1vdmVJZCIsImxpbmVUb3RhbFByaWNlc0J5SWQiLCJmcm9tRW50cmllcyIsImNhcnRUb3RhbFByaWNlIiwicmVkdWNlIiwiYWNjIiwiX3VzZVJlZHVjZXIiLCJfdXNlUmVkdWNlcjIiLCJkaXNwYXRjaCIsInF1YW50aXR5VGltZXIiLCJzZXRRdWFudGl0eVRpbWVyIiwiZnVsbENhcnQiLCJfY2FsbGVlMiIsInBhY2thZ2luZ0lkIiwiX2NhbGxlZTIkIiwiX2NvbnRleHQyIiwiX2NhbGxlZTMiLCJfY2FsbGVlMyQiLCJfY29udGV4dDMiLCJ1c2VTY3JvbGxZTGlzdGVuZXIiLCJzdGFydCIsInNlbnNpYmlsaXR5IiwiY3VycmVudFNjcm9sbCIsInNldFNjcm9sbGluZ0Rvd24iLCJzZXRTY3JvbGxpbmdVcCIsIl91c2VTdGF0ZTUiLCJfdXNlU3RhdGU2IiwibGFzdFNjcm9sbCIsInNldExhc3RTY3JvbGwiLCJzY3JvbGxZIiwic2V0Q3VycmVudFNjcm9sbCIsIm9uU2Nyb2xsIiwic3Vic3RyIiwidG9VcHBlckNhc2UiLCJyZXNvbHZlTGFiZWwiLCJfcmVmJGFsaWduIiwiYWxpZ24iLCJGbHlSb2xlQmFkZ2UiLCJfcmVmJG51bWJlciIsInByb3BzIiwiX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzIiwiX2V4Y2x1ZGVkIiwiX2V4dGVuZHMiLCJCdXR0b24iLCJDYXJ0SWNvbiIsIkxvZ291dEljb24iLCJNZW51SWNvbiIsInZlcnNpb24iLCJ4bWxucyIsIngiLCJ5Iiwidmlld0JveCIsImZpbGwiLCJkIiwiX3JlZiRjbG9zZSIsIl9yZWYkYW5pbWF0ZWQiLCJhbmltYXRlZCIsImVsdCIsImNvbnRhaW5lclJlZiIsImhhbmRsZVN0b3BQcm9wYWdhdGlvbiIsInVzZUNvbnRyb2xsZXIiLCJlbnRyaWVzIiwiQ29udHJvbGxlZFJhZGlvRmllbGQiLCJfcmVmNCRkZWZhdWx0VmFsdWUiLCJkZWZhdWx0VmFsdWUiLCJfcmVmNCRhZGRpdGlvbmFsQ2xhc3MiLCJfdXNlQ29udHJvbGxlciIsImFzc2lnbiIsIl9vYmplY3REZXN0cnVjdHVyaW5nRW1wdHkiLCJmaWVsZCIsImNoZWNrZWQiLCJodG1sRm9yIiwiY2xpcFJ1bGUiLCJmaWxsUnVsZSIsInRyYW5zZm9ybSIsImVuYWJsZUJhY2tncm91bmQiLCJjcmVhdGVSb290IiwiY29uZmlndXJlTGFuZ3VhZ2UiLCJoZWFkZXIiLCJnZXRFbGVtZW50QnlJZCIsImhlYWRlclJvb3QiLCJyZW5kZXIiLCJfaXRlcmF0b3IiLCJfY3JlYXRlRm9yT2ZJdGVyYXRvckhlbHBlciIsIl9zdGVwIiwicyIsImNvbmNhdCIsImYiXSwic291cmNlUm9vdCI6IiJ9
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
/******/ __webpack_require__.O(0, ["vendors-node_modules_core-js_modules_es_array_concat_js-node_modules_core-js_modules_es_array-a9bb89","vendors-node_modules_core-js_modules_es_array_map_js-node_modules_yup_index_esm_js-node_modul-2aaf22","vendors-node_modules_core-js_modules_es_date_to-string_js-node_modules_core-js_modules_es_par-13cb00","vendors-node_modules_core-js_modules_es_array_find_js-node_modules_core-js_modules_es_array_r-b9e903","assets_entrypoints_i18n_js-assets_functions_api_js","assets_CustomHook_state_useOpenState_jsx-assets_UI_Form_FormButton_jsx-assets_UI_Product_Pric-f56e77","assets_CustomHook_form_useFormWithValidation_jsx-assets_UI_Form_TextField_jsx","assets_Components_Shop_ProductIndex_ProductCard_jsx","assets_CustomHook_useGetUser_jsx-assets_UI_Icon_TrashIcon_jsx","assets_Config_categories_json","assets_CustomHook_fetch_useFetchQSearch_jsx-assets_UI_Button_TrashButton_jsx","assets_UI_Button_LinkButton_jsx-assets_UI_Flash_Flash_jsx"], () => (__webpack_exec__("./assets/entrypoints/header.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0FBQ3VjLE1BQU0sQ0FBQ3hjLGVBQWUsQ0FBQ0MsU0FBUyxDQUFDO0lBQzNEO0VBQUMsU0FBQTBELEdBQUE7SUFBQXlZLFNBQUEsQ0FBQWpsQixDQUFBLENBQUF3TSxHQUFBO0VBQUE7SUFBQXlZLFNBQUEsQ0FBQUssQ0FBQTtFQUFBO0VBQ0QsT0FBT3hjLFNBQVM7QUFDcEIsQ0FBQzs7Ozs7Ozs7Ozs7QUNYRDs7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7O0FDQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvQ29tcG9uZW50cy9CbG9nL0FydGljbGUvQXJ0aWNsZUluZGV4L0FydGljbGVDYXJkLmpzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvQ29tcG9uZW50cy9CbG9nL1JlY2lwZS9SZWNpcGVJbmRleC9SZWNpcGVDYXJkLmpzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvQ29tcG9uZW50cy9IZWFkZXIvSGVhZGVyQm90dG9tL0NhdGVnb3J5TWVudS9DYXRlZ29yeUxpbmsuanN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9Db21wb25lbnRzL0hlYWRlci9IZWFkZXJCb3R0b20vQ2F0ZWdvcnlNZW51L1N1YkNhdGVnb3J5TWVudS9TdWJDYXRlZ29yeUxpbmsuanN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9Db21wb25lbnRzL0hlYWRlci9IZWFkZXJCb3R0b20vQ2F0ZWdvcnlNZW51L1N1YkNhdGVnb3J5TWVudS9TdWJDYXRlZ29yeU1lbnUuanN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9Db21wb25lbnRzL0hlYWRlci9IZWFkZXJCb3R0b20vQ2F0ZWdvcnlNZW51L2luZGV4LmpzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvQ29tcG9uZW50cy9IZWFkZXIvSGVhZGVyQm90dG9tL2luZGV4LmpzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvQ29tcG9uZW50cy9IZWFkZXIvSGVhZGVyUHViL2luZGV4LmpzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvQ29tcG9uZW50cy9IZWFkZXIvSGVhZGVyVG9wL0FjY291bnRDb250cm9sL0FjY291bnRDYXJkL0FjY291bnRDYXJkSGVhZGVyLmpzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvQ29tcG9uZW50cy9IZWFkZXIvSGVhZGVyVG9wL0FjY291bnRDb250cm9sL0FjY291bnRDYXJkL0FjY291bnRDYXJkTWVudS9DdXN0b21lck1lbnUuanN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9Db21wb25lbnRzL0hlYWRlci9IZWFkZXJUb3AvQWNjb3VudENvbnRyb2wvQWNjb3VudENhcmQvQWNjb3VudENhcmRNZW51L1ZlbmRvck1lbnUuanN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9Db21wb25lbnRzL0hlYWRlci9IZWFkZXJUb3AvQWNjb3VudENvbnRyb2wvQWNjb3VudENhcmQvQW5vbnltb3VzQWNjb3VudENhcmRCb2R5LmpzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvQ29tcG9uZW50cy9IZWFkZXIvSGVhZGVyVG9wL0FjY291bnRDb250cm9sL0FjY291bnRDYXJkL2luZGV4LmpzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvQ29tcG9uZW50cy9IZWFkZXIvSGVhZGVyVG9wL0FjY291bnRDb250cm9sL2luZGV4LmpzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvQ29tcG9uZW50cy9IZWFkZXIvSGVhZGVyVG9wL0NhcnRDb250cm9sL0NhcnQvQ2FydExpbmUuanN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9Db21wb25lbnRzL0hlYWRlci9IZWFkZXJUb3AvQ2FydENvbnRyb2wvQ2FydC9DYXJ0VmVuZG9yR3JvdXAuanN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9Db21wb25lbnRzL0hlYWRlci9IZWFkZXJUb3AvQ2FydENvbnRyb2wvQ2FydC9pbmRleC5qc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL0NvbXBvbmVudHMvSGVhZGVyL0hlYWRlclRvcC9DYXJ0Q29udHJvbC9pbmRleC5qc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL0NvbXBvbmVudHMvSGVhZGVyL0hlYWRlclRvcC9Db250YWN0Q29udHJvbC9Db250YWN0Rm9ybS5qc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL0NvbXBvbmVudHMvSGVhZGVyL0hlYWRlclRvcC9Db250YWN0Q29udHJvbC9pbmRleC5qc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL0NvbXBvbmVudHMvSGVhZGVyL0hlYWRlclRvcC9JbmxpbmVTZWFyY2hUb29sQ29udHJvbC9JbmxpbmVTZWFyY2hUb29sL2luZGV4LmpzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvQ29tcG9uZW50cy9IZWFkZXIvSGVhZGVyVG9wL0lubGluZVNlYXJjaFRvb2xDb250cm9sL2luZGV4LmpzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvQ29tcG9uZW50cy9IZWFkZXIvSGVhZGVyVG9wL01vYmlsZU1lbnVDb250cm9sL01vYmlsZU1lbnUvQWNjb3VudExpbmtzLmpzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvQ29tcG9uZW50cy9IZWFkZXIvSGVhZGVyVG9wL01vYmlsZU1lbnVDb250cm9sL01vYmlsZU1lbnUvQ2F0ZWdvcnlMaW5rLmpzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvQ29tcG9uZW50cy9IZWFkZXIvSGVhZGVyVG9wL01vYmlsZU1lbnVDb250cm9sL01vYmlsZU1lbnUvTW9iaWxlTWVudUZvb3Rlci5qc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL0NvbXBvbmVudHMvSGVhZGVyL0hlYWRlclRvcC9Nb2JpbGVNZW51Q29udHJvbC9Nb2JpbGVNZW51L01vYmlsZVN1Yk1lbnUvU3ViQ2F0ZWdvcnlMaW5rLmpzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvQ29tcG9uZW50cy9IZWFkZXIvSGVhZGVyVG9wL01vYmlsZU1lbnVDb250cm9sL01vYmlsZU1lbnUvTW9iaWxlU3ViTWVudS9pbmRleC5qc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL0NvbXBvbmVudHMvSGVhZGVyL0hlYWRlclRvcC9Nb2JpbGVNZW51Q29udHJvbC9Nb2JpbGVNZW51L2luZGV4LmpzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvQ29tcG9uZW50cy9IZWFkZXIvSGVhZGVyVG9wL01vYmlsZU1lbnVDb250cm9sL2luZGV4LmpzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvQ29tcG9uZW50cy9IZWFkZXIvSGVhZGVyVG9wL1NpZGVTZWFyY2hUb29sQ29udHJvbC9TaWRlU2VhcmNoVG9vbC9JdGVtU3VnZ2VzdC9BcnRpY2xlU3VnZ2VzdC5qc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL0NvbXBvbmVudHMvSGVhZGVyL0hlYWRlclRvcC9TaWRlU2VhcmNoVG9vbENvbnRyb2wvU2lkZVNlYXJjaFRvb2wvSXRlbVN1Z2dlc3QvUHJvZHVjdFN1Z2dlc3QuanN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9Db21wb25lbnRzL0hlYWRlci9IZWFkZXJUb3AvU2lkZVNlYXJjaFRvb2xDb250cm9sL1NpZGVTZWFyY2hUb29sL0l0ZW1TdWdnZXN0L1JlY2lwZVN1Z2dlc3QuanN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9Db21wb25lbnRzL0hlYWRlci9IZWFkZXJUb3AvU2lkZVNlYXJjaFRvb2xDb250cm9sL1NpZGVTZWFyY2hUb29sL2luZGV4LmpzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvQ29tcG9uZW50cy9IZWFkZXIvSGVhZGVyVG9wL1NpZGVTZWFyY2hUb29sQ29udHJvbC9pbmRleC5qc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL0NvbXBvbmVudHMvSGVhZGVyL0hlYWRlclRvcC9pbmRleC5qc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL0NvbXBvbmVudHMvSGVhZGVyL2luZGV4LmpzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvQ3VzdG9tSG9vay9jYXJ0L3VzZUNhcnRGZXRjaC5qc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL0N1c3RvbUhvb2svZm9ybS91c2VCdXR0b25Mb2FkaW5nLmpzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvQ3VzdG9tSG9vay9saXN0ZW5lci91c2VTY3JvbGxZRGlyZWN0aW9uTGlzdGVuZXIuanN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9DdXN0b21Ib29rL2xpc3RlbmVyL3VzZVNjcm9sbFlMaXN0ZW5lci5qc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL1VJL0JhZGdlL0FjY291bnRCYWRnZS5qc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL1VJL0JhZGdlL1JvbGVCYWRnZS5qc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL1VJL0JhZGdlL1dhcm5pbmdCYWRnZS5qc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL1VJL0J1dHRvbi9BY2NvdW50QnV0dG9uLmpzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvVUkvQnV0dG9uL0JlY29tZVZlbmRvckxpbmsuanN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9VSS9CdXR0b24vQ2FydEJ1dHRvbi5qc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL1VJL0J1dHRvbi9DaGF0QnV0dG9uLmpzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvVUkvQnV0dG9uL0xvZ291dEJ1dHRvbi5qc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL1VJL0J1dHRvbi9NZW51QnV0dG9uLmpzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvVUkvQnV0dG9uL1NlYXJjaEJ1dHRvbi5qc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL1VJL0J1dHRvbi9Tb2NpYWwvRmFjZWJvb2tMaW5rLmpzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvVUkvQnV0dG9uL1NvY2lhbC9JbnN0YWdyYW1MaW5rLmpzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvVUkvQ29udGFpbmVyL01vZGFsLmpzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvVUkvRm9ybS9Db250cm9sbGVkUmFkaW9GaWVsZHMuanN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9VSS9JY29uL0FjY291bnRJY29uLmpzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvVUkvSWNvbi9BcnJvd3MvUmlnaHRBcnJvd0Jhckljb24uanN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9VSS9JY29uL0NhcnRJY29uLmpzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvVUkvSWNvbi9DaGF0SWNvbi5qc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL1VJL0ljb24vQ2hldnJvbkxlZnRJY29uLmpzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvVUkvSWNvbi9DaGV2cm9uUmlnaHRJY29uLmpzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvVUkvSWNvbi9EYXNoYm9hcmRJY29uLmpzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvVUkvSWNvbi9Mb2dvdXRJY29uLmpzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvVUkvSWNvbi9NZW51SWNvbi5qc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL1VJL0ljb24vUXVhbnRpdHkvTWludXNJY29uLmpzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvVUkvSWNvbi9RdWFudGl0eS9QbHVzSWNvbi5qc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL1VJL0ljb24vU2VhcmNoSWNvbi5qc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL1VJL0xvZ28vSGVhZGVyTG9nby5qc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL1VJL1V0aWxzL1JlbW92ZUNvbmZpcm0uanN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9lbnRyeXBvaW50cy9oZWFkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2Z1bmN0aW9ucy9oZWxwZXJzL3ZlbmRvckdyb3Vwc0xpbmVzRXh0cmFjdG9yLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9zdHlsZXMvSGVhZGVyL0hlYWRlckJvdHRvbS9jYXRlZ29yeU1lbnUuY3NzPzBhZTEiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3N0eWxlcy9IZWFkZXIvSGVhZGVyQm90dG9tL2luZGV4LmNzcz9iZjI1Iiwid2VicGFjazovLy8uL2Fzc2V0cy9zdHlsZXMvVUkvVXRpbHMvcmVtb3ZlQ29uZmlybS5jc3M/YWVkZCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc3R5bGVzL2hlYWRlci9IZWFkZXJUb3AvTW9iaWxlTWVudS9pbmRleC5jc3M/OGQxMyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc3R5bGVzL2hlYWRlci9IZWFkZXJUb3AvTW9iaWxlTWVudS9tb2JpbGVNZW51Zm9vdGVyLmNzcz8yNjc2Iiwid2VicGFjazovLy8uL2Fzc2V0cy9zdHlsZXMvaGVhZGVyL0hlYWRlclRvcC9hY2NvdW50Q2FyZC5jc3M/NTBlOSIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc3R5bGVzL2hlYWRlci9IZWFkZXJUb3AvaW5kZXguY3NzP2UxOGMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3N0eWxlcy9oZWFkZXIvSGVhZGVyVG9wL2lubGluZVNlYXJjaFRvb2wuY3NzPzhlOWYiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3N0eWxlcy9oZWFkZXIvSGVhZGVyVG9wL3NpZGVNZW51LmNzcz9kNzA2Iiwid2VicGFjazovLy8uL2Fzc2V0cy9zdHlsZXMvaGVhZGVyL0hlYWRlclRvcC9zaWRlU2VhcmNoVG9vbC5jc3M/ODc4YyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc3R5bGVzL2hlYWRlci9pbmRleC5jc3M/NGZkYiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5cclxuZXhwb3J0IGNvbnN0IEFydGljbGVDYXJkID0gKHthcnRpY2xlfSkgPT4ge1xyXG4gICAgXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8bGkgY2xhc3NOYW1lPVwicHJvZHVjdC1jYXJkIHR5cGUtYXJ0aWNsZVwiPlxyXG4gICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJwcm9kdWN0LWNhcmQtaW1nLWxpbmtcIiBocmVmPXthcnRpY2xlLnRhcmdldH0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2R1Y3QtY2FyZC1pbWctd3JhcHBlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwicHJvZHVjdC1jYXJkLWltZ1wiIHNyYz17YXJ0aWNsZS5waWN0dXJlLnBhdGh9IGFsdD17YXJ0aWNsZS5waWN0dXJlLmFsdH0gLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZHVjdC1jYXJkLWJvZHlcIj5cclxuICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJwcm9kdWN0LWNhcmQtdGl0bGUgYXJ0aWNsZS1jYXJkLXRpdGxlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj17YXJ0aWNsZS50YXJnZXR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj57YXJ0aWNsZS50aXRsZX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFydGljbGUuc3VidGl0bGUgJiYgPHNwYW4gY2xhc3NOYW1lPVwicHJvZHVjdC1jYXJkLXN1YnRpdGxlXCI+IC0ge2FydGljbGUuc3VidGl0bGV9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgPC9oMj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9saT5cclxuICAgIClcclxufSIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcblxyXG5leHBvcnQgY29uc3QgUmVjaXBlQ2FyZCA9ICh7cmVjaXBlfSkgPT4ge1xyXG5cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxsaSBjbGFzc05hbWU9XCJwcm9kdWN0LWNhcmQgdHlwZS1yZWNpcGVcIj5cclxuICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwicHJvZHVjdC1jYXJkLWltZy1saW5rXCIgaHJlZj17cmVjaXBlLnRhcmdldH0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2R1Y3QtY2FyZC1pbWctd3JhcHBlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwicHJvZHVjdC1jYXJkLWltZ1wiIHNyYz17cmVjaXBlLnBpY3R1cmUucGF0aH0gYWx0PXtyZWNpcGUucGljdHVyZS5hbHR9IC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2R1Y3QtY2FyZC1ib2R5XCI+XHJcbiAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwicHJvZHVjdC1jYXJkLXRpdGxlXCI+PGEgaHJlZj17cmVjaXBlLnRhcmdldH0+e3JlY2lwZS50aXRsZX08L2E+PC9oMj5cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cInByb2R1Y3QtY2FyZC1saXN0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZWNpcGUuaW5ncmVkaWVudHMubWFwKChpbmdyZWRpZW50LCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cInByb2R1Y3QtY2FyZC1saXN0LWl0ZW1cIiBrZXk9e2luZGV4fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj57aW5ncmVkaWVudH08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApKVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvbGk+XHJcbiAgICApXHJcbn0iLCJpbXBvcnQgUmVhY3QsIHsgbWVtbywgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgU3ViQ2F0ZWdvcnlNZW51IH0gZnJvbSAnLi9TdWJDYXRlZ29yeU1lbnUvU3ViQ2F0ZWdvcnlNZW51JztcclxuaW1wb3J0IGkxOG4gZnJvbSAnLi4vLi4vLi4vLi4vZW50cnlwb2ludHMvaTE4bic7XHJcbmltcG9ydCB7IENsb3NlQnV0dG9uIH0gZnJvbSAnLi4vLi4vLi4vLi4vVUkvQnV0dG9uL0Nsb3NlQnV0dG9uJztcclxuaW1wb3J0IHsgdXNlT3BlblN0YXRlIH0gZnJvbSAnLi4vLi4vLi4vLi4vQ3VzdG9tSG9vay9zdGF0ZS91c2VPcGVuU3RhdGUnO1xyXG5pbXBvcnQgeyBGbGFzaCB9IGZyb20gJy4uLy4uLy4uLy4uL1VJL0ZsYXNoL0ZsYXNoJztcclxuaW1wb3J0IHsgdCB9IGZyb20gJ2kxOG5leHQnO1xyXG5cclxuZXhwb3J0IGNvbnN0IENhdGVnb3J5TGluayA9IG1lbW8oKHtjYXRlZ29yeSwgc2V0U2VsZWN0ZWQsIHNlbGVjdGVkfSkgPT4ge1xyXG5cclxuICAgIGNvbnN0IFtvcGVuaW5nVGltZXIsIHNldE9wZW5pbmdUaW1lcl0gPSB1c2VTdGF0ZShudWxsKTtcclxuXHJcbiAgICBjb25zdCBvcGVuRXhwYW5kID0gKCkgPT4ge1xyXG4gICAgICAgIGlmKG9wZW5pbmdUaW1lcikge1xyXG4gICAgICAgICAgICBjbGVhclRpbWVvdXQob3BlbmluZ1RpbWVyKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgc2V0T3BlbmluZ1RpbWVyKG51bGwpO1xyXG4gICAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZCgnZXhwYW5kLW1lbnUtb3BlbicpO1xyXG4gICAgICAgIHNldFNlbGVjdGVkKGNhdGVnb3J5KTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBjbG9zZUV4cGFuZCA9ICgpID0+IHtcclxuICAgICAgICBpZihvcGVuaW5nVGltZXIpIHtcclxuICAgICAgICAgICAgY2xlYXJUaW1lb3V0KG9wZW5pbmdUaW1lcik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNldE9wZW5pbmdUaW1lcihudWxsKTtcclxuICAgICAgICBidXR0b25SZWYuY3VycmVudC5jbGFzc0xpc3QuYWRkKCdjbG9zaW5nJyk7XHJcbiAgICAgICAgaWYoZXhwYW5kUmVmLmN1cnJlbnQpIHtcclxuICAgICAgICAgICAgZXhwYW5kUmVmLmN1cnJlbnQuYWRkRXZlbnRMaXN0ZW5lcignYW5pbWF0aW9uZW5kJywgZSA9PiB7XHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5yZW1vdmUoJ2V4cGFuZC1tZW51LW9wZW4nKTtcclxuICAgICAgICAgICAgICAgIGJ1dHRvblJlZi5jdXJyZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2Nsb3NpbmcnKTtcclxuICAgICAgICAgICAgICAgIHNldFNlbGVjdGVkKG51bGwpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgaGFuZGxlTW91c2VPdmVyID0gZSA9PiB7XHJcbiAgICAgICAgaWYoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdoZWFkZXItYm90dG9tLWxpbmsnKSkge1xyXG4gICAgICAgICAgICBzZXRPcGVuaW5nVGltZXIoXHJcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBvcGVuRXhwYW5kKCk7XHJcbiAgICAgICAgICAgICAgICB9LCA0MDApXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgb3BlbkV4cGFuZCgpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBjb25zdCBoYW5kbGVNb3VzZUxlYXZlID0gKCkgPT4ge1xyXG4gICAgICAgIHNldE9wZW5pbmdUaW1lcihcclxuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjbG9zZUV4cGFuZCgpO1xyXG4gICAgICAgICAgICB9LCAzMDApXHJcbiAgICAgICAgKTtcclxuICAgIH07XHJcbiAgICBjb25zdCBoYW5kbGVLZXlEb3duID0gZSA9PiB7XHJcbiAgICAgICAgaWYoZS5rZXkgPT09ICdFbnRlcicpIHtcclxuICAgICAgICAgICAgaWYoIXNlbGVjdGVkKSB7XHJcbiAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgICAgICAgICAgb3BlbkV4cGFuZCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIGNvbnN0IGhhbmRsZUNsaWNrID0gKCkgPT4ge1xyXG4gICAgICAgIGlmKHNlbGVjdGVkKSB7XHJcbiAgICAgICAgICAgIGNsb3NlRXhwYW5kKCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgb3BlbkV4cGFuZCgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBidXR0b25SZWYgPSB1c2VSZWYobnVsbCk7XHJcbiAgICBjb25zdCBleHBhbmRSZWYgPSB1c2VSZWYobnVsbCk7XHJcbiAgICBcclxuXHJcbiAgICAvL1dJVEhPVVRfU0hPUCAvLyDDoCBzdXBwciBcclxuICAgIGNvbnN0IFt3aXRob3V0U2hvcEZsYXNoSXNPcGVuLCBvcGVuV2l0aG91dFNob3BGbGFzaCwgY2xvc2VXaXRob3V0U2hvcEZsYXNoXSA9IHVzZU9wZW5TdGF0ZShmYWxzZSk7XHJcbiAgICBcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIC8vV0lUSE9VVF9TSE9QIC8vIMOgIHN1cHByIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuICAgICAgICAgICAgICAgIDxGbGFzaFxyXG4gICAgICAgICAgICAgICAgICAgIGJ1dHRvbj17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9e3QoJ3VybC5yZWNpcGUuaW5kZXgnLCB7bnM6ICd1cmxzJ30pfT57dCgnb3VyX3JlY2lwZXMnLCB7bnM6ICdtZXNzYWdlcyd9KX08L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlzT3Blbj17d2l0aG91dFNob3BGbGFzaElzT3Blbn1cclxuICAgICAgICAgICAgICAgICAgICBjbG9zZT17Y2xvc2VXaXRob3V0U2hvcEZsYXNofVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICB7dCgnaW5mby5zaG9wX3dpbGxfYmVfb3Blbl9zb29uJywge25zOiAnbWVzc2FnZXMnfSl9XHJcbiAgICAgICAgICAgICAgICA8L0ZsYXNoPlxyXG4gICAgICAgICAgICAgICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgPGRpdiByb2xlPVwiYnV0dG9uXCIgdGFiSW5kZXg9XCIwXCIgY2xhc3NOYW1lPXsnaGVhZGVyLWJvdHRvbS1saW5rJyArICcgbGFuZy0nICsgaTE4bi5sYW5ndWFnZSArIChzZWxlY3RlZCA/ICcgc2VsZWN0ZWQnOiAnJyl9IFxyXG4gICAgICAgICAgICAgICAgb25Nb3VzZU92ZXI9e2hhbmRsZU1vdXNlT3Zlcn0gb25DbGljaz17aGFuZGxlQ2xpY2t9IG9uS2V5RG93bj17aGFuZGxlS2V5RG93bn0gb25Nb3VzZUxlYXZlPXtoYW5kbGVNb3VzZUxlYXZlfVxyXG4gICAgICAgICAgICAgICAgcmVmPXtidXR0b25SZWZ9IFxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgIHsgY2F0ZWdvcnkubmFtZVtpMThuLmxhbmd1YWdlXSB9XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIChzZWxlY3RlZCAmJiBjYXRlZ29yeS5zdWJDYXRlZ29yaWVzLmxlbmd0aCA+IDApICYmIChcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlci1ib3R0b20tZXhwYW5kXCIgcmVmPXtleHBhbmRSZWZ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Q2xvc2VCdXR0b24gYWRkaXRpb25hbENsYXNzPVwiaGVhZGVyLWJvdHRvbS1leHBhbmQtY2xvc2VyXCIgb25DbGljaz17Y2xvc2VFeHBhbmR9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxTdWJDYXRlZ29yeU1lbnUgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXRlZ29yeT17Y2F0ZWdvcnl9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3ViQ2F0ZWdvcmllcz17Y2F0ZWdvcnkuc3ViQ2F0ZWdvcmllc30gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL1dJVEhPVVRfU0hPUCAvLyDDoCBzdXBwclxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3BlbldpdGhvdXRTaG9wRmxhc2g9e29wZW5XaXRob3V0U2hvcEZsYXNofSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8Lz5cclxuICAgIClcclxufSk7IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IGkxOG4gZnJvbSAnLi4vLi4vLi4vLi4vLi4vZW50cnlwb2ludHMvaTE4bic7XHJcblxyXG5leHBvcnQgY29uc3QgU3ViQ2F0ZWdvcnlMaW5rID0gKHtzdWJDYXRlZ29yeSwgb25DbGlja30pID0+IHtcclxuXHJcbiAgICAvL1dJVEhPVVRfU0hPUCAvLyBzdXBwciBvbkNsaWNrXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8bGkgY2xhc3NOYW1lPVwic3ViY2F0ZWdvcnktaXRlbVwiPlxyXG4gICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJzdWJjYXRlZ29yeS1saW5rXCIgaHJlZj17c3ViQ2F0ZWdvcnkudGFyZ2V0W2kxOG4ubGFuZ3VhZ2VdfSBvbkNsaWNrPXtvbkNsaWNrfT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3ViY2F0ZWdvcnktaXRlbS1pbWctd3JhcHBlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwic3ViY2F0ZWdvcnktaXRlbS1pbWdcIiBzcmM9eycvaW1nL2NhdGVnb3JpZXMvJytzdWJDYXRlZ29yeS5waWN0dXJlLnBhdGh9IGFsdD17c3ViQ2F0ZWdvcnkucGljdHVyZS5hbHRbaTE4bi5sYW5ndWFnZV19IC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInN1YmNhdGVnb3J5LWl0ZW0tdGV4dFwiPntzdWJDYXRlZ29yeS5uYW1lW2kxOG4ubGFuZ3VhZ2VdfTwvc3Bhbj5cclxuICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgIDwvbGk+XHJcbiAgICApXHJcbn0iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBTdWJDYXRlZ29yeUxpbmsgfSBmcm9tICcuL1N1YkNhdGVnb3J5TGluayc7XHJcbmltcG9ydCB7IHVzZVRyYW5zbGF0aW9uIH0gZnJvbSAncmVhY3QtaTE4bmV4dCc7XHJcbmltcG9ydCB7IHVzZUdldFVzZXIgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9DdXN0b21Ib29rL3VzZUdldFVzZXInO1xyXG5cclxuZXhwb3J0IGNvbnN0IFN1YkNhdGVnb3J5TWVudSA9ICh7Y2F0ZWdvcnksIHN1YkNhdGVnb3JpZXMsIG9wZW5XaXRob3V0U2hvcEZsYXNofSkgPT4ge1xyXG4gICAgY29uc3Qge3QsIGkxOG59ID0gdXNlVHJhbnNsYXRpb24oJ21lc3NhZ2VzJyk7IFxyXG5cclxuICAgIC8vV0lUSE9VVF9TSE9QIC8vIGEgc3VwcHJpbWVyIC8vIHN1cHByaW1lciBvcGVuV2l0aG91dFNob3BGbGFzaCBlbiBoYXV0IGRhbnMgcHJvcHMgYXVzc2lcclxuICAgIGNvbnN0IHt1c2VyLCB1cGRhdGVVc2VyfSA9IHVzZUdldFVzZXIoKTtcclxuICAgIGNvbnN0IGhhbmRsZUNsaWNrID0gZSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coY2F0ZWdvcnkpO1xyXG4gICAgICAgIGlmKGNhdGVnb3J5Lm5hbWUuZW4gPT09ICdSZWNpcGVzJykge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKCF1c2VyIHx8ICFbJ2NvbnN1bWVyQGVtYWlsLmNvbScsICdwcm9AZW1haWwuY29tJywgJ3ZlbmRvckBlbWFpbC5jb20nXS5pbmNsdWRlcyh1c2VyLmVtYWlsKSkge1xyXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIG9wZW5XaXRob3V0U2hvcEZsYXNoKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPG5hdiBjbGFzc05hbWU9XCJoZWFkZXItYm90dG9tLXN1Ym5hdlwiPlxyXG4gICAgICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHN1YkNhdGVnb3JpZXMubWFwKFxyXG4gICAgICAgICAgICAgICAgICAgIHN1YkNhdGVnb3J5ID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPFN1YkNhdGVnb3J5TGluayBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17c3ViQ2F0ZWdvcnkuaWR9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3ViQ2F0ZWdvcnk9e3N1YkNhdGVnb3J5fSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vV0lUSE9VVF9TSE9QIC8vIMOgIHN1cHByXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVDbGlja31cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWFyY2gtbGlua1wiPlxyXG4gICAgICAgICAgICAgICAgPGEgXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1idXR0b24gYm9yZGVhdXggb3V0bGluZVwiIFxyXG4gICAgICAgICAgICAgICAgICAgIGhyZWY9e2NhdGVnb3J5LnRhcmdldFtpMThuLmxhbmd1YWdlXX1cclxuICAgICAgICAgICAgICAgICAgICAvL1dJVEhPVVRfU0hPUCAvLyDDoCBzdXBwclxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZUNsaWNrfVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICB7dCgnc2VlX2VudGlyZV9jYXRlZ29yeScsIHtjYXRlZ29yeTogY2F0ZWdvcnkubmFtZVtpMThuLmxhbmd1YWdlXX0pfVxyXG4gICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L25hdj5cclxuICAgIClcclxufSIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgQ2F0ZWdvcnlMaW5rIH0gZnJvbSAnLi9DYXRlZ29yeUxpbmsnO1xyXG5pbXBvcnQgJy4uLy4uLy4uLy4uL3N0eWxlcy9IZWFkZXIvSGVhZGVyQm90dG9tL2NhdGVnb3J5TWVudS5jc3MnO1xyXG5cclxuZXhwb3J0IGNvbnN0IENhdGVnb3J5TWVudSA9ICh7Y2F0ZWdvcmllc30pID0+IHtcclxuICAgIC8vc8OpbGVjdGlvbiBkZXMgY2F0w6lnb3JpZXNcclxuICAgIGNvbnN0IFtzZWxlY3RlZENhdGVnb3J5LCBzZXRTZWxlY3RlZENhdGVnb3J5XSA9IHVzZVN0YXRlKG51bGwpO1xyXG5cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxuYXYgY2xhc3NOYW1lPVwiaGVhZGVyLWJvdHRvbS1uYXZcIj5cclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgY2F0ZWdvcmllcy5tYXAoXHJcbiAgICAgICAgICAgICAgICAgICAgY2F0ZWdvcnkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Q2F0ZWdvcnlMaW5rIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtjYXRlZ29yeS5pZH0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXRlZ29yeT17Y2F0ZWdvcnl9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWQ9e3NlbGVjdGVkQ2F0ZWdvcnkgPT09IGNhdGVnb3J5fSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFNlbGVjdGVkPXtzZXRTZWxlY3RlZENhdGVnb3J5fSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIDwvbmF2PlxyXG4gICAgKVxyXG59XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbiIsImltcG9ydCBSZWFjdCwgeyBtZW1vIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBDYXRlZ29yeU1lbnUgfSBmcm9tICcuL0NhdGVnb3J5TWVudSc7XHJcbmltcG9ydCAnLi4vLi4vLi4vc3R5bGVzL0hlYWRlci9IZWFkZXJCb3R0b20vaW5kZXguY3NzJztcclxuXHJcbmV4cG9ydCBjb25zdCBIZWFkZXJCb3R0b20gPSBtZW1vKCh7Y2F0ZWdvcmllcywgYWN0aXZlQ2F0ZWdvcnksIGFjdGl2ZVN1YkNhdGVnb3J5fSkgPT4ge1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXItYm90dG9tXCI+XHJcbiAgICAgICAgICAgIDxDYXRlZ29yeU1lbnUgY2F0ZWdvcmllcz17Y2F0ZWdvcmllc30gLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufSk7XHJcblxyXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyB1c2VUcmFuc2xhdGlvbiB9IGZyb20gJ3JlYWN0LWkxOG5leHQnO1xyXG5cclxuZXhwb3J0IGNvbnN0IEhlYWRlclB1YiA9ICgpID0+IHtcclxuICAgIGNvbnN0IHt0fSA9IHVzZVRyYW5zbGF0aW9uKCdtZXNzYWdlcycpO1xyXG4gICAgXHJcbiAgICAvLyBjb25zdCBwdWJSZWYgPSB1c2VSZWYobnVsbCk7XHJcbiAgICAvLyBjb25zdCBwdWJXcmFwcGVyUmVmID0gdXNlUmVmKG51bGwpO1xyXG4gICAgLy8gY29uc3QgW3Bvc1gsIHNldFBvc1hdID0gdXNlU3RhdGUoMCk7XHJcbiAgICAvLyB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgLy8gICAgIGlmKHB1YldyYXBwZXJSZWYuY3VycmVudCkge1xyXG4gICAgLy8gICAgICAgICBjb25zdCB3aWR0aCA9IHB1YlJlZi5jdXJyZW50Lm9mZnNldFdpZHRoO1xyXG4gICAgLy8gICAgICAgICBpZigod2lkdGggKyA0MCkgPiB3aW5kb3cuaW5uZXJXaWR0aCkge1xyXG4gICAgLy8gICAgICAgICAgICAgLy9zaSBsZSB0ZXh0ZSBkw6lwYXNzZSBkZSBsJ8OpY3JhbiBvbiBsZSBmYWl0IGF2YW5jZXIgZXQgb24gbCdhbGlnbmUgw6AgZ2F1Y2hlXHJcbiAgICAvLyAgICAgICAgICAgICBwdWJXcmFwcGVyUmVmLmN1cnJlbnQuc3R5bGUuanVzdGlmeUNvbnRlbnQgPSAnZmxleC1zdGFydCc7XHJcbiAgICAvLyAgICAgICAgICAgICAvL3BvdXIgZmFpcmUgYXJyaXZlciBsZSB0ZXh0ZSBkZSBsYSBkcm9pdGUgYXUgZMOpYnV0XHJcbiAgICAvLyAgICAgICAgICAgICBzZXRQb3NYKHdpbmRvdy5pbm5lcldpZHRoICsgMjApO1xyXG4gICAgLy8gICAgICAgICAgICAgY29uc3QgaW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgc2V0UG9zWChwcmV2UG9zID0+IHtcclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgaWYocHJldlBvcyA8ICgwIC0gd2lkdGgpKSB7XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gd2luZG93LmlubmVyV2lkdGg7XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHByZXZQb3MgLSAxO1xyXG4gICAgLy8gICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgLy8gICAgICAgICAgICAgfSwgOCk7XHJcbiAgICAvLyAgICAgICAgICAgICByZXR1cm4gKCkgPT4gY2xlYXJJbnRlcnZhbChpbnRlcnZhbCk7XHJcbiAgICAvLyAgICAgICAgIH1cclxuICAgIC8vICAgICB9XHJcbiAgICAvLyB9LCBbcHViV3JhcHBlclJlZi5jdXJyZW50XSk7XHJcblxyXG4gICAgLy8gdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIC8vICAgICBwdWJSZWYuY3VycmVudC5zdHlsZS5sZWZ0ID0gcG9zWCArICdweCc7XHJcbiAgICAvLyB9LCBbcG9zWF0pO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgLy8gPGRpdiByZWY9e3B1YldyYXBwZXJSZWZ9IGNsYXNzTmFtZT1cImhlYWRlci1wdWJcIj5cclxuICAgICAgICAvLyAgICAgPHAgcmVmPXtwdWJSZWZ9Pnt0KCdoZWFkZXJfcHViJyl9PC9wPlxyXG4gICAgICAgIC8vIDwvZGl2PlxyXG5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlci1wdWJcIj5cclxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiaGVhZGVyLXB1Yi1zbWFsbFwiPnt0KCdoZWFkZXJfcHViX3NtYWxsJyl9PC9wPlxyXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJoZWFkZXItcHViLWxhcmdlXCI+e3QoJ2hlYWRlcl9wdWInKX08L3A+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn0iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBSb2xlQmFkZ2UgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9VSS9CYWRnZS9Sb2xlQmFkZ2UnO1xyXG5pbXBvcnQgeyBBY2NvdW50QmFkZ2UgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9VSS9CYWRnZS9BY2NvdW50QmFkZ2UnO1xyXG5pbXBvcnQgeyB0IH0gZnJvbSAnaTE4bmV4dCc7XHJcblxyXG5leHBvcnQgY29uc3QgQWNjb3VudENhcmRIZWFkZXIgPSAoe3VzZXJ9KSA9PiB7XHJcblxyXG4gICAgY29uc3QgYWNjb3VudFBhdGggPSAodXNlci5yb2xlcy5pbmNsdWRlcygnUk9MRV9WRU5ET1InKSAmJiB1c2VyLmNvbXBhbnkpID8gdCgndXJsLnZlbmRvckFjY291bnQuaW5kZXgnLCB7bnM6ICd1cmxzJ30pOiB0KCd1cmwuY3VzdG9tZXJBY2NvdW50LmluZGV4Jywge25zOiAndXJscyd9KTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWNjb3VudC1jYXJkLWhlYWRlclwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFjY291bnQtY2FyZC10ZXh0XCI+XHJcbiAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJib3gtbGlua1wiIGhyZWY9e2FjY291bnRQYXRofT5cclxuICAgICAgICAgICAgICAgICAgICA8QWNjb3VudENhcmRUaXRsZSB1c2VyPXt1c2VyfSAvPlxyXG4gICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5cclxuXHJcbmNvbnN0IEFjY291bnRDYXJkVGl0bGUgPSAoe3VzZXJ9KSA9PiB7XHJcblxyXG4gICAgaWYodXNlci5yb2xlcy5pbmNsdWRlcygnUk9MRV9QUk8nKSkge1xyXG4gICAgICAgIHJldHVybiA8UHJvQWNjb3VudENhcmRUaXRsZSB1c2VyPXt1c2VyfSAvPlxyXG4gICAgfSBlbHNlIGlmKHVzZXIucm9sZXMuaW5jbHVkZXMoJ1JPTEVfQURNSU4nKSkge1xyXG4gICAgICAgIHJldHVybiA8QWRtaW5BY2NvdW50Q2FyZFRpdGxlIHVzZXI9e3VzZXJ9IC8+XHJcbiAgICB9XHJcbiAgICByZXR1cm4gPFVzZXJBY2NvdW50Q2FyZFRpdGxlIHVzZXI9e3VzZXJ9IC8+XHJcbn1cclxuICAgIFxyXG5cclxuY29uc3QgUHJvQWNjb3VudENhcmRUaXRsZSA9ICh7dXNlcn0pID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhY2NvdW50LWNhcmQtaGVhZGVyLXRpdGxlXCI+XHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdXNlci5jb21wYW55Py5sb2dvID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cImFjY291bnQtY2FyZC1sb2dvXCIgc3JjPXt1c2VyLmNvbXBhbnkubG9nby5wYXRofSBhbHQ9e3VzZXIuY29tcGFueS5sb2dvLmFsdH0gLz5cclxuICAgICAgICAgICAgICAgICAgICApOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxBY2NvdW50QmFkZ2UgdXNlcj17dXNlcn0gLz5cclxuICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFjY291bnQtY2FyZC1oZWFkZXItdGl0bGUtdGV4dFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWNjb3VudC1jYXJkLWhlYWRlci1zdHJvbmdcIj57dXNlci5jb21wYW55LnVzdWFsTmFtZX08L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8Um9sZUJhZGdlIHJvbGVzPXt1c2VyLnJvbGVzfSAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWNjb3VudC1jYXJkLWhlYWRlci1zdWJ0aXRsZS10ZXh0XCI+e3VzZXIuZW1haWx9PC9kaXY+XHJcbiAgICAgICAgPC8+XHJcbiAgICAgICAgXHJcbiAgICApXHJcbn1cclxuXHJcbmNvbnN0IEFkbWluQWNjb3VudENhcmRUaXRsZSA9ICh7dXNlcn0pID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhY2NvdW50LWNhcmQtaGVhZGVyLXRpdGxlXCI+XHJcbiAgICAgICAgICAgICAgICA8QWNjb3VudEJhZGdlIHVzZXI9e3VzZXJ9IC8+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFjY291bnQtY2FyZC1oZWFkZXItdGl0bGUtdGV4dFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FwaXRhbGl6ZVwiPnt0KHVzZXIuY2l2aWxpdHksIHtuczogJ2NvbmZpZ3MnfSl9IHt1c2VyLmZpcnN0TmFtZX0ge3VzZXIubGFzdE5hbWV9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPFJvbGVCYWRnZSByb2xlcz17dXNlci5yb2xlc30gLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhY2NvdW50LWNhcmQtaGVhZGVyLXN1YnRpdGxlLXRleHRcIj57dXNlci5lbWFpbH08L2Rpdj5cclxuICAgICAgICA8Lz5cclxuICAgIClcclxufVxyXG5cclxuY29uc3QgVXNlckFjY291bnRDYXJkVGl0bGUgPSAoe3VzZXJ9KSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWNjb3VudC1jYXJkLWhlYWRlci10aXRsZVwiPlxyXG4gICAgICAgICAgICA8QWNjb3VudEJhZGdlIHVzZXI9e3VzZXJ9IC8+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWNjb3VudC1jYXJkLWhlYWRlci10aXRsZS10ZXh0XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcGl0YWxpemVcIj57dCh1c2VyLmNpdmlsaXR5LCB7bnM6ICdjb25maWdzJ30pfSB7dXNlci5maXJzdE5hbWV9IHt1c2VyLmxhc3ROYW1lfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdj57dXNlci5lbWFpbH08L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgUmlnaHRBcnJvd0Jhckljb24gfSBmcm9tICcuLi8uLi8uLi8uLi8uLi8uLi9VSS9JY29uL0Fycm93cy9SaWdodEFycm93QmFySWNvbic7XHJcbmltcG9ydCB7IHQgfSBmcm9tICdpMThuZXh0JztcclxuXHJcbmV4cG9ydCBjb25zdCBDdXN0b21lck1lbnUgPSAoKSA9PiB7XHJcbiAgICBcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhY2NvdW50LWNhcmQtY29udHJvbHNcIj5cclxuICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiYWNjb3VudC1jYXJkLWxpbmsgaS10ZXh0XCIgaHJlZj17dCgndXJsLmN1c3RvbWVyQWNjb3VudC5kZXRhaWxzJywge25zOiAndXJscyd9KX0+XHJcbiAgICAgICAgICAgICAgICA8UmlnaHRBcnJvd0Jhckljb24gLz5cclxuICAgICAgICAgICAgICAgIDxzcGFuPnt0KCdjdXN0b21lckFjY291bnQuZGV0YWlscy5sYWJlbCcsIHtuczogJ3JvdXRlcyd9KX08L3NwYW4+ICAgIFxyXG4gICAgICAgICAgICA8L2E+IFxyXG4gICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJhY2NvdW50LWNhcmQtbGluayBpLXRleHRcIiBocmVmPXt0KCd1cmwuY3VzdG9tZXJBY2NvdW50LnB1cmNoYXNlJywge25zOiAndXJscyd9KX0+XHJcbiAgICAgICAgICAgICAgICA8UmlnaHRBcnJvd0Jhckljb24gLz5cclxuICAgICAgICAgICAgICAgIDxzcGFuPnt0KCdjdXN0b21lckFjY291bnQucHVyY2hhc2UubGFiZWwnLCB7bnM6ICdyb3V0ZXMnfSl9PC9zcGFuPiAgICBcclxuICAgICAgICAgICAgPC9hPiBcclxuICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiYWNjb3VudC1jYXJkLWxpbmsgaS10ZXh0XCIgaHJlZj17dCgndXJsLmN1c3RvbWVyQWNjb3VudC5hZGRyZXNzJywge25zOiAndXJscyd9KX0+XHJcbiAgICAgICAgICAgICAgICA8UmlnaHRBcnJvd0Jhckljb24gLz5cclxuICAgICAgICAgICAgICAgIDxzcGFuPnt0KCdjdXN0b21lckFjY291bnQuYWRkcmVzcy5sYWJlbCcsIHtuczogJ3JvdXRlcyd9KX08L3NwYW4+ICAgIFxyXG4gICAgICAgICAgICA8L2E+IFxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgUmlnaHRBcnJvd0Jhckljb24gfSBmcm9tICcuLi8uLi8uLi8uLi8uLi8uLi9VSS9JY29uL0Fycm93cy9SaWdodEFycm93QmFySWNvbic7XHJcbmltcG9ydCB7IFdhcm5pbmdCYWRnZSB9IGZyb20gJy4uLy4uLy4uLy4uLy4uLy4uL1VJL0JhZGdlL1dhcm5pbmdCYWRnZSc7XHJcbmltcG9ydCB7IHQgfSBmcm9tICdpMThuZXh0JztcclxuXHJcbmV4cG9ydCBjb25zdCBWZW5kb3JNZW51ID0gKHt2ZW5kb3J9KSA9PiB7XHJcbiAgICBcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhY2NvdW50LWNhcmQtY29udHJvbHMgdmVuZG9yLWNvbnRyb2xzXCI+XHJcbiAgICAgICAgICAgIHsgLypzaSBsZSB2ZW5kZXVyIG4nYSBwYXMgZWZmZWN0dcOpIGxhIHbDqXJpZmljYXRpb24gc3RyaXBlLCBhbG9ycyBvbiBtZXQgdW4gd2FybmluZ0JhZGdlIDEgZXQgbGUgbGllbiBkZXRhaWxzIHBvaW50ZSB2ZXJzIGxhIHbDqXJpZmljYXRpb24gc3RyaXBlKi8gfVxyXG4gICAgICAgICAgICA8YSBcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImFjY291bnQtY2FyZC1saW5rIGktdGV4dFwiIFxyXG4gICAgICAgICAgICAgICAgaHJlZj17IXZlbmRvci5zdHJpcGVDb25maXJtZWQgPyB0KCd1cmwudmVuZG9yQWNjb3VudC5kZXRhaWxzLnBheW1lbnQnLCB7bnM6ICd1cmxzJ30pOiB0KCd1cmwudmVuZG9yQWNjb3VudC5kZXRhaWxzLmluZGV4Jywge25zOiAndXJscyd9KX1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxSaWdodEFycm93QmFySWNvbiAvPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4+e3QoJ3ZlbmRvckFjY291bnQuZGV0YWlscy5pbmRleC5sYWJlbCcsIHtuczogJ3JvdXRlcyd9KX08L3NwYW4+ICAgXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgIXZlbmRvci5zdHJpcGVDb25maXJtZWQgJiYgPFdhcm5pbmdCYWRnZSBudW1iZXI9ezF9IC8+XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIDwvYT4gXHJcbiAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImFjY291bnQtY2FyZC1saW5rIGktdGV4dCBiYWRnZS1vd25lclwiIGhyZWY9e3QoJ3VybC52ZW5kb3JBY2NvdW50LmJ1eWVyU3BhY2UuaW5kZXgnLCB7bnM6ICd1cmxzJ30pfT5cclxuICAgICAgICAgICAgICAgIDxSaWdodEFycm93QmFySWNvbiAvPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4+e3QoJ3ZlbmRvckFjY291bnQuYnV5ZXJTcGFjZS5pbmRleC5sYWJlbCcsIHtuczogJ3JvdXRlcyd9KX08L3NwYW4+ICBcclxuICAgICAgICAgICAgPC9hPiBcclxuICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiYWNjb3VudC1jYXJkLWxpbmsgaS10ZXh0XCIgaHJlZj17dCgndXJsLnZlbmRvckFjY291bnQudmVuZG9yU3BhY2UuaW5kZXgnLCB7bnM6ICd1cmxzJ30pfT5cclxuICAgICAgICAgICAgICAgIDxSaWdodEFycm93QmFySWNvbiAvPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4+e3QoJ3ZlbmRvckFjY291bnQudmVuZG9yU3BhY2UuaW5kZXgubGFiZWwnLCB7bnM6ICdyb3V0ZXMnfSl9PC9zcGFuPiAgICBcclxuICAgICAgICAgICAgPC9hPiBcclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufSIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IExpbmtCdXR0b24gfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9VSS9CdXR0b24vTGlua0J1dHRvbic7XHJcbmltcG9ydCB7IHVzZVRyYW5zbGF0aW9uIH0gZnJvbSAncmVhY3QtaTE4bmV4dCc7XHJcblxyXG5leHBvcnQgY29uc3QgQW5vbnltb3VzQWNjb3VudENhcmRCb2R5ID0gKCkgPT4ge1xyXG4gICAgY29uc3Qge3R9ID0gdXNlVHJhbnNsYXRpb24oJ21lc3NhZ2VzJyk7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFjY291bnQtY2FyZC1ib2R5IGVtcHR5XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWNjb3VudC1jYXJkLXRleHRcIj5cclxuICAgICAgICAgICAgICAgIDxwPnt0KCdpbmZvLm5vdF9sb2dnZWQnKX08L3A+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8TGlua0J1dHRvbiBhZGRpdGlvbmFsQ2xhc3M9XCJib3JkZWF1eFwiIGhyZWY9e3QoJ3VybC5zZWN1cml0eS5sb2dpbicsIHtuczogJ3VybHMnfSl9Pnt0KCdsb2dpbicpfTwvTGlua0J1dHRvbj4gXHJcbiAgICAgICAgICAgIDxMaW5rQnV0dG9uIGFkZGl0aW9uYWxDbGFzcz1cImNhbmNlbFwiIGhyZWY9e3QoJ3VybC5zZWN1cml0eS5yZWdpc3RlcicsIHtuczogJ3VybHMnfSl9Pnt0KCdyZWdpc3RyYXRpb24nKX08L0xpbmtCdXR0b24+IFxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59IiwiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgTG9hZGVyIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vVUkvSWNvbi9Mb2FkZXInO1xyXG5pbXBvcnQgeyBMb2dvdXRCdXR0b24gfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9VSS9CdXR0b24vTG9nb3V0QnV0dG9uJztcclxuaW1wb3J0IHsgQW5vbnltb3VzQWNjb3VudENhcmRCb2R5IH0gZnJvbSAnLi9Bbm9ueW1vdXNBY2NvdW50Q2FyZEJvZHknO1xyXG5pbXBvcnQgeyBBY2NvdW50Q2FyZEhlYWRlciB9IGZyb20gJy4vQWNjb3VudENhcmRIZWFkZXInO1xyXG5pbXBvcnQgeyBDdXN0b21lck1lbnUgfSBmcm9tICcuL0FjY291bnRDYXJkTWVudS9DdXN0b21lck1lbnUnO1xyXG5pbXBvcnQgeyBWZW5kb3JNZW51IH0gZnJvbSAnLi9BY2NvdW50Q2FyZE1lbnUvVmVuZG9yTWVudSc7XHJcblxyXG5leHBvcnQgY29uc3QgQWNjb3VudENhcmQgPSAoe2Nsb3NlLCB1c2VyLCB1cGRhdGVVc2VyfSkgPT4ge1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgZG9jdW1lbnQuYm9keS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNsb3NlKTtcclxuICAgICAgICByZXR1cm4gKCkgPT4gZG9jdW1lbnQuYm9keS5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIGNsb3NlKTtcclxuICAgIH0sIFtdKTtcclxuXHJcbiAgICBjb25zdCBoYW5kbGVDbGljayA9IGUgPT4ge1xyXG4gICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICB9XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICB1cGRhdGVVc2VyKCk7XHJcbiAgICB9LCBbXSk7XHJcblxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhY2NvdW50LWNhcmQtd3JhcHBlclwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17J2FjY291bnQtY2FyZCcgKyAodXNlciA/ICcgYWNjb3VudC1jYXJkLWxvZ2dlZCc6ICcnKX0gb25DbGljaz17aGFuZGxlQ2xpY2t9PlxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHVzZXIgPT09IG51bGwgJiYgPExvYWRlciBhZGRpdGlvbmFsQ2xhc3M9XCJtYWluLWxvYWRlclwiIGxhbmc9XCJlblwiIC8+XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdXNlciA9PT0gZmFsc2UgJiYgPEFub255bW91c0FjY291bnRDYXJkQm9keSAvPlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHVzZXIgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFjY291bnRDYXJkSGVhZGVyIHVzZXI9e3VzZXJ9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKHVzZXIucm9sZXMuaW5jbHVkZXMoJ1JPTEVfVkVORE9SJykgJiYgdXNlci5jb21wYW55KSA/IDxWZW5kb3JNZW51IHZlbmRvcj17dXNlcn0gLz46IDxDdXN0b21lck1lbnUgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWNjb3VudC1jYXJkLWZvb3RlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMb2dvdXRCdXR0b24gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59IiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyB1c2VPcGVuU3RhdGUgfSBmcm9tICcuLi8uLi8uLi8uLi9DdXN0b21Ib29rL3N0YXRlL3VzZU9wZW5TdGF0ZSc7XHJcbmltcG9ydCB7IEFjY291bnRCdXR0b24gfSBmcm9tICcuLi8uLi8uLi8uLi9VSS9CdXR0b24vQWNjb3VudEJ1dHRvbic7XHJcbmltcG9ydCAnLi4vLi4vLi4vLi4vc3R5bGVzL2hlYWRlci9IZWFkZXJUb3AvYWNjb3VudENhcmQuY3NzJztcclxuaW1wb3J0IHsgdXNlVG91Y2hpbmdMaXN0ZW5lciB9IGZyb20gJy4uLy4uLy4uLy4uL0N1c3RvbUhvb2svbGlzdGVuZXIvdXNlVG91Y2hpbmdMaXN0ZW5lcic7XHJcbmltcG9ydCB7IFdhcm5pbmdCYWRnZSB9IGZyb20gJy4uLy4uLy4uLy4uL1VJL0JhZGdlL1dhcm5pbmdCYWRnZSc7XHJcbmltcG9ydCB7IEFjY291bnRDYXJkIH0gZnJvbSAnLi9BY2NvdW50Q2FyZCc7XHJcblxyXG5cclxuLyoqXHJcbiAqIFxyXG4gKiBAcGFyYW0ge251bWJlcn0gdGltZW91dCAobXMpXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgdXNlVGltZXIgPSAodGltZW91dCA9IDMwMCkgPT4ge1xyXG4gICAgY29uc3QgW3RpbWVyLCBzZXRUaW1lcl0gPSB1c2VTdGF0ZShudWxsKTtcclxuICAgIGNvbnN0IGNsZWFyVGltZXIgPSAoKSA9PiB7XHJcbiAgICAgICAgaWYodGltZXIpIHtcclxuICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHRpbWVyKTtcclxuICAgICAgICAgICAgc2V0VGltZXIobnVsbCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgY29uc3Qgc3RhcnRUaW1lciA9ICh0b0RvKSA9PiB7XHJcbiAgICAgICAgc2V0VGltZXIoXHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdG9EbygpO1xyXG4gICAgICAgICAgICB9LCB0aW1lb3V0KVxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gW3N0YXJ0VGltZXIsIGNsZWFyVGltZXJdO1xyXG59XHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IEFjY291bnRDb250cm9sID0gKHt1c2VyLCB1cGRhdGVVc2VyfSkgPT4ge1xyXG5cclxuICAgIGNvbnN0IFtpc09wZW4sIG9wZW4sIGNsb3NlXSA9IHVzZU9wZW5TdGF0ZShmYWxzZSk7XHJcblxyXG4gICAgY29uc3QgW3N0YXJ0VGltZXIsIGNsZWFyVGltZXJdID0gdXNlVGltZXIoMzAwKTtcclxuICAgIGNvbnN0IGlzVG91Y2hpbmcgPSB1c2VUb3VjaGluZ0xpc3RlbmVyKCk7XHJcblxyXG4gICAgY29uc3QgaGFuZGxlQ2xpY2sgPSBlID0+IHtcclxuICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgIGlmKGlzT3Blbikge1xyXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIGNsb3NlKCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICBvcGVuKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGhhbmRsZU1vdXNlTGVhdmUgPSAoKSA9PiB7XHJcbiAgICAgICAgaWYoaXNUb3VjaGluZykge1xyXG4gICAgICAgICAgICByZXR1cm47IC8vIHNpIG9uIGVzdCBzdXIgw6ljcmFuIHRhY3RpbGUgb24gdmV1dCBwYXMgcXVlIMOnYSBpbnRlcmbDqHJlIGF2ZWMgbGUgb25DbGlja1xyXG4gICAgICAgIH1cclxuICAgICAgICBjbGVhclRpbWVyKCk7XHJcbiAgICAgICAgc3RhcnRUaW1lcihjbG9zZSk7XHJcbiAgICB9XHJcbiAgICBjb25zdCBoYW5kbGVNb3VzZU92ZXIgPSAoKSA9PiB7XHJcbiAgICAgICAgaWYoaXNUb3VjaGluZykge1xyXG4gICAgICAgICAgICByZXR1cm47IC8vIHNpIG9uIGVzdCBzdXIgw6ljcmFuIHRhY3RpbGUgb24gdmV1dCBwYXMgcXVlIMOnYSBpbnRlcmbDqHJlIGF2ZWMgbGUgb25DbGlja1xyXG4gICAgICAgIH1cclxuICAgICAgICBjbGVhclRpbWVyKCk7XHJcbiAgICAgICAgc3RhcnRUaW1lcihvcGVuKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxBY2NvdW50QnV0dG9uIGFkZGl0aW9uYWxDbGFzcz1cImFjY291bnQtb3BlbmVyIGJhZGdlLW93bmVyXCIgb25Nb3VzZU92ZXI9e2hhbmRsZU1vdXNlT3Zlcn0gb25Nb3VzZUxlYXZlPXtoYW5kbGVNb3VzZUxlYXZlfSBvbkNsaWNrPXtoYW5kbGVDbGlja30gdXNlcj17dXNlcn0+XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGlzT3BlbiAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPEFjY291bnRDYXJkIGNsb3NlPXtjbG9zZX0gdXNlcj17dXNlcn0gdXBkYXRlVXNlcj17dXBkYXRlVXNlcn0gLz5cclxuICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB1c2VyICYmIHVzZXIucm9sZXMuaW5jbHVkZXMoJ1JPTEVfVkVORE9SJykgJiYgIXVzZXIuc3RyaXBlQ29uZmlybWVkICYmIDxXYXJuaW5nQmFkZ2UgLz5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIDwvQWNjb3VudEJ1dHRvbj5cclxuICAgIClcclxufSIsImltcG9ydCBSZWFjdCwgeyBtZW1vLCB1c2VFZmZlY3QsIHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IE1pbnVzSWNvbiB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL1VJL0ljb24vUXVhbnRpdHkvTWludXNJY29uJztcclxuaW1wb3J0IHsgUGx1c0ljb24gfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9VSS9JY29uL1F1YW50aXR5L1BsdXNJY29uJztcclxuaW1wb3J0IHsgUmVtb3ZlQ29uZmlybSB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL1VJL1V0aWxzL1JlbW92ZUNvbmZpcm0nO1xyXG5pbXBvcnQgeyBQcmljZVNob3cgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9VSS9Qcm9kdWN0L1ByaWNlU2hvdyc7XHJcbmltcG9ydCB7IFRyYXNoQnV0dG9uIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vVUkvQnV0dG9uL1RyYXNoQnV0dG9uJztcclxuaW1wb3J0IHsgdXNlVHJhbnNsYXRpb24gfSBmcm9tICdyZWFjdC1pMThuZXh0JztcclxuXHJcbmV4cG9ydCBjb25zdCBDYXJ0TGluZSA9IG1lbW8oKHtjYXJ0TGluZSwgZXJyb3IsIHJlbW92ZSwgc2V0UXVhbnRpdHl9KSA9PiB7XHJcbiAgICBjb25zdCB7dH0gPSB1c2VUcmFuc2xhdGlvbignbWVzc2FnZXMnKTtcclxuXHJcbiAgICBjb25zdCBoYW5kbGVBZGQgPSBlID0+IHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgc2V0UXVhbnRpdHkoY2FydExpbmUucGFja2FnaW5nLmlkLCBjYXJ0TGluZS5xdWFudGl0eSArIDEpO1xyXG4gICAgICAgIC8vb2JsaWdhdG9pcmUgcG91ciBhZmZpY2hhZ2UgdGVtcG9yYWlyZSBkZSBsJ2VycmV1clxyXG4gICAgICAgIHJlbmRlckVycm9yKCk7XHJcbiAgICB9XHJcbiAgICBjb25zdCBoYW5kbGVMZXNzID0gZSA9PiB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIHNldFF1YW50aXR5KGNhcnRMaW5lLnBhY2thZ2luZy5pZCwgY2FydExpbmUucXVhbnRpdHkgLSAxKTtcclxuICAgICAgICAvL29ibGlnYXRvaXJlIHBvdXIgYWZmaWNoYWdlIHRlbXBvcmFpcmUgZGUgbCdlcnJldXJcclxuICAgICAgICByZW5kZXJFcnJvcigpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vb2JsaWdhdG9pcmUgcG91ciBsJ2FmZmljaGFnZSB0ZW1wb3JhaXJlIGRlIGwnZXJyZXVyXHJcbiAgICBjb25zdCBbZXJyb3JNZXNzYWdlLCBzZXRFcnJvck1lc3NhZ2VdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIHJlbmRlckVycm9yKCk7XHJcbiAgICB9LCBbZXJyb3JdKTtcclxuXHJcbiAgICBjb25zdCByZW5kZXJFcnJvciA9ICgpID0+IHtcclxuICAgICAgICBzZXRFcnJvck1lc3NhZ2UoZXJyb3IpO1xyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICBzZXRFcnJvck1lc3NhZ2UobnVsbCk7XHJcbiAgICAgICAgfSwgMjAwMCk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC8vcG91ciBtZXR0cmUgdW4gZXNwYWNlIHNvdXMgbGEgbGlnbmUgYXUgbW9tZW50IGR1IGNhcnQgcmVtb3ZpbmdcclxuICAgIGNvbnN0IGNhcnRMaW5lUmVmID0gdXNlUmVmKG51bGwpO1xyXG4gICAgLy9jb25maXJtYXRpb24gb24gY2FydCBpdGVtIHJlbW92ZVxyXG4gICAgY29uc3QgW3JlbW92aW5nLCBzZXRSZW1vdmluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBoYW5kbGVSZW1vdmVDbGljayA9ICgpID0+IHtcclxuICAgICAgICBzZXRSZW1vdmluZyh0cnVlKTtcclxuICAgICAgICBjYXJ0TGluZVJlZi5jdXJyZW50LmNsYXNzTGlzdC5hZGQoJ3JlbW92aW5nJyk7XHJcbiAgICB9XHJcbiAgICBjb25zdCBoYW5kbGVDb25maXJtUmVtb3ZlID0gKCkgPT4ge1xyXG4gICAgICAgIHJlbW92ZShjYXJ0TGluZS5wYWNrYWdpbmcuaWQpO1xyXG4gICAgfVxyXG4gICAgY29uc3QgaGFuZGxlQ2FuY2VsUmVtb3ZlID0gKCkgPT4ge1xyXG4gICAgICAgIHNldFJlbW92aW5nKGZhbHNlKTtcclxuICAgICAgICBjYXJ0TGluZVJlZi5jdXJyZW50LmNsYXNzTGlzdC5yZW1vdmUoJ3JlbW92aW5nJyk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9eydjYXJ0LWxpbmUtd3JhcHBlcicgKyAocmVtb3ZpbmcgPyAnIHJlbW92ZS1jb25maXJtJzogJycpfSByZWY9e2NhcnRMaW5lUmVmfT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FydC1saW5lXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiY2FydC1saW5lLWltZy1saW5rXCIgaHJlZj17Y2FydExpbmUucGFja2FnaW5nLnRhcmdldH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwiY2FydC1saW5lLWltZ1wiIHNyYz17Y2FydExpbmUucGFja2FnaW5nLnByb2R1Y3QuZmlyc3RQaWN0dXJlLnBhdGh9IGFsdD17Y2FydExpbmUucGFja2FnaW5nLnByb2R1Y3QuZmlyc3RQaWN0dXJlLmFsdH0gLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJ0LWxpbmUtYm9keVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwiY2FydC1saW5lLXRpdGxlXCI+PGEgaHJlZj17Y2FydExpbmUucGFja2FnaW5nLnRhcmdldH0+e2NhcnRMaW5lLnBhY2thZ2luZy5wcm9kdWN0LmRlc2lnbmF0aW9ufTwvYT48L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcnQtbGluZS1zdWItdGV4dFwiPntjYXJ0TGluZS5wYWNrYWdpbmcubGFiZWx9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FydC1saW5lLXRleHQgY2FydC1saW5lLXByaWNlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UHJpY2VTaG93IHByaWNlPXtjYXJ0TGluZS51bml0UHJpY2V9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcnQtbGluZS10ZXh0IHJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJ0LWxpbmUtcm93LWl0ZW0gY2FydC1saW5lLXF1YW50aXR5LXJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gZGlzYWJsZWQ9e3JlbW92aW5nfSBjbGFzc05hbWU9XCJjYXJ0LWxpbmUtbWludXNcIiBvbkNsaWNrPXtoYW5kbGVMZXNzfSBhcmlhLWxhYmVsPXt0KCdxdWFudGl0eV9taW51cycpfSB0aXRsZT17dCgncXVhbnRpdHlfbWludXMnKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNaW51c0ljb24gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJjYXJ0LWxpbmUtcXVhbnRpdHlcIj57Y2FydExpbmUucXVhbnRpdHl9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gZGlzYWJsZWQ9e3JlbW92aW5nfSBjbGFzc05hbWU9XCJjYXJ0LWxpbmUtcGx1c1wiIG9uQ2xpY2s9e2hhbmRsZUFkZH0gYXJpYS1sYWJlbD17dCgncXVhbnRpdHlfcGx1cycpfSB0aXRsZT17dCgncXVhbnRpdHlfcGx1cycpfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFBsdXNJY29uIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FydC1saW5lLXJvdy1pdGVtXCI+PFByaWNlU2hvdyBwcmljZT17Y2FydExpbmUudG90YWxQcmljZX0gLz48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yTWVzc2FnZSAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWVycm9yXCI+e2Vycm9yTWVzc2FnZX08L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxUcmFzaEJ1dHRvbiBhZGRpdGlvbmFsQ2xhc3M9XCJpY29uLWJ1dHRvbiBjYXJ0LWxpbmUtcmVtb3ZlclwiIG9uQ2xpY2s9e2hhbmRsZVJlbW92ZUNsaWNrfSAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVtb3ZpbmcgJiYgPFJlbW92ZUNvbmZpcm0gb25Db25maXJtPXtoYW5kbGVDb25maXJtUmVtb3ZlfSBjbG9zZT17aGFuZGxlQ2FuY2VsUmVtb3ZlfSAvPiBcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8L2xpPlxyXG4gICAgKVxyXG59KTsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBDYXJ0TGluZSB9IGZyb20gJy4vQ2FydExpbmUnO1xyXG5pbXBvcnQgeyBJbmRleFJldmlld1N0YXJzIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vVUkvU3RhcnMvSW5kZXhSZXZpZXdTdGFycyc7XHJcbmltcG9ydCB7IHVzZVRyYW5zbGF0aW9uIH0gZnJvbSAncmVhY3QtaTE4bmV4dCc7XHJcblxyXG5leHBvcnQgY29uc3QgQ2FydFZlbmRvckdyb3VwID0gKHtjYXJ0VmVuZG9yR3JvdXA6IHt2ZW5kb3IsIGNhcnRMaW5lc30sIHJlbW92ZSwgc2V0UXVhbnRpdHl9KSA9PiB7XHJcbiAgICBjb25zdCB7dH0gPSB1c2VUcmFuc2xhdGlvbignbWVzc2FnZXMnKTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FydC12ZW5kb3ItZ3JvdXBcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJ0LXZlbmRvci1ncm91cC10aXRsZVwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsZWZ0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAge3QoJ3NlbnRfYnknKX1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJjYXJ0LXZlbmRvci1ncm91cC10aXRsZS1saW5rIHdzLW5vd3JhcFwiIGhyZWY9e3ZlbmRvci50YXJnZXR9Pnt2ZW5kb3IuY29tcGFueS51c3VhbE5hbWV9PC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDxJbmRleFJldmlld1N0YXJzIG5vdGU9e3ZlbmRvci5yZXZpZXdOb3RlfSBjb3VudD17dmVuZG9yLmNvdW50UmV2aWV3c30gLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyaWdodCBjYXJ0LXZlbmRvci1ncm91cC1zZXBhcmF0b3JcIj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgY2FydExpbmVzLm1hcChjYXJ0TGluZSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPENhcnRMaW5lXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleT17Y2FydExpbmUucGFja2FnaW5nLmlkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXJ0TGluZT17Y2FydExpbmV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yPXtjYXJ0TGluZS5lcnJvcn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVtb3ZlPXtyZW1vdmV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldFF1YW50aXR5PXtzZXRRdWFudGl0eX1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgKSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59IiwiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgTG9hZGVyIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vVUkvSWNvbi9Mb2FkZXInO1xyXG5pbXBvcnQgeyB1c2VCdXR0b25Mb2FkaW5nIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vQ3VzdG9tSG9vay9mb3JtL3VzZUJ1dHRvbkxvYWRpbmcnO1xyXG5pbXBvcnQgeyB1c2VUcmFuc2xhdGlvbiB9IGZyb20gJ3JlYWN0LWkxOG5leHQnO1xyXG5pbXBvcnQgeyBQcmljZVNob3cgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9VSS9Qcm9kdWN0L1ByaWNlU2hvdyc7XHJcbmltcG9ydCB7IENhcnRWZW5kb3JHcm91cCB9IGZyb20gJy4vQ2FydFZlbmRvckdyb3VwJztcclxuXHJcbmV4cG9ydCBjb25zdCBDYXJ0ID0gKHtjYXJ0LCBmZXRjaENhcnQsIHJlbW92ZSwgc2V0UXVhbnRpdHl9KSA9PiB7XHJcbiAgICBjb25zdCB7dH0gPSB1c2VUcmFuc2xhdGlvbignbWVzc2FnZXMnKTtcclxuXHJcbiAgICBjb25zdCBbYnV0dG9uTG9hZGluZywgaGFuZGxlQnV0dG9uQ2xpY2tdID0gdXNlQnV0dG9uTG9hZGluZygpO1xyXG5cclxuICAgIC8vb24gZmV0Y2ggw6AgbGEgcHJlbWnDqHJlIG91dmVydHVyZSBkdSBjYXJ0LCBldCBzaW5vbiB1bmlxdWVtZW50IHNpIHVuIGFkZCBhIMOpdMOpIGZhaXQgc3VyIHByb2R1Y3QgaW5kZXggb3UgcHJvZHVjdCBzaG93XHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGlmKHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ2NhcnQtdXBkYXRlJykgPT09ICd0cnVlJykge1xyXG4gICAgICAgICAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKCdjYXJ0LXVwZGF0ZScsICdmYWxzZScpO1xyXG4gICAgICAgICAgICBmZXRjaENhcnQoKTtcclxuICAgICAgICB9XHJcbiAgICB9LCBbXSk7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcnQtbW9kYWxcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJ0LWhlYWRlciBzaWRlLW1lbnUtaGVhZGVyXCI+XHJcbiAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwiY2FydC10aXRsZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIHt0KCdjYXJ0Jyl9ICh7Y2FydC5jb3VudCA/PyAnMCd9KVxyXG4gICAgICAgICAgICAgICAgPC9oMj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGNhcnQuZ2VuZXJhbExvYWRpbmcgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FydC1zdWItaGVhZGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMb2FkZXIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIClcclxuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICFjYXJ0LmdlbmVyYWxMb2FkaW5nICYmIGNhcnQuY2FydFZlbmRvckdyb3Vwcy5sZW5ndGggPT09IDAgJiYgPGRpdiBjbGFzc05hbWU9XCJjYXJ0LXN1Yi1oZWFkZXJcIj57dCgnaW5mby5lbXB0eV9jYXJ0Jyl9PC9kaXY+XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGNhcnQuY2FydFZlbmRvckdyb3Vwcy5sZW5ndGggPiAwICYmXHJcbiAgICAgICAgICAgICAgICAoXHJcbiAgICAgICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJ0LWJvZHlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9eydjYXJ0LWxpc3QnICsgKGNhcnQuZ2VuZXJhbExvYWRpbmcgPyAnIGxvYWRpbmcnOiAnJyl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FydC5jYXJ0VmVuZG9yR3JvdXBzLm1hcCgoY2FydFZlbmRvckdyb3VwLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENhcnRWZW5kb3JHcm91cFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17aW5kZXh9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FydFZlbmRvckdyb3VwPXtjYXJ0VmVuZG9yR3JvdXB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVtb3ZlPXtyZW1vdmV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0UXVhbnRpdHk9e3NldFF1YW50aXR5fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJ0LWZvb3RlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJ0LXRvdGFsXCI+e3QoJ3RvdGFsJyl9IDogPFByaWNlU2hvdyBwcmljZT17Y2FydC50b3RhbFByaWNlfSAvPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj17dCgndXJsLmNoZWNrb3V0LmluZGV4Jywge25zOiAndXJscyd9KX0gY2xhc3NOYW1lPXsnY2FydC1mb290ZXItbGluayBzaWRlLW1lbnUtZm9vdGVyLWJ1dHRvbicgKyAoYnV0dG9uTG9hZGluZyA/ICcgZGlzYWJsZWQnOiAnJyl9IG9uQ2xpY2s9e2hhbmRsZUJ1dHRvbkNsaWNrfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJ1dHRvbkxvYWRpbmcgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExvYWRlciBhZGRpdGlvbmFsQ2xhc3M9XCJmb3JtLWJ1dHRvbi1sb2FkZXJcIiBsYW5nPVwiZW5cIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPnt0KCdwcm9jZXNzX3B1cmNoYXNlJyl9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn0iLCJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyB1c2VPcGVuU3RhdGUgfSBmcm9tICcuLi8uLi8uLi8uLi9DdXN0b21Ib29rL3N0YXRlL3VzZU9wZW5TdGF0ZSc7XHJcbmltcG9ydCB7IENhcnRCdXR0b24gfSBmcm9tICcuLi8uLi8uLi8uLi9VSS9CdXR0b24vQ2FydEJ1dHRvbic7XHJcbmltcG9ydCB7IE1vZGFsIH0gZnJvbSAnLi4vLi4vLi4vLi4vVUkvQ29udGFpbmVyL01vZGFsJztcclxuaW1wb3J0IHsgQ2FydCB9IGZyb20gJy4vQ2FydCc7XHJcbmltcG9ydCB7IGNhcnRDaGlwVXBkYXRlIH0gZnJvbSAnLi4vLi4vLi4vLi4vZnVuY3Rpb25zL2NhcnRDaGlwJztcclxuaW1wb3J0IHsgdXNlQ2FydEZldGNoIH0gZnJvbSAnLi4vLi4vLi4vLi4vQ3VzdG9tSG9vay9jYXJ0L3VzZUNhcnRGZXRjaCc7XHJcblxyXG5leHBvcnQgY29uc3QgQ2FydENvbnRyb2wgPSAoKSA9PiB7XHJcblxyXG4gICAgY29uc3QgW2NhcnRJc09wZW4sIG9wZW5DYXJ0LCBjbG9zZUNhcnRdID0gdXNlT3BlblN0YXRlKGZhbHNlKTtcclxuICAgIFxyXG4gICAgY29uc3Qge2NhcnQsIGZldGNoQ2FydCwgcmVtb3ZlLCBzZXRRdWFudGl0eX0gPSB1c2VDYXJ0RmV0Y2goKTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGNhcnRDaGlwVXBkYXRlKGNhcnQuY291bnQsIGNhcnQudG90YWxQcmljZT8ucHJpY2VUb1BheSk7XHJcbiAgICB9LCBbY2FydF0pO1xyXG5cclxuICAgXHJcbiAgICAvL3BvdXIgZMOpY2xlbmNoZXIgbGUgZmV0Y2ggw6AgbGEgcHJlbWnDqHJlIG91dmVydHVyZSBcclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbSgnY2FydC11cGRhdGUnLCAndHJ1ZScpO1xyXG4gICAgICAgIGlmKHdpbmRvdy5sb2NhdGlvbi5zZWFyY2guc3Vic3RyaW5nKDEpID09PSAnY2FydCcpIHtcclxuICAgICAgICAgICAgb3BlbkNhcnQoKTtcclxuICAgICAgICB9XHJcbiAgICB9LCBbXSk7XHJcblxyXG4gIFxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8Q2FydEJ1dHRvbiBvbkNsaWNrPXtvcGVuQ2FydH0gYWRkaXRpb25hbENsYXNzPXsnY2FydC1vcGVuZXInICsgKGNhcnQ/LmNvdW50ID4gMCA/ICcgYWN0aXZlJzogJycpfT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FydC1jaGlwXCIgaGlkZGVuPXt0cnVlfT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcnQtY291bnQtY2hpcFwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FydC1wcmljZS1jaGlwXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9DYXJ0QnV0dG9uPlxyXG4gICAgICAgICAgICA8TW9kYWwgaXNPcGVuPXtjYXJ0SXNPcGVufSBjbG9zZT17Y2xvc2VDYXJ0fSBhZGRpdGlvbmFsQ2xhc3M9XCJyaWdodCBzaWRlLW1lbnVcIj5cclxuICAgICAgICAgICAgICAgIDxDYXJ0IGNhcnQ9e2NhcnR9IGZldGNoQ2FydD17ZmV0Y2hDYXJ0fSByZW1vdmU9e3JlbW92ZX0gc2V0UXVhbnRpdHk9e3NldFF1YW50aXR5fSAvPlxyXG4gICAgICAgICAgICA8L01vZGFsPlxyXG4gICAgICAgIDwvPlxyXG4gICAgKVxyXG59IiwiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0ICogYXMgeXVwIGZyb20gXCJ5dXBcIlxyXG5pbXBvcnQgeyB1c2VGb3JtV2l0aFZhbGlkYXRpb24gfSBmcm9tICcuLi8uLi8uLi8uLi9DdXN0b21Ib29rL2Zvcm0vdXNlRm9ybVdpdGhWYWxpZGF0aW9uJztcclxuaW1wb3J0IHsgQ29udHJvbGxlZFJhZGlvRmllbGRzIH0gZnJvbSAnLi4vLi4vLi4vLi4vVUkvRm9ybS9Db250cm9sbGVkUmFkaW9GaWVsZHMnO1xyXG5pbXBvcnQgeyBUZXh0RmllbGQgfSBmcm9tICcuLi8uLi8uLi8uLi9VSS9Gb3JtL1RleHRGaWVsZCc7XHJcbmltcG9ydCB7IEZvcm1CdXR0b24gfSBmcm9tICcuLi8uLi8uLi8uLi9VSS9Gb3JtL0Zvcm1CdXR0b24nO1xyXG5pbXBvcnQgeyBGbGFzaCB9IGZyb20gJy4uLy4uLy4uLy4uL1VJL0ZsYXNoL0ZsYXNoJztcclxuaW1wb3J0IHsgdXNlT3BlblN0YXRlIH0gZnJvbSAnLi4vLi4vLi4vLi4vQ3VzdG9tSG9vay9zdGF0ZS91c2VPcGVuU3RhdGUnO1xyXG5pbXBvcnQgeyBhcGlQcmVwYXJlZEZldGNoIH0gZnJvbSAnLi4vLi4vLi4vLi4vZnVuY3Rpb25zL2FwaSc7XHJcbmltcG9ydCB7IHVzZVRyYW5zbGF0aW9uIH0gZnJvbSAncmVhY3QtaTE4bmV4dCc7XHJcbmltcG9ydCB7IFNpdGVDb25maWcgfSBmcm9tICcuLi8uLi8uLi8uLi9Db25maWcvU2l0ZUNvbmZpZyc7XHJcbmltcG9ydCB7IHVzZUdldFVzZXIgfSBmcm9tICcuLi8uLi8uLi8uLi9DdXN0b21Ib29rL3VzZUdldFVzZXInO1xyXG5pbXBvcnQgeyB0IH0gZnJvbSAnaTE4bmV4dCc7XHJcblxyXG5cclxuY29uc3Qgc2NoZW1hID0geXVwXHJcbiAgLm9iamVjdCh7XHJcbiAgICBjaXZpbGl0eTogeXVwLnN0cmluZygpLnRlc3QoJ2N1c3RvbS12YWxpZGF0aW9uJywgdCgnYXNzZXJ0LmNob2ljZScsIHtuczogJ2NvbnN0cmFpbnRzJ30pLCAodmFsdWUpID0+IHtcclxuICAgICAgICByZXR1cm4gW1NpdGVDb25maWcuQ0lWSUxJVFlfRiwgU2l0ZUNvbmZpZy5DSVZJTElUWV9NXS5pbmNsdWRlcyh2YWx1ZSk7XHJcbiAgICB9KS5yZXF1aXJlZCh0KCdhc3NlcnQubm90QmxhbmsuY2l2aWxpdHknLCB7bnM6ICdjb25zdHJhaW50cyd9KSksXHJcbiAgICBmaXJzdE5hbWU6IHl1cC5zdHJpbmcoKS5tYXgoMjAwLCB0KCdhc3NlcnQubGVuZ3RoLm1heCcsIHtuczogJ2NvbnN0cmFpbnRzJywgbWF4OiAyMDB9KSkucmVxdWlyZWQodCgnYXNzZXJ0Lm5vdEJsYW5rLmZpcnN0TmFtZScsIHtuczogJ2NvbnN0cmFpbnRzJ30pKSxcclxuICAgIGxhc3ROYW1lOiB5dXAuc3RyaW5nKCkubWF4KDIwMCwgdCgnYXNzZXJ0Lmxlbmd0aC5tYXgnLCB7bnM6ICdjb25zdHJhaW50cycsIG1heDogMjAwfSkpLnJlcXVpcmVkKHQoJ2Fzc2VydC5ub3RCbGFuay5sYXN0TmFtZScsIHtuczogJ2NvbnN0cmFpbnRzJ30pKSxcclxuICAgIGVtYWlsOiB5dXAuc3RyaW5nKCkuZW1haWwodCgnYXNzZXJ0LmVtYWlsJywge25zOiAnY29uc3RyYWludHMnfSkpLm1heCgyMDAsIHQoJ2Fzc2VydC5sZW5ndGgubWF4Jywge25zOiAnY29uc3RyYWludHMnLCBtYXg6IDIwMH0pKS5yZXF1aXJlZCh0KCdhc3NlcnQubm90QmxhbmsuZW1haWwnLCB7bnM6ICdjb25zdHJhaW50cyd9KSksXHJcbiAgICBtZXNzYWdlOiB5dXAuc3RyaW5nKCkubWF4KDIwMDAsIHQoJ2Fzc2VydC5sZW5ndGgubWF4Jywge25zOiAnY29uc3RyYWludHMnLCBtYXg6IDIwMDB9KSkucmVxdWlyZWQodCgnYXNzZXJ0Lm5vdEJsYW5rLm1lc3NhZ2UnLCB7bnM6ICdjb25zdHJhaW50cyd9KSlcclxuICB9KVxyXG4gIC5yZXF1aXJlZCgpO1xyXG5cclxuZXhwb3J0IGNvbnN0IENvbnRhY3RGb3JtID0gKHtjbG9zZSwgb25TdWJtaXRTdWNjZXNzfSkgPT4ge1xyXG4gICAgY29uc3Qge2kxOG4sIHR9ID0gdXNlVHJhbnNsYXRpb24oJ21lc3NhZ2VzJyk7XHJcblxyXG4gICAgY29uc3Qge2hhbmRsZVN1Ym1pdCwgY29udHJvbCwgZXJyb3JzLCBzZXRFcnJvciwgc2V0VmFsdWUsIGlzU3VibWl0dGluZ30gPSB1c2VGb3JtV2l0aFZhbGlkYXRpb24oc2NoZW1hLCB7XHJcbiAgICAgICAgY2l2aWxpdHk6ICcnLFxyXG4gICAgICAgIGZpcnN0TmFtZTogJycsXHJcbiAgICAgICAgbGFzdE5hbWU6ICcnLFxyXG4gICAgICAgIGVtYWlsOiAnJyxcclxuICAgICAgICBtZXNzYWdlOiAnJ1xyXG4gICAgfSk7XHJcblxyXG4gICAgY29uc3QgW2lzTG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBbZXJyb3JGbGFzaElzT3Blbiwgb3BlbkVycm9yRmxhc2gsIGNsb3NlRXJyb3JGbGFzaF0gPSB1c2VPcGVuU3RhdGUoKTtcclxuICAgIGNvbnN0IG9uU3VibWl0ID0gYXN5bmMgZm9ybURhdGEgPT4ge1xyXG4gICAgICAgIGlmKGlzTG9hZGluZykge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNldExvYWRpbmcodHJ1ZSk7XHJcbiAgICAgICAgY2xvc2VFcnJvckZsYXNoKCk7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgYXdhaXQgYXBpUHJlcGFyZWRGZXRjaCgnLycraTE4bi5sYW5ndWFnZSsnL2FwaS9jb250YWN0L2Jhc2ljQ29udGFjdCcsIGZvcm1EYXRhLCAnR0VUJyk7XHJcbiAgICAgICAgICAgIG9uU3VibWl0U3VjY2VzcygpO1xyXG4gICAgICAgICAgICBjbG9zZSgpO1xyXG4gICAgICAgIH0gY2F0Y2goZSkge1xyXG4gICAgICAgICAgICBvcGVuRXJyb3JGbGFzaCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcclxuICAgIH07XHJcbiAgICBcclxuICAgIGNvbnN0IHt1c2VyfSA9IHVzZUdldFVzZXIoKTtcclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgaWYodXNlcikge1xyXG4gICAgICAgICAgICBzZXRWYWx1ZSgnY2l2aWxpdHknLCB1c2VyLmNpdmlsaXR5KTtcclxuICAgICAgICAgICAgc2V0VmFsdWUoJ2ZpcnN0TmFtZScsIHVzZXIuZmlyc3ROYW1lKTtcclxuICAgICAgICAgICAgc2V0VmFsdWUoJ2xhc3ROYW1lJywgdXNlci5sYXN0TmFtZSk7XHJcbiAgICAgICAgICAgIHNldFZhbHVlKCdlbWFpbCcsIHVzZXIuZW1haWwpO1xyXG4gICAgICAgICAgICBmb3JtUmVmLmN1cnJlbnQucXVlcnlTZWxlY3RvckFsbCgnLmlucHV0LXdyYXBwZXInKS5mb3JFYWNoKGlucHV0V3JhcHBlciA9PiB7XHJcbiAgICAgICAgICAgICAgICAvL29uIGVubMOodmUgbGUgbGFiZWxEb3duIHN1ciB0b3VzIGxlcyBjaGFtcHMgcXUnb24gcmVtcGxpdFxyXG4gICAgICAgICAgICAgICAgaWYoIWlucHV0V3JhcHBlci5jbGFzc0xpc3QuY29udGFpbnMoJ21lc3NhZ2UnKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlucHV0V3JhcHBlci5jbGFzc0xpc3QucmVtb3ZlKCdkb3duJyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH0sIFt1c2VyXSk7XHJcblxyXG4gICAgY29uc3QgZm9ybVJlZiA9IHVzZVJlZihudWxsKTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxmb3JtIGNsYXNzTmFtZT1cImJveC1mb3JtXCIgcmVmPXtmb3JtUmVmfSBvblN1Ym1pdD17aGFuZGxlU3VibWl0KG9uU3VibWl0KX0+XHJcbiAgICAgICAgICAgIDxoMj57dCgnY29udGFjdF9mb3JtJyl9PC9oMj5cclxuICAgICAgICAgICAgPEZsYXNoIGlzT3Blbj17ZXJyb3JGbGFzaElzT3Blbn0gY2xvc2U9e2Nsb3NlRXJyb3JGbGFzaH0gdHlwZT1cImRhbmdlclwiPlxyXG4gICAgICAgICAgICAgICAge3QoJ2Vycm9yLnRlbXBvcmFyeV9pbXBvc3NpYmxlX2FjdGlvbicpfVxyXG4gICAgICAgICAgICA8L0ZsYXNoPlxyXG4gICAgICAgICAgICA8Q29udHJvbGxlZFJhZGlvRmllbGRzXHJcbiAgICAgICAgICAgICAgICBjb250cm9sPXtjb250cm9sfVxyXG4gICAgICAgICAgICAgICAgbmFtZT1cImNpdmlsaXR5XCJcclxuICAgICAgICAgICAgICAgIGNob2ljZXM9e3tcclxuICAgICAgICAgICAgICAgICAgICBbdChTaXRlQ29uZmlnLkNJVklMSVRZX00sIHtuczogJ2NvbmZpZ3MnfSldOiBTaXRlQ29uZmlnLkNJVklMSVRZX00sXHJcbiAgICAgICAgICAgICAgICAgICAgW3QoU2l0ZUNvbmZpZy5DSVZJTElUWV9GLCB7bnM6ICdjb25maWdzJ30pXTogU2l0ZUNvbmZpZy5DSVZJTElUWV9GLFxyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgIGVycm9yPXtlcnJvcnMuY2l2aWxpdHk/Lm1lc3NhZ2V9XHJcbiAgICAgICAgICAgICAgICBpc1JlcXVpcmVkRmllbGQ9e3RydWV9XHJcbiAgICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAgICA8VGV4dEZpZWxkIGNvbnRyb2w9e2NvbnRyb2x9IG5hbWU9XCJmaXJzdE5hbWVcIiBlcnJvcj17ZXJyb3JzLmZpcnN0TmFtZT8ubWVzc2FnZX0gYWRkaXRpb25hbENsYXNzPVwiY2FwaXRhbGl6ZVwiPnt0KCdmaXJzdE5hbWUnKX0gKjwvVGV4dEZpZWxkPlxyXG5cclxuICAgICAgICAgICAgPFRleHRGaWVsZCBjb250cm9sPXtjb250cm9sfSBuYW1lPVwibGFzdE5hbWVcIiBlcnJvcj17ZXJyb3JzLmxhc3ROYW1lPy5tZXNzYWdlfSBhZGRpdGlvbmFsQ2xhc3M9XCJjYXBpdGFsaXplXCI+e3QoJ2xhc3ROYW1lJyl9ICo8L1RleHRGaWVsZD5cclxuXHJcbiAgICAgICAgICAgIDxUZXh0RmllbGQgY29udHJvbD17Y29udHJvbH0gbmFtZT1cImVtYWlsXCIgZXJyb3I9e2Vycm9ycy5lbWFpbD8ubWVzc2FnZX0+e3QoJ2VtYWlsX2FkZHJlc3MnKX0gKjwvVGV4dEZpZWxkPlxyXG5cclxuICAgICAgICAgICAgPFRleHRGaWVsZCB0eXBlPVwidGV4dGFyZWFcIiBjb250cm9sPXtjb250cm9sfSBuYW1lPVwibWVzc2FnZVwiIGVycm9yPXtlcnJvcnMubWVzc2FnZT8ubWVzc2FnZX0+e3QoJ21lc3NhZ2UnKX0gKjwvVGV4dEZpZWxkPlxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdWJtaXQtZ3JvdXAgZG91YmxlXCI+XHJcbiAgICAgICAgICAgICAgICA8Rm9ybUJ1dHRvbiBhZGRpdGlvbmFsQ2xhc3M9XCJib3JkZWF1eFwiIGxvYWRpbmc9e2lzTG9hZGluZyB8fCBpc1N1Ym1pdHRpbmd9Pnt0KCdzdWJtaXQuc2VuZCcpfTwvRm9ybUJ1dHRvbj5cclxuICAgICAgICAgICAgICAgIDxGb3JtQnV0dG9uIGFkZGl0aW9uYWxDbGFzcz1cImNhbmNlbFwiIGRpc2FibGVkPXtpc0xvYWRpbmcgfHwgaXNTdWJtaXR0aW5nfSBvbkNsaWNrPXtjbG9zZX0+e3QoJ2NhbmNlbCcpfTwvRm9ybUJ1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9mb3JtPlxyXG4gICAgKVxyXG59ICIsImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHVzZU9wZW5TdGF0ZSB9IGZyb20gJy4uLy4uLy4uLy4uL0N1c3RvbUhvb2svc3RhdGUvdXNlT3BlblN0YXRlJztcclxuaW1wb3J0IHsgTW9kYWwgfSBmcm9tICcuLi8uLi8uLi8uLi9VSS9Db250YWluZXIvTW9kYWwnO1xyXG5pbXBvcnQgeyBGbGFzaCB9IGZyb20gJy4uLy4uLy4uLy4uL1VJL0ZsYXNoL0ZsYXNoJztcclxuaW1wb3J0IHsgQ29udGFjdEZvcm0gfSBmcm9tICcuL0NvbnRhY3RGb3JtJztcclxuaW1wb3J0IHsgQ2hhdEljb24gfSBmcm9tICcuLi8uLi8uLi8uLi9VSS9JY29uL0NoYXRJY29uJztcclxuaW1wb3J0IHsgdXNlVHJhbnNsYXRpb24gfSBmcm9tICdyZWFjdC1pMThuZXh0JztcclxuaW1wb3J0IHsgQ2hhdEJ1dHRvbiB9IGZyb20gJy4uLy4uLy4uLy4uL1VJL0J1dHRvbi9DaGF0QnV0dG9uJztcclxuXHJcbmV4cG9ydCBjb25zdCBDb250YWN0Q29udHJvbCA9ICh7Y2hpbGRyZW4sIGJ1dHRvbkNsYXNzfSkgPT4ge1xyXG4gICAgY29uc3Qge3R9ID0gdXNlVHJhbnNsYXRpb24oJ21lc3NhZ2VzJyk7XHJcblxyXG4gICAgY29uc3QgW2Zvcm1Jc09wZW4sIG9wZW5Gb3JtLCBjbG9zZUZvcm1dID0gdXNlT3BlblN0YXRlKGZhbHNlKTtcclxuXHJcbiAgICBjb25zdCBbc3VjY2Vzc0ZsYXNoSXNPcGVuLCBvcGVuU3VjY2Vzc0ZsYXNoLCBjbG9zZVN1Y2Nlc3NGbGFzaF0gPSB1c2VPcGVuU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgaGFuZGxlU3VibWl0U3VjY2VzcyA9ICgpID0+IHtcclxuICAgICAgICBvcGVuU3VjY2Vzc0ZsYXNoKCk7XHJcbiAgICB9XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBpZih3aW5kb3cubG9jYXRpb24uc2VhcmNoLnN1YnN0cmluZygxKSA9PT0gJ2NvbnRhY3QnKSB7XHJcbiAgICAgICAgICAgIG9wZW5Gb3JtKCk7XHJcbiAgICAgICAgfTtcclxuICAgIH0sIFtdKTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxDaGF0QnV0dG9uIGNsYXNzTmFtZT17YnV0dG9uQ2xhc3N9IHR5cGU9XCJidXR0b25cIiBvbkNsaWNrPXtvcGVuRm9ybX0+XHJcbiAgICAgICAgICAgICAgICB7Y2hpbGRyZW59XHJcbiAgICAgICAgICAgIDwvQ2hhdEJ1dHRvbj5cclxuICAgICAgICAgICAgPE1vZGFsIGFkZGl0aW9uYWxDbGFzcz1cInJldmlldy1mb3JtLW1vZGFsIGNlbnRlci1mb3JtLW1vZGFsXCIgaXNPcGVuPXtmb3JtSXNPcGVufSBjbG9zZT17Y2xvc2VGb3JtfT5cclxuICAgICAgICAgICAgICAgIDxDb250YWN0Rm9ybSBjbG9zZT17Y2xvc2VGb3JtfSBvblN1Ym1pdFN1Y2Nlc3M9e2hhbmRsZVN1Ym1pdFN1Y2Nlc3N9IC8+XHJcbiAgICAgICAgICAgIDwvTW9kYWw+XHJcbiAgICAgICAgICAgIDxGbGFzaCBpc09wZW49e3N1Y2Nlc3NGbGFzaElzT3Blbn0gdHlwZT1cInN1Y2Nlc3NcIiBjbG9zZT17Y2xvc2VTdWNjZXNzRmxhc2h9PlxyXG4gICAgICAgICAgICAgICAge3QoJ3N1Y2Nlc3MuY29udGFjdF9tZXNzYWdlX3NlbnQnKX1cclxuICAgICAgICAgICAgPC9GbGFzaD5cclxuICAgICAgICA8Lz5cclxuICAgIClcclxufSIsImltcG9ydCBSZWFjdCwgeyB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyB1c2VGZXRjaFFTZWFyY2ggfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9DdXN0b21Ib29rL2ZldGNoL3VzZUZldGNoUVNlYXJjaCc7XHJcbmltcG9ydCAnLi4vLi4vLi4vLi4vLi4vc3R5bGVzL2hlYWRlci9IZWFkZXJUb3AvaW5saW5lU2VhcmNoVG9vbC5jc3MnO1xyXG5pbXBvcnQgeyBTZWFyY2hJY29uIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vVUkvSWNvbi9TZWFyY2hJY29uJztcclxuaW1wb3J0IHsgQ2xvc2VCdXR0b24gfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9VSS9CdXR0b24vQ2xvc2VCdXR0b24nO1xyXG5pbXBvcnQgeyB1c2VUcmFuc2xhdGlvbiB9IGZyb20gJ3JlYWN0LWkxOG5leHQnO1xyXG5pbXBvcnQgeyBMb2FkZXIgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9VSS9JY29uL0xvYWRlcic7XHJcbmltcG9ydCB7IFJlY2lwZUNhcmQgfSBmcm9tICcuLi8uLi8uLi8uLi9CbG9nL1JlY2lwZS9SZWNpcGVJbmRleC9SZWNpcGVDYXJkJztcclxuaW1wb3J0IHsgUHJvZHVjdENhcmQgfSBmcm9tICcuLi8uLi8uLi8uLi9TaG9wL1Byb2R1Y3RJbmRleC9Qcm9kdWN0Q2FyZCc7XHJcbmltcG9ydCB7IEFydGljbGVDYXJkIH0gZnJvbSAnLi4vLi4vLi4vLi4vQmxvZy9BcnRpY2xlL0FydGljbGVJbmRleC9BcnRpY2xlQ2FyZCc7XHJcblxyXG5leHBvcnQgY29uc3QgSW5saW5lU2VhcmNoVG9vbCA9ICh7Y2xvc2V9KSA9PiB7XHJcbiAgICBjb25zdCB7dCwgaTE4bn0gPSB1c2VUcmFuc2xhdGlvbignbWVzc2FnZXMnKTtcclxuXHJcbiAgICBjb25zdCBpbnB1dFJlZiA9IHVzZVJlZihudWxsKTtcclxuXHJcbiAgICAvL2hhbmRsZSBxIGNoYW5nZVxyXG4gICAgY29uc3QgW3EsIHNldFFdID0gdXNlU3RhdGUoJycpO1xyXG4gICAgY29uc3QgaGFuZGxlQ2hhbmdlID0gZSA9PiB7XHJcbiAgICAgICAgc2V0UShlLmN1cnJlbnRUYXJnZXQudmFsdWUpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAvL2ZldGNoIHByb2R1Y3RzICYgY291bnRcclxuICAgIGNvbnN0IFtyZXN1bHQsIHJlc2V0UHJvZHVjdHMsIGxvYWRpbmcsIGVycm9yXSA9IHVzZUZldGNoUVNlYXJjaCgnLycrIGkxOG4ubGFuZ3VhZ2UgKycvYXBpL3NlYXJjaCcsIHEsIDYpO1xyXG5cclxuICAgIGNvbnN0IGNsb3NlRXhwYW5kID0gZSA9PiB7XHJcbiAgICAgICAgcmVzZXRQcm9kdWN0cygpO1xyXG4gICAgICAgIHNldFEoJycpO1xyXG4gICAgICAgIGlucHV0UmVmLmN1cnJlbnQuZm9jdXMoKTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgY29uc3QgaGFuZGxlQ2xvc2UgPSAoKSA9PiB7XHJcbiAgICAgICAgd3JhcHBlclJlZi5jdXJyZW50LmNsYXNzTGlzdC5hZGQoJ2Nsb3NpbmcnKTtcclxuICAgICAgICBjb25zdCBvbkFuaW1hdGlvbkVuZCA9ICgpID0+IHtcclxuICAgICAgICAgICAgd3JhcHBlclJlZi5jdXJyZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2FuaW1hdGlvbmVuZCcsIG9uQW5pbWF0aW9uRW5kKTtcclxuICAgICAgICAgICAgd3JhcHBlclJlZi5jdXJyZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2Nsb3NpbmcnKTtcclxuICAgICAgICAgICAgY2xvc2UoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgd3JhcHBlclJlZi5jdXJyZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2FuaW1hdGlvbmVuZCcsIG9uQW5pbWF0aW9uRW5kKTtcclxuICAgIH07XHJcbiAgICBjb25zdCB3cmFwcGVyUmVmID0gdXNlUmVmKG51bGwpO1xyXG5cclxuICAgIGNvbnN0IGhhbmRsZUVtcHR5ID0gKCkgPT4ge1xyXG4gICAgICAgIHNldFEoJycpO1xyXG4gICAgICAgIHJlc2V0UHJvZHVjdHMoKTtcclxuICAgICAgICBpbnB1dFJlZi5jdXJyZW50LmZvY3VzKClcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5saW5lLXNlYXJjaC10b29sLXdyYXBwZXJcIiByZWY9e3dyYXBwZXJSZWZ9IG9uQ2xpY2s9e2Nsb3NlRXhwYW5kfT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbmxpbmUtc2VhcmNoLXRvb2xcIiBvbkNsaWNrPXtlID0+IGUuc3RvcFByb3BhZ2F0aW9uKCl9PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWFyY2gtdG9vbC1oZWFkZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8Zm9ybSBjbGFzc05hbWU9XCJxLWdyb3VwXCIgYWN0aW9uPXt0KCd1cmwuc2VhcmNoLmluZGV4Jywge25zOiAndXJscyd9KX0gbWV0aG9kPVwiR0VUXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCByZWY9e2lucHV0UmVmfSBuYW1lPVwicVwiIGNsYXNzTmFtZT1cInEtaW5wdXRcIiB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPXt0KCdzZWFyY2hfcGxhY2Vob2xkZXInKX0gdmFsdWU9e3F9IG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9IGF1dG9Gb2N1cz17dHJ1ZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFNlYXJjaEljb24gYWRkaXRpb25hbENsYXNzPVwicS1pY29uXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcSAhPT0gJycgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDbG9zZUJ1dHRvbiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhZGRpdGlvbmFsQ2xhc3M9XCJlbXB0eS1jb250cm9sXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZUVtcHR5fSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJpYS1sYWJlbD17dCgnZW1wdHlfaW5wdXQnKX0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPXt0KCdlbXB0eV9pbnB1dCcpfSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgICAgICAgICAgIDxDbG9zZUJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVDbG9zZX0gLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIChyZXN1bHQ/Lml0ZW1zLmxlbmd0aCA+IDAgfHwgbG9hZGluZykgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlubGluZS1zZWFyY2gtdG9vbC1leHBhbmRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb2FkaW5nICYmIDxMb2FkZXIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJwcm9kdWN0LXN1Z2dlc3QtbGlzdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0Py5pdGVtcy5sZW5ndGggPiAwICYmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdC5pdGVtcy5tYXAoaXRlbSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS50eXBlID09PSAncHJvZHVjdCcgJiYgPFByb2R1Y3RDYXJkIGtleT17J3AnK2l0ZW0uaWR9IHByb2R1Y3Q9e2l0ZW19IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS50eXBlID09PSAncmVjaXBlJyAmJiA8UmVjaXBlQ2FyZCBrZXk9eydyJytpdGVtLmlkfSByZWNpcGU9e2l0ZW19IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS50eXBlID09PSAnYXJ0aWNsZScgJiYgPEFydGljbGVDYXJkIGtleT17J2EnK2l0ZW0uaWR9IGFydGljbGU9e2l0ZW19IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWFyY2gtbGlua1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImZvcm0tYnV0dG9uIGJvcmRlYXV4IG91dGxpbmVcIiBocmVmPXt0KCd1cmwuc2VhcmNoLmluZGV4Jywge25zOiAndXJscyd9KSArICc/cT0nK3F9Pnt0KCdzZWVfYWxsX3Jlc3VsdHMnKX17cmVzdWx0Py5jb3VudCA/ICcgKCcrcmVzdWx0LmNvdW50KycpJzogJyd9PC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn0iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBTZWFyY2hCdXR0b24gfSBmcm9tICcuLi8uLi8uLi8uLi9VSS9CdXR0b24vU2VhcmNoQnV0dG9uJztcclxuaW1wb3J0IHsgdXNlT3BlblN0YXRlIH0gZnJvbSAnLi4vLi4vLi4vLi4vQ3VzdG9tSG9vay9zdGF0ZS91c2VPcGVuU3RhdGUnO1xyXG5pbXBvcnQgeyBJbmxpbmVTZWFyY2hUb29sIH0gZnJvbSAnLi9JbmxpbmVTZWFyY2hUb29sJztcclxuaW1wb3J0IHsgY3JlYXRlUG9ydGFsIH0gZnJvbSAncmVhY3QtZG9tJztcclxuXHJcblxyXG5leHBvcnQgY29uc3QgSW5saW5lU2VhcmNoVG9vbENvbnRyb2wgPSAoKSA9PiB7XHJcbiAgICBcclxuICAgIGNvbnN0IFtzZWFyY2hUb29sSXNPcGVuLCBvcGVuU2VhcmNoVG9vbCwgY2xvc2VTZWFyY2hUb29sXSA9IHVzZU9wZW5TdGF0ZSgpO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICA8U2VhcmNoQnV0dG9uIGFkZGl0aW9uYWxDbGFzcz17J2hlYWRlci1zZWFyY2gtbGluayByaWdodC1zZWFyY2gtbGluaycgKyAoc2VhcmNoVG9vbElzT3BlbiA/ICcgaGlkZGVuJzogJycpfSBvbkNsaWNrPXtvcGVuU2VhcmNoVG9vbH0gLz5cclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBzZWFyY2hUb29sSXNPcGVuICYmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgY3JlYXRlUG9ydGFsKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPElubGluZVNlYXJjaFRvb2wgY2xvc2U9e2Nsb3NlU2VhcmNoVG9vbH0gLz4sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5ib2R5XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIDwvPlxyXG4gICAgKVxyXG59XHJcblxyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBBY2NvdW50SWNvbiB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL1VJL0ljb24vQWNjb3VudEljb24nO1xyXG5pbXBvcnQgeyBCZWNvbWVWZW5kb3JMaW5rIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vVUkvQnV0dG9uL0JlY29tZVZlbmRvckxpbmsnO1xyXG5pbXBvcnQgeyBEYXNoYm9hcmRJY29uIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vVUkvSWNvbi9EYXNoYm9hcmRJY29uJztcclxuaW1wb3J0IHsgQWNjb3VudEJhZGdlIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vVUkvQmFkZ2UvQWNjb3VudEJhZGdlJztcclxuaW1wb3J0IHsgdCB9IGZyb20gJ2kxOG5leHQnO1xyXG5cclxuZXhwb3J0IGNvbnN0IEFjY291bnRMaW5rcyA9ICh7dXNlcn0pID0+IHtcclxuXHJcbiAgICBpZighdXNlcikge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICA8QW5vbnltb3VzQWNjb3VudExpbmsgLz5cclxuICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJtb2JpbGUtbWVudS1mb290ZXItaXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxCZWNvbWVWZW5kb3JMaW5rIC8+XHJcbiAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICA8Lz5cclxuICAgICAgICApXHJcbiAgICB9XHJcblxyXG4gICAgaWYoIXVzZXIucm9sZXMuaW5jbHVkZXMoJ1JPTEVfVkVORE9SJykpIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgPEN1c3RvbWVyQWNjb3VudExpbmsgdXNlcj17dXNlcn0gLz5cclxuICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJtb2JpbGUtbWVudS1mb290ZXItaXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxCZWNvbWVWZW5kb3JMaW5rIC8+XHJcbiAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICA8Lz5cclxuICAgICAgICApXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8VmVuZG9yQWNjb3VudExpbmsgdmVuZG9yPXt1c2VyfSAvPlxyXG4gICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibW9iaWxlLW1lbnUtZm9vdGVyLWl0ZW1cIj5cclxuICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIm1vYmlsZS1tZW51LWZvb3Rlci1saW5rXCIgaHJlZj17dCgndXJsLnZlbmRvckFjY291bnQudmVuZG9yU3BhY2UuaW5kZXgucGF0aCcsIHtuczogJ3VybHMnfSl9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxEYXNoYm9hcmRJY29uIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+e3QoJ3VybC52ZW5kb3JBY2NvdW50LnZlbmRvclNwYWNlLmluZGV4LmxhYmVsJywge25zOiAndXJscyd9KX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgPC8+XHJcbiAgICApXHJcbn1cclxuXHJcblxyXG5jb25zdCBBbm9ueW1vdXNBY2NvdW50TGluayA9ICgpID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm1vYmlsZS1tZW51LWZvb3Rlci1pdGVtXCI+XHJcbiAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIm1vYmlsZS1tZW51LWZvb3Rlci1saW5rIGFjY291bnRcIiBocmVmPXt0KCd1cmwuY3VzdG9tZXJBY2NvdW50LmluZGV4Jywge25zOiAndXJscyd9KX0+IHsvKmN1c3RvbWVyQWNjb3VudCByZWRpcmlnZSB2ZXJzIHZlbmRvckFjY291bnQgc2kgdW4gdmVuZG9yIGVzdCBjb25uZWN0w6kqL31cclxuICAgICAgICAgICAgICAgIDxBY2NvdW50SWNvbiAvPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4+e3QoJ2xvZ2luJywge25zOiAnbWVzc2FnZXMnfSl9PC9zcGFuPlxyXG4gICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgPC9saT5cclxuICAgIClcclxufVxyXG5cclxuY29uc3QgQ3VzdG9tZXJBY2NvdW50TGluayA9ICh7dXNlcn0pID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm1vYmlsZS1tZW51LWZvb3Rlci1pdGVtXCI+XHJcbiAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIm1vYmlsZS1tZW51LWZvb3Rlci1saW5rIGFjY291bnQgbG9nZ2VkXCIgaHJlZj17dCgndXJsLmN1c3RvbWVyQWNjb3VudC5pbmRleCcsIHtuczogJ3VybHMnfSl9PlxyXG4gICAgICAgICAgICAgICAgPEFjY291bnRCYWRnZSB1c2VyPXt1c2VyfSAvPlxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICh1c2VyLnJvbGVzLmluY2x1ZGVzKCdST0xFX1BSTycpICYmIHVzZXIuY29tcGFueSkgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPnt1c2VyLmNvbXBhbnkudXN1YWxOYW1lfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICApOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPnt1c2VyLmVtYWlsfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIDwvYT5cclxuICAgICAgICA8L2xpPlxyXG4gICAgKVxyXG59XHJcblxyXG5jb25zdCBWZW5kb3JBY2NvdW50TGluayA9ICh7dmVuZG9yfSkgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8bGkgY2xhc3NOYW1lPVwibW9iaWxlLW1lbnUtZm9vdGVyLWl0ZW1cIj5cclxuICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibW9iaWxlLW1lbnUtZm9vdGVyLWxpbmsgYWNjb3VudCBsb2dnZWRcIiBocmVmPXt0KCd1cmwudmVuZG9yQWNjb3VudC5pbmRleCcsIHtuczogJ3VybHMnfSl9PlxyXG4gICAgICAgICAgICAgICAgPEFjY291bnRCYWRnZSB1c2VyPXt2ZW5kb3J9IC8+XHJcbiAgICAgICAgICAgICAgICA8c3Bhbj57dmVuZG9yLmNvbXBhbnkudXN1YWxOYW1lfTwvc3Bhbj5cclxuICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgIDwvbGk+XHJcbiAgICApXHJcbn0iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgaTE4biBmcm9tICcuLi8uLi8uLi8uLi8uLi9lbnRyeXBvaW50cy9pMThuJztcclxuaW1wb3J0IHsgQ2hldnJvblJpZ2h0SWNvbiB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL1VJL0ljb24vQ2hldnJvblJpZ2h0SWNvbic7XHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IENhdGVnb3J5TGluayA9ICh7Y2F0ZWdvcnksIHNldFNlbGVjdGVkfSkgPT4ge1xyXG4gICAgY29uc3QgaGFuZGxlQ2xpY2sgPSBlID0+IHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgc2V0U2VsZWN0ZWQoY2F0ZWdvcnkpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2hhbmRsZUNsaWNrfSBjbGFzc05hbWU9XCJtb2JpbGUtbWVudS1saW5rXCI+XHJcbiAgICAgICAgICAgIDxzcGFuPntjYXRlZ29yeS5uYW1lW2kxOG4ubGFuZ3VhZ2VdfTwvc3Bhbj5cclxuICAgICAgICAgICAgPENoZXZyb25SaWdodEljb24gLz5cclxuICAgICAgICA8L2J1dHRvbj5cclxuICAgIClcclxufVxyXG5cclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgdXNlVHJhbnNsYXRpb24gfSBmcm9tICdyZWFjdC1pMThuZXh0JztcclxuaW1wb3J0ICcuLi8uLi8uLi8uLi8uLi9zdHlsZXMvaGVhZGVyL0hlYWRlclRvcC9Nb2JpbGVNZW51L21vYmlsZU1lbnVmb290ZXIuY3NzJztcclxuaW1wb3J0IHsgQ29udGFjdENvbnRyb2wgfSBmcm9tICcuLi8uLi9Db250YWN0Q29udHJvbCc7XHJcbmltcG9ydCB7IEFjY291bnRMaW5rcyB9IGZyb20gJy4vQWNjb3VudExpbmtzJztcclxuaW1wb3J0IHsgRmFjZWJvb2tMaW5rIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vVUkvQnV0dG9uL1NvY2lhbC9GYWNlYm9va0xpbmsnO1xyXG5pbXBvcnQgeyBJbnN0YWdyYW1MaW5rIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vVUkvQnV0dG9uL1NvY2lhbC9JbnN0YWdyYW1MaW5rJztcclxuaW1wb3J0IGkxOG4gZnJvbSAnLi4vLi4vLi4vLi4vLi4vZW50cnlwb2ludHMvaTE4bic7XHJcbmltcG9ydCB7IHQgfSBmcm9tICdpMThuZXh0JztcclxuaW1wb3J0IHsgU2l0ZUNvbmZpZyB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL0NvbmZpZy9TaXRlQ29uZmlnJztcclxuXHJcbmV4cG9ydCBjb25zdCBNb2JpbGVNZW51Rm9vdGVyID0gKHt1c2VyfSkgPT4ge1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPG5hdiBjbGFzc05hbWU9XCJtb2JpbGUtbWVudS1mb290ZXJcIj5cclxuICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cIm1vYmlsZS1tZW51LWZvb3Rlci1saXN0XCI+XHJcbiAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibW9iaWxlLW1lbnUtZm9vdGVyLWl0ZW1cIj5cclxuICAgICAgICAgICAgICAgICAgICA8Q29udGFjdENvbnRyb2wgYnV0dG9uQ2xhc3M9XCJtb2JpbGUtbWVudS1mb290ZXItbGlua1wiPnt0KCdjb250YWN0X3VzJywge25zOiAnbWVzc2FnZXMnfSl9PC9Db250YWN0Q29udHJvbD5cclxuICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICA8QWNjb3VudExpbmtzIHVzZXI9e3VzZXJ9IC8+XHJcbiAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibW9iaWxlLW1lbnUtZm9vdGVyLWl0ZW0gcm93IGxhbmdcIj5cclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFNpdGVDb25maWcuU1VQUE9SVEVEX0xPQ0FMRVMubWFwKGxhbmcgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPExvY2FsZUxpbmsga2V5PXtsYW5nfSBsYW5nPXtsYW5nfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApKVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibW9iaWxlLW1lbnUtZm9vdGVyLWl0ZW0gcm93IHNvY2lhbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxGYWNlYm9va0xpbmsgY2xhc3NOYW1lPVwibW9iaWxlLW1lbnUtZm9vdGVyLWxpbmsgc29jaWFsXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8SW5zdGFncmFtTGluayBjbGFzc05hbWU9XCJtb2JpbGUtbWVudS1mb290ZXItbGluayBzb2NpYWwgaW5zdGFcIiAvPlxyXG4gICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgPC91bD5cclxuICAgICAgICA8L25hdj5cclxuICAgIClcclxufVxyXG5cclxuY29uc3QgTG9jYWxlTGluayA9ICh7bGFuZ30pID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGEgXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17J21vYmlsZS1tZW51LWZvb3Rlci1saW5rIGxhbmcnICsgKGkxOG4ubGFuZ3VhZ2UgPT09IGxhbmcgPyAnIHNlbGVjdGVkJzogJycpfSBcclxuICAgICAgICAgICAgaHJlZj17Jy8nICsgbGFuZ31cclxuICAgICAgICAgICAgYXJpYS1sYWJlbD17dCgnY2hhbmdlX2xvY2FsZS4nK2xhbmcsIHtuczogJ21lc3NhZ2VzJ30pfVxyXG4gICAgICAgICAgICB0aXRsZT17dCgnY2hhbmdlX2xvY2FsZS4nK2xhbmcsIHtuczogJ21lc3NhZ2VzJ30pfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPXsnZmxhZy1pY29uICcgKyBsYW5nfSBzcmM9eycvaW1nL2ljb25zL2xhbmcvJytsYW5nKycucG5nJ30gYWx0PXt0KCdmbGFnLicrbGFuZywge25zOiAnbWVzc2FnZXMnfSl9IC8+XHJcbiAgICAgICAgPC9hPlxyXG4gICAgKVxyXG59IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IGkxOG4gZnJvbSAnLi4vLi4vLi4vLi4vLi4vLi4vZW50cnlwb2ludHMvaTE4bic7XHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IFN1YkNhdGVnb3J5TGluayA9ICh7c3ViQ2F0ZWdvcnksIG9uQ2xpY2t9KSA9PiB7XHJcblxyXG4gICAgLy9XSVRIT1VUX1NIT1AgLy8gc3VwcHIgb25DbGlja1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm1vYmlsZS1tZW51LXN1Yml0ZW1cIj5cclxuICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibW9iaWxlLW1lbnUtc3VibGlua1wiIGhyZWY9e3N1YkNhdGVnb3J5LnRhcmdldFtpMThuLmxhbmd1YWdlXX0gb25DbGljaz17b25DbGlja30+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vYmlsZS1tZW51LXN1Yml0ZW0taW1nLXdyYXBwZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cIm1vYmlsZS1tZW51LXN1Yml0ZW0taW1nXCIgc3JjPXsnL2ltZy9jYXRlZ29yaWVzLycgKyBzdWJDYXRlZ29yeS5waWN0dXJlLnBhdGh9IGFsdD17c3ViQ2F0ZWdvcnkucGljdHVyZS5hbHRbaTE4bi5sYW5ndWFnZV19IC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxzcGFuPntzdWJDYXRlZ29yeS5uYW1lW2kxOG4ubGFuZ3VhZ2VdfTwvc3Bhbj5cclxuICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgIDwvbGk+XHJcbiAgICApXHJcbn0iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBTdWJDYXRlZ29yeUxpbmsgfSBmcm9tICcuL1N1YkNhdGVnb3J5TGluayc7XHJcbmltcG9ydCB7IENoZXZyb25MZWZ0SWNvbiB9IGZyb20gJy4uLy4uLy4uLy4uLy4uLy4uL1VJL0ljb24vQ2hldnJvbkxlZnRJY29uJztcclxuaW1wb3J0IHsgdXNlVHJhbnNsYXRpb24gfSBmcm9tICdyZWFjdC1pMThuZXh0JztcclxuaW1wb3J0IHsgRmxhc2ggfSBmcm9tICcuLi8uLi8uLi8uLi8uLi8uLi9VSS9GbGFzaC9GbGFzaCc7XHJcbmltcG9ydCB7IHVzZU9wZW5TdGF0ZSB9IGZyb20gJy4uLy4uLy4uLy4uLy4uLy4uL0N1c3RvbUhvb2svc3RhdGUvdXNlT3BlblN0YXRlJztcclxuaW1wb3J0IHsgdXNlR2V0VXNlciB9IGZyb20gJy4uLy4uLy4uLy4uLy4uLy4uL0N1c3RvbUhvb2svdXNlR2V0VXNlcic7XHJcblxyXG5leHBvcnQgY29uc3QgTW9iaWxlU3ViTWVudSA9ICh7Y2F0ZWdvcnksIHNldFNlbGVjdGVkfSkgPT4ge1xyXG4gICAgY29uc3Qge3QsIGkxOG59ID0gdXNlVHJhbnNsYXRpb24oJ21lc3NhZ2VzJyk7XHJcblxyXG4gICAgY29uc3QgaGFuZGxlUmV0dXJuID0gZSA9PiB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIHNldFNlbGVjdGVkKG51bGwpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vV0lUSE9VVF9TSE9QIC8vIMOgIHN1cHByIFxyXG4gICAgY29uc3QgW3dpdGhvdXRTaG9wRmxhc2hJc09wZW4sIG9wZW5XaXRob3V0U2hvcEZsYXNoLCBjbG9zZVdpdGhvdXRTaG9wRmxhc2hdID0gdXNlT3BlblN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IHt1c2VyLCB1cGRhdGVVc2VyfSA9IHVzZUdldFVzZXIoKTtcclxuICAgIGNvbnN0IGhhbmRsZUNsaWNrID0gZSA9PiB7XHJcbiAgICAgICAgaWYoY2F0ZWdvcnkubmFtZS5lbiA9PT0gJ1JlY2lwZXMnKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYoIXVzZXIgfHwgIVsnY29uc3VtZXJAZW1haWwuY29tJywgJ3Byb0BlbWFpbC5jb20nLCAndmVuZG9yQGVtYWlsLmNvbSddLmluY2x1ZGVzKHVzZXIuZW1haWwpKSB7XHJcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgb3BlbldpdGhvdXRTaG9wRmxhc2goKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8bmF2IGNsYXNzTmFtZT1cIm1vYmlsZS1tZW51LW5hdiByaWdodFwiPlxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBjYXRlZ29yeSAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJtb2JpbGUtbWVudS1uYXYtaGVhZGVyIG1vYmlsZS1tZW51LWxpbmtcIiBvbkNsaWNrPXtoYW5kbGVSZXR1cm59PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Q2hldnJvbkxlZnRJY29uIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm1vYmlsZS1tZW51LW5hdi10aXRsZVwiPnsgY2F0ZWdvcnkubmFtZVtpMThuLmxhbmd1YWdlXSB9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJtb2JpbGUtbWVudS1zdWJsaXN0XCI+XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIC8vV0lUSE9VVF9TSE9QIC8vIMOgIHN1cHByXHJcbiAgICAgICAgICAgICAgICA8Rmxhc2hcclxuICAgICAgICAgICAgICAgICAgICBidXR0b249e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPXt0KCd1cmwucmVjaXBlLmluZGV4Jywge25zOiAndXJscyd9KX0+e3QoJ291cl9yZWNpcGVzJyl9PC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpc09wZW49e3dpdGhvdXRTaG9wRmxhc2hJc09wZW59XHJcbiAgICAgICAgICAgICAgICAgICAgY2xvc2U9e2Nsb3NlV2l0aG91dFNob3BGbGFzaH1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAge3QoJ2luZm8uc2hvcF93aWxsX2JlX29wZW5fc29vbicpfVxyXG4gICAgICAgICAgICAgICAgPC9GbGFzaD5cclxuICAgICAgICAgICAgICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBjYXRlZ29yeSAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgY2F0ZWdvcnkuc3ViQ2F0ZWdvcmllcy5tYXAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN1YkNhdGVnb3J5ID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTdWJDYXRlZ29yeUxpbmsgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtzdWJDYXRlZ29yeS5pZH0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3ViQ2F0ZWdvcnk9e3N1YkNhdGVnb3J5fSAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9XSVRIT1VUX1NIT1AgLy8gbGlnbmUgY2ktZGVzc291cyDDoCBzdXBwclxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZUNsaWNrfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBjYXRlZ29yeSAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPGEgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tYnV0dG9uIGJvcmRlYXV4IG91dGxpbmVcIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj17Y2F0ZWdvcnkudGFyZ2V0W2kxOG4ubGFuZ3VhZ2VdfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvL1dJVEhPVVRfU0hPUCAvLyBsaWduZSBjaS1kZXNzb3VzIMOgIHN1cHByXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZUNsaWNrfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHt0KCdzZWVfZW50aXJlX2NhdGVnb3J5Jywge2NhdGVnb3J5OiBjYXRlZ29yeS5uYW1lW2kxOG4ubGFuZ3VhZ2VdfSl9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgPC9uYXY+XHJcbiAgICApXHJcbn1cclxuXHJcblxyXG4iLCJpbXBvcnQgUmVhY3QsIHsgZm9yd2FyZFJlZiwgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgSGVhZGVyTG9nbyB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL1VJL0xvZ28vSGVhZGVyTG9nbyc7XHJcbmltcG9ydCB7IE1vYmlsZVN1Yk1lbnUgfSBmcm9tICcuL01vYmlsZVN1Yk1lbnUnO1xyXG5pbXBvcnQgeyBNb2JpbGVNZW51Rm9vdGVyIH0gZnJvbSAnLi9Nb2JpbGVNZW51Rm9vdGVyJztcclxuaW1wb3J0IHsgQ2F0ZWdvcnlMaW5rIH0gZnJvbSAnLi9DYXRlZ29yeUxpbmsnO1xyXG5pbXBvcnQgJy4uLy4uLy4uLy4uLy4uL3N0eWxlcy9oZWFkZXIvSGVhZGVyVG9wL3NpZGVNZW51LmNzcyc7XHJcbmltcG9ydCAnLi4vLi4vLi4vLi4vLi4vc3R5bGVzL2hlYWRlci9IZWFkZXJUb3AvTW9iaWxlTWVudS9pbmRleC5jc3MnO1xyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBNb2JpbGVNZW51ID0gZm9yd2FyZFJlZigoe2NhdGVnb3JpZXMsIHVzZXJ9LCBtb2RhbFJlZikgPT4ge1xyXG5cclxuICAgIC8vc8OpbGVjdGlvbiBkZXMgY2F0w6lnb3JpZXNcclxuICAgIGNvbnN0IFtzZWxlY3RlZENhdGVnb3J5LCBzZXRTZWxlY3RlZENhdGVnb3J5XSA9IHVzZVN0YXRlKG51bGwpO1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgLy9hdSBjYXMgb3Ugb24gw6l0YWl0IGVuIHNjcm9sbCBlbiBiYXMgZGVzIGNhdGVnb3JpZXMsIGlsIGZhdXQgcmVtb250ZXIgcG91ciBhcnJpdmVyIGVuIGhhdXQgZGUgbGEgbGlzdGUgZGVzIHN1YmNhdGVnb3JpZXNcclxuICAgICAgICBtb2RhbFJlZi5jdXJyZW50LnNjcm9sbCgwLCAwKTtcclxuICAgIH0sIFtzZWxlY3RlZENhdGVnb3J5XSk7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vYmlsZS1tZW51LWhlYWRlclwiPlxyXG4gICAgICAgICAgICAgICAgPEhlYWRlckxvZ28gLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9iaWxlLW1lbnUtbWFpblwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9eydzaWRlLW1lbnUtYm9keScgKyAoc2VsZWN0ZWRDYXRlZ29yeSA/ICcgaXMtZXhwYW5kZWQnOiAnJyl9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxuYXYgY2xhc3NOYW1lPVwibW9iaWxlLW1lbnUtbmF2IGxlZnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2F0ZWdvcmllcy5tYXAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2F0ZWdvcnkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2F0ZWdvcnlMaW5rIGtleT17Y2F0ZWdvcnkuaWR9IHNldFNlbGVjdGVkPXtzZXRTZWxlY3RlZENhdGVnb3J5fSBjYXRlZ29yeT17Y2F0ZWdvcnl9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9uYXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPE1vYmlsZVN1Yk1lbnUgY2F0ZWdvcnk9e3NlbGVjdGVkQ2F0ZWdvcnl9IHNldFNlbGVjdGVkPXtzZXRTZWxlY3RlZENhdGVnb3J5fSAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8TW9iaWxlTWVudUZvb3RlciB1c2VyPXt1c2VyfSAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8Lz5cclxuICAgIClcclxufSk7XHJcblxyXG5cclxuXHJcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VSZWYgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IE1lbnVCdXR0b24gfSBmcm9tICcuLi8uLi8uLi8uLi9VSS9CdXR0b24vTWVudUJ1dHRvbic7XHJcbmltcG9ydCB7IHVzZU9wZW5TdGF0ZSB9IGZyb20gJy4uLy4uLy4uLy4uL0N1c3RvbUhvb2svc3RhdGUvdXNlT3BlblN0YXRlJztcclxuaW1wb3J0IHsgTW9kYWwgfSBmcm9tICcuLi8uLi8uLi8uLi9VSS9Db250YWluZXIvTW9kYWwnO1xyXG5pbXBvcnQgeyBNb2JpbGVNZW51IH0gZnJvbSAnLi9Nb2JpbGVNZW51JztcclxuXHJcbmV4cG9ydCBjb25zdCBNb2JpbGVNZW51Q29udHJvbCA9ICh7Y2F0ZWdvcmllcywgdXNlcn0pID0+IHtcclxuXHJcbiAgICBjb25zdCBbc2lkZU1lbnVJc09wZW4sIG9wZW5TaWRlTWVudSwgY2xvc2VTaWRlTWVudV0gPSB1c2VPcGVuU3RhdGUoKTtcclxuXHJcbiAgICBjb25zdCBtb2RhbFJlZiA9IHVzZVJlZihudWxsKTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxNZW51QnV0dG9uIGFkZGl0aW9uYWxDbGFzcz1cIm1vYmlsZS1tZW51LW9wZW5lclwiIG9uQ2xpY2s9e29wZW5TaWRlTWVudX0gLz5cclxuICAgICAgICAgICAgPE1vZGFsIHJlZj17bW9kYWxSZWZ9IGlzT3Blbj17c2lkZU1lbnVJc09wZW59IGNsb3NlPXtjbG9zZVNpZGVNZW51fSBhZGRpdGlvbmFsQ2xhc3M9XCJsZWZ0IG1vYmlsZS1tZW51IHNpZGUtbWVudVwiPlxyXG4gICAgICAgICAgICAgICAgPE1vYmlsZU1lbnUgcmVmPXttb2RhbFJlZn0gY2F0ZWdvcmllcz17Y2F0ZWdvcmllc30gY2xvc2U9e2Nsb3NlU2lkZU1lbnV9IHVzZXI9e3VzZXJ9IC8+XHJcbiAgICAgICAgICAgIDwvTW9kYWw+XHJcbiAgICAgICAgPC8+XHJcbiAgICApXHJcbn0iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5cclxuZXhwb3J0IGNvbnN0IEFydGljbGVTdWdnZXN0ID0gKHthcnRpY2xlfSkgPT4ge1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGEgY2xhc3NOYW1lPVwicHJvZHVjdC1zdWdnZXN0LWl0ZW1cIiBocmVmPXthcnRpY2xlLnRhcmdldH0+XHJcbiAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwiaXRlbS1pbWdcIiBzcmM9e2FydGljbGUucGljdHVyZS5wYXRofSBhbHQ9e2FydGljbGUucGljdHVyZS5hbHR9Lz5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpdGVtLXRleHRcIj5cclxuICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJpdGVtLXRpdGxlXCI+e2FydGljbGUudGl0bGV9PC9oMj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaXRlbS1zdWJ0aXRsZVwiPnthcnRpY2xlLnN1YnRpdGxlfTwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2E+XHJcbiAgICApXHJcbn0iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBQcm9kdWN0SW5kZXhSZXZpZXcgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi8uLi9VSS9Qcm9kdWN0L1Byb2R1Y3RJbmRleFJldmlldyc7XHJcbmltcG9ydCB7IFByaWNlU2hvdyB9IGZyb20gJy4uLy4uLy4uLy4uLy4uLy4uL1VJL1Byb2R1Y3QvUHJpY2VTaG93JztcclxuXHJcbmV4cG9ydCBjb25zdCBQcm9kdWN0U3VnZ2VzdCA9ICh7cHJvZHVjdH0pID0+IHtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxhIGNsYXNzTmFtZT1cInByb2R1Y3Qtc3VnZ2VzdC1pdGVtXCIgaHJlZj17cHJvZHVjdC5iYXNlUGFja2FnaW5nLnRhcmdldH0+XHJcbiAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwiaXRlbS1pbWdcIiBzcmM9e3Byb2R1Y3QuZmlyc3RQaWN0dXJlLnBhdGh9IGFsdD17cHJvZHVjdC5maXJzdFBpY3R1cmUuYWx0fS8+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaXRlbS10ZXh0XCI+XHJcbiAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwiaXRlbS10aXRsZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIHtwcm9kdWN0LmRlc2lnbmF0aW9ufVxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInByb2R1Y3QtY2FyZC10aXRsZS1zdWZmaXhcIj57cHJvZHVjdC5iYXNlUGFja2FnaW5nLmxhYmVsID8gKCcgJyArIHByb2R1Y3QuYmFzZVBhY2thZ2luZy5sYWJlbCk6ICcnfTwvc3Bhbj4gICAgXHJcbiAgICAgICAgICAgICAgICA8L2gyPlxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8UHJvZHVjdEluZGV4UmV2aWV3IHByb2R1Y3Q9e3Byb2R1Y3R9IC8+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIml0ZW0tcHJpY2VcIj5cclxuICAgICAgICAgICAgICAgICAgICA8UHJpY2VTaG93IHByaWNlPXtwcm9kdWN0LmJhc2VQYWNrYWdpbmcucHJpY2V9IC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9hPlxyXG4gICAgKVxyXG59IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuXHJcbmV4cG9ydCBjb25zdCBSZWNpcGVTdWdnZXN0ID0gKHtyZWNpcGV9KSA9PiB7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8YSBjbGFzc05hbWU9XCJwcm9kdWN0LXN1Z2dlc3QtaXRlbVwiIGhyZWY9e3JlY2lwZS50YXJnZXR9PlxyXG4gICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cIml0ZW0taW1nXCIgc3JjPXtyZWNpcGUucGljdHVyZS5wYXRofSBhbHQ9e3JlY2lwZS5waWN0dXJlLmFsdH0vPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIml0ZW0tdGV4dFwiPlxyXG4gICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cIml0ZW0tdGl0bGVcIj57cmVjaXBlLnRpdGxlfTwvaDI+XHJcbiAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwicHJvZHVjdC1jYXJkLWxpc3RcIj5cclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlY2lwZS5pbmdyZWRpZW50cy5tYXAoKGluZ3JlZGllbnQsIGluZGV4KSA9PiA8bGkgY2xhc3NOYW1lPVwicHJvZHVjdC1jYXJkLWxpc3QtaXRlbVwiIGtleT17aW5kZXh9PntpbmdyZWRpZW50fTwvbGk+KVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvYT5cclxuICAgIClcclxufSIsImltcG9ydCBSZWFjdCwgeyB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyB1c2VGZXRjaFFTZWFyY2ggfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9DdXN0b21Ib29rL2ZldGNoL3VzZUZldGNoUVNlYXJjaCc7XHJcbmltcG9ydCB7IFByb2R1Y3RTdWdnZXN0IH0gZnJvbSAnLi9JdGVtU3VnZ2VzdC9Qcm9kdWN0U3VnZ2VzdCc7XHJcbmltcG9ydCAnLi4vLi4vLi4vLi4vLi4vc3R5bGVzL2hlYWRlci9IZWFkZXJUb3Avc2lkZVNlYXJjaFRvb2wuY3NzJztcclxuaW1wb3J0IHsgU2VhcmNoSWNvbiB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL1VJL0ljb24vU2VhcmNoSWNvbic7XHJcbmltcG9ydCB7IExvYWRlciB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL1VJL0ljb24vTG9hZGVyJztcclxuaW1wb3J0IHsgdXNlQnV0dG9uTG9hZGluZyB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL0N1c3RvbUhvb2svZm9ybS91c2VCdXR0b25Mb2FkaW5nJztcclxuaW1wb3J0IHsgdXNlVHJhbnNsYXRpb24gfSBmcm9tICdyZWFjdC1pMThuZXh0JztcclxuaW1wb3J0IHsgUmVjaXBlU3VnZ2VzdCB9IGZyb20gJy4vSXRlbVN1Z2dlc3QvUmVjaXBlU3VnZ2VzdCc7XHJcbmltcG9ydCB7IENsb3NlQnV0dG9uIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vVUkvQnV0dG9uL0Nsb3NlQnV0dG9uJztcclxuaW1wb3J0IHsgQXJ0aWNsZVN1Z2dlc3QgfSBmcm9tICcuL0l0ZW1TdWdnZXN0L0FydGljbGVTdWdnZXN0JztcclxuXHJcbmV4cG9ydCBjb25zdCBTaWRlU2VhcmNoVG9vbCA9ICgpID0+IHtcclxuICAgIGNvbnN0IHt0LCBpMThufSA9IHVzZVRyYW5zbGF0aW9uKCdtZXNzYWdlcycpO1xyXG4gICAgXHJcbiAgICAvL2xvYWRpbmcgZHUgYm91dG9uIFwidm9pciB0b3VzIGxlcyByw6lzdWx0YXRzXCJcclxuICAgIGNvbnN0IFtidXR0b25Mb2FkaW5nLCBoYW5kbGVCdXR0b25DbGlja10gPSB1c2VCdXR0b25Mb2FkaW5nKCk7XHJcblxyXG4gICAgLy9oYW5kbGUgcSBjaGFuZ2VcclxuICAgIGNvbnN0IFtxLCBzZXRRXSA9IHVzZVN0YXRlKCcnKTtcclxuICAgIGNvbnN0IGhhbmRsZUNoYW5nZSA9IGUgPT4ge1xyXG4gICAgICAgIHNldFEoZS5jdXJyZW50VGFyZ2V0LnZhbHVlKTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLy9mZXRjaCBwcm9kdWN0cyAmIGNvdW50XHJcbiAgICBjb25zdCBbcmVzdWx0LCByZXNldFByb2R1Y3RzLCBsb2FkaW5nLCBlcnJvcl0gPSB1c2VGZXRjaFFTZWFyY2goJy8nKyBpMThuLmxhbmd1YWdlICsnL2FwaS9zZWFyY2gnLCBxLCAxMCk7XHJcblxyXG4gICAgY29uc3QgaGFuZGxlRW1wdHkgPSAoKSA9PiB7XHJcbiAgICAgICAgc2V0USgnJyk7XHJcbiAgICAgICAgcmVzZXRQcm9kdWN0cygpO1xyXG4gICAgICAgIGlucHV0UmVmLmN1cnJlbnQuZm9jdXMoKTtcclxuICAgIH1cclxuICAgIGNvbnN0IGlucHV0UmVmID0gdXNlUmVmKG51bGwpO1xyXG4gXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2lkZS1zZWFyY2gtdG9vbFwiPlxyXG4gICAgICAgICAgICA8Zm9ybSBjbGFzc05hbWU9XCJxLWdyb3VwXCIgYWN0aW9uPXt0KCd1cmwuc2VhcmNoLmluZGV4Jywge25zOiAndXJscyd9KX0gbWV0aG9kPVwiR0VUXCI+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgcmVmPXtpbnB1dFJlZn0gbmFtZT1cInFcIiBjbGFzc05hbWU9XCJxLWlucHV0XCIgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj17dCgnc2VhcmNoX3BsYWNlaG9sZGVyJyl9IHZhbHVlPXtxfSBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfSBhdXRvRm9jdXM9e3RydWV9IC8+XHJcbiAgICAgICAgICAgICAgICA8U2VhcmNoSWNvbiBhZGRpdGlvbmFsQ2xhc3M9XCJxLWljb25cIiAvPlxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHEgIT09ICcnICYmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPENsb3NlQnV0dG9uIHR5cGU9XCJidXR0b25cIiBvbkNsaWNrPXtoYW5kbGVFbXB0eX0gYXJpYS1sYWJlbD17dCgnZW1wdHlfaW5wdXQnKX0gdGl0bGU9e3QoJ2VtcHR5X2lucHV0Jyl9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXsncHJvZHVjdC1zdWdnZXN0LWxpc3QnICsgKGxvYWRpbmcgPyAnIGxvYWRpbmcnOiAnJyl9PlxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGxvYWRpbmcgJiYgPExvYWRlciAvPlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdCAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdC5pdGVtcy5tYXAoaXRlbSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS50eXBlID09PSAncHJvZHVjdCcgJiYgPFByb2R1Y3RTdWdnZXN0IGtleT17J3AnK2l0ZW0uaWR9IHByb2R1Y3Q9e2l0ZW19IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS50eXBlID09PSAncmVjaXBlJyAmJiA8UmVjaXBlU3VnZ2VzdCBrZXk9eydyJytpdGVtLmlkfSByZWNpcGU9e2l0ZW19IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS50eXBlID09PSAnYXJ0aWNsZScgJiYgPEFydGljbGVTdWdnZXN0IGtleT17J2EnK2l0ZW0uaWR9IGFydGljbGU9e2l0ZW19IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICkpXHJcbiAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWFyY2gtbGlua1wiPlxyXG4gICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPXsnc2lkZS1tZW51LWZvb3Rlci1idXR0b24nICsgKGJ1dHRvbkxvYWRpbmcgPyAnIGRpc2FibGVkJzogJycpfSBvbkNsaWNrPXtoYW5kbGVCdXR0b25DbGlja30gaHJlZj17dCgndXJsLnNlYXJjaC5pbmRleCcsIHtuczogJ3VybHMnfSkgKyAnP3E9JytxfSBkaXNhYmxlZD17YnV0dG9uTG9hZGluZ30+XHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBidXR0b25Mb2FkaW5nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgPExvYWRlciBhZGRpdGlvbmFsQ2xhc3M9XCJmb3JtLWJ1dHRvbi1sb2FkZXJcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPnt0KCdzZWVfYWxsX3Jlc3VsdHMnKX17cmVzdWx0Py5jb3VudCA/ICcgKCcrcmVzdWx0LmNvdW50KycpJzogJyd9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcblxyXG59IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgdXNlT3BlblN0YXRlIH0gZnJvbSAnLi4vLi4vLi4vLi4vQ3VzdG9tSG9vay9zdGF0ZS91c2VPcGVuU3RhdGUnO1xyXG5pbXBvcnQgeyBNb2RhbCB9IGZyb20gJy4uLy4uLy4uLy4uL1VJL0NvbnRhaW5lci9Nb2RhbCc7XHJcbmltcG9ydCB7IFNlYXJjaEJ1dHRvbiB9IGZyb20gJy4uLy4uLy4uLy4uL1VJL0J1dHRvbi9TZWFyY2hCdXR0b24nO1xyXG5pbXBvcnQgeyBTaWRlU2VhcmNoVG9vbCB9IGZyb20gJy4vU2lkZVNlYXJjaFRvb2wnO1xyXG5cclxuZXhwb3J0IGNvbnN0IFNpZGVTZWFyY2hUb29sQ29udHJvbCA9ICgpID0+IHtcclxuXHJcbiAgICBjb25zdCBbc2VhcmNoVG9vbElzT3Blbiwgb3BlblNlYXJjaFRvb2wsIGNsb3NlU2VhcmNoVG9vbF0gPSB1c2VPcGVuU3RhdGUoKTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxTZWFyY2hCdXR0b24gYWRkaXRpb25hbENsYXNzPVwiaGVhZGVyLXNlYXJjaC1saW5rIGxlZnQtc2VhcmNoLWxpbmtcIiBvbkNsaWNrPXtvcGVuU2VhcmNoVG9vbH0gLz5cclxuICAgICAgICAgICAgPE1vZGFsIGlzT3Blbj17c2VhcmNoVG9vbElzT3Blbn0gY2xvc2U9e2Nsb3NlU2VhcmNoVG9vbH0gYWRkaXRpb25hbENsYXNzPVwibGVmdCBzaWRlLW1lbnVcIj5cclxuICAgICAgICAgICAgICAgIDxTaWRlU2VhcmNoVG9vbCAvPlxyXG4gICAgICAgICAgICA8L01vZGFsPlxyXG4gICAgICAgIDwvPlxyXG4gICAgKVxyXG59XHJcblxyXG4iLCJpbXBvcnQgUmVhY3QsIHsgbWVtbyB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgSGVhZGVyTG9nbyB9IGZyb20gJy4uLy4uLy4uL1VJL0xvZ28vSGVhZGVyTG9nbyc7XHJcbmltcG9ydCB7IENhcnRDb250cm9sIH0gZnJvbSAnLi9DYXJ0Q29udHJvbCc7XHJcbmltcG9ydCB7IE1vYmlsZU1lbnVDb250cm9sIH0gZnJvbSAnLi9Nb2JpbGVNZW51Q29udHJvbCc7XHJcbmltcG9ydCAnLi4vLi4vLi4vc3R5bGVzL2hlYWRlci9IZWFkZXJUb3AvaW5kZXguY3NzJztcclxuaW1wb3J0IHsgU2lkZVNlYXJjaFRvb2xDb250cm9sIH0gZnJvbSAnLi9TaWRlU2VhcmNoVG9vbENvbnRyb2wnO1xyXG5pbXBvcnQgeyBJbmxpbmVTZWFyY2hUb29sQ29udHJvbCB9IGZyb20gJy4vSW5saW5lU2VhcmNoVG9vbENvbnRyb2wnO1xyXG5pbXBvcnQgeyBBY2NvdW50Q29udHJvbCB9IGZyb20gJy4vQWNjb3VudENvbnRyb2wnO1xyXG5pbXBvcnQgeyB1c2VHZXRVc2VyIH0gZnJvbSAnLi4vLi4vLi4vQ3VzdG9tSG9vay91c2VHZXRVc2VyJztcclxuaW1wb3J0IHsgdXNlVHJhbnNsYXRpb24gfSBmcm9tICdyZWFjdC1pMThuZXh0JztcclxuaW1wb3J0IHsgRGFzaGJvYXJkSWNvbiB9IGZyb20gJy4uLy4uLy4uL1VJL0ljb24vRGFzaGJvYXJkSWNvbic7XHJcbmltcG9ydCB7IENvbnRhY3RDb250cm9sIH0gZnJvbSAnLi9Db250YWN0Q29udHJvbCc7XHJcbmltcG9ydCB7IEZhY2Vib29rTGluayB9IGZyb20gJy4uLy4uLy4uL1VJL0J1dHRvbi9Tb2NpYWwvRmFjZWJvb2tMaW5rJztcclxuaW1wb3J0IHsgSW5zdGFncmFtTGluayB9IGZyb20gJy4uLy4uLy4uL1VJL0J1dHRvbi9Tb2NpYWwvSW5zdGFncmFtTGluayc7XHJcblxyXG5leHBvcnQgY29uc3QgSGVhZGVyVG9wID0gbWVtbygoe2NhdGVnb3JpZXN9KSA9PiB7XHJcblxyXG4gICAgY29uc3Qge3R9ID0gdXNlVHJhbnNsYXRpb24oJ21lc3NhZ2VzJyk7XHJcblxyXG4gICAgY29uc3Qge3VzZXIsIHVwZGF0ZVVzZXJ9ID0gdXNlR2V0VXNlcigpO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXItdG9wXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyLXRvcC1sZWZ0XCI+XHJcbiAgICAgICAgICAgICAgICA8TW9iaWxlTWVudUNvbnRyb2wgY2F0ZWdvcmllcz17Y2F0ZWdvcmllc30gdXNlcj17dXNlcn0gLz5cclxuICAgICAgICAgICAgICAgIDxTaWRlU2VhcmNoVG9vbENvbnRyb2wgLz5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyLXRvcC1sZWZ0LWxpbmtzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPEluc3RhZ3JhbUxpbmsgLz5cclxuICAgICAgICAgICAgICAgICAgICA8RmFjZWJvb2tMaW5rIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPENvbnRhY3RDb250cm9sIGJ1dHRvbkNsYXNzPVwiaWNvbi1idXR0b25cIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgKHVzZXIgJiYgdXNlci5yb2xlcy5pbmNsdWRlcygnUk9MRV9WRU5ET1InKSAmJiB1c2VyLmNvbXBhbnkpID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiaGVhZGVyLXRvcC12ZW5kb3ItY29udGFjdC1idXR0b24gZm9ybS1idXR0b24gYm9yZGVhdXgtYmxhY2sgb3V0bGluZSBpLXRleHRcIiBocmVmPXt0KCd1cmwudmVuZG9yQWNjb3VudC52ZW5kb3JTcGFjZS5pbmRleCcsIHtuczogJ3VybHMnfSl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxEYXNoYm9hcmRJY29uIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+e3QoJ3ZlbmRvcl9zcGFjZScpfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKTogKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiaGVhZGVyLXRvcC12ZW5kb3ItY29udGFjdC1idXR0b24gZm9ybS1idXR0b24gYm9yZGVhdXgtYmxhY2sgb3V0bGluZVwiIGhyZWY9e3QoJ3VybC5jb250YWN0LmJlY29tZV92ZW5kb3InLCB7bnM6ICd1cmxzJ30pfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dCgnYmVjb21lX3ZlbmRvcicpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgPEhlYWRlckxvZ28gLz5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyLXRvcC1yaWdodFwiPlxyXG4gICAgICAgICAgICAgICAgPElubGluZVNlYXJjaFRvb2xDb250cm9sIC8+XHJcbiAgICAgICAgICAgICAgICA8QWNjb3VudENvbnRyb2wgdXNlcj17dXNlcn0gdXBkYXRlVXNlcj17dXBkYXRlVXNlcn0gLz5cclxuICAgICAgICAgICAgICAgIDxDYXJ0Q29udHJvbCAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufSk7IiwiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IEhlYWRlclRvcCB9IGZyb20gJy4vSGVhZGVyVG9wJztcclxuaW1wb3J0IHsgSGVhZGVyQm90dG9tIH0gZnJvbSAnLi9IZWFkZXJCb3R0b20nO1xyXG5pbXBvcnQgJy4uLy4uL3N0eWxlcy9oZWFkZXIvaW5kZXguY3NzJztcclxuaW1wb3J0IGNhdGVnb3JpZXMgZnJvbSAnLi4vLi4vQ29uZmlnL2NhdGVnb3JpZXMuanNvbic7XHJcbmltcG9ydCB7IEhlYWRlclB1YiB9IGZyb20gJy4vSGVhZGVyUHViJztcclxuaW1wb3J0IHsgdXNlU2Nyb2xsWURpcmVjdGlvbkxpc3RlbmVyIH0gZnJvbSAnLi4vLi4vQ3VzdG9tSG9vay9saXN0ZW5lci91c2VTY3JvbGxZRGlyZWN0aW9uTGlzdGVuZXInO1xyXG5cclxuZXhwb3J0IGNvbnN0IEhlYWRlciA9ICgpID0+IHtcclxuXHJcbiAgICBjb25zdCB7aXNTY3JvbGxpbmdVcCwgaXNTY3JvbGxpbmdEb3dufSA9IHVzZVNjcm9sbFlEaXJlY3Rpb25MaXN0ZW5lcig1MCwgNzApO1xyXG5cclxuICAgIGNvbnN0IFtoZWFkZXJDbGFzcywgc2V0SGVhZGVyQ2xhc3NdID0gdXNlU3RhdGUoJ2hlYWRlci1zdGF0aWMnKTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGlmKGlzU2Nyb2xsaW5nVXApIHtcclxuICAgICAgICAgICAgc2V0SGVhZGVyQ2xhc3MoJ2hlYWRlci1maXhlZCBzY3JvbGwtdXAnKTtcclxuICAgICAgICB9IGVsc2UgaWYoaXNTY3JvbGxpbmdEb3duKSB7XHJcbiAgICAgICAgICAgIHNldEhlYWRlckNsYXNzKCdoZWFkZXItZml4ZWQgc2Nyb2xsLWRvd24nKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBzZXRIZWFkZXJDbGFzcygnaGVhZGVyLXN0YXRpYycpO1xyXG4gICAgICAgIH1cclxuICAgIH0sIFtpc1Njcm9sbGluZ1VwLCBpc1Njcm9sbGluZ0Rvd25dKTtcclxuICAgIFxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5yZW1vdmUoJ3Njcm9sbC11cCcsICdzY3JvbGwtZG93bicsICdzY3JvbGxpbmcnKTtcclxuICAgICAgICBpZihpc1Njcm9sbGluZ1VwKSB7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZCgnc2Nyb2xsaW5nJywgJ3Njcm9sbC11cCcpO1xyXG4gICAgICAgIH0gZWxzZSBpZihpc1Njcm9sbGluZ0Rvd24pIHtcclxuICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKCdzY3JvbGxpbmcnLCAnc2Nyb2xsLWRvd24nKTtcclxuICAgICAgICB9XHJcbiAgICB9LCBbaXNTY3JvbGxpbmdVcCwgaXNTY3JvbGxpbmdEb3duXSk7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17aGVhZGVyQ2xhc3N9PlxyXG4gICAgICAgICAgICAgICAgPEhlYWRlclB1YiAvPlxyXG4gICAgICAgICAgICAgICAgPEhlYWRlclRvcCBjYXRlZ29yaWVzPXtjYXRlZ29yaWVzfSAvPlxyXG4gICAgICAgICAgICAgICAgPEhlYWRlckJvdHRvbSBjYXRlZ29yaWVzPXtjYXRlZ29yaWVzfSAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8Lz5cclxuICAgIClcclxufTtcclxuIiwiaW1wb3J0IHsgdXNlQ2FsbGJhY2ssIHVzZVJlZHVjZXIsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCJcclxuaW1wb3J0IHsgQXBpRXJyb3IsIGFwaUZldGNoIH0gZnJvbSBcIi4uLy4uL2Z1bmN0aW9ucy9hcGlcIjtcclxuaW1wb3J0IHsgcHJpY2VBZGQsIHByaWNlTGVzcywgcHJpY2VNdWx0aXBseSB9IGZyb20gXCIuLi8uLi9mdW5jdGlvbnMvcHJpY2UvcHJpY2VPcGVyYXRvclwiO1xyXG5pbXBvcnQgeyBleHRyYWN0Q2FydExpbmVzIH0gZnJvbSBcIi4uLy4uL2Z1bmN0aW9ucy9oZWxwZXJzL3ZlbmRvckdyb3Vwc0xpbmVzRXh0cmFjdG9yXCI7XHJcbmltcG9ydCB7IHQgfSBmcm9tIFwiaTE4bmV4dFwiO1xyXG5pbXBvcnQgaTE4biBmcm9tIFwiLi4vLi4vZW50cnlwb2ludHMvaTE4blwiO1xyXG5cclxuXHJcbmNvbnN0IHJlZHVjZXIgPSAoY2FydCwgYWN0aW9uKSA9PiB7XHJcbiAgICBzd2l0Y2goYWN0aW9uLnR5cGUpIHtcclxuXHJcbiAgICAgICAgY2FzZSAnU1RBUlRfR0VORVJBTF9MT0FESU5HJzpcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIC4uLmNhcnQsXHJcbiAgICAgICAgICAgICAgICBnZW5lcmFsTG9hZGluZzogdHJ1ZVxyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICBjYXNlICdTVE9QX0dFTkVSQUxfTE9BRElORyc6XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAuLi5jYXJ0LFxyXG4gICAgICAgICAgICAgICAgZ2VuZXJhbExvYWRpbmc6IGZhbHNlXHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgIGNhc2UgJ0ZFVENIJzpcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIC4uLmNhcnQsXHJcbiAgICAgICAgICAgICAgICAvLyBhY3Rpb24ucGF5bG9hZCA9PT0gZnVsbENhcnRcclxuICAgICAgICAgICAgICAgIGNhcnRWZW5kb3JHcm91cHM6IGFjdGlvbi5wYXlsb2FkLmNhcnRWZW5kb3JHcm91cHMubWFwKGNhcnRWZW5kb3JHcm91cCA9PiAoe1xyXG4gICAgICAgICAgICAgICAgICAgIC4uLmNhcnRWZW5kb3JHcm91cCxcclxuICAgICAgICAgICAgICAgICAgICBjYXJ0TGluZXM6IGNhcnRWZW5kb3JHcm91cC5jYXJ0TGluZXMubWFwKGNhcnRMaW5lID0+ICh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkOiBjYXJ0TGluZS5wYWNrYWdpbmcuaWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhY2thZ2luZzogY2FydExpbmUucGFja2FnaW5nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBxdWFudGl0eTogY2FydExpbmUucXVhbnRpdHksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHVuaXRQcmljZTogY2FydExpbmUudW5pdFByaWNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0b3RhbFByaWNlOiBjYXJ0TGluZS50b3RhbFByaWNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlcnJvcjogbnVsbFxyXG4gICAgICAgICAgICAgICAgICAgIH0pKVxyXG4gICAgICAgICAgICAgICAgfSkpLFxyXG4gICAgICAgICAgICAgICAgY291bnQ6IGFjdGlvbi5wYXlsb2FkLmNvdW50LFxyXG4gICAgICAgICAgICAgICAgdG90YWxQcmljZTogYWN0aW9uLnBheWxvYWQudG90YWxQcmljZSxcclxuICAgICAgICAgICAgICAgIGdlbmVyYWxFcnJvcjogbnVsbFxyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICBjYXNlICdTRVRfUVVBTlRJVFknOiBcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIC4uLmNhcnQsXHJcbiAgICAgICAgICAgICAgICBjYXJ0VmVuZG9yR3JvdXBzOiBjYXJ0LmNhcnRWZW5kb3JHcm91cHMubWFwKGNhcnRWZW5kb3JHcm91cCA9PiAoe1xyXG4gICAgICAgICAgICAgICAgICAgIC4uLmNhcnRWZW5kb3JHcm91cCxcclxuICAgICAgICAgICAgICAgICAgICBjYXJ0TGluZXM6IGNhcnRWZW5kb3JHcm91cC5jYXJ0TGluZXMubWFwKGNhcnRMaW5lID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYoY2FydExpbmUucGFja2FnaW5nLmlkID09PSBhY3Rpb24udGFyZ2V0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL29uIHbDqXJpZmllIGxlIHN0b2NrXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZihhY3Rpb24ucGF5bG9hZCA+IGNhcnRMaW5lLnBhY2thZ2luZy5zdG9jaykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhcnRMaW5lLnF1YW50aXR5ID0gY2FydExpbmUucGFja2FnaW5nLnN0b2NrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhcnRMaW5lLmVycm9yID0gdCgnaW5zdWZmaWNpZW50X3N0b2NrJywge25zOiAnbWVzc2FnZXMnfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYoYWN0aW9uLnBheWxvYWQgPCAxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FydExpbmUucXVhbnRpdHkgPSAxO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhcnRMaW5lLmVycm9yID0gbnVsbDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FydExpbmUucXVhbnRpdHkgPSBhY3Rpb24ucGF5bG9hZDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXJ0TGluZS5lcnJvciA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXJ0TGluZS50b3RhbFByaWNlID0gcHJpY2VNdWx0aXBseShjYXJ0TGluZS51bml0UHJpY2UsIGNhcnRMaW5lLnF1YW50aXR5KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gY2FydExpbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIH0pKVxyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICBjYXNlICdSRU1PVkUnOlxyXG4gICAgICAgICAgICBjb25zdCBsaW5lVG9SZW1vdmUgPSAoZXh0cmFjdENhcnRMaW5lcyhjYXJ0KSkuZmluZChjYXJ0TGluZSA9PiBjYXJ0TGluZS5wYWNrYWdpbmcuaWQgPT09IGFjdGlvbi50YXJnZXQpO1xyXG4gICAgICAgICAgICBjb25zdCBsaW5lVG90YWxQcmljZSA9IGxpbmVUb1JlbW92ZS50b3RhbFByaWNlO1xyXG4gICAgICAgICAgICBjb25zdCBsaW5lUXVhbnRpdHkgPSBsaW5lVG9SZW1vdmUucXVhbnRpdHk7XHJcbiAgICAgICAgICAgIGNvbnN0IGxpbmVUb1JlbW92ZUlkID0gbGluZVRvUmVtb3ZlLmlkO1xyXG5cclxuICAgICAgICAgICAgLy9vbiBwcsOpcGFyZSBsZSBub3V2ZWwgYXJyYXkgY2FydFZlbmRvckdyb3VwcyBlbiBzdXBwcmltYW50IGxhIGxpbmVUb1JlbW92ZVxyXG4gICAgICAgICAgICBjb25zdCBjYXJ0VmVuZG9yR3JvdXBzID0gY2FydC5jYXJ0VmVuZG9yR3JvdXBzLm1hcChjYXJ0VmVuZG9yR3JvdXAgPT4gKHtcclxuICAgICAgICAgICAgICAgIC4uLmNhcnRWZW5kb3JHcm91cCxcclxuICAgICAgICAgICAgICAgIGNhcnRMaW5lczogY2FydFZlbmRvckdyb3VwLmNhcnRMaW5lcy5maWx0ZXIoY2FydExpbmUgPT4gY2FydExpbmUuaWQgIT09IGxpbmVUb1JlbW92ZUlkKVxyXG4gICAgICAgICAgICB9KSk7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgLi4uY2FydCxcclxuICAgICAgICAgICAgICAgIGNhcnRWZW5kb3JHcm91cHM6IGNhcnRWZW5kb3JHcm91cHMuZmlsdGVyKGNhcnRWZW5kb3JHcm91cCA9PiBjYXJ0VmVuZG9yR3JvdXAuY2FydExpbmVzLmxlbmd0aCA+IDApLCAvL29uIHN1cHByaW1lIGxlIHZlbmRvckdyb3VwIHMnaWwgbidhIHBsdXMgYXVjdW5lIGNhcnRMaW5lXHJcbiAgICAgICAgICAgICAgICB0b3RhbFByaWNlOiBwcmljZUxlc3MoY2FydC50b3RhbFByaWNlLCBsaW5lVG90YWxQcmljZSksXHJcbiAgICAgICAgICAgICAgICBjb3VudDogY2FydC5jb3VudCAtIGxpbmVRdWFudGl0eVxyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICBjYXNlICdFUlJPUic6XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAuLi5jYXJ0LFxyXG4gICAgICAgICAgICAgICAgZ2VuZXJhbExvYWRpbmc6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgZ2VuZXJhbEVycm9yOiBhY3Rpb24ucGF5bG9hZCBcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICBjYXNlICdVUERBVEVfVE9UQUxfUFJJQ0VfQU5EX0NPVU5UJzpcclxuICAgICAgICAgICAgLy9vbiBjcsOpZSB1biB0YWJsZWF1IGNvbnRlbmFudCB0b3VzIGxlcyBjYXJ0TGluZS50b3RhbFByaWNlIGluZGV4w6lzIHBhciBjYXJ0TGluZUlkXHJcbiAgICAgICAgICAgIGNvbnN0IGNhcnRMaW5lcyA9IGV4dHJhY3RDYXJ0TGluZXMoY2FydCk7XHJcbiAgICAgICAgICAgIGNvbnN0IGxpbmVUb3RhbFByaWNlc0J5SWQgPSBPYmplY3QuZnJvbUVudHJpZXMoY2FydExpbmVzLm1hcChjYXJ0TGluZSA9PiAoW1xyXG4gICAgICAgICAgICAgICAgY2FydExpbmUuaWQsXHJcbiAgICAgICAgICAgICAgICBwcmljZU11bHRpcGx5KGNhcnRMaW5lLnVuaXRQcmljZSwgY2FydExpbmUucXVhbnRpdHkpXHJcbiAgICAgICAgICAgIF0pKSk7XHJcbiAgICAgICAgICAgIC8vb24gYWRkaXRpb25uZSBwb3VyIG9idGVuaXIgbGUgY2FydC50b3RhbFByaWNlXHJcbiAgICAgICAgICAgIGNvbnN0IGNhcnRUb3RhbFByaWNlID0gcHJpY2VBZGQoT2JqZWN0LnZhbHVlcyhsaW5lVG90YWxQcmljZXNCeUlkKSk7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBjb3VudCA9IGNhcnRMaW5lcy5yZWR1Y2UoKGFjYywgY2FydExpbmUpID0+IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBhY2MgKyBjYXJ0TGluZS5xdWFudGl0eTtcclxuICAgICAgICAgICAgfSwgMCk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgLi4uY2FydCxcclxuICAgICAgICAgICAgICAgIGNhcnRWZW5kb3JHcm91cHM6IGNhcnQuY2FydFZlbmRvckdyb3Vwcy5tYXAoY2FydFZlbmRvckdyb3VwID0+ICh7XHJcbiAgICAgICAgICAgICAgICAgICAgLi4uY2FydFZlbmRvckdyb3VwLFxyXG4gICAgICAgICAgICAgICAgICAgIGNhcnRMaW5lczogY2FydFZlbmRvckdyb3VwLmNhcnRMaW5lcy5tYXAoY2FydExpbmUgPT4gKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLi4uY2FydExpbmUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvdGFsUHJpY2U6IGxpbmVUb3RhbFByaWNlc0J5SWRbY2FydExpbmUuaWRdIC8vIG9uIG1ldCDDoCBqb3VyIHRvdXMgbGVzIGNhcnRMaW5lLnRvdGFsUHJpY2UgZ3LDomNlIMOgIG5vdHJlIHRhYmxlYXUgbGluZVRvdGFsUHJpY2VzQnlJZFxyXG4gICAgICAgICAgICAgICAgICAgIH0pKVxyXG4gICAgICAgICAgICAgICAgfSkpLFxyXG4gICAgICAgICAgICAgICAgdG90YWxQcmljZTogY2FydFRvdGFsUHJpY2UsXHJcbiAgICAgICAgICAgICAgICBjb3VudDogY291bnRcclxuICAgICAgICAgICAgfTtcclxuICAgIH1cclxufVxyXG5cclxuXHJcbi8qKlxyXG4gKiBAcmV0dXJucyBcclxuICovXHJcbmV4cG9ydCBjb25zdCB1c2VDYXJ0RmV0Y2ggPSAoKSA9PiB7XHJcblxyXG4gICAgY29uc3QgW2NhcnQsIGRpc3BhdGNoXSA9IHVzZVJlZHVjZXIocmVkdWNlciwge1xyXG4gICAgICAgIGNhcnRWZW5kb3JHcm91cHM6IFtdLFxyXG4gICAgICAgIGNvdW50OiBudWxsLFxyXG4gICAgICAgIHRvdGFsUHJpY2U6IG51bGwsXHJcbiAgICAgICAgZ2VuZXJhbExvYWRpbmc6IGZhbHNlLCAvLyBsb2FkaW5nIGR1IGZldGNoXHJcbiAgICAgICAgZ2VuZXJhbEVycm9yOiBudWxsXHJcbiAgICB9KTtcclxuXHJcbiAgICBjb25zdCBbcXVhbnRpdHlUaW1lciwgc2V0UXVhbnRpdHlUaW1lcl0gPSB1c2VTdGF0ZShudWxsKTtcclxuXHJcbiAgICBjb25zdCBmZXRjaENhcnQgPSB1c2VDYWxsYmFjayhhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgZGlzcGF0Y2goe3R5cGU6ICdTVEFSVF9HRU5FUkFMX0xPQURJTkcnfSk7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgY29uc3QgZnVsbENhcnQgPSBhd2FpdCBhcGlGZXRjaCgnLycraTE4bi5sYW5ndWFnZSsnL2FwaS9jYXJ0L2dldEZ1bGxDYXJ0Jyk7XHJcbiAgICAgICAgICAgIGRpc3BhdGNoKHt0eXBlOiAnRkVUQ0gnLCBwYXlsb2FkOiBmdWxsQ2FydH0pO1xyXG4gICAgICAgIH0gY2F0Y2goZSkge1xyXG4gICAgICAgICAgICBkaXNwYXRjaCh7dHlwZTogJ0VSUk9SJywgcGF5bG9hZDogZX0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBkaXNwYXRjaCh7dHlwZTogJ1NUT1BfR0VORVJBTF9MT0FESU5HJ30pO1xyXG4gICAgfSwgW2Rpc3BhdGNoXSk7XHJcblxyXG4gICAgY29uc3QgcmVtb3ZlID0gdXNlQ2FsbGJhY2soYXN5bmMgKHBhY2thZ2luZ0lkKSA9PiB7XHJcbiAgICAgICAgZGlzcGF0Y2goe3R5cGU6ICdSRU1PVkUnLCB0YXJnZXQ6IHBhY2thZ2luZ0lkfSk7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgYXdhaXQgYXBpRmV0Y2goJy8nK2kxOG4ubGFuZ3VhZ2UrJy9hcGkvY2FydC9yZW1vdmUvaWQtJytwYWNrYWdpbmdJZCk7XHJcbiAgICAgICAgfSBjYXRjaChlKSB7XHJcbiAgICAgICAgICAgIC8vb24gcsOpYWN0dWFsaXNlIHBvdXIgw6p0cmUgcmFjY29yZCBhdmVjIGxhIGRhdGFiYXNlXHJcbiAgICAgICAgICAgIGZldGNoQ2FydCgpO1xyXG4gICAgICAgIH0gICBcclxuICAgIH0sIFtmZXRjaENhcnQsIGRpc3BhdGNoXSk7XHJcblxyXG4gICAgY29uc3Qgc2V0UXVhbnRpdHkgPSB1c2VDYWxsYmFjaygocGFja2FnaW5nSWQsIHF1YW50aXR5KSA9PiB7XHJcbiAgICAgICAgZGlzcGF0Y2goe3R5cGU6ICdTRVRfUVVBTlRJVFknLCB0YXJnZXQ6IHBhY2thZ2luZ0lkLCBwYXlsb2FkOiBxdWFudGl0eX0pO1xyXG4gICAgICAgIC8vb24gZG9pdCBhdHRlbmRyZSBsYSBtaXNlIMOgIGpvdXIgZGUgbCfDqXRhdCBjaS1kZXNzdXMgcG91ciBzYXZvaXIgc2kgbCdham91dCBhIHB1IHNlIGZhaXJlLCBldCBlbnN1aXRlIG1ldHRyZSDDoCBqb3VyIGxlIHByaXggdG90YWwgZXQgbGUgY291bnRcclxuICAgICAgICBkaXNwYXRjaCh7dHlwZTogJ1VQREFURV9UT1RBTF9QUklDRV9BTkRfQ09VTlQnfSk7IC8vbW9kaWZpZSBjYXJ0IGV0IGTDqWNsZW5jaGUgbGUgY2FydENoaXBVcGRhdGUoKVxyXG5cclxuICAgICAgICAvL2NvdMOpIHNlcnZlciA6IG9uIG1ldCB1biB0aW1lciBwb3VyIMOpdml0ZXIgdHJvcCBkJ2FwcGVscyBzdWNjZXNzaWYgKG9uIGFwcGVsbGUgbGUgc2VydmV1ciBxdSd1bmUgZm9pcyB0b3V0ZXMgbGVzIDMwMCBtcyBhdSBtYXhpbXVtKVxyXG4gICAgICAgIGlmKHF1YW50aXR5VGltZXIpIHtcclxuICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHF1YW50aXR5VGltZXIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBzZXRRdWFudGl0eVRpbWVyKFxyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KGFzeW5jICgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYXdhaXQgYXBpRmV0Y2goJy8nK2kxOG4ubGFuZ3VhZ2UrJy9hcGkvY2FydC9zZXRRdWFudGl0eS9pZC0nK3BhY2thZ2luZ0lkKydfcXVhbnRpdHktJytxdWFudGl0eSk7XHJcbiAgICAgICAgICAgICAgICB9IGNhdGNoKGUpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZighZSBpbnN0YW5jZW9mIEFwaUVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vZW4gY2FzIGQnZXJyZXVyIGF1dHJlIHF1ZSBzdG9jayAoZ8OpcsOpZSBlbiBsb2NhbCkgb24gcsOpYWN0dWFsaXNlIHBvdXIgw6p0cmUgcmFjY29yZCBhdmVjIGxhIGRhdGFiYXNlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZldGNoQ2FydCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSwgMzAwKVxyXG4gICAgICAgICk7XHJcbiAgICB9LCBbZmV0Y2hDYXJ0LCBkaXNwYXRjaCwgcXVhbnRpdHlUaW1lcl0pO1xyXG5cclxuXHJcbiAgICByZXR1cm4ge2NhcnQsIGZldGNoQ2FydCwgcmVtb3ZlLCBzZXRRdWFudGl0eX07XHJcbn1cclxuXHJcblxyXG5cclxuXHJcblxyXG4iLCJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiXHJcblxyXG5leHBvcnQgY29uc3QgdXNlQnV0dG9uTG9hZGluZyA9ICgpID0+IHtcclxuICAgIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IGhhbmRsZUJ1dHRvbkNsaWNrID0gZSA9PiB7XHJcbiAgICAgICAgaWYobG9hZGluZykge1xyXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgc2V0TG9hZGluZyh0cnVlKTtcclxuICAgIH07XHJcbiAgICByZXR1cm4gW2xvYWRpbmcsIGhhbmRsZUJ1dHRvbkNsaWNrXTtcclxufSIsImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIlxyXG5pbXBvcnQgeyB1c2VTY3JvbGxZTGlzdGVuZXIgfSBmcm9tIFwiLi91c2VTY3JvbGxZTGlzdGVuZXJcIjtcclxuXHJcbmV4cG9ydCBjb25zdCB1c2VTY3JvbGxZRGlyZWN0aW9uTGlzdGVuZXIgPSAoc3RhcnQgPSA3MCwgc2Vuc2liaWxpdHkgPSA1MCkgPT4ge1xyXG4gICAgY29uc3QgY3VycmVudFNjcm9sbCA9IHVzZVNjcm9sbFlMaXN0ZW5lcigpO1xyXG5cclxuICAgIGNvbnN0IFtpc1Njcm9sbGluZ0Rvd24sIHNldFNjcm9sbGluZ0Rvd25dID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgW2lzU2Nyb2xsaW5nVXAsIHNldFNjcm9sbGluZ1VwXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IFtsYXN0U2Nyb2xsLCBzZXRMYXN0U2Nyb2xsXSA9IHVzZVN0YXRlKDApO1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgIC8vb24gdsOpcmlmaWUgc2kgb24gZXN0IGF1IGRlbGEgZHUgc2Nyb2xsIHN0YXJ0XHJcbiAgICAgICAgIGlmKGN1cnJlbnRTY3JvbGwgPCBzdGFydCkge1xyXG4gICAgICAgICAgICBzZXRTY3JvbGxpbmdVcChmYWxzZSk7XHJcbiAgICAgICAgICAgIHNldFNjcm9sbGluZ0Rvd24oZmFsc2UpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vb24gdsOpcmlmaWUgc2kgb24gZXN0IGVuIHNjcm9sbCBkb3duIG91IHVwXHJcbiAgICAgICAgaWYoY3VycmVudFNjcm9sbCA+IChsYXN0U2Nyb2xsICsgc2Vuc2liaWxpdHkpKSB7XHJcbiAgICAgICAgICAgIHNldFNjcm9sbGluZ1VwKGZhbHNlKTtcclxuICAgICAgICAgICAgc2V0U2Nyb2xsaW5nRG93bih0cnVlKTtcclxuICAgICAgICAgICAgc2V0TGFzdFNjcm9sbChjdXJyZW50U2Nyb2xsKTtcclxuICAgICAgICB9IGVsc2UgaWYoY3VycmVudFNjcm9sbCA8IChsYXN0U2Nyb2xsIC0gc2Vuc2liaWxpdHkpKSB7XHJcbiAgICAgICAgICAgIHNldFNjcm9sbGluZ0Rvd24oZmFsc2UpO1xyXG4gICAgICAgICAgICBzZXRTY3JvbGxpbmdVcCh0cnVlKTtcclxuICAgICAgICAgICAgc2V0TGFzdFNjcm9sbChjdXJyZW50U2Nyb2xsKTtcclxuICAgICAgICB9IFxyXG5cclxuICAgIH0sIFtjdXJyZW50U2Nyb2xsXSk7XHJcblxyXG4gICAgcmV0dXJuIHtpc1Njcm9sbGluZ0Rvd24sIGlzU2Nyb2xsaW5nVXB9O1xyXG59IiwiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcblxyXG5leHBvcnQgY29uc3QgdXNlU2Nyb2xsWUxpc3RlbmVyID0gKCkgPT4ge1xyXG4gICAgY29uc3QgW2N1cnJlbnRTY3JvbGwsIHNldEN1cnJlbnRTY3JvbGxdID0gdXNlU3RhdGUod2luZG93LnNjcm9sbFkpO1xyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBjb25zdCBvblNjcm9sbCA9ICgpID0+IHtcclxuICAgICAgICAgICAgc2V0Q3VycmVudFNjcm9sbCh3aW5kb3cuc2Nyb2xsWSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgb25TY3JvbGwpO1xyXG5cclxuICAgICAgICByZXR1cm4gKCkgPT4gd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIG9uU2Nyb2xsKTtcclxuICAgIH0sIFtdKTtcclxuXHJcbiAgICByZXR1cm4gY3VycmVudFNjcm9sbDtcclxufSIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcblxyXG5leHBvcnQgY29uc3QgQWNjb3VudEJhZGdlID0gKHt1c2VyfSkgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJhY2NvdW50LWljb24tbG9nZ2VkXCI+XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHVzZXIucm9sZXMuaW5jbHVkZXMoJ1JPTEVfUFJPJykgJiYgdXNlci5jb21wYW55ID8gKFxyXG4gICAgICAgICAgICAgICAgICAgIHVzZXIuY29tcGFueS51c3VhbE5hbWUuc3Vic3RyKDAsIDEpLnRvVXBwZXJDYXNlKClcclxuICAgICAgICAgICAgICAgICk6IChcclxuICAgICAgICAgICAgICAgICAgICB1c2VyLmZpcnN0TmFtZS5zdWJzdHIoMCwgMSkudG9VcHBlckNhc2UoKVxyXG4gICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgPC9zcGFuPlxyXG4gICAgKVxyXG59IiwiaW1wb3J0IHsgdCB9IGZyb20gJ2kxOG5leHQnO1xyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5cclxuY29uc3QgcmVzb2x2ZUxhYmVsID0gcm9sZXMgPT4ge1xyXG4gICAgbGV0IGxhYmVsID0gbnVsbDtcclxuICAgIGlmKHJvbGVzLmluY2x1ZGVzKCdST0xFX0FETUlOJykpIHtcclxuICAgICAgICBsYWJlbCA9ICdhZG1pbic7XHJcbiAgICB9IGVsc2UgaWYocm9sZXMuaW5jbHVkZXMoJ1JPTEVfVkVORE9SJykpIHtcclxuICAgICAgICBsYWJlbCA9IHQoJ3ZlbmRvcicsIHtuczogJ21lc3NhZ2VzJ30pO1xyXG4gICAgfSBlbHNlIGlmKHJvbGVzLmluY2x1ZGVzKCdST0xFX1BSTycpKSB7XHJcbiAgICAgICAgbGFiZWwgPSB0KCdwcm8nLCB7bnM6ICdtZXNzYWdlcyd9KTtcclxuICAgIH1cclxuICAgIHJldHVybiBsYWJlbDtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IFJvbGVCYWRnZSA9ICh7cm9sZXMsIGFkZGl0aW9uYWxDbGFzcywgYWxpZ24gPSAnbGVmdCd9KSA9PiB7XHJcblxyXG4gICAgY29uc3QgbGFiZWwgPSByZXNvbHZlTGFiZWwocm9sZXMpO1xyXG5cclxuICAgIGlmKGxhYmVsKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2FsaWduICsgJy13cmFwcGVyJyArIChhZGRpdGlvbmFsQ2xhc3MgPyAnICcrYWRkaXRpb25hbENsYXNzOiAnJyl9PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWJhZGdlIGJnLWJvcmRlYXV4LWZsYXNoXCI+e2xhYmVsfTwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApXHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5leHBvcnQgY29uc3QgRmx5Um9sZUJhZGdlID0gKHtyb2xlcywgYWRkaXRpb25hbENsYXNzfSkgPT4ge1xyXG5cclxuICAgIGNvbnN0IGxhYmVsID0gcmVzb2x2ZUxhYmVsKHJvbGVzKTtcclxuXHJcbiAgICBpZihsYWJlbCkge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXsndGV4dC1iYWRnZSBiZy1ib3JkZWF1eC1mbGFzaCcgKyAoYWRkaXRpb25hbENsYXNzID8gJyAnK2FkZGl0aW9uYWxDbGFzczogJycpfT57bGFiZWx9PC9kaXY+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG59IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuXHJcbmV4cG9ydCBjb25zdCBXYXJuaW5nQmFkZ2UgPSAoe251bWJlciA9IDF9KSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmFkZ2UgYmFkZ2UtcmlnaHQgd2FybmluZy1iYWRnZVwiPlxyXG4gICAgICAgICAgICB7bnVtYmVyfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgQWNjb3VudEljb24gfSBmcm9tICcuLi9JY29uL0FjY291bnRJY29uJztcclxuaW1wb3J0IHsgQWNjb3VudEJhZGdlIH0gZnJvbSAnLi4vQmFkZ2UvQWNjb3VudEJhZGdlJztcclxuaW1wb3J0IHsgdCB9IGZyb20gJ2kxOG5leHQnO1xyXG5cclxuZXhwb3J0IGNvbnN0IEFjY291bnRCdXR0b24gPSAoe2NoaWxkcmVuLCBvbkNsaWNrLCBhZGRpdGlvbmFsQ2xhc3MsIHVzZXIsIC4uLnByb3BzfSkgPT4ge1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGJ1dHRvbiBcclxuICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiIFxyXG4gICAgICAgICAgICBjbGFzc05hbWU9eydidXR0b24gYnV0dG9uLWxpbmsgaWNvbi1idXR0b24nICsgKGFkZGl0aW9uYWxDbGFzcyA/ICcgJyArIGFkZGl0aW9uYWxDbGFzczogJycpfSBcclxuICAgICAgICAgICAgYXJpYS1sYWJlbD17dCgnbXlfYWNjb3VudCcsIHtuczogJ21lc3NhZ2VzJ30pfSBcclxuICAgICAgICAgICAgb25DbGljaz17b25DbGlja30gey4uLnByb3BzfVxyXG4gICAgICAgICAgICA+IFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAhdXNlciAmJiA8QWNjb3VudEljb24gLz5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB1c2VyICYmIDxBY2NvdW50QmFkZ2UgdXNlcj17dXNlcn0gLz5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB7Y2hpbGRyZW59XHJcbiAgICAgICAgPC9idXR0b24+XHJcbiAgICApXHJcbn1cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyB0IH0gZnJvbSAnaTE4bmV4dCc7XHJcblxyXG5leHBvcnQgY29uc3QgQmVjb21lVmVuZG9yTGluayA9ICgpID0+IHtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxhIGNsYXNzTmFtZT1cImhlYWRlci10b3AtdmVuZG9yLWNvbnRhY3QtYnV0dG9uIGZvcm0tYnV0dG9uIGJvcmRlYXV4XCIgaHJlZj17dCgndXJsLmNvbnRhY3QuYmVjb21lX3ZlbmRvcicsIHtuczogJ3VybHMnfSl9PlxyXG4gICAgICAgICAgICB7dCgnYmVjb21lX3ZlbmRvcicsIHtuczogJ21lc3NhZ2VzJ30pfVxyXG4gICAgICAgIDwvYT5cclxuICAgIClcclxufSIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gJy4vQnV0dG9uJztcclxuaW1wb3J0IHsgQ2FydEljb24gfSBmcm9tICcuLi9JY29uL0NhcnRJY29uJztcclxuaW1wb3J0IHsgdCB9IGZyb20gJ2kxOG5leHQnO1xyXG5cclxuZXhwb3J0IGNvbnN0IENhcnRCdXR0b24gPSAoe2NoaWxkcmVuLCBvbkNsaWNrLCBhZGRpdGlvbmFsQ2xhc3MsIC4uLnByb3BzfSkgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8QnV0dG9uIFxyXG4gICAgICAgICAgICBjbGFzc05hbWU9eydpY29uLWJ1dHRvbicgKyAoYWRkaXRpb25hbENsYXNzID8gJyAnICsgYWRkaXRpb25hbENsYXNzOiAnJyl9IFxyXG4gICAgICAgICAgICBhcmlhLWxhYmVsPXt0KCdjYXJ0Jywge25zOiAnbWVzc2FnZXMnfSl9IFxyXG4gICAgICAgICAgICB0aXRsZT17dCgnb3Blbl9jYXJ0Jywge25zOiAnbWVzc2FnZXMnfSl9XHJcbiAgICAgICAgICAgIG9uQ2xpY2s9e29uQ2xpY2t9IFxyXG4gICAgICAgICAgICB7Li4ucHJvcHN9XHJcbiAgICAgICAgPiBcclxuICAgICAgICAgICAgPENhcnRJY29uIC8+XHJcbiAgICAgICAgICAgIHtjaGlsZHJlbn1cclxuICAgICAgICA8L0J1dHRvbj5cclxuICAgIClcclxufSIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gJy4vQnV0dG9uJztcclxuaW1wb3J0IHsgQ2hhdEljb24gfSBmcm9tICcuLi9JY29uL0NoYXRJY29uJztcclxuaW1wb3J0IHsgdCB9IGZyb20gJ2kxOG5leHQnO1xyXG5cclxuZXhwb3J0IGNvbnN0IENoYXRCdXR0b24gPSAoe2NoaWxkcmVuLCBvbkNsaWNrLCBhZGRpdGlvbmFsQ2xhc3MsIC4uLnByb3BzfSkgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8QnV0dG9uIFxyXG4gICAgICAgICAgICBjbGFzc05hbWU9eydpY29uLWJ1dHRvbicgKyAoYWRkaXRpb25hbENsYXNzID8gJyAnICsgYWRkaXRpb25hbENsYXNzOiAnJyl9IFxyXG4gICAgICAgICAgICBhcmlhLWxhYmVsPXt0KCdjb250YWN0X3VzJywge25zOiAnbWVzc2FnZXMnfSl9IFxyXG4gICAgICAgICAgICB0aXRsZT17dCgnY29udGFjdF91cycsIHtuczogJ21lc3NhZ2VzJ30pfVxyXG4gICAgICAgICAgICBvbkNsaWNrPXtvbkNsaWNrfSBcclxuICAgICAgICAgICAgey4uLnByb3BzfVxyXG4gICAgICAgID4gXHJcbiAgICAgICAgICAgIDxDaGF0SWNvbiAvPlxyXG4gICAgICAgICAgICB7Y2hpbGRyZW59XHJcbiAgICAgICAgPC9CdXR0b24+XHJcbiAgICApXHJcbn0iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBMb2dvdXRJY29uIH0gZnJvbSAnLi4vSWNvbi9Mb2dvdXRJY29uJztcclxuaW1wb3J0IGkxOG4gZnJvbSAnLi4vLi4vZW50cnlwb2ludHMvaTE4bic7XHJcbmltcG9ydCB7IHQgfSBmcm9tICdpMThuZXh0JztcclxuXHJcbmV4cG9ydCBjb25zdCBMb2dvdXRCdXR0b24gPSAoe2NsYXNzTmFtZSwgLi4ucHJvcHN9KSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxhIGNsYXNzTmFtZT17Y2xhc3NOYW1lID8/ICdsaW5rLW11dGUgc2ltcGxlLWxpbmsgaS10ZXh0J30gaHJlZj17Jy8nKyBpMThuLmxhbmd1YWdlICsnL2xvZ291dCd9IHsuLi5wcm9wc30+XHJcbiAgICAgICAgICAgIDxMb2dvdXRJY29uIC8+XHJcbiAgICAgICAgICAgIDxzcGFuPnt0KCdsb2dvdXQnLCB7bnM6ICdtZXNzYWdlcyd9KX08L3NwYW4+XHJcbiAgICAgICAgPC9hPlxyXG4gICAgKVxyXG59IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgTWVudUljb24gfSBmcm9tICcuLi9JY29uL01lbnVJY29uJztcclxuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSAnLi9CdXR0b24nO1xyXG5pbXBvcnQgeyB0IH0gZnJvbSAnaTE4bmV4dCc7XHJcblxyXG5leHBvcnQgY29uc3QgTWVudUJ1dHRvbiA9ICh7YWRkaXRpb25hbENsYXNzLCAuLi5wcm9wc30pID0+IHtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxCdXR0b24gXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17J2ljb24tYnV0dG9uJyArIChhZGRpdGlvbmFsQ2xhc3MgPyAnICcgKyBhZGRpdGlvbmFsQ2xhc3M6ICcnKX0gXHJcbiAgICAgICAgICAgIGFyaWEtbGFiZWw9e3QoJ21lbnUnLCB7bnM6ICdtZXNzYWdlcyd9KX1cclxuICAgICAgICAgICAgdGl0bGU9e3QoJ21lbnUnLCB7bnM6ICdtZXNzYWdlcyd9KX1cclxuICAgICAgICAgICAgey4uLnByb3BzfVxyXG4gICAgICAgID4gXHJcbiAgICAgICAgICAgIDxNZW51SWNvbiAvPlxyXG4gICAgICAgIDwvQnV0dG9uPlxyXG4gICAgKVxyXG59IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgU2VhcmNoSWNvbiB9IGZyb20gJy4uL0ljb24vU2VhcmNoSWNvbic7XHJcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gJy4vQnV0dG9uJztcclxuaW1wb3J0IHsgdCB9IGZyb20gJ2kxOG5leHQnO1xyXG5cclxuZXhwb3J0IGNvbnN0IFNlYXJjaEJ1dHRvbiA9ICh7YWRkaXRpb25hbENsYXNzLCAuLi5wcm9wc30pID0+IHtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxCdXR0b24gXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17J2ljb24tYnV0dG9uJyArIChhZGRpdGlvbmFsQ2xhc3MgPyAnICcgKyBhZGRpdGlvbmFsQ2xhc3M6ICcnKX0gXHJcbiAgICAgICAgICAgIGFyaWEtbGFiZWw9e3QoJ3NlYXJjaCcsIHtuczogJ21lc3NhZ2VzJ30pfVxyXG4gICAgICAgICAgICB0aXRsZT17dCgnc2VhcmNoJywge25zOiAnbWVzc2FnZXMnfSl9XHJcbiAgICAgICAgICAgIHsuLi5wcm9wc31cclxuICAgICAgICAgICAgPiBcclxuICAgICAgICAgICAgPFNlYXJjaEljb24gLz5cclxuICAgICAgICA8L0J1dHRvbj5cclxuICAgIClcclxufSIsImltcG9ydCB7IHQgfSBmcm9tICdpMThuZXh0JztcclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuXHJcbmV4cG9ydCBjb25zdCBGYWNlYm9va0xpbmsgPSAoe2NsYXNzTmFtZSwgLi4ucHJvcHN9KSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxhIFxyXG4gICAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9tLmZhY2Vib29rLmNvbS9wZW9wbGUvQ29ja3RhaWxpc3NpbW8vMTAwMDk0MTYwNjU4ODMyL1wiIFxyXG4gICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZX0gXHJcbiAgICAgICAgICAgIHRpdGxlPXt0KCdmb2xsb3dfdXNfb25fZmFjZWJvb2snLCB7bnM6ICdtZXNzYWdlcyd9KX1cclxuICAgICAgICAgICAgYXJpYS1sYWJlbD17dCgnZm9sbG93X3VzX29uX2ZhY2Vib29rJywge25zOiAnbWVzc2FnZXMnfSl9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgICA8c3ZnIGNsYXNzTmFtZT1cImljb24gaS1zb2NpYWwgaS1mYWNlYm9va1wiIHsuLi5wcm9wc30gdmVyc2lvbj1cIjEuMVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB4PVwiMHB4XCIgeT1cIjBweFwiIHZpZXdCb3g9XCIwIDAgMTU1LjEzOSAxNTUuMTM5XCI+XHJcbiAgICAgICAgICAgICAgICA8Zz5cclxuICAgICAgICAgICAgICAgIDxwYXRoIGZpbGw9XCJjdXJyZW50Q29sb3JcIiBpZD1cImZfMV9cIiBkPVwiTTg5LjU4NCwxNTUuMTM5Vjg0LjM3OGgyMy43NDJsMy41NjItMjcuNTg1SDg5LjU4NFYzOS4xODRcclxuICAgICAgICAgICAgICAgICAgICBjMC03Ljk4NCwyLjIwOC0xMy40MjUsMTMuNjctMTMuNDI1bDE0LjU5NS0wLjAwNlYxLjA4QzExNS4zMjUsMC43NTIsMTA2LjY2MSwwLDk2LjU3NywwQzc1LjUyLDAsNjEuMTA0LDEyLjg1Myw2MS4xMDQsMzYuNDUyXHJcbiAgICAgICAgICAgICAgICAgICAgdjIwLjM0MUgzNy4yOXYyNy41ODVoMjMuODE0djcwLjc2MUg4OS41ODR6XCI+PC9wYXRoPlxyXG4gICAgICAgICAgICAgICAgPC9nPlxyXG4gICAgICAgICAgICAgICAgPGc+PC9nPlxyXG4gICAgICAgICAgICAgICAgPGc+PC9nPlxyXG4gICAgICAgICAgICAgICAgPGc+PC9nPlxyXG4gICAgICAgICAgICAgICAgPGc+PC9nPlxyXG4gICAgICAgICAgICAgICAgPGc+PC9nPlxyXG4gICAgICAgICAgICAgICAgPGc+PC9nPlxyXG4gICAgICAgICAgICAgICAgPGc+PC9nPlxyXG4gICAgICAgICAgICAgICAgPGc+PC9nPlxyXG4gICAgICAgICAgICAgICAgPGc+PC9nPlxyXG4gICAgICAgICAgICAgICAgPGc+PC9nPlxyXG4gICAgICAgICAgICAgICAgPGc+PC9nPlxyXG4gICAgICAgICAgICAgICAgPGc+PC9nPlxyXG4gICAgICAgICAgICAgICAgPGc+PC9nPlxyXG4gICAgICAgICAgICAgICAgPGc+PC9nPlxyXG4gICAgICAgICAgICAgICAgPGc+PC9nPlxyXG4gICAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICA8L2E+XHJcbiAgICApXHJcbn0iLCJpbXBvcnQgeyB0IH0gZnJvbSAnaTE4bmV4dCc7XHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcblxyXG5leHBvcnQgY29uc3QgSW5zdGFncmFtTGluayA9ICh7Y2xhc3NOYW1lLCAuLi5wcm9wc30pID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGEgXHJcbiAgICAgICAgICAgIGhyZWY9XCJodHRwczovL3d3dy5pbnN0YWdyYW0uY29tL2NvY2t0YWlsbGlzc2ltby9cIiBcclxuICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWV9IFxyXG4gICAgICAgICAgICBhcmlhLWxhYmVsPXt0KCdmb2xsb3dfdXNfb25faW5zdGFncmFtJywge25zOiAnbWVzc2FnZXMnfSl9XHJcbiAgICAgICAgICAgIHRpdGxlPXt0KCdmb2xsb3dfdXNfb25faW5zdGFncmFtJywge25zOiAnbWVzc2FnZXMnfSl9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgPHN2ZyBjbGFzc05hbWU9XCJpY29uIGktc29jaWFsIGktaW5zdGFncmFtXCIgey4uLnByb3BzfSB2ZXJzaW9uPVwiMS4xXCIgaWQ9XCJpbnN0YWdyYW1cIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgeD1cIjBweFwiIHk9XCIwcHhcIiB2aWV3Qm94PVwiMCAwIDUxMiA1MTJcIj5cclxuICAgICAgICAgICAgICAgIDxnPlxyXG4gICAgICAgICAgICAgICAgPGc+XHJcbiAgICAgICAgICAgICAgICAgICAgPHBhdGggZmlsbD1cImN1cnJlbnRDb2xvclwiIGQ9XCJNMzcxLjY0MywwSDE0MC4zNTdDNjIuOTY0LDAsMCw2Mi45NjQsMCwxNDAuMzU4djIzMS4yODVDMCw0NDkuMDM3LDYyLjk2NCw1MTIsMTQwLjM1Nyw1MTJoMjMxLjI4NlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBDNDQ5LjAzNyw1MTIsNTEyLDQ0OS4wMzcsNTEyLDM3MS42NDNWMTQwLjM1OEM1MTIsNjIuOTY0LDQ0OS4wMzcsMCwzNzEuNjQzLDB6IE00ODEuNzY0LDM3MS42NDNcclxuICAgICAgICAgICAgICAgICAgICAgICAgYzAsNjAuNzIxLTQ5LjM5OSwxMTAuMTIxLTExMC4xMjEsMTEwLjEyMUgxNDAuMzU3Yy02MC43MjEsMC0xMTAuMTIxLTQ5LjM5OS0xMTAuMTIxLTExMC4xMjFWMTQwLjM1OFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjMC02MC43MjIsNDkuNC0xMTAuMTIyLDExMC4xMjEtMTEwLjEyMmgyMzEuMjg2YzYwLjcyMiwwLDExMC4xMjEsNDkuNCwxMTAuMTIxLDExMC4xMjJWMzcxLjY0M3pcIj48L3BhdGg+XHJcbiAgICAgICAgICAgICAgICA8L2c+XHJcbiAgICAgICAgICAgICAgICA8L2c+XHJcbiAgICAgICAgICAgICAgICA8Zz5cclxuICAgICAgICAgICAgICAgIDxnPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwYXRoIGZpbGw9XCJjdXJyZW50Q29sb3JcIiBkPVwiTTI1NiwxMTUuNTdjLTc3LjQzNCwwLTE0MC40MzEsNjIuOTk3LTE0MC40MzEsMTQwLjQzMVMxNzguNTY1LDM5Ni40MzIsMjU2LDM5Ni40MzJcclxuICAgICAgICAgICAgICAgICAgICAgICAgYzc3LjQzNCwwLDE0MC40MzItNjIuOTk4LDE0MC40MzItMTQwLjQzMlMzMzMuNDM0LDExNS41NywyNTYsMTE1LjU3eiBNMjU2LDM2Ni4xOTdjLTYwLjc2MiwwLTExMC4xOTYtNDkuNDM1LTExMC4xOTYtMTEwLjE5N1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjMC02MC43NjIsNDkuNDM0LTExMC4xOTYsMTEwLjE5Ni0xMTAuMTk2YzYwLjc2MywwLDExMC4xOTcsNDkuNDM1LDExMC4xOTcsMTEwLjE5N0MzNjYuMTk3LDMxNi43NjMsMzE2Ljc2MywzNjYuMTk3LDI1NiwzNjYuMTk3elxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcIj48L3BhdGg+XHJcbiAgICAgICAgICAgICAgICA8L2c+XHJcbiAgICAgICAgICAgICAgICA8L2c+XHJcbiAgICAgICAgICAgICAgICA8Zz5cclxuICAgICAgICAgICAgICAgIDxnPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwYXRoIGZpbGw9XCJjdXJyZW50Q29sb3JcIiBkPVwiTTQwNC44MzEsNjQuNTAzYy0yMy41MjYsMC00Mi42NjYsMTkuMTQxLTQyLjY2Niw0Mi42NjdjMCwyMy41MjYsMTkuMTQsNDIuNjY2LDQyLjY2Niw0Mi42NjZcclxuICAgICAgICAgICAgICAgICAgICAgICAgYzIzLjUyNiwwLDQyLjY2Ni0xOS4xNDEsNDIuNjY2LTQyLjY2N1M0MjguMzU3LDY0LjUwMyw0MDQuODMxLDY0LjUwM3ogTTQwNC44MzEsMTE5LjU5OWMtNi44NTMsMC0xMi40My01LjU3Ni0xMi40My0xMi40M1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzNS41NzctMTIuNDMsMTIuNDMtMTIuNDNjNi44NTQsMCwxMi40Myw1LjU3NywxMi40MywxMi40M1M0MTEuNjg1LDExOS41OTksNDA0LjgzMSwxMTkuNTk5elwiPjwvcGF0aD5cclxuICAgICAgICAgICAgICAgIDwvZz5cclxuICAgICAgICAgICAgICAgIDwvZz5cclxuICAgICAgICAgICAgICAgIDxnPjwvZz5cclxuICAgICAgICAgICAgICAgIDxnPjwvZz5cclxuICAgICAgICAgICAgICAgIDxnPjwvZz5cclxuICAgICAgICAgICAgICAgIDxnPjwvZz5cclxuICAgICAgICAgICAgICAgIDxnPjwvZz5cclxuICAgICAgICAgICAgICAgIDxnPjwvZz5cclxuICAgICAgICAgICAgICAgIDxnPjwvZz5cclxuICAgICAgICAgICAgICAgIDxnPjwvZz5cclxuICAgICAgICAgICAgICAgIDxnPjwvZz5cclxuICAgICAgICAgICAgICAgIDxnPjwvZz5cclxuICAgICAgICAgICAgICAgIDxnPjwvZz5cclxuICAgICAgICAgICAgICAgIDxnPjwvZz5cclxuICAgICAgICAgICAgICAgIDxnPjwvZz5cclxuICAgICAgICAgICAgICAgIDxnPjwvZz5cclxuICAgICAgICAgICAgICAgIDxnPjwvZz5cclxuICAgICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgPC9hPlxyXG4gICAgKVxyXG59IiwiaW1wb3J0IFJlYWN0LCB7IGZvcndhcmRSZWYsIHVzZUVmZmVjdCwgdXNlUmVmIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBDbG9zZUJ1dHRvbiB9IGZyb20gJy4uL0J1dHRvbi9DbG9zZUJ1dHRvbic7XHJcbmltcG9ydCB7IGNyZWF0ZVBvcnRhbCB9IGZyb20gJ3JlYWN0LWRvbSc7XHJcblxyXG5leHBvcnQgY29uc3QgTW9kYWwgPSBmb3J3YXJkUmVmKCh7Y2hpbGRyZW4sIGFkZGl0aW9uYWxDbGFzcywgaXNPcGVuLCBjbG9zZSA9IG51bGwsIGFuaW1hdGVkID0gdHJ1ZX0sIG1vZGFsUmVmKSA9PiB7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBpZihpc09wZW4pIHtcclxuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnaHRtbCwgYm9keScpLmZvckVhY2goZWx0ID0+IGVsdC5jbGFzc0xpc3QuYWRkKCduby1vdmVyZmxvdycpKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdodG1sLCBib2R5JykuZm9yRWFjaChlbHQgPT4gZWx0LmNsYXNzTGlzdC5yZW1vdmUoJ25vLW92ZXJmbG93JykpO1xyXG4gICAgICAgIH1cclxuICAgIH0sIFtpc09wZW5dKTtcclxuXHJcbiAgICBjb25zdCBjb250YWluZXJSZWYgPSB1c2VSZWYoKTtcclxuXHJcbiAgICBjb25zdCBoYW5kbGVDbG9zZSA9ICgpID0+IHtcclxuICAgICAgICBpZighY2xvc2UpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZighYW5pbWF0ZWQpIHtcclxuICAgICAgICAgICAgY2xvc2UoKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb250YWluZXJSZWYuY3VycmVudC5jbGFzc0xpc3QuYWRkKCdjbG9zZScpO1xyXG4gICAgICAgIGNvbnRhaW5lclJlZi5jdXJyZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2FuaW1hdGlvbmVuZCcsICgpID0+IHtcclxuICAgICAgICAgICAgY2xvc2UoKTtcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgaGFuZGxlU3RvcFByb3BhZ2F0aW9uID0gZSA9PiB7XHJcbiAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgIH07XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICAgICAgaXNPcGVuICYmIGNyZWF0ZVBvcnRhbChcclxuICAgICAgICAgICAgICAgIDxkaXYgcmVmPXtjb250YWluZXJSZWZ9IGNsYXNzTmFtZT17J21vZGFsLWNvbnRhaW5lcicgKyAoYWRkaXRpb25hbENsYXNzID8gJyAnK2FkZGl0aW9uYWxDbGFzcysnLWNvbnRhaW5lcic6ICcnKX0gb25DbGljaz17aGFuZGxlQ2xvc2V9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgcmVmPXttb2RhbFJlZn0gY2xhc3NOYW1lPXsnbW9kYWwnICsgKGFkZGl0aW9uYWxDbGFzcyA/ICcgJythZGRpdGlvbmFsQ2xhc3M6ICcnKX0gb25DbGljaz17aGFuZGxlU3RvcFByb3BhZ2F0aW9ufT5cclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xvc2UgIT09IG51bGwgJiYgPENsb3NlQnV0dG9uIGFkZGl0aW9uYWxDbGFzcz1cIm1vZGFsLWNsb3NlclwiIG9uQ2xpY2s9e2hhbmRsZUNsb3NlfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtjaGlsZHJlbn1cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PixcclxuICAgICAgICAgICAgICAgIGRvY3VtZW50LmJvZHlcclxuICAgICAgICAgICAgKVxyXG4gICAgKVxyXG59KTtcclxuXHJcblxyXG5cclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgdXNlQ29udHJvbGxlciB9IGZyb20gJ3JlYWN0LWhvb2stZm9ybSc7XHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IENvbnRyb2xsZWRSYWRpb0ZpZWxkcyA9ICh7Y29udHJvbCwgbmFtZSwgY2hpbGRyZW4sIGNob2ljZXMsIGVycm9yLCBpc1JlcXVpcmVkRmllbGQsIC4uLnByb3BzfSkgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17J2Zvcm0tZ3JvdXAnICsgKGVycm9yID8gJyBpcy1pbnZhbGlkJzogJycpfT5cclxuICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImZvcm0tbGFiZWxcIj57Y2hpbGRyZW59PC9sYWJlbD5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyYWRpby1ncm91cC13cmFwcGVyXCI+XHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgT2JqZWN0LmVudHJpZXMoY2hvaWNlcykubWFwKChbbGFiZWwsIHZhbHVlXSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Q29udHJvbGxlZFJhZGlvRmllbGQga2V5PXt2YWx1ZX0gdmFsdWU9e3ZhbHVlfSBlcnJvcj17ZXJyb3J9IGNvbnRyb2w9e2NvbnRyb2x9IG5hbWU9e25hbWV9IHsuLi5wcm9wc30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7bGFiZWx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQ29udHJvbGxlZFJhZGlvRmllbGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgKSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBpc1JlcXVpcmVkRmllbGQgJiYgPGRpdiBjbGFzc05hbWU9XCJyYWRpby1ncm91cCByYWRpby1ncm91cC1hc3Rlcml4XCI+KjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAge2Vycm9yICYmIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1lcnJvclwiPntlcnJvcn08L2Rpdj59XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBDb250cm9sbGVkUmFkaW9GaWVsZCA9ICh7Y2hpbGRyZW4sIGNvbnRyb2wsIG5hbWUsIHZhbHVlLCBkZWZhdWx0VmFsdWUgPSBudWxsLCBlcnJvciwgYWRkaXRpb25hbENsYXNzID0gJyd9KSA9PiB7XHJcbiAgICBjb25zdCB7ZmllbGQ6IHsuLi5wcm9wc319ID0gdXNlQ29udHJvbGxlcih7Y29udHJvbCwgbmFtZX0pO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9eydyYWRpby1ncm91cCcgKyAoZXJyb3IgPyAnIGlzLWludmFsaWQnOiAnJyl9PlxyXG4gICAgICAgICAgICA8aW5wdXQgXHJcbiAgICAgICAgICAgICAgICB7Li4ucHJvcHN9XHJcbiAgICAgICAgICAgICAgICB2YWx1ZT17dmFsdWV9IFxyXG4gICAgICAgICAgICAgICAgdHlwZT1cInJhZGlvXCIgXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9eydmb3JtLXJhZGlvJyArIChhZGRpdGlvbmFsQ2xhc3MgPyAnICcrYWRkaXRpb25hbENsYXNzOiAnJyl9IFxyXG4gICAgICAgICAgICAgICAgaWQ9e3ZhbHVlfSBcclxuICAgICAgICAgICAgICAgIGNoZWNrZWQ9e3Byb3BzLnZhbHVlID09IHZhbHVlfSAvKiDDqWdhbGl0w6kgbm9uIHN0cmljdGUgY2FyIG9uIHBldXQgYXZvaXIgdW5lIHZhbHVlIGludGVnZXIgZXQgdW5lIHByb3BzLnZhbHVlIHN0cmluZyAqL1xyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImZvcm0tbGFiZWxcIiBodG1sRm9yPXt2YWx1ZX0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImN1c3RvbS1yYWRpb1wiIHJvbGU9XCJyYWRpb1wiIGFyaWEtbGFiZWxsZWRieT1cInJhZGlvLWxhYmVsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjdXN0b20tcmFkaW8tY29yZVwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJyYWRpby1sYWJlbFwiPntjaGlsZHJlbn08L3NwYW4+XHJcbiAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuXHJcbmV4cG9ydCBjb25zdCBBY2NvdW50SWNvbiA9ICh7YWRkaXRpb25hbENsYXNzLCAuLi5wcm9wc30pID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPHN2ZyBjbGFzc05hbWU9eydpY29uIGktYWNjb3VudCcgKyAoYWRkaXRpb25hbENsYXNzID8gJyAnICsgYWRkaXRpb25hbENsYXNzOiAnJyl9IHsuLi5wcm9wc30geG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgMTAwIDEwMFwiPlxyXG4gICAgICAgICAgICA8cGF0aCBmaWxsPVwiY3VycmVudENvbG9yXCIgZD1cIm01MCA0OC42N2MxMi4yMyAwIDIyLjE4LTkuOTUgMjIuMTgtMjIuMThzLTkuOTUtMjIuMTgtMjIuMTgtMjIuMTgtMjIuMTggOS45NS0yMi4xOCAyMi4xOCA5Ljk1IDIyLjE4IDIyLjE4IDIyLjE4em0wLTQxLjM2YzEwLjU4IDAgMTkuMTggOC42IDE5LjE4IDE5LjE4cy04LjYgMTkuMTgtMTkuMTggMTkuMTgtMTkuMTgtOC42LTE5LjE4LTE5LjE4IDguNi0xOS4xOCAxOS4xOC0xOS4xOHpcIj48L3BhdGg+XHJcbiAgICAgICAgICAgIDxwYXRoIGZpbGw9XCJjdXJyZW50Q29sb3JcIiBkPVwibTE4LjkxIDk0Ljg5aDYyLjE5YzEuOTEgMCAzLjcyLS44MyA0Ljk3LTIuMjkgMS4yMi0xLjQzIDEuNzYtMy4zMSAxLjQ3LTUuMTUtMi45Mi0xOC41Ny0xOC43LTMyLjA1LTM3LjUzLTMyLjA1cy0zNC42MSAxMy40OC0zNy41MyAzMi4wNWMtLjI5IDEuODQuMjQgMy43MiAxLjQ3IDUuMTUgMS4yNCAxLjQ2IDMuMDUgMi4yOSA0Ljk3IDIuMjl6bS0zLjQ3LTYuOTdjMi42OS0xNy4xIDE3LjIyLTI5LjUyIDM0LjU3LTI5LjUyczMxLjg4IDEyLjQxIDM0LjU3IDI5LjUyYy4xNi45OS0uMTIgMS45Ni0uNzggMi43My0uNjcuNzktMS42NSAxLjI0LTIuNjkgMS4yNGgtNjIuMmMtMS4wMyAwLTIuMDEtLjQ1LTIuNjktMS4yNC0uNjYtLjc3LS45NC0xLjc0LS43OC0yLjczelwiPjwvcGF0aD5cclxuICAgICAgICA8L3N2Zz5cclxuICAgIClcclxufVxyXG5cclxuXHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcblxyXG5leHBvcnQgY29uc3QgUmlnaHRBcnJvd0Jhckljb24gPSAoe2FkZGl0aW9uYWxDbGFzcywgLi4ucHJvcHN9KSA9PiB7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8c3ZnIGNsYXNzTmFtZT17J2ljb24gaS1yaWdodC1hcnJvdy1iYXInICsgKGFkZGl0aW9uYWxDbGFzcyA/ICcgJythZGRpdGlvbmFsQ2xhc3M6ICcnKX0gey4uLnByb3BzfSB2aWV3Qm94PVwiMCAwIDMyIDMyXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPlxyXG4gICAgICAgICAgICA8ZyBjbGlwUnVsZT1cImV2ZW5vZGRcIiBmaWxsUnVsZT1cImV2ZW5vZGRcIj5cclxuICAgICAgICAgICAgICAgIDxwYXRoIGZpbGw9XCJjdXJyZW50Q29sb3JcIiBkPVwibTQgMTZjMC0uNTUyMy40NDc3Mi0xIDEtMWgyMmMuNTUyMyAwIDEgLjQ0NzcgMSAxcy0uNDQ3NyAxLTEgMWgtMjJjLS41NTIyOCAwLTEtLjQ0NzctMS0xelwiPjwvcGF0aD5cclxuICAgICAgICAgICAgICAgIDxwYXRoIGZpbGw9XCJjdXJyZW50Q29sb3JcIiBkPVwibTE3LjI5MjkgNi4yOTI4OWMuMzkwNS0uMzkwNTIgMS4wMjM3LS4zOTA1MiAxLjQxNDIgMGw5IDkuMDAwMDFjLjM5MDUuMzkwNS4zOTA1IDEuMDIzNyAwIDEuNDE0MmwtOSA5Yy0uMzkwNS4zOTA1LTEuMDIzNy4zOTA1LTEuNDE0MiAwcy0uMzkwNS0xLjAyMzcgMC0xLjQxNDJsOC4yOTI5LTguMjkyOS04LjI5MjktOC4yOTI4OWMtLjM5MDUtLjM5MDUzLS4zOTA1LTEuMDIzNjkgMC0xLjQxNDIyelwiPjwvcGF0aD5cclxuICAgICAgICAgICAgPC9nPlxyXG4gICAgICAgIDwvc3ZnPlxyXG4gICAgKVxyXG59XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuXHJcbmV4cG9ydCBjb25zdCBDYXJ0SWNvbiA9ICh7YWRkaXRpb25hbENsYXNzLCAuLi5wcm9wc30pID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPHN2ZyBjbGFzc05hbWU9eydpY29uIGktY2FydCcgKyAoYWRkaXRpb25hbENsYXNzID8gJyAnICsgYWRkaXRpb25hbENsYXNzOiAnJyl9IHsuLi5wcm9wc30geG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgNjQgNjRcIj5cclxuICAgICAgICAgICAgPHBhdGggZmlsbD1cImN1cnJlbnRDb2xvclwiIGQ9XCJtNDYuNzcgMjIuMjlhMSAxIDAgMCAwIC0xLS44N2gtNS41MXYtMmE4LjI2IDguMjYgMCAwIDAgLTE2LjUyIDB2MmgtNS41MmExIDEgMCAwIDAgLTEgLjg3bC0zLjcxIDI4LjE0YTEgMSAwIDAgMCAuMjYuODFjLjQyLjQ1Ljg4LjkxIDEuMzggMS4zNmExIDEgMCAwIDAgLjY3LjI2aDMyLjM2YTEgMSAwIDAgMCAuNjctLjI2Yy40OS0uNDUgMS0uOTEgMS4zOC0xLjM2YTEgMSAwIDAgMCAuMjYtLjgxem0tMjEtMi44OWE2LjI2IDYuMjYgMCAwIDEgMTIuNTIgMHYyaC0xMi41NXptMjIgMzEuNDZoLTMxLjU2bC0uNjYtLjY0IDMuNTQtMjYuOGgyNS44MWwzLjU0IDI2Ljh6XCI+PC9wYXRoPlxyXG4gICAgICAgIDwvc3ZnPlxyXG4gICAgKVxyXG59XHJcblxyXG5cclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuXHJcbmV4cG9ydCBjb25zdCBDaGF0SWNvbiA9ICh7YWRkaXRpb25hbENsYXNzLCAuLi5wcm9wc30pID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPHN2ZyBjbGFzc05hbWU9eydpY29uIGktY2hhdCcgKyAoYWRkaXRpb25hbENsYXNzID8gJyAnICsgYWRkaXRpb25hbENsYXNzOiAnJyl9IHsuLi5wcm9wc30geG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIC05NjAgOTYwIDk2MFwiPlxyXG4gICAgICAgICAgICA8cGF0aCBmaWxsPVwiY3VycmVudENvbG9yXCIgZD1cIk0zMTMuNjkyLTUzMC42OTJxMTIuMzg1IDAgMjEuNTc3LTkuMTkzIDkuMTkzLTkuMTkyIDkuMTkzLTIxLjU3NyAwLTEyLjM4NC05LjE5My0yMS41NzctOS4xOTItOS4xOTItMjEuNTc3LTkuMTkyLTEzLjE1NCAwLTIxLjk2MSA5LjE5Mi04LjgwOCA5LjE5My04LjgwOCAyMS41NzcgMCAxMi4zODUgOC44MDggMjEuNTc3IDguODA3IDkuMTkzIDIxLjk2MSA5LjE5M1ptMTY3Ljc3IDBxMTIuMzg0IDAgMjEuNTc3LTkuMTkzIDkuMTkyLTkuMTkyIDkuMTkyLTIxLjU3NyAwLTEyLjM4NC05LjE5Mi0yMS41NzctOS4xOTMtOS4xOTItMjEuNTc3LTkuMTkyLTEyLjM4NSAwLTIxLjU3NyA5LjE5Mi05LjE5MyA5LjE5My05LjE5MyAyMS41NzcgMCAxMi4zODUgOS4xOTMgMjEuNTc3IDkuMTkyIDkuMTkzIDIxLjU3NyA5LjE5M1ptMTY0LjYxNSAwcTEyLjM4NSAwIDIxLjU3Ny05LjE5MyA5LjE5Mi05LjE5MiA5LjE5Mi0yMS41NzcgMC0xMi4zODQtOS4xOTItMjEuNTc3LTkuMTkyLTkuMTkyLTIxLjU3Ny05LjE5Mi0xMi4zODUgMC0yMS41NzcgOS4xOTItOS4xOTIgOS4xOTMtOS4xOTIgMjEuNTc3IDAgMTIuMzg1IDkuMTkyIDIxLjU3NyA5LjE5MiA5LjE5MyAyMS41NzcgOS4xOTNaTTEyMC0xNTYuOTIzdi02MjcuNjkzcTAtMjMuMDU3IDE2LjE2My0zOS4yMjFRMTUyLjMyNy04NDAgMTc1LjM4NC04NDBoNjA5LjIzMnEyMy4wNTcgMCAzOS4yMjEgMTYuMTYzUTg0MC04MDcuNjczIDg0MC03ODQuNjE2djQ0OS4yMzJxMCAyMy4wNTctMTYuMTYzIDM5LjIyMVE4MDcuNjczLTI4MCA3ODQuNjE2LTI4MEgyNDMuMDc3TDEyMC0xNTYuOTIzWm0xMDkuMzg1LTE1My44NDZoNTU1LjIzMXE5LjIzIDAgMTYuOTIzLTcuNjkyIDcuNjkyLTcuNjkzIDcuNjkyLTE2LjkyM3YtNDQ5LjIzMnEwLTkuMjMtNy42OTItMTYuOTIzLTcuNjkzLTcuNjkyLTE2LjkyMy03LjY5MkgxNzUuMzg0cS05LjIzIDAtMTYuOTIzIDcuNjkyLTcuNjkyIDcuNjkzLTcuNjkyIDE2LjkyM3Y1NTUuMzg1bDc4LjYxNi04MS41MzhabS03OC42MTYgMHYtNDk4LjQ2MlYtMzEwLjc2OVpcIi8+XHJcbiAgICAgICAgPC9zdmc+XHJcbiAgICApXHJcbn1cclxuXHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcblxyXG5leHBvcnQgY29uc3QgQ2hldnJvbkxlZnRJY29uID0gKHthZGRpdGlvbmFsQ2xhc3MsIC4uLnByb3BzfSkgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8c3ZnIGNsYXNzTmFtZT17J2ljb24gaS1jaGV2cm9uLWxlZnQnICsgKGFkZGl0aW9uYWxDbGFzcyA/ICcgJyArIGFkZGl0aW9uYWxDbGFzczogJycpfSB7Li4ucHJvcHN9ICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmVyc2lvbj1cIjEuMVwiIHg9XCIwXCIgeT1cIjBcIiB2aWV3Qm94PVwiMCAwIDUxMS45NDkgNTExLjk0OVwiPlxyXG4gICAgICAgICAgICA8ZyB0cmFuc2Zvcm09XCJtYXRyaXgoLTEsMS4yMjQ2NDY3OTkxNDczNTMyZS0xNiwtMS4yMjQ2NDY3OTkxNDczNTMyZS0xNiwtMSw1MTEuOTQ5MTExOTM4NDc2Nyw1MTEuOTUwMjM2MzIwNDk1NTUpXCI+XHJcbiAgICAgICAgICAgICAgICA8cGF0aCBmaWxsPVwiY3VycmVudENvbG9yXCIgZD1cIk0zODYuMjM1IDI0OC4zMDggMTQwLjkwMiAyLjk3NWMtNC4yNjctNC4wNTMtMTAuOTg3LTMuOTQ3LTE1LjA0LjIxM2ExMC43NjMgMTAuNzYzIDAgMCAwIDAgMTQuODI3bDIzNy43NiAyMzcuNzYtMjM3Ljc2IDIzNy44NjdjLTQuMjY3IDQuMDUzLTQuMzczIDEwLjg4LS4yMTMgMTUuMDQgNC4wNTMgNC4yNjcgMTAuODggNC4zNzMgMTUuMDQuMjEzbC4yMTMtLjIxMyAyNDUuMzMzLTI0NS4zMzNhMTAuNjI0IDEwLjYyNCAwIDAgMCAwLTE1LjA0MXpcIj5cclxuICAgICAgICAgICAgICAgIDwvcGF0aD5cclxuICAgICAgICAgICAgPC9nPlxyXG4gICAgICAgIDwvc3ZnPlxyXG4gICAgKVxyXG59IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuXHJcbmV4cG9ydCBjb25zdCBDaGV2cm9uUmlnaHRJY29uID0gKHthZGRpdGlvbmFsQ2xhc3MsIC4uLnByb3BzfSkgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8c3ZnIGNsYXNzTmFtZT17J2ljb24gaS1jaGV2cm9uLXJpZ2h0JyArIChhZGRpdGlvbmFsQ2xhc3MgPyAnICcgKyBhZGRpdGlvbmFsQ2xhc3M6ICcnKX0gey4uLnByb3BzfSB2ZXJzaW9uPVwiMS4xXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHg9XCIwcHhcIiB5PVwiMHB4XCIgdmlld0JveD1cIjAgMCA1MTEuOTQ5IDUxMS45NDlcIj5cclxuICAgICAgICAgICAgPHBhdGggZmlsbD1cImN1cnJlbnRDb2xvclwiIGQ9XCJNMzg2LjIzNSwyNDguMzA4TDE0MC45MDIsMi45NzVjLTQuMjY3LTQuMDUzLTEwLjk4Ny0zLjk0Ny0xNS4wNCwwLjIxM2MtMy45NDcsNC4xNi0zLjk0NywxMC42NjcsMCwxNC44MjdsMjM3Ljc2LDIzNy43NlxyXG4gICAgICAgICAgICAgICAgbC0yMzcuNzYsMjM3Ljg2N2MtNC4yNjcsNC4wNTMtNC4zNzMsMTAuODgtMC4yMTMsMTUuMDRjNC4wNTMsNC4yNjcsMTAuODgsNC4zNzMsMTUuMDQsMC4yMTNjMC4xMDctMC4xMDcsMC4yMTMtMC4yMTMsMC4yMTMtMC4yMTNcclxuICAgICAgICAgICAgICAgIGwyNDUuMzMzLTI0NS4zMzNDMzkwLjM5NSwyNTkuMTg4LDM5MC4zOTUsMjUyLjQ2OCwzODYuMjM1LDI0OC4zMDh6XCIvPlxyXG4gICAgICAgIDwvc3ZnPlxyXG4gICAgKVxyXG59IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuXHJcbmV4cG9ydCBjb25zdCBEYXNoYm9hcmRJY29uID0gKHthZGRpdGlvbmFsQ2xhc3MsIC4uLnByb3BzfSkgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8c3ZnIGNsYXNzTmFtZT17J2ljb24gaS1kYXNoYm9hcmQnICsgKGFkZGl0aW9uYWxDbGFzcyA/ICcgJysgYWRkaXRpb25hbENsYXNzOiAnJyl9IHsuLi5wcm9wc30gdmlld0JveD1cIjAgLTkxIDUxMiA1MTJcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+XHJcbiAgICAgICAgICAgIDxwYXRoIGZpbGw9XCJjdXJyZW50Q29sb3JcIiBkPVwibTUxMiAyODhoLTEwNi42Njc5Njl2LTIxLjMzMjAzMWg4NS4zMzU5Mzh2LTEwLjY2Nzk2OWMwLTEyOS4zMzIwMzEtMTA1LjMzNTkzOC0yMzQuNjY3OTY5LTIzNC42Njc5NjktMjM0LjY2Nzk2OXMtMjM0LjY2Nzk2OSAxMDUuMzM1OTM4LTIzNC42Njc5NjkgMjM0LjY2Nzk2OXYxMC42Njc5NjloODUuMzM1OTM4djIxLjMzMjAzMWgtMTA2LjY2Nzk2OXYtMzJjMC0xNDEuMTk5MjE5IDExNC44MDA3ODEtMjU2IDI1Ni0yNTZzMjU2IDExNC44MDA3ODEgMjU2IDI1NnptMCAwXCI+PC9wYXRoPlxyXG4gICAgICAgICAgICA8cGF0aCBmaWxsPVwiY3VycmVudENvbG9yXCIgZD1cIm0yNDUuMzMyMDMxIDEwLjY2Nzk2OWgyMS4zMzU5Mzh2NjRoLTIxLjMzNTkzOHptMCAwXCI+PC9wYXRoPlxyXG4gICAgICAgICAgICA8cGF0aCBmaWxsPVwiY3VycmVudENvbG9yXCIgZD1cIm03OS43MjY1NjIgODUuOTQ5MjE5IDUxLjY2NDA2MyA1MS42NjQwNjItMTUuMDgyMDMxIDE1LjA4NTkzOC01MS42Njc5NjktNTEuNjY0MDYzem0wIDBcIj48L3BhdGg+XHJcbiAgICAgICAgICAgIDxwYXRoIGZpbGw9XCJjdXJyZW50Q29sb3JcIiBkPVwibTQzMi4yOTI5NjkgODUuOTY0ODQ0IDE1LjA4NTkzNyAxNS4wODU5MzctNTEuNjY3OTY4IDUxLjY2NDA2My0xNS4wODIwMzItMTUuMDg1OTM4em0wIDBcIj48L3BhdGg+XHJcbiAgICAgICAgICAgIDxwYXRoIGZpbGw9XCJjdXJyZW50Q29sb3JcIiBkPVwibTI1OS4wNjY0MDYgMzMwLjY2Nzk2OWMtMzEuMDY2NDA2IDAtNTYuMzk4NDM3LTI1LjMzNTkzOC01Ni4zOTg0MzctNTYuNDAyMzQ0IDAtMjEuNTk3NjU2IDEyLjY2NDA2Mi00MS41OTc2NTYgMzIuMTMyODEyLTUwLjkzMzU5NGwxNDQtNjguNjY0MDYyLTY4LjY2Nzk2OSAxNDRjLTkuMzMyMDMxIDE5LjMzMjAzMS0yOS4zMzIwMzEgMzItNTEuMDY2NDA2IDMyem03NC41MzUxNTYtMTMwLjkzMzU5NC04OS42MDE1NjIgNDIuODAwNzgxYy0xMi4xMzI4MTIgNS43MzA0NjktMjAgMTguMjY1NjI1LTIwIDMxLjczMDQ2OSAwIDE5LjMzNTkzNyAxNS43MzQzNzUgMzUuMDY2NDA2IDM1LjA2NjQwNiAzNS4wNjY0MDYgMTMuNDY4NzUgMCAyNS44NjcxODgtNy44NjcxODcgMzEuNzM0Mzc1LTIwem0wIDBcIj48L3BhdGg+XHJcbiAgICAgICAgPC9zdmc+XHJcbiAgICApXHJcbn0iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5cclxuZXhwb3J0IGNvbnN0IExvZ291dEljb24gPSAoe2FkZGl0aW9uYWxDbGFzcywgLi4ucHJvcHN9KSA9PiB7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8c3ZnIGNsYXNzTmFtZT17J2ljb24gaS1sb2dvdXQnICsgKGFkZGl0aW9uYWxDbGFzcyA/ICcgJyArIGFkZGl0aW9uYWxDbGFzczogJycpfSB7Li4ucHJvcHN9IHZpZXdCb3g9XCIwIDAgNTEyIDUxMlwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj5cclxuICAgICAgICAgICAgPHBhdGggZmlsbD1cImN1cnJlbnRDb2xvclwiIGQ9XCJtMjEyIDQ5NmMwIDguODM3LTcuMTYzIDE2LTE2IDE2aC0xMTQuNTQ1Yy0zMS4zOCAwLTU2LjkxLTI1LjUyOS01Ni45MS01Ni45MDl2LTM5OC4xODFjMC0zMS4zOCAyNS41My01Ni45MSA1Ni45MS01Ni45MWgxMTQuNTQ1YzguODM3IDAgMTYgNy4xNjMgMTYgMTZzLTcuMTYzIDE2LTE2IDE2aC0xMTQuNTQ1Yy0xMy43MzUgMC0yNC45MSAxMS4xNzUtMjQuOTEgMjQuOTF2Mzk4LjE4MWMwIDEzLjczNSAxMS4xNzUgMjQuOTA5IDI0LjkxIDI0LjkwOWgxMTQuNTQ1YzguODM3IDAgMTYgNy4xNjMgMTYgMTZ6bTI3MC4yNTgtMjUxLjgwMi0xMDQuODMyLTk1Ljk1NmMtNi41MTctNS45NjUtMTYuNjM5LTUuNTIxLTIyLjYwNC45OTktNS45NjcgNi41MTgtNS41MiAxNi42MzkuOTk5IDIyLjYwNGw3NC40NTggNjguMTU1aC0yNzcuOTE0Yy04LjgzNyAwLTE2IDcuMTYzLTE2IDE2czcuMTYzIDE2IDE2IDE2aDI3Ny45MTRsLTc0LjQ1OSA2OC4xNTVjLTYuNTE5IDUuOTY2LTYuOTY2IDE2LjA4Ny0uOTk5IDIyLjYwNCAzLjE1NSAzLjQ0OCA3LjQ3NCA1LjE5NyAxMS44MDYgNS4xOTcgMy44NTggMCA3LjcyOS0xLjM4OCAxMC43OTktNC4xOThsMTA0LjgzMi05NS45NTdjMy4zMTItMy4wMyA1LjE5Ny03LjMxMyA1LjE5Ny0xMS44MDJzLTEuODg2LTguNzctNS4xOTctMTEuODAxelwiPjwvcGF0aD5cclxuICAgICAgICA8L3N2Zz5cclxuICAgIClcclxufTtcclxuXHJcblxyXG5cclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuXHJcbmV4cG9ydCBjb25zdCBNZW51SWNvbiA9ICh7YWRkaXRpb25hbENsYXNzLCAuLi5wcm9wc30pID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPHN2ZyAgY2xhc3NOYW1lPXsnaWNvbiBpLW1lbnUnICsgKGFkZGl0aW9uYWxDbGFzcyA/ICcgJyArIGFkZGl0aW9uYWxDbGFzczogJycpfSB7Li4ucHJvcHN9IGVuYWJsZUJhY2tncm91bmQ9XCJuZXcgMCAwIDMyIDMyXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgMzIgMzJcIj5cclxuICAgICAgICAgIDxnPlxyXG4gICAgICAgICAgICA8cGF0aCBmaWxsPVwiY3VycmVudENvbG9yXCIgZD1cIm0yNS4zIDloLTE4LjZjLS40IDAtLjctLjMtLjctLjhzLjMtLjguOC0uOGgxOC41Yy40IDAgLjguMy44LjhzLS40LjgtLjguOHpcIj48L3BhdGg+XHJcbiAgICAgICAgICA8L2c+XHJcbiAgICAgICAgICA8Zz5cclxuICAgICAgICAgICAgPHBhdGggZmlsbD1cImN1cnJlbnRDb2xvclwiIGQ9XCJtMjUuMyAxNmgtMTguNmMtLjQgMC0uNy0uMy0uNy0uOHMuMy0uOC44LS44aDE4LjVjLjQgMCAuOC4zLjguOHMtLjQuOC0uOC44elwiPjwvcGF0aD5cclxuICAgICAgICAgIDwvZz5cclxuICAgICAgICAgIDxnPlxyXG4gICAgICAgICAgICA8cGF0aCBmaWxsPVwiY3VycmVudENvbG9yXCIgZD1cIm0yNS4zIDIzaC0xOC42Yy0uNCAwLS43LS4zLS43LS44cy4zLS44LjgtLjhoMTguNWMuNCAwIC44LjMuOC44cy0uNC44LS44Ljh6XCI+PC9wYXRoPlxyXG4gICAgICAgICAgPC9nPlxyXG4gICAgICAgIDwvc3ZnPlxyXG4gICAgKVxyXG59IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuXHJcbmV4cG9ydCBjb25zdCBNaW51c0ljb24gPSAoe2FkZGl0aW9uYWxDbGFzcywgLi4ucHJvcHN9KSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgXHJcbiAgICAgIDxzdmcgY2xhc3NOYW1lPXsnaWNvbiBpLW1pbnVzJyArIChhZGRpdGlvbmFsQ2xhc3MgPyAnICcgKyBhZGRpdGlvbmFsQ2xhc3M6ICcnKX0gey4uLnByb3BzfSB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgeD1cIjBweFwiIHk9XCIwcHhcIiB2aWV3Qm94PVwiMCAwIDQ2OS4zMzMgNDY5LjMzM1wiIGVuYWJsZUJhY2tncm91bmQ9XCJuZXcgMCAwIDQ2OS4zMzMgNDY5LjMzM1wiPlxyXG4gICAgICAgIDxnPlxyXG4gICAgICAgICAgPGc+XHJcbiAgICAgICAgICAgIDxwYXRoIGZpbGw9XCJjdXJyZW50Q29sb3JcIiBkPVwiTTQ1OC42NjcsMjI0aC00NDhDNC43NzksMjI0LDAsMjI4Ljc3OSwwLDIzNC42NjdzNC43NzksMTAuNjY3LDEwLjY2NywxMC42NjdoNDQ4YzUuODg4LDAsMTAuNjY3LTQuNzc5LDEwLjY2Ny0xMC42NjdcclxuICAgICAgICAgICAgICBTNDY0LjU1NSwyMjQsNDU4LjY2NywyMjR6XCI+PC9wYXRoPlxyXG4gICAgICAgICAgPC9nPlxyXG4gICAgICAgIDwvZz5cclxuICAgICAgPC9zdmc+XHJcbiAgICApXHJcbn0iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5cclxuZXhwb3J0IGNvbnN0IFBsdXNJY29uID0gKHthZGRpdGlvbmFsQ2xhc3MsIC4uLnByb3BzfSkgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8c3ZnIGNsYXNzTmFtZT17J2ljb24gaS1wbHVzJyArIChhZGRpdGlvbmFsQ2xhc3MgPyAnICcgKyBhZGRpdGlvbmFsQ2xhc3M6ICcnKX0gey4uLnByb3BzfSB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCAyNCAyNFwiPlxyXG4gICAgICAgICAgICA8ZyBpZD1cImVzc2VudGlhbHMvYmFzaWNzL2FkZFwiIGZpbGw9XCJub25lXCIgZmlsbFJ1bGU9XCJldmVub2RkXCI+XHJcbiAgICAgICAgICAgIDxwYXRoIGZpbGw9XCJjdXJyZW50Q29sb3JcIiBpZD1cIkZpbGwtNzBcIiBkPVwibTExLjQ5MzU4OTggMjFjLS4yNzYgMC0uNS0uMjI0LS41LS41di04LjVoLTguNDk5OTk5OThjLS4yNzYgMC0uNS0uMjI0LS41LS41cy4yMjQtLjUuNS0uNWg4LjQ5OTk5OTk4di04LjVjMC0uMjc2LjIyNC0uNS41LS41cy41LjIyNC41LjV2OC41aDguNWMuMjc2IDAgLjUuMjI0LjUuNXMtLjIyNC41LS41LjVoLTguNXY4LjVjMCAuMjc2LS4yMjQuNS0uNS41XCI+PC9wYXRoPlxyXG4gICAgICAgICAgICA8L2c+XHJcbiAgICAgICAgPC9zdmc+XHJcbiAgICApXHJcbn0iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5cclxuZXhwb3J0IGNvbnN0IFNlYXJjaEljb24gPSAoe2FkZGl0aW9uYWxDbGFzcywgLi4ucHJvcHN9KSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxzdmcgY2xhc3NOYW1lPXsnaWNvbiBpLXNlYXJjaCcgKyAoYWRkaXRpb25hbENsYXNzID8gJyAnICsgYWRkaXRpb25hbENsYXNzOiAnJyl9IHsuLi5wcm9wc30gZW5hYmxlQmFja2dyb3VuZD1cIm5ldyAwIDAgNDggNDhcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCA0OCA0OFwiPlxyXG4gICAgICAgICAgICA8ZyBpZD1cIl94MzJfLU1hZ25pZnlpbmdfR2xhc3NcIj5cclxuICAgICAgICAgICAgICAgIDxwYXRoIGZpbGw9XCJjdXJyZW50Q29sb3JcIiBkPVwibTQwLjg5OTQxNDEgMzkuNDg1MzUxNi03LjgxMjc0NDEtNy44MTI3NDQxYzIuMzk3ODg4Mi0yLjczNDM3NSAzLjcyMDk0NzMtNi4xOTQyNzQ5IDMuNzIwOTQ3My05Ljg2NDk5MDIgMC00LjAwNjgzNTktMS41NjA1NDY5LTcuNzczNDM3NS00LjM5MzU1NDctMTAuNjA2NDQ1M3MtNi41OTk2MDk0LTQuMzkzNTU0Ny0xMC42MDY0NDUzLTQuMzkzNTU0Ny03Ljc3MzQzNzUgMS41NjA1NDY5LTEwLjYwNjQ0NTMgNC4zOTM1NTQ3LTQuMzkzNTU0NyA2LjU5OTYwOTQtNC4zOTM1NTQ3IDEwLjYwNjQ0NTMgMS41NjA1NDY5IDcuNzczNDM3NSA0LjM5MzU1NDcgMTAuNjA2NDQ1MyA2LjU5OTYwOTQgNC4zOTM1NTQ3IDEwLjYwNjQ0NTMgNC4zOTM1NTQ3YzMuNjcwNzE1MyAwIDcuMTMwNjE1Mi0xLjMyMzA1OTEgOS44NjQ5OTAyLTMuNzIwOTQ3M2w3LjgxMjc0NDEgNy44MTI3NDQxYy4xOTUzMTI1LjE5NTMxMjUuNDUxMTcxOS4yOTI5Njg4LjcwNzAzMTMuMjkyOTY4OHMuNTExNzE4OC0uMDk3NjU2My43MDcwMzEzLS4yOTI5Njg4Yy4zOTA2MjQ5LS4zOTA2MjUuMzkwNjI0OS0xLjAyMzQzNzUtLjAwMDAwMDEtMS40MTQwNjI1em0tMjguMjg0MTc5Ny04LjQ4NTM1MTZjLTIuNDU1MDc4MS0yLjQ1NTU2NjQtMy44MDc2MTcyLTUuNzIwMjE0OC0zLjgwNzYxNzItOS4xOTIzODI4czEuMzUyNTM5MS02LjczNjgxNjQgMy44MDc2MTcyLTkuMTkyMzgyOGMyLjQ1NTU2NjQtMi40NTUwNzgxIDUuNzIwMjE0OC0zLjgwNzYxNzIgOS4xOTIzODI4LTMuODA3NjE3MnM2LjczNjgxNjQgMS4zNTI1MzkxIDkuMTkyMzgyOCAzLjgwNzYxNzJjMi40NTUwNzgxIDIuNDU1NTY2NCAzLjgwNzYxNzIgNS43MjAyMTQ4IDMuODA3NjE3MiA5LjE5MjM4MjhzLTEuMzUyNTM5MSA2LjczNjgxNjQtMy44MDc2MTcyIDkuMTkyMzgyOGMtMi40NTU1NjY0IDIuNDU1MDc4MS01LjcyMDIxNDggMy44MDc2MTcyLTkuMTkyMzgyOCAzLjgwNzYxNzJzLTYuNzM2ODE2NC0xLjM1MjUzOTEtOS4xOTIzODI4LTMuODA3NjE3MnpcIj48L3BhdGg+XHJcbiAgICAgICAgICAgIDwvZz5cclxuICAgICAgICA8L3N2Zz5cclxuICAgIClcclxufVxyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyB1c2VUcmFuc2xhdGlvbiB9IGZyb20gJ3JlYWN0LWkxOG5leHQnO1xyXG5cclxuZXhwb3J0IGNvbnN0IEhlYWRlckxvZ28gPSAoKSA9PiB7XHJcbiAgICBjb25zdCB7dCwgaTE4bn0gPSB1c2VUcmFuc2xhdGlvbignbWVzc2FnZXMnKTtcclxuICAgIFxyXG4gICAgY29uc3QgaHJlZiA9ICcvJyArIGkxOG4ubGFuZ3VhZ2U7XHJcbiAgICBcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGEgY2xhc3NOYW1lPVwiaGVhZGVyLWxvZ28tbGlua1wiIGhyZWY9e2hyZWZ9IGFyaWEtbGFiZWw9e3QoJ2hvbWUnKX0gdGl0bGU9e3QoJ2hvbWUnKX0+XHJcbiAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwiaGVhZGVyLWxvZ29cIiBzcmM9XCIvaW1nL2xvZ28vbG9nby5wbmdcIiBhbHQ9e3QoJ2NvY2t0YWlsaXNzaW1vX2xvZ28nKX0gLz5cclxuICAgICAgICA8L2E+XHJcbiAgICApXHJcbn0gIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0ICcuLi8uLi9zdHlsZXMvVUkvVXRpbHMvcmVtb3ZlQ29uZmlybS5jc3MnO1xyXG5pbXBvcnQgeyB1c2VUcmFuc2xhdGlvbiB9IGZyb20gJ3JlYWN0LWkxOG5leHQnO1xyXG5cclxuZXhwb3J0IGNvbnN0IFJlbW92ZUNvbmZpcm0gPSAoe29uQ29uZmlybSwgY2xvc2V9KSA9PiB7XHJcbiAgICBjb25zdCB7dH0gPSB1c2VUcmFuc2xhdGlvbignbWVzc2FnZXMnKTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVtb3ZlLWNvbmZpcm0tY29udHJvbHNcIj5cclxuICAgICAgICAgICAgPHNwYW4+e3QoJ2Fzay5kZWxldGUnKX08L3NwYW4+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInJlbW92ZS1jb25maXJtLWNvbnRyb2wgeWVzXCIgb25DbGljaz17b25Db25maXJtfT57dCgneWVzJyl9PC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInJlbW92ZS1jb25maXJtLWNvbnRyb2wgbm9cIiBvbkNsaWNrPXtjbG9zZX0+e3QoJ25vJyl9PC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59IiwiXHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IGNyZWF0ZVJvb3QgfSBmcm9tICdyZWFjdC1kb20vY2xpZW50JztcclxuaW1wb3J0IHsgSGVhZGVyIH0gZnJvbSAnLi4vQ29tcG9uZW50cy9IZWFkZXInO1xyXG5pbXBvcnQgeyBjb25maWd1cmVMYW5ndWFnZSB9IGZyb20gJy4uL2Z1bmN0aW9ucy9sYW5ndWFnZS9jb25maWd1cmVMYW5ndWFnZSc7XHJcblxyXG5jb25maWd1cmVMYW5ndWFnZSgpO1xyXG5cclxuXHJcbmNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdoZWFkZXInKTtcclxuY29uc3QgaGVhZGVyUm9vdCA9IGNyZWF0ZVJvb3QoaGVhZGVyKTtcclxuXHJcbmhlYWRlclJvb3QucmVuZGVyKFxyXG4gICAgPEhlYWRlciAvPlxyXG4pO1xyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4iLCIvKipcclxuICogXHJcbiAqIEBwYXJhbSB7T2JqZWN0fSBjYXJ0IFxyXG4gKiBAcmV0dXJuIHthcnJheX0gY2FydExpbmVzXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgZXh0cmFjdENhcnRMaW5lcyA9IChjYXJ0KSA9PiB7XHJcbiAgICBsZXQgY2FydExpbmVzID0gW107XHJcbiAgICBmb3IoY29uc3QgY2FydFZlbmRvckdyb3VwIG9mIGNhcnQuY2FydFZlbmRvckdyb3Vwcykge1xyXG4gICAgICAgIGNhcnRMaW5lcyA9IGNhcnRMaW5lcy5jb25jYXQoY2FydFZlbmRvckdyb3VwLmNhcnRMaW5lcyk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gY2FydExpbmVzO1xyXG59IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307Il0sIm5hbWVzIjpbIlJlYWN0IiwiQXJ0aWNsZUNhcmQiLCJfcmVmIiwiYXJ0aWNsZSIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc05hbWUiLCJocmVmIiwidGFyZ2V0Iiwic3JjIiwicGljdHVyZSIsInBhdGgiLCJhbHQiLCJ0aXRsZSIsInN1YnRpdGxlIiwiUmVjaXBlQ2FyZCIsInJlY2lwZSIsImluZ3JlZGllbnRzIiwibWFwIiwiaW5ncmVkaWVudCIsImluZGV4Iiwia2V5IiwibWVtbyIsInVzZVJlZiIsInVzZVN0YXRlIiwiU3ViQ2F0ZWdvcnlNZW51IiwiaTE4biIsIkNsb3NlQnV0dG9uIiwidXNlT3BlblN0YXRlIiwiRmxhc2giLCJ0IiwiQ2F0ZWdvcnlMaW5rIiwiY2F0ZWdvcnkiLCJzZXRTZWxlY3RlZCIsInNlbGVjdGVkIiwiX3VzZVN0YXRlIiwiX3VzZVN0YXRlMiIsIl9zbGljZWRUb0FycmF5Iiwib3BlbmluZ1RpbWVyIiwic2V0T3BlbmluZ1RpbWVyIiwib3BlbkV4cGFuZCIsImNsZWFyVGltZW91dCIsImRvY3VtZW50IiwiYm9keSIsImNsYXNzTGlzdCIsImFkZCIsImNsb3NlRXhwYW5kIiwiYnV0dG9uUmVmIiwiY3VycmVudCIsImV4cGFuZFJlZiIsImFkZEV2ZW50TGlzdGVuZXIiLCJlIiwicmVtb3ZlIiwiaGFuZGxlTW91c2VPdmVyIiwiY29udGFpbnMiLCJzZXRUaW1lb3V0IiwiaGFuZGxlTW91c2VMZWF2ZSIsImhhbmRsZUtleURvd24iLCJwcmV2ZW50RGVmYXVsdCIsInN0b3BQcm9wYWdhdGlvbiIsImhhbmRsZUNsaWNrIiwiX3VzZU9wZW5TdGF0ZSIsIl91c2VPcGVuU3RhdGUyIiwid2l0aG91dFNob3BGbGFzaElzT3BlbiIsIm9wZW5XaXRob3V0U2hvcEZsYXNoIiwiY2xvc2VXaXRob3V0U2hvcEZsYXNoIiwiRnJhZ21lbnQiLCJidXR0b24iLCJucyIsImlzT3BlbiIsImNsb3NlIiwicm9sZSIsInRhYkluZGV4IiwibGFuZ3VhZ2UiLCJvbk1vdXNlT3ZlciIsIm9uQ2xpY2siLCJvbktleURvd24iLCJvbk1vdXNlTGVhdmUiLCJyZWYiLCJuYW1lIiwic3ViQ2F0ZWdvcmllcyIsImxlbmd0aCIsImFkZGl0aW9uYWxDbGFzcyIsIlN1YkNhdGVnb3J5TGluayIsInN1YkNhdGVnb3J5IiwidXNlVHJhbnNsYXRpb24iLCJ1c2VHZXRVc2VyIiwiX3VzZVRyYW5zbGF0aW9uIiwiX3VzZUdldFVzZXIiLCJ1c2VyIiwidXBkYXRlVXNlciIsImNvbnNvbGUiLCJsb2ciLCJlbiIsImluY2x1ZGVzIiwiZW1haWwiLCJpZCIsIkNhdGVnb3J5TWVudSIsImNhdGVnb3JpZXMiLCJzZWxlY3RlZENhdGVnb3J5Iiwic2V0U2VsZWN0ZWRDYXRlZ29yeSIsIkhlYWRlckJvdHRvbSIsImFjdGl2ZUNhdGVnb3J5IiwiYWN0aXZlU3ViQ2F0ZWdvcnkiLCJ1c2VFZmZlY3QiLCJIZWFkZXJQdWIiLCJSb2xlQmFkZ2UiLCJBY2NvdW50QmFkZ2UiLCJBY2NvdW50Q2FyZEhlYWRlciIsImFjY291bnRQYXRoIiwicm9sZXMiLCJjb21wYW55IiwiQWNjb3VudENhcmRUaXRsZSIsIl9yZWYyIiwiUHJvQWNjb3VudENhcmRUaXRsZSIsIkFkbWluQWNjb3VudENhcmRUaXRsZSIsIlVzZXJBY2NvdW50Q2FyZFRpdGxlIiwiX3JlZjMiLCJfdXNlciRjb21wYW55IiwibG9nbyIsInVzdWFsTmFtZSIsIl9yZWY0IiwiY2l2aWxpdHkiLCJmaXJzdE5hbWUiLCJsYXN0TmFtZSIsIl9yZWY1IiwiUmlnaHRBcnJvd0Jhckljb24iLCJDdXN0b21lck1lbnUiLCJXYXJuaW5nQmFkZ2UiLCJWZW5kb3JNZW51IiwidmVuZG9yIiwic3RyaXBlQ29uZmlybWVkIiwibnVtYmVyIiwiTGlua0J1dHRvbiIsIkFub255bW91c0FjY291bnRDYXJkQm9keSIsIkxvYWRlciIsIkxvZ291dEJ1dHRvbiIsIkFjY291bnRDYXJkIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImxhbmciLCJBY2NvdW50QnV0dG9uIiwidXNlVG91Y2hpbmdMaXN0ZW5lciIsInVzZVRpbWVyIiwidGltZW91dCIsImFyZ3VtZW50cyIsInVuZGVmaW5lZCIsInRpbWVyIiwic2V0VGltZXIiLCJjbGVhclRpbWVyIiwic3RhcnRUaW1lciIsInRvRG8iLCJBY2NvdW50Q29udHJvbCIsIm9wZW4iLCJfdXNlVGltZXIiLCJfdXNlVGltZXIyIiwiaXNUb3VjaGluZyIsIk1pbnVzSWNvbiIsIlBsdXNJY29uIiwiUmVtb3ZlQ29uZmlybSIsIlByaWNlU2hvdyIsIlRyYXNoQnV0dG9uIiwiQ2FydExpbmUiLCJjYXJ0TGluZSIsImVycm9yIiwic2V0UXVhbnRpdHkiLCJoYW5kbGVBZGQiLCJwYWNrYWdpbmciLCJxdWFudGl0eSIsInJlbmRlckVycm9yIiwiaGFuZGxlTGVzcyIsImVycm9yTWVzc2FnZSIsInNldEVycm9yTWVzc2FnZSIsImNhcnRMaW5lUmVmIiwiX3VzZVN0YXRlMyIsIl91c2VTdGF0ZTQiLCJyZW1vdmluZyIsInNldFJlbW92aW5nIiwiaGFuZGxlUmVtb3ZlQ2xpY2siLCJoYW5kbGVDb25maXJtUmVtb3ZlIiwiaGFuZGxlQ2FuY2VsUmVtb3ZlIiwicHJvZHVjdCIsImZpcnN0UGljdHVyZSIsImRlc2lnbmF0aW9uIiwibGFiZWwiLCJwcmljZSIsInVuaXRQcmljZSIsImRpc2FibGVkIiwidG90YWxQcmljZSIsIm9uQ29uZmlybSIsIkluZGV4UmV2aWV3U3RhcnMiLCJDYXJ0VmVuZG9yR3JvdXAiLCJfcmVmJGNhcnRWZW5kb3JHcm91cCIsImNhcnRWZW5kb3JHcm91cCIsImNhcnRMaW5lcyIsIm5vdGUiLCJyZXZpZXdOb3RlIiwiY291bnQiLCJjb3VudFJldmlld3MiLCJ1c2VCdXR0b25Mb2FkaW5nIiwiQ2FydCIsIl9jYXJ0JGNvdW50IiwiY2FydCIsImZldGNoQ2FydCIsIl91c2VCdXR0b25Mb2FkaW5nIiwiX3VzZUJ1dHRvbkxvYWRpbmcyIiwiYnV0dG9uTG9hZGluZyIsImhhbmRsZUJ1dHRvbkNsaWNrIiwic2Vzc2lvblN0b3JhZ2UiLCJnZXRJdGVtIiwic2V0SXRlbSIsImdlbmVyYWxMb2FkaW5nIiwiY2FydFZlbmRvckdyb3VwcyIsIkNhcnRCdXR0b24iLCJNb2RhbCIsImNhcnRDaGlwVXBkYXRlIiwidXNlQ2FydEZldGNoIiwiQ2FydENvbnRyb2wiLCJjYXJ0SXNPcGVuIiwib3BlbkNhcnQiLCJjbG9zZUNhcnQiLCJfdXNlQ2FydEZldGNoIiwiX2NhcnQkdG90YWxQcmljZSIsInByaWNlVG9QYXkiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsInNlYXJjaCIsInN1YnN0cmluZyIsImhpZGRlbiIsIl9yZWdlbmVyYXRvclJ1bnRpbWUiLCJleHBvcnRzIiwiT3AiLCJPYmplY3QiLCJwcm90b3R5cGUiLCJoYXNPd24iLCJoYXNPd25Qcm9wZXJ0eSIsImRlZmluZVByb3BlcnR5Iiwib2JqIiwiZGVzYyIsInZhbHVlIiwiJFN5bWJvbCIsIlN5bWJvbCIsIml0ZXJhdG9yU3ltYm9sIiwiaXRlcmF0b3IiLCJhc3luY0l0ZXJhdG9yU3ltYm9sIiwiYXN5bmNJdGVyYXRvciIsInRvU3RyaW5nVGFnU3ltYm9sIiwidG9TdHJpbmdUYWciLCJkZWZpbmUiLCJlbnVtZXJhYmxlIiwiY29uZmlndXJhYmxlIiwid3JpdGFibGUiLCJlcnIiLCJ3cmFwIiwiaW5uZXJGbiIsIm91dGVyRm4iLCJzZWxmIiwidHJ5TG9jc0xpc3QiLCJwcm90b0dlbmVyYXRvciIsIkdlbmVyYXRvciIsImdlbmVyYXRvciIsImNyZWF0ZSIsImNvbnRleHQiLCJDb250ZXh0IiwibWFrZUludm9rZU1ldGhvZCIsInRyeUNhdGNoIiwiZm4iLCJhcmciLCJ0eXBlIiwiY2FsbCIsIkNvbnRpbnVlU2VudGluZWwiLCJHZW5lcmF0b3JGdW5jdGlvbiIsIkdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlIiwiSXRlcmF0b3JQcm90b3R5cGUiLCJnZXRQcm90byIsImdldFByb3RvdHlwZU9mIiwiTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUiLCJ2YWx1ZXMiLCJHcCIsImRlZmluZUl0ZXJhdG9yTWV0aG9kcyIsImZvckVhY2giLCJtZXRob2QiLCJfaW52b2tlIiwiQXN5bmNJdGVyYXRvciIsIlByb21pc2VJbXBsIiwiaW52b2tlIiwicmVzb2x2ZSIsInJlamVjdCIsInJlY29yZCIsInJlc3VsdCIsIl90eXBlb2YiLCJfX2F3YWl0IiwidGhlbiIsInVud3JhcHBlZCIsInByZXZpb3VzUHJvbWlzZSIsImNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnIiwic3RhdGUiLCJFcnJvciIsImRvbmVSZXN1bHQiLCJkZWxlZ2F0ZSIsImRlbGVnYXRlUmVzdWx0IiwibWF5YmVJbnZva2VEZWxlZ2F0ZSIsInNlbnQiLCJfc2VudCIsImRpc3BhdGNoRXhjZXB0aW9uIiwiYWJydXB0IiwiZG9uZSIsIm1ldGhvZE5hbWUiLCJUeXBlRXJyb3IiLCJpbmZvIiwicmVzdWx0TmFtZSIsIm5leHQiLCJuZXh0TG9jIiwicHVzaFRyeUVudHJ5IiwibG9jcyIsImVudHJ5IiwidHJ5TG9jIiwiY2F0Y2hMb2MiLCJmaW5hbGx5TG9jIiwiYWZ0ZXJMb2MiLCJ0cnlFbnRyaWVzIiwicHVzaCIsInJlc2V0VHJ5RW50cnkiLCJjb21wbGV0aW9uIiwicmVzZXQiLCJpdGVyYWJsZSIsIml0ZXJhdG9yTWV0aG9kIiwiaXNOYU4iLCJpIiwiZGlzcGxheU5hbWUiLCJpc0dlbmVyYXRvckZ1bmN0aW9uIiwiZ2VuRnVuIiwiY3RvciIsImNvbnN0cnVjdG9yIiwibWFyayIsInNldFByb3RvdHlwZU9mIiwiX19wcm90b19fIiwiYXdyYXAiLCJhc3luYyIsIlByb21pc2UiLCJpdGVyIiwia2V5cyIsInZhbCIsIm9iamVjdCIsInJldmVyc2UiLCJwb3AiLCJza2lwVGVtcFJlc2V0IiwicHJldiIsImNoYXJBdCIsInNsaWNlIiwic3RvcCIsInJvb3RSZWNvcmQiLCJydmFsIiwiZXhjZXB0aW9uIiwiaGFuZGxlIiwibG9jIiwiY2F1Z2h0IiwiaGFzQ2F0Y2giLCJoYXNGaW5hbGx5IiwiZmluYWxseUVudHJ5IiwiY29tcGxldGUiLCJmaW5pc2giLCJfY2F0Y2giLCJ0aHJvd24iLCJkZWxlZ2F0ZVlpZWxkIiwiYXN5bmNHZW5lcmF0b3JTdGVwIiwiZ2VuIiwiX25leHQiLCJfdGhyb3ciLCJfYXN5bmNUb0dlbmVyYXRvciIsImFyZ3MiLCJhcHBseSIsImFyciIsIl9hcnJheVdpdGhIb2xlcyIsIl9pdGVyYWJsZVRvQXJyYXlMaW1pdCIsIl91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheSIsIl9ub25JdGVyYWJsZVJlc3QiLCJvIiwibWluTGVuIiwiX2FycmF5TGlrZVRvQXJyYXkiLCJuIiwidG9TdHJpbmciLCJBcnJheSIsImZyb20iLCJ0ZXN0IiwibGVuIiwiYXJyMiIsIl9pIiwiX3MiLCJfZSIsIl94IiwiX3IiLCJfYXJyIiwiX24iLCJfZCIsImlzQXJyYXkiLCJ5dXAiLCJ1c2VGb3JtV2l0aFZhbGlkYXRpb24iLCJDb250cm9sbGVkUmFkaW9GaWVsZHMiLCJUZXh0RmllbGQiLCJGb3JtQnV0dG9uIiwiYXBpUHJlcGFyZWRGZXRjaCIsIlNpdGVDb25maWciLCJzY2hlbWEiLCJzdHJpbmciLCJDSVZJTElUWV9GIiwiQ0lWSUxJVFlfTSIsInJlcXVpcmVkIiwibWF4IiwibWVzc2FnZSIsIkNvbnRhY3RGb3JtIiwiX2Vycm9ycyRjaXZpbGl0eSIsIl9lcnJvcnMkZmlyc3ROYW1lIiwiX2Vycm9ycyRsYXN0TmFtZSIsIl9lcnJvcnMkZW1haWwiLCJfZXJyb3JzJG1lc3NhZ2UiLCJvblN1Ym1pdFN1Y2Nlc3MiLCJfdXNlRm9ybVdpdGhWYWxpZGF0aW8iLCJoYW5kbGVTdWJtaXQiLCJjb250cm9sIiwiZXJyb3JzIiwic2V0RXJyb3IiLCJzZXRWYWx1ZSIsImlzU3VibWl0dGluZyIsImlzTG9hZGluZyIsInNldExvYWRpbmciLCJlcnJvckZsYXNoSXNPcGVuIiwib3BlbkVycm9yRmxhc2giLCJjbG9zZUVycm9yRmxhc2giLCJvblN1Ym1pdCIsIl9jYWxsZWUiLCJmb3JtRGF0YSIsIl9jYWxsZWUkIiwiX2NvbnRleHQiLCJ0MCIsIl94MiIsImZvcm1SZWYiLCJxdWVyeVNlbGVjdG9yQWxsIiwiaW5wdXRXcmFwcGVyIiwiY2hvaWNlcyIsIl9kZWZpbmVQcm9wZXJ0eSIsImlzUmVxdWlyZWRGaWVsZCIsImxvYWRpbmciLCJDaGF0SWNvbiIsIkNoYXRCdXR0b24iLCJDb250YWN0Q29udHJvbCIsImNoaWxkcmVuIiwiYnV0dG9uQ2xhc3MiLCJmb3JtSXNPcGVuIiwib3BlbkZvcm0iLCJjbG9zZUZvcm0iLCJfdXNlT3BlblN0YXRlMyIsIl91c2VPcGVuU3RhdGU0Iiwic3VjY2Vzc0ZsYXNoSXNPcGVuIiwib3BlblN1Y2Nlc3NGbGFzaCIsImNsb3NlU3VjY2Vzc0ZsYXNoIiwiaGFuZGxlU3VibWl0U3VjY2VzcyIsInVzZUZldGNoUVNlYXJjaCIsIlNlYXJjaEljb24iLCJQcm9kdWN0Q2FyZCIsIklubGluZVNlYXJjaFRvb2wiLCJpbnB1dFJlZiIsInEiLCJzZXRRIiwiaGFuZGxlQ2hhbmdlIiwiY3VycmVudFRhcmdldCIsIl91c2VGZXRjaFFTZWFyY2giLCJfdXNlRmV0Y2hRU2VhcmNoMiIsInJlc2V0UHJvZHVjdHMiLCJmb2N1cyIsImhhbmRsZUNsb3NlIiwid3JhcHBlclJlZiIsIm9uQW5pbWF0aW9uRW5kIiwiaGFuZGxlRW1wdHkiLCJhY3Rpb24iLCJwbGFjZWhvbGRlciIsIm9uQ2hhbmdlIiwiYXV0b0ZvY3VzIiwiaXRlbXMiLCJpdGVtIiwiU2VhcmNoQnV0dG9uIiwiY3JlYXRlUG9ydGFsIiwiSW5saW5lU2VhcmNoVG9vbENvbnRyb2wiLCJzZWFyY2hUb29sSXNPcGVuIiwib3BlblNlYXJjaFRvb2wiLCJjbG9zZVNlYXJjaFRvb2wiLCJBY2NvdW50SWNvbiIsIkJlY29tZVZlbmRvckxpbmsiLCJEYXNoYm9hcmRJY29uIiwiQWNjb3VudExpbmtzIiwiQW5vbnltb3VzQWNjb3VudExpbmsiLCJDdXN0b21lckFjY291bnRMaW5rIiwiVmVuZG9yQWNjb3VudExpbmsiLCJDaGV2cm9uUmlnaHRJY29uIiwiRmFjZWJvb2tMaW5rIiwiSW5zdGFncmFtTGluayIsIk1vYmlsZU1lbnVGb290ZXIiLCJTVVBQT1JURURfTE9DQUxFUyIsIkxvY2FsZUxpbmsiLCJDaGV2cm9uTGVmdEljb24iLCJNb2JpbGVTdWJNZW51IiwiaGFuZGxlUmV0dXJuIiwiZm9yd2FyZFJlZiIsIkhlYWRlckxvZ28iLCJNb2JpbGVNZW51IiwibW9kYWxSZWYiLCJzY3JvbGwiLCJNZW51QnV0dG9uIiwiTW9iaWxlTWVudUNvbnRyb2wiLCJzaWRlTWVudUlzT3BlbiIsIm9wZW5TaWRlTWVudSIsImNsb3NlU2lkZU1lbnUiLCJBcnRpY2xlU3VnZ2VzdCIsIlByb2R1Y3RJbmRleFJldmlldyIsIlByb2R1Y3RTdWdnZXN0IiwiYmFzZVBhY2thZ2luZyIsIlJlY2lwZVN1Z2dlc3QiLCJTaWRlU2VhcmNoVG9vbCIsIlNpZGVTZWFyY2hUb29sQ29udHJvbCIsIkhlYWRlclRvcCIsInVzZVNjcm9sbFlEaXJlY3Rpb25MaXN0ZW5lciIsIkhlYWRlciIsIl91c2VTY3JvbGxZRGlyZWN0aW9uTCIsImlzU2Nyb2xsaW5nVXAiLCJpc1Njcm9sbGluZ0Rvd24iLCJoZWFkZXJDbGFzcyIsInNldEhlYWRlckNsYXNzIiwib3duS2V5cyIsImVudW1lcmFibGVPbmx5IiwiZ2V0T3duUHJvcGVydHlTeW1ib2xzIiwic3ltYm9scyIsImZpbHRlciIsInN5bSIsImdldE93blByb3BlcnR5RGVzY3JpcHRvciIsIl9vYmplY3RTcHJlYWQiLCJzb3VyY2UiLCJnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzIiwiZGVmaW5lUHJvcGVydGllcyIsIl90b1Byb3BlcnR5S2V5IiwiX3RvUHJpbWl0aXZlIiwiU3RyaW5nIiwiaW5wdXQiLCJoaW50IiwicHJpbSIsInRvUHJpbWl0aXZlIiwicmVzIiwiTnVtYmVyIiwidXNlQ2FsbGJhY2siLCJ1c2VSZWR1Y2VyIiwiQXBpRXJyb3IiLCJhcGlGZXRjaCIsInByaWNlQWRkIiwicHJpY2VMZXNzIiwicHJpY2VNdWx0aXBseSIsImV4dHJhY3RDYXJ0TGluZXMiLCJyZWR1Y2VyIiwicGF5bG9hZCIsImdlbmVyYWxFcnJvciIsInN0b2NrIiwibGluZVRvUmVtb3ZlIiwiZmluZCIsImxpbmVUb3RhbFByaWNlIiwibGluZVF1YW50aXR5IiwibGluZVRvUmVtb3ZlSWQiLCJsaW5lVG90YWxQcmljZXNCeUlkIiwiZnJvbUVudHJpZXMiLCJjYXJ0VG90YWxQcmljZSIsInJlZHVjZSIsImFjYyIsIl91c2VSZWR1Y2VyIiwiX3VzZVJlZHVjZXIyIiwiZGlzcGF0Y2giLCJxdWFudGl0eVRpbWVyIiwic2V0UXVhbnRpdHlUaW1lciIsImZ1bGxDYXJ0IiwiX2NhbGxlZTIiLCJwYWNrYWdpbmdJZCIsIl9jYWxsZWUyJCIsIl9jb250ZXh0MiIsIl9jYWxsZWUzIiwiX2NhbGxlZTMkIiwiX2NvbnRleHQzIiwidXNlU2Nyb2xsWUxpc3RlbmVyIiwic3RhcnQiLCJzZW5zaWJpbGl0eSIsImN1cnJlbnRTY3JvbGwiLCJzZXRTY3JvbGxpbmdEb3duIiwic2V0U2Nyb2xsaW5nVXAiLCJfdXNlU3RhdGU1IiwiX3VzZVN0YXRlNiIsImxhc3RTY3JvbGwiLCJzZXRMYXN0U2Nyb2xsIiwic2Nyb2xsWSIsInNldEN1cnJlbnRTY3JvbGwiLCJvblNjcm9sbCIsInN1YnN0ciIsInRvVXBwZXJDYXNlIiwicmVzb2x2ZUxhYmVsIiwiX3JlZiRhbGlnbiIsImFsaWduIiwiRmx5Um9sZUJhZGdlIiwiX3JlZiRudW1iZXIiLCJwcm9wcyIsIl9vYmplY3RXaXRob3V0UHJvcGVydGllcyIsIl9leGNsdWRlZCIsIl9leHRlbmRzIiwiQnV0dG9uIiwiQ2FydEljb24iLCJMb2dvdXRJY29uIiwiTWVudUljb24iLCJ2ZXJzaW9uIiwieG1sbnMiLCJ4IiwieSIsInZpZXdCb3giLCJmaWxsIiwiZCIsIl9yZWYkY2xvc2UiLCJfcmVmJGFuaW1hdGVkIiwiYW5pbWF0ZWQiLCJlbHQiLCJjb250YWluZXJSZWYiLCJoYW5kbGVTdG9wUHJvcGFnYXRpb24iLCJ1c2VDb250cm9sbGVyIiwiZW50cmllcyIsIkNvbnRyb2xsZWRSYWRpb0ZpZWxkIiwiX3JlZjQkZGVmYXVsdFZhbHVlIiwiZGVmYXVsdFZhbHVlIiwiX3JlZjQkYWRkaXRpb25hbENsYXNzIiwiX3VzZUNvbnRyb2xsZXIiLCJhc3NpZ24iLCJfb2JqZWN0RGVzdHJ1Y3R1cmluZ0VtcHR5IiwiZmllbGQiLCJjaGVja2VkIiwiaHRtbEZvciIsImNsaXBSdWxlIiwiZmlsbFJ1bGUiLCJ0cmFuc2Zvcm0iLCJlbmFibGVCYWNrZ3JvdW5kIiwiY3JlYXRlUm9vdCIsImNvbmZpZ3VyZUxhbmd1YWdlIiwiaGVhZGVyIiwiZ2V0RWxlbWVudEJ5SWQiLCJoZWFkZXJSb290IiwicmVuZGVyIiwiX2l0ZXJhdG9yIiwiX2NyZWF0ZUZvck9mSXRlcmF0b3JIZWxwZXIiLCJfc3RlcCIsInMiLCJjb25jYXQiLCJmIl0sInNvdXJjZVJvb3QiOiIifQ==
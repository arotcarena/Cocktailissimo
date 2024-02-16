"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["assets_UI_ShowSubSections_Publication_Comment_index_jsx-assets_UI_ShowSubSections_ShowLinkedI-e8545e"],{

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

/***/ "./assets/UI/Card/SubCategoryCard.jsx":
/*!********************************************!*\
  !*** ./assets/UI/Card/SubCategoryCard.jsx ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SubCategoryCard": () => (/* binding */ SubCategoryCard)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


var SubCategoryCard = function SubCategoryCard(_ref) {
  var subCategory = _ref.subCategory;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("li", {
    className: "product-card type-recipe"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("a", {
    className: "product-card-img-link",
    href: subCategory.target
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
    className: "product-card-img-wrapper"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("img", {
    className: "product-card-img",
    src: subCategory.smallPicture.path,
    alt: subCategory.smallPicture.alt
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
    className: "product-card-body"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("h2", {
    className: "product-card-title"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("a", {
    href: subCategory.target
  }, subCategory.name))));
};

/***/ }),

/***/ "./assets/UI/ShowSubSections/Publication/Comment/CommentCard/CommentSummary.jsx":
/*!**************************************************************************************!*\
  !*** ./assets/UI/ShowSubSections/Publication/Comment/CommentCard/CommentSummary.jsx ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CommentSummary": () => (/* binding */ CommentSummary)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.map.js */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Icon_Loader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../Icon/Loader */ "./assets/UI/Icon/Loader.jsx");
/* harmony import */ var _Answer_AnswerCard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Answer/AnswerCard */ "./assets/UI/ShowSubSections/Publication/Answer/AnswerCard.jsx");
/* harmony import */ var _Answer_ImportantAnswer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../Answer/ImportantAnswer */ "./assets/UI/ShowSubSections/Publication/Answer/ImportantAnswer.jsx");





var CommentSummary = function CommentSummary(_ref) {
  var comment = _ref.comment,
    isLoading = _ref.isLoading;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
    className: "modal-summary-card"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
    className: "review-card-header"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
    className: "review-card-infos"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("span", null, comment.fullName), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("span", null, comment.createdAt))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
    className: "review-card-body"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
    className: "review-card-body-content"
  }, comment.content)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
    className: "qa-card-bottom"
  }, comment.firstAnswers.map(function (answer) {
    return answer.type === 'customer' ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_Answer_AnswerCard__WEBPACK_IMPORTED_MODULE_3__.AnswerCard, {
      key: answer.id,
      answer: answer,
      isSummary: true
    }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_Answer_ImportantAnswer__WEBPACK_IMPORTED_MODULE_4__.ImportantAnswer, {
      key: answer.id,
      answer: answer,
      isSummary: true
    });
  }), isLoading && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_Icon_Loader__WEBPACK_IMPORTED_MODULE_2__.Loader, null), comment.restAnswers.map(function (answer) {
    return answer.type === 'customer' ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_Answer_AnswerCard__WEBPACK_IMPORTED_MODULE_3__.AnswerCard, {
      key: answer.id,
      answer: answer,
      isSummary: true
    }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_Answer_ImportantAnswer__WEBPACK_IMPORTED_MODULE_4__.ImportantAnswer, {
      key: answer.id,
      answer: answer,
      isSummary: true
    });
  })));
};

/***/ }),

/***/ "./assets/UI/ShowSubSections/Publication/Comment/CommentCard/index.jsx":
/*!*****************************************************************************!*\
  !*** ./assets/UI/ShowSubSections/Publication/Comment/CommentCard/index.jsx ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CommentCard": () => (/* binding */ CommentCard)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.includes.js */ "./node_modules/core-js/modules/es.array.includes.js");
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.string.includes.js */ "./node_modules/core-js/modules/es.string.includes.js");
/* harmony import */ var core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.map.js */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.concat.js */ "./node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_3__);
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
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_28___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_28__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_29___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_29__);
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of.js */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_30___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_30__);
/* harmony import */ var core_js_modules_es_array_reverse_js__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! core-js/modules/es.array.reverse.js */ "./node_modules/core-js/modules/es.array.reverse.js");
/* harmony import */ var core_js_modules_es_array_reverse_js__WEBPACK_IMPORTED_MODULE_31___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_reverse_js__WEBPACK_IMPORTED_MODULE_31__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_32___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_32__);
/* harmony import */ var _Icon_Loader__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ../../../../Icon/Loader */ "./assets/UI/Icon/Loader.jsx");
/* harmony import */ var _CustomHook_state_useOpenState__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ../../../../../CustomHook/state/useOpenState */ "./assets/CustomHook/state/useOpenState.jsx");
/* harmony import */ var _Form_FormButton__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ../../../../Form/FormButton */ "./assets/UI/Form/FormButton.jsx");
/* harmony import */ var _Container_Modal__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ../../../../Container/Modal */ "./assets/UI/Container/Modal.jsx");
/* harmony import */ var _Icon_ExpandMoreIcon__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ../../../../Icon/ExpandMoreIcon */ "./assets/UI/Icon/ExpandMoreIcon.jsx");
/* harmony import */ var _Answer_AnswerCard__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ../../Answer/AnswerCard */ "./assets/UI/ShowSubSections/Publication/Answer/AnswerCard.jsx");
/* harmony import */ var _Answer_AnswerCreate__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ../../Answer/AnswerCreate */ "./assets/UI/ShowSubSections/Publication/Answer/AnswerCreate/index.jsx");
/* harmony import */ var _CommentSummary__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./CommentSummary */ "./assets/UI/ShowSubSections/Publication/Comment/CommentCard/CommentSummary.jsx");
/* harmony import */ var _Answer_ImportantAnswer__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ../../Answer/ImportantAnswer */ "./assets/UI/ShowSubSections/Publication/Answer/ImportantAnswer.jsx");
/* harmony import */ var _PublicationRemover__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ../../PublicationRemover */ "./assets/UI/ShowSubSections/Publication/PublicationRemover.jsx");
/* harmony import */ var _CustomHook_remover_useRemover__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ../../../../../CustomHook/remover/useRemover */ "./assets/CustomHook/remover/useRemover.jsx");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
































function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }













var CommentCard = function CommentCard(_ref) {
  var ownerTopCard = _ref.ownerTopCard,
    comment = _ref.comment,
    deleteComment = _ref.deleteComment,
    deleteAnswer = _ref.deleteAnswer,
    createAnswer = _ref.createAnswer,
    fetchOneFull = _ref.fetchOneFull;
  var _useTranslation = (0,react_i18next__WEBPACK_IMPORTED_MODULE_44__.useTranslation)('messages'),
    t = _useTranslation.t;
  var _useOpenState = (0,_CustomHook_state_useOpenState__WEBPACK_IMPORTED_MODULE_34__.useOpenState)(false),
    _useOpenState2 = _slicedToArray(_useOpenState, 3),
    restIsOpen = _useOpenState2[0],
    openRest = _useOpenState2[1],
    closeRest = _useOpenState2[2];
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_32__.useState)(null),
    _useState2 = _slicedToArray(_useState, 2),
    isLoading = _useState2[0],
    setLoading = _useState2[1];
  var fetchFullComment = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      var force,
        _args = arguments;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            force = _args.length > 0 && _args[0] !== undefined ? _args[0] : true;
            setLoading(true);
            _context.next = 4;
            return fetchOneFull(comment.id, force);
          case 4:
            // dans fetchOneFull, on gère pour faire l'appel que si nécessaire (si force = true alors l'appel sera fait dans tous les cas)
            setLoading(false);
          case 5:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
    return function fetchFullComment() {
      return _ref2.apply(this, arguments);
    };
  }();
  (0,react__WEBPACK_IMPORTED_MODULE_32__.useEffect)(function () {
    if (restIsOpen) {
      fetchFullComment(false);
    }
  }, [restIsOpen]);

  //Answer FORM  
  var _useOpenState3 = (0,_CustomHook_state_useOpenState__WEBPACK_IMPORTED_MODULE_34__.useOpenState)(false),
    _useOpenState4 = _slicedToArray(_useOpenState3, 3),
    formIsOpen = _useOpenState4[0],
    openForm = _useOpenState4[1],
    closeForm = _useOpenState4[2];

  //si on revient de login avec #com_a-{commentId} dans l'url alors on ouvre le form
  //si on arrive d'un lien dans un mail avec #cch-show-{commentId} dans l'url alors on scroll sur commentCard
  (0,react__WEBPACK_IMPORTED_MODULE_32__.useEffect)(function () {
    if (location.href.includes('#com_a-' + comment.id)) {
      openForm();
    } else if (location.href.includes('#cch-show-' + comment.id)) {
      commentCardRef.current.scrollIntoView();
    }
  }, []);
  var commentCardRef = (0,react__WEBPACK_IMPORTED_MODULE_32__.useRef)(null);

  //delete comment
  var _useRemover = (0,_CustomHook_remover_useRemover__WEBPACK_IMPORTED_MODULE_43__.useRemover)(),
    confirmationIsOpen = _useRemover.confirmationIsOpen,
    openConfirmation = _useRemover.openConfirmation,
    closeConfirmation = _useRemover.closeConfirmation,
    isRemoving = _useRemover.isRemoving,
    setRemoving = _useRemover.setRemoving;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_32___default().createElement("li", {
    ref: commentCardRef,
    className: 'review-card' + (confirmationIsOpen ? ' remove-confirm' : '') + (isRemoving ? ' is-removing' : '')
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_32___default().createElement("div", {
    className: "qa-card-top"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_32___default().createElement("div", {
    className: "review-card-header"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_32___default().createElement("div", {
    className: "review-card-infos"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_32___default().createElement("span", null, comment.fullName), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_32___default().createElement("span", null, comment.createdAt))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_32___default().createElement("div", {
    className: "review-card-body"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_32___default().createElement("div", {
    className: "review-card-body-content"
  }, comment.content), comment.canRemove && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_32___default().createElement(_PublicationRemover__WEBPACK_IMPORTED_MODULE_42__.PublicationRemover, {
    deletePublication: function deletePublication() {
      return deleteComment(comment.id);
    },
    confirmationIsOpen: confirmationIsOpen,
    openConfirmation: openConfirmation,
    closeConfirmation: closeConfirmation,
    isRemoving: isRemoving,
    setRemoving: setRemoving
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_32___default().createElement("div", {
    className: "qa-card-bottom"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_32___default().createElement("div", {
    className: "rest-list qa-card-bottom-content"
  }, !restIsOpen && comment.firstAnswers.length > 0 && comment.firstAnswers.map(function (answer) {
    return answer.type === 'customer' ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_32___default().createElement(_Answer_AnswerCard__WEBPACK_IMPORTED_MODULE_38__.AnswerCard, {
      key: answer.id,
      ownerId: comment.id,
      answer: answer,
      deleteAnswer: deleteAnswer
    }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_32___default().createElement(_Answer_ImportantAnswer__WEBPACK_IMPORTED_MODULE_41__.ImportantAnswer, {
      key: answer.id,
      ownerId: comment.id,
      answer: answer,
      deleteAnswer: deleteAnswer
    });
  }), restIsOpen && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_32___default().createElement((react__WEBPACK_IMPORTED_MODULE_32___default().Fragment), null, [].concat(_toConsumableArray(comment.firstAnswers), _toConsumableArray(comment.restAnswers)).map(function (answer) {
    return answer.type === 'customer' ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_32___default().createElement(_Answer_AnswerCard__WEBPACK_IMPORTED_MODULE_38__.AnswerCard, {
      key: answer.id,
      ownerId: comment.id,
      answer: answer,
      deleteAnswer: deleteAnswer
    }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_32___default().createElement(_Answer_ImportantAnswer__WEBPACK_IMPORTED_MODULE_41__.ImportantAnswer, {
      key: answer.id,
      ownerId: comment.id,
      answer: answer,
      deleteAnswer: deleteAnswer
    });
  }), isLoading && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_32___default().createElement(_Icon_Loader__WEBPACK_IMPORTED_MODULE_33__.Loader, {
    additionalClass: "right-loader"
  }))), !restIsOpen && comment.countRestAnswers > 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_32___default().createElement("button", {
    className: "qa-card-info qa-card-button i-text",
    type: "button",
    onClick: openRest
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_32___default().createElement(_Icon_ExpandMoreIcon__WEBPACK_IMPORTED_MODULE_37__.ExpandMoreIcon, {
    additionalClass: "icon"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_32___default().createElement("span", null, t('count.see_rest_answers', {
    count: comment.countRestAnswers
  }))), restIsOpen && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_32___default().createElement("button", {
    className: "qa-card-info qa-card-button i-text",
    type: "button",
    onClick: closeRest
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_32___default().createElement(_Icon_ExpandMoreIcon__WEBPACK_IMPORTED_MODULE_37__.ExpandMoreIcon, {
    additionalClass: "icon expanded"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_32___default().createElement("span", null, t('see_less')))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_32___default().createElement("div", {
    className: "qa-card-footer"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_32___default().createElement(_Container_Modal__WEBPACK_IMPORTED_MODULE_36__.Modal, {
    additionalClass: "comment-form-modal answer-form-modal center-form-modal",
    isOpen: formIsOpen,
    close: closeForm
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_32___default().createElement(_Answer_AnswerCreate__WEBPACK_IMPORTED_MODULE_39__.AnswerCreate, {
    ownerId: comment.id,
    createAnswer: createAnswer,
    ownerTopCard: ownerTopCard,
    fetchAfterSubmitSuccess: fetchFullComment,
    close: closeForm
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_32___default().createElement(_CommentSummary__WEBPACK_IMPORTED_MODULE_40__.CommentSummary, {
    comment: comment,
    isLoading: isLoading
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_32___default().createElement(_Form_FormButton__WEBPACK_IMPORTED_MODULE_35__.FormButton, {
    onClick: openForm,
    additionalClass: "bordeaux-grey create-form-small-button"
  }, t('submit.answer'))));
};

/***/ }),

/***/ "./assets/UI/ShowSubSections/Publication/Comment/CommentCreate/CommentForm/index.jsx":
/*!*******************************************************************************************!*\
  !*** ./assets/UI/ShowSubSections/Publication/Comment/CommentCreate/CommentForm/index.jsx ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CommentForm": () => (/* binding */ CommentForm)
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
/* harmony import */ var _Context_ShowSubSectionsContext__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ../../../../../../Context/ShowSubSectionsContext */ "./assets/Context/ShowSubSectionsContext.jsx");
/* harmony import */ var _functions_api__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ../../../../../../functions/api */ "./assets/functions/api.js");
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
  content: yup__WEBPACK_IMPORTED_MODULE_33__.string().max(500, (0,i18next__WEBPACK_IMPORTED_MODULE_39__.t)('assert.length.max', {
    ns: 'constraints',
    max: 500
  })).required(),
  agreeTerms: yup__WEBPACK_IMPORTED_MODULE_33__.bool().isTrue((0,i18next__WEBPACK_IMPORTED_MODULE_39__.t)('assert.checkbox.true', {
    ns: 'constraints'
  })).required()
}).required();
var CommentForm = function CommentForm(_ref) {
  var _errors$content;
  var createComment = _ref.createComment,
    close = _ref.close;
  var _useTranslation = (0,react_i18next__WEBPACK_IMPORTED_MODULE_40__.useTranslation)('messages'),
    t = _useTranslation.t;
  var _useFormWithValidatio = (0,_CustomHook_form_useFormWithValidation__WEBPACK_IMPORTED_MODULE_32__.useFormWithValidation)(schema, {
      content: '',
      agreeTerms: false
    }),
    register = _useFormWithValidatio.register,
    handleSubmit = _useFormWithValidatio.handleSubmit,
    errors = _useFormWithValidatio.errors,
    isSubmitting = _useFormWithValidatio.isSubmitting,
    control = _useFormWithValidatio.control,
    setError = _useFormWithValidatio.setError,
    setValue = _useFormWithValidatio.setValue;
  var setSubmitInfo = (0,react__WEBPACK_IMPORTED_MODULE_31__.useContext)(_Context_ShowSubSectionsContext__WEBPACK_IMPORTED_MODULE_37__.SetSubmitInfoContext);
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
            return createComment(formData);
          case 6:
            setSubmitInfo({
              type: 'success',
              message: t('success.submit.comment')
            });
            close();
            _context.next = 13;
            break;
          case 10:
            _context.prev = 10;
            _context.t0 = _context["catch"](3);
            if (_context.t0 instanceof _functions_api__WEBPACK_IMPORTED_MODULE_38__.ApiError) {
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
    type: "textarea",
    control: control,
    name: "content",
    error: (_errors$content = errors.content) === null || _errors$content === void 0 ? void 0 : _errors$content.message,
    maxLength: 500
  }, t('comment'), " *"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_31___default().createElement("div", {
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
  }, t('agree_terms_of_use'))), errors.agreeTerms && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_31___default().createElement("div", {
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

/***/ "./assets/UI/ShowSubSections/Publication/Comment/CommentCreate/index.jsx":
/*!*******************************************************************************!*\
  !*** ./assets/UI/ShowSubSections/Publication/Comment/CommentCreate/index.jsx ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CommentCreate": () => (/* binding */ CommentCreate)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _functions_security__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../functions/security */ "./assets/functions/security.js");
/* harmony import */ var _CommentForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CommentForm */ "./assets/UI/ShowSubSections/Publication/Comment/CommentCreate/CommentForm/index.jsx");
/* harmony import */ var _CustomHook_useGetUser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../CustomHook/useGetUser */ "./assets/CustomHook/useGetUser.jsx");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");





var CommentCreate = function CommentCreate(_ref) {
  var ownerTopCard = _ref.ownerTopCard,
    createComment = _ref.createComment,
    close = _ref.close;
  var _useTranslation = (0,react_i18next__WEBPACK_IMPORTED_MODULE_4__.useTranslation)('messages'),
    t = _useTranslation.t;

  //on vérifie qu'un user est connecté
  var _useGetUser = (0,_CustomHook_useGetUser__WEBPACK_IMPORTED_MODULE_3__.useGetUser)(),
    user = _useGetUser.user,
    updateUser = _useGetUser.updateUser;
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (user === false) {
      (0,_functions_security__WEBPACK_IMPORTED_MODULE_1__.redirectToLogin)(location.href + '#comment',
      //targetPath
      t('warning.need_login_to_post_comment'),
      //message
      close() //onError on ferme
      );
    }
  }, [user]);
  return user && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "review-form-wrapper"
  }, ownerTopCard, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", {
    className: "review-form-title"
  }, t('my_comment')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_CommentForm__WEBPACK_IMPORTED_MODULE_2__.CommentForm, {
    createComment: createComment,
    close: close
  }));
};

/***/ }),

/***/ "./assets/UI/ShowSubSections/Publication/Comment/index.jsx":
/*!*****************************************************************!*\
  !*** ./assets/UI/ShowSubSections/Publication/Comment/index.jsx ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Comment": () => (/* binding */ Comment)
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
/* harmony import */ var _Form_FormButton__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ../../../Form/FormButton */ "./assets/UI/Form/FormButton.jsx");
/* harmony import */ var _Container_Modal__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ../../../Container/Modal */ "./assets/UI/Container/Modal.jsx");
/* harmony import */ var _Search_LangFilter__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ../../../Search/LangFilter */ "./assets/UI/Search/LangFilter.jsx");
/* harmony import */ var _CommentCreate__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./CommentCreate */ "./assets/UI/ShowSubSections/Publication/Comment/CommentCreate/index.jsx");
/* harmony import */ var _CommentCard__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./CommentCard */ "./assets/UI/ShowSubSections/Publication/Comment/CommentCard/index.jsx");
/* harmony import */ var _entrypoints_i18n__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ../../../../entrypoints/i18n */ "./assets/entrypoints/i18n.js");
/* harmony import */ var _CustomHook_publication_usePublicationCRUD__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ../../../../CustomHook/publication/usePublicationCRUD */ "./assets/CustomHook/publication/usePublicationCRUD.jsx");
/* harmony import */ var i18next__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! i18next */ "./node_modules/i18next/dist/esm/i18next.js");
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











var Comment = function Comment(_ref) {
  var ownerTopCard = _ref.ownerTopCard,
    fetchAllEntrypoint = _ref.fetchAllEntrypoint,
    fetchOneFullEntrypoint = _ref.fetchOneFullEntrypoint,
    createEntrypoint = _ref.createEntrypoint;
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_31__.useState)({
      page: 1,
      limit: 10,
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
  var _usePublicationCRUD = (0,_CustomHook_publication_usePublicationCRUD__WEBPACK_IMPORTED_MODULE_40__.usePublicationCRUD)(fetchAllEntrypoint, fetchOneFullEntrypoint, '/' + _entrypoints_i18n__WEBPACK_IMPORTED_MODULE_39__["default"].language + '/api/comment/delete', createEntrypoint, '/' + _entrypoints_i18n__WEBPACK_IMPORTED_MODULE_39__["default"].language + '/api/answer/create/comment', filters, setFilters, scrollToControls),
    result = _usePublicationCRUD.result,
    fetchOneFull = _usePublicationCRUD.fetchOneFull,
    createItem = _usePublicationCRUD.createItem,
    createAnswer = _usePublicationCRUD.createAnswer,
    deleteItem = _usePublicationCRUD.deleteItem,
    deleteAnswer = _usePublicationCRUD.deleteAnswer,
    isLoading = _usePublicationCRUD.isLoading,
    handlePageChange = _usePublicationCRUD.handlePageChange,
    hasControls = _usePublicationCRUD.hasControls;

  //Comment FORM  
  var _useOpenState = (0,_CustomHook_state_useOpenState__WEBPACK_IMPORTED_MODULE_32__.useOpenState)(false),
    _useOpenState2 = _slicedToArray(_useOpenState, 3),
    formIsOpen = _useOpenState2[0],
    openForm = _useOpenState2[1],
    closeForm = _useOpenState2[2];
  (0,react__WEBPACK_IMPORTED_MODULE_31__.useEffect)(function () {
    if (location.href.includes('#comment')) {
      openForm();
    }
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_31___default().createElement((react__WEBPACK_IMPORTED_MODULE_31___default().Fragment), null, hasControls && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_31___default().createElement("div", {
    ref: controlsRef,
    className: "questionAnswer-controls"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_31___default().createElement("div", {
    className: "review-sub-controls"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_31___default().createElement(_Search_LangFilter__WEBPACK_IMPORTED_MODULE_36__.LangFilter, {
    id: "comment-lang",
    lang: filters.lang,
    onChange: setFilterValue
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_31___default().createElement(_Search_SearchResults__WEBPACK_IMPORTED_MODULE_33__.SearchResults, {
    isLoading: isLoading,
    result: result,
    pageChange: handlePageChange
  }, result && result.items.map(function (comment) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_31___default().createElement(_CommentCard__WEBPACK_IMPORTED_MODULE_38__.CommentCard, {
      key: comment.id,
      comment: comment,
      deleteComment: deleteItem,
      createAnswer: createAnswer,
      deleteAnswer: deleteAnswer,
      fetchOneFull: fetchOneFull,
      ownerTopCard: ownerTopCard
    });
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_31___default().createElement(_Container_Modal__WEBPACK_IMPORTED_MODULE_35__.Modal, {
    additionalClass: "review-form-modal center-form-modal",
    isOpen: formIsOpen,
    close: closeForm
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_31___default().createElement(_CommentCreate__WEBPACK_IMPORTED_MODULE_37__.CommentCreate, {
    createComment: createItem,
    close: closeForm,
    ownerTopCard: ownerTopCard
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_31___default().createElement(_Form_FormButton__WEBPACK_IMPORTED_MODULE_34__.FormButton, {
    additionalClass: "bordeaux-black outline create-form-button",
    onClick: openForm
  }, (0,i18next__WEBPACK_IMPORTED_MODULE_41__.t)('post_a_comment', {
    ns: 'messages'
  })));
};

/***/ }),

/***/ "./assets/UI/ShowSubSections/ShowLinkedItems/index.jsx":
/*!*************************************************************!*\
  !*** ./assets/UI/ShowSubSections/ShowLinkedItems/index.jsx ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ShowLinkedItems": () => (/* binding */ ShowLinkedItems)
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
/* harmony import */ var _Components_Shop_ProductIndex_ProductCard__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../Components/Shop/ProductIndex/ProductCard */ "./assets/Components/Shop/ProductIndex/ProductCard.jsx");
/* harmony import */ var _CustomHook_fetch_useFetch__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../../CustomHook/fetch/useFetch */ "./assets/CustomHook/fetch/useFetch.jsx");
/* harmony import */ var _Icon_Loader__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../Icon/Loader */ "./assets/UI/Icon/Loader.jsx");
/* harmony import */ var _Carousel__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../Carousel */ "./assets/UI/Carousel/index.jsx");
/* harmony import */ var _Service_CarouselResponsiveRules__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../../../Service/CarouselResponsiveRules */ "./assets/Service/CarouselResponsiveRules.js");
/* harmony import */ var _Components_Blog_Recipe_RecipeIndex_RecipeCard__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../../../Components/Blog/Recipe/RecipeIndex/RecipeCard */ "./assets/Components/Blog/Recipe/RecipeIndex/RecipeCard.jsx");
/* harmony import */ var _Components_Blog_Article_ArticleIndex_ArticleCard__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../../../Components/Blog/Article/ArticleIndex/ArticleCard */ "./assets/Components/Blog/Article/ArticleIndex/ArticleCard.jsx");
/* harmony import */ var _Card_SubCategoryCard__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../../Card/SubCategoryCard */ "./assets/UI/Card/SubCategoryCard.jsx");

















function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }









var ShowLinkedItems = function ShowLinkedItems(_ref) {
  var entrypoint = _ref.entrypoint;
  var _useFetch = (0,_CustomHook_fetch_useFetch__WEBPACK_IMPORTED_MODULE_19__.useFetch)(entrypoint),
    _useFetch2 = _slicedToArray(_useFetch, 3),
    items = _useFetch2[0],
    isLoading = _useFetch2[1],
    errors = _useFetch2[2];
  var responsive = new _Service_CarouselResponsiveRules__WEBPACK_IMPORTED_MODULE_22__.CarouselResponsiveRules({
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
        slidesToScroll: 1
      },
      1060: {
        slidesToShow: 5,
        slidesToScroll: 1
      },
      1500: {
        slidesToShow: 6,
        slidesToScroll: 1
      }
    }
  });
  if (errors) {
    return '';
  }
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default().createElement("div", {
    className: "suggestedProducts-wrapper"
  }, isLoading && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default().createElement(_Icon_Loader__WEBPACK_IMPORTED_MODULE_20__.Loader, {
    additionalClass: "main-loader"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default().createElement(_Carousel__WEBPACK_IMPORTED_MODULE_21__.Carousel, {
    className: "linked-products-carousel",
    items: items,
    responsive: responsive
  }, items && items.map(function (item) {
    switch (item.type) {
      case 'product':
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default().createElement(_Components_Shop_ProductIndex_ProductCard__WEBPACK_IMPORTED_MODULE_18__.ProductCard, {
          key: item.id,
          product: item
        });
      case 'recipe':
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default().createElement(_Components_Blog_Recipe_RecipeIndex_RecipeCard__WEBPACK_IMPORTED_MODULE_23__.RecipeCard, {
          key: item.id,
          recipe: item
        });
      case 'article':
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default().createElement(_Components_Blog_Article_ArticleIndex_ArticleCard__WEBPACK_IMPORTED_MODULE_24__.ArticleCard, {
          key: item.id,
          article: item
        });
      case 'subCategory':
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default().createElement(_Card_SubCategoryCard__WEBPACK_IMPORTED_MODULE_25__.SubCategoryCard, {
          key: item.id,
          subCategory: item
        });
      default:
        return '';
    }
  })));
};

/***/ }),

/***/ "./assets/styles/Blog/Recipe/recipeShow.css":
/*!**************************************************!*\
  !*** ./assets/styles/Blog/Recipe/recipeShow.css ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXNzZXRzX1VJX1Nob3dTdWJTZWN0aW9uc19QdWJsaWNhdGlvbl9Db21tZW50X2luZGV4X2pzeC1hc3NldHNfVUlfU2hvd1N1YlNlY3Rpb25zX1Nob3dMaW5rZWRJLWU4NTQ1ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBMEI7QUFFbkIsSUFBTUMsV0FBVyxHQUFHLFNBQWRBLFdBQVdBLENBQUFDLElBQUEsRUFBa0I7RUFBQSxJQUFiQyxPQUFPLEdBQUFELElBQUEsQ0FBUEMsT0FBTztFQUdoQyxvQkFDSUgsMERBQUE7SUFBSUssU0FBUyxFQUFDO0VBQTJCLGdCQUNyQ0wsMERBQUE7SUFBR0ssU0FBUyxFQUFDLHVCQUF1QjtJQUFDQyxJQUFJLEVBQUVILE9BQU8sQ0FBQ0k7RUFBTyxnQkFDdERQLDBEQUFBO0lBQUtLLFNBQVMsRUFBQztFQUEwQixnQkFDckNMLDBEQUFBO0lBQUtLLFNBQVMsRUFBQyxrQkFBa0I7SUFBQ0csR0FBRyxFQUFFTCxPQUFPLENBQUNNLE9BQU8sQ0FBQ0MsSUFBSztJQUFDQyxHQUFHLEVBQUVSLE9BQU8sQ0FBQ00sT0FBTyxDQUFDRTtFQUFJLEVBQUcsQ0FDdkYsQ0FDTixlQUNKWCwwREFBQTtJQUFLSyxTQUFTLEVBQUM7RUFBbUIsZ0JBQzlCTCwwREFBQTtJQUFJSyxTQUFTLEVBQUM7RUFBdUMsZ0JBQ2pETCwwREFBQTtJQUFHTSxJQUFJLEVBQUVILE9BQU8sQ0FBQ0k7RUFBTyxnQkFDcEJQLDBEQUFBLGVBQU9HLE9BQU8sQ0FBQ1MsS0FBSyxDQUFRLEVBRXhCVCxPQUFPLENBQUNVLFFBQVEsaUJBQUliLDBEQUFBO0lBQU1LLFNBQVMsRUFBQztFQUF1QixHQUFDLEtBQUcsRUFBQ0YsT0FBTyxDQUFDVSxRQUFRLENBQVEsQ0FFNUYsQ0FDSCxDQUNILENBQ0w7QUFFYixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeEJ5QjtBQUVuQixJQUFNQyxlQUFlLEdBQUcsU0FBbEJBLGVBQWVBLENBQUFaLElBQUEsRUFBc0I7RUFB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QUFDLENBQ0osQ0FFTSxDQUNUO0FBRWQsQ0FBQzs7Ozs7Ozs7Ozs7QUN6RUQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvQ29tcG9uZW50cy9CbG9nL0FydGljbGUvQXJ0aWNsZUluZGV4L0FydGljbGVDYXJkLmpzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvVUkvQ2FyZC9TdWJDYXRlZ29yeUNhcmQuanN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9VSS9TaG93U3ViU2VjdGlvbnMvUHVibGljYXRpb24vQ29tbWVudC9Db21tZW50Q2FyZC9Db21tZW50U3VtbWFyeS5qc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL1VJL1Nob3dTdWJTZWN0aW9ucy9QdWJsaWNhdGlvbi9Db21tZW50L0NvbW1lbnRDYXJkL2luZGV4LmpzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvVUkvU2hvd1N1YlNlY3Rpb25zL1B1YmxpY2F0aW9uL0NvbW1lbnQvQ29tbWVudENyZWF0ZS9Db21tZW50Rm9ybS9pbmRleC5qc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL1VJL1Nob3dTdWJTZWN0aW9ucy9QdWJsaWNhdGlvbi9Db21tZW50L0NvbW1lbnRDcmVhdGUvaW5kZXguanN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9VSS9TaG93U3ViU2VjdGlvbnMvUHVibGljYXRpb24vQ29tbWVudC9pbmRleC5qc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL1VJL1Nob3dTdWJTZWN0aW9ucy9TaG93TGlua2VkSXRlbXMvaW5kZXguanN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9zdHlsZXMvQmxvZy9SZWNpcGUvcmVjaXBlU2hvdy5jc3M/MTlkMiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5cclxuZXhwb3J0IGNvbnN0IEFydGljbGVDYXJkID0gKHthcnRpY2xlfSkgPT4ge1xyXG4gICAgXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8bGkgY2xhc3NOYW1lPVwicHJvZHVjdC1jYXJkIHR5cGUtYXJ0aWNsZVwiPlxyXG4gICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJwcm9kdWN0LWNhcmQtaW1nLWxpbmtcIiBocmVmPXthcnRpY2xlLnRhcmdldH0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2R1Y3QtY2FyZC1pbWctd3JhcHBlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwicHJvZHVjdC1jYXJkLWltZ1wiIHNyYz17YXJ0aWNsZS5waWN0dXJlLnBhdGh9IGFsdD17YXJ0aWNsZS5waWN0dXJlLmFsdH0gLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZHVjdC1jYXJkLWJvZHlcIj5cclxuICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJwcm9kdWN0LWNhcmQtdGl0bGUgYXJ0aWNsZS1jYXJkLXRpdGxlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj17YXJ0aWNsZS50YXJnZXR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj57YXJ0aWNsZS50aXRsZX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFydGljbGUuc3VidGl0bGUgJiYgPHNwYW4gY2xhc3NOYW1lPVwicHJvZHVjdC1jYXJkLXN1YnRpdGxlXCI+IC0ge2FydGljbGUuc3VidGl0bGV9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgPC9oMj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9saT5cclxuICAgIClcclxufSIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcblxyXG5leHBvcnQgY29uc3QgU3ViQ2F0ZWdvcnlDYXJkID0gKHtzdWJDYXRlZ29yeX0pID0+IHtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxsaSBjbGFzc05hbWU9XCJwcm9kdWN0LWNhcmQgdHlwZS1yZWNpcGVcIj5cclxuICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwicHJvZHVjdC1jYXJkLWltZy1saW5rXCIgaHJlZj17c3ViQ2F0ZWdvcnkudGFyZ2V0fT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZHVjdC1jYXJkLWltZy13cmFwcGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJwcm9kdWN0LWNhcmQtaW1nXCIgc3JjPXtzdWJDYXRlZ29yeS5zbWFsbFBpY3R1cmUucGF0aH0gYWx0PXtzdWJDYXRlZ29yeS5zbWFsbFBpY3R1cmUuYWx0fSAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9kdWN0LWNhcmQtYm9keVwiPlxyXG4gICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInByb2R1Y3QtY2FyZC10aXRsZVwiPjxhIGhyZWY9e3N1YkNhdGVnb3J5LnRhcmdldH0+e3N1YkNhdGVnb3J5Lm5hbWV9PC9hPjwvaDI+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvbGk+XHJcbiAgICApXHJcbn1cclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgTG9hZGVyIH0gZnJvbSAnLi4vLi4vLi4vLi4vSWNvbi9Mb2FkZXInO1xyXG5pbXBvcnQgeyBBbnN3ZXJDYXJkIH0gZnJvbSAnLi4vLi4vQW5zd2VyL0Fuc3dlckNhcmQnO1xyXG5pbXBvcnQgeyBJbXBvcnRhbnRBbnN3ZXIgfSBmcm9tICcuLi8uLi9BbnN3ZXIvSW1wb3J0YW50QW5zd2VyJztcclxuXHJcbmV4cG9ydCBjb25zdCBDb21tZW50U3VtbWFyeSA9ICh7Y29tbWVudCwgaXNMb2FkaW5nfSkgPT4ge1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1zdW1tYXJ5LWNhcmRcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZXZpZXctY2FyZC1oZWFkZXJcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmV2aWV3LWNhcmQtaW5mb3NcIj5cclxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj57Y29tbWVudC5mdWxsTmFtZX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+e2NvbW1lbnQuY3JlYXRlZEF0fTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZXZpZXctY2FyZC1ib2R5XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJldmlldy1jYXJkLWJvZHktY29udGVudFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIHtjb21tZW50LmNvbnRlbnR9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicWEtY2FyZC1ib3R0b21cIj5cclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBjb21tZW50LmZpcnN0QW5zd2Vycy5tYXAoYW5zd2VyID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgYW5zd2VyLnR5cGUgPT09ICdjdXN0b21lcidcclxuICAgICAgICAgICAgICAgICAgICAgICAgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFuc3dlckNhcmQga2V5PXthbnN3ZXIuaWR9IGFuc3dlcj17YW5zd2VyfSBpc1N1bW1hcnk9e3RydWV9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbXBvcnRhbnRBbnN3ZXIga2V5PXthbnN3ZXIuaWR9IGFuc3dlcj17YW5zd2VyfSBpc1N1bW1hcnk9e3RydWV9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgKSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBpc0xvYWRpbmcgJiYgPExvYWRlciAvPlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbW1lbnQucmVzdEFuc3dlcnMubWFwKGFuc3dlciA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFuc3dlci50eXBlID09PSAnY3VzdG9tZXInXHJcbiAgICAgICAgICAgICAgICAgICAgICAgID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBbnN3ZXJDYXJkIGtleT17YW5zd2VyLmlkfSBhbnN3ZXI9e2Fuc3dlcn0gaXNTdW1tYXJ5PXt0cnVlfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW1wb3J0YW50QW5zd2VyIGtleT17YW5zd2VyLmlkfSBhbnN3ZXI9e2Fuc3dlcn0gaXNTdW1tYXJ5PXt0cnVlfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICkpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59IiwiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgTG9hZGVyIH0gZnJvbSAnLi4vLi4vLi4vLi4vSWNvbi9Mb2FkZXInO1xyXG5pbXBvcnQgeyB1c2VPcGVuU3RhdGUgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9DdXN0b21Ib29rL3N0YXRlL3VzZU9wZW5TdGF0ZSc7XHJcbmltcG9ydCB7IEZvcm1CdXR0b24gfSBmcm9tICcuLi8uLi8uLi8uLi9Gb3JtL0Zvcm1CdXR0b24nO1xyXG5pbXBvcnQgeyBNb2RhbCB9IGZyb20gJy4uLy4uLy4uLy4uL0NvbnRhaW5lci9Nb2RhbCc7XHJcbmltcG9ydCB7IEV4cGFuZE1vcmVJY29uIH0gZnJvbSAnLi4vLi4vLi4vLi4vSWNvbi9FeHBhbmRNb3JlSWNvbic7XHJcbmltcG9ydCB7IEFuc3dlckNhcmQgfSBmcm9tICcuLi8uLi9BbnN3ZXIvQW5zd2VyQ2FyZCc7XHJcbmltcG9ydCB7IEFuc3dlckNyZWF0ZSB9IGZyb20gJy4uLy4uL0Fuc3dlci9BbnN3ZXJDcmVhdGUnO1xyXG5pbXBvcnQgeyBDb21tZW50U3VtbWFyeSB9IGZyb20gJy4vQ29tbWVudFN1bW1hcnknO1xyXG5pbXBvcnQgeyBJbXBvcnRhbnRBbnN3ZXIgfSBmcm9tICcuLi8uLi9BbnN3ZXIvSW1wb3J0YW50QW5zd2VyJztcclxuaW1wb3J0IHsgUHVibGljYXRpb25SZW1vdmVyIH0gZnJvbSAnLi4vLi4vUHVibGljYXRpb25SZW1vdmVyJztcclxuaW1wb3J0IHsgdXNlUmVtb3ZlciB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL0N1c3RvbUhvb2svcmVtb3Zlci91c2VSZW1vdmVyJztcclxuaW1wb3J0IHsgdXNlVHJhbnNsYXRpb24gfSBmcm9tICdyZWFjdC1pMThuZXh0JztcclxuXHJcbmV4cG9ydCBjb25zdCBDb21tZW50Q2FyZCA9ICh7b3duZXJUb3BDYXJkLCBjb21tZW50LCBkZWxldGVDb21tZW50LCBkZWxldGVBbnN3ZXIsIGNyZWF0ZUFuc3dlciwgZmV0Y2hPbmVGdWxsfSkgPT4ge1xyXG4gICAgY29uc3Qge3R9ID0gdXNlVHJhbnNsYXRpb24oJ21lc3NhZ2VzJyk7XHJcblxyXG4gICAgY29uc3QgW3Jlc3RJc09wZW4sIG9wZW5SZXN0LCBjbG9zZVJlc3RdID0gdXNlT3BlblN0YXRlKGZhbHNlKTtcclxuXHJcbiAgICBjb25zdCBbaXNMb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gICAgXHJcbiAgICBjb25zdCBmZXRjaEZ1bGxDb21tZW50ID0gYXN5bmMgKGZvcmNlID0gdHJ1ZSkgPT4ge1xyXG4gICAgICAgIHNldExvYWRpbmcodHJ1ZSk7XHJcbiAgICAgICAgYXdhaXQgZmV0Y2hPbmVGdWxsKGNvbW1lbnQuaWQsIGZvcmNlKTsgIC8vIGRhbnMgZmV0Y2hPbmVGdWxsLCBvbiBnw6hyZSBwb3VyIGZhaXJlIGwnYXBwZWwgcXVlIHNpIG7DqWNlc3NhaXJlIChzaSBmb3JjZSA9IHRydWUgYWxvcnMgbCdhcHBlbCBzZXJhIGZhaXQgZGFucyB0b3VzIGxlcyBjYXMpXHJcbiAgICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XHJcbiAgICB9XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBpZihyZXN0SXNPcGVuKSB7XHJcbiAgICAgICAgICAgIGZldGNoRnVsbENvbW1lbnQoZmFsc2UpO1xyXG4gICAgICAgIH1cclxuICAgIH0sIFtyZXN0SXNPcGVuXSk7XHJcblxyXG4gICAgLy9BbnN3ZXIgRk9STSAgXHJcbiAgICBjb25zdCBbZm9ybUlzT3Blbiwgb3BlbkZvcm0sIGNsb3NlRm9ybV0gPSB1c2VPcGVuU3RhdGUoZmFsc2UpO1xyXG5cclxuICAgIC8vc2kgb24gcmV2aWVudCBkZSBsb2dpbiBhdmVjICNjb21fYS17Y29tbWVudElkfSBkYW5zIGwndXJsIGFsb3JzIG9uIG91dnJlIGxlIGZvcm1cclxuICAgIC8vc2kgb24gYXJyaXZlIGQndW4gbGllbiBkYW5zIHVuIG1haWwgYXZlYyAjY2NoLXNob3cte2NvbW1lbnRJZH0gZGFucyBsJ3VybCBhbG9ycyBvbiBzY3JvbGwgc3VyIGNvbW1lbnRDYXJkXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGlmKGxvY2F0aW9uLmhyZWYuaW5jbHVkZXMoJyNjb21fYS0nK2NvbW1lbnQuaWQpKSB7XHJcbiAgICAgICAgICAgIG9wZW5Gb3JtKCk7XHJcbiAgICAgICAgfSBlbHNlIGlmIChsb2NhdGlvbi5ocmVmLmluY2x1ZGVzKCcjY2NoLXNob3ctJytjb21tZW50LmlkKSkge1xyXG4gICAgICAgICAgICBjb21tZW50Q2FyZFJlZi5jdXJyZW50LnNjcm9sbEludG9WaWV3KCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSwgW10pO1xyXG4gICAgY29uc3QgY29tbWVudENhcmRSZWYgPSB1c2VSZWYobnVsbCk7XHJcblxyXG4gICAgXHJcbiAgICAvL2RlbGV0ZSBjb21tZW50XHJcbiAgICBjb25zdCB7Y29uZmlybWF0aW9uSXNPcGVuLCBvcGVuQ29uZmlybWF0aW9uLCBjbG9zZUNvbmZpcm1hdGlvbiwgaXNSZW1vdmluZywgc2V0UmVtb3Zpbmd9ID0gdXNlUmVtb3ZlcigpO1xyXG5cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxsaSByZWY9e2NvbW1lbnRDYXJkUmVmfSBjbGFzc05hbWU9eydyZXZpZXctY2FyZCcgKyAoY29uZmlybWF0aW9uSXNPcGVuID8gJyByZW1vdmUtY29uZmlybSc6ICcnKSArIChpc1JlbW92aW5nID8gJyBpcy1yZW1vdmluZyc6ICcnKX0+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicWEtY2FyZC10b3BcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmV2aWV3LWNhcmQtaGVhZGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZXZpZXctY2FyZC1pbmZvc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj57Y29tbWVudC5mdWxsTmFtZX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPntjb21tZW50LmNyZWF0ZWRBdH08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmV2aWV3LWNhcmQtYm9keVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmV2aWV3LWNhcmQtYm9keS1jb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtjb21tZW50LmNvbnRlbnR9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb21tZW50LmNhblJlbW92ZSAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UHVibGljYXRpb25SZW1vdmVyIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlbGV0ZVB1YmxpY2F0aW9uPXsoKSA9PiBkZWxldGVDb21tZW50KGNvbW1lbnQuaWQpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbmZpcm1hdGlvbklzT3Blbj17Y29uZmlybWF0aW9uSXNPcGVufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wZW5Db25maXJtYXRpb249e29wZW5Db25maXJtYXRpb259XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xvc2VDb25maXJtYXRpb249e2Nsb3NlQ29uZmlybWF0aW9ufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzUmVtb3Zpbmc9e2lzUmVtb3Zpbmd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0UmVtb3Zpbmc9e3NldFJlbW92aW5nfSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInFhLWNhcmQtYm90dG9tXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlc3QtbGlzdCBxYS1jYXJkLWJvdHRvbS1jb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgIXJlc3RJc09wZW4gJiYgY29tbWVudC5maXJzdEFuc3dlcnMubGVuZ3RoID4gMCAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbW1lbnQuZmlyc3RBbnN3ZXJzLm1hcChhbnN3ZXIgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYW5zd2VyLnR5cGUgPT09ICdjdXN0b21lcicgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBbnN3ZXJDYXJkIGtleT17YW5zd2VyLmlkfSBvd25lcklkPXtjb21tZW50LmlkfSBhbnN3ZXI9e2Fuc3dlcn0gZGVsZXRlQW5zd2VyPXtkZWxldGVBbnN3ZXJ9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEltcG9ydGFudEFuc3dlciBrZXk9e2Fuc3dlci5pZH0gb3duZXJJZD17Y29tbWVudC5pZH0gYW5zd2VyPXthbnN3ZXJ9IGRlbGV0ZUFuc3dlcj17ZGVsZXRlQW5zd2VyfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApKVxyXG4gICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzdElzT3BlbiAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgWy4uLmNvbW1lbnQuZmlyc3RBbnN3ZXJzLCAuLi5jb21tZW50LnJlc3RBbnN3ZXJzXS5tYXAoYW5zd2VyID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYW5zd2VyLnR5cGUgPT09ICdjdXN0b21lcicgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QW5zd2VyQ2FyZCBrZXk9e2Fuc3dlci5pZH0gb3duZXJJZD17Y29tbWVudC5pZH0gYW5zd2VyPXthbnN3ZXJ9IGRlbGV0ZUFuc3dlcj17ZGVsZXRlQW5zd2VyfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW1wb3J0YW50QW5zd2VyIGtleT17YW5zd2VyLmlkfSBvd25lcklkPXtjb21tZW50LmlkfSBhbnN3ZXI9e2Fuc3dlcn0gZGVsZXRlQW5zd2VyPXtkZWxldGVBbnN3ZXJ9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc0xvYWRpbmcgJiYgPExvYWRlciBhZGRpdGlvbmFsQ2xhc3M9XCJyaWdodC1sb2FkZXJcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAhcmVzdElzT3BlbiAmJiBjb21tZW50LmNvdW50UmVzdEFuc3dlcnMgPiAwICYmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJxYS1jYXJkLWluZm8gcWEtY2FyZC1idXR0b24gaS10ZXh0XCIgdHlwZT1cImJ1dHRvblwiIG9uQ2xpY2s9e29wZW5SZXN0fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxFeHBhbmRNb3JlSWNvbiBhZGRpdGlvbmFsQ2xhc3M9XCJpY29uXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPnt0KCdjb3VudC5zZWVfcmVzdF9hbnN3ZXJzJywge2NvdW50OiBjb21tZW50LmNvdW50UmVzdEFuc3dlcnN9KX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICByZXN0SXNPcGVuICYmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJxYS1jYXJkLWluZm8gcWEtY2FyZC1idXR0b24gaS10ZXh0XCIgdHlwZT1cImJ1dHRvblwiIG9uQ2xpY2s9e2Nsb3NlUmVzdH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RXhwYW5kTW9yZUljb24gYWRkaXRpb25hbENsYXNzPVwiaWNvbiBleHBhbmRlZFwiLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPnt0KCdzZWVfbGVzcycpfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJxYS1jYXJkLWZvb3RlclwiPlxyXG4gICAgICAgICAgICAgICAgPE1vZGFsIGFkZGl0aW9uYWxDbGFzcz1cImNvbW1lbnQtZm9ybS1tb2RhbCBhbnN3ZXItZm9ybS1tb2RhbCBjZW50ZXItZm9ybS1tb2RhbFwiIGlzT3Blbj17Zm9ybUlzT3Blbn0gY2xvc2U9e2Nsb3NlRm9ybX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPEFuc3dlckNyZWF0ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvd25lcklkPXtjb21tZW50LmlkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjcmVhdGVBbnN3ZXI9e2NyZWF0ZUFuc3dlcn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb3duZXJUb3BDYXJkPXtvd25lclRvcENhcmR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZldGNoQWZ0ZXJTdWJtaXRTdWNjZXNzPXtmZXRjaEZ1bGxDb21tZW50fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbG9zZT17Y2xvc2VGb3JtfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxDb21tZW50U3VtbWFyeSBjb21tZW50PXtjb21tZW50fSBpc0xvYWRpbmc9e2lzTG9hZGluZ30gLz5cclxuICAgICAgICAgICAgICAgICAgICA8L0Fuc3dlckNyZWF0ZT5cclxuICAgICAgICAgICAgICAgIDwvTW9kYWw+XHJcbiAgICAgICAgICAgICAgICA8Rm9ybUJ1dHRvbiBvbkNsaWNrPXtvcGVuRm9ybX0gYWRkaXRpb25hbENsYXNzPVwiYm9yZGVhdXgtZ3JleSBjcmVhdGUtZm9ybS1zbWFsbC1idXR0b25cIj5cclxuICAgICAgICAgICAgICAgICAgICB7dCgnc3VibWl0LmFuc3dlcicpfVxyXG4gICAgICAgICAgICAgICAgPC9Gb3JtQnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2xpPlxyXG4gICAgKVxyXG59XHJcblxyXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlQ29udGV4dCwgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgdXNlRm9ybVdpdGhWYWxpZGF0aW9uIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vLi4vQ3VzdG9tSG9vay9mb3JtL3VzZUZvcm1XaXRoVmFsaWRhdGlvbic7XHJcbmltcG9ydCAqIGFzIHl1cCBmcm9tIFwieXVwXCJcclxuaW1wb3J0IHsgRm9ybUJ1dHRvbiB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL0Zvcm0vRm9ybUJ1dHRvbic7XHJcbmltcG9ydCB7IENoZWNrSWNvbiB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL0ljb24vQ2hlY2tJY29uJztcclxuaW1wb3J0IHsgVGV4dEZpZWxkIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vRm9ybS9UZXh0RmllbGQnO1xyXG5pbXBvcnQgeyBTZXRTdWJtaXRJbmZvQ29udGV4dCB9IGZyb20gJy4uLy4uLy4uLy4uLy4uLy4uL0NvbnRleHQvU2hvd1N1YlNlY3Rpb25zQ29udGV4dCc7XHJcbmltcG9ydCB7IEFwaUVycm9yIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vLi4vZnVuY3Rpb25zL2FwaSc7XHJcbmltcG9ydCB7IHQgfSBmcm9tICdpMThuZXh0JztcclxuaW1wb3J0IHsgdXNlVHJhbnNsYXRpb24gfSBmcm9tICdyZWFjdC1pMThuZXh0JztcclxuXHJcblxyXG5jb25zdCBzY2hlbWEgPSB5dXBcclxuICAub2JqZWN0KHtcclxuICAgIGNvbnRlbnQ6IHl1cC5zdHJpbmcoKS5tYXgoNTAwLCB0KCdhc3NlcnQubGVuZ3RoLm1heCcsIHtuczogJ2NvbnN0cmFpbnRzJywgbWF4OiA1MDB9KSkucmVxdWlyZWQoKSxcclxuICAgIGFncmVlVGVybXM6IHl1cC5ib29sKCkuaXNUcnVlKHQoJ2Fzc2VydC5jaGVja2JveC50cnVlJywge25zOiAnY29uc3RyYWludHMnfSkpLnJlcXVpcmVkKClcclxuICB9KVxyXG4gIC5yZXF1aXJlZCgpXHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IENvbW1lbnRGb3JtID0gKHtjcmVhdGVDb21tZW50LCBjbG9zZX0pID0+IHtcclxuICAgIGNvbnN0IHt0fSA9IHVzZVRyYW5zbGF0aW9uKCdtZXNzYWdlcycpO1xyXG5cclxuICAgIGNvbnN0IHsgcmVnaXN0ZXIsIGhhbmRsZVN1Ym1pdCwgZXJyb3JzLCBpc1N1Ym1pdHRpbmcsIGNvbnRyb2wsIHNldEVycm9yLCBzZXRWYWx1ZSB9ID0gdXNlRm9ybVdpdGhWYWxpZGF0aW9uKHNjaGVtYSwge1xyXG4gICAgICAgIGNvbnRlbnQ6ICcnLFxyXG4gICAgICAgIGFncmVlVGVybXM6IGZhbHNlXHJcbiAgICB9KTtcclxuXHJcbiAgICBjb25zdCBzZXRTdWJtaXRJbmZvID0gdXNlQ29udGV4dChTZXRTdWJtaXRJbmZvQ29udGV4dCk7XHJcbiAgICBjb25zdCBbaXNMb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgICBjb25zdCBvblN1Ym1pdCA9IGFzeW5jIGZvcm1EYXRhID0+IHtcclxuICAgICAgICBpZihpc0xvYWRpbmcpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBzZXRMb2FkaW5nKHRydWUpO1xyXG5cclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBhd2FpdCBjcmVhdGVDb21tZW50KGZvcm1EYXRhKTtcclxuICAgICAgICAgICAgc2V0U3VibWl0SW5mbyh7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiAnc3VjY2VzcycsXHJcbiAgICAgICAgICAgICAgICBtZXNzYWdlOiB0KCdzdWNjZXNzLnN1Ym1pdC5jb21tZW50JylcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGNsb3NlKCk7XHJcbiAgICAgICAgfSBjYXRjaChlKSB7XHJcbiAgICAgICAgICAgIGlmKGUgaW5zdGFuY2VvZiBBcGlFcnJvcikge1xyXG4gICAgICAgICAgICAgICAgT2JqZWN0LmVudHJpZXMoZS5lcnJvcnMpLmZvckVhY2goKFtmaWVsZCwgbWVzc2FnZV0pID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBzZXRFcnJvcihmaWVsZCwge3R5cGU6ICdjdXN0b20nLCBtZXNzYWdlOiBtZXNzYWdlfSk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHNldFN1Ym1pdEluZm8oe1xyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6ICdkYW5nZXInLFxyXG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IHQoJ2Vycm9yLnRlbXBvcmFyeV9mYWlsdXJlJylcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdChvblN1Ym1pdCl9IGNsYXNzTmFtZT1cInJldmlldy1mb3JtIGJveC1mb3JtXCI+XHJcblxyXG4gICAgICAgICAgICA8VGV4dEZpZWxkIHR5cGU9XCJ0ZXh0YXJlYVwiIGNvbnRyb2w9e2NvbnRyb2x9IG5hbWU9XCJjb250ZW50XCIgZXJyb3I9e2Vycm9ycy5jb250ZW50Py5tZXNzYWdlfSBtYXhMZW5ndGg9ezUwMH0+XHJcbiAgICAgICAgICAgICAgICB7dCgnY29tbWVudCcpfSAqXHJcbiAgICAgICAgICAgIDwvVGV4dEZpZWxkPlxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9eydjaGVja2JveC1ncm91cCcgKyAoZXJyb3JzLmFncmVlVGVybXMgPyAnIGlzLWludmFsaWQnOiAnJyl9PlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IHsuLi5yZWdpc3RlcignYWdyZWVUZXJtcycpfSBjbGFzc05hbWU9XCJmb3JtLWNoZWNrYm94XCIgaWQ9XCJhZ3JlZVRlcm1zXCIgdHlwZT1cImNoZWNrYm94XCIgLz5cclxuICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiYWdyZWVUZXJtc1wiIGNsYXNzTmFtZT1cImZvcm0tbGFiZWxcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImN1c3RvbS1jaGVja2JveFwiIHJvbGU9XCJjaGVja2JveFwiIGFyaWEtbGFiZWxsZWRieT1cImNoZWNrYm94LWxhYmVsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxDaGVja0ljb24gLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBpZD1cImNoZWNrYm94LWxhYmVsXCI+e3QoJ2FncmVlX3Rlcm1zX29mX3VzZScpfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgZXJyb3JzLmFncmVlVGVybXMgJiYgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWVycm9yXCI+e2Vycm9ycy5hZ3JlZVRlcm1zLm1lc3NhZ2V9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN1Ym1pdC1ncm91cCBkb3VibGVcIj5cclxuICAgICAgICAgICAgICAgIDxGb3JtQnV0dG9uIGFkZGl0aW9uYWxDbGFzcz1cImJvcmRlYXV4XCIgbG9hZGluZz17aXNMb2FkaW5nIHx8IGlzU3VibWl0dGluZ30+e3QoJ3N1Ym1pdC5wdWJsaXNoJyl9PC9Gb3JtQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPEZvcm1CdXR0b24gYWRkaXRpb25hbENsYXNzPVwiY2FuY2VsXCIgZGlzYWJsZWQ9e2lzTG9hZGluZyB8fCBpc1N1Ym1pdHRpbmd9IG9uQ2xpY2s9e2Nsb3NlfT57dCgnY2FuY2VsJyl9PC9Gb3JtQnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Zvcm0+XHJcbiAgICApXHJcbn0iLCJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyByZWRpcmVjdFRvTG9naW4gfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9mdW5jdGlvbnMvc2VjdXJpdHknO1xyXG5pbXBvcnQgeyBDb21tZW50Rm9ybSB9IGZyb20gJy4vQ29tbWVudEZvcm0nO1xyXG5pbXBvcnQgeyB1c2VHZXRVc2VyIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vQ3VzdG9tSG9vay91c2VHZXRVc2VyJztcclxuaW1wb3J0IHsgdXNlVHJhbnNsYXRpb24gfSBmcm9tICdyZWFjdC1pMThuZXh0JztcclxuXHJcblxyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBDb21tZW50Q3JlYXRlID0gKHtvd25lclRvcENhcmQsIGNyZWF0ZUNvbW1lbnQsIGNsb3NlfSkgPT4ge1xyXG4gICAgY29uc3Qge3R9ID0gdXNlVHJhbnNsYXRpb24oJ21lc3NhZ2VzJyk7XHJcblxyXG4gICAgLy9vbiB2w6lyaWZpZSBxdSd1biB1c2VyIGVzdCBjb25uZWN0w6lcclxuICAgIGNvbnN0IHt1c2VyLCB1cGRhdGVVc2VyfSA9IHVzZUdldFVzZXIoKTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGlmKHVzZXIgPT09IGZhbHNlKSB7XHJcbiAgICAgICAgICAgIHJlZGlyZWN0VG9Mb2dpbihcclxuICAgICAgICAgICAgICAgIGxvY2F0aW9uLmhyZWYgKyAnI2NvbW1lbnQnLCAvL3RhcmdldFBhdGhcclxuICAgICAgICAgICAgICAgIHQoJ3dhcm5pbmcubmVlZF9sb2dpbl90b19wb3N0X2NvbW1lbnQnKSwgLy9tZXNzYWdlXHJcbiAgICAgICAgICAgICAgICBjbG9zZSgpICAvL29uRXJyb3Igb24gZmVybWVcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9XHJcbiAgICB9LCBbdXNlcl0pO1xyXG4gICAgXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICB1c2VyICYmIChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZXZpZXctZm9ybS13cmFwcGVyXCI+XHJcbiAgICAgICAgICAgICAgICB7b3duZXJUb3BDYXJkfVxyXG4gICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInJldmlldy1mb3JtLXRpdGxlXCI+e3QoJ215X2NvbW1lbnQnKX08L2gzPlxyXG4gICAgICAgICAgICAgICAgPENvbW1lbnRGb3JtIGNyZWF0ZUNvbW1lbnQ9e2NyZWF0ZUNvbW1lbnR9IGNsb3NlPXtjbG9zZX0gLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKVxyXG4gICAgKVxyXG59IiwiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgdXNlT3BlblN0YXRlIH0gZnJvbSAnLi4vLi4vLi4vLi4vQ3VzdG9tSG9vay9zdGF0ZS91c2VPcGVuU3RhdGUnO1xyXG5pbXBvcnQgeyBTZWFyY2hSZXN1bHRzIH0gZnJvbSAnLi4vLi4vLi4vU2VhcmNoL1NlYXJjaFJlc3VsdHMnO1xyXG5pbXBvcnQgeyBGb3JtQnV0dG9uIH0gZnJvbSAnLi4vLi4vLi4vRm9ybS9Gb3JtQnV0dG9uJztcclxuaW1wb3J0IHsgTW9kYWwgfSBmcm9tICcuLi8uLi8uLi9Db250YWluZXIvTW9kYWwnO1xyXG5pbXBvcnQgeyBMYW5nRmlsdGVyIH0gZnJvbSAnLi4vLi4vLi4vU2VhcmNoL0xhbmdGaWx0ZXInO1xyXG5pbXBvcnQgeyBDb21tZW50Q3JlYXRlIH0gZnJvbSAnLi9Db21tZW50Q3JlYXRlJztcclxuaW1wb3J0IHsgQ29tbWVudENhcmQgfSBmcm9tICcuL0NvbW1lbnRDYXJkJztcclxuaW1wb3J0IGkxOG4gZnJvbSAnLi4vLi4vLi4vLi4vZW50cnlwb2ludHMvaTE4bic7XHJcbmltcG9ydCB7IHVzZVB1YmxpY2F0aW9uQ1JVRCB9IGZyb20gJy4uLy4uLy4uLy4uL0N1c3RvbUhvb2svcHVibGljYXRpb24vdXNlUHVibGljYXRpb25DUlVEJztcclxuaW1wb3J0IHsgdCB9IGZyb20gJ2kxOG5leHQnO1xyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBDb21tZW50ID0gKHtvd25lclRvcENhcmQsIGZldGNoQWxsRW50cnlwb2ludCwgZmV0Y2hPbmVGdWxsRW50cnlwb2ludCwgY3JlYXRlRW50cnlwb2ludH0pID0+IHtcclxuXHJcbiAgICBjb25zdCBbZmlsdGVycywgc2V0RmlsdGVyc10gPSB1c2VTdGF0ZSh7XHJcbiAgICAgICAgcGFnZTogMSxcclxuICAgICAgICBsaW1pdDogMTAsXHJcbiAgICAgICAgbGFuZzogJydcclxuICAgIH0pO1xyXG5cclxuICAgIGNvbnN0IHNldEZpbHRlclZhbHVlID0gKGtleSwgdmFsdWUpID0+IHtcclxuICAgICAgICBzZXRGaWx0ZXJzKGZpbHRlcnMgPT4gKHtcclxuICAgICAgICAgICAgLi4uZmlsdGVycyxcclxuICAgICAgICAgICAgW2tleV06IHZhbHVlLFxyXG4gICAgICAgICAgICBwYWdlOiAxIC8vIHF1YW5kIG9uIGNoYW5nZSB1biBmaWx0cmUgb24gZG9pdCByZW1ldHRyZSBsYSBwYWdlIHN5c3TDqW1hdGlxdWVtZW50IMOgIDFcclxuICAgICAgICB9KSk7XHJcbiAgICB9O1xyXG5cclxuICAgICAvL29uIHJlbmRlckNoYW5nZVxyXG4gICAgIGNvbnN0IGNvbnRyb2xzUmVmID0gdXNlUmVmKG51bGwpO1xyXG4gICAgIGNvbnN0IHNjcm9sbFRvQ29udHJvbHMgPSAoKSA9PiB7XHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHkgPSBjb250cm9sc1JlZi5jdXJyZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnk7XHJcbiAgICAgICAgICAgIHdpbmRvdy5zY3JvbGxCeSgwLCB5IC0gKHdpbmRvdy5pbm5lckhlaWdodCAvIDQpKTtcclxuICAgICAgICB9LCAwKTtcclxuICAgICB9O1xyXG4gICAgXHJcbiAgICBjb25zdCB7XHJcbiAgICAgICAgcmVzdWx0LCBcclxuICAgICAgICBmZXRjaE9uZUZ1bGwsXHJcbiAgICAgICAgY3JlYXRlSXRlbSxcclxuICAgICAgICBjcmVhdGVBbnN3ZXIsXHJcbiAgICAgICAgZGVsZXRlSXRlbSxcclxuICAgICAgICBkZWxldGVBbnN3ZXIsXHJcbiAgICAgICAgaXNMb2FkaW5nLCBcclxuICAgICAgICBoYW5kbGVQYWdlQ2hhbmdlLFxyXG4gICAgICAgIGhhc0NvbnRyb2xzXHJcbiAgICB9ID0gdXNlUHVibGljYXRpb25DUlVEKFxyXG4gICAgICAgIGZldGNoQWxsRW50cnlwb2ludCxcclxuICAgICAgICBmZXRjaE9uZUZ1bGxFbnRyeXBvaW50LFxyXG4gICAgICAgICcvJytpMThuLmxhbmd1YWdlKycvYXBpL2NvbW1lbnQvZGVsZXRlJyxcclxuICAgICAgICBjcmVhdGVFbnRyeXBvaW50LFxyXG4gICAgICAgICcvJytpMThuLmxhbmd1YWdlKycvYXBpL2Fuc3dlci9jcmVhdGUvY29tbWVudCcsXHJcbiAgICAgICAgZmlsdGVycyxcclxuICAgICAgICBzZXRGaWx0ZXJzLFxyXG4gICAgICAgIHNjcm9sbFRvQ29udHJvbHNcclxuICAgICk7XHJcblxyXG5cclxuICAgIC8vQ29tbWVudCBGT1JNICBcclxuICAgIGNvbnN0IFtmb3JtSXNPcGVuLCBvcGVuRm9ybSwgY2xvc2VGb3JtXSA9IHVzZU9wZW5TdGF0ZShmYWxzZSk7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBpZihsb2NhdGlvbi5ocmVmLmluY2x1ZGVzKCcjY29tbWVudCcpKSB7XHJcbiAgICAgICAgICAgIG9wZW5Gb3JtKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSwgW10pO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaGFzQ29udHJvbHMgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgcmVmPXtjb250cm9sc1JlZn0gY2xhc3NOYW1lPVwicXVlc3Rpb25BbnN3ZXItY29udHJvbHNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZXZpZXctc3ViLWNvbnRyb2xzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGFuZ0ZpbHRlciBpZD1cImNvbW1lbnQtbGFuZ1wiIGxhbmc9e2ZpbHRlcnMubGFuZ30gb25DaGFuZ2U9e3NldEZpbHRlclZhbHVlfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA8U2VhcmNoUmVzdWx0cyBcclxuICAgICAgICAgICAgICAgIGlzTG9hZGluZz17aXNMb2FkaW5nfVxyXG4gICAgICAgICAgICAgICAgcmVzdWx0PXtyZXN1bHR9XHJcbiAgICAgICAgICAgICAgICBwYWdlQ2hhbmdlPXtoYW5kbGVQYWdlQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdCAmJiByZXN1bHQuaXRlbXMubWFwKGNvbW1lbnQgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Q29tbWVudENhcmQgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2NvbW1lbnQuaWR9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tbWVudD17Y29tbWVudH0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWxldGVDb21tZW50PXtkZWxldGVJdGVtfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3JlYXRlQW5zd2VyPXtjcmVhdGVBbnN3ZXJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWxldGVBbnN3ZXI9e2RlbGV0ZUFuc3dlcn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZldGNoT25lRnVsbD17ZmV0Y2hPbmVGdWxsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3duZXJUb3BDYXJkPXtvd25lclRvcENhcmR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgKSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgPC9TZWFyY2hSZXN1bHRzPlxyXG5cclxuICAgICAgICAgICAgPE1vZGFsIGFkZGl0aW9uYWxDbGFzcz1cInJldmlldy1mb3JtLW1vZGFsIGNlbnRlci1mb3JtLW1vZGFsXCIgaXNPcGVuPXtmb3JtSXNPcGVufSBjbG9zZT17Y2xvc2VGb3JtfT5cclxuICAgICAgICAgICAgICAgIDxDb21tZW50Q3JlYXRlIFxyXG4gICAgICAgICAgICAgICAgICAgIGNyZWF0ZUNvbW1lbnQ9e2NyZWF0ZUl0ZW19XHJcbiAgICAgICAgICAgICAgICAgICAgY2xvc2U9e2Nsb3NlRm9ybX0gXHJcbiAgICAgICAgICAgICAgICAgICAgb3duZXJUb3BDYXJkPXtvd25lclRvcENhcmR9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L01vZGFsPlxyXG4gICAgICAgICAgICA8Rm9ybUJ1dHRvbiBhZGRpdGlvbmFsQ2xhc3M9XCJib3JkZWF1eC1ibGFjayBvdXRsaW5lIGNyZWF0ZS1mb3JtLWJ1dHRvblwiIG9uQ2xpY2s9e29wZW5Gb3JtfT5cclxuICAgICAgICAgICAgICAgIHt0KCdwb3N0X2FfY29tbWVudCcsIHtuczogJ21lc3NhZ2VzJ30pfVxyXG4gICAgICAgICAgICA8L0Zvcm1CdXR0b24+XHJcbiAgICAgICAgPC8+XHJcbiAgICApXHJcbn0iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBQcm9kdWN0Q2FyZCB9IGZyb20gJy4uLy4uLy4uL0NvbXBvbmVudHMvU2hvcC9Qcm9kdWN0SW5kZXgvUHJvZHVjdENhcmQnO1xyXG5pbXBvcnQgeyB1c2VGZXRjaCB9IGZyb20gJy4uLy4uLy4uL0N1c3RvbUhvb2svZmV0Y2gvdXNlRmV0Y2gnO1xyXG5pbXBvcnQgeyBMb2FkZXIgfSBmcm9tICcuLi8uLi9JY29uL0xvYWRlcic7XHJcbmltcG9ydCB7IENhcm91c2VsIH0gZnJvbSAnLi4vLi4vQ2Fyb3VzZWwnO1xyXG5pbXBvcnQgeyBDYXJvdXNlbFJlc3BvbnNpdmVSdWxlcyB9IGZyb20gJy4uLy4uLy4uL1NlcnZpY2UvQ2Fyb3VzZWxSZXNwb25zaXZlUnVsZXMnO1xyXG5pbXBvcnQgeyBSZWNpcGVDYXJkIH0gZnJvbSAnLi4vLi4vLi4vQ29tcG9uZW50cy9CbG9nL1JlY2lwZS9SZWNpcGVJbmRleC9SZWNpcGVDYXJkJztcclxuaW1wb3J0IHsgQXJ0aWNsZUNhcmQgfSBmcm9tICcuLi8uLi8uLi9Db21wb25lbnRzL0Jsb2cvQXJ0aWNsZS9BcnRpY2xlSW5kZXgvQXJ0aWNsZUNhcmQnO1xyXG5pbXBvcnQgeyBTdWJDYXRlZ29yeUNhcmQgfSBmcm9tICcuLi8uLi9DYXJkL1N1YkNhdGVnb3J5Q2FyZCc7XHJcblxyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBTaG93TGlua2VkSXRlbXMgPSAoe2VudHJ5cG9pbnR9KSA9PiB7XHJcblxyXG4gICAgY29uc3QgW2l0ZW1zLCBpc0xvYWRpbmcsIGVycm9yc10gPSB1c2VGZXRjaChlbnRyeXBvaW50KTtcclxuXHJcbiAgICBjb25zdCByZXNwb25zaXZlID0gbmV3IENhcm91c2VsUmVzcG9uc2l2ZVJ1bGVzKHtcclxuICAgICAgICAwOiB7XHJcbiAgICAgICAgICAgIDA6IHtcclxuICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMixcclxuICAgICAgICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAxXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIDUwMDoge1xyXG4gICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAzLFxyXG4gICAgICAgICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDFcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgNzUwOiB7XHJcbiAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDQsXHJcbiAgICAgICAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogMVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAxMDYwOiB7XHJcbiAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDUsXHJcbiAgICAgICAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogMVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAxNTAwOiB7XHJcbiAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDYsXHJcbiAgICAgICAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogMVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbiAgXHJcblxyXG4gICAgaWYoZXJyb3JzKSB7XHJcbiAgICAgICAgcmV0dXJuICcnO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdWdnZXN0ZWRQcm9kdWN0cy13cmFwcGVyXCI+XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGlzTG9hZGluZyAmJiA8TG9hZGVyIGFkZGl0aW9uYWxDbGFzcz1cIm1haW4tbG9hZGVyXCIgLz5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA8Q2Fyb3VzZWwgY2xhc3NOYW1lPVwibGlua2VkLXByb2R1Y3RzLWNhcm91c2VsXCIgaXRlbXM9e2l0ZW1zfSByZXNwb25zaXZlPXtyZXNwb25zaXZlfT5cclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaXRlbXMgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgIGl0ZW1zLm1hcChpdGVtID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3dpdGNoKGl0ZW0udHlwZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAncHJvZHVjdCc6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxQcm9kdWN0Q2FyZCBrZXk9e2l0ZW0uaWR9IHByb2R1Y3Q9e2l0ZW19IC8+O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAncmVjaXBlJzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gPFJlY2lwZUNhcmQga2V5PXtpdGVtLmlkfSByZWNpcGU9e2l0ZW19ICAgLz47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlICdhcnRpY2xlJzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gPEFydGljbGVDYXJkIGtleT17aXRlbS5pZH0gYXJ0aWNsZT17aXRlbX0gLz47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlICdzdWJDYXRlZ29yeSc6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxTdWJDYXRlZ29yeUNhcmQga2V5PXtpdGVtLmlkfSBzdWJDYXRlZ29yeT17aXRlbX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuICcnOyAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIDwvQ2Fyb3VzZWw+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn0iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiXSwibmFtZXMiOlsiUmVhY3QiLCJBcnRpY2xlQ2FyZCIsIl9yZWYiLCJhcnRpY2xlIiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTmFtZSIsImhyZWYiLCJ0YXJnZXQiLCJzcmMiLCJwaWN0dXJlIiwicGF0aCIsImFsdCIsInRpdGxlIiwic3VidGl0bGUiLCJTdWJDYXRlZ29yeUNhcmQiLCJzdWJDYXRlZ29yeSIsInNtYWxsUGljdHVyZSIsIm5hbWUiLCJMb2FkZXIiLCJBbnN3ZXJDYXJkIiwiSW1wb3J0YW50QW5zd2VyIiwiQ29tbWVudFN1bW1hcnkiLCJjb21tZW50IiwiaXNMb2FkaW5nIiwiZnVsbE5hbWUiLCJjcmVhdGVkQXQiLCJjb250ZW50IiwiZmlyc3RBbnN3ZXJzIiwibWFwIiwiYW5zd2VyIiwidHlwZSIsImtleSIsImlkIiwiaXNTdW1tYXJ5IiwicmVzdEFuc3dlcnMiLCJfcmVnZW5lcmF0b3JSdW50aW1lIiwiZXhwb3J0cyIsIk9wIiwiT2JqZWN0IiwicHJvdG90eXBlIiwiaGFzT3duIiwiaGFzT3duUHJvcGVydHkiLCJkZWZpbmVQcm9wZXJ0eSIsIm9iaiIsImRlc2MiLCJ2YWx1ZSIsIiRTeW1ib2wiLCJTeW1ib2wiLCJpdGVyYXRvclN5bWJvbCIsIml0ZXJhdG9yIiwiYXN5bmNJdGVyYXRvclN5bWJvbCIsImFzeW5jSXRlcmF0b3IiLCJ0b1N0cmluZ1RhZ1N5bWJvbCIsInRvU3RyaW5nVGFnIiwiZGVmaW5lIiwiZW51bWVyYWJsZSIsImNvbmZpZ3VyYWJsZSIsIndyaXRhYmxlIiwiZXJyIiwid3JhcCIsImlubmVyRm4iLCJvdXRlckZuIiwic2VsZiIsInRyeUxvY3NMaXN0IiwicHJvdG9HZW5lcmF0b3IiLCJHZW5lcmF0b3IiLCJnZW5lcmF0b3IiLCJjcmVhdGUiLCJjb250ZXh0IiwiQ29udGV4dCIsIm1ha2VJbnZva2VNZXRob2QiLCJ0cnlDYXRjaCIsImZuIiwiYXJnIiwiY2FsbCIsIkNvbnRpbnVlU2VudGluZWwiLCJHZW5lcmF0b3JGdW5jdGlvbiIsIkdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlIiwiSXRlcmF0b3JQcm90b3R5cGUiLCJnZXRQcm90byIsImdldFByb3RvdHlwZU9mIiwiTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUiLCJ2YWx1ZXMiLCJHcCIsImRlZmluZUl0ZXJhdG9yTWV0aG9kcyIsImZvckVhY2giLCJtZXRob2QiLCJfaW52b2tlIiwiQXN5bmNJdGVyYXRvciIsIlByb21pc2VJbXBsIiwiaW52b2tlIiwicmVzb2x2ZSIsInJlamVjdCIsInJlY29yZCIsInJlc3VsdCIsIl90eXBlb2YiLCJfX2F3YWl0IiwidGhlbiIsInVud3JhcHBlZCIsImVycm9yIiwicHJldmlvdXNQcm9taXNlIiwiY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmciLCJzdGF0ZSIsIkVycm9yIiwiZG9uZVJlc3VsdCIsImRlbGVnYXRlIiwiZGVsZWdhdGVSZXN1bHQiLCJtYXliZUludm9rZURlbGVnYXRlIiwic2VudCIsIl9zZW50IiwiZGlzcGF0Y2hFeGNlcHRpb24iLCJhYnJ1cHQiLCJkb25lIiwibWV0aG9kTmFtZSIsInVuZGVmaW5lZCIsIlR5cGVFcnJvciIsImluZm8iLCJyZXN1bHROYW1lIiwibmV4dCIsIm5leHRMb2MiLCJwdXNoVHJ5RW50cnkiLCJsb2NzIiwiZW50cnkiLCJ0cnlMb2MiLCJjYXRjaExvYyIsImZpbmFsbHlMb2MiLCJhZnRlckxvYyIsInRyeUVudHJpZXMiLCJwdXNoIiwicmVzZXRUcnlFbnRyeSIsImNvbXBsZXRpb24iLCJyZXNldCIsIml0ZXJhYmxlIiwiaXRlcmF0b3JNZXRob2QiLCJpc05hTiIsImxlbmd0aCIsImkiLCJkaXNwbGF5TmFtZSIsImlzR2VuZXJhdG9yRnVuY3Rpb24iLCJnZW5GdW4iLCJjdG9yIiwiY29uc3RydWN0b3IiLCJtYXJrIiwic2V0UHJvdG90eXBlT2YiLCJfX3Byb3RvX18iLCJhd3JhcCIsImFzeW5jIiwiUHJvbWlzZSIsIml0ZXIiLCJrZXlzIiwidmFsIiwib2JqZWN0IiwicmV2ZXJzZSIsInBvcCIsInNraXBUZW1wUmVzZXQiLCJwcmV2IiwiY2hhckF0Iiwic2xpY2UiLCJzdG9wIiwicm9vdFJlY29yZCIsInJ2YWwiLCJleGNlcHRpb24iLCJoYW5kbGUiLCJsb2MiLCJjYXVnaHQiLCJoYXNDYXRjaCIsImhhc0ZpbmFsbHkiLCJmaW5hbGx5RW50cnkiLCJjb21wbGV0ZSIsImZpbmlzaCIsIl9jYXRjaCIsInRocm93biIsImRlbGVnYXRlWWllbGQiLCJhc3luY0dlbmVyYXRvclN0ZXAiLCJnZW4iLCJfbmV4dCIsIl90aHJvdyIsIl9hc3luY1RvR2VuZXJhdG9yIiwiYXJncyIsImFyZ3VtZW50cyIsImFwcGx5IiwiX3NsaWNlZFRvQXJyYXkiLCJhcnIiLCJfYXJyYXlXaXRoSG9sZXMiLCJfaXRlcmFibGVUb0FycmF5TGltaXQiLCJfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkiLCJfbm9uSXRlcmFibGVSZXN0IiwibyIsIm1pbkxlbiIsIl9hcnJheUxpa2VUb0FycmF5IiwibiIsInRvU3RyaW5nIiwiQXJyYXkiLCJmcm9tIiwidGVzdCIsImxlbiIsImFycjIiLCJfaSIsIl9zIiwiX2UiLCJfeCIsIl9yIiwiX2FyciIsIl9uIiwiX2QiLCJpc0FycmF5IiwidXNlRWZmZWN0IiwidXNlUmVmIiwidXNlU3RhdGUiLCJ1c2VPcGVuU3RhdGUiLCJGb3JtQnV0dG9uIiwiTW9kYWwiLCJFeHBhbmRNb3JlSWNvbiIsIkFuc3dlckNyZWF0ZSIsIlB1YmxpY2F0aW9uUmVtb3ZlciIsInVzZVJlbW92ZXIiLCJ1c2VUcmFuc2xhdGlvbiIsIkNvbW1lbnRDYXJkIiwib3duZXJUb3BDYXJkIiwiZGVsZXRlQ29tbWVudCIsImRlbGV0ZUFuc3dlciIsImNyZWF0ZUFuc3dlciIsImZldGNoT25lRnVsbCIsIl91c2VUcmFuc2xhdGlvbiIsInQiLCJfdXNlT3BlblN0YXRlIiwiX3VzZU9wZW5TdGF0ZTIiLCJyZXN0SXNPcGVuIiwib3BlblJlc3QiLCJjbG9zZVJlc3QiLCJfdXNlU3RhdGUiLCJfdXNlU3RhdGUyIiwic2V0TG9hZGluZyIsImZldGNoRnVsbENvbW1lbnQiLCJfcmVmMiIsIl9jYWxsZWUiLCJmb3JjZSIsIl9hcmdzIiwiX2NhbGxlZSQiLCJfY29udGV4dCIsIl91c2VPcGVuU3RhdGUzIiwiX3VzZU9wZW5TdGF0ZTQiLCJmb3JtSXNPcGVuIiwib3BlbkZvcm0iLCJjbG9zZUZvcm0iLCJsb2NhdGlvbiIsImluY2x1ZGVzIiwiY29tbWVudENhcmRSZWYiLCJjdXJyZW50Iiwic2Nyb2xsSW50b1ZpZXciLCJfdXNlUmVtb3ZlciIsImNvbmZpcm1hdGlvbklzT3BlbiIsIm9wZW5Db25maXJtYXRpb24iLCJjbG9zZUNvbmZpcm1hdGlvbiIsImlzUmVtb3ZpbmciLCJzZXRSZW1vdmluZyIsInJlZiIsImNhblJlbW92ZSIsImRlbGV0ZVB1YmxpY2F0aW9uIiwib3duZXJJZCIsIkZyYWdtZW50IiwiY29uY2F0IiwiX3RvQ29uc3VtYWJsZUFycmF5IiwiYWRkaXRpb25hbENsYXNzIiwiY291bnRSZXN0QW5zd2VycyIsIm9uQ2xpY2siLCJjb3VudCIsImlzT3BlbiIsImNsb3NlIiwiZmV0Y2hBZnRlclN1Ym1pdFN1Y2Nlc3MiLCJ1c2VDb250ZXh0IiwidXNlRm9ybVdpdGhWYWxpZGF0aW9uIiwieXVwIiwiQ2hlY2tJY29uIiwiVGV4dEZpZWxkIiwiU2V0U3VibWl0SW5mb0NvbnRleHQiLCJBcGlFcnJvciIsInNjaGVtYSIsInN0cmluZyIsIm1heCIsIm5zIiwicmVxdWlyZWQiLCJhZ3JlZVRlcm1zIiwiYm9vbCIsImlzVHJ1ZSIsIkNvbW1lbnRGb3JtIiwiX2Vycm9ycyRjb250ZW50IiwiY3JlYXRlQ29tbWVudCIsIl91c2VGb3JtV2l0aFZhbGlkYXRpbyIsInJlZ2lzdGVyIiwiaGFuZGxlU3VibWl0IiwiZXJyb3JzIiwiaXNTdWJtaXR0aW5nIiwiY29udHJvbCIsInNldEVycm9yIiwic2V0VmFsdWUiLCJzZXRTdWJtaXRJbmZvIiwib25TdWJtaXQiLCJmb3JtRGF0YSIsIm1lc3NhZ2UiLCJ0MCIsImVudHJpZXMiLCJfcmVmMyIsIl9yZWY0IiwiZmllbGQiLCJfeDIiLCJtYXhMZW5ndGgiLCJfZXh0ZW5kcyIsImh0bWxGb3IiLCJyb2xlIiwibG9hZGluZyIsImRpc2FibGVkIiwicmVkaXJlY3RUb0xvZ2luIiwidXNlR2V0VXNlciIsIkNvbW1lbnRDcmVhdGUiLCJfdXNlR2V0VXNlciIsInVzZXIiLCJ1cGRhdGVVc2VyIiwiU2VhcmNoUmVzdWx0cyIsIkxhbmdGaWx0ZXIiLCJpMThuIiwidXNlUHVibGljYXRpb25DUlVEIiwiQ29tbWVudCIsImZldGNoQWxsRW50cnlwb2ludCIsImZldGNoT25lRnVsbEVudHJ5cG9pbnQiLCJjcmVhdGVFbnRyeXBvaW50IiwicGFnZSIsImxpbWl0IiwibGFuZyIsImZpbHRlcnMiLCJzZXRGaWx0ZXJzIiwic2V0RmlsdGVyVmFsdWUiLCJfb2JqZWN0U3ByZWFkMiIsIl9vYmplY3RTcHJlYWQiLCJfZGVmaW5lUHJvcGVydHkiLCJjb250cm9sc1JlZiIsInNjcm9sbFRvQ29udHJvbHMiLCJzZXRUaW1lb3V0IiwieSIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsIndpbmRvdyIsInNjcm9sbEJ5IiwiaW5uZXJIZWlnaHQiLCJfdXNlUHVibGljYXRpb25DUlVEIiwibGFuZ3VhZ2UiLCJjcmVhdGVJdGVtIiwiZGVsZXRlSXRlbSIsImhhbmRsZVBhZ2VDaGFuZ2UiLCJoYXNDb250cm9scyIsIm9uQ2hhbmdlIiwicGFnZUNoYW5nZSIsIml0ZW1zIiwiUHJvZHVjdENhcmQiLCJ1c2VGZXRjaCIsIkNhcm91c2VsIiwiQ2Fyb3VzZWxSZXNwb25zaXZlUnVsZXMiLCJSZWNpcGVDYXJkIiwiU2hvd0xpbmtlZEl0ZW1zIiwiZW50cnlwb2ludCIsIl91c2VGZXRjaCIsIl91c2VGZXRjaDIiLCJyZXNwb25zaXZlIiwic2xpZGVzVG9TaG93Iiwic2xpZGVzVG9TY3JvbGwiLCJpdGVtIiwicHJvZHVjdCIsInJlY2lwZSJdLCJzb3VyY2VSb290IjoiIn0=
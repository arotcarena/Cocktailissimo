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
/* harmony import */ var react_nl2br__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! react-nl2br */ "./node_modules/react-nl2br/index.js");
/* harmony import */ var react_nl2br__WEBPACK_IMPORTED_MODULE_45___default = /*#__PURE__*/__webpack_require__.n(react_nl2br__WEBPACK_IMPORTED_MODULE_45__);
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
  }, react_nl2br__WEBPACK_IMPORTED_MODULE_45___default()(comment.content)), comment.canRemove && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_32___default().createElement(_PublicationRemover__WEBPACK_IMPORTED_MODULE_42__.PublicationRemover, {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXNzZXRzX1VJX1Nob3dTdWJTZWN0aW9uc19QdWJsaWNhdGlvbl9Db21tZW50X2luZGV4X2pzeC1hc3NldHNfVUlfU2hvd1N1YlNlY3Rpb25zX1Nob3dMaW5rZWRJLWU4NTQ1ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBMEI7QUFFbkIsSUFBTUMsV0FBVyxHQUFHLFNBQWRBLFdBQVdBLENBQUFDLElBQUEsRUFBa0I7RUFBQSxJQUFiQyxPQUFPLEdBQUFELElBQUEsQ0FBUEMsT0FBTztFQUdoQyxvQkFDSUgsMERBQUE7SUFBSUssU0FBUyxFQUFDO0VBQTJCLGdCQUNyQ0wsMERBQUE7SUFBR0ssU0FBUyxFQUFDLHVCQUF1QjtJQUFDQyxJQUFJLEVBQUVILE9BQU8sQ0FBQ0k7RUFBTyxnQkFDdERQLDBEQUFBO0lBQUtLLFNBQVMsRUFBQztFQUEwQixnQkFDckNMLDBEQUFBO0lBQUtLLFNBQVMsRUFBQyxrQkFBa0I7SUFBQ0csR0FBRyxFQUFFTCxPQUFPLENBQUNNLE9BQU8sQ0FBQ0MsSUFBSztJQUFDQyxHQUFHLEVBQUVSLE9BQU8sQ0FBQ00sT0FBTyxDQUFDRTtFQUFJLEVBQUcsQ0FDdkYsQ0FDTixlQUNKWCwwREFBQTtJQUFLSyxTQUFTLEVBQUM7RUFBbUIsZ0JBQzlCTCwwREFBQTtJQUFJSyxTQUFTLEVBQUM7RUFBdUMsZ0JBQ2pETCwwREFBQTtJQUFHTSxJQUFJLEVBQUVILE9BQU8sQ0FBQ0k7RUFBTyxnQkFDcEJQLDBEQUFBLGVBQU9HLE9BQU8sQ0FBQ1MsS0FBSyxDQUFRLEVBRXhCVCxPQUFPLENBQUNVLFFBQVEsaUJBQUliLDBEQUFBO0lBQU1LLFNBQVMsRUFBQztFQUF1QixHQUFDLEtBQUcsRUFBQ0YsT0FBTyxDQUFDVSxRQUFRLENBQVEsQ0FFNUYsQ0FDSCxDQUNILENBQ0w7QUFFYixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeEJ5QjtBQUVuQixJQUFNQyxlQUFlLEdBQUcsU0FBbEJBLGVBQWVBLENBQUFaLElBQUEsRUFBc0I7RUFBQSxJQUFqQmEsV0FBVyxHQUFBYixJQUFBLENBQVhhLFdBQVc7RUFFeEMsb0JBQ0lmLDBEQUFBO0lBQUlLLFNBQVMsRUFBQztFQUEwQixnQkFDcENMLDBEQUFBO0lBQUdLLFNBQVMsRUFBQyx1QkFBdUI7SUFBQ0MsSUFBSSxFQUFFUyxXQUFXLENBQUNSO0VBQU8sZ0JBQzFEUCwwREFBQTtJQUFLSyxTQUFTLEVBQUM7RUFBMEIsZ0JBQ3JDTCwwREFBQTtJQUFLSyxTQUFTLEVBQUMsa0JBQWtCO0lBQUNHLEdBQUcsRUFBRU8sV0FBVyxDQUFDQyxZQUFZLENBQUNOLElBQUs7SUFBQ0MsR0FBRyxFQUFFSSxXQUFXLENBQUNDLFlBQVksQ0FBQ0w7RUFBSSxFQUFHLENBQ3pHLENBQ04sZUFDSlgsMERBQUE7SUFBS0ssU0FBUyxFQUFDO0VBQW1CLGdCQUM5QkwsMERBQUE7SUFBSUssU0FBUyxFQUFDO0VBQW9CLGdCQUFDTCwwREFBQTtJQUFHTSxJQUFJLEVBQUVTLFdBQVcsQ0FBQ1I7RUFBTyxHQUFFUSxXQUFXLENBQUNFLElBQUksQ0FBSyxDQUFLLENBQ3pGLENBQ0w7QUFFYixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaEJ5QjtBQUN1QjtBQUNJO0FBQ1U7QUFFeEQsSUFBTUksY0FBYyxHQUFHLFNBQWpCQSxjQUFjQSxDQUFBbkIsSUFBQSxFQUE2QjtFQUFBLElBQXhCb0IsT0FBTyxHQUFBcEIsSUFBQSxDQUFQb0IsT0FBTztJQUFFQyxTQUFTLEdBQUFyQixJQUFBLENBQVRxQixTQUFTO0VBRTlDLG9CQUNJdkIsMERBQUE7SUFBS0ssU0FBUyxFQUFDO0VBQW9CLGdCQUMvQkwsMERBQUE7SUFBS0ssU0FBUyxFQUFDO0VBQW9CLGdCQUMvQkwsMERBQUE7SUFBS0ssU0FBUyxFQUFDO0VBQW1CLGdCQUM5QkwsMERBQUEsZUFBT3NCLE9BQU8sQ0FBQ0UsUUFBUSxDQUFRLGVBQy9CeEIsMERBQUEsZUFBT3NCLE9BQU8sQ0FBQ0csU0FBUyxDQUFRLENBQzlCLENBQ0osZUFDTnpCLDBEQUFBO0lBQUtLLFNBQVMsRUFBQztFQUFrQixnQkFDN0JMLDBEQUFBO0lBQUtLLFNBQVMsRUFBQztFQUEwQixHQUNwQ2lCLE9BQU8sQ0FBQ0ksT0FBTyxDQUNkLENBQ0osZUFDTjFCLDBEQUFBO0lBQUtLLFNBQVMsRUFBQztFQUFnQixHQUV2QmlCLE9BQU8sQ0FBQ0ssWUFBWSxDQUFDQyxHQUFHLENBQUMsVUFBQUMsTUFBTTtJQUFBLE9BQzNCQSxNQUFNLENBQUNDLElBQUksS0FBSyxVQUFVLGdCQUV0QjlCLDBEQUFBLENBQUNtQiwwREFBVTtNQUFDWSxHQUFHLEVBQUVGLE1BQU0sQ0FBQ0csRUFBRztNQUFDSCxNQUFNLEVBQUVBLE1BQU87TUFBQ0ksU0FBUyxFQUFFO0lBQUssRUFBRyxnQkFFL0RqQywwREFBQSxDQUFDb0Isb0VBQWU7TUFBQ1csR0FBRyxFQUFFRixNQUFNLENBQUNHLEVBQUc7TUFBQ0gsTUFBTSxFQUFFQSxNQUFPO01BQUNJLFNBQVMsRUFBRTtJQUFLLEVBQUc7RUFBQSxDQUMzRSxDQUFDLEVBR0ZWLFNBQVMsaUJBQUl2QiwwREFBQSxDQUFDa0IsZ0RBQU0sT0FBRyxFQUd2QkksT0FBTyxDQUFDWSxXQUFXLENBQUNOLEdBQUcsQ0FBQyxVQUFBQyxNQUFNO0lBQUEsT0FDMUJBLE1BQU0sQ0FBQ0MsSUFBSSxLQUFLLFVBQVUsZ0JBRXRCOUIsMERBQUEsQ0FBQ21CLDBEQUFVO01BQUNZLEdBQUcsRUFBRUYsTUFBTSxDQUFDRyxFQUFHO01BQUNILE1BQU0sRUFBRUEsTUFBTztNQUFDSSxTQUFTLEVBQUU7SUFBSyxFQUFHLGdCQUUvRGpDLDBEQUFBLENBQUNvQixvRUFBZTtNQUFDVyxHQUFHLEVBQUVGLE1BQU0sQ0FBQ0csRUFBRztNQUFDSCxNQUFNLEVBQUVBLE1BQU87TUFBQ0ksU0FBUyxFQUFFO0lBQUssRUFBRztFQUFBLENBQzNFLENBQUMsQ0FFSixDQUNKO0FBRWQsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7K0NDNUNELHFKQUFBRSxtQkFBQSxZQUFBQSxvQkFBQSxXQUFBQyxPQUFBLFNBQUFBLE9BQUEsT0FBQUMsRUFBQSxHQUFBQyxNQUFBLENBQUFDLFNBQUEsRUFBQUMsTUFBQSxHQUFBSCxFQUFBLENBQUFJLGNBQUEsRUFBQUMsY0FBQSxHQUFBSixNQUFBLENBQUFJLGNBQUEsY0FBQUMsR0FBQSxFQUFBWixHQUFBLEVBQUFhLElBQUEsSUFBQUQsR0FBQSxDQUFBWixHQUFBLElBQUFhLElBQUEsQ0FBQUMsS0FBQSxLQUFBQyxPQUFBLHdCQUFBQyxNQUFBLEdBQUFBLE1BQUEsT0FBQUMsY0FBQSxHQUFBRixPQUFBLENBQUFHLFFBQUEsa0JBQUFDLG1CQUFBLEdBQUFKLE9BQUEsQ0FBQUssYUFBQSx1QkFBQUMsaUJBQUEsR0FBQU4sT0FBQSxDQUFBTyxXQUFBLDhCQUFBQyxPQUFBWCxHQUFBLEVBQUFaLEdBQUEsRUFBQWMsS0FBQSxXQUFBUCxNQUFBLENBQUFJLGNBQUEsQ0FBQUMsR0FBQSxFQUFBWixHQUFBLElBQUFjLEtBQUEsRUFBQUEsS0FBQSxFQUFBVSxVQUFBLE1BQUFDLFlBQUEsTUFBQUMsUUFBQSxTQUFBZCxHQUFBLENBQUFaLEdBQUEsV0FBQXVCLE1BQUEsbUJBQUFJLEdBQUEsSUFBQUosTUFBQSxZQUFBQSxPQUFBWCxHQUFBLEVBQUFaLEdBQUEsRUFBQWMsS0FBQSxXQUFBRixHQUFBLENBQUFaLEdBQUEsSUFBQWMsS0FBQSxnQkFBQWMsS0FBQUMsT0FBQSxFQUFBQyxPQUFBLEVBQUFDLElBQUEsRUFBQUMsV0FBQSxRQUFBQyxjQUFBLEdBQUFILE9BQUEsSUFBQUEsT0FBQSxDQUFBdEIsU0FBQSxZQUFBMEIsU0FBQSxHQUFBSixPQUFBLEdBQUFJLFNBQUEsRUFBQUMsU0FBQSxHQUFBNUIsTUFBQSxDQUFBNkIsTUFBQSxDQUFBSCxjQUFBLENBQUF6QixTQUFBLEdBQUE2QixPQUFBLE9BQUFDLE9BQUEsQ0FBQU4sV0FBQSxnQkFBQXJCLGNBQUEsQ0FBQXdCLFNBQUEsZUFBQXJCLEtBQUEsRUFBQXlCLGdCQUFBLENBQUFWLE9BQUEsRUFBQUUsSUFBQSxFQUFBTSxPQUFBLE1BQUFGLFNBQUEsYUFBQUssU0FBQUMsRUFBQSxFQUFBN0IsR0FBQSxFQUFBOEIsR0FBQSxtQkFBQTNDLElBQUEsWUFBQTJDLEdBQUEsRUFBQUQsRUFBQSxDQUFBRSxJQUFBLENBQUEvQixHQUFBLEVBQUE4QixHQUFBLGNBQUFmLEdBQUEsYUFBQTVCLElBQUEsV0FBQTJDLEdBQUEsRUFBQWYsR0FBQSxRQUFBdEIsT0FBQSxDQUFBdUIsSUFBQSxHQUFBQSxJQUFBLE1BQUFnQixnQkFBQSxnQkFBQVYsVUFBQSxjQUFBVyxrQkFBQSxjQUFBQywyQkFBQSxTQUFBQyxpQkFBQSxPQUFBeEIsTUFBQSxDQUFBd0IsaUJBQUEsRUFBQTlCLGNBQUEscUNBQUErQixRQUFBLEdBQUF6QyxNQUFBLENBQUEwQyxjQUFBLEVBQUFDLHVCQUFBLEdBQUFGLFFBQUEsSUFBQUEsUUFBQSxDQUFBQSxRQUFBLENBQUFHLE1BQUEsUUFBQUQsdUJBQUEsSUFBQUEsdUJBQUEsS0FBQTVDLEVBQUEsSUFBQUcsTUFBQSxDQUFBa0MsSUFBQSxDQUFBTyx1QkFBQSxFQUFBakMsY0FBQSxNQUFBOEIsaUJBQUEsR0FBQUcsdUJBQUEsT0FBQUUsRUFBQSxHQUFBTiwwQkFBQSxDQUFBdEMsU0FBQSxHQUFBMEIsU0FBQSxDQUFBMUIsU0FBQSxHQUFBRCxNQUFBLENBQUE2QixNQUFBLENBQUFXLGlCQUFBLFlBQUFNLHNCQUFBN0MsU0FBQSxnQ0FBQThDLE9BQUEsV0FBQUMsTUFBQSxJQUFBaEMsTUFBQSxDQUFBZixTQUFBLEVBQUErQyxNQUFBLFlBQUFiLEdBQUEsZ0JBQUFjLE9BQUEsQ0FBQUQsTUFBQSxFQUFBYixHQUFBLHNCQUFBZSxjQUFBdEIsU0FBQSxFQUFBdUIsV0FBQSxhQUFBQyxPQUFBSixNQUFBLEVBQUFiLEdBQUEsRUFBQWtCLE9BQUEsRUFBQUMsTUFBQSxRQUFBQyxNQUFBLEdBQUF0QixRQUFBLENBQUFMLFNBQUEsQ0FBQW9CLE1BQUEsR0FBQXBCLFNBQUEsRUFBQU8sR0FBQSxtQkFBQW9CLE1BQUEsQ0FBQS9ELElBQUEsUUFBQWdFLE1BQUEsR0FBQUQsTUFBQSxDQUFBcEIsR0FBQSxFQUFBNUIsS0FBQSxHQUFBaUQsTUFBQSxDQUFBakQsS0FBQSxTQUFBQSxLQUFBLGdCQUFBa0QsT0FBQSxDQUFBbEQsS0FBQSxLQUFBTCxNQUFBLENBQUFrQyxJQUFBLENBQUE3QixLQUFBLGVBQUE0QyxXQUFBLENBQUFFLE9BQUEsQ0FBQTlDLEtBQUEsQ0FBQW1ELE9BQUEsRUFBQUMsSUFBQSxXQUFBcEQsS0FBQSxJQUFBNkMsTUFBQSxTQUFBN0MsS0FBQSxFQUFBOEMsT0FBQSxFQUFBQyxNQUFBLGdCQUFBbEMsR0FBQSxJQUFBZ0MsTUFBQSxVQUFBaEMsR0FBQSxFQUFBaUMsT0FBQSxFQUFBQyxNQUFBLFFBQUFILFdBQUEsQ0FBQUUsT0FBQSxDQUFBOUMsS0FBQSxFQUFBb0QsSUFBQSxXQUFBQyxTQUFBLElBQUFKLE1BQUEsQ0FBQWpELEtBQUEsR0FBQXFELFNBQUEsRUFBQVAsT0FBQSxDQUFBRyxNQUFBLGdCQUFBSyxLQUFBLFdBQUFULE1BQUEsVUFBQVMsS0FBQSxFQUFBUixPQUFBLEVBQUFDLE1BQUEsU0FBQUEsTUFBQSxDQUFBQyxNQUFBLENBQUFwQixHQUFBLFNBQUEyQixlQUFBLEVBQUExRCxjQUFBLG9CQUFBRyxLQUFBLFdBQUFBLE1BQUF5QyxNQUFBLEVBQUFiLEdBQUEsYUFBQTRCLDJCQUFBLGVBQUFaLFdBQUEsV0FBQUUsT0FBQSxFQUFBQyxNQUFBLElBQUFGLE1BQUEsQ0FBQUosTUFBQSxFQUFBYixHQUFBLEVBQUFrQixPQUFBLEVBQUFDLE1BQUEsZ0JBQUFRLGVBQUEsR0FBQUEsZUFBQSxHQUFBQSxlQUFBLENBQUFILElBQUEsQ0FBQUksMEJBQUEsRUFBQUEsMEJBQUEsSUFBQUEsMEJBQUEscUJBQUEvQixpQkFBQVYsT0FBQSxFQUFBRSxJQUFBLEVBQUFNLE9BQUEsUUFBQWtDLEtBQUEsc0NBQUFoQixNQUFBLEVBQUFiLEdBQUEsd0JBQUE2QixLQUFBLFlBQUFDLEtBQUEsc0RBQUFELEtBQUEsb0JBQUFoQixNQUFBLFFBQUFiLEdBQUEsU0FBQStCLFVBQUEsV0FBQXBDLE9BQUEsQ0FBQWtCLE1BQUEsR0FBQUEsTUFBQSxFQUFBbEIsT0FBQSxDQUFBSyxHQUFBLEdBQUFBLEdBQUEsVUFBQWdDLFFBQUEsR0FBQXJDLE9BQUEsQ0FBQXFDLFFBQUEsTUFBQUEsUUFBQSxRQUFBQyxjQUFBLEdBQUFDLG1CQUFBLENBQUFGLFFBQUEsRUFBQXJDLE9BQUEsT0FBQXNDLGNBQUEsUUFBQUEsY0FBQSxLQUFBL0IsZ0JBQUEsbUJBQUErQixjQUFBLHFCQUFBdEMsT0FBQSxDQUFBa0IsTUFBQSxFQUFBbEIsT0FBQSxDQUFBd0MsSUFBQSxHQUFBeEMsT0FBQSxDQUFBeUMsS0FBQSxHQUFBekMsT0FBQSxDQUFBSyxHQUFBLHNCQUFBTCxPQUFBLENBQUFrQixNQUFBLDZCQUFBZ0IsS0FBQSxRQUFBQSxLQUFBLGdCQUFBbEMsT0FBQSxDQUFBSyxHQUFBLEVBQUFMLE9BQUEsQ0FBQTBDLGlCQUFBLENBQUExQyxPQUFBLENBQUFLLEdBQUEsdUJBQUFMLE9BQUEsQ0FBQWtCLE1BQUEsSUFBQWxCLE9BQUEsQ0FBQTJDLE1BQUEsV0FBQTNDLE9BQUEsQ0FBQUssR0FBQSxHQUFBNkIsS0FBQSxvQkFBQVQsTUFBQSxHQUFBdEIsUUFBQSxDQUFBWCxPQUFBLEVBQUFFLElBQUEsRUFBQU0sT0FBQSxvQkFBQXlCLE1BQUEsQ0FBQS9ELElBQUEsUUFBQXdFLEtBQUEsR0FBQWxDLE9BQUEsQ0FBQTRDLElBQUEsbUNBQUFuQixNQUFBLENBQUFwQixHQUFBLEtBQUFFLGdCQUFBLHFCQUFBOUIsS0FBQSxFQUFBZ0QsTUFBQSxDQUFBcEIsR0FBQSxFQUFBdUMsSUFBQSxFQUFBNUMsT0FBQSxDQUFBNEMsSUFBQSxrQkFBQW5CLE1BQUEsQ0FBQS9ELElBQUEsS0FBQXdFLEtBQUEsZ0JBQUFsQyxPQUFBLENBQUFrQixNQUFBLFlBQUFsQixPQUFBLENBQUFLLEdBQUEsR0FBQW9CLE1BQUEsQ0FBQXBCLEdBQUEsbUJBQUFrQyxvQkFBQUYsUUFBQSxFQUFBckMsT0FBQSxRQUFBNkMsVUFBQSxHQUFBN0MsT0FBQSxDQUFBa0IsTUFBQSxFQUFBQSxNQUFBLEdBQUFtQixRQUFBLENBQUF4RCxRQUFBLENBQUFnRSxVQUFBLE9BQUFDLFNBQUEsS0FBQTVCLE1BQUEsU0FBQWxCLE9BQUEsQ0FBQXFDLFFBQUEscUJBQUFRLFVBQUEsSUFBQVIsUUFBQSxDQUFBeEQsUUFBQSxlQUFBbUIsT0FBQSxDQUFBa0IsTUFBQSxhQUFBbEIsT0FBQSxDQUFBSyxHQUFBLEdBQUF5QyxTQUFBLEVBQUFQLG1CQUFBLENBQUFGLFFBQUEsRUFBQXJDLE9BQUEsZUFBQUEsT0FBQSxDQUFBa0IsTUFBQSxrQkFBQTJCLFVBQUEsS0FBQTdDLE9BQUEsQ0FBQWtCLE1BQUEsWUFBQWxCLE9BQUEsQ0FBQUssR0FBQSxPQUFBMEMsU0FBQSx1Q0FBQUYsVUFBQSxpQkFBQXRDLGdCQUFBLE1BQUFrQixNQUFBLEdBQUF0QixRQUFBLENBQUFlLE1BQUEsRUFBQW1CLFFBQUEsQ0FBQXhELFFBQUEsRUFBQW1CLE9BQUEsQ0FBQUssR0FBQSxtQkFBQW9CLE1BQUEsQ0FBQS9ELElBQUEsU0FBQXNDLE9BQUEsQ0FBQWtCLE1BQUEsWUFBQWxCLE9BQUEsQ0FBQUssR0FBQSxHQUFBb0IsTUFBQSxDQUFBcEIsR0FBQSxFQUFBTCxPQUFBLENBQUFxQyxRQUFBLFNBQUE5QixnQkFBQSxNQUFBeUMsSUFBQSxHQUFBdkIsTUFBQSxDQUFBcEIsR0FBQSxTQUFBMkMsSUFBQSxHQUFBQSxJQUFBLENBQUFKLElBQUEsSUFBQTVDLE9BQUEsQ0FBQXFDLFFBQUEsQ0FBQVksVUFBQSxJQUFBRCxJQUFBLENBQUF2RSxLQUFBLEVBQUF1QixPQUFBLENBQUFrRCxJQUFBLEdBQUFiLFFBQUEsQ0FBQWMsT0FBQSxlQUFBbkQsT0FBQSxDQUFBa0IsTUFBQSxLQUFBbEIsT0FBQSxDQUFBa0IsTUFBQSxXQUFBbEIsT0FBQSxDQUFBSyxHQUFBLEdBQUF5QyxTQUFBLEdBQUE5QyxPQUFBLENBQUFxQyxRQUFBLFNBQUE5QixnQkFBQSxJQUFBeUMsSUFBQSxJQUFBaEQsT0FBQSxDQUFBa0IsTUFBQSxZQUFBbEIsT0FBQSxDQUFBSyxHQUFBLE9BQUEwQyxTQUFBLHNDQUFBL0MsT0FBQSxDQUFBcUMsUUFBQSxTQUFBOUIsZ0JBQUEsY0FBQTZDLGFBQUFDLElBQUEsUUFBQUMsS0FBQSxLQUFBQyxNQUFBLEVBQUFGLElBQUEsWUFBQUEsSUFBQSxLQUFBQyxLQUFBLENBQUFFLFFBQUEsR0FBQUgsSUFBQSxXQUFBQSxJQUFBLEtBQUFDLEtBQUEsQ0FBQUcsVUFBQSxHQUFBSixJQUFBLEtBQUFDLEtBQUEsQ0FBQUksUUFBQSxHQUFBTCxJQUFBLFdBQUFNLFVBQUEsQ0FBQUMsSUFBQSxDQUFBTixLQUFBLGNBQUFPLGNBQUFQLEtBQUEsUUFBQTdCLE1BQUEsR0FBQTZCLEtBQUEsQ0FBQVEsVUFBQSxRQUFBckMsTUFBQSxDQUFBL0QsSUFBQSxvQkFBQStELE1BQUEsQ0FBQXBCLEdBQUEsRUFBQWlELEtBQUEsQ0FBQVEsVUFBQSxHQUFBckMsTUFBQSxhQUFBeEIsUUFBQU4sV0FBQSxTQUFBZ0UsVUFBQSxNQUFBSixNQUFBLGFBQUE1RCxXQUFBLENBQUFzQixPQUFBLENBQUFtQyxZQUFBLGNBQUFXLEtBQUEsaUJBQUFqRCxPQUFBa0QsUUFBQSxRQUFBQSxRQUFBLFFBQUFDLGNBQUEsR0FBQUQsUUFBQSxDQUFBcEYsY0FBQSxPQUFBcUYsY0FBQSxTQUFBQSxjQUFBLENBQUEzRCxJQUFBLENBQUEwRCxRQUFBLDRCQUFBQSxRQUFBLENBQUFkLElBQUEsU0FBQWMsUUFBQSxPQUFBRSxLQUFBLENBQUFGLFFBQUEsQ0FBQUcsTUFBQSxTQUFBQyxDQUFBLE9BQUFsQixJQUFBLFlBQUFBLEtBQUEsYUFBQWtCLENBQUEsR0FBQUosUUFBQSxDQUFBRyxNQUFBLE9BQUEvRixNQUFBLENBQUFrQyxJQUFBLENBQUEwRCxRQUFBLEVBQUFJLENBQUEsVUFBQWxCLElBQUEsQ0FBQXpFLEtBQUEsR0FBQXVGLFFBQUEsQ0FBQUksQ0FBQSxHQUFBbEIsSUFBQSxDQUFBTixJQUFBLE9BQUFNLElBQUEsU0FBQUEsSUFBQSxDQUFBekUsS0FBQSxHQUFBcUUsU0FBQSxFQUFBSSxJQUFBLENBQUFOLElBQUEsT0FBQU0sSUFBQSxZQUFBQSxJQUFBLENBQUFBLElBQUEsR0FBQUEsSUFBQSxlQUFBQSxJQUFBLEVBQUFkLFVBQUEsZUFBQUEsV0FBQSxhQUFBM0QsS0FBQSxFQUFBcUUsU0FBQSxFQUFBRixJQUFBLGlCQUFBcEMsaUJBQUEsQ0FBQXJDLFNBQUEsR0FBQXNDLDBCQUFBLEVBQUFuQyxjQUFBLENBQUF5QyxFQUFBLG1CQUFBdEMsS0FBQSxFQUFBZ0MsMEJBQUEsRUFBQXJCLFlBQUEsU0FBQWQsY0FBQSxDQUFBbUMsMEJBQUEsbUJBQUFoQyxLQUFBLEVBQUErQixpQkFBQSxFQUFBcEIsWUFBQSxTQUFBb0IsaUJBQUEsQ0FBQTZELFdBQUEsR0FBQW5GLE1BQUEsQ0FBQXVCLDBCQUFBLEVBQUF6QixpQkFBQSx3QkFBQWhCLE9BQUEsQ0FBQXNHLG1CQUFBLGFBQUFDLE1BQUEsUUFBQUMsSUFBQSx3QkFBQUQsTUFBQSxJQUFBQSxNQUFBLENBQUFFLFdBQUEsV0FBQUQsSUFBQSxLQUFBQSxJQUFBLEtBQUFoRSxpQkFBQSw2QkFBQWdFLElBQUEsQ0FBQUgsV0FBQSxJQUFBRyxJQUFBLENBQUEzSCxJQUFBLE9BQUFtQixPQUFBLENBQUEwRyxJQUFBLGFBQUFILE1BQUEsV0FBQXJHLE1BQUEsQ0FBQXlHLGNBQUEsR0FBQXpHLE1BQUEsQ0FBQXlHLGNBQUEsQ0FBQUosTUFBQSxFQUFBOUQsMEJBQUEsS0FBQThELE1BQUEsQ0FBQUssU0FBQSxHQUFBbkUsMEJBQUEsRUFBQXZCLE1BQUEsQ0FBQXFGLE1BQUEsRUFBQXZGLGlCQUFBLHlCQUFBdUYsTUFBQSxDQUFBcEcsU0FBQSxHQUFBRCxNQUFBLENBQUE2QixNQUFBLENBQUFnQixFQUFBLEdBQUF3RCxNQUFBLEtBQUF2RyxPQUFBLENBQUE2RyxLQUFBLGFBQUF4RSxHQUFBLGFBQUF1QixPQUFBLEVBQUF2QixHQUFBLE9BQUFXLHFCQUFBLENBQUFJLGFBQUEsQ0FBQWpELFNBQUEsR0FBQWUsTUFBQSxDQUFBa0MsYUFBQSxDQUFBakQsU0FBQSxFQUFBVyxtQkFBQSxpQ0FBQWQsT0FBQSxDQUFBb0QsYUFBQSxHQUFBQSxhQUFBLEVBQUFwRCxPQUFBLENBQUE4RyxLQUFBLGFBQUF0RixPQUFBLEVBQUFDLE9BQUEsRUFBQUMsSUFBQSxFQUFBQyxXQUFBLEVBQUEwQixXQUFBLGVBQUFBLFdBQUEsS0FBQUEsV0FBQSxHQUFBMEQsT0FBQSxPQUFBQyxJQUFBLE9BQUE1RCxhQUFBLENBQUE3QixJQUFBLENBQUFDLE9BQUEsRUFBQUMsT0FBQSxFQUFBQyxJQUFBLEVBQUFDLFdBQUEsR0FBQTBCLFdBQUEsVUFBQXJELE9BQUEsQ0FBQXNHLG1CQUFBLENBQUE3RSxPQUFBLElBQUF1RixJQUFBLEdBQUFBLElBQUEsQ0FBQTlCLElBQUEsR0FBQXJCLElBQUEsV0FBQUgsTUFBQSxXQUFBQSxNQUFBLENBQUFrQixJQUFBLEdBQUFsQixNQUFBLENBQUFqRCxLQUFBLEdBQUF1RyxJQUFBLENBQUE5QixJQUFBLFdBQUFsQyxxQkFBQSxDQUFBRCxFQUFBLEdBQUE3QixNQUFBLENBQUE2QixFQUFBLEVBQUEvQixpQkFBQSxnQkFBQUUsTUFBQSxDQUFBNkIsRUFBQSxFQUFBbkMsY0FBQSxpQ0FBQU0sTUFBQSxDQUFBNkIsRUFBQSw2REFBQS9DLE9BQUEsQ0FBQWlILElBQUEsYUFBQUMsR0FBQSxRQUFBQyxNQUFBLEdBQUFqSCxNQUFBLENBQUFnSCxHQUFBLEdBQUFELElBQUEsZ0JBQUF0SCxHQUFBLElBQUF3SCxNQUFBLEVBQUFGLElBQUEsQ0FBQXJCLElBQUEsQ0FBQWpHLEdBQUEsVUFBQXNILElBQUEsQ0FBQUcsT0FBQSxhQUFBbEMsS0FBQSxXQUFBK0IsSUFBQSxDQUFBZCxNQUFBLFNBQUF4RyxHQUFBLEdBQUFzSCxJQUFBLENBQUFJLEdBQUEsUUFBQTFILEdBQUEsSUFBQXdILE1BQUEsU0FBQWpDLElBQUEsQ0FBQXpFLEtBQUEsR0FBQWQsR0FBQSxFQUFBdUYsSUFBQSxDQUFBTixJQUFBLE9BQUFNLElBQUEsV0FBQUEsSUFBQSxDQUFBTixJQUFBLE9BQUFNLElBQUEsUUFBQWxGLE9BQUEsQ0FBQThDLE1BQUEsR0FBQUEsTUFBQSxFQUFBYixPQUFBLENBQUE5QixTQUFBLEtBQUFzRyxXQUFBLEVBQUF4RSxPQUFBLEVBQUE4RCxLQUFBLFdBQUFBLE1BQUF1QixhQUFBLGFBQUFDLElBQUEsV0FBQXJDLElBQUEsV0FBQVYsSUFBQSxRQUFBQyxLQUFBLEdBQUFLLFNBQUEsT0FBQUYsSUFBQSxZQUFBUCxRQUFBLGNBQUFuQixNQUFBLGdCQUFBYixHQUFBLEdBQUF5QyxTQUFBLE9BQUFhLFVBQUEsQ0FBQTFDLE9BQUEsQ0FBQTRDLGFBQUEsSUFBQXlCLGFBQUEsV0FBQXpJLElBQUEsa0JBQUFBLElBQUEsQ0FBQTJJLE1BQUEsT0FBQXBILE1BQUEsQ0FBQWtDLElBQUEsT0FBQXpELElBQUEsTUFBQXFILEtBQUEsRUFBQXJILElBQUEsQ0FBQTRJLEtBQUEsY0FBQTVJLElBQUEsSUFBQWlHLFNBQUEsTUFBQTRDLElBQUEsV0FBQUEsS0FBQSxTQUFBOUMsSUFBQSxXQUFBK0MsVUFBQSxRQUFBaEMsVUFBQSxJQUFBRyxVQUFBLGtCQUFBNkIsVUFBQSxDQUFBakksSUFBQSxRQUFBaUksVUFBQSxDQUFBdEYsR0FBQSxjQUFBdUYsSUFBQSxLQUFBbEQsaUJBQUEsV0FBQUEsa0JBQUFtRCxTQUFBLGFBQUFqRCxJQUFBLFFBQUFpRCxTQUFBLE1BQUE3RixPQUFBLGtCQUFBOEYsT0FBQUMsR0FBQSxFQUFBQyxNQUFBLFdBQUF2RSxNQUFBLENBQUEvRCxJQUFBLFlBQUErRCxNQUFBLENBQUFwQixHQUFBLEdBQUF3RixTQUFBLEVBQUE3RixPQUFBLENBQUFrRCxJQUFBLEdBQUE2QyxHQUFBLEVBQUFDLE1BQUEsS0FBQWhHLE9BQUEsQ0FBQWtCLE1BQUEsV0FBQWxCLE9BQUEsQ0FBQUssR0FBQSxHQUFBeUMsU0FBQSxLQUFBa0QsTUFBQSxhQUFBNUIsQ0FBQSxRQUFBVCxVQUFBLENBQUFRLE1BQUEsTUFBQUMsQ0FBQSxTQUFBQSxDQUFBLFFBQUFkLEtBQUEsUUFBQUssVUFBQSxDQUFBUyxDQUFBLEdBQUEzQyxNQUFBLEdBQUE2QixLQUFBLENBQUFRLFVBQUEsaUJBQUFSLEtBQUEsQ0FBQUMsTUFBQSxTQUFBdUMsTUFBQSxhQUFBeEMsS0FBQSxDQUFBQyxNQUFBLFNBQUFnQyxJQUFBLFFBQUFVLFFBQUEsR0FBQTdILE1BQUEsQ0FBQWtDLElBQUEsQ0FBQWdELEtBQUEsZUFBQTRDLFVBQUEsR0FBQTlILE1BQUEsQ0FBQWtDLElBQUEsQ0FBQWdELEtBQUEscUJBQUEyQyxRQUFBLElBQUFDLFVBQUEsYUFBQVgsSUFBQSxHQUFBakMsS0FBQSxDQUFBRSxRQUFBLFNBQUFzQyxNQUFBLENBQUF4QyxLQUFBLENBQUFFLFFBQUEsZ0JBQUErQixJQUFBLEdBQUFqQyxLQUFBLENBQUFHLFVBQUEsU0FBQXFDLE1BQUEsQ0FBQXhDLEtBQUEsQ0FBQUcsVUFBQSxjQUFBd0MsUUFBQSxhQUFBVixJQUFBLEdBQUFqQyxLQUFBLENBQUFFLFFBQUEsU0FBQXNDLE1BQUEsQ0FBQXhDLEtBQUEsQ0FBQUUsUUFBQSxxQkFBQTBDLFVBQUEsWUFBQS9ELEtBQUEscURBQUFvRCxJQUFBLEdBQUFqQyxLQUFBLENBQUFHLFVBQUEsU0FBQXFDLE1BQUEsQ0FBQXhDLEtBQUEsQ0FBQUcsVUFBQSxZQUFBZCxNQUFBLFdBQUFBLE9BQUFqRixJQUFBLEVBQUEyQyxHQUFBLGFBQUErRCxDQUFBLFFBQUFULFVBQUEsQ0FBQVEsTUFBQSxNQUFBQyxDQUFBLFNBQUFBLENBQUEsUUFBQWQsS0FBQSxRQUFBSyxVQUFBLENBQUFTLENBQUEsT0FBQWQsS0FBQSxDQUFBQyxNQUFBLFNBQUFnQyxJQUFBLElBQUFuSCxNQUFBLENBQUFrQyxJQUFBLENBQUFnRCxLQUFBLHdCQUFBaUMsSUFBQSxHQUFBakMsS0FBQSxDQUFBRyxVQUFBLFFBQUEwQyxZQUFBLEdBQUE3QyxLQUFBLGFBQUE2QyxZQUFBLGlCQUFBekksSUFBQSxtQkFBQUEsSUFBQSxLQUFBeUksWUFBQSxDQUFBNUMsTUFBQSxJQUFBbEQsR0FBQSxJQUFBQSxHQUFBLElBQUE4RixZQUFBLENBQUExQyxVQUFBLEtBQUEwQyxZQUFBLGNBQUExRSxNQUFBLEdBQUEwRSxZQUFBLEdBQUFBLFlBQUEsQ0FBQXJDLFVBQUEsY0FBQXJDLE1BQUEsQ0FBQS9ELElBQUEsR0FBQUEsSUFBQSxFQUFBK0QsTUFBQSxDQUFBcEIsR0FBQSxHQUFBQSxHQUFBLEVBQUE4RixZQUFBLFNBQUFqRixNQUFBLGdCQUFBZ0MsSUFBQSxHQUFBaUQsWUFBQSxDQUFBMUMsVUFBQSxFQUFBbEQsZ0JBQUEsU0FBQTZGLFFBQUEsQ0FBQTNFLE1BQUEsTUFBQTJFLFFBQUEsV0FBQUEsU0FBQTNFLE1BQUEsRUFBQWlDLFFBQUEsb0JBQUFqQyxNQUFBLENBQUEvRCxJQUFBLFFBQUErRCxNQUFBLENBQUFwQixHQUFBLHFCQUFBb0IsTUFBQSxDQUFBL0QsSUFBQSxtQkFBQStELE1BQUEsQ0FBQS9ELElBQUEsUUFBQXdGLElBQUEsR0FBQXpCLE1BQUEsQ0FBQXBCLEdBQUEsZ0JBQUFvQixNQUFBLENBQUEvRCxJQUFBLFNBQUFrSSxJQUFBLFFBQUF2RixHQUFBLEdBQUFvQixNQUFBLENBQUFwQixHQUFBLE9BQUFhLE1BQUEsa0JBQUFnQyxJQUFBLHlCQUFBekIsTUFBQSxDQUFBL0QsSUFBQSxJQUFBZ0csUUFBQSxVQUFBUixJQUFBLEdBQUFRLFFBQUEsR0FBQW5ELGdCQUFBLEtBQUE4RixNQUFBLFdBQUFBLE9BQUE1QyxVQUFBLGFBQUFXLENBQUEsUUFBQVQsVUFBQSxDQUFBUSxNQUFBLE1BQUFDLENBQUEsU0FBQUEsQ0FBQSxRQUFBZCxLQUFBLFFBQUFLLFVBQUEsQ0FBQVMsQ0FBQSxPQUFBZCxLQUFBLENBQUFHLFVBQUEsS0FBQUEsVUFBQSxjQUFBMkMsUUFBQSxDQUFBOUMsS0FBQSxDQUFBUSxVQUFBLEVBQUFSLEtBQUEsQ0FBQUksUUFBQSxHQUFBRyxhQUFBLENBQUFQLEtBQUEsR0FBQS9DLGdCQUFBLHlCQUFBK0YsT0FBQS9DLE1BQUEsYUFBQWEsQ0FBQSxRQUFBVCxVQUFBLENBQUFRLE1BQUEsTUFBQUMsQ0FBQSxTQUFBQSxDQUFBLFFBQUFkLEtBQUEsUUFBQUssVUFBQSxDQUFBUyxDQUFBLE9BQUFkLEtBQUEsQ0FBQUMsTUFBQSxLQUFBQSxNQUFBLFFBQUE5QixNQUFBLEdBQUE2QixLQUFBLENBQUFRLFVBQUEsa0JBQUFyQyxNQUFBLENBQUEvRCxJQUFBLFFBQUE2SSxNQUFBLEdBQUE5RSxNQUFBLENBQUFwQixHQUFBLEVBQUF3RCxhQUFBLENBQUFQLEtBQUEsWUFBQWlELE1BQUEsZ0JBQUFwRSxLQUFBLDhCQUFBcUUsYUFBQSxXQUFBQSxjQUFBeEMsUUFBQSxFQUFBZixVQUFBLEVBQUFFLE9BQUEsZ0JBQUFkLFFBQUEsS0FBQXhELFFBQUEsRUFBQWlDLE1BQUEsQ0FBQWtELFFBQUEsR0FBQWYsVUFBQSxFQUFBQSxVQUFBLEVBQUFFLE9BQUEsRUFBQUEsT0FBQSxvQkFBQWpDLE1BQUEsVUFBQWIsR0FBQSxHQUFBeUMsU0FBQSxHQUFBdkMsZ0JBQUEsT0FBQXZDLE9BQUE7QUFBQSxTQUFBeUksbUJBQUFDLEdBQUEsRUFBQW5GLE9BQUEsRUFBQUMsTUFBQSxFQUFBbUYsS0FBQSxFQUFBQyxNQUFBLEVBQUFqSixHQUFBLEVBQUEwQyxHQUFBLGNBQUEyQyxJQUFBLEdBQUEwRCxHQUFBLENBQUEvSSxHQUFBLEVBQUEwQyxHQUFBLE9BQUE1QixLQUFBLEdBQUF1RSxJQUFBLENBQUF2RSxLQUFBLFdBQUFzRCxLQUFBLElBQUFQLE1BQUEsQ0FBQU8sS0FBQSxpQkFBQWlCLElBQUEsQ0FBQUosSUFBQSxJQUFBckIsT0FBQSxDQUFBOUMsS0FBQSxZQUFBc0csT0FBQSxDQUFBeEQsT0FBQSxDQUFBOUMsS0FBQSxFQUFBb0QsSUFBQSxDQUFBOEUsS0FBQSxFQUFBQyxNQUFBO0FBQUEsU0FBQUMsa0JBQUF6RyxFQUFBLDZCQUFBVixJQUFBLFNBQUFvSCxJQUFBLEdBQUFDLFNBQUEsYUFBQWhDLE9BQUEsV0FBQXhELE9BQUEsRUFBQUMsTUFBQSxRQUFBa0YsR0FBQSxHQUFBdEcsRUFBQSxDQUFBNEcsS0FBQSxDQUFBdEgsSUFBQSxFQUFBb0gsSUFBQSxZQUFBSCxNQUFBbEksS0FBQSxJQUFBZ0ksa0JBQUEsQ0FBQUMsR0FBQSxFQUFBbkYsT0FBQSxFQUFBQyxNQUFBLEVBQUFtRixLQUFBLEVBQUFDLE1BQUEsVUFBQW5JLEtBQUEsY0FBQW1JLE9BQUF0SCxHQUFBLElBQUFtSCxrQkFBQSxDQUFBQyxHQUFBLEVBQUFuRixPQUFBLEVBQUFDLE1BQUEsRUFBQW1GLEtBQUEsRUFBQUMsTUFBQSxXQUFBdEgsR0FBQSxLQUFBcUgsS0FBQSxDQUFBN0QsU0FBQTtBQUFBLFNBQUFtRSxlQUFBQyxHQUFBLEVBQUE5QyxDQUFBLFdBQUErQyxlQUFBLENBQUFELEdBQUEsS0FBQUUscUJBQUEsQ0FBQUYsR0FBQSxFQUFBOUMsQ0FBQSxLQUFBaUQsMkJBQUEsQ0FBQUgsR0FBQSxFQUFBOUMsQ0FBQSxLQUFBa0QsZ0JBQUE7QUFBQSxTQUFBQSxpQkFBQSxjQUFBdkUsU0FBQTtBQUFBLFNBQUFzRSw0QkFBQUUsQ0FBQSxFQUFBQyxNQUFBLFNBQUFELENBQUEscUJBQUFBLENBQUEsc0JBQUFFLGlCQUFBLENBQUFGLENBQUEsRUFBQUMsTUFBQSxPQUFBRSxDQUFBLEdBQUF4SixNQUFBLENBQUFDLFNBQUEsQ0FBQXdKLFFBQUEsQ0FBQXJILElBQUEsQ0FBQWlILENBQUEsRUFBQTlCLEtBQUEsYUFBQWlDLENBQUEsaUJBQUFILENBQUEsQ0FBQTlDLFdBQUEsRUFBQWlELENBQUEsR0FBQUgsQ0FBQSxDQUFBOUMsV0FBQSxDQUFBNUgsSUFBQSxNQUFBNkssQ0FBQSxjQUFBQSxDQUFBLG1CQUFBRSxLQUFBLENBQUFDLElBQUEsQ0FBQU4sQ0FBQSxPQUFBRyxDQUFBLCtEQUFBSSxJQUFBLENBQUFKLENBQUEsVUFBQUQsaUJBQUEsQ0FBQUYsQ0FBQSxFQUFBQyxNQUFBO0FBQUEsU0FBQUMsa0JBQUFQLEdBQUEsRUFBQWEsR0FBQSxRQUFBQSxHQUFBLFlBQUFBLEdBQUEsR0FBQWIsR0FBQSxDQUFBL0MsTUFBQSxFQUFBNEQsR0FBQSxHQUFBYixHQUFBLENBQUEvQyxNQUFBLFdBQUFDLENBQUEsTUFBQTRELElBQUEsT0FBQUosS0FBQSxDQUFBRyxHQUFBLEdBQUEzRCxDQUFBLEdBQUEyRCxHQUFBLEVBQUEzRCxDQUFBLElBQUE0RCxJQUFBLENBQUE1RCxDQUFBLElBQUE4QyxHQUFBLENBQUE5QyxDQUFBLFVBQUE0RCxJQUFBO0FBQUEsU0FBQVosc0JBQUFGLEdBQUEsRUFBQTlDLENBQUEsUUFBQTZELEVBQUEsV0FBQWYsR0FBQSxnQ0FBQXZJLE1BQUEsSUFBQXVJLEdBQUEsQ0FBQXZJLE1BQUEsQ0FBQUUsUUFBQSxLQUFBcUksR0FBQSw0QkFBQWUsRUFBQSxRQUFBQyxFQUFBLEVBQUFDLEVBQUEsRUFBQUMsRUFBQSxFQUFBQyxFQUFBLEVBQUFDLElBQUEsT0FBQUMsRUFBQSxPQUFBQyxFQUFBLGlCQUFBSixFQUFBLElBQUFILEVBQUEsR0FBQUEsRUFBQSxDQUFBM0gsSUFBQSxDQUFBNEcsR0FBQSxHQUFBaEUsSUFBQSxRQUFBa0IsQ0FBQSxRQUFBbEcsTUFBQSxDQUFBK0osRUFBQSxNQUFBQSxFQUFBLFVBQUFNLEVBQUEsdUJBQUFBLEVBQUEsSUFBQUwsRUFBQSxHQUFBRSxFQUFBLENBQUE5SCxJQUFBLENBQUEySCxFQUFBLEdBQUFyRixJQUFBLE1BQUEwRixJQUFBLENBQUExRSxJQUFBLENBQUFzRSxFQUFBLENBQUF6SixLQUFBLEdBQUE2SixJQUFBLENBQUFuRSxNQUFBLEtBQUFDLENBQUEsR0FBQW1FLEVBQUEsaUJBQUFqSixHQUFBLElBQUFrSixFQUFBLE9BQUFMLEVBQUEsR0FBQTdJLEdBQUEseUJBQUFpSixFQUFBLFlBQUFOLEVBQUEsZUFBQUksRUFBQSxHQUFBSixFQUFBLGNBQUEvSixNQUFBLENBQUFtSyxFQUFBLE1BQUFBLEVBQUEsMkJBQUFHLEVBQUEsUUFBQUwsRUFBQSxhQUFBRyxJQUFBO0FBQUEsU0FBQW5CLGdCQUFBRCxHQUFBLFFBQUFVLEtBQUEsQ0FBQWEsT0FBQSxDQUFBdkIsR0FBQSxVQUFBQSxHQUFBO0FBRDJEO0FBQ1Y7QUFDMkI7QUFDbkI7QUFDTDtBQUNhO0FBQ1o7QUFDSTtBQUNQO0FBQ2E7QUFDRDtBQUNZO0FBQzNCO0FBQ2Y7QUFFekIsSUFBTW9DLFdBQVcsR0FBRyxTQUFkQSxXQUFXQSxDQUFBeE4sSUFBQSxFQUF5RjtFQUFBLElBQXBGeU4sWUFBWSxHQUFBek4sSUFBQSxDQUFaeU4sWUFBWTtJQUFFck0sT0FBTyxHQUFBcEIsSUFBQSxDQUFQb0IsT0FBTztJQUFFc00sYUFBYSxHQUFBMU4sSUFBQSxDQUFiME4sYUFBYTtJQUFFQyxZQUFZLEdBQUEzTixJQUFBLENBQVoyTixZQUFZO0lBQUVDLFlBQVksR0FBQTVOLElBQUEsQ0FBWjROLFlBQVk7SUFBRUMsWUFBWSxHQUFBN04sSUFBQSxDQUFaNk4sWUFBWTtFQUN2RyxJQUFBQyxlQUFBLEdBQVlSLDhEQUFjLENBQUMsVUFBVSxDQUFDO0lBQS9CUyxDQUFDLEdBQUFELGVBQUEsQ0FBREMsQ0FBQztFQUVSLElBQUFDLGFBQUEsR0FBMENqQiw2RUFBWSxDQUFDLEtBQUssQ0FBQztJQUFBa0IsY0FBQSxHQUFBOUMsY0FBQSxDQUFBNkMsYUFBQTtJQUF0REUsVUFBVSxHQUFBRCxjQUFBO0lBQUVFLFFBQVEsR0FBQUYsY0FBQTtJQUFFRyxTQUFTLEdBQUFILGNBQUE7RUFFdEMsSUFBQUksU0FBQSxHQUFnQ3ZCLGdEQUFRLENBQUMsSUFBSSxDQUFDO0lBQUF3QixVQUFBLEdBQUFuRCxjQUFBLENBQUFrRCxTQUFBO0lBQXZDaE4sU0FBUyxHQUFBaU4sVUFBQTtJQUFFQyxVQUFVLEdBQUFELFVBQUE7RUFFNUIsSUFBTUUsZ0JBQWdCO0lBQUEsSUFBQUMsS0FBQSxHQUFBMUQsaUJBQUEsZUFBQTlJLG1CQUFBLEdBQUEyRyxJQUFBLENBQUcsU0FBQThGLFFBQUE7TUFBQSxJQUFBQyxLQUFBO1FBQUFDLEtBQUEsR0FBQTNELFNBQUE7TUFBQSxPQUFBaEosbUJBQUEsR0FBQXdCLElBQUEsVUFBQW9MLFNBQUFDLFFBQUE7UUFBQSxrQkFBQUEsUUFBQSxDQUFBckYsSUFBQSxHQUFBcUYsUUFBQSxDQUFBMUgsSUFBQTtVQUFBO1lBQU91SCxLQUFLLEdBQUFDLEtBQUEsQ0FBQXZHLE1BQUEsUUFBQXVHLEtBQUEsUUFBQTVILFNBQUEsR0FBQTRILEtBQUEsTUFBRyxJQUFJO1lBQ3hDTCxVQUFVLENBQUMsSUFBSSxDQUFDO1lBQUNPLFFBQUEsQ0FBQTFILElBQUE7WUFBQSxPQUNYeUcsWUFBWSxDQUFDek0sT0FBTyxDQUFDVSxFQUFFLEVBQUU2TSxLQUFLLENBQUM7VUFBQTtZQUFHO1lBQ3hDSixVQUFVLENBQUMsS0FBSyxDQUFDO1VBQUM7VUFBQTtZQUFBLE9BQUFPLFFBQUEsQ0FBQWxGLElBQUE7UUFBQTtNQUFBLEdBQUE4RSxPQUFBO0lBQUEsQ0FDckI7SUFBQSxnQkFKS0YsZ0JBQWdCQSxDQUFBO01BQUEsT0FBQUMsS0FBQSxDQUFBdkQsS0FBQSxPQUFBRCxTQUFBO0lBQUE7RUFBQSxHQUlyQjtFQUVEMkIsaURBQVMsQ0FBQyxZQUFNO0lBQ1osSUFBR3NCLFVBQVUsRUFBRTtNQUNYTSxnQkFBZ0IsQ0FBQyxLQUFLLENBQUM7SUFDM0I7RUFDSixDQUFDLEVBQUUsQ0FBQ04sVUFBVSxDQUFDLENBQUM7O0VBRWhCO0VBQ0EsSUFBQWEsY0FBQSxHQUEwQ2hDLDZFQUFZLENBQUMsS0FBSyxDQUFDO0lBQUFpQyxjQUFBLEdBQUE3RCxjQUFBLENBQUE0RCxjQUFBO0lBQXRERSxVQUFVLEdBQUFELGNBQUE7SUFBRUUsUUFBUSxHQUFBRixjQUFBO0lBQUVHLFNBQVMsR0FBQUgsY0FBQTs7RUFFdEM7RUFDQTtFQUNBcEMsaURBQVMsQ0FBQyxZQUFNO0lBQ1osSUFBR3dDLFFBQVEsQ0FBQ2hQLElBQUksQ0FBQ2lQLFFBQVEsQ0FBQyxTQUFTLEdBQUNqTyxPQUFPLENBQUNVLEVBQUUsQ0FBQyxFQUFFO01BQzdDb04sUUFBUSxFQUFFO0lBQ2QsQ0FBQyxNQUFNLElBQUlFLFFBQVEsQ0FBQ2hQLElBQUksQ0FBQ2lQLFFBQVEsQ0FBQyxZQUFZLEdBQUNqTyxPQUFPLENBQUNVLEVBQUUsQ0FBQyxFQUFFO01BQ3hEd04sY0FBYyxDQUFDQyxPQUFPLENBQUNDLGNBQWMsRUFBRTtJQUMzQztFQUNKLENBQUMsRUFBRSxFQUFFLENBQUM7RUFDTixJQUFNRixjQUFjLEdBQUd6Qyw4Q0FBTSxDQUFDLElBQUksQ0FBQzs7RUFHbkM7RUFDQSxJQUFBNEMsV0FBQSxHQUEyRnBDLDJFQUFVLEVBQUU7SUFBaEdxQyxrQkFBa0IsR0FBQUQsV0FBQSxDQUFsQkMsa0JBQWtCO0lBQUVDLGdCQUFnQixHQUFBRixXQUFBLENBQWhCRSxnQkFBZ0I7SUFBRUMsaUJBQWlCLEdBQUFILFdBQUEsQ0FBakJHLGlCQUFpQjtJQUFFQyxVQUFVLEdBQUFKLFdBQUEsQ0FBVkksVUFBVTtJQUFFQyxXQUFXLEdBQUFMLFdBQUEsQ0FBWEssV0FBVztFQUd2RixvQkFDSWhRLDJEQUFBO0lBQUlpUSxHQUFHLEVBQUVULGNBQWU7SUFBQ25QLFNBQVMsRUFBRSxhQUFhLElBQUl1UCxrQkFBa0IsR0FBRyxpQkFBaUIsR0FBRSxFQUFFLENBQUMsSUFBSUcsVUFBVSxHQUFHLGNBQWMsR0FBRSxFQUFFO0VBQUUsZ0JBQ2pJL1AsMkRBQUE7SUFBS0ssU0FBUyxFQUFDO0VBQWEsZ0JBQ3hCTCwyREFBQTtJQUFLSyxTQUFTLEVBQUM7RUFBb0IsZ0JBQy9CTCwyREFBQTtJQUFLSyxTQUFTLEVBQUM7RUFBbUIsZ0JBQzlCTCwyREFBQSxlQUFPc0IsT0FBTyxDQUFDRSxRQUFRLENBQVEsZUFDL0J4QiwyREFBQSxlQUFPc0IsT0FBTyxDQUFDRyxTQUFTLENBQVEsQ0FDOUIsQ0FDSixlQUNOekIsMkRBQUE7SUFBS0ssU0FBUyxFQUFDO0VBQWtCLGdCQUM3QkwsMkRBQUE7SUFBS0ssU0FBUyxFQUFDO0VBQTBCLEdBQ3BDb04sbURBQUssQ0FBQ25NLE9BQU8sQ0FBQ0ksT0FBTyxDQUFDLENBQ3JCLEVBRUZKLE9BQU8sQ0FBQzRPLFNBQVMsaUJBQ2JsUSwyREFBQSxDQUFDc04sb0VBQWtCO0lBQ2Y2QyxpQkFBaUIsRUFBRSxTQUFBQSxrQkFBQTtNQUFBLE9BQU12QyxhQUFhLENBQUN0TSxPQUFPLENBQUNVLEVBQUUsQ0FBQztJQUFBLENBQUM7SUFDbkQ0TixrQkFBa0IsRUFBRUEsa0JBQW1CO0lBQ3ZDQyxnQkFBZ0IsRUFBRUEsZ0JBQWlCO0lBQ25DQyxpQkFBaUIsRUFBRUEsaUJBQWtCO0lBQ3JDQyxVQUFVLEVBQUVBLFVBQVc7SUFDdkJDLFdBQVcsRUFBRUE7RUFBWSxFQUVoQyxDQUVILENBQ0osZUFDTmhRLDJEQUFBO0lBQUtLLFNBQVMsRUFBQztFQUFnQixnQkFDM0JMLDJEQUFBO0lBQUtLLFNBQVMsRUFBQztFQUFrQyxHQUU3QyxDQUFDK04sVUFBVSxJQUFJOU0sT0FBTyxDQUFDSyxZQUFZLENBQUM0RyxNQUFNLEdBQUcsQ0FBQyxJQUMxQ2pILE9BQU8sQ0FBQ0ssWUFBWSxDQUFDQyxHQUFHLENBQUMsVUFBQUMsTUFBTTtJQUFBLE9BQzNCQSxNQUFNLENBQUNDLElBQUksS0FBSyxVQUFVLGdCQUV0QjlCLDJEQUFBLENBQUNtQiwyREFBVTtNQUFDWSxHQUFHLEVBQUVGLE1BQU0sQ0FBQ0csRUFBRztNQUFDb08sT0FBTyxFQUFFOU8sT0FBTyxDQUFDVSxFQUFHO01BQUNILE1BQU0sRUFBRUEsTUFBTztNQUFDZ00sWUFBWSxFQUFFQTtJQUFhLEVBQUcsZ0JBRS9GN04sMkRBQUEsQ0FBQ29CLHFFQUFlO01BQUNXLEdBQUcsRUFBRUYsTUFBTSxDQUFDRyxFQUFHO01BQUNvTyxPQUFPLEVBQUU5TyxPQUFPLENBQUNVLEVBQUc7TUFBQ0gsTUFBTSxFQUFFQSxNQUFPO01BQUNnTSxZQUFZLEVBQUVBO0lBQWEsRUFBRztFQUFBLENBQzNHLENBQ0osRUFJRE8sVUFBVSxpQkFDTnBPLDJEQUFBLENBQUFBLHdEQUFBLFFBRVEsR0FBQXNRLE1BQUEsQ0FBQUMsa0JBQUEsQ0FBSWpQLE9BQU8sQ0FBQ0ssWUFBWSxHQUFBNE8sa0JBQUEsQ0FBS2pQLE9BQU8sQ0FBQ1ksV0FBVyxHQUFFTixHQUFHLENBQUMsVUFBQUMsTUFBTTtJQUFBLE9BQ3hEQSxNQUFNLENBQUNDLElBQUksS0FBSyxVQUFVLGdCQUV0QjlCLDJEQUFBLENBQUNtQiwyREFBVTtNQUFDWSxHQUFHLEVBQUVGLE1BQU0sQ0FBQ0csRUFBRztNQUFDb08sT0FBTyxFQUFFOU8sT0FBTyxDQUFDVSxFQUFHO01BQUNILE1BQU0sRUFBRUEsTUFBTztNQUFDZ00sWUFBWSxFQUFFQTtJQUFhLEVBQUcsZ0JBRS9GN04sMkRBQUEsQ0FBQ29CLHFFQUFlO01BQUNXLEdBQUcsRUFBRUYsTUFBTSxDQUFDRyxFQUFHO01BQUNvTyxPQUFPLEVBQUU5TyxPQUFPLENBQUNVLEVBQUc7TUFBQ0gsTUFBTSxFQUFFQSxNQUFPO01BQUNnTSxZQUFZLEVBQUVBO0lBQWEsRUFBRztFQUFBLENBQzNHLENBQUMsRUFHRnRNLFNBQVMsaUJBQUl2QiwyREFBQSxDQUFDa0IsaURBQU07SUFBQ3NQLGVBQWUsRUFBQztFQUFjLEVBQUcsQ0FHakUsQ0FFQyxFQUVGLENBQUNwQyxVQUFVLElBQUk5TSxPQUFPLENBQUNtUCxnQkFBZ0IsR0FBRyxDQUFDLGlCQUN2Q3pRLDJEQUFBO0lBQVFLLFNBQVMsRUFBQyxvQ0FBb0M7SUFBQ3lCLElBQUksRUFBQyxRQUFRO0lBQUM0TyxPQUFPLEVBQUVyQztFQUFTLGdCQUNuRnJPLDJEQUFBLENBQUNvTixpRUFBYztJQUFDb0QsZUFBZSxFQUFDO0VBQU0sRUFBRyxlQUN6Q3hRLDJEQUFBLGVBQU9pTyxDQUFDLENBQUMsd0JBQXdCLEVBQUU7SUFBQzBDLEtBQUssRUFBRXJQLE9BQU8sQ0FBQ21QO0VBQWdCLENBQUMsQ0FBQyxDQUFRLENBRXBGLEVBR0RyQyxVQUFVLGlCQUNOcE8sMkRBQUE7SUFBUUssU0FBUyxFQUFDLG9DQUFvQztJQUFDeUIsSUFBSSxFQUFDLFFBQVE7SUFBQzRPLE9BQU8sRUFBRXBDO0VBQVUsZ0JBQ3BGdE8sMkRBQUEsQ0FBQ29OLGlFQUFjO0lBQUNvRCxlQUFlLEVBQUM7RUFBZSxFQUFFLGVBQ2pEeFEsMkRBQUEsZUFBT2lPLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBUSxDQUVuQyxDQUVILGVBQ05qTywyREFBQTtJQUFLSyxTQUFTLEVBQUM7RUFBZ0IsZ0JBQzNCTCwyREFBQSxDQUFDbU4sb0RBQUs7SUFBQ3FELGVBQWUsRUFBQyx3REFBd0Q7SUFBQ0ksTUFBTSxFQUFFekIsVUFBVztJQUFDMEIsS0FBSyxFQUFFeEI7RUFBVSxnQkFDakhyUCwyREFBQSxDQUFDcU4sK0RBQVk7SUFDVCtDLE9BQU8sRUFBRTlPLE9BQU8sQ0FBQ1UsRUFBRztJQUNwQjhMLFlBQVksRUFBRUEsWUFBYTtJQUMzQkgsWUFBWSxFQUFFQSxZQUFhO0lBQzNCbUQsdUJBQXVCLEVBQUVwQyxnQkFBaUI7SUFDMUNtQyxLQUFLLEVBQUV4QjtFQUFVLGdCQUVqQnJQLDJEQUFBLENBQUNxQiw0REFBYztJQUFDQyxPQUFPLEVBQUVBLE9BQVE7SUFBQ0MsU0FBUyxFQUFFQTtFQUFVLEVBQUcsQ0FDL0MsQ0FDWCxlQUNSdkIsMkRBQUEsQ0FBQ2tOLHlEQUFVO0lBQUN3RCxPQUFPLEVBQUV0QixRQUFTO0lBQUNvQixlQUFlLEVBQUM7RUFBd0MsR0FDbEZ2QyxDQUFDLENBQUMsZUFBZSxDQUFDLENBQ1YsQ0FDWCxDQUNMO0FBRWIsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7K0NDbkpELHFKQUFBOUwsbUJBQUEsWUFBQUEsb0JBQUEsV0FBQUMsT0FBQSxTQUFBQSxPQUFBLE9BQUFDLEVBQUEsR0FBQUMsTUFBQSxDQUFBQyxTQUFBLEVBQUFDLE1BQUEsR0FBQUgsRUFBQSxDQUFBSSxjQUFBLEVBQUFDLGNBQUEsR0FBQUosTUFBQSxDQUFBSSxjQUFBLGNBQUFDLEdBQUEsRUFBQVosR0FBQSxFQUFBYSxJQUFBLElBQUFELEdBQUEsQ0FBQVosR0FBQSxJQUFBYSxJQUFBLENBQUFDLEtBQUEsS0FBQUMsT0FBQSx3QkFBQUMsTUFBQSxHQUFBQSxNQUFBLE9BQUFDLGNBQUEsR0FBQUYsT0FBQSxDQUFBRyxRQUFBLGtCQUFBQyxtQkFBQSxHQUFBSixPQUFBLENBQUFLLGFBQUEsdUJBQUFDLGlCQUFBLEdBQUFOLE9BQUEsQ0FBQU8sV0FBQSw4QkFBQUMsT0FBQVgsR0FBQSxFQUFBWixHQUFBLEVBQUFjLEtBQUEsV0FBQVAsTUFBQSxDQUFBSSxjQUFBLENBQUFDLEdBQUEsRUFBQVosR0FBQSxJQUFBYyxLQUFBLEVBQUFBLEtBQUEsRUFBQVUsVUFBQSxNQUFBQyxZQUFBLE1BQUFDLFFBQUEsU0FBQWQsR0FBQSxDQUFBWixHQUFBLFdBQUF1QixNQUFBLG1CQUFBSSxHQUFBLElBQUFKLE1BQUEsWUFBQUEsT0FBQVgsR0FBQSxFQUFBWixHQUFBLEVBQUFjLEtBQUEsV0FBQUYsR0FBQSxDQUFBWixHQUFBLElBQUFjLEtBQUEsZ0JBQUFjLEtBQUFDLE9BQUEsRUFBQUMsT0FBQSxFQUFBQyxJQUFBLEVBQUFDLFdBQUEsUUFBQUMsY0FBQSxHQUFBSCxPQUFBLElBQUFBLE9BQUEsQ0FBQXRCLFNBQUEsWUFBQTBCLFNBQUEsR0FBQUosT0FBQSxHQUFBSSxTQUFBLEVBQUFDLFNBQUEsR0FBQTVCLE1BQUEsQ0FBQTZCLE1BQUEsQ0FBQUgsY0FBQSxDQUFBekIsU0FBQSxHQUFBNkIsT0FBQSxPQUFBQyxPQUFBLENBQUFOLFdBQUEsZ0JBQUFyQixjQUFBLENBQUF3QixTQUFBLGVBQUFyQixLQUFBLEVBQUF5QixnQkFBQSxDQUFBVixPQUFBLEVBQUFFLElBQUEsRUFBQU0sT0FBQSxNQUFBRixTQUFBLGFBQUFLLFNBQUFDLEVBQUEsRUFBQTdCLEdBQUEsRUFBQThCLEdBQUEsbUJBQUEzQyxJQUFBLFlBQUEyQyxHQUFBLEVBQUFELEVBQUEsQ0FBQUUsSUFBQSxDQUFBL0IsR0FBQSxFQUFBOEIsR0FBQSxjQUFBZixHQUFBLGFBQUE1QixJQUFBLFdBQUEyQyxHQUFBLEVBQUFmLEdBQUEsUUFBQXRCLE9BQUEsQ0FBQXVCLElBQUEsR0FBQUEsSUFBQSxNQUFBZ0IsZ0JBQUEsZ0JBQUFWLFVBQUEsY0FBQVcsa0JBQUEsY0FBQUMsMkJBQUEsU0FBQUMsaUJBQUEsT0FBQXhCLE1BQUEsQ0FBQXdCLGlCQUFBLEVBQUE5QixjQUFBLHFDQUFBK0IsUUFBQSxHQUFBekMsTUFBQSxDQUFBMEMsY0FBQSxFQUFBQyx1QkFBQSxHQUFBRixRQUFBLElBQUFBLFFBQUEsQ0FBQUEsUUFBQSxDQUFBRyxNQUFBLFFBQUFELHVCQUFBLElBQUFBLHVCQUFBLEtBQUE1QyxFQUFBLElBQUFHLE1BQUEsQ0FBQWtDLElBQUEsQ0FBQU8sdUJBQUEsRUFBQWpDLGNBQUEsTUFBQThCLGlCQUFBLEdBQUFHLHVCQUFBLE9BQUFFLEVBQUEsR0FBQU4sMEJBQUEsQ0FBQXRDLFNBQUEsR0FBQTBCLFNBQUEsQ0FBQTFCLFNBQUEsR0FBQUQsTUFBQSxDQUFBNkIsTUFBQSxDQUFBVyxpQkFBQSxZQUFBTSxzQkFBQTdDLFNBQUEsZ0NBQUE4QyxPQUFBLFdBQUFDLE1BQUEsSUFBQWhDLE1BQUEsQ0FBQWYsU0FBQSxFQUFBK0MsTUFBQSxZQUFBYixHQUFBLGdCQUFBYyxPQUFBLENBQUFELE1BQUEsRUFBQWIsR0FBQSxzQkFBQWUsY0FBQXRCLFNBQUEsRUFBQXVCLFdBQUEsYUFBQUMsT0FBQUosTUFBQSxFQUFBYixHQUFBLEVBQUFrQixPQUFBLEVBQUFDLE1BQUEsUUFBQUMsTUFBQSxHQUFBdEIsUUFBQSxDQUFBTCxTQUFBLENBQUFvQixNQUFBLEdBQUFwQixTQUFBLEVBQUFPLEdBQUEsbUJBQUFvQixNQUFBLENBQUEvRCxJQUFBLFFBQUFnRSxNQUFBLEdBQUFELE1BQUEsQ0FBQXBCLEdBQUEsRUFBQTVCLEtBQUEsR0FBQWlELE1BQUEsQ0FBQWpELEtBQUEsU0FBQUEsS0FBQSxnQkFBQWtELE9BQUEsQ0FBQWxELEtBQUEsS0FBQUwsTUFBQSxDQUFBa0MsSUFBQSxDQUFBN0IsS0FBQSxlQUFBNEMsV0FBQSxDQUFBRSxPQUFBLENBQUE5QyxLQUFBLENBQUFtRCxPQUFBLEVBQUFDLElBQUEsV0FBQXBELEtBQUEsSUFBQTZDLE1BQUEsU0FBQTdDLEtBQUEsRUFBQThDLE9BQUEsRUFBQUMsTUFBQSxnQkFBQWxDLEdBQUEsSUFBQWdDLE1BQUEsVUFBQWhDLEdBQUEsRUFBQWlDLE9BQUEsRUFBQUMsTUFBQSxRQUFBSCxXQUFBLENBQUFFLE9BQUEsQ0FBQTlDLEtBQUEsRUFBQW9ELElBQUEsV0FBQUMsU0FBQSxJQUFBSixNQUFBLENBQUFqRCxLQUFBLEdBQUFxRCxTQUFBLEVBQUFQLE9BQUEsQ0FBQUcsTUFBQSxnQkFBQUssS0FBQSxXQUFBVCxNQUFBLFVBQUFTLEtBQUEsRUFBQVIsT0FBQSxFQUFBQyxNQUFBLFNBQUFBLE1BQUEsQ0FBQUMsTUFBQSxDQUFBcEIsR0FBQSxTQUFBMkIsZUFBQSxFQUFBMUQsY0FBQSxvQkFBQUcsS0FBQSxXQUFBQSxNQUFBeUMsTUFBQSxFQUFBYixHQUFBLGFBQUE0QiwyQkFBQSxlQUFBWixXQUFBLFdBQUFFLE9BQUEsRUFBQUMsTUFBQSxJQUFBRixNQUFBLENBQUFKLE1BQUEsRUFBQWIsR0FBQSxFQUFBa0IsT0FBQSxFQUFBQyxNQUFBLGdCQUFBUSxlQUFBLEdBQUFBLGVBQUEsR0FBQUEsZUFBQSxDQUFBSCxJQUFBLENBQUFJLDBCQUFBLEVBQUFBLDBCQUFBLElBQUFBLDBCQUFBLHFCQUFBL0IsaUJBQUFWLE9BQUEsRUFBQUUsSUFBQSxFQUFBTSxPQUFBLFFBQUFrQyxLQUFBLHNDQUFBaEIsTUFBQSxFQUFBYixHQUFBLHdCQUFBNkIsS0FBQSxZQUFBQyxLQUFBLHNEQUFBRCxLQUFBLG9CQUFBaEIsTUFBQSxRQUFBYixHQUFBLFNBQUErQixVQUFBLFdBQUFwQyxPQUFBLENBQUFrQixNQUFBLEdBQUFBLE1BQUEsRUFBQWxCLE9BQUEsQ0FBQUssR0FBQSxHQUFBQSxHQUFBLFVBQUFnQyxRQUFBLEdBQUFyQyxPQUFBLENBQUFxQyxRQUFBLE1BQUFBLFFBQUEsUUFBQUMsY0FBQSxHQUFBQyxtQkFBQSxDQUFBRixRQUFBLEVBQUFyQyxPQUFBLE9BQUFzQyxjQUFBLFFBQUFBLGNBQUEsS0FBQS9CLGdCQUFBLG1CQUFBK0IsY0FBQSxxQkFBQXRDLE9BQUEsQ0FBQWtCLE1BQUEsRUFBQWxCLE9BQUEsQ0FBQXdDLElBQUEsR0FBQXhDLE9BQUEsQ0FBQXlDLEtBQUEsR0FBQXpDLE9BQUEsQ0FBQUssR0FBQSxzQkFBQUwsT0FBQSxDQUFBa0IsTUFBQSw2QkFBQWdCLEtBQUEsUUFBQUEsS0FBQSxnQkFBQWxDLE9BQUEsQ0FBQUssR0FBQSxFQUFBTCxPQUFBLENBQUEwQyxpQkFBQSxDQUFBMUMsT0FBQSxDQUFBSyxHQUFBLHVCQUFBTCxPQUFBLENBQUFrQixNQUFBLElBQUFsQixPQUFBLENBQUEyQyxNQUFBLFdBQUEzQyxPQUFBLENBQUFLLEdBQUEsR0FBQTZCLEtBQUEsb0JBQUFULE1BQUEsR0FBQXRCLFFBQUEsQ0FBQVgsT0FBQSxFQUFBRSxJQUFBLEVBQUFNLE9BQUEsb0JBQUF5QixNQUFBLENBQUEvRCxJQUFBLFFBQUF3RSxLQUFBLEdBQUFsQyxPQUFBLENBQUE0QyxJQUFBLG1DQUFBbkIsTUFBQSxDQUFBcEIsR0FBQSxLQUFBRSxnQkFBQSxxQkFBQTlCLEtBQUEsRUFBQWdELE1BQUEsQ0FBQXBCLEdBQUEsRUFBQXVDLElBQUEsRUFBQTVDLE9BQUEsQ0FBQTRDLElBQUEsa0JBQUFuQixNQUFBLENBQUEvRCxJQUFBLEtBQUF3RSxLQUFBLGdCQUFBbEMsT0FBQSxDQUFBa0IsTUFBQSxZQUFBbEIsT0FBQSxDQUFBSyxHQUFBLEdBQUFvQixNQUFBLENBQUFwQixHQUFBLG1CQUFBa0Msb0JBQUFGLFFBQUEsRUFBQXJDLE9BQUEsUUFBQTZDLFVBQUEsR0FBQTdDLE9BQUEsQ0FBQWtCLE1BQUEsRUFBQUEsTUFBQSxHQUFBbUIsUUFBQSxDQUFBeEQsUUFBQSxDQUFBZ0UsVUFBQSxPQUFBQyxTQUFBLEtBQUE1QixNQUFBLFNBQUFsQixPQUFBLENBQUFxQyxRQUFBLHFCQUFBUSxVQUFBLElBQUFSLFFBQUEsQ0FBQXhELFFBQUEsZUFBQW1CLE9BQUEsQ0FBQWtCLE1BQUEsYUFBQWxCLE9BQUEsQ0FBQUssR0FBQSxHQUFBeUMsU0FBQSxFQUFBUCxtQkFBQSxDQUFBRixRQUFBLEVBQUFyQyxPQUFBLGVBQUFBLE9BQUEsQ0FBQWtCLE1BQUEsa0JBQUEyQixVQUFBLEtBQUE3QyxPQUFBLENBQUFrQixNQUFBLFlBQUFsQixPQUFBLENBQUFLLEdBQUEsT0FBQTBDLFNBQUEsdUNBQUFGLFVBQUEsaUJBQUF0QyxnQkFBQSxNQUFBa0IsTUFBQSxHQUFBdEIsUUFBQSxDQUFBZSxNQUFBLEVBQUFtQixRQUFBLENBQUF4RCxRQUFBLEVBQUFtQixPQUFBLENBQUFLLEdBQUEsbUJBQUFvQixNQUFBLENBQUEvRCxJQUFBLFNBQUFzQyxPQUFBLENBQUFrQixNQUFBLFlBQUFsQixPQUFBLENBQUFLLEdBQUEsR0FBQW9CLE1BQUEsQ0FBQXBCLEdBQUEsRUFBQUwsT0FBQSxDQUFBcUMsUUFBQSxTQUFBOUIsZ0JBQUEsTUFBQXlDLElBQUEsR0FBQXZCLE1BQUEsQ0FBQXBCLEdBQUEsU0FBQTJDLElBQUEsR0FBQUEsSUFBQSxDQUFBSixJQUFBLElBQUE1QyxPQUFBLENBQUFxQyxRQUFBLENBQUFZLFVBQUEsSUFBQUQsSUFBQSxDQUFBdkUsS0FBQSxFQUFBdUIsT0FBQSxDQUFBa0QsSUFBQSxHQUFBYixRQUFBLENBQUFjLE9BQUEsZUFBQW5ELE9BQUEsQ0FBQWtCLE1BQUEsS0FBQWxCLE9BQUEsQ0FBQWtCLE1BQUEsV0FBQWxCLE9BQUEsQ0FBQUssR0FBQSxHQUFBeUMsU0FBQSxHQUFBOUMsT0FBQSxDQUFBcUMsUUFBQSxTQUFBOUIsZ0JBQUEsSUFBQXlDLElBQUEsSUFBQWhELE9BQUEsQ0FBQWtCLE1BQUEsWUFBQWxCLE9BQUEsQ0FBQUssR0FBQSxPQUFBMEMsU0FBQSxzQ0FBQS9DLE9BQUEsQ0FBQXFDLFFBQUEsU0FBQTlCLGdCQUFBLGNBQUE2QyxhQUFBQyxJQUFBLFFBQUFDLEtBQUEsS0FBQUMsTUFBQSxFQUFBRixJQUFBLFlBQUFBLElBQUEsS0FBQUMsS0FBQSxDQUFBRSxRQUFBLEdBQUFILElBQUEsV0FBQUEsSUFBQSxLQUFBQyxLQUFBLENBQUFHLFVBQUEsR0FBQUosSUFBQSxLQUFBQyxLQUFBLENBQUFJLFFBQUEsR0FBQUwsSUFBQSxXQUFBTSxVQUFBLENBQUFDLElBQUEsQ0FBQU4sS0FBQSxjQUFBTyxjQUFBUCxLQUFBLFFBQUE3QixNQUFBLEdBQUE2QixLQUFBLENBQUFRLFVBQUEsUUFBQXJDLE1BQUEsQ0FBQS9ELElBQUEsb0JBQUErRCxNQUFBLENBQUFwQixHQUFBLEVBQUFpRCxLQUFBLENBQUFRLFVBQUEsR0FBQXJDLE1BQUEsYUFBQXhCLFFBQUFOLFdBQUEsU0FBQWdFLFVBQUEsTUFBQUosTUFBQSxhQUFBNUQsV0FBQSxDQUFBc0IsT0FBQSxDQUFBbUMsWUFBQSxjQUFBVyxLQUFBLGlCQUFBakQsT0FBQWtELFFBQUEsUUFBQUEsUUFBQSxRQUFBQyxjQUFBLEdBQUFELFFBQUEsQ0FBQXBGLGNBQUEsT0FBQXFGLGNBQUEsU0FBQUEsY0FBQSxDQUFBM0QsSUFBQSxDQUFBMEQsUUFBQSw0QkFBQUEsUUFBQSxDQUFBZCxJQUFBLFNBQUFjLFFBQUEsT0FBQUUsS0FBQSxDQUFBRixRQUFBLENBQUFHLE1BQUEsU0FBQUMsQ0FBQSxPQUFBbEIsSUFBQSxZQUFBQSxLQUFBLGFBQUFrQixDQUFBLEdBQUFKLFFBQUEsQ0FBQUcsTUFBQSxPQUFBL0YsTUFBQSxDQUFBa0MsSUFBQSxDQUFBMEQsUUFBQSxFQUFBSSxDQUFBLFVBQUFsQixJQUFBLENBQUF6RSxLQUFBLEdBQUF1RixRQUFBLENBQUFJLENBQUEsR0FBQWxCLElBQUEsQ0FBQU4sSUFBQSxPQUFBTSxJQUFBLFNBQUFBLElBQUEsQ0FBQXpFLEtBQUEsR0FBQXFFLFNBQUEsRUFBQUksSUFBQSxDQUFBTixJQUFBLE9BQUFNLElBQUEsWUFBQUEsSUFBQSxDQUFBQSxJQUFBLEdBQUFBLElBQUEsZUFBQUEsSUFBQSxFQUFBZCxVQUFBLGVBQUFBLFdBQUEsYUFBQTNELEtBQUEsRUFBQXFFLFNBQUEsRUFBQUYsSUFBQSxpQkFBQXBDLGlCQUFBLENBQUFyQyxTQUFBLEdBQUFzQywwQkFBQSxFQUFBbkMsY0FBQSxDQUFBeUMsRUFBQSxtQkFBQXRDLEtBQUEsRUFBQWdDLDBCQUFBLEVBQUFyQixZQUFBLFNBQUFkLGNBQUEsQ0FBQW1DLDBCQUFBLG1CQUFBaEMsS0FBQSxFQUFBK0IsaUJBQUEsRUFBQXBCLFlBQUEsU0FBQW9CLGlCQUFBLENBQUE2RCxXQUFBLEdBQUFuRixNQUFBLENBQUF1QiwwQkFBQSxFQUFBekIsaUJBQUEsd0JBQUFoQixPQUFBLENBQUFzRyxtQkFBQSxhQUFBQyxNQUFBLFFBQUFDLElBQUEsd0JBQUFELE1BQUEsSUFBQUEsTUFBQSxDQUFBRSxXQUFBLFdBQUFELElBQUEsS0FBQUEsSUFBQSxLQUFBaEUsaUJBQUEsNkJBQUFnRSxJQUFBLENBQUFILFdBQUEsSUFBQUcsSUFBQSxDQUFBM0gsSUFBQSxPQUFBbUIsT0FBQSxDQUFBMEcsSUFBQSxhQUFBSCxNQUFBLFdBQUFyRyxNQUFBLENBQUF5RyxjQUFBLEdBQUF6RyxNQUFBLENBQUF5RyxjQUFBLENBQUFKLE1BQUEsRUFBQTlELDBCQUFBLEtBQUE4RCxNQUFBLENBQUFLLFNBQUEsR0FBQW5FLDBCQUFBLEVBQUF2QixNQUFBLENBQUFxRixNQUFBLEVBQUF2RixpQkFBQSx5QkFBQXVGLE1BQUEsQ0FBQXBHLFNBQUEsR0FBQUQsTUFBQSxDQUFBNkIsTUFBQSxDQUFBZ0IsRUFBQSxHQUFBd0QsTUFBQSxLQUFBdkcsT0FBQSxDQUFBNkcsS0FBQSxhQUFBeEUsR0FBQSxhQUFBdUIsT0FBQSxFQUFBdkIsR0FBQSxPQUFBVyxxQkFBQSxDQUFBSSxhQUFBLENBQUFqRCxTQUFBLEdBQUFlLE1BQUEsQ0FBQWtDLGFBQUEsQ0FBQWpELFNBQUEsRUFBQVcsbUJBQUEsaUNBQUFkLE9BQUEsQ0FBQW9ELGFBQUEsR0FBQUEsYUFBQSxFQUFBcEQsT0FBQSxDQUFBOEcsS0FBQSxhQUFBdEYsT0FBQSxFQUFBQyxPQUFBLEVBQUFDLElBQUEsRUFBQUMsV0FBQSxFQUFBMEIsV0FBQSxlQUFBQSxXQUFBLEtBQUFBLFdBQUEsR0FBQTBELE9BQUEsT0FBQUMsSUFBQSxPQUFBNUQsYUFBQSxDQUFBN0IsSUFBQSxDQUFBQyxPQUFBLEVBQUFDLE9BQUEsRUFBQUMsSUFBQSxFQUFBQyxXQUFBLEdBQUEwQixXQUFBLFVBQUFyRCxPQUFBLENBQUFzRyxtQkFBQSxDQUFBN0UsT0FBQSxJQUFBdUYsSUFBQSxHQUFBQSxJQUFBLENBQUE5QixJQUFBLEdBQUFyQixJQUFBLFdBQUFILE1BQUEsV0FBQUEsTUFBQSxDQUFBa0IsSUFBQSxHQUFBbEIsTUFBQSxDQUFBakQsS0FBQSxHQUFBdUcsSUFBQSxDQUFBOUIsSUFBQSxXQUFBbEMscUJBQUEsQ0FBQUQsRUFBQSxHQUFBN0IsTUFBQSxDQUFBNkIsRUFBQSxFQUFBL0IsaUJBQUEsZ0JBQUFFLE1BQUEsQ0FBQTZCLEVBQUEsRUFBQW5DLGNBQUEsaUNBQUFNLE1BQUEsQ0FBQTZCLEVBQUEsNkRBQUEvQyxPQUFBLENBQUFpSCxJQUFBLGFBQUFDLEdBQUEsUUFBQUMsTUFBQSxHQUFBakgsTUFBQSxDQUFBZ0gsR0FBQSxHQUFBRCxJQUFBLGdCQUFBdEgsR0FBQSxJQUFBd0gsTUFBQSxFQUFBRixJQUFBLENBQUFyQixJQUFBLENBQUFqRyxHQUFBLFVBQUFzSCxJQUFBLENBQUFHLE9BQUEsYUFBQWxDLEtBQUEsV0FBQStCLElBQUEsQ0FBQWQsTUFBQSxTQUFBeEcsR0FBQSxHQUFBc0gsSUFBQSxDQUFBSSxHQUFBLFFBQUExSCxHQUFBLElBQUF3SCxNQUFBLFNBQUFqQyxJQUFBLENBQUF6RSxLQUFBLEdBQUFkLEdBQUEsRUFBQXVGLElBQUEsQ0FBQU4sSUFBQSxPQUFBTSxJQUFBLFdBQUFBLElBQUEsQ0FBQU4sSUFBQSxPQUFBTSxJQUFBLFFBQUFsRixPQUFBLENBQUE4QyxNQUFBLEdBQUFBLE1BQUEsRUFBQWIsT0FBQSxDQUFBOUIsU0FBQSxLQUFBc0csV0FBQSxFQUFBeEUsT0FBQSxFQUFBOEQsS0FBQSxXQUFBQSxNQUFBdUIsYUFBQSxhQUFBQyxJQUFBLFdBQUFyQyxJQUFBLFdBQUFWLElBQUEsUUFBQUMsS0FBQSxHQUFBSyxTQUFBLE9BQUFGLElBQUEsWUFBQVAsUUFBQSxjQUFBbkIsTUFBQSxnQkFBQWIsR0FBQSxHQUFBeUMsU0FBQSxPQUFBYSxVQUFBLENBQUExQyxPQUFBLENBQUE0QyxhQUFBLElBQUF5QixhQUFBLFdBQUF6SSxJQUFBLGtCQUFBQSxJQUFBLENBQUEySSxNQUFBLE9BQUFwSCxNQUFBLENBQUFrQyxJQUFBLE9BQUF6RCxJQUFBLE1BQUFxSCxLQUFBLEVBQUFySCxJQUFBLENBQUE0SSxLQUFBLGNBQUE1SSxJQUFBLElBQUFpRyxTQUFBLE1BQUE0QyxJQUFBLFdBQUFBLEtBQUEsU0FBQTlDLElBQUEsV0FBQStDLFVBQUEsUUFBQWhDLFVBQUEsSUFBQUcsVUFBQSxrQkFBQTZCLFVBQUEsQ0FBQWpJLElBQUEsUUFBQWlJLFVBQUEsQ0FBQXRGLEdBQUEsY0FBQXVGLElBQUEsS0FBQWxELGlCQUFBLFdBQUFBLGtCQUFBbUQsU0FBQSxhQUFBakQsSUFBQSxRQUFBaUQsU0FBQSxNQUFBN0YsT0FBQSxrQkFBQThGLE9BQUFDLEdBQUEsRUFBQUMsTUFBQSxXQUFBdkUsTUFBQSxDQUFBL0QsSUFBQSxZQUFBK0QsTUFBQSxDQUFBcEIsR0FBQSxHQUFBd0YsU0FBQSxFQUFBN0YsT0FBQSxDQUFBa0QsSUFBQSxHQUFBNkMsR0FBQSxFQUFBQyxNQUFBLEtBQUFoRyxPQUFBLENBQUFrQixNQUFBLFdBQUFsQixPQUFBLENBQUFLLEdBQUEsR0FBQXlDLFNBQUEsS0FBQWtELE1BQUEsYUFBQTVCLENBQUEsUUFBQVQsVUFBQSxDQUFBUSxNQUFBLE1BQUFDLENBQUEsU0FBQUEsQ0FBQSxRQUFBZCxLQUFBLFFBQUFLLFVBQUEsQ0FBQVMsQ0FBQSxHQUFBM0MsTUFBQSxHQUFBNkIsS0FBQSxDQUFBUSxVQUFBLGlCQUFBUixLQUFBLENBQUFDLE1BQUEsU0FBQXVDLE1BQUEsYUFBQXhDLEtBQUEsQ0FBQUMsTUFBQSxTQUFBZ0MsSUFBQSxRQUFBVSxRQUFBLEdBQUE3SCxNQUFBLENBQUFrQyxJQUFBLENBQUFnRCxLQUFBLGVBQUE0QyxVQUFBLEdBQUE5SCxNQUFBLENBQUFrQyxJQUFBLENBQUFnRCxLQUFBLHFCQUFBMkMsUUFBQSxJQUFBQyxVQUFBLGFBQUFYLElBQUEsR0FBQWpDLEtBQUEsQ0FBQUUsUUFBQSxTQUFBc0MsTUFBQSxDQUFBeEMsS0FBQSxDQUFBRSxRQUFBLGdCQUFBK0IsSUFBQSxHQUFBakMsS0FBQSxDQUFBRyxVQUFBLFNBQUFxQyxNQUFBLENBQUF4QyxLQUFBLENBQUFHLFVBQUEsY0FBQXdDLFFBQUEsYUFBQVYsSUFBQSxHQUFBakMsS0FBQSxDQUFBRSxRQUFBLFNBQUFzQyxNQUFBLENBQUF4QyxLQUFBLENBQUFFLFFBQUEscUJBQUEwQyxVQUFBLFlBQUEvRCxLQUFBLHFEQUFBb0QsSUFBQSxHQUFBakMsS0FBQSxDQUFBRyxVQUFBLFNBQUFxQyxNQUFBLENBQUF4QyxLQUFBLENBQUFHLFVBQUEsWUFBQWQsTUFBQSxXQUFBQSxPQUFBakYsSUFBQSxFQUFBMkMsR0FBQSxhQUFBK0QsQ0FBQSxRQUFBVCxVQUFBLENBQUFRLE1BQUEsTUFBQUMsQ0FBQSxTQUFBQSxDQUFBLFFBQUFkLEtBQUEsUUFBQUssVUFBQSxDQUFBUyxDQUFBLE9BQUFkLEtBQUEsQ0FBQUMsTUFBQSxTQUFBZ0MsSUFBQSxJQUFBbkgsTUFBQSxDQUFBa0MsSUFBQSxDQUFBZ0QsS0FBQSx3QkFBQWlDLElBQUEsR0FBQWpDLEtBQUEsQ0FBQUcsVUFBQSxRQUFBMEMsWUFBQSxHQUFBN0MsS0FBQSxhQUFBNkMsWUFBQSxpQkFBQXpJLElBQUEsbUJBQUFBLElBQUEsS0FBQXlJLFlBQUEsQ0FBQTVDLE1BQUEsSUFBQWxELEdBQUEsSUFBQUEsR0FBQSxJQUFBOEYsWUFBQSxDQUFBMUMsVUFBQSxLQUFBMEMsWUFBQSxjQUFBMUUsTUFBQSxHQUFBMEUsWUFBQSxHQUFBQSxZQUFBLENBQUFyQyxVQUFBLGNBQUFyQyxNQUFBLENBQUEvRCxJQUFBLEdBQUFBLElBQUEsRUFBQStELE1BQUEsQ0FBQXBCLEdBQUEsR0FBQUEsR0FBQSxFQUFBOEYsWUFBQSxTQUFBakYsTUFBQSxnQkFBQWdDLElBQUEsR0FBQWlELFlBQUEsQ0FBQTFDLFVBQUEsRUFBQWxELGdCQUFBLFNBQUE2RixRQUFBLENBQUEzRSxNQUFBLE1BQUEyRSxRQUFBLFdBQUFBLFNBQUEzRSxNQUFBLEVBQUFpQyxRQUFBLG9CQUFBakMsTUFBQSxDQUFBL0QsSUFBQSxRQUFBK0QsTUFBQSxDQUFBcEIsR0FBQSxxQkFBQW9CLE1BQUEsQ0FBQS9ELElBQUEsbUJBQUErRCxNQUFBLENBQUEvRCxJQUFBLFFBQUF3RixJQUFBLEdBQUF6QixNQUFBLENBQUFwQixHQUFBLGdCQUFBb0IsTUFBQSxDQUFBL0QsSUFBQSxTQUFBa0ksSUFBQSxRQUFBdkYsR0FBQSxHQUFBb0IsTUFBQSxDQUFBcEIsR0FBQSxPQUFBYSxNQUFBLGtCQUFBZ0MsSUFBQSx5QkFBQXpCLE1BQUEsQ0FBQS9ELElBQUEsSUFBQWdHLFFBQUEsVUFBQVIsSUFBQSxHQUFBUSxRQUFBLEdBQUFuRCxnQkFBQSxLQUFBOEYsTUFBQSxXQUFBQSxPQUFBNUMsVUFBQSxhQUFBVyxDQUFBLFFBQUFULFVBQUEsQ0FBQVEsTUFBQSxNQUFBQyxDQUFBLFNBQUFBLENBQUEsUUFBQWQsS0FBQSxRQUFBSyxVQUFBLENBQUFTLENBQUEsT0FBQWQsS0FBQSxDQUFBRyxVQUFBLEtBQUFBLFVBQUEsY0FBQTJDLFFBQUEsQ0FBQTlDLEtBQUEsQ0FBQVEsVUFBQSxFQUFBUixLQUFBLENBQUFJLFFBQUEsR0FBQUcsYUFBQSxDQUFBUCxLQUFBLEdBQUEvQyxnQkFBQSx5QkFBQStGLE9BQUEvQyxNQUFBLGFBQUFhLENBQUEsUUFBQVQsVUFBQSxDQUFBUSxNQUFBLE1BQUFDLENBQUEsU0FBQUEsQ0FBQSxRQUFBZCxLQUFBLFFBQUFLLFVBQUEsQ0FBQVMsQ0FBQSxPQUFBZCxLQUFBLENBQUFDLE1BQUEsS0FBQUEsTUFBQSxRQUFBOUIsTUFBQSxHQUFBNkIsS0FBQSxDQUFBUSxVQUFBLGtCQUFBckMsTUFBQSxDQUFBL0QsSUFBQSxRQUFBNkksTUFBQSxHQUFBOUUsTUFBQSxDQUFBcEIsR0FBQSxFQUFBd0QsYUFBQSxDQUFBUCxLQUFBLFlBQUFpRCxNQUFBLGdCQUFBcEUsS0FBQSw4QkFBQXFFLGFBQUEsV0FBQUEsY0FBQXhDLFFBQUEsRUFBQWYsVUFBQSxFQUFBRSxPQUFBLGdCQUFBZCxRQUFBLEtBQUF4RCxRQUFBLEVBQUFpQyxNQUFBLENBQUFrRCxRQUFBLEdBQUFmLFVBQUEsRUFBQUEsVUFBQSxFQUFBRSxPQUFBLEVBQUFBLE9BQUEsb0JBQUFqQyxNQUFBLFVBQUFiLEdBQUEsR0FBQXlDLFNBQUEsR0FBQXZDLGdCQUFBLE9BQUF2QyxPQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUFBeUksbUJBQUFDLEdBQUEsRUFBQW5GLE9BQUEsRUFBQUMsTUFBQSxFQUFBbUYsS0FBQSxFQUFBQyxNQUFBLEVBQUFqSixHQUFBLEVBQUEwQyxHQUFBLGNBQUEyQyxJQUFBLEdBQUEwRCxHQUFBLENBQUEvSSxHQUFBLEVBQUEwQyxHQUFBLE9BQUE1QixLQUFBLEdBQUF1RSxJQUFBLENBQUF2RSxLQUFBLFdBQUFzRCxLQUFBLElBQUFQLE1BQUEsQ0FBQU8sS0FBQSxpQkFBQWlCLElBQUEsQ0FBQUosSUFBQSxJQUFBckIsT0FBQSxDQUFBOUMsS0FBQSxZQUFBc0csT0FBQSxDQUFBeEQsT0FBQSxDQUFBOUMsS0FBQSxFQUFBb0QsSUFBQSxDQUFBOEUsS0FBQSxFQUFBQyxNQUFBO0FBQUEsU0FBQUMsa0JBQUF6RyxFQUFBLDZCQUFBVixJQUFBLFNBQUFvSCxJQUFBLEdBQUFDLFNBQUEsYUFBQWhDLE9BQUEsV0FBQXhELE9BQUEsRUFBQUMsTUFBQSxRQUFBa0YsR0FBQSxHQUFBdEcsRUFBQSxDQUFBNEcsS0FBQSxDQUFBdEgsSUFBQSxFQUFBb0gsSUFBQSxZQUFBSCxNQUFBbEksS0FBQSxJQUFBZ0ksa0JBQUEsQ0FBQUMsR0FBQSxFQUFBbkYsT0FBQSxFQUFBQyxNQUFBLEVBQUFtRixLQUFBLEVBQUFDLE1BQUEsVUFBQW5JLEtBQUEsY0FBQW1JLE9BQUF0SCxHQUFBLElBQUFtSCxrQkFBQSxDQUFBQyxHQUFBLEVBQUFuRixPQUFBLEVBQUFDLE1BQUEsRUFBQW1GLEtBQUEsRUFBQUMsTUFBQSxXQUFBdEgsR0FBQSxLQUFBcUgsS0FBQSxDQUFBN0QsU0FBQTtBQUFBLFNBQUFtRSxlQUFBQyxHQUFBLEVBQUE5QyxDQUFBLFdBQUErQyxlQUFBLENBQUFELEdBQUEsS0FBQUUscUJBQUEsQ0FBQUYsR0FBQSxFQUFBOUMsQ0FBQSxLQUFBaUQsMkJBQUEsQ0FBQUgsR0FBQSxFQUFBOUMsQ0FBQSxLQUFBa0QsZ0JBQUE7QUFBQSxTQUFBQSxpQkFBQSxjQUFBdkUsU0FBQTtBQUFBLFNBQUFzRSw0QkFBQUUsQ0FBQSxFQUFBQyxNQUFBLFNBQUFELENBQUEscUJBQUFBLENBQUEsc0JBQUFFLGlCQUFBLENBQUFGLENBQUEsRUFBQUMsTUFBQSxPQUFBRSxDQUFBLEdBQUF4SixNQUFBLENBQUFDLFNBQUEsQ0FBQXdKLFFBQUEsQ0FBQXJILElBQUEsQ0FBQWlILENBQUEsRUFBQTlCLEtBQUEsYUFBQWlDLENBQUEsaUJBQUFILENBQUEsQ0FBQTlDLFdBQUEsRUFBQWlELENBQUEsR0FBQUgsQ0FBQSxDQUFBOUMsV0FBQSxDQUFBNUgsSUFBQSxNQUFBNkssQ0FBQSxjQUFBQSxDQUFBLG1CQUFBRSxLQUFBLENBQUFDLElBQUEsQ0FBQU4sQ0FBQSxPQUFBRyxDQUFBLCtEQUFBSSxJQUFBLENBQUFKLENBQUEsVUFBQUQsaUJBQUEsQ0FBQUYsQ0FBQSxFQUFBQyxNQUFBO0FBQUEsU0FBQUMsa0JBQUFQLEdBQUEsRUFBQWEsR0FBQSxRQUFBQSxHQUFBLFlBQUFBLEdBQUEsR0FBQWIsR0FBQSxDQUFBL0MsTUFBQSxFQUFBNEQsR0FBQSxHQUFBYixHQUFBLENBQUEvQyxNQUFBLFdBQUFDLENBQUEsTUFBQTRELElBQUEsT0FBQUosS0FBQSxDQUFBRyxHQUFBLEdBQUEzRCxDQUFBLEdBQUEyRCxHQUFBLEVBQUEzRCxDQUFBLElBQUE0RCxJQUFBLENBQUE1RCxDQUFBLElBQUE4QyxHQUFBLENBQUE5QyxDQUFBLFVBQUE0RCxJQUFBO0FBQUEsU0FBQVosc0JBQUFGLEdBQUEsRUFBQTlDLENBQUEsUUFBQTZELEVBQUEsV0FBQWYsR0FBQSxnQ0FBQXZJLE1BQUEsSUFBQXVJLEdBQUEsQ0FBQXZJLE1BQUEsQ0FBQUUsUUFBQSxLQUFBcUksR0FBQSw0QkFBQWUsRUFBQSxRQUFBQyxFQUFBLEVBQUFDLEVBQUEsRUFBQUMsRUFBQSxFQUFBQyxFQUFBLEVBQUFDLElBQUEsT0FBQUMsRUFBQSxPQUFBQyxFQUFBLGlCQUFBSixFQUFBLElBQUFILEVBQUEsR0FBQUEsRUFBQSxDQUFBM0gsSUFBQSxDQUFBNEcsR0FBQSxHQUFBaEUsSUFBQSxRQUFBa0IsQ0FBQSxRQUFBbEcsTUFBQSxDQUFBK0osRUFBQSxNQUFBQSxFQUFBLFVBQUFNLEVBQUEsdUJBQUFBLEVBQUEsSUFBQUwsRUFBQSxHQUFBRSxFQUFBLENBQUE5SCxJQUFBLENBQUEySCxFQUFBLEdBQUFyRixJQUFBLE1BQUEwRixJQUFBLENBQUExRSxJQUFBLENBQUFzRSxFQUFBLENBQUF6SixLQUFBLEdBQUE2SixJQUFBLENBQUFuRSxNQUFBLEtBQUFDLENBQUEsR0FBQW1FLEVBQUEsaUJBQUFqSixHQUFBLElBQUFrSixFQUFBLE9BQUFMLEVBQUEsR0FBQTdJLEdBQUEseUJBQUFpSixFQUFBLFlBQUFOLEVBQUEsZUFBQUksRUFBQSxHQUFBSixFQUFBLGNBQUEvSixNQUFBLENBQUFtSyxFQUFBLE1BQUFBLEVBQUEsMkJBQUFHLEVBQUEsUUFBQUwsRUFBQSxhQUFBRyxJQUFBO0FBQUEsU0FBQW5CLGdCQUFBRCxHQUFBLFFBQUFVLEtBQUEsQ0FBQWEsT0FBQSxDQUFBdkIsR0FBQSxVQUFBQSxHQUFBO0FBRCtEO0FBQ2lDO0FBQ3RFO0FBQ2tDO0FBQ0Y7QUFDQTtBQUM4QjtBQUM3QjtBQUMvQjtBQUNtQjtBQUcvQyxJQUFNZ0csTUFBTSxHQUFHTCx3Q0FDTixDQUFDO0VBQ052UCxPQUFPLEVBQUV1UCx3Q0FBVSxFQUFFLENBQUNPLEdBQUcsQ0FBQyxHQUFHLEVBQUV2RCwyQ0FBQyxDQUFDLG1CQUFtQixFQUFFO0lBQUN3RCxFQUFFLEVBQUUsYUFBYTtJQUFFRCxHQUFHLEVBQUU7RUFBRyxDQUFDLENBQUMsQ0FBQyxDQUFDRSxRQUFRLEVBQUU7RUFDaEdDLFVBQVUsRUFBRVYsc0NBQVEsRUFBRSxDQUFDWSxNQUFNLENBQUM1RCwyQ0FBQyxDQUFDLHNCQUFzQixFQUFFO0lBQUN3RCxFQUFFLEVBQUU7RUFBYSxDQUFDLENBQUMsQ0FBQyxDQUFDQyxRQUFRO0FBQ3hGLENBQUMsQ0FBQyxDQUNEQSxRQUFRLEVBQUU7QUFHTixJQUFNSSxXQUFXLEdBQUcsU0FBZEEsV0FBV0EsQ0FBQTVSLElBQUEsRUFBK0I7RUFBQSxJQUFBNlIsZUFBQTtFQUFBLElBQTFCQyxhQUFhLEdBQUE5UixJQUFBLENBQWI4UixhQUFhO0lBQUVuQixLQUFLLEdBQUEzUSxJQUFBLENBQUwyUSxLQUFLO0VBQzdDLElBQUE3QyxlQUFBLEdBQVlSLDhEQUFjLENBQUMsVUFBVSxDQUFDO0lBQS9CUyxDQUFDLEdBQUFELGVBQUEsQ0FBREMsQ0FBQztFQUVSLElBQUFnRSxxQkFBQSxHQUFzRmpCLDhGQUFxQixDQUFDTSxNQUFNLEVBQUU7TUFDaEg1UCxPQUFPLEVBQUUsRUFBRTtNQUNYaVEsVUFBVSxFQUFFO0lBQ2hCLENBQUMsQ0FBQztJQUhNTyxRQUFRLEdBQUFELHFCQUFBLENBQVJDLFFBQVE7SUFBRUMsWUFBWSxHQUFBRixxQkFBQSxDQUFaRSxZQUFZO0lBQUVDLE1BQU0sR0FBQUgscUJBQUEsQ0FBTkcsTUFBTTtJQUFFQyxZQUFZLEdBQUFKLHFCQUFBLENBQVpJLFlBQVk7SUFBRUMsT0FBTyxHQUFBTCxxQkFBQSxDQUFQSyxPQUFPO0lBQUVDLFFBQVEsR0FBQU4scUJBQUEsQ0FBUk0sUUFBUTtJQUFFQyxRQUFRLEdBQUFQLHFCQUFBLENBQVJPLFFBQVE7RUFLakYsSUFBTUMsYUFBYSxHQUFHMUIsa0RBQVUsQ0FBQ0ssa0ZBQW9CLENBQUM7RUFDdEQsSUFBQTdDLFNBQUEsR0FBZ0N2QixnREFBUSxDQUFDLEtBQUssQ0FBQztJQUFBd0IsVUFBQSxHQUFBbkQsY0FBQSxDQUFBa0QsU0FBQTtJQUF4Q2hOLFNBQVMsR0FBQWlOLFVBQUE7SUFBRUMsVUFBVSxHQUFBRCxVQUFBO0VBRTVCLElBQU1rRSxRQUFRO0lBQUEsSUFBQS9ELEtBQUEsR0FBQTFELGlCQUFBLGVBQUE5SSxtQkFBQSxHQUFBMkcsSUFBQSxDQUFHLFNBQUE4RixRQUFNK0QsUUFBUTtNQUFBLE9BQUF4USxtQkFBQSxHQUFBd0IsSUFBQSxVQUFBb0wsU0FBQUMsUUFBQTtRQUFBLGtCQUFBQSxRQUFBLENBQUFyRixJQUFBLEdBQUFxRixRQUFBLENBQUExSCxJQUFBO1VBQUE7WUFBQSxLQUN4Qi9GLFNBQVM7Y0FBQXlOLFFBQUEsQ0FBQTFILElBQUE7Y0FBQTtZQUFBO1lBQUEsT0FBQTBILFFBQUEsQ0FBQWpJLE1BQUE7VUFBQTtZQUdaMEgsVUFBVSxDQUFDLElBQUksQ0FBQztZQUFDTyxRQUFBLENBQUFyRixJQUFBO1lBQUFxRixRQUFBLENBQUExSCxJQUFBO1lBQUEsT0FHUDBLLGFBQWEsQ0FBQ1csUUFBUSxDQUFDO1VBQUE7WUFDN0JGLGFBQWEsQ0FBQztjQUNWM1EsSUFBSSxFQUFFLFNBQVM7Y0FDZjhRLE9BQU8sRUFBRTNFLENBQUMsQ0FBQyx3QkFBd0I7WUFDdkMsQ0FBQyxDQUFDO1lBQ0Y0QyxLQUFLLEVBQUU7WUFBQzdCLFFBQUEsQ0FBQTFILElBQUE7WUFBQTtVQUFBO1lBQUEwSCxRQUFBLENBQUFyRixJQUFBO1lBQUFxRixRQUFBLENBQUE2RCxFQUFBLEdBQUE3RCxRQUFBO1lBRVIsSUFBR0EsUUFBQSxDQUFBNkQsRUFBQSxZQUFheEIscURBQVEsRUFBRTtjQUN0Qi9PLE1BQU0sQ0FBQ3dRLE9BQU8sQ0FBQzlELFFBQUEsQ0FBQTZELEVBQUEsQ0FBRVQsTUFBTSxDQUFDLENBQUMvTSxPQUFPLENBQUMsVUFBQTBOLEtBQUEsRUFBc0I7Z0JBQUEsSUFBQUMsS0FBQSxHQUFBM0gsY0FBQSxDQUFBMEgsS0FBQTtrQkFBcEJFLEtBQUssR0FBQUQsS0FBQTtrQkFBRUosT0FBTyxHQUFBSSxLQUFBO2dCQUM3Q1QsUUFBUSxDQUFDVSxLQUFLLEVBQUU7a0JBQUNuUixJQUFJLEVBQUUsUUFBUTtrQkFBRThRLE9BQU8sRUFBRUE7Z0JBQU8sQ0FBQyxDQUFDO2NBQ3ZELENBQUMsQ0FBQztZQUNOLENBQUMsTUFBTTtjQUNISCxhQUFhLENBQUM7Z0JBQ1YzUSxJQUFJLEVBQUUsUUFBUTtnQkFDZDhRLE9BQU8sRUFBRTNFLENBQUMsQ0FBQyx5QkFBeUI7Y0FDeEMsQ0FBQyxDQUFDO1lBQ047VUFBQztZQUVMUSxVQUFVLENBQUMsS0FBSyxDQUFDO1VBQUM7VUFBQTtZQUFBLE9BQUFPLFFBQUEsQ0FBQWxGLElBQUE7UUFBQTtNQUFBLEdBQUE4RSxPQUFBO0lBQUEsQ0FDckI7SUFBQSxnQkExQks4RCxRQUFRQSxDQUFBUSxHQUFBO01BQUEsT0FBQXZFLEtBQUEsQ0FBQXZELEtBQUEsT0FBQUQsU0FBQTtJQUFBO0VBQUEsR0EwQmI7RUFFRCxvQkFDSW5MLDJEQUFBO0lBQU0wUyxRQUFRLEVBQUVQLFlBQVksQ0FBQ08sUUFBUSxDQUFFO0lBQUNyUyxTQUFTLEVBQUM7RUFBc0IsZ0JBRXBFTCwyREFBQSxDQUFDbVIsdURBQVM7SUFBQ3JQLElBQUksRUFBQyxVQUFVO0lBQUN3USxPQUFPLEVBQUVBLE9BQVE7SUFBQ3JSLElBQUksRUFBQyxTQUFTO0lBQUNrRixLQUFLLEdBQUE0TCxlQUFBLEdBQUVLLE1BQU0sQ0FBQzFRLE9BQU8sY0FBQXFRLGVBQUEsdUJBQWRBLGVBQUEsQ0FBZ0JhLE9BQVE7SUFBQ08sU0FBUyxFQUFFO0VBQUksR0FDdEdsRixDQUFDLENBQUMsU0FBUyxDQUFDLEVBQUMsSUFDbEIsQ0FBWSxlQUVaak8sMkRBQUE7SUFBS0ssU0FBUyxFQUFFLGdCQUFnQixJQUFJK1IsTUFBTSxDQUFDVCxVQUFVLEdBQUcsYUFBYSxHQUFFLEVBQUU7RUFBRSxnQkFDdkUzUiwyREFBQSxVQUFBb1QsUUFBQSxLQUFXbEIsUUFBUSxDQUFDLFlBQVksQ0FBQztJQUFFN1IsU0FBUyxFQUFDLGVBQWU7SUFBQzJCLEVBQUUsRUFBQyxZQUFZO0lBQUNGLElBQUksRUFBQztFQUFVLEdBQUcsZUFDL0Y5QiwyREFBQTtJQUFPcVQsT0FBTyxFQUFDLFlBQVk7SUFBQ2hULFNBQVMsRUFBQztFQUFZLGdCQUM5Q0wsMkRBQUE7SUFBS0ssU0FBUyxFQUFDLGlCQUFpQjtJQUFDaVQsSUFBSSxFQUFDLFVBQVU7SUFBQyxtQkFBZ0I7RUFBZ0IsZ0JBQzdFdFQsMkRBQUEsQ0FBQ2tSLHVEQUFTLE9BQUcsQ0FDWCxlQUNObFIsMkRBQUE7SUFBTWdDLEVBQUUsRUFBQztFQUFnQixHQUFFaU0sQ0FBQyxDQUFDLG9CQUFvQixDQUFDLENBQVEsQ0FDdEQsRUFFSm1FLE1BQU0sQ0FBQ1QsVUFBVSxpQkFBSTNSLDJEQUFBO0lBQUtLLFNBQVMsRUFBQztFQUFZLEdBQUUrUixNQUFNLENBQUNULFVBQVUsQ0FBQ2lCLE9BQU8sQ0FBTyxDQUVwRixlQUNONVMsMkRBQUE7SUFBS0ssU0FBUyxFQUFDO0VBQXFCLGdCQUNoQ0wsMkRBQUEsQ0FBQ2tOLHlEQUFVO0lBQUNzRCxlQUFlLEVBQUMsVUFBVTtJQUFDK0MsT0FBTyxFQUFFaFMsU0FBUyxJQUFJOFE7RUFBYSxHQUFFcEUsQ0FBQyxDQUFDLGdCQUFnQixDQUFDLENBQWMsZUFDN0dqTywyREFBQSxDQUFDa04seURBQVU7SUFBQ3NELGVBQWUsRUFBQyxRQUFRO0lBQUNnRCxRQUFRLEVBQUVqUyxTQUFTLElBQUk4USxZQUFhO0lBQUMzQixPQUFPLEVBQUVHO0VBQU0sR0FBRTVDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBYyxDQUNsSCxDQUNIO0FBRWYsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwRndDO0FBQzJCO0FBQ3hCO0FBQ3NCO0FBQ25CO0FBS3hDLElBQU0wRixhQUFhLEdBQUcsU0FBaEJBLGFBQWFBLENBQUF6VCxJQUFBLEVBQTZDO0VBQUEsSUFBeEN5TixZQUFZLEdBQUF6TixJQUFBLENBQVp5TixZQUFZO0lBQUVxRSxhQUFhLEdBQUE5UixJQUFBLENBQWI4UixhQUFhO0lBQUVuQixLQUFLLEdBQUEzUSxJQUFBLENBQUwyUSxLQUFLO0VBQzdELElBQUE3QyxlQUFBLEdBQVlSLDZEQUFjLENBQUMsVUFBVSxDQUFDO0lBQS9CUyxDQUFDLEdBQUFELGVBQUEsQ0FBREMsQ0FBQzs7RUFFUjtFQUNBLElBQUEyRixXQUFBLEdBQTJCRixrRUFBVSxFQUFFO0lBQWhDRyxJQUFJLEdBQUFELFdBQUEsQ0FBSkMsSUFBSTtJQUFFQyxVQUFVLEdBQUFGLFdBQUEsQ0FBVkUsVUFBVTtFQUV2QmhILGdEQUFTLENBQUMsWUFBTTtJQUNaLElBQUcrRyxJQUFJLEtBQUssS0FBSyxFQUFFO01BQ2ZKLG9FQUFlLENBQ1huRSxRQUFRLENBQUNoUCxJQUFJLEdBQUcsVUFBVTtNQUFFO01BQzVCMk4sQ0FBQyxDQUFDLG9DQUFvQyxDQUFDO01BQUU7TUFDekM0QyxLQUFLLEVBQUUsQ0FBRTtNQUFBLENBQ1o7SUFDTDtFQUNKLENBQUMsRUFBRSxDQUFDZ0QsSUFBSSxDQUFDLENBQUM7RUFHVixPQUNJQSxJQUFJLGlCQUNBN1QsMERBQUE7SUFBS0ssU0FBUyxFQUFDO0VBQXFCLEdBQy9Cc04sWUFBWSxlQUNiM04sMERBQUE7SUFBSUssU0FBUyxFQUFDO0VBQW1CLEdBQUU0TixDQUFDLENBQUMsWUFBWSxDQUFDLENBQU0sZUFDeERqTywwREFBQSxDQUFDOFIscURBQVc7SUFBQ0UsYUFBYSxFQUFFQSxhQUFjO0lBQUNuQixLQUFLLEVBQUVBO0VBQU0sRUFBRyxDQUVsRTtBQUVULENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbkMwRDtBQUNjO0FBQ1g7QUFDUjtBQUNMO0FBQ087QUFDUjtBQUNKO0FBQ0k7QUFDMkM7QUFDL0Q7QUFHckIsSUFBTXNELE9BQU8sR0FBRyxTQUFWQSxPQUFPQSxDQUFBalUsSUFBQSxFQUFxRjtFQUFBLElBQWhGeU4sWUFBWSxHQUFBek4sSUFBQSxDQUFaeU4sWUFBWTtJQUFFeUcsa0JBQWtCLEdBQUFsVSxJQUFBLENBQWxCa1Usa0JBQWtCO0lBQUVDLHNCQUFzQixHQUFBblUsSUFBQSxDQUF0Qm1VLHNCQUFzQjtJQUFFQyxnQkFBZ0IsR0FBQXBVLElBQUEsQ0FBaEJvVSxnQkFBZ0I7RUFFL0YsSUFBQS9GLFNBQUEsR0FBOEJ2QixnREFBUSxDQUFDO01BQ25DdUgsSUFBSSxFQUFFLENBQUM7TUFDUEMsS0FBSyxFQUFFLEVBQUU7TUFDVEMsSUFBSSxFQUFFO0lBQ1YsQ0FBQyxDQUFDO0lBQUFqRyxVQUFBLEdBQUFuRCxjQUFBLENBQUFrRCxTQUFBO0lBSkttRyxPQUFPLEdBQUFsRyxVQUFBO0lBQUVtRyxVQUFVLEdBQUFuRyxVQUFBO0VBTTFCLElBQU1vRyxjQUFjLEdBQUcsU0FBakJBLGNBQWNBLENBQUk3UyxHQUFHLEVBQUVjLEtBQUssRUFBSztJQUNuQzhSLFVBQVUsQ0FBQyxVQUFBRCxPQUFPO01BQUEsSUFBQUcsY0FBQTtNQUFBLE9BQUFDLGFBQUEsQ0FBQUEsYUFBQSxLQUNYSixPQUFPLFFBQUFHLGNBQUEsT0FBQUUsZUFBQSxDQUFBRixjQUFBLEVBQ1Q5UyxHQUFHLEVBQUdjLEtBQUssR0FBQWtTLGVBQUEsQ0FBQUYsY0FBQSxVQUNOLENBQUMsR0FBQUEsY0FBQTtJQUFBLENBQ1QsQ0FBQztFQUNQLENBQUM7O0VBRUE7RUFDQSxJQUFNRyxXQUFXLEdBQUdqSSw4Q0FBTSxDQUFDLElBQUksQ0FBQztFQUNoQyxJQUFNa0ksZ0JBQWdCLEdBQUcsU0FBbkJBLGdCQUFnQkEsQ0FBQSxFQUFTO0lBQzVCQyxVQUFVLENBQUMsWUFBTTtNQUNiLElBQU1DLENBQUMsR0FBR0gsV0FBVyxDQUFDdkYsT0FBTyxDQUFDMkYscUJBQXFCLEVBQUUsQ0FBQ0QsQ0FBQztNQUN2REUsTUFBTSxDQUFDQyxRQUFRLENBQUMsQ0FBQyxFQUFFSCxDQUFDLEdBQUlFLE1BQU0sQ0FBQ0UsV0FBVyxHQUFHLENBQUUsQ0FBQztJQUNwRCxDQUFDLEVBQUUsQ0FBQyxDQUFDO0VBQ1IsQ0FBQztFQUVGLElBQUFDLG1CQUFBLEdBVUl0QiwrRkFBa0IsQ0FDbEJFLGtCQUFrQixFQUNsQkMsc0JBQXNCLEVBQ3RCLEdBQUcsR0FBQ0osbUVBQWEsR0FBQyxxQkFBcUIsRUFDdkNLLGdCQUFnQixFQUNoQixHQUFHLEdBQUNMLG1FQUFhLEdBQUMsNEJBQTRCLEVBQzlDUyxPQUFPLEVBQ1BDLFVBQVUsRUFDVk0sZ0JBQWdCLENBQ25CO0lBbEJHblAsTUFBTSxHQUFBMFAsbUJBQUEsQ0FBTjFQLE1BQU07SUFDTmlJLFlBQVksR0FBQXlILG1CQUFBLENBQVp6SCxZQUFZO0lBQ1oySCxVQUFVLEdBQUFGLG1CQUFBLENBQVZFLFVBQVU7SUFDVjVILFlBQVksR0FBQTBILG1CQUFBLENBQVoxSCxZQUFZO0lBQ1o2SCxVQUFVLEdBQUFILG1CQUFBLENBQVZHLFVBQVU7SUFDVjlILFlBQVksR0FBQTJILG1CQUFBLENBQVozSCxZQUFZO0lBQ1p0TSxTQUFTLEdBQUFpVSxtQkFBQSxDQUFUalUsU0FBUztJQUNUcVUsZ0JBQWdCLEdBQUFKLG1CQUFBLENBQWhCSSxnQkFBZ0I7SUFDaEJDLFdBQVcsR0FBQUwsbUJBQUEsQ0FBWEssV0FBVzs7RUFhZjtFQUNBLElBQUEzSCxhQUFBLEdBQTBDakIsNkVBQVksQ0FBQyxLQUFLLENBQUM7SUFBQWtCLGNBQUEsR0FBQTlDLGNBQUEsQ0FBQTZDLGFBQUE7SUFBdERpQixVQUFVLEdBQUFoQixjQUFBO0lBQUVpQixRQUFRLEdBQUFqQixjQUFBO0lBQUVrQixTQUFTLEdBQUFsQixjQUFBO0VBRXRDckIsaURBQVMsQ0FBQyxZQUFNO0lBQ1osSUFBR3dDLFFBQVEsQ0FBQ2hQLElBQUksQ0FBQ2lQLFFBQVEsQ0FBQyxVQUFVLENBQUMsRUFBRTtNQUNuQ0gsUUFBUSxFQUFFO0lBQ2Q7RUFDSixDQUFDLEVBQUUsRUFBRSxDQUFDO0VBRU4sb0JBQ0lwUCwyREFBQSxDQUFBQSx3REFBQSxRQUVRNlYsV0FBVyxpQkFDUDdWLDJEQUFBO0lBQUtpUSxHQUFHLEVBQUUrRSxXQUFZO0lBQUMzVSxTQUFTLEVBQUM7RUFBeUIsZ0JBQ3RETCwyREFBQTtJQUFLSyxTQUFTLEVBQUM7RUFBcUIsZ0JBQ2hDTCwyREFBQSxDQUFDZ1UsMkRBQVU7SUFBQ2hTLEVBQUUsRUFBQyxjQUFjO0lBQUN5UyxJQUFJLEVBQUVDLE9BQU8sQ0FBQ0QsSUFBSztJQUFDcUIsUUFBUSxFQUFFbEI7RUFBZSxFQUFHLENBQzVFLENBRWIsZUFFTDVVLDJEQUFBLENBQUMrVCxpRUFBYTtJQUNWeFMsU0FBUyxFQUFFQSxTQUFVO0lBQ3JCdUUsTUFBTSxFQUFFQSxNQUFPO0lBQ2ZpUSxVQUFVLEVBQUVIO0VBQWlCLEdBR3pCOVAsTUFBTSxJQUFJQSxNQUFNLENBQUNrUSxLQUFLLENBQUNwVSxHQUFHLENBQUMsVUFBQU4sT0FBTztJQUFBLG9CQUM5QnRCLDJEQUFBLENBQUMwTixzREFBVztNQUNSM0wsR0FBRyxFQUFFVCxPQUFPLENBQUNVLEVBQUc7TUFDaEJWLE9BQU8sRUFBRUEsT0FBUTtNQUNqQnNNLGFBQWEsRUFBRStILFVBQVc7TUFDMUI3SCxZQUFZLEVBQUVBLFlBQWE7TUFDM0JELFlBQVksRUFBRUEsWUFBYTtNQUMzQkUsWUFBWSxFQUFFQSxZQUFhO01BQzNCSixZQUFZLEVBQUVBO0lBQWEsRUFDN0I7RUFBQSxDQUNMLENBQUMsQ0FFTSxlQUVoQjNOLDJEQUFBLENBQUNtTixvREFBSztJQUFDcUQsZUFBZSxFQUFDLHFDQUFxQztJQUFDSSxNQUFNLEVBQUV6QixVQUFXO0lBQUMwQixLQUFLLEVBQUV4QjtFQUFVLGdCQUM5RnJQLDJEQUFBLENBQUMyVCwwREFBYTtJQUNWM0IsYUFBYSxFQUFFMEQsVUFBVztJQUMxQjdFLEtBQUssRUFBRXhCLFNBQVU7SUFDakIxQixZQUFZLEVBQUVBO0VBQWEsRUFDN0IsQ0FDRSxlQUNSM04sMkRBQUEsQ0FBQ2tOLHlEQUFVO0lBQUNzRCxlQUFlLEVBQUMsMkNBQTJDO0lBQUNFLE9BQU8sRUFBRXRCO0VBQVMsR0FDckZuQiwyQ0FBQyxDQUFDLGdCQUFnQixFQUFFO0lBQUN3RCxFQUFFLEVBQUU7RUFBVSxDQUFDLENBQUMsQ0FDN0IsQ0FDZDtBQUVYLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2hIeUI7QUFDc0Q7QUFDbEI7QUFDbkI7QUFDRDtBQUN5QztBQUNDO0FBQ0k7QUFDM0I7QUFJdEQsSUFBTTZFLGVBQWUsR0FBRyxTQUFsQkEsZUFBZUEsQ0FBQXBXLElBQUEsRUFBcUI7RUFBQSxJQUFoQnFXLFVBQVUsR0FBQXJXLElBQUEsQ0FBVnFXLFVBQVU7RUFFdkMsSUFBQUMsU0FBQSxHQUFtQ04scUVBQVEsQ0FBQ0ssVUFBVSxDQUFDO0lBQUFFLFVBQUEsR0FBQXBMLGNBQUEsQ0FBQW1MLFNBQUE7SUFBaERSLEtBQUssR0FBQVMsVUFBQTtJQUFFbFYsU0FBUyxHQUFBa1YsVUFBQTtJQUFFckUsTUFBTSxHQUFBcUUsVUFBQTtFQUUvQixJQUFNQyxVQUFVLEdBQUcsSUFBSU4sc0ZBQXVCLENBQUM7SUFDM0MsQ0FBQyxFQUFFO01BQ0MsQ0FBQyxFQUFFO1FBQ0NPLFlBQVksRUFBRSxDQUFDO1FBQ2ZDLGNBQWMsRUFBRTtNQUNwQixDQUFDO01BQ0QsR0FBRyxFQUFFO1FBQ0RELFlBQVksRUFBRSxDQUFDO1FBQ2ZDLGNBQWMsRUFBRTtNQUNwQixDQUFDO01BQ0QsR0FBRyxFQUFFO1FBQ0RELFlBQVksRUFBRSxDQUFDO1FBQ2ZDLGNBQWMsRUFBRTtNQUNwQixDQUFDO01BQ0QsSUFBSSxFQUFFO1FBQ0ZELFlBQVksRUFBRSxDQUFDO1FBQ2ZDLGNBQWMsRUFBRTtNQUNwQixDQUFDO01BQ0QsSUFBSSxFQUFFO1FBQ0ZELFlBQVksRUFBRSxDQUFDO1FBQ2ZDLGNBQWMsRUFBRTtNQUNwQjtJQUNKO0VBQ0osQ0FBQyxDQUFDO0VBR0YsSUFBR3hFLE1BQU0sRUFBRTtJQUNQLE9BQU8sRUFBRTtFQUNiO0VBRUEsb0JBQ0lwUywyREFBQTtJQUFLSyxTQUFTLEVBQUM7RUFBMkIsR0FFbENrQixTQUFTLGlCQUFJdkIsMkRBQUEsQ0FBQ2tCLGlEQUFNO0lBQUNzUCxlQUFlLEVBQUM7RUFBYSxFQUFHLGVBRXpEeFEsMkRBQUEsQ0FBQ21XLGdEQUFRO0lBQUM5VixTQUFTLEVBQUMsMEJBQTBCO0lBQUMyVixLQUFLLEVBQUVBLEtBQU07SUFBQ1UsVUFBVSxFQUFFQTtFQUFXLEdBRWhGVixLQUFLLElBQ0RBLEtBQUssQ0FBQ3BVLEdBQUcsQ0FBQyxVQUFBaVYsSUFBSSxFQUFJO0lBQ2QsUUFBT0EsSUFBSSxDQUFDL1UsSUFBSTtNQUNaLEtBQUssU0FBUztRQUNWLG9CQUFPOUIsMkRBQUEsQ0FBQ2lXLG1GQUFXO1VBQUNsVSxHQUFHLEVBQUU4VSxJQUFJLENBQUM3VSxFQUFHO1VBQUM4VSxPQUFPLEVBQUVEO1FBQUssRUFBRztNQUN2RCxLQUFLLFFBQVE7UUFDVCxvQkFBTzdXLDJEQUFBLENBQUNxVyx1RkFBVTtVQUFDdFUsR0FBRyxFQUFFOFUsSUFBSSxDQUFDN1UsRUFBRztVQUFDK1UsTUFBTSxFQUFFRjtRQUFLLEVBQUs7TUFDdkQsS0FBSyxTQUFTO1FBQ1Ysb0JBQU83VywyREFBQSxDQUFDQywyRkFBVztVQUFDOEIsR0FBRyxFQUFFOFUsSUFBSSxDQUFDN1UsRUFBRztVQUFDN0IsT0FBTyxFQUFFMFc7UUFBSyxFQUFHO01BQ3ZELEtBQUssYUFBYTtRQUNkLG9CQUFPN1csMkRBQUEsQ0FBQ2MsbUVBQWU7VUFBQ2lCLEdBQUcsRUFBRThVLElBQUksQ0FBQzdVLEVBQUc7VUFBQ2pCLFdBQVcsRUFBRThWO1FBQUssRUFBRztNQUMvRDtRQUNJLE9BQU8sRUFBRTtJQUFDO0VBRXRCLENBQUMsQ0FDSixDQUVNLENBQ1Q7QUFFZCxDQUFDOzs7Ozs7Ozs7OztBQ3pFRCIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2Fzc2V0cy9Db21wb25lbnRzL0Jsb2cvQXJ0aWNsZS9BcnRpY2xlSW5kZXgvQXJ0aWNsZUNhcmQuanN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9VSS9DYXJkL1N1YkNhdGVnb3J5Q2FyZC5qc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL1VJL1Nob3dTdWJTZWN0aW9ucy9QdWJsaWNhdGlvbi9Db21tZW50L0NvbW1lbnRDYXJkL0NvbW1lbnRTdW1tYXJ5LmpzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvVUkvU2hvd1N1YlNlY3Rpb25zL1B1YmxpY2F0aW9uL0NvbW1lbnQvQ29tbWVudENhcmQvaW5kZXguanN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9VSS9TaG93U3ViU2VjdGlvbnMvUHVibGljYXRpb24vQ29tbWVudC9Db21tZW50Q3JlYXRlL0NvbW1lbnRGb3JtL2luZGV4LmpzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvVUkvU2hvd1N1YlNlY3Rpb25zL1B1YmxpY2F0aW9uL0NvbW1lbnQvQ29tbWVudENyZWF0ZS9pbmRleC5qc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL1VJL1Nob3dTdWJTZWN0aW9ucy9QdWJsaWNhdGlvbi9Db21tZW50L2luZGV4LmpzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvVUkvU2hvd1N1YlNlY3Rpb25zL1Nob3dMaW5rZWRJdGVtcy9pbmRleC5qc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3N0eWxlcy9CbG9nL1JlY2lwZS9yZWNpcGVTaG93LmNzcz8xOWQyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcblxyXG5leHBvcnQgY29uc3QgQXJ0aWNsZUNhcmQgPSAoe2FydGljbGV9KSA9PiB7XHJcbiAgICBcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxsaSBjbGFzc05hbWU9XCJwcm9kdWN0LWNhcmQgdHlwZS1hcnRpY2xlXCI+XHJcbiAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cInByb2R1Y3QtY2FyZC1pbWctbGlua1wiIGhyZWY9e2FydGljbGUudGFyZ2V0fT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZHVjdC1jYXJkLWltZy13cmFwcGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJwcm9kdWN0LWNhcmQtaW1nXCIgc3JjPXthcnRpY2xlLnBpY3R1cmUucGF0aH0gYWx0PXthcnRpY2xlLnBpY3R1cmUuYWx0fSAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9kdWN0LWNhcmQtYm9keVwiPlxyXG4gICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInByb2R1Y3QtY2FyZC10aXRsZSBhcnRpY2xlLWNhcmQtdGl0bGVcIj5cclxuICAgICAgICAgICAgICAgICAgICA8YSBocmVmPXthcnRpY2xlLnRhcmdldH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPnthcnRpY2xlLnRpdGxlfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJ0aWNsZS5zdWJ0aXRsZSAmJiA8c3BhbiBjbGFzc05hbWU9XCJwcm9kdWN0LWNhcmQtc3VidGl0bGVcIj4gLSB7YXJ0aWNsZS5zdWJ0aXRsZX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICA8L2gyPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2xpPlxyXG4gICAgKVxyXG59IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuXHJcbmV4cG9ydCBjb25zdCBTdWJDYXRlZ29yeUNhcmQgPSAoe3N1YkNhdGVnb3J5fSkgPT4ge1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGxpIGNsYXNzTmFtZT1cInByb2R1Y3QtY2FyZCB0eXBlLXJlY2lwZVwiPlxyXG4gICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJwcm9kdWN0LWNhcmQtaW1nLWxpbmtcIiBocmVmPXtzdWJDYXRlZ29yeS50YXJnZXR9PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9kdWN0LWNhcmQtaW1nLXdyYXBwZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cInByb2R1Y3QtY2FyZC1pbWdcIiBzcmM9e3N1YkNhdGVnb3J5LnNtYWxsUGljdHVyZS5wYXRofSBhbHQ9e3N1YkNhdGVnb3J5LnNtYWxsUGljdHVyZS5hbHR9IC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2R1Y3QtY2FyZC1ib2R5XCI+XHJcbiAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwicHJvZHVjdC1jYXJkLXRpdGxlXCI+PGEgaHJlZj17c3ViQ2F0ZWdvcnkudGFyZ2V0fT57c3ViQ2F0ZWdvcnkubmFtZX08L2E+PC9oMj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9saT5cclxuICAgIClcclxufVxyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBMb2FkZXIgfSBmcm9tICcuLi8uLi8uLi8uLi9JY29uL0xvYWRlcic7XHJcbmltcG9ydCB7IEFuc3dlckNhcmQgfSBmcm9tICcuLi8uLi9BbnN3ZXIvQW5zd2VyQ2FyZCc7XHJcbmltcG9ydCB7IEltcG9ydGFudEFuc3dlciB9IGZyb20gJy4uLy4uL0Fuc3dlci9JbXBvcnRhbnRBbnN3ZXInO1xyXG5cclxuZXhwb3J0IGNvbnN0IENvbW1lbnRTdW1tYXJ5ID0gKHtjb21tZW50LCBpc0xvYWRpbmd9KSA9PiB7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLXN1bW1hcnktY2FyZFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJldmlldy1jYXJkLWhlYWRlclwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZXZpZXctY2FyZC1pbmZvc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPntjb21tZW50LmZ1bGxOYW1lfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj57Y29tbWVudC5jcmVhdGVkQXR9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJldmlldy1jYXJkLWJvZHlcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmV2aWV3LWNhcmQtYm9keS1jb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgICAgICAge2NvbW1lbnQuY29udGVudH1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJxYS1jYXJkLWJvdHRvbVwiPlxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbW1lbnQuZmlyc3RBbnN3ZXJzLm1hcChhbnN3ZXIgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbnN3ZXIudHlwZSA9PT0gJ2N1c3RvbWVyJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QW5zd2VyQ2FyZCBrZXk9e2Fuc3dlci5pZH0gYW5zd2VyPXthbnN3ZXJ9IGlzU3VtbWFyeT17dHJ1ZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEltcG9ydGFudEFuc3dlciBrZXk9e2Fuc3dlci5pZH0gYW5zd2VyPXthbnN3ZXJ9IGlzU3VtbWFyeT17dHJ1ZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICApKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGlzTG9hZGluZyAmJiA8TG9hZGVyIC8+XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29tbWVudC5yZXN0QW5zd2Vycy5tYXAoYW5zd2VyID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgYW5zd2VyLnR5cGUgPT09ICdjdXN0b21lcidcclxuICAgICAgICAgICAgICAgICAgICAgICAgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFuc3dlckNhcmQga2V5PXthbnN3ZXIuaWR9IGFuc3dlcj17YW5zd2VyfSBpc1N1bW1hcnk9e3RydWV9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbXBvcnRhbnRBbnN3ZXIga2V5PXthbnN3ZXIuaWR9IGFuc3dlcj17YW5zd2VyfSBpc1N1bW1hcnk9e3RydWV9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgKSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn0iLCJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBMb2FkZXIgfSBmcm9tICcuLi8uLi8uLi8uLi9JY29uL0xvYWRlcic7XHJcbmltcG9ydCB7IHVzZU9wZW5TdGF0ZSB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL0N1c3RvbUhvb2svc3RhdGUvdXNlT3BlblN0YXRlJztcclxuaW1wb3J0IHsgRm9ybUJ1dHRvbiB9IGZyb20gJy4uLy4uLy4uLy4uL0Zvcm0vRm9ybUJ1dHRvbic7XHJcbmltcG9ydCB7IE1vZGFsIH0gZnJvbSAnLi4vLi4vLi4vLi4vQ29udGFpbmVyL01vZGFsJztcclxuaW1wb3J0IHsgRXhwYW5kTW9yZUljb24gfSBmcm9tICcuLi8uLi8uLi8uLi9JY29uL0V4cGFuZE1vcmVJY29uJztcclxuaW1wb3J0IHsgQW5zd2VyQ2FyZCB9IGZyb20gJy4uLy4uL0Fuc3dlci9BbnN3ZXJDYXJkJztcclxuaW1wb3J0IHsgQW5zd2VyQ3JlYXRlIH0gZnJvbSAnLi4vLi4vQW5zd2VyL0Fuc3dlckNyZWF0ZSc7XHJcbmltcG9ydCB7IENvbW1lbnRTdW1tYXJ5IH0gZnJvbSAnLi9Db21tZW50U3VtbWFyeSc7XHJcbmltcG9ydCB7IEltcG9ydGFudEFuc3dlciB9IGZyb20gJy4uLy4uL0Fuc3dlci9JbXBvcnRhbnRBbnN3ZXInO1xyXG5pbXBvcnQgeyBQdWJsaWNhdGlvblJlbW92ZXIgfSBmcm9tICcuLi8uLi9QdWJsaWNhdGlvblJlbW92ZXInO1xyXG5pbXBvcnQgeyB1c2VSZW1vdmVyIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vQ3VzdG9tSG9vay9yZW1vdmVyL3VzZVJlbW92ZXInO1xyXG5pbXBvcnQgeyB1c2VUcmFuc2xhdGlvbiB9IGZyb20gJ3JlYWN0LWkxOG5leHQnO1xyXG5pbXBvcnQgbmwyYnIgZnJvbSAncmVhY3QtbmwyYnInO1xyXG5cclxuZXhwb3J0IGNvbnN0IENvbW1lbnRDYXJkID0gKHtvd25lclRvcENhcmQsIGNvbW1lbnQsIGRlbGV0ZUNvbW1lbnQsIGRlbGV0ZUFuc3dlciwgY3JlYXRlQW5zd2VyLCBmZXRjaE9uZUZ1bGx9KSA9PiB7XHJcbiAgICBjb25zdCB7dH0gPSB1c2VUcmFuc2xhdGlvbignbWVzc2FnZXMnKTtcclxuXHJcbiAgICBjb25zdCBbcmVzdElzT3Blbiwgb3BlblJlc3QsIGNsb3NlUmVzdF0gPSB1c2VPcGVuU3RhdGUoZmFsc2UpO1xyXG5cclxuICAgIGNvbnN0IFtpc0xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgICBcclxuICAgIGNvbnN0IGZldGNoRnVsbENvbW1lbnQgPSBhc3luYyAoZm9yY2UgPSB0cnVlKSA9PiB7XHJcbiAgICAgICAgc2V0TG9hZGluZyh0cnVlKTtcclxuICAgICAgICBhd2FpdCBmZXRjaE9uZUZ1bGwoY29tbWVudC5pZCwgZm9yY2UpOyAgLy8gZGFucyBmZXRjaE9uZUZ1bGwsIG9uIGfDqHJlIHBvdXIgZmFpcmUgbCdhcHBlbCBxdWUgc2kgbsOpY2Vzc2FpcmUgKHNpIGZvcmNlID0gdHJ1ZSBhbG9ycyBsJ2FwcGVsIHNlcmEgZmFpdCBkYW5zIHRvdXMgbGVzIGNhcylcclxuICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcclxuICAgIH1cclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGlmKHJlc3RJc09wZW4pIHtcclxuICAgICAgICAgICAgZmV0Y2hGdWxsQ29tbWVudChmYWxzZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSwgW3Jlc3RJc09wZW5dKTtcclxuXHJcbiAgICAvL0Fuc3dlciBGT1JNICBcclxuICAgIGNvbnN0IFtmb3JtSXNPcGVuLCBvcGVuRm9ybSwgY2xvc2VGb3JtXSA9IHVzZU9wZW5TdGF0ZShmYWxzZSk7XHJcblxyXG4gICAgLy9zaSBvbiByZXZpZW50IGRlIGxvZ2luIGF2ZWMgI2NvbV9hLXtjb21tZW50SWR9IGRhbnMgbCd1cmwgYWxvcnMgb24gb3V2cmUgbGUgZm9ybVxyXG4gICAgLy9zaSBvbiBhcnJpdmUgZCd1biBsaWVuIGRhbnMgdW4gbWFpbCBhdmVjICNjY2gtc2hvdy17Y29tbWVudElkfSBkYW5zIGwndXJsIGFsb3JzIG9uIHNjcm9sbCBzdXIgY29tbWVudENhcmRcclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgaWYobG9jYXRpb24uaHJlZi5pbmNsdWRlcygnI2NvbV9hLScrY29tbWVudC5pZCkpIHtcclxuICAgICAgICAgICAgb3BlbkZvcm0oKTtcclxuICAgICAgICB9IGVsc2UgaWYgKGxvY2F0aW9uLmhyZWYuaW5jbHVkZXMoJyNjY2gtc2hvdy0nK2NvbW1lbnQuaWQpKSB7XHJcbiAgICAgICAgICAgIGNvbW1lbnRDYXJkUmVmLmN1cnJlbnQuc2Nyb2xsSW50b1ZpZXcoKTtcclxuICAgICAgICB9XHJcbiAgICB9LCBbXSk7XHJcbiAgICBjb25zdCBjb21tZW50Q2FyZFJlZiA9IHVzZVJlZihudWxsKTtcclxuXHJcbiAgICBcclxuICAgIC8vZGVsZXRlIGNvbW1lbnRcclxuICAgIGNvbnN0IHtjb25maXJtYXRpb25Jc09wZW4sIG9wZW5Db25maXJtYXRpb24sIGNsb3NlQ29uZmlybWF0aW9uLCBpc1JlbW92aW5nLCBzZXRSZW1vdmluZ30gPSB1c2VSZW1vdmVyKCk7XHJcblxyXG4gICAgXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxsaSByZWY9e2NvbW1lbnRDYXJkUmVmfSBjbGFzc05hbWU9eydyZXZpZXctY2FyZCcgKyAoY29uZmlybWF0aW9uSXNPcGVuID8gJyByZW1vdmUtY29uZmlybSc6ICcnKSArIChpc1JlbW92aW5nID8gJyBpcy1yZW1vdmluZyc6ICcnKX0+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicWEtY2FyZC10b3BcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmV2aWV3LWNhcmQtaGVhZGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZXZpZXctY2FyZC1pbmZvc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj57Y29tbWVudC5mdWxsTmFtZX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPntjb21tZW50LmNyZWF0ZWRBdH08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmV2aWV3LWNhcmQtYm9keVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmV2aWV3LWNhcmQtYm9keS1jb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtubDJicihjb21tZW50LmNvbnRlbnQpfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29tbWVudC5jYW5SZW1vdmUgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFB1YmxpY2F0aW9uUmVtb3ZlciBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWxldGVQdWJsaWNhdGlvbj17KCkgPT4gZGVsZXRlQ29tbWVudChjb21tZW50LmlkKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25maXJtYXRpb25Jc09wZW49e2NvbmZpcm1hdGlvbklzT3Blbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcGVuQ29uZmlybWF0aW9uPXtvcGVuQ29uZmlybWF0aW9ufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsb3NlQ29uZmlybWF0aW9uPXtjbG9zZUNvbmZpcm1hdGlvbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc1JlbW92aW5nPXtpc1JlbW92aW5nfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFJlbW92aW5nPXtzZXRSZW1vdmluZ30gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJxYS1jYXJkLWJvdHRvbVwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZXN0LWxpc3QgcWEtY2FyZC1ib3R0b20tY29udGVudFwiPlxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICFyZXN0SXNPcGVuICYmIGNvbW1lbnQuZmlyc3RBbnN3ZXJzLmxlbmd0aCA+IDAgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb21tZW50LmZpcnN0QW5zd2Vycy5tYXAoYW5zd2VyID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFuc3dlci50eXBlID09PSAnY3VzdG9tZXInIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QW5zd2VyQ2FyZCBrZXk9e2Fuc3dlci5pZH0gb3duZXJJZD17Y29tbWVudC5pZH0gYW5zd2VyPXthbnN3ZXJ9IGRlbGV0ZUFuc3dlcj17ZGVsZXRlQW5zd2VyfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbXBvcnRhbnRBbnN3ZXIga2V5PXthbnN3ZXIuaWR9IG93bmVySWQ9e2NvbW1lbnQuaWR9IGFuc3dlcj17YW5zd2VyfSBkZWxldGVBbnN3ZXI9e2RlbGV0ZUFuc3dlcn0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKSlcclxuICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc3RJc09wZW4gJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFsuLi5jb21tZW50LmZpcnN0QW5zd2VycywgLi4uY29tbWVudC5yZXN0QW5zd2Vyc10ubWFwKGFuc3dlciA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFuc3dlci50eXBlID09PSAnY3VzdG9tZXInIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFuc3dlckNhcmQga2V5PXthbnN3ZXIuaWR9IG93bmVySWQ9e2NvbW1lbnQuaWR9IGFuc3dlcj17YW5zd2VyfSBkZWxldGVBbnN3ZXI9e2RlbGV0ZUFuc3dlcn0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEltcG9ydGFudEFuc3dlciBrZXk9e2Fuc3dlci5pZH0gb3duZXJJZD17Y29tbWVudC5pZH0gYW5zd2VyPXthbnN3ZXJ9IGRlbGV0ZUFuc3dlcj17ZGVsZXRlQW5zd2VyfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNMb2FkaW5nICYmIDxMb2FkZXIgYWRkaXRpb25hbENsYXNzPVwicmlnaHQtbG9hZGVyXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgIXJlc3RJc09wZW4gJiYgY29tbWVudC5jb3VudFJlc3RBbnN3ZXJzID4gMCAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwicWEtY2FyZC1pbmZvIHFhLWNhcmQtYnV0dG9uIGktdGV4dFwiIHR5cGU9XCJidXR0b25cIiBvbkNsaWNrPXtvcGVuUmVzdH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RXhwYW5kTW9yZUljb24gYWRkaXRpb25hbENsYXNzPVwiaWNvblwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj57dCgnY291bnQuc2VlX3Jlc3RfYW5zd2VycycsIHtjb3VudDogY29tbWVudC5jb3VudFJlc3RBbnN3ZXJzfSl9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzdElzT3BlbiAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwicWEtY2FyZC1pbmZvIHFhLWNhcmQtYnV0dG9uIGktdGV4dFwiIHR5cGU9XCJidXR0b25cIiBvbkNsaWNrPXtjbG9zZVJlc3R9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEV4cGFuZE1vcmVJY29uIGFkZGl0aW9uYWxDbGFzcz1cImljb24gZXhwYW5kZWRcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj57dCgnc2VlX2xlc3MnKX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicWEtY2FyZC1mb290ZXJcIj5cclxuICAgICAgICAgICAgICAgIDxNb2RhbCBhZGRpdGlvbmFsQ2xhc3M9XCJjb21tZW50LWZvcm0tbW9kYWwgYW5zd2VyLWZvcm0tbW9kYWwgY2VudGVyLWZvcm0tbW9kYWxcIiBpc09wZW49e2Zvcm1Jc09wZW59IGNsb3NlPXtjbG9zZUZvcm19PlxyXG4gICAgICAgICAgICAgICAgICAgIDxBbnN3ZXJDcmVhdGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3duZXJJZD17Y29tbWVudC5pZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgY3JlYXRlQW5zd2VyPXtjcmVhdGVBbnN3ZXJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG93bmVyVG9wQ2FyZD17b3duZXJUb3BDYXJkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmZXRjaEFmdGVyU3VibWl0U3VjY2Vzcz17ZmV0Y2hGdWxsQ29tbWVudH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xvc2U9e2Nsb3NlRm9ybX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Q29tbWVudFN1bW1hcnkgY29tbWVudD17Y29tbWVudH0gaXNMb2FkaW5nPXtpc0xvYWRpbmd9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9BbnN3ZXJDcmVhdGU+XHJcbiAgICAgICAgICAgICAgICA8L01vZGFsPlxyXG4gICAgICAgICAgICAgICAgPEZvcm1CdXR0b24gb25DbGljaz17b3BlbkZvcm19IGFkZGl0aW9uYWxDbGFzcz1cImJvcmRlYXV4LWdyZXkgY3JlYXRlLWZvcm0tc21hbGwtYnV0dG9uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAge3QoJ3N1Ym1pdC5hbnN3ZXInKX1cclxuICAgICAgICAgICAgICAgIDwvRm9ybUJ1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9saT5cclxuICAgIClcclxufVxyXG5cclxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZUNvbnRleHQsIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHVzZUZvcm1XaXRoVmFsaWRhdGlvbiB9IGZyb20gJy4uLy4uLy4uLy4uLy4uLy4uL0N1c3RvbUhvb2svZm9ybS91c2VGb3JtV2l0aFZhbGlkYXRpb24nO1xyXG5pbXBvcnQgKiBhcyB5dXAgZnJvbSBcInl1cFwiXHJcbmltcG9ydCB7IEZvcm1CdXR0b24gfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9Gb3JtL0Zvcm1CdXR0b24nO1xyXG5pbXBvcnQgeyBDaGVja0ljb24gfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9JY29uL0NoZWNrSWNvbic7XHJcbmltcG9ydCB7IFRleHRGaWVsZCB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL0Zvcm0vVGV4dEZpZWxkJztcclxuaW1wb3J0IHsgU2V0U3VibWl0SW5mb0NvbnRleHQgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi8uLi9Db250ZXh0L1Nob3dTdWJTZWN0aW9uc0NvbnRleHQnO1xyXG5pbXBvcnQgeyBBcGlFcnJvciB9IGZyb20gJy4uLy4uLy4uLy4uLy4uLy4uL2Z1bmN0aW9ucy9hcGknO1xyXG5pbXBvcnQgeyB0IH0gZnJvbSAnaTE4bmV4dCc7XHJcbmltcG9ydCB7IHVzZVRyYW5zbGF0aW9uIH0gZnJvbSAncmVhY3QtaTE4bmV4dCc7XHJcblxyXG5cclxuY29uc3Qgc2NoZW1hID0geXVwXHJcbiAgLm9iamVjdCh7XHJcbiAgICBjb250ZW50OiB5dXAuc3RyaW5nKCkubWF4KDUwMCwgdCgnYXNzZXJ0Lmxlbmd0aC5tYXgnLCB7bnM6ICdjb25zdHJhaW50cycsIG1heDogNTAwfSkpLnJlcXVpcmVkKCksXHJcbiAgICBhZ3JlZVRlcm1zOiB5dXAuYm9vbCgpLmlzVHJ1ZSh0KCdhc3NlcnQuY2hlY2tib3gudHJ1ZScsIHtuczogJ2NvbnN0cmFpbnRzJ30pKS5yZXF1aXJlZCgpXHJcbiAgfSlcclxuICAucmVxdWlyZWQoKVxyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBDb21tZW50Rm9ybSA9ICh7Y3JlYXRlQ29tbWVudCwgY2xvc2V9KSA9PiB7XHJcbiAgICBjb25zdCB7dH0gPSB1c2VUcmFuc2xhdGlvbignbWVzc2FnZXMnKTtcclxuXHJcbiAgICBjb25zdCB7IHJlZ2lzdGVyLCBoYW5kbGVTdWJtaXQsIGVycm9ycywgaXNTdWJtaXR0aW5nLCBjb250cm9sLCBzZXRFcnJvciwgc2V0VmFsdWUgfSA9IHVzZUZvcm1XaXRoVmFsaWRhdGlvbihzY2hlbWEsIHtcclxuICAgICAgICBjb250ZW50OiAnJyxcclxuICAgICAgICBhZ3JlZVRlcm1zOiBmYWxzZVxyXG4gICAgfSk7XHJcblxyXG4gICAgY29uc3Qgc2V0U3VibWl0SW5mbyA9IHVzZUNvbnRleHQoU2V0U3VibWl0SW5mb0NvbnRleHQpO1xyXG4gICAgY29uc3QgW2lzTG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gICAgY29uc3Qgb25TdWJtaXQgPSBhc3luYyBmb3JtRGF0YSA9PiB7XHJcbiAgICAgICAgaWYoaXNMb2FkaW5nKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgc2V0TG9hZGluZyh0cnVlKTtcclxuXHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgYXdhaXQgY3JlYXRlQ29tbWVudChmb3JtRGF0YSk7XHJcbiAgICAgICAgICAgIHNldFN1Ym1pdEluZm8oe1xyXG4gICAgICAgICAgICAgICAgdHlwZTogJ3N1Y2Nlc3MnLFxyXG4gICAgICAgICAgICAgICAgbWVzc2FnZTogdCgnc3VjY2Vzcy5zdWJtaXQuY29tbWVudCcpXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBjbG9zZSgpO1xyXG4gICAgICAgIH0gY2F0Y2goZSkge1xyXG4gICAgICAgICAgICBpZihlIGluc3RhbmNlb2YgQXBpRXJyb3IpIHtcclxuICAgICAgICAgICAgICAgIE9iamVjdC5lbnRyaWVzKGUuZXJyb3JzKS5mb3JFYWNoKChbZmllbGQsIG1lc3NhZ2VdKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0RXJyb3IoZmllbGQsIHt0eXBlOiAnY3VzdG9tJywgbWVzc2FnZTogbWVzc2FnZX0pO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBzZXRTdWJtaXRJbmZvKHtcclxuICAgICAgICAgICAgICAgICAgICB0eXBlOiAnZGFuZ2VyJyxcclxuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiB0KCdlcnJvci50ZW1wb3JhcnlfZmFpbHVyZScpXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXQob25TdWJtaXQpfSBjbGFzc05hbWU9XCJyZXZpZXctZm9ybSBib3gtZm9ybVwiPlxyXG5cclxuICAgICAgICAgICAgPFRleHRGaWVsZCB0eXBlPVwidGV4dGFyZWFcIiBjb250cm9sPXtjb250cm9sfSBuYW1lPVwiY29udGVudFwiIGVycm9yPXtlcnJvcnMuY29udGVudD8ubWVzc2FnZX0gbWF4TGVuZ3RoPXs1MDB9PlxyXG4gICAgICAgICAgICAgICAge3QoJ2NvbW1lbnQnKX0gKlxyXG4gICAgICAgICAgICA8L1RleHRGaWVsZD5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXsnY2hlY2tib3gtZ3JvdXAnICsgKGVycm9ycy5hZ3JlZVRlcm1zID8gJyBpcy1pbnZhbGlkJzogJycpfT5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCB7Li4ucmVnaXN0ZXIoJ2FncmVlVGVybXMnKX0gY2xhc3NOYW1lPVwiZm9ybS1jaGVja2JveFwiIGlkPVwiYWdyZWVUZXJtc1wiIHR5cGU9XCJjaGVja2JveFwiIC8+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImFncmVlVGVybXNcIiBjbGFzc05hbWU9XCJmb3JtLWxhYmVsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjdXN0b20tY2hlY2tib3hcIiByb2xlPVwiY2hlY2tib3hcIiBhcmlhLWxhYmVsbGVkYnk9XCJjaGVja2JveC1sYWJlbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Q2hlY2tJY29uIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gaWQ9XCJjaGVja2JveC1sYWJlbFwiPnt0KCdhZ3JlZV90ZXJtc19vZl91c2UnKX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGVycm9ycy5hZ3JlZVRlcm1zICYmIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1lcnJvclwiPntlcnJvcnMuYWdyZWVUZXJtcy5tZXNzYWdlfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdWJtaXQtZ3JvdXAgZG91YmxlXCI+XHJcbiAgICAgICAgICAgICAgICA8Rm9ybUJ1dHRvbiBhZGRpdGlvbmFsQ2xhc3M9XCJib3JkZWF1eFwiIGxvYWRpbmc9e2lzTG9hZGluZyB8fCBpc1N1Ym1pdHRpbmd9Pnt0KCdzdWJtaXQucHVibGlzaCcpfTwvRm9ybUJ1dHRvbj5cclxuICAgICAgICAgICAgICAgIDxGb3JtQnV0dG9uIGFkZGl0aW9uYWxDbGFzcz1cImNhbmNlbFwiIGRpc2FibGVkPXtpc0xvYWRpbmcgfHwgaXNTdWJtaXR0aW5nfSBvbkNsaWNrPXtjbG9zZX0+e3QoJ2NhbmNlbCcpfTwvRm9ybUJ1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9mb3JtPlxyXG4gICAgKVxyXG59IiwiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgcmVkaXJlY3RUb0xvZ2luIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vZnVuY3Rpb25zL3NlY3VyaXR5JztcclxuaW1wb3J0IHsgQ29tbWVudEZvcm0gfSBmcm9tICcuL0NvbW1lbnRGb3JtJztcclxuaW1wb3J0IHsgdXNlR2V0VXNlciB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL0N1c3RvbUhvb2svdXNlR2V0VXNlcic7XHJcbmltcG9ydCB7IHVzZVRyYW5zbGF0aW9uIH0gZnJvbSAncmVhY3QtaTE4bmV4dCc7XHJcblxyXG5cclxuXHJcblxyXG5leHBvcnQgY29uc3QgQ29tbWVudENyZWF0ZSA9ICh7b3duZXJUb3BDYXJkLCBjcmVhdGVDb21tZW50LCBjbG9zZX0pID0+IHtcclxuICAgIGNvbnN0IHt0fSA9IHVzZVRyYW5zbGF0aW9uKCdtZXNzYWdlcycpO1xyXG5cclxuICAgIC8vb24gdsOpcmlmaWUgcXUndW4gdXNlciBlc3QgY29ubmVjdMOpXHJcbiAgICBjb25zdCB7dXNlciwgdXBkYXRlVXNlcn0gPSB1c2VHZXRVc2VyKCk7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBpZih1c2VyID09PSBmYWxzZSkge1xyXG4gICAgICAgICAgICByZWRpcmVjdFRvTG9naW4oXHJcbiAgICAgICAgICAgICAgICBsb2NhdGlvbi5ocmVmICsgJyNjb21tZW50JywgLy90YXJnZXRQYXRoXHJcbiAgICAgICAgICAgICAgICB0KCd3YXJuaW5nLm5lZWRfbG9naW5fdG9fcG9zdF9jb21tZW50JyksIC8vbWVzc2FnZVxyXG4gICAgICAgICAgICAgICAgY2xvc2UoKSAgLy9vbkVycm9yIG9uIGZlcm1lXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfVxyXG4gICAgfSwgW3VzZXJdKTtcclxuICAgIFxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgdXNlciAmJiAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmV2aWV3LWZvcm0td3JhcHBlclwiPlxyXG4gICAgICAgICAgICAgICAge293bmVyVG9wQ2FyZH1cclxuICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJyZXZpZXctZm9ybS10aXRsZVwiPnt0KCdteV9jb21tZW50Jyl9PC9oMz5cclxuICAgICAgICAgICAgICAgIDxDb21tZW50Rm9ybSBjcmVhdGVDb21tZW50PXtjcmVhdGVDb21tZW50fSBjbG9zZT17Y2xvc2V9IC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIClcclxuICAgIClcclxufSIsImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHVzZU9wZW5TdGF0ZSB9IGZyb20gJy4uLy4uLy4uLy4uL0N1c3RvbUhvb2svc3RhdGUvdXNlT3BlblN0YXRlJztcclxuaW1wb3J0IHsgU2VhcmNoUmVzdWx0cyB9IGZyb20gJy4uLy4uLy4uL1NlYXJjaC9TZWFyY2hSZXN1bHRzJztcclxuaW1wb3J0IHsgRm9ybUJ1dHRvbiB9IGZyb20gJy4uLy4uLy4uL0Zvcm0vRm9ybUJ1dHRvbic7XHJcbmltcG9ydCB7IE1vZGFsIH0gZnJvbSAnLi4vLi4vLi4vQ29udGFpbmVyL01vZGFsJztcclxuaW1wb3J0IHsgTGFuZ0ZpbHRlciB9IGZyb20gJy4uLy4uLy4uL1NlYXJjaC9MYW5nRmlsdGVyJztcclxuaW1wb3J0IHsgQ29tbWVudENyZWF0ZSB9IGZyb20gJy4vQ29tbWVudENyZWF0ZSc7XHJcbmltcG9ydCB7IENvbW1lbnRDYXJkIH0gZnJvbSAnLi9Db21tZW50Q2FyZCc7XHJcbmltcG9ydCBpMThuIGZyb20gJy4uLy4uLy4uLy4uL2VudHJ5cG9pbnRzL2kxOG4nO1xyXG5pbXBvcnQgeyB1c2VQdWJsaWNhdGlvbkNSVUQgfSBmcm9tICcuLi8uLi8uLi8uLi9DdXN0b21Ib29rL3B1YmxpY2F0aW9uL3VzZVB1YmxpY2F0aW9uQ1JVRCc7XHJcbmltcG9ydCB7IHQgfSBmcm9tICdpMThuZXh0JztcclxuXHJcblxyXG5leHBvcnQgY29uc3QgQ29tbWVudCA9ICh7b3duZXJUb3BDYXJkLCBmZXRjaEFsbEVudHJ5cG9pbnQsIGZldGNoT25lRnVsbEVudHJ5cG9pbnQsIGNyZWF0ZUVudHJ5cG9pbnR9KSA9PiB7XHJcblxyXG4gICAgY29uc3QgW2ZpbHRlcnMsIHNldEZpbHRlcnNdID0gdXNlU3RhdGUoe1xyXG4gICAgICAgIHBhZ2U6IDEsXHJcbiAgICAgICAgbGltaXQ6IDEwLFxyXG4gICAgICAgIGxhbmc6ICcnXHJcbiAgICB9KTtcclxuXHJcbiAgICBjb25zdCBzZXRGaWx0ZXJWYWx1ZSA9IChrZXksIHZhbHVlKSA9PiB7XHJcbiAgICAgICAgc2V0RmlsdGVycyhmaWx0ZXJzID0+ICh7XHJcbiAgICAgICAgICAgIC4uLmZpbHRlcnMsXHJcbiAgICAgICAgICAgIFtrZXldOiB2YWx1ZSxcclxuICAgICAgICAgICAgcGFnZTogMSAvLyBxdWFuZCBvbiBjaGFuZ2UgdW4gZmlsdHJlIG9uIGRvaXQgcmVtZXR0cmUgbGEgcGFnZSBzeXN0w6ltYXRpcXVlbWVudCDDoCAxXHJcbiAgICAgICAgfSkpO1xyXG4gICAgfTtcclxuXHJcbiAgICAgLy9vbiByZW5kZXJDaGFuZ2VcclxuICAgICBjb25zdCBjb250cm9sc1JlZiA9IHVzZVJlZihudWxsKTtcclxuICAgICBjb25zdCBzY3JvbGxUb0NvbnRyb2xzID0gKCkgPT4ge1xyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCB5ID0gY29udHJvbHNSZWYuY3VycmVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS55O1xyXG4gICAgICAgICAgICB3aW5kb3cuc2Nyb2xsQnkoMCwgeSAtICh3aW5kb3cuaW5uZXJIZWlnaHQgLyA0KSk7XHJcbiAgICAgICAgfSwgMCk7XHJcbiAgICAgfTtcclxuICAgIFxyXG4gICAgY29uc3Qge1xyXG4gICAgICAgIHJlc3VsdCwgXHJcbiAgICAgICAgZmV0Y2hPbmVGdWxsLFxyXG4gICAgICAgIGNyZWF0ZUl0ZW0sXHJcbiAgICAgICAgY3JlYXRlQW5zd2VyLFxyXG4gICAgICAgIGRlbGV0ZUl0ZW0sXHJcbiAgICAgICAgZGVsZXRlQW5zd2VyLFxyXG4gICAgICAgIGlzTG9hZGluZywgXHJcbiAgICAgICAgaGFuZGxlUGFnZUNoYW5nZSxcclxuICAgICAgICBoYXNDb250cm9sc1xyXG4gICAgfSA9IHVzZVB1YmxpY2F0aW9uQ1JVRChcclxuICAgICAgICBmZXRjaEFsbEVudHJ5cG9pbnQsXHJcbiAgICAgICAgZmV0Y2hPbmVGdWxsRW50cnlwb2ludCxcclxuICAgICAgICAnLycraTE4bi5sYW5ndWFnZSsnL2FwaS9jb21tZW50L2RlbGV0ZScsXHJcbiAgICAgICAgY3JlYXRlRW50cnlwb2ludCxcclxuICAgICAgICAnLycraTE4bi5sYW5ndWFnZSsnL2FwaS9hbnN3ZXIvY3JlYXRlL2NvbW1lbnQnLFxyXG4gICAgICAgIGZpbHRlcnMsXHJcbiAgICAgICAgc2V0RmlsdGVycyxcclxuICAgICAgICBzY3JvbGxUb0NvbnRyb2xzXHJcbiAgICApO1xyXG5cclxuXHJcbiAgICAvL0NvbW1lbnQgRk9STSAgXHJcbiAgICBjb25zdCBbZm9ybUlzT3Blbiwgb3BlbkZvcm0sIGNsb3NlRm9ybV0gPSB1c2VPcGVuU3RhdGUoZmFsc2UpO1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgaWYobG9jYXRpb24uaHJlZi5pbmNsdWRlcygnI2NvbW1lbnQnKSkge1xyXG4gICAgICAgICAgICBvcGVuRm9ybSgpO1xyXG4gICAgICAgIH1cclxuICAgIH0sIFtdKTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGhhc0NvbnRyb2xzICYmIChcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHJlZj17Y29udHJvbHNSZWZ9IGNsYXNzTmFtZT1cInF1ZXN0aW9uQW5zd2VyLWNvbnRyb2xzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmV2aWV3LXN1Yi1jb250cm9sc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPExhbmdGaWx0ZXIgaWQ9XCJjb21tZW50LWxhbmdcIiBsYW5nPXtmaWx0ZXJzLmxhbmd9IG9uQ2hhbmdlPXtzZXRGaWx0ZXJWYWx1ZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgPFNlYXJjaFJlc3VsdHMgXHJcbiAgICAgICAgICAgICAgICBpc0xvYWRpbmc9e2lzTG9hZGluZ31cclxuICAgICAgICAgICAgICAgIHJlc3VsdD17cmVzdWx0fVxyXG4gICAgICAgICAgICAgICAgcGFnZUNoYW5nZT17aGFuZGxlUGFnZUNoYW5nZX1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICByZXN1bHQgJiYgcmVzdWx0Lml0ZW1zLm1hcChjb21tZW50ID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPENvbW1lbnRDYXJkIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtjb21tZW50LmlkfSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbW1lbnQ9e2NvbW1lbnR9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVsZXRlQ29tbWVudD17ZGVsZXRlSXRlbX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNyZWF0ZUFuc3dlcj17Y3JlYXRlQW5zd2VyfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVsZXRlQW5zd2VyPXtkZWxldGVBbnN3ZXJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmZXRjaE9uZUZ1bGw9e2ZldGNoT25lRnVsbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG93bmVyVG9wQ2FyZD17b3duZXJUb3BDYXJkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICkpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIDwvU2VhcmNoUmVzdWx0cz5cclxuXHJcbiAgICAgICAgICAgIDxNb2RhbCBhZGRpdGlvbmFsQ2xhc3M9XCJyZXZpZXctZm9ybS1tb2RhbCBjZW50ZXItZm9ybS1tb2RhbFwiIGlzT3Blbj17Zm9ybUlzT3Blbn0gY2xvc2U9e2Nsb3NlRm9ybX0+XHJcbiAgICAgICAgICAgICAgICA8Q29tbWVudENyZWF0ZSBcclxuICAgICAgICAgICAgICAgICAgICBjcmVhdGVDb21tZW50PXtjcmVhdGVJdGVtfVxyXG4gICAgICAgICAgICAgICAgICAgIGNsb3NlPXtjbG9zZUZvcm19IFxyXG4gICAgICAgICAgICAgICAgICAgIG93bmVyVG9wQ2FyZD17b3duZXJUb3BDYXJkfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9Nb2RhbD5cclxuICAgICAgICAgICAgPEZvcm1CdXR0b24gYWRkaXRpb25hbENsYXNzPVwiYm9yZGVhdXgtYmxhY2sgb3V0bGluZSBjcmVhdGUtZm9ybS1idXR0b25cIiBvbkNsaWNrPXtvcGVuRm9ybX0+XHJcbiAgICAgICAgICAgICAgICB7dCgncG9zdF9hX2NvbW1lbnQnLCB7bnM6ICdtZXNzYWdlcyd9KX1cclxuICAgICAgICAgICAgPC9Gb3JtQnV0dG9uPlxyXG4gICAgICAgIDwvPlxyXG4gICAgKVxyXG59IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgUHJvZHVjdENhcmQgfSBmcm9tICcuLi8uLi8uLi9Db21wb25lbnRzL1Nob3AvUHJvZHVjdEluZGV4L1Byb2R1Y3RDYXJkJztcclxuaW1wb3J0IHsgdXNlRmV0Y2ggfSBmcm9tICcuLi8uLi8uLi9DdXN0b21Ib29rL2ZldGNoL3VzZUZldGNoJztcclxuaW1wb3J0IHsgTG9hZGVyIH0gZnJvbSAnLi4vLi4vSWNvbi9Mb2FkZXInO1xyXG5pbXBvcnQgeyBDYXJvdXNlbCB9IGZyb20gJy4uLy4uL0Nhcm91c2VsJztcclxuaW1wb3J0IHsgQ2Fyb3VzZWxSZXNwb25zaXZlUnVsZXMgfSBmcm9tICcuLi8uLi8uLi9TZXJ2aWNlL0Nhcm91c2VsUmVzcG9uc2l2ZVJ1bGVzJztcclxuaW1wb3J0IHsgUmVjaXBlQ2FyZCB9IGZyb20gJy4uLy4uLy4uL0NvbXBvbmVudHMvQmxvZy9SZWNpcGUvUmVjaXBlSW5kZXgvUmVjaXBlQ2FyZCc7XHJcbmltcG9ydCB7IEFydGljbGVDYXJkIH0gZnJvbSAnLi4vLi4vLi4vQ29tcG9uZW50cy9CbG9nL0FydGljbGUvQXJ0aWNsZUluZGV4L0FydGljbGVDYXJkJztcclxuaW1wb3J0IHsgU3ViQ2F0ZWdvcnlDYXJkIH0gZnJvbSAnLi4vLi4vQ2FyZC9TdWJDYXRlZ29yeUNhcmQnO1xyXG5cclxuXHJcblxyXG5leHBvcnQgY29uc3QgU2hvd0xpbmtlZEl0ZW1zID0gKHtlbnRyeXBvaW50fSkgPT4ge1xyXG5cclxuICAgIGNvbnN0IFtpdGVtcywgaXNMb2FkaW5nLCBlcnJvcnNdID0gdXNlRmV0Y2goZW50cnlwb2ludCk7XHJcblxyXG4gICAgY29uc3QgcmVzcG9uc2l2ZSA9IG5ldyBDYXJvdXNlbFJlc3BvbnNpdmVSdWxlcyh7XHJcbiAgICAgICAgMDoge1xyXG4gICAgICAgICAgICAwOiB7XHJcbiAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDIsXHJcbiAgICAgICAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogMVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICA1MDA6IHtcclxuICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMyxcclxuICAgICAgICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAxXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIDc1MDoge1xyXG4gICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiA0LFxyXG4gICAgICAgICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDFcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgMTA2MDoge1xyXG4gICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiA1LFxyXG4gICAgICAgICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDFcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgMTUwMDoge1xyXG4gICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiA2LFxyXG4gICAgICAgICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDFcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG4gIFxyXG5cclxuICAgIGlmKGVycm9ycykge1xyXG4gICAgICAgIHJldHVybiAnJztcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3VnZ2VzdGVkUHJvZHVjdHMtd3JhcHBlclwiPlxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBpc0xvYWRpbmcgJiYgPExvYWRlciBhZGRpdGlvbmFsQ2xhc3M9XCJtYWluLWxvYWRlclwiIC8+XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgPENhcm91c2VsIGNsYXNzTmFtZT1cImxpbmtlZC1wcm9kdWN0cy1jYXJvdXNlbFwiIGl0ZW1zPXtpdGVtc30gcmVzcG9uc2l2ZT17cmVzcG9uc2l2ZX0+XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGl0ZW1zICYmIChcclxuICAgICAgICAgICAgICAgICAgICBpdGVtcy5tYXAoaXRlbSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN3aXRjaChpdGVtLnR5cGUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJ3Byb2R1Y3QnOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiA8UHJvZHVjdENhcmQga2V5PXtpdGVtLmlkfSBwcm9kdWN0PXtpdGVtfSAvPjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJ3JlY2lwZSc6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxSZWNpcGVDYXJkIGtleT17aXRlbS5pZH0gcmVjaXBlPXtpdGVtfSAgIC8+O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAnYXJ0aWNsZSc6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxBcnRpY2xlQ2FyZCBrZXk9e2l0ZW0uaWR9IGFydGljbGU9e2l0ZW19IC8+O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAnc3ViQ2F0ZWdvcnknOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiA8U3ViQ2F0ZWdvcnlDYXJkIGtleT17aXRlbS5pZH0gc3ViQ2F0ZWdvcnk9e2l0ZW19IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAnJzsgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA8L0Nhcm91c2VsPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307Il0sIm5hbWVzIjpbIlJlYWN0IiwiQXJ0aWNsZUNhcmQiLCJfcmVmIiwiYXJ0aWNsZSIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc05hbWUiLCJocmVmIiwidGFyZ2V0Iiwic3JjIiwicGljdHVyZSIsInBhdGgiLCJhbHQiLCJ0aXRsZSIsInN1YnRpdGxlIiwiU3ViQ2F0ZWdvcnlDYXJkIiwic3ViQ2F0ZWdvcnkiLCJzbWFsbFBpY3R1cmUiLCJuYW1lIiwiTG9hZGVyIiwiQW5zd2VyQ2FyZCIsIkltcG9ydGFudEFuc3dlciIsIkNvbW1lbnRTdW1tYXJ5IiwiY29tbWVudCIsImlzTG9hZGluZyIsImZ1bGxOYW1lIiwiY3JlYXRlZEF0IiwiY29udGVudCIsImZpcnN0QW5zd2VycyIsIm1hcCIsImFuc3dlciIsInR5cGUiLCJrZXkiLCJpZCIsImlzU3VtbWFyeSIsInJlc3RBbnN3ZXJzIiwiX3JlZ2VuZXJhdG9yUnVudGltZSIsImV4cG9ydHMiLCJPcCIsIk9iamVjdCIsInByb3RvdHlwZSIsImhhc093biIsImhhc093blByb3BlcnR5IiwiZGVmaW5lUHJvcGVydHkiLCJvYmoiLCJkZXNjIiwidmFsdWUiLCIkU3ltYm9sIiwiU3ltYm9sIiwiaXRlcmF0b3JTeW1ib2wiLCJpdGVyYXRvciIsImFzeW5jSXRlcmF0b3JTeW1ib2wiLCJhc3luY0l0ZXJhdG9yIiwidG9TdHJpbmdUYWdTeW1ib2wiLCJ0b1N0cmluZ1RhZyIsImRlZmluZSIsImVudW1lcmFibGUiLCJjb25maWd1cmFibGUiLCJ3cml0YWJsZSIsImVyciIsIndyYXAiLCJpbm5lckZuIiwib3V0ZXJGbiIsInNlbGYiLCJ0cnlMb2NzTGlzdCIsInByb3RvR2VuZXJhdG9yIiwiR2VuZXJhdG9yIiwiZ2VuZXJhdG9yIiwiY3JlYXRlIiwiY29udGV4dCIsIkNvbnRleHQiLCJtYWtlSW52b2tlTWV0aG9kIiwidHJ5Q2F0Y2giLCJmbiIsImFyZyIsImNhbGwiLCJDb250aW51ZVNlbnRpbmVsIiwiR2VuZXJhdG9yRnVuY3Rpb24iLCJHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSIsIkl0ZXJhdG9yUHJvdG90eXBlIiwiZ2V0UHJvdG8iLCJnZXRQcm90b3R5cGVPZiIsIk5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlIiwidmFsdWVzIiwiR3AiLCJkZWZpbmVJdGVyYXRvck1ldGhvZHMiLCJmb3JFYWNoIiwibWV0aG9kIiwiX2ludm9rZSIsIkFzeW5jSXRlcmF0b3IiLCJQcm9taXNlSW1wbCIsImludm9rZSIsInJlc29sdmUiLCJyZWplY3QiLCJyZWNvcmQiLCJyZXN1bHQiLCJfdHlwZW9mIiwiX19hd2FpdCIsInRoZW4iLCJ1bndyYXBwZWQiLCJlcnJvciIsInByZXZpb3VzUHJvbWlzZSIsImNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnIiwic3RhdGUiLCJFcnJvciIsImRvbmVSZXN1bHQiLCJkZWxlZ2F0ZSIsImRlbGVnYXRlUmVzdWx0IiwibWF5YmVJbnZva2VEZWxlZ2F0ZSIsInNlbnQiLCJfc2VudCIsImRpc3BhdGNoRXhjZXB0aW9uIiwiYWJydXB0IiwiZG9uZSIsIm1ldGhvZE5hbWUiLCJ1bmRlZmluZWQiLCJUeXBlRXJyb3IiLCJpbmZvIiwicmVzdWx0TmFtZSIsIm5leHQiLCJuZXh0TG9jIiwicHVzaFRyeUVudHJ5IiwibG9jcyIsImVudHJ5IiwidHJ5TG9jIiwiY2F0Y2hMb2MiLCJmaW5hbGx5TG9jIiwiYWZ0ZXJMb2MiLCJ0cnlFbnRyaWVzIiwicHVzaCIsInJlc2V0VHJ5RW50cnkiLCJjb21wbGV0aW9uIiwicmVzZXQiLCJpdGVyYWJsZSIsIml0ZXJhdG9yTWV0aG9kIiwiaXNOYU4iLCJsZW5ndGgiLCJpIiwiZGlzcGxheU5hbWUiLCJpc0dlbmVyYXRvckZ1bmN0aW9uIiwiZ2VuRnVuIiwiY3RvciIsImNvbnN0cnVjdG9yIiwibWFyayIsInNldFByb3RvdHlwZU9mIiwiX19wcm90b19fIiwiYXdyYXAiLCJhc3luYyIsIlByb21pc2UiLCJpdGVyIiwia2V5cyIsInZhbCIsIm9iamVjdCIsInJldmVyc2UiLCJwb3AiLCJza2lwVGVtcFJlc2V0IiwicHJldiIsImNoYXJBdCIsInNsaWNlIiwic3RvcCIsInJvb3RSZWNvcmQiLCJydmFsIiwiZXhjZXB0aW9uIiwiaGFuZGxlIiwibG9jIiwiY2F1Z2h0IiwiaGFzQ2F0Y2giLCJoYXNGaW5hbGx5IiwiZmluYWxseUVudHJ5IiwiY29tcGxldGUiLCJmaW5pc2giLCJfY2F0Y2giLCJ0aHJvd24iLCJkZWxlZ2F0ZVlpZWxkIiwiYXN5bmNHZW5lcmF0b3JTdGVwIiwiZ2VuIiwiX25leHQiLCJfdGhyb3ciLCJfYXN5bmNUb0dlbmVyYXRvciIsImFyZ3MiLCJhcmd1bWVudHMiLCJhcHBseSIsIl9zbGljZWRUb0FycmF5IiwiYXJyIiwiX2FycmF5V2l0aEhvbGVzIiwiX2l0ZXJhYmxlVG9BcnJheUxpbWl0IiwiX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5IiwiX25vbkl0ZXJhYmxlUmVzdCIsIm8iLCJtaW5MZW4iLCJfYXJyYXlMaWtlVG9BcnJheSIsIm4iLCJ0b1N0cmluZyIsIkFycmF5IiwiZnJvbSIsInRlc3QiLCJsZW4iLCJhcnIyIiwiX2kiLCJfcyIsIl9lIiwiX3giLCJfciIsIl9hcnIiLCJfbiIsIl9kIiwiaXNBcnJheSIsInVzZUVmZmVjdCIsInVzZVJlZiIsInVzZVN0YXRlIiwidXNlT3BlblN0YXRlIiwiRm9ybUJ1dHRvbiIsIk1vZGFsIiwiRXhwYW5kTW9yZUljb24iLCJBbnN3ZXJDcmVhdGUiLCJQdWJsaWNhdGlvblJlbW92ZXIiLCJ1c2VSZW1vdmVyIiwidXNlVHJhbnNsYXRpb24iLCJubDJiciIsIkNvbW1lbnRDYXJkIiwib3duZXJUb3BDYXJkIiwiZGVsZXRlQ29tbWVudCIsImRlbGV0ZUFuc3dlciIsImNyZWF0ZUFuc3dlciIsImZldGNoT25lRnVsbCIsIl91c2VUcmFuc2xhdGlvbiIsInQiLCJfdXNlT3BlblN0YXRlIiwiX3VzZU9wZW5TdGF0ZTIiLCJyZXN0SXNPcGVuIiwib3BlblJlc3QiLCJjbG9zZVJlc3QiLCJfdXNlU3RhdGUiLCJfdXNlU3RhdGUyIiwic2V0TG9hZGluZyIsImZldGNoRnVsbENvbW1lbnQiLCJfcmVmMiIsIl9jYWxsZWUiLCJmb3JjZSIsIl9hcmdzIiwiX2NhbGxlZSQiLCJfY29udGV4dCIsIl91c2VPcGVuU3RhdGUzIiwiX3VzZU9wZW5TdGF0ZTQiLCJmb3JtSXNPcGVuIiwib3BlbkZvcm0iLCJjbG9zZUZvcm0iLCJsb2NhdGlvbiIsImluY2x1ZGVzIiwiY29tbWVudENhcmRSZWYiLCJjdXJyZW50Iiwic2Nyb2xsSW50b1ZpZXciLCJfdXNlUmVtb3ZlciIsImNvbmZpcm1hdGlvbklzT3BlbiIsIm9wZW5Db25maXJtYXRpb24iLCJjbG9zZUNvbmZpcm1hdGlvbiIsImlzUmVtb3ZpbmciLCJzZXRSZW1vdmluZyIsInJlZiIsImNhblJlbW92ZSIsImRlbGV0ZVB1YmxpY2F0aW9uIiwib3duZXJJZCIsIkZyYWdtZW50IiwiY29uY2F0IiwiX3RvQ29uc3VtYWJsZUFycmF5IiwiYWRkaXRpb25hbENsYXNzIiwiY291bnRSZXN0QW5zd2VycyIsIm9uQ2xpY2siLCJjb3VudCIsImlzT3BlbiIsImNsb3NlIiwiZmV0Y2hBZnRlclN1Ym1pdFN1Y2Nlc3MiLCJ1c2VDb250ZXh0IiwidXNlRm9ybVdpdGhWYWxpZGF0aW9uIiwieXVwIiwiQ2hlY2tJY29uIiwiVGV4dEZpZWxkIiwiU2V0U3VibWl0SW5mb0NvbnRleHQiLCJBcGlFcnJvciIsInNjaGVtYSIsInN0cmluZyIsIm1heCIsIm5zIiwicmVxdWlyZWQiLCJhZ3JlZVRlcm1zIiwiYm9vbCIsImlzVHJ1ZSIsIkNvbW1lbnRGb3JtIiwiX2Vycm9ycyRjb250ZW50IiwiY3JlYXRlQ29tbWVudCIsIl91c2VGb3JtV2l0aFZhbGlkYXRpbyIsInJlZ2lzdGVyIiwiaGFuZGxlU3VibWl0IiwiZXJyb3JzIiwiaXNTdWJtaXR0aW5nIiwiY29udHJvbCIsInNldEVycm9yIiwic2V0VmFsdWUiLCJzZXRTdWJtaXRJbmZvIiwib25TdWJtaXQiLCJmb3JtRGF0YSIsIm1lc3NhZ2UiLCJ0MCIsImVudHJpZXMiLCJfcmVmMyIsIl9yZWY0IiwiZmllbGQiLCJfeDIiLCJtYXhMZW5ndGgiLCJfZXh0ZW5kcyIsImh0bWxGb3IiLCJyb2xlIiwibG9hZGluZyIsImRpc2FibGVkIiwicmVkaXJlY3RUb0xvZ2luIiwidXNlR2V0VXNlciIsIkNvbW1lbnRDcmVhdGUiLCJfdXNlR2V0VXNlciIsInVzZXIiLCJ1cGRhdGVVc2VyIiwiU2VhcmNoUmVzdWx0cyIsIkxhbmdGaWx0ZXIiLCJpMThuIiwidXNlUHVibGljYXRpb25DUlVEIiwiQ29tbWVudCIsImZldGNoQWxsRW50cnlwb2ludCIsImZldGNoT25lRnVsbEVudHJ5cG9pbnQiLCJjcmVhdGVFbnRyeXBvaW50IiwicGFnZSIsImxpbWl0IiwibGFuZyIsImZpbHRlcnMiLCJzZXRGaWx0ZXJzIiwic2V0RmlsdGVyVmFsdWUiLCJfb2JqZWN0U3ByZWFkMiIsIl9vYmplY3RTcHJlYWQiLCJfZGVmaW5lUHJvcGVydHkiLCJjb250cm9sc1JlZiIsInNjcm9sbFRvQ29udHJvbHMiLCJzZXRUaW1lb3V0IiwieSIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsIndpbmRvdyIsInNjcm9sbEJ5IiwiaW5uZXJIZWlnaHQiLCJfdXNlUHVibGljYXRpb25DUlVEIiwibGFuZ3VhZ2UiLCJjcmVhdGVJdGVtIiwiZGVsZXRlSXRlbSIsImhhbmRsZVBhZ2VDaGFuZ2UiLCJoYXNDb250cm9scyIsIm9uQ2hhbmdlIiwicGFnZUNoYW5nZSIsIml0ZW1zIiwiUHJvZHVjdENhcmQiLCJ1c2VGZXRjaCIsIkNhcm91c2VsIiwiQ2Fyb3VzZWxSZXNwb25zaXZlUnVsZXMiLCJSZWNpcGVDYXJkIiwiU2hvd0xpbmtlZEl0ZW1zIiwiZW50cnlwb2ludCIsIl91c2VGZXRjaCIsIl91c2VGZXRjaDIiLCJyZXNwb25zaXZlIiwic2xpZGVzVG9TaG93Iiwic2xpZGVzVG9TY3JvbGwiLCJpdGVtIiwicHJvZHVjdCIsInJlY2lwZSJdLCJzb3VyY2VSb290IjoiIn0=
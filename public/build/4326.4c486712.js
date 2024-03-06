/*! For license information please see 4326.4c486712.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4326],{32039:(e,t,r)=>{r.d(t,{W:()=>c});r(47941),r(82772),r(82526),r(19601),r(24812);var n=r(67294),a=["additionalClass"];function o(){return o=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},o.apply(this,arguments)}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=function(e){var t=e.additionalClass,r=i(e,a);return n.createElement("svg",o({className:"icon i-star"+(t?" "+t:"")},r,{enableBackground:"new 0 0 32 32",viewBox:"0 0 32 32",xmlns:"http://www.w3.org/2000/svg"}),n.createElement("g",{id:"star"},n.createElement("path",{fill:"currentColor",d:"m30.164 12.724c-.118-.362-.431-.626-.808-.681l-8.609-1.25-3.85-7.802c-.337-.683-1.457-.683-1.794 0l-3.85 7.802-8.609 1.25c-.377.055-.69.319-.808.681s-.02.759.253 1.025l6.229 6.072-1.471 8.576c-.064.375.09.754.398.978.309.226.717.254 1.053.076l7.702-4.048 7.701 4.048c.146.077.306.115.465.115.207 0 .414-.064.588-.191.308-.224.462-.603.398-.978l-1.471-8.576 6.229-6.072c.273-.266.371-.663.254-1.025zm-8.256 6.033c-.235.229-.343.561-.288.885l1.217 7.097-6.373-3.35c-.144-.077-.304-.116-.464-.116s-.32.038-.465.115l-6.373 3.35 1.217-7.097c.055-.324-.052-.655-.288-.885l-5.155-5.025 7.124-1.035c.326-.047.607-.252.753-.547l3.187-6.456 3.186 6.456c.146.295.427.5.753.547l7.124 1.035z"})))}},20463:(e,t,r)=>{r.d(t,{m:()=>o});var n=r(67294),a=r(19690),o=function(e){var t=e.product;return n.createElement("div",{className:"review-form-product-card"},t.firstPicture&&n.createElement("img",{className:"review-form-product-img",src:t.firstPicture.path,alt:t.firstPicture.alt}),n.createElement("div",{className:"review-form-product-text"},n.createElement("div",{className:"review-form-product-designation"},t.designation),n.createElement("div",{className:"review-form-product-sub-designation"},t.basePackaging.label),n.createElement("div",{className:"review-form-product-price"},n.createElement(a.g,{price:t.basePackaging.price}))))}},54326:(e,t,r)=>{r.d(t,{P:()=>te});r(32564),r(21249),r(79753),r(82526),r(41817),r(41539),r(32165),r(66992),r(78783),r(33948),r(57658),r(47042),r(68309),r(91038),r(74916),r(77601),r(21703),r(96647),r(96649),r(96078),r(9653),r(69070),r(47941),r(57327),r(38880),r(89554),r(54747),r(49337),r(33321);var n=r(67294),a=r(73605),o=r(32417),i=r(54026),c=r(37666),l=r(53059),s=r(58625),u=r(26945),m=r(29992),f=r(32039),d=function(e){for(var t=e.review,r=[],a=1;a<=5;a++)a<=t.rate?r.push(n.createElement(m.V,{key:a})):r.push(n.createElement(f.W,{key:a}));return n.createElement("div",{className:"review-card-stars"},r)},v=r(53612),p=r(36609),h=function(e){var t=e.review;return n.createElement("li",{className:"review-card"},n.createElement("div",{className:"review-card-header"},n.createElement("div",{className:"review-card-header-left"},n.createElement(d,{review:t}),n.createElement("div",{className:"review-card-infos"},n.createElement("span",null,t.fullName),n.createElement("span",null,t.createdAt))),t.bought&&n.createElement("div",{className:"review-card-header-right"},n.createElement(a.t,null),n.createElement("span",null,(0,p.t)("verified_purchase",{ns:"messages"})))),n.createElement("div",{className:"review-card-body"},n.createElement("div",{className:"review-card-body-title"},t.title),n.createElement("div",{className:"review-card-body-content"},t.comment)),n.createElement("div",{className:"qa-card-bottom review-card-bottom"},t.answers&&t.answers.map((function(e){return"customer"===e.type?n.createElement(o.F,{key:e.id,answer:e,isSummary:!0}):n.createElement(i.j,{key:e.id,answer:e,isSummary:!0})}))))},y=r(21344),g=r(20463),b=r(91072),w=r(70942),E=r.n(w);function x(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,a,o,i,c=[],l=!0,s=!1;try{if(o=(r=r.call(e)).next,0===t){if(Object(r)!==r)return;l=!1}else for(;!(l=(n=o.call(r)).done)&&(c.push(n.value),c.length!==t);l=!0);}catch(e){s=!0,a=e}finally{try{if(!l&&null!=r.return&&(i=r.return(),Object(i)!==i))return}finally{if(s)throw a}}return c}}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return O(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return O(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function O(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var S=function(e){var t=e.review,r=e.deleteReview,m=e.createAnswer,f=e.deleteAnswer,p=e.product,w=void 0===p?null:p,O=(0,b.$G)("messages").t,S=x((0,v.Z)(!1),3),N=S[0],j=S[1],_=S[2],A=(0,c.O)(),C=A.confirmationIsOpen,k=A.openConfirmation,L=A.closeConfirmation,P=A.isRemoving,T=A.setRemoving;return n.createElement("li",{className:"review-card"+(C?" remove-confirm":"")+(P?" is-removing":"")},!w&&n.createElement(g.m,{product:t.product}),n.createElement("div",{className:"review-card-header"},n.createElement("div",{className:"review-card-header-left"},n.createElement(d,{review:t}),n.createElement("div",{className:"review-card-infos"},n.createElement("span",null,t.fullName),n.createElement("span",null,t.createdAt))),t.bought&&n.createElement("div",{className:"review-card-header-right"},n.createElement(a.t,null),n.createElement("span",null,O("verified_purchase")))),n.createElement("div",{className:"review-card-body"},n.createElement("div",{className:"review-card-body-title"},t.title),n.createElement("div",{className:"review-card-body-content"},E()(t.comment)),t.canRemove&&n.createElement(l.J,{id:t.id,deletePublication:function(){return r(t.id)},confirmationIsOpen:C,openConfirmation:k,closeConfirmation:L,isRemoving:P,setRemoving:T})),n.createElement("div",{className:"qa-card-bottom review-card-bottom"},t.answers&&t.answers.map((function(e){return"customer"===e.type?n.createElement(o.F,{key:e.id,ownerId:t.id,answer:e,deleteAnswer:f}):n.createElement(i.j,{key:e.id,ownerId:t.id,answer:e,deleteAnswer:f})}))),t.canAnswer&&n.createElement("div",{className:"qa-card-footer"},n.createElement(s.u,{additionalClass:"answer-form-modal center-form-modal",isOpen:N,close:_},n.createElement(u.Q,{createAnswer:m,ownerId:t.id,ownerTopCard:n.createElement(g.m,{product:null!=w?w:t.product}),close:_,verifyLogin:!1},n.createElement(h,{review:t}))),n.createElement(y.O,{onClick:j,additionalClass:"bordeaux-grey create-form-small-button"},O("submit.answer"))))},N=r(79844),j=r(52087),_=(r(69720),r(88674),r(72443),r(39341),r(73706),r(10408),r(78011),r(30489),r(68304),r(65069),r(19601),r(24812),r(81433)),A=r(16310),C=r(60979),k=r(52264),L=(r(26699),r(83710),r(39714),{1:(0,p.t)("rate.verybad",{ns:"configs"}),2:(0,p.t)("rate.bad",{ns:"configs"}),3:(0,p.t)("rate.medium",{ns:"configs"}),4:(0,p.t)("rate.good",{ns:"configs"}),5:(0,p.t)("rate.verygood",{ns:"configs"})}),P=function(e){var t=e.rate,r=e.setValue,a=e.error,o=e.clearErrors,i=function(e){r("rate",e),[1,2,3,4,5].includes(e)&&o("rate")};return n.createElement("div",{className:"review-form-starsField"},n.createElement("div",{className:"review-form-starsField-label"+(a?" is-invalid":"")},(0,p.t)("note",{ns:"messages"})," *"),n.createElement("div",{className:"review-form-stars"+(t?" color-"+t.toString():"")},n.createElement(T,{value:1,isFull:t>=1,onSelect:i}),n.createElement(T,{value:2,isFull:t>=2,onSelect:i}),n.createElement(T,{value:3,isFull:t>=3,onSelect:i}),n.createElement(T,{value:4,isFull:t>=4,onSelect:i}),n.createElement(T,{value:5,isFull:t>=5,onSelect:i}),n.createElement("span",{className:"review-form-stars-label"},L[t])),a&&n.createElement("div",{className:"form-error"},a))},T=function(e){var t=e.value,r=e.isFull,a=e.onSelect;return n.createElement("button",{type:"button",onClick:function(e){e.preventDefault(),a(t)},"aria-label":(0,p.t)("choose_review_note",{ns:"messages",note:t}),title:(0,p.t)("choose_review_note",{ns:"messages",note:t})},r?n.createElement(m.V,null):n.createElement(f.W,null))},I=r(82937),F=r(32568),R=r(20027);function q(e){return q="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},q(e)}function G(){return G=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},G.apply(this,arguments)}function B(){B=function(){return e};var e={},t=Object.prototype,r=t.hasOwnProperty,n=Object.defineProperty||function(e,t,r){e[t]=r.value},a="function"==typeof Symbol?Symbol:{},o=a.iterator||"@@iterator",i=a.asyncIterator||"@@asyncIterator",c=a.toStringTag||"@@toStringTag";function l(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{l({},"")}catch(e){l=function(e,t,r){return e[t]=r}}function s(e,t,r,a){var o=t&&t.prototype instanceof f?t:f,i=Object.create(o.prototype),c=new N(a||[]);return n(i,"_invoke",{value:E(e,r,c)}),i}function u(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(e){return{type:"throw",arg:e}}}e.wrap=s;var m={};function f(){}function d(){}function v(){}var p={};l(p,o,(function(){return this}));var h=Object.getPrototypeOf,y=h&&h(h(j([])));y&&y!==t&&r.call(y,o)&&(p=y);var g=v.prototype=f.prototype=Object.create(p);function b(e){["next","throw","return"].forEach((function(t){l(e,t,(function(e){return this._invoke(t,e)}))}))}function w(e,t){function a(n,o,i,c){var l=u(e[n],e,o);if("throw"!==l.type){var s=l.arg,m=s.value;return m&&"object"==q(m)&&r.call(m,"__await")?t.resolve(m.__await).then((function(e){a("next",e,i,c)}),(function(e){a("throw",e,i,c)})):t.resolve(m).then((function(e){s.value=e,i(s)}),(function(e){return a("throw",e,i,c)}))}c(l.arg)}var o;n(this,"_invoke",{value:function(e,r){function n(){return new t((function(t,n){a(e,r,t,n)}))}return o=o?o.then(n,n):n()}})}function E(e,t,r){var n="suspendedStart";return function(a,o){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===a)throw o;return _()}for(r.method=a,r.arg=o;;){var i=r.delegate;if(i){var c=x(i,r);if(c){if(c===m)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var l=u(e,t,r);if("normal"===l.type){if(n=r.done?"completed":"suspendedYield",l.arg===m)continue;return{value:l.arg,done:r.done}}"throw"===l.type&&(n="completed",r.method="throw",r.arg=l.arg)}}}function x(e,t){var r=t.method,n=e.iterator[r];if(void 0===n)return t.delegate=null,"throw"===r&&e.iterator.return&&(t.method="return",t.arg=void 0,x(e,t),"throw"===t.method)||"return"!==r&&(t.method="throw",t.arg=new TypeError("The iterator does not provide a '"+r+"' method")),m;var a=u(n,e.iterator,t.arg);if("throw"===a.type)return t.method="throw",t.arg=a.arg,t.delegate=null,m;var o=a.arg;return o?o.done?(t[e.resultName]=o.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,m):o:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,m)}function O(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function S(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function N(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(O,this),this.reset(!0)}function j(e){if(e){var t=e[o];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var n=-1,a=function t(){for(;++n<e.length;)if(r.call(e,n))return t.value=e[n],t.done=!1,t;return t.value=void 0,t.done=!0,t};return a.next=a}}return{next:_}}function _(){return{value:void 0,done:!0}}return d.prototype=v,n(g,"constructor",{value:v,configurable:!0}),n(v,"constructor",{value:d,configurable:!0}),d.displayName=l(v,c,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===d||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,v):(e.__proto__=v,l(e,c,"GeneratorFunction")),e.prototype=Object.create(g),e},e.awrap=function(e){return{__await:e}},b(w.prototype),l(w.prototype,i,(function(){return this})),e.AsyncIterator=w,e.async=function(t,r,n,a,o){void 0===o&&(o=Promise);var i=new w(s(t,r,n,a),o);return e.isGeneratorFunction(r)?i:i.next().then((function(e){return e.done?e.value:i.next()}))},b(g),l(g,c,"Generator"),l(g,o,(function(){return this})),l(g,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=Object(e),r=[];for(var n in t)r.push(n);return r.reverse(),function e(){for(;r.length;){var n=r.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},e.values=j,N.prototype={constructor:N,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(S),!e)for(var t in this)"t"===t.charAt(0)&&r.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function n(r,n){return i.type="throw",i.arg=e,t.next=r,n&&(t.method="next",t.arg=void 0),!!n}for(var a=this.tryEntries.length-1;a>=0;--a){var o=this.tryEntries[a],i=o.completion;if("root"===o.tryLoc)return n("end");if(o.tryLoc<=this.prev){var c=r.call(o,"catchLoc"),l=r.call(o,"finallyLoc");if(c&&l){if(this.prev<o.catchLoc)return n(o.catchLoc,!0);if(this.prev<o.finallyLoc)return n(o.finallyLoc)}else if(c){if(this.prev<o.catchLoc)return n(o.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return n(o.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var a=this.tryEntries[n];if(a.tryLoc<=this.prev&&r.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var o=a;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=e,i.arg=t,o?(this.method="next",this.next=o.finallyLoc,m):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),m},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),S(r),m}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var a=n.arg;S(r)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,r){return this.delegate={iterator:j(e),resultName:t,nextLoc:r},"next"===this.method&&(this.arg=void 0),m}},e}function D(e,t,r,n,a,o,i){try{var c=e[o](i),l=c.value}catch(e){return void r(e)}c.done?t(l):Promise.resolve(l).then(n,a)}function Z(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,a,o,i,c=[],l=!0,s=!1;try{if(o=(r=r.call(e)).next,0===t){if(Object(r)!==r)return;l=!1}else for(;!(l=(n=o.call(r)).done)&&(c.push(n.value),c.length!==t);l=!0);}catch(e){s=!0,a=e}finally{try{if(!l&&null!=r.return&&(i=r.return(),Object(i)!==i))return}finally{if(s)throw a}}return c}}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return V(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return V(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function V(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var $=A.Ry({rate:A.Rx().min(1,(0,p.t)("assert.choice",{ns:"constraints"})).max(5,(0,p.t)("assert.choice",{ns:"constraints"})).required(),fullName:A.Z_().max(200,(0,p.t)("assert.length.max",{ns:"constraints",max:200})).required(),email:A.Z_().email((0,p.t)("assert.email",{ns:"constraints"})).max(200,(0,p.t)("assert.length.max",{ns:"constraints",max:200})).required(),title:A.Z_().max(100,(0,p.t)("assert.length.max",{ns:"constraints",max:100})).required(),comment:A.Z_().max(500,(0,p.t)("assert.length.max",{ns:"constraints",max:500})).required(),agreeTerms:A.Xg().isTrue((0,p.t)("assert.checkbox.true",{ns:"constraints"})).required()}).required(),U=function(e){var t,r,a,o,i,c=e.close,l=e.createReview,s=(0,b.$G)("messages").t,u=(0,R.p)(),m=u.user;u.updateUser;(0,n.useEffect)((function(){m&&(x("fullName",m.firstName),x("email",m.email))}),[m]);var f=(0,_.U)($,{rate:null,fullName:"",email:"",title:"",comment:"",agreeTerms:!1}),d=f.register,v=f.handleSubmit,p=f.errors,h=f.isSubmitting,g=f.control,w=f.setError,E=f.clearErrors,x=f.setValue,O=f.watch,S=Z((0,n.useState)(!1),2),N=S[0],j=S[1],A=(0,n.useContext)(I.Z),L=function(){var e,t=(e=B().mark((function e(t){return B().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!N){e.next=2;break}return e.abrupt("return");case 2:return j(!0),e.prev=3,e.next=6,l(t);case 6:A({type:"success",message:s("success.submit.review")}),c(),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(3),e.t0 instanceof F.MS?(m&&e.t0.errors.uniqueEmail&&(A({type:"danger",message:e.t0.errors.uniqueEmail}),c()),Object.entries(e.t0.errors).forEach((function(e){var t=Z(e,2),r=t[0],n=t[1];w(r,{type:"custom",message:n})}))):A({type:"danger",message:s("error.temporary_failure")});case 13:j(!1);case 14:case"end":return e.stop()}}),e,null,[[3,10]])})),function(){var t=this,r=arguments;return new Promise((function(n,a){var o=e.apply(t,r);function i(e){D(o,n,a,i,c,"next",e)}function c(e){D(o,n,a,i,c,"throw",e)}i(void 0)}))});return function(e){return t.apply(this,arguments)}}();return n.createElement("form",{onSubmit:v(L),className:"review-form box-form"},n.createElement(P,{rate:O("rate"),setValue:x,clearErrors:E,error:null===(t=p.rate)||void 0===t?void 0:t.message}),n.createElement(k.n,{control:g,name:"title",error:null===(r=p.title)||void 0===r?void 0:r.message,maxLength:100},s("review_title")," *"),n.createElement(k.n,{type:"textarea",control:g,name:"comment",error:null===(a=p.comment)||void 0===a?void 0:a.message,maxLength:500},s("comment")," *"),!1===m&&n.createElement(n.Fragment,null,n.createElement(k.n,{control:g,name:"fullName",error:null===(o=p.fullName)||void 0===o?void 0:o.message,maxLength:100},s("firstName")," *"),n.createElement(k.n,{control:g,name:"email",error:null===(i=p.email)||void 0===i?void 0:i.message,maxLength:200},s("email_address")," *")),n.createElement("div",{className:"checkbox-group"+(p.agreeTerms?" is-invalid":"")},n.createElement("input",G({},d("agreeTerms"),{className:"form-checkbox",id:"agreeTerms",type:"checkbox"})),n.createElement("label",{htmlFor:"agreeTerms",className:"form-label"},n.createElement("div",{className:"custom-checkbox",role:"checkbox","aria-labelledby":"checkbox-label"},n.createElement(C.n,null)),n.createElement("span",{id:"checkbox-label"},s("agree_terms_of_use")," *")),p.agreeTerms&&n.createElement("div",{className:"form-error"},p.agreeTerms.message)),n.createElement("div",{className:"submit-group double"},n.createElement(y.O,{additionalClass:"bordeaux",loading:N||h},s("submit.publish")),n.createElement(y.O,{additionalClass:"cancel",disabled:N||h,onClick:c},s("cancel"))))},M=function(e){var t=e.ownerTopCard,r=e.createReview,a=e.close;return n.createElement("div",{className:"review-form-wrapper"},t,n.createElement("h3",{className:"review-form-title"},(0,p.t)("my_review",{ns:"messages"})),n.createElement(U,{close:a,createReview:r}))},z=r(99734),W=r(67136),Y=r(89275);function H(e){return H="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},H(e)}function J(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function Q(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?J(Object(r),!0).forEach((function(t){X(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):J(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function X(e,t,r){return(t=function(e){var t=function(e,t){if("object"!==H(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t||"default");if("object"!==H(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===H(t)?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function K(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,a,o,i,c=[],l=!0,s=!1;try{if(o=(r=r.call(e)).next,0===t){if(Object(r)!==r)return;l=!1}else for(;!(l=(n=o.call(r)).done)&&(c.push(n.value),c.length!==t);l=!0);}catch(e){s=!0,a=e}finally{try{if(!l&&null!=r.return&&(i=r.return(),Object(i)!==i))return}finally{if(s)throw a}}return c}}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return ee(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return ee(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function ee(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var te=function(e){var t,r=e.fetchAllEntrypoint,a=e.createEntrypoint,o=void 0===a?null:a,i=e.product,c=void 0===i?null:i,l=(0,b.$G)("messages").t,u=K((0,n.useState)({page:1,limit:10,sortBy:"rate_DESC",lang:""}),2),m=u[0],f=u[1],d=function(e,t){f((function(r){return Q(Q({},r),{},X({},e,t))}))},p=(X(t={},l("sort.note_DESC",{ns:"configs"}),"rate_DESC"),X(t,l("sort.note_ASC",{ns:"configs"}),"rate_ASC"),X(t,l("sort.createdAt_DESC",{ns:"configs"}),"createdAt_DESC"),X(t,l("sort.createdAT_ASC",{ns:"configs"}),"createdAt_ASC"),t),h=(0,n.useRef)(null),w=(0,Y.z)(r,"/"+z.Z.language+"/api/review/show","/"+z.Z.language+"/api/review/delete",o,"/"+z.Z.language+"/api/answer/create/review",m,f,(function(){setTimeout((function(){var e=h.current.getBoundingClientRect().y;window.scrollBy(0,e-window.innerHeight/4)}),0)})),E=w.result,x=w.createItem,O=w.createAnswer,_=w.deleteItem,A=w.deleteAnswer,C=w.isLoading,k=w.handlePageChange,L=w.hasControls,P=K((0,v.Z)(!1),3),T=P[0],I=P[1],F=P[2];return n.createElement(n.Fragment,null,n.createElement("div",{ref:h,className:"review-controls"},c&&n.createElement(n.Fragment,null,n.createElement(s.u,{additionalClass:"review-form-modal center-form-modal",isOpen:T,close:F},n.createElement(M,{createReview:x,close:F,ownerTopCard:n.createElement(g.m,{product:c})})),n.createElement(y.O,{additionalClass:"bordeaux-black outline",onClick:I},E&&0===E.count?l("submit.first_review"):l("submit.review"))),L&&n.createElement(N.B,{additionalClass:"sub-sort-control",sortBy:m.sortBy,setSortBy:function(e){d("sortBy",e)},choices:p})),L&&n.createElement("div",{className:"review-sub-controls"},n.createElement(W.V,{id:"review-lang",lang:m.lang,onChange:d})),n.createElement(j.s,{isLoading:C,result:E,pageChange:k},E&&E.items.map((function(e){return n.createElement(S,{key:e.id,review:e,deleteReview:_,createAnswer:O,deleteAnswer:A,product:c})}))))}}}]);
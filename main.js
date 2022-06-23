/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/styles.css":
/*!*********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/styles.css ***!
  \*********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./fonts/Noto_Sans/NotoSans-Regular.ttf */ "./src/styles/fonts/Noto_Sans/NotoSans-Regular.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./fonts/Noto_Sans/NotoSans-Medium.ttf */ "./src/styles/fonts/Noto_Sans/NotoSans-Medium.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ./fonts/Noto_Sans/NotoSans-Bold.ttf */ "./src/styles/fonts/Noto_Sans/NotoSans-Bold.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ./fonts/Stick_No_Bills/static/StickNoBills-SemiBold.ttf */ "./src/styles/fonts/Stick_No_Bills/static/StickNoBills-SemiBold.ttf"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@font-face {\n    font-family: Noto-Sans;\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n    weight: 600;\n}\n@font-face {\n    font-family: Noto-Sans;\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n    weight: 700;\n}\n@font-face {\n    font-family: Noto-Sans;\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ");\n    weight: 800;\n}\n@font-face {\n    font-family: Stick-No-Bills;\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ");\n}\n\n* {\n    margin: 0;\n    padding: 0;\n}\n\n.container {\n    height: 100vh;\n    width: 100vw;\n    display: flex;\n    flex-direction: column;\n    background-color: #002647;\n    color: #8FADC7;\n}\n\n.header {\n    height: 20%;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.header h1 {\n    padding-top: 20px;\n    font-family: \"Stick-No-Bills\";\n    font-size: 120px;\n}\n\n.main {\n    font-family: \"Stick-No-Bills\";\n    height: 80%;\n    display: flex;\n}\n\n/* Initial popup before game start */\n.background {\n    height: 100vh;\n    width: 100vw;\n    position:absolute;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    background-color: black;\n    opacity: 0.5;\n    z-index: 99;\n}\n\n.popup {\n    height: 780px;\n    min-width: 530px;\n    width: 50%;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    gap: 20px;\n    position: absolute;\n    left: 25%;\n    top: 5%;\n    background-color: #002647;\n    z-index: 999;\n    border-radius: 10px;\n    font-family: \"Noto-Sans\";\n}\n\nh2 {\n    font-size: 50px;\n}\n\n.popup-header p {\n    font-size: 25px;\n}\n\n.popup-header {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    gap: 5px;\n}\n\n.popup-grid {\n    display: flex;\n}\n\n.popup-header img {\n    padding: 20px 0px 5px 0px;\n    height: 45px;\n}\n\n/* 'Start Game' button */\n.start {\n    height: 40px;\n    width: 300px;\n    background-color: #8FADC7;\n    border: none;\n    border-radius: 10px;\n    font-family: 'Noto-Sans';\n    font-size: 25px;\n    color: #002647;\n}\n\n.player, \n.computer {\n    min-height: 650px;\n    min-width: 500px;\n    width: 50%;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    position: relative;\n}\n.player {\n    padding-left: 10%;\n}\n.computer {\n    padding-right: 10%;\n}\n\n.player h4, \n.computer h4 {\n    position: absolute;\n    top: 0;\n    font-size: 50px;\n}\n\n/* get columns lined up */\n.player-grid, \n.computer-grid {\n    height: 400px;\n    width: 400px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    position: absolute;\n    top: 120px;\n}\n\n/* get boxes within column correctly positioned */\n.column {\n    display: flex;\n    flex-direction: column-reverse;\n}\n\n.popup-grid .box,\n.player-grid .box, \n.computer-grid .box {\n    height: 45px; \n    width: 45px; \n    background-color: #8FADC7;;\n    border: 1px solid #64798c;\n}\n\n.footer {\n    padding-bottom: 5px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    gap: 10px;\n    font-size: 20px;\n    font-family: 'Noto-Sans';\n}\n\n.footer p {\n    padding-bottom: 5px;\n}\n\n/* Github icon */\n.footer svg {\n    fill: #8FADC7;\n    justify-self: end;\n}\n\n/* hover effects */\n.computer .box:hover {\n    cursor: crosshair;\n}\n\n.popup-header img:hover, \n.start:hover {\n    cursor: pointer;\n    transform: scale(1.05);\n}", "",{"version":3,"sources":["webpack://./src/styles/styles.css"],"names":[],"mappings":"AAAA;IACI,sBAAsB;IACtB,4CAAgD;IAChD,WAAW;AACf;AACA;IACI,sBAAsB;IACtB,4CAA+C;IAC/C,WAAW;AACf;AACA;IACI,sBAAsB;IACtB,4CAA6C;IAC7C,WAAW;AACf;AACA;IACI,2BAA2B;IAC3B,4CAAiE;AACrE;;AAEA;IACI,SAAS;IACT,UAAU;AACd;;AAEA;IACI,aAAa;IACb,YAAY;IACZ,aAAa;IACb,sBAAsB;IACtB,yBAAyB;IACzB,cAAc;AAClB;;AAEA;IACI,WAAW;IACX,aAAa;IACb,uBAAuB;IACvB,mBAAmB;AACvB;;AAEA;IACI,iBAAiB;IACjB,6BAA6B;IAC7B,gBAAgB;AACpB;;AAEA;IACI,6BAA6B;IAC7B,WAAW;IACX,aAAa;AACjB;;AAEA,oCAAoC;AACpC;IACI,aAAa;IACb,YAAY;IACZ,iBAAiB;IACjB,aAAa;IACb,mBAAmB;IACnB,uBAAuB;IACvB,uBAAuB;IACvB,YAAY;IACZ,WAAW;AACf;;AAEA;IACI,aAAa;IACb,gBAAgB;IAChB,UAAU;IACV,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,mBAAmB;IACnB,SAAS;IACT,kBAAkB;IAClB,SAAS;IACT,OAAO;IACP,yBAAyB;IACzB,YAAY;IACZ,mBAAmB;IACnB,wBAAwB;AAC5B;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,uBAAuB;IACvB,QAAQ;AACZ;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,yBAAyB;IACzB,YAAY;AAChB;;AAEA,wBAAwB;AACxB;IACI,YAAY;IACZ,YAAY;IACZ,yBAAyB;IACzB,YAAY;IACZ,mBAAmB;IACnB,wBAAwB;IACxB,eAAe;IACf,cAAc;AAClB;;AAEA;;IAEI,iBAAiB;IACjB,gBAAgB;IAChB,UAAU;IACV,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,uBAAuB;IACvB,kBAAkB;AACtB;AACA;IACI,iBAAiB;AACrB;AACA;IACI,kBAAkB;AACtB;;AAEA;;IAEI,kBAAkB;IAClB,MAAM;IACN,eAAe;AACnB;;AAEA,yBAAyB;AACzB;;IAEI,aAAa;IACb,YAAY;IACZ,aAAa;IACb,mBAAmB;IACnB,uBAAuB;IACvB,kBAAkB;IAClB,UAAU;AACd;;AAEA,iDAAiD;AACjD;IACI,aAAa;IACb,8BAA8B;AAClC;;AAEA;;;IAGI,YAAY;IACZ,WAAW;IACX,yBAAyB;IACzB,yBAAyB;AAC7B;;AAEA;IACI,mBAAmB;IACnB,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,SAAS;IACT,eAAe;IACf,wBAAwB;AAC5B;;AAEA;IACI,mBAAmB;AACvB;;AAEA,gBAAgB;AAChB;IACI,aAAa;IACb,iBAAiB;AACrB;;AAEA,kBAAkB;AAClB;IACI,iBAAiB;AACrB;;AAEA;;IAEI,eAAe;IACf,sBAAsB;AAC1B","sourcesContent":["@font-face {\n    font-family: Noto-Sans;\n    src: url(./fonts/Noto_Sans/NotoSans-Regular.ttf);\n    weight: 600;\n}\n@font-face {\n    font-family: Noto-Sans;\n    src: url(./fonts/Noto_Sans/NotoSans-Medium.ttf);\n    weight: 700;\n}\n@font-face {\n    font-family: Noto-Sans;\n    src: url(./fonts/Noto_Sans/NotoSans-Bold.ttf);\n    weight: 800;\n}\n@font-face {\n    font-family: Stick-No-Bills;\n    src: url(./fonts/Stick_No_Bills/static/StickNoBills-SemiBold.ttf);\n}\n\n* {\n    margin: 0;\n    padding: 0;\n}\n\n.container {\n    height: 100vh;\n    width: 100vw;\n    display: flex;\n    flex-direction: column;\n    background-color: #002647;\n    color: #8FADC7;\n}\n\n.header {\n    height: 20%;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.header h1 {\n    padding-top: 20px;\n    font-family: \"Stick-No-Bills\";\n    font-size: 120px;\n}\n\n.main {\n    font-family: \"Stick-No-Bills\";\n    height: 80%;\n    display: flex;\n}\n\n/* Initial popup before game start */\n.background {\n    height: 100vh;\n    width: 100vw;\n    position:absolute;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    background-color: black;\n    opacity: 0.5;\n    z-index: 99;\n}\n\n.popup {\n    height: 780px;\n    min-width: 530px;\n    width: 50%;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    gap: 20px;\n    position: absolute;\n    left: 25%;\n    top: 5%;\n    background-color: #002647;\n    z-index: 999;\n    border-radius: 10px;\n    font-family: \"Noto-Sans\";\n}\n\nh2 {\n    font-size: 50px;\n}\n\n.popup-header p {\n    font-size: 25px;\n}\n\n.popup-header {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    gap: 5px;\n}\n\n.popup-grid {\n    display: flex;\n}\n\n.popup-header img {\n    padding: 20px 0px 5px 0px;\n    height: 45px;\n}\n\n/* 'Start Game' button */\n.start {\n    height: 40px;\n    width: 300px;\n    background-color: #8FADC7;\n    border: none;\n    border-radius: 10px;\n    font-family: 'Noto-Sans';\n    font-size: 25px;\n    color: #002647;\n}\n\n.player, \n.computer {\n    min-height: 650px;\n    min-width: 500px;\n    width: 50%;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    position: relative;\n}\n.player {\n    padding-left: 10%;\n}\n.computer {\n    padding-right: 10%;\n}\n\n.player h4, \n.computer h4 {\n    position: absolute;\n    top: 0;\n    font-size: 50px;\n}\n\n/* get columns lined up */\n.player-grid, \n.computer-grid {\n    height: 400px;\n    width: 400px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    position: absolute;\n    top: 120px;\n}\n\n/* get boxes within column correctly positioned */\n.column {\n    display: flex;\n    flex-direction: column-reverse;\n}\n\n.popup-grid .box,\n.player-grid .box, \n.computer-grid .box {\n    height: 45px; \n    width: 45px; \n    background-color: #8FADC7;;\n    border: 1px solid #64798c;\n}\n\n.footer {\n    padding-bottom: 5px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    gap: 10px;\n    font-size: 20px;\n    font-family: 'Noto-Sans';\n}\n\n.footer p {\n    padding-bottom: 5px;\n}\n\n/* Github icon */\n.footer svg {\n    fill: #8FADC7;\n    justify-self: end;\n}\n\n/* hover effects */\n.computer .box:hover {\n    cursor: crosshair;\n}\n\n.popup-header img:hover, \n.start:hover {\n    cursor: pointer;\n    transform: scale(1.05);\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (url, options) {
  if (!options) {
    options = {};
  }

  if (!url) {
    return url;
  }

  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }

  if (options.hash) {
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles/styles.css":
/*!*******************************!*\
  !*** ./src/styles/styles.css ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/styles.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";


var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";


var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/scripts/dom.js":
/*!****************************!*\
  !*** ./src/scripts/dom.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "attachPopupListeners": () => (/* binding */ attachPopupListeners),
/* harmony export */   "renderBoards": () => (/* binding */ renderBoards)
/* harmony export */ });
/* harmony import */ var _game_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game.js */ "./src/scripts/game.js");
/* harmony import */ var _styles_images_rotate_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/images/rotate.svg */ "./src/styles/images/rotate.svg");
/* harmony import */ var _styles_images_rotate_cw_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/images/rotate-cw.svg */ "./src/styles/images/rotate-cw.svg");




function renderBoards(user, computer) {
  const computerGrid = document.querySelector('.computer-grid');
  const popupGrid = document.querySelector('.popup-grid');
  const userGrid = document.querySelector('.player-grid');

  togglePopup();
  renderGameboard(popupGrid);
  renderGameboard(computerGrid);
  renderGameboard(userGrid);
  attachBoardListeners(user, computer);
}

function attachBoardListeners(user, computer) {
  const computerBoard = document.querySelectorAll('.computer .box');

  for (const box of computerBoard) {
    box.addEventListener('click', (e) => {
      if (!user.turn || e.target.getAttribute('clicked') === 'true') return;

      userAttack(box, e, user, computer);
      if (computer.board.fleetSunk) {
        alert('You Win!');
        resetBoard(user, computer);
        return;
      }

      computerAttack(computer, user);
      if (user.board.fleetSunk) {
        alert('Computer Wins!');
        resetBoard(user, computer);
      }
    });
  }
}

function attachPopupListeners() {
  const startBtn = document.querySelector('.start');
  const userGrid = document.querySelector('.player-grid');
  const rotateIcon = document.querySelector('.popup-header img');
  const popupGrid = document.querySelector('.popup-grid');
  const popupBoard = document.querySelectorAll('.popup-grid .box');

  for (const box of popupBoard) {
    box.addEventListener('mouseover', (e) => {
      showShip(e, _game_js__WEBPACK_IMPORTED_MODULE_0__.game.user); // Show outline of ship on mouse hover
    });

    box.addEventListener('click', (e) => {
      const placedShip = positionShip(e, _game_js__WEBPACK_IMPORTED_MODULE_0__.game.user); // Place ship at selected location
      if (placedShip === false) return;
      updateInstructions(_game_js__WEBPACK_IMPORTED_MODULE_0__.game.user); // Update popup description
      renderShips(_game_js__WEBPACK_IMPORTED_MODULE_0__.game.user, popupGrid);
      _game_js__WEBPACK_IMPORTED_MODULE_0__.game.user.board.checkIfReady();
    });
  }

  rotateIcon.addEventListener('click', () => {
    if (_game_js__WEBPACK_IMPORTED_MODULE_0__.game.user.board.landscape) {
      _game_js__WEBPACK_IMPORTED_MODULE_0__.game.user.board.landscape = false;
      rotateIcon.src = _styles_images_rotate_cw_svg__WEBPACK_IMPORTED_MODULE_2__;
    } else {
      _game_js__WEBPACK_IMPORTED_MODULE_0__.game.user.board.landscape = true;
      rotateIcon.src = _styles_images_rotate_svg__WEBPACK_IMPORTED_MODULE_1__;
    }
  });

  startBtn.addEventListener('click', () => {
    if (!_game_js__WEBPACK_IMPORTED_MODULE_0__.game.user.board.isReady) throw new Error('Error: Please place all your ships before continuing.');

    togglePopup();
    renderShips(_game_js__WEBPACK_IMPORTED_MODULE_0__.game.user, userGrid);
  });
}

function togglePopup() {
  const bg = document.querySelector('.background');
  const popup = document.querySelector('.popup');
  if (bg.style.display === 'flex' && popup.style.display === 'flex') {
    // Hide
    bg.style.display = 'none';
    popup.style.display = 'none';
  } else {
    // Show
    bg.style.display = 'flex';
    popup.style.display = 'flex';
  }
}

function showShip(e, user) {
  const { board } = user;
  if (!board.carrier.placed) {
    highlightBoxes(board.carrier);
  } else if (!board.battleship.placed) {
    highlightBoxes(board.battleship);
  } else if (!board.destroyer.placed) {
    highlightBoxes(board.destroyer);
  } else if (!board.submarine.placed) {
    highlightBoxes(board.submarine);
  } else if (!board.patrol.placed) {
    highlightBoxes(board.patrol);
  }

  // Highlight squares on mouse hover
  function highlightBoxes(ship) {
    const grid = document.querySelectorAll('.popup .box');
    const coords = getCoords(e);
    const x = parseInt(coords[0]);
    const y = parseInt(coords[1]);

    // Remove previously highlighted squares
    for (const box of grid) {
      if (box.hasAttribute('highlighted')) box.style.backgroundColor = '';
    }

    if (board.landscape) {
      for (let i = 0; i < ship.length; i++) {
        if (x + i > 9) return; // Prevents query selector from returning null
        const box = document.querySelector(`[data-id="${x + i}${y}"]`);
        if (box.hasAttribute('ship-present')) return; // Do not highlight if there is a ship at the square
        box.style.backgroundColor = (x + ship.length > 10) ? '#8B0000' : '#483C32';
        box.setAttribute('highlighted', '');
      }
    } else {
      for (let i = 0; i < ship.length; i++) {
        if (y + i > 9) return;
        const box = document.querySelector(`[data-id="${x}${y + i}"]`);
        if (box.hasAttribute('ship-present')) return;
        box.style.backgroundColor = (y + ship.length > 10) ? '#8B0000' : '#483C32';
        box.setAttribute('highlighted', '');
      }
    }
  }
}

function positionShip(e, user) {
  const { board } = user;
  const coords = getCoords(e);
  const x = parseInt(coords[0]);
  const y = parseInt(coords[1]);

  if (!board.carrier.placed) {
    return board.placeShip(board.carrier, x, y);
  } if (!board.battleship.placed) {
    return board.placeShip(board.battleship, x, y);
  } if (!board.destroyer.placed) {
    return board.placeShip(board.destroyer, x, y);
  } if (!board.submarine.placed) {
    return board.placeShip(board.submarine, x, y);
  } if (!board.patrol.placed) {
    return board.placeShip(board.patrol, x, y);
  }
}

function updateInstructions(user) {
  const { board } = user;
  const desc = document.querySelector('.popup-header p');
  if (board.carrier.placed) desc.textContent = 'Position your battleship.';
  if (board.battleship.placed) desc.textContent = 'Position your destroyer.';
  if (board.destroyer.placed) desc.textContent = 'Position your submarine.';
  if (board.submarine.placed) desc.textContent = 'Position your patrol ship.';
  if (board.patrol.placed) desc.textContent = 'Ready for battle.';
}

function userAttack(box, e, user, enemy) {
  // Get coordinates of chosen attack site
  const coords = getCoords(e);
  const x = coords[0];
  const y = coords[1];

  user.attack(enemy, x, y);
  renderAttack(box, enemy, x, y);

  e.target.setAttribute('clicked', 'true'); // Prevent square from being clicked twice
}

function computerAttack(computer, enemy) {
  const coords = computer.randomAttack(enemy);
  const x = coords[0];
  const y = coords[1];

  const box = document.querySelector(`.player-grid [data-id="${x}${y}"]`);

  renderAttack(box, enemy, x, y);
}

function resetBoard(user, computer) {
  const boxes = document.querySelectorAll('.box');

  for (const box of boxes) {
    box.style.backgroundColor = '';
    box.removeAttribute('ship-present');
    box.removeAttribute('highlighted');
    box.removeAttribute('clicked');
  }

  computer.computerReset();
  user.reset();
  togglePopup();
  updateInstructions(user);
  _game_js__WEBPACK_IMPORTED_MODULE_0__.game.startGame();
}

function getCoords(e) {
  const id = e.target.getAttribute('data-id');
  const x = id.charAt(0);
  const y = id.charAt(1);
  return [x, y];
}

function renderGameboard(container) {
  for (let x = 0; x < 10; x++) {
    // Create columns to insert boxes into (to help with positioning)
    const column = document.createElement('div');
    column.classList.add('column');
    column.setAttribute('id', `${x}`);
    container.appendChild(column);

    for (let y = 0; y < 10; y++) {
      const box = document.createElement('div');
      box.classList.add('box');
      box.setAttribute('data-id', `${x}` + `${y}`);
      column.appendChild(box);
    }
  }
}

function renderAttack(box, enemy, x, y) {
  if (enemy.board.grid[x][y] === -1) {
    // Missed shot
    box.style.backgroundColor = '#483C32';
  } else {
    // Hit ship
    box.style.backgroundColor = '#8B0000';
  }
}

function renderShips(player, gridContainer) {
  const { grid } = player.board;
  for (let x = 0; x < grid.length; x++) {
    for (let y = 0; y < grid.length; y++) {
      if (grid[x][y] !== '' && grid[x][y] !== -1) {
        const box = gridContainer.querySelector(`[data-id="${x}${y}"]`);
        box.style.backgroundColor = '#005CAD';

        // Remove 'highlighted' data attribute
        box.removeAttribute('highlighted');

        // Add 'ship-present' data attribute to prevent futher highlighting
        box.setAttribute('ship-present', '');
      }
    }
  }
}

function renderRotateIcon() {
  const popupHeader = document.querySelector('.popup-header');

  // Button to change ship orientation
  const rotateIcon = new Image();
  rotateIcon.src = _styles_images_rotate_svg__WEBPACK_IMPORTED_MODULE_1__;
  popupHeader.append(rotateIcon);
}

function renderGithubIcon() {
  const a = document.createElement('a');
  a.href = 'https://github.com/xiejon';

  const footer = document.querySelector('.footer');
  const iconSvg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  const iconPath = document.createElementNS('http://www.w3.org/2000/svg', 'path');

  iconSvg.setAttribute('width', '24');
  iconSvg.setAttribute('height', '24');
  iconSvg.setAttribute('viewbox', '0 0 24 24');
  iconPath.setAttribute('d', 'M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z');

  a.append(iconSvg);
  iconSvg.appendChild(iconPath);
  footer.append(a);
}

renderRotateIcon();
renderGithubIcon();




/***/ }),

/***/ "./src/scripts/game.js":
/*!*****************************!*\
  !*** ./src/scripts/game.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "game": () => (/* binding */ game)
/* harmony export */ });
/* harmony import */ var _player_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./player.js */ "./src/scripts/player.js");


const Game = () => {
  const user = new _player_js__WEBPACK_IMPORTED_MODULE_0__.Player();
  const computer = new _player_js__WEBPACK_IMPORTED_MODULE_0__.ComputerPlayer();
  return {
    user,
    computer,
    startGame() {
      user.turn = true;
      computer.placeShipsRandom();
    },
  };
};

const game = Game();




/***/ }),

/***/ "./src/scripts/gameboard.js":
/*!**********************************!*\
  !*** ./src/scripts/gameboard.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Gameboard": () => (/* binding */ Gameboard)
/* harmony export */ });
/* harmony import */ var _ship_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ship.js */ "./src/scripts/ship.js");
/* harmony import */ var _ship_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_ship_js__WEBPACK_IMPORTED_MODULE_0__);


const Gameboard = () => {
  const grid = createGrid(10);
  const landscape = true;
  const fleetSunk = false;
  const isReady = false;

  const carrier = (0,_ship_js__WEBPACK_IMPORTED_MODULE_0__.Ship)(5);
  const battleship = (0,_ship_js__WEBPACK_IMPORTED_MODULE_0__.Ship)(4);
  const destroyer = (0,_ship_js__WEBPACK_IMPORTED_MODULE_0__.Ship)(3);
  const submarine = (0,_ship_js__WEBPACK_IMPORTED_MODULE_0__.Ship)(3);
  const patrol = (0,_ship_js__WEBPACK_IMPORTED_MODULE_0__.Ship)(2);

  return {
    grid,
    landscape,
    fleetSunk,
    isReady,

    carrier,
    battleship,
    destroyer,
    submarine,
    patrol,

    placeShip(ship, x, y) {
      if (this.landscape === true) {
        // Return false if ship length exceeds grid
        if (x + ship.length > 9) return false;

        // Return false if there is a ship already at location
        for (let i = 0; i < ship.length; i++) {
          if (this.grid[x + i][y] !== '') return false;
        }

        for (let i = 0; i < ship.length; i++) {
          this.grid[x + i][y] = ship;
        }
      } else {
        if (y + ship.length > 9) return false;

        for (let i = 0; i < ship.length; i++) {
          if (this.grid[x][y + i] !== '') return false;
        }

        for (let i = 0; i < ship.length; i++) {
          this.grid[x][y + i] = ship;
        }
      }
      ship.placed = true;
    },
    receiveAttack(x, y) {
      // If box was previously attacked
      if (this.grid[x][y] === -1) return;
      // If box is empty
      if (this.grid[x][y] === '') return this.grid[x][y] = -1;

      // Otherwise, ship is present
      const ship = this.grid[x][y];
      ship.hit();
      ship.isSunk();
    },
    checkFleet() {
      if (
        this.carrier.sunk === true
                && this.battleship.sunk === true
                && this.destroyer.sunk === true
                && this.submarine.sunk === true
                && this.patrol.sunk === true
      ) {
        this.fleetSunk = true;
      }
    },
    checkIfReady() {
      if (
        this.carrier.placed === false
                || this.battleship.placed === false
                || this.destroyer.placed === false
                || this.submarine.placed === false
                || this.patrol.placed === false
      ) {
        this.isReady = false;
      } else {
        this.isReady = true;
      }
    },
    clearBoard() {
      for (let col = 0; col < this.grid.length; col++) {
        for (let row = 0; row < this.grid.length; row++) {
          this.grid[col][row] = '';
        }
      }
      this.fleetSunk = false;
      this.isReady = false;

      this.carrier.placed = false;
      this.battleship.placed = false;
      this.destroyer.placed = false;
      this.submarine.placed = false;
      this.patrol.placed = false;

      this.carrier.sunk = false;
      this.battleship.sunk = false;
      this.destroyer.sunk = false;
      this.submarine.sunk = false;
      this.patrol.sunk = false;
    },
  };
};

function createGrid(num) {
  const grid = [];
  for (let col = 0; col < num; col++) {
    grid[col] = [];
    for (let row = 0; row < num; row++) {
      grid[col][row] = '';
    }
  }
  return grid;
}




/***/ }),

/***/ "./src/scripts/player.js":
/*!*******************************!*\
  !*** ./src/scripts/player.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ComputerPlayer": () => (/* binding */ ComputerPlayer),
/* harmony export */   "Player": () => (/* binding */ Player)
/* harmony export */ });
/* harmony import */ var _gameboard_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameboard.js */ "./src/scripts/gameboard.js");


class Player {
  constructor() {
    this.board = (0,_gameboard_js__WEBPACK_IMPORTED_MODULE_0__.Gameboard)();
    this.turn = false;
  }

  setTurn() {
    this.turn = true;
  }

  disableTurn() {
    this.turn = false;
  }

  swapTurns(enemyPlayer) {
    this.disableTurn();
    enemyPlayer.setTurn();
  }

  attack(enemyPlayer, x, y) {
    if (enemyPlayer.board.grid[x][y] === -1) throw new Error('Error: Invalid set of coordinates.');
    if (this.turn) {
      enemyPlayer.board.receiveAttack(x, y);
      enemyPlayer.board.checkFleet();
      this.swapTurns(enemyPlayer);
    }
  }

  reset() {
    this.turn = false;
    this.board.clearBoard();
  }
}

class ComputerPlayer extends Player {
  constructor() {
    super();
    this.attackedCoords = {};
  }

  randomAttack(enemyPlayer) {
    const enemyBoard = enemyPlayer.board;
    const coords = this.getRandomCoords();
    const x = coords[0];
    const y = coords[1];

    enemyBoard.receiveAttack(x, y);
    this.attackedCoords[`${x}${y}`] = 0;

    enemyPlayer.board.checkFleet();
    this.swapTurns(enemyPlayer);

    return coords;
  }

  getRandomCoords() {
    let x = this.getRandomInt(0, 9);
    let y = this.getRandomInt(0, 9);

    // Check hash table for coords. If attacked before, choose new coords
    while (this.attackedCoords[`${x}${y}`] !== undefined) {
      x = this.getRandomInt(0, 9);
      y = this.getRandomInt(0, 9);
    }

    return [x, y];
  }

  getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  placeShipsRandom() {
    const randomizeOrientation = () => {
      const randomInt = this.getRandomInt(0, 1);
      this.board.landscape = randomInt === 0;
    };
    const placeRandomShip = (ship) => {
      randomizeOrientation();
      let x = this.getRandomInt(0, 9);
      let y = this.getRandomInt(0, 9);
      let randomShip = this.board.placeShip(ship, x, y);

      while (randomShip === false) {
        randomizeOrientation();
        x = this.getRandomInt(0, 9);
        y = this.getRandomInt(0, 9);
        randomShip = this.board.placeShip(ship, x, y);
      }
    };
    placeRandomShip(this.board.carrier);
    placeRandomShip(this.board.battleship);
    placeRandomShip(this.board.destroyer);
    placeRandomShip(this.board.submarine);
    placeRandomShip(this.board.patrol);
  }

  computerReset() {
    this.reset();
    this.attackedCoords = {};
  }
}




/***/ }),

/***/ "./src/scripts/ship.js":
/*!*****************************!*\
  !*** ./src/scripts/ship.js ***!
  \*****************************/
/***/ ((module) => {

const Ship = (len) => {
  const length = len;
  const hits = 0;
  const sunk = false;
  const placed = false;

  return {
    length,
    hits,
    sunk,
    placed,
    hit() {
      this.hits++;
    },
    isSunk() {
      if (this.hits >= this.length) this.sunk = true;
    },
  };
};

module.exports = {
  Ship,
};


/***/ }),

/***/ "./src/styles/fonts/Noto_Sans/NotoSans-Bold.ttf":
/*!******************************************************!*\
  !*** ./src/styles/fonts/Noto_Sans/NotoSans-Bold.ttf ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "23e70cfbbe0783c66804.ttf";

/***/ }),

/***/ "./src/styles/fonts/Noto_Sans/NotoSans-Medium.ttf":
/*!********************************************************!*\
  !*** ./src/styles/fonts/Noto_Sans/NotoSans-Medium.ttf ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "a4c42b7a92bf0fdb8ec1.ttf";

/***/ }),

/***/ "./src/styles/fonts/Noto_Sans/NotoSans-Regular.ttf":
/*!*********************************************************!*\
  !*** ./src/styles/fonts/Noto_Sans/NotoSans-Regular.ttf ***!
  \*********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "eae34fa8f1e0c4c6d797.ttf";

/***/ }),

/***/ "./src/styles/fonts/Stick_No_Bills/static/StickNoBills-SemiBold.ttf":
/*!**************************************************************************!*\
  !*** ./src/styles/fonts/Stick_No_Bills/static/StickNoBills-SemiBold.ttf ***!
  \**************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "b8c8790f280d4cbf55f4.ttf";

/***/ }),

/***/ "./src/styles/images/rotate-cw.svg":
/*!*****************************************!*\
  !*** ./src/styles/images/rotate-cw.svg ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "58fba6e64fdb6410d4dd.svg";

/***/ }),

/***/ "./src/styles/images/rotate.svg":
/*!**************************************!*\
  !*** ./src/styles/images/rotate.svg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "f1698f7ee71eafd28359.svg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/styles.css */ "./src/styles/styles.css");
/* harmony import */ var _scripts_game_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scripts/game.js */ "./src/scripts/game.js");
/* harmony import */ var _scripts_dom_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scripts/dom.js */ "./src/scripts/dom.js");




_scripts_game_js__WEBPACK_IMPORTED_MODULE_1__.game.startGame();
(0,_scripts_dom_js__WEBPACK_IMPORTED_MODULE_2__.renderBoards)(_scripts_game_js__WEBPACK_IMPORTED_MODULE_1__.game.user, _scripts_game_js__WEBPACK_IMPORTED_MODULE_1__.game.computer);
(0,_scripts_dom_js__WEBPACK_IMPORTED_MODULE_2__.attachPopupListeners)();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7Ozs7O0FDQTZCO0FBQ1k7QUFDNkI7O0FBRXRFLDREQUFjO0FBQ2QsNkRBQVksQ0FBQyx1REFBUyxFQUFFLDJEQUFhO0FBQ3JDLHFFQUFvQiIsInNvdXJjZXMiOlsid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc3R5bGVzL3N0eWxlcy5jc3MiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc3R5bGVzL3N0eWxlcy5jc3M/ZTQ1YiIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc2NyaXB0cy9kb20uanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zY3JpcHRzL2dhbWUuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zY3JpcHRzL2dhbWVib2FyZC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3NjcmlwdHMvcGxheWVyLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc2NyaXB0cy9zaGlwLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi9mb250cy9Ob3RvX1NhbnMvTm90b1NhbnMtUmVndWxhci50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIuL2ZvbnRzL05vdG9fU2Fucy9Ob3RvU2Fucy1NZWRpdW0udHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18gPSBuZXcgVVJMKFwiLi9mb250cy9Ob3RvX1NhbnMvTm90b1NhbnMtQm9sZC50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfM19fXyA9IG5ldyBVUkwoXCIuL2ZvbnRzL1N0aWNrX05vX0JpbGxzL3N0YXRpYy9TdGlja05vQmlsbHMtU2VtaUJvbGQudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfM19fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzNfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGZvbnQtZmFjZSB7XFxuICAgIGZvbnQtZmFtaWx5OiBOb3RvLVNhbnM7XFxuICAgIHNyYzogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKTtcXG4gICAgd2VpZ2h0OiA2MDA7XFxufVxcbkBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogTm90by1TYW5zO1xcbiAgICBzcmM6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gKyBcIik7XFxuICAgIHdlaWdodDogNzAwO1xcbn1cXG5AZm9udC1mYWNlIHtcXG4gICAgZm9udC1mYW1pbHk6IE5vdG8tU2FucztcXG4gICAgc3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fICsgXCIpO1xcbiAgICB3ZWlnaHQ6IDgwMDtcXG59XFxuQGZvbnQtZmFjZSB7XFxuICAgIGZvbnQtZmFtaWx5OiBTdGljay1Oby1CaWxscztcXG4gICAgc3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zX19fICsgXCIpO1xcbn1cXG5cXG4qIHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbn1cXG5cXG4uY29udGFpbmVyIHtcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgd2lkdGg6IDEwMHZ3O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAyNjQ3O1xcbiAgICBjb2xvcjogIzhGQURDNztcXG59XFxuXFxuLmhlYWRlciB7XFxuICAgIGhlaWdodDogMjAlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmhlYWRlciBoMSB7XFxuICAgIHBhZGRpbmctdG9wOiAyMHB4O1xcbiAgICBmb250LWZhbWlseTogXFxcIlN0aWNrLU5vLUJpbGxzXFxcIjtcXG4gICAgZm9udC1zaXplOiAxMjBweDtcXG59XFxuXFxuLm1haW4ge1xcbiAgICBmb250LWZhbWlseTogXFxcIlN0aWNrLU5vLUJpbGxzXFxcIjtcXG4gICAgaGVpZ2h0OiA4MCU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbi8qIEluaXRpYWwgcG9wdXAgYmVmb3JlIGdhbWUgc3RhcnQgKi9cXG4uYmFja2dyb3VuZCB7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIHdpZHRoOiAxMDB2dztcXG4gICAgcG9zaXRpb246YWJzb2x1dGU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gICAgb3BhY2l0eTogMC41O1xcbiAgICB6LWluZGV4OiA5OTtcXG59XFxuXFxuLnBvcHVwIHtcXG4gICAgaGVpZ2h0OiA3ODBweDtcXG4gICAgbWluLXdpZHRoOiA1MzBweDtcXG4gICAgd2lkdGg6IDUwJTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogMjBweDtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBsZWZ0OiAyNSU7XFxuICAgIHRvcDogNSU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDI2NDc7XFxuICAgIHotaW5kZXg6IDk5OTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgZm9udC1mYW1pbHk6IFxcXCJOb3RvLVNhbnNcXFwiO1xcbn1cXG5cXG5oMiB7XFxuICAgIGZvbnQtc2l6ZTogNTBweDtcXG59XFxuXFxuLnBvcHVwLWhlYWRlciBwIHtcXG4gICAgZm9udC1zaXplOiAyNXB4O1xcbn1cXG5cXG4ucG9wdXAtaGVhZGVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGdhcDogNXB4O1xcbn1cXG5cXG4ucG9wdXAtZ3JpZCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbi5wb3B1cC1oZWFkZXIgaW1nIHtcXG4gICAgcGFkZGluZzogMjBweCAwcHggNXB4IDBweDtcXG4gICAgaGVpZ2h0OiA0NXB4O1xcbn1cXG5cXG4vKiAnU3RhcnQgR2FtZScgYnV0dG9uICovXFxuLnN0YXJ0IHtcXG4gICAgaGVpZ2h0OiA0MHB4O1xcbiAgICB3aWR0aDogMzAwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM4RkFEQzc7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgZm9udC1mYW1pbHk6ICdOb3RvLVNhbnMnO1xcbiAgICBmb250LXNpemU6IDI1cHg7XFxuICAgIGNvbG9yOiAjMDAyNjQ3O1xcbn1cXG5cXG4ucGxheWVyLCBcXG4uY29tcHV0ZXIge1xcbiAgICBtaW4taGVpZ2h0OiA2NTBweDtcXG4gICAgbWluLXdpZHRoOiA1MDBweDtcXG4gICAgd2lkdGg6IDUwJTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuLnBsYXllciB7XFxuICAgIHBhZGRpbmctbGVmdDogMTAlO1xcbn1cXG4uY29tcHV0ZXIge1xcbiAgICBwYWRkaW5nLXJpZ2h0OiAxMCU7XFxufVxcblxcbi5wbGF5ZXIgaDQsIFxcbi5jb21wdXRlciBoNCB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAwO1xcbiAgICBmb250LXNpemU6IDUwcHg7XFxufVxcblxcbi8qIGdldCBjb2x1bW5zIGxpbmVkIHVwICovXFxuLnBsYXllci1ncmlkLCBcXG4uY29tcHV0ZXItZ3JpZCB7XFxuICAgIGhlaWdodDogNDAwcHg7XFxuICAgIHdpZHRoOiA0MDBweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAxMjBweDtcXG59XFxuXFxuLyogZ2V0IGJveGVzIHdpdGhpbiBjb2x1bW4gY29ycmVjdGx5IHBvc2l0aW9uZWQgKi9cXG4uY29sdW1uIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbi1yZXZlcnNlO1xcbn1cXG5cXG4ucG9wdXAtZ3JpZCAuYm94LFxcbi5wbGF5ZXItZ3JpZCAuYm94LCBcXG4uY29tcHV0ZXItZ3JpZCAuYm94IHtcXG4gICAgaGVpZ2h0OiA0NXB4OyBcXG4gICAgd2lkdGg6IDQ1cHg7IFxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjOEZBREM3OztcXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzY0Nzk4YztcXG59XFxuXFxuLmZvb3RlciB7XFxuICAgIHBhZGRpbmctYm90dG9tOiA1cHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDEwcHg7XFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXG4gICAgZm9udC1mYW1pbHk6ICdOb3RvLVNhbnMnO1xcbn1cXG5cXG4uZm9vdGVyIHAge1xcbiAgICBwYWRkaW5nLWJvdHRvbTogNXB4O1xcbn1cXG5cXG4vKiBHaXRodWIgaWNvbiAqL1xcbi5mb290ZXIgc3ZnIHtcXG4gICAgZmlsbDogIzhGQURDNztcXG4gICAganVzdGlmeS1zZWxmOiBlbmQ7XFxufVxcblxcbi8qIGhvdmVyIGVmZmVjdHMgKi9cXG4uY29tcHV0ZXIgLmJveDpob3ZlciB7XFxuICAgIGN1cnNvcjogY3Jvc3NoYWlyO1xcbn1cXG5cXG4ucG9wdXAtaGVhZGVyIGltZzpob3ZlciwgXFxuLnN0YXJ0OmhvdmVyIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDUpO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL3N0eWxlcy5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxzQkFBc0I7SUFDdEIsNENBQWdEO0lBQ2hELFdBQVc7QUFDZjtBQUNBO0lBQ0ksc0JBQXNCO0lBQ3RCLDRDQUErQztJQUMvQyxXQUFXO0FBQ2Y7QUFDQTtJQUNJLHNCQUFzQjtJQUN0Qiw0Q0FBNkM7SUFDN0MsV0FBVztBQUNmO0FBQ0E7SUFDSSwyQkFBMkI7SUFDM0IsNENBQWlFO0FBQ3JFOztBQUVBO0lBQ0ksU0FBUztJQUNULFVBQVU7QUFDZDs7QUFFQTtJQUNJLGFBQWE7SUFDYixZQUFZO0lBQ1osYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qix5QkFBeUI7SUFDekIsY0FBYztBQUNsQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQiw2QkFBNkI7SUFDN0IsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksNkJBQTZCO0lBQzdCLFdBQVc7SUFDWCxhQUFhO0FBQ2pCOztBQUVBLG9DQUFvQztBQUNwQztJQUNJLGFBQWE7SUFDYixZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLHVCQUF1QjtJQUN2QixZQUFZO0lBQ1osV0FBVztBQUNmOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGdCQUFnQjtJQUNoQixVQUFVO0lBQ1YsYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLFNBQVM7SUFDVCxrQkFBa0I7SUFDbEIsU0FBUztJQUNULE9BQU87SUFDUCx5QkFBeUI7SUFDekIsWUFBWTtJQUNaLG1CQUFtQjtJQUNuQix3QkFBd0I7QUFDNUI7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixRQUFRO0FBQ1o7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLFlBQVk7QUFDaEI7O0FBRUEsd0JBQXdCO0FBQ3hCO0lBQ0ksWUFBWTtJQUNaLFlBQVk7SUFDWix5QkFBeUI7SUFDekIsWUFBWTtJQUNaLG1CQUFtQjtJQUNuQix3QkFBd0I7SUFDeEIsZUFBZTtJQUNmLGNBQWM7QUFDbEI7O0FBRUE7O0lBRUksaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQixVQUFVO0lBQ1YsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksaUJBQWlCO0FBQ3JCO0FBQ0E7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7O0lBRUksa0JBQWtCO0lBQ2xCLE1BQU07SUFDTixlQUFlO0FBQ25COztBQUVBLHlCQUF5QjtBQUN6Qjs7SUFFSSxhQUFhO0lBQ2IsWUFBWTtJQUNaLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLGtCQUFrQjtJQUNsQixVQUFVO0FBQ2Q7O0FBRUEsaURBQWlEO0FBQ2pEO0lBQ0ksYUFBYTtJQUNiLDhCQUE4QjtBQUNsQzs7QUFFQTs7O0lBR0ksWUFBWTtJQUNaLFdBQVc7SUFDWCx5QkFBeUI7SUFDekIseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLFNBQVM7SUFDVCxlQUFlO0lBQ2Ysd0JBQXdCO0FBQzVCOztBQUVBO0lBQ0ksbUJBQW1CO0FBQ3ZCOztBQUVBLGdCQUFnQjtBQUNoQjtJQUNJLGFBQWE7SUFDYixpQkFBaUI7QUFDckI7O0FBRUEsa0JBQWtCO0FBQ2xCO0lBQ0ksaUJBQWlCO0FBQ3JCOztBQUVBOztJQUVJLGVBQWU7SUFDZixzQkFBc0I7QUFDMUJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGZvbnQtZmFjZSB7XFxuICAgIGZvbnQtZmFtaWx5OiBOb3RvLVNhbnM7XFxuICAgIHNyYzogdXJsKC4vZm9udHMvTm90b19TYW5zL05vdG9TYW5zLVJlZ3VsYXIudHRmKTtcXG4gICAgd2VpZ2h0OiA2MDA7XFxufVxcbkBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogTm90by1TYW5zO1xcbiAgICBzcmM6IHVybCguL2ZvbnRzL05vdG9fU2Fucy9Ob3RvU2Fucy1NZWRpdW0udHRmKTtcXG4gICAgd2VpZ2h0OiA3MDA7XFxufVxcbkBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogTm90by1TYW5zO1xcbiAgICBzcmM6IHVybCguL2ZvbnRzL05vdG9fU2Fucy9Ob3RvU2Fucy1Cb2xkLnR0Zik7XFxuICAgIHdlaWdodDogODAwO1xcbn1cXG5AZm9udC1mYWNlIHtcXG4gICAgZm9udC1mYW1pbHk6IFN0aWNrLU5vLUJpbGxzO1xcbiAgICBzcmM6IHVybCguL2ZvbnRzL1N0aWNrX05vX0JpbGxzL3N0YXRpYy9TdGlja05vQmlsbHMtU2VtaUJvbGQudHRmKTtcXG59XFxuXFxuKiB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG59XFxuXFxuLmNvbnRhaW5lciB7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIHdpZHRoOiAxMDB2dztcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMjY0NztcXG4gICAgY29sb3I6ICM4RkFEQzc7XFxufVxcblxcbi5oZWFkZXIge1xcbiAgICBoZWlnaHQ6IDIwJTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5oZWFkZXIgaDEge1xcbiAgICBwYWRkaW5nLXRvcDogMjBweDtcXG4gICAgZm9udC1mYW1pbHk6IFxcXCJTdGljay1Oby1CaWxsc1xcXCI7XFxuICAgIGZvbnQtc2l6ZTogMTIwcHg7XFxufVxcblxcbi5tYWluIHtcXG4gICAgZm9udC1mYW1pbHk6IFxcXCJTdGljay1Oby1CaWxsc1xcXCI7XFxuICAgIGhlaWdodDogODAlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4vKiBJbml0aWFsIHBvcHVwIGJlZm9yZSBnYW1lIHN0YXJ0ICovXFxuLmJhY2tncm91bmQge1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICB3aWR0aDogMTAwdnc7XFxuICAgIHBvc2l0aW9uOmFic29sdXRlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICAgIG9wYWNpdHk6IDAuNTtcXG4gICAgei1pbmRleDogOTk7XFxufVxcblxcbi5wb3B1cCB7XFxuICAgIGhlaWdodDogNzgwcHg7XFxuICAgIG1pbi13aWR0aDogNTMwcHg7XFxuICAgIHdpZHRoOiA1MCU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDIwcHg7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgbGVmdDogMjUlO1xcbiAgICB0b3A6IDUlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAyNjQ3O1xcbiAgICB6LWluZGV4OiA5OTk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIGZvbnQtZmFtaWx5OiBcXFwiTm90by1TYW5zXFxcIjtcXG59XFxuXFxuaDIge1xcbiAgICBmb250LXNpemU6IDUwcHg7XFxufVxcblxcbi5wb3B1cC1oZWFkZXIgcCB7XFxuICAgIGZvbnQtc2l6ZTogMjVweDtcXG59XFxuXFxuLnBvcHVwLWhlYWRlciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBnYXA6IDVweDtcXG59XFxuXFxuLnBvcHVwLWdyaWQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4ucG9wdXAtaGVhZGVyIGltZyB7XFxuICAgIHBhZGRpbmc6IDIwcHggMHB4IDVweCAwcHg7XFxuICAgIGhlaWdodDogNDVweDtcXG59XFxuXFxuLyogJ1N0YXJ0IEdhbWUnIGJ1dHRvbiAqL1xcbi5zdGFydCB7XFxuICAgIGhlaWdodDogNDBweDtcXG4gICAgd2lkdGg6IDMwMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjOEZBREM3O1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIGZvbnQtZmFtaWx5OiAnTm90by1TYW5zJztcXG4gICAgZm9udC1zaXplOiAyNXB4O1xcbiAgICBjb2xvcjogIzAwMjY0NztcXG59XFxuXFxuLnBsYXllciwgXFxuLmNvbXB1dGVyIHtcXG4gICAgbWluLWhlaWdodDogNjUwcHg7XFxuICAgIG1pbi13aWR0aDogNTAwcHg7XFxuICAgIHdpZHRoOiA1MCU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcbi5wbGF5ZXIge1xcbiAgICBwYWRkaW5nLWxlZnQ6IDEwJTtcXG59XFxuLmNvbXB1dGVyIHtcXG4gICAgcGFkZGluZy1yaWdodDogMTAlO1xcbn1cXG5cXG4ucGxheWVyIGg0LCBcXG4uY29tcHV0ZXIgaDQge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogMDtcXG4gICAgZm9udC1zaXplOiA1MHB4O1xcbn1cXG5cXG4vKiBnZXQgY29sdW1ucyBsaW5lZCB1cCAqL1xcbi5wbGF5ZXItZ3JpZCwgXFxuLmNvbXB1dGVyLWdyaWQge1xcbiAgICBoZWlnaHQ6IDQwMHB4O1xcbiAgICB3aWR0aDogNDAwcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogMTIwcHg7XFxufVxcblxcbi8qIGdldCBib3hlcyB3aXRoaW4gY29sdW1uIGNvcnJlY3RseSBwb3NpdGlvbmVkICovXFxuLmNvbHVtbiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW4tcmV2ZXJzZTtcXG59XFxuXFxuLnBvcHVwLWdyaWQgLmJveCxcXG4ucGxheWVyLWdyaWQgLmJveCwgXFxuLmNvbXB1dGVyLWdyaWQgLmJveCB7XFxuICAgIGhlaWdodDogNDVweDsgXFxuICAgIHdpZHRoOiA0NXB4OyBcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzhGQURDNzs7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICM2NDc5OGM7XFxufVxcblxcbi5mb290ZXIge1xcbiAgICBwYWRkaW5nLWJvdHRvbTogNXB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiAxMHB4O1xcbiAgICBmb250LXNpemU6IDIwcHg7XFxuICAgIGZvbnQtZmFtaWx5OiAnTm90by1TYW5zJztcXG59XFxuXFxuLmZvb3RlciBwIHtcXG4gICAgcGFkZGluZy1ib3R0b206IDVweDtcXG59XFxuXFxuLyogR2l0aHViIGljb24gKi9cXG4uZm9vdGVyIHN2ZyB7XFxuICAgIGZpbGw6ICM4RkFEQzc7XFxuICAgIGp1c3RpZnktc2VsZjogZW5kO1xcbn1cXG5cXG4vKiBob3ZlciBlZmZlY3RzICovXFxuLmNvbXB1dGVyIC5ib3g6aG92ZXIge1xcbiAgICBjdXJzb3I6IGNyb3NzaGFpcjtcXG59XFxuXFxuLnBvcHVwLWhlYWRlciBpbWc6aG92ZXIsIFxcbi5zdGFydDpob3ZlciB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjA1KTtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuXG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuXG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTsgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG5cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuXG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9IC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcblxuXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuXG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IHsgZ2FtZSB9IGZyb20gJy4vZ2FtZS5qcyc7XG5pbXBvcnQgUm90YXRlSWNvbiBmcm9tICcuLi9zdHlsZXMvaW1hZ2VzL3JvdGF0ZS5zdmcnO1xuaW1wb3J0IFJvdGF0ZUN3SWNvbiBmcm9tICcuLi9zdHlsZXMvaW1hZ2VzL3JvdGF0ZS1jdy5zdmcnO1xuXG5mdW5jdGlvbiByZW5kZXJCb2FyZHModXNlciwgY29tcHV0ZXIpIHtcbiAgY29uc3QgY29tcHV0ZXJHcmlkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbXB1dGVyLWdyaWQnKTtcbiAgY29uc3QgcG9wdXBHcmlkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBvcHVwLWdyaWQnKTtcbiAgY29uc3QgdXNlckdyaWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGxheWVyLWdyaWQnKTtcblxuICB0b2dnbGVQb3B1cCgpO1xuICByZW5kZXJHYW1lYm9hcmQocG9wdXBHcmlkKTtcbiAgcmVuZGVyR2FtZWJvYXJkKGNvbXB1dGVyR3JpZCk7XG4gIHJlbmRlckdhbWVib2FyZCh1c2VyR3JpZCk7XG4gIGF0dGFjaEJvYXJkTGlzdGVuZXJzKHVzZXIsIGNvbXB1dGVyKTtcbn1cblxuZnVuY3Rpb24gYXR0YWNoQm9hcmRMaXN0ZW5lcnModXNlciwgY29tcHV0ZXIpIHtcbiAgY29uc3QgY29tcHV0ZXJCb2FyZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jb21wdXRlciAuYm94Jyk7XG5cbiAgZm9yIChjb25zdCBib3ggb2YgY29tcHV0ZXJCb2FyZCkge1xuICAgIGJveC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICBpZiAoIXVzZXIudHVybiB8fCBlLnRhcmdldC5nZXRBdHRyaWJ1dGUoJ2NsaWNrZWQnKSA9PT0gJ3RydWUnKSByZXR1cm47XG5cbiAgICAgIHVzZXJBdHRhY2soYm94LCBlLCB1c2VyLCBjb21wdXRlcik7XG4gICAgICBpZiAoY29tcHV0ZXIuYm9hcmQuZmxlZXRTdW5rKSB7XG4gICAgICAgIGFsZXJ0KCdZb3UgV2luIScpO1xuICAgICAgICByZXNldEJvYXJkKHVzZXIsIGNvbXB1dGVyKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBjb21wdXRlckF0dGFjayhjb21wdXRlciwgdXNlcik7XG4gICAgICBpZiAodXNlci5ib2FyZC5mbGVldFN1bmspIHtcbiAgICAgICAgYWxlcnQoJ0NvbXB1dGVyIFdpbnMhJyk7XG4gICAgICAgIHJlc2V0Qm9hcmQodXNlciwgY29tcHV0ZXIpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG59XG5cbmZ1bmN0aW9uIGF0dGFjaFBvcHVwTGlzdGVuZXJzKCkge1xuICBjb25zdCBzdGFydEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zdGFydCcpO1xuICBjb25zdCB1c2VyR3JpZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wbGF5ZXItZ3JpZCcpO1xuICBjb25zdCByb3RhdGVJY29uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBvcHVwLWhlYWRlciBpbWcnKTtcbiAgY29uc3QgcG9wdXBHcmlkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBvcHVwLWdyaWQnKTtcbiAgY29uc3QgcG9wdXBCb2FyZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wb3B1cC1ncmlkIC5ib3gnKTtcblxuICBmb3IgKGNvbnN0IGJveCBvZiBwb3B1cEJvYXJkKSB7XG4gICAgYm94LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3ZlcicsIChlKSA9PiB7XG4gICAgICBzaG93U2hpcChlLCBnYW1lLnVzZXIpOyAvLyBTaG93IG91dGxpbmUgb2Ygc2hpcCBvbiBtb3VzZSBob3ZlclxuICAgIH0pO1xuXG4gICAgYm94LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgIGNvbnN0IHBsYWNlZFNoaXAgPSBwb3NpdGlvblNoaXAoZSwgZ2FtZS51c2VyKTsgLy8gUGxhY2Ugc2hpcCBhdCBzZWxlY3RlZCBsb2NhdGlvblxuICAgICAgaWYgKHBsYWNlZFNoaXAgPT09IGZhbHNlKSByZXR1cm47XG4gICAgICB1cGRhdGVJbnN0cnVjdGlvbnMoZ2FtZS51c2VyKTsgLy8gVXBkYXRlIHBvcHVwIGRlc2NyaXB0aW9uXG4gICAgICByZW5kZXJTaGlwcyhnYW1lLnVzZXIsIHBvcHVwR3JpZCk7XG4gICAgICBnYW1lLnVzZXIuYm9hcmQuY2hlY2tJZlJlYWR5KCk7XG4gICAgfSk7XG4gIH1cblxuICByb3RhdGVJY29uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGlmIChnYW1lLnVzZXIuYm9hcmQubGFuZHNjYXBlKSB7XG4gICAgICBnYW1lLnVzZXIuYm9hcmQubGFuZHNjYXBlID0gZmFsc2U7XG4gICAgICByb3RhdGVJY29uLnNyYyA9IFJvdGF0ZUN3SWNvbjtcbiAgICB9IGVsc2Uge1xuICAgICAgZ2FtZS51c2VyLmJvYXJkLmxhbmRzY2FwZSA9IHRydWU7XG4gICAgICByb3RhdGVJY29uLnNyYyA9IFJvdGF0ZUljb247XG4gICAgfVxuICB9KTtcblxuICBzdGFydEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBpZiAoIWdhbWUudXNlci5ib2FyZC5pc1JlYWR5KSB0aHJvdyBuZXcgRXJyb3IoJ0Vycm9yOiBQbGVhc2UgcGxhY2UgYWxsIHlvdXIgc2hpcHMgYmVmb3JlIGNvbnRpbnVpbmcuJyk7XG5cbiAgICB0b2dnbGVQb3B1cCgpO1xuICAgIHJlbmRlclNoaXBzKGdhbWUudXNlciwgdXNlckdyaWQpO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gdG9nZ2xlUG9wdXAoKSB7XG4gIGNvbnN0IGJnID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJhY2tncm91bmQnKTtcbiAgY29uc3QgcG9wdXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucG9wdXAnKTtcbiAgaWYgKGJnLnN0eWxlLmRpc3BsYXkgPT09ICdmbGV4JyAmJiBwb3B1cC5zdHlsZS5kaXNwbGF5ID09PSAnZmxleCcpIHtcbiAgICAvLyBIaWRlXG4gICAgYmcuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICBwb3B1cC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICB9IGVsc2Uge1xuICAgIC8vIFNob3dcbiAgICBiZy5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xuICAgIHBvcHVwLnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XG4gIH1cbn1cblxuZnVuY3Rpb24gc2hvd1NoaXAoZSwgdXNlcikge1xuICBjb25zdCB7IGJvYXJkIH0gPSB1c2VyO1xuICBpZiAoIWJvYXJkLmNhcnJpZXIucGxhY2VkKSB7XG4gICAgaGlnaGxpZ2h0Qm94ZXMoYm9hcmQuY2Fycmllcik7XG4gIH0gZWxzZSBpZiAoIWJvYXJkLmJhdHRsZXNoaXAucGxhY2VkKSB7XG4gICAgaGlnaGxpZ2h0Qm94ZXMoYm9hcmQuYmF0dGxlc2hpcCk7XG4gIH0gZWxzZSBpZiAoIWJvYXJkLmRlc3Ryb3llci5wbGFjZWQpIHtcbiAgICBoaWdobGlnaHRCb3hlcyhib2FyZC5kZXN0cm95ZXIpO1xuICB9IGVsc2UgaWYgKCFib2FyZC5zdWJtYXJpbmUucGxhY2VkKSB7XG4gICAgaGlnaGxpZ2h0Qm94ZXMoYm9hcmQuc3VibWFyaW5lKTtcbiAgfSBlbHNlIGlmICghYm9hcmQucGF0cm9sLnBsYWNlZCkge1xuICAgIGhpZ2hsaWdodEJveGVzKGJvYXJkLnBhdHJvbCk7XG4gIH1cblxuICAvLyBIaWdobGlnaHQgc3F1YXJlcyBvbiBtb3VzZSBob3ZlclxuICBmdW5jdGlvbiBoaWdobGlnaHRCb3hlcyhzaGlwKSB7XG4gICAgY29uc3QgZ3JpZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wb3B1cCAuYm94Jyk7XG4gICAgY29uc3QgY29vcmRzID0gZ2V0Q29vcmRzKGUpO1xuICAgIGNvbnN0IHggPSBwYXJzZUludChjb29yZHNbMF0pO1xuICAgIGNvbnN0IHkgPSBwYXJzZUludChjb29yZHNbMV0pO1xuXG4gICAgLy8gUmVtb3ZlIHByZXZpb3VzbHkgaGlnaGxpZ2h0ZWQgc3F1YXJlc1xuICAgIGZvciAoY29uc3QgYm94IG9mIGdyaWQpIHtcbiAgICAgIGlmIChib3guaGFzQXR0cmlidXRlKCdoaWdobGlnaHRlZCcpKSBib3guc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJyc7XG4gICAgfVxuXG4gICAgaWYgKGJvYXJkLmxhbmRzY2FwZSkge1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmICh4ICsgaSA+IDkpIHJldHVybjsgLy8gUHJldmVudHMgcXVlcnkgc2VsZWN0b3IgZnJvbSByZXR1cm5pbmcgbnVsbFxuICAgICAgICBjb25zdCBib3ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS1pZD1cIiR7eCArIGl9JHt5fVwiXWApO1xuICAgICAgICBpZiAoYm94Lmhhc0F0dHJpYnV0ZSgnc2hpcC1wcmVzZW50JykpIHJldHVybjsgLy8gRG8gbm90IGhpZ2hsaWdodCBpZiB0aGVyZSBpcyBhIHNoaXAgYXQgdGhlIHNxdWFyZVxuICAgICAgICBib3guc3R5bGUuYmFja2dyb3VuZENvbG9yID0gKHggKyBzaGlwLmxlbmd0aCA+IDEwKSA/ICcjOEIwMDAwJyA6ICcjNDgzQzMyJztcbiAgICAgICAgYm94LnNldEF0dHJpYnV0ZSgnaGlnaGxpZ2h0ZWQnLCAnJyk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcC5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAoeSArIGkgPiA5KSByZXR1cm47XG4gICAgICAgIGNvbnN0IGJveCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLWlkPVwiJHt4fSR7eSArIGl9XCJdYCk7XG4gICAgICAgIGlmIChib3guaGFzQXR0cmlidXRlKCdzaGlwLXByZXNlbnQnKSkgcmV0dXJuO1xuICAgICAgICBib3guc3R5bGUuYmFja2dyb3VuZENvbG9yID0gKHkgKyBzaGlwLmxlbmd0aCA+IDEwKSA/ICcjOEIwMDAwJyA6ICcjNDgzQzMyJztcbiAgICAgICAgYm94LnNldEF0dHJpYnV0ZSgnaGlnaGxpZ2h0ZWQnLCAnJyk7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIHBvc2l0aW9uU2hpcChlLCB1c2VyKSB7XG4gIGNvbnN0IHsgYm9hcmQgfSA9IHVzZXI7XG4gIGNvbnN0IGNvb3JkcyA9IGdldENvb3JkcyhlKTtcbiAgY29uc3QgeCA9IHBhcnNlSW50KGNvb3Jkc1swXSk7XG4gIGNvbnN0IHkgPSBwYXJzZUludChjb29yZHNbMV0pO1xuXG4gIGlmICghYm9hcmQuY2Fycmllci5wbGFjZWQpIHtcbiAgICByZXR1cm4gYm9hcmQucGxhY2VTaGlwKGJvYXJkLmNhcnJpZXIsIHgsIHkpO1xuICB9IGlmICghYm9hcmQuYmF0dGxlc2hpcC5wbGFjZWQpIHtcbiAgICByZXR1cm4gYm9hcmQucGxhY2VTaGlwKGJvYXJkLmJhdHRsZXNoaXAsIHgsIHkpO1xuICB9IGlmICghYm9hcmQuZGVzdHJveWVyLnBsYWNlZCkge1xuICAgIHJldHVybiBib2FyZC5wbGFjZVNoaXAoYm9hcmQuZGVzdHJveWVyLCB4LCB5KTtcbiAgfSBpZiAoIWJvYXJkLnN1Ym1hcmluZS5wbGFjZWQpIHtcbiAgICByZXR1cm4gYm9hcmQucGxhY2VTaGlwKGJvYXJkLnN1Ym1hcmluZSwgeCwgeSk7XG4gIH0gaWYgKCFib2FyZC5wYXRyb2wucGxhY2VkKSB7XG4gICAgcmV0dXJuIGJvYXJkLnBsYWNlU2hpcChib2FyZC5wYXRyb2wsIHgsIHkpO1xuICB9XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZUluc3RydWN0aW9ucyh1c2VyKSB7XG4gIGNvbnN0IHsgYm9hcmQgfSA9IHVzZXI7XG4gIGNvbnN0IGRlc2MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucG9wdXAtaGVhZGVyIHAnKTtcbiAgaWYgKGJvYXJkLmNhcnJpZXIucGxhY2VkKSBkZXNjLnRleHRDb250ZW50ID0gJ1Bvc2l0aW9uIHlvdXIgYmF0dGxlc2hpcC4nO1xuICBpZiAoYm9hcmQuYmF0dGxlc2hpcC5wbGFjZWQpIGRlc2MudGV4dENvbnRlbnQgPSAnUG9zaXRpb24geW91ciBkZXN0cm95ZXIuJztcbiAgaWYgKGJvYXJkLmRlc3Ryb3llci5wbGFjZWQpIGRlc2MudGV4dENvbnRlbnQgPSAnUG9zaXRpb24geW91ciBzdWJtYXJpbmUuJztcbiAgaWYgKGJvYXJkLnN1Ym1hcmluZS5wbGFjZWQpIGRlc2MudGV4dENvbnRlbnQgPSAnUG9zaXRpb24geW91ciBwYXRyb2wgc2hpcC4nO1xuICBpZiAoYm9hcmQucGF0cm9sLnBsYWNlZCkgZGVzYy50ZXh0Q29udGVudCA9ICdSZWFkeSBmb3IgYmF0dGxlLic7XG59XG5cbmZ1bmN0aW9uIHVzZXJBdHRhY2soYm94LCBlLCB1c2VyLCBlbmVteSkge1xuICAvLyBHZXQgY29vcmRpbmF0ZXMgb2YgY2hvc2VuIGF0dGFjayBzaXRlXG4gIGNvbnN0IGNvb3JkcyA9IGdldENvb3JkcyhlKTtcbiAgY29uc3QgeCA9IGNvb3Jkc1swXTtcbiAgY29uc3QgeSA9IGNvb3Jkc1sxXTtcblxuICB1c2VyLmF0dGFjayhlbmVteSwgeCwgeSk7XG4gIHJlbmRlckF0dGFjayhib3gsIGVuZW15LCB4LCB5KTtcblxuICBlLnRhcmdldC5zZXRBdHRyaWJ1dGUoJ2NsaWNrZWQnLCAndHJ1ZScpOyAvLyBQcmV2ZW50IHNxdWFyZSBmcm9tIGJlaW5nIGNsaWNrZWQgdHdpY2Vcbn1cblxuZnVuY3Rpb24gY29tcHV0ZXJBdHRhY2soY29tcHV0ZXIsIGVuZW15KSB7XG4gIGNvbnN0IGNvb3JkcyA9IGNvbXB1dGVyLnJhbmRvbUF0dGFjayhlbmVteSk7XG4gIGNvbnN0IHggPSBjb29yZHNbMF07XG4gIGNvbnN0IHkgPSBjb29yZHNbMV07XG5cbiAgY29uc3QgYm94ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLnBsYXllci1ncmlkIFtkYXRhLWlkPVwiJHt4fSR7eX1cIl1gKTtcblxuICByZW5kZXJBdHRhY2soYm94LCBlbmVteSwgeCwgeSk7XG59XG5cbmZ1bmN0aW9uIHJlc2V0Qm9hcmQodXNlciwgY29tcHV0ZXIpIHtcbiAgY29uc3QgYm94ZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYm94Jyk7XG5cbiAgZm9yIChjb25zdCBib3ggb2YgYm94ZXMpIHtcbiAgICBib3guc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJyc7XG4gICAgYm94LnJlbW92ZUF0dHJpYnV0ZSgnc2hpcC1wcmVzZW50Jyk7XG4gICAgYm94LnJlbW92ZUF0dHJpYnV0ZSgnaGlnaGxpZ2h0ZWQnKTtcbiAgICBib3gucmVtb3ZlQXR0cmlidXRlKCdjbGlja2VkJyk7XG4gIH1cblxuICBjb21wdXRlci5jb21wdXRlclJlc2V0KCk7XG4gIHVzZXIucmVzZXQoKTtcbiAgdG9nZ2xlUG9wdXAoKTtcbiAgdXBkYXRlSW5zdHJ1Y3Rpb25zKHVzZXIpO1xuICBnYW1lLnN0YXJ0R2FtZSgpO1xufVxuXG5mdW5jdGlvbiBnZXRDb29yZHMoZSkge1xuICBjb25zdCBpZCA9IGUudGFyZ2V0LmdldEF0dHJpYnV0ZSgnZGF0YS1pZCcpO1xuICBjb25zdCB4ID0gaWQuY2hhckF0KDApO1xuICBjb25zdCB5ID0gaWQuY2hhckF0KDEpO1xuICByZXR1cm4gW3gsIHldO1xufVxuXG5mdW5jdGlvbiByZW5kZXJHYW1lYm9hcmQoY29udGFpbmVyKSB7XG4gIGZvciAobGV0IHggPSAwOyB4IDwgMTA7IHgrKykge1xuICAgIC8vIENyZWF0ZSBjb2x1bW5zIHRvIGluc2VydCBib3hlcyBpbnRvICh0byBoZWxwIHdpdGggcG9zaXRpb25pbmcpXG4gICAgY29uc3QgY29sdW1uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29sdW1uLmNsYXNzTGlzdC5hZGQoJ2NvbHVtbicpO1xuICAgIGNvbHVtbi5zZXRBdHRyaWJ1dGUoJ2lkJywgYCR7eH1gKTtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoY29sdW1uKTtcblxuICAgIGZvciAobGV0IHkgPSAwOyB5IDwgMTA7IHkrKykge1xuICAgICAgY29uc3QgYm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICBib3guY2xhc3NMaXN0LmFkZCgnYm94Jyk7XG4gICAgICBib3guc2V0QXR0cmlidXRlKCdkYXRhLWlkJywgYCR7eH1gICsgYCR7eX1gKTtcbiAgICAgIGNvbHVtbi5hcHBlbmRDaGlsZChib3gpO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiByZW5kZXJBdHRhY2soYm94LCBlbmVteSwgeCwgeSkge1xuICBpZiAoZW5lbXkuYm9hcmQuZ3JpZFt4XVt5XSA9PT0gLTEpIHtcbiAgICAvLyBNaXNzZWQgc2hvdFxuICAgIGJveC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnIzQ4M0MzMic7XG4gIH0gZWxzZSB7XG4gICAgLy8gSGl0IHNoaXBcbiAgICBib3guc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJyM4QjAwMDAnO1xuICB9XG59XG5cbmZ1bmN0aW9uIHJlbmRlclNoaXBzKHBsYXllciwgZ3JpZENvbnRhaW5lcikge1xuICBjb25zdCB7IGdyaWQgfSA9IHBsYXllci5ib2FyZDtcbiAgZm9yIChsZXQgeCA9IDA7IHggPCBncmlkLmxlbmd0aDsgeCsrKSB7XG4gICAgZm9yIChsZXQgeSA9IDA7IHkgPCBncmlkLmxlbmd0aDsgeSsrKSB7XG4gICAgICBpZiAoZ3JpZFt4XVt5XSAhPT0gJycgJiYgZ3JpZFt4XVt5XSAhPT0gLTEpIHtcbiAgICAgICAgY29uc3QgYm94ID0gZ3JpZENvbnRhaW5lci5xdWVyeVNlbGVjdG9yKGBbZGF0YS1pZD1cIiR7eH0ke3l9XCJdYCk7XG4gICAgICAgIGJveC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnIzAwNUNBRCc7XG5cbiAgICAgICAgLy8gUmVtb3ZlICdoaWdobGlnaHRlZCcgZGF0YSBhdHRyaWJ1dGVcbiAgICAgICAgYm94LnJlbW92ZUF0dHJpYnV0ZSgnaGlnaGxpZ2h0ZWQnKTtcblxuICAgICAgICAvLyBBZGQgJ3NoaXAtcHJlc2VudCcgZGF0YSBhdHRyaWJ1dGUgdG8gcHJldmVudCBmdXRoZXIgaGlnaGxpZ2h0aW5nXG4gICAgICAgIGJveC5zZXRBdHRyaWJ1dGUoJ3NoaXAtcHJlc2VudCcsICcnKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gcmVuZGVyUm90YXRlSWNvbigpIHtcbiAgY29uc3QgcG9wdXBIZWFkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucG9wdXAtaGVhZGVyJyk7XG5cbiAgLy8gQnV0dG9uIHRvIGNoYW5nZSBzaGlwIG9yaWVudGF0aW9uXG4gIGNvbnN0IHJvdGF0ZUljb24gPSBuZXcgSW1hZ2UoKTtcbiAgcm90YXRlSWNvbi5zcmMgPSBSb3RhdGVJY29uO1xuICBwb3B1cEhlYWRlci5hcHBlbmQocm90YXRlSWNvbik7XG59XG5cbmZ1bmN0aW9uIHJlbmRlckdpdGh1Ykljb24oKSB7XG4gIGNvbnN0IGEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gIGEuaHJlZiA9ICdodHRwczovL2dpdGh1Yi5jb20veGllam9uJztcblxuICBjb25zdCBmb290ZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZm9vdGVyJyk7XG4gIGNvbnN0IGljb25TdmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoJ2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJywgJ3N2ZycpO1xuICBjb25zdCBpY29uUGF0aCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUygnaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnLCAncGF0aCcpO1xuXG4gIGljb25Tdmcuc2V0QXR0cmlidXRlKCd3aWR0aCcsICcyNCcpO1xuICBpY29uU3ZnLnNldEF0dHJpYnV0ZSgnaGVpZ2h0JywgJzI0Jyk7XG4gIGljb25Tdmcuc2V0QXR0cmlidXRlKCd2aWV3Ym94JywgJzAgMCAyNCAyNCcpO1xuICBpY29uUGF0aC5zZXRBdHRyaWJ1dGUoJ2QnLCAnTTEyIDBjLTYuNjI2IDAtMTIgNS4zNzMtMTIgMTIgMCA1LjMwMiAzLjQzOCA5LjggOC4yMDcgMTEuMzg3LjU5OS4xMTEuNzkzLS4yNjEuNzkzLS41Nzd2LTIuMjM0Yy0zLjMzOC43MjYtNC4wMzMtMS40MTYtNC4wMzMtMS40MTYtLjU0Ni0xLjM4Ny0xLjMzMy0xLjc1Ni0xLjMzMy0xLjc1Ni0xLjA4OS0uNzQ1LjA4My0uNzI5LjA4My0uNzI5IDEuMjA1LjA4NCAxLjgzOSAxLjIzNyAxLjgzOSAxLjIzNyAxLjA3IDEuODM0IDIuODA3IDEuMzA0IDMuNDkyLjk5Ny4xMDctLjc3NS40MTgtMS4zMDUuNzYyLTEuNjA0LTIuNjY1LS4zMDUtNS40NjctMS4zMzQtNS40NjctNS45MzEgMC0xLjMxMS40NjktMi4zODEgMS4yMzYtMy4yMjEtLjEyNC0uMzAzLS41MzUtMS41MjQuMTE3LTMuMTc2IDAgMCAxLjAwOC0uMzIyIDMuMzAxIDEuMjMuOTU3LS4yNjYgMS45ODMtLjM5OSAzLjAwMy0uNDA0IDEuMDIuMDA1IDIuMDQ3LjEzOCAzLjAwNi40MDQgMi4yOTEtMS41NTIgMy4yOTctMS4yMyAzLjI5Ny0xLjIzLjY1MyAxLjY1My4yNDIgMi44NzQuMTE4IDMuMTc2Ljc3Ljg0IDEuMjM1IDEuOTExIDEuMjM1IDMuMjIxIDAgNC42MDktMi44MDcgNS42MjQtNS40NzkgNS45MjEuNDMuMzcyLjgyMyAxLjEwMi44MjMgMi4yMjJ2My4yOTNjMCAuMzE5LjE5Mi42OTQuODAxLjU3NiA0Ljc2NS0xLjU4OSA4LjE5OS02LjA4NiA4LjE5OS0xMS4zODYgMC02LjYyNy01LjM3My0xMi0xMi0xMnonKTtcblxuICBhLmFwcGVuZChpY29uU3ZnKTtcbiAgaWNvblN2Zy5hcHBlbmRDaGlsZChpY29uUGF0aCk7XG4gIGZvb3Rlci5hcHBlbmQoYSk7XG59XG5cbnJlbmRlclJvdGF0ZUljb24oKTtcbnJlbmRlckdpdGh1Ykljb24oKTtcblxuZXhwb3J0IHtcbiAgcmVuZGVyQm9hcmRzLCBhdHRhY2hQb3B1cExpc3RlbmVyc1xufTtcbiIsImltcG9ydCB7IFBsYXllciwgQ29tcHV0ZXJQbGF5ZXIgfSBmcm9tICcuL3BsYXllci5qcyc7XG5cbmNvbnN0IEdhbWUgPSAoKSA9PiB7XG4gIGNvbnN0IHVzZXIgPSBuZXcgUGxheWVyKCk7XG4gIGNvbnN0IGNvbXB1dGVyID0gbmV3IENvbXB1dGVyUGxheWVyKCk7XG4gIHJldHVybiB7XG4gICAgdXNlcixcbiAgICBjb21wdXRlcixcbiAgICBzdGFydEdhbWUoKSB7XG4gICAgICB1c2VyLnR1cm4gPSB0cnVlO1xuICAgICAgY29tcHV0ZXIucGxhY2VTaGlwc1JhbmRvbSgpO1xuICAgIH0sXG4gIH07XG59O1xuXG5jb25zdCBnYW1lID0gR2FtZSgpO1xuXG5leHBvcnQgeyBnYW1lIH07XG4iLCJpbXBvcnQgeyBTaGlwIH0gZnJvbSAnLi9zaGlwLmpzJztcblxuY29uc3QgR2FtZWJvYXJkID0gKCkgPT4ge1xuICBjb25zdCBncmlkID0gY3JlYXRlR3JpZCgxMCk7XG4gIGNvbnN0IGxhbmRzY2FwZSA9IHRydWU7XG4gIGNvbnN0IGZsZWV0U3VuayA9IGZhbHNlO1xuICBjb25zdCBpc1JlYWR5ID0gZmFsc2U7XG5cbiAgY29uc3QgY2FycmllciA9IFNoaXAoNSk7XG4gIGNvbnN0IGJhdHRsZXNoaXAgPSBTaGlwKDQpO1xuICBjb25zdCBkZXN0cm95ZXIgPSBTaGlwKDMpO1xuICBjb25zdCBzdWJtYXJpbmUgPSBTaGlwKDMpO1xuICBjb25zdCBwYXRyb2wgPSBTaGlwKDIpO1xuXG4gIHJldHVybiB7XG4gICAgZ3JpZCxcbiAgICBsYW5kc2NhcGUsXG4gICAgZmxlZXRTdW5rLFxuICAgIGlzUmVhZHksXG5cbiAgICBjYXJyaWVyLFxuICAgIGJhdHRsZXNoaXAsXG4gICAgZGVzdHJveWVyLFxuICAgIHN1Ym1hcmluZSxcbiAgICBwYXRyb2wsXG5cbiAgICBwbGFjZVNoaXAoc2hpcCwgeCwgeSkge1xuICAgICAgaWYgKHRoaXMubGFuZHNjYXBlID09PSB0cnVlKSB7XG4gICAgICAgIC8vIFJldHVybiBmYWxzZSBpZiBzaGlwIGxlbmd0aCBleGNlZWRzIGdyaWRcbiAgICAgICAgaWYgKHggKyBzaGlwLmxlbmd0aCA+IDkpIHJldHVybiBmYWxzZTtcblxuICAgICAgICAvLyBSZXR1cm4gZmFsc2UgaWYgdGhlcmUgaXMgYSBzaGlwIGFscmVhZHkgYXQgbG9jYXRpb25cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgaWYgKHRoaXMuZ3JpZFt4ICsgaV1beV0gIT09ICcnKSByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNoaXAubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICB0aGlzLmdyaWRbeCArIGldW3ldID0gc2hpcDtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKHkgKyBzaGlwLmxlbmd0aCA+IDkpIHJldHVybiBmYWxzZTtcblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNoaXAubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICBpZiAodGhpcy5ncmlkW3hdW3kgKyBpXSAhPT0gJycpIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIHRoaXMuZ3JpZFt4XVt5ICsgaV0gPSBzaGlwO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBzaGlwLnBsYWNlZCA9IHRydWU7XG4gICAgfSxcbiAgICByZWNlaXZlQXR0YWNrKHgsIHkpIHtcbiAgICAgIC8vIElmIGJveCB3YXMgcHJldmlvdXNseSBhdHRhY2tlZFxuICAgICAgaWYgKHRoaXMuZ3JpZFt4XVt5XSA9PT0gLTEpIHJldHVybjtcbiAgICAgIC8vIElmIGJveCBpcyBlbXB0eVxuICAgICAgaWYgKHRoaXMuZ3JpZFt4XVt5XSA9PT0gJycpIHJldHVybiB0aGlzLmdyaWRbeF1beV0gPSAtMTtcblxuICAgICAgLy8gT3RoZXJ3aXNlLCBzaGlwIGlzIHByZXNlbnRcbiAgICAgIGNvbnN0IHNoaXAgPSB0aGlzLmdyaWRbeF1beV07XG4gICAgICBzaGlwLmhpdCgpO1xuICAgICAgc2hpcC5pc1N1bmsoKTtcbiAgICB9LFxuICAgIGNoZWNrRmxlZXQoKSB7XG4gICAgICBpZiAoXG4gICAgICAgIHRoaXMuY2Fycmllci5zdW5rID09PSB0cnVlXG4gICAgICAgICAgICAgICAgJiYgdGhpcy5iYXR0bGVzaGlwLnN1bmsgPT09IHRydWVcbiAgICAgICAgICAgICAgICAmJiB0aGlzLmRlc3Ryb3llci5zdW5rID09PSB0cnVlXG4gICAgICAgICAgICAgICAgJiYgdGhpcy5zdWJtYXJpbmUuc3VuayA9PT0gdHJ1ZVxuICAgICAgICAgICAgICAgICYmIHRoaXMucGF0cm9sLnN1bmsgPT09IHRydWVcbiAgICAgICkge1xuICAgICAgICB0aGlzLmZsZWV0U3VuayA9IHRydWU7XG4gICAgICB9XG4gICAgfSxcbiAgICBjaGVja0lmUmVhZHkoKSB7XG4gICAgICBpZiAoXG4gICAgICAgIHRoaXMuY2Fycmllci5wbGFjZWQgPT09IGZhbHNlXG4gICAgICAgICAgICAgICAgfHwgdGhpcy5iYXR0bGVzaGlwLnBsYWNlZCA9PT0gZmFsc2VcbiAgICAgICAgICAgICAgICB8fCB0aGlzLmRlc3Ryb3llci5wbGFjZWQgPT09IGZhbHNlXG4gICAgICAgICAgICAgICAgfHwgdGhpcy5zdWJtYXJpbmUucGxhY2VkID09PSBmYWxzZVxuICAgICAgICAgICAgICAgIHx8IHRoaXMucGF0cm9sLnBsYWNlZCA9PT0gZmFsc2VcbiAgICAgICkge1xuICAgICAgICB0aGlzLmlzUmVhZHkgPSBmYWxzZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuaXNSZWFkeSA9IHRydWU7XG4gICAgICB9XG4gICAgfSxcbiAgICBjbGVhckJvYXJkKCkge1xuICAgICAgZm9yIChsZXQgY29sID0gMDsgY29sIDwgdGhpcy5ncmlkLmxlbmd0aDsgY29sKyspIHtcbiAgICAgICAgZm9yIChsZXQgcm93ID0gMDsgcm93IDwgdGhpcy5ncmlkLmxlbmd0aDsgcm93KyspIHtcbiAgICAgICAgICB0aGlzLmdyaWRbY29sXVtyb3ddID0gJyc7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHRoaXMuZmxlZXRTdW5rID0gZmFsc2U7XG4gICAgICB0aGlzLmlzUmVhZHkgPSBmYWxzZTtcblxuICAgICAgdGhpcy5jYXJyaWVyLnBsYWNlZCA9IGZhbHNlO1xuICAgICAgdGhpcy5iYXR0bGVzaGlwLnBsYWNlZCA9IGZhbHNlO1xuICAgICAgdGhpcy5kZXN0cm95ZXIucGxhY2VkID0gZmFsc2U7XG4gICAgICB0aGlzLnN1Ym1hcmluZS5wbGFjZWQgPSBmYWxzZTtcbiAgICAgIHRoaXMucGF0cm9sLnBsYWNlZCA9IGZhbHNlO1xuXG4gICAgICB0aGlzLmNhcnJpZXIuc3VuayA9IGZhbHNlO1xuICAgICAgdGhpcy5iYXR0bGVzaGlwLnN1bmsgPSBmYWxzZTtcbiAgICAgIHRoaXMuZGVzdHJveWVyLnN1bmsgPSBmYWxzZTtcbiAgICAgIHRoaXMuc3VibWFyaW5lLnN1bmsgPSBmYWxzZTtcbiAgICAgIHRoaXMucGF0cm9sLnN1bmsgPSBmYWxzZTtcbiAgICB9LFxuICB9O1xufTtcblxuZnVuY3Rpb24gY3JlYXRlR3JpZChudW0pIHtcbiAgY29uc3QgZ3JpZCA9IFtdO1xuICBmb3IgKGxldCBjb2wgPSAwOyBjb2wgPCBudW07IGNvbCsrKSB7XG4gICAgZ3JpZFtjb2xdID0gW107XG4gICAgZm9yIChsZXQgcm93ID0gMDsgcm93IDwgbnVtOyByb3crKykge1xuICAgICAgZ3JpZFtjb2xdW3Jvd10gPSAnJztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGdyaWQ7XG59XG5cbmV4cG9ydCB7IEdhbWVib2FyZCB9O1xuIiwiaW1wb3J0IHsgR2FtZWJvYXJkIH0gZnJvbSAnLi9nYW1lYm9hcmQuanMnO1xuXG5jbGFzcyBQbGF5ZXIge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmJvYXJkID0gR2FtZWJvYXJkKCk7XG4gICAgdGhpcy50dXJuID0gZmFsc2U7XG4gIH1cblxuICBzZXRUdXJuKCkge1xuICAgIHRoaXMudHVybiA9IHRydWU7XG4gIH1cblxuICBkaXNhYmxlVHVybigpIHtcbiAgICB0aGlzLnR1cm4gPSBmYWxzZTtcbiAgfVxuXG4gIHN3YXBUdXJucyhlbmVteVBsYXllcikge1xuICAgIHRoaXMuZGlzYWJsZVR1cm4oKTtcbiAgICBlbmVteVBsYXllci5zZXRUdXJuKCk7XG4gIH1cblxuICBhdHRhY2soZW5lbXlQbGF5ZXIsIHgsIHkpIHtcbiAgICBpZiAoZW5lbXlQbGF5ZXIuYm9hcmQuZ3JpZFt4XVt5XSA9PT0gLTEpIHRocm93IG5ldyBFcnJvcignRXJyb3I6IEludmFsaWQgc2V0IG9mIGNvb3JkaW5hdGVzLicpO1xuICAgIGlmICh0aGlzLnR1cm4pIHtcbiAgICAgIGVuZW15UGxheWVyLmJvYXJkLnJlY2VpdmVBdHRhY2soeCwgeSk7XG4gICAgICBlbmVteVBsYXllci5ib2FyZC5jaGVja0ZsZWV0KCk7XG4gICAgICB0aGlzLnN3YXBUdXJucyhlbmVteVBsYXllcik7XG4gICAgfVxuICB9XG5cbiAgcmVzZXQoKSB7XG4gICAgdGhpcy50dXJuID0gZmFsc2U7XG4gICAgdGhpcy5ib2FyZC5jbGVhckJvYXJkKCk7XG4gIH1cbn1cblxuY2xhc3MgQ29tcHV0ZXJQbGF5ZXIgZXh0ZW5kcyBQbGF5ZXIge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMuYXR0YWNrZWRDb29yZHMgPSB7fTtcbiAgfVxuXG4gIHJhbmRvbUF0dGFjayhlbmVteVBsYXllcikge1xuICAgIGNvbnN0IGVuZW15Qm9hcmQgPSBlbmVteVBsYXllci5ib2FyZDtcbiAgICBjb25zdCBjb29yZHMgPSB0aGlzLmdldFJhbmRvbUNvb3JkcygpO1xuICAgIGNvbnN0IHggPSBjb29yZHNbMF07XG4gICAgY29uc3QgeSA9IGNvb3Jkc1sxXTtcblxuICAgIGVuZW15Qm9hcmQucmVjZWl2ZUF0dGFjayh4LCB5KTtcbiAgICB0aGlzLmF0dGFja2VkQ29vcmRzW2Ake3h9JHt5fWBdID0gMDtcblxuICAgIGVuZW15UGxheWVyLmJvYXJkLmNoZWNrRmxlZXQoKTtcbiAgICB0aGlzLnN3YXBUdXJucyhlbmVteVBsYXllcik7XG5cbiAgICByZXR1cm4gY29vcmRzO1xuICB9XG5cbiAgZ2V0UmFuZG9tQ29vcmRzKCkge1xuICAgIGxldCB4ID0gdGhpcy5nZXRSYW5kb21JbnQoMCwgOSk7XG4gICAgbGV0IHkgPSB0aGlzLmdldFJhbmRvbUludCgwLCA5KTtcblxuICAgIC8vIENoZWNrIGhhc2ggdGFibGUgZm9yIGNvb3Jkcy4gSWYgYXR0YWNrZWQgYmVmb3JlLCBjaG9vc2UgbmV3IGNvb3Jkc1xuICAgIHdoaWxlICh0aGlzLmF0dGFja2VkQ29vcmRzW2Ake3h9JHt5fWBdICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHggPSB0aGlzLmdldFJhbmRvbUludCgwLCA5KTtcbiAgICAgIHkgPSB0aGlzLmdldFJhbmRvbUludCgwLCA5KTtcbiAgICB9XG5cbiAgICByZXR1cm4gW3gsIHldO1xuICB9XG5cbiAgZ2V0UmFuZG9tSW50KG1pbiwgbWF4KSB7XG4gICAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChtYXggLSBtaW4gKyAxKSkgKyBtaW47XG4gIH1cblxuICBwbGFjZVNoaXBzUmFuZG9tKCkge1xuICAgIGNvbnN0IHJhbmRvbWl6ZU9yaWVudGF0aW9uID0gKCkgPT4ge1xuICAgICAgY29uc3QgcmFuZG9tSW50ID0gdGhpcy5nZXRSYW5kb21JbnQoMCwgMSk7XG4gICAgICB0aGlzLmJvYXJkLmxhbmRzY2FwZSA9IHJhbmRvbUludCA9PT0gMDtcbiAgICB9O1xuICAgIGNvbnN0IHBsYWNlUmFuZG9tU2hpcCA9IChzaGlwKSA9PiB7XG4gICAgICByYW5kb21pemVPcmllbnRhdGlvbigpO1xuICAgICAgbGV0IHggPSB0aGlzLmdldFJhbmRvbUludCgwLCA5KTtcbiAgICAgIGxldCB5ID0gdGhpcy5nZXRSYW5kb21JbnQoMCwgOSk7XG4gICAgICBsZXQgcmFuZG9tU2hpcCA9IHRoaXMuYm9hcmQucGxhY2VTaGlwKHNoaXAsIHgsIHkpO1xuXG4gICAgICB3aGlsZSAocmFuZG9tU2hpcCA9PT0gZmFsc2UpIHtcbiAgICAgICAgcmFuZG9taXplT3JpZW50YXRpb24oKTtcbiAgICAgICAgeCA9IHRoaXMuZ2V0UmFuZG9tSW50KDAsIDkpO1xuICAgICAgICB5ID0gdGhpcy5nZXRSYW5kb21JbnQoMCwgOSk7XG4gICAgICAgIHJhbmRvbVNoaXAgPSB0aGlzLmJvYXJkLnBsYWNlU2hpcChzaGlwLCB4LCB5KTtcbiAgICAgIH1cbiAgICB9O1xuICAgIHBsYWNlUmFuZG9tU2hpcCh0aGlzLmJvYXJkLmNhcnJpZXIpO1xuICAgIHBsYWNlUmFuZG9tU2hpcCh0aGlzLmJvYXJkLmJhdHRsZXNoaXApO1xuICAgIHBsYWNlUmFuZG9tU2hpcCh0aGlzLmJvYXJkLmRlc3Ryb3llcik7XG4gICAgcGxhY2VSYW5kb21TaGlwKHRoaXMuYm9hcmQuc3VibWFyaW5lKTtcbiAgICBwbGFjZVJhbmRvbVNoaXAodGhpcy5ib2FyZC5wYXRyb2wpO1xuICB9XG5cbiAgY29tcHV0ZXJSZXNldCgpIHtcbiAgICB0aGlzLnJlc2V0KCk7XG4gICAgdGhpcy5hdHRhY2tlZENvb3JkcyA9IHt9O1xuICB9XG59XG5cbmV4cG9ydCB7IFBsYXllciwgQ29tcHV0ZXJQbGF5ZXIgfTtcbiIsImNvbnN0IFNoaXAgPSAobGVuKSA9PiB7XG4gIGNvbnN0IGxlbmd0aCA9IGxlbjtcbiAgY29uc3QgaGl0cyA9IDA7XG4gIGNvbnN0IHN1bmsgPSBmYWxzZTtcbiAgY29uc3QgcGxhY2VkID0gZmFsc2U7XG5cbiAgcmV0dXJuIHtcbiAgICBsZW5ndGgsXG4gICAgaGl0cyxcbiAgICBzdW5rLFxuICAgIHBsYWNlZCxcbiAgICBoaXQoKSB7XG4gICAgICB0aGlzLmhpdHMrKztcbiAgICB9LFxuICAgIGlzU3VuaygpIHtcbiAgICAgIGlmICh0aGlzLmhpdHMgPj0gdGhpcy5sZW5ndGgpIHRoaXMuc3VuayA9IHRydWU7XG4gICAgfSxcbiAgfTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBTaGlwLFxufTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgJy4vc3R5bGVzL3N0eWxlcy5jc3MnO1xuaW1wb3J0IHsgZ2FtZSB9IGZyb20gJy4vc2NyaXB0cy9nYW1lLmpzJztcbmltcG9ydCB7IGF0dGFjaFBvcHVwTGlzdGVuZXJzLCByZW5kZXJCb2FyZHMgfSBmcm9tICcuL3NjcmlwdHMvZG9tLmpzJztcblxuZ2FtZS5zdGFydEdhbWUoKTtcbnJlbmRlckJvYXJkcyhnYW1lLnVzZXIsIGdhbWUuY29tcHV0ZXIpO1xuYXR0YWNoUG9wdXBMaXN0ZW5lcnMoKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/CSS/style.css":
/*!*****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/CSS/style.css ***!
  \*****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Ga+Maamli&display=swap);"]);
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Lobster&display=swap);"]);
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Caveat:wght@400..700&display=swap);"]);
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Yanone+Kaffeesatz:wght@200..700&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `html,
body {
	padding: 0px;
	margin: 0px;
	height: 100%;
	background-color: black;
	/* font-family: "Caveat", cursive; */
	font-family: "Yanone Kaffeesatz", sans-serif;
	font-size: 1.15rem;
}

header > div {
	font-family: "Ga Maamli", sans-serif;
	font-size: 60px;
}

#content {
	display: flex;
	flex-direction: column;
	background-color: #444;
}
.contentBody {
	display: flex;
	flex-direction: column;
	align-items: center;
	height: auto;
	flex: 1;
	padding: 10px 20px 20px;
}
.contentBody > h1 {
	font-size: 4rem;
	font-family: "Lobster", sans-serif;
	margin: 0px;
	text-shadow: 0px 5px 1px blue, 5px 0px 1px violet, -5px 0px 1px orange,
		0px -5px 1px red;
}
.contentBody > div {
	background-color: rgba(0, 0, 0, 0.5);
	flex: 1;
	width: calc(100% - 15px);
	display: flex;
	flex-direction: column;
	/* justify-content: center; */
	align-items: center;
	padding: 0px 15px;
	color: white;
}

/* About */
.about {
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	width: fit-content;
}
.offers {
	list-style: none;
	display: flex;
	flex-direction: column;
	align-items: start;
	/* align-items: start; */
	gap: 10px;
}

.offers > li {
	padding: 5px 10px;
	border-radius: 5px;
	font-size: 30px;
	/* text-shadow: 4px 4px 10px blue; */
	cursor: pointer;
}

.imageGal {
	display: flex;
	width: fit-content;
	background-color: black;
	transform-origin: top;
	margin: 0px 40px;
	padding: 10px 20px;
	box-shadow: 2px 2px 6px blue;
	border-radius: 10px;
	transform: scaleY(1, 1);
	transition: transform 0.8s;
}
.imageGal.transitioning {
	transition: transform 0.3s;
	transform: scale(0, 1);
}
.imageGal.inactive {
	opacity: 0;
	transform: scale(0.01, 1);
	position: absolute;
}
.imageGal > img {
	width: clamp(340px, 40%, 600px);
	height: auto;
	max-height: 340px;
	border-radius: 0px 30px 30px 0px;
	box-shadow: 2px 0px 5px violet;
}
.imageGal > div {
	min-width: 340px;
}

.aboutContent {
	display: flex;
	flex-direction: column;
	align-items: center;
	text-align: center;
	padding: 5px;
}
.aboutContent > h1 {
	text-shadow: 5px 5px 10px red, -5px -5px 10px red;
	font-size: 40px;
}
.aboutContent > div {
	text-shadow: 5px 5px 10px violet;
	font-size: calc(1.5vw + 10px);
}

@media /* (min-width: 760px) and */(max-width: 900px) {
	.imageGal {
		flex-direction: column;
		align-items: center;
	}
}
@media (max-width: 760px) {
	.about > h2 {
		text-align: center;
		font-size: calc(6vw + 5px);
		max-width: 360px;
		margin: 20px 0px;
	}
	.imageGal {
		margin: 0px;
		padding: 20px 0px;
		min-width: 360px;
		width: 100%;
	}
	.imageGal > img {
		border-radius: 0px 0px 30px 30px;
		box-shadow: 0px 2px 5px violet;
	}
	.contentBody > div {
		width: 100vw !important;
		padding: 0px;
		margin: 0px;
	}
	.aboutContent > div {
		font-size: 24px;
	}
}

/* Menu Styling */
.menu {
	padding: 30px 40px !important;
	width: calc(100% - 80px) !important;
}
.menu > div {
	width: 100%;
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
	gap: 30px;
	justify-content: center;
}
.menucard {
	display: flex;
	flex-direction: column;
	align-items: center;
	border: 1px solid blue;
	/* max-width: 450px; */
}
.menucard:hover {
	box-shadow: 5px 5px 10px blue;
}

/* Contact styling */
.contact {
	color: white;
	display: flex;
	flex-direction: column;
	gap: 10px;
	align-items: center;
}

.contactcard {
	flex: 1;
	display: flex;
	margin: 20px;
	padding: 20px;
	justify-content: space-between;
	background-color: rgba(255, 255, 255, 0.3);
	border-radius: 20px;
	box-shadow: 0px 0px 5px 5px cyan;
	gap: 20px;
	font-size: 2rem;
	align-items: center;
}
.credentials {
	width: 400px;
}
.contactImg {
	width: 200px;
	height: 200px;
	border-radius: 20px;
}

/* Header Footer */
header,
footer {
	display: flex;
	flex-direction: column;
}
header > div,
footer {
	pointer-events: none;
	font-size: 50px;
	display: flex;
	align-items: center;
	justify-content: center;
	background-color: black;
	color: white;
	height: 80px;
	gap: 20px;
}
header > div > img {
	pointer-events: none;
	user-select: none;
}
#buttons {
	margin: 0px;
	padding: 0px;
	list-style-type: none;
	display: flex;
	justify-content: space-around;
	align-items: center;
	gap: 5px;
	font-size: 35px;
	font-family: "Lobster", sans-serif;
	padding: 0px 10px;
}
#buttons li {
	display: flex;
	justify-content: center;
	align-items: center;
	color: white;
	margin: 0px;
	padding: 0px;
	background-color: blue;
	flex: 1;
	height: 60px;
	cursor: default;
	border-radius: 0px 0px 20px 20px;
	text-shadow: 4px 4px black;
	box-shadow: none;
	transition: background-color 10s, box-shadow 1s;
}
#buttons li:hover {
	transition: background-color 1s;
	text-shadow: 4px 4px violet;
	background-color: #241571;
}
ul li:hover {
	z-index: 1;
	box-shadow: 0px 0px 10px 10px cyan !important;
	background-color: violet;
	transition: background-color 2s;
}
`, "",{"version":3,"sources":["webpack://./src/CSS/style.css"],"names":[],"mappings":"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","sourcesContent":["@import url(\"https://fonts.googleapis.com/css2?family=Ga+Maamli&display=swap\");\r\n@import url(\"https://fonts.googleapis.com/css2?family=Lobster&display=swap\");\r\n@import url(\"https://fonts.googleapis.com/css2?family=Caveat:wght@400..700&display=swap\");\r\n@import url(\"https://fonts.googleapis.com/css2?family=Yanone+Kaffeesatz:wght@200..700&display=swap\");\r\n\r\nhtml,\r\nbody {\r\n\tpadding: 0px;\r\n\tmargin: 0px;\r\n\theight: 100%;\r\n\tbackground-color: black;\r\n\t/* font-family: \"Caveat\", cursive; */\r\n\tfont-family: \"Yanone Kaffeesatz\", sans-serif;\r\n\tfont-size: 1.15rem;\r\n}\r\n\r\nheader > div {\r\n\tfont-family: \"Ga Maamli\", sans-serif;\r\n\tfont-size: 60px;\r\n}\r\n\r\n#content {\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n\tbackground-color: #444;\r\n}\r\n.contentBody {\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n\talign-items: center;\r\n\theight: auto;\r\n\tflex: 1;\r\n\tpadding: 10px 20px 20px;\r\n}\r\n.contentBody > h1 {\r\n\tfont-size: 4rem;\r\n\tfont-family: \"Lobster\", sans-serif;\r\n\tmargin: 0px;\r\n\ttext-shadow: 0px 5px 1px blue, 5px 0px 1px violet, -5px 0px 1px orange,\r\n\t\t0px -5px 1px red;\r\n}\r\n.contentBody > div {\r\n\tbackground-color: rgba(0, 0, 0, 0.5);\r\n\tflex: 1;\r\n\twidth: calc(100% - 15px);\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n\t/* justify-content: center; */\r\n\talign-items: center;\r\n\tpadding: 0px 15px;\r\n\tcolor: white;\r\n}\r\n\r\n/* About */\r\n.about {\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n\talign-items: center;\r\n\tjustify-content: center;\r\n\twidth: fit-content;\r\n}\r\n.offers {\r\n\tlist-style: none;\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n\talign-items: start;\r\n\t/* align-items: start; */\r\n\tgap: 10px;\r\n}\r\n\r\n.offers > li {\r\n\tpadding: 5px 10px;\r\n\tborder-radius: 5px;\r\n\tfont-size: 30px;\r\n\t/* text-shadow: 4px 4px 10px blue; */\r\n\tcursor: pointer;\r\n}\r\n\r\n.imageGal {\r\n\tdisplay: flex;\r\n\twidth: fit-content;\r\n\tbackground-color: black;\r\n\ttransform-origin: top;\r\n\tmargin: 0px 40px;\r\n\tpadding: 10px 20px;\r\n\tbox-shadow: 2px 2px 6px blue;\r\n\tborder-radius: 10px;\r\n\ttransform: scaleY(1, 1);\r\n\ttransition: transform 0.8s;\r\n}\r\n.imageGal.transitioning {\r\n\ttransition: transform 0.3s;\r\n\ttransform: scale(0, 1);\r\n}\r\n.imageGal.inactive {\r\n\topacity: 0;\r\n\ttransform: scale(0.01, 1);\r\n\tposition: absolute;\r\n}\r\n.imageGal > img {\r\n\twidth: clamp(340px, 40%, 600px);\r\n\theight: auto;\r\n\tmax-height: 340px;\r\n\tborder-radius: 0px 30px 30px 0px;\r\n\tbox-shadow: 2px 0px 5px violet;\r\n}\r\n.imageGal > div {\r\n\tmin-width: 340px;\r\n}\r\n\r\n.aboutContent {\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n\talign-items: center;\r\n\ttext-align: center;\r\n\tpadding: 5px;\r\n}\r\n.aboutContent > h1 {\r\n\ttext-shadow: 5px 5px 10px red, -5px -5px 10px red;\r\n\tfont-size: 40px;\r\n}\r\n.aboutContent > div {\r\n\ttext-shadow: 5px 5px 10px violet;\r\n\tfont-size: calc(1.5vw + 10px);\r\n}\r\n\r\n@media /* (min-width: 760px) and */(max-width: 900px) {\r\n\t.imageGal {\r\n\t\tflex-direction: column;\r\n\t\talign-items: center;\r\n\t}\r\n}\r\n@media (max-width: 760px) {\r\n\t.about > h2 {\r\n\t\ttext-align: center;\r\n\t\tfont-size: calc(6vw + 5px);\r\n\t\tmax-width: 360px;\r\n\t\tmargin: 20px 0px;\r\n\t}\r\n\t.imageGal {\r\n\t\tmargin: 0px;\r\n\t\tpadding: 20px 0px;\r\n\t\tmin-width: 360px;\r\n\t\twidth: 100%;\r\n\t}\r\n\t.imageGal > img {\r\n\t\tborder-radius: 0px 0px 30px 30px;\r\n\t\tbox-shadow: 0px 2px 5px violet;\r\n\t}\r\n\t.contentBody > div {\r\n\t\twidth: 100vw !important;\r\n\t\tpadding: 0px;\r\n\t\tmargin: 0px;\r\n\t}\r\n\t.aboutContent > div {\r\n\t\tfont-size: 24px;\r\n\t}\r\n}\r\n\r\n/* Menu Styling */\r\n.menu {\r\n\tpadding: 30px 40px !important;\r\n\twidth: calc(100% - 80px) !important;\r\n}\r\n.menu > div {\r\n\twidth: 100%;\r\n\tdisplay: grid;\r\n\tgrid-template-columns: repeat(auto-fill, minmax(300px, 1fr));\r\n\tgap: 30px;\r\n\tjustify-content: center;\r\n}\r\n.menucard {\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n\talign-items: center;\r\n\tborder: 1px solid blue;\r\n\t/* max-width: 450px; */\r\n}\r\n.menucard:hover {\r\n\tbox-shadow: 5px 5px 10px blue;\r\n}\r\n\r\n/* Contact styling */\r\n.contact {\r\n\tcolor: white;\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n\tgap: 10px;\r\n\talign-items: center;\r\n}\r\n\r\n.contactcard {\r\n\tflex: 1;\r\n\tdisplay: flex;\r\n\tmargin: 20px;\r\n\tpadding: 20px;\r\n\tjustify-content: space-between;\r\n\tbackground-color: rgba(255, 255, 255, 0.3);\r\n\tborder-radius: 20px;\r\n\tbox-shadow: 0px 0px 5px 5px cyan;\r\n\tgap: 20px;\r\n\tfont-size: 2rem;\r\n\talign-items: center;\r\n}\r\n.credentials {\r\n\twidth: 400px;\r\n}\r\n.contactImg {\r\n\twidth: 200px;\r\n\theight: 200px;\r\n\tborder-radius: 20px;\r\n}\r\n\r\n/* Header Footer */\r\nheader,\r\nfooter {\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n}\r\nheader > div,\r\nfooter {\r\n\tpointer-events: none;\r\n\tfont-size: 50px;\r\n\tdisplay: flex;\r\n\talign-items: center;\r\n\tjustify-content: center;\r\n\tbackground-color: black;\r\n\tcolor: white;\r\n\theight: 80px;\r\n\tgap: 20px;\r\n}\r\nheader > div > img {\r\n\tpointer-events: none;\r\n\tuser-select: none;\r\n}\r\n#buttons {\r\n\tmargin: 0px;\r\n\tpadding: 0px;\r\n\tlist-style-type: none;\r\n\tdisplay: flex;\r\n\tjustify-content: space-around;\r\n\talign-items: center;\r\n\tgap: 5px;\r\n\tfont-size: 35px;\r\n\tfont-family: \"Lobster\", sans-serif;\r\n\tpadding: 0px 10px;\r\n}\r\n#buttons li {\r\n\tdisplay: flex;\r\n\tjustify-content: center;\r\n\talign-items: center;\r\n\tcolor: white;\r\n\tmargin: 0px;\r\n\tpadding: 0px;\r\n\tbackground-color: blue;\r\n\tflex: 1;\r\n\theight: 60px;\r\n\tcursor: default;\r\n\tborder-radius: 0px 0px 20px 20px;\r\n\ttext-shadow: 4px 4px black;\r\n\tbox-shadow: none;\r\n\ttransition: background-color 10s, box-shadow 1s;\r\n}\r\n#buttons li:hover {\r\n\ttransition: background-color 1s;\r\n\ttext-shadow: 4px 4px violet;\r\n\tbackground-color: #241571;\r\n}\r\nul li:hover {\r\n\tz-index: 1;\r\n\tbox-shadow: 0px 0px 10px 10px cyan !important;\r\n\tbackground-color: violet;\r\n\ttransition: background-color 2s;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
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
  };

  // import a list of modules into the list
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

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



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
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/CSS/style.css":
/*!***************************!*\
  !*** ./src/CSS/style.css ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/CSS/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



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



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
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
  }

  // For old IE
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
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
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

/***/ "./src/pages/about.js":
/*!****************************!*\
  !*** ./src/pages/about.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _CSS_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../CSS/style.css */ "./src/CSS/style.css");
/* harmony import */ var _Images_About_indoors_image_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Images/About/indoors-image.jpg */ "./src/Images/About/indoors-image.jpg");
/* harmony import */ var _Images_About_outdoors_image_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Images/About/outdoors-image.jpg */ "./src/Images/About/outdoors-image.jpg");
/* harmony import */ var _Images_About_cooking_image_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Images/About/cooking-image.jpg */ "./src/Images/About/cooking-image.jpg");





let currentIndex = 0;
let intervalId;
//function mainContent
function image(link) {
	let tempele = document.createElement("img");
	tempele.src = link;
	return tempele;
}

function imageGalleryText(title, text) {
	let tempele = document.createElement("div");
	tempele.classList.add("aboutContent");
	let h1Title = document.createElement("h1");
	h1Title.textContent = title;
	tempele.appendChild(h1Title);
	let textContent = document.createElement("div");
	textContent.textContent = text;
	tempele.appendChild(textContent);

	return tempele;
}

function imageGalleryObject(link, title, text, active = true) {
	let tempele = document.createElement("div");

	tempele.classList.add("imageGal");
	active == true
		? tempele.classList.toggle("inactive", !active)
		: tempele.classList.toggle("inactive", !active);

	tempele.appendChild(image(link));
	tempele.appendChild(imageGalleryText(title, text));

	return tempele;
}

function imageGallery() {
	let tempele = document.createElement("div");
	tempele.appendChild(
		imageGalleryObject(
			_Images_About_indoors_image_jpg__WEBPACK_IMPORTED_MODULE_1__,
			"Indoors Lounge",
			"Our bistro offers a calm and pleasant environment, perfect for relaxing and enjoying a meal. On weekends, we enhance this experience with live music performances by different amateur singers. These performances start after 9:00 PM, creating a delightful atmosphere for our guests to unwind and enjoy their evening. Whether you're looking for a quiet dinner or a night out with friends, our bistro is the ideal place to be"
		)
	);
	tempele.appendChild(
		imageGalleryObject(
			_Images_About_outdoors_image_jpg__WEBPACK_IMPORTED_MODULE_2__,
			"Outdoors space",
			"At our bistro, you can enjoy our outdoor space with beautiful scenery and fresh air. It's the perfect place for a romantic dinner or just to relax and enjoy the outdoors. Picture yourself dining outside, surrounded by nature, while you enjoy our delicious food and drinks. Come see why our bistro is a great spot to unwind and connect with others in a lovely outdoor setting.",
			false
		)
	);
	tempele.appendChild(
		imageGalleryObject(
			_Images_About_cooking_image_jpg__WEBPACK_IMPORTED_MODULE_3__,
			"Kitchen",
			"At our bistro, our biggest selling point is our food. Our experienced chefs take pride in preparing the best dishes for you in a clean and welcoming environment. Each meal is crafted with care and attention to detail, ensuring that every bite is delicious. Our menu features a variety of options, all made from high-quality ingredients. Whether you're here for a quick lunch or a special dinner, you'll find something to love. Come and experience the exceptional food and warm atmosphere that make our bistro a favorite spot for many.",
			false
		)
	);

	return tempele;
}

function offerItem(text, color) {
	let offer = document.createElement("li");
	offer.textContent = text;
	offer.style.textShadow = "4px 4px 15px " + color;
	return offer;
}

function whatWeoffer() {
	let container = document.createElement("div");
	let subTitle = document.createElement("h3");

	let tempele = document.createElement("ul");
	tempele.classList.add("offers");

	tempele.appendChild(offerItem("Every weekend: 24/7", "blue"));
	tempele.appendChild(offerItem("Midnight: 12:00AM~06:00AM", "violet"));
	tempele.appendChild(offerItem("Lunch Sets: 01:00PM~02:00PM", "orange"));

	subTitle.textContent = "We offer discounted sets on:";

	container.appendChild(subTitle);
	container.appendChild(tempele);

	return container;
}

function about() {
	let element = document.createElement("div");
	let tempele = document.createElement("div");
	let innerElement = document.createElement("div");
	currentIndex = 0;

	if (intervalId) {
		clearInterval(intervalId);
	}
	innerElement.classList.add("about");
	innerElement.innerHTML = `<h2>Family Dinner, Traditional kitchen. We offer food made by experienced chefs.</h2>`;

	innerElement.appendChild(imageGallery());

	innerElement.appendChild(whatWeoffer());

	let h1Text = document.createElement("h1");
	h1Text.textContent = "About";

	tempele.appendChild(innerElement);
	element.appendChild(h1Text);
	element.appendChild(tempele);
	intervalId = setInterval(animateGallery, 10000);
	return element;
}

function animateGallery() {
	let array = document.querySelectorAll(".imageGal");

	array[currentIndex].classList.toggle("transitioning", true);
	setTimeout(() => {
		array[currentIndex].classList.toggle("inactive", true);
		array[currentIndex].classList.toggle("transitioning", false);
		currentIndex = (currentIndex + 1) % array.length;
		array[currentIndex].classList.toggle("inactive", false);
	}, 300);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (about);


/***/ }),

/***/ "./src/pages/contact.js":
/*!******************************!*\
  !*** ./src/pages/contact.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _CSS_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../CSS/style.css */ "./src/CSS/style.css");
/* harmony import */ var _Images_Olimpic_cyclist_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Images/Olimpic-cyclist.jpg */ "./src/Images/Olimpic-cyclist.jpg");
/* harmony import */ var _Images_Happymullet_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Images/Happymullet.jpg */ "./src/Images/Happymullet.jpg");
/* harmony import */ var _Images_Chickman_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Images/Chickman.jpg */ "./src/Images/Chickman.jpg");





function createCard(name,number,image){
    let tempele = document.createElement('div');
    let newImage = new Image();
    let text_contact = document.createElement('div');


    text_contact.classList.add("credentials");
    text_contact.appendChild(document.createElement('p')).appendChild(document.createTextNode(`Name: ${name}`));
    text_contact.appendChild(document.createElement('p')).appendChild(document.createTextNode(`Number: ${number}`));


    newImage.classList.add("contactImg")
    newImage.src = image;
    tempele.classList.add('contactcard')


    tempele.appendChild(newImage);
    tempele.appendChild(text_contact);

    
    return tempele;
}

function contact(){
    let element = document.createElement('div');
    let optionText = document.createElement('h1');
    optionText.innerHTML = "Contact"
    element.appendChild(optionText);

    let mainclass = document.createElement('div');
    mainclass.classList.add("contact")
    element.appendChild(mainclass);


    mainclass.appendChild(createCard("კეთილი კაცი",555,_Images_Olimpic_cyclist_jpg__WEBPACK_IMPORTED_MODULE_1__));
    mainclass.appendChild(createCard("ოქრო კაცი ",555,_Images_Happymullet_jpg__WEBPACK_IMPORTED_MODULE_2__));
    mainclass.appendChild(createCard("ნაშა კაცი ",555,_Images_Chickman_jpg__WEBPACK_IMPORTED_MODULE_3__));

    return element;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (contact);

/***/ }),

/***/ "./src/pages/menu.js":
/*!***************************!*\
  !*** ./src/pages/menu.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _CSS_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../CSS/style.css */ "./src/CSS/style.css");
/* harmony import */ var _Images_Menu_food1_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Images/Menu/food1.jpg */ "./src/Images/Menu/food1.jpg");
/* harmony import */ var _Images_Menu_food2_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Images/Menu/food2.jpg */ "./src/Images/Menu/food2.jpg");
/* harmony import */ var _Images_Menu_food3_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Images/Menu/food3.jpg */ "./src/Images/Menu/food3.jpg");
/* harmony import */ var _Images_Menu_food4_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Images/Menu/food4.jpg */ "./src/Images/Menu/food4.jpg");
/* harmony import */ var _Images_Menu_food5_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Images/Menu/food5.jpg */ "./src/Images/Menu/food5.jpg");
/* harmony import */ var _Images_Menu_food6_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Images/Menu/food6.jpg */ "./src/Images/Menu/food6.jpg");
/* harmony import */ var _Images_Menu_food7_jpg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Images/Menu/food7.jpg */ "./src/Images/Menu/food7.jpg");








function menuItemCard(image, name) {
	let tempele = document.createElement("div");
	tempele.classList.add("menucard");

	let img = new Image();
	img.src = image;
	img.style.height = "250px";
	img.style.width = "clamp(300px,100%, 450px)";

	tempele.appendChild(img);

	let text = document.createElement("p");
	text.appendChild(document.createTextNode(`${name}`));

	tempele.appendChild(text);

	return tempele;
}

function menu() {
	let element = document.createElement("div");
	let optionText = document.createElement("h1");
	optionText.innerHTML = "Menu";
	element.appendChild(optionText);

	let classcontainer = document.createElement("div");

	let mainclass = document.createElement("div");
	classcontainer.classList.add("menu");
	classcontainer.appendChild(mainclass);
	element.appendChild(classcontainer);

	mainclass.appendChild(menuItemCard(_Images_Menu_food1_jpg__WEBPACK_IMPORTED_MODULE_1__, "Chicken salad"));
	mainclass.appendChild(menuItemCard(_Images_Menu_food2_jpg__WEBPACK_IMPORTED_MODULE_2__, "Xhinkali"));
	mainclass.appendChild(menuItemCard(_Images_Menu_food3_jpg__WEBPACK_IMPORTED_MODULE_3__, "Cream puffs"));
	mainclass.appendChild(menuItemCard(_Images_Menu_food4_jpg__WEBPACK_IMPORTED_MODULE_4__, "Smoked beef"));
	mainclass.appendChild(menuItemCard(_Images_Menu_food5_jpg__WEBPACK_IMPORTED_MODULE_5__, "Sasuage"));
	mainclass.appendChild(menuItemCard(_Images_Menu_food6_jpg__WEBPACK_IMPORTED_MODULE_6__, "Skewered pork"));
	mainclass.appendChild(menuItemCard(_Images_Menu_food7_jpg__WEBPACK_IMPORTED_MODULE_7__, "Olives"));
	return element;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menu);


/***/ }),

/***/ "./src/Images/About/cooking-image.jpg":
/*!********************************************!*\
  !*** ./src/Images/About/cooking-image.jpg ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "1cdcd16562d14226eb6f.jpg";

/***/ }),

/***/ "./src/Images/About/indoors-image.jpg":
/*!********************************************!*\
  !*** ./src/Images/About/indoors-image.jpg ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "00fa041f0a5084eeba81.jpg";

/***/ }),

/***/ "./src/Images/About/outdoors-image.jpg":
/*!*********************************************!*\
  !*** ./src/Images/About/outdoors-image.jpg ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "0dba2443619e4e9da8de.jpg";

/***/ }),

/***/ "./src/Images/Chickman.jpg":
/*!*********************************!*\
  !*** ./src/Images/Chickman.jpg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "bd185c7bf2e5fe976d9e.jpg";

/***/ }),

/***/ "./src/Images/Happymullet.jpg":
/*!************************************!*\
  !*** ./src/Images/Happymullet.jpg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "69be04ca990054b1713b.jpg";

/***/ }),

/***/ "./src/Images/Menu/food1.jpg":
/*!***********************************!*\
  !*** ./src/Images/Menu/food1.jpg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "d594c85e035830986451.jpg";

/***/ }),

/***/ "./src/Images/Menu/food2.jpg":
/*!***********************************!*\
  !*** ./src/Images/Menu/food2.jpg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "7bad68b0cbc6b3b10490.jpg";

/***/ }),

/***/ "./src/Images/Menu/food3.jpg":
/*!***********************************!*\
  !*** ./src/Images/Menu/food3.jpg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "11ac5acebd5303556212.jpg";

/***/ }),

/***/ "./src/Images/Menu/food4.jpg":
/*!***********************************!*\
  !*** ./src/Images/Menu/food4.jpg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "e891add898625e73cc69.jpg";

/***/ }),

/***/ "./src/Images/Menu/food5.jpg":
/*!***********************************!*\
  !*** ./src/Images/Menu/food5.jpg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "70599cba0655e8848afd.jpg";

/***/ }),

/***/ "./src/Images/Menu/food6.jpg":
/*!***********************************!*\
  !*** ./src/Images/Menu/food6.jpg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "5c865922c3c431687fb6.jpg";

/***/ }),

/***/ "./src/Images/Menu/food7.jpg":
/*!***********************************!*\
  !*** ./src/Images/Menu/food7.jpg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "ff30ae24ee58eea89f19.jpg";

/***/ }),

/***/ "./src/Images/Olimpic-cyclist.jpg":
/*!****************************************!*\
  !*** ./src/Images/Olimpic-cyclist.jpg ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "9b5b9459f6be5dc950ea.jpg";

/***/ }),

/***/ "./src/Images/Rocket.svg":
/*!*******************************!*\
  !*** ./src/Images/Rocket.svg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "82958321e3d177706d00.svg";

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
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _pages_menu_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages/menu.js */ "./src/pages/menu.js");
/* harmony import */ var _pages_about_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/about.js */ "./src/pages/about.js");
/* harmony import */ var _pages_contact_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/contact.js */ "./src/pages/contact.js");
/* harmony import */ var _CSS_style_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./CSS/style.css */ "./src/CSS/style.css");
/* harmony import */ var _Images_Rocket_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Images/Rocket.svg */ "./src/Images/Rocket.svg");






const mainContainer = document.getElementById("content");
const headerText = document.querySelector("header").querySelector("div");
const buttons = document.querySelector("#buttons").querySelectorAll('li');

var currentButton = "about";

for(let i = 0; i < buttons.length;i++){
    buttons[i].addEventListener('click',(e) =>{
        currentButton = e.target.id;
        compile();
    })
}

function firstCompile() {
    //rocket picture
    let picture = new Image();
    picture.src = _Images_Rocket_svg__WEBPACK_IMPORTED_MODULE_4__;
    picture.style.height = "80%";
    headerText.insertBefore(picture, headerText.firstChild);

    //create new element
    const mainElement = document.createElement('div');
    //change content of inner html
    mainElement.innerHTML = (0,_pages_about_js__WEBPACK_IMPORTED_MODULE_1__["default"])().innerHTML;
    mainElement.classList.add('contentBody');
    mainElement.id = "maincontent";
    //add before footer
    mainContainer.insertBefore(mainElement,mainContainer.querySelector('footer'));
}

function compile(){
    const mainElement = document.querySelector("#maincontent");
    switch(currentButton){
        case "about":
            mainElement.innerHTML = (0,_pages_about_js__WEBPACK_IMPORTED_MODULE_1__["default"])().innerHTML;
            break;
        case "menu":
            mainElement.innerHTML = (0,_pages_menu_js__WEBPACK_IMPORTED_MODULE_0__["default"])().innerHTML;
            break;
        case "contact":
            mainElement.innerHTML = (0,_pages_contact_js__WEBPACK_IMPORTED_MODULE_2__["default"])().innerHTML;
            break;    
        default:
            console.log("not default");
    }
}

firstCompile();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUM2RztBQUNqQjtBQUM1Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GLHVIQUF1SDtBQUN2SCxxSEFBcUg7QUFDckgsa0lBQWtJO0FBQ2xJLDZJQUE2STtBQUM3STtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9DQUFvQztBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QjtBQUN4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9DQUFvQztBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTyxxRkFBcUYsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLEtBQUssT0FBTyxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsTUFBTSxVQUFVLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxXQUFXLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE1BQU0sS0FBSyxZQUFZLGFBQWEsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxLQUFLLEtBQUssWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLEtBQUssWUFBWSxhQUFhLE1BQU0sS0FBSyxLQUFLLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxLQUFLLEtBQUssWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxLQUFLLEtBQUssVUFBVSxNQUFNLE1BQU0sWUFBWSxNQUFNLFlBQVksYUFBYSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsTUFBTSxLQUFLLFlBQVksT0FBTyxZQUFZLE1BQU0sVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxVQUFVLFlBQVksTUFBTSxLQUFLLFVBQVUsS0FBSyxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sWUFBWSxPQUFPLFVBQVUsWUFBWSxNQUFNLE1BQU0sWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLFVBQVUsS0FBSyxLQUFLLFlBQVksYUFBYSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxN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Q2xDO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLCtDQUFNO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QiwyREFBSztBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9DQUFvQywyREFBSztBQUN6QztBQUNBO0FBQ0Esb0NBQW9DLDBEQUFJO0FBQ3hDO0FBQ0E7QUFDQSxvQ0FBb0MsNkRBQU87QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZSIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9DU1Mvc3R5bGUuY3NzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL0NTUy9zdHlsZS5jc3M/YTFjZiIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9wYWdlcy9hYm91dC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvcGFnZXMvY29udGFjdC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvcGFnZXMvbWVudS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9R2ErTWFhbWxpJmRpc3BsYXk9c3dhcCk7XCJdKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUxvYnN0ZXImZGlzcGxheT1zd2FwKTtcIl0pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Q2F2ZWF0OndnaHRANDAwLi43MDAmZGlzcGxheT1zd2FwKTtcIl0pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9WWFub25lK0thZmZlZXNhdHo6d2dodEAyMDAuLjcwMCZkaXNwbGF5PXN3YXApO1wiXSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYGh0bWwsXHJcbmJvZHkge1xyXG5cdHBhZGRpbmc6IDBweDtcclxuXHRtYXJnaW46IDBweDtcclxuXHRoZWlnaHQ6IDEwMCU7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcblx0LyogZm9udC1mYW1pbHk6IFwiQ2F2ZWF0XCIsIGN1cnNpdmU7ICovXHJcblx0Zm9udC1mYW1pbHk6IFwiWWFub25lIEthZmZlZXNhdHpcIiwgc2Fucy1zZXJpZjtcclxuXHRmb250LXNpemU6IDEuMTVyZW07XHJcbn1cclxuXHJcbmhlYWRlciA+IGRpdiB7XHJcblx0Zm9udC1mYW1pbHk6IFwiR2EgTWFhbWxpXCIsIHNhbnMtc2VyaWY7XHJcblx0Zm9udC1zaXplOiA2MHB4O1xyXG59XHJcblxyXG4jY29udGVudCB7XHJcblx0ZGlzcGxheTogZmxleDtcclxuXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cdGJhY2tncm91bmQtY29sb3I6ICM0NDQ7XHJcbn1cclxuLmNvbnRlbnRCb2R5IHtcclxuXHRkaXNwbGF5OiBmbGV4O1xyXG5cdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHRoZWlnaHQ6IGF1dG87XHJcblx0ZmxleDogMTtcclxuXHRwYWRkaW5nOiAxMHB4IDIwcHggMjBweDtcclxufVxyXG4uY29udGVudEJvZHkgPiBoMSB7XHJcblx0Zm9udC1zaXplOiA0cmVtO1xyXG5cdGZvbnQtZmFtaWx5OiBcIkxvYnN0ZXJcIiwgc2Fucy1zZXJpZjtcclxuXHRtYXJnaW46IDBweDtcclxuXHR0ZXh0LXNoYWRvdzogMHB4IDVweCAxcHggYmx1ZSwgNXB4IDBweCAxcHggdmlvbGV0LCAtNXB4IDBweCAxcHggb3JhbmdlLFxyXG5cdFx0MHB4IC01cHggMXB4IHJlZDtcclxufVxyXG4uY29udGVudEJvZHkgPiBkaXYge1xyXG5cdGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KTtcclxuXHRmbGV4OiAxO1xyXG5cdHdpZHRoOiBjYWxjKDEwMCUgLSAxNXB4KTtcclxuXHRkaXNwbGF5OiBmbGV4O1xyXG5cdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcblx0LyoganVzdGlmeS1jb250ZW50OiBjZW50ZXI7ICovXHJcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHRwYWRkaW5nOiAwcHggMTVweDtcclxuXHRjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi8qIEFib3V0ICovXHJcbi5hYm91dCB7XHJcblx0ZGlzcGxheTogZmxleDtcclxuXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblx0d2lkdGg6IGZpdC1jb250ZW50O1xyXG59XHJcbi5vZmZlcnMge1xyXG5cdGxpc3Qtc3R5bGU6IG5vbmU7XHJcblx0ZGlzcGxheTogZmxleDtcclxuXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cdGFsaWduLWl0ZW1zOiBzdGFydDtcclxuXHQvKiBhbGlnbi1pdGVtczogc3RhcnQ7ICovXHJcblx0Z2FwOiAxMHB4O1xyXG59XHJcblxyXG4ub2ZmZXJzID4gbGkge1xyXG5cdHBhZGRpbmc6IDVweCAxMHB4O1xyXG5cdGJvcmRlci1yYWRpdXM6IDVweDtcclxuXHRmb250LXNpemU6IDMwcHg7XHJcblx0LyogdGV4dC1zaGFkb3c6IDRweCA0cHggMTBweCBibHVlOyAqL1xyXG5cdGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLmltYWdlR2FsIHtcclxuXHRkaXNwbGF5OiBmbGV4O1xyXG5cdHdpZHRoOiBmaXQtY29udGVudDtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcclxuXHR0cmFuc2Zvcm0tb3JpZ2luOiB0b3A7XHJcblx0bWFyZ2luOiAwcHggNDBweDtcclxuXHRwYWRkaW5nOiAxMHB4IDIwcHg7XHJcblx0Ym94LXNoYWRvdzogMnB4IDJweCA2cHggYmx1ZTtcclxuXHRib3JkZXItcmFkaXVzOiAxMHB4O1xyXG5cdHRyYW5zZm9ybTogc2NhbGVZKDEsIDEpO1xyXG5cdHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjhzO1xyXG59XHJcbi5pbWFnZUdhbC50cmFuc2l0aW9uaW5nIHtcclxuXHR0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zcztcclxuXHR0cmFuc2Zvcm06IHNjYWxlKDAsIDEpO1xyXG59XHJcbi5pbWFnZUdhbC5pbmFjdGl2ZSB7XHJcblx0b3BhY2l0eTogMDtcclxuXHR0cmFuc2Zvcm06IHNjYWxlKDAuMDEsIDEpO1xyXG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxufVxyXG4uaW1hZ2VHYWwgPiBpbWcge1xyXG5cdHdpZHRoOiBjbGFtcCgzNDBweCwgNDAlLCA2MDBweCk7XHJcblx0aGVpZ2h0OiBhdXRvO1xyXG5cdG1heC1oZWlnaHQ6IDM0MHB4O1xyXG5cdGJvcmRlci1yYWRpdXM6IDBweCAzMHB4IDMwcHggMHB4O1xyXG5cdGJveC1zaGFkb3c6IDJweCAwcHggNXB4IHZpb2xldDtcclxufVxyXG4uaW1hZ2VHYWwgPiBkaXYge1xyXG5cdG1pbi13aWR0aDogMzQwcHg7XHJcbn1cclxuXHJcbi5hYm91dENvbnRlbnQge1xyXG5cdGRpc3BsYXk6IGZsZXg7XHJcblx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuXHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHRwYWRkaW5nOiA1cHg7XHJcbn1cclxuLmFib3V0Q29udGVudCA+IGgxIHtcclxuXHR0ZXh0LXNoYWRvdzogNXB4IDVweCAxMHB4IHJlZCwgLTVweCAtNXB4IDEwcHggcmVkO1xyXG5cdGZvbnQtc2l6ZTogNDBweDtcclxufVxyXG4uYWJvdXRDb250ZW50ID4gZGl2IHtcclxuXHR0ZXh0LXNoYWRvdzogNXB4IDVweCAxMHB4IHZpb2xldDtcclxuXHRmb250LXNpemU6IGNhbGMoMS41dncgKyAxMHB4KTtcclxufVxyXG5cclxuQG1lZGlhIC8qIChtaW4td2lkdGg6IDc2MHB4KSBhbmQgKi8obWF4LXdpZHRoOiA5MDBweCkge1xyXG5cdC5pbWFnZUdhbCB7XHJcblx0XHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHR9XHJcbn1cclxuQG1lZGlhIChtYXgtd2lkdGg6IDc2MHB4KSB7XHJcblx0LmFib3V0ID4gaDIge1xyXG5cdFx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG5cdFx0Zm9udC1zaXplOiBjYWxjKDZ2dyArIDVweCk7XHJcblx0XHRtYXgtd2lkdGg6IDM2MHB4O1xyXG5cdFx0bWFyZ2luOiAyMHB4IDBweDtcclxuXHR9XHJcblx0LmltYWdlR2FsIHtcclxuXHRcdG1hcmdpbjogMHB4O1xyXG5cdFx0cGFkZGluZzogMjBweCAwcHg7XHJcblx0XHRtaW4td2lkdGg6IDM2MHB4O1xyXG5cdFx0d2lkdGg6IDEwMCU7XHJcblx0fVxyXG5cdC5pbWFnZUdhbCA+IGltZyB7XHJcblx0XHRib3JkZXItcmFkaXVzOiAwcHggMHB4IDMwcHggMzBweDtcclxuXHRcdGJveC1zaGFkb3c6IDBweCAycHggNXB4IHZpb2xldDtcclxuXHR9XHJcblx0LmNvbnRlbnRCb2R5ID4gZGl2IHtcclxuXHRcdHdpZHRoOiAxMDB2dyAhaW1wb3J0YW50O1xyXG5cdFx0cGFkZGluZzogMHB4O1xyXG5cdFx0bWFyZ2luOiAwcHg7XHJcblx0fVxyXG5cdC5hYm91dENvbnRlbnQgPiBkaXYge1xyXG5cdFx0Zm9udC1zaXplOiAyNHB4O1xyXG5cdH1cclxufVxyXG5cclxuLyogTWVudSBTdHlsaW5nICovXHJcbi5tZW51IHtcclxuXHRwYWRkaW5nOiAzMHB4IDQwcHggIWltcG9ydGFudDtcclxuXHR3aWR0aDogY2FsYygxMDAlIC0gODBweCkgIWltcG9ydGFudDtcclxufVxyXG4ubWVudSA+IGRpdiB7XHJcblx0d2lkdGg6IDEwMCU7XHJcblx0ZGlzcGxheTogZ3JpZDtcclxuXHRncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpbGwsIG1pbm1heCgzMDBweCwgMWZyKSk7XHJcblx0Z2FwOiAzMHB4O1xyXG5cdGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcbi5tZW51Y2FyZCB7XHJcblx0ZGlzcGxheTogZmxleDtcclxuXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0Ym9yZGVyOiAxcHggc29saWQgYmx1ZTtcclxuXHQvKiBtYXgtd2lkdGg6IDQ1MHB4OyAqL1xyXG59XHJcbi5tZW51Y2FyZDpob3ZlciB7XHJcblx0Ym94LXNoYWRvdzogNXB4IDVweCAxMHB4IGJsdWU7XHJcbn1cclxuXHJcbi8qIENvbnRhY3Qgc3R5bGluZyAqL1xyXG4uY29udGFjdCB7XHJcblx0Y29sb3I6IHdoaXRlO1xyXG5cdGRpc3BsYXk6IGZsZXg7XHJcblx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuXHRnYXA6IDEwcHg7XHJcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLmNvbnRhY3RjYXJkIHtcclxuXHRmbGV4OiAxO1xyXG5cdGRpc3BsYXk6IGZsZXg7XHJcblx0bWFyZ2luOiAyMHB4O1xyXG5cdHBhZGRpbmc6IDIwcHg7XHJcblx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG5cdGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4zKTtcclxuXHRib3JkZXItcmFkaXVzOiAyMHB4O1xyXG5cdGJveC1zaGFkb3c6IDBweCAwcHggNXB4IDVweCBjeWFuO1xyXG5cdGdhcDogMjBweDtcclxuXHRmb250LXNpemU6IDJyZW07XHJcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG4uY3JlZGVudGlhbHMge1xyXG5cdHdpZHRoOiA0MDBweDtcclxufVxyXG4uY29udGFjdEltZyB7XHJcblx0d2lkdGg6IDIwMHB4O1xyXG5cdGhlaWdodDogMjAwcHg7XHJcblx0Ym9yZGVyLXJhZGl1czogMjBweDtcclxufVxyXG5cclxuLyogSGVhZGVyIEZvb3RlciAqL1xyXG5oZWFkZXIsXHJcbmZvb3RlciB7XHJcblx0ZGlzcGxheTogZmxleDtcclxuXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG59XHJcbmhlYWRlciA+IGRpdixcclxuZm9vdGVyIHtcclxuXHRwb2ludGVyLWV2ZW50czogbm9uZTtcclxuXHRmb250LXNpemU6IDUwcHg7XHJcblx0ZGlzcGxheTogZmxleDtcclxuXHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cdGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xyXG5cdGNvbG9yOiB3aGl0ZTtcclxuXHRoZWlnaHQ6IDgwcHg7XHJcblx0Z2FwOiAyMHB4O1xyXG59XHJcbmhlYWRlciA+IGRpdiA+IGltZyB7XHJcblx0cG9pbnRlci1ldmVudHM6IG5vbmU7XHJcblx0dXNlci1zZWxlY3Q6IG5vbmU7XHJcbn1cclxuI2J1dHRvbnMge1xyXG5cdG1hcmdpbjogMHB4O1xyXG5cdHBhZGRpbmc6IDBweDtcclxuXHRsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XHJcblx0ZGlzcGxheTogZmxleDtcclxuXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuXHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdGdhcDogNXB4O1xyXG5cdGZvbnQtc2l6ZTogMzVweDtcclxuXHRmb250LWZhbWlseTogXCJMb2JzdGVyXCIsIHNhbnMtc2VyaWY7XHJcblx0cGFkZGluZzogMHB4IDEwcHg7XHJcbn1cclxuI2J1dHRvbnMgbGkge1xyXG5cdGRpc3BsYXk6IGZsZXg7XHJcblx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHRjb2xvcjogd2hpdGU7XHJcblx0bWFyZ2luOiAwcHg7XHJcblx0cGFkZGluZzogMHB4O1xyXG5cdGJhY2tncm91bmQtY29sb3I6IGJsdWU7XHJcblx0ZmxleDogMTtcclxuXHRoZWlnaHQ6IDYwcHg7XHJcblx0Y3Vyc29yOiBkZWZhdWx0O1xyXG5cdGJvcmRlci1yYWRpdXM6IDBweCAwcHggMjBweCAyMHB4O1xyXG5cdHRleHQtc2hhZG93OiA0cHggNHB4IGJsYWNrO1xyXG5cdGJveC1zaGFkb3c6IG5vbmU7XHJcblx0dHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAxMHMsIGJveC1zaGFkb3cgMXM7XHJcbn1cclxuI2J1dHRvbnMgbGk6aG92ZXIge1xyXG5cdHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMXM7XHJcblx0dGV4dC1zaGFkb3c6IDRweCA0cHggdmlvbGV0O1xyXG5cdGJhY2tncm91bmQtY29sb3I6ICMyNDE1NzE7XHJcbn1cclxudWwgbGk6aG92ZXIge1xyXG5cdHotaW5kZXg6IDE7XHJcblx0Ym94LXNoYWRvdzogMHB4IDBweCAxMHB4IDEwcHggY3lhbiAhaW1wb3J0YW50O1xyXG5cdGJhY2tncm91bmQtY29sb3I6IHZpb2xldDtcclxuXHR0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDJzO1xyXG59XHJcbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL0NTUy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBS0E7O0NBRUMsWUFBWTtDQUNaLFdBQVc7Q0FDWCxZQUFZO0NBQ1osdUJBQXVCO0NBQ3ZCLG9DQUFvQztDQUNwQyw0Q0FBNEM7Q0FDNUMsa0JBQWtCO0FBQ25COztBQUVBO0NBQ0Msb0NBQW9DO0NBQ3BDLGVBQWU7QUFDaEI7O0FBRUE7Q0FDQyxhQUFhO0NBQ2Isc0JBQXNCO0NBQ3RCLHNCQUFzQjtBQUN2QjtBQUNBO0NBQ0MsYUFBYTtDQUNiLHNCQUFzQjtDQUN0QixtQkFBbUI7Q0FDbkIsWUFBWTtDQUNaLE9BQU87Q0FDUCx1QkFBdUI7QUFDeEI7QUFDQTtDQUNDLGVBQWU7Q0FDZixrQ0FBa0M7Q0FDbEMsV0FBVztDQUNYO2tCQUNpQjtBQUNsQjtBQUNBO0NBQ0Msb0NBQW9DO0NBQ3BDLE9BQU87Q0FDUCx3QkFB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bUJBQW1CO0NBQ25CLFFBQVE7Q0FDUixlQUFlO0NBQ2Ysa0NBQWtDO0NBQ2xDLGlCQUFpQjtBQUNsQjtBQUNBO0NBQ0MsYUFBYTtDQUNiLHVCQUF1QjtDQUN2QixtQkFBbUI7Q0FDbkIsWUFBWTtDQUNaLFdBQVc7Q0FDWCxZQUFZO0NBQ1osc0JBQXNCO0NBQ3RCLE9BQU87Q0FDUCxZQUFZO0NBQ1osZUFBZTtDQUNmLGdDQUFnQztDQUNoQywwQkFBMEI7Q0FDMUIsZ0JBQWdCO0NBQ2hCLCtDQUErQztBQUNoRDtBQUNBO0NBQ0MsK0JBQStCO0NBQy9CLDJCQUEyQjtDQUMzQix5QkFBeUI7QUFDMUI7QUFDQTtDQUNDLFVBQVU7Q0FDViw2Q0FBNkM7Q0FDN0Msd0JBQXdCO0NBQ3hCLCtCQUErQjtBQUNoQ1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0IHVybChcXFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1HYStNYWFtbGkmZGlzcGxheT1zd2FwXFxcIik7XFxyXFxuQGltcG9ydCB1cmwoXFxcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9TG9ic3RlciZkaXNwbGF5PXN3YXBcXFwiKTtcXHJcXG5AaW1wb3J0IHVybChcXFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1DYXZlYXQ6d2dodEA0MDAuLjcwMCZkaXNwbGF5PXN3YXBcXFwiKTtcXHJcXG5AaW1wb3J0IHVybChcXFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1ZYW5vbmUrS2FmZmVlc2F0ejp3Z2h0QDIwMC4uNzAwJmRpc3BsYXk9c3dhcFxcXCIpO1xcclxcblxcclxcbmh0bWwsXFxyXFxuYm9keSB7XFxyXFxuXFx0cGFkZGluZzogMHB4O1xcclxcblxcdG1hcmdpbjogMHB4O1xcclxcblxcdGhlaWdodDogMTAwJTtcXHJcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXHJcXG5cXHQvKiBmb250LWZhbWlseTogXFxcIkNhdmVhdFxcXCIsIGN1cnNpdmU7ICovXFxyXFxuXFx0Zm9udC1mYW1pbHk6IFxcXCJZYW5vbmUgS2FmZmVlc2F0elxcXCIsIHNhbnMtc2VyaWY7XFxyXFxuXFx0Zm9udC1zaXplOiAxLjE1cmVtO1xcclxcbn1cXHJcXG5cXHJcXG5oZWFkZXIgPiBkaXYge1xcclxcblxcdGZvbnQtZmFtaWx5OiBcXFwiR2EgTWFhbWxpXFxcIiwgc2Fucy1zZXJpZjtcXHJcXG5cXHRmb250LXNpemU6IDYwcHg7XFxyXFxufVxcclxcblxcclxcbiNjb250ZW50IHtcXHJcXG5cXHRkaXNwbGF5OiBmbGV4O1xcclxcblxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuXFx0YmFja2dyb3VuZC1jb2xvcjogIzQ0NDtcXHJcXG59XFxyXFxuLmNvbnRlbnRCb2R5IHtcXHJcXG5cXHRkaXNwbGF5OiBmbGV4O1xcclxcblxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG5cXHRoZWlnaHQ6IGF1dG87XFxyXFxuXFx0ZmxleDogMTtcXHJcXG5cXHRwYWRkaW5nOiAxMHB4IDIwcHggMjBweDtcXHJcXG59XFxyXFxuLmNvbnRlbnRCb2R5ID4gaDEge1xcclxcblxcdGZvbnQtc2l6ZTogNHJlbTtcXHJcXG5cXHRmb250LWZhbWlseTogXFxcIkxvYnN0ZXJcXFwiLCBzYW5zLXNlcmlmO1xcclxcblxcdG1hcmdpbjogMHB4O1xcclxcblxcdHRleHQtc2hhZG93OiAwcHggNXB4IDFweCBibHVlLCA1cHggMHB4IDFweCB2aW9sZXQsIC01cHggMHB4IDFweCBvcmFuZ2UsXFxyXFxuXFx0XFx0MHB4IC01cHggMXB4IHJlZDtcXHJcXG59XFxyXFxuLmNvbnRlbnRCb2R5ID4gZGl2IHtcXHJcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNSk7XFxyXFxuXFx0ZmxleDogMTtcXHJcXG5cXHR3aWR0aDogY2FsYygxMDAlIC0gMTVweCk7XFxyXFxuXFx0ZGlzcGxheTogZmxleDtcXHJcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcblxcdC8qIGp1c3RpZnktY29udGVudDogY2VudGVyOyAqL1xcclxcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuXFx0cGFkZGluZzogMHB4IDE1cHg7XFxyXFxuXFx0Y29sb3I6IHdoaXRlO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBBYm91dCAqL1xcclxcbi5hYm91dCB7XFxyXFxuXFx0ZGlzcGxheTogZmxleDtcXHJcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuXFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuXFx0d2lkdGg6IGZpdC1jb250ZW50O1xcclxcbn1cXHJcXG4ub2ZmZXJzIHtcXHJcXG5cXHRsaXN0LXN0eWxlOiBub25lO1xcclxcblxcdGRpc3BsYXk6IGZsZXg7XFxyXFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG5cXHRhbGlnbi1pdGVtczogc3RhcnQ7XFxyXFxuXFx0LyogYWxpZ24taXRlbXM6IHN0YXJ0OyAqL1xcclxcblxcdGdhcDogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLm9mZmVycyA+IGxpIHtcXHJcXG5cXHRwYWRkaW5nOiA1cHggMTBweDtcXHJcXG5cXHRib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuXFx0Zm9udC1zaXplOiAzMHB4O1xcclxcblxcdC8qIHRleHQtc2hhZG93OiA0cHggNHB4IDEwcHggYmx1ZTsgKi9cXHJcXG5cXHRjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5pbWFnZUdhbCB7XFxyXFxuXFx0ZGlzcGxheTogZmxleDtcXHJcXG5cXHR3aWR0aDogZml0LWNvbnRlbnQ7XFxyXFxuXFx0YmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxyXFxuXFx0dHJhbnNmb3JtLW9yaWdpbjogdG9wO1xcclxcblxcdG1hcmdpbjogMHB4IDQwcHg7XFxyXFxuXFx0cGFkZGluZzogMTBweCAyMHB4O1xcclxcblxcdGJveC1zaGFkb3c6IDJweCAycHggNnB4IGJsdWU7XFxyXFxuXFx0Ym9yZGVyLXJhZGl1czogMTBweDtcXHJcXG5cXHR0cmFuc2Zvcm06IHNjYWxlWSgxLCAxKTtcXHJcXG5cXHR0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC44cztcXHJcXG59XFxyXFxuLmltYWdlR2FsLnRyYW5zaXRpb25pbmcge1xcclxcblxcdHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzO1xcclxcblxcdHRyYW5zZm9ybTogc2NhbGUoMCwgMSk7XFxyXFxufVxcclxcbi5pbWFnZUdhbC5pbmFjdGl2ZSB7XFxyXFxuXFx0b3BhY2l0eTogMDtcXHJcXG5cXHR0cmFuc2Zvcm06IHNjYWxlKDAuMDEsIDEpO1xcclxcblxcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG59XFxyXFxuLmltYWdlR2FsID4gaW1nIHtcXHJcXG5cXHR3aWR0aDogY2xhbXAoMzQwcHgsIDQwJSwgNjAwcHgpO1xcclxcblxcdGhlaWdodDogYXV0bztcXHJcXG5cXHRtYXgtaGVpZ2h0OiAzNDBweDtcXHJcXG5cXHRib3JkZXItcmFkaXVzOiAwcHggMzBweCAzMHB4IDBweDtcXHJcXG5cXHRib3gtc2hhZG93OiAycHggMHB4IDVweCB2aW9sZXQ7XFxyXFxufVxcclxcbi5pbWFnZUdhbCA+IGRpdiB7XFxyXFxuXFx0bWluLXdpZHRoOiAzNDBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmFib3V0Q29udGVudCB7XFxyXFxuXFx0ZGlzcGxheTogZmxleDtcXHJcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuXFx0dGV4dC1hbGlnbjogY2VudGVyO1xcclxcblxcdHBhZGRpbmc6IDVweDtcXHJcXG59XFxyXFxuLmFib3V0Q29udGVudCA+IGgxIHtcXHJcXG5cXHR0ZXh0LXNoYWRvdzogNXB4IDVweCAxMHB4IHJlZCwgLTVweCAtNXB4IDEwcHggcmVkO1xcclxcblxcdGZvbnQtc2l6ZTogNDBweDtcXHJcXG59XFxyXFxuLmFib3V0Q29udGVudCA+IGRpdiB7XFxyXFxuXFx0dGV4dC1zaGFkb3c6IDVweCA1cHggMTBweCB2aW9sZXQ7XFxyXFxuXFx0Zm9udC1zaXplOiBjYWxjKDEuNXZ3ICsgMTBweCk7XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSAvKiAobWluLXdpZHRoOiA3NjBweCkgYW5kICovKG1heC13aWR0aDogOTAwcHgpIHtcXHJcXG5cXHQuaW1hZ2VHYWwge1xcclxcblxcdFxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuXFx0XFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG5cXHR9XFxyXFxufVxcclxcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjBweCkge1xcclxcblxcdC5hYm91dCA+IGgyIHtcXHJcXG5cXHRcXHR0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuXFx0XFx0Zm9udC1zaXplOiBjYWxjKDZ2dyArIDVweCk7XFxyXFxuXFx0XFx0bWF4LXdpZHRoOiAzNjBweDtcXHJcXG5cXHRcXHRtYXJnaW46IDIwcHggMHB4O1xcclxcblxcdH1cXHJcXG5cXHQuaW1hZ2VHYWwge1xcclxcblxcdFxcdG1hcmdpbjogMHB4O1xcclxcblxcdFxcdHBhZGRpbmc6IDIwcHggMHB4O1xcclxcblxcdFxcdG1pbi13aWR0aDogMzYwcHg7XFxyXFxuXFx0XFx0d2lkdGg6IDEwMCU7XFxyXFxuXFx0fVxcclxcblxcdC5pbWFnZUdhbCA+IGltZyB7XFxyXFxuXFx0XFx0Ym9yZGVyLXJhZGl1czogMHB4IDBweCAzMHB4IDMwcHg7XFxyXFxuXFx0XFx0Ym94LXNoYWRvdzogMHB4IDJweCA1cHggdmlvbGV0O1xcclxcblxcdH1cXHJcXG5cXHQuY29udGVudEJvZHkgPiBkaXYge1xcclxcblxcdFxcdHdpZHRoOiAxMDB2dyAhaW1wb3J0YW50O1xcclxcblxcdFxcdHBhZGRpbmc6IDBweDtcXHJcXG5cXHRcXHRtYXJnaW46IDBweDtcXHJcXG5cXHR9XFxyXFxuXFx0LmFib3V0Q29udGVudCA+IGRpdiB7XFxyXFxuXFx0XFx0Zm9udC1zaXplOiAyNHB4O1xcclxcblxcdH1cXHJcXG59XFxyXFxuXFxyXFxuLyogTWVudSBTdHlsaW5nICovXFxyXFxuLm1lbnUge1xcclxcblxcdHBhZGRpbmc6IDMwcHggNDBweCAhaW1wb3J0YW50O1xcclxcblxcdHdpZHRoOiBjYWxjKDEwMCUgLSA4MHB4KSAhaW1wb3J0YW50O1xcclxcbn1cXHJcXG4ubWVudSA+IGRpdiB7XFxyXFxuXFx0d2lkdGg6IDEwMCU7XFxyXFxuXFx0ZGlzcGxheTogZ3JpZDtcXHJcXG5cXHRncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpbGwsIG1pbm1heCgzMDBweCwgMWZyKSk7XFxyXFxuXFx0Z2FwOiAzMHB4O1xcclxcblxcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbn1cXHJcXG4ubWVudWNhcmQge1xcclxcblxcdGRpc3BsYXk6IGZsZXg7XFxyXFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcclxcblxcdGJvcmRlcjogMXB4IHNvbGlkIGJsdWU7XFxyXFxuXFx0LyogbWF4LXdpZHRoOiA0NTBweDsgKi9cXHJcXG59XFxyXFxuLm1lbnVjYXJkOmhvdmVyIHtcXHJcXG5cXHRib3gtc2hhZG93OiA1cHggNXB4IDEwcHggYmx1ZTtcXHJcXG59XFxyXFxuXFxyXFxuLyogQ29udGFjdCBzdHlsaW5nICovXFxyXFxuLmNvbnRhY3Qge1xcclxcblxcdGNvbG9yOiB3aGl0ZTtcXHJcXG5cXHRkaXNwbGF5OiBmbGV4O1xcclxcblxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuXFx0Z2FwOiAxMHB4O1xcclxcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5jb250YWN0Y2FyZCB7XFxyXFxuXFx0ZmxleDogMTtcXHJcXG5cXHRkaXNwbGF5OiBmbGV4O1xcclxcblxcdG1hcmdpbjogMjBweDtcXHJcXG5cXHRwYWRkaW5nOiAyMHB4O1xcclxcblxcdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMyk7XFxyXFxuXFx0Ym9yZGVyLXJhZGl1czogMjBweDtcXHJcXG5cXHRib3gtc2hhZG93OiAwcHggMHB4IDVweCA1cHggY3lhbjtcXHJcXG5cXHRnYXA6IDIwcHg7XFxyXFxuXFx0Zm9udC1zaXplOiAycmVtO1xcclxcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcbi5jcmVkZW50aWFscyB7XFxyXFxuXFx0d2lkdGg6IDQwMHB4O1xcclxcbn1cXHJcXG4uY29udGFjdEltZyB7XFxyXFxuXFx0d2lkdGg6IDIwMHB4O1xcclxcblxcdGhlaWdodDogMjAwcHg7XFxyXFxuXFx0Ym9yZGVyLXJhZGl1czogMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuLyogSGVhZGVyIEZvb3RlciAqL1xcclxcbmhlYWRlcixcXHJcXG5mb290ZXIge1xcclxcblxcdGRpc3BsYXk6IGZsZXg7XFxyXFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG59XFxyXFxuaGVhZGVyID4gZGl2LFxcclxcbmZvb3RlciB7XFxyXFxuXFx0cG9pbnRlci1ldmVudHM6IG5vbmU7XFxyXFxuXFx0Zm9udC1zaXplOiA1MHB4O1xcclxcblxcdGRpc3BsYXk6IGZsZXg7XFxyXFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXHJcXG5cXHRjb2xvcjogd2hpdGU7XFxyXFxuXFx0aGVpZ2h0OiA4MHB4O1xcclxcblxcdGdhcDogMjBweDtcXHJcXG59XFxyXFxuaGVhZGVyID4gZGl2ID4gaW1nIHtcXHJcXG5cXHRwb2ludGVyLWV2ZW50czogbm9uZTtcXHJcXG5cXHR1c2VyLXNlbGVjdDogbm9uZTtcXHJcXG59XFxyXFxuI2J1dHRvbnMge1xcclxcblxcdG1hcmdpbjogMHB4O1xcclxcblxcdHBhZGRpbmc6IDBweDtcXHJcXG5cXHRsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxyXFxuXFx0ZGlzcGxheTogZmxleDtcXHJcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXHJcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcclxcblxcdGdhcDogNXB4O1xcclxcblxcdGZvbnQtc2l6ZTogMzVweDtcXHJcXG5cXHRmb250LWZhbWlseTogXFxcIkxvYnN0ZXJcXFwiLCBzYW5zLXNlcmlmO1xcclxcblxcdHBhZGRpbmc6IDBweCAxMHB4O1xcclxcbn1cXHJcXG4jYnV0dG9ucyBsaSB7XFxyXFxuXFx0ZGlzcGxheTogZmxleDtcXHJcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcclxcblxcdGNvbG9yOiB3aGl0ZTtcXHJcXG5cXHRtYXJnaW46IDBweDtcXHJcXG5cXHRwYWRkaW5nOiAwcHg7XFxyXFxuXFx0YmFja2dyb3VuZC1jb2xvcjogYmx1ZTtcXHJcXG5cXHRmbGV4OiAxO1xcclxcblxcdGhlaWdodDogNjBweDtcXHJcXG5cXHRjdXJzb3I6IGRlZmF1bHQ7XFxyXFxuXFx0Ym9yZGVyLXJhZGl1czogMHB4IDBweCAyMHB4IDIwcHg7XFxyXFxuXFx0dGV4dC1zaGFkb3c6IDRweCA0cHggYmxhY2s7XFxyXFxuXFx0Ym94LXNoYWRvdzogbm9uZTtcXHJcXG5cXHR0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDEwcywgYm94LXNoYWRvdyAxcztcXHJcXG59XFxyXFxuI2J1dHRvbnMgbGk6aG92ZXIge1xcclxcblxcdHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMXM7XFxyXFxuXFx0dGV4dC1zaGFkb3c6IDRweCA0cHggdmlvbGV0O1xcclxcblxcdGJhY2tncm91bmQtY29sb3I6ICMyNDE1NzE7XFxyXFxufVxcclxcbnVsIGxpOmhvdmVyIHtcXHJcXG5cXHR6LWluZGV4OiAxO1xcclxcblxcdGJveC1zaGFkb3c6IDBweCAwcHggMTBweCAxMHB4IGN5YW4gIWltcG9ydGFudDtcXHJcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB2aW9sZXQ7XFxyXFxuXFx0dHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAycztcXHJcXG59XFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCBcIi4uL0NTUy9zdHlsZS5jc3NcIjtcclxuaW1wb3J0IGltYWdlMSBmcm9tIFwiLi4vSW1hZ2VzL0Fib3V0L2luZG9vcnMtaW1hZ2UuanBnXCI7XHJcbmltcG9ydCBpbWFnZTIgZnJvbSBcIi4uL0ltYWdlcy9BYm91dC9vdXRkb29ycy1pbWFnZS5qcGdcIjtcclxuaW1wb3J0IGltYWdlMyBmcm9tIFwiLi4vSW1hZ2VzL0Fib3V0L2Nvb2tpbmctaW1hZ2UuanBnXCI7XHJcblxyXG5sZXQgY3VycmVudEluZGV4ID0gMDtcclxubGV0IGludGVydmFsSWQ7XHJcbi8vZnVuY3Rpb24gbWFpbkNvbnRlbnRcclxuZnVuY3Rpb24gaW1hZ2UobGluaykge1xyXG5cdGxldCB0ZW1wZWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcclxuXHR0ZW1wZWxlLnNyYyA9IGxpbms7XHJcblx0cmV0dXJuIHRlbXBlbGU7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGltYWdlR2FsbGVyeVRleHQodGl0bGUsIHRleHQpIHtcclxuXHRsZXQgdGVtcGVsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcblx0dGVtcGVsZS5jbGFzc0xpc3QuYWRkKFwiYWJvdXRDb250ZW50XCIpO1xyXG5cdGxldCBoMVRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xyXG5cdGgxVGl0bGUudGV4dENvbnRlbnQgPSB0aXRsZTtcclxuXHR0ZW1wZWxlLmFwcGVuZENoaWxkKGgxVGl0bGUpO1xyXG5cdGxldCB0ZXh0Q29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcblx0dGV4dENvbnRlbnQudGV4dENvbnRlbnQgPSB0ZXh0O1xyXG5cdHRlbXBlbGUuYXBwZW5kQ2hpbGQodGV4dENvbnRlbnQpO1xyXG5cclxuXHRyZXR1cm4gdGVtcGVsZTtcclxufVxyXG5cclxuZnVuY3Rpb24gaW1hZ2VHYWxsZXJ5T2JqZWN0KGxpbmssIHRpdGxlLCB0ZXh0LCBhY3RpdmUgPSB0cnVlKSB7XHJcblx0bGV0IHRlbXBlbGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG5cclxuXHR0ZW1wZWxlLmNsYXNzTGlzdC5hZGQoXCJpbWFnZUdhbFwiKTtcclxuXHRhY3RpdmUgPT0gdHJ1ZVxyXG5cdFx0PyB0ZW1wZWxlLmNsYXNzTGlzdC50b2dnbGUoXCJpbmFjdGl2ZVwiLCAhYWN0aXZlKVxyXG5cdFx0OiB0ZW1wZWxlLmNsYXNzTGlzdC50b2dnbGUoXCJpbmFjdGl2ZVwiLCAhYWN0aXZlKTtcclxuXHJcblx0dGVtcGVsZS5hcHBlbmRDaGlsZChpbWFnZShsaW5rKSk7XHJcblx0dGVtcGVsZS5hcHBlbmRDaGlsZChpbWFnZUdhbGxlcnlUZXh0KHRpdGxlLCB0ZXh0KSk7XHJcblxyXG5cdHJldHVybiB0ZW1wZWxlO1xyXG59XHJcblxyXG5mdW5jdGlvbiBpbWFnZUdhbGxlcnkoKSB7XHJcblx0bGV0IHRlbXBlbGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG5cdHRlbXBlbGUuYXBwZW5kQ2hpbGQoXHJcblx0XHRpbWFnZUdhbGxlcnlPYmplY3QoXHJcblx0XHRcdGltYWdlMSxcclxuXHRcdFx0XCJJbmRvb3JzIExvdW5nZVwiLFxyXG5cdFx0XHRcIk91ciBiaXN0cm8gb2ZmZXJzIGEgY2FsbSBhbmQgcGxlYXNhbnQgZW52aXJvbm1lbnQsIHBlcmZlY3QgZm9yIHJlbGF4aW5nIGFuZCBlbmpveWluZyBhIG1lYWwuIE9uIHdlZWtlbmRzLCB3ZSBlbmhhbmNlIHRoaXMgZXhwZXJpZW5jZSB3aXRoIGxpdmUgbXVzaWMgcGVyZm9ybWFuY2VzIGJ5IGRpZmZlcmVudCBhbWF0ZXVyIHNpbmdlcnMuIFRoZXNlIHBlcmZvcm1hbmNlcyBzdGFydCBhZnRlciA5OjAwIFBNLCBjcmVhdGluZyBhIGRlbGlnaHRmdWwgYXRtb3NwaGVyZSBmb3Igb3VyIGd1ZXN0cyB0byB1bndpbmQgYW5kIGVuam95IHRoZWlyIGV2ZW5pbmcuIFdoZXRoZXIgeW91J3JlIGxvb2tpbmcgZm9yIGEgcXVpZXQgZGlubmVyIG9yIGEgbmlnaHQgb3V0IHdpdGggZnJpZW5kcywgb3VyIGJpc3RybyBpcyB0aGUgaWRlYWwgcGxhY2UgdG8gYmVcIlxyXG5cdFx0KVxyXG5cdCk7XHJcblx0dGVtcGVsZS5hcHBlbmRDaGlsZChcclxuXHRcdGltYWdlR2FsbGVyeU9iamVjdChcclxuXHRcdFx0aW1hZ2UyLFxyXG5cdFx0XHRcIk91dGRvb3JzIHNwYWNlXCIsXHJcblx0XHRcdFwiQXQgb3VyIGJpc3RybywgeW91IGNhbiBlbmpveSBvdXIgb3V0ZG9vciBzcGFjZSB3aXRoIGJlYXV0aWZ1bCBzY2VuZXJ5IGFuZCBmcmVzaCBhaXIuIEl0J3MgdGhlIHBlcmZlY3QgcGxhY2UgZm9yIGEgcm9tYW50aWMgZGlubmVyIG9yIGp1c3QgdG8gcmVsYXggYW5kIGVuam95IHRoZSBvdXRkb29ycy4gUGljdHVyZSB5b3Vyc2VsZiBkaW5pbmcgb3V0c2lkZSwgc3Vycm91bmRlZCBieSBuYXR1cmUsIHdoaWxlIHlvdSBlbmpveSBvdXIgZGVsaWNpb3VzIGZvb2QgYW5kIGRyaW5rcy4gQ29tZSBzZWUgd2h5IG91ciBiaXN0cm8gaXMgYSBncmVhdCBzcG90IHRvIHVud2luZCBhbmQgY29ubmVjdCB3aXRoIG90aGVycyBpbiBhIGxvdmVseSBvdXRkb29yIHNldHRpbmcuXCIsXHJcblx0XHRcdGZhbHNlXHJcblx0XHQpXHJcblx0KTtcclxuXHR0ZW1wZWxlLmFwcGVuZENoaWxkKFxyXG5cdFx0aW1hZ2VHYWxsZXJ5T2JqZWN0KFxyXG5cdFx0XHRpbWFnZTMsXHJcblx0XHRcdFwiS2l0Y2hlblwiLFxyXG5cdFx0XHRcIkF0IG91ciBiaXN0cm8sIG91ciBiaWdnZXN0IHNlbGxpbmcgcG9pbnQgaXMgb3VyIGZvb2QuIE91ciBleHBlcmllbmNlZCBjaGVmcyB0YWtlIHByaWRlIGluIHByZXBhcmluZyB0aGUgYmVzdCBkaXNoZXMgZm9yIHlvdSBpbiBhIGNsZWFuIGFuZCB3ZWxjb21pbmcgZW52aXJvbm1lbnQuIEVhY2ggbWVhbCBpcyBjcmFmdGVkIHdpdGggY2FyZSBhbmQgYXR0ZW50aW9uIHRvIGRldGFpbCwgZW5zdXJpbmcgdGhhdCBldmVyeSBiaXRlIGlzIGRlbGljaW91cy4gT3VyIG1lbnUgZmVhdHVyZXMgYSB2YXJpZXR5IG9mIG9wdGlvbnMsIGFsbCBtYWRlIGZyb20gaGlnaC1xdWFsaXR5IGluZ3JlZGllbnRzLiBXaGV0aGVyIHlvdSdyZSBoZXJlIGZvciBhIHF1aWNrIGx1bmNoIG9yIGEgc3BlY2lhbCBkaW5uZXIsIHlvdSdsbCBmaW5kIHNvbWV0aGluZyB0byBsb3ZlLiBDb21lIGFuZCBleHBlcmllbmNlIHRoZSBleGNlcHRpb25hbCBmb29kIGFuZCB3YXJtIGF0bW9zcGhlcmUgdGhhdCBtYWtlIG91ciBiaXN0cm8gYSBmYXZvcml0ZSBzcG90IGZvciBtYW55LlwiLFxyXG5cdFx0XHRmYWxzZVxyXG5cdFx0KVxyXG5cdCk7XHJcblxyXG5cdHJldHVybiB0ZW1wZWxlO1xyXG59XHJcblxyXG5mdW5jdGlvbiBvZmZlckl0ZW0odGV4dCwgY29sb3IpIHtcclxuXHRsZXQgb2ZmZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XHJcblx0b2ZmZXIudGV4dENvbnRlbnQgPSB0ZXh0O1xyXG5cdG9mZmVyLnN0eWxlLnRleHRTaGFkb3cgPSBcIjRweCA0cHggMTVweCBcIiArIGNvbG9yO1xyXG5cdHJldHVybiBvZmZlcjtcclxufVxyXG5cclxuZnVuY3Rpb24gd2hhdFdlb2ZmZXIoKSB7XHJcblx0bGV0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcblx0bGV0IHN1YlRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpO1xyXG5cclxuXHRsZXQgdGVtcGVsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiKTtcclxuXHR0ZW1wZWxlLmNsYXNzTGlzdC5hZGQoXCJvZmZlcnNcIik7XHJcblxyXG5cdHRlbXBlbGUuYXBwZW5kQ2hpbGQob2ZmZXJJdGVtKFwiRXZlcnkgd2Vla2VuZDogMjQvN1wiLCBcImJsdWVcIikpO1xyXG5cdHRlbXBlbGUuYXBwZW5kQ2hpbGQob2ZmZXJJdGVtKFwiTWlkbmlnaHQ6IDEyOjAwQU1+MDY6MDBBTVwiLCBcInZpb2xldFwiKSk7XHJcblx0dGVtcGVsZS5hcHBlbmRDaGlsZChvZmZlckl0ZW0oXCJMdW5jaCBTZXRzOiAwMTowMFBNfjAyOjAwUE1cIiwgXCJvcmFuZ2VcIikpO1xyXG5cclxuXHRzdWJUaXRsZS50ZXh0Q29udGVudCA9IFwiV2Ugb2ZmZXIgZGlzY291bnRlZCBzZXRzIG9uOlwiO1xyXG5cclxuXHRjb250YWluZXIuYXBwZW5kQ2hpbGQoc3ViVGl0bGUpO1xyXG5cdGNvbnRhaW5lci5hcHBlbmRDaGlsZCh0ZW1wZWxlKTtcclxuXHJcblx0cmV0dXJuIGNvbnRhaW5lcjtcclxufVxyXG5cclxuZnVuY3Rpb24gYWJvdXQoKSB7XHJcblx0bGV0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG5cdGxldCB0ZW1wZWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuXHRsZXQgaW5uZXJFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuXHRjdXJyZW50SW5kZXggPSAwO1xyXG5cclxuXHRpZiAoaW50ZXJ2YWxJZCkge1xyXG5cdFx0Y2xlYXJJbnRlcnZhbChpbnRlcnZhbElkKTtcclxuXHR9XHJcblx0aW5uZXJFbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJhYm91dFwiKTtcclxuXHRpbm5lckVsZW1lbnQuaW5uZXJIVE1MID0gYDxoMj5GYW1pbHkgRGlubmVyLCBUcmFkaXRpb25hbCBraXRjaGVuLiBXZSBvZmZlciBmb29kIG1hZGUgYnkgZXhwZXJpZW5jZWQgY2hlZnMuPC9oMj5gO1xyXG5cclxuXHRpbm5lckVsZW1lbnQuYXBwZW5kQ2hpbGQoaW1hZ2VHYWxsZXJ5KCkpO1xyXG5cclxuXHRpbm5lckVsZW1lbnQuYXBwZW5kQ2hpbGQod2hhdFdlb2ZmZXIoKSk7XHJcblxyXG5cdGxldCBoMVRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XHJcblx0aDFUZXh0LnRleHRDb250ZW50ID0gXCJBYm91dFwiO1xyXG5cclxuXHR0ZW1wZWxlLmFwcGVuZENoaWxkKGlubmVyRWxlbWVudCk7XHJcblx0ZWxlbWVudC5hcHBlbmRDaGlsZChoMVRleHQpO1xyXG5cdGVsZW1lbnQuYXBwZW5kQ2hpbGQodGVtcGVsZSk7XHJcblx0aW50ZXJ2YWxJZCA9IHNldEludGVydmFsKGFuaW1hdGVHYWxsZXJ5LCAxMDAwMCk7XHJcblx0cmV0dXJuIGVsZW1lbnQ7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFuaW1hdGVHYWxsZXJ5KCkge1xyXG5cdGxldCBhcnJheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuaW1hZ2VHYWxcIik7XHJcblxyXG5cdGFycmF5W2N1cnJlbnRJbmRleF0uY2xhc3NMaXN0LnRvZ2dsZShcInRyYW5zaXRpb25pbmdcIiwgdHJ1ZSk7XHJcblx0c2V0VGltZW91dCgoKSA9PiB7XHJcblx0XHRhcnJheVtjdXJyZW50SW5kZXhdLmNsYXNzTGlzdC50b2dnbGUoXCJpbmFjdGl2ZVwiLCB0cnVlKTtcclxuXHRcdGFycmF5W2N1cnJlbnRJbmRleF0uY2xhc3NMaXN0LnRvZ2dsZShcInRyYW5zaXRpb25pbmdcIiwgZmFsc2UpO1xyXG5cdFx0Y3VycmVudEluZGV4ID0gKGN1cnJlbnRJbmRleCArIDEpICUgYXJyYXkubGVuZ3RoO1xyXG5cdFx0YXJyYXlbY3VycmVudEluZGV4XS5jbGFzc0xpc3QudG9nZ2xlKFwiaW5hY3RpdmVcIiwgZmFsc2UpO1xyXG5cdH0sIDMwMCk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFib3V0O1xyXG4iLCJpbXBvcnQgJy4uL0NTUy9zdHlsZS5jc3MnO1xyXG5pbXBvcnQgZ29vZG1hbl8xIGZyb20gJy4uL0ltYWdlcy9PbGltcGljLWN5Y2xpc3QuanBnJ1xyXG5pbXBvcnQgZ29sZG1hbl8xIGZyb20gJy4uL0ltYWdlcy9IYXBweW11bGxldC5qcGcnXHJcbmltcG9ydCBjaGlja21hbl8xIGZyb20gJy4uL0ltYWdlcy9DaGlja21hbi5qcGcnXHJcblxyXG5mdW5jdGlvbiBjcmVhdGVDYXJkKG5hbWUsbnVtYmVyLGltYWdlKXtcclxuICAgIGxldCB0ZW1wZWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBsZXQgbmV3SW1hZ2UgPSBuZXcgSW1hZ2UoKTtcclxuICAgIGxldCB0ZXh0X2NvbnRhY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuXHJcblxyXG4gICAgdGV4dF9jb250YWN0LmNsYXNzTGlzdC5hZGQoXCJjcmVkZW50aWFsc1wiKTtcclxuICAgIHRleHRfY29udGFjdC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJykpLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGBOYW1lOiAke25hbWV9YCkpO1xyXG4gICAgdGV4dF9jb250YWN0LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKSkuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoYE51bWJlcjogJHtudW1iZXJ9YCkpO1xyXG5cclxuXHJcbiAgICBuZXdJbWFnZS5jbGFzc0xpc3QuYWRkKFwiY29udGFjdEltZ1wiKVxyXG4gICAgbmV3SW1hZ2Uuc3JjID0gaW1hZ2U7XHJcbiAgICB0ZW1wZWxlLmNsYXNzTGlzdC5hZGQoJ2NvbnRhY3RjYXJkJylcclxuXHJcblxyXG4gICAgdGVtcGVsZS5hcHBlbmRDaGlsZChuZXdJbWFnZSk7XHJcbiAgICB0ZW1wZWxlLmFwcGVuZENoaWxkKHRleHRfY29udGFjdCk7XHJcblxyXG4gICAgXHJcbiAgICByZXR1cm4gdGVtcGVsZTtcclxufVxyXG5cclxuZnVuY3Rpb24gY29udGFjdCgpe1xyXG4gICAgbGV0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGxldCBvcHRpb25UZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcclxuICAgIG9wdGlvblRleHQuaW5uZXJIVE1MID0gXCJDb250YWN0XCJcclxuICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQob3B0aW9uVGV4dCk7XHJcblxyXG4gICAgbGV0IG1haW5jbGFzcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgbWFpbmNsYXNzLmNsYXNzTGlzdC5hZGQoXCJjb250YWN0XCIpXHJcbiAgICBlbGVtZW50LmFwcGVuZENoaWxkKG1haW5jbGFzcyk7XHJcblxyXG5cclxuICAgIG1haW5jbGFzcy5hcHBlbmRDaGlsZChjcmVhdGVDYXJkKFwi4YOZ4YOU4YOX4YOY4YOa4YOYIOGDmeGDkOGDquGDmFwiLDU1NSxnb29kbWFuXzEpKTtcclxuICAgIG1haW5jbGFzcy5hcHBlbmRDaGlsZChjcmVhdGVDYXJkKFwi4YOd4YOl4YOg4YOdIOGDmeGDkOGDquGDmCBcIiw1NTUsZ29sZG1hbl8xKSk7XHJcbiAgICBtYWluY2xhc3MuYXBwZW5kQ2hpbGQoY3JlYXRlQ2FyZChcIuGDnOGDkOGDqOGDkCDhg5nhg5Dhg6rhg5ggXCIsNTU1LGNoaWNrbWFuXzEpKTtcclxuXHJcbiAgICByZXR1cm4gZWxlbWVudDtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29udGFjdDsiLCJpbXBvcnQgXCIuLi9DU1Mvc3R5bGUuY3NzXCI7XHJcbmltcG9ydCBmb29kMSBmcm9tIFwiLi4vSW1hZ2VzL01lbnUvZm9vZDEuanBnXCI7XHJcbmltcG9ydCBmb29kMiBmcm9tIFwiLi4vSW1hZ2VzL01lbnUvZm9vZDIuanBnXCI7XHJcbmltcG9ydCBmb29kMyBmcm9tIFwiLi4vSW1hZ2VzL01lbnUvZm9vZDMuanBnXCI7XHJcbmltcG9ydCBmb29kNCBmcm9tIFwiLi4vSW1hZ2VzL01lbnUvZm9vZDQuanBnXCI7XHJcbmltcG9ydCBmb29kNSBmcm9tIFwiLi4vSW1hZ2VzL01lbnUvZm9vZDUuanBnXCI7XHJcbmltcG9ydCBmb29kNiBmcm9tIFwiLi4vSW1hZ2VzL01lbnUvZm9vZDYuanBnXCI7XHJcbmltcG9ydCBmb29kNyBmcm9tIFwiLi4vSW1hZ2VzL01lbnUvZm9vZDcuanBnXCI7XHJcbmZ1bmN0aW9uIG1lbnVJdGVtQ2FyZChpbWFnZSwgbmFtZSkge1xyXG5cdGxldCB0ZW1wZWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuXHR0ZW1wZWxlLmNsYXNzTGlzdC5hZGQoXCJtZW51Y2FyZFwiKTtcclxuXHJcblx0bGV0IGltZyA9IG5ldyBJbWFnZSgpO1xyXG5cdGltZy5zcmMgPSBpbWFnZTtcclxuXHRpbWcuc3R5bGUuaGVpZ2h0ID0gXCIyNTBweFwiO1xyXG5cdGltZy5zdHlsZS53aWR0aCA9IFwiY2xhbXAoMzAwcHgsMTAwJSwgNDUwcHgpXCI7XHJcblxyXG5cdHRlbXBlbGUuYXBwZW5kQ2hpbGQoaW1nKTtcclxuXHJcblx0bGV0IHRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuXHR0ZXh0LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGAke25hbWV9YCkpO1xyXG5cclxuXHR0ZW1wZWxlLmFwcGVuZENoaWxkKHRleHQpO1xyXG5cclxuXHRyZXR1cm4gdGVtcGVsZTtcclxufVxyXG5cclxuZnVuY3Rpb24gbWVudSgpIHtcclxuXHRsZXQgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcblx0bGV0IG9wdGlvblRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XHJcblx0b3B0aW9uVGV4dC5pbm5lckhUTUwgPSBcIk1lbnVcIjtcclxuXHRlbGVtZW50LmFwcGVuZENoaWxkKG9wdGlvblRleHQpO1xyXG5cclxuXHRsZXQgY2xhc3Njb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG5cclxuXHRsZXQgbWFpbmNsYXNzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuXHRjbGFzc2NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwibWVudVwiKTtcclxuXHRjbGFzc2NvbnRhaW5lci5hcHBlbmRDaGlsZChtYWluY2xhc3MpO1xyXG5cdGVsZW1lbnQuYXBwZW5kQ2hpbGQoY2xhc3Njb250YWluZXIpO1xyXG5cclxuXHRtYWluY2xhc3MuYXBwZW5kQ2hpbGQobWVudUl0ZW1DYXJkKGZvb2QxLCBcIkNoaWNrZW4gc2FsYWRcIikpO1xyXG5cdG1haW5jbGFzcy5hcHBlbmRDaGlsZChtZW51SXRlbUNhcmQoZm9vZDIsIFwiWGhpbmthbGlcIikpO1xyXG5cdG1haW5jbGFzcy5hcHBlbmRDaGlsZChtZW51SXRlbUNhcmQoZm9vZDMsIFwiQ3JlYW0gcHVmZnNcIikpO1xyXG5cdG1haW5jbGFzcy5hcHBlbmRDaGlsZChtZW51SXRlbUNhcmQoZm9vZDQsIFwiU21va2VkIGJlZWZcIikpO1xyXG5cdG1haW5jbGFzcy5hcHBlbmRDaGlsZChtZW51SXRlbUNhcmQoZm9vZDUsIFwiU2FzdWFnZVwiKSk7XHJcblx0bWFpbmNsYXNzLmFwcGVuZENoaWxkKG1lbnVJdGVtQ2FyZChmb29kNiwgXCJTa2V3ZXJlZCBwb3JrXCIpKTtcclxuXHRtYWluY2xhc3MuYXBwZW5kQ2hpbGQobWVudUl0ZW1DYXJkKGZvb2Q3LCBcIk9saXZlc1wiKSk7XHJcblx0cmV0dXJuIGVsZW1lbnQ7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IG1lbnU7XHJcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSB7XG5cdFx0XHR2YXIgaSA9IHNjcmlwdHMubGVuZ3RoIC0gMTtcblx0XHRcdHdoaWxlIChpID4gLTEgJiYgIXNjcmlwdFVybCkgc2NyaXB0VXJsID0gc2NyaXB0c1tpLS1dLnNyYztcblx0XHR9XG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IG1lbnUgZnJvbSAnLi9wYWdlcy9tZW51LmpzJztcclxuaW1wb3J0IGFib3V0IGZyb20gJy4vcGFnZXMvYWJvdXQuanMnO1xyXG5pbXBvcnQgY29udGFjdCBmcm9tICcuL3BhZ2VzL2NvbnRhY3QuanMnO1xyXG5pbXBvcnQgJy4vQ1NTL3N0eWxlLmNzcyc7XHJcbmltcG9ydCByb2NrZXQgZnJvbSAnLi9JbWFnZXMvUm9ja2V0LnN2Zyc7XHJcblxyXG5jb25zdCBtYWluQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250ZW50XCIpO1xyXG5jb25zdCBoZWFkZXJUZXh0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImhlYWRlclwiKS5xdWVyeVNlbGVjdG9yKFwiZGl2XCIpO1xyXG5jb25zdCBidXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNidXR0b25zXCIpLnF1ZXJ5U2VsZWN0b3JBbGwoJ2xpJyk7XHJcblxyXG52YXIgY3VycmVudEJ1dHRvbiA9IFwiYWJvdXRcIjtcclxuXHJcbmZvcihsZXQgaSA9IDA7IGkgPCBidXR0b25zLmxlbmd0aDtpKyspe1xyXG4gICAgYnV0dG9uc1tpXS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsKGUpID0+e1xyXG4gICAgICAgIGN1cnJlbnRCdXR0b24gPSBlLnRhcmdldC5pZDtcclxuICAgICAgICBjb21waWxlKCk7XHJcbiAgICB9KVxyXG59XHJcblxyXG5mdW5jdGlvbiBmaXJzdENvbXBpbGUoKSB7XHJcbiAgICAvL3JvY2tldCBwaWN0dXJlXHJcbiAgICBsZXQgcGljdHVyZSA9IG5ldyBJbWFnZSgpO1xyXG4gICAgcGljdHVyZS5zcmMgPSByb2NrZXQ7XHJcbiAgICBwaWN0dXJlLnN0eWxlLmhlaWdodCA9IFwiODAlXCI7XHJcbiAgICBoZWFkZXJUZXh0Lmluc2VydEJlZm9yZShwaWN0dXJlLCBoZWFkZXJUZXh0LmZpcnN0Q2hpbGQpO1xyXG5cclxuICAgIC8vY3JlYXRlIG5ldyBlbGVtZW50XHJcbiAgICBjb25zdCBtYWluRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgLy9jaGFuZ2UgY29udGVudCBvZiBpbm5lciBodG1sXHJcbiAgICBtYWluRWxlbWVudC5pbm5lckhUTUwgPSBhYm91dCgpLmlubmVySFRNTDtcclxuICAgIG1haW5FbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2NvbnRlbnRCb2R5Jyk7XHJcbiAgICBtYWluRWxlbWVudC5pZCA9IFwibWFpbmNvbnRlbnRcIjtcclxuICAgIC8vYWRkIGJlZm9yZSBmb290ZXJcclxuICAgIG1haW5Db250YWluZXIuaW5zZXJ0QmVmb3JlKG1haW5FbGVtZW50LG1haW5Db250YWluZXIucXVlcnlTZWxlY3RvcignZm9vdGVyJykpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjb21waWxlKCl7XHJcbiAgICBjb25zdCBtYWluRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbWFpbmNvbnRlbnRcIik7XHJcbiAgICBzd2l0Y2goY3VycmVudEJ1dHRvbil7XHJcbiAgICAgICAgY2FzZSBcImFib3V0XCI6XHJcbiAgICAgICAgICAgIG1haW5FbGVtZW50LmlubmVySFRNTCA9IGFib3V0KCkuaW5uZXJIVE1MO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIFwibWVudVwiOlxyXG4gICAgICAgICAgICBtYWluRWxlbWVudC5pbm5lckhUTUwgPSBtZW51KCkuaW5uZXJIVE1MO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIFwiY29udGFjdFwiOlxyXG4gICAgICAgICAgICBtYWluRWxlbWVudC5pbm5lckhUTUwgPSBjb250YWN0KCkuaW5uZXJIVE1MO1xyXG4gICAgICAgICAgICBicmVhazsgICAgXHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJub3QgZGVmYXVsdFwiKTtcclxuICAgIH1cclxufVxyXG5cclxuZmlyc3RDb21waWxlKCk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9
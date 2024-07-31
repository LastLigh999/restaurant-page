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
	padding: 0px;
	margin: 0px;
}
.contentBody > div {
	display: flex;
	flex-direction: column;
	align-items: center;
	height: auto;
	flex: 1;
	padding: 10px 20px 20px;
	margin: 0px;
}
.contentBody > div > h1 {
	font-size: 4rem;
	font-family: "Lobster", sans-serif;
	margin: 0px;
	text-shadow: 0px 5px 1px blue, 5px 0px 1px violet, -5px 0px 1px orange,
		0px -5px 1px red;
}
.contentBody > div > div {
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
	margin: 0px; /* 
	padding: 0px; */
}
.paragraphContainer {
	background-color: rgba(0, 0, 0, 0.6);
	z-index: 1;
	padding: 0px;
	margin: 0px;
}
.about p {
	max-width: 900px;
	font-size: 30px;
	text-shadow: 1px 1px 1px blue;
	padding: 0px 20px;
}
.about h2 {
	font-size: 50px;
	margin-bottom: 0px;
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
	position: relative;
	background-color: black;
	transform-origin: top;
	margin: 0px 40px;
	padding: 10px 20px;
	box-shadow: 2px 2px 6px blue;
	border-radius: 10px;
	transform: scaleY(1, 1);
	transition: transform 0.8s;
	z-index: 2;
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
	padding: 0px;
	margin: 0px;
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
		font-size: 20px;
	}
	.contentBody > div > div {
		padding: 0px 5px;
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
	pointer-events: all;
	flex-direction: column;
	align-items: center;
	border: 1px solid blue;
	position: relative;
	background-color: black;
	/* max-width: 450px; */
}
.menucard:hover {
	box-shadow: 5px 5px 10px blue;
}
.menucard.active {
	box-shadow: 5px 5px 6px violet;
	border: 1px solid violet;
}
.menucard.active:hover {
	box-shadow: 5px 5px 6px violet;
}

.menucard > div {
	display: flex;
	justify-content: space-between;
	width: calc(100% - 40px);
	padding: 0px 20px;
}

.ingredients {
	position: absolute;
	top: 99%;
	border: 1px solid blue;
	border-top: none;
	transform-origin: top;
	background-color: black;
	height: 60px;
	z-index: 2;
	transform: scaleY(0);
	transition: transform 0.2s;
}
.menucard.active .ingredients {
	border: 1px solid violet;
	border-top: none;
	z-index: 2;
	box-shadow: 5px 5px 6px violet;
	transform: scaleY(1);
}

/* Contact styling */
.contact {
	color: white;
	display: flex;
	flex-direction: column;
	gap: 10px;
	align-items: center;
}
.contact img {
	width: 3rem;
	height: 3rem;
}

.contactcard {
	display: flex;
	margin: 20px;
	padding: 10px;
	max-width: 25rem;
	justify-content: space-between;
	background-color: rgba(255, 255, 255, 0.3);
	border-radius: 20px;
	box-shadow: 0px 0px 5px 5px cyan;
	gap: 10px;
	font-size: 2rem;
	align-items: center;
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
footer div {
	font-size: 2rem;
	max-height: 80px;
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
`, "",{"version":3,"sources":["webpack://./src/CSS/style.css"],"names":[],"mappings":"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","sourcesContent":["@import url(\"https://fonts.googleapis.com/css2?family=Ga+Maamli&display=swap\");\r\n@import url(\"https://fonts.googleapis.com/css2?family=Lobster&display=swap\");\r\n@import url(\"https://fonts.googleapis.com/css2?family=Caveat:wght@400..700&display=swap\");\r\n@import url(\"https://fonts.googleapis.com/css2?family=Yanone+Kaffeesatz:wght@200..700&display=swap\");\r\n\r\nhtml,\r\nbody {\r\n\tpadding: 0px;\r\n\tmargin: 0px;\r\n\theight: 100%;\r\n\tbackground-color: black;\r\n\t/* font-family: \"Caveat\", cursive; */\r\n\tfont-family: \"Yanone Kaffeesatz\", sans-serif;\r\n\tfont-size: 1.15rem;\r\n}\r\n\r\nheader > div {\r\n\tfont-family: \"Ga Maamli\", sans-serif;\r\n\tfont-size: 60px;\r\n}\r\n\r\n#content {\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n\tbackground-color: #444;\r\n}\r\n.contentBody {\r\n\tpadding: 0px;\r\n\tmargin: 0px;\r\n}\r\n.contentBody > div {\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n\talign-items: center;\r\n\theight: auto;\r\n\tflex: 1;\r\n\tpadding: 10px 20px 20px;\r\n\tmargin: 0px;\r\n}\r\n.contentBody > div > h1 {\r\n\tfont-size: 4rem;\r\n\tfont-family: \"Lobster\", sans-serif;\r\n\tmargin: 0px;\r\n\ttext-shadow: 0px 5px 1px blue, 5px 0px 1px violet, -5px 0px 1px orange,\r\n\t\t0px -5px 1px red;\r\n}\r\n.contentBody > div > div {\r\n\tbackground-color: rgba(0, 0, 0, 0.5);\r\n\tflex: 1;\r\n\twidth: calc(100% - 15px);\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n\t/* justify-content: center; */\r\n\talign-items: center;\r\n\tpadding: 0px 15px;\r\n\tcolor: white;\r\n}\r\n\r\n/* About */\r\n.about {\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n\talign-items: center;\r\n\tjustify-content: center;\r\n\twidth: fit-content;\r\n\tmargin: 0px; /* \r\n\tpadding: 0px; */\r\n}\r\n.paragraphContainer {\r\n\tbackground-color: rgba(0, 0, 0, 0.6);\r\n\tz-index: 1;\r\n\tpadding: 0px;\r\n\tmargin: 0px;\r\n}\r\n.about p {\r\n\tmax-width: 900px;\r\n\tfont-size: 30px;\r\n\ttext-shadow: 1px 1px 1px blue;\r\n\tpadding: 0px 20px;\r\n}\r\n.about h2 {\r\n\tfont-size: 50px;\r\n\tmargin-bottom: 0px;\r\n}\r\n\r\n.offers {\r\n\tlist-style: none;\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n\talign-items: start;\r\n\t/* align-items: start; */\r\n\tgap: 10px;\r\n}\r\n\r\n.offers > li {\r\n\tpadding: 5px 10px;\r\n\tborder-radius: 5px;\r\n\tfont-size: 30px;\r\n\t/* text-shadow: 4px 4px 10px blue; */\r\n\tcursor: pointer;\r\n}\r\n\r\n.imageGal {\r\n\tdisplay: flex;\r\n\twidth: fit-content;\r\n\tposition: relative;\r\n\tbackground-color: black;\r\n\ttransform-origin: top;\r\n\tmargin: 0px 40px;\r\n\tpadding: 10px 20px;\r\n\tbox-shadow: 2px 2px 6px blue;\r\n\tborder-radius: 10px;\r\n\ttransform: scaleY(1, 1);\r\n\ttransition: transform 0.8s;\r\n\tz-index: 2;\r\n}\r\n.imageGal.transitioning {\r\n\ttransition: transform 0.3s;\r\n\ttransform: scale(0, 1);\r\n}\r\n.imageGal.inactive {\r\n\topacity: 0;\r\n\ttransform: scale(0.01, 1);\r\n\tposition: absolute;\r\n}\r\n.imageGal > img {\r\n\twidth: clamp(340px, 40%, 600px);\r\n\theight: auto;\r\n\tmax-height: 340px;\r\n\tborder-radius: 0px 30px 30px 0px;\r\n\tbox-shadow: 2px 0px 5px violet;\r\n}\r\n.imageGal > div {\r\n\tmin-width: 340px;\r\n}\r\n\r\n.aboutContent {\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n\talign-items: center;\r\n\ttext-align: center;\r\n\tpadding: 0px;\r\n\tmargin: 0px;\r\n}\r\n.aboutContent > h1 {\r\n\ttext-shadow: 5px 5px 10px red, -5px -5px 10px red;\r\n\tfont-size: 40px;\r\n}\r\n.aboutContent > div {\r\n\ttext-shadow: 5px 5px 10px violet;\r\n\tfont-size: calc(1.5vw + 10px);\r\n}\r\n\r\n@media /* (min-width: 760px) and */(max-width: 900px) {\r\n\t.imageGal {\r\n\t\tflex-direction: column;\r\n\t\talign-items: center;\r\n\t}\r\n}\r\n@media (max-width: 760px) {\r\n\t.about > h2 {\r\n\t\ttext-align: center;\r\n\t\tfont-size: calc(6vw + 5px);\r\n\t\tmax-width: 360px;\r\n\t\tmargin: 20px 0px;\r\n\t}\r\n\t.imageGal {\r\n\t\tmargin: 0px;\r\n\t\tpadding: 20px 0px;\r\n\t\tmin-width: 360px;\r\n\t\twidth: 100%;\r\n\t}\r\n\t.imageGal > img {\r\n\t\tborder-radius: 0px 0px 30px 30px;\r\n\t\tbox-shadow: 0px 2px 5px violet;\r\n\t}\r\n\t.contentBody > div {\r\n\t\twidth: 100vw !important;\r\n\t\tpadding: 0px;\r\n\t\tmargin: 0px;\r\n\t}\r\n\t.aboutContent > div {\r\n\t\tfont-size: 20px;\r\n\t}\r\n\t.contentBody > div > div {\r\n\t\tpadding: 0px 5px;\r\n\t}\r\n}\r\n\r\n/* Menu Styling */\r\n.menu {\r\n\tpadding: 30px 40px !important;\r\n\twidth: calc(100% - 80px) !important;\r\n}\r\n.menu > div {\r\n\twidth: 100%;\r\n\tdisplay: grid;\r\n\tgrid-template-columns: repeat(auto-fill, minmax(300px, 1fr));\r\n\tgap: 30px;\r\n\tjustify-content: center;\r\n}\r\n.menucard {\r\n\tdisplay: flex;\r\n\tpointer-events: all;\r\n\tflex-direction: column;\r\n\talign-items: center;\r\n\tborder: 1px solid blue;\r\n\tposition: relative;\r\n\tbackground-color: black;\r\n\t/* max-width: 450px; */\r\n}\r\n.menucard:hover {\r\n\tbox-shadow: 5px 5px 10px blue;\r\n}\r\n.menucard.active {\r\n\tbox-shadow: 5px 5px 6px violet;\r\n\tborder: 1px solid violet;\r\n}\r\n.menucard.active:hover {\r\n\tbox-shadow: 5px 5px 6px violet;\r\n}\r\n\r\n.menucard > div {\r\n\tdisplay: flex;\r\n\tjustify-content: space-between;\r\n\twidth: calc(100% - 40px);\r\n\tpadding: 0px 20px;\r\n}\r\n\r\n.ingredients {\r\n\tposition: absolute;\r\n\ttop: 99%;\r\n\tborder: 1px solid blue;\r\n\tborder-top: none;\r\n\ttransform-origin: top;\r\n\tbackground-color: black;\r\n\theight: 60px;\r\n\tz-index: 2;\r\n\ttransform: scaleY(0);\r\n\ttransition: transform 0.2s;\r\n}\r\n.menucard.active .ingredients {\r\n\tborder: 1px solid violet;\r\n\tborder-top: none;\r\n\tz-index: 2;\r\n\tbox-shadow: 5px 5px 6px violet;\r\n\ttransform: scaleY(1);\r\n}\r\n\r\n/* Contact styling */\r\n.contact {\r\n\tcolor: white;\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n\tgap: 10px;\r\n\talign-items: center;\r\n}\r\n.contact img {\r\n\twidth: 3rem;\r\n\theight: 3rem;\r\n}\r\n\r\n.contactcard {\r\n\tdisplay: flex;\r\n\tmargin: 20px;\r\n\tpadding: 10px;\r\n\tmax-width: 25rem;\r\n\tjustify-content: space-between;\r\n\tbackground-color: rgba(255, 255, 255, 0.3);\r\n\tborder-radius: 20px;\r\n\tbox-shadow: 0px 0px 5px 5px cyan;\r\n\tgap: 10px;\r\n\tfont-size: 2rem;\r\n\talign-items: center;\r\n}\r\n\r\n/* Header Footer */\r\nheader,\r\nfooter {\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n}\r\nheader > div,\r\nfooter {\r\n\tpointer-events: none;\r\n\tfont-size: 50px;\r\n\tdisplay: flex;\r\n\talign-items: center;\r\n\tjustify-content: center;\r\n\tbackground-color: black;\r\n\tcolor: white;\r\n\theight: 80px;\r\n\tgap: 20px;\r\n}\r\nfooter div {\r\n\tfont-size: 2rem;\r\n\tmax-height: 80px;\r\n}\r\nheader > div > img {\r\n\tpointer-events: none;\r\n\tuser-select: none;\r\n}\r\n#buttons {\r\n\tmargin: 0px;\r\n\tpadding: 0px;\r\n\tlist-style-type: none;\r\n\tdisplay: flex;\r\n\tjustify-content: space-around;\r\n\talign-items: center;\r\n\tgap: 5px;\r\n\tfont-size: 35px;\r\n\tfont-family: \"Lobster\", sans-serif;\r\n\tpadding: 0px 10px;\r\n}\r\n#buttons li {\r\n\tdisplay: flex;\r\n\tjustify-content: center;\r\n\talign-items: center;\r\n\tcolor: white;\r\n\tmargin: 0px;\r\n\tpadding: 0px;\r\n\tbackground-color: blue;\r\n\tflex: 1;\r\n\theight: 60px;\r\n\tcursor: default;\r\n\tborder-radius: 0px 0px 20px 20px;\r\n\ttext-shadow: 4px 4px black;\r\n\tbox-shadow: none;\r\n\ttransition: background-color 10s, box-shadow 1s;\r\n}\r\n#buttons li:hover {\r\n\ttransition: background-color 1s;\r\n\ttext-shadow: 4px 4px violet;\r\n\tbackground-color: #241571;\r\n}\r\nul li:hover {\r\n\tz-index: 1;\r\n\tbox-shadow: 0px 0px 10px 10px cyan !important;\r\n\tbackground-color: violet;\r\n\ttransition: background-color 2s;\r\n}\r\n"],"sourceRoot":""}]);
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

function aboutInfoParagraph(text) {
	let tempele = document.createElement("p");
	tempele.innerHTML = text;
	return tempele;
}

function paragraphContainer(texts) {
	let tempele = document.createElement("div");
	tempele.classList.add("paragraphContainer");
	for (let text of texts) {
		tempele.appendChild(aboutInfoParagraph(text));
	}
	return tempele;
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
	innerElement.innerHTML = `<h2>Bistro RocketAelly.</h2>
	`;

	innerElement.appendChild(
		paragraphContainer([
			"Welcome to Bistro RocketAlley, a cornerstone of culinary excellence nestled in the heart of [City]. Founded on [Founding Date], our establishment has been a beacon of warmth and hospitality for over a decade. From the day we opened our doors, we've had the pleasure of serving countless guests, each leaving with a memorable dining experience.",
			"Our journey began with a simple yet profound vision: to create a place where people could come together to enjoy exceptional food in a welcoming and vibrant atmosphere. We believe that dining is not just about the food on the plate but also about the experience, the ambiance, and the connections made around the table. This philosophy has guided us since our inception and continues to be the cornerstone of our success.",
		])
	);

	innerElement.appendChild(imageGallery());

	innerElement.appendChild(
		paragraphContainer([
			"As we look to the future, we remain committed to upholding the high standards that have defined Bistro RocketAlley from the beginning. We are continually evolving, seeking new ways to enhance our menu, improve our service, and provide an exceptional dining experience.",
			"As we look to the future, we remain committed to upholding the high standards that have defined Bistro RocketAlley from the beginning. We are continually evolving, seeking new ways to enhance our menu, improve our service, and provide an exceptional dining experience.",
		])
	);

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
/* harmony import */ var _Images_contact_call_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Images/contact/call.svg */ "./src/Images/contact/call.svg");
/* harmony import */ var _Images_contact_location_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Images/contact/location.svg */ "./src/Images/contact/location.svg");
/* harmony import */ var _Images_contact_time_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Images/contact/time.svg */ "./src/Images/contact/time.svg");





function createCard(symbol, text) {
	let tempele = document.createElement("div");
	tempele.classList.add("contactcard");

	let image = document.createElement("img");
	image.src = symbol;
	image.alt = "number";

	tempele.appendChild(image);
	tempele.appendChild(document.createTextNode(text));

	return tempele;
}

function contact() {
	let element = document.createElement("div");
	let optionText = document.createElement("h1");
	optionText.innerHTML = "Contact";
	element.appendChild(optionText);

	let mainclass = document.createElement("div");
	mainclass.classList.add("contact");
	element.appendChild(mainclass);
	mainclass.appendChild(createCard(_Images_contact_call_svg__WEBPACK_IMPORTED_MODULE_1__, "(222) 555-12-34-56"));
	mainclass.appendChild(
		createCard(
			_Images_contact_location_svg__WEBPACK_IMPORTED_MODULE_2__,
			"The Savory Spoon, 456 Flavor Street, Yumsville, Gastronomia, 98765, Wonderland"
		)
	);
	mainclass.appendChild(createCard(_Images_contact_time_svg__WEBPACK_IMPORTED_MODULE_3__, "Open 24/7"));

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
/* harmony import */ var _Images_Menu_food0_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Images/Menu/food0.jpg */ "./src/Images/Menu/food0.jpg");
/* harmony import */ var _Images_Menu_food1_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Images/Menu/food1.jpg */ "./src/Images/Menu/food1.jpg");
/* harmony import */ var _Images_Menu_food2_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Images/Menu/food2.jpg */ "./src/Images/Menu/food2.jpg");
/* harmony import */ var _Images_Menu_food3_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Images/Menu/food3.jpg */ "./src/Images/Menu/food3.jpg");
/* harmony import */ var _Images_Menu_food4_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Images/Menu/food4.jpg */ "./src/Images/Menu/food4.jpg");
/* harmony import */ var _Images_Menu_food5_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Images/Menu/food5.jpg */ "./src/Images/Menu/food5.jpg");
/* harmony import */ var _Images_Menu_food6_jpg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Images/Menu/food6.jpg */ "./src/Images/Menu/food6.jpg");
/* harmony import */ var _Images_Menu_food7_jpg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../Images/Menu/food7.jpg */ "./src/Images/Menu/food7.jpg");
/* harmony import */ var _Images_Menu_cesar_salad_jpg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../Images/Menu/cesar-salad.jpg */ "./src/Images/Menu/cesar-salad.jpg");
/* harmony import */ var _Images_Menu_tomato_Onion_jpg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../Images/Menu/tomato-Onion.jpg */ "./src/Images/Menu/tomato-Onion.jpg");












let menuItems = {
	adjaruliKhachapuri: {
		name: "Adjaruli Khachapuri",
		picture: _Images_Menu_food0_jpg__WEBPACK_IMPORTED_MODULE_1__,
		price: "15.00$",
		contains: "raw eggs, cheese, butter, wheat flour",
	},
	chickenSalad: {
		name: "Chicken Salad",
		picture: _Images_Menu_food1_jpg__WEBPACK_IMPORTED_MODULE_2__,
		price: "10.00$",
		contains: "chcicken Breast, Mayoneisse, Black pepper, Bell paper.",
	},
	khikali: {
		name: "Khinkali",
		picture: _Images_Menu_food2_jpg__WEBPACK_IMPORTED_MODULE_3__,
		price: "2$",
		contains: "Wheat flour, pork and beef mixed ground meat",
	},
	creamPuff: {
		name: "Cream Puff",
		picture: _Images_Menu_food3_jpg__WEBPACK_IMPORTED_MODULE_4__,
		price: "2$",
		contains: "Milk cream, Suggar, Wheat flour, Eggs",
	},
	smokedPorkMeat: {
		name: "Smoked Pork Meat",
		picture: _Images_Menu_food4_jpg__WEBPACK_IMPORTED_MODULE_5__,
		price: "30$",
		contains: "Pork thigh",
	},
	sasuage: {
		name: "Sausage",
		picture: _Images_Menu_food5_jpg__WEBPACK_IMPORTED_MODULE_6__,
		price: "17$",
		contains:
			"Mixed meat pork and beef, Peprika, Onion, Pomegranate, Black papper",
	},
	skeweredMeat: {
		name: "Skewered Pork Meat",
		picture: _Images_Menu_food6_jpg__WEBPACK_IMPORTED_MODULE_7__,
		price: "25$",
		contains: "Pork meat, Onion, Pomegranate, Black pepper, Garlic powder",
	},
	olives: {
		name: "Olives",
		picture: _Images_Menu_food7_jpg__WEBPACK_IMPORTED_MODULE_8__,
		price: "5$",
		contains: "Olives",
	},
	cesar: {
		name: "Cesar Salad",
		picture: _Images_Menu_cesar_salad_jpg__WEBPACK_IMPORTED_MODULE_9__,
		price: "20.00$",
		contains:
			"Bazel, Chicken breast, Bread crumbs, Olives, Lettuce, Vinegar, Grated parmejan",
	},
	tomatoSalad: {
		name: "Tomato Salad",
		picture: _Images_Menu_tomato_Onion_jpg__WEBPACK_IMPORTED_MODULE_10__,
		price: "10.00$",
		contains: "Tomato, Onion, Bazel, Olive oil",
	},
};

let activeElement = null;

function menuItemCard(object, name) {
	let tempele = document.createElement("div");
	tempele.classList.add("menucard");
	let text_items = document.createElement("div");
	let ingredients = document.createElement("div");
	ingredients.classList.add("ingredients");
	let copytext = name;

	ingredients.textContent = object.contains;

	let img = new Image();
	img.src = object.picture;
	img.style.height = "250px";
	img.style.width = "clamp(300px,100%, 450px)";

	tempele.appendChild(img);

	let text = document.createElement("p");
	text.appendChild(document.createTextNode(`${object.name}`));
	let price = document.createElement("p");
	price.textContent = object.price;
	price.style.color = "#c5e90b";
	price.style.textShadow = "5px 5px 1px #26580f";

	text_items.appendChild(text);
	text_items.appendChild(price);

	tempele.appendChild(text_items);
	tempele.appendChild(ingredients);
	/* 
	console.log("Adding event listener to: ", copytext); */

	tempele.addEventListener("click", () => {
		console.log("Card clicked: ", copytext);
		if (activeElement && activeElement !== tempele) {
			activeElement.classList.remove("active");
		}

		if (activeElement === tempele) {
			tempele.classList.remove("active");
			activeElement = null;
		} else {
			tempele.classList.add("active");
			activeElement = tempele;
		}
	});

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
	for (let item in menuItems) {
		mainclass.appendChild(menuItemCard(menuItems[item], item));
	}
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

/***/ "./src/Images/Menu/cesar-salad.jpg":
/*!*****************************************!*\
  !*** ./src/Images/Menu/cesar-salad.jpg ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "128bbe34061610d7ab3e.jpg";

/***/ }),

/***/ "./src/Images/Menu/food0.jpg":
/*!***********************************!*\
  !*** ./src/Images/Menu/food0.jpg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "08f319fbc9c1c441ad28.jpg";

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

/***/ "./src/Images/Menu/tomato-Onion.jpg":
/*!******************************************!*\
  !*** ./src/Images/Menu/tomato-Onion.jpg ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "bb5a4a83a5a033e76650.jpg";

/***/ }),

/***/ "./src/Images/Rocket.svg":
/*!*******************************!*\
  !*** ./src/Images/Rocket.svg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "82958321e3d177706d00.svg";

/***/ }),

/***/ "./src/Images/contact/call.svg":
/*!*************************************!*\
  !*** ./src/Images/contact/call.svg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "1df1d50b3ed360f9dddb.svg";

/***/ }),

/***/ "./src/Images/contact/location.svg":
/*!*****************************************!*\
  !*** ./src/Images/contact/location.svg ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "19c979499a7ec9b4a0fb.svg";

/***/ }),

/***/ "./src/Images/contact/time.svg":
/*!*************************************!*\
  !*** ./src/Images/contact/time.svg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "8a8f812e81d5c3cec0ec.svg";

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
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
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
const buttons = document.querySelector("#buttons").querySelectorAll("li");

var currentButton = "about";

for (let i = 0; i < buttons.length; i++) {
	buttons[i].addEventListener("click", (e) => {
		currentButton = e.target.id;
		compile();
	});
}

function firstCompile() {
	//rocket picture
	let picture = new Image();
	picture.src = _Images_Rocket_svg__WEBPACK_IMPORTED_MODULE_4__;
	picture.style.height = "80%";
	headerText.insertBefore(picture, headerText.firstChild);

	//create new element
	const mainElement = document.createElement("div");
	//change content of inner html
	mainElement.appendChild((0,_pages_about_js__WEBPACK_IMPORTED_MODULE_1__["default"])());
	mainElement.classList.add("contentBody");
	mainElement.id = "maincontent";
	//add before footer
	mainContainer.insertBefore(
		mainElement,
		mainContainer.querySelector("footer")
	);
}

function compile() {
	const mainElement = document.querySelector("#maincontent");
	console.log(currentButton);
	switch (currentButton) {
		case "about":
			mainElement.innerHTML = "";
			mainElement.appendChild((0,_pages_about_js__WEBPACK_IMPORTED_MODULE_1__["default"])());
			break;
		case "menu":
			mainElement.innerHTML = "";
			mainElement.appendChild((0,_pages_menu_js__WEBPACK_IMPORTED_MODULE_0__["default"])());
			break;
		case "contact":
			mainElement.innerHTML = "";
			mainElement.appendChild((0,_pages_contact_js__WEBPACK_IMPORTED_MODULE_2__["default"])());
			break;
		default:
			console.log("not default");
	}
}

firstCompile();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUM2RztBQUNqQjtBQUM1Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GLHVIQUF1SDtBQUN2SCxxSEFBcUg7QUFDckgsa0lBQWtJO0FBQ2xJLDZJQUE2STtBQUM3STtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9DQUFvQztBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QjtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2QsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0I7QUFDeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQ0FBb0M7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQjtBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTyxxRkFBcUYsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxNQUFNLEtBQUssVUFBVSxVQUFVLEtBQUssS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxXQUFXLEtBQUssS0FBSyxVQUFVLFlBQVksV0FBVyxLQUFLLE9BQU8sTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLE1BQU0sVUFBVSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxnQkFBZ0IsTUFBTSxNQUFNLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxLQUFLLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxNQUFNLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxXQUFXLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxLQUFLLEtBQUssWUFBWSxhQUFhLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxLQUFLLEtBQUssWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLEtBQUssWUFBWSxhQUFhLE1BQU0sS0FBSyxLQUFLLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxLQUFL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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRyw0REFBTTtBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUcsNkRBQU07QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUcsNERBQU07QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0EsaUVBQWUsS0FBSyxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcEtLO0FBQ29CO0FBQ1E7QUFDUjtBQUM5QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0MscURBQUk7QUFDdEM7QUFDQTtBQUNBLEdBQUcseURB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QztBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsK0NBQU07QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLDJEQUFLO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQiwyREFBSztBQUNoQztBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsMERBQUk7QUFDL0I7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLDZEQUFPO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL0NTUy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvQ1NTL3N0eWxlLmNzcz9hMWNmIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL3BhZ2VzL2Fib3V0LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9wYWdlcy9jb250YWN0LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9wYWdlcy9tZW51LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1HYStNYWFtbGkmZGlzcGxheT1zd2FwKTtcIl0pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9TG9ic3RlciZkaXNwbGF5PXN3YXApO1wiXSk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1DYXZlYXQ6d2dodEA0MDAuLjcwMCZkaXNwbGF5PXN3YXApO1wiXSk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1ZYW5vbmUrS2FmZmVlc2F0ejp3Z2h0QDIwMC4uNzAwJmRpc3BsYXk9c3dhcCk7XCJdKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgaHRtbCxcclxuYm9keSB7XHJcblx0cGFkZGluZzogMHB4O1xyXG5cdG1hcmdpbjogMHB4O1xyXG5cdGhlaWdodDogMTAwJTtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcclxuXHQvKiBmb250LWZhbWlseTogXCJDYXZlYXRcIiwgY3Vyc2l2ZTsgKi9cclxuXHRmb250LWZhbWlseTogXCJZYW5vbmUgS2FmZmVlc2F0elwiLCBzYW5zLXNlcmlmO1xyXG5cdGZvbnQtc2l6ZTogMS4xNXJlbTtcclxufVxyXG5cclxuaGVhZGVyID4gZGl2IHtcclxuXHRmb250LWZhbWlseTogXCJHYSBNYWFtbGlcIiwgc2Fucy1zZXJpZjtcclxuXHRmb250LXNpemU6IDYwcHg7XHJcbn1cclxuXHJcbiNjb250ZW50IHtcclxuXHRkaXNwbGF5OiBmbGV4O1xyXG5cdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcblx0YmFja2dyb3VuZC1jb2xvcjogIzQ0NDtcclxufVxyXG4uY29udGVudEJvZHkge1xyXG5cdHBhZGRpbmc6IDBweDtcclxuXHRtYXJnaW46IDBweDtcclxufVxyXG4uY29udGVudEJvZHkgPiBkaXYge1xyXG5cdGRpc3BsYXk6IGZsZXg7XHJcblx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuXHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdGhlaWdodDogYXV0bztcclxuXHRmbGV4OiAxO1xyXG5cdHBhZGRpbmc6IDEwcHggMjBweCAyMHB4O1xyXG5cdG1hcmdpbjogMHB4O1xyXG59XHJcbi5jb250ZW50Qm9keSA+IGRpdiA+IGgxIHtcclxuXHRmb250LXNpemU6IDRyZW07XHJcblx0Zm9udC1mYW1pbHk6IFwiTG9ic3RlclwiLCBzYW5zLXNlcmlmO1xyXG5cdG1hcmdpbjogMHB4O1xyXG5cdHRleHQtc2hhZG93OiAwcHggNXB4IDFweCBibHVlLCA1cHggMHB4IDFweCB2aW9sZXQsIC01cHggMHB4IDFweCBvcmFuZ2UsXHJcblx0XHQwcHggLTVweCAxcHggcmVkO1xyXG59XHJcbi5jb250ZW50Qm9keSA+IGRpdiA+IGRpdiB7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjUpO1xyXG5cdGZsZXg6IDE7XHJcblx0d2lkdGg6IGNhbGMoMTAwJSAtIDE1cHgpO1xyXG5cdGRpc3BsYXk6IGZsZXg7XHJcblx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuXHQvKiBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsgKi9cclxuXHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdHBhZGRpbmc6IDBweCAxNXB4O1xyXG5cdGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLyogQWJvdXQgKi9cclxuLmFib3V0IHtcclxuXHRkaXNwbGF5OiBmbGV4O1xyXG5cdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHR3aWR0aDogZml0LWNvbnRlbnQ7XHJcblx0bWFyZ2luOiAwcHg7IC8qIFxyXG5cdHBhZGRpbmc6IDBweDsgKi9cclxufVxyXG4ucGFyYWdyYXBoQ29udGFpbmVyIHtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNik7XHJcblx0ei1pbmRleDogMTtcclxuXHRwYWRkaW5nOiAwcHg7XHJcblx0bWFyZ2luOiAwcHg7XHJcbn1cclxuLmFib3V0IHAge1xyXG5cdG1heC13aWR0aDogOTAwcHg7XHJcblx0Zm9udC1zaXplOiAzMHB4O1xyXG5cdHRleHQtc2hhZG93OiAxcHggMXB4IDFweCBibHVlO1xyXG5cdHBhZGRpbmc6IDBweCAyMHB4O1xyXG59XHJcbi5hYm91dCBoMiB7XHJcblx0Zm9udC1zaXplOiA1MHB4O1xyXG5cdG1hcmdpbi1ib3R0b206IDBweDtcclxufVxyXG5cclxuLm9mZmVycyB7XHJcblx0bGlzdC1zdHlsZTogbm9uZTtcclxuXHRkaXNwbGF5OiBmbGV4O1xyXG5cdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcblx0YWxpZ24taXRlbXM6IHN0YXJ0O1xyXG5cdC8qIGFsaWduLWl0ZW1zOiBzdGFydDsgKi9cclxuXHRnYXA6IDEwcHg7XHJcbn1cclxuXHJcbi5vZmZlcnMgPiBsaSB7XHJcblx0cGFkZGluZzogNXB4IDEwcHg7XHJcblx0Ym9yZGVyLXJhZGl1czogNXB4O1xyXG5cdGZvbnQtc2l6ZTogMzBweDtcclxuXHQvKiB0ZXh0LXNoYWRvdzogNHB4IDRweCAxMHB4IGJsdWU7ICovXHJcblx0Y3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4uaW1hZ2VHYWwge1xyXG5cdGRpc3BsYXk6IGZsZXg7XHJcblx0d2lkdGg6IGZpdC1jb250ZW50O1xyXG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcclxuXHR0cmFuc2Zvcm0tb3JpZ2luOiB0b3A7XHJcblx0bWFyZ2luOiAwcHggNDBweDtcclxuXHRwYWRkaW5nOiAxMHB4IDIwcHg7XHJcblx0Ym94LXNoYWRvdzogMnB4IDJweCA2cHggYmx1ZTtcclxuXHRib3JkZXItcmFkaXVzOiAxMHB4O1xyXG5cdHRyYW5zZm9ybTogc2NhbGVZKDEsIDEpO1xyXG5cdHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjhzO1xyXG5cdHotaW5kZXg6IDI7XHJcbn1cclxuLmltYWdlR2FsLnRyYW5zaXRpb25pbmcge1xyXG5cdHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzO1xyXG5cdHRyYW5zZm9ybTogc2NhbGUoMCwgMSk7XHJcbn1cclxuLmltYWdlR2FsLmluYWN0aXZlIHtcclxuXHRvcGFjaXR5OiAwO1xyXG5cdHRyYW5zZm9ybTogc2NhbGUoMC4wMSwgMSk7XHJcblx0cG9zaXRpb246IGFic29sdXRlO1xyXG59XHJcbi5pbWFnZUdhbCA+IGltZyB7XHJcblx0d2lkdGg6IGNsYW1wKDM0MHB4LCA0MCUsIDYwMHB4KTtcclxuXHRoZWlnaHQ6IGF1dG87XHJcblx0bWF4LWhlaWdodDogMzQwcHg7XHJcblx0Ym9yZGVyLXJhZGl1czogMHB4IDMwcHggMzBweCAwcHg7XHJcblx0Ym94LXNoYWRvdzogMnB4IDBweCA1cHggdmlvbGV0O1xyXG59XHJcbi5pbWFnZUdhbCA+IGRpdiB7XHJcblx0bWluLXdpZHRoOiAzNDBweDtcclxufVxyXG5cclxuLmFib3V0Q29udGVudCB7XHJcblx0ZGlzcGxheTogZmxleDtcclxuXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG5cdHBhZGRpbmc6IDBweDtcclxuXHRtYXJnaW46IDBweDtcclxufVxyXG4uYWJvdXRDb250ZW50ID4gaDEge1xyXG5cdHRleHQtc2hhZG93OiA1cHggNXB4IDEwcHggcmVkLCAtNXB4IC01cHggMTBweCByZWQ7XHJcblx0Zm9udC1zaXplOiA0MHB4O1xyXG59XHJcbi5hYm91dENvbnRlbnQgPiBkaXYge1xyXG5cdHRleHQtc2hhZG93OiA1cHggNXB4IDEwcHggdmlvbGV0O1xyXG5cdGZvbnQtc2l6ZTogY2FsYygxLjV2dyArIDEwcHgpO1xyXG59XHJcblxyXG5AbWVkaWEgLyogKG1pbi13aWR0aDogNzYwcHgpIGFuZCAqLyhtYXgtd2lkdGg6IDkwMHB4KSB7XHJcblx0LmltYWdlR2FsIHtcclxuXHRcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcblx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdH1cclxufVxyXG5AbWVkaWEgKG1heC13aWR0aDogNzYwcHgpIHtcclxuXHQuYWJvdXQgPiBoMiB7XHJcblx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblx0XHRmb250LXNpemU6IGNhbGMoNnZ3ICsgNXB4KTtcclxuXHRcdG1heC13aWR0aDogMzYwcHg7XHJcblx0XHRtYXJnaW46IDIwcHggMHB4O1xyXG5cdH1cclxuXHQuaW1hZ2VHYWwge1xyXG5cdFx0bWFyZ2luOiAwcHg7XHJcblx0XHRwYWRkaW5nOiAyMHB4IDBweDtcclxuXHRcdG1pbi13aWR0aDogMzYwcHg7XHJcblx0XHR3aWR0aDogMTAwJTtcclxuXHR9XHJcblx0LmltYWdlR2FsID4gaW1nIHtcclxuXHRcdGJvcmRlci1yYWRpdXM6IDBweCAwcHggMzBweCAzMHB4O1xyXG5cdFx0Ym94LXNoYWRvdzogMHB4IDJweCA1cHggdmlvbGV0O1xyXG5cdH1cclxuXHQuY29udGVudEJvZHkgPiBkaXYge1xyXG5cdFx0d2lkdGg6IDEwMHZ3ICFpbXBvcnRhbnQ7XHJcblx0XHRwYWRkaW5nOiAwcHg7XHJcblx0XHRtYXJnaW46IDBweDtcclxuXHR9XHJcblx0LmFib3V0Q29udGVudCA+IGRpdiB7XHJcblx0XHRmb250LXNpemU6IDIwcHg7XHJcblx0fVxyXG5cdC5jb250ZW50Qm9keSA+IGRpdiA+IGRpdiB7XHJcblx0XHRwYWRkaW5nOiAwcHggNXB4O1xyXG5cdH1cclxufVxyXG5cclxuLyogTWVudSBTdHlsaW5nICovXHJcbi5tZW51IHtcclxuXHRwYWRkaW5nOiAzMHB4IDQwcHggIWltcG9ydGFudDtcclxuXHR3aWR0aDogY2FsYygxMDAlIC0gODBweCkgIWltcG9ydGFudDtcclxufVxyXG4ubWVudSA+IGRpdiB7XHJcblx0d2lkdGg6IDEwMCU7XHJcblx0ZGlzcGxheTogZ3JpZDtcclxuXHRncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpbGwsIG1pbm1heCgzMDBweCwgMWZyKSk7XHJcblx0Z2FwOiAzMHB4O1xyXG5cdGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcbi5tZW51Y2FyZCB7XHJcblx0ZGlzcGxheTogZmxleDtcclxuXHRwb2ludGVyLWV2ZW50czogYWxsO1xyXG5cdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHRib3JkZXI6IDFweCBzb2xpZCBibHVlO1xyXG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcclxuXHQvKiBtYXgtd2lkdGg6IDQ1MHB4OyAqL1xyXG59XHJcbi5tZW51Y2FyZDpob3ZlciB7XHJcblx0Ym94LXNoYWRvdzogNXB4IDVweCAxMHB4IGJsdWU7XHJcbn1cclxuLm1lbnVjYXJkLmFjdGl2ZSB7XHJcblx0Ym94LXNoYWRvdzogNXB4IDVweCA2cHggdmlvbGV0O1xyXG5cdGJvcmRlcjogMXB4IHNvbGlkIHZpb2xldDtcclxufVxyXG4ubWVudWNhcmQuYWN0aXZlOmhvdmVyIHtcclxuXHRib3gtc2hhZG93OiA1cHggNXB4IDZweCB2aW9sZXQ7XHJcbn1cclxuXHJcbi5tZW51Y2FyZCA+IGRpdiB7XHJcblx0ZGlzcGxheTogZmxleDtcclxuXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcblx0d2lkdGg6IGNhbGMoMTAwJSAtIDQwcHgpO1xyXG5cdHBhZGRpbmc6IDBweCAyMHB4O1xyXG59XHJcblxyXG4uaW5ncmVkaWVudHMge1xyXG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHR0b3A6IDk5JTtcclxuXHRib3JkZXI6IDFweCBzb2xpZCBibHVlO1xyXG5cdGJvcmRlci10b3A6IG5vbmU7XHJcblx0dHJhbnNmb3JtLW9yaWdpbjogdG9wO1xyXG5cdGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xyXG5cdGhlaWdodDogNjBweDtcclxuXHR6LWluZGV4OiAyO1xyXG5cdHRyYW5zZm9ybTogc2NhbGVZKDApO1xyXG5cdHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjJzO1xyXG59XHJcbi5tZW51Y2FyZC5hY3RpdmUgLmluZ3JlZGllbnRzIHtcclxuXHRib3JkZXI6IDFweCBzb2xpZCB2aW9sZXQ7XHJcblx0Ym9yZGVyLXRvcDogbm9uZTtcclxuXHR6LWluZGV4OiAyO1xyXG5cdGJveC1zaGFkb3c6IDVweCA1cHggNnB4IHZpb2xldDtcclxuXHR0cmFuc2Zvcm06IHNjYWxlWSgxKTtcclxufVxyXG5cclxuLyogQ29udGFjdCBzdHlsaW5nICovXHJcbi5jb250YWN0IHtcclxuXHRjb2xvcjogd2hpdGU7XHJcblx0ZGlzcGxheTogZmxleDtcclxuXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cdGdhcDogMTBweDtcclxuXHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcbi5jb250YWN0IGltZyB7XHJcblx0d2lkdGg6IDNyZW07XHJcblx0aGVpZ2h0OiAzcmVtO1xyXG59XHJcblxyXG4uY29udGFjdGNhcmQge1xyXG5cdGRpc3BsYXk6IGZsZXg7XHJcblx0bWFyZ2luOiAyMHB4O1xyXG5cdHBhZGRpbmc6IDEwcHg7XHJcblx0bWF4LXdpZHRoOiAyNXJlbTtcclxuXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcblx0YmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjMpO1xyXG5cdGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcblx0Ym94LXNoYWRvdzogMHB4IDBweCA1cHggNXB4IGN5YW47XHJcblx0Z2FwOiAxMHB4O1xyXG5cdGZvbnQtc2l6ZTogMnJlbTtcclxuXHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4vKiBIZWFkZXIgRm9vdGVyICovXHJcbmhlYWRlcixcclxuZm9vdGVyIHtcclxuXHRkaXNwbGF5OiBmbGV4O1xyXG5cdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbn1cclxuaGVhZGVyID4gZGl2LFxyXG5mb290ZXIge1xyXG5cdHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG5cdGZvbnQtc2l6ZTogNTBweDtcclxuXHRkaXNwbGF5OiBmbGV4O1xyXG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcblx0Y29sb3I6IHdoaXRlO1xyXG5cdGhlaWdodDogODBweDtcclxuXHRnYXA6IDIwcHg7XHJcbn1cclxuZm9vdGVyIGRpdiB7XHJcblx0Zm9udC1zaXplOiAycmVtO1xyXG5cdG1heC1oZWlnaHQ6IDgwcHg7XHJcbn1cclxuaGVhZGVyID4gZGl2ID4gaW1nIHtcclxuXHRwb2ludGVyLWV2ZW50czogbm9uZTtcclxuXHR1c2VyLXNlbGVjdDogbm9uZTtcclxufVxyXG4jYnV0dG9ucyB7XHJcblx0bWFyZ2luOiAwcHg7XHJcblx0cGFkZGluZzogMHB4O1xyXG5cdGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcclxuXHRkaXNwbGF5OiBmbGV4O1xyXG5cdGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0Z2FwOiA1cHg7XHJcblx0Zm9udC1zaXplOiAzNXB4O1xyXG5cdGZvbnQtZmFtaWx5OiBcIkxvYnN0ZXJcIiwgc2Fucy1zZXJpZjtcclxuXHRwYWRkaW5nOiAwcHggMTBweDtcclxufVxyXG4jYnV0dG9ucyBsaSB7XHJcblx0ZGlzcGxheTogZmxleDtcclxuXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdGNvbG9yOiB3aGl0ZTtcclxuXHRtYXJnaW46IDBweDtcclxuXHRwYWRkaW5nOiAwcHg7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogYmx1ZTtcclxuXHRmbGV4OiAxO1xyXG5cdGhlaWdodDogNjBweDtcclxuXHRjdXJzb3I6IGRlZmF1bHQ7XHJcblx0Ym9yZGVyLXJhZGl1czogMHB4IDBweCAyMHB4IDIwcHg7XHJcblx0dGV4dC1zaGFkb3c6IDRweCA0cHggYmxhY2s7XHJcblx0Ym94LXNoYWRvdzogbm9uZTtcclxuXHR0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDEwcywgYm94LXNoYWRvdyAxcztcclxufVxyXG4jYnV0dG9ucyBsaTpob3ZlciB7XHJcblx0dHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAxcztcclxuXHR0ZXh0LXNoYWRvdzogNHB4IDRweCB2aW9sZXQ7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogIzI0MTU3MTtcclxufVxyXG51bCBsaTpob3ZlciB7XHJcblx0ei1pbmRleDogMTtcclxuXHRib3gtc2hhZG93OiAwcHggMHB4IDEwcHggMTBweCBjeWFuICFpbXBvcnRhbnQ7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogdmlvbGV0O1xyXG5cdHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMnM7XHJcbn1cclxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvQ1NTL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFLQTs7Q0FFQyxZQUFZO0NBQ1osV0FBVztDQUNYLFlBQVk7Q0FDWix1QkFBdUI7Q0FDdkIsb0NBQW9DO0NBQ3BDLDRDQUE0QztDQUM1QyxrQkFBa0I7QUFDbkI7O0FBRUE7Q0FDQyxvQ0FBb0M7Q0FDcEMsZUFBZTtBQUNoQjs7QUFFQTtDQUNDLGFBQWE7Q0FDYixzQkFBc0I7Q0FDdEIsc0JBQXNCO0FBQ3ZCO0FBQ0E7Q0FDQyxZQUFZO0NBQ1osV0FBVztBQUNaO0FBQ0E7Q0FDQyxhQUFhO0NBQ2Isc0JBQXNCO0NBQ3RCLG1CQUFtQjtDQUNuQixZQUFZO0NBQ1osT0FBTztDQUNQLHVCQUF1QjtDQUN2QixXQUFXO0FBQ1o7QUFDQTtDQUNDLGVBQWU7Q0FDZixrQ0FBa0M7Q0FDbEMsV0FBVztDQUNYO2tCQUNpQjtBQUNsQjtBQUNBO0NBQ0Msb0NBQW9DO0NBQ3BDLE9BQU87Q0FDUCx3QkFBd0I7Q0FDeEIsYUFBYTtDQUNiLHNCQUFzQjtDQUN0Qiw2QkFBNkI7Q0FDN0IsbUJBQW1CO0NBQ25CLGlCQUFpQjtDQUNqQixZQUFZO0FBQ2I7O0FBRUEsVUFBVTtBQUNWO0NBQ0MsYUFBYTtDQUNiLHNCQUFzQjtDQUN0QixtQkFBbUI7Q0FDbkIsdUJBQXVCO0NBQ3ZCLGtCQUFrQjtDQUNsQixXQUFXLEVBQUU7Z0JBQ0U7QUFDaEI7QUFDQTtDQUNDLG9DQUFvQztDQUNwQyxVQUFVO0NBQ1YsWUFBWTtDQUNaLFdBQVc7QUFDWjtBQUNBO0NBQ0MsZ0JBQWdCO0NBQ2hCLGVBQWU7Q0FDZiw2QkFBNkI7Q0FDN0IsaUJBQWlCO0FBQ2xCO0FBQ0E7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a0I7QUFDbEI7O0NBRUMsYUFBYTtDQUNiLHNCQUFzQjtBQUN2QjtBQUNBOztDQUVDLG9CQUFvQjtDQUNwQixlQUFlO0NBQ2YsYUFBYTtDQUNiLG1CQUFtQjtDQUNuQix1QkFBdUI7Q0FDdkIsdUJBQXVCO0NBQ3ZCLFlBQVk7Q0FDWixZQUFZO0NBQ1osU0FBUztBQUNWO0FBQ0E7Q0FDQyxlQUFlO0NBQ2YsZ0JBQWdCO0FBQ2pCO0FBQ0E7Q0FDQyxvQkFBb0I7Q0FDcEIsaUJBQWlCO0FBQ2xCO0FBQ0E7Q0FDQyxXQUFXO0NBQ1gsWUFBWTtDQUNaLHFCQUFxQjtDQUNyQixhQUFhO0NBQ2IsNkJBQTZCO0NBQzdCLG1CQUFtQjtDQUNuQixRQUFRO0NBQ1IsZUFBZTtDQUNmLGtDQUFrQztDQUNsQyxpQkFBaUI7QUFDbEI7QUFDQTtDQUNDLGFBQWE7Q0FDYix1QkFBdUI7Q0FDdkIsbUJBQW1CO0NBQ25CLFlBQVk7Q0FDWixXQUFXO0NBQ1gsWUFBWTtDQUNaLHNCQUFzQjtDQUN0QixPQUFPO0NBQ1AsWUFBWTtDQUNaLGVBQWU7Q0FDZixnQ0FBZ0M7Q0FDaEMsMEJBQTBCO0NBQzFCLGdCQUFnQjtDQUNoQiwrQ0FBK0M7QUFDaEQ7QUFDQTtDQUNDLCtCQUErQjtDQUMvQiwyQkFBMkI7Q0FDM0IseUJBQXlCO0FBQzFCO0FBQ0E7Q0FDQyxVQUFVO0NBQ1YsNkNBQTZDO0NBQzdDLHdCQUF3QjtDQUN4QiwrQkFBK0I7QUFDaENcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCB1cmwoXFxcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9R2ErTWFhbWxpJmRpc3BsYXk9c3dhcFxcXCIpO1xcclxcbkBpbXBvcnQgdXJsKFxcXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUxvYnN0ZXImZGlzcGxheT1zd2FwXFxcIik7XFxyXFxuQGltcG9ydCB1cmwoXFxcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Q2F2ZWF0OndnaHRANDAwLi43MDAmZGlzcGxheT1zd2FwXFxcIik7XFxyXFxuQGltcG9ydCB1cmwoXFxcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9WWFub25lK0thZmZlZXNhdHo6d2dodEAyMDAuLjcwMCZkaXNwbGF5PXN3YXBcXFwiKTtcXHJcXG5cXHJcXG5odG1sLFxcclxcbmJvZHkge1xcclxcblxcdHBhZGRpbmc6IDBweDtcXHJcXG5cXHRtYXJnaW46IDBweDtcXHJcXG5cXHRoZWlnaHQ6IDEwMCU7XFxyXFxuXFx0YmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxyXFxuXFx0LyogZm9udC1mYW1pbHk6IFxcXCJDYXZlYXRcXFwiLCBjdXJzaXZlOyAqL1xcclxcblxcdGZvbnQtZmFtaWx5OiBcXFwiWWFub25lIEthZmZlZXNhdHpcXFwiLCBzYW5zLXNlcmlmO1xcclxcblxcdGZvbnQtc2l6ZTogMS4xNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuaGVhZGVyID4gZGl2IHtcXHJcXG5cXHRmb250LWZhbWlseTogXFxcIkdhIE1hYW1saVxcXCIsIHNhbnMtc2VyaWY7XFxyXFxuXFx0Zm9udC1zaXplOiA2MHB4O1xcclxcbn1cXHJcXG5cXHJcXG4jY29udGVudCB7XFxyXFxuXFx0ZGlzcGxheTogZmxleDtcXHJcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcblxcdGJhY2tncm91bmQtY29sb3I6ICM0NDQ7XFxyXFxufVxcclxcbi5jb250ZW50Qm9keSB7XFxyXFxuXFx0cGFkZGluZzogMHB4O1xcclxcblxcdG1hcmdpbjogMHB4O1xcclxcbn1cXHJcXG4uY29udGVudEJvZHkgPiBkaXYge1xcclxcblxcdGRpc3BsYXk6IGZsZXg7XFxyXFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcclxcblxcdGhlaWdodDogYXV0bztcXHJcXG5cXHRmbGV4OiAxO1xcclxcblxcdHBhZGRpbmc6IDEwcHggMjBweCAyMHB4O1xcclxcblxcdG1hcmdpbjogMHB4O1xcclxcbn1cXHJcXG4uY29udGVudEJvZHkgPiBkaXYgPiBoMSB7XFxyXFxuXFx0Zm9udC1zaXplOiA0cmVtO1xcclxcblxcdGZvbnQtZmFtaWx5OiBcXFwiTG9ic3RlclxcXCIsIHNhbnMtc2VyaWY7XFxyXFxuXFx0bWFyZ2luOiAwcHg7XFxyXFxuXFx0dGV4dC1zaGFkb3c6IDBweCA1cHggMXB4IGJsdWUsIDVweCAwcHggMXB4IHZpb2xldCwgLTVweCAwcHggMXB4IG9yYW5nZSxcXHJcXG5cXHRcXHQwcHggLTVweCAxcHggcmVkO1xcclxcbn1cXHJcXG4uY29udGVudEJvZHkgPiBkaXYgPiBkaXYge1xcclxcblxcdGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KTtcXHJcXG5cXHRmbGV4OiAxO1xcclxcblxcdHdpZHRoOiBjYWxjKDEwMCUgLSAxNXB4KTtcXHJcXG5cXHRkaXNwbGF5OiBmbGV4O1xcclxcblxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuXFx0LyoganVzdGlmeS1jb250ZW50OiBjZW50ZXI7ICovXFxyXFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG5cXHRwYWRkaW5nOiAwcHggMTVweDtcXHJcXG5cXHRjb2xvcjogd2hpdGU7XFxyXFxufVxcclxcblxcclxcbi8qIEFib3V0ICovXFxyXFxuLmFib3V0IHtcXHJcXG5cXHRkaXNwbGF5OiBmbGV4O1xcclxcblxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG5cXHR3aWR0aDogZml0LWNvbnRlbnQ7XFxyXFxuXFx0bWFyZ2luOiAwcHg7IC8qIFxcclxcblxcdHBhZGRpbmc6IDBweDsgKi9cXHJcXG59XFxyXFxuLnBhcmFncmFwaENvbnRhaW5lciB7XFxyXFxuXFx0YmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjYpO1xcclxcblxcdHotaW5kZXg6IDE7XFxyXFxuXFx0cGFkZGluZzogMHB4O1xcclxcblxcdG1hcmdpbjogMHB4O1xcclxcbn1cXHJcXG4uYWJvdXQgcCB7XFxyXFxuXFx0bWF4LXdpZHRoOiA5MDBweDtcXHJcXG5cXHRmb250LXNpemU6IDMwcHg7XFxyXFxuXFx0dGV4dC1zaGFkb3c6IDFweCAxcHggMXB4IGJsdWU7XFxyXFxuXFx0cGFkZGluZzogMHB4IDIwcHg7XFxyXFxufVxcclxcbi5hYm91dCBoMiB7XFxyXFxuXFx0Zm9udC1zaXplOiA1MHB4O1xcclxcblxcdG1hcmdpbi1ib3R0b206IDBweDtcXHJcXG59XFxyXFxuXFxyXFxuLm9mZmVycyB7XFxyXFxuXFx0bGlzdC1zdHlsZTogbm9uZTtcXHJcXG5cXHRkaXNwbGF5OiBmbGV4O1xcclxcblxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuXFx0YWxpZ24taXRlbXM6IHN0YXJ0O1xcclxcblxcdC8qIGFsaWduLWl0ZW1zOiBzdGFydDsgKi9cXHJcXG5cXHRnYXA6IDEwcHg7XFxyXFxufVxcclxcblxcclxcbi5vZmZlcnMgPiBsaSB7XFxyXFxuXFx0cGFkZGluZzogNXB4IDEwcHg7XFxyXFxuXFx0Ym9yZGVyLXJhZGl1czogNXB4O1xcclxcblxcdGZvbnQtc2l6ZTogMzBweDtcXHJcXG5cXHQvKiB0ZXh0LXNoYWRvdzogNHB4IDRweCAxMHB4IGJsdWU7ICovXFxyXFxuXFx0Y3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uaW1hZ2VHYWwge1xcclxcblxcdGRpc3BsYXk6IGZsZXg7XFxyXFxuXFx0d2lkdGg6IGZpdC1jb250ZW50O1xcclxcblxcdHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXHJcXG5cXHR0cmFuc2Zvcm0tb3JpZ2luOiB0b3A7XFxyXFxuXFx0bWFyZ2luOiAwcHggNDBweDtcXHJcXG5cXHRwYWRkaW5nOiAxMHB4IDIwcHg7XFxyXFxuXFx0Ym94LXNoYWRvdzogMnB4IDJweCA2cHggYmx1ZTtcXHJcXG5cXHRib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcblxcdHRyYW5zZm9ybTogc2NhbGVZKDEsIDEpO1xcclxcblxcdHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjhzO1xcclxcblxcdHotaW5kZXg6IDI7XFxyXFxufVxcclxcbi5pbWFnZUdhbC50cmFuc2l0aW9uaW5nIHtcXHJcXG5cXHR0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zcztcXHJcXG5cXHR0cmFuc2Zvcm06IHNjYWxlKDAsIDEpO1xcclxcbn1cXHJcXG4uaW1hZ2VHYWwuaW5hY3RpdmUge1xcclxcblxcdG9wYWNpdHk6IDA7XFxyXFxuXFx0dHJhbnNmb3JtOiBzY2FsZSgwLjAxLCAxKTtcXHJcXG5cXHRwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxufVxcclxcbi5pbWFnZUdhbCA+IGltZyB7XFxyXFxuXFx0d2lkdGg6IGNsYW1wKDM0MHB4LCA0MCUsIDYwMHB4KTtcXHJcXG5cXHRoZWlnaHQ6IGF1dG87XFxyXFxuXFx0bWF4LWhlaWdodDogMzQwcHg7XFxyXFxuXFx0Ym9yZGVyLXJhZGl1czogMHB4IDMwcHggMzBweCAwcHg7XFxyXFxuXFx0Ym94LXNoYWRvdzogMnB4IDBweCA1cHggdmlvbGV0O1xcclxcbn1cXHJcXG4uaW1hZ2VHYWwgPiBkaXYge1xcclxcblxcdG1pbi13aWR0aDogMzQwcHg7XFxyXFxufVxcclxcblxcclxcbi5hYm91dENvbnRlbnQge1xcclxcblxcdGRpc3BsYXk6IGZsZXg7XFxyXFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcclxcblxcdHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG5cXHRwYWRkaW5nOiAwcHg7XFxyXFxuXFx0bWFyZ2luOiAwcHg7XFxyXFxufVxcclxcbi5hYm91dENvbnRlbnQgPiBoMSB7XFxyXFxuXFx0dGV4dC1zaGFkb3c6IDVweCA1cHggMTBweCByZWQsIC01cHggLTVweCAxMHB4IHJlZDtcXHJcXG5cXHRmb250LXNpemU6IDQwcHg7XFxyXFxufVxcclxcbi5hYm91dENvbnRlbnQgPiBkaXYge1xcclxcblxcdHRleHQtc2hhZG93OiA1cHggNXB4IDEwcHggdmlvbGV0O1xcclxcblxcdGZvbnQtc2l6ZTogY2FsYygxLjV2dyArIDEwcHgpO1xcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgLyogKG1pbi13aWR0aDogNzYwcHgpIGFuZCAqLyhtYXgtd2lkdGg6IDkwMHB4KSB7XFxyXFxuXFx0LmltYWdlR2FsIHtcXHJcXG5cXHRcXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcblxcdFxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuXFx0fVxcclxcbn1cXHJcXG5AbWVkaWEgKG1heC13aWR0aDogNzYwcHgpIHtcXHJcXG5cXHQuYWJvdXQgPiBoMiB7XFxyXFxuXFx0XFx0dGV4dC1hbGlnbjogY2VudGVyO1xcclxcblxcdFxcdGZvbnQtc2l6ZTogY2FsYyg2dncgKyA1cHgpO1xcclxcblxcdFxcdG1heC13aWR0aDogMzYwcHg7XFxyXFxuXFx0XFx0bWFyZ2luOiAyMHB4IDBweDtcXHJcXG5cXHR9XFxyXFxuXFx0LmltYWdlR2FsIHtcXHJcXG5cXHRcXHRtYXJnaW46IDBweDtcXHJcXG5cXHRcXHRwYWRkaW5nOiAyMHB4IDBweDtcXHJcXG5cXHRcXHRtaW4td2lkdGg6IDM2MHB4O1xcclxcblxcdFxcdHdpZHRoOiAxMDAlO1xcclxcblxcdH1cXHJcXG5cXHQuaW1hZ2VHYWwgPiBpbWcge1xcclxcblxcdFxcdGJvcmRlci1yYWRpdXM6IDBweCAwcHggMzBweCAzMHB4O1xcclxcblxcdFxcdGJveC1zaGFkb3c6IDBweCAycHggNXB4IHZpb2xldDtcXHJcXG5cXHR9XFxyXFxuXFx0LmNvbnRlbnRCb2R5ID4gZGl2IHtcXHJcXG5cXHRcXHR3aWR0aDogMTAwdncgIWltcG9ydGFudDtcXHJcXG5cXHRcXHRwYWRkaW5nOiAwcHg7XFxyXFxuXFx0XFx0bWFyZ2luOiAwcHg7XFxyXFxuXFx0fVxcclxcblxcdC5hYm91dENvbnRlbnQgPiBkaXYge1xcclxcblxcdFxcdGZvbnQtc2l6ZTogMjBweDtcXHJcXG5cXHR9XFxyXFxuXFx0LmNvbnRlbnRCb2R5ID4gZGl2ID4gZGl2IHtcXHJcXG5cXHRcXHRwYWRkaW5nOiAwcHggNXB4O1xcclxcblxcdH1cXHJcXG59XFxyXFxuXFxyXFxuLyogTWVudSBTdHlsaW5nICovXFxyXFxuLm1lbnUge1xcclxcblxcdHBhZGRpbmc6IDMwcHggNDBweCAhaW1wb3J0YW50O1xcclxcblxcdHdpZHRoOiBjYWxjKDEwMCUgLSA4MHB4KSAhaW1wb3J0YW50O1xcclxcbn1cXHJcXG4ubWVudSA+IGRpdiB7XFxyXFxuXFx0d2lkdGg6IDEwMCU7XFxyXFxuXFx0ZGlzcGxheTogZ3JpZDtcXHJcXG5cXHRncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpbGwsIG1pbm1heCgzMDBweCwgMWZyKSk7XFxyXFxuXFx0Z2FwOiAzMHB4O1xcclxcblxcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbn1cXHJcXG4ubWVudWNhcmQge1xcclxcblxcdGRpc3BsYXk6IGZsZXg7XFxyXFxuXFx0cG9pbnRlci1ldmVudHM6IGFsbDtcXHJcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuXFx0Ym9yZGVyOiAxcHggc29saWQgYmx1ZTtcXHJcXG5cXHRwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuXFx0YmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxyXFxuXFx0LyogbWF4LXdpZHRoOiA0NTBweDsgKi9cXHJcXG59XFxyXFxuLm1lbnVjYXJkOmhvdmVyIHtcXHJcXG5cXHRib3gtc2hhZG93OiA1cHggNXB4IDEwcHggYmx1ZTtcXHJcXG59XFxyXFxuLm1lbnVjYXJkLmFjdGl2ZSB7XFxyXFxuXFx0Ym94LXNoYWRvdzogNXB4IDVweCA2cHggdmlvbGV0O1xcclxcblxcdGJvcmRlcjogMXB4IHNvbGlkIHZpb2xldDtcXHJcXG59XFxyXFxuLm1lbnVjYXJkLmFjdGl2ZTpob3ZlciB7XFxyXFxuXFx0Ym94LXNoYWRvdzogNXB4IDVweCA2cHggdmlvbGV0O1xcclxcbn1cXHJcXG5cXHJcXG4ubWVudWNhcmQgPiBkaXYge1xcclxcblxcdGRpc3BsYXk6IGZsZXg7XFxyXFxuXFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcblxcdHdpZHRoOiBjYWxjKDEwMCUgLSA0MHB4KTtcXHJcXG5cXHRwYWRkaW5nOiAwcHggMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmluZ3JlZGllbnRzIHtcXHJcXG5cXHRwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuXFx0dG9wOiA5OSU7XFxyXFxuXFx0Ym9yZGVyOiAxcHggc29saWQgYmx1ZTtcXHJcXG5cXHRib3JkZXItdG9wOiBub25lO1xcclxcblxcdHRyYW5zZm9ybS1vcmlnaW46IHRvcDtcXHJcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXHJcXG5cXHRoZWlnaHQ6IDYwcHg7XFxyXFxuXFx0ei1pbmRleDogMjtcXHJcXG5cXHR0cmFuc2Zvcm06IHNjYWxlWSgwKTtcXHJcXG5cXHR0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4ycztcXHJcXG59XFxyXFxuLm1lbnVjYXJkLmFjdGl2ZSAuaW5ncmVkaWVudHMge1xcclxcblxcdGJvcmRlcjogMXB4IHNvbGlkIHZpb2xldDtcXHJcXG5cXHRib3JkZXItdG9wOiBub25lO1xcclxcblxcdHotaW5kZXg6IDI7XFxyXFxuXFx0Ym94LXNoYWRvdzogNXB4IDVweCA2cHggdmlvbGV0O1xcclxcblxcdHRyYW5zZm9ybTogc2NhbGVZKDEpO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBDb250YWN0IHN0eWxpbmcgKi9cXHJcXG4uY29udGFjdCB7XFxyXFxuXFx0Y29sb3I6IHdoaXRlO1xcclxcblxcdGRpc3BsYXk6IGZsZXg7XFxyXFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG5cXHRnYXA6IDEwcHg7XFxyXFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuLmNvbnRhY3QgaW1nIHtcXHJcXG5cXHR3aWR0aDogM3JlbTtcXHJcXG5cXHRoZWlnaHQ6IDNyZW07XFxyXFxufVxcclxcblxcclxcbi5jb250YWN0Y2FyZCB7XFxyXFxuXFx0ZGlzcGxheTogZmxleDtcXHJcXG5cXHRtYXJnaW46IDIwcHg7XFxyXFxuXFx0cGFkZGluZzogMTBweDtcXHJcXG5cXHRtYXgtd2lkdGg6IDI1cmVtO1xcclxcblxcdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMyk7XFxyXFxuXFx0Ym9yZGVyLXJhZGl1czogMjBweDtcXHJcXG5cXHRib3gtc2hhZG93OiAwcHggMHB4IDVweCA1cHggY3lhbjtcXHJcXG5cXHRnYXA6IDEwcHg7XFxyXFxuXFx0Zm9udC1zaXplOiAycmVtO1xcclxcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi8qIEhlYWRlciBGb290ZXIgKi9cXHJcXG5oZWFkZXIsXFxyXFxuZm9vdGVyIHtcXHJcXG5cXHRkaXNwbGF5OiBmbGV4O1xcclxcblxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxufVxcclxcbmhlYWRlciA+IGRpdixcXHJcXG5mb290ZXIge1xcclxcblxcdHBvaW50ZXItZXZlbnRzOiBub25lO1xcclxcblxcdGZvbnQtc2l6ZTogNTBweDtcXHJcXG5cXHRkaXNwbGF5OiBmbGV4O1xcclxcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuXFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuXFx0YmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxyXFxuXFx0Y29sb3I6IHdoaXRlO1xcclxcblxcdGhlaWdodDogODBweDtcXHJcXG5cXHRnYXA6IDIwcHg7XFxyXFxufVxcclxcbmZvb3RlciBkaXYge1xcclxcblxcdGZvbnQtc2l6ZTogMnJlbTtcXHJcXG5cXHRtYXgtaGVpZ2h0OiA4MHB4O1xcclxcbn1cXHJcXG5oZWFkZXIgPiBkaXYgPiBpbWcge1xcclxcblxcdHBvaW50ZXItZXZlbnRzOiBub25lO1xcclxcblxcdHVzZXItc2VsZWN0OiBub25lO1xcclxcbn1cXHJcXG4jYnV0dG9ucyB7XFxyXFxuXFx0bWFyZ2luOiAwcHg7XFxyXFxuXFx0cGFkZGluZzogMHB4O1xcclxcblxcdGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXHJcXG5cXHRkaXNwbGF5OiBmbGV4O1xcclxcblxcdGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcclxcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuXFx0Z2FwOiA1cHg7XFxyXFxuXFx0Zm9udC1zaXplOiAzNXB4O1xcclxcblxcdGZvbnQtZmFtaWx5OiBcXFwiTG9ic3RlclxcXCIsIHNhbnMtc2VyaWY7XFxyXFxuXFx0cGFkZGluZzogMHB4IDEwcHg7XFxyXFxufVxcclxcbiNidXR0b25zIGxpIHtcXHJcXG5cXHRkaXNwbGF5OiBmbGV4O1xcclxcblxcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuXFx0Y29sb3I6IHdoaXRlO1xcclxcblxcdG1hcmdpbjogMHB4O1xcclxcblxcdHBhZGRpbmc6IDBweDtcXHJcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiBibHVlO1xcclxcblxcdGZsZXg6IDE7XFxyXFxuXFx0aGVpZ2h0OiA2MHB4O1xcclxcblxcdGN1cnNvcjogZGVmYXVsdDtcXHJcXG5cXHRib3JkZXItcmFkaXVzOiAwcHggMHB4IDIwcHggMjBweDtcXHJcXG5cXHR0ZXh0LXNoYWRvdzogNHB4IDRweCBibGFjaztcXHJcXG5cXHRib3gtc2hhZG93OiBub25lO1xcclxcblxcdHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMTBzLCBib3gtc2hhZG93IDFzO1xcclxcbn1cXHJcXG4jYnV0dG9ucyBsaTpob3ZlciB7XFxyXFxuXFx0dHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAxcztcXHJcXG5cXHR0ZXh0LXNoYWRvdzogNHB4IDRweCB2aW9sZXQ7XFxyXFxuXFx0YmFja2dyb3VuZC1jb2xvcjogIzI0MTU3MTtcXHJcXG59XFxyXFxudWwgbGk6aG92ZXIge1xcclxcblxcdHotaW5kZXg6IDE7XFxyXFxuXFx0Ym94LXNoYWRvdzogMHB4IDBweCAxMHB4IDEwcHggY3lhbiAhaW1wb3J0YW50O1xcclxcblxcdGJhY2tncm91bmQtY29sb3I6IHZpb2xldDtcXHJcXG5cXHR0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDJzO1xcclxcbn1cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IFwiLi4vQ1NTL3N0eWxlLmNzc1wiO1xyXG5pbXBvcnQgaW1hZ2UxIGZyb20gXCIuLi9JbWFnZXMvQWJvdXQvaW5kb29ycy1pbWFnZS5qcGdcIjtcclxuaW1wb3J0IGltYWdlMiBmcm9tIFwiLi4vSW1hZ2VzL0Fib3V0L291dGRvb3JzLWltYWdlLmpwZ1wiO1xyXG5pbXBvcnQgaW1hZ2UzIGZyb20gXCIuLi9JbWFnZXMvQWJvdXQvY29va2luZy1pbWFnZS5qcGdcIjtcclxuXHJcbmxldCBjdXJyZW50SW5kZXggPSAwO1xyXG5sZXQgaW50ZXJ2YWxJZDtcclxuLy9mdW5jdGlvbiBtYWluQ29udGVudFxyXG5mdW5jdGlvbiBpbWFnZShsaW5rKSB7XHJcblx0bGV0IHRlbXBlbGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xyXG5cdHRlbXBlbGUuc3JjID0gbGluaztcclxuXHRyZXR1cm4gdGVtcGVsZTtcclxufVxyXG5cclxuZnVuY3Rpb24gaW1hZ2VHYWxsZXJ5VGV4dCh0aXRsZSwgdGV4dCkge1xyXG5cdGxldCB0ZW1wZWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuXHR0ZW1wZWxlLmNsYXNzTGlzdC5hZGQoXCJhYm91dENvbnRlbnRcIik7XHJcblx0bGV0IGgxVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XHJcblx0aDFUaXRsZS50ZXh0Q29udGVudCA9IHRpdGxlO1xyXG5cdHRlbXBlbGUuYXBwZW5kQ2hpbGQoaDFUaXRsZSk7XHJcblx0bGV0IHRleHRDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuXHR0ZXh0Q29udGVudC50ZXh0Q29udGVudCA9IHRleHQ7XHJcblx0dGVtcGVsZS5hcHBlbmRDaGlsZCh0ZXh0Q29udGVudCk7XHJcblxyXG5cdHJldHVybiB0ZW1wZWxlO1xyXG59XHJcblxyXG5mdW5jdGlvbiBpbWFnZUdhbGxlcnlPYmplY3QobGluaywgdGl0bGUsIHRleHQsIGFjdGl2ZSA9IHRydWUpIHtcclxuXHRsZXQgdGVtcGVsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcblxyXG5cdHRlbXBlbGUuY2xhc3NMaXN0LmFkZChcImltYWdlR2FsXCIpO1xyXG5cdGFjdGl2ZSA9PSB0cnVlXHJcblx0XHQ/IHRlbXBlbGUuY2xhc3NMaXN0LnRvZ2dsZShcImluYWN0aXZlXCIsICFhY3RpdmUpXHJcblx0XHQ6IHRlbXBlbGUuY2xhc3NMaXN0LnRvZ2dsZShcImluYWN0aXZlXCIsICFhY3RpdmUpO1xyXG5cclxuXHR0ZW1wZWxlLmFwcGVuZENoaWxkKGltYWdlKGxpbmspKTtcclxuXHR0ZW1wZWxlLmFwcGVuZENoaWxkKGltYWdlR2FsbGVyeVRleHQodGl0bGUsIHRleHQpKTtcclxuXHJcblx0cmV0dXJuIHRlbXBlbGU7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGltYWdlR2FsbGVyeSgpIHtcclxuXHRsZXQgdGVtcGVsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcblx0dGVtcGVsZS5hcHBlbmRDaGlsZChcclxuXHRcdGltYWdlR2FsbGVyeU9iamVjdChcclxuXHRcdFx0aW1hZ2UxLFxyXG5cdFx0XHRcIkluZG9vcnMgTG91bmdlXCIsXHJcblx0XHRcdFwiT3VyIGJpc3RybyBvZmZlcnMgYSBjYWxtIGFuZCBwbGVhc2FudCBlbnZpcm9ubWVudCwgcGVyZmVjdCBmb3IgcmVsYXhpbmcgYW5kIGVuam95aW5nIGEgbWVhbC4gT24gd2Vla2VuZHMsIHdlIGVuaGFuY2UgdGhpcyBleHBlcmllbmNlIHdpdGggbGl2ZSBtdXNpYyBwZXJmb3JtYW5jZXMgYnkgZGlmZmVyZW50IGFtYXRldXIgc2luZ2Vycy4gVGhlc2UgcGVyZm9ybWFuY2VzIHN0YXJ0IGFmdGVyIDk6MDAgUE0sIGNyZWF0aW5nIGEgZGVsaWdodGZ1bCBhdG1vc3BoZXJlIGZvciBvdXIgZ3Vlc3RzIHRvIHVud2luZCBhbmQgZW5qb3kgdGhlaXIgZXZlbmluZy4gV2hldGhlciB5b3UncmUgbG9va2luZyBmb3IgYSBxdWlldCBkaW5uZXIgb3IgYSBuaWdodCBvdXQgd2l0aCBmcmllbmRzLCBvdXIgYmlzdHJvIGlzIHRoZSBpZGVhbCBwbGFjZSB0byBiZVwiXHJcblx0XHQpXHJcblx0KTtcclxuXHR0ZW1wZWxlLmFwcGVuZENoaWxkKFxyXG5cdFx0aW1hZ2VHYWxsZXJ5T2JqZWN0KFxyXG5cdFx0XHRpbWFnZTIsXHJcblx0XHRcdFwiT3V0ZG9vcnMgc3BhY2VcIixcclxuXHRcdFx0XCJBdCBvdXIgYmlzdHJvLCB5b3UgY2FuIGVuam95IG91ciBvdXRkb29yIHNwYWNlIHdpdGggYmVhdXRpZnVsIHNjZW5lcnkgYW5kIGZyZXNoIGFpci4gSXQncyB0aGUgcGVyZmVjdCBwbGFjZSBmb3IgYSByb21hbnRpYyBkaW5uZXIgb3IganVzdCB0byByZWxheCBhbmQgZW5qb3kgdGhlIG91dGRvb3JzLiBQaWN0dXJlIHlvdXJzZWxmIGRpbmluZyBvdXRzaWRlLCBzdXJyb3VuZGVkIGJ5IG5hdHVyZSwgd2hpbGUgeW91IGVuam95IG91ciBkZWxpY2lvdXMgZm9vZCBhbmQgZHJpbmtzLiBDb21lIHNlZSB3aHkgb3VyIGJpc3RybyBpcyBhIGdyZWF0IHNwb3QgdG8gdW53aW5kIGFuZCBjb25uZWN0IHdpdGggb3RoZXJzIGluIGEgbG92ZWx5IG91dGRvb3Igc2V0dGluZy5cIixcclxuXHRcdFx0ZmFsc2VcclxuXHRcdClcclxuXHQpO1xyXG5cdHRlbXBlbGUuYXBwZW5kQ2hpbGQoXHJcblx0XHRpbWFnZUdhbGxlcnlPYmplY3QoXHJcblx0XHRcdGltYWdlMyxcclxuXHRcdFx0XCJLaXRjaGVuXCIsXHJcblx0XHRcdFwiQXQgb3VyIGJpc3Rybywgb3VyIGJpZ2dlc3Qgc2VsbGluZyBwb2ludCBpcyBvdXIgZm9vZC4gT3VyIGV4cGVyaWVuY2VkIGNoZWZzIHRha2UgcHJpZGUgaW4gcHJlcGFyaW5nIHRoZSBiZXN0IGRpc2hlcyBmb3IgeW91IGluIGEgY2xlYW4gYW5kIHdlbGNvbWluZyBlbnZpcm9ubWVudC4gRWFjaCBtZWFsIGlzIGNyYWZ0ZWQgd2l0aCBjYXJlIGFuZCBhdHRlbnRpb24gdG8gZGV0YWlsLCBlbnN1cmluZyB0aGF0IGV2ZXJ5IGJpdGUgaXMgZGVsaWNpb3VzLiBPdXIgbWVudSBmZWF0dXJlcyBhIHZhcmlldHkgb2Ygb3B0aW9ucywgYWxsIG1hZGUgZnJvbSBoaWdoLXF1YWxpdHkgaW5ncmVkaWVudHMuIFdoZXRoZXIgeW91J3JlIGhlcmUgZm9yIGEgcXVpY2sgbHVuY2ggb3IgYSBzcGVjaWFsIGRpbm5lciwgeW91J2xsIGZpbmQgc29tZXRoaW5nIHRvIGxvdmUuIENvbWUgYW5kIGV4cGVyaWVuY2UgdGhlIGV4Y2VwdGlvbmFsIGZvb2QgYW5kIHdhcm0gYXRtb3NwaGVyZSB0aGF0IG1ha2Ugb3VyIGJpc3RybyBhIGZhdm9yaXRlIHNwb3QgZm9yIG1hbnkuXCIsXHJcblx0XHRcdGZhbHNlXHJcblx0XHQpXHJcblx0KTtcclxuXHJcblx0cmV0dXJuIHRlbXBlbGU7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIG9mZmVySXRlbSh0ZXh0LCBjb2xvcikge1xyXG5cdGxldCBvZmZlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcclxuXHRvZmZlci50ZXh0Q29udGVudCA9IHRleHQ7XHJcblx0b2ZmZXIuc3R5bGUudGV4dFNoYWRvdyA9IFwiNHB4IDRweCAxNXB4IFwiICsgY29sb3I7XHJcblx0cmV0dXJuIG9mZmVyO1xyXG59XHJcblxyXG5mdW5jdGlvbiB3aGF0V2VvZmZlcigpIHtcclxuXHRsZXQgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuXHRsZXQgc3ViVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIik7XHJcblxyXG5cdGxldCB0ZW1wZWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInVsXCIpO1xyXG5cdHRlbXBlbGUuY2xhc3NMaXN0LmFkZChcIm9mZmVyc1wiKTtcclxuXHJcblx0dGVtcGVsZS5hcHBlbmRDaGlsZChvZmZlckl0ZW0oXCJFdmVyeSB3ZWVrZW5kOiAyNC83XCIsIFwiYmx1ZVwiKSk7XHJcblx0dGVtcGVsZS5hcHBlbmRDaGlsZChvZmZlckl0ZW0oXCJNaWRuaWdodDogMTI6MDBBTX4wNjowMEFNXCIsIFwidmlvbGV0XCIpKTtcclxuXHR0ZW1wZWxlLmFwcGVuZENoaWxkKG9mZmVySXRlbShcIkx1bmNoIFNldHM6IDAxOjAwUE1+MDI6MDBQTVwiLCBcIm9yYW5nZVwiKSk7XHJcblxyXG5cdHN1YlRpdGxlLnRleHRDb250ZW50ID0gXCJXZSBvZmZlciBkaXNjb3VudGVkIHNldHMgb246XCI7XHJcblxyXG5cdGNvbnRhaW5lci5hcHBlbmRDaGlsZChzdWJUaXRsZSk7XHJcblx0Y29udGFpbmVyLmFwcGVuZENoaWxkKHRlbXBlbGUpO1xyXG5cclxuXHRyZXR1cm4gY29udGFpbmVyO1xyXG59XHJcblxyXG5mdW5jdGlvbiBhYm91dEluZm9QYXJhZ3JhcGgodGV4dCkge1xyXG5cdGxldCB0ZW1wZWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcblx0dGVtcGVsZS5pbm5lckhUTUwgPSB0ZXh0O1xyXG5cdHJldHVybiB0ZW1wZWxlO1xyXG59XHJcblxyXG5mdW5jdGlvbiBwYXJhZ3JhcGhDb250YWluZXIodGV4dHMpIHtcclxuXHRsZXQgdGVtcGVsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcblx0dGVtcGVsZS5jbGFzc0xpc3QuYWRkKFwicGFyYWdyYXBoQ29udGFpbmVyXCIpO1xyXG5cdGZvciAobGV0IHRleHQgb2YgdGV4dHMpIHtcclxuXHRcdHRlbXBlbGUuYXBwZW5kQ2hpbGQoYWJvdXRJbmZvUGFyYWdyYXBoKHRleHQpKTtcclxuXHR9XHJcblx0cmV0dXJuIHRlbXBlbGU7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFib3V0KCkge1xyXG5cdGxldCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuXHRsZXQgdGVtcGVsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcblx0bGV0IGlubmVyRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcblx0Y3VycmVudEluZGV4ID0gMDtcclxuXHJcblx0aWYgKGludGVydmFsSWQpIHtcclxuXHRcdGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWxJZCk7XHJcblx0fVxyXG5cdGlubmVyRWxlbWVudC5jbGFzc0xpc3QuYWRkKFwiYWJvdXRcIik7XHJcblx0aW5uZXJFbGVtZW50LmlubmVySFRNTCA9IGA8aDI+QmlzdHJvIFJvY2tldEFlbGx5LjwvaDI+XHJcblx0YDtcclxuXHJcblx0aW5uZXJFbGVtZW50LmFwcGVuZENoaWxkKFxyXG5cdFx0cGFyYWdyYXBoQ29udGFpbmVyKFtcclxuXHRcdFx0XCJXZWxjb21lIHRvIEJpc3RybyBSb2NrZXRBbGxleSwgYSBjb3JuZXJzdG9uZSBvZiBjdWxpbmFyeSBleGNlbGxlbmNlIG5lc3RsZWQgaW4gdGhlIGhlYXJ0IG9mIFtDaXR5XS4gRm91bmRlZCBvbiBbRm91bmRpbmcgRGF0ZV0sIG91ciBlc3RhYmxpc2htZW50IGhhcyBiZWVuIGEgYmVhY29uIG9mIHdhcm10aCBhbmQgaG9zcGl0YWxpdHkgZm9yIG92ZXIgYSBkZWNhZGUuIEZyb20gdGhlIGRheSB3ZSBvcGVuZWQgb3VyIGRvb3JzLCB3ZSd2ZSBoYWQgdGhlIHBsZWFzdXJlIG9mIHNlcnZpbmcgY291bnRsZXNzIGd1ZXN0cywgZWFjaCBsZWF2aW5nIHdpdGggYSBtZW1vcmFibGUgZGluaW5nIGV4cGVyaWVuY2UuXCIsXHJcblx0XHRcdFwiT3VyIGpvdXJuZXkgYmVnYW4gd2l0aCBhIHNpbXBsZSB5ZXQgcHJvZm91bmQgdmlzaW9uOiB0byBjcmVhdGUgYSBwbGFjZSB3aGVyZSBwZW9wbGUgY291bGQgY29tZSB0b2dldGhlciB0byBlbmpveSBleGNlcHRpb25hbCBmb29kIGluIGEgd2VsY29taW5nIGFuZCB2aWJyYW50IGF0bW9zcGhlcmUuIFdlIGJlbGlldmUgdGhhdCBkaW5pbmcgaXMgbm90IGp1c3QgYWJvdXQgdGhlIGZvb2Qgb24gdGhlIHBsYXRlIGJ1dCBhbHNvIGFib3V0IHRoZSBleHBlcmllbmNlLCB0aGUgYW1iaWFuY2UsIGFuZCB0aGUgY29ubmVjdGlvbnMgbWFkZSBhcm91bmQgdGhlIHRhYmxlLiBUaGlzIHBoaWxvc29waHkgaGFzIGd1aWRlZCB1cyBzaW5jZSBvdXIgaW5jZXB0aW9uIGFuZCBjb250aW51ZXMgdG8gYmUgdGhlIGNvcm5lcnN0b25lIG9mIG91ciBzdWNjZXNzLlwiLFxyXG5cdFx0XSlcclxuXHQpO1xyXG5cclxuXHRpbm5lckVsZW1lbnQuYXBwZW5kQ2hpbGQoaW1hZ2VHYWxsZXJ5KCkpO1xyXG5cclxuXHRpbm5lckVsZW1lbnQuYXBwZW5kQ2hpbGQoXHJcblx0XHRwYXJhZ3JhcGhDb250YWluZXIoW1xyXG5cdFx0XHRcIkFzIHdlIGxvb2sgdG8gdGhlIGZ1dHVyZSwgd2UgcmVtYWluIGNvbW1pdHRlZCB0byB1cGhvbGRpbmcgdGhlIGhpZ2ggc3RhbmRhcmRzIHRoYXQgaGF2ZSBkZWZpbmVkIEJpc3RybyBSb2NrZXRBbGxleSBmcm9tIHRoZSBiZWdpbm5pbmcuIFdlIGFyZSBjb250aW51YWxseSBldm9sdmluZywgc2Vla2luZyBuZXcgd2F5cyB0byBlbmhhbmNlIG91ciBtZW51LCBpbXByb3ZlIG91ciBzZXJ2aWNlLCBhbmQgcHJvdmlkZSBhbiBleGNlcHRpb25hbCBkaW5pbmcgZXhwZXJpZW5jZS5cIixcclxuXHRcdFx0XCJBcyB3ZSBsb29rIHRvIHRoZSBmdXR1cmUsIHdlIHJlbWFpbiBjb21taXR0ZWQgdG8gdXBob2xkaW5nIHRoZSBoaWdoIHN0YW5kYXJkcyB0aGF0IGhhdmUgZGVmaW5lZCBCaXN0cm8gUm9ja2V0QWxsZXkgZnJvbSB0aGUgYmVnaW5uaW5nLiBXZSBhcmUgY29udGludWFsbHkgZXZvbHZpbmcsIHNlZWtpbmcgbmV3IHdheXMgdG8gZW5oYW5jZSBvdXIgbWVudSwgaW1wcm92ZSBvdXIgc2VydmljZSwgYW5kIHByb3ZpZGUgYW4gZXhjZXB0aW9uYWwgZGluaW5nIGV4cGVyaWVuY2UuXCIsXHJcblx0XHRdKVxyXG5cdCk7XHJcblxyXG5cdGlubmVyRWxlbWVudC5hcHBlbmRDaGlsZCh3aGF0V2VvZmZlcigpKTtcclxuXHJcblx0bGV0IGgxVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcclxuXHRoMVRleHQudGV4dENvbnRlbnQgPSBcIkFib3V0XCI7XHJcblxyXG5cdHRlbXBlbGUuYXBwZW5kQ2hpbGQoaW5uZXJFbGVtZW50KTtcclxuXHRlbGVtZW50LmFwcGVuZENoaWxkKGgxVGV4dCk7XHJcblx0ZWxlbWVudC5hcHBlbmRDaGlsZCh0ZW1wZWxlKTtcclxuXHRpbnRlcnZhbElkID0gc2V0SW50ZXJ2YWwoYW5pbWF0ZUdhbGxlcnksIDEwMDAwKTtcclxuXHRyZXR1cm4gZWxlbWVudDtcclxufVxyXG5cclxuZnVuY3Rpb24gYW5pbWF0ZUdhbGxlcnkoKSB7XHJcblx0bGV0IGFycmF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5pbWFnZUdhbFwiKTtcclxuXHJcblx0YXJyYXlbY3VycmVudEluZGV4XS5jbGFzc0xpc3QudG9nZ2xlKFwidHJhbnNpdGlvbmluZ1wiLCB0cnVlKTtcclxuXHRzZXRUaW1lb3V0KCgpID0+IHtcclxuXHRcdGFycmF5W2N1cnJlbnRJbmRleF0uY2xhc3NMaXN0LnRvZ2dsZShcImluYWN0aXZlXCIsIHRydWUpO1xyXG5cdFx0YXJyYXlbY3VycmVudEluZGV4XS5jbGFzc0xpc3QudG9nZ2xlKFwidHJhbnNpdGlvbmluZ1wiLCBmYWxzZSk7XHJcblx0XHRjdXJyZW50SW5kZXggPSAoY3VycmVudEluZGV4ICsgMSkgJSBhcnJheS5sZW5ndGg7XHJcblx0XHRhcnJheVtjdXJyZW50SW5kZXhdLmNsYXNzTGlzdC50b2dnbGUoXCJpbmFjdGl2ZVwiLCBmYWxzZSk7XHJcblx0fSwgMzAwKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgYWJvdXQ7XHJcbiIsImltcG9ydCBcIi4uL0NTUy9zdHlsZS5jc3NcIjtcclxuaW1wb3J0IGNhbGwgZnJvbSBcIi4uL0ltYWdlcy9jb250YWN0L2NhbGwuc3ZnXCI7XHJcbmltcG9ydCBsb2NhdGlvbiBmcm9tIFwiLi4vSW1hZ2VzL2NvbnRhY3QvbG9jYXRpb24uc3ZnXCI7XHJcbmltcG9ydCB0aW1lIGZyb20gXCIuLi9JbWFnZXMvY29udGFjdC90aW1lLnN2Z1wiO1xyXG5cclxuZnVuY3Rpb24gY3JlYXRlQ2FyZChzeW1ib2wsIHRleHQpIHtcclxuXHRsZXQgdGVtcGVsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcblx0dGVtcGVsZS5jbGFzc0xpc3QuYWRkKFwiY29udGFjdGNhcmRcIik7XHJcblxyXG5cdGxldCBpbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XHJcblx0aW1hZ2Uuc3JjID0gc3ltYm9sO1xyXG5cdGltYWdlLmFsdCA9IFwibnVtYmVyXCI7XHJcblxyXG5cdHRlbXBlbGUuYXBwZW5kQ2hpbGQoaW1hZ2UpO1xyXG5cdHRlbXBlbGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUodGV4dCkpO1xyXG5cclxuXHRyZXR1cm4gdGVtcGVsZTtcclxufVxyXG5cclxuZnVuY3Rpb24gY29udGFjdCgpIHtcclxuXHRsZXQgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcblx0bGV0IG9wdGlvblRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XHJcblx0b3B0aW9uVGV4dC5pbm5lckhUTUwgPSBcIkNvbnRhY3RcIjtcclxuXHRlbGVtZW50LmFwcGVuZENoaWxkKG9wdGlvblRleHQpO1xyXG5cclxuXHRsZXQgbWFpbmNsYXNzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuXHRtYWluY2xhc3MuY2xhc3NMaXN0LmFkZChcImNvbnRhY3RcIik7XHJcblx0ZWxlbWVudC5hcHBlbmRDaGlsZChtYWluY2xhc3MpO1xyXG5cdG1haW5jbGFzcy5hcHBlbmRDaGlsZChjcmVhdGVDYXJkKGNhbGwsIFwiKDIyMikgNTU1LTEyLTM0LTU2XCIpKTtcclxuXHRtYWluY2xhc3MuYXBwZW5kQ2hpbGQoXHJcblx0XHRjcmVhdGVDYXJkKFxyXG5cdFx0XHRsb2NhdGlvbixcclxuXHRcdFx0XCJUaGUgU2F2b3J5IFNwb29uLCA0NTYgRmxhdm9yIFN0cmVldCwgWXVtc3ZpbGxlLCBHYXN0cm9ub21pYSwgOTg3NjUsIFdvbmRlcmxhbmRcIlxyXG5cdFx0KVxyXG5cdCk7XHJcblx0bWFpbmNsYXNzLmFwcGVuZENoaWxkKGNyZWF0ZUNhcmQodGltZSwgXCJPcGVuIDI0LzdcIikpO1xyXG5cclxuXHRyZXR1cm4gZWxlbWVudDtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29udGFjdDtcclxuIiwiaW1wb3J0IFwiLi4vQ1NTL3N0eWxlLmNzc1wiO1xyXG5pbXBvcnQgZm9vZDAgZnJvbSBcIi4uL0ltYWdlcy9NZW51L2Zvb2QwLmpwZ1wiO1xyXG5pbXBvcnQgZm9vZDEgZnJvbSBcIi4uL0ltYWdlcy9NZW51L2Zvb2QxLmpwZ1wiO1xyXG5pbXBvcnQgZm9vZDIgZnJvbSBcIi4uL0ltYWdlcy9NZW51L2Zvb2QyLmpwZ1wiO1xyXG5pbXBvcnQgZm9vZDMgZnJvbSBcIi4uL0ltYWdlcy9NZW51L2Zvb2QzLmpwZ1wiO1xyXG5pbXBvcnQgZm9vZDQgZnJvbSBcIi4uL0ltYWdlcy9NZW51L2Zvb2Q0LmpwZ1wiO1xyXG5pbXBvcnQgZm9vZDUgZnJvbSBcIi4uL0ltYWdlcy9NZW51L2Zvb2Q1LmpwZ1wiO1xyXG5pbXBvcnQgZm9vZDYgZnJvbSBcIi4uL0ltYWdlcy9NZW51L2Zvb2Q2LmpwZ1wiO1xyXG5pbXBvcnQgZm9vZDcgZnJvbSBcIi4uL0ltYWdlcy9NZW51L2Zvb2Q3LmpwZ1wiO1xyXG5pbXBvcnQgZm9vZDggZnJvbSBcIi4uL0ltYWdlcy9NZW51L2Nlc2FyLXNhbGFkLmpwZ1wiO1xyXG5pbXBvcnQgZm9vZDkgZnJvbSBcIi4uL0ltYWdlcy9NZW51L3RvbWF0by1Pbmlvbi5qcGdcIjtcclxuXHJcbmxldCBtZW51SXRlbXMgPSB7XHJcblx0YWRqYXJ1bGlLaGFjaGFwdXJpOiB7XHJcblx0XHRuYW1lOiBcIkFkamFydWxpIEtoYWNoYXB1cmlcIixcclxuXHRcdHBpY3R1cmU6IGZvb2QwLFxyXG5cdFx0cHJpY2U6IFwiMTUuMDAkXCIsXHJcblx0XHRjb250YWluczogXCJyYXcgZWdncywgY2hlZXNlLCBidXR0ZXIsIHdoZWF0IGZsb3VyXCIsXHJcblx0fSxcclxuXHRjaGlja2VuU2FsYWQ6IHtcclxuXHRcdG5hbWU6IFwiQ2hpY2tlbiBTYWxhZFwiLFxyXG5cdFx0cGljdHVyZTogZm9vZDEsXHJcblx0XHRwcmljZTogXCIxMC4wMCRcIixcclxuXHRcdGNvbnRhaW5zOiBcImNoY2lja2VuIEJyZWFzdCwgTWF5b25laXNzZSwgQmxhY2sgcGVwcGVyLCBCZWxsIHBhcGVyLlwiLFxyXG5cdH0sXHJcblx0a2hpa2FsaToge1xyXG5cdFx0bmFtZTogXCJLaGlua2FsaVwiLFxyXG5cdFx0cGljdHVyZTogZm9vZDIsXHJcblx0XHRwcmljZTogXCIyJFwiLFxyXG5cdFx0Y29udGFpbnM6IFwiV2hlYXQgZmxvdXIsIHBvcmsgYW5kIGJlZWYgbWl4ZWQgZ3JvdW5kIG1lYXRcIixcclxuXHR9LFxyXG5cdGNyZWFtUHVmZjoge1xyXG5cdFx0bmFtZTogXCJDcmVhbSBQdWZmXCIsXHJcblx0XHRwaWN0dXJlOiBmb29kMyxcclxuXHRcdHByaWNlOiBcIjIkXCIsXHJcblx0XHRjb250YWluczogXCJNaWxrIGNyZWFtLCBTdWdnYXIsIFdoZWF0IGZsb3VyLCBFZ2dzXCIsXHJcblx0fSxcclxuXHRzbW9rZWRQb3JrTWVhdDoge1xyXG5cdFx0bmFtZTogXCJTbW9rZWQgUG9yayBNZWF0XCIsXHJcblx0XHRwaWN0dXJlOiBmb29kNCxcclxuXHRcdHByaWNlOiBcIjMwJFwiLFxyXG5cdFx0Y29udGFpbnM6IFwiUG9yayB0aGlnaFwiLFxyXG5cdH0sXHJcblx0c2FzdWFnZToge1xyXG5cdFx0bmFtZTogXCJTYXVzYWdlXCIsXHJcblx0XHRwaWN0dXJlOiBmb29kNSxcclxuXHRcdHByaWNlOiBcIjE3JFwiLFxyXG5cdFx0Y29udGFpbnM6XHJcblx0XHRcdFwiTWl4ZWQgbWVhdCBwb3JrIGFuZCBiZWVmLCBQZXByaWthLCBPbmlvbiwgUG9tZWdyYW5hdGUsIEJsYWNrIHBhcHBlclwiLFxyXG5cdH0sXHJcblx0c2tld2VyZWRNZWF0OiB7XHJcblx0XHRuYW1lOiBcIlNrZXdlcmVkIFBvcmsgTWVhdFwiLFxyXG5cdFx0cGljdHVyZTogZm9vZDYsXHJcblx0XHRwcmljZTogXCIyNSRcIixcclxuXHRcdGNvbnRhaW5zOiBcIlBvcmsgbWVhdCwgT25pb24sIFBvbWVncmFuYXRlLCBCbGFjayBwZXBwZXIsIEdhcmxpYyBwb3dkZXJcIixcclxuXHR9LFxyXG5cdG9saXZlczoge1xyXG5cdFx0bmFtZTogXCJPbGl2ZXNcIixcclxuXHRcdHBpY3R1cmU6IGZvb2Q3LFxyXG5cdFx0cHJpY2U6IFwiNSRcIixcclxuXHRcdGNvbnRhaW5zOiBcIk9saXZlc1wiLFxyXG5cdH0sXHJcblx0Y2VzYXI6IHtcclxuXHRcdG5hbWU6IFwiQ2VzYXIgU2FsYWRcIixcclxuXHRcdHBpY3R1cmU6IGZvb2Q4LFxyXG5cdFx0cHJpY2U6IFwiMjAuMDAkXCIsXHJcblx0XHRjb250YWluczpcclxuXHRcdFx0XCJCYXplbCwgQ2hpY2tlbiBicmVhc3QsIEJyZWFkIGNydW1icywgT2xpdmVzLCBMZXR0dWNlLCBWaW5lZ2FyLCBHcmF0ZWQgcGFybWVqYW5cIixcclxuXHR9LFxyXG5cdHRvbWF0b1NhbGFkOiB7XHJcblx0XHRuYW1lOiBcIlRvbWF0byBTYWxhZFwiLFxyXG5cdFx0cGljdHVyZTogZm9vZDksXHJcblx0XHRwcmljZTogXCIxMC4wMCRcIixcclxuXHRcdGNvbnRhaW5zOiBcIlRvbWF0bywgT25pb24sIEJhemVsLCBPbGl2ZSBvaWxcIixcclxuXHR9LFxyXG59O1xyXG5cclxubGV0IGFjdGl2ZUVsZW1lbnQgPSBudWxsO1xyXG5cclxuZnVuY3Rpb24gbWVudUl0ZW1DYXJkKG9iamVjdCwgbmFtZSkge1xyXG5cdGxldCB0ZW1wZWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuXHR0ZW1wZWxlLmNsYXNzTGlzdC5hZGQoXCJtZW51Y2FyZFwiKTtcclxuXHRsZXQgdGV4dF9pdGVtcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcblx0bGV0IGluZ3JlZGllbnRzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuXHRpbmdyZWRpZW50cy5jbGFzc0xpc3QuYWRkKFwiaW5ncmVkaWVudHNcIik7XHJcblx0bGV0IGNvcHl0ZXh0ID0gbmFtZTtcclxuXHJcblx0aW5ncmVkaWVudHMudGV4dENvbnRlbnQgPSBvYmplY3QuY29udGFpbnM7XHJcblxyXG5cdGxldCBpbWcgPSBuZXcgSW1hZ2UoKTtcclxuXHRpbWcuc3JjID0gb2JqZWN0LnBpY3R1cmU7XHJcblx0aW1nLnN0eWxlLmhlaWdodCA9IFwiMjUwcHhcIjtcclxuXHRpbWcuc3R5bGUud2lkdGggPSBcImNsYW1wKDMwMHB4LDEwMCUsIDQ1MHB4KVwiO1xyXG5cclxuXHR0ZW1wZWxlLmFwcGVuZENoaWxkKGltZyk7XHJcblxyXG5cdGxldCB0ZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcblx0dGV4dC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShgJHtvYmplY3QubmFtZX1gKSk7XHJcblx0bGV0IHByaWNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcblx0cHJpY2UudGV4dENvbnRlbnQgPSBvYmplY3QucHJpY2U7XHJcblx0cHJpY2Uuc3R5bGUuY29sb3IgPSBcIiNjNWU5MGJcIjtcclxuXHRwcmljZS5zdHlsZS50ZXh0U2hhZG93ID0gXCI1cHggNXB4IDFweCAjMjY1ODBmXCI7XHJcblxyXG5cdHRleHRfaXRlbXMuYXBwZW5kQ2hpbGQodGV4dCk7XHJcblx0dGV4dF9pdGVtcy5hcHBlbmRDaGlsZChwcmljZSk7XHJcblxyXG5cdHRlbXBlbGUuYXBwZW5kQ2hpbGQodGV4dF9pdGVtcyk7XHJcblx0dGVtcGVsZS5hcHBlbmRDaGlsZChpbmdyZWRpZW50cyk7XHJcblx0LyogXHJcblx0Y29uc29sZS5sb2coXCJBZGRpbmcgZXZlbnQgbGlzdGVuZXIgdG86IFwiLCBjb3B5dGV4dCk7ICovXHJcblxyXG5cdHRlbXBlbGUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuXHRcdGNvbnNvbGUubG9nKFwiQ2FyZCBjbGlja2VkOiBcIiwgY29weXRleHQpO1xyXG5cdFx0aWYgKGFjdGl2ZUVsZW1lbnQgJiYgYWN0aXZlRWxlbWVudCAhPT0gdGVtcGVsZSkge1xyXG5cdFx0XHRhY3RpdmVFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XHJcblx0XHR9XHJcblxyXG5cdFx0aWYgKGFjdGl2ZUVsZW1lbnQgPT09IHRlbXBlbGUpIHtcclxuXHRcdFx0dGVtcGVsZS5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xyXG5cdFx0XHRhY3RpdmVFbGVtZW50ID0gbnVsbDtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHRlbXBlbGUuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcclxuXHRcdFx0YWN0aXZlRWxlbWVudCA9IHRlbXBlbGU7XHJcblx0XHR9XHJcblx0fSk7XHJcblxyXG5cdHJldHVybiB0ZW1wZWxlO1xyXG59XHJcblxyXG5mdW5jdGlvbiBtZW51KCkge1xyXG5cdGxldCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuXHRsZXQgb3B0aW9uVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcclxuXHRvcHRpb25UZXh0LmlubmVySFRNTCA9IFwiTWVudVwiO1xyXG5cdGVsZW1lbnQuYXBwZW5kQ2hpbGQob3B0aW9uVGV4dCk7XHJcblxyXG5cdGxldCBjbGFzc2NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcblxyXG5cdGxldCBtYWluY2xhc3MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG5cdGNsYXNzY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJtZW51XCIpO1xyXG5cdGNsYXNzY29udGFpbmVyLmFwcGVuZENoaWxkKG1haW5jbGFzcyk7XHJcblx0ZWxlbWVudC5hcHBlbmRDaGlsZChjbGFzc2NvbnRhaW5lcik7XHJcblx0Zm9yIChsZXQgaXRlbSBpbiBtZW51SXRlbXMpIHtcclxuXHRcdG1haW5jbGFzcy5hcHBlbmRDaGlsZChtZW51SXRlbUNhcmQobWVudUl0ZW1zW2l0ZW1dLCBpdGVtKSk7XHJcblx0fVxyXG5cdHJldHVybiBlbGVtZW50O1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBtZW51O1xyXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICghc2NyaXB0VXJsIHx8ICEvXmh0dHAocz8pOi8udGVzdChzY3JpcHRVcmwpKSkgc2NyaXB0VXJsID0gc2NyaXB0c1tpLS1dLnNyYztcblx0XHR9XG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IG1lbnUgZnJvbSBcIi4vcGFnZXMvbWVudS5qc1wiO1xyXG5pbXBvcnQgYWJvdXQgZnJvbSBcIi4vcGFnZXMvYWJvdXQuanNcIjtcclxuaW1wb3J0IGNvbnRhY3QgZnJvbSBcIi4vcGFnZXMvY29udGFjdC5qc1wiO1xyXG5pbXBvcnQgXCIuL0NTUy9zdHlsZS5jc3NcIjtcclxuaW1wb3J0IHJvY2tldCBmcm9tIFwiLi9JbWFnZXMvUm9ja2V0LnN2Z1wiO1xyXG5cclxuY29uc3QgbWFpbkNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGVudFwiKTtcclxuY29uc3QgaGVhZGVyVGV4dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJoZWFkZXJcIikucXVlcnlTZWxlY3RvcihcImRpdlwiKTtcclxuY29uc3QgYnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYnV0dG9uc1wiKS5xdWVyeVNlbGVjdG9yQWxsKFwibGlcIik7XHJcblxyXG52YXIgY3VycmVudEJ1dHRvbiA9IFwiYWJvdXRcIjtcclxuXHJcbmZvciAobGV0IGkgPSAwOyBpIDwgYnV0dG9ucy5sZW5ndGg7IGkrKykge1xyXG5cdGJ1dHRvbnNbaV0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XHJcblx0XHRjdXJyZW50QnV0dG9uID0gZS50YXJnZXQuaWQ7XHJcblx0XHRjb21waWxlKCk7XHJcblx0fSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGZpcnN0Q29tcGlsZSgpIHtcclxuXHQvL3JvY2tldCBwaWN0dXJlXHJcblx0bGV0IHBpY3R1cmUgPSBuZXcgSW1hZ2UoKTtcclxuXHRwaWN0dXJlLnNyYyA9IHJvY2tldDtcclxuXHRwaWN0dXJlLnN0eWxlLmhlaWdodCA9IFwiODAlXCI7XHJcblx0aGVhZGVyVGV4dC5pbnNlcnRCZWZvcmUocGljdHVyZSwgaGVhZGVyVGV4dC5maXJzdENoaWxkKTtcclxuXHJcblx0Ly9jcmVhdGUgbmV3IGVsZW1lbnRcclxuXHRjb25zdCBtYWluRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcblx0Ly9jaGFuZ2UgY29udGVudCBvZiBpbm5lciBodG1sXHJcblx0bWFpbkVsZW1lbnQuYXBwZW5kQ2hpbGQoYWJvdXQoKSk7XHJcblx0bWFpbkVsZW1lbnQuY2xhc3NMaXN0LmFkZChcImNvbnRlbnRCb2R5XCIpO1xyXG5cdG1haW5FbGVtZW50LmlkID0gXCJtYWluY29udGVudFwiO1xyXG5cdC8vYWRkIGJlZm9yZSBmb290ZXJcclxuXHRtYWluQ29udGFpbmVyLmluc2VydEJlZm9yZShcclxuXHRcdG1haW5FbGVtZW50LFxyXG5cdFx0bWFpbkNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKFwiZm9vdGVyXCIpXHJcblx0KTtcclxufVxyXG5cclxuZnVuY3Rpb24gY29tcGlsZSgpIHtcclxuXHRjb25zdCBtYWluRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbWFpbmNvbnRlbnRcIik7XHJcblx0Y29uc29sZS5sb2coY3VycmVudEJ1dHRvbik7XHJcblx0c3dpdGNoIChjdXJyZW50QnV0dG9uKSB7XHJcblx0XHRjYXNlIFwiYWJvdXRcIjpcclxuXHRcdFx0bWFpbkVsZW1lbnQuaW5uZXJIVE1MID0gXCJcIjtcclxuXHRcdFx0bWFpbkVsZW1lbnQuYXBwZW5kQ2hpbGQoYWJvdXQoKSk7XHJcblx0XHRcdGJyZWFrO1xyXG5cdFx0Y2FzZSBcIm1lbnVcIjpcclxuXHRcdFx0bWFpbkVsZW1lbnQuaW5uZXJIVE1MID0gXCJcIjtcclxuXHRcdFx0bWFpbkVsZW1lbnQuYXBwZW5kQ2hpbGQobWVudSgpKTtcclxuXHRcdFx0YnJlYWs7XHJcblx0XHRjYXNlIFwiY29udGFjdFwiOlxyXG5cdFx0XHRtYWluRWxlbWVudC5pbm5lckhUTUwgPSBcIlwiO1xyXG5cdFx0XHRtYWluRWxlbWVudC5hcHBlbmRDaGlsZChjb250YWN0KCkpO1xyXG5cdFx0XHRicmVhaztcclxuXHRcdGRlZmF1bHQ6XHJcblx0XHRcdGNvbnNvbGUubG9nKFwibm90IGRlZmF1bHRcIik7XHJcblx0fVxyXG59XHJcblxyXG5maXJzdENvbXBpbGUoKTtcclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9
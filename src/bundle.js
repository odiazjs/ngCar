webpackJsonp([0],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _angular = __webpack_require__(1);
	
	var _angular2 = _interopRequireDefault(_angular);
	
	var _module2 = __webpack_require__(3);
	
	var _module3 = _interopRequireDefault(_module2);
	
	var _side = __webpack_require__(4);
	
	var _side2 = _interopRequireDefault(_side);
	
	__webpack_require__(5);
	
	var _header = __webpack_require__(7);
	
	var _header2 = _interopRequireDefault(_header);
	
	__webpack_require__(8);
	
	__webpack_require__(10);
	
	var _content = __webpack_require__(14);
	
	var _content2 = _interopRequireDefault(_content);
	
	__webpack_require__(15);
	
	__webpack_require__(20);
	
	__webpack_require__(21);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	//Services
	_angular2.default.bootstrap(document, ['ngCar']);
	
	//Factories

/***/ },
/* 1 */,
/* 2 */,
/* 3 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	var _module = angular.module('ngCar', ['ngMaterial']);
	
	exports.default = _module;

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.SideCtrl = undefined;
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _module2 = __webpack_require__(3);
	
	var _module3 = _interopRequireDefault(_module2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var SideCtrl = exports.SideCtrl = function () {
	    function SideCtrl(sideNavService, optionFactory) {
	        var _this = this;
	
	        _classCallCheck(this, SideCtrl);
	
	        this.sideNavService = sideNavService;
	        this.optionFactory = optionFactory;
	
	        this.options = this.sideNavService.getOptions().map(function (option) {
	            return _this.optionFactory(option);
	        });
	    }
	
	    _createClass(SideCtrl, [{
	        key: 'onMdListClick',
	        value: function onMdListClick(option) {
	            this.options.reduce(function (boolean, item) {
	                item.selected = false, option.selected = true;
	            }, false);
	        }
	    }]);
	
	    return SideCtrl;
	}();
	
	_module3.default.controller('SideCtrl', SideCtrl);

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _module2 = __webpack_require__(3);
	
	var _module3 = _interopRequireDefault(_module2);
	
	var _sideTemplate = __webpack_require__(6);
	
	var _sideTemplate2 = _interopRequireDefault(_sideTemplate);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	_module3.default.directive('sidenav', function () {
	    'ngInject';
	
	    return {
	        restrict: 'AE',
	        scope: true,
	        controllerAs: 'ctrl',
	        bindToController: true,
	        template: _sideTemplate2.default,
	        controller: 'SideCtrl'
	    };
	});

/***/ },
/* 6 */
/***/ function(module, exports) {

	module.exports = "<md-sidenav md-is-locked-open=\"true\" class=\"md-whiteframe-4dp\">\n            <md-list ng-repeat=\"option in ctrl.options\" ng-click=\"ctrl.onMdListClick(option)\">\n              <md-list-item ng-click=\"ctrl.onMdListClick(option)\"\n                            ng-class=\"option.selected ? 'selected' : ''\">\n                    <img ng-src=\"{{ option.img }}\" class=\"avatar\" \n                         ng-style=\"option.bgcolor\" \n                         ng-click=\"ctrl.onMdListClick(option)\"></img>\n              </md-list-item>\n          </md-list>\n</md-sidenav>\n\n\n\n    "

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.HeaderCtrl = undefined;
	
	var _module2 = __webpack_require__(3);
	
	var _module3 = _interopRequireDefault(_module2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var HeaderCtrl = exports.HeaderCtrl = function HeaderCtrl() {
	    _classCallCheck(this, HeaderCtrl);
	
	    this.greeting = 'asdfasdf';
	};
	
	_module3.default.controller('HeaderCtrl', HeaderCtrl);

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _module2 = __webpack_require__(3);
	
	var _module3 = _interopRequireDefault(_module2);
	
	var _headerTemplate = __webpack_require__(9);
	
	var _headerTemplate2 = _interopRequireDefault(_headerTemplate);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	_module3.default.directive('headerSection', function () {
	    'ngInject';
	
	    return {
	        restrict: 'AE',
	        scope: true,
	        controllerAs: 'ctrl',
	        bindToController: true,
	        template: _headerTemplate2.default,
	        controller: 'HeaderCtrl'
	    };
	});

/***/ },
/* 9 */
/***/ function(module, exports) {

	module.exports = "<md-toolbar>    \n\n</md-toolbar>"

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(11);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(13)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../node_modules/css-loader/index.js!./../node_modules/sass-loader/index.js!./app.scss", function() {
				var newContent = require("!!./../node_modules/css-loader/index.js!./../node_modules/sass-loader/index.js!./app.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(12)();
	// imports
	
	
	// module
	exports.push([module.id, ".radial {\n  background: -moz-radial-gradient(center, circle cover, #fff 0%, #fff 100%);\n  background: -webkit-gradient(radial, center center, 0px, center center, 100%, color-stop(0%, #fff), color-stop(100%, #fff));\n  background: -webkit-radial-gradient(center, circle cover, #fff 0%, #fff 100%);\n  background: -o-radial-gradient(center, circle cover, #fff 0%, #fff 100%);\n  background: -ms-radial-gradient(center, circle cover, #fff 0%, #fff 100%);\n  background: radial-gradient(center, circle cover, #fff 0%, #fff 100%);\n  background-color: #fff; }\n\nhtml, body {\n  font-family: 'Roboto', sans-serif;\n  font-size: 14px;\n  height: 100%;\n  margin: 0px;\n  padding: 0px; }\n\nmd-input-container {\n  font-size: 22px !important; }\n\n.md-whiteframe-0dp {\n  box-shadow: 0px 0px 0px transparent !important; }\n\n.transparent {\n  background-color: transparent; }\n\nimg:focus {\n  outline: 0; }\n\nlabel {\n  font-family: 'Roboto', sans-serif;\n  font-weight: bold; }\n\nmd-toolbar {\n  background-color: #de3641 !important;\n  margin: auto;\n  font-weight: 500;\n  height: 50px;\n  min-height: 50px;\n  max-height: 100px !important; }\n\nmd-sidenav, md-sidenav.md-locked-open, md-sidenav.md-closed.md-locked-open-add-active {\n  min-width: 150px !important;\n  width: 50vw !important;\n  max-width: 150px !important; }\n\nmd-content {\n  background-color: #fff !important; }\n\nmd-list-item > button {\n  width: 100%;\n  text-align: left !important; }\n\nmd-list-item.selected {\n  background-color: #ddd !important; }\n\n#content {\n  padding-left: 40px;\n  padding-right: 40px;\n  padding-top: 5px; }\n\n.avatar {\n  background-color: #84d8fd;\n  position: relative;\n  width: 165px;\n  height: 158px;\n  border: 1px solid #ddd;\n  border-radius: 50%;\n  display: inline-block;\n  overflow: hidden;\n  margin: 0px;\n  vertical-align: middle;\n  zoom: 0.70;\n  transform: translateZ(0);\n  -webkit-transform: scale(0.7);\n  -moz-transform: scale(0.7); }\n", ""]);
	
	// exports


/***/ },
/* 12 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];
	
		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};
	
		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];
	
	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}
	
		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();
	
		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";
	
		var styles = listToStyles(list);
		addStylesToDom(styles, options);
	
		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}
	
	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}
	
	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}
	
	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}
	
	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}
	
	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}
	
	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}
	
	function addStyle(obj, options) {
		var styleElement, update, remove;
	
		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}
	
		update(obj);
	
		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}
	
	var replaceText = (function () {
		var textStore = [];
	
		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();
	
	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;
	
		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}
	
	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;
		var sourceMap = obj.sourceMap;
	
		if(media) {
			styleElement.setAttribute("media", media)
		}
	
		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}
	
	function updateLink(linkElement, obj) {
		var css = obj.css;
		var media = obj.media;
		var sourceMap = obj.sourceMap;
	
		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}
	
		var blob = new Blob([css], { type: "text/css" });
	
		var oldSrc = linkElement.href;
	
		linkElement.href = URL.createObjectURL(blob);
	
		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.ContentCtrl = undefined;
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _module2 = __webpack_require__(3);
	
	var _module3 = _interopRequireDefault(_module2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var ContentCtrl = exports.ContentCtrl = function () {
	    function ContentCtrl() {
	        _classCallCheck(this, ContentCtrl);
	    }
	
	    _createClass(ContentCtrl, [{
	        key: 'areaClick',
	        value: function areaClick() {
	            console.log('asfasdfasdfs');
	        }
	    }]);
	
	    return ContentCtrl;
	}();
	
	_module3.default.controller('ContentCtrl', ContentCtrl);

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {'use strict';
	
	var _module2 = __webpack_require__(3);
	
	var _module3 = _interopRequireDefault(_module2);
	
	var _contentTemplate = __webpack_require__(19);
	
	var _contentTemplate2 = _interopRequireDefault(_contentTemplate);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	_module3.default.directive('contentSection', function ($timeout) {
	    'ngInject';
	
	    return {
	        restrict: 'AE',
	        scope: true,
	        controllerAs: 'ctrl',
	        bindToController: true,
	        template: _contentTemplate2.default,
	        controller: 'ContentCtrl',
	
	        link: function link(scope, el, attrs) {
	
	            $timeout(function () {
	
	                $('#car').mapster({
	                    staticState: true,
	                    fillOpacity: 0.4,
	                    fillColor: 'fadbb84',
	                    highlight: true,
	                    mapKey: 'name',
	                    showToolTip: true,
	                    scaleMap: false,
	                    toolTipClose: ["tooltip-click", "area-mouseout"],
	                    areas: [{
	                        key: 'Car',
	                        toolTip: 'Puerta frontal lado izquierdo.'
	                    }],
	                    onClick: function onClick(e) {}
	                });
	            }, 0);
	        }
	    };
	});
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(16)))

/***/ },
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */
/***/ function(module, exports) {

	module.exports = "<md-content class=\"md-padding\" layout-xs=\"column\" layout=\"row\">\n    <div flex-xs flex-gt-xs=\"100\" layout=\"column\">\n      <form name=\"userForm\">\n        <md-input-container>\n        <label>Title</label>\n        <input ng-model=\"user.title\">\n      </md-input-container>\n      <md-input-container>\n        <label>Email</label>\n        <input ng-model=\"user.email\" type=\"email\">\n      </md-input-container>\n      </form>\n    </div>\n</md-content>\n\n<div class=\"container md-whiteframe-0dp\">\n    <md-content class=\"md-padding md-whiteframe-0dp\" layout-xs=\"column\" layout=\"row\">\n        <md-card class=\"md-whiteframe-0dp\">\n            <img ng-src=\"https://s16.postimg.org/bxcz9r1yd/ngcarside.png\" class=\"md-card-image\" id=\"car\" usemap=\"#car-map\">\n                <map name=\"car-map\" ng-click=\"ctrl.areaClick()\">\n                    <area alt=\"LFdoor\" title=\"LFdoor\" name=\"Car\" href=\"#\" coords=\"236,164,245,140,435,126,429,150,429,253,241,261\" shape=\"poly\">\n                </map>\n        </md-card>\n    </md-content>\n</div>\n"

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.SideNavService = undefined;
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _module2 = __webpack_require__(3);
	
	var _module3 = _interopRequireDefault(_module2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var SideNavService = exports.SideNavService = function () {
	    function SideNavService() {
	        _classCallCheck(this, SideNavService);
	    }
	
	    _createClass(SideNavService, [{
	        key: 'getOptions',
	        value: function getOptions() {
	
	            return [{
	                id: 1,
	                display: 'Vista Lateral',
	                img: 'https://s18.postimg.org/im6m00rrd/carside.png',
	                bgcolor: { 'background-color': '#bbf5cb' }
	            }, {
	                id: 2,
	                display: 'Vista Frontal',
	                img: 'https://s17.postimg.org/8jtrdq7tr/carfront.png',
	                bgcolor: { 'background-color': '#fedfb5' }
	            }, {
	                id: 3,
	                display: 'Vista Trasera',
	                img: 'https://s18.postimg.org/7ffgnjyrt/carback.png',
	                bgcolor: { 'background-color': '#84d8fd' }
	            }];
	        }
	    }]);
	
	    return SideNavService;
	}();
	
	_module3.default.service('sideNavService', SideNavService);

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _module2 = __webpack_require__(3);
	
	var _module3 = _interopRequireDefault(_module2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var OptionFactory = function () {
	    function OptionFactory(model) {
	        _classCallCheck(this, OptionFactory);
	
	        this.id = model.id;
	        this.selected = false;
	        this.display = model.display;
	        this.img = model.img;
	        this.bgcolor = model.bgcolor;
	    }
	
	    _createClass(OptionFactory, null, [{
	        key: 'factory',
	        value: function factory() {
	            return function (model) {
	                return new OptionFactory(model);
	            };
	        }
	    }]);
	
	    return OptionFactory;
	}();
	
	exports.default = OptionFactory;
	
	
	_module3.default.factory('optionFactory', OptionFactory.factory);

/***/ }
]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vLy4vc2lkZS5jb250cm9sbGVyLmpzIiwid2VicGFjazovLy8uL3NpZGUuZGlyZWN0aXZlLmpzIiwid2VicGFjazovLy8uL3NpZGUudGVtcGxhdGUuaHRtbCIsIndlYnBhY2s6Ly8vLi9oZWFkZXIuY29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly8vLi9oZWFkZXIuZGlyZWN0aXZlLmpzIiwid2VicGFjazovLy8uL2hlYWRlci50ZW1wbGF0ZS5odG1sIiwid2VicGFjazovLy8uL2FwcC5zY3NzPzEwMTMiLCJ3ZWJwYWNrOi8vLy4vYXBwLnNjc3MiLCJ3ZWJwYWNrOi8vLy4uL34vY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanMiLCJ3ZWJwYWNrOi8vLy4uL34vc3R5bGUtbG9hZGVyL2FkZFN0eWxlcy5qcyIsIndlYnBhY2s6Ly8vLi9jb250ZW50LmNvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vY29udGVudC5kaXJlY3RpdmUuanMiLCJ3ZWJwYWNrOi8vLy4vY29udGVudC50ZW1wbGF0ZS5odG1sIiwid2VicGFjazovLy8uL3NpZGUuc2VydmljZS5qcyIsIndlYnBhY2s6Ly8vLi9vcHRpb24uZmFjdG9yeS5qcyJdLCJuYW1lcyI6WyJib290c3RyYXAiLCJkb2N1bWVudCIsIl9tb2R1bGUiLCJhbmd1bGFyIiwibW9kdWxlIiwiU2lkZUN0cmwiLCJzaWRlTmF2U2VydmljZSIsIm9wdGlvbkZhY3RvcnkiLCJvcHRpb25zIiwiZ2V0T3B0aW9ucyIsIm1hcCIsIm9wdGlvbiIsInJlZHVjZSIsImJvb2xlYW4iLCJpdGVtIiwic2VsZWN0ZWQiLCJjb250cm9sbGVyIiwiZGlyZWN0aXZlIiwicmVzdHJpY3QiLCJzY29wZSIsImNvbnRyb2xsZXJBcyIsImJpbmRUb0NvbnRyb2xsZXIiLCJ0ZW1wbGF0ZSIsIkhlYWRlckN0cmwiLCJncmVldGluZyIsIkNvbnRlbnRDdHJsIiwiY29uc29sZSIsImxvZyIsIiR0aW1lb3V0IiwibGluayIsImVsIiwiYXR0cnMiLCIkIiwibWFwc3RlciIsInN0YXRpY1N0YXRlIiwiZmlsbE9wYWNpdHkiLCJmaWxsQ29sb3IiLCJoaWdobGlnaHQiLCJtYXBLZXkiLCJzaG93VG9vbFRpcCIsInNjYWxlTWFwIiwidG9vbFRpcENsb3NlIiwiYXJlYXMiLCJrZXkiLCJ0b29sVGlwIiwib25DbGljayIsImUiLCJTaWRlTmF2U2VydmljZSIsImlkIiwiZGlzcGxheSIsImltZyIsImJnY29sb3IiLCJzZXJ2aWNlIiwiT3B0aW9uRmFjdG9yeSIsIm1vZGVsIiwiZmFjdG9yeSJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUVBOzs7O0FBQ0E7O0FBRUE7Ozs7QUFDQTs7QUFDQTs7QUFFQTs7OztBQUNBOztBQUdBOztBQUdBOzs7O0FBSkE7QUFNQSxtQkFBUUEsU0FBUixDQUFrQkMsUUFBbEIsRUFBNEIsQ0FBQyxPQUFELENBQTVCOztBQUhBLFk7Ozs7Ozs7Ozs7Ozs7QUNoQkEsS0FBSUMsVUFBV0MsUUFBUUMsTUFBUixDQUFlLE9BQWYsRUFBd0IsQ0FDbkMsWUFEbUMsQ0FBeEIsQ0FBZjs7bUJBSWVGLE87Ozs7Ozs7Ozs7Ozs7OztBQ0pmOzs7Ozs7OztLQUdhRyxRLFdBQUFBLFE7QUFFVCx1QkFBYUMsY0FBYixFQUE2QkMsYUFBN0IsRUFBNEM7QUFBQTs7QUFBQTs7QUFFeEMsY0FBS0QsY0FBTCxHQUFzQkEsY0FBdEI7QUFDQSxjQUFLQyxhQUFMLEdBQXNCQSxhQUF0Qjs7QUFFQSxjQUFLQyxPQUFMLEdBQ0ksS0FBS0YsY0FBTCxDQUFvQkcsVUFBcEIsR0FDS0MsR0FETCxDQUNTLFVBQUNDLE1BQUQsRUFBWTtBQUNiLG9CQUFPLE1BQUtKLGFBQUwsQ0FBbUJJLE1BQW5CLENBQVA7QUFDSCxVQUhMLENBREo7QUFLSDs7Ozt1Q0FFY0EsTSxFQUFRO0FBQ25CLGtCQUFLSCxPQUFMLENBQ0tJLE1BREwsQ0FDWSxVQUFDQyxPQUFELEVB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LEdBQWdCSSxNQUFNSixHQUF0QjtBQUNBLGNBQUtDLE9BQUwsR0FBZ0JHLE1BQU1ILE9BQXRCO0FBRUg7Ozs7bUNBRWlCO0FBQ2Qsb0JBQU8sVUFBQ0csS0FBRDtBQUFBLHdCQUFXLElBQUlELGFBQUosQ0FBa0JDLEtBQWxCLENBQVg7QUFBQSxjQUFQO0FBQ0g7Ozs7OzttQkFkZ0JELGE7OztBQWlCckIsa0JBQVFFLE9BQVIsQ0FBZ0IsZUFBaEIsRUFBaUNGLGNBQWNFLE9BQS9DLEUiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGFuZ3VsYXIgZnJvbSAnYW5ndWxhcidcbmltcG9ydCBfbW9kdWxlIGZyb20gJ21vZHVsZSdcblxuaW1wb3J0IFNpZGVDdHJsIGZyb20gJ3NpZGUuY29udHJvbGxlcidcbmltcG9ydCAnc2lkZS5kaXJlY3RpdmUnXG5cbmltcG9ydCBIZWFkZXJDdHJsIGZyb20gJ2hlYWRlci5jb250cm9sbGVyJ1xuaW1wb3J0ICdoZWFkZXIuZGlyZWN0aXZlJ1xuaW1wb3J0ICdhcHAuc2NzcydcblxuaW1wb3J0IENvbnRlbnRDdHJsIGZyb20gJ2NvbnRlbnQuY29udHJvbGxlcidcbmltcG9ydCAnY29udGVudC5kaXJlY3RpdmUnXG5cbi8vU2VydmljZXNcbmltcG9ydCAnc2lkZS5zZXJ2aWNlJ1xuXG4vL0ZhY3Rvcmllc1xuaW1wb3J0ICdvcHRpb24uZmFjdG9yeSdcblxuYW5ndWxhci5ib290c3RyYXAoZG9jdW1lbnQsIFsnbmdDYXInXSlcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL2luZGV4LmpzXG4gKiovIiwibGV0IF9tb2R1bGUgID0gYW5ndWxhci5tb2R1bGUoJ25nQ2FyJywgWyBcbiAgICAnbmdNYXRlcmlhbCdcbl0pXG5cbmV4cG9ydCBkZWZhdWx0IF9tb2R1bGVcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL21vZHVsZS5qc1xuICoqLyIsImltcG9ydCBfbW9kdWxlIGZyb20gJy4vbW9kdWxlJ1xuXG5cbmV4cG9ydCBjbGFzcyBTaWRlQ3RybCB7XG5cbiAgICBjb25zdHJ1Y3RvciAoc2lkZU5hdlNlcnZpY2UsIG9wdGlvbkZhY3RvcnkpIHtcblxuICAgICAgICB0aGlzLnNpZGVOYXZTZXJ2aWNlID0gc2lkZU5hdlNlcnZpY2VcbiAgICAgICAgdGhpcy5vcHRpb25GYWN0b3J5ICA9IG9wdGlvbkZhY3RvcnlcblxuICAgICAgICB0aGlzLm9wdGlvbnMgPSBcbiAgICAgICAgICAgIHRoaXMuc2lkZU5hdlNlcnZpY2UuZ2V0T3B0aW9ucygpXG4gICAgICAgICAgICAgICAgLm1hcCgob3B0aW9uKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLm9wdGlvbkZhY3Rvcnkob3B0aW9uKVxuICAgICAgICAgICAgICAgIH0pXG4gICAgfVxuXG4gICAgb25NZExpc3RDbGljayAob3B0aW9uKSB7XG4gICAgICAgIHRoaXMub3B0aW9uc1xuICAgICAgICAgICAgLnJlZHVjZSgoYm9vbGVhbiwgaXRlbSkgPT4ge1xuICAgICAgICAgICAgICAgIGl0ZW0uc2VsZWN0ZWQgPSBmYWxzZSwgb3B0aW9uLnNlbGVjdGVkID0gdHJ1ZVxuICAgICAgICAgICAgfSwgZmFsc2UpXG4gICAgfVxuXG59XG5cbl9tb2R1bGUuY29udHJvbGxlcignU2lkZUN0cmwnLCBTaWRlQ3RybClcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NpZGUuY29udHJvbGxlci5qc1xuICoqLyIsImltcG9ydCBfbW9kdWxlIGZyb20gJy4vbW9kdWxlJ1xuaW1wb3J0IHRlbXBsYXRlIGZyb20gJy4vc2lkZS50ZW1wbGF0ZS5odG1sJ1xuXG5fbW9kdWxlLmRpcmVjdGl2ZSgnc2lkZW5hdicsIGZ1bmN0aW9uICgpIHtcbiAgICAnbmdJbmplY3QnXG5cbiAgICByZXR1cm4ge1xuICAgICAgICByZXN0cmljdDogJ0FFJyxcbiAgICAgICAgc2NvcGU6IHRydWUsXG4gICAgICAgIGNvbnRyb2xsZXJBczogJ2N0cmwnLFxuICAgICAgICBiaW5kVG9Db250cm9sbGVyOiB0cnVlLFxuICAgICAgICB0ZW1wbGF0ZTogdGVtcGxhdGUsXG4gICAgICAgIGNvbnRyb2xsZXI6ICdTaWRlQ3RybCdcbiAgICB9XG59KVxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc2lkZS5kaXJlY3RpdmUuanNcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IFwiPG1kLXNpZGVuYXYgbWQtaXMtbG9ja2VkLW9wZW49XFxcInRydWVcXFwiIGNsYXNzPVxcXCJtZC13aGl0ZWZyYW1lLTRkcFxcXCI+XFxuICAgICAgICAgICAgPG1kLWxpc3QgbmctcmVwZWF0PVxcXCJvcHRpb24gaW4gY3RybC5vcHRpb25zXFxcIiBuZy1jbGljaz1cXFwiY3RybC5vbk1kTGlzdENsaWNrKG9wdGlvbilcXFwiPlxcbiAgICAgICAgICAgICAgPG1kLWxpc3QtaXRlbSBuZy1jbGljaz1cXFwiY3RybC5vbk1kTGlzdENsaWNrKG9wdGlvbilcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5nLWNsYXNzPVxcXCJvcHRpb24uc2VsZWN0ZWQgPyAnc2VsZWN0ZWQnIDogJydcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgPGltZyBuZy1zcmM9XFxcInt7IG9wdGlvbi5pbWcgfX1cXFwiIGNsYXNzPVxcXCJhdmF0YXJcXFwiIFxcbiAgICAgICAgICAgICAgICAgICAgICAgICBuZy1zdHlsZT1cXFwib3B0aW9uLmJnY29sb3JcXFwiIFxcbiAgICAgICAgICAgICAgICAgICAgICAgICBuZy1jbGljaz1cXFwiY3RybC5vbk1kTGlzdENsaWNrKG9wdGlvbilcXFwiPjwvaW1nPlxcbiAgICAgICAgICAgICAgPC9tZC1saXN0LWl0ZW0+XFxuICAgICAgICAgIDwvbWQtbGlzdD5cXG48L21kLXNpZGVuYXY+XFxuXFxuXFxuXFxuICAgIFwiXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NpZGUudGVtcGxhdGUuaHRtbFxuICoqIG1vZHVsZSBpZCA9IDZcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsImltcG9ydCBfbW9kdWxlIGZyb20gJy4vbW9kdWxlJ1xuXG5leHBvcnQgY2xhc3MgSGVhZGVyQ3RybCB7XG5cbiAgICBjb25zdHJ1Y3RvciAoKSB7XG4gICAgICAgIHRoaXMuZ3JlZXRpbmcgPSAnYXNkZmFzZGYnXG4gICAgfVxuXG59XG5cbl9tb2R1bGUuY29udHJvbGxlcignSGVhZGVyQ3RybCcsIEhlYWRlckN0cmwpXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9oZWFkZXIuY29udHJvbGxlci5qc1xuICoqLyIsImltcG9ydCBfbW9kdWxlIGZyb20gJy4vbW9kdWxlJ1xuaW1wb3J0IHRlbXBsYXRlIGZyb20gJy4vaGVhZGVyLnRlbXBsYXRlLmh0bWwnXG5cbl9tb2R1bGUuZGlyZWN0aXZlKCdoZWFkZXJTZWN0aW9uJywgZnVuY3Rpb24gKCkge1xuICAgICduZ0luamVjdCdcblxuICAgIHJldHVybiB7XG4gICAgICAgIHJlc3RyaWN0OiAnQUUnLFxuICAgICAgICBzY29wZTogdHJ1ZSxcbiAgICAgICAgY29udHJvbGxlckFzOiAnY3RybCcsXG4gICAgICAgIGJpbmRUb0NvbnRyb2xsZXI6IHRydWUsXG4gICAgICAgIHRlbXBsYXRlOiB0ZW1wbGF0ZSxcbiAgICAgICAgY29udHJvbGxlcjogJ0hlYWRlckN0cmwnXG4gICAgfVxufSlcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL2hlYWRlci5kaXJlY3RpdmUuanNcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IFwiPG1kLXRvb2xiYXI+ICAgIFxcblxcbjwvbWQtdG9vbGJhcj5cIlxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9oZWFkZXIudGVtcGxhdGUuaHRtbFxuICoqIG1vZHVsZSBpZCA9IDlcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2luZGV4LmpzIS4vYXBwLnNjc3NcIik7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9hZGRTdHlsZXMuanNcIikoY29udGVudCwge30pO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG5cdC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdGlmKCFjb250ZW50LmxvY2Fscykge1xuXHRcdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2luZGV4LmpzIS4vYXBwLnNjc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvaW5kZXguanMhLi9hcHAuc2Nzc1wiKTtcblx0XHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXHRcdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHRcdH0pO1xuXHR9XG5cdC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3Ncblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL2FwcC5zY3NzXG4gKiogbW9kdWxlIGlkID0gMTBcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSgpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLnJhZGlhbCB7XFxuICBiYWNrZ3JvdW5kOiAtbW96LXJhZGlhbC1ncmFkaWVudChjZW50ZXIsIGNpcmNsZSBjb3ZlciwgI2ZmZiAwJSwgI2ZmZiAxMDAlKTtcXG4gIGJhY2tncm91bmQ6IC13ZWJraXQtZ3JhZGllbnQocmFkaWFsLCBjZW50ZXIgY2VudGVyLCAwcHgsIGNlbnRlciBjZW50ZXIsIDEwMCUsIGNvbG9yLXN0b3AoMCUsICNmZmYpLCBjb2xvci1zdG9wKDEwMCUsICNmZmYpKTtcXG4gIGJhY2tncm91bmQ6IC13ZWJraXQtcmFkaWFsLWdyYWRpZW50KGNlbnRlciwgY2lyY2xlIGNvdmVyLCAjZmZmIDAlLCAjZmZmIDEwMCUpO1xcbiAgYmFja2dyb3VuZDogLW8tcmFkaWFsLWdyYWRpZW50KGNlbnRlciwgY2lyY2xlIGNvdmVyLCAjZmZmIDAlLCAjZmZmIDEwMCUpO1xcbiAgYmFja2dyb3VuZDogLW1zLXJhZGlhbC1ncmFkaWVudChjZW50ZXIsIGNpcmNsZSBjb3ZlciwgI2ZmZiAwJSwgI2ZmZiAxMDAlKTtcXG4gIGJhY2tncm91bmQ6IHJhZGlhbC1ncmFkaWVudChjZW50ZXIsIGNpcmNsZSBjb3ZlciwgI2ZmZiAwJSwgI2ZmZiAxMDAlKTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7IH1cXG5cXG5odG1sLCBib2R5IHtcXG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcXG4gIGZvbnQtc2l6ZTogMTRweDtcXG4gIGhlaWdodDogMTAwJTtcXG4gIG1hcmdpbjogMHB4O1xcbiAgcGFkZGluZzogMHB4OyB9XFxuXFxubWQtaW5wdXQtY29udGFpbmVyIHtcXG4gIGZvbnQtc2l6ZTogMjJweCAhaW1wb3J0YW50OyB9XFxuXFxuLm1kLXdoaXRlZnJhbWUtMGRwIHtcXG4gIGJveC1zaGFkb3c6IDBweCAwcHggMHB4IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7IH1cXG5cXG4udHJhbnNwYXJlbnQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7IH1cXG5cXG5pbWc6Zm9jdXMge1xcbiAgb3V0bGluZTogMDsgfVxcblxcbmxhYmVsIHtcXG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkOyB9XFxuXFxubWQtdG9vbGJhciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGUzNjQxICFpbXBvcnRhbnQ7XFxuICBtYXJnaW46IGF1dG87XFxuICBmb250LXdlaWdodDogNTAwO1xcbiAgaGVpZ2h0OiA1MHB4O1xcbiAgbWluLWhlaWdodDogNTBweDtcXG4gIG1heC1oZWlnaHQ6IDEwMHB4ICFpbXBvcnRhbnQ7IH1cXG5cXG5tZC1zaWRlbmF2LCBtZC1zaWRlbmF2Lm1kLWxvY2tlZC1vcGVuLCBtZC1zaWRlbmF2Lm1kLWNsb3NlZC5tZC1sb2NrZWQtb3Blbi1hZGQtYWN0aXZlIHtcXG4gIG1pbi13aWR0aDogMTUwcHggIWltcG9ydGFudDtcXG4gIHdpZHRoOiA1MHZ3ICFpbXBvcnRhbnQ7XFxuICBtYXgtd2lkdGg6IDE1MHB4ICFpbXBvcnRhbnQ7IH1cXG5cXG5tZC1jb250ZW50IHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmYgIWltcG9ydGFudDsgfVxcblxcbm1kLWxpc3QtaXRlbSA+IGJ1dHRvbiB7XFxuICB3aWR0aDogMTAwJTtcXG4gIHRleHQtYWxpZ246IGxlZnQgIWltcG9ydGFudDsgfVxcblxcbm1kLWxpc3QtaXRlbS5zZWxlY3RlZCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGRkICFpbXBvcnRhbnQ7IH1cXG5cXG4jY29udGVudCB7XFxuICBwYWRkaW5nLWxlZnQ6IDQwcHg7XFxuICBwYWRkaW5nLXJpZ2h0OiA0MHB4O1xcbiAgcGFkZGluZy10b3A6IDVweDsgfVxcblxcbi5hdmF0YXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzg0ZDhmZDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHdpZHRoOiAxNjVweDtcXG4gIGhlaWdodDogMTU4cHg7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIG1hcmdpbjogMHB4O1xcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXG4gIHpvb206IDAuNzA7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVooMCk7XFxuICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMC43KTtcXG4gIC1tb3otdHJhbnNmb3JtOiBzY2FsZSgwLjcpOyB9XFxuXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuLi9+L2Nzcy1sb2FkZXIhLi4vfi9zYXNzLWxvYWRlciEuL2FwcC5zY3NzXG4gKiogbW9kdWxlIGlkID0gMTFcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8qXHJcblx0TUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcclxuXHRBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXHJcbiovXHJcbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXHJcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oKSB7XHJcblx0dmFyIGxpc3QgPSBbXTtcclxuXHJcblx0Ly8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xyXG5cdGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcclxuXHRcdHZhciByZXN1bHQgPSBbXTtcclxuXHRcdGZvcih2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdHZhciBpdGVtID0gdGhpc1tpXTtcclxuXHRcdFx0aWYoaXRlbVsyXSkge1xyXG5cdFx0XHRcdHJlc3VsdC5wdXNoKFwiQG1lZGlhIFwiICsgaXRlbVsyXSArIFwie1wiICsgaXRlbVsxXSArIFwifVwiKTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRyZXN1bHQucHVzaChpdGVtWzFdKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIHJlc3VsdC5qb2luKFwiXCIpO1xyXG5cdH07XHJcblxyXG5cdC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XHJcblx0bGlzdC5pID0gZnVuY3Rpb24obW9kdWxlcywgbWVkaWFRdWVyeSkge1xyXG5cdFx0aWYodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpXHJcblx0XHRcdG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIFwiXCJdXTtcclxuXHRcdHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XHJcblx0XHRmb3IodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHR2YXIgaWQgPSB0aGlzW2ldWzBdO1xyXG5cdFx0XHRpZih0eXBlb2YgaWQgPT09IFwibnVtYmVyXCIpXHJcblx0XHRcdFx0YWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xyXG5cdFx0fVxyXG5cdFx0Zm9yKGkgPSAwOyBpIDwgbW9kdWxlcy5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHR2YXIgaXRlbSA9IG1vZHVsZXNbaV07XHJcblx0XHRcdC8vIHNraXAgYWxyZWFkeSBpbXBvcnRlZCBtb2R1bGVcclxuXHRcdFx0Ly8gdGhpcyBpbXBsZW1lbnRhdGlvbiBpcyBub3QgMTAwJSBwZXJmZWN0IGZvciB3ZWlyZCBtZWRpYSBxdWVyeSBjb21iaW5hdGlvbnNcclxuXHRcdFx0Ly8gIHdoZW4gYSBtb2R1bGUgaXMgaW1wb3J0ZWQgbXVsdGlwbGUgdGltZXMgd2l0aCBkaWZmZXJlbnQgbWVkaWEgcXVlcmllcy5cclxuXHRcdFx0Ly8gIEkgaG9wZSB0aGlzIHdpbGwgbmV2ZXIgb2NjdXIgKEhleSB0aGlzIHdheSB3ZSBoYXZlIHNtYWxsZXIgYnVuZGxlcylcclxuXHRcdFx0aWYodHlwZW9mIGl0ZW1bMF0gIT09IFwibnVtYmVyXCIgfHwgIWFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcclxuXHRcdFx0XHRpZihtZWRpYVF1ZXJ5ICYmICFpdGVtWzJdKSB7XHJcblx0XHRcdFx0XHRpdGVtWzJdID0gbWVkaWFRdWVyeTtcclxuXHRcdFx0XHR9IGVsc2UgaWYobWVkaWFRdWVyeSkge1xyXG5cdFx0XHRcdFx0aXRlbVsyXSA9IFwiKFwiICsgaXRlbVsyXSArIFwiKSBhbmQgKFwiICsgbWVkaWFRdWVyeSArIFwiKVwiO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRsaXN0LnB1c2goaXRlbSk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9O1xyXG5cdHJldHVybiBsaXN0O1xyXG59O1xyXG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4uL34vY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcbiAqKiBtb2R1bGUgaWQgPSAxMlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLypcclxuXHRNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxyXG5cdEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcclxuKi9cclxudmFyIHN0eWxlc0luRG9tID0ge30sXHJcblx0bWVtb2l6ZSA9IGZ1bmN0aW9uKGZuKSB7XHJcblx0XHR2YXIgbWVtbztcclxuXHRcdHJldHVybiBmdW5jdGlvbiAoKSB7XHJcblx0XHRcdGlmICh0eXBlb2YgbWVtbyA9PT0gXCJ1bmRlZmluZWRcIikgbWVtbyA9IGZuLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XHJcblx0XHRcdHJldHVybiBtZW1vO1xyXG5cdFx0fTtcclxuXHR9LFxyXG5cdGlzT2xkSUUgPSBtZW1vaXplKGZ1bmN0aW9uKCkge1xyXG5cdFx0cmV0dXJuIC9tc2llIFs2LTldXFxiLy50ZXN0KHdpbmRvdy5uYXZpZ2F0b3IudXNlckFnZW50LnRvTG93ZXJDYXNlKCkpO1xyXG5cdH0pLFxyXG5cdGdldEhlYWRFbGVtZW50ID0gbWVtb2l6ZShmdW5jdGlvbiAoKSB7XHJcblx0XHRyZXR1cm4gZG9jdW1lbnQuaGVhZCB8fCBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcImhlYWRcIilbMF07XHJcblx0fSksXHJcblx0c2luZ2xldG9uRWxlbWVudCA9IG51bGwsXHJcblx0c2luZ2xldG9uQ291bnRlciA9IDAsXHJcblx0c3R5bGVFbGVtZW50c0luc2VydGVkQXRUb3AgPSBbXTtcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24obGlzdCwgb3B0aW9ucykge1xyXG5cdGlmKHR5cGVvZiBERUJVRyAhPT0gXCJ1bmRlZmluZWRcIiAmJiBERUJVRykge1xyXG5cdFx0aWYodHlwZW9mIGRvY3VtZW50ICE9PSBcIm9iamVjdFwiKSB0aHJvdyBuZXcgRXJyb3IoXCJUaGUgc3R5bGUtbG9hZGVyIGNhbm5vdCBiZSB1c2VkIGluIGEgbm9uLWJyb3dzZXIgZW52aXJvbm1lbnRcIik7XHJcblx0fVxyXG5cclxuXHRvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcclxuXHQvLyBGb3JjZSBzaW5nbGUtdGFnIHNvbHV0aW9uIG9uIElFNi05LCB3aGljaCBoYXMgYSBoYXJkIGxpbWl0IG9uIHRoZSAjIG9mIDxzdHlsZT5cclxuXHQvLyB0YWdzIGl0IHdpbGwgYWxsb3cgb24gYSBwYWdlXHJcblx0aWYgKHR5cGVvZiBvcHRpb25zLnNpbmdsZXRvbiA9PT0gXCJ1bmRlZmluZWRcIikgb3B0aW9ucy5zaW5nbGV0b24gPSBpc09sZElFKCk7XHJcblxyXG5cdC8vIEJ5IGRlZmF1bHQsIGFkZCA8c3R5bGU+IHRhZ3MgdG8gdGhlIGJvdHRvbSBvZiA8aGVhZD4uXHJcblx0aWYgKHR5cGVvZiBvcHRpb25zLmluc2VydEF0ID09PSBcInVuZGVmaW5lZFwiKSBvcHRpb25zLmluc2VydEF0ID0gXCJib3R0b21cIjtcclxuXHJcblx0dmFyIHN0eWxlcyA9IGxpc3RUb1N0eWxlcyhsaXN0KTtcclxuXHRhZGRTdHlsZXNUb0RvbShzdHlsZXMsIG9wdGlvbnMpO1xyXG5cclxuXHRyZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcclxuXHRcdHZhciBtYXlSZW1vdmUgPSBbXTtcclxuXHRcdGZvcih2YXIgaSA9IDA7IGkgPCBzdHlsZXMubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0dmFyIGl0ZW0gPSBzdHlsZXNbaV07XHJcblx0XHRcdHZhciBkb21TdHlsZSA9IHN0eWxlc0luRG9tW2l0ZW0uaWRdO1xyXG5cdFx0XHRkb21TdHlsZS5yZWZzLS07XHJcblx0XHRcdG1heVJlbW92ZS5wdXNoKGRvbVN0eWxlKTtcclxuXHRcdH1cclxuXHRcdGlmKG5ld0xpc3QpIHtcclxuXHRcdFx0dmFyIG5ld1N0eWxlcyA9IGxpc3RUb1N0eWxlcyhuZXdMaXN0KTtcclxuXHRcdFx0YWRkU3R5bGVzVG9Eb20obmV3U3R5bGVzLCBvcHRpb25zKTtcclxuXHRcdH1cclxuXHRcdGZvcih2YXIgaSA9IDA7IGkgPCBtYXlSZW1vdmUubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0dmFyIGRvbVN0eWxlID0gbWF5UmVtb3ZlW2ldO1xyXG5cdFx0XHRpZihkb21TdHlsZS5yZWZzID09PSAwKSB7XHJcblx0XHRcdFx0Zm9yKHZhciBqID0gMDsgaiA8IGRvbVN0eWxlLnBhcnRzLmxlbmd0aDsgaisrKVxyXG5cdFx0XHRcdFx0ZG9tU3R5bGUucGFydHNbal0oKTtcclxuXHRcdFx0XHRkZWxldGUgc3R5bGVzSW5Eb21bZG9tU3R5bGUuaWRdO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fTtcclxufVxyXG5cclxuZnVuY3Rpb24gYWRkU3R5bGVzVG9Eb20oc3R5bGVzLCBvcHRpb25zKSB7XHJcblx0Zm9yKHZhciBpID0gMDsgaSA8IHN0eWxlcy5sZW5ndGg7IGkrKykge1xyXG5cdFx0dmFyIGl0ZW0gPSBzdHlsZXNbaV07XHJcblx0XHR2YXIgZG9tU3R5bGUgPSBzdHlsZXNJbkRvbVtpdGVtLmlkXTtcclxuXHRcdGlmKGRvbVN0eWxlKSB7XHJcblx0XHRcdGRvbVN0eWxlLnJlZnMrKztcclxuXHRcdFx0Zm9yKHZhciBqID0gMDsgaiA8IGRvbVN0eWxlLnBhcnRzLmxlbmd0aDsgaisrKSB7XHJcblx0XHRcdFx0ZG9tU3R5bGUucGFydHNbal0oaXRlbS5wYXJ0c1tqXSk7XHJcblx0XHRcdH1cclxuXHRcdFx0Zm9yKDsgaiA8IGl0ZW0ucGFydHMubGVuZ3RoOyBqKyspIHtcclxuXHRcdFx0XHRkb21TdHlsZS5wYXJ0cy5wdXNoKGFkZFN0eWxlKGl0ZW0ucGFydHNbal0sIG9wdGlvbnMpKTtcclxuXHRcdFx0fVxyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0dmFyIHBhcnRzID0gW107XHJcblx0XHRcdGZvcih2YXIgaiA9IDA7IGogPCBpdGVtLnBhcnRzLmxlbmd0aDsgaisrKSB7XHJcblx0XHRcdFx0cGFydHMucHVzaChhZGRTdHlsZShpdGVtLnBhcnRzW2pdLCBvcHRpb25zKSk7XHJcblx0XHRcdH1cclxuXHRcdFx0c3R5bGVzSW5Eb21baXRlbS5pZF0gPSB7aWQ6IGl0ZW0uaWQsIHJlZnM6IDEsIHBhcnRzOiBwYXJ0c307XHJcblx0XHR9XHJcblx0fVxyXG59XHJcblxyXG5mdW5jdGlvbiBsaXN0VG9TdHlsZXMobGlzdCkge1xyXG5cdHZhciBzdHlsZXMgPSBbXTtcclxuXHR2YXIgbmV3U3R5bGVzID0ge307XHJcblx0Zm9yKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcclxuXHRcdHZhciBpdGVtID0gbGlzdFtpXTtcclxuXHRcdHZhciBpZCA9IGl0ZW1bMF07XHJcblx0XHR2YXIgY3NzID0gaXRlbVsxXTtcclxuXHRcdHZhciBtZWRpYSA9IGl0ZW1bMl07XHJcblx0XHR2YXIgc291cmNlTWFwID0gaXRlbVszXTtcclxuXHRcdHZhciBwYXJ0ID0ge2NzczogY3NzLCBtZWRpYTogbWVkaWEsIHNvdXJjZU1hcDogc291cmNlTWFwfTtcclxuXHRcdGlmKCFuZXdTdHlsZXNbaWRdKVxyXG5cdFx0XHRzdHlsZXMucHVzaChuZXdTdHlsZXNbaWRdID0ge2lkOiBpZCwgcGFydHM6IFtwYXJ0XX0pO1xyXG5cdFx0ZWxzZVxyXG5cdFx0XHRuZXdTdHlsZXNbaWRdLnBhcnRzLnB1c2gocGFydCk7XHJcblx0fVxyXG5cdHJldHVybiBzdHlsZXM7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zLCBzdHlsZUVsZW1lbnQpIHtcclxuXHR2YXIgaGVhZCA9IGdldEhlYWRFbGVtZW50KCk7XHJcblx0dmFyIGxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wID0gc3R5bGVFbGVtZW50c0luc2VydGVkQXRUb3Bbc3R5bGVFbGVtZW50c0luc2VydGVkQXRUb3AubGVuZ3RoIC0gMV07XHJcblx0aWYgKG9wdGlvbnMuaW5zZXJ0QXQgPT09IFwidG9wXCIpIHtcclxuXHRcdGlmKCFsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcCkge1xyXG5cdFx0XHRoZWFkLmluc2VydEJlZm9yZShzdHlsZUVsZW1lbnQsIGhlYWQuZmlyc3RDaGlsZCk7XHJcblx0XHR9IGVsc2UgaWYobGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3AubmV4dFNpYmxpbmcpIHtcclxuXHRcdFx0aGVhZC5pbnNlcnRCZWZvcmUoc3R5bGVFbGVtZW50LCBsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcC5uZXh0U2libGluZyk7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRoZWFkLmFwcGVuZENoaWxkKHN0eWxlRWxlbWVudCk7XHJcblx0XHR9XHJcblx0XHRzdHlsZUVsZW1lbnRzSW5zZXJ0ZWRBdFRvcC5wdXNoKHN0eWxlRWxlbWVudCk7XHJcblx0fSBlbHNlIGlmIChvcHRpb25zLmluc2VydEF0ID09PSBcImJvdHRvbVwiKSB7XHJcblx0XHRoZWFkLmFwcGVuZENoaWxkKHN0eWxlRWxlbWVudCk7XHJcblx0fSBlbHNlIHtcclxuXHRcdHRocm93IG5ldyBFcnJvcihcIkludmFsaWQgdmFsdWUgZm9yIHBhcmFtZXRlciAnaW5zZXJ0QXQnLiBNdXN0IGJlICd0b3AnIG9yICdib3R0b20nLlwiKTtcclxuXHR9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcclxuXHRzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xyXG5cdHZhciBpZHggPSBzdHlsZUVsZW1lbnRzSW5zZXJ0ZWRBdFRvcC5pbmRleE9mKHN0eWxlRWxlbWVudCk7XHJcblx0aWYoaWR4ID49IDApIHtcclxuXHRcdHN0eWxlRWxlbWVudHNJbnNlcnRlZEF0VG9wLnNwbGljZShpZHgsIDEpO1xyXG5cdH1cclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlU3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcclxuXHR2YXIgc3R5bGVFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xyXG5cdHN0eWxlRWxlbWVudC50eXBlID0gXCJ0ZXh0L2Nzc1wiO1xyXG5cdGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zLCBzdHlsZUVsZW1lbnQpO1xyXG5cdHJldHVybiBzdHlsZUVsZW1lbnQ7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZUxpbmtFbGVtZW50KG9wdGlvbnMpIHtcclxuXHR2YXIgbGlua0VsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlua1wiKTtcclxuXHRsaW5rRWxlbWVudC5yZWwgPSBcInN0eWxlc2hlZXRcIjtcclxuXHRpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucywgbGlua0VsZW1lbnQpO1xyXG5cdHJldHVybiBsaW5rRWxlbWVudDtcclxufVxyXG5cclxuZnVuY3Rpb24gYWRkU3R5bGUob2JqLCBvcHRpb25zKSB7XHJcblx0dmFyIHN0eWxlRWxlbWVudCwgdXBkYXRlLCByZW1vdmU7XHJcblxyXG5cdGlmIChvcHRpb25zLnNpbmdsZXRvbikge1xyXG5cdFx0dmFyIHN0eWxlSW5kZXggPSBzaW5nbGV0b25Db3VudGVyKys7XHJcblx0XHRzdHlsZUVsZW1lbnQgPSBzaW5nbGV0b25FbGVtZW50IHx8IChzaW5nbGV0b25FbGVtZW50ID0gY3JlYXRlU3R5bGVFbGVtZW50KG9wdGlvbnMpKTtcclxuXHRcdHVwZGF0ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZUVsZW1lbnQsIHN0eWxlSW5kZXgsIGZhbHNlKTtcclxuXHRcdHJlbW92ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZUVsZW1lbnQsIHN0eWxlSW5kZXgsIHRydWUpO1xyXG5cdH0gZWxzZSBpZihvYmouc291cmNlTWFwICYmXHJcblx0XHR0eXBlb2YgVVJMID09PSBcImZ1bmN0aW9uXCIgJiZcclxuXHRcdHR5cGVvZiBVUkwuY3JlYXRlT2JqZWN0VVJMID09PSBcImZ1bmN0aW9uXCIgJiZcclxuXHRcdHR5cGVvZiBVUkwucmV2b2tlT2JqZWN0VVJMID09PSBcImZ1bmN0aW9uXCIgJiZcclxuXHRcdHR5cGVvZiBCbG9iID09PSBcImZ1bmN0aW9uXCIgJiZcclxuXHRcdHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcclxuXHRcdHN0eWxlRWxlbWVudCA9IGNyZWF0ZUxpbmtFbGVtZW50KG9wdGlvbnMpO1xyXG5cdFx0dXBkYXRlID0gdXBkYXRlTGluay5iaW5kKG51bGwsIHN0eWxlRWxlbWVudCk7XHJcblx0XHRyZW1vdmUgPSBmdW5jdGlvbigpIHtcclxuXHRcdFx0cmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XHJcblx0XHRcdGlmKHN0eWxlRWxlbWVudC5ocmVmKVxyXG5cdFx0XHRcdFVSTC5yZXZva2VPYmplY3RVUkwoc3R5bGVFbGVtZW50LmhyZWYpO1xyXG5cdFx0fTtcclxuXHR9IGVsc2Uge1xyXG5cdFx0c3R5bGVFbGVtZW50ID0gY3JlYXRlU3R5bGVFbGVtZW50KG9wdGlvbnMpO1xyXG5cdFx0dXBkYXRlID0gYXBwbHlUb1RhZy5iaW5kKG51bGwsIHN0eWxlRWxlbWVudCk7XHJcblx0XHRyZW1vdmUgPSBmdW5jdGlvbigpIHtcclxuXHRcdFx0cmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XHJcblx0XHR9O1xyXG5cdH1cclxuXHJcblx0dXBkYXRlKG9iaik7XHJcblxyXG5cdHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZShuZXdPYmopIHtcclxuXHRcdGlmKG5ld09iaikge1xyXG5cdFx0XHRpZihuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXApXHJcblx0XHRcdFx0cmV0dXJuO1xyXG5cdFx0XHR1cGRhdGUob2JqID0gbmV3T2JqKTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHJlbW92ZSgpO1xyXG5cdFx0fVxyXG5cdH07XHJcbn1cclxuXHJcbnZhciByZXBsYWNlVGV4dCA9IChmdW5jdGlvbiAoKSB7XHJcblx0dmFyIHRleHRTdG9yZSA9IFtdO1xyXG5cclxuXHRyZXR1cm4gZnVuY3Rpb24gKGluZGV4LCByZXBsYWNlbWVudCkge1xyXG5cdFx0dGV4dFN0b3JlW2luZGV4XSA9IHJlcGxhY2VtZW50O1xyXG5cdFx0cmV0dXJuIHRleHRTdG9yZS5maWx0ZXIoQm9vbGVhbikuam9pbignXFxuJyk7XHJcblx0fTtcclxufSkoKTtcclxuXHJcbmZ1bmN0aW9uIGFwcGx5VG9TaW5nbGV0b25UYWcoc3R5bGVFbGVtZW50LCBpbmRleCwgcmVtb3ZlLCBvYmopIHtcclxuXHR2YXIgY3NzID0gcmVtb3ZlID8gXCJcIiA6IG9iai5jc3M7XHJcblxyXG5cdGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xyXG5cdFx0c3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IHJlcGxhY2VUZXh0KGluZGV4LCBjc3MpO1xyXG5cdH0gZWxzZSB7XHJcblx0XHR2YXIgY3NzTm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcyk7XHJcblx0XHR2YXIgY2hpbGROb2RlcyA9IHN0eWxlRWxlbWVudC5jaGlsZE5vZGVzO1xyXG5cdFx0aWYgKGNoaWxkTm9kZXNbaW5kZXhdKSBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoY2hpbGROb2Rlc1tpbmRleF0pO1xyXG5cdFx0aWYgKGNoaWxkTm9kZXMubGVuZ3RoKSB7XHJcblx0XHRcdHN0eWxlRWxlbWVudC5pbnNlcnRCZWZvcmUoY3NzTm9kZSwgY2hpbGROb2Rlc1tpbmRleF0pO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0c3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGNzc05vZGUpO1xyXG5cdFx0fVxyXG5cdH1cclxufVxyXG5cclxuZnVuY3Rpb24gYXBwbHlUb1RhZyhzdHlsZUVsZW1lbnQsIG9iaikge1xyXG5cdHZhciBjc3MgPSBvYmouY3NzO1xyXG5cdHZhciBtZWRpYSA9IG9iai5tZWRpYTtcclxuXHR2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcclxuXHJcblx0aWYobWVkaWEpIHtcclxuXHRcdHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJtZWRpYVwiLCBtZWRpYSlcclxuXHR9XHJcblxyXG5cdGlmKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XHJcblx0XHRzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xyXG5cdH0gZWxzZSB7XHJcblx0XHR3aGlsZShzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xyXG5cdFx0XHRzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xyXG5cdFx0fVxyXG5cdFx0c3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xyXG5cdH1cclxufVxyXG5cclxuZnVuY3Rpb24gdXBkYXRlTGluayhsaW5rRWxlbWVudCwgb2JqKSB7XHJcblx0dmFyIGNzcyA9IG9iai5jc3M7XHJcblx0dmFyIG1lZGlhID0gb2JqLm1lZGlhO1xyXG5cdHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xyXG5cclxuXHRpZihzb3VyY2VNYXApIHtcclxuXHRcdC8vIGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9hLzI2NjAzODc1XHJcblx0XHRjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiICsgYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSArIFwiICovXCI7XHJcblx0fVxyXG5cclxuXHR2YXIgYmxvYiA9IG5ldyBCbG9iKFtjc3NdLCB7IHR5cGU6IFwidGV4dC9jc3NcIiB9KTtcclxuXHJcblx0dmFyIG9sZFNyYyA9IGxpbmtFbGVtZW50LmhyZWY7XHJcblxyXG5cdGxpbmtFbGVtZW50LmhyZWYgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKGJsb2IpO1xyXG5cclxuXHRpZihvbGRTcmMpXHJcblx0XHRVUkwucmV2b2tlT2JqZWN0VVJMKG9sZFNyYyk7XHJcbn1cclxuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuLi9+L3N0eWxlLWxvYWRlci9hZGRTdHlsZXMuanNcbiAqKiBtb2R1bGUgaWQgPSAxM1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiaW1wb3J0IF9tb2R1bGUgZnJvbSAnLi9tb2R1bGUnXG5cbmV4cG9ydCBjbGFzcyBDb250ZW50Q3RybCB7XG5cbiAgICBjb25zdHJ1Y3RvciAoKSB7XG4gICAgICAgIFxuICAgIH1cblxuICAgIGFyZWFDbGljayAoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdhc2Zhc2RmYXNkZnMnKVxuICAgIH1cblxufVxuXG5fbW9kdWxlLmNvbnRyb2xsZXIoJ0NvbnRlbnRDdHJsJywgQ29udGVudEN0cmwpXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9jb250ZW50LmNvbnRyb2xsZXIuanNcbiAqKi8iLCJpbXBvcnQgX21vZHVsZSBmcm9tICcuL21vZHVsZSdcbmltcG9ydCB0ZW1wbGF0ZSBmcm9tICcuL2NvbnRlbnQudGVtcGxhdGUuaHRtbCdcblxuX21vZHVsZS5kaXJlY3RpdmUoJ2NvbnRlbnRTZWN0aW9uJywgZnVuY3Rpb24gKCR0aW1lb3V0KSB7XG4gICAgJ25nSW5qZWN0J1xuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgcmVzdHJpY3Q6ICdBRScsXG4gICAgICAgIHNjb3BlOiB0cnVlLFxuICAgICAgICBjb250cm9sbGVyQXM6ICdjdHJsJyxcbiAgICAgICAgYmluZFRvQ29udHJvbGxlcjogdHJ1ZSxcbiAgICAgICAgdGVtcGxhdGU6IHRlbXBsYXRlLFxuICAgICAgICBjb250cm9sbGVyOiAnQ29udGVudEN0cmwnLFxuXG4gICAgICAgIGxpbmsgOiAoc2NvcGUsIGVsLCBhdHRycykgPT4ge1xuXG4gICAgICAgICAgICAkdGltZW91dCgoKSA9PiB7XG5cbiAgICAgICAgICAgICQoJyNjYXInKS5tYXBzdGVyKHtcbiAgICAgICAgICAgICAgICBzdGF0aWNTdGF0ZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICBmaWxsT3BhY2l0eTogMC40LFxuICAgICAgICAgICAgICAgIGZpbGxDb2xvcjogJ2ZhZGJiODQnLFxuICAgICAgICAgICAgICAgIGhpZ2hsaWdodDogdHJ1ZSxcbiAgICAgICAgICAgICAgICBtYXBLZXk6ICduYW1lJyxcbiAgICAgICAgICAgICAgICBzaG93VG9vbFRpcDogdHJ1ZSxcbiAgICAgICAgICAgICAgICBzY2FsZU1hcDogZmFsc2UsXG4gICAgICAgICAgICAgICAgdG9vbFRpcENsb3NlOiBbXCJ0b29sdGlwLWNsaWNrXCIsXCJhcmVhLW1vdXNlb3V0XCJdLFxuICAgICAgICAgICAgICAgIGFyZWFzOiBbe1xuICAgICAgICAgICAgICAgICAgICBrZXk6ICdDYXInLFxuICAgICAgICAgICAgICAgICAgICB0b29sVGlwOiAnUHVlcnRhIGZyb250YWwgbGFkbyBpenF1aWVyZG8uJ1xuICAgICAgICAgICAgICAgIH1dLCAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBvbkNsaWNrOiBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgfSwgMClcbiAgICAgICAgICAgIFxuICAgICAgICB9XG4gICAgfVxufSlcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL2NvbnRlbnQuZGlyZWN0aXZlLmpzXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxtZC1jb250ZW50IGNsYXNzPVxcXCJtZC1wYWRkaW5nXFxcIiBsYXlvdXQteHM9XFxcImNvbHVtblxcXCIgbGF5b3V0PVxcXCJyb3dcXFwiPlxcbiAgICA8ZGl2IGZsZXgteHMgZmxleC1ndC14cz1cXFwiMTAwXFxcIiBsYXlvdXQ9XFxcImNvbHVtblxcXCI+XFxuICAgICAgPGZvcm0gbmFtZT1cXFwidXNlckZvcm1cXFwiPlxcbiAgICAgICAgPG1kLWlucHV0LWNvbnRhaW5lcj5cXG4gICAgICAgIDxsYWJlbD5UaXRsZTwvbGFiZWw+XFxuICAgICAgICA8aW5wdXQgbmctbW9kZWw9XFxcInVzZXIudGl0bGVcXFwiPlxcbiAgICAgIDwvbWQtaW5wdXQtY29udGFpbmVyPlxcbiAgICAgIDxtZC1pbnB1dC1jb250YWluZXI+XFxuICAgICAgICA8bGFiZWw+RW1haWw8L2xhYmVsPlxcbiAgICAgICAgPGlucHV0IG5nLW1vZGVsPVxcXCJ1c2VyLmVtYWlsXFxcIiB0eXBlPVxcXCJlbWFpbFxcXCI+XFxuICAgICAgPC9tZC1pbnB1dC1jb250YWluZXI+XFxuICAgICAgPC9mb3JtPlxcbiAgICA8L2Rpdj5cXG48L21kLWNvbnRlbnQ+XFxuXFxuPGRpdiBjbGFzcz1cXFwiY29udGFpbmVyIG1kLXdoaXRlZnJhbWUtMGRwXFxcIj5cXG4gICAgPG1kLWNvbnRlbnQgY2xhc3M9XFxcIm1kLXBhZGRpbmcgbWQtd2hpdGVmcmFtZS0wZHBcXFwiIGxheW91dC14cz1cXFwiY29sdW1uXFxcIiBsYXlvdXQ9XFxcInJvd1xcXCI+XFxuICAgICAgICA8bWQtY2FyZCBjbGFzcz1cXFwibWQtd2hpdGVmcmFtZS0wZHBcXFwiPlxcbiAgICAgICAgICAgIDxpbWcgbmctc3JjPVxcXCJodHRwczovL3MxNi5wb3N0aW1nLm9yZy9ieGN6OXIxeWQvbmdjYXJzaWRlLnBuZ1xcXCIgY2xhc3M9XFxcIm1kLWNhcmQtaW1hZ2VcXFwiIGlkPVxcXCJjYXJcXFwiIHVzZW1hcD1cXFwiI2Nhci1tYXBcXFwiPlxcbiAgICAgICAgICAgICAgICA8bWFwIG5hbWU9XFxcImNhci1tYXBcXFwiIG5nLWNsaWNrPVxcXCJjdHJsLmFyZWFDbGljaygpXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgIDxhcmVhIGFsdD1cXFwiTEZkb29yXFxcIiB0aXRsZT1cXFwiTEZkb29yXFxcIiBuYW1lPVxcXCJDYXJcXFwiIGhyZWY9XFxcIiNcXFwiIGNvb3Jkcz1cXFwiMjM2LDE2NCwyNDUsMTQwLDQzNSwxMjYsNDI5LDE1MCw0MjksMjUzLDI0MSwyNjFcXFwiIHNoYXBlPVxcXCJwb2x5XFxcIj5cXG4gICAgICAgICAgICAgICAgPC9tYXA+XFxuICAgICAgICA8L21kLWNhcmQ+XFxuICAgIDwvbWQtY29udGVudD5cXG48L2Rpdj5cXG5cIlxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9jb250ZW50LnRlbXBsYXRlLmh0bWxcbiAqKiBtb2R1bGUgaWQgPSAxOVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiaW1wb3J0IF9tb2R1bGUgZnJvbSAnLi9tb2R1bGUnXG5cbmV4cG9ydCBjbGFzcyBTaWRlTmF2U2VydmljZSB7XG5cbiAgICBjb25zdHJ1Y3RvciAoKSB7XG4gICAgICAgIFxuICAgIH1cblxuICAgIGdldE9wdGlvbnMgKCkge1xuXG4gICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgaWQ6IDEsXG4gICAgICAgICAgICAgICAgZGlzcGxheTogJ1Zpc3RhIExhdGVyYWwnLFxuICAgICAgICAgICAgICAgIGltZzogJ2h0dHBzOi8vczE4LnBvc3RpbWcub3JnL2ltNm0wMHJyZC9jYXJzaWRlLnBuZycsXG4gICAgICAgICAgICAgICAgYmdjb2xvcjogeyAnYmFja2dyb3VuZC1jb2xvcic6ICcjYmJmNWNiJyB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGlkOiAyLFxuICAgICAgICAgICAgICAgIGRpc3BsYXk6ICdWaXN0YSBGcm9udGFsJyxcbiAgICAgICAgICAgICAgICBpbWc6ICdodHRwczovL3MxNy5wb3N0aW1nLm9yZy84anRyZHE3dHIvY2FyZnJvbnQucG5nJyxcbiAgICAgICAgICAgICAgICBiZ2NvbG9yOiB7ICdiYWNrZ3JvdW5kLWNvbG9yJzogJyNmZWRmYjUnIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgaWQ6IDMsXG4gICAgICAgICAgICAgICAgZGlzcGxheTogJ1Zpc3RhIFRyYXNlcmEnLFxuICAgICAgICAgICAgICAgIGltZzogJ2h0dHBzOi8vczE4LnBvc3RpbWcub3JnLzdmZmduanlydC9jYXJiYWNrLnBuZycsXG4gICAgICAgICAgICAgICAgYmdjb2xvcjogeyAnYmFja2dyb3VuZC1jb2xvcic6ICcjODRkOGZkJyB9XG4gICAgICAgICAgICB9XG4gICAgICAgIF1cblxuICAgIH1cblxufVxuXG5fbW9kdWxlLnNlcnZpY2UoJ3NpZGVOYXZTZXJ2aWNlJywgU2lkZU5hdlNlcnZpY2UpXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zaWRlLnNlcnZpY2UuanNcbiAqKi8iLCJpbXBvcnQgX21vZHVsZSBmcm9tICcuL21vZHVsZSdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgT3B0aW9uRmFjdG9yeSB7XG4gICAgXG4gICAgY29uc3RydWN0b3IgKG1vZGVsKSB7XG4gICAgICAgIFxuICAgICAgICB0aGlzLmlkICAgICAgID0gbW9kZWwuaWRcbiAgICAgICAgdGhpcy5zZWxlY3RlZCA9IGZhbHNlXG4gICAgICAgIHRoaXMuZGlzcGxheSAgPSBtb2RlbC5kaXNwbGF5XG4gICAgICAgIHRoaXMuaW1nICAgICAgPSBtb2RlbC5pbWdcbiAgICAgICAgdGhpcy5iZ2NvbG9yICA9IG1vZGVsLmJnY29sb3JcblxuICAgIH1cblxuICAgIHN0YXRpYyBmYWN0b3J5ICgpIHtcbiAgICAgICAgcmV0dXJuIChtb2RlbCkgPT4gbmV3IE9wdGlvbkZhY3RvcnkobW9kZWwpXG4gICAgfVxufVxuXG5fbW9kdWxlLmZhY3RvcnkoJ29wdGlvbkZhY3RvcnknLCBPcHRpb25GYWN0b3J5LmZhY3RvcnkpXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9vcHRpb24uZmFjdG9yeS5qc1xuICoqLyJdLCJzb3VyY2VSb290IjoiIn0=
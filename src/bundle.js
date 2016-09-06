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
	
	__webpack_require__(17);
	
	__webpack_require__(18);
	
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

	'use strict';
	
	var _module2 = __webpack_require__(3);
	
	var _module3 = _interopRequireDefault(_module2);
	
	var _contentTemplate = __webpack_require__(16);
	
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
	
	                // $('#car').mapster({
	                //     staticState: true,
	                //     fillOpacity: 0.4,
	                //     fillColor: 'fadbb84',
	                //     highlight: true,
	                //     mapKey: 'name',
	                //     showToolTip: true,
	                //     scaleMap: false,
	                //     toolTipClose: ["tooltip-click","area-mouseout"],
	                //     areas: [{
	                //         key: 'Car',
	                //         toolTip: 'Puerta frontal lado izquierdo.'
	                //     }],                   
	                //     onClick: function (e) {
	
	                //     }
	                // });
	
	            }, 0);
	        }
	    };
	});

/***/ },
/* 16 */
/***/ function(module, exports) {

	module.exports = "<md-content class=\"md-padding\" layout-xs=\"column\" layout=\"row\">\n    <div flex-xs flex-gt-xs=\"100\" layout=\"column\">\n      <form name=\"userForm\">\n        <md-input-container>\n        <label>Title</label>\n        <input ng-model=\"user.title\">\n      </md-input-container>\n      <md-input-container>\n        <label>Email</label>\n        <input ng-model=\"user.email\" type=\"email\">\n      </md-input-container>\n      </form>\n    </div>\n</md-content>\n\n<div class=\"container md-whiteframe-0dp\">\n    <md-content class=\"md-padding md-whiteframe-0dp\" layout-xs=\"column\" layout=\"row\">\n        <md-card class=\"md-whiteframe-0dp\">\n            <img ng-src=\"https://s16.postimg.org/bxcz9r1yd/ngcarside.png\" class=\"md-card-image\" id=\"car\" usemap=\"#car-map\">\n                <map name=\"car-map\" ng-click=\"ctrl.areaClick()\">\n                    <area alt=\"LFdoor\" title=\"LFdoor\" name=\"Car\" href=\"#\" coords=\"236,164,245,140,435,126,429,150,429,253,241,261\" shape=\"poly\">\n                </map>\n        </md-card>\n    </md-content>\n</div>\n"

/***/ },
/* 17 */
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
/* 18 */
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vLy4vc2lkZS5jb250cm9sbGVyLmpzIiwid2VicGFjazovLy8uL3NpZGUuZGlyZWN0aXZlLmpzIiwid2VicGFjazovLy8uL3NpZGUudGVtcGxhdGUuaHRtbCIsIndlYnBhY2s6Ly8vLi9oZWFkZXIuY29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly8vLi9oZWFkZXIuZGlyZWN0aXZlLmpzIiwid2VicGFjazovLy8uL2hlYWRlci50ZW1wbGF0ZS5odG1sIiwid2VicGFjazovLy8uL2FwcC5zY3NzPzEwMTMiLCJ3ZWJwYWNrOi8vLy4vYXBwLnNjc3MiLCJ3ZWJwYWNrOi8vLy4uL34vY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanMiLCJ3ZWJwYWNrOi8vLy4uL34vc3R5bGUtbG9hZGVyL2FkZFN0eWxlcy5qcyIsIndlYnBhY2s6Ly8vLi9jb250ZW50LmNvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vY29udGVudC5kaXJlY3RpdmUuanMiLCJ3ZWJwYWNrOi8vLy4vY29udGVudC50ZW1wbGF0ZS5odG1sIiwid2VicGFjazovLy8uL3NpZGUuc2VydmljZS5qcyIsIndlYnBhY2s6Ly8vLi9vcHRpb24uZmFjdG9yeS5qcyJdLCJuYW1lcyI6WyJib290c3RyYXAiLCJkb2N1bWVudCIsIl9tb2R1bGUiLCJhbmd1bGFyIiwibW9kdWxlIiwiU2lkZUN0cmwiLCJzaWRlTmF2U2VydmljZSIsIm9wdGlvbkZhY3RvcnkiLCJvcHRpb25zIiwiZ2V0T3B0aW9ucyIsIm1hcCIsIm9wdGlvbiIsInJlZHVjZSIsImJvb2xlYW4iLCJpdGVtIiwic2VsZWN0ZWQiLCJjb250cm9sbGVyIiwiZGlyZWN0aXZlIiwicmVzdHJpY3QiLCJzY29wZSIsImNvbnRyb2xsZXJBcyIsImJpbmRUb0NvbnRyb2xsZXIiLCJ0ZW1wbGF0ZSIsIkhlYWRlckN0cmwiLCJncmVldGluZyIsIkNvbnRlbnRDdHJsIiwiY29uc29sZSIsImxvZyIsIiR0aW1lb3V0IiwibGluayIsImVsIiwiYXR0cnMiLCJTaWRlTmF2U2VydmljZSIsImlkIiwiZGlzcGxheSIsImltZyIsImJnY29sb3IiLCJzZXJ2aWNlIiwiT3B0aW9uRmFjdG9yeSIsIm1vZGVsIiwiZmFjdG9yeSJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUVBOzs7O0FBQ0E7O0FBRUE7Ozs7QUFDQTs7QUFDQTs7QUFFQTs7OztBQUNBOztBQUdBOztBQUdBOzs7O0FBSkE7QUFNQSxtQkFBUUEsU0FBUixDQUFrQkMsUUFBbEIsRUFBNEIsQ0FBQyxPQUFELENBQTVCOztBQUhBLFk7Ozs7Ozs7Ozs7Ozs7QUNoQkEsS0FBSUMsVUFBV0MsUUFBUUMsTUFBUixDQUFlLE9BQWYsRUFBd0IsQ0FDbkMsWUFEbUMsQ0FBeEIsQ0FBZjs7bUJBSWVGLE87Ozs7Ozs7Ozs7Ozs7OztBQ0pmOzs7Ozs7OztLQUdhRyxRLFdBQUFBLFE7QUFFVCx1QkFBYUMsY0FBYixFQUE2QkMsYUFBN0IsRUFBNEM7QUFBQTs7QUFBQTs7QUFFeEMsY0FBS0QsY0FBTCxHQUFzQkEsY0FBdEI7QUFDQSxjQUFLQyxhQUFMLEdBQXNCQSxhQUF0Qjs7QUFFQSxjQUFLQyxPQUFMLEdBQ0ksS0FBS0YsY0FBTCxDQUFvQkcsVUFBcEIsR0FDS0MsR0FETCxDQUNTLFVBQUNDLE1BQUQsRUFBWTtBQUNiLG9CQUFPLE1BQUtKLGFBQUwsQ0FBbUJJLE1BQW5CLENBQVA7QUFDSCxVQUhMLENBREo7QUFLSDs7Ozt1Q0FFY0EsTSxFQUFRO0FBQ25CLGtCQUFLSCxPQUFMLENBQ0tJLE1BREwsQ0FDWSxVQUFDQyxPQUFELEVBQVVDLElBQVYsRUFBbUI7QUFDdkJBLHNCQUFLQyxRQUFMLEdBQWdCLEtBQWhCLEVBQXVCSixPQUFPSSxRQUFQLEdBQWtCLElBQXpDO0FBQ0gsY0FITCxFQUdPLEtBSFA7QUFJSDs7Ozs7O0FBSUwsa0JBQVFDLFVBQVIsQ0FBbUIsVUFBbkIsRUFBK0JYLFFBQS9CLEU7Ozs7Ozs7O0FDMUJBOzs7O0FBQ0E7Ozs7OztBQUVBLGtCQUFRWSxTQUFSLENBQWtCLFNBQWxCLEVBQTZCLFlBQVk7QUFDckM7O0FBRUEsWUFBTztBQUNIQyxtQkFBVSxJQURQO0FBRUhDLGdCQUFPLElBRko7QUFHSEMsdUJBQWMsTUFIWDtBQUlIQywyQkFBa0IsSUFKZjtBQUtIQyx5Q0FMRztBQU1ITixxQkFBWTtBQU5ULE1BQVA7QUFRSCxFQVhELEU7Ozs7OztBQ0hBLGtYQUFpWCxjQUFjLHFPOzs7Ozs7Ozs7Ozs7O0FDQS9YOzs7Ozs7OztLQUVhTyxVLFdBQUFBLFUsR0FFVCxzQkFBZTtBQUFBOztBQUNYLFVBQUtDLFFBQUwsR0FBZ0IsVUFBaEI7QUFDSCxFOztBQUlMLGtCQUFRUixVQUFSLENBQW1CLFlBQW5CLEVBQWlDTyxVQUFqQyxFOzs7Ozs7OztBQ1ZBOzs7O0FBQ0E7Ozs7OztBQUVBLGtCQUFRTixTQUFSLENBQWtCLGVBQWxCLEVBQW1DLFlBQVk7QUFDM0M7O0FBRUEsWUFBTztBQUNIQyxtQkFBVSxJQURQO0FBRUhDLGdCQUFPLElBRko7QUFHSEMsdUJBQWMsTUFIWDtBQUlIQywyQkFBa0IsSUFKZjtBQUtIQywyQ0FMRztBQU1ITixxQkFBWTtBQU5ULE1BQVA7QUFRSCxFQVhELEU7Ozs7OztBQ0hBLHFEOzs7Ozs7QUNBQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUFnRjtBQUNoRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBLGlDQUFnQyxVQUFVLEVBQUU7QUFDNUMsRTs7Ozs7O0FDcEJBO0FBQ0E7OztBQUdBO0FBQ0Esb0NBQW1DLCtFQUErRSxnSUFBZ0ksa0ZBQWtGLDZFQUE2RSw4RUFBOEUsMEVBQTBFLDJCQUEyQixFQUFFLGdCQUFnQixzQ0FBc0Msb0JBQW9CLGlCQUFpQixnQkFBZ0IsaUJBQWlCLEVBQUUsd0JBQXdCLCtCQUErQixFQUFFLHdCQUF3QixtREFBbUQsRUFBRSxrQkFBa0Isa0NBQWtDLEVBQUUsZUFBZSxlQUFlLEVBQUUsV0FBVyxzQ0FBc0Msc0JBQXNCLEVBQUUsZ0JBQWdCLHlDQUF5QyxpQkFBaUIscUJBQXFCLGlCQUFpQixxQkFBcUIsaUNBQWlDLEVBQUUsMkZBQTJGLGdDQUFnQywyQkFBMkIsZ0NBQWdDLEVBQUUsZ0JBQWdCLHNDQUFzQyxFQUFFLDJCQUEyQixnQkFBZ0IsZ0NBQWdDLEVBQUUsMkJBQTJCLHNDQUFzQyxFQUFFLGNBQWMsdUJBQXVCLHdCQUF3QixxQkFBcUIsRUFBRSxhQUFhLDhCQUE4Qix1QkFBdUIsaUJBQWlCLGtCQUFrQiwyQkFBMkIsdUJBQXVCLDBCQUEwQixxQkFBcUIsZ0JBQWdCLDJCQUEyQixlQUFlLDZCQUE2QixrQ0FBa0MsK0JBQStCLEVBQUU7O0FBRXI4RDs7Ozs7OztBQ1BBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGlCQUFnQixpQkFBaUI7QUFDakM7QUFDQTtBQUNBLHlDQUF3QyxnQkFBZ0I7QUFDeEQsS0FBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFnQixpQkFBaUI7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFZLG9CQUFvQjtBQUNoQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUNqREE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBb0I7QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRTtBQUNGO0FBQ0E7QUFDQSxHQUFFO0FBQ0Y7QUFDQTtBQUNBLEdBQUU7QUFDRjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxpQkFBZ0IsbUJBQW1CO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFnQixzQkFBc0I7QUFDdEM7QUFDQTtBQUNBLG1CQUFrQiwyQkFBMkI7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsZ0JBQWUsbUJBQW1CO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWlCLDJCQUEyQjtBQUM1QztBQUNBO0FBQ0EsU0FBUSx1QkFBdUI7QUFDL0I7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBLGtCQUFpQix1QkFBdUI7QUFDeEM7QUFDQTtBQUNBLDRCQUEyQjtBQUMzQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0JBQWUsaUJBQWlCO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFjO0FBQ2Q7QUFDQSxpQ0FBZ0Msc0JBQXNCO0FBQ3REO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUU7QUFDRjtBQUNBLEdBQUU7QUFDRjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFDOztBQUVEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esd0RBQXVEO0FBQ3ZEOztBQUVBLDhCQUE2QixtQkFBbUI7O0FBRWhEOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZQQTs7Ozs7Ozs7S0FFYVMsVyxXQUFBQSxXO0FBRVQsNEJBQWU7QUFBQTtBQUVkOzs7O3FDQUVZO0FBQ1RDLHFCQUFRQyxHQUFSLENBQVksY0FBWjtBQUNIOzs7Ozs7QUFJTCxrQkFBUVgsVUFBUixDQUFtQixhQUFuQixFQUFrQ1MsV0FBbEMsRTs7Ozs7Ozs7QUNkQTs7OztBQUNBOzs7Ozs7QUFFQSxrQkFBUVIsU0FBUixDQUFrQixnQkFBbEIsRUFBb0MsVUFBVVcsUUFBVixFQUFvQjtBQUNwRDs7QUFFQSxZQUFPO0FBQ0hWLG1CQUFVLElBRFA7QUFFSEMsZ0JBQU8sSUFGSjtBQUdIQyx1QkFBYyxNQUhYO0FBSUhDLDJCQUFrQixJQUpmO0FBS0hDLDRDQUxHO0FBTUhOLHFCQUFZLGFBTlQ7O0FBUUhhLGVBQU8sY0FBQ1YsS0FBRCxFQUFRVyxFQUFSLEVBQVlDLEtBQVosRUFBc0I7O0FBRXpCSCxzQkFBUyxZQUFNOztBQUVmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQyxjQXBCRCxFQW9CRyxDQXBCSDtBQXNCSDtBQWhDRSxNQUFQO0FBa0NILEVBckNELEU7Ozs7OztBQ0hBLHlsQzs7Ozs7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7O0tBRWFJLGMsV0FBQUEsYztBQUVULCtCQUFlO0FBQUE7QUFFZDs7OztzQ0FFYTs7QUFFVixvQkFBTyxDQUNIO0FBQ0lDLHFCQUFJLENBRFI7QUFFSUMsMEJBQVMsZUFGYjtBQUdJQyxzQkFBSywrQ0FIVDtBQUlJQywwQkFBUyxFQUFFLG9CQUFvQixTQUF0QjtBQUpiLGNBREcsRUFPSDtBQUNJSCxxQkFBSSxDQURSO0FBRUlDLDBCQUFTLGVBRmI7QUFHSUMsc0JBQUssZ0RBSFQ7QUFJSUMsMEJBQVMsRUFBRSxvQkFBb0IsU0FBdEI7QUFKYixjQVBHLEVBYUg7QUFDSUgscUJBQUksQ0FEUjtBQUVJQywwQkFBUyxlQUZiO0FBR0lDLHNCQUFLLCtDQUhUO0FBSUlDLDBCQUFTLEVBQUUsb0JBQW9CLFNBQXRCO0FBSmIsY0FiRyxDQUFQO0FBcUJIOzs7Ozs7QUFJTCxrQkFBUUMsT0FBUixDQUFnQixnQkFBaEIsRUFBa0NMLGNBQWxDLEU7Ozs7Ozs7Ozs7Ozs7O0FDbkNBOzs7Ozs7OztLQUVxQk0sYTtBQUVqQiw0QkFBYUMsS0FBYixFQUFvQjtBQUFBOztBQUVoQixjQUFLTixFQUFMLEdBQWdCTSxNQUFNTixFQUF0QjtBQUNBLGNBQUtsQixRQUFMLEdBQWdCLEtBQWhCO0FBQ0EsY0FBS21CLE9BQUwsR0FBZ0JLLE1BQU1MLE9BQXRCO0FBQ0EsY0FBS0MsR0FBTCxHQUFnQkksTUFBTUosR0FBdEI7QUFDQSxjQUFLQyxPQUFMLEdBQWdCRyxNQUFNSCxPQUF0QjtBQUVIOzs7O21DQUVpQjtBQUNkLG9CQUFPLFVBQUNHLEtBQUQ7QUFBQSx3QkFBVyxJQUFJRCxhQUFKLENBQWtCQyxLQUFsQixDQUFYO0FBQUEsY0FBUDtBQUNIOzs7Ozs7bUJBZGdCRCxhOzs7QUFpQnJCLGtCQUFRRSxPQUFSLENBQWdCLGVBQWhCLEVBQWlDRixjQUFjRSxPQUEvQyxFIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBhbmd1bGFyIGZyb20gJ2FuZ3VsYXInXG5pbXBvcnQgX21vZHVsZSBmcm9tICdtb2R1bGUnXG5cbmltcG9ydCBTaWRlQ3RybCBmcm9tICdzaWRlLmNvbnRyb2xsZXInXG5pbXBvcnQgJ3NpZGUuZGlyZWN0aXZlJ1xuXG5pbXBvcnQgSGVhZGVyQ3RybCBmcm9tICdoZWFkZXIuY29udHJvbGxlcidcbmltcG9ydCAnaGVhZGVyLmRpcmVjdGl2ZSdcbmltcG9ydCAnYXBwLnNjc3MnXG5cbmltcG9ydCBDb250ZW50Q3RybCBmcm9tICdjb250ZW50LmNvbnRyb2xsZXInXG5pbXBvcnQgJ2NvbnRlbnQuZGlyZWN0aXZlJ1xuXG4vL1NlcnZpY2VzXG5pbXBvcnQgJ3NpZGUuc2VydmljZSdcblxuLy9GYWN0b3JpZXNcbmltcG9ydCAnb3B0aW9uLmZhY3RvcnknXG5cbmFuZ3VsYXIuYm9vdHN0cmFwKGRvY3VtZW50LCBbJ25nQ2FyJ10pXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9pbmRleC5qc1xuICoqLyIsImxldCBfbW9kdWxlICA9IGFuZ3VsYXIubW9kdWxlKCduZ0NhcicsIFsgXG4gICAgJ25nTWF0ZXJpYWwnXG5dKVxuXG5leHBvcnQgZGVmYXVsdCBfbW9kdWxlXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9tb2R1bGUuanNcbiAqKi8iLCJpbXBvcnQgX21vZHVsZSBmcm9tICcuL21vZHVsZSdcblxuXG5leHBvcnQgY2xhc3MgU2lkZUN0cmwge1xuXG4gICAgY29uc3RydWN0b3IgKHNpZGVOYXZTZXJ2aWNlLCBvcHRpb25GYWN0b3J5KSB7XG5cbiAgICAgICAgdGhpcy5zaWRlTmF2U2VydmljZSA9IHNpZGVOYXZTZXJ2aWNlXG4gICAgICAgIHRoaXMub3B0aW9uRmFjdG9yeSAgPSBvcHRpb25GYWN0b3J5XG5cbiAgICAgICAgdGhpcy5vcHRpb25zID0gXG4gICAgICAgICAgICB0aGlzLnNpZGVOYXZTZXJ2aWNlLmdldE9wdGlvbnMoKVxuICAgICAgICAgICAgICAgIC5tYXAoKG9wdGlvbikgPT4ge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5vcHRpb25GYWN0b3J5KG9wdGlvbilcbiAgICAgICAgICAgICAgICB9KVxuICAgIH1cblxuICAgIG9uTWRMaXN0Q2xpY2sgKG9wdGlvbikge1xuICAgICAgICB0aGlzLm9wdGlvbnNcbiAgICAgICAgICAgIC5yZWR1Y2UoKGJvb2xlYW4sIGl0ZW0pID0+IHtcbiAgICAgICAgICAgICAgICBpdGVtLnNlbGVjdGVkID0gZmFsc2UsIG9wdGlvbi5zZWxlY3RlZCA9IHRydWVcbiAgICAgICAgICAgIH0sIGZhbHNlKVxuICAgIH1cblxufVxuXG5fbW9kdWxlLmNvbnRyb2xsZXIoJ1NpZGVDdHJsJywgU2lkZUN0cmwpXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zaWRlLmNvbnRyb2xsZXIuanNcbiAqKi8iLCJpbXBvcnQgX21vZHVsZSBmcm9tICcuL21vZHVsZSdcbmltcG9ydCB0ZW1wbGF0ZSBmcm9tICcuL3NpZGUudGVtcGxhdGUuaHRtbCdcblxuX21vZHVsZS5kaXJlY3RpdmUoJ3NpZGVuYXYnLCBmdW5jdGlvbiAoKSB7XG4gICAgJ25nSW5qZWN0J1xuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgcmVzdHJpY3Q6ICdBRScsXG4gICAgICAgIHNjb3BlOiB0cnVlLFxuICAgICAgICBjb250cm9sbGVyQXM6ICdjdHJsJyxcbiAgICAgICAgYmluZFRvQ29udHJvbGxlcjogdHJ1ZSxcbiAgICAgICAgdGVtcGxhdGU6IHRlbXBsYXRlLFxuICAgICAgICBjb250cm9sbGVyOiAnU2lkZUN0cmwnXG4gICAgfVxufSlcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NpZGUuZGlyZWN0aXZlLmpzXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxtZC1zaWRlbmF2IG1kLWlzLWxvY2tlZC1vcGVuPVxcXCJ0cnVlXFxcIiBjbGFzcz1cXFwibWQtd2hpdGVmcmFtZS00ZHBcXFwiPlxcbiAgICAgICAgICAgIDxtZC1saXN0IG5nLXJlcGVhdD1cXFwib3B0aW9uIGluIGN0cmwub3B0aW9uc1xcXCIgbmctY2xpY2s9XFxcImN0cmwub25NZExpc3RDbGljayhvcHRpb24pXFxcIj5cXG4gICAgICAgICAgICAgIDxtZC1saXN0LWl0ZW0gbmctY2xpY2s9XFxcImN0cmwub25NZExpc3RDbGljayhvcHRpb24pXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZy1jbGFzcz1cXFwib3B0aW9uLnNlbGVjdGVkID8gJ3NlbGVjdGVkJyA6ICcnXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgIDxpbWcgbmctc3JjPVxcXCJ7eyBvcHRpb24uaW1nIH19XFxcIiBjbGFzcz1cXFwiYXZhdGFyXFxcIiBcXG4gICAgICAgICAgICAgICAgICAgICAgICAgbmctc3R5bGU9XFxcIm9wdGlvbi5iZ2NvbG9yXFxcIiBcXG4gICAgICAgICAgICAgICAgICAgICAgICAgbmctY2xpY2s9XFxcImN0cmwub25NZExpc3RDbGljayhvcHRpb24pXFxcIj48L2ltZz5cXG4gICAgICAgICAgICAgIDwvbWQtbGlzdC1pdGVtPlxcbiAgICAgICAgICA8L21kLWxpc3Q+XFxuPC9tZC1zaWRlbmF2PlxcblxcblxcblxcbiAgICBcIlxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zaWRlLnRlbXBsYXRlLmh0bWxcbiAqKiBtb2R1bGUgaWQgPSA2XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJpbXBvcnQgX21vZHVsZSBmcm9tICcuL21vZHVsZSdcblxuZXhwb3J0IGNsYXNzIEhlYWRlckN0cmwge1xuXG4gICAgY29uc3RydWN0b3IgKCkge1xuICAgICAgICB0aGlzLmdyZWV0aW5nID0gJ2FzZGZhc2RmJ1xuICAgIH1cblxufVxuXG5fbW9kdWxlLmNvbnRyb2xsZXIoJ0hlYWRlckN0cmwnLCBIZWFkZXJDdHJsKVxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vaGVhZGVyLmNvbnRyb2xsZXIuanNcbiAqKi8iLCJpbXBvcnQgX21vZHVsZSBmcm9tICcuL21vZHVsZSdcbmltcG9ydCB0ZW1wbGF0ZSBmcm9tICcuL2hlYWRlci50ZW1wbGF0ZS5odG1sJ1xuXG5fbW9kdWxlLmRpcmVjdGl2ZSgnaGVhZGVyU2VjdGlvbicsIGZ1bmN0aW9uICgpIHtcbiAgICAnbmdJbmplY3QnXG5cbiAgICByZXR1cm4ge1xuICAgICAgICByZXN0cmljdDogJ0FFJyxcbiAgICAgICAgc2NvcGU6IHRydWUsXG4gICAgICAgIGNvbnRyb2xsZXJBczogJ2N0cmwnLFxuICAgICAgICBiaW5kVG9Db250cm9sbGVyOiB0cnVlLFxuICAgICAgICB0ZW1wbGF0ZTogdGVtcGxhdGUsXG4gICAgICAgIGNvbnRyb2xsZXI6ICdIZWFkZXJDdHJsJ1xuICAgIH1cbn0pXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9oZWFkZXIuZGlyZWN0aXZlLmpzXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxtZC10b29sYmFyPiAgICBcXG5cXG48L21kLXRvb2xiYXI+XCJcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vaGVhZGVyLnRlbXBsYXRlLmh0bWxcbiAqKiBtb2R1bGUgaWQgPSA5XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9pbmRleC5qcyEuL2FwcC5zY3NzXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIHt9KTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuXHQvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuXHRpZighY29udGVudC5sb2NhbHMpIHtcblx0XHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9pbmRleC5qcyEuL2FwcC5zY3NzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2luZGV4LmpzIS4vYXBwLnNjc3NcIik7XG5cdFx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblx0XHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0XHR9KTtcblx0fVxuXHQvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9hcHAuc2Nzc1xuICoqIG1vZHVsZSBpZCA9IDEwXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5yYWRpYWwge1xcbiAgYmFja2dyb3VuZDogLW1vei1yYWRpYWwtZ3JhZGllbnQoY2VudGVyLCBjaXJjbGUgY292ZXIsICNmZmYgMCUsICNmZmYgMTAwJSk7XFxuICBiYWNrZ3JvdW5kOiAtd2Via2l0LWdyYWRpZW50KHJhZGlhbCwgY2VudGVyIGNlbnRlciwgMHB4LCBjZW50ZXIgY2VudGVyLCAxMDAlLCBjb2xvci1zdG9wKDAlLCAjZmZmKSwgY29sb3Itc3RvcCgxMDAlLCAjZmZmKSk7XFxuICBiYWNrZ3JvdW5kOiAtd2Via2l0LXJhZGlhbC1ncmFkaWVudChjZW50ZXIsIGNpcmNsZSBjb3ZlciwgI2ZmZiAwJSwgI2ZmZiAxMDAlKTtcXG4gIGJhY2tncm91bmQ6IC1vLXJhZGlhbC1ncmFkaWVudChjZW50ZXIsIGNpcmNsZSBjb3ZlciwgI2ZmZiAwJSwgI2ZmZiAxMDAlKTtcXG4gIGJhY2tncm91bmQ6IC1tcy1yYWRpYWwtZ3JhZGllbnQoY2VudGVyLCBjaXJjbGUgY292ZXIsICNmZmYgMCUsICNmZmYgMTAwJSk7XFxuICBiYWNrZ3JvdW5kOiByYWRpYWwtZ3JhZGllbnQoY2VudGVyLCBjaXJjbGUgY292ZXIsICNmZmYgMCUsICNmZmYgMTAwJSk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmOyB9XFxuXFxuaHRtbCwgYm9keSB7XFxuICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XFxuICBmb250LXNpemU6IDE0cHg7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBtYXJnaW46IDBweDtcXG4gIHBhZGRpbmc6IDBweDsgfVxcblxcbm1kLWlucHV0LWNvbnRhaW5lciB7XFxuICBmb250LXNpemU6IDIycHggIWltcG9ydGFudDsgfVxcblxcbi5tZC13aGl0ZWZyYW1lLTBkcCB7XFxuICBib3gtc2hhZG93OiAwcHggMHB4IDBweCB0cmFuc3BhcmVudCAhaW1wb3J0YW50OyB9XFxuXFxuLnRyYW5zcGFyZW50IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50OyB9XFxuXFxuaW1nOmZvY3VzIHtcXG4gIG91dGxpbmU6IDA7IH1cXG5cXG5sYWJlbCB7XFxuICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XFxuICBmb250LXdlaWdodDogYm9sZDsgfVxcblxcbm1kLXRvb2xiYXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RlMzY0MSAhaW1wb3J0YW50O1xcbiAgbWFyZ2luOiBhdXRvO1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gIGhlaWdodDogNTBweDtcXG4gIG1pbi1oZWlnaHQ6IDUwcHg7XFxuICBtYXgtaGVpZ2h0OiAxMDBweCAhaW1wb3J0YW50OyB9XFxuXFxubWQtc2lkZW5hdiwgbWQtc2lkZW5hdi5tZC1sb2NrZWQtb3BlbiwgbWQtc2lkZW5hdi5tZC1jbG9zZWQubWQtbG9ja2VkLW9wZW4tYWRkLWFjdGl2ZSB7XFxuICBtaW4td2lkdGg6IDE1MHB4ICFpbXBvcnRhbnQ7XFxuICB3aWR0aDogNTB2dyAhaW1wb3J0YW50O1xcbiAgbWF4LXdpZHRoOiAxNTBweCAhaW1wb3J0YW50OyB9XFxuXFxubWQtY29udGVudCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7IH1cXG5cXG5tZC1saXN0LWl0ZW0gPiBidXR0b24ge1xcbiAgd2lkdGg6IDEwMCU7XFxuICB0ZXh0LWFsaWduOiBsZWZ0ICFpbXBvcnRhbnQ7IH1cXG5cXG5tZC1saXN0LWl0ZW0uc2VsZWN0ZWQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RkZCAhaW1wb3J0YW50OyB9XFxuXFxuI2NvbnRlbnQge1xcbiAgcGFkZGluZy1sZWZ0OiA0MHB4O1xcbiAgcGFkZGluZy1yaWdodDogNDBweDtcXG4gIHBhZGRpbmctdG9wOiA1cHg7IH1cXG5cXG4uYXZhdGFyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM4NGQ4ZmQ7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB3aWR0aDogMTY1cHg7XFxuICBoZWlnaHQ6IDE1OHB4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICBtYXJnaW46IDBweDtcXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxuICB6b29tOiAwLjcwO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDApO1xcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDAuNyk7XFxuICAtbW96LXRyYW5zZm9ybTogc2NhbGUoMC43KTsgfVxcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi4vfi9jc3MtbG9hZGVyIS4uL34vc2Fzcy1sb2FkZXIhLi9hcHAuc2Nzc1xuICoqIG1vZHVsZSBpZCA9IDExXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvKlxyXG5cdE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXHJcblx0QXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxyXG4qL1xyXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxyXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKCkge1xyXG5cdHZhciBsaXN0ID0gW107XHJcblxyXG5cdC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcclxuXHRsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XHJcblx0XHR2YXIgcmVzdWx0ID0gW107XHJcblx0XHRmb3IodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHR2YXIgaXRlbSA9IHRoaXNbaV07XHJcblx0XHRcdGlmKGl0ZW1bMl0pIHtcclxuXHRcdFx0XHRyZXN1bHQucHVzaChcIkBtZWRpYSBcIiArIGl0ZW1bMl0gKyBcIntcIiArIGl0ZW1bMV0gKyBcIn1cIik7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0cmVzdWx0LnB1c2goaXRlbVsxXSk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdHJldHVybiByZXN1bHQuam9pbihcIlwiKTtcclxuXHR9O1xyXG5cclxuXHQvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxyXG5cdGxpc3QuaSA9IGZ1bmN0aW9uKG1vZHVsZXMsIG1lZGlhUXVlcnkpIHtcclxuXHRcdGlmKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKVxyXG5cdFx0XHRtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCBcIlwiXV07XHJcblx0XHR2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xyXG5cdFx0Zm9yKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0dmFyIGlkID0gdGhpc1tpXVswXTtcclxuXHRcdFx0aWYodHlwZW9mIGlkID09PSBcIm51bWJlclwiKVxyXG5cdFx0XHRcdGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcclxuXHRcdH1cclxuXHRcdGZvcihpID0gMDsgaSA8IG1vZHVsZXMubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0dmFyIGl0ZW0gPSBtb2R1bGVzW2ldO1xyXG5cdFx0XHQvLyBza2lwIGFscmVhZHkgaW1wb3J0ZWQgbW9kdWxlXHJcblx0XHRcdC8vIHRoaXMgaW1wbGVtZW50YXRpb24gaXMgbm90IDEwMCUgcGVyZmVjdCBmb3Igd2VpcmQgbWVkaWEgcXVlcnkgY29tYmluYXRpb25zXHJcblx0XHRcdC8vICB3aGVuIGEgbW9kdWxlIGlzIGltcG9ydGVkIG11bHRpcGxlIHRpbWVzIHdpdGggZGlmZmVyZW50IG1lZGlhIHF1ZXJpZXMuXHJcblx0XHRcdC8vICBJIGhvcGUgdGhpcyB3aWxsIG5ldmVyIG9jY3VyIChIZXkgdGhpcyB3YXkgd2UgaGF2ZSBzbWFsbGVyIGJ1bmRsZXMpXHJcblx0XHRcdGlmKHR5cGVvZiBpdGVtWzBdICE9PSBcIm51bWJlclwiIHx8ICFhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XHJcblx0XHRcdFx0aWYobWVkaWFRdWVyeSAmJiAhaXRlbVsyXSkge1xyXG5cdFx0XHRcdFx0aXRlbVsyXSA9IG1lZGlhUXVlcnk7XHJcblx0XHRcdFx0fSBlbHNlIGlmKG1lZGlhUXVlcnkpIHtcclxuXHRcdFx0XHRcdGl0ZW1bMl0gPSBcIihcIiArIGl0ZW1bMl0gKyBcIikgYW5kIChcIiArIG1lZGlhUXVlcnkgKyBcIilcIjtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0bGlzdC5wdXNoKGl0ZW0pO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fTtcclxuXHRyZXR1cm4gbGlzdDtcclxufTtcclxuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuLi9+L2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXG4gKiogbW9kdWxlIGlkID0gMTJcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8qXHJcblx0TUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcclxuXHRBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXHJcbiovXHJcbnZhciBzdHlsZXNJbkRvbSA9IHt9LFxyXG5cdG1lbW9pemUgPSBmdW5jdGlvbihmbikge1xyXG5cdFx0dmFyIG1lbW87XHJcblx0XHRyZXR1cm4gZnVuY3Rpb24gKCkge1xyXG5cdFx0XHRpZiAodHlwZW9mIG1lbW8gPT09IFwidW5kZWZpbmVkXCIpIG1lbW8gPSBmbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xyXG5cdFx0XHRyZXR1cm4gbWVtbztcclxuXHRcdH07XHJcblx0fSxcclxuXHRpc09sZElFID0gbWVtb2l6ZShmdW5jdGlvbigpIHtcclxuXHRcdHJldHVybiAvbXNpZSBbNi05XVxcYi8udGVzdCh3aW5kb3cubmF2aWdhdG9yLnVzZXJBZ2VudC50b0xvd2VyQ2FzZSgpKTtcclxuXHR9KSxcclxuXHRnZXRIZWFkRWxlbWVudCA9IG1lbW9pemUoZnVuY3Rpb24gKCkge1xyXG5cdFx0cmV0dXJuIGRvY3VtZW50LmhlYWQgfHwgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJoZWFkXCIpWzBdO1xyXG5cdH0pLFxyXG5cdHNpbmdsZXRvbkVsZW1lbnQgPSBudWxsLFxyXG5cdHNpbmdsZXRvbkNvdW50ZXIgPSAwLFxyXG5cdHN0eWxlRWxlbWVudHNJbnNlcnRlZEF0VG9wID0gW107XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGxpc3QsIG9wdGlvbnMpIHtcclxuXHRpZih0eXBlb2YgREVCVUcgIT09IFwidW5kZWZpbmVkXCIgJiYgREVCVUcpIHtcclxuXHRcdGlmKHR5cGVvZiBkb2N1bWVudCAhPT0gXCJvYmplY3RcIikgdGhyb3cgbmV3IEVycm9yKFwiVGhlIHN0eWxlLWxvYWRlciBjYW5ub3QgYmUgdXNlZCBpbiBhIG5vbi1icm93c2VyIGVudmlyb25tZW50XCIpO1xyXG5cdH1cclxuXHJcblx0b3B0aW9ucyA9IG9wdGlvbnMgfHwge307XHJcblx0Ly8gRm9yY2Ugc2luZ2xlLXRhZyBzb2x1dGlvbiBvbiBJRTYtOSwgd2hpY2ggaGFzIGEgaGFyZCBsaW1pdCBvbiB0aGUgIyBvZiA8c3R5bGU+XHJcblx0Ly8gdGFncyBpdCB3aWxsIGFsbG93IG9uIGEgcGFnZVxyXG5cdGlmICh0eXBlb2Ygb3B0aW9ucy5zaW5nbGV0b24gPT09IFwidW5kZWZpbmVkXCIpIG9wdGlvbnMuc2luZ2xldG9uID0gaXNPbGRJRSgpO1xyXG5cclxuXHQvLyBCeSBkZWZhdWx0LCBhZGQgPHN0eWxlPiB0YWdzIHRvIHRoZSBib3R0b20gb2YgPGhlYWQ+LlxyXG5cdGlmICh0eXBlb2Ygb3B0aW9ucy5pbnNlcnRBdCA9PT0gXCJ1bmRlZmluZWRcIikgb3B0aW9ucy5pbnNlcnRBdCA9IFwiYm90dG9tXCI7XHJcblxyXG5cdHZhciBzdHlsZXMgPSBsaXN0VG9TdHlsZXMobGlzdCk7XHJcblx0YWRkU3R5bGVzVG9Eb20oc3R5bGVzLCBvcHRpb25zKTtcclxuXHJcblx0cmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XHJcblx0XHR2YXIgbWF5UmVtb3ZlID0gW107XHJcblx0XHRmb3IodmFyIGkgPSAwOyBpIDwgc3R5bGVzLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdHZhciBpdGVtID0gc3R5bGVzW2ldO1xyXG5cdFx0XHR2YXIgZG9tU3R5bGUgPSBzdHlsZXNJbkRvbVtpdGVtLmlkXTtcclxuXHRcdFx0ZG9tU3R5bGUucmVmcy0tO1xyXG5cdFx0XHRtYXlSZW1vdmUucHVzaChkb21TdHlsZSk7XHJcblx0XHR9XHJcblx0XHRpZihuZXdMaXN0KSB7XHJcblx0XHRcdHZhciBuZXdTdHlsZXMgPSBsaXN0VG9TdHlsZXMobmV3TGlzdCk7XHJcblx0XHRcdGFkZFN0eWxlc1RvRG9tKG5ld1N0eWxlcywgb3B0aW9ucyk7XHJcblx0XHR9XHJcblx0XHRmb3IodmFyIGkgPSAwOyBpIDwgbWF5UmVtb3ZlLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdHZhciBkb21TdHlsZSA9IG1heVJlbW92ZVtpXTtcclxuXHRcdFx0aWYoZG9tU3R5bGUucmVmcyA9PT0gMCkge1xyXG5cdFx0XHRcdGZvcih2YXIgaiA9IDA7IGogPCBkb21TdHlsZS5wYXJ0cy5sZW5ndGg7IGorKylcclxuXHRcdFx0XHRcdGRvbVN0eWxlLnBhcnRzW2pdKCk7XHJcblx0XHRcdFx0ZGVsZXRlIHN0eWxlc0luRG9tW2RvbVN0eWxlLmlkXTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH07XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFkZFN0eWxlc1RvRG9tKHN0eWxlcywgb3B0aW9ucykge1xyXG5cdGZvcih2YXIgaSA9IDA7IGkgPCBzdHlsZXMubGVuZ3RoOyBpKyspIHtcclxuXHRcdHZhciBpdGVtID0gc3R5bGVzW2ldO1xyXG5cdFx0dmFyIGRvbVN0eWxlID0gc3R5bGVzSW5Eb21baXRlbS5pZF07XHJcblx0XHRpZihkb21TdHlsZSkge1xyXG5cdFx0XHRkb21TdHlsZS5yZWZzKys7XHJcblx0XHRcdGZvcih2YXIgaiA9IDA7IGogPCBkb21TdHlsZS5wYXJ0cy5sZW5ndGg7IGorKykge1xyXG5cdFx0XHRcdGRvbVN0eWxlLnBhcnRzW2pdKGl0ZW0ucGFydHNbal0pO1xyXG5cdFx0XHR9XHJcblx0XHRcdGZvcig7IGogPCBpdGVtLnBhcnRzLmxlbmd0aDsgaisrKSB7XHJcblx0XHRcdFx0ZG9tU3R5bGUucGFydHMucHVzaChhZGRTdHlsZShpdGVtLnBhcnRzW2pdLCBvcHRpb25zKSk7XHJcblx0XHRcdH1cclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHZhciBwYXJ0cyA9IFtdO1xyXG5cdFx0XHRmb3IodmFyIGogPSAwOyBqIDwgaXRlbS5wYXJ0cy5sZW5ndGg7IGorKykge1xyXG5cdFx0XHRcdHBhcnRzLnB1c2goYWRkU3R5bGUoaXRlbS5wYXJ0c1tqXSwgb3B0aW9ucykpO1xyXG5cdFx0XHR9XHJcblx0XHRcdHN0eWxlc0luRG9tW2l0ZW0uaWRdID0ge2lkOiBpdGVtLmlkLCByZWZzOiAxLCBwYXJ0czogcGFydHN9O1xyXG5cdFx0fVxyXG5cdH1cclxufVxyXG5cclxuZnVuY3Rpb24gbGlzdFRvU3R5bGVzKGxpc3QpIHtcclxuXHR2YXIgc3R5bGVzID0gW107XHJcblx0dmFyIG5ld1N0eWxlcyA9IHt9O1xyXG5cdGZvcih2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XHJcblx0XHR2YXIgaXRlbSA9IGxpc3RbaV07XHJcblx0XHR2YXIgaWQgPSBpdGVtWzBdO1xyXG5cdFx0dmFyIGNzcyA9IGl0ZW1bMV07XHJcblx0XHR2YXIgbWVkaWEgPSBpdGVtWzJdO1xyXG5cdFx0dmFyIHNvdXJjZU1hcCA9IGl0ZW1bM107XHJcblx0XHR2YXIgcGFydCA9IHtjc3M6IGNzcywgbWVkaWE6IG1lZGlhLCBzb3VyY2VNYXA6IHNvdXJjZU1hcH07XHJcblx0XHRpZighbmV3U3R5bGVzW2lkXSlcclxuXHRcdFx0c3R5bGVzLnB1c2gobmV3U3R5bGVzW2lkXSA9IHtpZDogaWQsIHBhcnRzOiBbcGFydF19KTtcclxuXHRcdGVsc2VcclxuXHRcdFx0bmV3U3R5bGVzW2lkXS5wYXJ0cy5wdXNoKHBhcnQpO1xyXG5cdH1cclxuXHRyZXR1cm4gc3R5bGVzO1xyXG59XHJcblxyXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucywgc3R5bGVFbGVtZW50KSB7XHJcblx0dmFyIGhlYWQgPSBnZXRIZWFkRWxlbWVudCgpO1xyXG5cdHZhciBsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcCA9IHN0eWxlRWxlbWVudHNJbnNlcnRlZEF0VG9wW3N0eWxlRWxlbWVudHNJbnNlcnRlZEF0VG9wLmxlbmd0aCAtIDFdO1xyXG5cdGlmIChvcHRpb25zLmluc2VydEF0ID09PSBcInRvcFwiKSB7XHJcblx0XHRpZighbGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3ApIHtcclxuXHRcdFx0aGVhZC5pbnNlcnRCZWZvcmUoc3R5bGVFbGVtZW50LCBoZWFkLmZpcnN0Q2hpbGQpO1xyXG5cdFx0fSBlbHNlIGlmKGxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wLm5leHRTaWJsaW5nKSB7XHJcblx0XHRcdGhlYWQuaW5zZXJ0QmVmb3JlKHN0eWxlRWxlbWVudCwgbGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3AubmV4dFNpYmxpbmcpO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0aGVhZC5hcHBlbmRDaGlsZChzdHlsZUVsZW1lbnQpO1xyXG5cdFx0fVxyXG5cdFx0c3R5bGVFbGVtZW50c0luc2VydGVkQXRUb3AucHVzaChzdHlsZUVsZW1lbnQpO1xyXG5cdH0gZWxzZSBpZiAob3B0aW9ucy5pbnNlcnRBdCA9PT0gXCJib3R0b21cIikge1xyXG5cdFx0aGVhZC5hcHBlbmRDaGlsZChzdHlsZUVsZW1lbnQpO1xyXG5cdH0gZWxzZSB7XHJcblx0XHR0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIHZhbHVlIGZvciBwYXJhbWV0ZXIgJ2luc2VydEF0Jy4gTXVzdCBiZSAndG9wJyBvciAnYm90dG9tJy5cIik7XHJcblx0fVxyXG59XHJcblxyXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XHJcblx0c3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcclxuXHR2YXIgaWR4ID0gc3R5bGVFbGVtZW50c0luc2VydGVkQXRUb3AuaW5kZXhPZihzdHlsZUVsZW1lbnQpO1xyXG5cdGlmKGlkeCA+PSAwKSB7XHJcblx0XHRzdHlsZUVsZW1lbnRzSW5zZXJ0ZWRBdFRvcC5zcGxpY2UoaWR4LCAxKTtcclxuXHR9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZVN0eWxlRWxlbWVudChvcHRpb25zKSB7XHJcblx0dmFyIHN0eWxlRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcclxuXHRzdHlsZUVsZW1lbnQudHlwZSA9IFwidGV4dC9jc3NcIjtcclxuXHRpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucywgc3R5bGVFbGVtZW50KTtcclxuXHRyZXR1cm4gc3R5bGVFbGVtZW50O1xyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVMaW5rRWxlbWVudChvcHRpb25zKSB7XHJcblx0dmFyIGxpbmtFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpbmtcIik7XHJcblx0bGlua0VsZW1lbnQucmVsID0gXCJzdHlsZXNoZWV0XCI7XHJcblx0aW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMsIGxpbmtFbGVtZW50KTtcclxuXHRyZXR1cm4gbGlua0VsZW1lbnQ7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFkZFN0eWxlKG9iaiwgb3B0aW9ucykge1xyXG5cdHZhciBzdHlsZUVsZW1lbnQsIHVwZGF0ZSwgcmVtb3ZlO1xyXG5cclxuXHRpZiAob3B0aW9ucy5zaW5nbGV0b24pIHtcclxuXHRcdHZhciBzdHlsZUluZGV4ID0gc2luZ2xldG9uQ291bnRlcisrO1xyXG5cdFx0c3R5bGVFbGVtZW50ID0gc2luZ2xldG9uRWxlbWVudCB8fCAoc2luZ2xldG9uRWxlbWVudCA9IGNyZWF0ZVN0eWxlRWxlbWVudChvcHRpb25zKSk7XHJcblx0XHR1cGRhdGUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGVFbGVtZW50LCBzdHlsZUluZGV4LCBmYWxzZSk7XHJcblx0XHRyZW1vdmUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGVFbGVtZW50LCBzdHlsZUluZGV4LCB0cnVlKTtcclxuXHR9IGVsc2UgaWYob2JqLnNvdXJjZU1hcCAmJlxyXG5cdFx0dHlwZW9mIFVSTCA9PT0gXCJmdW5jdGlvblwiICYmXHJcblx0XHR0eXBlb2YgVVJMLmNyZWF0ZU9iamVjdFVSTCA9PT0gXCJmdW5jdGlvblwiICYmXHJcblx0XHR0eXBlb2YgVVJMLnJldm9rZU9iamVjdFVSTCA9PT0gXCJmdW5jdGlvblwiICYmXHJcblx0XHR0eXBlb2YgQmxvYiA9PT0gXCJmdW5jdGlvblwiICYmXHJcblx0XHR0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XHJcblx0XHRzdHlsZUVsZW1lbnQgPSBjcmVhdGVMaW5rRWxlbWVudChvcHRpb25zKTtcclxuXHRcdHVwZGF0ZSA9IHVwZGF0ZUxpbmsuYmluZChudWxsLCBzdHlsZUVsZW1lbnQpO1xyXG5cdFx0cmVtb3ZlID0gZnVuY3Rpb24oKSB7XHJcblx0XHRcdHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xyXG5cdFx0XHRpZihzdHlsZUVsZW1lbnQuaHJlZilcclxuXHRcdFx0XHRVUkwucmV2b2tlT2JqZWN0VVJMKHN0eWxlRWxlbWVudC5ocmVmKTtcclxuXHRcdH07XHJcblx0fSBlbHNlIHtcclxuXHRcdHN0eWxlRWxlbWVudCA9IGNyZWF0ZVN0eWxlRWxlbWVudChvcHRpb25zKTtcclxuXHRcdHVwZGF0ZSA9IGFwcGx5VG9UYWcuYmluZChudWxsLCBzdHlsZUVsZW1lbnQpO1xyXG5cdFx0cmVtb3ZlID0gZnVuY3Rpb24oKSB7XHJcblx0XHRcdHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xyXG5cdFx0fTtcclxuXHR9XHJcblxyXG5cdHVwZGF0ZShvYmopO1xyXG5cclxuXHRyZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUobmV3T2JqKSB7XHJcblx0XHRpZihuZXdPYmopIHtcclxuXHRcdFx0aWYobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwKVxyXG5cdFx0XHRcdHJldHVybjtcclxuXHRcdFx0dXBkYXRlKG9iaiA9IG5ld09iaik7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRyZW1vdmUoKTtcclxuXHRcdH1cclxuXHR9O1xyXG59XHJcblxyXG52YXIgcmVwbGFjZVRleHQgPSAoZnVuY3Rpb24gKCkge1xyXG5cdHZhciB0ZXh0U3RvcmUgPSBbXTtcclxuXHJcblx0cmV0dXJuIGZ1bmN0aW9uIChpbmRleCwgcmVwbGFjZW1lbnQpIHtcclxuXHRcdHRleHRTdG9yZVtpbmRleF0gPSByZXBsYWNlbWVudDtcclxuXHRcdHJldHVybiB0ZXh0U3RvcmUuZmlsdGVyKEJvb2xlYW4pLmpvaW4oJ1xcbicpO1xyXG5cdH07XHJcbn0pKCk7XHJcblxyXG5mdW5jdGlvbiBhcHBseVRvU2luZ2xldG9uVGFnKHN0eWxlRWxlbWVudCwgaW5kZXgsIHJlbW92ZSwgb2JqKSB7XHJcblx0dmFyIGNzcyA9IHJlbW92ZSA/IFwiXCIgOiBvYmouY3NzO1xyXG5cclxuXHRpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcclxuXHRcdHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSByZXBsYWNlVGV4dChpbmRleCwgY3NzKTtcclxuXHR9IGVsc2Uge1xyXG5cdFx0dmFyIGNzc05vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpO1xyXG5cdFx0dmFyIGNoaWxkTm9kZXMgPSBzdHlsZUVsZW1lbnQuY2hpbGROb2RlcztcclxuXHRcdGlmIChjaGlsZE5vZGVzW2luZGV4XSkgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKGNoaWxkTm9kZXNbaW5kZXhdKTtcclxuXHRcdGlmIChjaGlsZE5vZGVzLmxlbmd0aCkge1xyXG5cdFx0XHRzdHlsZUVsZW1lbnQuaW5zZXJ0QmVmb3JlKGNzc05vZGUsIGNoaWxkTm9kZXNbaW5kZXhdKTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChjc3NOb2RlKTtcclxuXHRcdH1cclxuXHR9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFwcGx5VG9UYWcoc3R5bGVFbGVtZW50LCBvYmopIHtcclxuXHR2YXIgY3NzID0gb2JqLmNzcztcclxuXHR2YXIgbWVkaWEgPSBvYmoubWVkaWE7XHJcblx0dmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XHJcblxyXG5cdGlmKG1lZGlhKSB7XHJcblx0XHRzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibWVkaWFcIiwgbWVkaWEpXHJcblx0fVxyXG5cclxuXHRpZihzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xyXG5cdFx0c3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcclxuXHR9IGVsc2Uge1xyXG5cdFx0d2hpbGUoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcclxuXHRcdFx0c3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcclxuXHRcdH1cclxuXHRcdHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcclxuXHR9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHVwZGF0ZUxpbmsobGlua0VsZW1lbnQsIG9iaikge1xyXG5cdHZhciBjc3MgPSBvYmouY3NzO1xyXG5cdHZhciBtZWRpYSA9IG9iai5tZWRpYTtcclxuXHR2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcclxuXHJcblx0aWYoc291cmNlTWFwKSB7XHJcblx0XHQvLyBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vYS8yNjYwMzg3NVxyXG5cdFx0Y3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIiArIGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSkgKyBcIiAqL1wiO1xyXG5cdH1cclxuXHJcblx0dmFyIGJsb2IgPSBuZXcgQmxvYihbY3NzXSwgeyB0eXBlOiBcInRleHQvY3NzXCIgfSk7XHJcblxyXG5cdHZhciBvbGRTcmMgPSBsaW5rRWxlbWVudC5ocmVmO1xyXG5cclxuXHRsaW5rRWxlbWVudC5ocmVmID0gVVJMLmNyZWF0ZU9iamVjdFVSTChibG9iKTtcclxuXHJcblx0aWYob2xkU3JjKVxyXG5cdFx0VVJMLnJldm9rZU9iamVjdFVSTChvbGRTcmMpO1xyXG59XHJcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi4vfi9zdHlsZS1sb2FkZXIvYWRkU3R5bGVzLmpzXG4gKiogbW9kdWxlIGlkID0gMTNcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsImltcG9ydCBfbW9kdWxlIGZyb20gJy4vbW9kdWxlJ1xuXG5leHBvcnQgY2xhc3MgQ29udGVudEN0cmwge1xuXG4gICAgY29uc3RydWN0b3IgKCkge1xuICAgICAgICBcbiAgICB9XG5cbiAgICBhcmVhQ2xpY2sgKCkge1xuICAgICAgICBjb25zb2xlLmxvZygnYXNmYXNkZmFzZGZzJylcbiAgICB9XG5cbn1cblxuX21vZHVsZS5jb250cm9sbGVyKCdDb250ZW50Q3RybCcsIENvbnRlbnRDdHJsKVxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vY29udGVudC5jb250cm9sbGVyLmpzXG4gKiovIiwiaW1wb3J0IF9tb2R1bGUgZnJvbSAnLi9tb2R1bGUnXG5pbXBvcnQgdGVtcGxhdGUgZnJvbSAnLi9jb250ZW50LnRlbXBsYXRlLmh0bWwnXG5cbl9tb2R1bGUuZGlyZWN0aXZlKCdjb250ZW50U2VjdGlvbicsIGZ1bmN0aW9uICgkdGltZW91dCkge1xuICAgICduZ0luamVjdCdcblxuICAgIHJldHVybiB7XG4gICAgICAgIHJlc3RyaWN0OiAnQUUnLFxuICAgICAgICBzY29wZTogdHJ1ZSxcbiAgICAgICAgY29udHJvbGxlckFzOiAnY3RybCcsXG4gICAgICAgIGJpbmRUb0NvbnRyb2xsZXI6IHRydWUsXG4gICAgICAgIHRlbXBsYXRlOiB0ZW1wbGF0ZSxcbiAgICAgICAgY29udHJvbGxlcjogJ0NvbnRlbnRDdHJsJyxcblxuICAgICAgICBsaW5rIDogKHNjb3BlLCBlbCwgYXR0cnMpID0+IHtcblxuICAgICAgICAgICAgJHRpbWVvdXQoKCkgPT4ge1xuXG4gICAgICAgICAgICAvLyAkKCcjY2FyJykubWFwc3Rlcih7XG4gICAgICAgICAgICAvLyAgICAgc3RhdGljU3RhdGU6IHRydWUsXG4gICAgICAgICAgICAvLyAgICAgZmlsbE9wYWNpdHk6IDAuNCxcbiAgICAgICAgICAgIC8vICAgICBmaWxsQ29sb3I6ICdmYWRiYjg0JyxcbiAgICAgICAgICAgIC8vICAgICBoaWdobGlnaHQ6IHRydWUsXG4gICAgICAgICAgICAvLyAgICAgbWFwS2V5OiAnbmFtZScsXG4gICAgICAgICAgICAvLyAgICAgc2hvd1Rvb2xUaXA6IHRydWUsXG4gICAgICAgICAgICAvLyAgICAgc2NhbGVNYXA6IGZhbHNlLFxuICAgICAgICAgICAgLy8gICAgIHRvb2xUaXBDbG9zZTogW1widG9vbHRpcC1jbGlja1wiLFwiYXJlYS1tb3VzZW91dFwiXSxcbiAgICAgICAgICAgIC8vICAgICBhcmVhczogW3tcbiAgICAgICAgICAgIC8vICAgICAgICAga2V5OiAnQ2FyJyxcbiAgICAgICAgICAgIC8vICAgICAgICAgdG9vbFRpcDogJ1B1ZXJ0YSBmcm9udGFsIGxhZG8gaXpxdWllcmRvLidcbiAgICAgICAgICAgIC8vICAgICB9XSwgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAvLyAgICAgb25DbGljazogZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAvLyAgICAgfVxuICAgICAgICAgICAgLy8gfSk7XG5cbiAgICAgICAgICAgIH0sIDApXG4gICAgICAgICAgICBcbiAgICAgICAgfVxuICAgIH1cbn0pXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9jb250ZW50LmRpcmVjdGl2ZS5qc1xuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gXCI8bWQtY29udGVudCBjbGFzcz1cXFwibWQtcGFkZGluZ1xcXCIgbGF5b3V0LXhzPVxcXCJjb2x1bW5cXFwiIGxheW91dD1cXFwicm93XFxcIj5cXG4gICAgPGRpdiBmbGV4LXhzIGZsZXgtZ3QteHM9XFxcIjEwMFxcXCIgbGF5b3V0PVxcXCJjb2x1bW5cXFwiPlxcbiAgICAgIDxmb3JtIG5hbWU9XFxcInVzZXJGb3JtXFxcIj5cXG4gICAgICAgIDxtZC1pbnB1dC1jb250YWluZXI+XFxuICAgICAgICA8bGFiZWw+VGl0bGU8L2xhYmVsPlxcbiAgICAgICAgPGlucHV0IG5nLW1vZGVsPVxcXCJ1c2VyLnRpdGxlXFxcIj5cXG4gICAgICA8L21kLWlucHV0LWNvbnRhaW5lcj5cXG4gICAgICA8bWQtaW5wdXQtY29udGFpbmVyPlxcbiAgICAgICAgPGxhYmVsPkVtYWlsPC9sYWJlbD5cXG4gICAgICAgIDxpbnB1dCBuZy1tb2RlbD1cXFwidXNlci5lbWFpbFxcXCIgdHlwZT1cXFwiZW1haWxcXFwiPlxcbiAgICAgIDwvbWQtaW5wdXQtY29udGFpbmVyPlxcbiAgICAgIDwvZm9ybT5cXG4gICAgPC9kaXY+XFxuPC9tZC1jb250ZW50PlxcblxcbjxkaXYgY2xhc3M9XFxcImNvbnRhaW5lciBtZC13aGl0ZWZyYW1lLTBkcFxcXCI+XFxuICAgIDxtZC1jb250ZW50IGNsYXNzPVxcXCJtZC1wYWRkaW5nIG1kLXdoaXRlZnJhbWUtMGRwXFxcIiBsYXlvdXQteHM9XFxcImNvbHVtblxcXCIgbGF5b3V0PVxcXCJyb3dcXFwiPlxcbiAgICAgICAgPG1kLWNhcmQgY2xhc3M9XFxcIm1kLXdoaXRlZnJhbWUtMGRwXFxcIj5cXG4gICAgICAgICAgICA8aW1nIG5nLXNyYz1cXFwiaHR0cHM6Ly9zMTYucG9zdGltZy5vcmcvYnhjejlyMXlkL25nY2Fyc2lkZS5wbmdcXFwiIGNsYXNzPVxcXCJtZC1jYXJkLWltYWdlXFxcIiBpZD1cXFwiY2FyXFxcIiB1c2VtYXA9XFxcIiNjYXItbWFwXFxcIj5cXG4gICAgICAgICAgICAgICAgPG1hcCBuYW1lPVxcXCJjYXItbWFwXFxcIiBuZy1jbGljaz1cXFwiY3RybC5hcmVhQ2xpY2soKVxcXCI+XFxuICAgICAgICAgICAgICAgICAgICA8YXJlYSBhbHQ9XFxcIkxGZG9vclxcXCIgdGl0bGU9XFxcIkxGZG9vclxcXCIgbmFtZT1cXFwiQ2FyXFxcIiBocmVmPVxcXCIjXFxcIiBjb29yZHM9XFxcIjIzNiwxNjQsMjQ1LDE0MCw0MzUsMTI2LDQyOSwxNTAsNDI5LDI1MywyNDEsMjYxXFxcIiBzaGFwZT1cXFwicG9seVxcXCI+XFxuICAgICAgICAgICAgICAgIDwvbWFwPlxcbiAgICAgICAgPC9tZC1jYXJkPlxcbiAgICA8L21kLWNvbnRlbnQ+XFxuPC9kaXY+XFxuXCJcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vY29udGVudC50ZW1wbGF0ZS5odG1sXG4gKiogbW9kdWxlIGlkID0gMTZcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsImltcG9ydCBfbW9kdWxlIGZyb20gJy4vbW9kdWxlJ1xuXG5leHBvcnQgY2xhc3MgU2lkZU5hdlNlcnZpY2Uge1xuXG4gICAgY29uc3RydWN0b3IgKCkge1xuICAgICAgICBcbiAgICB9XG5cbiAgICBnZXRPcHRpb25zICgpIHtcblxuICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGlkOiAxLFxuICAgICAgICAgICAgICAgIGRpc3BsYXk6ICdWaXN0YSBMYXRlcmFsJyxcbiAgICAgICAgICAgICAgICBpbWc6ICdodHRwczovL3MxOC5wb3N0aW1nLm9yZy9pbTZtMDBycmQvY2Fyc2lkZS5wbmcnLFxuICAgICAgICAgICAgICAgIGJnY29sb3I6IHsgJ2JhY2tncm91bmQtY29sb3InOiAnI2JiZjVjYicgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBpZDogMixcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiAnVmlzdGEgRnJvbnRhbCcsXG4gICAgICAgICAgICAgICAgaW1nOiAnaHR0cHM6Ly9zMTcucG9zdGltZy5vcmcvOGp0cmRxN3RyL2NhcmZyb250LnBuZycsXG4gICAgICAgICAgICAgICAgYmdjb2xvcjogeyAnYmFja2dyb3VuZC1jb2xvcic6ICcjZmVkZmI1JyB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGlkOiAzLFxuICAgICAgICAgICAgICAgIGRpc3BsYXk6ICdWaXN0YSBUcmFzZXJhJyxcbiAgICAgICAgICAgICAgICBpbWc6ICdodHRwczovL3MxOC5wb3N0aW1nLm9yZy83ZmZnbmp5cnQvY2FyYmFjay5wbmcnLFxuICAgICAgICAgICAgICAgIGJnY29sb3I6IHsgJ2JhY2tncm91bmQtY29sb3InOiAnIzg0ZDhmZCcgfVxuICAgICAgICAgICAgfVxuICAgICAgICBdXG5cbiAgICB9XG5cbn1cblxuX21vZHVsZS5zZXJ2aWNlKCdzaWRlTmF2U2VydmljZScsIFNpZGVOYXZTZXJ2aWNlKVxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc2lkZS5zZXJ2aWNlLmpzXG4gKiovIiwiaW1wb3J0IF9tb2R1bGUgZnJvbSAnLi9tb2R1bGUnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE9wdGlvbkZhY3Rvcnkge1xuICAgIFxuICAgIGNvbnN0cnVjdG9yIChtb2RlbCkge1xuICAgICAgICBcbiAgICAgICAgdGhpcy5pZCAgICAgICA9IG1vZGVsLmlkXG4gICAgICAgIHRoaXMuc2VsZWN0ZWQgPSBmYWxzZVxuICAgICAgICB0aGlzLmRpc3BsYXkgID0gbW9kZWwuZGlzcGxheVxuICAgICAgICB0aGlzLmltZyAgICAgID0gbW9kZWwuaW1nXG4gICAgICAgIHRoaXMuYmdjb2xvciAgPSBtb2RlbC5iZ2NvbG9yXG5cbiAgICB9XG5cbiAgICBzdGF0aWMgZmFjdG9yeSAoKSB7XG4gICAgICAgIHJldHVybiAobW9kZWwpID0+IG5ldyBPcHRpb25GYWN0b3J5KG1vZGVsKVxuICAgIH1cbn1cblxuX21vZHVsZS5mYWN0b3J5KCdvcHRpb25GYWN0b3J5JywgT3B0aW9uRmFjdG9yeS5mYWN0b3J5KVxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vb3B0aW9uLmZhY3RvcnkuanNcbiAqKi8iXSwic291cmNlUm9vdCI6IiJ9
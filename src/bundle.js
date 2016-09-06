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
	
	__webpack_require__(19);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	//Factories
	_angular2.default.bootstrap(document, ['ngCar']);
	
	//Services

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
	
	var _$rootScope = void 0;
	
	var SideCtrl = exports.SideCtrl = function () {
	    function SideCtrl(sideNavService, optionFactory, contentFactory, $rootScope) {
	        var _this = this;
	
	        _classCallCheck(this, SideCtrl);
	
	        this.sideNavService = sideNavService;
	        this.optionFactory = optionFactory;
	        this.contentFactory = contentFactory();
	        _$rootScope = $rootScope;
	
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
	
	            _$rootScope.$broadcast('onViewChange:Event', option);
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
	
	var _$rootScope = void 0;
	
	var ContentCtrl = exports.ContentCtrl = function () {
	    function ContentCtrl(contentFactory, $rootScope, carService) {
	        var _this = this;
	
	        _classCallCheck(this, ContentCtrl);
	
	        this.contentFactory = contentFactory();
	        this.carService = carService;
	        _$rootScope = $rootScope;
	
	        _$rootScope.$on('onViewChange:Event', function (event, option) {
	            _this.contentFactory.onViewChange(option);
	        });
	
	        debugger;
	        this.cars = this.carService.getAll();
	    }
	
	    _createClass(ContentCtrl, [{
	        key: 'areaClick',
	        value: function areaClick() {
	            console.log('car part selected');
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
	        scope: {},
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

	module.exports = "<md-content class=\"md-padding\" layout-xs=\"column\" layout=\"row\">\r\n    <div flex-xs flex-gt-xs=\"100\" layout=\"column\">\r\n      <form name=\"userForm\">\r\n        <md-input-container>\r\n        <label>Title</label>\r\n        <input ng-model=\"user.title\">\r\n      </md-input-container>\r\n      <md-input-container>\r\n        <label>Email</label>\r\n        <input ng-model=\"user.email\" type=\"email\">\r\n      </md-input-container>\r\n      </form>\r\n    </div>\r\n</md-content>\r\n\r\n<div class=\"container md-whiteframe-0dp\">\r\n    <md-content class=\"md-padding md-whiteframe-0dp\" layout-xs=\"column\" layout=\"row\">\r\n        <md-card class=\"md-whiteframe-0dp\" ng-repeat=\"car in ctrl.cars\">\r\n            <img ng-src=\"{{car.image.url}}\" class=\"md-card-image\" id=\"{{car.image.id}}\" usemap=\"{{car.image.usemap}}\">\r\n            <map name=\"{{car.map.name}}\" ng-click=\"ctrl.areaClick()\">\r\n                <area ng-repeat=\"area in car.map.areas\"\r\n                      alt=\"{{area.alt}}\" \r\n                      title=\"{{area.title}}\"  \r\n                      href=\"#\" \r\n                      coords=\"{{area.coords}}\" \r\n                      shape=\"{{area.shape}}\">\r\n            </map>\r\n        </md-card>\r\n    </md-content>\r\n</div>"

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
	                view: 'sideview',
	                img: 'https://s18.postimg.org/im6m00rrd/carside.png',
	                bgcolor: { 'background-color': '#bbf5cb' }
	            }, {
	                id: 2,
	                view: 'frontview',
	                img: 'https://s17.postimg.org/8jtrdq7tr/carfront.png',
	                bgcolor: { 'background-color': '#fedfb5' }
	            }, {
	                id: 3,
	                view: 'rearview',
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
	        this.view = model.view;
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

/***/ },
/* 19 */
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
	
	var ContentFactory = function () {
	    function ContentFactory() {
	        _classCallCheck(this, ContentFactory);
	
	        this.view = 'frontview';
	    }
	
	    _createClass(ContentFactory, [{
	        key: 'onViewChange',
	        value: function onViewChange(option) {
	            this.view = option.view;
	        }
	    }], [{
	        key: 'factory',
	        value: function factory() {
	            return function () {
	                return new ContentFactory();
	            };
	        }
	    }]);
	
	    return ContentFactory;
	}();
	
	exports.default = ContentFactory;
	
	
	_module3.default.factory('contentFactory', ContentFactory.factory);

/***/ }
]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vLy4vc2lkZS5jb250cm9sbGVyLmpzIiwid2VicGFjazovLy8uL3NpZGUuZGlyZWN0aXZlLmpzIiwid2VicGFjazovLy8uL3NpZGUudGVtcGxhdGUuaHRtbCIsIndlYnBhY2s6Ly8vLi9oZWFkZXIuY29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly8vLi9oZWFkZXIuZGlyZWN0aXZlLmpzIiwid2VicGFjazovLy8uL2hlYWRlci50ZW1wbGF0ZS5odG1sIiwid2VicGFjazovLy8uL2FwcC5zY3NzPzEwMTMiLCJ3ZWJwYWNrOi8vLy4vYXBwLnNjc3MiLCJ3ZWJwYWNrOi8vLy4uL34vY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanMiLCJ3ZWJwYWNrOi8vLy4uL34vc3R5bGUtbG9hZGVyL2FkZFN0eWxlcy5qcyIsIndlYnBhY2s6Ly8vLi9jb250ZW50LmNvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vY29udGVudC5kaXJlY3RpdmUuanMiLCJ3ZWJwYWNrOi8vLy4vY29udGVudC50ZW1wbGF0ZS5odG1sIiwid2VicGFjazovLy8uL3NpZGUuc2VydmljZS5qcyIsIndlYnBhY2s6Ly8vLi9vcHRpb24uZmFjdG9yeS5qcyIsIndlYnBhY2s6Ly8vLi9jb250ZW50LmZhY3RvcnkuanMiXSwibmFtZXMiOlsiYm9vdHN0cmFwIiwiZG9jdW1lbnQiLCJfbW9kdWxlIiwiYW5ndWxhciIsIm1vZHVsZSIsIl8kcm9vdFNjb3BlIiwiU2lkZUN0cmwiLCJzaWRlTmF2U2VydmljZSIsIm9wdGlvbkZhY3RvcnkiLCJjb250ZW50RmFjdG9yeSIsIiRyb290U2NvcGUiLCJvcHRpb25zIiwiZ2V0T3B0aW9ucyIsIm1hcCIsIm9wdGlvbiIsInJlZHVjZSIsImJvb2xlYW4iLCJpdGVtIiwic2VsZWN0ZWQiLCIkYnJvYWRjYXN0IiwiY29udHJvbGxlciIsImRpcmVjdGl2ZSIsInJlc3RyaWN0Iiwic2NvcGUiLCJjb250cm9sbGVyQXMiLCJiaW5kVG9Db250cm9sbGVyIiwidGVtcGxhdGUiLCJIZWFkZXJDdHJsIiwiZ3JlZXRpbmciLCJDb250ZW50Q3RybCIsImNhclNlcnZpY2UiLCIkb24iLCJldmVudCIsIm9uVmlld0NoYW5nZSIsImNhcnMiLCJnZXRBbGwiLCJjb25zb2xlIiwibG9nIiwiJHRpbWVvdXQiLCJsaW5rIiwiZWwiLCJhdHRycyIsIlNpZGVOYXZTZXJ2aWNlIiwiaWQiLCJ2aWV3IiwiaW1nIiwiYmdjb2xvciIsInNlcnZpY2UiLCJPcHRpb25GYWN0b3J5IiwibW9kZWwiLCJmYWN0b3J5IiwiQ29udGVudEZhY3RvcnkiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFFQTs7OztBQUNBOztBQUVBOzs7O0FBQ0E7O0FBQ0E7O0FBRUE7Ozs7QUFDQTs7QUFHQTs7QUFHQTs7QUFDQTs7OztBQUZBO0FBSUEsbUJBQVFBLFNBQVIsQ0FBa0JDLFFBQWxCLEVBQTRCLENBQUMsT0FBRCxDQUE1Qjs7QUFQQSxXOzs7Ozs7Ozs7Ozs7O0FDYkEsS0FBSUMsVUFBV0MsUUFBUUMsTUFBUixDQUFlLE9BQWYsRUFBd0IsQ0FDbkMsWUFEbUMsQ0FBeEIsQ0FBZjs7bUJBSWVGLE87Ozs7Ozs7Ozs7Ozs7OztBQ0pmOzs7Ozs7OztBQUVBLEtBQUlHLG9CQUFKOztLQUVhQyxRLFdBQUFBLFE7QUFFVCx1QkFBYUMsY0FBYixFQUE2QkMsYUFBN0IsRUFBNENDLGNBQTVDLEVBQTREQyxVQUE1RCxFQUF3RTtBQUFBOztBQUFBOztBQUVwRSxjQUFLSCxjQUFMLEdBQXNCQSxjQUF0QjtBQUNBLGNBQUtDLGFBQUwsR0FBc0JBLGFBQXRCO0FBQ0EsY0FBS0MsY0FBTCxHQUFzQkEsZ0JBQXRCO0FBQ0FKLHVCQUFzQkssVUFBdEI7O0FBRUEsY0FBS0MsT0FBTCxHQUNJLEtBQUtKLGNBQUwsQ0FBb0JLLFVBQXBCLEdBQ0tDLEdBREwsQ0FDUyxVQUFDQyxNQUFELEVBQVk7QUFDYixvQkFBTyxNQUFL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bXBvcnQgYW5ndWxhciBmcm9tICdhbmd1bGFyJ1xyXG5pbXBvcnQgX21vZHVsZSBmcm9tICdtb2R1bGUnXHJcblxyXG5pbXBvcnQgU2lkZUN0cmwgZnJvbSAnc2lkZS5jb250cm9sbGVyJ1xyXG5pbXBvcnQgJ3NpZGUuZGlyZWN0aXZlJ1xyXG5cclxuaW1wb3J0IEhlYWRlckN0cmwgZnJvbSAnaGVhZGVyLmNvbnRyb2xsZXInXHJcbmltcG9ydCAnaGVhZGVyLmRpcmVjdGl2ZSdcclxuaW1wb3J0ICdhcHAuc2NzcydcclxuXHJcbmltcG9ydCBDb250ZW50Q3RybCBmcm9tICdjb250ZW50LmNvbnRyb2xsZXInXHJcbmltcG9ydCAnY29udGVudC5kaXJlY3RpdmUnXHJcblxyXG4vL1NlcnZpY2VzXHJcbmltcG9ydCAnc2lkZS5zZXJ2aWNlJ1xyXG5cclxuLy9GYWN0b3JpZXNcclxuaW1wb3J0ICdvcHRpb24uZmFjdG9yeSdcclxuaW1wb3J0ICdjb250ZW50LmZhY3RvcnknXHJcblxyXG5hbmd1bGFyLmJvb3RzdHJhcChkb2N1bWVudCwgWyduZ0NhciddKVxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vaW5kZXguanNcbiAqKi8iLCJsZXQgX21vZHVsZSAgPSBhbmd1bGFyLm1vZHVsZSgnbmdDYXInLCBbIFxuICAgICduZ01hdGVyaWFsJ1xuXSlcblxuZXhwb3J0IGRlZmF1bHQgX21vZHVsZVxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vbW9kdWxlLmpzXG4gKiovIiwiaW1wb3J0IF9tb2R1bGUgZnJvbSAnLi9tb2R1bGUnXHJcblxyXG5sZXQgXyRyb290U2NvcGVcclxuXHJcbmV4cG9ydCBjbGFzcyBTaWRlQ3RybCB7XHJcblxyXG4gICAgY29uc3RydWN0b3IgKHNpZGVOYXZTZXJ2aWNlLCBvcHRpb25GYWN0b3J5LCBjb250ZW50RmFjdG9yeSwgJHJvb3RTY29wZSkge1xyXG5cclxuICAgICAgICB0aGlzLnNpZGVOYXZTZXJ2aWNlID0gc2lkZU5hdlNlcnZpY2VcclxuICAgICAgICB0aGlzLm9wdGlvbkZhY3RvcnkgID0gb3B0aW9uRmFjdG9yeVxyXG4gICAgICAgIHRoaXMuY29udGVudEZhY3RvcnkgPSBjb250ZW50RmFjdG9yeSgpXHJcbiAgICAgICAgXyRyb290U2NvcGUgICAgICAgICA9ICRyb290U2NvcGVcclxuXHJcbiAgICAgICAgdGhpcy5vcHRpb25zID0gXHJcbiAgICAgICAgICAgIHRoaXMuc2lkZU5hdlNlcnZpY2UuZ2V0T3B0aW9ucygpXHJcbiAgICAgICAgICAgICAgICAubWFwKChvcHRpb24pID0+IHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5vcHRpb25GYWN0b3J5KG9wdGlvbilcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgb25NZExpc3RDbGljayAob3B0aW9uKSB7XHJcbiAgICAgICAgdGhpcy5vcHRpb25zXHJcbiAgICAgICAgICAgIC5yZWR1Y2UoKGJvb2xlYW4sIGl0ZW0pID0+IHtcclxuICAgICAgICAgICAgICAgIGl0ZW0uc2VsZWN0ZWQgPSBmYWxzZSwgb3B0aW9uLnNlbGVjdGVkID0gdHJ1ZVxyXG4gICAgICAgICAgICB9LCBmYWxzZSlcclxuXHJcbiAgICAgICAgXyRyb290U2NvcGUuJGJyb2FkY2FzdCgnb25WaWV3Q2hhbmdlOkV2ZW50Jywgb3B0aW9uKVxyXG4gICAgICAgICAgICAgIFxyXG4gICAgfVxyXG5cclxufVxyXG5cclxuX21vZHVsZS5jb250cm9sbGVyKCdTaWRlQ3RybCcsIFNpZGVDdHJsKVxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc2lkZS5jb250cm9sbGVyLmpzXG4gKiovIiwiaW1wb3J0IF9tb2R1bGUgZnJvbSAnLi9tb2R1bGUnXG5pbXBvcnQgdGVtcGxhdGUgZnJvbSAnLi9zaWRlLnRlbXBsYXRlLmh0bWwnXG5cbl9tb2R1bGUuZGlyZWN0aXZlKCdzaWRlbmF2JywgZnVuY3Rpb24gKCkge1xuICAgICduZ0luamVjdCdcblxuICAgIHJldHVybiB7XG4gICAgICAgIHJlc3RyaWN0OiAnQUUnLFxuICAgICAgICBzY29wZTogdHJ1ZSxcbiAgICAgICAgY29udHJvbGxlckFzOiAnY3RybCcsXG4gICAgICAgIGJpbmRUb0NvbnRyb2xsZXI6IHRydWUsXG4gICAgICAgIHRlbXBsYXRlOiB0ZW1wbGF0ZSxcbiAgICAgICAgY29udHJvbGxlcjogJ1NpZGVDdHJsJ1xuICAgIH1cbn0pXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zaWRlLmRpcmVjdGl2ZS5qc1xuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gXCI8bWQtc2lkZW5hdiBtZC1pcy1sb2NrZWQtb3Blbj1cXFwidHJ1ZVxcXCIgY2xhc3M9XFxcIm1kLXdoaXRlZnJhbWUtNGRwXFxcIj5cXG4gICAgICAgICAgICA8bWQtbGlzdCBuZy1yZXBlYXQ9XFxcIm9wdGlvbiBpbiBjdHJsLm9wdGlvbnNcXFwiIG5nLWNsaWNrPVxcXCJjdHJsLm9uTWRMaXN0Q2xpY2sob3B0aW9uKVxcXCI+XFxuICAgICAgICAgICAgICA8bWQtbGlzdC1pdGVtIG5nLWNsaWNrPVxcXCJjdHJsLm9uTWRMaXN0Q2xpY2sob3B0aW9uKVxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmctY2xhc3M9XFxcIm9wdGlvbi5zZWxlY3RlZCA/ICdzZWxlY3RlZCcgOiAnJ1xcXCI+XFxuICAgICAgICAgICAgICAgICAgICA8aW1nIG5nLXNyYz1cXFwie3sgb3B0aW9uLmltZyB9fVxcXCIgY2xhc3M9XFxcImF2YXRhclxcXCIgXFxuICAgICAgICAgICAgICAgICAgICAgICAgIG5nLXN0eWxlPVxcXCJvcHRpb24uYmdjb2xvclxcXCIgXFxuICAgICAgICAgICAgICAgICAgICAgICAgIG5nLWNsaWNrPVxcXCJjdHJsLm9uTWRMaXN0Q2xpY2sob3B0aW9uKVxcXCI+PC9pbWc+XFxuICAgICAgICAgICAgICA8L21kLWxpc3QtaXRlbT5cXG4gICAgICAgICAgPC9tZC1saXN0PlxcbjwvbWQtc2lkZW5hdj5cXG5cXG5cXG5cXG4gICAgXCJcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc2lkZS50ZW1wbGF0ZS5odG1sXG4gKiogbW9kdWxlIGlkID0gNlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiaW1wb3J0IF9tb2R1bGUgZnJvbSAnLi9tb2R1bGUnXG5cbmV4cG9ydCBjbGFzcyBIZWFkZXJDdHJsIHtcblxuICAgIGNvbnN0cnVjdG9yICgpIHtcbiAgICAgICAgdGhpcy5ncmVldGluZyA9ICdhc2RmYXNkZidcbiAgICB9XG5cbn1cblxuX21vZHVsZS5jb250cm9sbGVyKCdIZWFkZXJDdHJsJywgSGVhZGVyQ3RybClcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL2hlYWRlci5jb250cm9sbGVyLmpzXG4gKiovIiwiaW1wb3J0IF9tb2R1bGUgZnJvbSAnLi9tb2R1bGUnXG5pbXBvcnQgdGVtcGxhdGUgZnJvbSAnLi9oZWFkZXIudGVtcGxhdGUuaHRtbCdcblxuX21vZHVsZS5kaXJlY3RpdmUoJ2hlYWRlclNlY3Rpb24nLCBmdW5jdGlvbiAoKSB7XG4gICAgJ25nSW5qZWN0J1xuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgcmVzdHJpY3Q6ICdBRScsXG4gICAgICAgIHNjb3BlOiB0cnVlLFxuICAgICAgICBjb250cm9sbGVyQXM6ICdjdHJsJyxcbiAgICAgICAgYmluZFRvQ29udHJvbGxlcjogdHJ1ZSxcbiAgICAgICAgdGVtcGxhdGU6IHRlbXBsYXRlLFxuICAgICAgICBjb250cm9sbGVyOiAnSGVhZGVyQ3RybCdcbiAgICB9XG59KVxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vaGVhZGVyLmRpcmVjdGl2ZS5qc1xuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gXCI8bWQtdG9vbGJhcj4gICAgXFxuXFxuPC9tZC10b29sYmFyPlwiXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL2hlYWRlci50ZW1wbGF0ZS5odG1sXG4gKiogbW9kdWxlIGlkID0gOVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvaW5kZXguanMhLi9hcHAuc2Nzc1wiKTtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCB7fSk7XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcblx0Ly8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3Ncblx0aWYoIWNvbnRlbnQubG9jYWxzKSB7XG5cdFx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvaW5kZXguanMhLi9hcHAuc2Nzc1wiLCBmdW5jdGlvbigpIHtcblx0XHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9pbmRleC5qcyEuL2FwcC5zY3NzXCIpO1xuXHRcdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cdFx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdFx0fSk7XG5cdH1cblx0Ly8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn1cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vYXBwLnNjc3NcbiAqKiBtb2R1bGUgaWQgPSAxMFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKCk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIucmFkaWFsIHtcXG4gIGJhY2tncm91bmQ6IC1tb3otcmFkaWFsLWdyYWRpZW50KGNlbnRlciwgY2lyY2xlIGNvdmVyLCAjZmZmIDAlLCAjZmZmIDEwMCUpO1xcbiAgYmFja2dyb3VuZDogLXdlYmtpdC1ncmFkaWVudChyYWRpYWwsIGNlbnRlciBjZW50ZXIsIDBweCwgY2VudGVyIGNlbnRlciwgMTAwJSwgY29sb3Itc3RvcCgwJSwgI2ZmZiksIGNvbG9yLXN0b3AoMTAwJSwgI2ZmZikpO1xcbiAgYmFja2dyb3VuZDogLXdlYmtpdC1yYWRpYWwtZ3JhZGllbnQoY2VudGVyLCBjaXJjbGUgY292ZXIsICNmZmYgMCUsICNmZmYgMTAwJSk7XFxuICBiYWNrZ3JvdW5kOiAtby1yYWRpYWwtZ3JhZGllbnQoY2VudGVyLCBjaXJjbGUgY292ZXIsICNmZmYgMCUsICNmZmYgMTAwJSk7XFxuICBiYWNrZ3JvdW5kOiAtbXMtcmFkaWFsLWdyYWRpZW50KGNlbnRlciwgY2lyY2xlIGNvdmVyLCAjZmZmIDAlLCAjZmZmIDEwMCUpO1xcbiAgYmFja2dyb3VuZDogcmFkaWFsLWdyYWRpZW50KGNlbnRlciwgY2lyY2xlIGNvdmVyLCAjZmZmIDAlLCAjZmZmIDEwMCUpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjsgfVxcblxcbmh0bWwsIGJvZHkge1xcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xcbiAgZm9udC1zaXplOiAxNHB4O1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgbWFyZ2luOiAwcHg7XFxuICBwYWRkaW5nOiAwcHg7IH1cXG5cXG5tZC1pbnB1dC1jb250YWluZXIge1xcbiAgZm9udC1zaXplOiAyMnB4ICFpbXBvcnRhbnQ7IH1cXG5cXG4ubWQtd2hpdGVmcmFtZS0wZHAge1xcbiAgYm94LXNoYWRvdzogMHB4IDBweCAwcHggdHJhbnNwYXJlbnQgIWltcG9ydGFudDsgfVxcblxcbi50cmFuc3BhcmVudCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDsgfVxcblxcbmltZzpmb2N1cyB7XFxuICBvdXRsaW5lOiAwOyB9XFxuXFxubGFiZWwge1xcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7IH1cXG5cXG5tZC10b29sYmFyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNkZTM2NDEgIWltcG9ydGFudDtcXG4gIG1hcmdpbjogYXV0bztcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICBoZWlnaHQ6IDUwcHg7XFxuICBtaW4taGVpZ2h0OiA1MHB4O1xcbiAgbWF4LWhlaWdodDogMTAwcHggIWltcG9ydGFudDsgfVxcblxcbm1kLXNpZGVuYXYsIG1kLXNpZGVuYXYubWQtbG9ja2VkLW9wZW4sIG1kLXNpZGVuYXYubWQtY2xvc2VkLm1kLWxvY2tlZC1vcGVuLWFkZC1hY3RpdmUge1xcbiAgbWluLXdpZHRoOiAxNTBweCAhaW1wb3J0YW50O1xcbiAgd2lkdGg6IDUwdncgIWltcG9ydGFudDtcXG4gIG1heC13aWR0aDogMTUwcHggIWltcG9ydGFudDsgfVxcblxcbm1kLWNvbnRlbnQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZiAhaW1wb3J0YW50OyB9XFxuXFxubWQtbGlzdC1pdGVtID4gYnV0dG9uIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgdGV4dC1hbGlnbjogbGVmdCAhaW1wb3J0YW50OyB9XFxuXFxubWQtbGlzdC1pdGVtLnNlbGVjdGVkIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNkZGQgIWltcG9ydGFudDsgfVxcblxcbiNjb250ZW50IHtcXG4gIHBhZGRpbmctbGVmdDogNDBweDtcXG4gIHBhZGRpbmctcmlnaHQ6IDQwcHg7XFxuICBwYWRkaW5nLXRvcDogNXB4OyB9XFxuXFxuLmF2YXRhciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjODRkOGZkO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgd2lkdGg6IDE2NXB4O1xcbiAgaGVpZ2h0OiAxNThweDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgbWFyZ2luOiAwcHg7XFxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcbiAgem9vbTogMC43MDtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWigwKTtcXG4gIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwLjcpO1xcbiAgLW1vei10cmFuc2Zvcm06IHNjYWxlKDAuNyk7IH1cXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4uL34vY3NzLWxvYWRlciEuLi9+L3Nhc3MtbG9hZGVyIS4vYXBwLnNjc3NcbiAqKiBtb2R1bGUgaWQgPSAxMVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLypcclxuXHRNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxyXG5cdEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcclxuKi9cclxuLy8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcclxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbigpIHtcclxuXHR2YXIgbGlzdCA9IFtdO1xyXG5cclxuXHQvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXHJcblx0bGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xyXG5cdFx0dmFyIHJlc3VsdCA9IFtdO1xyXG5cdFx0Zm9yKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0dmFyIGl0ZW0gPSB0aGlzW2ldO1xyXG5cdFx0XHRpZihpdGVtWzJdKSB7XHJcblx0XHRcdFx0cmVzdWx0LnB1c2goXCJAbWVkaWEgXCIgKyBpdGVtWzJdICsgXCJ7XCIgKyBpdGVtWzFdICsgXCJ9XCIpO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdHJlc3VsdC5wdXNoKGl0ZW1bMV0pO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gcmVzdWx0LmpvaW4oXCJcIik7XHJcblx0fTtcclxuXHJcblx0Ly8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcclxuXHRsaXN0LmkgPSBmdW5jdGlvbihtb2R1bGVzLCBtZWRpYVF1ZXJ5KSB7XHJcblx0XHRpZih0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIilcclxuXHRcdFx0bW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgXCJcIl1dO1xyXG5cdFx0dmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcclxuXHRcdGZvcih2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdHZhciBpZCA9IHRoaXNbaV1bMF07XHJcblx0XHRcdGlmKHR5cGVvZiBpZCA9PT0gXCJudW1iZXJcIilcclxuXHRcdFx0XHRhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XHJcblx0XHR9XHJcblx0XHRmb3IoaSA9IDA7IGkgPCBtb2R1bGVzLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdHZhciBpdGVtID0gbW9kdWxlc1tpXTtcclxuXHRcdFx0Ly8gc2tpcCBhbHJlYWR5IGltcG9ydGVkIG1vZHVsZVxyXG5cdFx0XHQvLyB0aGlzIGltcGxlbWVudGF0aW9uIGlzIG5vdCAxMDAlIHBlcmZlY3QgZm9yIHdlaXJkIG1lZGlhIHF1ZXJ5IGNvbWJpbmF0aW9uc1xyXG5cdFx0XHQvLyAgd2hlbiBhIG1vZHVsZSBpcyBpbXBvcnRlZCBtdWx0aXBsZSB0aW1lcyB3aXRoIGRpZmZlcmVudCBtZWRpYSBxdWVyaWVzLlxyXG5cdFx0XHQvLyAgSSBob3BlIHRoaXMgd2lsbCBuZXZlciBvY2N1ciAoSGV5IHRoaXMgd2F5IHdlIGhhdmUgc21hbGxlciBidW5kbGVzKVxyXG5cdFx0XHRpZih0eXBlb2YgaXRlbVswXSAhPT0gXCJudW1iZXJcIiB8fCAhYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xyXG5cdFx0XHRcdGlmKG1lZGlhUXVlcnkgJiYgIWl0ZW1bMl0pIHtcclxuXHRcdFx0XHRcdGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xyXG5cdFx0XHRcdH0gZWxzZSBpZihtZWRpYVF1ZXJ5KSB7XHJcblx0XHRcdFx0XHRpdGVtWzJdID0gXCIoXCIgKyBpdGVtWzJdICsgXCIpIGFuZCAoXCIgKyBtZWRpYVF1ZXJ5ICsgXCIpXCI7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGxpc3QucHVzaChpdGVtKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH07XHJcblx0cmV0dXJuIGxpc3Q7XHJcbn07XHJcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi4vfi9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1xuICoqIG1vZHVsZSBpZCA9IDEyXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvKlxyXG5cdE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXHJcblx0QXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxyXG4qL1xyXG52YXIgc3R5bGVzSW5Eb20gPSB7fSxcclxuXHRtZW1vaXplID0gZnVuY3Rpb24oZm4pIHtcclxuXHRcdHZhciBtZW1vO1xyXG5cdFx0cmV0dXJuIGZ1bmN0aW9uICgpIHtcclxuXHRcdFx0aWYgKHR5cGVvZiBtZW1vID09PSBcInVuZGVmaW5lZFwiKSBtZW1vID0gZm4uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcclxuXHRcdFx0cmV0dXJuIG1lbW87XHJcblx0XHR9O1xyXG5cdH0sXHJcblx0aXNPbGRJRSA9IG1lbW9pemUoZnVuY3Rpb24oKSB7XHJcblx0XHRyZXR1cm4gL21zaWUgWzYtOV1cXGIvLnRlc3Qod2luZG93Lm5hdmlnYXRvci51c2VyQWdlbnQudG9Mb3dlckNhc2UoKSk7XHJcblx0fSksXHJcblx0Z2V0SGVhZEVsZW1lbnQgPSBtZW1vaXplKGZ1bmN0aW9uICgpIHtcclxuXHRcdHJldHVybiBkb2N1bWVudC5oZWFkIHx8IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiaGVhZFwiKVswXTtcclxuXHR9KSxcclxuXHRzaW5nbGV0b25FbGVtZW50ID0gbnVsbCxcclxuXHRzaW5nbGV0b25Db3VudGVyID0gMCxcclxuXHRzdHlsZUVsZW1lbnRzSW5zZXJ0ZWRBdFRvcCA9IFtdO1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihsaXN0LCBvcHRpb25zKSB7XHJcblx0aWYodHlwZW9mIERFQlVHICE9PSBcInVuZGVmaW5lZFwiICYmIERFQlVHKSB7XHJcblx0XHRpZih0eXBlb2YgZG9jdW1lbnQgIT09IFwib2JqZWN0XCIpIHRocm93IG5ldyBFcnJvcihcIlRoZSBzdHlsZS1sb2FkZXIgY2Fubm90IGJlIHVzZWQgaW4gYSBub24tYnJvd3NlciBlbnZpcm9ubWVudFwiKTtcclxuXHR9XHJcblxyXG5cdG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xyXG5cdC8vIEZvcmNlIHNpbmdsZS10YWcgc29sdXRpb24gb24gSUU2LTksIHdoaWNoIGhhcyBhIGhhcmQgbGltaXQgb24gdGhlICMgb2YgPHN0eWxlPlxyXG5cdC8vIHRhZ3MgaXQgd2lsbCBhbGxvdyBvbiBhIHBhZ2VcclxuXHRpZiAodHlwZW9mIG9wdGlvbnMuc2luZ2xldG9uID09PSBcInVuZGVmaW5lZFwiKSBvcHRpb25zLnNpbmdsZXRvbiA9IGlzT2xkSUUoKTtcclxuXHJcblx0Ly8gQnkgZGVmYXVsdCwgYWRkIDxzdHlsZT4gdGFncyB0byB0aGUgYm90dG9tIG9mIDxoZWFkPi5cclxuXHRpZiAodHlwZW9mIG9wdGlvbnMuaW5zZXJ0QXQgPT09IFwidW5kZWZpbmVkXCIpIG9wdGlvbnMuaW5zZXJ0QXQgPSBcImJvdHRvbVwiO1xyXG5cclxuXHR2YXIgc3R5bGVzID0gbGlzdFRvU3R5bGVzKGxpc3QpO1xyXG5cdGFkZFN0eWxlc1RvRG9tKHN0eWxlcywgb3B0aW9ucyk7XHJcblxyXG5cdHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xyXG5cdFx0dmFyIG1heVJlbW92ZSA9IFtdO1xyXG5cdFx0Zm9yKHZhciBpID0gMDsgaSA8IHN0eWxlcy5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHR2YXIgaXRlbSA9IHN0eWxlc1tpXTtcclxuXHRcdFx0dmFyIGRvbVN0eWxlID0gc3R5bGVzSW5Eb21baXRlbS5pZF07XHJcblx0XHRcdGRvbVN0eWxlLnJlZnMtLTtcclxuXHRcdFx0bWF5UmVtb3ZlLnB1c2goZG9tU3R5bGUpO1xyXG5cdFx0fVxyXG5cdFx0aWYobmV3TGlzdCkge1xyXG5cdFx0XHR2YXIgbmV3U3R5bGVzID0gbGlzdFRvU3R5bGVzKG5ld0xpc3QpO1xyXG5cdFx0XHRhZGRTdHlsZXNUb0RvbShuZXdTdHlsZXMsIG9wdGlvbnMpO1xyXG5cdFx0fVxyXG5cdFx0Zm9yKHZhciBpID0gMDsgaSA8IG1heVJlbW92ZS5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHR2YXIgZG9tU3R5bGUgPSBtYXlSZW1vdmVbaV07XHJcblx0XHRcdGlmKGRvbVN0eWxlLnJlZnMgPT09IDApIHtcclxuXHRcdFx0XHRmb3IodmFyIGogPSAwOyBqIDwgZG9tU3R5bGUucGFydHMubGVuZ3RoOyBqKyspXHJcblx0XHRcdFx0XHRkb21TdHlsZS5wYXJ0c1tqXSgpO1xyXG5cdFx0XHRcdGRlbGV0ZSBzdHlsZXNJbkRvbVtkb21TdHlsZS5pZF07XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9O1xyXG59XHJcblxyXG5mdW5jdGlvbiBhZGRTdHlsZXNUb0RvbShzdHlsZXMsIG9wdGlvbnMpIHtcclxuXHRmb3IodmFyIGkgPSAwOyBpIDwgc3R5bGVzLmxlbmd0aDsgaSsrKSB7XHJcblx0XHR2YXIgaXRlbSA9IHN0eWxlc1tpXTtcclxuXHRcdHZhciBkb21TdHlsZSA9IHN0eWxlc0luRG9tW2l0ZW0uaWRdO1xyXG5cdFx0aWYoZG9tU3R5bGUpIHtcclxuXHRcdFx0ZG9tU3R5bGUucmVmcysrO1xyXG5cdFx0XHRmb3IodmFyIGogPSAwOyBqIDwgZG9tU3R5bGUucGFydHMubGVuZ3RoOyBqKyspIHtcclxuXHRcdFx0XHRkb21TdHlsZS5wYXJ0c1tqXShpdGVtLnBhcnRzW2pdKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRmb3IoOyBqIDwgaXRlbS5wYXJ0cy5sZW5ndGg7IGorKykge1xyXG5cdFx0XHRcdGRvbVN0eWxlLnBhcnRzLnB1c2goYWRkU3R5bGUoaXRlbS5wYXJ0c1tqXSwgb3B0aW9ucykpO1xyXG5cdFx0XHR9XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHR2YXIgcGFydHMgPSBbXTtcclxuXHRcdFx0Zm9yKHZhciBqID0gMDsgaiA8IGl0ZW0ucGFydHMubGVuZ3RoOyBqKyspIHtcclxuXHRcdFx0XHRwYXJ0cy5wdXNoKGFkZFN0eWxlKGl0ZW0ucGFydHNbal0sIG9wdGlvbnMpKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRzdHlsZXNJbkRvbVtpdGVtLmlkXSA9IHtpZDogaXRlbS5pZCwgcmVmczogMSwgcGFydHM6IHBhcnRzfTtcclxuXHRcdH1cclxuXHR9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGxpc3RUb1N0eWxlcyhsaXN0KSB7XHJcblx0dmFyIHN0eWxlcyA9IFtdO1xyXG5cdHZhciBuZXdTdHlsZXMgPSB7fTtcclxuXHRmb3IodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xyXG5cdFx0dmFyIGl0ZW0gPSBsaXN0W2ldO1xyXG5cdFx0dmFyIGlkID0gaXRlbVswXTtcclxuXHRcdHZhciBjc3MgPSBpdGVtWzFdO1xyXG5cdFx0dmFyIG1lZGlhID0gaXRlbVsyXTtcclxuXHRcdHZhciBzb3VyY2VNYXAgPSBpdGVtWzNdO1xyXG5cdFx0dmFyIHBhcnQgPSB7Y3NzOiBjc3MsIG1lZGlhOiBtZWRpYSwgc291cmNlTWFwOiBzb3VyY2VNYXB9O1xyXG5cdFx0aWYoIW5ld1N0eWxlc1tpZF0pXHJcblx0XHRcdHN0eWxlcy5wdXNoKG5ld1N0eWxlc1tpZF0gPSB7aWQ6IGlkLCBwYXJ0czogW3BhcnRdfSk7XHJcblx0XHRlbHNlXHJcblx0XHRcdG5ld1N0eWxlc1tpZF0ucGFydHMucHVzaChwYXJ0KTtcclxuXHR9XHJcblx0cmV0dXJuIHN0eWxlcztcclxufVxyXG5cclxuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMsIHN0eWxlRWxlbWVudCkge1xyXG5cdHZhciBoZWFkID0gZ2V0SGVhZEVsZW1lbnQoKTtcclxuXHR2YXIgbGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3AgPSBzdHlsZUVsZW1lbnRzSW5zZXJ0ZWRBdFRvcFtzdHlsZUVsZW1lbnRzSW5zZXJ0ZWRBdFRvcC5sZW5ndGggLSAxXTtcclxuXHRpZiAob3B0aW9ucy5pbnNlcnRBdCA9PT0gXCJ0b3BcIikge1xyXG5cdFx0aWYoIWxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wKSB7XHJcblx0XHRcdGhlYWQuaW5zZXJ0QmVmb3JlKHN0eWxlRWxlbWVudCwgaGVhZC5maXJzdENoaWxkKTtcclxuXHRcdH0gZWxzZSBpZihsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcC5uZXh0U2libGluZykge1xyXG5cdFx0XHRoZWFkLmluc2VydEJlZm9yZShzdHlsZUVsZW1lbnQsIGxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wLm5leHRTaWJsaW5nKTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdGhlYWQuYXBwZW5kQ2hpbGQoc3R5bGVFbGVtZW50KTtcclxuXHRcdH1cclxuXHRcdHN0eWxlRWxlbWVudHNJbnNlcnRlZEF0VG9wLnB1c2goc3R5bGVFbGVtZW50KTtcclxuXHR9IGVsc2UgaWYgKG9wdGlvbnMuaW5zZXJ0QXQgPT09IFwiYm90dG9tXCIpIHtcclxuXHRcdGhlYWQuYXBwZW5kQ2hpbGQoc3R5bGVFbGVtZW50KTtcclxuXHR9IGVsc2Uge1xyXG5cdFx0dGhyb3cgbmV3IEVycm9yKFwiSW52YWxpZCB2YWx1ZSBmb3IgcGFyYW1ldGVyICdpbnNlcnRBdCcuIE11c3QgYmUgJ3RvcCcgb3IgJ2JvdHRvbScuXCIpO1xyXG5cdH1cclxufVxyXG5cclxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xyXG5cdHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XHJcblx0dmFyIGlkeCA9IHN0eWxlRWxlbWVudHNJbnNlcnRlZEF0VG9wLmluZGV4T2Yoc3R5bGVFbGVtZW50KTtcclxuXHRpZihpZHggPj0gMCkge1xyXG5cdFx0c3R5bGVFbGVtZW50c0luc2VydGVkQXRUb3Auc3BsaWNlKGlkeCwgMSk7XHJcblx0fVxyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVTdHlsZUVsZW1lbnQob3B0aW9ucykge1xyXG5cdHZhciBzdHlsZUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XHJcblx0c3R5bGVFbGVtZW50LnR5cGUgPSBcInRleHQvY3NzXCI7XHJcblx0aW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMsIHN0eWxlRWxlbWVudCk7XHJcblx0cmV0dXJuIHN0eWxlRWxlbWVudDtcclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlTGlua0VsZW1lbnQob3B0aW9ucykge1xyXG5cdHZhciBsaW5rRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaW5rXCIpO1xyXG5cdGxpbmtFbGVtZW50LnJlbCA9IFwic3R5bGVzaGVldFwiO1xyXG5cdGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zLCBsaW5rRWxlbWVudCk7XHJcblx0cmV0dXJuIGxpbmtFbGVtZW50O1xyXG59XHJcblxyXG5mdW5jdGlvbiBhZGRTdHlsZShvYmosIG9wdGlvbnMpIHtcclxuXHR2YXIgc3R5bGVFbGVtZW50LCB1cGRhdGUsIHJlbW92ZTtcclxuXHJcblx0aWYgKG9wdGlvbnMuc2luZ2xldG9uKSB7XHJcblx0XHR2YXIgc3R5bGVJbmRleCA9IHNpbmdsZXRvbkNvdW50ZXIrKztcclxuXHRcdHN0eWxlRWxlbWVudCA9IHNpbmdsZXRvbkVsZW1lbnQgfHwgKHNpbmdsZXRvbkVsZW1lbnQgPSBjcmVhdGVTdHlsZUVsZW1lbnQob3B0aW9ucykpO1xyXG5cdFx0dXBkYXRlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlRWxlbWVudCwgc3R5bGVJbmRleCwgZmFsc2UpO1xyXG5cdFx0cmVtb3ZlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlRWxlbWVudCwgc3R5bGVJbmRleCwgdHJ1ZSk7XHJcblx0fSBlbHNlIGlmKG9iai5zb3VyY2VNYXAgJiZcclxuXHRcdHR5cGVvZiBVUkwgPT09IFwiZnVuY3Rpb25cIiAmJlxyXG5cdFx0dHlwZW9mIFVSTC5jcmVhdGVPYmplY3RVUkwgPT09IFwiZnVuY3Rpb25cIiAmJlxyXG5cdFx0dHlwZW9mIFVSTC5yZXZva2VPYmplY3RVUkwgPT09IFwiZnVuY3Rpb25cIiAmJlxyXG5cdFx0dHlwZW9mIEJsb2IgPT09IFwiZnVuY3Rpb25cIiAmJlxyXG5cdFx0dHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xyXG5cdFx0c3R5bGVFbGVtZW50ID0gY3JlYXRlTGlua0VsZW1lbnQob3B0aW9ucyk7XHJcblx0XHR1cGRhdGUgPSB1cGRhdGVMaW5rLmJpbmQobnVsbCwgc3R5bGVFbGVtZW50KTtcclxuXHRcdHJlbW92ZSA9IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRyZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcclxuXHRcdFx0aWYoc3R5bGVFbGVtZW50LmhyZWYpXHJcblx0XHRcdFx0VVJMLnJldm9rZU9iamVjdFVSTChzdHlsZUVsZW1lbnQuaHJlZik7XHJcblx0XHR9O1xyXG5cdH0gZWxzZSB7XHJcblx0XHRzdHlsZUVsZW1lbnQgPSBjcmVhdGVTdHlsZUVsZW1lbnQob3B0aW9ucyk7XHJcblx0XHR1cGRhdGUgPSBhcHBseVRvVGFnLmJpbmQobnVsbCwgc3R5bGVFbGVtZW50KTtcclxuXHRcdHJlbW92ZSA9IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRyZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcclxuXHRcdH07XHJcblx0fVxyXG5cclxuXHR1cGRhdGUob2JqKTtcclxuXHJcblx0cmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlKG5ld09iaikge1xyXG5cdFx0aWYobmV3T2JqKSB7XHJcblx0XHRcdGlmKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcClcclxuXHRcdFx0XHRyZXR1cm47XHJcblx0XHRcdHVwZGF0ZShvYmogPSBuZXdPYmopO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0cmVtb3ZlKCk7XHJcblx0XHR9XHJcblx0fTtcclxufVxyXG5cclxudmFyIHJlcGxhY2VUZXh0ID0gKGZ1bmN0aW9uICgpIHtcclxuXHR2YXIgdGV4dFN0b3JlID0gW107XHJcblxyXG5cdHJldHVybiBmdW5jdGlvbiAoaW5kZXgsIHJlcGxhY2VtZW50KSB7XHJcblx0XHR0ZXh0U3RvcmVbaW5kZXhdID0gcmVwbGFjZW1lbnQ7XHJcblx0XHRyZXR1cm4gdGV4dFN0b3JlLmZpbHRlcihCb29sZWFuKS5qb2luKCdcXG4nKTtcclxuXHR9O1xyXG59KSgpO1xyXG5cclxuZnVuY3Rpb24gYXBwbHlUb1NpbmdsZXRvblRhZyhzdHlsZUVsZW1lbnQsIGluZGV4LCByZW1vdmUsIG9iaikge1xyXG5cdHZhciBjc3MgPSByZW1vdmUgPyBcIlwiIDogb2JqLmNzcztcclxuXHJcblx0aWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XHJcblx0XHRzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gcmVwbGFjZVRleHQoaW5kZXgsIGNzcyk7XHJcblx0fSBlbHNlIHtcclxuXHRcdHZhciBjc3NOb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKTtcclxuXHRcdHZhciBjaGlsZE5vZGVzID0gc3R5bGVFbGVtZW50LmNoaWxkTm9kZXM7XHJcblx0XHRpZiAoY2hpbGROb2Rlc1tpbmRleF0pIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChjaGlsZE5vZGVzW2luZGV4XSk7XHJcblx0XHRpZiAoY2hpbGROb2Rlcy5sZW5ndGgpIHtcclxuXHRcdFx0c3R5bGVFbGVtZW50Lmluc2VydEJlZm9yZShjc3NOb2RlLCBjaGlsZE5vZGVzW2luZGV4XSk7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoY3NzTm9kZSk7XHJcblx0XHR9XHJcblx0fVxyXG59XHJcblxyXG5mdW5jdGlvbiBhcHBseVRvVGFnKHN0eWxlRWxlbWVudCwgb2JqKSB7XHJcblx0dmFyIGNzcyA9IG9iai5jc3M7XHJcblx0dmFyIG1lZGlhID0gb2JqLm1lZGlhO1xyXG5cdHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xyXG5cclxuXHRpZihtZWRpYSkge1xyXG5cdFx0c3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm1lZGlhXCIsIG1lZGlhKVxyXG5cdH1cclxuXHJcblx0aWYoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcclxuXHRcdHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XHJcblx0fSBlbHNlIHtcclxuXHRcdHdoaWxlKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XHJcblx0XHRcdHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XHJcblx0XHR9XHJcblx0XHRzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XHJcblx0fVxyXG59XHJcblxyXG5mdW5jdGlvbiB1cGRhdGVMaW5rKGxpbmtFbGVtZW50LCBvYmopIHtcclxuXHR2YXIgY3NzID0gb2JqLmNzcztcclxuXHR2YXIgbWVkaWEgPSBvYmoubWVkaWE7XHJcblx0dmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XHJcblxyXG5cdGlmKHNvdXJjZU1hcCkge1xyXG5cdFx0Ly8gaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL2EvMjY2MDM4NzVcclxuXHRcdGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIgKyBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpICsgXCIgKi9cIjtcclxuXHR9XHJcblxyXG5cdHZhciBibG9iID0gbmV3IEJsb2IoW2Nzc10sIHsgdHlwZTogXCJ0ZXh0L2Nzc1wiIH0pO1xyXG5cclxuXHR2YXIgb2xkU3JjID0gbGlua0VsZW1lbnQuaHJlZjtcclxuXHJcblx0bGlua0VsZW1lbnQuaHJlZiA9IFVSTC5jcmVhdGVPYmplY3RVUkwoYmxvYik7XHJcblxyXG5cdGlmKG9sZFNyYylcclxuXHRcdFVSTC5yZXZva2VPYmplY3RVUkwob2xkU3JjKTtcclxufVxyXG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4uL34vc3R5bGUtbG9hZGVyL2FkZFN0eWxlcy5qc1xuICoqIG1vZHVsZSBpZCA9IDEzXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJpbXBvcnQgX21vZHVsZSBmcm9tICcuL21vZHVsZSdcclxuXHJcbmxldCBfJHJvb3RTY29wZVxyXG5cclxuZXhwb3J0IGNsYXNzIENvbnRlbnRDdHJsIHtcclxuXHJcbiAgICBjb25zdHJ1Y3RvciAoY29udGVudEZhY3RvcnksICRyb290U2NvcGUsIGNhclNlcnZpY2UpIHtcclxuICAgICAgICB0aGlzLmNvbnRlbnRGYWN0b3J5ID0gY29udGVudEZhY3RvcnkoKVxyXG4gICAgICAgIHRoaXMuY2FyU2VydmljZSAgICAgPSBjYXJTZXJ2aWNlXHJcbiAgICAgICAgXyRyb290U2NvcGUgICAgICAgICA9ICRyb290U2NvcGVcclxuXHJcbiAgICAgICAgXyRyb290U2NvcGUuJG9uKCdvblZpZXdDaGFuZ2U6RXZlbnQnLCAoZXZlbnQsIG9wdGlvbikgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmNvbnRlbnRGYWN0b3J5Lm9uVmlld0NoYW5nZShvcHRpb24pXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgZGVidWdnZXJcclxuICAgICAgICB0aGlzLmNhcnMgPSB0aGlzLmNhclNlcnZpY2UuZ2V0QWxsKClcclxuXHJcbiAgICB9XHJcblxyXG4gICAgYXJlYUNsaWNrICgpIHtcclxuICAgICAgICBjb25zb2xlLmxvZygnY2FyIHBhcnQgc2VsZWN0ZWQnKVxyXG4gICAgfVxyXG5cclxufVxyXG5cclxuX21vZHVsZS5jb250cm9sbGVyKCdDb250ZW50Q3RybCcsIENvbnRlbnRDdHJsKVxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vY29udGVudC5jb250cm9sbGVyLmpzXG4gKiovIiwiaW1wb3J0IF9tb2R1bGUgZnJvbSAnLi9tb2R1bGUnXHJcbmltcG9ydCB0ZW1wbGF0ZSBmcm9tICcuL2NvbnRlbnQudGVtcGxhdGUuaHRtbCdcclxuXHJcbl9tb2R1bGUuZGlyZWN0aXZlKCdjb250ZW50U2VjdGlvbicsIGZ1bmN0aW9uICgkdGltZW91dCkge1xyXG4gICAgJ25nSW5qZWN0J1xyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgcmVzdHJpY3Q6ICdBRScsXHJcbiAgICAgICAgc2NvcGU6IHt9LFxyXG4gICAgICAgIGNvbnRyb2xsZXJBczogJ2N0cmwnLFxyXG4gICAgICAgIGJpbmRUb0NvbnRyb2xsZXI6IHRydWUsXHJcbiAgICAgICAgdGVtcGxhdGU6IHRlbXBsYXRlLFxyXG4gICAgICAgIGNvbnRyb2xsZXI6ICdDb250ZW50Q3RybCcsXHJcblxyXG4gICAgICAgIGxpbmsgOiAoc2NvcGUsIGVsLCBhdHRycykgPT4ge1xyXG5cclxuICAgICAgICAgICAgJHRpbWVvdXQoKCkgPT4ge1xyXG5cclxuICAgICAgICAgICAgLy8gJCgnI2NhcicpLm1hcHN0ZXIoe1xyXG4gICAgICAgICAgICAvLyAgICAgc3RhdGljU3RhdGU6IHRydWUsXHJcbiAgICAgICAgICAgIC8vICAgICBmaWxsT3BhY2l0eTogMC40LFxyXG4gICAgICAgICAgICAvLyAgICAgZmlsbENvbG9yOiAnZmFkYmI4NCcsXHJcbiAgICAgICAgICAgIC8vICAgICBoaWdobGlnaHQ6IHRydWUsXHJcbiAgICAgICAgICAgIC8vICAgICBtYXBLZXk6ICduYW1lJyxcclxuICAgICAgICAgICAgLy8gICAgIHNob3dUb29sVGlwOiB0cnVlLFxyXG4gICAgICAgICAgICAvLyAgICAgc2NhbGVNYXA6IGZhbHNlLFxyXG4gICAgICAgICAgICAvLyAgICAgdG9vbFRpcENsb3NlOiBbXCJ0b29sdGlwLWNsaWNrXCIsXCJhcmVhLW1vdXNlb3V0XCJdLFxyXG4gICAgICAgICAgICAvLyAgICAgYXJlYXM6IFt7XHJcbiAgICAgICAgICAgIC8vICAgICAgICAga2V5OiAnQ2FyJyxcclxuICAgICAgICAgICAgLy8gICAgICAgICB0b29sVGlwOiAnUHVlcnRhIGZyb250YWwgbGFkbyBpenF1aWVyZG8uJ1xyXG4gICAgICAgICAgICAvLyAgICAgfV0sICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAvLyAgICAgb25DbGljazogZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgLy8gICAgIH1cclxuICAgICAgICAgICAgLy8gfSk7XHJcblxyXG4gICAgICAgICAgICB9LCAwKVxyXG4gICAgICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0pXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9jb250ZW50LmRpcmVjdGl2ZS5qc1xuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gXCI8bWQtY29udGVudCBjbGFzcz1cXFwibWQtcGFkZGluZ1xcXCIgbGF5b3V0LXhzPVxcXCJjb2x1bW5cXFwiIGxheW91dD1cXFwicm93XFxcIj5cXHJcXG4gICAgPGRpdiBmbGV4LXhzIGZsZXgtZ3QteHM9XFxcIjEwMFxcXCIgbGF5b3V0PVxcXCJjb2x1bW5cXFwiPlxcclxcbiAgICAgIDxmb3JtIG5hbWU9XFxcInVzZXJGb3JtXFxcIj5cXHJcXG4gICAgICAgIDxtZC1pbnB1dC1jb250YWluZXI+XFxyXFxuICAgICAgICA8bGFiZWw+VGl0bGU8L2xhYmVsPlxcclxcbiAgICAgICAgPGlucHV0IG5nLW1vZGVsPVxcXCJ1c2VyLnRpdGxlXFxcIj5cXHJcXG4gICAgICA8L21kLWlucHV0LWNvbnRhaW5lcj5cXHJcXG4gICAgICA8bWQtaW5wdXQtY29udGFpbmVyPlxcclxcbiAgICAgICAgPGxhYmVsPkVtYWlsPC9sYWJlbD5cXHJcXG4gICAgICAgIDxpbnB1dCBuZy1tb2RlbD1cXFwidXNlci5lbWFpbFxcXCIgdHlwZT1cXFwiZW1haWxcXFwiPlxcclxcbiAgICAgIDwvbWQtaW5wdXQtY29udGFpbmVyPlxcclxcbiAgICAgIDwvZm9ybT5cXHJcXG4gICAgPC9kaXY+XFxyXFxuPC9tZC1jb250ZW50PlxcclxcblxcclxcbjxkaXYgY2xhc3M9XFxcImNvbnRhaW5lciBtZC13aGl0ZWZyYW1lLTBkcFxcXCI+XFxyXFxuICAgIDxtZC1jb250ZW50IGNsYXNzPVxcXCJtZC1wYWRkaW5nIG1kLXdoaXRlZnJhbWUtMGRwXFxcIiBsYXlvdXQteHM9XFxcImNvbHVtblxcXCIgbGF5b3V0PVxcXCJyb3dcXFwiPlxcclxcbiAgICAgICAgPG1kLWNhcmQgY2xhc3M9XFxcIm1kLXdoaXRlZnJhbWUtMGRwXFxcIiBuZy1yZXBlYXQ9XFxcImNhciBpbiBjdHJsLmNhcnNcXFwiPlxcclxcbiAgICAgICAgICAgIDxpbWcgbmctc3JjPVxcXCJ7e2Nhci5pbWFnZS51cmx9fVxcXCIgY2xhc3M9XFxcIm1kLWNhcmQtaW1hZ2VcXFwiIGlkPVxcXCJ7e2Nhci5pbWFnZS5pZH19XFxcIiB1c2VtYXA9XFxcInt7Y2FyLmltYWdlLnVzZW1hcH19XFxcIj5cXHJcXG4gICAgICAgICAgICA8bWFwIG5hbWU9XFxcInt7Y2FyLm1hcC5uYW1lfX1cXFwiIG5nLWNsaWNrPVxcXCJjdHJsLmFyZWFDbGljaygpXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPGFyZWEgbmctcmVwZWF0PVxcXCJhcmVhIGluIGNhci5tYXAuYXJlYXNcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICAgIGFsdD1cXFwie3thcmVhLmFsdH19XFxcIiBcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgdGl0bGU9XFxcInt7YXJlYS50aXRsZX19XFxcIiAgXFxyXFxuICAgICAgICAgICAgICAgICAgICAgIGhyZWY9XFxcIiNcXFwiIFxcclxcbiAgICAgICAgICAgICAgICAgICAgICBjb29yZHM9XFxcInt7YXJlYS5jb29yZHN9fVxcXCIgXFxyXFxuICAgICAgICAgICAgICAgICAgICAgIHNoYXBlPVxcXCJ7e2FyZWEuc2hhcGV9fVxcXCI+XFxyXFxuICAgICAgICAgICAgPC9tYXA+XFxyXFxuICAgICAgICA8L21kLWNhcmQ+XFxyXFxuICAgIDwvbWQtY29udGVudD5cXHJcXG48L2Rpdj5cIlxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9jb250ZW50LnRlbXBsYXRlLmh0bWxcbiAqKiBtb2R1bGUgaWQgPSAxNlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiaW1wb3J0IF9tb2R1bGUgZnJvbSAnLi9tb2R1bGUnXHJcblxyXG5leHBvcnQgY2xhc3MgU2lkZU5hdlNlcnZpY2Uge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yICgpIHtcclxuICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICBnZXRPcHRpb25zICgpIHtcclxuXHJcbiAgICAgICAgcmV0dXJuIFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaWQ6IDEsXHJcbiAgICAgICAgICAgICAgICB2aWV3OiAnc2lkZXZpZXcnLFxyXG4gICAgICAgICAgICAgICAgaW1nOiAnaHR0cHM6Ly9zMTgucG9zdGltZy5vcmcvaW02bTAwcnJkL2NhcnNpZGUucG5nJyxcclxuICAgICAgICAgICAgICAgIGJnY29sb3I6IHsgJ2JhY2tncm91bmQtY29sb3InOiAnI2JiZjVjYicgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBpZDogMixcclxuICAgICAgICAgICAgICAgIHZpZXc6ICdmcm9udHZpZXcnLFxyXG4gICAgICAgICAgICAgICAgaW1nOiAnaHR0cHM6Ly9zMTcucG9zdGltZy5vcmcvOGp0cmRxN3RyL2NhcmZyb250LnBuZycsXHJcbiAgICAgICAgICAgICAgICBiZ2NvbG9yOiB7ICdiYWNrZ3JvdW5kLWNvbG9yJzogJyNmZWRmYjUnIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaWQ6IDMsXHJcbiAgICAgICAgICAgICAgICB2aWV3OiAncmVhcnZpZXcnLFxyXG4gICAgICAgICAgICAgICAgaW1nOiAnaHR0cHM6Ly9zMTgucG9zdGltZy5vcmcvN2ZmZ25qeXJ0L2NhcmJhY2sucG5nJyxcclxuICAgICAgICAgICAgICAgIGJnY29sb3I6IHsgJ2JhY2tncm91bmQtY29sb3InOiAnIzg0ZDhmZCcgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgXVxyXG5cclxuICAgIH1cclxuXHJcbn1cclxuXHJcbl9tb2R1bGUuc2VydmljZSgnc2lkZU5hdlNlcnZpY2UnLCBTaWRlTmF2U2VydmljZSlcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NpZGUuc2VydmljZS5qc1xuICoqLyIsImltcG9ydCBfbW9kdWxlIGZyb20gJy4vbW9kdWxlJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgT3B0aW9uRmFjdG9yeSB7XHJcbiAgICBcclxuICAgIGNvbnN0cnVjdG9yIChtb2RlbCkge1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMuaWQgICAgICAgPSBtb2RlbC5pZFxyXG4gICAgICAgIHRoaXMuc2VsZWN0ZWQgPSBmYWxzZVxyXG4gICAgICAgIHRoaXMudmlldyAgICAgPSBtb2RlbC52aWV3XHJcbiAgICAgICAgdGhpcy5pbWcgICAgICA9IG1vZGVsLmltZ1xyXG4gICAgICAgIHRoaXMuYmdjb2xvciAgPSBtb2RlbC5iZ2NvbG9yXHJcblxyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBmYWN0b3J5ICgpIHtcclxuICAgICAgICByZXR1cm4gKG1vZGVsKSA9PiBuZXcgT3B0aW9uRmFjdG9yeShtb2RlbClcclxuICAgIH1cclxufVxyXG5cclxuX21vZHVsZS5mYWN0b3J5KCdvcHRpb25GYWN0b3J5JywgT3B0aW9uRmFjdG9yeS5mYWN0b3J5KVxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vb3B0aW9uLmZhY3RvcnkuanNcbiAqKi8iLCJpbXBvcnQgX21vZHVsZSBmcm9tICcuL21vZHVsZSdcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbnRlbnRGYWN0b3J5IHtcclxuICAgIFxyXG4gICAgY29uc3RydWN0b3IgKCkge1xyXG4gICAgICAgIHRoaXMudmlldyAgID0gJ2Zyb250dmlldydcclxuICAgIH1cclxuXHJcbiAgICBvblZpZXdDaGFuZ2UgKG9wdGlvbikge1xyXG4gICAgICAgIHRoaXMudmlldyA9IG9wdGlvbi52aWV3XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGZhY3RvcnkgKCkge1xyXG4gICAgICAgIHJldHVybiAoKSA9PiBuZXcgQ29udGVudEZhY3RvcnkoKVxyXG4gICAgfVxyXG59XHJcblxyXG5fbW9kdWxlLmZhY3RvcnkoJ2NvbnRlbnRGYWN0b3J5JywgQ29udGVudEZhY3RvcnkuZmFjdG9yeSlcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL2NvbnRlbnQuZmFjdG9yeS5qc1xuICoqLyJdLCJzb3VyY2VSb290IjoiIn0=
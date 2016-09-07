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
	
	__webpack_require__(18);
	
	__webpack_require__(20);
	
	__webpack_require__(21);
	
	__webpack_require__(25);
	
	__webpack_require__(30);
	
	__webpack_require__(31);
	
	__webpack_require__(32);
	
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

	module.exports = "<md-sidenav md-is-locked-open=\"true\" class=\"md-whiteframe-4dp\">\n            <md-list ng-repeat=\"option in ctrl.options\" ng-click=\"ctrl.onMdListClick(option)\">\n              <md-list-item ng-click=\"ctrl.onMdListClick(option)\"\n                            ng-class=\"option.selected ? 'selected' : ''\"\n                            aria-label=\"Car view - {{option.view}}\">\n                    <img ng-src=\"{{ option.img }}\" class=\"avatar\" \n                         ng-style=\"option.bgcolor\" \n                         ng-click=\"ctrl.onMdListClick(option)\"></img>\n              </md-list-item>\n          </md-list>\n</md-sidenav>\n\n\n\n    "

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
	
	    this.greeting = 'Interactive Car';
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

	/* WEBPACK VAR INJECTION */(function($) {'use strict';
	
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
	    function ContentCtrl(contentFactory, $rootScope) {
	        var _this = this;
	
	        _classCallCheck(this, ContentCtrl);
	
	        this.contentFactory = contentFactory();
	        _$rootScope = $rootScope;
	
	        this.car = this.contentFactory.onViewChange({ view: 'front' });
	
	        _$rootScope.$on('onViewChange:Event', function (event, option) {
	            _this.car = _this.contentFactory.onViewChange(option);
	            $('img[usemap]').rwdImageMaps();
	        });
	
	        this.damageTypes = this.contentFactory.getDamageTypes();
	        this.actions = this.contentFactory.getActions();
	    }
	
	    _createClass(ContentCtrl, [{
	        key: 'areaClick',
	        value: function areaClick(area) {
	
	            console.log('car part selected => ', area);
	            this.subComponent = {};
	            this.car.component.subComponents = [];
	            this.car.component = this.contentFactory.getComponentByArea(area);
	        }
	    }, {
	        key: 'selectSubComponent',
	        value: function selectSubComponent(subComponent) {
	            this.subComponent = subComponent;
	        }
	    }]);
	
	    return ContentCtrl;
	}();
	
	_module3.default.controller('ContentCtrl', ContentCtrl);
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(15)))

/***/ },
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */
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
	                        scope: {},
	                        controllerAs: 'ctrl',
	                        bindToController: true,
	                        template: _contentTemplate2.default,
	                        controller: 'ContentCtrl',
	
	                        link: function link(scope, el, attrs) {
	
	                                    $timeout(function () {
	
	                                                $('img[usemap]').rwdImageMaps();
	                                                console.log('ajustado!');
	
	                                                // TODO: this messes up the responsive rwdImageMaps
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
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(15)))

/***/ },
/* 19 */
/***/ function(module, exports) {

	module.exports = "<md-content class=\"md-padding\" layout-xs=\"column\" layout=\"row\">\r\n    <div flex-xs flex-gt-xs=\"100\" layout=\"column\">\r\n      <label>Componente</label>\r\n      <md-input-container>\r\n          <label>{{ctrl.car.component.name}}</label>\r\n          <br/>\r\n      </md-input-container>\r\n      <md-input-container>\r\n          <label>Sub-Componente</label>\r\n          <md-select ng-model=\"ctrl.subComponent\">\r\n            <md-option ng-repeat=\"subComponent in ctrl.car.component.subComponents\" \r\n                       ng-value=\"subComponent.name\">\r\n              {{subComponent.name}}\r\n            </md-option>\r\n          </md-select>\r\n        </md-input-container>\r\n        <md-input-container>\r\n          <label>Tipo Lista</label>\r\n          <md-select ng-model=\"ctrl.damageType\">\r\n            <md-option ng-repeat=\"damageType in ctrl.damageTypes\" \r\n                       ng-value=\"damageType.name\">\r\n              {{damageType.name}}\r\n            </md-option>\r\n          </md-select>\r\n        </md-input-container>\r\n        <md-input-container>\r\n          <label>Accion</label>\r\n          <md-select ng-model=\"ctrl.action\">\r\n            <md-option ng-repeat=\"action in ctrl.actions\" \r\n                       ng-value=\"action.name\">\r\n              {{action.name}}\r\n            </md-option>\r\n          </md-select>\r\n        </md-input-container>\r\n    </div>\r\n</md-content>\r\n\r\n<div class=\"container md-whiteframe-0dp\">\r\n    <md-content class=\"md-padding md-whiteframe-0dp\" layout-xs=\"column\" layout=\"row\">\r\n        <md-card class=\"md-whiteframe-0dp\">\r\n            <img ng-src=\"{{ctrl.car.image.url}}\" class=\"md-ctrl.card-image\" id=\"{{ctrl.car.image.id}}\" usemap=\"{{ctrl.car.image.usemap}}\">\r\n            <map name=\"{{ctrl.car.map.name}}\">\r\n                <area ng-repeat=\"area in ctrl.car.map.areas\"\r\n                      ng-click=\"ctrl.areaClick(area)\"\r\n                      alt=\"{{area.alt}}\" \r\n                      title=\"{{area.title}}\"  \r\n                      href=\"#\" \r\n                      coords=\"{{area.coords}}\" \r\n                      shape=\"{{area.shape}}\">\r\n            </map>\r\n        </md-ctrl.card>\r\n    </md-content>\r\n</div>"

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
	                view: 'front',
	                img: 'https://s17.postimg.org/8jtrdq7tr/carfront.png',
	                bgcolor: { 'background-color': '#fedfb5' }
	            }, {
	                id: 2,
	                view: 'side',
	                img: 'https://s18.postimg.org/im6m00rrd/carside.png',
	                bgcolor: { 'background-color': '#bbf5cb' }
	            }, {
	                id: 3,
	                view: 'rear',
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
	
	var _car = __webpack_require__(22);
	
	var _car2 = _interopRequireDefault(_car);
	
	var _image = __webpack_require__(23);
	
	var _image2 = _interopRequireDefault(_image);
	
	var _area = __webpack_require__(24);
	
	var _area2 = _interopRequireDefault(_area);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var CarService = function () {
	         function CarService() {
	                  _classCallCheck(this, CarService);
	         }
	
	         _createClass(CarService, [{
	                  key: 'getAll',
	                  value: function getAll() {
	
	                           return [new _car2.default(new _image2.default('https://s18.postimg.org/jnh06ham1/ngcarside.png', 'car-side', '#car-map-side'), {
	                                    name: 'car-map-side',
	                                    areas: [new _area2.default('LFdoor', 'LFdoor', '205,94,195,131,205,187,353,183,352,124,352,97,360,77,271,83', 'poly'), new _area2.default('LFwheel', 'LFwheel', '125,183,53', 'circle'), new _area2.default('LBwheel', 'LBwheel', '523,180,47', 'circle'), new _area2.default('LBdoor', 'LBdoor', '362,79,356,94,356,178,450,185,478,124,497,86,499,71', 'poly'), new _area2.default('LFwindow', 'LFwindow', '201,85,257,48,298,30,360,24,353,73', 'poly'), new _area2.default('LBwindow', 'LBwindow', '374,22,367,68,536,69,501,44,435,23', 'poly'), new _area2.default('LFpanel', 'LFpanel', '48,133,76,145,102,128,131,122,152,130,171,143,187,181,200,181,192,132,198,93,139,95,91,101,61,118', 'poly'), new _area2.default('LBpanel', 'LBpanel', '460,173,478,136,513,121,552,124,620,117,599,94,580,78,544,72,508,73', 'poly'), new _area2.default('LFbumper', 'LFbumper', '13,149,10,184,21,193,62,200,69,150,48,138', 'poly'), new _area2.default('LBbumper', 'LBbumper', '561,129,582,161,582,184,642,165,646,153,645,125,624,118', 'poly')]
	                           }, 'side'), new _car2.default(new _image2.default('https://s21.postimg.org/nvvthpv53/ngcarfront.png', 'car-front', '#car-map-front'), {
	                                    name: 'car-map-front',
	                                    areas: [new _area2.default('windshield', 'windshield', '67,65,76,38,97,16,182,11,266,15,286,36,300,64', 'poly'), new _area2.default('leftrearview', 'leftrearview', '55,69,53,52,22,53,24,68,48,76', 'poly'), new _area2.default('rightrearview', 'rightrearview', '313,65,316,53,345,50,345,65,317,74', 'poly'), new _area2.default('hood', 'hood', '61,72,35,92,28,111,86,124,120,128,250,129,288,122,340,110,328,82,302,71', 'poly'), new _area2.default('leftlight', 'leftlight', '15,132,17,109,25,114,75,128,92,157', 'poly'), new _area2.default('rightlight', 'rightlight', '279,153,288,125,340,114,350,107,357,132', 'poly'), new _area2.default('grill', 'grill', '115,158,101,135,122,135,239,134,272,130,256,156,185,165', 'poly'), new _area2.default('frontbumper', 'frontbumper', '11,140,118,168,264,167,357,137,359,198,354,228,285,229,93,230,14,228,9,190', 'poly')]
	                           }, 'front')];
	                  }
	         }]);
	
	         return CarService;
	}();
	
	exports.default = CarService;
	
	
	_module3.default.service('carService', CarService);

/***/ },
/* 22 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Car = function Car(image, map, view) {
	    _classCallCheck(this, Car);
	
	    this.image = {
	        url: '',
	        id: '',
	        usemap: ''
	    };
	
	    this.map = {
	        name: '',
	        areas: [{
	            alt: '',
	            title: '',
	            coords: [],
	            shape: ''
	        }]
	    };
	
	    this.component = {};
	
	    this.image = image;
	    this.map = map;
	    this.view = view;
	};
	
	exports.default = Car;

/***/ },
/* 23 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Image = function Image(url, id, usemap) {
	    _classCallCheck(this, Image);
	
	    this.id = id, this.url = url, this.usemap = usemap;
	};
	
	exports.default = Image;

/***/ },
/* 24 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Area = function Area(alt, title, coords, shape) {
	    _classCallCheck(this, Area);
	
	    this.alt = alt, this.title = title;
	    this.coords = coords;
	    this.shape = shape;
	};
	
	exports.default = Area;

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.OrderDetailService = undefined;
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _module2 = __webpack_require__(3);
	
	var _module3 = _interopRequireDefault(_module2);
	
	var _component = __webpack_require__(26);
	
	var _component2 = _interopRequireDefault(_component);
	
	var _subcomponent = __webpack_require__(27);
	
	var _subcomponent2 = _interopRequireDefault(_subcomponent);
	
	var _action = __webpack_require__(28);
	
	var _action2 = _interopRequireDefault(_action);
	
	var _damageType = __webpack_require__(29);
	
	var _damageType2 = _interopRequireDefault(_damageType);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var OrderDetailService = exports.OrderDetailService = function () {
	    function OrderDetailService() {
	        _classCallCheck(this, OrderDetailService);
	    }
	
	    _createClass(OrderDetailService, [{
	        key: 'getComponents',
	        value: function getComponents() {
	
	            return [new _component2.default(1, 'LFdoor', 'Puerta Frontal', [], {}, {}), new _component2.default(2, 'LBdoor', 'Puerta Trasera', [], {}, {}), new _component2.default(3, 'LFpanel', 'Panel Frontal', [], {}, {}), new _component2.default(4, 'LBpanel', 'Panel Trasero', [], {}, {}), new _component2.default(5, 'LFbumper', 'Bumper Frontal', [], {}, {}), new _component2.default(6, 'LBbumper', 'Bumper Trasero', [], {}, {}), new _component2.default(7, 'LFwheel', 'Llanta Frontal', [], {}, {}), new _component2.default(8, 'LBwheel', 'Llanta Trasera', [], {}, {}), new _component2.default(9, 'LFwindow', 'Ventana Frontal', [], {}, {}), new _component2.default(10, 'LBwindow', 'Ventana Trasera', [], {}, {}), new _component2.default(11, 'windshield', 'Windshield', [], {}, {}), new _component2.default(12, 'leftrearview', 'Retrovisor Izquierdo', [], {}, {}), new _component2.default(13, 'rightrearview', 'Retrovisor Derecho', [], {}, {}), new _component2.default(14, 'hood', 'Capo', [], {}, {}), new _component2.default(15, 'leftlight', 'Luz Izquierda', [], {}, {}), new _component2.default(16, 'rightlight', 'Luz Derecha', [], {}, {}), new _component2.default(17, 'grill', 'Parrilla', [], {}, {}), new _component2.default(18, 'frontbumper', 'Bumper Frontal', [], {}, {})];
	        }
	    }, {
	        key: 'getSubComponents',
	        value: function getSubComponents() {
	
	            return [new _subcomponent2.default(1, 1, 'Mango'), new _subcomponent2.default(2, 1, 'Chapa'), new _subcomponent2.default(1, 2, 'Mango'), new _subcomponent2.default(2, 2, 'Chapa'), new _subcomponent2.default(3, 5, 'Luz'), new _subcomponent2.default(4, 5, 'Guarda Polvo'), new _subcomponent2.default(3, 6, 'Luz'), new _subcomponent2.default(3, 6, 'Luz'), new _subcomponent2.default(5, 7, 'Aro'), new _subcomponent2.default(5, 8, 'Aro'), new _subcomponent2.default(6, 7, 'Plato'), new _subcomponent2.default(6, 8, 'Plato'), new _subcomponent2.default(7, 7, 'Chuchos'), new _subcomponent2.default(7, 8, 'Chuchos'), new _subcomponent2.default(8, 15, 'Pide vias'), new _subcomponent2.default(9, 15, 'Luz'), new _subcomponent2.default(8, 16, 'Pide vias'), new _subcomponent2.default(9, 16, 'Luz'), new _subcomponent2.default(10, 17, 'Insigna'), new _subcomponent2.default(11, 18, 'Parrilla Izquierda'), new _subcomponent2.default(12, 18, 'Parrilla Derecha'), new _subcomponent2.default(13, 18, 'Parrilla Central')];
	        }
	    }, {
	        key: 'getDamageTypes',
	        value: function getDamageTypes() {
	
	            return [new _damageType2.default(1, 'Dañado'), new _damageType2.default(2, 'Falta'), new _damageType2.default(3, 'Rayado'), new _damageType2.default(4, 'Otro')];
	        }
	    }, {
	        key: 'getActions',
	        value: function getActions() {
	
	            return [new _action2.default(1, 'Ninguna'), new _action2.default(2, 'Revisar'), new _action2.default(3, 'Reparar'), new _action2.default(4, 'Pintar'), new _action2.default(5, 'Cambiar'), new _action2.default(6, 'Servicio')];
	        }
	    }]);
	
	    return OrderDetailService;
	}();
	
	_module3.default.service('orderDetailService', OrderDetailService);

/***/ },
/* 26 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Component = function Component(id, areaId, name, subComponents, damageType, action) {
	    _classCallCheck(this, Component);
	
	    this.id = id;
	    this.name = name;
	    this.areaId = areaId;
	    this.subComponents = subComponents;
	    this.damageType = damageType;
	    this.action = action;
	};
	
	exports.default = Component;

/***/ },
/* 27 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var SubComponent = function SubComponent(id, componentId, name) {
	    _classCallCheck(this, SubComponent);
	
	    this.id = id;
	    this.componentId = componentId;
	    this.name = name;
	};
	
	exports.default = SubComponent;

/***/ },
/* 28 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Action = function Action(id, name) {
	    _classCallCheck(this, Action);
	
	    this.id = id, this.name = name;
	};
	
	exports.default = Action;

/***/ },
/* 29 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var DamageType = function DamageType(id, name) {
	    _classCallCheck(this, DamageType);
	
	    this.id = id, this.name = name;
	};
	
	exports.default = DamageType;

/***/ },
/* 30 */
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
/* 31 */
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
	
	var _carService = void 0,
	    _orderDetailService = void 0;
	
	var ContentFactory = function () {
	    function ContentFactory() {
	        _classCallCheck(this, ContentFactory);
	
	        this.view = 'front';
	    }
	
	    _createClass(ContentFactory, [{
	        key: 'onViewChange',
	        value: function onViewChange(option) {
	            this.view = option.view;
	            return this.getCarByView(this.view);
	        }
	    }, {
	        key: 'getCarByView',
	        value: function getCarByView(view) {
	
	            return _carService.getAll().filter(function (car) {
	                return car.view === view;
	            })[0];
	        }
	    }, {
	        key: 'getComponentByArea',
	        value: function getComponentByArea(area) {
	
	            var component = _orderDetailService.getComponents().filter(function (component) {
	                return component.areaId === area.title;
	            })[0];
	
	            component.subComponents = _orderDetailService.getSubComponents().filter(function (subComponent) {
	                return subComponent.componentId === component.id;
	            });
	
	            return component;
	        }
	    }, {
	        key: 'getDamageTypes',
	        value: function getDamageTypes() {
	            return _orderDetailService.getDamageTypes();
	        }
	    }, {
	        key: 'getActions',
	        value: function getActions() {
	            return _orderDetailService.getActions();
	        }
	    }], [{
	        key: 'factory',
	        value: function factory(carService, orderDetailService) {
	
	            _carService = carService;
	            _orderDetailService = orderDetailService;
	
	            return function () {
	                return new ContentFactory();
	            };
	        }
	    }]);
	
	    return ContentFactory;
	}();
	
	exports.default = ContentFactory;
	
	
	_module3.default.factory('contentFactory', ContentFactory.factory);

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _module2 = __webpack_require__(3);
	
	var _module3 = _interopRequireDefault(_module2);
	
	var _car2 = __webpack_require__(22);
	
	var _car3 = _interopRequireDefault(_car2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var _car = void 0;
	
	var CarFactory = function () {
	    function CarFactory(car) {
	        _classCallCheck(this, CarFactory);
	
	        _car = car;
	        this.car = _car;
	    }
	
	    _createClass(CarFactory, null, [{
	        key: 'factory',
	        value: function factory(car) {
	            return function (car) {
	                return new CarFactory(car);
	            };
	        }
	    }]);
	
	    return CarFactory;
	}();
	
	exports.default = CarFactory;
	
	
	_module3.default.factory('carFactory', CarFactory.factory);

/***/ }
]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vLy4vc2lkZS5jb250cm9sbGVyLmpzIiwid2VicGFjazovLy8uL3NpZGUuZGlyZWN0aXZlLmpzIiwid2VicGFjazovLy8uL3NpZGUudGVtcGxhdGUuaHRtbCIsIndlYnBhY2s6Ly8vLi9oZWFkZXIuY29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly8vLi9oZWFkZXIuZGlyZWN0aXZlLmpzIiwid2VicGFjazovLy8uL2hlYWRlci50ZW1wbGF0ZS5odG1sIiwid2VicGFjazovLy8uL2FwcC5zY3NzPzEwMTMiLCJ3ZWJwYWNrOi8vLy4vYXBwLnNjc3MiLCJ3ZWJwYWNrOi8vLy4uL34vY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanMiLCJ3ZWJwYWNrOi8vLy4uL34vc3R5bGUtbG9hZGVyL2FkZFN0eWxlcy5qcyIsIndlYnBhY2s6Ly8vLi9jb250ZW50LmNvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vY29udGVudC5kaXJlY3RpdmUuanMiLCJ3ZWJwYWNrOi8vLy4vY29udGVudC50ZW1wbGF0ZS5odG1sIiwid2VicGFjazovLy8uL3NpZGUuc2VydmljZS5qcyIsIndlYnBhY2s6Ly8vLi9jYXIuc2VydmljZS5qcyIsIndlYnBhY2s6Ly8vLi9jYXIuanMiLCJ3ZWJwYWNrOi8vLy4vaW1hZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vYXJlYS5qcyIsIndlYnBhY2s6Ly8vLi9vcmRlci5kZXRhaWwuc2VydmljZS5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3ViY29tcG9uZW50LmpzIiwid2VicGFjazovLy8uL2FjdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9kYW1hZ2VUeXBlLmpzIiwid2VicGFjazovLy8uL29wdGlvbi5mYWN0b3J5LmpzIiwid2VicGFjazovLy8uL2NvbnRlbnQuZmFjdG9yeS5qcyIsIndlYnBhY2s6Ly8vLi9jYXIuZmFjdG9yeS5qcyJdLCJuYW1lcyI6WyJib290c3RyYXAiLCJkb2N1bWVudCIsIl9tb2R1bGUiLCJhbmd1bGFyIiwibW9kdWxlIiwiXyRyb290U2NvcGUiLCJTaWRlQ3RybCIsInNpZGVOYXZTZXJ2aWNlIiwib3B0aW9uRmFjdG9yeSIsImNvbnRlbnRGYWN0b3J5IiwiJHJvb3RTY29wZSIsIm9wdGlvbnMiLCJnZXRPcHRpb25zIiwibWFwIiwib3B0aW9uIiwicmVkdWNlIiwiYm9vbGVhbiIsIml0ZW0iLCJzZWxlY3RlZCIsIiRicm9hZGNhc3QiLCJjb250cm9sbGVyIiwiZGlyZWN0aXZlIiwicmVzdHJpY3QiLCJzY29wZSIsImNvbnRyb2xsZXJBcyIsImJpbmRUb0NvbnRyb2xsZXIiLCJ0ZW1wbGF0ZSIsIkhlYWRlckN0cmwiLCJncmVldGluZyIsIkNvbnRlbnRDdHJsIiwiY2FyIiwib25WaWV3Q2hhbmdlIiwidmlldyIsIiRvbiIsImV2ZW50IiwiJCIsInJ3ZEltYWdlTWFwcyIsImRhbWFnZVR5cGVzIiwiZ2V0RGFtYWdlVHlwZXMiLCJhY3Rpb25zIiwiZ2V0QWN0aW9ucyIsImFyZWEiLCJjb25zb2xlIiwibG9nIiwic3ViQ29tcG9uZW50IiwiY29tcG9uZW50Iiwic3ViQ29tcG9uZW50cyIsImdldENvbXBvbmVudEJ5QXJlYSIsIiR0aW1lb3V0IiwibGluayIsImVsIiwiYXR0cnMiLCJTaWRlTmF2U2VydmljZSIsImlkIiwiaW1nIiwiYmdjb2xvciIsInNlcnZpY2UiLCJDYXJTZXJ2aWNlIiwibmFtZSIsImFyZWFzIiwiQ2FyIiwiaW1hZ2UiLCJ1cmwiLCJ1c2VtYXAiLCJhbHQiLCJ0aXRsZSIsImNvb3JkcyIsInNoYXBlIiwiSW1hZ2UiLCJBcmVhIiwiT3JkZXJEZXRhaWxTZXJ2aWNlIiwiQ29tcG9uZW50IiwiYXJlYUlkIiwiZGFtYWdlVHlwZSIsImFjdGlvbiIsIlN1YkNvbXBvbmVudCIsImNvbXBvbmVudElkIiwiQWN0aW9uIiwiRGFtYWdlVHlwZSIsIk9wdGlvbkZhY3RvcnkiLCJtb2RlbCIsImZhY3RvcnkiLCJfY2FyU2VydmljZSIsIl9vcmRlckRldGFpbFNlcnZpY2UiLCJDb250ZW50RmFjdG9yeSIsImdldENhckJ5VmlldyIsImdldEFsbCIsImZpbHRlciIsImdldENvbXBvbmVudHMiLCJnZXRTdWJDb21wb25lbnRzIiwiY2FyU2VydmljZSIsIm9yZGVyRGV0YWlsU2VydmljZSIsIl9jYXIiLCJDYXJGYWN0b3J5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBRUE7Ozs7QUFDQTs7QUFFQTs7OztBQUNBOztBQUNBOztBQUVBOzs7O0FBQ0E7O0FBR0E7O0FBQ0E7O0FBQ0E7O0FBR0E7O0FBQ0E7O0FBQ0E7Ozs7QUFSQTtBQVVBLG1CQUFRQSxTQUFSLENBQWtCQyxRQUFsQixFQUE0QixDQUFDLE9BQUQsQ0FBNUI7O0FBTEEsWTs7Ozs7Ozs7Ozs7OztBQ2xCQSxLQUFJQyxVQUFXQyxRQUFRQyxNQUFSLENBQWUsT0FBZixFQUF3QixDQUNuQyxZQURtQyxDQUF4QixDQUFmOzttQkFJZUYsTzs7Ozs7Ozs7Ozs7Ozs7O0FDSmY7Ozs7Ozs7O0FBRUEsS0FBSUcsb0JBQUo7O0tBRWFDLFEsV0FBQUEsUTtBQUVULHVCQUFhQyxjQUFiLEVBQTZCQyxhQUE3QixFQUE0Q0MsY0FBNUMsRUFBNERDLFVBQTVELEVBQXdFO0FBQUE7O0FBQUE7O0FBRXBFLGNBQUtILGNBQUwsR0FBc0JBLGNBQXRCO0FBQ0EsY0FBS0MsYUFBTCxHQUFzQkEsYUFBdEI7QUFDQSxjQUFLQyxjQUFMLEdBQXNCQSxnQkFBdEI7QUFDQUosdUJBQXNCSyxVQUF0Qjs7QUFFQSxjQUFLQyxPQUFMLEdBQ0ksS0FBS0osY0FBTCxDQUFvQkssVUFBcEIsR0FDS0MsR0FETCxDQUNTLFVBQUNDLE1BQUQsRUFBWTtBQUNiLG9CQUFPLE1BQUtOLGFBQUwsQ0FBbUJNLE1BQW5CLENBQVA7QUFDSCxVQUhMLENBREo7QUFLSDs7Ozt1Q0FFY0EsTSxFQUFRO0FBQ25CLGtCQUFLSCxPQUFMLENBQ0tJLE1BREwsQ0FDWSxVQUFDQyxP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Ozs7Ozs7OztBQUVBLEtBQUlXLGFBQUo7O0tBRXFCQyxVO0FBRWpCLHlCQUFhL0QsR0FBYixFQUFrQjtBQUFBOztBQUNkOEQsZ0JBQVc5RCxHQUFYO0FBQ0EsY0FBS0EsR0FBTCxHQUFXOEQsSUFBWDtBQUNIOzs7O2lDQUVlOUQsRyxFQUFLO0FBQ2pCLG9CQUFPLFVBQUNBLEdBQUQ7QUFBQSx3QkFBUyxJQUFJK0QsVUFBSixDQUFlL0QsR0FBZixDQUFUO0FBQUEsY0FBUDtBQUNIOzs7Ozs7bUJBVGdCK0QsVTs7O0FBWXJCLGtCQUFRWixPQUFSLENBQWdCLFlBQWhCLEVBQThCWSxXQUFXWixPQUF6QyxFIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBhbmd1bGFyIGZyb20gJ2FuZ3VsYXInXHJcbmltcG9ydCBfbW9kdWxlIGZyb20gJ21vZHVsZSdcclxuXHJcbmltcG9ydCBTaWRlQ3RybCBmcm9tICdzaWRlLmNvbnRyb2xsZXInXHJcbmltcG9ydCAnc2lkZS5kaXJlY3RpdmUnXHJcblxyXG5pbXBvcnQgSGVhZGVyQ3RybCBmcm9tICdoZWFkZXIuY29udHJvbGxlcidcclxuaW1wb3J0ICdoZWFkZXIuZGlyZWN0aXZlJ1xyXG5pbXBvcnQgJ2FwcC5zY3NzJ1xyXG5cclxuaW1wb3J0IENvbnRlbnRDdHJsIGZyb20gJ2NvbnRlbnQuY29udHJvbGxlcidcclxuaW1wb3J0ICdjb250ZW50LmRpcmVjdGl2ZSdcclxuXHJcbi8vU2VydmljZXNcclxuaW1wb3J0ICdzaWRlLnNlcnZpY2UnXHJcbmltcG9ydCAnY2FyLnNlcnZpY2UnXHJcbmltcG9ydCAnb3JkZXIuZGV0YWlsLnNlcnZpY2UnXHJcblxyXG4vL0ZhY3Rvcmllc1xyXG5pbXBvcnQgJ29wdGlvbi5mYWN0b3J5J1xyXG5pbXBvcnQgJ2NvbnRlbnQuZmFjdG9yeSdcclxuaW1wb3J0ICdjYXIuZmFjdG9yeSdcclxuXHJcbmFuZ3VsYXIuYm9vdHN0cmFwKGRvY3VtZW50LCBbJ25nQ2FyJ10pXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9pbmRleC5qc1xuICoqLyIsImxldCBfbW9kdWxlICA9IGFuZ3VsYXIubW9kdWxlKCduZ0NhcicsIFsgXG4gICAgJ25nTWF0ZXJpYWwnXG5dKVxuXG5leHBvcnQgZGVmYXVsdCBfbW9kdWxlXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9tb2R1bGUuanNcbiAqKi8iLCJpbXBvcnQgX21vZHVsZSBmcm9tICcuL21vZHVsZSdcclxuXHJcbmxldCBfJHJvb3RTY29wZVxyXG5cclxuZXhwb3J0IGNsYXNzIFNpZGVDdHJsIHtcclxuXHJcbiAgICBjb25zdHJ1Y3RvciAoc2lkZU5hdlNlcnZpY2UsIG9wdGlvbkZhY3RvcnksIGNvbnRlbnRGYWN0b3J5LCAkcm9vdFNjb3BlKSB7XHJcblxyXG4gICAgICAgIHRoaXMuc2lkZU5hdlNlcnZpY2UgPSBzaWRlTmF2U2VydmljZVxyXG4gICAgICAgIHRoaXMub3B0aW9uRmFjdG9yeSAgPSBvcHRpb25GYWN0b3J5XHJcbiAgICAgICAgdGhpcy5jb250ZW50RmFjdG9yeSA9IGNvbnRlbnRGYWN0b3J5KClcclxuICAgICAgICBfJHJvb3RTY29wZSAgICAgICAgID0gJHJvb3RTY29wZVxyXG5cclxuICAgICAgICB0aGlzLm9wdGlvbnMgPSBcclxuICAgICAgICAgICAgdGhpcy5zaWRlTmF2U2VydmljZS5nZXRPcHRpb25zKClcclxuICAgICAgICAgICAgICAgIC5tYXAoKG9wdGlvbikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLm9wdGlvbkZhY3Rvcnkob3B0aW9uKVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBvbk1kTGlzdENsaWNrIChvcHRpb24pIHtcclxuICAgICAgICB0aGlzLm9wdGlvbnNcclxuICAgICAgICAgICAgLnJlZHVjZSgoYm9vbGVhbiwgaXRlbSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaXRlbS5zZWxlY3RlZCA9IGZhbHNlLCBvcHRpb24uc2VsZWN0ZWQgPSB0cnVlXHJcbiAgICAgICAgICAgIH0sIGZhbHNlKVxyXG5cclxuICAgICAgICBfJHJvb3RTY29wZS4kYnJvYWRjYXN0KCdvblZpZXdDaGFuZ2U6RXZlbnQnLCBvcHRpb24pXHJcbiAgICAgICAgICAgICAgXHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5fbW9kdWxlLmNvbnRyb2xsZXIoJ1NpZGVDdHJsJywgU2lkZUN0cmwpXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zaWRlLmNvbnRyb2xsZXIuanNcbiAqKi8iLCJpbXBvcnQgX21vZHVsZSBmcm9tICcuL21vZHVsZSdcbmltcG9ydCB0ZW1wbGF0ZSBmcm9tICcuL3NpZGUudGVtcGxhdGUuaHRtbCdcblxuX21vZHVsZS5kaXJlY3RpdmUoJ3NpZGVuYXYnLCBmdW5jdGlvbiAoKSB7XG4gICAgJ25nSW5qZWN0J1xuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgcmVzdHJpY3Q6ICdBRScsXG4gICAgICAgIHNjb3BlOiB0cnVlLFxuICAgICAgICBjb250cm9sbGVyQXM6ICdjdHJsJyxcbiAgICAgICAgYmluZFRvQ29udHJvbGxlcjogdHJ1ZSxcbiAgICAgICAgdGVtcGxhdGU6IHRlbXBsYXRlLFxuICAgICAgICBjb250cm9sbGVyOiAnU2lkZUN0cmwnXG4gICAgfVxufSlcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NpZGUuZGlyZWN0aXZlLmpzXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxtZC1zaWRlbmF2IG1kLWlzLWxvY2tlZC1vcGVuPVxcXCJ0cnVlXFxcIiBjbGFzcz1cXFwibWQtd2hpdGVmcmFtZS00ZHBcXFwiPlxcbiAgICAgICAgICAgIDxtZC1saXN0IG5nLXJlcGVhdD1cXFwib3B0aW9uIGluIGN0cmwub3B0aW9uc1xcXCIgbmctY2xpY2s9XFxcImN0cmwub25NZExpc3RDbGljayhvcHRpb24pXFxcIj5cXG4gICAgICAgICAgICAgIDxtZC1saXN0LWl0ZW0gbmctY2xpY2s9XFxcImN0cmwub25NZExpc3RDbGljayhvcHRpb24pXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZy1jbGFzcz1cXFwib3B0aW9uLnNlbGVjdGVkID8gJ3NlbGVjdGVkJyA6ICcnXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmlhLWxhYmVsPVxcXCJDYXIgdmlldyAtIHt7b3B0aW9uLnZpZXd9fVxcXCI+XFxuICAgICAgICAgICAgICAgICAgICA8aW1nIG5nLXNyYz1cXFwie3sgb3B0aW9uLmltZyB9fVxcXCIgY2xhc3M9XFxcImF2YXRhclxcXCIgXFxuICAgICAgICAgICAgICAgICAgICAgICAgIG5nLXN0eWxlPVxcXCJvcHRpb24uYmdjb2xvclxcXCIgXFxuICAgICAgICAgICAgICAgICAgICAgICAgIG5nLWNsaWNrPVxcXCJjdHJsLm9uTWRMaXN0Q2xpY2sob3B0aW9uKVxcXCI+PC9pbWc+XFxuICAgICAgICAgICAgICA8L21kLWxpc3QtaXRlbT5cXG4gICAgICAgICAgPC9tZC1saXN0PlxcbjwvbWQtc2lkZW5hdj5cXG5cXG5cXG5cXG4gICAgXCJcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc2lkZS50ZW1wbGF0ZS5odG1sXG4gKiogbW9kdWxlIGlkID0gNlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiaW1wb3J0IF9tb2R1bGUgZnJvbSAnLi9tb2R1bGUnXG5cbmV4cG9ydCBjbGFzcyBIZWFkZXJDdHJsIHtcblxuICAgIGNvbnN0cnVjdG9yICgpIHtcbiAgICAgICAgdGhpcy5ncmVldGluZyA9ICdJbnRlcmFjdGl2ZSBDYXInXG4gICAgfVxuXG59XG5cbl9tb2R1bGUuY29udHJvbGxlcignSGVhZGVyQ3RybCcsIEhlYWRlckN0cmwpXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9oZWFkZXIuY29udHJvbGxlci5qc1xuICoqLyIsImltcG9ydCBfbW9kdWxlIGZyb20gJy4vbW9kdWxlJ1xuaW1wb3J0IHRlbXBsYXRlIGZyb20gJy4vaGVhZGVyLnRlbXBsYXRlLmh0bWwnXG5cbl9tb2R1bGUuZGlyZWN0aXZlKCdoZWFkZXJTZWN0aW9uJywgZnVuY3Rpb24gKCkge1xuICAgICduZ0luamVjdCdcblxuICAgIHJldHVybiB7XG4gICAgICAgIHJlc3RyaWN0OiAnQUUnLFxuICAgICAgICBzY29wZTogdHJ1ZSxcbiAgICAgICAgY29udHJvbGxlckFzOiAnY3RybCcsXG4gICAgICAgIGJpbmRUb0NvbnRyb2xsZXI6IHRydWUsXG4gICAgICAgIHRlbXBsYXRlOiB0ZW1wbGF0ZSxcbiAgICAgICAgY29udHJvbGxlcjogJ0hlYWRlckN0cmwnXG4gICAgfVxufSlcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL2hlYWRlci5kaXJlY3RpdmUuanNcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IFwiPG1kLXRvb2xiYXI+ICAgIFxcblxcbjwvbWQtdG9vbGJhcj5cIlxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9oZWFkZXIudGVtcGxhdGUuaHRtbFxuICoqIG1vZHVsZSBpZCA9IDlcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2luZGV4LmpzIS4vYXBwLnNjc3NcIik7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9hZGRTdHlsZXMuanNcIikoY29udGVudCwge30pO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG5cdC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdGlmKCFjb250ZW50LmxvY2Fscykge1xuXHRcdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2luZGV4LmpzIS4vYXBwLnNjc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvaW5kZXguanMhLi9hcHAuc2Nzc1wiKTtcblx0XHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXHRcdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHRcdH0pO1xuXHR9XG5cdC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3Ncblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL2FwcC5zY3NzXG4gKiogbW9kdWxlIGlkID0gMTBcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSgpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLnJhZGlhbCB7XFxuICBiYWNrZ3JvdW5kOiAtbW96LXJhZGlhbC1ncmFkaWVudChjZW50ZXIsIGNpcmNsZSBjb3ZlciwgI2ZmZiAwJSwgI2ZmZiAxMDAlKTtcXG4gIGJhY2tncm91bmQ6IC13ZWJraXQtZ3JhZGllbnQocmFkaWFsLCBjZW50ZXIgY2VudGVyLCAwcHgsIGNlbnRlciBjZW50ZXIsIDEwMCUsIGNvbG9yLXN0b3AoMCUsICNmZmYpLCBjb2xvci1zdG9wKDEwMCUsICNmZmYpKTtcXG4gIGJhY2tncm91bmQ6IC13ZWJraXQtcmFkaWFsLWdyYWRpZW50KGNlbnRlciwgY2lyY2xlIGNvdmVyLCAjZmZmIDAlLCAjZmZmIDEwMCUpO1xcbiAgYmFja2dyb3VuZDogLW8tcmFkaWFsLWdyYWRpZW50KGNlbnRlciwgY2lyY2xlIGNvdmVyLCAjZmZmIDAlLCAjZmZmIDEwMCUpO1xcbiAgYmFja2dyb3VuZDogLW1zLXJhZGlhbC1ncmFkaWVudChjZW50ZXIsIGNpcmNsZSBjb3ZlciwgI2ZmZiAwJSwgI2ZmZiAxMDAlKTtcXG4gIGJhY2tncm91bmQ6IHJhZGlhbC1ncmFkaWVudChjZW50ZXIsIGNpcmNsZSBjb3ZlciwgI2ZmZiAwJSwgI2ZmZiAxMDAlKTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7IH1cXG5cXG5odG1sLCBib2R5IHtcXG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcXG4gIGZvbnQtc2l6ZTogMTRweDtcXG4gIGhlaWdodDogMTAwJTtcXG4gIG1hcmdpbjogMHB4O1xcbiAgcGFkZGluZzogMHB4OyB9XFxuXFxubWQtaW5wdXQtY29udGFpbmVyIHtcXG4gIGZvbnQtc2l6ZTogMjJweCAhaW1wb3J0YW50OyB9XFxuXFxuLm1kLXdoaXRlZnJhbWUtMGRwIHtcXG4gIGJveC1zaGFkb3c6IDBweCAwcHggMHB4IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7IH1cXG5cXG4udHJhbnNwYXJlbnQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7IH1cXG5cXG5pbWc6Zm9jdXMge1xcbiAgb3V0bGluZTogMDsgfVxcblxcbmxhYmVsIHtcXG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkOyB9XFxuXFxubWQtdG9vbGJhciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGUzNjQxICFpbXBvcnRhbnQ7XFxuICBtYXJnaW46IGF1dG87XFxuICBmb250LXdlaWdodDogNTAwO1xcbiAgaGVpZ2h0OiA1MHB4O1xcbiAgbWluLWhlaWdodDogNTBweDtcXG4gIG1heC1oZWlnaHQ6IDEwMHB4ICFpbXBvcnRhbnQ7IH1cXG5cXG5tZC1zaWRlbmF2LCBtZC1zaWRlbmF2Lm1kLWxvY2tlZC1vcGVuLCBtZC1zaWRlbmF2Lm1kLWNsb3NlZC5tZC1sb2NrZWQtb3Blbi1hZGQtYWN0aXZlIHtcXG4gIG1pbi13aWR0aDogMTUwcHggIWltcG9ydGFudDtcXG4gIHdpZHRoOiA1MHZ3ICFpbXBvcnRhbnQ7XFxuICBtYXgtd2lkdGg6IDE1MHB4ICFpbXBvcnRhbnQ7IH1cXG5cXG5tZC1jb250ZW50IHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmYgIWltcG9ydGFudDsgfVxcblxcbm1kLWxpc3QtaXRlbSA+IGJ1dHRvbiB7XFxuICB3aWR0aDogMTAwJTtcXG4gIHRleHQtYWxpZ246IGxlZnQgIWltcG9ydGFudDsgfVxcblxcbm1kLWxpc3QtaXRlbS5zZWxlY3RlZCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGRkICFpbXBvcnRhbnQ7IH1cXG5cXG4jY29udGVudCB7XFxuICBwYWRkaW5nLWxlZnQ6IDQwcHg7XFxuICBwYWRkaW5nLXJpZ2h0OiA0MHB4O1xcbiAgcGFkZGluZy10b3A6IDVweDsgfVxcblxcbi5hdmF0YXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzg0ZDhmZDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHdpZHRoOiAxNjVweDtcXG4gIGhlaWdodDogMTU4cHg7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIG1hcmdpbjogMHB4O1xcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXG4gIHpvb206IDAuNzA7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVooMCk7XFxuICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMC43KTtcXG4gIC1tb3otdHJhbnNmb3JtOiBzY2FsZSgwLjcpOyB9XFxuXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuLi9+L2Nzcy1sb2FkZXIhLi4vfi9zYXNzLWxvYWRlciEuL2FwcC5zY3NzXG4gKiogbW9kdWxlIGlkID0gMTFcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8qXHJcblx0TUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcclxuXHRBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXHJcbiovXHJcbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXHJcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oKSB7XHJcblx0dmFyIGxpc3QgPSBbXTtcclxuXHJcblx0Ly8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xyXG5cdGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcclxuXHRcdHZhciByZXN1bHQgPSBbXTtcclxuXHRcdGZvcih2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdHZhciBpdGVtID0gdGhpc1tpXTtcclxuXHRcdFx0aWYoaXRlbVsyXSkge1xyXG5cdFx0XHRcdHJlc3VsdC5wdXNoKFwiQG1lZGlhIFwiICsgaXRlbVsyXSArIFwie1wiICsgaXRlbVsxXSArIFwifVwiKTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRyZXN1bHQucHVzaChpdGVtWzFdKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIHJlc3VsdC5qb2luKFwiXCIpO1xyXG5cdH07XHJcblxyXG5cdC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XHJcblx0bGlzdC5pID0gZnVuY3Rpb24obW9kdWxlcywgbWVkaWFRdWVyeSkge1xyXG5cdFx0aWYodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpXHJcblx0XHRcdG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIFwiXCJdXTtcclxuXHRcdHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XHJcblx0XHRmb3IodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHR2YXIgaWQgPSB0aGlzW2ldWzBdO1xyXG5cdFx0XHRpZih0eXBlb2YgaWQgPT09IFwibnVtYmVyXCIpXHJcblx0XHRcdFx0YWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xyXG5cdFx0fVxyXG5cdFx0Zm9yKGkgPSAwOyBpIDwgbW9kdWxlcy5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHR2YXIgaXRlbSA9IG1vZHVsZXNbaV07XHJcblx0XHRcdC8vIHNraXAgYWxyZWFkeSBpbXBvcnRlZCBtb2R1bGVcclxuXHRcdFx0Ly8gdGhpcyBpbXBsZW1lbnRhdGlvbiBpcyBub3QgMTAwJSBwZXJmZWN0IGZvciB3ZWlyZCBtZWRpYSBxdWVyeSBjb21iaW5hdGlvbnNcclxuXHRcdFx0Ly8gIHdoZW4gYSBtb2R1bGUgaXMgaW1wb3J0ZWQgbXVsdGlwbGUgdGltZXMgd2l0aCBkaWZmZXJlbnQgbWVkaWEgcXVlcmllcy5cclxuXHRcdFx0Ly8gIEkgaG9wZSB0aGlzIHdpbGwgbmV2ZXIgb2NjdXIgKEhleSB0aGlzIHdheSB3ZSBoYXZlIHNtYWxsZXIgYnVuZGxlcylcclxuXHRcdFx0aWYodHlwZW9mIGl0ZW1bMF0gIT09IFwibnVtYmVyXCIgfHwgIWFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcclxuXHRcdFx0XHRpZihtZWRpYVF1ZXJ5ICYmICFpdGVtWzJdKSB7XHJcblx0XHRcdFx0XHRpdGVtWzJdID0gbWVkaWFRdWVyeTtcclxuXHRcdFx0XHR9IGVsc2UgaWYobWVkaWFRdWVyeSkge1xyXG5cdFx0XHRcdFx0aXRlbVsyXSA9IFwiKFwiICsgaXRlbVsyXSArIFwiKSBhbmQgKFwiICsgbWVkaWFRdWVyeSArIFwiKVwiO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRsaXN0LnB1c2goaXRlbSk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9O1xyXG5cdHJldHVybiBsaXN0O1xyXG59O1xyXG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4uL34vY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcbiAqKiBtb2R1bGUgaWQgPSAxMlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLypcclxuXHRNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxyXG5cdEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcclxuKi9cclxudmFyIHN0eWxlc0luRG9tID0ge30sXHJcblx0bWVtb2l6ZSA9IGZ1bmN0aW9uKGZuKSB7XHJcblx0XHR2YXIgbWVtbztcclxuXHRcdHJldHVybiBmdW5jdGlvbiAoKSB7XHJcblx0XHRcdGlmICh0eXBlb2YgbWVtbyA9PT0gXCJ1bmRlZmluZWRcIikgbWVtbyA9IGZuLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XHJcblx0XHRcdHJldHVybiBtZW1vO1xyXG5cdFx0fTtcclxuXHR9LFxyXG5cdGlzT2xkSUUgPSBtZW1vaXplKGZ1bmN0aW9uKCkge1xyXG5cdFx0cmV0dXJuIC9tc2llIFs2LTldXFxiLy50ZXN0KHdpbmRvdy5uYXZpZ2F0b3IudXNlckFnZW50LnRvTG93ZXJDYXNlKCkpO1xyXG5cdH0pLFxyXG5cdGdldEhlYWRFbGVtZW50ID0gbWVtb2l6ZShmdW5jdGlvbiAoKSB7XHJcblx0XHRyZXR1cm4gZG9jdW1lbnQuaGVhZCB8fCBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcImhlYWRcIilbMF07XHJcblx0fSksXHJcblx0c2luZ2xldG9uRWxlbWVudCA9IG51bGwsXHJcblx0c2luZ2xldG9uQ291bnRlciA9IDAsXHJcblx0c3R5bGVFbGVtZW50c0luc2VydGVkQXRUb3AgPSBbXTtcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24obGlzdCwgb3B0aW9ucykge1xyXG5cdGlmKHR5cGVvZiBERUJVRyAhPT0gXCJ1bmRlZmluZWRcIiAmJiBERUJVRykge1xyXG5cdFx0aWYodHlwZW9mIGRvY3VtZW50ICE9PSBcIm9iamVjdFwiKSB0aHJvdyBuZXcgRXJyb3IoXCJUaGUgc3R5bGUtbG9hZGVyIGNhbm5vdCBiZSB1c2VkIGluIGEgbm9uLWJyb3dzZXIgZW52aXJvbm1lbnRcIik7XHJcblx0fVxyXG5cclxuXHRvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcclxuXHQvLyBGb3JjZSBzaW5nbGUtdGFnIHNvbHV0aW9uIG9uIElFNi05LCB3aGljaCBoYXMgYSBoYXJkIGxpbWl0IG9uIHRoZSAjIG9mIDxzdHlsZT5cclxuXHQvLyB0YWdzIGl0IHdpbGwgYWxsb3cgb24gYSBwYWdlXHJcblx0aWYgKHR5cGVvZiBvcHRpb25zLnNpbmdsZXRvbiA9PT0gXCJ1bmRlZmluZWRcIikgb3B0aW9ucy5zaW5nbGV0b24gPSBpc09sZElFKCk7XHJcblxyXG5cdC8vIEJ5IGRlZmF1bHQsIGFkZCA8c3R5bGU+IHRhZ3MgdG8gdGhlIGJvdHRvbSBvZiA8aGVhZD4uXHJcblx0aWYgKHR5cGVvZiBvcHRpb25zLmluc2VydEF0ID09PSBcInVuZGVmaW5lZFwiKSBvcHRpb25zLmluc2VydEF0ID0gXCJib3R0b21cIjtcclxuXHJcblx0dmFyIHN0eWxlcyA9IGxpc3RUb1N0eWxlcyhsaXN0KTtcclxuXHRhZGRTdHlsZXNUb0RvbShzdHlsZXMsIG9wdGlvbnMpO1xyXG5cclxuXHRyZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcclxuXHRcdHZhciBtYXlSZW1vdmUgPSBbXTtcclxuXHRcdGZvcih2YXIgaSA9IDA7IGkgPCBzdHlsZXMubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0dmFyIGl0ZW0gPSBzdHlsZXNbaV07XHJcblx0XHRcdHZhciBkb21TdHlsZSA9IHN0eWxlc0luRG9tW2l0ZW0uaWRdO1xyXG5cdFx0XHRkb21TdHlsZS5yZWZzLS07XHJcblx0XHRcdG1heVJlbW92ZS5wdXNoKGRvbVN0eWxlKTtcclxuXHRcdH1cclxuXHRcdGlmKG5ld0xpc3QpIHtcclxuXHRcdFx0dmFyIG5ld1N0eWxlcyA9IGxpc3RUb1N0eWxlcyhuZXdMaXN0KTtcclxuXHRcdFx0YWRkU3R5bGVzVG9Eb20obmV3U3R5bGVzLCBvcHRpb25zKTtcclxuXHRcdH1cclxuXHRcdGZvcih2YXIgaSA9IDA7IGkgPCBtYXlSZW1vdmUubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0dmFyIGRvbVN0eWxlID0gbWF5UmVtb3ZlW2ldO1xyXG5cdFx0XHRpZihkb21TdHlsZS5yZWZzID09PSAwKSB7XHJcblx0XHRcdFx0Zm9yKHZhciBqID0gMDsgaiA8IGRvbVN0eWxlLnBhcnRzLmxlbmd0aDsgaisrKVxyXG5cdFx0XHRcdFx0ZG9tU3R5bGUucGFydHNbal0oKTtcclxuXHRcdFx0XHRkZWxldGUgc3R5bGVzSW5Eb21bZG9tU3R5bGUuaWRdO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fTtcclxufVxyXG5cclxuZnVuY3Rpb24gYWRkU3R5bGVzVG9Eb20oc3R5bGVzLCBvcHRpb25zKSB7XHJcblx0Zm9yKHZhciBpID0gMDsgaSA8IHN0eWxlcy5sZW5ndGg7IGkrKykge1xyXG5cdFx0dmFyIGl0ZW0gPSBzdHlsZXNbaV07XHJcblx0XHR2YXIgZG9tU3R5bGUgPSBzdHlsZXNJbkRvbVtpdGVtLmlkXTtcclxuXHRcdGlmKGRvbVN0eWxlKSB7XHJcblx0XHRcdGRvbVN0eWxlLnJlZnMrKztcclxuXHRcdFx0Zm9yKHZhciBqID0gMDsgaiA8IGRvbVN0eWxlLnBhcnRzLmxlbmd0aDsgaisrKSB7XHJcblx0XHRcdFx0ZG9tU3R5bGUucGFydHNbal0oaXRlbS5wYXJ0c1tqXSk7XHJcblx0XHRcdH1cclxuXHRcdFx0Zm9yKDsgaiA8IGl0ZW0ucGFydHMubGVuZ3RoOyBqKyspIHtcclxuXHRcdFx0XHRkb21TdHlsZS5wYXJ0cy5wdXNoKGFkZFN0eWxlKGl0ZW0ucGFydHNbal0sIG9wdGlvbnMpKTtcclxuXHRcdFx0fVxyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0dmFyIHBhcnRzID0gW107XHJcblx0XHRcdGZvcih2YXIgaiA9IDA7IGogPCBpdGVtLnBhcnRzLmxlbmd0aDsgaisrKSB7XHJcblx0XHRcdFx0cGFydHMucHVzaChhZGRTdHlsZShpdGVtLnBhcnRzW2pdLCBvcHRpb25zKSk7XHJcblx0XHRcdH1cclxuXHRcdFx0c3R5bGVzSW5Eb21baXRlbS5pZF0gPSB7aWQ6IGl0ZW0uaWQsIHJlZnM6IDEsIHBhcnRzOiBwYXJ0c307XHJcblx0XHR9XHJcblx0fVxyXG59XHJcblxyXG5mdW5jdGlvbiBsaXN0VG9TdHlsZXMobGlzdCkge1xyXG5cdHZhciBzdHlsZXMgPSBbXTtcclxuXHR2YXIgbmV3U3R5bGVzID0ge307XHJcblx0Zm9yKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcclxuXHRcdHZhciBpdGVtID0gbGlzdFtpXTtcclxuXHRcdHZhciBpZCA9IGl0ZW1bMF07XHJcblx0XHR2YXIgY3NzID0gaXRlbVsxXTtcclxuXHRcdHZhciBtZWRpYSA9IGl0ZW1bMl07XHJcblx0XHR2YXIgc291cmNlTWFwID0gaXRlbVszXTtcclxuXHRcdHZhciBwYXJ0ID0ge2NzczogY3NzLCBtZWRpYTogbWVkaWEsIHNvdXJjZU1hcDogc291cmNlTWFwfTtcclxuXHRcdGlmKCFuZXdTdHlsZXNbaWRdKVxyXG5cdFx0XHRzdHlsZXMucHVzaChuZXdTdHlsZXNbaWRdID0ge2lkOiBpZCwgcGFydHM6IFtwYXJ0XX0pO1xyXG5cdFx0ZWxzZVxyXG5cdFx0XHRuZXdTdHlsZXNbaWRdLnBhcnRzLnB1c2gocGFydCk7XHJcblx0fVxyXG5cdHJldHVybiBzdHlsZXM7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zLCBzdHlsZUVsZW1lbnQpIHtcclxuXHR2YXIgaGVhZCA9IGdldEhlYWRFbGVtZW50KCk7XHJcblx0dmFyIGxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wID0gc3R5bGVFbGVtZW50c0luc2VydGVkQXRUb3Bbc3R5bGVFbGVtZW50c0luc2VydGVkQXRUb3AubGVuZ3RoIC0gMV07XHJcblx0aWYgKG9wdGlvbnMuaW5zZXJ0QXQgPT09IFwidG9wXCIpIHtcclxuXHRcdGlmKCFsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcCkge1xyXG5cdFx0XHRoZWFkLmluc2VydEJlZm9yZShzdHlsZUVsZW1lbnQsIGhlYWQuZmlyc3RDaGlsZCk7XHJcblx0XHR9IGVsc2UgaWYobGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3AubmV4dFNpYmxpbmcpIHtcclxuXHRcdFx0aGVhZC5pbnNlcnRCZWZvcmUoc3R5bGVFbGVtZW50LCBsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcC5uZXh0U2libGluZyk7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRoZWFkLmFwcGVuZENoaWxkKHN0eWxlRWxlbWVudCk7XHJcblx0XHR9XHJcblx0XHRzdHlsZUVsZW1lbnRzSW5zZXJ0ZWRBdFRvcC5wdXNoKHN0eWxlRWxlbWVudCk7XHJcblx0fSBlbHNlIGlmIChvcHRpb25zLmluc2VydEF0ID09PSBcImJvdHRvbVwiKSB7XHJcblx0XHRoZWFkLmFwcGVuZENoaWxkKHN0eWxlRWxlbWVudCk7XHJcblx0fSBlbHNlIHtcclxuXHRcdHRocm93IG5ldyBFcnJvcihcIkludmFsaWQgdmFsdWUgZm9yIHBhcmFtZXRlciAnaW5zZXJ0QXQnLiBNdXN0IGJlICd0b3AnIG9yICdib3R0b20nLlwiKTtcclxuXHR9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcclxuXHRzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xyXG5cdHZhciBpZHggPSBzdHlsZUVsZW1lbnRzSW5zZXJ0ZWRBdFRvcC5pbmRleE9mKHN0eWxlRWxlbWVudCk7XHJcblx0aWYoaWR4ID49IDApIHtcclxuXHRcdHN0eWxlRWxlbWVudHNJbnNlcnRlZEF0VG9wLnNwbGljZShpZHgsIDEpO1xyXG5cdH1cclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlU3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcclxuXHR2YXIgc3R5bGVFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xyXG5cdHN0eWxlRWxlbWVudC50eXBlID0gXCJ0ZXh0L2Nzc1wiO1xyXG5cdGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zLCBzdHlsZUVsZW1lbnQpO1xyXG5cdHJldHVybiBzdHlsZUVsZW1lbnQ7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZUxpbmtFbGVtZW50KG9wdGlvbnMpIHtcclxuXHR2YXIgbGlua0VsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlua1wiKTtcclxuXHRsaW5rRWxlbWVudC5yZWwgPSBcInN0eWxlc2hlZXRcIjtcclxuXHRpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucywgbGlua0VsZW1lbnQpO1xyXG5cdHJldHVybiBsaW5rRWxlbWVudDtcclxufVxyXG5cclxuZnVuY3Rpb24gYWRkU3R5bGUob2JqLCBvcHRpb25zKSB7XHJcblx0dmFyIHN0eWxlRWxlbWVudCwgdXBkYXRlLCByZW1vdmU7XHJcblxyXG5cdGlmIChvcHRpb25zLnNpbmdsZXRvbikge1xyXG5cdFx0dmFyIHN0eWxlSW5kZXggPSBzaW5nbGV0b25Db3VudGVyKys7XHJcblx0XHRzdHlsZUVsZW1lbnQgPSBzaW5nbGV0b25FbGVtZW50IHx8IChzaW5nbGV0b25FbGVtZW50ID0gY3JlYXRlU3R5bGVFbGVtZW50KG9wdGlvbnMpKTtcclxuXHRcdHVwZGF0ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZUVsZW1lbnQsIHN0eWxlSW5kZXgsIGZhbHNlKTtcclxuXHRcdHJlbW92ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZUVsZW1lbnQsIHN0eWxlSW5kZXgsIHRydWUpO1xyXG5cdH0gZWxzZSBpZihvYmouc291cmNlTWFwICYmXHJcblx0XHR0eXBlb2YgVVJMID09PSBcImZ1bmN0aW9uXCIgJiZcclxuXHRcdHR5cGVvZiBVUkwuY3JlYXRlT2JqZWN0VVJMID09PSBcImZ1bmN0aW9uXCIgJiZcclxuXHRcdHR5cGVvZiBVUkwucmV2b2tlT2JqZWN0VVJMID09PSBcImZ1bmN0aW9uXCIgJiZcclxuXHRcdHR5cGVvZiBCbG9iID09PSBcImZ1bmN0aW9uXCIgJiZcclxuXHRcdHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcclxuXHRcdHN0eWxlRWxlbWVudCA9IGNyZWF0ZUxpbmtFbGVtZW50KG9wdGlvbnMpO1xyXG5cdFx0dXBkYXRlID0gdXBkYXRlTGluay5iaW5kKG51bGwsIHN0eWxlRWxlbWVudCk7XHJcblx0XHRyZW1vdmUgPSBmdW5jdGlvbigpIHtcclxuXHRcdFx0cmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XHJcblx0XHRcdGlmKHN0eWxlRWxlbWVudC5ocmVmKVxyXG5cdFx0XHRcdFVSTC5yZXZva2VPYmplY3RVUkwoc3R5bGVFbGVtZW50LmhyZWYpO1xyXG5cdFx0fTtcclxuXHR9IGVsc2Uge1xyXG5cdFx0c3R5bGVFbGVtZW50ID0gY3JlYXRlU3R5bGVFbGVtZW50KG9wdGlvbnMpO1xyXG5cdFx0dXBkYXRlID0gYXBwbHlUb1RhZy5iaW5kKG51bGwsIHN0eWxlRWxlbWVudCk7XHJcblx0XHRyZW1vdmUgPSBmdW5jdGlvbigpIHtcclxuXHRcdFx0cmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XHJcblx0XHR9O1xyXG5cdH1cclxuXHJcblx0dXBkYXRlKG9iaik7XHJcblxyXG5cdHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZShuZXdPYmopIHtcclxuXHRcdGlmKG5ld09iaikge1xyXG5cdFx0XHRpZihuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXApXHJcblx0XHRcdFx0cmV0dXJuO1xyXG5cdFx0XHR1cGRhdGUob2JqID0gbmV3T2JqKTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHJlbW92ZSgpO1xyXG5cdFx0fVxyXG5cdH07XHJcbn1cclxuXHJcbnZhciByZXBsYWNlVGV4dCA9IChmdW5jdGlvbiAoKSB7XHJcblx0dmFyIHRleHRTdG9yZSA9IFtdO1xyXG5cclxuXHRyZXR1cm4gZnVuY3Rpb24gKGluZGV4LCByZXBsYWNlbWVudCkge1xyXG5cdFx0dGV4dFN0b3JlW2luZGV4XSA9IHJlcGxhY2VtZW50O1xyXG5cdFx0cmV0dXJuIHRleHRTdG9yZS5maWx0ZXIoQm9vbGVhbikuam9pbignXFxuJyk7XHJcblx0fTtcclxufSkoKTtcclxuXHJcbmZ1bmN0aW9uIGFwcGx5VG9TaW5nbGV0b25UYWcoc3R5bGVFbGVtZW50LCBpbmRleCwgcmVtb3ZlLCBvYmopIHtcclxuXHR2YXIgY3NzID0gcmVtb3ZlID8gXCJcIiA6IG9iai5jc3M7XHJcblxyXG5cdGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xyXG5cdFx0c3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IHJlcGxhY2VUZXh0KGluZGV4LCBjc3MpO1xyXG5cdH0gZWxzZSB7XHJcblx0XHR2YXIgY3NzTm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcyk7XHJcblx0XHR2YXIgY2hpbGROb2RlcyA9IHN0eWxlRWxlbWVudC5jaGlsZE5vZGVzO1xyXG5cdFx0aWYgKGNoaWxkTm9kZXNbaW5kZXhdKSBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoY2hpbGROb2Rlc1tpbmRleF0pO1xyXG5cdFx0aWYgKGNoaWxkTm9kZXMubGVuZ3RoKSB7XHJcblx0XHRcdHN0eWxlRWxlbWVudC5pbnNlcnRCZWZvcmUoY3NzTm9kZSwgY2hpbGROb2Rlc1tpbmRleF0pO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0c3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGNzc05vZGUpO1xyXG5cdFx0fVxyXG5cdH1cclxufVxyXG5cclxuZnVuY3Rpb24gYXBwbHlUb1RhZyhzdHlsZUVsZW1lbnQsIG9iaikge1xyXG5cdHZhciBjc3MgPSBvYmouY3NzO1xyXG5cdHZhciBtZWRpYSA9IG9iai5tZWRpYTtcclxuXHR2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcclxuXHJcblx0aWYobWVkaWEpIHtcclxuXHRcdHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJtZWRpYVwiLCBtZWRpYSlcclxuXHR9XHJcblxyXG5cdGlmKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XHJcblx0XHRzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xyXG5cdH0gZWxzZSB7XHJcblx0XHR3aGlsZShzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xyXG5cdFx0XHRzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xyXG5cdFx0fVxyXG5cdFx0c3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xyXG5cdH1cclxufVxyXG5cclxuZnVuY3Rpb24gdXBkYXRlTGluayhsaW5rRWxlbWVudCwgb2JqKSB7XHJcblx0dmFyIGNzcyA9IG9iai5jc3M7XHJcblx0dmFyIG1lZGlhID0gb2JqLm1lZGlhO1xyXG5cdHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xyXG5cclxuXHRpZihzb3VyY2VNYXApIHtcclxuXHRcdC8vIGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9hLzI2NjAzODc1XHJcblx0XHRjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiICsgYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSArIFwiICovXCI7XHJcblx0fVxyXG5cclxuXHR2YXIgYmxvYiA9IG5ldyBCbG9iKFtjc3NdLCB7IHR5cGU6IFwidGV4dC9jc3NcIiB9KTtcclxuXHJcblx0dmFyIG9sZFNyYyA9IGxpbmtFbGVtZW50LmhyZWY7XHJcblxyXG5cdGxpbmtFbGVtZW50LmhyZWYgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKGJsb2IpO1xyXG5cclxuXHRpZihvbGRTcmMpXHJcblx0XHRVUkwucmV2b2tlT2JqZWN0VVJMKG9sZFNyYyk7XHJcbn1cclxuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuLi9+L3N0eWxlLWxvYWRlci9hZGRTdHlsZXMuanNcbiAqKiBtb2R1bGUgaWQgPSAxM1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiaW1wb3J0IF9tb2R1bGUgZnJvbSAnLi9tb2R1bGUnXHJcblxyXG5sZXQgXyRyb290U2NvcGVcclxuXHJcbmV4cG9ydCBjbGFzcyBDb250ZW50Q3RybCB7XHJcblxyXG4gICAgY29uc3RydWN0b3IgKGNvbnRlbnRGYWN0b3J5LCAkcm9vdFNjb3BlKSB7XHJcblxyXG4gICAgICAgIHRoaXMuY29udGVudEZhY3RvcnkgPSBjb250ZW50RmFjdG9yeSgpXHJcbiAgICAgICAgXyRyb290U2NvcGUgICAgICAgICA9ICRyb290U2NvcGVcclxuXHJcbiAgICAgICAgdGhpcy5jYXIgPSB0aGlzLmNvbnRlbnRGYWN0b3J5Lm9uVmlld0NoYW5nZSh7IHZpZXc6ICdmcm9udCcgfSlcclxuXHJcbiAgICAgICAgXyRyb290U2NvcGUuJG9uKCdvblZpZXdDaGFuZ2U6RXZlbnQnLCAoZXZlbnQsIG9wdGlvbikgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmNhciA9IHRoaXMuY29udGVudEZhY3Rvcnkub25WaWV3Q2hhbmdlKG9wdGlvbilcclxuICAgICAgICAgICAgJCgnaW1nW3VzZW1hcF0nKS5yd2RJbWFnZU1hcHMoKTtcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICB0aGlzLmRhbWFnZVR5cGVzID0gdGhpcy5jb250ZW50RmFjdG9yeS5nZXREYW1hZ2VUeXBlcygpXHJcbiAgICAgICAgdGhpcy5hY3Rpb25zICAgICA9IHRoaXMuY29udGVudEZhY3RvcnkuZ2V0QWN0aW9ucygpXHJcbiAgICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgYXJlYUNsaWNrIChhcmVhKSB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgY29uc29sZS5sb2coJ2NhciBwYXJ0IHNlbGVjdGVkID0+ICcsIGFyZWEpXHJcbiAgICAgICAgdGhpcy5zdWJDb21wb25lbnQgID0ge31cclxuICAgICAgICB0aGlzLmNhci5jb21wb25lbnQuc3ViQ29tcG9uZW50cyA9IFtdXHJcbiAgICAgICAgdGhpcy5jYXIuY29tcG9uZW50ID0gdGhpcy5jb250ZW50RmFjdG9yeS5nZXRDb21wb25lbnRCeUFyZWEoYXJlYSlcclxuXHJcbiAgICB9XHJcblxyXG4gICAgc2VsZWN0U3ViQ29tcG9uZW50IChzdWJDb21wb25lbnQpIHtcclxuICAgICAgICB0aGlzLnN1YkNvbXBvbmVudCA9IHN1YkNvbXBvbmVudFxyXG4gICAgfVxyXG5cclxufVxyXG5cclxuX21vZHVsZS5jb250cm9sbGVyKCdDb250ZW50Q3RybCcsIENvbnRlbnRDdHJsKVxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vY29udGVudC5jb250cm9sbGVyLmpzXG4gKiovIiwiaW1wb3J0IF9tb2R1bGUgZnJvbSAnLi9tb2R1bGUnXHJcbmltcG9ydCB0ZW1wbGF0ZSBmcm9tICcuL2NvbnRlbnQudGVtcGxhdGUuaHRtbCdcclxuXHJcbl9tb2R1bGUuZGlyZWN0aXZlKCdjb250ZW50U2VjdGlvbicsIGZ1bmN0aW9uICgkdGltZW91dCkge1xyXG4gICAgJ25nSW5qZWN0J1xyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgcmVzdHJpY3Q6ICdBRScsXHJcbiAgICAgICAgc2NvcGU6IHt9LFxyXG4gICAgICAgIGNvbnRyb2xsZXJBczogJ2N0cmwnLFxyXG4gICAgICAgIGJpbmRUb0NvbnRyb2xsZXI6IHRydWUsXHJcbiAgICAgICAgdGVtcGxhdGU6IHRlbXBsYXRlLFxyXG4gICAgICAgIGNvbnRyb2xsZXI6ICdDb250ZW50Q3RybCcsXHJcblxyXG4gICAgICAgIGxpbmsgOiAoc2NvcGUsIGVsLCBhdHRycykgPT4ge1xyXG5cclxuICAgICAgICAgICAgJHRpbWVvdXQoKCkgPT4ge1xyXG5cclxuICAgICAgICAgICAgJCgnaW1nW3VzZW1hcF0nKS5yd2RJbWFnZU1hcHMoKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ2FqdXN0YWRvIScpXHJcblxyXG4gICAgICAgICAgICAvLyBUT0RPOiB0aGlzIG1lc3NlcyB1cCB0aGUgcmVzcG9uc2l2ZSByd2RJbWFnZU1hcHNcclxuICAgICAgICAgICAgLy8gJCgnI2NhcicpLm1hcHN0ZXIoe1xyXG4gICAgICAgICAgICAvLyAgICAgc3RhdGljU3RhdGU6IHRydWUsXHJcbiAgICAgICAgICAgIC8vICAgICBmaWxsT3BhY2l0eTogMC40LFxyXG4gICAgICAgICAgICAvLyAgICAgZmlsbENvbG9yOiAnZmFkYmI4NCcsXHJcbiAgICAgICAgICAgIC8vICAgICBoaWdobGlnaHQ6IHRydWUsXHJcbiAgICAgICAgICAgIC8vICAgICBtYXBLZXk6ICduYW1lJyxcclxuICAgICAgICAgICAgLy8gICAgIHNob3dUb29sVGlwOiB0cnVlLFxyXG4gICAgICAgICAgICAvLyAgICAgc2NhbGVNYXA6IGZhbHNlLFxyXG4gICAgICAgICAgICAvLyAgICAgdG9vbFRpcENsb3NlOiBbXCJ0b29sdGlwLWNsaWNrXCIsXCJhcmVhLW1vdXNlb3V0XCJdLFxyXG4gICAgICAgICAgICAvLyAgICAgYXJlYXM6IFt7XHJcbiAgICAgICAgICAgIC8vICAgICAgICAga2V5OiAnQ2FyJyxcclxuICAgICAgICAgICAgLy8gICAgICAgICB0b29sVGlwOiAnUHVlcnRhIGZyb250YWwgbGFkbyBpenF1aWVyZG8uJ1xyXG4gICAgICAgICAgICAvLyAgICAgfV0sICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAvLyAgICAgb25DbGljazogZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgLy8gICAgIH1cclxuICAgICAgICAgICAgLy8gfSk7XHJcblxyXG4gICAgICAgICAgICB9LCAwKVxyXG4gICAgICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0pXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9jb250ZW50LmRpcmVjdGl2ZS5qc1xuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gXCI8bWQtY29udGVudCBjbGFzcz1cXFwibWQtcGFkZGluZ1xcXCIgbGF5b3V0LXhzPVxcXCJjb2x1bW5cXFwiIGxheW91dD1cXFwicm93XFxcIj5cXHJcXG4gICAgPGRpdiBmbGV4LXhzIGZsZXgtZ3QteHM9XFxcIjEwMFxcXCIgbGF5b3V0PVxcXCJjb2x1bW5cXFwiPlxcclxcbiAgICAgIDxsYWJlbD5Db21wb25lbnRlPC9sYWJlbD5cXHJcXG4gICAgICA8bWQtaW5wdXQtY29udGFpbmVyPlxcclxcbiAgICAgICAgICA8bGFiZWw+e3tjdHJsLmNhci5jb21wb25lbnQubmFtZX19PC9sYWJlbD5cXHJcXG4gICAgICAgICAgPGJyLz5cXHJcXG4gICAgICA8L21kLWlucHV0LWNvbnRhaW5lcj5cXHJcXG4gICAgICA8bWQtaW5wdXQtY29udGFpbmVyPlxcclxcbiAgICAgICAgICA8bGFiZWw+U3ViLUNvbXBvbmVudGU8L2xhYmVsPlxcclxcbiAgICAgICAgICA8bWQtc2VsZWN0IG5nLW1vZGVsPVxcXCJjdHJsLnN1YkNvbXBvbmVudFxcXCI+XFxyXFxuICAgICAgICAgICAgPG1kLW9wdGlvbiBuZy1yZXBlYXQ9XFxcInN1YkNvbXBvbmVudCBpbiBjdHJsLmNhci5jb21wb25lbnQuc3ViQ29tcG9uZW50c1xcXCIgXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICBuZy12YWx1ZT1cXFwic3ViQ29tcG9uZW50Lm5hbWVcXFwiPlxcclxcbiAgICAgICAgICAgICAge3tzdWJDb21wb25lbnQubmFtZX19XFxyXFxuICAgICAgICAgICAgPC9tZC1vcHRpb24+XFxyXFxuICAgICAgICAgIDwvbWQtc2VsZWN0PlxcclxcbiAgICAgICAgPC9tZC1pbnB1dC1jb250YWluZXI+XFxyXFxuICAgICAgICA8bWQtaW5wdXQtY29udGFpbmVyPlxcclxcbiAgICAgICAgICA8bGFiZWw+VGlwbyBMaXN0YTwvbGFiZWw+XFxyXFxuICAgICAgICAgIDxtZC1zZWxlY3QgbmctbW9kZWw9XFxcImN0cmwuZGFtYWdlVHlwZVxcXCI+XFxyXFxuICAgICAgICAgICAgPG1kLW9wdGlvbiBuZy1yZXBlYXQ9XFxcImRhbWFnZVR5cGUgaW4gY3RybC5kYW1hZ2VUeXBlc1xcXCIgXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICBuZy12YWx1ZT1cXFwiZGFtYWdlVHlwZS5uYW1lXFxcIj5cXHJcXG4gICAgICAgICAgICAgIHt7ZGFtYWdlVHlwZS5uYW1lfX1cXHJcXG4gICAgICAgICAgICA8L21kLW9wdGlvbj5cXHJcXG4gICAgICAgICAgPC9tZC1zZWxlY3Q+XFxyXFxuICAgICAgICA8L21kLWlucHV0LWNvbnRhaW5lcj5cXHJcXG4gICAgICAgIDxtZC1pbnB1dC1jb250YWluZXI+XFxyXFxuICAgICAgICAgIDxsYWJlbD5BY2Npb248L2xhYmVsPlxcclxcbiAgICAgICAgICA8bWQtc2VsZWN0IG5nLW1vZGVsPVxcXCJjdHJsLmFjdGlvblxcXCI+XFxyXFxuICAgICAgICAgICAgPG1kLW9wdGlvbiBuZy1yZXBlYXQ9XFxcImFjdGlvbiBpbiBjdHJsLmFjdGlvbnNcXFwiIFxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgbmctdmFsdWU9XFxcImFjdGlvbi5uYW1lXFxcIj5cXHJcXG4gICAgICAgICAgICAgIHt7YWN0aW9uLm5hbWV9fVxcclxcbiAgICAgICAgICAgIDwvbWQtb3B0aW9uPlxcclxcbiAgICAgICAgICA8L21kLXNlbGVjdD5cXHJcXG4gICAgICAgIDwvbWQtaW5wdXQtY29udGFpbmVyPlxcclxcbiAgICA8L2Rpdj5cXHJcXG48L21kLWNvbnRlbnQ+XFxyXFxuXFxyXFxuPGRpdiBjbGFzcz1cXFwiY29udGFpbmVyIG1kLXdoaXRlZnJhbWUtMGRwXFxcIj5cXHJcXG4gICAgPG1kLWNvbnRlbnQgY2xhc3M9XFxcIm1kLXBhZGRpbmcgbWQtd2hpdGVmcmFtZS0wZHBcXFwiIGxheW91dC14cz1cXFwiY29sdW1uXFxcIiBsYXlvdXQ9XFxcInJvd1xcXCI+XFxyXFxuICAgICAgICA8bWQtY2FyZCBjbGFzcz1cXFwibWQtd2hpdGVmcmFtZS0wZHBcXFwiPlxcclxcbiAgICAgICAgICAgIDxpbWcgbmctc3JjPVxcXCJ7e2N0cmwuY2FyLmltYWdlLnVybH19XFxcIiBjbGFzcz1cXFwibWQtY3RybC5jYXJkLWltYWdlXFxcIiBpZD1cXFwie3tjdHJsLmNhci5pbWFnZS5pZH19XFxcIiB1c2VtYXA9XFxcInt7Y3RybC5jYXIuaW1hZ2UudXNlbWFwfX1cXFwiPlxcclxcbiAgICAgICAgICAgIDxtYXAgbmFtZT1cXFwie3tjdHJsLmNhci5tYXAubmFtZX19XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPGFyZWEgbmctcmVwZWF0PVxcXCJhcmVhIGluIGN0cmwuY2FyLm1hcC5hcmVhc1xcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgbmctY2xpY2s9XFxcImN0cmwuYXJlYUNsaWNrKGFyZWEpXFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgICBhbHQ9XFxcInt7YXJlYS5hbHR9fVxcXCIgXFxyXFxuICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPVxcXCJ7e2FyZWEudGl0bGV9fVxcXCIgIFxcclxcbiAgICAgICAgICAgICAgICAgICAgICBocmVmPVxcXCIjXFxcIiBcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgY29vcmRzPVxcXCJ7e2FyZWEuY29vcmRzfX1cXFwiIFxcclxcbiAgICAgICAgICAgICAgICAgICAgICBzaGFwZT1cXFwie3thcmVhLnNoYXBlfX1cXFwiPlxcclxcbiAgICAgICAgICAgIDwvbWFwPlxcclxcbiAgICAgICAgPC9tZC1jdHJsLmNhcmQ+XFxyXFxuICAgIDwvbWQtY29udGVudD5cXHJcXG48L2Rpdj5cIlxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9jb250ZW50LnRlbXBsYXRlLmh0bWxcbiAqKiBtb2R1bGUgaWQgPSAxOVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiaW1wb3J0IF9tb2R1bGUgZnJvbSAnLi9tb2R1bGUnXHJcblxyXG5leHBvcnQgY2xhc3MgU2lkZU5hdlNlcnZpY2Uge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yICgpIHtcclxuICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICBnZXRPcHRpb25zICgpIHtcclxuXHJcbiAgICAgICAgcmV0dXJuIFtcclxuXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGlkOiAxLFxyXG4gICAgICAgICAgICAgICAgdmlldzogJ2Zyb250JyxcclxuICAgICAgICAgICAgICAgIGltZzogJ2h0dHBzOi8vczE3LnBvc3RpbWcub3JnLzhqdHJkcTd0ci9jYXJmcm9udC5wbmcnLFxyXG4gICAgICAgICAgICAgICAgYmdjb2xvcjogeyAnYmFja2dyb3VuZC1jb2xvcic6ICcjZmVkZmI1JyB9XHJcbiAgICAgICAgICAgIH0sXHJcblxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBpZDogMixcclxuICAgICAgICAgICAgICAgIHZpZXc6ICdzaWRlJyxcclxuICAgICAgICAgICAgICAgIGltZzogJ2h0dHBzOi8vczE4LnBvc3RpbWcub3JnL2ltNm0wMHJyZC9jYXJzaWRlLnBuZycsXHJcbiAgICAgICAgICAgICAgICBiZ2NvbG9yOiB7ICdiYWNrZ3JvdW5kLWNvbG9yJzogJyNiYmY1Y2InIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGlkOiAzLFxyXG4gICAgICAgICAgICAgICAgdmlldzogJ3JlYXInLFxyXG4gICAgICAgICAgICAgICAgaW1nOiAnaHR0cHM6Ly9zMTgucG9zdGltZy5vcmcvN2ZmZ25qeXJ0L2NhcmJhY2sucG5nJyxcclxuICAgICAgICAgICAgICAgIGJnY29sb3I6IHsgJ2JhY2tncm91bmQtY29sb3InOiAnIzg0ZDhmZCcgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgXVxyXG5cclxuICAgIH1cclxuXHJcbn1cclxuXHJcbl9tb2R1bGUuc2VydmljZSgnc2lkZU5hdlNlcnZpY2UnLCBTaWRlTmF2U2VydmljZSlcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NpZGUuc2VydmljZS5qc1xuICoqLyIsImltcG9ydCBfbW9kdWxlIGZyb20gJy4vbW9kdWxlJ1xyXG5pbXBvcnQgQ2FyIGZyb20gJy4vY2FyJ1xyXG5pbXBvcnQgSW1hZ2UgZnJvbSAnLi9pbWFnZSdcclxuaW1wb3J0IEFyZWEgZnJvbSAnLi9hcmVhJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2FyU2VydmljZSB7XHJcblxyXG4gICAgY29uc3RydWN0b3IgKCkge1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBnZXRBbGwgKCkge1xyXG4gICAgICAgIFxyXG4gICAgICAgIHJldHVybiBbXHJcbiAgICAgICAgICAgIG5ldyBDYXIoXHJcbiAgICAgICAgICAgICAgICBuZXcgSW1hZ2UoJ2h0dHBzOi8vczE4LnBvc3RpbWcub3JnL2puaDA2aGFtMS9uZ2NhcnNpZGUucG5nJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdjYXItc2lkZScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnI2Nhci1tYXAtc2lkZScpLFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdjYXItbWFwLXNpZGUnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFyZWFzOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ldyBBcmVhKCdMRmRvb3InLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnTEZkb29yJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJzIwNSw5NCwxOTUsMTMxLDIwNSwxODcsMzUzLDE4MywzNTIsMTI0LDM1Miw5NywzNjAsNzcsMjcxLDgzJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3BvbHknKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmV3IEFyZWEoJ0xGd2hlZWwnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnTEZ3aGVlbCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICcxMjUsMTgzLDUzJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2NpcmNsZScpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBuZXcgQXJlYSgnTEJ3aGVlbCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdMQndoZWVsJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJzUyMywxODAsNDcnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnY2lyY2xlJyksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ldyBBcmVhKCdMQmRvb3InLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnTEJkb29yJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJzM2Miw3OSwzNTYsOTQsMzU2LDE3OCw0NTAsMTg1LDQ3OCwxMjQsNDk3LDg2LDQ5OSw3MScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdwb2x5JyksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ldyBBcmVhKCdMRndpbmRvdycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdMRndpbmRvdycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICcyMDEsODUsMjU3LDQ4LDI5OCwzMCwzNjAsMjQsMzUzLDczJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3BvbHknKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmV3IEFyZWEoJ0xCd2luZG93JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ0xCd2luZG93JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJzM3NCwyMiwzNjcsNjgsNTM2LDY5LDUwMSw0NCw0MzUsMjMnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAncG9seScpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBuZXcgQXJlYSgnTEZwYW5lbCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdMRnBhbmVsJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJzQ4LDEzMyw3NiwxNDUsMTAyLDEyOCwxMzEsMTIyLDE1MiwxMzAsMTcxLDE0MywxODcsMTgxLDIwMCwxODEsMTkyLDEzMiwxOTgsOTMsMTM5LDk1LDkxLDEwMSw2MSwxMTgnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAncG9seScpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBuZXcgQXJlYSgnTEJwYW5lbCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdMQnBhbmVsJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJzQ2MCwxNzMsNDc4LDEzNiw1MTMsMTIxLDU1MiwxMjQsNjIwLDExNyw1OTksOTQsNTgwLDc4LDU0NCw3Miw1MDgsNzMnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAncG9seScpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBuZXcgQXJlYSgnTEZidW1wZXInLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnTEZidW1wZXInLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnMTMsMTQ5LDEwLDE4NCwyMSwxOTMsNjIsMjAwLDY5LDE1MCw0OCwxMzgnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAncG9seScpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBuZXcgQXJlYSgnTEJidW1wZXInLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnTEJidW1wZXInLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnNTYxLDEyOSw1ODIsMTYxLDU4MiwxODQsNjQyLDE2NSw2NDYsMTUzLDY0NSwxMjUsNjI0LDExOCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdwb2x5JyksXHJcbiAgICAgICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICAgICAgfSxcclxuXHJcbiAgICAgICAgICAgICAgICAnc2lkZSdcclxuICAgICAgICAgICAgKSxcclxuXHJcbiAgICAgICAgICAgIG5ldyBDYXIoXHJcbiAgICAgICAgICAgICAgICBuZXcgSW1hZ2UoJ2h0dHBzOi8vczIxLnBvc3RpbWcub3JnL252dnRocHY1My9uZ2NhcmZyb250LnBuZycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnY2FyLWZyb250JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICcjY2FyLW1hcC1mcm9udCcpLFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdjYXItbWFwLWZyb250JyxcclxuICAgICAgICAgICAgICAgICAgICBhcmVhczogW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBuZXcgQXJlYSgnd2luZHNoaWVsZCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICd3aW5kc2hpZWxkJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJzY3LDY1LDc2LDM4LDk3LDE2LDE4MiwxMSwyNjYsMTUsMjg2LDM2LDMwMCw2NCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdwb2x5JyksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ldyBBcmVhKCdsZWZ0cmVhcnZpZXcnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnbGVmdHJlYXJ2aWV3JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJzU1LDY5LDUzLDUyLDIyLDUzLDI0LDY4LDQ4LDc2JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3BvbHknKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmV3IEFyZWEoJ3JpZ2h0cmVhcnZpZXcnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAncmlnaHRyZWFydmlldycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICczMTMsNjUsMzE2LDUzLDM0NSw1MCwzNDUsNjUsMzE3LDc0JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3BvbHknKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmV3IEFyZWEoJ2hvb2QnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnaG9vZCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICc2MSw3MiwzNSw5MiwyOCwxMTEsODYsMTI0LDEyMCwxMjgsMjUwLDEyOSwyODgsMTIyLDM0MCwxMTAsMzI4LDgyLDMwMiw3MScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdwb2x5JyksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ldyBBcmVhKCdsZWZ0bGlnaHQnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnbGVmdGxpZ2h0JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJzE1LDEzMiwxNywxMDksMjUsMTE0LDc1LDEyOCw5MiwxNTcnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAncG9seScpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBuZXcgQXJlYSgncmlnaHRsaWdodCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdyaWdodGxpZ2h0JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJzI3OSwxNTMsMjg4LDEyNSwzNDAsMTE0LDM1MCwxMDcsMzU3LDEzMicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdwb2x5JyksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ldyBBcmVhKCdncmlsbCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdncmlsbCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICcxMTUsMTU4LDEwMSwxMzUsMTIyLDEzNSwyMzksMTM0LDI3MiwxMzAsMjU2LDE1NiwxODUsMTY1JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3BvbHknKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmV3IEFyZWEoJ2Zyb250YnVtcGVyJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2Zyb250YnVtcGVyJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJzExLDE0MCwxMTgsMTY4LDI2NCwxNjcsMzU3LDEzNywzNTksMTk4LDM1NCwyMjgsMjg1LDIyOSw5MywyMzAsMTQsMjI4LDksMTkwJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3BvbHknKVxyXG4gICAgICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgICAgIH0sXHJcblxyXG4gICAgICAgICAgICAgICAgJ2Zyb250J1xyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgXVxyXG5cclxuICAgIH1cclxuXHJcbn1cclxuXHJcbl9tb2R1bGUuc2VydmljZSgnY2FyU2VydmljZScsIENhclNlcnZpY2UpXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9jYXIuc2VydmljZS5qc1xuICoqLyIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIENhciB7XHJcblxyXG4gICAgY29uc3RydWN0b3IgKGltYWdlLCBtYXAsIHZpZXcpIHtcclxuXHJcbiAgICAgICAgdGhpcy5pbWFnZSA9IHtcclxuICAgICAgICAgICAgdXJsOiAnJyxcclxuICAgICAgICAgICAgaWQ6ICcnLFxyXG4gICAgICAgICAgICB1c2VtYXA6ICcnXHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMubWFwID0ge1xyXG4gICAgICAgICAgICBuYW1lOiAnJyxcclxuICAgICAgICAgICAgYXJlYXM6IFtcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBhbHQ6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBjb29yZHM6IFtdLFxyXG4gICAgICAgICAgICAgICAgICAgIHNoYXBlOiAnJ1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBdXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmNvbXBvbmVudCA9IHt9XHJcblxyXG4gICAgICAgIHRoaXMuaW1hZ2UgPSBpbWFnZVxyXG4gICAgICAgIHRoaXMubWFwICAgPSBtYXBcclxuICAgICAgICB0aGlzLnZpZXcgID0gdmlld1xyXG5cclxuICAgIH1cclxuICAgIFxyXG59XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9jYXIuanNcbiAqKi8iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBJbWFnZSB7XHJcblxyXG4gICAgY29uc3RydWN0b3IgKHVybCwgaWQsIHVzZW1hcCkge1xyXG5cclxuICAgICAgICB0aGlzLmlkICAgICA9IGlkLCBcclxuICAgICAgICB0aGlzLnVybCAgICA9IHVybCwgXHJcbiAgICAgICAgdGhpcy51c2VtYXAgPSB1c2VtYXBcclxuXHJcbiAgICB9XHJcblxyXG59XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9pbWFnZS5qc1xuICoqLyIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIEFyZWEge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yIChhbHQsIHRpdGxlLCBjb29yZHMsIHNoYXBlKSB7XHJcblxyXG4gICAgICAgIHRoaXMuYWx0ICAgID0gYWx0LFxyXG4gICAgICAgIHRoaXMudGl0bGUgID0gdGl0bGVcclxuICAgICAgICB0aGlzLmNvb3JkcyA9IGNvb3Jkc1xyXG4gICAgICAgIHRoaXMuc2hhcGUgID0gc2hhcGVcclxuXHJcbiAgICB9XHJcbiAgICBcclxufVxyXG5cclxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9hcmVhLmpzXG4gKiovIiwiaW1wb3J0IF9tb2R1bGUgZnJvbSAnLi9tb2R1bGUnXHJcbmltcG9ydCBDb21wb25lbnQgZnJvbSAnLi9jb21wb25lbnQnXHJcbmltcG9ydCBTdWJDb21wb25lbnQgZnJvbSAnLi9zdWJjb21wb25lbnQnXHJcbmltcG9ydCBBY3Rpb24gZnJvbSAnLi9hY3Rpb24nXHJcbmltcG9ydCBEYW1hZ2VUeXBlIGZyb20gJy4vZGFtYWdlVHlwZSdcclxuXHJcbmV4cG9ydCBjbGFzcyBPcmRlckRldGFpbFNlcnZpY2Uge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yICgpIHtcclxuICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICBnZXRDb21wb25lbnRzICgpIHtcclxuXHJcbiAgICAgICAgcmV0dXJuIFtcclxuXHJcbiAgICAgICAgICAgIG5ldyBDb21wb25lbnQoMSwgJ0xGZG9vcicsICdQdWVydGEgRnJvbnRhbCcsIFtdLCB7fSwge30pLFxyXG4gICAgICAgICAgICBuZXcgQ29tcG9uZW50KDIsICdMQmRvb3InLCAnUHVlcnRhIFRyYXNlcmEnLCBbXSwge30sIHt9KSxcclxuICAgICAgICAgICAgbmV3IENvbXBvbmVudCgzLCAnTEZwYW5lbCcsICdQYW5lbCBGcm9udGFsJywgW10sIHt9LCB7fSksXHJcbiAgICAgICAgICAgIG5ldyBDb21wb25lbnQoNCwgJ0xCcGFuZWwnLCAnUGFuZWwgVHJhc2VybycsIFtdLCB7fSwge30pLFxyXG4gICAgICAgICAgICBuZXcgQ29tcG9uZW50KDUsICdMRmJ1bXBlcicsICdCdW1wZXIgRnJvbnRhbCcsIFtdLCB7fSwge30pLFxyXG4gICAgICAgICAgICBuZXcgQ29tcG9uZW50KDYsICdMQmJ1bXBlcicsICdCdW1wZXIgVHJhc2VybycsIFtdLCB7fSwge30pLFxyXG4gICAgICAgICAgICBuZXcgQ29tcG9uZW50KDcsICdMRndoZWVsJywgJ0xsYW50YSBGcm9udGFsJywgW10sIHt9LCB7fSksXHJcbiAgICAgICAgICAgIG5ldyBDb21wb25lbnQoOCwgJ0xCd2hlZWwnLCAnTGxhbnRhIFRyYXNlcmEnLCBbXSwge30sIHt9KSxcclxuICAgICAgICAgICAgbmV3IENvbXBvbmVudCg5LCAnTEZ3aW5kb3cnLCAnVmVudGFuYSBGcm9udGFsJywgW10sIHt9LCB7fSksXHJcbiAgICAgICAgICAgIG5ldyBDb21wb25lbnQoMTAsICdMQndpbmRvdycsICdWZW50YW5hIFRyYXNlcmEnLCBbXSwge30sIHt9KSxcclxuICAgICAgICAgICAgbmV3IENvbXBvbmVudCgxMSwgJ3dpbmRzaGllbGQnLCAnV2luZHNoaWVsZCcsIFtdLCB7fSwge30pLFxyXG4gICAgICAgICAgICBuZXcgQ29tcG9uZW50KDEyLCAnbGVmdHJlYXJ2aWV3JywgJ1JldHJvdmlzb3IgSXpxdWllcmRvJywgW10sIHt9LCB7fSksXHJcbiAgICAgICAgICAgIG5ldyBDb21wb25lbnQoMTMsICdyaWdodHJlYXJ2aWV3JywgJ1JldHJvdmlzb3IgRGVyZWNobycsIFtdLCB7fSwge30pLFxyXG4gICAgICAgICAgICBuZXcgQ29tcG9uZW50KDE0LCAnaG9vZCcsICdDYXBvJywgW10sIHt9LCB7fSksXHJcbiAgICAgICAgICAgIG5ldyBDb21wb25lbnQoMTUsICdsZWZ0bGlnaHQnLCAnTHV6IEl6cXVpZXJkYScsIFtdLCB7fSwge30pLFxyXG4gICAgICAgICAgICBuZXcgQ29tcG9uZW50KDE2LCAncmlnaHRsaWdodCcsICdMdXogRGVyZWNoYScsIFtdLCB7fSwge30pLFxyXG4gICAgICAgICAgICBuZXcgQ29tcG9uZW50KDE3LCAnZ3JpbGwnLCAnUGFycmlsbGEnLCBbXSwge30sIHt9KSxcclxuICAgICAgICAgICAgbmV3IENvbXBvbmVudCgxOCwgJ2Zyb250YnVtcGVyJywgJ0J1bXBlciBGcm9udGFsJywgW10sIHt9LCB7fSksXHJcbiAgICAgICAgXVxyXG5cclxuICAgIH1cclxuXHJcbiAgICBnZXRTdWJDb21wb25lbnRzICgpIHtcclxuXHJcbiAgICAgICAgcmV0dXJuIFtcclxuXHJcbiAgICAgICAgICAgIG5ldyBTdWJDb21wb25lbnQoMSwgMSwgJ01hbmdvJyksXHJcbiAgICAgICAgICAgIG5ldyBTdWJDb21wb25lbnQoMiwgMSwgJ0NoYXBhJyksXHJcbiAgICAgICAgICAgIG5ldyBTdWJDb21wb25lbnQoMSwgMiwgJ01hbmdvJyksXHJcbiAgICAgICAgICAgIG5ldyBTdWJDb21wb25lbnQoMiwgMiwgJ0NoYXBhJyksXHJcbiAgICAgICAgICAgIG5ldyBTdWJDb21wb25lbnQoMywgNSwgJ0x1eicpLFxyXG4gICAgICAgICAgICBuZXcgU3ViQ29tcG9uZW50KDQsIDUsICdHdWFyZGEgUG9sdm8nKSxcclxuICAgICAgICAgICAgbmV3IFN1YkNvbXBvbmVudCgzLCA2LCAnTHV6JyksXHJcbiAgICAgICAgICAgIG5ldyBTdWJDb21wb25lbnQoMywgNiwgJ0x1eicpLFxyXG4gICAgICAgICAgICBuZXcgU3ViQ29tcG9uZW50KDUsIDcsICdBcm8nKSxcclxuICAgICAgICAgICAgbmV3IFN1YkNvbXBvbmVudCg1LCA4LCAnQXJvJyksXHJcbiAgICAgICAgICAgIG5ldyBTdWJDb21wb25lbnQoNiwgNywgJ1BsYXRvJyksXHJcbiAgICAgICAgICAgIG5ldyBTdWJDb21wb25lbnQoNiwgOCwgJ1BsYXRvJyksXHJcbiAgICAgICAgICAgIG5ldyBTdWJDb21wb25lbnQoNywgNywgJ0NodWNob3MnKSxcclxuICAgICAgICAgICAgbmV3IFN1YkNvbXBvbmVudCg3LCA4LCAnQ2h1Y2hvcycpLFxyXG4gICAgICAgICAgICBuZXcgU3ViQ29tcG9uZW50KDgsIDE1LCAnUGlkZSB2aWFzJyksXHJcbiAgICAgICAgICAgIG5ldyBTdWJDb21wb25lbnQoOSwgMTUsICdMdXonKSxcclxuICAgICAgICAgICAgbmV3IFN1YkNvbXBvbmVudCg4LCAxNiwgJ1BpZGUgdmlhcycpLFxyXG4gICAgICAgICAgICBuZXcgU3ViQ29tcG9uZW50KDksIDE2LCAnTHV6JyksXHJcbiAgICAgICAgICAgIG5ldyBTdWJDb21wb25lbnQoMTAsIDE3LCAnSW5zaWduYScpLFxyXG4gICAgICAgICAgICBuZXcgU3ViQ29tcG9uZW50KDExLCAxOCwgJ1BhcnJpbGxhIEl6cXVpZXJkYScpLFxyXG4gICAgICAgICAgICBuZXcgU3ViQ29tcG9uZW50KDEyLCAxOCwgJ1BhcnJpbGxhIERlcmVjaGEnKSxcclxuICAgICAgICAgICAgbmV3IFN1YkNvbXBvbmVudCgxMywgMTgsICdQYXJyaWxsYSBDZW50cmFsJyksXHJcbiAgICAgICAgXVxyXG5cclxuICAgIH1cclxuXHJcbiAgICBnZXREYW1hZ2VUeXBlcyAoKSB7XHJcblxyXG4gICAgICAgIHJldHVybiBbXHJcblxyXG4gICAgICAgICAgICBuZXcgRGFtYWdlVHlwZSgxLCAnRGHDsWFkbycpLFxyXG4gICAgICAgICAgICBuZXcgRGFtYWdlVHlwZSgyLCAnRmFsdGEnKSxcclxuICAgICAgICAgICAgbmV3IERhbWFnZVR5cGUoMywgJ1JheWFkbycpLFxyXG4gICAgICAgICAgICBuZXcgRGFtYWdlVHlwZSg0LCAnT3RybycpXHJcblxyXG4gICAgICAgIF1cclxuXHJcbiAgICB9XHJcblxyXG4gICAgZ2V0QWN0aW9ucyAoKSB7XHJcblxyXG4gICAgICAgIHJldHVybiBbXHJcblxyXG4gICAgICAgICAgICBuZXcgQWN0aW9uKDEsICdOaW5ndW5hJyksXHJcbiAgICAgICAgICAgIG5ldyBBY3Rpb24oMiwgJ1JldmlzYXInKSxcclxuICAgICAgICAgICAgbmV3IEFjdGlvbigzLCAnUmVwYXJhcicpLFxyXG4gICAgICAgICAgICBuZXcgQWN0aW9uKDQsICdQaW50YXInKSxcclxuICAgICAgICAgICAgbmV3IEFjdGlvbig1LCAnQ2FtYmlhcicpLFxyXG4gICAgICAgICAgICBuZXcgQWN0aW9uKDYsICdTZXJ2aWNpbycpXHJcbiAgICAgICAgXVxyXG5cclxuICAgIH1cclxuXHJcbn1cclxuXHJcbl9tb2R1bGUuc2VydmljZSgnb3JkZXJEZXRhaWxTZXJ2aWNlJywgT3JkZXJEZXRhaWxTZXJ2aWNlKVxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vb3JkZXIuZGV0YWlsLnNlcnZpY2UuanNcbiAqKi8iLCJcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29tcG9uZW50IHtcclxuXHJcbiAgICBjb25zdHJ1Y3RvciAoaWQsIGFyZWFJZCwgbmFtZSwgc3ViQ29tcG9uZW50cywgZGFtYWdlVHlwZSwgYWN0aW9uKSB7XHJcblxyXG4gICAgICAgIHRoaXMuaWQgICAgICAgICAgICAgPSBpZFxyXG4gICAgICAgIHRoaXMubmFtZSAgICAgICAgICAgPSBuYW1lXHJcbiAgICAgICAgdGhpcy5hcmVhSWQgICAgICAgICA9IGFyZWFJZFxyXG4gICAgICAgIHRoaXMuc3ViQ29tcG9uZW50cyAgPSBzdWJDb21wb25lbnRzXHJcbiAgICAgICAgdGhpcy5kYW1hZ2VUeXBlICAgICA9IGRhbWFnZVR5cGVcclxuICAgICAgICB0aGlzLmFjdGlvbiAgICAgICAgID0gYWN0aW9uXHJcblxyXG4gICAgfVxyXG5cclxufVxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vY29tcG9uZW50LmpzXG4gKiovIiwiXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFN1YkNvbXBvbmVudCB7XHJcblxyXG4gICAgY29uc3RydWN0b3IgKGlkLCBjb21wb25lbnRJZCwgbmFtZSkge1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMuaWQgICAgICAgICAgPSBpZFxyXG4gICAgICAgIHRoaXMuY29tcG9uZW50SWQgPSBjb21wb25lbnRJZFxyXG4gICAgICAgIHRoaXMubmFtZSAgICAgICAgPSBuYW1lXHJcblxyXG4gICAgfVxyXG5cclxufVxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3ViY29tcG9uZW50LmpzXG4gKiovIiwiXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFjdGlvbiB7XHJcblxyXG4gICAgY29uc3RydWN0b3IgKGlkLCBuYW1lKSB7XHJcbiAgICAgICAgdGhpcy5pZCAgID0gaWQsXHJcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZVxyXG4gICAgfVxyXG5cclxufVxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vYWN0aW9uLmpzXG4gKiovIiwiXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERhbWFnZVR5cGUge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yIChpZCwgbmFtZSkge1xyXG4gICAgICAgIHRoaXMuaWQgICA9IGlkLFxyXG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWVcclxuICAgIH1cclxuXHJcbn1cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL2RhbWFnZVR5cGUuanNcbiAqKi8iLCJpbXBvcnQgX21vZHVsZSBmcm9tICcuL21vZHVsZSdcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE9wdGlvbkZhY3Rvcnkge1xyXG4gICAgXHJcbiAgICBjb25zdHJ1Y3RvciAobW9kZWwpIHtcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLmlkICAgICAgID0gbW9kZWwuaWRcclxuICAgICAgICB0aGlzLnNlbGVjdGVkID0gZmFsc2VcclxuICAgICAgICB0aGlzLnZpZXcgICAgID0gbW9kZWwudmlld1xyXG4gICAgICAgIHRoaXMuaW1nICAgICAgPSBtb2RlbC5pbWdcclxuICAgICAgICB0aGlzLmJnY29sb3IgID0gbW9kZWwuYmdjb2xvclxyXG5cclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgZmFjdG9yeSAoKSB7XHJcbiAgICAgICAgcmV0dXJuIChtb2RlbCkgPT4gbmV3IE9wdGlvbkZhY3RvcnkobW9kZWwpXHJcbiAgICB9XHJcbn1cclxuXHJcbl9tb2R1bGUuZmFjdG9yeSgnb3B0aW9uRmFjdG9yeScsIE9wdGlvbkZhY3RvcnkuZmFjdG9yeSlcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL29wdGlvbi5mYWN0b3J5LmpzXG4gKiovIiwiaW1wb3J0IF9tb2R1bGUgZnJvbSAnLi9tb2R1bGUnXHJcblxyXG5sZXQgX2NhclNlcnZpY2UsIF9vcmRlckRldGFpbFNlcnZpY2VcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbnRlbnRGYWN0b3J5IHtcclxuICAgIFxyXG4gICAgY29uc3RydWN0b3IgKCkge1xyXG4gICAgICAgIHRoaXMudmlldyA9ICdmcm9udCdcclxuICAgIH1cclxuXHJcbiAgICBvblZpZXdDaGFuZ2UgKG9wdGlvbikge1xyXG4gICAgICAgIHRoaXMudmlldyA9IG9wdGlvbi52aWV3XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0Q2FyQnlWaWV3KHRoaXMudmlldylcclxuICAgIH1cclxuXHJcbiAgICBnZXRDYXJCeVZpZXcgKHZpZXcpIHtcclxuXHJcbiAgICAgICAgcmV0dXJuIF9jYXJTZXJ2aWNlXHJcbiAgICAgICAgICAgICAgICAuZ2V0QWxsKClcclxuICAgICAgICAgICAgICAgIC5maWx0ZXIoKGNhcikgPT4geyBcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gY2FyLnZpZXcgPT09IHZpZXcgXHJcbiAgICAgICAgICAgICAgICB9KVswXVxyXG5cclxuICAgIH1cclxuXHJcbiAgICBnZXRDb21wb25lbnRCeUFyZWEgKGFyZWEpIHtcclxuXHJcbiAgICAgICAgbGV0IGNvbXBvbmVudCA9XHJcbiAgICAgICAgICAgIF9vcmRlckRldGFpbFNlcnZpY2VcclxuICAgICAgICAgICAgICAgIC5nZXRDb21wb25lbnRzKClcclxuICAgICAgICAgICAgICAgICAgICAuZmlsdGVyKChjb21wb25lbnQpID0+IHsgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBjb21wb25lbnQuYXJlYUlkID09PSBhcmVhLnRpdGxlIFxyXG4gICAgICAgICAgICAgICAgICAgIH0pWzBdXHJcblxyXG4gICAgICAgIGNvbXBvbmVudC5zdWJDb21wb25lbnRzID0gXHJcbiAgICAgICAgICAgIF9vcmRlckRldGFpbFNlcnZpY2VcclxuICAgICAgICAgICAgICAgIC5nZXRTdWJDb21wb25lbnRzKClcclxuICAgICAgICAgICAgICAgICAgICAuZmlsdGVyKChzdWJDb21wb25lbnQpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHN1YkNvbXBvbmVudC5jb21wb25lbnRJZCA9PT0gY29tcG9uZW50LmlkXHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuXHJcbiAgICAgICAgcmV0dXJuIGNvbXBvbmVudFxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgZ2V0RGFtYWdlVHlwZXMgKCkge1xyXG4gICAgICAgIHJldHVybiBfb3JkZXJEZXRhaWxTZXJ2aWNlXHJcbiAgICAgICAgICAgICAgICAgICAgLmdldERhbWFnZVR5cGVzKClcclxuICAgIH1cclxuXHJcbiAgICBnZXRBY3Rpb25zICgpIHtcclxuICAgICAgICByZXR1cm4gX29yZGVyRGV0YWlsU2VydmljZVxyXG4gICAgICAgICAgICAgICAgICAgIC5nZXRBY3Rpb25zKClcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgZmFjdG9yeSAoY2FyU2VydmljZSwgb3JkZXJEZXRhaWxTZXJ2aWNlKSB7XHJcblxyXG4gICAgICAgIF9jYXJTZXJ2aWNlICAgICAgICAgPSBjYXJTZXJ2aWNlXHJcbiAgICAgICAgX29yZGVyRGV0YWlsU2VydmljZSA9IG9yZGVyRGV0YWlsU2VydmljZVxyXG5cclxuICAgICAgICByZXR1cm4gKCkgPT4gbmV3IENvbnRlbnRGYWN0b3J5KClcclxuXHJcbiAgICB9XHJcbn1cclxuXHJcbl9tb2R1bGUuZmFjdG9yeSgnY29udGVudEZhY3RvcnknLCBDb250ZW50RmFjdG9yeS5mYWN0b3J5KVxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vY29udGVudC5mYWN0b3J5LmpzXG4gKiovIiwiaW1wb3J0IF9tb2R1bGUgZnJvbSAnLi9tb2R1bGUnXHJcbmltcG9ydCBDYXIgZnJvbSAnLi9jYXInXHJcblxyXG5sZXQgX2NhclxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2FyRmFjdG9yeSB7XHJcblxyXG4gICAgY29uc3RydWN0b3IgKGNhcikge1xyXG4gICAgICAgIF9jYXIgICAgID0gY2FyXHJcbiAgICAgICAgdGhpcy5jYXIgPSBfY2FyXHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGZhY3RvcnkgKGNhcikge1xyXG4gICAgICAgIHJldHVybiAoY2FyKSA9PiBuZXcgQ2FyRmFjdG9yeShjYXIpXHJcbiAgICB9XHJcbn1cclxuXHJcbl9tb2R1bGUuZmFjdG9yeSgnY2FyRmFjdG9yeScsIENhckZhY3RvcnkuZmFjdG9yeSlcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL2Nhci5mYWN0b3J5LmpzXG4gKiovIl0sInNvdXJjZVJvb3QiOiIifQ==
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
	
	__webpack_require__(31);
	
	__webpack_require__(32);
	
	__webpack_require__(33);
	
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

	module.exports = "<!--<md-toolbar>\n\n</md-toolbar>-->"

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
	
	var _$rootScope = void 0,
	    _orderDetailService = void 0,
	    carMap = void 0;
	
	var ContentCtrl = exports.ContentCtrl = function () {
	    function ContentCtrl(contentFactory, orderDetailService, $rootScope) {
	        var _this = this;
	
	        _classCallCheck(this, ContentCtrl);
	
	        _orderDetailService = orderDetailService;
	        _$rootScope = $rootScope;
	        this.loading = true;
	        this.contentFactory = contentFactory();
	        this.map = new Object();
	        this.car = this.contentFactory.onViewChange({ view: 'side' });
	        this.damageTypes = _orderDetailService.getDamageTypes();
	        this.actions = _orderDetailService.getActions();
	        this.getAsyncFilters();
	
	        _$rootScope.$on('onViewChange:Event', function (event, option) {
	            _this.car = _this.contentFactory.onViewChange(option);
	            $('img[usemap]').rwdImageMaps();
	        });
	    }
	
	    _createClass(ContentCtrl, [{
	        key: 'areaClick',
	        value: function areaClick(area) {
	
	            this.car.component = _orderDetailService.getComponentByArea(area);
	
	            if (this.contentFactory.map) {
	                carMap = this.contentFactory.map.get(this.car.component.id);
	            }
	
	            if (carMap) {
	                this.car.component = carMap.component;
	            }
	
	            this.contentFactory.memoizeData(this.car);
	        }
	    }, {
	        key: 'selectSubComponent',
	        value: function selectSubComponent(subComponent) {
	            this.subComponent = subComponent;
	        }
	    }, {
	        key: 'getAsyncFilters',
	        value: function getAsyncFilters() {
	            var _this2 = this;
	
	            _orderDetailService.getAsyncFilters().then(function (response) {
	
	                _this2.categories = response[0].data;
	                _this2.brands = response[1].data;
	                _this2.loading = false;
	                _$rootScope.$apply();
	            }, function (error) {
	                alert('No se puedieron obtener los filtros (categoria, marca)' + JSON.stringify(error));
	            });
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
	                                                // $('#car-side').mapster({
	                                                //     staticState: true,
	                                                //     fillOpacity: 0.4,
	                                                //     fillColor: 'fadbb84',
	                                                //     highlight: true,
	                                                //     mapKey: 'name',
	                                                //     showToolTip: true,
	                                                //     scaleMap: false,
	                                                //     toolTipClose: ["tooltip-click","area-mouseout"],
	                                                //     areas: [{
	                                                //         key: 'LFdoor',
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

	module.exports = "<md-content class=\"md-padding\" layout-xs=\"column\" layout=\"row\">\r\n  <div flex-xs flex-gt-xs=\"100\" layout=\"column\">\r\n    <md-input-container>\r\n          <label>Sub-Componente</label>\r\n          <md-select ng-model=\"ctrl.car.component.subComponent\"\r\n                     ng-change=\"ctrl.saveData(ctrl.car)\">\r\n            <md-option ng-repeat=\"subComponent in ctrl.car.component.subComponents\" \r\n                       ng-value=\"subComponent\">\r\n              {{subComponent.name}}\r\n            </md-option>\r\n          </md-select>\r\n        </md-input-container>\r\n        <md-input-container>\r\n          <label>Tipo Lista</label>\r\n          <md-select ng-model=\"ctrl.car.component.damageType\"\r\n                     ng-change=\"ctrl.saveData(ctrl.car)\">\r\n            <md-option ng-repeat=\"damageType in ctrl.damageTypes\" \r\n                       ng-value=\"damageType\">\r\n              {{damageType.name}}\r\n            </md-option>\r\n          </md-select>\r\n    </md-input-container>\r\n  </div>\r\n    <div flex-xs flex-gt-xs=\"100\" layout=\"column\">\r\n      <md-input-container>\r\n          <label>Accion</label>\r\n          <md-select ng-model=\"ctrl.car.component.action\"\r\n                     ng-change=\"ctrl.saveData(ctrl.car)\">\r\n            <md-option ng-repeat=\"action in ctrl.actions\" \r\n                       ng-value=\"action\">\r\n              {{action.name}}\r\n            </md-option>\r\n          </md-select>\r\n        </md-input-container>\r\n        <md-input-container>\r\n          <label>Categorias</label>\r\n          <md-select ng-model=\"ctrl.car.component.category\"\r\n                     ng-change=\"ctrl.saveData(ctrl.car);\">\r\n            <md-option ng-repeat=\"category in ctrl.categories\" \r\n                       ng-value=\"category\">\r\n              {{category.Nombre}}\r\n            </md-option>\r\n          </md-select>\r\n          <md-progress-linear md-mode=\"indeterminate\" ng-hide=\"!ctrl.loading\">\r\n          </md-progress-linear>\r\n      </md-input-container>\r\n    </div>\r\n    <div flex-xs flex-gt-xs=\"100\" layout=\"column\">\r\n        <md-input-container>\r\n          <label>Marca</label>\r\n          <md-select ng-model=\"ctrl.car.component.brand\"\r\n                     ng-change=\"ctrl.saveData(ctrl.car);\">\r\n            <md-option ng-repeat=\"brand in ctrl.brands\" \r\n                       ng-value=\"brand\">\r\n              {{brand.Nombre}}\r\n            </md-option>\r\n          </md-select>\r\n          <md-progress-linear md-mode=\"indeterminate\" ng-hide=\"!ctrl.loading\">\r\n          </md-progress-linear>\r\n      </md-input-container>\r\n    </div>\r\n</md-content>\r\n\r\n<div class=\"container md-whiteframe-0dp\">\r\n    <md-content class=\"md-padding md-whiteframe-0dp\" layout-xs=\"column\" layout=\"row\">\r\n        <md-card class=\"md-whiteframe-0dp\">\r\n            <img ng-src=\"{{ctrl.car.image.url}}\" class=\"md-ctrl.card-image\" id=\"{{ctrl.car.image.id}}\" usemap=\"{{ctrl.car.image.usemap}}\">\r\n            <map name=\"{{ctrl.car.map.name}}\">\r\n                <area ng-repeat=\"area in ctrl.car.map.areas\"\r\n                      ng-click=\"ctrl.areaClick(area)\"\r\n                      alt=\"{{area.alt}}\" \r\n                      name=\"{{area.title}}\"\r\n                      title=\"{{area.title}}\"  \r\n                      href=\"#\" \r\n                      coords=\"{{area.coords}}\" \r\n                      shape=\"{{area.shape}}\">\r\n            </map>\r\n        </md-ctrl.card>\r\n    </md-content>\r\n</div>"

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
	exports.default = undefined;
	
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
	
	var _desc, _value, _class;
	
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
	
	var _memoizedDecorator = __webpack_require__(30);
	
	var _memoizedDecorator2 = _interopRequireDefault(_memoizedDecorator);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
	    var desc = {};
	    Object['ke' + 'ys'](descriptor).forEach(function (key) {
	        desc[key] = descriptor[key];
	    });
	    desc.enumerable = !!desc.enumerable;
	    desc.configurable = !!desc.configurable;
	
	    if ('value' in desc || desc.initializer) {
	        desc.writable = true;
	    }
	
	    desc = decorators.slice().reverse().reduce(function (desc, decorator) {
	        return decorator(target, property, desc) || desc;
	    }, desc);
	
	    if (context && desc.initializer !== void 0) {
	        desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
	        desc.initializer = undefined;
	    }
	
	    if (desc.initializer === void 0) {
	        Object['define' + 'Property'](target, property, desc);
	        desc = null;
	    }
	
	    return desc;
	}
	
	var _$http = void 0;
	
	var OrderDetailService = exports.OrderDetailService = (_class = function () {
	    function OrderDetailService($http) {
	        _classCallCheck(this, OrderDetailService);
	
	        _$http = $http;
	        this.baseUrl = 'http://gdsgt.net/jonasa';
	    }
	
	    _createClass(OrderDetailService, [{
	        key: 'getComponents',
	        value: function getComponents() {
	
	            return [new _component2.default(1, 'LFdoor', 'Puerta Frontal', [], {}, {}), new _component2.default(2, 'LBdoor', 'Puerta Trasera', [], {}, {}), new _component2.default(3, 'LFpanel', 'Panel Frontal', [], {}, {}), new _component2.default(4, 'LBpanel', 'Panel Trasero', [], {}, {}), new _component2.default(5, 'LFbumper', 'Bumper Frontal', [], {}, {}), new _component2.default(6, 'LBbumper', 'Bumper Trasero', [], {}, {}), new _component2.default(7, 'LFwheel', 'Llanta Frontal', [], {}, {}), new _component2.default(8, 'LBwheel', 'Llanta Trasera', [], {}, {}), new _component2.default(9, 'LFwindow', 'Ventana Frontal', [], {}, {}), new _component2.default(10, 'LBwindow', 'Ventana Trasera', [], {}, {}), new _component2.default(11, 'windshield', 'Windshield', [], {}, {}), new _component2.default(12, 'leftrearview', 'Retrovisor Izquierdo', [], {}, {}), new _component2.default(13, 'rightrearview', 'Retrovisor Derecho', [], {}, {}), new _component2.default(14, 'hood', 'Capo', [], {}, {}), new _component2.default(15, 'leftlight', 'Luz Izquierda', [], {}, {}), new _component2.default(16, 'rightlight', 'Luz Derecha', [], {}, {}), new _component2.default(17, 'grill', 'Parrilla', [], {}, {}), new _component2.default(18, 'frontbumper', 'Bumper Frontal', [], {}, {})];
	        }
	    }, {
	        key: 'getComponentByArea',
	        value: function getComponentByArea(area) {
	
	            var component = this.getComponents().filter(function (component) {
	                return component.areaId === area.title;
	            })[0];
	
	            component.subComponents = this.getSubComponents().filter(function (subComponent) {
	                return subComponent.componentId === component.id;
	            });
	
	            return component;
	        }
	    }, {
	        key: 'getSubComponents',
	        value: function getSubComponents() {
	
	            return [new _subcomponent2.default(1, 1, 'Mango'), new _subcomponent2.default(2, 1, 'Chapa'), new _subcomponent2.default(1, 2, 'Mango'), new _subcomponent2.default(2, 2, 'Chapa'), new _subcomponent2.default(3, 5, 'Luz'), new _subcomponent2.default(4, 5, 'Guarda Polvo'), new _subcomponent2.default(3, 6, 'Luz'), new _subcomponent2.default(5, 7, 'Aro'), new _subcomponent2.default(5, 8, 'Aro'), new _subcomponent2.default(6, 7, 'Plato'), new _subcomponent2.default(6, 8, 'Plato'), new _subcomponent2.default(7, 7, 'Chuchos'), new _subcomponent2.default(7, 8, 'Chuchos'), new _subcomponent2.default(8, 15, 'Pide vias'), new _subcomponent2.default(9, 15, 'Luz'), new _subcomponent2.default(8, 16, 'Pide vias'), new _subcomponent2.default(9, 16, 'Luz'), new _subcomponent2.default(10, 17, 'Insigna'), new _subcomponent2.default(11, 18, 'Parrilla Izquierda'), new _subcomponent2.default(12, 18, 'Parrilla Derecha'), new _subcomponent2.default(13, 18, 'Parrilla Central')];
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
	    }, {
	        key: 'getCategories',
	        value: function getCategories() {
	            var url = this.baseUrl + '/categoria/apiLista';
	            return _$http.get(url);
	        }
	    }, {
	        key: 'getBrands',
	        value: function getBrands() {
	            var url = this.baseUrl + '/marca/apiLista';
	            return _$http.get(url);
	        }
	    }, {
	        key: 'getAsyncFilters',
	        value: function getAsyncFilters() {
	            return Promise.all([this.getCategories(), this.getBrands()]);
	        }
	    }, {
	        key: 'getModelByBrand',
	        value: function getModelByBrand(brandId) {
	            var url = this.baseUrl + '/modelo/apiLista?' + 'modelo=' + brandId;
	            return _$http.get(url);
	        }
	    }, {
	        key: 'getReplacements',
	        value: function getReplacements(categoryId, brandId, modelId) {
	            var url = this.baseUrl + '/stock_producto/apiRepuestoPrecio?' + '\n            ' + 'categoria=' + categoryId + 'marca=' + brandId + 'modelo=' + modelId;
	            return _$http.get(url);
	        }
	    }]);
	
	    return OrderDetailService;
	}(), (_applyDecoratedDescriptor(_class.prototype, 'getCategories', [_memoizedDecorator2.default], Object.getOwnPropertyDescriptor(_class.prototype, 'getCategories'), _class.prototype)), _class);
	
	
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
/***/ function(module, exports) {

	module.exports = function(target, key, descriptor) {
	  var cache = {};
	  var fn    = descriptor.value;
	  var char0 = String.fromCharCode(0);
	
	  descriptor.value = function(){
	    var keyAry = [];
	
	    for (let i=0, l=arguments.length; i<l; i++) {
	      let arg  = arguments[i];
	      let type = typeof arg;
	
	      keyAry.push(
	        (arg  === null)       ? char0 + 'null'      :
	        (arg  === void 0)     ? char0 + 'undefined' :
	        (type === 'function') ? char0 + arg         :
	        (type === 'object')   ? char0 + JSON.stringify(arg) :
	        arg
	      );
	    }
	
	    var key = keyAry.join(String.fromCharCode(0));
	
	    return cache.hasOwnProperty(key) ? cache[key] : (cache[key] = fn.apply(this, arguments));
	  };
	
	  return descriptor;
	};


/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = undefined;
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _module2 = __webpack_require__(3);
	
	var _module3 = _interopRequireDefault(_module2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var OptionFactory = function () {
	    function OptionFactory(model) {
	        _classCallCheck(this, OptionFactory);
	
	        this.id = model.id;
	        this.selected = model.view === 'side';
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
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = undefined;
	
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
	        this.map = new Map();
	    }
	
	    _createClass(ContentFactory, [{
	        key: 'onViewChange',
	        value: function onViewChange(option) {
	            this.view = option.view;
	            return this.filterCarByView(this.view);
	        }
	    }, {
	        key: 'filterCarByView',
	        value: function filterCarByView(view) {
	
	            return _carService.getAll().filter(function (car) {
	                return car.view === view;
	            })[0];
	        }
	    }, {
	        key: 'memoizeData',
	        value: function memoizeData(car) {
	            this.map.set(car.component.id, new Object({
	                component: car.component }));
	            console.log(this.map.get(car.component.id));
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
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = undefined;
	
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vLy4vY29udHJvbGxlcnMvc2lkZS5jb250cm9sbGVyLmpzIiwid2VicGFjazovLy8uL2RpcmVjdGl2ZXMvc2lkZS5kaXJlY3RpdmUuanMiLCJ3ZWJwYWNrOi8vLy4vZGlyZWN0aXZlcy9zaWRlLnRlbXBsYXRlLmh0bWwiLCJ3ZWJwYWNrOi8vLy4vY29udHJvbGxlcnMvaGVhZGVyLmNvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vZGlyZWN0aXZlcy9oZWFkZXIuZGlyZWN0aXZlLmpzIiwid2VicGFjazovLy8uL2RpcmVjdGl2ZXMvaGVhZGVyLnRlbXBsYXRlLmh0bWwiLCJ3ZWJwYWNrOi8vLy4vYXBwLnNjc3M/MTAxMyIsIndlYnBhY2s6Ly8vLi9hcHAuc2NzcyIsIndlYnBhY2s6Ly8vLi4vfi9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qcyIsIndlYnBhY2s6Ly8vLi4vfi9zdHlsZS1sb2FkZXIvYWRkU3R5bGVzLmpzIiwid2VicGFjazovLy8uL2NvbnRyb2xsZXJzL2NvbnRlbnQuY29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly8vLi9kaXJlY3RpdmVzL2NvbnRlbnQuZGlyZWN0aXZlLmpzIiwid2VicGFjazovLy8uL2RpcmVjdGl2ZXMvY29udGVudC50ZW1wbGF0ZS5odG1sIiwid2VicGFjazovLy8uL3NlcnZpY2VzL3NpZGUuc2VydmljZS5qcyIsIndlYnBhY2s6Ly8vLi9zZXJ2aWNlcy9jYXIuc2VydmljZS5qcyIsIndlYnBhY2s6Ly8vLi9tb2RlbC9jYXIuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kZWwvaW1hZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kZWwvYXJlYS5qcyIsIndlYnBhY2s6Ly8vLi9zZXJ2aWNlcy9vcmRlci5kZXRhaWwuc2VydmljZS5qcyIsIndlYnBhY2s6Ly8vLi9tb2RlbC9jb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kZWwvc3ViY29tcG9uZW50LmpzIiwid2VicGFjazovLy8uL21vZGVsL2FjdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9tb2RlbC9kYW1hZ2VUeXBlLmpzIiwid2VicGFjazovLy8uLi9+L21lbW9pemVkLWRlY29yYXRvci9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9mYWN0b3JpZXMvb3B0aW9uLmZhY3RvcnkuanMiLCJ3ZWJwYWNrOi8vLy4vZmFjdG9yaWVzL2NvbnRlbnQuZmFjdG9yeS5qcyIsIndlYnBhY2s6Ly8vLi9mYWN0b3JpZXMvY2FyLmZhY3RvcnkuanMiXSwibmFtZXMiOlsiYm9vdHN0cmFwIiwiZG9jdW1lbnQiLCJfbW9kdWxlIiwiYW5ndWxhciIsIm1vZHVsZSIsIl8kcm9vdFNjb3BlIiwiU2lkZUN0cmwiLCJzaWRlTmF2U2VydmljZSIsIm9wdGlvbkZhY3RvcnkiLCJjb250ZW50RmFjdG9yeSIsIiRyb290U2NvcGUiLCJvcHRpb25zIiwiZ2V0T3B0aW9ucyIsIm1hcCIsIm9wdGlvbiIsInJlZHVjZSIsImJvb2xlYW4iLCJpdGVtIiwic2VsZWN0ZWQiLCIkYnJvYWRjYXN0IiwiY29udHJvbGxlciIsImRpcmVjdGl2ZSIsInJlc3RyaWN0Iiwic2NvcGUiLCJjb250cm9sbGVyQXMiLCJiaW5kVG9Db250cm9sbGVyIiwidGVtcGxhdGUiLCJIZWFkZXJDdHJsIiwiZ3JlZXRpbmciLCJfb3JkZXJEZXRhaWxTZXJ2aWNlIiwiY2FyTWFwIiwiQ29udGVudEN0cmwiLCJvcmRlckRldGFpbFNlcnZpY2UiLCJsb2FkaW5nIiwiT2JqZWN0IiwiY2FyIiwib25WaWV3Q2hhbmdlIiwidmlldyIsImRhbWFnZVR5cGVzIiwiZ2V0RGFtYWdlVHlwZXMiLCJhY3Rpb25zIiwiZ2V0QWN0aW9ucyIsImdldEFzeW5jRmlsdGVycyIsIiRvbiIsImV2ZW50IiwiJCIsInJ3ZEltYWdlTWFwcyIsImFyZWEiLCJjb21wb25lbnQiLCJnZXRDb21wb25lbnRCeUFyZWEiLCJnZXQiLCJpZCIsIm1lbW9pemVEYXRhIiwic3ViQ29tcG9uZW50IiwidGhlbiIsImNhdGVnb3JpZXMiLCJyZXNwb25zZSIsImRhdGEiLCJicmFuZHMiLCIkYXBwbHkiLCJhbGVydCIsIkpTT04iLCJzdHJpbmdpZnkiLCJlcnJvciIsIiR0aW1lb3V0IiwibGluayIsImVsIiwiYXR0cnMiLCJjb25zb2xlIiwibG9nIiwiU2lkZU5hdlNlcnZpY2UiLCJpbWciLCJiZ2NvbG9yIiwic2VydmljZSIsIkNhclNlcnZpY2UiLCJuYW1lIiwiYXJlYXMiLCJDYXIiLCJpbWFnZSIsInVybCIsInVzZW1hcCIsImFsdCIsInRpdGxlIiwiY29vcmRzIiwic2hhcGUiLCJJbWFnZSIsIkFyZWEiLCJfJGh0dHAiLCJPcmRlckRldGFpbFNlcnZpY2UiLCIkaHR0cCIsImJhc2VVcmwiLCJnZXRDb21wb25lbnRzIiwiZmlsdGVyIiwiYXJlYUlkIiwic3ViQ29tcG9uZW50cyIsImdldFN1YkNvbXBvbmVudHMiLCJjb21wb25lbnRJZCIsIlByb21pc2UiLCJhbGwiLCJnZXRDYXRlZ29yaWVzIiwiZ2V0QnJhbmRzIiwiYnJhbmRJZCIsImNhdGVnb3J5SWQiLCJtb2RlbElkIiwiQ29tcG9uZW50IiwiZGFtYWdlVHlwZSIsImFjdGlvbiIsIlN1YkNvbXBvbmVudCIsIkFjdGlvbiIsIkRhbWFnZVR5cGUiLCJPcHRpb25GYWN0b3J5IiwibW9kZWwiLCJmYWN0b3J5IiwiX2NhclNlcnZpY2UiLCJDb250ZW50RmFjdG9yeSIsIk1hcCIsImZpbHRlckNhckJ5VmlldyIsImdldEFsbCIsInNldCIsImNhclNlcnZpY2UiLCJfY2FyIiwiQ2FyRmFjdG9yeSJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUVBOzs7O0FBQ0E7O0FBRUE7Ozs7QUFDQTs7QUFDQTs7QUFFQTs7OztBQUNBOztBQUdBOztBQUNBOztBQUNBOztBQUdBOztBQUNBOztBQUNBOzs7O0FBUkE7QUFVQSxtQkFBUUEsU0FBUixDQUFrQkMsUUFBbEIsRUFBNEIsQ0FBQyxPQUFELENBQTVCOztBQUxBLFk7Ozs7Ozs7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QUFKLENBQVc7QUFDckNjLDRCQUFXYixJQUFJYSxTQURzQixFQUFYLENBQS9CO0FBR0FvQixxQkFBUUMsR0FBUixDQUFZLEtBQUt4RCxHQUFMLENBQVNxQyxHQUFULENBQWFmLElBQUlhLFNBQUosQ0FBY0csRUFBM0IsQ0FBWjtBQUNIOzs7aUNBRWVvRSxVLEVBQVl2RixrQixFQUFvQjs7QUFFNUNpRiwyQkFBc0JNLFVBQXRCO0FBQ0ExRixtQ0FBc0JHLGtCQUF0Qjs7QUFFQSxvQkFBTztBQUFBLHdCQUFNLElBQUlrRixjQUFKLEVBQU47QUFBQSxjQUFQO0FBRUg7Ozs7OzttQkFwQ2dCQSxjOzs7QUF1Q3JCLGtCQUFRRixPQUFSLENBQWdCLGdCQUFoQixFQUFrQ0UsZUFBZUYsT0FBakQsRTs7Ozs7Ozs7Ozs7Ozs7O0FDM0NBOzs7O0FBQ0E7Ozs7Ozs7O0FBRUEsS0FBSVEsYUFBSjs7S0FFcUJDLFU7QUFFakIseUJBQWF0RixHQUFiLEVBQWtCO0FBQUE7O0FBQ2RxRixnQkFBV3JGLEdBQVg7QUFDQSxjQUFLQSxHQUFMLEdBQVdxRixJQUFYO0FBQ0g7Ozs7aUNBRWVyRixHLEVBQUs7QUFDakIsb0JBQU8sVUFBQ0EsR0FBRDtBQUFBLHdCQUFTLElBQUlzRixVQUFKLENBQWV0RixHQUFmLENBQVQ7QUFBQSxjQUFQO0FBQ0g7Ozs7OzttQkFUZ0JzRixVOzs7QUFZckIsa0JBQVFULE9BQVIsQ0FBZ0IsWUFBaEIsRUFBOEJTLFdBQVdULE9BQXpDLEUiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGFuZ3VsYXIgZnJvbSAnYW5ndWxhcidcclxuaW1wb3J0IF9tb2R1bGUgZnJvbSAnbW9kdWxlJ1xyXG5cclxuaW1wb3J0IFNpZGVDdHJsIGZyb20gJ2NvbnRyb2xsZXJzL3NpZGUuY29udHJvbGxlcidcclxuaW1wb3J0ICdkaXJlY3RpdmVzL3NpZGUuZGlyZWN0aXZlJ1xyXG5cclxuaW1wb3J0IEhlYWRlckN0cmwgZnJvbSAnY29udHJvbGxlcnMvaGVhZGVyLmNvbnRyb2xsZXInXHJcbmltcG9ydCAnZGlyZWN0aXZlcy9oZWFkZXIuZGlyZWN0aXZlJ1xyXG5pbXBvcnQgJ2FwcC5zY3NzJ1xyXG5cclxuaW1wb3J0IENvbnRlbnRDdHJsIGZyb20gJ2NvbnRyb2xsZXJzL2NvbnRlbnQuY29udHJvbGxlcidcclxuaW1wb3J0ICdkaXJlY3RpdmVzL2NvbnRlbnQuZGlyZWN0aXZlJ1xyXG5cclxuLy9TZXJ2aWNlc1xyXG5pbXBvcnQgJ3NlcnZpY2VzL3NpZGUuc2VydmljZSdcclxuaW1wb3J0ICdzZXJ2aWNlcy9jYXIuc2VydmljZSdcclxuaW1wb3J0ICdzZXJ2aWNlcy9vcmRlci5kZXRhaWwuc2VydmljZSdcclxuXHJcbi8vRmFjdG9yaWVzXHJcbmltcG9ydCAnZmFjdG9yaWVzL29wdGlvbi5mYWN0b3J5J1xyXG5pbXBvcnQgJ2ZhY3Rvcmllcy9jb250ZW50LmZhY3RvcnknXHJcbmltcG9ydCAnZmFjdG9yaWVzL2Nhci5mYWN0b3J5J1xyXG5cclxuYW5ndWxhci5ib290c3RyYXAoZG9jdW1lbnQsIFsnbmdDYXInXSlcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL2luZGV4LmpzXG4gKiovIiwibGV0IF9tb2R1bGUgID0gYW5ndWxhci5tb2R1bGUoJ25nQ2FyJywgWyBcbiAgICAnbmdNYXRlcmlhbCdcbl0pXG5cbmV4cG9ydCBkZWZhdWx0IF9tb2R1bGVcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL21vZHVsZS5qc1xuICoqLyIsImltcG9ydCBfbW9kdWxlIGZyb20gJ21vZHVsZSdcclxuXHJcbmxldCBfJHJvb3RTY29wZVxyXG5cclxuZXhwb3J0IGNsYXNzIFNpZGVDdHJsIHtcclxuXHJcbiAgICBjb25zdHJ1Y3RvciAoc2lkZU5hdlNlcnZpY2UsIG9wdGlvbkZhY3RvcnksIGNvbnRlbnRGYWN0b3J5LCAkcm9vdFNjb3BlKSB7XHJcblxyXG4gICAgICAgIHRoaXMuc2lkZU5hdlNlcnZpY2UgPSBzaWRlTmF2U2VydmljZVxyXG4gICAgICAgIHRoaXMub3B0aW9uRmFjdG9yeSAgPSBvcHRpb25GYWN0b3J5XHJcbiAgICAgICAgdGhpcy5jb250ZW50RmFjdG9yeSA9IGNvbnRlbnRGYWN0b3J5KClcclxuICAgICAgICBfJHJvb3RTY29wZSAgICAgICAgID0gJHJvb3RTY29wZVxyXG5cclxuICAgICAgICB0aGlzLm9wdGlvbnMgPSBcclxuICAgICAgICAgICAgdGhpcy5zaWRlTmF2U2VydmljZS5nZXRPcHRpb25zKClcclxuICAgICAgICAgICAgICAgIC5tYXAoKG9wdGlvbikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLm9wdGlvbkZhY3Rvcnkob3B0aW9uKVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBvbk1kTGlzdENsaWNrIChvcHRpb24pIHtcclxuICAgICAgICB0aGlzLm9wdGlvbnNcclxuICAgICAgICAgICAgLnJlZHVjZSgoYm9vbGVhbiwgaXRlbSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaXRlbS5zZWxlY3RlZCA9IGZhbHNlLCBvcHRpb24uc2VsZWN0ZWQgPSB0cnVlXHJcbiAgICAgICAgICAgIH0sIGZhbHNlKVxyXG5cclxuICAgICAgICBfJHJvb3RTY29wZS4kYnJvYWRjYXN0KCdvblZpZXdDaGFuZ2U6RXZlbnQnLCBvcHRpb24pXHJcbiAgICAgICAgICAgICAgXHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5fbW9kdWxlLmNvbnRyb2xsZXIoJ1NpZGVDdHJsJywgU2lkZUN0cmwpXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9jb250cm9sbGVycy9zaWRlLmNvbnRyb2xsZXIuanNcbiAqKi8iLCJpbXBvcnQgX21vZHVsZSBmcm9tICdtb2R1bGUnXG5pbXBvcnQgdGVtcGxhdGUgZnJvbSAnLi9zaWRlLnRlbXBsYXRlLmh0bWwnXG5cbl9tb2R1bGUuZGlyZWN0aXZlKCdzaWRlbmF2JywgZnVuY3Rpb24gKCkge1xuICAgICduZ0luamVjdCdcblxuICAgIHJldHVybiB7XG4gICAgICAgIHJlc3RyaWN0OiAnQUUnLFxuICAgICAgICBzY29wZTogdHJ1ZSxcbiAgICAgICAgY29udHJvbGxlckFzOiAnY3RybCcsXG4gICAgICAgIGJpbmRUb0NvbnRyb2xsZXI6IHRydWUsXG4gICAgICAgIHRlbXBsYXRlOiB0ZW1wbGF0ZSxcbiAgICAgICAgY29udHJvbGxlcjogJ1NpZGVDdHJsJ1xuICAgIH1cbn0pXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9kaXJlY3RpdmVzL3NpZGUuZGlyZWN0aXZlLmpzXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxtZC1zaWRlbmF2IG1kLWlzLWxvY2tlZC1vcGVuPVxcXCJ0cnVlXFxcIiBjbGFzcz1cXFwibWQtd2hpdGVmcmFtZS00ZHBcXFwiPlxcbiAgICAgICAgICAgIDxtZC1saXN0IG5nLXJlcGVhdD1cXFwib3B0aW9uIGluIGN0cmwub3B0aW9uc1xcXCIgbmctY2xpY2s9XFxcImN0cmwub25NZExpc3RDbGljayhvcHRpb24pXFxcIj5cXG4gICAgICAgICAgICAgIDxtZC1saXN0LWl0ZW0gbmctY2xpY2s9XFxcImN0cmwub25NZExpc3RDbGljayhvcHRpb24pXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZy1jbGFzcz1cXFwib3B0aW9uLnNlbGVjdGVkID8gJ3NlbGVjdGVkJyA6ICcnXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmlhLWxhYmVsPVxcXCJDYXIgdmlldyAtIHt7b3B0aW9uLnZpZXd9fVxcXCI+XFxuICAgICAgICAgICAgICAgICAgICA8aW1nIG5nLXNyYz1cXFwie3sgb3B0aW9uLmltZyB9fVxcXCIgY2xhc3M9XFxcImF2YXRhclxcXCIgXFxuICAgICAgICAgICAgICAgICAgICAgICAgIG5nLXN0eWxlPVxcXCJvcHRpb24uYmdjb2xvclxcXCIgXFxuICAgICAgICAgICAgICAgICAgICAgICAgIG5nLWNsaWNrPVxcXCJjdHJsLm9uTWRMaXN0Q2xpY2sob3B0aW9uKVxcXCI+PC9pbWc+XFxuICAgICAgICAgICAgICA8L21kLWxpc3QtaXRlbT5cXG4gICAgICAgICAgPC9tZC1saXN0PlxcbjwvbWQtc2lkZW5hdj5cXG5cXG5cXG5cXG4gICAgXCJcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vZGlyZWN0aXZlcy9zaWRlLnRlbXBsYXRlLmh0bWxcbiAqKiBtb2R1bGUgaWQgPSA2XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJpbXBvcnQgX21vZHVsZSBmcm9tICdtb2R1bGUnXG5cbmV4cG9ydCBjbGFzcyBIZWFkZXJDdHJsIHtcblxuICAgIGNvbnN0cnVjdG9yICgpIHtcbiAgICAgICAgdGhpcy5ncmVldGluZyA9ICdJbnRlcmFjdGl2ZSBDYXInXG4gICAgfVxuXG59XG5cbl9tb2R1bGUuY29udHJvbGxlcignSGVhZGVyQ3RybCcsIEhlYWRlckN0cmwpXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9jb250cm9sbGVycy9oZWFkZXIuY29udHJvbGxlci5qc1xuICoqLyIsImltcG9ydCBfbW9kdWxlIGZyb20gJ21vZHVsZSdcbmltcG9ydCB0ZW1wbGF0ZSBmcm9tICcuL2hlYWRlci50ZW1wbGF0ZS5odG1sJ1xuXG5fbW9kdWxlLmRpcmVjdGl2ZSgnaGVhZGVyU2VjdGlvbicsIGZ1bmN0aW9uICgpIHtcbiAgICAnbmdJbmplY3QnXG5cbiAgICByZXR1cm4ge1xuICAgICAgICByZXN0cmljdDogJ0FFJyxcbiAgICAgICAgc2NvcGU6IHRydWUsXG4gICAgICAgIGNvbnRyb2xsZXJBczogJ2N0cmwnLFxuICAgICAgICBiaW5kVG9Db250cm9sbGVyOiB0cnVlLFxuICAgICAgICB0ZW1wbGF0ZTogdGVtcGxhdGUsXG4gICAgICAgIGNvbnRyb2xsZXI6ICdIZWFkZXJDdHJsJ1xuICAgIH1cbn0pXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9kaXJlY3RpdmVzL2hlYWRlci5kaXJlY3RpdmUuanNcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IFwiPCEtLTxtZC10b29sYmFyPlxcblxcbjwvbWQtdG9vbGJhcj4tLT5cIlxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9kaXJlY3RpdmVzL2hlYWRlci50ZW1wbGF0ZS5odG1sXG4gKiogbW9kdWxlIGlkID0gOVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvaW5kZXguanMhLi9hcHAuc2Nzc1wiKTtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCB7fSk7XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcblx0Ly8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3Ncblx0aWYoIWNvbnRlbnQubG9jYWxzKSB7XG5cdFx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvaW5kZXguanMhLi9hcHAuc2Nzc1wiLCBmdW5jdGlvbigpIHtcblx0XHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9pbmRleC5qcyEuL2FwcC5zY3NzXCIpO1xuXHRcdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cdFx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdFx0fSk7XG5cdH1cblx0Ly8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn1cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vYXBwLnNjc3NcbiAqKiBtb2R1bGUgaWQgPSAxMFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKCk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIucmFkaWFsIHtcXG4gIGJhY2tncm91bmQ6IC1tb3otcmFkaWFsLWdyYWRpZW50KGNlbnRlciwgY2lyY2xlIGNvdmVyLCAjZmZmIDAlLCAjZmZmIDEwMCUpO1xcbiAgYmFja2dyb3VuZDogLXdlYmtpdC1ncmFkaWVudChyYWRpYWwsIGNlbnRlciBjZW50ZXIsIDBweCwgY2VudGVyIGNlbnRlciwgMTAwJSwgY29sb3Itc3RvcCgwJSwgI2ZmZiksIGNvbG9yLXN0b3AoMTAwJSwgI2ZmZikpO1xcbiAgYmFja2dyb3VuZDogLXdlYmtpdC1yYWRpYWwtZ3JhZGllbnQoY2VudGVyLCBjaXJjbGUgY292ZXIsICNmZmYgMCUsICNmZmYgMTAwJSk7XFxuICBiYWNrZ3JvdW5kOiAtby1yYWRpYWwtZ3JhZGllbnQoY2VudGVyLCBjaXJjbGUgY292ZXIsICNmZmYgMCUsICNmZmYgMTAwJSk7XFxuICBiYWNrZ3JvdW5kOiAtbXMtcmFkaWFsLWdyYWRpZW50KGNlbnRlciwgY2lyY2xlIGNvdmVyLCAjZmZmIDAlLCAjZmZmIDEwMCUpO1xcbiAgYmFja2dyb3VuZDogcmFkaWFsLWdyYWRpZW50KGNlbnRlciwgY2lyY2xlIGNvdmVyLCAjZmZmIDAlLCAjZmZmIDEwMCUpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjsgfVxcblxcbmh0bWwsIGJvZHkge1xcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xcbiAgZm9udC1zaXplOiAxNHB4O1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgbWFyZ2luOiAwcHg7XFxuICBwYWRkaW5nOiAwcHg7IH1cXG5cXG5tZC1pbnB1dC1jb250YWluZXIge1xcbiAgZm9udC1zaXplOiAyMnB4ICFpbXBvcnRhbnQ7IH1cXG5cXG4ubWQtd2hpdGVmcmFtZS0wZHAge1xcbiAgYm94LXNoYWRvdzogMHB4IDBweCAwcHggdHJhbnNwYXJlbnQgIWltcG9ydGFudDsgfVxcblxcbi50cmFuc3BhcmVudCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDsgfVxcblxcbmltZzpmb2N1cyB7XFxuICBvdXRsaW5lOiAwOyB9XFxuXFxubGFiZWwge1xcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7IH1cXG5cXG5tZC10b29sYmFyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNkZTM2NDEgIWltcG9ydGFudDtcXG4gIG1hcmdpbjogYXV0bztcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICBoZWlnaHQ6IDUwcHg7XFxuICBtaW4taGVpZ2h0OiA1MHB4O1xcbiAgbWF4LWhlaWdodDogMTAwcHggIWltcG9ydGFudDsgfVxcblxcbm1kLXNpZGVuYXYsIG1kLXNpZGVuYXYubWQtbG9ja2VkLW9wZW4sIG1kLXNpZGVuYXYubWQtY2xvc2VkLm1kLWxvY2tlZC1vcGVuLWFkZC1hY3RpdmUge1xcbiAgbWluLXdpZHRoOiAxNTBweCAhaW1wb3J0YW50O1xcbiAgd2lkdGg6IDUwdncgIWltcG9ydGFudDtcXG4gIG1heC13aWR0aDogMTUwcHggIWltcG9ydGFudDsgfVxcblxcbm1kLWNvbnRlbnQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZiAhaW1wb3J0YW50OyB9XFxuXFxubWQtbGlzdC1pdGVtID4gYnV0dG9uIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgdGV4dC1hbGlnbjogbGVmdCAhaW1wb3J0YW50OyB9XFxuXFxubWQtbGlzdC1pdGVtLnNlbGVjdGVkIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNkZGQgIWltcG9ydGFudDsgfVxcblxcbiNjb250ZW50IHtcXG4gIHBhZGRpbmctbGVmdDogNDBweDtcXG4gIHBhZGRpbmctcmlnaHQ6IDQwcHg7XFxuICBwYWRkaW5nLXRvcDogNXB4OyB9XFxuXFxuLmF2YXRhciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjODRkOGZkO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgd2lkdGg6IDE2NXB4O1xcbiAgaGVpZ2h0OiAxNThweDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgbWFyZ2luOiAwcHg7XFxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcbiAgem9vbTogMC43MDtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWigwKTtcXG4gIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwLjcpO1xcbiAgLW1vei10cmFuc2Zvcm06IHNjYWxlKDAuNyk7IH1cXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4uL34vY3NzLWxvYWRlciEuLi9+L3Nhc3MtbG9hZGVyIS4vYXBwLnNjc3NcbiAqKiBtb2R1bGUgaWQgPSAxMVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLypcclxuXHRNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxyXG5cdEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcclxuKi9cclxuLy8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcclxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbigpIHtcclxuXHR2YXIgbGlzdCA9IFtdO1xyXG5cclxuXHQvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXHJcblx0bGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xyXG5cdFx0dmFyIHJlc3VsdCA9IFtdO1xyXG5cdFx0Zm9yKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0dmFyIGl0ZW0gPSB0aGlzW2ldO1xyXG5cdFx0XHRpZihpdGVtWzJdKSB7XHJcblx0XHRcdFx0cmVzdWx0LnB1c2goXCJAbWVkaWEgXCIgKyBpdGVtWzJdICsgXCJ7XCIgKyBpdGVtWzFdICsgXCJ9XCIpO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdHJlc3VsdC5wdXNoKGl0ZW1bMV0pO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gcmVzdWx0LmpvaW4oXCJcIik7XHJcblx0fTtcclxuXHJcblx0Ly8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcclxuXHRsaXN0LmkgPSBmdW5jdGlvbihtb2R1bGVzLCBtZWRpYVF1ZXJ5KSB7XHJcblx0XHRpZih0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIilcclxuXHRcdFx0bW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgXCJcIl1dO1xyXG5cdFx0dmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcclxuXHRcdGZvcih2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdHZhciBpZCA9IHRoaXNbaV1bMF07XHJcblx0XHRcdGlmKHR5cGVvZiBpZCA9PT0gXCJudW1iZXJcIilcclxuXHRcdFx0XHRhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XHJcblx0XHR9XHJcblx0XHRmb3IoaSA9IDA7IGkgPCBtb2R1bGVzLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdHZhciBpdGVtID0gbW9kdWxlc1tpXTtcclxuXHRcdFx0Ly8gc2tpcCBhbHJlYWR5IGltcG9ydGVkIG1vZHVsZVxyXG5cdFx0XHQvLyB0aGlzIGltcGxlbWVudGF0aW9uIGlzIG5vdCAxMDAlIHBlcmZlY3QgZm9yIHdlaXJkIG1lZGlhIHF1ZXJ5IGNvbWJpbmF0aW9uc1xyXG5cdFx0XHQvLyAgd2hlbiBhIG1vZHVsZSBpcyBpbXBvcnRlZCBtdWx0aXBsZSB0aW1lcyB3aXRoIGRpZmZlcmVudCBtZWRpYSBxdWVyaWVzLlxyXG5cdFx0XHQvLyAgSSBob3BlIHRoaXMgd2lsbCBuZXZlciBvY2N1ciAoSGV5IHRoaXMgd2F5IHdlIGhhdmUgc21hbGxlciBidW5kbGVzKVxyXG5cdFx0XHRpZih0eXBlb2YgaXRlbVswXSAhPT0gXCJudW1iZXJcIiB8fCAhYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xyXG5cdFx0XHRcdGlmKG1lZGlhUXVlcnkgJiYgIWl0ZW1bMl0pIHtcclxuXHRcdFx0XHRcdGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xyXG5cdFx0XHRcdH0gZWxzZSBpZihtZWRpYVF1ZXJ5KSB7XHJcblx0XHRcdFx0XHRpdGVtWzJdID0gXCIoXCIgKyBpdGVtWzJdICsgXCIpIGFuZCAoXCIgKyBtZWRpYVF1ZXJ5ICsgXCIpXCI7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGxpc3QucHVzaChpdGVtKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH07XHJcblx0cmV0dXJuIGxpc3Q7XHJcbn07XHJcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi4vfi9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1xuICoqIG1vZHVsZSBpZCA9IDEyXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvKlxyXG5cdE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXHJcblx0QXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxyXG4qL1xyXG52YXIgc3R5bGVzSW5Eb20gPSB7fSxcclxuXHRtZW1vaXplID0gZnVuY3Rpb24oZm4pIHtcclxuXHRcdHZhciBtZW1vO1xyXG5cdFx0cmV0dXJuIGZ1bmN0aW9uICgpIHtcclxuXHRcdFx0aWYgKHR5cGVvZiBtZW1vID09PSBcInVuZGVmaW5lZFwiKSBtZW1vID0gZm4uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcclxuXHRcdFx0cmV0dXJuIG1lbW87XHJcblx0XHR9O1xyXG5cdH0sXHJcblx0aXNPbGRJRSA9IG1lbW9pemUoZnVuY3Rpb24oKSB7XHJcblx0XHRyZXR1cm4gL21zaWUgWzYtOV1cXGIvLnRlc3Qod2luZG93Lm5hdmlnYXRvci51c2VyQWdlbnQudG9Mb3dlckNhc2UoKSk7XHJcblx0fSksXHJcblx0Z2V0SGVhZEVsZW1lbnQgPSBtZW1vaXplKGZ1bmN0aW9uICgpIHtcclxuXHRcdHJldHVybiBkb2N1bWVudC5oZWFkIHx8IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiaGVhZFwiKVswXTtcclxuXHR9KSxcclxuXHRzaW5nbGV0b25FbGVtZW50ID0gbnVsbCxcclxuXHRzaW5nbGV0b25Db3VudGVyID0gMCxcclxuXHRzdHlsZUVsZW1lbnRzSW5zZXJ0ZWRBdFRvcCA9IFtdO1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihsaXN0LCBvcHRpb25zKSB7XHJcblx0aWYodHlwZW9mIERFQlVHICE9PSBcInVuZGVmaW5lZFwiICYmIERFQlVHKSB7XHJcblx0XHRpZih0eXBlb2YgZG9jdW1lbnQgIT09IFwib2JqZWN0XCIpIHRocm93IG5ldyBFcnJvcihcIlRoZSBzdHlsZS1sb2FkZXIgY2Fubm90IGJlIHVzZWQgaW4gYSBub24tYnJvd3NlciBlbnZpcm9ubWVudFwiKTtcclxuXHR9XHJcblxyXG5cdG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xyXG5cdC8vIEZvcmNlIHNpbmdsZS10YWcgc29sdXRpb24gb24gSUU2LTksIHdoaWNoIGhhcyBhIGhhcmQgbGltaXQgb24gdGhlICMgb2YgPHN0eWxlPlxyXG5cdC8vIHRhZ3MgaXQgd2lsbCBhbGxvdyBvbiBhIHBhZ2VcclxuXHRpZiAodHlwZW9mIG9wdGlvbnMuc2luZ2xldG9uID09PSBcInVuZGVmaW5lZFwiKSBvcHRpb25zLnNpbmdsZXRvbiA9IGlzT2xkSUUoKTtcclxuXHJcblx0Ly8gQnkgZGVmYXVsdCwgYWRkIDxzdHlsZT4gdGFncyB0byB0aGUgYm90dG9tIG9mIDxoZWFkPi5cclxuXHRpZiAodHlwZW9mIG9wdGlvbnMuaW5zZXJ0QXQgPT09IFwidW5kZWZpbmVkXCIpIG9wdGlvbnMuaW5zZXJ0QXQgPSBcImJvdHRvbVwiO1xyXG5cclxuXHR2YXIgc3R5bGVzID0gbGlzdFRvU3R5bGVzKGxpc3QpO1xyXG5cdGFkZFN0eWxlc1RvRG9tKHN0eWxlcywgb3B0aW9ucyk7XHJcblxyXG5cdHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xyXG5cdFx0dmFyIG1heVJlbW92ZSA9IFtdO1xyXG5cdFx0Zm9yKHZhciBpID0gMDsgaSA8IHN0eWxlcy5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHR2YXIgaXRlbSA9IHN0eWxlc1tpXTtcclxuXHRcdFx0dmFyIGRvbVN0eWxlID0gc3R5bGVzSW5Eb21baXRlbS5pZF07XHJcblx0XHRcdGRvbVN0eWxlLnJlZnMtLTtcclxuXHRcdFx0bWF5UmVtb3ZlLnB1c2goZG9tU3R5bGUpO1xyXG5cdFx0fVxyXG5cdFx0aWYobmV3TGlzdCkge1xyXG5cdFx0XHR2YXIgbmV3U3R5bGVzID0gbGlzdFRvU3R5bGVzKG5ld0xpc3QpO1xyXG5cdFx0XHRhZGRTdHlsZXNUb0RvbShuZXdTdHlsZXMsIG9wdGlvbnMpO1xyXG5cdFx0fVxyXG5cdFx0Zm9yKHZhciBpID0gMDsgaSA8IG1heVJlbW92ZS5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHR2YXIgZG9tU3R5bGUgPSBtYXlSZW1vdmVbaV07XHJcblx0XHRcdGlmKGRvbVN0eWxlLnJlZnMgPT09IDApIHtcclxuXHRcdFx0XHRmb3IodmFyIGogPSAwOyBqIDwgZG9tU3R5bGUucGFydHMubGVuZ3RoOyBqKyspXHJcblx0XHRcdFx0XHRkb21TdHlsZS5wYXJ0c1tqXSgpO1xyXG5cdFx0XHRcdGRlbGV0ZSBzdHlsZXNJbkRvbVtkb21TdHlsZS5pZF07XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9O1xyXG59XHJcblxyXG5mdW5jdGlvbiBhZGRTdHlsZXNUb0RvbShzdHlsZXMsIG9wdGlvbnMpIHtcclxuXHRmb3IodmFyIGkgPSAwOyBpIDwgc3R5bGVzLmxlbmd0aDsgaSsrKSB7XHJcblx0XHR2YXIgaXRlbSA9IHN0eWxlc1tpXTtcclxuXHRcdHZhciBkb21TdHlsZSA9IHN0eWxlc0luRG9tW2l0ZW0uaWRdO1xyXG5cdFx0aWYoZG9tU3R5bGUpIHtcclxuXHRcdFx0ZG9tU3R5bGUucmVmcysrO1xyXG5cdFx0XHRmb3IodmFyIGogPSAwOyBqIDwgZG9tU3R5bGUucGFydHMubGVuZ3RoOyBqKyspIHtcclxuXHRcdFx0XHRkb21TdHlsZS5wYXJ0c1tqXShpdGVtLnBhcnRzW2pdKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRmb3IoOyBqIDwgaXRlbS5wYXJ0cy5sZW5ndGg7IGorKykge1xyXG5cdFx0XHRcdGRvbVN0eWxlLnBhcnRzLnB1c2goYWRkU3R5bGUoaXRlbS5wYXJ0c1tqXSwgb3B0aW9ucykpO1xyXG5cdFx0XHR9XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHR2YXIgcGFydHMgPSBbXTtcclxuXHRcdFx0Zm9yKHZhciBqID0gMDsgaiA8IGl0ZW0ucGFydHMubGVuZ3RoOyBqKyspIHtcclxuXHRcdFx0XHRwYXJ0cy5wdXNoKGFkZFN0eWxlKGl0ZW0ucGFydHNbal0sIG9wdGlvbnMpKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRzdHlsZXNJbkRvbVtpdGVtLmlkXSA9IHtpZDogaXRlbS5pZCwgcmVmczogMSwgcGFydHM6IHBhcnRzfTtcclxuXHRcdH1cclxuXHR9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGxpc3RUb1N0eWxlcyhsaXN0KSB7XHJcblx0dmFyIHN0eWxlcyA9IFtdO1xyXG5cdHZhciBuZXdTdHlsZXMgPSB7fTtcclxuXHRmb3IodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xyXG5cdFx0dmFyIGl0ZW0gPSBsaXN0W2ldO1xyXG5cdFx0dmFyIGlkID0gaXRlbVswXTtcclxuXHRcdHZhciBjc3MgPSBpdGVtWzFdO1xyXG5cdFx0dmFyIG1lZGlhID0gaXRlbVsyXTtcclxuXHRcdHZhciBzb3VyY2VNYXAgPSBpdGVtWzNdO1xyXG5cdFx0dmFyIHBhcnQgPSB7Y3NzOiBjc3MsIG1lZGlhOiBtZWRpYSwgc291cmNlTWFwOiBzb3VyY2VNYXB9O1xyXG5cdFx0aWYoIW5ld1N0eWxlc1tpZF0pXHJcblx0XHRcdHN0eWxlcy5wdXNoKG5ld1N0eWxlc1tpZF0gPSB7aWQ6IGlkLCBwYXJ0czogW3BhcnRdfSk7XHJcblx0XHRlbHNlXHJcblx0XHRcdG5ld1N0eWxlc1tpZF0ucGFydHMucHVzaChwYXJ0KTtcclxuXHR9XHJcblx0cmV0dXJuIHN0eWxlcztcclxufVxyXG5cclxuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMsIHN0eWxlRWxlbWVudCkge1xyXG5cdHZhciBoZWFkID0gZ2V0SGVhZEVsZW1lbnQoKTtcclxuXHR2YXIgbGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3AgPSBzdHlsZUVsZW1lbnRzSW5zZXJ0ZWRBdFRvcFtzdHlsZUVsZW1lbnRzSW5zZXJ0ZWRBdFRvcC5sZW5ndGggLSAxXTtcclxuXHRpZiAob3B0aW9ucy5pbnNlcnRBdCA9PT0gXCJ0b3BcIikge1xyXG5cdFx0aWYoIWxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wKSB7XHJcblx0XHRcdGhlYWQuaW5zZXJ0QmVmb3JlKHN0eWxlRWxlbWVudCwgaGVhZC5maXJzdENoaWxkKTtcclxuXHRcdH0gZWxzZSBpZihsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcC5uZXh0U2libGluZykge1xyXG5cdFx0XHRoZWFkLmluc2VydEJlZm9yZShzdHlsZUVsZW1lbnQsIGxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wLm5leHRTaWJsaW5nKTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdGhlYWQuYXBwZW5kQ2hpbGQoc3R5bGVFbGVtZW50KTtcclxuXHRcdH1cclxuXHRcdHN0eWxlRWxlbWVudHNJbnNlcnRlZEF0VG9wLnB1c2goc3R5bGVFbGVtZW50KTtcclxuXHR9IGVsc2UgaWYgKG9wdGlvbnMuaW5zZXJ0QXQgPT09IFwiYm90dG9tXCIpIHtcclxuXHRcdGhlYWQuYXBwZW5kQ2hpbGQoc3R5bGVFbGVtZW50KTtcclxuXHR9IGVsc2Uge1xyXG5cdFx0dGhyb3cgbmV3IEVycm9yKFwiSW52YWxpZCB2YWx1ZSBmb3IgcGFyYW1ldGVyICdpbnNlcnRBdCcuIE11c3QgYmUgJ3RvcCcgb3IgJ2JvdHRvbScuXCIpO1xyXG5cdH1cclxufVxyXG5cclxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xyXG5cdHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XHJcblx0dmFyIGlkeCA9IHN0eWxlRWxlbWVudHNJbnNlcnRlZEF0VG9wLmluZGV4T2Yoc3R5bGVFbGVtZW50KTtcclxuXHRpZihpZHggPj0gMCkge1xyXG5cdFx0c3R5bGVFbGVtZW50c0luc2VydGVkQXRUb3Auc3BsaWNlKGlkeCwgMSk7XHJcblx0fVxyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVTdHlsZUVsZW1lbnQob3B0aW9ucykge1xyXG5cdHZhciBzdHlsZUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XHJcblx0c3R5bGVFbGVtZW50LnR5cGUgPSBcInRleHQvY3NzXCI7XHJcblx0aW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMsIHN0eWxlRWxlbWVudCk7XHJcblx0cmV0dXJuIHN0eWxlRWxlbWVudDtcclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlTGlua0VsZW1lbnQob3B0aW9ucykge1xyXG5cdHZhciBsaW5rRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaW5rXCIpO1xyXG5cdGxpbmtFbGVtZW50LnJlbCA9IFwic3R5bGVzaGVldFwiO1xyXG5cdGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zLCBsaW5rRWxlbWVudCk7XHJcblx0cmV0dXJuIGxpbmtFbGVtZW50O1xyXG59XHJcblxyXG5mdW5jdGlvbiBhZGRTdHlsZShvYmosIG9wdGlvbnMpIHtcclxuXHR2YXIgc3R5bGVFbGVtZW50LCB1cGRhdGUsIHJlbW92ZTtcclxuXHJcblx0aWYgKG9wdGlvbnMuc2luZ2xldG9uKSB7XHJcblx0XHR2YXIgc3R5bGVJbmRleCA9IHNpbmdsZXRvbkNvdW50ZXIrKztcclxuXHRcdHN0eWxlRWxlbWVudCA9IHNpbmdsZXRvbkVsZW1lbnQgfHwgKHNpbmdsZXRvbkVsZW1lbnQgPSBjcmVhdGVTdHlsZUVsZW1lbnQob3B0aW9ucykpO1xyXG5cdFx0dXBkYXRlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlRWxlbWVudCwgc3R5bGVJbmRleCwgZmFsc2UpO1xyXG5cdFx0cmVtb3ZlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlRWxlbWVudCwgc3R5bGVJbmRleCwgdHJ1ZSk7XHJcblx0fSBlbHNlIGlmKG9iai5zb3VyY2VNYXAgJiZcclxuXHRcdHR5cGVvZiBVUkwgPT09IFwiZnVuY3Rpb25cIiAmJlxyXG5cdFx0dHlwZW9mIFVSTC5jcmVhdGVPYmplY3RVUkwgPT09IFwiZnVuY3Rpb25cIiAmJlxyXG5cdFx0dHlwZW9mIFVSTC5yZXZva2VPYmplY3RVUkwgPT09IFwiZnVuY3Rpb25cIiAmJlxyXG5cdFx0dHlwZW9mIEJsb2IgPT09IFwiZnVuY3Rpb25cIiAmJlxyXG5cdFx0dHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xyXG5cdFx0c3R5bGVFbGVtZW50ID0gY3JlYXRlTGlua0VsZW1lbnQob3B0aW9ucyk7XHJcblx0XHR1cGRhdGUgPSB1cGRhdGVMaW5rLmJpbmQobnVsbCwgc3R5bGVFbGVtZW50KTtcclxuXHRcdHJlbW92ZSA9IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRyZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcclxuXHRcdFx0aWYoc3R5bGVFbGVtZW50LmhyZWYpXHJcblx0XHRcdFx0VVJMLnJldm9rZU9iamVjdFVSTChzdHlsZUVsZW1lbnQuaHJlZik7XHJcblx0XHR9O1xyXG5cdH0gZWxzZSB7XHJcblx0XHRzdHlsZUVsZW1lbnQgPSBjcmVhdGVTdHlsZUVsZW1lbnQob3B0aW9ucyk7XHJcblx0XHR1cGRhdGUgPSBhcHBseVRvVGFnLmJpbmQobnVsbCwgc3R5bGVFbGVtZW50KTtcclxuXHRcdHJlbW92ZSA9IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRyZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcclxuXHRcdH07XHJcblx0fVxyXG5cclxuXHR1cGRhdGUob2JqKTtcclxuXHJcblx0cmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlKG5ld09iaikge1xyXG5cdFx0aWYobmV3T2JqKSB7XHJcblx0XHRcdGlmKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcClcclxuXHRcdFx0XHRyZXR1cm47XHJcblx0XHRcdHVwZGF0ZShvYmogPSBuZXdPYmopO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0cmVtb3ZlKCk7XHJcblx0XHR9XHJcblx0fTtcclxufVxyXG5cclxudmFyIHJlcGxhY2VUZXh0ID0gKGZ1bmN0aW9uICgpIHtcclxuXHR2YXIgdGV4dFN0b3JlID0gW107XHJcblxyXG5cdHJldHVybiBmdW5jdGlvbiAoaW5kZXgsIHJlcGxhY2VtZW50KSB7XHJcblx0XHR0ZXh0U3RvcmVbaW5kZXhdID0gcmVwbGFjZW1lbnQ7XHJcblx0XHRyZXR1cm4gdGV4dFN0b3JlLmZpbHRlcihCb29sZWFuKS5qb2luKCdcXG4nKTtcclxuXHR9O1xyXG59KSgpO1xyXG5cclxuZnVuY3Rpb24gYXBwbHlUb1NpbmdsZXRvblRhZyhzdHlsZUVsZW1lbnQsIGluZGV4LCByZW1vdmUsIG9iaikge1xyXG5cdHZhciBjc3MgPSByZW1vdmUgPyBcIlwiIDogb2JqLmNzcztcclxuXHJcblx0aWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XHJcblx0XHRzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gcmVwbGFjZVRleHQoaW5kZXgsIGNzcyk7XHJcblx0fSBlbHNlIHtcclxuXHRcdHZhciBjc3NOb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKTtcclxuXHRcdHZhciBjaGlsZE5vZGVzID0gc3R5bGVFbGVtZW50LmNoaWxkTm9kZXM7XHJcblx0XHRpZiAoY2hpbGROb2Rlc1tpbmRleF0pIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChjaGlsZE5vZGVzW2luZGV4XSk7XHJcblx0XHRpZiAoY2hpbGROb2Rlcy5sZW5ndGgpIHtcclxuXHRcdFx0c3R5bGVFbGVtZW50Lmluc2VydEJlZm9yZShjc3NOb2RlLCBjaGlsZE5vZGVzW2luZGV4XSk7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoY3NzTm9kZSk7XHJcblx0XHR9XHJcblx0fVxyXG59XHJcblxyXG5mdW5jdGlvbiBhcHBseVRvVGFnKHN0eWxlRWxlbWVudCwgb2JqKSB7XHJcblx0dmFyIGNzcyA9IG9iai5jc3M7XHJcblx0dmFyIG1lZGlhID0gb2JqLm1lZGlhO1xyXG5cdHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xyXG5cclxuXHRpZihtZWRpYSkge1xyXG5cdFx0c3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm1lZGlhXCIsIG1lZGlhKVxyXG5cdH1cclxuXHJcblx0aWYoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcclxuXHRcdHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XHJcblx0fSBlbHNlIHtcclxuXHRcdHdoaWxlKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XHJcblx0XHRcdHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XHJcblx0XHR9XHJcblx0XHRzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XHJcblx0fVxyXG59XHJcblxyXG5mdW5jdGlvbiB1cGRhdGVMaW5rKGxpbmtFbGVtZW50LCBvYmopIHtcclxuXHR2YXIgY3NzID0gb2JqLmNzcztcclxuXHR2YXIgbWVkaWEgPSBvYmoubWVkaWE7XHJcblx0dmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XHJcblxyXG5cdGlmKHNvdXJjZU1hcCkge1xyXG5cdFx0Ly8gaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL2EvMjY2MDM4NzVcclxuXHRcdGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIgKyBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpICsgXCIgKi9cIjtcclxuXHR9XHJcblxyXG5cdHZhciBibG9iID0gbmV3IEJsb2IoW2Nzc10sIHsgdHlwZTogXCJ0ZXh0L2Nzc1wiIH0pO1xyXG5cclxuXHR2YXIgb2xkU3JjID0gbGlua0VsZW1lbnQuaHJlZjtcclxuXHJcblx0bGlua0VsZW1lbnQuaHJlZiA9IFVSTC5jcmVhdGVPYmplY3RVUkwoYmxvYik7XHJcblxyXG5cdGlmKG9sZFNyYylcclxuXHRcdFVSTC5yZXZva2VPYmplY3RVUkwob2xkU3JjKTtcclxufVxyXG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4uL34vc3R5bGUtbG9hZGVyL2FkZFN0eWxlcy5qc1xuICoqIG1vZHVsZSBpZCA9IDEzXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJpbXBvcnQgX21vZHVsZSBmcm9tICdtb2R1bGUnXHJcblxyXG5sZXQgXyRyb290U2NvcGUsIF9vcmRlckRldGFpbFNlcnZpY2UsIGNhck1hcFxyXG5cclxuZXhwb3J0IGNsYXNzIENvbnRlbnRDdHJsIHtcclxuXHJcbiAgICBjb25zdHJ1Y3RvciAoY29udGVudEZhY3RvcnksIG9yZGVyRGV0YWlsU2VydmljZSwgJHJvb3RTY29wZSkge1xyXG5cclxuICAgICAgICBfb3JkZXJEZXRhaWxTZXJ2aWNlID0gb3JkZXJEZXRhaWxTZXJ2aWNlXHJcbiAgICAgICAgXyRyb290U2NvcGUgICAgICAgICA9ICRyb290U2NvcGVcclxuICAgICAgICB0aGlzLmxvYWRpbmcgICAgICAgID0gdHJ1ZVxyXG4gICAgICAgIHRoaXMuY29udGVudEZhY3RvcnkgPSBjb250ZW50RmFjdG9yeSgpXHJcbiAgICAgICAgdGhpcy5tYXAgICAgICAgICAgICA9IG5ldyBPYmplY3QoKVxyXG4gICAgICAgIHRoaXMuY2FyICAgICAgICAgICAgPSB0aGlzLmNvbnRlbnRGYWN0b3J5Lm9uVmlld0NoYW5nZSh7IHZpZXc6ICdzaWRlJyB9KVxyXG4gICAgICAgIHRoaXMuZGFtYWdlVHlwZXMgICAgPSBfb3JkZXJEZXRhaWxTZXJ2aWNlLmdldERhbWFnZVR5cGVzKClcclxuICAgICAgICB0aGlzLmFjdGlvbnMgICAgICAgID0gX29yZGVyRGV0YWlsU2VydmljZS5nZXRBY3Rpb25zKClcclxuICAgICAgICB0aGlzLmdldEFzeW5jRmlsdGVycygpXHJcblxyXG4gICAgICAgIF8kcm9vdFNjb3BlLiRvbignb25WaWV3Q2hhbmdlOkV2ZW50JywgKGV2ZW50LCBvcHRpb24pID0+IHsgICAgICAgICAgIFxyXG4gICAgICAgICAgICB0aGlzLmNhciA9IHRoaXMuY29udGVudEZhY3Rvcnkub25WaWV3Q2hhbmdlKG9wdGlvbilcclxuICAgICAgICAgICAgJCgnaW1nW3VzZW1hcF0nKS5yd2RJbWFnZU1hcHMoKTtcclxuICAgICAgICB9KVxyXG5cclxuICAgIH1cclxuXHJcbiAgICBhcmVhQ2xpY2sgKGFyZWEpIHtcclxuXHJcbiAgICAgICAgdGhpcy5jYXIuY29tcG9uZW50ID0gX29yZGVyRGV0YWlsU2VydmljZS5nZXRDb21wb25lbnRCeUFyZWEoYXJlYSlcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuY29udGVudEZhY3RvcnkubWFwKSB7XHJcbiAgICAgICAgICAgIGNhck1hcCA9IHRoaXMuY29udGVudEZhY3RvcnkubWFwLmdldCh0aGlzLmNhci5jb21wb25lbnQuaWQpXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoY2FyTWFwKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY2FyLmNvbXBvbmVudCA9IGNhck1hcC5jb21wb25lbnRcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuY29udGVudEZhY3RvcnkubWVtb2l6ZURhdGEodGhpcy5jYXIpXHJcblxyXG4gICAgfVxyXG5cclxuICAgIHNlbGVjdFN1YkNvbXBvbmVudCAoc3ViQ29tcG9uZW50KSB7XHJcbiAgICAgICAgdGhpcy5zdWJDb21wb25lbnQgPSBzdWJDb21wb25lbnRcclxuICAgIH1cclxuXHJcbiAgICBnZXRBc3luY0ZpbHRlcnMgKCkge1xyXG5cclxuICAgICAgICBfb3JkZXJEZXRhaWxTZXJ2aWNlLmdldEFzeW5jRmlsdGVycygpXHJcbiAgICAgICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHsgXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgdGhpcy5jYXRlZ29yaWVzID0gcmVzcG9uc2VbMF0uZGF0YVxyXG4gICAgICAgICAgICAgICAgdGhpcy5icmFuZHMgPSByZXNwb25zZVsxXS5kYXRhXHJcbiAgICAgICAgICAgICAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZVxyXG4gICAgICAgICAgICAgICAgXyRyb290U2NvcGUuJGFwcGx5KClcclxuXHJcbiAgICAgICAgICAgIH0sIGVycm9yID0+IHtcclxuICAgICAgICAgICAgICAgIGFsZXJ0KCdObyBzZSBwdWVkaWVyb24gb2J0ZW5lciBsb3MgZmlsdHJvcyAoY2F0ZWdvcmlhLCBtYXJjYSknIFxyXG4gICAgICAgICAgICAgICAgICAgICsgSlNPTi5zdHJpbmdpZnkoZXJyb3IpKVxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgfVxyXG5cclxufVxyXG5cclxuX21vZHVsZS5jb250cm9sbGVyKCdDb250ZW50Q3RybCcsIENvbnRlbnRDdHJsKVxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vY29udHJvbGxlcnMvY29udGVudC5jb250cm9sbGVyLmpzXG4gKiovIiwiaW1wb3J0IF9tb2R1bGUgZnJvbSAnbW9kdWxlJ1xyXG5pbXBvcnQgdGVtcGxhdGUgZnJvbSAnLi9jb250ZW50LnRlbXBsYXRlLmh0bWwnXHJcblxyXG5fbW9kdWxlLmRpcmVjdGl2ZSgnY29udGVudFNlY3Rpb24nLCBmdW5jdGlvbiAoJHRpbWVvdXQpIHtcclxuICAgICduZ0luamVjdCdcclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHJlc3RyaWN0OiAnQUUnLFxyXG4gICAgICAgIHNjb3BlOiB7fSxcclxuICAgICAgICBjb250cm9sbGVyQXM6ICdjdHJsJyxcclxuICAgICAgICBiaW5kVG9Db250cm9sbGVyOiB0cnVlLFxyXG4gICAgICAgIHRlbXBsYXRlOiB0ZW1wbGF0ZSxcclxuICAgICAgICBjb250cm9sbGVyOiAnQ29udGVudEN0cmwnLFxyXG5cclxuICAgICAgICBsaW5rIDogKHNjb3BlLCBlbCwgYXR0cnMpID0+IHtcclxuXHJcbiAgICAgICAgICAgICR0aW1lb3V0KCgpID0+IHtcclxuXHJcbiAgICAgICAgICAgICQoJ2ltZ1t1c2VtYXBdJykucndkSW1hZ2VNYXBzKCk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdhanVzdGFkbyEnKVxyXG5cclxuICAgICAgICAgICAgLy8gVE9ETzogdGhpcyBtZXNzZXMgdXAgdGhlIHJlc3BvbnNpdmUgcndkSW1hZ2VNYXBzXHJcbiAgICAgICAgICAgIC8vICQoJyNjYXItc2lkZScpLm1hcHN0ZXIoe1xyXG4gICAgICAgICAgICAvLyAgICAgc3RhdGljU3RhdGU6IHRydWUsXHJcbiAgICAgICAgICAgIC8vICAgICBmaWxsT3BhY2l0eTogMC40LFxyXG4gICAgICAgICAgICAvLyAgICAgZmlsbENvbG9yOiAnZmFkYmI4NCcsXHJcbiAgICAgICAgICAgIC8vICAgICBoaWdobGlnaHQ6IHRydWUsXHJcbiAgICAgICAgICAgIC8vICAgICBtYXBLZXk6ICduYW1lJyxcclxuICAgICAgICAgICAgLy8gICAgIHNob3dUb29sVGlwOiB0cnVlLFxyXG4gICAgICAgICAgICAvLyAgICAgc2NhbGVNYXA6IGZhbHNlLFxyXG4gICAgICAgICAgICAvLyAgICAgdG9vbFRpcENsb3NlOiBbXCJ0b29sdGlwLWNsaWNrXCIsXCJhcmVhLW1vdXNlb3V0XCJdLFxyXG4gICAgICAgICAgICAvLyAgICAgYXJlYXM6IFt7XHJcbiAgICAgICAgICAgIC8vICAgICAgICAga2V5OiAnTEZkb29yJyxcclxuICAgICAgICAgICAgLy8gICAgICAgICB0b29sVGlwOiAnUHVlcnRhIGZyb250YWwgbGFkbyBpenF1aWVyZG8uJ1xyXG4gICAgICAgICAgICAvLyAgICAgfV0sICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAvLyAgICAgb25DbGljazogZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgLy8gICAgIH1cclxuICAgICAgICAgICAgLy8gfSk7XHJcblxyXG4gICAgICAgICAgICB9LCAwKVxyXG5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgIH1cclxufSlcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL2RpcmVjdGl2ZXMvY29udGVudC5kaXJlY3RpdmUuanNcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IFwiPG1kLWNvbnRlbnQgY2xhc3M9XFxcIm1kLXBhZGRpbmdcXFwiIGxheW91dC14cz1cXFwiY29sdW1uXFxcIiBsYXlvdXQ9XFxcInJvd1xcXCI+XFxyXFxuICA8ZGl2IGZsZXgteHMgZmxleC1ndC14cz1cXFwiMTAwXFxcIiBsYXlvdXQ9XFxcImNvbHVtblxcXCI+XFxyXFxuICAgIDxtZC1pbnB1dC1jb250YWluZXI+XFxyXFxuICAgICAgICAgIDxsYWJlbD5TdWItQ29tcG9uZW50ZTwvbGFiZWw+XFxyXFxuICAgICAgICAgIDxtZC1zZWxlY3QgbmctbW9kZWw9XFxcImN0cmwuY2FyLmNvbXBvbmVudC5zdWJDb21wb25lbnRcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICAgbmctY2hhbmdlPVxcXCJjdHJsLnNhdmVEYXRhKGN0cmwuY2FyKVxcXCI+XFxyXFxuICAgICAgICAgICAgPG1kLW9wdGlvbiBuZy1yZXBlYXQ9XFxcInN1YkNvbXBvbmVudCBpbiBjdHJsLmNhci5jb21wb25lbnQuc3ViQ29tcG9uZW50c1xcXCIgXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICBuZy12YWx1ZT1cXFwic3ViQ29tcG9uZW50XFxcIj5cXHJcXG4gICAgICAgICAgICAgIHt7c3ViQ29tcG9uZW50Lm5hbWV9fVxcclxcbiAgICAgICAgICAgIDwvbWQtb3B0aW9uPlxcclxcbiAgICAgICAgICA8L21kLXNlbGVjdD5cXHJcXG4gICAgICAgIDwvbWQtaW5wdXQtY29udGFpbmVyPlxcclxcbiAgICAgICAgPG1kLWlucHV0LWNvbnRhaW5lcj5cXHJcXG4gICAgICAgICAgPGxhYmVsPlRpcG8gTGlzdGE8L2xhYmVsPlxcclxcbiAgICAgICAgICA8bWQtc2VsZWN0IG5nLW1vZGVsPVxcXCJjdHJsLmNhci5jb21wb25lbnQuZGFtYWdlVHlwZVxcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgICBuZy1jaGFuZ2U9XFxcImN0cmwuc2F2ZURhdGEoY3RybC5jYXIpXFxcIj5cXHJcXG4gICAgICAgICAgICA8bWQtb3B0aW9uIG5nLXJlcGVhdD1cXFwiZGFtYWdlVHlwZSBpbiBjdHJsLmRhbWFnZVR5cGVzXFxcIiBcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgIG5nLXZhbHVlPVxcXCJkYW1hZ2VUeXBlXFxcIj5cXHJcXG4gICAgICAgICAgICAgIHt7ZGFtYWdlVHlwZS5uYW1lfX1cXHJcXG4gICAgICAgICAgICA8L21kLW9wdGlvbj5cXHJcXG4gICAgICAgICAgPC9tZC1zZWxlY3Q+XFxyXFxuICAgIDwvbWQtaW5wdXQtY29udGFpbmVyPlxcclxcbiAgPC9kaXY+XFxyXFxuICAgIDxkaXYgZmxleC14cyBmbGV4LWd0LXhzPVxcXCIxMDBcXFwiIGxheW91dD1cXFwiY29sdW1uXFxcIj5cXHJcXG4gICAgICA8bWQtaW5wdXQtY29udGFpbmVyPlxcclxcbiAgICAgICAgICA8bGFiZWw+QWNjaW9uPC9sYWJlbD5cXHJcXG4gICAgICAgICAgPG1kLXNlbGVjdCBuZy1tb2RlbD1cXFwiY3RybC5jYXIuY29tcG9uZW50LmFjdGlvblxcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgICBuZy1jaGFuZ2U9XFxcImN0cmwuc2F2ZURhdGEoY3RybC5jYXIpXFxcIj5cXHJcXG4gICAgICAgICAgICA8bWQtb3B0aW9uIG5nLXJlcGVhdD1cXFwiYWN0aW9uIGluIGN0cmwuYWN0aW9uc1xcXCIgXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICBuZy12YWx1ZT1cXFwiYWN0aW9uXFxcIj5cXHJcXG4gICAgICAgICAgICAgIHt7YWN0aW9uLm5hbWV9fVxcclxcbiAgICAgICAgICAgIDwvbWQtb3B0aW9uPlxcclxcbiAgICAgICAgICA8L21kLXNlbGVjdD5cXHJcXG4gICAgICAgIDwvbWQtaW5wdXQtY29udGFpbmVyPlxcclxcbiAgICAgICAgPG1kLWlucHV0LWNvbnRhaW5lcj5cXHJcXG4gICAgICAgICAgPGxhYmVsPkNhdGVnb3JpYXM8L2xhYmVsPlxcclxcbiAgICAgICAgICA8bWQtc2VsZWN0IG5nLW1vZGVsPVxcXCJjdHJsLmNhci5jb21wb25lbnQuY2F0ZWdvcnlcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICAgbmctY2hhbmdlPVxcXCJjdHJsLnNhdmVEYXRhKGN0cmwuY2FyKTtcXFwiPlxcclxcbiAgICAgICAgICAgIDxtZC1vcHRpb24gbmctcmVwZWF0PVxcXCJjYXRlZ29yeSBpbiBjdHJsLmNhdGVnb3JpZXNcXFwiIFxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgbmctdmFsdWU9XFxcImNhdGVnb3J5XFxcIj5cXHJcXG4gICAgICAgICAgICAgIHt7Y2F0ZWdvcnkuTm9tYnJlfX1cXHJcXG4gICAgICAgICAgICA8L21kLW9wdGlvbj5cXHJcXG4gICAgICAgICAgPC9tZC1zZWxlY3Q+XFxyXFxuICAgICAgICAgIDxtZC1wcm9ncmVzcy1saW5lYXIgbWQtbW9kZT1cXFwiaW5kZXRlcm1pbmF0ZVxcXCIgbmctaGlkZT1cXFwiIWN0cmwubG9hZGluZ1xcXCI+XFxyXFxuICAgICAgICAgIDwvbWQtcHJvZ3Jlc3MtbGluZWFyPlxcclxcbiAgICAgIDwvbWQtaW5wdXQtY29udGFpbmVyPlxcclxcbiAgICA8L2Rpdj5cXHJcXG4gICAgPGRpdiBmbGV4LXhzIGZsZXgtZ3QteHM9XFxcIjEwMFxcXCIgbGF5b3V0PVxcXCJjb2x1bW5cXFwiPlxcclxcbiAgICAgICAgPG1kLWlucHV0LWNvbnRhaW5lcj5cXHJcXG4gICAgICAgICAgPGxhYmVsPk1hcmNhPC9sYWJlbD5cXHJcXG4gICAgICAgICAgPG1kLXNlbGVjdCBuZy1tb2RlbD1cXFwiY3RybC5jYXIuY29tcG9uZW50LmJyYW5kXFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgIG5nLWNoYW5nZT1cXFwiY3RybC5zYXZlRGF0YShjdHJsLmNhcik7XFxcIj5cXHJcXG4gICAgICAgICAgICA8bWQtb3B0aW9uIG5nLXJlcGVhdD1cXFwiYnJhbmQgaW4gY3RybC5icmFuZHNcXFwiIFxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgbmctdmFsdWU9XFxcImJyYW5kXFxcIj5cXHJcXG4gICAgICAgICAgICAgIHt7YnJhbmQuTm9tYnJlfX1cXHJcXG4gICAgICAgICAgICA8L21kLW9wdGlvbj5cXHJcXG4gICAgICAgICAgPC9tZC1zZWxlY3Q+XFxyXFxuICAgICAgICAgIDxtZC1wcm9ncmVzcy1saW5lYXIgbWQtbW9kZT1cXFwiaW5kZXRlcm1pbmF0ZVxcXCIgbmctaGlkZT1cXFwiIWN0cmwubG9hZGluZ1xcXCI+XFxyXFxuICAgICAgICAgIDwvbWQtcHJvZ3Jlc3MtbGluZWFyPlxcclxcbiAgICAgIDwvbWQtaW5wdXQtY29udGFpbmVyPlxcclxcbiAgICA8L2Rpdj5cXHJcXG48L21kLWNvbnRlbnQ+XFxyXFxuXFxyXFxuPGRpdiBjbGFzcz1cXFwiY29udGFpbmVyIG1kLXdoaXRlZnJhbWUtMGRwXFxcIj5cXHJcXG4gICAgPG1kLWNvbnRlbnQgY2xhc3M9XFxcIm1kLXBhZGRpbmcgbWQtd2hpdGVmcmFtZS0wZHBcXFwiIGxheW91dC14cz1cXFwiY29sdW1uXFxcIiBsYXlvdXQ9XFxcInJvd1xcXCI+XFxyXFxuICAgICAgICA8bWQtY2FyZCBjbGFzcz1cXFwibWQtd2hpdGVmcmFtZS0wZHBcXFwiPlxcclxcbiAgICAgICAgICAgIDxpbWcgbmctc3JjPVxcXCJ7e2N0cmwuY2FyLmltYWdlLnVybH19XFxcIiBjbGFzcz1cXFwibWQtY3RybC5jYXJkLWltYWdlXFxcIiBpZD1cXFwie3tjdHJsLmNhci5pbWFnZS5pZH19XFxcIiB1c2VtYXA9XFxcInt7Y3RybC5jYXIuaW1hZ2UudXNlbWFwfX1cXFwiPlxcclxcbiAgICAgICAgICAgIDxtYXAgbmFtZT1cXFwie3tjdHJsLmNhci5tYXAubmFtZX19XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPGFyZWEgbmctcmVwZWF0PVxcXCJhcmVhIGluIGN0cmwuY2FyLm1hcC5hcmVhc1xcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgbmctY2xpY2s9XFxcImN0cmwuYXJlYUNsaWNrKGFyZWEpXFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgICBhbHQ9XFxcInt7YXJlYS5hbHR9fVxcXCIgXFxyXFxuICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XFxcInt7YXJlYS50aXRsZX19XFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgICB0aXRsZT1cXFwie3thcmVhLnRpdGxlfX1cXFwiICBcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgaHJlZj1cXFwiI1xcXCIgXFxyXFxuICAgICAgICAgICAgICAgICAgICAgIGNvb3Jkcz1cXFwie3thcmVhLmNvb3Jkc319XFxcIiBcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgc2hhcGU9XFxcInt7YXJlYS5zaGFwZX19XFxcIj5cXHJcXG4gICAgICAgICAgICA8L21hcD5cXHJcXG4gICAgICAgIDwvbWQtY3RybC5jYXJkPlxcclxcbiAgICA8L21kLWNvbnRlbnQ+XFxyXFxuPC9kaXY+XCJcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vZGlyZWN0aXZlcy9jb250ZW50LnRlbXBsYXRlLmh0bWxcbiAqKiBtb2R1bGUgaWQgPSAxOVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiaW1wb3J0IF9tb2R1bGUgZnJvbSAnbW9kdWxlJ1xyXG5cclxuZXhwb3J0IGNsYXNzIFNpZGVOYXZTZXJ2aWNlIHtcclxuXHJcbiAgICBjb25zdHJ1Y3RvciAoKSB7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgZ2V0T3B0aW9ucyAoKSB7XHJcblxyXG4gICAgICAgIHJldHVybiBbXHJcblxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBpZDogMSxcclxuICAgICAgICAgICAgICAgIHZpZXc6ICdmcm9udCcsXHJcbiAgICAgICAgICAgICAgICBpbWc6ICdodHRwczovL3MxNy5wb3N0aW1nLm9yZy84anRyZHE3dHIvY2FyZnJvbnQucG5nJyxcclxuICAgICAgICAgICAgICAgIGJnY29sb3I6IHsgJ2JhY2tncm91bmQtY29sb3InOiAnI2ZlZGZiNScgfVxyXG4gICAgICAgICAgICB9LFxyXG5cclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaWQ6IDIsXHJcbiAgICAgICAgICAgICAgICB2aWV3OiAnc2lkZScsXHJcbiAgICAgICAgICAgICAgICBpbWc6ICdodHRwczovL3MxOC5wb3N0aW1nLm9yZy9pbTZtMDBycmQvY2Fyc2lkZS5wbmcnLFxyXG4gICAgICAgICAgICAgICAgYmdjb2xvcjogeyAnYmFja2dyb3VuZC1jb2xvcic6ICcjYmJmNWNiJyB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBpZDogMyxcclxuICAgICAgICAgICAgICAgIHZpZXc6ICdyZWFyJyxcclxuICAgICAgICAgICAgICAgIGltZzogJ2h0dHBzOi8vczE4LnBvc3RpbWcub3JnLzdmZmduanlydC9jYXJiYWNrLnBuZycsXHJcbiAgICAgICAgICAgICAgICBiZ2NvbG9yOiB7ICdiYWNrZ3JvdW5kLWNvbG9yJzogJyM4NGQ4ZmQnIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIF1cclxuXHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5fbW9kdWxlLnNlcnZpY2UoJ3NpZGVOYXZTZXJ2aWNlJywgU2lkZU5hdlNlcnZpY2UpXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zZXJ2aWNlcy9zaWRlLnNlcnZpY2UuanNcbiAqKi8iLCJpbXBvcnQgX21vZHVsZSBmcm9tICdtb2R1bGUnXHJcbmltcG9ydCBDYXIgZnJvbSAnbW9kZWwvY2FyJ1xyXG5pbXBvcnQgSW1hZ2UgZnJvbSAnbW9kZWwvaW1hZ2UnXHJcbmltcG9ydCBBcmVhIGZyb20gJ21vZGVsL2FyZWEnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDYXJTZXJ2aWNlIHtcclxuXHJcbiAgICBjb25zdHJ1Y3RvciAoKSB7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGdldEFsbCAoKSB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcmV0dXJuIFtcclxuICAgICAgICAgICAgbmV3IENhcihcclxuICAgICAgICAgICAgICAgIG5ldyBJbWFnZSgnaHR0cHM6Ly9zMTgucG9zdGltZy5vcmcvam5oMDZoYW0xL25nY2Fyc2lkZS5wbmcnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2Nhci1zaWRlJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICcjY2FyLW1hcC1zaWRlJyksXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ2Nhci1tYXAtc2lkZScsXHJcbiAgICAgICAgICAgICAgICAgICAgYXJlYXM6IFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmV3IEFyZWEoJ0xGZG9vcicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdMRmRvb3InLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnMjA1LDk0LDE5NSwxMzEsMjA1LDE4NywzNTMsMTgzLDM1MiwxMjQsMzUyLDk3LDM2MCw3NywyNzEsODMnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAncG9seScpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBuZXcgQXJlYSgnTEZ3aGVlbCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdMRndoZWVsJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJzEyNSwxODMsNTMnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnY2lyY2xlJyksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ldyBBcmVhKCdMQndoZWVsJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ0xCd2hlZWwnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnNTIzLDE4MCw0NycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdjaXJjbGUnKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmV3IEFyZWEoJ0xCZG9vcicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdMQmRvb3InLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnMzYyLDc5LDM1Niw5NCwzNTYsMTc4LDQ1MCwxODUsNDc4LDEyNCw0OTcsODYsNDk5LDcxJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3BvbHknKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmV3IEFyZWEoJ0xGd2luZG93JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ0xGd2luZG93JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJzIwMSw4NSwyNTcsNDgsMjk4LDMwLDM2MCwyNCwzNTMsNzMnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAncG9seScpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBuZXcgQXJlYSgnTEJ3aW5kb3cnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnTEJ3aW5kb3cnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnMzc0LDIyLDM2Nyw2OCw1MzYsNjksNTAxLDQ0LDQzNSwyMycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdwb2x5JyksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ldyBBcmVhKCdMRnBhbmVsJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ0xGcGFuZWwnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnNDgsMTMzLDc2LDE0NSwxMDIsMTI4LDEzMSwxMjIsMTUyLDEzMCwxNzEsMTQzLDE4NywxODEsMjAwLDE4MSwxOTIsMTMyLDE5OCw5MywxMzksOTUsOTEsMTAxLDYxLDExOCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdwb2x5JyksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ldyBBcmVhKCdMQnBhbmVsJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ0xCcGFuZWwnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnNDYwLDE3Myw0NzgsMTM2LDUxMywxMjEsNTUyLDEyNCw2MjAsMTE3LDU5OSw5NCw1ODAsNzgsNTQ0LDcyLDUwOCw3MycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdwb2x5JyksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ldyBBcmVhKCdMRmJ1bXBlcicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdMRmJ1bXBlcicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICcxMywxNDksMTAsMTg0LDIxLDE5Myw2MiwyMDAsNjksMTUwLDQ4LDEzOCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdwb2x5JyksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ldyBBcmVhKCdMQmJ1bXBlcicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdMQmJ1bXBlcicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICc1NjEsMTI5LDU4MiwxNjEsNTgyLDE4NCw2NDIsMTY1LDY0NiwxNTMsNjQ1LDEyNSw2MjQsMTE4JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3BvbHknKSxcclxuICAgICAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgICAgICB9LFxyXG5cclxuICAgICAgICAgICAgICAgICdzaWRlJ1xyXG4gICAgICAgICAgICApLFxyXG5cclxuICAgICAgICAgICAgbmV3IENhcihcclxuICAgICAgICAgICAgICAgIG5ldyBJbWFnZSgnaHR0cHM6Ly9zMjEucG9zdGltZy5vcmcvbnZ2dGhwdjUzL25nY2FyZnJvbnQucG5nJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdjYXItZnJvbnQnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJyNjYXItbWFwLWZyb250JyksXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ2Nhci1tYXAtZnJvbnQnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFyZWFzOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ldyBBcmVhKCd3aW5kc2hpZWxkJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3dpbmRzaGllbGQnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnNjcsNjUsNzYsMzgsOTcsMTYsMTgyLDExLDI2NiwxNSwyODYsMzYsMzAwLDY0JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3BvbHknKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmV3IEFyZWEoJ2xlZnRyZWFydmlldycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdsZWZ0cmVhcnZpZXcnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnNTUsNjksNTMsNTIsMjIsNTMsMjQsNjgsNDgsNzYnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAncG9seScpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBuZXcgQXJlYSgncmlnaHRyZWFydmlldycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdyaWdodHJlYXJ2aWV3JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJzMxMyw2NSwzMTYsNTMsMzQ1LDUwLDM0NSw2NSwzMTcsNzQnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAncG9seScpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBuZXcgQXJlYSgnaG9vZCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdob29kJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJzYxLDcyLDM1LDkyLDI4LDExMSw4NiwxMjQsMTIwLDEyOCwyNTAsMTI5LDI4OCwxMjIsMzQwLDExMCwzMjgsODIsMzAyLDcxJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3BvbHknKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmV3IEFyZWEoJ2xlZnRsaWdodCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdsZWZ0bGlnaHQnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnMTUsMTMyLDE3LDEwOSwyNSwxMTQsNzUsMTI4LDkyLDE1NycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdwb2x5JyksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ldyBBcmVhKCdyaWdodGxpZ2h0JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3JpZ2h0bGlnaHQnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnMjc5LDE1MywyODgsMTI1LDM0MCwxMTQsMzUwLDEwNywzNTcsMTMyJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3BvbHknKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmV3IEFyZWEoJ2dyaWxsJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2dyaWxsJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJzExNSwxNTgsMTAxLDEzNSwxMjIsMTM1LDIzOSwxMzQsMjcyLDEzMCwyNTYsMTU2LDE4NSwxNjUnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAncG9seScpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBuZXcgQXJlYSgnZnJvbnRidW1wZXInLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnZnJvbnRidW1wZXInLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnMTEsMTQwLDExOCwxNjgsMjY0LDE2NywzNTcsMTM3LDM1OSwxOTgsMzU0LDIyOCwyODUsMjI5LDkzLDIzMCwxNCwyMjgsOSwxOTAnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAncG9seScpXHJcbiAgICAgICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICAgICAgfSxcclxuXHJcbiAgICAgICAgICAgICAgICAnZnJvbnQnXHJcbiAgICAgICAgICAgIClcclxuICAgICAgICBdXHJcblxyXG4gICAgfVxyXG5cclxufVxyXG5cclxuX21vZHVsZS5zZXJ2aWNlKCdjYXJTZXJ2aWNlJywgQ2FyU2VydmljZSlcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NlcnZpY2VzL2Nhci5zZXJ2aWNlLmpzXG4gKiovIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2FyIHtcclxuXHJcbiAgICBjb25zdHJ1Y3RvciAoaW1hZ2UsIG1hcCwgdmlldykge1xyXG5cclxuICAgICAgICB0aGlzLmltYWdlID0ge1xyXG4gICAgICAgICAgICB1cmw6ICcnLFxyXG4gICAgICAgICAgICBpZDogJycsXHJcbiAgICAgICAgICAgIHVzZW1hcDogJydcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5tYXAgPSB7XHJcbiAgICAgICAgICAgIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICBhcmVhczogW1xyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGFsdDogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGNvb3JkczogW10sXHJcbiAgICAgICAgICAgICAgICAgICAgc2hhcGU6ICcnXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIF1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuY29tcG9uZW50ID0ge31cclxuXHJcbiAgICAgICAgdGhpcy5pbWFnZSA9IGltYWdlXHJcbiAgICAgICAgdGhpcy5tYXAgICA9IG1hcFxyXG4gICAgICAgIHRoaXMudmlldyAgPSB2aWV3XHJcblxyXG4gICAgfVxyXG4gICAgXHJcbn1cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL21vZGVsL2Nhci5qc1xuICoqLyIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIEltYWdlIHtcclxuXHJcbiAgICBjb25zdHJ1Y3RvciAodXJsLCBpZCwgdXNlbWFwKSB7XHJcblxyXG4gICAgICAgIHRoaXMuaWQgICAgID0gaWQsIFxyXG4gICAgICAgIHRoaXMudXJsICAgID0gdXJsLCBcclxuICAgICAgICB0aGlzLnVzZW1hcCA9IHVzZW1hcFxyXG5cclxuICAgIH1cclxuXHJcbn1cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL21vZGVsL2ltYWdlLmpzXG4gKiovIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXJlYSB7XHJcblxyXG4gICAgY29uc3RydWN0b3IgKGFsdCwgdGl0bGUsIGNvb3Jkcywgc2hhcGUpIHtcclxuXHJcbiAgICAgICAgdGhpcy5hbHQgICAgPSBhbHQsXHJcbiAgICAgICAgdGhpcy50aXRsZSAgPSB0aXRsZVxyXG4gICAgICAgIHRoaXMuY29vcmRzID0gY29vcmRzXHJcbiAgICAgICAgdGhpcy5zaGFwZSAgPSBzaGFwZVxyXG5cclxuICAgIH1cclxuICAgIFxyXG59XHJcblxyXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL21vZGVsL2FyZWEuanNcbiAqKi8iLCJpbXBvcnQgX21vZHVsZSBmcm9tICdtb2R1bGUnXHJcbmltcG9ydCBDb21wb25lbnQgZnJvbSAnbW9kZWwvY29tcG9uZW50J1xyXG5pbXBvcnQgU3ViQ29tcG9uZW50IGZyb20gJ21vZGVsL3N1YmNvbXBvbmVudCdcclxuaW1wb3J0IEFjdGlvbiBmcm9tICdtb2RlbC9hY3Rpb24nXHJcbmltcG9ydCBEYW1hZ2VUeXBlIGZyb20gJ21vZGVsL2RhbWFnZVR5cGUnXHJcbmltcG9ydCBtZW1vaXplIGZyb20gJ21lbW9pemVkLWRlY29yYXRvcidcclxuXHJcbmxldCBfJGh0dHBcclxuXHJcbmV4cG9ydCBjbGFzcyBPcmRlckRldGFpbFNlcnZpY2Uge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yICgkaHR0cCkge1xyXG4gICAgICAgIF8kaHR0cCA9ICRodHRwXHJcbiAgICAgICAgdGhpcy5iYXNlVXJsID0gJ2h0dHA6Ly9nZHNndC5uZXQvam9uYXNhJ1xyXG4gICAgfVxyXG5cclxuICAgIGdldENvbXBvbmVudHMgKCkge1xyXG5cclxuICAgICAgICByZXR1cm4gW1xyXG5cclxuICAgICAgICAgICAgbmV3IENvbXBvbmVudCgxLCAnTEZkb29yJywgJ1B1ZXJ0YSBGcm9udGFsJywgW10sIHt9LCB7fSksXHJcbiAgICAgICAgICAgIG5ldyBDb21wb25lbnQoMiwgJ0xCZG9vcicsICdQdWVydGEgVHJhc2VyYScsIFtdLCB7fSwge30pLFxyXG4gICAgICAgICAgICBuZXcgQ29tcG9uZW50KDMsICdMRnBhbmVsJywgJ1BhbmVsIEZyb250YWwnLCBbXSwge30sIHt9KSxcclxuICAgICAgICAgICAgbmV3IENvbXBvbmVudCg0LCAnTEJwYW5lbCcsICdQYW5lbCBUcmFzZXJvJywgW10sIHt9LCB7fSksXHJcbiAgICAgICAgICAgIG5ldyBDb21wb25lbnQoNSwgJ0xGYnVtcGVyJywgJ0J1bXBlciBGcm9udGFsJywgW10sIHt9LCB7fSksXHJcbiAgICAgICAgICAgIG5ldyBDb21wb25lbnQoNiwgJ0xCYnVtcGVyJywgJ0J1bXBlciBUcmFzZXJvJywgW10sIHt9LCB7fSksXHJcbiAgICAgICAgICAgIG5ldyBDb21wb25lbnQoNywgJ0xGd2hlZWwnLCAnTGxhbnRhIEZyb250YWwnLCBbXSwge30sIHt9KSxcclxuICAgICAgICAgICAgbmV3IENvbXBvbmVudCg4LCAnTEJ3aGVlbCcsICdMbGFudGEgVHJhc2VyYScsIFtdLCB7fSwge30pLFxyXG4gICAgICAgICAgICBuZXcgQ29tcG9uZW50KDksICdMRndpbmRvdycsICdWZW50YW5hIEZyb250YWwnLCBbXSwge30sIHt9KSxcclxuICAgICAgICAgICAgbmV3IENvbXBvbmVudCgxMCwgJ0xCd2luZG93JywgJ1ZlbnRhbmEgVHJhc2VyYScsIFtdLCB7fSwge30pLFxyXG4gICAgICAgICAgICBuZXcgQ29tcG9uZW50KDExLCAnd2luZHNoaWVsZCcsICdXaW5kc2hpZWxkJywgW10sIHt9LCB7fSksXHJcbiAgICAgICAgICAgIG5ldyBDb21wb25lbnQoMTIsICdsZWZ0cmVhcnZpZXcnLCAnUmV0cm92aXNvciBJenF1aWVyZG8nLCBbXSwge30sIHt9KSxcclxuICAgICAgICAgICAgbmV3IENvbXBvbmVudCgxMywgJ3JpZ2h0cmVhcnZpZXcnLCAnUmV0cm92aXNvciBEZXJlY2hvJywgW10sIHt9LCB7fSksXHJcbiAgICAgICAgICAgIG5ldyBDb21wb25lbnQoMTQsICdob29kJywgJ0NhcG8nLCBbXSwge30sIHt9KSxcclxuICAgICAgICAgICAgbmV3IENvbXBvbmVudCgxNSwgJ2xlZnRsaWdodCcsICdMdXogSXpxdWllcmRhJywgW10sIHt9LCB7fSksXHJcbiAgICAgICAgICAgIG5ldyBDb21wb25lbnQoMTYsICdyaWdodGxpZ2h0JywgJ0x1eiBEZXJlY2hhJywgW10sIHt9LCB7fSksXHJcbiAgICAgICAgICAgIG5ldyBDb21wb25lbnQoMTcsICdncmlsbCcsICdQYXJyaWxsYScsIFtdLCB7fSwge30pLFxyXG4gICAgICAgICAgICBuZXcgQ29tcG9uZW50KDE4LCAnZnJvbnRidW1wZXInLCAnQnVtcGVyIEZyb250YWwnLCBbXSwge30sIHt9KSxcclxuICAgICAgICBdXHJcblxyXG4gICAgfVxyXG5cclxuICAgIGdldENvbXBvbmVudEJ5QXJlYSAoYXJlYSkge1xyXG5cclxuICAgICAgICBsZXQgY29tcG9uZW50ID1cclxuICAgICAgICAgICAgdGhpcy5nZXRDb21wb25lbnRzKClcclxuICAgICAgICAgICAgICAgIC5maWx0ZXIoKGNvbXBvbmVudCkgPT4geyBcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gY29tcG9uZW50LmFyZWFJZCA9PT0gYXJlYS50aXRsZSBcclxuICAgICAgICAgICAgICAgIH0pWzBdXHJcbiAgICAgICAgICAgICAgICBcclxuXHJcbiAgICAgICAgY29tcG9uZW50LnN1YkNvbXBvbmVudHMgPSBcclxuICAgICAgICAgICAgdGhpcy5nZXRTdWJDb21wb25lbnRzKClcclxuICAgICAgICAgICAgICAgIC5maWx0ZXIoKHN1YkNvbXBvbmVudCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBzdWJDb21wb25lbnQuY29tcG9uZW50SWQgPT09IGNvbXBvbmVudC5pZFxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgIHJldHVybiBjb21wb25lbnRcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIGdldFN1YkNvbXBvbmVudHMgKCkge1xyXG5cclxuICAgICAgICByZXR1cm4gW1xyXG5cclxuICAgICAgICAgICAgbmV3IFN1YkNvbXBvbmVudCgxLCAxLCAnTWFuZ28nKSxcclxuICAgICAgICAgICAgbmV3IFN1YkNvbXBvbmVudCgyLCAxLCAnQ2hhcGEnKSxcclxuICAgICAgICAgICAgbmV3IFN1YkNvbXBvbmVudCgxLCAyLCAnTWFuZ28nKSxcclxuICAgICAgICAgICAgbmV3IFN1YkNvbXBvbmVudCgyLCAyLCAnQ2hhcGEnKSxcclxuICAgICAgICAgICAgbmV3IFN1YkNvbXBvbmVudCgzLCA1LCAnTHV6JyksXHJcbiAgICAgICAgICAgIG5ldyBTdWJDb21wb25lbnQoNCwgNSwgJ0d1YXJkYSBQb2x2bycpLFxyXG4gICAgICAgICAgICBuZXcgU3ViQ29tcG9uZW50KDMsIDYsICdMdXonKSxcclxuICAgICAgICAgICAgbmV3IFN1YkNvbXBvbmVudCg1LCA3LCAnQXJvJyksXHJcbiAgICAgICAgICAgIG5ldyBTdWJDb21wb25lbnQoNSwgOCwgJ0FybycpLFxyXG4gICAgICAgICAgICBuZXcgU3ViQ29tcG9uZW50KDYsIDcsICdQbGF0bycpLFxyXG4gICAgICAgICAgICBuZXcgU3ViQ29tcG9uZW50KDYsIDgsICdQbGF0bycpLFxyXG4gICAgICAgICAgICBuZXcgU3ViQ29tcG9uZW50KDcsIDcsICdDaHVjaG9zJyksXHJcbiAgICAgICAgICAgIG5ldyBTdWJDb21wb25lbnQoNywgOCwgJ0NodWNob3MnKSxcclxuICAgICAgICAgICAgbmV3IFN1YkNvbXBvbmVudCg4LCAxNSwgJ1BpZGUgdmlhcycpLFxyXG4gICAgICAgICAgICBuZXcgU3ViQ29tcG9uZW50KDksIDE1LCAnTHV6JyksXHJcbiAgICAgICAgICAgIG5ldyBTdWJDb21wb25lbnQoOCwgMTYsICdQaWRlIHZpYXMnKSxcclxuICAgICAgICAgICAgbmV3IFN1YkNvbXBvbmVudCg5LCAxNiwgJ0x1eicpLFxyXG4gICAgICAgICAgICBuZXcgU3ViQ29tcG9uZW50KDEwLCAxNywgJ0luc2lnbmEnKSxcclxuICAgICAgICAgICAgbmV3IFN1YkNvbXBvbmVudCgxMSwgMTgsICdQYXJyaWxsYSBJenF1aWVyZGEnKSxcclxuICAgICAgICAgICAgbmV3IFN1YkNvbXBvbmVudCgxMiwgMTgsICdQYXJyaWxsYSBEZXJlY2hhJyksXHJcbiAgICAgICAgICAgIG5ldyBTdWJDb21wb25lbnQoMTMsIDE4LCAnUGFycmlsbGEgQ2VudHJhbCcpLFxyXG4gICAgICAgIF1cclxuXHJcbiAgICB9XHJcblxyXG4gICAgZ2V0RGFtYWdlVHlwZXMgKCkge1xyXG5cclxuICAgICAgICByZXR1cm4gW1xyXG5cclxuICAgICAgICAgICAgbmV3IERhbWFnZVR5cGUoMSwgJ0Rhw7FhZG8nKSxcclxuICAgICAgICAgICAgbmV3IERhbWFnZVR5cGUoMiwgJ0ZhbHRhJyksXHJcbiAgICAgICAgICAgIG5ldyBEYW1hZ2VUeXBlKDMsICdSYXlhZG8nKSxcclxuICAgICAgICAgICAgbmV3IERhbWFnZVR5cGUoNCwgJ090cm8nKVxyXG5cclxuICAgICAgICBdXHJcblxyXG4gICAgfVxyXG5cclxuICAgIGdldEFjdGlvbnMgKCkge1xyXG5cclxuICAgICAgICByZXR1cm4gW1xyXG5cclxuICAgICAgICAgICAgbmV3IEFjdGlvbigxLCAnTmluZ3VuYScpLFxyXG4gICAgICAgICAgICBuZXcgQWN0aW9uKDIsICdSZXZpc2FyJyksXHJcbiAgICAgICAgICAgIG5ldyBBY3Rpb24oMywgJ1JlcGFyYXInKSxcclxuICAgICAgICAgICAgbmV3IEFjdGlvbig0LCAnUGludGFyJyksXHJcbiAgICAgICAgICAgIG5ldyBBY3Rpb24oNSwgJ0NhbWJpYXInKSxcclxuICAgICAgICAgICAgbmV3IEFjdGlvbig2LCAnU2VydmljaW8nKVxyXG4gICAgICAgIF1cclxuXHJcbiAgICB9XHJcbiAgICBcclxuICAgIEBtZW1vaXplXHJcbiAgICBnZXRDYXRlZ29yaWVzICgpIHtcclxuICAgICAgICBjb25zdCB1cmwgPSBgJHt0aGlzLmJhc2VVcmx9JHsnL2NhdGVnb3JpYS9hcGlMaXN0YSd9YFxyXG4gICAgICAgIHJldHVybiBfJGh0dHAuZ2V0KHVybClcclxuICAgIH1cclxuXHJcbiAgICBnZXRCcmFuZHMgKCkge1xyXG4gICAgICAgIGNvbnN0IHVybCA9IGAke3RoaXMuYmFzZVVybH0keycvbWFyY2EvYXBpTGlzdGEnfWBcclxuICAgICAgICByZXR1cm4gXyRodHRwLmdldCh1cmwpXHJcbiAgICB9XHJcblxyXG4gICAgZ2V0QXN5bmNGaWx0ZXJzICgpIHtcclxuICAgICAgICByZXR1cm4gUHJvbWlzZS5hbGwoW3RoaXMuZ2V0Q2F0ZWdvcmllcygpLCB0aGlzLmdldEJyYW5kcygpXSlcclxuICAgIH1cclxuXHJcbiAgICBnZXRNb2RlbEJ5QnJhbmQgKGJyYW5kSWQpIHtcclxuICAgICAgICBjb25zdCB1cmwgPSBgJHt0aGlzLmJhc2VVcmx9JHsnL21vZGVsby9hcGlMaXN0YT8nfSR7J21vZGVsbz0nfSR7YnJhbmRJZH1gXHJcbiAgICAgICAgcmV0dXJuIF8kaHR0cC5nZXQodXJsKVxyXG4gICAgfVxyXG5cclxuICAgIGdldFJlcGxhY2VtZW50cyAoY2F0ZWdvcnlJZCwgYnJhbmRJZCwgbW9kZWxJZCkge1xyXG4gICAgICAgIGNvbnN0IHVybCA9IGAke3RoaXMuYmFzZVVybH0keycvc3RvY2tfcHJvZHVjdG8vYXBpUmVwdWVzdG9QcmVjaW8/J31cclxuICAgICAgICAgICAgJHsnY2F0ZWdvcmlhPSd9JHtjYXRlZ29yeUlkfSR7J21hcmNhPSd9JHticmFuZElkfSR7J21vZGVsbz0nfSR7bW9kZWxJZH1gXHJcbiAgICAgICAgcmV0dXJuIF8kaHR0cC5nZXQodXJsKVxyXG4gICAgfVxyXG5cclxufVxyXG5cclxuX21vZHVsZS5zZXJ2aWNlKCdvcmRlckRldGFpbFNlcnZpY2UnLCBPcmRlckRldGFpbFNlcnZpY2UpXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zZXJ2aWNlcy9vcmRlci5kZXRhaWwuc2VydmljZS5qc1xuICoqLyIsIlxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb21wb25lbnQge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yIChpZCwgYXJlYUlkLCBuYW1lLCBzdWJDb21wb25lbnRzLCBkYW1hZ2VUeXBlLCBhY3Rpb24pIHtcclxuXHJcbiAgICAgICAgdGhpcy5pZCAgICAgICAgICAgICA9IGlkXHJcbiAgICAgICAgdGhpcy5uYW1lICAgICAgICAgICA9IG5hbWVcclxuICAgICAgICB0aGlzLmFyZWFJZCAgICAgICAgID0gYXJlYUlkXHJcbiAgICAgICAgdGhpcy5zdWJDb21wb25lbnRzICA9IHN1YkNvbXBvbmVudHNcclxuICAgICAgICB0aGlzLmRhbWFnZVR5cGUgICAgID0gZGFtYWdlVHlwZVxyXG4gICAgICAgIHRoaXMuYWN0aW9uICAgICAgICAgPSBhY3Rpb25cclxuXHJcbiAgICB9XHJcblxyXG59XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9tb2RlbC9jb21wb25lbnQuanNcbiAqKi8iLCJcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3ViQ29tcG9uZW50IHtcclxuXHJcbiAgICBjb25zdHJ1Y3RvciAoaWQsIGNvbXBvbmVudElkLCBuYW1lKSB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5pZCAgICAgICAgICA9IGlkXHJcbiAgICAgICAgdGhpcy5jb21wb25lbnRJZCA9IGNvbXBvbmVudElkXHJcbiAgICAgICAgdGhpcy5uYW1lICAgICAgICA9IG5hbWVcclxuXHJcbiAgICB9XHJcblxyXG59XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9tb2RlbC9zdWJjb21wb25lbnQuanNcbiAqKi8iLCJcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQWN0aW9uIHtcclxuXHJcbiAgICBjb25zdHJ1Y3RvciAoaWQsIG5hbWUpIHtcclxuICAgICAgICB0aGlzLmlkICAgPSBpZCxcclxuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lXHJcbiAgICB9XHJcblxyXG59XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9tb2RlbC9hY3Rpb24uanNcbiAqKi8iLCJcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGFtYWdlVHlwZSB7XHJcblxyXG4gICAgY29uc3RydWN0b3IgKGlkLCBuYW1lKSB7XHJcbiAgICAgICAgdGhpcy5pZCAgID0gaWQsXHJcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZVxyXG4gICAgfVxyXG5cclxufVxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vbW9kZWwvZGFtYWdlVHlwZS5qc1xuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24odGFyZ2V0LCBrZXksIGRlc2NyaXB0b3IpIHtcbiAgdmFyIGNhY2hlID0ge307XG4gIHZhciBmbiAgICA9IGRlc2NyaXB0b3IudmFsdWU7XG4gIHZhciBjaGFyMCA9IFN0cmluZy5mcm9tQ2hhckNvZGUoMCk7XG5cbiAgZGVzY3JpcHRvci52YWx1ZSA9IGZ1bmN0aW9uKCl7XG4gICAgdmFyIGtleUFyeSA9IFtdO1xuXG4gICAgZm9yIChsZXQgaT0wLCBsPWFyZ3VtZW50cy5sZW5ndGg7IGk8bDsgaSsrKSB7XG4gICAgICBsZXQgYXJnICA9IGFyZ3VtZW50c1tpXTtcbiAgICAgIGxldCB0eXBlID0gdHlwZW9mIGFyZztcblxuICAgICAga2V5QXJ5LnB1c2goXG4gICAgICAgIChhcmcgID09PSBudWxsKSAgICAgICA/IGNoYXIwICsgJ251bGwnICAgICAgOlxuICAgICAgICAoYXJnICA9PT0gdm9pZCAwKSAgICAgPyBjaGFyMCArICd1bmRlZmluZWQnIDpcbiAgICAgICAgKHR5cGUgPT09ICdmdW5jdGlvbicpID8gY2hhcjAgKyBhcmcgICAgICAgICA6XG4gICAgICAgICh0eXBlID09PSAnb2JqZWN0JykgICA/IGNoYXIwICsgSlNPTi5zdHJpbmdpZnkoYXJnKSA6XG4gICAgICAgIGFyZ1xuICAgICAgKTtcbiAgICB9XG5cbiAgICB2YXIga2V5ID0ga2V5QXJ5LmpvaW4oU3RyaW5nLmZyb21DaGFyQ29kZSgwKSk7XG5cbiAgICByZXR1cm4gY2FjaGUuaGFzT3duUHJvcGVydHkoa2V5KSA/IGNhY2hlW2tleV0gOiAoY2FjaGVba2V5XSA9IGZuLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykpO1xuICB9O1xuXG4gIHJldHVybiBkZXNjcmlwdG9yO1xufTtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi4vfi9tZW1vaXplZC1kZWNvcmF0b3IvaW5kZXguanNcbiAqKiBtb2R1bGUgaWQgPSAzMFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiaW1wb3J0IF9tb2R1bGUgZnJvbSAnbW9kdWxlJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgT3B0aW9uRmFjdG9yeSB7XHJcbiAgICBcclxuICAgIGNvbnN0cnVjdG9yIChtb2RlbCkge1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMuaWQgICAgICAgPSBtb2RlbC5pZFxyXG4gICAgICAgIHRoaXMuc2VsZWN0ZWQgPSBtb2RlbC52aWV3ID09PSAnc2lkZSdcclxuICAgICAgICB0aGlzLnZpZXcgICAgID0gbW9kZWwudmlld1xyXG4gICAgICAgIHRoaXMuaW1nICAgICAgPSBtb2RlbC5pbWdcclxuICAgICAgICB0aGlzLmJnY29sb3IgID0gbW9kZWwuYmdjb2xvclxyXG5cclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgZmFjdG9yeSAoKSB7XHJcbiAgICAgICAgcmV0dXJuIChtb2RlbCkgPT4gbmV3IE9wdGlvbkZhY3RvcnkobW9kZWwpXHJcbiAgICB9XHJcbn1cclxuXHJcbl9tb2R1bGUuZmFjdG9yeSgnb3B0aW9uRmFjdG9yeScsIE9wdGlvbkZhY3RvcnkuZmFjdG9yeSlcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL2ZhY3Rvcmllcy9vcHRpb24uZmFjdG9yeS5qc1xuICoqLyIsImltcG9ydCBfbW9kdWxlIGZyb20gJ21vZHVsZSdcclxuXHJcbmxldCBfY2FyU2VydmljZSwgX29yZGVyRGV0YWlsU2VydmljZVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29udGVudEZhY3Rvcnkge1xyXG4gICAgXHJcbiAgICBjb25zdHJ1Y3RvciAoKSB7XHJcbiAgICAgICAgdGhpcy52aWV3ID0gJ2Zyb250J1xyXG4gICAgICAgIHRoaXMubWFwID0gbmV3IE1hcCgpXHJcbiAgICB9XHJcblxyXG4gICAgb25WaWV3Q2hhbmdlIChvcHRpb24pIHtcclxuICAgICAgICB0aGlzLnZpZXcgPSBvcHRpb24udmlld1xyXG4gICAgICAgIHJldHVybiB0aGlzLmZpbHRlckNhckJ5Vmlldyh0aGlzLnZpZXcpXHJcbiAgICB9XHJcblxyXG4gICAgZmlsdGVyQ2FyQnlWaWV3ICh2aWV3KSB7XHJcblxyXG4gICAgICAgIHJldHVybiBfY2FyU2VydmljZVxyXG4gICAgICAgICAgICAgICAgLmdldEFsbCgpXHJcbiAgICAgICAgICAgICAgICAuZmlsdGVyKChjYXIpID0+IHsgXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGNhci52aWV3ID09PSB2aWV3IFxyXG4gICAgICAgICAgICAgICAgfSlbMF1cclxuXHJcbiAgICB9XHJcblxyXG4gICAgbWVtb2l6ZURhdGEgKGNhcikge1xyXG4gICAgICAgIHRoaXMubWFwLnNldChjYXIuY29tcG9uZW50LmlkLCBuZXcgT2JqZWN0KHtcclxuICAgICAgICAgICAgIGNvbXBvbmVudDogY2FyLmNvbXBvbmVudCB9XHJcbiAgICAgICAgKSlcclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLm1hcC5nZXQoY2FyLmNvbXBvbmVudC5pZCkpXHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGZhY3RvcnkgKGNhclNlcnZpY2UsIG9yZGVyRGV0YWlsU2VydmljZSkge1xyXG5cclxuICAgICAgICBfY2FyU2VydmljZSAgICAgICAgID0gY2FyU2VydmljZVxyXG4gICAgICAgIF9vcmRlckRldGFpbFNlcnZpY2UgPSBvcmRlckRldGFpbFNlcnZpY2VcclxuXHJcbiAgICAgICAgcmV0dXJuICgpID0+IG5ldyBDb250ZW50RmFjdG9yeSgpXHJcblxyXG4gICAgfVxyXG59XHJcblxyXG5fbW9kdWxlLmZhY3RvcnkoJ2NvbnRlbnRGYWN0b3J5JywgQ29udGVudEZhY3RvcnkuZmFjdG9yeSlcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL2ZhY3Rvcmllcy9jb250ZW50LmZhY3RvcnkuanNcbiAqKi8iLCJpbXBvcnQgX21vZHVsZSBmcm9tICdtb2R1bGUnXHJcbmltcG9ydCBDYXIgZnJvbSAnbW9kZWwvY2FyJ1xyXG5cclxubGV0IF9jYXJcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENhckZhY3Rvcnkge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yIChjYXIpIHtcclxuICAgICAgICBfY2FyICAgICA9IGNhclxyXG4gICAgICAgIHRoaXMuY2FyID0gX2NhclxyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBmYWN0b3J5IChjYXIpIHtcclxuICAgICAgICByZXR1cm4gKGNhcikgPT4gbmV3IENhckZhY3RvcnkoY2FyKVxyXG4gICAgfVxyXG59XHJcblxyXG5fbW9kdWxlLmZhY3RvcnkoJ2NhckZhY3RvcnknLCBDYXJGYWN0b3J5LmZhY3RvcnkpXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9mYWN0b3JpZXMvY2FyLmZhY3RvcnkuanNcbiAqKi8iXSwic291cmNlUm9vdCI6IiJ9
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	/**
	 * Created by lizeq on 8/22/2016.
	 */
	/// <reference path="./utils/jquery.d.ts" />
	/// <reference path='./system/constant/PlayerConstant.ts'/>
	//css loader
	__webpack_require__(5);
	//class loader
	const PlayerConstant_1 = __webpack_require__(6);
	const KokoroVideoManager_1 = __webpack_require__(7);
	const LeCloudVideoAPI_1 = __webpack_require__(10);
	const PlayerControlEvent_1 = __webpack_require__(8);
	const DateTimeUtils_1 = __webpack_require__(12);
	const KokoroVideoController_1 = __webpack_require__(13);
	class TerminusEstPlayer {
	    constructor(_player_identfication) {
	        this.player_identfication = '';
	        this.player_identfication = _player_identfication;
	        let player = this.getPlayerJQuerySelector();
	        $(player).height(450);
	        $(player).width(800);
	        $(player).addClass(PlayerConstant_1.default.class_player);
	        this.kvm = new KokoroVideoManager_1.default();
	        player.appendChild(this.kvm.element);
	        this.kvc = new KokoroVideoController_1.default();
	        player.appendChild(this.kvc.element);
	        this.addUnitEventListener();
	        console.log(DateTimeUtils_1.default.getDate());
	        console.log(DateTimeUtils_1.default.formatSecond(999999));
	        this.lecloud = new LeCloudVideoAPI_1.default();
	        return this;
	    }
	    loadLeCloudVideo(vu) {
	        this.lecloud.get_video_list_proxy(vu, (data) => {
	            this.changeVideoResolution('超清');
	        });
	    }
	    load(url) {
	        this.kvm.load(url);
	        return this;
	    }
	    /**
	     * 切换视频清晰度.如果不存在则播放器高清.
	     * @param type
	     */
	    changeVideoResolution(type) {
	        let vurl = this.lecloud.getVideoResolutionURL(type);
	        if (vurl) {
	            this.load(vurl);
	            return;
	        }
	        this.changeVideoResolution('高清');
	    }
	    config(obj) {
	        for (var key in obj) {
	            switch (obj[key]) {
	                case 'comment':
	                    break;
	                default:
	            }
	        }
	    }
	    addUnitEventListener() {
	        $(this.getPlayerJQuerySelector()).resize(this.onPlayerResizie);
	        this.getKokoroVideoManager.addEventListener(PlayerControlEvent_1.default.PAUSE, (event) => {
	            console.log(event.type, event.data);
	        });
	        this.getKokoroVideoManager.addEventListener(PlayerControlEvent_1.default.PLAY, (event) => {
	            console.log(event.type, event.data);
	        });
	        this.getKokoroVideoManager.addEventListener(PlayerControlEvent_1.default.VOLUMECHANGE, (event) => {
	            console.log(event.type, event.data);
	        });
	        this.getKokoroVideoManager.addEventListener(PlayerControlEvent_1.default.SEEK, (event) => {
	            console.log(event.type, event.data);
	        });
	        this.getKokoroVideoManager.addEventListener(PlayerControlEvent_1.default.CANPLAY, (event) => {
	            console.log(event.type, event.data);
	        });
	        this.getKokoroVideoManager.addEventListener(PlayerControlEvent_1.default.TIMEUPDATE, (event) => {
	            console.log(event.type, event.data);
	        });
	    }
	    getPlayerJQuerySelector() {
	        return $(this.getPlayerIdentfiacationSelector)[0];
	    }
	    onPlayerResizie() {
	        console.log('onPlayerResize:', $(this.getPlayerJQuerySelector()).width(), $(this.getPlayerJQuerySelector()).height());
	    }
	    get getPlayerIdentfiacationSelector() {
	        return '#' + this.player_identfication + ' ';
	    }
	    get getKokoroVideoManager() {
	        return this.kvm;
	    }
	}
	window['TerminusEstPlayer'] = TerminusEstPlayer;
	//# sourceMappingURL=TerminusEstPlayer.js.map

/***/ },

/***/ null:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(null)();
	// imports


	// module
	exports.push([module.id, ".tep_video{\r\n    /*position: relative;*/\r\n    overflow: hidden;\r\n    width: 100%;\r\n}\r\n\r\n.tep_player{\r\n    position: relative;\r\n}\r\n\r\n.tep_kvc {\r\n    width: 100%;\r\n    height: 70px;\r\n    opacity: .5;\r\n    background-color: #000000;\r\n    position: absolute;\r\n    bottom: 0;\r\n    left: 0;\r\n    right: 0;\r\n    z-index: 10;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n.KokoroPlayerControllerManager {\r\n    position: absolute;\r\n    top: 0;\r\n    bottom: 0;\r\n    left: 0;\r\n    right: 0;\r\n    height: 100%;\r\n    z-index: 12;\r\n}\r\n\r\n\r\n\r\n\r\n/*.TerminusEstPlayer {*/\r\n    /**/\r\n    /*position: relative;*/\r\n    /*overflow: hidden;*/\r\n/*}*/\r\n\r\n.video_content {\r\n    width: 100%;\r\n    height: 100%;\r\n    z-index: 0;\r\n}\r\n\r\n\r\n\r\n\r\n.kpcm_left {\r\n    float: left;\r\n}\r\n\r\n.kpcm_right {\r\n    float: right;\r\n}\r\n\r\n.kpcm_controller {\r\n    position: absolute;\r\n    width: 100%;\r\n    top: 10px;\r\n    height: 30px;\r\n}\r\n\r\n.player_controller_unit {\r\n    display: inline;\r\n    margin-left: 10px;\r\n    margin-right: 10px;\r\n    height: 100%;\r\n    vertical-align: middle;\r\n}\r\n\r\n.progress_bar {\r\n    position: relative;\r\n    width: 100%;\r\n    height: 5px;\r\n    top: 0;\r\n    left: 0;\r\n    background: #2b2b2b;\r\n    opacity: 1;\r\n\r\n}\r\n\r\n.buffer_bar {\r\n    position: absolute;\r\n    height: 5px;\r\n    top: 0;\r\n    background: #ffffff;\r\n    opacity: .8;\r\n\r\n}\r\n\r\n.play_bar {\r\n    position: absolute;\r\n    width: 0;\r\n    height: 5px;\r\n    top: 0;\r\n    left: 0;\r\n    background: #3399ff;\r\n    opacity: .8;\r\n\r\n}\r\n\r\n.play_time {\r\n    padding-top: 7px;\r\n    color: #ffffff;\r\n    user-select: none;\r\n    -webkit-user-select: none;\r\n    -moz-user-select: none;\r\n    -ms-user-select: none;\r\n}\r\n\r\n.VideoMouseMask {\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    width: 100%;\r\n    height: 100%;\r\n}\r\n\r\n.controller_panels {\r\n    position: absolute;\r\n    top: -5px;\r\n}\r\n\r\n.buffer_icon {\r\n    margin-left: -30px;\r\n    margin-top: -30px;\r\n    width: 60px;\r\n    height: 60px;\r\n    top: 50%;\r\n    left: 50%;\r\n}\r\n\r\n.player_controller_button {\r\n    background: url(" + __webpack_require__(null) + ");\r\n    width: 30px;\r\n    height: 30px;\r\n}\r\n\r\n.play_icon {\r\n    position: absolute;\r\n    background-position: -150px -0;\r\n    width: 80px;\r\n    height: 80px;\r\n    bottom: 90px;\r\n    right: 20px;\r\n}\r\n\r\n.fullscreen_button {\r\n    background-position: -90px -0;\r\n}\r\n\r\n.volume_button {\r\n    background-position: -0px -0;\r\n\r\n}\r\n\r\n.comment_button {\r\n    background-position: -30px -30px;\r\n    width: 60px;\r\n\r\n}\r\n\r\n.play_state1 {\r\n    background-position: -0px -60px;\r\n}\r\n\r\n.play_state0 {\r\n    background-position: -30px -60px;\r\n}\r\n\r\n.resolution_button {\r\n    padding-top: 5px;\r\n    user-select: none;\r\n    -webkit-user-select: none;\r\n    -moz-user-select: none;\r\n    -ms-user-select: none;\r\n    width: 35px;\r\n    color: #ffffff;\r\n    background: none;\r\n}\r\n\r\n.resolution_button_item {\r\n    color: #ffffff;\r\n    margin: 10px;\r\n    word-break: keep-all;\r\n    /*width: 30px; */\r\n    -webkit-user-select: none;\r\n    -moz-user-select: none;\r\n    -ms-user-select: none;\r\n}\r\n\r\n.KokoroBaseUnit {\r\n    position: absolute;\r\n    background-color: #000000;\r\n    opacity: .8;\r\n    /*border-radius: 5px;*/\r\n    margin: 0;\r\n    width: auto;\r\n    height: auto;\r\n    bottom: 100%;\r\n\r\n}\r\n\r\n.panel_vector {\r\n    width: 0;\r\n    height: 0;\r\n    top: 4px;\r\n    opacity: .8;\r\n    border-width: 4px 4px 0;\r\n    border-style: solid;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n    border-color: #000000 transparent transparent;\r\n    position: relative;\r\n}\r\n\r\n@-webkit-keyframes uil-default-anim {\r\n    0% {\r\n        opacity: 1\r\n    }\r\n    100% {\r\n        opacity: 0\r\n    }\r\n}\r\n\r\n@keyframes uil-default-anim {\r\n    0% {\r\n        opacity: 1\r\n    }\r\n    100% {\r\n        opacity: 0\r\n    }\r\n}\r\n\r\n.uil-default-css > div:nth-of-type(1) {\r\n    -webkit-animation: uil-default-anim 1s linear infinite;\r\n    animation: uil-default-anim 1s linear infinite;\r\n    -webkit-animation-delay: -0.5s;\r\n    animation-delay: -0.5s;\r\n}\r\n\r\n.uil-default-css {\r\n    position: relative;\r\n    background: none;\r\n    width: 200px;\r\n    height: 200px;\r\n}\r\n\r\n.uil-default-css > div:nth-of-type(2) {\r\n    -webkit-animation: uil-default-anim 1s linear infinite;\r\n    animation: uil-default-anim 1s linear infinite;\r\n    -webkit-animation-delay: -0.4166666666666667s;\r\n    animation-delay: -0.4166666666666667s;\r\n}\r\n\r\n.uil-default-css {\r\n    position: relative;\r\n    background: none;\r\n    width: 200px;\r\n    height: 200px;\r\n}\r\n\r\n.uil-default-css > div:nth-of-type(3) {\r\n    -webkit-animation: uil-default-anim 1s linear infinite;\r\n    animation: uil-default-anim 1s linear infinite;\r\n    -webkit-animation-delay: -0.33333333333333337s;\r\n    animation-delay: -0.33333333333333337s;\r\n}\r\n\r\n.uil-default-css {\r\n    position: relative;\r\n    background: none;\r\n    width: 200px;\r\n    height: 200px;\r\n}\r\n\r\n.uil-default-css > div:nth-of-type(4) {\r\n    -webkit-animation: uil-default-anim 1s linear infinite;\r\n    animation: uil-default-anim 1s linear infinite;\r\n    -webkit-animation-delay: -0.25s;\r\n    animation-delay: -0.25s;\r\n}\r\n\r\n.uil-default-css {\r\n    position: relative;\r\n    background: none;\r\n    width: 200px;\r\n    height: 200px;\r\n}\r\n\r\n.uil-default-css > div:nth-of-type(5) {\r\n    -webkit-animation: uil-default-anim 1s linear infinite;\r\n    animation: uil-default-anim 1s linear infinite;\r\n    -webkit-animation-delay: -0.16666666666666669s;\r\n    animation-delay: -0.16666666666666669s;\r\n}\r\n\r\n.uil-default-css {\r\n    position: relative;\r\n    background: none;\r\n    width: 200px;\r\n    height: 200px;\r\n}\r\n\r\n.uil-default-css > div:nth-of-type(6) {\r\n    -webkit-animation: uil-default-anim 1s linear infinite;\r\n    animation: uil-default-anim 1s linear infinite;\r\n    -webkit-animation-delay: -0.08333333333333331s;\r\n    animation-delay: -0.08333333333333331s;\r\n}\r\n\r\n.uil-default-css {\r\n    position: relative;\r\n    background: none;\r\n    width: 200px;\r\n    height: 200px;\r\n}\r\n\r\n.uil-default-css > div:nth-of-type(7) {\r\n    -webkit-animation: uil-default-anim 1s linear infinite;\r\n    animation: uil-default-anim 1s linear infinite;\r\n    -webkit-animation-delay: 0s;\r\n    animation-delay: 0s;\r\n}\r\n\r\n.uil-default-css {\r\n    position: relative;\r\n    background: none;\r\n    width: 200px;\r\n    height: 200px;\r\n}\r\n\r\n.uil-default-css > div:nth-of-type(8) {\r\n    -webkit-animation: uil-default-anim 1s linear infinite;\r\n    animation: uil-default-anim 1s linear infinite;\r\n    -webkit-animation-delay: 0.08333333333333337s;\r\n    animation-delay: 0.08333333333333337s;\r\n}\r\n\r\n.uil-default-css {\r\n    position: relative;\r\n    background: none;\r\n    width: 200px;\r\n    height: 200px;\r\n}\r\n\r\n.uil-default-css > div:nth-of-type(9) {\r\n    -webkit-animation: uil-default-anim 1s linear infinite;\r\n    animation: uil-default-anim 1s linear infinite;\r\n    -webkit-animation-delay: 0.16666666666666663s;\r\n    animation-delay: 0.16666666666666663s;\r\n}\r\n\r\n.uil-default-css {\r\n    position: relative;\r\n    background: none;\r\n    width: 200px;\r\n    height: 200px;\r\n}\r\n\r\n.uil-default-css > div:nth-of-type(10) {\r\n    -webkit-animation: uil-default-anim 1s linear infinite;\r\n    animation: uil-default-anim 1s linear infinite;\r\n    -webkit-animation-delay: 0.25s;\r\n    animation-delay: 0.25s;\r\n}\r\n\r\n.uil-default-css {\r\n    position: relative;\r\n    background: none;\r\n    width: 200px;\r\n    height: 200px;\r\n}\r\n\r\n.uil-default-css > div:nth-of-type(11) {\r\n    -webkit-animation: uil-default-anim 1s linear infinite;\r\n    animation: uil-default-anim 1s linear infinite;\r\n    -webkit-animation-delay: 0.33333333333333337s;\r\n    animation-delay: 0.33333333333333337s;\r\n}\r\n\r\n.uil-default-css {\r\n    position: relative;\r\n    background: none;\r\n    width: 200px;\r\n    height: 200px;\r\n}\r\n\r\n.uil-default-css > div:nth-of-type(12) {\r\n    -webkit-animation: uil-default-anim 1s linear infinite;\r\n    animation: uil-default-anim 1s linear infinite;\r\n    -webkit-animation-delay: 0.41666666666666663s;\r\n    animation-delay: 0.41666666666666663s;\r\n}\r\n\r\n.uil-default-css {\r\n    position: relative;\r\n    background: none;\r\n    width: 200px;\r\n    height: 200px;\r\n}", ""]);

	// exports


/***/ },

/***/ null:
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

/***/ null:
/***/ function(module, exports) {

	throw new Error('No source available');

/***/ },

/***/ null:
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

/***/ 5:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(null);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(null)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../../../../node_modules/css-loader/index.js!./TerminusEstPlayer.css", function() {
				var newContent = require("!!./../../../../../../node_modules/css-loader/index.js!./TerminusEstPlayer.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 6:
/***/ function(module, exports) {

	"use strict";
	/**
	 * Created by lizeq on 8/22/2016.
	 */
	class PlayerConstant {
	}
	PlayerConstant.prefixed = 'tep_';
	PlayerConstant.class_player = PlayerConstant.prefixed + 'player';
	PlayerConstant.class_video = PlayerConstant.prefixed + 'video';
	PlayerConstant.class_comment = PlayerConstant.prefixed + 'comment';
	PlayerConstant.class_KokoroVideoController = PlayerConstant.prefixed + 'kvc';
	PlayerConstant.class_VideoControlButtonManager = PlayerConstant.prefixed + 'vcbm';
	PlayerConstant.class_videomask = PlayerConstant.prefixed + 'videomask';
	PlayerConstant.class_btn_KokoroStateUI = PlayerConstant.prefixed + 'btn_KokoroStateUI';
	PlayerConstant.class_btn_KokoroUI = PlayerConstant.prefixed + 'btn_KokoroUI';
	PlayerConstant.class_sld_general = PlayerConstant.prefixed + 'sld_general';
	PlayerConstant.class_sld_general_pointer = PlayerConstant.prefixed + 'sld_general_pointer';
	PlayerConstant.class_sld_general_background = PlayerConstant.prefixed + 'sld_general_background';
	PlayerConstant.class_sld_general_buffer = PlayerConstant.prefixed + 'sld_general_buffer';
	PlayerConstant.class_sld_general_play = PlayerConstant.prefixed + 'sld_general_play';
	PlayerConstant.class_sld_general_videojj = PlayerConstant.prefixed + 'sld_general_videojj';
	PlayerConstant.player_videolist = PlayerConstant.prefixed + 'videolist';
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = PlayerConstant;
	//# sourceMappingURL=PlayerConstant.js.map

/***/ },

/***/ 7:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	const PlayerControlEvent_1 = __webpack_require__(8);
	const KokoroBaseUnit_1 = __webpack_require__(9);
	const PlayerConstant_1 = __webpack_require__(6);
	class KokoroVideoManager extends KokoroBaseUnit_1.default {
	    constructor() {
	        super();
	        this.state = KokoroVideoManager.INIT;
	        this._element = document.createElement('video');
	        this._element.className = PlayerConstant_1.default.class_video;
	        this._element.setAttribute('autoplay', false);
	        this.addUIListener(this.element);
	    }
	    addUIListener(video_obj) {
	        video_obj.ontimeupdate = () => {
	            this.dispatchEvent(new PlayerControlEvent_1.default(PlayerControlEvent_1.default.TIMEUPDATE, this.time));
	        };
	        video_obj.onloadeddata = () => {
	            this.dispatchEvent(new PlayerControlEvent_1.default(PlayerControlEvent_1.default.LOADEDDATA, this.time));
	        };
	        video_obj.oncanplay = () => {
	            this.dispatchEvent(new PlayerControlEvent_1.default(PlayerControlEvent_1.default.CANPLAY, this.time));
	        };
	        video_obj.onpause = () => {
	            this.state = KokoroVideoManager.PAUSE;
	            this.dispatchEvent(new PlayerControlEvent_1.default(PlayerControlEvent_1.default.PAUSE, this.time));
	        };
	        video_obj.onplay = () => {
	            this.state = KokoroVideoManager.PLAY;
	            this.dispatchEvent(new PlayerControlEvent_1.default(PlayerControlEvent_1.default.PLAY, this.time));
	        };
	        video_obj.onseeking = () => {
	            this.dispatchEvent(new PlayerControlEvent_1.default(PlayerControlEvent_1.default.SEEK, this.time));
	        };
	        video_obj.onvolumechange = () => {
	            this.dispatchEvent(new PlayerControlEvent_1.default(PlayerControlEvent_1.default.VOLUMECHANGE, this.time));
	        };
	        this.addEventListener('click', (e) => {
	            if (this.state == KokoroVideoManager.PAUSE) {
	                this.play();
	            }
	            else {
	                this.pause();
	            }
	        });
	    }
	    play() {
	        this.element.play();
	    }
	    pause() {
	        this.element.pause();
	    }
	    load(value) {
	        this.element.innerHTML = `<source src=${value}>`;
	        this.element.load();
	    }
	    volume(value) {
	        if (value > 1)
	            value = 1;
	        if (value < 0)
	            value = 0;
	        this.element.volume = value;
	        return value;
	    }
	    get duration() {
	        return this.element.duration;
	    }
	    get time() {
	        return this.element.currentTime;
	    }
	    /**
	     * 返回视频播放的百分比,用于进度条的制作.
	     * @returns {number}
	     */
	    get play_precent() {
	        return this.time / this.duration;
	    }
	    /**
	     * 返回视频buffer长度,可断断续续.
	     * 单位是百分比.
	     * @returns {Array<number>}
	     */
	    get buffer_array() {
	        let arr = [];
	        if (this.duration > 0)
	            for (var i = 0; i < this.element.seekable.length; i++) {
	                let left = this.element.seekable.start(i) / this.duration * 100;
	                let width = (this.element.seekable.end(i) - this.element.seekable.start(i)) / this.duration * 100;
	                arr.push(left, width);
	            }
	        return arr;
	    }
	    /**
	     * 覆盖方法获取element对象改为HTMLVideoElement
	     * @returns {any}
	     */
	    get element() {
	        return this._element;
	    }
	}
	KokoroVideoManager.INIT = 'state_init';
	KokoroVideoManager.PLAY = 'state_play';
	KokoroVideoManager.PAUSE = 'state_pause';
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = KokoroVideoManager;
	//# sourceMappingURL=KokoroVideoManager.js.map

/***/ },

/***/ 8:
/***/ function(module, exports) {

	"use strict";
	/**
	 * Created by lizeq on 8/25/2016.
	 */
	class PlayerControlEvent extends Event {
	    constructor(type, DispatchData = null) {
	        super(type);
	        /** 给设置所使用的 **/
	        this._config_name = '';
	        this.data = DispatchData;
	    }
	    /**
	     * 如果是type是config. 则可以获取该值
	     */
	    get config_name() {
	        return this._config_name == '' ? this.type : this._config_name;
	    }
	    set config_name(value) {
	        this._config_name = value;
	    }
	    get config_data() {
	        return this.data;
	    }
	}
	PlayerControlEvent.CONTROL_PANEL_MOUSEOVER = 'control_panel_mouseover';
	PlayerControlEvent.CONTROL_PANEL_MOUSEOUT = 'control_panel_mouseout';
	/** HTML5专用事件. **/
	PlayerControlEvent.TIMEUPDATE = 'player_timeupdate';
	PlayerControlEvent.LOADEDDATA = 'player_loadeddata';
	PlayerControlEvent.CANPLAY = 'player_canplay';
	PlayerControlEvent.VOLUMECHANGE = 'player_volumechange';
	/** 播放器控制抛出事件. **/
	PlayerControlEvent.PAUSE = "player_pause";
	PlayerControlEvent.PLAY = "player_play";
	PlayerControlEvent.SEEK = "player_seek";
	PlayerControlEvent.RESOLUTION_CHANGE = 'player_resolution_change';
	PlayerControlEvent.SCREEN_TYPE_CHANGE = 'player_screen_type_change';
	/** 弹幕相关事件 **/
	PlayerControlEvent.COMMENT_STYLE_CHANGED = 'comment_style_changed';
	PlayerControlEvent.ADVANCE_COMMENT = 'advance_comment';
	PlayerControlEvent.COMMENT_SUBMIT = 'comment_submit';
	/** 其他通用事件 **/
	PlayerControlEvent.SHARE = 'share';
	PlayerControlEvent.NEXT_VEDIO = 'next_video';
	PlayerControlEvent.ADVANCE_COMMENT_CONFIG = 'advance_comment_config';
	PlayerControlEvent.ADVANCE_CONFIG = 'advance_config';
	PlayerControlEvent.BILIBILI_LOGO = 'bilibili_logo';
	/** 推荐面板 **/
	PlayerControlEvent.RECOMMEND_DING = 'recommend_ding';
	PlayerControlEvent.RECOMMEND_COIN = 'recommend_coin';
	PlayerControlEvent.RECOMMEND_FAVOURITE = 'recommend_favourite';
	/** 播放器控件准备完成 **/
	PlayerControlEvent.READY = 'player_ready';
	/** 播放器关于信息 **/
	PlayerControlEvent.ABOUT_PLAYER = 'about_player';
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = PlayerControlEvent;
	//# sourceMappingURL=PlayerControlEvent.js.map

/***/ },

/***/ 9:
/***/ function(module, exports) {

	"use strict";
	class KokoroBaseUnit {
	    constructor() {
	    }
	    addEventListener(event_type, handler) {
	        this._element.addEventListener(event_type, handler);
	    }
	    removeEventListener(event_type, handler) {
	        this._element.removeEventListener(event_type, handler);
	    }
	    dispatchEvent(e) {
	        this._element.dispatchEvent(e);
	    }
	    display(value) {
	        if (value) {
	            $(this.element).fadeIn();
	        }
	        else {
	            $(this.element).fadeOut();
	        }
	    }
	    get element() {
	        return this._element;
	    }
	    get getJQuerySelector() {
	        return $(this.element);
	    }
	}
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = KokoroBaseUnit;
	//# sourceMappingURL=KokoroBaseUnit.js.map

/***/ },

/***/ 10:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	/**
	 * Created by lizeq on 8/23/2016.
	 */
	/// <reference path="./../utils/jquery.d.ts" />
	const md5_1 = __webpack_require__(11);
	const PlayerConstant_1 = __webpack_require__(6);
	class LeCloudVideoAPI {
	    constructor() {
	        LeCloudVideoAPI.getInstance = this;
	    }
	    get_video_list_proxy(video_unique_id, callback) {
	        this.callback = callback;
	        LeCloudVideoAPI.vu = video_unique_id;
	        $.ajax(LeCloudVideoAPI.LeCloudServerProxy + LeCloudVideoAPI.vu, {
	            error: (what, status, error) => {
	                this.onLoadFailed('loadVideoList from proxy failed!');
	            },
	            success: (data, status, what) => {
	                // callback(data);
	                this._final_data = data;
	                window[PlayerConstant_1.default.player_videolist] = data;
	                this.parse_videolist();
	            },
	        });
	    }
	    get_video_list(video_unique_id, callback) {
	        this.callback = callback;
	        LeCloudVideoAPI.vu = video_unique_id;
	        this.get_timestamp(this.videolist);
	    }
	    /**
	     * 获取乐视云的服务器时间戳. 如果获取失败,则使用本地时间代替.
	     * @param    callback
	     */
	    get_timestamp(callback) {
	        $.ajax(LeCloudVideoAPI.LeCloudServerTimeAPI + '?tn=' + Math.random(), {
	            error: (what, status, error) => {
	                let time = Math.floor(new Date().getTime() / 1000);
	                this.onLoadFailed('load timestamp failed,use localtime:' + time);
	                callback(time);
	            },
	            success: (data, status, what) => {
	                callback(JSON.parse(data)['stime']);
	            },
	        });
	    }
	    get_videolist(time) {
	        let _request_data = {};
	        _request_data.video = LeCloudVideoAPI.vu;
	        _request_data.vtype = 'm3u8';
	        _request_data.ts = time;
	        _request_data.user = LeCloudVideoAPI.api_user;
	        _request_data.sign = LeCloudVideoAPI.getInstance.get_sign(_request_data);
	        $.ajax(LeCloudVideoAPI.LeCloudServerAPI, {
	            error: (what, status, error) => {
	                this.onLoadFailed('getLeCloudVideoList');
	            },
	            success: (data, status, what) => {
	                let obj = JSON.parse(data);
	                if (obj['data'] && obj['data']['video_list']) {
	                    obj = obj['data']['video_list'];
	                    for (var name in obj) {
	                        for (var i = 0; i < LeCloudVideoAPI.need_decode_key.length; i++)
	                            obj[name][LeCloudVideoAPI.need_decode_key[i]] = window.btoa(obj[name][LeCloudVideoAPI.need_decode_key[i]]).toString();
	                        this._final_data.push(obj[name]);
	                    }
	                }
	                else {
	                    console.log(obj);
	                }
	                window[PlayerConstant_1.default.player_videolist] = this._final_data;
	                this.parse_videolist();
	            },
	            data: _request_data,
	        });
	    }
	    parse_videolist() {
	        let video_lists = JSON.parse(this._final_data);
	        if (video_lists) {
	            video_lists = video_lists['data'];
	            if (video_lists) {
	                video_lists = video_lists['video_list'];
	                this.video_list = video_lists;
	                this.callback(this.video_list);
	                return;
	            }
	        }
	        console.log('LeCloudVideoAPI.parse_videolist:failed!', this.data);
	    }
	    /**
	     * 加密方式.弱智级别.毫无疑义.到底是为了防止谁使用?!?!?
	     * @return
	     */
	    get_sign(_request_data) {
	        var temp_arr = [];
	        for (var name in _request_data)
	            temp_arr.push(name + _request_data[name]);
	        temp_arr.sort();
	        return md5_1.default.hashStr(temp_arr.join('') + LeCloudVideoAPI.apr_secret); // .slice(8, 16 + 8);
	    }
	    getVideoResolutionURL(type) {
	        for (let v in this.videolist) {
	            let video_info = this.videolist[v];
	            if (video_info['definition'] == type) {
	                return video_info['main_url'];
	            }
	        }
	        return '';
	    }
	    /**
	     * 返回获取的数据
	     * @returns {any}
	     */
	    get data() {
	        return this._final_data;
	    }
	    /**
	     * 返回解析过的视频数据.
	     * @returns {any}
	     */
	    get videolist() {
	        return this.video_list;
	    }
	    onLoadFailed(msg) {
	        console.log('LeCloudVideoAPI.error:' + msg);
	    }
	}
	LeCloudVideoAPI.LeCloudServerProxy = 'http://bilibili.moe/api/video/VideoAPI.php?api=LeCloudVideo&video_unique=';
	LeCloudVideoAPI.LeCloudServerTimeAPI = 'http://api.letv.com/time';
	LeCloudVideoAPI.LeCloudServerAPI = 'http://api.letvcloud.com/getplayurl.php';
	LeCloudVideoAPI.need_decode_key = ['backup_url_1', 'backup_url_2', 'backup_url_3', 'main_url'];
	LeCloudVideoAPI.api_user = '9a41a0d696';
	LeCloudVideoAPI.apr_secret = 'f596293422b26d65d42c82daae6e0437';
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = LeCloudVideoAPI;
	//# sourceMappingURL=LeCloudVideoAPI.js.map

/***/ },

/***/ 11:
/***/ function(module, exports) {

	/*

	TypeScript Md5
	==============

	Based on work by
	* Joseph Myers: http://www.myersdaily.org/joseph/javascript/md5-text.html
	* André Cruz: https://github.com/satazor/SparkMD5
	* Raymond Hill: https://github.com/gorhill/yamd5.js

	Effectively a TypeScrypt re-write of Raymond Hill JS Library

	The MIT License (MIT)

	Copyright (C) 2014 Raymond Hill

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in
	all copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
	THE SOFTWARE.



	            DO WHAT THE FUCK YOU WANT TO PUBLIC LICENSE
	                    Version 2, December 2004

	 Copyright (C) 2015 André Cruz <amdfcruz@gmail.com>

	 Everyone is permitted to copy and distribute verbatim or modified
	 copies of this license document, and changing it is allowed as long
	 as the name is changed.

	            DO WHAT THE FUCK YOU WANT TO PUBLIC LICENSE
	   TERMS AND CONDITIONS FOR COPYING, DISTRIBUTION AND MODIFICATION

	  0. You just DO WHAT THE FUCK YOU WANT TO.
	  

	*/
	"use strict";
	class Md5 {
	    constructor() {
	        this._state = new Int32Array(4);
	        this._buffer = new ArrayBuffer(68);
	        this._buffer8 = new Uint8Array(this._buffer, 0, 68);
	        this._buffer32 = new Uint32Array(this._buffer, 0, 17);
	        this.start();
	    }
	    // One time hashing functions
	    static hashStr(str, raw = false) {
	        return this.onePassHasher
	            .start()
	            .appendStr(str)
	            .end(raw);
	    }
	    ;
	    static hashAsciiStr(str, raw = false) {
	        return this.onePassHasher
	            .start()
	            .appendAsciiStr(str)
	            .end(raw);
	    }
	    ;
	    start() {
	        this._dataLength = 0;
	        this._bufferLength = 0;
	        this._state.set(Md5.stateIdentity);
	        return this;
	    }
	    // Char to code point to to array conversion:
	    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/charCodeAt
	    // #Example.3A_Fixing_charCodeAt_to_handle_non-Basic-Multilingual-Plane_characters_if_their_presence_earlier_in_the_string_is_unknown
	    appendStr(str) {
	        var buf8 = this._buffer8, buf32 = this._buffer32, bufLen = this._bufferLength, code, i;
	        for (i = 0; i < str.length; i += 1) {
	            code = str.charCodeAt(i);
	            if (code < 128) {
	                buf8[bufLen++] = code;
	            }
	            else if (code < 0x800) {
	                buf8[bufLen++] = (code >>> 6) + 0xC0;
	                buf8[bufLen++] = code & 0x3F | 0x80;
	            }
	            else if (code < 0xD800 || code > 0xDBFF) {
	                buf8[bufLen++] = (code >>> 12) + 0xE0;
	                buf8[bufLen++] = (code >>> 6 & 0x3F) | 0x80;
	                buf8[bufLen++] = (code & 0x3F) | 0x80;
	            }
	            else {
	                code = ((code - 0xD800) * 0x400) + (str.charCodeAt(++i) - 0xDC00) + 0x10000;
	                if (code > 0x10FFFF) {
	                    throw 'Unicode standard supports code points up to U+10FFFF';
	                }
	                buf8[bufLen++] = (code >>> 18) + 0xF0;
	                buf8[bufLen++] = (code >>> 12 & 0x3F) | 0x80;
	                buf8[bufLen++] = (code >>> 6 & 0x3F) | 0x80;
	                buf8[bufLen++] = (code & 0x3F) | 0x80;
	            }
	            if (bufLen >= 64) {
	                this._dataLength += 64;
	                Md5._md5cycle(this._state, buf32);
	                bufLen -= 64;
	                buf32[0] = buf32[16];
	            }
	        }
	        this._bufferLength = bufLen;
	        return this;
	    }
	    appendAsciiStr(str) {
	        var buf8 = this._buffer8, buf32 = this._buffer32, bufLen = this._bufferLength, i, j = 0;
	        for (;;) {
	            i = Math.min(str.length - j, 64 - bufLen);
	            while (i--) {
	                buf8[bufLen++] = str.charCodeAt(j++);
	            }
	            if (bufLen < 64) {
	                break;
	            }
	            this._dataLength += 64;
	            Md5._md5cycle(this._state, buf32);
	            bufLen = 0;
	        }
	        this._bufferLength = bufLen;
	        return this;
	    }
	    appendByteArray(input) {
	        var buf8 = this._buffer8, buf32 = this._buffer32, bufLen = this._bufferLength, i, j = 0;
	        for (;;) {
	            i = Math.min(input.length - j, 64 - bufLen);
	            while (i--) {
	                buf8[bufLen++] = input[j++];
	            }
	            if (bufLen < 64) {
	                break;
	            }
	            this._dataLength += 64;
	            Md5._md5cycle(this._state, buf32);
	            bufLen = 0;
	        }
	        this._bufferLength = bufLen;
	        return this;
	    }
	    getState() {
	        var self = this, s = self._state;
	        return {
	            buffer: String.fromCharCode.apply(null, self._buffer8),
	            buflen: self._bufferLength,
	            length: self._dataLength,
	            state: [s[0], s[1], s[2], s[3]]
	        };
	    }
	    setState(state) {
	        var buf = state.buffer, x = state.state, s = this._state, i;
	        this._dataLength = state.length;
	        this._bufferLength = state.buflen;
	        s[0] = x[0];
	        s[1] = x[1];
	        s[2] = x[2];
	        s[3] = x[3];
	        for (i = 0; i < buf.length; i += 1) {
	            this._buffer8[i] = buf.charCodeAt(i);
	        }
	    }
	    end(raw = false) {
	        var bufLen = this._bufferLength, buf8 = this._buffer8, buf32 = this._buffer32, i = (bufLen >> 2) + 1, dataBitsLen;
	        this._dataLength += bufLen;
	        buf8[bufLen] = 0x80;
	        buf8[bufLen + 1] = buf8[bufLen + 2] = buf8[bufLen + 3] = 0;
	        buf32.set(Md5.buffer32Identity.subarray(i), i);
	        if (bufLen > 55) {
	            Md5._md5cycle(this._state, buf32);
	            buf32.set(Md5.buffer32Identity);
	        }
	        // Do the final computation based on the tail and length
	        // Beware that the final length may not fit in 32 bits so we take care of that
	        dataBitsLen = this._dataLength * 8;
	        if (dataBitsLen <= 0xFFFFFFFF) {
	            buf32[14] = dataBitsLen;
	        }
	        else {
	            var matches = dataBitsLen.toString(16).match(/(.*?)(.{0,8})$/), lo = parseInt(matches[2], 16), hi = parseInt(matches[1], 16) || 0;
	            buf32[14] = lo;
	            buf32[15] = hi;
	        }
	        Md5._md5cycle(this._state, buf32);
	        return raw ? this._state : Md5._hex(this._state);
	    }
	    static _hex(x) {
	        var hc = Md5.hexChars, ho = Md5.hexOut, n, offset, j, i;
	        for (i = 0; i < 4; i += 1) {
	            offset = i * 8;
	            n = x[i];
	            for (j = 0; j < 8; j += 2) {
	                ho[offset + 1 + j] = hc.charAt(n & 0x0F);
	                n >>>= 4;
	                ho[offset + 0 + j] = hc.charAt(n & 0x0F);
	                n >>>= 4;
	            }
	        }
	        return ho.join('');
	    }
	    static _md5cycle(x, k) {
	        var a = x[0], b = x[1], c = x[2], d = x[3];
	        // ff()
	        a += (b & c | ~b & d) + k[0] - 680876936 | 0;
	        a = (a << 7 | a >>> 25) + b | 0;
	        d += (a & b | ~a & c) + k[1] - 389564586 | 0;
	        d = (d << 12 | d >>> 20) + a | 0;
	        c += (d & a | ~d & b) + k[2] + 606105819 | 0;
	        c = (c << 17 | c >>> 15) + d | 0;
	        b += (c & d | ~c & a) + k[3] - 1044525330 | 0;
	        b = (b << 22 | b >>> 10) + c | 0;
	        a += (b & c | ~b & d) + k[4] - 176418897 | 0;
	        a = (a << 7 | a >>> 25) + b | 0;
	        d += (a & b | ~a & c) + k[5] + 1200080426 | 0;
	        d = (d << 12 | d >>> 20) + a | 0;
	        c += (d & a | ~d & b) + k[6] - 1473231341 | 0;
	        c = (c << 17 | c >>> 15) + d | 0;
	        b += (c & d | ~c & a) + k[7] - 45705983 | 0;
	        b = (b << 22 | b >>> 10) + c | 0;
	        a += (b & c | ~b & d) + k[8] + 1770035416 | 0;
	        a = (a << 7 | a >>> 25) + b | 0;
	        d += (a & b | ~a & c) + k[9] - 1958414417 | 0;
	        d = (d << 12 | d >>> 20) + a | 0;
	        c += (d & a | ~d & b) + k[10] - 42063 | 0;
	        c = (c << 17 | c >>> 15) + d | 0;
	        b += (c & d | ~c & a) + k[11] - 1990404162 | 0;
	        b = (b << 22 | b >>> 10) + c | 0;
	        a += (b & c | ~b & d) + k[12] + 1804603682 | 0;
	        a = (a << 7 | a >>> 25) + b | 0;
	        d += (a & b | ~a & c) + k[13] - 40341101 | 0;
	        d = (d << 12 | d >>> 20) + a | 0;
	        c += (d & a | ~d & b) + k[14] - 1502002290 | 0;
	        c = (c << 17 | c >>> 15) + d | 0;
	        b += (c & d | ~c & a) + k[15] + 1236535329 | 0;
	        b = (b << 22 | b >>> 10) + c | 0;
	        // gg()
	        a += (b & d | c & ~d) + k[1] - 165796510 | 0;
	        a = (a << 5 | a >>> 27) + b | 0;
	        d += (a & c | b & ~c) + k[6] - 1069501632 | 0;
	        d = (d << 9 | d >>> 23) + a | 0;
	        c += (d & b | a & ~b) + k[11] + 643717713 | 0;
	        c = (c << 14 | c >>> 18) + d | 0;
	        b += (c & a | d & ~a) + k[0] - 373897302 | 0;
	        b = (b << 20 | b >>> 12) + c | 0;
	        a += (b & d | c & ~d) + k[5] - 701558691 | 0;
	        a = (a << 5 | a >>> 27) + b | 0;
	        d += (a & c | b & ~c) + k[10] + 38016083 | 0;
	        d = (d << 9 | d >>> 23) + a | 0;
	        c += (d & b | a & ~b) + k[15] - 660478335 | 0;
	        c = (c << 14 | c >>> 18) + d | 0;
	        b += (c & a | d & ~a) + k[4] - 405537848 | 0;
	        b = (b << 20 | b >>> 12) + c | 0;
	        a += (b & d | c & ~d) + k[9] + 568446438 | 0;
	        a = (a << 5 | a >>> 27) + b | 0;
	        d += (a & c | b & ~c) + k[14] - 1019803690 | 0;
	        d = (d << 9 | d >>> 23) + a | 0;
	        c += (d & b | a & ~b) + k[3] - 187363961 | 0;
	        c = (c << 14 | c >>> 18) + d | 0;
	        b += (c & a | d & ~a) + k[8] + 1163531501 | 0;
	        b = (b << 20 | b >>> 12) + c | 0;
	        a += (b & d | c & ~d) + k[13] - 1444681467 | 0;
	        a = (a << 5 | a >>> 27) + b | 0;
	        d += (a & c | b & ~c) + k[2] - 51403784 | 0;
	        d = (d << 9 | d >>> 23) + a | 0;
	        c += (d & b | a & ~b) + k[7] + 1735328473 | 0;
	        c = (c << 14 | c >>> 18) + d | 0;
	        b += (c & a | d & ~a) + k[12] - 1926607734 | 0;
	        b = (b << 20 | b >>> 12) + c | 0;
	        // hh()
	        a += (b ^ c ^ d) + k[5] - 378558 | 0;
	        a = (a << 4 | a >>> 28) + b | 0;
	        d += (a ^ b ^ c) + k[8] - 2022574463 | 0;
	        d = (d << 11 | d >>> 21) + a | 0;
	        c += (d ^ a ^ b) + k[11] + 1839030562 | 0;
	        c = (c << 16 | c >>> 16) + d | 0;
	        b += (c ^ d ^ a) + k[14] - 35309556 | 0;
	        b = (b << 23 | b >>> 9) + c | 0;
	        a += (b ^ c ^ d) + k[1] - 1530992060 | 0;
	        a = (a << 4 | a >>> 28) + b | 0;
	        d += (a ^ b ^ c) + k[4] + 1272893353 | 0;
	        d = (d << 11 | d >>> 21) + a | 0;
	        c += (d ^ a ^ b) + k[7] - 155497632 | 0;
	        c = (c << 16 | c >>> 16) + d | 0;
	        b += (c ^ d ^ a) + k[10] - 1094730640 | 0;
	        b = (b << 23 | b >>> 9) + c | 0;
	        a += (b ^ c ^ d) + k[13] + 681279174 | 0;
	        a = (a << 4 | a >>> 28) + b | 0;
	        d += (a ^ b ^ c) + k[0] - 358537222 | 0;
	        d = (d << 11 | d >>> 21) + a | 0;
	        c += (d ^ a ^ b) + k[3] - 722521979 | 0;
	        c = (c << 16 | c >>> 16) + d | 0;
	        b += (c ^ d ^ a) + k[6] + 76029189 | 0;
	        b = (b << 23 | b >>> 9) + c | 0;
	        a += (b ^ c ^ d) + k[9] - 640364487 | 0;
	        a = (a << 4 | a >>> 28) + b | 0;
	        d += (a ^ b ^ c) + k[12] - 421815835 | 0;
	        d = (d << 11 | d >>> 21) + a | 0;
	        c += (d ^ a ^ b) + k[15] + 530742520 | 0;
	        c = (c << 16 | c >>> 16) + d | 0;
	        b += (c ^ d ^ a) + k[2] - 995338651 | 0;
	        b = (b << 23 | b >>> 9) + c | 0;
	        // ii()
	        a += (c ^ (b | ~d)) + k[0] - 198630844 | 0;
	        a = (a << 6 | a >>> 26) + b | 0;
	        d += (b ^ (a | ~c)) + k[7] + 1126891415 | 0;
	        d = (d << 10 | d >>> 22) + a | 0;
	        c += (a ^ (d | ~b)) + k[14] - 1416354905 | 0;
	        c = (c << 15 | c >>> 17) + d | 0;
	        b += (d ^ (c | ~a)) + k[5] - 57434055 | 0;
	        b = (b << 21 | b >>> 11) + c | 0;
	        a += (c ^ (b | ~d)) + k[12] + 1700485571 | 0;
	        a = (a << 6 | a >>> 26) + b | 0;
	        d += (b ^ (a | ~c)) + k[3] - 1894986606 | 0;
	        d = (d << 10 | d >>> 22) + a | 0;
	        c += (a ^ (d | ~b)) + k[10] - 1051523 | 0;
	        c = (c << 15 | c >>> 17) + d | 0;
	        b += (d ^ (c | ~a)) + k[1] - 2054922799 | 0;
	        b = (b << 21 | b >>> 11) + c | 0;
	        a += (c ^ (b | ~d)) + k[8] + 1873313359 | 0;
	        a = (a << 6 | a >>> 26) + b | 0;
	        d += (b ^ (a | ~c)) + k[15] - 30611744 | 0;
	        d = (d << 10 | d >>> 22) + a | 0;
	        c += (a ^ (d | ~b)) + k[6] - 1560198380 | 0;
	        c = (c << 15 | c >>> 17) + d | 0;
	        b += (d ^ (c | ~a)) + k[13] + 1309151649 | 0;
	        b = (b << 21 | b >>> 11) + c | 0;
	        a += (c ^ (b | ~d)) + k[4] - 145523070 | 0;
	        a = (a << 6 | a >>> 26) + b | 0;
	        d += (b ^ (a | ~c)) + k[11] - 1120210379 | 0;
	        d = (d << 10 | d >>> 22) + a | 0;
	        c += (a ^ (d | ~b)) + k[2] + 718787259 | 0;
	        c = (c << 15 | c >>> 17) + d | 0;
	        b += (d ^ (c | ~a)) + k[9] - 343485551 | 0;
	        b = (b << 21 | b >>> 11) + c | 0;
	        x[0] = a + x[0] | 0;
	        x[1] = b + x[1] | 0;
	        x[2] = c + x[2] | 0;
	        x[3] = d + x[3] | 0;
	    }
	}
	Md5.stateIdentity = new Int32Array([1732584193, -271733879, -1732584194, 271733878]);
	Md5.buffer32Identity = new Int32Array([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
	Md5.hexChars = '0123456789abcdef';
	Md5.hexOut = [];
	// Permanent instance is to use for one-call hashing
	Md5.onePassHasher = new Md5();
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = Md5;
	if (Md5.hashStr('hello') !== '5d41402abc4b2a76b9719d911017c592') {
	    console.error('Md5 self test failed.');
	}
	//# sourceMappingURL=md5.js.map

/***/ },

/***/ 12:
/***/ function(module, exports) {

	"use strict";
	/**
	 * Created by lizeq on 8/26/2016.
	 */
	/**
	 * 时间编码组件.
	 * @ori_author 勇一 (TFT)
	 * @author Lizeqiangd
	 * 20141111 增加jwplayer的东西
	 * 20160826 转为HTML TS模式
	 */
	class DateTimeUtils {
	    /**
	     * 判断传入的年份是否为闰年
	     * @param year 传入的年份
	     * @return 返回是否为闰年, true表示闰年
	     */
	    static isLeapYear(year) {
	        if (year % 100 == 0) {
	            if (year % 400 == 0) {
	                return true;
	            }
	            return false;
	        }
	        else {
	            if (year % 4 == 0) {
	                return true;
	            }
	            else {
	                return false;
	            }
	        }
	    }
	    /**
	     * 返回YYYY-MM-DD
	     */
	    static getTime(now = null) {
	        let date = now ? now : new Date();
	        let hour = (date.getHours() > 9) ? date.getHours() : "0" + date.getHours();
	        let minutes = (date.getMinutes() > 9) ? date.getMinutes() : "0" + date.getMinutes();
	        let seconds = (date.getSeconds() > 9) ? date.getSeconds() : "0" + date.getSeconds();
	        return hour + ":" + minutes + ":" + seconds;
	    }
	    /**
	     * HH:MM:SS格式的日期字符串
	     */
	    static getDate(now = null) {
	        let date = now ? now : new Date();
	        let year = date.getFullYear();
	        let month = (date.getMonth() + 1 > 9) ? date.getMonth() + 1 : "0" + (date.getMonth() + 1);
	        let date_s = (date.getDate() > 0) ? date.getDate() : "0" + date.getDate();
	        return year + "-" + month + "-" + date_s;
	    }
	    /**
	     * 当前日期和时间 格式为  yyyy-mm-dd hh:mm:ss
	     */
	    static getDateTime(now = null) {
	        return DateTimeUtils.getDate(now) + " " + DateTimeUtils.getTime(now);
	    }
	    /**
	     * 通过传入的秒数返回MM:SS格式的字符串
	     * @param seconds 秒数的整数值
	     * @return 返回MM:SS格式的时间字符串
	     */
	    static formatSecond(seconds) {
	        let haveplayminite = Math.floor(seconds / 60);
	        let haveplaysecond = Math.floor(Math.floor(seconds) % 60);
	        let haveplayminite_s = haveplayminite.toString();
	        let haveplaysecond_s = haveplaysecond.toString();
	        if (haveplayminite < 10) {
	            haveplayminite_s = "0" + haveplayminite_s;
	        }
	        if (haveplaysecond < 10) {
	            haveplaysecond_s = "0" + haveplaysecond_s;
	        }
	        let out_put = haveplayminite_s + ":" + haveplaysecond_s;
	        return out_put;
	    }
	    /**
	     * 通过传入的毫秒时间,返回MM:SS格式的字符串
	     * @param millisecond 毫秒的整数值
	     * @return 返回MM:SS格式的字符串
	     *
	     */
	    static formatMillisecond(millisecond) {
	        let haveplayminite = Math.floor(millisecond / 60000);
	        let haveplaysecond = Math.floor(Math.floor(millisecond / 1000) % 60);
	        let haveplayminite_s = haveplayminite.toString();
	        let haveplaysecond_s = haveplaysecond.toString();
	        if (haveplayminite < 10) {
	            haveplayminite_s = "0" + haveplayminite.toString();
	        }
	        if (haveplaysecond < 10) {
	            haveplaysecond_s = "0" + haveplaysecond.toString();
	        }
	        let out_put = haveplayminite_s + ":" + haveplaysecond_s;
	        return out_put;
	    }
	    /**
	     * 获取一个通过时间来生成的字符串
	     */
	    static getTimestring() {
	        let date = new Date();
	        let returnStr = date.getFullYear().toString() + date.getMonth().toString() + date.getDate().toString() + date.getHours().toString()
	            + date.getMinutes().toString() + date.getMilliseconds().toString();
	        return returnStr;
	    }
	    /**
	     * 转化一个string格式的时间为秒数 Supported are 00:03:00.1 / 03:00.1 / 180.1s / 3.2m / 3.2h
	     * @param str    The input string. Supported are 00:03:00.1 / 03:00.1 / 180.1s / 3.2m / 3.2h
	     * @return        The number of seconds.
	     **/
	    static seconds(str) {
	        str = str.replace(',', '.');
	        let arr = str.split(':');
	        let sec = 0;
	        if (str.substr(-2) == 'ms') {
	            sec = parseInt(str.substr(0, str.length - 2)) / 1000;
	        }
	        else if (str.substr(-1) == 's') {
	            sec = parseInt(str.substr(0, str.length - 1));
	        }
	        else if (str.substr(-1) == 'm') {
	            sec = parseInt(str.substr(0, str.length - 1)) * 60;
	        }
	        else if (str.substr(-1) == 'h') {
	            sec = parseInt(str.substr(0, str.length - 1)) * 3600;
	        }
	        else if (arr.length > 1) {
	            sec = parseInt(arr[arr.length - 1]);
	            sec += parseInt(arr[arr.length - 2]) * 60;
	            if (arr.length == 3) {
	                sec += parseInt(arr[arr.length - 3]) * 3600;
	            }
	        }
	        else {
	            sec = parseInt(str);
	        }
	        return sec;
	    }
	    /**
	     * 解析传入的YYYY-MM-DD格式的字符串,按照Date对象的方式返回
	     * @param s 输入的字符串对象
	     * @return 返回转换后的Date
	     */
	    static parseDate(s) {
	        let da = s.split("-");
	        return new Date(parseInt(da[0], 10), parseInt(da[1], 10) - 1, parseInt(da[2], 10));
	    }
	    /** Remove white space from before and after a string. **/
	    static trim(s) {
	        return s.replace(/^\s+/, '').replace(/\s+$/, '');
	    }
	}
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = DateTimeUtils;
	//# sourceMappingURL=DateTimeUtils.js.map

/***/ },

/***/ 13:
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Created by lizeq on 8/29/2016.
	 */
	"use strict";
	/// <reference path="./../../utils/jquery.d.ts" />
	const PlayerConstant_1 = __webpack_require__(6);
	const KokoroBaseUnit_1 = __webpack_require__(9);
	const VideoControlButtonManager_1 = __webpack_require__(14);
	class KokoroVideoController extends KokoroBaseUnit_1.default {
	    constructor() {
	        super();
	        this.createElement();
	        this.vcbm = new VideoControlButtonManager_1.default();
	        this.element.appendChild(this.vcbm.element);
	        this.getJQuerySelector.addClass('background');
	    }
	    createElement() {
	        this._element = document.createElement('div');
	        this.element.className = PlayerConstant_1.default.class_KokoroVideoController;
	    }
	}
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = KokoroVideoController;
	//# sourceMappingURL=KokoroVideoController.js.map

/***/ },

/***/ 14:
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Created by lizeq on 8/29/2016.
	 */
	"use strict";
	/// <reference path="./../../utils/jquery.d.ts" />
	const PlayerConstant_1 = __webpack_require__(6);
	const KokoroBaseUnit_1 = __webpack_require__(9);
	class VideoControlButtonManager extends KokoroBaseUnit_1.default {
	    constructor() {
	        super();
	        this.createElement();
	    }
	    createElement() {
	        this._element = document.createElement('div');
	        this.element.className = PlayerConstant_1.default.class_VideoControlButtonManager;
	    }
	}
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = VideoControlButtonManager;
	//# sourceMappingURL=VideoControlButtonManager.js.map

/***/ }

/******/ });.ts" />
	const md5_1 = __webpack_require__(10);
	const PlayerConstant_1 = __webpack_require__(1);
	class LeCloudVideoAPI {
	    constructor() {
	        LeCloudVideoAPI.getInstance = this;
	    }
	    get_video_list_proxy(video_unique_id, callback) {
	        this.callback = callback;
	        LeCloudVideoAPI.vu = video_unique_id;
	        $.ajax(LeCloudVideoAPI.LeCloudServerProxy + LeCloudVideoAPI.vu, {
	            error: (what, status, error) => {
	                this.onLoadFailed('loadVideoList from proxy failed!');
	            },
	            success: (data, status, what) => {
	                // callback(data);
	                this._final_data = data;
	                window[PlayerConstant_1.default.player_videolist] = data;
	                this.parse_videolist();
	            },
	        });
	    }
	    get_video_list(video_unique_id, callback) {
	        this.callback = callback;
	        LeCloudVideoAPI.vu = video_unique_id;
	        this.get_timestamp(this.videolist);
	    }
	    /**
	     * 获取乐视云的服务器时间戳. 如果获取失败,则使用本地时间代替.
	     * @param    callback
	     */
	    get_timestamp(callback) {
	        $.ajax(LeCloudVideoAPI.LeCloudServerTimeAPI + '?tn=' + Math.random(), {
	            error: (what, status, error) => {
	                let time = Math.floor(new Date().getTime() / 1000);
	                this.onLoadFailed('load timestamp failed,use localtime:' + time);
	                callback(time);
	            },
	            success: (data, status, what) => {
	                callback(JSON.parse(data)['stime']);
	            },
	        });
	    }
	    get_videolist(time) {
	        let _request_data = {};
	        _request_data.video = LeCloudVideoAPI.vu;
	        _request_data.vtype = 'm3u8';
	        _request_data.ts = time;
	        _request_data.user = LeCloudVideoAPI.api_user;
	        _request_data.sign = LeCloudVideoAPI.getInstance.get_sign(_request_data);
	        $.ajax(LeCloudVideoAPI.LeCloudServerAPI, {
	            error: (what, status, error) => {
	                this.onLoadFailed('getLeCloudVideoList');
	            },
	            success: (data, status, what) => {
	                let obj = JSON.parse(data);
	                if (obj['data'] && obj['data']['video_list']) {
	                    obj = obj['data']['video_list'];
	                    for (var name in obj) {
	                        for (var i = 0; i < LeCloudVideoAPI.need_decode_key.length; i++)
	                            obj[name][LeCloudVideoAPI.need_decode_key[i]] = window.btoa(obj[name][LeCloudVideoAPI.need_decode_key[i]]).toString();
	                        this._final_data.push(obj[name]);
	                    }
	                }
	                else {
	                    console.log(obj);
	                }
	                window[PlayerConstant_1.default.player_videolist] = this._final_data;
	                this.parse_videolist();
	            },
	            data: _request_data,
	        });
	    }
	    parse_videolist() {
	        let video_lists = JSON.parse(this._final_data);
	        if (video_lists) {
	            video_lists = video_lists['data'];
	            if (video_lists) {
	                video_lists = video_lists['video_list'];
	                this.video_list = video_lists;
	                this.callback(this.video_list);
	                return;
	            }
	        }
	        console.log('LeCloudVideoAPI.parse_videolist:failed!', this.data);
	    }
	    /**
	     * 加密方式.弱智级别.毫无疑义.到底是为了防止谁使用?!?!?
	     * @return
	     */
	    get_sign(_request_data) {
	        var temp_arr = [];
	        for (var name in _request_data)
	            temp_arr.push(name + _request_data[name]);
	        temp_arr.sort();
	        return md5_1.default.hashStr(temp_arr.join('') + LeCloudVideoAPI.apr_secret); // .slice(8, 16 + 8);
	    }
	    getVideoResolutionURL(type) {
	        for (let v in this.videolist) {
	            let video_info = this.videolist[v];
	            if (video_info['definition'] == type) {
	                return video_info['main_url'];
	            }
	        }
	        return '';
	    }
	    /**
	     * 返回获取的数据
	     * @returns {any}
	     */
	    get data() {
	        return this._final_data;
	    }
	    /**
	     * 返回解析过的视频数据.
	     * @returns {any}
	     */
	    get videolist() {
	        return this.video_list;
	    }
	    onLoadFailed(msg) {
	        console.log('LeCloudVideoAPI.error:' + msg);
	    }
	}
	LeCloudVideoAPI.LeCloudServerProxy = 'http://bilibili.moe/api/video/VideoAPI.php?api=LeCloudVideo&video_unique=';
	LeCloudVideoAPI.LeCloudServerTimeAPI = 'http://api.letv.com/time';
	LeCloudVideoAPI.LeCloudServerAPI = 'http://api.letvcloud.com/getplayurl.php';
	LeCloudVideoAPI.need_decode_key = ['backup_url_1', 'backup_url_2', 'backup_url_3', 'main_url'];
	LeCloudVideoAPI.api_user = '9a41a0d696';
	LeCloudVideoAPI.apr_secret = 'f596293422b26d65d42c82daae6e0437';
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = LeCloudVideoAPI;
	//# sourceMappingURL=LeCloudVideoAPI.js.map

/***/ },
/* 9 */
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
/* 10 */
/***/ function(module, exports) {

	/*

	TypeScript Md5
	==============

	Based on work by
	* Joseph Myers: http://www.myersdaily.org/joseph/javascript/md5-text.html
	* André Cruz: https://github.com/satazor/SparkMD5
	* Raymond Hill: https://github.com/gorhill/yamd5.js

	Effectively a TypeScrypt re-write of Raymond Hill JS Library

	The MIT License (MIT)

	Copyright (C) 2014 Raymond Hill

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in
	all copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
	THE SOFTWARE.



	            DO WHAT THE FUCK YOU WANT TO PUBLIC LICENSE
	                    Version 2, December 2004

	 Copyright (C) 2015 André Cruz <amdfcruz@gmail.com>

	 Everyone is permitted to copy and distribute verbatim or modified
	 copies of this license document, and changing it is allowed as long
	 as the name is changed.

	            DO WHAT THE FUCK YOU WANT TO PUBLIC LICENSE
	   TERMS AND CONDITIONS FOR COPYING, DISTRIBUTION AND MODIFICATION

	  0. You just DO WHAT THE FUCK YOU WANT TO.
	  

	*/
	"use strict";
	class Md5 {
	    constructor() {
	        this._state = new Int32Array(4);
	        this._buffer = new ArrayBuffer(68);
	        this._buffer8 = new Uint8Array(this._buffer, 0, 68);
	        this._buffer32 = new Uint32Array(this._buffer, 0, 17);
	        this.start();
	    }
	    // One time hashing functions
	    static hashStr(str, raw = false) {
	        return this.onePassHasher
	            .start()
	            .appendStr(str)
	            .end(raw);
	    }
	    ;
	    static hashAsciiStr(str, raw = false) {
	        return this.onePassHasher
	            .start()
	            .appendAsciiStr(str)
	            .end(raw);
	    }
	    ;
	    start() {
	        this._dataLength = 0;
	        this._bufferLength = 0;
	        this._state.set(Md5.stateIdentity);
	        return this;
	    }
	    // Char to code point to to array conversion:
	    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/charCodeAt
	    // #Example.3A_Fixing_charCodeAt_to_handle_non-Basic-Multilingual-Plane_characters_if_their_presence_earlier_in_the_string_is_unknown
	    appendStr(str) {
	        var buf8 = this._buffer8, buf32 = this._buffer32, bufLen = this._bufferLength, code, i;
	        for (i = 0; i < str.length; i += 1) {
	            code = str.charCodeAt(i);
	            if (code < 128) {
	                buf8[bufLen++] = code;
	            }
	            else if (code < 0x800) {
	                buf8[bufLen++] = (code >>> 6) + 0xC0;
	                buf8[bufLen++] = code & 0x3F | 0x80;
	            }
	            else if (code < 0xD800 || code > 0xDBFF) {
	                buf8[bufLen++] = (code >>> 12) + 0xE0;
	                buf8[bufLen++] = (code >>> 6 & 0x3F) | 0x80;
	                buf8[bufLen++] = (code & 0x3F) | 0x80;
	            }
	            else {
	                code = ((code - 0xD800) * 0x400) + (str.charCodeAt(++i) - 0xDC00) + 0x10000;
	                if (code > 0x10FFFF) {
	                    throw 'Unicode standard supports code points up to U+10FFFF';
	                }
	                buf8[bufLen++] = (code >>> 18) + 0xF0;
	                buf8[bufLen++] = (code >>> 12 & 0x3F) | 0x80;
	                buf8[bufLen++] = (code >>> 6 & 0x3F) | 0x80;
	                buf8[bufLen++] = (code & 0x3F) | 0x80;
	            }
	            if (bufLen >= 64) {
	                this._dataLength += 64;
	                Md5._md5cycle(this._state, buf32);
	                bufLen -= 64;
	                buf32[0] = buf32[16];
	            }
	        }
	        this._bufferLength = bufLen;
	        return this;
	    }
	    appendAsciiStr(str) {
	        var buf8 = this._buffer8, buf32 = this._buffer32, bufLen = this._bufferLength, i, j = 0;
	        for (;;) {
	            i = Math.min(str.length - j, 64 - bufLen);
	            while (i--) {
	                buf8[bufLen++] = str.charCodeAt(j++);
	            }
	            if (bufLen < 64) {
	                break;
	            }
	            this._dataLength += 64;
	            Md5._md5cycle(this._state, buf32);
	            bufLen = 0;
	        }
	        this._bufferLength = bufLen;
	        return this;
	    }
	    appendByteArray(input) {
	        var buf8 = this._buffer8, buf32 = this._buffer32, bufLen = this._bufferLength, i, j = 0;
	        for (;;) {
	            i = Math.min(input.length - j, 64 - bufLen);
	            while (i--) {
	                buf8[bufLen++] = input[j++];
	            }
	            if (bufLen < 64) {
	                break;
	            }
	            this._dataLength += 64;
	            Md5._md5cycle(this._state, buf32);
	            bufLen = 0;
	        }
	        this._bufferLength = bufLen;
	        return this;
	    }
	    getState() {
	        var self = this, s = self._state;
	        return {
	            buffer: String.fromCharCode.apply(null, self._buffer8),
	            buflen: self._bufferLength,
	            length: self._dataLength,
	            state: [s[0], s[1], s[2], s[3]]
	        };
	    }
	    setState(state) {
	        var buf = state.buffer, x = state.state, s = this._state, i;
	        this._dataLength = state.length;
	        this._bufferLength = state.buflen;
	        s[0] = x[0];
	        s[1] = x[1];
	        s[2] = x[2];
	        s[3] = x[3];
	        for (i = 0; i < buf.length; i += 1) {
	            this._buffer8[i] = buf.charCodeAt(i);
	        }
	    }
	    end(raw = false) {
	        var bufLen = this._bufferLength, buf8 = this._buffer8, buf32 = this._buffer32, i = (bufLen >> 2) + 1, dataBitsLen;
	        this._dataLength += bufLen;
	        buf8[bufLen] = 0x80;
	        buf8[bufLen + 1] = buf8[bufLen + 2] = buf8[bufLen + 3] = 0;
	        buf32.set(Md5.buffer32Identity.subarray(i), i);
	        if (bufLen > 55) {
	            Md5._md5cycle(this._state, buf32);
	            buf32.set(Md5.buffer32Identity);
	        }
	        // Do the final computation based on the tail and length
	        // Beware that the final length may not fit in 32 bits so we take care of that
	        dataBitsLen = this._dataLength * 8;
	        if (dataBitsLen <= 0xFFFFFFFF) {
	            buf32[14] = dataBitsLen;
	        }
	        else {
	            var matches = dataBitsLen.toString(16).match(/(.*?)(.{0,8})$/), lo = parseInt(matches[2], 16), hi = parseInt(matches[1], 16) || 0;
	            buf32[14] = lo;
	            buf32[15] = hi;
	        }
	        Md5._md5cycle(this._state, buf32);
	        return raw ? this._state : Md5._hex(this._state);
	    }
	    static _hex(x) {
	        var hc = Md5.hexChars, ho = Md5.hexOut, n, offset, j, i;
	        for (i = 0; i < 4; i += 1) {
	            offset = i * 8;
	            n = x[i];
	            for (j = 0; j < 8; j += 2) {
	                ho[offset + 1 + j] = hc.charAt(n & 0x0F);
	                n >>>= 4;
	                ho[offset + 0 + j] = hc.charAt(n & 0x0F);
	                n >>>= 4;
	            }
	        }
	        return ho.join('');
	    }
	    static _md5cycle(x, k) {
	        var a = x[0], b = x[1], c = x[2], d = x[3];
	        // ff()
	        a += (b & c | ~b & d) + k[0] - 680876936 | 0;
	        a = (a << 7 | a >>> 25) + b | 0;
	        d += (a & b | ~a & c) + k[1] - 389564586 | 0;
	        d = (d << 12 | d >>> 20) + a | 0;
	        c += (d & a | ~d & b) + k[2] + 606105819 | 0;
	        c = (c << 17 | c >>> 15) + d | 0;
	        b += (c & d | ~c & a) + k[3] - 1044525330 | 0;
	        b = (b << 22 | b >>> 10) + c | 0;
	        a += (b & c | ~b & d) + k[4] - 176418897 | 0;
	        a = (a << 7 | a >>> 25) + b | 0;
	        d += (a & b | ~a & c) + k[5] + 1200080426 | 0;
	        d = (d << 12 | d >>> 20) + a | 0;
	        c += (d & a | ~d & b) + k[6] - 1473231341 | 0;
	        c = (c << 17 | c >>> 15) + d | 0;
	        b += (c & d | ~c & a) + k[7] - 45705983 | 0;
	        b = (b << 22 | b >>> 10) + c | 0;
	        a += (b & c | ~b & d) + k[8] + 1770035416 | 0;
	        a = (a << 7 | a >>> 25) + b | 0;
	        d += (a & b | ~a & c) + k[9] - 1958414417 | 0;
	        d = (d << 12 | d >>> 20) + a | 0;
	        c += (d & a | ~d & b) + k[10] - 42063 | 0;
	        c = (c << 17 | c >>> 15) + d | 0;
	        b += (c & d | ~c & a) + k[11] - 1990404162 | 0;
	        b = (b << 22 | b >>> 10) + c | 0;
	        a += (b & c | ~b & d) + k[12] + 1804603682 | 0;
	        a = (a << 7 | a >>> 25) + b | 0;
	        d += (a & b | ~a & c) + k[13] - 40341101 | 0;
	        d = (d << 12 | d >>> 20) + a | 0;
	        c += (d & a | ~d & b) + k[14] - 1502002290 | 0;
	        c = (c << 17 | c >>> 15) + d | 0;
	        b += (c & d | ~c & a) + k[15] + 1236535329 | 0;
	        b = (b << 22 | b >>> 10) + c | 0;
	        // gg()
	        a += (b & d | c & ~d) + k[1] - 165796510 | 0;
	        a = (a << 5 | a >>> 27) + b | 0;
	        d += (a & c | b & ~c) + k[6] - 1069501632 | 0;
	        d = (d << 9 | d >>> 23) + a | 0;
	        c += (d & b | a & ~b) + k[11] + 643717713 | 0;
	        c = (c << 14 | c >>> 18) + d | 0;
	        b += (c & a | d & ~a) + k[0] - 373897302 | 0;
	        b = (b << 20 | b >>> 12) + c | 0;
	        a += (b & d | c & ~d) + k[5] - 701558691 | 0;
	        a = (a << 5 | a >>> 27) + b | 0;
	        d += (a & c | b & ~c) + k[10] + 38016083 | 0;
	        d = (d << 9 | d >>> 23) + a | 0;
	        c += (d & b | a & ~b) + k[15] - 660478335 | 0;
	        c = (c << 14 | c >>> 18) + d | 0;
	        b += (c & a | d & ~a) + k[4] - 405537848 | 0;
	        b = (b << 20 | b >>> 12) + c | 0;
	        a += (b & d | c & ~d) + k[9] + 568446438 | 0;
	        a = (a << 5 | a >>> 27) + b | 0;
	        d += (a & c | b & ~c) + k[14] - 1019803690 | 0;
	        d = (d << 9 | d >>> 23) + a | 0;
	        c += (d & b | a & ~b) + k[3] - 187363961 | 0;
	        c = (c << 14 | c >>> 18) + d | 0;
	        b += (c & a | d & ~a) + k[8] + 1163531501 | 0;
	        b = (b << 20 | b >>> 12) + c | 0;
	        a += (b & d | c & ~d) + k[13] - 1444681467 | 0;
	        a = (a << 5 | a >>> 27) + b | 0;
	        d += (a & c | b & ~c) + k[2] - 51403784 | 0;
	        d = (d << 9 | d >>> 23) + a | 0;
	        c += (d & b | a & ~b) + k[7] + 1735328473 | 0;
	        c = (c << 14 | c >>> 18) + d | 0;
	        b += (c & a | d & ~a) + k[12] - 1926607734 | 0;
	        b = (b << 20 | b >>> 12) + c | 0;
	        // hh()
	        a += (b ^ c ^ d) + k[5] - 378558 | 0;
	        a = (a << 4 | a >>> 28) + b | 0;
	        d += (a ^ b ^ c) + k[8] - 2022574463 | 0;
	        d = (d << 11 | d >>> 21) + a | 0;
	        c += (d ^ a ^ b) + k[11] + 1839030562 | 0;
	        c = (c << 16 | c >>> 16) + d | 0;
	        b += (c ^ d ^ a) + k[14] - 35309556 | 0;
	        b = (b << 23 | b >>> 9) + c | 0;
	        a += (b ^ c ^ d) + k[1] - 1530992060 | 0;
	        a = (a << 4 | a >>> 28) + b | 0;
	        d += (a ^ b ^ c) + k[4] + 1272893353 | 0;
	        d = (d << 11 | d >>> 21) + a | 0;
	        c += (d ^ a ^ b) + k[7] - 155497632 | 0;
	        c = (c << 16 | c >>> 16) + d | 0;
	        b += (c ^ d ^ a) + k[10] - 1094730640 | 0;
	        b = (b << 23 | b >>> 9) + c | 0;
	        a += (b ^ c ^ d) + k[13] + 681279174 | 0;
	        a = (a << 4 | a >>> 28) + b | 0;
	        d += (a ^ b ^ c) + k[0] - 358537222 | 0;
	        d = (d << 11 | d >>> 21) + a | 0;
	        c += (d ^ a ^ b) + k[3] - 722521979 | 0;
	        c = (c << 16 | c >>> 16) + d | 0;
	        b += (c ^ d ^ a) + k[6] + 76029189 | 0;
	        b = (b << 23 | b >>> 9) + c | 0;
	        a += (b ^ c ^ d) + k[9] - 640364487 | 0;
	        a = (a << 4 | a >>> 28) + b | 0;
	        d += (a ^ b ^ c) + k[12] - 421815835 | 0;
	        d = (d << 11 | d >>> 21) + a | 0;
	        c += (d ^ a ^ b) + k[15] + 530742520 | 0;
	        c = (c << 16 | c >>> 16) + d | 0;
	        b += (c ^ d ^ a) + k[2] - 995338651 | 0;
	        b = (b << 23 | b >>> 9) + c | 0;
	        // ii()
	        a += (c ^ (b | ~d)) + k[0] - 198630844 | 0;
	        a = (a << 6 | a >>> 26) + b | 0;
	        d += (b ^ (a | ~c)) + k[7] + 1126891415 | 0;
	        d = (d << 10 | d >>> 22) + a | 0;
	        c += (a ^ (d | ~b)) + k[14] - 1416354905 | 0;
	        c = (c << 15 | c >>> 17) + d | 0;
	        b += (d ^ (c | ~a)) + k[5] - 57434055 | 0;
	        b = (b << 21 | b >>> 11) + c | 0;
	        a += (c ^ (b | ~d)) + k[12] + 1700485571 | 0;
	        a = (a << 6 | a >>> 26) + b | 0;
	        d += (b ^ (a | ~c)) + k[3] - 1894986606 | 0;
	        d = (d << 10 | d >>> 22) + a | 0;
	        c += (a ^ (d | ~b)) + k[10] - 1051523 | 0;
	        c = (c << 15 | c >>> 17) + d | 0;
	        b += (d ^ (c | ~a)) + k[1] - 2054922799 | 0;
	        b = (b << 21 | b >>> 11) + c | 0;
	        a += (c ^ (b | ~d)) + k[8] + 1873313359 | 0;
	        a = (a << 6 | a >>> 26) + b | 0;
	        d += (b ^ (a | ~c)) + k[15] - 30611744 | 0;
	        d = (d << 10 | d >>> 22) + a | 0;
	        c += (a ^ (d | ~b)) + k[6] - 1560198380 | 0;
	        c = (c << 15 | c >>> 17) + d | 0;
	        b += (d ^ (c | ~a)) + k[13] + 1309151649 | 0;
	        b = (b << 21 | b >>> 11) + c | 0;
	        a += (c ^ (b | ~d)) + k[4] - 145523070 | 0;
	        a = (a << 6 | a >>> 26) + b | 0;
	        d += (b ^ (a | ~c)) + k[11] - 1120210379 | 0;
	        d = (d << 10 | d >>> 22) + a | 0;
	        c += (a ^ (d | ~b)) + k[2] + 718787259 | 0;
	        c = (c << 15 | c >>> 17) + d | 0;
	        b += (d ^ (c | ~a)) + k[9] - 343485551 | 0;
	        b = (b << 21 | b >>> 11) + c | 0;
	        x[0] = a + x[0] | 0;
	        x[1] = b + x[1] | 0;
	        x[2] = c + x[2] | 0;
	        x[3] = d + x[3] | 0;
	    }
	}
	Md5.stateIdentity = new Int32Array([1732584193, -271733879, -1732584194, 271733878]);
	Md5.buffer32Identity = new Int32Array([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
	Md5.hexChars = '0123456789abcdef';
	Md5.hexOut = [];
	// Permanent instance is to use for one-call hashing
	Md5.onePassHasher = new Md5();
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = Md5;
	if (Md5.hashStr('hello') !== '5d41402abc4b2a76b9719d911017c592') {
	    console.error('Md5 self test failed.');
	}
	//# sourceMappingURL=md5.js.map

/***/ },
/* 11 */
/***/ function(module, exports) {

	"use strict";
	/**
	 * Created by lizeq on 8/26/2016.
	 */
	/**
	 * 时间编码组件.
	 * @ori_author 勇一 (TFT)
	 * @author Lizeqiangd
	 * 20141111 增加jwplayer的东西
	 * 20160826 转为HTML TS模式
	 */
	class DateTimeUtils {
	    /**
	     * 判断传入的年份是否为闰年
	     * @param year 传入的年份
	     * @return 返回是否为闰年, true表示闰年
	     */
	    static isLeapYear(year) {
	        if (year % 100 == 0) {
	            if (year % 400 == 0) {
	                return true;
	            }
	            return false;
	        }
	        else {
	            if (year % 4 == 0) {
	                return true;
	            }
	            else {
	                return false;
	            }
	        }
	    }
	    /**
	     * 返回YYYY-MM-DD
	     */
	    static getTime(now = null) {
	        let date = now ? now : new Date();
	        let hour = (date.getHours() > 9) ? date.getHours() : "0" + date.getHours();
	        let minutes = (date.getMinutes() > 9) ? date.getMinutes() : "0" + date.getMinutes();
	        let seconds = (date.getSeconds() > 9) ? date.getSeconds() : "0" + date.getSeconds();
	        return hour + ":" + minutes + ":" + seconds;
	    }
	    /**
	     * HH:MM:SS格式的日期字符串
	     */
	    static getDate(now = null) {
	        let date = now ? now : new Date();
	        let year = date.getFullYear();
	        let month = (date.getMonth() + 1 > 9) ? date.getMonth() + 1 : "0" + (date.getMonth() + 1);
	        let date_s = (date.getDate() > 0) ? date.getDate() : "0" + date.getDate();
	        return year + "-" + month + "-" + date_s;
	    }
	    /**
	     * 当前日期和时间 格式为  yyyy-mm-dd hh:mm:ss
	     */
	    static getDateTime(now = null) {
	        return DateTimeUtils.getDate(now) + " " + DateTimeUtils.getTime(now);
	    }
	    /**
	     * 通过传入的秒数返回MM:SS格式的字符串
	     * @param seconds 秒数的整数值
	     * @return 返回MM:SS格式的时间字符串
	     */
	    static formatSecond(seconds) {
	        let haveplayminite = Math.floor(seconds / 60);
	        let haveplaysecond = Math.floor(Math.floor(seconds) % 60);
	        let haveplayminite_s = haveplayminite.toString();
	        let haveplaysecond_s = haveplaysecond.toString();
	        if (haveplayminite < 10) {
	            haveplayminite_s = "0" + haveplayminite_s;
	        }
	        if (haveplaysecond < 10) {
	            haveplaysecond_s = "0" + haveplaysecond_s;
	        }
	        let out_put = haveplayminite_s + ":" + haveplaysecond_s;
	        return out_put;
	    }
	    /**
	     * 通过传入的毫秒时间,返回MM:SS格式的字符串
	     * @param millisecond 毫秒的整数值
	     * @return 返回MM:SS格式的字符串
	     *
	     */
	    static formatMillisecond(millisecond) {
	        let haveplayminite = Math.floor(millisecond / 60000);
	        let haveplaysecond = Math.floor(Math.floor(millisecond / 1000) % 60);
	        let haveplayminite_s = haveplayminite.toString();
	        let haveplaysecond_s = haveplaysecond.toString();
	        if (haveplayminite < 10) {
	            haveplayminite_s = "0" + haveplayminite.toString();
	        }
	        if (haveplaysecond < 10) {
	            haveplaysecond_s = "0" + haveplaysecond.toString();
	        }
	        let out_put = haveplayminite_s + ":" + haveplaysecond_s;
	        return out_put;
	    }
	    /**
	     * 获取一个通过时间来生成的字符串
	     */
	    static getTimestring() {
	        let date = new Date();
	        let returnStr = date.getFullYear().toString() + date.getMonth().toString() + date.getDate().toString() + date.getHours().toString()
	            + date.getMinutes().toString() + date.getMilliseconds().toString();
	        return returnStr;
	    }
	    /**
	     * 转化一个string格式的时间为秒数 Supported are 00:03:00.1 / 03:00.1 / 180.1s / 3.2m / 3.2h
	     * @param str    The input string. Supported are 00:03:00.1 / 03:00.1 / 180.1s / 3.2m / 3.2h
	     * @return        The number of seconds.
	     **/
	    static seconds(str) {
	        str = str.replace(',', '.');
	        let arr = str.split(':');
	        let sec = 0;
	        if (str.substr(-2) == 'ms') {
	            sec = parseInt(str.substr(0, str.length - 2)) / 1000;
	        }
	        else if (str.substr(-1) == 's') {
	            sec = parseInt(str.substr(0, str.length - 1));
	        }
	        else if (str.substr(-1) == 'm') {
	            sec = parseInt(str.substr(0, str.length - 1)) * 60;
	        }
	        else if (str.substr(-1) == 'h') {
	            sec = parseInt(str.substr(0, str.length - 1)) * 3600;
	        }
	        else if (arr.length > 1) {
	            sec = parseInt(arr[arr.length - 1]);
	            sec += parseInt(arr[arr.length - 2]) * 60;
	            if (arr.length == 3) {
	                sec += parseInt(arr[arr.length - 3]) * 3600;
	            }
	        }
	        else {
	            sec = parseInt(str);
	        }
	        return sec;
	    }
	    /**
	     * 解析传入的YYYY-MM-DD格式的字符串,按照Date对象的方式返回
	     * @param s 输入的字符串对象
	     * @return 返回转换后的Date
	     */
	    static parseDate(s) {
	        let da = s.split("-");
	        return new Date(parseInt(da[0], 10), parseInt(da[1], 10) - 1, parseInt(da[2], 10));
	    }
	    /** Remove white space from before and after a string. **/
	    static trim(s) {
	        return s.replace(/^\s+/, '').replace(/\s+$/, '');
	    }
	}
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = DateTimeUtils;
	//# sourceMappingURL=DateTimeUtils.js.map

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Created by lizeq on 8/29/2016.
	 */
	"use strict";
	/// <reference path="./../../utils/jquery.d.ts" />
	const PlayerConstant_1 = __webpack_require__(1);
	const KokoroBaseUnit_1 = __webpack_require__(6);
	const VideoControlButtonManager_1 = __webpack_require__(13);
	class KokoroVideoController extends KokoroBaseUnit_1.default {
	    constructor() {
	        super();
	        this.createElement();
	        this.vcbm = new VideoControlButtonManager_1.default();
	        this.element.appendChild(this.vcbm.element);
	        this.getJQuerySelector.addClass('background');
	    }
	    createElement() {
	        this._element = document.createElement('div');
	        this.element.className = PlayerConstant_1.default.class_KokoroVideoController;
	    }
	}
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = KokoroVideoController;
	//# sourceMappingURL=KokoroVideoController.js.map

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Created by lizeq on 8/29/2016.
	 */
	"use strict";
	/// <reference path="./../../utils/jquery.d.ts" />
	const PlayerConstant_1 = __webpack_require__(1);
	const KokoroBaseUnit_1 = __webpack_require__(6);
	class VideoControlButtonManager extends KokoroBaseUnit_1.default {
	    constructor() {
	        super();
	        this.createElement();
	    }
	    createElement() {
	        this._element = document.createElement('div');
	        this.element.className = PlayerConstant_1.default.class_VideoControlButtonManager;
	    }
	}
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = VideoControlButtonManager;
	//# sourceMappingURL=VideoControlButtonManager.js.map

/***/ }
/******/ ]);
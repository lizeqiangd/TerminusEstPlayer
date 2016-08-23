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
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Created by lizeq on 8/22/2016.
	 */
	/// <reference path="./utils/jquery.d.ts" />
	/// <reference path='./constant/PlayerConstant.ts'/>
	"use strict";
	var PlayerConstant_1 = __webpack_require__(1);
	var KokoroVideoManager_1 = __webpack_require__(2);
	var TerminusEstPlayer = (function () {
	    function TerminusEstPlayer(_player_identfication) {
	        this.player_identfication = '';
	        this.player_identfication = _player_identfication;
	        this.createPlayerElements();
	        this.kvm = new KokoroVideoManager_1.default(this.getPlayerVideoHTMLElement(), this.onVideoCallback);
	        this.addUnitEventListener();
	        $(this.getPlayerIdentfiacationSelector).height(450);
	        $(this.getPlayerIdentfiacationSelector).width(800);
	        return this;
	    }
	    TerminusEstPlayer.prototype.load = function (url) {
	        this.kvm.load(url);
	        return this;
	    };
	    TerminusEstPlayer.prototype.config = function (obj) {
	        for (var key in obj) {
	            switch (obj[key]) {
	                case 'comment':
	                    break;
	                default:
	            }
	        }
	    };
	    TerminusEstPlayer.prototype.createPlayerElements = function () {
	        var player = this.getPlayerJQuerySelector();
	        player.innerHTML += "<video class=" + PlayerConstant_1.default.class_video + " autoplay=\"false\"></video>";
	        player.innerHTML += "<div class=" + PlayerConstant_1.default.class_comment + "></div>";
	        player.innerHTML += "<div class=" + PlayerConstant_1.default.class_control + "></div>";
	    };
	    TerminusEstPlayer.prototype.getPlayerJQuerySelector = function () {
	        return $(this.getPlayerIdentfiacationSelector)[0];
	    };
	    TerminusEstPlayer.prototype.getPlayerVideoHTMLElement = function () {
	        return $(this.getPlayerIdentfiacationSelector + (" ." + PlayerConstant_1.default.class_video))[0];
	    };
	    TerminusEstPlayer.prototype.addUnitEventListener = function () {
	        $(window).resize(this.onStageResize);
	    };
	    TerminusEstPlayer.prototype.onVideoCallback = function (event_type) {
	        switch (event_type) {
	            case KokoroVideoManager_1.default.EVENT_VOLUMECHANGE:
	                break;
	            case KokoroVideoManager_1.default.EVENT_CANPLAY:
	                break;
	            case KokoroVideoManager_1.default.EVENT_LOADEDDATA:
	                break;
	            case KokoroVideoManager_1.default.EVENT_SEEKING:
	                break;
	            case KokoroVideoManager_1.default.EVENT_TIMEUPDATE:
	                break;
	            case KokoroVideoManager_1.default.EVENT_PLAY:
	                break;
	            case KokoroVideoManager_1.default.EVENT_PAUSE:
	                break;
	        }
	    };
	    TerminusEstPlayer.prototype.onStageResize = function () {
	    };
	    Object.defineProperty(TerminusEstPlayer.prototype, "getPlayerIdentfiacationSelector", {
	        get: function () {
	            return '#' + this.player_identfication + ' ';
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(TerminusEstPlayer.prototype, "getKokoroVideoManager", {
	        get: function () {
	            return this.kvm;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    return TerminusEstPlayer;
	}());
	window['TerminusEstPlayer'] = TerminusEstPlayer;
	//# sourceMappingURL=TerminusEstPlayer.js.map

/***/ },
/* 1 */
/***/ function(module, exports) {

	"use strict";
	/**
	 * Created by lizeq on 8/22/2016.
	 */
	var PlayerConstant = (function () {
	    function PlayerConstant() {
	    }
	    PlayerConstant.class_video = 'tep_video';
	    PlayerConstant.class_control = 'tep_controller';
	    PlayerConstant.class_comment = 'tep_comment';
	    return PlayerConstant;
	}());
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = PlayerConstant;
	//# sourceMappingURL=PlayerConstant.js.map

/***/ },
/* 2 */
/***/ function(module, exports) {

	"use strict";
	var KokoroVideoManager = (function () {
	    function KokoroVideoManager(video, video_callback) {
	        this.state = 'init';
	        this.video = video;
	        this.callback = video_callback;
	        this.addUIListener(this.video);
	    }
	    KokoroVideoManager.prototype.addUIListener = function (video_obj) {
	        var _this = this;
	        video_obj.ontimeupdate = function () {
	            _this.callback(KokoroVideoManager.EVENT_TIMEUPDATE);
	        };
	        video_obj.onloadeddata = function () {
	            _this.callback(KokoroVideoManager.EVENT_LOADEDDATA);
	        };
	        video_obj.oncanplay = function () {
	            _this.callback(KokoroVideoManager.EVENT_CANPLAY);
	        };
	        video_obj.onpause = function () {
	            _this.callback(KokoroVideoManager.EVENT_PAUSE);
	            _this.state = KokoroVideoManager.PAUSE;
	        };
	        video_obj.onplay = function () {
	            _this.callback(KokoroVideoManager.EVENT_PLAY);
	            _this.state = KokoroVideoManager.PLAY;
	        };
	        video_obj.onseeking = function () {
	            _this.callback(KokoroVideoManager.EVENT_SEEKING);
	        };
	        video_obj.onvolumechange = function () {
	            _this.callback(KokoroVideoManager.EVENT_VOLUMECHANGE);
	        };
	    };
	    KokoroVideoManager.prototype.play = function () {
	        this.video.play();
	    };
	    KokoroVideoManager.prototype.pause = function () {
	        this.video.pause();
	    };
	    KokoroVideoManager.prototype.load = function (value) {
	        this.video.innerHTML = "<source src=" + value + "></source>";
	    };
	    KokoroVideoManager.prototype.volume = function (value) {
	        if (value > 1)
	            value = 1;
	        if (value < 0)
	            value = 0;
	        this.video.volume = value;
	        return value;
	    };
	    Object.defineProperty(KokoroVideoManager.prototype, "duration", {
	        get: function () {
	            return this.video.duration;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(KokoroVideoManager.prototype, "time", {
	        get: function () {
	            return this.video.currentTime;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(KokoroVideoManager.prototype, "play_precent", {
	        /**
	         * 返回视频播放的百分比,用于进度条的制作.
	         * @returns {number}
	         */
	        get: function () {
	            return this.time / this.duration;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(KokoroVideoManager.prototype, "buffer_array", {
	        /**
	         * 返回视频buffer长度,可断断续续.
	         * 单位是百分比.
	         * @returns {Array<number>}
	         */
	        get: function () {
	            var arr = [];
	            if (this.duration > 0)
	                for (var i = 0; i < this.video.seekable.length; i++) {
	                    var left = this.video.seekable.start(i) / this.duration * 100;
	                    var width = (this.video.seekable.end(i) - this.video.seekable.start(i)) / this.duration * 100;
	                    arr.push(left, width);
	                }
	            return arr;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    KokoroVideoManager.PLAY = 'play';
	    KokoroVideoManager.PAUSE = 'pause';
	    KokoroVideoManager.EVENT_TIMEUPDATE = 'timeupdate';
	    KokoroVideoManager.EVENT_LOADEDDATA = 'loadeddata';
	    KokoroVideoManager.EVENT_CANPLAY = 'canplay';
	    KokoroVideoManager.EVENT_PLAY = 'play';
	    KokoroVideoManager.EVENT_PAUSE = 'pause';
	    KokoroVideoManager.EVENT_SEEKING = 'seeking';
	    KokoroVideoManager.EVENT_VOLUMECHANGE = 'volumechange';
	    return KokoroVideoManager;
	}());
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = KokoroVideoManager;
	//# sourceMappingURL=KokoroVideoManager.js.map

/***/ }
/******/ ]);
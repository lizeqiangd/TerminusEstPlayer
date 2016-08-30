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

	"use strict";
	/**
	 * Created by lizeq on 8/22/2016.
	 */
	/// <reference path="./utils/jquery.d.ts" />
	/// <reference path='./system/constant/PlayerConstant.ts'/>
	//css loader
	__webpack_require__(5);
	//class loader
	const PlayerConstant_1 = __webpack_require__(1);
	const KokoroVideoManager_1 = __webpack_require__(2);
	const LeCloudVideoAPI_1 = __webpack_require__(8);
	const PlayerControlEvent_1 = __webpack_require__(4);
	const DateTimeUtils_1 = __webpack_require__(11);
	const KokoroVideoController_1 = __webpack_require__(12);
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
/* 1 */
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
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	const PlayerControlEvent_1 = __webpack_require__(4);
	const KokoroBaseUnit_1 = __webpack_require__(7);
	const PlayerConstant_1 = __webpack_require__(1);
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
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(14)();
	// imports


	// module
	exports.push([module.id, ".tep_video{\r\n    /*position: relative;*/\r\n    overflow: hidden;\r\n    width: 100%;\r\n}\r\n\r\n.tep_player{\r\n    position: relative;\r\n}\r\n\r\n.tep_kvc {\r\n    width: 100%;\r\n    height: 70px;\r\n    opacity: .5;\r\n    background-color: #000000;\r\n    position: absolute;\r\n    bottom: 0;\r\n    left: 0;\r\n    right: 0;\r\n    z-index: 10;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n.KokoroPlayerControllerManager {\r\n    position: absolute;\r\n    top: 0;\r\n    bottom: 0;\r\n    left: 0;\r\n    right: 0;\r\n    height: 100%;\r\n    z-index: 12;\r\n}\r\n\r\n\r\n\r\n\r\n/*.TerminusEstPlayer {*/\r\n    /**/\r\n    /*position: relative;*/\r\n    /*overflow: hidden;*/\r\n/*}*/\r\n\r\n.video_content {\r\n    width: 100%;\r\n    height: 100%;\r\n    z-index: 0;\r\n}\r\n\r\n\r\n\r\n\r\n.kpcm_left {\r\n    float: left;\r\n}\r\n\r\n.kpcm_right {\r\n    float: right;\r\n}\r\n\r\n.kpcm_controller {\r\n    position: absolute;\r\n    width: 100%;\r\n    top: 10px;\r\n    height: 30px;\r\n}\r\n\r\n.player_controller_unit {\r\n    display: inline;\r\n    margin-left: 10px;\r\n    margin-right: 10px;\r\n    height: 100%;\r\n    vertical-align: middle;\r\n}\r\n\r\n.progress_bar {\r\n    position: relative;\r\n    width: 100%;\r\n    height: 5px;\r\n    top: 0;\r\n    left: 0;\r\n    background: #2b2b2b;\r\n    opacity: 1;\r\n\r\n}\r\n\r\n.buffer_bar {\r\n    position: absolute;\r\n    height: 5px;\r\n    top: 0;\r\n    background: #ffffff;\r\n    opacity: .8;\r\n\r\n}\r\n\r\n.play_bar {\r\n    position: absolute;\r\n    width: 0;\r\n    height: 5px;\r\n    top: 0;\r\n    left: 0;\r\n    background: #3399ff;\r\n    opacity: .8;\r\n\r\n}\r\n\r\n.play_time {\r\n    padding-top: 7px;\r\n    color: #ffffff;\r\n    user-select: none;\r\n    -webkit-user-select: none;\r\n    -moz-user-select: none;\r\n    -ms-user-select: none;\r\n}\r\n\r\n.VideoMouseMask {\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    width: 100%;\r\n    height: 100%;\r\n}\r\n\r\n.controller_panels {\r\n    position: absolute;\r\n    top: -5px;\r\n}\r\n\r\n.buffer_icon {\r\n    margin-left: -30px;\r\n    margin-top: -30px;\r\n    width: 60px;\r\n    height: 60px;\r\n    top: 50%;\r\n    left: 50%;\r\n}\r\n\r\n.player_controller_button {\r\n    background: url(" + __webpack_require__(6) + ");\r\n    width: 30px;\r\n    height: 30px;\r\n}\r\n\r\n.play_icon {\r\n    position: absolute;\r\n    background-position: -150px -0;\r\n    width: 80px;\r\n    height: 80px;\r\n    bottom: 90px;\r\n    right: 20px;\r\n}\r\n\r\n.fullscreen_button {\r\n    background-position: -90px -0;\r\n}\r\n\r\n.volume_button {\r\n    background-position: -0px -0;\r\n\r\n}\r\n\r\n.comment_button {\r\n    background-position: -30px -30px;\r\n    width: 60px;\r\n\r\n}\r\n\r\n.play_state1 {\r\n    background-position: -0px -60px;\r\n}\r\n\r\n.play_state0 {\r\n    background-position: -30px -60px;\r\n}\r\n\r\n.resolution_button {\r\n    padding-top: 5px;\r\n    user-select: none;\r\n    -webkit-user-select: none;\r\n    -moz-user-select: none;\r\n    -ms-user-select: none;\r\n    width: 35px;\r\n    color: #ffffff;\r\n    background: none;\r\n}\r\n\r\n.resolution_button_item {\r\n    color: #ffffff;\r\n    margin: 10px;\r\n    word-break: keep-all;\r\n    /*width: 30px; */\r\n    -webkit-user-select: none;\r\n    -moz-user-select: none;\r\n    -ms-user-select: none;\r\n}\r\n\r\n.KokoroBaseUnit {\r\n    position: absolute;\r\n    background-color: #000000;\r\n    opacity: .8;\r\n    /*border-radius: 5px;*/\r\n    margin: 0;\r\n    width: auto;\r\n    height: auto;\r\n    bottom: 100%;\r\n\r\n}\r\n\r\n.panel_vector {\r\n    width: 0;\r\n    height: 0;\r\n    top: 4px;\r\n    opacity: .8;\r\n    border-width: 4px 4px 0;\r\n    border-style: solid;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n    border-color: #000000 transparent transparent;\r\n    position: relative;\r\n}\r\n\r\n@-webkit-keyframes uil-default-anim {\r\n    0% {\r\n        opacity: 1\r\n    }\r\n    100% {\r\n        opacity: 0\r\n    }\r\n}\r\n\r\n@keyframes uil-default-anim {\r\n    0% {\r\n        opacity: 1\r\n    }\r\n    100% {\r\n        opacity: 0\r\n    }\r\n}\r\n\r\n.uil-default-css > div:nth-of-type(1) {\r\n    -webkit-animation: uil-default-anim 1s linear infinite;\r\n    animation: uil-default-anim 1s linear infinite;\r\n    -webkit-animation-delay: -0.5s;\r\n    animation-delay: -0.5s;\r\n}\r\n\r\n.uil-default-css {\r\n    position: relative;\r\n    background: none;\r\n    width: 200px;\r\n    height: 200px;\r\n}\r\n\r\n.uil-default-css > div:nth-of-type(2) {\r\n    -webkit-animation: uil-default-anim 1s linear infinite;\r\n    animation: uil-default-anim 1s linear infinite;\r\n    -webkit-animation-delay: -0.4166666666666667s;\r\n    animation-delay: -0.4166666666666667s;\r\n}\r\n\r\n.uil-default-css {\r\n    position: relative;\r\n    background: none;\r\n    width: 200px;\r\n    height: 200px;\r\n}\r\n\r\n.uil-default-css > div:nth-of-type(3) {\r\n    -webkit-animation: uil-default-anim 1s linear infinite;\r\n    animation: uil-default-anim 1s linear infinite;\r\n    -webkit-animation-delay: -0.33333333333333337s;\r\n    animation-delay: -0.33333333333333337s;\r\n}\r\n\r\n.uil-default-css {\r\n    position: relative;\r\n    background: none;\r\n    width: 200px;\r\n    height: 200px;\r\n}\r\n\r\n.uil-default-css > div:nth-of-type(4) {\r\n    -webkit-animation: uil-default-anim 1s linear infinite;\r\n    animation: uil-default-anim 1s linear infinite;\r\n    -webkit-animation-delay: -0.25s;\r\n    animation-delay: -0.25s;\r\n}\r\n\r\n.uil-default-css {\r\n    position: relative;\r\n    background: none;\r\n    width: 200px;\r\n    height: 200px;\r\n}\r\n\r\n.uil-default-css > div:nth-of-type(5) {\r\n    -webkit-animation: uil-default-anim 1s linear infinite;\r\n    animation: uil-default-anim 1s linear infinite;\r\n    -webkit-animation-delay: -0.16666666666666669s;\r\n    animation-delay: -0.16666666666666669s;\r\n}\r\n\r\n.uil-default-css {\r\n    position: relative;\r\n    background: none;\r\n    width: 200px;\r\n    height: 200px;\r\n}\r\n\r\n.uil-default-css > div:nth-of-type(6) {\r\n    -webkit-animation: uil-default-anim 1s linear infinite;\r\n    animation: uil-default-anim 1s linear infinite;\r\n    -webkit-animation-delay: -0.08333333333333331s;\r\n    animation-delay: -0.08333333333333331s;\r\n}\r\n\r\n.uil-default-css {\r\n    position: relative;\r\n    background: none;\r\n    width: 200px;\r\n    height: 200px;\r\n}\r\n\r\n.uil-default-css > div:nth-of-type(7) {\r\n    -webkit-animation: uil-default-anim 1s linear infinite;\r\n    animation: uil-default-anim 1s linear infinite;\r\n    -webkit-animation-delay: 0s;\r\n    animation-delay: 0s;\r\n}\r\n\r\n.uil-default-css {\r\n    position: relative;\r\n    background: none;\r\n    width: 200px;\r\n    height: 200px;\r\n}\r\n\r\n.uil-default-css > div:nth-of-type(8) {\r\n    -webkit-animation: uil-default-anim 1s linear infinite;\r\n    animation: uil-default-anim 1s linear infinite;\r\n    -webkit-animation-delay: 0.08333333333333337s;\r\n    animation-delay: 0.08333333333333337s;\r\n}\r\n\r\n.uil-default-css {\r\n    position: relative;\r\n    background: none;\r\n    width: 200px;\r\n    height: 200px;\r\n}\r\n\r\n.uil-default-css > div:nth-of-type(9) {\r\n    -webkit-animation: uil-default-anim 1s linear infinite;\r\n    animation: uil-default-anim 1s linear infinite;\r\n    -webkit-animation-delay: 0.16666666666666663s;\r\n    animation-delay: 0.16666666666666663s;\r\n}\r\n\r\n.uil-default-css {\r\n    position: relative;\r\n    background: none;\r\n    width: 200px;\r\n    height: 200px;\r\n}\r\n\r\n.uil-default-css > div:nth-of-type(10) {\r\n    -webkit-animation: uil-default-anim 1s linear infinite;\r\n    animation: uil-default-anim 1s linear infinite;\r\n    -webkit-animation-delay: 0.25s;\r\n    animation-delay: 0.25s;\r\n}\r\n\r\n.uil-default-css {\r\n    position: relative;\r\n    background: none;\r\n    width: 200px;\r\n    height: 200px;\r\n}\r\n\r\n.uil-default-css > div:nth-of-type(11) {\r\n    -webkit-animation: uil-default-anim 1s linear infinite;\r\n    animation: uil-default-anim 1s linear infinite;\r\n    -webkit-animation-delay: 0.33333333333333337s;\r\n    animation-delay: 0.33333333333333337s;\r\n}\r\n\r\n.uil-default-css {\r\n    position: relative;\r\n    background: none;\r\n    width: 200px;\r\n    height: 200px;\r\n}\r\n\r\n.uil-default-css > div:nth-of-type(12) {\r\n    -webkit-animation: uil-default-anim 1s linear infinite;\r\n    animation: uil-default-anim 1s linear infinite;\r\n    -webkit-animation-delay: 0.41666666666666663s;\r\n    animation-delay: 0.41666666666666663s;\r\n}\r\n\r\n.uil-default-css {\r\n    position: relative;\r\n    background: none;\r\n    width: 200px;\r\n    height: 200px;\r\n}", ""]);

	// exports


/***/ },
/* 4 */
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
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(3);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(9)(content, {});
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
/* 6 */
/***/ function(module, exports) {

	module.exports = "data:image/png;base64,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"

/***/ },
/* 7 */
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
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	/**
	 * Created by lizeq on 8/23/2016.
	 */
	/// <reference path="./../utils/jquery.d.ts" />
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
	const KokoroBaseUnit_1 = __webpack_require__(7);
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
	const KokoroBaseUnit_1 = __webpack_require__(7);
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

/***/ },
/* 14 */
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


/***/ }
/******/ ]);
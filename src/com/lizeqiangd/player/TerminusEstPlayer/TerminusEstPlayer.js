/**
 * Created by lizeq on 8/22/2016.
 */
/// <reference path="./utils/jquery.d.ts" />
/// <reference path='./constant/PlayerConstant.ts'/>
"use strict";
var PlayerConstant_1 = require('./constant/PlayerConstant');
var KokoroVideoManager_1 = require('./applications/KokoroVideoManager');
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
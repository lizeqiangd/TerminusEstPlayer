"use strict";
/**
 * Created by lizeq on 8/22/2016.
 */
/// <reference path="./utils/jquery.d.ts" />
/// <reference path='./system/constant/PlayerConstant.ts'/>
//css loader
require('./css/TerminusEstPlayer.css');
//class loader
const PlayerConstant_1 = require('./system/constant/PlayerConstant');
const KokoroVideoManager_1 = require('./applications/KokoroVideo/KokoroVideoManager');
const LeCloudVideoAPI_1 = require('./net/LeCloudVideoAPI');
const PlayerControlEvent_1 = require('./events/PlayerControlEvent');
const DateTimeUtils_1 = require('./components/DateTimeUtils');
const KokoroVideoController_1 = require('./applications/KokoroVideoController/KokoroVideoController');
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
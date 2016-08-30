"use strict";
const PlayerControlEvent_1 = require('./../../events/PlayerControlEvent');
const KokoroBaseUnit_1 = require('./../../abstract/KokoroBaseUnit');
const PlayerConstant_1 = require('./../../system/constant/PlayerConstant');
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
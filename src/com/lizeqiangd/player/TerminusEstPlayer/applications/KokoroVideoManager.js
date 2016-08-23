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
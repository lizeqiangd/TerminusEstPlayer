export default class KokoroVideoManager {
    static PLAY: string = 'play';
    static PAUSE: string = 'pause';

    static EVENT_TIMEUPDATE: string = 'timeupdate';
    static EVENT_LOADEDDATA: string = 'loadeddata';
    static EVENT_CANPLAY: string = 'canplay';
    static EVENT_PLAY: string = 'play';
    static EVENT_PAUSE: string = 'pause';
    static EVENT_SEEKING: string = 'seeking';
    static EVENT_VOLUMECHANGE: string = 'volumechange';

    private video: HTMLVideoElement;
    private callback: Function;
    state: string = 'init';

    constructor(video: HTMLVideoElement, video_callback: Function) {
        this.video = video;
        this.callback = video_callback;
        this.addUIListener(this.video);
    }

    addUIListener(video_obj:HTMLVideoElement) {
        video_obj.ontimeupdate = ()=> {
            this.callback(KokoroVideoManager.EVENT_TIMEUPDATE);
        }

        video_obj.onloadeddata = ()=> {
            this.callback(KokoroVideoManager.EVENT_LOADEDDATA);
        }

        video_obj.oncanplay = ()=> {
            this.callback(KokoroVideoManager.EVENT_CANPLAY);
        }

        video_obj.onpause = ()=> {
            this.callback(KokoroVideoManager.EVENT_PAUSE);
            this.state = KokoroVideoManager.PAUSE;
        }

        video_obj.onplay = ()=> {
            this.callback(KokoroVideoManager.EVENT_PLAY);
            this.state = KokoroVideoManager.PLAY;
        }

        video_obj.onseeking = ()=> {
            this.callback(KokoroVideoManager.EVENT_SEEKING);
        }

        video_obj.onvolumechange = ()=> {
            this.callback(KokoroVideoManager.EVENT_VOLUMECHANGE);

        }
    }

    play() {
        this.video.play();
    }

    pause() {
        this.video.pause();
    }

    load(value:string){
        this.video.innerHTML=`<source src=${value}></source>`
    }

    volume(value: number): number {
        if (value > 1)value = 1;
        if (value < 0)value = 0;
        this.video.volume = value;
        return value
    }

    get duration(): number {
        return this.video.duration;
    }

    get time(): number {
        return this.video.currentTime;
    }

    /**
     * 返回视频播放的百分比,用于进度条的制作.
     * @returns {number}
     */
    get play_precent(): number {
        return this.time / this.duration;
    }

    /**
     * 返回视频buffer长度,可断断续续.
     * 单位是百分比.
     * @returns {Array<number>}
     */
    get buffer_array(): Array<number> {
        let arr: Array<number> = [];
        if (this.duration > 0)
            for (var i: number = 0; i < this.video.seekable.length; i++) {
                let left: number = this.video.seekable.start(i) / this.duration * 100;
                let width: number = (this.video.seekable.end(i) - this.video.seekable.start(i)) / this.duration * 100;
                arr.push(left, width);
            }
        return arr;
    }

}
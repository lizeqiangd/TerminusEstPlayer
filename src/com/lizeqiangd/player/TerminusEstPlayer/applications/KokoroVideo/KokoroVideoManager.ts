import PlayerControlEvent from './../../events/PlayerControlEvent';
import KokoroBaseUnit from './../../abstract/KokoroBaseUnit'

export default class KokoroVideoManager extends KokoroBaseUnit {
    static INIT: string = 'state_init';
    static PLAY: string = 'state_play';
    static PAUSE: string = 'state_pause';

    state: string = KokoroVideoManager        .INIT;

    constructor(video: HTMLVideoElement) {
        super();
        this._element = video;
        this.addUIListener(this.element);
    }


    addUIListener(video_obj: HTMLVideoElement) {
        video_obj.ontimeupdate = ()=> {
            this.dispatchEvent(new PlayerControlEvent(PlayerControlEvent.TIMEUPDATE, this.time));

        }

        video_obj.onloadeddata = ()=> {
            this.dispatchEvent(new PlayerControlEvent(PlayerControlEvent.LOADEDDATA, this.time));

        }

        video_obj.oncanplay = ()=> {
            this.dispatchEvent(new PlayerControlEvent(PlayerControlEvent.CANPLAY, this.time));

        }

        video_obj.onpause = ()=> {
            this.state = KokoroVideoManager.PAUSE;
            this.dispatchEvent(new PlayerControlEvent(PlayerControlEvent.PAUSE, this.time));

        }

        video_obj.onplay = ()=> {
            this.state = KokoroVideoManager.PLAY;
            this.dispatchEvent(new PlayerControlEvent(PlayerControlEvent.PLAY, this.time));

        }

        video_obj.onseeking = ()=> {
            this.dispatchEvent(new PlayerControlEvent(PlayerControlEvent.SEEK, this.time));

        }

        video_obj.onvolumechange = ()=> {
            // debugger;
            this.dispatchEvent(new PlayerControlEvent(PlayerControlEvent.VOLUMECHANGE, this.time));


        }
    }

    play() {
        this.element.play();
    }

    pause() {
        this.element.pause();
    }

    load(value: string) {
        this.element.innerHTML = `<source src=${value}/>`
        this.element.load();

    }

    volume(value: number): number {
        if (value > 1)value = 1;
        if (value < 0)value = 0;
        this.element.volume = value;
        return value
    }

    get duration(): number {
        return this.element.duration;
    }

    get time(): number {
        return this.element.currentTime;
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
            for (var i: number = 0; i < this.element.seekable.length; i++) {
                let left: number = this.element.seekable.start(i) / this.duration * 100;
                let width: number = (this.element.seekable.end(i) - this.element.seekable.start(i)) / this.duration * 100;
                arr.push(left, width);
            }
        return arr;
    }

    /**
     * 覆盖方法获取element对象改为HTMLVideoElement
     * @returns {any}
     */
    get element(): HTMLVideoElement {
        return this._element;
    }
}
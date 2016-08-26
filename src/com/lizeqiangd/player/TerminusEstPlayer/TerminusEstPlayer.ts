/**
 * Created by lizeq on 8/22/2016.
 */
/// <reference path="./utils/jquery.d.ts" />
/// <reference path='./system/constant/PlayerConstant.ts'/>
//css loader
import './css/TerminusEstPlayer.css';

//class loader
import PlayerConstant from './system/constant/PlayerConstant';
import KokoroVideoManager from './applications/KokoroVideo/KokoroVideoManager';
import LeCloudVideoAPI from './net/LeCloudVideoAPI';
import PlayerControlEvent from './events/PlayerControlEvent';

class TerminusEstPlayer {
    private player_identfication: string = '';
    private kvm: KokoroVideoManager;
    private lecloud: LeCloudVideoAPI;

    constructor(_player_identfication: string) {
        this.player_identfication = _player_identfication;
        this.createPlayerElements();

        this.kvm = new KokoroVideoManager(this.getPlayerVideoHTMLElement());
        this.lecloud = new LeCloudVideoAPI();

        this.addUnitEventListener();
        $(this.getPlayerIdentfiacationSelector).height(450);
        $(this.getPlayerIdentfiacationSelector).width(800);
        return this;
    }

    createPlayerElements() {
        let player: HTMLElement = this.getPlayerJQuerySelector();
        player.innerHTML += `<video class=${PlayerConstant.class_video} autoplay="false"></video>`;
        player.innerHTML += `<div class=${PlayerConstant.class_comment}></div>`;
        player.innerHTML += `<div class=${PlayerConstant.class_control}></div>`;
    }

    loadLeCloudVideo(vu: string) {
        this.lecloud.get_video_list_proxy(vu, (data: any)=> {
            this.changeVideoResolution('超清');
        });
    }

    load(url: string) {
        this.kvm.load(url);
        return this;
    }

    /**
     * 切换视频清晰度.如果不存在则播放器高清.
     * @param type
     */
    changeVideoResolution(type: string) {
        let vurl: string = this.lecloud.getVideoResolutionURL(type);
        if (vurl) {
            this.load(vurl);
            return;
        }
        this.changeVideoResolution('高清');
    }

    config(obj: any) {
        for (var key in obj) {
            switch (obj[key]) {
                case 'comment':
                    break
                default:
            }
        }
    }

    getPlayerJQuerySelector(): HTMLElement {
        return $(this.getPlayerIdentfiacationSelector)[0];
    }

    getPlayerVideoHTMLElement(): HTMLVideoElement {
        return $(this.getPlayerIdentfiacationSelector + ` .${PlayerConstant.class_video}`)[0] as HTMLVideoElement;
    }

    addUnitEventListener() {
        $(this.getPlayerJQuerySelector()).resize(this.onPlayerResizie);

        this.getKokoroVideoManager.addEventListener(PlayerControlEvent.PAUSE, (event: PlayerControlEvent)=> {
            console.log(event.type, event.data);
        })
        this.getKokoroVideoManager.addEventListener(PlayerControlEvent.PLAY, (event: PlayerControlEvent)=> {
            console.log(event.type, event.data);

        })
        this.getKokoroVideoManager.addEventListener(PlayerControlEvent.VOLUMECHANGE, (event: PlayerControlEvent)=> {
            console.log(event.type, event.data);

        })
        this.getKokoroVideoManager.addEventListener(PlayerControlEvent.SEEK, (event: PlayerControlEvent)=> {
            console.log(event.type, event.data);

        })
        this.getKokoroVideoManager.addEventListener(PlayerControlEvent.CANPLAY, (event: PlayerControlEvent)=> {
            console.log(event.type, event.data);

        })
        this.getKokoroVideoManager.addEventListener(PlayerControlEvent.TIMEUPDATE, (event: PlayerControlEvent)=> {
            console.log(event.type, event.data);

        })

    }

    onPlayerResizie() {
        console.log('onPlayerResize:', $(this.getPlayerJQuerySelector()).width(), $(this.getPlayerJQuerySelector()).height());
    }

    get getPlayerIdentfiacationSelector(): string {
        return '#' + this.player_identfication + ' ';
    }

    get getKokoroVideoManager(): KokoroVideoManager {
        return this.kvm;
    }
}
window['TerminusEstPlayer'] = TerminusEstPlayer;
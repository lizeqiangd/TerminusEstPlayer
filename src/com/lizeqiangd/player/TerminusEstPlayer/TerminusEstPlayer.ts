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
import DateTimeUtils from './components/DateTimeUtils';
import KokoroVideoController from './applications/KokoroVideoController/KokoroVideoController';

class TerminusEstPlayer {
    private player_identfication: string = '';
    private lecloud: LeCloudVideoAPI;

    private kvm: KokoroVideoManager;
    private kvc: KokoroVideoController;

    constructor(_player_identfication: string) {
        this.player_identfication = _player_identfication;

        let player: HTMLElement = this.getPlayerJQuerySelector();
        $(player).height(450);
        $(player).width(800);
        $(player).addClass(PlayerConstant.class_player);


        this.kvm = new KokoroVideoManager();
        player.appendChild(this.kvm.element);

        this.kvc = new KokoroVideoController();
        player.appendChild(this.kvc.element);


        this.addUnitEventListener();

        console.log(DateTimeUtils.getDate());
        console.log(DateTimeUtils.formatSecond(999999));


        this.lecloud = new LeCloudVideoAPI();


        return this;
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

    getPlayerJQuerySelector(): HTMLElement {
        return $(this.getPlayerIdentfiacationSelector)[0];
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
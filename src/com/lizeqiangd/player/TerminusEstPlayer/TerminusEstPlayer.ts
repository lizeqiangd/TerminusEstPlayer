/**
 * Created by lizeq on 8/22/2016.
 */
/// <reference path="./utils/jquery.d.ts" />
/// <reference path='./constant/PlayerConstant.ts'/>

import PlayerConstant from './constant/PlayerConstant';
import KokoroVideoManager from './applications/KokoroVideoManager';

class TerminusEstPlayer {
    private player_identfication: string = '';
    private kvm: KokoroVideoManager;


    constructor(_player_identfication: string) {
        this.player_identfication = _player_identfication;
        this.createPlayerElements();

        this.kvm = new KokoroVideoManager(this.getPlayerVideoHTMLElement(), this.onVideoCallback);

        this.addUnitEventListener();
        $(this.getPlayerIdentfiacationSelector).height(450);
        $(this.getPlayerIdentfiacationSelector).width(800);
        return this;
    }

    load(url:string){
        this.kvm.load(url);
        return this;
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

    createPlayerElements() {
        let player: HTMLElement = this.getPlayerJQuerySelector();
        player.innerHTML += `<video class=${PlayerConstant.class_video} autoplay="false"></video>`;
        player.innerHTML += `<div class=${PlayerConstant.class_comment}></div>`;
        player.innerHTML += `<div class=${PlayerConstant.class_control}></div>`;
    }

    getPlayerJQuerySelector(): HTMLElement {
        return $(this.getPlayerIdentfiacationSelector)[0];
    }

    getPlayerVideoHTMLElement(): HTMLVideoElement {
        return $(this.getPlayerIdentfiacationSelector+` .${PlayerConstant.class_video}`)[0] as HTMLVideoElement;
    }

    addUnitEventListener() {
        $(window).resize(this.onStageResize);
    }

    onVideoCallback(event_type: string) {
        switch (event_type) {
            case KokoroVideoManager.EVENT_VOLUMECHANGE:
                break;
            case KokoroVideoManager.EVENT_CANPLAY:
                break;
            case KokoroVideoManager.EVENT_LOADEDDATA:
                break;
            case KokoroVideoManager.EVENT_SEEKING:
                break;
            case KokoroVideoManager.EVENT_TIMEUPDATE:
                break;
            case KokoroVideoManager.EVENT_PLAY:
                break;
            case KokoroVideoManager.EVENT_PAUSE:
                break;
        }

    }


    onStageResize() {

    }

    get getPlayerIdentfiacationSelector(): string {
        return '#' + this.player_identfication+' ';
    }

    get getKokoroVideoManager():KokoroVideoManager{
        return this.kvm;
    }
}
window['TerminusEstPlayer'] = TerminusEstPlayer;
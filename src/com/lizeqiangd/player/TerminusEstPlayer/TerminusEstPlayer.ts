/**
 * Created by lizeq on 8/22/2016.
 */
/// <reference path="./utils/jquery.d.ts" />

class TerminusEstPlayer {
    private player_identfication:string='';
    constructor(_player_identfication:string){
        this.player_identfication=_player_identfication;
        this.createPlayerHTML()



    }

    createPlayerHTML(){
        let player:HTMLElement=this.getPlayerJQuerySelector();
        console.log(player);
        player.innerHTML='<video class="tep_video" autoplay="false"></video>'
    }

    getPlayerJQuerySelector():HTMLElement{
        return $(this.getPlayerIdentfiacationSelector)[0];
    }

    getPlayerVideoHTMLElement():HTMLVideoElement{
        return $(this.getPlayerIdentfiacationSelector+'.tep_video')[0] as HTMLVideoElement;
    }

    get getPlayerIdentfiacationSelector():string{
        return '#'+this.player_identfication;
    }
}
/**
 * Created by lizeq on 8/22/2016.
 */
/// <reference path="./utils/jquery.d.ts" />
class TerminusEstPlayer {
    constructor(_player_identfication) {
        this.player_identfication = '';
        this.player_identfication = _player_identfication;
        this.createPlayerHTML();
    }
    createPlayerHTML() {
        let player = this.getPlayerJQuerySelector();
        console.log(player);
        player.innerHTML = '<video class="tep_video" autoplay="false"></video>';
    }
    getPlayerJQuerySelector() {
        return $(this.getPlayerIdentfiacationSelector)[0];
    }
    getPlayerVideoHTMLElement() {
        return $(this.getPlayerIdentfiacationSelector + '.tep_video')[0];
    }
    get getPlayerIdentfiacationSelector() {
        return '#' + this.player_identfication;
    }
}
//# sourceMappingURL=TerminusEstPlayer.js.map
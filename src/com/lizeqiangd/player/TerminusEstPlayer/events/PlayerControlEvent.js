"use strict";
/**
 * Created by lizeq on 8/25/2016.
 */
class PlayerControlEvent extends Event {
    constructor(type, DispatchData = null) {
        super(type);
        /** 给设置所使用的 **/
        this._config_name = '';
        this.data = DispatchData;
    }
    /**
     * 如果是type是config. 则可以获取该值
     */
    get config_name() {
        return this._config_name == '' ? this.type : this._config_name;
    }
    set config_name(value) {
        this._config_name = value;
    }
    get config_data() {
        return this.data;
    }
}
PlayerControlEvent.CONTROL_PANEL_MOUSEOVER = 'control_panel_mouseover';
PlayerControlEvent.CONTROL_PANEL_MOUSEOUT = 'control_panel_mouseout';
/** HTML5专用事件. **/
PlayerControlEvent.TIMEUPDATE = 'player_timeupdate';
PlayerControlEvent.LOADEDDATA = 'player_loadeddata';
PlayerControlEvent.CANPLAY = 'player_canplay';
PlayerControlEvent.VOLUMECHANGE = 'player_volumechange';
/** 播放器控制抛出事件. **/
PlayerControlEvent.PAUSE = "player_pause";
PlayerControlEvent.PLAY = "player_play";
PlayerControlEvent.SEEK = "player_seek";
PlayerControlEvent.RESOLUTION_CHANGE = 'player_resolution_change';
PlayerControlEvent.SCREEN_TYPE_CHANGE = 'player_screen_type_change';
/** 弹幕相关事件 **/
PlayerControlEvent.COMMENT_STYLE_CHANGED = 'comment_style_changed';
PlayerControlEvent.ADVANCE_COMMENT = 'advance_comment';
PlayerControlEvent.COMMENT_SUBMIT = 'comment_submit';
/** 其他通用事件 **/
PlayerControlEvent.SHARE = 'share';
PlayerControlEvent.NEXT_VEDIO = 'next_video';
PlayerControlEvent.ADVANCE_COMMENT_CONFIG = 'advance_comment_config';
PlayerControlEvent.ADVANCE_CONFIG = 'advance_config';
PlayerControlEvent.BILIBILI_LOGO = 'bilibili_logo';
/** 推荐面板 **/
PlayerControlEvent.RECOMMEND_DING = 'recommend_ding';
PlayerControlEvent.RECOMMEND_COIN = 'recommend_coin';
PlayerControlEvent.RECOMMEND_FAVOURITE = 'recommend_favourite';
/** 播放器控件准备完成 **/
PlayerControlEvent.READY = 'player_ready';
/** 播放器关于信息 **/
PlayerControlEvent.ABOUT_PLAYER = 'about_player';
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = PlayerControlEvent;
//# sourceMappingURL=PlayerControlEvent.js.map
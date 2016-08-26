/**
 * Created by lizeq on 8/25/2016.
 */
export  default class PlayerControlEvent extends Event {


    static CONTROL_PANEL_MOUSEOVER: string = 'control_panel_mouseover';
    static CONTROL_PANEL_MOUSEOUT: string = 'control_panel_mouseout';


    /** HTML5专用事件. **/
    static TIMEUPDATE: string = 'player_timeupdate';
    static LOADEDDATA: string = 'player_loadeddata';
    static CANPLAY: string = 'player_canplay';
    static VOLUMECHANGE: string = 'player_volumechange';

    /** 播放器控制抛出事件. **/
    static PAUSE: string = "player_pause";
    static PLAY: string = "player_play";
    static SEEK: string = "player_seek";

    static RESOLUTION_CHANGE: string = 'player_resolution_change';
    static SCREEN_TYPE_CHANGE = 'player_screen_type_change';

    /** 弹幕相关事件 **/
    static COMMENT_STYLE_CHANGED: string = 'comment_style_changed';
    static ADVANCE_COMMENT: string = 'advance_comment';
    static COMMENT_SUBMIT: string = 'comment_submit';

    /** 其他通用事件 **/
    static SHARE: string = 'share';
    static NEXT_VEDIO: string = 'next_video';
    static ADVANCE_COMMENT_CONFIG: string = 'advance_comment_config';
    static ADVANCE_CONFIG: string = 'advance_config';
    static BILIBILI_LOGO: string = 'bilibili_logo';

    /** 推荐面板 **/
    static RECOMMEND_DING: string = 'recommend_ding';
    static RECOMMEND_COIN: string = 'recommend_coin';
    static RECOMMEND_FAVOURITE: string = 'recommend_favourite';

    /** 播放器控件准备完成 **/
    static READY: string = 'player_ready';

    /** 播放器关于信息 **/
    static ABOUT_PLAYER: string = 'about_player';

    data: any;

    /** 给设置所使用的 **/
    _config_name: string = '';

    constructor(type: string, DispatchData: any = null) {
        super(type);
        this.data = DispatchData;
    }
    /**
     * 如果是type是config. 则可以获取该值
     */
    get config_name(): string {
        return this._config_name == '' ? this.type : this._config_name;
    }

    set config_name(value: string) {
        this._config_name = value;
    }

    get config_data(): any {
        return this.data;
    }
}
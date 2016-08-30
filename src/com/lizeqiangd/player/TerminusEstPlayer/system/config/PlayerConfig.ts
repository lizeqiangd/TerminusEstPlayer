/**
 * Created by lizeq on 8/26/2016.
 */
export  default class PlayerConfig {
    // static  KokoroPlayerVersion:string = '0.9.2';
    // static  KokoroPlayerPublishDate:string = '2016-01-01 01:01:01';
    // static  KokoroPlayerCommit:string = '4676d6f';
    debug: boolean = true;

    static screen_state_fullscreen: string = 'fullscreen';
    static screen_state_widescreen: string = 'widescreen';
    static screen_state_innerscreen: string = 'innerscreen';
    static screen_state_normal: string = 'normal';

    static proportion_default: string = 'default';
    static proportion_43: string = '4:3';
    static proportion_169: string = '16:9';

    /** 弹幕样式设定 **/
    comment_style_colors: Array<number> = [0xFFFFFF, 0xFF0000, 0xFF8080, 0xFFC000, 0xFFFF00, 0x00FF00, 0x00FFFF, 0x0000FF, 0xC000FF, 0xFF6600, 0xCCCC99, 0xCC0033];
    comment_style_allow_custom_color: boolean = true;
    comment_style_allow_advance_comment: boolean = true;
    comment_style_allow_top_comment: boolean = true;
    comment_style_allow_bottom_comment: boolean = true;
    comment_style_allow_toleft_comment: boolean = true;
    comment_style_allow_toright_comment: boolean = false;
    comment_style_allow_textsize_1: boolean = true;
    comment_style_allow_textsize_2: boolean = true;
    comment_style_allow_textsize_3: boolean = true;
    comment_style_allow_textsize_4: boolean = false;

    /**  音量 **/
    private _volume: number = .66;
    volume_mute: boolean = false;

    /** 弹幕设定 **/
    display_comment_config_button: boolean = true;
    display_comment: boolean = true;
    comment_alpha: number = .95;
    top_comment: boolean = true;
    bottom_comment: boolean = true;
    regist_comment: boolean = true;
    subtitle_comment: boolean = true;

    /** 快速设置 **/
    display_proportion_button: boolean = true;
    proportion: string = PlayerConfig.proportion_default;
    display_lightoff_button: boolean = true;
    lightoff: boolean = false;
    display_repeat_button: boolean = true;
    repeat: boolean = false;
    display_autoplay_button: boolean = true;
    autoplay: boolean = false;
    display_advance_config_button: boolean = true;

    /** 当前显示状态 **/
    screen_state: string = PlayerConfig.screen_state_normal;

    /** 按钮本身是否显示 **/
    display_volume_button: boolean = true;
    display_comment_button: boolean = true;
    display_config_button: boolean = true;
    display_resolutions_button: boolean = true;
    display_widescreen_button: boolean = true;
    display_fullscreen_button: boolean = true;
    diaplay_bilibili_logo_button: boolean = true;

    /** 设置面板是否显示 **/
    display_volume_panel: boolean = true;
    display_resolutions_panel: boolean = true;
    display_comment_panel: boolean = true;
    display_config_panel: boolean = true;
    display_fullscreen_panel: boolean = true;

    /** 搜索 **/
    search_placeholder: string = '搜索占位符';
    search_default_text: string = '';

    /** 默认下一视频 跳转时间 **/
    next_video_delay_time: number = 5;

    /** 其他界面设置 **/
    videoprogress_played_alpha: number = 1;

    /** 主界面是否激活 **/
    videomousemask_display_up_panel: boolean = true;
    videomousemask_display_down_panel: boolean = true;

    /** 内部变量 **/
    private dict_callback: Array<Function>;
    private cache_all_config: any;

    private static _instance: PlayerConfig

    static get getInstance(): PlayerConfig {
        if (!PlayerConfig._instance) PlayerConfig._instance = new PlayerConfig;
        return PlayerConfig._instance;
    }


    get volume(): number {
        return this._volume;
    }

    set volume(value: number) {
        if (value > 1) value = 1;
        if (value < 0) value = 0;
        this._volume = value;
    }

    constructor() {
        if (PlayerConfig._instance)
            throw new Error('PlayerControlConfig: please use getInstance');
        this.dict_callback = [];
    }

    /**
     * 解析object命令.
     * @param    value
     */
    update(value: Object): void {
        let c_obj: Object = null;
        for (let item in value) {
            if (this.hasOwnProperty(item)) {
                if (this[item] != value[item]) {
                    if (this.debug)
                        console.log('PlayerControlConfig.update:' + item + ':' + this[item] + '->' + value[item]);
                    this[item] = value[item];
                    if (c_obj == null)
                        c_obj = {};
                    c_obj[item] = this[item];
                }
            }
            else
                console.log('PlayerControlConfig.update: not found key: ' + item);
        }
        if (c_obj != null) {
            this.cache_all_config = null;
            this._updateFunction(c_obj);
        }
    }

    /**
     * 请回调callback function要有参数.
     * @param    func
     */
    addConfigListener(_arg1: Function, needUpdateImmediatitly: boolean = true): void {
        if (needUpdateImmediatitly)
            _arg1(this.getAllConfig());
        this.dict_callback.push(_arg1);
    }

    /**
     * 移除侦听器.
     */
    removeConfigListener(_arg1: Function): void {
        this.dict_callback.splice(this.dict_callback.indexOf(_arg1), 1);
    }

    /**
     * 舞台大小内部方法.
     */
    private  _updateFunction(value: Object): void {
        for (let _local2 in this.dict_callback)
            this.dict_callback[_local2](value);
    }

    getAllConfig(): Object {
        if (this.cache_all_config == null)
            this.cache_all_config = JSON.parse(JSON.stringify(this));
        return this.cache_all_config;
    }
}
"use strict";
/**
 * Created by lizeq on 8/26/2016.
 */
class PlayerConfig {
    constructor() {
        // static  KokoroPlayerVersion:string = '0.9.2';
        // static  KokoroPlayerPublishDate:string = '2016-01-01 01:01:01';
        // static  KokoroPlayerCommit:string = '4676d6f';
        this.debug = true;
        /** 弹幕样式设定 **/
        this.comment_style_colors = [0xFFFFFF, 0xFF0000, 0xFF8080, 0xFFC000, 0xFFFF00, 0x00FF00, 0x00FFFF, 0x0000FF, 0xC000FF, 0xFF6600, 0xCCCC99, 0xCC0033];
        this.comment_style_allow_custom_color = true;
        this.comment_style_allow_advance_comment = true;
        this.comment_style_allow_top_comment = true;
        this.comment_style_allow_bottom_comment = true;
        this.comment_style_allow_toleft_comment = true;
        this.comment_style_allow_toright_comment = false;
        this.comment_style_allow_textsize_1 = true;
        this.comment_style_allow_textsize_2 = true;
        this.comment_style_allow_textsize_3 = true;
        this.comment_style_allow_textsize_4 = false;
        /**  音量 **/
        this._volume = .66;
        this.volume_mute = false;
        /** 弹幕设定 **/
        this.display_comment_config_button = true;
        this.display_comment = true;
        this.comment_alpha = .95;
        this.top_comment = true;
        this.bottom_comment = true;
        this.regist_comment = true;
        this.subtitle_comment = true;
        /** 快速设置 **/
        this.display_proportion_button = true;
        this.proportion = PlayerConfig.proportion_default;
        this.display_lightoff_button = true;
        this.lightoff = false;
        this.display_repeat_button = true;
        this.repeat = false;
        this.display_autoplay_button = true;
        this.autoplay = false;
        this.display_advance_config_button = true;
        /** 当前显示状态 **/
        this.screen_state = PlayerConfig.screen_state_normal;
        /** 按钮本身是否显示 **/
        this.display_volume_button = true;
        this.display_comment_button = true;
        this.display_config_button = true;
        this.display_resolutions_button = true;
        this.display_widescreen_button = true;
        this.display_fullscreen_button = true;
        this.diaplay_bilibili_logo_button = true;
        /** 设置面板是否显示 **/
        this.display_volume_panel = true;
        this.display_resolutions_panel = true;
        this.display_comment_panel = true;
        this.display_config_panel = true;
        this.display_fullscreen_panel = true;
        /** 搜索 **/
        this.search_placeholder = '搜索占位符';
        this.search_default_text = '';
        /** 默认下一视频 跳转时间 **/
        this.next_video_delay_time = 5;
        /** 其他界面设置 **/
        this.videoprogress_played_alpha = 1;
        /** 主界面是否激活 **/
        this.videomousemask_display_up_panel = true;
        this.videomousemask_display_down_panel = true;
        if (PlayerConfig._instance)
            throw new Error('PlayerControlConfig: please use getInstance');
        this.dict_callback = [];
    }
    static get getInstance() {
        if (!PlayerConfig._instance)
            PlayerConfig._instance = new PlayerConfig;
        return PlayerConfig._instance;
    }
    get volume() {
        return this._volume;
    }
    set volume(value) {
        if (value > 1)
            value = 1;
        if (value < 0)
            value = 0;
        this._volume = value;
    }
    /**
     * 解析object命令.
     * @param    value
     */
    update(value) {
        let c_obj = null;
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
    addConfigListener(_arg1, needUpdateImmediatitly = true) {
        if (needUpdateImmediatitly)
            _arg1(this.getAllConfig());
        this.dict_callback.push(_arg1);
    }
    /**
     * 移除侦听器.
     */
    removeConfigListener(_arg1) {
        this.dict_callback.splice(this.dict_callback.indexOf(_arg1), 1);
    }
    /**
     * 舞台大小内部方法.
     */
    _updateFunction(value) {
        for (let _local2 in this.dict_callback)
            this.dict_callback[_local2](value);
    }
    getAllConfig() {
        if (this.cache_all_config == null)
            this.cache_all_config = JSON.parse(JSON.stringify(this));
        return this.cache_all_config;
    }
}
PlayerConfig.screen_state_fullscreen = 'fullscreen';
PlayerConfig.screen_state_widescreen = 'widescreen';
PlayerConfig.screen_state_innerscreen = 'innerscreen';
PlayerConfig.screen_state_normal = 'normal';
PlayerConfig.proportion_default = 'default';
PlayerConfig.proportion_43 = '4:3';
PlayerConfig.proportion_169 = '16:9';
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = PlayerConfig;
//# sourceMappingURL=PlayerConfig.js.map
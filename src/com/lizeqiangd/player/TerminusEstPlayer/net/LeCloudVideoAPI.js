"use strict";
/**
 * Created by lizeq on 8/23/2016.
 */
/// <reference path="./../utils/jquery.d.ts" />
const md5_1 = require('./../utils/md5');
const PlayerConstant_1 = require('./../system/constant/PlayerConstant');
class LeCloudVideoAPI {
    constructor() {
        LeCloudVideoAPI.getInstance = this;
    }
    get_video_list_proxy(video_unique_id, callback) {
        this.callback = callback;
        LeCloudVideoAPI.vu = video_unique_id;
        $.ajax(LeCloudVideoAPI.LeCloudServerProxy + LeCloudVideoAPI.vu, {
            error: (what, status, error) => {
                this.onLoadFailed('loadVideoList from proxy failed!');
            },
            success: (data, status, what) => {
                // callback(data);
                this._final_data = data;
                window[PlayerConstant_1.default.player_videolist] = this._final_data;
                this.parse_videolist();
            },
        });
    }
    get_video_list(video_unique_id, callback) {
        this.callback = callback;
        LeCloudVideoAPI.vu = video_unique_id;
        this.get_timestamp(this.videolist);
    }
    /**
     * 获取乐视云的服务器时间戳. 如果获取失败,则使用本地时间代替.
     * @param    callback
     */
    get_timestamp(callback) {
        $.ajax(LeCloudVideoAPI.LeCloudServerTimeAPI + '?tn=' + Math.random(), {
            error: (what, status, error) => {
                let time = Math.floor(new Date().getTime() / 1000);
                this.onLoadFailed('load timestamp failed,use localtime:' + time);
                callback(time);
            },
            success: (data, status, what) => {
                callback(JSON.parse(data)['stime']);
            },
        });
    }
    get_videolist(time) {
        let _request_data = {};
        _request_data.video = LeCloudVideoAPI.vu;
        _request_data.vtype = 'm3u8';
        _request_data.ts = time;
        _request_data.user = LeCloudVideoAPI.api_user;
        _request_data.sign = LeCloudVideoAPI.getInstance.get_sign(_request_data);
        $.ajax(LeCloudVideoAPI.LeCloudServerAPI, {
            error: (what, status, error) => {
                this.onLoadFailed('getLeCloudVideoList');
            },
            success: (data, status, what) => {
                let obj = JSON.parse(data);
                if (obj['data'] && obj['data']['video_list']) {
                    obj = obj['data']['video_list'];
                    for (var name in obj) {
                        for (var i = 0; i < LeCloudVideoAPI.need_decode_key.length; i++)
                            obj[name][LeCloudVideoAPI.need_decode_key[i]] = window.btoa(obj[name][LeCloudVideoAPI.need_decode_key[i]]).toString();
                        this._final_data.push(obj[name]);
                    }
                }
                else {
                    console.log(obj);
                }
                window[PlayerConstant_1.default.player_videolist] = this._final_data;
                this.parse_videolist();
            },
            data: _request_data,
        });
    }
    parse_videolist() {
        let video_lists = JSON.parse(this._final_data);
        if (video_lists) {
            video_lists = video_lists['data'];
            if (video_lists) {
                video_lists = video_lists['video_list'];
                this.video_list = video_lists;
                this.callback(this.video_list);
                return;
            }
        }
        console.log('LeCloudVideoAPI.parse_videolist:failed!', this.data);
    }
    /**
     * 加密方式.弱智级别.毫无疑义.到底是为了防止谁使用?!?!?
     * @return
     */
    get_sign(_request_data) {
        var temp_arr = [];
        for (var name in _request_data)
            temp_arr.push(name + _request_data[name]);
        temp_arr.sort();
        return md5_1.default.hashStr(temp_arr.join('') + LeCloudVideoAPI.apr_secret); // .slice(8, 16 + 8);
    }
    getVideoResolutionURL(type) {
        for (let v in this.videolist) {
            let video_info = this.videolist[v];
            if (video_info['definition'] == type) {
                return video_info['main_url'];
            }
        }
        return '';
    }
    /**
     * 返回获取的数据
     * @returns {any}
     */
    get data() {
        return this._final_data;
    }
    /**
     * 返回解析过的视频数据.
     * @returns {any}
     */
    get videolist() {
        return this.video_list;
    }
    onLoadFailed(msg) {
        console.log('LeCloudVideoAPI.error:' + msg);
    }
}
LeCloudVideoAPI.LeCloudServerProxy = 'http://bilibili.moe/api/video/VideoAPI.php?api=LeCloudVideo&video_unique=';
LeCloudVideoAPI.LeCloudServerTimeAPI = 'http://api.letv.com/time';
LeCloudVideoAPI.LeCloudServerAPI = 'http://api.letvcloud.com/getplayurl.php';
LeCloudVideoAPI.need_decode_key = ['backup_url_1', 'backup_url_2', 'backup_url_3', 'main_url'];
LeCloudVideoAPI.api_user = '9a41a0d696';
LeCloudVideoAPI.apr_secret = 'f596293422b26d65d42c82daae6e0437';
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = LeCloudVideoAPI;
//# sourceMappingURL=LeCloudVideoAPI.js.map
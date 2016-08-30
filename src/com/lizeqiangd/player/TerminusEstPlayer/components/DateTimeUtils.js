"use strict";
/**
 * Created by lizeq on 8/26/2016.
 */
/**
 * 时间编码组件.
 * @ori_author 勇一 (TFT)
 * @author Lizeqiangd
 * 20141111 增加jwplayer的东西
 * 20160826 转为HTML TS模式
 */
class DateTimeUtils {
    /**
     * 判断传入的年份是否为闰年
     * @param year 传入的年份
     * @return 返回是否为闰年, true表示闰年
     */
    static isLeapYear(year) {
        if (year % 100 == 0) {
            if (year % 400 == 0) {
                return true;
            }
            return false;
        }
        else {
            if (year % 4 == 0) {
                return true;
            }
            else {
                return false;
            }
        }
    }
    /**
     * 返回YYYY-MM-DD
     */
    static getTime(now = null) {
        let date = now ? now : new Date();
        let hour = (date.getHours() > 9) ? date.getHours() : "0" + date.getHours();
        let minutes = (date.getMinutes() > 9) ? date.getMinutes() : "0" + date.getMinutes();
        let seconds = (date.getSeconds() > 9) ? date.getSeconds() : "0" + date.getSeconds();
        return hour + ":" + minutes + ":" + seconds;
    }
    /**
     * HH:MM:SS格式的日期字符串
     */
    static getDate(now = null) {
        let date = now ? now : new Date();
        let year = date.getFullYear();
        let month = (date.getMonth() + 1 > 9) ? date.getMonth() + 1 : "0" + (date.getMonth() + 1);
        let date_s = (date.getDate() > 0) ? date.getDate() : "0" + date.getDate();
        return year + "-" + month + "-" + date_s;
    }
    /**
     * 当前日期和时间 格式为  yyyy-mm-dd hh:mm:ss
     */
    static getDateTime(now = null) {
        return DateTimeUtils.getDate(now) + " " + DateTimeUtils.getTime(now);
    }
    /**
     * 通过传入的秒数返回MM:SS格式的字符串
     * @param seconds 秒数的整数值
     * @return 返回MM:SS格式的时间字符串
     */
    static formatSecond(seconds) {
        let haveplayminite = Math.floor(seconds / 60);
        let haveplaysecond = Math.floor(Math.floor(seconds) % 60);
        let haveplayminite_s = haveplayminite.toString();
        let haveplaysecond_s = haveplaysecond.toString();
        if (haveplayminite < 10) {
            haveplayminite_s = "0" + haveplayminite_s;
        }
        if (haveplaysecond < 10) {
            haveplaysecond_s = "0" + haveplaysecond_s;
        }
        let out_put = haveplayminite_s + ":" + haveplaysecond_s;
        return out_put;
    }
    /**
     * 通过传入的毫秒时间,返回MM:SS格式的字符串
     * @param millisecond 毫秒的整数值
     * @return 返回MM:SS格式的字符串
     *
     */
    static formatMillisecond(millisecond) {
        let haveplayminite = Math.floor(millisecond / 60000);
        let haveplaysecond = Math.floor(Math.floor(millisecond / 1000) % 60);
        let haveplayminite_s = haveplayminite.toString();
        let haveplaysecond_s = haveplaysecond.toString();
        if (haveplayminite < 10) {
            haveplayminite_s = "0" + haveplayminite.toString();
        }
        if (haveplaysecond < 10) {
            haveplaysecond_s = "0" + haveplaysecond.toString();
        }
        let out_put = haveplayminite_s + ":" + haveplaysecond_s;
        return out_put;
    }
    /**
     * 获取一个通过时间来生成的字符串
     */
    static getTimestring() {
        let date = new Date();
        let returnStr = date.getFullYear().toString() + date.getMonth().toString() + date.getDate().toString() + date.getHours().toString()
            + date.getMinutes().toString() + date.getMilliseconds().toString();
        return returnStr;
    }
    /**
     * 转化一个string格式的时间为秒数 Supported are 00:03:00.1 / 03:00.1 / 180.1s / 3.2m / 3.2h
     * @param str    The input string. Supported are 00:03:00.1 / 03:00.1 / 180.1s / 3.2m / 3.2h
     * @return        The number of seconds.
     **/
    static seconds(str) {
        str = str.replace(',', '.');
        let arr = str.split(':');
        let sec = 0;
        if (str.substr(-2) == 'ms') {
            sec = parseInt(str.substr(0, str.length - 2)) / 1000;
        }
        else if (str.substr(-1) == 's') {
            sec = parseInt(str.substr(0, str.length - 1));
        }
        else if (str.substr(-1) == 'm') {
            sec = parseInt(str.substr(0, str.length - 1)) * 60;
        }
        else if (str.substr(-1) == 'h') {
            sec = parseInt(str.substr(0, str.length - 1)) * 3600;
        }
        else if (arr.length > 1) {
            sec = parseInt(arr[arr.length - 1]);
            sec += parseInt(arr[arr.length - 2]) * 60;
            if (arr.length == 3) {
                sec += parseInt(arr[arr.length - 3]) * 3600;
            }
        }
        else {
            sec = parseInt(str);
        }
        return sec;
    }
    /**
     * 解析传入的YYYY-MM-DD格式的字符串,按照Date对象的方式返回
     * @param s 输入的字符串对象
     * @return 返回转换后的Date
     */
    static parseDate(s) {
        let da = s.split("-");
        return new Date(parseInt(da[0], 10), parseInt(da[1], 10) - 1, parseInt(da[2], 10));
    }
    /** Remove white space from before and after a string. **/
    static trim(s) {
        return s.replace(/^\s+/, '').replace(/\s+$/, '');
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = DateTimeUtils;
//# sourceMappingURL=DateTimeUtils.js.map
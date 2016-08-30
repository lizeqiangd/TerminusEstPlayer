/**
 * Created by lizeq on 8/29/2016.
 */
"use strict";
/// <reference path="./../../utils/jquery.d.ts" />
const PlayerConstant_1 = require('./../../system/constant/PlayerConstant');
const KokoroBaseUnit_1 = require('./../../abstract/KokoroBaseUnit');
const UnitEvent_1 = require('./../../events/UnitEvent');
class sld_general extends KokoroBaseUnit_1.default {
    constructor() {
        super();
        this._now = 0;
        this._max = 100;
        this._min = 0;
        this._buffer = 0;
        this._buffer_array = [];
        this.adjustNumber = 3;
        this.isUpdateImmediately = true;
        this.createElement();
        this.addEventListener('mousedown', this.onMouseEvent);
        this.addEventListener('mouseout', this.onMouseEvent);
        this.addEventListener('mouseover', this.onMouseEvent);
        this.addEventListener('mousemove', this.onMouseEvent);
    }
    config() {
    }
    /**
     * 设置已经缓存长度
     * @param e
     */
    setBuffer(e) {
        if (this._buffer == e)
            return;
        this._buffer_array = [0, e];
        this._buffer = e;
        if (this.isUpdateImmediately)
            this.updatePosition();
    }
    /**
     * 设置已经缓存长度,数组模式!
     * @param e
     */
    setBufferArray(e) {
        if (this._buffer_array === e || e.length % 2 != 0)
            return;
        this._buffer_array = e;
        if (this.isUpdateImmediately)
            this.updatePosition();
    }
    onMouseEvent(e) {
        console.log('sld', e.type);
        switch (e.type) {
            case 'mousedown':
                break;
            case 'mouseout':
                break;
            case 'mouseover':
                break;
            case 'mousemove':
                break;
            default:
        }
    }
    displayPointer(value) {
        if (value) {
            $(this.pointer).show();
        }
        else {
            $(this.pointer).hide();
        }
    }
    set setMax(value) {
        if (this._max == value)
            return;
        this._max = value;
        this.updatePosition();
    }
    set setMin(value) {
        if (this._min == value)
            return;
        this._min = value;
        this.updatePosition();
    }
    set setNow(value) {
        if (this._now == value)
            return;
        this._now = value;
        this.updatePosition();
    }
    onUpdateComplete() {
        this._now = ($(this.bar_play).width() / $(this.element).width()) * (this._max - this._min);
        this.dispatchEvent(new UnitEvent_1.default(UnitEvent_1.default.CHANGE, this._now.toFixed(2)));
    }
    updatePosition() {
        $(this.bar_play).width(this._now / (this._max - this._min) * $(this.element).width());
        $(this.pointer).offset({ top: 0, left: $(this.bar_play).width() });
    }
    onUpdateHandle() {
        this._now = ($(this.bar_play).width() / $(this.element).width()) * (this._max - this._min);
        this.dispatchEvent(new UnitEvent_1.default(UnitEvent_1.default.CHANGE, this._now.toFixed(2)));
    }
    createElement() {
        this._element = document.createElement('div');
        this.element.className = PlayerConstant_1.default.class_sld_general;
        this.pointer = document.createElement('div');
        this.pointer.className = PlayerConstant_1.default.class_sld_general_pointer;
        this.bar_background = document.createElement('div');
        this.bar_background.className = PlayerConstant_1.default.class_sld_general_background;
        this.bar_buffer = document.createElement('div');
        this.bar_buffer.className = PlayerConstant_1.default.class_sld_general_buffer;
        this.bar_play = document.createElement('div');
        this.bar_play.className = PlayerConstant_1.default.class_sld_general_play;
        this.bar_videojj = document.createElement('div');
        this.bar_videojj.className = PlayerConstant_1.default.class_sld_general_videojj;
    }
    getPixelBySecond(value) {
        if (value > this._max)
            value = this._max;
        if (value < 0)
            value = 0;
        return $(this.element).width() * value / this._max;
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = sld_general;
//# sourceMappingURL=sld_general.js.map
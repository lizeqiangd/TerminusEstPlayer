/**
 * Created by lizeq on 8/29/2016.
 */

/// <reference path="./../../utils/jquery.d.ts" />

import PlayerConstant from './../../system/constant/PlayerConstant';
import KokoroBaseUnit from './../../abstract/KokoroBaseUnit';
import UnitEvent from './../../events/UnitEvent';

export default class sld_general extends KokoroBaseUnit {

    _now: number = 0;
    _max: number = 100;
    _min: number = 0;
    _buffer: number = 0;
    _buffer_array: Array<number> = [];

    adjustNumber: number = 3;

    pointer: HTMLElement;

    bar_background: HTMLElement;
    bar_buffer: HTMLElement;
    bar_play: HTMLElement;
    bar_videojj: HTMLElement;

    isUpdateImmediately: boolean = true;

    constructor() {
        super();
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
    setBuffer(e: number): void {
        if (this._buffer == e) return;
        this._buffer_array = [0, e];
        this._buffer = e;
        if (this.isUpdateImmediately)
            this.updatePosition()
    }

    /**
     * 设置已经缓存长度,数组模式!
     * @param e
     */
    setBufferArray(e: Array<number>): void {
        if (this._buffer_array === e || e.length % 2 != 0) return;
        this._buffer_array = e;
        if (this.isUpdateImmediately)
            this.updatePosition()
    }

    onMouseEvent(e: Event) {
        console.log('sld', e.type)
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

    displayPointer(value: boolean) {
        if (value) {
            $(this.pointer).show();
        } else {
            $(this.pointer).hide();
        }
    }


    set setMax(value: number) {
        if (this._max == value)
            return;
        this._max = value;
        this.updatePosition();
    }

    set setMin(value: number) {
        if (this._min == value)
            return;
        this._min = value;
        this.updatePosition();
    }

    set setNow(value: number) {
        if (this._now == value)
            return;
        this._now = value;
        this.updatePosition()
    }

    onUpdateComplete(): void {
        this._now = ($(this.bar_play).width() / $(this.element).width()) * (this._max - this._min);
        this.dispatchEvent(new UnitEvent(UnitEvent.CHANGE, this._now.toFixed(2)));
    }

    updatePosition(): void {
        $(this.bar_play).width(this._now / (this._max - this._min) * $(this.element).width());
        $(this.pointer).offset({top:0, left:$(this.bar_play).width()});
    }

    onUpdateHandle(): void {
        this._now = ($(this.bar_play).width() / $(this.element).width()) * (this._max - this._min);
        this.dispatchEvent(new UnitEvent(UnitEvent.CHANGE, this._now.toFixed(2)));
    }

    createElement() {
        this._element = document.createElement('div');
        this.element.className = PlayerConstant.class_sld_general;

        this.pointer = document.createElement('div');
        this.pointer.className = PlayerConstant.class_sld_general_pointer;

        this.bar_background = document.createElement('div');
        this.bar_background.className = PlayerConstant.class_sld_general_background;

        this.bar_buffer = document.createElement('div');
        this.bar_buffer.className = PlayerConstant.class_sld_general_buffer;

        this.bar_play = document.createElement('div');
        this.bar_play.className = PlayerConstant.class_sld_general_play;

        this.bar_videojj = document.createElement('div');
        this.bar_videojj.className = PlayerConstant.class_sld_general_videojj;

    }

    getPixelBySecond(value: number): number {
        if (value > this._max) value = this._max;
        if (value < 0) value = 0;
        return $(this.element).width() * value / this._max
    }
}

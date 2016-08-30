/**
 * Created by lizeq on 8/29/2016.
 */

/// <reference path="./../../utils/jquery.d.ts" />

import PlayerConstant from './../../system/constant/PlayerConstant';
import KokoroBaseUnit from './../../abstract/KokoroBaseUnit';
import UnitEvent from './../../events/UnitEvent';
import btn_KokoroUI from './btn_KokoroUI';

export default class btn_KokoroStateUI extends btn_KokoroUI {

    public state_auto_change_enable: boolean = true;
    private _state: number = 0;
    private display_array: Array<string>;

    constructor(display_icon_class?: Array<string>) {
        super(display_icon_class[0]);
        this.createElement();

        this.display_array = display_icon_class;

        this.addEventListener('click', this.onMouseClick);
    }

    onMouseClick(e: Event) {
        this.dispatchEvent(new UnitEvent(UnitEvent.CLICK, this._state));
    }


    createElement() {
        this._element = document.createElement('div');
        this.element.className = PlayerConstant.class_btn_KokoroStateUI;
    }


    updateDisplayIcon()
    {
        this.setDisplayIcon(this.display_array[this.state]);
    }


    get state(): number {
        return this._state;
    }

    /**
     * 设置状态.会更新画面.
     */
    set state(value: number) {
        this.onMouseOut(null);
        this._state = value;
        this.updateDisplayIcon()
    }
}

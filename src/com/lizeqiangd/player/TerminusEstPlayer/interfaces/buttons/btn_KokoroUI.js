/**
 * Created by lizeq on 8/29/2016.
 */
"use strict";
/// <reference path="./../../utils/jquery.d.ts" />
const PlayerConstant_1 = require('./../../system/constant/PlayerConstant');
const KokoroBaseUnit_1 = require('./../../abstract/KokoroBaseUnit');
class btn_KokoroUI extends KokoroBaseUnit_1.default {
    constructor(displayIcon) {
        super();
        this._isSelected = false;
        this.anime_time = .2;
        this._anime_color = 0x0859FB /*0xf25d8e*/;
        this._default_anime_color = 0xffffff;
        this.needAnimeEffect = true;
        this.createElement();
        if (displayIcon)
            this.setDisplayIcon(displayIcon);
        this.element.addEventListener('click', this.onMouseClick);
        this.element.addEventListener('mousedown', this.onMouseDown);
        this.element.addEventListener('mouseout', this.onMouseOut);
        this.element.addEventListener('mouseup', this.onMouseUp);
        this.element.addEventListener('mouseover', this.onMouseOver);
    }
    onMouseClick(e) {
        console.log(e.type);
    }
    onMouseDown(e) {
        console.log(e.type);
    }
    onMouseOut(e) {
        console.log(e.type);
    }
    onMouseUp(e) {
        console.log(e.type);
    }
    onMouseOver(e) {
        console.log(e.type);
    }
    setDisplayIcon(display_icon) {
        if (!display_icon)
            return;
        $(this.element).removeClass(this._displayIcon);
        $(this.element).addClass(display_icon);
        this._displayIcon = display_icon;
    }
    createElement() {
        this._element = document.createElement('div');
        this.element.className = PlayerConstant_1.default.class_btn_KokoroUI;
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = btn_KokoroUI;
//# sourceMappingURL=btn_KokoroUI.js.map
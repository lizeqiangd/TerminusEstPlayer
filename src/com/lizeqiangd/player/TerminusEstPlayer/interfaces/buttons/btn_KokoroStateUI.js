/**
 * Created by lizeq on 8/29/2016.
 */
"use strict";
/// <reference path="./../../utils/jquery.d.ts" />
const PlayerConstant_1 = require('./../../system/constant/PlayerConstant');
const UnitEvent_1 = require('./../../events/UnitEvent');
const btn_KokoroUI_1 = require('./btn_KokoroUI');
class btn_KokoroStateUI extends btn_KokoroUI_1.default {
    constructor(display_icon_class) {
        super(display_icon_class[0]);
        this.state_auto_change_enable = true;
        this._state = 0;
        this.createElement();
        this.display_array = display_icon_class;
        this.addEventListener('click', this.onMouseClick);
    }
    onMouseClick(e) {
        this.dispatchEvent(new UnitEvent_1.default(UnitEvent_1.default.CLICK, this._state));
    }
    createElement() {
        this._element = document.createElement('div');
        this.element.className = PlayerConstant_1.default.class_btn_KokoroStateUI;
    }
    updateDisplayIcon() {
        this.setDisplayIcon(this.display_array[this.state]);
    }
    get state() {
        return this._state;
    }
    /**
     * 设置状态.会更新画面.
     */
    set state(value) {
        this.onMouseOut(null);
        this._state = value;
        this.updateDisplayIcon();
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = btn_KokoroStateUI;
//# sourceMappingURL=btn_KokoroStateUI.js.map
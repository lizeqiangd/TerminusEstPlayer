/**
 * Created by lizeq on 8/29/2016.
 */
"use strict";
/// <reference path="./../../utils/jquery.d.ts" />
const PlayerConstant_1 = require('./../../system/constant/PlayerConstant');
const KokoroBaseUnit_1 = require('./../../abstract/KokoroBaseUnit');
const VideoControlButtonManager_1 = require('./VideoControlButtonManager');
class KokoroVideoController extends KokoroBaseUnit_1.default {
    constructor() {
        super();
        this.createElement();
        this.vcbm = new VideoControlButtonManager_1.default();
        this.element.appendChild(this.vcbm.element);
        this.getJQuerySelector.addClass('background');
    }
    createElement() {
        this._element = document.createElement('div');
        this.element.className = PlayerConstant_1.default.class_KokoroVideoController;
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = KokoroVideoController;
//# sourceMappingURL=KokoroVideoController.js.map
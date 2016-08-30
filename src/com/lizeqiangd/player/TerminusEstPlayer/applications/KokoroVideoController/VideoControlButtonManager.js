/**
 * Created by lizeq on 8/29/2016.
 */
"use strict";
/// <reference path="./../../utils/jquery.d.ts" />
const PlayerConstant_1 = require('./../../system/constant/PlayerConstant');
const KokoroBaseUnit_1 = require('./../../abstract/KokoroBaseUnit');
class VideoControlButtonManager extends KokoroBaseUnit_1.default {
    constructor() {
        super();
        this.createElement();
    }
    createElement() {
        this._element = document.createElement('div');
        this.element.className = PlayerConstant_1.default.class_VideoControlButtonManager;
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = VideoControlButtonManager;
//# sourceMappingURL=VideoControlButtonManager.js.map
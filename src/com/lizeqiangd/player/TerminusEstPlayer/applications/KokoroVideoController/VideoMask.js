/**
 * Created by lizeq on 8/25/2016.
 */
/// <reference path='./../../utils/jquery.d.ts'/>
"use strict";
const PlayerConstant_1 = require('./../../system/constant/PlayerConstant');
const KokoroBaseUnit_1 = require('./../../abstract/KokoroBaseUnit');
class VideoMask extends KokoroBaseUnit_1.default {
    constructor() {
        super();
        this.createElement();
    }
    createElement() {
        this._element = document.createElement('div');
        this.element.className = PlayerConstant_1.default.class_videomask;
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = VideoMask;
//# sourceMappingURL=VideoMask.js.map
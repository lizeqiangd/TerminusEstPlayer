/**
 * Created by lizeq on 8/25/2016.
 */
/// <reference path='./../../utils/jquery.d.ts'/>
"use strict";
const PlayerConstant_1 = require('../../system/constant/PlayerConstant');
class VideoMask {
    constructor(parent) {
        this.createElement();
    }
    createElement() {
        this.element = document.createElement('div');
        this.element.className = PlayerConstant_1.default.class_videomask;
    }
    get getElement() {
        return this.element;
    }
    display(value) {
        if (value) {
            $(this.element).fadeIn();
        }
        else {
            $(this.element).fadeOut();
        }
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = VideoMask;
//# sourceMappingURL=VideoMask.js.map
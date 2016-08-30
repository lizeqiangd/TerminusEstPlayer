/**
 * Created by lizeq on 8/29/2016.
 */

/// <reference path="./../../utils/jquery.d.ts" />

import PlayerConstant from './../../system/constant/PlayerConstant';
import KokoroBaseUnit from './../../abstract/KokoroBaseUnit';

export default class VideoControlButtonManager extends KokoroBaseUnit {

    constructor() {
        super();
        this.createElement();

    }

    createElement() {
        this._element = document.createElement('div');
        this.element.className = PlayerConstant.class_VideoControlButtonManager;
    }


}

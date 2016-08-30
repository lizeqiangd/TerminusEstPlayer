/**
 * Created by lizeq on 8/29/2016.
 */

/// <reference path="./../../utils/jquery.d.ts" />

import PlayerConstant from './../../system/constant/PlayerConstant';
import KokoroBaseUnit from './../../abstract/KokoroBaseUnit';
import VideoControlButtonManager from './VideoControlButtonManager';


export default class KokoroVideoController extends KokoroBaseUnit {

    vcbm:VideoControlButtonManager

    constructor() {
        super();
        this.createElement();

        this.vcbm=new VideoControlButtonManager();
        this.element.appendChild(this.vcbm.element);

        this.getJQuerySelector.addClass('background');

    }

    createElement() {
        this._element = document.createElement('div');
        this.element.className = PlayerConstant.class_KokoroVideoController;
    }


}

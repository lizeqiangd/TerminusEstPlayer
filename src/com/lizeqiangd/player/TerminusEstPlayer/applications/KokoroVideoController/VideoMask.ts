/**
 * Created by lizeq on 8/25/2016.
 */
/// <reference path='./../../utils/jquery.d.ts'/>

import PlayerConstant from './../../system/constant/PlayerConstant';
import KokoroBaseUnit from './../../abstract/KokoroBaseUnit';
import UnitEvent from './../../events/UnitEvent';

export default class VideoMask extends KokoroBaseUnit{

    constructor(){
        super();
        this.createElement();

    }

    createElement(){
        this._element=document.createElement('div');
        this.element.className=PlayerConstant.class_videomask;
    }



}

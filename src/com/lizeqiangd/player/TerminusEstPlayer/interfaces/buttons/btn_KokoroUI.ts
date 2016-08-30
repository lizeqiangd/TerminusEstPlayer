/**
 * Created by lizeq on 8/29/2016.
 */

/// <reference path="./../../utils/jquery.d.ts" />

import PlayerConstant from './../../system/constant/PlayerConstant';
import KokoroBaseUnit from './../../abstract/KokoroBaseUnit';
import UnitEvent from './../../events/UnitEvent';

export default class btn_KokoroUI extends KokoroBaseUnit {

    protected _isSelected: boolean = false;
    protected anime_time: number = .2;
    private _anime_color: number = 0x0859FB/*0xf25d8e*/;
    private _default_anime_color: number = 0xffffff;
    public needAnimeEffect: boolean = true;
    protected _displayIcon: string;


    constructor(displayIcon?: string) {
        super();
        this.createElement();
        if (displayIcon) this.setDisplayIcon(displayIcon);

        this.element.addEventListener('click', this.onMouseClick)
        this.element.addEventListener('mousedown', this.onMouseDown)
        this.element.addEventListener('mouseout', this.onMouseOut)
        this.element.addEventListener('mouseup', this.onMouseUp)
        this.element.addEventListener('mouseover', this.onMouseOver)
    }

    onMouseClick(e:Event){
        console.log(e.type)
    }
    onMouseDown(e:Event){
        console.log(e.type)

    }
    onMouseOut(e:Event){
        console.log(e.type)

    }
    onMouseUp(e:Event){
        console.log(e.type)

    }
    onMouseOver(e:Event){
        console.log(e.type)

    }



    setDisplayIcon(display_icon: string) {
        if (!display_icon) return;
        $(this.element).removeClass(this._displayIcon);
        $(this.element).addClass(display_icon);
        this._displayIcon = display_icon;

    }

    createElement() {
        this._element = document.createElement('div');
        this.element.className = PlayerConstant.class_btn_KokoroUI;
    }


}

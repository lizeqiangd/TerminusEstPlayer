/**
 * Created by lizeq on 8/25/2016.
 */
/// <reference path='./../../utils/jquery.d.ts'/>

import PlayerConstant from '../../system/constant/PlayerConstant';

export default class VideoMask{
    private element:HTMLElement;

    constructor(parent:HTMLElement){
        this.createElement();
    }

    createElement(){
        this.element=document.createElement('div');
        this.element.className=PlayerConstant.class_videomask;
    }

    get getElement():HTMLElement{
        return this.element;
    }


    display(value:boolean){
        if(value){
            $(this.element).fadeIn();
        }else{
            $(this.element).fadeOut();
        }
    }

}

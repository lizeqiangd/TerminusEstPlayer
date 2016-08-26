
export default class KokoroBaseUnit{
    protected _element:any;

    constructor(){

    }

    addEventListener(event_type:string,handler:Function){

        this._element.addEventListener(event_type,handler);
    }

    removeEventListener(event_type:string,handler:Function){

        this._element.removeEventListener(event_type,handler);
    }

    dispatchEvent(e:Event){
        this._element.dispatchEvent(e);
    }

    get element():HTMLElement{
        return this._element;
    }

}
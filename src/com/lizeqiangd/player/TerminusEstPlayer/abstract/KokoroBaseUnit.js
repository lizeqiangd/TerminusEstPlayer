"use strict";
class KokoroBaseUnit {
    constructor() {
    }
    addEventListener(event_type, handler) {
        this._element.addEventListener(event_type, handler);
    }
    removeEventListener(event_type, handler) {
        this._element.removeEventListener(event_type, handler);
    }
    dispatchEvent(e) {
        this._element.dispatchEvent(e);
    }
    display(value) {
        if (value) {
            $(this.element).fadeIn();
        }
        else {
            $(this.element).fadeOut();
        }
    }
    get element() {
        return this._element;
    }
    get getJQuerySelector() {
        return $(this.element);
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = KokoroBaseUnit;
//# sourceMappingURL=KokoroBaseUnit.js.map
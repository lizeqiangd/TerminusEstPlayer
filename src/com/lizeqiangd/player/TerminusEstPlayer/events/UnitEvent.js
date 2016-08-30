"use strict";
/**
 * Created by lizeq on 8/29/2016.
 */
class UnitEvent extends Event {
    constructor(type, DispatchData = null) {
        super(type);
        this.data = DispatchData;
    }
}
//模块组件触发的事件.
UnitEvent.UNIT_ACTIVE = "unit_active";
UnitEvent.UNIT_INACTIVE = "unit_inactive";
UnitEvent.UNIT_ERROR = "unit_error";
UnitEvent.UNIT_OPENED = "unit_opened";
UnitEvent.UNIT_COMPLETED = "unit_completed";
UnitEvent.UNIT_CLOSE = "unit_close";
//单独的组件触发的事件
UnitEvent.SUBMIT = "unit_submit";
UnitEvent.CLICK = "unit_click";
UnitEvent.CLOSE = "unit_close";
UnitEvent.CANCEL = "unit_cancel";
UnitEvent.BROWSE = "unit_browse";
UnitEvent.CREATE = "unit_create";
UnitEvent.EDIT = "unit_edit";
UnitEvent.DELETE = "unit_delete";
UnitEvent.SELECTED = "unit_selected";
UnitEvent.CHANGE = "unit_change";
UnitEvent.SEARCH = "unit_search";
UnitEvent.CONFIG = "unit_config";
//特殊操控指令
UnitEvent.POSITION_CHANGE = "position_change";
UnitEvent.STATE_CHANGE = "state_change";
UnitEvent.REPORT = "report";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = UnitEvent;
//# sourceMappingURL=UnitEvent.js.map
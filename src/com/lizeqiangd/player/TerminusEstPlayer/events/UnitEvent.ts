/**
 * Created by lizeq on 8/29/2016.
 */
export default class UnitEvent extends Event {
    //模块组件触发的事件.
    public static UNIT_ACTIVE: string = "unit_active";
    public static UNIT_INACTIVE: string = "unit_inactive";
    public static UNIT_ERROR: string = "unit_error";
    public static UNIT_OPENED: string = "unit_opened";
    public static UNIT_COMPLETED: string = "unit_completed";
    public static UNIT_CLOSE: string = "unit_close";
    //单独的组件触发的事件
    public static SUBMIT: string = "unit_submit"
    public static CLICK: string = "unit_click";
    public static CLOSE: string = "unit_close";
    public static CANCEL: string = "unit_cancel";
    public static BROWSE: string = "unit_browse";
    public static CREATE: string = "unit_create";
    public static EDIT: string = "unit_edit";
    public static DELETE: string = "unit_delete";
    public static SELECTED: string = "unit_selected";
    public static CHANGE: string = "unit_change";
    public static SEARCH: string = "unit_search";
    public static CONFIG: string = "unit_config";
    //特殊操控指令
    public static POSITION_CHANGE: string = "position_change";
    public static STATE_CHANGE: string = "state_change";
    public static REPORT: string = "report";
    //界面风格事件

    public data: any;

    constructor(type: string, DispatchData: any = null) {
        super(type);
        this.data = DispatchData;
    }
}
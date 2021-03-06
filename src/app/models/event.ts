export class EventWL {
    Context: string;
    Events: EventElement[];
    ListProperty: string;
    Rules: EventRule[];

}
export class EventRule {
    Name: string;
}
export class EventElement {
    EventName: string;
    UiFieldId: string;
    ViewModelFieldPath: string;
    ViewModelPath: string;
}
export class EventModel {
    EventName: string;
    EventType: EventType;
    ChangeEventType: ChangeEventType;
    ListProperty: string;
    UIField: string = "";
    ViewModelFieldPath: string;
}
export class ChangeEventType {
    static List: string = "List";
    static ViewModelFieldPath: string = "ViewModelFieldPath";
}
export class EventType {
    static Change: string = "change";
    static Changing: string = "changing";
    static Click: string = "click";
    static CustomEvent: string = "customEvent";
    static DialogClosed: string = "dialog.closed";
    static DialogOpened: string = "dialog.opened";
    static EditTableRowSelected: string = "editTable.rowselected";
    static GridShowDetails: string = "grid.showDetails";
    static KernelIntegrationCalculated: string = "kernelIntegration.calcuated";
    static KernelIntegrationCalculationFailed: string = "kernelIntegration.calcuationFailed";
    static KernelIntegrationFVCalculated: string = "kernelIntegration.FVcalcuated";
    static Message: string = "message";
    static ModuleModuleReady: string = "module.moduleReady";
    static ModuleModuleReadyWithVorgang: string = "module.moduleReadyWithVorgang";
    static ModuleModuleReadyWorkdone: string = "module.moduleReadyWorkdone";
    static ModulePopupModuleClosed: string = "module.popupModuleClosed";
    static PageBinding: string = "page.binding";
    static PageBound: string = "page.bound";
    static PageDisplayed: string = "page.displayed";
    static PageDisplaying: string = "page.displaying";
    static PageDisplayingOnForward: string = "page.displayingOnForward";
    static PageLeaving: string = "page.leaving";
    static PageLeavingBackward: string = "page.leavingBackward";
    static PageLeavingForward: string = "page.leavingForward";
    static ShowPage: string = "show.page";
    static ValidatePage: string = "validate.page";
}
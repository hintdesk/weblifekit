export class Command {
    Name: CommandType;
    CommandInitializeParameters: CommandInitializeParameter[];
    CommandExecuteParameter: CommandExecuteParameter;
    constructor() {
        this.Name = "";
        this.CommandInitializeParameters = [];
    }
}

export class CommandExecuteParameter {
    JsonTypeAssemblyName: string;
    JsonTypeName: string;
    Name: string;
    PlainText: string;
    ValueTypeArt: ElementType;
}

export class CommandInitializeParameter {
    Name: string;
    JsonTypeAssemblyName: string;
    JsonTypeName: string;
    PlainText: string;
    ValueTypeArt: ElementType;
    ViewModelPath: string;
}

export class CommandInitializeParameterName {
    static ApplicationName: string = "applicationName";
    static ArrayField: string = "arrayField";
    static Calculator: string = "calculator";
    static CalculatorArgument: string = "calculatorArgument";
    static ColumnIndex: string = "ColumnIndex";
    static CopyMode: string = "copyMode";
    static DestinationElement: string = "destinationElement";
    static DestinationObject: string = "destinationObject";
    static DisplayName: string = "displayName";
    static ErrorEventName: string = "errorEventName";
    static EventName: string = "eventName";
    static GridId: string = "gridId";
    static Height: string = "height";
    static HideClose: string = "hideClose";
    static Id: string = "Id";
    static InfoText: string = "infoText";
    static Message: string = "message";
    static Page: string = "page";
    static PageName: string = "pageName";
    static PreventChangesForNo: string = "preventChangesForNo";
    static Resizable: string = "resizable";
    static SourceElement: string = "sourceElement";
    static SourceObject: string = "sourceObject";
    static SourceProperty: string = "sourceProperty";
    static StateTable: string = "stateTable";
    static Synchronous: string = "synchronous";
    static TargetProperty: string = "targetProperty";
    static TemplateId: string = "templateId";
    static Title: string = "titel";
    static UIField: string = "UIField";
    static uiField: string = "uiField";
    static Validate: string = "validate";
    static Value: string = "value";
    static Width: string = "width";
}

export class CommandType {
    static ActionCommand: string = "actionCommand";
    static AddArrayElementCommand: string = "addArrayElementCommand";
    static AddItemAndShowGridDetailsCommand: string = "addItemAndShowGridDetailsCommand";
    static CalculateCommand: string = "calculateCommand";
    static ClearErrorInErrorProviderCommand = "clearErrorInErrorProviderCommand";
    static ConfirmCommandAndChangeSwitchValueCommand = "confirmCommandAndChangeSwitchValueCommand";
    static CopyObjectCommand = "copyObjectCommand";
    static CopyValueCommand: string = "copyValueCommand";
    static CopyValueInCurrentItemCommand: string = "copyValueInCurrentItemCommand";
    static CustomCommand: string = "customCommand";
    static DeleteArrayElementsCommand: string = "deleteArrayElementsCommand";
    static DisableGuiElementsCommand: string = "disableGuiElements";
    static EnableGuiElementsCommand: string = "enableGuiElements";
    static ExecuteApplicationCommand: string = "executeApplicationCommand";
    static FireEventCommand: string = "fireEventCommand";
    static GoToPageCommand: string = "goToPageCommand";
    static HideDetailsCommand: string = "hideDetailsCommand";
    static HideNavigationElementCommand: string = "hideNavigationElement";
    static HideGuiElementsCommand: string = "hideGuiElements";
    static RemoveAllArrayElementsCommand: string = "removeAllArrayElementsCommand";
    static RenameNavigationElementCommand: string = "renameNavigationElement";
    static SetErrorInErrorProviderCommand: string = "setErrorInErrorProviderCommand";
    static SetErrorInErrorProviderAndNotifyCommand: string = "setErrorInErrorProviderAndNotifyCommand";
    static SetWarningInWarningProviderAndNotifyCommand: string = "setWarningInWarningProviderAndNotifyCommand";
    static SetTextForAutoCompleteCommand: string = "setTextForAutoCompleteCommand";
    static SetToDefaultCommand: string = "setToDefaultCommand";
    static ShowDetailsCommand: string = "showDetailsCommand";
    static ShowGridDetailsCommand: string = "showGridDetailsCommand";
    static ShowGuiElementsCommand: string = "showGuiElements";
    static ShowNavigationElementCommand: string = "showNavigationElement";
    static ValidateCommand: string = "validateCommand";

}


export class ElementType {
    static Calculator: string = "Calculator";
    static Json: string = "Json";
    static PlainText: string = "PlainText";
    static Resource: string = "Resource";
    static SpringObjectName: string = "SpringObjectName";
}

export class CommandEventType {
    static EventDataField: string = "eventDataField";
    static EventDataPath: string = "eventDataPath";
    static EventTriggerField: string = "eventTriggerField";
}

export class PlainTextType {
    static NavigationContent: string = "navigationContent";
    static Properties: string = "Properties";
    static StateTableCalculator: string = "stateTableCalculator";
    static Synchronous: string = "synchronous";
}


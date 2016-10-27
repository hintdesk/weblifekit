import { ElementType } from './command'

export class CommandInitializeParameter {
    Name: string;
    JsonTypeAssemblyName: string;
    JsonTypeName: string;
    PlainText: string;
    ValueTypeArt: ElementType;
    ViewModelPath: string;
}

export class CommandInitializeParameterName 
{
    static ApplicationName : string = "applicationName";
    static ArrayField:string = "arrayField";
    static Calculator: string = "calculator";
    static CalculatorArgument : string ="calculatorArgument";
    static ColumnIndex: string  = "ColumnIndex";
    static CopyMode: string = "copyMode";
    static DestinationElement: string = "destinationElement";
    static DestinationObject:string = "destinationObject";
    static DisplayName:string = "displayName";
    static ErrorEventName: string = "errorEventName";
    static EventName: string ="eventName";
    static GridId:string = "gridId";
    static Height: string = "height";
    static HideClose: string = "hideClose";
    static Id:string = "Id";
    static InfoText: string = "infoText";
    static Message: string = "message";
    static Page: string = "page";
    static PageName: string = "pageName";
    static PreventChangesForNo: string = "preventChangesForNo";
    static Resizable: string = "resizable";
    static SourceElement : string = "sourceElement";
    static SourceObject: string = "sourceObject";
    static SourceProperty: string = "sourceProperty";
    static StateTable: string = "stateTable";
    static Synchronous: string ="synchronous";
    static TargetProperty: string = "targetProperty";
    static TemplateId: string = "templateId";
    static Title:string = "titel";    
    static UIField: string = "UIField";    
    static uiField: string = "uiField";
    static Validate: string = "validate";
    static Value: string = "value";
    static Width: string = "width";
}


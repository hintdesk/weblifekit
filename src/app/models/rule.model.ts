import { CommandType, ElementType, EventType } from './command'


export class RuleModel {
    ApplicationName: string = "";
    ArrayField: string = "";
    ArrayFieldName: string = "";
    Calculator:string = "";
    CalculatorArgumentType: ElementType
    CalculatorArgumentValue: string = "";
    CategoryArt: string = "";
    BadCommand: boolean = false;
    CommandType: CommandType;
    CopyMode: boolean = false;
    ColumnIndex: string = "";
    Condition: string = "TrueCondition";
    DestinationElementType: ElementType;
    DestinationElementValue: string = "";
    Dialog: string = "";
    DisplayNameType: ElementType;
    DisplayNameValue: string = "";
    ErrorEventName: string = "";
    ErrorTextType: ElementType;
    ErrorTextValue: string = "";
    EventName: string = "";
    EventType: EventType;
    EventTypeValue: string = "";
    GridId: string = "";
    Height:string = "";
    HideClose: boolean = false;
    Id: string = "";
    InfoText: string = "";
    JsonTypeAssemblyName: string = "";
    JsonTypeName: string = "";
    ListProperty: string = "";
    Message: string = "";
    Name: string = "";
    NavigationElement: string = "";
    Page: string = "";
    PageName: string = "";
    Parameter: string = "";
    ParentUIElement: string = "";
    Resizable: boolean = false;
    SourceElementType: ElementType;
    SourceElementValue: string = "";
    SourceProperty: string = "";
    SourcePropertyType: ElementType;
    StateTable: string = "";
    Synchronous: boolean = false;
    TargetProperty: string = "";
    TargetPropertyType: ElementType;
    TemplateId: string = "";
    Title: string = "";
    UIElement: string = "";
    UIField: string = "";
    Validate: boolean = true;
    Value: boolean = false;
    Width: string = "";
}
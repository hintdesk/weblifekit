import { Command, CommandType, ElementType, CommandEventType }  from './command';
import { Condition } from './condition';


export class Rule {   
    BadCommand: Command; 
    CategoryArt : string; 
    Condition : Condition;
    Command : Command;
    ListProperty: string;
    Name: string;

    constructor(ruleModel:RuleModel)
    {
        this.Name = ruleModel.Name;
        if (ruleModel.CategoryArt)
            this.CategoryArt = ruleModel.CategoryArt;

        if (ruleModel.ListProperty)        
            this.ListProperty  = ruleModel.ListProperty;            
        
        this.Condition = new Condition();
        this.Condition.Name = ruleModel.Condition;
        this.Command = new Command();                
        this.Command.Name = ruleModel.CommandType;
        
    }
}

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
    CommandEventType: CommandEventType;
    CommandEventTypeValue: string = "";    
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

export class RuleCategoryArt 
{
    static DataManipulation : string = "DataManipulation";
    static GuiManipulation: string ="GuiManipulation";
    static RequiredField : string = "RequiredField";
    static RequiredFieldInList: string = "RequiredFieldInList";
    
}
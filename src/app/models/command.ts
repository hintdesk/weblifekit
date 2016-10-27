import { CommandInitializeParameter }   from './commandInitializeParameter';
import { CommandExecuteParameter } from './commandExecuteParameter';

export class Command {
    Name:CommandType;    
    CommandInitializeParameters: CommandInitializeParameter[];
    CommandExecuteParameter: CommandExecuteParameter;
    constructor()
    {
        this.Name = "";
        this.CommandInitializeParameters = [];        
    }
}

export class CommandType 
{
    static ActionCommand: string = "actionCommand";
    static AddArrayElementCommand: string = "addArrayElementCommand";
    static AddItemAndShowGridDetailsCommand: string = "addItemAndShowGridDetailsCommand";
    static CalculateCommand : string = "calculateCommand";
    static ClearErrorInErrorProviderCommand = "clearErrorInErrorProviderCommand";
    static ConfirmCommandAndChangeSwitchValueCommand = "confirmCommandAndChangeSwitchValueCommand";
    static CopyObjectCommand = "copyObjectCommand";    
    static CopyValueCommand: string ="copyValueCommand";
    static CopyValueInCurrentItemCommand: string = "copyValueInCurrentItemCommand";
    static DeleteArrayElementsCommand: string = "deleteArrayElementsCommand";
    static DisableGuiElementsCommand: string = "disableGuiElements";
    static EnableGuiElementsCommand: string = "enableGuiElements";
    static ExecuteApplicationCommand:string = "executeApplicationCommand";
    static FireEventCommand:string  ="fireEventCommand";
    static GoToPageCommand:string = "goToPageCommand";
    static HideDetailsCommand: string = "hideDetailsCommand";
    static HideNavigationElementCommand: string = "hideNavigationElement";
    static HideGuiElementsCommand: string = "hideGuiElements";
    static RemoveAllArrayElementsCommand:string = "removeAllArrayElementsCommand";
    static RenameNavigationElementCommand:string = "renameNavigationElement";
    static SetErrorInErrorProviderCommand:string = "setErrorInErrorProviderCommand";
    static SetErrorInErrorProviderAndNotifyCommand: string = "setErrorInErrorProviderAndNotifyCommand";
    static SetWarningInWarningProviderAndNotifyCommand: string = "setWarningInWarningProviderAndNotifyCommand";    
    static SetTextForAutoCompleteCommand: string  ="setTextForAutoCompleteCommand";
    static SetToDefaultCommand: string = "setToDefaultCommand";
    static ShowDetailsCommand: string = "showDetailsCommand";
    static ShowGridDetailsCommand: string = "showGridDetailsCommand";
    static ShowGuiElementsCommand: string = "showGuiElements";
    static ShowNavigationElementCommand: string ="showNavigationElement";
    static ValidateCommand: string ="validateCommand";
    
}


export class ElementType 
{
    static Calculator: string = "Calculator";
    static Json: string = "Json";
    static PlainText : string = "PlainText";
    static Resource:string = "Resource";
    static SpringObjectName : string = "SpringObjectName";    
}

export class EventType {
    static EventDataField :string = "eventDataField";
    static EventDataPath: string = "eventDataPath";
    static EventTriggerField: string = "eventTriggerField";
}

export class PlainTextType {    
    static NavigationContent:string = "navigationContent";
    static Properties: string = "Properties";
    static StateTableCalculator: string = "stateTableCalculator";
    static Synchronous: string = "synchronous";
}


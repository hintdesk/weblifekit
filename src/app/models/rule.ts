import { Command }  from './command';
import { Condition } from './condition';
import { RuleModel} from './rule.model';

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

export class RuleCategoryArt 
{
    static DataManipulation : string = "DataManipulation";
    static GuiManipulation: string ="GuiManipulation";
    static RequiredField : string = "RequiredField";
    static RequiredFieldInList: string = "RequiredFieldInList";
    
}
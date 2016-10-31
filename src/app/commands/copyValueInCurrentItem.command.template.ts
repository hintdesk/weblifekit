import { Injectable }                           from '@angular/core';

import { NamingService }                        from '../services/naming.service';

import { CommandTemplate }                      from './command.template';
import { Command, CommandExecuteParameter, CommandInitializeParameter, CommandInitializeParameterName, CommandType, ElementType, PlainTextType } from '../models/command';
import { Rule, RuleCategoryArt ,RuleModel}                from '../models/rule';
import { BaseCommandTemplate } from './base.command.template';

@Injectable()
export class CopyValueInCurrentItemCommandTemplate extends BaseCommandTemplate {

    constructor(private namingService: NamingService) {
        super();
    }
    
    canHandle(ruleModel:RuleModel) : boolean {
        return ruleModel.CommandType === CommandType.CopyValueInCurrentItemCommand;
    }

    execute (ruleModel: RuleModel) : Rule {
        ruleModel.Name = this.namingService.getSetViewModelPath(ElementType.PlainText, ruleModel.DestinationElementValue,ruleModel.SourceElementValue);    
        ruleModel.CategoryArt = "";  
             
        var rule = new Rule(ruleModel);
        var value = "";    

        // if (ruleModel.SourceElementType === ElementType.Calculator)
        //     value = ruleModel.CalculatorArgumentValue;
        // else if (ruleModel.SourceElementType === ElementType.Json)
        //     value = ruleModel.JsonTypeName;             
        // else 
        //     value = ruleModel.SourceElementValue;
        
        

        //SourceElement
        var cipSourceElement = new CommandInitializeParameter();
        cipSourceElement.Name = CommandInitializeParameterName.SourceElement;
        cipSourceElement.PlainText = ruleModel.SourceElementValue;
        cipSourceElement.ValueTypeArt = ElementType.PlainText;
        // if (ruleModel.SourceElementType === ElementType.PlainText)
        //     cipSourceElement.PlainText = ruleModel.SourceElementValue;
        // else if (ruleModel.SourceElementType === ElementType.Calculator)            
        //     cipSourceElement.PlainText = PlainTextType.StateTableCalculator;
        // else if (ruleModel.SourceElementType === ElementType.Json)
        // {
        //     cipSourceElement.JsonTypeAssemblyName =ruleModel.JsonTypeAssemblyName;
        //     cipSourceElement.JsonTypeName = ruleModel.JsonTypeName;
        // }
        // else if (ruleModel.SourceElementType === ElementType.SpringObjectName)
        // {
        //     cipSourceElement.ViewModelPath = ruleModel.SourceElementValue;
        // }
        // cipSourceElement.ValueTypeArt = ruleModel.SourceElementType;
        rule.Command.CommandInitializeParameters.push(cipSourceElement);

        //CalculatorArgument
        // if (ruleModel.SourceElementType === ElementType.Calculator)
        // {
        //     var cipCalculatorArgument = new CommandInitializeParameter();
        //     cipCalculatorArgument.Name = CommandInitializeParameterName.CalculatorArgument;
        //     cipCalculatorArgument.PlainText = ruleModel.CalculatorArgumentValue;
        //     cipCalculatorArgument.ValueTypeArt = ruleModel.CalculatorArgumentType;
        //     rule.Command.CommandInitializeParameters.push(cipCalculatorArgument);
        // }

        //DestinationElement
        var cipDestinationElement = new CommandInitializeParameter();
        cipDestinationElement.Name = CommandInitializeParameterName.DestinationElement;
        cipDestinationElement.ViewModelPath = ruleModel.DestinationElementValue;
        cipDestinationElement.ValueTypeArt = ElementType.SpringObjectName;
        rule.Command.CommandInitializeParameters.push(cipDestinationElement);  
        return rule;  
    }
}
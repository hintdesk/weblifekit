import { Injectable }                           from '@angular/core';

import { NamingService }                        from '../services/naming.service';

import { CommandTemplate }                      from './command.template';
import { RuleModel }                            from '../models/rule.model';
import { Command, CommandExecuteParameter, CommandInitializeParameter, CommandInitializeParameterName, CommandType, ElementType, PlainTextType } from '../models/command';
import { Rule, RuleCategoryArt }                from '../models/rule';
import { BaseCommandTemplate } from './base.command.template';

@Injectable()
export class CopyValueCommandTemplate extends BaseCommandTemplate {

    constructor(private namingService: NamingService) {
        super();
    }
    
    canHandle(ruleModel:RuleModel) : boolean {
        return ruleModel.CommandType === CommandType.CopyValueCommand;
    }

    execute (ruleModel: RuleModel) : Rule {
        ruleModel.Name = this.namingService.getSetViewModelPath(ruleModel.SourceElementType, ruleModel.DestinationElementValue,ruleModel.SourceElementValue);
        ruleModel.CategoryArt = RuleCategoryArt.DataManipulation;
             
        var rule = new Rule(ruleModel);

        //SourceElement
        var cipSourceElement = new CommandInitializeParameter();
        cipSourceElement.Name = CommandInitializeParameterName.SourceElement;
        if (ruleModel.SourceElementType === ElementType.PlainText)
            cipSourceElement.PlainText = ruleModel.SourceElementValue;
        else if (ruleModel.SourceElementType === ElementType.Calculator)            
            cipSourceElement.PlainText = PlainTextType.StateTableCalculator;
        else if (ruleModel.SourceElementType === ElementType.Json)
        {            
            cipSourceElement.JsonTypeName = ruleModel.SourceElementValue;
            cipSourceElement.JsonTypeAssemblyName =ruleModel.JsonTypeAssemblyName;
        }
        else if (ruleModel.SourceElementType === ElementType.SpringObjectName)
        {
            cipSourceElement.ViewModelPath = ruleModel.SourceElementValue;
        }

        cipSourceElement.ValueTypeArt = ruleModel.SourceElementType;
        rule.Command.CommandInitializeParameters.push(cipSourceElement);

        //CalculatorArgument
        if (ruleModel.SourceElementType === ElementType.Calculator)
        {
            var cipCalculatorArgument = new CommandInitializeParameter();
            cipCalculatorArgument.Name = CommandInitializeParameterName.CalculatorArgument;
            cipCalculatorArgument.PlainText = ruleModel.SourceElementValue;
            cipCalculatorArgument.ValueTypeArt = ruleModel.CalculatorArgumentType;
            rule.Command.CommandInitializeParameters.push(cipCalculatorArgument);
        }

        //DestinationElement
        var cipDestinationElement = new CommandInitializeParameter();
        cipDestinationElement.Name = CommandInitializeParameterName.DestinationElement;
        cipDestinationElement.ViewModelPath = ruleModel.DestinationElementValue;
        cipDestinationElement.ValueTypeArt = ElementType.SpringObjectName;
        rule.Command.CommandInitializeParameters.push(cipDestinationElement);  
        return rule;  
    }
}
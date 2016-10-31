import { Injectable } from '@angular/core';

import { NamingService } from '../services/naming.service';

import { Command, CommandExecuteParameter, CommandInitializeParameter, CommandInitializeParameterName, CommandType, ElementType, PlainTextType } from '../models/command';
import { Rule, RuleCategoryArt,RuleModel } from '../models/rule';
import { BaseCommandTemplate } from './base.command.template';
import { Condition } from '../models/condition';

@Injectable()
export class CalculateCommandTemplate extends BaseCommandTemplate {

    constructor(private namingService: NamingService) {
        super();
    }
    canHandle(ruleModel: RuleModel): boolean {
        return ruleModel.CommandType === CommandType.CalculateCommand;
    }

    execute(ruleModel: RuleModel): Rule {
        ruleModel.Name = this.namingService.getForCalculate(ruleModel.Calculator, ruleModel.CalculatorArgumentValue);  
        var rule = new Rule(ruleModel);              

        //Calculator
        var cipCalculator = new CommandInitializeParameter();
        cipCalculator.Name = CommandInitializeParameterName.Calculator;
        cipCalculator.PlainText = ruleModel.Calculator;
        rule.Command.CommandInitializeParameters.push(cipCalculator);

        //CalculatorArgument
        var cipCalculatorArgument = new CommandInitializeParameter();
        cipCalculatorArgument.Name = CommandInitializeParameterName.CalculatorArgument;
        cipCalculatorArgument.PlainText = ruleModel.CalculatorArgumentValue;
        rule.Command.CommandInitializeParameters.push(cipCalculatorArgument);      
      
        return rule;
    }
}
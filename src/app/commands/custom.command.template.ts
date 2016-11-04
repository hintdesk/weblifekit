import { Injectable } from '@angular/core';

import { NamingProvider } from '../services/naming.provider';

import { Command, CommandExecuteParameter, CommandInitializeParameter, CommandInitializeParameterName, CommandType, ElementType, PlainTextType } from '../models/command';
import { Rule, RuleCategoryArt,RuleModel } from '../models/rule';
import { BaseCommandTemplate } from './base.command.template';
import { Condition } from '../models/condition';

@Injectable()
export class CustomCommandTemplate extends BaseCommandTemplate {

    constructor(private namingProvider: NamingProvider) {
        super();
    }
    canHandle(ruleModel: RuleModel): boolean {
        return ruleModel.CommandType === CommandType.CustomCommand;
    }

    execute(ruleModel: RuleModel): Rule {        
        ruleModel.CategoryArt = undefined; 

        var rule = new Rule(ruleModel);
        rule.Command.Name = this.namingProvider.lowerCaseFirstLetter(this.namingProvider.removeUnderscore(ruleModel.Name)) + "Command";    
        rule.Command.CommandInitializeParameters = undefined;

        if (ruleModel.Parameter)
        {
            var cepParameter = new CommandExecuteParameter();
            cepParameter.PlainText = ruleModel.Parameter;
            rule.Command.CommandExecuteParameter = cepParameter;
        }    
        return rule;
    }
}
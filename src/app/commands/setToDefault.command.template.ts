import { Injectable } from '@angular/core';

import { NamingProvider } from '../services/naming.provider';

import { Command, CommandExecuteParameter, CommandInitializeParameter, CommandInitializeParameterName, CommandType, ElementType, PlainTextType } from '../models/command';
import { Rule, RuleCategoryArt,RuleModel } from '../models/rule';
import { BaseCommandTemplate } from './base.command.template';

@Injectable()
export class SetToDefaultCommandTemplate extends BaseCommandTemplate {

    constructor(private namingProvider: NamingProvider) {
        super();
    }
    canHandle(ruleModel: RuleModel): boolean {
        return ruleModel.CommandType === CommandType.SetToDefaultCommand;
    }

    execute(ruleModel: RuleModel): Rule {
        ruleModel.Name = this.namingProvider.getForSetToDefault(ruleModel.UIField);
        ruleModel.CategoryArt = RuleCategoryArt.DataManipulation;
        var rule = new Rule(ruleModel);
        
     
         //UIField
        var cipUIField = new CommandInitializeParameter();
        cipUIField.Name = CommandInitializeParameterName.uiField;
        cipUIField.PlainText = ruleModel.UIField;
        cipUIField.ValueTypeArt = ElementType.PlainText;
        rule.Command.CommandInitializeParameters.push(cipUIField);

        return rule;

        
    }
}
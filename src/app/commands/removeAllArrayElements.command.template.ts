import { Injectable } from '@angular/core';

import { NamingProvider } from '../services/naming.provider';

import { Command, CommandExecuteParameter, CommandInitializeParameter, CommandInitializeParameterName, CommandType, ElementType, PlainTextType } from '../models/command';
import { Rule, RuleCategoryArt,RuleModel } from '../models/rule';
import { BaseCommandTemplate } from './base.command.template';
import { Condition } from '../models/condition';

@Injectable()
export class RemoveAllArrayElementsCommandTemplate extends BaseCommandTemplate {

    constructor(private namingProvider: NamingProvider) {
        super();
    }
    canHandle(ruleModel: RuleModel): boolean {
        return ruleModel.CommandType === CommandType.RemoveAllArrayElementsCommand;
    }

    execute(ruleModel: RuleModel): Rule {
        ruleModel.CategoryArt = RuleCategoryArt.DataManipulation;
        ruleModel.Name = this.namingProvider.getForRemoveAllArrayElements(ruleModel.ArrayField);
        var rule = new Rule(ruleModel);

        //ArrayField
        var cipArrayField = new CommandInitializeParameter();
        cipArrayField.Name = CommandInitializeParameterName.ArrayField;
        cipArrayField.ViewModelPath = ruleModel.ArrayField;
        cipArrayField.ValueTypeArt = ElementType.SpringObjectName;
        rule.Command.CommandInitializeParameters.push(cipArrayField);

        //EventName
        if (ruleModel.EventName) {
            var cipEventName = new CommandInitializeParameter();
            cipEventName.Name = CommandInitializeParameterName.EventName;
            cipEventName.PlainText = ruleModel.EventName;
            cipEventName.ValueTypeArt = ElementType.PlainText;
            rule.Command.CommandInitializeParameters.push(cipEventName);
        }
       
        return rule;
    }
}
import { Injectable } from '@angular/core';

import { NamingProvider } from '../../../../infrastructure/naming.provider';

import { Command, CommandExecuteParameter, CommandInitializeParameter, CommandInitializeParameterName, CommandType, ElementType, PlainTextType } from '../../../../models/command';
import { Rule, RuleCategoryArt,RuleModel } from '../../../../models/rule';
import { BaseCommandTemplate } from './base.command.template';

@Injectable()
export class SetOfRulesCommandTemplate extends BaseCommandTemplate {

    constructor(private namingProvider: NamingProvider) {
        super();
    }
    canHandle(ruleModel: RuleModel): boolean {
        return ruleModel.CommandType === CommandType.SetOfRules;
    }

    execute(ruleModel: RuleModel): Rule {
        ruleModel.Name = CommandType.SetOfRules;
        ruleModel.CategoryArt = RuleCategoryArt.DataManipulation; 
        
        var rule = new Rule(ruleModel);
        rule.Command = undefined;
        rule.Rules = [
            <Rule>{Name:"",IsReference:true},
            <Rule>{Name:"",IsReference:true},
            <Rule>{Name:"",IsReference:true},
        ]

        return rule;
    }
}
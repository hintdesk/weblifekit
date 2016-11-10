import { Injectable } from '@angular/core';

import { NamingProvider } from '../../../../infrastructure/naming.provider';

import { Command, CommandExecuteParameter, CommandInitializeParameter, CommandInitializeParameterName, CommandType, ElementType, PlainTextType } from '../../../../models/command';
import { Rule, RuleCategoryArt,RuleModel } from '../../../../models/rule';
import { BaseCommandTemplate } from './base.command.template';
import { Condition } from '../../../../models/condition';

@Injectable()
export class FireEventCommandTemplate extends BaseCommandTemplate {

    constructor(private namingProvider: NamingProvider) {
        super();
    }
    canHandle(ruleModel: RuleModel): boolean {
        return ruleModel.CommandType === CommandType.FireEventCommand;
    }

    execute(ruleModel: RuleModel): Rule {
        ruleModel.Name = this.namingProvider.getForFireEvent(ruleModel);  
        ruleModel.CategoryArt = undefined;
        var rule = new Rule(ruleModel);

        //EventType
        
        var cipEventType = new CommandInitializeParameter();
        cipEventType.Name = String(ruleModel.CommandEventType);
        cipEventType.PlainText = ruleModel.CommandEventTypeValue;
        cipEventType.ValueTypeArt = ElementType.PlainText;
        rule.Command.CommandInitializeParameters.push(cipEventType);

        //EventName
        var cepEventName = new CommandExecuteParameter();       
        cepEventName.PlainText = ruleModel.EventName;
        rule.Command.CommandExecuteParameter = cepEventName;
      
        return rule;
    }
}
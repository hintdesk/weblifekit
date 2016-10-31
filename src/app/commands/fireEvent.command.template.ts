import { Injectable } from '@angular/core';

import { NamingService } from '../services/naming.service';

import { Command, CommandExecuteParameter, CommandInitializeParameter, CommandInitializeParameterName, CommandType, ElementType, PlainTextType } from '../models/command';
import { Rule, RuleCategoryArt,RuleModel } from '../models/rule';
import { BaseCommandTemplate } from './base.command.template';
import { Condition } from '../models/condition';

@Injectable()
export class FireEventCommandTemplate extends BaseCommandTemplate {

    constructor(private namingService: NamingService) {
        super();
    }
    canHandle(ruleModel: RuleModel): boolean {
        return ruleModel.CommandType === CommandType.FireEventCommand;
    }

    execute(ruleModel: RuleModel): Rule {
        ruleModel.Name = this.namingService.getForFireEvent(ruleModel.EventName);  
        ruleModel.CategoryArt = undefined;
        var rule = new Rule(ruleModel);

        //EventType
        
        var cipEventType = new CommandInitializeParameter();
        cipEventType.Name = String(ruleModel.EventType);
        cipEventType.PlainText = ruleModel.EventTypeValue;
        cipEventType.ValueTypeArt = ElementType.PlainText;
        rule.Command.CommandInitializeParameters.push(cipEventType);

        //EventName
        var cepEventName = new CommandExecuteParameter();       
        cepEventName.PlainText = ruleModel.EventName;
        rule.Command.CommandExecuteParameter = cepEventName;
      
        return rule;
    }
}
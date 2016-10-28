import { Injectable } from '@angular/core';

import { NamingService } from '../services/naming.service';

import { RuleModel } from '../models/rule.model';
import { Command, CommandExecuteParameter, CommandInitializeParameter, CommandInitializeParameterName, CommandType, ElementType, PlainTextType } from '../models/command';
import { Rule, RuleCategoryArt } from '../models/rule';
import { BaseCommandTemplate } from './base.command.template';

@Injectable()
export class SetWarningInWarningProviderAndNotifyCommandTemplate extends BaseCommandTemplate {

    constructor(private namingService: NamingService) {
        super();
    }
    canHandle(ruleModel: RuleModel): boolean {
        return ruleModel.CommandType === CommandType.SetWarningInWarningProviderAndNotifyCommand;
    }

    execute(ruleModel: RuleModel): Rule {
        ruleModel.Name = this.namingService.getForSetWarningInWarningProviderAndNotify(ruleModel.Id);
        ruleModel.CategoryArt = undefined;       
        var rule = new Rule(ruleModel);        

        //Id
        var cipId = new CommandInitializeParameter();
        cipId.Name = CommandInitializeParameterName.Id;
        cipId.PlainText = ruleModel.Id;
        cipId.ValueTypeArt = ElementType.PlainText;
        rule.Command.CommandInitializeParameters.push(cipId);
        
        //Message
        var cepMessage = new CommandExecuteParameter();
        cepMessage.Name = CommandInitializeParameterName.Message;
        cepMessage.PlainText = ruleModel.Message;
        cepMessage.ValueTypeArt = ElementType.PlainText;
        rule.Command.CommandExecuteParameter = cepMessage;

        return rule;

        
    }
}
import { Injectable }                           from '@angular/core';

import { NamingProvider }                        from '../../../../infrastructure/naming.provider';

import { CommandTemplate }                      from './command.template';
import { Command, CommandExecuteParameter, CommandInitializeParameter, CommandInitializeParameterName, CommandType, ElementType, PlainTextType } from '../../../../models/command';
import { Rule, RuleCategoryArt,RuleModel }                from '../../../../models/rule';
import { BaseCommandTemplate } from './base.command.template';

@Injectable()
export class ConfirmCommandAndChangeSwitchValueCommandTemplate extends BaseCommandTemplate {

    constructor(private namingProvider: NamingProvider) {
        super();
    }
    
    canHandle(ruleModel:RuleModel) : boolean {
        return ruleModel.CommandType === CommandType.ConfirmCommandAndChangeSwitchValueCommand;
    }

    execute (ruleModel: RuleModel) : Rule {
        ruleModel.Name = this.namingProvider.getForConfirmCommandAndChangeSwitchValue(ruleModel.UIField,ruleModel.Value);
        ruleModel.CategoryArt = undefined;
             
        var rule = new Rule(ruleModel);

        //PreventChangesForNo
        var cipPreventChangesForNo = new CommandInitializeParameter();
        cipPreventChangesForNo.Name = CommandInitializeParameterName.PreventChangesForNo;
        cipPreventChangesForNo.PlainText = "true";
        cipPreventChangesForNo.ValueTypeArt = ElementType.PlainText;
        rule.Command.CommandInitializeParameters.push(cipPreventChangesForNo);

        //Message
        var cipMessage = new CommandInitializeParameter();
        cipMessage.Name = CommandInitializeParameterName.Message;
        cipMessage.PlainText = ruleModel.Message;
        cipMessage.ValueTypeArt = ElementType.PlainText;
        rule.Command.CommandInitializeParameters.push(cipMessage);

        //Value
        var cipValue = new CommandInitializeParameter();
        cipValue.Name = CommandInitializeParameterName.Value;
        cipValue.PlainText = String(ruleModel.Value);
        cipValue.ValueTypeArt = ElementType.PlainText;
        rule.Command.CommandInitializeParameters.push(cipValue);  

        //UIField
        var cipValue = new CommandInitializeParameter();
        cipValue.Name = CommandInitializeParameterName.uiField;
        cipValue.PlainText = ruleModel.UIField;
        cipValue.ValueTypeArt = ElementType.PlainText;
        rule.Command.CommandInitializeParameters.push(cipValue);  
        return rule;  
    }
}
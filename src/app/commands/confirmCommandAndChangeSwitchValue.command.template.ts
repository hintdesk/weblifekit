import { Injectable }                           from '@angular/core';

import { NamingService }                        from '../services/naming.service';

import { CommandTemplate }                      from './command.template';
import { RuleModel }                            from '../models/rule.model';
import { Command, CommandType, ElementType, PlainTextType }    from '../models/command';
import { CommandInitializeParameter, CommandInitializeParameterName }           from '../models/commandInitializeParameter'
import { Rule, RuleCategoryArt }                from '../models/rule';
import { BaseCommandTemplate } from './base.command.template';

@Injectable()
export class ConfirmCommandAndChangeSwitchValueCommandTemplate extends BaseCommandTemplate {

    constructor(private namingService: NamingService) {
        super();
    }
    
    canHandle(ruleModel:RuleModel) : boolean {
        return ruleModel.CommandType === CommandType.ConfirmCommandAndChangeSwitchValueCommand;
    }

    execute (ruleModel: RuleModel) : Rule {
        ruleModel.Name = this.namingService.getForConfirmCommandAndChangeSwitchValue(ruleModel.UIField,ruleModel.Value);
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
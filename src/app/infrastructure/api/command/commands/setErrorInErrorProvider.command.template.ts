import { Injectable } from '@angular/core';

import { NamingProvider } from '../../../../infrastructure/naming.provider';

import { Command, CommandExecuteParameter, CommandInitializeParameter, CommandInitializeParameterName, CommandType, ElementType, PlainTextType } from '../../../../models/command';
import { Rule, RuleCategoryArt,RuleModel } from '../../../../models/rule';
import { BaseCommandTemplate } from './base.command.template';

@Injectable()
export class SetErrorInErrorProviderCommandTemplate extends BaseCommandTemplate {

    constructor(private namingProvider: NamingProvider) {
        super();
    }
    canHandle(ruleModel: RuleModel): boolean {
        return ruleModel.CommandType === CommandType.SetErrorInErrorProviderCommand;
    }

    execute(ruleModel: RuleModel): Rule {
        ruleModel.Name = this.namingProvider.getForErrorProvider(ruleModel.UIField);
        ruleModel.CategoryArt = RuleCategoryArt.RequiredField; 
        var rule = new Rule(ruleModel);
              

        //UIField
        var cipUIField = new CommandInitializeParameter();
        cipUIField.Name = CommandInitializeParameterName.UIField;
        cipUIField.PlainText = ruleModel.UIField;
        // cipUIField.ValueTypeArt = ElementType.PlainText;
        rule.Command.CommandInitializeParameters.push(cipUIField);

        //ErrorText
        var cepErrorText = new CommandExecuteParameter();
        if (ruleModel.ErrorTextType === ElementType.Resource) {
            cepErrorText.PlainText = ruleModel.ErrorTextValue;
            cepErrorText.ValueTypeArt = ElementType.Resource;
        }
        else
            cepErrorText.PlainText = ruleModel.ErrorTextValue;
        rule.Command.CommandExecuteParameter = cepErrorText;

        //BadCommand 
        if (ruleModel.BadCommand) {
            //Id
            var cipId = new CommandInitializeParameter();
            cipId.Name = CommandInitializeParameterName.Id;
            cipId.PlainText = ruleModel.UIField + "_REQ";
            // cipId.ValueTypeArt = ElementType.PlainText;
            rule.Command.CommandInitializeParameters.push(cipId);

            rule.BadCommand = new Command();
            rule.BadCommand.Name = CommandType.ClearErrorInErrorProviderCommand;

            cipUIField = new CommandInitializeParameter();
            cipUIField.Name = CommandInitializeParameterName.UIField;
            cipUIField.PlainText = ruleModel.UIField;
            // cipUIField.ValueTypeArt = ElementType.PlainText;
            rule.BadCommand.CommandInitializeParameters.push(cipUIField);

            cepErrorText = new CommandExecuteParameter();
            cepErrorText.PlainText = ruleModel.UIField + "_REQ";
            rule.BadCommand.CommandExecuteParameter = cepErrorText;
        }

        return rule;
    }
}
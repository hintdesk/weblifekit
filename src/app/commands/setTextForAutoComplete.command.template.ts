import { Injectable } from '@angular/core';

import { NamingProvider } from '../infrastructure/naming.provider';

import { Command, CommandExecuteParameter, CommandInitializeParameter, CommandInitializeParameterName, CommandType, ElementType, PlainTextType } from '../models/command';
import { Rule, RuleCategoryArt,RuleModel } from '../models/rule';
import { BaseCommandTemplate } from './base.command.template';

@Injectable()
export class SetTextForAutoCompleteCommandTemplate extends BaseCommandTemplate {

    constructor(private namingProvider: NamingProvider) {
        super();
    }
    canHandle(ruleModel: RuleModel): boolean {
        return ruleModel.CommandType === CommandType.SetTextForAutoCompleteCommand;
    }

    execute(ruleModel: RuleModel): Rule {
        ruleModel.Name = this.namingProvider.getForSetTextForAutoComplete(ruleModel.UIField);
        ruleModel.CategoryArt = RuleCategoryArt.GuiManipulation; 
        var rule = new Rule(ruleModel);
              

        //SourceElement
        var cipSourceElement = new CommandInitializeParameter();
        cipSourceElement.Name = CommandInitializeParameterName.SourceElement;
        cipSourceElement.ViewModelPath = ruleModel.SourceElementValue;
        cipSourceElement.ValueTypeArt = ElementType.SpringObjectName;
        rule.Command.CommandInitializeParameters.push(cipSourceElement);

        //UIField
        var cipUIField = new CommandInitializeParameter();
        cipUIField.Name = CommandInitializeParameterName.uiField;
        cipUIField.PlainText = ruleModel.UIField;
        cipUIField.ValueTypeArt = ElementType.PlainText;
        rule.Command.CommandInitializeParameters.push(cipUIField);

        return rule;
    }
}
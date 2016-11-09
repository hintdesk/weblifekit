import { Injectable } from '@angular/core';

import { NamingProvider } from '../infrastructure/naming.provider';

import { Command, CommandExecuteParameter, CommandInitializeParameter, CommandInitializeParameterName, CommandType, ElementType, PlainTextType } from '../models/command';
import { Rule, RuleCategoryArt,RuleModel } from '../models/rule';
import { BaseCommandTemplate } from './base.command.template';

@Injectable()
export class ValidateCommandTemplate extends BaseCommandTemplate {

    constructor(private namingProvider: NamingProvider) {
        super();
    }
    canHandle(ruleModel: RuleModel): boolean {
        return ruleModel.CommandType === CommandType.ValidateCommand;
    }

    execute(ruleModel: RuleModel): Rule {
        ruleModel.Name = this.namingProvider.getForValidate(ruleModel.UIField);
        ruleModel.CategoryArt = RuleCategoryArt.GuiManipulation;
        var rule = new Rule(ruleModel);        
        
        //UIField
        var cipUIField = new CommandInitializeParameter();
        cipUIField.Name = CommandInitializeParameterName.UIField;
        cipUIField.PlainText = ruleModel.UIField;
        cipUIField.ValueTypeArt = ElementType.PlainText;
        rule.Command.CommandInitializeParameters.push(cipUIField);
      

        //StateTable
        var cipStateTable = new CommandInitializeParameter();
        cipStateTable.Name = CommandInitializeParameterName.StateTable;
        cipStateTable.PlainText = ruleModel.StateTable;
        cipStateTable.ValueTypeArt = ElementType.PlainText;
        rule.Command.CommandInitializeParameters.push(cipStateTable);

        return rule;

    }
}


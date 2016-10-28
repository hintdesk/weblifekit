import { Injectable } from '@angular/core';
import { NamingService } from '../services/naming.service';

import { RuleModel } from '../models/rule.model';
import { Command, CommandExecuteParameter, CommandInitializeParameter, CommandInitializeParameterName, CommandType, ElementType, PlainTextType } from '../models/command';
import { Rule, RuleCategoryArt } from '../models/rule';
import { BaseCommandTemplate } from './base.command.template';

@Injectable()
export class ActionCommandTemplate extends BaseCommandTemplate {

    constructor(private namingService: NamingService) {
        super();
    }
    canHandle(ruleModel: RuleModel): boolean {
        return ruleModel.CommandType === CommandType.ActionCommand;
    }

    execute(ruleModel: RuleModel): Rule {
        ruleModel.Name = this.namingService.getForActionCommand(ruleModel.UIField, ruleModel.StateTable);
        ruleModel.CategoryArt = RuleCategoryArt.DataManipulation;

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

        //TargetProperty
        if (ruleModel.TargetProperty) {
            var cipTargetProperty = new CommandInitializeParameter();
            cipTargetProperty.Name = CommandInitializeParameterName.TargetProperty;
            cipTargetProperty.ViewModelPath = ruleModel.TargetProperty;
            cipTargetProperty.ValueTypeArt = ElementType.SpringObjectName;
            rule.Command.CommandInitializeParameters.push(cipTargetProperty);
        }

        //ColumnIndex 
        if (rule.ListProperty) {
            var cipColumnIndex = new CommandInitializeParameter();
            cipColumnIndex.Name = CommandInitializeParameterName.ColumnIndex;
            cipColumnIndex.PlainText = ruleModel.ColumnIndex;
            cipColumnIndex.ValueTypeArt = ElementType.PlainText;
            rule.Command.CommandInitializeParameters.push(cipColumnIndex);
        }


        return rule;
    }
}
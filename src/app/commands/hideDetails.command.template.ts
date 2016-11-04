import { Injectable } from '@angular/core';

import { NamingProvider } from '../services/naming.provider';

import { Command, CommandExecuteParameter, CommandInitializeParameter, CommandInitializeParameterName, CommandType, ElementType, PlainTextType } from '../models/command';
import { Rule, RuleCategoryArt,RuleModel } from '../models/rule';
import { BaseCommandTemplate } from './base.command.template';
import { Condition } from '../models/condition';

@Injectable()
export class HideDetailsCommandTemplate extends BaseCommandTemplate {

    constructor(private namingProvider: NamingProvider) {
        super();
    }
    canHandle(ruleModel: RuleModel): boolean {
        return ruleModel.CommandType === CommandType.HideDetailsCommand;
    }

    execute(ruleModel: RuleModel): Rule {
        ruleModel.CategoryArt = RuleCategoryArt.GuiManipulation;
        ruleModel.Name = this.namingProvider.getForHideDetails(ruleModel.PageName);
        var rule = new Rule(ruleModel);

        //Dialog
        var cipDialog = new CommandInitializeParameter();
        cipDialog.PlainText = ruleModel.Dialog;
        rule.Command.CommandInitializeParameters.push(cipDialog);

        //Dialog
        var cepDialog = new CommandExecuteParameter();
        cepDialog.PlainText = ruleModel.Dialog;
        rule.Command.CommandExecuteParameter = cepDialog;

        return rule;
    }
}
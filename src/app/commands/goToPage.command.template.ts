import { Injectable } from '@angular/core';

import { NamingService } from '../services/naming.service';

import { RuleModel } from '../models/rule.model';
import { Command, CommandExecuteParameter, CommandInitializeParameter, CommandInitializeParameterName, CommandType, ElementType, PlainTextType } from '../models/command';
import { Rule, RuleCategoryArt } from '../models/rule';
import { BaseCommandTemplate } from './base.command.template';
import { Condition } from '../models/condition';

@Injectable()
export class GoToPageCommandTemplate extends BaseCommandTemplate {

    constructor(private namingService: NamingService) {
        super();
    }
    canHandle(ruleModel: RuleModel): boolean {
        return ruleModel.CommandType === CommandType.GoToPageCommand;
    }

    execute(ruleModel: RuleModel): Rule {
        ruleModel.CategoryArt = RuleCategoryArt.GuiManipulation;
        ruleModel.Name = this.namingService.getForGoToPage(ruleModel.PageName);
        var rule = new Rule(ruleModel);

        //PageName
        var cipPageName = new CommandInitializeParameter();
        cipPageName.Name = CommandInitializeParameterName.PageName;
        cipPageName.PlainText = ruleModel.PageName;
        cipPageName.ValueTypeArt = ElementType.PlainText;
        rule.Command.CommandInitializeParameters.push(cipPageName);

        //Validate
        if (ruleModel.Validate === false) {
            var cipValidate = new CommandInitializeParameter();
            cipValidate.Name = CommandInitializeParameterName.Validate;
            cipValidate.PlainText = "false";
            cipValidate.ValueTypeArt = ElementType.PlainText;
            rule.Command.CommandInitializeParameters.push(cipValidate);
        }

        //BadCommand
        if (ruleModel.BadCommand) {
            rule.BadCommand = new Command();
            rule.BadCommand.Name = CommandType.GoToPageCommand;

            cipPageName = new CommandInitializeParameter();
            cipPageName.Name = CommandInitializeParameterName.PageName;
            cipPageName.PlainText = "";
            cipPageName.ValueTypeArt = ElementType.PlainText;
            rule.BadCommand.CommandInitializeParameters.push(cipPageName);
        }
        return rule;
    }
}
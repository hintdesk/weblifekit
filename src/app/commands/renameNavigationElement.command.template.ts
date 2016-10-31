import { Injectable } from '@angular/core';

import { NamingService } from '../services/naming.service';

import { Command, CommandExecuteParameter, CommandInitializeParameter, CommandInitializeParameterName, CommandType, ElementType, PlainTextType } from '../models/command';
import { Rule, RuleCategoryArt,RuleModel } from '../models/rule';
import { BaseCommandTemplate } from './base.command.template';
import { Condition } from '../models/condition';

@Injectable()
export class RenameNavigationElementCommandTemplate extends BaseCommandTemplate {

    constructor(private namingService: NamingService) {
        super();
    }
    canHandle(ruleModel: RuleModel): boolean {
        return ruleModel.CommandType === CommandType.RenameNavigationElementCommand;
    }

    execute(ruleModel: RuleModel): Rule {
        ruleModel.CategoryArt = RuleCategoryArt.GuiManipulation;
        ruleModel.Name = this.namingService.getForRenameNavigationElement(ruleModel.Page);
        var rule = new Rule(ruleModel);

        //Page
        var cipPage = new CommandInitializeParameter();
        cipPage.Name = CommandInitializeParameterName.Page;
        cipPage.PlainText = ruleModel.Page;
        rule.Command.CommandInitializeParameters.push(cipPage);

        //DisplayName
        var cipDisplayName = new CommandInitializeParameter();
        cipDisplayName.Name = CommandInitializeParameterName.DisplayName;

        if (ruleModel.DisplayNameType === ElementType.PlainText) {
            cipDisplayName.PlainText = ruleModel.DisplayNameValue;
            cipDisplayName.ValueTypeArt = ElementType.PlainText;
        }
        else if (ruleModel.DisplayNameType === ElementType.Calculator) {
            cipDisplayName.PlainText = PlainTextType.StateTableCalculator;
            cipDisplayName.ValueTypeArt = ElementType.Calculator;

        }
        rule.Command.CommandInitializeParameters.push(cipDisplayName);

        if (ruleModel.DisplayNameType === ElementType.Calculator) {
            var cipCalculatorArgument = new CommandInitializeParameter();
            cipCalculatorArgument.Name = CommandInitializeParameterName.CalculatorArgument;
            cipCalculatorArgument.PlainText = ruleModel.DisplayNameValue;
            cipCalculatorArgument.ValueTypeArt = ElementType.PlainText;
            rule.Command.CommandInitializeParameters.push(cipCalculatorArgument);
        }

        //NavigationContent 
        var cepNavigationContent = new CommandExecuteParameter();
        cepNavigationContent.PlainText = PlainTextType.NavigationContent;
        rule.Command.CommandExecuteParameter = cepNavigationContent;

        if (ruleModel.BadCommand) {
            rule.BadCommand = new Command();
            rule.BadCommand.Name = CommandType.RenameNavigationElementCommand;

            //Page
            cipPage = new CommandInitializeParameter();
            cipPage.Name = CommandInitializeParameterName.Page;
            cipPage.PlainText = ruleModel.Page;
            rule.BadCommand.CommandInitializeParameters.push(cipPage);

            //DisplayName
            cipDisplayName = new CommandInitializeParameter();
            cipDisplayName.Name = CommandInitializeParameterName.DisplayName;

            if (ruleModel.DisplayNameType === ElementType.PlainText) {
                cipDisplayName.PlainText = "";
                cipDisplayName.ValueTypeArt = ElementType.PlainText;
            }
            else if (ruleModel.DisplayNameType === ElementType.Calculator) {
                cipDisplayName.PlainText = PlainTextType.StateTableCalculator;
                cipDisplayName.ValueTypeArt = ElementType.Calculator;

            }
            rule.BadCommand.CommandInitializeParameters.push(cipDisplayName);

            if (ruleModel.DisplayNameType === ElementType.Calculator) {
                cipCalculatorArgument = new CommandInitializeParameter();
                cipCalculatorArgument.Name = CommandInitializeParameterName.CalculatorArgument;
                cipCalculatorArgument.PlainText = "";
                cipCalculatorArgument.ValueTypeArt = ElementType.PlainText;
                rule.BadCommand.CommandInitializeParameters.push(cipCalculatorArgument);
            }

            //NavigationContent 
            cepNavigationContent = new CommandExecuteParameter();
            cepNavigationContent.PlainText = PlainTextType.NavigationContent;
            rule.BadCommand.CommandExecuteParameter = cepNavigationContent;
        }

        return rule;
    }
}
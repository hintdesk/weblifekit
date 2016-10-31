import { Injectable } from '@angular/core';

import { NamingService } from '../services/naming.service';

import { Command, CommandExecuteParameter, CommandInitializeParameter, CommandInitializeParameterName, CommandType, ElementType, PlainTextType } from '../models/command';
import { Rule, RuleCategoryArt,RuleModel } from '../models/rule';
import { BaseCommandTemplate } from './base.command.template';

@Injectable()
export class EnableGuiElementsCommandTemplate extends BaseCommandTemplate {

    constructor(private namingService: NamingService) {
        super();
    }
    canHandle(ruleModel: RuleModel): boolean {
        return ruleModel.CommandType === CommandType.EnableGuiElementsCommand;
    }

    execute(ruleModel: RuleModel): Rule {
        ruleModel.Name = this.namingService.getForEnableGuiElements(ruleModel.UIElement);
        ruleModel.CategoryArt = RuleCategoryArt.GuiManipulation;
        var rule = new Rule(ruleModel);

        //UIElement
        var elements = ruleModel.UIElement.split(",");

        for (let element of elements) {
            var cipUIElement = new CommandInitializeParameter();
            cipUIElement.PlainText = element.trim();
            rule.Command.CommandInitializeParameters.push(cipUIElement);
        }

        //ParentUIElement
        if (ruleModel.ParentUIElement) {
            var cepNavigation = new CommandExecuteParameter();
            cepNavigation.PlainText = ruleModel.ParentUIElement;
            rule.Command.CommandExecuteParameter = cepNavigation;
        }


        //BadCommand 
        if (ruleModel.BadCommand) {
            rule.BadCommand = new Command();
            rule.BadCommand.Name = CommandType.DisableGuiElementsCommand;

            //UIElement
            for (let element of elements) {
                var cipNavigationElement = new CommandInitializeParameter();
                cipNavigationElement.PlainText = element.trim();
                rule.BadCommand.CommandInitializeParameters.push(cipNavigationElement);
            }

            //ParentUIElement
            if (ruleModel.ParentUIElement) {
                cepNavigation = new CommandExecuteParameter();
                cepNavigation.PlainText = ruleModel.ParentUIElement;
                rule.BadCommand.CommandExecuteParameter = cepNavigation;
            }

        }
        return rule;
    }
}


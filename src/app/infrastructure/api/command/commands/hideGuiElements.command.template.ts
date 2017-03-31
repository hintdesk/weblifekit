import { Injectable } from '@angular/core';

import { NamingProvider } from '../../../../infrastructure/naming.provider';

import { Command, CommandExecuteParameter, CommandInitializeParameter, CommandInitializeParameterName, CommandType, ElementType, PlainTextType } from '../../../../models/command';
import { Rule, RuleCategoryArt,RuleModel } from '../../../../models/rule';
import { BaseCommandTemplate } from './base.command.template';

@Injectable()
export class HideGuiElementsCommandTemplate extends BaseCommandTemplate {

    constructor(private namingProvider: NamingProvider) {
        super();
    }
    canHandle(ruleModel: RuleModel): boolean {
        return ruleModel.CommandType === CommandType.HideGuiElementsCommand;
    }

    execute(ruleModel: RuleModel): Rule {
        ruleModel.Name = this.namingProvider.getForHideGuiElements(ruleModel.UIElement);
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
        // var cepNavigation = new CommandExecuteParameter();       
        // cepNavigation.PlainText = ruleModel.ParentUIElement;
        // rule.Command.CommandExecuteParameter = cepNavigation;

        //BadCommand 
        if (ruleModel.BadCommand) {
            rule.BadCommand = new Command();
            rule.BadCommand.Name = CommandType.ShowGuiElementsCommand;

            //UIElement
            for (let element of elements) {
                var cipNavigationElement = new CommandInitializeParameter();
                cipNavigationElement.PlainText = element.trim();
                rule.BadCommand.CommandInitializeParameters.push(cipNavigationElement);
            }

            //ParentUIElement
            // cepNavigation = new CommandExecuteParameter();           
            // cepNavigation.PlainText = ruleModel.ParentUIElement;
            // rule.BadCommand.CommandExecuteParameter = cepNavigation;
        }
        return rule;
    }
}


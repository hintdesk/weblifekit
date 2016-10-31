import { Injectable } from '@angular/core';

import { NamingService } from '../services/naming.service';

import { Command, CommandExecuteParameter, CommandInitializeParameter, CommandInitializeParameterName, CommandType, ElementType, PlainTextType } from '../models/command';
import { Rule, RuleCategoryArt,RuleModel } from '../models/rule';
import { BaseCommandTemplate } from './base.command.template';

@Injectable()
export class ShowNavigationElementCommandTemplate extends BaseCommandTemplate {

    constructor(private namingService: NamingService) {
        super();
    }
    canHandle(ruleModel: RuleModel): boolean {
        return ruleModel.CommandType === CommandType.ShowNavigationElementCommand;
    }

    execute(ruleModel: RuleModel): Rule {
        ruleModel.Name = this.namingService.getForShowNavigationElement(ruleModel.NavigationElement);
        ruleModel.CategoryArt = RuleCategoryArt.GuiManipulation;      
        var rule = new Rule(ruleModel);        

        //NavigationElement
        var elements = ruleModel.NavigationElement.split(",");

        for (let element of elements) {
            var cipNavigationElement = new CommandInitializeParameter();
            cipNavigationElement.PlainText = element.trim();
            rule.Command.CommandInitializeParameters.push(cipNavigationElement);
        }

        //Navigation
        var cepNavigation = new CommandExecuteParameter();       
        cepNavigation.PlainText = PlainTextType.NavigationContent;
        rule.Command.CommandExecuteParameter = cepNavigation;

        //BadCommand 
        if (ruleModel.BadCommand) {
            rule.BadCommand = new Command();
            rule.BadCommand.Name = CommandType.HideNavigationElementCommand;

            //NavigationElement
            for (let element of elements) {
                var cipNavigationElement = new CommandInitializeParameter();
                cipNavigationElement.PlainText = element.trim();
                rule.BadCommand.CommandInitializeParameters.push(cipNavigationElement);
            }

            //Navigation
            cepNavigation = new CommandExecuteParameter();           
            cepNavigation.PlainText = PlainTextType.NavigationContent;
            rule.BadCommand.CommandExecuteParameter = cepNavigation;
        }
        return rule;


    }
}


import { Injectable } from '@angular/core';

import { NamingService } from '../services/naming.service';

import { RuleModel } from '../models/rule.model';
import { Command, CommandExecuteParameter, CommandInitializeParameter, CommandInitializeParameterName, CommandType, ElementType, PlainTextType } from '../models/command';
import { Rule, RuleCategoryArt } from '../models/rule';
import { BaseCommandTemplate } from './base.command.template';

@Injectable()
export class ShowDetailsCommandTemplate extends BaseCommandTemplate {

    constructor(private namingService: NamingService) {
        super();
    }
    canHandle(ruleModel: RuleModel): boolean {
        return ruleModel.CommandType === CommandType.ShowDetailsCommand;
    }

    execute(ruleModel: RuleModel): Rule {
        ruleModel.Name = this.namingService.getForShowDialog(ruleModel.Dialog);
        ruleModel.CategoryArt = RuleCategoryArt.GuiManipulation;       
        var rule = new Rule(ruleModel);
        

        //Title
        var cipTitle = new CommandInitializeParameter();
        cipTitle.Name = CommandInitializeParameterName.Title;
        cipTitle.PlainText = ruleModel.Title;
        cipTitle.ValueTypeArt = ElementType.PlainText;
        rule.Command.CommandInitializeParameters.push(cipTitle);

        //Width
        var cipWidth = new CommandInitializeParameter();
        cipWidth.Name = CommandInitializeParameterName.Width;
        cipWidth.PlainText = ruleModel.Width;
        cipWidth.ValueTypeArt = ElementType.PlainText;
        rule.Command.CommandInitializeParameters.push(cipWidth);

        //Height
        var cipHeight = new CommandInitializeParameter();
        cipHeight.Name = CommandInitializeParameterName.Height;
        cipHeight.PlainText = ruleModel.Height;
        cipHeight.ValueTypeArt = ElementType.PlainText;
        rule.Command.CommandInitializeParameters.push(cipHeight);


        //Resizable
        var cipResizable = new CommandInitializeParameter();
        cipResizable.Name = CommandInitializeParameterName.Resizable;
        cipResizable.PlainText = ruleModel.Resizable ? "true" : "false";
        cipResizable.ValueTypeArt = ElementType.PlainText;
        rule.Command.CommandInitializeParameters.push(cipResizable);


        //HideClose
        if (ruleModel.HideClose) {
            var cipHideClose = new CommandInitializeParameter();
            cipHideClose.Name = CommandInitializeParameterName.HideClose;
            cipHideClose.PlainText = "true";
            cipHideClose.ValueTypeArt = ElementType.PlainText;
            rule.Command.CommandInitializeParameters.push(cipHideClose);
        }

        //Synchronous 
        if (ruleModel.Synchronous) {
            var cipSynchronous = new CommandInitializeParameter();
            cipSynchronous.Name = CommandInitializeParameterName.Synchronous;
            rule.Command.CommandInitializeParameters.push(cipSynchronous);
        }

        //Dialog
        var cepDialog = new CommandExecuteParameter();
        cepDialog.PlainText = ruleModel.Dialog;
        rule.Command.CommandExecuteParameter = cepDialog;

        return rule;

        
    }
}
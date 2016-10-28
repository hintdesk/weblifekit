import { Injectable } from '@angular/core';

import { NamingService } from '../services/naming.service';

import { RuleModel } from '../models/rule.model';
import { Command, CommandExecuteParameter, CommandInitializeParameter, CommandInitializeParameterName, CommandType, ElementType, PlainTextType } from '../models/command';
import { Rule, RuleCategoryArt } from '../models/rule';
import { BaseCommandTemplate } from './base.command.template';

@Injectable()
export class ShowGridDetailsCommandTemplate extends BaseCommandTemplate {

    constructor(private namingService: NamingService) {
        super();
    }
    canHandle(ruleModel: RuleModel): boolean {
        return ruleModel.CommandType === CommandType.ShowGridDetailsCommand;
    }

    execute(ruleModel: RuleModel): Rule {
        ruleModel.Name = this.namingService.getForShowGridDetails(ruleModel.GridId);
        ruleModel.CategoryArt = undefined;       
        var rule = new Rule(ruleModel);

        //Titel
        var cipTitel = new CommandInitializeParameter();
        cipTitel.Name = CommandInitializeParameterName.Title;
        cipTitel.PlainText = ruleModel.Title;
        cipTitel.ValueTypeArt = ElementType.PlainText;
        rule.Command.CommandInitializeParameters.push(cipTitel);

        //TemplateId
        var cipTemplateId = new CommandInitializeParameter();
        cipTemplateId.Name = CommandInitializeParameterName.TemplateId;
        cipTemplateId.PlainText = ruleModel.TemplateId;
        cipTemplateId.ValueTypeArt = ElementType.PlainText;
        rule.Command.CommandInitializeParameters.push(cipTemplateId);

        //GridId
        var cipGridId = new CommandInitializeParameter();
        cipGridId.Name = CommandInitializeParameterName.GridId;
        cipGridId.PlainText = ruleModel.GridId;
        cipGridId.ValueTypeArt = ElementType.PlainText;
        rule.Command.CommandInitializeParameters.push(cipGridId);

        return rule;

        
    }
}
import { Injectable } from '@angular/core';

import { NamingService } from '../services/naming.service';

import { RuleModel } from '../models/rule.model';
import { Command, CommandType, ElementType, PlainTextType } from '../models/command';
import { CommandInitializeParameter, CommandInitializeParameterName } from '../models/commandInitializeParameter';
import { CommandExecuteParameter } from '../models/commandExecuteParameter';
import { Rule, RuleCategoryArt } from '../models/rule';
import { BaseCommandTemplate } from './base.command.template';
import { Condition } from '../models/condition';

@Injectable()
export class AddItemAndShowGridDetailsCommandTemplate extends BaseCommandTemplate {

    constructor(private namingService: NamingService) {
        super();
    }
    canHandle(ruleModel: RuleModel): boolean {
        return ruleModel.CommandType === CommandType.AddItemAndShowGridDetailsCommand;
    }

    execute(ruleModel: RuleModel): Rule {
        ruleModel.Name = this.namingService.getForAddItemAndShowGridDetails(this.namingService.getLastElement(ruleModel.JsonTypeName), ruleModel.ArrayField,ruleModel.GridId);  
        var rule = new Rule(ruleModel);
              

        //ArrayField
        var cipArrayField = new CommandInitializeParameter();
        cipArrayField.Name = CommandInitializeParameterName.ArrayField;
        cipArrayField.ViewModelPath = ruleModel.ArrayField;
        cipArrayField.ValueTypeArt = ElementType.SpringObjectName;
        rule.Command.CommandInitializeParameters.push(cipArrayField);

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


         //Json
        var cepJson = new CommandExecuteParameter();
        cepJson.Name = this.namingService.getLastElement(ruleModel.JsonTypeName);
        cepJson.ValueTypeArt = ElementType.Json;        
        cepJson.JsonTypeName = ruleModel.JsonTypeName;
        cepJson.JsonTypeAssemblyName = ruleModel.JsonTypeAssemblyName;
        rule.Command.CommandExecuteParameter = cepJson;
      
        return rule;
    }
}
import { Injectable } from '@angular/core';

import { NamingService } from '../services/naming.service';

import { RuleModel } from '../models/rule.model';
import { Command, CommandExecuteParameter, CommandInitializeParameter, CommandInitializeParameterName, CommandType, ElementType, PlainTextType } from '../models/command';
import { Rule, RuleCategoryArt } from '../models/rule';
import { BaseCommandTemplate } from './base.command.template';
import { Condition } from '../models/condition';

@Injectable()
export class AddArrayElementCommandTemplate extends BaseCommandTemplate {

    constructor(private namingService: NamingService) {
        super();
    }
    canHandle(ruleModel: RuleModel): boolean {
        return ruleModel.CommandType === CommandType.AddArrayElementCommand;
    }

    execute(ruleModel: RuleModel): Rule {
        ruleModel.Name = this.namingService.getForAddArrayElement(this.namingService.getLastElement(ruleModel.JsonTypeName), ruleModel.ArrayField);  
        ruleModel.CategoryArt = undefined;
        var rule = new Rule(ruleModel);
              

        //ArrayField
        var cipArrayField = new CommandInitializeParameter();
        cipArrayField.Name = CommandInitializeParameterName.ArrayField;
        cipArrayField.ViewModelPath = ruleModel.ArrayField;
        cipArrayField.ValueTypeArt = ElementType.SpringObjectName;
        rule.Command.CommandInitializeParameters.push(cipArrayField);

         //Json
        var cepJson = new CommandExecuteParameter();
        cepJson.Name = this.namingService.getLastElement(ruleModel.JsonTypeName);
        cepJson.ValueTypeArt = ElementType.Json;
        cepJson.JsonTypeAssemblyName = ruleModel.JsonTypeAssemblyName;
        cepJson.JsonTypeName = ruleModel.JsonTypeName;
        rule.Command.CommandExecuteParameter = cepJson;
      
        return rule;
    }
}
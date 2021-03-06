import { Injectable } from '@angular/core';

import { NamingProvider } from '../../../../infrastructure/naming.provider';

import { Command, CommandExecuteParameter, CommandInitializeParameter, CommandInitializeParameterName, CommandType, ElementType, PlainTextType } from '../../../../models/command';
import { Rule, RuleCategoryArt,RuleModel } from '../../../../models/rule';
import { BaseCommandTemplate } from './base.command.template';

@Injectable()
export class DeleteArrayElementsCommandTemplate extends BaseCommandTemplate {

    constructor(private namingProvider: NamingProvider) {
        super();
        this.Description = this.TextCommandDescriptionDeleteArrayElements;
    }
    canHandle(ruleModel: RuleModel): boolean {
        return ruleModel.CommandType === CommandType.DeleteArrayElementsCommand;
    }

    execute(ruleModel: RuleModel): Rule {
        
        ruleModel.Name = this.namingProvider.getForDeleteArray(ruleModel.ArrayField);  
        ruleModel.CategoryArt = undefined;
        var rule = new Rule(ruleModel);
          

        //ArrayField
        var cipArrayField = new CommandInitializeParameter();
        cipArrayField.Name = CommandInitializeParameterName.ArrayField;
        cipArrayField.ViewModelPath = ruleModel.ArrayField;
        cipArrayField.ValueTypeArt = ElementType.SpringObjectName;
        rule.Command.CommandInitializeParameters.push(cipArrayField);       
      
        return rule;
    }
}
import { Injectable }                           from '@angular/core';

import { NamingProvider }                        from '../infrastructure/naming.provider';

import { CommandTemplate }                      from './command.template';
import { Command, CommandExecuteParameter, CommandInitializeParameter, CommandInitializeParameterName, CommandType, ElementType, PlainTextType } from '../models/command';
import { Rule, RuleCategoryArt,RuleModel }                from '../models/rule';
import { BaseCommandTemplate } from './base.command.template';

@Injectable()
export class CopyObjectCommandTemplate extends BaseCommandTemplate {

    constructor(private namingProvider: NamingProvider) {
        super();
    }
    
    canHandle(ruleModel:RuleModel) : boolean {
        return ruleModel.CommandType === CommandType.CopyObjectCommand;
    }

    execute (ruleModel: RuleModel) : Rule {
        ruleModel.Name = this.namingProvider.getForCopyObject(ruleModel.SourceElementValue, ruleModel.DestinationElementValue);
        ruleModel.CategoryArt = RuleCategoryArt.DataManipulation;
             
        var rule = new Rule(ruleModel);

        //SourceObject
        var cipSourceObject = new CommandInitializeParameter();
        cipSourceObject.Name = CommandInitializeParameterName.SourceObject;
        cipSourceObject.ViewModelPath = ruleModel.SourceElementValue;
        cipSourceObject.ValueTypeArt = ElementType.SpringObjectName;
        rule.Command.CommandInitializeParameters.push(cipSourceObject);

        //DestinationObject
        var cipDestinationObject = new CommandInitializeParameter();
        cipDestinationObject.Name = CommandInitializeParameterName.DestinationObject;
        cipDestinationObject.ViewModelPath = ruleModel.DestinationElementValue;
        cipDestinationObject.ValueTypeArt = ElementType.SpringObjectName;
        rule.Command.CommandInitializeParameters.push(cipDestinationObject);  
        return rule;  
    }
}
import { Injectable }                           from '@angular/core';

import { NamingService }                        from '../services/naming.service';

import { CommandTemplate }                      from './command.template';
import { RuleModel }                            from '../models/rule.model';
import { Command, CommandType, ElementType, PlainTextType }    from '../models/command';
import { CommandInitializeParameter, CommandInitializeParameterName }           from '../models/commandInitializeParameter'
import { Rule, RuleCategoryArt }                from '../models/rule';
import { BaseCommandTemplate } from './base.command.template';

@Injectable()
export class CopyObjectCommandTemplate extends BaseCommandTemplate {

    constructor(private namingService: NamingService) {
        super();
    }
    
    canHandle(ruleModel:RuleModel) : boolean {
        return ruleModel.CommandType === CommandType.CopyObjectCommand;
    }

    execute (ruleModel: RuleModel) : Rule {
        ruleModel.Name = this.namingService.getForCopyObject(ruleModel.SourceElementValue, ruleModel.DestinationElementValue);
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
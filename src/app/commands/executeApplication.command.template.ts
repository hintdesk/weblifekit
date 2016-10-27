import { Injectable } from '@angular/core';

import { NamingService } from '../services/naming.service';

import { RuleModel } from '../models/rule.model';
import { Command, CommandType, ElementType, PlainTextType } from '../models/command';
import { CommandInitializeParameter, CommandInitializeParameterName } from '../models/commandInitializeParameter'
import { Rule, RuleCategoryArt } from '../models/rule';
import { BaseCommandTemplate } from './base.command.template';

@Injectable()
export class ExecuteApplicationCommandTemplate extends BaseCommandTemplate {

    constructor(private namingService: NamingService) {
        super();
    }
    canHandle(ruleModel: RuleModel): boolean {
        return ruleModel.CommandType === CommandType.ExecuteApplicationCommand;
    }

    execute(ruleModel: RuleModel): Rule {
        ruleModel.Name = this.namingService.getSetViewModelPathByApplication(ruleModel.ApplicationName, ruleModel.TargetProperty, ruleModel.SourceProperty);
        ruleModel.CategoryArt = undefined;  
        var rule = new Rule(ruleModel);
             

        //ApplicationName
        var cipApplicationName = new CommandInitializeParameter();
        cipApplicationName.Name = CommandInitializeParameterName.ApplicationName;
        cipApplicationName.PlainText = ruleModel.ApplicationName;
        cipApplicationName.ValueTypeArt = ElementType.PlainText;       
        rule.Command.CommandInitializeParameters.push(cipApplicationName);

        //SourceProperty
        if (ruleModel.SourceProperty) {
            var cipSourceProperty = new CommandInitializeParameter();
            cipSourceProperty.Name = CommandInitializeParameterName.SourceProperty;
            cipSourceProperty.PlainText = ruleModel.SourceProperty;
            cipSourceProperty.ValueTypeArt = ElementType.SpringObjectName;
            rule.Command.CommandInitializeParameters.push(cipSourceProperty);
        }

        //TargetProperty
        if (ruleModel.TargetProperty) {
            var cipTargetProperty = new CommandInitializeParameter();
            cipTargetProperty.Name = CommandInitializeParameterName.TargetProperty;
            cipTargetProperty.PlainText = ruleModel.TargetProperty;
            cipTargetProperty.ValueTypeArt = ElementType.SpringObjectName;
            rule.Command.CommandInitializeParameters.push(cipTargetProperty);
        }

        //InfoText 
        if (ruleModel.InfoText) {
            var cipInfoText = new CommandInitializeParameter();
            cipInfoText.Name = CommandInitializeParameterName.InfoText;
            cipInfoText.PlainText = ruleModel.InfoText;
            cipInfoText.ValueTypeArt = ElementType.PlainText;
            rule.Command.CommandInitializeParameters.push(cipInfoText);
        }        

        //EventName
        if (ruleModel.EventName) {
            var cipEventName = new CommandInitializeParameter();
            cipEventName.Name = CommandInitializeParameterName.EventName;
            cipEventName.PlainText = ruleModel.EventName;
            cipEventName.ValueTypeArt = ElementType.PlainText;
            rule.Command.CommandInitializeParameters.push(cipEventName);
        }

        //ErrorEventName
        if (ruleModel.ErrorEventName){
            var cipErrorEventName = new CommandInitializeParameter();
            cipErrorEventName.Name = CommandInitializeParameterName.ErrorEventName;
            cipErrorEventName.PlainText = ruleModel.EventName;
            cipErrorEventName.ValueTypeArt = ElementType.PlainText;
            rule.Command.CommandInitializeParameters.push(cipErrorEventName);        

        }

        //CopyMode 
        if (ruleModel.CopyMode)
        {
            var cipCopyMode = new CommandInitializeParameter();
            cipCopyMode.Name = CommandInitializeParameterName.CopyMode;
            cipCopyMode.PlainText = PlainTextType.Properties;
            cipCopyMode.ValueTypeArt = ElementType.PlainText;
            rule.Command.CommandInitializeParameters.push(cipCopyMode);
        }

        //Synchronous 
        if (ruleModel.Synchronous) {
            var cipSynchronous = new CommandInitializeParameter();
            cipSynchronous.Name = CommandInitializeParameterName.Synchronous;
            // cipSynchronous.PlainText = PlainTextType.Synchronous;
            // cipSynchronous.ValueTypeArt = ElementType.PlainText;
            rule.Command.CommandInitializeParameters.push(cipSynchronous);
        }

        return rule;
    }
}
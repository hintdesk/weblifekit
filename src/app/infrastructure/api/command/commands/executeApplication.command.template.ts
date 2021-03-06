import { Injectable } from '@angular/core';

import { NamingProvider } from '../../../../infrastructure/naming.provider';

import { Command, CommandExecuteParameter, CommandInitializeParameter, CommandInitializeParameterName, CommandType, ElementType, PlainTextType } from '../../../../models/command';
import { Rule, RuleCategoryArt,RuleModel } from '../../../../models/rule';
import { BaseCommandTemplate } from './base.command.template';

@Injectable()
export class ExecuteApplicationCommandTemplate extends BaseCommandTemplate {

    constructor(private namingProvider: NamingProvider) {
        super();
    }
    canHandle(ruleModel: RuleModel): boolean {
        return ruleModel.CommandType === CommandType.ExecuteApplicationCommand;
    }

    execute(ruleModel: RuleModel): Rule {
        ruleModel.Name = this.namingProvider.getSetViewModelPathByApplication(ruleModel.ApplicationName, ruleModel.TargetProperty, ruleModel.SourceProperty);
        ruleModel.CategoryArt = undefined;  
        var rule = new Rule(ruleModel);
             

        //ApplicationName
        var cipApplicationName = new CommandInitializeParameter();
        cipApplicationName.Name = CommandInitializeParameterName.ApplicationName;
        cipApplicationName.PlainText = ruleModel.ApplicationName;
        // cipApplicationName.ValueTypeArt = ElementType.PlainText;       
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
            //cipTargetProperty.ValueTypeArt = ElementType.SpringObjectName;
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
            // cipEventName.ValueTypeArt = ElementType.PlainText;
            rule.Command.CommandInitializeParameters.push(cipEventName);
        }

        //ErrorEventName
        if (ruleModel.ErrorEventName){
            var cipErrorEventName = new CommandInitializeParameter();
            cipErrorEventName.Name = CommandInitializeParameterName.ErrorEventName;
            cipErrorEventName.PlainText = ruleModel.ErrorEventName;
            cipErrorEventName.ValueTypeArt = ElementType.PlainText;
            rule.Command.CommandInitializeParameters.push(cipErrorEventName);        

        }

        //CopyMode 
        if (ruleModel.CopyMode)
        {
            var cipCopyMode = new CommandInitializeParameter();
            cipCopyMode.Name = CommandInitializeParameterName.CopyMode;
            cipCopyMode.PlainText = String(ruleModel.CopyMode);
            // cipCopyMode.ValueTypeArt = ElementType.PlainText;
            rule.Command.CommandInitializeParameters.push(cipCopyMode);
        }

        //IgnoreNullsForCopy
        if (ruleModel.IgnoreNullsForCopy){
            var cipIgnoreNullsForCopy = new CommandInitializeParameter();
            cipIgnoreNullsForCopy.Name = CommandInitializeParameterName.IgnoreNullsForCopy;
            cipIgnoreNullsForCopy.PlainText = "true";
            // cipCopyMode.ValueTypeArt = ElementType.PlainText;
            rule.Command.CommandInitializeParameters.push(cipIgnoreNullsForCopy);
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
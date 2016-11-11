import { TestBed, async } from '@angular/core/testing';
import { NamingProvider } from '../../../../infrastructure/naming.provider';
import { CopyValueCommandTemplate } from './copyValue.command.template';
import { Command, CommandExecuteParameter, CommandInitializeParameter, CommandInitializeParameterName, CommandType, ElementType, PlainTextType } from '../../../../models/command';
import { Rule, RuleCategoryArt,RuleModel } from '../../../../models/rule';

describe('CopyValueCommandTemplateTest',()=>{
    var namingProvider : NamingProvider = new NamingProvider();

    it('SourceIsPlainText', async(()=>{
        var command = new CopyValueCommandTemplate(namingProvider);
        var ruleModel = new RuleModel();
        ruleModel.SourceElementType = ElementType.PlainText;
        var rule = command.execute(ruleModel);
        expect(rule.Command.CommandInitializeParameters[0].ValueTypeArt).toEqual(ElementType.PlainText);
    }));



});
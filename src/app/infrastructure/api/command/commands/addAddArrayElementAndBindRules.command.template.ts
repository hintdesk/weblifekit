import { Injectable } from '@angular/core';

import { NamingProvider } from '../../../../infrastructure/naming.provider';


import { Command, CommandExecuteParameter, CommandInitializeParameter, CommandInitializeParameterName, CommandType, ElementType, PlainTextType } from '../../../../models/command';
import { Rule, RuleCategoryArt ,RuleModel} from '../../../../models/rule';
import { AddArrayElementCommandTemplate } from './addArrayElement.command.template';
import { Condition } from '../../../../models/condition';

@Injectable()
export class AddAddArrayElementAndBindRulesCommand extends AddArrayElementCommandTemplate {

    constructor(namingProvider: NamingProvider) {
        super(namingProvider);
        this.Info = undefined;
    }
    canHandle(ruleModel: RuleModel): boolean {
        return ruleModel.CommandType === CommandType.AddAddArrayElementAndBindRulesCommand;
    }

    execute(ruleModel: RuleModel): Rule {
        return super.execute(ruleModel);
    }
}
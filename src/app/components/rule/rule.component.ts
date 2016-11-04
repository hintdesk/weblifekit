import { Component, OnInit } from '@angular/core';

import { CommandService } from '../../services/command.service';

import { Rule, RuleCategoryArt, RuleModel } from '../../models/rule';
import { Command, CommandType, ElementType, CommandEventType, PlainTextType } from '../../models/command';
import { CommandTemplate} from '../../commands/command.template';


@Component({
    selector: 'rule',
    templateUrl: 'rule.component.html'
})

export class RuleComponent implements OnInit {

    result: string = "";
    commandTemplates: CommandTemplate[];
    commandTypes: CommandType[] = [];
    description:string;
    ruleModel: RuleModel = new RuleModel();


    constructor(
        private commandService: CommandService, ) {
        this.commandTemplates = this.commandService.getCommandTemplates();        
        this.commandTypes = this.commandService.getCommandTypes();

    }

    generate(): void {
        var rule: Rule;
        for (let commandTemplate of this.commandTemplates) {
            if (commandTemplate.canHandle(this.ruleModel)) {
                this.description = commandTemplate.Description;
                rule = commandTemplate.execute(this.ruleModel);
                break;
            }
        }

        this.result = JSON.stringify(rule, undefined, 4);

    }

    ngOnInit(): void {
        
        if (this.commandTypes.length > 0) {
            this.ruleModel.CommandType = this.commandTypes[0];
            this.onCommandTypeChanged(undefined);
        }

    }

    onCommandTypeChanged($event): void {
        
        this.generate();
    }

    onDataChanged($event): void {
        this.generate();
    }

    


}
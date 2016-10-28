import { Component, OnInit } from '@angular/core';

import { CommandService } from '../../services/command.service';

import { Rule, RuleCategoryArt } from '../../models/rule';
import { Command, CommandType, ElementType, EventType, PlainTextType } from '../../models/command';
import { RuleModel } from '../../models/rule.model';


@Component({
    selector: 'rule',
    templateUrl: 'rule.component.html'
})

export class RuleComponent implements OnInit {

    result: string = "";
    commandTypes: CommandType[] = [];
    ruleModel: RuleModel = new RuleModel();
   
    constructor(
        private commandService: CommandService, ) {

    }

    generate(): void {
        var rule: Rule;
        var commandTemplates = this.commandService.getCommandTemplates();
        for (let commandTemplate of commandTemplates) {
            if (commandTemplate.canHandle(this.ruleModel)) {
                rule = commandTemplate.execute(this.ruleModel);
                break;
            }
        }

        this.result = JSON.stringify(rule, undefined, 4);

    }

    ngOnInit(): void {
        this.commandTypes = this.commandService.getCommandTypes();
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

    // onModelDataChanged($event):void {
    //     // this.ruleModel =$event;
    //     this.generate();
    // }


}
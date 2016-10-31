import { Component } from '@angular/core';
import { BaseCommandComponent } from './baseCommand.component';
import { CommandService } from '../../services/command.service';
import { Input, Output, EventEmitter, OnInit } from '@angular/core';
import { RuleModel } from '../../models/rule';

@Component({
    selector: 'setToDefault',
    templateUrl:'setToDefault.component.html'
})

export class SetToDefaultComponent extends BaseCommandComponent {
        @Input()
    ruleModel: RuleModel;

    @Output()
    onDataChanged = new EventEmitter();
    
    constructor(commandService: CommandService) {
        super(commandService);
    }
}
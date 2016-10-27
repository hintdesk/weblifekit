import { Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { BaseCommandComponent } from './baseCommand.component';
import { CommandService } from '../../services/command.service';
import { RuleModel } from '../../models/rule.model';

@Component({
    selector: 'deleteArrayElements',
    templateUrl: 'deleteArrayElements.component.html'
})

export class DeleteArrayElementsComponent extends BaseCommandComponent {
        @Input()
    ruleModel: RuleModel;

    @Output()
    onDataChanged = new EventEmitter();
    
    constructor(commandService: CommandService) {
        super(commandService);
    }
}
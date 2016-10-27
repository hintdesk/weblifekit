import { Component } from '@angular/core';
import { BaseCommandComponent } from './baseCommand.component';
import { CommandService } from '../../services/command.service';
import { EventType } from '../../models/command';
import { Input, Output, EventEmitter, OnInit } from '@angular/core';
import { RuleModel } from '../../models/rule.model';

@Component({
    selector: 'executeApplication',
    templateUrl: 'executeApplication.component.html'
})

export class ExecuteApplicationComponent extends BaseCommandComponent {
        @Input()
    ruleModel: RuleModel;

    @Output()
    onDataChanged = new EventEmitter();

    constructor(commandService: CommandService) {
        super(commandService);
    }

    onEventTypeChanged($event){
        if (this.ruleModel.EventType === EventType.EventDataPath)
            this.ruleModel.EventTypeValue = "change";

        this.onModelDataChanged($event);
    }
}
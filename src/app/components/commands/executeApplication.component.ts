import { Component } from '@angular/core';
import { BaseCommandComponent } from './baseCommand.component';
import { AppContext } from '../../services/app.context';
import { CommandEventType } from '../../models/command';
import { Input, Output, EventEmitter, OnInit } from '@angular/core';
import { RuleModel } from '../../models/rule';

@Component({
    selector: 'executeApplication',
    templateUrl: 'executeApplication.component.html'
})

export class ExecuteApplicationComponent extends BaseCommandComponent {
        @Input()
    ruleModel: RuleModel;

    @Output()
    onDataChanged = new EventEmitter();

     constructor(appContext: AppContext) {
        super(appContext);
    }

    onEventTypeChanged($event){
        if (this.ruleModel.CommandEventType === CommandEventType.EventDataPath)
            this.ruleModel.CommandEventTypeValue = "change";

        this.onModelDataChanged($event);
    }
}
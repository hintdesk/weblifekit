import { Component } from '@angular/core';
import { BaseCommandComponent } from './baseCommand.component';
import { AppContext } from '../../infrastructure/app.context';
import { CommandCopyMode, CommandEventType } from '../../models/command';
import { Input, Output, EventEmitter, OnInit } from '@angular/core';
import { RuleModel } from '../../models/rule';

@Component({
    selector: 'executeApplication',
    templateUrl: 'executeApplication.component.html'
})

export class ExecuteApplicationComponent extends BaseCommandComponent {
        @Input()
    ruleModel: RuleModel;
    eventNameWarning:string;
    synchronousWarning:string;

    @Output()
    onDataChanged = new EventEmitter();

     constructor(appContext: AppContext) {
        super(appContext);
    }

    isEventAndSynchronous() : boolean
    {
        this.eventNameWarning = "";
        this.synchronousWarning = "";
        return this.ruleModel.Synchronous && this.ruleModel.EventName && this.ruleModel.EventName!== "";
    }

    onEventNameChanged($event){        
        if (this.isEventAndSynchronous())
            this.eventNameWarning = this.ResourceText6;
        this.onModelDataChanged($event);
    }

    onSynchronousChanged($event){        
        if (this.isEventAndSynchronous())
            this.synchronousWarning = this.ResourceText6;
        this.onModelDataChanged($event);
    }

    onTargetPropertyChanged($event){
        if (this.ruleModel.TargetProperty === "this")
            this.ruleModel.CopyMode = CommandCopyMode.Properties;

        this.onModelDataChanged($event);
    }


}
import { Component } from '@angular/core';
import { BaseCommandComponent } from './baseCommand.component';
import { CommandService } from '../../services/command.service';
import { CommandEventType } from '../../models/command';
import { Input, Output, EventEmitter, OnInit } from '@angular/core';
import { RuleModel } from '../../models/rule';

@Component({
    selector: 'fireEvent',
    templateUrl: 'fireEvent.component.html'
})

export class FireEventComponent extends BaseCommandComponent {
        @Input()
    ruleModel: RuleModel;

    @Output()
    onDataChanged = new EventEmitter();
    
    eventTypeValueTextPlaceholder:string;

    constructor(commandService: CommandService) {
        super(commandService);
    }

    ngOnInit():void {
        this.eventTypeValueTextPlaceholder = this.TextPlaceholderEventTypeValueDataField;
        super.ngOnInit();
    }
    onEventTypeChanged($event){
        if (this.ruleModel.CommandEventType === CommandEventType.EventDataPath)
            this.ruleModel.EventName = "change";
        
        switch(this.ruleModel.CommandEventType)
        {
            case CommandEventType.EventDataField:
            this.eventTypeValueTextPlaceholder = this.TextPlaceholderEventTypeValueDataField;
            break;
            case CommandEventType.EventDataPath :
            this.eventTypeValueTextPlaceholder = this.TextPlaceholderEventTypeValueDataPath;
            break;
            case CommandEventType.EventTriggerField:
            this.eventTypeValueTextPlaceholder = this.TextPlaceholderEventTypeValueTriggerField;
            break;
            default:
            this.eventTypeValueTextPlaceholder = "";
            break;
        }
        this.onModelDataChanged($event);
    }
}
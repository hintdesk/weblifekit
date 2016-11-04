import { Component, OnInit } from '@angular/core';
import { NamingService } from '../../services/naming.service';
import { EventElement, EventModel, EventType, EventWL } from '../../models/event';
import { ResourceTextService } from '../../services/resourceText.service';

@Component({
    selector: 'event',
    templateUrl: 'event.component.html'
})

export class EventComponent extends ResourceTextService implements OnInit{

    eventModel: EventModel = new EventModel();
    result: string;
    eventTypes: EventType[] = [
        EventType.Change,
        EventType.Changing,
        EventType.Click,
        EventType.CustomEvent,
        EventType.DialogClosed,
        EventType.DialogOpened,
        EventType.EditTableRowSelected,
        EventType.GridShowDetails,
        EventType.KernelIntegrationCalculated,
        EventType.KernelIntegrationCalculationFailed,
        EventType.KernelIntegrationFVCalculated,
        EventType.Message,
        EventType.ModuleModuleReady,
        EventType.ModuleModuleReadyWithVorgang,
        EventType.ModuleModuleReadyWorkdone,
        EventType.ModulePopupModuleClosed,
        EventType.PageBinding,
        EventType.PageBound,
        EventType.PageDisplayed,
        EventType.PageDisplaying,
        EventType.PageDisplayingOnForward,
        EventType.PageLeaving,
        EventType.PageLeavingBackward,
        EventType.PageLeavingForward,
        EventType.ShowPage,
        EventType.ValidatePage
    ];

    constructor(private namingService: NamingService) {
        super();
    }

    

    generate() {
        var eventWL: EventWL = new EventWL();
    
        var eventElement = new EventElement();
        if (this.eventModel.EventType === EventType.Change)
            eventElement.ViewModelFieldPath = this.eventModel.UIField;
        else
            eventElement.UiFieldId = this.eventModel.UIField;
        if (this.eventModel.EventType === EventType.CustomEvent)
            eventElement.EventName = this.eventModel.EventName;
        else 
            eventElement.EventName = String(this.eventModel.EventType);
        eventWL.Events.push(eventElement);        

        this.result = JSON.stringify(eventWL, undefined, 4);
    }

    ngOnInit(){
        this.eventModel.EventType = this.eventTypes[0];
        this.onDataChanged(undefined);
    }

    onDataChanged($event) {
        this.generate();
    }
}
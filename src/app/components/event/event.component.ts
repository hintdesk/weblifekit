import { Component, OnInit } from '@angular/core';
import { NamingProvider } from '../../infrastructure/naming.provider';
import { EventElement, EventModel, EventType, EventWL } from '../../models/event';
import { ResourceTextService } from '../../infrastructure/resourceText.service';

@Component({
    selector: 'event',
    templateUrl: 'event.component.html'
})

export class EventComponent extends ResourceTextService implements OnInit {

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

    constructor(private namingProvider: NamingProvider) {
        super();
    }



    generate() {

        var eventWL: EventWL = new EventWL();
        if (this.eventModel.EventType === EventType.Change) {
            var eventElement = new EventElement();
            if (this.eventModel.IsList) {
                eventWL.Context = "ArrayItemContext";
                eventWL.ListProperty = this.eventModel.ListProperty;
                eventElement.ViewModelFieldPath = this.eventModel.ViewModelFieldPath;
            }
            else {
                eventElement.ViewModelPath = this.eventModel.ViewModelPath;
            }
            eventElement.EventName = String(this.eventModel.EventType);
            eventWL.Events =[];
            eventWL.Events.push(eventElement);
        }
        else {
            var eventElement = new EventElement();
            eventElement.UiFieldId = this.eventModel.UIField;
            if (this.eventModel.EventType === EventType.CustomEvent)
                eventElement.EventName = this.eventModel.EventName;
            else
                eventElement.EventName = String(this.eventModel.EventType);
                        
            eventWL.Events =[];
            eventWL.Events.push(eventElement);
        }

        eventWL.Rules=[{"Name":""}];        
        this.result = JSON.stringify(eventWL, undefined, 4);
    }

    ngOnInit() {
        this.eventModel.EventType = this.eventTypes[0];
        this.onDataChanged(undefined);
    }

    onDataChanged($event) {
        this.generate();
    }

    onEventTypeChanged($event) {
        if (this.eventModel.EventType === EventType.CustomEvent)
            this.eventModel.UIField = "productPages";
        this.onDataChanged($event);
    }
}
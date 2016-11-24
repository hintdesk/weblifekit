import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ResourceTextService } from '../../infrastructure/resourceText.service';
import { EventElement, EventModel, EventType, EventWL } from '../../models/event';

@Component({
    selector: 'defaultevent',
    templateUrl: 'default.event.component.html'
})

export class DefaultEventComponent extends ResourceTextService {
    @Input()
    eventModel: EventModel;

    @Output()
    onDataChanged = new EventEmitter();

    onModelDataChanged($event): void {
        this.onDataChanged.emit($event);
    }
}
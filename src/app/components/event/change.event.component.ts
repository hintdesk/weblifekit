import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ResourceTextService } from '../../infrastructure/resourceText.service';
import { ChangeEventType, EventElement, EventModel, EventType, EventWL } from '../../models/event';

@Component({
    selector: 'changeevent',
    templateUrl: 'change.event.component.html'
})

export class ChangeEventComponent extends ResourceTextService implements OnInit {
    @Input()
    eventModel: EventModel;

    @Output()
    onDataChanged = new EventEmitter();

    changeEventTypes: string[] = [ChangeEventType.List, ChangeEventType.ViewModelPath];

    ngOnInit() {
        this.eventModel.ChangeEventType = ChangeEventType.ViewModelPath;
    }

    onModelDataChanged($event): void {
        this.onDataChanged.emit($event);
    }
}
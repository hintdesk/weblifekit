import { EventModel, EventType } from '../../models/event';
import { NamingProvider } from '../../infrastructure/naming.provider';
import { EventComponent } from './event.component';
import { async, inject, TestBed } from '@angular/core/testing';
describe('EventComponentTest',()=>{
    beforeEach(()=>{
        TestBed.configureTestingModule({
            providers:[NamingProvider]
        });
    });

    it('generateWithEventChange', async(inject([NamingProvider],(namingProvider: NamingProvider)=>{
            var eventComponent = new EventComponent(namingProvider);
            eventComponent.eventModel = new EventModel();
            eventComponent.eventModel.ViewModelFieldPath = "BerechenungsEingaben.HauptTarif";
            eventComponent.eventModel.EventType = EventType.Change;
            eventComponent.generate();
            expect(eventComponent.result.indexOf("ViewModelFieldPath")>0).toEqual(true);
        }
    )));

});
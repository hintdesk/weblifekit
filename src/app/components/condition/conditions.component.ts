import { Component, OnInit } from '@angular/core';
import { ConditionModel } from '../../models/condition.model';

@Component({
    selector: 'conditions',
    templateUrl: 'conditions.component.html'
})

export class ConditionsComponent {
    conditionModelLeft: ConditionModel = new ConditionModel();
    result:string;
}
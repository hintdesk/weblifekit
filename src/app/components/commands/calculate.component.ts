import { Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { BaseCommandComponent } from './baseCommand.component';
import { AppContext } from '../../infrastructure/app.context';
import { RuleModel } from '../../models/rule';

@Component({
    selector: 'calculate',
    templateUrl: 'calculate.component.html'
})

export class CalculateComponent extends BaseCommandComponent {
    @Input()
    ruleModel: RuleModel;

    @Output()
    onDataChanged = new EventEmitter();

     constructor(appContext: AppContext) {
        super(appContext);
    }
}
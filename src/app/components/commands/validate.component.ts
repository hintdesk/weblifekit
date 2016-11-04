import { Component } from '@angular/core';
import { BaseCommandComponent } from './baseCommand.component';
import { AppContext } from '../../services/app.context';
import { Input, Output, EventEmitter, OnInit } from '@angular/core';
import { RuleModel } from '../../models/rule';

@Component({
    selector: 'validate',
    templateUrl: 'validate.component.html'
})

export class ValidateComponent extends BaseCommandComponent {
    @Input()
    ruleModel: RuleModel;

    @Output()
    onDataChanged = new EventEmitter();

    constructor(appContext: AppContext) {
        super(appContext);
    }

    onUIFieldChanged($event) {
        this.ruleModel.StateTable = this.ruleModel.UIField + ".Validation";
        this.onModelDataChanged($event);
    }
}
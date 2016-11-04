import { Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { BaseCommandComponent } from './baseCommand.component';
import { AppContext } from '../../services/app.context';
import { RuleModel } from '../../models/rule';

@Component({    
    selector: 'actionCommand',
    templateUrl: 'actionCommand.component.html'
})

export class ActionCommandComponent extends BaseCommandComponent {
    @Input()
    ruleModel: RuleModel;

    @Output()
    onDataChanged = new EventEmitter();

     constructor(appContext: AppContext) {
        super(appContext);
    }
}
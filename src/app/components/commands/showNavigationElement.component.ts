import { Component } from '@angular/core';
import { BaseCommandComponent } from './baseCommand.component';
import { AppContext } from '../../infrastructure/app.context';
import { Input, Output, EventEmitter, OnInit } from '@angular/core';
import { RuleModel } from '../../models/rule';

@Component({
    selector: 'showNavigationElement',
    templateUrl:'showNavigationElement.component.html'
})

export class ShowNavigationElementComponent extends BaseCommandComponent {
        @Input()
    ruleModel: RuleModel;

    @Output()
    onDataChanged = new EventEmitter();

  constructor(appContext: AppContext) {
        super(appContext);
    }
}
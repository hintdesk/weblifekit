import { Component } from '@angular/core';
import { BaseCommandComponent } from './baseCommand.component';
import { AppContext } from '../../services/app.context';
import { Input, Output, EventEmitter, OnInit } from '@angular/core';
import { RuleModel } from '../../models/rule';

@Component({
    selector: 'setErrorInErrorProviderAndNotify',
    templateUrl: 'setErrorInErrorProviderAndNotify.component.html'
})

export class SetErrorInErrorProviderAndNotifyComponent extends BaseCommandComponent {
        @Input()
    ruleModel: RuleModel;

    @Output()
    onDataChanged = new EventEmitter();
    
     constructor(appContext: AppContext) {
        super(appContext);
    }
}